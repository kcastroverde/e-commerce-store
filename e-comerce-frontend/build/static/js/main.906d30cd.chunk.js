(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{36:function(e,t,r){},37:function(e,t,r){},38:function(e,t,r){},64:function(e,t,r){},65:function(e,t,r){},66:function(e,t,r){},67:function(e,t,r){},68:function(e,t,r){},69:function(e,t,r){},70:function(e,t,r){},71:function(e,t,r){},72:function(e,t,r){},73:function(e,t,r){},74:function(e,t,r){},75:function(e,t,r){"use strict";r.r(t);var n=r(1),c=r.n(n),a=r(16),s=r.n(a),i=(r(36),r(8)),o=(r(37),r(7)),u=r(5),l=(r(38),r(6)),d=r(2),j=r.n(d),p=r(4),b=r(9),f=r.n(b),O=function(e){window.localStorage.setItem("token_store".concat(x),e)},h=function(){var e=window.localStorage.getItem("token_store".concat(x));return e||!1},m="http://localhost:5000/api",x="62d5b22ee529916689066b8c",v=function(){var e=Object(p.a)(j.a.mark((function e(){var t,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("".concat(m,"/stores/").concat(x));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=Object(p.a)(j.a.mark((function e(){var t,r,n,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=h(),r={"Content-Type":"application/json",Authorization:"Bearer ".concat(t)},e.next=4,f.a.get("".concat(m,"/user/user"),{headers:r});case 4:return n=e.sent,c=n.data,e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(){var e=Object(p.a)(j.a.mark((function e(t){var r,n,c,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.email,n=t.password,e.next=3,f.a.post("".concat(m,"/user/signin"),{email:r,password:n,storeId:x});case 3:return c=e.sent,a=c.data,O(a.token),e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=Object(p.a)(j.a.mark((function e(t,r,n){var c,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.post("".concat(m,"/user/signup"),{name:t,email:r,password:n,STORE_ID:x});case 2:return c=e.sent,a=c.data,O(a.token),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}(),C=function(){var e=Object(p.a)(j.a.mark((function e(){var t,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("".concat(m,"/products/").concat(x));case 2:return t=e.sent,r=t.data,console.log("dataAPI",r),e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(p.a)(j.a.mark((function e(t){var r,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("".concat(m,"/products/").concat(t));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(p.a)(j.a.mark((function e(t,r){var n,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("".concat(m,"/products/category/").concat(t,"/").concat(r));case 2:return n=e.sent,c=n.data,e.abrupt("return",c);case 5:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),k=function(){var e=Object(p.a)(j.a.mark((function e(t,r,n,c,a,s,i){var o,u,l,d;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=h(),u={"Content-Type":"application/json",Authorization:"Bearer ".concat(o)},e.next=4,f.a.post("".concat(m,"/products/create"),{storeId:t,name:r,description:n,price:c,countInStock:a,imageUrl:s,category:i},{headers:u});case 4:return l=e.sent,d=l.data,e.abrupt("return",d);case 7:case"end":return e.stop()}}),e)})));return function(t,r,n,c,a,s,i){return e.apply(this,arguments)}}(),E=function(){var e=Object(p.a)(j.a.mark((function e(t,r,n,c,a,s,i){var o,u,l,d;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=h(),u={"Content-Type":"application/json",Authorization:"Bearer ".concat(o)},e.next=4,f.a.put("".concat(m,"/products/update/").concat(t),{name:r,description:n,price:c,countInStock:a,imageUrl:s,category:i},{headers:u});case 4:return l=e.sent,d=l.data,e.abrupt("return",d);case 7:case"end":return e.stop()}}),e)})));return function(t,r,n,c,a,s,i){return e.apply(this,arguments)}}(),S=function(){var e=Object(p.a)(j.a.mark((function e(t){var r,n,c,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=h(),n={"Content-Type":"application/json",Authorization:"Bearer ".concat(r)},e.next=4,f.a.delete("".concat(m,"/products/delete/").concat(t),{headers:n});case 4:return c=e.sent,a=c.data,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),R=function(){var e=Object(p.a)(j.a.mark((function e(t){var r,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("".concat(m,"/categories/").concat(t));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=Object(p.a)(j.a.mark((function e(t){var r,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("".concat(m,"/categories/").concat(t));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(p.a)(j.a.mark((function e(t,r){var n,c,a,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=h(),c={"Content-Type":"application/json",Authorization:"Bearer ".concat(n)},e.next=4,f.a.post("".concat(m,"/categories/create"),{storeId:t,name:r},{headers:c});case 4:return a=e.sent,s=a.data,e.abrupt("return",s);case 7:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),A=function(){var e=Object(p.a)(j.a.mark((function e(t){var r,n,c,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=h(),n={"Content-Type":"application/json",Authorization:"Bearer ".concat(r)},e.next=4,f.a.delete("".concat(m,"/categories/delete/").concat(t),{headers:n});case 4:return c=e.sent,a=c.data,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),U=function(){var e=Object(p.a)(j.a.mark((function e(t,r){var n,c,a,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=h(),c={"Content-Type":"application/json",Authorization:"Bearer ".concat(n)},e.next=4,f.a.post("".concat(m,"/cart/add"),{productId:t,count:r},{headers:c});case 4:return a=e.sent,s=a.data,e.abrupt("return",s);case 7:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),D=function(){var e=Object(p.a)(j.a.mark((function e(t){var r,n,c,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=h(),n={"Content-Type":"application/json",Authorization:"Bearer ".concat(r)},e.next=4,f.a.post("".concat(m,"/cart/delete/").concat(t),{},{headers:n});case 4:return c=e.sent,a=c.data,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),L=function(){var e=Object(p.a)(j.a.mark((function e(){var t,r,n,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=h(),r={"Content-Type":"application/json",Authorization:"Bearer ".concat(t)},e.next=4,f.a.get("".concat(m,"/cart/"),{headers:r});case 4:return n=e.sent,c=n.data,e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),P=function(){var e=Object(p.a)(j.a.mark((function e(){var t,r,n,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=h(),r={"Content-Type":"application/json",Authorization:"Bearer ".concat(t)},e.next=4,f.a.post("".concat(m,"/cart/clear"),{},{headers:r});case 4:return n=e.sent,c=n.data,e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),F=function(){var e=Object(p.a)(j.a.mark((function e(t,r){var n,c,a,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=h(),c={"Content-Type":"application/json",Authorization:"Bearer ".concat(n)},e.next=4,f.a.post("".concat(m,"/cart/modify"),{productId:t,count:r},{headers:c});case 4:return a=e.sent,s=a.data,e.abrupt("return",s);case 7:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),z=function(){var e=Object(p.a)(j.a.mark((function e(){var t,r,n,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=h(),r={"Content-Type":"application/json",Authorization:"Bearer ".concat(t)},e.next=4,f.a.get("".concat(m,"/orders/"),{headers:r});case 4:return n=e.sent,c=n.data,e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),B=function(){var e=Object(p.a)(j.a.mark((function e(t){var r,n,c,a,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=h(),n={fullName:t.Address.fullName,address:t.Address.address,zipCode:t.Address.zipCode,city:t.Address.city,country:t.Address.country,state:t.Address.state,total:t.total,products:t.cartItems.map((function(e){return{productId:e.product,count:e.qty}}))},c={"Content-Type":"application/json",Authorization:"Bearer ".concat(r)},e.next=5,f.a.post("".concat(m,"/orders/"),n,{headers:c});case 5:return a=e.sent,s=a.data,e.abrupt("return",s);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),M={getUser:g,sigIn:y,sigUp:_,getProducts:C,getProductById:N,getProductsByCategory:w,createProduct:k,updateProduct:E,deleteProduct:S,getCategories:R,getCategoryById:T,createCategory:I,deleteCategory:A,addToCart:U,removeFromCart:D,getCart:L,clearCart:P,modifyCart:F,getOrders:z,STORE_ID:x,createOrder:B,getStore:v},q=function(e){return{type:"RECEIVE_USER_DETAILS",payload:e}},V=function(e){return{type:"ERROR_USER_DETAILS",payload:e}},Q=function(){return function(){var e=Object(p.a)(j.a.mark((function e(t){var r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"REQUEST_USER_DETAILS"}),e.prev=1,e.next=4,M.getUser();case 4:r=e.sent,t(q({userDetails:r})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t(V(e.t0));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},G=function(){return function(){var e=Object(p.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"LOG_OUT_USER"}),window.localStorage.removeItem("token_store".concat(x));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Y=function(e){return e.map((function(e){return{product:e.productId._id,name:e.productId.name,imageUrl:e.productId.imageUrl,price:e.productId.price,countInStock:e.productId.countInStock,qty:e.count,_id:e._id}}))},$=function(e){return{type:"ERROR_CART",payload:e}},H=function(e){return{type:"UPDATE_CART",payload:e}},J=function(){return function(){var e=Object(p.a)(j.a.mark((function e(t){var r,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"REQUEST_CART"}),e.prev=1,e.next=4,M.getCart();case 4:r=e.sent,console.log("data",r),n=Y(r.carts),t({type:"RECEIVE_CART",payload:n}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),t($(e.t0));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}()},W=function(e){return{type:"ERROR_STORE",payload:e}},Z=r(0),K=function(e){var t=e.click,r=Object(l.c)((function(e){return e.cart})),c=Object(u.f)(),a=Object(l.c)((function(e){return e.user})),s=Object(l.c)((function(e){return e.store})),d=Object(l.b)(),b=s.storeName,f=(s.discount,s.StoreLoaded),O=r.products,m=r.cartLoaded,x=a.loginSuccess,v=a.userDetails,g=Object(n.useState)(!1),y=Object(i.a)(g,2),_=y[0],C=y[1];return Object(n.useEffect)((function(){f||d(function(){var e=Object(p.a)(j.a.mark((function e(t){var r,n,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"REQUEST_STORE"}),e.prev=1,e.next=4,M.getStore();case 4:r=e.sent,n=r.name,c=r.discount,t({type:"RECEIVE_STORE",payload:{storeName:n,discount:c}}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),t(W(e.t0));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}())}),[d,f]),Object(n.useEffect)((function(){h()&&d(Q())}),[d]),Object(n.useEffect)((function(){x&&d(J())}),[d,x]),Object(n.useEffect)((function(){m&&C(!0)}),[m]),Object(Z.jsxs)("nav",{className:"navbar",children:[Object(Z.jsx)("div",{className:"navbar__logo",children:Object(Z.jsx)(o.b,{to:"/",children:Object(Z.jsx)("h2",{children:f?b:"loading..."})})}),Object(Z.jsxs)("ul",{className:"navbar__links",children:[Object(Z.jsx)("li",{children:Object(Z.jsx)(o.b,{to:"/admin",className:"admin__link",children:x&&"admin"===v.role?"Admin":null})}),Object(Z.jsx)("li",{children:Object(Z.jsx)(o.b,{to:"/orders",className:"orders__link",children:x?"Orders":null})}),Object(Z.jsx)("li",{children:Object(Z.jsxs)(o.b,{to:"/cart",className:"cart__link",children:[Object(Z.jsx)("i",{className:"fas fa-shopping-cart"}),Object(Z.jsxs)("span",{children:["Cart ",Object(Z.jsx)("span",{className:"cartlogo__badge",children:_?O.reduce((function(e,t){return Number(t.qty)+e}),0):0})]})]})}),Object(Z.jsx)("li",{children:Object(Z.jsx)(o.b,{to:"/",children:"Shop"})}),a.loginSuccess?Object(Z.jsx)("li",{children:Object(Z.jsx)("p",{onClick:function(){d(function(){var e=Object(p.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{t({type:"LOGOUT_CART"})}catch(r){t($(r))}case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),d(G()),c("/")},children:"Logout"})}):Object(Z.jsx)("li",{children:Object(Z.jsx)(o.b,{to:"/signin",children:"Login"})})]}),Object(Z.jsxs)("div",{className:"hamburger__menu",onClick:t,children:[Object(Z.jsx)("div",{}),Object(Z.jsx)("div",{}),Object(Z.jsx)("div",{})]})]})},X=(r(64),function(e){var t=e.show,r=e.click,n=["sidedrawer"],c=Object(l.c)((function(e){return e.user})),a=Object(u.f)(),s=(Object(l.b)(),Object(l.c)((function(e){return e.cart})).products);t&&n.push("show");return Object(Z.jsx)("div",{className:n.join(" "),children:Object(Z.jsxs)("ul",{className:"sidedrawer__links",onClick:r,children:[Object(Z.jsx)("li",{children:Object(Z.jsxs)(o.b,{to:"/cart",children:[Object(Z.jsx)("i",{className:"fas fa-shopping-cart"}),Object(Z.jsxs)("span",{children:["Cart"," ",Object(Z.jsx)("span",{className:"sidedrawer__cartbadge",children:s.reduce((function(e,t){return Number(t.qty)+e}),0)})]})]})}),Object(Z.jsx)("li",{children:Object(Z.jsx)(o.b,{to:"/",children:"Shop"})}),c.loginSuccess?Object(Z.jsx)("li",{children:Object(Z.jsx)("p",{onClick:function(){G(),a("/")},children:"Logout"})}):Object(Z.jsx)("li",{children:Object(Z.jsx)(o.b,{to:"/signin",children:"Login"})})]})})}),ee=(r(65),function(e){var t=e.click;return e.show&&Object(Z.jsx)("div",{className:"backdrop",onClick:t})}),te=(r(66),r(67),function(e){var t=e.imageUrl,r=e.description,n=e.price,c=e.name,a=e.productId;return Object(Z.jsxs)("div",{className:"product",children:[Object(Z.jsx)("img",{src:t,alt:c}),Object(Z.jsxs)("div",{className:"product__info",children:[Object(Z.jsx)("p",{className:"info__name",children:c}),Object(Z.jsxs)("p",{className:"info__description",children:[r.substring(0,100),"..."]}),Object(Z.jsxs)("p",{className:"info__price",children:["$",n]}),Object(Z.jsx)(o.b,{to:"/product/".concat(a),className:"info__button",children:"View"})]})]})}),re=function(e){return{type:"ERROR_PRODUCTS",payload:e}},ne=function(){return function(){var e=Object(p.a)(j.a.mark((function e(t){var r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"REQUEST_PRODUCTS"}),e.prev=1,e.next=4,M.getProducts();case 4:r=e.sent,console.log("data",r),t({type:"RECEIVE_PRODUCTS",payload:{products:r}}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),t(re(e.t0));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},ce=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.product})),r=Object(l.c)((function(e){return e.user}));console.log("user",r);var c=t.products,a=t.loading,s=t.error;return Object(n.useEffect)((function(){e(ne())}),[e]),console.log(t),Object(Z.jsxs)("div",{className:"homescreen",children:[Object(Z.jsx)("h2",{className:"homescreen__title",children:"Latest Products"}),Object(Z.jsx)("div",{className:"homescreen__products",children:a?Object(Z.jsx)("h2",{children:"Loading..."}):s?Object(Z.jsx)("h2",{children:s}):c.map((function(e){return Object(Z.jsx)(te,{name:e.name,description:e.description,price:e.price,imageUrl:e.imageUrl,productId:e._id},e._id)}))})]})},ae=r(17),se=(r(68),function(e){var t=e.match,r=e.history,c=Object(n.useState)(1),a=Object(i.a)(c,2),s=a[0],o=a[1],u=Object(l.c)((function(e){return e.user})),d=Object(l.b)(),b=Object(n.useState)({}),f=Object(i.a)(b,2),O=f[0],h=f[1],m=Object(n.useState)(!0),x=Object(i.a)(m,2),v=x[0],g=x[1],y=Object(l.c)((function(e){return e.product})),_=y.initialLoad,C=y.error,N=y.products,w=y.errorMsg;Object(n.useEffect)((function(){_&&d(ne())}),[d],[_]),Object(n.useEffect)((function(){if(!_&&t.params.id!==N._id){var e=N.find((function(e){return e._id===t.params.id}));h(e),g(!1)}}),[t,N,_,d]);return Object(Z.jsx)("div",{className:"productscreen",children:v?Object(Z.jsx)("h2",{children:"Loading..."}):C?Object(Z.jsx)("h2",{children:C}):Object(Z.jsxs)(Z.Fragment,{children:[Object(Z.jsxs)("div",{className:"productscreen__left",children:[Object(Z.jsx)("div",{className:"left__image",children:Object(Z.jsx)("img",{src:O.imageUrl,alt:O.name})}),Object(Z.jsxs)("div",{className:"left__info",children:[Object(Z.jsx)("p",{className:"left__name",children:O.name}),Object(Z.jsxs)("p",{children:["Price: $",O.price]}),Object(Z.jsxs)("p",{children:["Description: ",O.description]})]})]}),Object(Z.jsx)("div",{className:"productscreen__right",children:Object(Z.jsxs)("div",{className:"right__info",children:[Object(Z.jsxs)("p",{children:["Price:",Object(Z.jsxs)("span",{children:["$",O.price]})]}),Object(Z.jsxs)("p",{children:["Status:",Object(Z.jsx)("span",{children:O.countInStock>0?"In Stock":"Out of Stock"})]}),Object(Z.jsxs)("p",{children:["Qty",Object(Z.jsx)("select",{value:s,onChange:function(e){return o(e.target.value)},children:Object(ae.a)(Array(O.countInStock).keys()).map((function(e){return Object(Z.jsx)("option",{value:e+1,children:e+1},e+1)}))})]}),Object(Z.jsx)("p",{children:Object(Z.jsx)("button",{type:"button",onClick:function(){if(u.loginSuccess)return console.log("productscree",O._id),d((e=O._id,t=s,function(){var r=Object(p.a)(j.a.mark((function r(n){var c,a;return j.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,console.log("productId",e),r.next=4,M.addToCart(e,t);case 4:c=r.sent,a=Y(c.carts),n(H(a)),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(0),n($(r.t0));case 12:case"end":return r.stop()}}),r,null,[[0,9]])})));return function(e){return r.apply(this,arguments)}}())),C?void alert(w):void r.push("/cart");var e,t;alert("You need to first login.")},children:"Add To Cart"})})]})})]})})}),ie=(r(69),r(70),function(e){var t=e.item,r=e.qtyChangeHandler,n=e.removeHandler;return console.log("item",t),Object(Z.jsxs)("div",{className:"cartitem",children:[Object(Z.jsx)("div",{className:"cartitem__image",children:Object(Z.jsx)("img",{src:t.imageUrl,alt:t.name})}),Object(Z.jsx)(o.b,{to:"/product/".concat(t.product),className:"cartItem__name",children:Object(Z.jsx)("p",{children:t.name})}),Object(Z.jsxs)("p",{className:"cartitem__price",children:["$",t.price]}),Object(Z.jsx)("select",{value:t.qty,onChange:function(e){return r(t.product,e.target.value)},className:"cartItem__select",children:Object(ae.a)(Array(t.countInStock).keys()).map((function(e){return Object(Z.jsx)("option",{value:e+1,children:e+1},e+1)}))}),Object(Z.jsx)("button",{className:"cartItem__deleteBtn",onClick:function(){return n(t.product)},children:Object(Z.jsx)("i",{className:"fas fa-trash"})})]})}),oe=function(){var e=Object(l.b)(),t=Object(u.f)(),r=Object(l.c)((function(e){return e.cart})),n=(Object(l.c)((function(e){return e.user})).loginSuccess,r.cartLoaded),c=r.products,a=function(t,r){var n,c;console.log("triger data",t,r),e((n=t,c=r,function(){var e=Object(p.a)(j.a.mark((function e(t){var r,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,M.modifyCart(n,c);case 3:r=e.sent,a=Y(r.carts),t(H(a)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),t($(e.t0));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()))},s=function(t){var r;console.log("remove data",t),e((r=t._id,function(){var e=Object(p.a)(j.a.mark((function e(t){var n,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log("productId",r),e.next=4,M.removeFromCart(r);case 4:n=e.sent,c=Y(n.carts),t(H(c)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t($(e.t0));case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()))};return console.log("cart",r),n?n?Object(Z.jsx)(Z.Fragment,{children:Object(Z.jsxs)("div",{className:"cartscreen",children:[Object(Z.jsxs)("div",{className:"cartscreen__left",children:[Object(Z.jsx)("h2",{children:"Shopping Cart"}),0===c.length?Object(Z.jsxs)("div",{children:["Your Cart Is Empty ",Object(Z.jsx)(o.b,{to:"/",children:"Go Back"})]}):c.map((function(e){return Object(Z.jsx)(ie,{item:e,qtyChangeHandler:a,removeHandler:function(){return s(e)}},e.product)}))]}),Object(Z.jsxs)("div",{className:"cartscreen__right",children:[Object(Z.jsxs)("div",{className:"cartscreen__info",children:[Object(Z.jsxs)("p",{children:["Subtotal (",c.reduce((function(e,t){return Number(t.qty)+e}),0),") items"]}),Object(Z.jsxs)("p",{children:["$",c.reduce((function(e,t){return e+t.price*t.qty}),0).toFixed(2)]})]}),Object(Z.jsx)("div",{children:Object(Z.jsx)("button",{onClick:function(){c.length>0?t("/checkout"):alert("Cart is empty")},children:"Proceed To Checkout"})})]})]})}):void 0:Object(Z.jsx)("h1",{children:"Loading....."})};r(71);var ue=function(){var e=Object(u.f)(),t=Object(n.useState)(""),r=Object(i.a)(t,2),c=r[0],a=r[1],s=Object(n.useState)(""),l=Object(i.a)(s,2),d=l[0],b=l[1],f=Object(n.useState)(""),O=Object(i.a)(f,2),h=O[0],m=O[1],x=Object(n.useState)(!1),v=Object(i.a)(x,2),g=v[0],y=v[1],_=Object(n.useCallback)(Object(p.a)(j.a.mark((function t(){var r,n,a;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(c.length>2&&d.length>2&&h.length>2)){t.next=13;break}return y(!0),t.next=4,M.postRequest("/api/user/signup",{email:d,fullName:c,password:h});case 4:if(r=t.sent,n=r.statusCode,a=r.data,400!==n&&500!==n&&403!==n){t.next=11;break}return y(!1),alert(a),t.abrupt("return");case 11:alert(a),e("/signin");case 13:case"end":return t.stop()}}),t)}))),[d,c,h,e]);return g?Object(Z.jsx)("h1",{children:"Loading..."}):Object(Z.jsx)("div",{className:"signupscreen",children:Object(Z.jsx)("div",{className:"container",children:Object(Z.jsxs)("div",{className:"innerContainer",children:[Object(Z.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"20px"},children:[Object(Z.jsx)("div",{style:{cursor:"pointer"},onClick:function(){return e("/")},children:Object(Z.jsx)("i",{className:"fas fa-arrow-circle-left fa-5x"})}),Object(Z.jsx)("p",{children:"Signup"})]}),Object(Z.jsx)("label",{htmlFor:"fname",children:"Full Name"}),Object(Z.jsx)("input",{type:"text",id:"fname",name:"firstname",placeholder:"Your full name..",value:c,onChange:function(e){return a(e.target.value)}}),Object(Z.jsx)("label",{htmlFor:"email",children:"Email"}),Object(Z.jsx)("input",{type:"email",id:"lname",name:"email",placeholder:"Your email..",value:d,onChange:function(e){return b(e.target.value)}}),Object(Z.jsx)("label",{htmlFor:"password",children:"Password"}),Object(Z.jsx)("input",{type:"password",id:"lname",name:"password",placeholder:"Your Password..",value:h,onChange:function(e){return m(e.target.value)}}),Object(Z.jsx)(o.b,{to:"/signin",className:"link",children:Object(Z.jsx)("span",{children:"Already have an account ?"})}),Object(Z.jsx)("br",{}),Object(Z.jsx)("input",{type:"submit",value:"Sign up",onClick:_})]})})})};r(72);var le=function(){var e=Object(u.f)(),t=Object(n.useState)(),r=Object(i.a)(t,2),c=r[0],a=r[1],s=Object(n.useState)(),d=Object(i.a)(s,2),b=d[0],f=d[1],O=Object(l.b)(),h=Object(l.c)((function(e){return e.user})),m=h.loading,x=h.loginSuccess,v=h.error,g=h.errorMsg,y=function(){c.length>2&&b.length>2&&O(function(e){var t=e.email,r=e.password;return function(){var e=Object(p.a)(j.a.mark((function e(n){var c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,M.sigIn({email:t,password:r});case 3:c=e.sent,console.log("data",c),n(q({userDetails:c.user})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),n(V(e.t0));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()}({email:c,password:b}))};return Object(n.useEffect)((function(){x&&e("/")}),[x,e]),Object(n.useEffect)((function(){v&&alert(g)}),[v,g]),console.log("user",h),m?Object(Z.jsx)("h1",{children:"Loading....."}):Object(Z.jsx)("div",{className:"signinscreen",children:Object(Z.jsx)("div",{className:"container",children:Object(Z.jsxs)("div",{className:"innerContainer",children:[Object(Z.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"20px"},children:[Object(Z.jsx)("div",{style:{cursor:"pointer"},onClick:function(){return e("/")},children:Object(Z.jsx)("i",{className:"fas fa-arrow-circle-left fa-5x"})}),Object(Z.jsx)("p",{children:"Sign In"})]}),Object(Z.jsx)("label",{htmlFor:"email",children:"Email"}),Object(Z.jsx)("input",{type:"email",id:"lname",name:"email",placeholder:"Your email..",value:c,onChange:function(e){return a(e.target.value)}}),Object(Z.jsx)("label",{htmlFor:"password",children:"Password"}),Object(Z.jsx)("input",{type:"password",id:"lname",name:"password",placeholder:"Your Password..",value:b,onChange:function(e){return f(e.target.value)}}),Object(Z.jsx)(o.b,{to:"/signup",className:"link",children:Object(Z.jsx)("span",{children:"Creat a new account ?"})}),Object(Z.jsx)("br",{}),Object(Z.jsx)("input",{type:"submit",value:"Sign in",onClick:function(){return y()}})]})})})},de=r(3),je=function(e){return{type:"RECEIVE_ORDER",payload:e}},pe=function(e){return{type:"ERROR_ORDER",payload:e}},be=(r(73),function(){var e=Object(l.c)((function(e){return e.user.userDetails})),t=e.fullName,r=e.address,c=e.country,a=e.city,s=e.zipCode,o=e.state,d=Object(n.useState)({fullName:t,address:r,country:c,city:a,zipCode:s,state:o}),b=Object(i.a)(d,2),f=b[0],O=b[1],h=Object(n.useState)(1),m=Object(i.a)(h,2),x=(m[0],m[1]),v=(Object(u.f)(),Object(l.b)()),g=Object(l.c)((function(e){return e.cart})),y=Object(n.useMemo)((function(){return g.products}),[g]),_=Object(n.useState)(!1),C=Object(i.a)(_,2),N=C[0],w=C[1];Object(n.useEffect)((function(){""===f.fullName||""===f.address||""===f.country||""===f.city||""===f.zipCode||""===f.state||void 0===f.fullName||void 0===f.address||void 0===f.country||void 0===f.city||void 0===f.zipCode||void 0===f.state?w(!1):w(!0)}),[t,r,c,a,s,o,f]);var k=function(){return y.reduce((function(e,t){return e+t.price*t.qty}),0).toFixed(2)};return console.log("cartItems",y),Object(Z.jsx)("div",{className:"Checkout",children:Object(Z.jsxs)("div",{className:"container",children:[Object(Z.jsxs)("div",{className:"Checkout__header",children:[Object(Z.jsx)("h1",{style:{flexGrow:1},children:"Shipping"}),Object(Z.jsx)("button",{className:"Checkout_testBtn",onClick:function(){O({fullName:"",address:"",country:"",city:"",zipCode:"",state:""})},children:"clear checkout"})]}),Object(Z.jsx)("p",{children:"Please enter your shipping details."}),Object(Z.jsx)("hr",{}),Object(Z.jsxs)("div",{className:"form",children:[Object(Z.jsx)("div",{className:"fields ",children:Object(Z.jsxs)("label",{className:"field",children:[Object(Z.jsx)("span",{className:"field__label",htmlFor:"lastname",children:"FullName"}),Object(Z.jsx)("input",{className:"field__input",type:"text",id:"lastname",value:f.fullName,onChange:function(e){O(Object(de.a)(Object(de.a)({},f),{},{fullName:e.target.value}))}})]})}),Object(Z.jsxs)("label",{className:"field",children:[Object(Z.jsx)("span",{className:"field__label",htmlFor:"address",children:"Address"}),Object(Z.jsx)("input",{className:"field__input",type:"text",id:"address",value:f.address,onChange:function(e){return O(Object(de.a)(Object(de.a)({},f),{},{address:e.target.value}))}})]}),Object(Z.jsxs)("label",{className:"field",children:[Object(Z.jsx)("span",{className:"field__label",htmlFor:"country",children:"Country"}),Object(Z.jsx)("input",{className:"field__input",id:"country",value:f.country,onChange:function(e){return O(Object(de.a)(Object(de.a)({},f),{},{country:e.target.value}))}})]}),Object(Z.jsxs)("div",{className:"fields fields--3",children:[Object(Z.jsxs)("label",{className:"field",children:[Object(Z.jsx)("span",{className:"field__label",htmlFor:"zipcode",children:"Zip code"}),Object(Z.jsx)("input",{className:"field__input",type:"text",id:"zipcode",value:f.zipCode,onChange:function(e){return O(Object(de.a)(Object(de.a)({},f),{},{zipCode:e.target.value}))}})]}),Object(Z.jsxs)("label",{className:"field",children:[Object(Z.jsx)("span",{className:"field__label",htmlFor:"city",children:"City"}),Object(Z.jsx)("input",{className:"field__input",type:"text",id:"city",value:f.city,onChange:function(e){return O(Object(de.a)(Object(de.a)({},f),{},{city:e.target.value}))}})]}),Object(Z.jsxs)("label",{className:"field",children:[Object(Z.jsx)("span",{className:"field__label",htmlFor:"state",children:"State"}),Object(Z.jsx)("input",{className:"field__input",id:"state",value:f.state,onChange:function(e){return O(Object(de.a)(Object(de.a)({},f),{},{state:e.target.value}))}})]}),Object(Z.jsxs)("label",{className:"field",children:[Object(Z.jsx)("span",{className:"field__label",htmlFor:"phone",children:"token to use"}),Object(Z.jsxs)("select",{onChange:function(e){x(e.target.value)},children:[Object(Z.jsx)("option",{value:"1",children:"1"}),Object(Z.jsx)("option",{value:"2",children:"2"})]})]})]}),Object(Z.jsx)("br",{}),Object(Z.jsx)("h1",{style:{flexGrow:1},children:"Cart"}),y.map((function(e,t){return Object(Z.jsxs)("div",{className:"fields fields--3",children:[Object(Z.jsxs)("label",{className:"field",children:[Object(Z.jsx)("span",{className:"field__label",htmlFor:"zipcode",children:"Producto"}),Object(Z.jsx)("div",{className:"field__input",children:e.name})]}),Object(Z.jsxs)("label",{className:"field",children:[Object(Z.jsx)("span",{className:"field__label",htmlFor:"city",children:"precio"}),Object(Z.jsx)("div",{className:"field__input",children:e.price})]}),Object(Z.jsxs)("label",{className:"field",children:[Object(Z.jsx)("span",{className:"field__label",htmlFor:"state",children:"qt"}),Object(Z.jsx)("div",{className:"field__input",children:e.qty})]})]},t)}))]}),Object(Z.jsx)("hr",{}),Object(Z.jsx)("div",{className:"button-checkout",children:Object(Z.jsxs)("button",{onClick:function(){if(N){var e={Address:f,cartItems:y,total:k()};v((t=e,function(){var e=Object(p.a)(j.a.mark((function e(r){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r({type:"REQUEST_ORDER"}),r({type:"SAVING_ORDER"}),e.prev=2,e.next=5,M.createOrder(t);case 5:n=e.sent,r(je(n)),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(2),r(pe(e.t0)),r({type:"ORDER_SAVED",payload:!1});case 13:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}()))}else alert("Please complete your Checkout");var t},className:"button",children:["Pay order ",k()]})})]})})}),fe=(r(74),function(){return Object(Z.jsxs)("div",{className:"adminsite",children:[Object(Z.jsx)("div",{className:"sideBar",children:Object(Z.jsxs)("ul",{children:[Object(Z.jsx)(o.c,{to:"/admin/dashboard",children:Object(Z.jsx)("li",{children:"Opciones"})}),Object(Z.jsx)(o.c,{to:"/admin/ordenes",children:Object(Z.jsx)("li",{children:"Ordenes"})}),Object(Z.jsx)(o.c,{to:"/admin/productos",children:Object(Z.jsx)("li",{children:"Productos"})})]})}),Object(Z.jsx)("div",{className:"admin-screen"})]})});var Oe=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),r=t[0],c=t[1],a=Object(l.c)((function(e){return e.user})),s=(a.loginSuccess,a.userDetails,Object(l.b)());return Object(n.useEffect)((function(){localStorage.getItem("token")&&(s(J()),s(Q()))}),[s]),Object(Z.jsxs)(o.a,{children:[Object(Z.jsx)(K,{click:function(){return c(!0)}}),Object(Z.jsx)(X,{show:r,click:function(){return c(!1)}}),Object(Z.jsx)(ee,{show:r,click:function(){return c(!1)}}),Object(Z.jsx)("main",{className:"app",children:Object(Z.jsxs)(u.c,{children:[Object(Z.jsx)(u.a,{path:"/",element:Object(Z.jsx)(ce,{})}),Object(Z.jsx)(u.a,{path:"/product/:id",element:Object(Z.jsx)(se,{})}),Object(Z.jsx)(u.a,{path:"/cart",element:Object(Z.jsx)(oe,{})}),Object(Z.jsx)(u.a,{path:"/signup",element:Object(Z.jsx)(ue,{})}),Object(Z.jsx)(u.a,{path:"/signin",element:Object(Z.jsx)(le,{})}),Object(Z.jsx)(u.a,{path:"/checkout",element:Object(Z.jsx)(be,{})}),Object(Z.jsx)(u.a,{path:"/admin",element:Object(Z.jsx)(fe,{})})]})})]})},he=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,76)).then((function(t){var r=t.getCLS,n=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;r(e),n(e),c(e),a(e),s(e)}))},me=r(15),xe=r(30),ve=r(31),ge={products:[],loading:!1,error:!1,errorMsg:"",initialLoad:!0},ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REQUEST_PRODUCTS":return Object(de.a)(Object(de.a)({},e),{},{loading:!0});case"RECEIVE_PRODUCTS":return Object(de.a)(Object(de.a)({},e),{},{loading:!1,products:t.payload.products,initialLoad:!1});case"ERROR_PRODUCTS":return Object(de.a)(Object(de.a)({},e),{},{loading:!1,error:!0,errorMsg:t.payload});default:return e}},_e={products:[],loading:!1,error:!1,errorMsg:"",cartLoaded:!1},Ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REQUEST_CART":return Object(de.a)(Object(de.a)({},e),{},{loading:!0});case"RECEIVE_CART":return Object(de.a)(Object(de.a)({},e),{},{loading:!1,cartLoaded:!0,error:!1,errorMsg:"",products:t.payload});case"UPDATE_CART":return Object(de.a)(Object(de.a)({},e),{},{loading:!1,cartLoaded:!0,error:!1,products:t.payload});case"ERROR_CART":return Object(de.a)(Object(de.a)({},e),{},{loading:!1,error:!0,errorMsg:t.payload});case"LOGOUT_CART":return Object(de.a)(Object(de.a)({},e),{},{loading:!1,cartLoaded:!1,error:!1,errorMsg:"",products:[]});default:return e}},Ne={loading:!1,error:!1,errorMsg:"",userDetails:[],loginSuccess:!1},we=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REQUEST_USER_DETAILS":return Object(de.a)(Object(de.a)({},e),{},{loading:!0});case"RECEIVE_USER_DETAILS":return Object(de.a)(Object(de.a)({},e),{},{loading:!1,loginSuccess:!0,userDetails:t.payload.userDetails,error:!1,errorMsg:""});case"ERROR_USER_DETAILS":return Object(de.a)(Object(de.a)({},e),{},{loading:!1,error:!0,errorMsg:t.payload});case"LOG_OUT_USER":return Object(de.a)(Object(de.a)({},e),{},{loading:!1,loginSuccess:!1,userDetails:[],error:!1,errorMsg:""});default:return e}},ke={loading:!1,error:!1,errorMsg:"",storeName:"",discount:0,StoreLoaded:!1},Ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ke,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REQUEST_STORE":return Object(de.a)(Object(de.a)({},e),{},{loading:!0});case"RECEIVE_STORE":return Object(de.a)(Object(de.a)({},e),{},{loading:!1,storeName:t.payload.storeName,discount:t.payload.discount,StoreLoaded:!0});case"ERROR_STORE":return Object(de.a)(Object(de.a)({},e),{},{loading:!1,error:!0,errorMsg:t.payload});default:return e}},Se=Object(me.combineReducers)({product:ye,cart:Ce,user:we,store:Ee}),Re=[xe.a],Te=Object(me.createStore)(Se,Object(ve.composeWithDevTools)(me.applyMiddleware.apply(void 0,Re)));s.a.render(Object(Z.jsx)(l.a,{store:Te,children:Object(Z.jsx)(c.a.StrictMode,{children:Object(Z.jsx)(Oe,{})})}),document.getElementById("root")),he()}},[[75,1,2]]]);
//# sourceMappingURL=main.906d30cd.chunk.js.map