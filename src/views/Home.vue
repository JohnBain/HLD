<template>
  <ion-page>
    <ion-header>
      <!-- <ion-toolbar>
  <ion-title>Tab 3</ion-title>
</ion-toolbar>
 -->
      <div class="weather">weather!</div>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 3</ion-title>
        </ion-toolbar>
      </ion-header>
      <HomeContainer name="Good morning!" />
      <div>
      </div>
      <div class="myfoot">foo</div>
    </ion-content>
  </ion-page>
</template>

<style>
.myfoot {
  position: absolute;
  bottom: 0px;
}
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

import HomeContainer from '@/components/HomeContainer.vue';
</script>
