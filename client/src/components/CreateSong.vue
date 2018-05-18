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
            required
           :rules="[required]"
            id="Title" >
</v-text-field> 
<v-text-field
           label="Artist"
           name="Artist"
           v-model="song.artist"
            required
           :rules="[required]"
            id="Artist" >
</v-text-field> 
<v-text-field
           label="Genre"
           name="Genre"
           v-model="song.genre"
           hint="e.g. ballad, orchestral, rock"
            required
           :rules="[required]"
            id="Genre" >
</v-text-field> 
<v-text-field
           label="Album"
           name="Album"
           v-model="song.album"
            required
           :rules="[required]"
            id="Album" >
</v-text-field> 
<v-text-field
           label="AlbumImage"
           name="Album Image"
           v-model="song.albumImage"
            required
           :rules="[required]"
            id="AlbumImage" >
</v-text-field> 
<v-text-field
           label="youtubeId"
           name="Youtube Id"
           v-model="song.youtubeId"
            required
           :rules="[required]"

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
            required
           :rules="[required]"
            id="tab" >
  </v-text-field> 
  <v-text-field
           label="Lyrics"
           multi-line
           name="lyrics"
           v-model="song.lyrics"
            required
           :rules="[required]"
            id="lyrics" >
  </v-text-field>
 
</v-card>
<div class="danger-alert" v-if="error">
 {{error}}
</div>
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
           },
        error: null,
        required: (value) => !!value || 'Required'
           
       }


   },
  methods: {
    async create () {
      this.error = null
           const areAllFieldsFilledIn = Object
        .keys(this.song)
        .every(key => !!this.song[key])
        if (!areAllFieldsFilledIn) {
          this.error = "Please fill in all the required fields"
          return
        
        }
     try {
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
.danger-alert {
  color: red;
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
