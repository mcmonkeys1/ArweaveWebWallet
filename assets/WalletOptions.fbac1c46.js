import{_ as d,c,E as i,G as r}from"./index.65aaca59.js";import{o,c as s,d as e,k as n,t as u,H as v}from"./vendor.4798f9ea.js";const w={class:"wallet-options"},_={class:"left"},f={class:"profile-info"},m={class:"content"},k={class:"bottom"},p={props:{wallet:Object},setup(t){return(x,l)=>(o(),s("div",w,[e("div",_,[n(c,{class:"profile",address:t.wallet.key},null,8,["address"]),e("div",f,[n(i,{wallet:t.wallet},null,8,["wallet"])])]),e("div",m,[e("div",k,[e("div",null,[t.wallet.download?(o(),s("button",{key:0,onClick:l[0]||(l[0]=(...a)=>t.wallet.download&&t.wallet.download(...a))},"Download")):u("",!0)]),e("div",null,[e("button",{onClick:l[1]||(l[1]=a=>v(r)(t.wallet))},"Delete")])])])]))}};var y=d(p,[["__scopeId","data-v-d39499ee"]]);export{y as W};
