<template>
  <div class="bg-gei-secondary-100">
    <div
      class="
        min-h-screen
        py-12
        bg-scroll
        rotate-180
        lg:bg-contain
        bg-no-repeat
        lg:bg-right
        bg-top
      "
    >
      <PageSection>
        <PageTitle
          description=""
          title="Media Features"
        />
<div
        class="
          mt-10
          space-y-12
          md:space-y-0 md:space-x-8
          items-stretch
          grid md:grid-cols-2 xl:grid-cols-3  gap-8 py-8
        "
      >
        <a
          v-for="collab in features"
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
      </div>
      </PageSection>
    </div>
  </div>
</template>

<script>

export default {
    data() {
    return {
      features: [],
    }
  },
  async fetch() {
    const data = await this.$content('media').fetch()
    this.features = data[0].features
  },
}
</script>

<style scoped>
.error-border {
  border-color: red;
}
</style>