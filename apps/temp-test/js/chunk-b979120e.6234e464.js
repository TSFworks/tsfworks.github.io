(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b979120e"],{"235b":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"white-box"},[n("h3",[t._v("Typing it out")]),n("TypeItOut",{attrs:{wpm:"80"}},[t._v("\n\t\t\tLorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede.\n\t\t")])],1)])},a=[],u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",[n("span",{domProps:{textContent:t._s(t.typedOut)}}),n("span",{staticClass:"havent-typed-out",domProps:{textContent:t._s(t.haventTypedOut)}})])},s=[],r=(n("e840"),{name:"TypeItOut",props:{wpm:{default:60},variance:{validator:function(t){return t>=0&&t<=1},default:0}},data:function(){return{typedOut:"",haventTypedOut:"",intervalID:void 0}},computed:{interval:function(){if(!(this.wpm<=0)){var t=+this.wpm,e=t/60,n=5*e,i=1/n,a=1e3*i;return a}}},methods:{init:function(){var t=this;this.$slots.default&&(this.haventTypedOut=this.$slots.default[0].text.trim(),this.intervalID=setInterval(function(){t.typeAChar()},this.interval))},typeAChar:function(){this.haventTypedOut.length<=0||(this.typedOut+=this.haventTypedOut.slice(0,1),this.haventTypedOut=this.haventTypedOut.slice(1))},clear:function(){this.intervalID&&clearInterval(this.intervalID)}},mounted:function(){this.init()}}),o=r,c=(n("3a64"),n("553a")),l=Object(c["a"])(o,u,s,!1,null,null,null),p=l.exports,d={name:"Misc",data:function(){return{}},components:{TypeItOut:p}},f=d,h=Object(c["a"])(f,i,a,!1,null,null,null);e["default"]=h.exports},"3a64":function(t,e,n){"use strict";var i=n("77ac"),a=n.n(i);a.a},"77ac":function(t,e,n){},"7f49":function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},"9db3":function(t,e,n){var i=n("d5fa"),a=n("c2ea"),u=n("f680"),s=n("7f49"),r="["+s+"]",o="​",c=RegExp("^"+r+r+"*"),l=RegExp(r+r+"*$"),p=function(t,e,n){var a={},r=u(function(){return!!s[t]()||o[t]()!=o}),c=a[t]=r?e(d):s[t];n&&(a[n]=c),i(i.P+i.F*r,"String",a)},d=p.trim=function(t,e){return t=String(a(t)),1&e&&(t=t.replace(c,"")),2&e&&(t=t.replace(l,"")),t};t.exports=p},e840:function(t,e,n){"use strict";n("9db3")("trim",function(t){return function(){return t(this,3)}})}}]);