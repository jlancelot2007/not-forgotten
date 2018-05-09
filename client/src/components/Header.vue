<template>
<v-toolbar fixed class="cyan">
<v-toolbar-title class="mr-4">
    <span class="home" @click="navigateTo({name: 'root'})">
       Not Forgotten
    </span>
    
</v-toolbar-title>
<v-toolbar-items>
    <v-btn flat dark>
        Browse
    </v-btn>
</v-toolbar-items>
<v-spacer></v-spacer>
<v-toolbar-items>
    <v-btn flat dark 
    @click="navigateTo({name: 'login'})">
      Login
    </v-btn>
    <v-btn flat dark 
    @click="navigateTo({name: 'register'})">
      Sign Up
    </v-btn>
   
</v-toolbar-items>

</v-toolbar>

</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  name: 'header',
methods: {
   navigateTo (route) {
       this.$router.push(route);
   }
},
  mounted () {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >

a {
  color: #35495E;
}

.home {
   cursor: pointer;
}
.home:hover {
   color: #EE9E; 
}
</style>
