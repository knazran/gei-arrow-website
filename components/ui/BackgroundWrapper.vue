<template>
  <div class="bg-gei-secondary-100">
    <slot></slot>
  </div>
</template>

<script>
import TextureBeige from '~/static/img/textures/texture-beige-2.png'
import TextureGreen from '~/static/img/textures/texture-green-2.png'

export default {
  props: {
    color: {
      type: String,
      default: 'beige',
    },
  },
  data() {
    return {
      bgBeige: TextureBeige,
      bgGreen: TextureGreen,
    }
  },
  computed: {
    getBackgroundImage() {
        if (this.color === 'beige') {
            return `url(${this.bgBeige})`
        }
        if (this.color === 'green') {
            return `url(${this.bgGreen})`
        }
        else {
            return `url(${this.bgBeige})`
        }
      
    },
  },
}
</script>
