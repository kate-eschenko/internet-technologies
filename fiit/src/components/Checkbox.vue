<template>
  <input v-model="check" type="checkbox" @change="(e) => addV(6, e)">{{ v }} //
  <span :class=" check ? 'checkbox__label--green' : 'checkbox__label--red' ">Wow! ({{ props.way }}) </span>
  <br/>
</template>

<script setup lang="ts">

import { ref } from "vue";

const props = defineProps({
  way: {
    default: '',
    type: Number
  }
})

const emits = defineEmits(['change'])

const v = ref(0)
const check = ref(false)

const addV = (p: number, e: Event | null = null) => {
  v.value += p
  emits('change', v.value)
}

</script>

<style scoped lang="scss">

.checkbox__label {
  &--red {
    color: red;
  }
  &--green {
    color: green;
  }
}
</style>