(this.webpackJsonpe_commerce_app=this.webpackJsonpe_commerce_app||[]).push([[0],{30:function(e,t,r){e.exports=r(40)},40:function(e,t,r){"use strict";r.r(t);var a=r(0),c=r.n(a),n=r(13),o=r.n(n),l=r(2),u=r(4),i=Object(u.a)(),m=r(24),d=r(25),s=r(28),p=r(27),E=r(8),h=r(5),f=function(e){Object(s.a)(r,e);var t=Object(p.a)(r);function r(){var e;Object(m.a)(this,r);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).renderCategory=function(){var t=[];return e.props.categories.forEach((function(e){t.includes(e.category)||t.push(e.category)})),t.map((function(t){return c.a.createElement("div",{className:"card",key:t},c.a.createElement("div",{className:"content"},c.a.createElement("div",{className:"header"},"Category: "+t),c.a.createElement("div",{className:"extra content"},c.a.createElement("div",{className:"ui two buttons"},c.a.createElement(h.a,{to:"/ecommerce/product"},c.a.createElement("button",{className:"ui basic green button",onClick:function(){return e.props.showCategory(t)}},"Show"))))))}))},e}return Object(d.a)(r,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"ui cards"},this.renderCategory()),c.a.createElement(h.a,{to:"/ecommerce/showCart/"},c.a.createElement("button",{type:"button"},"Go To Cart")))}}]),r}(c.a.Component),y=Object(E.b)((function(e){return{categories:e.products}}),{showCategory:function(e){return{type:"SHOW_CATEGORY_LIST",payload:e}}})(f),g=0,b=Object(E.b)((function(e){return console.log(),{cart:e.cart||JSON.parse(localStorage.getItem("cart"))}}))((function(e){var t=0;return e.cart.length>0?c.a.createElement("div",null,c.a.createElement("h1",null,"Cart"),e.cart.map((function(e){return t+=e.price,c.a.createElement("div",{key:++g},c.a.createElement("p",null,"Product Title: ",e.product_title," Price: ",e.price))})),c.a.createElement("h3",null,"Total Price: Rs ",t),c.a.createElement(h.a,{to:"/ecommerce"},c.a.createElement("button",{type:"button",onClick:function(){return alert("Order placed!!!")}},"Buy"))):c.a.createElement("div",null,"Nothing bought yet. GO SHOPPING!!!")})),v=r(29),C=r(21),_=Object(E.b)((function(e){return e.showCategory&&localStorage.setItem("showCategory",e.showCategory),{products:e.products,category:e.showCategory||parseInt(localStorage.getItem("showCategory"))}}),{showProductDetails:function(e){return{type:"SHOW_PRODUCT_DETAILS",payload:e}}})((function(e){var t=c.a.useState(!1),r=Object(C.a)(t,2),a=r[0],n=r[1],o=c.a.useState(0),l=Object(C.a)(o,2),u=l[0],i=l[1];return c.a.createElement("div",null,c.a.createElement("p",null,c.a.createElement("button",{type:"button",onClick:function(){return n(!0)}},"Show low price to high"),c.a.createElement("button",{type:"button",onClick:function(){return n(!1)}},"Show high price to low")),c.a.createElement("p",null,c.a.createElement("button",{type:"button",onClick:function(){return i(1)}},"Filter products less than or equal to Rs 300"),c.a.createElement("button",{type:"button",onClick:function(){return i(2)}},"Filter products more than Rs 300"),c.a.createElement("button",{type:"button",onClick:function(){return i(0)}},"No Filter")),c.a.createElement("div",{className:"ui cards"},function(){var t,r=function(t){var r=e.products.map((function(e){return Object(v.a)({},e)}));return 1===t?r.filter((function(e){return e.price<=300})):2===t?r.filter((function(e){return e.price>300})):r}(u);return a?((t=r).sort((function(e,t){return e.price<t.price?-1:e.price>t.price?1:0})),O(t,e.category,e.showProductDetails)):function(t){return t.sort((function(e,t){return e.price<t.price?1:e.price>t.price?-1:0})),O(t,e.category,e.showProductDetails)}(r)}()),c.a.createElement(h.a,{to:"/ecommerce/showCart/"},c.a.createElement("button",{type:"button"},"Go To Cart")))})),O=function(e,t,r){return e.map((function(e){return e.category===t?c.a.createElement("div",{key:e.product_id,className:"card"},c.a.createElement("div",{className:"content"},c.a.createElement("div",{className:"header"},"Title: ",e.product_title),c.a.createElement("div",{className:"description"},"Price: Rs ",e.price),c.a.createElement("div",{className:"extra content"},c.a.createElement("div",{className:"ui two buttons"},c.a.createElement(h.a,{to:"/ecommerce/product/detail"},c.a.createElement("button",{className:"ui basic green button",onClick:function(){return r(e.product_id)}},"Show Details")))))):c.a.createElement("div",{key:e.product_id})}))},w=Object(E.b)((function(e){return e.showProduct&&localStorage.setItem("showProduct",e.showProduct),{products:e.products,focusedProduct:e.showProduct||parseInt(localStorage.getItem("showProduct"))}}),{addToCart:function(e){return{type:"ADD_TO_CART",payload:e}}})((function(e){if(e.focusedProduct){var t=e.products.filter((function(t){return t.product_id===e.focusedProduct}))[0];return c.a.createElement("div",{className:"ui items"},c.a.createElement("div",{className:"ui item"},c.a.createElement("div",{className:"content"},c.a.createElement("div",{className:"header"},c.a.createElement("h1",null,"Product Details:")),c.a.createElement("div",{className:"description"},c.a.createElement("p",null,"Product Title: ",t.product_title),c.a.createElement("p",null,"Product Description: ",t.detail),c.a.createElement("p",null,"Product id: ",t.product_id),c.a.createElement("p",null,"Product Category: ",t.category),c.a.createElement("p",{className:"ui basic red"},"Price: ",t.price)),c.a.createElement("div",{className:"extra content"},c.a.createElement("div",{className:"ui one button"},c.a.createElement("button",{className:"ui basic primary button",onClick:function(){return e.addToCart(t)}},"Add To Cart"))))),c.a.createElement(h.a,{to:"/ecommerce/showCart/"},c.a.createElement("button",{type:"button"},"Go To Cart")))}return c.a.createElement("div",null)})),N=0,P=Object(E.b)((function(e){return console.log(),{cart:e.cart||JSON.parse(localStorage.getItem("cart"))}}),{removeFromCart:function(e){return{type:"REMOVE_FROM_CART",payload:e}}})((function(e){return e.cart.length>0?c.a.createElement("div",null,c.a.createElement("h1",null,"Cart"),e.cart.map((function(t){return c.a.createElement("div",{key:++N},c.a.createElement("p",null,"Product Title: ",t.product_title," Price: ",t.price),c.a.createElement("button",{onClick:function(){return e.removeFromCart(t)}},"Remove"))})),c.a.createElement(h.a,{to:"/ecommerce/showCart/checkout/"},c.a.createElement("button",{type:"button"},"Checkout"))):c.a.createElement("div",null,"Cart is empty. GO SHOPPING!!!")})),S=function(){return c.a.createElement("div",null,c.a.createElement(l.b,{history:i},c.a.createElement(l.a,{path:"/ecommerce/",exact:!0,component:y}),c.a.createElement(l.a,{path:"/ecommerce/product",exact:!0,component:_}),c.a.createElement(l.a,{path:"/ecommerce/product/detail",exact:!0,component:w}),c.a.createElement(l.a,{path:"/ecommerce/showCart/",exact:!0,component:P}),c.a.createElement(l.a,{path:"/ecommerce/showCart/checkout/",exact:!0,component:b})))},T=r(10),k=r(20),j=Object(T.b)({products:function(){return[{product_id:1,category:1,product_title:"mango",detail:"good for health",price:200},{product_id:2,category:2,product_title:"banana",detail:"good for fitness",price:300},{product_id:3,category:1,product_title:"guava",detail:"good for mental health",price:400},{product_id:4,category:2,product_title:"watermelon",detail:"good for pysical fitness",price:500},{product_id:5,category:3,product_title:"potato",detail:"nutritious",price:100},{product_id:6,category:3,product_title:"lady finger",detail:"gives protein",price:200}]},showProduct:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;return"SHOW_PRODUCT_DETAILS"===t.type?t.payload:e},showCategory:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;return"SHOW_CATEGORY_LIST"===t.type?t.payload:e},cart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,r=Object(k.a)(e);if("ADD_TO_CART"===t.type)r=[].concat(Object(k.a)(r),[t.payload]);else if("REMOVE_FROM_CART"===t.type){var a=t.payload;r=[];for(var c=!1,n=0;n<e.length;n++)e[n].product_id!==a.product_id||c?r.push(e[n]):c=!0}return localStorage.setItem("cart",JSON.stringify(r)),r}});o.a.render(c.a.createElement(E.a,{store:Object(T.c)(j)},c.a.createElement(S,null)),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.ce149ccf.chunk.js.map