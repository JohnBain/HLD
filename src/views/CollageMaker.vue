<template>
  <ion-page>
    <ion-header>
      <ion-tab-bar slot="top" class="collageTop">
        <ion-tab-button>
          <ion-icon aria-hidden="true" :icon="CMTop_BackToHome" alt:="back to home" />
        </ion-tab-button>
        <ion-tab-button>
          <ion-icon aria-hidden="true" :icon="CMTop_Back" alt="undo" />
        </ion-tab-button>
        <ion-tab-button>
          <ion-icon aria-hidden="true" :icon="CMTop_Forward" alt="redo" />
        </ion-tab-button>
        <ion-tab-button>
          <ion-icon aria-hidden="true" :icon="CMTop_Export" alt="export" />
        </ion-tab-button>
        <ion-tab-button>
          <ion-icon aria-hidden="true" :icon="CMTop_Download" alt="download" />
        </ion-tab-button>
        <ion-tab-button>
          <ion-icon aria-hidden="true" :icon="CMTop_Save" alt="save go to closet" />
        </ion-tab-button>
      </ion-tab-bar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 1</ion-title>
        </ion-toolbar>
      </ion-header>
      <v-stage :config="configKonva">
        <v-layer>
          <v-text :config="{text: 'Some text on canvas', fontSize: 15}"/>
          <v-rect :config="{
            x: 20,
            y: 50,
            width: 100,
            height: 100,
            fill: 'red',
            shadowBlur: 10,
            draggable: true,
          }"
        />
          <v-circle :config="configCircle"></v-circle>
          <v-image v-for="(item,index) in this.photos" :config="{
            image: item,
            draggable: true
          }"/>
        </v-layer>
      </v-stage>
    </ion-content>
    <ion-footer>
      <ion-tab-bar slot="bottom" class="collageBottom">
        <ion-tab-button>
          <ion-icon aria-hidden="true" :icon="CMBot_Add" alt="add to collage" selected="false" @click="addPhoto" />
        </ion-tab-button>
        <ion-tab-button>
          <ion-icon aria-hidden="true" :icon="CMBot_BGRemove" alt="auto" />
        </ion-tab-button>
        <ion-tab-button>
          <ion-icon aria-hidden="true" :icon="CMBot_Adjust" alt="adjust" />
        </ion-tab-button>
        <ion-tab-button>
          <ion-icon aria-hidden="true" :icon="CMBot_Draw" alt="draw" />
        </ion-tab-button>
        <ion-tab-button>
          <ion-icon aria-hidden="true" :icon="CMBot_Erase" alt="erase" />
        </ion-tab-button>
        <ion-tab-button>
          <ion-icon aria-hidden="true" :icon="CMBot_BGAdd" alt="backgrounds" />
        </ion-tab-button>
        <ion-tab-button>
          <ion-icon aria-hidden="true" :icon="CMBot_Sticker" alt="stickers" />
        </ion-tab-button>
      </ion-tab-bar>
    </ion-footer>
  </ion-page>
</template>
<!--
  <div id="footer">
      <div id="add2collage"><img src="users/amy/HLD/public/addbuttoncollagemaker.svg" alt="add to collage"></div>
      <div id="auto"><img src="users/amy/HLD/public/autobackgroundremovebuttoncollagemaker.svg" alt="auto"></div>
      <div class="footerimages"><img src="users/amy/HLD/public/adjustbuttoncollagemaker.svg" alt="adjust"></div>
      <div class="footerimages"><img src="users/amy/HLD/public/filtersbuttoncollagemaker.svg" alt="filters"></div>
      <div id="draw"><img src="users/amy/HLD/public/drawbuttoncollagemaker.svg" alt="draw"></div>
      <div id="erase"><img src="users/amy/HLD/public/erasebuttoncollagemaker.svg" alt="erase"></div>
      <div id="backgrounds"><img src="users/amy/HLD/public/addbackgroundbuttoncollagemaker.svg" alt="backgrounds"></div>
      <div id="stickers"><img src="users/amy/HLD/public/stickerbuttoncollagemaker.svg" alt="stickers"></div>

