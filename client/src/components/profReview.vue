<template>
  <div class="bg-gray-200 py-2" v-if="state.deleted == false">
    <div class=""></div>
    <div class="ml-8 text-blue-800 text font-bold">{{ state.userName }}</div>
    <div class="grid grid-cols-10">
      <div class="ml-8 col-span-9">{{ review.review }}</div>
      <div v-if="state.userID == state.loggedUser" class="mr-8 col-span-1">
        <button
          class="
            px-4
            py-2
            text-white text-xs
            bg-red-600
            rounded-lg
            hover:bg-gray-900
          "
          @click="deleteReview"
        >
          Delete
        </button>
      </div>
    </div>
  </div>
</template>

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
