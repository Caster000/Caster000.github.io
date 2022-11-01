<script setup lang="ts">
import SideBar from "primevue/sidebar";
import Button from 'primevue/button';
import {MenuItem} from "./types/MenuItem";
import {ref} from "vue";
import { useAppStore } from './stores/appStore'
import {storeToRefs} from "pinia";
import LanguageList from "./components/LanguageList.vue";
import MenuComponent from "./components/MenuComponent.vue";
import ExperienceComponent from "./components/ExperienceComponent.vue";

const menuVisible = ref(false);

const { TRANSLATIONS, activeLanguage, currentTranslation } = storeToRefs(useAppStore())
const appStore = useAppStore();
appStore.loadLanguage();

const toggleMenu = () => (menuVisible.value = !menuVisible.value);

const menuItems: Array<MenuItem> = [
  { label: "home", path:"/", icon: "pi-home" },
  { label: "about", icon: "pi-info-circle", path: "about" },
  { label: "experience", icon: "pi-briefcase", path: "experiences" },
  { label: "skill", icon: "pi-code", path: "skills" },
  { label: "contact", icon: "pi-envelope", path: "contact" },
];

</script>

<template>
  <Button v-if="!menuVisible" icon="pi pi-bars" @click="toggleMenu" class="p-button-rounded p-button-outlined menu-btn"></Button>
  <SideBar v-model:visible="menuVisible" class="sideBarMenu">
    <MenuComponent :menu="menuItems"/>
  </SideBar>
  <section id="home">
    <div>
      <h1 class="name">Baptiste Chevallier</h1>
      <h2 class="title">{{appStore.currentTranslation.title}}</h2>
    </div>

  </section>
  <section id="about">
    <h2 class="aboutTitle"> {{appStore.currentTranslation.menu["about"]}}</h2>
    <p class="aboutSummary" v-html="appStore.currentTranslation.resume.about"></p>
  </section>
  <section id="experience">
    <h2 class="aboutTitle"> {{appStore.currentTranslation.menu["experience"]}}</h2>
    <div class="exp-container">
      <div v-for="item in appStore.currentTranslation.resume.experience">
        <ExperienceComponent :content="item.content" :dates="item.dates" :title="item.title" :footer="item.tags"/>
        <!--      {{// appStore.currentTranslation.resume["experience"]}}-->
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
section {
  width: 100%;
  padding: 8vh 4vw;
}
#home{
  background-color: var(--raisin-black);
  color: var(--white);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 8vh 4vw;
}

#about{
  //background-color: var(--liberty);
  background-color: var(--cadet-blue);


}

.p-button.p-button-outlined.menu-btn{
  width: 3rem;
  height: 3rem;
  background-color: var(--independence);
  position: fixed;
  top: 4vh;
  left: 4vh;
  color: var(--white);
  &:hover{
    background-color: var(--cadet-blue);
    color: var(--white);
  }
  z-index: 999;
}
.name{
  margin:4rem 0 0 0;
}
.title{
  color: var(--cadet-blue);
  text-decoration: underline;
  font-style: italic;
}
.aboutTitle{
  text-decoration: underline;
}
.aboutSummary{
  font-size: 18px;
}
.exp-container{
  position: relative;

  //left: calc(50% - 300px);
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  color: var(--white);
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;

  }
}

</style>
