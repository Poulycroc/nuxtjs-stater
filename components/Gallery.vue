<template>
  <div
    class="container mx-auto space-y-2 lg:space-y-0 lg:gap-2 lg:grid lg:grid-cols-3"
  >
    <div class="w-full rounded" v-for="(item, i) in items" :key="i">
      <div
        class="p-4 max-w-md bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700"
      >
        <img :src="item.url" alt="image" />

        <div v-if="showDetails">
          <div class="flex items-center space-x-4 mt-5">
            <div class="flex-shrink-0">
              <img
                class="w-8 h-8 rounded-full"
                :src="`https://joeschmoe.io/api/v1/${item.user.email}`"
                :alt="item.user.name"
              />
            </div>
            <div class="flex-1 min-w-0">
              <p
                class="text-sm font-medium text-gray-900 truncate dark:text-white"
              >
                {{ item.user.name }}
              </p>
              <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                {{ item.user.email }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GalleryComponent',
  props: {
    items: {
      type: Array,
      required: true,
      default: () => [],
    },
    showDetails: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
}
</script>
