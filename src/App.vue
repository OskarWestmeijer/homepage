<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="navbar glass">
    <div class="navbar-start"></div>
    <div class="navbar-center">
      <RouterLink to="/">
        <button class="btn">About</button>
      </RouterLink>

      <RouterLink to="/notes">
        <button class="btn">Notes</button>
      </RouterLink>
    </div>
    <div class="navbar-end"></div>
  </div>

  <div class="flex flex-col">
    <RouterView />
  </div>
</template>

<footer class="footer p-10 bg-neutral text-neutral-content">
</footer>

<style></style>
