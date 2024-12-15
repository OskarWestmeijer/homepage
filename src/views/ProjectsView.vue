<script setup lang="ts"></script>

<template>
  <div class="max-w-4xl mx-auto flex flex-col gap-5 mt-5">
    <div class="card card-compact bg-base-100 shadow-xl max-w-xl mx-auto">
      <figure class="h-72 overflow-hidden">
        <img src="@/assets/weather_project.png" class="size-full" alt="Weather project" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">⛅ Weather</h2>
        <p class="text-base">
          Provides weather data for selected locations. Frontend with weather charts.
          Backend has a public Api.
        </p>
        <div class="card-actions justify-end">
          <a
            href="https://github.com/OskarWestmeijer/weather"
            aria-label="Weather github link"
            class="btn btn-ghost rounded-lg"
          >
            <img alt="Github logo" class="size-7" src="@/assets/github.svg"
          /></a>
          <a
            href="https://weather.oskar-westmeijer.com"
            class="btn btn-outline btn-info rounded-lg"
            >Visit</a
          >
        </div>
      </div>
    </div>
    <div class="card card-compact bg-base-100 shadow-xl max-w-xl mx-auto">
      <figure class="h-72 overflow-hidden">
        <img src="@/assets/flights_project.png" alt="Flights project" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">🌍 Flights</h2>
        <p class="text-base">
          Provides Hamburg airport connections. Frontend with flight connections on a 3D
          globe. Backend has a public Api.
        </p>
        <div class="card-actions justify-end">
          <a
            href="https://github.com/OskarWestmeijer/flights"
            class="btn btn-ghost rounded-lg"
          >
            <img alt="Github logo" class="size-7" src="@/assets/github.svg"
          /></a>
          <a
            href="https://flights.oskar-westmeijer.com"
            class="btn btn-outline btn-info rounded-lg"
            >Visit</a
          >
        </div>
      </div>
    </div>
    <div class="card card-compact bg-base-100 shadow-xl max-w-xl mx-auto">
      <figure class="h-72 overflow-hidden">
        <img
          src="@/assets/maps_project.png"
          alt="Maps project"
          class="w-full h-full object-cover"
        />
      </figure>
      <div class="card-body">
        <h2 class="card-title">&#129517; Maps</h2>
        <p class="text-base">
          I create thematic maps with the tool QGIS. Most of the data used for creating the map, is free and
          provided by the Copernicus project.
        </p>
        <div class="card-actions justify-end">
          <a
            href="https://github.com/OskarWestmeijer/maps"
            class="btn btn-ghost rounded-lg"
          >
            <img alt="Github logo" class="size-7" src="@/assets/github.svg"
          /></a>
          <a
            href="https://maps.oskar-westmeijer.com"
            class="btn btn-outline btn-info rounded-lg"
            >Visit</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-body {
  min-height: 200px;
}
</style>
