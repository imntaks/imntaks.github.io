webpackJsonp([1],{29:function(t,e,a){function o(t){a(34)}var r=a(27)(a(31),a(70),o,null,null);t.exports=r.exports},31:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a(69),r=a.n(o),s=a(40),n=a.n(s),i=a(68),l=a.n(i),u={apiKey:"AIzaSyCGeZPv6iGp-Bgh9gmv0BJ8PAsOPmO84u8",authDomain:"vuejs-firebase-33d24.firebaseapp.com",databaseURL:"https://vuejs-firebase-33d24.firebaseio.com",projectId:"vuejs-firebase-33d24",storageBucket:"vuejs-firebase-33d24.appspot.com",messagingSenderId:"758014411725"},v=n.a.initializeApp(u),c=v.database(),p=c.ref("books");e.default={name:"app",firebase:{books:p},data:function(){return{newBook:{title:"",author:"",url:""}}},methods:{addBook:function(){p.push(this.newBook),this.newBook.title="",this.newBook.author="",this.newBook.url=""},removeBook:function(t){p.child(t[".key"]).remove(),l.a.success("Book removed")}},components:{Hello:r.a}}},32:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"hello",data:function(){return{msg:"Welcome to Your Vue.js App"}}}},33:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a(30),r=a(29),s=a.n(r),n=a(28),i=a.n(n);o.a.use(i.a),o.a.config.productionTip=!1,new o.a({el:"#app",template:"<App/>",components:{App:s.a}})},34:function(t,e){},35:function(t,e){},69:function(t,e,a){function o(t){a(35)}var r=a(27)(a(32),a(71),o,"data-v-54b22f2c",null);t.exports=r.exports},70:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container",attrs:{id:"app"}},[t._m(0),t._v(" "),a("div",{staticClass:"panel panel-default"},[t._m(1),t._v(" "),a("div",{staticClass:"panel-body"},[a("form",{staticClass:"form-inline",attrs:{id:"form"},on:{submit:function(e){e.preventDefault(),t.addBook(e)}}},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"bookTitle"}},[t._v("Title:")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newBook.title,expression:"newBook.title"}],staticClass:"form-control",attrs:{type:"text",id:"bookTitle"},domProps:{value:t.newBook.title},on:{input:function(e){e.target.composing||(t.newBook.title=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"bookAuthor"}},[t._v("Author:")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newBook.author,expression:"newBook.author"}],staticClass:"form-control",attrs:{type:"text",id:"bookAuthor"},domProps:{value:t.newBook.author},on:{input:function(e){e.target.composing||(t.newBook.author=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"bookUrl"}},[t._v("Url:")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newBook.url,expression:"newBook.url"}],staticClass:"form-control",attrs:{type:"text",id:"bookUrl"},domProps:{value:t.newBook.url},on:{input:function(e){e.target.composing||(t.newBook.url=e.target.value)}}})]),t._v(" "),a("input",{staticClass:"btn btn-primary",attrs:{type:"submit",value:"Add Book"}})])])]),t._v(" "),a("div",{staticClass:"panel panel-default"},[t._m(2),t._v(" "),a("div",{staticClass:"panel-body"},[a("table",{staticClass:"table table-striped"},[t._m(3),t._v(" "),a("tbody",t._l(t.books,function(e){return a("tr",[a("td",[a("a",{attrs:{href:e.url}},[t._v(t._s(e.title))])]),t._v(" "),a("td",[t._v(" "+t._s(e.author))]),t._v(" "),a("td",[a("span",{staticClass:"glyphicon glyphicon-trash",on:{click:function(a){t.removeBook(e)}}})])])}))])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-header"},[a("h1",[t._v(" Vue.js 2 & Firebase Sample Application")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"panel-heading"},[a("h3",[t._v("Add Books")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"panel-heading"},[a("h3",[t._v(" Books Lists")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v(" Title")]),t._v(" "),a("th",[t._v(" Author")]),t._v(" "),a("th",[t._v(" Delete")])])])}]}},71:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello"},[a("h1",[t._v(t._s(t.msg))]),t._v(" "),a("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),a("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("Core Docs")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("Forum")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://gitter.im/vuejs/vue",target:"_blank"}},[t._v("Gitter Chat")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("Twitter")])]),t._v(" "),a("br"),t._v(" "),a("li",[a("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("Docs for This Template")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[t._v("vue-router")])]),t._v(" "),a("li",[a("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[t._v("vuex")])]),t._v(" "),a("li",[a("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[t._v("vue-loader")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[t._v("awesome-vue")])])])}]}}},[33]);
//# sourceMappingURL=app.b1d02ed87d1007f0a317.js.map