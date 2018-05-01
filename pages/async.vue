<template>
  <section class="section">
    <div class="container">
      <h1 class="title">
        Async
      </h1>
      <p class="subtitle">
        {{ title }}
      </p>
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
    asyncData ({ app }, callback) {
      app.$axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then((res) => {
          callback(null, { title: res.data.title })
        })
    }
  }
</script>

<style>

</style>
