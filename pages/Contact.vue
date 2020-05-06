<template>
  <div>
    <div id="background-cover" class="flex w-screen">
      <img
        class="absolute h-screen md:max-w-screen-md object-cover z-10 "
        src="~/assets/images/contact.jpg"
      />
    </div>
    <div class="h-56 relative"></div>
    <section class=" flex flex-col md:flex-row md:justify-center">
      <!-- Form to collect email & phone number. -->
      <MailForm class="relative z-30"></MailForm>
      <div
        id="corporate-address"
        class="inline-block relative z-30 px-10 mt-4 font-sans font-display font-normal text-white text-lg leading-relaxed text-right  "
      >
        <div>Corporate Name Pty Ltd</div>
        <div>+61 8 8981 5555</div>
        <div>GPO Box 1000</div>
        <div>Darwin, Northern Territory</div>
        <div>ABN: 12 345 6789</div>
      </div>
    </section>
  </div>
</template>

<script>
import MailForm from '~/components/MailForm.vue'

export default {
  metaInfo: {
    title: 'Home'
  },
  components: { MailForm },
  data() {
    return {
      imagePath: '~/assets/images/home.jpg'
    }
  }
}
</script>

<style></style>
