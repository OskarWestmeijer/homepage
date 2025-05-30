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
    <h1 class="text-3xl font-bold flex items-center gap-2">⚙️ kafka-etl-pipeline</h1>

    <!-- Technology Badges -->
    <div class="flex gap-2 flex-wrap">
      <span class="tech-badge">java</span>
      <span class="tech-badge">spring-boot</span>
      <span class="tech-badge">kafka</span>
      <span class="tech-badge">postgres</span>
      <span class="tech-badge">cloud events</span>
    </div>

    <!-- Description -->
    <p class="text-base text-gray-600">
      This service implements a Kafka-based ETL pipeline for product enrichment. The same
      product passes through multiple Kafka topics, with each step focused on a different
      enrichment task. At each stage, the service performs an HTTP call to gather
      additional data, updates the product, saves it to the database, and sends it to the
      next topic for further processing.
    </p>

    <!-- Links -->
    <div class="flex flex-wrap gap-4">
      <a
        href="https://github.com/OskarWestmeijer/kafka-etl-pipeline"
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
