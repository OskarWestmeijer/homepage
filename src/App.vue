<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="navbar">
    <div class="navbar-start">
      <div class="mobile-hide">
        <RouterLink to="/">
          <h1 class="btn btn-ghost rounded-lg text-xl font-bold">🐨 Oskar Westmeijer</h1>
        </RouterLink>
      </div>
    </div>
    <div class="navbar-center">
      <RouterLink to="/">
        <button class="btn btn-ghost rounded-lg">💡 About</button>
      </RouterLink>

      <RouterLink to="/projects">
        <button class="btn btn-ghost rounded-lg">🔧 Projects</button>
      </RouterLink>

      <RouterLink to="/notes">
        <button class="btn btn-ghost rounded-lg">✒️ Notes</button>
      </RouterLink>
    </div>
    <div class="navbar-end">
      <div class="mobile-hide">
        <a href="https://github.com/OskarWestmeijer" aria-label="Oskar Westmeijer Github profile">
          <button class="btn btn-ghost rounded-lg">
            <img alt="Github logo" class="size-6" src="@/assets/github.svg" />
          </button>
        </a>
        <a
          href="https://www.linkedin.com/in/oskar-westmeijer-488449252/"
          aria-label="Oskar Westmeijer LinkedIn profile"
          class="btn btn-ghost rounded-lg"
        >
          <img alt="Linkedin logo" class="size-6" src="@/assets/linkedin.svg" />
        </a>
      </div>
    </div>
  </div>

  <div class="px-4 md:px-0">
    <RouterView />
  </div>

  <footer class="mt-10 footer footer-center mobile-show">
    <h1 class="text-xl font-bold">🐨 Oskar Westmeijer</h1>
    <div class="flex flex-row justify-center">
      <a
        href="https://github.com/OskarWestmeijer"
        aria-label="Oskar Westmeijer Github profile"
        class="btn btn-ghost rounded-lg"
      >
        <img alt="Github logo" class="size-7" src="@/assets/github.svg" />
      </a>
      <a
        href="https://www.linkedin.com/in/oskar-westmeijer-488449252/"
        aria-label="Oskar Westmeijer LinkedIn profile"
        class="btn btn-ghost rounded-lg"
      >
        <img alt="Linkedin logo" class="size-6" src="@/assets/linkedin.svg" />
      </a>
    </div>
  </footer>
</template>

<style>
/* Show social links only on wider screens */
@media (max-width: 700px) {
  .mobile-hide {
    display: none;
  }
}

/* Hide footer by default and show on smaller screens */
@media (min-width: 701px) {
  .footer {
    display: none;
  }
}

/* Show footer on smaller screens */
@media (max-width: 700px) {
  .mobile-show {
    display: block;
  }
}
</style>
