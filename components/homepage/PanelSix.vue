<template>
  <div class="h-full">
    <BackgroundWrapper color="beige">
      <div class="container mx-auto py-8 px-4 lg:px-8">
        <!-- TOP -->

        <div class="mx-auto flex md:flex-row md:my-8 flex-col-reverse">
          <!-- Left -->

          <div
            class="
              w-full
              flex flex-col
              items-center
              md:flex-row
              space-y-4
              md:space-y-0 md:space-x-8
              md:items-stretch
              md:px-8
            "
          >
            <div class="md:flex">
              <div
                class="mx-4"
                style="position: relative; max-width: 400px; min-width: 100px"
              >
                <iframe
                  src="https://www.instagram.com/p/CTGrNElHxe1/embed/"
                  allowtransparency="true"
                  allowfullscreen="true"
                  frameborder="0"
                  height="681"
                  data-instgrm-payload-id="instagram-media-payload-0"
                  scrolling="yes"
                  style="
                    background: white;
                    max-width: 540px;
                    width: calc(100% - 2px);
                    border-radius: 3px;
                    border: 1px solid rgb(219, 219, 219);
                    box-shadow: none;
                    display: block;
                    margin: 0px 0px 12px;
                    min-width: 326px;
                    padding: 0px;
                  "
                ></iframe>
              </div>
              <div
                class="mx-4"
                style="position: relative; max-width: 400px; min-width: 100px"
              >
                <iframe
                  src="https://www.instagram.com/p/CTFCsjhJ3s7/embed/"
                  allowtransparency="true"
                  allowfullscreen="true"
                  frameborder="0"
                  height="681"
                  data-instgrm-payload-id="instagram-media-payload-0"
                  scrolling="yes"
                  style="
                    background: white;
                    max-width: 540px;
                    width: calc(100% - 2px);
                    border-radius: 3px;
                    border: 1px solid rgb(219, 219, 219);
                    box-shadow: none;
                    display: block;
                    margin: 0px 0px 12px;
                    min-width: 326px;
                    padding: 0px;
                  "
                ></iframe>
              </div>
            </div>
          </div>
          <!-- End LEft -->
          <!-- Right -->

          <div
            class="
              w-full
              flex flex-col
              items-center
              md:items-start
              md:w-2/5
              md:px-8
              mb-8
            "
          >
            <PageTitle title="What's Happening?" />
            <div class="mt-6">
              <a
                href="https://www.instagram.com/monstersamongus_my/"
                target="_blank"
              >
                <button
                  class="
                    transform
                    hover:scale-105
                    rounded-xl
                    bg-mau-primary-700
                    text-center text-white
                    2xl:w-64
                    xl:w-52
                    w-64
                    py-2
                  "
                >
                  See More
                </button>
              </a>  
            </div>
          </div>
        </div>
      </div>
    </BackgroundWrapper>
    <BackgroundWrapper color="green">
      <div class="container mx-auto py-8 px-4 lg:px-8">
        <div class="mx-auto mt-12">
          <div class="md:flex md:justify-center mb-8">
            <PageTitle title="Gotta Read This" :center="true" />
          </div>
          <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-8 py-8">
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
        </div>
        <!-- END BOT -->
      </div>
    </BackgroundWrapper>
  </div>
</template>

<script>
import TextureBeige from '~/static/img/textures/texture-beige-2.png'
export default {
  data() {
    return {
      posts: [],
      bgBeige: TextureBeige,
    }
  },
  async fetch() {
    const data = await this.$content('blog')
      .sortBy('date', 'desc')
      .limit(3)
      .fetch()
    this.posts = data
  },
  head() {
    return {
      script: this.headScript,
    }
  },
  computed: {
    getBackgroundImage() {
      return `url(${this.bgBeige})`
    },
    headScript() {
      return [
        {
          src: '//www.instagram.com/embed.js',
          id: 'instagram_embed',
          async: true,
        },
      ]
    },
  },
}
</script>
