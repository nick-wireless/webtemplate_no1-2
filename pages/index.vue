<template>
  <div id="container">
    <div id="background-cover" class="flex w-screen ">
      <img
        class="absolute h-screen md:max-w-screen-md object-cover z-10"
        src="@/assets/images/home.jpg"
        alt="greenhouse"
      />
    </div>
    <div class="h-56 relative"></div>
    <div class="flex flex-col items-end">
      <h2
        class=" inline-block relative z-30 mt-8 pr-8 md:px-16 font-sans font-display text-white font-bold text-3xl tracking-wider text-right"
      >
        {{ heading1 }}
      </h2>
      <h3
        class=" inline-block relative z-30 mt-8 p-8 md:px-16 font-sans font-display text-white font-semibold text-2xl tracking-wide text-right leading-loose"
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
  components: {
    MoreInfo
  },
  data() {
    return {
      heading1: 'Our Mission Is Great',
      subHeading: 'Let us tell you why. It begins with a great website.'
    }
  }
}
</script>

<style></style>
