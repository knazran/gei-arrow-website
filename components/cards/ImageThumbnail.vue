<template>
  <div
    class="
      rounded-lg
      shadow-lg
      bg-gray-600
      w-full
      h-80
      p-3
      antialiased
      opacity-80
      hover:opacity-100
    "
    style="
      background-repeat: no-repeat;
      background-size: cover;
      background-blend-mode: overlay;
    "
    :style="{ backgroundImage: 'url(' + img + ')' }"
  >
    <div class="flex justify-center items-center h-full">
      <p class="text-white text-center font-semibold text-2xl md:text-4xl">{{ title }}</p>
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
    img: {
      type: String,
      default: '',
    },
  },
}
</script>
