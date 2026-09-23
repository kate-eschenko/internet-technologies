<template>
  <input v-model="check" type="checkbox" @change="(e) => addV(6, e)">{{ v }} // {{ v2 }} //
  <span :class=" check ? 'checkbox__label--green' : 'checkbox__label--red' ">Wow! ({{ props.way }}) </span>
  <br/>
</template>

<script setup lang="ts">

import {computed, onMounted, ref} from "vue";

const props = defineProps({
  way: {
    default: '',
    type: Number
  }
})

const emits = defineEmits(['change'])

const v = ref(0)
const check = ref(false)

const v2 = computed(() => v.value * 2)

const addV = (p: number, e: Event | null = null) => {
  v.value += p
  emits('change', v.value)
}

onMounted(() => {
  console.log('Checkbox ' + props.way)
})

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