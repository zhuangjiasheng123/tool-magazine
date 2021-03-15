##### vue常用指令

```js
v-if，v-show，v-for，v-bind，v-on，v-model，v-html，
v-once（只渲染一次，后面元素中的数据再更新变化，都不会重新渲染）
```

##### 自定义指令

```
1 对普通DOM元素进行底层操作，这时候就会用到自定义指令
2 自定义指令里的钩子函数
 bind：只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置
 inserted：被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中
 update：所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前。指令的值可能发生了改变，也可能没有。但是你可以通过比较更新前后的值来忽略不必要的模板更新。
3 常用钩子函数的参数
 el：指令所绑定的元素，可以用来直接操作DOM 。
 binding：一个对象，包含以下属性：
   name：指令名，不包括 v- 前缀。　　
   value：指令的绑定值，例如：v-my-directive="1 + 1" 中，绑定值为 2。
```

#####  几种自定义指令的使用

 自定义一个 v-focus 指令，即在 <input> 或 <textarea> 标签初始化时获得焦点

```js
Vue.directive('focus', {
    inserted: function (el) {
        el.focus();//聚焦
    }
});
<input type="text" v-focus>
```

自定义一个权限指令，对需要权限判断的 Dom 进行显示隐藏

```js
function checkArray(key) {
  let arr = ['1', '2', '3', '4']
  let index = arr.indexOf(key)
  if (index > -1) {
    return true // 有权限
  } else {
    return false // 无权限
  }
}
 
const permission = {
  inserted: function (el, binding) {
    let permission = binding.value // 获取到 v-permission的值
    if (permission) {
      let hasPermission = checkArray(permission)
      if (!hasPermission) {
        // 没有权限 移除Dom元素
        el.parentNode && el.parentNode.removeChild(el)
      }
    }
  },
}
 
export default permission

//给 v-permission 赋值判断即可

<div class="btns">
  <!-- 显示 -->
  <button v-permission="'1'">权限按钮1</button>
  <!-- 不显示 -->
  <button v-permission="'10'">权限按钮2</button>
</div>
```

自定义一个防抖函数的指令

```js
const debounce = {
  inserted: function (el, binding) {
    let timer
    el.addEventListener('click', () => {
      if (timer) {
        clearTimeout(timer)
      }
      timer = setTimeout(() => {
        binding.value()
      }, 1000)
    })
  },
}

export default debounce

<button v-debounce="debounceClick">防抖</button>

```



##### vue生命周期

```
 1 vue是通过构建数据驱动的web界面的渐进式框架
 2 vue生命周期就是指vue实例从创建到销毁的过程
 beforeCreate：实例已经初始化，只是数据观察与事件机制尚未形成，不能获取DOM节点
 created：实例已经创建，仍然不能获取DOM节点（有data，没有el）
 beforeMount：是个过渡阶段，获取不到具体的DOM节点，但是vue挂载的根节点已经创建（有data，有el）
 mounted：数据和DOM都已经被渲染出来了
 beforeUpdate和updated：data中的数据发生了改变，会触发对应组件的重新渲染，先后调用beforeUpdate和updated
 beforeDestroy和destroyed：vue实例即将销毁和销毁时的调用
```

##### vue父子组件的生命周期

```
加载渲染过程
父beforeCreate->父created->父beforeMount->子beforeCreate->子created->子beforeMount->子mounted->父mounted
子组件更新过程
父beforeUpdate->子beforeUpdate->子updated->父updated
父组件更新过程
父beforeUpdate->父updated
销毁过程
父beforeDestroy->子beforeDestroy->子destroyed->父destroyed
```

##### vue组件传值

主要分为两类：1.父子组件间的传值   2.非父子组件间的传值

```
1 父组件使用v-bind进行数据的绑定，子组件中通过定义props接收对应的数据
2 使用$children和$parents获取子组件和父组件对象
3 使用$ref获取指定的子组件
4 eventbus事件总线
5 vuex
6 路由传值
```

##### 路由传参的区别

```
query刷新不会丢失query里面的数据，params刷新 会 丢失 params里面的数据
query在浏览器地址栏中显示参数，params不显示
```

##### vue中computed和watch的区别

```
1 当需要在数据变化时执行异步或开销较大的操作时，watch是最有用的。这是和computed最大的区别
2 computed支持缓存，只有依赖数据发生改变，才会重新进行计算.但是不支持异步
3 计算属性一般是多个数据对一个数据的场景
4 watch一般是一个数据对多个数据的场景
```

##### vue2和vue3的区别

Vue.js是一个提供MVVM数据双向绑定的库，专注于UI层面，核心思想是：数据驱动、组件系统

