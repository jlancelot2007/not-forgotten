<template>

<v-layout >
          <v-flex xs12>
            <v-card color="cyan darken-2" class="white--text">
              <v-container fluid grid-list-lg>
                <v-layout row>
                  <v-flex xs7>
                    <div>
                      <div class="headline">{{song.title}}</div>
                      <div>{{song.artist}}</div>
                    </div>
                  </v-flex>
                  <v-flex xs5>
                    <v-card-media
                    class="song"
                      :src="song.albumImage" alternate="Nothing"
                    ></v-card-media>
                  </v-flex>
                    </v-layout>
                    </v-container>
                    </v-card>
                  </v-flex>
       </v-layout>
</template>

<script>
import SongsService from '@/services/SongsService'
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
  components: {
    Panel
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.song {
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
