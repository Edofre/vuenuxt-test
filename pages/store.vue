<template>
  <section class="section">
    <div class="container">
      <h1 class="title">
        Store
      </h1>
    </div>

    <button @click="$store.commit('increment')">{{ $store.state.counter }}</button>

    <footer class="footer">
      <div class="container">
        <div class="content has-text-centered">
          <p>
            <strong>Testing footer</strong>
            <nuxt-link class="footer-link" to="/">
              <i class="fa fa-home" aria-hidden="true"></i>
            </nuxt-link>
          </p>
        </div>
      </div>
    </footer>
  </section>
</template>

<script>
</script>

<style>

</style>
