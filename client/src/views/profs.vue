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
    <!-- top navigation bar -->
    <div class="flex items-center justify-around ml-20 mr-20">
      <div>
        <a href="#" class="hover:underline">Home</a>
      </div>
      <div>
        <a href="#" class="hover:underline">View Professors</a>
      </div>
      <div>
        <a href="#" class="hover:underline">FAQs</a>
      </div>
      <div>
        <a href="#" class="hover:underline">Contact Us</a>
      </div>
    </div>

    <div>
      <hr class="ml-32 mr-32" />
    </div>

    <div class="flex space-x-4 space-x-reverse flex-row-reverse mr-8">
      <div>
        <button
          class="
            px-6
            py-2
            mt-4
            text-white
            bg-green-600
            rounded-lg
            hover:bg-green-900
            shadow-lg
          "
        >
          Admin Access
        </button>
      </div>
      <div>
        <button
          class="
            px-6
            py-2
            mt-4
            text-white
            bg-green-600
            rounded-lg
            hover:bg-green-900
            shadow-lg
          "
        >
          New Professor
        </button>
      </div>
    </div>

    <br />

    <div class="flex space-x-4 ml-8 mr-8">
      <div class="flex-col items-center justify-center bg-gray-400 p-6">
        <div>
          <label class="text-white underline">FILTER BY</label>
        </div>
        <div>
          <label>College</label>
        </div>
        <div>
          <input />
        </div>
        <div>
          <label>Department</label>
        </div>
        <div>
          <input />
        </div>
        <div>
          <label>Course</label>
        </div>
        <div>
          <input />
        </div>
        <div>
          <button
            class="
              px-6
              py-2
              mt-4
              text-white
              bg-green-600
              rounded-lg
              hover:bg-green-900
              shadow-lg
            "
          >
            Modify Filter
          </button>
        </div>
      </div>

      <br />

      <div class="flex-col flex-grow">
        <div class="grid grid-cols-4 bg-gray-400">
          <div class="text-white">Name</div>
          <div class="text-white">College</div>
          <div class="text-white">Department</div>
          <div class="text-white">Rating</div>
        </div>
        <div class="overscroll-auto">
          <div class="grid grid-cols-4 bg-gray-100">
            <!-- insert professors here -->
            <div class="text-black">Dr. Juanito Delos Reyes</div>
            <div class="text-black">CCS</div>
            <div class="text-black">ST</div>
            <div class="text-black">5 star</div>
          </div>
        </div>
        <div class="overscroll-auto">
          <div class="grid grid-cols-4 bg-gray-100">
            <!-- insert professors here -->
            <div class="text-black">Dr. Juanito Delos Reyes</div>
            <div class="text-black">CCS</div>
            <div class="text-black">ST</div>
            <div class="text-black">5 star</div>
          </div>
        </div>
        <div class="overscroll-auto">
          <div class="grid grid-cols-4 bg-gray-100">
            <!-- insert professors here -->
            <div class="text-black">Dr. Juanito Delos Reyes</div>
            <div class="text-black">CCS</div>
            <div class="text-black">ST</div>
            <div class="text-black">5 star</div>
          </div>
        </div>
        <div class="overscroll-auto">
          <div class="grid grid-cols-4 bg-gray-100">
            <!-- insert professors here -->
            <div class="text-black">Dr. Juanito Delos Reyes</div>
            <div class="text-black">CCS</div>
            <div class="text-black">ST</div>
            <div class="text-black">5 star</div>
          </div>
        </div>
        <div class="overscroll-auto">
          <div class="grid grid-cols-4 bg-gray-100">
            <!-- insert professors here -->
            <div class="text-black">Dr. Juanito Delos Reyes</div>
            <div class="text-black">CCS</div>
            <div class="text-black">ST</div>
            <div class="text-black">5 star</div>
          </div>
        </div>
        <div class="overscroll-auto">
          <div class="grid grid-cols-4 bg-gray-100">
            <!-- insert professors here -->
            <div class="text-black">Dr. Juanito Delos Reyes</div>
            <div class="text-black">CCS</div>
            <div class="text-black">ST</div>
            <div class="text-black">5 star</div>
          </div>
        </div>
        <div class="overscroll-auto">
          <div class="grid grid-cols-4 bg-gray-100">
            <!-- insert professors here -->
            <div class="text-black">Dr. Juanito Delos Reyes</div>
            <div class="text-black">CCS</div>
            <div class="text-black">ST</div>
            <div class="text-black">5 star</div>
          </div>
        </div>
        <div class="overscroll-auto">
          <div class="grid grid-cols-4 bg-gray-100">
            <!-- insert professors here -->
            <div class="text-black">Dr. Juanito Delos Reyes</div>
            <div class="text-black">CCS</div>
            <div class="text-black">ST</div>
            <div class="text-black">5 star</div>
          </div>
        </div>
        <div class="overscroll-auto">
          <div class="grid grid-cols-4 bg-gray-100">
            <!-- insert professors here -->
            <div class="text-black">Dr. Juanito Delos Reyes</div>
            <div class="text-black">CCS</div>
            <div class="text-black">ST</div>
            <div class="text-black">5 star</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.menu {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.menu-item {
  flex: 1;
}
</style>

<script></script>
