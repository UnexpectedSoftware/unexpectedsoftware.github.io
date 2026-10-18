var _p=Object.defineProperty;var vp=(n,e,t)=>e in n?_p(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var Fe=(n,e,t)=>vp(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const na="ABCDEFGHJKLMNPQRSTUVWXYZ23456789",qf=5,xp=4;function Sp(n=Math.random){let e="";for(let t=0;t<qf;t++){const i=Math.min(na.length-1,Math.floor(n()*na.length));e+=na[i]}return e}function Mp(n){const e=n.trim().toUpperCase().replace(/[^A-Z0-9]/g,"");if(e.length!==qf)return null;for(const t of e)if(!na.includes(t))return null;return e}function yp(n){return n<xp}function Ep(n,e,t){const i=new Set([...t,n]);return i.delete(e),[e,...[...i].sort()].map((s,a)=>({id:s,label:s===n?"You":`Player ${a+1}`,host:s===e}))}function Yf(){return{grants:new Map}}function Kf(n,e){const t=n.grants.get(e.ballId);return t!==void 0?t===e.peerId?"grant":"deny":(n.grants.set(e.ballId,e.peerId),"grant")}function $f(n,e){return e>=2&&n===e*2?e:null}function bp(n,e,t){const i=Math.min(1,Math.max(0,t));return{x:n.x+(e.x-n.x)*i,y:n.y+(e.y-n.y)*i,z:n.z+(e.z-n.z)*i,time:n.time+(e.time-n.time)*i,vy:n.vy+(e.vy-n.vy)*i,value:i<.5?n.value:e.value,radius:n.radius+(e.radius-n.radius)*i,alive:n.alive&&e.alive,skin:i<.5?n.skin:e.skin,seq:e.seq}}function Tp(n,e,t=.08){if(n.length===0)return null;const i=e-t;if(n.length===1||i<=n[0].t)return n[0].pose;let r=0;for(;r<n.length-1&&n[r+1].t<=i;)r++;const s=n[r],a=n[Math.min(r+1,n.length-1)];if(s===a)return s.pose;const o=a.t-s.t,c=o>1e-6?(i-s.t)/o:1;return bp(s.pose,a.pose,c)}/*! noble-secp256k1 - MIT License (c) 2019 Paul Miller (paulmillr.com) */const $c=Object.freeze,Si=0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2fn,ds=0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141n,Zf=0x79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798n,Jf=0x483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8n,wp=$c({p:Si,n:ds,h:1n,a:0n,b:7n,Gx:Zf,Gy:Jf}),gn=32,Kl=n=>n instanceof Uint8Array||ArrayBuffer.isView(n)&&n.constructor.name==="Uint8Array"&&n.BYTES_PER_ELEMENT===1,cn=(n,e,t="")=>{if(Kl(n)&&(e===void 0||n.length===e))return n;const i=Kl(n),r=e!==void 0?` of length ${e}`:"",s=i?`length=${n.length}`:`type=${typeof n}`,a=(t?`"${t}" `:"")+"expected Uint8Array"+r+", got "+s;throw i?new RangeError(a):new TypeError(a)},Ap=n=>Uint8Array.from(n),Rp=(n,e,t)=>Ap(cn(n,t,e)),Qf=(n,e)=>n.toString(16).padStart(e,"0"),jf=n=>{let e="";for(const t of cn(n))e+=Qf(t,2);return e},ed=n=>{const e="hex invalid";if(typeof n!="string")throw new TypeError(e);if(n.length%2||!/^[\da-f]*$/i.test(n))throw new RangeError(e);const t=new Uint8Array(n.length/2);for(let i=0,r=0;i<t.length;i++,r+=2){const s=n.charCodeAt(r),a=n.charCodeAt(r+1);t[i]=((s&15)+(s>>6)*9)*16+(a&15)+(a>>6)*9}return t},$l=()=>{var e;const n=(e=globalThis==null?void 0:globalThis.crypto)==null?void 0:e.subtle;if(n)return n;throw new Error("crypto.subtle must be defined, consider polyfill")},dr=(...n)=>{let e=0;for(const r of n)e+=cn(r).length;const t=new Uint8Array(e);let i=0;for(const r of n)t.set(r,i),i+=r.length;return t},Zc=(n=gn)=>{const e=globalThis==null?void 0:globalThis.crypto;if(typeof(e==null?void 0:e.getRandomValues)!="function")throw new Error("crypto.getRandomValues must be defined, consider polyfill");return e.getRandomValues(new Uint8Array(n))},Cp=BigInt,hs=(n,e,t,i="bad number: out of range")=>{if(typeof n!="bigint")throw new TypeError(i);if(e<=n&&n<t)return n;throw new RangeError(i)},Le=(n,e=Si)=>(n%=e)>=0n?n:e+n,Pa=n=>Le(n,ds),Pp=(n,e)=>{if(n===0n)throw new Error("invert: expected non-zero number");if(e<=1n)throw new Error("invert: expected modulus > 1, got "+e);let t=Le(n,e),i=e,r=0n,s=1n;for(;t!==0n;){const o=i/t,c=i-t*o,l=r-s*o;i=t,t=c,r=s,s=l}if(i!==1n)throw new Error("invert: does not exist");return Le(r,e)},td=n=>{const e=Up[n];if(typeof e!="function")throw new Error("hashes."+n+" not set");return e},Zl=(n,e,t)=>cn(td(n)(e,t),gn,"digest"),Jl=async(n,e,t)=>cn(await td(n)(e,t),gn,"digest"),qa=n=>{if(n instanceof Mi)return n;throw new TypeError("Point expected")},Ya="bad point: not on curve",nd=n=>Le(Le(n*n)*n+7n),Ql=n=>hs(n,0n,Si),$r=n=>hs(n,1n,Si),id=n=>hs(n,1n,ds),La=n=>!(n&1n),Lp=n=>Uint8Array.of(La(n)?2:3),rd=n=>{const e=nd($r(n));let t=1n;for(let i=e,r=(Si+1n)/4n;r>0n;r>>=1n)r&1n&&(t=t*i%Si),i=i*i%Si;if(Le(t*t)!==e)throw new Error("sqrt invalid");return new Mi(n,La(t)?t:Le(-t),1n)},Hn=class Hn{constructor(e,t,i){Fe(this,"X");Fe(this,"Y");Fe(this,"Z");this.X=Ql(e),this.Y=$r(t),this.Z=Ql(i),$c(this)}static CURVE(){return wp}static fromAffine(e){const{x:t,y:i}=e;return t===0n&&i===0n?Zr:new Hn(t,i,1n)}static fromBytes(e){cn(e);const t=e.length,i=e[0],r=pa(e,1,33);try{if(t===33&&(i===2||i===3)){const s=rd(r);return i===3?s.negate():s}if(t===65&&i===4)return new Hn(r,pa(e,33,65),1n).assertValidity()}catch{throw new Error(Ya)}throw new Error(Ya)}static fromHex(e){return Hn.fromBytes(ed(e))}get x(){return this.toAffine().x}get y(){return this.toAffine().y}equals(e){const{X:t,Y:i,Z:r}=this,{X:s,Y:a,Z:o}=qa(e);return Le(t*o)===Le(s*r)&&Le(i*o)===Le(a*r)}is0(){return this.Z===0n}negate(){return new Hn(this.X,Le(-this.Y),this.Z)}double(){return this.add(this)}add(e){const{X:t,Y:i,Z:r}=this,{X:s,Y:a,Z:o}=qa(e),c=0n,l=7n;let p=0n,h=0n,f=0n;const m=Le(l*3n);let v=Le(t*s),S=Le(i*a),d=Le(r*o),u=Le(t+i),_=Le(s+a);u=Le(u*_),_=Le(v+S),u=Le(u-_),_=Le(t+r);let T=Le(s+o);return _=Le(_*T),T=Le(v+d),_=Le(_-T),T=Le(i+r),p=Le(a+o),T=Le(T*p),p=Le(S+d),T=Le(T-p),f=Le(c*_),p=Le(m*d),f=Le(p+f),p=Le(S-f),f=Le(S+f),h=Le(p*f),S=Le(v+v),S=Le(S+v),d=Le(c*d),_=Le(m*_),S=Le(S+d),d=Le(v-d),d=Le(c*d),_=Le(_+d),v=Le(S*_),h=Le(h+v),v=Le(T*_),p=Le(u*p),p=Le(p-v),v=Le(u*S),f=Le(T*f),f=Le(f+v),new Hn(p,h,f)}subtract(e){return this.add(qa(e).negate())}multiply(e,t=!0){if(!t&&e===0n)return Zr;if(id(e),e===1n)return this;if(this.equals(Ni))return Gp(e).p;let i=Zr,r=Ni,s=this;for(let a=0;t?a<256:e>0n;a++)e&1n?i=i.add(s):t&&(r=r.add(s)),s=s.double(),e>>=1n;return i}multiplyUnsafe(e){return this.multiply(e,!1)}toAffine(){const{X:e,Y:t,Z:i}=this;if(i===0n)return{x:0n,y:0n};if(i===1n)return{x:e,y:t};const r=Pp(i,Si);if(Le(i*r)!==1n)throw new Error("inverse invalid");return{x:Le(e*r),y:Le(t*r)}}assertValidity(){const{x:e,y:t}=this.toAffine();if($r(e),$r(t),Le(t*t)!==nd(e))throw new Error(Ya);return this}toBytes(e=!0){const{x:t,y:i}=this.assertValidity().toAffine(),r=$n(t);return e?dr(Lp(i),r):dr(Uint8Array.of(4),r,$n(i))}toHex(e){return jf(this.toBytes(e))}};Fe(Hn,"BASE"),Fe(Hn,"ZERO");let Mi=Hn;const Ni=new Mi(Zf,Jf,1n),Zr=new Mi(0n,1n,0n);Mi.BASE=Ni;Mi.ZERO=Zr;const Dp=(n,e,t)=>Ni.multiply(e,!1).add(n.multiply(t,!1)).assertValidity(),zi=n=>Cp("0x"+(jf(n)||"0")),pa=(n,e,t)=>zi(n.subarray(e,t)),$n=n=>ed(Qf(hs(n,0n,2n**256n),gn*2)),Ip=n=>{const e=zi(cn(n,gn,"secret key"));return hs(e,1n,ds,"invalid secret key: outside of range")},jl="SHA-256",Up={hmacSha256Async:async(n,e)=>{const t=$l(),i=await t.importKey("raw",n,{name:"HMAC",hash:jl},!1,["sign"]);return new Uint8Array(await t.sign("HMAC",i,e))},hmacSha256:void 0,sha256Async:async n=>new Uint8Array(await $l().digest(jl,n)),sha256:void 0},Np=n=>{if(n=n===void 0?Zc(48):n,cn(n),n.length<48||n.length>1024)throw new RangeError("expected 48-1024b");const e=Le(zi(n),ds-1n);return $n(e+1n)},Fp=n=>e=>{const t=Np(e);return{secretKey:t,publicKey:n(t)}},sd=n=>Uint8Array.from("BIP0340/"+n,e=>e.charCodeAt(0)),Ho=(n,...e)=>{const t=Zl("sha256",sd(n));return Zl("sha256",dr(t,t,...e))},Go=(n,...e)=>Jl("sha256Async",sd(n)).then(t=>Jl("sha256Async",dr(t,t,...e))),Jc=n=>{const e=Ip(n),t=Ni.multiply(e),{x:i,y:r}=t.assertValidity().toAffine(),s=La(r)?e:Pa(-e),a=$n(i);return{d:s,px:a}},Qc=n=>Pa(zi(n)),ad=(...n)=>Qc(Ho("challenge",...n)),od=async(...n)=>Qc(await Go("challenge",...n)),cd=n=>Jc(n).px,Op=Fp(cd),ld=(n,e,t)=>{const i=Rp(n,"message"),{px:r,d:s}=Jc(e);return{m:i,px:r,d:s,a:cn(t,gn)}},ud=n=>{const e=Qc(n);if(e===0n)throw new Error("sign failed: k is zero");const{px:t,d:i}=Jc($n(e));return{rx:t,k:i}},fd=(n,e,t,i)=>dr(e,$n(Pa(n+t*i))),dd="invalid signature produced",Bp=(n,e,t=Zc(gn))=>{const{m:i,px:r,d:s,a}=ld(n,e,t),o=$n(s^zi(Ho("aux",a))),{rx:c,k:l}=ud(Ho("nonce",o,r,i)),p=fd(l,c,ad(c,r,i),s);if(!pd(p,i,r))throw new Error(dd);return p},kp=async(n,e,t=Zc(gn))=>{const{m:i,px:r,d:s,a}=ld(n,e,t),o=$n(s^zi(await Go("aux",a))),{rx:c,k:l}=ud(await Go("nonce",o,r,i)),p=fd(l,c,await od(c,r,i),s);if(!await md(p,i,r))throw new Error(dd);return p},zp=(n,e)=>n instanceof Promise?n.then(e):e(n),hd=(n,e,t,i)=>{const r=cn(n,64,"signature"),s=cn(e,void 0,"message"),a=cn(t,gn,"publicKey");let o,c,l,p;try{const h=zi(a);o=rd(h),c=$r(pa(r,0,gn)),l=id(pa(r,gn,64)),p=dr($n(c),a,s)}catch{return!1}return zp(i(p),h=>{try{const{x:f,y:m}=Dp(o,l,Pa(-h)).toAffine();return!(!La(m)||f!==c)}catch{return!1}})},pd=(n,e,t)=>hd(n,e,t,ad),md=async(n,e,t)=>hd(n,e,t,od),gd=$c({keygen:Op,getPublicKey:cd,sign:Bp,verify:pd,signAsync:kp,verifyAsync:md}),Hp=()=>{const n=[];let e=Ni,t=e;for(let i=0;i<33;i++){t=e,n.push(t);for(let r=1;r<128;r++)t=t.add(e),n.push(t);e=t.double()}return n};let eu;const tu=(n,e)=>{const t=e.negate();return n?t:e},Gp=n=>{const e=eu||(eu=Hp());let t=Zr,i=Ni;for(let r=0;r<33;r++){let s=Number(n&255n);n>>=8n,s>128&&(s-=256,n+=1n);const a=r*128,o=a+Math.abs(s)-1,c=r%2!==0,l=s<0;s===0?i=i.add(tu(c,e[a])):t=t.add(tu(l,e[o]))}if(n!==0n)throw new Error("invalid wnaf");return{p:t,f:i}},{floor:Vo,min:Vp,sin:Wp}=Math,zt="Trystero",jc=(n,e)=>Array(n).fill(void 0).map(e),Xp="0123456789AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz",Hi=n=>jc(n,()=>Xp[Vo(Math.random()*62)]??"").join(""),tn=Hi(20),Gi=Promise.all.bind(Promise),_d=typeof window<"u",{entries:hr,fromEntries:vd,keys:hn,values:zn}=Object,Rt=()=>{},xd="candidate",Qe=n=>(n!==null&&clearTimeout(n),null),Ke=n=>new Error(`${zt}: ${n}`),pr=(n,e)=>n instanceof Error&&n.message?n.message:typeof n=="string"&&n?n:Vt(n??e),_i=(n,e)=>n instanceof Error?n:Ke(pr(n,e)),qp=new TextEncoder,Yp=new TextDecoder,Vn=n=>qp.encode(n),Ii=n=>Yp.decode(n),is=n=>n.reduce((e,t)=>e+t.toString(16).padStart(2,"0"),""),mr=(...n)=>n.join("@"),Kp=(n,e)=>{const t=[...n],i=()=>{const s=Wp(e++)*1e4;return s-Vo(s)};let r=t.length;for(;r;){const s=Vo(i()*r--),a=t[r];t[r]=t[s],t[s]=a}return t},$p=(n,e,t,i=!1)=>{var r,s;return((r=n.relayConfig)==null?void 0:r.urls)||(i?Kp(e,Sd(n.appId)):e).slice(0,((s=n.relayConfig)==null?void 0:s.redundancy)??t)},Vt=JSON.stringify,ps=n=>{try{return JSON.parse(n)}catch{throw Ke(`failed to parse JSON: ${n}`)}},Sd=(n,e=Number.MAX_SAFE_INTEGER)=>n.split("").reduce((t,i)=>t+i.charCodeAt(0),0)%e,nu=3333,Zp=6e4,Cr={};let Jr=null,Qr=null;const Jp=()=>{Jr||(Jr=new Promise(n=>{Qr=n}).finally(()=>{Qr=null,Jr=null}))},Qp=()=>{Qr==null||Qr()},jp=(n,e,t)=>{const i={};let r=!1,s=!1,a,o=Rt;i.isClosed=!1,i.ready=new Promise(l=>o=l);const c=()=>{if(i.isClosed)return;a=void 0,s=!1;const l=new WebSocket(n);l.onclose=()=>{if(i.isClosed||s)return;if(s=!0,Jr){Jr.then(c);return}const p=Cr[n]??(Cr[n]=nu);a=setTimeout(c,Math.random()*p),Cr[n]=Vp(p*2,Zp)},l.onmessage=p=>e(String(p.data)),i.socket=l,i.url=l.url,l.onopen=()=>{const p=r;r=!0,o(i),Cr[n]=nu,p&&(t==null||t())},i.send=p=>{l.readyState===1&&l.send(p)}};return i.close=()=>{i.isClosed=!0,a!==void 0&&(clearTimeout(a),a=void 0),i.socket.close()},c(),i},em=n=>{const e={},t=new WeakMap,i=a=>{const o=t.get(a);if(!o)throw Ke("relay bookkeeping missing registration for relay client");return o},r=()=>{const a={},o=c=>a[c]??(a[c]={});return{forKey:o,forRelay:c=>o(i(c))}},s=(a,o)=>(e[a]=o,t.set(o,a),o);return{register:(a,o)=>{const c=e[a];return c||s(a,o())},keyOf:i,scoped:r,getSockets:()=>vd(hr(e).flatMap(([a,o])=>{const c=n(o);return c?[[a,c]]:[]}))}},tm=()=>{if(_d){const n=new AbortController;return addEventListener("online",Qp,{signal:n.signal}),addEventListener("offline",Jp,{signal:n.signal}),()=>n.abort()}return Rt},el="AES-GCM",Ka={},nm=n=>btoa(String.fromCharCode.apply(null,Array.from(new Uint8Array(n)))),im=n=>{const e=atob(n);return new Uint8Array(e.length).map((t,i)=>e.charCodeAt(i)).buffer},Da=async(n,e)=>new Uint8Array(await crypto.subtle.digest(n,Vn(e))),gr=async n=>Ka[n]??(Ka[n]=Array.from(await Da("SHA-1",n)).map(e=>e.toString(36)).join("")),rm=async(n,e,t)=>crypto.subtle.importKey("raw",await crypto.subtle.digest({name:"SHA-256"},Vn(`${n}:${e}:${t}`)),{name:el},!1,["encrypt","decrypt"]),sm=async(n,e)=>is(await Da("SHA-256",`${zt}:${n}:${e}`)),Md="$",yd=",",am=async(n,e)=>{const t=crypto.getRandomValues(new Uint8Array(16));return t.join(yd)+Md+nm(await crypto.subtle.encrypt({name:el,iv:t},await n,Vn(e)))},om=async(n,e)=>{const[t,i]=e.split(Md);return Ii(await crypto.subtle.decrypt({name:el,iv:new Uint8Array((t==null?void 0:t.split(yd).map(Number))??[])},await n,im(i??"")))},cm=18e4;var lm=class{constructor(n){Fe(this,"makeOffer");Fe(this,"leased",new Map);Fe(this,"destroyed",!1);this.makeOffer=n}claimLeased(n){const e=this.leased.get(n);e&&(Qe(e),this.leased.delete(n))}reclaimLeased(n){this.leased.has(n)&&(this.claimLeased(n),n.destroy())}checkout(n,e,t){const i=async(r=!1)=>{if(this.destroyed)throw Ke("room left while preparing offer");const s=this.makeOffer();try{const a=await t(s);if(this.destroyed)throw Ke("room left while preparing offer");return e?(this.leased.set(s,setTimeout(()=>{this.leased.delete(s),s.destroy()},cm)),{peer:s,offer:a,claim:()=>this.claimLeased(s),reclaim:()=>this.reclaimLeased(s)}):{peer:s,offer:a}}catch(a){if(s.destroy(),!r&&!this.destroyed)return i(!0);throw a}};return Gi(jc(n,()=>i()))}getOffers(n,e){return this.checkout(n,!0,e)}destroy(){this.destroyed=!0,this.leased.forEach((n,e)=>{Qe(n),e.destroy()}),this.leased.clear()}};const $a=Ke("incorrect password for overlapping room"),um=(n,e,t)=>{const i=a=>Da("SHA-256",`${a}:${n}:${e}:${t}`).then(is),r=async(a,o,c)=>{if(!n)return;if(c){const p=Hi(36);await a({__trystero_pw:"challenge",c:p});const{data:h}=await o();if(!h||typeof h!="object"||h.__trystero_pw!=="response"||typeof h.h!="string")throw $a;const f=await i(p);if(h.h!==f)throw $a;return}const{data:l}=await o();if(!l||typeof l!="object"||l.__trystero_pw!=="challenge"||typeof l.c!="string")throw $a;await a({__trystero_pw:"response",h:await i(l.c)})};return{run:r,compose:a=>n||a?async(o,c,l,p)=>{await r(c,l,p),await(a==null?void 0:a(o,c,l,p))}:void 0}},fm=n=>{const e=pr(n,"unknown error");return e.startsWith("handshake ")?e:`handshake failed: ${e}`},dm=({onPeerHandshake:n,onHandshakeError:e,handshakeTimeoutMs:t,sendHandshakeData:i,sendHandshakeReady:r,onActivate:s,onFailure:a})=>{const o={},c=(h,f)=>{const m=o[h];!m||f&&m.peer!==f||m.isActive||!m.didLocalHandshakePass||!m.didReceiveRemoteReady||(m.isActive=!0,m.handshakeTimer=Qe(m.handshakeTimer),s(h,m.peer))},l=(h,f,m)=>{const v=o[h];if(!v||v.peer!==f)return;const S=fm(m);e==null||e(h,S),a(h,f,Ke(S))},p=(h,f)=>{const m=o[h];!m||m.peer!==f||m.isActive||(m.didLocalHandshakePass=!0,r("",h).catch(v=>l(h,f,Ke(`failed sending handshake readiness: ${pr(v,"unknown send failure")}`))),c(h,f))};return{addPeer:(h,f)=>{o[h]={peer:f,isActive:!1,didLocalHandshakePass:!1,didReceiveRemoteReady:!1,handshakeTimer:null,pendingHandshakePayloads:[],handshakeWaiters:[]}},clearPeer:(h,f)=>{const m=o[h];m&&(m.handshakeTimer=Qe(m.handshakeTimer),m.pendingHandshakePayloads.length=0,m.handshakeWaiters.splice(0).forEach(v=>v.reject(f)),delete o[h])},canReceiveFromPeer:(h,f)=>{const m=o[h];return!!(m&&(m.isActive||f))},start:(h,f)=>{const m=o[h];if(!m||m.peer!==f)return;m.handshakeTimer=setTimeout(()=>l(h,f,Ke(`handshake timed out after ${t}ms`)),t);const v=async(u,_)=>{await i(u,h,_)},S=()=>new Promise((u,_)=>{const T=o[h];if(!T||T.peer!==f){_(Ke("peer disconnected during handshake"));return}const M=T.pendingHandshakePayloads.shift();if(M){u(M);return}T.handshakeWaiters.push({resolve:u,reject:b=>_(b)})}),d=tn<h;Promise.resolve(n==null?void 0:n(h,v,S,d)).then(()=>p(h,f)).catch(u=>l(h,f,_i(u,"handshake failed")))},receiveHandshakeData:(h,f,m)=>{const v=o[f];if(!v||v.isActive)return;const S=m===void 0?{data:h}:{data:h,metadata:m},d=v.handshakeWaiters.shift();if(d){d.resolve(S);return}if(v.pendingHandshakePayloads.length>=16){l(f,v.peer,Ke("too many pending handshake messages"));return}v.pendingHandshakePayloads.push(S)},receiveHandshakeReady:h=>{const f=o[h];!f||f.isActive||(f.didReceiveRemoteReady=!0,c(h))}}},Ed=16384,Wo=1e4,ma=12e4,hm=15e3,pm=150,mm=5e3,iu="icecandidate",ru="icegatheringstatechange",gm="iceconnectionstatechange",Pr="offer",_m="answer",vm=/out of range/i,xm=128,Sm=8192,su=n=>n.replace(/ (\S+\.local) (\d+) typ host/g," 127.0.0.1 $2 typ host");var au=(n,{trickleIce:e,rtcConfig:t,rtcPolyfill:i,turnConfig:r,_test_only_mdnsHostFallbackToLoopback:s})=>{const a=new(i??RTCPeerConnection)({iceServers:ou.concat(r??[]),...t}),o={},c=new Set,l=[],p=[];let h=null;const f=e!==!1,m=[],v=[];let S,d=!1,u=!1,_=null,T=null,M=!1;const b=H=>{S&&(S(H),S=void 0)},w=()=>T=Qe(T),D=()=>{var H;M||(M=!0,c.forEach(ie=>ie()),h=Qe(h),p.length=0,w(),(H=o.close)==null||H.call(o))},x=H=>{H.type===Pr&&(b(H),!o.signal&&!a.remoteDescription)||(o.signal?o.signal(H):l.push(H))},C=H=>{const ie=o.signal;o.signal=me=>{ie==null||ie(me),H(me)},l.length>0&&l.splice(0).forEach(me=>{var le;return(le=o.signal)==null?void 0:le.call(o,me)})},N=H=>s?su(H):H,O=H=>{if(!s||typeof H.candidate!="string")return H;const ie=su(H.candidate);return ie===H.candidate?H:{...H,candidate:ie}},V=H=>{var ie,me;return{type:((ie=H.localDescription)==null?void 0:ie.type)??Pr,sdp:N(((me=H.localDescription)==null?void 0:me.sdp)??"")}},E=()=>{var ie,me;const H=(ie=a.remoteDescription)==null?void 0:ie.sdp;return H?((me=H.match(/a=ice-ufrag:([^\s]+)/))==null?void 0:me[1])??null:null},A=()=>{var H,ie;return(((ie=(H=a.remoteDescription)==null?void 0:H.sdp)==null?void 0:ie.match(/^m=/gm))??[]).length},L=H=>{if(!a.remoteDescription)return!1;const ie=A();if(typeof H.sdpMLineIndex=="number"&&ie>0&&H.sdpMLineIndex>=ie)return!1;const me=E();return!(me&&H.usernameFragment&&H.usernameFragment!==me)},U=async H=>{try{return await a.addIceCandidate(H),!0}catch(ie){if(ie instanceof Error&&vm.test(ie.message)&&typeof H.sdpMLineIndex=="number")return!1;throw ie}},F=H=>{m.length>=xm&&m.shift(),m.push(H)},W=async()=>{if(!a.remoteDescription||m.length===0)return;const H=E(),ie=m.splice(0),me=[];for(const le of ie)if(!(H&&le.usernameFragment&&le.usernameFragment!==H)){if(!L(le)){me.push(le);continue}await U(le)||me.push(le)}me.forEach(F)},P=async H=>{if(L(H)){await U(H)||F(H);return}F(H)},I=H=>{H.binaryType="arraybuffer",H.bufferedAmountLowThreshold=65535;const ie=()=>{console.warn(`${zt}: invalid or excessive data before handler registration; disconnecting peer`),H.close(),a.close(),D()};H.onmessage=me=>{const le=me.data;if(!M){if(!(le instanceof ArrayBuffer)&&!ArrayBuffer.isView(le)||le.byteLength>16515){ie();return}if(o.data)o.data(le);else{if(p.length>=64){ie();return}h||(h=setTimeout(ie,Wo)),p.push(le)}}},H.onopen=()=>{var me;return(me=o.connect)==null?void 0:me.call(o)},H.onclose=D,H.onerror=({error:me})=>{var le;M||(me==null?void 0:me.errorDetail)==="sctp-failure"&&(me.sctpCauseCode===12||/^User-Initiated Abort\b/.test(me.message))||(le=o.error)==null||le.call(o,_i(me,"data channel error"))}},X=(t==null?void 0:t.iceServers)??ou.concat(r??[]),se=H=>X.some(({urls:ie})=>(Array.isArray(ie)?ie:[ie]).some(me=>H.test(me))),oe=se(/^turns?:/i),Me=!oe&&se(/^stuns?:/i),Ne=oe?/\btyp relay\b/:Me?/\btyp (?:srflx|relay|prflx)\b/:/\btyp (?:host|srflx|relay|prflx)\b/,Oe=async H=>(await new Promise(ie=>{let me=null,le=null;const Ee=()=>{Qe(me),Qe(le),H.removeEventListener(ru,He),H.removeEventListener(iu,it),c.delete(Ee),ie()},We=(Be="")=>{var Ze;const $e=`${((Ze=H.localDescription)==null?void 0:Ze.sdp)??""}
${Be}`;Ne.test($e)&&(Qe(le),le=setTimeout(Ee,pm))},He=()=>{H.iceGatheringState==="complete"||M?Ee():We()},it=Be=>{const{candidate:$e}=Be;$e?We($e.candidate):Ee()};c.add(Ee),me=setTimeout(Ee,hm),H.addEventListener(ru,He),H.addEventListener(iu,it),He()}),V(H)),Q=async()=>{const H=f?V(a):await Oe(a);return M||x(H),H};n?(_=a.createDataChannel("data"),I(_)):a.ondatachannel=({channel:H})=>{_=H,I(H)};const ee=async(H=!1)=>{var ie,me;if(a.connectionState==="closed"||!H&&(d||a.signalingState!=="stable")){a.connectionState==="closed"&&b();return}try{return d=!0,H&&(a.remoteDescription&&a.signalingState!=="stable"&&a.signalingState!=="closed"&&((ie=a.localDescription)==null?void 0:ie.type)===Pr&&await a.setLocalDescription({type:"rollback"}),typeof a.restartIce=="function"&&a.restartIce()),await a.setLocalDescription(H?await a.createOffer({iceRestart:!0}):void 0),await Q()}catch(le){H||b(),(me=o.error)==null||me.call(o,_i(le,"failed to create local offer"))}finally{d=!1}};a.onnegotiationneeded=async()=>ee(!1),a.onicecandidate=({candidate:H})=>{if(!f||!H)return;const ie=O(typeof H.toJSON=="function"?H.toJSON():{candidate:H.candidate,sdpMid:H.sdpMid,sdpMLineIndex:H.sdpMLineIndex,usernameFragment:H.usernameFragment});x({type:xd,sdp:JSON.stringify(ie)})};const _e=()=>{if(a.connectionState==="failed"||a.connectionState==="closed"||a.iceConnectionState==="failed"||a.iceConnectionState==="closed"){D();return}if(a.connectionState==="connected"||a.connectionState==="connecting"||a.iceConnectionState==="connected"||a.iceConnectionState==="completed"||a.iceConnectionState==="checking"){w();return}if(a.connectionState==="disconnected"||a.iceConnectionState==="disconnected"){T||(T=setTimeout(()=>{T=null,(a.connectionState==="disconnected"||a.iceConnectionState==="disconnected")&&D()},mm));return}};a.onconnectionstatechange=_e,a.addEventListener(gm,_e),a.ontrack=H=>{var me,le;const ie=H.streams[0];if(ie){if(!o.track&&!o.stream){v.push({track:H.track,stream:ie});return}(me=o.track)==null||me.call(o,H.track,ie),(le=o.stream)==null||le.call(o,ie)}};const De=n?new Promise(H=>{S=H}):Promise.resolve();return n&&queueMicrotask(()=>{var H;!d&&a.signalingState==="stable"&&!a.localDescription&&a.connectionState!=="closed"&&((H=a.onnegotiationneeded)==null||H.call(a,new Event("negotiationneeded")))}),{connection:a,get channel(){return _},get isDead(){return a.connectionState==="closed"},getOffer:async(H=!1)=>{var ie;if(n)return H?ee(!0):S?De:((ie=a.localDescription)==null?void 0:ie.type)===Pr?f?V(a):Oe(a):De},async signal(H){var ie,me,le;if(H.type==="candidate"){if(H.sdp.length>Sm)return;try{const Ee=JSON.parse(H.sdp);Ee&&typeof Ee=="object"&&await P(O(Ee))}catch(Ee){(ie=o.error)==null||ie.call(o,_i(Ee,"failed to parse remote candidate"))}return}if(!((_==null?void 0:_.readyState)==="open"&&!((me=H.sdp)!=null&&me.includes("a=rtpmap"))))try{const Ee={...H,sdp:N(H.sdp)};if(H.type===Pr){const We=d||a.signalingState!=="stable"&&!u;return We&&n?void 0:(We&&a.signalingState!=="stable"?await Gi([a.setLocalDescription({type:"rollback"}),a.setRemoteDescription(Ee)]):await a.setRemoteDescription(Ee),await W(),await a.setLocalDescription(),await Q())}if(H.type===_m){u=!0;try{await a.setRemoteDescription(Ee),await W()}finally{u=!1}}}catch(Ee){(le=o.error)==null||le.call(o,_i(Ee,"failed to apply remote signal"))}},sendData:H=>_==null?void 0:_.send(H),destroy:()=>{w(),b(),_==null||_.close(),a.close(),d=!1,u=!1,D()},setHandlers:H=>{const{signal:ie,...me}=H;Object.assign(o,me),o.data&&p.length>0&&(h=Qe(h),p.splice(0).forEach(le=>{var Ee;return(Ee=o.data)==null?void 0:Ee.call(o,le)})),ie&&C(ie),(o.track||o.stream)&&v.length>0&&v.splice(0).forEach(({track:le,stream:Ee})=>{var We,He;(We=o.track)==null||We.call(o,le,Ee),(He=o.stream)==null||He.call(o,Ee)})},addStream:H=>H.getTracks().forEach(ie=>a.addTrack(ie,H)),removeStream:H=>a.getSenders().filter(ie=>ie.track&&H.getTracks().includes(ie.track)).forEach(ie=>a.removeTrack(ie)),addTrack:(H,ie)=>a.addTrack(H,ie),removeTrack:H=>{const ie=a.getSenders().find(me=>me.track===H);ie&&a.removeTrack(ie)},replaceTrack:(H,ie)=>{const me=a.getSenders().find(le=>le.track===H);if(me)return me.replaceTrack(ie)}}};const ou=[...jc(3,(n,e)=>`stun:stun${e||""}.l.google.com:19302`),"stun:stun.cloudflare.com:3478"].map(n=>({urls:n})),Mm=1024,ym=64,Em=128,bm=8,Tm=new Uint8Array,wm=(n,e)=>{let t;try{t=n()}catch{return e(!1)}return typeof t=="boolean"?e(t):Promise.resolve(t).then(i=>e(i===!0),()=>e(!1))},cu=(n,e,t)=>e===2?t?n.slice():n:e===1?ps(Ii(n)):Ii(n),bd=(n,e,t,i)=>{try{n.progress(e,t,i)}catch(r){console.error(`${zt} progress handler error:`,r)}},lu=(n,e,t,i)=>{var r;bd(n,1,t,i);try{(r=n.receiver)==null||r.call(n,e,t,i)}catch(s){console.error(`${zt} action handler error:`,s)}},Am=({fail:n,accept:e,refuse:t,maxReceiveBytes:i,chunkSize:r})=>{const s=new Map,a=new Map,o=new Set,c=new Map;let l=0,p=0,h=0,f=!1,m=!1;const v=E=>E.phase!=="released",S=E=>Math.min(i,(E==null?void 0:E.maxPayloadBytes)??i),d=(E,A,L,U)=>{var F,W;L==null||L.reject(A),(W=(F=s.get(E.type))==null?void 0:F.reject)==null||W.call(F,E.peerId,E.metadata,A),U!==void 0&&t(E.peerId,U,A)},u=E=>{for(const A of Array.from(o))A.peerId===E&&(o.delete(A),o.add(A))},_=E=>{var L,U;if(!v(E))return;E.phase="released",(L=E.removeAbortListener)==null||L.call(E),E.timer=Qe(E.timer);const A=a.get(E.peerId);if(E.kind==="inline"){const F=A.inline.get(E.key);F.splice(F.indexOf(E),1),F.length||A.inline.delete(E.key),E.data=Tm}else A.bulk.delete(E.id),o.delete(E),E.data=null,E.transfer==="receiving"&&(h-=E.size,A.active===E&&(A.active=null,u(E.peerId)),m=!0);A.count--,l--,A.count||a.delete(E.peerId),(U=E.controller)==null||U.abort()},T=(E,A)=>{v(E)&&(_(E),d(E,A,E.scope,E.kind==="bulk"?E.id:void 0))},M=(E,A)=>{if(E.phase!=="pending")return E.phase==="ready";if(E.size>S(A))return T(E,"payload exceeds receiver size limit"),!1;const L=E.scope?E.scope.receive:A.receive;if(!L)return A.receiver?(E.phase="ready",!0):!1;if(p>=Em||(c.get(E.peerId)??0)>=bm)return T(E,"too many pending receive decisions"),!1;E.phase="deciding";const U=new AbortController;E.controller=U,p++,c.set(E.peerId,(c.get(E.peerId)??0)+1);const F=wm(()=>L({byteLength:E.size,peerId:E.peerId,signal:U.signal,...E.metadata===void 0?{}:{metadata:E.metadata}}),W=>{p--;const P=c.get(E.peerId)-1;return P?c.set(E.peerId,P):c.delete(E.peerId),v(E)?(W?E.phase="ready":T(E,"payload rejected by receiver"),W):!1});return typeof F=="boolean"?F:(F.then(()=>C()),!1)},b=(E,A,L)=>{let U;try{U=cu(L,E.format,E.kind==="inline")}catch{_(E),n(E.peerId,"invalid action payload");return}_(E),lu(A,U,E.peerId,E.metadata)},w=E=>{const A=s.get(E.type);v(E)&&A&&M(E,A)&&A.receiver&&b(E,A,E.data)},D=E=>{const A=s.get(E.type);if(!v(E)||!A||!M(E,A)||!A.receiver)return;if(E.transfer==="receiving"){E.offset===E.size&&b(E,A,E.data);return}const L=a.get(E.peerId);!L.active&&h+E.size<=i&&(L.active=E,E.transfer="receiving",h+=E.size,E.lastSeen=Date.now(),o.delete(E),e(E.peerId,E.id))},x=(E,A)=>{var U;const L=(U=a.get(E))==null?void 0:U.inline.get(A);for(;L!=null&&L[0];){const F=L[0];if(w(F),v(F))break}},C=()=>{if(f){m=!0;return}f=!0;try{do{m=!1;for(const E of o)D(E);for(const[E,A]of a){for(const L of A.bulk.values())L.offset===L.size&&D(L);for(const L of A.inline.keys())x(E,L)}}while(m)}finally{f=!1}},N=E=>{let A=a.get(E.peerId);if(l>=Mm||((A==null?void 0:A.count)??0)>=ym)return d(E,"too many pending transfers",E.scope,E.kind==="bulk"?E.id:void 0),!1;if(A||(A={bulk:new Map,inline:new Map,active:null,count:0},a.set(E.peerId,A)),A.count++,l++,E.kind==="inline"){const U=A.inline.get(E.key)??[];U.push(E),A.inline.set(E.key,U)}else A.bulk.set(E.id,E),o.add(E);const L=()=>{const U=ma-(Date.now()-E.lastSeen);U>0?E.timer=setTimeout(L,U):(T(E,"action transfer timed out"),C())};if(E.timer=setTimeout(L,ma),E.scope){const{signal:U}=E.scope,F=()=>{T(E,"receive cancelled"),C()};if(U.addEventListener("abort",F,{once:!0}),E.removeAbortListener=()=>U.removeEventListener("abort",F),U.aborted)return F(),!1}return!0},O=(E,A)=>{var F;const L=s.get(E.type),U=(F=L==null?void 0:L.receiveScope)==null?void 0:F.call(L,E.peerId,E.metadata);return U===null||U!=null&&U.signal.aborted?(A!==void 0&&t(E.peerId,A,"unexpected response"),null):E.size>S(L)?(d(E,"payload exceeds receiver size limit",U,A),null):{action:L,scope:U}},V=(E,A)=>({...E,...A?{scope:A}:{},phase:"pending",controller:null,lastSeen:Date.now(),timer:null});return{register:(E,A={})=>{const L={...A,receiver:null,receive:null,reject:null,progress:Rt};return s.set(E,L),{onMessage:U=>{L.receiver=U,C()},onReceive:U=>{L.receive=U,C()},onReject:U=>{L.reject=U},onProgress:U=>{L.progress=U}}},receiveInline:(E,A)=>{var I;const L=O(E);if(!L)return;const{action:U,scope:F}=L,W=F?`${E.type}\0${F.key}`:E.type;if(U!=null&&U.receiver&&!(F?F.receive:U.receive)&&!((I=a.get(E.peerId))!=null&&I.inline.has(W))){let X;try{X=cu(A,E.format,!0)}catch{n(E.peerId,"invalid action payload");return}lu(U,X,E.peerId,E.metadata);return}const P={...V(E,F),kind:"inline",key:W,data:A};N(P)&&x(E.peerId,W)},receiveOffer:(E,A)=>{var F;if((F=a.get(E.peerId))!=null&&F.bulk.has(A)){n(E.peerId,"duplicate action offer");return}const L=O(E,A);if(!L)return;const U={...V(E,L.scope),kind:"bulk",id:A,transfer:"waiting",offset:0,data:null};N(U)&&C()},receiveChunk:(E,A,L,U)=>{var I;const F=a.get(E),W=F==null?void 0:F.bulk.get(A);if(!W)return;if(W.transfer!=="receiving"||L!==W.offset||!U.length||U.length!==Math.min(r,W.size-W.offset)){n(E,"invalid action chunk offset or length");return}try{W.data??(W.data=new Uint8Array(W.size))}catch{T(W,"unable to allocate receive buffer"),C();return}W.data.set(U,W.offset),W.offset+=U.length;const P=Date.now();W.lastSeen=P;for(const X of o)X.phase==="ready"&&((I=s.get(X.type))!=null&&I.receiver)&&(X.lastSeen=P);W.offset===W.size?(D(W),v(W)&&(F==null?void 0:F.active)===W&&(F.active=null,u(E)),C()):bd(s.get(W.type),W.offset/W.size,E,W.metadata)},cancel:(E,A)=>{var U,F;const L=(U=a.get(E))==null?void 0:U.bulk.get(A);L&&(_(L),(F=L.scope)==null||F.reject("response cancelled by sender")),C()},clearPeer:E=>{const A=a.get(E);if(A){for(const L of A.bulk.values())_(L);for(const L of A.inline.values()){const U=[...L];for(const F of U)_(F)}}C()}}},Xo=2,ys=0,Es=1,uu=2,Za=3,Ja=4,bs=5,Qa=36,fu=48,di=6,Vr=14,ja=Ed-Vr,Rm=256*1024**2,du=1024**2,hu="bufferedamountlow",pu="close",mu="error",Cm=1e4,hi=(n,e)=>{const t=Ke(e);return t.kind=n,t.name=n==="aborted"?"AbortError":t.name,t},qo=n=>{if(n!=null&&n.aborted)throw hi("aborted","operation aborted")},gu=(n,e,t=di)=>{const i=new Uint8Array(t);return i[0]=Xo,i[1]=n,new DataView(i.buffer).setUint32(2,e),i},qi=hi,Pm=(n,e,t=Cm)=>n.readyState!=="open"||n.bufferedAmount<=n.bufferedAmountLowThreshold?Promise.resolve(n.readyState==="open"):new Promise(i=>{let r=!1,s=null;const a=l=>{r||(r=!0,n.removeEventListener(hu,o),n.removeEventListener(pu,c),n.removeEventListener(mu,c),e==null||e.removeEventListener("abort",c),Qe(s),i(l))},o=()=>a(!0),c=()=>a(!1);if(n.addEventListener(hu,o),n.addEventListener(pu,c),n.addEventListener(mu,c),e==null||e.addEventListener("abort",c,{once:!0}),s=setTimeout(()=>a(!1),t),n.readyState!=="open"||e!=null&&e.aborted){a(!1);return}n.bufferedAmount<=n.bufferedAmountLowThreshold&&a(!0)}),Lm=({getPeer:n,getPeerIds:e,canReceiveFromPeer:t,onPeerError:i,throwIfAborted:r=qo,maxReceiveBytes:s=Rm})=>{if(!Number.isSafeInteger(s)||s<=0)throw Ke("maxReceiveBytes must be a positive safe integer");const a=new Map,o=new Map,c=new WeakSet;let l=0;const p=Am({fail:(d,u)=>f(d,u),accept:(d,u)=>m(d,u,Za),refuse:(d,u,_)=>m(d,u,Ja,_),maxReceiveBytes:s,chunkSize:ja}),h=d=>{var u;for(const _ of((u=o.get(d))==null?void 0:u.values())??[])_.fail(qi("disconnected","peer disconnected"));o.delete(d),p.clearPeer(d)},f=(d,u)=>{const _=n(d,!0);_&&!c.has(_)&&(c.add(_),console.warn(`${zt}: ${u}; disconnecting peer ${d}`),i(d,Ke(u)))},m=(d,u,_,T="")=>{var D;const M=n(d,!0);if(!M)return;const b=Vn(T).subarray(0,200),w=gu(_,u,di+b.length);w.set(b,di);try{if((((D=M.channel)==null?void 0:D.bufferedAmount)??0)>du)throw Ke("control send buffer is full");M.sendData(w)}catch{f(d,"unable to send action control")}};return{makeInternalAction:(d,u={})=>{const _={sendToPending:!!u.sendToPending,receiveWhilePending:!!u.receiveWhilePending,...u.maxPayloadBytes===void 0?{}:{maxPayloadBytes:u.maxPayloadBytes},...u.receiveScope?{receiveScope:u.receiveScope}:{}},T=a.get(d);if(T){if(T.options.sendToPending!==_.sendToPending||T.options.receiveWhilePending!==_.receiveWhilePending||T.options.receiveScope!==_.receiveScope||T.options.maxPayloadBytes!==_.maxPayloadBytes)throw Ke(`action type "${d}" cannot be redefined`);return T.action}const M=Vn(d);if(!d||d.includes("\0")||M.length>32)throw Ke("action type must contain 1–32 UTF-8 bytes and no null characters");const b={options:_,action:{...p.register(d,_),send:async(w,D,x,C,N)=>{if(r(N),w===void 0)throw Ke("action data cannot be undefined");const O=w instanceof Blob,V=O||w instanceof ArrayBuffer||ArrayBuffer.isView(w),E=V?2:typeof w=="string"?0:1;let A=O?w:w instanceof ArrayBuffer?new Uint8Array(w):ArrayBuffer.isView(w)?new Uint8Array(w.buffer,w.byteOffset,w.byteLength):Vn(E===0?w:Vt(w));const L=A instanceof Blob?A.size:A.byteLength,U=x===void 0?new Uint8Array:Vn(Vt(x));if(U.length>16336)throw Ke("action metadata is too large");const F=Qa+U.length+L<=Ed;!F&&V&&!(A instanceof Blob)&&(A=A.slice());const W=F?0:l++>>>0,P=F?Qa:fu,I=new Uint8Array(P+U.length+(F?L:0));I[0]=Xo,I[1]=(F?ys:Es)|E<<4,I.set(M,2);const X=new DataView(I.buffer);X.setUint16(34,U.length),F||(X.setUint32(36,W),X.setFloat64(40,L)),I.set(U,P),F&&I.set(A instanceof Blob?new Uint8Array(await A.arrayBuffer()):A,P+U.length);const se=D?Array.isArray(D)?D:[D]:e(_.sendToPending);await Gi([...new Set(se)].map(async oe=>{const Me=n(oe,_.sendToPending);if(!Me){console.warn(`${zt}: no peer with id ${oe} found`);return}let Ne=null;const Oe=()=>{var Be;if(Ne)throw Ne;if(r(N),n(oe,_.sendToPending)!==Me||((Be=Me.channel)==null?void 0:Be.readyState)==="closed")throw qi("disconnected","peer disconnected")},Q=async Be=>{Oe();const $e=Me.channel;if($e&&($e.readyState!=="open"||$e.bufferedAmount>$e.bufferedAmountLowThreshold)){if(!await Pm($e,N))throw r(N),qi("disconnected","data channel stopped draining");Oe()}try{Me.sendData(Be)}catch{throw qi("disconnected","peer disconnected")}};if(F){await Q(I),C==null||C(1,oe,x);return}let ee=!1,_e=!1,De=Date.now(),H,ie;const me=new Promise((Be,$e)=>{H=Be,ie=$e});me.catch(Rt);const le=o.get(oe)??new Map;if(le.has(W))throw Ke("action transmission id is still in use");o.set(oe,le);let Ee=null;const We={accept:()=>!Ee||Ne?!1:(Ee=Qe(Ee),H(),!0),fail:(Be,$e=!1)=>{$e&&(_e=!0),Ne=Be,ie(Be)},touch:()=>{Ee&&(De=Date.now())}};le.set(W,We);const He=()=>{const Be=ma-(Date.now()-De);Be>0?Ee=setTimeout(He,Be):We.fail(qi("timeout","action offer timed out"))};Ee=setTimeout(He,ma);const it=()=>{try{r(N)}catch(Be){We.fail(Be)}};N==null||N.addEventListener("abort",it,{once:!0});try{await Q(I),ee=!0,await me;for(let Be=0;Be<L;Be+=ja){Oe();const $e=Math.min(ja,L-Be),Ze=gu(uu,W,Vr+$e);new DataView(Ze.buffer).setFloat64(di,Be),Ze.set(A instanceof Blob?new Uint8Array(await A.slice(Be,Be+$e).arrayBuffer()):A.subarray(Be,Be+$e),Vr),await Q(Ze);for(const mt of le.values())mt.touch();C==null||C((Be+$e)/L,oe,x)}Oe()}catch(Be){throw ee&&!_e&&n(oe,!0)===Me&&(!Me.channel||Me.channel.readyState==="open"&&(Me.channel.bufferedAmount??0)<=du)&&m(oe,W,bs),Be}finally{Ee=Qe(Ee),N==null||N.removeEventListener("abort",it),le.delete(W),!le.size&&o.get(oe)===le&&o.delete(oe)}}))}}};return a.set(d,b),b.action},handleData:(d,u)=>{var L,U,F;if(u.byteLength<2||u.byteLength>16384){f(d,"invalid action frame");return}const _=new Uint8Array(u);if(_[0]!==Xo){f(d,"incompatible action protocol version");return}const T=_[1]&15,M=_[1]>>>4,b=new DataView(_.buffer,_.byteOffset,_.byteLength);if(T>bs||M>2||T>Es&&M!==0){f(d,"invalid action frame");return}if(T>=uu){if(_.length<di||(T===Za||T===bs)&&_.length!==di||T===Ja&&_.length>206){f(d,"invalid action control");return}const W=b.getUint32(2);if(T===Za){const P=o.get(d);if((L=P==null?void 0:P.get(W))!=null&&L.accept())for(const I of P.values())I.touch();return}if(T===Ja){(F=(U=o.get(d))==null?void 0:U.get(W))==null||F.fail(qi("rejected",Ii(_.subarray(di))),!0);return}T===bs?p.cancel(d,W):p.receiveChunk(d,W,_.length>=Vr?b.getFloat64(di):NaN,_.subarray(Vr));return}const w=T===ys?Qa:fu;if(_.length<w){f(d,"invalid action header");return}const D=Ii(_.subarray(2,34)).replaceAll("\0",""),x=a.get(D);if(!t(d,!!(x!=null&&x.options.receiveWhilePending)))return;const C=b.getUint16(34),N=w+C,O=T===ys?_.length-N:b.getFloat64(40),V=T===Es?b.getUint32(36):0;if(!D||N>_.length||!Number.isSafeInteger(O)||O<0||T===Es&&(O===0||N!==_.length)){f(d,"invalid action proposal");return}let E;try{C&&(E=ps(Ii(_.subarray(w,N))))}catch{f(d,"invalid action metadata");return}const A={peerId:d,type:D,format:M,size:O,...E===void 0?{}:{metadata:E}};T===ys?p.receiveInline(A,_.subarray(N)):p.receiveOffer(A,V)},clearPeer:h}},Td=n=>n&&typeof n=="object"&&!Array.isArray(n)&&typeof n.r=="string"?n:null,Ts=n=>{const e=Td(n);return e?{r:e.r,...Object.hasOwn(e,"m")?{m:e.m}:{}}:null},eo=n=>{const e=Td(n);return e?{r:e.r,...typeof e.e=="string"?{e:e.e}:{}}:null},Lr=(n,e)=>e===void 0?n:{...n,metadata:e},Dm=({getPeer:n,getPeerIds:e,canReceiveFromPeer:t,onPeerError:i,maxReceiveBytes:r})=>{const s=Object.create(null),a={},o=new Map,c=Lm({getPeer:n,getPeerIds:e,canReceiveFromPeer:t,onPeerError:i,...r===void 0?{}:{maxReceiveBytes:r}}),l=c.makeInternalAction,p=c.handleData,h=d=>{const u=a[d];u&&(Qe(u.timer),u.signal&&u.abortHandler&&u.signal.removeEventListener("abort",u.abortHandler),delete a[d],u.controller.abort())},f=(d,u)=>{hr(a).forEach(([_,T])=>{T.peerId===d&&(h(_),T.reject(u))})},m=(d,u)=>{c.clearPeer(d);const _=o.get(d);_&&(o.delete(d),_.forEach(T=>T.abort())),f(d,hi("disconnected",pr(u,"peer disconnected")))},v=l("@_response",{receiveScope:(d,u)=>{const _=eo(u),T=_&&a[_.r];if(!_||!T||T.peerId!==d)return null;const M=_.e===void 0?T.getReceive():null;return{key:_.r,signal:T.controller.signal,receive:M?b=>M({byteLength:b.byteLength,peerId:b.peerId,kind:"response",signal:b.signal}):null,reject:b=>{a[_.r]===T&&(h(_.r),T.reject(hi("rejected",b)))}}}});return v.onProgress((d,u,_)=>{var b;const T=eo(_),M=T&&a[T.r];M&&M.peerId===u&&(T==null?void 0:T.e)===void 0&&((b=M.getReceiveProgress())==null||b(d,{peerId:u}))}),v.onMessage((d,u,_)=>{const T=eo(_);if(!T)return;const M=a[T.r];if(!(!M||M.peerId!==u)){if(h(T.r),T.e!==void 0){M.reject(hi("rejected",T.e));return}M.resolve(d)}}),{makeAction:(d,u)=>{if(u&&"onRequest"in u&&u.kind!=="request")throw Ke('request actions must use kind: "request"');const _=(u==null?void 0:u.kind)??"message",T=l(d),M=s[d];if(M){if(M.kind!==_)throw Ke(`action type "${d}" cannot be redefined`);return M.action}const b={kind:_,action:null,onReceive:(u==null?void 0:u.onReceive)??null,onReceiveProgress:(u==null?void 0:u.onReceiveProgress)??null},w=(E,A)=>E?(L,U)=>E(L,Lr({peerId:U},A)):void 0,D=(E,A,L)=>{var F;const U=b.kind==="request"?Ts(L):null;(F=b.onReceiveProgress)==null||F.call(b,E,Lr({peerId:A},U?U.m:L))},x=E=>{b.onReceive=E,T.onReceive(E?A=>{const L=_==="request"?Ts(A.metadata):null;return E(Lr({byteLength:A.byteLength,peerId:A.peerId,signal:A.signal,kind:_},L?L.m:A.metadata))}:null)};if(x(b.onReceive),T.onProgress(D),_==="message"){let E=(u==null?void 0:u.onMessage)??null;const A=(U,F,W)=>{const P=E;Promise.resolve().then(()=>P(U,Lr({peerId:F},W))).catch(I=>console.error(`${zt} action handler error:`,I))},L={send:async(U,F={})=>{await T.send(U,F.target,F.metadata,w(F.onProgress,F.metadata),F.signal)},get onMessage(){return E},set onMessage(U){E=U,T.onMessage(U?A:null)},get onReceive(){return b.onReceive},set onReceive(U){x(U)},get onReceiveProgress(){return b.onReceiveProgress},set onReceiveProgress(U){b.onReceiveProgress=U}};return b.action=L,s[d]=b,T.onMessage(E?A:null),L}T.onReject((E,A,L)=>{const U=Ts(A);U&&v.send(null,E,{r:U.r,e:L}).catch(Rt)});let C=(u==null?void 0:u.onRequest)??null;const N=(E,A,L)=>{const U=Ts(L);if(!U)return;const F=C,W=new AbortController;let P=o.get(A);P||(P=new Set,o.set(A,P)),P.add(W),Promise.resolve().then(async()=>{const I=await F(E,{...Lr({peerId:A},U.m),signal:W.signal});if(I===void 0)throw Ke("request handler returned undefined");return I}).then(I=>v.send(I,A,{r:U.r}),I=>v.send(null,A,{r:U.r,e:pr(I,"request failed").slice(0,512)})).catch(Rt).finally(()=>{const I=o.get(A);I==null||I.delete(W),I&&!I.size&&o.delete(A),W.abort()})},O=async(E,A)=>{const{target:L,metadata:U,onProgress:F,signal:W,timeoutMs:P}=A;if(qo(W),!n(L,!1))throw hi("disconnected",`no active peer with id ${L}`);const I=Hi(20),X=new AbortController,se=new Promise((oe,Me)=>{const Ne={controller:X,getReceive:()=>b.onReceive,getReceiveProgress:()=>b.onReceiveProgress,peerId:L,resolve:oe,reject:Me,timer:null,...W===void 0?{}:{signal:W}},Oe=()=>{h(I),Me(hi("aborted","operation aborted"))};W&&(Ne.abortHandler=Oe,W.addEventListener("abort",Oe,{once:!0})),a[I]=Ne,P!==void 0&&(Ne.timer=setTimeout(()=>{h(I),Ne.reject(hi("timeout","request timed out"))},P))});try{const oe=T.send(E,L,U===void 0?{r:I}:{r:I,m:U},w(F,U),X.signal);return await Promise.race([se,oe.then(()=>se)])}finally{h(I)}},V={request:O,requestMany:async(E,A)=>{const{targets:L,onResult:U,...F}=A;return qo(F.signal),await Gi(L.map(async W=>{try{const P={peerId:W,status:"fulfilled",value:await O(E,{...F,target:W})};return U==null||U(P),P}catch(P){const I=_i(P,"request failed");if(I.kind==="aborted"||!I.kind)throw I;const X=I.kind==="timeout"?{peerId:W,status:"timeout"}:I.kind==="disconnected"?{peerId:W,status:"disconnected"}:{peerId:W,status:"rejected",error:I};return U==null||U(X),X}}))},get onRequest(){return C},set onRequest(E){C=E,T.onMessage(E?N:null)},get onReceive(){return b.onReceive},set onReceive(E){x(E)},get onReceiveProgress(){return b.onReceiveProgress},set onReceiveProgress(E){b.onReceiveProgress=E}};return b.action=V,s[d]=b,T.onMessage(C?N:null),V},makeInternalAction:l,handleData:p,clearPeer:m}},_u=n=>n&&typeof n=="object"&&!Array.isArray(n)&&typeof n.k=="string"?{key:n.k,...typeof n.s=="string"?{streamId:n.s}:{},...typeof n.t=="string"?{trackId:n.t}:{},...Object.hasOwn(n,"m")?{metadata:n.m}:{}}:null,vu=n=>e=>{let t=n.get(e);return t||(t=Hi(20),n.set(e,t)),t},Yo=()=>{const n=new WeakMap,e=new WeakMap,t=new Map,i=new Map,r=new Map,s=new Map,a=new WeakMap,o=new WeakMap;return{getStreamKey:vu(n),getTrackKey:vu(e),rememberRemoteStream:(c,l,p)=>{var f;const h=a.get(l);h!==void 0&&t.get(h)===l&&t.delete(h),a.set(l,c),t.set(c,l),p&&i.set(p,l),(f=l.getTracks)==null||f.call(l).forEach(m=>{typeof m.id=="string"&&s.set(m.id,{track:m,stream:l})})},getRemoteStream:(c,l)=>t.get(c)??(l?i.get(l):void 0),rememberRemoteTrack:(c,l,p,h,f)=>{var S;const m={track:l,stream:p},v=o.get(l);v!==void 0&&((S=r.get(v))==null?void 0:S.track)===l&&r.delete(v),o.set(l,c),r.set(c,m),h&&s.set(h,m),f&&i.set(f,p)},getRemoteTrack:(c,l)=>r.get(c)??(l?s.get(l):void 0),hasRemoteMedia:()=>t.size>0||r.size>0,clearRemote:()=>{t.clear(),i.clear(),r.clear(),s.clear()}}},Im=({iterate:n,isActive:e,getSharedMediaPeer:t,onPeerError:i})=>{const r={},s={},a={},o=Yo(),c=S=>{var d;return((d=t(S))==null?void 0:d.__trysteroMedia)??a[S]??(a[S]=Yo())},l=(S,d,u,_)=>{const T=S[d]??(S[d]=[]);if(T.length>=64){console.warn(`${zt}: too many pending ${_} metadata messages`),i(d,Ke("too many pending media metadata messages"));return}T.push(u)},p=(S,d,u)=>{if(!(S!=null&&S.length))return;const _=d?S.findIndex(T=>{const M=u(T);return!M||M===d}):0;return _>=0?S.splice(_,1)[0]:void 0},h=(S,d,u,_)=>{var T;e(S)&&(c(S).rememberRemoteStream(d,u,typeof u.id=="string"?u.id:void 0),(T=v.onPeerStream)==null||T.call(v,u,S,_))},f=(S,d,u,_,T)=>{var M;e(S)&&(c(S).rememberRemoteTrack(d,u,_,typeof u.id=="string"?u.id:void 0,typeof _.id=="string"?_.id:void 0),(M=v.onPeerTrack)==null||M.call(v,u,_,S,T))},m=(S,d,u,_,T,M={})=>{const b={k:d,...M,...u===void 0?{}:{m:u}};return n(S,async(w,D)=>{await _(b,w),await T(D)})},v={addStream:(S,d,u)=>m(d.target,o.getStreamKey(S),d.metadata,u,_=>_.addStream(S),{s:S.id}),removeStream:(S,d)=>{n(d,(u,_)=>_.removeStream(S))},addTrack:(S,d,u,_)=>m(u.target,o.getTrackKey(S),u.metadata,_,T=>T.addTrack(S,d),{s:d.id,t:S.id}),removeTrack:(S,d)=>{n(d,(u,_)=>_.removeTrack(S))},replaceTrack:(S,d,u,_)=>m(u.target,o.getTrackKey(d),u.metadata,_,T=>T.replaceTrack(S,d),{t:S.id}),receiveStreamMeta:(S,d)=>{if(!e(d))return;const u=_u(S);if(!u)return;const _=c(d).getRemoteStream(u.key,u.streamId);if(_!=null&&_.getTracks().length){h(d,u.key,_,u.metadata);return}l(r,d,u,"stream")},receiveTrackMeta:(S,d)=>{if(!e(d))return;const u=_u(S);if(!u)return;const _=c(d).getRemoteTrack(u.key,u.trackId);if(_&&_.track.readyState!=="ended"&&(!_.stream.getTracks||_.stream.getTracks().includes(_.track))){f(d,u.key,_.track,_.stream,u.metadata);return}l(s,d,u,"track")},receiveRemoteStream:(S,d)=>{if(!e(S))return;const u=p(r[S],typeof d.id=="string"?d.id:void 0,_=>_.streamId);u&&h(S,u.key,d,u.metadata)},receiveRemoteTrack:(S,d,u)=>{if(!e(S))return;const _=s[S],T=typeof d.id=="string"?d.id:void 0,M=typeof u.id=="string"?u.id:void 0,b=_&&T?_.findIndex(D=>D.trackId===T):-1,w=b>=0?_==null?void 0:_.splice(b,1)[0]:p(_,M,D=>D.streamId);w&&f(S,w.key,d,u,w.metadata)},clearPeer:S=>{delete r[S],delete s[S],delete a[S]},onPeerStream:null,onPeerTrack:null};return v},xu="beforeunload",Um=1e4,ri=n=>"@_"+n,Wr=new Set,Su=()=>Wr.forEach(n=>n()),Nm=n=>(Wr.add(n),Wr.size===1&&addEventListener(xu,Su),()=>{Wr.delete(n),Wr.size||removeEventListener(xu,Su)});var Fm=(n,e,t,{onPeerHandshake:i,onHandshakeError:r,handshakeTimeoutMs:s=Um,maxReceiveBytes:a,isPassive:o=!1,onBeforeLeave:c}={})=>{const l={},p={},h={},f={onPeerJoin:null,onPeerLeave:null};let m=Rt,v=null;const S=(P,I)=>(P?Array.isArray(P)?P:[P]:hn(p)).flatMap(X=>{const se=p[X];return se?[Promise.resolve(I(X,se))]:(console.warn(`${zt}: no peer with id ${X} found`),[])}),d=(P,I,X)=>{const se=l[P];!se||I&&se!==I||(L.send("",P).catch(Rt),x(P,se,X))},u=(P,I)=>d(P,void 0,I),_=Im({onPeerError:u,iterate:(P,I)=>S(P,(X,se)=>I(X,se)),isActive:P=>!!p[P],getSharedMediaPeer:P=>l[P]??null}),T=Dm({onPeerError:u,...a===void 0?{}:{maxReceiveBytes:a},getPeer:(P,I)=>(I?l:p)[P],getPeerIds:P=>hn(P?l:p),canReceiveFromPeer:(P,I)=>W.canReceiveFromPeer(P,I)}),M=T.makeInternalAction,b=T.handleData,w=T.makeAction,D=(P,I=Ke("peer disconnected"))=>{var se;const X=_i(I,"peer disconnected");W.clearPeer(P,X),delete l[P],delete p[P],T.clearPeer(P,X),(se=h[P])==null||se.splice(0).forEach(oe=>oe.reject(X)),delete h[P],_.clearPeer(P)},x=(P,I,X)=>{var Me;const se=l[P];if(!se||I&&se!==I)return;const oe=!!p[P];D(P,X),se.destroy(),oe&&((Me=f.onPeerLeave)==null||Me.call(f,P)),e(P)},C=()=>v??(v=(async()=>{c==null||c();const P=new AbortController;L.send("",void 0,void 0,void 0,P.signal).catch(Rt),await new Promise(I=>setTimeout(I,99)),P.abort();try{hr(l).forEach(([I,X])=>{X.destroy(),D(I,Ke("room left"))})}finally{try{m()}finally{t()}}})()),N=M(ri("ping")),O=M(ri("pong")),V=M(ri("signal")),E=M(ri("stream"),{maxPayloadBytes:65536}),A=M(ri("track"),{maxPayloadBytes:65536}),L=M(ri("leave"),{sendToPending:!0,receiveWhilePending:!0}),U=M(ri("hsdata"),{sendToPending:!0,receiveWhilePending:!0,maxPayloadBytes:65536}),F=M(ri("hsready"),{sendToPending:!0,receiveWhilePending:!0}),W=dm({...i===void 0?{}:{onPeerHandshake:i},...r===void 0?{}:{onHandshakeError:r},handshakeTimeoutMs:s,sendHandshakeData:U.send,sendHandshakeReady:F.send,onActivate:(P,I)=>{var X;p[P]=I,I.setHandlers({signal:se=>{p[P]===I&&V.send(se,P).catch(Rt)}}),(X=f.onPeerJoin)==null||X.call(f,P)},onFailure:(P,I,X)=>d(P,I,X)});return N.onMessage((P,I)=>{O.send("",I).catch(Rt)}),O.onMessage((P,I)=>{var se;const X=h[I];(se=X==null?void 0:X.shift())==null||se.resolve(),X&&!X.length&&delete h[I]}),V.onMessage((P,I)=>{var X;(X=p[I])==null||X.signal(P)}),E.onMessage((P,I)=>_.receiveStreamMeta(P,I)),A.onMessage((P,I)=>_.receiveTrackMeta(P,I)),L.onMessage((P,I)=>x(I,void 0,Ke("peer left room"))),U.onMessage((P,I,X)=>W.receiveHandshakeData(P,I,X)),F.onMessage((P,I)=>W.receiveHandshakeReady(I)),n((P,I)=>{const X=l[I];if(X){if(X===P)return;X.destroy(),D(I,Ke("peer replaced"))}l[I]=P,W.addPeer(I,P),P.setHandlers({data:se=>{l[I]===P&&b(I,se)},stream:se=>_.receiveRemoteStream(I,se),track:(se,oe)=>_.receiveRemoteTrack(I,se,oe),close:()=>x(I,P,Ke("peer disconnected")),error:se=>{console.error(`${zt} peer error:`,se),x(I,P,se)}}),W.start(I,P)}),_d&&(m=Nm(()=>C().catch(Rt))),{makeAction:w,leave:C,ping:async P=>{if(!p[P])throw Ke(`no active peer with id ${P}`);const I=Date.now();return await new Promise((X,se)=>{const oe=h[P]??(h[P]=[]),Me=()=>{const Oe=h[P];if(!Oe)return;const Q=Oe.indexOf(Ne);Q>-1&&Oe.splice(Q,1),Oe.length||delete h[P]},Ne={resolve:()=>{Me(),X()},reject:Oe=>{Me(),se(Oe)}};oe.push(Ne),N.send("",P).catch(Oe=>Ne.reject(_i(Oe,"peer disconnected")))}),Date.now()-I},isPassive:()=>o,getPeers:()=>vd(hr(p).map(([P,I])=>[P,I.connection])),addStream:(P,I={})=>_.addStream(P,I,E.send),removeStream:(P,I={})=>{_.removeStream(P,I.target)},addTrack:(P,I,X={})=>_.addTrack(P,I,X,A.send),removeTrack:(P,I={})=>{_.removeTrack(P,I.target)},replaceTrack:(P,I,X={})=>_.replaceTrack(P,I,X,A.send),get onPeerJoin(){return f.onPeerJoin},set onPeerJoin(P){f.onPeerJoin=P,P&&hn(p).forEach(I=>P(I))},get onPeerLeave(){return f.onPeerLeave},set onPeerLeave(P){f.onPeerLeave=P},get onPeerStream(){return _.onPeerStream},set onPeerStream(P){_.onPeerStream=P},get onPeerTrack(){return _.onPeerTrack},set onPeerTrack(P){_.onPeerTrack=P}}};const wd=1,Ad=2,Mu=(n,e)=>{const t=Vn(n),i=new Uint8Array(3+t.byteLength+e.byteLength);return i[0]=wd,i[1]=t.byteLength>>>8&255,i[2]=t.byteLength&255,i.set(t,3),i.set(e,3+t.byteLength),i},Om=(n,e)=>{const t=Vn(n),i=new Uint8Array(4+t.byteLength);return i[0]=Ad,i[1]=Number(e),i[2]=t.byteLength>>>8&255,i[3]=t.byteLength&255,i.set(t,4),i},yu=(n,e)=>{if(n.byteLength<e+2)return null;const t=(n[e]??0)<<8|(n[e+1]??0),i=e+2+t;return t<=0||t>128||n.byteLength<i?null:{roomToken:Ii(n.subarray(e+2,i)),headerSize:i}},Bm=n=>{const e=new Uint8Array(n);if(e.byteLength<3||e.byteLength>16515)return null;if(e[0]===wd){const t=yu(e,1);return t?{type:"room",roomToken:t.roomToken,payload:e.subarray(t.headerSize).slice().buffer}:null}if(e[0]===Ad){const t=yu(e,2);return t?{type:"presence",roomToken:t.roomToken,isPresent:e[1]===1}:null}return null},ia=n=>{const{connection:e,channel:t}=n;return n.isDead||e.connectionState==="closed"||e.connectionState==="failed"||e.iceConnectionState==="closed"||e.iceConnectionState==="failed"||(t==null?void 0:t.readyState)==="closing"||(t==null?void 0:t.readyState)==="closed"},km=n=>{if(ia(n))return"stale";const{channel:e}=n;return!e||e.readyState!=="open"?"transient":"live"};var zm=class{constructor(){Fe(this,"rooms",new Map);Fe(this,"unclaimedDataTimers",new WeakMap);Fe(this,"pendingDataTimers",new WeakMap);Fe(this,"byApp",{})}registerRoom(n,e,t,i){const r=this.rooms.get(n)??new Map;if(r.has(e))throw Ke("room membership already registered");const s={token:null,tokenPromise:t,...i};r.set(e,s),this.rooms.set(n,r);const a=()=>{var c;return((c=this.rooms.get(n))==null?void 0:c.get(e))===s},o=c=>{if(s.token)for(const l of zn(this.byApp[n]??{}))try{this.sendRoomPresence(l,s.token,c)}catch{}};return t.then(c=>{if(a()){s.token=c;for(const l of zn(this.byApp[n]??{}))l.remoteRoomTokens.has(c)&&this.attachRoom(n,e,s,l),this.discardUnboundData(l);a()&&s.active&&o(!0)}}),{connect:(c,l,p)=>{if(!a()){l.destroy();return}const h=this.reusable(n,c);h&&h.peer!==l&&l.destroy();const f=h??this.register(n,c,l,p);if(this.attachRoom(n,e,s,f),!h)for(const m of r.values())m.active&&m.token&&this.sendRoomPresence(f,m.token,!0)},reuse:c=>{if(!a())return!1;const l=this.reusable(n,c);return l?(this.attachRoom(n,e,s,l),!0):!1},setActive:c=>{!a()||s.active===c||(s.active=c,o(c))},leave:()=>{var c,l;if(a()){r.delete(e),r.size||this.rooms.delete(n),o(!1);for(const p of zn(this.byApp[n]??{})){const h=p.bindings[e];(l=h==null?void 0:(c=h.handlers).close)==null||l.call(c),h==null||h.detach(),this.discardUnboundData(p)}}}}}owns(n,e,t){var i,r;return((r=(i=this.byApp[n])==null?void 0:i[e])==null?void 0:r.peer)===t}reusable(n,e){var i;const t=(i=this.byApp[n])==null?void 0:i[e];if(t&&ia(t.peer)){this.clear(n,e,{destroyPeer:!0});return}return t}attachRoom(n,e,t,i){var a;if(((a=this.rooms.get(n))==null?void 0:a.get(e))!==t||i.isClosing||this.get(n,i.peerId)!==i)return;const{proxy:r,isNew:s}=this.bind(e,t.tokenPromise,i,{onDetach:()=>t.onDetach(i.peerId,i.peer)});s&&t.onPeer(r,i.peerId,i.peer)}get(n,e){var t;return(t=this.byApp[n])==null?void 0:t[e]}sendRoomPresence(n,e,t){n.isClosing||ia(n.peer)||n.peer.sendData(Om(e,t))}clear(n,e,{destroyPeer:t}){const i=this.byApp[n],r=i==null?void 0:i[e];if(!r||r.isClosing)return;r.idleTimer=Qe(r.idleTimer),this.clearDataTimers(r),r.isClosing=!0,t&&!r.peer.isDead&&r.peer.destroy();const s=zn(r.bindings);r.bindings={},r.bindingsByToken={},r.controlRoomId=null,delete i[e],s.forEach(a=>{var o,c;(c=(o=a.handlers).close)==null||c.call(o),a.pendingData.length=0,a.pendingSendData.length=0,a.pendingTracks.length=0}),r.media.clearRemote(),r.pendingDataByToken.clear(),r.remoteRoomTokens.clear(),hn(i).length===0&&delete this.byApp[n]}register(n,e,t,i){var o,c;const r=(o=this.byApp[n])==null?void 0:o[e];if(r){if(r.idleTimer=Qe(r.idleTimer),r.peer===t)return r;this.clear(n,e,{destroyPeer:!0})}const s={appId:n,peerId:e,peer:t,bindings:{},bindingsByToken:{},pendingDataByToken:new Map,remoteRoomTokens:new Set,idleTimer:null,controlRoomId:null,streamOwners:new Map,trackOwners:new Map,media:Yo(),idleMs:i,isClosing:!1};((c=this.byApp)[n]??(c[n]={}))[e]=s;const a=()=>{this.owns(n,e,t)&&this.clear(n,e,{destroyPeer:!0})};return t.setHandlers({data:l=>this.dispatchData(s,l),signal:l=>this.dispatchSignal(s,l),close:a,error:l=>{console.error(`${zt} peer error:`,l),a()},track:(l,p)=>this.dispatchTrack(s,l,p)}),s}bind(n,e,t,{onDetach:i}){const r=t.bindings[n];if(r)return t.idleTimer=Qe(t.idleTimer),{proxy:r.proxy,isNew:!1};const s={roomId:n,roomToken:null,roomTokenPromise:e,handlers:{},pendingData:[],pendingSendData:[],pendingTracks:[],detach:Rt,proxy:{}},a=()=>{if(t.bindings[n]!==s)return;const c=hn(t.bindings).length===1&&(t.streamOwners.size>0||t.trackOwners.size>0||t.media.hasRemoteMedia());c||this.pruneRoomOwnership(t,n),delete t.bindings[n],s.roomToken&&t.bindingsByToken[s.roomToken]===s&&delete t.bindingsByToken[s.roomToken],t.controlRoomId===n&&(t.controlRoomId=hn(t.bindings)[0]??null),this.discardUnboundData(t),i(),c?this.clear(t.appId,t.peerId,{destroyPeer:!0}):this.scheduleIdleTimer(t)},o={get connection(){return t.peer.connection},get channel(){return t.peer.channel},get isDead(){return t.peer.isDead},getOffer:c=>t.peer.getOffer(c),signal:c=>t.peer.signal(c),sendData:c=>{if(!s.roomToken){s.pendingSendData.push(c);return}t.peer.sendData(Mu(s.roomToken,c))},destroy:()=>a(),setHandlers:c=>{Object.assign(s.handlers,c),this.flushBindingQueues(t,s)},addStream:c=>{const l=t.streamOwners.get(c)??new Set,p=l.size===0;l.add(n),t.streamOwners.set(c,l),p&&t.peer.addStream(c)},removeStream:c=>this.releaseStreamOwner(t,c,n),addTrack:(c,l)=>{const p=t.trackOwners.get(c)??{stream:l,rooms:new Set},h=p.rooms.size===0;return p.stream=l,p.rooms.add(n),t.trackOwners.set(c,p),h?t.peer.addTrack(c,l):t.peer.connection.getSenders().find(f=>f.track===c)??t.peer.addTrack(c,l)},removeTrack:c=>this.releaseTrackOwner(t,c,n),replaceTrack:async(c,l)=>{const p=t.trackOwners.get(c);if(await t.peer.replaceTrack(c,l),p&&t.trackOwners.get(c)===p){t.trackOwners.delete(c);const h=t.trackOwners.get(l)??{stream:p.stream,rooms:new Set};p.rooms.forEach(f=>h.rooms.add(f)),t.trackOwners.set(l,h)}},__trysteroMedia:t.media};return s.proxy=o,s.detach=a,t.bindings[n]=s,t.controlRoomId??(t.controlRoomId=n),t.idleTimer=Qe(t.idleTimer),e.then(c=>{if(t.isClosing||t.bindings[n]!==s)return;s.roomToken=c,t.bindingsByToken[c]=s;const l=t.pendingDataByToken.get(c);l!=null&&l.length&&(s.pendingData.push(...l),t.pendingDataByToken.delete(c));const p=s.pendingSendData.splice(0);ia(t.peer)||p.forEach(h=>{try{t.peer.sendData(Mu(c,h))}catch{}}),this.flushBindingQueues(t,s),this.discardUnboundData(t)}),{proxy:o,isNew:!0}}releaseStreamOwner(n,e,t){const i=n.streamOwners.get(e);i&&(i.delete(t),i.size===0&&(n.streamOwners.delete(e),n.peer.removeStream(e)))}releaseTrackOwner(n,e,t){const i=n.trackOwners.get(e);i&&(i.rooms.delete(t),i.rooms.size===0&&(n.trackOwners.delete(e),n.peer.removeTrack(e)))}pruneRoomOwnership(n,e){n.streamOwners.forEach((t,i)=>this.releaseStreamOwner(n,i,e)),n.trackOwners.forEach((t,i)=>this.releaseTrackOwner(n,i,e))}scheduleIdleTimer(n){n.isClosing||hn(n.bindings).length>0||(n.idleTimer=Qe(n.idleTimer),n.idleTimer=setTimeout(()=>{var t;const e=(t=this.byApp[n.appId])==null?void 0:t[n.peerId];!e||hn(e.bindings).length>0||this.clear(n.appId,n.peerId,{destroyPeer:!0})},n.idleMs))}getSignalBinding(n){if(n.controlRoomId){const t=n.bindings[n.controlRoomId];if(t!=null&&t.handlers.signal)return t}const e=zn(n.bindings).find(t=>!!t.handlers.signal);return e?(n.controlRoomId=e.roomId,e):null}flushBindingQueues(n,e){const{handlers:t}=e;if(t.data&&e.pendingData.length>0){const i=e.pendingData.splice(0);this.syncDataTimers(n),i.forEach(r=>{var s;return(s=t.data)==null?void 0:s.call(t,r)})}else this.syncDataTimers(n);(t.track||t.stream)&&e.pendingTracks.length&&e.pendingTracks.splice(0).forEach(({track:i,stream:r})=>{var s,a;(s=t.track)==null||s.call(t,i,r),(a=t.stream)==null||a.call(t,r)})}unclaimedBufferedFrameCount(n){let e=0;for(const t of n.pendingDataByToken.values())e+=t.length;return e}boundBufferedFrameCount(n){let e=0;for(const t of zn(n.bindings))e+=t.pendingData.length;return e}bufferedFrameCount(n){return this.unclaimedBufferedFrameCount(n)+this.boundBufferedFrameCount(n)}clearDataTimers(n){Qe(this.unclaimedDataTimers.get(n)),this.unclaimedDataTimers.delete(n),Qe(this.pendingDataTimers.get(n)),this.pendingDataTimers.delete(n)}syncDataTimers(n){if(n.isClosing){this.clearDataTimers(n);return}this.unclaimedBufferedFrameCount(n)===0?(Qe(this.unclaimedDataTimers.get(n)),this.unclaimedDataTimers.delete(n)):this.unclaimedDataTimers.has(n)||this.unclaimedDataTimers.set(n,setTimeout(()=>{this.unclaimedDataTimers.delete(n),n.pendingDataByToken.clear()},Wo)),this.boundBufferedFrameCount(n)===0?(Qe(this.pendingDataTimers.get(n)),this.pendingDataTimers.delete(n)):this.pendingDataTimers.has(n)||this.pendingDataTimers.set(n,setTimeout(()=>{this.pendingDataTimers.delete(n),this.boundBufferedFrameCount(n)>0&&this.failData(n,"room data handler timed out")},Wo))}canBindRoomToken(n,e){var t;return zn(n.bindings).some(i=>!i.roomToken)||[...((t=this.rooms.get(n.appId))==null?void 0:t.values())??[]].some(i=>!i.token||i.token===e)}discardUnboundData(n){for(const e of n.pendingDataByToken.keys())this.canBindRoomToken(n,e)||n.pendingDataByToken.delete(e);this.syncDataTimers(n)}failData(n,e){console.warn(`${zt}: ${e}; disconnecting peer ${n.peerId}`),this.clear(n.appId,n.peerId,{destroyPeer:!0})}dispatchData(n,e){var r,s;if(n.isClosing)return;const t=Bm(e);if(!t){this.failData(n,"invalid or incompatible room frame");return}if(t.type==="presence"){if(t.isPresent){if(!n.remoteRoomTokens.has(t.roomToken)&&n.remoteRoomTokens.size>=64){this.failData(n,"too many advertised rooms");return}n.remoteRoomTokens.add(t.roomToken);for(const[a,o]of this.rooms.get(n.appId)??[])o.token===t.roomToken&&this.attachRoom(n.appId,a,o,n)}else{n.remoteRoomTokens.delete(t.roomToken),n.pendingDataByToken.delete(t.roomToken);const a=n.bindingsByToken[t.roomToken];(s=a==null?void 0:(r=a.handlers).close)==null||s.call(r),a==null||a.detach(),this.syncDataTimers(n)}return}const i=n.bindingsByToken[t.roomToken];if(!i){if(!this.canBindRoomToken(n,t.roomToken)||this.bufferedFrameCount(n)>=64)return;const a=n.pendingDataByToken.get(t.roomToken)??[];a.push(t.payload),n.pendingDataByToken.set(t.roomToken,a),this.syncDataTimers(n);return}if(i.handlers.data)i.handlers.data(t.payload);else{if(this.bufferedFrameCount(n)>=64){this.failData(n,"too much data waiting for a room handler");return}i.pendingData.push(t.payload),this.syncDataTimers(n)}}dispatchSignal(n,e){var i,r;const t=this.getSignalBinding(n);t?(r=(i=t.handlers).signal)==null||r.call(i,e):e.type==="offer"&&this.clear(n.appId,n.peerId,{destroyPeer:!0})}dispatchTrack(n,e,t){zn(n.bindings).forEach(i=>{var r,s,a,o;if(i.handlers.track||i.handlers.stream){(s=(r=i.handlers).track)==null||s.call(r,e,t),(o=(a=i.handlers).stream)==null||o.call(a,t);return}i.pendingTracks.push({track:e,stream:t})})}};const Eu=23333,Hm=57333,Gm=12,Vm=7533,Wm=23333,jr="offer-placeholder",Xm=["offer","answer","candidate"],Rd=n=>{if(typeof n=="string")try{const e=ps(n);return e&&typeof e=="object"&&!Array.isArray(e)?e:null}catch{return null}return n&&typeof n=="object"&&!Array.isArray(n)?n:null},mi=(n,e)=>typeof n[e]=="string"&&n[e]?n[e]:void 0,Cd=n=>!!(n&&typeof n=="object"&&typeof n.signal=="function"&&typeof n.destroy=="function"&&typeof n.setHandlers=="function"),Pd=(n,e=!1)=>Xm.some(t=>t in n&&(typeof n[t]!="string"||n[t]===""))||"peer"in n&&(e||n.peer!==void 0&&!Cd(n.peer)),qm=n=>{const e=Rd(n);if(!e||Pd(e,typeof n=="string"))return!1;const t=mi(e,"peerId");return!!(t&&t!==tn&&e.passive!==!0&&!mi(e,"answer")&&!mi(e,"candidate"))},Ym=(n,e,t,i,r,s)=>{n.toCipher(e).then(a=>{n.isLeaving()||!s()||i(t,Vt(r(a.sdp)))})},Km=()=>({offerPeer:null,offerId:null,offerSdp:null,offerInitPromise:null,offerAnswered:!1,offerRelays:[],offerSignalRelays:[],offerSignalBacklog:[],offerRelayTimers:[],offerExpiryTimer:null,connectedPeer:null,connectedPeerUnhealthySinceMs:null,answeringExpiryTimer:null,answeringPeer:null,answerSent:!1,answerReplay:null,connectionErrorReported:!1}),$m=n=>{var e;return[...n.turnConfig??[],...((e=n.rtcConfig)==null?void 0:e.iceServers)??[]].some(({urls:t})=>(Array.isArray(t)?t:[t]).some(i=>/^turns?:/i.test(i)))},Zm=(n,e)=>`could not connect to peer ${n} after exchanging SDP; ${$m(e)?"check that your TURN server URLs and credentials are reachable by both peers":"configure TURN servers with turnConfig or rtcConfig.iceServers"}`,Ia=(n,e,t)=>{var i;n.isLeaving()||e.connectedPeer||e.connectionErrorReported||(e.connectionErrorReported=!0,(i=n.onJoinError)==null||i.call(n,{error:Zm(t,n.config),appId:n.appId,peerId:t,roomId:n.roomId}))},Ua=(n,e)=>n[e]??(n[e]=Km()),ga=new WeakMap,tl=n=>{ga.delete(n),n.answeringExpiryTimer=Qe(n.answeringExpiryTimer),n.answeringPeer=null,n.answerSent=!1,n.answerReplay=null},es=(n,e)=>{n.answeringPeer===e&&(tl(n),n.connectedPeer!==e&&!e.isDead&&e.destroy())},Jm=(n,e)=>{n.answeringPeer&&n.answeringPeer!==e&&!n.answeringPeer.isDead&&n.answeringPeer.destroy(),tl(n),n.connectedPeer=e,n.connectedPeerUnhealthySinceMs=null},bu=(n,e)=>{(n==null?void 0:n.connectedPeer)===e&&(n.connectedPeer=null,n.connectedPeerUnhealthySinceMs=null)},Ko=(n,e,t)=>{n.connectedPeer&&(n.connectedPeer.isDead||n.connectedPeer.destroy(),n.connectedPeer=null,n.connectedPeerUnhealthySinceMs=null)},nl=(n,e)=>{n.offerRelayTimers[e]=Qe(n.offerRelayTimers[e]),n.offerRelays[e]&&(n.offerRelays[e]=void 0)},to=(n,e)=>{(n==null?void 0:n.offerRelays[e])===jr&&nl(n,e)},Fi=n=>{ga.delete(n),n.offerExpiryTimer=Qe(n.offerExpiryTimer),n.offerInitPromise=null,n.offerRelays.forEach((e,t)=>nl(n,t)),n.offerRelays=[],n.offerSignalRelays=[],n.offerRelayTimers=[],n.offerSignalBacklog=[],n.offerPeer&&n.offerPeer!==n.connectedPeer&&(n.offerPeer.isDead||n.offerPeer.destroy()),n.offerPeer=null,n.offerId=null,n.offerSdp=null,n.offerAnswered=!1,n.connectionErrorReported=!1},Qm=(n,e,t,i)=>{Qe(e.answeringExpiryTimer),e.answeringExpiryTimer=setTimeout(()=>{const r=n.peerStates[t];!r||r.connectedPeer||r.answeringPeer!==i||(r.answerSent&&Ia(n,r,t),es(r,i),n.checkDeactivate())},Wm)},$o=(n,e,t,i=Hm)=>{Qe(e.offerExpiryTimer);const r=e.offerId;e.offerExpiryTimer=setTimeout(()=>{const s=n.peerStates[t];!s||s.connectedPeer||s.offerId!==r||(s.offerAnswered&&Ia(n,s,t),Fi(s),n.checkDeactivate())},i)},Ld=(n,e,t,i,r)=>{const s=()=>{e.offerPeer===i&&!e.connectedPeer&&(e.offerAnswered&&Ia(n,e,t),Fi(e)),n.disconnectPeer(i,t),n.checkDeactivate()};i.setHandlers({connect:()=>n.connectPeer(i,t),...r?{signal:r}:{},close:s,error:s})},jm=(n,e,t)=>{if(e.offerPeer&&e.offerId&&e.offerSdp)return Promise.resolve({peer:e.offerPeer,offer:e.offerSdp,offerId:e.offerId});if(e.offerInitPromise)return e.offerInitPromise;const r=(async()=>{let s;try{s=(await n.offerManager.checkout(1,!1,n.encryptOffer))[0]}catch(c){if(n.isLeaving()||e.offerInitPromise!==r)return null;throw c}if(!s)throw Ke("failed to allocate offer peer");const{peer:a,offer:o}=s;return n.isLeaving()||e.offerInitPromise!==r?(a.destroy(),null):(e.offerPeer=a,e.offerId=Hi(Gm),e.offerSdp=o,e.offerAnswered=!1,e.connectionErrorReported=!1,e.offerSignalBacklog=[],Ld(n,e,t,a,c=>{e.offerPeer===a&&(e.offerSignalBacklog.push(c),e.offerSignalRelays.forEach(l=>l==null?void 0:l(c)))}),$o(n,e,t),{peer:a,offer:o,offerId:e.offerId})})().finally(()=>{e.offerInitPromise===r&&(e.offerInitPromise=null)});return e.offerInitPromise=r},Dd=async(n,e,t,i,r=0)=>{const s=n.peerStates[t];if(!s||s.connectedPeer||s.answeringPeer||s.offerAnswered){to(s,e);return}if(s.offerRelays[e]!==jr)return;const[a,o]=await Gi([gr(mr(n.rootTopicPlaintext,t)),jm(n,s,t)]);if(!o){to(s,e);return}if(n.isLeaving()){Fi(s);return}if(s.connectedPeer||s.answeringPeer||s.offerAnswered||s.offerRelays[e]!==jr){to(s,e);return}s.offerRelayTimers[e]=Qe(s.offerRelayTimers[e]),s.offerRelays[e]=!0,s.offerRelayTimers[e]=setTimeout(()=>{if(r>=2||n.isLeaving()||s.connectedPeer||s.answeringPeer||s.offerAnswered||s.offerPeer!==o.peer||s.offerId!==o.offerId){ig(n,t,e);return}s.offerRelays[e]=jr,Dd(n,e,t,i,r+1)},r===0&&n.announceIntervals[e]===void 0?2e3:(n.announceIntervals[e]??n.announceIntervalMs)*.9);let c=!1;s.offerSignalRelays[e]=l=>{c&&(n.isLeaving()||s.connectedPeer||s.offerPeer!==o.peer||s.offerId!==o.offerId||l.type!=="candidate"||Ym(n,l,a,i,p=>({peerId:tn,offerId:o.offerId,candidate:p,...n.isPassive?{passive:!0}:{}}),()=>!s.connectedPeer&&s.offerPeer===o.peer&&s.offerId===o.offerId))},i(a,Vt({peerId:tn,offerId:o.offerId,offer:o.offer,...n.isPassive?{passive:!0}:{}})),c=!0,s.offerSignalBacklog.forEach(l=>{var p,h;return(h=(p=s.offerSignalRelays)[e])==null?void 0:h.call(p,l)})},eg=async(n,e,t,i,r,s)=>{var d;const a=Ua(n.peerStates,t);if(a.answeringPeer||a.offerAnswered){const u=a.answerReplay,_=u==null?void 0:u.lastSentAt[e];if(a.answeringPeer&&!a.answeringPeer.isDead&&u&&u.offer===i&&u.offerId===r&&(_===void 0||Date.now()-_>=1e3)){u.lastSentAt[e]=Date.now();const T=await gr(mr(n.rootTopicPlaintext,t));if(!n.isLeaving()&&a.answerReplay===u&&!a.connectedPeer){const M=b=>s(T,b);u.relays[e]=M,u.messages.forEach(M)}}return}const o=!!(a.offerPeer||a.offerRelays.some(Boolean));if(o&&tn<t)return;o&&Fi(a);const c=n.initPeer(!1,n.config),l={offer:i,offerId:r,messages:[],lastSentAt:[],relays:[]};l.lastSentAt[e]=Date.now(),a.answeringPeer=c,a.answerSent=!1,a.answerReplay=l,a.connectionErrorReported=!1,Qm(n,a,t,c);const p=()=>{a.answeringPeer===c&&!a.connectedPeer&&a.answerSent&&Ia(n,a,t),es(a,c),n.disconnectPeer(c,t),n.checkDeactivate()};c.setHandlers({connect:()=>n.connectPeer(c,t),close:p,error:p});let h;try{h=await n.toPlain({type:"offer",sdp:i})}catch{es(a,c),(d=n.onJoinError)==null||d.call(n,{error:"incorrect room password when decrypting offer",appId:n.appId,peerId:t,roomId:n.roomId});return}if(c.isDead){es(a,c);return}const f=await gr(mr(n.rootTopicPlaintext,t));if(n.isLeaving()||a.answerReplay!==l)return;l.relays[e]=u=>s(f,u);const m=[];let v=!1;const S=u=>{n.toCipher(u).then(_=>{if(n.isLeaving()||a.answeringPeer!==c||c.isDead)return;const T={peerId:tn};u.type==="answer"?(a.answerSent=!0,T.answer=_.sdp):T.candidate=_.sdp,r&&(T.offerId=r),n.isPassive&&(T.passive=!0);const M=Vt(T),b=Date.now();l.messages.push(M),l.relays.forEach((w,D)=>{w&&(l.lastSentAt[D]=b,w(M))}),u.type==="answer"&&!v&&(v=!0,m.splice(0).forEach(S))})};c.setHandlers({signal:u=>{if(!(n.isLeaving()||a.answeringPeer!==c||c.isDead)&&!(u.type!=="answer"&&u.type!=="candidate")){if(u.type==="candidate"&&!v){m.push(u);return}S(u)}}}),await c.signal(h)},tg=async(n,e,t,i,r)=>{var h;let s;try{s=await n.toPlain({type:xd,sdp:t})}catch{return}const a=n.peerStates[e],o=i&&(a!=null&&a.offerPeer)&&a.offerId===i?a.offerPeer:null,c=!i||((h=a==null?void 0:a.answerReplay)==null?void 0:h.offerId)===i?a==null?void 0:a.answeringPeer:null,l=!i&&(a!=null&&a.offerPeer)?a.offerPeer:null,p=r&&!r.isDead?r:o??c??l;p&&!p.isDead&&p.signal(s)},ng=async(n,e,t,i,r)=>{var a;let s;try{s=await n.toPlain({type:"answer",sdp:t})}catch{r&&(n.offerManager.reclaimLeased(r),r.isDead||r.destroy()),(a=n.onJoinError)==null||a.call(n,{error:"incorrect room password when decrypting answer",appId:n.appId,peerId:e,roomId:n.roomId});return}if(r){const o=Ua(n.peerStates,e);if(n.offerManager.claimLeased(r),o.connectedPeer||o.offerAnswered||o.answeringPeer&&!o.answeringPeer.isDead&&tn>e){r.destroy();return}if(o.answeringPeer){const c=o.answeringPeer;es(o,c)}Fi(o),o.offerPeer=r,o.offerId=i??null,o.offerAnswered=!0,$o(n,o,e,Eu),Ld(n,o,e,r),r.signal(s)}else{const o=n.peerStates[e];if(!o||!o.offerPeer||o.offerAnswered||i&&o.offerId&&i!==o.offerId||o.offerPeer.isDead)return;o.offerAnswered=!0,$o(n,o,e,Eu),o.offerPeer.signal(s)}},ig=(n,e,t)=>{const i=n.peerStates[e];!i||i.connectedPeer||i.offerRelays[t]&&(nl(i,t),n.checkDeactivate())},rg=n=>e=>async(t,i,r)=>{var u;if(n.isLeaving())return;const s=Rd(i);if(!s||Pd(s,typeof i=="string"))return;const a=mi(s,"peerId")??"",o=mi(s,"offer"),c=mi(s,"answer"),l=mi(s,"candidate"),p=mi(s,"offerId"),h=Cd(s.peer)?s.peer:void 0,f=s.passive===!0;if(!a||a===tn)return;const[m,v]=await Gi([n.rootTopicP,n.selfTopicP]);if(n.isLeaving()||t!==m&&t!==v||n.isPassive&&f||(n.isPassive&&!n.isActive&&!c&&!l&&(n.isActive=!0,(u=n.requeueAnnounce)==null||u.call(n)),n.isPassive&&!n.isActive))return;const S=n.peerStates[a],d=S==null?void 0:S.connectedPeer;if(d&&S){const _=km(d);if(_==="live"){S.connectedPeerUnhealthySinceMs=null;return}if(_==="stale")Ko(S);else{const T=Date.now(),M=S.connectedPeerUnhealthySinceMs??T;if(S.connectedPeerUnhealthySinceMs=M,T-M<Vm)return;Ko(S)}}if(!n.reusePeer(a)){if(a&&!o&&!c&&!l){const _=Ua(n.peerStates,a),T=tn<a;if(_.answeringPeer||_.connectedPeer||_.offerAnswered)return;if(!T&&!_.offerPeer){let M=ga.get(_);M||(M=[],ga.set(_,M));const b=M[e];if(b!==void 0&&Date.now()-b<1e3)return;M[e]=Date.now();const w=await gr(mr(n.rootTopicPlaintext,a));!n.isLeaving()&&!_.connectedPeer&&!_.answeringPeer&&!_.offerAnswered&&r(w,Vt({peerId:tn}));return}return _.offerRelays[e]?void 0:(_.offerRelays[e]=jr,Dd(n,e,a,r))}if(o)return eg(n,e,a,o,p,r);if(l)return tg(n,a,l,p,h);if(c)return ng(n,a,c,p,h)}},ws=5333,sg=[233,533,1333],Tu=7533,ag=123333;var og=({init:n,subscribe:e,announce:t,deactivate:i})=>{const r={},s={},a=new zm,o=()=>zn(r).some(h=>hn(h).length>0);let c=!1,l=[],p=Rt;return(h,f,m)=>{var mt,z,bt,at;if(!h)throw Ke("requires a config map as the first argument");if(m&&typeof m!="object")throw Ke("third argument must be a callbacks object");const{appId:v}=h,S=m==null?void 0:m.onJoinError,d=m==null?void 0:m.onPeerHandshake,u=m==null?void 0:m.handshakeTimeoutMs;if(!v)throw Ke("config map is missing appId field");if(!f)throw Ke("roomId argument required");if(h.maxReceiveBytes!==void 0&&(!Number.isSafeInteger(h.maxReceiveBytes)||h.maxReceiveBytes<=0))throw Ke("maxReceiveBytes must be a positive safe integer");if(u!==void 0&&(!Number.isFinite(u)||u<=0))throw Ke("handshakeTimeoutMs must be a positive number");if((mt=r[v])!=null&&mt[f])return r[v][f];(bt=(z=s[v])==null?void 0:z[f])==null||bt.call(z,!0);const _=mr(zt,v,f),T=gr(_),M=gr(mr(_,tn)),b=rm(h.password??"",v,f),w=sm(v,f),D=h._test_only_sharedPeerIdleMs??ag;let x=!1;const C=R=>async g=>({type:g.type,sdp:await R(b,g.sdp)}),N=C(om),O=C(am),V=()=>au(!0,h);let E=!1;const A=new lm(V),L=async R=>{const g=await R.getOffer();if(!g||g.type!=="offer")throw Ke("failed to get offer for peer");return(await O(g)).sdp},U=(R,g)=>{Ze.connect(g,R,D)};let F=!1;const W=()=>{I||!E||F||(F=!0,queueMicrotask(()=>{var R;F=!1,x||(R=Me.requeueAnnounce)==null||R.call(Me)}))},P=(R,g)=>{if(x)return;const B=Me.peerStates[g];(B==null?void 0:B.connectedPeer)===R&&(Ko(B),oe(),W())},I=!!h.passive;let X,se=Rt;const oe=()=>{if(!I||!Me.isActive)return;let R=!1;hr(Me.peerStates).forEach(([g,B])=>{B.connectedPeer||B.answeringPeer||B.offerInitPromise||B.offerPeer||B.offerRelays.some(Boolean)?R=!0:delete Me.peerStates[g]}),R||(Me.isActive=!1,X=Qe(X),De.forEach(Qe),De.length=0,se(),Ze.setActive(!1))},Me={appId:v,roomId:f,config:h,peerStates:{},rootTopicPlaintext:_,rootTopicP:T,selfTopicP:M,toPlain:N,toCipher:O,isLeaving:()=>x,isPassive:I,isActive:!I,onJoinError:S,offerManager:A,encryptOffer:L,initPeer:au,connectPeer:U,disconnectPeer:P,reusePeer:R=>Ze.reuse(R),checkDeactivate:oe,announceIntervals:[],announceIntervalMs:ws},Ne={config:h,appId:v,roomId:f,isPassive:I},Oe=rg(Me);if(!c){const R=n(h);l=(Array.isArray(R)?R:[R]).map(g=>Promise.resolve(g)),c=!0,p=(at=h.relayConfig)!=null&&at.manualReconnection?Rt:tm()}const Q=l.map(()=>ws),ee=l.map(()=>0),_e=l.map(()=>0),De=[],H=l.map(async(R,g)=>e(await R,await T,await M,Oe(g),B=>A.getOffers(B,L),Ne));Gi([T,M]).then(([R,g])=>{if(x)return;const B=async(q,Z)=>{var Re;if(x||I&&!Me.isActive)return;const ae=I?{passive:!0}:void 0;let ce;try{ce=await t(q,R,g,ae,Ne),_e[Z]=0}catch(de){if(x)return;const fe=_e[Z]??0;fe===0&&((Re=h.relayConfig)==null?void 0:Re.warnOnRelayFailure)!==!1&&console.warn(`${zt}: announce failed - ${pr(de,"")}`),_e[Z]=fe+1}if(x||I&&!Me.isActive||ce&&typeof ce!="number"&&"stopAnnouncing"in ce)return;typeof ce=="number"?(Me.announceIntervals[Z]=ce,Q[Z]=ce):ce&&(Q[Z]=ce.nextAnnounceMs,E||(E=ce.reannounceOnDisconnect===!0));const j=ee[Z]??0;ee[Z]=j+1;const te=Q[Z]??ws,ue=sg[j]??(j===3&&typeof ce=="object"?ws:void 0);De[Z]=setTimeout(()=>{B(q,Z)},typeof ue=="number"?Math.min(te,ue):te)};se=()=>{i&&l.forEach(async q=>{const Z=await q;x||i(Z,R,g,Ne)})},Me.requeueAnnounce=()=>{De.forEach(Qe),De.length=0,X=Qe(X),Ze.setActive(!0),X=setTimeout(oe,Tu),l.forEach(async(q,Z)=>{const ae=await q;ae&&!x&&(ee[Z]=0,B(ae,Z))})},H.forEach(async(q,Z)=>{if(await q,x)return;const ae=await l[Z];ae&&!x&&(!I||Me.isActive)&&B(ae,Z)})});let ie=Rt;const me=h.password??"",{compose:le}=um(me,v,f),Ee=le(d),We=()=>{var R;((R=r[v])==null?void 0:R[f])===$e&&(delete r[v][f],hn(r[v]).length===0&&delete r[v])},He=()=>{var R;((R=s[v])==null?void 0:R[f])===it&&(delete s[v][f],hn(s[v]).length===0&&delete s[v])},it=(R=!1)=>{x||(x=!0,ie=Rt,We(),He(),Ze.leave(),hr(Me.peerStates).forEach(([g,B])=>{B.connectedPeer&&!B.connectedPeer.isDead&&(a.owns(v,g,B.connectedPeer)||B.connectedPeer.destroy()),B.answeringPeer&&!B.answeringPeer.isDead&&B.answeringPeer.destroy(),Fi(B),tl(B),B.connectedPeer=null,B.connectedPeerUnhealthySinceMs=null}),De.forEach(Qe),X=Qe(X),H.forEach(async g=>{(await g)()}),A.destroy(),!(R||o())&&(c=!1,p()))},Be={...h.maxReceiveBytes===void 0?{}:{maxReceiveBytes:h.maxReceiveBytes},...Ee?{onPeerHandshake:Ee}:{},...u===void 0?{}:{handshakeTimeoutMs:u},isPassive:I,onBeforeLeave:()=>{We(),(s[v]??(s[v]={}))[f]=it},onHandshakeError:(R,g)=>S==null?void 0:S({error:g.replace(/^handshake failed: /,""),appId:v,peerId:R,roomId:f})};r[v]??(r[v]={});const $e=Fm(R=>ie=R,R=>{if(x)return;const g=Me.peerStates[R];g!=null&&g.connectedPeer&&bu(g,g.connectedPeer),oe(),W()},()=>it(!1),Be),Ze=a.registerRoom(v,f,w,{active:!I||Me.isActive,onPeer:(R,g,B)=>{const q=Ua(Me.peerStates,g);Jm(q,B),I&&!Me.isActive&&(Me.isActive=!0,Ze.setActive(!0),Me.requeueAnnounce?Me.requeueAnnounce():(X=Qe(X),X=setTimeout(oe,Tu))),ie(R,g),Fi(q)},onDetach:(R,g)=>{bu(Me.peerStates[R],g),oe()}});return r[v][f]=$e}};const cg=6e4,no=n=>{if(!n)throw Ke("topic strategy missing room context");return n},Dr=(n,e,t,i)=>({kind:e,appId:n.appId,roomId:n.roomId,rootTopic:t,selfTopic:i});var lg=({steadyAnnounceIntervalMs:n=cg,reannounceOnDisconnect:e=!0,init:t,subscribeTopic:i,publishTopic:r,unpublishTopic:s})=>og({init:t,subscribe:async(a,o,c,l,p,h)=>{const f=no(h),m=(b,w)=>void r(a,b,w,Dr(f,"signal",o,c));let v=null,S=!1,d=null,u=!1;const _=b=>{S||(S=!0,b())},T=()=>(d||(d=Promise.resolve(i(a,c,(b,w)=>{u||l(b,w,m)},Dr(f,"self",o,c))).then(b=>{v=b,u&&_(b)})),d);f.isPassive||await T();const M=await i(a,o,async(b,w)=>{u||(f.isPassive&&qm(w)&&await T(),u||await l(b,w,m))},Dr(f,"root",o,c));return()=>{u=!0,v&&_(v),M()}},announce:async(a,o,c,l,p)=>{const h=no(p),f=await r(a,o,Vt({peerId:tn,...l}),Dr(h,"announce",o,c));return typeof f=="number"||f!==void 0&&"stopAnnouncing"in f?f:{nextAnnounceMs:(f==null?void 0:f.nextAnnounceMs)??n,reannounceOnDisconnect:(f==null?void 0:f.reannounceOnDisconnect)??e}},...s?{deactivate:(a,o,c,l)=>{const p=no(l);return s(a,o,Dr(p,"announce",o,c))}}:{}});const Id=em(n=>n.socket),ug=5,Ud="x",Nd="EVENT",{secretKey:fg,publicKey:dg}=gd.keygen(),hg=is(dg),io={},wu=250,Pi=6e4,pg=9e5,il=5333,rs=new WeakMap,_a=Id.scoped(),Zo=new WeakSet,mg=n=>{const e=rs.get(n),t=Math.min(e!=null&&e.delayMs?Math.max(Pi,e.delayMs*2):Pi,pg);return rs.set(n,{delayMs:t,untilMs:Date.now()+t}),t},ss=n=>{const e=rs.get(n);if(!e)return 0;const t=e.untilMs-Date.now();return t>0?t:0},As=n=>({nextAnnounceMs:n}),gg={stopAnnouncing:!0},_g=n=>{var e;return Zo.has(n)?!1:(Zo.add(n),rs.delete(n),(e=n.close)==null||e.call(n),!0)},Fd=()=>Math.floor(Date.now()/1e3),Od=n=>io[n]??(io[n]=Sd(n,1e4)+2e4),vg=async(n,e)=>{const t={kind:Od(n),tags:[[Ud,n]],created_at:Fd(),content:e,pubkey:hg},i=await Da("SHA-256",Vt([0,t.pubkey,t.created_at,t.kind,t.tags,t.content]));return Vt([Nd,{...t,id:is(i),sig:is(await gd.signAsync(i,fg))}])},nn={},Bd=n=>{n.flushWaiters.forEach(e=>e()),n.flushWaiters.clear()},xg=(n,e,t)=>{var r;const i=nn[r=n.url]??(nn[r]={subIds:[],topics:new Map,updateTimer:null,flushWaiters:new Set,retryTimer:null,retryMs:il,pendingEose:new Set,requestedAt:0});i.topics.set(e,t),kd(n,i)},Sg=(n,e)=>{const t=nn[n.url];t&&(t.topics.delete(e),delete _a.forRelay(n)[e],t.topics.size===0?(t.retryTimer!==null&&clearTimeout(t.retryTimer),t.updateTimer!==null&&(clearTimeout(t.updateTimer),t.updateTimer=null),Bd(t),t.subIds.forEach(i=>n.send(Vt(["CLOSE",i]))),delete nn[n.url]):kd(n,t))},kd=(n,e)=>{e.updateTimer===null&&(e.updateTimer=setTimeout(()=>{e.updateTimer=null;try{zd(n)}finally{Bd(e)}},0))},Mg=n=>{const e=nn[n.url];return!e||e.updateTimer===null?Promise.resolve():new Promise(t=>e.flushWaiters.add(t))},zd=n=>{const e=nn[n.url];if(!e||e.topics.size===0)return;const t=[...e.topics.keys()],i=[],r=Fd();for(let s=0;s<t.length;s+=wu)i.push(t.slice(s,s+wu));for(;e.subIds.length>i.length;){const s=e.subIds.pop();s&&n.send(Vt(["CLOSE",s]))}e.pendingEose.clear(),e.requestedAt=Date.now(),i.forEach((s,a)=>{var c;const o=(c=e.subIds)[a]??(c[a]=Hi(64));e.pendingEose.add(o),n.send(Vt(["REQ",o,{kinds:[...new Set(s.map(Od))],since:r,"#x":s}]))})},Hd=n=>{const e=nn[n.url];if(e&&e.topics.size>0&&!n.isClosed){if(ss(n)>0){Wd(n,!0);return}e.retryTimer!==null&&(clearTimeout(e.retryTimer),e.retryTimer=null),zd(n),Gd(n)}},Gd=n=>{Object.entries(_a.forRelay(n)).forEach(([e,t])=>{Vd(n,e,t,!0)})},Vd=async(n,e,t,i)=>{var a;if(Zo.has(n)||n.isClosed)return i?gg:void 0;const r=ss(n);if(r>0||n.socket.readyState!==1)return i?As(Math.max(Pi,r)):void 0;const s=await vg(e,i?Vt({...ps(t),nonce:Hi(8)}):t);if(i&&!((a=nn[n.url])!=null&&a.topics.has(e)))return As(Pi);if(ss(n)>0||n.isClosed||n.socket.readyState!==1)return i?As(Pi):void 0;if(n.send(s),i)return As(Pi)},Wd=(n,e)=>{const t=nn[n.url];if(!t||t.retryTimer!==null&&!e)return;t.retryTimer!==null&&clearTimeout(t.retryTimer);const i=e?ss(n):t.retryMs;t.retryMs=Math.min(t.retryMs*2,Pi),t.retryTimer=setTimeout(()=>{t.retryTimer=null,Hd(n)},Math.max(i,il))},yg=lg({init:n=>$p(n,Eg,ug,!0).map(e=>{const t=Id.register(e,()=>jp(e,i=>{var c,l;const[r,s,a,o]=ps(i);if(r!==Nd){const p=`${zt}: relay failure from ${t.url} - `,h=r==="CLOSED"&&typeof a=="string"?a:o,f=r==="OK"&&a===!1,m=(f||r==="CLOSED")&&(h==null?void 0:h.startsWith("rate-limited:")),v=f&&(h==null?void 0:h.startsWith("duplicate:")),S=h&&/^(blocked|restricted|auth-required|pow):/.test(h);if(r==="OK"&&a===!0&&ss(t)===0&&rs.delete(t),(f||r==="CLOSED")&&S&&!_g(t))return;if(m)mg(t);else if(r==="EOSE"){const d=nn[t.url];d!=null&&d.pendingEose.delete(s)&&d.pendingEose.size===0&&(d.retryMs=il,d.retryTimer!==null&&(clearTimeout(d.retryTimer),d.retryTimer=null),Date.now()-d.requestedAt>=1e3&&Gd(t))}r==="CLOSED"&&!S&&Wd(t,!!m),!v&&((c=n.relayConfig)==null?void 0:c.warnOnRelayFailure)!==!1&&(r==="NOTICE"?console.warn(p+s):(f||r==="CLOSED")&&console.warn(p+h));return}if(a&&typeof a=="object"&&"content"in a){const p=nn[t.url];if(p!=null&&p.subIds.includes(s)&&a.tags){const h=a.tags.find(f=>f[0]===Ud);h!=null&&h[1]&&((l=p.topics.get(h[1]))==null||l(h[1],a.content))}}},()=>Hd(t)));return t.ready}),subscribeTopic:(n,e,t,i)=>{const r=(a,o)=>void t(a,o);xg(n,e,r);const s=()=>{var a;((a=nn[n.url])==null?void 0:a.topics.get(e))===r&&Sg(n,e)};return i.kind==="root"?Mg(n).then(()=>s):s},publishTopic:(n,e,t,{kind:i})=>{const r=typeof t=="string"?t:Vt(t);return i==="announce"&&(_a.forRelay(n)[e]=r),Vd(n,e,r,i==="announce")},unpublishTopic:(n,e)=>{delete _a.forRelay(n)[e]}}),Eg=["0x-nostr-relay.fly.dev","bendernostur.duckdns.org:8443","cdn.satellite.earth","nos.lol","nostr.chaima.info","nostr.christiansass.de","nostr.rblb.it","nostr.red5d.dev","nostr.robosats.org","nostr.stakey.net","nostrcity-club.fly.dev","relay-dev.gulugulu.moe","relay.aarpia.com","relay.agentry.com","relay.bitmacro.cloud","relay.bullishbounty.com","relay.degmods.com","relay.flashapp.me","relay.grigic.org","relay.hackshed.dev","relay.kaleidoswap.com","relay.layer.systems","relay.nostr.blockhenge.com","relay.nostr.dev.br","relay.nostrmap.net","relay.novospes.com","relay.piazza.today","relay.routstr.com","testr.nymble.world"].map(n=>"wss://"+n),bg=["visor","scout","fang","football"],Jo=[{id:"visor",name:"Visor",shell:"#f0b429",rolls:!1},{id:"scout",name:"Scout",shell:"#3c7dff",rolls:!1},{id:"fang",name:"Fang",shell:"#2fce67",rolls:!1},{id:"football",name:"Football",shell:"#f7f7fb",rolls:!0}],Tg=new Set(bg);function br(n){return typeof n=="string"&&Tg.has(n)}function as(n){return Jo.find(e=>e.id===n)??Jo[0]}function wg(n,e){e==="football"?Ag(n):Xd(n,e)}function Ag(n){const e=n.getContext("2d");if(!e)return;const t=n.width;e.clearRect(0,0,t,t),e.fillStyle="#f7f7fb",e.beginPath(),e.arc(t/2,t/2,t*.48,0,Math.PI*2),e.fill(),e.fillStyle="#16161c",Ir(e,t/2,t/2,t*.16,-Math.PI/2),Ir(e,t*.3,t*.32,t*.09,.4),Ir(e,t*.72,t*.34,t*.09,.2),Ir(e,t*.28,t*.7,t*.08,.6),Ir(e,t*.7,t*.68,t*.08,1)}function Ir(n,e,t,i,r){n.beginPath();for(let s=0;s<5;s++){const a=r+s/5*Math.PI*2,o=e+Math.cos(a)*i,c=t+Math.sin(a)*i;s===0?n.moveTo(o,c):n.lineTo(o,c)}n.closePath(),n.fill()}function Xd(n,e){const t=n.getContext("2d");if(!t)return;const i=n.width;t.clearRect(0,0,i,i),e==="visor"?Cg(t,i):e==="scout"?Pg(t,i):Lg(t,i)}function Rg(n){const e=n.getContext("2d");if(!e)return;const t=n.width,i=n.height,r=e.createImageData(t,i),s=Dg(),a=r.data;for(let o=0;o<i;o++){const c=(o+.5)/i*Math.PI,l=Math.sin(c),p=Math.cos(c);for(let h=0;h<t;h++){const f=(h+.5)/t*Math.PI*2,m=-Math.cos(f)*l,v=p,S=Math.sin(f)*l;let d=4;for(const T of s){const M=m*T[0]+v*T[1]+S*T[2],b=Math.acos(Math.min(1,Math.max(-1,M)));b<d&&(d=b)}const u=d<.34,_=(o*t+h)*4;a[_]=u?18:246,a[_+1]=u?18:246,a[_+2]=u?22:250,a[_+3]=255}}e.putImageData(r,0,0)}function Cg(n,e){n.fillStyle="#1a2330",n.beginPath(),n.arc(e/2,e/2,e*.48,0,Math.PI*2),n.fill(),Xr(n,e*.16,e*.22,e*.68,e*.5,e*.08),n.fillStyle="#071820",n.fill(),n.fillStyle="#7af6ff",Xr(n,e*.24,e*.36,e*.18,e*.1,e*.04),n.fill(),Xr(n,e*.58,e*.36,e*.18,e*.1,e*.04),n.fill(),n.fillStyle="#39e7ff",Xr(n,e*.4,e*.54,e*.2,e*.045,e*.02),n.fill(),_r(n,e*.12,e*.5,e*.055),_r(n,e*.88,e*.5,e*.055)}function Pg(n,e){n.fillStyle="#e7f0ff",n.beginPath(),n.arc(e/2,e/2,e*.48,0,Math.PI*2),n.fill(),Au(n,e*.36,e*.46,e*.13),Au(n,e*.64,e*.46,e*.13),n.strokeStyle="#1c2433",n.lineWidth=e*.035,n.lineCap="round",n.beginPath(),n.arc(e/2,e*.58,e*.12,.2,Math.PI-.2),n.stroke(),_r(n,e*.14,e*.62,e*.045),_r(n,e*.86,e*.62,e*.045)}function Lg(n,e){n.fillStyle="#102216",n.beginPath(),n.arc(e/2,e/2,e*.48,0,Math.PI*2),n.fill(),Ru(n,e*.36,e*.42,-.45,e),Ru(n,e*.64,e*.42,.45,e),n.strokeStyle="#b6ff9a",n.lineWidth=e*.03,n.lineCap="round";for(const t of[.58,.66,.74])n.beginPath(),n.moveTo(e*.32,e*t),n.lineTo(e*.68,e*t),n.stroke();_r(n,e*.16,e*.7,e*.04),_r(n,e*.84,e*.7,e*.04)}function Au(n,e,t,i){n.fillStyle="#ffffff",n.beginPath(),n.arc(e,t,i,0,Math.PI*2),n.fill(),n.fillStyle="#161a28",n.beginPath(),n.arc(e+i*.15,t+i*.08,i*.42,0,Math.PI*2),n.fill()}function Ru(n,e,t,i,r){n.save(),n.translate(e,t),n.rotate(i),n.fillStyle="#f4fff0",Xr(n,-r*.11,-r*.045,r*.22,r*.09,r*.04),n.fill(),n.fillStyle="#06140c",n.beginPath(),n.arc(r*.02,0,r*.028,0,Math.PI*2),n.fill(),n.restore()}function _r(n,e,t,i){n.fillStyle="#d5dbe4",n.beginPath(),n.arc(e,t,i,0,Math.PI*2),n.fill(),n.strokeStyle="#6d7684",n.lineWidth=i*.35,n.beginPath(),n.moveTo(e-i*.55,t),n.lineTo(e+i*.55,t),n.moveTo(e,t-i*.55),n.lineTo(e,t+i*.55),n.stroke()}function Xr(n,e,t,i,r,s){n.beginPath(),n.roundRect(e,t,i,r,s)}function Dg(){const n=(1+Math.sqrt(5))/2;return[[-1,n,0],[1,n,0],[-1,-n,0],[1,-n,0],[0,-1,n],[0,1,n],[0,-1,-n],[0,1,-n],[n,0,-1],[n,0,1],[-n,0,-1],[-n,0,1]].map(([t,i,r])=>{const s=Math.hypot(t,i,r);return[t/s,i/s,r/s]})}const Ig="com.unexpectedsoftware.odin-run-2048",Ug=12e3;class Ng{constructor(e,t){Fe(this,"id",tn);Fe(this,"room");Fe(this,"greeted",new Set);Fe(this,"left",!1);Fe(this,"sendSkin");Fe(this,"sendStart");Fe(this,"sendPose");Fe(this,"sendLock");Fe(this,"sendTake");Fe(this,"sendGrant");Fe(this,"sendDeny");Fe(this,"sendFly");Fe(this,"sendRematch");this.handlers=t,this.room=yg({appId:Ig},e,{handshakeTimeoutMs:Ug,onJoinError:()=>this.fail("Couldn't open the room. Try again.")});const i=this.room.makeAction("hello"),r=this.room.makeAction("skin"),s=this.room.makeAction("start"),a=this.room.makeAction("pose"),o=this.room.makeAction("lock"),c=this.room.makeAction("take"),l=this.room.makeAction("grant"),p=this.room.makeAction("deny"),h=this.room.makeAction("fly"),f=this.room.makeAction("rematch"),m=this.room.makeAction("full"),v=this.room.makeAction("started");i.onMessage=(d,{peerId:u})=>{const _=Fg(d);_&&t.onHello(u,_)},r.onMessage=(d,{peerId:u})=>{const _=Og(d);_&&t.onSkin(u,_.skin)},s.onMessage=d=>{const u=Cu(d);u!==null&&t.onStart(u)},a.onMessage=(d,{peerId:u})=>{const _=Hg(d);_&&t.onPose(u,_)},o.onMessage=d=>{const u=Bg(d);u&&t.onLock(u)},c.onMessage=(d,{peerId:u})=>{const _=kg(d);_&&t.onTake(u,_)},l.onMessage=d=>{const u=Pu(d);u&&t.onGrant(u)},p.onMessage=d=>{const u=Pu(d);u&&t.onDeny(u)},h.onMessage=d=>{const u=zg(d);u&&t.onFly(u)},f.onMessage=d=>{const u=Cu(d);u!==null&&t.onRematch(u)},m.onMessage=()=>t.onFull(),v.onMessage=()=>t.onStarted();const S=d=>{if(this.greeted.has(d))return;this.greeted.add(d);const u=Object.keys(this.room.getPeers()).length+1;if(t.isHost()&&!yp(u-1)){m.send({full:!0},{target:d}).catch(()=>{});return}if(t.started()){v.send({started:!0},{target:d}).catch(()=>{});return}i.send({skin:t.skin(),host:t.isHost()},{target:d}).catch(()=>{})};this.room.onPeerJoin=S,this.room.onPeerLeave=d=>{this.greeted.delete(d),t.onLeave(d)},this.sendSkin=d=>Un(r,{skin:d}),this.sendStart=d=>Un(s,{seed:d}),this.sendPose=d=>Un(a,d),this.sendLock=d=>Un(o,d),this.sendTake=d=>Un(c,d),this.sendGrant=d=>Un(l,d),this.sendDeny=(d,u)=>Un(p,d,u),this.sendFly=d=>Un(h,d),this.sendRematch=d=>Un(f,{seed:d}),queueMicrotask(()=>{if(!this.left)for(const d of Object.keys(this.room.getPeers()))S(d)})}peerIds(){return Object.keys(this.room.getPeers())}async leave(){this.left||(this.left=!0,this.room.onPeerJoin=null,this.room.onPeerLeave=null,await this.room.leave())}fail(e){this.left||this.handlers.onError(e)}}function Un(n,e,t){n.send(e,t?{target:t}:void 0).catch(()=>{})}function Ei(n){return typeof n=="object"&&n!==null}function Lt(n){return typeof n=="number"&&Number.isFinite(n)?n:null}function Fg(n){return!Ei(n)||!br(n.skin)||typeof n.host!="boolean"?null:{skin:n.skin,host:n.host}}function Og(n){return!Ei(n)||!br(n.skin)?null:{skin:n.skin}}function Cu(n){return Ei(n)?Lt(n.seed):null}function Bg(n){if(!Ei(n))return null;const e=Lt(n.id),t=Lt(n.value);return e===null||t===null?null:{id:e,value:t}}function kg(n){if(!Ei(n))return null;const e=Lt(n.id),t=Lt(n.valueBefore);return e===null||t===null?null:{id:e,valueBefore:t}}function Pu(n){if(!Ei(n)||typeof n.peerId!="string")return null;const e=Lt(n.id);return e===null?null:{id:e,peerId:n.peerId}}function zg(n){if(!Ei(n))return null;const e=Lt(n.id),t=Lt(n.vx),i=Lt(n.vy);return e===null||t===null||i===null?null:{id:e,vx:t,vy:i}}function Hg(n){if(!Ei(n)||!br(n.skin)||typeof n.alive!="boolean")return null;const e=Lt(n.x),t=Lt(n.y),i=Lt(n.z),r=Lt(n.time),s=Lt(n.vy),a=Lt(n.value),o=Lt(n.radius),c=Lt(n.seq);return e===null||t===null||i===null||r===null||s===null||a===null||o===null||c===null?null:{x:e,y:t,z:i,time:r,vy:s,value:a,radius:o,alive:n.alive,skin:n.skin,seq:c}}function Gg(n,e,t){let i=e;(n.has("ArrowLeft")||n.has("KeyA"))&&(i-=1),(n.has("ArrowRight")||n.has("KeyD"))&&(i+=1),i>1&&(i=1),i<-1&&(i=-1);const r=t||n.has("Space")||n.has("ArrowUp")||n.has("KeyW"),s=n.has("ArrowDown")||n.has("KeyS");return{strafe:i,jump:r,fastFall:s}}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const rl="186",Vg=0,Lu=1,Wg=2,ra=1,Xg=2,qr=3,Oi=0,Kt=1,Gn=2,Yn=0,ts=1,Du=2,Iu=3,Uu=4,qg=5,or=100,Yg=101,Kg=102,$g=103,Zg=104,Jg=200,Qg=201,jg=202,e0=203,qd=204,Yd=205,t0=206,n0=207,i0=208,r0=209,s0=210,a0=211,o0=212,c0=213,l0=214,Qo=0,jo=1,ec=2,os=3,tc=4,nc=5,ic=6,rc=7,Kd=0,u0=1,f0=2,An=0,$d=1,Zd=2,Jd=3,Qd=4,jd=5,eh=6,th=7,nh=300,Bi=301,vr=302,ro=303,so=304,Na=306,sc=1e3,Wn=1001,ac=1002,Dt=1003,d0=1004,Rs=1005,Bt=1006,ao=1007,Li=1008,en=1009,ih=1010,rh=1011,cs=1012,sl=1013,Cn=1014,Tn=1015,Pn=1016,al=1017,ol=1018,ls=1020,sh=35902,ah=35899,oh=1021,ch=1022,mn=1023,Zn=1026,Di=1027,lh=1028,cl=1029,ki=1030,ll=1031,ul=1033,sa=33776,aa=33777,oa=33778,ca=33779,oc=35840,cc=35841,lc=35842,uc=35843,fc=36196,dc=37492,hc=37496,pc=37488,mc=37489,va=37490,gc=37491,_c=37808,vc=37809,xc=37810,Sc=37811,Mc=37812,yc=37813,Ec=37814,bc=37815,Tc=37816,wc=37817,Ac=37818,Rc=37819,Cc=37820,Pc=37821,Lc=36492,Dc=36494,Ic=36495,Uc=36283,Nc=36284,xa=36285,Fc=36286,h0=3200,Oc=0,p0=1,gi="",qt="srgb",Sa="srgb-linear",Ma="linear",ut="srgb",oo=7680,m0=519,g0=512,_0=513,v0=514,fl=515,x0=516,S0=517,dl=518,M0=519,y0=35044,Nu="300 es",wn=2e3,us=2001;function E0(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ya(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function b0(){const n=ya("canvas");return n.style.display="block",n}const Fu={};function Ou(...n){const e="THREE."+n.shift();console.log(e,...n)}function uh(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ge(...n){n=uh(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function ot(...n){n=uh(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function ur(...n){const e=n.join(" ");e in Fu||(Fu[e]=!0,Ge(...n))}function T0(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const w0={[Qo]:jo,[ec]:ic,[tc]:rc,[os]:nc,[jo]:Qo,[ic]:ec,[rc]:tc,[nc]:os};class Vi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Ut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],co=Math.PI/180,Bc=180/Math.PI;function ms(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ut[n&255]+Ut[n>>8&255]+Ut[n>>16&255]+Ut[n>>24&255]+"-"+Ut[e&255]+Ut[e>>8&255]+"-"+Ut[e>>16&15|64]+Ut[e>>24&255]+"-"+Ut[t&63|128]+Ut[t>>8&255]+"-"+Ut[t>>16&255]+Ut[t>>24&255]+Ut[i&255]+Ut[i>>8&255]+Ut[i>>16&255]+Ut[i>>24&255]).toLowerCase()}function nt(n,e,t){return Math.max(e,Math.min(t,n))}function A0(n,e){return(n%e+e)%e}function lo(n,e,t){return(1-t)*n+t*e}function Ur(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Xt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Il=class Il{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Il.prototype.isVector2=!0;let et=Il;class Tr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let c=i[r+0],l=i[r+1],p=i[r+2],h=i[r+3],f=s[a+0],m=s[a+1],v=s[a+2],S=s[a+3];if(h!==S||c!==f||l!==m||p!==v){let d=c*f+l*m+p*v+h*S;d<0&&(f=-f,m=-m,v=-v,S=-S,d=-d);let u=1-o;if(d<.9995){const _=Math.acos(d),T=Math.sin(_);u=Math.sin(u*_)/T,o=Math.sin(o*_)/T,c=c*u+f*o,l=l*u+m*o,p=p*u+v*o,h=h*u+S*o}else{c=c*u+f*o,l=l*u+m*o,p=p*u+v*o,h=h*u+S*o;const _=1/Math.sqrt(c*c+l*l+p*p+h*h);c*=_,l*=_,p*=_,h*=_}}e[t]=c,e[t+1]=l,e[t+2]=p,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],c=i[r+1],l=i[r+2],p=i[r+3],h=s[a],f=s[a+1],m=s[a+2],v=s[a+3];return e[t]=o*v+p*h+c*m-l*f,e[t+1]=c*v+p*f+l*h-o*m,e[t+2]=l*v+p*m+o*f-c*h,e[t+3]=p*v-o*h-c*f-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),p=o(r/2),h=o(s/2),f=c(i/2),m=c(r/2),v=c(s/2);switch(a){case"XYZ":this._x=f*p*h+l*m*v,this._y=l*m*h-f*p*v,this._z=l*p*v+f*m*h,this._w=l*p*h-f*m*v;break;case"YXZ":this._x=f*p*h+l*m*v,this._y=l*m*h-f*p*v,this._z=l*p*v-f*m*h,this._w=l*p*h+f*m*v;break;case"ZXY":this._x=f*p*h-l*m*v,this._y=l*m*h+f*p*v,this._z=l*p*v+f*m*h,this._w=l*p*h-f*m*v;break;case"ZYX":this._x=f*p*h-l*m*v,this._y=l*m*h+f*p*v,this._z=l*p*v-f*m*h,this._w=l*p*h+f*m*v;break;case"YZX":this._x=f*p*h+l*m*v,this._y=l*m*h+f*p*v,this._z=l*p*v-f*m*h,this._w=l*p*h-f*m*v;break;case"XZY":this._x=f*p*h-l*m*v,this._y=l*m*h-f*p*v,this._z=l*p*v+f*m*h,this._w=l*p*h+f*m*v;break;default:Ge("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],p=t[6],h=t[10],f=i+o+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(p-c)*m,this._y=(s-l)*m,this._z=(a-r)*m}else if(i>o&&i>h){const m=2*Math.sqrt(1+i-o-h);this._w=(p-c)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+l)/m}else if(o>h){const m=2*Math.sqrt(1+o-i-h);this._w=(s-l)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(c+p)/m}else{const m=2*Math.sqrt(1+h-i-o);this._w=(a-r)/m,this._x=(s+l)/m,this._y=(c+p)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,p=t._w;return this._x=i*p+a*o+r*l-s*c,this._y=r*p+a*c+s*o-i*l,this._z=s*p+a*l+i*c-r*o,this._w=a*p-i*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),p=Math.sin(l);c=Math.sin(c*l)/p,t=Math.sin(t*l)/p,this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Ul=class Ul{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Bu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Bu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*i),p=2*(o*t-s*r),h=2*(s*i-a*t);return this.x=t+c*l+a*h-o*p,this.y=i+c*p+o*l-s*h,this.z=r+c*h+s*p-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this.z=nt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this.z=nt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return uo.copy(this).projectOnVector(e),this.sub(uo)}reflect(e){return this.sub(uo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Ul.prototype.isVector3=!0;let $=Ul;const uo=new $,Bu=new Tr,Nl=class Nl{constructor(e,t,i,r,s,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l)}set(e,t,i,r,s,a,o,c,l){const p=this.elements;return p[0]=e,p[1]=r,p[2]=o,p[3]=t,p[4]=s,p[5]=c,p[6]=i,p[7]=a,p[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],p=i[4],h=i[7],f=i[2],m=i[5],v=i[8],S=r[0],d=r[3],u=r[6],_=r[1],T=r[4],M=r[7],b=r[2],w=r[5],D=r[8];return s[0]=a*S+o*_+c*b,s[3]=a*d+o*T+c*w,s[6]=a*u+o*M+c*D,s[1]=l*S+p*_+h*b,s[4]=l*d+p*T+h*w,s[7]=l*u+p*M+h*D,s[2]=f*S+m*_+v*b,s[5]=f*d+m*T+v*w,s[8]=f*u+m*M+v*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],p=e[8];return t*a*p-t*o*l-i*s*p+i*o*c+r*s*l-r*a*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],p=e[8],h=p*a-o*l,f=o*c-p*s,m=l*s-a*c,v=t*h+i*f+r*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/v;return e[0]=h*S,e[1]=(r*l-p*i)*S,e[2]=(o*i-r*a)*S,e[3]=f*S,e[4]=(p*t-r*c)*S,e[5]=(r*s-o*t)*S,e[6]=m*S,e[7]=(i*c-l*t)*S,e[8]=(a*t-i*s)*S,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return ur("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(fo.makeScale(e,t)),this}rotate(e){return ur("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(fo.makeRotation(-e)),this}translate(e,t){return ur("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(fo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Nl.prototype.isMatrix3=!0;let Ve=Nl;const fo=new Ve,ku=new Ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),zu=new Ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function R0(){const n={enabled:!0,workingColorSpace:Sa,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===ut&&(r.r=Kn(r.r),r.g=Kn(r.g),r.b=Kn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ut&&(r.r=fr(r.r),r.g=fr(r.g),r.b=fr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===gi?Ma:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return ur("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return ur("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Sa]:{primaries:e,whitePoint:i,transfer:Ma,toXYZ:ku,fromXYZ:zu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:qt},outputColorSpaceConfig:{drawingBufferColorSpace:qt}},[qt]:{primaries:e,whitePoint:i,transfer:ut,toXYZ:ku,fromXYZ:zu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:qt}}}),n}const tt=R0();function Kn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function fr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Yi;class C0{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Yi===void 0&&(Yi=ya("canvas")),Yi.width=e.width,Yi.height=e.height;const r=Yi.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Yi}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ya("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Kn(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Kn(t[i]/255)*255):t[i]=Kn(t[i]);return{data:t,width:e.width,height:e.height}}else return Ge("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let P0=0;class hl{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:P0++}),this.uuid=ms(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(ho(r[a].image)):s.push(ho(r[a]))}else s=ho(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function ho(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?C0.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ge("Texture: Unable to serialize Texture."),{})}let L0=0;const po=new $;class kt extends Vi{constructor(e=kt.DEFAULT_IMAGE,t=kt.DEFAULT_MAPPING,i=Wn,r=Wn,s=Bt,a=Li,o=mn,c=en,l=kt.DEFAULT_ANISOTROPY,p=gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:L0++}),this.uuid=ms(),this.name="",this.source=new hl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(po).x}get height(){return this.source.getSize(po).y}get depth(){return this.source.getSize(po).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Ge(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ge(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==nh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case sc:e.x=e.x-Math.floor(e.x);break;case Wn:e.x=e.x<0?0:1;break;case ac:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case sc:e.y=e.y-Math.floor(e.y);break;case Wn:e.y=e.y<0?0:1;break;case ac:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}kt.DEFAULT_IMAGE=null;kt.DEFAULT_MAPPING=nh;kt.DEFAULT_ANISOTROPY=1;const Fl=class Fl{constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const c=e.elements,l=c[0],p=c[4],h=c[8],f=c[1],m=c[5],v=c[9],S=c[2],d=c[6],u=c[10];if(Math.abs(p-f)<.01&&Math.abs(h-S)<.01&&Math.abs(v-d)<.01){if(Math.abs(p+f)<.1&&Math.abs(h+S)<.1&&Math.abs(v+d)<.1&&Math.abs(l+m+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(l+1)/2,M=(m+1)/2,b=(u+1)/2,w=(p+f)/4,D=(h+S)/4,x=(v+d)/4;return T>M&&T>b?T<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(T),r=w/i,s=D/i):M>b?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=w/r,s=x/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=D/s,r=x/s),this.set(i,r,s,t),this}let _=Math.sqrt((d-v)*(d-v)+(h-S)*(h-S)+(f-p)*(f-p));return Math.abs(_)<.001&&(_=1),this.x=(d-v)/_,this.y=(h-S)/_,this.z=(f-p)/_,this.w=Math.acos((l+m+u-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this.z=nt(this.z,e.z,t.z),this.w=nt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this.z=nt(this.z,e,t),this.w=nt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Fl.prototype.isVector4=!0;let vt=Fl;class D0 extends Vi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new vt(0,0,e,t),this.scissorTest=!1,this.viewport=new vt(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:i.depth},s=new kt(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Bt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new hl(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _n extends D0{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class fh extends kt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class I0 extends kt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Ca=class Ca{constructor(e,t,i,r,s,a,o,c,l,p,h,f,m,v,S,d){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l,p,h,f,m,v,S,d)}set(e,t,i,r,s,a,o,c,l,p,h,f,m,v,S,d){const u=this.elements;return u[0]=e,u[4]=t,u[8]=i,u[12]=r,u[1]=s,u[5]=a,u[9]=o,u[13]=c,u[2]=l,u[6]=p,u[10]=h,u[14]=f,u[3]=m,u[7]=v,u[11]=S,u[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ca().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,r=1/Ki.setFromMatrixColumn(e,0).length(),s=1/Ki.setFromMatrixColumn(e,1).length(),a=1/Ki.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),l=Math.sin(r),p=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=a*p,m=a*h,v=o*p,S=o*h;t[0]=c*p,t[4]=-c*h,t[8]=l,t[1]=m+v*l,t[5]=f-S*l,t[9]=-o*c,t[2]=S-f*l,t[6]=v+m*l,t[10]=a*c}else if(e.order==="YXZ"){const f=c*p,m=c*h,v=l*p,S=l*h;t[0]=f+S*o,t[4]=v*o-m,t[8]=a*l,t[1]=a*h,t[5]=a*p,t[9]=-o,t[2]=m*o-v,t[6]=S+f*o,t[10]=a*c}else if(e.order==="ZXY"){const f=c*p,m=c*h,v=l*p,S=l*h;t[0]=f-S*o,t[4]=-a*h,t[8]=v+m*o,t[1]=m+v*o,t[5]=a*p,t[9]=S-f*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const f=a*p,m=a*h,v=o*p,S=o*h;t[0]=c*p,t[4]=v*l-m,t[8]=f*l+S,t[1]=c*h,t[5]=S*l+f,t[9]=m*l-v,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const f=a*c,m=a*l,v=o*c,S=o*l;t[0]=c*p,t[4]=S-f*h,t[8]=v*h+m,t[1]=h,t[5]=a*p,t[9]=-o*p,t[2]=-l*p,t[6]=m*h+v,t[10]=f-S*h}else if(e.order==="XZY"){const f=a*c,m=a*l,v=o*c,S=o*l;t[0]=c*p,t[4]=-h,t[8]=l*p,t[1]=f*h+S,t[5]=a*p,t[9]=m*h-v,t[2]=v*h-m,t[6]=o*p,t[10]=S*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(U0,e,N0)}lookAt(e,t,i){const r=this.elements;return Jt.subVectors(e,t),Jt.lengthSq()===0&&(Jt.z=1),Jt.normalize(),si.crossVectors(i,Jt),si.lengthSq()===0&&(Math.abs(i.z)===1?Jt.x+=1e-4:Jt.z+=1e-4,Jt.normalize(),si.crossVectors(i,Jt)),si.normalize(),Cs.crossVectors(Jt,si),r[0]=si.x,r[4]=Cs.x,r[8]=Jt.x,r[1]=si.y,r[5]=Cs.y,r[9]=Jt.y,r[2]=si.z,r[6]=Cs.z,r[10]=Jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],p=i[1],h=i[5],f=i[9],m=i[13],v=i[2],S=i[6],d=i[10],u=i[14],_=i[3],T=i[7],M=i[11],b=i[15],w=r[0],D=r[4],x=r[8],C=r[12],N=r[1],O=r[5],V=r[9],E=r[13],A=r[2],L=r[6],U=r[10],F=r[14],W=r[3],P=r[7],I=r[11],X=r[15];return s[0]=a*w+o*N+c*A+l*W,s[4]=a*D+o*O+c*L+l*P,s[8]=a*x+o*V+c*U+l*I,s[12]=a*C+o*E+c*F+l*X,s[1]=p*w+h*N+f*A+m*W,s[5]=p*D+h*O+f*L+m*P,s[9]=p*x+h*V+f*U+m*I,s[13]=p*C+h*E+f*F+m*X,s[2]=v*w+S*N+d*A+u*W,s[6]=v*D+S*O+d*L+u*P,s[10]=v*x+S*V+d*U+u*I,s[14]=v*C+S*E+d*F+u*X,s[3]=_*w+T*N+M*A+b*W,s[7]=_*D+T*O+M*L+b*P,s[11]=_*x+T*V+M*U+b*I,s[15]=_*C+T*E+M*F+b*X,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],p=e[2],h=e[6],f=e[10],m=e[14],v=e[3],S=e[7],d=e[11],u=e[15],_=c*m-l*f,T=o*m-l*h,M=o*f-c*h,b=a*m-l*p,w=a*f-c*p,D=a*h-o*p;return t*(S*_-d*T+u*M)-i*(v*_-d*b+u*w)+r*(v*T-S*b+u*D)-s*(v*M-S*w+d*D)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],c=e[2],l=e[6],p=e[10];return t*(a*p-o*l)-i*(s*p-o*c)+r*(s*l-a*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],p=e[8],h=e[9],f=e[10],m=e[11],v=e[12],S=e[13],d=e[14],u=e[15],_=t*o-i*a,T=t*c-r*a,M=t*l-s*a,b=i*c-r*o,w=i*l-s*o,D=r*l-s*c,x=p*S-h*v,C=p*d-f*v,N=p*u-m*v,O=h*d-f*S,V=h*u-m*S,E=f*u-m*d,A=_*E-T*V+M*O+b*N-w*C+D*x;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/A;return e[0]=(o*E-c*V+l*O)*L,e[1]=(r*V-i*E-s*O)*L,e[2]=(S*D-d*w+u*b)*L,e[3]=(f*w-h*D-m*b)*L,e[4]=(c*N-a*E-l*C)*L,e[5]=(t*E-r*N+s*C)*L,e[6]=(d*M-v*D-u*T)*L,e[7]=(p*D-f*M+m*T)*L,e[8]=(a*V-o*N+l*x)*L,e[9]=(i*N-t*V-s*x)*L,e[10]=(v*w-S*M+u*_)*L,e[11]=(h*M-p*w-m*_)*L,e[12]=(o*C-a*O-c*x)*L,e[13]=(t*O-i*C+r*x)*L,e[14]=(S*T-v*b-d*_)*L,e[15]=(p*b-h*T+f*_)*L,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,c=e.z,l=s*a,p=s*o;return this.set(l*a+i,l*o-r*c,l*c+r*o,0,l*o+r*c,p*o+i,p*c-r*a,0,l*c-r*o,p*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,p=a+a,h=o+o,f=s*l,m=s*p,v=s*h,S=a*p,d=a*h,u=o*h,_=c*l,T=c*p,M=c*h,b=i.x,w=i.y,D=i.z;return r[0]=(1-(S+u))*b,r[1]=(m+M)*b,r[2]=(v-T)*b,r[3]=0,r[4]=(m-M)*w,r[5]=(1-(f+u))*w,r[6]=(d+_)*w,r[7]=0,r[8]=(v+T)*D,r[9]=(d-_)*D,r[10]=(1-(f+S))*D,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),t.identity(),this;let a=Ki.set(r[0],r[1],r[2]).length();const o=Ki.set(r[4],r[5],r[6]).length(),c=Ki.set(r[8],r[9],r[10]).length();s<0&&(a=-a),un.copy(this);const l=1/a,p=1/o,h=1/c;return un.elements[0]*=l,un.elements[1]*=l,un.elements[2]*=l,un.elements[4]*=p,un.elements[5]*=p,un.elements[6]*=p,un.elements[8]*=h,un.elements[9]*=h,un.elements[10]*=h,t.setFromRotationMatrix(un),i.x=a,i.y=o,i.z=c,this}makePerspective(e,t,i,r,s,a,o=wn,c=!1){const l=this.elements,p=2*s/(t-e),h=2*s/(i-r),f=(t+e)/(t-e),m=(i+r)/(i-r);let v,S;if(c)v=s/(a-s),S=a*s/(a-s);else if(o===wn)v=-(a+s)/(a-s),S=-2*a*s/(a-s);else if(o===us)v=-a/(a-s),S=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=p,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=v,l[14]=S,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=wn,c=!1){const l=this.elements,p=2/(t-e),h=2/(i-r),f=-(t+e)/(t-e),m=-(i+r)/(i-r);let v,S;if(c)v=1/(a-s),S=a/(a-s);else if(o===wn)v=-2/(a-s),S=-(a+s)/(a-s);else if(o===us)v=-1/(a-s),S=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=p,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=h,l[9]=0,l[13]=m,l[2]=0,l[6]=0,l[10]=v,l[14]=S,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Ca.prototype.isMatrix4=!0;let xt=Ca;const Ki=new $,un=new xt,U0=new $(0,0,0),N0=new $(1,1,1),si=new $,Cs=new $,Jt=new $,Hu=new xt,Gu=new Tr;class yi{constructor(e=0,t=0,i=0,r=yi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],p=r[9],h=r[2],f=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(nt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-p,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-nt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(nt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-nt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(nt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-p,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-nt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-p,m),this._y=0);break;default:Ge("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Hu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Hu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Gu.setFromEuler(this),this.setFromQuaternion(Gu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}yi.DEFAULT_ORDER="XYZ";class dh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let F0=0;const Vu=new $,$i=new Tr,Nn=new xt,Ps=new $,Nr=new $,O0=new $,B0=new Tr,Wu=new $(1,0,0),Xu=new $(0,1,0),qu=new $(0,0,1),Yu={type:"added"},k0={type:"removed"},Zi={type:"childadded",child:null},mo={type:"childremoved",child:null};class Ct extends Vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:F0++}),this.uuid=ms(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ct.DEFAULT_UP.clone();const e=new $,t=new yi,i=new Tr,r=new $(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new xt},normalMatrix:{value:new Ve}}),this.matrix=new xt,this.matrixWorld=new xt,this.matrixAutoUpdate=Ct.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new dh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return $i.setFromAxisAngle(e,t),this.quaternion.multiply($i),this}rotateOnWorldAxis(e,t){return $i.setFromAxisAngle(e,t),this.quaternion.premultiply($i),this}rotateX(e){return this.rotateOnAxis(Wu,e)}rotateY(e){return this.rotateOnAxis(Xu,e)}rotateZ(e){return this.rotateOnAxis(qu,e)}translateOnAxis(e,t){return Vu.copy(e).applyQuaternion(this.quaternion),this.position.add(Vu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Wu,e)}translateY(e){return this.translateOnAxis(Xu,e)}translateZ(e){return this.translateOnAxis(qu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Nn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ps.copy(e):Ps.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Nr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Nn.lookAt(Nr,Ps,this.up):Nn.lookAt(Ps,Nr,this.up),this.quaternion.setFromRotationMatrix(Nn),r&&(Nn.extractRotation(r.matrixWorld),$i.setFromRotationMatrix(Nn),this.quaternion.premultiply($i.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ot("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Yu),Zi.child=e,this.dispatchEvent(Zi),Zi.child=null):ot("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(k0),mo.child=e,this.dispatchEvent(mo),mo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Nn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Nn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Nn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Yu),Zi.child=e,this.dispatchEvent(Zi),Zi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Nr,e,O0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Nr,B0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,p=c.length;l<p;l++){const h=c[l];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),p=a(e.images),h=a(e.shapes),f=a(e.skeletons),m=a(e.animations),v=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),p.length>0&&(i.images=p),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),v.length>0&&(i.nodes=v)}return i.object=r,i;function a(o){const c=[];for(const l in o){const p=o[l];delete p.metadata,c.push(p)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Ct.DEFAULT_UP=new $(0,1,0);Ct.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class vi extends Ct{constructor(){super(),this.isGroup=!0,this.type="Group"}}const z0={type:"move"};class go{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const S of e.hand.values()){const d=t.getJointPose(S,i),u=this._getHandJoint(l,S);d!==null&&(u.matrix.fromArray(d.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=d.radius),u.visible=d!==null}const p=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=p.position.distanceTo(h.position),m=.02,v=.005;l.inputState.pinching&&f>m+v?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=m-v&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(z0)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new vi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const hh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ai={h:0,s:0,l:0},Ls={h:0,s:0,l:0};function _o(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class je{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=tt.workingColorSpace){return this.r=e,this.g=t,this.b=i,tt.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=tt.workingColorSpace){if(e=A0(e,1),t=nt(t,0,1),i=nt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=_o(a,s,e+1/3),this.g=_o(a,s,e),this.b=_o(a,s,e-1/3)}return tt.colorSpaceToWorking(this,r),this}setStyle(e,t=qt){function i(s){s!==void 0&&parseFloat(s)<1&&Ge("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ge("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Ge("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=qt){const i=hh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ge("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Kn(e.r),this.g=Kn(e.g),this.b=Kn(e.b),this}copyLinearToSRGB(e){return this.r=fr(e.r),this.g=fr(e.g),this.b=fr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=qt){return tt.workingToColorSpace(Nt.copy(this),e),Math.round(nt(Nt.r*255,0,255))*65536+Math.round(nt(Nt.g*255,0,255))*256+Math.round(nt(Nt.b*255,0,255))}getHexString(e=qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tt.workingColorSpace){tt.workingToColorSpace(Nt.copy(this),t);const i=Nt.r,r=Nt.g,s=Nt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let c,l;const p=(o+a)/2;if(o===a)c=0,l=0;else{const h=a-o;switch(l=p<=.5?h/(a+o):h/(2-a-o),a){case i:c=(r-s)/h+(r<s?6:0);break;case r:c=(s-i)/h+2;break;case s:c=(i-r)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=p,e}getRGB(e,t=tt.workingColorSpace){return tt.workingToColorSpace(Nt.copy(this),t),e.r=Nt.r,e.g=Nt.g,e.b=Nt.b,e}getStyle(e=qt){tt.workingToColorSpace(Nt.copy(this),e);const t=Nt.r,i=Nt.g,r=Nt.b;return e!==qt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(ai),this.setHSL(ai.h+e,ai.s+t,ai.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ai),e.getHSL(Ls);const i=lo(ai.h,Ls.h,t),r=lo(ai.s,Ls.s,t),s=lo(ai.l,Ls.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nt=new je;je.NAMES=hh;class pl{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new je(e),this.near=t,this.far=i}clone(){return new pl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class H0 extends Ct{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new yi,this.environmentIntensity=1,this.environmentRotation=new yi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const fn=new $,Fn=new $,vo=new $,On=new $,Ji=new $,Qi=new $,Ku=new $,xo=new $,So=new $,Mo=new $,yo=new vt,Eo=new vt,bo=new vt;class pn{constructor(e=new $,t=new $,i=new $){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),fn.subVectors(e,t),r.cross(fn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){fn.subVectors(r,t),Fn.subVectors(i,t),vo.subVectors(e,t);const a=fn.dot(fn),o=fn.dot(Fn),c=fn.dot(vo),l=Fn.dot(Fn),p=Fn.dot(vo),h=a*l-o*o;if(h===0)return s.set(0,0,0),null;const f=1/h,m=(l*c-o*p)*f,v=(a*p-o*c)*f;return s.set(1-m-v,v,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,On)===null?!1:On.x>=0&&On.y>=0&&On.x+On.y<=1}static getInterpolation(e,t,i,r,s,a,o,c){return this.getBarycoord(e,t,i,r,On)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,On.x),c.addScaledVector(a,On.y),c.addScaledVector(o,On.z),c)}static getInterpolatedAttribute(e,t,i,r,s,a){return yo.setScalar(0),Eo.setScalar(0),bo.setScalar(0),yo.fromBufferAttribute(e,t),Eo.fromBufferAttribute(e,i),bo.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(yo,s.x),a.addScaledVector(Eo,s.y),a.addScaledVector(bo,s.z),a}static isFrontFacing(e,t,i,r){return fn.subVectors(i,t),Fn.subVectors(e,t),fn.cross(Fn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return fn.subVectors(this.c,this.b),Fn.subVectors(this.a,this.b),fn.cross(Fn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return pn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return pn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return pn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return pn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return pn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;Ji.subVectors(r,i),Qi.subVectors(s,i),xo.subVectors(e,i);const c=Ji.dot(xo),l=Qi.dot(xo);if(c<=0&&l<=0)return t.copy(i);So.subVectors(e,r);const p=Ji.dot(So),h=Qi.dot(So);if(p>=0&&h<=p)return t.copy(r);const f=c*h-p*l;if(f<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(i).addScaledVector(Ji,a);Mo.subVectors(e,s);const m=Ji.dot(Mo),v=Qi.dot(Mo);if(v>=0&&m<=v)return t.copy(s);const S=m*l-c*v;if(S<=0&&l>=0&&v<=0)return o=l/(l-v),t.copy(i).addScaledVector(Qi,o);const d=p*v-m*h;if(d<=0&&h-p>=0&&m-v>=0)return Ku.subVectors(s,r),o=(h-p)/(h-p+(m-v)),t.copy(r).addScaledVector(Ku,o);const u=1/(d+S+f);return a=S*u,o=f*u,t.copy(i).addScaledVector(Ji,a).addScaledVector(Qi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class gs{constructor(e=new $(1/0,1/0,1/0),t=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(dn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(dn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=dn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,dn):dn.fromBufferAttribute(s,a),dn.applyMatrix4(e.matrixWorld),this.expandByPoint(dn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ds.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ds.copy(i.boundingBox)),Ds.applyMatrix4(e.matrixWorld),this.union(Ds)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,dn),dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Fr),Is.subVectors(this.max,Fr),ji.subVectors(e.a,Fr),er.subVectors(e.b,Fr),tr.subVectors(e.c,Fr),oi.subVectors(er,ji),ci.subVectors(tr,er),Ti.subVectors(ji,tr);let t=[0,-oi.z,oi.y,0,-ci.z,ci.y,0,-Ti.z,Ti.y,oi.z,0,-oi.x,ci.z,0,-ci.x,Ti.z,0,-Ti.x,-oi.y,oi.x,0,-ci.y,ci.x,0,-Ti.y,Ti.x,0];return!To(t,ji,er,tr,Is)||(t=[1,0,0,0,1,0,0,0,1],!To(t,ji,er,tr,Is))?!1:(Us.crossVectors(oi,ci),t=[Us.x,Us.y,Us.z],To(t,ji,er,tr,Is))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,dn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(dn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Bn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Bn=[new $,new $,new $,new $,new $,new $,new $,new $],dn=new $,Ds=new gs,ji=new $,er=new $,tr=new $,oi=new $,ci=new $,Ti=new $,Fr=new $,Is=new $,Us=new $,wi=new $;function To(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){wi.fromArray(n,s);const o=r.x*Math.abs(wi.x)+r.y*Math.abs(wi.y)+r.z*Math.abs(wi.z),c=e.dot(wi),l=t.dot(wi),p=i.dot(wi);if(Math.max(-Math.max(c,l,p),Math.min(c,l,p))>o)return!1}return!0}const Et=new $,Ns=new et;let G0=0;class Rn extends Vi{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:G0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=y0,this.updateRanges=[],this.gpuType=Tn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ns.fromBufferAttribute(this,t),Ns.applyMatrix3(e),this.setXY(t,Ns.x,Ns.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix3(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix4(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.applyNormalMatrix(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.transformDirection(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ur(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Xt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ur(t,this.array)),t}setX(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ur(t,this.array)),t}setY(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ur(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ur(t,this.array)),t}setW(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),i=Xt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),i=Xt(i,this.array),r=Xt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),i=Xt(i,this.array),r=Xt(r,this.array),s=Xt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class ph extends Rn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class mh extends Rn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Pt extends Rn{constructor(e,t,i){super(new Float32Array(e),t,i)}}const V0=new gs,Or=new $,wo=new $;class Fa{constructor(e=new $,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):V0.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Or.subVectors(e,this.center);const t=Or.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Or,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Or.copy(e.center).add(wo)),this.expandByPoint(Or.copy(e.center).sub(wo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let W0=0;const an=new xt,Ao=new Ct,nr=new $,Qt=new gs,Br=new gs,At=new $;class Zt extends Vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:W0++}),this.uuid=ms(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(E0(e)?mh:ph)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ve().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return an.makeRotationFromQuaternion(e),this.applyMatrix4(an),this}rotateX(e){return an.makeRotationX(e),this.applyMatrix4(an),this}rotateY(e){return an.makeRotationY(e),this.applyMatrix4(an),this}rotateZ(e){return an.makeRotationZ(e),this.applyMatrix4(an),this}translate(e,t,i){return an.makeTranslation(e,t,i),this.applyMatrix4(an),this}scale(e,t,i){return an.makeScale(e,t,i),this.applyMatrix4(an),this}lookAt(e){return Ao.lookAt(e),Ao.updateMatrix(),this.applyMatrix4(Ao.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(nr).negate(),this.translate(nr.x,nr.y,nr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Pt(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Ge("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ot("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Qt.setFromBufferAttribute(s),this.morphTargetsRelative?(At.addVectors(this.boundingBox.min,Qt.min),this.boundingBox.expandByPoint(At),At.addVectors(this.boundingBox.max,Qt.max),this.boundingBox.expandByPoint(At)):(this.boundingBox.expandByPoint(Qt.min),this.boundingBox.expandByPoint(Qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ot('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ot("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(e){const i=this.boundingSphere.center;if(Qt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Br.setFromBufferAttribute(o),this.morphTargetsRelative?(At.addVectors(Qt.min,Br.min),Qt.expandByPoint(At),At.addVectors(Qt.max,Br.max),Qt.expandByPoint(At)):(Qt.expandByPoint(Br.min),Qt.expandByPoint(Br.max))}Qt.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)At.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(At));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,p=o.count;l<p;l++)At.fromBufferAttribute(o,l),c&&(nr.fromBufferAttribute(e,l),At.add(nr)),r=Math.max(r,i.distanceToSquared(At))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&ot('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ot("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Rn(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],c=[];for(let x=0;x<i.count;x++)o[x]=new $,c[x]=new $;const l=new $,p=new $,h=new $,f=new et,m=new et,v=new et,S=new $,d=new $;function u(x,C,N){l.fromBufferAttribute(i,x),p.fromBufferAttribute(i,C),h.fromBufferAttribute(i,N),f.fromBufferAttribute(s,x),m.fromBufferAttribute(s,C),v.fromBufferAttribute(s,N),p.sub(l),h.sub(l),m.sub(f),v.sub(f);const O=1/(m.x*v.y-v.x*m.y);isFinite(O)&&(S.copy(p).multiplyScalar(v.y).addScaledVector(h,-m.y).multiplyScalar(O),d.copy(h).multiplyScalar(m.x).addScaledVector(p,-v.x).multiplyScalar(O),o[x].add(S),o[C].add(S),o[N].add(S),c[x].add(d),c[C].add(d),c[N].add(d))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let x=0,C=_.length;x<C;++x){const N=_[x],O=N.start,V=N.count;for(let E=O,A=O+V;E<A;E+=3)u(e.getX(E+0),e.getX(E+1),e.getX(E+2))}const T=new $,M=new $,b=new $,w=new $;function D(x){b.fromBufferAttribute(r,x),w.copy(b);const C=o[x];T.copy(C),T.sub(b.multiplyScalar(b.dot(C))).normalize(),M.crossVectors(w,C);const O=M.dot(c[x])<0?-1:1;a.setXYZW(x,T.x,T.y,T.z,O)}for(let x=0,C=_.length;x<C;++x){const N=_[x],O=N.start,V=N.count;for(let E=O,A=O+V;E<A;E+=3)D(e.getX(E+0)),D(e.getX(E+1)),D(e.getX(E+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Rn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const r=new $,s=new $,a=new $,o=new $,c=new $,l=new $,p=new $,h=new $;if(e)for(let f=0,m=e.count;f<m;f+=3){const v=e.getX(f+0),S=e.getX(f+1),d=e.getX(f+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,S),a.fromBufferAttribute(t,d),p.subVectors(a,s),h.subVectors(r,s),p.cross(h),o.fromBufferAttribute(i,v),c.fromBufferAttribute(i,S),l.fromBufferAttribute(i,d),o.add(p),c.add(p),l.add(p),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(S,c.x,c.y,c.z),i.setXYZ(d,l.x,l.y,l.z)}else for(let f=0,m=t.count;f<m;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),p.subVectors(a,s),h.subVectors(r,s),p.cross(h),i.setXYZ(f+0,p.x,p.y,p.z),i.setXYZ(f+1,p.x,p.y,p.z),i.setXYZ(f+2,p.x,p.y,p.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)At.fromBufferAttribute(e,t),At.normalize(),e.setXYZ(t,At.x,At.y,At.z)}toNonIndexed(){function e(o,c){const l=o.array,p=o.itemSize,h=o.normalized,f=new l.constructor(c.length*p);let m=0,v=0;for(let S=0,d=c.length;S<d;S++){o.isInterleavedBufferAttribute?m=c[S]*o.data.stride+o.offset:m=c[S]*p;for(let u=0;u<p;u++)f[v++]=l[m++]}return new Rn(f,p,h)}if(this.index===null)return Ge("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Zt,i=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,i);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let p=0,h=l.length;p<h;p++){const f=l[p],m=e(f,i);c.push(m)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],p=[];for(let h=0,f=l.length;h<f;h++){const m=l[h];p.push(m.toJSON(e.data))}p.length>0&&(r[c]=p,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const l in r){const p=r[l];this.setAttribute(l,p.clone(t))}const s=e.morphAttributes;for(const l in s){const p=[],h=s[l];for(let f=0,m=h.length;f<m;f++)p.push(h[f].clone(t));this.morphAttributes[l]=p}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,p=a.length;l<p;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ro=new $,X0=new $,q0=new Ve;class pi{constructor(e=new $(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Ro.subVectors(i,t).cross(X0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const r=e.delta(Ro),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||q0.getNormalMatrix(e),r=this.coplanarPoint(Ro).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Y0=0;class wr extends Vi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Y0++}),this.uuid=ms(),this.name="",this.type="Material",this.blending=ts,this.side=Oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qd,this.blendDst=Yd,this.blendEquation=or,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new je(0,0,0),this.blendAlpha=0,this.depthFunc=os,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=m0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=oo,this.stencilZFail=oo,this.stencilZPass=oo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Ge(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ge(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new je().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new pi().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new et().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new et().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const kn=new $,Co=new $,Fs=new $,Os=new $;class gh{constructor(e=new $,t=new $(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,kn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=kn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(kn.copy(this.origin).addScaledVector(this.direction,t),kn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Co.copy(e).add(t).multiplyScalar(.5),Fs.copy(t).sub(e).normalize(),Os.copy(this.origin).sub(Co);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Fs),o=Os.dot(this.direction),c=-Os.dot(Fs),l=Os.lengthSq(),p=Math.abs(1-a*a);let h,f,m,v;if(p>0)if(h=a*c-o,f=a*o-c,v=s*p,h>=0)if(f>=-v)if(f<=v){const S=1/p;h*=S,f*=S,m=h*(h+a*f+2*o)+f*(a*h+f+2*c)+l}else f=s,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*c)+l;else f=-s,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*c)+l;else f<=-v?(h=Math.max(0,-(-a*s+o)),f=h>0?-s:Math.min(Math.max(-s,-c),s),m=-h*h+f*(f+2*c)+l):f<=v?(h=0,f=Math.min(Math.max(-s,-c),s),m=f*(f+2*c)+l):(h=Math.max(0,-(a*s+o)),f=h>0?s:Math.min(Math.max(-s,-c),s),m=-h*h+f*(f+2*c)+l);else f=a>0?-s:s,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Co).addScaledVector(Fs,f),m}intersectSphere(e,t){if(e.radius<0)return null;kn.subVectors(e.center,this.origin);const i=kn.dot(this.direction),r=kn.dot(kn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,c;const l=1/this.direction.x,p=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(i=(e.min.x-f.x)*l,r=(e.max.x-f.x)*l):(i=(e.max.x-f.x)*l,r=(e.min.x-f.x)*l),p>=0?(s=(e.min.y-f.y)*p,a=(e.max.y-f.y)*p):(s=(e.max.y-f.y)*p,a=(e.min.y-f.y)*p),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-f.z)*h,c=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,c=(e.min.z-f.z)*h),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,kn)!==null}intersectTriangle(e,t,i,r,s){const a=this.origin,o=this.direction,c=o.x,l=o.y,p=o.z,h=e.x-a.x,f=e.y-a.y,m=e.z-a.z,v=t.x-a.x,S=t.y-a.y,d=t.z-a.z,u=i.x-a.x,_=i.y-a.y,T=i.z-a.z,M=Math.abs(c),b=Math.abs(l),w=Math.abs(p);let D,x,C,N,O,V,E,A,L,U,F,W;if(M>=b&&M>=w?(C=c,V=h,L=v,W=u,c>=0?(D=l,x=p,N=f,O=m,E=S,A=d,U=_,F=T):(D=p,x=l,N=m,O=f,E=d,A=S,U=T,F=_)):b>=w?(C=l,V=f,L=S,W=_,l>=0?(D=p,x=c,N=m,O=h,E=d,A=v,U=T,F=u):(D=c,x=p,N=h,O=m,E=v,A=d,U=u,F=T)):(C=p,V=m,L=d,W=T,p>=0?(D=c,x=l,N=h,O=f,E=v,A=S,U=u,F=_):(D=l,x=c,N=f,O=h,E=S,A=v,U=_,F=u)),C===0)return null;const P=D/C,I=x/C,X=1/C,se=N-P*V,oe=O-I*V,Me=E-P*L,Ne=A-I*L,Oe=U-P*W,Q=F-I*W,ee=Oe*Ne-Q*Me,_e=se*Q-oe*Oe,De=Me*oe-Ne*se;if(r){if(ee<0||_e<0||De<0)return null}else if((ee<0||_e<0||De<0)&&(ee>0||_e>0||De>0))return null;const H=ee+_e+De;if(H===0)return null;const ie=X*(ee*V+_e*L+De*W);return(H>0?ie<0:ie>0)?null:this.at(ie/H,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _h extends wr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yi,this.combine=Kd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const $u=new xt,Ai=new gh,Bs=new Fa,Zu=new $,ks=new $,zs=new $,Hs=new $,Po=new $,Gs=new $,Ju=new $,Vs=new $;class Mt extends Ct{constructor(e=new Zt,t=new _h){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Gs.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const p=o[c],h=s[c];p!==0&&(Po.fromBufferAttribute(h,e),a?Gs.addScaledVector(Po,p):Gs.addScaledVector(Po.sub(t),p))}t.add(Gs)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Bs.copy(i.boundingSphere),Bs.applyMatrix4(s),Ai.copy(e.ray).recast(e.near),!(Bs.containsPoint(Ai.origin)===!1&&(Ai.intersectSphere(Bs,Zu)===null||Ai.origin.distanceToSquared(Zu)>(e.far-e.near)**2))&&($u.copy(s).invert(),Ai.copy(e.ray).applyMatrix4($u),!(i.boundingBox!==null&&Ai.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ai)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,p=s.attributes.uv1,h=s.attributes.normal,f=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,S=f.length;v<S;v++){const d=f[v],u=a[d.materialIndex],_=Math.max(d.start,m.start),T=Math.min(o.count,Math.min(d.start+d.count,m.start+m.count));for(let M=_,b=T;M<b;M+=3){const w=o.getX(M),D=o.getX(M+1),x=o.getX(M+2);r=Ws(this,u,e,i,l,p,h,w,D,x),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=d.materialIndex,t.push(r))}}else{const v=Math.max(0,m.start),S=Math.min(o.count,m.start+m.count);for(let d=v,u=S;d<u;d+=3){const _=o.getX(d),T=o.getX(d+1),M=o.getX(d+2);r=Ws(this,a,e,i,l,p,h,_,T,M),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let v=0,S=f.length;v<S;v++){const d=f[v],u=a[d.materialIndex],_=Math.max(d.start,m.start),T=Math.min(c.count,Math.min(d.start+d.count,m.start+m.count));for(let M=_,b=T;M<b;M+=3){const w=M,D=M+1,x=M+2;r=Ws(this,u,e,i,l,p,h,w,D,x),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=d.materialIndex,t.push(r))}}else{const v=Math.max(0,m.start),S=Math.min(c.count,m.start+m.count);for(let d=v,u=S;d<u;d+=3){const _=d,T=d+1,M=d+2;r=Ws(this,a,e,i,l,p,h,_,T,M),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}}function K0(n,e,t,i,r,s,a,o){let c;if(e.side===Kt?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,e.side===Oi,o),c===null)return null;Vs.copy(o),Vs.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Vs);return l<t.near||l>t.far?null:{distance:l,point:Vs.clone(),object:n}}function Ws(n,e,t,i,r,s,a,o,c,l){n.getVertexPosition(o,ks),n.getVertexPosition(c,zs),n.getVertexPosition(l,Hs);const p=K0(n,e,t,i,ks,zs,Hs,Ju);if(p){const h=new $;pn.getBarycoord(Ju,ks,zs,Hs,h),r&&(p.uv=pn.getInterpolatedAttribute(r,o,c,l,h,new et)),s&&(p.uv1=pn.getInterpolatedAttribute(s,o,c,l,h,new et)),a&&(p.normal=pn.getInterpolatedAttribute(a,o,c,l,h,new $),p.normal.dot(i.direction)>0&&p.normal.multiplyScalar(-1));const f={a:o,b:c,c:l,normal:new $,materialIndex:0};pn.getNormal(ks,zs,Hs,f.normal),p.face=f,p.barycoord=h}return p}class $0 extends kt{constructor(e=null,t=1,i=1,r,s,a,o,c,l=Dt,p=Dt,h,f){super(null,a,o,c,l,p,r,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ri=new Fa,Z0=new et(.5,.5),Xs=new $;class ml{constructor(e=new pi,t=new pi,i=new pi,r=new pi,s=new pi,a=new pi){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=wn,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],p=s[4],h=s[5],f=s[6],m=s[7],v=s[8],S=s[9],d=s[10],u=s[11],_=s[12],T=s[13],M=s[14],b=s[15];if(r[0].setComponents(l-a,m-p,u-v,b-_).normalize(),r[1].setComponents(l+a,m+p,u+v,b+_).normalize(),r[2].setComponents(l+o,m+h,u+S,b+T).normalize(),r[3].setComponents(l-o,m-h,u-S,b-T).normalize(),i)r[4].setComponents(c,f,d,M).normalize(),r[5].setComponents(l-c,m-f,u-d,b-M).normalize();else if(r[4].setComponents(l-c,m-f,u-d,b-M).normalize(),t===wn)r[5].setComponents(l+c,m+f,u+d,b+M).normalize();else if(t===us)r[5].setComponents(c,f,d,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ri.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ri.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ri)}intersectsSprite(e){Ri.center.set(0,0,0);const t=Z0.distanceTo(e.center);return Ri.radius=.7071067811865476+t,Ri.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ri)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Xs.x=r.normal.x>0?e.max.x:e.min.x,Xs.y=r.normal.y>0?e.max.y:e.min.y,Xs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Xs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class vh extends wr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new je(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Qu=new xt,kc=new gh,qs=new Fa,Ys=new $;class J0 extends Ct{constructor(e=new Zt,t=new vh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),qs.copy(i.boundingSphere),qs.applyMatrix4(r),qs.radius+=s,e.ray.intersectsSphere(qs)===!1)return;Qu.copy(r).invert(),kc.copy(e.ray).applyMatrix4(Qu);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=i.index,h=i.attributes.position;if(l!==null){const f=Math.max(0,a.start),m=Math.min(l.count,a.start+a.count);for(let v=f,S=m;v<S;v++){const d=l.getX(v);Ys.fromBufferAttribute(h,d),ju(Ys,d,c,r,e,t,this)}}else{const f=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let v=f,S=m;v<S;v++)Ys.fromBufferAttribute(h,v),ju(Ys,v,c,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function ju(n,e,t,i,r,s,a){const o=kc.distanceSqToPoint(n);if(o<t){const c=new $;kc.closestPointToPoint(n,c),c.applyMatrix4(i);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class xh extends kt{constructor(e=[],t=Bi,i,r,s,a,o,c,l,p){super(e,t,i,r,s,a,o,c,l,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Q0 extends kt{constructor(e,t,i,r,s,a,o,c,l){super(e,t,i,r,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class fs extends kt{constructor(e,t,i=Cn,r,s,a,o=Dt,c=Dt,l,p=Zn,h=1){if(p!==Zn&&p!==Di)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:h};super(f,r,s,a,o,c,p,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new hl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class j0 extends fs{constructor(e,t=Cn,i=Bi,r,s,a=Dt,o=Dt,c,l=Zn){const p={width:e,height:e,depth:1},h=[p,p,p,p,p,p];super(e,e,t,i,r,s,a,o,c,l),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Sh extends kt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ar extends Zt{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],p=[],h=[];let f=0,m=0;v("z","y","x",-1,-1,i,t,e,a,s,0),v("z","y","x",1,-1,i,t,-e,a,s,1),v("x","z","y",1,1,e,i,t,r,a,2),v("x","z","y",1,-1,e,i,-t,r,a,3),v("x","y","z",1,-1,e,t,i,r,s,4),v("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Pt(l,3)),this.setAttribute("normal",new Pt(p,3)),this.setAttribute("uv",new Pt(h,2));function v(S,d,u,_,T,M,b,w,D,x,C){const N=M/D,O=b/x,V=M/2,E=b/2,A=w/2,L=D+1,U=x+1;let F=0,W=0;const P=new $;for(let I=0;I<U;I++){const X=I*O-E;for(let se=0;se<L;se++){const oe=se*N-V;P[S]=oe*_,P[d]=X*T,P[u]=A,l.push(P.x,P.y,P.z),P[S]=0,P[d]=0,P[u]=w>0?1:-1,p.push(P.x,P.y,P.z),h.push(se/D),h.push(1-I/x),F+=1}}for(let I=0;I<x;I++)for(let X=0;X<D;X++){const se=f+X+L*I,oe=f+X+L*(I+1),Me=f+(X+1)+L*(I+1),Ne=f+(X+1)+L*I;c.push(se,oe,Ne),c.push(oe,Me,Ne),W+=6}o.addGroup(m,W,C),m+=W,f+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ar(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class gl extends Zt{constructor(e=1,t=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);const s=[],a=[],o=[],c=[],l=new $,p=new et;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let h=0,f=3;h<=t;h++,f+=3){const m=i+h/t*r;l.x=e*Math.cos(m),l.y=e*Math.sin(m),a.push(l.x,l.y,l.z),o.push(0,0,1),p.x=(a[f]/e+1)/2,p.y=(a[f+1]/e+1)/2,c.push(p.x,p.y)}for(let h=1;h<=t;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new Pt(a,3)),this.setAttribute("normal",new Pt(o,3)),this.setAttribute("uv",new Pt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gl(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Oa extends Zt{constructor(e=1,t=1,i=1,r=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const p=[],h=[],f=[],m=[];let v=0;const S=[],d=i/2;let u=0;_(),a===!1&&(e>0&&T(!0),t>0&&T(!1)),this.setIndex(p),this.setAttribute("position",new Pt(h,3)),this.setAttribute("normal",new Pt(f,3)),this.setAttribute("uv",new Pt(m,2));function _(){const M=new $,b=new $;let w=0;const D=(t-e)/i;for(let x=0;x<=s;x++){const C=[],N=x/s,O=N*(t-e)+e;for(let V=0;V<=r;V++){const E=V/r,A=E*c+o,L=Math.sin(A),U=Math.cos(A);b.x=O*L,b.y=-N*i+d,b.z=O*U,h.push(b.x,b.y,b.z),M.set(L,D,U).normalize(),f.push(M.x,M.y,M.z),m.push(E,1-N),C.push(v++)}S.push(C)}for(let x=0;x<r;x++)for(let C=0;C<s;C++){const N=S[C][x],O=S[C+1][x],V=S[C+1][x+1],E=S[C][x+1];(e>0||C!==0)&&(p.push(N,O,E),w+=3),(t>0||C!==s-1)&&(p.push(O,V,E),w+=3)}l.addGroup(u,w,0),u+=w}function T(M){const b=v,w=new et,D=new $;let x=0;const C=M===!0?e:t,N=M===!0?1:-1;for(let V=1;V<=r;V++)h.push(0,d*N,0),f.push(0,N,0),m.push(.5,.5),v++;const O=v;for(let V=0;V<=r;V++){const A=V/r*c+o,L=Math.cos(A),U=Math.sin(A);D.x=C*U,D.y=d*N,D.z=C*L,h.push(D.x,D.y,D.z),f.push(0,N,0),w.x=L*.5+.5,w.y=U*.5*N+.5,m.push(w.x,w.y),v++}for(let V=0;V<r;V++){const E=b+V,A=O+V;M===!0?p.push(A,A+1,E):p.push(A+1,A,E),x+=3}l.addGroup(u,x,M===!0?1:2),u+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oa(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class _l extends Oa{constructor(e=1,t=1,i=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,i,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new _l(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ba extends Zt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),c=Math.floor(r),l=o+1,p=c+1,h=e/o,f=t/c,m=[],v=[],S=[],d=[];for(let u=0;u<p;u++){const _=u*f-a;for(let T=0;T<l;T++){const M=T*h-s;v.push(M,-_,0),S.push(0,0,1),d.push(T/o),d.push(1-u/c)}}for(let u=0;u<c;u++)for(let _=0;_<o;_++){const T=_+l*u,M=_+l*(u+1),b=_+1+l*(u+1),w=_+1+l*u;m.push(T,M,w),m.push(M,b,w)}this.setIndex(m),this.setAttribute("position",new Pt(v,3)),this.setAttribute("normal",new Pt(S,3)),this.setAttribute("uv",new Pt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ba(e.width,e.height,e.widthSegments,e.heightSegments)}}class _s extends Zt{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(a+o,Math.PI);let l=0;const p=[],h=new $,f=new $,m=[],v=[],S=[],d=[];for(let u=0;u<=i;u++){const _=[],T=u/i,M=a+T*o,b=e*Math.cos(M),w=Math.sqrt(e*e-b*b);let D=0;u===0&&a===0?D=.5/t:u===i&&c===Math.PI&&(D=-.5/t);for(let x=0;x<=t;x++){const C=x/t,N=r+C*s;h.x=-w*Math.cos(N),h.y=b,h.z=w*Math.sin(N),v.push(h.x,h.y,h.z),f.copy(h).normalize(),S.push(f.x,f.y,f.z),d.push(C+D,1-T),_.push(l++)}p.push(_)}for(let u=0;u<i;u++)for(let _=0;_<t;_++){const T=p[u][_+1],M=p[u][_],b=p[u+1][_],w=p[u+1][_+1];(u!==0||a>0)&&m.push(T,M,w),(u!==i-1||c<Math.PI)&&m.push(M,b,w)}this.setIndex(m),this.setAttribute("position",new Pt(v,3)),this.setAttribute("normal",new Pt(S,3)),this.setAttribute("uv",new Pt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function xr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];if(ef(r))r.isRenderTargetTexture?(Ge("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone();else if(Array.isArray(r))if(ef(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[t][i]=s}else e[t][i]=r.slice();else e[t][i]=r}}return e}function Gt(n){const e={};for(let t=0;t<n.length;t++){const i=xr(n[t]);for(const r in i)e[r]=i[r]}return e}function ef(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function e_(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Mh(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}const t_={clone:xr,merge:Gt};var n_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,i_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ln extends wr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=n_,this.fragmentShader=i_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xr(e.uniforms),this.uniformsGroups=e_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=t[r.value]||null;break;case"c":this.uniforms[i].value=new je().setHex(r.value);break;case"v2":this.uniforms[i].value=new et().fromArray(r.value);break;case"v3":this.uniforms[i].value=new $().fromArray(r.value);break;case"v4":this.uniforms[i].value=new vt().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Ve().fromArray(r.value);break;case"m4":this.uniforms[i].value=new xt().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class r_ extends Ln{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class xi extends wr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Oc,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class s_ extends wr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=h0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class a_ extends wr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class yh extends Ct{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new je(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class o_ extends yh{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.groundColor=new je(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Lo=new xt,tf=new $,nf=new $;class c_{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new et(512,512),this.mapType=en,this.map=null,this.mapPass=null,this.matrix=new xt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ml,this._frameExtents=new et(1,1),this._viewportCount=1,this._viewports=[new vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;tf.setFromMatrixPosition(e.matrixWorld),t.position.copy(tf),nf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(nf),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,r){Lo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Lo,e.coordinateSystem,e.reversedDepth);const s=this._frameExtents,a=r?r.z/s.x:1,o=r?r.w/s.y:1,c=r?r.x/s.x:0,l=r?r.y/s.y:0;e.coordinateSystem===us||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(Lo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Ks=new $,$s=new Tr,Mn=new $;class Eh extends Ct{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xt,this.projectionMatrix=new xt,this.projectionMatrixInverse=new xt,this.coordinateSystem=wn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ks,$s,Mn),Mn.x===1&&Mn.y===1&&Mn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ks,$s,Mn.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Ks,$s,Mn),Mn.x===1&&Mn.y===1&&Mn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ks,$s,Mn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const li=new $,rf=new et,sf=new et;class on extends Eh{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Bc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(co*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Bc*2*Math.atan(Math.tan(co*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){li.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(li.x,li.y).multiplyScalar(-e/li.z),li.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(li.x,li.y).multiplyScalar(-e/li.z)}getViewSize(e,t){return this.getViewBounds(e,rf,sf),t.subVectors(sf,rf)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(co*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*i/l,r*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class vl extends Eh{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=p*this.view.offsetY,c=o-p*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class l_ extends c_{constructor(){super(new vl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class u_ extends yh{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.target=new Ct,this.shadow=new l_}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const ir=-90,rr=1;class f_ extends Ct{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new on(ir,rr,e,t);r.layers=this.layers,this.add(r);const s=new on(ir,rr,e,t);s.layers=this.layers,this.add(s);const a=new on(ir,rr,e,t);a.layers=this.layers,this.add(a);const o=new on(ir,rr,e,t);o.layers=this.layers,this.add(o);const c=new on(ir,rr,e,t);c.layers=this.layers,this.add(c);const l=new on(ir,rr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===wn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===us)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,p]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let d=!1;e.isWebGLRenderer===!0?d=e.state.buffers.depth.getReversed():d=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),d&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),d&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,r),d&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,r),d&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,4,r),d&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.generateMipmaps=S,e.setRenderTarget(i,5,r),d&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),e.setRenderTarget(h,f,m),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class d_ extends on{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Ol=class Ol{constructor(e,t,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,r){const s=this.elements;return s[0]=e,s[2]=t,s[1]=i,s[3]=r,this}};Ol.prototype.isMatrix2=!0;let af=Ol;function of(n,e,t,i){const r=h_(i);switch(t){case oh:return n*e;case lh:return n*e/r.components*r.byteLength;case cl:return n*e/r.components*r.byteLength;case ki:return n*e*2/r.components*r.byteLength;case ll:return n*e*2/r.components*r.byteLength;case ch:return n*e*3/r.components*r.byteLength;case mn:return n*e*4/r.components*r.byteLength;case ul:return n*e*4/r.components*r.byteLength;case sa:case aa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case oa:case ca:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case cc:case uc:return Math.max(n,16)*Math.max(e,8)/4;case oc:case lc:return Math.max(n,8)*Math.max(e,8)/2;case fc:case dc:case pc:case mc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case hc:case va:case gc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case _c:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case vc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case xc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Sc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Mc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case yc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Ec:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case bc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Tc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case wc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Ac:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Rc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Cc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Pc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Lc:case Dc:case Ic:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Uc:case Nc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case xa:case Fc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function h_(n){switch(n){case en:case ih:return{byteLength:1,components:1};case cs:case rh:case Pn:return{byteLength:2,components:1};case al:case ol:return{byteLength:2,components:4};case Cn:case sl:case Tn:return{byteLength:4,components:1};case sh:case ah:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:rl}}));typeof window<"u"&&(window.__THREE__?Ge("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=rl);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function bh(){let n=null,e=!1,t=null,i=null;function r(s,a){i=n.requestAnimationFrame(r),t(s,a)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function p_(n){const e=new WeakMap;function t(o,c){const l=o.array,p=o.usage,h=l.byteLength,f=n.createBuffer();n.bindBuffer(c,f),n.bufferData(c,l,p),o.onUploadCallback();let m;if(l instanceof Float32Array)m=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)m=n.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=n.SHORT;else if(l instanceof Uint32Array)m=n.UNSIGNED_INT;else if(l instanceof Int32Array)m=n.INT;else if(l instanceof Int8Array)m=n.BYTE;else if(l instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,c,l){const p=c.array,h=c.updateRanges;if(n.bindBuffer(l,o),h.length===0)n.bufferSubData(l,0,p);else{h.sort((m,v)=>m.start-v.start);let f=0;for(let m=1;m<h.length;m++){const v=h[f],S=h[m];S.start<=v.start+v.count+1?v.count=Math.max(v.count,S.start+S.count-v.start):(++f,h[f]=S)}h.length=f+1;for(let m=0,v=h.length;m<v;m++){const S=h[m];n.bufferSubData(l,S.start*p.BYTES_PER_ELEMENT,p,S.start,S.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(n.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const p=e.get(o);(!p||p.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var m_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,g_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,__=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,v_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,x_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,S_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,M_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,y_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,E_=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,b_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,T_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,w_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,A_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,R_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,C_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,P_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,L_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,D_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,I_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,U_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,N_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,F_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,O_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,B_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,k_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,z_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,H_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,G_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,V_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,W_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,X_="gl_FragColor = linearToOutputTexel( gl_FragColor );",q_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Y_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,K_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,$_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Z_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,J_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Q_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,j_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ev=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,nv=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,iv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sv=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,av=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,ov=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,cv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,uv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fv=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,dv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,hv=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,pv=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,mv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,gv=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_v=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,vv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,yv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ev=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,bv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Tv=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Av=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Rv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Cv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Pv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lv=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Dv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Iv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Uv=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Nv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ov=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Bv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,kv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Hv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Gv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Vv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Wv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Xv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Yv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Kv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$v=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Zv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Jv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Qv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,jv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ex=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,tx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,nx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ix=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,sx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ax=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ox=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,lx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ux=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,fx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,dx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,hx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,px=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const mx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_x=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,yx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Ex=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,bx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Tx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ax=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Rx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Cx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Px=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Dx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ix=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ux=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Fx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ox=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,zx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Gx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Wx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Xx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Yx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Kx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ye={alphahash_fragment:m_,alphahash_pars_fragment:g_,alphamap_fragment:__,alphamap_pars_fragment:v_,alphatest_fragment:x_,alphatest_pars_fragment:S_,aomap_fragment:M_,aomap_pars_fragment:y_,batching_pars_vertex:E_,batching_vertex:b_,begin_vertex:T_,beginnormal_vertex:w_,bsdfs:A_,iridescence_fragment:R_,bumpmap_pars_fragment:C_,clipping_planes_fragment:P_,clipping_planes_pars_fragment:L_,clipping_planes_pars_vertex:D_,clipping_planes_vertex:I_,color_fragment:U_,color_pars_fragment:N_,color_pars_vertex:F_,color_vertex:O_,common:B_,cube_uv_reflection_fragment:k_,defaultnormal_vertex:z_,displacementmap_pars_vertex:H_,displacementmap_vertex:G_,emissivemap_fragment:V_,emissivemap_pars_fragment:W_,colorspace_fragment:X_,colorspace_pars_fragment:q_,envmap_fragment:Y_,envmap_common_pars_fragment:K_,envmap_pars_fragment:$_,envmap_pars_vertex:Z_,envmap_physical_pars_fragment:ov,envmap_vertex:J_,fog_vertex:Q_,fog_pars_vertex:j_,fog_fragment:ev,fog_pars_fragment:tv,gradientmap_pars_fragment:nv,lightmap_pars_fragment:iv,lights_lambert_fragment:rv,lights_lambert_pars_fragment:sv,lights_pars_begin:av,lights_toon_fragment:cv,lights_toon_pars_fragment:lv,lights_phong_fragment:uv,lights_phong_pars_fragment:fv,lights_physical_fragment:dv,lights_physical_pars_fragment:hv,lights_fragment_begin:pv,lights_fragment_maps:mv,lights_fragment_end:gv,lightprobes_pars_fragment:_v,logdepthbuf_fragment:vv,logdepthbuf_pars_fragment:xv,logdepthbuf_pars_vertex:Sv,logdepthbuf_vertex:Mv,map_fragment:yv,map_pars_fragment:Ev,map_particle_fragment:bv,map_particle_pars_fragment:Tv,metalnessmap_fragment:wv,metalnessmap_pars_fragment:Av,morphinstance_vertex:Rv,morphcolor_vertex:Cv,morphnormal_vertex:Pv,morphtarget_pars_vertex:Lv,morphtarget_vertex:Dv,normal_fragment_begin:Iv,normal_fragment_maps:Uv,normal_pars_fragment:Nv,normal_pars_vertex:Fv,normal_vertex:Ov,normalmap_pars_fragment:Bv,clearcoat_normal_fragment_begin:kv,clearcoat_normal_fragment_maps:zv,clearcoat_pars_fragment:Hv,iridescence_pars_fragment:Gv,opaque_fragment:Vv,packing:Wv,premultiplied_alpha_fragment:Xv,project_vertex:qv,dithering_fragment:Yv,dithering_pars_fragment:Kv,roughnessmap_fragment:$v,roughnessmap_pars_fragment:Zv,shadowmap_pars_fragment:Jv,shadowmap_pars_vertex:Qv,shadowmap_vertex:jv,shadowmask_pars_fragment:ex,skinbase_vertex:tx,skinning_pars_vertex:nx,skinning_vertex:ix,skinnormal_vertex:rx,specularmap_fragment:sx,specularmap_pars_fragment:ax,tonemapping_fragment:ox,tonemapping_pars_fragment:cx,transmission_fragment:lx,transmission_pars_fragment:ux,uv_pars_fragment:fx,uv_pars_vertex:dx,uv_vertex:hx,worldpos_vertex:px,background_vert:mx,background_frag:gx,backgroundCube_vert:_x,backgroundCube_frag:vx,cube_vert:xx,cube_frag:Sx,depth_vert:Mx,depth_frag:yx,distance_vert:Ex,distance_frag:bx,equirect_vert:Tx,equirect_frag:wx,linedashed_vert:Ax,linedashed_frag:Rx,meshbasic_vert:Cx,meshbasic_frag:Px,meshlambert_vert:Lx,meshlambert_frag:Dx,meshmatcap_vert:Ix,meshmatcap_frag:Ux,meshnormal_vert:Nx,meshnormal_frag:Fx,meshphong_vert:Ox,meshphong_frag:Bx,meshphysical_vert:kx,meshphysical_frag:zx,meshtoon_vert:Hx,meshtoon_frag:Gx,points_vert:Vx,points_frag:Wx,shadow_vert:Xx,shadow_frag:qx,sprite_vert:Yx,sprite_frag:Kx},ge={common:{diffuse:{value:new je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new $},probesMax:{value:new $},probesResolution:{value:new $}},points:{diffuse:{value:new je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new je(16777215)},opacity:{value:1},center:{value:new et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},bn={basic:{uniforms:Gt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:Gt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new je(0)},envMapIntensity:{value:1}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:Gt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new je(0)},specular:{value:new je(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:Gt([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:Gt([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new je(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:Gt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:Gt([ge.points,ge.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:Gt([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:Gt([ge.common,ge.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:Gt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:Gt([ge.sprite,ge.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distance:{uniforms:Gt([ge.common,ge.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distance_vert,fragmentShader:Ye.distance_frag},shadow:{uniforms:Gt([ge.lights,ge.fog,{color:{value:new je(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};bn.physical={uniforms:Gt([bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new je(0)},specularColor:{value:new je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};const Zs={r:0,b:0,g:0},$x=new xt,Th=new Ve;Th.set(-1,0,0,0,1,0,0,0,1);function Zx(n,e,t,i,r,s){const a=new je(0);let o=r===!0?0:1,c,l,p=null,h=0,f=null;function m(_){let T=_.isScene===!0?_.background:null;if(T&&T.isTexture){const M=_.backgroundBlurriness>0;T=e.get(T,M)}return T}function v(_){let T=!1;const M=m(_);M===null?d(a,o):M&&M.isColor&&(d(M,1),T=!0);const b=n.xr.getEnvironmentBlendMode();b==="additive"?t.buffers.color.setClear(0,0,0,1,s):b==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||T)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function S(_,T){const M=m(T);M&&(M.isCubeTexture||M.mapping===Na)?(l===void 0&&(l=new Mt(new Ar(1,1,1),new Ln({name:"BackgroundCubeMaterial",uniforms:xr(bn.backgroundCube.uniforms),vertexShader:bn.backgroundCube.vertexShader,fragmentShader:bn.backgroundCube.fragmentShader,side:Kt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(b,w,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=M,l.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4($x.makeRotationFromEuler(T.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Th),l.material.toneMapped=tt.getTransfer(M.colorSpace)!==ut,(p!==M||h!==M.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,p=M,h=M.version,f=n.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Mt(new Ba(2,2),new Ln({name:"BackgroundMaterial",uniforms:xr(bn.background.uniforms),vertexShader:bn.background.vertexShader,fragmentShader:bn.background.fragmentShader,side:Oi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=tt.getTransfer(M.colorSpace)!==ut,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(p!==M||h!==M.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,p=M,h=M.version,f=n.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function d(_,T){_.getRGB(Zs,Mh(n)),t.buffers.color.setClear(Zs.r,Zs.g,Zs.b,T,s)}function u(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,T=1){a.set(_),o=T,d(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(_){o=_,d(a,o)},render:v,addToRenderList:S,dispose:u}}function Jx(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,a=!1;function o(O,V,E,A,L){let U=!1;const F=h(O,A,E,V);s!==F&&(s=F,l(s.object)),U=m(O,A,E,L),U&&v(O,A,E,L),L!==null&&e.update(L,n.ELEMENT_ARRAY_BUFFER),(U||a)&&(a=!1,M(O,V,E,A),L!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(L).buffer))}function c(){return n.createVertexArray()}function l(O){return n.bindVertexArray(O)}function p(O){return n.deleteVertexArray(O)}function h(O,V,E,A){const L=A.wireframe===!0;let U=i[V.id];U===void 0&&(U={},i[V.id]=U);const F=O.isInstancedMesh===!0?O.id:0;let W=U[F];W===void 0&&(W={},U[F]=W);let P=W[E.id];P===void 0&&(P={},W[E.id]=P);let I=P[L];return I===void 0&&(I=f(c()),P[L]=I),I}function f(O){const V=[],E=[],A=[];for(let L=0;L<t;L++)V[L]=0,E[L]=0,A[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:E,attributeDivisors:A,object:O,attributes:{},index:null}}function m(O,V,E,A){const L=s.attributes,U=V.attributes;let F=0;const W=E.getAttributes();for(const P in W)if(W[P].location>=0){const X=L[P];let se=U[P];if(se===void 0&&(P==="instanceMatrix"&&O.instanceMatrix&&(se=O.instanceMatrix),P==="instanceColor"&&O.instanceColor&&(se=O.instanceColor)),X===void 0||X.attribute!==se||se&&X.data!==se.data)return!0;F++}return s.attributesNum!==F||s.index!==A}function v(O,V,E,A){const L={},U=V.attributes;let F=0;const W=E.getAttributes();for(const P in W)if(W[P].location>=0){let X=U[P];X===void 0&&(P==="instanceMatrix"&&O.instanceMatrix&&(X=O.instanceMatrix),P==="instanceColor"&&O.instanceColor&&(X=O.instanceColor));const se={};se.attribute=X,X&&X.data&&(se.data=X.data),L[P]=se,F++}s.attributes=L,s.attributesNum=F,s.index=A}function S(){const O=s.newAttributes;for(let V=0,E=O.length;V<E;V++)O[V]=0}function d(O){u(O,0)}function u(O,V){const E=s.newAttributes,A=s.enabledAttributes,L=s.attributeDivisors;E[O]=1,A[O]===0&&(n.enableVertexAttribArray(O),A[O]=1),L[O]!==V&&(n.vertexAttribDivisor(O,V),L[O]=V)}function _(){const O=s.newAttributes,V=s.enabledAttributes;for(let E=0,A=V.length;E<A;E++)V[E]!==O[E]&&(n.disableVertexAttribArray(E),V[E]=0)}function T(O,V,E,A,L,U,F){F===!0?n.vertexAttribIPointer(O,V,E,L,U):n.vertexAttribPointer(O,V,E,A,L,U)}function M(O,V,E,A){S();const L=A.attributes,U=E.getAttributes(),F=V.defaultAttributeValues;for(const W in U){const P=U[W];if(P.location>=0){let I=L[W];if(I===void 0&&(W==="instanceMatrix"&&O.instanceMatrix&&(I=O.instanceMatrix),W==="instanceColor"&&O.instanceColor&&(I=O.instanceColor)),I!==void 0){const X=I.normalized,se=I.itemSize,oe=e.get(I);if(oe===void 0)continue;const Me=oe.buffer,Ne=oe.type,Oe=oe.bytesPerElement,Q=Ne===n.INT||Ne===n.UNSIGNED_INT||I.gpuType===sl;if(I.isInterleavedBufferAttribute){const ee=I.data,_e=ee.stride,De=I.offset;if(ee.isInstancedInterleavedBuffer){for(let H=0;H<P.locationSize;H++)u(P.location+H,ee.meshPerAttribute);O.isInstancedMesh!==!0&&A._maxInstanceCount===void 0&&(A._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let H=0;H<P.locationSize;H++)d(P.location+H);n.bindBuffer(n.ARRAY_BUFFER,Me);for(let H=0;H<P.locationSize;H++)T(P.location+H,se/P.locationSize,Ne,X,_e*Oe,(De+se/P.locationSize*H)*Oe,Q)}else{if(I.isInstancedBufferAttribute){for(let ee=0;ee<P.locationSize;ee++)u(P.location+ee,I.meshPerAttribute);O.isInstancedMesh!==!0&&A._maxInstanceCount===void 0&&(A._maxInstanceCount=I.meshPerAttribute*I.count)}else for(let ee=0;ee<P.locationSize;ee++)d(P.location+ee);n.bindBuffer(n.ARRAY_BUFFER,Me);for(let ee=0;ee<P.locationSize;ee++)T(P.location+ee,se/P.locationSize,Ne,X,se*Oe,se/P.locationSize*ee*Oe,Q)}}else if(F!==void 0){const X=F[W];if(X!==void 0)switch(X.length){case 2:n.vertexAttrib2fv(P.location,X);break;case 3:n.vertexAttrib3fv(P.location,X);break;case 4:n.vertexAttrib4fv(P.location,X);break;default:n.vertexAttrib1fv(P.location,X)}}}}_()}function b(){C();for(const O in i){const V=i[O];for(const E in V){const A=V[E];for(const L in A){const U=A[L];for(const F in U)p(U[F].object),delete U[F];delete A[L]}}delete i[O]}}function w(O){if(i[O.id]===void 0)return;const V=i[O.id];for(const E in V){const A=V[E];for(const L in A){const U=A[L];for(const F in U)p(U[F].object),delete U[F];delete A[L]}}delete i[O.id]}function D(O){for(const V in i){const E=i[V];for(const A in E){const L=E[A];if(L[O.id]===void 0)continue;const U=L[O.id];for(const F in U)p(U[F].object),delete U[F];delete L[O.id]}}}function x(O){for(const V in i){const E=i[V],A=O.isInstancedMesh===!0?O.id:0,L=E[A];if(L!==void 0){for(const U in L){const F=L[U];for(const W in F)p(F[W].object),delete F[W];delete L[U]}delete E[A],Object.keys(E).length===0&&delete i[V]}}}function C(){N(),a=!0,s!==r&&(s=r,l(s.object))}function N(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:C,resetDefaultState:N,dispose:b,releaseStatesOfGeometry:w,releaseStatesOfObject:x,releaseStatesOfProgram:D,initAttributes:S,enableAttribute:d,disableUnusedAttributes:_}}function Qx(n,e,t){let i;function r(c){i=c}function s(c,l){n.drawArrays(i,c,l),t.update(l,i,1)}function a(c,l,p){p!==0&&(n.drawArraysInstanced(i,c,l,p),t.update(l,i,p))}function o(c,l,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,p);let f=0;for(let m=0;m<p;m++)f+=l[m];t.update(f,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function jx(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(D){return!(D!==mn&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(D){const x=D===Pn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==en&&D!==Tn&&!x&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function c(D){if(D==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const p=c(l);p!==l&&(Ge("WebGLRenderer:",l,"not supported, using",p,"instead."),l=p);const h=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&f===!1&&Ge("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=n.getParameter(n.MAX_TEXTURE_SIZE),d=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),u=n.getParameter(n.MAX_VERTEX_ATTRIBS),_=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),T=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),b=n.getParameter(n.MAX_SAMPLES),w=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:m,maxVertexTextures:v,maxTextureSize:S,maxCubemapSize:d,maxAttributes:u,maxVertexUniforms:_,maxVaryings:T,maxFragmentUniforms:M,maxSamples:b,samples:w}}function eS(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new pi,o=new Ve,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const m=h.length!==0||f||i!==0||r;return r=f,i=h.length,m},this.beginShadows=function(){s=!0,p(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=p(h,f,0)},this.setState=function(h,f,m){const v=h.clippingPlanes,S=h.clipIntersection,d=h.clipShadows,u=n.get(h);if(!r||v===null||v.length===0||s&&!d)s?p(null):l();else{const _=s?0:i,T=_*4;let M=u.clippingState||null;c.value=M,M=p(v,f,T,m);for(let b=0;b!==T;++b)M[b]=t[b];u.clippingState=M,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=_}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function p(h,f,m,v){const S=h!==null?h.length:0;let d=null;if(S!==0){if(d=c.value,v!==!0||d===null){const u=m+S*4,_=f.matrixWorldInverse;o.getNormalMatrix(_),(d===null||d.length<u)&&(d=new Float32Array(u));for(let T=0,M=m;T!==S;++T,M+=4)a.copy(h[T]).applyMatrix4(_,o),a.normal.toArray(d,M),d[M+3]=a.constant}c.value=d,c.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,d}}const lr=4,tS=6,nS=20,iS=256,kr=new vl,cf=new je;let Do=null,Io=0,Uo=0,No=!1;const rS=new $,Ci=new $;class lf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:a=256,position:o=rS}=s;Do=this._renderer.getRenderTarget(),Io=this._renderer.getActiveCubeFace(),Uo=this._renderer.getActiveMipmapLevel(),No=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=df(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ff(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Do,Io,Uo),this._renderer.xr.enabled=No,e.scissorTest=!1,sr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Bi||e.mapping===vr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Do=this._renderer.getRenderTarget(),Io=this._renderer.getActiveCubeFace(),Uo=this._renderer.getActiveMipmapLevel(),No=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Bt,minFilter:Bt,generateMipmaps:!1,type:Pn,format:mn,colorSpace:Sa,depthBuffer:!1},r=uf(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=uf(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=sS(s)),this._blurMaterial=oS(s,e,t),this._ggxMaterial=aS(s,e,t)}return r}_compileMaterial(e){const t=new Mt(new Zt,e);this._renderer.compile(t,kr)}_sceneToCubeUV(e,t,i,r,s){const c=new on(90,1,t,i),l=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,m=h.toneMapping;h.getClearColor(cf),h.toneMapping=An,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Mt(new Ar,new _h({name:"PMREM.Background",side:Kt,depthWrite:!1,depthTest:!1})));const S=this._backgroundBox,d=S.material;let u=!1;const _=e.background;_?_.isColor&&(d.color.copy(_),e.background=null,u=!0):(d.color.copy(cf),u=!0);for(let T=0;T<6;T++){const M=T%3;M===0?(c.up.set(0,l[T],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+p[T],s.y,s.z)):M===1?(c.up.set(0,0,l[T]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+p[T],s.z)):(c.up.set(0,l[T],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+p[T]));const b=this._cubeSize;sr(r,M*b,T>2?b:0,b,b),h.setRenderTarget(r),u&&h.render(S,c),h.render(e,c)}h.toneMapping=m,h.autoClear=f,e.background=_}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Bi||e.mapping===vr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=df()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ff());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;sr(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(a,kr)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const c=a.uniforms,l=i/(this._lodMeshes.length-1),p=t/(this._lodMeshes.length-1),h=Math.sqrt(l*l-p*p),f=l*1.25,m=h*f,{_lodMax:v}=this,S=this._sizeLods[i],d=3*S*(i>v-lr?i-v+lr:0),u=4*(this._cubeSize-S);c.envMap.value=e.texture,c.roughness.value=m,c.mipInt.value=v-t,sr(s,d,u,3*S,2*S),r.setRenderTarget(s),r.render(o,kr),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=v-i,sr(e,d,u,3*S,2*S),r.setRenderTarget(e),r.render(o,kr)}_blur(e,t,i,r){const s=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,s,t,i,a),this._blurPass(s,e,i,i,a)}_blurPass(e,t,i,r,s){const a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[r];c.material=o;const l=o.uniforms;l.envMap.value=e.texture,l.sigma.value=s,l.mipInt.value=this._lodMax-i;const p=this._sizeLods[r],h=3*p*(r>this._lodMax-lr?r-this._lodMax+lr:0),f=4*(this._cubeSize-p);sr(t,h,f,3*p,2*p),a.setRenderTarget(t),a.render(c,kr)}}function sS(n){const e=[],t=[];let i=n;const r=n-lr+1+tS;for(let s=0;s<r;s++){const a=Math.pow(2,i);e.push(a);const o=1/(a-2),c=-o,l=1+o,p=[c,c,l,c,l,l,c,c,l,l,c,l],h=6,f=6,m=3,v=new Float32Array(m*f*h),S=new Float32Array(m*f*h);for(let u=0;u<h;u++){const _=u%3*2/3-1,T=u>2?0:-1,M=[_,T,0,_+2/3,T,0,_+2/3,T+1,0,_,T,0,_+2/3,T+1,0,_,T+1,0];v.set(M,m*f*u);for(let b=0;b<f;b++){const w=p[b*2]*2-1,D=p[b*2+1]*2-1;u===0?Ci.set(1,D,w):u===1?Ci.set(-w,1,-D):u===2?Ci.set(-w,D,1):u===3?Ci.set(-1,D,-w):u===4?Ci.set(-w,-1,D):Ci.set(w,D,-1),Ci.toArray(S,(u*f+b)*m)}}const d=new Zt;d.setAttribute("position",new Rn(v,m)),d.setAttribute("outputDirection",new Rn(S,m)),t.push(new Mt(d,null)),i>lr&&i--}return{lodMeshes:t,sizeLods:e}}function uf(n,e,t){const i=new _n(n,e,t);return i.texture.mapping=Na,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function sr(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function aS(n,e,t){return new Ln({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:iS,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ka(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function oS(n,e,t){return new Ln({name:"SphericalGaussianBlur",defines:{SAMPLES:nS,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:ka(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function ff(){return new Ln({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ka(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function df(){return new Ln({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ka(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function ka(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class wh extends _n{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new xh(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ar(5,5,5),s=new Ln({name:"CubemapFromEquirect",uniforms:xr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Kt,blending:Yn});s.uniforms.tEquirect.value=t;const a=new Mt(r,s),o=t.minFilter;return t.minFilter===Li&&(t.minFilter=Bt),new f_(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}function cS(n){let e=new WeakMap,t=new WeakMap,i=null;function r(f,m=!1){return f==null?null:m?a(f):s(f)}function s(f){if(f&&f.isTexture){const m=f.mapping;if(m===ro||m===so)if(e.has(f)){const v=e.get(f).texture;return o(v,f.mapping)}else{const v=f.image;if(v&&v.height>0){const S=new wh(v.height);return S.fromEquirectangularTexture(n,f),e.set(f,S),f.addEventListener("dispose",l),o(S.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture){const m=f.mapping,v=m===ro||m===so,S=m===Bi||m===vr;if(v||S){let d=t.get(f);const u=d!==void 0?d.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==u)return i===null&&(i=new lf(n)),d=v?i.fromEquirectangular(f,d):i.fromCubemap(f,d),d.texture.pmremVersion=f.pmremVersion,t.set(f,d),d.texture;if(d!==void 0)return d.texture;{const _=f.image;return v&&_&&_.height>0||S&&_&&c(_)?(i===null&&(i=new lf(n)),d=v?i.fromEquirectangular(f):i.fromCubemap(f),d.texture.pmremVersion=f.pmremVersion,t.set(f,d),f.addEventListener("dispose",p),d.texture):null}}}return f}function o(f,m){return m===ro?f.mapping=Bi:m===so&&(f.mapping=vr),f}function c(f){let m=0;const v=6;for(let S=0;S<v;S++)f[S]!==void 0&&m++;return m===v}function l(f){const m=f.target;m.removeEventListener("dispose",l);const v=e.get(m);v!==void 0&&(e.delete(m),v.dispose())}function p(f){const m=f.target;m.removeEventListener("dispose",p);const v=t.get(m);v!==void 0&&(t.delete(m),v.dispose())}function h(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function lS(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&ur("WebGLRenderer: "+i+" extension not supported."),r}}}function uS(n,e,t,i){const r={},s=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const v in f.attributes)e.remove(f.attributes[v]);f.removeEventListener("dispose",a),delete r[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,t.memory.geometries++),f}function c(h){const f=h.attributes;for(const m in f)e.update(f[m],n.ARRAY_BUFFER)}function l(h){const f=[],m=h.index,v=h.attributes.position;let S=0;if(v===void 0)return;if(m!==null){const _=m.array;S=m.version;for(let T=0,M=_.length;T<M;T+=3){const b=_[T+0],w=_[T+1],D=_[T+2];f.push(b,w,w,D,D,b)}}else{const _=v.array;S=v.version;for(let T=0,M=_.length/3-1;T<M;T+=3){const b=T+0,w=T+1,D=T+2;f.push(b,w,w,D,D,b)}}const d=new(v.count>=65535?mh:ph)(f,1);d.version=S;const u=s.get(h);u&&e.remove(u),s.set(h,d)}function p(h){const f=s.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&l(h)}else l(h);return s.get(h)}return{get:o,update:c,getWireframeAttribute:p}}function fS(n,e,t){let i;function r(h){i=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function c(h,f){n.drawElements(i,f,s,h*a),t.update(f,i,1)}function l(h,f,m){m!==0&&(n.drawElementsInstanced(i,f,s,h*a,m),t.update(f,i,m))}function p(h,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,h,0,m);let S=0;for(let d=0;d<m;d++)S+=f[d];t.update(S,i,1)}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=p}function dS(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:ot("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function hS(n,e,t){const i=new WeakMap,r=new vt;function s(a,o,c){const l=a.morphTargetInfluences,p=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=p!==void 0?p.length:0;let f=i.get(o);if(f===void 0||f.count!==h){let N=function(){x.dispose(),i.delete(o),o.removeEventListener("dispose",N)};var m=N;f!==void 0&&f.texture.dispose();const v=o.morphAttributes.position!==void 0,S=o.morphAttributes.normal!==void 0,d=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],_=o.morphAttributes.normal||[],T=o.morphAttributes.color||[];let M=0;v===!0&&(M=1),S===!0&&(M=2),d===!0&&(M=3);let b=o.attributes.position.count*M,w=1;b>e.maxTextureSize&&(w=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const D=new Float32Array(b*w*4*h),x=new fh(D,b,w,h);x.type=Tn,x.needsUpdate=!0;const C=M*4;for(let O=0;O<h;O++){const V=u[O],E=_[O],A=T[O],L=b*w*4*O;for(let U=0;U<V.count;U++){const F=U*C;v===!0&&(r.fromBufferAttribute(V,U),D[L+F+0]=r.x,D[L+F+1]=r.y,D[L+F+2]=r.z,D[L+F+3]=0),S===!0&&(r.fromBufferAttribute(E,U),D[L+F+4]=r.x,D[L+F+5]=r.y,D[L+F+6]=r.z,D[L+F+7]=0),d===!0&&(r.fromBufferAttribute(A,U),D[L+F+8]=r.x,D[L+F+9]=r.y,D[L+F+10]=r.z,D[L+F+11]=A.itemSize===4?r.w:1)}}f={count:h,texture:x,size:new et(b,w)},i.set(o,f),o.addEventListener("dispose",N)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let v=0;for(let d=0;d<l.length;d++)v+=l[d];const S=o.morphTargetsRelative?1:1-v;c.getUniforms().setValue(n,"morphTargetBaseInfluence",S),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function pS(n,e,t,i,r){let s=new WeakMap;function a(l){const p=r.render.frame,h=l.geometry,f=e.get(l,h);if(s.get(f)!==p&&(e.update(f),s.set(f,p)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==p&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,p))),l.isSkinnedMesh){const m=l.skeleton;s.get(m)!==p&&(m.update(),s.set(m,p))}return f}function o(){s=new WeakMap}function c(l){const p=l.target;p.removeEventListener("dispose",c),i.releaseStatesOfObject(p),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:a,dispose:o}}const mS={[$d]:"LINEAR_TONE_MAPPING",[Zd]:"REINHARD_TONE_MAPPING",[Jd]:"CINEON_TONE_MAPPING",[Qd]:"ACES_FILMIC_TONE_MAPPING",[eh]:"AGX_TONE_MAPPING",[th]:"NEUTRAL_TONE_MAPPING",[jd]:"CUSTOM_TONE_MAPPING"};function gS(n,e,t,i,r,s){const a=new _n(e,t,{type:n,depthBuffer:r,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,c=null;const l=new Zt;l.setAttribute("position",new Pt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Pt([0,2,0,0,2,0],2));const p=new r_({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new Mt(l,p),f=new vl(-1,1,1,-1,0,1);let m=null,v=null,S=!1,d,u=null,_=[],T=!1;this.setSize=function(M,b){a.setSize(M,b),o!==null&&o.setSize(M,b),c!==null&&c.setSize(M,b);for(let w=0;w<_.length;w++){const D=_[w];D.setSize&&D.setSize(M,b)}},this.setEffects=function(M){_=M,T=_.length>0&&_[0].isRenderPass===!0;const b=a.width,w=a.height;_.length>0&&o===null&&(o=new _n(b,w,{type:Pn,depthBuffer:!1,stencilBuffer:!1}),c=new _n(b,w,{type:Pn,depthBuffer:!1,stencilBuffer:!1}));for(let D=0;D<_.length;D++){const x=_[D];x.setSize&&x.setSize(b,w)}},this.begin=function(M,b){if(S||M.toneMapping===An&&_.length===0)return!1;if(u=b,b!==null){const w=b.width,D=b.height;(a.width!==w||a.height!==D)&&this.setSize(w,D)}return T===!1&&M.setRenderTarget(a),d=M.toneMapping,M.toneMapping=An,!0},this.hasRenderPass=function(){return T},this.end=function(M,b){M.toneMapping=d,S=!0;let w=a,D=o;for(let x=0;x<_.length;x++){const C=_[x];C.enabled!==!1&&(C.render(M,D,w,b),C.needsSwap!==!1&&(w=D,D=D===o?c:o))}if(m!==M.outputColorSpace||v!==M.toneMapping){m=M.outputColorSpace,v=M.toneMapping,p.defines={},tt.getTransfer(m)===ut&&(p.defines.SRGB_TRANSFER="");const x=mS[v];x&&(p.defines[x]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=w.texture,M.setRenderTarget(u),M.render(h,f),u=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),p.dispose()}}const Ah=new kt,zc=new fs(1,1),Rh=new fh,Ch=new I0,Ph=new xh,hf=[],pf=[],mf=new Float32Array(16),gf=new Float32Array(9),_f=new Float32Array(4);function Rr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=hf[r];if(s===void 0&&(s=new Float32Array(r),hf[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function Tt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function wt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function za(n,e){let t=pf[e];t===void 0&&(t=new Int32Array(e),pf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function _S(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function vS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;n.uniform2fv(this.addr,e),wt(t,e)}}function xS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Tt(t,e))return;n.uniform3fv(this.addr,e),wt(t,e)}}function SS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;n.uniform4fv(this.addr,e),wt(t,e)}}function MS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Tt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),wt(t,e)}else{if(Tt(t,i))return;_f.set(i),n.uniformMatrix2fv(this.addr,!1,_f),wt(t,i)}}function yS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Tt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),wt(t,e)}else{if(Tt(t,i))return;gf.set(i),n.uniformMatrix3fv(this.addr,!1,gf),wt(t,i)}}function ES(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Tt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),wt(t,e)}else{if(Tt(t,i))return;mf.set(i),n.uniformMatrix4fv(this.addr,!1,mf),wt(t,i)}}function bS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function TS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;n.uniform2iv(this.addr,e),wt(t,e)}}function wS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;n.uniform3iv(this.addr,e),wt(t,e)}}function AS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;n.uniform4iv(this.addr,e),wt(t,e)}}function RS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function CS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;n.uniform2uiv(this.addr,e),wt(t,e)}}function PS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;n.uniform3uiv(this.addr,e),wt(t,e)}}function LS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;n.uniform4uiv(this.addr,e),wt(t,e)}}function DS(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(zc.compareFunction=t.isReversedDepthBuffer()?dl:fl,s=zc):s=Ah,t.setTexture2D(e||s,r)}function IS(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Ch,r)}function US(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Ph,r)}function NS(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Rh,r)}function FS(n){switch(n){case 5126:return _S;case 35664:return vS;case 35665:return xS;case 35666:return SS;case 35674:return MS;case 35675:return yS;case 35676:return ES;case 5124:case 35670:return bS;case 35667:case 35671:return TS;case 35668:case 35672:return wS;case 35669:case 35673:return AS;case 5125:return RS;case 36294:return CS;case 36295:return PS;case 36296:return LS;case 35678:case 36198:case 36298:case 36306:case 35682:return DS;case 35679:case 36299:case 36307:return IS;case 35680:case 36300:case 36308:case 36293:return US;case 36289:case 36303:case 36311:case 36292:return NS}}function OS(n,e){n.uniform1fv(this.addr,e)}function BS(n,e){const t=Rr(e,this.size,2);n.uniform2fv(this.addr,t)}function kS(n,e){const t=Rr(e,this.size,3);n.uniform3fv(this.addr,t)}function zS(n,e){const t=Rr(e,this.size,4);n.uniform4fv(this.addr,t)}function HS(n,e){const t=Rr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function GS(n,e){const t=Rr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function VS(n,e){const t=Rr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function WS(n,e){n.uniform1iv(this.addr,e)}function XS(n,e){n.uniform2iv(this.addr,e)}function qS(n,e){n.uniform3iv(this.addr,e)}function YS(n,e){n.uniform4iv(this.addr,e)}function KS(n,e){n.uniform1uiv(this.addr,e)}function $S(n,e){n.uniform2uiv(this.addr,e)}function ZS(n,e){n.uniform3uiv(this.addr,e)}function JS(n,e){n.uniform4uiv(this.addr,e)}function QS(n,e,t){const i=this.cache,r=e.length,s=za(t,r);Tt(i,s)||(n.uniform1iv(this.addr,s),wt(i,s));let a;this.type===n.SAMPLER_2D_SHADOW?a=zc:a=Ah;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function jS(n,e,t){const i=this.cache,r=e.length,s=za(t,r);Tt(i,s)||(n.uniform1iv(this.addr,s),wt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Ch,s[a])}function eM(n,e,t){const i=this.cache,r=e.length,s=za(t,r);Tt(i,s)||(n.uniform1iv(this.addr,s),wt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Ph,s[a])}function tM(n,e,t){const i=this.cache,r=e.length,s=za(t,r);Tt(i,s)||(n.uniform1iv(this.addr,s),wt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Rh,s[a])}function nM(n){switch(n){case 5126:return OS;case 35664:return BS;case 35665:return kS;case 35666:return zS;case 35674:return HS;case 35675:return GS;case 35676:return VS;case 5124:case 35670:return WS;case 35667:case 35671:return XS;case 35668:case 35672:return qS;case 35669:case 35673:return YS;case 5125:return KS;case 36294:return $S;case 36295:return ZS;case 36296:return JS;case 35678:case 36198:case 36298:case 36306:case 35682:return QS;case 35679:case 36299:case 36307:return jS;case 35680:case 36300:case 36308:case 36293:return eM;case 36289:case 36303:case 36311:case 36292:return tM}}class iM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=FS(t.type)}}class rM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=nM(t.type)}}class sM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const Fo=/(\w+)(\])?(\[|\.)?/g;function vf(n,e){n.seq.push(e),n.map[e.id]=e}function aM(n,e,t){const i=n.name,r=i.length;for(Fo.lastIndex=0;;){const s=Fo.exec(i),a=Fo.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){vf(t,l===void 0?new iM(o,n,e):new rM(o,n,e));break}else{let h=t.map[o];h===void 0&&(h=new sM(o),vf(t,h)),t=h}}}class la{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);aM(o,c,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function xf(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const oM=37297;let cM=0;function lM(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const Sf=new Ve;function uM(n){tt._getMatrix(Sf,tt.workingColorSpace,n);const e=`mat3( ${Sf.elements.map(t=>t.toFixed(4))} )`;switch(tt.getTransfer(n)){case Ma:return[e,"LinearTransferOETF"];case ut:return[e,"sRGBTransferOETF"];default:return Ge("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Mf(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+lM(n.getShaderSource(e),o)}else return s}function fM(n,e){const t=uM(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const dM={[$d]:"Linear",[Zd]:"Reinhard",[Jd]:"Cineon",[Qd]:"ACESFilmic",[eh]:"AgX",[th]:"Neutral",[jd]:"Custom"};function hM(n,e){const t=dM[e];return t===void 0?(Ge("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Js=new $;function pM(){tt.getLuminanceCoefficients(Js);const n=Js.x.toFixed(4),e=Js.y.toFixed(4),t=Js.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function mM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Yr).join(`
`)}function gM(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function _M(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Yr(n){return n!==""}function yf(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ef(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const vM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hc(n){return n.replace(vM,SM)}const xM=new Map;function SM(n,e){let t=Ye[e];if(t===void 0){const i=xM.get(e);if(i!==void 0)t=Ye[i],Ge('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Hc(t)}const MM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bf(n){return n.replace(MM,yM)}function yM(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Tf(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const EM={[ra]:"SHADOWMAP_TYPE_PCF",[qr]:"SHADOWMAP_TYPE_VSM"};function bM(n){return EM[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const TM={[Bi]:"ENVMAP_TYPE_CUBE",[vr]:"ENVMAP_TYPE_CUBE",[Na]:"ENVMAP_TYPE_CUBE_UV"};function wM(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":TM[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const AM={[vr]:"ENVMAP_MODE_REFRACTION"};function RM(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":AM[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const CM={[Kd]:"ENVMAP_BLENDING_MULTIPLY",[u0]:"ENVMAP_BLENDING_MIX",[f0]:"ENVMAP_BLENDING_ADD"};function PM(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":CM[n.combine]||"ENVMAP_BLENDING_NONE"}function LM(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function DM(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=bM(t),l=wM(t),p=RM(t),h=PM(t),f=LM(t),m=mM(t),v=gM(s),S=r.createProgram();let d,u,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Yr).join(`
`),d.length>0&&(d+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Yr).join(`
`),u.length>0&&(u+=`
`)):(d=[Tf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Yr).join(`
`),u=[Tf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+p:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==An?"#define TONE_MAPPING":"",t.toneMapping!==An?Ye.tonemapping_pars_fragment:"",t.toneMapping!==An?hM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,fM("linearToOutputTexel",t.outputColorSpace),pM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Yr).join(`
`)),a=Hc(a),a=yf(a,t),a=Ef(a,t),o=Hc(o),o=yf(o,t),o=Ef(o,t),a=bf(a),o=bf(o),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,d=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,u=["#define varying in",t.glslVersion===Nu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Nu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const T=_+d+a,M=_+u+o,b=xf(r,r.VERTEX_SHADER,T),w=xf(r,r.FRAGMENT_SHADER,M);r.attachShader(S,b),r.attachShader(S,w),t.index0AttributeName!==void 0?r.bindAttribLocation(S,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S);function D(O){if(n.debug.checkShaderErrors){const V=r.getProgramInfoLog(S)||"",E=r.getShaderInfoLog(b)||"",A=r.getShaderInfoLog(w)||"",L=V.trim(),U=E.trim(),F=A.trim();let W=!0,P=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if(W=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,S,b,w);else{const I=Mf(r,b,"vertex"),X=Mf(r,w,"fragment");ot("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+L+`
`+I+`
`+X)}else L!==""?Ge("WebGLProgram: Program Info Log:",L):(U===""||F==="")&&(P=!1);P&&(O.diagnostics={runnable:W,programLog:L,vertexShader:{log:U,prefix:d},fragmentShader:{log:F,prefix:u}})}r.deleteShader(b),r.deleteShader(w),x=new la(r,S),C=_M(r,S)}let x;this.getUniforms=function(){return x===void 0&&D(this),x};let C;this.getAttributes=function(){return C===void 0&&D(this),C};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=r.getProgramParameter(S,oM)),N},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=cM++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=b,this.fragmentShader=w,this}let IM=0;class UM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new NM(e),t.set(e,i)),i}}class NM{constructor(e){this.id=IM++,this.code=e,this.usedTimes=0}}function FM(n){return n===ki||n===va||n===xa}function OM(n,e,t,i,r,s){const a=new dh,o=new UM,c=new Set,l=[],p=new Map,h=i.logarithmicDepthBuffer;let f=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(x){return c.add(x),x===0?"uv":`uv${x}`}function S(x,C,N,O,V,E){const A=O.fog,L=V.geometry,U=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?O.environment:null,F=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,W=e.get(x.envMap||U,F),P=W&&W.mapping===Na?W.image.height:null,I=m[x.type];x.precision!==null&&(f=i.getMaxPrecision(x.precision),f!==x.precision&&Ge("WebGLProgram.getParameters:",x.precision,"not supported, using",f,"instead."));const X=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,se=X!==void 0?X.length:0;let oe=0;L.morphAttributes.position!==void 0&&(oe=1),L.morphAttributes.normal!==void 0&&(oe=2),L.morphAttributes.color!==void 0&&(oe=3);let Me,Ne,Oe,Q;if(I){const ht=bn[I];Me=ht.vertexShader,Ne=ht.fragmentShader}else{Me=x.vertexShader,Ne=x.fragmentShader;const ht=o.getVertexShaderStage(x),ct=o.getFragmentShaderStage(x);o.update(x,ht,ct),Oe=ht.id,Q=ct.id}const ee=n.getRenderTarget(),_e=n.state.buffers.depth.getReversed(),De=V.isInstancedMesh===!0,H=V.isBatchedMesh===!0,ie=!!x.map,me=!!x.matcap,le=!!W,Ee=!!x.aoMap,We=!!x.lightMap,He=!!x.bumpMap&&x.wireframe===!1,it=!!x.normalMap,Be=!!x.displacementMap,$e=!!x.emissiveMap,Ze=!!x.metalnessMap,mt=!!x.roughnessMap,z=x.anisotropy>0,bt=x.clearcoat>0,at=x.dispersion>0,R=x.retroreflectivity>0,g=x.iridescence>0,B=x.sheen>0,q=x.transmission>0,Z=z&&!!x.anisotropyMap,ae=bt&&!!x.clearcoatMap,ce=bt&&!!x.clearcoatNormalMap,j=bt&&!!x.clearcoatRoughnessMap,te=g&&!!x.iridescenceMap,ue=g&&!!x.iridescenceThicknessMap,Re=B&&!!x.sheenColorMap,de=B&&!!x.sheenRoughnessMap,fe=!!x.specularMap,Ie=!!x.specularColorMap,ke=!!x.specularIntensityMap,Xe=q&&!!x.transmissionMap,G=q&&!!x.thicknessMap,he=!!x.gradientMap,ne=!!x.alphaMap,pe=x.alphaTest>0,ye=!!x.alphaHash,re=!!x.extensions;let Ue=An;x.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Ue=n.toneMapping);const Ce={shaderID:I,shaderType:x.type,shaderName:x.name,vertexShader:Me,fragmentShader:Ne,defines:x.defines,customVertexShaderID:Oe,customFragmentShaderID:Q,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:f,batching:H,batchingColor:H&&V._colorsTexture!==null,instancing:De,instancingColor:De&&V.instanceColor!==null,instancingMorph:De&&V.morphTexture!==null,outputColorSpace:ee===null?n.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:tt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:ie,matcap:me,envMap:le,envMapMode:le&&W.mapping,envMapCubeUVHeight:P,aoMap:Ee,lightMap:We,bumpMap:He,normalMap:it,displacementMap:Be,emissiveMap:$e,normalMapObjectSpace:it&&x.normalMapType===p0,normalMapTangentSpace:it&&x.normalMapType===Oc,packedNormalMap:it&&x.normalMapType===Oc&&FM(x.normalMap.format),metalnessMap:Ze,roughnessMap:mt,anisotropy:z,anisotropyMap:Z,clearcoat:bt,clearcoatMap:ae,clearcoatNormalMap:ce,clearcoatRoughnessMap:j,dispersion:at,retroreflection:R,iridescence:g,iridescenceMap:te,iridescenceThicknessMap:ue,sheen:B,sheenColorMap:Re,sheenRoughnessMap:de,specularMap:fe,specularColorMap:Ie,specularIntensityMap:ke,transmission:q,transmissionMap:Xe,thicknessMap:G,gradientMap:he,opaque:x.transparent===!1&&x.blending===ts&&x.alphaToCoverage===!1,alphaMap:ne,alphaTest:pe,alphaHash:ye,combine:x.combine,mapUv:ie&&v(x.map.channel),aoMapUv:Ee&&v(x.aoMap.channel),lightMapUv:We&&v(x.lightMap.channel),bumpMapUv:He&&v(x.bumpMap.channel),normalMapUv:it&&v(x.normalMap.channel),displacementMapUv:Be&&v(x.displacementMap.channel),emissiveMapUv:$e&&v(x.emissiveMap.channel),metalnessMapUv:Ze&&v(x.metalnessMap.channel),roughnessMapUv:mt&&v(x.roughnessMap.channel),anisotropyMapUv:Z&&v(x.anisotropyMap.channel),clearcoatMapUv:ae&&v(x.clearcoatMap.channel),clearcoatNormalMapUv:ce&&v(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:j&&v(x.clearcoatRoughnessMap.channel),iridescenceMapUv:te&&v(x.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&v(x.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&v(x.sheenColorMap.channel),sheenRoughnessMapUv:de&&v(x.sheenRoughnessMap.channel),specularMapUv:fe&&v(x.specularMap.channel),specularColorMapUv:Ie&&v(x.specularColorMap.channel),specularIntensityMapUv:ke&&v(x.specularIntensityMap.channel),transmissionMapUv:Xe&&v(x.transmissionMap.channel),thicknessMapUv:G&&v(x.thicknessMap.channel),alphaMapUv:ne&&v(x.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(it||z),vertexNormals:!!L.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!L.attributes.uv&&(ie||ne),fog:!!A,useFog:x.fog===!0,fogExp2:!!A&&A.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||L.attributes.normal===void 0&&it===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:_e,skinning:V.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:oe,numSunLights:C.sun.length,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numSunLightShadows:C.sunShadowMap.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numLightProbeGrids:E.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&N.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ue,decodeVideoTexture:ie&&x.map.isVideoTexture===!0&&tt.getTransfer(x.map.colorSpace)===ut,decodeVideoTextureEmissive:$e&&x.emissiveMap.isVideoTexture===!0&&tt.getTransfer(x.emissiveMap.colorSpace)===ut,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Gn,flipSided:x.side===Kt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:re&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(re&&x.extensions.multiDraw===!0||H)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ce.vertexUv1s=c.has(1),Ce.vertexUv2s=c.has(2),Ce.vertexUv3s=c.has(3),c.clear(),Ce}function d(x){const C=[];if(x.shaderID?C.push(x.shaderID):(C.push(x.customVertexShaderID),C.push(x.customFragmentShaderID)),x.defines!==void 0)for(const N in x.defines)C.push(N),C.push(x.defines[N]);return x.isRawShaderMaterial===!1&&(u(C,x),_(C,x),C.push(n.outputColorSpace)),C.push(x.customProgramCacheKey),C.join()}function u(x,C){x.push(C.precision),x.push(C.outputColorSpace),x.push(C.envMapMode),x.push(C.envMapCubeUVHeight),x.push(C.mapUv),x.push(C.alphaMapUv),x.push(C.lightMapUv),x.push(C.aoMapUv),x.push(C.bumpMapUv),x.push(C.normalMapUv),x.push(C.displacementMapUv),x.push(C.emissiveMapUv),x.push(C.metalnessMapUv),x.push(C.roughnessMapUv),x.push(C.anisotropyMapUv),x.push(C.clearcoatMapUv),x.push(C.clearcoatNormalMapUv),x.push(C.clearcoatRoughnessMapUv),x.push(C.iridescenceMapUv),x.push(C.iridescenceThicknessMapUv),x.push(C.sheenColorMapUv),x.push(C.sheenRoughnessMapUv),x.push(C.specularMapUv),x.push(C.specularColorMapUv),x.push(C.specularIntensityMapUv),x.push(C.transmissionMapUv),x.push(C.thicknessMapUv),x.push(C.combine),x.push(C.fogExp2),x.push(C.sizeAttenuation),x.push(C.morphTargetsCount),x.push(C.morphAttributeCount),x.push(C.numSunLights),x.push(C.numDirLights),x.push(C.numPointLights),x.push(C.numSpotLights),x.push(C.numSpotLightMaps),x.push(C.numHemiLights),x.push(C.numRectAreaLights),x.push(C.numSunLightShadows),x.push(C.numDirLightShadows),x.push(C.numPointLightShadows),x.push(C.numSpotLightShadows),x.push(C.numSpotLightShadowsWithMaps),x.push(C.numLightProbes),x.push(C.shadowMapType),x.push(C.toneMapping),x.push(C.numClippingPlanes),x.push(C.numClipIntersection),x.push(C.depthPacking)}function _(x,C){a.disableAll(),C.instancing&&a.enable(0),C.instancingColor&&a.enable(1),C.instancingMorph&&a.enable(2),C.matcap&&a.enable(3),C.envMap&&a.enable(4),C.normalMapObjectSpace&&a.enable(5),C.normalMapTangentSpace&&a.enable(6),C.clearcoat&&a.enable(7),C.iridescence&&a.enable(8),C.alphaTest&&a.enable(9),C.vertexColors&&a.enable(10),C.vertexAlphas&&a.enable(11),C.vertexUv1s&&a.enable(12),C.vertexUv2s&&a.enable(13),C.vertexUv3s&&a.enable(14),C.vertexTangents&&a.enable(15),C.anisotropy&&a.enable(16),C.alphaHash&&a.enable(17),C.batching&&a.enable(18),C.dispersion&&a.enable(19),C.retroreflection&&a.enable(24),C.batchingColor&&a.enable(20),C.gradientMap&&a.enable(21),C.packedNormalMap&&a.enable(22),C.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),C.fog&&a.enable(0),C.useFog&&a.enable(1),C.flatShading&&a.enable(2),C.logarithmicDepthBuffer&&a.enable(3),C.reversedDepthBuffer&&a.enable(4),C.skinning&&a.enable(5),C.morphTargets&&a.enable(6),C.morphNormals&&a.enable(7),C.morphColors&&a.enable(8),C.premultipliedAlpha&&a.enable(9),C.shadowMapEnabled&&a.enable(10),C.doubleSided&&a.enable(11),C.flipSided&&a.enable(12),C.useDepthPacking&&a.enable(13),C.dithering&&a.enable(14),C.transmission&&a.enable(15),C.sheen&&a.enable(16),C.opaque&&a.enable(17),C.pointsUvs&&a.enable(18),C.decodeVideoTexture&&a.enable(19),C.decodeVideoTextureEmissive&&a.enable(20),C.alphaToCoverage&&a.enable(21),C.numLightProbeGrids>0&&a.enable(22),C.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function T(x){const C=m[x.type];let N;if(C){const O=bn[C];N=t_.clone(O.uniforms)}else N=x.uniforms;return N}function M(x,C){let N=p.get(C);return N!==void 0?++N.usedTimes:(N=new DM(n,C,x,r),l.push(N),p.set(C,N)),N}function b(x){if(--x.usedTimes===0){const C=l.indexOf(x);l[C]=l[l.length-1],l.pop(),p.delete(x.cacheKey),x.destroy()}}function w(x){o.remove(x)}function D(){o.dispose()}return{getParameters:S,getProgramCacheKey:d,getUniforms:T,acquireProgram:M,releaseProgram:b,releaseShaderCache:w,programs:l,dispose:D}}function BM(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,c){n.get(a)[o]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function kM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function wf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Af(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(f){let m=0;return f.isInstancedMesh&&(m+=2),f.isSkinnedMesh&&(m+=1),m}function o(f,m,v,S,d,u){let _=n[e];return _===void 0?(_={id:f.id,object:f,geometry:m,material:v,materialVariant:a(f),groupOrder:S,renderOrder:f.renderOrder,z:d,group:u},n[e]=_):(_.id=f.id,_.object=f,_.geometry=m,_.material=v,_.materialVariant=a(f),_.groupOrder=S,_.renderOrder=f.renderOrder,_.z=d,_.group=u),e++,_}function c(f,m,v,S,d,u,_){_.reversedDepth===!0&&(d=-d);const T=o(f,m,v,S,d,u);v.transmission>0?i.push(T):v.transparent===!0?r.push(T):t.push(T)}function l(f,m,v,S,d,u){const _=o(f,m,v,S,d,u);v.transmission>0?i.unshift(_):v.transparent===!0?r.unshift(_):t.unshift(_)}function p(f,m){t.length>1&&t.sort(f||kM),i.length>1&&i.sort(m||wf),r.length>1&&r.sort(m||wf)}function h(){for(let f=e,m=n.length;f<m;f++){const v=n[f];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:c,unshift:l,finish:h,sort:p}}function zM(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new Af,n.set(i,[a])):r>=s.length?(a=new Af,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function HM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new $,color:new je};break;case"SpotLight":t={position:new $,direction:new $,color:new je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new $,color:new je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new $,skyColor:new je,groundColor:new je};break;case"RectAreaLight":t={color:new je,position:new $,halfWidth:new $,halfHeight:new $};break}return n[e.id]=t,t}}}function GM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let VM=0;function WM(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function XM(n){const e=new HM,t=GM(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new $);const r=new $,s=new xt,a=new xt;function o(l){let p=0,h=0,f=0;for(let V=0;V<9;V++)i.probe[V].set(0,0,0);let m=0,v=0,S=0,d=0,u=0,_=0,T=0,M=0,b=0,w=0,D=0,x=0,C=0,N=0;l.sort(WM);for(let V=0,E=l.length;V<E;V++){const A=l[V],L=A.color,U=A.intensity,F=A.distance;let W=null;if(A.shadow&&A.shadow.map&&(A.shadow.map.texture.format===ki?W=A.shadow.map.texture:W=A.shadow.map.depthTexture||A.shadow.map.texture),A.isAmbientLight)p+=L.r*U,h+=L.g*U,f+=L.b*U;else if(A.isLightProbe){for(let P=0;P<9;P++)i.probe[P].addScaledVector(A.sh.coefficients[P],U);N++}else if(A.isSunLight){const P=e.get(A);if(P.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const I=A.shadow,X=t.get(A);X.shadowIntensity=I.intensity,X.shadowBias=I.bias,X.shadowNormalBias=I.normalBias,X.shadowRadius=I.radius,X.shadowMapSize.copy(I.mapSize).multiply(I.getFrameExtents()),i.sunShadow[v]=X,i.sunShadowMap[v]=W;const se=I.getViewportCount();for(let oe=0;oe<se;oe++)i.sunShadowMatrix[S+oe]=I.getMatrix(oe),i.sunShadowCascade[S+oe]=I._cascadeData[oe];S+=se,v++}i.sun[m]=P,m++}else if(A.isDirectionalLight){const P=e.get(A);if(P.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const I=A.shadow,X=t.get(A);X.shadowIntensity=I.intensity,X.shadowBias=I.bias,X.shadowNormalBias=I.normalBias,X.shadowRadius=I.radius,X.shadowMapSize=I.mapSize,i.directionalShadow[d]=X,i.directionalShadowMap[d]=W,i.directionalShadowMatrix[d]=A.shadow.matrix,b++}i.directional[d]=P,d++}else if(A.isSpotLight){const P=e.get(A);P.position.setFromMatrixPosition(A.matrixWorld),P.color.copy(L).multiplyScalar(U),P.distance=F,P.coneCos=Math.cos(A.angle),P.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),P.decay=A.decay,i.spot[_]=P;const I=A.shadow;if(A.map&&(i.spotLightMap[x]=A.map,x++,I.updateMatrices(A),A.castShadow&&C++),i.spotLightMatrix[_]=I.matrix,A.castShadow){const X=t.get(A);X.shadowIntensity=I.intensity,X.shadowBias=I.bias,X.shadowNormalBias=I.normalBias,X.shadowRadius=I.radius,X.shadowMapSize=I.mapSize,i.spotShadow[_]=X,i.spotShadowMap[_]=W,D++}_++}else if(A.isRectAreaLight){const P=e.get(A);P.color.copy(L).multiplyScalar(U),P.halfWidth.set(A.width*.5,0,0),P.halfHeight.set(0,A.height*.5,0),i.rectArea[T]=P,T++}else if(A.isPointLight){const P=e.get(A);if(P.color.copy(A.color).multiplyScalar(A.intensity),P.distance=A.distance,P.decay=A.decay,A.castShadow){const I=A.shadow,X=t.get(A);X.shadowIntensity=I.intensity,X.shadowBias=I.bias,X.shadowNormalBias=I.normalBias,X.shadowRadius=I.radius,X.shadowMapSize=I.mapSize,X.shadowCameraNear=I.camera.near,X.shadowCameraFar=I.camera.far,i.pointShadow[u]=X,i.pointShadowMap[u]=W,i.pointShadowMatrix[u]=A.shadow.matrix,w++}i.point[u]=P,u++}else if(A.isHemisphereLight){const P=e.get(A);P.skyColor.copy(A.color).multiplyScalar(U),P.groundColor.copy(A.groundColor).multiplyScalar(U),i.hemi[M]=P,M++}}T>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ge.LTC_FLOAT_1,i.rectAreaLTC2=ge.LTC_FLOAT_2):(i.rectAreaLTC1=ge.LTC_HALF_1,i.rectAreaLTC2=ge.LTC_HALF_2)),i.ambient[0]=p,i.ambient[1]=h,i.ambient[2]=f;const O=i.hash;(O.sunLength!==m||O.directionalLength!==d||O.pointLength!==u||O.spotLength!==_||O.rectAreaLength!==T||O.hemiLength!==M||O.numSunShadows!==v||O.numDirectionalShadows!==b||O.numPointShadows!==w||O.numSpotShadows!==D||O.numSpotMaps!==x||O.numLightProbes!==N)&&(i.sun.length=m,i.directional.length=d,i.spot.length=_,i.rectArea.length=T,i.point.length=u,i.hemi.length=M,i.sunShadow.length=v,i.sunShadowMap.length=v,i.sunShadowMatrix.length=S,i.sunShadowCascade.length=S,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.directionalShadowMatrix.length=b,i.pointShadow.length=w,i.pointShadowMap.length=w,i.pointShadowMatrix.length=w,i.spotShadow.length=D,i.spotShadowMap.length=D,i.spotLightMatrix.length=D+x-C,i.spotLightMap.length=x,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=N,O.sunLength=m,O.directionalLength=d,O.pointLength=u,O.spotLength=_,O.rectAreaLength=T,O.hemiLength=M,O.numSunShadows=v,O.numDirectionalShadows=b,O.numPointShadows=w,O.numSpotShadows=D,O.numSpotMaps=x,O.numLightProbes=N,i.version=VM++)}function c(l,p){let h=0,f=0,m=0,v=0,S=0,d=0;const u=p.matrixWorldInverse;for(let _=0,T=l.length;_<T;_++){const M=l[_];if(M.isSunLight){const b=i.sun[h];b.direction.setFromMatrixPosition(M.matrixWorld),b.direction.transformDirection(u),h++}else if(M.isDirectionalLight){const b=i.directional[f];b.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(u),f++}else if(M.isSpotLight){const b=i.spot[v];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(u),b.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(u),v++}else if(M.isRectAreaLight){const b=i.rectArea[S];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(u),a.identity(),s.copy(M.matrixWorld),s.premultiply(u),a.extractRotation(s),b.halfWidth.set(M.width*.5,0,0),b.halfHeight.set(0,M.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),S++}else if(M.isPointLight){const b=i.point[m];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(u),m++}else if(M.isHemisphereLight){const b=i.hemi[d];b.direction.setFromMatrixPosition(M.matrixWorld),b.direction.transformDirection(u),d++}}}return{setup:o,setupView:c,state:i}}function Rf(n){const e=new XM(n),t=[],i=[],r=[];function s(f){h.camera=f,t.length=0,i.length=0,r.length=0}function a(f){t.push(f)}function o(f){i.push(f)}function c(f){r.push(f)}function l(){e.setup(t)}function p(f){e.setupView(t,f)}const h={lightsArray:t,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:l,setupLightsView:p,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function qM(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Rf(n),e.set(r,[o])):s>=a.length?(o=new Rf(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const YM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,KM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,$M=[new $(1,0,0),new $(-1,0,0),new $(0,1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1)],ZM=[new $(0,-1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1),new $(0,-1,0),new $(0,-1,0)],Cf=new xt,zr=new $,Oo=new $;function JM(n,e,t){let i=new ml;const r=new et,s=new et,a=new vt,o=new s_,c=new a_,l={},p=t.maxTextureSize,h={[Oi]:Kt,[Kt]:Oi,[Gn]:Gn},f=new Ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:YM,fragmentShader:KM}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const v=new Zt;v.setAttribute("position",new Rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new Mt(v,f),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ra;let u=this.type;this.render=function(w,D,x){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||w.length===0)return;this.type===Xg&&(Ge("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ra);const C=n.getRenderTarget(),N=n.getActiveCubeFace(),O=n.getActiveMipmapLevel(),V=n.state;V.setBlending(Yn),V.buffers.depth.getReversed()===!0?V.buffers.color.setClear(0,0,0,0):V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const E=u!==this.type;E&&D.traverse(function(A){A.material&&(Array.isArray(A.material)?A.material.forEach(L=>L.needsUpdate=!0):A.material.needsUpdate=!0)});for(let A=0,L=w.length;A<L;A++){const U=w[A],F=U.shadow;if(F===void 0){Ge("WebGLShadowMap:",U,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;r.copy(F.mapSize);const W=F.getFrameExtents();r.multiply(W),s.copy(F.mapSize),(r.x>p||r.y>p)&&(r.x>p&&(s.x=Math.floor(p/W.x),r.x=s.x*W.x,F.mapSize.x=s.x),r.y>p&&(s.y=Math.floor(p/W.y),r.y=s.y*W.y,F.mapSize.y=s.y));const P=n.state.buffers.depth.getReversed();if(F.camera._reversedDepth=P,F.map===null||E===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===qr){if(U.isPointLight){Ge("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new _n(r.x,r.y,{format:ki,type:Pn,minFilter:Bt,magFilter:Bt,generateMipmaps:!1}),F.map.texture.name=U.name+".shadowMap",F.map.depthTexture=new fs(r.x,r.y,Tn),F.map.depthTexture.name=U.name+".shadowMapDepth",F.map.depthTexture.format=Zn,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Dt,F.map.depthTexture.magFilter=Dt}else U.isPointLight?(F.map=new wh(r.x),F.map.depthTexture=new j0(r.x,Cn)):(F.map=new _n(r.x,r.y),F.map.depthTexture=new fs(r.x,r.y,Cn)),F.map.depthTexture.name=U.name+".shadowMap",F.map.depthTexture.format=Zn,this.type===ra?(F.map.depthTexture.compareFunction=P?dl:fl,F.map.depthTexture.minFilter=Bt,F.map.depthTexture.magFilter=Bt):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Dt,F.map.depthTexture.magFilter=Dt);F.camera.updateProjectionMatrix()}F.map.isWebGLCubeRenderTarget!==!0&&(F.map.width!==r.x||F.map.height!==r.y)&&F.map.setSize(r.x,r.y);const I=F.map.isWebGLCubeRenderTarget?6:F.getViewportCount();U.isPointLight!==!0&&F.updateMatrices(U,x);for(let X=0;X<I;X++){const se=F.getCamera(X);if(U.isPointLight){const oe=F.camera,Me=F.matrix,Ne=U.distance||oe.far;Ne!==oe.far&&(oe.far=Ne,oe.updateProjectionMatrix()),zr.setFromMatrixPosition(U.matrixWorld),oe.position.copy(zr),Oo.copy(oe.position),Oo.add($M[X]),oe.up.copy(ZM[X]),oe.lookAt(Oo),oe.updateMatrixWorld(),Me.makeTranslation(-zr.x,-zr.y,-zr.z),Cf.multiplyMatrices(oe.projectionMatrix,oe.matrixWorldInverse),F._frustum.setFromProjectionMatrix(Cf,oe.coordinateSystem,oe.reversedDepth)}if(F.map.isWebGLCubeRenderTarget)n.setRenderTarget(F.map,X),n.clear();else{X===0&&(n.setRenderTarget(F.map),n.clear());const oe=F.getViewport(X);a.set(s.x*oe.x,s.y*oe.y,s.x*oe.z,s.y*oe.w),V.viewport(a)}i=F.getFrustum(X),M(D,x,se,U,this.type)}F.isPointLightShadow!==!0&&this.type===qr&&_(F,x),F.needsUpdate=!1}u=this.type,d.needsUpdate=!1,n.setRenderTarget(C,N,O)};function _(w,D){const x=e.update(S);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null?w.mapPass=new _n(r.x,r.y,{format:ki,type:Pn}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),f.uniforms.shadow_pass.value=w.map.depthTexture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(D,null,x,f,S,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value.set(w.map.width,w.map.height),m.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(D,null,x,m,S,null)}function T(w,D,x,C){let N=null;const O=x.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(O!==void 0)N=O;else if(N=x.isPointLight===!0?c:o,n.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){const V=N.uuid,E=D.uuid;let A=l[V];A===void 0&&(A={},l[V]=A);let L=A[E];L===void 0&&(L=N.clone(),A[E]=L,D.addEventListener("dispose",b)),N=L}if(N.visible=D.visible,N.wireframe=D.wireframe,C===qr?N.side=D.shadowSide!==null?D.shadowSide:D.side:N.side=D.shadowSide!==null?D.shadowSide:h[D.side],N.alphaMap=D.alphaMap,N.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,N.map=D.map,N.clipShadows=D.clipShadows,N.clippingPlanes=D.clippingPlanes,N.clipIntersection=D.clipIntersection,N.displacementMap=D.displacementMap,N.displacementScale=D.displacementScale,N.displacementBias=D.displacementBias,N.wireframeLinewidth=D.wireframeLinewidth,N.linewidth=D.linewidth,x.isPointLight===!0&&N.isMeshDistanceMaterial===!0){const V=n.properties.get(N);V.light=x}return N}function M(w,D,x,C,N){if(w.visible===!1)return;if(w.layers.test(D.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&N===qr)&&(!w.frustumCulled||w.intersectsFrustum(i))){w.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,w.matrixWorld);const E=e.update(w),A=w.material;if(Array.isArray(A)){const L=E.groups;for(let U=0,F=L.length;U<F;U++){const W=L[U],P=A[W.materialIndex];if(P&&P.visible){const I=T(w,P,C,N);w.onBeforeShadow(n,w,D,x,E,I,W),n.renderBufferDirect(x,null,E,I,w,W),w.onAfterShadow(n,w,D,x,E,I,W)}}}else if(A.visible){const L=T(w,A,C,N);w.onBeforeShadow(n,w,D,x,E,L,null),n.renderBufferDirect(x,null,E,L,w,null),w.onAfterShadow(n,w,D,x,E,L,null)}}const V=w.children;for(let E=0,A=V.length;E<A;E++)M(V[E],D,x,C,N)}function b(w){w.target.removeEventListener("dispose",b);for(const x in l){const C=l[x],N=w.target.uuid;N in C&&(C[N].dispose(),delete C[N])}}}function QM(n,e){function t(){let G=!1;const he=new vt;let ne=null;const pe=new vt(0,0,0,0);return{setMask:function(ye){ne!==ye&&!G&&(n.colorMask(ye,ye,ye,ye),ne=ye)},setLocked:function(ye){G=ye},setClear:function(ye,re,Ue,Ce,ht){ht===!0&&(ye*=Ce,re*=Ce,Ue*=Ce),he.set(ye,re,Ue,Ce),pe.equals(he)===!1&&(n.clearColor(ye,re,Ue,Ce),pe.copy(he))},reset:function(){G=!1,ne=null,pe.set(-1,0,0,0)}}}function i(){let G=!1,he=!1,ne=null,pe=null,ye=null;return{setReversed:function(re){if(he!==re){const Ue=e.get("EXT_clip_control");re?Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.ZERO_TO_ONE_EXT):Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.NEGATIVE_ONE_TO_ONE_EXT),he=re;const Ce=ye;ye=null,this.setClear(Ce)}},getReversed:function(){return he},setTest:function(re){re?ee(n.DEPTH_TEST):_e(n.DEPTH_TEST)},setMask:function(re){ne!==re&&!G&&(n.depthMask(re),ne=re)},setFunc:function(re){if(he&&(re=w0[re]),pe!==re){switch(re){case Qo:n.depthFunc(n.NEVER);break;case jo:n.depthFunc(n.ALWAYS);break;case ec:n.depthFunc(n.LESS);break;case os:n.depthFunc(n.LEQUAL);break;case tc:n.depthFunc(n.EQUAL);break;case nc:n.depthFunc(n.GEQUAL);break;case ic:n.depthFunc(n.GREATER);break;case rc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}pe=re}},setLocked:function(re){G=re},setClear:function(re){ye!==re&&(ye=re,he&&(re=1-re),n.clearDepth(re))},reset:function(){G=!1,ne=null,pe=null,ye=null,he=!1}}}function r(){let G=!1,he=null,ne=null,pe=null,ye=null,re=null,Ue=null,Ce=null,ht=null;return{setTest:function(ct){G||(ct?ee(n.STENCIL_TEST):_e(n.STENCIL_TEST))},setMask:function(ct){he!==ct&&!G&&(n.stencilMask(ct),he=ct)},setFunc:function(ct,ln,xn){(ne!==ct||pe!==ln||ye!==xn)&&(n.stencilFunc(ct,ln,xn),ne=ct,pe=ln,ye=xn)},setOp:function(ct,ln,xn){(re!==ct||Ue!==ln||Ce!==xn)&&(n.stencilOp(ct,ln,xn),re=ct,Ue=ln,Ce=xn)},setLocked:function(ct){G=ct},setClear:function(ct){ht!==ct&&(n.clearStencil(ct),ht=ct)},reset:function(){G=!1,he=null,ne=null,pe=null,ye=null,re=null,Ue=null,Ce=null,ht=null}}}const s=new t,a=new i,o=new r,c=new WeakMap,l=new WeakMap;let p={},h={},f={},m=new WeakMap,v=[],S=null,d=!1,u=null,_=null,T=null,M=null,b=null,w=null,D=null,x=new je(0,0,0),C=0,N=!1,O=null,V=null,E=null,A=null,L=null;const U=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,W=0;const P=n.getParameter(n.VERSION);P.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(P)[1]),F=W>=1):P.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(P)[1]),F=W>=2);let I=null,X={};const se=n.getParameter(n.SCISSOR_BOX),oe=n.getParameter(n.VIEWPORT),Me=new vt().fromArray(se),Ne=new vt().fromArray(oe);function Oe(G,he,ne,pe){const ye=new Uint8Array(4),re=n.createTexture();n.bindTexture(G,re),n.texParameteri(G,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(G,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ue=0;Ue<ne;Ue++)G===n.TEXTURE_3D||G===n.TEXTURE_2D_ARRAY?n.texImage3D(he,0,n.RGBA,1,1,pe,0,n.RGBA,n.UNSIGNED_BYTE,ye):n.texImage2D(he+Ue,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ye);return re}const Q={};Q[n.TEXTURE_2D]=Oe(n.TEXTURE_2D,n.TEXTURE_2D,1),Q[n.TEXTURE_CUBE_MAP]=Oe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[n.TEXTURE_2D_ARRAY]=Oe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Q[n.TEXTURE_3D]=Oe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ee(n.DEPTH_TEST),a.setFunc(os),He(!1),it(Lu),ee(n.CULL_FACE),Ee(Yn);function ee(G){p[G]!==!0&&(n.enable(G),p[G]=!0)}function _e(G){p[G]!==!1&&(n.disable(G),p[G]=!1)}function De(G,he){return f[G]!==he?(n.bindFramebuffer(G,he),f[G]=he,G===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=he),G===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=he),!0):!1}function H(G,he){let ne=v,pe=!1;if(G){ne=m.get(he),ne===void 0&&(ne=[],m.set(he,ne));const ye=G.textures;if(ne.length!==ye.length||ne[0]!==n.COLOR_ATTACHMENT0){for(let re=0,Ue=ye.length;re<Ue;re++)ne[re]=n.COLOR_ATTACHMENT0+re;ne.length=ye.length,pe=!0}}else ne[0]!==n.BACK&&(ne[0]=n.BACK,pe=!0);pe&&n.drawBuffers(ne)}function ie(G){return S!==G?(n.useProgram(G),S=G,!0):!1}const me={[or]:n.FUNC_ADD,[Yg]:n.FUNC_SUBTRACT,[Kg]:n.FUNC_REVERSE_SUBTRACT};me[$g]=n.MIN,me[Zg]=n.MAX;const le={[Jg]:n.ZERO,[Qg]:n.ONE,[jg]:n.SRC_COLOR,[qd]:n.SRC_ALPHA,[s0]:n.SRC_ALPHA_SATURATE,[i0]:n.DST_COLOR,[t0]:n.DST_ALPHA,[e0]:n.ONE_MINUS_SRC_COLOR,[Yd]:n.ONE_MINUS_SRC_ALPHA,[r0]:n.ONE_MINUS_DST_COLOR,[n0]:n.ONE_MINUS_DST_ALPHA,[a0]:n.CONSTANT_COLOR,[o0]:n.ONE_MINUS_CONSTANT_COLOR,[c0]:n.CONSTANT_ALPHA,[l0]:n.ONE_MINUS_CONSTANT_ALPHA};function Ee(G,he,ne,pe,ye,re,Ue,Ce,ht,ct){if(G===Yn){d===!0&&(_e(n.BLEND),d=!1);return}if(d===!1&&(ee(n.BLEND),d=!0),G!==qg){if(G!==u||ct!==N){if((_!==or||b!==or)&&(n.blendEquation(n.FUNC_ADD),_=or,b=or),ct)switch(G){case ts:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Du:n.blendFunc(n.ONE,n.ONE);break;case Iu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Uu:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:ot("WebGLState: Invalid blending: ",G);break}else switch(G){case ts:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Du:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Iu:ot("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Uu:ot("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ot("WebGLState: Invalid blending: ",G);break}T=null,M=null,w=null,D=null,x.set(0,0,0),C=0,u=G,N=ct}return}ye=ye||he,re=re||ne,Ue=Ue||pe,(he!==_||ye!==b)&&(n.blendEquationSeparate(me[he],me[ye]),_=he,b=ye),(ne!==T||pe!==M||re!==w||Ue!==D)&&(n.blendFuncSeparate(le[ne],le[pe],le[re],le[Ue]),T=ne,M=pe,w=re,D=Ue),(Ce.equals(x)===!1||ht!==C)&&(n.blendColor(Ce.r,Ce.g,Ce.b,ht),x.copy(Ce),C=ht),u=G,N=!1}function We(G,he){G.side===Gn?_e(n.CULL_FACE):ee(n.CULL_FACE);let ne=G.side===Kt;he&&(ne=!ne),He(ne),G.blending===ts&&G.transparent===!1?Ee(Yn):Ee(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),a.setFunc(G.depthFunc),a.setTest(G.depthTest),a.setMask(G.depthWrite),s.setMask(G.colorWrite);const pe=G.stencilWrite;o.setTest(pe),pe&&(o.setMask(G.stencilWriteMask),o.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),o.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),$e(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?ee(n.SAMPLE_ALPHA_TO_COVERAGE):_e(n.SAMPLE_ALPHA_TO_COVERAGE)}function He(G){O!==G&&(G?n.frontFace(n.CW):n.frontFace(n.CCW),O=G)}function it(G){G!==Vg?(ee(n.CULL_FACE),G!==V&&(G===Lu?n.cullFace(n.BACK):G===Wg?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):_e(n.CULL_FACE),V=G}function Be(G){G!==E&&(F&&n.lineWidth(G),E=G)}function $e(G,he,ne){G?(ee(n.POLYGON_OFFSET_FILL),(A!==he||L!==ne)&&(A=he,L=ne,a.getReversed()&&(he=-he),n.polygonOffset(he,ne))):_e(n.POLYGON_OFFSET_FILL)}function Ze(G){G?ee(n.SCISSOR_TEST):_e(n.SCISSOR_TEST)}function mt(G){G===void 0&&(G=n.TEXTURE0+U-1),I!==G&&(n.activeTexture(G),I=G)}function z(G,he,ne){ne===void 0&&(I===null?ne=n.TEXTURE0+U-1:ne=I);let pe=X[ne];pe===void 0&&(pe={type:void 0,texture:void 0},X[ne]=pe),(pe.type!==G||pe.texture!==he)&&(I!==ne&&(n.activeTexture(ne),I=ne),n.bindTexture(G,he||Q[G]),pe.type=G,pe.texture=he)}function bt(){const G=X[I];G!==void 0&&G.type!==void 0&&(n.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function at(){try{n.compressedTexImage2D(...arguments)}catch(G){ot("WebGLState:",G)}}function R(){try{n.compressedTexImage3D(...arguments)}catch(G){ot("WebGLState:",G)}}function g(){try{n.texSubImage2D(...arguments)}catch(G){ot("WebGLState:",G)}}function B(){try{n.texSubImage3D(...arguments)}catch(G){ot("WebGLState:",G)}}function q(){try{n.compressedTexSubImage2D(...arguments)}catch(G){ot("WebGLState:",G)}}function Z(){try{n.compressedTexSubImage3D(...arguments)}catch(G){ot("WebGLState:",G)}}function ae(){try{n.texStorage2D(...arguments)}catch(G){ot("WebGLState:",G)}}function ce(){try{n.texStorage3D(...arguments)}catch(G){ot("WebGLState:",G)}}function j(){try{n.texImage2D(...arguments)}catch(G){ot("WebGLState:",G)}}function te(){try{n.texImage3D(...arguments)}catch(G){ot("WebGLState:",G)}}function ue(G){return h[G]!==void 0?h[G]:n.getParameter(G)}function Re(G,he){h[G]!==he&&(n.pixelStorei(G,he),h[G]=he)}function de(G){Me.equals(G)===!1&&(n.scissor(G.x,G.y,G.z,G.w),Me.copy(G))}function fe(G){Ne.equals(G)===!1&&(n.viewport(G.x,G.y,G.z,G.w),Ne.copy(G))}function Ie(G,he){let ne=l.get(he);ne===void 0&&(ne=new WeakMap,l.set(he,ne));let pe=ne.get(G);pe===void 0&&(pe=n.getUniformBlockIndex(he,G.name),ne.set(G,pe))}function ke(G,he){const pe=l.get(he).get(G);c.get(he)!==pe&&(n.uniformBlockBinding(he,pe,G.__bindingPointIndex),c.set(he,pe))}function Xe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),p={},h={},I=null,X={},f={},m=new WeakMap,v=[],S=null,d=!1,u=null,_=null,T=null,M=null,b=null,w=null,D=null,x=new je(0,0,0),C=0,N=!1,O=null,V=null,E=null,A=null,L=null,Me.set(0,0,n.canvas.width,n.canvas.height),Ne.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ee,disable:_e,bindFramebuffer:De,drawBuffers:H,useProgram:ie,setBlending:Ee,setMaterial:We,setFlipSided:He,setCullFace:it,setLineWidth:Be,setPolygonOffset:$e,setScissorTest:Ze,activeTexture:mt,bindTexture:z,unbindTexture:bt,compressedTexImage2D:at,compressedTexImage3D:R,texImage2D:j,texImage3D:te,pixelStorei:Re,getParameter:ue,updateUBOMapping:Ie,uniformBlockBinding:ke,texStorage2D:ae,texStorage3D:ce,texSubImage2D:g,texSubImage3D:B,compressedTexSubImage2D:q,compressedTexSubImage3D:Z,scissor:de,viewport:fe,reset:Xe}}function jM(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new et,p=new WeakMap,h=new Set;let f;const m=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(R,g){return v?new OffscreenCanvas(R,g):ya("canvas")}function d(R,g,B){let q=1;const Z=at(R);if((Z.width>B||Z.height>B)&&(q=B/Math.max(Z.width,Z.height)),q<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const ae=Math.floor(q*Z.width),ce=Math.floor(q*Z.height);f===void 0&&(f=S(ae,ce));const j=g?S(ae,ce):f;return j.width=ae,j.height=ce,j.getContext("2d").drawImage(R,0,0,ae,ce),Ge("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+ae+"x"+ce+")."),j}else return"data"in R&&Ge("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),R;return R}function u(R){return R.generateMipmaps}function _(R){n.generateMipmap(R)}function T(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(R,g,B,q,Z,ae=!1){if(R!==null){if(n[R]!==void 0)return n[R];Ge("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ce;q&&(ce=e.get("EXT_texture_norm16"),ce||Ge("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let j=g;if(g===n.RED&&(B===n.FLOAT&&(j=n.R32F),B===n.HALF_FLOAT&&(j=n.R16F),B===n.UNSIGNED_BYTE&&(j=n.R8),B===n.UNSIGNED_SHORT&&ce&&(j=ce.R16_EXT),B===n.SHORT&&ce&&(j=ce.R16_SNORM_EXT)),g===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&(j=n.R8UI),B===n.UNSIGNED_SHORT&&(j=n.R16UI),B===n.UNSIGNED_INT&&(j=n.R32UI),B===n.BYTE&&(j=n.R8I),B===n.SHORT&&(j=n.R16I),B===n.INT&&(j=n.R32I)),g===n.RG&&(B===n.FLOAT&&(j=n.RG32F),B===n.HALF_FLOAT&&(j=n.RG16F),B===n.UNSIGNED_BYTE&&(j=n.RG8),B===n.UNSIGNED_SHORT&&ce&&(j=ce.RG16_EXT),B===n.SHORT&&ce&&(j=ce.RG16_SNORM_EXT)),g===n.RG_INTEGER&&(B===n.UNSIGNED_BYTE&&(j=n.RG8UI),B===n.UNSIGNED_SHORT&&(j=n.RG16UI),B===n.UNSIGNED_INT&&(j=n.RG32UI),B===n.BYTE&&(j=n.RG8I),B===n.SHORT&&(j=n.RG16I),B===n.INT&&(j=n.RG32I)),g===n.RGB_INTEGER&&(B===n.UNSIGNED_BYTE&&(j=n.RGB8UI),B===n.UNSIGNED_SHORT&&(j=n.RGB16UI),B===n.UNSIGNED_INT&&(j=n.RGB32UI),B===n.BYTE&&(j=n.RGB8I),B===n.SHORT&&(j=n.RGB16I),B===n.INT&&(j=n.RGB32I)),g===n.RGBA_INTEGER&&(B===n.UNSIGNED_BYTE&&(j=n.RGBA8UI),B===n.UNSIGNED_SHORT&&(j=n.RGBA16UI),B===n.UNSIGNED_INT&&(j=n.RGBA32UI),B===n.BYTE&&(j=n.RGBA8I),B===n.SHORT&&(j=n.RGBA16I),B===n.INT&&(j=n.RGBA32I)),g===n.RGB&&(B===n.UNSIGNED_SHORT&&ce&&(j=ce.RGB16_EXT),B===n.SHORT&&ce&&(j=ce.RGB16_SNORM_EXT),B===n.UNSIGNED_INT_5_9_9_9_REV&&(j=n.RGB9_E5),B===n.UNSIGNED_INT_10F_11F_11F_REV&&(j=n.R11F_G11F_B10F)),g===n.RGBA){const te=ae?Ma:tt.getTransfer(Z);B===n.FLOAT&&(j=n.RGBA32F),B===n.HALF_FLOAT&&(j=n.RGBA16F),B===n.UNSIGNED_BYTE&&(j=te===ut?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT&&ce&&(j=ce.RGBA16_EXT),B===n.SHORT&&ce&&(j=ce.RGBA16_SNORM_EXT),B===n.UNSIGNED_SHORT_4_4_4_4&&(j=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&(j=n.RGB5_A1)}return(j===n.R16F||j===n.R32F||j===n.RG16F||j===n.RG32F||j===n.RGBA16F||j===n.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function b(R,g){let B;return R?g===null||g===Cn||g===ls?B=n.DEPTH24_STENCIL8:g===Tn?B=n.DEPTH32F_STENCIL8:g===cs&&(B=n.DEPTH24_STENCIL8,Ge("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Cn||g===ls?B=n.DEPTH_COMPONENT24:g===Tn?B=n.DEPTH_COMPONENT32F:g===cs&&(B=n.DEPTH_COMPONENT16),B}function w(R,g){return u(R)===!0||R.isFramebufferTexture&&R.minFilter!==Dt&&R.minFilter!==Bt?Math.log2(Math.max(g.width,g.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?g.mipmaps.length:1}function D(R){const g=R.target;g.removeEventListener("dispose",D),C(g),g.isVideoTexture&&p.delete(g),g.isHTMLTexture&&h.delete(g)}function x(R){const g=R.target;g.removeEventListener("dispose",x),O(g)}function C(R){const g=i.get(R);if(g.__webglInit===void 0)return;const B=R.source,q=m.get(B);if(q){const Z=q[g.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&N(R),Object.keys(q).length===0&&m.delete(B)}i.remove(R)}function N(R){const g=i.get(R);n.deleteTexture(g.__webglTexture);const B=R.source,q=m.get(B);delete q[g.__cacheKey],a.memory.textures--}function O(R){const g=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(g.__webglFramebuffer[q]))for(let Z=0;Z<g.__webglFramebuffer[q].length;Z++)n.deleteFramebuffer(g.__webglFramebuffer[q][Z]);else n.deleteFramebuffer(g.__webglFramebuffer[q]);g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer[q])}else{if(Array.isArray(g.__webglFramebuffer))for(let q=0;q<g.__webglFramebuffer.length;q++)n.deleteFramebuffer(g.__webglFramebuffer[q]);else n.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&n.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let q=0;q<g.__webglColorRenderbuffer.length;q++)g.__webglColorRenderbuffer[q]&&n.deleteRenderbuffer(g.__webglColorRenderbuffer[q]);g.__webglDepthRenderbuffer&&n.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const B=R.textures;for(let q=0,Z=B.length;q<Z;q++){const ae=i.get(B[q]);ae.__webglTexture&&(n.deleteTexture(ae.__webglTexture),a.memory.textures--),i.remove(B[q])}i.remove(R)}let V=0;function E(){V=0}function A(){return V}function L(R){V=R}function U(){const R=V;return R>=r.maxTextures&&Ge("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+r.maxTextures),V+=1,R}function F(R){const g=[];return g.push(R.wrapS),g.push(R.wrapT),g.push(R.wrapR||0),g.push(R.magFilter),g.push(R.minFilter),g.push(R.anisotropy),g.push(R.internalFormat),g.push(R.format),g.push(R.type),g.push(R.generateMipmaps),g.push(R.premultiplyAlpha),g.push(R.flipY),g.push(R.unpackAlignment),g.push(R.colorSpace),g.join()}function W(R,g){const B=i.get(R);if(R.isVideoTexture&&z(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&B.__version!==R.version){const q=R.image;if(q===null)Ge("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)Ge("WebGLRenderer: Texture marked for update but image is incomplete");else{_e(B,R,g);return}}else R.isExternalTexture&&(B.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+g)}function P(R,g){const B=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){_e(B,R,g);return}else R.isExternalTexture&&(B.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+g)}function I(R,g){const B=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){_e(B,R,g);return}t.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+g)}function X(R,g){const B=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&B.__version!==R.version){De(B,R,g);return}t.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+g)}const se={[sc]:n.REPEAT,[Wn]:n.CLAMP_TO_EDGE,[ac]:n.MIRRORED_REPEAT},oe={[Dt]:n.NEAREST,[d0]:n.NEAREST_MIPMAP_NEAREST,[Rs]:n.NEAREST_MIPMAP_LINEAR,[Bt]:n.LINEAR,[ao]:n.LINEAR_MIPMAP_NEAREST,[Li]:n.LINEAR_MIPMAP_LINEAR},Me={[g0]:n.NEVER,[M0]:n.ALWAYS,[_0]:n.LESS,[fl]:n.LEQUAL,[v0]:n.EQUAL,[dl]:n.GEQUAL,[x0]:n.GREATER,[S0]:n.NOTEQUAL};function Ne(R,g){if(g.type===Tn&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===Bt||g.magFilter===ao||g.magFilter===Rs||g.magFilter===Li||g.minFilter===Bt||g.minFilter===ao||g.minFilter===Rs||g.minFilter===Li)&&Ge("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,se[g.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,se[g.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,se[g.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,oe[g.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,oe[g.minFilter]),g.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,Me[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Dt||g.minFilter!==Rs&&g.minFilter!==Li||g.type===Tn&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");n.texParameterf(R,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function Oe(R,g){let B=!1;R.__webglInit===void 0&&(R.__webglInit=!0,g.addEventListener("dispose",D));const q=g.source;let Z=m.get(q);Z===void 0&&(Z={},m.set(q,Z));const ae=F(g);if(ae!==R.__cacheKey){Z[ae]===void 0&&(Z[ae]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,B=!0),Z[ae].usedTimes++;const ce=Z[R.__cacheKey];ce!==void 0&&(Z[R.__cacheKey].usedTimes--,ce.usedTimes===0&&N(g)),R.__cacheKey=ae,R.__webglTexture=Z[ae].texture}return B}function Q(R,g,B){return Math.floor(Math.floor(R/B)/g)}function ee(R,g,B,q){const ae=R.updateRanges;if(ae.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,g.width,g.height,B,q,g.data);else{ae.sort((Re,de)=>Re.start-de.start);let ce=0;for(let Re=1;Re<ae.length;Re++){const de=ae[ce],fe=ae[Re],Ie=de.start+de.count,ke=Q(fe.start,g.width,4),Xe=Q(de.start,g.width,4);fe.start<=Ie+1&&ke===Xe&&Q(fe.start+fe.count-1,g.width,4)===ke?de.count=Math.max(de.count,fe.start+fe.count-de.start):(++ce,ae[ce]=fe)}ae.length=ce+1;const j=t.getParameter(n.UNPACK_ROW_LENGTH),te=t.getParameter(n.UNPACK_SKIP_PIXELS),ue=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,g.width);for(let Re=0,de=ae.length;Re<de;Re++){const fe=ae[Re],Ie=Math.floor(fe.start/4),ke=Math.ceil(fe.count/4),Xe=Ie%g.width,G=Math.floor(Ie/g.width),he=ke,ne=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,Xe),t.pixelStorei(n.UNPACK_SKIP_ROWS,G),t.texSubImage2D(n.TEXTURE_2D,0,Xe,G,he,ne,B,q,g.data)}R.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,j),t.pixelStorei(n.UNPACK_SKIP_PIXELS,te),t.pixelStorei(n.UNPACK_SKIP_ROWS,ue)}}function _e(R,g,B){let q=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(q=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(q=n.TEXTURE_3D);const Z=Oe(R,g),ae=g.source;t.bindTexture(q,R.__webglTexture,n.TEXTURE0+B);const ce=i.get(ae);if(ae.version!==ce.__version||Z===!0){if(t.activeTexture(n.TEXTURE0+B),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){const ne=tt.getPrimaries(tt.workingColorSpace),pe=g.colorSpace===gi?null:tt.getPrimaries(g.colorSpace),ye=g.colorSpace===gi||ne===pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye)}t.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment);let te=d(g.image,!1,r.maxTextureSize);te=bt(g,te);const ue=s.convert(g.format,g.colorSpace),Re=s.convert(g.type);let de=M(g.internalFormat,ue,Re,g.normalized,g.colorSpace,g.isVideoTexture);Ne(q,g);let fe;const Ie=g.mipmaps,ke=g.isVideoTexture!==!0,Xe=ce.__version===void 0||Z===!0,G=ae.dataReady,he=w(g,te);if(g.isDepthTexture)de=b(g.format===Di,g.type),Xe&&(ke?t.texStorage2D(n.TEXTURE_2D,1,de,te.width,te.height):t.texImage2D(n.TEXTURE_2D,0,de,te.width,te.height,0,ue,Re,null));else if(g.isDataTexture)if(Ie.length>0){ke&&Xe&&t.texStorage2D(n.TEXTURE_2D,he,de,Ie[0].width,Ie[0].height);for(let ne=0,pe=Ie.length;ne<pe;ne++)fe=Ie[ne],ke?G&&t.texSubImage2D(n.TEXTURE_2D,ne,0,0,fe.width,fe.height,ue,Re,fe.data):t.texImage2D(n.TEXTURE_2D,ne,de,fe.width,fe.height,0,ue,Re,fe.data);g.generateMipmaps=!1}else ke?(Xe&&t.texStorage2D(n.TEXTURE_2D,he,de,te.width,te.height),G&&ee(g,te,ue,Re)):t.texImage2D(n.TEXTURE_2D,0,de,te.width,te.height,0,ue,Re,te.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){ke&&Xe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,he,de,Ie[0].width,Ie[0].height,te.depth);for(let ne=0,pe=Ie.length;ne<pe;ne++)if(fe=Ie[ne],g.format!==mn)if(ue!==null)if(ke){if(G)if(g.layerUpdates.size>0){const ye=of(fe.width,fe.height,g.format,g.type);for(const re of g.layerUpdates){const Ue=fe.data.subarray(re*ye/fe.data.BYTES_PER_ELEMENT,(re+1)*ye/fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ne,0,0,re,fe.width,fe.height,1,ue,Ue)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ne,0,0,0,fe.width,fe.height,te.depth,ue,fe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ne,de,fe.width,fe.height,te.depth,0,fe.data,0,0);else Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ke?G&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ne,0,0,0,fe.width,fe.height,te.depth,ue,Re,fe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ne,de,fe.width,fe.height,te.depth,0,ue,Re,fe.data);g.layerUpdates.size>0&&g.clearLayerUpdates()}else{ke&&Xe&&t.texStorage2D(n.TEXTURE_2D,he,de,Ie[0].width,Ie[0].height);for(let ne=0,pe=Ie.length;ne<pe;ne++)fe=Ie[ne],g.format!==mn?ue!==null?ke?G&&t.compressedTexSubImage2D(n.TEXTURE_2D,ne,0,0,fe.width,fe.height,ue,fe.data):t.compressedTexImage2D(n.TEXTURE_2D,ne,de,fe.width,fe.height,0,fe.data):Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?G&&t.texSubImage2D(n.TEXTURE_2D,ne,0,0,fe.width,fe.height,ue,Re,fe.data):t.texImage2D(n.TEXTURE_2D,ne,de,fe.width,fe.height,0,ue,Re,fe.data)}else if(g.isDataArrayTexture)if(ke){if(Xe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,he,de,te.width,te.height,te.depth),G)if(g.layerUpdates.size>0){const ne=of(te.width,te.height,g.format,g.type);for(const pe of g.layerUpdates){const ye=te.data.subarray(pe*ne/te.data.BYTES_PER_ELEMENT,(pe+1)*ne/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,pe,te.width,te.height,1,ue,Re,ye)}g.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,ue,Re,te.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,de,te.width,te.height,te.depth,0,ue,Re,te.data);else if(g.isData3DTexture)ke?(Xe&&t.texStorage3D(n.TEXTURE_3D,he,de,te.width,te.height,te.depth),G&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,ue,Re,te.data)):t.texImage3D(n.TEXTURE_3D,0,de,te.width,te.height,te.depth,0,ue,Re,te.data);else if(g.isFramebufferTexture){if(Xe)if(ke)t.texStorage2D(n.TEXTURE_2D,he,de,te.width,te.height);else{let ne=te.width,pe=te.height;for(let ye=0;ye<he;ye++)t.texImage2D(n.TEXTURE_2D,ye,de,ne,pe,0,ue,Re,null),ne>>=1,pe>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in n){const ne=n.canvas;if(ne.hasAttribute("layoutsubtree")||ne.setAttribute("layoutsubtree","true"),te.parentNode!==ne){ne.appendChild(te),h.add(g),ne.onpaint=pe=>{const ye=pe.changedElements;for(const re of h)ye.includes(re.image)&&(re.needsUpdate=!0)},ne.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,te);else{const ye=n.RGBA,re=n.RGBA,Ue=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,ye,re,Ue,te)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Ie.length>0){if(ke&&Xe){const ne=at(Ie[0]);t.texStorage2D(n.TEXTURE_2D,he,de,ne.width,ne.height)}for(let ne=0,pe=Ie.length;ne<pe;ne++)fe=Ie[ne],ke?G&&t.texSubImage2D(n.TEXTURE_2D,ne,0,0,ue,Re,fe):t.texImage2D(n.TEXTURE_2D,ne,de,ue,Re,fe);g.generateMipmaps=!1}else if(ke){if(Xe){const ne=at(te);t.texStorage2D(n.TEXTURE_2D,he,de,ne.width,ne.height)}G&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ue,Re,te)}else t.texImage2D(n.TEXTURE_2D,0,de,ue,Re,te);u(g)&&_(q),ce.__version=ae.version,g.onUpdate&&g.onUpdate(g)}R.__version=g.version}function De(R,g,B){if(g.image.length!==6)return;const q=Oe(R,g),Z=g.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+B);const ae=i.get(Z);if(Z.version!==ae.__version||q===!0){t.activeTexture(n.TEXTURE0+B);const ce=tt.getPrimaries(tt.workingColorSpace),j=g.colorSpace===gi?null:tt.getPrimaries(g.colorSpace),te=g.colorSpace===gi||ce===j?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);const ue=g.isCompressedTexture||g.image[0].isCompressedTexture,Re=g.image[0]&&g.image[0].isDataTexture,de=[];for(let re=0;re<6;re++)!ue&&!Re?de[re]=d(g.image[re],!0,r.maxCubemapSize):de[re]=Re?g.image[re].image:g.image[re],de[re]=bt(g,de[re]);const fe=de[0],Ie=s.convert(g.format,g.colorSpace),ke=s.convert(g.type),Xe=M(g.internalFormat,Ie,ke,g.normalized,g.colorSpace),G=g.isVideoTexture!==!0,he=ae.__version===void 0||q===!0,ne=Z.dataReady;let pe=w(g,fe);Ne(n.TEXTURE_CUBE_MAP,g);let ye;if(ue){G&&he&&t.texStorage2D(n.TEXTURE_CUBE_MAP,pe,Xe,fe.width,fe.height);for(let re=0;re<6;re++){ye=de[re].mipmaps;for(let Ue=0;Ue<ye.length;Ue++){const Ce=ye[Ue];g.format!==mn?Ie!==null?G?ne&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ue,0,0,Ce.width,Ce.height,Ie,Ce.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ue,Xe,Ce.width,Ce.height,0,Ce.data):Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ue,0,0,Ce.width,Ce.height,Ie,ke,Ce.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ue,Xe,Ce.width,Ce.height,0,Ie,ke,Ce.data)}}}else{if(ye=g.mipmaps,G&&he){ye.length>0&&pe++;const re=at(de[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,pe,Xe,re.width,re.height)}for(let re=0;re<6;re++)if(Re){G?ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,de[re].width,de[re].height,Ie,ke,de[re].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Xe,de[re].width,de[re].height,0,Ie,ke,de[re].data);for(let Ue=0;Ue<ye.length;Ue++){const ht=ye[Ue].image[re].image;G?ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ue+1,0,0,ht.width,ht.height,Ie,ke,ht.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ue+1,Xe,ht.width,ht.height,0,Ie,ke,ht.data)}}else{G?ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Ie,ke,de[re]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Xe,Ie,ke,de[re]);for(let Ue=0;Ue<ye.length;Ue++){const Ce=ye[Ue];G?ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ue+1,0,0,Ie,ke,Ce.image[re]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ue+1,Xe,Ie,ke,Ce.image[re])}}}u(g)&&_(n.TEXTURE_CUBE_MAP),ae.__version=Z.version,g.onUpdate&&g.onUpdate(g)}R.__version=g.version}function H(R,g,B,q,Z,ae){const ce=s.convert(B.format,B.colorSpace),j=s.convert(B.type),te=M(B.internalFormat,ce,j,B.normalized,B.colorSpace),ue=i.get(g),Re=i.get(B);if(Re.__renderTarget=g,!ue.__hasExternalTextures){const de=Math.max(1,g.width>>ae),fe=Math.max(1,g.height>>ae);Z===n.TEXTURE_3D||Z===n.TEXTURE_2D_ARRAY?t.texImage3D(Z,ae,te,de,fe,g.depth,0,ce,j,null):t.texImage2D(Z,ae,te,de,fe,0,ce,j,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),mt(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,q,Z,Re.__webglTexture,0,Ze(g)):(Z===n.TEXTURE_2D||Z>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,q,Z,Re.__webglTexture,ae),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ie(R,g,B){if(n.bindRenderbuffer(n.RENDERBUFFER,R),g.depthBuffer){const q=g.depthTexture,Z=q&&q.isDepthTexture?q.type:null,ae=b(g.stencilBuffer,Z),ce=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;mt(g)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ze(g),ae,g.width,g.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ze(g),ae,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,ae,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ce,n.RENDERBUFFER,R)}else{const q=g.textures;for(let Z=0;Z<q.length;Z++){const ae=q[Z],ce=s.convert(ae.format,ae.colorSpace),j=s.convert(ae.type),te=M(ae.internalFormat,ce,j,ae.normalized,ae.colorSpace);mt(g)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ze(g),te,g.width,g.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ze(g),te,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,te,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function me(R,g,B){const q=g.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Z=i.get(g.depthTexture);if(Z.__renderTarget=g,(!Z.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),q){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,g.depthTexture.addEventListener("dispose",D)),Z.__webglTexture===void 0){Z.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),Ne(n.TEXTURE_CUBE_MAP,g.depthTexture);const ue=s.convert(g.depthTexture.format),Re=s.convert(g.depthTexture.type);let de;g.depthTexture.format===Zn?de=n.DEPTH_COMPONENT24:g.depthTexture.format===Di&&(de=n.DEPTH24_STENCIL8);for(let fe=0;fe<6;fe++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,de,g.width,g.height,0,ue,Re,null)}}else W(g.depthTexture,0);const ae=Z.__webglTexture,ce=Ze(g),j=q?n.TEXTURE_CUBE_MAP_POSITIVE_X+B:n.TEXTURE_2D,te=g.depthTexture.format===Di?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(g.depthTexture.format===Zn)mt(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,te,j,ae,0,ce):n.framebufferTexture2D(n.FRAMEBUFFER,te,j,ae,0);else if(g.depthTexture.format===Di)mt(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,te,j,ae,0,ce):n.framebufferTexture2D(n.FRAMEBUFFER,te,j,ae,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function le(R){const g=i.get(R),B=R.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==R.depthTexture){const q=R.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),q){const Z=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,q.removeEventListener("dispose",Z)};q.addEventListener("dispose",Z),g.__depthDisposeCallback=Z}g.__boundDepthTexture=q}if(R.depthTexture&&!g.__autoAllocateDepthBuffer)if(B)for(let q=0;q<6;q++)me(g.__webglFramebuffer[q],R,q);else{const q=R.texture.mipmaps;q&&q.length>0?me(g.__webglFramebuffer[0],R,0):me(g.__webglFramebuffer,R,0)}else if(B){g.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[q]),g.__webglDepthbuffer[q]===void 0)g.__webglDepthbuffer[q]=n.createRenderbuffer(),ie(g.__webglDepthbuffer[q],R,!1);else{const Z=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ae=g.__webglDepthbuffer[q];n.bindRenderbuffer(n.RENDERBUFFER,ae),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,ae)}}else{const q=R.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=n.createRenderbuffer(),ie(g.__webglDepthbuffer,R,!1);else{const Z=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ae=g.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ae),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,ae)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ee(R,g,B){const q=i.get(R);g!==void 0&&H(q.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&le(R)}function We(R){const g=R.texture,B=i.get(R),q=i.get(g);R.addEventListener("dispose",x);const Z=R.textures,ae=R.isWebGLCubeRenderTarget===!0,ce=Z.length>1;if(ce||(q.__webglTexture===void 0&&(q.__webglTexture=n.createTexture()),q.__version=g.version,a.memory.textures++),ae){B.__webglFramebuffer=[];for(let j=0;j<6;j++)if(g.mipmaps&&g.mipmaps.length>0){B.__webglFramebuffer[j]=[];for(let te=0;te<g.mipmaps.length;te++)B.__webglFramebuffer[j][te]=n.createFramebuffer()}else B.__webglFramebuffer[j]=n.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){B.__webglFramebuffer=[];for(let j=0;j<g.mipmaps.length;j++)B.__webglFramebuffer[j]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(ce)for(let j=0,te=Z.length;j<te;j++){const ue=i.get(Z[j]);ue.__webglTexture===void 0&&(ue.__webglTexture=n.createTexture(),a.memory.textures++)}if(R.samples>0&&mt(R)===!1){B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let j=0;j<Z.length;j++){const te=Z[j];B.__webglColorRenderbuffer[j]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[j]);const ue=s.convert(te.format,te.colorSpace),Re=s.convert(te.type),de=M(te.internalFormat,ue,Re,te.normalized,te.colorSpace,R.isXRRenderTarget===!0),fe=Ze(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,fe,de,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+j,n.RENDERBUFFER,B.__webglColorRenderbuffer[j])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),ie(B.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ae){t.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture),Ne(n.TEXTURE_CUBE_MAP,g);for(let j=0;j<6;j++)if(g.mipmaps&&g.mipmaps.length>0)for(let te=0;te<g.mipmaps.length;te++)H(B.__webglFramebuffer[j][te],R,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+j,te);else H(B.__webglFramebuffer[j],R,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);u(g)&&_(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ce){for(let j=0,te=Z.length;j<te;j++){const ue=Z[j],Re=i.get(ue);let de=n.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(de=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(de,Re.__webglTexture),Ne(de,ue),H(B.__webglFramebuffer,R,ue,n.COLOR_ATTACHMENT0+j,de,0),u(ue)&&_(de)}t.unbindTexture()}else{let j=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(j=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(j,q.__webglTexture),Ne(j,g),g.mipmaps&&g.mipmaps.length>0)for(let te=0;te<g.mipmaps.length;te++)H(B.__webglFramebuffer[te],R,g,n.COLOR_ATTACHMENT0,j,te);else H(B.__webglFramebuffer,R,g,n.COLOR_ATTACHMENT0,j,0);u(g)&&_(j),t.unbindTexture()}R.depthBuffer&&le(R)}function He(R){const g=R.textures;for(let B=0,q=g.length;B<q;B++){const Z=g[B];if(u(Z)){const ae=T(R),ce=i.get(Z).__webglTexture;t.bindTexture(ae,ce),_(ae),t.unbindTexture()}}}const it=[],Be=[];function $e(R){if(R.samples>0){if(mt(R)===!1){const g=R.textures,B=R.width,q=R.height;let Z=n.COLOR_BUFFER_BIT;const ae=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=i.get(R),j=g.length>1;if(j)for(let ue=0;ue<g.length;ue++)t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer);const te=R.texture.mipmaps;te&&te.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ce.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let ue=0;ue<g.length;ue++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Z|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Z|=n.STENCIL_BUFFER_BIT)),j){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ce.__webglColorRenderbuffer[ue]);const Re=i.get(g[ue]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Re,0)}n.blitFramebuffer(0,0,B,q,0,0,B,q,Z,n.NEAREST),c===!0&&(it.length=0,Be.length=0,it.push(n.COLOR_ATTACHMENT0+ue),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&(it.push(ae),Be.push(ae),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Be)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,it))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),j)for(let ue=0;ue<g.length;ue++){t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,ce.__webglColorRenderbuffer[ue]);const Re=i.get(g[ue]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.TEXTURE_2D,Re,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&c){const g=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[g])}}}function Ze(R){return Math.min(r.maxSamples,R.samples)}function mt(R){const g=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function z(R){const g=a.render.frame;p.get(R)!==g&&(p.set(R,g),R.update())}function bt(R,g){const B=R.colorSpace,q=R.format,Z=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||B!==Sa&&B!==gi&&(tt.getTransfer(B)===ut?(q!==mn||Z!==en)&&Ge("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ot("WebGLTextures: Unsupported texture color space:",B)),g}function at(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=U,this.resetTextureUnits=E,this.getTextureUnits=A,this.setTextureUnits=L,this.setTexture2D=W,this.setTexture2DArray=P,this.setTexture3D=I,this.setTextureCube=X,this.rebindTextures=Ee,this.setupRenderTarget=We,this.updateRenderTargetMipmap=He,this.updateMultisampleRenderTarget=$e,this.setupDepthRenderbuffer=le,this.setupFrameBufferTexture=H,this.useMultisampledRTT=mt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function ey(n,e){function t(i,r=gi){let s;const a=tt.getTransfer(r);if(i===en)return n.UNSIGNED_BYTE;if(i===al)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ol)return n.UNSIGNED_SHORT_5_5_5_1;if(i===sh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===ah)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===ih)return n.BYTE;if(i===rh)return n.SHORT;if(i===cs)return n.UNSIGNED_SHORT;if(i===sl)return n.INT;if(i===Cn)return n.UNSIGNED_INT;if(i===Tn)return n.FLOAT;if(i===Pn)return n.HALF_FLOAT;if(i===oh)return n.ALPHA;if(i===ch)return n.RGB;if(i===mn)return n.RGBA;if(i===Zn)return n.DEPTH_COMPONENT;if(i===Di)return n.DEPTH_STENCIL;if(i===lh)return n.RED;if(i===cl)return n.RED_INTEGER;if(i===ki)return n.RG;if(i===ll)return n.RG_INTEGER;if(i===ul)return n.RGBA_INTEGER;if(i===sa||i===aa||i===oa||i===ca)if(a===ut)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===sa)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===aa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===oa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ca)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===sa)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===aa)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===oa)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ca)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===oc||i===cc||i===lc||i===uc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===oc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===cc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===lc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===uc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===fc||i===dc||i===hc||i===pc||i===mc||i===va||i===gc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===fc||i===dc)return a===ut?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===hc)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===pc)return s.COMPRESSED_R11_EAC;if(i===mc)return s.COMPRESSED_SIGNED_R11_EAC;if(i===va)return s.COMPRESSED_RG11_EAC;if(i===gc)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===_c||i===vc||i===xc||i===Sc||i===Mc||i===yc||i===Ec||i===bc||i===Tc||i===wc||i===Ac||i===Rc||i===Cc||i===Pc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===_c)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===vc)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===xc)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Sc)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Mc)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===yc)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ec)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===bc)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Tc)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===wc)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ac)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Rc)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Cc)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Pc)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Lc||i===Dc||i===Ic)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Lc)return a===ut?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Dc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ic)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Uc||i===Nc||i===xa||i===Fc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Uc)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Nc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===xa)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Fc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ls?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const ty=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ny=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class iy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Sh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Ln({vertexShader:ty,fragmentShader:ny,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Mt(new Ba(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ry extends Vi{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,p=null,h=null,f=null,m=null,v=null;const S=typeof XRWebGLBinding<"u",d=new iy,u={},_=t.getContextAttributes();let T=null,M=null;const b=[],w=[],D=new et;let x=null,C=null;const N=new on;N.viewport=new vt;const O=new on;O.viewport=new vt;const V=[N,O],E=new d_;let A=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ee=b[Q];return ee===void 0&&(ee=new go,b[Q]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(Q){let ee=b[Q];return ee===void 0&&(ee=new go,b[Q]=ee),ee.getGripSpace()},this.getHand=function(Q){let ee=b[Q];return ee===void 0&&(ee=new go,b[Q]=ee),ee.getHandSpace()};function U(Q){const ee=w.indexOf(Q.inputSource);if(ee===-1)return;const _e=b[ee];_e!==void 0&&(_e.update(Q.inputSource,Q.frame,l||a),_e.dispatchEvent({type:Q.type,data:Q.inputSource}))}function F(){r.removeEventListener("select",U),r.removeEventListener("selectstart",U),r.removeEventListener("selectend",U),r.removeEventListener("squeeze",U),r.removeEventListener("squeezestart",U),r.removeEventListener("squeezeend",U),r.removeEventListener("end",F),r.removeEventListener("inputsourceschange",W);for(let Q=0;Q<b.length;Q++){const ee=w[Q];ee!==null&&(w[Q]=null,b[Q].disconnect(ee))}A=null,L=null,d.reset();for(const Q in u)delete u[Q];if(e.setRenderTarget(T),m=null,f=null,h=null,r=null,M=null,Oe.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(D.width,D.height,!1),C!==null){const Q=C.camera;Q.fov=C.fov,Q.zoom=C.zoom,Q.updateProjectionMatrix(),C=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){s=Q,i.isPresenting===!0&&Ge("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,i.isPresenting===!0&&Ge("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Q){l=Q},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return h===null&&S&&(h=new XRWebGLBinding(r,t)),h},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(Q){if(r=Q,r!==null){if(T=e.getRenderTarget(),r.addEventListener("select",U),r.addEventListener("selectstart",U),r.addEventListener("selectend",U),r.addEventListener("squeeze",U),r.addEventListener("squeezestart",U),r.addEventListener("squeezeend",U),r.addEventListener("end",F),r.addEventListener("inputsourceschange",W),_.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(D),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,De=null,H=null;_.depth&&(H=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=_.stencil?Di:Zn,De=_.stencil?ls:Cn);const ie={colorFormat:t.RGBA8,depthFormat:H,scaleFactor:s};h=this.getBinding(),f=h.createProjectionLayer(ie),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),M=new _n(f.textureWidth,f.textureHeight,{format:mn,type:en,depthTexture:new fs(f.textureWidth,f.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{const _e={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,_e),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),M=new _n(m.framebufferWidth,m.framebufferHeight,{format:mn,type:en,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),Oe.setContext(r),Oe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return d.getDepthTexture()};function W(Q){for(let ee=0;ee<Q.removed.length;ee++){const _e=Q.removed[ee],De=w.indexOf(_e);De>=0&&(w[De]=null,b[De].disconnect(_e))}for(let ee=0;ee<Q.added.length;ee++){const _e=Q.added[ee];let De=w.indexOf(_e);if(De===-1){for(let ie=0;ie<b.length;ie++)if(ie>=w.length){w.push(_e),De=ie;break}else if(w[ie]===null){w[ie]=_e,De=ie;break}if(De===-1)break}const H=b[De];H&&H.connect(_e)}}const P=new $,I=new $;function X(Q,ee,_e){P.setFromMatrixPosition(ee.matrixWorld),I.setFromMatrixPosition(_e.matrixWorld);const De=P.distanceTo(I),H=ee.projectionMatrix.elements,ie=_e.projectionMatrix.elements,me=H[14]/(H[10]-1),le=H[14]/(H[10]+1),Ee=(H[9]+1)/H[5],We=(H[9]-1)/H[5],He=(H[8]-1)/H[0],it=(ie[8]+1)/ie[0],Be=me*He,$e=me*it,Ze=De/(-He+it),mt=Ze*-He;if(ee.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(mt),Q.translateZ(Ze),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),H[10]===-1)Q.projectionMatrix.copy(ee.projectionMatrix),Q.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const z=me+Ze,bt=le+Ze,at=Be-mt,R=$e+(De-mt),g=Ee*le/bt*z,B=We*le/bt*z;Q.projectionMatrix.makePerspective(at,R,g,B,z,bt),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function se(Q,ee){ee===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ee.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(r===null)return;let ee=Q.near,_e=Q.far;d.texture!==null&&(d.depthNear>0&&(ee=d.depthNear),d.depthFar>0&&(_e=d.depthFar)),E.near=O.near=N.near=ee,E.far=O.far=N.far=_e,(A!==E.near||L!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),A=E.near,L=E.far),E.layers.mask=Q.layers.mask|6,N.layers.mask=E.layers.mask&-5,O.layers.mask=E.layers.mask&-3;const De=Q.parent,H=E.cameras;se(E,De);for(let ie=0;ie<H.length;ie++)se(H[ie],De);H.length===2?X(E,N,O):E.projectionMatrix.copy(N.projectionMatrix),C===null&&Q.isPerspectiveCamera&&(C={camera:Q,fov:Q.fov,zoom:Q.zoom}),oe(Q,E,De)};function oe(Q,ee,_e){_e===null?Q.matrix.copy(ee.matrixWorld):(Q.matrix.copy(_e.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ee.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ee.projectionMatrix),Q.projectionMatrixInverse.copy(ee.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Bc*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(f===null&&m===null))return c},this.setFoveation=function(Q){c=Q,f!==null&&(f.fixedFoveation=Q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Q)},this.hasDepthSensing=function(){return d.texture!==null},this.getDepthSensingMesh=function(){return d.getMesh(E)},this.getCameraTexture=function(Q){return u[Q]};let Me=null;function Ne(Q,ee){if(p=ee.getViewerPose(l||a),v=ee,p!==null){const _e=p.views;m!==null&&(e.setRenderTargetFramebuffer(M,m.framebuffer),e.setRenderTarget(M));let De=!1;_e.length!==E.cameras.length&&(E.cameras.length=0,De=!0);for(let le=0;le<_e.length;le++){const Ee=_e[le];let We=null;if(m!==null)We=m.getViewport(Ee);else{const it=h.getViewSubImage(f,Ee);We=it.viewport,le===0&&(e.setRenderTargetTextures(M,it.colorTexture,it.depthStencilTexture),e.setRenderTarget(M))}let He=V[le];He===void 0&&(He=new on,He.layers.enable(le),He.viewport=new vt,V[le]=He),He.matrix.fromArray(Ee.transform.matrix),He.matrix.decompose(He.position,He.quaternion,He.scale),He.projectionMatrix.fromArray(Ee.projectionMatrix),He.projectionMatrixInverse.copy(He.projectionMatrix).invert(),He.viewport.set(We.x,We.y,We.width,We.height),le===0&&(E.matrix.copy(He.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),De===!0&&E.cameras.push(He)}const H=r.enabledFeatures;if(H&&H.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&S){h=i.getBinding();const le=h.getDepthInformation(_e[0]);le&&le.isValid&&le.texture&&d.init(le,r.renderState)}if(H&&H.includes("camera-access")&&S){e.state.unbindTexture(),h=i.getBinding();for(let le=0;le<_e.length;le++){const Ee=_e[le].camera;if(Ee){let We=u[Ee];We||(We=new Sh,u[Ee]=We);const He=h.getCameraImage(Ee);We.sourceTexture=He}}}}for(let _e=0;_e<b.length;_e++){const De=w[_e],H=b[_e];De!==null&&H!==void 0&&H.update(De,ee,l||a)}Me&&Me(Q,ee),ee.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ee}),v=null}const Oe=new bh;Oe.setAnimationLoop(Ne),this.setAnimationLoop=function(Q){Me=Q},this.dispose=function(){}}}const sy=new xt,Lh=new Ve;Lh.set(-1,0,0,0,1,0,0,0,1);function ay(n,e){function t(d,u){d.matrixAutoUpdate===!0&&d.updateMatrix(),u.value.copy(d.matrix)}function i(d,u){u.color.getRGB(d.fogColor.value,Mh(n)),u.isFog?(d.fogNear.value=u.near,d.fogFar.value=u.far):u.isFogExp2&&(d.fogDensity.value=u.density)}function r(d,u,_,T,M){u.isNodeMaterial?u.uniformsNeedUpdate=!1:u.isMeshBasicMaterial?s(d,u):u.isMeshLambertMaterial?(s(d,u),u.envMap&&(d.envMapIntensity.value=u.envMapIntensity)):u.isMeshToonMaterial?(s(d,u),h(d,u)):u.isMeshPhongMaterial?(s(d,u),p(d,u),u.envMap&&(d.envMapIntensity.value=u.envMapIntensity)):u.isMeshStandardMaterial?(s(d,u),f(d,u),u.isMeshPhysicalMaterial&&m(d,u,M)):u.isMeshMatcapMaterial?(s(d,u),v(d,u)):u.isMeshDepthMaterial?s(d,u):u.isMeshDistanceMaterial?(s(d,u),S(d,u)):u.isMeshNormalMaterial?s(d,u):u.isLineBasicMaterial?(a(d,u),u.isLineDashedMaterial&&o(d,u)):u.isPointsMaterial?c(d,u,_,T):u.isSpriteMaterial?l(d,u):u.isShadowMaterial?(d.color.value.copy(u.color),d.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(d,u){d.opacity.value=u.opacity,u.color&&d.diffuse.value.copy(u.color),u.emissive&&d.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(d.map.value=u.map,t(u.map,d.mapTransform)),u.alphaMap&&(d.alphaMap.value=u.alphaMap,t(u.alphaMap,d.alphaMapTransform)),u.bumpMap&&(d.bumpMap.value=u.bumpMap,t(u.bumpMap,d.bumpMapTransform),d.bumpScale.value=u.bumpScale,u.side===Kt&&(d.bumpScale.value*=-1)),u.normalMap&&(d.normalMap.value=u.normalMap,t(u.normalMap,d.normalMapTransform),d.normalScale.value.copy(u.normalScale),u.side===Kt&&d.normalScale.value.negate()),u.displacementMap&&(d.displacementMap.value=u.displacementMap,t(u.displacementMap,d.displacementMapTransform),d.displacementScale.value=u.displacementScale,d.displacementBias.value=u.displacementBias),u.emissiveMap&&(d.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,d.emissiveMapTransform)),u.specularMap&&(d.specularMap.value=u.specularMap,t(u.specularMap,d.specularMapTransform)),u.alphaTest>0&&(d.alphaTest.value=u.alphaTest);const _=e.get(u),T=_.envMap,M=_.envMapRotation;T&&(d.envMap.value=T,d.envMapRotation.value.setFromMatrix4(sy.makeRotationFromEuler(M)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&d.envMapRotation.value.premultiply(Lh),d.reflectivity.value=u.reflectivity,d.ior.value=u.ior,d.refractionRatio.value=u.refractionRatio),u.lightMap&&(d.lightMap.value=u.lightMap,d.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,d.lightMapTransform)),u.aoMap&&(d.aoMap.value=u.aoMap,d.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,d.aoMapTransform))}function a(d,u){d.diffuse.value.copy(u.color),d.opacity.value=u.opacity,u.map&&(d.map.value=u.map,t(u.map,d.mapTransform))}function o(d,u){d.dashSize.value=u.dashSize,d.totalSize.value=u.dashSize+u.gapSize,d.scale.value=u.scale}function c(d,u,_,T){d.diffuse.value.copy(u.color),d.opacity.value=u.opacity,d.size.value=u.size*_,d.scale.value=T*.5,u.map&&(d.map.value=u.map,t(u.map,d.uvTransform)),u.alphaMap&&(d.alphaMap.value=u.alphaMap,t(u.alphaMap,d.alphaMapTransform)),u.alphaTest>0&&(d.alphaTest.value=u.alphaTest)}function l(d,u){d.diffuse.value.copy(u.color),d.opacity.value=u.opacity,d.rotation.value=u.rotation,u.map&&(d.map.value=u.map,t(u.map,d.mapTransform)),u.alphaMap&&(d.alphaMap.value=u.alphaMap,t(u.alphaMap,d.alphaMapTransform)),u.alphaTest>0&&(d.alphaTest.value=u.alphaTest)}function p(d,u){d.specular.value.copy(u.specular),d.shininess.value=Math.max(u.shininess,1e-4)}function h(d,u){u.gradientMap&&(d.gradientMap.value=u.gradientMap)}function f(d,u){d.metalness.value=u.metalness,u.metalnessMap&&(d.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,d.metalnessMapTransform)),d.roughness.value=u.roughness,u.roughnessMap&&(d.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,d.roughnessMapTransform)),u.envMap&&(d.envMapIntensity.value=u.envMapIntensity)}function m(d,u,_){d.ior.value=u.ior,u.sheen>0&&(d.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),d.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(d.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,d.sheenColorMapTransform)),u.sheenRoughnessMap&&(d.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,d.sheenRoughnessMapTransform))),u.clearcoat>0&&(d.clearcoat.value=u.clearcoat,d.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(d.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,d.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(d.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Kt&&d.clearcoatNormalScale.value.negate())),u.dispersion>0&&(d.dispersion.value=u.dispersion),u.retroreflectivity>0&&(d.retroreflectivity.value=u.retroreflectivity),u.iridescence>0&&(d.iridescence.value=u.iridescence,d.iridescenceIOR.value=u.iridescenceIOR,d.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(d.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,d.iridescenceMapTransform)),u.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),u.transmission>0&&(d.transmission.value=u.transmission,d.transmissionSamplerMap.value=_.texture,d.transmissionSamplerSize.value.set(_.width,_.height),u.transmissionMap&&(d.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,d.transmissionMapTransform)),d.thickness.value=u.thickness,u.thicknessMap&&(d.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=u.attenuationDistance,d.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(d.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(d.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=u.specularIntensity,d.specularColor.value.copy(u.specularColor),u.specularColorMap&&(d.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,d.specularColorMapTransform)),u.specularIntensityMap&&(d.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,d.specularIntensityMapTransform))}function v(d,u){u.matcap&&(d.matcap.value=u.matcap)}function S(d,u){const _=e.get(u).light;d.referencePosition.value.setFromMatrixPosition(_.matrixWorld),d.nearDistance.value=_.shadow.camera.near,d.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function oy(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,b){const w=b.program;i.uniformBlockBinding(M,w)}function l(M,b){let w=r[M.id];w===void 0&&(d(M),w=p(M),r[M.id]=w,M.addEventListener("dispose",_));const D=b.program;i.updateUBOMapping(M,D);const x=e.render.frame;s[M.id]!==x&&(f(M),s[M.id]=x)}function p(M){const b=h();M.__bindingPointIndex=b;const w=n.createBuffer(),D=M.__size,x=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,w),n.bufferData(n.UNIFORM_BUFFER,D,x),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,w),w}function h(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return ot("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const b=r[M.id],w=M.uniforms,D=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let x=0,C=w.length;x<C;x++){const N=w[x];if(Array.isArray(N))for(let O=0,V=N.length;O<V;O++)m(N[O],x,O,D);else m(N,x,0,D)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(M,b,w,D){if(S(M,b,w,D)===!0){const x=M.__offset,C=M.value;if(Array.isArray(C)){let N=0;for(let O=0;O<C.length;O++){const V=C[O],E=u(V);v(V,M.__data,N),typeof V!="number"&&typeof V!="boolean"&&!V.isMatrix3&&!ArrayBuffer.isView(V)&&(N+=E.storage/Float32Array.BYTES_PER_ELEMENT)}}else v(C,M.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,x,M.__data)}}function v(M,b,w){typeof M=="number"||typeof M=="boolean"?b[0]=M:M.isMatrix3?(b[0]=M.elements[0],b[1]=M.elements[1],b[2]=M.elements[2],b[3]=0,b[4]=M.elements[3],b[5]=M.elements[4],b[6]=M.elements[5],b[7]=0,b[8]=M.elements[6],b[9]=M.elements[7],b[10]=M.elements[8],b[11]=0):ArrayBuffer.isView(M)?b.set(new M.constructor(M.buffer,M.byteOffset,b.length)):M.toArray(b,w)}function S(M,b,w,D){const x=M.value,C=b+"_"+w;if(D[C]===void 0)return typeof x=="number"||typeof x=="boolean"?D[C]=x:ArrayBuffer.isView(x)?D[C]=x.slice():D[C]=x.clone(),!0;{const N=D[C];if(typeof x=="number"||typeof x=="boolean"){if(N!==x)return D[C]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(N.equals(x)===!1)return N.copy(x),!0}}return!1}function d(M){const b=M.uniforms;let w=0;const D=16;for(let C=0,N=b.length;C<N;C++){const O=Array.isArray(b[C])?b[C]:[b[C]];for(let V=0,E=O.length;V<E;V++){const A=O[V],L=Array.isArray(A.value)?A.value:[A.value];for(let U=0,F=L.length;U<F;U++){const W=L[U],P=u(W),I=w%D,X=I%P.boundary,se=I+X;w+=X,se!==0&&D-se<P.storage&&(w+=D-se),A.__data=new Float32Array(P.storage/Float32Array.BYTES_PER_ELEMENT),A.__offset=w,w+=P.storage}}}const x=w%D;return x>0&&(w+=D-x),M.__size=w,M.__cache={},this}function u(M){const b={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(b.boundary=4,b.storage=4):M.isVector2?(b.boundary=8,b.storage=8):M.isVector3||M.isColor?(b.boundary=16,b.storage=12):M.isVector4?(b.boundary=16,b.storage=16):M.isMatrix3?(b.boundary=48,b.storage=48):M.isMatrix4?(b.boundary=64,b.storage=64):M.isTexture?Ge("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(b.boundary=16,b.storage=M.byteLength):Ge("WebGLRenderer: Unsupported uniform value type.",M),b}function _(M){const b=M.target;b.removeEventListener("dispose",_);const w=a.indexOf(b.__bindingPointIndex);a.splice(w,1),n.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function T(){for(const M in r)n.deleteBuffer(r[M]);a=[],r={},s={}}return{bind:c,update:l,dispose:T}}const cy=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let yn=null;function ly(){return yn===null&&(yn=new $0(cy,16,16,ki,Pn),yn.name="DFG_LUT",yn.minFilter=Bt,yn.magFilter=Bt,yn.wrapS=Wn,yn.wrapT=Wn,yn.generateMipmaps=!1,yn.needsUpdate=!0),yn}class uy{constructor(e={}){const{canvas:t=b0(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:m=en}=e;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=a;const S=m,d=new Set([ul,ll,cl]),u=new Set([en,Cn,cs,ls,al,ol]),_=new Uint32Array(4),T=new Int32Array(4),M=new $;let b=null,w=null;const D=[],x=[];let C=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=An,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const N=this;let O=!1,V=null,E=null,A=null,L=null;this._outputColorSpace=qt;let U=0,F=0,W=null,P=-1,I=null;const X=new vt,se=new vt;let oe=null;const Me=new je(0);let Ne=0,Oe=t.width,Q=t.height,ee=1,_e=null,De=null;const H=new vt(0,0,Oe,Q),ie=new vt(0,0,Oe,Q);let me=!1;const le=new ml;let Ee=!1,We=!1;const He=new xt,it=new $,Be=new vt,$e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ze=!1;function mt(){return W===null?ee:1}let z=i;function bt(y,k){return t.getContext(y,k)}let at,R,g,B,q,Z,ae,ce,j,te,ue,Re,de,fe,Ie,ke,Xe,G,he,ne,pe,ye,re;try{const y={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:p,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${rl}`),t.addEventListener("webglcontextlost",ht,!1),t.addEventListener("webglcontextrestored",ct,!1),t.addEventListener("webglcontextcreationerror",ln,!1),z===null){const k="webgl2";if(z=bt(k,y),z===null)throw bt(k)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ue()}catch(y){throw t.removeEventListener("webglcontextlost",ht,!1),t.removeEventListener("webglcontextrestored",ct,!1),t.removeEventListener("webglcontextcreationerror",ln,!1),ot("WebGLRenderer: "+y.message),y}function Ue(){at=new lS(z),at.init(),pe=new ey(z,at),R=new jx(z,at,e,pe),g=new QM(z,at),R.reversedDepthBuffer&&f&&g.buffers.depth.setReversed(!0),E=z.createFramebuffer(),A=z.createFramebuffer(),L=z.createFramebuffer(),B=new dS(z),q=new BM,Z=new jM(z,at,g,q,R,pe,B),ae=new cS(N),ce=new p_(z),ye=new Jx(z,ce),j=new uS(z,ce,B,ye),te=new pS(z,j,ce,ye,B),G=new hS(z,R,Z),Ie=new eS(q),ue=new OM(N,ae,at,R,ye,Ie),Re=new ay(N,q),de=new zM,fe=new qM(at),Xe=new Zx(N,ae,g,te,v,c),ke=new JM(N,te,R),re=new oy(z,B,R,g),he=new Qx(z,at,B),ne=new fS(z,at,B),B.programs=ue.programs,N.capabilities=R,N.extensions=at,N.properties=q,N.renderLists=de,N.shadowMap=ke,N.state=g,N.info=B}S!==en&&(C=new gS(S,t.width,t.height,o,r,s));const Ce=new ry(N,z);this.xr=Ce,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const y=at.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=at.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(y){y!==void 0&&(ee=y,this.setSize(Oe,Q,!1))},this.getSize=function(y){return y.set(Oe,Q)},this.setSize=function(y,k,J=!0){if(Ce.isPresenting){Ge("WebGLRenderer: Can't change size while VR device is presenting.");return}Oe=y,Q=k,t.width=Math.floor(y*ee),t.height=Math.floor(k*ee),J===!0&&(t.style.width=y+"px",t.style.height=k+"px"),C!==null&&C.setSize(t.width,t.height),this.setViewport(0,0,y,k)},this.getDrawingBufferSize=function(y){return y.set(Oe*ee,Q*ee).floor()},this.setDrawingBufferSize=function(y,k,J){Oe=y,Q=k,ee=J,t.width=Math.floor(y*J),t.height=Math.floor(k*J),this.setViewport(0,0,y,k)},this.setEffects=function(y){if(S===en){ot("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let k=0;k<y.length;k++)if(y[k].isOutputPass===!0){Ge("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(X)},this.getViewport=function(y){return y.copy(H)},this.setViewport=function(y,k,J,Y){y.isVector4?H.set(y.x,y.y,y.z,y.w):H.set(y,k,J,Y),g.viewport(X.copy(H).multiplyScalar(ee).round())},this.getScissor=function(y){return y.copy(ie)},this.setScissor=function(y,k,J,Y){y.isVector4?ie.set(y.x,y.y,y.z,y.w):ie.set(y,k,J,Y),g.scissor(se.copy(ie).multiplyScalar(ee).round())},this.getScissorTest=function(){return me},this.setScissorTest=function(y){g.setScissorTest(me=y)},this.setOpaqueSort=function(y){_e=y},this.setTransparentSort=function(y){De=y},this.getClearColor=function(y){return y.copy(Xe.getClearColor())},this.setClearColor=function(){Xe.setClearColor(...arguments)},this.getClearAlpha=function(){return Xe.getClearAlpha()},this.setClearAlpha=function(){Xe.setClearAlpha(...arguments)},this.clear=function(y=!0,k=!0,J=!0){let Y=0;if(y){let K=!1;if(W!==null){const xe=W.texture.format;K=d.has(xe)}if(K){const xe=W.texture.type,Te=u.has(xe),ve=Xe.getClearColor(),we=Xe.getClearAlpha(),Pe=ve.r,qe=ve.g,Je=ve.b;Te?(_[0]=Pe,_[1]=qe,_[2]=Je,_[3]=we,z.clearBufferuiv(z.COLOR,0,_)):(T[0]=Pe,T[1]=qe,T[2]=Je,T[3]=we,z.clearBufferiv(z.COLOR,0,T))}else Y|=z.COLOR_BUFFER_BIT}k&&(Y|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),J&&(Y|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&z.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),V=y},this.dispose=function(){t.removeEventListener("webglcontextlost",ht,!1),t.removeEventListener("webglcontextrestored",ct,!1),t.removeEventListener("webglcontextcreationerror",ln,!1),Xe.dispose(),de.dispose(),fe.dispose(),q.dispose(),ae.dispose(),te.dispose(),ye.dispose(),re.dispose(),ue.dispose(),Ce.dispose(),Ce.removeEventListener("sessionstart",kl),Ce.removeEventListener("sessionend",zl),bi.stop()};function ht(y){y.preventDefault(),Ou("WebGLRenderer: Context Lost."),O=!0}function ct(){Ou("WebGLRenderer: Context Restored."),O=!1;const y=B.autoReset,k=ke.enabled,J=ke.autoUpdate,Y=ke.needsUpdate,K=ke.type;Ue(),B.autoReset=y,ke.enabled=k,ke.autoUpdate=J,ke.needsUpdate=Y,ke.type=K}function ln(y){ot("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function xn(y){const k=y.target;k.removeEventListener("dispose",xn),up(k)}function up(y){fp(y),q.remove(y)}function fp(y){const k=q.get(y).programs;k!==void 0&&(k.forEach(function(J){ue.releaseProgram(J)}),y.isShaderMaterial&&ue.releaseShaderCache(y))}this.renderBufferDirect=function(y,k,J,Y,K,xe){k===null&&(k=$e);const Te=K.isMesh&&K.matrixWorld.determinantAffine()<0,ve=pp(y,k,J,Y,K);g.setMaterial(Y,Te);let we=J.index,Pe=1;if(Y.wireframe===!0){if(we=j.getWireframeAttribute(J),we===void 0)return;Pe=2}const qe=J.drawRange,Je=J.attributes.position;let Ae=qe.start*Pe,lt=(qe.start+qe.count)*Pe;xe!==null&&(Ae=Math.max(Ae,xe.start*Pe),lt=Math.min(lt,(xe.start+xe.count)*Pe)),we!==null?(Ae=Math.max(Ae,0),lt=Math.min(lt,we.count)):Je!=null&&(Ae=Math.max(Ae,0),lt=Math.min(lt,Je.count));const yt=lt-Ae;if(yt<0||yt===1/0)return;ye.setup(K,Y,ve,J,we);let gt,dt=he;if(we!==null&&(gt=ce.get(we),dt=ne,dt.setIndex(gt)),K.isMesh)Y.wireframe===!0?(g.setLineWidth(Y.wireframeLinewidth*mt()),dt.setMode(z.LINES)):dt.setMode(z.TRIANGLES);else if(K.isLine){let It=Y.linewidth;It===void 0&&(It=1),g.setLineWidth(It*mt()),K.isLineSegments?dt.setMode(z.LINES):K.isLineLoop?dt.setMode(z.LINE_LOOP):dt.setMode(z.LINE_STRIP)}else K.isPoints?dt.setMode(z.POINTS):K.isSprite&&dt.setMode(z.TRIANGLES);if(K.isBatchedMesh)if(at.get("WEBGL_multi_draw"))dt.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const It=K._multiDrawStarts,be=K._multiDrawCounts,Ht=K._multiDrawCount,st=we?ce.get(we).bytesPerElement:1,sn=q.get(Y).currentProgram.getUniforms();for(let Sn=0;Sn<Ht;Sn++)sn.setValue(z,"_gl_DrawID",Sn),dt.render(It[Sn]/st,be[Sn])}else if(K.isInstancedMesh)dt.renderInstances(Ae,yt,K.count);else if(J.isInstancedBufferGeometry){const It=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,be=Math.min(J.instanceCount,It);dt.renderInstances(Ae,yt,be)}else dt.render(Ae,yt)};function Bl(y,k,J,Y){V!==null&&y.isNodeMaterial&&V.setObject(Y,y),Ee===!0&&Ie.setState(y,J,!1),y.transparent===!0&&y.side===Gn&&y.forceSinglePass===!1?(y.side=Kt,y.needsUpdate=!0,Ms(y,k,Y),y.side=Oi,y.needsUpdate=!0,Ms(y,k,Y),y.side=Gn):Ms(y,k,Y)}this.compile=function(y,k,J=null){J===null&&(J=y),V!==null&&V.renderStart(y,k,J),w=fe.get(J),w.init(k),x.push(w),J.traverseVisible(function(K){K.isLight&&K.layers.test(k.layers)&&(w.pushLight(K),K.castShadow&&w.pushShadow(K))}),y!==J&&y.traverseVisible(function(K){K.isLight&&K.layers.test(k.layers)&&(w.pushLight(K),K.castShadow&&w.pushShadow(K))}),w.setupLights(),V!==null&&V.updateLights(w.state.lightsArray),We=this.localClippingEnabled,Ee=Ie.init(this.clippingPlanes,We),Ee===!0&&Ie.setGlobalState(this.clippingPlanes,k),V!==null&&ke.render(w.state.shadowsArray,J,k);const Y=new Set;return y.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const xe=K.material;if(xe)if(Array.isArray(xe))for(let Te=0;Te<xe.length;Te++){const ve=xe[Te];Bl(ve,J,k,K),Y.add(ve)}else Bl(xe,J,k,K),Y.add(xe)}),w=x.pop(),V!==null&&V.renderEnd(),Y},this.compileAsync=function(y,k,J=null){const Y=this.compile(y,k,J);return new Promise(K=>{function xe(){if(Y.forEach(function(Te){const we=q.get(Te).currentProgram;(we===void 0||we.isReady())&&Y.delete(Te)}),Y.size===0){K(y);return}setTimeout(xe,10)}at.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let Wa=null;function dp(y){Wa&&Wa(y)}function kl(){bi.stop()}function zl(){bi.start()}const bi=new bh;bi.setAnimationLoop(dp),typeof self<"u"&&bi.setContext(self),this.setAnimationLoop=function(y){Wa=y,Ce.setAnimationLoop(y),y===null?bi.stop():bi.start()},Ce.addEventListener("sessionstart",kl),Ce.addEventListener("sessionend",zl),this.render=function(y,k){if(k!==void 0&&k.isCamera!==!0){ot("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;V!==null&&V.renderStart(y,k);const J=Ce.enabled===!0&&Ce.isPresenting===!0,Y=C!==null&&(W===null||J)&&C.begin(N,W);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Ce.enabled===!0&&Ce.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(Ce.cameraAutoUpdate===!0&&Ce.updateCamera(k),k=Ce.getCamera()),y.isScene===!0&&y.onBeforeRender(N,y,k,W),w=fe.get(y,x.length),w.init(k),w.state.textureUnits=Z.getTextureUnits(),x.push(w),He.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),le.setFromProjectionMatrix(He,wn,k.reversedDepth),We=this.localClippingEnabled,Ee=Ie.init(this.clippingPlanes,We),b=de.get(y,D.length),b.init(),D.push(b),Ce.enabled===!0&&Ce.isPresenting===!0){const Te=N.xr.getDepthSensingMesh();Te!==null&&Xa(Te,k,-1/0,N.sortObjects)}Xa(y,k,0,N.sortObjects),b.finish(),V!==null&&V.updateLights(w.state.lightsArray),N.sortObjects===!0&&b.sort(_e,De),Ze=Ce.enabled===!1||Ce.isPresenting===!1||Ce.hasDepthSensing()===!1,Ze&&Xe.addToRenderList(b,y),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ee===!0&&Ie.beginShadows();const K=w.state.shadowsArray;if(ke.render(K,y,k),Ee===!0&&Ie.endShadows(),(Y&&C.hasRenderPass())===!1){const Te=b.opaque,ve=b.transmissive;if(w.setupLights(),k.isArrayCamera){const we=k.cameras;if(ve.length>0)for(let Pe=0,qe=we.length;Pe<qe;Pe++){const Je=we[Pe];Gl(Te,ve,y,Je)}Ze&&Xe.render(y);for(let Pe=0,qe=we.length;Pe<qe;Pe++){const Je=we[Pe];Hl(b,y,Je,Je.viewport)}}else ve.length>0&&Gl(Te,ve,y,k),Ze&&Xe.render(y),Hl(b,y,k)}W!==null&&F===0&&(Z.updateMultisampleRenderTarget(W),Z.updateRenderTargetMipmap(W)),Y&&C.end(N),y.isScene===!0&&y.onAfterRender(N,y,k),ye.resetDefaultState(),P=-1,I=null,x.pop(),x.length>0?(w=x[x.length-1],Z.setTextureUnits(w.state.textureUnits),Ee===!0&&Ie.setGlobalState(N.clippingPlanes,w.state.camera)):w=null,D.pop(),D.length>0?b=D[D.length-1]:b=null,V!==null&&V.renderEnd()};function Xa(y,k,J,Y){if(y.visible===!1)return;if(y.layers.test(k.layers)){if(y.isGroup)J=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(k);else if(y.isLightProbeGrid)w.pushLightProbeGrid(y);else if(y.isLight)w.pushLight(y),y.castShadow&&w.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||y.intersectsFrustum(le)){Y&&Be.setFromMatrixPosition(y.matrixWorld).applyMatrix4(He);const Te=te.update(y),ve=y.material;ve.visible&&b.push(y,Te,ve,J,Be.z,null,k)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||y.intersectsFrustum(le))){const Te=te.update(y),ve=y.material;if(Y&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Be.copy(y.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),Be.copy(Te.boundingSphere.center)),Be.applyMatrix4(y.matrixWorld).applyMatrix4(He)),Array.isArray(ve)){const we=Te.groups;for(let Pe=0,qe=we.length;Pe<qe;Pe++){const Je=we[Pe],Ae=ve[Je.materialIndex];Ae&&Ae.visible&&b.push(y,Te,Ae,J,Be.z,Je,k)}}else ve.visible&&b.push(y,Te,ve,J,Be.z,null,k)}}const xe=y.children;for(let Te=0,ve=xe.length;Te<ve;Te++)Xa(xe[Te],k,J,Y)}function Hl(y,k,J,Y){const{opaque:K,transmissive:xe,transparent:Te}=y;w.setupLightsView(J),Ee===!0&&Ie.setGlobalState(N.clippingPlanes,J),Y&&g.viewport(X.copy(Y)),K.length>0&&Ss(K,k,J),xe.length>0&&Ss(xe,k,J),Te.length>0&&Ss(Te,k,J),g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),g.setPolygonOffset(!1)}function Gl(y,k,J,Y){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[Y.id]===void 0){const Ae=at.has("EXT_color_buffer_half_float")||at.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[Y.id]=new _n(1,1,{generateMipmaps:!0,type:Ae?Pn:en,minFilter:Li,samples:Math.max(4,R.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:tt.workingColorSpace})}const xe=w.state.transmissionRenderTarget[Y.id],Te=Y.viewport||X;xe.setSize(Te.z*N.transmissionResolutionScale,Te.w*N.transmissionResolutionScale);const ve=N.getRenderTarget(),we=N.getActiveCubeFace(),Pe=N.getActiveMipmapLevel();N.setRenderTarget(xe),N.getClearColor(Me),Ne=N.getClearAlpha(),Ne<1&&N.setClearColor(16777215,.5),N.clear(),Ze&&Xe.render(J);const qe=N.toneMapping;N.toneMapping=An;const Je=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),w.setupLightsView(Y),Ee===!0&&Ie.setGlobalState(N.clippingPlanes,Y),Ss(y,J,Y),Z.updateMultisampleRenderTarget(xe),Z.updateRenderTargetMipmap(xe),at.has("WEBGL_multisampled_render_to_texture")===!1){let Ae=!1;for(let lt=0,yt=k.length;lt<yt;lt++){const gt=k[lt],{object:dt,geometry:It,material:be,group:Ht}=gt;if(be.side===Gn&&dt.layers.test(Y.layers)){const st=be.side;be.side=Kt,be.needsUpdate=!0,Vl(dt,J,Y,It,be,Ht),be.side=st,be.needsUpdate=!0,Ae=!0}}Ae===!0&&(Z.updateMultisampleRenderTarget(xe),Z.updateRenderTargetMipmap(xe))}N.setRenderTarget(ve,we,Pe),N.setClearColor(Me,Ne),Je!==void 0&&(Y.viewport=Je),N.toneMapping=qe}function Ss(y,k,J){const Y=k.isScene===!0?k.overrideMaterial:null;for(let K=0,xe=y.length;K<xe;K++){const Te=y[K],{object:ve,geometry:we,group:Pe}=Te;let qe=Te.material;qe.allowOverride===!0&&Y!==null&&(qe=Y),ve.layers.test(J.layers)&&Vl(ve,k,J,we,qe,Pe)}}function Vl(y,k,J,Y,K,xe){V!==null&&K.isNodeMaterial&&V.setObject(y,K),y.onBeforeRender(N,k,J,Y,K,xe),y.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),K.onBeforeRender(N,k,J,Y,y,xe),K.transparent===!0&&K.side===Gn&&K.forceSinglePass===!1?(K.side=Kt,K.needsUpdate=!0,N.renderBufferDirect(J,k,Y,K,y,xe),K.side=Oi,K.needsUpdate=!0,N.renderBufferDirect(J,k,Y,K,y,xe),K.side=Gn):N.renderBufferDirect(J,k,Y,K,y,xe),y.onAfterRender(N,k,J,Y,K,xe)}function Ms(y,k,J){k.isScene!==!0&&(k=$e);const Y=q.get(y),K=w.state.lights,xe=w.state.shadowsArray,Te=K.state.version,ve=ue.getParameters(y,K.state,xe,k,J,w.state.lightProbeGridArray),we=ue.getProgramCacheKey(ve);let Pe=Y.programs;Y.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?k.environment:null,Y.fog=k.fog;const qe=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;Y.envMap=ae.get(y.envMap||Y.environment,qe),Y.envMapRotation=Y.environment!==null&&y.envMap===null?k.environmentRotation:y.envMapRotation,Pe===void 0&&(y.addEventListener("dispose",xn),Pe=new Map,Y.programs=Pe);let Je=Pe.get(we);if(Je!==void 0){if(Y.currentProgram===Je&&Y.lightsStateVersion===Te)return Xl(y,ve),Je}else ve.uniforms=ue.getUniforms(y),V!==null&&y.isNodeMaterial&&V.build(y,J,ve),y.onBeforeCompile(ve,N),Je=ue.acquireProgram(ve,we),Pe.set(we,Je),Y.uniforms=ve.uniforms;const Ae=Y.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Ae.clippingPlanes=Ie.uniform),Xl(y,ve),Y.needsLights=gp(y),Y.lightsStateVersion=Te,Y.needsLights&&(Ae.ambientLightColor.value=K.state.ambient,Ae.lightProbe.value=K.state.probe,Ae.sunLights.value=K.state.sun,Ae.sunLightShadows.value=K.state.sunShadow,Ae.directionalLights.value=K.state.directional,Ae.directionalLightShadows.value=K.state.directionalShadow,Ae.spotLights.value=K.state.spot,Ae.spotLightShadows.value=K.state.spotShadow,Ae.rectAreaLights.value=K.state.rectArea,Ae.ltc_1.value=K.state.rectAreaLTC1,Ae.ltc_2.value=K.state.rectAreaLTC2,Ae.pointLights.value=K.state.point,Ae.pointLightShadows.value=K.state.pointShadow,Ae.hemisphereLights.value=K.state.hemi,Ae.sunShadowMatrix.value=K.state.sunShadowMatrix,Ae.sunShadowCascade.value=K.state.sunShadowCascade,Ae.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Ae.spotLightMatrix.value=K.state.spotLightMatrix,Ae.spotLightMap.value=K.state.spotLightMap,Ae.pointShadowMatrix.value=K.state.pointShadowMatrix),Y.lightProbeGrid=w.state.lightProbeGridArray.length>0,Y.currentProgram=Je,Y.uniformsList=null,Je}function Wl(y){if(y.uniformsList===null){const k=y.currentProgram.getUniforms();y.uniformsList=la.seqWithValue(k.seq,y.uniforms)}return y.uniformsList}function Xl(y,k){const J=q.get(y);J.outputColorSpace=k.outputColorSpace,J.batching=k.batching,J.batchingColor=k.batchingColor,J.instancing=k.instancing,J.instancingColor=k.instancingColor,J.instancingMorph=k.instancingMorph,J.skinning=k.skinning,J.morphTargets=k.morphTargets,J.morphNormals=k.morphNormals,J.morphColors=k.morphColors,J.morphTargetsCount=k.morphTargetsCount,J.numClippingPlanes=k.numClippingPlanes,J.numIntersection=k.numClipIntersection,J.vertexAlphas=k.vertexAlphas,J.vertexTangents=k.vertexTangents,J.toneMapping=k.toneMapping}function hp(y,k){if(y.length===0)return null;if(y.length===1)return y[0].texture!==null?y[0]:null;M.setFromMatrixPosition(k.matrixWorld);for(let J=0,Y=y.length;J<Y;J++){const K=y[J];if(K.texture!==null&&K.boundingBox.containsPoint(M))return K}return null}function pp(y,k,J,Y,K){k.isScene!==!0&&(k=$e),Z.resetTextureUnits();const xe=k.fog,Te=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?k.environment:null,ve=W===null?N.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:tt.workingColorSpace,we=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,Pe=ae.get(Y.envMap||Te,we),qe=Y.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Je=!!J.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Ae=!!J.morphAttributes.position,lt=!!J.morphAttributes.normal,yt=!!J.morphAttributes.color;let gt=An;Y.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(gt=N.toneMapping);const dt=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,It=dt!==void 0?dt.length:0,be=q.get(Y),Ht=w.state.lights;if(Ee===!0&&(We===!0||y!==I)){const pt=y===I&&Y.id===P;Ie.setState(Y,y,pt)}let st=!1;Y.version===be.__version?(be.needsLights&&be.lightsStateVersion!==Ht.state.version||be.outputColorSpace!==ve||K.isBatchedMesh&&be.batching===!1||!K.isBatchedMesh&&be.batching===!0||K.isBatchedMesh&&be.batchingColor===!0&&K._colorsTexture===null||K.isBatchedMesh&&be.batchingColor===!1&&K._colorsTexture!==null||K.isInstancedMesh&&be.instancing===!1||!K.isInstancedMesh&&be.instancing===!0||K.isSkinnedMesh&&be.skinning===!1||!K.isSkinnedMesh&&be.skinning===!0||K.isInstancedMesh&&be.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&be.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&be.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&be.instancingMorph===!1&&K.morphTexture!==null||be.envMap!==Pe||Y.fog===!0&&be.fog!==xe||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==Ie.numPlanes||be.numIntersection!==Ie.numIntersection)||be.vertexAlphas!==qe||be.vertexTangents!==Je||be.morphTargets!==Ae||be.morphNormals!==lt||be.morphColors!==yt||be.toneMapping!==gt||be.morphTargetsCount!==It||!!be.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(st=!0):(st=!0,be.__version=Y.version);let sn=be.currentProgram;st===!0&&(sn=Ms(Y,k,K),V&&Y.isNodeMaterial&&V.onUpdateProgram(Y,sn,be));let Sn=!1,ti=!1,Wi=!1;const ft=sn.getUniforms(),St=be.uniforms;if(g.useProgram(sn.program)&&(Sn=!0,ti=!0,Wi=!0),Y.id!==P&&(P=Y.id,ti=!0),be.needsLights){const pt=hp(w.state.lightProbeGridArray,K);be.lightProbeGrid!==pt&&(be.lightProbeGrid=pt,ti=!0)}if(Sn||I!==y){g.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),ft.setValue(z,"projectionMatrix",y.projectionMatrix),ft.setValue(z,"viewMatrix",y.matrixWorldInverse);const ii=ft.map.cameraPosition;ii!==void 0&&ii.setValue(z,it.setFromMatrixPosition(y.matrixWorld)),R.logarithmicDepthBuffer&&ft.setValue(z,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&ft.setValue(z,"isOrthographic",y.isOrthographicCamera===!0),I!==y&&(I=y,ti=!0,Wi=!0)}if(be.needsLights&&(Ht.state.sunShadowMap.length>0&&ft.setValue(z,"sunShadowMap",Ht.state.sunShadowMap,Z),Ht.state.directionalShadowMap.length>0&&ft.setValue(z,"directionalShadowMap",Ht.state.directionalShadowMap,Z),Ht.state.spotShadowMap.length>0&&ft.setValue(z,"spotShadowMap",Ht.state.spotShadowMap,Z),Ht.state.pointShadowMap.length>0&&ft.setValue(z,"pointShadowMap",Ht.state.pointShadowMap,Z)),K.isSkinnedMesh){ft.setOptional(z,K,"bindMatrix"),ft.setOptional(z,K,"bindMatrixInverse");const pt=K.skeleton;pt&&(pt.boneTexture===null&&pt.computeBoneTexture(),ft.setValue(z,"boneTexture",pt.boneTexture,Z))}K.isBatchedMesh&&(ft.setOptional(z,K,"batchingTexture"),ft.setValue(z,"batchingTexture",K._matricesTexture,Z),ft.setOptional(z,K,"batchingIdTexture"),ft.setValue(z,"batchingIdTexture",K._indirectTexture,Z),ft.setOptional(z,K,"batchingColorTexture"),K._colorsTexture!==null&&ft.setValue(z,"batchingColorTexture",K._colorsTexture,Z));const ni=J.morphAttributes;if((ni.position!==void 0||ni.normal!==void 0||ni.color!==void 0)&&G.update(K,J,sn),(ti||be.receiveShadow!==K.receiveShadow)&&(be.receiveShadow=K.receiveShadow,ft.setValue(z,"receiveShadow",K.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&k.environment!==null&&(St.envMapIntensity.value=k.environmentIntensity),St.dfgLUT!==void 0&&(St.dfgLUT.value=ly()),ti){if(ft.setValue(z,"toneMappingExposure",N.toneMappingExposure),be.needsLights&&mp(St,Wi),xe&&Y.fog===!0&&Re.refreshFogUniforms(St,xe),Re.refreshMaterialUniforms(St,Y,ee,Q,w.state.transmissionRenderTarget[y.id]),be.needsLights&&be.lightProbeGrid){const pt=be.lightProbeGrid;St.probesSH.value=pt.texture,St.probesMin.value.copy(pt.boundingBox.min),St.probesMax.value.copy(pt.boundingBox.max),St.probesResolution.value.copy(pt.resolution)}la.upload(z,Wl(be),St,Z)}if(Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(la.upload(z,Wl(be),St,Z),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&ft.setValue(z,"center",K.center),ft.setValue(z,"modelViewMatrix",K.modelViewMatrix),ft.setValue(z,"normalMatrix",K.normalMatrix),ft.setValue(z,"modelMatrix",K.matrixWorld),Y.uniformsGroups!==void 0){const pt=Y.uniformsGroups;for(let ii=0,Xi=pt.length;ii<Xi;ii++){const Yl=pt[ii];re.update(Yl,sn),re.bind(Yl,sn)}}return sn}function mp(y,k){y.ambientLightColor.needsUpdate=k,y.lightProbe.needsUpdate=k,y.sunLights.needsUpdate=k,y.sunLightShadows.needsUpdate=k,y.directionalLights.needsUpdate=k,y.directionalLightShadows.needsUpdate=k,y.pointLights.needsUpdate=k,y.pointLightShadows.needsUpdate=k,y.spotLights.needsUpdate=k,y.spotLightShadows.needsUpdate=k,y.rectAreaLights.needsUpdate=k,y.hemisphereLights.needsUpdate=k}function gp(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(y,k,J){const Y=q.get(y);Y.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),q.get(y.texture).__webglTexture=k,q.get(y.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:J,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,k){const J=q.get(y);J.__webglFramebuffer=k,J.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(y,k=0,J=0){W=y,U=k,F=J;let Y=null,K=!1,xe=!1;if(y){const ve=q.get(y);if(ve.__useDefaultFramebuffer!==void 0){g.bindFramebuffer(z.FRAMEBUFFER,ve.__webglFramebuffer),X.copy(y.viewport),se.copy(y.scissor),oe=y.scissorTest,g.viewport(X),g.scissor(se),g.setScissorTest(oe),P=-1;return}else if(ve.__webglFramebuffer===void 0)Z.setupRenderTarget(y);else if(ve.__hasExternalTextures)Z.rebindTextures(y,q.get(y.texture).__webglTexture,q.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const qe=y.depthTexture;if(ve.__boundDepthTexture!==qe){if(qe!==null&&q.has(qe)&&(y.width!==qe.image.width||y.height!==qe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(y)}}const we=y.texture;(we.isData3DTexture||we.isDataArrayTexture||we.isCompressedArrayTexture)&&(xe=!0);const Pe=q.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Pe[k])?Y=Pe[k][J]:Y=Pe[k],K=!0):y.samples>0&&Z.useMultisampledRTT(y)===!1?Y=q.get(y).__webglMultisampledFramebuffer:Array.isArray(Pe)?Y=Pe[J]:Y=Pe,X.copy(y.viewport),se.copy(y.scissor),oe=y.scissorTest}else X.copy(H).multiplyScalar(ee).floor(),se.copy(ie).multiplyScalar(ee).floor(),oe=me;if(J!==0&&(Y=E),g.bindFramebuffer(z.FRAMEBUFFER,Y)&&g.drawBuffers(y,Y),g.viewport(X),g.scissor(se),g.setScissorTest(oe),K){const ve=q.get(y.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+k,ve.__webglTexture,J)}else if(xe){const ve=k;for(let we=0;we<y.textures.length;we++){const Pe=q.get(y.textures[we]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+we,Pe.__webglTexture,J,ve)}}else if(y!==null&&J!==0){const ve=q.get(y.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,ve.__webglTexture,J)}P=-1};function ql(y){const k=q.get(y);return(k.__readFormat!==y.format||k.__readType!==y.type)&&(k.__readFormat=y.format,k.__readType=y.type,k.__formatReadable=R.textureFormatReadable(y.format),k.__typeReadable=R.textureTypeReadable(y.type)),k}this.readRenderTargetPixels=function(y,k,J,Y,K,xe,Te,ve=0){if(!(y&&y.isWebGLRenderTarget)){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=q.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Te!==void 0&&(we=we[Te]),we){g.bindFramebuffer(z.FRAMEBUFFER,we);try{const Pe=y.textures[ve],qe=Pe.format,Je=Pe.type;y.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+ve);const Ae=ql(Pe);if(Ae.__formatReadable===!1){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ae.__typeReadable===!1){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=y.width-Y&&J>=0&&J<=y.height-K&&z.readPixels(k,J,Y,K,pe.convert(qe),pe.convert(Je),xe)}finally{const Pe=W!==null?q.get(W).__webglFramebuffer:null;g.bindFramebuffer(z.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(y,k,J,Y,K,xe,Te,ve=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=q.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Te!==void 0&&(we=we[Te]),we)if(k>=0&&k<=y.width-Y&&J>=0&&J<=y.height-K){g.bindFramebuffer(z.FRAMEBUFFER,we);const Pe=y.textures[ve],qe=Pe.format,Je=Pe.type;y.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+ve);const Ae=ql(Pe);if(Ae.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ae.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const lt=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,lt),z.bufferData(z.PIXEL_PACK_BUFFER,xe.byteLength,z.STREAM_READ),z.readPixels(k,J,Y,K,pe.convert(qe),pe.convert(Je),0),z.bindBuffer(z.PIXEL_PACK_BUFFER,null);const yt=W!==null?q.get(W).__webglFramebuffer:null;g.bindFramebuffer(z.FRAMEBUFFER,yt);const gt=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await T0(z,gt,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,lt),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,xe),z.bindBuffer(z.PIXEL_PACK_BUFFER,null),z.deleteBuffer(lt),z.deleteSync(gt),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,k=null,J=0){const Y=Math.pow(2,-J),K=Math.floor(y.image.width*Y),xe=Math.floor(y.image.height*Y),Te=k!==null?k.x:0,ve=k!==null?k.y:0;Z.setTexture2D(y,0),z.copyTexSubImage2D(z.TEXTURE_2D,J,0,0,Te,ve,K,xe),g.unbindTexture()},this.copyTextureToTexture=function(y,k,J=null,Y=null,K=0,xe=0){let Te,ve,we,Pe,qe,Je,Ae,lt,yt;const gt=y.isCompressedTexture?y.mipmaps[xe]:y.image;if(J!==null)Te=J.max.x-J.min.x,ve=J.max.y-J.min.y,we=J.isBox3?J.max.z-J.min.z:1,Pe=J.min.x,qe=J.min.y,Je=J.isBox3?J.min.z:0;else{const St=Math.pow(2,-K);Te=Math.floor(gt.width*St),ve=Math.floor(gt.height*St),y.isDataArrayTexture?we=gt.depth:y.isData3DTexture?we=Math.floor(gt.depth*St):we=1,Pe=0,qe=0,Je=0}Y!==null?(Ae=Y.x,lt=Y.y,yt=Y.z):(Ae=0,lt=0,yt=0);const dt=pe.convert(k.format),It=pe.convert(k.type);let be;k.isData3DTexture?(Z.setTexture3D(k,0),be=z.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(Z.setTexture2DArray(k,0),be=z.TEXTURE_2D_ARRAY):(Z.setTexture2D(k,0),be=z.TEXTURE_2D),g.activeTexture(z.TEXTURE0),g.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,k.flipY),g.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),g.pixelStorei(z.UNPACK_ALIGNMENT,k.unpackAlignment);const Ht=g.getParameter(z.UNPACK_ROW_LENGTH),st=g.getParameter(z.UNPACK_IMAGE_HEIGHT),sn=g.getParameter(z.UNPACK_SKIP_PIXELS),Sn=g.getParameter(z.UNPACK_SKIP_ROWS),ti=g.getParameter(z.UNPACK_SKIP_IMAGES);g.pixelStorei(z.UNPACK_ROW_LENGTH,gt.width),g.pixelStorei(z.UNPACK_IMAGE_HEIGHT,gt.height),g.pixelStorei(z.UNPACK_SKIP_PIXELS,Pe),g.pixelStorei(z.UNPACK_SKIP_ROWS,qe),g.pixelStorei(z.UNPACK_SKIP_IMAGES,Je);const Wi=y.isDataArrayTexture||y.isData3DTexture,ft=k.isDataArrayTexture||k.isData3DTexture;if(y.isDepthTexture){const St=q.get(y),ni=q.get(k),pt=q.get(St.__renderTarget),ii=q.get(ni.__renderTarget);g.bindFramebuffer(z.READ_FRAMEBUFFER,pt.__webglFramebuffer),g.bindFramebuffer(z.DRAW_FRAMEBUFFER,ii.__webglFramebuffer);for(let Xi=0;Xi<we;Xi++)Wi&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,q.get(y).__webglTexture,K,Je+Xi),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,q.get(k).__webglTexture,xe,yt+Xi)),z.blitFramebuffer(Pe,qe,Te,ve,Ae,lt,Te,ve,z.DEPTH_BUFFER_BIT,z.NEAREST);g.bindFramebuffer(z.READ_FRAMEBUFFER,null),g.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(K!==0||y.isRenderTargetTexture||q.has(y)){const St=q.get(y),ni=q.get(k);g.bindFramebuffer(z.READ_FRAMEBUFFER,A),g.bindFramebuffer(z.DRAW_FRAMEBUFFER,L);for(let pt=0;pt<we;pt++)Wi?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,St.__webglTexture,K,Je+pt):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,St.__webglTexture,K),ft?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,ni.__webglTexture,xe,yt+pt):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,ni.__webglTexture,xe),K!==0?z.blitFramebuffer(Pe,qe,Te,ve,Ae,lt,Te,ve,z.COLOR_BUFFER_BIT,z.NEAREST):ft?z.copyTexSubImage3D(be,xe,Ae,lt,yt+pt,Pe,qe,Te,ve):z.copyTexSubImage2D(be,xe,Ae,lt,Pe,qe,Te,ve);g.bindFramebuffer(z.READ_FRAMEBUFFER,null),g.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else ft?y.isDataTexture||y.isData3DTexture?z.texSubImage3D(be,xe,Ae,lt,yt,Te,ve,we,dt,It,gt.data):k.isCompressedArrayTexture?z.compressedTexSubImage3D(be,xe,Ae,lt,yt,Te,ve,we,dt,gt.data):z.texSubImage3D(be,xe,Ae,lt,yt,Te,ve,we,dt,It,gt):y.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,xe,Ae,lt,Te,ve,dt,It,gt.data):y.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,xe,Ae,lt,gt.width,gt.height,dt,gt.data):z.texSubImage2D(z.TEXTURE_2D,xe,Ae,lt,Te,ve,dt,It,gt);g.pixelStorei(z.UNPACK_ROW_LENGTH,Ht),g.pixelStorei(z.UNPACK_IMAGE_HEIGHT,st),g.pixelStorei(z.UNPACK_SKIP_PIXELS,sn),g.pixelStorei(z.UNPACK_SKIP_ROWS,Sn),g.pixelStorei(z.UNPACK_SKIP_IMAGES,ti),xe===0&&k.generateMipmaps&&z.generateMipmap(be),g.unbindTexture()},this.initRenderTarget=function(y){q.get(y).__webglFramebuffer===void 0&&Z.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?Z.setTextureCube(y,0):y.isData3DTexture?Z.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?Z.setTexture2DArray(y,0):Z.setTexture2D(y,0),g.unbindTexture()},this.resetState=function(){U=0,F=0,W=null,g.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=tt._getUnpackColorSpace()}}const fy=.96,dy=new _s(1,28,18),hy=new gl(1,28),py=new Oa(.03,.03,.34,8),my=new _s(.065,10,8);function Pf(n,e){const t=as(n),i=new vi;i.name=n;const r=new xi({color:t.shell,emissive:t.rolls?"#000000":t.shell,emissiveIntensity:t.rolls?0:.18,roughness:t.rolls?.55:.38,metalness:t.rolls?.04:.34,map:t.rolls?e??null:null}),s=new Mt(dy,r);if(s.name="shell",i.add(s),!t.rolls){const a=new xi({color:"#ffffff",roughness:.6,metalness:.04,map:e??null}),o=new Mt(hy,a);o.name="face",o.position.set(0,.02,fy),o.scale.setScalar(.92),i.add(o)}return n==="scout"&&i.add(_y()),i}function gy(n,e,t){const i=n.getObjectByName("shell");if(!i)return;const r=i.material,s=t?"#ff8aa0":as(e).shell;r.color.set(s),r.map||r.emissive.set(s)}function Qs(n){n.traverse(e=>{const t=e;if(!t.isMesh)return;const i=Array.isArray(t.material)?t.material:[t.material];for(const r of i)r.dispose()})}function _y(){const n=new vi;n.name="antenna";const e=new xi({color:"#d5dbe6",metalness:.62,roughness:.32}),t=new xi({color:"#8ec5ff",emissive:"#3c7dff",emissiveIntensity:.85,roughness:.3}),i=new Mt(py,e);i.position.y=.16;const r=new Mt(my,t);return r.position.y=.36,n.add(i,r),n.position.set(.18,.9,.28),n}const Lf={2:{fill:"#eee4da",text:"#776e65"},4:{fill:"#ede0c8",text:"#776e65"},8:{fill:"#f2b179",text:"#f9f6f2"},16:{fill:"#f59563",text:"#f9f6f2"},32:{fill:"#f67c5f",text:"#f9f6f2"},64:{fill:"#f65e3b",text:"#f9f6f2"},128:{fill:"#edcf72",text:"#f9f6f2"},256:{fill:"#edcc61",text:"#f9f6f2"},512:{fill:"#edc850",text:"#f9f6f2"},1024:{fill:"#edc53f",text:"#f9f6f2"},2048:{fill:"#edc22e",text:"#f9f6f2"},4096:{fill:"#3c3a32",text:"#f9f6f2"}};function js(n){return n<2?{fill:"#d5d5e2",text:"#5c5c70"}:Lf[n]??Lf[4096]}const vy=7.4,xy=3.35,Sy=9,Df=.55;function My(n,e){n.position.set(e.x*.35,Df+xy,e.z+vy),n.lookAt(e.x*.15,Df,e.z-Sy),n.updateMatrixWorld(!0)}const yy=16724821,Ey=16752412,by=6970367,Ty=58879,wy=16722902;class Ay{constructor(e,t){Fe(this,"renderer");Fe(this,"scene",new H0);Fe(this,"camera");Fe(this,"labels");Fe(this,"bodies",new Map);Fe(this,"floors",new Map);Fe(this,"labelNodes",new Map);Fe(this,"sphere",new _s(1,28,18));Fe(this,"box",new Ar(1,1,1));Fe(this,"cone",new _l(.2,1,6));Fe(this,"ballMaterials",new Map);Fe(this,"spikeMat");Fe(this,"barrierMat");Fe(this,"blockMat");Fe(this,"deckA");Fe(this,"deckB");Fe(this,"railL");Fe(this,"railR");Fe(this,"player");Fe(this,"skin","visor");Fe(this,"textures",new Map);Fe(this,"remotes",new Map);Fe(this,"remoteLabels",new Map);Fe(this,"proj",new $);Fe(this,"roll",0);Fe(this,"lastDistance",0);Fe(this,"width",1);Fe(this,"height",1);this.labels=t,this.renderer=new uy({antialias:!0,alpha:!1}),this.renderer.setClearColor(1181720),this.renderer.outputColorSpace=qt,e.prepend(this.renderer.domElement),this.camera=new on(60,1,.1,220),this.scene.background=new je(1181720),this.scene.fog=new pl(1181720,16,62);const i=new o_(12044031,2756656,.85),r=new u_(16774368,1.35);r.position.set(6,14,8),this.scene.add(i,r),this.spikeMat=this.lit(yy,.45),this.barrierMat=this.lit(Ey,.35),this.blockMat=this.lit(by,.18),this.deckA=new xi({color:1513516,roughness:.92,metalness:.04}),this.deckB=new xi({color:1908800,roughness:.92,metalness:.04}),this.railL=this.lit(Ty,.85),this.railR=this.lit(wy,.85),this.setSkin("visor"),this.scene.add(this.stars()),this.resize()}setSkin(e){this.player&&this.skin===e||(this.player&&(this.scene.remove(this.player),Qs(this.player)),this.skin=e,this.player=Pf(e,this.textureFor(e)),this.scene.add(this.player))}resize(){const e=this.renderer.domElement,t=e.clientWidth||window.innerWidth,i=e.clientHeight||window.innerHeight;t<2||i<2||t===this.width&&i===this.height||(this.width=t,this.height=i,this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.renderer.setSize(t,i,!1),this.camera.aspect=t/i,this.camera.updateProjectionMatrix())}clear(){for(const e of this.bodies.values())this.scene.remove(e);this.bodies.clear();for(const e of this.floors.values())this.scene.remove(e);this.floors.clear();for(const e of this.labelNodes.values())e.remove();this.labelNodes.clear();for(const e of this.remotes.values())this.scene.remove(e.group),Qs(e.group);this.remotes.clear();for(const e of this.remoteLabels.values())e.remove();this.remoteLabels.clear(),this.roll=0,this.lastDistance=0}sync(e,t=e.player){const i=e.player;this.syncFloors(e.floors),this.syncBodies(e.bodies),this.syncRemotes(e.remotes);const r=e.distance-this.lastDistance;r>0&&(this.roll+=r/Math.max(.25,i.radius)),this.lastDistance=e.distance;const s=1+e.pop*.28;this.player.scale.setScalar(i.radius*s),this.player.position.set(i.x,i.y,i.z),this.rollShell(this.player,this.skin,this.roll),gy(this.player,this.skin,e.invuln>0);const a=js(i.value);My(this.camera,t),this.placeLabel(this.labelFor("player"),i.value<2?"?":String(i.value),a,i.x,i.y+i.radius*1.15,i.z,22+i.radius*28),this.renderer.render(this.scene,this.camera)}syncFloors(e){const t=new Set;for(const i of e){t.add(i.id);let r=this.floors.get(i.id);r||(r=this.makeFloor(i),this.floors.set(i.id,r),this.scene.add(r))}for(const[i,r]of this.floors)t.has(i)||(this.scene.remove(r),this.floors.delete(i))}makeFloor(e){const t=new vi,i=e.z1-e.z0,r=new Mt(this.box,e.id%2===0?this.deckA:this.deckB);r.scale.set(e.halfWidth*2,.4,i),r.position.y=-.2;const s=new Mt(this.box,this.railL);s.scale.set(.16,.28,i),s.position.set(-e.halfWidth,.14,0);const a=new Mt(this.box,this.railR);a.scale.set(.16,.28,i),a.position.set(e.halfWidth,.14,0);const o=new Mt(this.box,this.deckB);return o.scale.set(.08,.02,i),o.position.y=.012,t.add(r,s,a,o),t.position.set(0,0,(e.z0+e.z1)/2),t}syncBodies(e){const t=new Set;for(const i of e){if(!i.alive)continue;t.add(i.id);let r=this.bodies.get(i.id);if(r||(r=this.makeBody(i),this.bodies.set(i.id,r),this.scene.add(r)),r.position.set(i.x,i.y,i.z),i.kind==="ball"){r.scale.setScalar(Math.max(.2,i.radius));const s=r,a=js(i.value);s.material=this.ballMaterial(a.fill);const o=this.labelFor(i.id);this.placeLabel(o,i.pending||i.value<2?"?":String(i.value),a,i.x,i.y,i.z,16+i.radius*18)}}for(const[i,r]of this.bodies){if(t.has(i))continue;this.scene.remove(r),this.bodies.delete(i);const s=this.labelNodes.get(i);s&&(s.remove(),this.labelNodes.delete(i))}}makeBody(e){if(e.kind==="ball")return new Mt(this.sphere,this.ballMaterial(js(e.value).fill));if(e.kind==="block"){const r=new Mt(this.box,this.blockMat);return r.scale.set(e.hx*2,e.hy*2,e.hz*2),r}const t=new vi,i=new Mt(this.box,e.kind==="spike"?this.spikeMat:this.barrierMat);if(i.scale.set(e.hx*2,e.hy*2,e.hz*2),t.add(i),e.kind==="spike"){const r=Math.max(3,Math.floor(e.hx*2/.48)),s=e.hx*2*.86;for(let a=0;a<r;a++){const o=new Mt(this.cone,this.spikeMat),c=r===1?0:-s/2+s*a/(r-1);o.scale.set(1,e.hy*1.7,1),o.position.set(c,0,0),t.add(o)}}return t}labelFor(e){const t=e==="player"?-1:e;let i=this.labelNodes.get(t);return i||(i=document.createElement("div"),i.className="ball-label",i.dataset.role=e==="player"?"player":"ball",this.labels.append(i),this.labelNodes.set(t,i)),i}placeLabel(e,t,i,r,s,a,o){if(this.proj.set(r,s,a).project(this.camera),this.proj.z>1){e.hidden=!0;return}const c=Math.hypot(r-this.camera.position.x,s-this.camera.position.y,a-this.camera.position.z);if(c>48){e.hidden=!0;return}e.hidden=!1,e.textContent=t,e.style.color=i.text,e.style.background=i.fill;const l=Math.max(12,Math.min(o,o*8/c));e.style.fontSize=`${l}px`;const p=(this.proj.x*.5+.5)*this.width,h=(-this.proj.y*.5+.5)*this.height;e.style.transform=`translate(${p}px, ${h}px) translate(-50%, -50%)`}syncRemotes(e){const t=new Set;for(const i of e){if(!i.alive||!br(i.skin))continue;t.add(i.id);let r=this.remotes.get(i.id);(!r||r.skin!==i.skin)&&(r&&(this.scene.remove(r.group),Qs(r.group)),r={skin:i.skin,group:Pf(i.skin,this.textureFor(i.skin))},this.remotes.set(i.id,r),this.scene.add(r.group)),r.group.position.set(i.x,i.y,i.z),r.group.scale.setScalar(Math.max(.2,i.radius));const s=r.group.getObjectByName("shell");s&&as(i.skin).rolls&&(s.rotation.x=-i.z/Math.max(.25,i.radius));const a=js(i.value);this.placeLabel(this.remoteLabel(i.id),String(i.value),a,i.x,i.y+i.radius*1.15,i.z,22+i.radius*28)}for(const[i,r]of this.remotes){if(t.has(i))continue;this.scene.remove(r.group),Qs(r.group),this.remotes.delete(i);const s=this.remoteLabels.get(i);s&&(s.remove(),this.remoteLabels.delete(i))}}remoteLabel(e){let t=this.remoteLabels.get(e);return t||(t=document.createElement("div"),t.className="ball-label",t.dataset.role="remote",this.labels.append(t),this.remoteLabels.set(e,t)),t}rollShell(e,t,i){const r=e.getObjectByName("shell");r&&(r.rotation.x=as(t).rolls?i:0)}textureFor(e){let t=this.textures.get(e);if(t)return t;const i=document.createElement("canvas");return e==="football"?(i.width=512,i.height=256,Rg(i)):(i.width=256,i.height=256,Xd(i,e)),t=new Q0(i),t.colorSpace=qt,t.anisotropy=4,this.textures.set(e,t),t}ballMaterial(e){let t=this.ballMaterials.get(e);return t||(t=new xi({color:e,emissive:e,emissiveIntensity:.22,roughness:.42,metalness:.06}),this.ballMaterials.set(e,t)),t}lit(e,t){return new xi({color:e,emissive:e,emissiveIntensity:t,roughness:.48,metalness:.08})}stars(){const t=new Float32Array(840);for(let r=0;r<280;r++)t[r*3]=(Math.random()-.5)*160,t[r*3+1]=8+Math.random()*36,t[r*3+2]=-130+Math.random()*180;const i=new Zt;return i.setAttribute("position",new Rn(t,3)),new J0(i,new vh({color:16774890,size:.12,transparent:!0,opacity:.85}))}}const Dh="odin-run-2048-music",Ry=.4;let Hr=null,jt=null,cr=null,xl=!1,If=0;function Cy(){const n=window.AudioContext??window.webkitAudioContext;return n?(Hr||(Hr=new n),Hr.state==="suspended"&&Hr.resume(),Hr):null}function ui(n,e,t,i){const r=Cy();if(!r)return;const s=r.createOscillator(),a=r.createGain();s.type=t,s.frequency.value=n,a.gain.setValueAtTime(i,r.currentTime),a.gain.exponentialRampToValueAtTime(1e-4,r.currentTime+e),s.connect(a),a.connect(r.destination),s.start(),s.stop(r.currentTime+e)}function Ha(){if(cr!==null)return cr;try{cr=localStorage.getItem(Dh)!=="off"}catch{cr=!0}return cr}function Py(){return Ha()}function Ly(){return new URL("music/write-protect-on-c64.mp3",document.baseURI).href}function Ih(){Ha()&&(jt||(jt=new Audio(Ly()),jt.loop=!0,jt.preload="auto",jt.volume=Ry),jt.paused&&jt.play().catch(()=>{}))}function Uh(){xl=!0,Ih()}function Dy(){const n=!Ha();cr=n;try{localStorage.setItem(Dh,n?"on":"off")}catch{}return xl=!0,n?Ih():jt==null||jt.pause(),n}function Iy(n){!xl||!Ha()||!jt||!jt.paused||n<If||(If=n+1,jt.play().catch(()=>{}))}function Uy(n){n==="jump"?ui(520,.09,"square",.04):n==="merge"?(ui(440,.1,"triangle",.06),ui(660,.14,"triangle",.05)):n==="hurt"?ui(110,.18,"sawtooth",.05):n==="die"?ui(70,.32,"sawtooth",.06):n==="win"&&(ui(523,.12,"triangle",.06),ui(659,.14,"triangle",.06),ui(784,.2,"triangle",.06))}const Ny={x:0,y:0,z:0},Uf=.28;function Gr(n){return n*n*n}function Fy(n,e){const t=n.x-e.x,i=n.y-e.y,r=n.z-e.z,s=Math.hypot(t,i,r),a=n.radius+e.radius;if(s>=a||s<1e-8)return Ny;const o=a-s,c=t/s,l=i/s,p=r/s,h=Gr(e.radius)/(Gr(n.radius)+Gr(e.radius));let f=c*o*h,m=l*o*h,v=p*o*h;const S=Math.hypot(t,r);if(S>1e-4){const _=Math.min(1.6,Gr(e.radius)/Gr(n.radius)),T=o*(Math.abs(t)/S)*_*1.25;f+=t/S*T,v+=r/S*T*.35}Math.abs(i)>Math.abs(t)&&Math.abs(i)>Math.abs(r)||(m=0);const u=Math.hypot(f,m,v);if(u>Uf){const _=Uf/u;f*=_,m*=_,v*=_}return{x:f,y:m,z:v}}const Nh=24,Oy=8.4,By=9.5,Sr=11,ns=.014,Ea=20,Yt=4.6,Bo=1.6,Fh=24,Sl=120,ky=28,zy=42,Gc=.1,Hy=.12,Gy=3.1,Vy=.75,Wy=.28,Xy=.46,Nf=1.15,Ff=.75;function vs(n){const e=Math.log2(n);return Number.isFinite(e)?.4+(e-1)*.055:.4}function Oh(){return Math.log(Ea/Sr)/ns}function Mr(n){if(n<=0)return 0;const e=Oh();return n>=e?(Sr-Ea)/ns-Ea*(n-e):Sr/ns*(1-Math.exp(ns*n))}function qy(n){return n<=0?Sr:n>=Oh()?Ea:Sr*Math.exp(ns*n)}function Of(n,e,t){return Mr(n)+(t-Mr(e))}function Yy(n,e,t,i){if(!e)return{z:t.z,heldZ:void 0};if(!t.alive){const r=i??Of(n,t.time,t.z);return{z:r,heldZ:r}}return{z:Of(n,t.time,t.z),heldZ:void 0}}function Ky(n,e,t){if(n.status!=="running")return;const i=e-n.time;if(i<=.02)return;const r=i>.75?.45:.2,s=Math.min(r*t,i),a=n.player.z-Mr(n.time);n.time+=s,n.player.z=Mr(n.time)+a,n.distance=Math.max(n.distance,Math.max(0,-n.player.z))}function $y(n){let e=n>>>0;return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Zy(n,e,t=0,i=0){const r=vs(2);return{player:{x:0,y:r,z:0,vy:0,value:2,grounded:!0,radius:r},bodies:[],floors:[],status:"ready",cause:null,distance:0,speed:Sr,bestValue:t,bestDistance:i,time:0,invuln:0,pop:0,coyote:Gc,jumpBuffer:0,jumpHeld:!1,announcedWin:!1,showWin:!1,procedural:e,generatedTo:0,segmentIndex:0,nextId:1,events:[],rng:$y(n),remotes:[],authority:"solo",merges:[],locks:[],knocks:[],removed:new Set,held:new Set,pendingLocks:new Map}}function Ga(n=1,e=0,t=0){const i=Zy(n,!0,e,t);return Xn(i,-4,16,Yt),i.generatedTo=-4,El(i,-Sl),i}function Bh(n){n.status==="ready"&&(n.status="running")}function Jy(n,e,t){const i=Ga(e,n.bestValue,n.bestDistance);return i.jumpHeld=t,i.status="running",i}function Qy(n,e,t){if(n.status!=="running")return;n.events.length=0,n.merges.length=0,n.locks.length=0,n.knocks.length=0;const i=e.jump&&!n.jumpHeld;n.jumpHeld=e.jump;let r=Math.min(Math.max(t,0),.05),s=i;for(;r>0&&n.status==="running";){const a=Math.min(.008333333333333333,r);jy(n,e,a,s),s=!1,r-=a}}function jy(n,e,t,i){const r=n.player,s=r.z-Mr(n.time);n.time+=t,n.invuln>0&&(n.invuln-=t),n.pop>0&&(n.pop=Math.max(0,n.pop-t*2.5)),n.jumpBuffer>0&&(n.jumpBuffer-=t),fE(n);const a=r.grounded||n.coyote>0;(i||n.jumpBuffer>0)&&a?(r.vy=Oy,r.grounded=!1,n.coyote=0,n.jumpBuffer=0,n.events.push("jump")):i&&(n.jumpBuffer=Hy),r.x+=e.strafe*By*t;const o=Nh*(e.fastFall&&!r.grounded?Gy:1);r.vy-=o*t,r.y+=r.vy*t,n.speed=qy(n.time),r.z=Mr(n.time)+s,n.distance=Math.max(0,-r.z);const c=r.grounded;if(eE(n),Bf(n),uE(n),r.grounded||c?n.coyote=Gc:n.coyote=Math.max(0,n.coyote-t),r.y<-2.2){kh(n,"fall");return}rE(n),n.status==="running"&&(sE(n),Bf(n),aE(n,t),oE(n),n.procedural&&El(n,Hh(n)-Sl),n.distance>n.bestDistance&&(n.bestDistance=n.distance))}function kh(n,e){n.status!=="dead"&&(zh(n),n.distance>n.bestDistance&&(n.bestDistance=n.distance),n.status="dead",n.cause=e,n.events.push("die"))}function zh(n){n.player.value>n.bestValue&&(n.bestValue=n.player.value)}function Ml(n,e){const t=n.player;t.value=e,t.radius=vs(e),t.y<t.radius&&(t.y=t.radius),zh(n),e>=2048&&!n.announcedWin&&(n.announcedWin=!0,n.showWin=!0,n.events.push("win"))}function eE(n){const e=n.player;if(tE(n,e.x,e.z)!==null&&e.vy<=0&&e.y<=e.radius+.12){e.y=e.radius,e.vy=0,e.grounded=!0;return}e.grounded=!1}function tE(n,e,t){for(const i of n.floors)if(t>=i.z0&&t<=i.z1&&Math.abs(e)<=i.halfWidth)return i;return null}function Bf(n){const e=n.player;for(let t=0;t<4;t++){let i=!1;for(const r of n.bodies)r.kind!=="block"||!r.alive||nE(e,r)&&(i=!0);if(!i)return}}function nE(n,e){const t=n.x-e.x,i=n.y-e.y,r=n.z-e.z,s=e.hx+n.radius-Math.abs(t),a=e.hy+n.radius-Math.abs(i),o=e.hz+n.radius-Math.abs(r);return s<=0||a<=0||o<=0?!1:(s<a&&s<o?n.x+=Math.sign(t||1)*s:a<o?(n.y+=Math.sign(i||1)*a,i>=0?(n.vy<0&&(n.vy=0),n.grounded=!0):n.vy>0&&(n.vy=0)):n.z+=Math.sign(r||1)*o,!0)}function iE(n,e){const t=ko(n.x,e.x-e.hx,e.x+e.hx),i=ko(n.y,e.y-e.hy,e.y+e.hy),r=ko(n.z,e.z-e.hz,e.z+e.hz),s=n.x-t,a=n.y-i,o=n.z-r;return s*s+a*a+o*o<n.radius*n.radius}function rE(n){if(!(n.invuln>0)){for(const e of n.bodies)if(!(!e.alive||e.kind!=="spike"&&e.kind!=="barrier")&&iE(n.player,e)){if(n.player.value<=2){kh(n,"spike");return}Ml(n,n.player.value/2),n.invuln=Vy,n.pop=1,n.events.push("hurt");return}}}function sE(n){const e=n.player;for(const t of n.bodies){if(t.kind!=="ball"||!t.alive||t.flying)continue;if(t.pending){if(n.authority==="guest")continue;Gh(n,t,n.player.value)}const i=e.x-t.x,r=e.y-t.y,s=e.z-t.z,a=e.radius+t.radius;if(!(i*i+r*r+s*s>a*a))if(t.value===e.value){const o=e.value;t.alive=!1,n.removed.add(t.id),n.authority==="guest"&&n.held.add(t.id),Ml(n,e.value*2),n.merges.push({id:t.id,valueBefore:o}),n.pop=1,n.events.push("merge")}else t.flying=!0,t.vx=(Math.sign(t.x-e.x)||1)*7,t.vy=7,n.knocks.push({id:t.id,vx:t.vx,vy:t.vy})}}function aE(n,e){for(const t of n.bodies)!t.flying||!t.alive||(t.vy-=Nh*e,t.x+=t.vx*e,t.y+=t.vy*e,t.y<-3&&(t.alive=!1))}function oE(n){const e=lE(n)+ky;n.bodies=n.bodies.filter(t=>(t.alive||n.held.has(t.id))&&t.z<=e),n.floors=n.floors.filter(t=>t.z0<=e)}function cE(n){n.procedural&&El(n,Hh(n)-Sl)}function Hh(n){let e=n.player.z;for(const t of n.remotes)t.alive&&(e=Math.min(e,t.z));return e}function lE(n){let e=n.player.z;for(const t of n.remotes)t.alive&&(e=Math.max(e,t.z));return e}function uE(n){if(n.remotes.length===0)return;const e=n.player;for(const t of n.remotes){if(!t.alive)continue;const i=Fy(e,t);e.x+=i.x,e.y+=i.y,e.z+=i.z}}function fE(n){if(n.authority!=="guest")for(const e of n.bodies){if(e.kind!=="ball"||!e.pending||!e.alive)continue;const t=hE(n,e);t!==null&&Gh(n,e,t)}}function dE(n,e){return e>=8?Math.min(4096,n*2):e>=6?Math.max(2,n/2):n}function hE(n,e){let t=0,i=1/0,r=!1;const s=(a,o,c)=>{const l=o-e.z;if(l<=0||l>zy)return;const p=Math.hypot(a-e.x,l);p<i&&(i=p,t=c,r=!0)};if(s(n.player.x,n.player.z,n.player.value),n.authority==="host")for(const a of n.remotes)a.alive&&s(a.x,a.z,a.value);return r?t:null}function Gh(n,e,t){const i=Math.abs(e.id*17^t)%10;yl(e,dE(t,i)),n.locks.push({id:e.id,value:e.value})}function yl(n,e){n.value=e,n.radius=vs(e),n.y=n.radius,n.hx=n.radius,n.hy=n.radius,n.hz=n.radius,n.pending=!1}function pE(n,e,t){const i=n.bodies.find(r=>r.id===e&&r.kind==="ball");if(!i||!i.alive||i.flying){n.removed.has(e)||n.pendingLocks.set(e,t);return}yl(i,t),n.pendingLocks.delete(e)}function Vh(n,e){n.removed.add(e),n.pendingLocks.delete(e);const t=n.bodies.find(i=>i.id===e);t&&(t.alive=!1)}function mE(n,e,t,i){const r=n.bodies.find(s=>s.id===e&&s.kind==="ball");!r||!r.alive||r.flying||(r.flying=!0,r.vx=t,r.vy=i)}function Wh(n,e){Ml(n,e)}function El(n,e){if(!n.procedural)return;let t=0;for(;n.generatedTo>e&&t++<500;)gE(n)}function gE(n){const e=n.segmentIndex++,t=n.generatedTo,i=t-Fh;n.generatedTo=i;const r=(i+t)/2;if(e===0){Xn(n,i,t,Yt),ua(n,0,r,2);return}if(e===1){Xn(n,i,t,Yt),ua(n,0,r,4);return}if(e===2){Xn(n,i,t,Yt),Kr(n,"spike",i+8,-Yt+.25,Yt-.25);return}if(e===3){Xn(n,i,t,Yt),Xh(n,-2.4,r),ua(n,2.2,r,8);return}_E(n,i,t,-i)}function _E(n,e,t,i){const r=n.rng(),s=(e+t)/2;if(r<.18&&i>140){const c=3.5+n.rng()*1.2,l=8,p=Fh-l-c;Xn(n,t-l,t,Yt),Xn(n,e,e+p,Yt),ar(n,0,e+p*.5);return}if(r<.36&&i>200){Xn(n,e,t,Bo),n.rng()<.6&&Kr(n,"spike",s,-Bo+.15,Bo-.15);return}if(Xn(n,e,t,Yt),r<.68){const c=n.rng()<.45,l=n.rng()<.7?"spike":"barrier";c?(Kr(n,l,s,-Yt+.25,Yt-.25),ar(n,0,s+6)):n.rng()<.5?(Kr(n,l,s,-Yt+.25,.6),ar(n,2.4,s)):(Kr(n,l,s,-.6,Yt-.25),ar(n,-2.4,s));return}if(r<.86){const c=n.rng()<.5?-2.4:2.4;Xh(n,c,s),ar(n,-c,s);return}const a=[-2.4,0,2.4],o=1+Math.floor(n.rng()*3);for(let c=0;c<o;c++)ar(n,a[c],s+(c-1)*3.2)}function ar(n,e,t){const i=vs(2);if(!vE(n,e,t,i))return;const r=n.pendingLocks.has(n.nextId)||n.removed.has(n.nextId),s=ua(n,e,t,2);r||(s.pending=!0,s.value=0)}function vE(n,e,t,i){for(const r of n.bodies){if(!r.alive||r.kind==="ball")continue;const s=Math.abs(e-r.x),a=Math.abs(t-r.z);if(s<i+r.hx+.45&&a<i+r.hz+.45)return!1}return!0}function Xn(n,e,t,i){n.floors.push({id:n.nextId++,z0:e,z1:t,halfWidth:i})}function ua(n,e,t,i){const r=vs(i),s={id:n.nextId++,kind:"ball",x:e,y:r,z:t,hx:r,hy:r,hz:r,radius:r,value:i,alive:!0,flying:!1,pending:!1,vx:0,vy:0};return xE(n,s),n.bodies.push(s),s}function xE(n,e){const t=n.pendingLocks.get(e.id);t!==void 0&&(yl(e,t),n.pendingLocks.delete(e.id)),n.removed.has(e.id)&&(e.alive=!1)}function Kr(n,e,t,i,r){const s=e==="spike"?Wy:Xy,a={id:n.nextId++,kind:e,x:(i+r)/2,y:s,z:t,hx:(r-i)/2,hy:s,hz:.6,radius:0,value:0,alive:!0,flying:!1,pending:!1,vx:0,vy:0};return n.bodies.push(a),a}function Xh(n,e,t){const i={id:n.nextId++,kind:"block",x:e,y:Nf,z:t,hx:Ff,hy:Nf,hz:Ff,radius:0,value:0,alive:!0,flying:!1,pending:!1,vx:0,vy:0};return n.bodies.push(i),i}function ko(n,e,t){return Math.max(e,Math.min(t,n))}const qh="odin-run-2048",Yh="odin-run-2048-skin",SE="Merge matching balls, jump the spikes, and reach 2048.",ME="Arrows or A/D steer. Space, W, or Up jumps. S or Down fast-falls. On a phone, drag to steer and tap to jump.",yE=12e3,Va=document.querySelector("#app"),EE=document.querySelector("#labels"),kf=document.querySelector("#value"),bE=document.querySelector("#stats"),TE=document.querySelector("#hint"),xs=document.querySelector("#banner"),bl=document.querySelector("#overlay"),ea=document.querySelector("#title"),fi=document.querySelector("#blurb"),ta=document.querySelector("#controls"),Vc=document.querySelector("#best-line"),ba=document.querySelector("#play"),Wc=document.querySelector("#multiplayer"),wE=document.querySelector("#menu"),AE=document.querySelector("#skin-row"),Kh=document.querySelector("#skins"),Tl=document.querySelector("#countdown"),RE=document.querySelector("#room"),zf=document.querySelector("#room-blurb"),Hf=document.querySelector("#room-code"),wl=document.querySelector("#copy-code"),$h=document.querySelector("#join-form"),fa=document.querySelector("#code-input"),Gf=document.querySelector("#roster"),Jn=document.querySelector("#room-note"),Zh=document.querySelector("#create-room"),Xc=document.querySelector("#start-game"),Jh=document.querySelector("#spectate"),Qh=document.querySelector("#rematch"),qc=document.querySelector("#leave-room"),Yc=document.querySelector("#music"),Ui=new Set;let Al=0,Kc=!1,Ta=null,Rl=0,Cl=0,Pl=!1,da=0,jn=ZE(),ze="title",jh="",_t=!1,$t=null,Dn="",ei=!1,In=!1,En=0,ep=1,zo=0,Vf=0,wa=0,rt=null,Ll=Yf();const yr=new Map,Qn=new Map,vn=new Map,Er=new Map,qn=new Map,Ft=[],Ot=JE();let Se=Ga(Date.now()%1e9,Ot.value,Ot.distance);const rn=new Ay(Va,EE);rn.setSkin(jn);YE();window.addEventListener("resize",()=>rn.resize());window.addEventListener("keydown",n=>{Uh();const e=n.target,t=e instanceof HTMLElement&&!!e.closest("button, input, a");if(KE(n.code)&&!t&&n.preventDefault(),t||Ui.add(n.code),n.code==="Escape"&&In){In=!1,ze="dead-multi",Wt();return}bl.hidden||t||(ze==="title"||ze==="dead-solo")&&(n.code==="Space"||n.code==="Enter")&&tp()});window.addEventListener("keyup",n=>{Ui.delete(n.code)});window.addEventListener("blur",()=>Ui.clear());ba.addEventListener("click",()=>tp());Wc.addEventListener("click",()=>CE());Zh.addEventListener("click",()=>PE());Xc.addEventListener("click",()=>DE());Jh.addEventListener("click",()=>{In=!0,ze="hidden",Wt()});Qh.addEventListener("click",()=>IE());qc.addEventListener("click",()=>ip());wl.addEventListener("click",()=>void NE());$h.addEventListener("submit",n=>{n.preventDefault(),LE()});fa.addEventListener("input",()=>{fa.value=fa.value.toUpperCase().replace(/[^A-Z0-9]/g,"").slice(0,5)});Yc.addEventListener("click",()=>{Dy(),op()});Va.addEventListener("pointerdown",n=>{Uh(),bl.hidden&&n.target===rn.renderer.domElement&&(Ta=n.pointerId,Rl=n.clientX,Cl=n.clientY,Pl=!1,rn.renderer.domElement.setPointerCapture(n.pointerId))});Va.addEventListener("pointermove",n=>{if(n.pointerId!==Ta)return;const e=n.clientX-Rl,t=n.clientY-Cl;(Math.abs(e)>12||Math.abs(t)>12)&&(Pl=!0),Al=Math.max(-1,Math.min(1,e/90))});Va.addEventListener("pointerup",n=>{if(n.pointerId!==Ta)return;const e=n.clientX-Rl,t=n.clientY-Cl,i=!Pl&&Math.hypot(e,t)<14;Ta=null,Al=0,i&&(Kc=!0)});function tp(){if(!rt){if(Se.status==="ready")Bh(Se);else if(Se.status==="dead"){const n=Ui.has("Space")||Ui.has("ArrowUp")||Ui.has("KeyW");Se=Jy(Se,(Date.now()^Math.random()*1e9)>>>0,n),rn.clear(),rn.setSkin(jn),xs.hidden=!0}ze="hidden",Wt(),ba.blur()}}function CE(){ze="lobby",Jn.textContent="",Wt()}function PE(){Dn=Sp(),_t=!0,$t=null,np(Dn),rt&&($t=rt.id,Jn.textContent="",Wt())}function LE(){const n=Mp(fa.value);if(!n){Jn.textContent="Enter the 5 character code.";return}Dn=n,_t=!1,$t=null,np(n),rt&&(Jn.textContent="",window.clearTimeout(wa),wa=window.setTimeout(()=>{!_t&&$t===null&&ha("Couldn't open the room. Try again.")},yE),Wt())}function np(n){Dl(),Qn.clear(),vn.clear(),Er.clear(),qn.clear();try{rt=new Ng(n,{skin:()=>jn,isHost:()=>_t,started:()=>ei,onHello:(e,t)=>Ft.push(()=>FE(e,t.skin,t.host)),onSkin:(e,t)=>Ft.push(()=>rp(e,t)),onLeave:e=>Ft.push(()=>OE(e)),onStart:e=>Ft.push(()=>{_t||Aa(e)}),onPose:(e,t)=>Ft.push(()=>BE(e,t)),onLock:e=>Ft.push(()=>{_t||pE(Se,e.id,e.value)}),onTake:(e,t)=>Ft.push(()=>kE(e,t.id,t.valueBefore)),onGrant:e=>Ft.push(()=>zE(e.id)),onDeny:e=>Ft.push(()=>sp(e.id)),onFly:e=>Ft.push(()=>mE(Se,e.id,e.vx,e.vy)),onRematch:e=>Ft.push(()=>{_t||Aa(e)}),onFull:()=>Ft.push(()=>ha("That room is full.")),onStarted:()=>Ft.push(()=>ha("That match has started.")),onError:e=>Ft.push(()=>ha(e))})}catch{rt=null,_t=!1,$t=null,Dn="",Jn.textContent="Couldn't open the room. Try again.",Wt()}}function DE(){if(!rt||!_t||Qn.size<1||ei)return;const n=cp();rt.sendStart(n),Aa(n)}function IE(){if(!rt||!_t)return;const n=cp();rt.sendRematch(n),Aa(n)}function Aa(n){ep=n,En=3,ei=!0,In=!1,ze="countdown",Tl.textContent="3",Wt()}function UE(){Se=Ga(ep,Ot.value,Ot.distance),Se.authority=_t?"host":"guest",Bh(Se),rn.clear(),rn.setSkin(jn),Ll=Yf(),yr.clear(),vn.clear(),Er.clear(),qn.clear(),xs.hidden=!0,In=!1,ze="hidden",Wt()}function ip(n=""){jh=n,Dl(),_t=!1,$t=null,Dn="",ei=!1,In=!1,En=0,Qn.clear(),vn.clear(),Er.clear(),qn.clear(),yr.clear(),Se=Ga((Date.now()^Math.random()*1e9)>>>0,Ot.value,Ot.distance),rn.clear(),rn.setSkin(jn),xs.hidden=!0,ze="title",Wt()}function ha(n){Dl(),_t=!1,$t=null,Dn="",ei=!1,In=!1,En=0,Qn.clear(),vn.clear(),qn.clear(),ze="lobby",Jn.textContent=n,Wt()}async function Dl(){window.clearTimeout(wa);const n=rt;rt=null,n&&await n.leave()}async function NE(){if(Dn)try{await navigator.clipboard.writeText(Dn),wl.textContent="Copied"}catch{Jn.textContent="Select the code and copy it."}}function FE(n,e,t){if(rt){if(t){if(_t&&n!==rt.id)return;$t=n,window.clearTimeout(wa)}rp(n,e),ze==="lobby"&&(Jn.textContent=""),Wt()}}function rp(n,e){Qn.set(n,e);const t=vn.get(n);if(t)for(const i of t)i.pose.skin=e;(ze==="lobby"||ze==="dead-multi")&&ap()}function OE(n){if(Qn.delete(n),vn.delete(n),Er.delete(n),qn.delete(n),!_t&&n===$t){ip("The host left.");return}(ze==="lobby"||ze==="dead-multi")&&Wt()}function BE(n,e){const t=Er.get(n)??-1;if(e.seq<=t)return;Er.set(n,e.seq);const i=vn.get(n)??[];for(i.push({t:performance.now()/1e3,pose:e});i.length>8;)i.shift();vn.set(n,i)}function kE(n,e,t){if(!rt||!_t)return;if(!Se.bodies.find(s=>s.id===e&&s.alive)){rt.sendDeny({id:e,peerId:n},n);return}if(Kf(Ll,{ballId:e,peerId:n})==="deny"){rt.sendDeny({id:e,peerId:n},n);return}Vh(Se,e),rt.sendGrant({id:e,peerId:n})}function zE(n){Vh(Se,n),Ra(n)}function sp(n){const e=yr.get(n);if(Ra(n),!e)return;const t=$f(Se.player.value,e.valueBefore);t!==null&&Wh(Se,t)}function Ra(n){yr.delete(n),Se.held.delete(n)}function HE(){if(!(!rt||!ei)){if(_t)for(const n of Se.locks)rt.sendLock(n);for(const n of Se.knocks)rt.sendFly(n);for(const n of Se.merges)yr.set(n.id,{valueBefore:n.valueBefore,at:Se.time}),_t?Kf(Ll,{ballId:n.id,peerId:rt.id,valueBefore:n.valueBefore})==="grant"?(Ra(n.id),rt.sendGrant({id:n.id,peerId:rt.id})):sp(n.id):rt.sendTake({id:n.id,valueBefore:n.valueBefore});for(const[n,e]of yr){if(Se.time-e.at<=.8)continue;Ra(n);const t=$f(Se.player.value,e.valueBefore);t!==null&&Wh(Se,t);const i=Se.bodies.find(r=>r.id===n);i&&(i.alive=!0,Se.removed.delete(n))}}}function GE(n){if(!ei){Se.remotes=[],qn.clear();return}const e=Se.status==="running",t=[];for(const[i,r]of vn){const s=Tp(r,n);if(!s)continue;const a=Yy(Se.time,e,s,qn.get(i));a.heldZ===void 0?qn.delete(i):qn.set(i,a.heldZ),t.push({id:i,x:s.x,y:s.y,z:a.z,vy:s.vy,value:s.value,radius:s.radius,alive:s.alive,skin:s.skin})}Se.remotes=t}function VE(n){var t;if(_t||!$t||Se.status!=="running")return;const e=(t=vn.get($t))==null?void 0:t.at(-1);e!=null&&e.pose.alive&&Ky(Se,e.pose.time,n)}function WE(){if(!In||Se.status==="running")return Se.player;let n=null,e=1/0;for(const t of Se.remotes){if(!t.alive)continue;const i=Math.abs(t.z-Se.player.z);i<e&&(n=t,e=i)}return n??Se.player}function XE(){for(const n of vn.values()){const e=n[n.length-1];if(e!=null&&e.pose.alive)return!0}return!1}function qE(n){jn=n,localStorage.setItem(Yh,n),rn.setSkin(n),Kh.querySelectorAll("button").forEach(e=>{e.setAttribute("aria-pressed",e.dataset.skin===n?"true":"false")}),rt&&!ei&&rt.sendSkin(n)}function YE(){for(const n of Jo){const e=document.createElement("button");e.type="button",e.dataset.skin=n.id,e.title=n.name,e.setAttribute("aria-label",n.name),e.setAttribute("aria-pressed",n.id===jn?"true":"false");const t=document.createElement("canvas");t.width=128,t.height=128,wg(t,n.id),e.append(t),e.addEventListener("click",()=>qE(n.id)),Kh.append(e)}}function Wt(){bl.hidden=ze==="hidden";const n=rt!==null,e=n&&(_t||$t!==null),t=ze==="title"||ze==="dead-solo"||ze==="lobby";AE.hidden=!t,Tl.hidden=ze!=="countdown",wE.hidden=ze!=="title"&&ze!=="dead-solo",RE.hidden=ze!=="lobby"&&ze!=="dead-multi",ta.hidden=ze==="lobby"||ze==="countdown",Vc.hidden=ze==="countdown"||ze==="lobby",ze==="title"?(ea.textContent="Odin Run 2048",fi.hidden=!1,fi.textContent=jh||SE,ta.textContent=ME,ba.textContent="Play",Wc.hidden=!1):ze==="dead-solo"?(ea.textContent=Se.cause==="fall"?"You left the track":"The spikes got you",fi.hidden=!1,fi.textContent=Wf(),ta.textContent="Enter or Space to run again.",ba.textContent="Run again",Wc.hidden=!0,Vc.textContent=`Best ${Se.bestValue>=2?Se.bestValue:"—"} · ${Math.floor(Se.bestDistance)}`):ze==="countdown"?(ea.textContent="Get ready",fi.hidden=!1,fi.textContent="The run starts together."):(ze==="lobby"||ze==="dead-multi")&&(ea.textContent=ze==="dead-multi"?Se.cause==="fall"?"You left the track":"The spikes got you":"Multiplayer",fi.hidden=ze==="lobby",ze==="dead-multi"&&(fi.textContent=Wf()),zf.hidden=ze==="dead-multi",Hf.hidden=!Dn,Hf.textContent=Dn,wl.hidden=!e,$h.hidden=n||ze==="dead-multi",Zh.hidden=n||ze==="dead-multi",Xc.hidden=!_t||ze==="dead-multi",Xc.disabled=Qn.size<1,Jh.hidden=ze!=="dead-multi"||!XE(),Qh.hidden=ze!=="dead-multi"||!_t,qc.hidden=!1,qc.textContent=n||ze==="dead-multi"?"Leave":"Back",ze==="lobby"&&(zf.textContent=n?e?_t?"Share the code. Start when a friend has joined.":"Waiting for the host to start.":"Looking for the room…":"Create a room and share the code, or join a friend."),ze==="dead-multi"&&(ta.textContent="Spectate follows a friend. Esc comes back to this card.",Jn.textContent=_t?"Run again restarts everyone.":"Waiting for the host."),ap())}function ap(){if(Gf.replaceChildren(),!(!rt||!$t))for(const n of Ep(rt.id,$t,[...Qn.keys()])){const e=document.createElement("p"),t=document.createElement("span"),i=document.createElement("span");t.textContent=n.host?`${n.label} · host`:n.label;const r=n.id===rt.id?jn:Qn.get(n.id);i.textContent=r&&br(r)?as(r).name:"",e.append(t,i),Gf.append(e)}}function Wf(){return Se.player.value>=2048?`You reached ${Se.player.value}. Distance ${Math.floor(Se.distance)}.`:`You finished on ${Se.player.value}. Distance ${Math.floor(Se.distance)}.`}function KE(n){return n==="Space"||n.startsWith("Arrow")||n==="KeyW"||n==="KeyA"||n==="KeyS"||n==="KeyD"||n==="Escape"}function op(){const n=Py();Yc.textContent=n?"Music on":"Music off",Yc.setAttribute("aria-pressed",n?"true":"false")}function $E(){const n=Se.bestValue>=2?String(Se.bestValue):"—";kf.textContent=String(Se.player.value),kf.style.color=Se.invuln>0?"#ff8aa0":"#edc22e",bE.innerHTML=`Distance ${Math.floor(Se.distance)}<br>Best ${n} · ${Math.floor(Se.bestDistance)}`,TE.hidden=Se.status!=="running"||Se.distance>90,Se.showWin&&(xs.hidden=!1,Se.showWin=!1,da=2.6)}function ZE(){try{const n=localStorage.getItem(Yh);return n&&br(n)?n:"visor"}catch{return"visor"}}function JE(){try{const n=localStorage.getItem(qh);if(!n)return{value:0,distance:0};const e=JSON.parse(n);return{value:Number(e.value)||0,distance:Number(e.distance)||0}}catch{return{value:0,distance:0}}}function QE(){const n=Math.max(Ot.value,Se.bestValue),e=Math.max(Ot.distance,Se.bestDistance);n===Ot.value&&e===Ot.distance||(Ot.value=n,Ot.distance=e,localStorage.setItem(qh,JSON.stringify(Ot)))}function cp(){return(Date.now()^Math.random()*1e9)>>>0}function jE(){Vc.textContent=Ot.value>=2?`Best ${Ot.value} · ${Math.floor(Ot.distance)}`:"",Wt()}let Xf=performance.now();function lp(n){var i;const e=Math.min(.033,(n-Xf)/1e3);Xf=n;const t=n/1e3;for(;Ft.length>0;)(i=Ft.shift())==null||i();if(En>0){const r=Math.max(1,Math.ceil(En));En-=e;const s=Math.max(1,Math.ceil(Math.max(En,0)));s!==r&&En>0&&(Tl.textContent=String(s)),En<=0&&(En=0,UE())}if(VE(e),GE(t),Se.status==="running"&&ze==="hidden"){const r=Gg({has:s=>Ui.has(s)},Al,Kc);Kc=!1,Qy(Se,r,e),HE();for(const s of Se.events)Uy(s);QE()}else In&&cE(Se);Se.status==="dead"&&ze==="hidden"&&!In&&(ze=rt?"dead-multi":"dead-solo",Wt()),da>0&&(da-=e,da<=0&&(xs.hidden=!0)),zo+=e,rt&&ei&&ze!=="countdown"&&zo>=1/20&&(zo=0,Vf+=1,rt.sendPose({x:Se.player.x,y:Se.player.y,z:Se.player.z,time:Se.time,vy:Se.player.vy,value:Se.player.value,radius:Se.player.radius,alive:Se.status==="running",skin:jn,seq:Vf})),Iy(t),$E(),rn.resize(),rn.sync(Se,WE()),requestAnimationFrame(lp)}jE();op();requestAnimationFrame(lp);
