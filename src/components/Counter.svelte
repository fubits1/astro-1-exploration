<script>
  export let count = 0;
</script>

<div>
  <button on:click={() => count--}>-</button>
  <code style="font-size: {22 + count}px">{count}</code>
  <button on:click={() => count++}>+</button>
</div>

<style>
  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  button {
    margin: 0 1rem;
    width: 40px;
  }

  code {
    font-weight: 700;
  }
</style>
