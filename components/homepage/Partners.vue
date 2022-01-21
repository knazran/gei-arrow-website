<template>
  <div class="bg-mau-primary-50 h-full">
    <div class="container mx-auto py-8 lg:py-16 px-4 lg:px-8">
      <PageTitle title="Our Partners" />
      <!-- <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 2xl:grid-cols-5 mt-10 gap-8"> -->
      <div class="flex flex-wrap flex-shrink-0 mt-8 spaces-x-8 justify-center">
        <div v-for="partner of partners" :key="partner.name" class="p-4 flex rounded-md justify-center w-1/2 md:w-1/3 ">
            <img :src=partner.image class="h-40 object-contain">
        </div>

        <img src="~/static/img/partners/EU.png" class="my-4 h-48 object-contain">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      partners: [],
    }
  },
  async fetch() {
    const data = await this.$content('partners').fetch()
    console.log(data)
    this.partners = data[0].partners
  },
}

</script>