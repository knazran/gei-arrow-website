<template>
  <nav class="sticky top-0 bg-gei-secondary-300 w-full z-40">
    <div class="container mx-auto px-2 sm:px-6 lg:px-8">
      <div class="flex justify-between min-h-2 items-stretch">
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

            <div class="hidden md:block lg:px-4">
              <ul class="menu">
                <li @mouseover="listOne = true" @mouseleave="listOne = false">
                  <NuxtLink
                    to="/about-us"
                    class="hover:bg-gei-secondary-200 rounded-md block"
                  >
                    About Us
                  </NuxtLink>
                </li>

                <li @mouseover="listTwo = true" @mouseleave="listTwo = false">
                  <a class="hover:bg-gei-secondary-200 rounded-md block"
                    >Key Issues</a
                  >

                  <transition name="fade">
                    <ul v-if="listTwo" @click="listTwo = false">
                      <li>
                        <NuxtLink
                          to="/key-issues/child-marriage"
                          class="hover:bg-gei-secondary-200 rounded-md block"
                        >
                          Child Marriage
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink
                          to="/key-issues/comprehensive-sexuality-edu"
                          class="hover:bg-gei-secondary-200 rounded-md block"
                        >
                          Comprehensive Sexuality Education (CSE)
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink
                          to="/key-issues/discrimination-towards-sexual-and-gender-minorities"
                          class="hover:bg-gei-secondary-200 rounded-md block"
                        >
                          Discrimination towards sexual and gender minorities
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink
                          to="/key-issues/fgmc"
                          class="hover:bg-gei-secondary-200 rounded-md block"
                        >
                          Female Genital Mutilation
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink
                          to="/key-issues/srhr"
                          class="hover:bg-gei-secondary-200 rounded-md block"
                        >
                          Sexual Reproductive Health & Rights Services
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink
                          to="/key-issues/gbv"
                          class="hover:bg-gei-secondary-200 rounded-md block"
                        >
                          Gender Based Violence
                        </NuxtLink>
                      </li>
                    </ul>
                  </transition>
                </li>

                <li
                  @mouseover="listThree = true"
                  @mouseleave="listThree = false"
                >
                  <a class="hover:bg-gei-secondary-200 rounded-md block"
                    >Resources</a
                  >
                  <transition name="fade">
                    <ul v-if="listThree" @click="listThree = false">
                      <li>
                        <NuxtLink
                          to="/publications"
                          class="hover:bg-gei-secondary-200 rounded-md block"
                        >
                          Publications
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink
                          to="/happenings"
                          class="hover:bg-gei-secondary-200 rounded-md block"
                        >
                          Happenings
                        </NuxtLink>
                      </li>
                    </ul>
                  </transition>
                </li>
                <li>
                  <a
                    href="http://eepurl.com/grmcVz"
                    target="_blank"
                    class="hover:bg-gei-secondary-200 rounded-md block bg-gei-tertiary-500"
                  >
                    <p class="text-white">Sign Up For Newsletter</p>
                  </a>
                </li>
<!-- 
                <li>
                  <NuxtLink
                    to="/join-us"
                    class="hover:bg-gei-secondary-200 rounded-md block"
                  >
                    Join Us
                  </NuxtLink>
                </li> -->
              </ul>
            </div>
          </div>
        </div>
        <div class="inset-y-0 right-0 flex items-center pr-2">
          <div
            id="social-media"
            class="flex space-x-1 lg:space-x-4 md:mb-0 mx-4 items-center"
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
            <a href="mailto:online@arrow.org.my" target="_blank">
              <iconify-icon
                :icon="icons.email"
                height="28"
                :style="{ color: '#6C2B8F' }"
              />
            </a>
          </div>
          <button
            type="button"
            class="
              block
              md:hidden
              items-center
              justify-center
              p-2
              rounded-md
              focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white
            "
            aria-controls="mobile-menu"
            aria-expanded="false"
            @click="showMenu"
          >
            <span class="sr-only">Open main menu</span>

            <iconify-icon
              :icon="icons.menu"
              height="28"
              :style="{ color: '#6C2B8F' }"
            />
          </button>
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
import email from '@iconify-icons/mdi/email'

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
        email,
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
  color: #6c2b8f;
  text-decoration: none;
}

.menu li {
  display: block;
  float: left;
  position: relative;
  background: #ecb6d4;
  color: #6c2b8f;
  min-width: 160px;
}

.menu li ul {
  position: absolute;
  left: 0;
  top: 61px;
  margin: 0;
  padding: 0;
}

.menu li ul li {
  background: #ecb6d4;
  transition: background 0.2s;
}

.menu li ul li:hover {
  background: #f2cee2;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
