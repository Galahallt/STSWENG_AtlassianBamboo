
<template>
  
  
  <div class="rating-body w-full h-screen ">
    <NavBar/>


      <div class="rating-container py-10 px-5 md:w-4/5 mx-auto md:px-1">

<!-- adding of rating and review modal -->
    <div class="flex flex-row-reverse mt-1 mr-3">
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
        Add Rating
      </button>


      <writeModal :writeReview="showWriteModal" @close="toggleWriteModal">
        <div class="grid grid-rows-3">
          <div class="row-span-2 mt-4">
            <div class="flex justify-center">
              <vue3-star-ratings :disableClick="true" v-model="state.rating" />
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
      </div>

      <router-link :to="`/review/${prof.prof_id}`">
      <div class="bg-gray-200 py-2" v-if="state.deleted == false">
    <div class=""></div>
    <div class="ml-8 text-blue-800 text font-bold">{{ state.userName }}</div>
    <div class="grid grid-cols-10">
      <div class="ml-8 col-span-9">
        ({{ review.course_code }}) {{ review.review }}
      </div>
      <div class="ml-8 col-span-9">{{ review.review }}</div>
      <div v-if="state.userID == state.loggedUser" class="mr-8 col-span-1">
        <button
          class="
            px-6
            px-4
            py-2
            mt-4
            mr-2
            text-white
            bg-green-600
            text-white text-xs
            bg-red-600
            rounded-lg
            hover:bg-gray-900
          "
          @click="deleteReview"
        >
          Write Review
          Delete
        </button>
      </div>
    </div>
    </div>
    
      </router-link>






        <!-- BACK BUTTON; may just add name/id here to be able to access the back page -->
        <svg class="back-button" width="34" height="30" viewBox="0 0 34 30" xmlns="http://www.w3.org/2000/svg">
          <path d="M31.5833 12.9167H6.87501L14.4375 3.83334C14.7911 3.40789 14.9613 2.85939 14.9105 2.3085C14.8597 1.75761 14.5921 1.24946 14.1667 0.895838C13.7412 0.542216 13.1927 0.372087 12.6418 0.422878C12.0909 0.473669 11.5828 0.74122 11.2292 1.16667L0.81251 13.6667C0.742428 13.7661 0.679759 13.8705 0.62501 13.9792C0.62501 14.0833 0.62501 14.1458 0.479177 14.25C0.384747 14.4889 0.335304 14.7432 0.333344 15C0.335304 15.2569 0.384747 15.5111 0.479177 15.75C0.479177 15.8542 0.479177 15.9167 0.62501 16.0208C0.679759 16.1295 0.742428 16.2339 0.81251 16.3333L11.2292 28.8333C11.4251 29.0685 11.6703 29.2576 11.9476 29.3873C12.2249 29.5169 12.5273 29.5838 12.8333 29.5833C13.3201 29.5843 13.7919 29.4148 14.1667 29.1042C14.3776 28.9293 14.552 28.7145 14.6798 28.4721C14.8076 28.2297 14.8864 27.9645 14.9115 27.6916C14.9367 27.4187 14.9078 27.1436 14.8264 26.8819C14.7451 26.6202 14.6129 26.3772 14.4375 26.1667L6.87501 17.0833H31.5833C32.1359 17.0833 32.6658 16.8638 33.0565 16.4731C33.4472 16.0824 33.6667 15.5525 33.6667 15C33.6667 14.4475 33.4472 13.9176 33.0565 13.5269C32.6658 13.1362 32.1359 12.9167 31.5833 12.9167Z" fill="#37B47E"/>
        </svg>
        
        <!-- Professor info -->
        <div class=" prof-info-container flex flex-col md:flex-row "> 
          <img src="../assets/woman.jpg" class="prof-pic object-cover center">
          <div class="prof-info-text flex flex-col  md:px-10  md:mx-5 sm:mx-0 sm:mt-5 md:mt-0"> 
              <h1 class="prof-name text-5xl">{{ prof.profFirst }} {{ prof.profLast }}</h1>

              <div class="flex flex-row mt-10">
                <h1 class="text-xl label">College:</h1>
                <h1 class="text-xl md:px-10">{{ prof.college }}</h1>
              </div>

              <div class="flex flex-row mt-5 flex-start max-w-full">
                <h1 class="text-xl label">Department:</h1>
                <h1 class=" text-xl md:ml-10">{{ prof.dept }} {{ prof.dept }} {{ prof.dept }} {{ prof.dept }} {{ prof.dept }} </h1>
              </div>

              <div class="flex flex-col md:flex-row mt-5">
                <h1 class="text-xl label">DLSU Email:</h1>
                <h1 class="text-xl md:px-10 ">{{ prof.email }}</h1>
              </div>


              <!-- COURSE TAGS HERE -->
              <div class="flex flex-row mt-5">
                <h1 class="text-xl label pt-2 pb-2">Course Tags:</h1>
                <div class="flex md:px-9 flex-wrap relative tags-container max-w-full"> 
                  <h1 class="course-tag text-lg p-2 m-1">{{ state.tagString }}</h1>
                  <h1 class="course-tag text-lg p-2 m-1">{{ state.tagString }}</h1>
                  <h1 class="course-tag text-lg p-2 m-1">{{ state.tagString }}</h1> 
                  <h1 class="course-tag text-lg p-2 m-1">{{ state.tagString }}</h1>
                  <h1 class="course-tag text-lg p-2 m-1">{{ state.tagString }}</h1>
                  <h1 class="course-tag text-lg p-2 m-1">{{ state.tagString }}</h1> 
                  <h1 class="course-tag text-lg p-2 m-1">{{ state.tagString }}</h1>
                  <h1 class="course-tag text-lg p-2 m-1">{{ state.tagString }}</h1>
                  <h1 class="course-tag text-lg p-2 m-1">{{ state.tagString }}</h1> 
                  <h1 class="course-tag text-lg p-2 m-1">{{ state.tagString }}</h1>
                </div> 
              </div>

              <div class="rating-cont flex flex-row mt-6">
                <h1 class="text-2xl rating-text">Rating:</h1>
                <h1 class="text-2xl md:pl-10 px-2 green-text">{{ state.rating }}</h1>
                
                <svg class="star" width="30" height="29" viewBox="0 0 31 30" xmlns="http://www.w3.org/2000/svg">
                  <path d="M29.8122 10.7584L20.6381 9.42511L16.537 1.11095C16.425 0.883314 16.2407 0.699037 16.0131 0.587025C15.4422 0.305189 14.7484 0.540052 14.463 1.11095L10.3619 9.42511L1.18781 10.7584C0.934878 10.7945 0.703628 10.9138 0.526577 11.0944C0.312532 11.3144 0.194584 11.6104 0.198649 11.9173C0.202714 12.2243 0.32846 12.517 0.548256 12.7313L7.18585 19.2027L5.61769 28.3406C5.58092 28.5532 5.60444 28.7718 5.68559 28.9717C5.76674 29.1716 5.90228 29.3447 6.07682 29.4715C6.25137 29.5983 6.45795 29.6736 6.67313 29.689C6.88831 29.7043 7.10348 29.659 7.29425 29.5583L15.5 25.2441L23.7058 29.5583C23.9298 29.6776 24.19 29.7173 24.4393 29.6739C25.068 29.5655 25.4907 28.9694 25.3823 28.3406L23.8142 19.2027L30.4518 12.7313C30.6324 12.5542 30.7517 12.323 30.7878 12.07C30.8854 11.4377 30.4445 10.8524 29.8122 10.7584Z" fill="#FFCD1E"/>
                </svg>
              </div> 
          </div>
        </div>

        <div class="comments-container mt-10 flex flex-col">
          <h1 class= "green-text text-4xl">Reviews</h1>

          <div class="reviews-container flex flex-col md:flex-row mt-4 mb-10">
              <div class="filter-review-container flex flex-row">
                <p class="text-lg">Filter Reviews: </p>
                <div class=" px-3">
                  <select class="px-4 filter-options" v-model="state.filter" @change="filterReviews">
                    <option value="All" selected>All</option>
                    <option v-for="code in prof.tags" :value="code" :key="code">
                      {{ code }}
                    </option>
                  </select>
                </div>
              </div>

              <div class="ml-auto flex">
                <h1 class="text-lg">[Review button]</h1>
                <h1 class="text-lg">[Rate button]</h1>
              </div>
          </div>
          
          <p
          class="text-center text-xl "
          v-if="state.emptyReviews"
          >
          No reviews yet. Be the first one to share your experience with this instructor!
          </p>

          <div
    
            v-if="!state.emptyReviews"
          >
            <profReview
              v-for="review in state.shownReviews"
              :key="review.id"
              :review="review"
              />  
          </div>

          
        </div>

      

       

      </div> <!-- rating-container closing div; the one with margin-->
    

  </div> <!-- body closing div -->

  
</template>






// STYLE HERE 
<style>
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@700;800&display=swap');

:root {
    --green: #37B47E;
    --light-green: #EDFFF7; 
    --gray: #546681; 
  }

  body{
    background-color: var(--light-green);
  }

.tags-container{
  max-width: 300px;
}

.back-button:hover{
  cursor: pointer;
  transform: scale(1.1);
}
.label{
  min-width: 150px;
  
}

.rating-body{
  background-color: var(--light-green);
}

.rating-container{
  font-family: 'Manrope', sans-serif;
  font-weight: 800;
  background-color: var(--light-green);
  color: var(--gray);
}

.prof-pic{
  width: 350px;
  height: 350px;
  border-radius: 500px;
  min-width: 350px;

}

.prof-name{
  font-family: 'Manrope', sans-serif;
  font-weight: 800;
  color: var(--green);
}

.course-tag{
  background-color: var(--green);
  color: #FFFFFF;
}

.rating-text{
  color: var(--green);
  width: 150px;
}

.green-text{
  color: var(--green)
}

.filter-options{
  border: 2px solid var(--gray); 
  border-radius: 5px;
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
