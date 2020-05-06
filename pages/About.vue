<template>
  <div id="container">
    <div id="background-cover" class="flex w-screen ">
      <img
        class="absolute h-screen md:max-w-screen-md object-cover z-10"
        src="@/assets/images/people.jpg"
        alt="people"
      />
    </div>
    <div class="h-56 relative"></div>
    <div class="flex flex-col items-start">
      <h2
        class=" inline-block relative z-30 mt-8 pr-8 md:px-16 font-sans font-display text-white font-bold text-3xl tracking-wider "
      >
        {{ heading1 }}
      </h2>
      <h3
        class=" inline-block relative z-30 mt-8 p-8 md:px-16 font-sans font-display text-white font-semibold text-2xl tracking-wide  leading-loose"
      >
        {{ subHeading }}
      </h3>
      <MoreInfo />
    </div>
  </div>
</template>

<script>
import MoreInfo from '../components/MoreInfo.vue'

export default {
  metaInfo: {
    title: 'About, people, biography, team.'
  },
  components: { MoreInfo },
  data() {
    return {
      imagePath: '~/assets/images/people.jpg',
      heading1: 'Our Business Is People',
      subHeading:
        'Assisting people, nurturing tallent and growing a prosporous future for the next generation.'
    }
  }
  // mounted() {
  // 	console.log(this.$route)
  // }
}
</script>

<style></style>
