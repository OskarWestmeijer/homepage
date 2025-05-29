<script setup lang="ts"></script>

<template>
  <div class="max-w-4xl mx-auto mt-10 flex flex-col items-center gap-4">
    <router-link to="/projects/weather" class="project-card">
      <div class="flex justify-between items-center">
        <div class="project-title">⛅ weather</div>
        <div class="badge-custom">java</div>
      </div>
    </router-link>

    <div class="project-card">
      <div class="flex justify-between items-center">
        <div class="project-title">🌍 flights</div>
        <div class="badge-custom">kotlin</div>
      </div>
    </div>

    <div class="project-card">
      <div class="flex justify-between items-center">
        <div class="project-title">🧭 maps</div>
        <div class="badge-custom">svelte</div>
      </div>
    </div>

    <div class="project-card">
      <div class="flex justify-between items-center">
        <div class="project-title">⚙️ kafka-messaging</div>
        <div class="badge-custom">java</div>
      </div>
    </div>

    <div class="project-card">
      <div class="flex justify-between items-center">
        <div class="project-title">🗪 chat-system</div>
        <div class="badge-custom">java</div>
      </div>
    </div>

    <div class="project-card">
      <div class="flex justify-between items-center">
        <div class="project-title">👆 push-the-button</div>
        <div class="badge-custom">java</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
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
