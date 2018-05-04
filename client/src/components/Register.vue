<template>
  <div class="register">
      <h1>Register</h1>
        <input
           type="email"
           name="email"
           placeholder="email" 
        />
        <br>
        <input
           type="password"
           name="password"
           placeholder="password" 
        />
        <br>
        <button>Register</button>

  </div>
</template>

<script>
export default {
  name: 'register',
  data () {
    return {
    
    
    }
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
