<script>
  import * as zip from "@zip.js/zip.js";

  import LoadArchiveView from "./LoadArchiveView.svelte";
  import TreeViewNode from "./TreeViewNode.svelte";

  let rootNode = null;
  let fileName = null;
  let activeFileNode = null;

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

  function handleSelectedFileNode(event) {
    activeFileNode = event.detail;
  }

  function handlePreviewImageLoad(event) {
    const img = event.target;
    img.width = img.naturalWidth;
    img.height = img.naturalHeight;
    img.style["aspect-ratio"] = `${img.naturalWidth} / ${img.naturalHeight}`;
  }

  function fileNodeIsImage(fileNode) {
    return (
      fileNode.path.endsWith(".png") ||
      fileNode.path.endsWith(".jpg") ||
      fileNode.path.endsWith(".bmp")
    );
  }

  function getFileNodeMimeType(fileNode) {
    if (fileNode.path.endsWith(".png")) {
      return "image/png";
    }

    if (fileNode.path.endsWith(".jpg")) {
      return "image/jpeg";
    }

    if (fileNode.path.endsWith(".bmp")) {
      return "image/bmp";
    }

    return null;
  }

  function handleNewRootNode(event) {
    fileName = event.detail.fileName;
    rootNode = event.detail.fileNode;
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
        <TreeViewNode
          fileNode={rootNode}
          on:selected-file-node={handleSelectedFileNode}
        />
      </div>
      <div class="file-preview">
        <div class="file-preview-header">
          {"Current: " + (activeFileNode ? activeFileNode.path : "None")}
        </div>
        {#if activeFileNode}
          {#if fileNodeIsImage(activeFileNode)}
            {@const imgSrc = URL.createObjectURL(
              new Blob([activeFileNode.data], {
                type: getFileNodeMimeType(activeFileNode),
              }),
            )}
            <img
              class="preview-image"
              src={imgSrc}
              on:load={handlePreviewImageLoad}
              alt="preview for {activeFileNode.path}"
            />
          {:else}
            <div class="unknown-file-type">
              Unknown File Type: {activeFileNode.name()}
            </div>
          {/if}
        {/if}
      </div>
    </div>
  </div>
{:else}
  <LoadArchiveView on:load={handleNewRootNode} />
{/if}

<style>
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
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    padding: 0.2rem;
  }

  .file-preview-header {
    width: 100%;
  }

  .preview-image {
    margin: auto;
    max-height: 90%;
    max-width: 90%;
    width: auto;
    height: auto;
  }

  .unknown-file-type {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
  }
</style>
