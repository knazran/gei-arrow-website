<template>
    <button
      class="w-full hover:bg-gei-secondary-300 hover:border-t-2 hover:border-b-2 hover:border-gei-secondary-300 py-4 text-md lg:text-lg text-gei-primary-500 px-4 md:px-6 text-left"
      @click="goToLink"
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
    to: {
      type: String,
      required: true,
    },
  },
  methods: {
    goToLink() {
      this.$router.push({ path: this.to })
      this.$store.commit('toggleOverlayMenu')
    },
  },
}
</script>