<template>
  <div class="rating-body w-full h-screen">
    <NavBar />

    <p v-if="state.empty" class="hello_color font-bold">Rendering page...</p>

    <div
      v-if="!state.empty"
      class="rating-container py-10 px-5 md:w-4/5 mx-auto md:px-1"
    >
      <!-- BACK BUTTON; may just add name/id here to be able to access the back page -->
      <div class="flex flex-row mb-5">
        <router-link :to="`/home`">
          <svg
            class="back-button"
            width="34"
            height="30"
            viewBox="0 0 34 30"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M31.5833 12.9167H6.87501L14.4375 3.83334C14.7911 3.40789 14.9613 2.85939 14.9105 2.3085C14.8597 1.75761 14.5921 1.24946 14.1667 0.895838C13.7412 0.542216 13.1927 0.372087 12.6418 0.422878C12.0909 0.473669 11.5828 0.74122 11.2292 1.16667L0.81251 13.6667C0.742428 13.7661 0.679759 13.8705 0.62501 13.9792C0.62501 14.0833 0.62501 14.1458 0.479177 14.25C0.384747 14.4889 0.335304 14.7432 0.333344 15C0.335304 15.2569 0.384747 15.5111 0.479177 15.75C0.479177 15.8542 0.479177 15.9167 0.62501 16.0208C0.679759 16.1295 0.742428 16.2339 0.81251 16.3333L11.2292 28.8333C11.4251 29.0685 11.6703 29.2576 11.9476 29.3873C12.2249 29.5169 12.5273 29.5838 12.8333 29.5833C13.3201 29.5843 13.7919 29.4148 14.1667 29.1042C14.3776 28.9293 14.552 28.7145 14.6798 28.4721C14.8076 28.2297 14.8864 27.9645 14.9115 27.6916C14.9367 27.4187 14.9078 27.1436 14.8264 26.8819C14.7451 26.6202 14.6129 26.3772 14.4375 26.1667L6.87501 17.0833H31.5833C32.1359 17.0833 32.6658 16.8638 33.0565 16.4731C33.4472 16.0824 33.6667 15.5525 33.6667 15C33.6667 14.4475 33.4472 13.9176 33.0565 13.5269C32.6658 13.1362 32.1359 12.9167 31.5833 12.9167Z"
              fill="#37B47E"
            />
          </svg>
        </router-link>

        <router-link :to="`/editprof/${prof.prof_id}`" class="ml-auto">
          <button
            v-if="state.isUserAdmin"
            class="
              edit-prof-button
              rounded-lg
              hover:bg-green-900
              shadow-lg
              ml-auto
              flex flex-row
              center
              align-middle
              p-3
            "
          >
            Edit Instructor
          </button>
        </router-link>
      </div>

      <!-- Professor info -->
      <div class="prof-info-container flex flex-col md:flex-row">
        <!-- update src of img of prof -->
        <img
          v-bind:src="prof.profPic"
          class="prof-pic object-cover center shadow-lg"
        />
        <div
          class="
            prof-info-text
            flex flex-col
            md:px-10 md:mx-5
            sm:mx-0 sm:mt-5
            md:mt-0
          "
        >
          <h1 class="prof-name text-5xl">
            {{ prof.profFirst }} {{ prof.profLast }}
          </h1>

          <div class="flex flex-row mt-10">
            <h1 class="text-xl label">College:</h1>
            <h1 class="text-xl md:px-10">{{ prof.college }}</h1>
          </div>

          <div class="flex flex-row mt-5 flex-start max-w-full">
            <h1 class="text-xl label">Department:</h1>
            <h1 class="text-xl md:ml-10">{{ prof.dept }}</h1>
          </div>

          <div class="flex flex-col md:flex-row mt-5">
            <h1 class="text-xl label">DLSU Email:</h1>
            <h1 class="text-xl md:px-10">{{ prof.email }}</h1>
          </div>

          <!-- COURSE TAGS HERE -->
          <div class="flex flex-row mt-5">
            <h1 class="text-xl label pt-2 pb-2">Course Tags:</h1>
            <div
              class="flex md:px-9 flex-wrap relative tags-container max-w-full"
            >
              <h1
                class="course-tag text-lg p-2 m-1"
                v-for="code in prof.tags"
                :value="code"
                :key="code"
              >
                {{ code }}
              </h1>
            </div>
          </div>

          <div class="rating-cont flex flex-row mt-6">
            <h1 class="text-2xl rating-text">Rating:</h1>
            <h1 class="text-2xl md:pl-10 px-2 green-text">
              {{ prof.rating }}
            </h1>

            <svg
              class="star"
              width="30"
              height="29"
              viewBox="0 0 31 30"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M29.8122 10.7584L20.6381 9.42511L16.537 1.11095C16.425 0.883314 16.2407 0.699037 16.0131 0.587025C15.4422 0.305189 14.7484 0.540052 14.463 1.11095L10.3619 9.42511L1.18781 10.7584C0.934878 10.7945 0.703628 10.9138 0.526577 11.0944C0.312532 11.3144 0.194584 11.6104 0.198649 11.9173C0.202714 12.2243 0.32846 12.517 0.548256 12.7313L7.18585 19.2027L5.61769 28.3406C5.58092 28.5532 5.60444 28.7718 5.68559 28.9717C5.76674 29.1716 5.90228 29.3447 6.07682 29.4715C6.25137 29.5983 6.45795 29.6736 6.67313 29.689C6.88831 29.7043 7.10348 29.659 7.29425 29.5583L15.5 25.2441L23.7058 29.5583C23.9298 29.6776 24.19 29.7173 24.4393 29.6739C25.068 29.5655 25.4907 28.9694 25.3823 28.3406L23.8142 19.2027L30.4518 12.7313C30.6324 12.5542 30.7517 12.323 30.7878 12.07C30.8854 11.4377 30.4445 10.8524 29.8122 10.7584Z"
                fill="#FFCD1E"
              />
            </svg>
          </div>
        </div>
      </div>

      <div class="comments-container mt-10 flex flex-col">
        <h1 class="green-text text-4xl">Reviews</h1>
        <!-- adding of rating and review modal -->
        <div class="reviews-container flex flex-col md:flex-row mt-4 mb-10">
          <div
            class="filter-review-container flex flex-row sm:mb-5 md:mb-0 mt-10"
          >
            <p class="text-lg">Filter Reviews:</p>
            <div class="px-3">
              <select
                name="filter-review"
                class="px-4 filter-options mr-auto"
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
          <div class="buttons-container ml-auto mt-5 flex">
            <button
              name="review-button"
              class="
                review-button
                rounded-lg
                hover:bg-green-900
                shadow-lg
                ml-3
                p-auto
                flex flex-row
                center
                align-middle
              "
              @click="toggleWriteCommentModal"
            >
              <div class="flex center align-middle">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 31 31"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="mr-2"
                >
                  <path
                    d="M9.97168 21.2556L12.2463 20.5994L25.9418 6.73982C26.0499 6.62912 26.11 6.48037 26.1093 6.32569C26.1086 6.17102 26.047 6.02284 25.938 5.91315L25.1178 5.0839C25.0648 5.02944 25.0014 4.98608 24.9315 4.95636C24.8616 4.92664 24.7864 4.91114 24.7104 4.91078C24.6344 4.91042 24.5591 4.9252 24.4889 4.95426C24.4187 4.98332 24.3549 5.02607 24.3014 5.08003L10.6421 18.9034L9.97038 21.2543L9.97168 21.2556ZM26.7414 3.4409L27.5616 4.27145C28.6931 5.41715 28.7034 7.26553 27.5823 8.39961L13.4695 22.6829L8.60768 24.083C8.31085 24.1661 7.99318 24.128 7.72439 23.9772C7.45559 23.8263 7.25762 23.575 7.17393 23.2783C7.11165 23.065 7.11075 22.8385 7.17134 22.6247L8.58572 17.6647L22.661 3.41895C22.9287 3.14945 23.2473 2.93594 23.5983 2.79088C23.9493 2.64581 24.3257 2.57209 24.7055 2.57401C25.0853 2.57594 25.461 2.65347 25.8105 2.80208C26.16 2.95069 26.4765 3.16742 26.7414 3.43961V3.4409ZM11.8627 4.9302C12.5033 4.9302 13.0226 5.4559 13.0226 6.10432C13.0236 6.2576 12.9944 6.40958 12.9367 6.55156C12.8789 6.69355 12.7937 6.82276 12.686 6.9318C12.5783 7.04085 12.4501 7.12759 12.3088 7.18707C12.1676 7.24655 12.016 7.2776 11.8627 7.27845H7.22301C5.94168 7.27845 4.90318 8.32986 4.90318 9.6254V23.7123C4.90318 25.0092 5.94168 26.0606 7.22301 26.0606H21.142C22.4233 26.0606 23.4631 25.0092 23.4631 23.7123V19.0171C23.4631 18.3687 23.9824 17.843 24.6231 17.843C25.2637 17.843 25.783 18.3687 25.783 19.0184V23.7123C25.783 26.306 23.7047 28.4088 21.142 28.4088H7.22301C4.66034 28.4088 2.58334 26.306 2.58334 23.7123V9.6254C2.58334 7.03303 4.66034 4.9302 7.22301 4.9302H11.8627Z"
                    fill="white"
                  />
                </svg>

                Review
              </div>
            </button>

            <button
              class="
                rate-button
                rounded-lg
                hover:bg-green-900
                shadow-lg
                ml-3
                p-auto
                flex flex-row
                center
                align-middle
              "
              @click="toggleWriteModal"
            >
              <div class="flex center align-middle" name="rateBtn">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 31 31"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="mr-2"
                >
                  <path
                    d="M27.4913 10.6895L19.8049 9.57242L16.3689 2.60651C16.275 2.41578 16.1206 2.26139 15.9299 2.16754C15.4516 1.93141 14.8703 2.12819 14.6312 2.60651L11.1951 9.57242L3.50871 10.6895C3.2968 10.7198 3.10305 10.8197 2.95471 10.9711C2.77537 11.1554 2.67655 11.4034 2.67996 11.6605C2.68336 11.9177 2.78872 12.1629 2.97287 12.3424L8.5341 17.7644L7.22023 25.4206C7.18942 25.5987 7.20913 25.7818 7.27712 25.9493C7.34512 26.1168 7.45867 26.2618 7.60491 26.3681C7.75116 26.4743 7.92423 26.5374 8.10452 26.5502C8.28481 26.5631 8.46509 26.5252 8.62492 26.4408L15.5 22.8261L22.3751 26.4408C22.5628 26.5407 22.7808 26.574 22.9897 26.5377C23.5164 26.4468 23.8706 25.9473 23.7798 25.4206L22.4659 17.7644L28.0272 12.3424C28.1785 12.1941 28.2784 12.0004 28.3087 11.7884C28.3904 11.2587 28.0211 10.7682 27.4913 10.6895Z"
                    fill="white"
                  />
                </svg>

                Rate
              </div>
            </button>
          </div>
        </div>
        <!-- end of reviews container -->

        <!-- ADDING OF REVIEW TO PROF -->
        <div class="ml-auto flex">
          <div class="flex">
            <writeCommentModal :writeComment="showWriteCommentModal">
              <div class="write-comment-container p-10 rounded-2xl">
                <h1 class="text-xl text-center green-text mb-3">
                  REVIEW THIS INSTRUCTOR
                </h1>
                <hr class="line" />

                <div class="course-code-comment-container flex mt-5">
                  <p>Course code:</p>
                  <input
                    v-on:keyup="areFieldsValid"
                    v-model="state.course_code"
                    name="course-code"
                    class="course-code mx-3 px-1 text-sm"
                    placeholder="Ex. GERIZAL"
                    minlength="7"
                    maxlength="7"
                    title="Field must be 7 characters long"
                    ref="course_code"
                  />
                  <p v-if="state.isCourseCodeIncomplete">
                    *Must be 7 characters long
                  </p>
                </div>

                <!-- textarea tag should be in one line -->
                <textarea
                  class="comment p-3 mt-3"
                  id="comment"
                  name="commentInp"
                  placeholder="How was your experience with this professor? Did you have a great time in the course you took? Feel free to share them here but don’t forget to be respectful :) "
                  v-on:keyup="areFieldsValid"
                  v-model.trim="state.comment"
                ></textarea>

                <div class="flex flex-row">
                  <button
                    class="cancel-button mr-auto rounded-md p-2"
                    @click="toggleWriteCommentModal"
                    name="cancelBtn"
                  >
                    Cancel
                  </button>
                  <button
                    name="submit-button"
                    class="submit-button ml-auto rounded-md p-2"
                    @click="addReview"
                    :disabled="state.isSubmitDisabled"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </writeCommentModal>

            <writeModal :writeReview="showWriteModal">
              <div class="rate-container p-10 rounded-2xl">
                <h1 class="text-xl text-center green-text mb-3">
                  RATE THIS INSTRUCTOR
                </h1>
                <hr class="line" />

                <p class="mt-7">
                  How was your overall experience with this instructor?
                </p>

                <star-rating
                  v-model:rating="state.rating"
                  :star-size="40"
                  :rounded-corners="true"
                  :border-width="4"
                  :star-points="[
                    23, 2, 14, 17, 0, 19, 10, 34, 7, 50, 23, 43, 38, 50, 36, 34,
                    46, 19, 31, 17,
                  ]"
                  class="stars mx-auto self-center mt-5"
                ></star-rating>

                <div class="flex flex-row mt-10">
                  <!-- buttons do not work -->
                  <button
                    class="cancel-button-rating mr-auto rounded-md p-2"
                    @click="toggleWriteModal"
                  >
                    Cancel
                  </button>
                  <button
                    class="submit-button-rating ml-auto rounded-md p-2"
                    @click="checkRating"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </writeModal>
          </div>
        </div>

        <p class="c text-center text-xl" v-if="state.emptyReviews">
          No reviews yet. Be the first one to share your experience with this
          instructor!
        </p>

        <div v-if="!state.emptyReviews">
          <profReview
            v-for="review in state.shownReviews"
            :key="review.id"
            :review="review"
            v-bind:name="review.userName + review.course_code + review.review"
            @deleteReview="deleteReview(review.id)"
          />
        </div>
      </div>
    </div>
    <!-- rating-container closing div; the one with margin-->
  </div>
  <!-- body closing div -->
