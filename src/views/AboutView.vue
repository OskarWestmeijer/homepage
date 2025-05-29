<script setup lang="ts"></script>

<template>
  <section class="min-h-[80vh] flex items-center justify-center px-4 py-12">
    <div class="flex flex-col md:flex-row items-center gap-10 max-w-4xl w-full">
      <!-- Profile Image -->
      <img
        src="@/assets/oskar_westmeijer.jpg"
        alt="Portrait of Oskar Westmeijer"
        class="rounded-xl shadow-lg w-64 h-auto object-cover"
      />

      <!-- Text Content -->
      <div class="flex-1 text-center md:text-left">
        <h1
          class="text-4xl font-extrabold mb-4 bg-gradient-to-r from-blue-900 via-cyan-600 to-teal-500 text-transparent bg-clip-text"
        >
          Oskar Westmeijer
        </h1>

        <ul class="space-y-4 text-base text-base-content font-medium leading-relaxed">
          <li>I work as a developer and am located in Hamburg, Germany 🇩🇪</li>
          <li>
            In my free time, I stay physically active by working out at the gym, bouldering and going
            for runs.
          </li>
          <li>
            I love to read and do it a lot. I'm also passionate about history,
            geopolitics, and creating maps using QGIS 🌍
          </li>
          <li>During vacations, I enjoy traveling and exploring history and art museums.</li>
        </ul>
      </div>
    </div>
  </section>
</template>
