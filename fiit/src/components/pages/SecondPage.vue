<template>
  <div>
    Вторая страница
  </div>
  <br/>
  <div>
    <RouterLink :to="{ name: ROUTE_NAME.HOME}">На главную</RouterLink>
  </div>

  <div v-if="id"> Это страница с id : {{ id }} </div>
  <div v-else> Это пустая страница
    Возможно вы хотели найти <br/>
    <RouterLink :to="{ name: ROUTE_NAME.SECOND_P, params: { id: '505'}}">На страницу 505 </RouterLink>

  </div>
</template>

<script setup lang="ts">

import {ROUTE_NAME} from "@/router";
import {useRoute} from "vue-router";
import {computed} from "vue";

const route = useRoute()

const id = computed(() => route.params.id)

</script>

<style scoped>

</style>