<template>
  <div class="container mx-auto md:flex my-8 md:my-18">
    <div v-if="!reverse" class="w-full md:w-1/2 px-6 mb-4 md:mb-0">
      <slot name="default"></slot>
    </div>
    <div class="w-full md:w-1/2 px-6 md:px-12 flex flex-col">
      <img
        v-if="img !== ''"
        class="w-full object-contain min-h-0 max-h-96 rounded-lg"
        :src="img"
      />
      <slot name="media"></slot>
    </div>
    <div v-if="reverse" class="w-full md:w-1/2 px-6 mb-4 md:mb-0">
      <slot name="default"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      default: '',
    },
    reverse: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    sectionImage() {
      const imgUrl = new URL(`../../static/img/${this.img}`, import.meta.url)
      return imgUrl
    },
  },
}
</script>