<template>
  <ion-page>

    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="top">
        <ion-tab-button tab="tab1" href="/tab1">
          <ion-icon aria-hidden="true" :icon="home" />
          <ion-label>Home</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="tab2" href="/closet">
          <ion-icon :icon="images" />
          <ion-label>Closet</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="tab4" href="/tab3">
          <ion-icon aria-hidden="true" :icon="cash" />
          <ion-label>Market</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="tab4" href="/tab3">
          <ion-icon aria-hidden="true" :icon="menu" />
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>

  

  </ion-page>
</template>

<script setup lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { images, square, home, cash, menu } from 'ionicons/icons';
import communitySvg from '/public/community.svg';

</script>




