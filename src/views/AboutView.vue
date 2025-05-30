<script setup lang="ts">
import { ref, computed } from "vue";

const language = ref<"en" | "de" | "fi">("en");

const content = computed(() => {
  switch (language.value) {
    case "de":
      return {
        name: "Oskar Westmeijer",
        lines: [
          "Ich arbeite als Entwickler und lebe in Hamburg.",
          "In meiner Freizeit gehe ich gerne ins Fitnessstudio, Bouldern und Joggen.",
          "Ich lese viel und interessiere mich für besonders für Geschichte, Geopolitik und Karten.",
          "Im Urlaub reise ich gerne und besuche vor allem Museen für Geschichte und Kunst.",
        ],
      };
    case "fi":
      return {
        name: "Oskar Westmeijer",
        lines: [
          "Olen kehittäjä ja asun Hampurissa.",
          "Vapaa-ajallani pysyn aktiivisena käymällä salilla, kiipeilemällä ja juoksemalla.",
          "Rakastan lukemista, ja olen erityisen kiinnostunut historiasta, geopolitiikasta ja kartoista.",
          "Lomilla matkustan usein ja käyn mieluiten taide- ja historiamuseoissa.",
        ],
      };
    default:
      return {
        name: "Oskar Westmeijer",
        lines: [
          "I work as a developer and am located in Hamburg, Germany.",
          "In my free time, I stay physically active by working out at the gym, bouldering and going for runs.",
          "I love to read and do it a lot. I'm also passionate about history, geopolitics, and maps.",
          "During vacations, I enjoy traveling and exploring history and art museums.",
        ],
      };
  }
});
</script>

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
        <!-- Language Flags -->
        <div class="flex justify-center md:justify-end mb-4 gap-4">
          <img
            src="@/assets/about/gb.svg"
            alt="English"
            title="Switch to English"
            class="w-8 h-6 cursor-pointer hover:scale-110 transition-transform"
            @click="language = 'en'"
          />
          <img
            src="@/assets/about/de.svg"
            alt="Deutsch"
            title="Wechsle zu Deutsch"
            class="w-8 h-6 cursor-pointer hover:scale-110 transition-transform"
            @click="language = 'de'"
          />
          <img
            src="@/assets/about/fi.svg"
            alt="Suomi"
            title="Vaihda suomeksi"
            class="w-8 h-6 cursor-pointer hover:scale-110 transition-transform"
            @click="language = 'fi'"
          />
        </div>

        <h1
          class="text-4xl font-extrabold mb-4 bg-gradient-to-r from-blue-900 via-cyan-600 to-teal-500 text-transparent bg-clip-text"
        >
          {{ content.name }}
        </h1>

        <ul class="space-y-4 text-base text-base-content font-medium leading-relaxed">
          <li v-for="(line, index) in content.lines" :key="index">{{ line }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>
