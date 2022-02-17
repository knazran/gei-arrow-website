<template>
  <div class="h-full" :style="{ backgroundImage: getBackgroundImage, backgroundSize: 'cover' }">
    <div class="container mx-auto py-8 lg:py-16 px-4">
      <div class="flex flex-col md:flex-row items-center">
        <!-- Left Side-->
        <div
          class="
            lg:py-6 
            md:w-1/2
            text-gei-secondary-100
            px-6
            mb-8
          "
        >
          <div>
            <p class="font-medium text-xl text-left">
              Women and girls in Malaysia account for 48.6% of the total population. Despite representing almost half of the nation’s population, they are also mostly discriminated upon. Is Malaysia progressing towards achieving gender equality?

            </p>
          </div>
        </div>
        <!-- End Left Side-->
      </div>
    </div>
  </div>
</template>

<script>
import TextureGreen from '~/static/img/background/panel-bg-1.png'
export default {
  data() {
    return {
      bgGreen: TextureGreen,
    }
  },
  computed: {
    getBackgroundImage() {
      return `url(${this.bgGreen})`
    },
  },
}
</script>

<style scoped>
#describe {
  font-size: 1.8rem;
}
</style>
