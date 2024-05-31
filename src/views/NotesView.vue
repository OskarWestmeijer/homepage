<template>
  <div class="mb-10 max-w-full notes flex flex-col items-center">
    <div
      v-for="item in items"
      class="mt-4 card w-full lg:w-3/5 xl:w-2/4 bg-base-100 border-2 shadow-xl hover:shadow-md hover:shadow-primary"
    >
      <RouterLink :to="'/notes/' + item.link">
        <div class="card-body">
          <p>{{ item.date }}</p>
          <h3 class="card-title">{{ item.title }}</h3>
          <div class="card-actions justify-end">
            <div v-for="badge in item.badges" class="badge badge-primary">{{ badge }}</div>
          </div>
        </div>
      </RouterLink>
    </div>
  </div>
</template>

<script lang="ts">
import { RouterLink } from 'vue-router'
import { noteItems } from './notes'

export default {
  components: {
    RouterLink
  },

  data() {
    return {
      items: noteItems
    }
  }
}
</script>

<style scoped></style>
