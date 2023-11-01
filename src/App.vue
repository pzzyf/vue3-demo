<template>
  <div @click="increment()">
    {{ count }}
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useCounterStore } from './store/piniaTest.ts'
import { watch } from 'vue';

const store = useCounterStore()
const { count } = storeToRefs(store)
const { increment } = store

watch(
  count,
  () => {
    console.log(store.double);
  },
  {deep: true}
)

</script>

<style scoped></style>