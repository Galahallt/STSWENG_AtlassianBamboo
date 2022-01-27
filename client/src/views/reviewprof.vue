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
        <h1 class="text-3xl font-bold text-center">
          {{ state.prof_lastname + ', ' + state.prof_firstname }}
        </h1>
        <br />
        <div class="flex">
          <div class="mr-4 font-bold">Course Code:</div>
          <div>
            <select
              class="px-4"
              v-model="state.course_code"
            >
              <option value="--Select Course Code--" selected>--Select Course Code--</option>
              <option v-for="code in state.prof_tags" :value="code" :key="code">
                {{ code }}
              </option>              
            </select>
          </div>
        </div>
        <br />
        <br />
        <p class="font-bold">Comment</p>
        <textarea
          v-model="state.comment"
          placeholder="Type your comment here"
          style="
            height: 100px;
            width: 600px;
            outline: true;
            border-radius: 20px;
          "
        ></textarea>

        <div v-if="state.attempted">
          <h4
            v-if="state.isCommentEmpty"
            class="text-2l mt-2 font-bold text-center text-red-600"
          >
            {{ state.comment_error }}
          </h4>
          <h4 
            v-if="state.isSubjectCodeEmpty"
            class="text-2l mt-2 font-bold text-center text-red-600">
            {{ state.code_error }}
          </h4>
        </div>
        <div v-else>
          <h4 class="mt-2"> </h4>
          <h4 class="mt-2"> </h4>
        </div>

        <br />
        <br />
        <div class="flex space-x-4 space-x-reverse flex-row-reverse mr-8">
          <router-link :to="`/view/${state.prof_id}`">
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
          </router-link>
          
          <router-link :to="`/view/${state.prof_id}`">
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
import { onBeforeMount, onMounted, reactive } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import * as api from '../api';
export default {
  name: 'Review Professor',
  components: {
    NavBar,
  },
  setup() {
    const router = useRoute();
    const redirect = useRouter();
    const state = reactive({
      prof_id: router.params.profID,
      prof_lastname: null,
      prof_firstname: null,
      prof_tags: null,

      comment: '',
      course_code: '--Select Course Code--',
      isCommentEmpty: false,
      isSubjectCodeEmpty: false,

      attempted: false,
      comment_error: '',
      code_error: '',

      message: '',
    });

    async function loadProf() {
      try {
        const result = await api.getProf(state.prof_id);
        if (result) {
          state.prof_lastname = result.data.lastName;
          state.prof_firstname = result.data.firstName;
          state.prof_tags = result.data.courses;
        }
      } catch (err) {
        console.log(err);
      }
    }

    async function addReview() {
      state.attempted = true;

      if (areFieldsValid()) {
        // TODO get instructor id, subject code, and comment and insert it to the DB
        const email = JSON.parse(localStorage.getItem('user')).email;
        const user = await api.getUserByEmail(email);
        if (user) {
          const review = {
            user_id: user.data.id,
            instructor_id: state.prof_id,
            course_code: state.course_code,
            review: state.comment,
          };
          console.log(review);
          await api.addReview(review);
          state.comment = '';
          state.message = 'Success!';
          redirect.push({ name: 'View Professor' });
        }
      } else {
        if (state.comment.localeCompare('') == 0) {
          state.isCommentEmpty = true;
          state.comment_error = 'Please supply a comment!';
        }
        if (state.course_code.localeCompare('--Select Course Code--') == 0) {
          state.isSubjectCodeEmpty = true;
          state.code_error = 'Please enter a course code!';
        }
      }
    }

    function areFieldsValid() {
      if (
        state.comment.localeCompare('') == 0 ||
        state.course_code.localeCompare('--Select Course Code--') == 0
      ) {
        return false;
      } else {
        state.comment_error = '';
        state.code_error = '';
        return true;
      }
    }
    onMounted(() => {
      loadProf();
    });
    onBeforeMount(() => {});

    return {
      state,
      addReview,
    };
  },
};
</script>
