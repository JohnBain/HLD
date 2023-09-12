<template>
  <div id="container">
    <strong>{{ qualitativeWeather }}</strong>
  </div>
</template>

<script>
import { Geolocation } from '@capacitor/geolocation';

export default {
  data() {
    return {
      error: false,
      qualitativeWeather: ""
    }
  },
  methods: {
    async getWeather(lat, long) {
      try {
        let res = await fetch(`https://api.weather.gov/points/${lat},${long}`)
        let weatherUrl = (await res.json()).properties.forecast;
        console.log('here is weather url:')
        console.log(weatherUrl)

        let res2 = await fetch(weatherUrl)
        console.log(weatherUrl) //https://api.weather.gov/gridpoints/OKX/26,39/forecast
        this.qualitativeWeather = (await res2.json()).properties.periods[0].detailedForecast;
       

        var curr_date = new Date();
        localStorage.setItem("lastWeatherCheck", curr_date.getTime());
        localStorage.setItem("qualitativeWeather", this.qualitativeWeather);
        const items = { ...window.localStorage };
        console.log(items)
      } catch (error) {
        this.error = true //'Error! Could not reach the API. ' + error
      }
    },
    shouldUpdateWeather() {
      const TIME_ELAPSED = 30 //minutes

      let convertMillisToMinutes = (mill) => (Math.floor((mill / 1000) / 60) % 60)
      console.log(localStorage.getItem("lastWeatherCheck") + ' localStorage.getItem("lastWeatherCheck")?')
      let lastCheck = localStorage.getItem("lastWeatherCheck");
      let currTime = new Date().getTime()
      console.log("time since last check: " + convertMillisToMinutes((currTime - lastCheck)))

      if (convertMillisToMinutes(currTime - lastCheck) > 30) {
        console.log('over 30; updating')
        return true;
      } else {
        console.log('has not been 30 minutes')
        return false;
      }
    },
    async checkGeoLocation() {
      console.log(navigator.permissions);
      try {
        const coordinates = await Geolocation.getCurrentPosition();
        return coordinates;
      } catch (err) {
        console.log(err)
        return false;
      }
    },
  },
  mounted: async function() {
    let geolocation = (await this.checkGeoLocation());
    if (geolocation) {
      console.log(geolocation)
      var lat = parseFloat(geolocation.coords.latitude).toFixed(4);
      var long = parseFloat(geolocation.coords.longitude).toFixed(4);
      console.log(lat)
      console.log(long)
    } else {
      var lat = "40.8259"
      var long = "-74.2011"
    }
    if (this.shouldUpdateWeather()) {
      this.getWeather(lat, long);
    } else {
      this.qualitativeWeather = localStorage.getItem("qualitativeWeather");
    }

  }

}

/*
 https://api.weather.gov/points/40.8259,-74.2011*/
</script>

<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
