(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-099f9d4c"],{"1dde":function(t,e,o){var c=o("d039"),r=o("b622"),n=o("2d00"),a=r("species");t.exports=function(t){return n>=51||!c((function(){var e=[],o=e.constructor={};return o[a]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"65f0":function(t,e,o){var c=o("861d"),r=o("e8b5"),n=o("b622"),a=n("species");t.exports=function(t,e){var o;return r(t)&&(o=t.constructor,"function"!=typeof o||o!==Array&&!r(o.prototype)?c(o)&&(o=o[a],null===o&&(o=void 0)):o=void 0),new(void 0===o?Array:o)(0===e?0:e)}},8418:function(t,e,o){"use strict";var c=o("c04e"),r=o("9bf2"),n=o("5c6c");t.exports=function(t,e,o){var a=c(e);a in t?r.f(t,a,n(0,o)):t[a]=o}},"99af":function(t,e,o){"use strict";var c=o("23e7"),r=o("d039"),n=o("e8b5"),a=o("861d"),i=o("7b0b"),s=o("50c4"),l=o("8418"),d=o("65f0"),u=o("1dde"),b=o("b622"),p=o("2d00"),f=b("isConcatSpreadable"),v=9007199254740991,g="Maximum allowed index exceeded",h=p>=51||!r((function(){var t=[];return t[f]=!1,t.concat()[0]!==t})),m=u("concat"),j=function(t){if(!a(t))return!1;var e=t[f];return void 0!==e?!!e:n(t)},O=!h||!m;c({target:"Array",proto:!0,forced:O},{concat:function(t){var e,o,c,r,n,a=i(this),u=d(a,0),b=0;for(e=-1,c=arguments.length;e<c;e++)if(n=-1===e?a:arguments[e],j(n)){if(r=s(n.length),b+r>v)throw TypeError(g);for(o=0;o<r;o++,b++)o in n&&l(u,b,n[o])}else{if(b>=v)throw TypeError(g);l(u,b++,n)}return u.length=b,u}})},aee4:function(t,e,o){"use strict";var c=function(t){return{all:t=t||new Map,on:function(e,o){var c=t.get(e);c?c.push(o):t.set(e,[o])},off:function(e,o){var c=t.get(e);c&&(o?c.splice(c.indexOf(o)>>>0,1):t.set(e,[]))},emit:function(e,o){var c=t.get(e);c&&c.slice().map((function(t){t(o)})),(c=t.get("*"))&&c.slice().map((function(t){t(e,o)}))}}};e["a"]=c()},de8a:function(t,e,o){"use strict";o.r(e);var c=o("7a23"),r={class:"container position-relative"},n=Object(c["createVNode"])("button",{class:"navbar-toggler px-0",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbar","aria-controls":"navbarTogglerDemo03","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(c["createVNode"])("span",{class:"material-icons",style:{"font-size":"28px"}},"menu")],-1),a={class:"dropdown cart-icon order-2"},i={key:0,class:"cart-number rounded-pill bg-danger text-white position-absolute px-2"},s={class:"collapse navbar-collapse",id:"navbar"},l={class:"navbar-nav align-items-center fs-5 ms-auto mb-2 mb-lg-0"},d=Object(c["createTextVNode"])("關於我們"),u=Object(c["createTextVNode"])("餐點選購");function b(t,e,o,b,p,f){var v=Object(c["resolveComponent"])("router-link"),g=Object(c["resolveComponent"])("DropDown"),h=Object(c["resolveComponent"])("router-view");return Object(c["openBlock"])(),Object(c["createBlock"])(c["Fragment"],null,[Object(c["createVNode"])("nav",{class:["navbar navbar-expand-lg opacity-90 fixed-top",[p.classList["bg-color"],p.classList["navbar-color"]]]},[Object(c["createVNode"])("div",r,[n,Object(c["createVNode"])(v,{class:"navbar-brand me-0 me-lg-1 flex-fill text-center text-lg-start",to:"/"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])("h1",{class:["logo m-0",p.classList["text-color"]]},"FRESHBRUNCH",2)]})),_:1}),Object(c["createVNode"])("div",a,[Object(c["createVNode"])("a",{href:"#",class:["btn btn-secondary position-relative border-0 dropdown-btn px-2",p.classList["bg-color"]],type:"button","data-bs-toggle":"dropdown","data-bs-auto-close":"outside"},[Object(c["createVNode"])("i",{class:["material-icons",p.classList["i-color"]],style:{"font-size":"28px"}},"shopping_cart",2),p.cart.carts?(Object(c["openBlock"])(),Object(c["createBlock"])("div",i,Object(c["toDisplayString"])(p.cart.carts.length),1)):Object(c["createCommentVNode"])("",!0)],2),Object(c["createVNode"])(g,{cart:p.cart,onGetCart:f.getCart,ref:"dropdown"},null,8,["cart","onGetCart"])]),Object(c["createVNode"])("div",s,[Object(c["createVNode"])("div",l,[Object(c["createVNode"])(v,{class:"nav-link",to:"/about"},{default:Object(c["withCtx"])((function(){return[d]})),_:1}),Object(c["createVNode"])(v,{class:"nav-link",to:"/products"},{default:Object(c["withCtx"])((function(){return[u]})),_:1})])])])],2),Object(c["createVNode"])(h)],64)}o("99af");var p=o("aee4"),f={class:"dropdown-menu dropdown-menu-end mt-2 p-3",style:{"min-width":"400px"},ref:"dropdown"},v={key:0},g={class:"d-flex justify-content-between align-items-center"},h={class:"cart-content d-flex"},m=Object(c["createVNode"])("i",{class:"btn-outline-danger border-0 rounded-2 material-icons p-1"},"delete",-1),j={class:"cart-item ms-2"},O={class:"fs-6 m-0"},w={class:"fs-6"},y={class:"input-group input-group-sm w-40"},x=Object(c["createVNode"])("i",{class:"material-icons",style:{width:"24px"}},"add",-1),C={class:"d-grid gap-2"},V={key:1},N=Object(c["createVNode"])("p",{class:"text-center"},"購物車是空的唷！",-1),k={class:"d-grid gap-2"},L=Object(c["createTextVNode"])("訂餐去");function B(t,e,o,r,n,a){var i=Object(c["resolveComponent"])("router-link");return Object(c["openBlock"])(),Object(c["createBlock"])("div",f,[n.cartList.carts&&0!==n.cartList.carts.length?(Object(c["openBlock"])(),Object(c["createBlock"])("div",v,[(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(n.cartList.carts,(function(e){return Object(c["openBlock"])(),Object(c["createBlock"])("div",{key:e.id+"1",class:"mb-3"},[Object(c["createVNode"])("div",g,[Object(c["createVNode"])("div",h,[Object(c["createVNode"])("a",{href:"#",onClick:Object(c["withModifiers"])((function(t){return a.deleteCart(e.id)}),["prevent"]),class:" d-flex-center align-items-center"},[m],8,["onClick"]),Object(c["createVNode"])("div",{style:[{"background-image":"url(".concat(e.product.imageUrl)},{"background-size":"cover","background-position":"center center",height:"50px",width:"80px"}]},null,4),Object(c["createVNode"])("div",j,[Object(c["createVNode"])("h4",O,Object(c["toDisplayString"])(e.product.title),1),Object(c["createVNode"])("small",w,"$"+Object(c["toDisplayString"])(t.$toCurrency("".concat(e.total))),1)])]),Object(c["createVNode"])("div",y,[Object(c["createVNode"])("button",{class:["btn btn-sm btn-outline-primary",{disabled:e.qty<=1}],type:"button"},[Object(c["createVNode"])("i",{class:"material-icons",onClick:function(t){return a.editCart(e,e.qty-1)},style:{width:"24px"}},"remove",8,["onClick"])],2),Object(c["withDirectives"])(Object(c["createVNode"])("input",{type:"number",min:"1",class:"form-control qty-input",disabled:"","onUpdate:modelValue":function(t){return e.qty=t}},null,8,["onUpdate:modelValue"]),[[c["vModelText"],e.qty,void 0,{number:!0}]]),Object(c["createVNode"])("button",{class:"btn btn-sm btn-outline-primary",type:"button",onClick:function(t){return a.editCart(e,e.qty+1)}},[x],8,["onClick"])])])])})),128)),Object(c["createVNode"])("div",C,[Object(c["createVNode"])("button",{class:"btn btn-primary",onClick:e[1]||(e[1]=function(){return a.goToCart&&a.goToCart.apply(a,arguments)})},"結帳去")])])):(Object(c["openBlock"])(),Object(c["createBlock"])("div",V,[N,Object(c["createVNode"])("div",k,[Object(c["createVNode"])(i,{to:"/products",class:"btn btn-primary"},{default:Object(c["withCtx"])((function(){return[L]})),_:1})])]))],512)}var D={data:function(){return{cartList:{},isLoading:!1,dropdown:""}},props:["cart"],emits:["getCart"],methods:{editCart:function(t,e){var o=this;this.isLoading=!0;var c={data:{product_id:t.product.id,qty:e}},r="".concat("https://vue3-course-api.hexschool.io/","api/").concat("linachen","/cart/").concat(t.id);this.$http.put(r,c).then((function(t){t.data.success&&(o.isLoading=!1,p["a"].emit("product-cart"))})).catch((function(t){t&&(o.isLoading=!1,o.$swal({toast:!0,title:"無法編輯餐點數量，請聯繫管理員",icon:"error",timer:1500,showConfirmButton:!1,position:"top"}))}))},deleteCart:function(t){var e=this;this.isLoading=!0;var o="".concat("https://vue3-course-api.hexschool.io/","api/").concat("linachen","/cart/").concat(t);this.$http.delete(o).then((function(t){t.data.success&&(e.isLoading=!1,e.$swal({toast:!0,title:"已成功刪除餐點",icon:"success",timer:1500,showConfirmButton:!1,position:"top"}),e.$emit("getCart"),p["a"].emit("product-cart"))})).catch((function(t){t&&(e.isLoading=!1,e.$swal({toast:!0,title:"無法刪除餐點，請聯繫管理員",icon:"error",timer:1500,showConfirmButton:!1,position:"top"}))}))},goToCart:function(){this.$router.push("/cart")}},watch:{cart:function(){this.cartList=this.cart}}};D.render=B;var $=D,T={data:function(){return{cart:{carts:{}},classList:{"bg-color":"bg-secondary","text-color":"text-primary","i-color":""}}},components:{DropDown:$},methods:{getCart:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("linachen","/cart");this.$http.get(e).then((function(e){e.data.success&&(t.cart=e.data.data)})).catch((function(e){e&&(t.isLoading=!1,t.$swal({toast:!0,title:"無法取得購物車列表，請聯繫管理員",icon:"error",timer:1500,showConfirmButton:!1,position:"top"}))}))},toggleDropDown:function(){this.$refs.dropdown.toggleDropDown()},scrollFunction:function(){var t=window.scrollY,e=window.innerHeight;this.classList=t>e?{"bg-color":"bg-primary","navbar-color":"navbar-dark","text-color":"","i-color":"text-white"}:{"bg-color":"bg-secondary","navbar-color":"navbar-light","text-color":"text-primary","i-color":""}}},mounted:function(){var t=this;this.getCart(),p["a"].on("product-cart",(function(){t.getCart()})),window.addEventListener("scroll",this.scrollFunction)},unmounted:function(){var t=this;window.removeEventListener("scroll",this.scrollFunction),p["a"].off("product-cart",(function(){t.getCart()}))}};T.render=b;e["default"]=T},e8b5:function(t,e,o){var c=o("c6b6");t.exports=Array.isArray||function(t){return"Array"==c(t)}}}]);
//# sourceMappingURL=chunk-099f9d4c.fb722d98.js.map