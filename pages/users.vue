<template>
  <section class="section">
    <div class="container">
      <h1 class="title">
        Users
      </h1>
      <nuxt-child/>
    </div>

    <footer class="footer">
      <div class="container">
        <div class="content has-text-centered">
          <p>
            <strong>Testing footer</strong>

            <nuxt-link class="footer-link" to="/">
              <i class="fa fa-home" aria-hidden="true"></i>
            </nuxt-link>
            <nuxt-link class="footer-link" to="/users/">index</nuxt-link>
            <nuxt-link class="footer-link" to="/users/one">one</nuxt-link>
            <nuxt-link class="footer-link" to="/users/12">12</nuxt-link>
          </p>
        </div>
      </div>
    </footer>
  </section>
</template>

<script>
  export default {
    transition: 'user'
  }
</script>

<style>

</style>
