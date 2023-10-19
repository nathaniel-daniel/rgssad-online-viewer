<script>
  import * as rgssad from "rgssad-wasm";
  import * as zip from "@zip.js/zip.js";

  import FileNode from "./FileNode.js";

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
      const fileNode = new FileNode({
        name: entry.fileName,
        isFile: true,
        data: entry.data,
      });

      fileTree.addChild(fileNode);
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
    stack.push(rootNode);
    while (stack.length !== 0) {
      const fileNode = stack.pop();
      if (fileNode.isFile) {
        const reader = new zip.Uint8ArrayReader(fileNode.data);
        await zipWriter.add(fileNode.name, reader);
      } else {
        for (const child of fileNode.children.values()) {
          stack.push(child);
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
