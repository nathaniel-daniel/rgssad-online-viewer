<script>
  import * as rgssad from "rgssad-wasm";
  import * as zip from "@zip.js/zip.js";

  import FileNode from "./FileNode.js";

  import TreeViewNode from "./TreeViewNode.svelte";

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
      path: "",
      isFile: false,
    });
    for (
      let entry = reader.readEntry();
      entry != null;
      entry = reader.readEntry()
    ) {
      const fileNode = new FileNode({
        path: entry.fileName,
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

    for (const fileNode of rootNode.iterDfs()) {
      if (fileNode.isFile) {
        const reader = new zip.Uint8ArrayReader(fileNode.data);
        await zipWriter.add(fileNode.path, reader);
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
  <div class="viewer-container">
    <div class="viewer-bar">
      <button on:click={downloadZip}>Export Zip</button>
    </div>
    <div class="viewer-main-container">
      <div class="tree-view">
        Tree View
        <TreeViewNode fileNode={rootNode} />
      </div>
      <div class="file-preview">{rootNode}</div>
    </div>
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

  .viewer-container {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  .viewer-bar {
    background-color: var(--color-2);
    margin-bottom: 0.2rem;
  }

  .viewer-bar button {
    color: white;
    background-color: var(--color-2);
    border: 0;
    font-size: 1.1rem;
    padding: 0.2rem;
  }

  .viewer-bar button:hover {
    background-color: var(--color-3);
  }

  .viewer-main-container {
    display: flex;
    flex-grow: 1;
    flex-direction: row;
    gap: 0.2rem;
    overflow-y: hidden;
  }

  .viewer-main-container .tree-view {
    background-color: var(--color-2);
    display: flex;

    flex-direction: column;
    padding: 0.2rem;
    overflow-y: auto;
    width: 15vw;
  }

  .viewer-main-container .file-preview {
    background-color: var(--color-2);
    flex-grow: 1;
  }
</style>
