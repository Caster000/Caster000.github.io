<script setup lang="ts">
import { ref } from 'vue'
import {MenuItem} from "../types/MenuItem";
import {storeToRefs} from "pinia";
import {useAppStore} from "../stores/appStore";
import LanguageList from "./LanguageList.vue";

defineProps<{ menu: Array<MenuItem> }>();
const appStore = useAppStore();

</script>

<template>
  <ul>
    <li v-for="item in menu" class="li-menu">
      <router-link :to="item.path"><i :class="`pi ${item.icon}`"></i> {{ appStore.currentTranslation.menu[item.label] }}</router-link>
    </li>
  </ul>
  <LanguageList/>
</template>

<style scoped lang="scss">
ul{
  list-style: none;
  padding: 0;
}
.li-menu{
  margin: 1rem;
  font-size: 1.5rem;
}
.pi{
  font-size: 1.5rem;
  padding-right: 2px;
}
</style>
