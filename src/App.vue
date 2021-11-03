<template>
  <navbar />
  <div class="container mx-auto py-5">
    <router-view />
  </div>
</template>

<script lang="ts" setup>
import Navbar from "./components/Navbar.vue";
</script>

<style>
</style>