<template>
  <div
    class="
      bg-gradient-to-tr
      via-blue-300
      from-green-500
      to-purple-to-tr
      w-full
      h-screen
      block
    "
  >
    <nav-bar />

    <div
      class="flex items-center justify-center mt-12"
      style="margin-left: 60px; margin-top: 90px"
    >
      <div>
        <img
          class="pt-5 rounded-full lg-shadow"
          style="width: 300px; height: 300px"
          src="https://menlocoa.org/wp-content/uploads/2012/09/Screen-Shot-2012-09-20-at-11.54.59-AM.png"
        />
      </div>

      <div
        class="
          px-10
          py-6
          mt-10
          ml-16
          text-center
          bg-gray-200
          shadow-lg
          justify-center
        "
        style="border-radius: 50px; background-color: rgba(229, 231, 235, 0.8)"
      >
        <h1 class="text-3xl font-bold text-center">Mr. John Doe</h1>
        <br />
        <p class="font-bold">Code</p>
        <input
          type="text"
          style="border-radius: 10px; height: 30px; text-align: center"
        />
        <br />
        <br />
        <p class="font-bold">Comment</p>
        <textarea
          v-model="message"
          placeholder="Type your comment here"
          style="height: 100px; width: 600px; outline: true border-radius: 20px"
        ></textarea>
        <br />
        <br />
        <button
          class="
            px-6
            py-2
            mt-4
            text-white
            bg-green-600
            rounded-lg
            hover:bg-gray-900
          "
        >
          Publish
        </button>
      </div>
    </div>
  </div>
</template>

<style>
button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>

<script>
import NavBar from '../components/NavBar.vue';
export default {
  name: 'ReviewProf',
  components: {
    NavBar,
  },
};
</script>
