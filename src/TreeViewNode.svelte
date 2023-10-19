<script>
  import { createEventDispatcher } from "svelte";

  export let fileNode = null;

  const dispatch = createEventDispatcher();

  let open = false;

  function toggleOpen() {
    open = !open;
  }
</script>

{#if fileNode.path === ""}
  <ol style="padding: 0;">
    {#each fileNode.iterChildren() as fileNode}
      <svelte:self {fileNode} />
    {/each}
  </ol>
{:else}
  <li>
    {#if fileNode.isFile}
      <button style="padding-left: {fileNode.depth()}rem;"
        >{fileNode.name()}</button
      >
    {:else}
      <button on:click={toggleOpen} style="padding-left: {fileNode.depth()}rem;"
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
