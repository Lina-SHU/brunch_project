(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6a99d112"],{"0a2f":function(e,t,c){"use strict";c.r(t);var o=c("7a23"),a=Object(o["createStaticVNode"])('<div class="carts-heroheader mb-5"><div class="container"><h2 data-aos="flip-up" class="text-white position-absolute top-50 bg-black px-5 py-2 lh-base"> 當日現做<br> 美味到府 </h2></div></div><div class="container mb-5"><div class="row d-flex-center"><div class="col-md-6"><ul class="process d-flex justify-content-between list-unstyled"><li class="circle rounded-circle text-center bg-primary text-white py-lg-4 py-3"> 1. <br><span class="d-none d-lg-inline">清單確認</span><i class="material-icons icons text-primary">navigate_next</i></li><li class="circle rounded-circle text-center bg-primary text-white py-lg-4 py-3"> 2. <br><span class="d-none d-lg-inline">資料填寫</span><i class="material-icons icons text-primary">navigate_next</i></li><li class="circle rounded-circle text-center bg-secondary text-primary py-lg-4 py-3"> 3. <br><span class="d-none d-lg-inline">付款確認</span><i class="material-icons icons text-primary">navigate_next</i></li><li class="circle rounded-circle text-center bg-secondary text-primary py-lg-4 py-3"> 4. <br><span class="d-none d-lg-inline">完成訂單</span></li></ul></div></div></div>',2),r={class:"container mb-5"},n={class:"row flex-row-reverse"},s={class:"col-md-4"},i={class:"order-list p-4 border border-2 border-secondary text-primary shadow-sm"},l=Object(o["createVNode"])("h3",{class:"fw-bold my-2 p-2"},"訂單明細",-1),d={class:"list-unstyled border-bottom border-3 border-primary py-2"},u={class:"d-flex justify-content-between"},b={class:"cart-content d-flex"},p={class:"cart-item ms-2"},m={class:"fs-6 m-0"},f={class:"fs-6"},j={class:"fs-6"},O={class:"d-flex justify-content-between"},v=Object(o["createVNode"])("p",{class:"fs-6"},"小計",-1),V={class:"fs-6"},g={class:"input-group mb-3"},N={class:"d-flex justify-content-between"},h=Object(o["createVNode"])("p",{class:"fs-4 fw-bold"},"總計",-1),y={class:"fs-4 fw-bold"},x={class:"col-md-8"},w={class:"row d-flex-center"},C={class:"col-md-10"},k=Object(o["createVNode"])("h3",{class:"fw-bold my-2 text-primary border-bottom border-4 p-2 border-primary"},"訂購人資訊",-1),B=Object(o["createVNode"])("div",{class:"d-flex justify-content-end text-danger"}," * 為必填欄位",-1);function T(e,t,c,T,D,L){var S=Object(o["resolveComponent"])("Loading"),$=Object(o["resolveComponent"])("OrderForm"),_=Object(o["resolveComponent"])("FooterSection");return Object(o["openBlock"])(),Object(o["createBlock"])("section",null,[Object(o["createVNode"])(S,{"is-loading":D.isLoading},null,8,["is-loading"]),a,Object(o["createVNode"])("div",r,[Object(o["createVNode"])("div",n,[Object(o["createVNode"])("div",s,[Object(o["createVNode"])("div",i,[l,Object(o["createVNode"])("ul",d,[(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(D.carts.carts,(function(t){return Object(o["openBlock"])(),Object(o["createBlock"])("li",{key:t.id+"1",class:"mb-3"},[Object(o["createVNode"])("div",u,[Object(o["createVNode"])("div",b,[Object(o["createVNode"])("div",{style:[{"background-image":"url(".concat(t.product.imageUrl)},{"background-size":"cover","background-position":"center center",height:"50px",width:"80px"}]},null,4),Object(o["createVNode"])("div",p,[Object(o["createVNode"])("h4",m,Object(o["toDisplayString"])(t.product.title),1),Object(o["createVNode"])("small",f,"$"+Object(o["toDisplayString"])(e.$toCurrency("".concat(t.total))),1)])]),Object(o["createVNode"])("small",j,Object(o["toDisplayString"])(t.qty)+" "+Object(o["toDisplayString"])(t.product.unit),1)])])})),128))]),Object(o["createVNode"])("div",O,[v,Object(o["createVNode"])("p",V,"NT $"+Object(o["toDisplayString"])(e.$toCurrency("".concat(D.carts.total))),1)]),Object(o["createVNode"])("div",g,[Object(o["withDirectives"])(Object(o["createVNode"])("input",{type:"text",class:"form-control",placeholder:"輸入優惠券代碼","onUpdate:modelValue":t[1]||(t[1]=function(e){return D.couponCode=e})},null,512),[[o["vModelText"],D.couponCode,void 0,{trim:!0}]]),Object(o["createVNode"])("button",{class:"btn btn-sm btn-primary",type:"button",onClick:t[2]||(t[2]=function(){return L.useCoupon&&L.useCoupon.apply(L,arguments)})},"套用優惠券")]),Object(o["createVNode"])("div",N,[h,Object(o["createVNode"])("p",y,"NT $"+Object(o["toDisplayString"])(e.$toCurrency("".concat(D.carts.final_total))),1)])])]),Object(o["createVNode"])("div",x,[Object(o["createVNode"])("div",w,[Object(o["createVNode"])("div",C,[k,B,Object(o["createVNode"])($)])])])])]),Object(o["createVNode"])(_)])}c("99af");var D=c("8917"),L=(c("b0c0"),{class:"mb-3"}),S=Object(o["createVNode"])("label",{for:"email"},[Object(o["createTextVNode"])("Email "),Object(o["createVNode"])("span",{class:"text-danger"},"*")],-1),$={class:"mb-3"},_=Object(o["createVNode"])("label",{for:"ClientName"},[Object(o["createTextVNode"])("訂購人姓名 "),Object(o["createVNode"])("span",{class:"text-danger"},"*")],-1),F={class:"mb-3"},U=Object(o["createVNode"])("label",{for:"ClientTel"},[Object(o["createTextVNode"])("訂購人電話 "),Object(o["createVNode"])("span",{class:"text-danger"},"*")],-1),A={class:"mb-3"},M=Object(o["createVNode"])("label",{for:"ClientAddr"},[Object(o["createTextVNode"])("訂購人地址 "),Object(o["createVNode"])("span",{class:"text-danger"},"*")],-1),q={class:"row g-3 mb-3"},E={class:"col-md-6"},R=Object(o["createVNode"])("label",{for:"getDate"},[Object(o["createTextVNode"])("取餐日期 "),Object(o["createVNode"])("span",{class:"text-danger"},"*")],-1),z={class:"col-md-6"},H=Object(o["createVNode"])("label",{for:"getTime"},[Object(o["createTextVNode"])("取餐時間 "),Object(o["createVNode"])("span",{class:"text-danger"},"*")],-1),J=Object(o["createVNode"])("option",{value:"7:00"},"7:00a.m.",-1),P=Object(o["createVNode"])("option",{value:"8:00"},"8:00a.m.",-1),W=Object(o["createVNode"])("option",{value:"9:00"},"9:00a.m.",-1),I=Object(o["createVNode"])("option",{value:"10:00"},"10:00a.m.",-1),Y=Object(o["createVNode"])("option",{value:"11:00"},"11:00a.m.",-1),G={class:"mb-3"},K=Object(o["createVNode"])("label",{for:"payment_method"},[Object(o["createTextVNode"])("付款方式 "),Object(o["createVNode"])("span",{class:"text-danger"},"*")],-1),Q=Object(o["createVNode"])("option",{value:"信用卡"},"信用卡",-1),X=Object(o["createVNode"])("option",{value:"Line Pay"},"Line Pay",-1),Z=Object(o["createVNode"])("option",{value:"ATM"},"ATM",-1),ee={class:"mb-3"},te=Object(o["createVNode"])("label",{for:"message",class:"form-label "},"留言",-1),ce=Object(o["createVNode"])("div",{class:"d-flex justify-content-end"},[Object(o["createVNode"])("button",{class:"btn btn-lg btn-primary",type:"submit"},"確認結帳")],-1);function oe(e,t,c,a,r,n){var s=Object(o["resolveComponent"])("Field"),i=Object(o["resolveComponent"])("error-message"),l=Object(o["resolveComponent"])("Form");return Object(o["openBlock"])(),Object(o["createBlock"])(l,{class:"p-2 text-primary",onSubmit:n.onSubmit},{default:Object(o["withCtx"])((function(e){var c=e.errors;return[Object(o["createVNode"])("div",L,[S,Object(o["createVNode"])(s,{type:"email",class:["form-control border-0 bg-secondary",{"is-invalid":c["email"]}],name:"email",id:"email",rules:"email|required",placeholder:"請輸入 Email",modelValue:r.user.email,"onUpdate:modelValue":t[1]||(t[1]=function(e){return r.user.email=e})},null,8,["class","modelValue"]),Object(o["createVNode"])(i,{name:"email",class:"invalid-feedback"})]),Object(o["createVNode"])("div",$,[_,Object(o["createVNode"])(s,{type:"text",class:["form-control border-0 bg-secondary",{"is-invalid":c["您的姓名"]}],name:"您的姓名",id:"ClientName",rules:"required",placeholder:"請輸入姓名",modelValue:r.user.name,"onUpdate:modelValue":t[2]||(t[2]=function(e){return r.user.name=e}),modelModifiers:{trim:!0}},null,8,["class","modelValue"]),Object(o["createVNode"])(i,{name:"您的姓名",class:"invalid-feedback"})]),Object(o["createVNode"])("div",F,[U,Object(o["createVNode"])(s,{type:"text",class:["form-control border-0 bg-secondary",{"is-invalid":c["您的電話"]}],name:"您的電話",id:"ClientTel",rules:"min:8|required",placeholder:"請輸入電話",modelValue:r.user.tel,"onUpdate:modelValue":t[3]||(t[3]=function(e){return r.user.tel=e}),modelModifiers:{trim:!0}},null,8,["class","modelValue"]),Object(o["createVNode"])(i,{name:"您的電話",class:"invalid-feedback"})]),Object(o["createVNode"])("div",A,[M,Object(o["createVNode"])(s,{type:"text",class:["form-control border-0 bg-secondary",{"is-invalid":c["您的地址"]}],name:"您的地址",id:"ClientAddr",rules:"required",placeholder:"請輸入地址",modelValue:r.user.address,"onUpdate:modelValue":t[4]||(t[4]=function(e){return r.user.address=e}),modelModifiers:{trim:!0}},null,8,["class","modelValue"]),Object(o["createVNode"])(i,{name:"您的地址",class:"invalid-feedback"})]),Object(o["createVNode"])("div",q,[Object(o["createVNode"])("div",E,[R,Object(o["createVNode"])(s,{name:"取餐日期",class:["form-select border-0 bg-secondary",{"is-invalid":c["取餐日期"]}],as:"select",rules:"required",placeholder:"請選擇取餐日期",modelValue:r.user.getDate,"onUpdate:modelValue":t[5]||(t[5]=function(e){return r.user.getDate=e}),id:"getDate"},{default:Object(o["withCtx"])((function(){return[(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(r.week,(function(e){return Object(o["openBlock"])(),Object(o["createBlock"])("option",{value:e,key:e},Object(o["toDisplayString"])(e),9,["value"])})),128))]})),_:2},1032,["class","modelValue"]),Object(o["createVNode"])(i,{name:"取餐日期",class:"invalid-feedback"})]),Object(o["createVNode"])("div",z,[H,Object(o["createVNode"])(s,{name:"取餐時間",class:["form-select border-0 bg-secondary",{"is-invalid":c["取餐時間"]}],as:"select",id:"getTime",rules:"required",placeholder:"請選擇取餐時間",modelValue:r.user.getTime,"onUpdate:modelValue":t[6]||(t[6]=function(e){return r.user.getTime=e})},{default:Object(o["withCtx"])((function(){return[J,P,W,I,Y]})),_:2},1032,["class","modelValue"]),Object(o["createVNode"])(i,{name:"取餐時間",class:"invalid-feedback"})])]),Object(o["createVNode"])("div",G,[K,Object(o["createVNode"])(s,{name:"付款方式",class:["form-select border-0 bg-secondary",{"is-invalid":c["付款方式"]}],as:"select",rules:"required",placeholder:"請選擇付款方式",modelValue:r.user.payment_method,"onUpdate:modelValue":t[7]||(t[7]=function(e){return r.user.payment_method=e}),id:"payment_method"},{default:Object(o["withCtx"])((function(){return[Q,X,Z]})),_:2},1032,["class","modelValue"]),Object(o["createVNode"])(i,{name:"付款方式",class:"invalid-feedback"})]),Object(o["createVNode"])("div",ee,[te,Object(o["withDirectives"])(Object(o["createVNode"])("textarea",{class:"form-control border-0 bg-secondary",id:"message",rows:"3","onUpdate:modelValue":t[8]||(t[8]=function(e){return r.message=e})},null,512),[[o["vModelText"],r.message,void 0,{trim:!0}]])]),ce]})),_:1},8,["onSubmit"])}var ae=c("aee4"),re={data:function(){return{user:{},message:"",week:[]}},methods:{getWeekDays:function(){for(var e=2;e<10;e++){var t=new Date;t.setDate(t.getDate()+e),this.week.push("".concat(t.getFullYear(),"-").concat(t.getMonth()+1,"-").concat(t.getDate()))}},onSubmit:function(e,t){var c=this,o=t.resetForm;this.isLoading=!0;var a={data:{user:this.user,message:this.message}},r="".concat("https://vue3-course-api.hexschool.io/","api/").concat("linachen","/order");this.$http.post(r,a).then((function(e){if(e.data.success){c.isLoading=!1,c.$swal({toast:!0,title:"訂單建立成功",icon:"success",timer:1500,showConfirmButton:!1,position:"top"});var t=e.data.orderId;c.$router.push("/order/".concat(t)),ae["a"].emit("product-cart")}})).catch((function(e){e&&(c.isLoading=!1,c.$swal({toast:!0,title:"無法建立訂單，請聯繫管理員",icon:"error",timer:1500,showConfirmButton:!1,position:"top"}))})),o()}},created:function(){this.getWeekDays()}};re.render=oe;var ne=re,se=c("7ccb"),ie={data:function(){return{carts:{},couponCode:"",isLoading:!1}},components:{FooterSection:D["a"],OrderForm:ne,Loading:se["a"]},methods:{getCarts:function(){var e=this,t="".concat("https://vue3-course-api.hexschool.io/","api/").concat("linachen","/cart");this.$http.get(t).then((function(t){t.data.success&&(e.carts=t.data.data)})).catch((function(t){t&&(e.isLoading=!1,e.$swal({toast:!0,title:"無法購物車列表，請聯繫管理員",icon:"error",timer:1500,showConfirmButton:!1,position:"top"}))}))},useCoupon:function(){var e=this;this.isLoading=!0;var t="".concat("https://vue3-course-api.hexschool.io/","api/").concat("linachen","/coupon");this.$http.post(t,{data:{code:this.couponCode}}).then((function(t){t.data.success?(e.isLoading=!1,e.$swal({toast:!0,title:"成功套用優惠券！",icon:"success",timer:1500,showConfirmButton:!1,position:"top"}),e.getCarts()):(e.isLoading=!1,e.$swal({toast:!0,title:"找不到該優惠券唷！",icon:"error",timer:1500,showConfirmButton:!1,position:"top"}))})).catch((function(t){t&&(e.isLoading=!1,e.$swal({toast:!0,title:"無法使用優惠券，請聯繫管理員",icon:"error",timer:1500,showConfirmButton:!1,position:"top"}))}))}},mounted:function(){this.getCarts()}};ie.render=T;t["default"]=ie},"1dde":function(e,t,c){var o=c("d039"),a=c("b622"),r=c("2d00"),n=a("species");e.exports=function(e){return r>=51||!o((function(){var t=[],c=t.constructor={};return c[n]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"65f0":function(e,t,c){var o=c("861d"),a=c("e8b5"),r=c("b622"),n=r("species");e.exports=function(e,t){var c;return a(e)&&(c=e.constructor,"function"!=typeof c||c!==Array&&!a(c.prototype)?o(c)&&(c=c[n],null===c&&(c=void 0)):c=void 0),new(void 0===c?Array:c)(0===t?0:t)}},"7ccb":function(e,t,c){"use strict";var o=c("7a23"),a=Object(o["createVNode"])("div",{class:"loadingio-spinner-ellipsis-rg3crixpxzh"},[Object(o["createVNode"])("div",{class:"ldio-zmt4lrj3aj"},[Object(o["createVNode"])("div"),Object(o["createVNode"])("div"),Object(o["createVNode"])("div"),Object(o["createVNode"])("div"),Object(o["createVNode"])("div")])],-1);function r(e,t,c,r,n,s){var i=Object(o["resolveComponent"])("loading",!0);return Object(o["openBlock"])(),Object(o["createBlock"])(i,{active:e.isLoading,"onUpdate:active":t[1]||(t[1]=function(t){return e.isLoading=t})},{default:Object(o["withCtx"])((function(){return[a]})),_:1},8,["active"])}var n={props:["is-loading"]};n.render=r;t["a"]=n},8418:function(e,t,c){"use strict";var o=c("c04e"),a=c("9bf2"),r=c("5c6c");e.exports=function(e,t,c){var n=o(t);n in e?a.f(e,n,r(0,c)):e[n]=c}},8917:function(e,t,c){"use strict";var o=c("7a23"),a={class:"text-white bg-primary text-center py-4"},r=Object(o["createVNode"])("h2",{class:"h1 logo text-shadow"},"FRESH BRUNCH",-1),n=Object(o["createVNode"])("p",{class:"mb-0 mt-2"},"© 2021 All Rights Reserved.",-1);function s(e,t){return Object(o["openBlock"])(),Object(o["createBlock"])("footer",a,[r,n])}const i={};i.render=s;t["a"]=i},"99af":function(e,t,c){"use strict";var o=c("23e7"),a=c("d039"),r=c("e8b5"),n=c("861d"),s=c("7b0b"),i=c("50c4"),l=c("8418"),d=c("65f0"),u=c("1dde"),b=c("b622"),p=c("2d00"),m=b("isConcatSpreadable"),f=9007199254740991,j="Maximum allowed index exceeded",O=p>=51||!a((function(){var e=[];return e[m]=!1,e.concat()[0]!==e})),v=u("concat"),V=function(e){if(!n(e))return!1;var t=e[m];return void 0!==t?!!t:r(e)},g=!O||!v;o({target:"Array",proto:!0,forced:g},{concat:function(e){var t,c,o,a,r,n=s(this),u=d(n,0),b=0;for(t=-1,o=arguments.length;t<o;t++)if(r=-1===t?n:arguments[t],V(r)){if(a=i(r.length),b+a>f)throw TypeError(j);for(c=0;c<a;c++,b++)c in r&&l(u,b,r[c])}else{if(b>=f)throw TypeError(j);l(u,b++,r)}return u.length=b,u}})},aee4:function(e,t,c){"use strict";var o=function(e){return{all:e=e||new Map,on:function(t,c){var o=e.get(t);o?o.push(c):e.set(t,[c])},off:function(t,c){var o=e.get(t);o&&(c?o.splice(o.indexOf(c)>>>0,1):e.set(t,[]))},emit:function(t,c){var o=e.get(t);o&&o.slice().map((function(e){e(c)})),(o=e.get("*"))&&o.slice().map((function(e){e(t,c)}))}}};t["a"]=o()},b0c0:function(e,t,c){var o=c("83ab"),a=c("9bf2").f,r=Function.prototype,n=r.toString,s=/^\s*function ([^ (]*)/,i="name";o&&!(i in r)&&a(r,i,{configurable:!0,get:function(){try{return n.call(this).match(s)[1]}catch(e){return""}}})},e8b5:function(e,t,c){var o=c("c6b6");e.exports=Array.isArray||function(e){return"Array"==o(e)}}}]);
//# sourceMappingURL=chunk-6a99d112.e653d0f1.js.map