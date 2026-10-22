var Mp=Object.defineProperty;var yp=(n,e,t)=>e in n?Mp(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var Fe=(n,e,t)=>yp(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const ra="ABCDEFGHJKLMNPQRSTUVWXYZ23456789",$f=5,Ep=4;function bp(n=Math.random){let e="";for(let t=0;t<$f;t++){const i=Math.min(ra.length-1,Math.floor(n()*ra.length));e+=ra[i]}return e}function Tp(n){const e=n.trim().toUpperCase().replace(/[^A-Z0-9]/g,"");if(e.length!==$f)return null;for(const t of e)if(!ra.includes(t))return null;return e}function wp(n){return n<Ep}function Ap(n,e,t){const i=new Set([...t,n]);return i.delete(e),[e,...[...i].sort()].map((s,a)=>({id:s,label:s===n?"You":`Player ${a+1}`,host:s===e}))}function Zf(){return{grants:new Map}}function Jf(n,e){const t=n.grants.get(e.ballId);return t!==void 0?t===e.peerId?"grant":"deny":(n.grants.set(e.ballId,e.peerId),"grant")}function Qf(n,e){return e>=2&&n===e*2?e:null}function Rp(n,e,t){const i=Math.min(1,Math.max(0,t));return{x:n.x+(e.x-n.x)*i,y:n.y+(e.y-n.y)*i,z:n.z+(e.z-n.z)*i,time:n.time+(e.time-n.time)*i,vy:n.vy+(e.vy-n.vy)*i,value:i<.5?n.value:e.value,radius:n.radius+(e.radius-n.radius)*i,alive:n.alive&&e.alive,skin:i<.5?n.skin:e.skin,seq:e.seq}}function Cp(n,e,t=.08){if(n.length===0)return null;const i=e-t;if(n.length===1||i<=n[0].t)return n[0].pose;let r=0;for(;r<n.length-1&&n[r+1].t<=i;)r++;const s=n[r],a=n[Math.min(r+1,n.length-1)];if(s===a)return s.pose;const o=a.t-s.t,l=o>1e-6?(i-s.t)/o:1;return Rp(s.pose,a.pose,l)}/*! noble-secp256k1 - MIT License (c) 2019 Paul Miller (paulmillr.com) */const Ql=Object.freeze,Ei=0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2fn,ds=0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141n,jf=0x79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798n,ed=0x483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8n,Pp=Ql({p:Ei,n:ds,h:1n,a:0n,b:7n,Gx:jf,Gy:ed}),xn=32,Jc=n=>n instanceof Uint8Array||ArrayBuffer.isView(n)&&n.constructor.name==="Uint8Array"&&n.BYTES_PER_ELEMENT===1,cn=(n,e,t="")=>{if(Jc(n)&&(e===void 0||n.length===e))return n;const i=Jc(n),r=e!==void 0?` of length ${e}`:"",s=i?`length=${n.length}`:`type=${typeof n}`,a=(t?`"${t}" `:"")+"expected Uint8Array"+r+", got "+s;throw i?new RangeError(a):new TypeError(a)},Lp=n=>Uint8Array.from(n),Dp=(n,e,t)=>Lp(cn(n,t,e)),td=(n,e)=>n.toString(16).padStart(e,"0"),nd=n=>{let e="";for(const t of cn(n))e+=td(t,2);return e},id=n=>{const e="hex invalid";if(typeof n!="string")throw new TypeError(e);if(n.length%2||!/^[\da-f]*$/i.test(n))throw new RangeError(e);const t=new Uint8Array(n.length/2);for(let i=0,r=0;i<t.length;i++,r+=2){const s=n.charCodeAt(r),a=n.charCodeAt(r+1);t[i]=((s&15)+(s>>6)*9)*16+(a&15)+(a>>6)*9}return t},Qc=()=>{var e;const n=(e=globalThis==null?void 0:globalThis.crypto)==null?void 0:e.subtle;if(n)return n;throw new Error("crypto.subtle must be defined, consider polyfill")},gr=(...n)=>{let e=0;for(const r of n)e+=cn(r).length;const t=new Uint8Array(e);let i=0;for(const r of n)t.set(r,i),i+=r.length;return t},jl=(n=xn)=>{const e=globalThis==null?void 0:globalThis.crypto;if(typeof(e==null?void 0:e.getRandomValues)!="function")throw new Error("crypto.getRandomValues must be defined, consider polyfill");return e.getRandomValues(new Uint8Array(n))},Ip=BigInt,hs=(n,e,t,i="bad number: out of range")=>{if(typeof n!="bigint")throw new TypeError(i);if(e<=n&&n<t)return n;throw new RangeError(i)},Le=(n,e=Ei)=>(n%=e)>=0n?n:e+n,Ia=n=>Le(n,ds),Up=(n,e)=>{if(n===0n)throw new Error("invert: expected non-zero number");if(e<=1n)throw new Error("invert: expected modulus > 1, got "+e);let t=Le(n,e),i=e,r=0n,s=1n;for(;t!==0n;){const o=i/t,l=i-t*o,c=r-s*o;i=t,t=l,r=s,s=c}if(i!==1n)throw new Error("invert: does not exist");return Le(r,e)},rd=n=>{const e=Bp[n];if(typeof e!="function")throw new Error("hashes."+n+" not set");return e},jc=(n,e,t)=>cn(rd(n)(e,t),xn,"digest"),eu=async(n,e,t)=>cn(await rd(n)(e,t),xn,"digest"),$a=n=>{if(n instanceof bi)return n;throw new TypeError("Point expected")},Za="bad point: not on curve",sd=n=>Le(Le(n*n)*n+7n),tu=n=>hs(n,0n,Ei),Zr=n=>hs(n,1n,Ei),ad=n=>hs(n,1n,ds),Ua=n=>!(n&1n),Np=n=>Uint8Array.of(Ua(n)?2:3),od=n=>{const e=sd(Zr(n));let t=1n;for(let i=e,r=(Ei+1n)/4n;r>0n;r>>=1n)r&1n&&(t=t*i%Ei),i=i*i%Ei;if(Le(t*t)!==e)throw new Error("sqrt invalid");return new bi(n,Ua(t)?t:Le(-t),1n)},Xn=class Xn{constructor(e,t,i){Fe(this,"X");Fe(this,"Y");Fe(this,"Z");this.X=tu(e),this.Y=Zr(t),this.Z=tu(i),Ql(this)}static CURVE(){return Pp}static fromAffine(e){const{x:t,y:i}=e;return t===0n&&i===0n?Jr:new Xn(t,i,1n)}static fromBytes(e){cn(e);const t=e.length,i=e[0],r=ga(e,1,33);try{if(t===33&&(i===2||i===3)){const s=od(r);return i===3?s.negate():s}if(t===65&&i===4)return new Xn(r,ga(e,33,65),1n).assertValidity()}catch{throw new Error(Za)}throw new Error(Za)}static fromHex(e){return Xn.fromBytes(id(e))}get x(){return this.toAffine().x}get y(){return this.toAffine().y}equals(e){const{X:t,Y:i,Z:r}=this,{X:s,Y:a,Z:o}=$a(e);return Le(t*o)===Le(s*r)&&Le(i*o)===Le(a*r)}is0(){return this.Z===0n}negate(){return new Xn(this.X,Le(-this.Y),this.Z)}double(){return this.add(this)}add(e){const{X:t,Y:i,Z:r}=this,{X:s,Y:a,Z:o}=$a(e),l=0n,c=7n;let h=0n,p=0n,f=0n;const m=Le(c*3n);let _=Le(t*s),S=Le(i*a),d=Le(r*o),u=Le(t+i),v=Le(s+a);u=Le(u*v),v=Le(_+S),u=Le(u-v),v=Le(t+r);let w=Le(s+o);return v=Le(v*w),w=Le(_+d),v=Le(v-w),w=Le(i+r),h=Le(a+o),w=Le(w*h),h=Le(S+d),w=Le(w-h),f=Le(l*v),h=Le(m*d),f=Le(h+f),h=Le(S-f),f=Le(S+f),p=Le(h*f),S=Le(_+_),S=Le(S+_),d=Le(l*d),v=Le(m*v),S=Le(S+d),d=Le(_-d),d=Le(l*d),v=Le(v+d),_=Le(S*v),p=Le(p+_),_=Le(w*v),h=Le(u*h),h=Le(h-_),_=Le(u*S),f=Le(w*f),f=Le(f+_),new Xn(h,p,f)}subtract(e){return this.add($a(e).negate())}multiply(e,t=!0){if(!t&&e===0n)return Jr;if(ad(e),e===1n)return this;if(this.equals(ki))return qp(e).p;let i=Jr,r=ki,s=this;for(let a=0;t?a<256:e>0n;a++)e&1n?i=i.add(s):t&&(r=r.add(s)),s=s.double(),e>>=1n;return i}multiplyUnsafe(e){return this.multiply(e,!1)}toAffine(){const{X:e,Y:t,Z:i}=this;if(i===0n)return{x:0n,y:0n};if(i===1n)return{x:e,y:t};const r=Up(i,Ei);if(Le(i*r)!==1n)throw new Error("inverse invalid");return{x:Le(e*r),y:Le(t*r)}}assertValidity(){const{x:e,y:t}=this.toAffine();if(Zr(e),Zr(t),Le(t*t)!==sd(e))throw new Error(Za);return this}toBytes(e=!0){const{x:t,y:i}=this.assertValidity().toAffine(),r=jn(t);return e?gr(Np(i),r):gr(Uint8Array.of(4),r,jn(i))}toHex(e){return nd(this.toBytes(e))}};Fe(Xn,"BASE"),Fe(Xn,"ZERO");let bi=Xn;const ki=new bi(jf,ed,1n),Jr=new bi(0n,1n,0n);bi.BASE=ki;bi.ZERO=Jr;const Fp=(n,e,t)=>ki.multiply(e,!1).add(n.multiply(t,!1)).assertValidity(),Wi=n=>Ip("0x"+(nd(n)||"0")),ga=(n,e,t)=>Wi(n.subarray(e,t)),jn=n=>id(td(hs(n,0n,2n**256n),xn*2)),Op=n=>{const e=Wi(cn(n,xn,"secret key"));return hs(e,1n,ds,"invalid secret key: outside of range")},nu="SHA-256",Bp={hmacSha256Async:async(n,e)=>{const t=Qc(),i=await t.importKey("raw",n,{name:"HMAC",hash:nu},!1,["sign"]);return new Uint8Array(await t.sign("HMAC",i,e))},hmacSha256:void 0,sha256Async:async n=>new Uint8Array(await Qc().digest(nu,n)),sha256:void 0},kp=n=>{if(n=n===void 0?jl(48):n,cn(n),n.length<48||n.length>1024)throw new RangeError("expected 48-1024b");const e=Le(Wi(n),ds-1n);return jn(e+1n)},zp=n=>e=>{const t=kp(e);return{secretKey:t,publicKey:n(t)}},ld=n=>Uint8Array.from("BIP0340/"+n,e=>e.charCodeAt(0)),Wo=(n,...e)=>{const t=jc("sha256",ld(n));return jc("sha256",gr(t,t,...e))},Xo=(n,...e)=>eu("sha256Async",ld(n)).then(t=>eu("sha256Async",gr(t,t,...e))),ec=n=>{const e=Op(n),t=ki.multiply(e),{x:i,y:r}=t.assertValidity().toAffine(),s=Ua(r)?e:Ia(-e),a=jn(i);return{d:s,px:a}},tc=n=>Ia(Wi(n)),cd=(...n)=>tc(Wo("challenge",...n)),ud=async(...n)=>tc(await Xo("challenge",...n)),fd=n=>ec(n).px,Hp=zp(fd),dd=(n,e,t)=>{const i=Dp(n,"message"),{px:r,d:s}=ec(e);return{m:i,px:r,d:s,a:cn(t,xn)}},hd=n=>{const e=tc(n);if(e===0n)throw new Error("sign failed: k is zero");const{px:t,d:i}=ec(jn(e));return{rx:t,k:i}},pd=(n,e,t,i)=>gr(e,jn(Ia(n+t*i))),md="invalid signature produced",Gp=(n,e,t=jl(xn))=>{const{m:i,px:r,d:s,a}=dd(n,e,t),o=jn(s^Wi(Wo("aux",a))),{rx:l,k:c}=hd(Wo("nonce",o,r,i)),h=pd(c,l,cd(l,r,i),s);if(!_d(h,i,r))throw new Error(md);return h},Vp=async(n,e,t=jl(xn))=>{const{m:i,px:r,d:s,a}=dd(n,e,t),o=jn(s^Wi(await Xo("aux",a))),{rx:l,k:c}=hd(await Xo("nonce",o,r,i)),h=pd(c,l,await ud(l,r,i),s);if(!await vd(h,i,r))throw new Error(md);return h},Wp=(n,e)=>n instanceof Promise?n.then(e):e(n),gd=(n,e,t,i)=>{const r=cn(n,64,"signature"),s=cn(e,void 0,"message"),a=cn(t,xn,"publicKey");let o,l,c,h;try{const p=Wi(a);o=od(p),l=Zr(ga(r,0,xn)),c=ad(ga(r,xn,64)),h=gr(jn(l),a,s)}catch{return!1}return Wp(i(h),p=>{try{const{x:f,y:m}=Fp(o,c,Ia(-p)).toAffine();return!(!Ua(m)||f!==l)}catch{return!1}})},_d=(n,e,t)=>gd(n,e,t,cd),vd=async(n,e,t)=>gd(n,e,t,ud),xd=Ql({keygen:Hp,getPublicKey:fd,sign:Gp,verify:_d,signAsync:Vp,verifyAsync:vd}),Xp=()=>{const n=[];let e=ki,t=e;for(let i=0;i<33;i++){t=e,n.push(t);for(let r=1;r<128;r++)t=t.add(e),n.push(t);e=t.double()}return n};let iu;const ru=(n,e)=>{const t=e.negate();return n?t:e},qp=n=>{const e=iu||(iu=Xp());let t=Jr,i=ki;for(let r=0;r<33;r++){let s=Number(n&255n);n>>=8n,s>128&&(s-=256,n+=1n);const a=r*128,o=a+Math.abs(s)-1,l=r%2!==0,c=s<0;s===0?i=i.add(ru(l,e[a])):t=t.add(ru(c,e[o]))}if(n!==0n)throw new Error("invalid wnaf");return{p:t,f:i}},{floor:qo,min:Yp,sin:Kp}=Math,kt="Trystero",nc=(n,e)=>Array(n).fill(void 0).map(e),$p="0123456789AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz",Xi=n=>nc(n,()=>$p[qo(Math.random()*62)]??"").join(""),tn=Xi(20),qi=Promise.all.bind(Promise),Sd=typeof window<"u",{entries:_r,fromEntries:Md,keys:gn,values:Wn}=Object,Rt=()=>{},yd="candidate",Qe=n=>(n!==null&&clearTimeout(n),null),Ke=n=>new Error(`${kt}: ${n}`),vr=(n,e)=>n instanceof Error&&n.message?n.message:typeof n=="string"&&n?n:Vt(n??e),Mi=(n,e)=>n instanceof Error?n:Ke(vr(n,e)),Zp=new TextEncoder,Jp=new TextDecoder,Yn=n=>Zp.encode(n),Oi=n=>Jp.decode(n),rs=n=>n.reduce((e,t)=>e+t.toString(16).padStart(2,"0"),""),xr=(...n)=>n.join("@"),Qp=(n,e)=>{const t=[...n],i=()=>{const s=Kp(e++)*1e4;return s-qo(s)};let r=t.length;for(;r;){const s=qo(i()*r--),a=t[r];t[r]=t[s],t[s]=a}return t},jp=(n,e,t,i=!1)=>{var r,s;return((r=n.relayConfig)==null?void 0:r.urls)||(i?Qp(e,Ed(n.appId)):e).slice(0,((s=n.relayConfig)==null?void 0:s.redundancy)??t)},Vt=JSON.stringify,ps=n=>{try{return JSON.parse(n)}catch{throw Ke(`failed to parse JSON: ${n}`)}},Ed=(n,e=Number.MAX_SAFE_INTEGER)=>n.split("").reduce((t,i)=>t+i.charCodeAt(0),0)%e,su=3333,em=6e4,Dr={};let Qr=null,jr=null;const tm=()=>{Qr||(Qr=new Promise(n=>{jr=n}).finally(()=>{jr=null,Qr=null}))},nm=()=>{jr==null||jr()},im=(n,e,t)=>{const i={};let r=!1,s=!1,a,o=Rt;i.isClosed=!1,i.ready=new Promise(c=>o=c);const l=()=>{if(i.isClosed)return;a=void 0,s=!1;const c=new WebSocket(n);c.onclose=()=>{if(i.isClosed||s)return;if(s=!0,Qr){Qr.then(l);return}const h=Dr[n]??(Dr[n]=su);a=setTimeout(l,Math.random()*h),Dr[n]=Yp(h*2,em)},c.onmessage=h=>e(String(h.data)),i.socket=c,i.url=c.url,c.onopen=()=>{const h=r;r=!0,o(i),Dr[n]=su,h&&(t==null||t())},i.send=h=>{c.readyState===1&&c.send(h)}};return i.close=()=>{i.isClosed=!0,a!==void 0&&(clearTimeout(a),a=void 0),i.socket.close()},l(),i},rm=n=>{const e={},t=new WeakMap,i=a=>{const o=t.get(a);if(!o)throw Ke("relay bookkeeping missing registration for relay client");return o},r=()=>{const a={},o=l=>a[l]??(a[l]={});return{forKey:o,forRelay:l=>o(i(l))}},s=(a,o)=>(e[a]=o,t.set(o,a),o);return{register:(a,o)=>{const l=e[a];return l||s(a,o())},keyOf:i,scoped:r,getSockets:()=>Md(_r(e).flatMap(([a,o])=>{const l=n(o);return l?[[a,l]]:[]}))}},sm=()=>{if(Sd){const n=new AbortController;return addEventListener("online",nm,{signal:n.signal}),addEventListener("offline",tm,{signal:n.signal}),()=>n.abort()}return Rt},ic="AES-GCM",Ja={},am=n=>btoa(String.fromCharCode.apply(null,Array.from(new Uint8Array(n)))),om=n=>{const e=atob(n);return new Uint8Array(e.length).map((t,i)=>e.charCodeAt(i)).buffer},Na=async(n,e)=>new Uint8Array(await crypto.subtle.digest(n,Yn(e))),Sr=async n=>Ja[n]??(Ja[n]=Array.from(await Na("SHA-1",n)).map(e=>e.toString(36)).join("")),lm=async(n,e,t)=>crypto.subtle.importKey("raw",await crypto.subtle.digest({name:"SHA-256"},Yn(`${n}:${e}:${t}`)),{name:ic},!1,["encrypt","decrypt"]),cm=async(n,e)=>rs(await Na("SHA-256",`${kt}:${n}:${e}`)),bd="$",Td=",",um=async(n,e)=>{const t=crypto.getRandomValues(new Uint8Array(16));return t.join(Td)+bd+am(await crypto.subtle.encrypt({name:ic,iv:t},await n,Yn(e)))},fm=async(n,e)=>{const[t,i]=e.split(bd);return Oi(await crypto.subtle.decrypt({name:ic,iv:new Uint8Array((t==null?void 0:t.split(Td).map(Number))??[])},await n,om(i??"")))},dm=18e4;var hm=class{constructor(n){Fe(this,"makeOffer");Fe(this,"leased",new Map);Fe(this,"destroyed",!1);this.makeOffer=n}claimLeased(n){const e=this.leased.get(n);e&&(Qe(e),this.leased.delete(n))}reclaimLeased(n){this.leased.has(n)&&(this.claimLeased(n),n.destroy())}checkout(n,e,t){const i=async(r=!1)=>{if(this.destroyed)throw Ke("room left while preparing offer");const s=this.makeOffer();try{const a=await t(s);if(this.destroyed)throw Ke("room left while preparing offer");return e?(this.leased.set(s,setTimeout(()=>{this.leased.delete(s),s.destroy()},dm)),{peer:s,offer:a,claim:()=>this.claimLeased(s),reclaim:()=>this.reclaimLeased(s)}):{peer:s,offer:a}}catch(a){if(s.destroy(),!r&&!this.destroyed)return i(!0);throw a}};return qi(nc(n,()=>i()))}getOffers(n,e){return this.checkout(n,!0,e)}destroy(){this.destroyed=!0,this.leased.forEach((n,e)=>{Qe(n),e.destroy()}),this.leased.clear()}};const Qa=Ke("incorrect password for overlapping room"),pm=(n,e,t)=>{const i=a=>Na("SHA-256",`${a}:${n}:${e}:${t}`).then(rs),r=async(a,o,l)=>{if(!n)return;if(l){const h=Xi(36);await a({__trystero_pw:"challenge",c:h});const{data:p}=await o();if(!p||typeof p!="object"||p.__trystero_pw!=="response"||typeof p.h!="string")throw Qa;const f=await i(h);if(p.h!==f)throw Qa;return}const{data:c}=await o();if(!c||typeof c!="object"||c.__trystero_pw!=="challenge"||typeof c.c!="string")throw Qa;await a({__trystero_pw:"response",h:await i(c.c)})};return{run:r,compose:a=>n||a?async(o,l,c,h)=>{await r(l,c,h),await(a==null?void 0:a(o,l,c,h))}:void 0}},mm=n=>{const e=vr(n,"unknown error");return e.startsWith("handshake ")?e:`handshake failed: ${e}`},gm=({onPeerHandshake:n,onHandshakeError:e,handshakeTimeoutMs:t,sendHandshakeData:i,sendHandshakeReady:r,onActivate:s,onFailure:a})=>{const o={},l=(p,f)=>{const m=o[p];!m||f&&m.peer!==f||m.isActive||!m.didLocalHandshakePass||!m.didReceiveRemoteReady||(m.isActive=!0,m.handshakeTimer=Qe(m.handshakeTimer),s(p,m.peer))},c=(p,f,m)=>{const _=o[p];if(!_||_.peer!==f)return;const S=mm(m);e==null||e(p,S),a(p,f,Ke(S))},h=(p,f)=>{const m=o[p];!m||m.peer!==f||m.isActive||(m.didLocalHandshakePass=!0,r("",p).catch(_=>c(p,f,Ke(`failed sending handshake readiness: ${vr(_,"unknown send failure")}`))),l(p,f))};return{addPeer:(p,f)=>{o[p]={peer:f,isActive:!1,didLocalHandshakePass:!1,didReceiveRemoteReady:!1,handshakeTimer:null,pendingHandshakePayloads:[],handshakeWaiters:[]}},clearPeer:(p,f)=>{const m=o[p];m&&(m.handshakeTimer=Qe(m.handshakeTimer),m.pendingHandshakePayloads.length=0,m.handshakeWaiters.splice(0).forEach(_=>_.reject(f)),delete o[p])},canReceiveFromPeer:(p,f)=>{const m=o[p];return!!(m&&(m.isActive||f))},start:(p,f)=>{const m=o[p];if(!m||m.peer!==f)return;m.handshakeTimer=setTimeout(()=>c(p,f,Ke(`handshake timed out after ${t}ms`)),t);const _=async(u,v)=>{await i(u,p,v)},S=()=>new Promise((u,v)=>{const w=o[p];if(!w||w.peer!==f){v(Ke("peer disconnected during handshake"));return}const M=w.pendingHandshakePayloads.shift();if(M){u(M);return}w.handshakeWaiters.push({resolve:u,reject:b=>v(b)})}),d=tn<p;Promise.resolve(n==null?void 0:n(p,_,S,d)).then(()=>h(p,f)).catch(u=>c(p,f,Mi(u,"handshake failed")))},receiveHandshakeData:(p,f,m)=>{const _=o[f];if(!_||_.isActive)return;const S=m===void 0?{data:p}:{data:p,metadata:m},d=_.handshakeWaiters.shift();if(d){d.resolve(S);return}if(_.pendingHandshakePayloads.length>=16){c(f,_.peer,Ke("too many pending handshake messages"));return}_.pendingHandshakePayloads.push(S)},receiveHandshakeReady:p=>{const f=o[p];!f||f.isActive||(f.didReceiveRemoteReady=!0,l(p))}}},wd=16384,Yo=1e4,_a=12e4,_m=15e3,vm=150,xm=5e3,au="icecandidate",ou="icegatheringstatechange",Sm="iceconnectionstatechange",Ir="offer",Mm="answer",ym=/out of range/i,Em=128,bm=8192,lu=n=>n.replace(/ (\S+\.local) (\d+) typ host/g," 127.0.0.1 $2 typ host");var cu=(n,{trickleIce:e,rtcConfig:t,rtcPolyfill:i,turnConfig:r,_test_only_mdnsHostFallbackToLoopback:s})=>{const a=new(i??RTCPeerConnection)({iceServers:uu.concat(r??[]),...t}),o={},l=new Set,c=[],h=[];let p=null;const f=e!==!1,m=[],_=[];let S,d=!1,u=!1,v=null,w=null,M=!1;const b=H=>{S&&(S(H),S=void 0)},T=()=>w=Qe(w),P=()=>{var H;M||(M=!0,l.forEach(ie=>ie()),p=Qe(p),h.length=0,T(),(H=o.close)==null||H.call(o))},x=H=>{H.type===Ir&&(b(H),!o.signal&&!a.remoteDescription)||(o.signal?o.signal(H):c.push(H))},C=H=>{const ie=o.signal;o.signal=me=>{ie==null||ie(me),H(me)},c.length>0&&c.splice(0).forEach(me=>{var ce;return(ce=o.signal)==null?void 0:ce.call(o,me)})},N=H=>s?lu(H):H,O=H=>{if(!s||typeof H.candidate!="string")return H;const ie=lu(H.candidate);return ie===H.candidate?H:{...H,candidate:ie}},V=H=>{var ie,me;return{type:((ie=H.localDescription)==null?void 0:ie.type)??Ir,sdp:N(((me=H.localDescription)==null?void 0:me.sdp)??"")}},E=()=>{var ie,me;const H=(ie=a.remoteDescription)==null?void 0:ie.sdp;return H?((me=H.match(/a=ice-ufrag:([^\s]+)/))==null?void 0:me[1])??null:null},A=()=>{var H,ie;return(((ie=(H=a.remoteDescription)==null?void 0:H.sdp)==null?void 0:ie.match(/^m=/gm))??[]).length},D=H=>{if(!a.remoteDescription)return!1;const ie=A();if(typeof H.sdpMLineIndex=="number"&&ie>0&&H.sdpMLineIndex>=ie)return!1;const me=E();return!(me&&H.usernameFragment&&H.usernameFragment!==me)},U=async H=>{try{return await a.addIceCandidate(H),!0}catch(ie){if(ie instanceof Error&&ym.test(ie.message)&&typeof H.sdpMLineIndex=="number")return!1;throw ie}},F=H=>{m.length>=Em&&m.shift(),m.push(H)},W=async()=>{if(!a.remoteDescription||m.length===0)return;const H=E(),ie=m.splice(0),me=[];for(const ce of ie)if(!(H&&ce.usernameFragment&&ce.usernameFragment!==H)){if(!D(ce)){me.push(ce);continue}await U(ce)||me.push(ce)}me.forEach(F)},L=async H=>{if(D(H)){await U(H)||F(H);return}F(H)},I=H=>{H.binaryType="arraybuffer",H.bufferedAmountLowThreshold=65535;const ie=()=>{console.warn(`${kt}: invalid or excessive data before handler registration; disconnecting peer`),H.close(),a.close(),P()};H.onmessage=me=>{const ce=me.data;if(!M){if(!(ce instanceof ArrayBuffer)&&!ArrayBuffer.isView(ce)||ce.byteLength>16515){ie();return}if(o.data)o.data(ce);else{if(h.length>=64){ie();return}p||(p=setTimeout(ie,Yo)),h.push(ce)}}},H.onopen=()=>{var me;return(me=o.connect)==null?void 0:me.call(o)},H.onclose=P,H.onerror=({error:me})=>{var ce;M||(me==null?void 0:me.errorDetail)==="sctp-failure"&&(me.sctpCauseCode===12||/^User-Initiated Abort\b/.test(me.message))||(ce=o.error)==null||ce.call(o,Mi(me,"data channel error"))}},X=(t==null?void 0:t.iceServers)??uu.concat(r??[]),se=H=>X.some(({urls:ie})=>(Array.isArray(ie)?ie:[ie]).some(me=>H.test(me))),oe=se(/^turns?:/i),Me=!oe&&se(/^stuns?:/i),Ne=oe?/\btyp relay\b/:Me?/\btyp (?:srflx|relay|prflx)\b/:/\btyp (?:host|srflx|relay|prflx)\b/,Oe=async H=>(await new Promise(ie=>{let me=null,ce=null;const Ee=()=>{Qe(me),Qe(ce),H.removeEventListener(ou,He),H.removeEventListener(au,rt),l.delete(Ee),ie()},We=(Be="")=>{var Ze;const $e=`${((Ze=H.localDescription)==null?void 0:Ze.sdp)??""}
${Be}`;Ne.test($e)&&(Qe(ce),ce=setTimeout(Ee,vm))},He=()=>{H.iceGatheringState==="complete"||M?Ee():We()},rt=Be=>{const{candidate:$e}=Be;$e?We($e.candidate):Ee()};l.add(Ee),me=setTimeout(Ee,_m),H.addEventListener(ou,He),H.addEventListener(au,rt),He()}),V(H)),Q=async()=>{const H=f?V(a):await Oe(a);return M||x(H),H};n?(v=a.createDataChannel("data"),I(v)):a.ondatachannel=({channel:H})=>{v=H,I(H)};const ee=async(H=!1)=>{var ie,me;if(a.connectionState==="closed"||!H&&(d||a.signalingState!=="stable")){a.connectionState==="closed"&&b();return}try{return d=!0,H&&(a.remoteDescription&&a.signalingState!=="stable"&&a.signalingState!=="closed"&&((ie=a.localDescription)==null?void 0:ie.type)===Ir&&await a.setLocalDescription({type:"rollback"}),typeof a.restartIce=="function"&&a.restartIce()),await a.setLocalDescription(H?await a.createOffer({iceRestart:!0}):void 0),await Q()}catch(ce){H||b(),(me=o.error)==null||me.call(o,Mi(ce,"failed to create local offer"))}finally{d=!1}};a.onnegotiationneeded=async()=>ee(!1),a.onicecandidate=({candidate:H})=>{if(!f||!H)return;const ie=O(typeof H.toJSON=="function"?H.toJSON():{candidate:H.candidate,sdpMid:H.sdpMid,sdpMLineIndex:H.sdpMLineIndex,usernameFragment:H.usernameFragment});x({type:yd,sdp:JSON.stringify(ie)})};const ve=()=>{if(a.connectionState==="failed"||a.connectionState==="closed"||a.iceConnectionState==="failed"||a.iceConnectionState==="closed"){P();return}if(a.connectionState==="connected"||a.connectionState==="connecting"||a.iceConnectionState==="connected"||a.iceConnectionState==="completed"||a.iceConnectionState==="checking"){T();return}if(a.connectionState==="disconnected"||a.iceConnectionState==="disconnected"){w||(w=setTimeout(()=>{w=null,(a.connectionState==="disconnected"||a.iceConnectionState==="disconnected")&&P()},xm));return}};a.onconnectionstatechange=ve,a.addEventListener(Sm,ve),a.ontrack=H=>{var me,ce;const ie=H.streams[0];if(ie){if(!o.track&&!o.stream){_.push({track:H.track,stream:ie});return}(me=o.track)==null||me.call(o,H.track,ie),(ce=o.stream)==null||ce.call(o,ie)}};const De=n?new Promise(H=>{S=H}):Promise.resolve();return n&&queueMicrotask(()=>{var H;!d&&a.signalingState==="stable"&&!a.localDescription&&a.connectionState!=="closed"&&((H=a.onnegotiationneeded)==null||H.call(a,new Event("negotiationneeded")))}),{connection:a,get channel(){return v},get isDead(){return a.connectionState==="closed"},getOffer:async(H=!1)=>{var ie;if(n)return H?ee(!0):S?De:((ie=a.localDescription)==null?void 0:ie.type)===Ir?f?V(a):Oe(a):De},async signal(H){var ie,me,ce;if(H.type==="candidate"){if(H.sdp.length>bm)return;try{const Ee=JSON.parse(H.sdp);Ee&&typeof Ee=="object"&&await L(O(Ee))}catch(Ee){(ie=o.error)==null||ie.call(o,Mi(Ee,"failed to parse remote candidate"))}return}if(!((v==null?void 0:v.readyState)==="open"&&!((me=H.sdp)!=null&&me.includes("a=rtpmap"))))try{const Ee={...H,sdp:N(H.sdp)};if(H.type===Ir){const We=d||a.signalingState!=="stable"&&!u;return We&&n?void 0:(We&&a.signalingState!=="stable"?await qi([a.setLocalDescription({type:"rollback"}),a.setRemoteDescription(Ee)]):await a.setRemoteDescription(Ee),await W(),await a.setLocalDescription(),await Q())}if(H.type===Mm){u=!0;try{await a.setRemoteDescription(Ee),await W()}finally{u=!1}}}catch(Ee){(ce=o.error)==null||ce.call(o,Mi(Ee,"failed to apply remote signal"))}},sendData:H=>v==null?void 0:v.send(H),destroy:()=>{T(),b(),v==null||v.close(),a.close(),d=!1,u=!1,P()},setHandlers:H=>{const{signal:ie,...me}=H;Object.assign(o,me),o.data&&h.length>0&&(p=Qe(p),h.splice(0).forEach(ce=>{var Ee;return(Ee=o.data)==null?void 0:Ee.call(o,ce)})),ie&&C(ie),(o.track||o.stream)&&_.length>0&&_.splice(0).forEach(({track:ce,stream:Ee})=>{var We,He;(We=o.track)==null||We.call(o,ce,Ee),(He=o.stream)==null||He.call(o,Ee)})},addStream:H=>H.getTracks().forEach(ie=>a.addTrack(ie,H)),removeStream:H=>a.getSenders().filter(ie=>ie.track&&H.getTracks().includes(ie.track)).forEach(ie=>a.removeTrack(ie)),addTrack:(H,ie)=>a.addTrack(H,ie),removeTrack:H=>{const ie=a.getSenders().find(me=>me.track===H);ie&&a.removeTrack(ie)},replaceTrack:(H,ie)=>{const me=a.getSenders().find(ce=>ce.track===H);if(me)return me.replaceTrack(ie)}}};const uu=[...nc(3,(n,e)=>`stun:stun${e||""}.l.google.com:19302`),"stun:stun.cloudflare.com:3478"].map(n=>({urls:n})),Tm=1024,wm=64,Am=128,Rm=8,Cm=new Uint8Array,Pm=(n,e)=>{let t;try{t=n()}catch{return e(!1)}return typeof t=="boolean"?e(t):Promise.resolve(t).then(i=>e(i===!0),()=>e(!1))},fu=(n,e,t)=>e===2?t?n.slice():n:e===1?ps(Oi(n)):Oi(n),Ad=(n,e,t,i)=>{try{n.progress(e,t,i)}catch(r){console.error(`${kt} progress handler error:`,r)}},du=(n,e,t,i)=>{var r;Ad(n,1,t,i);try{(r=n.receiver)==null||r.call(n,e,t,i)}catch(s){console.error(`${kt} action handler error:`,s)}},Lm=({fail:n,accept:e,refuse:t,maxReceiveBytes:i,chunkSize:r})=>{const s=new Map,a=new Map,o=new Set,l=new Map;let c=0,h=0,p=0,f=!1,m=!1;const _=E=>E.phase!=="released",S=E=>Math.min(i,(E==null?void 0:E.maxPayloadBytes)??i),d=(E,A,D,U)=>{var F,W;D==null||D.reject(A),(W=(F=s.get(E.type))==null?void 0:F.reject)==null||W.call(F,E.peerId,E.metadata,A),U!==void 0&&t(E.peerId,U,A)},u=E=>{for(const A of Array.from(o))A.peerId===E&&(o.delete(A),o.add(A))},v=E=>{var D,U;if(!_(E))return;E.phase="released",(D=E.removeAbortListener)==null||D.call(E),E.timer=Qe(E.timer);const A=a.get(E.peerId);if(E.kind==="inline"){const F=A.inline.get(E.key);F.splice(F.indexOf(E),1),F.length||A.inline.delete(E.key),E.data=Cm}else A.bulk.delete(E.id),o.delete(E),E.data=null,E.transfer==="receiving"&&(p-=E.size,A.active===E&&(A.active=null,u(E.peerId)),m=!0);A.count--,c--,A.count||a.delete(E.peerId),(U=E.controller)==null||U.abort()},w=(E,A)=>{_(E)&&(v(E),d(E,A,E.scope,E.kind==="bulk"?E.id:void 0))},M=(E,A)=>{if(E.phase!=="pending")return E.phase==="ready";if(E.size>S(A))return w(E,"payload exceeds receiver size limit"),!1;const D=E.scope?E.scope.receive:A.receive;if(!D)return A.receiver?(E.phase="ready",!0):!1;if(h>=Am||(l.get(E.peerId)??0)>=Rm)return w(E,"too many pending receive decisions"),!1;E.phase="deciding";const U=new AbortController;E.controller=U,h++,l.set(E.peerId,(l.get(E.peerId)??0)+1);const F=Pm(()=>D({byteLength:E.size,peerId:E.peerId,signal:U.signal,...E.metadata===void 0?{}:{metadata:E.metadata}}),W=>{h--;const L=l.get(E.peerId)-1;return L?l.set(E.peerId,L):l.delete(E.peerId),_(E)?(W?E.phase="ready":w(E,"payload rejected by receiver"),W):!1});return typeof F=="boolean"?F:(F.then(()=>C()),!1)},b=(E,A,D)=>{let U;try{U=fu(D,E.format,E.kind==="inline")}catch{v(E),n(E.peerId,"invalid action payload");return}v(E),du(A,U,E.peerId,E.metadata)},T=E=>{const A=s.get(E.type);_(E)&&A&&M(E,A)&&A.receiver&&b(E,A,E.data)},P=E=>{const A=s.get(E.type);if(!_(E)||!A||!M(E,A)||!A.receiver)return;if(E.transfer==="receiving"){E.offset===E.size&&b(E,A,E.data);return}const D=a.get(E.peerId);!D.active&&p+E.size<=i&&(D.active=E,E.transfer="receiving",p+=E.size,E.lastSeen=Date.now(),o.delete(E),e(E.peerId,E.id))},x=(E,A)=>{var U;const D=(U=a.get(E))==null?void 0:U.inline.get(A);for(;D!=null&&D[0];){const F=D[0];if(T(F),_(F))break}},C=()=>{if(f){m=!0;return}f=!0;try{do{m=!1;for(const E of o)P(E);for(const[E,A]of a){for(const D of A.bulk.values())D.offset===D.size&&P(D);for(const D of A.inline.keys())x(E,D)}}while(m)}finally{f=!1}},N=E=>{let A=a.get(E.peerId);if(c>=Tm||((A==null?void 0:A.count)??0)>=wm)return d(E,"too many pending transfers",E.scope,E.kind==="bulk"?E.id:void 0),!1;if(A||(A={bulk:new Map,inline:new Map,active:null,count:0},a.set(E.peerId,A)),A.count++,c++,E.kind==="inline"){const U=A.inline.get(E.key)??[];U.push(E),A.inline.set(E.key,U)}else A.bulk.set(E.id,E),o.add(E);const D=()=>{const U=_a-(Date.now()-E.lastSeen);U>0?E.timer=setTimeout(D,U):(w(E,"action transfer timed out"),C())};if(E.timer=setTimeout(D,_a),E.scope){const{signal:U}=E.scope,F=()=>{w(E,"receive cancelled"),C()};if(U.addEventListener("abort",F,{once:!0}),E.removeAbortListener=()=>U.removeEventListener("abort",F),U.aborted)return F(),!1}return!0},O=(E,A)=>{var F;const D=s.get(E.type),U=(F=D==null?void 0:D.receiveScope)==null?void 0:F.call(D,E.peerId,E.metadata);return U===null||U!=null&&U.signal.aborted?(A!==void 0&&t(E.peerId,A,"unexpected response"),null):E.size>S(D)?(d(E,"payload exceeds receiver size limit",U,A),null):{action:D,scope:U}},V=(E,A)=>({...E,...A?{scope:A}:{},phase:"pending",controller:null,lastSeen:Date.now(),timer:null});return{register:(E,A={})=>{const D={...A,receiver:null,receive:null,reject:null,progress:Rt};return s.set(E,D),{onMessage:U=>{D.receiver=U,C()},onReceive:U=>{D.receive=U,C()},onReject:U=>{D.reject=U},onProgress:U=>{D.progress=U}}},receiveInline:(E,A)=>{var I;const D=O(E);if(!D)return;const{action:U,scope:F}=D,W=F?`${E.type}\0${F.key}`:E.type;if(U!=null&&U.receiver&&!(F?F.receive:U.receive)&&!((I=a.get(E.peerId))!=null&&I.inline.has(W))){let X;try{X=fu(A,E.format,!0)}catch{n(E.peerId,"invalid action payload");return}du(U,X,E.peerId,E.metadata);return}const L={...V(E,F),kind:"inline",key:W,data:A};N(L)&&x(E.peerId,W)},receiveOffer:(E,A)=>{var F;if((F=a.get(E.peerId))!=null&&F.bulk.has(A)){n(E.peerId,"duplicate action offer");return}const D=O(E,A);if(!D)return;const U={...V(E,D.scope),kind:"bulk",id:A,transfer:"waiting",offset:0,data:null};N(U)&&C()},receiveChunk:(E,A,D,U)=>{var I;const F=a.get(E),W=F==null?void 0:F.bulk.get(A);if(!W)return;if(W.transfer!=="receiving"||D!==W.offset||!U.length||U.length!==Math.min(r,W.size-W.offset)){n(E,"invalid action chunk offset or length");return}try{W.data??(W.data=new Uint8Array(W.size))}catch{w(W,"unable to allocate receive buffer"),C();return}W.data.set(U,W.offset),W.offset+=U.length;const L=Date.now();W.lastSeen=L;for(const X of o)X.phase==="ready"&&((I=s.get(X.type))!=null&&I.receiver)&&(X.lastSeen=L);W.offset===W.size?(P(W),_(W)&&(F==null?void 0:F.active)===W&&(F.active=null,u(E)),C()):Ad(s.get(W.type),W.offset/W.size,E,W.metadata)},cancel:(E,A)=>{var U,F;const D=(U=a.get(E))==null?void 0:U.bulk.get(A);D&&(v(D),(F=D.scope)==null||F.reject("response cancelled by sender")),C()},clearPeer:E=>{const A=a.get(E);if(A){for(const D of A.bulk.values())v(D);for(const D of A.inline.values()){const U=[...D];for(const F of U)v(F)}}C()}}},Ko=2,ys=0,Es=1,hu=2,ja=3,eo=4,bs=5,to=36,pu=48,gi=6,Xr=14,no=wd-Xr,Dm=256*1024**2,mu=1024**2,gu="bufferedamountlow",_u="close",vu="error",Im=1e4,_i=(n,e)=>{const t=Ke(e);return t.kind=n,t.name=n==="aborted"?"AbortError":t.name,t},$o=n=>{if(n!=null&&n.aborted)throw _i("aborted","operation aborted")},xu=(n,e,t=gi)=>{const i=new Uint8Array(t);return i[0]=Ko,i[1]=n,new DataView(i.buffer).setUint32(2,e),i},Zi=_i,Um=(n,e,t=Im)=>n.readyState!=="open"||n.bufferedAmount<=n.bufferedAmountLowThreshold?Promise.resolve(n.readyState==="open"):new Promise(i=>{let r=!1,s=null;const a=c=>{r||(r=!0,n.removeEventListener(gu,o),n.removeEventListener(_u,l),n.removeEventListener(vu,l),e==null||e.removeEventListener("abort",l),Qe(s),i(c))},o=()=>a(!0),l=()=>a(!1);if(n.addEventListener(gu,o),n.addEventListener(_u,l),n.addEventListener(vu,l),e==null||e.addEventListener("abort",l,{once:!0}),s=setTimeout(()=>a(!1),t),n.readyState!=="open"||e!=null&&e.aborted){a(!1);return}n.bufferedAmount<=n.bufferedAmountLowThreshold&&a(!0)}),Nm=({getPeer:n,getPeerIds:e,canReceiveFromPeer:t,onPeerError:i,throwIfAborted:r=$o,maxReceiveBytes:s=Dm})=>{if(!Number.isSafeInteger(s)||s<=0)throw Ke("maxReceiveBytes must be a positive safe integer");const a=new Map,o=new Map,l=new WeakSet;let c=0;const h=Lm({fail:(d,u)=>f(d,u),accept:(d,u)=>m(d,u,ja),refuse:(d,u,v)=>m(d,u,eo,v),maxReceiveBytes:s,chunkSize:no}),p=d=>{var u;for(const v of((u=o.get(d))==null?void 0:u.values())??[])v.fail(Zi("disconnected","peer disconnected"));o.delete(d),h.clearPeer(d)},f=(d,u)=>{const v=n(d,!0);v&&!l.has(v)&&(l.add(v),console.warn(`${kt}: ${u}; disconnecting peer ${d}`),i(d,Ke(u)))},m=(d,u,v,w="")=>{var P;const M=n(d,!0);if(!M)return;const b=Yn(w).subarray(0,200),T=xu(v,u,gi+b.length);T.set(b,gi);try{if((((P=M.channel)==null?void 0:P.bufferedAmount)??0)>mu)throw Ke("control send buffer is full");M.sendData(T)}catch{f(d,"unable to send action control")}};return{makeInternalAction:(d,u={})=>{const v={sendToPending:!!u.sendToPending,receiveWhilePending:!!u.receiveWhilePending,...u.maxPayloadBytes===void 0?{}:{maxPayloadBytes:u.maxPayloadBytes},...u.receiveScope?{receiveScope:u.receiveScope}:{}},w=a.get(d);if(w){if(w.options.sendToPending!==v.sendToPending||w.options.receiveWhilePending!==v.receiveWhilePending||w.options.receiveScope!==v.receiveScope||w.options.maxPayloadBytes!==v.maxPayloadBytes)throw Ke(`action type "${d}" cannot be redefined`);return w.action}const M=Yn(d);if(!d||d.includes("\0")||M.length>32)throw Ke("action type must contain 1–32 UTF-8 bytes and no null characters");const b={options:v,action:{...h.register(d,v),send:async(T,P,x,C,N)=>{if(r(N),T===void 0)throw Ke("action data cannot be undefined");const O=T instanceof Blob,V=O||T instanceof ArrayBuffer||ArrayBuffer.isView(T),E=V?2:typeof T=="string"?0:1;let A=O?T:T instanceof ArrayBuffer?new Uint8Array(T):ArrayBuffer.isView(T)?new Uint8Array(T.buffer,T.byteOffset,T.byteLength):Yn(E===0?T:Vt(T));const D=A instanceof Blob?A.size:A.byteLength,U=x===void 0?new Uint8Array:Yn(Vt(x));if(U.length>16336)throw Ke("action metadata is too large");const F=to+U.length+D<=wd;!F&&V&&!(A instanceof Blob)&&(A=A.slice());const W=F?0:c++>>>0,L=F?to:pu,I=new Uint8Array(L+U.length+(F?D:0));I[0]=Ko,I[1]=(F?ys:Es)|E<<4,I.set(M,2);const X=new DataView(I.buffer);X.setUint16(34,U.length),F||(X.setUint32(36,W),X.setFloat64(40,D)),I.set(U,L),F&&I.set(A instanceof Blob?new Uint8Array(await A.arrayBuffer()):A,L+U.length);const se=P?Array.isArray(P)?P:[P]:e(v.sendToPending);await qi([...new Set(se)].map(async oe=>{const Me=n(oe,v.sendToPending);if(!Me){console.warn(`${kt}: no peer with id ${oe} found`);return}let Ne=null;const Oe=()=>{var Be;if(Ne)throw Ne;if(r(N),n(oe,v.sendToPending)!==Me||((Be=Me.channel)==null?void 0:Be.readyState)==="closed")throw Zi("disconnected","peer disconnected")},Q=async Be=>{Oe();const $e=Me.channel;if($e&&($e.readyState!=="open"||$e.bufferedAmount>$e.bufferedAmountLowThreshold)){if(!await Um($e,N))throw r(N),Zi("disconnected","data channel stopped draining");Oe()}try{Me.sendData(Be)}catch{throw Zi("disconnected","peer disconnected")}};if(F){await Q(I),C==null||C(1,oe,x);return}let ee=!1,ve=!1,De=Date.now(),H,ie;const me=new Promise((Be,$e)=>{H=Be,ie=$e});me.catch(Rt);const ce=o.get(oe)??new Map;if(ce.has(W))throw Ke("action transmission id is still in use");o.set(oe,ce);let Ee=null;const We={accept:()=>!Ee||Ne?!1:(Ee=Qe(Ee),H(),!0),fail:(Be,$e=!1)=>{$e&&(ve=!0),Ne=Be,ie(Be)},touch:()=>{Ee&&(De=Date.now())}};ce.set(W,We);const He=()=>{const Be=_a-(Date.now()-De);Be>0?Ee=setTimeout(He,Be):We.fail(Zi("timeout","action offer timed out"))};Ee=setTimeout(He,_a);const rt=()=>{try{r(N)}catch(Be){We.fail(Be)}};N==null||N.addEventListener("abort",rt,{once:!0});try{await Q(I),ee=!0,await me;for(let Be=0;Be<D;Be+=no){Oe();const $e=Math.min(no,D-Be),Ze=xu(hu,W,Xr+$e);new DataView(Ze.buffer).setFloat64(gi,Be),Ze.set(A instanceof Blob?new Uint8Array(await A.slice(Be,Be+$e).arrayBuffer()):A.subarray(Be,Be+$e),Xr),await Q(Ze);for(const mt of ce.values())mt.touch();C==null||C((Be+$e)/D,oe,x)}Oe()}catch(Be){throw ee&&!ve&&n(oe,!0)===Me&&(!Me.channel||Me.channel.readyState==="open"&&(Me.channel.bufferedAmount??0)<=mu)&&m(oe,W,bs),Be}finally{Ee=Qe(Ee),N==null||N.removeEventListener("abort",rt),ce.delete(W),!ce.size&&o.get(oe)===ce&&o.delete(oe)}}))}}};return a.set(d,b),b.action},handleData:(d,u)=>{var D,U,F;if(u.byteLength<2||u.byteLength>16384){f(d,"invalid action frame");return}const v=new Uint8Array(u);if(v[0]!==Ko){f(d,"incompatible action protocol version");return}const w=v[1]&15,M=v[1]>>>4,b=new DataView(v.buffer,v.byteOffset,v.byteLength);if(w>bs||M>2||w>Es&&M!==0){f(d,"invalid action frame");return}if(w>=hu){if(v.length<gi||(w===ja||w===bs)&&v.length!==gi||w===eo&&v.length>206){f(d,"invalid action control");return}const W=b.getUint32(2);if(w===ja){const L=o.get(d);if((D=L==null?void 0:L.get(W))!=null&&D.accept())for(const I of L.values())I.touch();return}if(w===eo){(F=(U=o.get(d))==null?void 0:U.get(W))==null||F.fail(Zi("rejected",Oi(v.subarray(gi))),!0);return}w===bs?h.cancel(d,W):h.receiveChunk(d,W,v.length>=Xr?b.getFloat64(gi):NaN,v.subarray(Xr));return}const T=w===ys?to:pu;if(v.length<T){f(d,"invalid action header");return}const P=Oi(v.subarray(2,34)).replaceAll("\0",""),x=a.get(P);if(!t(d,!!(x!=null&&x.options.receiveWhilePending)))return;const C=b.getUint16(34),N=T+C,O=w===ys?v.length-N:b.getFloat64(40),V=w===Es?b.getUint32(36):0;if(!P||N>v.length||!Number.isSafeInteger(O)||O<0||w===Es&&(O===0||N!==v.length)){f(d,"invalid action proposal");return}let E;try{C&&(E=ps(Oi(v.subarray(T,N))))}catch{f(d,"invalid action metadata");return}const A={peerId:d,type:P,format:M,size:O,...E===void 0?{}:{metadata:E}};w===ys?h.receiveInline(A,v.subarray(N)):h.receiveOffer(A,V)},clearPeer:p}},Rd=n=>n&&typeof n=="object"&&!Array.isArray(n)&&typeof n.r=="string"?n:null,Ts=n=>{const e=Rd(n);return e?{r:e.r,...Object.hasOwn(e,"m")?{m:e.m}:{}}:null},io=n=>{const e=Rd(n);return e?{r:e.r,...typeof e.e=="string"?{e:e.e}:{}}:null},Ur=(n,e)=>e===void 0?n:{...n,metadata:e},Fm=({getPeer:n,getPeerIds:e,canReceiveFromPeer:t,onPeerError:i,maxReceiveBytes:r})=>{const s=Object.create(null),a={},o=new Map,l=Nm({getPeer:n,getPeerIds:e,canReceiveFromPeer:t,onPeerError:i,...r===void 0?{}:{maxReceiveBytes:r}}),c=l.makeInternalAction,h=l.handleData,p=d=>{const u=a[d];u&&(Qe(u.timer),u.signal&&u.abortHandler&&u.signal.removeEventListener("abort",u.abortHandler),delete a[d],u.controller.abort())},f=(d,u)=>{_r(a).forEach(([v,w])=>{w.peerId===d&&(p(v),w.reject(u))})},m=(d,u)=>{l.clearPeer(d);const v=o.get(d);v&&(o.delete(d),v.forEach(w=>w.abort())),f(d,_i("disconnected",vr(u,"peer disconnected")))},_=c("@_response",{receiveScope:(d,u)=>{const v=io(u),w=v&&a[v.r];if(!v||!w||w.peerId!==d)return null;const M=v.e===void 0?w.getReceive():null;return{key:v.r,signal:w.controller.signal,receive:M?b=>M({byteLength:b.byteLength,peerId:b.peerId,kind:"response",signal:b.signal}):null,reject:b=>{a[v.r]===w&&(p(v.r),w.reject(_i("rejected",b)))}}}});return _.onProgress((d,u,v)=>{var b;const w=io(v),M=w&&a[w.r];M&&M.peerId===u&&(w==null?void 0:w.e)===void 0&&((b=M.getReceiveProgress())==null||b(d,{peerId:u}))}),_.onMessage((d,u,v)=>{const w=io(v);if(!w)return;const M=a[w.r];if(!(!M||M.peerId!==u)){if(p(w.r),w.e!==void 0){M.reject(_i("rejected",w.e));return}M.resolve(d)}}),{makeAction:(d,u)=>{if(u&&"onRequest"in u&&u.kind!=="request")throw Ke('request actions must use kind: "request"');const v=(u==null?void 0:u.kind)??"message",w=c(d),M=s[d];if(M){if(M.kind!==v)throw Ke(`action type "${d}" cannot be redefined`);return M.action}const b={kind:v,action:null,onReceive:(u==null?void 0:u.onReceive)??null,onReceiveProgress:(u==null?void 0:u.onReceiveProgress)??null},T=(E,A)=>E?(D,U)=>E(D,Ur({peerId:U},A)):void 0,P=(E,A,D)=>{var F;const U=b.kind==="request"?Ts(D):null;(F=b.onReceiveProgress)==null||F.call(b,E,Ur({peerId:A},U?U.m:D))},x=E=>{b.onReceive=E,w.onReceive(E?A=>{const D=v==="request"?Ts(A.metadata):null;return E(Ur({byteLength:A.byteLength,peerId:A.peerId,signal:A.signal,kind:v},D?D.m:A.metadata))}:null)};if(x(b.onReceive),w.onProgress(P),v==="message"){let E=(u==null?void 0:u.onMessage)??null;const A=(U,F,W)=>{const L=E;Promise.resolve().then(()=>L(U,Ur({peerId:F},W))).catch(I=>console.error(`${kt} action handler error:`,I))},D={send:async(U,F={})=>{await w.send(U,F.target,F.metadata,T(F.onProgress,F.metadata),F.signal)},get onMessage(){return E},set onMessage(U){E=U,w.onMessage(U?A:null)},get onReceive(){return b.onReceive},set onReceive(U){x(U)},get onReceiveProgress(){return b.onReceiveProgress},set onReceiveProgress(U){b.onReceiveProgress=U}};return b.action=D,s[d]=b,w.onMessage(E?A:null),D}w.onReject((E,A,D)=>{const U=Ts(A);U&&_.send(null,E,{r:U.r,e:D}).catch(Rt)});let C=(u==null?void 0:u.onRequest)??null;const N=(E,A,D)=>{const U=Ts(D);if(!U)return;const F=C,W=new AbortController;let L=o.get(A);L||(L=new Set,o.set(A,L)),L.add(W),Promise.resolve().then(async()=>{const I=await F(E,{...Ur({peerId:A},U.m),signal:W.signal});if(I===void 0)throw Ke("request handler returned undefined");return I}).then(I=>_.send(I,A,{r:U.r}),I=>_.send(null,A,{r:U.r,e:vr(I,"request failed").slice(0,512)})).catch(Rt).finally(()=>{const I=o.get(A);I==null||I.delete(W),I&&!I.size&&o.delete(A),W.abort()})},O=async(E,A)=>{const{target:D,metadata:U,onProgress:F,signal:W,timeoutMs:L}=A;if($o(W),!n(D,!1))throw _i("disconnected",`no active peer with id ${D}`);const I=Xi(20),X=new AbortController,se=new Promise((oe,Me)=>{const Ne={controller:X,getReceive:()=>b.onReceive,getReceiveProgress:()=>b.onReceiveProgress,peerId:D,resolve:oe,reject:Me,timer:null,...W===void 0?{}:{signal:W}},Oe=()=>{p(I),Me(_i("aborted","operation aborted"))};W&&(Ne.abortHandler=Oe,W.addEventListener("abort",Oe,{once:!0})),a[I]=Ne,L!==void 0&&(Ne.timer=setTimeout(()=>{p(I),Ne.reject(_i("timeout","request timed out"))},L))});try{const oe=w.send(E,D,U===void 0?{r:I}:{r:I,m:U},T(F,U),X.signal);return await Promise.race([se,oe.then(()=>se)])}finally{p(I)}},V={request:O,requestMany:async(E,A)=>{const{targets:D,onResult:U,...F}=A;return $o(F.signal),await qi(D.map(async W=>{try{const L={peerId:W,status:"fulfilled",value:await O(E,{...F,target:W})};return U==null||U(L),L}catch(L){const I=Mi(L,"request failed");if(I.kind==="aborted"||!I.kind)throw I;const X=I.kind==="timeout"?{peerId:W,status:"timeout"}:I.kind==="disconnected"?{peerId:W,status:"disconnected"}:{peerId:W,status:"rejected",error:I};return U==null||U(X),X}}))},get onRequest(){return C},set onRequest(E){C=E,w.onMessage(E?N:null)},get onReceive(){return b.onReceive},set onReceive(E){x(E)},get onReceiveProgress(){return b.onReceiveProgress},set onReceiveProgress(E){b.onReceiveProgress=E}};return b.action=V,s[d]=b,w.onMessage(C?N:null),V},makeInternalAction:c,handleData:h,clearPeer:m}},Su=n=>n&&typeof n=="object"&&!Array.isArray(n)&&typeof n.k=="string"?{key:n.k,...typeof n.s=="string"?{streamId:n.s}:{},...typeof n.t=="string"?{trackId:n.t}:{},...Object.hasOwn(n,"m")?{metadata:n.m}:{}}:null,Mu=n=>e=>{let t=n.get(e);return t||(t=Xi(20),n.set(e,t)),t},Zo=()=>{const n=new WeakMap,e=new WeakMap,t=new Map,i=new Map,r=new Map,s=new Map,a=new WeakMap,o=new WeakMap;return{getStreamKey:Mu(n),getTrackKey:Mu(e),rememberRemoteStream:(l,c,h)=>{var f;const p=a.get(c);p!==void 0&&t.get(p)===c&&t.delete(p),a.set(c,l),t.set(l,c),h&&i.set(h,c),(f=c.getTracks)==null||f.call(c).forEach(m=>{typeof m.id=="string"&&s.set(m.id,{track:m,stream:c})})},getRemoteStream:(l,c)=>t.get(l)??(c?i.get(c):void 0),rememberRemoteTrack:(l,c,h,p,f)=>{var S;const m={track:c,stream:h},_=o.get(c);_!==void 0&&((S=r.get(_))==null?void 0:S.track)===c&&r.delete(_),o.set(c,l),r.set(l,m),p&&s.set(p,m),f&&i.set(f,h)},getRemoteTrack:(l,c)=>r.get(l)??(c?s.get(c):void 0),hasRemoteMedia:()=>t.size>0||r.size>0,clearRemote:()=>{t.clear(),i.clear(),r.clear(),s.clear()}}},Om=({iterate:n,isActive:e,getSharedMediaPeer:t,onPeerError:i})=>{const r={},s={},a={},o=Zo(),l=S=>{var d;return((d=t(S))==null?void 0:d.__trysteroMedia)??a[S]??(a[S]=Zo())},c=(S,d,u,v)=>{const w=S[d]??(S[d]=[]);if(w.length>=64){console.warn(`${kt}: too many pending ${v} metadata messages`),i(d,Ke("too many pending media metadata messages"));return}w.push(u)},h=(S,d,u)=>{if(!(S!=null&&S.length))return;const v=d?S.findIndex(w=>{const M=u(w);return!M||M===d}):0;return v>=0?S.splice(v,1)[0]:void 0},p=(S,d,u,v)=>{var w;e(S)&&(l(S).rememberRemoteStream(d,u,typeof u.id=="string"?u.id:void 0),(w=_.onPeerStream)==null||w.call(_,u,S,v))},f=(S,d,u,v,w)=>{var M;e(S)&&(l(S).rememberRemoteTrack(d,u,v,typeof u.id=="string"?u.id:void 0,typeof v.id=="string"?v.id:void 0),(M=_.onPeerTrack)==null||M.call(_,u,v,S,w))},m=(S,d,u,v,w,M={})=>{const b={k:d,...M,...u===void 0?{}:{m:u}};return n(S,async(T,P)=>{await v(b,T),await w(P)})},_={addStream:(S,d,u)=>m(d.target,o.getStreamKey(S),d.metadata,u,v=>v.addStream(S),{s:S.id}),removeStream:(S,d)=>{n(d,(u,v)=>v.removeStream(S))},addTrack:(S,d,u,v)=>m(u.target,o.getTrackKey(S),u.metadata,v,w=>w.addTrack(S,d),{s:d.id,t:S.id}),removeTrack:(S,d)=>{n(d,(u,v)=>v.removeTrack(S))},replaceTrack:(S,d,u,v)=>m(u.target,o.getTrackKey(d),u.metadata,v,w=>w.replaceTrack(S,d),{t:S.id}),receiveStreamMeta:(S,d)=>{if(!e(d))return;const u=Su(S);if(!u)return;const v=l(d).getRemoteStream(u.key,u.streamId);if(v!=null&&v.getTracks().length){p(d,u.key,v,u.metadata);return}c(r,d,u,"stream")},receiveTrackMeta:(S,d)=>{if(!e(d))return;const u=Su(S);if(!u)return;const v=l(d).getRemoteTrack(u.key,u.trackId);if(v&&v.track.readyState!=="ended"&&(!v.stream.getTracks||v.stream.getTracks().includes(v.track))){f(d,u.key,v.track,v.stream,u.metadata);return}c(s,d,u,"track")},receiveRemoteStream:(S,d)=>{if(!e(S))return;const u=h(r[S],typeof d.id=="string"?d.id:void 0,v=>v.streamId);u&&p(S,u.key,d,u.metadata)},receiveRemoteTrack:(S,d,u)=>{if(!e(S))return;const v=s[S],w=typeof d.id=="string"?d.id:void 0,M=typeof u.id=="string"?u.id:void 0,b=v&&w?v.findIndex(P=>P.trackId===w):-1,T=b>=0?v==null?void 0:v.splice(b,1)[0]:h(v,M,P=>P.streamId);T&&f(S,T.key,d,u,T.metadata)},clearPeer:S=>{delete r[S],delete s[S],delete a[S]},onPeerStream:null,onPeerTrack:null};return _},yu="beforeunload",Bm=1e4,li=n=>"@_"+n,qr=new Set,Eu=()=>qr.forEach(n=>n()),km=n=>(qr.add(n),qr.size===1&&addEventListener(yu,Eu),()=>{qr.delete(n),qr.size||removeEventListener(yu,Eu)});var zm=(n,e,t,{onPeerHandshake:i,onHandshakeError:r,handshakeTimeoutMs:s=Bm,maxReceiveBytes:a,isPassive:o=!1,onBeforeLeave:l}={})=>{const c={},h={},p={},f={onPeerJoin:null,onPeerLeave:null};let m=Rt,_=null;const S=(L,I)=>(L?Array.isArray(L)?L:[L]:gn(h)).flatMap(X=>{const se=h[X];return se?[Promise.resolve(I(X,se))]:(console.warn(`${kt}: no peer with id ${X} found`),[])}),d=(L,I,X)=>{const se=c[L];!se||I&&se!==I||(D.send("",L).catch(Rt),x(L,se,X))},u=(L,I)=>d(L,void 0,I),v=Om({onPeerError:u,iterate:(L,I)=>S(L,(X,se)=>I(X,se)),isActive:L=>!!h[L],getSharedMediaPeer:L=>c[L]??null}),w=Fm({onPeerError:u,...a===void 0?{}:{maxReceiveBytes:a},getPeer:(L,I)=>(I?c:h)[L],getPeerIds:L=>gn(L?c:h),canReceiveFromPeer:(L,I)=>W.canReceiveFromPeer(L,I)}),M=w.makeInternalAction,b=w.handleData,T=w.makeAction,P=(L,I=Ke("peer disconnected"))=>{var se;const X=Mi(I,"peer disconnected");W.clearPeer(L,X),delete c[L],delete h[L],w.clearPeer(L,X),(se=p[L])==null||se.splice(0).forEach(oe=>oe.reject(X)),delete p[L],v.clearPeer(L)},x=(L,I,X)=>{var Me;const se=c[L];if(!se||I&&se!==I)return;const oe=!!h[L];P(L,X),se.destroy(),oe&&((Me=f.onPeerLeave)==null||Me.call(f,L)),e(L)},C=()=>_??(_=(async()=>{l==null||l();const L=new AbortController;D.send("",void 0,void 0,void 0,L.signal).catch(Rt),await new Promise(I=>setTimeout(I,99)),L.abort();try{_r(c).forEach(([I,X])=>{X.destroy(),P(I,Ke("room left"))})}finally{try{m()}finally{t()}}})()),N=M(li("ping")),O=M(li("pong")),V=M(li("signal")),E=M(li("stream"),{maxPayloadBytes:65536}),A=M(li("track"),{maxPayloadBytes:65536}),D=M(li("leave"),{sendToPending:!0,receiveWhilePending:!0}),U=M(li("hsdata"),{sendToPending:!0,receiveWhilePending:!0,maxPayloadBytes:65536}),F=M(li("hsready"),{sendToPending:!0,receiveWhilePending:!0}),W=gm({...i===void 0?{}:{onPeerHandshake:i},...r===void 0?{}:{onHandshakeError:r},handshakeTimeoutMs:s,sendHandshakeData:U.send,sendHandshakeReady:F.send,onActivate:(L,I)=>{var X;h[L]=I,I.setHandlers({signal:se=>{h[L]===I&&V.send(se,L).catch(Rt)}}),(X=f.onPeerJoin)==null||X.call(f,L)},onFailure:(L,I,X)=>d(L,I,X)});return N.onMessage((L,I)=>{O.send("",I).catch(Rt)}),O.onMessage((L,I)=>{var se;const X=p[I];(se=X==null?void 0:X.shift())==null||se.resolve(),X&&!X.length&&delete p[I]}),V.onMessage((L,I)=>{var X;(X=h[I])==null||X.signal(L)}),E.onMessage((L,I)=>v.receiveStreamMeta(L,I)),A.onMessage((L,I)=>v.receiveTrackMeta(L,I)),D.onMessage((L,I)=>x(I,void 0,Ke("peer left room"))),U.onMessage((L,I,X)=>W.receiveHandshakeData(L,I,X)),F.onMessage((L,I)=>W.receiveHandshakeReady(I)),n((L,I)=>{const X=c[I];if(X){if(X===L)return;X.destroy(),P(I,Ke("peer replaced"))}c[I]=L,W.addPeer(I,L),L.setHandlers({data:se=>{c[I]===L&&b(I,se)},stream:se=>v.receiveRemoteStream(I,se),track:(se,oe)=>v.receiveRemoteTrack(I,se,oe),close:()=>x(I,L,Ke("peer disconnected")),error:se=>{console.error(`${kt} peer error:`,se),x(I,L,se)}}),W.start(I,L)}),Sd&&(m=km(()=>C().catch(Rt))),{makeAction:T,leave:C,ping:async L=>{if(!h[L])throw Ke(`no active peer with id ${L}`);const I=Date.now();return await new Promise((X,se)=>{const oe=p[L]??(p[L]=[]),Me=()=>{const Oe=p[L];if(!Oe)return;const Q=Oe.indexOf(Ne);Q>-1&&Oe.splice(Q,1),Oe.length||delete p[L]},Ne={resolve:()=>{Me(),X()},reject:Oe=>{Me(),se(Oe)}};oe.push(Ne),N.send("",L).catch(Oe=>Ne.reject(Mi(Oe,"peer disconnected")))}),Date.now()-I},isPassive:()=>o,getPeers:()=>Md(_r(h).map(([L,I])=>[L,I.connection])),addStream:(L,I={})=>v.addStream(L,I,E.send),removeStream:(L,I={})=>{v.removeStream(L,I.target)},addTrack:(L,I,X={})=>v.addTrack(L,I,X,A.send),removeTrack:(L,I={})=>{v.removeTrack(L,I.target)},replaceTrack:(L,I,X={})=>v.replaceTrack(L,I,X,A.send),get onPeerJoin(){return f.onPeerJoin},set onPeerJoin(L){f.onPeerJoin=L,L&&gn(h).forEach(I=>L(I))},get onPeerLeave(){return f.onPeerLeave},set onPeerLeave(L){f.onPeerLeave=L},get onPeerStream(){return v.onPeerStream},set onPeerStream(L){v.onPeerStream=L},get onPeerTrack(){return v.onPeerTrack},set onPeerTrack(L){v.onPeerTrack=L}}};const Cd=1,Pd=2,bu=(n,e)=>{const t=Yn(n),i=new Uint8Array(3+t.byteLength+e.byteLength);return i[0]=Cd,i[1]=t.byteLength>>>8&255,i[2]=t.byteLength&255,i.set(t,3),i.set(e,3+t.byteLength),i},Hm=(n,e)=>{const t=Yn(n),i=new Uint8Array(4+t.byteLength);return i[0]=Pd,i[1]=Number(e),i[2]=t.byteLength>>>8&255,i[3]=t.byteLength&255,i.set(t,4),i},Tu=(n,e)=>{if(n.byteLength<e+2)return null;const t=(n[e]??0)<<8|(n[e+1]??0),i=e+2+t;return t<=0||t>128||n.byteLength<i?null:{roomToken:Oi(n.subarray(e+2,i)),headerSize:i}},Gm=n=>{const e=new Uint8Array(n);if(e.byteLength<3||e.byteLength>16515)return null;if(e[0]===Cd){const t=Tu(e,1);return t?{type:"room",roomToken:t.roomToken,payload:e.subarray(t.headerSize).slice().buffer}:null}if(e[0]===Pd){const t=Tu(e,2);return t?{type:"presence",roomToken:t.roomToken,isPresent:e[1]===1}:null}return null},sa=n=>{const{connection:e,channel:t}=n;return n.isDead||e.connectionState==="closed"||e.connectionState==="failed"||e.iceConnectionState==="closed"||e.iceConnectionState==="failed"||(t==null?void 0:t.readyState)==="closing"||(t==null?void 0:t.readyState)==="closed"},Vm=n=>{if(sa(n))return"stale";const{channel:e}=n;return!e||e.readyState!=="open"?"transient":"live"};var Wm=class{constructor(){Fe(this,"rooms",new Map);Fe(this,"unclaimedDataTimers",new WeakMap);Fe(this,"pendingDataTimers",new WeakMap);Fe(this,"byApp",{})}registerRoom(n,e,t,i){const r=this.rooms.get(n)??new Map;if(r.has(e))throw Ke("room membership already registered");const s={token:null,tokenPromise:t,...i};r.set(e,s),this.rooms.set(n,r);const a=()=>{var l;return((l=this.rooms.get(n))==null?void 0:l.get(e))===s},o=l=>{if(s.token)for(const c of Wn(this.byApp[n]??{}))try{this.sendRoomPresence(c,s.token,l)}catch{}};return t.then(l=>{if(a()){s.token=l;for(const c of Wn(this.byApp[n]??{}))c.remoteRoomTokens.has(l)&&this.attachRoom(n,e,s,c),this.discardUnboundData(c);a()&&s.active&&o(!0)}}),{connect:(l,c,h)=>{if(!a()){c.destroy();return}const p=this.reusable(n,l);p&&p.peer!==c&&c.destroy();const f=p??this.register(n,l,c,h);if(this.attachRoom(n,e,s,f),!p)for(const m of r.values())m.active&&m.token&&this.sendRoomPresence(f,m.token,!0)},reuse:l=>{if(!a())return!1;const c=this.reusable(n,l);return c?(this.attachRoom(n,e,s,c),!0):!1},setActive:l=>{!a()||s.active===l||(s.active=l,o(l))},leave:()=>{var l,c;if(a()){r.delete(e),r.size||this.rooms.delete(n),o(!1);for(const h of Wn(this.byApp[n]??{})){const p=h.bindings[e];(c=p==null?void 0:(l=p.handlers).close)==null||c.call(l),p==null||p.detach(),this.discardUnboundData(h)}}}}}owns(n,e,t){var i,r;return((r=(i=this.byApp[n])==null?void 0:i[e])==null?void 0:r.peer)===t}reusable(n,e){var i;const t=(i=this.byApp[n])==null?void 0:i[e];if(t&&sa(t.peer)){this.clear(n,e,{destroyPeer:!0});return}return t}attachRoom(n,e,t,i){var a;if(((a=this.rooms.get(n))==null?void 0:a.get(e))!==t||i.isClosing||this.get(n,i.peerId)!==i)return;const{proxy:r,isNew:s}=this.bind(e,t.tokenPromise,i,{onDetach:()=>t.onDetach(i.peerId,i.peer)});s&&t.onPeer(r,i.peerId,i.peer)}get(n,e){var t;return(t=this.byApp[n])==null?void 0:t[e]}sendRoomPresence(n,e,t){n.isClosing||sa(n.peer)||n.peer.sendData(Hm(e,t))}clear(n,e,{destroyPeer:t}){const i=this.byApp[n],r=i==null?void 0:i[e];if(!r||r.isClosing)return;r.idleTimer=Qe(r.idleTimer),this.clearDataTimers(r),r.isClosing=!0,t&&!r.peer.isDead&&r.peer.destroy();const s=Wn(r.bindings);r.bindings={},r.bindingsByToken={},r.controlRoomId=null,delete i[e],s.forEach(a=>{var o,l;(l=(o=a.handlers).close)==null||l.call(o),a.pendingData.length=0,a.pendingSendData.length=0,a.pendingTracks.length=0}),r.media.clearRemote(),r.pendingDataByToken.clear(),r.remoteRoomTokens.clear(),gn(i).length===0&&delete this.byApp[n]}register(n,e,t,i){var o,l;const r=(o=this.byApp[n])==null?void 0:o[e];if(r){if(r.idleTimer=Qe(r.idleTimer),r.peer===t)return r;this.clear(n,e,{destroyPeer:!0})}const s={appId:n,peerId:e,peer:t,bindings:{},bindingsByToken:{},pendingDataByToken:new Map,remoteRoomTokens:new Set,idleTimer:null,controlRoomId:null,streamOwners:new Map,trackOwners:new Map,media:Zo(),idleMs:i,isClosing:!1};((l=this.byApp)[n]??(l[n]={}))[e]=s;const a=()=>{this.owns(n,e,t)&&this.clear(n,e,{destroyPeer:!0})};return t.setHandlers({data:c=>this.dispatchData(s,c),signal:c=>this.dispatchSignal(s,c),close:a,error:c=>{console.error(`${kt} peer error:`,c),a()},track:(c,h)=>this.dispatchTrack(s,c,h)}),s}bind(n,e,t,{onDetach:i}){const r=t.bindings[n];if(r)return t.idleTimer=Qe(t.idleTimer),{proxy:r.proxy,isNew:!1};const s={roomId:n,roomToken:null,roomTokenPromise:e,handlers:{},pendingData:[],pendingSendData:[],pendingTracks:[],detach:Rt,proxy:{}},a=()=>{if(t.bindings[n]!==s)return;const l=gn(t.bindings).length===1&&(t.streamOwners.size>0||t.trackOwners.size>0||t.media.hasRemoteMedia());l||this.pruneRoomOwnership(t,n),delete t.bindings[n],s.roomToken&&t.bindingsByToken[s.roomToken]===s&&delete t.bindingsByToken[s.roomToken],t.controlRoomId===n&&(t.controlRoomId=gn(t.bindings)[0]??null),this.discardUnboundData(t),i(),l?this.clear(t.appId,t.peerId,{destroyPeer:!0}):this.scheduleIdleTimer(t)},o={get connection(){return t.peer.connection},get channel(){return t.peer.channel},get isDead(){return t.peer.isDead},getOffer:l=>t.peer.getOffer(l),signal:l=>t.peer.signal(l),sendData:l=>{if(!s.roomToken){s.pendingSendData.push(l);return}t.peer.sendData(bu(s.roomToken,l))},destroy:()=>a(),setHandlers:l=>{Object.assign(s.handlers,l),this.flushBindingQueues(t,s)},addStream:l=>{const c=t.streamOwners.get(l)??new Set,h=c.size===0;c.add(n),t.streamOwners.set(l,c),h&&t.peer.addStream(l)},removeStream:l=>this.releaseStreamOwner(t,l,n),addTrack:(l,c)=>{const h=t.trackOwners.get(l)??{stream:c,rooms:new Set},p=h.rooms.size===0;return h.stream=c,h.rooms.add(n),t.trackOwners.set(l,h),p?t.peer.addTrack(l,c):t.peer.connection.getSenders().find(f=>f.track===l)??t.peer.addTrack(l,c)},removeTrack:l=>this.releaseTrackOwner(t,l,n),replaceTrack:async(l,c)=>{const h=t.trackOwners.get(l);if(await t.peer.replaceTrack(l,c),h&&t.trackOwners.get(l)===h){t.trackOwners.delete(l);const p=t.trackOwners.get(c)??{stream:h.stream,rooms:new Set};h.rooms.forEach(f=>p.rooms.add(f)),t.trackOwners.set(c,p)}},__trysteroMedia:t.media};return s.proxy=o,s.detach=a,t.bindings[n]=s,t.controlRoomId??(t.controlRoomId=n),t.idleTimer=Qe(t.idleTimer),e.then(l=>{if(t.isClosing||t.bindings[n]!==s)return;s.roomToken=l,t.bindingsByToken[l]=s;const c=t.pendingDataByToken.get(l);c!=null&&c.length&&(s.pendingData.push(...c),t.pendingDataByToken.delete(l));const h=s.pendingSendData.splice(0);sa(t.peer)||h.forEach(p=>{try{t.peer.sendData(bu(l,p))}catch{}}),this.flushBindingQueues(t,s),this.discardUnboundData(t)}),{proxy:o,isNew:!0}}releaseStreamOwner(n,e,t){const i=n.streamOwners.get(e);i&&(i.delete(t),i.size===0&&(n.streamOwners.delete(e),n.peer.removeStream(e)))}releaseTrackOwner(n,e,t){const i=n.trackOwners.get(e);i&&(i.rooms.delete(t),i.rooms.size===0&&(n.trackOwners.delete(e),n.peer.removeTrack(e)))}pruneRoomOwnership(n,e){n.streamOwners.forEach((t,i)=>this.releaseStreamOwner(n,i,e)),n.trackOwners.forEach((t,i)=>this.releaseTrackOwner(n,i,e))}scheduleIdleTimer(n){n.isClosing||gn(n.bindings).length>0||(n.idleTimer=Qe(n.idleTimer),n.idleTimer=setTimeout(()=>{var t;const e=(t=this.byApp[n.appId])==null?void 0:t[n.peerId];!e||gn(e.bindings).length>0||this.clear(n.appId,n.peerId,{destroyPeer:!0})},n.idleMs))}getSignalBinding(n){if(n.controlRoomId){const t=n.bindings[n.controlRoomId];if(t!=null&&t.handlers.signal)return t}const e=Wn(n.bindings).find(t=>!!t.handlers.signal);return e?(n.controlRoomId=e.roomId,e):null}flushBindingQueues(n,e){const{handlers:t}=e;if(t.data&&e.pendingData.length>0){const i=e.pendingData.splice(0);this.syncDataTimers(n),i.forEach(r=>{var s;return(s=t.data)==null?void 0:s.call(t,r)})}else this.syncDataTimers(n);(t.track||t.stream)&&e.pendingTracks.length&&e.pendingTracks.splice(0).forEach(({track:i,stream:r})=>{var s,a;(s=t.track)==null||s.call(t,i,r),(a=t.stream)==null||a.call(t,r)})}unclaimedBufferedFrameCount(n){let e=0;for(const t of n.pendingDataByToken.values())e+=t.length;return e}boundBufferedFrameCount(n){let e=0;for(const t of Wn(n.bindings))e+=t.pendingData.length;return e}bufferedFrameCount(n){return this.unclaimedBufferedFrameCount(n)+this.boundBufferedFrameCount(n)}clearDataTimers(n){Qe(this.unclaimedDataTimers.get(n)),this.unclaimedDataTimers.delete(n),Qe(this.pendingDataTimers.get(n)),this.pendingDataTimers.delete(n)}syncDataTimers(n){if(n.isClosing){this.clearDataTimers(n);return}this.unclaimedBufferedFrameCount(n)===0?(Qe(this.unclaimedDataTimers.get(n)),this.unclaimedDataTimers.delete(n)):this.unclaimedDataTimers.has(n)||this.unclaimedDataTimers.set(n,setTimeout(()=>{this.unclaimedDataTimers.delete(n),n.pendingDataByToken.clear()},Yo)),this.boundBufferedFrameCount(n)===0?(Qe(this.pendingDataTimers.get(n)),this.pendingDataTimers.delete(n)):this.pendingDataTimers.has(n)||this.pendingDataTimers.set(n,setTimeout(()=>{this.pendingDataTimers.delete(n),this.boundBufferedFrameCount(n)>0&&this.failData(n,"room data handler timed out")},Yo))}canBindRoomToken(n,e){var t;return Wn(n.bindings).some(i=>!i.roomToken)||[...((t=this.rooms.get(n.appId))==null?void 0:t.values())??[]].some(i=>!i.token||i.token===e)}discardUnboundData(n){for(const e of n.pendingDataByToken.keys())this.canBindRoomToken(n,e)||n.pendingDataByToken.delete(e);this.syncDataTimers(n)}failData(n,e){console.warn(`${kt}: ${e}; disconnecting peer ${n.peerId}`),this.clear(n.appId,n.peerId,{destroyPeer:!0})}dispatchData(n,e){var r,s;if(n.isClosing)return;const t=Gm(e);if(!t){this.failData(n,"invalid or incompatible room frame");return}if(t.type==="presence"){if(t.isPresent){if(!n.remoteRoomTokens.has(t.roomToken)&&n.remoteRoomTokens.size>=64){this.failData(n,"too many advertised rooms");return}n.remoteRoomTokens.add(t.roomToken);for(const[a,o]of this.rooms.get(n.appId)??[])o.token===t.roomToken&&this.attachRoom(n.appId,a,o,n)}else{n.remoteRoomTokens.delete(t.roomToken),n.pendingDataByToken.delete(t.roomToken);const a=n.bindingsByToken[t.roomToken];(s=a==null?void 0:(r=a.handlers).close)==null||s.call(r),a==null||a.detach(),this.syncDataTimers(n)}return}const i=n.bindingsByToken[t.roomToken];if(!i){if(!this.canBindRoomToken(n,t.roomToken)||this.bufferedFrameCount(n)>=64)return;const a=n.pendingDataByToken.get(t.roomToken)??[];a.push(t.payload),n.pendingDataByToken.set(t.roomToken,a),this.syncDataTimers(n);return}if(i.handlers.data)i.handlers.data(t.payload);else{if(this.bufferedFrameCount(n)>=64){this.failData(n,"too much data waiting for a room handler");return}i.pendingData.push(t.payload),this.syncDataTimers(n)}}dispatchSignal(n,e){var i,r;const t=this.getSignalBinding(n);t?(r=(i=t.handlers).signal)==null||r.call(i,e):e.type==="offer"&&this.clear(n.appId,n.peerId,{destroyPeer:!0})}dispatchTrack(n,e,t){Wn(n.bindings).forEach(i=>{var r,s,a,o;if(i.handlers.track||i.handlers.stream){(s=(r=i.handlers).track)==null||s.call(r,e,t),(o=(a=i.handlers).stream)==null||o.call(a,t);return}i.pendingTracks.push({track:e,stream:t})})}};const wu=23333,Xm=57333,qm=12,Ym=7533,Km=23333,es="offer-placeholder",$m=["offer","answer","candidate"],Ld=n=>{if(typeof n=="string")try{const e=ps(n);return e&&typeof e=="object"&&!Array.isArray(e)?e:null}catch{return null}return n&&typeof n=="object"&&!Array.isArray(n)?n:null},xi=(n,e)=>typeof n[e]=="string"&&n[e]?n[e]:void 0,Dd=n=>!!(n&&typeof n=="object"&&typeof n.signal=="function"&&typeof n.destroy=="function"&&typeof n.setHandlers=="function"),Id=(n,e=!1)=>$m.some(t=>t in n&&(typeof n[t]!="string"||n[t]===""))||"peer"in n&&(e||n.peer!==void 0&&!Dd(n.peer)),Zm=n=>{const e=Ld(n);if(!e||Id(e,typeof n=="string"))return!1;const t=xi(e,"peerId");return!!(t&&t!==tn&&e.passive!==!0&&!xi(e,"answer")&&!xi(e,"candidate"))},Jm=(n,e,t,i,r,s)=>{n.toCipher(e).then(a=>{n.isLeaving()||!s()||i(t,Vt(r(a.sdp)))})},Qm=()=>({offerPeer:null,offerId:null,offerSdp:null,offerInitPromise:null,offerAnswered:!1,offerRelays:[],offerSignalRelays:[],offerSignalBacklog:[],offerRelayTimers:[],offerExpiryTimer:null,connectedPeer:null,connectedPeerUnhealthySinceMs:null,answeringExpiryTimer:null,answeringPeer:null,answerSent:!1,answerReplay:null,connectionErrorReported:!1}),jm=n=>{var e;return[...n.turnConfig??[],...((e=n.rtcConfig)==null?void 0:e.iceServers)??[]].some(({urls:t})=>(Array.isArray(t)?t:[t]).some(i=>/^turns?:/i.test(i)))},eg=(n,e)=>`could not connect to peer ${n} after exchanging SDP; ${jm(e)?"check that your TURN server URLs and credentials are reachable by both peers":"configure TURN servers with turnConfig or rtcConfig.iceServers"}`,Fa=(n,e,t)=>{var i;n.isLeaving()||e.connectedPeer||e.connectionErrorReported||(e.connectionErrorReported=!0,(i=n.onJoinError)==null||i.call(n,{error:eg(t,n.config),appId:n.appId,peerId:t,roomId:n.roomId}))},Oa=(n,e)=>n[e]??(n[e]=Qm()),va=new WeakMap,rc=n=>{va.delete(n),n.answeringExpiryTimer=Qe(n.answeringExpiryTimer),n.answeringPeer=null,n.answerSent=!1,n.answerReplay=null},ts=(n,e)=>{n.answeringPeer===e&&(rc(n),n.connectedPeer!==e&&!e.isDead&&e.destroy())},tg=(n,e)=>{n.answeringPeer&&n.answeringPeer!==e&&!n.answeringPeer.isDead&&n.answeringPeer.destroy(),rc(n),n.connectedPeer=e,n.connectedPeerUnhealthySinceMs=null},Au=(n,e)=>{(n==null?void 0:n.connectedPeer)===e&&(n.connectedPeer=null,n.connectedPeerUnhealthySinceMs=null)},Jo=(n,e,t)=>{n.connectedPeer&&(n.connectedPeer.isDead||n.connectedPeer.destroy(),n.connectedPeer=null,n.connectedPeerUnhealthySinceMs=null)},sc=(n,e)=>{n.offerRelayTimers[e]=Qe(n.offerRelayTimers[e]),n.offerRelays[e]&&(n.offerRelays[e]=void 0)},ro=(n,e)=>{(n==null?void 0:n.offerRelays[e])===es&&sc(n,e)},zi=n=>{va.delete(n),n.offerExpiryTimer=Qe(n.offerExpiryTimer),n.offerInitPromise=null,n.offerRelays.forEach((e,t)=>sc(n,t)),n.offerRelays=[],n.offerSignalRelays=[],n.offerRelayTimers=[],n.offerSignalBacklog=[],n.offerPeer&&n.offerPeer!==n.connectedPeer&&(n.offerPeer.isDead||n.offerPeer.destroy()),n.offerPeer=null,n.offerId=null,n.offerSdp=null,n.offerAnswered=!1,n.connectionErrorReported=!1},ng=(n,e,t,i)=>{Qe(e.answeringExpiryTimer),e.answeringExpiryTimer=setTimeout(()=>{const r=n.peerStates[t];!r||r.connectedPeer||r.answeringPeer!==i||(r.answerSent&&Fa(n,r,t),ts(r,i),n.checkDeactivate())},Km)},Qo=(n,e,t,i=Xm)=>{Qe(e.offerExpiryTimer);const r=e.offerId;e.offerExpiryTimer=setTimeout(()=>{const s=n.peerStates[t];!s||s.connectedPeer||s.offerId!==r||(s.offerAnswered&&Fa(n,s,t),zi(s),n.checkDeactivate())},i)},Ud=(n,e,t,i,r)=>{const s=()=>{e.offerPeer===i&&!e.connectedPeer&&(e.offerAnswered&&Fa(n,e,t),zi(e)),n.disconnectPeer(i,t),n.checkDeactivate()};i.setHandlers({connect:()=>n.connectPeer(i,t),...r?{signal:r}:{},close:s,error:s})},ig=(n,e,t)=>{if(e.offerPeer&&e.offerId&&e.offerSdp)return Promise.resolve({peer:e.offerPeer,offer:e.offerSdp,offerId:e.offerId});if(e.offerInitPromise)return e.offerInitPromise;const r=(async()=>{let s;try{s=(await n.offerManager.checkout(1,!1,n.encryptOffer))[0]}catch(l){if(n.isLeaving()||e.offerInitPromise!==r)return null;throw l}if(!s)throw Ke("failed to allocate offer peer");const{peer:a,offer:o}=s;return n.isLeaving()||e.offerInitPromise!==r?(a.destroy(),null):(e.offerPeer=a,e.offerId=Xi(qm),e.offerSdp=o,e.offerAnswered=!1,e.connectionErrorReported=!1,e.offerSignalBacklog=[],Ud(n,e,t,a,l=>{e.offerPeer===a&&(e.offerSignalBacklog.push(l),e.offerSignalRelays.forEach(c=>c==null?void 0:c(l)))}),Qo(n,e,t),{peer:a,offer:o,offerId:e.offerId})})().finally(()=>{e.offerInitPromise===r&&(e.offerInitPromise=null)});return e.offerInitPromise=r},Nd=async(n,e,t,i,r=0)=>{const s=n.peerStates[t];if(!s||s.connectedPeer||s.answeringPeer||s.offerAnswered){ro(s,e);return}if(s.offerRelays[e]!==es)return;const[a,o]=await qi([Sr(xr(n.rootTopicPlaintext,t)),ig(n,s,t)]);if(!o){ro(s,e);return}if(n.isLeaving()){zi(s);return}if(s.connectedPeer||s.answeringPeer||s.offerAnswered||s.offerRelays[e]!==es){ro(s,e);return}s.offerRelayTimers[e]=Qe(s.offerRelayTimers[e]),s.offerRelays[e]=!0,s.offerRelayTimers[e]=setTimeout(()=>{if(r>=2||n.isLeaving()||s.connectedPeer||s.answeringPeer||s.offerAnswered||s.offerPeer!==o.peer||s.offerId!==o.offerId){og(n,t,e);return}s.offerRelays[e]=es,Nd(n,e,t,i,r+1)},r===0&&n.announceIntervals[e]===void 0?2e3:(n.announceIntervals[e]??n.announceIntervalMs)*.9);let l=!1;s.offerSignalRelays[e]=c=>{l&&(n.isLeaving()||s.connectedPeer||s.offerPeer!==o.peer||s.offerId!==o.offerId||c.type!=="candidate"||Jm(n,c,a,i,h=>({peerId:tn,offerId:o.offerId,candidate:h,...n.isPassive?{passive:!0}:{}}),()=>!s.connectedPeer&&s.offerPeer===o.peer&&s.offerId===o.offerId))},i(a,Vt({peerId:tn,offerId:o.offerId,offer:o.offer,...n.isPassive?{passive:!0}:{}})),l=!0,s.offerSignalBacklog.forEach(c=>{var h,p;return(p=(h=s.offerSignalRelays)[e])==null?void 0:p.call(h,c)})},rg=async(n,e,t,i,r,s)=>{var d;const a=Oa(n.peerStates,t);if(a.answeringPeer||a.offerAnswered){const u=a.answerReplay,v=u==null?void 0:u.lastSentAt[e];if(a.answeringPeer&&!a.answeringPeer.isDead&&u&&u.offer===i&&u.offerId===r&&(v===void 0||Date.now()-v>=1e3)){u.lastSentAt[e]=Date.now();const w=await Sr(xr(n.rootTopicPlaintext,t));if(!n.isLeaving()&&a.answerReplay===u&&!a.connectedPeer){const M=b=>s(w,b);u.relays[e]=M,u.messages.forEach(M)}}return}const o=!!(a.offerPeer||a.offerRelays.some(Boolean));if(o&&tn<t)return;o&&zi(a);const l=n.initPeer(!1,n.config),c={offer:i,offerId:r,messages:[],lastSentAt:[],relays:[]};c.lastSentAt[e]=Date.now(),a.answeringPeer=l,a.answerSent=!1,a.answerReplay=c,a.connectionErrorReported=!1,ng(n,a,t,l);const h=()=>{a.answeringPeer===l&&!a.connectedPeer&&a.answerSent&&Fa(n,a,t),ts(a,l),n.disconnectPeer(l,t),n.checkDeactivate()};l.setHandlers({connect:()=>n.connectPeer(l,t),close:h,error:h});let p;try{p=await n.toPlain({type:"offer",sdp:i})}catch{ts(a,l),(d=n.onJoinError)==null||d.call(n,{error:"incorrect room password when decrypting offer",appId:n.appId,peerId:t,roomId:n.roomId});return}if(l.isDead){ts(a,l);return}const f=await Sr(xr(n.rootTopicPlaintext,t));if(n.isLeaving()||a.answerReplay!==c)return;c.relays[e]=u=>s(f,u);const m=[];let _=!1;const S=u=>{n.toCipher(u).then(v=>{if(n.isLeaving()||a.answeringPeer!==l||l.isDead)return;const w={peerId:tn};u.type==="answer"?(a.answerSent=!0,w.answer=v.sdp):w.candidate=v.sdp,r&&(w.offerId=r),n.isPassive&&(w.passive=!0);const M=Vt(w),b=Date.now();c.messages.push(M),c.relays.forEach((T,P)=>{T&&(c.lastSentAt[P]=b,T(M))}),u.type==="answer"&&!_&&(_=!0,m.splice(0).forEach(S))})};l.setHandlers({signal:u=>{if(!(n.isLeaving()||a.answeringPeer!==l||l.isDead)&&!(u.type!=="answer"&&u.type!=="candidate")){if(u.type==="candidate"&&!_){m.push(u);return}S(u)}}}),await l.signal(p)},sg=async(n,e,t,i,r)=>{var p;let s;try{s=await n.toPlain({type:yd,sdp:t})}catch{return}const a=n.peerStates[e],o=i&&(a!=null&&a.offerPeer)&&a.offerId===i?a.offerPeer:null,l=!i||((p=a==null?void 0:a.answerReplay)==null?void 0:p.offerId)===i?a==null?void 0:a.answeringPeer:null,c=!i&&(a!=null&&a.offerPeer)?a.offerPeer:null,h=r&&!r.isDead?r:o??l??c;h&&!h.isDead&&h.signal(s)},ag=async(n,e,t,i,r)=>{var a;let s;try{s=await n.toPlain({type:"answer",sdp:t})}catch{r&&(n.offerManager.reclaimLeased(r),r.isDead||r.destroy()),(a=n.onJoinError)==null||a.call(n,{error:"incorrect room password when decrypting answer",appId:n.appId,peerId:e,roomId:n.roomId});return}if(r){const o=Oa(n.peerStates,e);if(n.offerManager.claimLeased(r),o.connectedPeer||o.offerAnswered||o.answeringPeer&&!o.answeringPeer.isDead&&tn>e){r.destroy();return}if(o.answeringPeer){const l=o.answeringPeer;ts(o,l)}zi(o),o.offerPeer=r,o.offerId=i??null,o.offerAnswered=!0,Qo(n,o,e,wu),Ud(n,o,e,r),r.signal(s)}else{const o=n.peerStates[e];if(!o||!o.offerPeer||o.offerAnswered||i&&o.offerId&&i!==o.offerId||o.offerPeer.isDead)return;o.offerAnswered=!0,Qo(n,o,e,wu),o.offerPeer.signal(s)}},og=(n,e,t)=>{const i=n.peerStates[e];!i||i.connectedPeer||i.offerRelays[t]&&(sc(i,t),n.checkDeactivate())},lg=n=>e=>async(t,i,r)=>{var u;if(n.isLeaving())return;const s=Ld(i);if(!s||Id(s,typeof i=="string"))return;const a=xi(s,"peerId")??"",o=xi(s,"offer"),l=xi(s,"answer"),c=xi(s,"candidate"),h=xi(s,"offerId"),p=Dd(s.peer)?s.peer:void 0,f=s.passive===!0;if(!a||a===tn)return;const[m,_]=await qi([n.rootTopicP,n.selfTopicP]);if(n.isLeaving()||t!==m&&t!==_||n.isPassive&&f||(n.isPassive&&!n.isActive&&!l&&!c&&(n.isActive=!0,(u=n.requeueAnnounce)==null||u.call(n)),n.isPassive&&!n.isActive))return;const S=n.peerStates[a],d=S==null?void 0:S.connectedPeer;if(d&&S){const v=Vm(d);if(v==="live"){S.connectedPeerUnhealthySinceMs=null;return}if(v==="stale")Jo(S);else{const w=Date.now(),M=S.connectedPeerUnhealthySinceMs??w;if(S.connectedPeerUnhealthySinceMs=M,w-M<Ym)return;Jo(S)}}if(!n.reusePeer(a)){if(a&&!o&&!l&&!c){const v=Oa(n.peerStates,a),w=tn<a;if(v.answeringPeer||v.connectedPeer||v.offerAnswered)return;if(!w&&!v.offerPeer){let M=va.get(v);M||(M=[],va.set(v,M));const b=M[e];if(b!==void 0&&Date.now()-b<1e3)return;M[e]=Date.now();const T=await Sr(xr(n.rootTopicPlaintext,a));!n.isLeaving()&&!v.connectedPeer&&!v.answeringPeer&&!v.offerAnswered&&r(T,Vt({peerId:tn}));return}return v.offerRelays[e]?void 0:(v.offerRelays[e]=es,Nd(n,e,a,r))}if(o)return rg(n,e,a,o,h,r);if(c)return sg(n,a,c,h,p);if(l)return ag(n,a,l,h,p)}},ws=5333,cg=[233,533,1333],Ru=7533,ug=123333;var fg=({init:n,subscribe:e,announce:t,deactivate:i})=>{const r={},s={},a=new Wm,o=()=>Wn(r).some(p=>gn(p).length>0);let l=!1,c=[],h=Rt;return(p,f,m)=>{var mt,z,bt,at;if(!p)throw Ke("requires a config map as the first argument");if(m&&typeof m!="object")throw Ke("third argument must be a callbacks object");const{appId:_}=p,S=m==null?void 0:m.onJoinError,d=m==null?void 0:m.onPeerHandshake,u=m==null?void 0:m.handshakeTimeoutMs;if(!_)throw Ke("config map is missing appId field");if(!f)throw Ke("roomId argument required");if(p.maxReceiveBytes!==void 0&&(!Number.isSafeInteger(p.maxReceiveBytes)||p.maxReceiveBytes<=0))throw Ke("maxReceiveBytes must be a positive safe integer");if(u!==void 0&&(!Number.isFinite(u)||u<=0))throw Ke("handshakeTimeoutMs must be a positive number");if((mt=r[_])!=null&&mt[f])return r[_][f];(bt=(z=s[_])==null?void 0:z[f])==null||bt.call(z,!0);const v=xr(kt,_,f),w=Sr(v),M=Sr(xr(v,tn)),b=lm(p.password??"",_,f),T=cm(_,f),P=p._test_only_sharedPeerIdleMs??ug;let x=!1;const C=R=>async g=>({type:g.type,sdp:await R(b,g.sdp)}),N=C(fm),O=C(um),V=()=>cu(!0,p);let E=!1;const A=new hm(V),D=async R=>{const g=await R.getOffer();if(!g||g.type!=="offer")throw Ke("failed to get offer for peer");return(await O(g)).sdp},U=(R,g)=>{Ze.connect(g,R,P)};let F=!1;const W=()=>{I||!E||F||(F=!0,queueMicrotask(()=>{var R;F=!1,x||(R=Me.requeueAnnounce)==null||R.call(Me)}))},L=(R,g)=>{if(x)return;const B=Me.peerStates[g];(B==null?void 0:B.connectedPeer)===R&&(Jo(B),oe(),W())},I=!!p.passive;let X,se=Rt;const oe=()=>{if(!I||!Me.isActive)return;let R=!1;_r(Me.peerStates).forEach(([g,B])=>{B.connectedPeer||B.answeringPeer||B.offerInitPromise||B.offerPeer||B.offerRelays.some(Boolean)?R=!0:delete Me.peerStates[g]}),R||(Me.isActive=!1,X=Qe(X),De.forEach(Qe),De.length=0,se(),Ze.setActive(!1))},Me={appId:_,roomId:f,config:p,peerStates:{},rootTopicPlaintext:v,rootTopicP:w,selfTopicP:M,toPlain:N,toCipher:O,isLeaving:()=>x,isPassive:I,isActive:!I,onJoinError:S,offerManager:A,encryptOffer:D,initPeer:cu,connectPeer:U,disconnectPeer:L,reusePeer:R=>Ze.reuse(R),checkDeactivate:oe,announceIntervals:[],announceIntervalMs:ws},Ne={config:p,appId:_,roomId:f,isPassive:I},Oe=lg(Me);if(!l){const R=n(p);c=(Array.isArray(R)?R:[R]).map(g=>Promise.resolve(g)),l=!0,h=(at=p.relayConfig)!=null&&at.manualReconnection?Rt:sm()}const Q=c.map(()=>ws),ee=c.map(()=>0),ve=c.map(()=>0),De=[],H=c.map(async(R,g)=>e(await R,await w,await M,Oe(g),B=>A.getOffers(B,D),Ne));qi([w,M]).then(([R,g])=>{if(x)return;const B=async(q,Z)=>{var Re;if(x||I&&!Me.isActive)return;const ae=I?{passive:!0}:void 0;let le;try{le=await t(q,R,g,ae,Ne),ve[Z]=0}catch(de){if(x)return;const fe=ve[Z]??0;fe===0&&((Re=p.relayConfig)==null?void 0:Re.warnOnRelayFailure)!==!1&&console.warn(`${kt}: announce failed - ${vr(de,"")}`),ve[Z]=fe+1}if(x||I&&!Me.isActive||le&&typeof le!="number"&&"stopAnnouncing"in le)return;typeof le=="number"?(Me.announceIntervals[Z]=le,Q[Z]=le):le&&(Q[Z]=le.nextAnnounceMs,E||(E=le.reannounceOnDisconnect===!0));const j=ee[Z]??0;ee[Z]=j+1;const te=Q[Z]??ws,ue=cg[j]??(j===3&&typeof le=="object"?ws:void 0);De[Z]=setTimeout(()=>{B(q,Z)},typeof ue=="number"?Math.min(te,ue):te)};se=()=>{i&&c.forEach(async q=>{const Z=await q;x||i(Z,R,g,Ne)})},Me.requeueAnnounce=()=>{De.forEach(Qe),De.length=0,X=Qe(X),Ze.setActive(!0),X=setTimeout(oe,Ru),c.forEach(async(q,Z)=>{const ae=await q;ae&&!x&&(ee[Z]=0,B(ae,Z))})},H.forEach(async(q,Z)=>{if(await q,x)return;const ae=await c[Z];ae&&!x&&(!I||Me.isActive)&&B(ae,Z)})});let ie=Rt;const me=p.password??"",{compose:ce}=pm(me,_,f),Ee=ce(d),We=()=>{var R;((R=r[_])==null?void 0:R[f])===$e&&(delete r[_][f],gn(r[_]).length===0&&delete r[_])},He=()=>{var R;((R=s[_])==null?void 0:R[f])===rt&&(delete s[_][f],gn(s[_]).length===0&&delete s[_])},rt=(R=!1)=>{x||(x=!0,ie=Rt,We(),He(),Ze.leave(),_r(Me.peerStates).forEach(([g,B])=>{B.connectedPeer&&!B.connectedPeer.isDead&&(a.owns(_,g,B.connectedPeer)||B.connectedPeer.destroy()),B.answeringPeer&&!B.answeringPeer.isDead&&B.answeringPeer.destroy(),zi(B),rc(B),B.connectedPeer=null,B.connectedPeerUnhealthySinceMs=null}),De.forEach(Qe),X=Qe(X),H.forEach(async g=>{(await g)()}),A.destroy(),!(R||o())&&(l=!1,h()))},Be={...p.maxReceiveBytes===void 0?{}:{maxReceiveBytes:p.maxReceiveBytes},...Ee?{onPeerHandshake:Ee}:{},...u===void 0?{}:{handshakeTimeoutMs:u},isPassive:I,onBeforeLeave:()=>{We(),(s[_]??(s[_]={}))[f]=rt},onHandshakeError:(R,g)=>S==null?void 0:S({error:g.replace(/^handshake failed: /,""),appId:_,peerId:R,roomId:f})};r[_]??(r[_]={});const $e=zm(R=>ie=R,R=>{if(x)return;const g=Me.peerStates[R];g!=null&&g.connectedPeer&&Au(g,g.connectedPeer),oe(),W()},()=>rt(!1),Be),Ze=a.registerRoom(_,f,T,{active:!I||Me.isActive,onPeer:(R,g,B)=>{const q=Oa(Me.peerStates,g);tg(q,B),I&&!Me.isActive&&(Me.isActive=!0,Ze.setActive(!0),Me.requeueAnnounce?Me.requeueAnnounce():(X=Qe(X),X=setTimeout(oe,Ru))),ie(R,g),zi(q)},onDetach:(R,g)=>{Au(Me.peerStates[R],g),oe()}});return r[_][f]=$e}};const dg=6e4,so=n=>{if(!n)throw Ke("topic strategy missing room context");return n},Nr=(n,e,t,i)=>({kind:e,appId:n.appId,roomId:n.roomId,rootTopic:t,selfTopic:i});var hg=({steadyAnnounceIntervalMs:n=dg,reannounceOnDisconnect:e=!0,init:t,subscribeTopic:i,publishTopic:r,unpublishTopic:s})=>fg({init:t,subscribe:async(a,o,l,c,h,p)=>{const f=so(p),m=(b,T)=>void r(a,b,T,Nr(f,"signal",o,l));let _=null,S=!1,d=null,u=!1;const v=b=>{S||(S=!0,b())},w=()=>(d||(d=Promise.resolve(i(a,l,(b,T)=>{u||c(b,T,m)},Nr(f,"self",o,l))).then(b=>{_=b,u&&v(b)})),d);f.isPassive||await w();const M=await i(a,o,async(b,T)=>{u||(f.isPassive&&Zm(T)&&await w(),u||await c(b,T,m))},Nr(f,"root",o,l));return()=>{u=!0,_&&v(_),M()}},announce:async(a,o,l,c,h)=>{const p=so(h),f=await r(a,o,Vt({peerId:tn,...c}),Nr(p,"announce",o,l));return typeof f=="number"||f!==void 0&&"stopAnnouncing"in f?f:{nextAnnounceMs:(f==null?void 0:f.nextAnnounceMs)??n,reannounceOnDisconnect:(f==null?void 0:f.reannounceOnDisconnect)??e}},...s?{deactivate:(a,o,l,c)=>{const h=so(c);return s(a,o,Nr(h,"announce",o,l))}}:{}});const Fd=rm(n=>n.socket),pg=5,Od="x",Bd="EVENT",{secretKey:mg,publicKey:gg}=xd.keygen(),_g=rs(gg),ao={},Cu=250,Ii=6e4,vg=9e5,ac=5333,ss=new WeakMap,xa=Fd.scoped(),jo=new WeakSet,xg=n=>{const e=ss.get(n),t=Math.min(e!=null&&e.delayMs?Math.max(Ii,e.delayMs*2):Ii,vg);return ss.set(n,{delayMs:t,untilMs:Date.now()+t}),t},as=n=>{const e=ss.get(n);if(!e)return 0;const t=e.untilMs-Date.now();return t>0?t:0},As=n=>({nextAnnounceMs:n}),Sg={stopAnnouncing:!0},Mg=n=>{var e;return jo.has(n)?!1:(jo.add(n),ss.delete(n),(e=n.close)==null||e.call(n),!0)},kd=()=>Math.floor(Date.now()/1e3),zd=n=>ao[n]??(ao[n]=Ed(n,1e4)+2e4),yg=async(n,e)=>{const t={kind:zd(n),tags:[[Od,n]],created_at:kd(),content:e,pubkey:_g},i=await Na("SHA-256",Vt([0,t.pubkey,t.created_at,t.kind,t.tags,t.content]));return Vt([Bd,{...t,id:rs(i),sig:rs(await xd.signAsync(i,mg))}])},nn={},Hd=n=>{n.flushWaiters.forEach(e=>e()),n.flushWaiters.clear()},Eg=(n,e,t)=>{var r;const i=nn[r=n.url]??(nn[r]={subIds:[],topics:new Map,updateTimer:null,flushWaiters:new Set,retryTimer:null,retryMs:ac,pendingEose:new Set,requestedAt:0});i.topics.set(e,t),Gd(n,i)},bg=(n,e)=>{const t=nn[n.url];t&&(t.topics.delete(e),delete xa.forRelay(n)[e],t.topics.size===0?(t.retryTimer!==null&&clearTimeout(t.retryTimer),t.updateTimer!==null&&(clearTimeout(t.updateTimer),t.updateTimer=null),Hd(t),t.subIds.forEach(i=>n.send(Vt(["CLOSE",i]))),delete nn[n.url]):Gd(n,t))},Gd=(n,e)=>{e.updateTimer===null&&(e.updateTimer=setTimeout(()=>{e.updateTimer=null;try{Vd(n)}finally{Hd(e)}},0))},Tg=n=>{const e=nn[n.url];return!e||e.updateTimer===null?Promise.resolve():new Promise(t=>e.flushWaiters.add(t))},Vd=n=>{const e=nn[n.url];if(!e||e.topics.size===0)return;const t=[...e.topics.keys()],i=[],r=kd();for(let s=0;s<t.length;s+=Cu)i.push(t.slice(s,s+Cu));for(;e.subIds.length>i.length;){const s=e.subIds.pop();s&&n.send(Vt(["CLOSE",s]))}e.pendingEose.clear(),e.requestedAt=Date.now(),i.forEach((s,a)=>{var l;const o=(l=e.subIds)[a]??(l[a]=Xi(64));e.pendingEose.add(o),n.send(Vt(["REQ",o,{kinds:[...new Set(s.map(zd))],since:r,"#x":s}]))})},Wd=n=>{const e=nn[n.url];if(e&&e.topics.size>0&&!n.isClosed){if(as(n)>0){Yd(n,!0);return}e.retryTimer!==null&&(clearTimeout(e.retryTimer),e.retryTimer=null),Vd(n),Xd(n)}},Xd=n=>{Object.entries(xa.forRelay(n)).forEach(([e,t])=>{qd(n,e,t,!0)})},qd=async(n,e,t,i)=>{var a;if(jo.has(n)||n.isClosed)return i?Sg:void 0;const r=as(n);if(r>0||n.socket.readyState!==1)return i?As(Math.max(Ii,r)):void 0;const s=await yg(e,i?Vt({...ps(t),nonce:Xi(8)}):t);if(i&&!((a=nn[n.url])!=null&&a.topics.has(e)))return As(Ii);if(as(n)>0||n.isClosed||n.socket.readyState!==1)return i?As(Ii):void 0;if(n.send(s),i)return As(Ii)},Yd=(n,e)=>{const t=nn[n.url];if(!t||t.retryTimer!==null&&!e)return;t.retryTimer!==null&&clearTimeout(t.retryTimer);const i=e?as(n):t.retryMs;t.retryMs=Math.min(t.retryMs*2,Ii),t.retryTimer=setTimeout(()=>{t.retryTimer=null,Wd(n)},Math.max(i,ac))},wg=hg({init:n=>jp(n,Ag,pg,!0).map(e=>{const t=Fd.register(e,()=>im(e,i=>{var l,c;const[r,s,a,o]=ps(i);if(r!==Bd){const h=`${kt}: relay failure from ${t.url} - `,p=r==="CLOSED"&&typeof a=="string"?a:o,f=r==="OK"&&a===!1,m=(f||r==="CLOSED")&&(p==null?void 0:p.startsWith("rate-limited:")),_=f&&(p==null?void 0:p.startsWith("duplicate:")),S=p&&/^(blocked|restricted|auth-required|pow):/.test(p);if(r==="OK"&&a===!0&&as(t)===0&&ss.delete(t),(f||r==="CLOSED")&&S&&!Mg(t))return;if(m)xg(t);else if(r==="EOSE"){const d=nn[t.url];d!=null&&d.pendingEose.delete(s)&&d.pendingEose.size===0&&(d.retryMs=ac,d.retryTimer!==null&&(clearTimeout(d.retryTimer),d.retryTimer=null),Date.now()-d.requestedAt>=1e3&&Xd(t))}r==="CLOSED"&&!S&&Yd(t,!!m),!_&&((l=n.relayConfig)==null?void 0:l.warnOnRelayFailure)!==!1&&(r==="NOTICE"?console.warn(h+s):(f||r==="CLOSED")&&console.warn(h+p));return}if(a&&typeof a=="object"&&"content"in a){const h=nn[t.url];if(h!=null&&h.subIds.includes(s)&&a.tags){const p=a.tags.find(f=>f[0]===Od);p!=null&&p[1]&&((c=h.topics.get(p[1]))==null||c(p[1],a.content))}}},()=>Wd(t)));return t.ready}),subscribeTopic:(n,e,t,i)=>{const r=(a,o)=>void t(a,o);Eg(n,e,r);const s=()=>{var a;((a=nn[n.url])==null?void 0:a.topics.get(e))===r&&bg(n,e)};return i.kind==="root"?Tg(n).then(()=>s):s},publishTopic:(n,e,t,{kind:i})=>{const r=typeof t=="string"?t:Vt(t);return i==="announce"&&(xa.forRelay(n)[e]=r),qd(n,e,r,i==="announce")},unpublishTopic:(n,e)=>{delete xa.forRelay(n)[e]}}),Ag=["0x-nostr-relay.fly.dev","bendernostur.duckdns.org:8443","cdn.satellite.earth","nos.lol","nostr.chaima.info","nostr.christiansass.de","nostr.rblb.it","nostr.red5d.dev","nostr.robosats.org","nostr.stakey.net","nostrcity-club.fly.dev","relay-dev.gulugulu.moe","relay.aarpia.com","relay.agentry.com","relay.bitmacro.cloud","relay.bullishbounty.com","relay.degmods.com","relay.flashapp.me","relay.grigic.org","relay.hackshed.dev","relay.kaleidoswap.com","relay.layer.systems","relay.nostr.blockhenge.com","relay.nostr.dev.br","relay.nostrmap.net","relay.novospes.com","relay.piazza.today","relay.routstr.com","testr.nymble.world"].map(n=>"wss://"+n),Rg=["visor","scout","fang","football","edgar","nori","sirius"],qt={visor:"#1a2330",scout:"#e7f0ff",fang:"#102216",football:"#f7f7fb",edgar:"#f4e3ea",nori:"#12806e",sirius:"#1c1458"},el=[{id:"visor",name:"Visor",shell:qt.visor,rolls:!1},{id:"scout",name:"Scout",shell:qt.scout,rolls:!1},{id:"fang",name:"Fang",shell:qt.fang,rolls:!1},{id:"football",name:"Football",shell:qt.football,rolls:!0},{id:"edgar",name:"Edgar",shell:qt.edgar,rolls:!1},{id:"nori",name:"Nori",shell:qt.nori,rolls:!1},{id:"sirius",name:"Sirius",shell:qt.sirius,rolls:!1}],Cg=new Set(Rg);function Ar(n){return typeof n=="string"&&Cg.has(n)}function Mr(n){return el.find(e=>e.id===n)??el[0]}function Pg(n,e){e==="football"?Lg(n):$d(n,e)}function Lg(n){const e=n.getContext("2d");if(!e)return;const t=n.width;e.clearRect(0,0,t,t),e.fillStyle=qt.football,e.beginPath(),e.arc(t/2,t/2,t*.48,0,Math.PI*2),e.fill(),e.fillStyle="#16161c",Fr(e,t/2,t/2,t*.16,-Math.PI/2),Fr(e,t*.3,t*.32,t*.09,.4),Fr(e,t*.72,t*.34,t*.09,.2),Fr(e,t*.28,t*.7,t*.08,.6),Fr(e,t*.7,t*.68,t*.08,1)}function Fr(n,e,t,i,r){n.beginPath();for(let s=0;s<5;s++){const a=r+s/5*Math.PI*2,o=e+Math.cos(a)*i,l=t+Math.sin(a)*i;s===0?n.moveTo(o,l):n.lineTo(o,l)}n.closePath(),n.fill()}const Dg={visor:Fg,scout:Og,fang:Bg,edgar:kg,nori:zg,sirius:Hg};function Kd(n,e,t,i){const r=(e+.5)/i*Math.PI,s=(n+.5)/t*Math.PI*2,a=Math.sin(r);return[-Math.cos(s)*a,Math.cos(r),Math.sin(s)*a]}function Ig(n,e){const t=n.getContext("2d");if(!t)return;const i=document.createElement("canvas");i.width=512,i.height=512,$d(i,e);const r=i.getContext("2d");if(!r)return;const s=r.getImageData(0,0,i.width,i.height).data,a=Ug(Mr(e).shell),o=n.width,l=n.height,c=t.createImageData(o,l),h=c.data;for(let p=0;p<l;p++)for(let f=0;f<o;f++){const[m,_,S]=Kd(f,p,o,l),d=(p*o+f)*4,u=m*.5+.5,v=-_*.5+.5;if(S>0&&u>=0&&u<1&&v>=0&&v<1){const M=Math.min(i.width-1,Math.max(0,Math.floor(u*i.width))),T=(Math.min(i.height-1,Math.max(0,Math.floor(v*i.height)))*i.width+M)*4,P=s[T+3]/255;h[d]=s[T]*P+a[0]*(1-P),h[d+1]=s[T+1]*P+a[1]*(1-P),h[d+2]=s[T+2]*P+a[2]*(1-P)}else h[d]=a[0],h[d+1]=a[1],h[d+2]=a[2];h[d+3]=255}t.putImageData(c,0,0)}function Ug(n){const e=Number.parseInt(n.slice(1),16);return[e>>16&255,e>>8&255,e&255]}function $d(n,e){const t=n.getContext("2d");if(!t)return;const i=n.width;t.clearRect(0,0,i,i),Dg[e](t,i)}function Ng(n){const e=n.getContext("2d");if(!e)return;const t=n.width,i=n.height,r=e.createImageData(t,i),s=Gg(),a=r.data;for(let o=0;o<i;o++)for(let l=0;l<t;l++){const[c,h,p]=Kd(l,o,t,i);let f=4;for(const S of s){const d=c*S[0]+h*S[1]+p*S[2],u=Math.acos(Math.min(1,Math.max(-1,d)));u<f&&(f=u)}const m=f<.34,_=(o*t+l)*4;a[_]=m?18:246,a[_+1]=m?18:246,a[_+2]=m?22:250,a[_+3]=255}e.putImageData(r,0,0)}function Fg(n,e){n.fillStyle=qt.visor,n.beginPath(),n.arc(e/2,e/2,e*.48,0,Math.PI*2),n.fill(),Rn(n,e*.16,e*.22,e*.68,e*.5,e*.08),n.fillStyle="#071820",n.fill(),n.fillStyle="#7af6ff",Rn(n,e*.24,e*.36,e*.18,e*.1,e*.04),n.fill(),Rn(n,e*.58,e*.36,e*.18,e*.1,e*.04),n.fill(),n.fillStyle="#39e7ff",Rn(n,e*.4,e*.54,e*.2,e*.045,e*.02),n.fill(),fn(n,e*.12,e*.5,e*.055),fn(n,e*.88,e*.5,e*.055)}function Og(n,e){n.fillStyle=qt.scout,n.beginPath(),n.arc(e/2,e/2,e*.48,0,Math.PI*2),n.fill(),Sa(n,e*.36,e*.46,e*.13),Sa(n,e*.64,e*.46,e*.13),n.strokeStyle="#1c2433",n.lineWidth=e*.035,n.lineCap="round",n.beginPath(),n.arc(e/2,e*.58,e*.12,.2,Math.PI-.2),n.stroke(),fn(n,e*.14,e*.62,e*.045),fn(n,e*.86,e*.62,e*.045)}function Bg(n,e){n.fillStyle=qt.fang,n.beginPath(),n.arc(e/2,e/2,e*.48,0,Math.PI*2),n.fill(),Lu(n,e*.36,e*.42,-.45,e),Lu(n,e*.64,e*.42,.45,e),n.strokeStyle="#b6ff9a",n.lineWidth=e*.03,n.lineCap="round";for(const t of[.58,.66,.74])n.beginPath(),n.moveTo(e*.32,e*t),n.lineTo(e*.68,e*t),n.stroke();fn(n,e*.16,e*.7,e*.04),fn(n,e*.84,e*.7,e*.04)}function kg(n,e){oc(n,e,qt.edgar),n.fillStyle="#241828",n.beginPath(),n.moveTo(e*.06,e*.46),n.quadraticCurveTo(e*.18,e*.08,e*.5,e*.16),n.quadraticCurveTo(e*.86,e*.24,e*.92,e*.42),n.quadraticCurveTo(e*.58,e*.3,e*.06,e*.46),n.fill(),Pu(n,e*.36,e*.48,e),Pu(n,e*.64,e*.48,e),n.strokeStyle="#6d4454",n.lineWidth=e*.028,n.lineCap="round",n.beginPath(),n.arc(e/2,e*.66,e*.07,Math.PI+.55,Math.PI*2-.55),n.stroke(),n.fillStyle="#e0314a",Rn(n,e*.16,e*.74,e*.68,e*.1,e*.04),n.fill(),n.fillStyle="#f7f4f8",Rn(n,e*.16,e*.772,e*.68,e*.026,e*.013),n.fill(),n.fillStyle="#7b4dff",Rn(n,e*.16,e*.8,e*.2,e*.04,e*.02),n.fill(),fn(n,e*.16,e*.58,e*.04),fn(n,e*.84,e*.58,e*.04),n.restore()}function zg(n,e){oc(n,e,qt.nori),n.fillStyle="#0c5c50",n.beginPath(),n.moveTo(e*.38,e*.3),n.lineTo(e*.5,e*.05),n.lineTo(e*.62,e*.3),n.closePath(),n.fill(),n.fillStyle="#19a08c";for(const[t,i]of[[.24,.38],[.76,.4],[.18,.62],[.82,.64]])n.beginPath(),n.arc(e*t,e*i,e*.028,0,Math.PI*2),n.fill();n.fillStyle="#ffe3bf",n.beginPath(),n.ellipse(e/2,e*.56,e*.24,e*.22,0,0,Math.PI*2),n.fill(),n.strokeStyle="#3a2418",n.lineWidth=e*.032,n.lineCap="round",n.beginPath(),n.moveTo(e*.3,e*.48),n.lineTo(e*.43,e*.44),n.moveTo(e*.7,e*.48),n.lineTo(e*.57,e*.44),n.stroke(),Sa(n,e*.38,e*.55,e*.065),Sa(n,e*.62,e*.55,e*.065),n.fillStyle="#ff8c22",n.beginPath(),n.arc(e/2,e*.68,e*.05,0,Math.PI*2),n.fill(),n.fillStyle="#fff2d8",n.beginPath(),n.arc(e*.485,e*.665,e*.016,0,Math.PI*2),n.fill(),fn(n,e*.16,e*.5,e*.038),fn(n,e*.84,e*.5,e*.038),n.restore()}function Hg(n,e){oc(n,e,qt.sirius),n.fillStyle="#d31f3a",n.beginPath(),n.ellipse(e/2,e*.9,e*.36,e*.2,0,Math.PI,Math.PI*2),n.fill(),n.fillStyle="#f2c94c",Rs(n,e/2,e*.44,e*.25),Rs(n,e*.22,e*.3,e*.045),Rs(n,e*.78,e*.32,e*.038),Rs(n,e*.76,e*.66,e*.032),n.fillStyle="#ff2d3a",n.beginPath(),n.ellipse(e*.43,e*.45,e*.034,e*.02,-.2,0,Math.PI*2),n.fill(),n.beginPath(),n.ellipse(e*.57,e*.45,e*.034,e*.02,.2,0,Math.PI*2),n.fill(),n.strokeStyle="#f2c94c",n.lineWidth=e*.02,n.lineCap="round",n.beginPath(),n.arc(e/2,e*.64,e*.07,.3,Math.PI-.3),n.stroke(),fn(n,e*.16,e*.58,e*.038),fn(n,e*.84,e*.58,e*.038),n.restore()}function oc(n,e,t){n.save(),n.beginPath(),n.arc(e/2,e/2,e*.48,0,Math.PI*2),n.clip(),n.fillStyle=t,n.fillRect(0,0,e,e)}function Pu(n,e,t,i){const r=i*.1,s=i*.055;n.fillStyle="#fff8fb",Rn(n,e-r,t,r*2,s,s*.45),n.fill(),n.fillStyle="#2a2030",n.beginPath(),n.arc(e+r*.15,t+s*.55,i*.022,0,Math.PI*2),n.fill(),n.fillStyle="#241828",Rn(n,e-r,t-s*.35,r*2,s*.55,s*.3),n.fill()}function Rs(n,e,t,i){n.beginPath();for(let r=0;r<10;r++){const s=-Math.PI/2+r/10*Math.PI*2,a=r%2===0?i:i*.42,o=e+Math.cos(s)*a,l=t+Math.sin(s)*a;r===0?n.moveTo(o,l):n.lineTo(o,l)}n.closePath(),n.fill()}function Sa(n,e,t,i){n.fillStyle="#ffffff",n.beginPath(),n.arc(e,t,i,0,Math.PI*2),n.fill(),n.fillStyle="#161a28",n.beginPath(),n.arc(e+i*.15,t+i*.08,i*.42,0,Math.PI*2),n.fill()}function Lu(n,e,t,i,r){n.save(),n.translate(e,t),n.rotate(i),n.fillStyle="#f4fff0",Rn(n,-r*.11,-r*.045,r*.22,r*.09,r*.04),n.fill(),n.fillStyle="#06140c",n.beginPath(),n.arc(r*.02,0,r*.028,0,Math.PI*2),n.fill(),n.restore()}function fn(n,e,t,i){n.fillStyle="#d5dbe4",n.beginPath(),n.arc(e,t,i,0,Math.PI*2),n.fill(),n.strokeStyle="#6d7684",n.lineWidth=i*.35,n.beginPath(),n.moveTo(e-i*.55,t),n.lineTo(e+i*.55,t),n.moveTo(e,t-i*.55),n.lineTo(e,t+i*.55),n.stroke()}function Rn(n,e,t,i,r,s){n.beginPath(),n.roundRect(e,t,i,r,s)}function Gg(){const n=(1+Math.sqrt(5))/2;return[[-1,n,0],[1,n,0],[-1,-n,0],[1,-n,0],[0,-1,n],[0,1,n],[0,-1,-n],[0,1,-n],[n,0,-1],[n,0,1],[-n,0,-1],[-n,0,1]].map(([t,i,r])=>{const s=Math.hypot(t,i,r);return[t/s,i/s,r/s]})}const Vg="com.unexpectedsoftware.odin-run-2048",Wg=12e3;class Xg{constructor(e,t){Fe(this,"id",tn);Fe(this,"room");Fe(this,"greeted",new Set);Fe(this,"left",!1);Fe(this,"sendSkin");Fe(this,"sendStart");Fe(this,"sendPose");Fe(this,"sendLock");Fe(this,"sendTake");Fe(this,"sendGrant");Fe(this,"sendDeny");Fe(this,"sendFly");Fe(this,"sendRematch");this.handlers=t,this.room=wg({appId:Vg},e,{handshakeTimeoutMs:Wg,onJoinError:()=>this.fail("Couldn't open the room. Try again.")});const i=this.room.makeAction("hello"),r=this.room.makeAction("skin"),s=this.room.makeAction("start"),a=this.room.makeAction("pose"),o=this.room.makeAction("lock"),l=this.room.makeAction("take"),c=this.room.makeAction("grant"),h=this.room.makeAction("deny"),p=this.room.makeAction("fly"),f=this.room.makeAction("rematch"),m=this.room.makeAction("full"),_=this.room.makeAction("started");i.onMessage=(d,{peerId:u})=>{const v=qg(d);v&&t.onHello(u,v)},r.onMessage=(d,{peerId:u})=>{const v=Yg(d);v&&t.onSkin(u,v.skin)},s.onMessage=d=>{const u=Du(d);u!==null&&t.onStart(u)},a.onMessage=(d,{peerId:u})=>{const v=Jg(d);v&&t.onPose(u,v)},o.onMessage=d=>{const u=Kg(d);u&&t.onLock(u)},l.onMessage=(d,{peerId:u})=>{const v=$g(d);v&&t.onTake(u,v)},c.onMessage=d=>{const u=Iu(d);u&&t.onGrant(u)},h.onMessage=d=>{const u=Iu(d);u&&t.onDeny(u)},p.onMessage=d=>{const u=Zg(d);u&&t.onFly(u)},f.onMessage=d=>{const u=Du(d);u!==null&&t.onRematch(u)},m.onMessage=()=>t.onFull(),_.onMessage=()=>t.onStarted();const S=d=>{if(this.greeted.has(d))return;this.greeted.add(d);const u=Object.keys(this.room.getPeers()).length+1;if(t.isHost()&&!wp(u-1)){m.send({full:!0},{target:d}).catch(()=>{});return}if(t.started()){_.send({started:!0},{target:d}).catch(()=>{});return}i.send({skin:t.skin(),host:t.isHost()},{target:d}).catch(()=>{})};this.room.onPeerJoin=S,this.room.onPeerLeave=d=>{this.greeted.delete(d),t.onLeave(d)},this.sendSkin=d=>Bn(r,{skin:d}),this.sendStart=d=>Bn(s,{seed:d}),this.sendPose=d=>Bn(a,d),this.sendLock=d=>Bn(o,d),this.sendTake=d=>Bn(l,d),this.sendGrant=d=>Bn(c,d),this.sendDeny=(d,u)=>Bn(h,d,u),this.sendFly=d=>Bn(p,d),this.sendRematch=d=>Bn(f,{seed:d}),queueMicrotask(()=>{if(!this.left)for(const d of Object.keys(this.room.getPeers()))S(d)})}peerIds(){return Object.keys(this.room.getPeers())}async leave(){this.left||(this.left=!0,this.room.onPeerJoin=null,this.room.onPeerLeave=null,await this.room.leave())}fail(e){this.left||this.handlers.onError(e)}}function Bn(n,e,t){n.send(e,t?{target:t}:void 0).catch(()=>{})}function wi(n){return typeof n=="object"&&n!==null}function Pt(n){return typeof n=="number"&&Number.isFinite(n)?n:null}function qg(n){return!wi(n)||!Ar(n.skin)||typeof n.host!="boolean"?null:{skin:n.skin,host:n.host}}function Yg(n){return!wi(n)||!Ar(n.skin)?null:{skin:n.skin}}function Du(n){return wi(n)?Pt(n.seed):null}function Kg(n){if(!wi(n))return null;const e=Pt(n.id),t=Pt(n.value);return e===null||t===null?null:{id:e,value:t}}function $g(n){if(!wi(n))return null;const e=Pt(n.id),t=Pt(n.valueBefore);return e===null||t===null?null:{id:e,valueBefore:t}}function Iu(n){if(!wi(n)||typeof n.peerId!="string")return null;const e=Pt(n.id);return e===null?null:{id:e,peerId:n.peerId}}function Zg(n){if(!wi(n))return null;const e=Pt(n.id),t=Pt(n.vx),i=Pt(n.vy);return e===null||t===null||i===null?null:{id:e,vx:t,vy:i}}function Jg(n){if(!wi(n)||!Ar(n.skin)||typeof n.alive!="boolean")return null;const e=Pt(n.x),t=Pt(n.y),i=Pt(n.z),r=Pt(n.time),s=Pt(n.vy),a=Pt(n.value),o=Pt(n.radius),l=Pt(n.seq);return e===null||t===null||i===null||r===null||s===null||a===null||o===null||l===null?null:{x:e,y:t,z:i,time:r,vy:s,value:a,radius:o,alive:n.alive,skin:n.skin,seq:l}}function Qg(n,e,t){let i=e;(n.has("ArrowLeft")||n.has("KeyA"))&&(i-=1),(n.has("ArrowRight")||n.has("KeyD"))&&(i+=1),i>1&&(i=1),i<-1&&(i=-1);const r=t||n.has("Space")||n.has("ArrowUp")||n.has("KeyW"),s=n.has("ArrowDown")||n.has("KeyS");return{strafe:i,jump:r,fastFall:s}}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const lc="186",jg=0,Uu=1,e0=2,aa=1,t0=2,Yr=3,Hi=0,$t=1,qn=2,Jn=0,ns=1,Nu=2,Fu=3,Ou=4,n0=5,fr=100,i0=101,r0=102,s0=103,a0=104,o0=200,l0=201,c0=202,u0=203,Zd=204,Jd=205,f0=206,d0=207,h0=208,p0=209,m0=210,g0=211,_0=212,v0=213,x0=214,tl=0,nl=1,il=2,os=3,rl=4,sl=5,al=6,ol=7,Qd=0,S0=1,M0=2,Ln=0,jd=1,eh=2,th=3,nh=4,ih=5,rh=6,sh=7,ah=300,Gi=301,yr=302,oo=303,lo=304,Ba=306,ll=1e3,Kn=1001,cl=1002,Lt=1003,y0=1004,Cs=1005,Ot=1006,co=1007,Ui=1008,en=1009,oh=1010,lh=1011,ls=1012,cc=1013,In=1014,Cn=1015,Un=1016,uc=1017,fc=1018,cs=1020,ch=35902,uh=35899,fh=1021,dh=1022,vn=1023,ei=1026,Ni=1027,hh=1028,dc=1029,Vi=1030,hc=1031,pc=1033,oa=33776,la=33777,ca=33778,ua=33779,ul=35840,fl=35841,dl=35842,hl=35843,pl=36196,ml=37492,gl=37496,_l=37488,vl=37489,Ma=37490,xl=37491,Sl=37808,Ml=37809,yl=37810,El=37811,bl=37812,Tl=37813,wl=37814,Al=37815,Rl=37816,Cl=37817,Pl=37818,Ll=37819,Dl=37820,Il=37821,Ul=36492,Nl=36494,Fl=36495,Ol=36283,Bl=36284,ya=36285,kl=36286,E0=3200,zl=0,b0=1,Si="",Yt="srgb",Ea="srgb-linear",ba="linear",ut="srgb",uo=7680,T0=519,w0=512,A0=513,R0=514,mc=515,C0=516,P0=517,gc=518,L0=519,D0=35044,Bu="300 es",Pn=2e3,us=2001;function I0(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ta(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function U0(){const n=Ta("canvas");return n.style.display="block",n}const ku={};function zu(...n){const e="THREE."+n.shift();console.log(e,...n)}function ph(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ge(...n){n=ph(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function ot(...n){n=ph(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function pr(...n){const e=n.join(" ");e in ku||(ku[e]=!0,Ge(...n))}function N0(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const F0={[tl]:nl,[il]:al,[rl]:ol,[os]:sl,[nl]:tl,[al]:il,[ol]:rl,[sl]:os};class Yi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const It=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],fo=Math.PI/180,Hl=180/Math.PI;function ms(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(It[n&255]+It[n>>8&255]+It[n>>16&255]+It[n>>24&255]+"-"+It[e&255]+It[e>>8&255]+"-"+It[e>>16&15|64]+It[e>>24&255]+"-"+It[t&63|128]+It[t>>8&255]+"-"+It[t>>16&255]+It[t>>24&255]+It[i&255]+It[i>>8&255]+It[i>>16&255]+It[i>>24&255]).toLowerCase()}function nt(n,e,t){return Math.max(e,Math.min(t,n))}function O0(n,e){return(n%e+e)%e}function ho(n,e,t){return(1-t)*n+t*e}function Or(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Xt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Fc=class Fc{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Fc.prototype.isVector2=!0;let it=Fc;class Rr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],h=i[r+2],p=i[r+3],f=s[a+0],m=s[a+1],_=s[a+2],S=s[a+3];if(p!==S||l!==f||c!==m||h!==_){let d=l*f+c*m+h*_+p*S;d<0&&(f=-f,m=-m,_=-_,S=-S,d=-d);let u=1-o;if(d<.9995){const v=Math.acos(d),w=Math.sin(v);u=Math.sin(u*v)/w,o=Math.sin(o*v)/w,l=l*u+f*o,c=c*u+m*o,h=h*u+_*o,p=p*u+S*o}else{l=l*u+f*o,c=c*u+m*o,h=h*u+_*o,p=p*u+S*o;const v=1/Math.sqrt(l*l+c*c+h*h+p*p);l*=v,c*=v,h*=v,p*=v}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=p}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],h=i[r+3],p=s[a],f=s[a+1],m=s[a+2],_=s[a+3];return e[t]=o*_+h*p+l*m-c*f,e[t+1]=l*_+h*f+c*p-o*m,e[t+2]=c*_+h*m+o*f-l*p,e[t+3]=h*_-o*p-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(r/2),p=o(s/2),f=l(i/2),m=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=f*h*p+c*m*_,this._y=c*m*p-f*h*_,this._z=c*h*_+f*m*p,this._w=c*h*p-f*m*_;break;case"YXZ":this._x=f*h*p+c*m*_,this._y=c*m*p-f*h*_,this._z=c*h*_-f*m*p,this._w=c*h*p+f*m*_;break;case"ZXY":this._x=f*h*p-c*m*_,this._y=c*m*p+f*h*_,this._z=c*h*_+f*m*p,this._w=c*h*p-f*m*_;break;case"ZYX":this._x=f*h*p-c*m*_,this._y=c*m*p+f*h*_,this._z=c*h*_-f*m*p,this._w=c*h*p+f*m*_;break;case"YZX":this._x=f*h*p+c*m*_,this._y=c*m*p+f*h*_,this._z=c*h*_-f*m*p,this._w=c*h*p-f*m*_;break;case"XZY":this._x=f*h*p-c*m*_,this._y=c*m*p-f*h*_,this._z=c*h*_+f*m*p,this._w=c*h*p+f*m*_;break;default:Ge("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],p=t[10],f=i+o+p;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(i>o&&i>p){const m=2*Math.sqrt(1+i-o-p);this._w=(h-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>p){const m=2*Math.sqrt(1+o-i-p);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+p-i-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+r*c-s*l,this._y=r*h+a*l+s*o-i*c,this._z=s*h+a*c+i*l-r*o,this._w=a*h-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Oc=class Oc{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Hu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Hu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),h=2*(o*t-s*r),p=2*(s*i-a*t);return this.x=t+l*c+a*p-o*h,this.y=i+l*h+o*c-s*p,this.z=r+l*p+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this.z=nt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this.z=nt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return po.copy(this).projectOnVector(e),this.sub(po)}reflect(e){return this.sub(po.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Oc.prototype.isVector3=!0;let $=Oc;const po=new $,Hu=new Rr,Bc=class Bc{constructor(e,t,i,r,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],p=i[7],f=i[2],m=i[5],_=i[8],S=r[0],d=r[3],u=r[6],v=r[1],w=r[4],M=r[7],b=r[2],T=r[5],P=r[8];return s[0]=a*S+o*v+l*b,s[3]=a*d+o*w+l*T,s[6]=a*u+o*M+l*P,s[1]=c*S+h*v+p*b,s[4]=c*d+h*w+p*T,s[7]=c*u+h*M+p*P,s[2]=f*S+m*v+_*b,s[5]=f*d+m*w+_*T,s[8]=f*u+m*M+_*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*s*h+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],p=h*a-o*c,f=o*l-h*s,m=c*s-a*l,_=t*p+i*f+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/_;return e[0]=p*S,e[1]=(r*c-h*i)*S,e[2]=(o*i-r*a)*S,e[3]=f*S,e[4]=(h*t-r*l)*S,e[5]=(r*s-o*t)*S,e[6]=m*S,e[7]=(i*l-c*t)*S,e[8]=(a*t-i*s)*S,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return pr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(mo.makeScale(e,t)),this}rotate(e){return pr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(mo.makeRotation(-e)),this}translate(e,t){return pr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(mo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Bc.prototype.isMatrix3=!0;let Ve=Bc;const mo=new Ve,Gu=new Ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Vu=new Ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function B0(){const n={enabled:!0,workingColorSpace:Ea,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===ut&&(r.r=Qn(r.r),r.g=Qn(r.g),r.b=Qn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ut&&(r.r=mr(r.r),r.g=mr(r.g),r.b=mr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Si?ba:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return pr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return pr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ea]:{primaries:e,whitePoint:i,transfer:ba,toXYZ:Gu,fromXYZ:Vu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Yt},outputColorSpaceConfig:{drawingBufferColorSpace:Yt}},[Yt]:{primaries:e,whitePoint:i,transfer:ut,toXYZ:Gu,fromXYZ:Vu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Yt}}}),n}const tt=B0();function Qn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function mr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ji;class k0{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ji===void 0&&(Ji=Ta("canvas")),Ji.width=e.width,Ji.height=e.height;const r=Ji.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Ji}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ta("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Qn(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Qn(t[i]/255)*255):t[i]=Qn(t[i]);return{data:t,width:e.width,height:e.height}}else return Ge("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let z0=0;class _c{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:z0++}),this.uuid=ms(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(go(r[a].image)):s.push(go(r[a]))}else s=go(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function go(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?k0.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ge("Texture: Unable to serialize Texture."),{})}let H0=0;const _o=new $;class Bt extends Yi{constructor(e=Bt.DEFAULT_IMAGE,t=Bt.DEFAULT_MAPPING,i=Kn,r=Kn,s=Ot,a=Ui,o=vn,l=en,c=Bt.DEFAULT_ANISOTROPY,h=Si){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:H0++}),this.uuid=ms(),this.name="",this.source=new _c(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new it(0,0),this.repeat=new it(1,1),this.center=new it(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(_o).x}get height(){return this.source.getSize(_o).y}get depth(){return this.source.getSize(_o).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Ge(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ge(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ah)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ll:e.x=e.x-Math.floor(e.x);break;case Kn:e.x=e.x<0?0:1;break;case cl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ll:e.y=e.y-Math.floor(e.y);break;case Kn:e.y=e.y<0?0:1;break;case cl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Bt.DEFAULT_IMAGE=null;Bt.DEFAULT_MAPPING=ah;Bt.DEFAULT_ANISOTROPY=1;const kc=class kc{constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],h=l[4],p=l[8],f=l[1],m=l[5],_=l[9],S=l[2],d=l[6],u=l[10];if(Math.abs(h-f)<.01&&Math.abs(p-S)<.01&&Math.abs(_-d)<.01){if(Math.abs(h+f)<.1&&Math.abs(p+S)<.1&&Math.abs(_+d)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(c+1)/2,M=(m+1)/2,b=(u+1)/2,T=(h+f)/4,P=(p+S)/4,x=(_+d)/4;return w>M&&w>b?w<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(w),r=T/i,s=P/i):M>b?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=T/r,s=x/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=P/s,r=x/s),this.set(i,r,s,t),this}let v=Math.sqrt((d-_)*(d-_)+(p-S)*(p-S)+(f-h)*(f-h));return Math.abs(v)<.001&&(v=1),this.x=(d-_)/v,this.y=(p-S)/v,this.z=(f-h)/v,this.w=Math.acos((c+m+u-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this.z=nt(this.z,e.z,t.z),this.w=nt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this.z=nt(this.z,e,t),this.w=nt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};kc.prototype.isVector4=!0;let vt=kc;class G0 extends Yi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ot,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new vt(0,0,e,t),this.scissorTest=!1,this.viewport=new vt(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:i.depth},s=new Bt(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Ot,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new _c(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Sn extends G0{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class mh extends Bt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class V0 extends Bt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Da=class Da{constructor(e,t,i,r,s,a,o,l,c,h,p,f,m,_,S,d){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,h,p,f,m,_,S,d)}set(e,t,i,r,s,a,o,l,c,h,p,f,m,_,S,d){const u=this.elements;return u[0]=e,u[4]=t,u[8]=i,u[12]=r,u[1]=s,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=h,u[10]=p,u[14]=f,u[3]=m,u[7]=_,u[11]=S,u[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Da().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,r=1/Qi.setFromMatrixColumn(e,0).length(),s=1/Qi.setFromMatrixColumn(e,1).length(),a=1/Qi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const f=a*h,m=a*p,_=o*h,S=o*p;t[0]=l*h,t[4]=-l*p,t[8]=c,t[1]=m+_*c,t[5]=f-S*c,t[9]=-o*l,t[2]=S-f*c,t[6]=_+m*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*h,m=l*p,_=c*h,S=c*p;t[0]=f+S*o,t[4]=_*o-m,t[8]=a*c,t[1]=a*p,t[5]=a*h,t[9]=-o,t[2]=m*o-_,t[6]=S+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*h,m=l*p,_=c*h,S=c*p;t[0]=f-S*o,t[4]=-a*p,t[8]=_+m*o,t[1]=m+_*o,t[5]=a*h,t[9]=S-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*h,m=a*p,_=o*h,S=o*p;t[0]=l*h,t[4]=_*c-m,t[8]=f*c+S,t[1]=l*p,t[5]=S*c+f,t[9]=m*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,m=a*c,_=o*l,S=o*c;t[0]=l*h,t[4]=S-f*p,t[8]=_*p+m,t[1]=p,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=m*p+_,t[10]=f-S*p}else if(e.order==="XZY"){const f=a*l,m=a*c,_=o*l,S=o*c;t[0]=l*h,t[4]=-p,t[8]=c*h,t[1]=f*p+S,t[5]=a*h,t[9]=m*p-_,t[2]=_*p-m,t[6]=o*h,t[10]=S*p+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(W0,e,X0)}lookAt(e,t,i){const r=this.elements;return Jt.subVectors(e,t),Jt.lengthSq()===0&&(Jt.z=1),Jt.normalize(),ci.crossVectors(i,Jt),ci.lengthSq()===0&&(Math.abs(i.z)===1?Jt.x+=1e-4:Jt.z+=1e-4,Jt.normalize(),ci.crossVectors(i,Jt)),ci.normalize(),Ps.crossVectors(Jt,ci),r[0]=ci.x,r[4]=Ps.x,r[8]=Jt.x,r[1]=ci.y,r[5]=Ps.y,r[9]=Jt.y,r[2]=ci.z,r[6]=Ps.z,r[10]=Jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],p=i[5],f=i[9],m=i[13],_=i[2],S=i[6],d=i[10],u=i[14],v=i[3],w=i[7],M=i[11],b=i[15],T=r[0],P=r[4],x=r[8],C=r[12],N=r[1],O=r[5],V=r[9],E=r[13],A=r[2],D=r[6],U=r[10],F=r[14],W=r[3],L=r[7],I=r[11],X=r[15];return s[0]=a*T+o*N+l*A+c*W,s[4]=a*P+o*O+l*D+c*L,s[8]=a*x+o*V+l*U+c*I,s[12]=a*C+o*E+l*F+c*X,s[1]=h*T+p*N+f*A+m*W,s[5]=h*P+p*O+f*D+m*L,s[9]=h*x+p*V+f*U+m*I,s[13]=h*C+p*E+f*F+m*X,s[2]=_*T+S*N+d*A+u*W,s[6]=_*P+S*O+d*D+u*L,s[10]=_*x+S*V+d*U+u*I,s[14]=_*C+S*E+d*F+u*X,s[3]=v*T+w*N+M*A+b*W,s[7]=v*P+w*O+M*D+b*L,s[11]=v*x+w*V+M*U+b*I,s[15]=v*C+w*E+M*F+b*X,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],p=e[6],f=e[10],m=e[14],_=e[3],S=e[7],d=e[11],u=e[15],v=l*m-c*f,w=o*m-c*p,M=o*f-l*p,b=a*m-c*h,T=a*f-l*h,P=a*p-o*h;return t*(S*v-d*w+u*M)-i*(_*v-d*b+u*T)+r*(_*w-S*b+u*P)-s*(_*M-S*T+d*P)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-i*(s*h-o*l)+r*(s*c-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],p=e[9],f=e[10],m=e[11],_=e[12],S=e[13],d=e[14],u=e[15],v=t*o-i*a,w=t*l-r*a,M=t*c-s*a,b=i*l-r*o,T=i*c-s*o,P=r*c-s*l,x=h*S-p*_,C=h*d-f*_,N=h*u-m*_,O=p*d-f*S,V=p*u-m*S,E=f*u-m*d,A=v*E-w*V+M*O+b*N-T*C+P*x;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/A;return e[0]=(o*E-l*V+c*O)*D,e[1]=(r*V-i*E-s*O)*D,e[2]=(S*P-d*T+u*b)*D,e[3]=(f*T-p*P-m*b)*D,e[4]=(l*N-a*E-c*C)*D,e[5]=(t*E-r*N+s*C)*D,e[6]=(d*M-_*P-u*w)*D,e[7]=(h*P-f*M+m*w)*D,e[8]=(a*V-o*N+c*x)*D,e[9]=(i*N-t*V-s*x)*D,e[10]=(_*T-S*M+u*v)*D,e[11]=(p*M-h*T-m*v)*D,e[12]=(o*C-a*O-l*x)*D,e[13]=(t*O-i*C+r*x)*D,e[14]=(S*w-_*b-d*v)*D,e[15]=(h*b-p*w+f*v)*D,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+i,h*l-r*a,0,c*l-r*o,h*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,p=o+o,f=s*c,m=s*h,_=s*p,S=a*h,d=a*p,u=o*p,v=l*c,w=l*h,M=l*p,b=i.x,T=i.y,P=i.z;return r[0]=(1-(S+u))*b,r[1]=(m+M)*b,r[2]=(_-w)*b,r[3]=0,r[4]=(m-M)*T,r[5]=(1-(f+u))*T,r[6]=(d+v)*T,r[7]=0,r[8]=(_+w)*P,r[9]=(d-v)*P,r[10]=(1-(f+S))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),t.identity(),this;let a=Qi.set(r[0],r[1],r[2]).length();const o=Qi.set(r[4],r[5],r[6]).length(),l=Qi.set(r[8],r[9],r[10]).length();s<0&&(a=-a),hn.copy(this);const c=1/a,h=1/o,p=1/l;return hn.elements[0]*=c,hn.elements[1]*=c,hn.elements[2]*=c,hn.elements[4]*=h,hn.elements[5]*=h,hn.elements[6]*=h,hn.elements[8]*=p,hn.elements[9]*=p,hn.elements[10]*=p,t.setFromRotationMatrix(hn),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,r,s,a,o=Pn,l=!1){const c=this.elements,h=2*s/(t-e),p=2*s/(i-r),f=(t+e)/(t-e),m=(i+r)/(i-r);let _,S;if(l)_=s/(a-s),S=a*s/(a-s);else if(o===Pn)_=-(a+s)/(a-s),S=-2*a*s/(a-s);else if(o===us)_=-a/(a-s),S=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=p,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=Pn,l=!1){const c=this.elements,h=2/(t-e),p=2/(i-r),f=-(t+e)/(t-e),m=-(i+r)/(i-r);let _,S;if(l)_=1/(a-s),S=a/(a-s);else if(o===Pn)_=-2/(a-s),S=-(a+s)/(a-s);else if(o===us)_=-1/(a-s),S=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=p,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=_,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Da.prototype.isMatrix4=!0;let xt=Da;const Qi=new $,hn=new xt,W0=new $(0,0,0),X0=new $(1,1,1),ci=new $,Ps=new $,Jt=new $,Wu=new xt,Xu=new Rr;class Ti{constructor(e=0,t=0,i=0,r=Ti.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],h=r[9],p=r[2],f=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(nt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-nt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(nt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-nt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(nt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-nt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:Ge("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Wu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Wu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Xu.setFromEuler(this),this.setFromQuaternion(Xu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ti.DEFAULT_ORDER="XYZ";class gh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let q0=0;const qu=new $,ji=new Rr,kn=new xt,Ls=new $,Br=new $,Y0=new $,K0=new Rr,Yu=new $(1,0,0),Ku=new $(0,1,0),$u=new $(0,0,1),Zu={type:"added"},$0={type:"removed"},er={type:"childadded",child:null},vo={type:"childremoved",child:null};class Ct extends Yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:q0++}),this.uuid=ms(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ct.DEFAULT_UP.clone();const e=new $,t=new Ti,i=new Rr,r=new $(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new xt},normalMatrix:{value:new Ve}}),this.matrix=new xt,this.matrixWorld=new xt,this.matrixAutoUpdate=Ct.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ji.setFromAxisAngle(e,t),this.quaternion.multiply(ji),this}rotateOnWorldAxis(e,t){return ji.setFromAxisAngle(e,t),this.quaternion.premultiply(ji),this}rotateX(e){return this.rotateOnAxis(Yu,e)}rotateY(e){return this.rotateOnAxis(Ku,e)}rotateZ(e){return this.rotateOnAxis($u,e)}translateOnAxis(e,t){return qu.copy(e).applyQuaternion(this.quaternion),this.position.add(qu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Yu,e)}translateY(e){return this.translateOnAxis(Ku,e)}translateZ(e){return this.translateOnAxis($u,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(kn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ls.copy(e):Ls.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Br.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?kn.lookAt(Br,Ls,this.up):kn.lookAt(Ls,Br,this.up),this.quaternion.setFromRotationMatrix(kn),r&&(kn.extractRotation(r.matrixWorld),ji.setFromRotationMatrix(kn),this.quaternion.premultiply(ji.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ot("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Zu),er.child=e,this.dispatchEvent(er),er.child=null):ot("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent($0),vo.child=e,this.dispatchEvent(vo),vo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),kn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),kn.multiply(e.parent.matrixWorld)),e.applyMatrix4(kn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Zu),er.child=e,this.dispatchEvent(er),er.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Br,e,Y0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Br,K0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const p=l[c];s(e.shapes,p)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),p=a(e.shapes),f=a(e.skeletons),m=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),p.length>0&&(i.shapes=p),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Ct.DEFAULT_UP=new $(0,1,0);Ct.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class yi extends Ct{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Z0={type:"move"};class xo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const S of e.hand.values()){const d=t.getJointPose(S,i),u=this._getHandJoint(c,S);d!==null&&(u.matrix.fromArray(d.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=d.radius),u.visible=d!==null}const h=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],f=h.position.distanceTo(p.position),m=.02,_=.005;c.inputState.pinching&&f>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Z0)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new yi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const _h={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ui={h:0,s:0,l:0},Ds={h:0,s:0,l:0};function So(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class et{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=tt.workingColorSpace){return this.r=e,this.g=t,this.b=i,tt.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=tt.workingColorSpace){if(e=O0(e,1),t=nt(t,0,1),i=nt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=So(a,s,e+1/3),this.g=So(a,s,e),this.b=So(a,s,e-1/3)}return tt.colorSpaceToWorking(this,r),this}setStyle(e,t=Yt){function i(s){s!==void 0&&parseFloat(s)<1&&Ge("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ge("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Ge("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Yt){const i=_h[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ge("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Qn(e.r),this.g=Qn(e.g),this.b=Qn(e.b),this}copyLinearToSRGB(e){return this.r=mr(e.r),this.g=mr(e.g),this.b=mr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Yt){return tt.workingToColorSpace(Ut.copy(this),e),Math.round(nt(Ut.r*255,0,255))*65536+Math.round(nt(Ut.g*255,0,255))*256+Math.round(nt(Ut.b*255,0,255))}getHexString(e=Yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tt.workingColorSpace){tt.workingToColorSpace(Ut.copy(this),t);const i=Ut.r,r=Ut.g,s=Ut.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const p=a-o;switch(c=h<=.5?p/(a+o):p/(2-a-o),a){case i:l=(r-s)/p+(r<s?6:0);break;case r:l=(s-i)/p+2;break;case s:l=(i-r)/p+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=tt.workingColorSpace){return tt.workingToColorSpace(Ut.copy(this),t),e.r=Ut.r,e.g=Ut.g,e.b=Ut.b,e}getStyle(e=Yt){tt.workingToColorSpace(Ut.copy(this),e);const t=Ut.r,i=Ut.g,r=Ut.b;return e!==Yt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(ui),this.setHSL(ui.h+e,ui.s+t,ui.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ui),e.getHSL(Ds);const i=ho(ui.h,Ds.h,t),r=ho(ui.s,Ds.s,t),s=ho(ui.l,Ds.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ut=new et;et.NAMES=_h;class vc{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new et(e),this.near=t,this.far=i}clone(){return new vc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class J0 extends Ct{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ti,this.environmentIntensity=1,this.environmentRotation=new Ti,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const pn=new $,zn=new $,Mo=new $,Hn=new $,tr=new $,nr=new $,Ju=new $,yo=new $,Eo=new $,bo=new $,To=new vt,wo=new vt,Ao=new vt;class _n{constructor(e=new $,t=new $,i=new $){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),pn.subVectors(e,t),r.cross(pn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){pn.subVectors(r,t),zn.subVectors(i,t),Mo.subVectors(e,t);const a=pn.dot(pn),o=pn.dot(zn),l=pn.dot(Mo),c=zn.dot(zn),h=zn.dot(Mo),p=a*c-o*o;if(p===0)return s.set(0,0,0),null;const f=1/p,m=(c*l-o*h)*f,_=(a*h-o*l)*f;return s.set(1-m-_,_,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Hn)===null?!1:Hn.x>=0&&Hn.y>=0&&Hn.x+Hn.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,Hn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Hn.x),l.addScaledVector(a,Hn.y),l.addScaledVector(o,Hn.z),l)}static getInterpolatedAttribute(e,t,i,r,s,a){return To.setScalar(0),wo.setScalar(0),Ao.setScalar(0),To.fromBufferAttribute(e,t),wo.fromBufferAttribute(e,i),Ao.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(To,s.x),a.addScaledVector(wo,s.y),a.addScaledVector(Ao,s.z),a}static isFrontFacing(e,t,i,r){return pn.subVectors(i,t),zn.subVectors(e,t),pn.cross(zn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return pn.subVectors(this.c,this.b),zn.subVectors(this.a,this.b),pn.cross(zn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return _n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return _n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return _n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return _n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return _n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;tr.subVectors(r,i),nr.subVectors(s,i),yo.subVectors(e,i);const l=tr.dot(yo),c=nr.dot(yo);if(l<=0&&c<=0)return t.copy(i);Eo.subVectors(e,r);const h=tr.dot(Eo),p=nr.dot(Eo);if(h>=0&&p<=h)return t.copy(r);const f=l*p-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(tr,a);bo.subVectors(e,s);const m=tr.dot(bo),_=nr.dot(bo);if(_>=0&&m<=_)return t.copy(s);const S=m*c-l*_;if(S<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(i).addScaledVector(nr,o);const d=h*_-m*p;if(d<=0&&p-h>=0&&m-_>=0)return Ju.subVectors(s,r),o=(p-h)/(p-h+(m-_)),t.copy(r).addScaledVector(Ju,o);const u=1/(d+S+f);return a=S*u,o=f*u,t.copy(i).addScaledVector(tr,a).addScaledVector(nr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class gs{constructor(e=new $(1/0,1/0,1/0),t=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(mn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(mn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=mn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,mn):mn.fromBufferAttribute(s,a),mn.applyMatrix4(e.matrixWorld),this.expandByPoint(mn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Is.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Is.copy(i.boundingBox)),Is.applyMatrix4(e.matrixWorld),this.union(Is)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,mn),mn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(kr),Us.subVectors(this.max,kr),ir.subVectors(e.a,kr),rr.subVectors(e.b,kr),sr.subVectors(e.c,kr),fi.subVectors(rr,ir),di.subVectors(sr,rr),Ri.subVectors(ir,sr);let t=[0,-fi.z,fi.y,0,-di.z,di.y,0,-Ri.z,Ri.y,fi.z,0,-fi.x,di.z,0,-di.x,Ri.z,0,-Ri.x,-fi.y,fi.x,0,-di.y,di.x,0,-Ri.y,Ri.x,0];return!Ro(t,ir,rr,sr,Us)||(t=[1,0,0,0,1,0,0,0,1],!Ro(t,ir,rr,sr,Us))?!1:(Ns.crossVectors(fi,di),t=[Ns.x,Ns.y,Ns.z],Ro(t,ir,rr,sr,Us))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,mn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(mn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Gn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Gn=[new $,new $,new $,new $,new $,new $,new $,new $],mn=new $,Is=new gs,ir=new $,rr=new $,sr=new $,fi=new $,di=new $,Ri=new $,kr=new $,Us=new $,Ns=new $,Ci=new $;function Ro(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Ci.fromArray(n,s);const o=r.x*Math.abs(Ci.x)+r.y*Math.abs(Ci.y)+r.z*Math.abs(Ci.z),l=e.dot(Ci),c=t.dot(Ci),h=i.dot(Ci);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const yt=new $,Fs=new it;let Q0=0;class Dn extends Yi{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Q0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=D0,this.updateRanges=[],this.gpuType=Cn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Fs.fromBufferAttribute(this,t),Fs.applyMatrix3(e),this.setXY(t,Fs.x,Fs.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix3(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix4(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)yt.fromBufferAttribute(this,t),yt.applyNormalMatrix(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)yt.fromBufferAttribute(this,t),yt.transformDirection(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Or(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Xt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Or(t,this.array)),t}setX(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Or(t,this.array)),t}setY(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Or(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Or(t,this.array)),t}setW(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),i=Xt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),i=Xt(i,this.array),r=Xt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),i=Xt(i,this.array),r=Xt(r,this.array),s=Xt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class vh extends Dn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class xh extends Dn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Gt extends Dn{constructor(e,t,i){super(new Float32Array(e),t,i)}}const j0=new gs,zr=new $,Co=new $;class ka{constructor(e=new $,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):j0.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;zr.subVectors(e,this.center);const t=zr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(zr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Co.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(zr.copy(e.center).add(Co)),this.expandByPoint(zr.copy(e.center).sub(Co))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let e_=0;const on=new xt,Po=new Ct,ar=new $,Qt=new gs,Hr=new gs,At=new $;class sn extends Yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:e_++}),this.uuid=ms(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(I0(e)?xh:vh)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ve().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return on.makeRotationFromQuaternion(e),this.applyMatrix4(on),this}rotateX(e){return on.makeRotationX(e),this.applyMatrix4(on),this}rotateY(e){return on.makeRotationY(e),this.applyMatrix4(on),this}rotateZ(e){return on.makeRotationZ(e),this.applyMatrix4(on),this}translate(e,t,i){return on.makeTranslation(e,t,i),this.applyMatrix4(on),this}scale(e,t,i){return on.makeScale(e,t,i),this.applyMatrix4(on),this}lookAt(e){return Po.lookAt(e),Po.updateMatrix(),this.applyMatrix4(Po.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ar).negate(),this.translate(ar.x,ar.y,ar.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Gt(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Ge("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ot("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Qt.setFromBufferAttribute(s),this.morphTargetsRelative?(At.addVectors(this.boundingBox.min,Qt.min),this.boundingBox.expandByPoint(At),At.addVectors(this.boundingBox.max,Qt.max),this.boundingBox.expandByPoint(At)):(this.boundingBox.expandByPoint(Qt.min),this.boundingBox.expandByPoint(Qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ot('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ka);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ot("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(e){const i=this.boundingSphere.center;if(Qt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Hr.setFromBufferAttribute(o),this.morphTargetsRelative?(At.addVectors(Qt.min,Hr.min),Qt.expandByPoint(At),At.addVectors(Qt.max,Hr.max),Qt.expandByPoint(At)):(Qt.expandByPoint(Hr.min),Qt.expandByPoint(Hr.max))}Qt.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)At.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(At));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)At.fromBufferAttribute(o,c),l&&(ar.fromBufferAttribute(e,c),At.add(ar)),r=Math.max(r,i.distanceToSquared(At))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&ot('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ot("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Dn(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let x=0;x<i.count;x++)o[x]=new $,l[x]=new $;const c=new $,h=new $,p=new $,f=new it,m=new it,_=new it,S=new $,d=new $;function u(x,C,N){c.fromBufferAttribute(i,x),h.fromBufferAttribute(i,C),p.fromBufferAttribute(i,N),f.fromBufferAttribute(s,x),m.fromBufferAttribute(s,C),_.fromBufferAttribute(s,N),h.sub(c),p.sub(c),m.sub(f),_.sub(f);const O=1/(m.x*_.y-_.x*m.y);isFinite(O)&&(S.copy(h).multiplyScalar(_.y).addScaledVector(p,-m.y).multiplyScalar(O),d.copy(p).multiplyScalar(m.x).addScaledVector(h,-_.x).multiplyScalar(O),o[x].add(S),o[C].add(S),o[N].add(S),l[x].add(d),l[C].add(d),l[N].add(d))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let x=0,C=v.length;x<C;++x){const N=v[x],O=N.start,V=N.count;for(let E=O,A=O+V;E<A;E+=3)u(e.getX(E+0),e.getX(E+1),e.getX(E+2))}const w=new $,M=new $,b=new $,T=new $;function P(x){b.fromBufferAttribute(r,x),T.copy(b);const C=o[x];w.copy(C),w.sub(b.multiplyScalar(b.dot(C))).normalize(),M.crossVectors(T,C);const O=M.dot(l[x])<0?-1:1;a.setXYZW(x,w.x,w.y,w.z,O)}for(let x=0,C=v.length;x<C;++x){const N=v[x],O=N.start,V=N.count;for(let E=O,A=O+V;E<A;E+=3)P(e.getX(E+0)),P(e.getX(E+1)),P(e.getX(E+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Dn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const r=new $,s=new $,a=new $,o=new $,l=new $,c=new $,h=new $,p=new $;if(e)for(let f=0,m=e.count;f<m;f+=3){const _=e.getX(f+0),S=e.getX(f+1),d=e.getX(f+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,S),a.fromBufferAttribute(t,d),h.subVectors(a,s),p.subVectors(r,s),h.cross(p),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,S),c.fromBufferAttribute(i,d),o.add(h),l.add(h),c.add(h),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(d,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,s),p.subVectors(r,s),h.cross(p),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)At.fromBufferAttribute(e,t),At.normalize(),e.setXYZ(t,At.x,At.y,At.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,p=o.normalized,f=new c.constructor(l.length*h);let m=0,_=0;for(let S=0,d=l.length;S<d;S++){o.isInterleavedBufferAttribute?m=l[S]*o.data.stride+o.offset:m=l[S]*h;for(let u=0;u<h;u++)f[_++]=c[m++]}return new Dn(f,h,p)}if(this.index===null)return Ge("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new sn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,p=c.length;h<p;h++){const f=c[h],m=e(f,i);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let p=0,f=c.length;p<f;p++){const m=c[p];h.push(m.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],p=s[c];for(let f=0,m=p.length;f<m;f++)h.push(p[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const p=a[c];this.addGroup(p.start,p.count,p.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Lo=new $,t_=new $,n_=new Ve;class vi{constructor(e=new $(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Lo.subVectors(i,t).cross(t_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const r=e.delta(Lo),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||n_.getNormalMatrix(e),r=this.coplanarPoint(Lo).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let i_=0;class Cr extends Yi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:i_++}),this.uuid=ms(),this.name="",this.type="Material",this.blending=ns,this.side=Hi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zd,this.blendDst=Jd,this.blendEquation=fr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new et(0,0,0),this.blendAlpha=0,this.depthFunc=os,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=T0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=uo,this.stencilZFail=uo,this.stencilZPass=uo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Ge(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ge(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new et().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new vi().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new it().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new it().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Vn=new $,Do=new $,Os=new $,Bs=new $;class Sh{constructor(e=new $,t=new $(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Vn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Vn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Vn.copy(this.origin).addScaledVector(this.direction,t),Vn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Do.copy(e).add(t).multiplyScalar(.5),Os.copy(t).sub(e).normalize(),Bs.copy(this.origin).sub(Do);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Os),o=Bs.dot(this.direction),l=-Bs.dot(Os),c=Bs.lengthSq(),h=Math.abs(1-a*a);let p,f,m,_;if(h>0)if(p=a*l-o,f=a*o-l,_=s*h,p>=0)if(f>=-_)if(f<=_){const S=1/h;p*=S,f*=S,m=p*(p+a*f+2*o)+f*(a*p+f+2*l)+c}else f=s,p=Math.max(0,-(a*f+o)),m=-p*p+f*(f+2*l)+c;else f=-s,p=Math.max(0,-(a*f+o)),m=-p*p+f*(f+2*l)+c;else f<=-_?(p=Math.max(0,-(-a*s+o)),f=p>0?-s:Math.min(Math.max(-s,-l),s),m=-p*p+f*(f+2*l)+c):f<=_?(p=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+c):(p=Math.max(0,-(a*s+o)),f=p>0?s:Math.min(Math.max(-s,-l),s),m=-p*p+f*(f+2*l)+c);else f=a>0?-s:s,p=Math.max(0,-(a*f+o)),m=-p*p+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(Do).addScaledVector(Os,f),m}intersectSphere(e,t){if(e.radius<0)return null;Vn.subVectors(e.center,this.origin);const i=Vn.dot(this.direction),r=Vn.dot(Vn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),h>=0?(s=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),p>=0?(o=(e.min.z-f.z)*p,l=(e.max.z-f.z)*p):(o=(e.max.z-f.z)*p,l=(e.min.z-f.z)*p),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Vn)!==null}intersectTriangle(e,t,i,r,s){const a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,p=e.x-a.x,f=e.y-a.y,m=e.z-a.z,_=t.x-a.x,S=t.y-a.y,d=t.z-a.z,u=i.x-a.x,v=i.y-a.y,w=i.z-a.z,M=Math.abs(l),b=Math.abs(c),T=Math.abs(h);let P,x,C,N,O,V,E,A,D,U,F,W;if(M>=b&&M>=T?(C=l,V=p,D=_,W=u,l>=0?(P=c,x=h,N=f,O=m,E=S,A=d,U=v,F=w):(P=h,x=c,N=m,O=f,E=d,A=S,U=w,F=v)):b>=T?(C=c,V=f,D=S,W=v,c>=0?(P=h,x=l,N=m,O=p,E=d,A=_,U=w,F=u):(P=l,x=h,N=p,O=m,E=_,A=d,U=u,F=w)):(C=h,V=m,D=d,W=w,h>=0?(P=l,x=c,N=p,O=f,E=_,A=S,U=u,F=v):(P=c,x=l,N=f,O=p,E=S,A=_,U=v,F=u)),C===0)return null;const L=P/C,I=x/C,X=1/C,se=N-L*V,oe=O-I*V,Me=E-L*D,Ne=A-I*D,Oe=U-L*W,Q=F-I*W,ee=Oe*Ne-Q*Me,ve=se*Q-oe*Oe,De=Me*oe-Ne*se;if(r){if(ee<0||ve<0||De<0)return null}else if((ee<0||ve<0||De<0)&&(ee>0||ve>0||De>0))return null;const H=ee+ve+De;if(H===0)return null;const ie=X*(ee*V+ve*D+De*W);return(H>0?ie<0:ie>0)?null:this.at(ie/H,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Mh extends Cr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ti,this.combine=Qd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Qu=new xt,Pi=new Sh,ks=new ka,ju=new $,zs=new $,Hs=new $,Gs=new $,Io=new $,Vs=new $,ef=new $,Ws=new $;class Et extends Ct{constructor(e=new sn,t=new Mh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Vs.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],p=s[l];h!==0&&(Io.fromBufferAttribute(p,e),a?Vs.addScaledVector(Io,h):Vs.addScaledVector(Io.sub(t),h))}t.add(Vs)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ks.copy(i.boundingSphere),ks.applyMatrix4(s),Pi.copy(e.ray).recast(e.near),!(ks.containsPoint(Pi.origin)===!1&&(Pi.intersectSphere(ks,ju)===null||Pi.origin.distanceToSquared(ju)>(e.far-e.near)**2))&&(Qu.copy(s).invert(),Pi.copy(e.ray).applyMatrix4(Qu),!(i.boundingBox!==null&&Pi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Pi)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,p=s.attributes.normal,f=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,S=f.length;_<S;_++){const d=f[_],u=a[d.materialIndex],v=Math.max(d.start,m.start),w=Math.min(o.count,Math.min(d.start+d.count,m.start+m.count));for(let M=v,b=w;M<b;M+=3){const T=o.getX(M),P=o.getX(M+1),x=o.getX(M+2);r=Xs(this,u,e,i,c,h,p,T,P,x),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=d.materialIndex,t.push(r))}}else{const _=Math.max(0,m.start),S=Math.min(o.count,m.start+m.count);for(let d=_,u=S;d<u;d+=3){const v=o.getX(d),w=o.getX(d+1),M=o.getX(d+2);r=Xs(this,a,e,i,c,h,p,v,w,M),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,S=f.length;_<S;_++){const d=f[_],u=a[d.materialIndex],v=Math.max(d.start,m.start),w=Math.min(l.count,Math.min(d.start+d.count,m.start+m.count));for(let M=v,b=w;M<b;M+=3){const T=M,P=M+1,x=M+2;r=Xs(this,u,e,i,c,h,p,T,P,x),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=d.materialIndex,t.push(r))}}else{const _=Math.max(0,m.start),S=Math.min(l.count,m.start+m.count);for(let d=_,u=S;d<u;d+=3){const v=d,w=d+1,M=d+2;r=Xs(this,a,e,i,c,h,p,v,w,M),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}}function r_(n,e,t,i,r,s,a,o){let l;if(e.side===$t?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Hi,o),l===null)return null;Ws.copy(o),Ws.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Ws);return c<t.near||c>t.far?null:{distance:c,point:Ws.clone(),object:n}}function Xs(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,zs),n.getVertexPosition(l,Hs),n.getVertexPosition(c,Gs);const h=r_(n,e,t,i,zs,Hs,Gs,ef);if(h){const p=new $;_n.getBarycoord(ef,zs,Hs,Gs,p),r&&(h.uv=_n.getInterpolatedAttribute(r,o,l,c,p,new it)),s&&(h.uv1=_n.getInterpolatedAttribute(s,o,l,c,p,new it)),a&&(h.normal=_n.getInterpolatedAttribute(a,o,l,c,p,new $),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new $,materialIndex:0};_n.getNormal(zs,Hs,Gs,f.normal),h.face=f,h.barycoord=p}return h}class s_ extends Bt{constructor(e=null,t=1,i=1,r,s,a,o,l,c=Lt,h=Lt,p,f){super(null,a,o,l,c,h,r,s,p,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Li=new ka,a_=new it(.5,.5),qs=new $;class xc{constructor(e=new vi,t=new vi,i=new vi,r=new vi,s=new vi,a=new vi){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Pn,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],h=s[4],p=s[5],f=s[6],m=s[7],_=s[8],S=s[9],d=s[10],u=s[11],v=s[12],w=s[13],M=s[14],b=s[15];if(r[0].setComponents(c-a,m-h,u-_,b-v).normalize(),r[1].setComponents(c+a,m+h,u+_,b+v).normalize(),r[2].setComponents(c+o,m+p,u+S,b+w).normalize(),r[3].setComponents(c-o,m-p,u-S,b-w).normalize(),i)r[4].setComponents(l,f,d,M).normalize(),r[5].setComponents(c-l,m-f,u-d,b-M).normalize();else if(r[4].setComponents(c-l,m-f,u-d,b-M).normalize(),t===Pn)r[5].setComponents(c+l,m+f,u+d,b+M).normalize();else if(t===us)r[5].setComponents(l,f,d,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Li.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Li.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Li)}intersectsSprite(e){Li.center.set(0,0,0);const t=a_.distanceTo(e.center);return Li.radius=.7071067811865476+t,Li.applyMatrix4(e.matrixWorld),this.intersectsSphere(Li)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(qs.x=r.normal.x>0?e.max.x:e.min.x,qs.y=r.normal.y>0?e.max.y:e.min.y,qs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(qs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class yh extends Cr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new et(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const tf=new xt,Gl=new Sh,Ys=new ka,Ks=new $;class o_ extends Ct{constructor(e=new sn,t=new yh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ys.copy(i.boundingSphere),Ys.applyMatrix4(r),Ys.radius+=s,e.ray.intersectsSphere(Ys)===!1)return;tf.copy(r).invert(),Gl.copy(e.ray).applyMatrix4(tf);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,p=i.attributes.position;if(c!==null){const f=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let _=f,S=m;_<S;_++){const d=c.getX(_);Ks.fromBufferAttribute(p,d),nf(Ks,d,l,r,e,t,this)}}else{const f=Math.max(0,a.start),m=Math.min(p.count,a.start+a.count);for(let _=f,S=m;_<S;_++)Ks.fromBufferAttribute(p,_),nf(Ks,_,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function nf(n,e,t,i,r,s,a){const o=Gl.distanceSqToPoint(n);if(o<t){const l=new $;Gl.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Eh extends Bt{constructor(e=[],t=Gi,i,r,s,a,o,l,c,h){super(e,t,i,r,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class l_ extends Bt{constructor(e,t,i,r,s,a,o,l,c){super(e,t,i,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class fs extends Bt{constructor(e,t,i=In,r,s,a,o=Lt,l=Lt,c,h=ei,p=1){if(h!==ei&&h!==Ni)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:p};super(f,r,s,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new _c(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class c_ extends fs{constructor(e,t=In,i=Gi,r,s,a=Lt,o=Lt,l,c=ei){const h={width:e,height:e,depth:1},p=[h,h,h,h,h,h];super(e,e,t,i,r,s,a,o,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class bh extends Bt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Pr extends sn{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],p=[];let f=0,m=0;_("z","y","x",-1,-1,i,t,e,a,s,0),_("z","y","x",1,-1,i,t,-e,a,s,1),_("x","z","y",1,1,e,i,t,r,a,2),_("x","z","y",1,-1,e,i,-t,r,a,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Gt(c,3)),this.setAttribute("normal",new Gt(h,3)),this.setAttribute("uv",new Gt(p,2));function _(S,d,u,v,w,M,b,T,P,x,C){const N=M/P,O=b/x,V=M/2,E=b/2,A=T/2,D=P+1,U=x+1;let F=0,W=0;const L=new $;for(let I=0;I<U;I++){const X=I*O-E;for(let se=0;se<D;se++){const oe=se*N-V;L[S]=oe*v,L[d]=X*w,L[u]=A,c.push(L.x,L.y,L.z),L[S]=0,L[d]=0,L[u]=T>0?1:-1,h.push(L.x,L.y,L.z),p.push(se/P),p.push(1-I/x),F+=1}}for(let I=0;I<x;I++)for(let X=0;X<P;X++){const se=f+X+D*I,oe=f+X+D*(I+1),Me=f+(X+1)+D*(I+1),Ne=f+(X+1)+D*I;l.push(se,oe,Ne),l.push(oe,Me,Ne),W+=6}o.addGroup(m,W,C),m+=W,f+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class za extends sn{constructor(e=1,t=1,i=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const h=[],p=[],f=[],m=[];let _=0;const S=[],d=i/2;let u=0;v(),a===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new Gt(p,3)),this.setAttribute("normal",new Gt(f,3)),this.setAttribute("uv",new Gt(m,2));function v(){const M=new $,b=new $;let T=0;const P=(t-e)/i;for(let x=0;x<=s;x++){const C=[],N=x/s,O=N*(t-e)+e;for(let V=0;V<=r;V++){const E=V/r,A=E*l+o,D=Math.sin(A),U=Math.cos(A);b.x=O*D,b.y=-N*i+d,b.z=O*U,p.push(b.x,b.y,b.z),M.set(D,P,U).normalize(),f.push(M.x,M.y,M.z),m.push(E,1-N),C.push(_++)}S.push(C)}for(let x=0;x<r;x++)for(let C=0;C<s;C++){const N=S[C][x],O=S[C+1][x],V=S[C+1][x+1],E=S[C][x+1];(e>0||C!==0)&&(h.push(N,O,E),T+=3),(t>0||C!==s-1)&&(h.push(O,V,E),T+=3)}c.addGroup(u,T,0),u+=T}function w(M){const b=_,T=new it,P=new $;let x=0;const C=M===!0?e:t,N=M===!0?1:-1;for(let V=1;V<=r;V++)p.push(0,d*N,0),f.push(0,N,0),m.push(.5,.5),_++;const O=_;for(let V=0;V<=r;V++){const A=V/r*l+o,D=Math.cos(A),U=Math.sin(A);P.x=C*U,P.y=d*N,P.z=C*D,p.push(P.x,P.y,P.z),f.push(0,N,0),T.x=D*.5+.5,T.y=U*.5*N+.5,m.push(T.x,T.y),_++}for(let V=0;V<r;V++){const E=b+V,A=O+V;M===!0?h.push(A,A+1,E):h.push(A+1,A,E),x+=3}c.addGroup(u,x,M===!0?1:2),u+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new za(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Sc extends za{constructor(e=1,t=1,i=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,i,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Sc(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ha extends sn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,h=l+1,p=e/o,f=t/l,m=[],_=[],S=[],d=[];for(let u=0;u<h;u++){const v=u*f-a;for(let w=0;w<c;w++){const M=w*p-s;_.push(M,-v,0),S.push(0,0,1),d.push(w/o),d.push(1-u/l)}}for(let u=0;u<l;u++)for(let v=0;v<o;v++){const w=v+c*u,M=v+c*(u+1),b=v+1+c*(u+1),T=v+1+c*u;m.push(w,M,T),m.push(M,b,T)}this.setIndex(m),this.setAttribute("position",new Gt(_,3)),this.setAttribute("normal",new Gt(S,3)),this.setAttribute("uv",new Gt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ha(e.width,e.height,e.widthSegments,e.heightSegments)}}class _s extends sn{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const h=[],p=new $,f=new $,m=[],_=[],S=[],d=[];for(let u=0;u<=i;u++){const v=[],w=u/i,M=a+w*o,b=e*Math.cos(M),T=Math.sqrt(e*e-b*b);let P=0;u===0&&a===0?P=.5/t:u===i&&l===Math.PI&&(P=-.5/t);for(let x=0;x<=t;x++){const C=x/t,N=r+C*s;p.x=-T*Math.cos(N),p.y=b,p.z=T*Math.sin(N),_.push(p.x,p.y,p.z),f.copy(p).normalize(),S.push(f.x,f.y,f.z),d.push(C+P,1-w),v.push(c++)}h.push(v)}for(let u=0;u<i;u++)for(let v=0;v<t;v++){const w=h[u][v+1],M=h[u][v],b=h[u+1][v],T=h[u+1][v+1];(u!==0||a>0)&&m.push(w,M,T),(u!==i-1||l<Math.PI)&&m.push(M,b,T)}this.setIndex(m),this.setAttribute("position",new Gt(_,3)),this.setAttribute("normal",new Gt(S,3)),this.setAttribute("uv",new Gt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function Er(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];if(rf(r))r.isRenderTargetTexture?(Ge("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone();else if(Array.isArray(r))if(rf(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[t][i]=s}else e[t][i]=r.slice();else e[t][i]=r}}return e}function Ht(n){const e={};for(let t=0;t<n.length;t++){const i=Er(n[t]);for(const r in i)e[r]=i[r]}return e}function rf(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function u_(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Th(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}const f_={clone:Er,merge:Ht};var d_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,h_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Nn extends Cr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=d_,this.fragmentShader=h_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Er(e.uniforms),this.uniformsGroups=u_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=t[r.value]||null;break;case"c":this.uniforms[i].value=new et().setHex(r.value);break;case"v2":this.uniforms[i].value=new it().fromArray(r.value);break;case"v3":this.uniforms[i].value=new $().fromArray(r.value);break;case"v4":this.uniforms[i].value=new vt().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Ve().fromArray(r.value);break;case"m4":this.uniforms[i].value=new xt().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class p_ extends Nn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Fi extends Cr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zl,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ti,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class m_ extends Cr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=E0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class g_ extends Cr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class wh extends Ct{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new et(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class __ extends wh{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.groundColor=new et(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Uo=new xt,sf=new $,af=new $;class v_{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new it(512,512),this.mapType=en,this.map=null,this.mapPass=null,this.matrix=new xt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xc,this._frameExtents=new it(1,1),this._viewportCount=1,this._viewports=[new vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;sf.setFromMatrixPosition(e.matrixWorld),t.position.copy(sf),af.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(af),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,r){Uo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Uo,e.coordinateSystem,e.reversedDepth);const s=this._frameExtents,a=r?r.z/s.x:1,o=r?r.w/s.y:1,l=r?r.x/s.x:0,c=r?r.y/s.y:0;e.coordinateSystem===us||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Uo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const $s=new $,Zs=new Rr,bn=new $;class Ah extends Ct{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xt,this.projectionMatrix=new xt,this.projectionMatrixInverse=new xt,this.coordinateSystem=Pn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose($s,Zs,bn),bn.x===1&&bn.y===1&&bn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose($s,Zs,bn.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose($s,Zs,bn),bn.x===1&&bn.y===1&&bn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose($s,Zs,bn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const hi=new $,of=new it,lf=new it;class ln extends Ah{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Hl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(fo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Hl*2*Math.atan(Math.tan(fo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(hi.x,hi.y).multiplyScalar(-e/hi.z),hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(hi.x,hi.y).multiplyScalar(-e/hi.z)}getViewSize(e,t){return this.getViewBounds(e,of,lf),t.subVectors(lf,of)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(fo*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Mc extends Ah{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class x_ extends v_{constructor(){super(new Mc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class S_ extends wh{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.target=new Ct,this.shadow=new x_}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const or=-90,lr=1;class M_ extends Ct{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new ln(or,lr,e,t);r.layers=this.layers,this.add(r);const s=new ln(or,lr,e,t);s.layers=this.layers,this.add(s);const a=new ln(or,lr,e,t);a.layers=this.layers,this.add(a);const o=new ln(or,lr,e,t);o.layers=this.layers,this.add(o);const l=new ln(or,lr,e,t);l.layers=this.layers,this.add(l);const c=new ln(or,lr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Pn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===us)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,h]=this.children,p=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let d=!1;e.isWebGLRenderer===!0?d=e.state.buffers.depth.getReversed():d=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),d&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),d&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,r),d&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,r),d&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,r),d&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=S,e.setRenderTarget(i,5,r),d&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(p,f,m),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class y_ extends ln{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const zc=class zc{constructor(e,t,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,r){const s=this.elements;return s[0]=e,s[2]=t,s[1]=i,s[3]=r,this}};zc.prototype.isMatrix2=!0;let cf=zc;function uf(n,e,t,i){const r=E_(i);switch(t){case fh:return n*e;case hh:return n*e/r.components*r.byteLength;case dc:return n*e/r.components*r.byteLength;case Vi:return n*e*2/r.components*r.byteLength;case hc:return n*e*2/r.components*r.byteLength;case dh:return n*e*3/r.components*r.byteLength;case vn:return n*e*4/r.components*r.byteLength;case pc:return n*e*4/r.components*r.byteLength;case oa:case la:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ca:case ua:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case fl:case hl:return Math.max(n,16)*Math.max(e,8)/4;case ul:case dl:return Math.max(n,8)*Math.max(e,8)/2;case pl:case ml:case _l:case vl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case gl:case Ma:case xl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Sl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ml:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case yl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case El:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case bl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Tl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case wl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Al:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Rl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Cl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Pl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Ll:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Dl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Il:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Ul:case Nl:case Fl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Ol:case Bl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case ya:case kl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function E_(n){switch(n){case en:case oh:return{byteLength:1,components:1};case ls:case lh:case Un:return{byteLength:2,components:1};case uc:case fc:return{byteLength:2,components:4};case In:case cc:case Cn:return{byteLength:4,components:1};case ch:case uh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:lc}}));typeof window<"u"&&(window.__THREE__?Ge("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=lc);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Rh(){let n=null,e=!1,t=null,i=null;function r(s,a){i=n.requestAnimationFrame(r),t(s,a)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function b_(n){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,p=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,h),o.onUploadCallback();let m;if(c instanceof Float32Array)m=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function i(o,l,c){const h=l.array,p=l.updateRanges;if(n.bindBuffer(c,o),p.length===0)n.bufferSubData(c,0,h);else{p.sort((m,_)=>m.start-_.start);let f=0;for(let m=1;m<p.length;m++){const _=p[f],S=p[m];S.start<=_.start+_.count+1?_.count=Math.max(_.count,S.start+S.count-_.start):(++f,p[f]=S)}p.length=f+1;for(let m=0,_=p.length;m<_;m++){const S=p[m];n.bufferSubData(c,S.start*h.BYTES_PER_ELEMENT,h,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var T_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,w_=`#ifdef USE_ALPHAHASH
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
#endif`,A_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,R_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,C_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,P_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,L_=`#ifdef USE_AOMAP
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
#endif`,D_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,I_=`#ifdef USE_BATCHING
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
#endif`,U_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,N_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,F_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,O_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,B_=`#ifdef USE_IRIDESCENCE
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
#endif`,k_=`#ifdef USE_BUMPMAP
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
#endif`,z_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,H_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,G_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,V_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,W_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,X_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,q_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Y_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,K_=`#define PI 3.141592653589793
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
} // validated`,$_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Z_=`vec3 transformedNormal = objectNormal;
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
#endif`,J_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Q_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,j_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ev=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tv="gl_FragColor = linearToOutputTexel( gl_FragColor );",nv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,iv=`#ifdef USE_ENVMAP
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
#endif`,rv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,sv=`#ifdef USE_ENVMAP
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
#endif`,av=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ov=`#ifdef USE_ENVMAP
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
#endif`,lv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,uv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dv=`#ifdef USE_GRADIENTMAP
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
}`,hv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gv=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,_v=`#ifdef USE_ENVMAP
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
#endif`,vv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Sv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Mv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yv=`PhysicalMaterial material;
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
#endif`,Ev=`uniform sampler2D dfgLUT;
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
}`,bv=`
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
#endif`,Tv=`#if defined( RE_IndirectDiffuse )
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
#endif`,wv=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Av=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Rv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Cv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Dv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Iv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Uv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Nv=`#if defined( USE_POINTS_UV )
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
#endif`,Fv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ov=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Bv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,kv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hv=`#ifdef USE_MORPHTARGETS
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
#endif`,Gv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Wv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Xv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Kv=`#ifdef USE_NORMALMAP
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
#endif`,$v=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Zv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Jv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Qv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ex=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,tx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,nx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ix=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,rx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ax=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ox=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ux=`float getShadowMask() {
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
}`,fx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,dx=`#ifdef USE_SKINNING
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
#endif`,hx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,px=`#ifdef USE_SKINNING
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
#endif`,mx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_x=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,xx=`#ifdef USE_TRANSMISSION
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
#endif`,Sx=`#ifdef USE_TRANSMISSION
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
#endif`,Mx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ex=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Tx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,wx=`uniform sampler2D t2D;
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
}`,Ax=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Cx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Px=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lx=`#include <common>
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
}`,Dx=`#if DEPTH_PACKING == 3200
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
}`,Ix=`#define DISTANCE
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
}`,Ux=`#define DISTANCE
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
}`,Nx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Fx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ox=`uniform float scale;
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
}`,Bx=`uniform vec3 diffuse;
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
}`,kx=`#include <common>
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
}`,zx=`uniform vec3 diffuse;
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
}`,Hx=`#define LAMBERT
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
}`,Gx=`#define LAMBERT
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
}`,Vx=`#define MATCAP
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
}`,Wx=`#define MATCAP
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
}`,Xx=`#define NORMAL
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
}`,qx=`#define NORMAL
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
}`,Yx=`#define PHONG
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
}`,Kx=`#define PHONG
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
}`,$x=`#define STANDARD
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
}`,Zx=`#define STANDARD
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
}`,Jx=`#define TOON
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
}`,Qx=`#define TOON
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
}`,jx=`uniform float size;
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
}`,eS=`uniform vec3 diffuse;
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
}`,tS=`#include <common>
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
}`,nS=`uniform vec3 color;
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
}`,iS=`uniform float rotation;
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
}`,rS=`uniform vec3 diffuse;
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
}`,Ye={alphahash_fragment:T_,alphahash_pars_fragment:w_,alphamap_fragment:A_,alphamap_pars_fragment:R_,alphatest_fragment:C_,alphatest_pars_fragment:P_,aomap_fragment:L_,aomap_pars_fragment:D_,batching_pars_vertex:I_,batching_vertex:U_,begin_vertex:N_,beginnormal_vertex:F_,bsdfs:O_,iridescence_fragment:B_,bumpmap_pars_fragment:k_,clipping_planes_fragment:z_,clipping_planes_pars_fragment:H_,clipping_planes_pars_vertex:G_,clipping_planes_vertex:V_,color_fragment:W_,color_pars_fragment:X_,color_pars_vertex:q_,color_vertex:Y_,common:K_,cube_uv_reflection_fragment:$_,defaultnormal_vertex:Z_,displacementmap_pars_vertex:J_,displacementmap_vertex:Q_,emissivemap_fragment:j_,emissivemap_pars_fragment:ev,colorspace_fragment:tv,colorspace_pars_fragment:nv,envmap_fragment:iv,envmap_common_pars_fragment:rv,envmap_pars_fragment:sv,envmap_pars_vertex:av,envmap_physical_pars_fragment:_v,envmap_vertex:ov,fog_vertex:lv,fog_pars_vertex:cv,fog_fragment:uv,fog_pars_fragment:fv,gradientmap_pars_fragment:dv,lightmap_pars_fragment:hv,lights_lambert_fragment:pv,lights_lambert_pars_fragment:mv,lights_pars_begin:gv,lights_toon_fragment:vv,lights_toon_pars_fragment:xv,lights_phong_fragment:Sv,lights_phong_pars_fragment:Mv,lights_physical_fragment:yv,lights_physical_pars_fragment:Ev,lights_fragment_begin:bv,lights_fragment_maps:Tv,lights_fragment_end:wv,lightprobes_pars_fragment:Av,logdepthbuf_fragment:Rv,logdepthbuf_pars_fragment:Cv,logdepthbuf_pars_vertex:Pv,logdepthbuf_vertex:Lv,map_fragment:Dv,map_pars_fragment:Iv,map_particle_fragment:Uv,map_particle_pars_fragment:Nv,metalnessmap_fragment:Fv,metalnessmap_pars_fragment:Ov,morphinstance_vertex:Bv,morphcolor_vertex:kv,morphnormal_vertex:zv,morphtarget_pars_vertex:Hv,morphtarget_vertex:Gv,normal_fragment_begin:Vv,normal_fragment_maps:Wv,normal_pars_fragment:Xv,normal_pars_vertex:qv,normal_vertex:Yv,normalmap_pars_fragment:Kv,clearcoat_normal_fragment_begin:$v,clearcoat_normal_fragment_maps:Zv,clearcoat_pars_fragment:Jv,iridescence_pars_fragment:Qv,opaque_fragment:jv,packing:ex,premultiplied_alpha_fragment:tx,project_vertex:nx,dithering_fragment:ix,dithering_pars_fragment:rx,roughnessmap_fragment:sx,roughnessmap_pars_fragment:ax,shadowmap_pars_fragment:ox,shadowmap_pars_vertex:lx,shadowmap_vertex:cx,shadowmask_pars_fragment:ux,skinbase_vertex:fx,skinning_pars_vertex:dx,skinning_vertex:hx,skinnormal_vertex:px,specularmap_fragment:mx,specularmap_pars_fragment:gx,tonemapping_fragment:_x,tonemapping_pars_fragment:vx,transmission_fragment:xx,transmission_pars_fragment:Sx,uv_pars_fragment:Mx,uv_pars_vertex:yx,uv_vertex:Ex,worldpos_vertex:bx,background_vert:Tx,background_frag:wx,backgroundCube_vert:Ax,backgroundCube_frag:Rx,cube_vert:Cx,cube_frag:Px,depth_vert:Lx,depth_frag:Dx,distance_vert:Ix,distance_frag:Ux,equirect_vert:Nx,equirect_frag:Fx,linedashed_vert:Ox,linedashed_frag:Bx,meshbasic_vert:kx,meshbasic_frag:zx,meshlambert_vert:Hx,meshlambert_frag:Gx,meshmatcap_vert:Vx,meshmatcap_frag:Wx,meshnormal_vert:Xx,meshnormal_frag:qx,meshphong_vert:Yx,meshphong_frag:Kx,meshphysical_vert:$x,meshphysical_frag:Zx,meshtoon_vert:Jx,meshtoon_frag:Qx,points_vert:jx,points_frag:eS,shadow_vert:tS,shadow_frag:nS,sprite_vert:iS,sprite_frag:rS},ge={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new it(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new $},probesMax:{value:new $},probesResolution:{value:new $}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new it(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},An={basic:{uniforms:Ht([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:Ht([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new et(0)},envMapIntensity:{value:1}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:Ht([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:Ht([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:Ht([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new et(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:Ht([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:Ht([ge.points,ge.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:Ht([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:Ht([ge.common,ge.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:Ht([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:Ht([ge.sprite,ge.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distance:{uniforms:Ht([ge.common,ge.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distance_vert,fragmentShader:Ye.distance_frag},shadow:{uniforms:Ht([ge.lights,ge.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};An.physical={uniforms:Ht([An.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new it(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new it},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new it},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};const Js={r:0,b:0,g:0},sS=new xt,Ch=new Ve;Ch.set(-1,0,0,0,1,0,0,0,1);function aS(n,e,t,i,r,s){const a=new et(0);let o=r===!0?0:1,l,c,h=null,p=0,f=null;function m(v){let w=v.isScene===!0?v.background:null;if(w&&w.isTexture){const M=v.backgroundBlurriness>0;w=e.get(w,M)}return w}function _(v){let w=!1;const M=m(v);M===null?d(a,o):M&&M.isColor&&(d(M,1),w=!0);const b=n.xr.getEnvironmentBlendMode();b==="additive"?t.buffers.color.setClear(0,0,0,1,s):b==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function S(v,w){const M=m(w);M&&(M.isCubeTexture||M.mapping===Ba)?(c===void 0&&(c=new Et(new Pr(1,1,1),new Nn({name:"BackgroundCubeMaterial",uniforms:Er(An.backgroundCube.uniforms),vertexShader:An.backgroundCube.vertexShader,fragmentShader:An.backgroundCube.fragmentShader,side:$t,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,T,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(sS.makeRotationFromEuler(w.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Ch),c.material.toneMapped=tt.getTransfer(M.colorSpace)!==ut,(h!==M||p!==M.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,h=M,p=M.version,f=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Et(new Ha(2,2),new Nn({name:"BackgroundMaterial",uniforms:Er(An.background.uniforms),vertexShader:An.background.vertexShader,fragmentShader:An.background.fragmentShader,side:Hi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=tt.getTransfer(M.colorSpace)!==ut,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||p!==M.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,h=M,p=M.version,f=n.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function d(v,w){v.getRGB(Js,Th(n)),t.buffers.color.setClear(Js.r,Js.g,Js.b,w,s)}function u(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,w=1){a.set(v),o=w,d(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,d(a,o)},render:_,addToRenderList:S,dispose:u}}function oS(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,a=!1;function o(O,V,E,A,D){let U=!1;const F=p(O,A,E,V);s!==F&&(s=F,c(s.object)),U=m(O,A,E,D),U&&_(O,A,E,D),D!==null&&e.update(D,n.ELEMENT_ARRAY_BUFFER),(U||a)&&(a=!1,M(O,V,E,A),D!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(D).buffer))}function l(){return n.createVertexArray()}function c(O){return n.bindVertexArray(O)}function h(O){return n.deleteVertexArray(O)}function p(O,V,E,A){const D=A.wireframe===!0;let U=i[V.id];U===void 0&&(U={},i[V.id]=U);const F=O.isInstancedMesh===!0?O.id:0;let W=U[F];W===void 0&&(W={},U[F]=W);let L=W[E.id];L===void 0&&(L={},W[E.id]=L);let I=L[D];return I===void 0&&(I=f(l()),L[D]=I),I}function f(O){const V=[],E=[],A=[];for(let D=0;D<t;D++)V[D]=0,E[D]=0,A[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:E,attributeDivisors:A,object:O,attributes:{},index:null}}function m(O,V,E,A){const D=s.attributes,U=V.attributes;let F=0;const W=E.getAttributes();for(const L in W)if(W[L].location>=0){const X=D[L];let se=U[L];if(se===void 0&&(L==="instanceMatrix"&&O.instanceMatrix&&(se=O.instanceMatrix),L==="instanceColor"&&O.instanceColor&&(se=O.instanceColor)),X===void 0||X.attribute!==se||se&&X.data!==se.data)return!0;F++}return s.attributesNum!==F||s.index!==A}function _(O,V,E,A){const D={},U=V.attributes;let F=0;const W=E.getAttributes();for(const L in W)if(W[L].location>=0){let X=U[L];X===void 0&&(L==="instanceMatrix"&&O.instanceMatrix&&(X=O.instanceMatrix),L==="instanceColor"&&O.instanceColor&&(X=O.instanceColor));const se={};se.attribute=X,X&&X.data&&(se.data=X.data),D[L]=se,F++}s.attributes=D,s.attributesNum=F,s.index=A}function S(){const O=s.newAttributes;for(let V=0,E=O.length;V<E;V++)O[V]=0}function d(O){u(O,0)}function u(O,V){const E=s.newAttributes,A=s.enabledAttributes,D=s.attributeDivisors;E[O]=1,A[O]===0&&(n.enableVertexAttribArray(O),A[O]=1),D[O]!==V&&(n.vertexAttribDivisor(O,V),D[O]=V)}function v(){const O=s.newAttributes,V=s.enabledAttributes;for(let E=0,A=V.length;E<A;E++)V[E]!==O[E]&&(n.disableVertexAttribArray(E),V[E]=0)}function w(O,V,E,A,D,U,F){F===!0?n.vertexAttribIPointer(O,V,E,D,U):n.vertexAttribPointer(O,V,E,A,D,U)}function M(O,V,E,A){S();const D=A.attributes,U=E.getAttributes(),F=V.defaultAttributeValues;for(const W in U){const L=U[W];if(L.location>=0){let I=D[W];if(I===void 0&&(W==="instanceMatrix"&&O.instanceMatrix&&(I=O.instanceMatrix),W==="instanceColor"&&O.instanceColor&&(I=O.instanceColor)),I!==void 0){const X=I.normalized,se=I.itemSize,oe=e.get(I);if(oe===void 0)continue;const Me=oe.buffer,Ne=oe.type,Oe=oe.bytesPerElement,Q=Ne===n.INT||Ne===n.UNSIGNED_INT||I.gpuType===cc;if(I.isInterleavedBufferAttribute){const ee=I.data,ve=ee.stride,De=I.offset;if(ee.isInstancedInterleavedBuffer){for(let H=0;H<L.locationSize;H++)u(L.location+H,ee.meshPerAttribute);O.isInstancedMesh!==!0&&A._maxInstanceCount===void 0&&(A._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let H=0;H<L.locationSize;H++)d(L.location+H);n.bindBuffer(n.ARRAY_BUFFER,Me);for(let H=0;H<L.locationSize;H++)w(L.location+H,se/L.locationSize,Ne,X,ve*Oe,(De+se/L.locationSize*H)*Oe,Q)}else{if(I.isInstancedBufferAttribute){for(let ee=0;ee<L.locationSize;ee++)u(L.location+ee,I.meshPerAttribute);O.isInstancedMesh!==!0&&A._maxInstanceCount===void 0&&(A._maxInstanceCount=I.meshPerAttribute*I.count)}else for(let ee=0;ee<L.locationSize;ee++)d(L.location+ee);n.bindBuffer(n.ARRAY_BUFFER,Me);for(let ee=0;ee<L.locationSize;ee++)w(L.location+ee,se/L.locationSize,Ne,X,se*Oe,se/L.locationSize*ee*Oe,Q)}}else if(F!==void 0){const X=F[W];if(X!==void 0)switch(X.length){case 2:n.vertexAttrib2fv(L.location,X);break;case 3:n.vertexAttrib3fv(L.location,X);break;case 4:n.vertexAttrib4fv(L.location,X);break;default:n.vertexAttrib1fv(L.location,X)}}}}v()}function b(){C();for(const O in i){const V=i[O];for(const E in V){const A=V[E];for(const D in A){const U=A[D];for(const F in U)h(U[F].object),delete U[F];delete A[D]}}delete i[O]}}function T(O){if(i[O.id]===void 0)return;const V=i[O.id];for(const E in V){const A=V[E];for(const D in A){const U=A[D];for(const F in U)h(U[F].object),delete U[F];delete A[D]}}delete i[O.id]}function P(O){for(const V in i){const E=i[V];for(const A in E){const D=E[A];if(D[O.id]===void 0)continue;const U=D[O.id];for(const F in U)h(U[F].object),delete U[F];delete D[O.id]}}}function x(O){for(const V in i){const E=i[V],A=O.isInstancedMesh===!0?O.id:0,D=E[A];if(D!==void 0){for(const U in D){const F=D[U];for(const W in F)h(F[W].object),delete F[W];delete D[U]}delete E[A],Object.keys(E).length===0&&delete i[V]}}}function C(){N(),a=!0,s!==r&&(s=r,c(s.object))}function N(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:C,resetDefaultState:N,dispose:b,releaseStatesOfGeometry:T,releaseStatesOfObject:x,releaseStatesOfProgram:P,initAttributes:S,enableAttribute:d,disableUnusedAttributes:v}}function lS(n,e,t){let i;function r(l){i=l}function s(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function a(l,c,h){h!==0&&(n.drawArraysInstanced(i,l,c,h),t.update(c,i,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let f=0;for(let m=0;m<h;m++)f+=c[m];t.update(f,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function cS(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(P){return!(P!==vn&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){const x=P===Un&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==en&&P!==Cn&&!x&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(Ge("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const p=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&f===!1&&Ge("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=n.getParameter(n.MAX_TEXTURE_SIZE),d=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),u=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),b=n.getParameter(n.MAX_SAMPLES),T=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:p,reversedDepthBuffer:f,maxTextures:m,maxVertexTextures:_,maxTextureSize:S,maxCubemapSize:d,maxAttributes:u,maxVertexUniforms:v,maxVaryings:w,maxFragmentUniforms:M,maxSamples:b,samples:T}}function uS(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new vi,o=new Ve,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,f){const m=p.length!==0||f||i!==0||r;return r=f,i=p.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,f){t=h(p,f,0)},this.setState=function(p,f,m){const _=p.clippingPlanes,S=p.clipIntersection,d=p.clipShadows,u=n.get(p);if(!r||_===null||_.length===0||s&&!d)s?h(null):c();else{const v=s?0:i,w=v*4;let M=u.clippingState||null;l.value=M,M=h(_,f,w,m);for(let b=0;b!==w;++b)M[b]=t[b];u.clippingState=M,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(p,f,m,_){const S=p!==null?p.length:0;let d=null;if(S!==0){if(d=l.value,_!==!0||d===null){const u=m+S*4,v=f.matrixWorldInverse;o.getNormalMatrix(v),(d===null||d.length<u)&&(d=new Float32Array(u));for(let w=0,M=m;w!==S;++w,M+=4)a.copy(p[w]).applyMatrix4(v,o),a.normal.toArray(d,M),d[M+3]=a.constant}l.value=d,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,d}}const hr=4,fS=6,dS=20,hS=256,Gr=new Mc,ff=new et;let No=null,Fo=0,Oo=0,Bo=!1;const pS=new $,Di=new $;class df{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:a=256,position:o=pS}=s;No=this._renderer.getRenderTarget(),Fo=this._renderer.getActiveCubeFace(),Oo=this._renderer.getActiveMipmapLevel(),Bo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(No,Fo,Oo),this._renderer.xr.enabled=Bo,e.scissorTest=!1,cr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Gi||e.mapping===yr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),No=this._renderer.getRenderTarget(),Fo=this._renderer.getActiveCubeFace(),Oo=this._renderer.getActiveMipmapLevel(),Bo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ot,minFilter:Ot,generateMipmaps:!1,type:Un,format:vn,colorSpace:Ea,depthBuffer:!1},r=hf(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hf(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=mS(s)),this._blurMaterial=_S(s,e,t),this._ggxMaterial=gS(s,e,t)}return r}_compileMaterial(e){const t=new Et(new sn,e);this._renderer.compile(t,Gr)}_sceneToCubeUV(e,t,i,r,s){const l=new ln(90,1,t,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],p=this._renderer,f=p.autoClear,m=p.toneMapping;p.getClearColor(ff),p.toneMapping=Ln,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(r),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Et(new Pr,new Mh({name:"PMREM.Background",side:$t,depthWrite:!1,depthTest:!1})));const S=this._backgroundBox,d=S.material;let u=!1;const v=e.background;v?v.isColor&&(d.color.copy(v),e.background=null,u=!0):(d.color.copy(ff),u=!0);for(let w=0;w<6;w++){const M=w%3;M===0?(l.up.set(0,c[w],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[w],s.y,s.z)):M===1?(l.up.set(0,0,c[w]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[w],s.z)):(l.up.set(0,c[w],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[w]));const b=this._cubeSize;cr(r,M*b,w>2?b:0,b,b),p.setRenderTarget(r),u&&p.render(S,l),p.render(e,l)}p.toneMapping=m,p.autoClear=f,e.background=v}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Gi||e.mapping===yr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=mf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pf());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;cr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Gr)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),p=Math.sqrt(c*c-h*h),f=c*1.25,m=p*f,{_lodMax:_}=this,S=this._sizeLods[i],d=3*S*(i>_-hr?i-_+hr:0),u=4*(this._cubeSize-S);l.envMap.value=e.texture,l.roughness.value=m,l.mipInt.value=_-t,cr(s,d,u,3*S,2*S),r.setRenderTarget(s),r.render(o,Gr),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=_-i,cr(e,d,u,3*S,2*S),r.setRenderTarget(e),r.render(o,Gr)}_blur(e,t,i,r){const s=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,s,t,i,a),this._blurPass(s,e,i,i,a)}_blurPass(e,t,i,r,s){const a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[r];l.material=o;const c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-i;const h=this._sizeLods[r],p=3*h*(r>this._lodMax-hr?r-this._lodMax+hr:0),f=4*(this._cubeSize-h);cr(t,p,f,3*h,2*h),a.setRenderTarget(t),a.render(l,Gr)}}function mS(n){const e=[],t=[];let i=n;const r=n-hr+1+fS;for(let s=0;s<r;s++){const a=Math.pow(2,i);e.push(a);const o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],p=6,f=6,m=3,_=new Float32Array(m*f*p),S=new Float32Array(m*f*p);for(let u=0;u<p;u++){const v=u%3*2/3-1,w=u>2?0:-1,M=[v,w,0,v+2/3,w,0,v+2/3,w+1,0,v,w,0,v+2/3,w+1,0,v,w+1,0];_.set(M,m*f*u);for(let b=0;b<f;b++){const T=h[b*2]*2-1,P=h[b*2+1]*2-1;u===0?Di.set(1,P,T):u===1?Di.set(-T,1,-P):u===2?Di.set(-T,P,1):u===3?Di.set(-1,P,-T):u===4?Di.set(-T,-1,P):Di.set(T,P,-1),Di.toArray(S,(u*f+b)*m)}}const d=new sn;d.setAttribute("position",new Dn(_,m)),d.setAttribute("outputDirection",new Dn(S,m)),t.push(new Et(d,null)),i>hr&&i--}return{lodMeshes:t,sizeLods:e}}function hf(n,e,t){const i=new Sn(n,e,t);return i.texture.mapping=Ba,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function cr(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function gS(n,e,t){return new Nn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:hS,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ga(),fragmentShader:`

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
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function _S(n,e,t){return new Nn({name:"SphericalGaussianBlur",defines:{SAMPLES:dS,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Ga(),fragmentShader:`

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
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function pf(){return new Nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ga(),fragmentShader:`

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
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function mf(){return new Nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ga(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function Ga(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Ph extends Sn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Eh(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Pr(5,5,5),s=new Nn({name:"CubemapFromEquirect",uniforms:Er(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:$t,blending:Jn});s.uniforms.tEquirect.value=t;const a=new Et(r,s),o=t.minFilter;return t.minFilter===Ui&&(t.minFilter=Ot),new M_(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}function vS(n){let e=new WeakMap,t=new WeakMap,i=null;function r(f,m=!1){return f==null?null:m?a(f):s(f)}function s(f){if(f&&f.isTexture){const m=f.mapping;if(m===oo||m===lo)if(e.has(f)){const _=e.get(f).texture;return o(_,f.mapping)}else{const _=f.image;if(_&&_.height>0){const S=new Ph(_.height);return S.fromEquirectangularTexture(n,f),e.set(f,S),f.addEventListener("dispose",c),o(S.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture){const m=f.mapping,_=m===oo||m===lo,S=m===Gi||m===yr;if(_||S){let d=t.get(f);const u=d!==void 0?d.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==u)return i===null&&(i=new df(n)),d=_?i.fromEquirectangular(f,d):i.fromCubemap(f,d),d.texture.pmremVersion=f.pmremVersion,t.set(f,d),d.texture;if(d!==void 0)return d.texture;{const v=f.image;return _&&v&&v.height>0||S&&v&&l(v)?(i===null&&(i=new df(n)),d=_?i.fromEquirectangular(f):i.fromCubemap(f),d.texture.pmremVersion=f.pmremVersion,t.set(f,d),f.addEventListener("dispose",h),d.texture):null}}}return f}function o(f,m){return m===oo?f.mapping=Gi:m===lo&&(f.mapping=yr),f}function l(f){let m=0;const _=6;for(let S=0;S<_;S++)f[S]!==void 0&&m++;return m===_}function c(f){const m=f.target;m.removeEventListener("dispose",c);const _=e.get(m);_!==void 0&&(e.delete(m),_.dispose())}function h(f){const m=f.target;m.removeEventListener("dispose",h);const _=t.get(m);_!==void 0&&(t.delete(m),_.dispose())}function p(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:p}}function xS(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&pr("WebGLRenderer: "+i+" extension not supported."),r}}}function SS(n,e,t,i){const r={},s=new WeakMap;function a(p){const f=p.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);f.removeEventListener("dispose",a),delete r[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(p,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,t.memory.geometries++),f}function l(p){const f=p.attributes;for(const m in f)e.update(f[m],n.ARRAY_BUFFER)}function c(p){const f=[],m=p.index,_=p.attributes.position;let S=0;if(_===void 0)return;if(m!==null){const v=m.array;S=m.version;for(let w=0,M=v.length;w<M;w+=3){const b=v[w+0],T=v[w+1],P=v[w+2];f.push(b,T,T,P,P,b)}}else{const v=_.array;S=_.version;for(let w=0,M=v.length/3-1;w<M;w+=3){const b=w+0,T=w+1,P=w+2;f.push(b,T,T,P,P,b)}}const d=new(_.count>=65535?xh:vh)(f,1);d.version=S;const u=s.get(p);u&&e.remove(u),s.set(p,d)}function h(p){const f=s.get(p);if(f){const m=p.index;m!==null&&f.version<m.version&&c(p)}else c(p);return s.get(p)}return{get:o,update:l,getWireframeAttribute:h}}function MS(n,e,t){let i;function r(p){i=p}let s,a;function o(p){s=p.type,a=p.bytesPerElement}function l(p,f){n.drawElements(i,f,s,p*a),t.update(f,i,1)}function c(p,f,m){m!==0&&(n.drawElementsInstanced(i,f,s,p*a,m),t.update(f,i,m))}function h(p,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,p,0,m);let S=0;for(let d=0;d<m;d++)S+=f[d];t.update(S,i,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function yS(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:ot("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function ES(n,e,t){const i=new WeakMap,r=new vt;function s(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=h!==void 0?h.length:0;let f=i.get(o);if(f===void 0||f.count!==p){let N=function(){x.dispose(),i.delete(o),o.removeEventListener("dispose",N)};var m=N;f!==void 0&&f.texture.dispose();const _=o.morphAttributes.position!==void 0,S=o.morphAttributes.normal!==void 0,d=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],v=o.morphAttributes.normal||[],w=o.morphAttributes.color||[];let M=0;_===!0&&(M=1),S===!0&&(M=2),d===!0&&(M=3);let b=o.attributes.position.count*M,T=1;b>e.maxTextureSize&&(T=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const P=new Float32Array(b*T*4*p),x=new mh(P,b,T,p);x.type=Cn,x.needsUpdate=!0;const C=M*4;for(let O=0;O<p;O++){const V=u[O],E=v[O],A=w[O],D=b*T*4*O;for(let U=0;U<V.count;U++){const F=U*C;_===!0&&(r.fromBufferAttribute(V,U),P[D+F+0]=r.x,P[D+F+1]=r.y,P[D+F+2]=r.z,P[D+F+3]=0),S===!0&&(r.fromBufferAttribute(E,U),P[D+F+4]=r.x,P[D+F+5]=r.y,P[D+F+6]=r.z,P[D+F+7]=0),d===!0&&(r.fromBufferAttribute(A,U),P[D+F+8]=r.x,P[D+F+9]=r.y,P[D+F+10]=r.z,P[D+F+11]=A.itemSize===4?r.w:1)}}f={count:p,texture:x,size:new it(b,T)},i.set(o,f),o.addEventListener("dispose",N)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let _=0;for(let d=0;d<c.length;d++)_+=c[d];const S=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",S),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function bS(n,e,t,i,r){let s=new WeakMap;function a(c){const h=r.render.frame,p=c.geometry,f=e.get(c,p);if(s.get(f)!==h&&(e.update(f),s.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){const m=c.skeleton;s.get(m)!==h&&(m.update(),s.set(m,h))}return f}function o(){s=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}const TS={[jd]:"LINEAR_TONE_MAPPING",[eh]:"REINHARD_TONE_MAPPING",[th]:"CINEON_TONE_MAPPING",[nh]:"ACES_FILMIC_TONE_MAPPING",[rh]:"AGX_TONE_MAPPING",[sh]:"NEUTRAL_TONE_MAPPING",[ih]:"CUSTOM_TONE_MAPPING"};function wS(n,e,t,i,r,s){const a=new Sn(e,t,{type:n,depthBuffer:r,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null;const c=new sn;c.setAttribute("position",new Gt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Gt([0,2,0,0,2,0],2));const h=new p_({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new Et(c,h),f=new Mc(-1,1,1,-1,0,1);let m=null,_=null,S=!1,d,u=null,v=[],w=!1;this.setSize=function(M,b){a.setSize(M,b),o!==null&&o.setSize(M,b),l!==null&&l.setSize(M,b);for(let T=0;T<v.length;T++){const P=v[T];P.setSize&&P.setSize(M,b)}},this.setEffects=function(M){v=M,w=v.length>0&&v[0].isRenderPass===!0;const b=a.width,T=a.height;v.length>0&&o===null&&(o=new Sn(b,T,{type:Un,depthBuffer:!1,stencilBuffer:!1}),l=new Sn(b,T,{type:Un,depthBuffer:!1,stencilBuffer:!1}));for(let P=0;P<v.length;P++){const x=v[P];x.setSize&&x.setSize(b,T)}},this.begin=function(M,b){if(S||M.toneMapping===Ln&&v.length===0)return!1;if(u=b,b!==null){const T=b.width,P=b.height;(a.width!==T||a.height!==P)&&this.setSize(T,P)}return w===!1&&M.setRenderTarget(a),d=M.toneMapping,M.toneMapping=Ln,!0},this.hasRenderPass=function(){return w},this.end=function(M,b){M.toneMapping=d,S=!0;let T=a,P=o;for(let x=0;x<v.length;x++){const C=v[x];C.enabled!==!1&&(C.render(M,P,T,b),C.needsSwap!==!1&&(T=P,P=P===o?l:o))}if(m!==M.outputColorSpace||_!==M.toneMapping){m=M.outputColorSpace,_=M.toneMapping,h.defines={},tt.getTransfer(m)===ut&&(h.defines.SRGB_TRANSFER="");const x=TS[_];x&&(h.defines[x]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=T.texture,M.setRenderTarget(u),M.render(p,f),u=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}const Lh=new Bt,Vl=new fs(1,1),Dh=new mh,Ih=new V0,Uh=new Eh,gf=[],_f=[],vf=new Float32Array(16),xf=new Float32Array(9),Sf=new Float32Array(4);function Lr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=gf[r];if(s===void 0&&(s=new Float32Array(r),gf[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function Tt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function wt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Va(n,e){let t=_f[e];t===void 0&&(t=new Int32Array(e),_f[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function AS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function RS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;n.uniform2fv(this.addr,e),wt(t,e)}}function CS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Tt(t,e))return;n.uniform3fv(this.addr,e),wt(t,e)}}function PS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;n.uniform4fv(this.addr,e),wt(t,e)}}function LS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Tt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),wt(t,e)}else{if(Tt(t,i))return;Sf.set(i),n.uniformMatrix2fv(this.addr,!1,Sf),wt(t,i)}}function DS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Tt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),wt(t,e)}else{if(Tt(t,i))return;xf.set(i),n.uniformMatrix3fv(this.addr,!1,xf),wt(t,i)}}function IS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Tt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),wt(t,e)}else{if(Tt(t,i))return;vf.set(i),n.uniformMatrix4fv(this.addr,!1,vf),wt(t,i)}}function US(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function NS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;n.uniform2iv(this.addr,e),wt(t,e)}}function FS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;n.uniform3iv(this.addr,e),wt(t,e)}}function OS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;n.uniform4iv(this.addr,e),wt(t,e)}}function BS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function kS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;n.uniform2uiv(this.addr,e),wt(t,e)}}function zS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;n.uniform3uiv(this.addr,e),wt(t,e)}}function HS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;n.uniform4uiv(this.addr,e),wt(t,e)}}function GS(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Vl.compareFunction=t.isReversedDepthBuffer()?gc:mc,s=Vl):s=Lh,t.setTexture2D(e||s,r)}function VS(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Ih,r)}function WS(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Uh,r)}function XS(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Dh,r)}function qS(n){switch(n){case 5126:return AS;case 35664:return RS;case 35665:return CS;case 35666:return PS;case 35674:return LS;case 35675:return DS;case 35676:return IS;case 5124:case 35670:return US;case 35667:case 35671:return NS;case 35668:case 35672:return FS;case 35669:case 35673:return OS;case 5125:return BS;case 36294:return kS;case 36295:return zS;case 36296:return HS;case 35678:case 36198:case 36298:case 36306:case 35682:return GS;case 35679:case 36299:case 36307:return VS;case 35680:case 36300:case 36308:case 36293:return WS;case 36289:case 36303:case 36311:case 36292:return XS}}function YS(n,e){n.uniform1fv(this.addr,e)}function KS(n,e){const t=Lr(e,this.size,2);n.uniform2fv(this.addr,t)}function $S(n,e){const t=Lr(e,this.size,3);n.uniform3fv(this.addr,t)}function ZS(n,e){const t=Lr(e,this.size,4);n.uniform4fv(this.addr,t)}function JS(n,e){const t=Lr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function QS(n,e){const t=Lr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function jS(n,e){const t=Lr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function eM(n,e){n.uniform1iv(this.addr,e)}function tM(n,e){n.uniform2iv(this.addr,e)}function nM(n,e){n.uniform3iv(this.addr,e)}function iM(n,e){n.uniform4iv(this.addr,e)}function rM(n,e){n.uniform1uiv(this.addr,e)}function sM(n,e){n.uniform2uiv(this.addr,e)}function aM(n,e){n.uniform3uiv(this.addr,e)}function oM(n,e){n.uniform4uiv(this.addr,e)}function lM(n,e,t){const i=this.cache,r=e.length,s=Va(t,r);Tt(i,s)||(n.uniform1iv(this.addr,s),wt(i,s));let a;this.type===n.SAMPLER_2D_SHADOW?a=Vl:a=Lh;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function cM(n,e,t){const i=this.cache,r=e.length,s=Va(t,r);Tt(i,s)||(n.uniform1iv(this.addr,s),wt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Ih,s[a])}function uM(n,e,t){const i=this.cache,r=e.length,s=Va(t,r);Tt(i,s)||(n.uniform1iv(this.addr,s),wt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Uh,s[a])}function fM(n,e,t){const i=this.cache,r=e.length,s=Va(t,r);Tt(i,s)||(n.uniform1iv(this.addr,s),wt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Dh,s[a])}function dM(n){switch(n){case 5126:return YS;case 35664:return KS;case 35665:return $S;case 35666:return ZS;case 35674:return JS;case 35675:return QS;case 35676:return jS;case 5124:case 35670:return eM;case 35667:case 35671:return tM;case 35668:case 35672:return nM;case 35669:case 35673:return iM;case 5125:return rM;case 36294:return sM;case 36295:return aM;case 36296:return oM;case 35678:case 36198:case 36298:case 36306:case 35682:return lM;case 35679:case 36299:case 36307:return cM;case 35680:case 36300:case 36308:case 36293:return uM;case 36289:case 36303:case 36311:case 36292:return fM}}class hM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=qS(t.type)}}class pM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=dM(t.type)}}class mM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const ko=/(\w+)(\])?(\[|\.)?/g;function Mf(n,e){n.seq.push(e),n.map[e.id]=e}function gM(n,e,t){const i=n.name,r=i.length;for(ko.lastIndex=0;;){const s=ko.exec(i),a=ko.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Mf(t,c===void 0?new hM(o,n,e):new pM(o,n,e));break}else{let p=t.map[o];p===void 0&&(p=new mM(o),Mf(t,p)),t=p}}}class fa{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);gM(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function yf(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const _M=37297;let vM=0;function xM(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const Ef=new Ve;function SM(n){tt._getMatrix(Ef,tt.workingColorSpace,n);const e=`mat3( ${Ef.elements.map(t=>t.toFixed(4))} )`;switch(tt.getTransfer(n)){case ba:return[e,"LinearTransferOETF"];case ut:return[e,"sRGBTransferOETF"];default:return Ge("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function bf(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+xM(n.getShaderSource(e),o)}else return s}function MM(n,e){const t=SM(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const yM={[jd]:"Linear",[eh]:"Reinhard",[th]:"Cineon",[nh]:"ACESFilmic",[rh]:"AgX",[sh]:"Neutral",[ih]:"Custom"};function EM(n,e){const t=yM[e];return t===void 0?(Ge("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Qs=new $;function bM(){tt.getLuminanceCoefficients(Qs);const n=Qs.x.toFixed(4),e=Qs.y.toFixed(4),t=Qs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function TM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Kr).join(`
`)}function wM(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function AM(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Kr(n){return n!==""}function Tf(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function wf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const RM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wl(n){return n.replace(RM,PM)}const CM=new Map;function PM(n,e){let t=Ye[e];if(t===void 0){const i=CM.get(e);if(i!==void 0)t=Ye[i],Ge('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Wl(t)}const LM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Af(n){return n.replace(LM,DM)}function DM(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Rf(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}const IM={[aa]:"SHADOWMAP_TYPE_PCF",[Yr]:"SHADOWMAP_TYPE_VSM"};function UM(n){return IM[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const NM={[Gi]:"ENVMAP_TYPE_CUBE",[yr]:"ENVMAP_TYPE_CUBE",[Ba]:"ENVMAP_TYPE_CUBE_UV"};function FM(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":NM[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const OM={[yr]:"ENVMAP_MODE_REFRACTION"};function BM(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":OM[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const kM={[Qd]:"ENVMAP_BLENDING_MULTIPLY",[S0]:"ENVMAP_BLENDING_MIX",[M0]:"ENVMAP_BLENDING_ADD"};function zM(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":kM[n.combine]||"ENVMAP_BLENDING_NONE"}function HM(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function GM(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=UM(t),c=FM(t),h=BM(t),p=zM(t),f=HM(t),m=TM(t),_=wM(s),S=r.createProgram();let d,u,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Kr).join(`
`),d.length>0&&(d+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Kr).join(`
`),u.length>0&&(u+=`
`)):(d=[Rf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Kr).join(`
`),u=[Rf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ln?"#define TONE_MAPPING":"",t.toneMapping!==Ln?Ye.tonemapping_pars_fragment:"",t.toneMapping!==Ln?EM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,MM("linearToOutputTexel",t.outputColorSpace),bM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Kr).join(`
`)),a=Wl(a),a=Tf(a,t),a=wf(a,t),o=Wl(o),o=Tf(o,t),o=wf(o,t),a=Af(a),o=Af(o),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,d=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,u=["#define varying in",t.glslVersion===Bu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Bu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const w=v+d+a,M=v+u+o,b=yf(r,r.VERTEX_SHADER,w),T=yf(r,r.FRAGMENT_SHADER,M);r.attachShader(S,b),r.attachShader(S,T),t.index0AttributeName!==void 0?r.bindAttribLocation(S,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S);function P(O){if(n.debug.checkShaderErrors){const V=r.getProgramInfoLog(S)||"",E=r.getShaderInfoLog(b)||"",A=r.getShaderInfoLog(T)||"",D=V.trim(),U=E.trim(),F=A.trim();let W=!0,L=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if(W=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,S,b,T);else{const I=bf(r,b,"vertex"),X=bf(r,T,"fragment");ot("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+D+`
`+I+`
`+X)}else D!==""?Ge("WebGLProgram: Program Info Log:",D):(U===""||F==="")&&(L=!1);L&&(O.diagnostics={runnable:W,programLog:D,vertexShader:{log:U,prefix:d},fragmentShader:{log:F,prefix:u}})}r.deleteShader(b),r.deleteShader(T),x=new fa(r,S),C=AM(r,S)}let x;this.getUniforms=function(){return x===void 0&&P(this),x};let C;this.getAttributes=function(){return C===void 0&&P(this),C};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=r.getProgramParameter(S,_M)),N},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=vM++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=b,this.fragmentShader=T,this}let VM=0;class WM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new XM(e),t.set(e,i)),i}}class XM{constructor(e){this.id=VM++,this.code=e,this.usedTimes=0}}function qM(n){return n===Vi||n===Ma||n===ya}function YM(n,e,t,i,r,s){const a=new gh,o=new WM,l=new Set,c=[],h=new Map,p=i.logarithmicDepthBuffer;let f=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return l.add(x),x===0?"uv":`uv${x}`}function S(x,C,N,O,V,E){const A=O.fog,D=V.geometry,U=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?O.environment:null,F=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,W=e.get(x.envMap||U,F),L=W&&W.mapping===Ba?W.image.height:null,I=m[x.type];x.precision!==null&&(f=i.getMaxPrecision(x.precision),f!==x.precision&&Ge("WebGLProgram.getParameters:",x.precision,"not supported, using",f,"instead."));const X=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,se=X!==void 0?X.length:0;let oe=0;D.morphAttributes.position!==void 0&&(oe=1),D.morphAttributes.normal!==void 0&&(oe=2),D.morphAttributes.color!==void 0&&(oe=3);let Me,Ne,Oe,Q;if(I){const ht=An[I];Me=ht.vertexShader,Ne=ht.fragmentShader}else{Me=x.vertexShader,Ne=x.fragmentShader;const ht=o.getVertexShaderStage(x),lt=o.getFragmentShaderStage(x);o.update(x,ht,lt),Oe=ht.id,Q=lt.id}const ee=n.getRenderTarget(),ve=n.state.buffers.depth.getReversed(),De=V.isInstancedMesh===!0,H=V.isBatchedMesh===!0,ie=!!x.map,me=!!x.matcap,ce=!!W,Ee=!!x.aoMap,We=!!x.lightMap,He=!!x.bumpMap&&x.wireframe===!1,rt=!!x.normalMap,Be=!!x.displacementMap,$e=!!x.emissiveMap,Ze=!!x.metalnessMap,mt=!!x.roughnessMap,z=x.anisotropy>0,bt=x.clearcoat>0,at=x.dispersion>0,R=x.retroreflectivity>0,g=x.iridescence>0,B=x.sheen>0,q=x.transmission>0,Z=z&&!!x.anisotropyMap,ae=bt&&!!x.clearcoatMap,le=bt&&!!x.clearcoatNormalMap,j=bt&&!!x.clearcoatRoughnessMap,te=g&&!!x.iridescenceMap,ue=g&&!!x.iridescenceThicknessMap,Re=B&&!!x.sheenColorMap,de=B&&!!x.sheenRoughnessMap,fe=!!x.specularMap,Ie=!!x.specularColorMap,ke=!!x.specularIntensityMap,Xe=q&&!!x.transmissionMap,G=q&&!!x.thicknessMap,he=!!x.gradientMap,ne=!!x.alphaMap,pe=x.alphaTest>0,ye=!!x.alphaHash,re=!!x.extensions;let Ue=Ln;x.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Ue=n.toneMapping);const Ce={shaderID:I,shaderType:x.type,shaderName:x.name,vertexShader:Me,fragmentShader:Ne,defines:x.defines,customVertexShaderID:Oe,customFragmentShaderID:Q,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:f,batching:H,batchingColor:H&&V._colorsTexture!==null,instancing:De,instancingColor:De&&V.instanceColor!==null,instancingMorph:De&&V.morphTexture!==null,outputColorSpace:ee===null?n.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:tt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:ie,matcap:me,envMap:ce,envMapMode:ce&&W.mapping,envMapCubeUVHeight:L,aoMap:Ee,lightMap:We,bumpMap:He,normalMap:rt,displacementMap:Be,emissiveMap:$e,normalMapObjectSpace:rt&&x.normalMapType===b0,normalMapTangentSpace:rt&&x.normalMapType===zl,packedNormalMap:rt&&x.normalMapType===zl&&qM(x.normalMap.format),metalnessMap:Ze,roughnessMap:mt,anisotropy:z,anisotropyMap:Z,clearcoat:bt,clearcoatMap:ae,clearcoatNormalMap:le,clearcoatRoughnessMap:j,dispersion:at,retroreflection:R,iridescence:g,iridescenceMap:te,iridescenceThicknessMap:ue,sheen:B,sheenColorMap:Re,sheenRoughnessMap:de,specularMap:fe,specularColorMap:Ie,specularIntensityMap:ke,transmission:q,transmissionMap:Xe,thicknessMap:G,gradientMap:he,opaque:x.transparent===!1&&x.blending===ns&&x.alphaToCoverage===!1,alphaMap:ne,alphaTest:pe,alphaHash:ye,combine:x.combine,mapUv:ie&&_(x.map.channel),aoMapUv:Ee&&_(x.aoMap.channel),lightMapUv:We&&_(x.lightMap.channel),bumpMapUv:He&&_(x.bumpMap.channel),normalMapUv:rt&&_(x.normalMap.channel),displacementMapUv:Be&&_(x.displacementMap.channel),emissiveMapUv:$e&&_(x.emissiveMap.channel),metalnessMapUv:Ze&&_(x.metalnessMap.channel),roughnessMapUv:mt&&_(x.roughnessMap.channel),anisotropyMapUv:Z&&_(x.anisotropyMap.channel),clearcoatMapUv:ae&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:le&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:j&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:te&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:de&&_(x.sheenRoughnessMap.channel),specularMapUv:fe&&_(x.specularMap.channel),specularColorMapUv:Ie&&_(x.specularColorMap.channel),specularIntensityMapUv:ke&&_(x.specularIntensityMap.channel),transmissionMapUv:Xe&&_(x.transmissionMap.channel),thicknessMapUv:G&&_(x.thicknessMap.channel),alphaMapUv:ne&&_(x.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(rt||z),vertexNormals:!!D.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!D.attributes.uv&&(ie||ne),fog:!!A,useFog:x.fog===!0,fogExp2:!!A&&A.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||D.attributes.normal===void 0&&rt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:ve,skinning:V.isSkinnedMesh===!0,hasPositionAttribute:D.attributes.position!==void 0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:oe,numSunLights:C.sun.length,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numSunLightShadows:C.sunShadowMap.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numLightProbeGrids:E.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&N.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ue,decodeVideoTexture:ie&&x.map.isVideoTexture===!0&&tt.getTransfer(x.map.colorSpace)===ut,decodeVideoTextureEmissive:$e&&x.emissiveMap.isVideoTexture===!0&&tt.getTransfer(x.emissiveMap.colorSpace)===ut,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===qn,flipSided:x.side===$t,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:re&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(re&&x.extensions.multiDraw===!0||H)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ce.vertexUv1s=l.has(1),Ce.vertexUv2s=l.has(2),Ce.vertexUv3s=l.has(3),l.clear(),Ce}function d(x){const C=[];if(x.shaderID?C.push(x.shaderID):(C.push(x.customVertexShaderID),C.push(x.customFragmentShaderID)),x.defines!==void 0)for(const N in x.defines)C.push(N),C.push(x.defines[N]);return x.isRawShaderMaterial===!1&&(u(C,x),v(C,x),C.push(n.outputColorSpace)),C.push(x.customProgramCacheKey),C.join()}function u(x,C){x.push(C.precision),x.push(C.outputColorSpace),x.push(C.envMapMode),x.push(C.envMapCubeUVHeight),x.push(C.mapUv),x.push(C.alphaMapUv),x.push(C.lightMapUv),x.push(C.aoMapUv),x.push(C.bumpMapUv),x.push(C.normalMapUv),x.push(C.displacementMapUv),x.push(C.emissiveMapUv),x.push(C.metalnessMapUv),x.push(C.roughnessMapUv),x.push(C.anisotropyMapUv),x.push(C.clearcoatMapUv),x.push(C.clearcoatNormalMapUv),x.push(C.clearcoatRoughnessMapUv),x.push(C.iridescenceMapUv),x.push(C.iridescenceThicknessMapUv),x.push(C.sheenColorMapUv),x.push(C.sheenRoughnessMapUv),x.push(C.specularMapUv),x.push(C.specularColorMapUv),x.push(C.specularIntensityMapUv),x.push(C.transmissionMapUv),x.push(C.thicknessMapUv),x.push(C.combine),x.push(C.fogExp2),x.push(C.sizeAttenuation),x.push(C.morphTargetsCount),x.push(C.morphAttributeCount),x.push(C.numSunLights),x.push(C.numDirLights),x.push(C.numPointLights),x.push(C.numSpotLights),x.push(C.numSpotLightMaps),x.push(C.numHemiLights),x.push(C.numRectAreaLights),x.push(C.numSunLightShadows),x.push(C.numDirLightShadows),x.push(C.numPointLightShadows),x.push(C.numSpotLightShadows),x.push(C.numSpotLightShadowsWithMaps),x.push(C.numLightProbes),x.push(C.shadowMapType),x.push(C.toneMapping),x.push(C.numClippingPlanes),x.push(C.numClipIntersection),x.push(C.depthPacking)}function v(x,C){a.disableAll(),C.instancing&&a.enable(0),C.instancingColor&&a.enable(1),C.instancingMorph&&a.enable(2),C.matcap&&a.enable(3),C.envMap&&a.enable(4),C.normalMapObjectSpace&&a.enable(5),C.normalMapTangentSpace&&a.enable(6),C.clearcoat&&a.enable(7),C.iridescence&&a.enable(8),C.alphaTest&&a.enable(9),C.vertexColors&&a.enable(10),C.vertexAlphas&&a.enable(11),C.vertexUv1s&&a.enable(12),C.vertexUv2s&&a.enable(13),C.vertexUv3s&&a.enable(14),C.vertexTangents&&a.enable(15),C.anisotropy&&a.enable(16),C.alphaHash&&a.enable(17),C.batching&&a.enable(18),C.dispersion&&a.enable(19),C.retroreflection&&a.enable(24),C.batchingColor&&a.enable(20),C.gradientMap&&a.enable(21),C.packedNormalMap&&a.enable(22),C.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),C.fog&&a.enable(0),C.useFog&&a.enable(1),C.flatShading&&a.enable(2),C.logarithmicDepthBuffer&&a.enable(3),C.reversedDepthBuffer&&a.enable(4),C.skinning&&a.enable(5),C.morphTargets&&a.enable(6),C.morphNormals&&a.enable(7),C.morphColors&&a.enable(8),C.premultipliedAlpha&&a.enable(9),C.shadowMapEnabled&&a.enable(10),C.doubleSided&&a.enable(11),C.flipSided&&a.enable(12),C.useDepthPacking&&a.enable(13),C.dithering&&a.enable(14),C.transmission&&a.enable(15),C.sheen&&a.enable(16),C.opaque&&a.enable(17),C.pointsUvs&&a.enable(18),C.decodeVideoTexture&&a.enable(19),C.decodeVideoTextureEmissive&&a.enable(20),C.alphaToCoverage&&a.enable(21),C.numLightProbeGrids>0&&a.enable(22),C.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function w(x){const C=m[x.type];let N;if(C){const O=An[C];N=f_.clone(O.uniforms)}else N=x.uniforms;return N}function M(x,C){let N=h.get(C);return N!==void 0?++N.usedTimes:(N=new GM(n,C,x,r),c.push(N),h.set(C,N)),N}function b(x){if(--x.usedTimes===0){const C=c.indexOf(x);c[C]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function T(x){o.remove(x)}function P(){o.dispose()}return{getParameters:S,getProgramCacheKey:d,getUniforms:w,acquireProgram:M,releaseProgram:b,releaseShaderCache:T,programs:c,dispose:P}}function KM(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function $M(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Cf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Pf(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(f){let m=0;return f.isInstancedMesh&&(m+=2),f.isSkinnedMesh&&(m+=1),m}function o(f,m,_,S,d,u){let v=n[e];return v===void 0?(v={id:f.id,object:f,geometry:m,material:_,materialVariant:a(f),groupOrder:S,renderOrder:f.renderOrder,z:d,group:u},n[e]=v):(v.id=f.id,v.object=f,v.geometry=m,v.material=_,v.materialVariant=a(f),v.groupOrder=S,v.renderOrder=f.renderOrder,v.z=d,v.group=u),e++,v}function l(f,m,_,S,d,u,v){v.reversedDepth===!0&&(d=-d);const w=o(f,m,_,S,d,u);_.transmission>0?i.push(w):_.transparent===!0?r.push(w):t.push(w)}function c(f,m,_,S,d,u){const v=o(f,m,_,S,d,u);_.transmission>0?i.unshift(v):_.transparent===!0?r.unshift(v):t.unshift(v)}function h(f,m){t.length>1&&t.sort(f||$M),i.length>1&&i.sort(m||Cf),r.length>1&&r.sort(m||Cf)}function p(){for(let f=e,m=n.length;f<m;f++){const _=n[f];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:p,sort:h}}function ZM(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new Pf,n.set(i,[a])):r>=s.length?(a=new Pf,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function JM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new $,color:new et};break;case"SpotLight":t={position:new $,direction:new $,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new $,color:new et,distance:0,decay:0};break;case"HemisphereLight":t={direction:new $,skyColor:new et,groundColor:new et};break;case"RectAreaLight":t={color:new et,position:new $,halfWidth:new $,halfHeight:new $};break}return n[e.id]=t,t}}}function QM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let jM=0;function ey(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function ty(n){const e=new JM,t=QM(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new $);const r=new $,s=new xt,a=new xt;function o(c){let h=0,p=0,f=0;for(let V=0;V<9;V++)i.probe[V].set(0,0,0);let m=0,_=0,S=0,d=0,u=0,v=0,w=0,M=0,b=0,T=0,P=0,x=0,C=0,N=0;c.sort(ey);for(let V=0,E=c.length;V<E;V++){const A=c[V],D=A.color,U=A.intensity,F=A.distance;let W=null;if(A.shadow&&A.shadow.map&&(A.shadow.map.texture.format===Vi?W=A.shadow.map.texture:W=A.shadow.map.depthTexture||A.shadow.map.texture),A.isAmbientLight)h+=D.r*U,p+=D.g*U,f+=D.b*U;else if(A.isLightProbe){for(let L=0;L<9;L++)i.probe[L].addScaledVector(A.sh.coefficients[L],U);N++}else if(A.isSunLight){const L=e.get(A);if(L.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const I=A.shadow,X=t.get(A);X.shadowIntensity=I.intensity,X.shadowBias=I.bias,X.shadowNormalBias=I.normalBias,X.shadowRadius=I.radius,X.shadowMapSize.copy(I.mapSize).multiply(I.getFrameExtents()),i.sunShadow[_]=X,i.sunShadowMap[_]=W;const se=I.getViewportCount();for(let oe=0;oe<se;oe++)i.sunShadowMatrix[S+oe]=I.getMatrix(oe),i.sunShadowCascade[S+oe]=I._cascadeData[oe];S+=se,_++}i.sun[m]=L,m++}else if(A.isDirectionalLight){const L=e.get(A);if(L.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const I=A.shadow,X=t.get(A);X.shadowIntensity=I.intensity,X.shadowBias=I.bias,X.shadowNormalBias=I.normalBias,X.shadowRadius=I.radius,X.shadowMapSize=I.mapSize,i.directionalShadow[d]=X,i.directionalShadowMap[d]=W,i.directionalShadowMatrix[d]=A.shadow.matrix,b++}i.directional[d]=L,d++}else if(A.isSpotLight){const L=e.get(A);L.position.setFromMatrixPosition(A.matrixWorld),L.color.copy(D).multiplyScalar(U),L.distance=F,L.coneCos=Math.cos(A.angle),L.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),L.decay=A.decay,i.spot[v]=L;const I=A.shadow;if(A.map&&(i.spotLightMap[x]=A.map,x++,I.updateMatrices(A),A.castShadow&&C++),i.spotLightMatrix[v]=I.matrix,A.castShadow){const X=t.get(A);X.shadowIntensity=I.intensity,X.shadowBias=I.bias,X.shadowNormalBias=I.normalBias,X.shadowRadius=I.radius,X.shadowMapSize=I.mapSize,i.spotShadow[v]=X,i.spotShadowMap[v]=W,P++}v++}else if(A.isRectAreaLight){const L=e.get(A);L.color.copy(D).multiplyScalar(U),L.halfWidth.set(A.width*.5,0,0),L.halfHeight.set(0,A.height*.5,0),i.rectArea[w]=L,w++}else if(A.isPointLight){const L=e.get(A);if(L.color.copy(A.color).multiplyScalar(A.intensity),L.distance=A.distance,L.decay=A.decay,A.castShadow){const I=A.shadow,X=t.get(A);X.shadowIntensity=I.intensity,X.shadowBias=I.bias,X.shadowNormalBias=I.normalBias,X.shadowRadius=I.radius,X.shadowMapSize=I.mapSize,X.shadowCameraNear=I.camera.near,X.shadowCameraFar=I.camera.far,i.pointShadow[u]=X,i.pointShadowMap[u]=W,i.pointShadowMatrix[u]=A.shadow.matrix,T++}i.point[u]=L,u++}else if(A.isHemisphereLight){const L=e.get(A);L.skyColor.copy(A.color).multiplyScalar(U),L.groundColor.copy(A.groundColor).multiplyScalar(U),i.hemi[M]=L,M++}}w>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ge.LTC_FLOAT_1,i.rectAreaLTC2=ge.LTC_FLOAT_2):(i.rectAreaLTC1=ge.LTC_HALF_1,i.rectAreaLTC2=ge.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=p,i.ambient[2]=f;const O=i.hash;(O.sunLength!==m||O.directionalLength!==d||O.pointLength!==u||O.spotLength!==v||O.rectAreaLength!==w||O.hemiLength!==M||O.numSunShadows!==_||O.numDirectionalShadows!==b||O.numPointShadows!==T||O.numSpotShadows!==P||O.numSpotMaps!==x||O.numLightProbes!==N)&&(i.sun.length=m,i.directional.length=d,i.spot.length=v,i.rectArea.length=w,i.point.length=u,i.hemi.length=M,i.sunShadow.length=_,i.sunShadowMap.length=_,i.sunShadowMatrix.length=S,i.sunShadowCascade.length=S,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.directionalShadowMatrix.length=b,i.pointShadow.length=T,i.pointShadowMap.length=T,i.pointShadowMatrix.length=T,i.spotShadow.length=P,i.spotShadowMap.length=P,i.spotLightMatrix.length=P+x-C,i.spotLightMap.length=x,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=N,O.sunLength=m,O.directionalLength=d,O.pointLength=u,O.spotLength=v,O.rectAreaLength=w,O.hemiLength=M,O.numSunShadows=_,O.numDirectionalShadows=b,O.numPointShadows=T,O.numSpotShadows=P,O.numSpotMaps=x,O.numLightProbes=N,i.version=jM++)}function l(c,h){let p=0,f=0,m=0,_=0,S=0,d=0;const u=h.matrixWorldInverse;for(let v=0,w=c.length;v<w;v++){const M=c[v];if(M.isSunLight){const b=i.sun[p];b.direction.setFromMatrixPosition(M.matrixWorld),b.direction.transformDirection(u),p++}else if(M.isDirectionalLight){const b=i.directional[f];b.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(u),f++}else if(M.isSpotLight){const b=i.spot[_];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(u),b.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(u),_++}else if(M.isRectAreaLight){const b=i.rectArea[S];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(u),a.identity(),s.copy(M.matrixWorld),s.premultiply(u),a.extractRotation(s),b.halfWidth.set(M.width*.5,0,0),b.halfHeight.set(0,M.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),S++}else if(M.isPointLight){const b=i.point[m];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(u),m++}else if(M.isHemisphereLight){const b=i.hemi[d];b.direction.setFromMatrixPosition(M.matrixWorld),b.direction.transformDirection(u),d++}}}return{setup:o,setupView:l,state:i}}function Lf(n){const e=new ty(n),t=[],i=[],r=[];function s(f){p.camera=f,t.length=0,i.length=0,r.length=0}function a(f){t.push(f)}function o(f){i.push(f)}function l(f){r.push(f)}function c(){e.setup(t)}function h(f){e.setupView(t,f)}const p={lightsArray:t,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:p,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function ny(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Lf(n),e.set(r,[o])):s>=a.length?(o=new Lf(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const iy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ry=`uniform sampler2D shadow_pass;
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
}`,sy=[new $(1,0,0),new $(-1,0,0),new $(0,1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1)],ay=[new $(0,-1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1),new $(0,-1,0),new $(0,-1,0)],Df=new xt,Vr=new $,zo=new $;function oy(n,e,t){let i=new xc;const r=new it,s=new it,a=new vt,o=new m_,l=new g_,c={},h=t.maxTextureSize,p={[Hi]:$t,[$t]:Hi,[qn]:qn},f=new Nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new it},radius:{value:4}},vertexShader:iy,fragmentShader:ry}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const _=new sn;_.setAttribute("position",new Dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new Et(_,f),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=aa;let u=this.type;this.render=function(T,P,x){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||T.length===0)return;this.type===t0&&(Ge("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=aa);const C=n.getRenderTarget(),N=n.getActiveCubeFace(),O=n.getActiveMipmapLevel(),V=n.state;V.setBlending(Jn),V.buffers.depth.getReversed()===!0?V.buffers.color.setClear(0,0,0,0):V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const E=u!==this.type;E&&P.traverse(function(A){A.material&&(Array.isArray(A.material)?A.material.forEach(D=>D.needsUpdate=!0):A.material.needsUpdate=!0)});for(let A=0,D=T.length;A<D;A++){const U=T[A],F=U.shadow;if(F===void 0){Ge("WebGLShadowMap:",U,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;r.copy(F.mapSize);const W=F.getFrameExtents();r.multiply(W),s.copy(F.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/W.x),r.x=s.x*W.x,F.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/W.y),r.y=s.y*W.y,F.mapSize.y=s.y));const L=n.state.buffers.depth.getReversed();if(F.camera._reversedDepth=L,F.map===null||E===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===Yr){if(U.isPointLight){Ge("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new Sn(r.x,r.y,{format:Vi,type:Un,minFilter:Ot,magFilter:Ot,generateMipmaps:!1}),F.map.texture.name=U.name+".shadowMap",F.map.depthTexture=new fs(r.x,r.y,Cn),F.map.depthTexture.name=U.name+".shadowMapDepth",F.map.depthTexture.format=ei,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Lt,F.map.depthTexture.magFilter=Lt}else U.isPointLight?(F.map=new Ph(r.x),F.map.depthTexture=new c_(r.x,In)):(F.map=new Sn(r.x,r.y),F.map.depthTexture=new fs(r.x,r.y,In)),F.map.depthTexture.name=U.name+".shadowMap",F.map.depthTexture.format=ei,this.type===aa?(F.map.depthTexture.compareFunction=L?gc:mc,F.map.depthTexture.minFilter=Ot,F.map.depthTexture.magFilter=Ot):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Lt,F.map.depthTexture.magFilter=Lt);F.camera.updateProjectionMatrix()}F.map.isWebGLCubeRenderTarget!==!0&&(F.map.width!==r.x||F.map.height!==r.y)&&F.map.setSize(r.x,r.y);const I=F.map.isWebGLCubeRenderTarget?6:F.getViewportCount();U.isPointLight!==!0&&F.updateMatrices(U,x);for(let X=0;X<I;X++){const se=F.getCamera(X);if(U.isPointLight){const oe=F.camera,Me=F.matrix,Ne=U.distance||oe.far;Ne!==oe.far&&(oe.far=Ne,oe.updateProjectionMatrix()),Vr.setFromMatrixPosition(U.matrixWorld),oe.position.copy(Vr),zo.copy(oe.position),zo.add(sy[X]),oe.up.copy(ay[X]),oe.lookAt(zo),oe.updateMatrixWorld(),Me.makeTranslation(-Vr.x,-Vr.y,-Vr.z),Df.multiplyMatrices(oe.projectionMatrix,oe.matrixWorldInverse),F._frustum.setFromProjectionMatrix(Df,oe.coordinateSystem,oe.reversedDepth)}if(F.map.isWebGLCubeRenderTarget)n.setRenderTarget(F.map,X),n.clear();else{X===0&&(n.setRenderTarget(F.map),n.clear());const oe=F.getViewport(X);a.set(s.x*oe.x,s.y*oe.y,s.x*oe.z,s.y*oe.w),V.viewport(a)}i=F.getFrustum(X),M(P,x,se,U,this.type)}F.isPointLightShadow!==!0&&this.type===Yr&&v(F,x),F.needsUpdate=!1}u=this.type,d.needsUpdate=!1,n.setRenderTarget(C,N,O)};function v(T,P){const x=e.update(S);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null?T.mapPass=new Sn(r.x,r.y,{format:Vi,type:Un}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),f.uniforms.shadow_pass.value=T.map.depthTexture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(P,null,x,f,S,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value.set(T.map.width,T.map.height),m.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(P,null,x,m,S,null)}function w(T,P,x,C){let N=null;const O=x.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(O!==void 0)N=O;else if(N=x.isPointLight===!0?l:o,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const V=N.uuid,E=P.uuid;let A=c[V];A===void 0&&(A={},c[V]=A);let D=A[E];D===void 0&&(D=N.clone(),A[E]=D,P.addEventListener("dispose",b)),N=D}if(N.visible=P.visible,N.wireframe=P.wireframe,C===Yr?N.side=P.shadowSide!==null?P.shadowSide:P.side:N.side=P.shadowSide!==null?P.shadowSide:p[P.side],N.alphaMap=P.alphaMap,N.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,N.map=P.map,N.clipShadows=P.clipShadows,N.clippingPlanes=P.clippingPlanes,N.clipIntersection=P.clipIntersection,N.displacementMap=P.displacementMap,N.displacementScale=P.displacementScale,N.displacementBias=P.displacementBias,N.wireframeLinewidth=P.wireframeLinewidth,N.linewidth=P.linewidth,x.isPointLight===!0&&N.isMeshDistanceMaterial===!0){const V=n.properties.get(N);V.light=x}return N}function M(T,P,x,C,N){if(T.visible===!1)return;if(T.layers.test(P.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&N===Yr)&&(!T.frustumCulled||T.intersectsFrustum(i))){T.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,T.matrixWorld);const E=e.update(T),A=T.material;if(Array.isArray(A)){const D=E.groups;for(let U=0,F=D.length;U<F;U++){const W=D[U],L=A[W.materialIndex];if(L&&L.visible){const I=w(T,L,C,N);T.onBeforeShadow(n,T,P,x,E,I,W),n.renderBufferDirect(x,null,E,I,T,W),T.onAfterShadow(n,T,P,x,E,I,W)}}}else if(A.visible){const D=w(T,A,C,N);T.onBeforeShadow(n,T,P,x,E,D,null),n.renderBufferDirect(x,null,E,D,T,null),T.onAfterShadow(n,T,P,x,E,D,null)}}const V=T.children;for(let E=0,A=V.length;E<A;E++)M(V[E],P,x,C,N)}function b(T){T.target.removeEventListener("dispose",b);for(const x in c){const C=c[x],N=T.target.uuid;N in C&&(C[N].dispose(),delete C[N])}}}function ly(n,e){function t(){let G=!1;const he=new vt;let ne=null;const pe=new vt(0,0,0,0);return{setMask:function(ye){ne!==ye&&!G&&(n.colorMask(ye,ye,ye,ye),ne=ye)},setLocked:function(ye){G=ye},setClear:function(ye,re,Ue,Ce,ht){ht===!0&&(ye*=Ce,re*=Ce,Ue*=Ce),he.set(ye,re,Ue,Ce),pe.equals(he)===!1&&(n.clearColor(ye,re,Ue,Ce),pe.copy(he))},reset:function(){G=!1,ne=null,pe.set(-1,0,0,0)}}}function i(){let G=!1,he=!1,ne=null,pe=null,ye=null;return{setReversed:function(re){if(he!==re){const Ue=e.get("EXT_clip_control");re?Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.ZERO_TO_ONE_EXT):Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.NEGATIVE_ONE_TO_ONE_EXT),he=re;const Ce=ye;ye=null,this.setClear(Ce)}},getReversed:function(){return he},setTest:function(re){re?ee(n.DEPTH_TEST):ve(n.DEPTH_TEST)},setMask:function(re){ne!==re&&!G&&(n.depthMask(re),ne=re)},setFunc:function(re){if(he&&(re=F0[re]),pe!==re){switch(re){case tl:n.depthFunc(n.NEVER);break;case nl:n.depthFunc(n.ALWAYS);break;case il:n.depthFunc(n.LESS);break;case os:n.depthFunc(n.LEQUAL);break;case rl:n.depthFunc(n.EQUAL);break;case sl:n.depthFunc(n.GEQUAL);break;case al:n.depthFunc(n.GREATER);break;case ol:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}pe=re}},setLocked:function(re){G=re},setClear:function(re){ye!==re&&(ye=re,he&&(re=1-re),n.clearDepth(re))},reset:function(){G=!1,ne=null,pe=null,ye=null,he=!1}}}function r(){let G=!1,he=null,ne=null,pe=null,ye=null,re=null,Ue=null,Ce=null,ht=null;return{setTest:function(lt){G||(lt?ee(n.STENCIL_TEST):ve(n.STENCIL_TEST))},setMask:function(lt){he!==lt&&!G&&(n.stencilMask(lt),he=lt)},setFunc:function(lt,dn,yn){(ne!==lt||pe!==dn||ye!==yn)&&(n.stencilFunc(lt,dn,yn),ne=lt,pe=dn,ye=yn)},setOp:function(lt,dn,yn){(re!==lt||Ue!==dn||Ce!==yn)&&(n.stencilOp(lt,dn,yn),re=lt,Ue=dn,Ce=yn)},setLocked:function(lt){G=lt},setClear:function(lt){ht!==lt&&(n.clearStencil(lt),ht=lt)},reset:function(){G=!1,he=null,ne=null,pe=null,ye=null,re=null,Ue=null,Ce=null,ht=null}}}const s=new t,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let h={},p={},f={},m=new WeakMap,_=[],S=null,d=!1,u=null,v=null,w=null,M=null,b=null,T=null,P=null,x=new et(0,0,0),C=0,N=!1,O=null,V=null,E=null,A=null,D=null;const U=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,W=0;const L=n.getParameter(n.VERSION);L.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(L)[1]),F=W>=1):L.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(L)[1]),F=W>=2);let I=null,X={};const se=n.getParameter(n.SCISSOR_BOX),oe=n.getParameter(n.VIEWPORT),Me=new vt().fromArray(se),Ne=new vt().fromArray(oe);function Oe(G,he,ne,pe){const ye=new Uint8Array(4),re=n.createTexture();n.bindTexture(G,re),n.texParameteri(G,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(G,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ue=0;Ue<ne;Ue++)G===n.TEXTURE_3D||G===n.TEXTURE_2D_ARRAY?n.texImage3D(he,0,n.RGBA,1,1,pe,0,n.RGBA,n.UNSIGNED_BYTE,ye):n.texImage2D(he+Ue,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ye);return re}const Q={};Q[n.TEXTURE_2D]=Oe(n.TEXTURE_2D,n.TEXTURE_2D,1),Q[n.TEXTURE_CUBE_MAP]=Oe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[n.TEXTURE_2D_ARRAY]=Oe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Q[n.TEXTURE_3D]=Oe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ee(n.DEPTH_TEST),a.setFunc(os),He(!1),rt(Uu),ee(n.CULL_FACE),Ee(Jn);function ee(G){h[G]!==!0&&(n.enable(G),h[G]=!0)}function ve(G){h[G]!==!1&&(n.disable(G),h[G]=!1)}function De(G,he){return f[G]!==he?(n.bindFramebuffer(G,he),f[G]=he,G===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=he),G===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=he),!0):!1}function H(G,he){let ne=_,pe=!1;if(G){ne=m.get(he),ne===void 0&&(ne=[],m.set(he,ne));const ye=G.textures;if(ne.length!==ye.length||ne[0]!==n.COLOR_ATTACHMENT0){for(let re=0,Ue=ye.length;re<Ue;re++)ne[re]=n.COLOR_ATTACHMENT0+re;ne.length=ye.length,pe=!0}}else ne[0]!==n.BACK&&(ne[0]=n.BACK,pe=!0);pe&&n.drawBuffers(ne)}function ie(G){return S!==G?(n.useProgram(G),S=G,!0):!1}const me={[fr]:n.FUNC_ADD,[i0]:n.FUNC_SUBTRACT,[r0]:n.FUNC_REVERSE_SUBTRACT};me[s0]=n.MIN,me[a0]=n.MAX;const ce={[o0]:n.ZERO,[l0]:n.ONE,[c0]:n.SRC_COLOR,[Zd]:n.SRC_ALPHA,[m0]:n.SRC_ALPHA_SATURATE,[h0]:n.DST_COLOR,[f0]:n.DST_ALPHA,[u0]:n.ONE_MINUS_SRC_COLOR,[Jd]:n.ONE_MINUS_SRC_ALPHA,[p0]:n.ONE_MINUS_DST_COLOR,[d0]:n.ONE_MINUS_DST_ALPHA,[g0]:n.CONSTANT_COLOR,[_0]:n.ONE_MINUS_CONSTANT_COLOR,[v0]:n.CONSTANT_ALPHA,[x0]:n.ONE_MINUS_CONSTANT_ALPHA};function Ee(G,he,ne,pe,ye,re,Ue,Ce,ht,lt){if(G===Jn){d===!0&&(ve(n.BLEND),d=!1);return}if(d===!1&&(ee(n.BLEND),d=!0),G!==n0){if(G!==u||lt!==N){if((v!==fr||b!==fr)&&(n.blendEquation(n.FUNC_ADD),v=fr,b=fr),lt)switch(G){case ns:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Nu:n.blendFunc(n.ONE,n.ONE);break;case Fu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ou:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:ot("WebGLState: Invalid blending: ",G);break}else switch(G){case ns:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Nu:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Fu:ot("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ou:ot("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ot("WebGLState: Invalid blending: ",G);break}w=null,M=null,T=null,P=null,x.set(0,0,0),C=0,u=G,N=lt}return}ye=ye||he,re=re||ne,Ue=Ue||pe,(he!==v||ye!==b)&&(n.blendEquationSeparate(me[he],me[ye]),v=he,b=ye),(ne!==w||pe!==M||re!==T||Ue!==P)&&(n.blendFuncSeparate(ce[ne],ce[pe],ce[re],ce[Ue]),w=ne,M=pe,T=re,P=Ue),(Ce.equals(x)===!1||ht!==C)&&(n.blendColor(Ce.r,Ce.g,Ce.b,ht),x.copy(Ce),C=ht),u=G,N=!1}function We(G,he){G.side===qn?ve(n.CULL_FACE):ee(n.CULL_FACE);let ne=G.side===$t;he&&(ne=!ne),He(ne),G.blending===ns&&G.transparent===!1?Ee(Jn):Ee(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),a.setFunc(G.depthFunc),a.setTest(G.depthTest),a.setMask(G.depthWrite),s.setMask(G.colorWrite);const pe=G.stencilWrite;o.setTest(pe),pe&&(o.setMask(G.stencilWriteMask),o.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),o.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),$e(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?ee(n.SAMPLE_ALPHA_TO_COVERAGE):ve(n.SAMPLE_ALPHA_TO_COVERAGE)}function He(G){O!==G&&(G?n.frontFace(n.CW):n.frontFace(n.CCW),O=G)}function rt(G){G!==jg?(ee(n.CULL_FACE),G!==V&&(G===Uu?n.cullFace(n.BACK):G===e0?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ve(n.CULL_FACE),V=G}function Be(G){G!==E&&(F&&n.lineWidth(G),E=G)}function $e(G,he,ne){G?(ee(n.POLYGON_OFFSET_FILL),(A!==he||D!==ne)&&(A=he,D=ne,a.getReversed()&&(he=-he),n.polygonOffset(he,ne))):ve(n.POLYGON_OFFSET_FILL)}function Ze(G){G?ee(n.SCISSOR_TEST):ve(n.SCISSOR_TEST)}function mt(G){G===void 0&&(G=n.TEXTURE0+U-1),I!==G&&(n.activeTexture(G),I=G)}function z(G,he,ne){ne===void 0&&(I===null?ne=n.TEXTURE0+U-1:ne=I);let pe=X[ne];pe===void 0&&(pe={type:void 0,texture:void 0},X[ne]=pe),(pe.type!==G||pe.texture!==he)&&(I!==ne&&(n.activeTexture(ne),I=ne),n.bindTexture(G,he||Q[G]),pe.type=G,pe.texture=he)}function bt(){const G=X[I];G!==void 0&&G.type!==void 0&&(n.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function at(){try{n.compressedTexImage2D(...arguments)}catch(G){ot("WebGLState:",G)}}function R(){try{n.compressedTexImage3D(...arguments)}catch(G){ot("WebGLState:",G)}}function g(){try{n.texSubImage2D(...arguments)}catch(G){ot("WebGLState:",G)}}function B(){try{n.texSubImage3D(...arguments)}catch(G){ot("WebGLState:",G)}}function q(){try{n.compressedTexSubImage2D(...arguments)}catch(G){ot("WebGLState:",G)}}function Z(){try{n.compressedTexSubImage3D(...arguments)}catch(G){ot("WebGLState:",G)}}function ae(){try{n.texStorage2D(...arguments)}catch(G){ot("WebGLState:",G)}}function le(){try{n.texStorage3D(...arguments)}catch(G){ot("WebGLState:",G)}}function j(){try{n.texImage2D(...arguments)}catch(G){ot("WebGLState:",G)}}function te(){try{n.texImage3D(...arguments)}catch(G){ot("WebGLState:",G)}}function ue(G){return p[G]!==void 0?p[G]:n.getParameter(G)}function Re(G,he){p[G]!==he&&(n.pixelStorei(G,he),p[G]=he)}function de(G){Me.equals(G)===!1&&(n.scissor(G.x,G.y,G.z,G.w),Me.copy(G))}function fe(G){Ne.equals(G)===!1&&(n.viewport(G.x,G.y,G.z,G.w),Ne.copy(G))}function Ie(G,he){let ne=c.get(he);ne===void 0&&(ne=new WeakMap,c.set(he,ne));let pe=ne.get(G);pe===void 0&&(pe=n.getUniformBlockIndex(he,G.name),ne.set(G,pe))}function ke(G,he){const pe=c.get(he).get(G);l.get(he)!==pe&&(n.uniformBlockBinding(he,pe,G.__bindingPointIndex),l.set(he,pe))}function Xe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},p={},I=null,X={},f={},m=new WeakMap,_=[],S=null,d=!1,u=null,v=null,w=null,M=null,b=null,T=null,P=null,x=new et(0,0,0),C=0,N=!1,O=null,V=null,E=null,A=null,D=null,Me.set(0,0,n.canvas.width,n.canvas.height),Ne.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ee,disable:ve,bindFramebuffer:De,drawBuffers:H,useProgram:ie,setBlending:Ee,setMaterial:We,setFlipSided:He,setCullFace:rt,setLineWidth:Be,setPolygonOffset:$e,setScissorTest:Ze,activeTexture:mt,bindTexture:z,unbindTexture:bt,compressedTexImage2D:at,compressedTexImage3D:R,texImage2D:j,texImage3D:te,pixelStorei:Re,getParameter:ue,updateUBOMapping:Ie,uniformBlockBinding:ke,texStorage2D:ae,texStorage3D:le,texSubImage2D:g,texSubImage3D:B,compressedTexSubImage2D:q,compressedTexSubImage3D:Z,scissor:de,viewport:fe,reset:Xe}}function cy(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new it,h=new WeakMap,p=new Set;let f;const m=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(R,g){return _?new OffscreenCanvas(R,g):Ta("canvas")}function d(R,g,B){let q=1;const Z=at(R);if((Z.width>B||Z.height>B)&&(q=B/Math.max(Z.width,Z.height)),q<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const ae=Math.floor(q*Z.width),le=Math.floor(q*Z.height);f===void 0&&(f=S(ae,le));const j=g?S(ae,le):f;return j.width=ae,j.height=le,j.getContext("2d").drawImage(R,0,0,ae,le),Ge("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+ae+"x"+le+")."),j}else return"data"in R&&Ge("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),R;return R}function u(R){return R.generateMipmaps}function v(R){n.generateMipmap(R)}function w(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(R,g,B,q,Z,ae=!1){if(R!==null){if(n[R]!==void 0)return n[R];Ge("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let le;q&&(le=e.get("EXT_texture_norm16"),le||Ge("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let j=g;if(g===n.RED&&(B===n.FLOAT&&(j=n.R32F),B===n.HALF_FLOAT&&(j=n.R16F),B===n.UNSIGNED_BYTE&&(j=n.R8),B===n.UNSIGNED_SHORT&&le&&(j=le.R16_EXT),B===n.SHORT&&le&&(j=le.R16_SNORM_EXT)),g===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&(j=n.R8UI),B===n.UNSIGNED_SHORT&&(j=n.R16UI),B===n.UNSIGNED_INT&&(j=n.R32UI),B===n.BYTE&&(j=n.R8I),B===n.SHORT&&(j=n.R16I),B===n.INT&&(j=n.R32I)),g===n.RG&&(B===n.FLOAT&&(j=n.RG32F),B===n.HALF_FLOAT&&(j=n.RG16F),B===n.UNSIGNED_BYTE&&(j=n.RG8),B===n.UNSIGNED_SHORT&&le&&(j=le.RG16_EXT),B===n.SHORT&&le&&(j=le.RG16_SNORM_EXT)),g===n.RG_INTEGER&&(B===n.UNSIGNED_BYTE&&(j=n.RG8UI),B===n.UNSIGNED_SHORT&&(j=n.RG16UI),B===n.UNSIGNED_INT&&(j=n.RG32UI),B===n.BYTE&&(j=n.RG8I),B===n.SHORT&&(j=n.RG16I),B===n.INT&&(j=n.RG32I)),g===n.RGB_INTEGER&&(B===n.UNSIGNED_BYTE&&(j=n.RGB8UI),B===n.UNSIGNED_SHORT&&(j=n.RGB16UI),B===n.UNSIGNED_INT&&(j=n.RGB32UI),B===n.BYTE&&(j=n.RGB8I),B===n.SHORT&&(j=n.RGB16I),B===n.INT&&(j=n.RGB32I)),g===n.RGBA_INTEGER&&(B===n.UNSIGNED_BYTE&&(j=n.RGBA8UI),B===n.UNSIGNED_SHORT&&(j=n.RGBA16UI),B===n.UNSIGNED_INT&&(j=n.RGBA32UI),B===n.BYTE&&(j=n.RGBA8I),B===n.SHORT&&(j=n.RGBA16I),B===n.INT&&(j=n.RGBA32I)),g===n.RGB&&(B===n.UNSIGNED_SHORT&&le&&(j=le.RGB16_EXT),B===n.SHORT&&le&&(j=le.RGB16_SNORM_EXT),B===n.UNSIGNED_INT_5_9_9_9_REV&&(j=n.RGB9_E5),B===n.UNSIGNED_INT_10F_11F_11F_REV&&(j=n.R11F_G11F_B10F)),g===n.RGBA){const te=ae?ba:tt.getTransfer(Z);B===n.FLOAT&&(j=n.RGBA32F),B===n.HALF_FLOAT&&(j=n.RGBA16F),B===n.UNSIGNED_BYTE&&(j=te===ut?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT&&le&&(j=le.RGBA16_EXT),B===n.SHORT&&le&&(j=le.RGBA16_SNORM_EXT),B===n.UNSIGNED_SHORT_4_4_4_4&&(j=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&(j=n.RGB5_A1)}return(j===n.R16F||j===n.R32F||j===n.RG16F||j===n.RG32F||j===n.RGBA16F||j===n.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function b(R,g){let B;return R?g===null||g===In||g===cs?B=n.DEPTH24_STENCIL8:g===Cn?B=n.DEPTH32F_STENCIL8:g===ls&&(B=n.DEPTH24_STENCIL8,Ge("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===In||g===cs?B=n.DEPTH_COMPONENT24:g===Cn?B=n.DEPTH_COMPONENT32F:g===ls&&(B=n.DEPTH_COMPONENT16),B}function T(R,g){return u(R)===!0||R.isFramebufferTexture&&R.minFilter!==Lt&&R.minFilter!==Ot?Math.log2(Math.max(g.width,g.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?g.mipmaps.length:1}function P(R){const g=R.target;g.removeEventListener("dispose",P),C(g),g.isVideoTexture&&h.delete(g),g.isHTMLTexture&&p.delete(g)}function x(R){const g=R.target;g.removeEventListener("dispose",x),O(g)}function C(R){const g=i.get(R);if(g.__webglInit===void 0)return;const B=R.source,q=m.get(B);if(q){const Z=q[g.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&N(R),Object.keys(q).length===0&&m.delete(B)}i.remove(R)}function N(R){const g=i.get(R);n.deleteTexture(g.__webglTexture);const B=R.source,q=m.get(B);delete q[g.__cacheKey],a.memory.textures--}function O(R){const g=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(g.__webglFramebuffer[q]))for(let Z=0;Z<g.__webglFramebuffer[q].length;Z++)n.deleteFramebuffer(g.__webglFramebuffer[q][Z]);else n.deleteFramebuffer(g.__webglFramebuffer[q]);g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer[q])}else{if(Array.isArray(g.__webglFramebuffer))for(let q=0;q<g.__webglFramebuffer.length;q++)n.deleteFramebuffer(g.__webglFramebuffer[q]);else n.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&n.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let q=0;q<g.__webglColorRenderbuffer.length;q++)g.__webglColorRenderbuffer[q]&&n.deleteRenderbuffer(g.__webglColorRenderbuffer[q]);g.__webglDepthRenderbuffer&&n.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const B=R.textures;for(let q=0,Z=B.length;q<Z;q++){const ae=i.get(B[q]);ae.__webglTexture&&(n.deleteTexture(ae.__webglTexture),a.memory.textures--),i.remove(B[q])}i.remove(R)}let V=0;function E(){V=0}function A(){return V}function D(R){V=R}function U(){const R=V;return R>=r.maxTextures&&Ge("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+r.maxTextures),V+=1,R}function F(R){const g=[];return g.push(R.wrapS),g.push(R.wrapT),g.push(R.wrapR||0),g.push(R.magFilter),g.push(R.minFilter),g.push(R.anisotropy),g.push(R.internalFormat),g.push(R.format),g.push(R.type),g.push(R.generateMipmaps),g.push(R.premultiplyAlpha),g.push(R.flipY),g.push(R.unpackAlignment),g.push(R.colorSpace),g.join()}function W(R,g){const B=i.get(R);if(R.isVideoTexture&&z(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&B.__version!==R.version){const q=R.image;if(q===null)Ge("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)Ge("WebGLRenderer: Texture marked for update but image is incomplete");else{ve(B,R,g);return}}else R.isExternalTexture&&(B.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+g)}function L(R,g){const B=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){ve(B,R,g);return}else R.isExternalTexture&&(B.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+g)}function I(R,g){const B=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){ve(B,R,g);return}t.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+g)}function X(R,g){const B=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&B.__version!==R.version){De(B,R,g);return}t.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+g)}const se={[ll]:n.REPEAT,[Kn]:n.CLAMP_TO_EDGE,[cl]:n.MIRRORED_REPEAT},oe={[Lt]:n.NEAREST,[y0]:n.NEAREST_MIPMAP_NEAREST,[Cs]:n.NEAREST_MIPMAP_LINEAR,[Ot]:n.LINEAR,[co]:n.LINEAR_MIPMAP_NEAREST,[Ui]:n.LINEAR_MIPMAP_LINEAR},Me={[w0]:n.NEVER,[L0]:n.ALWAYS,[A0]:n.LESS,[mc]:n.LEQUAL,[R0]:n.EQUAL,[gc]:n.GEQUAL,[C0]:n.GREATER,[P0]:n.NOTEQUAL};function Ne(R,g){if(g.type===Cn&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===Ot||g.magFilter===co||g.magFilter===Cs||g.magFilter===Ui||g.minFilter===Ot||g.minFilter===co||g.minFilter===Cs||g.minFilter===Ui)&&Ge("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,se[g.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,se[g.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,se[g.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,oe[g.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,oe[g.minFilter]),g.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,Me[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Lt||g.minFilter!==Cs&&g.minFilter!==Ui||g.type===Cn&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");n.texParameterf(R,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function Oe(R,g){let B=!1;R.__webglInit===void 0&&(R.__webglInit=!0,g.addEventListener("dispose",P));const q=g.source;let Z=m.get(q);Z===void 0&&(Z={},m.set(q,Z));const ae=F(g);if(ae!==R.__cacheKey){Z[ae]===void 0&&(Z[ae]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,B=!0),Z[ae].usedTimes++;const le=Z[R.__cacheKey];le!==void 0&&(Z[R.__cacheKey].usedTimes--,le.usedTimes===0&&N(g)),R.__cacheKey=ae,R.__webglTexture=Z[ae].texture}return B}function Q(R,g,B){return Math.floor(Math.floor(R/B)/g)}function ee(R,g,B,q){const ae=R.updateRanges;if(ae.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,g.width,g.height,B,q,g.data);else{ae.sort((Re,de)=>Re.start-de.start);let le=0;for(let Re=1;Re<ae.length;Re++){const de=ae[le],fe=ae[Re],Ie=de.start+de.count,ke=Q(fe.start,g.width,4),Xe=Q(de.start,g.width,4);fe.start<=Ie+1&&ke===Xe&&Q(fe.start+fe.count-1,g.width,4)===ke?de.count=Math.max(de.count,fe.start+fe.count-de.start):(++le,ae[le]=fe)}ae.length=le+1;const j=t.getParameter(n.UNPACK_ROW_LENGTH),te=t.getParameter(n.UNPACK_SKIP_PIXELS),ue=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,g.width);for(let Re=0,de=ae.length;Re<de;Re++){const fe=ae[Re],Ie=Math.floor(fe.start/4),ke=Math.ceil(fe.count/4),Xe=Ie%g.width,G=Math.floor(Ie/g.width),he=ke,ne=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,Xe),t.pixelStorei(n.UNPACK_SKIP_ROWS,G),t.texSubImage2D(n.TEXTURE_2D,0,Xe,G,he,ne,B,q,g.data)}R.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,j),t.pixelStorei(n.UNPACK_SKIP_PIXELS,te),t.pixelStorei(n.UNPACK_SKIP_ROWS,ue)}}function ve(R,g,B){let q=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(q=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(q=n.TEXTURE_3D);const Z=Oe(R,g),ae=g.source;t.bindTexture(q,R.__webglTexture,n.TEXTURE0+B);const le=i.get(ae);if(ae.version!==le.__version||Z===!0){if(t.activeTexture(n.TEXTURE0+B),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){const ne=tt.getPrimaries(tt.workingColorSpace),pe=g.colorSpace===Si?null:tt.getPrimaries(g.colorSpace),ye=g.colorSpace===Si||ne===pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye)}t.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment);let te=d(g.image,!1,r.maxTextureSize);te=bt(g,te);const ue=s.convert(g.format,g.colorSpace),Re=s.convert(g.type);let de=M(g.internalFormat,ue,Re,g.normalized,g.colorSpace,g.isVideoTexture);Ne(q,g);let fe;const Ie=g.mipmaps,ke=g.isVideoTexture!==!0,Xe=le.__version===void 0||Z===!0,G=ae.dataReady,he=T(g,te);if(g.isDepthTexture)de=b(g.format===Ni,g.type),Xe&&(ke?t.texStorage2D(n.TEXTURE_2D,1,de,te.width,te.height):t.texImage2D(n.TEXTURE_2D,0,de,te.width,te.height,0,ue,Re,null));else if(g.isDataTexture)if(Ie.length>0){ke&&Xe&&t.texStorage2D(n.TEXTURE_2D,he,de,Ie[0].width,Ie[0].height);for(let ne=0,pe=Ie.length;ne<pe;ne++)fe=Ie[ne],ke?G&&t.texSubImage2D(n.TEXTURE_2D,ne,0,0,fe.width,fe.height,ue,Re,fe.data):t.texImage2D(n.TEXTURE_2D,ne,de,fe.width,fe.height,0,ue,Re,fe.data);g.generateMipmaps=!1}else ke?(Xe&&t.texStorage2D(n.TEXTURE_2D,he,de,te.width,te.height),G&&ee(g,te,ue,Re)):t.texImage2D(n.TEXTURE_2D,0,de,te.width,te.height,0,ue,Re,te.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){ke&&Xe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,he,de,Ie[0].width,Ie[0].height,te.depth);for(let ne=0,pe=Ie.length;ne<pe;ne++)if(fe=Ie[ne],g.format!==vn)if(ue!==null)if(ke){if(G)if(g.layerUpdates.size>0){const ye=uf(fe.width,fe.height,g.format,g.type);for(const re of g.layerUpdates){const Ue=fe.data.subarray(re*ye/fe.data.BYTES_PER_ELEMENT,(re+1)*ye/fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ne,0,0,re,fe.width,fe.height,1,ue,Ue)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ne,0,0,0,fe.width,fe.height,te.depth,ue,fe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ne,de,fe.width,fe.height,te.depth,0,fe.data,0,0);else Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ke?G&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ne,0,0,0,fe.width,fe.height,te.depth,ue,Re,fe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ne,de,fe.width,fe.height,te.depth,0,ue,Re,fe.data);g.layerUpdates.size>0&&g.clearLayerUpdates()}else{ke&&Xe&&t.texStorage2D(n.TEXTURE_2D,he,de,Ie[0].width,Ie[0].height);for(let ne=0,pe=Ie.length;ne<pe;ne++)fe=Ie[ne],g.format!==vn?ue!==null?ke?G&&t.compressedTexSubImage2D(n.TEXTURE_2D,ne,0,0,fe.width,fe.height,ue,fe.data):t.compressedTexImage2D(n.TEXTURE_2D,ne,de,fe.width,fe.height,0,fe.data):Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?G&&t.texSubImage2D(n.TEXTURE_2D,ne,0,0,fe.width,fe.height,ue,Re,fe.data):t.texImage2D(n.TEXTURE_2D,ne,de,fe.width,fe.height,0,ue,Re,fe.data)}else if(g.isDataArrayTexture)if(ke){if(Xe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,he,de,te.width,te.height,te.depth),G)if(g.layerUpdates.size>0){const ne=uf(te.width,te.height,g.format,g.type);for(const pe of g.layerUpdates){const ye=te.data.subarray(pe*ne/te.data.BYTES_PER_ELEMENT,(pe+1)*ne/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,pe,te.width,te.height,1,ue,Re,ye)}g.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,ue,Re,te.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,de,te.width,te.height,te.depth,0,ue,Re,te.data);else if(g.isData3DTexture)ke?(Xe&&t.texStorage3D(n.TEXTURE_3D,he,de,te.width,te.height,te.depth),G&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,ue,Re,te.data)):t.texImage3D(n.TEXTURE_3D,0,de,te.width,te.height,te.depth,0,ue,Re,te.data);else if(g.isFramebufferTexture){if(Xe)if(ke)t.texStorage2D(n.TEXTURE_2D,he,de,te.width,te.height);else{let ne=te.width,pe=te.height;for(let ye=0;ye<he;ye++)t.texImage2D(n.TEXTURE_2D,ye,de,ne,pe,0,ue,Re,null),ne>>=1,pe>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in n){const ne=n.canvas;if(ne.hasAttribute("layoutsubtree")||ne.setAttribute("layoutsubtree","true"),te.parentNode!==ne){ne.appendChild(te),p.add(g),ne.onpaint=pe=>{const ye=pe.changedElements;for(const re of p)ye.includes(re.image)&&(re.needsUpdate=!0)},ne.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,te);else{const ye=n.RGBA,re=n.RGBA,Ue=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,ye,re,Ue,te)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Ie.length>0){if(ke&&Xe){const ne=at(Ie[0]);t.texStorage2D(n.TEXTURE_2D,he,de,ne.width,ne.height)}for(let ne=0,pe=Ie.length;ne<pe;ne++)fe=Ie[ne],ke?G&&t.texSubImage2D(n.TEXTURE_2D,ne,0,0,ue,Re,fe):t.texImage2D(n.TEXTURE_2D,ne,de,ue,Re,fe);g.generateMipmaps=!1}else if(ke){if(Xe){const ne=at(te);t.texStorage2D(n.TEXTURE_2D,he,de,ne.width,ne.height)}G&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ue,Re,te)}else t.texImage2D(n.TEXTURE_2D,0,de,ue,Re,te);u(g)&&v(q),le.__version=ae.version,g.onUpdate&&g.onUpdate(g)}R.__version=g.version}function De(R,g,B){if(g.image.length!==6)return;const q=Oe(R,g),Z=g.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+B);const ae=i.get(Z);if(Z.version!==ae.__version||q===!0){t.activeTexture(n.TEXTURE0+B);const le=tt.getPrimaries(tt.workingColorSpace),j=g.colorSpace===Si?null:tt.getPrimaries(g.colorSpace),te=g.colorSpace===Si||le===j?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);const ue=g.isCompressedTexture||g.image[0].isCompressedTexture,Re=g.image[0]&&g.image[0].isDataTexture,de=[];for(let re=0;re<6;re++)!ue&&!Re?de[re]=d(g.image[re],!0,r.maxCubemapSize):de[re]=Re?g.image[re].image:g.image[re],de[re]=bt(g,de[re]);const fe=de[0],Ie=s.convert(g.format,g.colorSpace),ke=s.convert(g.type),Xe=M(g.internalFormat,Ie,ke,g.normalized,g.colorSpace),G=g.isVideoTexture!==!0,he=ae.__version===void 0||q===!0,ne=Z.dataReady;let pe=T(g,fe);Ne(n.TEXTURE_CUBE_MAP,g);let ye;if(ue){G&&he&&t.texStorage2D(n.TEXTURE_CUBE_MAP,pe,Xe,fe.width,fe.height);for(let re=0;re<6;re++){ye=de[re].mipmaps;for(let Ue=0;Ue<ye.length;Ue++){const Ce=ye[Ue];g.format!==vn?Ie!==null?G?ne&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ue,0,0,Ce.width,Ce.height,Ie,Ce.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ue,Xe,Ce.width,Ce.height,0,Ce.data):Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ue,0,0,Ce.width,Ce.height,Ie,ke,Ce.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ue,Xe,Ce.width,Ce.height,0,Ie,ke,Ce.data)}}}else{if(ye=g.mipmaps,G&&he){ye.length>0&&pe++;const re=at(de[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,pe,Xe,re.width,re.height)}for(let re=0;re<6;re++)if(Re){G?ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,de[re].width,de[re].height,Ie,ke,de[re].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Xe,de[re].width,de[re].height,0,Ie,ke,de[re].data);for(let Ue=0;Ue<ye.length;Ue++){const ht=ye[Ue].image[re].image;G?ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ue+1,0,0,ht.width,ht.height,Ie,ke,ht.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ue+1,Xe,ht.width,ht.height,0,Ie,ke,ht.data)}}else{G?ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Ie,ke,de[re]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Xe,Ie,ke,de[re]);for(let Ue=0;Ue<ye.length;Ue++){const Ce=ye[Ue];G?ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ue+1,0,0,Ie,ke,Ce.image[re]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ue+1,Xe,Ie,ke,Ce.image[re])}}}u(g)&&v(n.TEXTURE_CUBE_MAP),ae.__version=Z.version,g.onUpdate&&g.onUpdate(g)}R.__version=g.version}function H(R,g,B,q,Z,ae){const le=s.convert(B.format,B.colorSpace),j=s.convert(B.type),te=M(B.internalFormat,le,j,B.normalized,B.colorSpace),ue=i.get(g),Re=i.get(B);if(Re.__renderTarget=g,!ue.__hasExternalTextures){const de=Math.max(1,g.width>>ae),fe=Math.max(1,g.height>>ae);Z===n.TEXTURE_3D||Z===n.TEXTURE_2D_ARRAY?t.texImage3D(Z,ae,te,de,fe,g.depth,0,le,j,null):t.texImage2D(Z,ae,te,de,fe,0,le,j,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),mt(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,q,Z,Re.__webglTexture,0,Ze(g)):(Z===n.TEXTURE_2D||Z>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,q,Z,Re.__webglTexture,ae),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ie(R,g,B){if(n.bindRenderbuffer(n.RENDERBUFFER,R),g.depthBuffer){const q=g.depthTexture,Z=q&&q.isDepthTexture?q.type:null,ae=b(g.stencilBuffer,Z),le=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;mt(g)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ze(g),ae,g.width,g.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ze(g),ae,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,ae,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,le,n.RENDERBUFFER,R)}else{const q=g.textures;for(let Z=0;Z<q.length;Z++){const ae=q[Z],le=s.convert(ae.format,ae.colorSpace),j=s.convert(ae.type),te=M(ae.internalFormat,le,j,ae.normalized,ae.colorSpace);mt(g)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ze(g),te,g.width,g.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ze(g),te,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,te,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function me(R,g,B){const q=g.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Z=i.get(g.depthTexture);if(Z.__renderTarget=g,(!Z.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),q){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,g.depthTexture.addEventListener("dispose",P)),Z.__webglTexture===void 0){Z.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),Ne(n.TEXTURE_CUBE_MAP,g.depthTexture);const ue=s.convert(g.depthTexture.format),Re=s.convert(g.depthTexture.type);let de;g.depthTexture.format===ei?de=n.DEPTH_COMPONENT24:g.depthTexture.format===Ni&&(de=n.DEPTH24_STENCIL8);for(let fe=0;fe<6;fe++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,de,g.width,g.height,0,ue,Re,null)}}else W(g.depthTexture,0);const ae=Z.__webglTexture,le=Ze(g),j=q?n.TEXTURE_CUBE_MAP_POSITIVE_X+B:n.TEXTURE_2D,te=g.depthTexture.format===Ni?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(g.depthTexture.format===ei)mt(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,te,j,ae,0,le):n.framebufferTexture2D(n.FRAMEBUFFER,te,j,ae,0);else if(g.depthTexture.format===Ni)mt(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,te,j,ae,0,le):n.framebufferTexture2D(n.FRAMEBUFFER,te,j,ae,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ce(R){const g=i.get(R),B=R.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==R.depthTexture){const q=R.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),q){const Z=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,q.removeEventListener("dispose",Z)};q.addEventListener("dispose",Z),g.__depthDisposeCallback=Z}g.__boundDepthTexture=q}if(R.depthTexture&&!g.__autoAllocateDepthBuffer)if(B)for(let q=0;q<6;q++)me(g.__webglFramebuffer[q],R,q);else{const q=R.texture.mipmaps;q&&q.length>0?me(g.__webglFramebuffer[0],R,0):me(g.__webglFramebuffer,R,0)}else if(B){g.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[q]),g.__webglDepthbuffer[q]===void 0)g.__webglDepthbuffer[q]=n.createRenderbuffer(),ie(g.__webglDepthbuffer[q],R,!1);else{const Z=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ae=g.__webglDepthbuffer[q];n.bindRenderbuffer(n.RENDERBUFFER,ae),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,ae)}}else{const q=R.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=n.createRenderbuffer(),ie(g.__webglDepthbuffer,R,!1);else{const Z=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ae=g.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ae),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,ae)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ee(R,g,B){const q=i.get(R);g!==void 0&&H(q.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&ce(R)}function We(R){const g=R.texture,B=i.get(R),q=i.get(g);R.addEventListener("dispose",x);const Z=R.textures,ae=R.isWebGLCubeRenderTarget===!0,le=Z.length>1;if(le||(q.__webglTexture===void 0&&(q.__webglTexture=n.createTexture()),q.__version=g.version,a.memory.textures++),ae){B.__webglFramebuffer=[];for(let j=0;j<6;j++)if(g.mipmaps&&g.mipmaps.length>0){B.__webglFramebuffer[j]=[];for(let te=0;te<g.mipmaps.length;te++)B.__webglFramebuffer[j][te]=n.createFramebuffer()}else B.__webglFramebuffer[j]=n.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){B.__webglFramebuffer=[];for(let j=0;j<g.mipmaps.length;j++)B.__webglFramebuffer[j]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(le)for(let j=0,te=Z.length;j<te;j++){const ue=i.get(Z[j]);ue.__webglTexture===void 0&&(ue.__webglTexture=n.createTexture(),a.memory.textures++)}if(R.samples>0&&mt(R)===!1){B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let j=0;j<Z.length;j++){const te=Z[j];B.__webglColorRenderbuffer[j]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[j]);const ue=s.convert(te.format,te.colorSpace),Re=s.convert(te.type),de=M(te.internalFormat,ue,Re,te.normalized,te.colorSpace,R.isXRRenderTarget===!0),fe=Ze(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,fe,de,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+j,n.RENDERBUFFER,B.__webglColorRenderbuffer[j])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),ie(B.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ae){t.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture),Ne(n.TEXTURE_CUBE_MAP,g);for(let j=0;j<6;j++)if(g.mipmaps&&g.mipmaps.length>0)for(let te=0;te<g.mipmaps.length;te++)H(B.__webglFramebuffer[j][te],R,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+j,te);else H(B.__webglFramebuffer[j],R,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);u(g)&&v(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(le){for(let j=0,te=Z.length;j<te;j++){const ue=Z[j],Re=i.get(ue);let de=n.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(de=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(de,Re.__webglTexture),Ne(de,ue),H(B.__webglFramebuffer,R,ue,n.COLOR_ATTACHMENT0+j,de,0),u(ue)&&v(de)}t.unbindTexture()}else{let j=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(j=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(j,q.__webglTexture),Ne(j,g),g.mipmaps&&g.mipmaps.length>0)for(let te=0;te<g.mipmaps.length;te++)H(B.__webglFramebuffer[te],R,g,n.COLOR_ATTACHMENT0,j,te);else H(B.__webglFramebuffer,R,g,n.COLOR_ATTACHMENT0,j,0);u(g)&&v(j),t.unbindTexture()}R.depthBuffer&&ce(R)}function He(R){const g=R.textures;for(let B=0,q=g.length;B<q;B++){const Z=g[B];if(u(Z)){const ae=w(R),le=i.get(Z).__webglTexture;t.bindTexture(ae,le),v(ae),t.unbindTexture()}}}const rt=[],Be=[];function $e(R){if(R.samples>0){if(mt(R)===!1){const g=R.textures,B=R.width,q=R.height;let Z=n.COLOR_BUFFER_BIT;const ae=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,le=i.get(R),j=g.length>1;if(j)for(let ue=0;ue<g.length;ue++)t.bindFramebuffer(n.FRAMEBUFFER,le.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,le.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer);const te=R.texture.mipmaps;te&&te.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,le.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let ue=0;ue<g.length;ue++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Z|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Z|=n.STENCIL_BUFFER_BIT)),j){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,le.__webglColorRenderbuffer[ue]);const Re=i.get(g[ue]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Re,0)}n.blitFramebuffer(0,0,B,q,0,0,B,q,Z,n.NEAREST),l===!0&&(rt.length=0,Be.length=0,rt.push(n.COLOR_ATTACHMENT0+ue),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&(rt.push(ae),Be.push(ae),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Be)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,rt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),j)for(let ue=0;ue<g.length;ue++){t.bindFramebuffer(n.FRAMEBUFFER,le.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,le.__webglColorRenderbuffer[ue]);const Re=i.get(g[ue]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,le.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.TEXTURE_2D,Re,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){const g=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[g])}}}function Ze(R){return Math.min(r.maxSamples,R.samples)}function mt(R){const g=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function z(R){const g=a.render.frame;h.get(R)!==g&&(h.set(R,g),R.update())}function bt(R,g){const B=R.colorSpace,q=R.format,Z=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||B!==Ea&&B!==Si&&(tt.getTransfer(B)===ut?(q!==vn||Z!==en)&&Ge("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ot("WebGLTextures: Unsupported texture color space:",B)),g}function at(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=E,this.getTextureUnits=A,this.setTextureUnits=D,this.setTexture2D=W,this.setTexture2DArray=L,this.setTexture3D=I,this.setTextureCube=X,this.rebindTextures=Ee,this.setupRenderTarget=We,this.updateRenderTargetMipmap=He,this.updateMultisampleRenderTarget=$e,this.setupDepthRenderbuffer=ce,this.setupFrameBufferTexture=H,this.useMultisampledRTT=mt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function uy(n,e){function t(i,r=Si){let s;const a=tt.getTransfer(r);if(i===en)return n.UNSIGNED_BYTE;if(i===uc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===fc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===ch)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===uh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===oh)return n.BYTE;if(i===lh)return n.SHORT;if(i===ls)return n.UNSIGNED_SHORT;if(i===cc)return n.INT;if(i===In)return n.UNSIGNED_INT;if(i===Cn)return n.FLOAT;if(i===Un)return n.HALF_FLOAT;if(i===fh)return n.ALPHA;if(i===dh)return n.RGB;if(i===vn)return n.RGBA;if(i===ei)return n.DEPTH_COMPONENT;if(i===Ni)return n.DEPTH_STENCIL;if(i===hh)return n.RED;if(i===dc)return n.RED_INTEGER;if(i===Vi)return n.RG;if(i===hc)return n.RG_INTEGER;if(i===pc)return n.RGBA_INTEGER;if(i===oa||i===la||i===ca||i===ua)if(a===ut)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===oa)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===la)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ca)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ua)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===oa)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===la)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ca)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ua)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ul||i===fl||i===dl||i===hl)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===ul)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===fl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===dl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===hl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===pl||i===ml||i===gl||i===_l||i===vl||i===Ma||i===xl)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===pl||i===ml)return a===ut?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===gl)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===_l)return s.COMPRESSED_R11_EAC;if(i===vl)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Ma)return s.COMPRESSED_RG11_EAC;if(i===xl)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Sl||i===Ml||i===yl||i===El||i===bl||i===Tl||i===wl||i===Al||i===Rl||i===Cl||i===Pl||i===Ll||i===Dl||i===Il)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Sl)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ml)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===yl)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===El)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===bl)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Tl)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===wl)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Al)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Rl)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Cl)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Pl)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ll)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Dl)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Il)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ul||i===Nl||i===Fl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Ul)return a===ut?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Nl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Fl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ol||i===Bl||i===ya||i===kl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Ol)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Bl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ya)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===kl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===cs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const fy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,dy=`
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

}`;class hy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new bh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Nn({vertexShader:fy,fragmentShader:dy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Et(new Ha(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class py extends Yi{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,p=null,f=null,m=null,_=null;const S=typeof XRWebGLBinding<"u",d=new hy,u={},v=t.getContextAttributes();let w=null,M=null;const b=[],T=[],P=new it;let x=null,C=null;const N=new ln;N.viewport=new vt;const O=new ln;O.viewport=new vt;const V=[N,O],E=new y_;let A=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ee=b[Q];return ee===void 0&&(ee=new xo,b[Q]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(Q){let ee=b[Q];return ee===void 0&&(ee=new xo,b[Q]=ee),ee.getGripSpace()},this.getHand=function(Q){let ee=b[Q];return ee===void 0&&(ee=new xo,b[Q]=ee),ee.getHandSpace()};function U(Q){const ee=T.indexOf(Q.inputSource);if(ee===-1)return;const ve=b[ee];ve!==void 0&&(ve.update(Q.inputSource,Q.frame,c||a),ve.dispatchEvent({type:Q.type,data:Q.inputSource}))}function F(){r.removeEventListener("select",U),r.removeEventListener("selectstart",U),r.removeEventListener("selectend",U),r.removeEventListener("squeeze",U),r.removeEventListener("squeezestart",U),r.removeEventListener("squeezeend",U),r.removeEventListener("end",F),r.removeEventListener("inputsourceschange",W);for(let Q=0;Q<b.length;Q++){const ee=T[Q];ee!==null&&(T[Q]=null,b[Q].disconnect(ee))}A=null,D=null,d.reset();for(const Q in u)delete u[Q];if(e.setRenderTarget(w),m=null,f=null,p=null,r=null,M=null,Oe.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(P.width,P.height,!1),C!==null){const Q=C.camera;Q.fov=C.fov,Q.zoom=C.zoom,Q.updateProjectionMatrix(),C=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){s=Q,i.isPresenting===!0&&Ge("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,i.isPresenting===!0&&Ge("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return p===null&&S&&(p=new XRWebGLBinding(r,t)),p},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(Q){if(r=Q,r!==null){if(w=e.getRenderTarget(),r.addEventListener("select",U),r.addEventListener("selectstart",U),r.addEventListener("selectend",U),r.addEventListener("squeeze",U),r.addEventListener("squeezestart",U),r.addEventListener("squeezeend",U),r.addEventListener("end",F),r.addEventListener("inputsourceschange",W),v.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(P),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,De=null,H=null;v.depth&&(H=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ve=v.stencil?Ni:ei,De=v.stencil?cs:In);const ie={colorFormat:t.RGBA8,depthFormat:H,scaleFactor:s};p=this.getBinding(),f=p.createProjectionLayer(ie),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),M=new Sn(f.textureWidth,f.textureHeight,{format:vn,type:en,depthTexture:new fs(f.textureWidth,f.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{const ve={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,ve),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),M=new Sn(m.framebufferWidth,m.framebufferHeight,{format:vn,type:en,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Oe.setContext(r),Oe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return d.getDepthTexture()};function W(Q){for(let ee=0;ee<Q.removed.length;ee++){const ve=Q.removed[ee],De=T.indexOf(ve);De>=0&&(T[De]=null,b[De].disconnect(ve))}for(let ee=0;ee<Q.added.length;ee++){const ve=Q.added[ee];let De=T.indexOf(ve);if(De===-1){for(let ie=0;ie<b.length;ie++)if(ie>=T.length){T.push(ve),De=ie;break}else if(T[ie]===null){T[ie]=ve,De=ie;break}if(De===-1)break}const H=b[De];H&&H.connect(ve)}}const L=new $,I=new $;function X(Q,ee,ve){L.setFromMatrixPosition(ee.matrixWorld),I.setFromMatrixPosition(ve.matrixWorld);const De=L.distanceTo(I),H=ee.projectionMatrix.elements,ie=ve.projectionMatrix.elements,me=H[14]/(H[10]-1),ce=H[14]/(H[10]+1),Ee=(H[9]+1)/H[5],We=(H[9]-1)/H[5],He=(H[8]-1)/H[0],rt=(ie[8]+1)/ie[0],Be=me*He,$e=me*rt,Ze=De/(-He+rt),mt=Ze*-He;if(ee.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(mt),Q.translateZ(Ze),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),H[10]===-1)Q.projectionMatrix.copy(ee.projectionMatrix),Q.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const z=me+Ze,bt=ce+Ze,at=Be-mt,R=$e+(De-mt),g=Ee*ce/bt*z,B=We*ce/bt*z;Q.projectionMatrix.makePerspective(at,R,g,B,z,bt),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function se(Q,ee){ee===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ee.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(r===null)return;let ee=Q.near,ve=Q.far;d.texture!==null&&(d.depthNear>0&&(ee=d.depthNear),d.depthFar>0&&(ve=d.depthFar)),E.near=O.near=N.near=ee,E.far=O.far=N.far=ve,(A!==E.near||D!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),A=E.near,D=E.far),E.layers.mask=Q.layers.mask|6,N.layers.mask=E.layers.mask&-5,O.layers.mask=E.layers.mask&-3;const De=Q.parent,H=E.cameras;se(E,De);for(let ie=0;ie<H.length;ie++)se(H[ie],De);H.length===2?X(E,N,O):E.projectionMatrix.copy(N.projectionMatrix),C===null&&Q.isPerspectiveCamera&&(C={camera:Q,fov:Q.fov,zoom:Q.zoom}),oe(Q,E,De)};function oe(Q,ee,ve){ve===null?Q.matrix.copy(ee.matrixWorld):(Q.matrix.copy(ve.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ee.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ee.projectionMatrix),Q.projectionMatrixInverse.copy(ee.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Hl*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(Q){l=Q,f!==null&&(f.fixedFoveation=Q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Q)},this.hasDepthSensing=function(){return d.texture!==null},this.getDepthSensingMesh=function(){return d.getMesh(E)},this.getCameraTexture=function(Q){return u[Q]};let Me=null;function Ne(Q,ee){if(h=ee.getViewerPose(c||a),_=ee,h!==null){const ve=h.views;m!==null&&(e.setRenderTargetFramebuffer(M,m.framebuffer),e.setRenderTarget(M));let De=!1;ve.length!==E.cameras.length&&(E.cameras.length=0,De=!0);for(let ce=0;ce<ve.length;ce++){const Ee=ve[ce];let We=null;if(m!==null)We=m.getViewport(Ee);else{const rt=p.getViewSubImage(f,Ee);We=rt.viewport,ce===0&&(e.setRenderTargetTextures(M,rt.colorTexture,rt.depthStencilTexture),e.setRenderTarget(M))}let He=V[ce];He===void 0&&(He=new ln,He.layers.enable(ce),He.viewport=new vt,V[ce]=He),He.matrix.fromArray(Ee.transform.matrix),He.matrix.decompose(He.position,He.quaternion,He.scale),He.projectionMatrix.fromArray(Ee.projectionMatrix),He.projectionMatrixInverse.copy(He.projectionMatrix).invert(),He.viewport.set(We.x,We.y,We.width,We.height),ce===0&&(E.matrix.copy(He.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),De===!0&&E.cameras.push(He)}const H=r.enabledFeatures;if(H&&H.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&S){p=i.getBinding();const ce=p.getDepthInformation(ve[0]);ce&&ce.isValid&&ce.texture&&d.init(ce,r.renderState)}if(H&&H.includes("camera-access")&&S){e.state.unbindTexture(),p=i.getBinding();for(let ce=0;ce<ve.length;ce++){const Ee=ve[ce].camera;if(Ee){let We=u[Ee];We||(We=new bh,u[Ee]=We);const He=p.getCameraImage(Ee);We.sourceTexture=He}}}}for(let ve=0;ve<b.length;ve++){const De=T[ve],H=b[ve];De!==null&&H!==void 0&&H.update(De,ee,c||a)}Me&&Me(Q,ee),ee.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ee}),_=null}const Oe=new Rh;Oe.setAnimationLoop(Ne),this.setAnimationLoop=function(Q){Me=Q},this.dispose=function(){}}}const my=new xt,Nh=new Ve;Nh.set(-1,0,0,0,1,0,0,0,1);function gy(n,e){function t(d,u){d.matrixAutoUpdate===!0&&d.updateMatrix(),u.value.copy(d.matrix)}function i(d,u){u.color.getRGB(d.fogColor.value,Th(n)),u.isFog?(d.fogNear.value=u.near,d.fogFar.value=u.far):u.isFogExp2&&(d.fogDensity.value=u.density)}function r(d,u,v,w,M){u.isNodeMaterial?u.uniformsNeedUpdate=!1:u.isMeshBasicMaterial?s(d,u):u.isMeshLambertMaterial?(s(d,u),u.envMap&&(d.envMapIntensity.value=u.envMapIntensity)):u.isMeshToonMaterial?(s(d,u),p(d,u)):u.isMeshPhongMaterial?(s(d,u),h(d,u),u.envMap&&(d.envMapIntensity.value=u.envMapIntensity)):u.isMeshStandardMaterial?(s(d,u),f(d,u),u.isMeshPhysicalMaterial&&m(d,u,M)):u.isMeshMatcapMaterial?(s(d,u),_(d,u)):u.isMeshDepthMaterial?s(d,u):u.isMeshDistanceMaterial?(s(d,u),S(d,u)):u.isMeshNormalMaterial?s(d,u):u.isLineBasicMaterial?(a(d,u),u.isLineDashedMaterial&&o(d,u)):u.isPointsMaterial?l(d,u,v,w):u.isSpriteMaterial?c(d,u):u.isShadowMaterial?(d.color.value.copy(u.color),d.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(d,u){d.opacity.value=u.opacity,u.color&&d.diffuse.value.copy(u.color),u.emissive&&d.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(d.map.value=u.map,t(u.map,d.mapTransform)),u.alphaMap&&(d.alphaMap.value=u.alphaMap,t(u.alphaMap,d.alphaMapTransform)),u.bumpMap&&(d.bumpMap.value=u.bumpMap,t(u.bumpMap,d.bumpMapTransform),d.bumpScale.value=u.bumpScale,u.side===$t&&(d.bumpScale.value*=-1)),u.normalMap&&(d.normalMap.value=u.normalMap,t(u.normalMap,d.normalMapTransform),d.normalScale.value.copy(u.normalScale),u.side===$t&&d.normalScale.value.negate()),u.displacementMap&&(d.displacementMap.value=u.displacementMap,t(u.displacementMap,d.displacementMapTransform),d.displacementScale.value=u.displacementScale,d.displacementBias.value=u.displacementBias),u.emissiveMap&&(d.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,d.emissiveMapTransform)),u.specularMap&&(d.specularMap.value=u.specularMap,t(u.specularMap,d.specularMapTransform)),u.alphaTest>0&&(d.alphaTest.value=u.alphaTest);const v=e.get(u),w=v.envMap,M=v.envMapRotation;w&&(d.envMap.value=w,d.envMapRotation.value.setFromMatrix4(my.makeRotationFromEuler(M)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&d.envMapRotation.value.premultiply(Nh),d.reflectivity.value=u.reflectivity,d.ior.value=u.ior,d.refractionRatio.value=u.refractionRatio),u.lightMap&&(d.lightMap.value=u.lightMap,d.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,d.lightMapTransform)),u.aoMap&&(d.aoMap.value=u.aoMap,d.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,d.aoMapTransform))}function a(d,u){d.diffuse.value.copy(u.color),d.opacity.value=u.opacity,u.map&&(d.map.value=u.map,t(u.map,d.mapTransform))}function o(d,u){d.dashSize.value=u.dashSize,d.totalSize.value=u.dashSize+u.gapSize,d.scale.value=u.scale}function l(d,u,v,w){d.diffuse.value.copy(u.color),d.opacity.value=u.opacity,d.size.value=u.size*v,d.scale.value=w*.5,u.map&&(d.map.value=u.map,t(u.map,d.uvTransform)),u.alphaMap&&(d.alphaMap.value=u.alphaMap,t(u.alphaMap,d.alphaMapTransform)),u.alphaTest>0&&(d.alphaTest.value=u.alphaTest)}function c(d,u){d.diffuse.value.copy(u.color),d.opacity.value=u.opacity,d.rotation.value=u.rotation,u.map&&(d.map.value=u.map,t(u.map,d.mapTransform)),u.alphaMap&&(d.alphaMap.value=u.alphaMap,t(u.alphaMap,d.alphaMapTransform)),u.alphaTest>0&&(d.alphaTest.value=u.alphaTest)}function h(d,u){d.specular.value.copy(u.specular),d.shininess.value=Math.max(u.shininess,1e-4)}function p(d,u){u.gradientMap&&(d.gradientMap.value=u.gradientMap)}function f(d,u){d.metalness.value=u.metalness,u.metalnessMap&&(d.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,d.metalnessMapTransform)),d.roughness.value=u.roughness,u.roughnessMap&&(d.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,d.roughnessMapTransform)),u.envMap&&(d.envMapIntensity.value=u.envMapIntensity)}function m(d,u,v){d.ior.value=u.ior,u.sheen>0&&(d.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),d.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(d.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,d.sheenColorMapTransform)),u.sheenRoughnessMap&&(d.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,d.sheenRoughnessMapTransform))),u.clearcoat>0&&(d.clearcoat.value=u.clearcoat,d.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(d.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,d.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(d.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===$t&&d.clearcoatNormalScale.value.negate())),u.dispersion>0&&(d.dispersion.value=u.dispersion),u.retroreflectivity>0&&(d.retroreflectivity.value=u.retroreflectivity),u.iridescence>0&&(d.iridescence.value=u.iridescence,d.iridescenceIOR.value=u.iridescenceIOR,d.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(d.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,d.iridescenceMapTransform)),u.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),u.transmission>0&&(d.transmission.value=u.transmission,d.transmissionSamplerMap.value=v.texture,d.transmissionSamplerSize.value.set(v.width,v.height),u.transmissionMap&&(d.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,d.transmissionMapTransform)),d.thickness.value=u.thickness,u.thicknessMap&&(d.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=u.attenuationDistance,d.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(d.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(d.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=u.specularIntensity,d.specularColor.value.copy(u.specularColor),u.specularColorMap&&(d.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,d.specularColorMapTransform)),u.specularIntensityMap&&(d.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,d.specularIntensityMapTransform))}function _(d,u){u.matcap&&(d.matcap.value=u.matcap)}function S(d,u){const v=e.get(u).light;d.referencePosition.value.setFromMatrixPosition(v.matrixWorld),d.nearDistance.value=v.shadow.camera.near,d.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function _y(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,b){const T=b.program;i.uniformBlockBinding(M,T)}function c(M,b){let T=r[M.id];T===void 0&&(d(M),T=h(M),r[M.id]=T,M.addEventListener("dispose",v));const P=b.program;i.updateUBOMapping(M,P);const x=e.render.frame;s[M.id]!==x&&(f(M),s[M.id]=x)}function h(M){const b=p();M.__bindingPointIndex=b;const T=n.createBuffer(),P=M.__size,x=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,T),n.bufferData(n.UNIFORM_BUFFER,P,x),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,T),T}function p(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return ot("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const b=r[M.id],T=M.uniforms,P=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let x=0,C=T.length;x<C;x++){const N=T[x];if(Array.isArray(N))for(let O=0,V=N.length;O<V;O++)m(N[O],x,O,P);else m(N,x,0,P)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(M,b,T,P){if(S(M,b,T,P)===!0){const x=M.__offset,C=M.value;if(Array.isArray(C)){let N=0;for(let O=0;O<C.length;O++){const V=C[O],E=u(V);_(V,M.__data,N),typeof V!="number"&&typeof V!="boolean"&&!V.isMatrix3&&!ArrayBuffer.isView(V)&&(N+=E.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(C,M.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,x,M.__data)}}function _(M,b,T){typeof M=="number"||typeof M=="boolean"?b[0]=M:M.isMatrix3?(b[0]=M.elements[0],b[1]=M.elements[1],b[2]=M.elements[2],b[3]=0,b[4]=M.elements[3],b[5]=M.elements[4],b[6]=M.elements[5],b[7]=0,b[8]=M.elements[6],b[9]=M.elements[7],b[10]=M.elements[8],b[11]=0):ArrayBuffer.isView(M)?b.set(new M.constructor(M.buffer,M.byteOffset,b.length)):M.toArray(b,T)}function S(M,b,T,P){const x=M.value,C=b+"_"+T;if(P[C]===void 0)return typeof x=="number"||typeof x=="boolean"?P[C]=x:ArrayBuffer.isView(x)?P[C]=x.slice():P[C]=x.clone(),!0;{const N=P[C];if(typeof x=="number"||typeof x=="boolean"){if(N!==x)return P[C]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(N.equals(x)===!1)return N.copy(x),!0}}return!1}function d(M){const b=M.uniforms;let T=0;const P=16;for(let C=0,N=b.length;C<N;C++){const O=Array.isArray(b[C])?b[C]:[b[C]];for(let V=0,E=O.length;V<E;V++){const A=O[V],D=Array.isArray(A.value)?A.value:[A.value];for(let U=0,F=D.length;U<F;U++){const W=D[U],L=u(W),I=T%P,X=I%L.boundary,se=I+X;T+=X,se!==0&&P-se<L.storage&&(T+=P-se),A.__data=new Float32Array(L.storage/Float32Array.BYTES_PER_ELEMENT),A.__offset=T,T+=L.storage}}}const x=T%P;return x>0&&(T+=P-x),M.__size=T,M.__cache={},this}function u(M){const b={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(b.boundary=4,b.storage=4):M.isVector2?(b.boundary=8,b.storage=8):M.isVector3||M.isColor?(b.boundary=16,b.storage=12):M.isVector4?(b.boundary=16,b.storage=16):M.isMatrix3?(b.boundary=48,b.storage=48):M.isMatrix4?(b.boundary=64,b.storage=64):M.isTexture?Ge("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(b.boundary=16,b.storage=M.byteLength):Ge("WebGLRenderer: Unsupported uniform value type.",M),b}function v(M){const b=M.target;b.removeEventListener("dispose",v);const T=a.indexOf(b.__bindingPointIndex);a.splice(T,1),n.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function w(){for(const M in r)n.deleteBuffer(r[M]);a=[],r={},s={}}return{bind:l,update:c,dispose:w}}const vy=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Tn=null;function xy(){return Tn===null&&(Tn=new s_(vy,16,16,Vi,Un),Tn.name="DFG_LUT",Tn.minFilter=Ot,Tn.magFilter=Ot,Tn.wrapS=Kn,Tn.wrapT=Kn,Tn.generateMipmaps=!1,Tn.needsUpdate=!0),Tn}class Sy{constructor(e={}){const{canvas:t=U0(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:f=!1,outputBufferType:m=en}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=a;const S=m,d=new Set([pc,hc,dc]),u=new Set([en,In,ls,cs,uc,fc]),v=new Uint32Array(4),w=new Int32Array(4),M=new $;let b=null,T=null;const P=[],x=[];let C=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ln,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const N=this;let O=!1,V=null,E=null,A=null,D=null;this._outputColorSpace=Yt;let U=0,F=0,W=null,L=-1,I=null;const X=new vt,se=new vt;let oe=null;const Me=new et(0);let Ne=0,Oe=t.width,Q=t.height,ee=1,ve=null,De=null;const H=new vt(0,0,Oe,Q),ie=new vt(0,0,Oe,Q);let me=!1;const ce=new xc;let Ee=!1,We=!1;const He=new xt,rt=new $,Be=new vt,$e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ze=!1;function mt(){return W===null?ee:1}let z=i;function bt(y,k){return t.getContext(y,k)}let at,R,g,B,q,Z,ae,le,j,te,ue,Re,de,fe,Ie,ke,Xe,G,he,ne,pe,ye,re;try{const y={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${lc}`),t.addEventListener("webglcontextlost",ht,!1),t.addEventListener("webglcontextrestored",lt,!1),t.addEventListener("webglcontextcreationerror",dn,!1),z===null){const k="webgl2";if(z=bt(k,y),z===null)throw bt(k)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ue()}catch(y){throw t.removeEventListener("webglcontextlost",ht,!1),t.removeEventListener("webglcontextrestored",lt,!1),t.removeEventListener("webglcontextcreationerror",dn,!1),ot("WebGLRenderer: "+y.message),y}function Ue(){at=new xS(z),at.init(),pe=new uy(z,at),R=new cS(z,at,e,pe),g=new ly(z,at),R.reversedDepthBuffer&&f&&g.buffers.depth.setReversed(!0),E=z.createFramebuffer(),A=z.createFramebuffer(),D=z.createFramebuffer(),B=new yS(z),q=new KM,Z=new cy(z,at,g,q,R,pe,B),ae=new vS(N),le=new b_(z),ye=new oS(z,le),j=new SS(z,le,B,ye),te=new bS(z,j,le,ye,B),G=new ES(z,R,Z),Ie=new uS(q),ue=new YM(N,ae,at,R,ye,Ie),Re=new gy(N,q),de=new ZM,fe=new ny(at),Xe=new aS(N,ae,g,te,_,l),ke=new oy(N,te,R),re=new _y(z,B,R,g),he=new lS(z,at,B),ne=new MS(z,at,B),B.programs=ue.programs,N.capabilities=R,N.extensions=at,N.properties=q,N.renderLists=de,N.shadowMap=ke,N.state=g,N.info=B}S!==en&&(C=new wS(S,t.width,t.height,o,r,s));const Ce=new py(N,z);this.xr=Ce,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const y=at.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=at.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(y){y!==void 0&&(ee=y,this.setSize(Oe,Q,!1))},this.getSize=function(y){return y.set(Oe,Q)},this.setSize=function(y,k,J=!0){if(Ce.isPresenting){Ge("WebGLRenderer: Can't change size while VR device is presenting.");return}Oe=y,Q=k,t.width=Math.floor(y*ee),t.height=Math.floor(k*ee),J===!0&&(t.style.width=y+"px",t.style.height=k+"px"),C!==null&&C.setSize(t.width,t.height),this.setViewport(0,0,y,k)},this.getDrawingBufferSize=function(y){return y.set(Oe*ee,Q*ee).floor()},this.setDrawingBufferSize=function(y,k,J){Oe=y,Q=k,ee=J,t.width=Math.floor(y*J),t.height=Math.floor(k*J),this.setViewport(0,0,y,k)},this.setEffects=function(y){if(S===en){ot("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let k=0;k<y.length;k++)if(y[k].isOutputPass===!0){Ge("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(X)},this.getViewport=function(y){return y.copy(H)},this.setViewport=function(y,k,J,Y){y.isVector4?H.set(y.x,y.y,y.z,y.w):H.set(y,k,J,Y),g.viewport(X.copy(H).multiplyScalar(ee).round())},this.getScissor=function(y){return y.copy(ie)},this.setScissor=function(y,k,J,Y){y.isVector4?ie.set(y.x,y.y,y.z,y.w):ie.set(y,k,J,Y),g.scissor(se.copy(ie).multiplyScalar(ee).round())},this.getScissorTest=function(){return me},this.setScissorTest=function(y){g.setScissorTest(me=y)},this.setOpaqueSort=function(y){ve=y},this.setTransparentSort=function(y){De=y},this.getClearColor=function(y){return y.copy(Xe.getClearColor())},this.setClearColor=function(){Xe.setClearColor(...arguments)},this.getClearAlpha=function(){return Xe.getClearAlpha()},this.setClearAlpha=function(){Xe.setClearAlpha(...arguments)},this.clear=function(y=!0,k=!0,J=!0){let Y=0;if(y){let K=!1;if(W!==null){const Se=W.texture.format;K=d.has(Se)}if(K){const Se=W.texture.type,Te=u.has(Se),xe=Xe.getClearColor(),we=Xe.getClearAlpha(),Pe=xe.r,qe=xe.g,Je=xe.b;Te?(v[0]=Pe,v[1]=qe,v[2]=Je,v[3]=we,z.clearBufferuiv(z.COLOR,0,v)):(w[0]=Pe,w[1]=qe,w[2]=Je,w[3]=we,z.clearBufferiv(z.COLOR,0,w))}else Y|=z.COLOR_BUFFER_BIT}k&&(Y|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),J&&(Y|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&z.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),V=y},this.dispose=function(){t.removeEventListener("webglcontextlost",ht,!1),t.removeEventListener("webglcontextrestored",lt,!1),t.removeEventListener("webglcontextcreationerror",dn,!1),Xe.dispose(),de.dispose(),fe.dispose(),q.dispose(),ae.dispose(),te.dispose(),ye.dispose(),re.dispose(),ue.dispose(),Ce.dispose(),Ce.removeEventListener("sessionstart",Gc),Ce.removeEventListener("sessionend",Vc),Ai.stop()};function ht(y){y.preventDefault(),zu("WebGLRenderer: Context Lost."),O=!0}function lt(){zu("WebGLRenderer: Context Restored."),O=!1;const y=B.autoReset,k=ke.enabled,J=ke.autoUpdate,Y=ke.needsUpdate,K=ke.type;Ue(),B.autoReset=y,ke.enabled=k,ke.autoUpdate=J,ke.needsUpdate=Y,ke.type=K}function dn(y){ot("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function yn(y){const k=y.target;k.removeEventListener("dispose",yn),pp(k)}function pp(y){mp(y),q.remove(y)}function mp(y){const k=q.get(y).programs;k!==void 0&&(k.forEach(function(J){ue.releaseProgram(J)}),y.isShaderMaterial&&ue.releaseShaderCache(y))}this.renderBufferDirect=function(y,k,J,Y,K,Se){k===null&&(k=$e);const Te=K.isMesh&&K.matrixWorld.determinantAffine()<0,xe=vp(y,k,J,Y,K);g.setMaterial(Y,Te);let we=J.index,Pe=1;if(Y.wireframe===!0){if(we=j.getWireframeAttribute(J),we===void 0)return;Pe=2}const qe=J.drawRange,Je=J.attributes.position;let Ae=qe.start*Pe,ct=(qe.start+qe.count)*Pe;Se!==null&&(Ae=Math.max(Ae,Se.start*Pe),ct=Math.min(ct,(Se.start+Se.count)*Pe)),we!==null?(Ae=Math.max(Ae,0),ct=Math.min(ct,we.count)):Je!=null&&(Ae=Math.max(Ae,0),ct=Math.min(ct,Je.count));const Mt=ct-Ae;if(Mt<0||Mt===1/0)return;ye.setup(K,Y,xe,J,we);let gt,dt=he;if(we!==null&&(gt=le.get(we),dt=ne,dt.setIndex(gt)),K.isMesh)Y.wireframe===!0?(g.setLineWidth(Y.wireframeLinewidth*mt()),dt.setMode(z.LINES)):dt.setMode(z.TRIANGLES);else if(K.isLine){let Dt=Y.linewidth;Dt===void 0&&(Dt=1),g.setLineWidth(Dt*mt()),K.isLineSegments?dt.setMode(z.LINES):K.isLineLoop?dt.setMode(z.LINE_LOOP):dt.setMode(z.LINE_STRIP)}else K.isPoints?dt.setMode(z.POINTS):K.isSprite&&dt.setMode(z.TRIANGLES);if(K.isBatchedMesh)if(at.get("WEBGL_multi_draw"))dt.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const Dt=K._multiDrawStarts,be=K._multiDrawCounts,zt=K._multiDrawCount,st=we?le.get(we).bytesPerElement:1,an=q.get(Y).currentProgram.getUniforms();for(let En=0;En<zt;En++)an.setValue(z,"_gl_DrawID",En),dt.render(Dt[En]/st,be[En])}else if(K.isInstancedMesh)dt.renderInstances(Ae,Mt,K.count);else if(J.isInstancedBufferGeometry){const Dt=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,be=Math.min(J.instanceCount,Dt);dt.renderInstances(Ae,Mt,be)}else dt.render(Ae,Mt)};function Hc(y,k,J,Y){V!==null&&y.isNodeMaterial&&V.setObject(Y,y),Ee===!0&&Ie.setState(y,J,!1),y.transparent===!0&&y.side===qn&&y.forceSinglePass===!1?(y.side=$t,y.needsUpdate=!0,Ms(y,k,Y),y.side=Hi,y.needsUpdate=!0,Ms(y,k,Y),y.side=qn):Ms(y,k,Y)}this.compile=function(y,k,J=null){J===null&&(J=y),V!==null&&V.renderStart(y,k,J),T=fe.get(J),T.init(k),x.push(T),J.traverseVisible(function(K){K.isLight&&K.layers.test(k.layers)&&(T.pushLight(K),K.castShadow&&T.pushShadow(K))}),y!==J&&y.traverseVisible(function(K){K.isLight&&K.layers.test(k.layers)&&(T.pushLight(K),K.castShadow&&T.pushShadow(K))}),T.setupLights(),V!==null&&V.updateLights(T.state.lightsArray),We=this.localClippingEnabled,Ee=Ie.init(this.clippingPlanes,We),Ee===!0&&Ie.setGlobalState(this.clippingPlanes,k),V!==null&&ke.render(T.state.shadowsArray,J,k);const Y=new Set;return y.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const Se=K.material;if(Se)if(Array.isArray(Se))for(let Te=0;Te<Se.length;Te++){const xe=Se[Te];Hc(xe,J,k,K),Y.add(xe)}else Hc(Se,J,k,K),Y.add(Se)}),T=x.pop(),V!==null&&V.renderEnd(),Y},this.compileAsync=function(y,k,J=null){const Y=this.compile(y,k,J);return new Promise(K=>{function Se(){if(Y.forEach(function(Te){const we=q.get(Te).currentProgram;(we===void 0||we.isReady())&&Y.delete(Te)}),Y.size===0){K(y);return}setTimeout(Se,10)}at.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let Ya=null;function gp(y){Ya&&Ya(y)}function Gc(){Ai.stop()}function Vc(){Ai.start()}const Ai=new Rh;Ai.setAnimationLoop(gp),typeof self<"u"&&Ai.setContext(self),this.setAnimationLoop=function(y){Ya=y,Ce.setAnimationLoop(y),y===null?Ai.stop():Ai.start()},Ce.addEventListener("sessionstart",Gc),Ce.addEventListener("sessionend",Vc),this.render=function(y,k){if(k!==void 0&&k.isCamera!==!0){ot("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;V!==null&&V.renderStart(y,k);const J=Ce.enabled===!0&&Ce.isPresenting===!0,Y=C!==null&&(W===null||J)&&C.begin(N,W);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Ce.enabled===!0&&Ce.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(Ce.cameraAutoUpdate===!0&&Ce.updateCamera(k),k=Ce.getCamera()),y.isScene===!0&&y.onBeforeRender(N,y,k,W),T=fe.get(y,x.length),T.init(k),T.state.textureUnits=Z.getTextureUnits(),x.push(T),He.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),ce.setFromProjectionMatrix(He,Pn,k.reversedDepth),We=this.localClippingEnabled,Ee=Ie.init(this.clippingPlanes,We),b=de.get(y,P.length),b.init(),P.push(b),Ce.enabled===!0&&Ce.isPresenting===!0){const Te=N.xr.getDepthSensingMesh();Te!==null&&Ka(Te,k,-1/0,N.sortObjects)}Ka(y,k,0,N.sortObjects),b.finish(),V!==null&&V.updateLights(T.state.lightsArray),N.sortObjects===!0&&b.sort(ve,De),Ze=Ce.enabled===!1||Ce.isPresenting===!1||Ce.hasDepthSensing()===!1,Ze&&Xe.addToRenderList(b,y),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ee===!0&&Ie.beginShadows();const K=T.state.shadowsArray;if(ke.render(K,y,k),Ee===!0&&Ie.endShadows(),(Y&&C.hasRenderPass())===!1){const Te=b.opaque,xe=b.transmissive;if(T.setupLights(),k.isArrayCamera){const we=k.cameras;if(xe.length>0)for(let Pe=0,qe=we.length;Pe<qe;Pe++){const Je=we[Pe];Xc(Te,xe,y,Je)}Ze&&Xe.render(y);for(let Pe=0,qe=we.length;Pe<qe;Pe++){const Je=we[Pe];Wc(b,y,Je,Je.viewport)}}else xe.length>0&&Xc(Te,xe,y,k),Ze&&Xe.render(y),Wc(b,y,k)}W!==null&&F===0&&(Z.updateMultisampleRenderTarget(W),Z.updateRenderTargetMipmap(W)),Y&&C.end(N),y.isScene===!0&&y.onAfterRender(N,y,k),ye.resetDefaultState(),L=-1,I=null,x.pop(),x.length>0?(T=x[x.length-1],Z.setTextureUnits(T.state.textureUnits),Ee===!0&&Ie.setGlobalState(N.clippingPlanes,T.state.camera)):T=null,P.pop(),P.length>0?b=P[P.length-1]:b=null,V!==null&&V.renderEnd()};function Ka(y,k,J,Y){if(y.visible===!1)return;if(y.layers.test(k.layers)){if(y.isGroup)J=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(k);else if(y.isLightProbeGrid)T.pushLightProbeGrid(y);else if(y.isLight)T.pushLight(y),y.castShadow&&T.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||y.intersectsFrustum(ce)){Y&&Be.setFromMatrixPosition(y.matrixWorld).applyMatrix4(He);const Te=te.update(y),xe=y.material;xe.visible&&b.push(y,Te,xe,J,Be.z,null,k)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||y.intersectsFrustum(ce))){const Te=te.update(y),xe=y.material;if(Y&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Be.copy(y.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),Be.copy(Te.boundingSphere.center)),Be.applyMatrix4(y.matrixWorld).applyMatrix4(He)),Array.isArray(xe)){const we=Te.groups;for(let Pe=0,qe=we.length;Pe<qe;Pe++){const Je=we[Pe],Ae=xe[Je.materialIndex];Ae&&Ae.visible&&b.push(y,Te,Ae,J,Be.z,Je,k)}}else xe.visible&&b.push(y,Te,xe,J,Be.z,null,k)}}const Se=y.children;for(let Te=0,xe=Se.length;Te<xe;Te++)Ka(Se[Te],k,J,Y)}function Wc(y,k,J,Y){const{opaque:K,transmissive:Se,transparent:Te}=y;T.setupLightsView(J),Ee===!0&&Ie.setGlobalState(N.clippingPlanes,J),Y&&g.viewport(X.copy(Y)),K.length>0&&Ss(K,k,J),Se.length>0&&Ss(Se,k,J),Te.length>0&&Ss(Te,k,J),g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),g.setPolygonOffset(!1)}function Xc(y,k,J,Y){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[Y.id]===void 0){const Ae=at.has("EXT_color_buffer_half_float")||at.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[Y.id]=new Sn(1,1,{generateMipmaps:!0,type:Ae?Un:en,minFilter:Ui,samples:Math.max(4,R.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:tt.workingColorSpace})}const Se=T.state.transmissionRenderTarget[Y.id],Te=Y.viewport||X;Se.setSize(Te.z*N.transmissionResolutionScale,Te.w*N.transmissionResolutionScale);const xe=N.getRenderTarget(),we=N.getActiveCubeFace(),Pe=N.getActiveMipmapLevel();N.setRenderTarget(Se),N.getClearColor(Me),Ne=N.getClearAlpha(),Ne<1&&N.setClearColor(16777215,.5),N.clear(),Ze&&Xe.render(J);const qe=N.toneMapping;N.toneMapping=Ln;const Je=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),T.setupLightsView(Y),Ee===!0&&Ie.setGlobalState(N.clippingPlanes,Y),Ss(y,J,Y),Z.updateMultisampleRenderTarget(Se),Z.updateRenderTargetMipmap(Se),at.has("WEBGL_multisampled_render_to_texture")===!1){let Ae=!1;for(let ct=0,Mt=k.length;ct<Mt;ct++){const gt=k[ct],{object:dt,geometry:Dt,material:be,group:zt}=gt;if(be.side===qn&&dt.layers.test(Y.layers)){const st=be.side;be.side=$t,be.needsUpdate=!0,qc(dt,J,Y,Dt,be,zt),be.side=st,be.needsUpdate=!0,Ae=!0}}Ae===!0&&(Z.updateMultisampleRenderTarget(Se),Z.updateRenderTargetMipmap(Se))}N.setRenderTarget(xe,we,Pe),N.setClearColor(Me,Ne),Je!==void 0&&(Y.viewport=Je),N.toneMapping=qe}function Ss(y,k,J){const Y=k.isScene===!0?k.overrideMaterial:null;for(let K=0,Se=y.length;K<Se;K++){const Te=y[K],{object:xe,geometry:we,group:Pe}=Te;let qe=Te.material;qe.allowOverride===!0&&Y!==null&&(qe=Y),xe.layers.test(J.layers)&&qc(xe,k,J,we,qe,Pe)}}function qc(y,k,J,Y,K,Se){V!==null&&K.isNodeMaterial&&V.setObject(y,K),y.onBeforeRender(N,k,J,Y,K,Se),y.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),K.onBeforeRender(N,k,J,Y,y,Se),K.transparent===!0&&K.side===qn&&K.forceSinglePass===!1?(K.side=$t,K.needsUpdate=!0,N.renderBufferDirect(J,k,Y,K,y,Se),K.side=Hi,K.needsUpdate=!0,N.renderBufferDirect(J,k,Y,K,y,Se),K.side=qn):N.renderBufferDirect(J,k,Y,K,y,Se),y.onAfterRender(N,k,J,Y,K,Se)}function Ms(y,k,J){k.isScene!==!0&&(k=$e);const Y=q.get(y),K=T.state.lights,Se=T.state.shadowsArray,Te=K.state.version,xe=ue.getParameters(y,K.state,Se,k,J,T.state.lightProbeGridArray),we=ue.getProgramCacheKey(xe);let Pe=Y.programs;Y.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?k.environment:null,Y.fog=k.fog;const qe=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;Y.envMap=ae.get(y.envMap||Y.environment,qe),Y.envMapRotation=Y.environment!==null&&y.envMap===null?k.environmentRotation:y.envMapRotation,Pe===void 0&&(y.addEventListener("dispose",yn),Pe=new Map,Y.programs=Pe);let Je=Pe.get(we);if(Je!==void 0){if(Y.currentProgram===Je&&Y.lightsStateVersion===Te)return Kc(y,xe),Je}else xe.uniforms=ue.getUniforms(y),V!==null&&y.isNodeMaterial&&V.build(y,J,xe),y.onBeforeCompile(xe,N),Je=ue.acquireProgram(xe,we),Pe.set(we,Je),Y.uniforms=xe.uniforms;const Ae=Y.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Ae.clippingPlanes=Ie.uniform),Kc(y,xe),Y.needsLights=Sp(y),Y.lightsStateVersion=Te,Y.needsLights&&(Ae.ambientLightColor.value=K.state.ambient,Ae.lightProbe.value=K.state.probe,Ae.sunLights.value=K.state.sun,Ae.sunLightShadows.value=K.state.sunShadow,Ae.directionalLights.value=K.state.directional,Ae.directionalLightShadows.value=K.state.directionalShadow,Ae.spotLights.value=K.state.spot,Ae.spotLightShadows.value=K.state.spotShadow,Ae.rectAreaLights.value=K.state.rectArea,Ae.ltc_1.value=K.state.rectAreaLTC1,Ae.ltc_2.value=K.state.rectAreaLTC2,Ae.pointLights.value=K.state.point,Ae.pointLightShadows.value=K.state.pointShadow,Ae.hemisphereLights.value=K.state.hemi,Ae.sunShadowMatrix.value=K.state.sunShadowMatrix,Ae.sunShadowCascade.value=K.state.sunShadowCascade,Ae.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Ae.spotLightMatrix.value=K.state.spotLightMatrix,Ae.spotLightMap.value=K.state.spotLightMap,Ae.pointShadowMatrix.value=K.state.pointShadowMatrix),Y.lightProbeGrid=T.state.lightProbeGridArray.length>0,Y.currentProgram=Je,Y.uniformsList=null,Je}function Yc(y){if(y.uniformsList===null){const k=y.currentProgram.getUniforms();y.uniformsList=fa.seqWithValue(k.seq,y.uniforms)}return y.uniformsList}function Kc(y,k){const J=q.get(y);J.outputColorSpace=k.outputColorSpace,J.batching=k.batching,J.batchingColor=k.batchingColor,J.instancing=k.instancing,J.instancingColor=k.instancingColor,J.instancingMorph=k.instancingMorph,J.skinning=k.skinning,J.morphTargets=k.morphTargets,J.morphNormals=k.morphNormals,J.morphColors=k.morphColors,J.morphTargetsCount=k.morphTargetsCount,J.numClippingPlanes=k.numClippingPlanes,J.numIntersection=k.numClipIntersection,J.vertexAlphas=k.vertexAlphas,J.vertexTangents=k.vertexTangents,J.toneMapping=k.toneMapping}function _p(y,k){if(y.length===0)return null;if(y.length===1)return y[0].texture!==null?y[0]:null;M.setFromMatrixPosition(k.matrixWorld);for(let J=0,Y=y.length;J<Y;J++){const K=y[J];if(K.texture!==null&&K.boundingBox.containsPoint(M))return K}return null}function vp(y,k,J,Y,K){k.isScene!==!0&&(k=$e),Z.resetTextureUnits();const Se=k.fog,Te=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?k.environment:null,xe=W===null?N.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:tt.workingColorSpace,we=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,Pe=ae.get(Y.envMap||Te,we),qe=Y.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Je=!!J.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Ae=!!J.morphAttributes.position,ct=!!J.morphAttributes.normal,Mt=!!J.morphAttributes.color;let gt=Ln;Y.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(gt=N.toneMapping);const dt=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Dt=dt!==void 0?dt.length:0,be=q.get(Y),zt=T.state.lights;if(Ee===!0&&(We===!0||y!==I)){const pt=y===I&&Y.id===L;Ie.setState(Y,y,pt)}let st=!1;Y.version===be.__version?(be.needsLights&&be.lightsStateVersion!==zt.state.version||be.outputColorSpace!==xe||K.isBatchedMesh&&be.batching===!1||!K.isBatchedMesh&&be.batching===!0||K.isBatchedMesh&&be.batchingColor===!0&&K._colorsTexture===null||K.isBatchedMesh&&be.batchingColor===!1&&K._colorsTexture!==null||K.isInstancedMesh&&be.instancing===!1||!K.isInstancedMesh&&be.instancing===!0||K.isSkinnedMesh&&be.skinning===!1||!K.isSkinnedMesh&&be.skinning===!0||K.isInstancedMesh&&be.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&be.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&be.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&be.instancingMorph===!1&&K.morphTexture!==null||be.envMap!==Pe||Y.fog===!0&&be.fog!==Se||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==Ie.numPlanes||be.numIntersection!==Ie.numIntersection)||be.vertexAlphas!==qe||be.vertexTangents!==Je||be.morphTargets!==Ae||be.morphNormals!==ct||be.morphColors!==Mt||be.toneMapping!==gt||be.morphTargetsCount!==Dt||!!be.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(st=!0):(st=!0,be.__version=Y.version);let an=be.currentProgram;st===!0&&(an=Ms(Y,k,K),V&&Y.isNodeMaterial&&V.onUpdateProgram(Y,an,be));let En=!1,si=!1,Ki=!1;const ft=an.getUniforms(),St=be.uniforms;if(g.useProgram(an.program)&&(En=!0,si=!0,Ki=!0),Y.id!==L&&(L=Y.id,si=!0),be.needsLights){const pt=_p(T.state.lightProbeGridArray,K);be.lightProbeGrid!==pt&&(be.lightProbeGrid=pt,si=!0)}if(En||I!==y){g.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),ft.setValue(z,"projectionMatrix",y.projectionMatrix),ft.setValue(z,"viewMatrix",y.matrixWorldInverse);const oi=ft.map.cameraPosition;oi!==void 0&&oi.setValue(z,rt.setFromMatrixPosition(y.matrixWorld)),R.logarithmicDepthBuffer&&ft.setValue(z,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&ft.setValue(z,"isOrthographic",y.isOrthographicCamera===!0),I!==y&&(I=y,si=!0,Ki=!0)}if(be.needsLights&&(zt.state.sunShadowMap.length>0&&ft.setValue(z,"sunShadowMap",zt.state.sunShadowMap,Z),zt.state.directionalShadowMap.length>0&&ft.setValue(z,"directionalShadowMap",zt.state.directionalShadowMap,Z),zt.state.spotShadowMap.length>0&&ft.setValue(z,"spotShadowMap",zt.state.spotShadowMap,Z),zt.state.pointShadowMap.length>0&&ft.setValue(z,"pointShadowMap",zt.state.pointShadowMap,Z)),K.isSkinnedMesh){ft.setOptional(z,K,"bindMatrix"),ft.setOptional(z,K,"bindMatrixInverse");const pt=K.skeleton;pt&&(pt.boneTexture===null&&pt.computeBoneTexture(),ft.setValue(z,"boneTexture",pt.boneTexture,Z))}K.isBatchedMesh&&(ft.setOptional(z,K,"batchingTexture"),ft.setValue(z,"batchingTexture",K._matricesTexture,Z),ft.setOptional(z,K,"batchingIdTexture"),ft.setValue(z,"batchingIdTexture",K._indirectTexture,Z),ft.setOptional(z,K,"batchingColorTexture"),K._colorsTexture!==null&&ft.setValue(z,"batchingColorTexture",K._colorsTexture,Z));const ai=J.morphAttributes;if((ai.position!==void 0||ai.normal!==void 0||ai.color!==void 0)&&G.update(K,J,an),(si||be.receiveShadow!==K.receiveShadow)&&(be.receiveShadow=K.receiveShadow,ft.setValue(z,"receiveShadow",K.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&k.environment!==null&&(St.envMapIntensity.value=k.environmentIntensity),St.dfgLUT!==void 0&&(St.dfgLUT.value=xy()),si){if(ft.setValue(z,"toneMappingExposure",N.toneMappingExposure),be.needsLights&&xp(St,Ki),Se&&Y.fog===!0&&Re.refreshFogUniforms(St,Se),Re.refreshMaterialUniforms(St,Y,ee,Q,T.state.transmissionRenderTarget[y.id]),be.needsLights&&be.lightProbeGrid){const pt=be.lightProbeGrid;St.probesSH.value=pt.texture,St.probesMin.value.copy(pt.boundingBox.min),St.probesMax.value.copy(pt.boundingBox.max),St.probesResolution.value.copy(pt.resolution)}fa.upload(z,Yc(be),St,Z)}if(Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(fa.upload(z,Yc(be),St,Z),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&ft.setValue(z,"center",K.center),ft.setValue(z,"modelViewMatrix",K.modelViewMatrix),ft.setValue(z,"normalMatrix",K.normalMatrix),ft.setValue(z,"modelMatrix",K.matrixWorld),Y.uniformsGroups!==void 0){const pt=Y.uniformsGroups;for(let oi=0,$i=pt.length;oi<$i;oi++){const Zc=pt[oi];re.update(Zc,an),re.bind(Zc,an)}}return an}function xp(y,k){y.ambientLightColor.needsUpdate=k,y.lightProbe.needsUpdate=k,y.sunLights.needsUpdate=k,y.sunLightShadows.needsUpdate=k,y.directionalLights.needsUpdate=k,y.directionalLightShadows.needsUpdate=k,y.pointLights.needsUpdate=k,y.pointLightShadows.needsUpdate=k,y.spotLights.needsUpdate=k,y.spotLightShadows.needsUpdate=k,y.rectAreaLights.needsUpdate=k,y.hemisphereLights.needsUpdate=k}function Sp(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(y,k,J){const Y=q.get(y);Y.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),q.get(y.texture).__webglTexture=k,q.get(y.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:J,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,k){const J=q.get(y);J.__webglFramebuffer=k,J.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(y,k=0,J=0){W=y,U=k,F=J;let Y=null,K=!1,Se=!1;if(y){const xe=q.get(y);if(xe.__useDefaultFramebuffer!==void 0){g.bindFramebuffer(z.FRAMEBUFFER,xe.__webglFramebuffer),X.copy(y.viewport),se.copy(y.scissor),oe=y.scissorTest,g.viewport(X),g.scissor(se),g.setScissorTest(oe),L=-1;return}else if(xe.__webglFramebuffer===void 0)Z.setupRenderTarget(y);else if(xe.__hasExternalTextures)Z.rebindTextures(y,q.get(y.texture).__webglTexture,q.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const qe=y.depthTexture;if(xe.__boundDepthTexture!==qe){if(qe!==null&&q.has(qe)&&(y.width!==qe.image.width||y.height!==qe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(y)}}const we=y.texture;(we.isData3DTexture||we.isDataArrayTexture||we.isCompressedArrayTexture)&&(Se=!0);const Pe=q.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Pe[k])?Y=Pe[k][J]:Y=Pe[k],K=!0):y.samples>0&&Z.useMultisampledRTT(y)===!1?Y=q.get(y).__webglMultisampledFramebuffer:Array.isArray(Pe)?Y=Pe[J]:Y=Pe,X.copy(y.viewport),se.copy(y.scissor),oe=y.scissorTest}else X.copy(H).multiplyScalar(ee).floor(),se.copy(ie).multiplyScalar(ee).floor(),oe=me;if(J!==0&&(Y=E),g.bindFramebuffer(z.FRAMEBUFFER,Y)&&g.drawBuffers(y,Y),g.viewport(X),g.scissor(se),g.setScissorTest(oe),K){const xe=q.get(y.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+k,xe.__webglTexture,J)}else if(Se){const xe=k;for(let we=0;we<y.textures.length;we++){const Pe=q.get(y.textures[we]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+we,Pe.__webglTexture,J,xe)}}else if(y!==null&&J!==0){const xe=q.get(y.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,xe.__webglTexture,J)}L=-1};function $c(y){const k=q.get(y);return(k.__readFormat!==y.format||k.__readType!==y.type)&&(k.__readFormat=y.format,k.__readType=y.type,k.__formatReadable=R.textureFormatReadable(y.format),k.__typeReadable=R.textureTypeReadable(y.type)),k}this.readRenderTargetPixels=function(y,k,J,Y,K,Se,Te,xe=0){if(!(y&&y.isWebGLRenderTarget)){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=q.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Te!==void 0&&(we=we[Te]),we){g.bindFramebuffer(z.FRAMEBUFFER,we);try{const Pe=y.textures[xe],qe=Pe.format,Je=Pe.type;y.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+xe);const Ae=$c(Pe);if(Ae.__formatReadable===!1){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ae.__typeReadable===!1){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=y.width-Y&&J>=0&&J<=y.height-K&&z.readPixels(k,J,Y,K,pe.convert(qe),pe.convert(Je),Se)}finally{const Pe=W!==null?q.get(W).__webglFramebuffer:null;g.bindFramebuffer(z.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(y,k,J,Y,K,Se,Te,xe=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=q.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Te!==void 0&&(we=we[Te]),we)if(k>=0&&k<=y.width-Y&&J>=0&&J<=y.height-K){g.bindFramebuffer(z.FRAMEBUFFER,we);const Pe=y.textures[xe],qe=Pe.format,Je=Pe.type;y.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+xe);const Ae=$c(Pe);if(Ae.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ae.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ct=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,ct),z.bufferData(z.PIXEL_PACK_BUFFER,Se.byteLength,z.STREAM_READ),z.readPixels(k,J,Y,K,pe.convert(qe),pe.convert(Je),0),z.bindBuffer(z.PIXEL_PACK_BUFFER,null);const Mt=W!==null?q.get(W).__webglFramebuffer:null;g.bindFramebuffer(z.FRAMEBUFFER,Mt);const gt=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await N0(z,gt,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,ct),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Se),z.bindBuffer(z.PIXEL_PACK_BUFFER,null),z.deleteBuffer(ct),z.deleteSync(gt),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,k=null,J=0){const Y=Math.pow(2,-J),K=Math.floor(y.image.width*Y),Se=Math.floor(y.image.height*Y),Te=k!==null?k.x:0,xe=k!==null?k.y:0;Z.setTexture2D(y,0),z.copyTexSubImage2D(z.TEXTURE_2D,J,0,0,Te,xe,K,Se),g.unbindTexture()},this.copyTextureToTexture=function(y,k,J=null,Y=null,K=0,Se=0){let Te,xe,we,Pe,qe,Je,Ae,ct,Mt;const gt=y.isCompressedTexture?y.mipmaps[Se]:y.image;if(J!==null)Te=J.max.x-J.min.x,xe=J.max.y-J.min.y,we=J.isBox3?J.max.z-J.min.z:1,Pe=J.min.x,qe=J.min.y,Je=J.isBox3?J.min.z:0;else{const St=Math.pow(2,-K);Te=Math.floor(gt.width*St),xe=Math.floor(gt.height*St),y.isDataArrayTexture?we=gt.depth:y.isData3DTexture?we=Math.floor(gt.depth*St):we=1,Pe=0,qe=0,Je=0}Y!==null?(Ae=Y.x,ct=Y.y,Mt=Y.z):(Ae=0,ct=0,Mt=0);const dt=pe.convert(k.format),Dt=pe.convert(k.type);let be;k.isData3DTexture?(Z.setTexture3D(k,0),be=z.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(Z.setTexture2DArray(k,0),be=z.TEXTURE_2D_ARRAY):(Z.setTexture2D(k,0),be=z.TEXTURE_2D),g.activeTexture(z.TEXTURE0),g.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,k.flipY),g.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),g.pixelStorei(z.UNPACK_ALIGNMENT,k.unpackAlignment);const zt=g.getParameter(z.UNPACK_ROW_LENGTH),st=g.getParameter(z.UNPACK_IMAGE_HEIGHT),an=g.getParameter(z.UNPACK_SKIP_PIXELS),En=g.getParameter(z.UNPACK_SKIP_ROWS),si=g.getParameter(z.UNPACK_SKIP_IMAGES);g.pixelStorei(z.UNPACK_ROW_LENGTH,gt.width),g.pixelStorei(z.UNPACK_IMAGE_HEIGHT,gt.height),g.pixelStorei(z.UNPACK_SKIP_PIXELS,Pe),g.pixelStorei(z.UNPACK_SKIP_ROWS,qe),g.pixelStorei(z.UNPACK_SKIP_IMAGES,Je);const Ki=y.isDataArrayTexture||y.isData3DTexture,ft=k.isDataArrayTexture||k.isData3DTexture;if(y.isDepthTexture){const St=q.get(y),ai=q.get(k),pt=q.get(St.__renderTarget),oi=q.get(ai.__renderTarget);g.bindFramebuffer(z.READ_FRAMEBUFFER,pt.__webglFramebuffer),g.bindFramebuffer(z.DRAW_FRAMEBUFFER,oi.__webglFramebuffer);for(let $i=0;$i<we;$i++)Ki&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,q.get(y).__webglTexture,K,Je+$i),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,q.get(k).__webglTexture,Se,Mt+$i)),z.blitFramebuffer(Pe,qe,Te,xe,Ae,ct,Te,xe,z.DEPTH_BUFFER_BIT,z.NEAREST);g.bindFramebuffer(z.READ_FRAMEBUFFER,null),g.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(K!==0||y.isRenderTargetTexture||q.has(y)){const St=q.get(y),ai=q.get(k);g.bindFramebuffer(z.READ_FRAMEBUFFER,A),g.bindFramebuffer(z.DRAW_FRAMEBUFFER,D);for(let pt=0;pt<we;pt++)Ki?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,St.__webglTexture,K,Je+pt):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,St.__webglTexture,K),ft?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,ai.__webglTexture,Se,Mt+pt):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,ai.__webglTexture,Se),K!==0?z.blitFramebuffer(Pe,qe,Te,xe,Ae,ct,Te,xe,z.COLOR_BUFFER_BIT,z.NEAREST):ft?z.copyTexSubImage3D(be,Se,Ae,ct,Mt+pt,Pe,qe,Te,xe):z.copyTexSubImage2D(be,Se,Ae,ct,Pe,qe,Te,xe);g.bindFramebuffer(z.READ_FRAMEBUFFER,null),g.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else ft?y.isDataTexture||y.isData3DTexture?z.texSubImage3D(be,Se,Ae,ct,Mt,Te,xe,we,dt,Dt,gt.data):k.isCompressedArrayTexture?z.compressedTexSubImage3D(be,Se,Ae,ct,Mt,Te,xe,we,dt,gt.data):z.texSubImage3D(be,Se,Ae,ct,Mt,Te,xe,we,dt,Dt,gt):y.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Se,Ae,ct,Te,xe,dt,Dt,gt.data):y.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Se,Ae,ct,gt.width,gt.height,dt,gt.data):z.texSubImage2D(z.TEXTURE_2D,Se,Ae,ct,Te,xe,dt,Dt,gt);g.pixelStorei(z.UNPACK_ROW_LENGTH,zt),g.pixelStorei(z.UNPACK_IMAGE_HEIGHT,st),g.pixelStorei(z.UNPACK_SKIP_PIXELS,an),g.pixelStorei(z.UNPACK_SKIP_ROWS,En),g.pixelStorei(z.UNPACK_SKIP_IMAGES,si),Se===0&&k.generateMipmaps&&z.generateMipmap(be),g.unbindTexture()},this.initRenderTarget=function(y){q.get(y).__webglFramebuffer===void 0&&Z.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?Z.setTextureCube(y,0):y.isData3DTexture?Z.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?Z.setTexture2DArray(y,0):Z.setTexture2D(y,0),g.unbindTexture()},this.resetState=function(){U=0,F=0,W=null,g.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=tt._getUnpackColorSpace()}}const My=new _s(1,28,18),yy=new za(.03,.03,.34,8),Ey=new _s(.065,10,8);function If(n,e){const t=Mr(n),i=new yi;i.name=n;const r=new Fi({color:e&&!t.rolls?"#ffffff":t.shell,emissive:"#000000",roughness:t.rolls?.55:.62,metalness:.04,map:e??null}),s=new Et(My,r);return s.name="shell",i.add(s),n==="scout"&&i.add(Ty()),i}function by(n,e,t){const i=n.getObjectByName("shell");if(!i)return;const r=i.material,s=Mr(e);if(r.map){r.color.set(t?"#ff8aa0":s.rolls?s.shell:"#ffffff");return}const a=t?"#ff8aa0":s.shell;r.color.set(a),r.emissive.set(a)}function js(n){n.traverse(e=>{const t=e;if(!t.isMesh)return;const i=Array.isArray(t.material)?t.material:[t.material];for(const r of i)r.dispose()})}function Ty(){const n=new yi;n.name="antenna";const e=new Fi({color:"#d5dbe6",metalness:.62,roughness:.32}),t=new Fi({color:"#8ec5ff",emissive:"#3c7dff",emissiveIntensity:.85,roughness:.3}),i=new Et(yy,e);i.position.y=.16;const r=new Et(Ey,t);return r.position.y=.36,n.add(i,r),n.position.set(.18,.9,.28),n}const Uf={2:{fill:"#eee4da",text:"#776e65"},4:{fill:"#ede0c8",text:"#776e65"},8:{fill:"#f2b179",text:"#f9f6f2"},16:{fill:"#f59563",text:"#f9f6f2"},32:{fill:"#f67c5f",text:"#f9f6f2"},64:{fill:"#f65e3b",text:"#f9f6f2"},128:{fill:"#edcf72",text:"#f9f6f2"},256:{fill:"#edcc61",text:"#f9f6f2"},512:{fill:"#edc850",text:"#f9f6f2"},1024:{fill:"#edc53f",text:"#f9f6f2"},2048:{fill:"#edc22e",text:"#f9f6f2"},4096:{fill:"#3c3a32",text:"#f9f6f2"}};function ea(n){return n<2?{fill:"#d5d5e2",text:"#5c5c70"}:Uf[n]??Uf[4096]}const wy=7.4,Ay=3.35,Ry=9,Nf=.55;function Cy(n,e){n.position.set(e.x*.35,Nf+Ay,e.z+wy),n.lookAt(e.x*.15,Nf,e.z-Ry),n.updateMatrixWorld(!0)}const Py=16724821,Ly=16752412,Dy=6970367,Iy=58879,Uy=16722902;class Ny{constructor(e,t){Fe(this,"renderer");Fe(this,"scene",new J0);Fe(this,"camera");Fe(this,"labels");Fe(this,"bodies",new Map);Fe(this,"floors",new Map);Fe(this,"labelNodes",new Map);Fe(this,"sphere",new _s(1,28,18));Fe(this,"box",new Pr(1,1,1));Fe(this,"cone",new Sc(.2,1,6));Fe(this,"ballMaterials",new Map);Fe(this,"spikeMat");Fe(this,"barrierMat");Fe(this,"blockMat");Fe(this,"deckA");Fe(this,"deckB");Fe(this,"railL");Fe(this,"railR");Fe(this,"player");Fe(this,"skin","visor");Fe(this,"textures",new Map);Fe(this,"remotes",new Map);Fe(this,"remoteLabels",new Map);Fe(this,"proj",new $);Fe(this,"roll",0);Fe(this,"lastDistance",0);Fe(this,"width",1);Fe(this,"height",1);this.labels=t,this.renderer=new Sy({antialias:!0,alpha:!1}),this.renderer.setClearColor(1181720),this.renderer.outputColorSpace=Yt,e.prepend(this.renderer.domElement),this.camera=new ln(60,1,.1,220),this.scene.background=new et(1181720),this.scene.fog=new vc(1181720,16,62);const i=new __(12044031,2756656,.85),r=new S_(16774368,1.35);r.position.set(6,14,8),this.scene.add(i,r),this.spikeMat=this.lit(Py,.45),this.barrierMat=this.lit(Ly,.35),this.blockMat=this.lit(Dy,.18),this.deckA=new Fi({color:1513516,roughness:.92,metalness:.04}),this.deckB=new Fi({color:1908800,roughness:.92,metalness:.04}),this.railL=this.lit(Iy,.85),this.railR=this.lit(Uy,.85),this.setSkin("visor"),this.scene.add(this.stars()),this.resize()}setSkin(e){this.player&&this.skin===e||(this.player&&(this.scene.remove(this.player),js(this.player)),this.skin=e,this.player=If(e,this.textureFor(e)),this.scene.add(this.player))}resize(){const e=this.renderer.domElement,t=e.clientWidth||window.innerWidth,i=e.clientHeight||window.innerHeight;t<2||i<2||t===this.width&&i===this.height||(this.width=t,this.height=i,this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),this.renderer.setSize(t,i,!1),this.camera.aspect=t/i,this.camera.updateProjectionMatrix())}clear(){for(const e of this.bodies.values())this.scene.remove(e);this.bodies.clear();for(const e of this.floors.values())this.scene.remove(e);this.floors.clear();for(const e of this.labelNodes.values())e.remove();this.labelNodes.clear();for(const e of this.remotes.values())this.scene.remove(e.group),js(e.group);this.remotes.clear();for(const e of this.remoteLabels.values())e.remove();this.remoteLabels.clear(),this.roll=0,this.lastDistance=0}sync(e,t=e.player){const i=e.player;this.syncFloors(e.floors),this.syncBodies(e.bodies),this.syncRemotes(e.remotes);const r=e.distance-this.lastDistance;r>0&&(this.roll+=r/Math.max(.25,i.radius)),this.lastDistance=e.distance;const s=1+e.pop*.28;this.player.scale.setScalar(i.radius*s),this.player.position.set(i.x,i.y,i.z),this.rollShell(this.player,this.skin,this.roll),by(this.player,this.skin,e.invuln>0);const a=ea(i.value);Cy(this.camera,t),this.placeLabel(this.labelFor("player"),i.value<2?"?":String(i.value),a,i.x,i.y+i.radius*1.15,i.z,22+i.radius*28),this.renderer.render(this.scene,this.camera)}syncFloors(e){const t=new Set;for(const i of e){t.add(i.id);let r=this.floors.get(i.id);r||(r=this.makeFloor(i),this.floors.set(i.id,r),this.scene.add(r))}for(const[i,r]of this.floors)t.has(i)||(this.scene.remove(r),this.floors.delete(i))}makeFloor(e){const t=new yi,i=e.z1-e.z0,r=new Et(this.box,e.id%2===0?this.deckA:this.deckB);r.scale.set(e.halfWidth*2,.4,i),r.position.y=-.2;const s=new Et(this.box,this.railL);s.scale.set(.16,.28,i),s.position.set(-e.halfWidth,.14,0);const a=new Et(this.box,this.railR);a.scale.set(.16,.28,i),a.position.set(e.halfWidth,.14,0);const o=new Et(this.box,this.deckB);return o.scale.set(.08,.02,i),o.position.y=.012,t.add(r,s,a,o),t.position.set(0,0,(e.z0+e.z1)/2),t}syncBodies(e){const t=new Set;for(const i of e){if(!i.alive)continue;t.add(i.id);let r=this.bodies.get(i.id);if(r||(r=this.makeBody(i),this.bodies.set(i.id,r),this.scene.add(r)),r.position.set(i.x,i.y,i.z),i.kind==="ball"){r.scale.setScalar(Math.max(.2,i.radius));const s=r,a=ea(i.value);s.material=this.ballMaterial(a.fill);const o=this.labelFor(i.id);this.placeLabel(o,i.pending||i.value<2?"?":String(i.value),a,i.x,i.y,i.z,16+i.radius*18)}}for(const[i,r]of this.bodies){if(t.has(i))continue;this.scene.remove(r),this.bodies.delete(i);const s=this.labelNodes.get(i);s&&(s.remove(),this.labelNodes.delete(i))}}makeBody(e){if(e.kind==="ball")return new Et(this.sphere,this.ballMaterial(ea(e.value).fill));if(e.kind==="block"){const r=new Et(this.box,this.blockMat);return r.scale.set(e.hx*2,e.hy*2,e.hz*2),r}const t=new yi,i=new Et(this.box,e.kind==="spike"?this.spikeMat:this.barrierMat);if(i.scale.set(e.hx*2,e.hy*2,e.hz*2),t.add(i),e.kind==="spike"){const r=Math.max(3,Math.floor(e.hx*2/.48)),s=e.hx*2*.86;for(let a=0;a<r;a++){const o=new Et(this.cone,this.spikeMat),l=r===1?0:-s/2+s*a/(r-1);o.scale.set(1,e.hy*1.7,1),o.position.set(l,0,0),t.add(o)}}return t}labelFor(e){const t=e==="player"?-1:e;let i=this.labelNodes.get(t);return i||(i=document.createElement("div"),i.className="ball-label",i.dataset.role=e==="player"?"player":"ball",this.labels.append(i),this.labelNodes.set(t,i)),i}placeLabel(e,t,i,r,s,a,o){if(this.proj.set(r,s,a).project(this.camera),this.proj.z>1){e.hidden=!0;return}const l=Math.hypot(r-this.camera.position.x,s-this.camera.position.y,a-this.camera.position.z);if(l>48){e.hidden=!0;return}e.hidden=!1,e.textContent=t,e.style.color=i.text,e.style.background=i.fill;const c=Math.max(12,Math.min(o,o*8/l));e.style.fontSize=`${c}px`;const h=(this.proj.x*.5+.5)*this.width,p=(-this.proj.y*.5+.5)*this.height;e.style.transform=`translate(${h}px, ${p}px) translate(-50%, -50%)`}syncRemotes(e){const t=new Set;for(const i of e){if(!i.alive||!Ar(i.skin))continue;t.add(i.id);let r=this.remotes.get(i.id);(!r||r.skin!==i.skin)&&(r&&(this.scene.remove(r.group),js(r.group)),r={skin:i.skin,group:If(i.skin,this.textureFor(i.skin))},this.remotes.set(i.id,r),this.scene.add(r.group)),r.group.position.set(i.x,i.y,i.z),r.group.scale.setScalar(Math.max(.2,i.radius));const s=r.group.getObjectByName("shell");s&&Mr(i.skin).rolls&&(s.rotation.x=-i.z/Math.max(.25,i.radius));const a=ea(i.value);this.placeLabel(this.remoteLabel(i.id),String(i.value),a,i.x,i.y+i.radius*1.15,i.z,22+i.radius*28)}for(const[i,r]of this.remotes){if(t.has(i))continue;this.scene.remove(r.group),js(r.group),this.remotes.delete(i);const s=this.remoteLabels.get(i);s&&(s.remove(),this.remoteLabels.delete(i))}}remoteLabel(e){let t=this.remoteLabels.get(e);return t||(t=document.createElement("div"),t.className="ball-label",t.dataset.role="remote",this.labels.append(t),this.remoteLabels.set(e,t)),t}rollShell(e,t,i){const r=e.getObjectByName("shell");r&&(r.rotation.x=Mr(t).rolls?i:0)}textureFor(e){let t=this.textures.get(e);if(t)return t;const i=document.createElement("canvas");return i.width=512,i.height=256,e==="football"?Ng(i):Ig(i,e),t=new l_(i),t.colorSpace=Yt,t.anisotropy=4,this.textures.set(e,t),t}ballMaterial(e){let t=this.ballMaterials.get(e);return t||(t=new Fi({color:e,emissive:e,emissiveIntensity:.22,roughness:.42,metalness:.06}),this.ballMaterials.set(e,t)),t}lit(e,t){return new Fi({color:e,emissive:e,emissiveIntensity:t,roughness:.48,metalness:.08})}stars(){const t=new Float32Array(840);for(let r=0;r<280;r++)t[r*3]=(Math.random()-.5)*160,t[r*3+1]=8+Math.random()*36,t[r*3+2]=-130+Math.random()*180;const i=new sn;return i.setAttribute("position",new Dn(t,3)),new o_(i,new yh({color:16774890,size:.12,transparent:!0,opacity:.85}))}}const Fh="odin-run-2048-music",Fy=.4;let Wr=null,jt=null,dr=null,yc=!1,Ff=0;function Oy(){const n=window.AudioContext??window.webkitAudioContext;return n?(Wr||(Wr=new n),Wr.state==="suspended"&&Wr.resume(),Wr):null}function pi(n,e,t,i){const r=Oy();if(!r)return;const s=r.createOscillator(),a=r.createGain();s.type=t,s.frequency.value=n,a.gain.setValueAtTime(i,r.currentTime),a.gain.exponentialRampToValueAtTime(1e-4,r.currentTime+e),s.connect(a),a.connect(r.destination),s.start(),s.stop(r.currentTime+e)}function Wa(){if(dr!==null)return dr;try{dr=localStorage.getItem(Fh)!=="off"}catch{dr=!0}return dr}function By(){return Wa()}function ky(){return new URL("music/write-protect-on-c64.mp3",document.baseURI).href}function Oh(){Wa()&&(jt||(jt=new Audio(ky()),jt.loop=!0,jt.preload="auto",jt.volume=Fy),jt.paused&&jt.play().catch(()=>{}))}function Bh(){yc=!0,Oh()}function zy(){const n=!Wa();dr=n;try{localStorage.setItem(Fh,n?"on":"off")}catch{}return yc=!0,n?Oh():jt==null||jt.pause(),n}function Hy(n){!yc||!Wa()||!jt||!jt.paused||n<Ff||(Ff=n+1,jt.play().catch(()=>{}))}function Gy(n){n==="jump"?pi(520,.09,"square",.04):n==="merge"?(pi(440,.1,"triangle",.06),pi(660,.14,"triangle",.05)):n==="hurt"?pi(110,.18,"sawtooth",.05):n==="die"?pi(70,.32,"sawtooth",.06):n==="win"&&(pi(523,.12,"triangle",.06),pi(659,.14,"triangle",.06),pi(784,.2,"triangle",.06))}const ta={x:0,y:0,z:0},Vy=1.6,Wy=.45,Xy=.08;function Of(n){return n*n*n}function Bf(n,e,t=1){const i=n.x-e.x,r=n.y-e.y,s=n.radius+e.radius;if(s<=0||Math.abs(n.z-e.z)>=s||Math.hypot(i,r)>=s)return ta;const o=Of(n.radius),l=Of(e.radius),c=l/(o+l),h=Math.abs(i)>1e-6?Math.sign(i):t>=0?1:-1;if(Math.abs(r)>Math.abs(i)){const u=Math.sqrt(Math.max(0,s*s-i*i))-Math.abs(r);return u<=0?ta:{x:0,y:(Math.abs(r)>1e-6?Math.sign(r):1)*u*c,z:0}}const m=Math.sqrt(Math.max(0,s*s-r*r))-Math.abs(i);if(m<=0)return ta;const _=Math.min(Vy,l/Math.max(o,1e-8)),S=Math.min(Xy,m*_*Wy);return{x:h*(m*c+S),y:0,z:0}}const kh=24,qy=8.4,Yy=9.5,br=11,is=.014,wa=20,Kt=4.6,Ho=1.6,zh=24,Ec=120,Ky=28,$y=42,Xl=.1,Zy=.12,Jy=3.1,Qy=.75,jy=.28,eE=.46,kf=1.15,zf=.75;function vs(n){const e=Math.log2(n);return Number.isFinite(e)?.4+(e-1)*.055:.4}function Hh(){return Math.log(wa/br)/is}function un(n){if(n<=0)return 0;const e=Hh();return n>=e?(br-wa)/is-wa*(n-e):br/is*(1-Math.exp(is*n))}function tE(n){return n<=0?br:n>=Hh()?wa:br*Math.exp(is*n)}function nE(n,e,t){return un(n)+(t-un(e))}function iE(n,e,t){if(t)return un(n);let i=n;for(const r of e)r>i&&(i=r);return un(i)}function rE(n,e,t,i){if(!e)return{z:t.z,heldZ:void 0};if(!t.alive){const r=i??nE(n,t.time,t.z);return{z:r,heldZ:r}}return{z:un(n),heldZ:void 0}}function sE(n,e,t){if(n.status!=="running")return;const i=e-n.time;if(i<=.02)return;const r=i>.75?.45:.2,s=Math.min(r*t,i),a=n.authority==="solo"?n.player.z-un(n.time):0;n.time+=s,n.player.z=un(n.time)+a,n.distance=Math.max(n.distance,Math.max(0,-n.player.z))}function aE(n){let e=n>>>0;return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function oE(n,e,t=0,i=0){const r=vs(2);return{player:{x:0,y:r,z:0,vy:0,value:2,grounded:!0,radius:r},bodies:[],floors:[],status:"ready",cause:null,distance:0,speed:br,bestValue:t,bestDistance:i,time:0,invuln:0,pop:0,coyote:Xl,jumpBuffer:0,jumpHeld:!1,announcedWin:!1,showWin:!1,procedural:e,generatedTo:0,segmentIndex:0,nextId:1,events:[],rng:aE(n),remotes:[],authority:"solo",merges:[],locks:[],knocks:[],removed:new Set,held:new Set,pendingLocks:new Map,playerId:""}}function Xa(n=1,e=0,t=0){const i=oE(n,!0,e,t);return $n(i,-4,16,Kt),i.generatedTo=-4,wc(i,-Ec),i}function Gh(n){n.status==="ready"&&(n.status="running")}function lE(n,e,t){const i=Xa(e,n.bestValue,n.bestDistance);return i.jumpHeld=t,i.status="running",i}function cE(n,e,t){if(n.status!=="running")return;n.events.length=0,n.merges.length=0,n.locks.length=0,n.knocks.length=0;const i=e.jump&&!n.jumpHeld;n.jumpHeld=e.jump;let r=Math.min(Math.max(t,0),.05),s=i;for(;r>0&&n.status==="running";){const a=Math.min(.008333333333333333,r);uE(n,e,a,s),s=!1,r-=a}n.status==="running"&&ME(n)}function uE(n,e,t,i){const r=n.player,s=n.authority==="solo"?r.z-un(n.time):0;n.time+=t,n.invuln>0&&(n.invuln-=t),n.pop>0&&(n.pop=Math.max(0,n.pop-t*2.5)),n.jumpBuffer>0&&(n.jumpBuffer-=t),yE(n);const a=r.grounded||n.coyote>0;(i||n.jumpBuffer>0)&&a?(r.vy=qy,r.grounded=!1,n.coyote=0,n.jumpBuffer=0,n.events.push("jump")):i&&(n.jumpBuffer=Zy),r.x+=e.strafe*Yy*t;const o=kh*(e.fastFall&&!r.grounded?Jy:1);r.vy-=o*t,r.y+=r.vy*t,n.speed=tE(n.time),r.z=un(n.time)+s,n.distance=Math.max(0,-r.z);const l=r.grounded;if(fE(n),Hf(n),n.authority!=="solo"&&(r.z=un(n.time)),r.grounded||l?n.coyote=Xl:n.coyote=Math.max(0,n.coyote-t),r.y<-2.2){Vh(n,"fall");return}mE(n),n.status==="running"&&(gE(n),Hf(n),_E(n,t),vE(n),n.procedural&&wc(n,Xh(n)-Ec),n.distance>n.bestDistance&&(n.bestDistance=n.distance))}function Vh(n,e){n.status!=="dead"&&(Wh(n),n.distance>n.bestDistance&&(n.bestDistance=n.distance),n.status="dead",n.cause=e,n.events.push("die"))}function Wh(n){n.player.value>n.bestValue&&(n.bestValue=n.player.value)}function bc(n,e){const t=n.player;t.value=e,t.radius=vs(e),t.y<t.radius&&(t.y=t.radius),Wh(n),e>=2048&&!n.announcedWin&&(n.announcedWin=!0,n.showWin=!0,n.events.push("win"))}function fE(n){const e=n.player;if(dE(n,e.x,e.z)!==null&&e.vy<=0&&e.y<=e.radius+.12){e.y=e.radius,e.vy=0,e.grounded=!0;return}e.grounded=!1}function dE(n,e,t){for(const i of n.floors)if(t>=i.z0&&t<=i.z1&&Math.abs(e)<=i.halfWidth)return i;return null}function Hf(n){const e=n.player,t=n.authority!=="solo";for(let i=0;i<4;i++){let r=!1;for(const s of n.bodies)s.kind!=="block"||!s.alive||hE(e,s,t)&&(r=!0);if(!r)return}}function hE(n,e,t){const i=n.x-e.x,r=n.y-e.y,s=n.z-e.z,a=e.hx+n.radius-Math.abs(i),o=e.hy+n.radius-Math.abs(r),l=e.hz+n.radius-Math.abs(s);if(a<=0||o<=0||l<=0)return!1;const c=()=>{n.x+=Math.sign(i||1)*a},h=()=>{n.y+=Math.sign(r||1)*o,r>=0?(n.vy<0&&(n.vy=0),n.grounded=!0):n.vy>0&&(n.vy=0)};return t?(r>0&&o<=a?h():c(),!0):(a<o&&a<l?c():o<l?h():n.z+=Math.sign(s||1)*l,!0)}function pE(n,e){const t=Go(n.x,e.x-e.hx,e.x+e.hx),i=Go(n.y,e.y-e.hy,e.y+e.hy),r=Go(n.z,e.z-e.hz,e.z+e.hz),s=n.x-t,a=n.y-i,o=n.z-r;return s*s+a*a+o*o<n.radius*n.radius}function mE(n){if(!(n.invuln>0)){for(const e of n.bodies)if(!(!e.alive||e.kind!=="spike"&&e.kind!=="barrier")&&pE(n.player,e)){if(n.player.value<=2){Vh(n,"spike");return}bc(n,n.player.value/2),n.invuln=Qy,n.pop=1,n.events.push("hurt");return}}}function gE(n){const e=n.player;for(const t of n.bodies){if(t.kind!=="ball"||!t.alive||t.flying)continue;if(t.pending){if(n.authority==="guest")continue;qh(n,t,n.player.value)}const i=e.x-t.x,r=e.y-t.y,s=e.z-t.z,a=e.radius+t.radius;if(!(i*i+r*r+s*s>a*a))if(t.value===e.value){const o=e.value;t.alive=!1,n.removed.add(t.id),n.authority==="guest"&&n.held.add(t.id),bc(n,e.value*2),n.merges.push({id:t.id,valueBefore:o}),n.pop=1,n.events.push("merge")}else t.flying=!0,t.vx=(Math.sign(t.x-e.x)||1)*7,t.vy=7,n.knocks.push({id:t.id,vx:t.vx,vy:t.vy})}}function _E(n,e){for(const t of n.bodies)!t.flying||!t.alive||(t.vy-=kh*e,t.x+=t.vx*e,t.y+=t.vy*e,t.y<-3&&(t.alive=!1))}function vE(n){const e=SE(n)+Ky;n.bodies=n.bodies.filter(t=>(t.alive||n.held.has(t.id))&&t.z<=e),n.floors=n.floors.filter(t=>t.z0<=e)}function xE(n){n.procedural&&wc(n,Xh(n)-Ec)}function Xh(n){let e=n.player.z;for(const t of n.remotes)t.alive&&(e=Math.min(e,t.z));return e}function SE(n){let e=n.player.z;for(const t of n.remotes)t.alive&&(e=Math.max(e,t.z));return e}function ME(n){const e=n.player,t=n.authority!=="solo";if(t&&(e.z=un(n.time)),n.remotes.length===0)return;const i={x:e.x,y:e.y,z:e.z,radius:e.radius};let r=0,s=0;const a=[];for(const o of n.remotes){if(!o.alive)continue;const l={x:o.x,y:o.y,z:t?e.z:o.z,radius:o.radius},c=o.id>n.playerId?1:-1,h=Bf(i,l,c),p=Bf(l,i,-c);r+=h.x,s+=h.y,a.push({remote:o,x:p.x,y:p.y})}e.x+=r,e.y+=s;for(const o of a)o.remote.x+=o.x,o.remote.y+=o.y;if(t){const o=un(n.time);e.z=o;for(const l of n.remotes)l.alive&&(l.z=o)}}function yE(n){if(n.authority!=="guest")for(const e of n.bodies){if(e.kind!=="ball"||!e.pending||!e.alive)continue;const t=bE(n,e);t!==null&&qh(n,e,t)}}function EE(n,e){return e>=8?Math.min(4096,n*2):e>=6?Math.max(2,n/2):n}function bE(n,e){let t=0,i=1/0,r=!1;const s=(a,o,l)=>{const c=o-e.z;if(c<=0||c>$y)return;const h=Math.hypot(a-e.x,c);h<i&&(i=h,t=l,r=!0)};if(s(n.player.x,n.player.z,n.player.value),n.authority==="host")for(const a of n.remotes)a.alive&&s(a.x,a.z,a.value);return r?t:null}function qh(n,e,t){const i=Math.abs(e.id*17^t)%10;Tc(e,EE(t,i)),n.locks.push({id:e.id,value:e.value})}function Tc(n,e){n.value=e,n.radius=vs(e),n.y=n.radius,n.hx=n.radius,n.hy=n.radius,n.hz=n.radius,n.pending=!1}function TE(n,e,t){const i=n.bodies.find(r=>r.id===e&&r.kind==="ball");if(!i||!i.alive||i.flying){n.removed.has(e)||n.pendingLocks.set(e,t);return}Tc(i,t),n.pendingLocks.delete(e)}function Yh(n,e){n.removed.add(e),n.pendingLocks.delete(e);const t=n.bodies.find(i=>i.id===e);t&&(t.alive=!1)}function wE(n,e,t,i){const r=n.bodies.find(s=>s.id===e&&s.kind==="ball");!r||!r.alive||r.flying||(r.flying=!0,r.vx=t,r.vy=i)}function Kh(n,e){bc(n,e)}function wc(n,e){if(!n.procedural)return;let t=0;for(;n.generatedTo>e&&t++<500;)AE(n)}function AE(n){const e=n.segmentIndex++,t=n.generatedTo,i=t-zh;n.generatedTo=i;const r=(i+t)/2;if(e===0){$n(n,i,t,Kt),da(n,0,r,2);return}if(e===1){$n(n,i,t,Kt),da(n,0,r,4);return}if(e===2){$n(n,i,t,Kt),$r(n,"spike",i+8,-Kt+.25,Kt-.25);return}if(e===3){$n(n,i,t,Kt),$h(n,-2.4,r),da(n,2.2,r,8);return}RE(n,i,t,-i)}function RE(n,e,t,i){const r=n.rng(),s=(e+t)/2;if(r<.18&&i>140){const l=3.5+n.rng()*1.2,c=8,h=zh-c-l;$n(n,t-c,t,Kt),$n(n,e,e+h,Kt),ur(n,0,e+h*.5);return}if(r<.36&&i>200){$n(n,e,t,Ho),n.rng()<.6&&$r(n,"spike",s,-Ho+.15,Ho-.15);return}if($n(n,e,t,Kt),r<.68){const l=n.rng()<.45,c=n.rng()<.7?"spike":"barrier";l?($r(n,c,s,-Kt+.25,Kt-.25),ur(n,0,s+6)):n.rng()<.5?($r(n,c,s,-Kt+.25,.6),ur(n,2.4,s)):($r(n,c,s,-.6,Kt-.25),ur(n,-2.4,s));return}if(r<.86){const l=n.rng()<.5?-2.4:2.4;$h(n,l,s),ur(n,-l,s);return}const a=[-2.4,0,2.4],o=1+Math.floor(n.rng()*3);for(let l=0;l<o;l++)ur(n,a[l],s+(l-1)*3.2)}function ur(n,e,t){const i=vs(2);if(!CE(n,e,t,i))return;const r=n.pendingLocks.has(n.nextId)||n.removed.has(n.nextId),s=da(n,e,t,2);r||(s.pending=!0,s.value=0)}function CE(n,e,t,i){for(const r of n.bodies){if(!r.alive||r.kind==="ball")continue;const s=Math.abs(e-r.x),a=Math.abs(t-r.z);if(s<i+r.hx+.45&&a<i+r.hz+.45)return!1}return!0}function $n(n,e,t,i){n.floors.push({id:n.nextId++,z0:e,z1:t,halfWidth:i})}function da(n,e,t,i){const r=vs(i),s={id:n.nextId++,kind:"ball",x:e,y:r,z:t,hx:r,hy:r,hz:r,radius:r,value:i,alive:!0,flying:!1,pending:!1,vx:0,vy:0};return PE(n,s),n.bodies.push(s),s}function PE(n,e){const t=n.pendingLocks.get(e.id);t!==void 0&&(Tc(e,t),n.pendingLocks.delete(e.id)),n.removed.has(e.id)&&(e.alive=!1)}function $r(n,e,t,i,r){const s=e==="spike"?jy:eE,a={id:n.nextId++,kind:e,x:(i+r)/2,y:s,z:t,hx:(r-i)/2,hy:s,hz:.6,radius:0,value:0,alive:!0,flying:!1,pending:!1,vx:0,vy:0};return n.bodies.push(a),a}function $h(n,e,t){const i={id:n.nextId++,kind:"block",x:e,y:kf,z:t,hx:zf,hy:kf,hz:zf,radius:0,value:0,alive:!0,flying:!1,pending:!1,vx:0,vy:0};return n.bodies.push(i),i}function Go(n,e,t){return Math.max(e,Math.min(t,n))}const Zh="odin-run-2048",Jh="odin-run-2048-skin",LE="Merge matching balls, jump the spikes, and reach 2048.",DE="Arrows or A/D steer. Space, W, or Up jumps. S or Down fast-falls. On a phone, drag to steer and tap to jump.",IE=12e3,qa=document.querySelector("#app"),UE=document.querySelector("#labels"),Gf=document.querySelector("#value"),NE=document.querySelector("#stats"),FE=document.querySelector("#hint"),xs=document.querySelector("#banner"),Ac=document.querySelector("#overlay"),na=document.querySelector("#title"),mi=document.querySelector("#blurb"),ia=document.querySelector("#controls"),ql=document.querySelector("#best-line"),Aa=document.querySelector("#play"),Yl=document.querySelector("#multiplayer"),OE=document.querySelector("#menu"),BE=document.querySelector("#skin-row"),Qh=document.querySelector("#skins"),Rc=document.querySelector("#countdown"),kE=document.querySelector("#room"),Vf=document.querySelector("#room-blurb"),Wf=document.querySelector("#room-code"),Cc=document.querySelector("#copy-code"),jh=document.querySelector("#join-form"),ha=document.querySelector("#code-input"),Xf=document.querySelector("#roster"),ti=document.querySelector("#room-note"),ep=document.querySelector("#create-room"),Kl=document.querySelector("#start-game"),tp=document.querySelector("#spectate"),np=document.querySelector("#rematch"),$l=document.querySelector("#leave-room"),Zl=document.querySelector("#music"),Bi=new Set;let Pc=0,Jl=!1,Ra=null,Lc=0,Dc=0,Ic=!1,pa=0,ii=ob(),ze="title",ip="",_t=!1,Zt=null,Fn="",ri=!1,On=!1,wn=0,rp=1,Vo=0,qf=0,Ca=0,je=null,Uc=Zf();const Tr=new Map,ni=new Map,Mn=new Map,wr=new Map,Zn=new Map,Nt=[],Ft=lb();let _e=Xa(Date.now()%1e9,Ft.value,Ft.distance);const rn=new Ny(qa,UE);rn.setSkin(ii);rb();window.addEventListener("resize",()=>rn.resize());window.addEventListener("keydown",n=>{Bh();const e=n.target,t=e instanceof HTMLElement&&!!e.closest("button, input, a");if(sb(n.code)&&!t&&n.preventDefault(),t||Bi.add(n.code),n.code==="Escape"&&On){On=!1,ze="dead-multi",Wt();return}Ac.hidden||t||(ze==="title"||ze==="dead-solo")&&(n.code==="Space"||n.code==="Enter")&&sp()});window.addEventListener("keyup",n=>{Bi.delete(n.code)});window.addEventListener("blur",()=>Bi.clear());Aa.addEventListener("click",()=>sp());Yl.addEventListener("click",()=>zE());ep.addEventListener("click",()=>HE());Kl.addEventListener("click",()=>VE());tp.addEventListener("click",()=>{On=!0,ze="hidden",Wt()});np.addEventListener("click",()=>WE());$l.addEventListener("click",()=>op());Cc.addEventListener("click",()=>void qE());jh.addEventListener("submit",n=>{n.preventDefault(),GE()});ha.addEventListener("input",()=>{ha.value=ha.value.toUpperCase().replace(/[^A-Z0-9]/g,"").slice(0,5)});Zl.addEventListener("click",()=>{zy(),fp()});qa.addEventListener("pointerdown",n=>{Bh(),Ac.hidden&&n.target===rn.renderer.domElement&&(Ra=n.pointerId,Lc=n.clientX,Dc=n.clientY,Ic=!1,rn.renderer.domElement.setPointerCapture(n.pointerId))});qa.addEventListener("pointermove",n=>{if(n.pointerId!==Ra)return;const e=n.clientX-Lc,t=n.clientY-Dc;(Math.abs(e)>12||Math.abs(t)>12)&&(Ic=!0),Pc=Math.max(-1,Math.min(1,e/90))});qa.addEventListener("pointerup",n=>{if(n.pointerId!==Ra)return;const e=n.clientX-Lc,t=n.clientY-Dc,i=!Ic&&Math.hypot(e,t)<14;Ra=null,Pc=0,i&&(Jl=!0)});function sp(){if(!je){if(_e.status==="ready")Gh(_e);else if(_e.status==="dead"){const n=Bi.has("Space")||Bi.has("ArrowUp")||Bi.has("KeyW");_e=lE(_e,(Date.now()^Math.random()*1e9)>>>0,n),rn.clear(),rn.setSkin(ii),xs.hidden=!0}ze="hidden",Wt(),Aa.blur()}}function zE(){ze="lobby",ti.textContent="",Wt()}function HE(){Fn=bp(),_t=!0,Zt=null,ap(Fn),je&&(Zt=je.id,ti.textContent="",Wt())}function GE(){const n=Tp(ha.value);if(!n){ti.textContent="Enter the 5 character code.";return}Fn=n,_t=!1,Zt=null,ap(n),je&&(ti.textContent="",window.clearTimeout(Ca),Ca=window.setTimeout(()=>{!_t&&Zt===null&&ma("Couldn't open the room. Try again.")},IE),Wt())}function ap(n){Nc(),ni.clear(),Mn.clear(),wr.clear(),Zn.clear();try{je=new Xg(n,{skin:()=>ii,isHost:()=>_t,started:()=>ri,onHello:(e,t)=>Nt.push(()=>YE(e,t.skin,t.host)),onSkin:(e,t)=>Nt.push(()=>lp(e,t)),onLeave:e=>Nt.push(()=>KE(e)),onStart:e=>Nt.push(()=>{_t||Pa(e)}),onPose:(e,t)=>Nt.push(()=>$E(e,t)),onLock:e=>Nt.push(()=>{_t||TE(_e,e.id,e.value)}),onTake:(e,t)=>Nt.push(()=>ZE(e,t.id,t.valueBefore)),onGrant:e=>Nt.push(()=>JE(e.id)),onDeny:e=>Nt.push(()=>cp(e.id)),onFly:e=>Nt.push(()=>wE(_e,e.id,e.vx,e.vy)),onRematch:e=>Nt.push(()=>{_t||Pa(e)}),onFull:()=>Nt.push(()=>ma("That room is full.")),onStarted:()=>Nt.push(()=>ma("That match has started.")),onError:e=>Nt.push(()=>ma(e))})}catch{je=null,_t=!1,Zt=null,Fn="",ti.textContent="Couldn't open the room. Try again.",Wt()}}function VE(){if(!je||!_t||ni.size<1||ri)return;const n=dp();je.sendStart(n),Pa(n)}function WE(){if(!je||!_t)return;const n=dp();je.sendRematch(n),Pa(n)}function Pa(n){rp=n,wn=3,ri=!0,On=!1,ze="countdown",Rc.textContent="3",Wt()}function XE(){_e=Xa(rp,Ft.value,Ft.distance),_e.authority=_t?"host":"guest",_e.playerId=(je==null?void 0:je.id)??"",Gh(_e),rn.clear(),rn.setSkin(ii),Uc=Zf(),Tr.clear(),Mn.clear(),wr.clear(),Zn.clear(),xs.hidden=!0,On=!1,ze="hidden",Wt()}function op(n=""){ip=n,Nc(),_t=!1,Zt=null,Fn="",ri=!1,On=!1,wn=0,ni.clear(),Mn.clear(),wr.clear(),Zn.clear(),Tr.clear(),_e=Xa((Date.now()^Math.random()*1e9)>>>0,Ft.value,Ft.distance),rn.clear(),rn.setSkin(ii),xs.hidden=!0,ze="title",Wt()}function ma(n){Nc(),_t=!1,Zt=null,Fn="",ri=!1,On=!1,wn=0,ni.clear(),Mn.clear(),Zn.clear(),ze="lobby",ti.textContent=n,Wt()}async function Nc(){window.clearTimeout(Ca);const n=je;je=null,n&&await n.leave()}async function qE(){if(Fn)try{await navigator.clipboard.writeText(Fn),Cc.textContent="Copied"}catch{ti.textContent="Select the code and copy it."}}function YE(n,e,t){if(je){if(t){if(_t&&n!==je.id)return;Zt=n,window.clearTimeout(Ca)}lp(n,e),ze==="lobby"&&(ti.textContent=""),Wt()}}function lp(n,e){ni.set(n,e);const t=Mn.get(n);if(t)for(const i of t)i.pose.skin=e;(ze==="lobby"||ze==="dead-multi")&&up()}function KE(n){if(ni.delete(n),Mn.delete(n),wr.delete(n),Zn.delete(n),!_t&&n===Zt){op("The host left.");return}(ze==="lobby"||ze==="dead-multi")&&Wt()}function $E(n,e){const t=wr.get(n)??-1;if(e.seq<=t)return;wr.set(n,e.seq);const i=Mn.get(n)??[];for(i.push({t:performance.now()/1e3,pose:e});i.length>8;)i.shift();Mn.set(n,i)}function ZE(n,e,t){if(!je||!_t)return;if(!_e.bodies.find(s=>s.id===e&&s.alive)){je.sendDeny({id:e,peerId:n},n);return}if(Jf(Uc,{ballId:e,peerId:n})==="deny"){je.sendDeny({id:e,peerId:n},n);return}Yh(_e,e),je.sendGrant({id:e,peerId:n})}function JE(n){Yh(_e,n),La(n)}function cp(n){const e=Tr.get(n);if(La(n),!e)return;const t=Qf(_e.player.value,e.valueBefore);t!==null&&Kh(_e,t)}function La(n){Tr.delete(n),_e.held.delete(n)}function QE(){if(!(!je||!ri)){if(_t)for(const n of _e.locks)je.sendLock(n);for(const n of _e.knocks)je.sendFly(n);for(const n of _e.merges)Tr.set(n.id,{valueBefore:n.valueBefore,at:_e.time}),_t?Jf(Uc,{ballId:n.id,peerId:je.id,valueBefore:n.valueBefore})==="grant"?(La(n.id),je.sendGrant({id:n.id,peerId:je.id})):cp(n.id):je.sendTake({id:n.id,valueBefore:n.valueBefore});for(const[n,e]of Tr){if(_e.time-e.at<=.8)continue;La(n);const t=Qf(_e.player.value,e.valueBefore);t!==null&&Kh(_e,t);const i=_e.bodies.find(r=>r.id===n);i&&(i.alive=!0,_e.removed.delete(n))}}}function jE(n){if(!ri){_e.remotes=[],Zn.clear();return}const e=_e.status==="running",t=[],i=[];for(const[a,o]of Mn){const l=Cp(o,n);l&&(t.push({id:a,pose:l}),l.alive&&i.push(l.time))}const r=iE(_e.time,i,e),s=[];for(const{id:a,pose:o}of t){const l=rE(_e.time,e,o,Zn.get(a));l.heldZ===void 0?Zn.delete(a):Zn.set(a,l.heldZ),s.push({id:a,x:o.x,y:o.y,z:o.alive?r:l.z,vy:o.vy,value:o.value,radius:o.radius,alive:o.alive,skin:o.skin})}_e.remotes=s}function eb(n){var t;if(_t||!Zt||_e.status!=="running")return;const e=(t=Mn.get(Zt))==null?void 0:t.at(-1);e!=null&&e.pose.alive&&sE(_e,e.pose.time,n)}function tb(){if(!On||_e.status==="running")return _e.player;let n=null,e=1/0;for(const t of _e.remotes){if(!t.alive)continue;const i=Math.abs(t.z-_e.player.z);i<e&&(n=t,e=i)}return n??_e.player}function nb(){for(const n of Mn.values()){const e=n[n.length-1];if(e!=null&&e.pose.alive)return!0}return!1}function ib(n){ii=n,localStorage.setItem(Jh,n),rn.setSkin(n),Qh.querySelectorAll("button").forEach(e=>{e.setAttribute("aria-pressed",e.dataset.skin===n?"true":"false")}),je&&!ri&&je.sendSkin(n)}function rb(){for(const n of el){const e=document.createElement("button");e.type="button",e.dataset.skin=n.id,e.title=n.name,e.setAttribute("aria-label",n.name),e.setAttribute("aria-pressed",n.id===ii?"true":"false");const t=document.createElement("canvas");t.width=128,t.height=128,Pg(t,n.id),e.append(t),e.addEventListener("click",()=>ib(n.id)),Qh.append(e)}}function Wt(){Ac.hidden=ze==="hidden";const n=je!==null,e=n&&(_t||Zt!==null),t=ze==="title"||ze==="dead-solo"||ze==="lobby";BE.hidden=!t,Rc.hidden=ze!=="countdown",OE.hidden=ze!=="title"&&ze!=="dead-solo",kE.hidden=ze!=="lobby"&&ze!=="dead-multi",ia.hidden=ze==="lobby"||ze==="countdown",ql.hidden=ze==="countdown"||ze==="lobby",ze==="title"?(na.textContent="Odin Run 2048",mi.hidden=!1,mi.textContent=ip||LE,ia.textContent=DE,Aa.textContent="Play",Yl.hidden=!1):ze==="dead-solo"?(na.textContent=_e.cause==="fall"?"You left the track":"The spikes got you",mi.hidden=!1,mi.textContent=Yf(),ia.textContent="Enter or Space to run again.",Aa.textContent="Run again",Yl.hidden=!0,ql.textContent=`Best ${_e.bestValue>=2?_e.bestValue:"—"} · ${Math.floor(_e.bestDistance)}`):ze==="countdown"?(na.textContent="Get ready",mi.hidden=!1,mi.textContent="The run starts together."):(ze==="lobby"||ze==="dead-multi")&&(na.textContent=ze==="dead-multi"?_e.cause==="fall"?"You left the track":"The spikes got you":"Multiplayer",mi.hidden=ze==="lobby",ze==="dead-multi"&&(mi.textContent=Yf()),Vf.hidden=ze==="dead-multi",Wf.hidden=!Fn,Wf.textContent=Fn,Cc.hidden=!e,jh.hidden=n||ze==="dead-multi",ep.hidden=n||ze==="dead-multi",Kl.hidden=!_t||ze==="dead-multi",Kl.disabled=ni.size<1,tp.hidden=ze!=="dead-multi"||!nb(),np.hidden=ze!=="dead-multi"||!_t,$l.hidden=!1,$l.textContent=n||ze==="dead-multi"?"Leave":"Back",ze==="lobby"&&(Vf.textContent=n?e?_t?"Share the code. Start when a friend has joined.":"Waiting for the host to start.":"Looking for the room…":"Create a room and share the code, or join a friend."),ze==="dead-multi"&&(ia.textContent="Spectate follows a friend. Esc comes back to this card.",ti.textContent=_t?"Run again restarts everyone.":"Waiting for the host."),up())}function up(){if(Xf.replaceChildren(),!(!je||!Zt))for(const n of Ap(je.id,Zt,[...ni.keys()])){const e=document.createElement("p"),t=document.createElement("span"),i=document.createElement("span");t.textContent=n.host?`${n.label} · host`:n.label;const r=n.id===je.id?ii:ni.get(n.id);i.textContent=r&&Ar(r)?Mr(r).name:"",e.append(t,i),Xf.append(e)}}function Yf(){return _e.player.value>=2048?`You reached ${_e.player.value}. Distance ${Math.floor(_e.distance)}.`:`You finished on ${_e.player.value}. Distance ${Math.floor(_e.distance)}.`}function sb(n){return n==="Space"||n.startsWith("Arrow")||n==="KeyW"||n==="KeyA"||n==="KeyS"||n==="KeyD"||n==="Escape"}function fp(){const n=By();Zl.textContent=n?"Music on":"Music off",Zl.setAttribute("aria-pressed",n?"true":"false")}function ab(){const n=_e.bestValue>=2?String(_e.bestValue):"—";Gf.textContent=String(_e.player.value),Gf.style.color=_e.invuln>0?"#ff8aa0":"#edc22e",NE.innerHTML=`Distance ${Math.floor(_e.distance)}<br>Best ${n} · ${Math.floor(_e.bestDistance)}`,FE.hidden=_e.status!=="running"||_e.distance>90,_e.showWin&&(xs.hidden=!1,_e.showWin=!1,pa=2.6)}function ob(){try{const n=localStorage.getItem(Jh);return n&&Ar(n)?n:"visor"}catch{return"visor"}}function lb(){try{const n=localStorage.getItem(Zh);if(!n)return{value:0,distance:0};const e=JSON.parse(n);return{value:Number(e.value)||0,distance:Number(e.distance)||0}}catch{return{value:0,distance:0}}}function cb(){const n=Math.max(Ft.value,_e.bestValue),e=Math.max(Ft.distance,_e.bestDistance);n===Ft.value&&e===Ft.distance||(Ft.value=n,Ft.distance=e,localStorage.setItem(Zh,JSON.stringify(Ft)))}function dp(){return(Date.now()^Math.random()*1e9)>>>0}function ub(){ql.textContent=Ft.value>=2?`Best ${Ft.value} · ${Math.floor(Ft.distance)}`:"",Wt()}let Kf=performance.now();function hp(n){var i;const e=Math.min(.033,(n-Kf)/1e3);Kf=n;const t=n/1e3;for(;Nt.length>0;)(i=Nt.shift())==null||i();if(wn>0){const r=Math.max(1,Math.ceil(wn));wn-=e;const s=Math.max(1,Math.ceil(Math.max(wn,0)));s!==r&&wn>0&&(Rc.textContent=String(s)),wn<=0&&(wn=0,XE())}if(eb(e),jE(t),_e.status==="running"&&ze==="hidden"){const r=Qg({has:s=>Bi.has(s)},Pc,Jl);Jl=!1,cE(_e,r,e),QE();for(const s of _e.events)Gy(s);cb()}else On&&xE(_e);_e.status==="dead"&&ze==="hidden"&&!On&&(ze=je?"dead-multi":"dead-solo",Wt()),pa>0&&(pa-=e,pa<=0&&(xs.hidden=!0)),Vo+=e,je&&ri&&ze!=="countdown"&&Vo>=1/20&&(Vo=0,qf+=1,je.sendPose({x:_e.player.x,y:_e.player.y,z:_e.player.z,time:_e.time,vy:_e.player.vy,value:_e.player.value,radius:_e.player.radius,alive:_e.status==="running",skin:ii,seq:qf})),Hy(t),ab(),rn.resize(),rn.sync(_e,tb()),requestAnimationFrame(hp)}ub();fp();requestAnimationFrame(hp);
