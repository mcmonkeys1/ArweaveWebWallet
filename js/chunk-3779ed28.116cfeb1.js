(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3779ed28"],{"188e":function(e,t,c){"use strict";var a=c("7a23"),o=Object(a["withScopeId"])("data-v-222d0d42");Object(a["pushScopeId"])("data-v-222d0d42");var l={class:"wallet-options"},n={class:"left"},d={class:"profile-info"},r=Object(a["createTextVNode"])(" Username "),s={class:"content"},i={class:"bottom"};Object(a["popScopeId"])();var p=o((function(e,t,c,o,p,u){var b=Object(a["resolveComponent"])("AddressIcon"),O=Object(a["resolveComponent"])("Address");return Object(a["openBlock"])(),Object(a["createBlock"])("div",l,[Object(a["createVNode"])("div",n,[Object(a["createVNode"])(b,{class:"profile",address:c.wallet.key},null,8,["address"]),Object(a["createVNode"])("div",d,[r,Object(a["createVNode"])(O,{class:"address",address:c.wallet.key},null,8,["address"])])]),Object(a["createVNode"])("div",s,[Object(a["createVNode"])("div",i,[c.wallet.jwk?(Object(a["openBlock"])(),Object(a["createBlock"])("div",{key:0,onClick:t[1]||(t[1]=function(e){return o.downloadWallet(c.wallet)})},"Download")):Object(a["createCommentVNode"])("",!0),Object(a["createVNode"])("div",{onClick:t[2]||(t[2]=function(e){return o.deleteWallet(c.wallet)})},"Delete")])])])})),u=c("cff5"),b=c("3f0a"),O=c("32c4"),j={components:{AddressIcon:u["a"],Address:b["a"]},props:["wallet"],setup:function(){return{deleteWallet:O["c"],downloadWallet:O["d"]}}};c("ef74");j.render=p,j.__scopeId="data-v-222d0d42";t["a"]=j},"1d18":function(e,t,c){"use strict";c.r(t);var a=c("7a23"),o=Object(a["withScopeId"])("data-v-4575a632");Object(a["pushScopeId"])("data-v-4575a632");var l={class:"edit-wallet"},n=Object(a["createVNode"])("h2",null,"Edit New Wallets",-1);Object(a["popScopeId"])();var d=o((function(e,t,c,o,d,r){var s=Object(a["resolveComponent"])("WalletOptions");return Object(a["openBlock"])(),Object(a["createBlock"])("div",l,[n,(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(r.wallets,(function(e){return Object(a["openBlock"])(),Object(a["createBlock"])(s,{class:"wallet-options card",key:e.id,wallet:e},null,8,["wallet"])})),128))])})),r=c("b85c"),s=c("188e"),i=c("319a"),p={components:{WalletOptions:s["a"]},computed:{wallets:function(){var e,t=this.$route.query.wallet,c=Array.isArray(t)?t:[t],a=[],o=Object(r["a"])(c);try{for(o.s();!(e=o.n()).done;){var l=e.value,n=Object(i["f"])(l);n&&a.push(n)}}catch(d){o.e(d)}finally{o.f()}return a}}};c("a90f");p.render=d,p.__scopeId="data-v-4575a632";t["default"]=p},"6cc4":function(e,t,c){},a90f:function(e,t,c){"use strict";c("6cc4")},adb4:function(e,t,c){},ef74:function(e,t,c){"use strict";c("adb4")}}]);
//# sourceMappingURL=chunk-3779ed28.116cfeb1.js.map