<script setup lang="ts"></script>

<template>
  <div class="max-w-4xl mx-auto mt-10 px-4 flex flex-col gap-6">
    <!-- Title -->
    <router-link
      to="/projects"
      class="text-sm text-black-500 hover:underline flex items-center gap-1"
    >
      <span>←</span>
      <span>Back to Projects</span>
    </router-link>

    <h1 class="text-3xl font-bold flex items-center gap-2">✈️ flights</h1>

    <!-- Technology Badges -->
    <div class="flex gap-2 flex-wrap">
      <span class="tech-badge">kotlin</span>
      <span class="tech-badge">ktor</span>
      <span class="tech-badge">redis</span>
      <span class="tech-badge">sveltekit</span>
    </div>

    <!-- Description -->
    <p class="text-base text-gray-600">
      Displays Hamburg airport connections on a 3d globe. The backend provides a public Api. The
      airport connections are refreshed every 10 minutes.
    </p>

    <!-- Links -->
    <div class="flex flex-wrap gap-4">
      <a
        href="https://github.com/OskarWestmeijer/flights"
        target="_blank"
        class="btn btn-outline btn-sm"
      >
        GitHub Repo
      </a>
      <a href="https://flights.oskar-westmeijer.com" target="_blank" class="btn btn-primary btn-sm">
        Live Demo
      </a>
    </div>

    <!-- Image -->
    <div class="mt-4">
      <img
        src="@/assets/projects/flights/flight_screen.png"
        alt="flights App Preview"
        class="rounded-lg shadow-lg border border-base-300"
      />
    </div>

    <div class="mt-4">
      <img
        src="@/assets/projects/flights/c4_container.svg"
        alt="flights App Preview"
        class="rounded-lg shadow-lg border border-base-300"
      />
    </div>
  </div>
</template>

<style scoped>
@reference "../../style.css";

.tech-badge {
  @apply badge badge-ghost border border-black text-black text-xs px-2 py-0.5 opacity-50;
}
</style>
