import{_ as i,l as r,W as _,B as s,r as u,a4 as w}from"./index.4fe06256.js";import{I as f}from"./download.4aa962c3.js";import{l as m,o as n,c as v,a,s as l,y as x,x as d,u as o,E as p,a7 as c}from"./vendor.eb613411.js";const k={class:"wallet-options flex-column"},h={class:"left"},B={class:"profile-info"},I={class:"content"},W={class:"bottom flex-row"},y=c("Download"),C=c("Delete"),N=m({props:{wallet:null},setup(e){return(V,t)=>(n(),v("div",k,[a("div",h,[l(r,{class:"profile",address:e.wallet.key},null,8,["address"]),a("div",B,[l(_,{wallet:e.wallet},null,8,["wallet"])])]),a("div",I,[a("div",W,[e.wallet.download&&!e.wallet.metadata.methods.download?.unavailable?(n(),x(s,{key:0,icon:o(f),onClick:t[0]||(t[0]=()=>e.wallet.download())},{default:d(()=>[y]),_:1},8,["icon"])):p("",!0),l(s,{icon:o(u),onClick:t[1]||(t[1]=D=>o(w)(e.wallet))},{default:d(()=>[C]),_:1},8,["icon"])])])]))}});var g=i(N,[["__scopeId","data-v-3951ea78"]]);export{g as W};
//# sourceMappingURL=WalletOptions.4c7c924e.js.map
