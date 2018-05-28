<template>
<v-layout >
  <v-flex xs6 offset-xs3>

  
      <div 
      v-for="song in songs"
      :key="song.title">
        {{song.title}} 
        {{song.artist}} 
          {{song.album}}
      </div>

  </v-flex>
</v-layout>
</template>

<script>
import  TributesService from '@/services/TributesService'
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
   this.tributes = (await TributesService.index()).data
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
