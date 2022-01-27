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
    <NavBar />

    <!-- body  -->
    <div class="grid grid-cols-8 py-2 px-12">
      <!-- IMAGE AND PROF INFO -->
      <div class="col-span-2 mt-5">
        <div>
          <img
            class="rounded-full ml-14"
            style="width: 230px; height: 230px"
            src="https://menlocoa.org/wp-content/uploads/2012/09/Screen-Shot-2012-09-20-at-11.54.59-AM.png"
          />
        </div>
      </div>
      <!-- Prof Info -->
      <div class="py-3 px-1 mt-1 col-span-4">
        <div
          class="grid grid-cols-10 bg-gray-100 py-2 px-2"
          style="background-color: rgba(243, 244, 246, 0.5)"
        >
          <div class="col-span-3">
            <div class="text-black text-2xs font-bold mt-1 ml-4">
              First Name
            </div>
            <div class="text-black text-2xs font-bold mt-2 ml-4">Last Name</div>
            <div class="text-black text-2xs font-bold mt-2 ml-4">
              DLSU Email
            </div>
            <div class="text-black text-2xs font-bold mt-2 ml-4">College</div>
            <div class="text-black text-2xs font-bold mt-2 ml-4">
              Department
            </div>
            <div class="text-black text-2xs font-bold mt-2 ml-4">Rating</div>
            <div class="text-black text-2xs font-bold mt-2 ml-4">
              Subject Tags
            </div>
          </div>
          <div class="col-span-7">
            <div class="text-black text-2xs mt-1">{{ prof.profFirst }}</div>
            <div class="text-black text-2xs mt-2">{{ prof.profLast }}</div>
            <div class="text-black text-2xs mt-2">{{ prof.email }}</div>
            <div class="text-black text-2xs mt-2">
              {{ prof.college }}
            </div>
            <div class="text-black text-2xs mt-2">{{ prof.dept }}</div>
            <div class="text-black text-2xs mt-2">{{ prof.rating }}</div>
            <div class="mt-2">{{ state.tagString }}</div>
          </div>
        </div>
      </div>
      <div class="col-span-1">
        <router-link :to="`/editprof/${prof.prof_id}`">
          <button
            class="
              px-6
              py-2
              text-white
              bg-green-600
              rounded-lg
              hover:bg-green-900
              shadow-lg
            "
            @click="toggleWriteModal"
          >
            Edit Professor
          </button>
        </router-link>
      </div>
    </div>
    <!-- REVIEWS -->
    <div class="py-5 d-flex flex-col mb-6">
      <div>
        <h1 class="text-3xl font-bold text-center mt-8">REVIEWS</h1>
        <div class="grid grid-cols-2 ml-16 mt-8">
          <div class="flex col-span-1">
            <div class="mr-4 font-bold">Filter Review:</div>
            <div>
              <select
                class="px-4"
                v-model="state.filter"
                @change="filterReviews"
              >
                <option value="All" selected>All</option>
                <option v-for="code in prof.tags" :value="code" :key="code">
                  {{ code }}
                </option>
              </select>
            </div>
          </div>
          <div class="col-span-1">
            <div class="flex flex-row-reverse mr-16">
              <button
                class="
                  px-6
                  py-2
                  text-white
                  bg-green-600
                  rounded-lg
                  hover:bg-green-900
                  shadow-lg
                "
                @click="toggleWriteModal"
              >
                Add Rating
              </button>
              <writeModal
                :writeReview="showWriteModal"
                @close="toggleWriteModal"
              >
                <div class="grid grid-rows-3">
                  <div class="row-span-2 mt-4">
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
                  <div class="row-span-1 justify-self-center">
                    <div class="">
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
                          flex-shrink
                          content-center
                        "
                        @click="checkRating"
                      >
                        Submit Rating
                      </button>
                    </div>
                  </div>
                </div>
              </writeModal>
              <router-link :to="`/review/${prof.prof_id}`">
                <button
                  class="
                    px-6
                    py-2
                    mr-2
                    text-white
                    bg-green-600
                    rounded-lg
                    hover:bg-gray-900
                  "
                >
                  Write Review
                </button>
              </router-link>
            </div>
          </div>
        </div>
        <p
          class="ml-16 manrope-bold text-left text-sm"
          v-if="state.emptyReviews"
        >
          No reviews yet.
        </p>
        <div
          class="mt-8 ml-16 mr-16 divide-y divide-gray-500 shadow-md"
          v-if="!state.emptyReviews"
        >
          <profReview
            v-for="review in state.shownReviews"
            :key="review.id"
            :review="review"
          />
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
import { ref, onMounted, reactive } from 'vue';
import writeModal from '../components/writeReviewModal.vue';
import NavBar from '../components/NavBar.vue';
import profReview from '../components/profReview.vue';
import { useRoute } from 'vue-router';

