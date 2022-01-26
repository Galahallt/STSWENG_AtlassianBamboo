<template>
  
  <div class="rating-body w-full h-screen ">
    <NavBar/>

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
      <router-link :to="`/review/${prof.prof_id}`">
        <button
          class="
            px-6
            py-2
            mt-4
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


    <!-- body  -->
    <div class="trymeee grid grid-cols-8 py-2 px-12 ">
      <div class="col-span-1"></div>
      
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
    </div>



    <!-- REVIEWS -->
    <div class="py-5 d-flex flex-col mb-6">
      <div>
        <h1 class="text-3xl font-bold text-center mt-8">REVIEWS</h1>

        <div class="flex ml-16 mt-8">
          <div class="mr-4 font-bold">Filter Review:</div>
          <div>
            <select class="px-4" v-model="state.filter" @change="filterReviews">
              <option value="All" selected>All</option>
              <option v-for="code in prof.tags" :value="code" :key="code">
                {{ code }}
              </option>
            </select>
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