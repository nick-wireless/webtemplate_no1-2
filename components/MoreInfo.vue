<template>
  <div class="z-30 flex flex-col relative lg:mt-8 ">
    <button
      class="md:mt-8 mx-16 px-6 font-sans font-display text-white tracking-wide leading-loose bg-purple-400 rounded-sm button-float-right z-30"
    >
      More Info
    </button>

    <svg
      class="w-8 h-8 absolute right-0 bottom-0 mr-16 fill-current text-purple-400
        z-20"
      viewBox="0 0 34 34"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        transform="rotate(45 356.0193 72.5736)"
        x="65"
        y="261"
        width="24"
        height="24"
        rx="1"
        fill-rule="evenodd"
      />
    </svg>
  </div>
</template>

<script>
export default {}
</script>

<style>
.button-float-right {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  /* box-shadow: 0 0 1px rgba(0, 0, 0, 0); */
  position: relative;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: transform;
  transition-property: transform;
}

.button-float-right:hover,
.button-float-right:focus,
.button-float-right:active {
  opacity: 100;
  -webkit-transform: translateX(-15px);
  transform: translateX(-15px);
}
.button-float-right:hover:before,
.button-float-right:focus:before,
.button-float-right:active:before {
  -webkit-transform: translateX(15px);
  transform: translateX(15px);
}
</style>
