<template>
  <button
    class="
      rounded-lg
      bg-gei-tertiary-500
      text-center text-white
      xl:w-72
      w-64
      py-2
      transform hover:scale-105
    "
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  props: {
    text: String,
  },
}
</script>
