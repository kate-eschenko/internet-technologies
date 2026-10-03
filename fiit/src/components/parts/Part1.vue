<template>
  <div>
    Часть 1
  </div>
  {{ props.id }}
</template>


<script setup lang="ts">

const props = defineProps(({
  id: {
    type: Number,
    default: 1
  }
}))

</script>


<style scoped>

</style>