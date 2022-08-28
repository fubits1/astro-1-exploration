<script>
  export let href;
  export let title;
  export let body;
  import srcset from "../assets/img/ricardo-gomez-angel-7bzbyafVTYg-unsplash.1200px.min.jpg?w=200;400;600";
</script>

<!-- {Object.keys(Astro.props).map((entry) => entry + "; ")}
{`Astro.props.class: ${Astro.props.class}`} -->
<li class="link-card">
  <a {href}>
    <h2>
      {title}
      <span>&rarr;</span>
    </h2>
    <img {srcset} alt="srcset" />
    <p>
      {body}
    </p>
  </a>
</li>

<style>
  :root {
    --link-gradient: linear-gradient(
      45deg,
      #4f39fa,
      #da62c4 30%,
      var(--color-border) 60%
    );
  }

  .link-card {
    height: 400px;
    list-style: none;
    display: flex;
    padding: 0.15rem;
    background-image: var(--link-gradient);
    background-size: 400%;
    border-radius: 0.5rem;
    background-position: 100%;
    transition: background-position 0.6s cubic-bezier(0.22, 1, 0.36, 1);
  }

  .link-card > a {
    width: 100%;
    text-decoration: none;
    line-height: 1.4;
    padding: 1em 1.3em;
    border-radius: 0.35rem;
    color: var(--text-color);
    background-color: white;
    opacity: 0.8;
    position: relative;
  }

  h2 {
    margin: 0;
    transition: color 0.6s cubic-bezier(0.22, 1, 0.36, 1);
  }

  p {
    margin-top: 0.75rem;
    margin-bottom: 0;
  }

  h2 span {
    display: inline-block;
    transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
  }

  .link-card:is(:hover, :focus-within) {
    background-position: 0;
  }

  .link-card:is(:hover, :focus-within) h2 {
    color: #4f39fa;
  }

  .link-card:is(:hover, :focus-within) h2 span {
    will-change: transform;
    transform: translateX(2px);
  }

  img {
    max-width: 100%;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    border-radius: 0 0 0.5rem 0.5rem;
  }
</style>
