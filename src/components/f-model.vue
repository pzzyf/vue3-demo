<template>
  state 值：{{ state }}
  <my-input :value="state" @change="changeHandle" />
</template>
<script setup lang="ts">
import { ref } from "vue";
import MyInput from "./s-model.vue";
// 默认值
const state = ref("稀土掘金");
const changeHandle = (value: any) => {
  state.value = value;
};
</script>
