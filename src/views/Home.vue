<template>
  <ion-page>
    <ion-header>
      <!-- <ion-toolbar>
  <ion-title>Tab 3</ion-title>
</ion-toolbar>
 -->
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 3</ion-title>
        </ion-toolbar>
      </ion-header>
      <Weather/>
      <div>
      </div>
    </ion-content>
  </ion-page>
</template>

<style>
</style>

<script setup lang="ts">
//how to import stuff

import {
  IonFab,
  IonFabButton,
  IonIcon
} from '@ionic/vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import { IonFooter } from '@ionic/vue';

import { add } from 'ionicons/icons';
import ClosetButton from "/main_buttons/closetbutton.svg"

import Weather from '@/components/Home/Weather.vue'
</script>
