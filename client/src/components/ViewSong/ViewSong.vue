<template>
  <v-layout>
  <v-flex xs5>  
<v-tabs xs6 sm6
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
      Edit Song
  </v-tab>
  <v-tab ripple>
    Item 4
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
    @click="navigateTo({name: 'song-edit', params: {songId: song.id}})">View Song</v-btn>
    </v-card>
  </v-tab-item>
  <v-tab-item>
    <v-card flat>
      <v-card-text>Contents forFavourites2 go here</v-card-text>
    </v-card>
  </v-tab-item>  
    <v-tab-item>
    <v-card flat>
      <v-card-text>Edit Song</v-card-text>
       <router-link slot="action"
 :to="{name: 'song-edit'}">
      <v-btn dark class="cyan"
             @click="navigateTo({name: 'song-edit',
              params: {songId: song.id}})">Edit Song</v-btn>
              </router-link>
    </v-card>
  </v-tab-item>
  <v-tab-item>
    <v-card flat>
      <v-card-text>Contents for Item 4 go here</v-card-text>
    </v-card>
  </v-tab-item> 
</v-tabs>
</v-flex>

<v-flex xs7 ml-2>
<v-tabs 
  color="cyan"
  dark
  slider-color="yellow"
  grow
>
  <v-tab ripple >
    Youtube
  </v-tab>
  <v-tab ripple>
    Lyrics
  </v-tab>
   <v-tab ripple>
      Song tab
  </v-tab>
  <v-tab ripple>
    Item 4
  </v-tab>
  <v-tab-item>
    <v-card flat >
    <v-card-text>
        <youtube :video-id="song.youtubeId"
        :player-width="500"
        player-height="230"></youtube>
    </v-card-text>
    </v-card>
  </v-tab-item>
  <v-tab-item>
    <v-card flat>
      <v-card-text>  <textarea class="largetext" readonly  v-model="song.lyrics"></textarea></v-card-text>
    </v-card>
  </v-tab-item>  
    <v-tab-item>
    <v-card flat>
      <v-card-text>
        <textarea class="largetext" readonly  v-model="song.tab"></textarea></v-card-text>
    </v-card>
  </v-tab-item>
  <v-tab-item>
    <v-card flat>
      <v-card-text>Contents for Item 4 go here</v-card-text>
    </v-card>
  </v-tab-item> 
</v-tabs>
</v-flex>
  <router-view></router-view>
     
  </v-layout>
</template>

<script>
import SongsService from '@/services/SongsService'
import VueYouTubeEmbed from 'vue-youtube-embed'
//import SongMetadata from '@/components/ViewSong/SongMetadata'
//import SongTab from '@/components/ViewSong/SongTab'
//import SongLyrics from '@/components/ViewSong/SongLyrics'
import Panel from '@/components/Panel'

export default {
  data () {
    return {
      song: {}
    }
  },

async  mounted () {
   const songId = this.$store.state.route.params.songId
   this.song = (await SongsService.show(songId)).data
   console.log(this.song)
  },
methods: {
   navigateTo (route) {
     this.$router.push(route)
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
  width: 480px;
  height: 400px;
  padding: 1em;
}
.album-image {
  height: 300;
  width: 100%;
}
</style>
