<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="navbar glass">
    <div class="navbar-start">
      <h1
        class="text-xl font-bold "
      >
        Oskar Westmeijer
      </h1>
    </div>
    <div class="navbar-center">
      <RouterLink to="/">
        <button class="btn btn-ghost rounded-lg">About</button>
      </RouterLink>

      <RouterLink to="/projects">
        <button class="btn btn-ghost rounded-lg">Projects</button>
      </RouterLink>

      <RouterLink to="/notes">
        <button class="btn btn-ghost rounded-lg">Notes</button>
      </RouterLink>
    </div>
    <div class="navbar-end">
      <a href="https://github.com/OskarWestmeijer" aria-label="Oskar Westmeijer Github profile">
        <button class="btn btn-ghost rounded-lg">
          <img alt="Github logo" class="size-7" src="@/assets/github.svg" />
        </button>
      </a>
      <a
        href="https://www.linkedin.com/in/oskar-westmeijer-488449252/"
        aria-label="Oskar Westmeijer LinkedIn profile"
        class="btn btn-ghost rounded-lg"
      >
        <img alt="Linkedin logo" class="size-6" src="@/assets/linkedin.svg" />
      </a>
    </div>
  </div>

  <RouterView />
</template>

<style></style>
