<script setup lang="ts">
import Card from 'primevue/card';
import Tag from 'primevue/tag';

defineProps<{ header?: string, title: string, dates: string, content: string, footer?: any }>()

</script>

<template>
  <Card class="custom-card">
    <template #header>
      {{ header }}
    </template>
    <template #title>
      <p>{{ title }}</p>
    </template>
    <template #subtitle>
      <p class="dates" v-html="dates"></p>
    </template>
    <template #content>
      <p v-html="content"></p>
    </template>
    <template #footer>
     <span v-for="item in footer">
            <Tag :rounded="true" class="customTag">
              <span>{{ item.name }}</span>
            </Tag>
     </span>

    </template>
  </Card>

</template>

<style scoped lang="scss">

.custom-card {
  height: 60vh;
  width: 42vw;
  //flex: 1 0 21%;
  //flex-grow: 1;
  background-color: #17141d;
  border-radius: 10px;
  box-shadow: -1rem 0 3rem #000;
  transition: 0.4s ease-out;
  position: relative;
  left: 0px;
  //margin-right: 10px;
  color: var(--white);
  margin: 20px 10px;
  @media (max-width: 768px) {
    width: 80vw;
    //height: 60vh;
    margin: 20px 0;
  }
  @media (max-width: 1024px) {
    height: 70vh;
  }
}

.customTag {
  background-color: var(--bdazzled-blue);
  color: var(--white);
  margin: 2px;
}

.dates {
  color: var(--cadet-blue);
  font-size: 18px;
}

.custom-card:not(:first-child) {
  //margin-left: -50px;
}

.custom-card:hover {
  transform: translateY(-20px);
  transition: 0.4s ease-out;
}

.custom-card:hover ~ .card {
  position: relative;
  left: 50px;
  transition: 0.4s ease-out;
}

</style>
