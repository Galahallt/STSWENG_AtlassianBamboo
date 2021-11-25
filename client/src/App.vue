<template>
  <div>
    <!-- <router-view /> -->
    <rating />
  </div>
</template>

<style>
/* web application's scrollbar */
::-webkit-scrollbar {
  height: 4px;
  width: 8px;
  background: #cfd8dc;
}

::-webkit-scrollbar-track {
  background: #cfd8dc;
}

::-webkit-scrollbar-thumb {
  background: #90a4ae;
  border-radius: 6px;
  border: 3px solid #07090a;
}
</style>

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
