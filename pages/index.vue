<template>
  <div class="flex flex-col gap-y-[12rem]">
    <div>
      <img src="../assets/images/Hero_Image.png" class="w-full h-[35rem]">
    </div>

    <div class="flex flex-col items-center relative">
      <div class="flex mb-3">
        <h2 class="text-xl font-medium">Featured Games</h2>
        <button
          class="w-[167px] h-[60px] bg-gradient-to-r from-[#B06BF0] to-[#FF5875] rounded shadow-button absolute right-12">Explore
          Games</button>
      </div>
      <div class="flex justify-between absolute left-4 right-4 top-1/2">
        <button class="slide-button">
          <img src="../assets/images/icons/arrow.svg" class="w-[35px] mr-2">
        </button>
        <button class="slide-button">
          <img src="../assets/images/icons/arrow.svg" class="w-[35px] ml-2 rotate-180">
        </button>
      </div>
      <div class="flex flex-row overflow-x-hidden w-full justify-center">
        <div class="relative">
          <img src="../assets/images/game_thumbnails/Stellar Empires.png" class="game-carousal">
          <button class="buy-button">Buy Now</button>
        </div>
        <div class="mx-[100px] relative">
          <img src="../assets/images/game_thumbnails/Mindscape.png" class="game-carousal">
          <button class="buy-button">Buy Now</button>
        </div>
        <div class="relative">
          <img src="../assets/images/game_thumbnails/Chronicles of Elysium.png" class="game-carousal">
          <button class="buy-button">Buy Now</button>
        </div>
      </div>
    </div>

    <div class="flex flex-col items-center relative">
      <h2 class="text-xl font-medium mb-3">Up and Coming</h2>
      <div class="flex w-full h-[1000px] justify-between">
        <div class="w-full">
          <h3>ChronoSphere</h3>

          <img src="" alt="">

        </div>
        <div class="w-[2px] min-w-[2px] h-full bg-white"></div>
        <div class="w-full">
          <h3>Stellar Empires: Echo’s of War</h3>

        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'transparent'
})
</script>

<style></style>