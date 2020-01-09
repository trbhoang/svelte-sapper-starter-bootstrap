<svelte:head>
  <title>Sapper project template</title>
</svelte:head>

<div class="text-center">
  <h1 class="mb-5 text-primary">Great success!</h1>

  <figure>
    <img alt="Borat" src="great-success.png" class="img-fluid" />
    <figcaption>HIGH FIVE!</figcaption>
  </figure>

  <p class="p-4">
    <strong>
      Try editing this file (src/routes/index.svelte) to test live reloading.
    </strong>
  </p>
</div>

<style lang="scss">
  h1 {
    font-family: $bungee;
    font-size: 2.8em;
    text-transform: uppercase;
  }
  p {
    color: lighten($svelte, 65%);
    strong {
      padding: 1rem;
      background: $svelte;
      border: 2px solid $svelte, 65%;
    }
  }
  img {
    max-width: 400px;
  }
  @media (min-width: 480px) {
    h1 {
      font-size: 4em;
    }
  }
</style>
