<template>
  <div class="h-screen">
    <transition name="fade">
      <div
        v-if="showOverlayMenu"
        class="
          fixed
          inset-0
          bg-gray-500 bg-opacity-75
          transition-opacity
          h-full
          min-h-screen
          z-50
        "
        aria-hidden="true"
      ></div>
    </transition>
    <SlideOverMenu />
    <NavHeader />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
export default {
  head() {
    return {
      script: this.headScript,
    }
  },
  computed: {
    showOverlayMenu() {
      return this.$store.state.overlayMenu
    },
    headScript() {
      if (process.env.NODE_ENV === 'production') {
        return [
          {
            src: 'https://cdn.chatapi.net/webchat/widget/widget.js?cId=0fee1c214e2c15f1608c9f41ddd03ddb44a022e9c698783023570c0197eba769',
            id: 'webchat__widget',
            async: true,
            body: true,
          },
        ]
      } else {
        return []
      }
    },
  },
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
