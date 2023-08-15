<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="top">
        <ion-tab-button tab="tab1" href="/tabs/tab1">
          <ion-icon aria-hidden="true" :icon="home" />
          <ion-label>Home</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab2" href="/tabs/tab2">
  <ion-icon :icon="images" />
  <ion-label>Closet</ion-label>
</ion-tab-button>

        <ion-tab-button tab="tab3" href="/tabs/tab3">
          <ion-icon aria-hidden="true" :icon="square" />
          <ion-label>Community</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="tab4" href="/tabs/tab3">
          <ion-icon aria-hidden="true" :icon="cash" />
          <ion-label>Market</ion-label>
        </ion-tab-button>
         <ion-tab-button tab="tab4" href="/tabs/tab3">
          <ion-icon aria-hidden="true" :icon="menu" />
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { images, square, home, cash, menu } from 'ionicons/icons';

</script>
