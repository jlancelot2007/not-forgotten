<template>
  <v-layout>
  <v-flex xs12>  
<v-tabs xs12 sm6
  color="purple darken-4"
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
    <v-btn dark class="purple lighten-4"
    :to="{name: 'song-edit', params: {songId: song.id}}">Edit Song</v-btn>

        <v-btn dark 
               class="purple lighten-4"
               v-if="isUserLoggedIn && !this.isBookmarked"
               @click="setAsBookmark" 
          
               >Bookmark Song
        </v-btn>
        <v-btn dark class="purple lighten-4"
                v-if="isUserLoggedIn && this.isBookmarked"
               @click="unsetAsBookmark" 
          
               >Unmark Song</v-btn>
    </v-card>
  </v-tab-item>
  <v-tab-item> 
<v-flex>
<template>
   <v-data-table
    :headers="headers"
    :pagination.sync="pagination"
    :items="bookmarks"
    hide-actions
    class="elevation-1"
  >
    <template slot="items" slot-scope="props">
      <td class="text-xs-left">{{ props.item.title }}</td>
      <td class="text-xs-left">{{ props.item.artist }}</td>

    </template>
  </v-data-table>
</template>
</v-flex>
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
//import SongBookmarks from '@/components/viewsong/SongBookmarks'

export default {
components: { 
 // SongBookmarks
  },
//  props: [
 //   song
//  ],
  data () {
    return {
             headers: [
        {
          text: 'Song Title',
          value: 'title',
          align: 'left'
        },
        {
          text: 'Artist',
          value: 'artist',
          align: 'left'
        }
      ],
      pagination: 
        {
          sortBy: 'date',
          descending: true
        },
      bookmarks: [

      ],
      song: {},
      playerVars: {
        autoplay: 0
      },
      isBookmarked: null,
      bookmark: null,

    }
  },
watch: {
  async song() {
     if (!this.isUserLoggedIn) {
     return
   }
try {
   const songId = this.$store.state.route.params.songId
  // this.isBookmarked = null
   this.bookmark = (await BookmarksService.index({
      songId: this.songId,
     userId: this.user.id
   })).data

  // this.isBookmarked = !!bookmark
     this.isBookmarked = this.bookmark.id
console.log(this.isBookmarked)

  } catch (err) {
    console.log(err)
  }
  }
},
computed: {
   ...mapState([
     'isUserLoggedIn',
     'user'
   ])
},
async  mounted () {
   this.song = (await SongsService.show(this.$store.state.route.params.songId)).data
   
     if (!this.isUserLoggedIn) {
        this.bookmark = (await BookmarksService.index({
        songId: this.songId,
        userId: this.user.id
   })).data
   console.log(bookmark)
   }
},
methods: {
  async setAsBookmark() {
    try {
     this.bookmark = await BookmarksService.post({
       songId:  this.song.id,
       userId: this.user.id
     })
this.isBookmarked = this.bookmark.id
    } catch (err)  {
      console.log(err)
       console.log(this.song.id, this.user.id)
    }
 
  },
  async unsetAsBookmark() {
    try {
      await BookmarksService.delete(this.bookmark.id)
      this.isBookmarked = null
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
  width: 100%;
}
</style>
