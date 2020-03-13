(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-22519889"],{"1b89":function(t,i,n){},acac:function(t,i,n){"use strict";var s=n("1b89"),a=n.n(s);a.a},f6fd:function(t,i,n){"use strict";n.r(i);var s=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",[n("div",{staticClass:"page-title"},[t._v("LoadingBar 加载进度条")]),n("p",[t._v("全局创建一个显示页面加载、异步请求、文件上传等的加载进度条。")]),n("br"),n("p",[t._v(" LoadingBar 只会在全局创建一个，因此在任何位置调用的方法都会控制这同一个组件。 主要使用场景是路由切换和Ajax，因为这两者都不能拿到精确的进度，LoadingBar 会模拟进度， 当然也可以通过update()方法来传入一个精确的进度，比如在文件上传时会很有用，具体见API。 ")]),n("div",{staticClass:"page-sub-title"},[t._v("基本用法")]),n("p",[t._v("点击 Start 开始进度，点击 Finish 结束。在调用start()方法后，组件会自动模拟进度，当调用finish()或error()时，补全进度并自动消失。")]),n("br"),n("Button",{on:{click:t.start}},[t._v("开始")]),n("Button",{staticStyle:{"margin-left":"4px"},on:{click:t.finish}},[t._v("完成")]),n("Button",{staticStyle:{"margin-left":"4px"},on:{click:t.error}},[t._v("错误")]),n("Button",{staticStyle:{"margin-left":"4px"},on:{click:t.destroy}},[t._v("注销")]),n("div",{staticClass:"page-sub-title"},[t._v("通过直接调用以下方法来使用组件：")]),t._m(0),n("div",{staticClass:"page-sub-title"},[t._v("另外提供了全局配置和全局销毁的方法：")]),t._m(1),n("br"),n("br"),n("p",[t._v("如果要在路由中使用，请用Vue.LoadingBar 代替 this.$Loading，API完全一致")])],1)},a=[function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("ul",{staticClass:"list"},[n("li",[t._v("this.$Loading.start()")]),n("li",[t._v("this.$Loading.finish()")]),n("li",[t._v("this.$Loading.error()")]),n("li",[t._v("this.$Loading.update(percent)")])])},function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("ul",{staticClass:"list"},[n("li",[t._v("this.$Loading.config(options)")]),n("li",[t._v("this.$Loading.destroy()")])])}],e={methods:{start:function(){this.$Loading.start()},finish:function(){this.$Loading.finish()},error:function(){this.$Loading.error()},destroy:function(){this.$Loading.destroy()}}},r=e,o=(n("acac"),n("2be6")),c=Object(o["a"])(r,s,a,!1,null,"230c07d7",null);i["default"]=c.exports}}]);