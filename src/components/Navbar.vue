<template>
  <nav class="flex items-center justify-between container mx-auto px-0">
    <div class="flex gap-1">
      <svg width="21" height="30" viewBox="0 0 37 46" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.5995 2.47028C26.9585 8.30579 38.6611 24.0459 18.5995 40.3222C-1.08349 24.8029 10.3983 8.62122 18.5995 2.47028Z" stroke="url(#paint0_linear_130_271)" stroke-width="4.91053" stroke-linejoin="round"/>
        <path d="M34.2279 46C34.2279 41.9845 32.5828 38.1333 29.6547 35.2939C26.7265 32.4544 22.755 30.8593 18.6139 30.8593C14.4729 30.8593 10.5014 32.4544 7.57322 35.2939C4.64504 38.1333 3 41.9845 3 46" stroke="url(#paint1_linear_130_271)" stroke-width="4.91053"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M19.0871 42.6649C19.4659 42.5884 19.8302 42.4217 20.1465 42.1651C30.7266 33.5812 33.3596 24.6949 31.656 16.8934C30.0155 9.38076 24.4823 3.51892 20.005 0.393268C19.7229 0.196291 19.41 0.0653188 19.0871 0V5.88392C22.4316 8.72887 25.7788 12.9963 26.8585 17.9409C27.9873 23.1103 26.754 29.5811 19.0871 36.6009V42.6649Z" fill="url(#paint2_linear_130_271)"/>
        <defs>
          <linearGradient id="paint0_linear_130_271" x1="7.73152" y1="26.1278" x2="5.36577" y2="43.1611" gradientUnits="userSpaceOnUse">
            <stop stop-color="#673ADF"/>
            <stop offset="1" stop-color="#B2B2B2"/>
          </linearGradient>
          <linearGradient id="paint1_linear_130_271" x1="5.36575" y1="41.2685" x2="35.6473" y2="46" gradientUnits="userSpaceOnUse">
            <stop stop-color="#8A63FC"/>
            <stop offset="1" stop-color="#707070"/>
          </linearGradient>
          <linearGradient id="paint2_linear_130_271" x1="16.1202" y1="21.398" x2="32.5074" y2="31.8171" gradientUnits="userSpaceOnUse">
            <stop stop-color="#673ADF"/>
            <stop offset="1" stop-color="#B2B2B2"/>
          </linearGradient>
        </defs>
      </svg>
      <h2 class="font-semibold text-light-100 text-2xl mt-0.5">Udev Lab</h2>
    </div>
    <div class="hidden md:flex items-center gap-8">
      <div class="barra-menu"></div>
      <a href="#inicio">INÍCIO</a>
      <a href="#sobre">SOBRE A UDEV</a>
      <a href="#duvidas">DÚVIDAS</a>
      <a href="#servicos">SERVIÇOS</a>
      <button type="button" class="text-light-100 hover:text-light-100 border border-primary-200 hover:bg-primary-200 focus:ring-4 focus:outline-none focus:ring-primary-200 font-medium rounded-full text-sm px-5 py-2 text-center me-1 mb-0">CONTATO</button>
    </div>
    <div class="md:hidden flex items-center">
      <button @click="toggleMenu" class="text-2xl ">
        <Icon icon="solar:hamburger-menu-outline"/>
      </button>
    </div>
    <div v-if="menuOpen" class="absolute top-16 right-0 bg-primary-200 w-40 md:hidden flex flex-col items-end p-4">
      <a href="#inicio" class="block mb-2">INÍCIO</a>
      <a href="#sobre" class="block mb-2">SOBRE A UDEV</a>
      <a href="#duvidas" class="block mb-2">DÚVIDAS</a>
      <a href="#servicos" class="block mb-2">SERVIÇOS</a>
      <a href="#contato" class="block mb-2">CONTATO</a>
    </div>
  </nav>
</template>

<script setup>
  import { ref } from 'vue';
  import {Icon} from "@iconify/vue";

  const menuOpen = ref(false);

  function toggleMenu() {
    menuOpen.value = !menuOpen.value;
  }

</script>