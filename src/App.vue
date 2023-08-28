<template>
  <div>
  <Navbar></Navbar>
  <router-view></router-view>
  <Footer></Footer>
 </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

</script>