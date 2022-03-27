<template>
  <main>
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
