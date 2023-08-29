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
</template>

<script setup>

</script>



<style></style>
