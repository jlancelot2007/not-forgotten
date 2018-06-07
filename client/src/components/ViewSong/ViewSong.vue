<template>
  <v-layout>
  <v-flex xs12>  
<v-tabs xs12 sm6
  color="cyan"
  dark
  slider-color="yellow"
  grow
>
  <v-tab ripple >
    Song Metadata
  </v-tab>
  <v-tab ripple>
    Favourites
  </v-tab>
   <v-tab ripple>
      Youtube
  </v-tab>
  <v-tab ripple>
    Lyrics
  </v-tab>
    <v-tab ripple>
    Tab
  </v-tab>
  <v-tab-item>
    <v-card flat >
      <img  class="album-image" :src="song.albumImage" alternate="Nothing"/>
      <v-card-text>{{song.title}}</v-card-text>
          <div class="song-title" >
{{song.title}} 
    </div>
        <div class="song-artist"  >
 {{song.artist}}  
    </div>
        <div class="song-genre">
 {{song.genre}}
    </div>
    <v-btn dark class="cyan"
    :to="{name: 'song-edit', params: {songId: song.id}}">Edit Song</v-btn>
    </v-card>
  </v-tab-item>
  <v-tab-item>
    <v-card flat>
      <v-card-text>Contents forFavourites2 go here</v-card-text>
    </v-card>
  </v-tab-item>  
  <v-tab-item>
    <v-card flat >
    <v-card-text>
<youtube :video-id="song.youtubeId" 
         :player-vars="playerVars" height="260px"
         @playing="playing"></youtube>
    </v-card-text>
    </v-card>
  </v-tab-item>
  <v-tab-item>
    <v-card flat>
      <v-card-text>  
        <textarea class="largetext" readonly  v-model="song.lyrics">
      </textarea>
      </v-card-text>
    </v-card>
  </v-tab-item> 
      <v-tab-item>
    <v-card flat>
      <v-card-text>
        <textarea class="largetext" readonly  v-model="song.tab"></textarea></v-card-text>
    </v-card>
  </v-tab-item>
</v-tabs>
</v-flex>
  <router-view></router-view>  
  </v-layout>
</template>

<script>
import SongsService from '@/services/SongsService'
import VueYouTube from 'vue-youtube'

import Panel from '@/components/Panel'

export default {
  data () {
    return {
      song: {},
      playerVars: {
        autoplay: 1
      }
    }
  },

async  mounted () {
   const songId = this.$store.state.route.params.songId
   this.song = (await SongsService.show(songId)).data
   console.log(this.song)
  },
methods: {
  setAsBookmark() {

  },

   playing() {
      console.log('\o/ we are watching!!!')
    }
},
  components: {
    Panel
 
  },


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.largetext {
  width: 100%;
  height: 400px;
  padding: 1em;
}
.album-image {
  height: 300;
  width: 100%;
}
</style>
