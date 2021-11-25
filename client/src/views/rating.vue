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
    <NavBar />
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
    <div class="grid grid-cols-10 gap-4 mt-12">
      <div class="col-span-3"></div>
      <div class="col-span-5 space-y-6 text-left">
        <div class="text-black text-3xl font-bold">
          {{ profLast + ', ' + profFirst }}
        </div>
        <div class="text-black flex">
          <div>Email:</div>
          <div class="ml-2">{{ email }}</div>
        </div>
        <div class="text-black flex">
          <div>College:</div>
          <div class="ml-2">{{ college }}</div>
        </div>
        <div class="text-black flex">
          <div>Department:</div>
          <div class="ml-2">{{ dept }}</div>
        </div>
        <div class="text-black flex">
          <div>Rating:</div>
          <div class="ml-2">{{ rating + '/5' }}</div>
        </div>
        <div class="text-black flex">
          <div>Courses taught:</div>
          <div class="ml-2">{{ state.tagString }}</div>
        </div>
      </div>
      <div class="col-span-2 mr-8">
        <div class="flex flex-row-reverse mr-6">
          <button
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
            @click="toggleWriteModal"
          >
            Write Review
          </button>
        </div>
        <writeModal :writeReview="showWriteModal" @close="toggleWriteModal"
          ><button
            class="
              px-6
              py-2
              mt-4
              text-white
              bg-green-600
              rounded-lg
              hover:bg-green-900
              shadow-lg
              flex-shrink
              content-center
              update-btn
            "
            @click="addRating"
          >
            Submit Review
          </button></writeModal
        >
        <vue3-star-ratings :disableClick="true" v-model="state.rating" />
        <div class="flex justify-center">
          <div>Numeric value:</div>
          <div class="ml-2">{{ state.rating }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.update-btn {
  position: absolute;
  background-color: #0f4c81;
  color: white;
  border-radius: 20px;
  bottom: 15px;
  width: 25%;
  left: 70%;
  height: 3rem;
  vertical-align: middle;
  outline: none;
}
</style>

<script>
import * as api from '../api/index.js';
import { ref, onBeforeMount, reactive } from 'vue';
import writeModal from '../components/writeReviewModal.vue';
import NavBar from '../components/NavBar.vue';

export default {
  name: 'View Professor',
  components: { NavBar, writeModal },
  props: {
    profLast: {
      type: String,
    },
    profFirst: {
      type: String,
    },
    email: {
      type: String,
    },
    college: {
      type: String,
    },
    dept: {
      type: String,
    },
    rating: {
      type: String,
    },
    tags: {
      type: Array,
    },
  },
  setup(props) {
    const state = reactive({
      rating: 0,
      tagString: '',
    });

    // load tags before loading
    onBeforeMount(() => {
      formatTags();
    });

    // tag formatting for printing
    function formatTags() {
      for (let i = 0; i < props.tags.length; i++) {
        if (i != props.tags.length - 1) {
          state.tagString += props.tags[i] + ', ';
        } else {
          state.tagString += props.tags[i];
        }
      }
    }

    // insert rating to database
    async function addRating() {
      try {
        const email = JSON.parse(localStorage.getItem('user')).email;

        const rate = {
          rating: state.rating,
          userEmail: email,
          instructorEmail: props.email,
        };

        const res = await api.addRating(rate);

        if (res) {
          console.log(res);
        }
      } catch (err) {
        console.log(err.response.data);
      }
    }

    // declare modal
    const showWriteModal = ref(false);

    // toggle modal
    function toggleWriteModal() {
      showWriteModal.value = !showWriteModal.value;
    }

    return {
      state,
      showWriteModal,
      toggleWriteModal,
      addRating,
    };
  },
};
</script>
