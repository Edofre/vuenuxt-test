<template>
  <section class="section">
    <div class="container">
      <h1 class="title">
        User
      </h1>
      <p class="subtitle">
        {{ test }}
        {{ $route.params.id }}
      </p>
    </div>
  </section>
</template>

<script>
  export default {
    data: function () {
      return {
        test: 'Test',
      }
    },
    validate({params}) {
      // Must be a number
      return /^\d+$/.test(params.id)
    },
  }
</script>

<style>

</style>
