<template>
  <div>
    <div v-if="!long" class="2xl:mx-14 xl:mx-8 sm:mx-14 mx-8">
      <button
        class="
          rounded-lg
          bg-mau-secondary-900
          text-center text-white
          w-40
          py-1
          mx-2
          text-xs
          xl:text-base
          hover:font-bold
          hover:bg-mau-secondary-950
          transform hover:scale-105
        "
      >
        {{ text }}
      </button>
    </div>
    <div v-if="long" class="2xl:mx-7 xl:mx-2 sm:mx-10 mx-4 lg:mx-10">
      <button
        class="
          rounded-lg
          bg-mau-secondary-900
          text-center text-white
          xl:w-52
          w-48
          py-1
          mx-2
          text-sm
          xl:text-base
          hover:font-bold
          transform motion-safe:hover:scale-110
          hover:bg-mau-secondary-950
        "
      >
        {{ text }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    long: {
      type: Boolean,
      required: true,
    },
  },
}
</script>