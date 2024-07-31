<script setup>

import Navbar from "./Navbar.vue";

</script>

<template>
  <Navbar/>
  <section id="inicio" class="flex justify-between pt-24 container px-0 relative">
    <div class="text-container">
      <div class="text-2xl justify-center w-full">
        <div class="flex items-center gap-3">
          <h1 class="text-light-100 text-left tracking-wider">
            Desenvolva seu potencial de uma maneira nova e única com a Udev Lab
            <img class="inline-block custom-align -ml-4" src="../assets/Ponto.svg" alt="ponto-final"/>
          </h1>
        </div>

        <p class="pt-6 text-xl tracking-wide font-normal text-primary-500 md:w-auto">
          A Udev Lab é uma empresa júnior que impulsiona seu negócio com a
          expertise de nossos desenvolvedores universitários. Disponibilizamos
          uma equipe capacitada e especializada em diversas áreas para
          desenvolver plataformas inovadoras e eficazes.
        </p>

        <div class="justify-between mt-8">
          <button type="button" class="mr-6 text-primary-200 bg-light-100 hover:bg-primary-200 hover:text-light-100 focus:outline-none focus:ring-4 font-medium rounded-full text-base px-5 py-2 text-center me-1 mb-0">Comece o seu projeto</button>
          <button type="button" class="text-light-100 hover:text-light-100 border border-primary-200 hover:bg-primary-200 focus:ring-4 focus:outline-none focus:ring-primary-200 font-medium rounded-full text-base px-5 py-2 text-center me-1 mb-0">Faça parte do time</button>
        </div>
      </div>
    </div>



    <div class="image-container">
      <img class="ml-4" src="../assets/Grade.svg" alt="Grade-Hard"/>
      <div class="overlay-text1 font-light">Desde</div>
      <div class="overlay-text2 font-semibold">2021</div>
    </div>


  </section>

</template>
