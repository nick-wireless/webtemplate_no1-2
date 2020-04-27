<template>
  <div
    id="sending-form"
    class="md:inline-block my-4 flex justify-around md:flex-none "
  >
    <div
      id="address-to-from"
      class=" ml-4 mr-4 bg-teal-200 h-56 rounded-md relative"
    >
      <div class="absolute inline-block right-0">
        <SendingIcon class=" w-12 h-12 p-2"></SendingIcon>
      </div>
      <form class="mt-2" @submit.prevent="notify">
        <input type="hidden" name="form-name" value="contactForm" />
        <!-- To: Darwin Office -->
        <div class="flex text-blue-800 font-sans font-display font-semibold">
          <label class="inline-block self-center ml-6 mt-6 w-16">To:</label>
          <div
            class="inline-block self-center mt-6 w-48 font-serif font-headings font-light text-lg italic text-teal-700 "
          >
            Darwin Office,
          </div>
        </div>
        <!-- From: guestEmail -->
        <div class="flex text-blue-800 font-sans font-display font-semibold">
          <label
            class="inline-block self-center ml-6 mt-4 w-16"
            for="guestEmail"
            >From:</label
          >
          <input
            id="guestEmail"
            v-model="guestEmail"
            class="inline-block mt-4 pl-2 mr-3 w-48 h-10 rounded"
            autocomplete="email"
            placeholder="Your email here ..."
          />
        </div>
        <div
          class="flex align-center text-blue-800 font-sans font-display font-semibold"
        >
          <label
            class="inline-block self-center ml-6 mt-4 w-16"
            for="guestPhone"
            >Phone:</label
          >
          <input
            id="guestPhone"
            v-model.number="guestPhone"
            class="inline-block mt-4 pl-2 w-48 h-10 rounded"
            autocomplete="tel"
            placeholder="Your phone here ..."
          />
        </div>
        <div class="flex items-center justify-end">
          <button
            id="nextButton"
            type="submit"
            name="button"
            class="inline-block h-12 p-3 font-display text-purple-500 "
            :disabled="!hasTwoInputs"
          >
            Next
          </button>
          <NextIcon class="inline-block w-8 h-8 primary pt-3"></NextIcon>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import SendingIcon from '~/assets/svgs/Sending.vue'
import NextIcon from '~/assets/svgs/Next.vue'

export default {
  components: { SendingIcon, NextIcon },
  data() {
    return {
      guestEmail: null,
      guestPhone: null,
      cleanPhoneNo: null
      // guestPhone: Number
    }
  },
  computed: {
    isValidPhone() {
      return typeof this.cleanPhoneNo === 'number'
    },

    cleaningPhoneNo() {
      const filter = /\d/g
      const cleaner = this.guestPhone.replace(filter, '')
      this.cleanPhoneNo = parseInt(cleaner)
    },

    howLong() {
      return String(this.cleanPhoneNo).length
    },

    emailIsValid() {
      const filter = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/
      if (filter.test(this.guestEmail)) {
        return true
      }
      return false
    },
    hasTwoInputs() {
      return this.guestEmail !== null && this.guestPhone !== null
    },
    formIsValid() {
      return this.emailIsValid && this.phoneIsValid
    }
  },
  methods: {
    notify() {
      if (this.formIsValid) {
        console.log(
          'Email is: ' + this.guestEmail,
          'Phone is: ' + this.guestPhone
        )
      } else {
        console.log('An error found with the inputs.')
      }
    }
  }
}
</script>

<style>
.primary {
  @apply fill-current text-gray-600;
}
</style>
