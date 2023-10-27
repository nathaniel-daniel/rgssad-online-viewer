<script>
  import * as rgssad from "rgssad-wasm";
  import { createEventDispatcher } from "svelte";

  import FileNode from "./FileNode.js";

  const dispatch = createEventDispatcher();

  function handleInputDrop(event) {
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

  function handleInputChange(event) {
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

    dispatch("load", {
      fileName: file.name,
      fileNode: fileTree,
    });
  }
</script>

<div class="container">
  <h1>RGSSAD Online Viewer</h1>
  <label
    for="archive-input"
    class="input-label"
    on:dragover|preventDefault
    on:drop|preventDefault={handleInputDrop}
  >
    Upload Archive
  </label>
  <input
    type="file"
    id="archive-input"
    name="archive-input"
    accept=".rgssad,.rgss2a"
    on:change={handleInputChange}
  />
</div>

<style>
  .container {
    background-color: var(--color-2);
    border-radius: 0.5rem;
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    justify-content: center;
    margin: 0.5rem;
    padding: 0.5rem;
  }

  #archive-input {
    display: none;
  }

  .input-label {
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
