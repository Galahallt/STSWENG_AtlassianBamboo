<template>
  <div class="bg-gray-200 py-2">
    <div class=""></div>
    <div class="ml-8 text-blue-800 text font-bold">{{ state.userName }}</div>
    <div class="grid grid-cols-10">
      <div class="ml-8 col-span-9">{{ review.review }}</div>
      <div class="mr-8 justify-self-end text-xs italic text-red-500 col-span-1">
        Delete Comment
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
      userName: null,
    });

    async function loadUser() {
      try {
        const result = await api.getUserById(props.review.user_id);

        if (result) {
          state.userName = result.data.fullName;
        }
      } catch (err) {}
    }

    onMounted(() => {
      loadUser();
    });

    return { state };
  },
};
</script>
