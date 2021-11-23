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
      font-sans
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

    <div>
      <div class="flex space-x-reverse flex-row-reverse mr-8">
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
            Save
          </button>
        </div>
      </div>

      <div class="grid grid-cols-9 gap-4">
        <div class="col-span-3"></div>
        <div class="text-left col-span-1 space-y-6">
          <div class="text-black">First Name</div>
          <div class="text-black">Middle Name</div>
          <div class="text-black">Last Name</div>
          <div class="text-black">DLSU Email</div>
          <div class="text-black">College</div>
          <div class="text-black">Department</div>
          <div class="text-black">Courses</div>
        </div>
        <div class="text-left space-y-6 col-span-5">
          <div>
            <input class="w-72" />
          </div>
          <div>
            <input class="w-72" />
          </div>
          <div>
            <input class="w-72" />
          </div>
          <div>
            <input class="w-72" />
          </div>
          <div class="relative mt-20">
            <!-- insert dropdown -->
            <select class="dropdown-field w-72">
              <option value="placeholder" disabled selected hidden>
                Select One
              </option>
              <option value="College of Business">College of Business</option>
              <option value="School of Economics">School of Economics</option>
              <option value="College of Liberal Arts">
                College of Liberal Arts
              </option>
              <option value="College of Science">College of Science</option>
              <option value="College of Engineering">
                College of Engineering
              </option>
              <option value="College of Computer Studies">
                College of Computer Studies
              </option>
              <option value="College of Education">College of Education</option>
            </select>
          </div>
          <div>
            <select class="dropdown-field w-72">
              <option value="placeholder" disabled selected hidden>
                Select One
              </option>
              <option value="ST">ST</option>
              <option value="IS">IS</option>
            </select>
          </div>
          <div cl>
            <input class="w-72" />
            <button
              class="
                px-2
                ml-12
                text-white
                bg-green-600
                rounded-lg
                hover:bg-green-900
                shadow-lg
              "
            >
              +
            </button>

            <button
              class="
                px-2
                ml-4
                text-white
                bg-red-600
                rounded-lg
                hover:bg-red-900
                shadow-lg
              "
            >
              -
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
