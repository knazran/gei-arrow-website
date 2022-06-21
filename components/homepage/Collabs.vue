<template>
  <div class="bg-gei-secondary-200 h-full">
    <div class="container mx-auto py-8 lg:py-12 px-4 lg:px-8">
      <PageTitle title="GEI x Youth Rights Defenders" />
      <div class="md:flex">
        <div class="w-full md:w-1/2 mt-10 px-4">
          <VueSlickCarousel v-if="collabs.length" v-bind="settings">
            <a
              v-for="collab in collabs"
              :key="collab.name"
              class="flex justify-center hover:shadow-2xl hover:border"
              :href="collab.link"
              target="_blank"
            >
              <SimpleThumbnailCard
                :is-button="false"
                :text-top="collab.name"
                :image="collab.image"
              />
            </a>
          </VueSlickCarousel>
          <p class="text-sm text-gei-primary-400">
            The GEI project collaborated with amazing youth rights defenders to
            collaboratively address gaps in the society and contribute our
            respective expertise through social media content. It was an attempt
            to strengthen the visibility of the social movement to achieve
            gender equality in Malaysia.
          </p>
        </div>
        <div class="w-full md:w-1/2 md:ml-8 xl:ml-24">
          <Timeline
            id="ARROW_Women"
            source-type="profile"
            :options="{ height: '600' }"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import { Timeline } from 'vue-tweet-embed'
export default {
  components: { Timeline, VueSlickCarousel },
  data() {
    return {
      collabs: [],
      settings: {
        focusOnSelect: true,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
      },
    }
  },
  async fetch() {
    const data = await this.$content('collaboration').fetch()
    this.collabs = data[0].collabs
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
