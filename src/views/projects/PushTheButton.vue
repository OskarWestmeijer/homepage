<script setup lang="ts"></script>

<template>
  <div class="max-w-4xl mx-auto mt-10 px-4 flex flex-col gap-6">
    <!-- Back Arrow -->
    <router-link
      to="/projects"
      class="text-sm text-black-500 hover:underline flex items-center gap-1"
    >
      <span>←</span>
      <span>Back to Projects</span>
    </router-link>

    <!-- Title -->
    <h1 class="text-3xl font-bold flex items-center gap-2">👆 push-the-button</h1>

    <!-- Technology Badges -->
    <div class="flex gap-2 flex-wrap">
      <span class="tech-badge">java</span>
    </div>

    <!-- Description -->
    <p class="text-base text-gray-600">
      The only way to stop the countdown, is by providing the correct password. Hopefully
      you can end the madness. Inspired by the tv show "Lost".
    </p>

    <!-- Links -->
    <div class="flex flex-wrap gap-4">
      <a
        href="https://github.com/OskarWestmeijer/push-the-button"
        target="_blank"
        class="btn btn-outline btn-sm"
      >
        GitHub Repo
      </a>
    </div>
  </div>
</template>

<style scoped>
.tech-badge {
  @apply badge badge-ghost border border-black text-black text-xs px-2 py-0.5 opacity-50;
}
</style>
