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
    <div class="mt-40"></div>
    <div class="flex items-center justify-center">
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
        <h3 class="text-2l font-bold text-center">Enter DLSU Email</h3>
        <div>
          <input
            v-model="state.email"
            type="text"
            placeholder="Email"
            class="
              w-full
              px-4
              py-2
              mt-2
              border
              rounded-md
              focus:outline-none focus:ring-1 focus:ring-blue-600
            "
          />

          <template v-if="state.attempted">
            <h4
              v-if="!state.error"
              class="text-2l mt-2 font-bold text-center text-green-600"
            >
              {{ state.message }}
            </h4>
            <h4
              v-else
              class="text-2l mt-2 font-bold text-center text-red-600"
            >
              {{ state.message }}
            </h4>
          </template>

          <div class="mt-1">
            <div class="flex items-baseline justify-center">
              <button
                @click="addAdmin"
                class="
                  px-7
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
              <router-link
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
                to="/adminlist"
              >
                Cancel
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getCurrentInstance, onBeforeMount } from '@vue/runtime-core';
import { useRouter } from 'vue-router';
import { reactive } from 'vue';
import * as api from '../api';
export default {
  name: 'Admin List',
  setup() {
    let state = reactive({
      email: '',
      attempted: false,
      message: '',
      error: false,
    });
    //if theres no entries make `error` true and display error msg
    const app = getCurrentInstance();
    const router = useRouter();

    async function addAdmin() {
      const email = state.email;
      state.attempted = true;
      const res = await api.postAddAdmin(email);
      // when getting stuff from SERVER, use res.data prefix

      if (res.data.matchedCount == 0) {
        state.error = true;
        state.email = '';
        state.message = 'Cannot find email!';
      } else {
        state.email = '';
        if (res.data.modifiedCount == 1) {
          state.message = 'Verified!';
        } else {
          state.error = true;
          state.message = 'User is already an Administrator!';
        }
      }
    }
    onBeforeMount(() => {});

    return { state, addAdmin };
  },
};
</script>
