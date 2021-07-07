(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fc26d9a6"],{1799:function(e,t,c){"use strict";var o=c("7a23"),a={class:"d-flex-center"},r={"aria-label":"Page navigation"},n={class:"pagination"};function i(e,t,c,i,l,s){return Object(o["openBlock"])(),Object(o["createBlock"])("div",a,[Object(o["createVNode"])("nav",r,[Object(o["createVNode"])("ul",n,[Object(o["createVNode"])("li",{class:["page-item",{disabled:!c.pages.has_pre}]},[Object(o["createVNode"])("a",{class:"page-link",href:"#",onClick:t[1]||(t[1]=Object(o["withModifiers"])((function(t){return e.$emit("getList",c.pages.current_page-1)}),["prevent"]))},"上一頁")],2),(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(c.pages.total_pages,(function(t){return Object(o["openBlock"])(),Object(o["createBlock"])("li",{class:["page-item",{active:c.pages.current_page===t}],key:t},[Object(o["createVNode"])("a",{class:"page-link",href:"#",onClick:Object(o["withModifiers"])((function(c){return e.$emit("getList",t)}),["prevent"])},Object(o["toDisplayString"])(t),9,["onClick"])],2)})),128)),Object(o["createVNode"])("li",{class:["page-item",{disabled:!c.pages.has_next}]},[Object(o["createVNode"])("a",{class:"page-link",href:"#",onClick:t[2]||(t[2]=Object(o["withModifiers"])((function(t){return e.$emit("getList",c.pages.current_page+1)}),["prevent"]))},"下一頁")],2)])])])}var l={props:["pages"]};l.render=i;t["a"]=l},7629:function(e,t,c){"use strict";c.r(t);c("b0c0");var o=c("7a23"),a={class:"container py-3 mt-5"},r=Object(o["createVNode"])("h1",{class:"text-center mb-4 text-primary fs-2"},[Object(o["createVNode"])("strong",{class:"border-bottom border-primary d-inline-block border-4 pb-2"},"訂單列表")],-1),n={class:"d-flex justify-content-end"},i={class:"table mt-3"},l=Object(o["createVNode"])("thead",null,[Object(o["createVNode"])("tr",{class:"text-center"},[Object(o["createVNode"])("th",{scope:"col"}),Object(o["createVNode"])("th",{scope:"col"},"訂單編號"),Object(o["createVNode"])("th",{scope:"col"},"訂購人姓名"),Object(o["createVNode"])("th",{scope:"col"},"訂購人 Email"),Object(o["createVNode"])("th",{scope:"col"},"訂購日期"),Object(o["createVNode"])("th",{scope:"col"},"是否付款"),Object(o["createVNode"])("th",{scope:"col"},"編輯")])],-1),s=Object(o["createVNode"])("i",{class:"btn-outline-danger border-0 rounded-2 material-icons p-1"},"delete",-1);function d(e,t,c,d,b,p){var u=Object(o["resolveComponent"])("loading"),O=Object(o["resolveComponent"])("pagination"),m=Object(o["resolveComponent"])("editModal");return Object(o["openBlock"])(),Object(o["createBlock"])("div",null,[Object(o["createVNode"])(u,{active:b.isLoading,"onUpdate:active":t[1]||(t[1]=function(e){return b.isLoading=e})},null,8,["active"]),Object(o["createVNode"])("div",a,[r,Object(o["createVNode"])("div",n,[b.orderList.length>=2?(Object(o["openBlock"])(),Object(o["createBlock"])("button",{key:0,class:"btn btn-danger",onClick:t[2]||(t[2]=function(){return p.deleteAll&&p.deleteAll.apply(p,arguments)})},"刪除所有訂單")):Object(o["createCommentVNode"])("",!0)]),Object(o["createVNode"])("table",i,[l,Object(o["createVNode"])("tbody",null,[(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(b.orderList,(function(e){return Object(o["openBlock"])(),Object(o["createBlock"])("tr",{key:e.id},[Object(o["createVNode"])("td",null,[Object(o["createVNode"])("a",{href:"#",onClick:Object(o["withModifiers"])((function(t){return p.deleteOrder(e.id)}),["prevent"]),class:"d-flex-center align-items-center"},[s],8,["onClick"])]),Object(o["createVNode"])("td",null,Object(o["toDisplayString"])(e.id),1),Object(o["createVNode"])("td",null,Object(o["toDisplayString"])(e.user.name),1),Object(o["createVNode"])("td",null,Object(o["toDisplayString"])(e.user.email),1),Object(o["createVNode"])("td",null,Object(o["toDisplayString"])(new Date(1e3*e.create_at).getFullYear())+"/"+Object(o["toDisplayString"])(new Date(1e3*e.create_at).getMonth()+1)+"/"+Object(o["toDisplayString"])(new Date(1e3*e.create_at).getDate()),1),Object(o["createVNode"])("td",null,Object(o["toDisplayString"])(e.is_paid?"已付款":"未付款"),1),Object(o["createVNode"])("td",null,[Object(o["createVNode"])("button",{class:"btn btn-primary me-2",type:"button",onClick:function(t){return p.editOrder(e)}},"編輯",8,["onClick"])])])})),128))])]),Object(o["createVNode"])(O,{pages:b.pagination,onGetList:p.getOrder},null,8,["pages","onGetList"]),Object(o["createVNode"])(m,{ref:"editModal","temp-order":b.tempOrder,onGetOrder:p.getOrder},null,8,["temp-order","onGetOrder"])])])}c("99af");var b=c("1799"),p={class:"modal fade",id:"modal",ref:"modal"},u={class:"modal-dialog"},O={class:"modal-content"},m=Object(o["createVNode"])("div",{class:"modal-header"},[Object(o["createVNode"])("h5",{class:"modal-title"},"訂單編輯"),Object(o["createVNode"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),h={class:"modal-body"},j={class:"mb-3"},f=Object(o["createVNode"])("label",{for:"orderId",class:"form-label"},"訂單編號",-1),g={class:"accordion accordion-flush",id:"orderAccordion"},V={class:"accordion-item"},N=Object(o["createVNode"])("h2",{class:"accordion-header",id:"flush-headingOne"},[Object(o["createVNode"])("button",{class:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#flush-collapseOne","aria-expanded":"false","aria-controls":"flush-collapseOne"}," 訂購人資訊 ")],-1),v={id:"flush-collapseOne",class:"accordion-collapse collapse","aria-labelledby":"flush-headingOne","data-bs-parent":"#orderAccordion"},y={class:"accordion-body"},k={class:"mb-3"},w=Object(o["createVNode"])("label",{for:"orderName",class:"form-label"},"訂單人姓名",-1),x={class:"mb-3"},L=Object(o["createVNode"])("label",{for:"email",class:"form-label"},"訂單人Email",-1),C={class:"mb-3"},M=Object(o["createVNode"])("label",{for:"tel",class:"form-label"},"訂單人電話",-1),B={class:"mb-3"},D=Object(o["createVNode"])("label",{for:"address",class:"form-label"},"訂單人地址",-1),$={class:"mb-3"},T=Object(o["createVNode"])("label",{for:"message",class:"form-label"},"留言",-1),_={class:"accordion-item"},S=Object(o["createVNode"])("h2",{class:"accordion-header",id:"flush-headingTwo"},[Object(o["createVNode"])("button",{class:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#flush-collapseTwo","aria-expanded":"false","aria-controls":"flush-collapseTwo"}," 訂單資訊 ")],-1),U={id:"flush-collapseTwo",class:"accordion-collapse collapse","aria-labelledby":"flush-headingTwo","data-bs-parent":"#orderAccordion"},A={class:"accordion-body"},F={class:"mb-3"},G=Object(o["createVNode"])("label",{for:"total",class:"form-label"},[Object(o["createTextVNode"])("訂單總額 "),Object(o["createVNode"])("small",{class:"text-danger"},"*必填")],-1),J={class:"form-check"},P=Object(o["createVNode"])("label",{class:"form-check-label",for:"isPaid"}," 是否付款 ",-1),E={class:"modal-footer"},I=Object(o["createVNode"])("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"取消",-1);function Y(e,t,c,a,r,n){var i=Object(o["resolveComponent"])("loading");return Object(o["openBlock"])(),Object(o["createBlock"])("div",null,[Object(o["createVNode"])(i,{active:r.isLoading,"onUpdate:active":t[1]||(t[1]=function(e){return r.isLoading=e})},null,8,["active"]),Object(o["createVNode"])("div",p,[Object(o["createVNode"])("div",u,[Object(o["createVNode"])("div",O,[m,Object(o["createVNode"])("div",h,[Object(o["createVNode"])("div",j,[f,Object(o["withDirectives"])(Object(o["createVNode"])("input",{type:"text",class:"form-control",id:"orderId",disabled:"","onUpdate:modelValue":t[2]||(t[2]=function(e){return r.temp.id=e})},null,512),[[o["vModelText"],r.temp.id]])]),Object(o["createVNode"])("div",g,[Object(o["createVNode"])("div",V,[N,Object(o["createVNode"])("div",v,[Object(o["createVNode"])("div",y,[Object(o["createVNode"])("div",k,[w,Object(o["withDirectives"])(Object(o["createVNode"])("input",{type:"text",class:"form-control",id:"orderName","onUpdate:modelValue":t[3]||(t[3]=function(e){return r.temp.user.name=e})},null,512),[[o["vModelText"],r.temp.user.name]])]),Object(o["createVNode"])("div",x,[L,Object(o["withDirectives"])(Object(o["createVNode"])("input",{type:"text",class:"form-control",id:"email","onUpdate:modelValue":t[4]||(t[4]=function(e){return r.temp.user.email=e})},null,512),[[o["vModelText"],r.temp.user.email]])]),Object(o["createVNode"])("div",C,[M,Object(o["withDirectives"])(Object(o["createVNode"])("input",{type:"tel",class:"form-control",id:"tel","onUpdate:modelValue":t[5]||(t[5]=function(e){return r.temp.user.tel=e})},null,512),[[o["vModelText"],r.temp.user.tel]])]),Object(o["createVNode"])("div",B,[D,Object(o["withDirectives"])(Object(o["createVNode"])("input",{type:"text",class:"form-control",id:"address","onUpdate:modelValue":t[6]||(t[6]=function(e){return r.temp.user.address=e})},null,512),[[o["vModelText"],r.temp.user.address]])]),Object(o["createVNode"])("div",$,[T,Object(o["withDirectives"])(Object(o["createVNode"])("input",{type:"text",class:"form-control",id:"message","onUpdate:modelValue":t[7]||(t[7]=function(e){return r.temp.message=e}),disabled:""},null,512),[[o["vModelText"],r.temp.message]])])])])]),Object(o["createVNode"])("div",_,[S,Object(o["createVNode"])("div",U,[Object(o["createVNode"])("div",A,[Object(o["createVNode"])("div",F,[G,Object(o["withDirectives"])(Object(o["createVNode"])("input",{type:"number",class:"form-control",id:"total","onUpdate:modelValue":t[8]||(t[8]=function(e){return r.temp.total=e})},null,512),[[o["vModelText"],r.temp.total,void 0,{number:!0}]])]),Object(o["createVNode"])("div",J,[Object(o["withDirectives"])(Object(o["createVNode"])("input",{class:"form-check-input",type:"checkbox",value:"",id:"isPaid","onUpdate:modelValue":t[9]||(t[9]=function(e){return r.temp.is_paid=e})},null,512),[[o["vModelCheckbox"],r.temp.is_paid]]),P])])])])])]),Object(o["createVNode"])("div",E,[I,Object(o["createVNode"])("button",{type:"button",class:"btn btn-primary",onClick:t[10]||(t[10]=function(){return n.editOrder&&n.editOrder.apply(n,arguments)})},"確認")])])])],512)])}var q=c("8010"),z={data:function(){return{modal:"",temp:{user:{}},isLoading:!1}},mixins:[q["a"]],emits:["getOrder"],props:["tempOrder"],methods:{editOrder:function(){var e=this;if(this.isLoading=!0,!this.temp.total)return this.isLoading=!1,void this.$swal({toast:!0,title:"必填項目都要填寫唷！",icon:"error",timer:1500,showConfirmButton:!1,position:"top"});var t="".concat("https://vue3-course-api.hexschool.io/","api/").concat("linachen","/admin/order/").concat(this.temp.id);this.$http.put(t,{data:this.temp}).then((function(t){t.data.success&&(e.isLoading=!1,e.$swal({toast:!0,title:"編輯成功",icon:"success",timer:1500,showConfirmButton:!1,position:"top"}),e.hideModal(),e.$emit("getOrder"))})).catch((function(e){console.log(e)}))}},watch:{tempOrder:function(){this.temp=this.tempOrder}}};z.render=Y;var H=z,K={data:function(){return{orderList:[],pagination:[],tempOrder:[],isLoading:!1}},components:{pagination:b["a"],editModal:H},methods:{getOrder:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.isLoading=!0;var c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("linachen","/admin/orders?page=").concat(t);this.$http.get(c).then((function(t){t.data.success&&(e.isLoading=!1,e.orderList=t.data.orders,e.pagination=t.data.pagination)})).catch((function(e){console.log(e)}))},deleteOrder:function(e){var t=this;this.isLoading=!0;var c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("linachen","/admin/order/").concat(e);this.$http.delete(c).then((function(e){e.data.success&&(t.isLoading=!1,t.$swal({toast:!0,title:"已成功刪除",icon:"success",timer:1500,showConfirmButton:!1,position:"top"}),t.getOrder())})).catch((function(e){console.log(e)}))},deleteAll:function(){var e=this;this.isLoading=!0;var t="".concat("https://vue3-course-api.hexschool.io/","api/").concat("linachen","/admin/orders/all");this.$http.delete(t).then((function(t){t.data.success&&(e.isLoading=!1,e.$swal({toast:!0,title:"訂單清空囉！",icon:"success",timer:1500,showConfirmButton:!1,position:"top"}),e.getOrder())})).catch((function(e){console.log(e)}))},editOrder:function(e){this.tempOrder=JSON.parse(JSON.stringify(e)),this.$refs.editModal.openModal()}},created:function(){this.getOrder()}};K.render=d;t["default"]=K},8010:function(e,t,c){"use strict";var o=c("7c2b"),a=c.n(o);t["a"]={methods:{openModal:function(){this.modal.show()},hideModal:function(){this.modal.hide()}},mounted:function(){this.modal=new a.a(this.$refs.modal,{backdrop:"static"})}}},b0c0:function(e,t,c){var o=c("83ab"),a=c("9bf2").f,r=Function.prototype,n=r.toString,i=/^\s*function ([^ (]*)/,l="name";o&&!(l in r)&&a(r,l,{configurable:!0,get:function(){try{return n.call(this).match(i)[1]}catch(e){return""}}})}}]);
//# sourceMappingURL=chunk-fc26d9a6.c257b166.js.map