<template>
  <router-link
    :to="`/view/${prof.id}`"
  >
    <div class="overscroll-auto">
      <div class="grid grid-cols-5 bg-gray-100">
        <!-- insert professors here -->
        <div class="text-black">
          {{ prof.lastName + ',  ' + prof.firstName }}
        </div>
        <div class="text-black">{{ prof.college }}</div>
        <div class="text-black">{{ prof.department }}</div>
        <div class="text-black">{{ prof.rating }}/5</div>
        <div class="text-black">{{ prof.status }}</div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'ProfInfo',
  props: {
    prof: {
      type: Object,
      required: true,
    },
  },
};
</script>
