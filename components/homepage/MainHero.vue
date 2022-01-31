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
            Gender Equality Initiative
          </p>
        </div>
        <div class="my-12">
          <p class="font-thin lg:text-md lg:text-left text-center">
            Gender Equality Initiative aims to assist Malaysia as a whole in achieving CEDAW & UPR recommendations by providing capacity building mainly for CSOs/CBOs. 
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
      <!-- <div class="hidden md:block lg:w-1/2">
        <div class="flex flex-col justify-center items-center">
          <img
            class="
              lg:transform
              lg:translate-x-16
              -z-20
              object-cover
              xl:h-72
              2xl:h-80
              border-2 border-mau-primary-700
              rounded-md
            "
            src="../../static/img/homepage/Home_Panel1.1.jpg"
            alt="Profile image"
          />
          <img
            class="
              hidden
              lg:block
              transform
              -translate-x-16 -translate-y-12
              -z-30
              object-cover
              xl:h-72
              2xl:h-80
              border-2 border-mau-primary-700
              rounded-md
            "
            src="../../static/img/homepage/Home_Panel1.2.jpg"
            alt="Profile image"
          />
        </div>
      </div> -->
      <!--End Right side with Pic -->
    </div>
  </div>
</template>

<script>
export default {

}
</script>

