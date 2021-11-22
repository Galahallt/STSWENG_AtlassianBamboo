<template>
  <div>
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
    <vue3-star-ratings :disableClick="true" v-model="state.rating" />
    <h1>{{ state.rating }}</h1>
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
