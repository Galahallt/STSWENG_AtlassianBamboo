<template>
  <div class="min-h-screen justify-center" style="background-color: #edfff7">
    <nav-bar />

    <p v-if="state.render === null" class="hello_color font-bold">
      Rendering page...
    </p>

    <div v-if="state.render !== null">
      <div class="flex space-x-4 space-x-reverse flex-row-reverse mr-8">
        <button
          class="
            px-6
            py-2
            mt-4
            text-white
            dark_green
            rounded-lg
            hover:bg-green-900
            shadow-lg
          "
          @click="toggleAddAdminModal"
        >
          <svg
            width="18"
            height="18"
            viewBox="4 2 16 24 "
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="inline-flex items-center"
          >
            <path
              d="M12 12H4M12 20V12V20ZM12 12V4V12ZM12 12H20H12Z"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
          New Admin
        </button>
      </div>

      <addAdmin :addAdmin="showAddAdminModal" @close="toggleAddAdminModal">
        <div class="mt-4 justify-center">
          <input
            type="text"
            placeholder="Email"
            class="
              w-full
              px-4
              py-2
              mt-2
              border
              rounded-md
              focus:outline-none focus:ring-1 focus:ring-green-600
            "
          />
        </div>
        <div class="mt-2 ml-1">
          <h1 style="color: red">Invalid Email!</h1>
        </div>

        <button
          @click="addAdmin"
          class="px-2 py-2 mt-4 text-white rounded-lg hover:bg-gray-900"
          style="background-color: #37b47e"
        >
          Save
        </button>
      </addAdmin>

      <br />

      <div class="flex space-x-5 ml-8 mr-8">
        <br />

        <div class="flex-col flex-grow">
          <div class="grid grid-cols-4 bg-gray-400">
            <div class="text-white ml-3">Name</div>
            <div class="text-white ml-3">Email</div>
            <div class="text-white ml-3">Date Added</div>
            <div class="text-white ml-3">Action</div>
          </div>
          <div
            v-for="items in state.admins"
            :key="items.email"
            class="overscroll-auto"
          >
            <div class="grid grid-cols-4 bg-gray-100">
              <!-- insert admins here -->
              <div class="text-black ml-3">{{ items.fullName }}</div>
              <div class="text-black ml-3">{{ items.email }}</div>
              <div class="text-black ml-3">11/20/2021</div>
              <div>
                <button
                  v-if="state.loggedUser != items.email"
                  class="
                    px-2
                    py-1
                    mt-2
                    text-green-600
                    bg-white
                    rounded-lg
                    border-2 border-green-600
                    hover:bg-gray-200
                    shadow-lg
                    mb-2
                  "
                  v-bind:name="'rmv-' + items.email"
                  @click="removeAdmin(items.email)"
                >
                  Remove
                </button>
                <button
                  v-else
                  class="
                    px-2
                    py-1
                    mt-2
                    text-green-600
                    bg-white
                    rounded-lg
                    border-2 border-green-600
                    hover:bg-gray-200
                    shadow-lg
                    mb-2
                    cursor-not-allowed
                  "
                  v-bind:name="'rmv-' + items.email"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import NavBar from '../components/NavBar.vue';
import addAdmin from '../components/addAdminModal.vue';
import { onBeforeMount } from '@vue/runtime-core';
import { reactive, ref } from 'vue';
import * as api from '../api';
export default {
  name: 'Admin List',
  components: {
    NavBar,
    addAdmin,
  },
  setup() {
    let state = reactive({
      admins: null,
      error: false,
      isAdministrator: false,
      email: JSON.parse(localStorage.getItem('user')).email,
      loggedUser: null,
      render: null,
    });
    //if theres no entries make `error` true and display error msg
    const showAddAdminModal = ref(false);
    async function getAdminList() {
      try {
        const result = await api.getAdminList();
        state.admins = result.data;
        console.log(result.data);
      } catch (err) {
        console.log(err);
      }
    }
    async function removeAdmin(email) {
      try {
        const result = await api.postRemoveAdmin(email);
        if (result) {
          alert('Professor admin access removed!');
          getAdminList();
        }
      } catch (err) {
        console.log(err);
      }
    }

    function toggleAddAdminModal() {
      showAddAdminModal.value = !showAddAdminModal.value;
      console.log(showAddAdminModal.value);
    }

    async function loadCurrUser() {
      try {
        const result = await api.getUserByEmail(state.email);
        state.loggedUser = result.data.email;
        state.render = false;
      } catch (err) {
        console.log(err);
      }
    }
    // this thing runs first thing before the page loads in
    onBeforeMount(() => {
      getAdminList();
      loadCurrUser();
    });
    return { state, toggleAddAdminModal, showAddAdminModal, removeAdmin };
  },
};
</script>

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
