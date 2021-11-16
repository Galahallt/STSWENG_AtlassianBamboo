<template>
  <div
    class="
      flex
      items-center
      justify-center
      min-h-screen
      bg-gradient-to-tr
      via-blue-300
      from-green-500
      to-purple-to-tr
    "
  >
    <div class="px-8 py-6 mt-4 text-left bg-white shadow-lg">
      <div class="flex justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-20 h-20 text-green-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path
            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
          />
        </svg>
      </div>
      <h3 class="text-2xl font-bold text-center">
        Welcome to DLSU Profs to Pick!
      </h3>
      <form action="">
        <div class="mt-4">
          <div class="flex items-baseline justify-center">
            <button
              id="google-login"
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
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { onMounted } from '@vue/runtime-core';
import { generateKeyPairSync } from 'crypto';

import * as api from '../api';

export default {
  name: 'Login',
  setup() {
    onMounted(() => {
      gapi.signin2.render('google-login', {
        onsuccess: loginUser(),
      });
    });
    async function loginUser() {
      try {
        await api.loginUser();
      } catch (err) {
        console.log(err);
      }
    }
  },
};
</script>
