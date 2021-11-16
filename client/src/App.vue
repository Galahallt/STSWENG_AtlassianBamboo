<template>
  <div>
    <Login />
  </div>
</template>

<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Login from './views/login.vue';
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
