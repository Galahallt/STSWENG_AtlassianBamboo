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
    <div class="flex flex-row-reverse mt-1 mr-3">
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
        Leave Rating
      </button>
      <button
        class="
          px-6
          py-2
          mt-4
          mr-2
          text-white
          bg-green-600
          rounded-lg
          hover:bg-gray-900
        "
      >
        Write Review
      </button>
    </div>
    <!-- body  -->
    <div class="grid grid-cols-2 py-2 px-12 justify-center">
      <!-- IMAGE AND PROF INFO -->
      <div>
        <br />
        <br />
        <br />
        <div>
          <img
            class="pt-2 rounded-full"
            style="width: 300px; height: 300px; margin-left: 250px"
            src="https://menlocoa.org/wp-content/uploads/2012/09/Screen-Shot-2012-09-20-at-11.54.59-AM.png"
          />
        </div>
        <!-- Prof Info -->
        <div
          class="py-3 px-1 mt-1 text-center"
          style="border-radius: 50px; width: 500px; margin-left: 150px"
        >
          <div
            class="flex-col flex-grow overflow-y-auto scrollbar-hidden"
            style="border-radius: 10px"
          >
            <div class="overscroll-auto" style="height: 200px">
              <div
                class="grid grid-cols-2 bg-gray-100 py-2 px-2"
                style="background-color: rgba(243, 244, 246, 0.5)"
              >
                <div class="text-black text-2xs font-bold mt-1">First Name</div>
                <div class="text-black text-2xs mt-1">John</div>
                <div class="text-black text-2xs font-bold mt-2">Last Name</div>
                <div class="text-black text-2xs mt-2">Doe</div>
                <div class="text-black text-2xs font-bold mt-2">DLSU Email</div>
                <div class="text-black text-2xs mt-2">John.doe@dlsu.edu.ph</div>
                <div class="text-black text-2xs font-bold mt-2">College</div>
                <div class="text-black text-2xs mt-2">
                  College of Computer Studies
                </div>
                <div class="text-black text-2xs font-bold mt-2">Department</div>
                <div class="text-black text-2xs mt-2">Software Technology</div>
                <div class="text-black text-2xs font-bold mt-2">Rating</div>
                <div class="text-black text-2xs mt-2">3.5</div>
                <div class="text-black text-2xs font-bold mt-2">
                  Subject Tags
                </div>
                <div class="text-black text-2xs overscroll-auto">
                  <div class="bg-gray-200 mt-1">STSWENG</div>
                  <div class="bg-gray-200 mt-1">STALGCM</div>
                  <div class="bg-gray-200 mt-1">STCHIUX</div>
                  <div class="bg-gray-200 mt-1">CSMODEL</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- REVIEWS -->
      <div class="py-5 d-flex flex-col mb-6">
        <div>
          <h1 class="text-3xl font-bold text-center">REVIEWS</h1>

          <div
            class="py-5 text-left justify-center mx-auto"
            style="border-radius: 50px; width: 800px"
          >
            <div
              class="flex-col flex-grow overflow-y-auto scrollbar-hidden"
              style="border-radius: 10px"
            >
              <div class="overscroll-auto" style="height: 520px">
                <div
                  class="grid grid-cols-2 bg-gray-100 py-2 px-2"
                  style="background-color: rgba(243, 244, 246, 0.7)"
                >
                  <!-- One review -->
                  <div class="grid grid-cols-2 py-2">
                    <img
                      class="h-9 w-9 rounded-full mx-auto mt-5"
                      src="https://menlocoa.org/wp-content/uploads/2012/09/Screen-Shot-2012-09-20-at-11.54.59-AM.png"
                    />
                    <label class="text-left text-black text-2xs font-bold mt-5"
                      >Ai-Ai Delas Alas</label
                    >
                  </div>
                  <div class="text-black text-2xs mt-5">
                    <p class="text-justify">
                      Morbi mattis ullamcorper velit. Donec orci lectus, aliquam
                      ut, faucibus non, euismod id, nulla. Fusce convallis metus
                      id felis luctus adipiscing. Aenean massa. Vestibulum purus
                      quam, scelerisque ut, mollis sed, nonummy id, metus. Nulla
                      consequat massa quis enim. Praesent venenatis metus at
                      tortor pulvinar varius. Donec venenatis vulputate lorem.
                      Phasellus accumsan cursus velit. Pellentesque ut neque.
                    </p>
                  </div>
                  <!-- End of One Review -->
                  <!-- two review -->
                  <div class="grid grid-cols-2 py-2">
                    <img
                      class="h-9 w-9 rounded-full mx-auto mt-5"
                      src="https://menlocoa.org/wp-content/uploads/2012/09/Screen-Shot-2012-09-20-at-11.54.59-AM.png"
                    />
                    <label class="text-left text-black text-2xs font-bold mt-5"
                      >Ai-Ai Delas Alas</label
                    >
                  </div>
                  <div class="text-black text-2xs mt-5">
                    <p class="text-justify">
                      Morbi mattis ullamcorper velit. Donec orci lectus, aliquam
                      ut, faucibus non, euismod id, nulla. Fusce convallis metus
                      id felis luctus adipiscing. Aenean massa. Vestibulum purus
                      quam, scelerisque ut, mollis sed, nonummy id, metus. Nulla
                      consequat massa quis enim. Praesent venenatis metus at
                      tortor pulvinar varius. Donec venenatis vulputate lorem.
                      Phasellus accumsan cursus velit. Pellentesque ut neque.
                    </p>
                  </div>
                  <!-- End of two Review -->
                  <!-- two review -->
                  <div class="grid grid-cols-2 py-2">
                    <img
                      class="h-9 w-9 rounded-full mx-auto mt-5"
                      src="https://menlocoa.org/wp-content/uploads/2012/09/Screen-Shot-2012-09-20-at-11.54.59-AM.png"
                    />
                    <label class="text-left text-black text-2xs font-bold mt-5"
                      >Ai-Ai Delas Alas</label
                    >
                  </div>
                  <div class="text-black text-2xs mt-5">
                    <p class="text-justify">
                      Morbi mattis ullamcorper velit. Donec orci lectus, aliquam
                      ut, faucibus non, euismod id, nulla. Fusce convallis metus
                      id felis luctus adipiscing. Aenean massa. Vestibulum purus
                      quam, scelerisque ut, mollis sed, nonummy id, metus. Nulla
                      consequat massa quis enim. Praesent venenatis metus at
                      tortor pulvinar varius. Donec venenatis vulputate lorem.
                      Phasellus accumsan cursus velit. Pellentesque ut neque.
                    </p>
                  </div>
                  <!-- End of two Review -->
                </div>
              </div>
            </div>
          </div>
        </div>
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
  name: 'viewprof',
  components: {
    NavBar,
  },
};
</script>
