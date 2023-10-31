<template>
  <div @click="increment()">
    {{ count }}
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useCounterStore } from './store/piniaTest.ts'

const store = useCounterStore()
const { count } = storeToRefs(store)
const { increment } = store

</script>

<style scoped></style>