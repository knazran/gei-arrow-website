<template>
  <div class="bg-gei-secondary-200 py-8 lg:py-16 relative z-20">
    <div class="container mx-auto">
      <div class="flex flex-col space-y-8 lg:flex-row lg:space-y-0 lg:space-x-10 px-12">
        <div class="lg:w-1/3 w-full">
            <p class="text-gei-primary-400 font-thin text-sm">
              <strong>Gender Equality Initiative </strong> aims to assist Malaysia as a whole in achieving CEDAW & UPR recommendations by providing capacity building mainly for CSOs/CBOs. 
            </p>
        </div>

        <div class="lg:w-1/3 w-full">
          <p class="text-gei-primary-400 text-sm">Follow us on social media</p>
          <div id="social-media" class="flex flex-shrink-0 space-x-1 mt-3">
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

        <div class="lg:w-1/3 w-full">
          <ul class="text-gei-primary-400 font-thin text-sm">
            <NuxtLink to='/our-policies/privacy-policy'><li>Privacy Policy</li></NuxtLink>
          </ul>
        </div>
      </div>
    </div>
  </div>
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
    }
  },
}
</script>

<style scoped>
#describe {
  font-size: 1.8rem;
}
</style>
