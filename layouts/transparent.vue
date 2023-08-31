<template>
  <header class="absolute top-0 left-0 right-0">
    <nav class="h-[4rem] px-[5rem] flex items-center justify-between">
      <NuxtLink to="/" class="flex items-center">
        <h1 class="text-lg font-russo">NexGen Realms</h1>
      </NuxtLink>
      <div>
        <ul class="flex justify-between gap-x-[5rem]">
          <li class="nav-link">
            <NuxtLink to="/about-us">About Us</NuxtLink>
          </li>
          <li class="nav-link">
            <NuxtLink to="/contact">Contact Us</NuxtLink>
          </li>
          <li class="nav-link">
            <NuxtLink to="/explore">Explore</NuxtLink>
          </li>
        </ul>
      </div>
    </nav>
  </header>

  <div>
    <slot />
  </div>

  <footer class="mt-[256px]">
    <div class="h-[21rem] bg-gradient-to-l from-primary-dark to-secondary-dark flex flex-col justify-between">
      <div class="h-full flex items-center justify-between px-[3rem]">
        <div class="flex gap-x-4">
          <a href="https://www.instagram.com/" target="_blank">
            <img src="../assets/images/icons/social_media/instagram.svg" class="social-icon">
          </a>
          <a href="https://twitter.com/" target="_blank">
            <img src="../assets/images/icons/social_media/twitter.svg" class="social-icon">
          </a>
          <a href="https://www.youtube.com/" target="_blank">
            <img src="../assets/images/icons/social_media/youtube.svg" class="social-icon">
          </a>
          <a href="https://www.linkedin.com/" target="_blank">
            <img src="../assets/images/icons/social_media/linked-in.svg" class="social-icon">
          </a>
        </div>

        <div class="flex flex-col items-center gap-y-[1.5rem]">
          <p>Pages</p>
          <div class="flex gap-x-[1.5rem] font-bold">
            <NuxtLink to="/">Home</NuxtLink>
            <NuxtLink to="/about-us">About Us</NuxtLink>
            <NuxtLink to="/explore">Explore</NuxtLink>
            <NuxtLink to="/contact">Contact Us</NuxtLink>
          </div>
        </div>

        <div class="flex flex-col items-start justify-between gap-y-6">
          <div class="flex gap-x-3">
            <img src="../assets/images/icons/envelope.svg" class="w-5">
            <p class="font-bold">Stay up to date on the latest VR news</p>
          </div>

          <input type="text" placeholder="Enter your e-mail address" class="newsletter-input">

          <button class="newsletter-button">
            Sign Up
          </button>
        </div>
      </div>
      <div class="flex flex-row justify-between py-[1rem] px-[3rem] border-t-2 border-[#535353]">
        <p>© 2023 John Doe</p>
        <p>Privacy Policy</p>
      </div>
    </div>
  </footer>
</template>

<script setup>

</script>



<style></style>
