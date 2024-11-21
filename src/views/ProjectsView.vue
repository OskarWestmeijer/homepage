<script setup lang="ts"></script>

<template>
  <div class="max-w-full projects flex items-center justify-center flex-wrap gap-x-4 m-auto">
    <div class="card card-compact max-w-md bg-base-100 shadow-xl">
      <figure>
        <img src="@/assets/weather_project.png" class="size-full" alt="Weather project" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">⛅ Weather</h2>
        <p class="text-base">
          Provides weather data for selected locations. Frontend with weather charts. Backend has a
          public Api.
        </p>
        <div class="card-actions justify-end">
          <a href="https://github.com/OskarWestmeijer/weather" aria-label="Weather github link" class="btn btn-ghost rounded-lg">
            <img alt="Github logo" class="size-7" src="@/assets/github.svg"
          /></a>
          <a href="https://weather.oskar-westmeijer.com" class="btn btn-outline btn-info rounded-lg"
            >Visit</a
          >
        </div>
      </div>
    </div>
    <div class="card card-compact max-w-md bg-base-100 shadow-xl">
      <figure>
        <img src="@/assets/flights_project.png" alt="Flights project" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">🌍 Flights</h2>
        <p class="text-base">
          Provides Hamburg airport connections. Frontend with flight connections on a 3D globe.
          Backend has a public Api.
        </p>
        <div class="card-actions justify-end">
          <a href="https://github.com/OskarWestmeijer/flights" class="btn btn-ghost rounded-lg">
            <img alt="Github logo" class="size-7" src="@/assets/github.svg"
          /></a>
          <a href="https://flights.oskar-westmeijer.com" class="btn btn-outline btn-info rounded-lg"
            >Visit</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.projects {
  min-height: 80vh;
}

.card-body {
  min-height: 200px;
}
</style>
