<template>
  <div :class="activeAccordion" class='py-4 px-4 md:px-6 hover:bg-gei-secondary-300'>
    <div>
      <button
        class="w-full text-gei-tertiary-500  flex justify-start space-x-6"
        @click.prevent="active = !active"
      >
        <h3 class="text-md lg:text-lg text-gei-primary-500">{{ title }}</h3>
        <span v-show="!active" class="down-Arrow">&#9660;</span>
        <span v-show="active" class="up-Arrow">&#9650;</span>
      </button>
    </div>
    <div v-show="active" class="pl-4">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      active: false,
    }
  },
  computed: {
    activeAccordion() {
      if (this.active) {
        return 'bg-gei-secondary-300 border-t-2 border-b-2 border-gei-secondary-400'
      } else {
        return 'bg-gei-secondary-200'
      }
    },
  },
}
</script>