<template>
  <div>
    <div>
      <h2>Search and add a pin</h2>
      <label>
        <gmap-autocomplete
          @place_changed="setPlace">
        </gmap-autocomplete>
        <button >Add</button>
      </label>
      <br/>

    </div>
    <br>
    <div
    class="google-map"
      :center="center"
      :zoom="12"
      :id="mapName"
      style="width:100%;  height: 400px;"
    >
    </div>

  </div>
</template>

<script>
import AccidentsService from '@/services/AccidentsService'

export default {
name: 'google-map',
props: ['name'],
  data() {
    return {
      mapName: this.name + "-map",
     // center: { lat: this.latitude, lng: this.longitude },
     center: { lat: 51.55286, lng: 0.71598 },
     markers: [],
      place: [],
     
      map: null
    }
  },
  async mounted() {
    const element = document.getElementById(this.mapName)
    const options = {
      center: new google.maps.LatLng(51.55286,0.71598 )
    }
   // this.geolocate();
  this.map = new google.maps.Map(element, options)
    this.markers  = (await AccidentsService.index()).data;
console.log(this.markers)
},

  methods: {
    // receives a place object via the autocomplete component
      setPlace(place) {
      this.currentPlace = place;
    },
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
</script>
