(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-aa689318"],{"1dde":function(t,e,o){var c=o("d039"),r=o("b622"),a=o("2d00"),n=r("species");t.exports=function(t){return a>=51||!c((function(){var e=[],o=e.constructor={};return o[n]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"65f0":function(t,e,o){var c=o("861d"),r=o("e8b5"),a=o("b622"),n=a("species");t.exports=function(t,e){var o;return r(t)&&(o=t.constructor,"function"!=typeof o||o!==Array&&!r(o.prototype)?c(o)&&(o=o[n],null===o&&(o=void 0)):o=void 0),new(void 0===o?Array:o)(0===e?0:e)}},7475:function(t,e,o){"use strict";e["a"]={save:function(t){var e=JSON.stringify(t);localStorage.setItem("brunchFavorite",e)},get:function(){return JSON.parse(localStorage.getItem("brunchFavorite"))}}},8418:function(t,e,o){"use strict";var c=o("c04e"),r=o("9bf2"),a=o("5c6c");t.exports=function(t,e,o){var n=c(e);n in t?r.f(t,n,a(0,o)):t[n]=o}},"99af":function(t,e,o){"use strict";var c=o("23e7"),r=o("d039"),a=o("e8b5"),n=o("861d"),i=o("7b0b"),s=o("50c4"),l=o("8418"),d=o("65f0"),u=o("1dde"),b=o("b622"),p=o("2d00"),f=b("isConcatSpreadable"),v=9007199254740991,g="Maximum allowed index exceeded",m=p>=51||!r((function(){var t=[];return t[f]=!1,t.concat()[0]!==t})),h=u("concat"),O=function(t){if(!n(t))return!1;var e=t[f];return void 0!==e?!!e:a(t)},j=!m||!h;c({target:"Array",proto:!0,forced:j},{concat:function(t){var e,o,c,r,a,n=i(this),u=d(n,0),b=0;for(e=-1,c=arguments.length;e<c;e++)if(a=-1===e?n:arguments[e],O(a)){if(r=s(a.length),b+r>v)throw TypeError(g);for(o=0;o<r;o++,b++)o in a&&l(u,b,a[o])}else{if(b>=v)throw TypeError(g);l(u,b++,a)}return u.length=b,u}})},aee4:function(t,e,o){"use strict";var c=function(t){return{all:t=t||new Map,on:function(e,o){var c=t.get(e);c?c.push(o):t.set(e,[o])},off:function(e,o){var c=t.get(e);c&&(o?c.splice(c.indexOf(o)>>>0,1):t.set(e,[]))},emit:function(e,o){var c=t.get(e);c&&c.slice().map((function(t){t(o)})),(c=t.get("*"))&&c.slice().map((function(t){t(e,o)}))}}};e["a"]=c()},de8a:function(t,e,o){"use strict";o.r(e);var c=o("7a23"),r={class:"container position-relative"},a=Object(c["createVNode"])("button",{class:"navbar-toggler px-0",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbar","aria-controls":"navbarTogglerDemo03","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(c["createVNode"])("span",{class:"material-icons",style:{"font-size":"28px"}},"menu")],-1),n={class:"dropdown cart-icon order-2 align-items-center d-flex"},i={key:0,class:"favorite-number rounded-pill bg-danger text-white position-absolute px-2"},s={key:0,class:"cart-number rounded-pill bg-danger text-white position-absolute px-2"},l={class:"collapse navbar-collapse",id:"navbar"},d={class:"navbar-nav align-items-center fs-5 ms-auto mb-2 mb-lg-0"},u=Object(c["createTextVNode"])("關於我們"),b=Object(c["createTextVNode"])("餐點選購");function p(t,e,o,p,f,v){var g=Object(c["resolveComponent"])("router-link"),m=Object(c["resolveComponent"])("DropDown"),h=Object(c["resolveComponent"])("router-view");return Object(c["openBlock"])(),Object(c["createBlock"])(c["Fragment"],null,[Object(c["createVNode"])("nav",{class:["navbar navbar-expand-lg opacity-90 fixed-top",[f.classList["bg-color"],f.classList["navbar-color"]]]},[Object(c["createVNode"])("div",r,[a,Object(c["createVNode"])(g,{class:"navbar-brand me-0 me-lg-1 flex-fill text-center text-lg-start",to:"/"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])("h1",{class:["logo mb-0 pe-5 pe-md-0",f.classList["text-color"]]},"FRESHBRUNCH",2)]})),_:1}),Object(c["createVNode"])("div",n,[Object(c["createVNode"])(g,{to:"/favorite",class:"d-inline-block favorite-icon position-relative"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])("i",{class:["material-icons",f.classList["i-color"]],style:{"font-size":"32px"}}," favorite ",2),f.favorites?(Object(c["openBlock"])(),Object(c["createBlock"])("div",i,Object(c["toDisplayString"])(f.favorites.length),1)):Object(c["createCommentVNode"])("",!0)]})),_:1}),Object(c["createVNode"])("a",{href:"#",class:["position-relative border-0 dropdown-btn px-2",f.classList["bg-color"]],type:"button","data-bs-toggle":"dropdown","data-bs-display":"static"},[Object(c["createVNode"])("i",{class:["material-icons",f.classList["i-color"]],style:{"font-size":"28px"}},"shopping_cart",2),f.cart.carts?(Object(c["openBlock"])(),Object(c["createBlock"])("div",s,Object(c["toDisplayString"])(f.cart.carts.length),1)):Object(c["createCommentVNode"])("",!0)],2),Object(c["createVNode"])(m,{cart:f.cart,onGetCart:v.getCart},null,8,["cart","onGetCart"])]),Object(c["createVNode"])("div",l,[Object(c["createVNode"])("div",d,[Object(c["createVNode"])(g,{class:"nav-link",to:"/about"},{default:Object(c["withCtx"])((function(){return[u]})),_:1}),Object(c["createVNode"])(g,{class:"nav-link",to:"/products"},{default:Object(c["withCtx"])((function(){return[b]})),_:1})])])])],2),Object(c["createVNode"])(h)],64)}o("99af");var f=o("aee4"),v={class:"dropdown-menu dropdown-menu-end mt-2 p-3",style:{"min-width":"400px"}},g={key:0},m={class:"d-flex justify-content-between align-items-center"},h={class:"cart-content d-flex align-items-center"},O=Object(c["createVNode"])("i",{class:"btn-outline-danger border-0 rounded-2 material-icons p-1"},"delete",-1),j={class:"cart-item ms-2"},x={class:"d-block fs-6"},w={class:"input-group input-group-sm w-35"},y=Object(c["createVNode"])("i",{class:"material-icons",style:{width:"24px"}},"add",-1),N={class:"d-grid gap-2"},V=Object(c["createTextVNode"])("結帳去"),k={key:1},C=Object(c["createVNode"])("p",{class:"text-center"},"購物車是空的唷！",-1),L={class:"d-grid gap-2"},B=Object(c["createTextVNode"])("訂餐去");function D(t,e,o,r,a,n){var i=Object(c["resolveComponent"])("router-link");return Object(c["openBlock"])(),Object(c["createBlock"])("div",v,[a.cartList.carts&&0!==a.cartList.carts.length?(Object(c["openBlock"])(),Object(c["createBlock"])("div",g,[(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(a.cartList.carts,(function(e){return Object(c["openBlock"])(),Object(c["createBlock"])("div",{key:e.id+"1",class:"mb-3"},[Object(c["createVNode"])("div",m,[Object(c["createVNode"])("div",h,[Object(c["createVNode"])("a",{href:"#",onClick:Object(c["withModifiers"])((function(t){return n.deleteCart(e.id)}),["prevent"]),class:" d-flex-center align-items-center"},[O],8,["onClick"]),Object(c["createVNode"])("div",{style:[{"background-image":"url(".concat(e.product.imageUrl)},{"background-size":"cover","background-position":"center center",height:"50px",width:"70px"}]},null,4),Object(c["createVNode"])("div",j,[Object(c["createVNode"])(i,{to:{path:"/product/".concat(e.product.id)},class:"cartProduct fs-6 m-0"},{default:Object(c["withCtx"])((function(){return[Object(c["createTextVNode"])(Object(c["toDisplayString"])(e.product.title),1)]})),_:2},1032,["to"]),Object(c["createVNode"])("small",x,"$"+Object(c["toDisplayString"])(t.$toCurrency("".concat(e.total))),1)])]),Object(c["createVNode"])("div",w,[Object(c["createVNode"])("button",{class:["btn btn-sm btn-outline-primary",{disabled:e.qty<=1}],type:"button"},[Object(c["createVNode"])("i",{class:"material-icons",onClick:function(t){return n.editCart(e,e.qty-1)},style:{width:"24px"}},"remove",8,["onClick"])],2),Object(c["withDirectives"])(Object(c["createVNode"])("input",{type:"number",min:"1",class:"form-control qty-input",disabled:"","onUpdate:modelValue":function(t){return e.qty=t}},null,8,["onUpdate:modelValue"]),[[c["vModelText"],e.qty,void 0,{number:!0}]]),Object(c["createVNode"])("button",{class:"btn btn-sm btn-outline-primary",type:"button",onClick:function(t){return n.editCart(e,e.qty+1)}},[y],8,["onClick"])])])])})),128)),Object(c["createVNode"])("div",N,[Object(c["createVNode"])(i,{to:"/cart",class:"btn btn-primary"},{default:Object(c["withCtx"])((function(){return[V]})),_:1})])])):(Object(c["openBlock"])(),Object(c["createBlock"])("div",k,[C,Object(c["createVNode"])("div",L,[Object(c["createVNode"])(i,{to:"/products",class:"btn btn-primary"},{default:Object(c["withCtx"])((function(){return[B]})),_:1})])]))])}var S={data:function(){return{cartList:{},isLoading:!1}},props:["cart"],emits:["getCart"],methods:{editCart:function(t,e){var o=this;this.isLoading=!0;var c={data:{product_id:t.product.id,qty:e}},r="".concat("https://vue3-course-api.hexschool.io/","api/").concat("linachen","/cart/").concat(t.id);this.$http.put(r,c).then((function(t){t.data.success&&(o.isLoading=!1,f["a"].emit("product-cart"))})).catch((function(t){t&&(o.isLoading=!1,o.$swal({toast:!0,title:"無法編輯餐點數量，請聯繫管理員",icon:"error",timer:1500,showConfirmButton:!1,position:"top"}))}))},deleteCart:function(t){var e=this;this.isLoading=!0;var o="".concat("https://vue3-course-api.hexschool.io/","api/").concat("linachen","/cart/").concat(t);this.$http.delete(o).then((function(t){t.data.success&&(e.isLoading=!1,e.$swal({toast:!0,title:"已成功刪除餐點",icon:"success",timer:1500,showConfirmButton:!1,position:"top"}),e.$emit("getCart"),f["a"].emit("product-cart"))})).catch((function(t){t&&(e.isLoading=!1,e.$swal({toast:!0,title:"無法刪除餐點，請聯繫管理員",icon:"error",timer:1500,showConfirmButton:!1,position:"top"}))}))}},watch:{cart:function(){this.cartList=this.cart}}};S.render=D;var T=S,$=o("7475"),_={data:function(){return{cart:{carts:{}},classList:{"bg-color":"bg-secondary","text-color":"text-primary","i-color":""},favorites:$["a"].get()||[]}},components:{DropDown:T},methods:{getCart:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("linachen","/cart");this.$http.get(e).then((function(e){e.data.success&&(t.cart=e.data.data)})).catch((function(e){e&&(t.isLoading=!1,t.$swal({toast:!0,title:"無法取得購物車列表，請聯繫管理員",icon:"error",timer:1500,showConfirmButton:!1,position:"top"}))}))},scrollFunction:function(){var t=window.scrollY,e=window.innerHeight;this.classList=t>e?{"bg-color":"bg-primary","navbar-color":"navbar-dark","text-color":"","i-color":"text-white"}:{"bg-color":"bg-secondary","navbar-color":"navbar-light","text-color":"text-primary","i-color":""}}},mounted:function(){var t=this;this.getCart(),f["a"].on("product-cart",(function(){return t.getCart()})),f["a"].on("favorite",(function(){t.favorites=$["a"].get()})),window.addEventListener("scroll",this.scrollFunction)},unmounted:function(){var t=this;window.removeEventListener("scroll",this.scrollFunction),f["a"].off("product-cart",(function(){return t.getCart()})),f["a"].off("favorite",(function(){t.favorites=$["a"].get()}))}};_.render=p;e["default"]=_},e8b5:function(t,e,o){var c=o("c6b6");t.exports=Array.isArray||function(t){return"Array"==c(t)}}}]);
//# sourceMappingURL=chunk-aa689318.1089b311.js.map