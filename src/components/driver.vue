<template>
  <div style="position: relative; width: 100vw; height: 100vh; font-size: 30px">
    <button style="position: absolute; top: 0; left: 50%" @click="handleStart">
      action
    </button>
    <div
      class="one"
      style="position: absolute; top: 50%; left: 10%; width: 60px"
    >
      老白
    </div>
    <div
      class="two"
      style="position: absolute; top: 50%; right: 10%; width: 60px"
    >
      拉罗
    </div>
  </div>
</template>

<script setup lang="ts">
import { driver } from "driver.js";
import "driver.js/dist/driver.css";

const handleStart = () => {
  driver({
    showProgress: true,
    steps: steps,
  }).drive();
};

const steps = [
  {
    element: ".one",
    popover: {
      title: "say my name（压迫.jpg",
    },
  },
  {
    element: `.two`,
    popover: {
      title: "Heisenberg（屈服.jpg",
    },
  },
  {
    element: `.one`,
    popover: {
      title: "You're god damn right（骄傲.jpg",
    },
  },
];
</script>
