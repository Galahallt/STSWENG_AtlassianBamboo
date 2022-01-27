<template>
  <div style="background-color: #edfff7; height: 800px" class="justify-center">
    <nav-bar />
    <br />
    <br />
    <br />
    <div class="flex flex-col items-center justify-center mt-12">
      <h1 class="text-2xl font-bold text-center">Access Denied</h1>
      <h1 class="font-bold text-center">
        You are not authorized to access this page.
      </h1>
      <br />
      <br />
    </div>
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue';
export default {
  name: 'error',
  components: {
    NavBar,
  },
};
</script>