import CMBot_Add from "/collage_bottom/addbuttoncollagemaker.svg"
import CMBot_BGRemove from "/collage_bottom/autobackgroundremovebuttoncollagemaker.svg"
import CMBot_Adjust from "/collage_bottom/adjustbuttoncollagemaker.svg"
import CMBot_Filters from "/collage_bottom/filtersbuttoncollagemaker.svg"
import CMBot_Draw from "/collage_bottom/drawbuttoncollagemaker.svg"
import CMBot_Erase from "/collage_bottom/erasebuttoncollagemaker.svg"
import CMBot_BGAdd from "/collage_bottom/addbackgroundbuttoncollagemaker.svg"
import CMBot_Sticker from "/collage_bottom/stickerbuttoncollagemaker.svg"

    </div>-->

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import { defineComponent } from 'vue';


import CMTop_BackToHome from "/collage_top/backtopagebuttoncollagemaker.svg"
import CMTop_Back from "/collage_top/backbuttoniconcollagemaker.svg"
import CMTop_Forward from "/collage_top/forwardbuttoniconcollagemaker.svg"
import CMTop_Export from "/collage_top/exportbuttoncollagemaker.svg"
import CMTop_Download from "/collage_top/downloadiconcollagemaker.svg"
import CMTop_Save from "/collage_top/savebuttoncollagemaker.svg"

import CMBot_Add from "/collage_bottom/addbuttoncollagemaker.svg"
import CMBot_BGRemove from "/collage_bottom/autobackgroundremovebuttoncollagemaker.svg"
import CMBot_Adjust from "/collage_bottom/adjustbuttoncollagemaker.svg"
import CMBot_Draw from "/collage_bottom/drawbuttoncollagemaker.svg"
import CMBot_Erase from "/collage_bottom/erasebuttoncollagemaker.svg"
import CMBot_BGAdd from "/collage_bottom/addbackgroundbuttoncollagemaker.svg"
import CMBot_Sticker from "/collage_bottom/stickerbuttoncollagemaker.svg"
export default defineComponent({
  
  created() {
    // var that = this;
    // this.photos.forEach(function(e){
    //   console.log('hello world')
    //   that.createImage(e)
    // })
    this.createImage("TEST_IMAGES/guy_shirt.png")
    this.photos.forEach((e)=>this.createImage(e));
  },
  data() {
    return {
      image: null,
      count: 0,
      fullPhotos: ["TEST_IMAGES/guy_shirt.png","TEST_IMAGES/guy_pants.png","TEST_IMAGES/guy_shirt2.png",],
      photos: ["TEST_IMAGES/guy_shirt.png","TEST_IMAGES/guy_pants.png","TEST_IMAGES/guy_shirt2.png",],
      configKonva: {
        width: window.innerWidth,
        height: window.innerHeight * .8,
      },
      configCircle: {
        x: 300,
        y: 100,
        radius: 70,
        fill: "red",
        stroke: "black",
        strokeWidth: 4,
        draggable: true,
      },
      imageConfig: {
    x: 200,
    y: 50,
    image: this.imageObj,
    width: 100,
    height: 100
  }
    }
  },
  methods: {
    addPhoto(){

    },
    createImage(src){
      const image = new window.Image();
      image.src = src;
      image.onload = () => {
        // set image only when it is loaded
        this.image = image;
      };
    }
  },

  components: {
    IonPage,IonHeader,IonToolbar,IonTitle,IonContent
  },
  setup() {
    return { CMTop_BackToHome, CMTop_Back, CMTop_Forward, CMTop_Export, CMTop_Download, CMTop_Save,
      CMBot_Add,CMBot_BGRemove,CMBot_Adjust,CMBot_Draw,CMBot_Erase,CMBot_BGAdd,CMBot_Sticker}
  }
})

</script>

<style>
.collageTop,
.collageTop * {
  background-color: black
}

.collageBottom,
.collageBottom * {
  background-color: black
}
</style>
<!--
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Haul'd</title>

    <base href="/" />

    <meta name="color-scheme" content="light dark" />
    <meta
      name="viewport"
      content="viewport-fit=cover, width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
    />
    <meta name="format-detection" content="telephone=no" />
    <meta name="msapplication-tap-highlight" content="no" />

    <link rel="shortcut icon" type="image/png" href="/favicon.png" />

    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-title" content="Ionic App" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black" />
    <link rel="stylesheet" href="collagemaker.css">
    
  </head>
  

  <body>
    <div id="app"></div>
    <div id="picture"></div>
    
    <script type="module" src="/src/main.ts"></script>
  </body>
  <footer>
    

  </footer>

</html>
-->
