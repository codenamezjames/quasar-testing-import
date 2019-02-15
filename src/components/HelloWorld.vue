<template>
  <div>
    Hello World {{color}}
  </div>
</template>

<script>
import { colors } from 'quasar'
export default {
  computed: {
    color () { return colors.getBrand('secondary') }
  }
}
</script>

<style>

</style>
