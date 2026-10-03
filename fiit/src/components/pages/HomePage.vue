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
    <button @click="() => toSecond()">Переход на вторую страницу</button>
  </div>
<!--  {{ ourCount }}-->
  <br/>
  <button @click="() => upCount()">Увеличить</button>

  <Checkbox> Чекбокс </Checkbox>
  <br/>
  --
  <template v-for="i in list" :key="i.id">
    <component :is="listMapComp['Part' + i.type]" :id="i.id" />
<!--    <Part1 v-if="i.type === 1" />-->
<!--    <Part1 v-else-if="i.type === 2" />-->
  </template>
<!--  <Part1 />-->
<!--  <Part2 />-->
</template>

<script setup lang="ts">

import {ROUTE_NAME} from "@/router";
import {useRouter} from "vue-router";
import {computed, defineAsyncComponent, onBeforeUnmount, onMounted} from "vue";
import {useStore} from "vuex";
import mitt, {EVENT_NAMES} from '../../plugins/mitt.ts'
import Checkbox from "@/components/Checkbox.vue";
// import Part1 from "@/components/parts/Part1.vue";
// import Part2 from "@/components/parts/Part2.vue";

const Part1 = defineAsyncComponent(() =>
    import('./../parts/Part1.vue')
)

const Part2 = defineAsyncComponent(() =>
    import('./../parts/Part2.vue')
)

const listMapComp = computed(() => ({
  Part1: Part1,
  Part2: Part2
}));

const router = useRouter()
const store = useStore()
const emitter = mitt

const myAlert = () => {
  alert('CHANGE')
}

onMounted(() => {
  emitter.on(EVENT_NAMES.CHANGE, myAlert)
})

onBeforeUnmount(() => {
  emitter.off(EVENT_NAMES.CHANGE, myAlert)
})

const ourCount = computed(() => store.getters["getCountX2"])

const toSecond = () => {
  const value = confirm('Вы уверены, что хотите перейти?')
  if (value) {
    router.push({ name: ROUTE_NAME.SECOND})
  }
}

const list = computed(() => [
  {
    type: 1,
    id: 1,
  },
  {
    type: 1,
    id: 2,
  },
  {
    type: 2,
    id: 3,
  },
  {
    type: 2,
    id: 4,
  },
  {
    type: 1,
    id: 5,
  }
])

const upCount = () => {
  store.dispatch('runIncrement', 10)
}

</script>

<style scoped>

</style>