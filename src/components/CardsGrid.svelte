<script>
  import Card from "../components/Card.svelte";
  export let Data = [];
</script>

<ul class="link-card-grid">
  {#each Data as entry}
    <Card href={entry.href} title={entry.title} body={entry.body} />
  {/each}
</ul>

<style>
  .link-card-grid {
    /* max-width: 80ch; */
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(35ch, 1fr));
    gap: 1rem;
    padding: 1rem;
  }
</style>
