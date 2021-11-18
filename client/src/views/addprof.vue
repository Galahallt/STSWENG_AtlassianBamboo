<template>
  <div>
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

    <div class="bg-gray-200">
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
        <div class="text-left space-y-6">
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
          <div>
            <!-- insert dropdown -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
