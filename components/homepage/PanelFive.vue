<template>
  <div class="h-full" :style="{ backgroundImage: getBackgroundImage }">
    <div class="container mx-auto py-8 lg:py-16 px-4 lg:px-8">
     <PageTitle title="Advocate With Us" description=" We are always looking for volunteers, collaborators and members to join the cause."/>
      <div
        class="
          mt-8
          lg:mt-12
          flex flex-col
          md:flex-row md:justify-center
          items-center
          space-y-12
          md:space-y-0 md:space-x-12
        "
      > 
        
        <div
          v-for="card in cards"
          :key="card.title"
          class="rounded-20 border bg-mau-primary-700 w-full md:w-1/3 h-72 hover:shadow-lg hover:border-mau-primary-500"
        >
        <NuxtLink :to='card.link'>
          <img
            :src="card.image"
            alt="..."
            class="w-full rounded-t-20 h-4/5 object-cover"
          />
          <p class="text-center py-4 text-md text-white">{{ card.title }}</p>
        </NuxtLink>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TextureGreen from '~/static/img/textures/texture-green-2.png'
import VacanciesImage from '~/static/img/homepage/Home_Vacancies.jpg'
import CollaborateImage from '~/static/img/homepage/Home_Collaborate.jpg'
import BeAMemberImage from '~/static/img/homepage/Home_Be A Member.jpg'

export default {
  data() {
    return {
      bgGreen: TextureGreen,
      cards: [
        {
          title: 'See Vacancies',
          image: VacanciesImage,
          link: { path: '/advocate-with-mau'},
        },
        {
          title: 'Collaborate with MAU',
          image: CollaborateImage,
          link: { path: '/advocate-with-mau',hash:'#collaborate'},
        },
        {
          title: 'Be a Member',
          image: BeAMemberImage,
          link: { path: '/advocate-with-mau',hash:'#be-a-member'},
        },
      ],
    }
  },
  computed: {
    getBackgroundImage() {
      return `url(${this.bgGreen})`
    },
  },
}
</script>

<style scoped>
#describe {
  font-size: 1.8rem;
}
</style>
