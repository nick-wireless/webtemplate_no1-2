<template>
  <div id="mail-form-long" class="relative w-screen h-56 z-30 px-4">
    <div id="card" class="bg-teal-200 rounded-md">
      <div id="address-details" class="flex flex-col">
        <div class="pt-2">
          <span>To:</span>
          <span>Darwin Office</span>
        </div>
        <div class="pt-2">
          <span>From:</span>
          <span>{{ email }}</span>
        </div>
        <div class="pt-2">
          <span>And: </span>
          <span>{{ phone }}</span>
        </div>
      </div>
      <div class="flex flex-col items-center pt-4">
        <label for="email-text">
          <textarea
            id="message"
            v-model="message"
            name="message"
            cols="30"
            rows="10"
            class=" p-2"
          >
          </textarea>
        </label>
        <button
          class="my-2 md:m-8 mx-16 px-6 font-sans font-display text-white tracking-wide leading-loose bg-purple-400 rounded-sm button-float-right z-30 focus:outline-none "
        >
          Send
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    email: {
      type: String,
      error: false,
      required: true
    },
    phone: {
      type: Number,
      error: false,
      required: true
    }
  },
  data() {
    return {
      message: 'Please call [ enter your name ].  Or type a custom message.'
    }
  }
}
</script>

<style lang="scss" scoped></style>
