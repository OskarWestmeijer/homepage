<script setup lang="ts"></script>

<template>
  <div class="about max-w-full flex flex-row justify-center flex-wrap items-center gap-4 prose">
    <img
      alt="Portrait of Oskar Westmeijer"
      class="mb-0 min-w-xs max-w-sm rounded-xl"
      src="@/assets/oskar_westmeijer.jpg"
    />
    <div>
      <h1
        class="mb-0 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-cyan-600 to-teal-500"
      >
        Oskar Westmeijer
      </h1>
      <p class="text-center text-base-content font-bold max-w-lg">
        I work as a developer and am located in Hamburg, Germany. &#x1F1E9;&#x1F1EA;
      </p>
      <p class="text-center text-base-content font-bold max-w-lg">
        In my free time, I stay physically active by working out at the gym and going for runs.
      </p>
      <p class="text-center text-base-content font-bold max-w-lg">
        Furthermore, I love to read and do it a lot. Moreover, I have always been passionately
        interested in history, geopolitics and maps. I really like creating maps with QGIS.
        &#127758;
      </p>
      <p class="text-center text-base-content font-bold max-w-lg">
        During my vacations, I enjoy travelling and exploring museums.
      </p>
    </div>
  </div>
</template>

<style scoped>
.about {
  min-height: 80vh;
}
</style>
