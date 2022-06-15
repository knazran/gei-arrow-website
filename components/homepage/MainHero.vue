<template>
  <div class="h-full bg-gei-secondary-100">
    <div
      class="
        container
        mx-auto
        flex
        lg:flex-row
        flex-col
        py-8
        lg:py-16
        px-4
        lg:px-1
        2xl:px-0
      "
    >
      <!-- Left Side-->

      <div class="lg:w-1/2 text-gei-primary-700 px-4 md:px-8 py-8 2xl:py-16">
        <div class="mb-5">
          <p
            class="
              font-bold
              lg:text-3xl
              text-2xl text-center
              lg:text-left
            "
          >
            What is the Gender Equality Initiative?
          </p>
        </div>
        <div class="my-12">
          <p class="font-thin lg:text-md lg:text-left text-center">
            The Gender Equality Initiative aims to contribute to the adoption of the gender equality act that aims to abolish discriminatory laws and policies and fulfil the human rights against women, young people and non binary persons against discrimination and violence in Malaysia.
          </p>
        </div>
        <!-- Button -->
        <div
          class="
            flex flex-col
            lg:flex-wrap lg:flex-row
            items-center
            lg:items-start
          "
        >
          <NuxtLink to='/about-us'>
            <AccentButtonLong text="Learn More About Us" />
          </NuxtLink>
        </div>
        <!-- End Button -->
      </div>
      <!-- End Left Side-->

      <!-- Right Side with Pic -->
      <div class="hidden md:block lg:w-1/2">
        <div class="flex flex-col justify-center items-center">
          <img
            class="
              object-cover
              xl:h-72
              2xl:h-80
              rounded-md
            "
            src="../../static/gei-logo.png"
            alt="Profile image"
          />
        </div>
      </div>
      <!--End Right side with Pic -->
    </div>
  </div>
</template>

<script>
export default {

}
</script>

