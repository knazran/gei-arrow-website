<template>
  <nav class="sticky top-0 bg-gei-secondary-300 w-full z-40">
    <div class="container mx-auto px-2 sm:px-6 lg:px-8">
      <div class="flex justify-between min-h-24 items-stretch">
        <div
          class="
            flex-1 flex
            align-baseline
            items-start
            justify-between
            sm:items-stretch sm:justify-start
            flex-col
            md:flex-row
          "
        >
          <div class="flex items-center">
            <NuxtLink to="/">
              <img
                class="block h-16 xl:h-20 w-auto"
                src="~/static/gei-logo.png"
                alt="Logo"
              />
            </NuxtLink>

            <div class='lg:px-4'>
              <ul class="menu">
                <li @mouseover="listOne = true" @mouseleave="listOne = false">
                  <NuxtLink to="/about-us" class="hover:bg-gei-secondary-200 rounded-md block">
                    About Us
                  </NuxtLink>

                  <!-- <transition name="fade">
                    <ul v-if="listOne" @click="listOne = false">
                      <li><a href="#">Sub Menu Item</a></li>
                      <li><a href="#">Sub Menu Item</a></li>
                      <li><a href="#">Sub Menu Item</a></li>
                    </ul>
                  </transition> -->
                </li>

                <li @mouseover="listTwo = true" @mouseleave="listTwo = false">
                  <NuxtLink to="/key-issues" class="hover:bg-gei-secondary-200 rounded-md block">
                    Key Issues
                  </NuxtLink>

                  <!-- <transition name="fade">
                    <ul v-if="listTwo" @click="listTwo = false">
                      <li><a href="#">Sub Menu Item</a></li>
                      <li><a href="#">Sub Menu Item</a></li>
                      <li><a href="#">Sub Menu Item</a></li>
                    </ul>
                  </transition> -->
                </li>

                <li
                  @mouseover="listThree = true"
                  @mouseleave="listThree = false"
                >
                  <NuxtLink to="/key-issues" class="hover:bg-gei-secondary-200 rounded-md block">
                    Our Advocacy Targets
                  </NuxtLink>

                  <!-- <transition name="fade">
                    <ul v-if="listThree" @click="listThree = false">
                      <li><a href="#">Sub Menu Item</a></li>
                      <li><a href="#">Sub Menu Item</a></li>
                      <li><a href="#">Sub Menu Item</a></li>
                    </ul>
                  </transition> -->
                </li>

                <li @mouseover="listFour = true" @mouseleave="listFour = false">
                  <NuxtLink to="/key-issues" class="hover:bg-gei-secondary-200 rounded-md block">
                    Media
                  </NuxtLink>

                  <transition name="fade">
                    <ul v-if="listFour" @click="listFour = false">
                      <li><a href="#">News Room</a></li>
                      <li><a href="#">Media Features</a></li>
                    </ul>
                  </transition>
                </li>

                <li>
                  <NuxtLink to="/key-issues" class="hover:bg-gei-secondary-200 rounded-md block">
                    Join Us
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="inset-y-0 right-0 flex items-center pr-2">
          <div
            id="social-media"
            class="flex space-x-1 lg:space-x-4 mb-4 md:mb-0 mx-4 items-start md:items-center"
          >
            <a href="https://www.facebook.com/ARROW.Women " target="_blank">
              <iconify-icon
                :icon="icons.facebook"
                height="28"
                :style="{ color: '#6C2B8F' }"
              />
            </a>
            <a href="https://www.instagram.com/arrow_women/ " target="_blank">
              <iconify-icon
                :icon="icons.instagram"
                height="28"
                :style="{ color: '#6C2B8F' }"
              />
            </a>
            <a href="https://twitter.com/ARROW_Women " target="_blank">
              <iconify-icon
                :icon="icons.twitter"
                height="28"
                :style="{ color: '#6C2B8F' }"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
    <!-- <div id="panic-container" class="panic-button">
      <div class="hidden md:block">
        <span class="panic-button__text">Protect yourself online.</span>
      <a
        class="panic-button__link"
        href="https://www.domesticshelters.org/safe-surfing"
      >
        Learn how to hide your browsing history.
      </a>
      <a
        id="panic-button"
        class="panic-button__button"
        title="Google"
        href="https://www.google.com/search?q=the+star"
      >
        <span class="panic-button__icon">&times;</span>
        Quick exit (ESC)
      </a>
      </div>
      <div class="block md:hidden bg-red-500 text-white">
        <a
        id="panic-button"
        class=""
        title="Google"
        href="https://www.google.com/search?q=the+star"
      >
        Quick exit (ESC)
      </a>
      </div>
      
    </div>
    <script
      async
      src="https://cdn.rawgit.com/studiothick/panic-button/v1.2.0/dist/panic.min.js"
    ></script> -->
  </nav>
</template>

<script>
import IconifyIcon from '@iconify/vue'
import menu from '@iconify-icons/mdi/menu'
import facebook from '@iconify-icons/mdi/facebook'
import youtube from '@iconify-icons/mdi/youtube'
import twitter from '@iconify-icons/mdi/twitter'
import instagram from '@iconify-icons/mdi/instagram'
export default {
  components: { IconifyIcon },
  data() {
    return {
      icons: {
        menu,
        facebook,
        youtube,
        twitter,
        instagram,
      },
      listOne: false,
      listTwo: false,
      listThree: false,
      listFour: false,
    }
  },
  methods: {
    showMenu(e) {
      this.$store.commit('toggleOverlayMenu')
    },
  },
}
</script>

<style scoped>
.panic-button {
  height: 2.8rem;
  line-height: 2.8rem;
  position: relative;
  z-index: 100;
  width: 100%;
  background-color: #fff;
  text-align: center;
  font-size: 1em;
  vertical-align: middle;
  color: #000;
  box-shadow: 0.1em 0.1em 0.1em rgba(0, 0, 0, 0.05);
  display: none;
  overflow: hidden;
}

/* @media (min-width: 37.5em) { */
.panic-button {
  display: block;
}
/* } */

.panic-button__link {
  color: #666;
  text-decoration: underline;
}

.panic-button__link:hover,
.panic-button__link:active {
  color: #444;
}

.panic-button__button {
  height: 2.8rem;
  line-height: 2.8rem;
  display: inline-block;
  background-color: #ef0834;
  color: #fff;
  padding: 0 0.7em;
  cursor: pointer;
  position: absolute;
  right: 0;
  text-decoration: none;
}

@media (min-width: 64em) {
  .panic-button__button {
    padding: 0 1em;
  }
}

.panic-button__button:hover,
.panic-button__button:active {
  color: #fff;
  background-color: #d6072f;
}

.panic-button__icon {
  margin-right: 0.5em;
  font-size: 1.08em;
}

.menu {  
  font: 16px/1.5 'Open Sans', sans-serif;
  font-weight: 500;
  margin: 0;
  padding: 0;
  list-style: none;
}

.menu a {
  display: block;
  padding: 20px;
  color: #6C2B8F;
  text-decoration: none;
}

.menu li {
  display:block;
  float: left;
  position: relative;
  background: #ECB6D4;
  color: #6C2B8F;
  min-width: 120px;
}

.menu li ul {
  position: absolute;
  left: 0;
  top: 61px;
  margin: 0;
  padding: 0;
}

.menu li ul li {
  background: #ECB6D4;
  transition: background .2s;
}

.menu li ul li:hover {
  background: #F2CEE2;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}
.fade-enter, .fade-leave-active {
  opacity: 0;
}
</style>
