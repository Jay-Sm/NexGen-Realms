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

    <div class="flex flex-col items-center">
      <h2 class="text-xl font-medium mb-3">Up and Coming</h2>

      <div class="flex w-full justify-between">
        <div class="w-full flex flex-col items-center px-7">
          <h3 class="text-lg font-medium mb-2">ChronoSphere</h3>
          <img src="../assets/images/game_thumbnails/ChronoSphere.png" class="w-full mb-4">
          <p>
            Embark on an extraordinary journey through time in ChronoSphere, an immersive virtual reality adventure that
            pushes the boundaries of storytelling and gameplay. Equipped with your state-of-the-art VR headset, you'll
            step into the shoes of an intrepid time traveler, exploring ancient civilizations, witnessing pivotal
            historical moments, and even altering the course of events.
            <br>
            <br>
            As the protagonist of this captivating narrative, you'll solve intricate puzzles that require you to
            manipulate time itself. Use your VR controls to freeze, rewind, and fast-forward through history, unlocking
            secrets and unraveling mysteries that have remained hidden for centuries. Immerse yourself in meticulously
            crafted environments, each meticulously recreated to transport you to a different era.
          </p>
        </div>

        <div class="w-[2px] min-w-[2px] bg-white"></div>

        <div class="w-full flex flex-col items-center px-7">
          <h3 class="text-lg font-medium mb-2">Stellar Empires: Echo’s of War</h3>
          <img src="../assets/images/game_thumbnails/Echo’s of War-2.png" class="w-full mb-4">
          <p>Embark on a new cosmic odyssey in "Stellar Empires: Echoes of War," the riveting sequel that follows the
            aftermath of a galaxy-shaking conflict. As the galaxy rebuilds in the wake of war, you step into the role of a
            starship commander whose vessel, once battle-worn, now stands ready for a new era of exploration and
            diplomacy.
            <br>
            <br>
            Building on the immersive foundation of "Stellar Odyssey," "Echoes of War" offers enhanced VR controls that
            allow you to witness the aftermath of battle and contribute to the rebuilding of civilizations. Traverse
            nebulae once veiled in smoke and turmoil, and engage in tactical missions that redefine diplomacy in a
            universe seeking equilibrium.
          </p>
        </div>
      </div>
    </div>


    <div class="award-section">
      <div>
        stuff
      </div>

      <div>
        stuff
      </div>

      <div>
        stuff
      </div>

      <div>
        stuff
      </div>

      <div>
        stuff
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