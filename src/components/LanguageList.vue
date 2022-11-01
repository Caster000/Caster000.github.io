<script setup lang="ts">
import { useAppStore } from '../stores/appStore'
import {storeToRefs} from "pinia";
import Image from 'primevue/image';
const appStore = useAppStore()
const { TRANSLATIONS, activeLanguage } = storeToRefs(appStore)
const { switchLanguage } = appStore
</script>

<template>
  <ul class="language-list">
    <li v-for="item in TRANSLATIONS">
      <button @click="switchLanguage(item)"
              :label="`Select ${item} language`" class="language-btn"
              :class="{ activeLanguage: item === activeLanguage  }">
        <Image :src="`/flags/${item}.png`" :alt="`${item} flag`"/>
      </button>
    </li>
  </ul>
</template>

<style scoped>
ul > li {
  width: auto;
  margin: 5px;
  padding: 5px;
}
.language-list {
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  flex-direction:row;
}
.language-btn {
  margin: 0.25px;
  padding: 0.25px;
  border-radius: 50%;
  display:block;
  font-size: 0!important;
  border: 8px solid var(--independence);
}
.language-btn:hover {
  border: 8px solid var(--cadet-blue);
  font-size: 0;
}
.activeLanguage{
  border: 8px solid var(--cadet-blue-crayola);
  border-radius: 50%;
  font-size: 0;
}
.p-component.p-image{
  font-size: 0;
}
</style>