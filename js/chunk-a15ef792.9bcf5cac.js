(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a15ef792"],{"30de":function(e,t,a){"use strict";a.r(t);a("b0c0");var c=a("7a23"),n=Object(c["withScopeId"])("data-v-218f3546");Object(c["pushScopeId"])("data-v-218f3546");var r={key:0,class:"tx"},i={class:"meta"},o=Object(c["createTextVNode"])("Tags "),l={class:"tags"},d={key:0},s={key:0,class:"data-view"},b={key:0,class:"frame-background"},u={key:1,class:"frame-background"},p={key:2,class:"raw"},j={key:3,class:"raw"};Object(c["popScopeId"])();var O=n((function(e,t,a,n,O,v){return n.tx?(Object(c["openBlock"])(),Object(c["createBlock"])("div",r,[Object(c["createVNode"])("div",{class:["content",{verticalContent:n.verticalContent}]},[Object(c["createVNode"])("div",i,[Object(c["createVNode"])("div",null,"id "+Object(c["toDisplayString"])(n.tx.id),1),Object(c["createVNode"])("div",null,"block "+Object(c["toDisplayString"])(v.isPending?"Pending":n.tx.block.id),1),Object(c["createVNode"])("div",null,"date "+Object(c["toDisplayString"])(v.date+" "+v.time),1),Object(c["createVNode"])("div",null,"data.size "+Object(c["toDisplayString"])(n.tx.data.size),1),Object(c["createVNode"])("div",null,"fee.ar "+Object(c["toDisplayString"])(n.tx.fee.ar),1),Object(c["createVNode"])("div",null,"owner.address "+Object(c["toDisplayString"])(n.tx.owner.address),1),Object(c["createVNode"])("div",null,"quantity.ar "+Object(c["toDisplayString"])(n.tx.quantity.ar),1),Object(c["createVNode"])("div",null,"recipient "+Object(c["toDisplayString"])(n.tx.recipient),1),Object(c["createVNode"])("div",null,[o,Object(c["createVNode"])("ul",l,[(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(n.tx.tags,(function(e){return Object(c["openBlock"])(),Object(c["createBlock"])("li",{key:e.name},Object(c["toDisplayString"])(e.name)+" - "+Object(c["toDisplayString"])(e.value),1)})),128))])]),n.tx.data.size>0?(Object(c["openBlock"])(),Object(c["createBlock"])("div",d,"link")):Object(c["createCommentVNode"])("",!0)]),n.data.handler?(Object(c["openBlock"])(),Object(c["createBlock"])("div",s,["iframe"===n.data.handler?(Object(c["openBlock"])(),Object(c["createBlock"])("div",b,[Object(c["createVNode"])("iframe",{class:"iframe",src:n.ArweaveStore.gatewayURL+n.tx.id},null,8,["src"])])):Object(c["createCommentVNode"])("",!0),"img"===n.data.handler?(Object(c["openBlock"])(),Object(c["createBlock"])("div",u,[Object(c["createVNode"])("img",{class:"img",src:n.ArweaveStore.gatewayURL+n.tx.id},null,8,["src"])])):Object(c["createCommentVNode"])("",!0),"json"===n.data.handler?(Object(c["openBlock"])(),Object(c["createBlock"])("pre",p,Object(c["toDisplayString"])(n.data.payload),1)):Object(c["createCommentVNode"])("",!0),"raw"===n.data.handler?(Object(c["openBlock"])(),Object(c["createBlock"])("div",j,Object(c["toDisplayString"])(n.data.payload),1)):Object(c["createCommentVNode"])("",!0)])):Object(c["createCommentVNode"])("",!0)],2)])):Object(c["createCommentVNode"])("",!0)})),v=a("1da1"),k=(a("96cf"),a("ac1f"),a("1276"),a("319a")),m=a("1205"),g={props:{txId:String},setup:function(e){var t=Object(c["ref"])(null),a=Object(c["reactive"])({payload:null,handler:null});Object(c["watch"])((function(){return e.txId}),Object(v["a"])(regeneratorRuntime.mark((function c(){var n,r,i,o,l;return regeneratorRuntime.wrap((function(c){while(1)switch(c.prev=c.next){case 0:return c.next=2,Object(k["d"])(e.txId);case 2:if(t.value=c.sent,a.handler=null,0!==(null===(n=t.value.data)||void 0===n?void 0:n.size)){c.next=8;break}return c.abrupt("return");case 8:if("text/html"!==(null===(r=t.value.data)||void 0===r?void 0:r.type)&&"application/pdf"!==(null===(i=t.value.data)||void 0===i?void 0:i.type)){c.next=12;break}a.handler="iframe",c.next=34;break;case 12:if("image"!==(null===(o=t.value.data)||void 0===o||null===(l=o.type)||void 0===l?void 0:l.split("/")[0])){c.next=16;break}a.handler="img",c.next=34;break;case 16:return c.prev=16,c.next=19,k["a"].transactions.getData(e.txId,{decode:!0,string:!0});case 19:if(a.payload=c.sent,c.prev=20,a.payload=JSON.stringify(JSON.parse(a.payload),null,2),"{"===a.payload[0]){c.next=24;break}throw"";case 24:a.handler="json",c.next=30;break;case 27:c.prev=27,c.t0=c["catch"](20),a.handler="raw";case 30:c.next=34;break;case 32:c.prev=32,c.t1=c["catch"](16);case 34:case"end":return c.stop()}}),c,null,[[16,32],[20,27]])}))),{immediate:!0});var n=Object(c["computed"])((function(){return m["a"].breakpoints.verticalContent}));return{ArweaveStore:k["b"],tx:t,data:a,verticalContent:n}},computed:{isPending:function(){return!this.tx.block},date:function(){return this.isPending?"pending":new Date(1e3*this.tx.block.timestamp).toLocaleDateString(void 0,{year:"numeric",month:"long",day:"numeric"})},time:function(){return this.isPending?"":new Date(1e3*this.tx.block.timestamp).toLocaleTimeString()}}};a("4b0e");g.render=O,g.__scopeId="data-v-218f3546";t["default"]=g},"4b0e":function(e,t,a){"use strict";a("b148")},b148:function(e,t,a){}}]);
//# sourceMappingURL=chunk-a15ef792.9bcf5cac.js.map