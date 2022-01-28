import{d as $,e as h,o as n,x as L,s as w,a,P as j,u as t,c as o,W as T,r as U,w as C,q as u,V as g,z as M,C as J,a7 as B,a3 as q,D as _,a5 as A,ad as E,t as N,ai as G,n as K,a1 as Q,a2 as X}from"./vendor.241c16ad.js";import{_ as D,a as Y,A as z,B as Z,u as ee,b as R,c as te,g as V,I as ae,F as se,T as ne,d as F,W as H,e as W,n as O,h as oe,f as re,i as le}from"./index.f50ad061.js";const ie={class:"frame-scroller"},de=["src"],ce={props:["src"],emits:["load"],setup(v,{emit:s}){const e=$(null),i=$(null),p=$(null),f=l=>{console.log(l),i.value=l.width/l.height},m=()=>{p.value=e.value&&e.value.naturalWidth/e.value.naturalHeight,s("load")},d=h(()=>i.value&&p.value&&i.value<p.value),c=h(()=>i.value&&p.value&&i.value>=p.value);return(l,k)=>(n(),L(Y,{observe:"resize",onResize:f,class:j(["img",{x:t(d),y:t(c)}])},{default:w(()=>[a("div",ie,[a("img",{ref_key:"imgRef",ref:e,src:v.src,onLoad:m},null,40,de)])]),_:1},8,["class"]))}};var ue=D(ce,[["__scopeId","data-v-597b5404"]]);const _e={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"#FFF"},ve=a("path",{d:"M0 0h24v24H0V0z",fill:"none"},null,-1),he=a("path",{d:"M19 9h-4V3H9v6H5l7 7 7-7zm-8 2V5h2v6h1.17L12 13.17 9.83 11H11zm-6 7h14v2H5z"},null,-1),pe=[ve,he];function me(v,s){return n(),o("svg",_e,pe)}var fe={render:me};const ge=A("Load large file"),ye={key:"json",class:"selector data-container box"},xe={class:"raw"},we=T({props:["tx"],setup(v){const s=v,e=U({handler:void 0,payload:void 0,loaded:!1,intent:!1}),i=h(()=>z.gatewayURL+s.tx.id),p=h(()=>"https://arcode.studio/#/"+s.tx.id+"?theme=dark-blue&hideToolbar=true"),f=async()=>{var d,c,l,k,r,x,b,S,I;if(!s.tx||((d=s.tx.data)==null?void 0:d.size)==="0")return;const m=ee(s.tx.tags);if(!m["Bundle-Version"]){if(((c=s.tx.data)==null?void 0:c.type)==="application/x.arweave-manifest+json"||((l=s.tx.data)==null?void 0:l.type)==="text/html"||((k=s.tx.data)==null?void 0:k.type)==="application/pdf")return e.handler={is:"iframe",attrs:{src:i.value,class:["hover"]},containerAttrs:{class:["iframe-container"]}};if(((x=(r=s.tx.data)==null?void 0:r.type)==null?void 0:x.split("/")[0])==="video")return e.handler={is:"iframe",attrs:{src:i.value},containerAttrs:{class:["iframe-container"]}};if(((b=s.tx.data)==null?void 0:b.size)>104857600&&!e.intent)return e.handler="intent";if(((I=(S=s.tx.data)==null?void 0:S.type)==null?void 0:I.split("/")[0])==="image")return e.handler={is:E(ue),attrs:{src:i.value},containerAttrs:{class:["img-container"]}};if(m["App-Name"]==="SmartWeaveContract"||m["App-Name"]==="SmartWeaveContractSource")return e.handler={is:"iframe",attrs:{src:p.value},containerAttrs:{class:["iframe-container"]}};e.handler="raw";try{if(e.payload=await R.transactions.getData(s.tx.id,{decode:!0,string:!0}),e.payload[0]==="{")try{e.payload=JSON.stringify(JSON.parse(e.payload),null,2),e.handler="json"}catch{}}catch{}}};return C(()=>s.tx.id,()=>{e.handler=void 0,e.payload=void 0,e.loaded=!1,e.intent=!1,f()},{immediate:!0}),C(()=>e.intent,()=>{e.intent&&f()}),(m,d)=>t(e).handler==="intent"?(n(),o("div",{key:0,onClick:d[0]||(d[0]=c=>t(e).intent=!0),class:"selector data-container box",style:{display:"flex","justify-content":"center","padding-top":"5em"}},[u(Z,{icon:t(fe)},{default:w(()=>[ge]),_:1},8,["icon"])])):t(e).handler==="json"||t(e).handler==="raw"?(n(),o("div",ye,[a("pre",xe,g(t(e).payload),1)])):t(e).handler?M((n(),o("div",B({key:2},t(e).handler.containerAttrs,{class:"selector box"}),[(n(),L(q(t(e).handler.is),B(t(e).handler.attrs,{onLoad:d[1]||(d[1]=c=>t(e).loaded=!0)}),null,16))],16)),[[J,t(e).loaded]]):_("",!0)}});var ke=D(we,[["__scopeId","data-v-8b857f30"]]);const y=v=>(Q("data-v-a7741538"),v=v(),X(),v),be={class:"meta flex-column"},Se={class:"box",style:{padding:"0"}},Ie=y(()=>a("div",{class:"spacer"},null,-1)),Ae={key:0,class:"row flex-column",style:{"align-items":"center"}},$e={class:"address-icon-margin"},ze={key:1,class:"spacer"},Le={key:2,class:"divider"},Ce={class:"row flex-column",style:{"align-items":"center"}},De={class:"address-icon-margin"},je=y(()=>a("div",{class:"spacer"},null,-1)),Te=y(()=>a("h3",null,"Transaction",-1)),Be=A("ID:\xA0"),Ne={key:0},Re=["href"],Ve={key:1},Fe=["href"],He={key:3},We=y(()=>a("h3",null,"Pending",-1)),Oe={key:0},Pe={key:4},Ue=y(()=>a("h3",null,"Block",-1)),Me=A("ID:\xA0"),Je={key:0,class:"secondary-text"},qe=y(()=>a("h3",null,"Data",-1)),Ee=A(" Fee: "),Ge={key:5},Ke=y(()=>a("h3",null,"Tags",-1)),Qe=[Ke],Xe={key:0,style:{background:"var(--background2)","border-radius":"var(--border-radius)"}},Ye=T({props:{txId:null},setup(v){const s=v,e=te(N(s,"txId")),i=h(()=>e.value.owner&&V(e.value.owner.address)),p=h(()=>e.value.recipient&&V(e.value.recipient)),f=h(()=>{var r;return((r=e.value.data)==null?void 0:r.size)!=0}),m=h(()=>!e.value.block),d=h(()=>{if(!e.value.block)return"";const r=new Date(e.value.block.timestamp*1e3);return r.toLocaleDateString(void 0,{year:"numeric",month:"long",day:"numeric"})+" "+r.toLocaleTimeString()}),c=$(null),l=h(()=>{if(!e.value.tags)return;const r=[];for(const x of e.value.tags)r.push({items:[{name:"",value:x.name,attrs:{disabled:!0}},{name:"",value:x.value,attrs:{disabled:!0}}]});return r});C(()=>s.txId,async()=>{R.transactions.getStatus(s.txId).then(r=>c.value=r.status).catch(()=>c.value="Not Found")},{immediate:!0});const k=N(ae.breakpoints,"verticalContent");return(r,x)=>t(e)?(n(),L(se,{key:0},G({left:w(()=>{var b,S,I;return[a("div",be,[a("div",Se,[a("div",{class:"box-padding flex-column",style:K([t(l).length&&"padding-bottom: 0"])},[u(ne,{tx:t(e),half:"true"},null,8,["tx"]),Ie,t(e).recipient?(n(),o("div",Ae,[a("div",$e,[u(F,{address:t(e).recipient},null,8,["address"])]),u(H,{wallet:t(p)},null,8,["wallet"])])):_("",!0),t(e).recipient?(n(),o("div",ze)):_("",!0),t(e).recipient?(n(),o("div",Le)):_("",!0),a("div",Ce,[a("div",De,[u(F,{address:t(e).owner.address},null,8,["address"])]),u(H,{wallet:t(i)},null,8,["wallet"])]),je,a("div",null,[Te,u(W,{address:t(e).id},{default:w(()=>[Be]),_:1},8,["address"]),t(f)?(n(),o("div",Ne,[a("a",{href:t(z).gatewayURL+t(e).id,target:"_blank"},g((b=t(z).gatewayURLObject)==null?void 0:b.hostname),9,Re)])):_("",!0),((S=t(e).data)==null?void 0:S.type)==="application/x.arweave-manifest+json"?(n(),o("div",Ve,[a("a",{href:t(z).gatewayURL+"tx/"+t(e).id+"/data.json",target:"_blank"},"Manifest",8,Fe)])):_("",!0)]),t(m)?(n(),o("div",He,[We,c.value?(n(),o("div",Oe,"Status: "+g(c.value),1)):_("",!0)])):(n(),o("div",Pe,[Ue,u(W,{address:t(e).block.id},{default:w(()=>[Me]),_:1},8,["address"]),a("div",null,[A(" Height: "+g(t(e).block.height)+" ",1),((I=t(O))==null?void 0:I.height)?(n(),o("span",Je,"/ "+g(t(O).height),1)):_("",!0)]),a("div",null,g(t(d)),1)])),a("div",null,[qe,a("div",null,"Size: "+g(t(oe)(t(e).data.size)),1),a("div",null,[Ee,u(re,{ar:t(e).fee.ar},null,8,["ar"])])]),t(l).length?(n(),o("div",Ge,Qe)):_("",!0)],4),t(l).length?(n(),o("div",Xe,[u(le,{schema:t(l),disabled:""},null,8,["schema"])])):_("",!0)])])]}),_:2},[t(f)?{name:"right",fn:w(()=>[u(ke,{tx:t(e),class:j({inline:!t(k)})},null,8,["tx","class"])])}:void 0]),1024)):_("",!0)}});var tt=D(Ye,[["__scopeId","data-v-a7741538"]]);export{tt as default};
//# sourceMappingURL=Tx.94cf8f08.js.map
