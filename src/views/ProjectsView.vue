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
          Provides weather data for selected locations. The frontend displays the weather in charts.
          The backend offers a public Api.
        </p>
        <div class="card-actions justify-end">
          <a href="https://github.com/OskarWestmeijer/weather" class="btn btn-ghost rounded-lg">
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
        <img src="@/assets/maps_project.png" alt="Maps project" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">🌍 Maps</h2>
        <p class="text-base">
          Provides Hamburg airport connections. The frontend displays the connections on a 3d globe.
          Backend offers a public Api.
        </p>
        <div class="card-actions justify-end">
          <a href="https://github.com/OskarWestmeijer/maps" class="btn btn-ghost rounded-lg">
            <img alt="Github logo" class="size-7" src="@/assets/github.svg"
          /></a>
          <a href="https://maps.oskar-westmeijer.com" class="btn btn-outline btn-info rounded-lg"
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
</style>
