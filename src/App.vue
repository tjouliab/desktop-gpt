<script setup lang="ts">
import { RouterView } from 'vue-router'
import SideNavigation from './components/SideNavigation.vue'
</script>

<template>
  <div class="row-container">
    <SideNavigation class="side-navigation" />
    App
    <!-- <RouterView /> -->
  </div>
</template>

<style scoped>
.row-container {
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
}

.side-navigation {
  width: 320px;
}
</style>
