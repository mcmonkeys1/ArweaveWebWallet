if(!self.define){let s,e={};const l=(l,n)=>(l=new URL(l+".js",n).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(n,r)=>{const i=s||("document"in self?document.currentScript.src:"")||location.href;if(e[i])return;let u={};const t=s=>l(s,i),o={module:{uri:i},exports:u,require:t};e[i]=Promise.all(n.map((s=>o[s]||t(s)))).then((s=>(r(...s),u)))}}define(["./workbox-f250d166"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"assets/AddWallet.77239082.css",revision:null},{url:"assets/AddWallet.d2518a91.js",revision:null},{url:"assets/bundle.cd81762e.js",revision:null},{url:"assets/Connect.35aa99d4.js",revision:null},{url:"assets/Connect.5ba7e861.css",revision:null},{url:"assets/Connector.036ba09b.css",revision:null},{url:"assets/Connector.cc79c23d.js",revision:null},{url:"assets/download.988b387e.js",revision:null},{url:"assets/EditWallet.0dd9746d.css",revision:null},{url:"assets/EditWallet.a7801aba.js",revision:null},{url:"assets/Explore.0e73c773.css",revision:null},{url:"assets/Explore.64350ac5.js",revision:null},{url:"assets/index.aecf3942.js",revision:null},{url:"assets/index.dbfe1625.css",revision:null},{url:"assets/launch.11f8242e.js",revision:null},{url:"assets/ListContainer.600be381.css",revision:null},{url:"assets/ListContainer.603bb29e.js",revision:null},{url:"assets/OverlayPrompt.315942fb.css",revision:null},{url:"assets/OverlayPrompt.f57a7a8b.js",revision:null},{url:"assets/Profile.25b0bf5c.css",revision:null},{url:"assets/Profile.b6560ea2.js",revision:null},{url:"assets/ProfilePreview.72575e26.js",revision:null},{url:"assets/ProfilePreview.de7a8e20.css",revision:null},{url:"assets/qr-scanner-worker.min.56d417f3.js",revision:null},{url:"assets/Settings.64eb9c34.js",revision:null},{url:"assets/Settings.76282bfe.css",revision:null},{url:"assets/Tx.6bb6ef8e.js",revision:null},{url:"assets/Tx.881e3009.css",revision:null},{url:"assets/vendor.e3affc69.js",revision:null},{url:"assets/WalletOptions.b275c07f.css",revision:null},{url:"assets/WalletOptions.f3788fbb.js",revision:null},{url:"assets/Welcome.9a129f00.css",revision:null},{url:"assets/Welcome.c34d07e4.js",revision:null},{url:"assets/y.6d5da4f7.js",revision:null},{url:"index.html",revision:"f51e5c3b6c0c0538b48728f4163476a6"},{url:"arweave.svg",revision:"cbca2b1a1c623b628f07465d17215be3"},{url:"arweave-192.png",revision:"728bff6123ed447a1259944bb31bb24d"},{url:"arweave-512.png",revision:"c8d0678a51c5f220e6664ebf2c2e1222"},{url:"manifest.webmanifest",revision:"dfb5fe846d421c7aa523e92eb15dbea3"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map
