(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a551501c"],{"129f":function(e,t){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e===1/t:e!=e&&t!=t}},"159b":function(e,t,o){var c=o("da84"),n=o("fdbc"),r=o("17c2"),a=o("9112");for(var i in n){var s=c[i],d=s&&s.prototype;if(d&&d.forEach!==r)try{a(d,"forEach",r)}catch(l){d.forEach=r}}},"17c2":function(e,t,o){"use strict";var c=o("b727").forEach,n=o("a640"),r=n("forEach");e.exports=r?[].forEach:function(e){return c(this,e,arguments.length>1?arguments[1]:void 0)}},"420c":function(e,t,o){"use strict";var c=o("7a23"),n={class:"coupon-banner"},r={class:"container h-100"},a={class:"row justify-content-center align-items-center h-100"},i={class:"col-lg-8"},s=Object(c["createVNode"])("p",{"data-aos":"zoom-in",class:"fs-1 text-start text-lg-left text-white text-shadow"},[Object(c["createVNode"])("strong",null,"還沒領取優惠券？")],-1),d={"data-aos":"zoom-in",class:"text-center fs-1 text-white text-shadow"},l=Object(c["createVNode"])("strong",null,"速速取領專屬優惠券",-1);function u(e,t,o,u,p,b){var f=this,h=Object(c["resolveComponent"])("GetCouponModal");return Object(c["openBlock"])(),Object(c["createBlock"])("div",null,[Object(c["createVNode"])("div",n,[Object(c["createVNode"])("div",r,[Object(c["createVNode"])("div",a,[Object(c["createVNode"])("div",i,[s,Object(c["createVNode"])("p",d,[l,Object(c["createVNode"])("button",{class:"btn btn-primary btn-lg px-6 ms-lg-3 mt-3 mt-lg-0 rounded-pill",type:"button",onClick:t[1]||(t[1]=function(e){return f.$refs.getCouponModal.openModal()})},"領獎去")])])])])]),Object(c["createVNode"])(h,{ref:"getCouponModal"},null,512)])}var p={class:"modal fade",id:"modal",ref:"modal"},b={class:"modal-dialog"},f={class:"modal-content"},h=Object(c["createVNode"])("div",{class:"modal-header text-primary bg-secondary"},[Object(c["createVNode"])("h5",{class:"modal-title"},"領取優惠券"),Object(c["createVNode"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),v={class:"modal-body text-center"},j=Object(c["createVNode"])("h3",{class:"animate__animated animate__heartBeat"},"贈送您 8 折優惠券",-1),O=Object(c["createVNode"])("p",null,[Object(c["createTextVNode"])("記得使用唷！"),Object(c["createVNode"])("span",{class:"material-icons"},"sentiment_very_satisfied")],-1),g={class:"input-group my-3"},m={type:"text",class:"form-control",readonly:"",value:"FRESHBRUNCH333",ref:"couponCode"},N=Object(c["createVNode"])("i",{class:"material-icons"},"content_copy",-1),V=Object(c["createVNode"])("div",{class:"d-flex justify-content-end"},[Object(c["createVNode"])("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"Close")],-1);function y(e,t,o,n,r,a){return Object(c["openBlock"])(),Object(c["createBlock"])("div",p,[Object(c["createVNode"])("div",b,[Object(c["createVNode"])("div",f,[h,Object(c["createVNode"])("div",v,[j,O,Object(c["createVNode"])("div",g,[Object(c["createVNode"])("input",m,null,512),Object(c["createVNode"])("button",{class:"btn btn-primary",type:"button",onClick:t[1]||(t[1]=function(){return a.copyCode&&a.copyCode.apply(a,arguments)})},[N])]),V])])])],512)}var w=o("7c2b"),x=o.n(w),C={data:function(){return{modal:""}},methods:{openModal:function(){this.modal.show()},hideModal:function(){this.modal.hide()},copyCode:function(){this.$refs.couponCode.select(),document.execCommand("Copy")}},mounted:function(){this.modal=new x.a(this.$refs.modal,{backdrop:"static"})}};C.render=y;var k=C,B={components:{GetCouponModal:k}};B.render=u;t["a"]=B},"466d":function(e,t,o){"use strict";var c=o("d784"),n=o("825a"),r=o("50c4"),a=o("1d80"),i=o("8aa5"),s=o("14c3");c("match",(function(e,t,o){return[function(t){var o=a(this),c=void 0==t?void 0:t[e];return void 0!==c?c.call(t,o):new RegExp(t)[e](String(o))},function(e){var c=o(t,this,e);if(c.done)return c.value;var a=n(this),d=String(e);if(!a.global)return s(a,d);var l=a.unicode;a.lastIndex=0;var u,p=[],b=0;while(null!==(u=s(a,d))){var f=String(u[0]);p[b]=f,""===f&&(a.lastIndex=i(d,r(a.lastIndex),l)),b++}return 0===b?null:p}]}))},"4de4":function(e,t,o){"use strict";var c=o("23e7"),n=o("b727").filter,r=o("1dde"),a=r("filter");c({target:"Array",proto:!0,forced:!a},{filter:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}})},"5d74":function(e,t,o){"use strict";o.r(t);o("ac1f"),o("841c");var c=o("7a23"),n=Object(c["createVNode"])("span",{class:"material-icons goToTop p-3 rounded-circle",style:{"font-size":"32px"}},"arrow_upward",-1),r=Object(c["createVNode"])("div",{class:"products-heroheader mb-5"},[Object(c["createVNode"])("div",{class:"container"},[Object(c["createVNode"])("h2",{"data-aos":"flip-up",class:"text-white position-absolute top-50 bg-black px-5 py-2 lh-base"}," 餐點選購 ")])],-1),a={class:"container pb-6"},i={class:"row d-flex-center"},s={class:"col-lg-10"},d={class:"list-group list-group-horizontal fw-bold fs-5 flex-wrap justify-content-center"},l={class:"d-flex justify-content-end mt-5"},u={class:"input-group w-lg-25 position-relative"},p=Object(c["createVNode"])("i",{class:"search-icon material-icons position-absolute top-0 left-0  p-1",style:{"font-size":"32px"}},"search",-1),b={class:"row mt-3 d-flex-center"},f={class:"card h-100 shadow border-0"},h={class:"card-img position-relative"},v={class:"product-content position-absolute"},j={class:"card-body"},O={class:"d-flex justify-content-between align-items-center"},g={class:"content"},m={class:"card-title"},N={class:"me-2"},V={class:"fw-bold card-text text-danger fs-5"},y=Object(c["createVNode"])("i",{class:"material-icons",style:{"font-size":"32px"}},"add_shopping_cart",-1);function w(e,t,o,w,x,C){var k=Object(c["resolveComponent"])("Loading"),B=Object(c["resolveComponent"])("router-link"),L=Object(c["resolveComponent"])("Coupon"),T=Object(c["resolveComponent"])("FooterSection");return Object(c["openBlock"])(),Object(c["createBlock"])("section",null,[x.showTop?(Object(c["openBlock"])(),Object(c["createBlock"])("a",{key:0,href:"#",onClick:t[1]||(t[1]=Object(c["withModifiers"])((function(){return C.goTop&&C.goTop.apply(C,arguments)}),["prevent"]))},[n])):Object(c["createCommentVNode"])("",!0),Object(c["createVNode"])(k,{"is-loading":x.isLoading},null,8,["is-loading"]),r,Object(c["createVNode"])("div",a,[Object(c["createVNode"])("div",i,[Object(c["createVNode"])("div",s,[Object(c["createVNode"])("div",d,[Object(c["createVNode"])("a",{href:"#",class:"list-group-item border-0 px-3 py-2 rounded-pill text-center me-lg-2 me-1 mb-1",onClick:t[2]||(t[2]=Object(c["withModifiers"])((function(e){return x.selectCategory=""}),["prevent"]))}," 全部餐點 "),(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(x.categoryList,(function(e){return Object(c["openBlock"])(),Object(c["createBlock"])("a",{href:"#",key:e,class:"list-group-item border-0 px-3 py-2 rounded-pill text-center me-lg-2 me-1 mb-1",onClick:Object(c["withModifiers"])((function(t){return x.selectCategory=e}),["prevent"])},Object(c["toDisplayString"])(e),9,["onClick"])})),128))])])]),Object(c["createVNode"])("div",l,[Object(c["createVNode"])("div",u,[p,Object(c["withDirectives"])(Object(c["createVNode"])("input",{type:"text",class:"form-control ps-5",placeholder:"請輸入關鍵字","onUpdate:modelValue":t[3]||(t[3]=function(e){return x.search=e})},null,512),[[c["vModelText"],x.search]])])]),Object(c["createVNode"])("div",b,[(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(C.filterProducts,(function(e){return Object(c["openBlock"])(),Object(c["createBlock"])("div",{class:"col-md-4 col-lg-3 mb-4",key:e.id},[Object(c["createVNode"])("div",f,[Object(c["createVNode"])("div",h,[Object(c["createVNode"])("div",v,[Object(c["createVNode"])(B,{to:{path:"/product/".concat(e.id)},class:"text"},{default:Object(c["withCtx"])((function(){return[Object(c["createTextVNode"])(Object(c["toDisplayString"])(e.content),1)]})),_:2},1032,["to"])]),Object(c["createVNode"])("div",{class:"new-img",style:[{"background-image":"url(".concat(e.imageUrl)},{"background-size":"cover","background-position":"20% center"}]},null,4)]),Object(c["createVNode"])("div",j,[Object(c["createVNode"])("div",O,[Object(c["createVNode"])("div",g,[Object(c["createVNode"])("h5",m,[Object(c["createVNode"])("strong",null,Object(c["toDisplayString"])(e.title),1)]),Object(c["createVNode"])("del",N,"原價： "+Object(c["toDisplayString"])(e.origin_price)+" 元",1),Object(c["createVNode"])("p",V,"優惠價："+Object(c["toDisplayString"])(e.price)+" 元",1)]),Object(c["createVNode"])("a",{href:"#",class:"btn addCartBtn",onClick:Object(c["withModifiers"])((function(t){return C.addToCart(e.id)}),["prevent"])},[y],8,["onClick"])])])])])})),128))])]),Object(c["createVNode"])(L),Object(c["createVNode"])(T)])}o("99af"),o("159b"),o("4de4"),o("466d");var x=o("aee4"),C=o("420c"),k=o("8917"),B=o("7ccb"),L={data:function(){return{products:[],isLoading:!1,selectCategory:"",categoryList:[],showTop:!1,search:""}},components:{Coupon:C["a"],FooterSection:k["a"],Loading:B["a"]},methods:{getProducts:function(e){var t=this;this.isLoading=!0;var o="".concat("https://vue3-course-api.hexschool.io/","api/").concat("linachen","/products/all");this.$http.get(o).then((function(e){e.data.success&&(t.isLoading=!1,t.products=e.data.products,t.categories())})).catch((function(e){e&&(t.isLoading=!1,t.$swal({toast:!0,title:"無法取得餐點列表，請聯繫管理員",icon:"error",timer:1500,showConfirmButton:!1,position:"top"}))}))},categories:function(){var e=this;this.products.forEach((function(t){-1===e.categoryList.indexOf(t.category)&&e.categoryList.push(t.category)}))},goTop:function(){window.scroll({top:0,behavior:"smooth"})},addToCart:function(e){var t=this,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;this.isLoading=!0;var c={data:{product_id:e,qty:o}},n="".concat("https://vue3-course-api.hexschool.io/","api/").concat("linachen","/cart");this.$http.post(n,c).then((function(e){e.data.success&&(t.isLoading=!1,t.$swal({toast:!0,title:"成功加入購物車",icon:"success",timer:1500,showConfirmButton:!1,position:"top"}),x["a"].emit("product-cart"))})).catch((function(e){e&&(t.isLoading=!1,t.$swal({toast:!0,title:"無法加入購物車，請聯繫管理員",icon:"error",timer:1500,showConfirmButton:!1,position:"top"}))}))},scrollTop:function(){var e=window.scrollY,t=window.innerHeight;this.showTop=e>t}},computed:{filterProducts:function(){var e=this;return this.search?this.products.filter((function(t){return t.title.match(e.search)})):this.products.filter((function(t){return t.category.match(e.selectCategory)}))}},mounted:function(){this.getProducts(),window.addEventListener("scroll",this.scrollTop)},unmounted:function(){window.removeEventListener("scroll",this.scrollTop)}};L.render=w;t["default"]=L},"7ccb":function(e,t,o){"use strict";var c=o("7a23"),n=Object(c["createVNode"])("div",{class:"loadingio-spinner-ellipsis-rg3crixpxzh"},[Object(c["createVNode"])("div",{class:"ldio-zmt4lrj3aj"},[Object(c["createVNode"])("div"),Object(c["createVNode"])("div"),Object(c["createVNode"])("div"),Object(c["createVNode"])("div"),Object(c["createVNode"])("div")])],-1);function r(e,t,o,r,a,i){var s=Object(c["resolveComponent"])("loading",!0);return Object(c["openBlock"])(),Object(c["createBlock"])(s,{active:e.isLoading,"onUpdate:active":t[1]||(t[1]=function(t){return e.isLoading=t})},{default:Object(c["withCtx"])((function(){return[n]})),_:1},8,["active"])}var a={props:["is-loading"]};a.render=r;t["a"]=a},"841c":function(e,t,o){"use strict";var c=o("d784"),n=o("825a"),r=o("1d80"),a=o("129f"),i=o("14c3");c("search",(function(e,t,o){return[function(t){var o=r(this),c=void 0==t?void 0:t[e];return void 0!==c?c.call(t,o):new RegExp(t)[e](String(o))},function(e){var c=o(t,this,e);if(c.done)return c.value;var r=n(this),s=String(e),d=r.lastIndex;a(d,0)||(r.lastIndex=0);var l=i(r,s);return a(r.lastIndex,d)||(r.lastIndex=d),null===l?-1:l.index}]}))},8917:function(e,t,o){"use strict";var c=o("7a23"),n={class:"text-white bg-primary text-center py-4"},r=Object(c["createVNode"])("h2",{class:"h1 logo text-shadow"},"FRESH BRUNCH",-1),a=Object(c["createVNode"])("p",{class:"mb-0 mt-2"},"© 2021 All Rights Reserved.",-1);function i(e,t){return Object(c["openBlock"])(),Object(c["createBlock"])("footer",n,[r,a])}const s={};s.render=i;t["a"]=s},aee4:function(e,t,o){"use strict";var c=function(e){return{all:e=e||new Map,on:function(t,o){var c=e.get(t);c?c.push(o):e.set(t,[o])},off:function(t,o){var c=e.get(t);c&&(o?c.splice(c.indexOf(o)>>>0,1):e.set(t,[]))},emit:function(t,o){var c=e.get(t);c&&c.slice().map((function(e){e(o)})),(c=e.get("*"))&&c.slice().map((function(e){e(t,o)}))}}};t["a"]=c()},b727:function(e,t,o){var c=o("0366"),n=o("44ad"),r=o("7b0b"),a=o("50c4"),i=o("65f0"),s=[].push,d=function(e){var t=1==e,o=2==e,d=3==e,l=4==e,u=6==e,p=7==e,b=5==e||u;return function(f,h,v,j){for(var O,g,m=r(f),N=n(m),V=c(h,v,3),y=a(N.length),w=0,x=j||i,C=t?x(f,y):o||p?x(f,0):void 0;y>w;w++)if((b||w in N)&&(O=N[w],g=V(O,w,m),e))if(t)C[w]=g;else if(g)switch(e){case 3:return!0;case 5:return O;case 6:return w;case 2:s.call(C,O)}else switch(e){case 4:return!1;case 7:s.call(C,O)}return u?-1:d||l?l:C}};e.exports={forEach:d(0),map:d(1),filter:d(2),some:d(3),every:d(4),find:d(5),findIndex:d(6),filterOut:d(7)}}}]);
//# sourceMappingURL=chunk-a551501c.c2938777.js.map