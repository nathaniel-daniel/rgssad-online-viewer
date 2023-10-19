<script>
  import { createEventDispatcher } from "svelte";

  export let fileNode = null;

  const dispatch = createEventDispatcher();

  let open = false;

  function toggleOpen() {
    open = !open;
  }

  function triggerSelectedFileNode() {
    dispatch("selected-file-node", fileNode);
  }
</script>

{#if fileNode.path === ""}
  <ol>
    {#each fileNode.iterChildren() as fileNode}
      <svelte:self {fileNode} />
    {/each}
  </ol>
{:else}
  <li>
    {#if fileNode.isFile}
      <button
        style="padding-left: {fileNode.depth()}rem;"
        on:click={triggerSelectedFileNode}>{fileNode.name()}</button
      >
    {:else}
      <button style="padding-left: {fileNode.depth()}rem;" on:click={toggleOpen}
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
{/if}

<style>
  button {
    background-color: transparent;
    border: 0;
    color: white;
    cursor: pointer;
    font-size: 1rem;
    text-align: start;
    width: 100%;
  }

  button:hover {
    background-color: var(--color-3);
  }

  ol {
    display: flex;
    flex-direction: column;
    list-style: none;
    margin: 0;
    padding: 0;
  }
</style>
