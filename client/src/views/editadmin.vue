<template>
  <div
    class="
      bg-gradient-to-tr
      via-blue-300
      from-green-500
      to-purple-to-tr
      h-screen
      justify-center
    "
  >
    <nav-bar />

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
      style="border-radius: 50px; background-color: rgba(229, 231, 235, 0.8)"
    >
      <h1 class="text-3xl font-bold text-center">Edit Admin Info</h1>
      <br />
      <p class="font-bold">Name</p>
      <input
        type="text"
        style="border-radius: 10px; height: 30px; text-align: center"
      />
      <br />
      <br />
      <p class="font-bold">College</p>
      <input
        type="text"
        style="border-radius: 10px; height: 30px; text-align: center"
      />
      <br />
      <br />
      <p class="font-bold">Department</p>
      <input
        type="text"
        style="border-radius: 10px; height: 30px; text-align: center"
      />
      <br />
      <br />

      <p class="font-bold">Email</p>
      <input
        type="text"
        style="border-radius: 10px; height: 30px; text-align: center"
      />

      <br />
      <br />
      <div>
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
</template>
<script>
export default {
  name: 'EditAdmin',
  //   components: {  ---> when used page is not loading
  //     NavBar,
  //   },
};
</script>
