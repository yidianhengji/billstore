(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/basics/usersAdd/usersAdd"],{"18c3":function(e,n,t){"use strict";var u=t("da01"),r=t.n(u);r.a},"4c1a":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u={data:function(){var e=this;return{uid:"",errorType:["toast"],model:{name:"",phone:"",idcard:""},rules:{name:[{required:!0,message:"请输入姓名",trigger:"blur"}],phone:[{required:!0,message:"请输入手机号",trigger:["change","blur"]},{validator:function(n,t,u){return e.$u.test.mobile(t)},message:"手机号码不正确",trigger:["change","blur"]}],idcard:[{required:!0,message:"请输入身份证号码",trigger:["change","blur"]},{validator:function(n,t,u){return e.$u.test.idCard(t)},message:"身份证号码不正确",trigger:["change","blur"]}]}}},onLoad:function(e){this.uid=e.id},onReady:function(){this.$refs.uForm.setRules(this.rules)},methods:{submit:function(){var e=this;this.$refs.uForm.validate((function(n){n?(console.log(e.model),console.log("验证通过")):console.log("验证失败")}))}}};n.default=u},cbb3:function(e,n,t){"use strict";(function(e){t("bdfa");u(t("66fd"));var n=u(t("e7e0"));function u(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])},da01:function(e,n,t){},e2ab:function(e,n,t){"use strict";t.r(n);var u=t("4c1a"),r=t.n(u);for(var o in u)"default"!==o&&function(e){t.d(n,e,(function(){return u[e]}))}(o);n["default"]=r.a},e7e0:function(e,n,t){"use strict";t.r(n);var u=t("ed23"),r=t("e2ab");for(var o in r)"default"!==o&&function(e){t.d(n,e,(function(){return r[e]}))}(o);t("18c3");var i,a=t("f0c5"),c=Object(a["a"])(r["default"],u["b"],u["c"],!1,null,"7526d9ff",null,!1,u["a"],i);n["default"]=c.exports},ed23:function(e,n,t){"use strict";t.d(n,"b",(function(){return r})),t.d(n,"c",(function(){return o})),t.d(n,"a",(function(){return u}));var u={uForm:function(){return t.e("uview-ui/components/u-form/u-form").then(t.bind(null,"ab69"))},uFormItem:function(){return Promise.all([t.e("common/vendor"),t.e("uview-ui/components/u-form-item/u-form-item")]).then(t.bind(null,"0a83"))},uInput:function(){return Promise.all([t.e("common/vendor"),t.e("uview-ui/components/u-input/u-input")]).then(t.bind(null,"73f4"))},uButton:function(){return t.e("uview-ui/components/u-button/u-button").then(t.bind(null,"89a1"))}},r=function(){var e=this,n=e.$createElement;e._self._c},o=[]}},[["cbb3","common/runtime","common/vendor"]]]);