<template>
  <input :value="state" type="text" @change="changeHandle" />
</template>
<script lang="ts" setup>
import { ref, watch } from "vue";
const props = defineProps({
  value: {
    type: String,
    default: "",
  },
});
const emit = defineEmits(["change"]);
// 声明子组件本地的数据变量
const state = ref("");
watch(
  () => props.value,
  (newVal) => {
    console.log(newVal);

    state.value = newVal;
  },
  { immediate: true }
);
const changeHandle = (e: any) => {
  state.value = e.target.value;
  // 发射父组件的 change 监听事件
  emit("change", state.value);
};
</script>
