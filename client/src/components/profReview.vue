<template>
  <div class="comment-container py-3 px-6 my-3 shadow-md">
    <div class="name-delete flex flex-row">
      <p class="comment-name text-xl green-text mr-auto">
        {{ review.userName }}
      </p>

      <svg
        v-if="state.loggedUser === state.userID"
        class="delete-btn ml-auto"
        width="29"
        height="29"
        viewBox="0 0 31 31"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        @click="deleteReview"
      >
        <path
          d="M5.16663 7.75H25.8333L23.7925 26.1175C23.7225 26.7496 23.4218 27.3337 22.948 27.7579C22.4742 28.1822 21.8606 28.4167 21.2246 28.4167H9.77529C9.13932 28.4167 8.52568 28.1822 8.05188 27.7579C7.57808 27.3337 7.27742 26.7496 7.20746 26.1175L5.16663 7.75Z"
          stroke="#37B46A"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M9.48729 4.06479C9.69622 3.62171 10.0268 3.24716 10.4405 2.98485C10.8543 2.72253 11.334 2.58325 11.8239 2.58325H19.1761C19.6662 2.583 20.1462 2.72217 20.5602 2.9845C20.9742 3.24683 21.305 3.62151 21.514 4.06479L23.25 7.74992H7.75L9.48729 4.06479Z"
          stroke="#37B46A"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M2.58331 7.75H28.4166"
          stroke="#37B46A"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12.9166 14.2083V20.6666"
          stroke="#37B46A"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M18.0833 14.2083V20.6666"
          stroke="#37B46A"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>

    <div class="flex flex-wrap flex-col">
      <p class="comment-course-code text-sm py-1 m-1 ml-0 text-center">
        {{ review.course_code }}
      </p>
      {{ review.review }}
    </div>
  </div>
</template>

<style>
.comment-container {
  background-color: white;
}

.green-text {
  color: var(--green);
}

.comment-course-code {
  color: white;
  background-color: var(--green);
  width: 90px;
}

.delete-btn:hover {
  cursor: pointer;
  transform: scale(1.05);
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
  setup(props, context) {
    const state = reactive({
      deleted: false,
      userName: null,
      userID: null,
      loggedUser: null,
    });

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

    function deleteReview() {
      context.emit('deleteReview', props.review.user_id);
    }

    onMounted(() => {
      checkUser();
    });

    return { state, deleteReview };
  },
};
</script>
