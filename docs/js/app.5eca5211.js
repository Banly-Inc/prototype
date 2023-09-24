(function(){"use strict";var t={9049:function(t,e,n){n.r(e),n.d(e,{default:function(){return C}});var s=n(3058),o=n(5223),i=n(6035),a=n(5294),r=n(5234),l=n(3333),u=n(6878),c=n(3165),d=n(7233),h=n(5251),g=function(){var t=this,e=t._self._c;return e("div",[e(s.Z,[e(o.EB,[e(i.Z,{attrs:{fluid:""}},[t.isAuthorized?t._e():[t._v(" top ")],t.isAuthorized?[e(a.Z,[e(h.Z,{attrs:{label:"エンゲージメントコード"},model:{value:t.engagementCd,callback:function(e){t.engagementCd=e},expression:"engagementCd"}}),e(r.Z)],1),e(c.Z,{attrs:{"fixed-tabs":"","background-color":"primary",dark:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},t._l(t.items,(function(n){return e(l.Z,{key:n.title},[t._v(" "+t._s(n.title)+" ")])})),1),e(d.Z,{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},t._l(t.items,(function(n){return e(u.Z,{key:n.title},[e(i.Z,{staticClass:"my-2",attrs:{fluid:""}},[e(n.component,{tag:"component",attrs:{engagementCd:t.engagementCd}})],1)],1)})),1)]:t._e()],2)],1)],1)],1)},m=[],p=n(6154);const f=p.Z.create({headers:{"content-type":"application/x-www-form-urlencoded"}});f.interceptors.response.use((t=>t.data.error?Promise.reject(t.data.error):Promise.resolve(t)),(t=>Promise.reject(t)));const v=t=>{f.defaults.baseURL=t};let Z="";const _=t=>{Z=t},y=t=>f.post("",{method:"GET",authToken:Z,params:{yearMonth:t}}),b=t=>f.post("",{method:"POST",authToken:Z,params:{item:t}}),k=(t,e)=>f.post("",{method:"DELETE",authToken:Z,params:{yearMonth:t,id:e}}),P=(t,e)=>f.post("",{method:"PUT",authToken:Z,params:{beforeYM:t,item:e}});var x={setUrl:v,setAuthToken:_,fetch:y,add:b,delete:k,update:P},w={name:"Home",mounted(){this.$nextTick((()=>{console.log("hello"),x.setUrl("")}))},data(){return{tab:null,items:[{title:"FL003",component:"MyFL003"},{title:"FL014",component:"MyFL014"}],is_loading:!1,engagementCd:""}},computed:{isAuthorized:function(){return this.$store.getters["isAuthorized"]}},methods:{}},A=w,T=n(1001),S=(0,T.Z)(A,g,m,!1,null,null,null),C=S.exports},3454:function(t,e,n){var s=n(144),o=n(1096),i=n(5378),a=n(8983),r=n(1828),l=n(6035),u=n(4192),c=n(5057),d=n(248),h=n(1908),g=n(1769),m=n(8228),p=n(3551),f=n(1969),v=n(5234),Z=n(2370),_=function(){var t=this,e=t._self._c;return e(o.Z,[t.isAuthorized?e(f.Z,{attrs:{app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[e(h.Z,[e(g.V9,{staticClass:"title"},[t._v(" GAS BANLY ")]),e(r.Z,{attrs:{icon:""},on:{click:function(e){t.drawer=!1}}},[e(c.Z,[t._v("mdi-chevron-left")])],1)],1),e(u.Z),e(d.Z,{attrs:{nav:""}},t._l(t.menus,(function(n){return e(h.Z,{key:n.title,attrs:{to:n.url}},[e(m.Z,[e(c.Z,[t._v(t._s(n.icon))])],1),e(g.km,[e(g.V9,[t._v(" "+t._s(n.title)+" ")])],1)],1)})),1)],1):t._e(),e(i.Z,{attrs:{app:"",color:"primary",dark:""}},[t.isAuthorized?e(a.Z,{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}):t._e(),e(Z.qW,[t._v(t._s(t.pageTitle)+" ")]),e(v.Z),e(r.Z,{attrs:{icon:"",to:"/"}},[e(c.Z,[t._v("mdi-home-outline")])],1),e(r.Z,{attrs:{text:"",to:"/settings"}},[e("span",{staticClass:"mr-2"},[t._v("Latest Release")]),e(c.Z,[t._v("mdi-cog")])],1)],1),e(p.Z,[e(l.Z,{attrs:{fluid:""}},[e("router-view")],1)],1)],1)},y=[],b={name:"App",beforeCreate(){console.log("beforeCreate"),this.$store.dispatch("loadSettings")},mounted(){this.$nextTick((()=>{console.log("mounted App.vue start"),console.log(this.$route.path),console.log(this.menus),this.changePageTitle(this.$route.path),console.log("mounted App.vue end")}))},computed:{isAuthorized:function(){return this.$store.getters["isAuthorized"]}},watch:{"$route.path":function(t,e){console.log({newVal:t,oldVal:e}),this.changePageTitle(t)}},data(){return{drawer:!1,menus:[...this.$store.state.menus],pageTitle:""}},methods:{changePageTitle(t){for(const e of this.menus)if(console.log(e),e.url===t){this.pageTitle=e.title;break}}}},k=b,P=n(1001),x=(0,P.Z)(k,_,y,!1,null,null,null),w=x.exports,A=n(8345),T=n(9049),S=n(5294),C=n(5251),O=function(){var t=this,e=t._self._c;return e("div",[e("h3",[t._v("アプリ設定")]),e(S.Z,{staticClass:"mx-4"},[e(C.Z,{attrs:{label:"API URL"},model:{value:t.settings.apiUrl,callback:function(e){t.$set(t.settings,"apiUrl",e)},expression:"settings.apiUrl"}})],1),e(S.Z,{staticClass:"mx-4"},[e(C.Z,{attrs:{label:"AUTH TOKEN"},model:{value:t.settings.authToken,callback:function(e){t.$set(t.settings,"authToken",e)},expression:"settings.authToken"}})],1),e(S.Z,{staticClass:"ma-4"},[e("p",[t._v("※設定はこのデバイスのみに保存されます。")]),e(v.Z),e(r.Z,{attrs:{color:"primary",loading:t.is_loading},on:{click:t.onSave}},[t._v(" 保存 ")])],1)],1)},$=[],z={name:"Settings",data(){return{settings:{...this.$store.state.settings},is_loading:!1}},methods:{async onSave(){this.$store.dispatch("saveSettings",{settings:this.settings}),this.notify_info("設定を保存しました"),await this.onAuthCheck()},async onAuthCheck(){try{this.is_loading=!0;const t={params:{}},e=await this.gasPost("AUTH_CHECK",t);"OK"===e.data.status?(this.$store.dispatch("saveAuthorized",!0),this.notify_info("認証に成功しました")):this.notify_error(e.data.message)}catch(t){console.log(t)}finally{this.is_loading=!1}}}},L=z,F=(0,P.Z)(L,O,$,!1,null,null,null),U=F.exports,j=n(629);s.ZP.use(j.ZP);var M=new j.ZP.Store({state:{isAuthorized:!1,settings:{apiUrl:"",authToken:""},menus:[{title:"Top",icon:"mdi-home-outline",url:"/"},{title:"設定",icon:"mdi-cog-outline",url:"/settings"}]},getters:{isAuthorized:t=>t.isAuthorized},mutations:{saveSettings(t,{settings:e}){t.settings={...e},localStorage.setItem("settings",JSON.stringify(e))},loadSettings(t){const e=JSON.parse(localStorage.getItem("settings"));e&&(t.settings=Object.assign(t.settings,e))},saveAuthorized(t,e){t.isAuthorized=e}},actions:{saveSettings({commit:t},{settings:e}){t("saveSettings",{settings:e})},loadSettings({commit:t}){t("loadSettings")},saveAuthorized({commit:t},e){t("saveAuthorized",e)}},modules:{}});s.ZP.use(A.ZP);const E=[{path:"/",name:"Home",component:T["default"],meta:{isPublic:!0}},{path:"/settings",name:"Settings",component:U,meta:{isPublic:!0}},{path:"/about",name:"about",component:()=>Promise.resolve().then(n.bind(n,9049))}],H=new A.ZP({routes:E});H.beforeEach(((t,e,n)=>{t.matched.some((t=>!t.meta.isPublic))&&!M.getters["isAuthorized"]?n({path:"/settings",query:{redirect:t.fullPath}}):n()}));var K=H,N=n(2250),R=n(160);const G=new N.Z({});s.ZP.use(N.Z),s.ZP.use(R.Z,{context:{vuetify:G}});var V,q,I,J,B=G,D=(n(6229),n(7330),n(2062),n(6154)),Y={methods:{createGasAxios(){const t=D.Z.create({headers:{Accept:"application/json","content-type":"application/x-www-form-urlencoded"}});return t.defaults.baseURL=this.$store.state.settings.apiUrl,t},gasPost(t,e){const n={...e,action:t,api_key:this.$store.state.settings.authToken};console.log({requestData:n});var s=new URLSearchParams;s.append("data",JSON.stringify(n));const o=this.createGasAxios().post("",s);return new Promise(((t,e)=>{o.then((e=>{console.log(e),t(e)})),o.catch((t=>{console.log(t),e(t)}))}))}}},W=Y,Q=(0,P.Z)(W,V,q,!1,null,null,null),X=Q.exports,tt={methods:{async msg_info(t){const e=await this.$dialog.confirm({text:t,title:"情報",actions:{false:"閉じる"},color:"primary"});return e},notify_info(t){this.$dialog.notify.info(t,{position:"bottom-right",timeout:3e3})},notify_error(t){this.$dialog.notify.error(t,{position:"bottom-right",timeout:5e3})}}},et=tt,nt=(0,P.Z)(et,I,J,!1,null,null,null),st=nt.exports,ot=n(4437),it=n(9583),at=function(){var t=this,e=t._self._c;return e("div",[e(S.Z,[e(r.Z,{attrs:{color:"primary",loading:t.is_loading},on:{click:t.onFL003}},[t._v(" FL003 ")])],1),e(S.Z,[e(ot.Z,[e(it.Z,{attrs:{headers:t.headers,items:t.items,loading:t.is_loading,dense:""}})],1)],1)],1)},rt=[],lt={data(){return{isAuthorized:this.$store.state.isAuthorized,is_loading:!1,items:[]}},computed:{headers(){return[{text:"時間",value:"log_dttm",width:"200px"},{text:"メッセージ",value:"log_message"}]}},methods:{async onFL003(){try{this.is_loading=!0,this.items=[];const t={params:{a:"bbcddd"}},e=await this.gasPost("FL003",t);"OK"==e.data.status&&(this.items=e.data.log)}finally{this.is_loading=!1}}}},ut=lt,ct=(0,P.Z)(ut,at,rt,!1,null,null,null),dt=ct.exports,ht=function(){var t=this,e=t._self._c;return e("div",[e(S.Z,[e(r.Z,{attrs:{color:"primary",loading:t.is_loading},on:{click:t.onFL014}},[t._v(" FL014 ")])],1),e(S.Z,[e(ot.Z,[e(it.Z,{attrs:{headers:t.headers,items:t.items,loading:t.is_loading,dense:""}})],1)],1)],1)},gt=[],mt={props:{engagementCd:String},data(){return{isAuthorized:this.$store.state.isAuthorized,is_loading:!1,items:[]}},computed:{headers(){return[{text:"時間",value:"log_dttm",width:"200px"},{text:"メッセージ",value:"log_message"}]}},methods:{async onFL014(){try{this.is_loading=!0;const t={params:{engagementCd:this.engagementCd}},e=await this.gasPost("FL014",t);"OK"==e.data.status&&(this.items=e.data.log)}finally{this.is_loading=!1}}}},pt=mt,ft=(0,P.Z)(pt,ht,gt,!1,null,null,null),vt=ft.exports;s.ZP.config.productionTip=!1,s.ZP.mixin(X),s.ZP.mixin(st),s.ZP.component("MyFL003",dt),s.ZP.component("MyFL014",vt),new s.ZP({router:K,store:M,vuetify:B,render:t=>t(w)}).$mount("#app")}},e={};function n(s){var o=e[s];if(void 0!==o)return o.exports;var i=e[s]={exports:{}};return t[s].call(i.exports,i,i.exports,n),i.exports}n.m=t,function(){var t=[];n.O=function(e,s,o,i){if(!s){var a=1/0;for(c=0;c<t.length;c++){s=t[c][0],o=t[c][1],i=t[c][2];for(var r=!0,l=0;l<s.length;l++)(!1&i||a>=i)&&Object.keys(n.O).every((function(t){return n.O[t](s[l])}))?s.splice(l--,1):(r=!1,i<a&&(a=i));if(r){t.splice(c--,1);var u=o();void 0!==u&&(e=u)}}return e}i=i||0;for(var c=t.length;c>0&&t[c-1][2]>i;c--)t[c]=t[c-1];t[c]=[s,o,i]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var s in e)n.o(e,s)&&!n.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,s){var o,i,a=s[0],r=s[1],l=s[2],u=0;if(a.some((function(e){return 0!==t[e]}))){for(o in r)n.o(r,o)&&(n.m[o]=r[o]);if(l)var c=l(n)}for(e&&e(s);u<a.length;u++)i=a[u],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(c)},s=self["webpackChunkbanly_gas_client"]=self["webpackChunkbanly_gas_client"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=n.O(void 0,[998],(function(){return n(3454)}));s=n.O(s)})();
//# sourceMappingURL=app.5eca5211.js.map