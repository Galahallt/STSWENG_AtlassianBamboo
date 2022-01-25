<template>
  <nav class="bg-green-700">
    <div class="max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center h-16">
        <div class="flex space-x-4">
          <router-link
            class="
              text-gray-100
              hover:bg-green-900 hover:text-white
              px-3
              py-2
              rounded-md
              font-medium
              text-lg
            "
            :to="`/home`"
            >Home</router-link
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

          <button
            @click="logoutUser"
            class="
              text-gray-100
              hover:bg-green-900 hover:text-white
              px-3
              py-2
              rounded-md
              font-medium
              text-lg
            "
          >
            Logout
          </button>
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
            <img class="h-8 w-8 rounded-full" :src="imageURL" alt="" />
          </button>
        </div>
      </div>
    </div>
  </nav>
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

<script>
import { getCurrentInstance } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export default {
  name: 'NavBar',
  setup() {
    const app = getCurrentInstance();
    const router = useRouter();
    const store = useStore();
    const imageURL = JSON.parse(localStorage.getItem('user')).imgURL;
    const gAuth = app.appContext.config.globalProperties.$gAuth;

    async function logoutUser() {
      try {
        await gAuth.signOut();
        store.dispatch('logoutUser');
        router.push({ name: 'Login' });
      } catch (error) {
        console.error(error);
      }
    }

    return {
      logoutUser,
      imageURL,
    };
  },
};
</script>
