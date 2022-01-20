<template>
  <div class="my-4 md:my-8">
    <PageSection id="about-lapor-predator">
        <PageTitle
          :title="content.title"
          :description="content.description"
        />
      <div class="w-full my-12">
        <nuxt-content class="w-full prose prose-mau prose-sm md:prose-md 2xl:prose-lg max-w-none" :document="content" />
      </div>
    </PageSection>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    try {
      const content = await $content('privacy-policy').fetch()
      return {
        content,
      }
    } catch (e) {
      error({ message: 'Content not found' })
    }
  },
}
</script>