```
双向绑定使用了 proxy 替代 Object.defineProperty，提升内存性能
新增 hook api
Composition API（组合API）
更好的ts支持，vue 3 直接用 ts 重写。
部分命令发生了变化
```

##### vue实现数据双向绑定的原理

```json
是通过数据劫持+订阅发布者模式实现的
数据劫持：指的是在修改或者访问某个对象的属性时，通过代码拦截劫持，然后进行修改返回这个最后的结果
订阅发布者模式：对象数据之间存在着一对多的相互依赖对应关系，当一个数据发生改变时，所有的依赖对象都会收到通知。
vue2.x使用Object.defineProperty();（有缺陷，无法检测到对象属性的新增或删除，不能监听数组的变化）
vue3.x使用es6的Proxy;
```

##### vue路由懒加载

```js
//异步组件reauire()方法
{ component: resolve=require(['@/components/home'],resolve) }
//es6import方法
{component: () => import("@/components/HelloWorld")}
//webpack提供的require.ensure()
```

##### 计算属性的setter和getter

```js
//当页面获取某个数据的时候，先会在data里面找，找不到就会去计算属性里面找，在计算属性里面，获取的时候会自动去执行get方法
//父组件传递属性，子组件中不能直接修改，所以使用computed的setter触发父组件事件
computed: {
    isShowData: {
      get() {
        return this.isShow;
      },
      // setter，触发父组件更新isShow
      set() {
        this.$emit("update:isShow", false);
      },
    },  
  },
```

##### 路由守卫

```
router.beforeEach 是页面加载之前，相反router.afterEach是页面加载之后
```

##### 双向绑定的几种方式

1 方式一

父组件

```
<BoxTabs v-model="currentTabs" :headerList="headerList"></BoxTabs>  
```

子组件

```
<div :class="{'active':index == currentTab}" >{{ item }}</div>
 
 props: {
    value: {
      type: Number,
      default: 0
    },
  },

watch: {
    value(val) {
      this.currentTab = val;
    },
    currentTab(val){
        this.$emit('input',val);
    }
  },
data() {
    return {
      currentTab: this.value,
    };
  },
```

方式二

父组件

```js
<view :msg.sync="msg"></view>
```

子组件

```js
<button @click="childBtn">儿子</button>

props: {
   msg: {
      type: String,
      default: ''
    },
  },

methods:{
    childBtn(){
    this.$emit('update:msg', Data)
              },
},
```

##### vue手动挂载dom节点

```js
//MyComponent 就是引入的vue文件
var component = new MyComponent().$mount()
document.getElementById(‘app‘).appendChild(component.$el)
```

##### vue本地代理跨域

```js
   devServer: {
       proxy: {
         '/video': {
           target: 'http://113.98.62.19:8088/',
           ws: false,
           changeOrigin: true
         }
      }
     },
```



##### vue引入百度地图

