<template>
  <div id="container">
    <strong>{{ qualitativeWeather }}</strong>
  </div>
</template>

<script>
export default {
  data() {
    return {
      error: false,
      qualitativeWeather: ""
    }
  },
  methods: {
    async getWeather() {
      try {
        let lat = "40.8259"
        let long = "-74.2011"
        let res = await fetch(`https://api.weather.gov/points/${lat},${long}`)
        let weatherUrl = (await res.json()).properties.forecast;
        console.log(weatherUrl)

        let res2 = await fetch(weatherUrl)
        this.qualitativeWeather = (await res2.json()).properties.periods[0].detailedForecast;
        localStorage.setItem("lastWeatherCheck", new Date.getTime());
        localStorage.setItem("qualitativeWeather", this.qualitativeWeather);
      } catch (error) {
        this.error = true //'Error! Could not reach the API. ' + error
      }
    },
    shouldUpdateWeather() {
      const TIME_ELAPSED = 30; //minutes
      let lastCheck = localStorage.getItem("lastWeatherCheck");
      let date = new Date();
      if (Math.abs(((date.getTime() - lastCheck) / 1000) / 60) > TIME_ELAPSED) {
        console.log("more than " + TIME_ELAPSED + " minutes elapsed; lets update weather")
        return true;
      } else {
        return false;
      }


    }
  },
  mounted: function() {
    if (this.shouldUpdateWeather()) {
      getWeather();
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
