if(!self.define){let s,e={};const l=(l,n)=>(l=new URL(l+".js",n).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(n,r)=>{const i=s||("document"in self?document.currentScript.src:"")||location.href;if(e[i])return;let t={};const o=s=>l(s,i),u={module:{uri:i},exports:t,require:o};e[i]=Promise.all(n.map((s=>u[s]||o(s)))).then((s=>(r(...s),t)))}}define(["./workbox-3e4da89b"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"assets/AddWallet.00d4312e.css",revision:null},{url:"assets/AddWallet.74c02981.js",revision:null},{url:"assets/Connect.1ce5cbd5.js",revision:null},{url:"assets/Connect.9764a883.css",revision:null},{url:"assets/Connector.036ba09b.css",revision:null},{url:"assets/Connector.5313903f.js",revision:null},{url:"assets/EditWallet.246706cc.css",revision:null},{url:"assets/EditWallet.918fc47d.js",revision:null},{url:"assets/Explore.4dfccf7d.js",revision:null},{url:"assets/Explore.53561c63.css",revision:null},{url:"assets/index.3dd21099.css",revision:null},{url:"assets/index.f50ad061.js",revision:null},{url:"assets/OverlayPrompt.16f3add6.js",revision:null},{url:"assets/OverlayPrompt.8a2d26a3.css",revision:null},{url:"assets/Profile.25b0bf5c.css",revision:null},{url:"assets/Profile.29333f1b.js",revision:null},{url:"assets/Settings.b6d80ef7.js",revision:null},{url:"assets/Settings.f3c030c0.css",revision:null},{url:"assets/Tx.94cf8f08.js",revision:null},{url:"assets/Tx.de4ce7b5.css",revision:null},{url:"assets/vendor.241c16ad.js",revision:null},{url:"assets/WalletOptions.1e41df53.js",revision:null},{url:"assets/WalletOptions.96081490.css",revision:null},{url:"assets/Welcome.9fff74e7.css",revision:null},{url:"assets/Welcome.c04b0fd3.js",revision:null},{url:"assets/y.f9a54597.js",revision:null},{url:"index.html",revision:"a8e3ba659b37a1a3d01cb7912aa99cb1"},{url:"arweave.svg",revision:"cbca2b1a1c623b628f07465d17215be3"},{url:"arweave-192.png",revision:"728bff6123ed447a1259944bb31bb24d"},{url:"arweave-512.png",revision:"c8d0678a51c5f220e6664ebf2c2e1222"},{url:"manifest.webmanifest",revision:"dfb5fe846d421c7aa523e92eb15dbea3"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map
