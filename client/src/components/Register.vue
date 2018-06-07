<template>
<v-layout >
  <v-flex xs6 offset-xs3>
  <v-card class="white elevation-2">
     <v-toolbar flat dense class="cyan" dark>
        <v-toolbar-title>Register</v-toolbar-title>
        
     </v-toolbar>
<form name="register-form" autocomplete="off">
  <div class="pl-4 pr-4 pt-2 pb-2">
  <v-text-field
           label="User name"
           name="username"
           v-model="username"
            id="username"
           >
    </v-text-field> 
    <v-text-field
           label="Email"
           name="Email"
           v-model="email"
            id="email"
           >
    </v-text-field>
    <v-flex xs8>   
    <v-text-field
          v-model="password"
          :append-icon="e1 ? 'visibility' : 'visibility_off'"
          :append-icon-cb="() => (e1 = !e1)"
          :type="e1 ? 'password' : 'text'"
          name="password"
          label="Enter your password"
          hint="At least 8 characters"
          min="8"
          counter
            >
    </v-text-field>
    </v-flex>
        <br>
    <div class="danger-alert" v-html="error"/>
    <br>
        <v-btn @click="register">Register</v-btn>
 </div>
 </form>
  </v-card>
  </v-flex>
</v-layout>

</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  name: 'register',
  data () {
    return {
       e1: false,
       email: '',
       password: '',
       username: '',
       error: null
    
    }
  },
  methods: {
  async register () {
    try {
     const response = await  AuthenticationService.register({
        email: this.email,
        password: this.password,
        username: this.username
      });
      this.$store.dispatch('setToken', response.data.token)
      this.$store.dispatch('setUser', response.data.user)
      this.$router.push({
        name: 'songs'
      })
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
  color: orange;
}
</style>
