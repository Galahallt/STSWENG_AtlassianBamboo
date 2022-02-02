<template>
  <div
    class="
      login-body
      flex
      min-h-screen
      flex
    "
  >

  <svg class="bg-effect mr-auto invisible md:visible" viewBox="0 0 870 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="0.0500488" y="614.1" width="969.278" height="255.764" rx="127.882" transform="rotate(-39.3136 0.0500488 614.1)" fill="#B1E9D6"/>
    <path d="M171.021 837.382C126.274 782.738 134.297 702.167 188.941 657.42L651.029 279.022C705.672 234.275 786.244 242.297 830.991 296.941V296.941C875.738 351.584 867.715 432.156 813.072 476.903L350.984 855.301C296.34 900.048 215.768 892.025 171.021 837.382V837.382Z" fill="#5DA3BC"/>
  </svg>

    <div class="login-container px-8 py-6 m-auto bg-white shadow-lg rounded-lg">
      <div class="flex justify-center mx-auto my-4">
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 48L57.3333 6.66666M54.4667 58.56L52.368 58.1413C49.2347 57.5147 47.808 53.332 48.804 50.296C51.4093 42.3493 49.5 32.1493 48.444 27.7453C48.116 26.38 47.0333 25.3533 45.6707 25.012L42.6533 24.2587C41.9499 24.0828 41.3075 23.7191 40.7949 23.2065C40.2822 22.6938 39.9185 22.0514 39.7427 21.348L38.9893 18.332C38.648 16.968 37.6227 15.8867 36.256 15.5587C31.8533 14.5027 21.6507 12.592 13.7053 15.1987C10.6707 16.1947 6.488 14.7667 5.86134 11.6333L5.44 9.53466L54.4667 58.56ZM8 14.6667L50.6667 57.3333L8 14.6667Z" stroke="#37B47E" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <h3 class="text-2xl font-bold text-center">
        Welcome to DLSU Profs to Pick!
      </h3>
      <div class="mt-4">
        <div class="flex items-baseline justify-center">
          <button
            @click="loginUser"
            :disabled="!Vue3GoogleOauth.isInit || Vue3GoogleOauth.isAuthorized"
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
            Login with Google Account
          </button>
        </div>
        <p
          v-if="state.error"
          class="ml-2 mt-4 text-red-600 manrope-bold text-center text-sm"
        >
          Please use a DLSU account!
        </p>
      </div>
    </div>
  <img class="teacher ml-auto mt-auto sm:invisible invisible md:visible" src="../assets/teacher.png" alt="">




  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@700;800&display=swap');
:root {
  --green: #37b47e;
  --light-green: #edfff7;
  --gray: #546681;
}
.login-body{
  background-color: var(--light-green);
  z-index: -9999;
}
button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.bg-effect{
position: relative;
z-index: 1;
width: 33%;
height: auto;
margin-top: -50%;
margin-left: -15%;
}
.teacher{
  position: relative;
  z-index: 1;
  width: 300px;
  height: fit-content;
  
}
.login-container{
  position:sticky;
  z-index: 9999; 
  background-color: red;
  min-width: 500px;
  margin-left: auto;
  font-family: 'Manrope', sans-serif;
  font-weight: 800;
  
}
</style>

<script>
import { inject, getCurrentInstance, reactive } from 'vue';
import { useStore } from 'vuex';
import * as api from '../api';
import { useRouter } from 'vue-router';

export default {
  name: 'Login',
  setup() {
    let state = reactive({
      error: false,
    });
    const app = getCurrentInstance();
    const gAuth = app.appContext.config.globalProperties.$gAuth;
    const router = useRouter();
    const store = useStore();
    const Vue3GoogleOauth = inject('Vue3GoogleOauth');

    async function loginUser() {
      try {
        const googleUser = await gAuth.signIn();
        if (!googleUser) {
          console.log('empty google user');
        } else {
          const profile = googleUser.getBasicProfile();

          const user = {
            id: profile.getId(),
            fullName: profile.getName(),
            givenName: profile.getGivenName(),
            familyName: profile.getFamilyName(),
            imageURL: profile.getImageUrl(),
            email: profile.getEmail(),
            accessToken: gAuth.instance.currentUser.get().getAuthResponse()
              .access_token,
          };
          const result = await api.loginUser(user);
          console.log(result.data);
          if (result.data) {
            store.dispatch('loginUser', result.data);
            router.push({ name: 'Home' });
          }
        }
      } catch (error) {
        console.log(error.response);
        await gAuth.signOut();
        state.error = true;
      }
    }

    return {
      Vue3GoogleOauth,
      loginUser,
      state,
    };
  },
};
</script>
