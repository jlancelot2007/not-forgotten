<template>
  <v-layout>
  <v-flex xs12>  
<v-tabs xs12 sm12
  color="cyan"
  dark
  slider-color="yellow"
  grow
>
  <v-tab ripple >
    Selectors
  </v-tab>
  <v-tab ripple>
    Map
  </v-tab>
   <v-tab ripple>
      Memorials
  </v-tab>
  <v-tab ripple>
    Location Street View
  </v-tab>
  <v-tab-item>
    <v-card flat >
<div id="app">
    <v-card class="grey lighten-4 elevation-0">
      <v-card-text>
        <v-container fluid>
          <v-layout row wrap>
            <v-flex xs12 sm3>
            </v-flex>

            <v-flex xs12 sm6>
              <v-layout row wrap>
              <v-flex xs12 sm12>
              <h2>Search and add a pin</h2>
              <label>
              <gmap-autocomplete
              @place_changed="setPlace">
              </gmap-autocomplete>
              <button @click="usePlace">Go</button>
               </label>
               </v-flex>
                <v-flex xs12 sm12>
                  <v-radio-group  :mandatory="false" label="Severity">
                    <v-radio label="Fatal" value="1"></v-radio>
                    <v-radio label="Severe Injury" value="2"></v-radio>
                  </v-radio-group>
                </v-flex>
                <v-flex xs12 sm12>
                  <v-select v-bind:items="years" v-model="a1" label="Years"
                   autocomplete multiple chips></v-select>
                </v-flex>
              </v-layout>
            </v-flex>
            <v-flex xs12 sm3>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-text>
    </v-card>
  
</div>
    </v-card>
  </v-tab-item>
  <v-tab-item>
    <v-card flat>
 <gmap-map
      :center="center"
      :zoom="12"
      style="width:100%;  height: 400px;"
    >
   <gmap-marker 
        v-for="(m, index) in markers"
        :key="index"
+       :position="getPosition(m)"
        @click="center=m.position"
        icon= "../static/img/icons/PushPin_Left_red.png"
        :clickable="true"
        :draggable="true"
        @mouseover="statusText = m.text"
        @mouseout="statusText = null"
      ></gmap-marker>
      <div slot="visible">
        <div style="bottom: 0; left: 0; background-color: #0000FF; color: white; position: absolute; z-index: 100">
          {{statusText}}
        </div>
      </div>
    </gmap-map>
    </v-card>
  </v-tab-item>  
    <v-tab-item>
    <v-card flat>
      <v-card-text>Memorials</v-card-text>
    </v-card>
  </v-tab-item>
  <v-tab-item>
    <v-card flat>
      <v-card-text>Contents for Item 4 go here</v-card-text>
    </v-card>
  </v-tab-item> 
</v-tabs>
</v-flex>
</v-layout> 
</template>

<script>
import AccidentsService from '@/services/AccidentsService'

export default {
  name: "GoogleMap",
props: {
        menu: false,
      ex1: false,
},
           
  data() {
    return {
     a1: [],
      years: [ 
        "2001",
        "2002",
        "2003",
        "2004",
        "2005",
        "2006",
        "2007",
        "2008",
        "2009",
        "2010",
        "2011",
        "2012",
        "2013",
        "2014",
        "2015",
        "2016",
      ],  
      // change this to whatever makes sense
      center: {lat: 52.145, lng: -0.1234} ,
      statusText: '',
      markers: [{
            position: [51.555066,
               0.691532],
              text: "hello there"
            }, {
            position: 
              [51.565066,
               0.697532],
              text: "Wromg place"
          }],
          accidents: [],
      place: null,
      
    };
  },
      async mounted () {
      this.markers = (await AccidentsService.index()).data

      var pins = []
     pins[0] = "../static/img/icons/PushPin_Left_black.png"
     pins[1] = "../static/img/icons/PushPin_Left_red.png"
     pins[2] = "../static/img/icons/PushPin_Left_white.png"
  },
  methods: {
    // receives a place object via the autocomplete component
    setPlace(place) {
      this.Place = place; 
    },
        getPosition: function(marker) {
          return {
        lat: parseFloat(marker.lat),
        lng: parseFloat(marker.lng)
      }
    },
        usePlace(place) {
      if (place) {

        this.markers.push(place);
        
        for (var i = 0; i < this.accidents.length; i++) {
           if (this.accidents[i]) {
             this.markers.push({
               position: {
                 lat: this.accidents[i].lat,
                 lng: this.accidents[i].lng
               }
             })
           }
}
          this.place = null;
          console.log(this.markers)
      }
    },
    toggleInfo: function(marker, key) {
      this.infoPosition = this.getPosition(marker);
      this.infoContent = marker.full_name;
      if (this.infoCurrentKey == key) {
        this.infoOpened = !this.infoOpened;
      } else {
        this.infoOpened = true;
        this.infoCurrentKey = key;
      }
    },
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
    }
  }
}
</script>
<style>
</style>

