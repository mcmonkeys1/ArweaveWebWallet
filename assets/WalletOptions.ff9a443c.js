import{_ as i,m as r,W as _,B as s,s as u,a5 as w}from"./index.96e14bd9.js";import{I as f}from"./download.05116da4.js";import{p as m,o as n,a as v,d as a,y as o,C as p,z as d,u as l,H as x,a7 as c}from"./vendor.6db1093a.js";const k={class:"wallet-options flex-column"},h={class:"left"},B={class:"profile-info"},C={class:"content"},I={class:"bottom flex-row"},W=c("Download"),y=c("Delete"),N=m({props:{wallet:null},setup(e){return(V,t)=>(n(),v("div",k,[a("div",h,[o(r,{class:"profile",address:e.wallet.key},null,8,["address"]),a("div",B,[o(_,{wallet:e.wallet},null,8,["wallet"])])]),a("div",C,[a("div",I,[e.wallet.download&&!e.wallet.metadata.methods.download?.unavailable?(n(),p(s,{key:0,icon:l(f),onClick:t[0]||(t[0]=()=>e.wallet.download())},{default:d(()=>[W]),_:1},8,["icon"])):x("",!0),o(s,{icon:l(u),onClick:t[1]||(t[1]=D=>l(w)(e.wallet))},{default:d(()=>[y]),_:1},8,["icon"])])])]))}});var z=i(N,[["__scopeId","data-v-3951ea78"]]);export{z as W};
//# sourceMappingURL=WalletOptions.ff9a443c.js.map
