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
    <nav-bar />

    <div
      class="flex items-center justify-center mt-12"
      style="margin-left: 60px; margin-top: 90px"
    >
      <div>
        <img
          class="pt-5 rounded-full lg-shadow"
          style="width: 300px; height: 300px"
          src="https://menlocoa.org/wp-content/uploads/2012/09/Screen-Shot-2012-09-20-at-11.54.59-AM.png"
        />
      </div>

      <div
        class="
          px-10
          py-6
          mt-10
          ml-16
          text-center
          bg-gray-200
          shadow-lg
          justify-center
        "
        style="border-radius: 50px; background-color: rgba(229, 231, 235, 0.8)"
      >
        <h1 class="text-3xl font-bold text-center">{{ state.prof_lastname + ', ' + state.prof_firstname }}</h1>
        <br />
        <p class="font-bold">Code</p>
        <input
          v-model="state.course_code"
          type="text"
          style="border-radius: 10px; height: 30px; text-align: center"
        />
        <br />
        <br />
        <p class="font-bold">Comment</p>
        <textarea
          v-model="state.comment"
          placeholder="Type your comment here"
          style="height: 100px; width: 600px; outline: true border-radius: 20px"
        ></textarea>

        <template v-if="state.attempted">
          <h4
            v-if="!state.isCommentEmpty"
            class="text-2l mt-2 font-bold text-center text-green-600"
          >
            {{ state.message }}
          </h4>
          <h4
            v-else
            class="text-2l mt-2 font-bold text-center text-red-600"
          >
            {{ state.comment_error }}
          </h4>
        </template>        

        <br />
        <br />
        <div class="flex space-x-4 space-x-reverse flex-row-reverse mr-8">
          <button
            @click="addReview"
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
            Publish
          </button>
          <router-link
            :to="{
              name: 'Prof Reviews',
              params: {
                prof_id: prof_id,
                prof_lastname: prof_lastname,
                prof_firstname: prof_firstname,
                prof_email: prof_email,
                prof_college: prof_college,
                prof_department: prof_department,
                prof_rating: prof_rating,
              },
            }"
          >          
            <button
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
            >
              Cancel
            </button>
          </router-link>
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
</style>

<script>
import NavBar from '../components/NavBar.vue';
import { onBeforeMount, reactive } from 'vue';
import * as api from '../api';
export default {
  name: 'Review Professor',
  components: {
    NavBar,
  },
  props: {
    prof_id: {
      type: String,
    },
    prof_lastname: {
      type: String,
    },
    prof_firstname: {
      type: String,
    },
    prof_email: {
      type: String,
    },
    prof_college: {
      type: String,
    },
    prof_department: {
      type: String,
    },
    prof_rating: {
      type: Number,
    },
  },
  setup(props)
  {
    const state = reactive ({
      prof_id: '',

      prof_lastname: '',
      prof_firstname: '',
      comment: '',
      course_code: '',
      isCommentEmpty: false,
      isSubjectCodeEmpty: false,

      attempted: false,
      comment_error: '',
      course_code_error: '',

      message:'',
    });

    async function addReview() {
      state.attempted = true;

      if(areFieldsValid()) {
        // TODO get instructor id, subject code, and comment and insert it to the DB 
        const review = {
          instructor_id: state.prof_id,
          course_code: state.course_code,
          review: state.comment
        }
        await api.addReview(review);
        state.course_code = '';
        state.comment = '';
        state.message = "Success!";
      }
      else {
        if(state.comment.localeCompare('') == 0) {
          state.isCommentEmpty = true;
          state.comment_error = "Please supply a comment!";
        }
        
        if(state.course_code.localeCompare('') == 0) {
          state.isSubjectCodeEmpty = true;
          state.course_code_error = "Please enter a course code!";
        }

      }
    }
    function previousPage() {
      
    }
    function areFieldsValid(){
      if(state.comment.localeCompare('') == 0 || state.course_code.localeCompare('') == 0) {
        return false;
      }
      else {
        state.comment_error = '';
        return true;
      }
    }

    function initState() {
      state.prof_id = props.prof_id;
      state.prof_lastname = props.prof_lastname;
      state.prof_firstname = props.prof_firstname;
    }

    onBeforeMount(() => {
      initState();
    });

    return {
      state,
      addReview,
    };
  },
};
</script>
