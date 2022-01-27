<template>
 <div class="comment-container py-3 px-6">
    <p class="comment-name text-xl green-text">{{ state.userName }}</p>
    <div class="flex flex-wrap flex-col">
      <p class="comment-course-code text-sm py-1 m-1 ml-0 text-center"> {{ review.course_code }} </p>
      {{review.review}}

    </div>

 </div>
</template>


<style>

.comment-container{
  background-color: white;
}

.green-text{
  color: var(--green)
}

.comment-course-code{
  color: white;
  background-color: var(--green);
  width: 90px;

}
</style>


<script>
import { reactive, onMounted } from 'vue';
import * as api from '../api';
export default {
  name: 'ProfReview',
  props: {
    review: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const state = reactive({
      deleted: false,
      userName: null,
      userID: null,
      loggedUser: null,
    });

    async function loadUser() {
      try {
        const result = await api.getUserById(props.review.user_id);

        if (result) {
          state.userName = result.data.fullName;
        }
      } catch (err) {}
    }

    async function checkUser() {
      try {
        const email = JSON.parse(localStorage.getItem('user')).email;
        const user = await api.getUserByEmail(email);
        if (user) {
          state.loggedUser = user.data.id;
        }

        state.userID = props.review.user_id;
      } catch (err) {}
    }

    async function deleteReview() {
      try {
        console.log('-===========-');
        console.log(props.review.id);

        const res = await api.deleteReview(props.review.id);
        if (res) {
          state.deleted = true;
          console.log(res);
        }
      } catch (err) {}
    }

    onMounted(() => {
      loadUser();
      checkUser();
    });

    return { state, deleteReview };
  },
};
</script>
