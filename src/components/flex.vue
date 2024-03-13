<template>
    <div>
        <div class="fcb">
            <div style="width: 100px; height: 100px;background-color: skyblue;" v-for="item in 2" :key="item"></div>
            <div style="width: 100px; height: 100px;"></div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.fcb {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
}
</style>