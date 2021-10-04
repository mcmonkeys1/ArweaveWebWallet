(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e56a9ece"],{"02e1":function(e,t,n){},"498a":function(e,t,n){"use strict";var a=n("23e7"),r=n("58a8").trim,c=n("c8d2");a({target:"String",proto:!0,forced:c("trim")},{trim:function(){return r(this)}})},"4adb":function(e,t,n){"use strict";n.r(t);n("b0c0");var a=n("7a23"),r=Object(a["withScopeId"])("data-v-a6ddacce");Object(a["pushScopeId"])("data-v-a6ddacce");var c={class:"add-wallet flex-column"},o={class:"card"},i=Object(a["createVNode"])("h2",{style:{display:"flex","justify-content":"space-between"}},[Object(a["createVNode"])("span",null,"Passphrase"),Object(a["createVNode"])("span",null,"Key file")],-1),s=Object(a["createVNode"])("br",null,null,-1),l=Object(a["createTextVNode"])(" Create new wallet "),u=Object(a["createTextVNode"])(" Import passphrase "),p={style:{flex:"1 1 auto",display:"flex","flex-direction":"column","align-items":"center","justify-content":"space-evenly","margin-bottom":"var(--spacing)"}},d={class:"actions-container flex-row"},b={class:"card"},f=Object(a["createVNode"])("h2",null,"Hardware",-1),j=Object(a["createTextVNode"])(" Ledger "),m=Object(a["createTextVNode"])(" Ledger not supported for this browser ");Object(a["popScopeId"])();var O=r((function(e,t,O,h,v,k){var g=Object(a["resolveComponent"])("InputData"),w=Object(a["resolveComponent"])("Button"),y=Object(a["resolveComponent"])("Icon");return Object(a["openBlock"])(),Object(a["createBlock"])("div",c,[Object(a["createVNode"])("div",o,[i,Object(a["createVNode"])(g,{modelValue:h.passphraseInput,"onUpdate:modelValue":t[1]||(t[1]=function(e){return h.passphraseInput=e}),onFiles:h.importFile,disabled:h.isCreatingWallet,placeholder:"Import passphrase or key file"},null,8,["modelValue","onFiles","disabled"]),s,h.isCreatingWallet||h.passphraseInput.length?h.isCreatingWallet?(Object(a["openBlock"])(),Object(a["createBlock"])(w,{key:1,disabled:!h.createdWallet,onClick:h.goToCreatedWallet,icon:h.createdWallet?"":"loader"},{default:r((function(){return[Object(a["createTextVNode"])(Object(a["toDisplayString"])(h.createdWallet?"Passphrase saved? Click here to proceed":"Generating, write down the passphrase"),1)]})),_:1},8,["disabled","onClick","icon"])):(Object(a["openBlock"])(),Object(a["createBlock"])(w,{key:2,disabled:!h.isPassphrase||h.isGeneratingWallet,onClick:t[3]||(t[3]=function(e){return h.isValidPassphrase?h.importPassphrase():h.confirmPassphrase()})},{default:r((function(){return[u]})),_:1},8,["disabled"])):(Object(a["openBlock"])(),Object(a["createBlock"])(w,{key:0,onClick:t[2]||(t[2]=function(e){return h.create()}),disabled:h.passphraseInput.length&&!h.isPassphrase,icon:n("983b")},{default:r((function(){return[l]})),_:1},8,["disabled","icon"])),Object(a["createVNode"])(a["Transition"],{name:"fade-fast",mode:"in-out"},{default:r((function(){return[h.popup.enabled?(Object(a["openBlock"])(),Object(a["createBlock"])("div",{key:h.popup.message,class:"overlay flex-column"},[Object(a["createVNode"])("div",p,[h.popup.icon?(Object(a["openBlock"])(),Object(a["createBlock"])(y,{key:0,icon:h.popup.icon,style:{"font-size":"2em"}},null,8,["icon"])):Object(a["createCommentVNode"])("",!0),Object(a["createTextVNode"])(" "+Object(a["toDisplayString"])(h.popup.message),1)]),Object(a["createVNode"])("div",d,[(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(h.popup.actions,(function(e){return Object(a["openBlock"])(),Object(a["createBlock"])(w,{key:e.name,onClick:e.action},{default:r((function(){return[Object(a["createTextVNode"])(Object(a["toDisplayString"])(e.name),1)]})),_:2},1032,["onClick"])})),128))])])):Object(a["createCommentVNode"])("",!0)]})),_:1})]),Object(a["createVNode"])("div",b,[f,h.supportsWebUSB()?(Object(a["openBlock"])(),Object(a["createBlock"])(w,{key:0,onClick:t[4]||(t[4]=function(e){return h.importLedger()}),icon:n("2eec")},{default:r((function(){return[j]})),_:1},8,["icon"])):(Object(a["openBlock"])(),Object(a["createBlock"])(w,{key:1,disabled:"",icon:n("2eec")},{default:r((function(){return[m]})),_:1},8,["icon"]))])])})),h=n("1da1"),v=(n("96cf"),n("ac1f"),n("1276"),n("498a"),n("3b7a")),k=n("5f06"),g=n("c4f8"),w=n("9509"),y=n("32c4"),x=n("6c02"),B={components:{InputData:v["a"],Button:k["a"],Icon:g["a"]},setup:function(){var e=Object(x["e"])(),t=Object(a["ref"])(""),n=Object(a["reactive"])({}),r=Object(a["computed"])((function(){return t.value.trim().split(/\s+/g).length>=12})),c=Object(a["computed"])((function(){return Object(y["g"])(t.value)})),o=Object(a["ref"])(!1),i=Object(a["ref"])(!1),s=Object(a["ref"])(null),l=function(){var e=Object(h["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:o.value=!0,t.value=Object(y["e"])(),n=Object(y["a"])(t.value),setTimeout(Object(h["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n;case 2:return e.abrupt("return",s.value=e.sent);case 3:case"end":return e.stop()}}),e)}))),1e4);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){e.push({name:"EditWallet",query:{wallet:s.value.id}})},p=function(){var a=Object(h["a"])(regeneratorRuntime.mark((function a(){var r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return i.value=!0,r=Object(y["a"])(t.value),n.enabled=!0,n.icon="loader",n.message="Importing",n.actions=[],a.t0=e,a.next=9,r;case 9:a.t1=a.sent.id,a.t2={wallet:a.t1},a.t3={name:"EditWallet",query:a.t2},a.t0.push.call(a.t0,a.t3);case 13:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}(),d=function(){n.enabled=!0,n.icon="",n.message="This passphrase is not valid, do you want to import it anyway?",n.actions=[{name:"Back",action:function(){return n.enabled=!1}},{name:"Import Passphrase",action:function(){return p()}}]},b=function(){var t=Object(h["a"])(regeneratorRuntime.mark((function t(n){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n){t.next=2;break}return t.abrupt("return");case 2:return t.t0=y["b"],t.t1=JSON,t.next=6,n[0].text();case 6:return t.t2=t.sent,t.t3=t.t1.parse.call(t.t1,t.t2),t.next=10,(0,t.t0)(t.t3);case 10:a=t.sent,e.push({name:"EditWallet",query:{wallet:a.id}});case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=Object(h["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(y["h"])(w["a"]);case 2:n=t.sent,e.push({name:"EditWallet",query:{wallet:n.id}});case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),j=function(){return!!window.navigator.usb};return{passphraseInput:t,popup:n,isPassphrase:r,isValidPassphrase:c,create:l,importLedger:f,supportsWebUSB:j,isCreatingWallet:o,isGeneratingWallet:i,createdWallet:s,goToCreatedWallet:u,importPassphrase:p,confirmPassphrase:d,importFile:b}}},V=(n("da6a"),n("d959")),N=n.n(V);const C=N()(B,[["render",O],["__scopeId","data-v-a6ddacce"]]);t["default"]=C},c8d2:function(e,t,n){var a=n("d039"),r=n("5899"),c="​᠎";e.exports=function(e){return a((function(){return!!r[e]()||c[e]()!=c||r[e].name!==e}))}},da6a:function(e,t,n){"use strict";n("02e1")}}]);
//# sourceMappingURL=chunk-e56a9ece.de4208ff.js.map