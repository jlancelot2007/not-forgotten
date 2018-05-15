<template>
<v-layout >
  <v-flex xs10 offset-xs2>
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


 <div slot="myslot" v-for="song in songs"
      :key="song.id">
        {{song.title}} 
        {{song.artist}} 
        {{song.album}}
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
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
