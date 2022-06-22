<template>
  <BackgroundWrapper color='beige'>
    <div class="py-4">
        <PageSection id="publications">
          <div class="md:flex mb-12 md:mb-20">
            <div class="w-full md:w-1/2 md:p-8">
            <img src="~/static/img/resources/resources-1.png" />
          </div>
          <div class="w-full md:w-1/2 flex flex-col justify-center">
            <PageTitle title="Grounding Human Rights in Malaysia for All: Embracing Change Advocacy Brief" />
            <p class="text-gei-primary-400 mb-12">
              Together, let's develop the gender lens of young persons in Malaysia to further the cause for gender equality.
            </p>
            <a href="~/static/pdf/EmbracingChange_AdvocacyBrief_GEI.pdf" download>
              <button class="rounded-lg bg-gei-tertiary-500 text-white px-4 py-2 text-sm">Download Now</button>
            </a>
          </div>
      </div>
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
                <img class="object-cover h-96" :src="publication.thumbnail" />
                <p class="my-4 font-sari text-md text-gei-primary-500">{{ publication.name }}</p>
                <a :href="publication.link" target="_blank">
                  <button class="rounded-lg bg-gei-tertiary-500 text-white px-4 py-2 text-sm">Download Here</button>
                </a>
              </div>
            </div>
          </div>
        </PageSection>
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
