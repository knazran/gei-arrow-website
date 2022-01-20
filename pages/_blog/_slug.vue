<template>
  <BackgroundWrapper color="beige">
    <div class="container mx-auto">
      <div class="px-4 my-4 flex flex-col items-center">
        <!-- Image -->
        <div
          class="mx-auto rounded-lg flex justify-center w-full xl:h-96 2xl:h-99"
        >
          <img :src="post.image" class="my-5 object-cover w-full h-full" />
        </div>

        <div
          class="
            my-2
            md:my-4
            px-4
            pb-8
            md:py-4 md:px-12
            bg-white
            md:w-4/5
            border
            rounded-lg
            shadow
            md:transform md:-translate-y-32
          "
        >
          <div class="mb-8">
            <!-- Title -->
            <p class="font-semibold text-3xl my-1 text-left">
              {{ post.title }}
            </p>
            <!-- Author -->
            <span
              class="
                font-light
                text-md text-gray-600
                mt-1
                md:text-left
                text-center
              "
            >
              By: {{ post.author }}
            </span>
            <!-- Date -->
            <span
              class="
                font-light
                text-md text-gray-600
                md:mt-1 md:text-left
                text-center
                mx-4
              "
            >
              {{ formattedPublishedDate }}
            </span>
          </div>

          <!-- Content -->
          <nuxt-content
            class="prose prose-md lg:prose-lg max-w-none img-class"
            :document="post"
            id="img_blog"
          />
        </div>
      </div>
    </div>
  </BackgroundWrapper>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    let post
    try {
      post = await $content('blog', params.slug).fetch()
    } catch (e) {
      error({ message: 'Blog Post not found' })
    }

    return {
      post,
    }
  },
  computed: {
    formattedPublishedDate() {
      const dateString = Date.parse(this.post.date)
      const today = new Date(dateString)

      return today.toLocaleDateString('en-GB')
    },
  },
}
</script>
<style scoped>
#img_blog img {
   margin: auto;
}
</style>