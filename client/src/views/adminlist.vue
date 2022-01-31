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

    <div>
      <div class="flex space-x-4 space-x-reverse flex-row-reverse mr-8">
        <router-link
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
          to="/addadmin"
        >
          New Admin
        </router-link>
      </div>

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
                    text-white
                    bg-red-600
                    rounded-lg
                    hover:bg-red-900
                    shadow-lg
                    mb-2
                    mt-2
                  "
                  v-bind:name="'rmv-'+items.email"
                  @click="removeAdmin(items.email)"
                >
                  Remove
                </button>
                <button
                  v-else
                  class="
                    px-2
                    py-1
                    text-white
                    bg-red-600
                    rounded-lg
                    hover:bg-red-900
                    shadow-lg
                    mb-2
                    mt-2
                    opacity-50
                    cursor-not-allowed
                  "
                  v-bind:name="'rmv-'+items.email"
                >
                  Remove
                </button>
                <button
                  class="
                    px-2
                    py-1
                    ml-3
                    text-white
                    bg-gray-600
                    rounded-lg
                    hover:bg-green-900
                    shadow-lg
                    mb-2
                    mt-2
                  "
                  v-bind:name="'mod-'+items.email"
                >
                  Modify
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
import { getCurrentInstance, onBeforeMount } from '@vue/runtime-core';
import { useRouter } from 'vue-router';
import { reactive } from 'vue';
import * as api from '../api';
export default {
  name: 'Admin List',
  components: {
    NavBar,
  },
  setup() {
    let state = reactive({
      admins: null,
      error: false,
      isAdministrator: false,
      email: JSON.parse(localStorage.getItem('user')).email,
      loggedUser: null,
    });
    //if theres no entries make `error` true and display error msg
    const app = getCurrentInstance();
    const router = useRouter();
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
    async function loadCurrUser() {
      try {
        const result = await api.getUserByEmail(state.email);
        state.loggedUser = result.data.email;
      } catch (err) {
        console.log(err);
      }
    }
    // this thing runs first thing before the page loads in
    onBeforeMount(() => {
      getAdminList();
      loadCurrUser();
    });
    return { state, removeAdmin };
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
