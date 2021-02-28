<template>
  <b-container v-if="item.data" class="video-item">
    <div v-if="item.data.backdrop_path" class="video-item_backdrop">
      <img :src="config.secure_base_url + config.backdrop_sizes[1] + item.data.backdrop_path" :alt="item.data[ifMovie? 'title': 'name']">
    </div>

    <b-row>
      <b-col md="3" sm="12" class="video-item_image_wrap text-center">
        <img v-if="item.data.poster_path" class="video-item_image" :src="config.secure_base_url + config.poster_sizes[2] + item.data.poster_path" :alt="item.data.title" :title="item.data.title" />
        <img v-else class="no-image" :src="defaultImage" :alt="item.data[ifMovie? 'title': 'name']" />
        
        <p v-if="item.data.vote_average" class="video-item_rating">
          <span class="video-item_rating_average">{{ item.data.vote_average }}</span>
          <span class="video-item_rating_count">{{ item.data.vote_count }}</span>
        </p>
      </b-col>
      
      <b-col md="9" sm="12">
        <div class="video-item_title_wrap text-center">
          <h1 class="video-item_title">{{ item.data[ifMovie? 'title': 'name'] }}</h1>
          <h2 v-if="item.data.tagline" class="video-item_title_tagline">{{ item.data.tagline }}</h2>
        </div>

        <div v-if="item.credits" class="video-item_data">
          <b-row v-if="item.data.genres.length" class="video-item_data_item video-item_genres">
            <b-col sm="3" xs="12"><p class="video-item_label">Жанр:</p></b-col>
            <b-col sm="9" xs="12">
              <p class="video-item_genres_item">
                <span v-for="(genr, i) in item.data.genres" :key="genr.id">
                  {{ genr.name + (i === (item.data.genres.length - 1)? '': ', ') }}
                </span>
              </p>
            </b-col>
          </b-row>
              
          <b-row v-if="item.credits.cast.length" class="video-item_data_item video-item_actors">
            <b-col sm="3" xs="12"><p class="video-item_label">Актеры:</p></b-col>
            <b-col sm="9" xs="12">
              <p class="video-item_actors_item">
                <span v-for="(actor, i) in item.credits.cast" :key="actor.id">
                  {{ actor.name}} <span v-if="actor.profile_path" :id="'actor-' + actor.id">&#128453;</span>{{ i === (item.credits.cast.length - 1)? '': ', ' }}

                  <b-popover v-if="actor.profile_path" :target="'actor-' + actor.id" triggers="hover" placement="top">
                    <img :src="config.secure_base_url + config.poster_sizes[0] + actor.profile_path" :alt="actor.name" :title="actor.name">
                  </b-popover>
                </span>
              </p>
            </b-col>
          </b-row>

          <b-row v-if="item.credits.crew.length" class="video-item_data_item video-item_crew">
            <b-col sm="3" xs="12"><p class="video-item_label">создатели:</p></b-col>
            <b-col sm="9" xs="12">
              <p class="video-item_crew_item">
                <span v-for="(creator, i) in item.credits.crew" :key="creator.id + '-' +i">
                  {{ creator.name}} <span v-if="creator.profile_path" :id="'creator-' + creator.id">&#128453;</span>{{ i === (item.credits.crew.length - 1)? '': ', ' }}

                  <b-popover v-if="creator.profile_path" :target="'creator-' + creator.id" triggers="hover" placement="top">
                    <img :src="config.secure_base_url + config.poster_sizes[0] + creator.profile_path" :alt="creator.name" :title="creator.name">
                  </b-popover>
                </span>
              </p>
            </b-col>
          </b-row>

          <b-row v-if="item.data.release_date" class="video-item_data_item video-item_release">
            <b-col sm="3" xs="12"><p class="video-item_label">Дара релиза:</p></b-col>
            <b-col sm="9" xs="12">{{ item.data.release_date.replace(/-/g, '.') }}</b-col>
          </b-row>

          <b-row v-if="item.data.homepage" class="video-item_data_item video-item_homepage">
            <b-col sm="3" xs="12"><p class="video-item_label">Сайт Фильма:</p></b-col>
            <b-col sm="9" xs="12"><a :href="item.data.homepage" target="_blanck">{{ item.data[ifMovie? 'original_title': 'original_name'] }}</a></b-col>
          </b-row>
        </div>
      </b-col>
    </b-row>

    <b-row v-if="item.data.overview" class="video-item_description_wrap">
      <b-col cols><p class="video-item_description">{{ item.data.overview }}</p></b-col>
    </b-row>
    
    <b-row v-if="item.images && item.images.length" class="video-item_images">
      <b-col md="3" sm="6" v-for="(image, i) in item.images" :key="'image' + i" class="video-item_images_item">
        <img :src="config.secure_base_url + config.backdrop_sizes[0] + image.file_path" :alt="item.data[ifMovie? 'title': 'name']"  @click="$bvModal.show('item-image-' + i)" />

        <b-modal :id="'item-image-' + i" hide-footer centered>
          <div class="d-block text-center">
            <img class="modal_image" :src="config.secure_base_url + config.backdrop_sizes[1] + image.file_path" :alt="item.data[ifMovie? 'title': 'name']">
          </div>
        </b-modal>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import axios from "axios";
import defaultImage from '../assets/images/default.svg';

export default {

  name: "VideoItem",
  data() {
    return {
      config: window.theMDB.config.images,
      item: {
        data: null,
        credits: null,
        images: null
      },
      defaultImage: defaultImage,
    }
  },
  beforeCreate() {
    if (this.$route.params.itemId) localStorage.setItem('video-item', JSON.stringify([this.$route.params.itemId, this.$route.params.itemType]));

    const videoIP = JSON.parse(localStorage.getItem('video-item')),
      getUrl = (from) => {
      const data = from? '/' + from : '',
        lang = from === 'images'? '' : window.theMDB.lang;
      return `${window.theMDB.baseUrl + videoIP[1]}/${videoIP[0] + data + window.theMDB.apiKey + lang}`
    }

    this.ifMovie = videoIP[1] === 'movie';

    axios.get(getUrl()).then(item => this.item.data = item.data);
    axios.get(getUrl('credits')).then(credits => this.item.credits = credits.data);
    axios.get(getUrl('images')).then(images => this.item.images = images.data.backdrops);

  }
}
</script>