export default {
  name: 'View Professor',
  components: { NavBar, writeModal, profReview },
  setup() {
    const state = reactive({
      empty: true,
      filter: 'All',
      rating: 0,
      tagString: '',
      error: false,
      avgRating: 0,
      shownReviews: null,
      allReviews: null,
      emptyReviews: null,
    });

    const router = useRoute();
    const prof = reactive({
      prof_id: router.params.profID,
      profLast: null,
      profFirst: null,
      email: null,
      college: null,
      dept: null,
      rating: null,
      tags: null,
    });

    async function loadReviews() {
      try {
        const result = await api.getReviews(router.params.profID);
        if (result) {
          state.allReviews = state.shownReviews = result.data;
          if (state.allReviews.length === 0) {
            state.emptyReviews = true;
          } else {
            state.emptyReviews = false;
          }
        } else {
          state.emptyReviews = true;
        }
      } catch (err) {
        console.log(err);
      }
    }

    async function loadProf() {
      try {
        const result = await api.getProf(router.params.profID);
        if (result) {
          prof.profLast = result.data.lastName;
          prof.profFirst = result.data.firstName;
          prof.email = result.data.email;
          prof.college = result.data.college;
          prof.dept = result.data.department;
          prof.rating = result.data.rating;
          prof.tags = result.data.courses;
          formatTags();
          state.empty = false;
          console.log(prof.tags);
        }
      } catch (err) {
        console.log(err);
      }
    }

    // filter reviews of professor
    function filterReviews() {
      console.log(state.filter);
      if (state.filter === 'All') {
        state.shownReviews = state.allReviews;
        console.log('hi');
      } else {
        const filteredReviews = [];

        for (let i = 0; i < state.allReviews.length; i++) {
          if (state.allReviews[i].course_code === state.filter) {
            filteredReviews.push(state.allReviews[i]);
          }
        }

        state.shownReviews = filteredReviews;
      }
      if (state.shownReviews.length === 0) {
        state.emptyReviews = true;
      } else {
        state.emptyReviews = false;
      }
    }

    // load after loading
    onMounted(() => {
      loadProf();
      loadReviews();
    });

    // tag formatting for printing
    function formatTags() {
      if (state.tagString == '') {
        for (let i = 0; i < prof.tags.length; i++) {
          if (i != prof.tags.length - 1) {
            state.tagString += prof.tags[i] + ', ';
          } else {
            state.tagString += prof.tags[i];
          }
        }
      }
    }
    // check rating in database before adding/updating
    async function checkRating() {
      try {
        const email = JSON.parse(localStorage.getItem('user')).email;

        const rate = {
          userEmail: email,
          profEmail: prof.email,
        };

        const checkExists = await api.findRating(rate);

        if (checkExists.data != null) {
          console.log('EXISTS');
          updateRating();
        } else {
          console.log('NO!');
          addRating();
        }
      } catch (err) {
        console.log(err.response.data);
      }
    }

    // insert rating to database
    async function addRating() {
      try {
        const email = JSON.parse(localStorage.getItem('user')).email;

        const rate = {
          rating: state.rating,
          userEmail: email,
          instructorEmail: prof.email,
        };

        const res = await api.addRating(rate);
        if (res) {
          toggleWriteModal();
          state.error = false;
          await avgRating();
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
          instructorID: prof.prof_id,
        };
        const res = await api.getInstructorRatings(instructor);
        if (!res.data.message) {
          state.avgRating = res.data;
          await loadProf();
          console.log('Avg updated');
        }
      } catch (err) {
        console.log(err.response.data);
      }
    }

    // update rating in backend
    async function updateRating() {
      try {
        const email = JSON.parse(localStorage.getItem('user')).email;

        const instructor = {
          rating: state.rating,
          userEmail: email,
          instructorEmail: prof.email,
        };

        const res = await api.updateRating(instructor);
        if (res) {
          console.log(res);
          toggleWriteModal();
          state.error = false;
          await avgRating();
        } else {
          state.error = true;
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
      prof,
      showWriteModal,
      checkRating,
      toggleWriteModal,
      filterReviews,
    };
  },
};
</script>