```js

<template>
  <div class="baidu_map" id="baidu_map"></div>
</template>

<script>
export default {
  name: "Bmap",
  props: {
    // point:{
    //   type:Array,
    //   default:[114.051549, 22.557686],
    // }
  },
  data() {
    return {
      bmap: undefined,
      point: [114.051549, 22.557686],
      level: 17,
      imgIcon: null
    };
  },
  methods: {
    // 初始化地图
    onReady() {
      let styleJson = require("./mapStyle/mapStyle.json");
      this.bmap = new BMap.Map("baidu_map");
      let point = new BMap.Point(this.point[0], this.point[1]);
      this.bmap.centerAndZoom(point, this.level);
      this.bmap.setMapStyleV2({ styleJson: styleJson });
      this.bmap.enableScrollWheelZoom();
      this.bmap.disableDoubleClickZoom();
      // 实时显示监听地图级别
      this.bmap.addEventListener("zoomend", e => {
        var ZoomNum = this.bmap.getZoom();
        this.$emit("zoomChange", ZoomNum);
      });
    },
    // 创建点位
    createMarker(img, imgSize, point) {
      var mapPoint = new BMap.Point(point[0], point[1]);
      var imgIcon = new BMap.Icon(img, new BMap.Size(imgSize[0], imgSize[1]));
      return new BMap.Marker(mapPoint, { icon: imgIcon });
      // this.bmap.addOverlay(marker);
    },
    // 添加标注点的点击事件并投放到地图
    addMarker(marker, clickfun, dblclickfun) {
      marker.addEventListener("click", clickfun);
      marker.addEventListener("rightclick", dblclickfun);
      // console.log(this.imgIcon);
      this.bmap.addOverlay(marker);
    },
    // 设置图标对象
    setIconSize(url, size, marker) {
      var imgIcon = new BMap.Icon(url, new BMap.Size(size[0], size[1]));
      var icon = { icon: imgIcon };
      marker.setIcon(icon);
      // console.log(this.imgIcon);
      // debugger
      //  var  size = new BMap.Size(imgSize[0], imgSize[1]);
      //  var offset = {offset: size}
      //  console.log(this.imgIcon.setSize);


      // return this.imgIcon.setSize(offset)
    },
    //添加点位文本标签
    addLabel(content, point, marker, style) {
      if (!style) style = {};
      var opts = {
        position: point,
        offset: new BMap.Size(-10, -10)
      };
      let label = new BMap.Label(content, opts);
      //把label设置到maker上
      marker.setLabel(label);
      label.setStyle(style);
      return label;
    },
    // 清除所有标注点位
    clearOverlays() {
      this.bmap.clearOverlays();
    },
    // 清除特定的点位
    removeOverlay(target) {
      this.bmap.removeOverlay(target);
    },
    // 设置中心点
    setCenter(point,level) {
      // debugger
      let zoomLevel = level||17;
      // if(level){
      //   zoomLevel  =level;
      // }
      let points = new BMap.Point(point[0], point[1]);
      this.bmap.centerAndZoom(points, zoomLevel);
    },
    // 设置缩放级别
     setZoom(level) {
      let points = new BMap.Point(this.point[0], this.point[1]);
      this.bmap.centerAndZoom(points, level);
    },
    // 实时显示层级
    getZoom() {
      return this.bmap.getZoom();
    },
    // 鼠标绘制
    inquireType() {
      var styleOptions = {
        strokeColor: "#3ea5f9", //边线颜色。
        fillColor: "", //填充颜色。当参数为空时，圆形将没有填充效果。
        strokeWeight: 2, //边线的宽度，以像素为单位。
        strokeOpacity: 0.5, //边线透明度，取值范围0 - 1。
        fillOpacity: 0.6, //填充的透明度，取值范围0 - 1。
        strokeStyle: "solid" //边线的样式，solid或dashed。
      };
      //实例化鼠标绘制工具
      var drawingManager = new BMapLib.DrawingManager(this.bmap, {
        isOpen: false, //是否开启绘制模式
        enableDrawingTool: false, //是否显示工具栏
        drawingToolOptions: {
          anchor: BMAP_ANCHOR_TOP_RIGHT, //位置
          offset: new BMap.Size(5, 5) //偏离值
        },
        circleOptions: styleOptions, //圆的样式
        polylineOptions: styleOptions, //线的样式
        polygonOptions: styleOptions, //多边形的样式
        rectangleOptions: styleOptions //矩形的样式
      });
      //添加鼠标绘制工具监听事件，用于获取绘制结果
      let overlaysKC = [];
      var overlaycomplete = function(e) {
        overlaysKC.push(e.overlay);
      };
      drawingManager.addEventListener("overlaycomplete", overlaycomplete);
      // drawingManager.close();
      return { obj: drawingManager, data: overlaysKC };
    },
    closeInquireType(target) {
      target.close();
    },
    // 热力图
    heatMap() {
      // "visible":true, "opacity":70
      var heatmapOverlay = new BMapLib.HeatmapOverlay({ radius: 100 });
      this.bmap.addOverlay(heatmapOverlay);
      return heatmapOverlay;
    },
    // 点聚合
    MarkerClusterer(markers) {
      // var myStyles = [
      //   {
      //     url: require("../../assets/newImage/执法对象.png"),
      //     size: new BMap.Size(50, 50),
      //     fontSize: "14px"
      //   }
      // ];
      var markerClusterer = new BMapLib.MarkerClusterer(this.bmap, {
        markers: markers
      });
      // markerClusterer.setStyles(myStyles);
      return markerClusterer;
    },
    // 根据地理位置调整视野
    setViewport(arr) {
      this.bmap.setViewport(arr);
    },
    // 画线
    createPolyline(arr, options) {
      let defaultOption = {
        strokeColor: "#21e1e8",
        strokeWeight: 3,
        strokeOpacity: 1
      };
      let option = Object.assign(defaultOption, options);
      let arrPoint = arr.map(res => new BMap.Point(res.mlng, res.mlat));
      let Polyline = new BMap.Polyline(arrPoint, defaultOption);
      this.bmap.addOverlay(Polyline);
      return Polyline;
    },
  },


  mounted() {
    this.onReady();
  }
};
</script>


<style lang="less" scoped>
.baidu_map {
  width: 100%;
  height: 100%;
}
</style>

```

