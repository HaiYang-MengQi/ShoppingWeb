<script setup>
import {onMounted, ref,nextTick} from 'vue';  // 引入 onMounted 和 ref
import * as echarts from 'echarts/core';
import {BarChart,LineChart, PieChart} from 'echarts/charts';
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  LegendComponent  // 导入 LegendComponent
} from 'echarts/components';
import {LabelLayout, UniversalTransition} from 'echarts/features';
import {CanvasRenderer} from 'echarts/renderers';

// 注册 ECharts 必要组件，包括 LegendComponent
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  LegendComponent,  // 注册 LegendComponent
  BarChart,
  LineChart,
  PieChart,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer
]);

// 声明 chartRef 作为响应式引用
const stripedChart = ref(null);
const stripedChartCreated = () => {
  const striped = echarts.init(stripedChart.value);

  // 初始数据
  let data = [];
  for (let i = 0; i < 6; ++i) {
    data.push(Math.round(Math.random() * 200));
  }

  // 图表的配置项
  const option = {
    xAxis: {
      max: 'dataMax'
    },
    yAxis: {
      type: 'category',
      data: ['食品', '医药', '服装', '美妆', '玩乐','家居'],
      inverse: true,
      animationDuration: 300,
      animationDurationUpdate: 300,

    },
    series: [
      {
        realtimeSort: true,
        name: '近一年购物频率排名',
        type: 'bar',
        data: data,
        label: {
          show: true,
          position: 'right',
          valueAnimation: true
        }
      }
    ],
    legend: {
      show: true
    },
    animationDuration: 3000,
    animationDurationUpdate: 3000,
    animationEasing: 'linear',
    animationEasingUpdate: 'linear'
  };

  // 更新图表数据的函数
  function update() {
    const data = option.series[0].data;
    for (let i = 0; i < data.length; ++i) {
      if (Math.random() > 0.9) {
        data[i] += Math.round(Math.random() * 2000);
      } else {
        data[i] += Math.round(Math.random() * 200);
      }
    }
    // 使用 myChart 实例来更新图表配置
    striped.setOption(option);
  }

  // 设置定时器来每3秒更新一次图表数据
  setInterval(() => {
    update();
  }, 3000);

  striped.setOption(option);
};
const polyLineChart = ref(null)
const polyLineChartCreated = () => {
  const polyLine = echarts.init(polyLineChart.value);
  const option = {
    title: {
      text: '近6个月购物次数趋势',
      left: 'center'
    },
    xAxis: {
      data: ['1月', '2月', '3月', '4月', '5月', '6月']
    },
    yAxis: {},
    series: [
      {
        data: [10, 22, 28, 23, 19,99],
        type: 'line',
        label: {
          show: true,
          position: 'bottom',
          textStyle: {
            fontSize: 20
          }
        }
      }
    ]
  };
  polyLine.setOption(option);
}

const pieChart = ref(null)
const pieChartCreated = () => {
  const pie = echarts.init(pieChart.value);
  const option = {
    title: {
      text: '近6个月购物消费分布',
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      top: '5%',
      left: 'center'
    },
    series: [
      {
        type: 'pie',
        data: [
          {
            value: 100,
            name: '食品'
          },
          {
            value: 200,
            name: '医药'
          },
          {
            value: 300,
            name: '娱乐'
          },
          {
            value: 400,
            name: '水果'
          },
          {
            value: 500,
            name: '生活用品'
          }
        ],
        roseType: 'area'
      }
    ]
  };
  pie.setOption(option);
}
// onMounted(() => {
//   stripedChartCreated();
//   polyLineChartCreated();
//   pieChartCreated();
// })
onMounted(() => {
  nextTick(() => {
    stripedChartCreated();
    polyLineChartCreated();
    pieChartCreated();
  });
});
</script>

<template>
  <div ref="stripedChart"/>
  <hr/>
  <div ref="polyLineChart"/>
  <hr/>
  <div ref="pieChart"/>
</template>

<style scoped>
div {
  width: 100%;
  height: 400px;
}
</style>
