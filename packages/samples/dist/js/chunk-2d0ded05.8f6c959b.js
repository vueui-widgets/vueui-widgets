(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ded05"],{"86f7":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{"padding-bottom":"200px"}},[n("div",{staticClass:"page-title"},[e._v("Tree 树形控件")]),n("p",[e._v(" 文件夹、组织架构、生物分类、国家地区等等，世间万物的大多数结构都是树形结构。 使用树控件可以完整展现其中的层级关系，并具有展开收起选择等交互功能。 ")]),n("div",{staticClass:"page-sub-title"},[e._v("基础用法")]),n("p",[e._v("最简单的用法，展示可选中，默认展开功能。")]),n("br"),n("Tree",{attrs:{data:e.data1}}),n("div",{staticClass:"page-sub-title"},[e._v("可勾选")]),n("p",[e._v("设置属性 show-checkbox 可以对节点进行勾选。")]),n("b"),n("Tree",{attrs:{data:e.data2,"check-directly":"","show-checkbox":""}}),n("div",{staticClass:"page-sub-title"},[e._v("异步加载子节点")]),e._m(0),n("br"),n("Tree",{attrs:{data:e.data3,"load-data":e.loadData,"show-checkbox":""}}),n("div",{staticClass:"page-sub-title"},[e._v("默认展开、选中、勾选和禁用")]),e._m(1),n("br"),n("Tree",{attrs:{data:e.data4,"show-checkbox":"",multiple:""}}),n("div",{staticClass:"page-sub-title"},[e._v("自定义节点内容")]),e._m(2),e._m(3),e._m(4),n("br"),e._m(5),e._m(6),n("Tree",{attrs:{data:e.data5,render:e.renderContent}})],1)},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v(" 使用 load-data 属性可以异步加载子节点，需要给数据增加 loading 来标识当前是否在加载中。 "),n("br"),e._v("load-data 第一个参数为当前节点信息；执行 load-data 的第二个参数，将需要添加的数据传入。 "),n("br"),e._v("如果某节点不包含 loading 和 children 字段，则不会应用异步加载效果。 ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v(" 给节点设置 expand、selected、checked 和 disabled 可以将节点设置为展开、选中、勾选和禁用。 "),n("br"),e._v("设置属性 multiple 可进行多选。")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v(" 使用强大的 Render 函数可以自定义节点显示内容和交互，比如添加图标，按钮等。 "),n("br"),e._v("Render 函数的第二个参数，包含两个字段： ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticStyle:{"padding-left":"3em","line-height":"2"}},[n("li",[n("strong",[e._v("为了减少不必要的的更新和状态维护，以提供更好的性能，这里与iview不同，不需要node参数")])]),n("li",[n("strong",[e._v("如果你不需要使用node和root参数，则与iview用法完全一致")])]),n("li",[e._v("root {Array}：根节点树形数据打平后的一维数组（"),n("strong",[e._v("此处与iview不同")]),e._v("）")]),n("li",[e._v("data {Object}：当前节点的数据")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v(" 通过合理地使用 root 和 data 可以实现各种效果， "),n("br"),e._v("每个节点都设置了一个 nodeKey 字段，用来标识节点的 id。 "),n("br"),e._v("Render 函数分两种，一种是给当前树的每个节点都设置同样的渲染内容，此 render 通过 Tree 组件的属性 render 传递； 另一种是单独给某个节点设置，在该节点的 render 字段内设置；同时设置时，会优先使用当前节点的 Render 函数。 ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[n("b",[e._v("删除节点代码如下：")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",[e._v("    "),n("code",[e._v("\n      remove(root, data) {\n        const parent = root.find(_ => _.children && _.children.includes(data))\n        parent.children.splice(parent.children.indexOf(data), 1)\n      }\n    ")]),e._v("\n  ")])}],l=(n("841a"),n("8d0d"),n("beb4"),n("11ed"),n("c78b"),{data:function(){var e=this;return{data1:[{title:"parent 1",expand:!0,children:[{title:"parent 1-1",expand:!0,children:[{title:"leaf 1-1-1"},{title:"leaf 1-1-2"}]},{title:"parent 1-2",expand:!0,children:[{title:"leaf 1-2-1"},{title:"leaf 1-2-1"}]}]}],data2:[{title:"parent 1",expand:!0,children:[{title:"parent 1-1",expand:!0,children:[{title:"leaf 1-1-1"},{title:"leaf 1-1-2"}]},{title:"parent 1-2",expand:!0,children:[{title:"leaf 1-2-1"},{title:"leaf 1-2-1"}]}]}],data3:[{title:"parent",loading:!1,children:[]}],data4:[{title:"parent 1",expand:!0,selected:!0,children:[{title:"parent 1-1",expand:!0,children:[{title:"leaf 1-1-1",disabled:!0},{title:"leaf 1-1-2"}]},{title:"parent 1-2",expand:!0,children:[{title:"leaf 1-2-1",checked:!0},{title:"leaf 1-2-1"}]}]}],data5:[{title:"parent 1",expand:!0,render:function(t,n){n.root,n.node;var a=n.data;return t("span",{style:{display:"inline-block",width:"100%"}},[t("span",[t("Icon",{props:{type:"ios-folder-outline"},style:{marginRight:"8px"}}),t("span",a.title)]),t("span",{style:{display:"inline-block",float:"right",marginRight:"32px"}},[t("Button",{props:Object.assign({},e.buttonProps,{icon:"ios-plus-empty",type:"primary"}),style:{width:"72px"},on:{click:function(){e.append(a)}}})])])},children:[{title:"child 1-1",expand:!0,children:[{title:"leaf 1-1-1",expand:!0},{title:"leaf 1-1-2",expand:!0}]},{title:"child 1-2",expand:!0,children:[{title:"leaf 1-2-1",expand:!0},{title:"leaf 1-2-1",expand:!0}]}]}],buttonProps:{size:"small"}}},methods:{loadData:function(e,t){setTimeout((function(){var e=[{title:"children",loading:!1,children:[]},{title:"children",loading:!1,children:[]}];t(e)}),1e3)},renderContent:function(e,t){var n=this,a=t.root,i=t.data;return e("span",{style:{display:"inline-block",width:"100%"}},[e("span",[e("Icon",{props:{type:"ios-paper-outline"},style:{marginRight:"8px"}}),e("span",i.title)]),e("span",{style:{display:"inline-block",float:"right",marginRight:"32px"}},[e("Button",{props:Object.assign({},this.buttonProps,{icon:"ios-plus-empty"}),style:{marginRight:"8px"},on:{click:function(){n.append(i)}}}),e("Button",{props:Object.assign({},this.buttonProps,{icon:"ios-minus-empty"}),on:{click:function(){n.remove(a,i)}}})])])},append:function(e){var t=e.children||[];t.push({title:"appended node",expand:!0}),this.$set(e,"children",t)},remove:function(e,t){var n=e.find((function(e){return e.children&&e!==t&&e.children.includes(t)}));n.children.splice(n.children.indexOf(t),1)}}}),r=l,d=n("2be6"),c=Object(d["a"])(r,a,i,!1,null,null,null);t["default"]=c.exports}}]);