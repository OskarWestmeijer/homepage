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
        class="mb-0 text-center text-transparent bg-clip-text bg-gradient-to-r from-info via-primary to-info"
      >
        Oskar Westmeijer
      </h1>
      <p class="text-center font-bold max-w-lg mb-10">
        I work as a developer and enjoy learning new technoligies in my free time. In addition to
        coding, I stay active at the gym. Furthermore, I like to read, especially on topics of
        history, foreign cultures, and geography.
      </p>
    </div>
  </div>
</template>

<style scoped>
.about{
min-height: 80vh;

}
</style>
