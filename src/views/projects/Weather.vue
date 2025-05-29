<script setup lang="ts"></script>

<template>
  <div class="max-w-4xl mx-auto mt-10 px-4 flex flex-col gap-6">
    <!-- Title -->
    <h1 class="text-3xl font-bold flex items-center gap-2">⛅ weather</h1>

    <!-- Technology Badges -->
    <div class="flex gap-2 flex-wrap">
      <span class="tech-badge">java</span>
      <span class="tech-badge">spring-boot</span>
      <span class="tech-badge">postgres</span>
      <span class="tech-badge">angular</span>
    </div>

    <!-- Description -->
    <p class="text-base text-gray-600">
      Provides weather data for selected locations. The frontend displays the weather in
      charts. The backend service offers a public API. The weather data is harvested every
      minute from openweathermap.org. The information is stored in a database.
      Furthermore, the API is documented with an OpenAPI specification.
    </p>

    <!-- Links -->
    <div class="flex flex-wrap gap-4">
      <a
        href="https://github.com/OskarWestmeijer/weather"
        target="_blank"
        class="btn btn-outline btn-sm"
      >
        GitHub Repo
      </a>
      <a
        href="https://weather.oskar-westmeijer.com"
        target="_blank"
        class="btn btn-primary btn-sm"
      >
        Live Demo
      </a>
    </div>

    <!-- Image -->
    <div class="mt-4">
      <img
        src="@/assets/weather_project.png"
        alt="Weather App Preview"
        class="rounded-lg shadow-lg border border-base-300"
      />
    </div>
  </div>
</template>

<style scoped>
.tech-badge {
  @apply badge badge-ghost border border-black text-black text-xs px-2 py-0.5 opacity-50;
}
</style>