</template>

// STYLE HERE
<style>
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@700;800&display=swap');
:root {
  --green: #37b47e;
  --light-green: #edfff7;
  --gray: #546681;
}

.hello_color {
  color: #546681;
}

body {
  background-color: var(--light-green);
}

.tags-container {
  max-width: 300px;
}

.back-button:hover {
  cursor: pointer;
  transform: scale(1.1);
}

.label {
  min-width: 150px;
}

.rating-body {
  background-color: var(--light-green);
}

.rating-container {
  font-family: 'Manrope', sans-serif;
  font-weight: 800;
  background-color: var(--light-green);
  color: var(--gray);
}

.prof-pic {
  width: 350px;
  height: 350px;
  border-radius: 500px;
  min-width: 350px;
}

.prof-name {
  font-family: 'Manrope', sans-serif;
  font-weight: 800;
  color: var(--green);
}

.course-tag {
  background-color: var(--green);
  color: #ffffff;
}

.rating-text {
  color: var(--green);
  width: 150px;
}

.green-text {
  color: var(--green);
}

.filter-options {
  border: 2px solid var(--gray);
  border-radius: 5px;
}

.write-comment-container {
  width: 100%;
  border-radius: 15px;
  background-color: white;
}

.line {
  border-top: 3px solid var(--green);
}

