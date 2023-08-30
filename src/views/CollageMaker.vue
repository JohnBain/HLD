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
      <h1>Content</h1>
    </ion-content>
    <ion-footer>
      <ion-tab-bar slot="bottom" class="collageBottom">
        <ion-tab-button>
          <ion-icon aria-hidden="true" :icon="CMBot_Add" alt="add to collage" selected="false" />
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

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';

import CMTop_BackToHome from "/collage_top/backtopagebuttoncollagemaker.svg"
import CMTop_Back from "/collage_top/backbuttoniconcollagemaker.svg"
import CMTop_Forward from "/collage_top/forwardbuttoniconcollagemaker.svg"
import CMTop_Export from "/collage_top/exportbuttoncollagemaker.svg"
import CMTop_Download from "/collage_top/downloadiconcollagemaker.svg"
import CMTop_Save from "/collage_top/savebuttoncollagemaker.svg"

import CMBot_Add from "/collage_bottom/addbuttoncollagemaker.svg"
import CMBot_BGRemove from "/collage_bottom/autobackgroundremovebuttoncollagemaker.svg"
import CMBot_Adjust from "/collage_bottom/adjustbuttoncollagemaker.svg"
import CMBot_Filters from "/collage_bottom/filtersbuttoncollagemaker.svg"
import CMBot_Draw from "/collage_bottom/drawbuttoncollagemaker.svg"
import CMBot_Erase from "/collage_bottom/erasebuttoncollagemaker.svg"
import CMBot_BGAdd from "/collage_bottom/addbackgroundbuttoncollagemaker.svg"
import CMBot_Sticker from "/collage_bottom/stickerbuttoncollagemaker.svg"
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
  <nav>
    <div id="navbar">
       <div id="back2home"> <img src="users/amy/HLD/public/backtopagebuttoncollagemaker.svg" alt="back to home"></div>
        <div class="navimages"><img src="users/amy/HLD/public/backbuttoniconcollagemaker.svg" alt="undo"></div>
        <div class="navimages"><img src="users/amy/HLD/public/forwardbuttoniconcollagemaker.svg" alt="redo"></div>
        <div class="navimages"><img src="users/amy/HLD/public/exportbuttoncollagemaker.svg" alt="export"></div>
        <div class="navimages"><img src="users/amy/HLD/public/downloadiconcollagemaker.svg" alt="download"></div>
        <div id="save"><img src="users/amy/HLD/public/savebuttoncollagemaker.svg" alt="Save go to closet"></div>
</div>
    
  </nav>

  <body>
    <div id="app"></div>
    <div id="picture"></div>
    
    <script type="module" src="/src/main.ts"></script>
  </body>
  <footer>
    

  </footer>

</html>
-->
