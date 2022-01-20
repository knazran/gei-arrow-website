<template>
  <BackgroundWrapper color="beige">
    <div class="py-4 min-h-full">
      <PageSection id="policy">
        <PageSplitSection>
          <PageTitle title="Our Policies" />
        </PageSplitSection>
        <div class="grid py-4 px-4 mb-12 md:grid-cols-2 gap-8">
          <!-- Need to add text -->
          <div
            v-for="policy of policies"
            :key="policy.slug"
            class="
              rounded-20
              border
              bg-mau-primary-700
              w-full
              h-72
              hover:shadow-lg hover:border-mau-primary-500
            "
          >
            <a :href="policy.link">
              <p class="text-center py-4 text-md md:text-lg text-white">
                {{ policy.title }}
              </p>
              <img
                :src="policy.image"
                alt="..."
                class="w-full rounded-b-20 h-4/5 object-cover"
              />
            </a>
          </div>
        </div>
      </PageSection>
    </div>
  </BackgroundWrapper>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const policies = await $content('our-policies')
      .sortBy('id')
      .limit(2)
      .fetch()
    return {
      policies,
    }
  },
}
</script>
