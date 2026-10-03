<template>
  <div>
    Часть 2
  </div>
  {{ props.id }}
</template>


<script setup lang="ts">

const props = defineProps(({
  id: {
    type: Number,
    default: 2
  }
}))

</script>


<style scoped>

</style>