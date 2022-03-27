<template>
  <div class="default-layout-container--wrapper-component">
    <MainNav />
    <nuxt />
  </div>
</template>

<script>
import MainNav from '~/components/MainNav'

export default {
  name: 'DefaultLayout',
  components: { MainNav },
}
</script>
