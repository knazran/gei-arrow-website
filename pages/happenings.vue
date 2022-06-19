<template>
  <BackgroundWrapper color='beige'>
    <div class="py-6">
        <PageSection id="blog-posts">
          <PageTitle title="Happenings" />
          <div class="mt-4"
          >
            <!-- Need to add text -->
            <div v-for="happening of happenings" :key="happening.title" class='mb-6'>
              <p class="text-gray-500 text-xs mb-1">{{happening.date}}</p>
              <p class="font-sari text-md text-gei-primary-500">{{ happening.title }}</p>
              <p class="text-md text-gray-700 my-2">{{ happening.excerpt | truncate }}</p>
              <a :href="happening.link" target='_blank'>
                <button class="rounded-lg bg-gei-tertiary-500 text-white px-4 py-2 text-sm">Read More</button>
              </a>
            </div>
          </div>
        </PageSection>
    </div>
  </BackgroundWrapper>
</template>

<script>
export default {
  filters: {
        truncate(text) {
          const maxLength = 200
            if (text.length > maxLength) {
                return text.substring(0, maxLength) + '...';
            } else {
                return text;
            }
        },
    },
    data() {
    return {
      happenings: [],
    }
  },
  async fetch() {
    const data = await this.$content('happenings').fetch()
    
    this.happenings = data[0].happenings
  },
}
</script>
