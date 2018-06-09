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

        <v-btn dark 
               class="cyan"
               v-if="isUserLoggedIn && !bookmark"
               @click="setAsBookmark" 
               Set As Bookmark
               >Bookmark Song
        </v-btn>
        <v-btn dark class="cyan"
                v-if="isUserLoggedIn && bookmark"
               @click="unsetAsBookmark" 
               Unset As Bookmark
               >Unmark Song</v-btn>
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
import {mapState} from 'vuex'
import Panel from '@/components/Panel'
import BookmarksService from '@/services/BookmarksService'

export default {
//  props: [
 //   song
//  ],
  data () {
    return {
      song: {},
      playerVars: {
        autoplay: 0
      },
      isBookmarked: false,
      bookmark: null
    }
  },
watch: {
  async song() {
     if (!this.isUserLoggedIn) {
     return
   }
try {
   const songId = this.$store.state.route.params.songId
  
   this.bookmark = (await BookmarksService.index({
      songId: this.$store.state.route.params.songId,
     userId: this.$store.state.user.id
   })).data
   
   console.log('bookmark', this.Bookmark)
  } catch (err) {
    console.log(err)
  }
  }
},
computed: {
   ...mapState([
     'isUserLoggedIn'
   ])
},
async  mounted () {
   this.song = (await SongsService.show(this.$store.state.route.params.songId)).data

  },
methods: {
  async setAsBookmark() {
    try {
     this.bookmark = await BookmarksService.post({
       songId:  this.$store.state.route.params.songId,
       userId: this.$store.state.user.id
       
     })
    } catch (err)  {
      console.log(err)
       console.log(this.song.id) 
      console.log(this.$store.state.user.id)
    }
           console.log(this.song.id) 
           console.log('bookmark hiy')
      console.log(this.$store.state.user.id)
  },
  async unsetAsBookmark() {
    try {
      await BookmarksService.delete(this.bookmark.id)
      this.bookmark = null
    } catch (err)  {
      console.log(err)
    }
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
  width: 400px;
  height: 400px;
  padding: 1em;
}
.album-image {
  height: 300px;
  width: 300px;
}
</style>
