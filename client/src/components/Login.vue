<template>
<v-layout >
  <v-flex xs6 offset-xs3>
  <v-card class="white elevation-2">
   
     <v-toolbar flat dense class="cyan" dark>
        <v-toolbar-title>Login</v-toolbar-title>
        
     </v-toolbar>
 <form autocomplete="off">
  <div class="pl-4 pr-4 pt-2 pb-2">
    <v-text-field
           label="Email"
           name="Email"
           v-model="email"
            id="email"
           >
    </v-text-field>   
    <v-text-field
          v-model="password"
          :append-icon="e1 ? 'visibility' : 'visibility_off'"
          :append-icon-cb="() => (e1 = !e1)"
          :type="e1 ? 'password' : 'text'"
          name="password"
          label="Enter your password"
          min="8"
          counter
           autocomplete="new-password"
          id="password"
            >
    </v-text-field>
        <br>
    <div class="danger-alert" v-html="error"/>
    <br>
        <v-btn @click="login">Login</v-btn>
 </div>
 </form>
  </v-card>
  </v-flex>
</v-layout>

</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  name: 'login',
  data () {
    return {
       e1: false,
       email: '',
       password: '',
       error: null
    
    }
  },
  methods: {
  async login () {
    try {
     const response = await  AuthenticationService.login({
        email: this.email,
        password: this.password
      });
      this.$store.dispatch('setToken', response.data.token)
      this.$store.dispatch('setUser', response.data.user)
      this.$router.push({
        name: 'songs'
      })
      console.log("Logged in success");
     console.log(this.$store.state.user.id)
      } catch (error) {
        this.error = error.response.data.error;
      }

    }
  },
  mounted () {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}

a {
  color: #35495E;
}

.danger-alert {
  color: red;
}
</style>
