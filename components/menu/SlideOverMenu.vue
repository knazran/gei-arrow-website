<template>
  <transition id="trans" name="slide">
    <div
      v-if="showOverlayMenu"
      class="
        fixed
        min-h-screen
        overflow-y-scroll
        inset-y-0
        right-0
        w-4/5
        sm:w-auto
        sm:max-w-full
        flex
        z-50
      "
    >
      <div class="w-screen max-w-md border-l-2 border-gei-secondary-300">
        <!-- Panel -->
        <div
          class="min-h-screen flex flex-col py-6 bg-gei-secondary-200 shadow-xl"
        >
          <div class="flex justify-end px-2">
            <button @click="closeMenu">
              <iconify-icon
                :icon="icons.close"
                height="28"
                :style="{ color: '#6C2B8F' }"
              />
            </button>
          </div>

          <div class="mt-6 relative flex-1">
            <MenuButton text="Home" to="/"></MenuButton>
            <MenuButton text="About Us" to="/about-us"></MenuButton>
            <MenuAccordion title="Key Issues">
              <MenuButton text="Child Marriage" to="/key-issues/child-marriage"></MenuButton>
              <MenuButton text="Comprehensive Sexuality Education (CSE)" to="/key-issues/comprehensive-sexuality-edu"></MenuButton>
              <MenuButton text="Discrimination towards sexual and gender minorities" to="/key-issues/discrimination-towards-sexual-and-gender-minorities"></MenuButton>
              <MenuButton text="Female Genital Mutilation" to="/key-issues/fgmc"></MenuButton>
              <MenuButton text="Sexual Reproductive Health & Rights Services" to="/key-issues/srhr"></MenuButton>
              <MenuButton text="Gender Based Violence" to="/key-issues/gbv"></MenuButton>
            </MenuAccordion>
            <!-- <MenuAccordion title="Media">
              <MenuButton
                text="News Room"
                to="/"
              ></MenuButton>
              <MenuButton
                text="Media Features"
                to="/media/media-features"
              ></MenuButton>
            </MenuAccordion> -->
            <MenuButton
                text="Join Us"
                to="/join-us"
              ></MenuButton>

            
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import IconifyIcon from '@iconify/vue'
import close from '@iconify-icons/mdi/close'

export default {
  components: { IconifyIcon },
  data() {
    return {
      icons: {
        close,
      },
    }
  },
  computed: {
    showOverlayMenu() {
      return this.$store.state.overlayMenu
    },
  },
  methods: {
    closeMenu(e) {
      this.$store.commit('toggleOverlayMenu')
    },
  },
}
</script>

<style scoped>
.slide-enter-active {
  animation: menu-slide 0.5s;
}
.slide-leave-active {
  animation: menu-slide 0.5s reverse;
}
@keyframes menu-slide {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}
</style>
