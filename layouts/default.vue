<template>
  <header>
    <nav class="w-full h-[120px] px-[112px] flex items-center justify-between">
      <NuxtLink to="/" class="flex items-center gap-x-[10px]">
        <img src="../assets/images/logo.svg" alt="Logo" class="w-[88px]">
        <h1 class="text-lg font-russo">NexGen Realms</h1>
      </NuxtLink>
      <div>
        <ul class="flex justify-between gap-x-[5rem]">
          <li>
            <NuxtLink to="/about-us">About Us</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/contact">Contact Us</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/explore">Explore</NuxtLink>
          </li>
        </ul>
      </div>
    </nav>
  </header>
  <div>
    <slot />
  </div>

  <!-- <footer>
    <div class="h-[380px] bg-gradient-to-l from-primary-dark to-secondary-dark flex flex-col justiap  ">
      <div></div>
      <div>
        <p>© 2023 John Doe</p>
        <p>Privacy Policy</p>
      </div>
    </div>
  </footer> -->
</template>

<script setup>

</script>



<style></style>
