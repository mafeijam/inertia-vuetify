(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"89l/":function(t,a,e){"use strict";var n={data:function(){return{drawer:!0,items:[{icon:"mdi-account-group",link:"/admin/users",text:"用戶管理",val:"/admin"},{icon:"mdi-lock",link:"/protect",text:"Protect",val:"/protect"}]}},computed:{path:function(){return"/"+location.pathname.substr(1).split("/").shift()}},methods:{visit:function(t){this.$inertia.visit(t,{preserveState:!0,preserveScroll:!0})}}},i=e("KHd+"),r=e("ZUTo"),o=e.n(r),l=e("dJbz"),s=e("QNyc"),c=e("W8H5"),u=e("gzZi"),v=e("pSOK"),p=e("p1ug"),d=e("Ey0z"),b=e("iGBT"),m=e("2hOt"),f=e("XSMC"),h=e("G6r3"),k=e("NMP6"),g=e("93RO"),V=e("LbRV"),_=e("L6Q5"),w=e("Kn9U"),x=Object(i.a)(n,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-app",[e("v-navigation-drawer",{attrs:{app:"",clipped:"",width:"200"},model:{value:t.drawer,callback:function(a){t.drawer=a},expression:"drawer"}},[e("v-list",[e("v-list-item-group",{attrs:{value:t.path,color:"orange",mandatory:""}},t._l(t.items,(function(a,n){return e("v-list-item",{key:n,attrs:{link:"",value:a.val},on:{click:function(e){return t.visit(a.link)}}},[e("v-list-item-icon",[e("v-icon",[t._v(t._s(a.icon))])],1),e("v-list-item-content",[e("v-list-item-title",[t._v(t._s(a.text))])],1)],1)})),1)],1)],1),e("v-app-bar",{attrs:{app:"",dark:"",color:"blue-grey darken-3",elevation:"1","clipped-left":""}},[e("v-app-bar-nav-icon",{attrs:{color:"blue-grey lighten-5"},on:{click:function(a){a.stopPropagation(),t.drawer=!t.drawer}}}),e("v-toolbar-title",{staticClass:"blue-grey--text text--lighten-5"},[t._v("超級系統")]),e("v-spacer"),e("v-btn",{attrs:{icon:"",color:"blue-grey lighten-5"}},[e("v-icon",[t._v("mdi-bell")])],1),e("v-btn",{attrs:{icon:"",color:"blue-grey lighten-5"}},[e("v-icon",[t._v("mdi-account")])],1)],1),e("v-content",[e("v-container",{staticClass:"pa-5",attrs:{fluid:"","scroll-region":""}},[e("transition",{attrs:{name:"slide-x-reverse-transition",mode:"out-in"}},[t._t("default")],2)],1)],1),e("v-snackbar",{attrs:{top:"",color:"success"},model:{value:t.$root.flashSnackbar,callback:function(a){t.$set(t.$root,"flashSnackbar",a)},expression:"$root.flashSnackbar"}},[t._v(t._s(t.$root.flashMessage)),e("v-btn",{attrs:{small:"",icon:"",dark:""},on:{click:function(a){t.$root.flashSnackbar=!1}}},[e("v-icon",[t._v("mdi-close")])],1)],1)],1)}),[],!1,null,null,null);a.a=x.exports;o()(x,{VApp:l.a,VAppBar:s.a,VAppBarNavIcon:c.a,VBtn:u.a,VContainer:v.a,VContent:p.a,VIcon:d.a,VList:b.a,VListItem:m.a,VListItemContent:f.a,VListItemGroup:h.a,VListItemIcon:k.a,VListItemTitle:f.b,VNavigationDrawer:g.a,VSnackbar:V.a,VSpacer:_.a,VToolbarTitle:w.a})},Ql7F:function(t,a,e){"use strict";e.r(a);var n={layout:e("89l/").a,metaInfo:{title:"About"}},i=e("KHd+"),r=Object(i.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("h1",[this._v("About123")])}),[],!1,null,null,null);a.default=r.exports}}]);
//# sourceMappingURL=8.js.map?id=b1894942cfc1c4a0df63