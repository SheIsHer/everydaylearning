<template>
  <div class="hello">
    <!-- 初始化echarts需要有宽高的盒子 -->
    <div ref="mapbox" style="height: 1200px; width: 1200px; margin:0 auto"></div>
  </div>
</template>

<script>
import echarts from 'echarts'
import 'echarts/map/js/china.js'
import jsonp from 'jsonp'
// 使用地图，需要先注册地图
const option = {
  series: [{
    name: '确诊人数',
    roam: true,
    data:[], //用来展示后台给的数据
    type:'map', //告诉echarts要去渲染一个地图
    map: 'china',
    label: {
      show: true,
      color: 'black',
      fontSize: 15
    },
    itemStyle: {
      // 地图版块的颜色和边框
      areaColor: 'pink',
      borderColor: 'blue'
    },
    zoom: 1.2,
    emphasis:{
      // 控制鼠标滑过之后的背景色
      label: {
        color: '$fff',
        fontSize: 12
      },
      itemStyle:{
        areaColor: '#83b5e7'
      }
    }
  }],
  visualMap: [{
    type: 'piecewise',
    show: true,
    pieces: [
      {min:10000},{min: 1000, max: 9999},{min: 100, max: 999},{min: 10, max: 99},{min: 0, max: 9}
    ],
    inRange: {
      symbol: 'rect',
      color: ['#ffcb01', '#9c0505']
    },
    itemWidth: 20,
    itemHeight: 10,
  }],
  tooltip: {
    trigger: 'item'
  },
  toolbox: {
    show: true,
    orient: 'vertical',
    left: 'right',
    top: 'center',
    feature: {
      dataView: {readOnly: false},
      restore: {},
      saveAsImage: {}
    }
  }
}

export default {
  name: 'HelloWorld',
  mounted() {
    this.getData() // ajax为什么不在created里执行
    this.mychart = echarts.init(this.$refs.mapbox);
    this.mychart.setOption(option);
  },
  methods: {
    getData() {
      jsonp('https://interface.sina.cn/news/wap/fymap2020_data.d.json?_=1580892522427', {}, (err, data) => {
        if(!err) {
          console.log(data);
          let list = data.data.list.map(item => ({name: item.name, value: item.value}))
          option.series[0].data = list;
          this.mychart.setOption(option) // 只有DOM渲染完才能执行这行代码
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
