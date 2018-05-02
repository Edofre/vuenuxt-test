<template>
  <section class="section">
    <div class="container">
      <h1 class="title">
        Assets
      </h1>
    </div>

    <div class="container">
      <div class="notification">
        <img src="~/assets/images/nuxt.png">
      </div>

      <div class="notification">
        <div class="nuxt-logo"></div>
      </div>

    </div>

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
  export default {
    data: function () {
      return {
        title: 'Test',
      }
    },
  }
</script>

<style>

</style>
