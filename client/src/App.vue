<template>
  <div>
    <!-- <router-view /> -->
    <rating />
  </div>
</template>

<script>
import rating from './views/rating.vue';
import { useStore } from 'vuex';
export default {
  beforeCreate() {
    const store = useStore();
    const loadData = async () => {
      await store.dispatch('initState');
    };
    loadData();
  },
};
</script>
