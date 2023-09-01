<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="top" class="mybar">
        <ion-tab-button tab="tab1" href="/home">
          <ion-icon :icon="HomeButton" />
          <ion-label class="navtext">Home</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="tab2" href="/closet">
          <ion-icon :icon="ClosetButton" />
          <ion-label class="navtext">Closet</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="tab3" href="/tab3">
          <ion-icon aria-hidden="true" :icon="GoalsButton" />
          <ion-label class="navtext">Goals</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="community" href="/community">
          <ion-icon aria-hidden="true" :icon="CommunityButton" />
          <ion-label class="navtext">Community</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="tab3" href="/tab3">
          <ion-icon aria-hidden="true" :icon="MarketButton" />
          <ion-label class="navtext">Market</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="collage_maker" href="/collage_maker">
          <ion-icon aria-hidden="true" :icon="ProfileButton" />
          <ion-label class="navtext">Profile</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
      <ion-footer>
      </ion-footer>
    </ion-tabs>
  </ion-page>
</template>
<!-- <template>
  <ion-page>
    <nav>
      <div id="navbar">
        <div class="navimages"> <img src="homebutton.svg" alt="home">
          <div id="navtext">
            <h1>Home</h1></div>
        </div>
        <div class="navimages"><img src="closetbutton.svg" alt="closet">
          <div id="navtext">
            <h1>Closet</h1></div>
        </div>
        <div id="navimages"><img src="goalsbutton.svg" alt="goals">
          <div id="navtext">
            <h1>Goals</h1></div>
        </div>
        <div id="navimages"><img src="community.svg" alt="community">
  <div id="navtext">
    <h1>Community</h1></div>
</div>
 
        <div id="navimages"><img src="marketbutton.svg" alt="market">
          <div id="navtext">
            <h1>Market</h1></div>
        </div>
        <div id="navimages"><img src="profilebutton.svg" alt="profile">
          <div id="navtext">
            <h1>Profile</h1></div>
        </div>
      </div>
    </nav>
  </ion-page>
</template>
 -->

<script setup lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet, IonFooter } from '@ionic/vue';
import { images, square, home, cash, menu } from 'ionicons/icons';
import HomeButton from "/main_buttons/homebutton.svg";
import ClosetButton from "/main_buttons/closetbutton.svg"
import GoalsButton from "/main_buttons/goalsbutton.svg"
import CommunityButton from "/main_buttons/community.svg"
import MarketButton from "/main_buttons/marketbutton.svg"
import ProfileButton from "/main_buttons/profilebutton.svg"
import '@/theme/navigationbar.scss';


// import communitySvg from '/public/community.svg';
</script>

<style>
.navtext {
  font-family: 'Avenir', 'Franklin Gothic Medium', 'Arial', Arial, sans-serif;
  font-size: xx-small;
}
</style>
