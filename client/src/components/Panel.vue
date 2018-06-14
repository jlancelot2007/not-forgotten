<template>
  <v-layout column>
    <v-flex xs10 offset-xs1>
  <div class="white elevation-2" light >
    <v-toolbar flat dense class="purple darken-4" dark>
      <v-toolbar-title>{{title}}</v-toolbar-title>
          <slot name="action" >
          </slot>
    </v-toolbar>
    <div >
      <slot name="myslot">
      </slot>
      <v-flex>
      <v-card>
      <v-card-text >
      </v-card-text>
      </v-card>
      </v-flex>
      </div>
    </div>
    </v-flex>
    </v-layout>
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
<style scope=local>

.action {
  color: rgb(20, 21, 22);
  background-color: green;
}

.mySlot {
  color: rgb(20, 21, 22);
  background-color: rgb(39, 43, 39);
}
</style>
