(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d20e822"],{b053:function(e,t,l){"use strict";l.r(t);var c=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"page-checkbox"},[l("div",{staticClass:"page-title"},[e._v("Checkbox 组件")]),l("div",{staticClass:"page-sub-title"},[e._v("单独使用 使用 v-model 可以双向绑定数据。")]),l("Checkbox",{attrs:{size:"large"},model:{value:e.single,callback:function(t){e.single=t},expression:"single"}},[e._v("Checkbox")]),l("p",[e._v(e._s(e.single))]),l("div",{staticClass:"page-sub-title"},[e._v("true-value 和 false-value的使用")]),l("Checkbox",{attrs:{"true-value":"真的","false-value":"假的"},model:{value:e.checkedValue,callback:function(t){e.checkedValue=t},expression:"checkedValue"}},[e._v(e._s(e.checkedValue))]),l("div",{staticClass:"page-sub-title"},[e._v(" 使用CheckboxGroup配合数组来生成组合。 在组合使用时，Checkbox 使用 label 来自动判断选中状态。 每个 Checkbox 的内容可以自定义，如不填写则默认使用 label 的值。。 ")]),l("CheckboxGroup",{model:{value:e.fruit,callback:function(t){e.fruit=t},expression:"fruit"}},[l("Checkbox",{attrs:{label:"香蕉"}}),l("Checkbox",{attrs:{disabled:"",label:"苹果"}}),l("Checkbox",{attrs:{label:"西瓜"}}),l("Checkbox",{attrs:{label:"西红柿"}})],1),l("p",[e._v(e._s(e.fruit))]),l("div",{staticClass:"page-sub-title"},[e._v("与其它组件进行数据联动。")]),l("Checkbox",{attrs:{disabled:e.disabled},model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}},[e.checked?l("span",[e._v("Checked")]):l("span",[e._v("Unchecked")]),e._v(" - "),e.disabled?l("span",[e._v("Disabled")]):l("span",[e._v("Usable")])]),l("br"),l("Button",{attrs:{type:"primary"},on:{click:function(t){e.checked=!e.checked}}},[e.checked?l("span",[e._v("Unchecked")]):l("span",[e._v("Checked")])]),l("Button",{attrs:{type:"primary"},on:{click:function(t){e.disabled=!e.disabled}}},[e.disabled?l("span",[e._v("Usable")]):l("span",[e._v("Disabled")])]),l("div",{staticClass:"page-sub-title"},[e._v("全选")]),l("p",[e._v("在实现全选效果时，你可能会用到 indeterminate 属性。示例代码只是一种写法，业务中可以用更多的方法，比如计算属性。")]),l("div",{staticStyle:{"border-bottom":"1px solid #e9e9e9","padding-bottom":"6px","margin-bottom":"6px"}},[l("Checkbox",{attrs:{indeterminate:e.indeterminate,value:e.checkAll},nativeOn:{click:function(t){return t.preventDefault(),e.handleCheckAll(t)}}},[e._v("全选")])],1),l("CheckboxGroup",{on:{"on-change":e.checkAllGroupChange},model:{value:e.checkAllGroup,callback:function(t){e.checkAllGroup=t},expression:"checkAllGroup"}},[l("Checkbox",{attrs:{label:"香蕉"}}),l("Checkbox",{attrs:{label:"苹果"}}),l("Checkbox",{attrs:{label:"西瓜"}})],1),l("p",{staticStyle:{"margin-top":"200px"}})],1)},a=[],i={data:function(){return{single:!1,fruit:["苹果"],checkedValue:"真的",checked:!0,disabled:!1,indeterminate:!0,checkAll:!1,checkAllGroup:["香蕉","西瓜"]}},methods:{handleCheckAll:function(){this.indeterminate?this.checkAll=!1:this.checkAll=!this.checkAll,this.indeterminate=!1,this.checkAll?this.checkAllGroup=["香蕉","苹果","西瓜"]:this.checkAllGroup=[]},checkAllGroupChange:function(e){3===e.length?(this.indeterminate=!1,this.checkAll=!0):e.length>0?(this.indeterminate=!0,this.checkAll=!1):(this.indeterminate=!1,this.checkAll=!1)}}},s=i,n=l("2be6"),h=Object(n["a"])(s,c,a,!1,null,null,null);t["default"]=h.exports}}]);