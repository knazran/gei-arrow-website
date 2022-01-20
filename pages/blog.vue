<template>
  <BackgroundWrapper color='beige'>
    <div class="py-12">
      <div class="md:py-4 relative z-10">
        <PageSection id="blog-posts">
          <PageTitle title="Gotta Read This!" />
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
            <div v-for="post of posts" :key="post.slug">
              <NuxtLink :to="`blog/${post.slug}`">
                <AdvancedThumbnailCard
                  :is-large="true"
                  :is-blog="true"
                  :author="post.author"
                  :date="post.date"
                  :title="post.title"
                  :img="post.image"
                  :content="post"
                />
              </NuxtLink>
            </div>
          </div>
        </PageSection>
      </div>
    </div>
  </BackgroundWrapper>
</template>

<script>
export default {
  
}
</script>
