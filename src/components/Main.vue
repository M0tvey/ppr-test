<template>
  <div class="films">
    <b-form class="films_filter" @submit="onSubmit">
      <b-container class="films_filter_wrap">
        <b-row align-h="around">
          <b-col lg="4" md="6" sm="12" class="films_filter_year_wrap">
            <b-form-select v-model="form.yearSelected" @change="filterOnChange">
              <b-form-select-option :value="null">Выберете год</b-form-select-option>
              <b-form-select-option v-for="year in (new Date().getFullYear() - startYear)" :key="year + startYear" :value="year + startYear">{{ year + startYear }}</b-form-select-option>
            </b-form-select>
          </b-col>

          <b-col lg="4" md="6" sm="12" class="films_filter_type-video" v-bind:class="'type-' + form.videoType">
            <p class="movie">Фильмы</p>
            <div class="films_filter_type-video_change" @click="toggleChecked"></div>
            <p class="tv">Сериалы</p>
          </b-col>
        </b-row>
      </b-container>
    </b-form>

    <b-container v-if="theMovieDbData && config" class="films_list">
      <b-row class="films_item" v-for="(item, i) in theMovieDbData.slice(0, 10)" :key="item.id" 
        @click="itemOnclick(item.id, form.videoType, item.original_title? item.original_title : item.original_name, $event)">
        <b-col md="1" sm="3" class="films_item_index"><span>{{ i + 1 }}</span></b-col>

        <b-col md="2" sm="9" class="films_item_image text-center">
          <img v-if="item.poster_path" :src="config.images.secure_base_url + config.images.poster_sizes[0] + item.poster_path" :alt="item.title" />
          <span v-else class="no-image"><img :src="defaultImage" :alt="item.title" /></span>
        </b-col>

        <b-col md="9" sm="12">
          <p class="films_item_title">{{ item.title? item.title : item.name }}</p>
          
          <div class="films_item_data">
            <p v-if="item.release_date && item.release_date !== ''" class="films_item_date">Дата выхода: {{ item.release_date.replace(/-/g, '.') }}</p>
            <p v-if="item.overview !== ''" class="films_item_description">Описание: {{ item.overview }}</p>
          </div>
        </b-col>
      </b-row>
    </b-container>

    <Loader ref="loader" />
  </div>
</template>

<script>
import axios from "axios";
import defaultImage from '../assets/images/default.svg';
import Loader from './Loader.vue';

export default {
  name: "Main",
  components: { Loader },
  data() {
    return {
      config: window.theMDB.config,
      startYear: 1969,
      form: {
        yearSelected: null,
        videoType: 'movie'
      },
      defaultImage: defaultImage,
      theMovieDbData: null,
    };
  },
  beforeCreate() {
    axios.get(`${window.theMDB.baseUrl}discover/movie${window.theMDB.apiKey}${window.theMDB.lang}&sort_by=popularity.asc`)
      .then(theMovieDb => this.theMovieDbData = theMovieDb.data.results);
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
    },
    toggleChecked (e) {
      e.preventDefault();
      this.form.videoType = this.form.videoType === 'movie'? 'tv' : 'movie';
      this.filterOnChange()
    },
    filterOnChange() {
      const reliseYear = this.form.videoType === 'movie'? '&year=' + this.form.yearSelected : '&first_air_date_year=' + this.form.yearSelected,
        url = `${window.theMDB.baseUrl}discover/${this.form.videoType}${window.theMDB.apiKey}${window.theMDB.lang}&sort_by=popularity.asc${this.form.yearSelected? reliseYear : ''}`;

      this.$refs.loader.start();
      axios.get(url).then(response => {
        this.theMovieDbData = response.data.results
        this.$refs.loader.end();
      });
    },
    itemOnclick(id, type, titleName, e) {
      e.preventDefault();

      const typeName = type === 'movie'? 'film' : 'serial';
      this.$router.push({ name: typeName, params: { itemTitle: titleName.replace(/\s/g, '_'), itemId: id, itemType: type }})
    }
  }
};
</script>