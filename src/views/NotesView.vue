<template>
  <div class="max-w-full notes flex flex-col items-center">
    <div
      v-for="item in items"
      class="mt-4 card lg:w-2/5 w-full bg-base-100 border-2 shadow-xl hover:shadow-md hover:shadow-primary"
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

export default {
  components: {
    RouterLink
  },

  data() {
    return {
      items: [
        {
          title: 'Item01: My favourite validation libraries in Java',
          badges: ['Java'],
          link: 'item01',
          date: '29-04-2024'
        },
        {
          title: 'Item02: Immutable or unmodifiable lists in Java',
          badges: ['Java'],
          link: 'item02',
          date: '29-04-2024'
        }
      ]
    }
  }
}
</script>

<style scoped></style>
