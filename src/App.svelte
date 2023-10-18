<script>
  import * as rgssad from "rgssad-wasm";
  import * as zip from "@zip.js/zip.js";

  let rootNode = null;
  let fileName = null;

  function handleArchiveInputDrop(event) {
    const items = event.dataTransfer.items;

    if (!items) {
      return;
    }

    if (items.length !== 1) {
      alert("Expected only one file");
      return;
    }

    const item = items[0];

    if (item.kind !== "file") {
      alert("Only files are supported");
      return;
    }

    const file = item.getAsFile();

    loadArchiveFromFile(file).catch(alert);
  }

  function handleArchiveInputChange(event) {
    const input = event.target;
    if (input.files.length !== 1) {
      alert("Expected only one file");
      return;
    }

    const file = input.files[0];

    loadArchiveFromFile(file).catch(alert);
  }

  class FileNode {
    constructor({ name, isFile, data = null }) {
      if (name === undefined || name === null) {
        throw new Error("Missing `name`");
      }

      if (isFile === undefined || isFile === null) {
        throw new Error("Missing `isFile`");
      }

      this.name = name;
      this.isFile = isFile;
      this.children = null;
      this.data = null;

      if (isFile) {
        if (data === undefined || data === null) {
          throw new Error("Missing `data`");
        }
        this.data = data;
      } else {
        this.children = new Map();
      }
    }

    addChild(path, fileNode) {
      if (this.isFile) {
        throw new Error("cannot add child to file");
      }

      const [name, ...pathTail] = path.split("\\");

      if (pathTail.length === 0) {
        fileNode.name = name;

        if (name === "Animations") console.log(fileNode);

        if (this.children.has(name)) {
          throw new Error("duplicate file node");
        }

        this.children.set(name, fileNode);
      } else {
        if (!this.children.has(name)) {
          const fileNode = new FileNode({
            name,
            isFile: false,
          });
          this.children.set(name, fileNode);
        }

        this.children.get(name).addChild(pathTail.join("\\"), fileNode);
      }
    }
  }

  async function loadArchiveFromFile(file) {
    const arrayBuffer = await file.arrayBuffer();
    const reader = new rgssad.Reader(arrayBuffer);

    const fileTree = new FileNode({
      name: "",
      isFile: false,
    });
    for (
      let entry = reader.readEntry();
      entry != null;
      entry = reader.readEntry()
    ) {
      const fileName = entry.fileName;

      const fileNode = new FileNode({
        name: "",
        isFile: true,
        data: entry.data,
      });

      fileTree.addChild(fileName, fileNode);
    }

    rootNode = fileTree;
    fileName = file.name;

    console.log(rootNode);
  }

  async function downloadZip() {
    if (rootNode === null) {
      throw Error("archive has not been loaded");
    }

    const zipFileWriter = new zip.BlobWriter();
    const zipWriter = new zip.ZipWriter(zipFileWriter);

    const stack = [];
    stack.push(["", rootNode]);
    while (stack.length !== 0) {
      const [path, node] = stack.pop();
      if (node.isFile) {
        const reader = new zip.Uint8ArrayReader(node.data);
        await zipWriter.add(path, reader);
      } else {
        for (const child of node.children.values()) {
          let newPath = path;
          if (newPath.length !== 0) {
            newPath += "\\";
          }
          newPath += child.name;
          stack.push([newPath, child]);
        }
      }
    }
    const zipFileBlob = await zipWriter.close();

    const a = document.createElement("a");
    a.href = window.URL.createObjectURL(zipFileBlob);
    a.download = fileName + ".zip";
    a.click();
  }
</script>

{#if rootNode !== null}
  <div>
    <div>
      <button on:click={downloadZip}>Download Zip</button>
    </div>
    {rootNode}
  </div>
{:else}
  <div class="archive-input-container">
    <label
      for="archive-input"
      class="archive-input-label"
      on:dragover|preventDefault
      on:drop|preventDefault={handleArchiveInputDrop}
    >
      Upload Archive
    </label>
    <input
      type="file"
      id="archive-input"
      name="archive-input"
      accept=".rgssad,.rgss2a"
      on:change={handleArchiveInputChange}
    />
  </div>
{/if}

<style>
  .archive-input-container {
    background-color: var(--color-2);
    border-radius: 0.5rem;
    display: flex;
    flex-grow: 1;
    justify-content: center;
    margin: 0.5rem;
    padding: 0.5rem;
  }

  #archive-input {
    display: none;
  }

  .archive-input-label {
    align-items: center;
    border: 0.5rem dashed white;
    border-radius: 0.5rem;
    box-sizing: border-box;
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    height: 100%;
    text-align: center;
    font-size: 1.5rem;
  }
</style>
