<template>
<v-layout >
  <v-flex xs8 offset-xs2>
<panel  title="Songs">
 <router-link slot="action"
 :to="{name: 'songs-create'}">
   <v-btn 
   class="cyan accent-2"
    dark absolute medium 
    right middle fab>
      <v-icon >add</v-icon>
    </v-btn>
  </router-link>


 <div class="song" slot="myslot" v-for="song in songs"
      :key="song.id">

  <v-layout>
  <v-flex xs6>
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
    @click="navigateTo({name: 'song', params: {songId: song.id}})">View Song</v-btn>
  </v-flex>
<v-flex xs6>
<img  class="album-image" :src="song.albumImage" alternate="Nothing"/>
</v-flex>
   </v-layout>
  </div>
</panel>
  </v-flex>
</v-layout>
</template>
<script>
import SongsService from '@/services/SongsService'
import Panel from '@/components/Panel'

export default {
components: { 
  Panel
  }, 
  data () {
    return {
      songs: null
    }
  },
  async mounted () {
   this.songs = (await SongsService.index()).data
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.song {
  padding: 10px;
  height: 150px;
  overflow: hidden;
}
.song-title {
font-size: large
}
.song-artist {
font-size: medium
}
.song-genre {
font-size:small
}
.album-image {
width: 80%;
margin: 0 auto;
}
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}
</style>
