<template>
  <div class="max-w-4xl mx-auto mt-10 flex flex-col items-center gap-4 px-4">
    <router-link
      v-for="item in items"
      :key="item.link"
      :to="'/notes/' + item.link"
      class="note-card"
    >
      <div class="flex justify-between items-center">
        <h3 class="note-title">{{ item.title }}</h3>
        <div class="flex gap-1 flex-wrap">
          <span v-for="badge in item.badges" :key="badge" class="badge-custom">
            {{ badge }}
          </span>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { noteItems } from "./notes";

const items = noteItems;
</script>

<style scoped>
.note-card {
  @apply w-full max-w-xl p-6 rounded-lg bg-base-100 hover:bg-base-300 transition duration-200 cursor-pointer shadow;
}

.note-title {
  @apply text-lg font-semibold;
}

.badge-custom {
  @apply badge badge-ghost border border-black text-black text-xs px-2 py-0.5 opacity-50;
}
</style>
