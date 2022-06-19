<template>
  <div class="md:py-0">
    <VueSlickCarousel v-bind="settings">
      <div
        v-for="(item) in items"
        :key="item[descriptionKey]"
        class="h-full"
      >
        <div
          class="
            px-6
            font-medium
            justify-center
            3xs:text-xs
            2xs:text-sm
            flex
            items-center
          "
        >
          <p class="text-justify">{{ item[descriptionKey] }}</p>
        </div>
        <div class="flex justify-center items-center py-12">
            <img class="h-40" :src="item[imageKey]" />
          </div>
        <!-- <div v-if="index == 0">
          <div class="flex justify-center">
            <p><strong>Slide to read more </strong></p>
          </div>
          
        </div> -->
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  components: { VueSlickCarousel },
  props: {
    items: {
      type: Array,
      required: true
    },
    imageKey: {
      type: String,
      required: true
    },
    descriptionKey: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      settings: {
        focusOnSelect: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        initialSlide: 0,
      },
    }
  },
}
</script>

<style scoped>
.slick-list {
  margin: 0 -5px;
}
.slick-slide > div {
  padding: 0 5px;
}
</style>