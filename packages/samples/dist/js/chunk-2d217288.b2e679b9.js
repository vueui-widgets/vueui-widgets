(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d217288"],{c610:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"page-title"},[t._v("Scroll 无限滚动")]),i("p",[t._v("常用于滚动至底部时，触发加载更多数据。")]),i("div",{staticClass:"page-sub-title"},[t._v("当滚动至底部时，触发加载更多。需返回 Promise。")]),i("Scroll",{staticStyle:{"max-width":"400px"},attrs:{"on-reach-bottom":t.handleReachBottom}},t._l(t.list1,(function(e,s){return i("Card",{key:s,staticStyle:{margin:"32px 0"},attrs:{"dis-hover":""}},[t._v("Content "+t._s(e))])})),1),i("div",{staticClass:"page-sub-title"},[t._v("当滚动至顶部时，触发加载更多。需返回 Promise。")]),i("Scroll",{staticStyle:{"max-width":"400px"},attrs:{"on-reach-top":t.handleReachTop}},t._l(t.list2,(function(e,s){return i("Card",{key:s,staticStyle:{margin:"32px 0"},attrs:{"dis-hover":""}},[t._v("Content "+t._s(e))])})),1),i("div",{staticClass:"page-sub-title"},[t._v("当滚动至底部或顶部时，触发加载更多。需返回 Promise。")]),i("Scroll",{staticStyle:{"max-width":"400px"},attrs:{"on-reach-edge":t.handleReachEdge}},t._l(t.list3,(function(e,s){return i("Card",{key:s,staticStyle:{margin:"32px 0"},attrs:{"dis-hover":""}},[t._v("Content "+t._s(e))])})),1)],1)},n=[],a=(i("ef1f"),{data:function(){return{list1:[1,2,3,4,5,6,7,8,9,10],list2:[1,2,3,4,5,6,7,8,9,10],list3:[1,2,3,4,5,6,7,8,9,10]}},methods:{handleReachBottom:function(){var t=this;return new Promise((function(e){setTimeout((function(){for(var i=t.list1[t.list1.length-1],s=1;s<11;s++)t.list1.push(i+s);e()}),2e3)}))},handleReachTop:function(){var t=this;return new Promise((function(e){setTimeout((function(){for(var i=t.list2[0],s=1;s<11;s++)t.list2.unshift(i-s);e()}),2e3)}))},handleReachEdge:function(t){var e=this;return new Promise((function(i){setTimeout((function(){if(t>0)for(var s=e.list3[0],n=1;n<11;n++)e.list3.unshift(s-n);else for(var a=e.list3[e.list3.length-1],r=1;r<11;r++)e.list3.push(a+r);i()}),2e3)}))}}}),r=a,l=i("2be6"),o=Object(l["a"])(r,s,n,!1,null,null,null);e["default"]=o.exports}}]);