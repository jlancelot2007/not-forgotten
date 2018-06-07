<template>
  <v-layout row>
      <v-flex xs12>
        <v-text-field
          name="search"
          label="Search by song title, artist, album, genre"
          value=""
          v-model="search"
          class="search"
        ></v-text-field>
      </v-flex>
    </v-layout>
</template>

<script>
//import SongsService from '@/services/SongsService'
//Object.defineProperty(Vue.prototype, '$lodash', { value: lodash });
import _ from 'lodash'

export default {
  data () {
    return {
      search: ''
    }
  },
  watch: {
    search: (async function (value) {
      const route = {
        name: 'songs'
      }
      if (this.search !== '') {
          route.query = {
            search: this.search
          }
      }
      this.$router.push(route)  
}),

    '$route.query.search': {
      immediate: true,
      async handler (value) {
        this.search = value
     //   this.songs = (await SongsService.index(value)).data
      }
      }
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.largetext {
  width: 480px;
  height: 400px;
  padding: 1em;
}

</style>
