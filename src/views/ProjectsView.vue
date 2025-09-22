<script setup lang="ts"></script>

<template>
  <div class="max-w-4xl mx-auto mt-10 flex flex-col items-center gap-4">
    <router-link to="/projects/weather" class="project-card">
      <div class="flex justify-between items-center">
        <div class="project-title">⛅ weather</div>
        <div class="flex gap-1">
          <div class="badge-custom">java</div>
          <div class="badge-custom">api</div>
        </div>
      </div>
    </router-link>

    <router-link to="/projects/flights" class="project-card">
      <div class="flex justify-between items-center">
        <div class="project-title">✈️ flights</div>
        <div class="flex gap-1">
          <div class="badge-custom">kotlin</div>
          <div class="badge-custom">api</div>
        </div>
      </div>
    </router-link>

    <router-link to="/projects/maps" class="project-card">
      <div class="flex justify-between items-center">
        <div class="project-title">🧭 maps</div>
        <div class="flex gap-1">
          <div class="badge-custom">svelte</div>
          <div class="badge-custom">qgis</div>
        </div>
      </div>
    </router-link>

    <router-link to="/projects/kafka-etl-pipeline" class="project-card">
      <div class="flex justify-between items-center">
        <div class="project-title">⚙️ kafka-etl-pipeline</div>
        <div class="flex gap-1">
          <div class="badge-custom">java</div>
          <div class="badge-custom">kafka</div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<style scoped>
@reference "../style.css";

.project-card {
  @apply w-full max-w-xl p-6 rounded-lg bg-base-100 hover:bg-base-300 transition duration-200 cursor-pointer shadow;
}

.project-title {
  @apply text-lg font-semibold;
}

.badge-custom {
  @apply badge badge-ghost border border-black text-black text-xs px-2 py-0.5 opacity-50;
}
</style>
