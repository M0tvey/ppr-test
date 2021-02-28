<template>
  <header class="header text-center">
    <router-link :to="{ name: 'home'}" class="header_logo">
      <img :src="logo" alt="" class="header_logo_image" />
      <h1 class="header_logo_text">Киновтопку</h1>
    </router-link>
  </header>
</template>

<script>
import logo from '../assets/images/logo.svg';

export default {
  name: 'Header',
  data() {
    return {
      logo: logo,
    };
  },
};
</script>