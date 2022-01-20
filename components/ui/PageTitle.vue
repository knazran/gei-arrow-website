<template>
  <div class="flex flex-col items-center md:items-start">
    <h3
      class="
        text-xl
        2xl:text-2xl
        text-gei-primary-500
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
        text-md text-gei-primary-500
        mb-4
        font-light
        text-center
        md:text-left
      "
    >
      {{ description }}
    </p>
    <div
      v-if="center"
      class="rounded-full mx-20 text-gei-tertiary-500 w-24 h-1"
    ></div>

    <div v-else class="rounded-full text-gei-tertiary-500 w-24 h-1"></div>
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
    center: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
