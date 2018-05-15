<template>
<v-layout fluid>
   
<v-flex xs5>
 
      <v-toolbar color="indigo" dark>
        <v-toolbar-title>Song Metadata</v-toolbar-title>
      </v-toolbar>
<v-card>
<v-text-field
           label="Song Title"
           name="Title"
           v-model="song.title"
            id="Title" >
</v-text-field> 
<v-text-field
           label="Artist"
           name="Artist"
           v-model="song.artist"
            id="Artist" >
</v-text-field> 
<v-text-field
           label="Genre"
           name="Genre"
           v-model="song.genre"
           hint="e.g. ballad, orchestral, rock"
            id="Genre" >
</v-text-field> 
<v-text-field
           label="Album"
           name="Album"
           v-model="song.album"
            id="Album" >
</v-text-field> 
<v-text-field
           label="AlbumImage"
           name="Album Image"
           v-model="song.albumImage"
            id="AlbumImage" >
</v-text-field> 
<v-text-field
           label="youtubeId"
           name="Youtube Id"
           v-model="song.youtubeId"
            id="youtubeId" >
  </v-text-field>
</v-card>
  </v-flex>

  <v-flex xs7 ml-4>
    <v-toolbar color="indigo" dark>
        <v-toolbar-title>Song Lyrics</v-toolbar-title>
      </v-toolbar>
   
<v-card>
  <v-text-field
           label="Tab ID"
           name="tab"
           multi-line
           v-model="song.tab"
            id="tab" >
  </v-text-field> 
  <v-text-field
           label="Lyrics"
           multi-line
           name="lyrics"
           v-model="song.lyrics"
            id="lyrics" >
  </v-text-field>
</v-card>
       <v-btn @click="create">Create Song</v-btn>
   
  </v-flex>
</v-layout>
</template>

<script>
import SongsService from '@/services/SongsService'
import Panel from '@/components/Panel'
export default {
  data () {
    return {
      song: {
       title: null,
       artist: null,
       genre: null,
       album: null,
       albumImage: null,
       youtubeId: null,
       lyrics: null,
       tab: null
       }
    }
  },
  methods: {
    async create ()
   {  
     try {
       console.log(this.song)
           await SongsService.post(this.song);
     this.$router.push({
       name: 'songs'
     })
   }  catch (err) {
     console.log(err)
   }
     
    }
  },
    components: { 
  Panel
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
