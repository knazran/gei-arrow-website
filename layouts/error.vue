<template>
  <div class="container mx-auto flex flex-col justify-center items-center h-80">
    <h1 class='my-8 text-xl text-mau-primary-700'>Hmmm we can't find the page you are looking for...</h1>
    <NuxtLink to="/">
      <AccentButton text='Return to Home Page'/>
    </NuxtLink>
  </div>
</template>

<script>
  export default {
    layout: 'error',
    props: ['error'] // you can set a custom layout for the error page
  }
</script>