<template>
 <div class="white elevation-2" >
   <v-toolbar flat dense class="cyan" dark>
     <v-toolbar-title>{{title}}</v-toolbar-title>
        <slot name="action" >
        </slot>
   </v-toolbar>
   <div class="pl-4 pr-4 pt-2 pb-2">
    <slot name="myslot">
    </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'panel',

  props: [
    'title'
  ]
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
