<template>
  <p class="subtitle">
    {{ test }}
    {{ $route.params.id }}
  </p>
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
    transition: 'user'
  }
</script>

<style>

</style>
