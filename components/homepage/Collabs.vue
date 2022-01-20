<template>
  <div class="bg-gei-secondary-200 h-full">
    <div class="container mx-auto py-8 lg:py-12 px-4 lg:px-8">
    <PageTitle title="GEI x Malaysian Youths "/>
      <div
        class="
          mt-10
          space-y-12
          md:space-y-0 md:space-x-8
          items-stretch
          grid md:grid-cols-2 xl:grid-cols-3  gap-8 py-8
        "
      >
        <NuxtLink
          v-for="collab in collabs"
          :key="collab.name"
          class="flex justify-center hover:shadow-2xl hover:border"
          :to="collab.link"
        >
          <SimpleThumbnailCard
            :is-button="false"
            :text-top="collab.name"
            :image="collab.image"
          />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      collabs: [],
    }
  },
  async fetch() {
    const data = await this.$content('collaboration').fetch()
    this.collabs = data[0].collabs
  },
}
</script>

<style scoped>
#describe {
  font-size: 1.8rem;
}
</style>
