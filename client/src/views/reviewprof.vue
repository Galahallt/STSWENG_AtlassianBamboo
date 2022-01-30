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
          <input
            v-on:keyup="areFieldsValid"
            v-model="state.course_code"
            type="text"
            style="border-radius: 10px; height: 30px; text-align: center"
            minlength="7"
            maxlength="7"
            title="Field must be 7 characters long"
            ref="course_code"
          />
          <p v-if="state.isCourseCodeIncomplete">*Must be 7 characters long</p>
        </div>
        <br />
        <br />
        <p class="font-bold">Comment</p>
        <textarea
          v-on:keyup="areFieldsValid"
          v-model="state.comment"
          placeholder="Type your comment here"
          style="
            height: 100px;
            width: 600px;
            outline: true;
            border-radius: 20px;
          "
        ></textarea>
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
              :disabled="state.isSubmitDisabled"
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
      course_code: '',
      isCommentEmpty: false,
      isCourseCodeIncomplete: true,
      isSubmitDisabled: true,
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
    onMounted(() => {
      loadProf();
    });
    onBeforeMount(() => {});

    return {
      state,
      addReview,
      areFieldsValid,
    };
  },
};
</script>
