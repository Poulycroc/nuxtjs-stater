<template>
  <div class="page--wrapper-component">
    <header class="bg-white shadow">
      <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold leading-tight text-gray-900">
          {{ title }}
        </h1>
      </div>
    </header>
    <main>
      <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <slot />
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'PageComponent',
  props: {
    title: {
      type: String,
      required: false,
      default: 'Page',
    },
  },
}
</script>
