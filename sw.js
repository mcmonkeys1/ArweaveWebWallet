if(!self.define){let s,e={};const l=(l,r)=>(l=new URL(l+".js",r).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(r,i)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let t={};const o=s=>l(s,n),u={module:{uri:n},exports:t,require:o};e[n]=Promise.all(r.map((s=>u[s]||o(s)))).then((s=>(i(...s),t)))}}define(["./workbox-3e4da89b"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"assets/AddWallet.00d4312e.css",revision:null},{url:"assets/AddWallet.4d599e84.js",revision:null},{url:"assets/Connect.0d857460.js",revision:null},{url:"assets/Connect.266ddc5f.css",revision:null},{url:"assets/Connector.036ba09b.css",revision:null},{url:"assets/Connector.ecc168ea.js",revision:null},{url:"assets/EditWallet.246706cc.css",revision:null},{url:"assets/EditWallet.a8c2c393.js",revision:null},{url:"assets/Explore.4105af65.css",revision:null},{url:"assets/Explore.5d19f5f2.js",revision:null},{url:"assets/index.43663e67.css",revision:null},{url:"assets/index.9bfdbd22.js",revision:null},{url:"assets/OverlayPrompt.06051262.css",revision:null},{url:"assets/OverlayPrompt.a0c5e019.js",revision:null},{url:"assets/Profile.25b0bf5c.css",revision:null},{url:"assets/Profile.9b3175bb.js",revision:null},{url:"assets/ProfilePreview.dbcb97a2.js",revision:null},{url:"assets/ProfilePreview.de7a8e20.css",revision:null},{url:"assets/Settings.00b45fe5.js",revision:null},{url:"assets/Settings.61089840.css",revision:null},{url:"assets/Tx.0ff911d2.js",revision:null},{url:"assets/Tx.1877c5a4.css",revision:null},{url:"assets/vendor.73e19f7e.js",revision:null},{url:"assets/WalletOptions.4196058d.js",revision:null},{url:"assets/WalletOptions.96081490.css",revision:null},{url:"assets/Welcome.6f2366e9.css",revision:null},{url:"assets/Welcome.d738ae86.js",revision:null},{url:"assets/y.a42d9e14.js",revision:null},{url:"index.html",revision:"7945b03a51f52a255c7794790b792682"},{url:"arweave.svg",revision:"cbca2b1a1c623b628f07465d17215be3"},{url:"arweave-192.png",revision:"728bff6123ed447a1259944bb31bb24d"},{url:"arweave-512.png",revision:"c8d0678a51c5f220e6664ebf2c2e1222"},{url:"manifest.webmanifest",revision:"dfb5fe846d421c7aa523e92eb15dbea3"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map
