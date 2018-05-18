<template>
  <div>
    <div>
      <h2>Search and add a pin</h2>
      <label>
        <gmap-autocomplete
          @place_changed="setPlace">
        </gmap-autocomplete>
        <button @click="addMarker">Add</button>
<v-btn color="info">Info</v-btn>
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
        v-for="(m, index) in this.markers"
        :position="m.position"
        @click="center=m.position"
      ></gmap-marker>
    </gmap-map>
  </div>
</template>

<script>
import AccidentsService from '@/services/AccidentsService'

export default {

  data() {
    return {
     // center: { lat: this.latitude, lng: this.longitude },
     center: { lat: 51.55286, lng: 0.71598 },
      markers: [],
      places: [],
      currentPlace: null
    }
  },

  async mounted() {
    this.geolocate();
    
    this.markers  = (await AccidentsService.index()).data;
   console.log(this.markers)
       var  i;
    for (i = 0; i < this.markers.length; i++) {    
      this.marker = new google.maps.Marker({  
        position: new google.maps.LatLng(this.markers[i].lat, this.markers[i].lng),
        map: map
      });

  }
  },

  methods: {
    // receives a place object via the autocomplete component
    setPlace(place) {
      this.currentPlace = place;
    },
    addMarker() {
      if (this.markers[i]) {
        const marker = {
          lat: this.markers[i].lat().data,
          lng: this.markers[i].lng().data
        };
        this.markers[i].push({ position: marker });
        this.places.push(this.currentPlace);
      //  this.center = marker;
      //  this.currentPlace = null;
      }
    },

    geolocate() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
         // lat: position.coords.latitude,
         // lng: position.coords.longitude
         lat: 51.55286,
         lng: 0.71598
        };
      });
    }
  }
}
</script>
