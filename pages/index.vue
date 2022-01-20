<template>
  <div class="overflow-x-hidden">

    <MainHero />
    <MainPitch />
    <Collabs />
    <Partners />
  </div>
</template>

<script>
export default {
  head() {
    return {
      script: this.headScript,
    }
  },
  computed: {
    headScript() {
        return [
          {
            src: '//www.instagram.com/embed.js',
            id: 'instagram_embed',
            async: true,
          },
          { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' },
        ]

    },
  },
  
}
</script>
