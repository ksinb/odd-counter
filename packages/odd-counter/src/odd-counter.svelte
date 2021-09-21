<script>
  export let count;

  function handleClick() {
    count += 1;
  }
</script>

<button on:click={handleClick}>count: {count}</button>

<style>
  button {
    height: 100px;
    width: 100px;
  }
</style>
