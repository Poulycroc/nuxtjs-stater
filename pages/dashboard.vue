<template lang="pug">

  page(title="Dashboard")

    input(
      type="file",
      ref="file",
      style="display: none"
      @change="handleFileUploadChange"
    )

    section
      .px-4.py-6(class="sm:px-0")
        .flex.items-center.justify-between
          h5 <small>hi</small> {{ $auth.$state.user.name }}

          button.bg-blue.text-white.font-bold.py-2.px-4.rounded(
            type="button"
            class="hover:bg-blue-dark"
            @click="$refs.file.click()"
          )
            | Ajouter une image

      .px-4.py-6(class="sm:px-0")
        resume-card(:count="itemsList.length")

    section
      gallery(:items="itemsList")


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
      payload: {},
    }
  },
  async fetch() {
    const { id } = this.$auth.$state.user
    const path = `v1/files/${id}`
    this.itemsList = await this.$axios.$get(path)
  },
  methods: {
    async handleFileUploadChange($event) {
      const file = $event.target.files[0]
      const formData = new FormData()
      formData.append('image', file, file.name)
      await this.$axios.$post('v1/upload', formData)
      this.$fetch()
    },
  },
}
</script>
