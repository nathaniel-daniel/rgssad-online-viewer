<script>
  export let fileNode = null;

  let open = false;

  function toggleOpen() {
    open = !open;
  }
</script>

<li>
  {#if fileNode.isFile}
    {fileNode.name()}
  {:else}
    <button on:click={toggleOpen}
      >{#if open}-{:else}+{/if}
      {fileNode.name()}</button
    >
    <ol>
      {#if open}
        {#each fileNode.iterChildren() as fileNode}
          <svelte:self {fileNode} />
        {/each}
      {/if}
    </ol>
  {/if}
</li>

<style>
  button {
    background-color: transparent;
    border: 0;
    color: white;
    cursor: pointer;
    font-size: 1rem;
  }
  ol {
    list-style: none;
    margin: 0;
    padding-left: 1rem;
  }
</style>
