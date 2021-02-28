<template>
  <div class="page">
    <Header />
    
    <main class="page_content">
      <router-view />
    </main>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import axios from "axios";

window.theMDB = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "?api_key=1f1235ba541cacd1b6c3b44405095d2b",
  lang: "&language=ru-RU"
}
axios.get(`${window.theMDB.baseUrl}configuration${window.theMDB.apiKey}`).then(config => window.theMDB.config = config.data);

export default {
  name: 'App',
  components: { Header }
};
</script>