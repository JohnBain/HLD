import axios, {isCancel, AxiosError} from 'axios';

// 40.8259° N, 74.2090° W -- use fake lat and long now
// https://api.weather.gov/points/40.8259,-74.2011
// needs 4 digits -- note note that W and S are negative 

// eventually lets change this to go to multiple free providers if one's down or rate-limited

const getWeatherBasedOnLocation = async (lat,long) => {
  axios.get(`https://api.weather.gov/points/${lat},${long}`)
  	.then(function(response){
  		console.log(response)
  		await response.properties.forecast
  	axios.get(response.properties.forecast)
  	.then(function(response){
  		await properties.periods[0].shortForecast;
  	})
  })
  .catch(function(err){
  	return "Error getting weather"
  })
  navigator.geolocation.getCurrentPosition(function(succ){
  	// console.log('got succ!')
  	// console.log(succ)
  })
}


export const getWeather = () => {
	// let lat:string = "40.8259"
	// let long:string = "-74.2011"
	// var forecast = getWeatherBasedOnLocation(lat,long);
	// console.log(forecast)
	// return forecast
	
}
