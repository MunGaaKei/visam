(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a722f79c"],{"4b98":function(e,n,t){"use strict";t.r(n);var o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"vsm-content"},[t("h2",[e._v("单选框")]),t("h3",{staticClass:"section-title"},[e._v("基本用法")]),t("p",[e._v("值："+e._s(e.value))]),t("br"),t("div",{staticClass:"vsm-cols"},[t("vsm-radio",{attrs:{options:e.options,inline:e.otherProps.includes("inline"),"option-inline":e.otherProps.includes("option-inline"),label:"单选框："},model:{value:e.value,callback:function(n){e.value=n},expression:"value"}}),t("vsm-checkbox",{attrs:{type:"slide",options:e.otherOptions},model:{value:e.otherProps,callback:function(n){e.otherProps=n},expression:"otherProps"}})],1),t("Codes",{attrs:{codes:e.codes0}}),t("h3",{staticClass:"section-title"},[e._v("参数说明")]),t("vsm-table",{attrs:{data:e.params,header:e.paramsHeader,stickyHeader:""}})],1)},a=[],l=(t("dca8"),t("99af"),t("caad"),t("2532"),{name:"Radio",data:function(){return{value:"Bar",options:[{label:"默认",value:"Bar"},"Foo","Baz","Qux",{label:"禁用",value:"disabled",disabled:!0}],otherOptions:[{label:"标签同行",value:"inline"},{label:"选项同行",value:"option-inline"}],otherProps:[],params:Object.freeze([{prop:"value | v-model",type:"Number | String | Array | Boolean",options:"",default:"",desc:"当为多选框组时，须绑定数组。"},{prop:"options",type:"Array",options:"",default:"[]",desc:"选项数组，可包括label，value，disabled属性"},{prop:"inline",type:"Boolean",options:"",default:"false",desc:"标签与选项同行"},{prop:"option-inline",type:"Boolean",options:"",default:"false",desc:"选项以行内形式排列"},{prop:"name",type:"String",options:"",default:"",desc:"原生属性"},{prop:"@change",type:"Function",options:"",default:"",desc:"选项变化时触发，参数（value, $event）",event:!0}])}},computed:{codes0:function(){return'<vsm-radio\n    label="单选框："\n    v-model="value"\n    :options="options"    '.concat(this.otherProps.includes("inline")?"\r\n    inline":"","    ").concat(this.otherProps.includes("option-inline")?"\r\n    option-inline":"","\n    ></vsm-radio>\n\n<script>\nexport default {\n  data () {\n    return {\n        value: 'Bar',\n        options: [{\n            label: '默认', value: 'Bar'\n        }, 'Foo', 'Baz', 'Qux', {\n            label: '禁用', value: 'disabled', disabled: true\n        }],\n    }\n  }\n}\n<\/script>")}}}),s=l,i=t("2877"),r=Object(i["a"])(s,o,a,!1,null,null,null);n["default"]=r.exports},dca8:function(e,n,t){var o=t("23e7"),a=t("bb2f"),l=t("d039"),s=t("861d"),i=t("f183").onFreeze,r=Object.freeze,p=l((function(){r(1)}));o({target:"Object",stat:!0,forced:p,sham:!a},{freeze:function(e){return r&&s(e)?r(i(e)):e}})}}]);
//# sourceMappingURL=chunk-a722f79c.js.map