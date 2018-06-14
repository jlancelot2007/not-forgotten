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

<script>
//import {mapState} from 'vuex'
//import BookmarksService from '@/services/Songs/BookmarksService'

export default {

  props: [
    
  ],
  data () {
    return {
       headers: [
        {
          text: 'Title',
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

      ]
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

},
async  mounted () {

  },
methods: {
 
  components: {
   
  }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