.comment {
  background-color: #f4f4f4;
  width: 100%;
  min-height: 300px;
  height: 100%;
  word-break: break-word;
  border: none;
}

.course-code {
  border: 1px solid var(--gray);
  background-color: none;
  width: 100px;
}

.review-button {
  background-color: var(--green);
  color: white;
  width: 150px;
  text-align: center;
  justify-content: center;
  height: 40px;
  padding-top: 7px;
}

.rate-button {
  background-color: var(--green);
  color: white;
  width: 150px;
  text-align: center;
  justify-content: center;
  height: 40px;
  vertical-align: middle;
  padding-top: 7px;
}

.submit-button {
  background-color: var(--green);
  color: white;
  width: 100px;
}

.edit-prof-button {
  background-color: var(--green);
  color: white;
  width: 130px;
  text-align: center;
}

.cancel-button {
  background-color: white;
  color: var(--green);
  border: 2px solid var(--green);
  width: 100px;
}

.submit-button-rating {
  background-color: var(--green);
  color: white;
  width: 100px;
}

.cancel-button-rating {
  background-color: white;
  color: var(--green);
  border: 2px solid var(--green);
  width: 100px;
}

.rate-container {
  background-color: white;
  width: 100%;
}

.stars {
  justify-content: center;
}

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
import writeCommentModal from '../components/writeCommentModal.vue';
import NavBar from '../components/NavBar.vue';
import profReview from '../components/profReview.vue';
import { useRoute } from 'vue-router';
import WriteCommentModal from '../components/writeCommentModal.vue';
import StarRating from 'vue-star-rating';
export default {
  name: 'View Professor',
  components: {
    NavBar,
    writeModal,
    profReview,
    writeCommentModal,
    WriteCommentModal,
    StarRating,
  },
  setup() {
    const state = reactive({
      empty: true,
      filter: 'All',
      rating: 0,
      tagString: '',
      error: false,
      avgRating: 0,
      shownReviews: [],
      allReviews: [],
      emptyReviews: null,
      isUserAdmin: null,
      comment: '',
      course_code: '',
      isCommentEmpty: false,
      isCourseCodeIncomplete: true,
      isSubmitDisabled: true,
    });
    const router = useRoute();
    const prof = reactive({
      profPic:
        'https://res.cloudinary.com/stsweng-profstopick/image/upload/v1643367810/blank-profile-circle_ssopod.png',
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
          prof.profPic = result.data.profilePicture;
          prof.profLast = result.data.lastName;
          prof.profFirst = result.data.firstName;
          prof.email = result.data.email;
          prof.college = result.data.college;
          prof.dept = result.data.department;
          prof.rating = result.data.rating;
          prof.tags = result.data.courses;
          formatTags();
          state.rating = 1;
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
    async function loadUserInfo() {
      try {
        const email = JSON.parse(localStorage.getItem('user')).email;
        const res = await api.getUserByEmail(email);
        if (res) {
          state.isUserAdmin = res.data.isAdministrator;
        }
      } catch (err) {
        console.log(err);
      }
    }

    // load after loading
    onMounted(() => {
      loadProf();
      loadReviews();
      loadUserInfo();
      state.render = false;
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
        console.log(state.rating);
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

    async function deleteReview(id) {
      try {
        console.log('-===========-');
        console.log(id);

        const res = await api.deleteReview(id);
        if (res) {
          loadReviews();
          console.log(res);
        }
      } catch (err) {}
    }
    async function addReview() {
      try {
        const email = JSON.parse(localStorage.getItem('user')).email;
        const user = await api.getUserByEmail(email);
        if (user) {
          const review = {
            user_id: user.data.id,
            userName: user.data.fullName,
            instructor_id: prof.prof_id,
            course_code: state.course_code,
            review: state.comment,
          };
          console.log(review);
          const res = await api.addReview(review);
          if (res) {
            state.emptyReviews = false;
            toggleWriteCommentModal();
            state.shownReviews.push(res.data);
            if (!prof.tags.includes(review.course_code)) {
              prof.tags.push(review.course_code);
            }
            state.comment = '';
            state.course_code = '';
            areFieldsValid();
          }
        }
      } catch (err) {
        console.log(err);
      }
    }

    function checkCourseCode() {
      if (state.course_code.length != 7) {
        state.isCourseCodeIncomplete = true;
        return true;
      } else {
        state.isCourseCodeIncomplete = false;
      }

      return false;
    }
    function checkComment() {
      if (state.comment.localeCompare('') == 0) {
        state.isCommentEmpty = true;
        return true;
      }

      return false;
    }
    function areFieldsValid() {
      if (checkCourseCode() || checkComment()) {
        state.isSubmitDisabled = true;
        return false;
      } else {
        state.isSubmitDisabled = false;
        return true;
      }
    }
    // declare modal
    const showWriteModal = ref(false);
    const showWriteCommentModal = ref(false);
    // toggle modal
    function toggleWriteModal() {
      showWriteModal.value = !showWriteModal.value;
    }
    // toggle comment modal
    function toggleWriteCommentModal() {
      showWriteCommentModal.value = !showWriteCommentModal.value;
    }
    return {
      state,
      prof,
      showWriteModal,
      showWriteCommentModal,
      checkRating,
      toggleWriteModal,
      toggleWriteCommentModal,
      filterReviews,
      deleteReview,
      loadUserInfo,
      areFieldsValid,
      addReview,
    };
  },
};
</script>
