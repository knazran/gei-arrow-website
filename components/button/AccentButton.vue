<template>
  <button
    class="
      rounded-lg
      bg-mau-secondary-900
      text-center text-white
      w-32
      py-1
      mx-2
      hover:font-bold
      transform hover:scale-105
    "
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
  },
}
</script>