<template>
  <section class="section">
    <div class="container">
      <h1 class="title">
        Assets
      </h1>
    </div>

    <div class="container">
      <div class="notification">
        <h2>Webpacked &lt;img&gt; tag </h2>
        <img src="~/assets/images/nuxt.png">
      </div>

      <div class="notification">
        <h2>Webpacked css background image </h2>
        <div class="nuxt-logo"></div>
      </div>

      <div class="notification">
        <h2>Static &lt;img&gt; tag </h2>
        <img src="/nuxt.png"/>
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
