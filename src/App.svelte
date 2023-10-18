<script>
  let files = null;

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

    try {
        loadArchiveFromFile(file);
    } catch(error) {
        alert(error);
        return;
    }
  }

  function handleArchiveInputChange(event) {
    const input = event.target;
    if(input.files.length !== 1) {
        alert("Expected only one file");
        return;
    }
    
    const file = input.files[0];
    
    try {
        loadArchiveFromFile(file);
    } catch(error) {
        alert(error);
        return;
    }
  }
  
  function loadArchiveFromFile(file) {
    console.log(file);
  }
</script>

{#if files !== null}
  {files}
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
