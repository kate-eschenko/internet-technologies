<template>
  <div>
    Главная страница
  </div>
  <br/>
  <div>
    <RouterLink :to="{ name: ROUTE_NAME.SECOND}">На вторую</RouterLink>
  </div>
  <br/>
  <div>
    <Button @click="() => toSecond()">Переход на вторую страницу</Button>
  </div>
<!--  {{ ourCount }}-->
  <br/>
  <Button @click="() => upCount()">Увеличить</Button>

</template>


<script setup lang="ts">

import {ROUTE_NAME} from "@/router";
import {useRouter} from "vue-router";
import {computed} from "vue";
import {useStore} from "vuex";

const router = useRouter()
const store = useStore()

const ourCount = computed(() => store.getters["getCountX2"])

const toSecond = () => {
  const value = confirm('Вы уверены, что хотите перейти?')
  if (value) {
    router.push({ name: ROUTE_NAME.SECOND})
  }
}

const upCount = () => {
  store.dispatch('runIncrement', 10)
}

</script>

<style scoped>

</style>