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
    <nav class="bg-green-700">
      <div class="max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="relative flex items-center h-16">
          <div class="flex space-x-4">
            <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
            <!-- <a
                  href="#"
                  class="
                    bg-gray-900
                    text-white
                    px-3
                    py-2
                    rounded-md
                    text-sm
                    font-medium
                  "
                  aria-current="page"
                  >Dashboard</a
                > -->

            <a
              href="#"
              class="
                text-gray-100
                hover:bg-green-900 hover:text-white
                px-3
                py-2
                rounded-md
                font-medium
                text-lg
              "
              >Home</a
            >

            <a
              href="#"
              class="
                text-gray-100
                hover:bg-green-900 hover:text-white
                px-3
                py-2
                rounded-md
                font-medium
                text-lg
              "
              >View Professors</a
            >

            <a
              href="#"
              class="
                text-gray-100
                hover:bg-green-900 hover:text-white
                px-3
                py-2
                rounded-md
                font-medium
                text-lg
              "
              >FAQs</a
            >

            <a
              href="#"
              class="
                text-gray-100
                hover:bg-green-900 hover:text-white
                px-3
                py-2
                rounded-md
                font-medium
                text-lg
              "
              >Contact Us</a
            >
          </div>

          <!-- Profile dropdown -->
          <div class="ml-8">
            <button
              type="button"
              class="
                bg-gray-800
                flex
                text-sm
                rounded-full
                focus:outline-none
                focus:ring-2
                focus:ring-offset-2
                focus:ring-offset-gray-800
                focus:ring-white
              "
              id="user-menu-button"
              aria-expanded="false"
              aria-haspopup="true"
            >
              <img
                class="h-8 w-8 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </button>
          </div>
        </div>
      </div>
    </nav>

    <!-- top navigation bar -->
    <!-- <div class="flex items-center justify-around ml-20 mr-20">
      <div class="mt-6">
        <a href="#" class="hover:underline">Home</a>
      </div>
      <div class="mt-6">
        <a href="#" class="hover:underline">View Professors</a>
      </div>
      <div class="mt-6">
        <a href="#" class="hover:underline">FAQs</a>
      </div>
      <div class="mt-6">
        <a href="#" class="hover:underline">Contact Us</a>
      </div>
    </div> -->

    <!-- <div>
      <hr class="ml-32 mr-32" />
    </div> -->

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
          Add Professor
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
          Add Multiple Professors
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
            <div class="text-black">5/5</div>
          </div>
        </div>
        <div class="overscroll-auto">
          <div class="grid grid-cols-4 bg-gray-100">
            <!-- insert professors here -->
            <div class="text-black">Dr. Juanito Delos Reyes</div>
            <div class="text-black">CCS</div>
            <div class="text-black">ST</div>
            <div class="text-black">5/5</div>
          </div>
        </div>
        <div class="overscroll-auto">
          <div class="grid grid-cols-4 bg-gray-100">
            <!-- insert professors here -->
            <div class="text-black">Dr. Juanito Delos Reyes</div>
            <div class="text-black">CCS</div>
            <div class="text-black">ST</div>
            <div class="text-black">5/5</div>
          </div>
        </div>
        <div class="overscroll-auto">
          <div class="grid grid-cols-4 bg-gray-100">
            <!-- insert professors here -->
            <div class="text-black">Dr. Juanito Delos Reyes</div>
            <div class="text-black">CCS</div>
            <div class="text-black">ST</div>
            <div class="text-black">5/5</div>
          </div>
        </div>
        <div class="overscroll-auto">
          <div class="grid grid-cols-4 bg-gray-100">
            <!-- insert professors here -->
            <div class="text-black">Dr. Juanito Delos Reyes</div>
            <div class="text-black">CCS</div>
            <div class="text-black">ST</div>
            <div class="text-black">5/5</div>
          </div>
        </div>
        <div class="overscroll-auto">
          <div class="grid grid-cols-4 bg-gray-100">
            <!-- insert professors here -->
            <div class="text-black">Dr. Juanito Delos Reyes</div>
            <div class="text-black">CCS</div>
            <div class="text-black">ST</div>
            <div class="text-black">5/5</div>
          </div>
        </div>
        <div class="overscroll-auto">
          <div class="grid grid-cols-4 bg-gray-100">
            <!-- insert professors here -->
            <div class="text-black">Dr. Juanito Delos Reyes</div>
            <div class="text-black">CCS</div>
            <div class="text-black">ST</div>
            <div class="text-black">5/5</div>
          </div>
        </div>
        <div class="overscroll-auto">
          <div class="grid grid-cols-4 bg-gray-100">
            <!-- insert professors here -->
            <div class="text-black">Dr. Juanito Delos Reyes</div>
            <div class="text-black">CCS</div>
            <div class="text-black">ST</div>
            <div class="text-black">5/5</div>
          </div>
        </div>
        <div class="overscroll-auto">
          <div class="grid grid-cols-4 bg-gray-100">
            <!-- insert professors here -->
            <div class="text-black">Dr. Juanito Delos Reyes</div>
            <div class="text-black">CCS</div>
            <div class="text-black">ST</div>
            <div class="text-black">5/5</div>
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
