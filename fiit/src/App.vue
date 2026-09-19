<template>
  <h1>Мой первый проект на Vue! ({{ value }}) </h1>
  <CheckboxComp :way="1" @change="(v) => addValue(v)"/>
  <CheckboxComp :way="2" @change="(v) => addValue(v*2)"/>
  <CheckboxComp :way="341" @change="(v) => addValue(v*3)"/>
  <CheckboxComp :way="245" @change="(v) => addValue(v*4)"/>
</template>

<script setup lang="ts">

import CheckboxComp from "@/components/Checkbox.vue";
import {ref} from "vue";

const value = ref(0)

const addValue = (v: number) => {
  value.value += v
}

</script>

<style scoped></style>
