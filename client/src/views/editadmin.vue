<template>
  <div
    style="background-color: #edfff7; height: 100hv"
    name="background_all"
    id="background_all"
    class="justify-center"
  >
    <nav-bar />

    <br />

    <div class="flex items-center justify-center space-x-12">
      <div>
        <div class="mr-3">
          <img
            class="pt-5 rounded-full lg-shadow"
            style="width: 300px; height: 300px"
            src="https://menlocoa.org/wp-content/uploads/2012/09/Screen-Shot-2012-09-20-at-11.54.59-AM.png"
          />
        </div>

        <br />
        <div class="ml-16">
          <button
            class="px-8 py-2 mt-4 text-white rounded-lg"
            style="background-color: #37b47e"
          >
            Edit Profile
          </button>
        </div>
      </div>

      <br />
      <div
        class="
          px-10
          py-6
          mt-10
          ml-20
          mr-20
          text-center
          bg-gray-200
          shadow-lg
          justify-center
        "
        style="border-radius: 50px; background-color: #ffffff"
      >
        <h1 class="text-3xl font-bold text-center">Edit Professor Info</h1>
        <br />
        <p class="font-bold">First Name</p>
        <input
          type="text"
          class="input-text-field sm:w-16 md:w-32 lg:w-64 ml-10 capitalize"
          style="
            border-radius: 10px;
            border-color: #546681;
            height: 30px;
            text-align: center;
          "
        />
        <br />
        <br />
        <p class="font-bold">Last Name</p>
        <input
          type="text"
          class="input-text-field sm:w-16 md:w-32 lg:w-64 ml-10 capitalize"
          style="
            border-radius: 10px;
            border-color: #546681;
            height: 30px;
            text-align: center;
          "
        />
        <br />
        <br />
        <p class="font-bold">College</p>
        <input
          type="text"
          class="input-text-field sm:w-16 md:w-32 lg:w-64 ml-10 capitalize"
          style="
            border-radius: 10px;
            border-color: #546681;
            height: 30px;
            text-align: center;
          "
        />
        <br />
        <br />
        <p class="font-bold">Department</p>
        <input
          type="text"
          class="input-text-field sm:w-16 md:w-32 lg:w-64 ml-10 capitalize"
          style="
            border-radius: 10px;
            border-color: #546681;
            height: 30px;
            text-align: center;
          "
        />
        <br />
        <br />

        <p class="font-bold">Email</p>
        <input
          type="text"
          class="input-text-field sm:w-16 md:w-32 lg:w-64 ml-10 capitalize"
          style="
            border-radius: 10px;
            border-color: #546681;
            height: 30px;
            text-align: center;
          "
        />

        <br />
        <br />

        <p class="font-bold">Status</p>
        <div>
          <select class="rounded-md" style="border-color: #546681">
            <option selected disabled hidden>Choose One</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>

        <br />
        <br />
        <div>
          <button
            class="px-6 py-2 mt-4 text-white rounded-lg"
            style="background-color: #37b47e"
          >
            Save
          </button>

          <button
            class="
              px-6
              py-2
              mt-4
              ml-2
              text-white
              bg-red-600
              rounded-lg
              hover:bg-gray-900
            "
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import NavBar from '../components/NavBar.vue';
<<<<<<< HEAD

export default {
  name: 'EditAdmin',
=======
export default {
  name: 'editadmin',
>>>>>>> a7e0a1f6e8d5c543ee07b8012424cedfa0ed55a7
  components: {
    NavBar,
  },
};
</script>
