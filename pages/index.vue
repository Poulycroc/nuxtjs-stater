<template>
  <main>
    <section>
      <nuxt-link to="/login">login</nuxt-link>
      <nuxt-link to="/secret">secret</nuxt-link>
    </section>
    <section>
      <Tutorial />
    </section>
  </main>
</template>

<script>
import Tutorial from '~/components/Tutorial'

export default {
  name: 'IndexPage',
  components: { Tutorial },
  auth: false,
}
</script>
