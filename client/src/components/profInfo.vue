<template>
  <router-link :to="`/view/${prof.id}`">
    <div class="overscroll-auto">
      <div class="grid grid-cols-9 bg-gray-100 gap-y-2 border border-gray-200">
        <!-- insert professors here -->
        <div class="text-black px-1 col-span-1">
          {{ prof.lastName + ',  ' + prof.firstName }}
        </div>
        <div class="text-black px-1 col-span-1">{{ prof.college }}</div>
        <div class="text-black px-1 col-span-3">{{ prof.department }}</div>
        <div class="text-black px-1 col-span-1">{{ prof.rating }}/5</div>
        <div class="text-black px-1 col-span-1">{{ prof.status }}</div>
        <div class="text-black px-1 col-span-2"></div>
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
