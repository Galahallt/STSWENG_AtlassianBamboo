<template>
  <router-link :to="`/view/${prof.id}`">
    <div class="overscroll-auto">
      <div
        class="grid grid-cols-9 bg-white gap-y-2 border py-2 hover:bg-gray-200"
      >
        <!-- insert professors here -->
        <div class="text-black px-1 col-span-1">
          {{ prof.lastName + ',  ' + prof.firstName }}
        </div>
        <div class="text-black px-1 col-span-1">{{ prof.college }}</div>
        <div class="text-black px-1 col-span-3">{{ prof.department }}</div>
        <div class="text-black px-1 col-span-1">{{ prof.rating }}/5</div>
        <div class="text-black px-1 col-span-1">{{ prof.status }}</div>
        <div class="text-black px-1 col-span-2">{{ state.tagString }}</div>
      </div>
    </div>
  </router-link>
</template>

<script>
import { reactive, onMounted } from 'vue';

export default {
  name: 'ProfInfo',
  props: {
    prof: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const state = reactive({
      tagString: '',
    });

    function formatTags() {
      if (state.tagString == '') {
        for (let i = 0; i < props.prof.courses.length; i++) {
          if (i != props.prof.courses.length - 1) {
            state.tagString += props.prof.courses[i] + ', ';
          } else {
            state.tagString += props.prof.courses[i];
          }
        }
      }
    }

    onMounted(() => {
      formatTags();
    });

    return {
      state,
    };
  },
};
</script>
