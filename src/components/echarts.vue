<template>
    <div id="main" style="width: 20vw; height: 20vh;border: 1px solid #ccc;"></div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts';
import { onMounted } from 'vue';

const initChart = () => {
    // 初始化 echarts 实例
    let myChart = echarts.init(document.getElementById('main'));

    // 设置 echarts 选项并绘制图表
    myChart.setOption({
        grid: {
            left: 'center',
            top: '20%',
            width: '60%', // You can adjust the width if needed
            height: '60%', // You can adjust the height if needed
            containLabel: true
        },
        title: {
            text: 'ECharts 入门示例'
        },
        tooltip: {},
        xAxis: {
            data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [
            {
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }
        ]
    });
};

// 在组件挂载后调用初始化方法
onMounted(() => {
    initChart();
    let myChart = echarts.init(document.getElementById('main'));
    window.addEventListener(
        'resize',
        () => {

            myChart.resize()
        },
        false
    )
});
</script>

<style scoped lang="scss"></style>
