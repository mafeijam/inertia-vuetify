(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"1TUg":function(t,e,n){(e=t.exports=n("I1BE")(!1)).push([t.i,"@import url(https://fonts.googleapis.com/css?family=Noto+Sans+SC);",""]),e.push([t.i,'\n/** Ripples */\n/** Elements */\n* {\n  font-family: "Noto Sans SC";\n}\n/** Ripples */\n/** Elements */\n.v-input--checkbox.v-input--indeterminate.v-input--is-disabled {\n  opacity: 0.6;\n}',""])},"7ClH":function(t,e,n){var i=n("WVmh");"string"==typeof i&&(i=[[t.i,i,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(i,s);i.locals&&(t.exports=i.locals)},BAG1:function(t,e,n){"use strict";n.r(e);var i={data:function(){return{checkbox:!1}},metaInfo:{title:"Login"}},s=n("KHd+"),o=n("ZUTo"),r=n.n(o),a=n("dJbz"),l=n("gzZi"),c=n("sK+t"),u=n("mdmw"),p=(n("bKfa"),n("7ClH"),n("nSar")),d=n("w3qa"),h=n("VgeV"),f=n("Kw5r").a.extend({name:"rippleable",directives:{ripple:h.a},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple(t={}){return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),t.on=Object.assign({click:this.onChange},this.$listeners),this.$createElement("div",t)):null},onChange(){}}}),v=n("hUf1"),m=n("WN+I"),g=Object(m.a)(d.a,f,v.a).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"accent"},isMultiple(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive(){const t=this.value,e=this.internalValue;return this.isMultiple?!!Array.isArray(e)&&e.some(e=>this.valueComparator(e,t)):void 0===this.trueValue||void 0===this.falseValue?t?this.valueComparator(t,e):Boolean(e):this.valueComparator(e,this.trueValue)},isDirty(){return this.isActive}},watch:{inputValue(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel(){const t=d.a.options.methods.genLabel.call(this);return t?(t.data.on={click:t=>{t.preventDefault(),this.onChange()}},t):t},genInput(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown},ref:"input"})},onBlur(){this.isFocused=!1},onChange(){if(this.isDisabled)return;const t=this.value;let e=this.internalValue;if(this.isMultiple){Array.isArray(e)||(e=[]);const n=e.length;e=e.filter(e=>!this.valueComparator(e,t)),e.length===n&&e.push(t)}else e=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(e,this.trueValue)?this.falseValue:this.trueValue:t?this.valueComparator(e,t)?null:t:!e;this.validate(!0,e),this.internalValue=e,this.hasColor=e},onFocus(){this.isFocused=!0},onKeydown(t){}}}).extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data(){return{inputIndeterminate:this.indeterminate}},computed:{classes(){return{...d.a.options.computed.classes.call(this),"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate}},computedIcon(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState(){if(!this.disabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate(t){this.$nextTick(()=>this.inputIndeterminate=t)},inputIndeterminate(t){this.$emit("update:indeterminate",t)},isActive(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("checkbox",{...this.attrs$,"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()}),this.genRipple(this.setTextColor(this.validationState)),this.$createElement(p.a,this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon)])},genDefaultSlot(){return[this.genCheckbox(),this.genLabel()]}}}),b=n("Yq0q"),y=n("pSOK"),k=n("p1ug"),w=n("S9TP"),x=n("D9m0"),_=n("hlRy"),C=n("cdmR"),S=n("Kn9U"),V=Object(s.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-content",[n("v-container",{staticClass:"fill-height",attrs:{fluid:""}},[n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-card",{staticClass:"elevation-1",attrs:{width:"400"}},[n("v-toolbar",{attrs:{dark:"",flat:"",color:"blue-grey darken-3"}},[n("v-toolbar-title",[t._v("超勁系統")])],1),n("v-card-text",{staticClass:"pa-6"},[n("v-form",[n("v-text-field",{attrs:{label:"帳號","prepend-inner-icon":"mdi-email",filled:""}}),n("v-text-field",{attrs:{label:"密碼","prepend-inner-icon":"mdi-lock",filled:"",type:"password"}}),n("v-checkbox",{staticClass:"mt-0",attrs:{label:"記住電郵","hide-details":"",color:"indigo"},model:{value:t.checkbox,callback:function(e){t.checkbox=e},expression:"checkbox"}})],1)],1),n("v-card-text",{staticClass:"px-6 pt-0"},[n("v-row",[n("v-col",[n("v-btn",{attrs:{block:"",color:"indigo",dark:"",large:"",elevation:"1"}},[t._v("登入")])],1),n("v-col",[n("v-btn",{attrs:{block:"",color:"pink",dark:"",large:"",elevation:"1"}},[t._v("忘記密碼")])],1)],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=V.exports;r()(V,{VApp:a.a,VBtn:l.a,VCard:c.a,VCardText:u.b,VCheckbox:g,VCol:b.a,VContainer:y.a,VContent:k.a,VForm:w.a,VRow:x.a,VTextField:_.a,VToolbar:C.a,VToolbarTitle:S.a})},D9m0:function(t,e,n){"use strict";n("S4Vr");var i=n("Kw5r"),s=n("2fdy"),o=n("gNKD");const r=["sm","md","lg","xl"],a=["start","end","center"];function l(t,e){return r.reduce((n,i)=>(n[t+Object(o.A)(i)]=e(),n),{})}const c=t=>[...a,"baseline","stretch"].includes(t),u=l("align",()=>({type:String,default:null,validator:c})),p=t=>[...a,"space-between","space-around"].includes(t),d=l("justify",()=>({type:String,default:null,validator:p})),h=t=>[...a,"space-between","space-around","stretch"].includes(t),f=l("alignContent",()=>({type:String,default:null,validator:h})),v={align:Object.keys(u),justify:Object.keys(d),alignContent:Object.keys(f)},m={align:"align",justify:"justify",alignContent:"align-content"};function g(t,e,n){let i=m[t];if(null!=n){if(e){i+=`-${e.replace(t,"")}`}return i+=`-${n}`,i.toLowerCase()}}const b=new Map;e.a=i.a.extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:c},...u,justify:{type:String,default:null,validator:p},...d,alignContent:{type:String,default:null,validator:h},...f},render(t,{props:e,data:n,children:i}){let o="";for(const t in e)o+=String(e[t]);let r=b.get(o);if(!r){let t;for(t in r=[],v)v[t].forEach(n=>{const i=e[n],s=g(t,n,i);s&&r.push(s)});r.push({"no-gutters":e.noGutters,"row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),b.set(o,r)}return t(e.tag,Object(s.a)(n,{staticClass:"row",class:r}),i)}})},S9TP:function(t,e,n){"use strict";var i=n("WN+I"),s=n("fiu3"),o=n("MgYL");e.a=Object(i.a)(s.a,Object(o.b)("form")).extend({name:"v-form",inheritAttrs:!1,props:{lazyValidation:Boolean,value:Boolean},data:()=>({inputs:[],watchers:[],errorBag:{}}),watch:{errorBag:{handler(t){const e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput(t){const e=t=>t.$watch("hasError",e=>{this.$set(this.errorBag,t._uid,e)},{immediate:!0}),n={_uid:t._uid,valid:()=>{},shouldValidate:()=>{}};return this.lazyValidation?n.shouldValidate=t.$watch("shouldValidate",i=>{i&&(this.errorBag.hasOwnProperty(t._uid)||(n.valid=e(t)))}):n.valid=e(t),n},validate(){return 0===this.inputs.filter(t=>!t.validate(!0)).length},reset(){this.inputs.forEach(t=>t.reset()),this.resetErrorBag()},resetErrorBag(){this.lazyValidation&&setTimeout(()=>{this.errorBag={}},0)},resetValidation(){this.inputs.forEach(t=>t.resetValidation()),this.resetErrorBag()},register(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister(t){const e=this.inputs.find(e=>e._uid===t._uid);if(!e)return;const n=this.watchers.find(t=>t._uid===e._uid);n&&(n.valid(),n.shouldValidate()),this.watchers=this.watchers.filter(t=>t._uid!==e._uid),this.inputs=this.inputs.filter(t=>t._uid!==e._uid),this.$delete(this.errorBag,e._uid)}},render(t){return t("form",{staticClass:"v-form",attrs:{novalidate:!0,...this.attrs$},on:{submit:t=>this.$emit("submit",t)}},this.$slots.default)}})},WVmh:function(t,e,n){(e=t.exports=n("I1BE")(!1)).push([t.i,"@import url(https://fonts.googleapis.com/css?family=Noto+Sans+SC);",""]),e.push([t.i,'\n/** Ripples */\n/** Elements */\n* {\n  font-family: "Noto Sans SC";\n}\n/** Ripples */\n/** Elements */\n.theme--light.v-input--selection-controls.v-input--is-disabled:not(.v-input--indeterminate) .v-icon {\n  color: rgba(0, 0, 0, 0.26) !important;\n}\n.theme--dark.v-input--selection-controls.v-input--is-disabled:not(.v-input--indeterminate) .v-icon {\n  color: rgba(255, 255, 255, 0.3) !important;\n}\n.v-input--selection-controls {\n  margin-top: 16px;\n  padding-top: 4px;\n}\n.v-input--selection-controls .v-input__append-outer,\n.v-input--selection-controls .v-input__prepend-outer {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.v-input--selection-controls .v-input__control {\n  -webkit-box-flex: 0;\n          flex-grow: 0;\n  width: auto;\n}\n.v-input--selection-controls:not(.v-input--hide-details) .v-input__slot {\n  margin-bottom: 12px;\n}\n.v-input--selection-controls__input {\n  color: inherit;\n  display: -webkit-inline-box;\n  display: inline-flex;\n  -webkit-box-flex: 0;\n          flex: 0 0 auto;\n  height: 24px;\n  position: relative;\n  -webkit-transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  -webkit-transition-property: color, -webkit-transform;\n  transition-property: color, -webkit-transform;\n  transition-property: color, transform;\n  transition-property: color, transform, -webkit-transform;\n  width: 24px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.v-application--is-ltr .v-input--selection-controls__input {\n  margin-right: 8px;\n}\n.v-application--is-rtl .v-input--selection-controls__input {\n  margin-left: 8px;\n}\n.v-input--selection-controls__input input[role=checkbox],\n.v-input--selection-controls__input input[role=radio],\n.v-input--selection-controls__input input[role=switch] {\n  position: absolute;\n  opacity: 0;\n  width: 100%;\n  height: 100%;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.v-input--selection-controls__input + .v-label {\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.v-input--selection-controls__ripple {\n  border-radius: 50%;\n  cursor: pointer;\n  height: 34px;\n  position: absolute;\n  -webkit-transition: inherit;\n  transition: inherit;\n  width: 34px;\n  left: -12px;\n  top: calc(50% - 24px);\n  margin: 7px;\n}\n.v-input--selection-controls__ripple:before {\n  border-radius: inherit;\n  bottom: 0;\n  content: "";\n  position: absolute;\n  opacity: 0.2;\n  left: 0;\n  right: 0;\n  top: 0;\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n  -webkit-transform: scale(0.2);\n          transform: scale(0.2);\n  -webkit-transition: inherit;\n  transition: inherit;\n}\n.v-input--selection-controls__ripple .v-ripple__container {\n  -webkit-transform: scale(1.2);\n          transform: scale(1.2);\n}\n.v-input--selection-controls.v-input--dense .v-input--selection-controls__ripple {\n  width: 28px;\n  height: 28px;\n  left: -11px;\n}\n.v-input--selection-controls.v-input--dense:not(.v-input--switch) .v-input--selection-controls__ripple {\n  top: calc(50% - 21px);\n}\n.v-input--selection-controls.v-input {\n  -webkit-box-flex: 0;\n          flex: 0 1 auto;\n}\n.v-input--selection-controls.v-input .v-label {\n  -webkit-box-align: center;\n          align-items: center;\n  display: -webkit-inline-box;\n  display: inline-flex;\n  top: 0;\n  height: auto;\n}\n.v-input--selection-controls.v-input--is-focused .v-input--selection-controls__ripple:before,\n.v-input--selection-controls .v-radio--is-focused .v-input--selection-controls__ripple:before {\n  background: currentColor;\n  opacity: 0.4;\n  -webkit-transform: scale(1.2);\n          transform: scale(1.2);\n}\n.v-input--selection-controls .v-input--selection-controls__input:hover .v-input--selection-controls__ripple:before {\n  background: currentColor;\n  -webkit-transform: scale(1.2);\n          transform: scale(1.2);\n  -webkit-transition: none;\n  transition: none;\n}',""])},Yq0q:function(t,e,n){"use strict";n("S4Vr");var i=n("Kw5r"),s=n("2fdy"),o=n("gNKD");const r=["sm","md","lg","xl"],a=r.reduce((t,e)=>(t[e]={type:[Boolean,String,Number],default:!1},t),{}),l=r.reduce((t,e)=>(t["offset"+Object(o.A)(e)]={type:[String,Number],default:null},t),{}),c=r.reduce((t,e)=>(t["order"+Object(o.A)(e)]={type:[String,Number],default:null},t),{}),u={col:Object.keys(a),offset:Object.keys(l),order:Object.keys(c)};function p(t,e,n){let i=t;if(null!=n&&!1!==n){if(e){i+=`-${e.replace(t,"")}`}return"col"!==t||""!==n&&!0!==n?(i+=`-${n}`,i.toLowerCase()):i.toLowerCase()}}const d=new Map;e.a=i.a.extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...a,offset:{type:[String,Number],default:null},...l,order:{type:[String,Number],default:null},...c,alignSelf:{type:String,default:null,validator:t=>["auto","start","end","center","baseline","stretch"].includes(t)},justifySelf:{type:String,default:null,validator:t=>["auto","start","end","center","baseline","stretch"].includes(t)},tag:{type:String,default:"div"}},render(t,{props:e,data:n,children:i,parent:o}){let r="";for(const t in e)r+=String(e[t]);let a=d.get(r);if(!a){let t;for(t in a=[],u)u[t].forEach(n=>{const i=e[n],s=p(t,n,i);s&&a.push(s)});const n=a.some(t=>t.startsWith("col-"));a.push({col:!n||!e.cols,[`col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf,[`justify-self-${e.justifySelf}`]:e.justifySelf}),d.set(r,a)}return t(e.tag,Object(s.a)(n,{class:a}),i)}})},bKfa:function(t,e,n){var i=n("1TUg");"string"==typeof i&&(i=[[t.i,i,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(i,s);i.locals&&(t.exports=i.locals)},hUf1:function(t,e,n){"use strict";var i=n("Kw5r"),s=n("gNKD");e.a=i.a.extend({name:"comparable",props:{valueComparator:{type:Function,default:s.i}}})},mdmw:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return l}));var i=n("sK+t"),s=n("gNKD");const o=Object(s.h)("v-card__actions"),r=Object(s.h)("v-card__subtitle"),a=Object(s.h)("v-card__text"),l=Object(s.h)("v-card__title");i.a},"sK+t":function(t,e,n){"use strict";n("YVu0");var i=n("ENL/"),s=n("KXwx"),o=n("HIdI"),r=n("WN+I");e.a=Object(r.a)(s.a,o.a,i.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},outlined:Boolean,raised:Boolean,shaped:Boolean},computed:{classes(){return{"v-card":!0,...o.a.options.computed.classes.call(this),"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--outlined":this.outlined,"v-card--raised":this.raised,"v-card--shaped":this.shaped,...i.a.options.computed.classes.call(this)}},styles(){const t={...i.a.options.computed.styles.call(this)};return this.img&&(t.background=`url("${this.img}") center center / cover no-repeat`),t}},methods:{genProgress(){const t=s.a.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress"},[t]):null}},render(t){const{tag:e,data:n}=this.generateRouteLink();return n.style=this.styles,this.isClickable&&(n.attrs=n.attrs||{},n.attrs.tabindex=0),t(e,this.setBackgroundColor(this.color,n),[this.genProgress(),this.$slots.default])}})}}]);
//# sourceMappingURL=5.js.map?id=ebce7c524bf0516d9b10