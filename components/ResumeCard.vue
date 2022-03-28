<template>
  <div class="shadow rounded-lg py-3 px-5 bg-white">
    <div class="flex flex-row justify-between items-center">
      <div>
        <h6 class="text-2xl">Images uploaded</h6>
        <h4 class="text-black text-4xl font-bold text-left">
          {{ count }}
        </h4>
      </div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-12 w-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#14B8A6"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ResumeCardComponent',
  props: {
    count: {
      type: Number,
      required: false,
      default: 0,
    },
  },
}
</script>
