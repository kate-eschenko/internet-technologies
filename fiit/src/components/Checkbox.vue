<template>
  <input v-model="check" type="checkbox" @change="(e) => addV(6, e)">{{ v }} // {{ v2 }} // {{ v3 }}
  <span :class=" check ? 'checkbox__label--green' : 'checkbox__label--red' ">Wow! ({{ props.way }}) </span>
  <br/>
</template>

<script setup lang="ts">

import {computed, inject, onMounted, ref} from "vue";
import mitt, {EVENT_NAMES} from '../plugins/mitt.ts'

const props = defineProps({
  way: {
    default: '',
    type: Number
  }
})

const emits = defineEmits(['change'])
const emitter = mitt

const v = ref(0)
const check = ref(false)

const v2 = computed(() => v.value * 2)
const v3 = inject('v')

const addV = (p: number, e: Event | null = null) => {
  v.value += p
  emits('change', v.value)

  emitter.emit(EVENT_NAMES.CHANGE)
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