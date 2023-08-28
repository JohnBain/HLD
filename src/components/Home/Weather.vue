<template>
  <div id="container">
    <!-- <strong>{{ getWeather() }}</strong> -->
    <p>Explore <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
    <p v-if="isLoading">Still loading</p>
    <p v-if="isLoaded">Is not loading anymore</p>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import axios, { isCancel, AxiosError } from 'axios';

defineProps({
  name: "String",
  isLoading: true
});

onMounted(() => {
  console.log(`the component is now mounted.`)
  doStuff().then(function(e) {

    return e;
  });
})

async function doStuff() {
  let lat: string = "40.8259"
  let long: string = "-74.2011"
  return 'foo'
    // return axios.get(`https://api.weather.gov/points/${lat},${long}`)

}
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
