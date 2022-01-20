<template>
  <div class="flex flex-col items-center md:items-start">
    <h3
      class="
        text-3xl
        md:text-4xl
        text-mau-purple-700
        font-semibold
        tracking-wider
        text-center
        md:text-left
      "
    >
      {{ title }}
    </h3>
    <p
      class="
        text-lg text-mau-purple-600
        mb-4
        font-light
        text-center
        md:text-left
      "
    >
      {{ description }}
    </p>
    <div class="rounded-full bg-mau-secondary-500 w-24 h-1"></div>
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
      default: '',
    },
  },
}
</script>
