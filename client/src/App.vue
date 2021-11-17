<template>
  <div>
    <router-view />
  </div>
</template>

<script>
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
