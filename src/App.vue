<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="navbar bg-accent">
    <div class="navbar-start"></div>
    <div class="navbar-center">
      <RouterLink to="/">
        <button class="btn">Home</button>
      </RouterLink>

      <RouterLink to="/about">
        <button class="btn">About</button>
      </RouterLink>
    </div>
  <div class="navbar-end">
</div>
  </div>

  <RouterView />
</template>

<style scoped></style>
