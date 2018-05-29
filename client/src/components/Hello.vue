<template>
  <div>
    <div>
      <h2>Search and add a pin</h2>
      <label>
        <gmap-autocomplete
          @place_changed="setPlace">
        </gmap-autocomplete>
        <button @click="usePlace">Go</button>
      </label>
      <br/>
    </div>
    <br>
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
        icon= "../static/img/icons/PushPin_Left_black.png"

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
  </div>
</template>

<script>
import AccidentsService from '@/services/AccidentsService'

export default {
  name: "GoogleMap",
  data() {
    return {
    
      // change this to whatever makes sense
      center: {lat: 51.145, lng: -0.1234} ,
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
   //   places: [],
  //    marker: {},
      place: null
    };
  },
      async mounted () {
      this.markers = (await AccidentsService.index()).data
    //  console.log(accidents)
     // this.geolocate();
   
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