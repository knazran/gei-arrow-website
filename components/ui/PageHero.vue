<template>
  <div class="h-96 backdrop-opacity-70" :style="backgroundImage">
    <div class="flex justify-end container mx-auto h-full">
      <div
        class="
          w-full
          md:w-1/2
          h-full
          flex flex-col
          justify-items-center justify-center
          bg-gray-600 bg-opacity-70
          px-6
        "
      >
        <h2 class="text-white text-lg mb-6 font-semibold">{{ title }}</h2>
        <h3 class="text-white text-xl leading-relaxed mb-4">
          {{ description }}
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    bgImage: {
      type: String,
      default: 'kid-hero.jpg',
    },
  },
  computed: {
    backgroundImage() {
      const url = `../assets/img/${this.bgImage}`
      const imgUrl = new URL(url, import.meta.url).href
      return { 'background-image': `url(${imgUrl})` }
    },
  },
}
</script>