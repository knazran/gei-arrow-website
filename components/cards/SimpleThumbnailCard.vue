<template>
  <div class="flex flex-col items-center justify-between h-full">
    <!-- <div class="self-center"> -->
    <div class="w-full">
      <img
        :src="image"
        alt="..."
        class="object-scale-down w-full border-none rounded h-72"
      />
    </div>

    <div v-if="!isButton" class="my-4 flex-grow">
      <p class="text-center text-gei-primary-500 text-lg font-semibold mb-2">
        {{ textTop }}
      </p>
      <p class="text-center font-light text-gei-primary-500 text-mg">
        {{ textBot }}
      </p>
    </div>
    <div v-if="!isButton"></div>

    <div v-if="isButton" class="">
      <AccentButtonCustom :long="isLong" :text="textButton" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isButton: {
      type: Boolean,
      required: true,
    },
    isLong: {
      type: Boolean,
    },
    textButton: {
      type: String,
    },
    textTop: {
      type: String,
    },
    textBot: {
      type: String,
    },
    image: {
      type: String,
      default:
        'https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-1-800x800.jpg',
    },
  },
}
</script>