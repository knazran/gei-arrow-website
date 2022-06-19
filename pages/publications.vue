<template>
  <BackgroundWrapper color='beige'>
    <div class="py-4">
      <div class="md:py-4 relative z-10">
        <PageSection id="publications">
          <PageTitle title="List of Publications" />
          <div
            class="
              grid
              md:grid-cols-2
              xl:grid-cols-3
              2xl:grid-cols-4
              gap-8
              py-8
            "
          >
            <!-- Need to add text -->
            <div v-for="publication of publications" :key="publication.name">
              <div class="flex flex-col">
                <img class="object-fit h-80" :src="publication.thumbnail" />
                <p class="my-4 font-sari text-md text-gei-primary-500">{{ publication.name }}</p>
                <a :href="publication.link" target='_blank'>
                  <button class="rounded-lg bg-gei-tertiary-500 text-white px-4 py-2 text-sm">Download Here</button>
                </a>
              </div>
            </div>
          </div>
        </PageSection>
      </div>
    </div>
  </BackgroundWrapper>
</template>

<script>
export default {
    data() {
    return {
      publications: [],
    }
  },
  async fetch() {
    const data = await this.$content('publications').fetch()
    
    this.publications = data[0].publications
  },
}
</script>
