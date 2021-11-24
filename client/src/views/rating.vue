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
    <!-- <button
      @click="logoutUser"
      :disabled="!Vue3GoogleOauth.isAuthorized"
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
      Logout
    </button>
    <h1>IsInit: {{ Vue3GoogleOauth.isInit }}</h1>
    <h1>IsAuthorized: {{ Vue3GoogleOauth.isAuthorized }}</h1> -->

    <div>
      <vue3-star-ratings :disableClick="true" v-model="state.rating" />
      <h1>{{ state.rating }}</h1>
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
import { inject, getCurrentInstance, reactive } from 'vue';
// import { useStore } from 'vuex';
// import { useRouter } from 'vue-router';

export default {
  // name: 'Login',
  setup() {
    let state = reactive({
      rating: 0,
    });
    // const app = getCurrentInstance();
    // const gAuth = app.appContext.config.globalProperties.$gAuth;
    // const router = useRouter();
    // const store = useStore();
    // const Vue3GoogleOauth = inject('Vue3GoogleOauth');

    // async function logoutUser() {
    //   console.log('hello');
    //   try {
    //     await gAuth.signOut();
    //     console.log('isAuthorized', this.Vue3GoogleOauth.isAuthorized);
    //     store.dispatch('logoutUser');
    //     router.push({ name: 'Login' });
    //   } catch (error) {
    //     console.error(error);
    //   }
    // }

    return {
      state,
      // Vue3GoogleOauth,
      // logoutUser,
    };
  },
};
</script>
