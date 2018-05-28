<template>
  <div>
    <div>
      <h2>Search and add a pin</h2>
      <label>
        <gmap-autocomplete
          @place_changed="setPlace">
        </gmap-autocomplete>
        <button @click="addMarker">Add</button>
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
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        @click="center=m.position"
      ></gmap-marker>
    </gmap-map>
  </div>
</template>

<script>
import AccidentsService from '@/services/AccidentsService'

export default {
  name: "GoogleMap",
  data() {
    return {
      // default to Montreal to keep it simple
      // change this to whatever makes sense
      center: { lat: 45.508, lng: -73.587 },
      markers: [],
      places: [],
      currentPlace: null
    };
  },

      async mounted () {
      //markers = (await AccidentsService.index()).data
     // this.geolocate();
    
  },

  methods: {
    // receives a place object via the autocomplete component
    setPlace(place) {
      this.currentPlace = place;
    },
    addMarker() {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng()
        };
      //  this.markers = (AccidentsService.index()).data
     //     console.log(markers)
        this.markers.push({ position: marker });
        this.places.push(this.currentPlace);
        this.center = marker;
        this.currentPlace = null;
      }
    },
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
    },
    getMarkers: function() {
      var newMarkers = this.markers.map(function (markers = (AccidentsService.index()).data) { //Map over the markers
      for (i = 0; i < this.markers.length; i++) { // loop over the markers
           if (this.markers.indexOf(marker) != this.markers[i]) { // Make sure we don't compare the marker to itself
               if(Object.is(marker.position, this.markers[i].position)) { //compare the position on the marker
                   return { // if the position on the markers match, build a new marker adding 2
                               position: {
                                   lat: marker.position.lat+2,
                                   lng: marker.position.lat+2,
                               },
                               infoText: marker.infoText
                      }
                 }
                        }
                    }
                      return marker;
                });
    }
  }
};
</script>