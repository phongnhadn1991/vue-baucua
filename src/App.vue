<template>
  <div id="app">
    <ContainerGame />
  </div>
</template>

<script>
import ContainerGame from '@/components/Game/ContainerGame.vue'
export default {
  name: 'App',
  components: {
    ContainerGame
  }
}
</script>

<style lang="scss">
 @import './assets/css/reset.css';
@import './assets/scss/style.scss';
</style>
