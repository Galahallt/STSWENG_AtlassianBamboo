<template>
  <nav class="dark_green nav-font">
    <div class="px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center h-16">
        <!-- Profile dropdown -->
        <div class="ml-8">
          <button
            type="button"
            class="
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
            <!-- <img class="h-10 w-10 rounded-full" :src="imageURL" alt="" /> -->
            <svg width="45" height="45" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 48L57.3333 6.66666M54.4667 58.56L52.368 58.1413C49.2347 57.5147 47.808 53.332 48.804 50.296C51.4093 42.3493 49.5 32.1493 48.444 27.7453C48.116 26.38 47.0333 25.3533 45.6707 25.012L42.6533 24.2587C41.9499 24.0828 41.3075 23.7191 40.7949 23.2065C40.2822 22.6938 39.9185 22.0514 39.7427 21.348L38.9893 18.332C38.648 16.968 37.6227 15.8867 36.256 15.5587C31.8533 14.5027 21.6507 12.592 13.7053 15.1987C10.6707 16.1947 6.488 14.7667 5.86134 11.6333L5.44 9.53466L54.4667 58.56ZM8 14.6667L50.6667 57.3333L8 14.6667Z" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

          </button>
        </div>
        <div class="flex space-x-4">
          <router-link
            class="
              text-white
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
              text-white
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
              text-white
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
              text-white
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

        <div class="text-white px-3 py-2 rounded-md font-medium text-3xl">
          DLSU PROFS TO PICK
        </div>

        <!-- Search bar -->
        <div class="relative mx-auto text-gray-600 lg:block hidden">
          <input
            class="
              border-2 border-gray-300
              bg-white
              h-10
              pl-2
              pr-8
              rounded-lg
              text-sm
              w-96
              focus:outline-none
            "
            type="search"
            name="search"
            placeholder="Search for an instructor or course code"
          />
          <button type="submit" class="absolute right-0 top-0 mt-3 mr-2">
            <svg
              class="text-green-600 h-4 w-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              id="Capa_1"
              x="0px"
              y="0px"
              viewBox="0 0 56.966 56.966"
              style="enable-background: new 0 0 56.966 56.966"
              xml:space="preserve"
              width="512px"
              height="512px"
            >
              <path
                d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"
              />
            </svg>
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
            <img class="h-10 w-10 rounded-full" :src="imageURL" alt="" />
          </button>
        </div>

        <!-- TRIAL PROFILE PIC -->
      </div>
    </div>
  </nav>
</template>

<style>
.nav-font {
  font-family: 'Manrope', sans-serif;
  background-color: var(--light-green);
  color: var(--gray);
}

.menu {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.menu-item {
  flex: 1;
}

.background_all {
  background-color: #edfff7;
  height: 100vh;
}

.dark_green {
  background-color: #37b47e;
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
