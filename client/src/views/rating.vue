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
          <div class="ml-2">{{ state.avgRating + '/5' }}</div>
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
        <writeModal :writeReview="showWriteModal" @close="toggleWriteModal">
          <div class="grid grid-rows-6 gap-1">
            <div class="row-span-3"></div>
            <div class="row-span-2">
              <div class="flex justify-center">
                <vue3-star-ratings
                  :disableClick="true"
                  v-model="state.rating"
                />
              </div>
              <div class="flex justify-center">
                <div>Numeric value:</div>
                <div class="ml-2">{{ state.rating }}</div>
              </div>
            </div>
            <p
              class="ml-10 text-red-500 manrope-bold text-left text-sm"
              v-if="state.error"
            >
              Error occured.
            </p>
            <div class="row-span-1 grid grid-cols-2">
              <div class="col-span-1">
                <button
                  class="
                    px-6
                    py-2
                    text-white
                    bg-green-600
                    rounded-lg
                    hover:bg-green-900
                    shadow-lg
                    flex-shrink
                    content-center
                  "
                  @click="addRating"
                >
                  Edit Review
                </button>
              </div>
              <div class="col-span-1 justify-self-end">
                <button
                  class="
                    px-6
                    py-2
                    text-white
                    bg-green-600
                    rounded-lg
                    hover:bg-green-900
                    shadow-lg
                    flex-shrink
                    content-center
                  "
                  @click="addRating"
                >
                  Submit Review
                </button>
              </div>
            </div>
          </div>
        </writeModal>
      </div>
    </div>
    <div class="flex ml-16 mt-16">
      <div class="mr-4 font-bold">Filter Review:</div>
      <div>
        <select class="px-4">
          <option value="placeholder" disabled selected hidden>All</option>
        </select>
      </div>
    </div>
    <div class="mt-8 ml-16 mr-16 divide-y divide-gray-500 shadow-md">
      <div class="bg-gray-200 py-2">
        <div class=""></div>
        <div class="ml-8 text-blue-800 text font-bold">Ai Cruz</div>
        <div class="grid grid-cols-10">
          <div class="ml-8 col-span-9">Very good at teaching!</div>
          <div
            class="mr-8 justify-self-end text-xs italic text-red-500 col-span-1"
          >
            Delete Comment
          </div>
        </div>
      </div>
      <div class="bg-gray-200 py-2">
        <div class=""></div>
        <div class="ml-8 text-blue-800 text font-bold">Sheila Supsup</div>
        <div class="grid grid-cols-10">
          <div class="ml-8 col-span-9">Amazing prof!</div>
          <div
            class="mr-8 justify-self-end text-xs italic text-red-500 col-span-1"
          ></div>
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

.edit-btn {
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
import { ref, onBeforeMount, onMounted, reactive } from 'vue';
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
      error: false,
      avgRating: 0,
    });

    // load tags before loading
    onBeforeMount(() => {
      formatTags();
    });

    // load after loading
    onMounted(() => {
      avgRating();
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
          toggleWriteModal();
          state.error = false;
          avgRating();
        } else {
          state.error = true;
        }
      } catch (err) {
        console.log(err.response.data);
      }
    }

    // display rating
    async function avgRating() {
      try {
        const instructor = {
          instructorEmail: props.email,
        };
        const res = await api.getInstructorRatings(instructor);
        state.avgRating = res.data;
        updateRating();
      } catch (err) {
        console.log(err.response.data);
      }
    }

    // update rating in backend
    async function updateRating() {
      try {
        const instructor = {
          instructorEmail: props.email,
          rating: state.avgRating,
        };

        const res = await api.updateRating(instructor);
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
