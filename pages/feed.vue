<template lang="pug">

  page(title="Feed")
    section
      gallery(:items="itemsList" show-details)


</template>

<script>
import Page from '~/components/Page'
import ResumeCard from '~/components/ResumeCard'
import Gallery from '~/components/Gallery'

export default {
  name: 'IndexPage',
  components: { Page, ResumeCard, Gallery },
  data() {
    return {
      itemsList: [],
    }
  },
  async fetch() {
    this.itemsList = await this.$axios.$get('v1/files')
  },
}
</script>
