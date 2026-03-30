import{$ as nf,$a as Le,A as lc,Aa as ra,Ab as xf,B as Rr,Ba as sa,Bb as Mf,C as ta,Ca as Ei,Cb as Sf,D as Si,Da as xt,Db as bf,E as cc,Ea as oa,Eb as qt,F as Jh,Fa as mc,Fb as Rn,G as Kh,Ga as df,Gb as wf,H as Qh,Ha as gc,Hb as Ef,I as un,Ia as rt,Ib as Ti,J as uc,Ja as Ji,Jb as Cf,K as Wt,Ka as Ct,Kb as so,L as Ye,La as hf,M as Ks,Ma as Hn,N as ji,Na as ff,O as Re,Oa as no,P as qi,Pa as pf,Q as ef,Qa as aa,R as lt,Ra as Ci,S as et,Sa as Gn,T as ne,Ta as Wn,U as na,Ua as la,V as tf,Va as Ai,W as Ir,Wa as dt,X as xn,Xa as ht,Y as Dt,Ya as Ee,Z as Rt,Za as L,_ as Qs,_a as U,a as pe,aa as Yi,ab as ft,b as yt,ba as It,bb as Mt,ca as eo,cb as Qn,d as zn,da as dc,db as Qt,e as Wh,ea as ia,eb as vc,f as $h,fa as ct,fb as _c,g as Xh,ga as rf,gb as io,h as sc,ha as sf,hb as Xt,i as oc,ia as Zi,ib as ei,j as vn,ja as bi,jb as Lt,k as _n,ka as Mn,kb as mf,l as Kn,la as of,lb as yc,m as rn,ma as hc,mb as xc,n as Fe,na as af,nb as ro,o as Zs,oa as Ft,ob as kt,p as jh,pa as lf,pb as gf,q as qh,qa as fc,qb as O,r as at,ra as pc,rb as $e,s as ac,sa as $t,sb as Sn,t as yn,ta as $,tb as vf,u as Yh,ua as Pr,ub as Or,v as ea,va as cf,vb as Fr,w as Zh,wa as uf,wb as Lr,x as Xi,xa as to,xb as Ki,y as Dr,ya as Dn,yb as _f,z as Js,za as wi,zb as yf}from"./chunk-YV3V47AE.js";var Df=null;function bn(){return Df}function Mc(i){Df??=i}var oo=class{},Sc=(()=>{class i{historyGo(t){throw new Error("")}static \u0275fac=function(n){return new(n||i)};static \u0275prov=Re({token:i,factory:()=>ne(Rf),providedIn:"platform"})}return i})();var Rf=(()=>{class i extends Sc{_location;_history;_doc=ne(It);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return bn().getBaseHref(this._doc)}onPopState(t){let n=bn().getGlobalEventTarget(this._doc,"window");return n.addEventListener("popstate",t,!1),()=>n.removeEventListener("popstate",t)}onHashChange(t){let n=bn().getGlobalEventTarget(this._doc,"window");return n.addEventListener("hashchange",t,!1),()=>n.removeEventListener("hashchange",t)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(t){this._location.pathname=t}pushState(t,n,r){this._history.pushState(t,n,r)}replaceState(t,n,r){this._history.replaceState(t,n,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(t=0){this._history.go(t)}getState(){return this._history.state}static \u0275fac=function(n){return new(n||i)};static \u0275prov=Re({token:i,factory:()=>new i,providedIn:"platform"})}return i})();function If(i,e){return i?e?i.endsWith("/")?e.startsWith("/")?i+e.slice(1):i+e:e.startsWith("/")?i+e:`${i}/${e}`:i:e}function Af(i){let e=i.search(/#|\?|$/);return i[e-1]==="/"?i.slice(0,e-1)+i.slice(e):i}function Di(i){return i&&i[0]!=="?"?`?${i}`:i}var ao=(()=>{class i{historyGo(t){throw new Error("")}static \u0275fac=function(n){return new(n||i)};static \u0275prov=Re({token:i,factory:()=>ne(bc),providedIn:"root"})}return i})(),Pf=new lt(""),bc=(()=>{class i extends ao{_platformLocation;_baseHref;_removeListenerFns=[];constructor(t,n){super(),this._platformLocation=t,this._baseHref=n??this._platformLocation.getBaseHrefFromDOM()??ne(It).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(t){this._removeListenerFns.push(this._platformLocation.onPopState(t),this._platformLocation.onHashChange(t))}getBaseHref(){return this._baseHref}prepareExternalUrl(t){return If(this._baseHref,t)}path(t=!1){let n=this._platformLocation.pathname+Di(this._platformLocation.search),r=this._platformLocation.hash;return r&&t?`${n}${r}`:n}pushState(t,n,r,s){let o=this.prepareExternalUrl(r+Di(s));this._platformLocation.pushState(t,n,o)}replaceState(t,n,r,s){let o=this.prepareExternalUrl(r+Di(s));this._platformLocation.replaceState(t,n,o)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(t=0){this._platformLocation.historyGo?.(t)}static \u0275fac=function(n){return new(n||i)(et(Sc),et(Pf,8))};static \u0275prov=Re({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Qi=(()=>{class i{_subject=new vn;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(t){this._locationStrategy=t;let n=this._locationStrategy.getBaseHref();this._basePath=jg(Af(Tf(n))),this._locationStrategy.onPopState(r=>{this._subject.next({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(t=!1){return this.normalize(this._locationStrategy.path(t))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(t,n=""){return this.path()==this.normalize(t+Di(n))}normalize(t){return i.stripTrailingSlash(Xg(this._basePath,Tf(t)))}prepareExternalUrl(t){return t&&t[0]!=="/"&&(t="/"+t),this._locationStrategy.prepareExternalUrl(t)}go(t,n="",r=null){this._locationStrategy.pushState(r,"",t,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+Di(n)),r)}replaceState(t,n="",r=null){this._locationStrategy.replaceState(r,"",t,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+Di(n)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(t=0){this._locationStrategy.historyGo?.(t)}onUrlChange(t){return this._urlChangeListeners.push(t),this._urlChangeSubscription??=this.subscribe(n=>{this._notifyUrlChangeListeners(n.url,n.state)}),()=>{let n=this._urlChangeListeners.indexOf(t);this._urlChangeListeners.splice(n,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(t="",n){this._urlChangeListeners.forEach(r=>r(t,n))}subscribe(t,n,r){return this._subject.subscribe({next:t,error:n??void 0,complete:r??void 0})}static normalizeQueryParams=Di;static joinWithSlash=If;static stripTrailingSlash=Af;static \u0275fac=function(n){return new(n||i)(et(ao))};static \u0275prov=Re({token:i,factory:()=>$g(),providedIn:"root"})}return i})();function $g(){return new Qi(et(ao))}function Xg(i,e){if(!i||!e.startsWith(i))return e;let t=e.substring(i.length);return t===""||["/",";","?","#"].includes(t[0])?t:e}function Tf(i){return i.replace(/\/index.html$/,"")}function jg(i){if(new RegExp("^(https?:)?//").test(i)){let[,t]=i.split(/\/\/[^\/]+/);return t}return i}var Cc=(function(i){return i[i.Decimal=0]="Decimal",i[i.Percent=1]="Percent",i[i.Currency=2]="Currency",i[i.Scientific=3]="Scientific",i})(Cc||{});var $n={Decimal:0,Group:1,List:2,PercentSign:3,PlusSign:4,MinusSign:5,Exponential:6,SuperscriptingExponent:7,PerMille:8,Infinity:9,NaN:10,TimeSeparator:11,CurrencyDecimal:12,CurrencyGroup:13};function Nr(i,e){let t=_c(i),n=t[io.NumberSymbols][e];if(typeof n>"u"){if(e===$n.CurrencyDecimal)return t[io.NumberSymbols][$n.Decimal];if(e===$n.CurrencyGroup)return t[io.NumberSymbols][$n.Group]}return n}function Ff(i,e){return _c(i)[io.NumberFormats][e]}var Yg=/^(\d+)?\.((\d+)(-(\d+))?)?$/,Of=22,ca=".",lo="0",Zg=";",Jg=",",wc="#";function Kg(i,e,t,n,r,s,o=!1){let a="",l=!1;if(!isFinite(i))a=Nr(t,$n.Infinity);else{let c=t0(i);o&&(c=e0(c));let u=e.minInt,d=e.minFrac,f=e.maxFrac;if(s){let E=s.match(Yg);if(E===null)throw new Ye(2306,!1);let w=E[1],M=E[3],B=E[5];w!=null&&(u=Ec(w)),M!=null&&(d=Ec(M)),B!=null?f=Ec(B):M!=null&&d>f&&(f=d)}n0(c,d,f);let m=c.digits,g=c.integerLen,y=c.exponent,p=[];for(l=m.every(E=>!E);g<u;g++)m.unshift(0);for(;g<0;g++)m.unshift(0);g>0?p=m.splice(g,m.length):(p=m,m=[0]);let h=[];for(m.length>=e.lgSize&&h.unshift(m.splice(-e.lgSize,m.length).join(""));m.length>e.gSize;)h.unshift(m.splice(-e.gSize,m.length).join(""));m.length&&h.unshift(m.join("")),a=h.join(Nr(t,n)),p.length&&(a+=Nr(t,r)+p.join("")),y&&(a+=Nr(t,$n.Exponential)+"+"+y)}return i<0&&!l?a=e.negPre+a+e.negSuf:a=e.posPre+a+e.posSuf,a}function Lf(i,e,t){let n=Ff(e,Cc.Decimal),r=Qg(n,Nr(e,$n.MinusSign));return Kg(i,r,e,$n.Group,$n.Decimal,t)}function Qg(i,e="-"){let t={minInt:1,minFrac:0,maxFrac:0,posPre:"",posSuf:"",negPre:"",negSuf:"",gSize:0,lgSize:0},n=i.split(Zg),r=n[0],s=n[1],o=r.indexOf(ca)!==-1?r.split(ca):[r.substring(0,r.lastIndexOf(lo)+1),r.substring(r.lastIndexOf(lo)+1)],a=o[0],l=o[1]||"";t.posPre=a.substring(0,a.indexOf(wc));for(let u=0;u<l.length;u++){let d=l.charAt(u);d===lo?t.minFrac=t.maxFrac=u+1:d===wc?t.maxFrac=u+1:t.posSuf+=d}let c=a.split(Jg);if(t.gSize=c[1]?c[1].length:0,t.lgSize=c[2]||c[1]?(c[2]||c[1]).length:0,s){let u=r.length-t.posPre.length-t.posSuf.length,d=s.indexOf(wc);t.negPre=s.substring(0,d).replace(/'/g,""),t.negSuf=s.slice(d+u).replace(/'/g,"")}else t.negPre=e+t.posPre,t.negSuf=t.posSuf;return t}function e0(i){if(i.digits[0]===0)return i;let e=i.digits.length-i.integerLen;return i.exponent?i.exponent+=2:(e===0?i.digits.push(0,0):e===1&&i.digits.push(0),i.integerLen+=2),i}function t0(i){let e=Math.abs(i)+"",t=0,n,r,s,o,a;for((r=e.indexOf(ca))>-1&&(e=e.replace(ca,"")),(s=e.search(/e/i))>0?(r<0&&(r=s),r+=+e.slice(s+1),e=e.substring(0,s)):r<0&&(r=e.length),s=0;e.charAt(s)===lo;s++);if(s===(a=e.length))n=[0],r=1;else{for(a--;e.charAt(a)===lo;)a--;for(r-=s,n=[],o=0;s<=a;s++,o++)n[o]=Number(e.charAt(s))}return r>Of&&(n=n.splice(0,Of-1),t=r-1,r=1),{digits:n,exponent:t,integerLen:r}}function n0(i,e,t){if(e>t)throw new Ye(2307,!1);let n=i.digits,r=n.length-i.integerLen,s=Math.min(Math.max(e,r),t),o=s+i.integerLen,a=n[o];if(o>0){n.splice(Math.max(i.integerLen,o));for(let d=o;d<n.length;d++)n[d]=0}else{r=Math.max(0,r),i.integerLen=1,n.length=Math.max(1,o=s+1),n[0]=0;for(let d=1;d<o;d++)n[d]=0}if(a>=5)if(o-1<0){for(let d=0;d>o;d--)n.unshift(0),i.integerLen++;n.unshift(1),i.integerLen++}else n[o-1]++;for(;r<Math.max(0,s);r++)n.push(0);let l=s!==0,c=e+i.integerLen,u=n.reduceRight(function(d,f,m,g){return f=f+d,g[m]=f<10?f:f-10,l&&(g[m]===0&&m>=c?g.pop():l=!1),f>=10?1:0},0);u&&(n.unshift(u),i.integerLen++)}function Ec(i){let e=parseInt(i);if(isNaN(e))throw new Ye(2305,!1);return e}function i0(i,e){return new Ye(2100,!1)}var Ac=(()=>{class i{_locale;constructor(t){this._locale=t}transform(t,n,r){if(!r0(t))return null;r||=this._locale;try{let s=s0(t);return Lf(s,r,n)}catch(s){throw i0(i,s.message)}}static \u0275fac=function(n){return new(n||i)(xt(bf,16))};static \u0275pipe=hf({name:"number",type:i,pure:!0})}return i})();function r0(i){return!(i==null||i===""||i!==i)}function s0(i){if(typeof i=="string"&&!isNaN(Number(i)-parseFloat(i)))return Number(i);if(typeof i!="number")throw new Ye(2309,!1);return i}function Tc(i,e){e=encodeURIComponent(e);for(let t of i.split(";")){let n=t.indexOf("="),[r,s]=n==-1?[t,""]:[t.slice(0,n),t.slice(n+1)];if(r.trim()===e)return decodeURIComponent(s)}return null}var co=class{};var Rc="browser";function Bt(i){return i===Rc}var Nf=(()=>{class i{static \u0275prov=Re({token:i,providedIn:"root",factory:()=>new Dc(ne(It),window)})}return i})(),Dc=class{document;window;offset=()=>[0,0];constructor(e,t){this.document=e,this.window=t}setOffset(e){Array.isArray(e)?this.offset=()=>e:this.offset=e}getScrollPosition(){return[this.window.scrollX,this.window.scrollY]}scrollToPosition(e,t){this.window.scrollTo(yt(pe({},t),{left:e[0],top:e[1]}))}scrollToAnchor(e,t){let n=h0(this.document,e);n&&(this.scrollToElement(n,t),n.focus())}setHistoryScrollRestoration(e){try{this.window.history.scrollRestoration=e}catch{console.warn(Ks(2400,!1))}}scrollToElement(e,t){let n=e.getBoundingClientRect(),r=n.left+this.window.pageXOffset,s=n.top+this.window.pageYOffset,o=this.offset();this.window.scrollTo(yt(pe({},t),{left:r-o[0],top:s-o[1]}))}};function h0(i,e){let t=i.getElementById(e)||i.getElementsByName(e)[0];if(t)return t;if(typeof i.createTreeWalker=="function"&&i.body&&typeof i.body.attachShadow=="function"){let n=i.createTreeWalker(i.body,NodeFilter.SHOW_ELEMENT),r=n.currentNode;for(;r;){let s=r.shadowRoot;if(s){let o=s.getElementById(e)||s.querySelector(`[name="${e}"]`);if(o)return o}r=n.nextNode()}}return null}var uo=class{_doc;constructor(e){this._doc=e}manager},ua=(()=>{class i extends uo{constructor(t){super(t)}supports(t){return!0}addEventListener(t,n,r,s){return t.addEventListener(n,r,s),()=>this.removeEventListener(t,n,r,s)}removeEventListener(t,n,r,s){return t.removeEventListener(n,r,s)}static \u0275fac=function(n){return new(n||i)(et(It))};static \u0275prov=Re({token:i,factory:i.\u0275fac})}return i})(),ha=new lt(""),Lc=(()=>{class i{_zone;_plugins;_eventNameToPlugin=new Map;constructor(t,n){this._zone=n,t.forEach(o=>{o.manager=this});let r=t.filter(o=>!(o instanceof ua));this._plugins=r.slice().reverse();let s=t.find(o=>o instanceof ua);s&&this._plugins.push(s)}addEventListener(t,n,r,s){return this._findPluginFor(n).addEventListener(t,n,r,s)}getZone(){return this._zone}_findPluginFor(t){let n=this._eventNameToPlugin.get(t);if(n)return n;if(n=this._plugins.find(s=>s.supports(t)),!n)throw new Ye(5101,!1);return this._eventNameToPlugin.set(t,n),n}static \u0275fac=function(n){return new(n||i)(et(ha),et(wi))};static \u0275prov=Re({token:i,factory:i.\u0275fac})}return i})(),Ic="ng-app-id";function Uf(i){for(let e of i)e.remove()}function kf(i,e){let t=e.createElement("style");return t.textContent=i,t}function f0(i,e,t,n){let r=i.head?.querySelectorAll(`style[${Ic}="${e}"],link[${Ic}="${e}"]`);if(r)for(let s of r)s.removeAttribute(Ic),s instanceof HTMLLinkElement?n.set(s.href.slice(s.href.lastIndexOf("/")+1),{usage:0,elements:[s]}):s.textContent&&t.set(s.textContent,{usage:0,elements:[s]})}function Oc(i,e){let t=e.createElement("link");return t.setAttribute("rel","stylesheet"),t.setAttribute("href",i),t}var Nc=(()=>{class i{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(t,n,r,s={}){this.doc=t,this.appId=n,this.nonce=r,f0(t,n,this.inline,this.external),this.hosts.add(t.head)}addStyles(t,n){for(let r of t)this.addUsage(r,this.inline,kf);n?.forEach(r=>this.addUsage(r,this.external,Oc))}removeStyles(t,n){for(let r of t)this.removeUsage(r,this.inline);n?.forEach(r=>this.removeUsage(r,this.external))}addUsage(t,n,r){let s=n.get(t);s?s.usage++:n.set(t,{usage:1,elements:[...this.hosts].map(o=>this.addElement(o,r(t,this.doc)))})}removeUsage(t,n){let r=n.get(t);r&&(r.usage--,r.usage<=0&&(Uf(r.elements),n.delete(t)))}ngOnDestroy(){for(let[,{elements:t}]of[...this.inline,...this.external])Uf(t);this.hosts.clear()}addHost(t){this.hosts.add(t);for(let[n,{elements:r}]of this.inline)r.push(this.addElement(t,kf(n,this.doc)));for(let[n,{elements:r}]of this.external)r.push(this.addElement(t,Oc(n,this.doc)))}removeHost(t){this.hosts.delete(t)}addElement(t,n){return this.nonce&&n.setAttribute("nonce",this.nonce),t.appendChild(n)}static \u0275fac=function(n){return new(n||i)(et(It),et(hc),et(fc,8),et(Ft))};static \u0275prov=Re({token:i,factory:i.\u0275fac})}return i})(),Pc={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},Uc=/%COMP%/g;var Vf="%COMP%",p0=`_nghost-${Vf}`,m0=`_ngcontent-${Vf}`,g0=!0,v0=new lt("",{providedIn:"root",factory:()=>g0});function _0(i){return m0.replace(Uc,i)}function y0(i){return p0.replace(Uc,i)}function zf(i,e){return e.map(t=>t.replace(Uc,i))}var po=(()=>{class i{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;platformIsServer;constructor(t,n,r,s,o,a,l=null,c=null){this.eventManager=t,this.sharedStylesHost=n,this.appId=r,this.removeStylesOnCompDestroy=s,this.doc=o,this.ngZone=a,this.nonce=l,this.tracingService=c,this.platformIsServer=!1,this.defaultRenderer=new ho(t,o,a,this.platformIsServer,this.tracingService)}createRenderer(t,n){if(!t||!n)return this.defaultRenderer;let r=this.getOrCreateRenderer(t,n);return r instanceof da?r.applyToHost(t):r instanceof fo&&r.applyStyles(),r}getOrCreateRenderer(t,n){let r=this.rendererByCompId,s=r.get(n.id);if(!s){let o=this.doc,a=this.ngZone,l=this.eventManager,c=this.sharedStylesHost,u=this.removeStylesOnCompDestroy,d=this.platformIsServer,f=this.tracingService;switch(n.encapsulation){case pc.Emulated:s=new da(l,c,n,this.appId,u,o,a,d,f);break;case pc.ShadowDom:return new Fc(l,c,t,n,o,a,this.nonce,d,f);default:s=new fo(l,c,n,u,o,a,d,f);break}r.set(n.id,s)}return s}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(t){this.rendererByCompId.delete(t)}static \u0275fac=function(n){return new(n||i)(et(Lc),et(Nc),et(hc),et(v0),et(It),et(wi),et(fc),et(uf,8))};static \u0275prov=Re({token:i,factory:i.\u0275fac})}return i})(),ho=class{eventManager;doc;ngZone;platformIsServer;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(e,t,n,r,s){this.eventManager=e,this.doc=t,this.ngZone=n,this.platformIsServer=r,this.tracingService=s}destroy(){}destroyNode=null;createElement(e,t){return t?this.doc.createElementNS(Pc[t]||t,e):this.doc.createElement(e)}createComment(e){return this.doc.createComment(e)}createText(e){return this.doc.createTextNode(e)}appendChild(e,t){(Bf(e)?e.content:e).appendChild(t)}insertBefore(e,t,n){e&&(Bf(e)?e.content:e).insertBefore(t,n)}removeChild(e,t){t.remove()}selectRootElement(e,t){let n=typeof e=="string"?this.doc.querySelector(e):e;if(!n)throw new Ye(-5104,!1);return t||(n.textContent=""),n}parentNode(e){return e.parentNode}nextSibling(e){return e.nextSibling}setAttribute(e,t,n,r){if(r){t=r+":"+t;let s=Pc[r];s?e.setAttributeNS(s,t,n):e.setAttribute(t,n)}else e.setAttribute(t,n)}removeAttribute(e,t,n){if(n){let r=Pc[n];r?e.removeAttributeNS(r,t):e.removeAttribute(`${n}:${t}`)}else e.removeAttribute(t)}addClass(e,t){e.classList.add(t)}removeClass(e,t){e.classList.remove(t)}setStyle(e,t,n,r){r&(Pr.DashCase|Pr.Important)?e.style.setProperty(t,n,r&Pr.Important?"important":""):e.style[t]=n}removeStyle(e,t,n){n&Pr.DashCase?e.style.removeProperty(t):e.style[t]=""}setProperty(e,t,n){e!=null&&(e[t]=n)}setValue(e,t){e.nodeValue=t}listen(e,t,n,r){if(typeof e=="string"&&(e=bn().getGlobalEventTarget(this.doc,e),!e))throw new Ye(5102,!1);let s=this.decoratePreventDefault(n);return this.tracingService?.wrapEventListener&&(s=this.tracingService.wrapEventListener(e,t,s)),this.eventManager.addEventListener(e,t,s,r)}decoratePreventDefault(e){return t=>{if(t==="__ngUnwrap__")return e;e(t)===!1&&t.preventDefault()}}};function Bf(i){return i.tagName==="TEMPLATE"&&i.content!==void 0}var Fc=class extends ho{sharedStylesHost;hostEl;shadowRoot;constructor(e,t,n,r,s,o,a,l,c){super(e,s,o,l,c),this.sharedStylesHost=t,this.hostEl=n,this.shadowRoot=n.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let u=r.styles;u=zf(r.id,u);for(let f of u){let m=document.createElement("style");a&&m.setAttribute("nonce",a),m.textContent=f,this.shadowRoot.appendChild(m)}let d=r.getExternalStyles?.();if(d)for(let f of d){let m=Oc(f,s);a&&m.setAttribute("nonce",a),this.shadowRoot.appendChild(m)}}nodeOrShadowRoot(e){return e===this.hostEl?this.shadowRoot:e}appendChild(e,t){return super.appendChild(this.nodeOrShadowRoot(e),t)}insertBefore(e,t,n){return super.insertBefore(this.nodeOrShadowRoot(e),t,n)}removeChild(e,t){return super.removeChild(null,t)}parentNode(e){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},fo=class extends ho{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(e,t,n,r,s,o,a,l,c){super(e,s,o,a,l),this.sharedStylesHost=t,this.removeStylesOnCompDestroy=r;let u=n.styles;this.styles=c?zf(c,u):u,this.styleUrls=n.getExternalStyles?.(c)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&cf.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},da=class extends fo{contentAttr;hostAttr;constructor(e,t,n,r,s,o,a,l,c){let u=r+"-"+n.id;super(e,t,n,s,o,a,l,c,u),this.contentAttr=_0(u),this.hostAttr=y0(u)}applyToHost(e){this.applyStyles(),this.setAttribute(e,this.hostAttr,"")}createElement(e,t){let n=super.createElement(e,t);return super.setAttribute(n,this.contentAttr,""),n}};var fa=class i extends oo{supportsDOMEvents=!0;static makeCurrent(){Mc(new i)}onAndCancel(e,t,n,r){return e.addEventListener(t,n,r),()=>{e.removeEventListener(t,n,r)}}dispatchEvent(e,t){e.dispatchEvent(t)}remove(e){e.remove()}createElement(e,t){return t=t||this.getDefaultDocument(),t.createElement(e)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(e){return e.nodeType===Node.ELEMENT_NODE}isShadowRoot(e){return e instanceof DocumentFragment}getGlobalEventTarget(e,t){return t==="window"?window:t==="document"?e:t==="body"?e.body:null}getBaseHref(e){let t=x0();return t==null?null:M0(t)}resetBaseElement(){mo=null}getUserAgent(){return window.navigator.userAgent}getCookie(e){return Tc(document.cookie,e)}},mo=null;function x0(){return mo=mo||document.head.querySelector("base"),mo?mo.getAttribute("href"):null}function M0(i){return new URL(i,document.baseURI).pathname}var S0=(()=>{class i{build(){return new XMLHttpRequest}static \u0275fac=function(n){return new(n||i)};static \u0275prov=Re({token:i,factory:i.\u0275fac})}return i})(),Hf=["alt","control","meta","shift"],b0={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},w0={alt:i=>i.altKey,control:i=>i.ctrlKey,meta:i=>i.metaKey,shift:i=>i.shiftKey},Gf=(()=>{class i extends uo{constructor(t){super(t)}supports(t){return i.parseEventName(t)!=null}addEventListener(t,n,r,s){let o=i.parseEventName(n),a=i.eventCallback(o.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>bn().onAndCancel(t,o.domEventName,a,s))}static parseEventName(t){let n=t.toLowerCase().split("."),r=n.shift();if(n.length===0||!(r==="keydown"||r==="keyup"))return null;let s=i._normalizeKey(n.pop()),o="",a=n.indexOf("code");if(a>-1&&(n.splice(a,1),o="code."),Hf.forEach(c=>{let u=n.indexOf(c);u>-1&&(n.splice(u,1),o+=c+".")}),o+=s,n.length!=0||s.length===0)return null;let l={};return l.domEventName=r,l.fullKey=o,l}static matchEventFullKeyCode(t,n){let r=b0[t.key]||t.key,s="";return n.indexOf("code.")>-1&&(r=t.code,s="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),Hf.forEach(o=>{if(o!==r){let a=w0[o];a(t)&&(s+=o+".")}}),s+=r,s===n)}static eventCallback(t,n,r){return s=>{i.matchEventFullKeyCode(s,t)&&r.runGuarded(()=>n(s))}}static _normalizeKey(t){return t==="esc"?"escape":t}static \u0275fac=function(n){return new(n||i)(et(It))};static \u0275prov=Re({token:i,factory:i.\u0275fac})}return i})();function kc(i,e,t){let n=pe({rootComponent:i,platformRef:t?.platformRef},E0(e));return Cf(n)}function E0(i){return{appProviders:[...R0,...i?.providers??[]],platformProviders:D0}}function C0(){fa.makeCurrent()}function A0(){return new dc}function T0(){return of(document),document}var D0=[{provide:Ft,useValue:Rc},{provide:af,useValue:C0,multi:!0},{provide:It,useFactory:T0}];var R0=[{provide:tf,useValue:"root"},{provide:dc,useFactory:A0},{provide:ha,useClass:ua,multi:!0,deps:[It]},{provide:ha,useClass:Gf,multi:!0,deps:[It]},po,Nc,Lc,{provide:sa,useExisting:po},{provide:co,useClass:S0},[]];var Wf=(()=>{class i{_doc;constructor(t){this._doc=t}getTitle(){return this._doc.title}setTitle(t){this._doc.title=t||""}static \u0275fac=function(n){return new(n||i)(et(It))};static \u0275prov=Re({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Ne="primary",Do=Symbol("RouteTitle"),Gc=class{params;constructor(e){this.params=e||{}}has(e){return Object.prototype.hasOwnProperty.call(this.params,e)}get(e){if(this.has(e)){let t=this.params[e];return Array.isArray(t)?t[0]:t}return null}getAll(e){if(this.has(e)){let t=this.params[e];return Array.isArray(t)?t:[t]}return[]}get keys(){return Object.keys(this.params)}};function Gr(i){return new Gc(i)}function P0(i,e,t){let n=t.path.split("/");if(n.length>i.length||t.pathMatch==="full"&&(e.hasChildren()||n.length<i.length))return null;let r={};for(let s=0;s<n.length;s++){let o=n[s],a=i[s];if(o[0]===":")r[o.substring(1)]=a;else if(o!==a.path)return null}return{consumed:i.slice(0,n.length),posParams:r}}function O0(i,e){if(i.length!==e.length)return!1;for(let t=0;t<i.length;++t)if(!Xn(i[t],e[t]))return!1;return!0}function Xn(i,e){let t=i?Wc(i):void 0,n=e?Wc(e):void 0;if(!t||!n||t.length!=n.length)return!1;let r;for(let s=0;s<t.length;s++)if(r=t[s],!Kf(i[r],e[r]))return!1;return!0}function Wc(i){return[...Object.keys(i),...Object.getOwnPropertySymbols(i)]}function Kf(i,e){if(Array.isArray(i)&&Array.isArray(e)){if(i.length!==e.length)return!1;let t=[...i].sort(),n=[...e].sort();return t.every((r,s)=>n[s]===r)}else return i===e}function Qf(i){return i.length>0?i[i.length-1]:null}function si(i){return jh(i)?i:no(i)?rn(Promise.resolve(i)):Fe(i)}var F0={exact:tp,subset:np},ep={exact:L0,subset:N0,ignored:()=>!0};function $f(i,e,t){return F0[t.paths](i.root,e.root,t.matrixParams)&&ep[t.queryParams](i.queryParams,e.queryParams)&&!(t.fragment==="exact"&&i.fragment!==e.fragment)}function L0(i,e){return Xn(i,e)}function tp(i,e,t){if(!tr(i.segments,e.segments)||!ga(i.segments,e.segments,t)||i.numberOfChildren!==e.numberOfChildren)return!1;for(let n in e.children)if(!i.children[n]||!tp(i.children[n],e.children[n],t))return!1;return!0}function N0(i,e){return Object.keys(e).length<=Object.keys(i).length&&Object.keys(e).every(t=>Kf(i[t],e[t]))}function np(i,e,t){return ip(i,e,e.segments,t)}function ip(i,e,t,n){if(i.segments.length>t.length){let r=i.segments.slice(0,t.length);return!(!tr(r,t)||e.hasChildren()||!ga(r,t,n))}else if(i.segments.length===t.length){if(!tr(i.segments,t)||!ga(i.segments,t,n))return!1;for(let r in e.children)if(!i.children[r]||!np(i.children[r],e.children[r],n))return!1;return!0}else{let r=t.slice(0,i.segments.length),s=t.slice(i.segments.length);return!tr(i.segments,r)||!ga(i.segments,r,n)||!i.children[Ne]?!1:ip(i.children[Ne],e,s,n)}}function ga(i,e,t){return e.every((n,r)=>ep[t](i[r].parameters,n.parameters))}var ni=class{root;queryParams;fragment;_queryParamMap;constructor(e=new st([],{}),t={},n=null){this.root=e,this.queryParams=t,this.fragment=n}get queryParamMap(){return this._queryParamMap??=Gr(this.queryParams),this._queryParamMap}toString(){return B0.serialize(this)}},st=class{segments;children;parent=null;constructor(e,t){this.segments=e,this.children=t,Object.values(t).forEach(n=>n.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return va(this)}},er=class{path;parameters;_parameterMap;constructor(e,t){this.path=e,this.parameters=t}get parameterMap(){return this._parameterMap??=Gr(this.parameters),this._parameterMap}toString(){return sp(this)}};function U0(i,e){return tr(i,e)&&i.every((t,n)=>Xn(t.parameters,e[n].parameters))}function tr(i,e){return i.length!==e.length?!1:i.every((t,n)=>t.path===e[n].path)}function k0(i,e){let t=[];return Object.entries(i.children).forEach(([n,r])=>{n===Ne&&(t=t.concat(e(r,n)))}),Object.entries(i.children).forEach(([n,r])=>{n!==Ne&&(t=t.concat(e(r,n)))}),t}var Ro=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275prov=Re({token:i,factory:()=>new Wr,providedIn:"root"})}return i})(),Wr=class{parse(e){let t=new Xc(e);return new ni(t.parseRootSegment(),t.parseQueryParams(),t.parseFragment())}serialize(e){let t=`/${go(e.root,!0)}`,n=H0(e.queryParams),r=typeof e.fragment=="string"?`#${V0(e.fragment)}`:"";return`${t}${n}${r}`}},B0=new Wr;function va(i){return i.segments.map(e=>sp(e)).join("/")}function go(i,e){if(!i.hasChildren())return va(i);if(e){let t=i.children[Ne]?go(i.children[Ne],!1):"",n=[];return Object.entries(i.children).forEach(([r,s])=>{r!==Ne&&n.push(`${r}:${go(s,!1)}`)}),n.length>0?`${t}(${n.join("//")})`:t}else{let t=k0(i,(n,r)=>r===Ne?[go(i.children[Ne],!1)]:[`${r}:${go(n,!1)}`]);return Object.keys(i.children).length===1&&i.children[Ne]!=null?`${va(i)}/${t[0]}`:`${va(i)}/(${t.join("//")})`}}function rp(i){return encodeURIComponent(i).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function pa(i){return rp(i).replace(/%3B/gi,";")}function V0(i){return encodeURI(i)}function $c(i){return rp(i).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function _a(i){return decodeURIComponent(i)}function Xf(i){return _a(i.replace(/\+/g,"%20"))}function sp(i){return`${$c(i.path)}${z0(i.parameters)}`}function z0(i){return Object.entries(i).map(([e,t])=>`;${$c(e)}=${$c(t)}`).join("")}function H0(i){let e=Object.entries(i).map(([t,n])=>Array.isArray(n)?n.map(r=>`${pa(t)}=${pa(r)}`).join("&"):`${pa(t)}=${pa(n)}`).filter(t=>t);return e.length?`?${e.join("&")}`:""}var G0=/^[^\/()?;#]+/;function Bc(i){let e=i.match(G0);return e?e[0]:""}var W0=/^[^\/()?;=#]+/;function $0(i){let e=i.match(W0);return e?e[0]:""}var X0=/^[^=?&#]+/;function j0(i){let e=i.match(X0);return e?e[0]:""}var q0=/^[^&#]+/;function Y0(i){let e=i.match(q0);return e?e[0]:""}var Xc=class{url;remaining;constructor(e){this.url=e,this.remaining=e}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new st([],{}):new st([],this.parseChildren())}parseQueryParams(){let e={};if(this.consumeOptional("?"))do this.parseQueryParam(e);while(this.consumeOptional("&"));return e}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let t={};this.peekStartsWith("/(")&&(this.capture("/"),t=this.parseParens(!0));let n={};return this.peekStartsWith("(")&&(n=this.parseParens(!1)),(e.length>0||Object.keys(t).length>0)&&(n[Ne]=new st(e,t)),n}parseSegment(){let e=Bc(this.remaining);if(e===""&&this.peekStartsWith(";"))throw new Ye(4009,!1);return this.capture(e),new er(_a(e),this.parseMatrixParams())}parseMatrixParams(){let e={};for(;this.consumeOptional(";");)this.parseParam(e);return e}parseParam(e){let t=$0(this.remaining);if(!t)return;this.capture(t);let n="";if(this.consumeOptional("=")){let r=Bc(this.remaining);r&&(n=r,this.capture(n))}e[_a(t)]=_a(n)}parseQueryParam(e){let t=j0(this.remaining);if(!t)return;this.capture(t);let n="";if(this.consumeOptional("=")){let o=Y0(this.remaining);o&&(n=o,this.capture(n))}let r=Xf(t),s=Xf(n);if(e.hasOwnProperty(r)){let o=e[r];Array.isArray(o)||(o=[o],e[r]=o),o.push(s)}else e[r]=s}parseParens(e){let t={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let n=Bc(this.remaining),r=this.remaining[n.length];if(r!=="/"&&r!==")"&&r!==";")throw new Ye(4010,!1);let s;n.indexOf(":")>-1?(s=n.slice(0,n.indexOf(":")),this.capture(s),this.capture(":")):e&&(s=Ne);let o=this.parseChildren();t[s??Ne]=Object.keys(o).length===1&&o[Ne]?o[Ne]:new st([],o),this.consumeOptional("//")}return t}peekStartsWith(e){return this.remaining.startsWith(e)}consumeOptional(e){return this.peekStartsWith(e)?(this.remaining=this.remaining.substring(e.length),!0):!1}capture(e){if(!this.consumeOptional(e))throw new Ye(4011,!1)}};function op(i){return i.segments.length>0?new st([],{[Ne]:i}):i}function ap(i){let e={};for(let[n,r]of Object.entries(i.children)){let s=ap(r);if(n===Ne&&s.segments.length===0&&s.hasChildren())for(let[o,a]of Object.entries(s.children))e[o]=a;else(s.segments.length>0||s.hasChildren())&&(e[n]=s)}let t=new st(i.segments,e);return Z0(t)}function Z0(i){if(i.numberOfChildren===1&&i.children[Ne]){let e=i.children[Ne];return new st(i.segments.concat(e.segments),e.children)}return i}function $r(i){return i instanceof ni}function J0(i,e,t=null,n=null){let r=lp(i);return cp(r,e,t,n)}function lp(i){let e;function t(s){let o={};for(let l of s.children){let c=t(l);o[l.outlet]=c}let a=new st(s.url,o);return s===i&&(e=a),a}let n=t(i.root),r=op(n);return e??r}function cp(i,e,t,n){let r=i;for(;r.parent;)r=r.parent;if(e.length===0)return Vc(r,r,r,t,n);let s=K0(e);if(s.toRoot())return Vc(r,r,new st([],{}),t,n);let o=Q0(s,r,i),a=o.processChildren?_o(o.segmentGroup,o.index,s.commands):dp(o.segmentGroup,o.index,s.commands);return Vc(r,o.segmentGroup,a,t,n)}function ya(i){return typeof i=="object"&&i!=null&&!i.outlets&&!i.segmentPath}function xo(i){return typeof i=="object"&&i!=null&&i.outlets}function Vc(i,e,t,n,r){let s={};n&&Object.entries(n).forEach(([l,c])=>{s[l]=Array.isArray(c)?c.map(u=>`${u}`):`${c}`});let o;i===e?o=t:o=up(i,e,t);let a=op(ap(o));return new ni(a,s,r)}function up(i,e,t){let n={};return Object.entries(i.children).forEach(([r,s])=>{s===e?n[r]=t:n[r]=up(s,e,t)}),new st(i.segments,n)}var xa=class{isAbsolute;numberOfDoubleDots;commands;constructor(e,t,n){if(this.isAbsolute=e,this.numberOfDoubleDots=t,this.commands=n,e&&n.length>0&&ya(n[0]))throw new Ye(4003,!1);let r=n.find(xo);if(r&&r!==Qf(n))throw new Ye(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function K0(i){if(typeof i[0]=="string"&&i.length===1&&i[0]==="/")return new xa(!0,0,i);let e=0,t=!1,n=i.reduce((r,s,o)=>{if(typeof s=="object"&&s!=null){if(s.outlets){let a={};return Object.entries(s.outlets).forEach(([l,c])=>{a[l]=typeof c=="string"?c.split("/"):c}),[...r,{outlets:a}]}if(s.segmentPath)return[...r,s.segmentPath]}return typeof s!="string"?[...r,s]:o===0?(s.split("/").forEach((a,l)=>{l==0&&a==="."||(l==0&&a===""?t=!0:a===".."?e++:a!=""&&r.push(a))}),r):[...r,s]},[]);return new xa(t,e,n)}var Br=class{segmentGroup;processChildren;index;constructor(e,t,n){this.segmentGroup=e,this.processChildren=t,this.index=n}};function Q0(i,e,t){if(i.isAbsolute)return new Br(e,!0,0);if(!t)return new Br(e,!1,NaN);if(t.parent===null)return new Br(t,!0,0);let n=ya(i.commands[0])?0:1,r=t.segments.length-1+n;return ev(t,r,i.numberOfDoubleDots)}function ev(i,e,t){let n=i,r=e,s=t;for(;s>r;){if(s-=r,n=n.parent,!n)throw new Ye(4005,!1);r=n.segments.length}return new Br(n,!1,r-s)}function tv(i){return xo(i[0])?i[0].outlets:{[Ne]:i}}function dp(i,e,t){if(i??=new st([],{}),i.segments.length===0&&i.hasChildren())return _o(i,e,t);let n=nv(i,e,t),r=t.slice(n.commandIndex);if(n.match&&n.pathIndex<i.segments.length){let s=new st(i.segments.slice(0,n.pathIndex),{});return s.children[Ne]=new st(i.segments.slice(n.pathIndex),i.children),_o(s,0,r)}else return n.match&&r.length===0?new st(i.segments,{}):n.match&&!i.hasChildren()?jc(i,e,t):n.match?_o(i,0,r):jc(i,e,t)}function _o(i,e,t){if(t.length===0)return new st(i.segments,{});{let n=tv(t),r={};if(Object.keys(n).some(s=>s!==Ne)&&i.children[Ne]&&i.numberOfChildren===1&&i.children[Ne].segments.length===0){let s=_o(i.children[Ne],e,t);return new st(i.segments,s.children)}return Object.entries(n).forEach(([s,o])=>{typeof o=="string"&&(o=[o]),o!==null&&(r[s]=dp(i.children[s],e,o))}),Object.entries(i.children).forEach(([s,o])=>{n[s]===void 0&&(r[s]=o)}),new st(i.segments,r)}}function nv(i,e,t){let n=0,r=e,s={match:!1,pathIndex:0,commandIndex:0};for(;r<i.segments.length;){if(n>=t.length)return s;let o=i.segments[r],a=t[n];if(xo(a))break;let l=`${a}`,c=n<t.length-1?t[n+1]:null;if(r>0&&l===void 0)break;if(l&&c&&typeof c=="object"&&c.outlets===void 0){if(!qf(l,c,o))return s;n+=2}else{if(!qf(l,{},o))return s;n++}r++}return{match:!0,pathIndex:r,commandIndex:n}}function jc(i,e,t){let n=i.segments.slice(0,e),r=0;for(;r<t.length;){let s=t[r];if(xo(s)){let l=iv(s.outlets);return new st(n,l)}if(r===0&&ya(t[0])){let l=i.segments[e];n.push(new er(l.path,jf(t[0]))),r++;continue}let o=xo(s)?s.outlets[Ne]:`${s}`,a=r<t.length-1?t[r+1]:null;o&&a&&ya(a)?(n.push(new er(o,jf(a))),r+=2):(n.push(new er(o,{})),r++)}return new st(n,{})}function iv(i){let e={};return Object.entries(i).forEach(([t,n])=>{typeof n=="string"&&(n=[n]),n!==null&&(e[t]=jc(new st([],{}),0,n))}),e}function jf(i){let e={};return Object.entries(i).forEach(([t,n])=>e[t]=`${n}`),e}function qf(i,e,t){return i==t.path&&Xn(e,t.parameters)}var Vr="imperative",Ht=(function(i){return i[i.NavigationStart=0]="NavigationStart",i[i.NavigationEnd=1]="NavigationEnd",i[i.NavigationCancel=2]="NavigationCancel",i[i.NavigationError=3]="NavigationError",i[i.RoutesRecognized=4]="RoutesRecognized",i[i.ResolveStart=5]="ResolveStart",i[i.ResolveEnd=6]="ResolveEnd",i[i.GuardsCheckStart=7]="GuardsCheckStart",i[i.GuardsCheckEnd=8]="GuardsCheckEnd",i[i.RouteConfigLoadStart=9]="RouteConfigLoadStart",i[i.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",i[i.ChildActivationStart=11]="ChildActivationStart",i[i.ChildActivationEnd=12]="ChildActivationEnd",i[i.ActivationStart=13]="ActivationStart",i[i.ActivationEnd=14]="ActivationEnd",i[i.Scroll=15]="Scroll",i[i.NavigationSkipped=16]="NavigationSkipped",i})(Ht||{}),wn=class{id;url;constructor(e,t){this.id=e,this.url=t}},nr=class extends wn{type=Ht.NavigationStart;navigationTrigger;restoredState;constructor(e,t,n="imperative",r=null){super(e,t),this.navigationTrigger=n,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},ii=class extends wn{urlAfterRedirects;type=Ht.NavigationEnd;constructor(e,t,n){super(e,t),this.urlAfterRedirects=n}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},sn=(function(i){return i[i.Redirect=0]="Redirect",i[i.SupersededByNewNavigation=1]="SupersededByNewNavigation",i[i.NoDataFromResolver=2]="NoDataFromResolver",i[i.GuardRejected=3]="GuardRejected",i[i.Aborted=4]="Aborted",i})(sn||{}),Mo=(function(i){return i[i.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",i[i.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",i})(Mo||{}),ti=class extends wn{reason;code;type=Ht.NavigationCancel;constructor(e,t,n,r){super(e,t),this.reason=n,this.code=r}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}},ri=class extends wn{reason;code;type=Ht.NavigationSkipped;constructor(e,t,n,r){super(e,t),this.reason=n,this.code=r}},So=class extends wn{error;target;type=Ht.NavigationError;constructor(e,t,n,r){super(e,t),this.error=n,this.target=r}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},Ma=class extends wn{urlAfterRedirects;state;type=Ht.RoutesRecognized;constructor(e,t,n,r){super(e,t),this.urlAfterRedirects=n,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},qc=class extends wn{urlAfterRedirects;state;type=Ht.GuardsCheckStart;constructor(e,t,n,r){super(e,t),this.urlAfterRedirects=n,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Yc=class extends wn{urlAfterRedirects;state;shouldActivate;type=Ht.GuardsCheckEnd;constructor(e,t,n,r,s){super(e,t),this.urlAfterRedirects=n,this.state=r,this.shouldActivate=s}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},Zc=class extends wn{urlAfterRedirects;state;type=Ht.ResolveStart;constructor(e,t,n,r){super(e,t),this.urlAfterRedirects=n,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Jc=class extends wn{urlAfterRedirects;state;type=Ht.ResolveEnd;constructor(e,t,n,r){super(e,t),this.urlAfterRedirects=n,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Kc=class{route;type=Ht.RouteConfigLoadStart;constructor(e){this.route=e}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},Qc=class{route;type=Ht.RouteConfigLoadEnd;constructor(e){this.route=e}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},eu=class{snapshot;type=Ht.ChildActivationStart;constructor(e){this.snapshot=e}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},tu=class{snapshot;type=Ht.ChildActivationEnd;constructor(e){this.snapshot=e}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},nu=class{snapshot;type=Ht.ActivationStart;constructor(e){this.snapshot=e}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},iu=class{snapshot;type=Ht.ActivationEnd;constructor(e){this.snapshot=e}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},bo=class{routerEvent;position;anchor;type=Ht.Scroll;constructor(e,t,n){this.routerEvent=e,this.position=t,this.anchor=n}toString(){let e=this.position?`${this.position[0]}, ${this.position[1]}`:null;return`Scroll(anchor: '${this.anchor}', position: '${e}')`}},wo=class{},Xr=class{url;navigationBehaviorOptions;constructor(e,t){this.url=e,this.navigationBehaviorOptions=t}};function rv(i){return!(i instanceof wo)&&!(i instanceof Xr)}function sv(i,e){return i.providers&&!i._injector&&(i._injector=gc(i.providers,e,`Route: ${i.path}`)),i._injector??e}function In(i){return i.outlet||Ne}function ov(i,e){let t=i.filter(n=>In(n)===e);return t.push(...i.filter(n=>In(n)!==e)),t}function qr(i){if(!i)return null;if(i.routeConfig?._injector)return i.routeConfig._injector;for(let e=i.parent;e;e=e.parent){let t=e.routeConfig;if(t?._loadedInjector)return t._loadedInjector;if(t?._injector)return t._injector}return null}var ru=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return qr(this.route?.snapshot)??this.rootInjector}constructor(e){this.rootInjector=e,this.children=new Io(this.rootInjector)}},Io=(()=>{class i{rootInjector;contexts=new Map;constructor(t){this.rootInjector=t}onChildOutletCreated(t,n){let r=this.getOrCreateContext(t);r.outlet=n,this.contexts.set(t,r)}onChildOutletDestroyed(t){let n=this.getContext(t);n&&(n.outlet=null,n.attachRef=null)}onOutletDeactivated(){let t=this.contexts;return this.contexts=new Map,t}onOutletReAttached(t){this.contexts=t}getOrCreateContext(t){let n=this.getContext(t);return n||(n=new ru(this.rootInjector),this.contexts.set(t,n)),n}getContext(t){return this.contexts.get(t)||null}static \u0275fac=function(n){return new(n||i)(et(Ir))};static \u0275prov=Re({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Sa=class{_root;constructor(e){this._root=e}get root(){return this._root.value}parent(e){let t=this.pathFromRoot(e);return t.length>1?t[t.length-2]:null}children(e){let t=su(e,this._root);return t?t.children.map(n=>n.value):[]}firstChild(e){let t=su(e,this._root);return t&&t.children.length>0?t.children[0].value:null}siblings(e){let t=ou(e,this._root);return t.length<2?[]:t[t.length-2].children.map(r=>r.value).filter(r=>r!==e)}pathFromRoot(e){return ou(e,this._root).map(t=>t.value)}};function su(i,e){if(i===e.value)return e;for(let t of e.children){let n=su(i,t);if(n)return n}return null}function ou(i,e){if(i===e.value)return[e];for(let t of e.children){let n=ou(i,t);if(n.length)return n.unshift(e),n}return[]}var dn=class{value;children;constructor(e,t){this.value=e,this.children=t}toString(){return`TreeNode(${this.value})`}};function kr(i){let e={};return i&&i.children.forEach(t=>e[t.value.outlet]=t),e}var ba=class extends Sa{snapshot;constructor(e,t){super(e),this.snapshot=t,mu(this,e)}toString(){return this.snapshot.toString()}};function hp(i){let e=av(i),t=new _n([new er("",{})]),n=new _n({}),r=new _n({}),s=new _n({}),o=new _n(""),a=new ir(t,n,s,o,r,Ne,i,e.root);return a.snapshot=e.root,new ba(new dn(a,[]),e)}function av(i){let e={},t={},n={},s=new zr([],e,n,"",t,Ne,i,null,{});return new Ea("",new dn(s,[]))}var ir=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(e,t,n,r,s,o,a,l){this.urlSubject=e,this.paramsSubject=t,this.queryParamsSubject=n,this.fragmentSubject=r,this.dataSubject=s,this.outlet=o,this.component=a,this._futureSnapshot=l,this.title=this.dataSubject?.pipe(at(c=>c[Do]))??Fe(void 0),this.url=e,this.params=t,this.queryParams=n,this.fragment=r,this.data=s}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(at(e=>Gr(e))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(at(e=>Gr(e))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function wa(i,e,t="emptyOnly"){let n,{routeConfig:r}=i;return e!==null&&(t==="always"||r?.path===""||!e.component&&!e.routeConfig?.loadComponent)?n={params:pe(pe({},e.params),i.params),data:pe(pe({},e.data),i.data),resolve:pe(pe(pe(pe({},i.data),e.data),r?.data),i._resolvedData)}:n={params:pe({},i.params),data:pe({},i.data),resolve:pe(pe({},i.data),i._resolvedData??{})},r&&pp(r)&&(n.resolve[Do]=r.title),n}var zr=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;get title(){return this.data?.[Do]}constructor(e,t,n,r,s,o,a,l,c){this.url=e,this.params=t,this.queryParams=n,this.fragment=r,this.data=s,this.outlet=o,this.component=a,this.routeConfig=l,this._resolve=c}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=Gr(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=Gr(this.queryParams),this._queryParamMap}toString(){let e=this.url.map(n=>n.toString()).join("/"),t=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${e}', path:'${t}')`}},Ea=class extends Sa{url;constructor(e,t){super(t),this.url=e,mu(this,t)}toString(){return fp(this._root)}};function mu(i,e){e.value._routerState=i,e.children.forEach(t=>mu(i,t))}function fp(i){let e=i.children.length>0?` { ${i.children.map(fp).join(", ")} } `:"";return`${i.value}${e}`}function zc(i){if(i.snapshot){let e=i.snapshot,t=i._futureSnapshot;i.snapshot=t,Xn(e.queryParams,t.queryParams)||i.queryParamsSubject.next(t.queryParams),e.fragment!==t.fragment&&i.fragmentSubject.next(t.fragment),Xn(e.params,t.params)||i.paramsSubject.next(t.params),O0(e.url,t.url)||i.urlSubject.next(t.url),Xn(e.data,t.data)||i.dataSubject.next(t.data)}else i.snapshot=i._futureSnapshot,i.dataSubject.next(i._futureSnapshot.data)}function au(i,e){let t=Xn(i.params,e.params)&&U0(i.url,e.url),n=!i.parent!=!e.parent;return t&&!n&&(!i.parent||au(i.parent,e.parent))}function pp(i){return typeof i.title=="string"||i.title===null}var lv=new lt(""),mp=(()=>{class i{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=Ne;activateEvents=new Dn;deactivateEvents=new Dn;attachEvents=new Dn;detachEvents=new Dn;routerOutletData=Ef();parentContexts=ne(Io);location=ne(mc);changeDetector=ne(Ti);inputBinder=ne(Ta,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(t){if(t.name){let{firstChange:n,previousValue:r}=t.name;if(n)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(t){return this.parentContexts.getContext(t)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let t=this.parentContexts.getContext(this.name);t?.route&&(t.attachRef?this.attach(t.attachRef,t.route):this.activateWith(t.route,t.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new Ye(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new Ye(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new Ye(4012,!1);this.location.detach();let t=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(t.instance),t}attach(t,n){this.activated=t,this._activatedRoute=n,this.location.insert(t.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(t.instance)}deactivate(){if(this.activated){let t=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(t)}}activateWith(t,n){if(this.isActivated)throw new Ye(4013,!1);this._activatedRoute=t;let r=this.location,o=t.snapshot.component,a=this.parentContexts.getOrCreateContext(this.name).children,l=new lu(t,a,r.injector,this.routerOutletData);this.activated=r.createComponent(o,{index:r.length,injector:l,environmentInjector:n}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(n){return new(n||i)};static \u0275dir=Ct({type:i,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[Zi]})}return i})(),lu=class{route;childContexts;parent;outletData;constructor(e,t,n,r){this.route=e,this.childContexts=t,this.parent=n,this.outletData=r}get(e,t){return e===ir?this.route:e===Io?this.childContexts:e===lv?this.outletData:this.parent.get(e,t)}},Ta=new lt("");var gp=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275cmp=rt({type:i,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(n,r){n&1&&Le(0,"router-outlet")},dependencies:[mp],encapsulation:2})}return i})();function gu(i){let e=i.children&&i.children.map(gu),t=e?yt(pe({},i),{children:e}):pe({},i);return!t.component&&!t.loadComponent&&(e||t.loadChildren)&&t.outlet&&t.outlet!==Ne&&(t.component=gp),t}function cv(i,e,t){let n=Eo(i,e._root,t?t._root:void 0);return new ba(n,e)}function Eo(i,e,t){if(t&&i.shouldReuseRoute(e.value,t.value.snapshot)){let n=t.value;n._futureSnapshot=e.value;let r=uv(i,e,t);return new dn(n,r)}else{if(i.shouldAttach(e.value)){let s=i.retrieve(e.value);if(s!==null){let o=s.route;return o.value._futureSnapshot=e.value,o.children=e.children.map(a=>Eo(i,a)),o}}let n=dv(e.value),r=e.children.map(s=>Eo(i,s));return new dn(n,r)}}function uv(i,e,t){return e.children.map(n=>{for(let r of t.children)if(i.shouldReuseRoute(n.value,r.value.snapshot))return Eo(i,n,r);return Eo(i,n)})}function dv(i){return new ir(new _n(i.url),new _n(i.params),new _n(i.queryParams),new _n(i.fragment),new _n(i.data),i.outlet,i.component,i)}var Co=class{redirectTo;navigationBehaviorOptions;constructor(e,t){this.redirectTo=e,this.navigationBehaviorOptions=t}},vp="ngNavigationCancelingError";function Ca(i,e){let{redirectTo:t,navigationBehaviorOptions:n}=$r(e)?{redirectTo:e,navigationBehaviorOptions:void 0}:e,r=_p(!1,sn.Redirect);return r.url=t,r.navigationBehaviorOptions=n,r}function _p(i,e){let t=new Error(`NavigationCancelingError: ${i||""}`);return t[vp]=!0,t.cancellationCode=e,t}function hv(i){return yp(i)&&$r(i.url)}function yp(i){return!!i&&i[vp]}var fv=(i,e,t,n)=>at(r=>(new cu(e,r.targetRouterState,r.currentRouterState,t,n).activate(i),r)),cu=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(e,t,n,r,s){this.routeReuseStrategy=e,this.futureState=t,this.currState=n,this.forwardEvent=r,this.inputBindingEnabled=s}activate(e){let t=this.futureState._root,n=this.currState?this.currState._root:null;this.deactivateChildRoutes(t,n,e),zc(this.futureState.root),this.activateChildRoutes(t,n,e)}deactivateChildRoutes(e,t,n){let r=kr(t);e.children.forEach(s=>{let o=s.value.outlet;this.deactivateRoutes(s,r[o],n),delete r[o]}),Object.values(r).forEach(s=>{this.deactivateRouteAndItsChildren(s,n)})}deactivateRoutes(e,t,n){let r=e.value,s=t?t.value:null;if(r===s)if(r.component){let o=n.getContext(r.outlet);o&&this.deactivateChildRoutes(e,t,o.children)}else this.deactivateChildRoutes(e,t,n);else s&&this.deactivateRouteAndItsChildren(t,n)}deactivateRouteAndItsChildren(e,t){e.value.component&&this.routeReuseStrategy.shouldDetach(e.value.snapshot)?this.detachAndStoreRouteSubtree(e,t):this.deactivateRouteAndOutlet(e,t)}detachAndStoreRouteSubtree(e,t){let n=t.getContext(e.value.outlet),r=n&&e.value.component?n.children:t,s=kr(e);for(let o of Object.values(s))this.deactivateRouteAndItsChildren(o,r);if(n&&n.outlet){let o=n.outlet.detach(),a=n.children.onOutletDeactivated();this.routeReuseStrategy.store(e.value.snapshot,{componentRef:o,route:e,contexts:a})}}deactivateRouteAndOutlet(e,t){let n=t.getContext(e.value.outlet),r=n&&e.value.component?n.children:t,s=kr(e);for(let o of Object.values(s))this.deactivateRouteAndItsChildren(o,r);n&&(n.outlet&&(n.outlet.deactivate(),n.children.onOutletDeactivated()),n.attachRef=null,n.route=null)}activateChildRoutes(e,t,n){let r=kr(t);e.children.forEach(s=>{this.activateRoutes(s,r[s.value.outlet],n),this.forwardEvent(new iu(s.value.snapshot))}),e.children.length&&this.forwardEvent(new tu(e.value.snapshot))}activateRoutes(e,t,n){let r=e.value,s=t?t.value:null;if(zc(r),r===s)if(r.component){let o=n.getOrCreateContext(r.outlet);this.activateChildRoutes(e,t,o.children)}else this.activateChildRoutes(e,t,n);else if(r.component){let o=n.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let a=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),o.children.onOutletReAttached(a.contexts),o.attachRef=a.componentRef,o.route=a.route.value,o.outlet&&o.outlet.attach(a.componentRef,a.route.value),zc(a.route.value),this.activateChildRoutes(e,null,o.children)}else o.attachRef=null,o.route=r,o.outlet&&o.outlet.activateWith(r,o.injector),this.activateChildRoutes(e,null,o.children)}else this.activateChildRoutes(e,null,n)}},Aa=class{path;route;constructor(e){this.path=e,this.route=this.path[this.path.length-1]}},Hr=class{component;route;constructor(e,t){this.component=e,this.route=t}};function pv(i,e,t){let n=i._root,r=e?e._root:null;return vo(n,r,t,[n.value])}function mv(i){let e=i.routeConfig?i.routeConfig.canActivateChild:null;return!e||e.length===0?null:{node:i,guards:e}}function Yr(i,e){let t=Symbol(),n=e.get(i,t);return n===t?typeof i=="function"&&!ef(i)?i:e.get(i):n}function vo(i,e,t,n,r={canDeactivateChecks:[],canActivateChecks:[]}){let s=kr(e);return i.children.forEach(o=>{gv(o,s[o.value.outlet],t,n.concat([o.value]),r),delete s[o.value.outlet]}),Object.entries(s).forEach(([o,a])=>yo(a,t.getContext(o),r)),r}function gv(i,e,t,n,r={canDeactivateChecks:[],canActivateChecks:[]}){let s=i.value,o=e?e.value:null,a=t?t.getContext(i.value.outlet):null;if(o&&s.routeConfig===o.routeConfig){let l=vv(o,s,s.routeConfig.runGuardsAndResolvers);l?r.canActivateChecks.push(new Aa(n)):(s.data=o.data,s._resolvedData=o._resolvedData),s.component?vo(i,e,a?a.children:null,n,r):vo(i,e,t,n,r),l&&a&&a.outlet&&a.outlet.isActivated&&r.canDeactivateChecks.push(new Hr(a.outlet.component,o))}else o&&yo(e,a,r),r.canActivateChecks.push(new Aa(n)),s.component?vo(i,null,a?a.children:null,n,r):vo(i,null,t,n,r);return r}function vv(i,e,t){if(typeof t=="function")return t(i,e);switch(t){case"pathParamsChange":return!tr(i.url,e.url);case"pathParamsOrQueryParamsChange":return!tr(i.url,e.url)||!Xn(i.queryParams,e.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!au(i,e)||!Xn(i.queryParams,e.queryParams);case"paramsChange":default:return!au(i,e)}}function yo(i,e,t){let n=kr(i),r=i.value;Object.entries(n).forEach(([s,o])=>{r.component?e?yo(o,e.children.getContext(s),t):yo(o,null,t):yo(o,e,t)}),r.component?e&&e.outlet&&e.outlet.isActivated?t.canDeactivateChecks.push(new Hr(e.outlet.component,r)):t.canDeactivateChecks.push(new Hr(null,r)):t.canDeactivateChecks.push(new Hr(null,r))}function Po(i){return typeof i=="function"}function _v(i){return typeof i=="boolean"}function yv(i){return i&&Po(i.canLoad)}function xv(i){return i&&Po(i.canActivate)}function Mv(i){return i&&Po(i.canActivateChild)}function Sv(i){return i&&Po(i.canDeactivate)}function bv(i){return i&&Po(i.canMatch)}function xp(i){return i instanceof qh||i?.name==="EmptyError"}var ma=Symbol("INITIAL_VALUE");function jr(){return un(i=>ac(i.map(e=>e.pipe(Rr(1),Qh(ma)))).pipe(at(e=>{for(let t of e)if(t!==!0){if(t===ma)return ma;if(t===!1||wv(t))return t}return!0}),Xi(e=>e!==ma),Rr(1)))}function wv(i){return $r(i)||i instanceof Co}function Ev(i,e){return yn(t=>{let{targetSnapshot:n,currentSnapshot:r,guards:{canActivateChecks:s,canDeactivateChecks:o}}=t;return o.length===0&&s.length===0?Fe(yt(pe({},t),{guardsResult:!0})):Cv(o,n,r,i).pipe(yn(a=>a&&_v(a)?Av(n,s,i,e):Fe(a)),at(a=>yt(pe({},t),{guardsResult:a})))})}function Cv(i,e,t,n){return rn(i).pipe(yn(r=>Pv(r.component,r.route,t,e,n)),Si(r=>r!==!0,!0))}function Av(i,e,t,n){return rn(e).pipe(Js(r=>Yh(Dv(r.route.parent,n),Tv(r.route,n),Iv(i,r.path,t),Rv(i,r.route,t))),Si(r=>r!==!0,!0))}function Tv(i,e){return i!==null&&e&&e(new nu(i)),Fe(!0)}function Dv(i,e){return i!==null&&e&&e(new eu(i)),Fe(!0)}function Rv(i,e,t){let n=e.routeConfig?e.routeConfig.canActivate:null;if(!n||n.length===0)return Fe(!0);let r=n.map(s=>ea(()=>{let o=qr(e)??t,a=Yr(s,o),l=xv(a)?a.canActivate(e,i):xn(o,()=>a(e,i));return si(l).pipe(Si())}));return Fe(r).pipe(jr())}function Iv(i,e,t){let n=e[e.length-1],s=e.slice(0,e.length-1).reverse().map(o=>mv(o)).filter(o=>o!==null).map(o=>ea(()=>{let a=o.guards.map(l=>{let c=qr(o.node)??t,u=Yr(l,c),d=Mv(u)?u.canActivateChild(n,i):xn(c,()=>u(n,i));return si(d).pipe(Si())});return Fe(a).pipe(jr())}));return Fe(s).pipe(jr())}function Pv(i,e,t,n,r){let s=e&&e.routeConfig?e.routeConfig.canDeactivate:null;if(!s||s.length===0)return Fe(!0);let o=s.map(a=>{let l=qr(e)??r,c=Yr(a,l),u=Sv(c)?c.canDeactivate(i,e,t,n):xn(l,()=>c(i,e,t,n));return si(u).pipe(Si())});return Fe(o).pipe(jr())}function Ov(i,e,t,n){let r=e.canLoad;if(r===void 0||r.length===0)return Fe(!0);let s=r.map(o=>{let a=Yr(o,i),l=yv(a)?a.canLoad(e,t):xn(i,()=>a(e,t));return si(l)});return Fe(s).pipe(jr(),Mp(n))}function Mp(i){return $h(Wt(e=>{if(typeof e!="boolean")throw Ca(i,e)}),at(e=>e===!0))}function Fv(i,e,t,n){let r=e.canMatch;if(!r||r.length===0)return Fe(!0);let s=r.map(o=>{let a=Yr(o,i),l=bv(a)?a.canMatch(e,t):xn(i,()=>a(e,t));return si(l)});return Fe(s).pipe(jr(),Mp(n))}var Ao=class{segmentGroup;constructor(e){this.segmentGroup=e||null}},To=class extends Error{urlTree;constructor(e){super(),this.urlTree=e}};function Ur(i){return Zs(new Ao(i))}function Lv(i){return Zs(new Ye(4e3,!1))}function Nv(i){return Zs(_p(!1,sn.GuardRejected))}var uu=class{urlSerializer;urlTree;constructor(e,t){this.urlSerializer=e,this.urlTree=t}lineralizeSegments(e,t){let n=[],r=t.root;for(;;){if(n=n.concat(r.segments),r.numberOfChildren===0)return Fe(n);if(r.numberOfChildren>1||!r.children[Ne])return Lv(`${e.redirectTo}`);r=r.children[Ne]}}applyRedirectCommands(e,t,n,r,s){return Uv(t,r,s).pipe(at(o=>{if(o instanceof ni)throw new To(o);let a=this.applyRedirectCreateUrlTree(o,this.urlSerializer.parse(o),e,n);if(o[0]==="/")throw new To(a);return a}))}applyRedirectCreateUrlTree(e,t,n,r){let s=this.createSegmentGroup(e,t.root,n,r);return new ni(s,this.createQueryParams(t.queryParams,this.urlTree.queryParams),t.fragment)}createQueryParams(e,t){let n={};return Object.entries(e).forEach(([r,s])=>{if(typeof s=="string"&&s[0]===":"){let a=s.substring(1);n[r]=t[a]}else n[r]=s}),n}createSegmentGroup(e,t,n,r){let s=this.createSegments(e,t.segments,n,r),o={};return Object.entries(t.children).forEach(([a,l])=>{o[a]=this.createSegmentGroup(e,l,n,r)}),new st(s,o)}createSegments(e,t,n,r){return t.map(s=>s.path[0]===":"?this.findPosParam(e,s,r):this.findOrReturn(s,n))}findPosParam(e,t,n){let r=n[t.path.substring(1)];if(!r)throw new Ye(4001,!1);return r}findOrReturn(e,t){let n=0;for(let r of t){if(r.path===e.path)return t.splice(n),r;n++}return e}};function Uv(i,e,t){if(typeof i=="string")return Fe(i);let n=i,{queryParams:r,fragment:s,routeConfig:o,url:a,outlet:l,params:c,data:u,title:d}=e;return si(xn(t,()=>n({params:c,data:u,queryParams:r,fragment:s,routeConfig:o,url:a,outlet:l,title:d})))}var du={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function kv(i,e,t,n,r){let s=Sp(i,e,t);return s.matched?(n=sv(e,n),Fv(n,e,t,r).pipe(at(o=>o===!0?s:pe({},du)))):Fe(s)}function Sp(i,e,t){if(e.path==="**")return Bv(t);if(e.path==="")return e.pathMatch==="full"&&(i.hasChildren()||t.length>0)?pe({},du):{matched:!0,consumedSegments:[],remainingSegments:t,parameters:{},positionalParamSegments:{}};let r=(e.matcher||P0)(t,i,e);if(!r)return pe({},du);let s={};Object.entries(r.posParams??{}).forEach(([a,l])=>{s[a]=l.path});let o=r.consumed.length>0?pe(pe({},s),r.consumed[r.consumed.length-1].parameters):s;return{matched:!0,consumedSegments:r.consumed,remainingSegments:t.slice(r.consumed.length),parameters:o,positionalParamSegments:r.posParams??{}}}function Bv(i){return{matched:!0,parameters:i.length>0?Qf(i).parameters:{},consumedSegments:i,remainingSegments:[],positionalParamSegments:{}}}function Yf(i,e,t,n){return t.length>0&&Hv(i,t,n)?{segmentGroup:new st(e,zv(n,new st(t,i.children))),slicedSegments:[]}:t.length===0&&Gv(i,t,n)?{segmentGroup:new st(i.segments,Vv(i,t,n,i.children)),slicedSegments:t}:{segmentGroup:new st(i.segments,i.children),slicedSegments:t}}function Vv(i,e,t,n){let r={};for(let s of t)if(Da(i,e,s)&&!n[In(s)]){let o=new st([],{});r[In(s)]=o}return pe(pe({},n),r)}function zv(i,e){let t={};t[Ne]=e;for(let n of i)if(n.path===""&&In(n)!==Ne){let r=new st([],{});t[In(n)]=r}return t}function Hv(i,e,t){return t.some(n=>Da(i,e,n)&&In(n)!==Ne)}function Gv(i,e,t){return t.some(n=>Da(i,e,n))}function Da(i,e,t){return(i.hasChildren()||e.length>0)&&t.pathMatch==="full"?!1:t.path===""}function Wv(i,e,t){return e.length===0&&!i.children[t]}var hu=class{};function $v(i,e,t,n,r,s,o="emptyOnly"){return new fu(i,e,t,n,r,o,s).recognize()}var Xv=31,fu=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(e,t,n,r,s,o,a){this.injector=e,this.configLoader=t,this.rootComponentType=n,this.config=r,this.urlTree=s,this.paramsInheritanceStrategy=o,this.urlSerializer=a,this.applyRedirects=new uu(this.urlSerializer,this.urlTree)}noMatchError(e){return new Ye(4002,`'${e.segmentGroup}'`)}recognize(){let e=Yf(this.urlTree.root,[],[],this.config).segmentGroup;return this.match(e).pipe(at(({children:t,rootSnapshot:n})=>{let r=new dn(n,t),s=new Ea("",r),o=J0(n,[],this.urlTree.queryParams,this.urlTree.fragment);return o.queryParams=this.urlTree.queryParams,s.url=this.urlSerializer.serialize(o),{state:s,tree:o}}))}match(e){let t=new zr([],Object.freeze({}),Object.freeze(pe({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),Ne,this.rootComponentType,null,{});return this.processSegmentGroup(this.injector,this.config,e,Ne,t).pipe(at(n=>({children:n,rootSnapshot:t})),Dr(n=>{if(n instanceof To)return this.urlTree=n.urlTree,this.match(n.urlTree.root);throw n instanceof Ao?this.noMatchError(n):n}))}processSegmentGroup(e,t,n,r,s){return n.segments.length===0&&n.hasChildren()?this.processChildren(e,t,n,s):this.processSegment(e,t,n,n.segments,r,!0,s).pipe(at(o=>o instanceof dn?[o]:[]))}processChildren(e,t,n,r){let s=[];for(let o of Object.keys(n.children))o==="primary"?s.unshift(o):s.push(o);return rn(s).pipe(Js(o=>{let a=n.children[o],l=ov(t,o);return this.processSegmentGroup(e,l,a,o,r)}),Kh((o,a)=>(o.push(...a),o)),lc(null),Jh(),yn(o=>{if(o===null)return Ur(n);let a=bp(o);return jv(a),Fe(a)}))}processSegment(e,t,n,r,s,o,a){return rn(t).pipe(Js(l=>this.processSegmentAgainstRoute(l._injector??e,t,l,n,r,s,o,a).pipe(Dr(c=>{if(c instanceof Ao)return Fe(null);throw c}))),Si(l=>!!l),Dr(l=>{if(xp(l))return Wv(n,r,s)?Fe(new hu):Ur(n);throw l}))}processSegmentAgainstRoute(e,t,n,r,s,o,a,l){return In(n)!==o&&(o===Ne||!Da(r,s,n))?Ur(r):n.redirectTo===void 0?this.matchSegmentAgainstRoute(e,r,n,s,o,l):this.allowRedirects&&a?this.expandSegmentAgainstRouteUsingRedirect(e,r,t,n,s,o,l):Ur(r)}expandSegmentAgainstRouteUsingRedirect(e,t,n,r,s,o,a){let{matched:l,parameters:c,consumedSegments:u,positionalParamSegments:d,remainingSegments:f}=Sp(t,r,s);if(!l)return Ur(t);typeof r.redirectTo=="string"&&r.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>Xv&&(this.allowRedirects=!1));let m=new zr(s,c,Object.freeze(pe({},this.urlTree.queryParams)),this.urlTree.fragment,Zf(r),In(r),r.component??r._loadedComponent??null,r,Jf(r)),g=wa(m,a,this.paramsInheritanceStrategy);return m.params=Object.freeze(g.params),m.data=Object.freeze(g.data),this.applyRedirects.applyRedirectCommands(u,r.redirectTo,d,m,e).pipe(un(p=>this.applyRedirects.lineralizeSegments(r,p)),yn(p=>this.processSegment(e,n,t,p.concat(f),o,!1,a)))}matchSegmentAgainstRoute(e,t,n,r,s,o){let a=kv(t,n,r,e,this.urlSerializer);return n.path==="**"&&(t.children={}),a.pipe(un(l=>l.matched?(e=n._injector??e,this.getChildConfig(e,n,r).pipe(un(({routes:c})=>{let u=n._loadedInjector??e,{parameters:d,consumedSegments:f,remainingSegments:m}=l,g=new zr(f,d,Object.freeze(pe({},this.urlTree.queryParams)),this.urlTree.fragment,Zf(n),In(n),n.component??n._loadedComponent??null,n,Jf(n)),y=wa(g,o,this.paramsInheritanceStrategy);g.params=Object.freeze(y.params),g.data=Object.freeze(y.data);let{segmentGroup:p,slicedSegments:h}=Yf(t,f,m,c);if(h.length===0&&p.hasChildren())return this.processChildren(u,c,p,g).pipe(at(w=>new dn(g,w)));if(c.length===0&&h.length===0)return Fe(new dn(g,[]));let E=In(n)===s;return this.processSegment(u,c,p,h,E?Ne:s,!0,g).pipe(at(w=>new dn(g,w instanceof dn?[w]:[])))}))):Ur(t)))}getChildConfig(e,t,n){return t.children?Fe({routes:t.children,injector:e}):t.loadChildren?t._loadedRoutes!==void 0?Fe({routes:t._loadedRoutes,injector:t._loadedInjector}):Ov(e,t,n,this.urlSerializer).pipe(yn(r=>r?this.configLoader.loadChildren(e,t).pipe(Wt(s=>{t._loadedRoutes=s.routes,t._loadedInjector=s.injector})):Nv(t))):Fe({routes:[],injector:e})}};function jv(i){i.sort((e,t)=>e.value.outlet===Ne?-1:t.value.outlet===Ne?1:e.value.outlet.localeCompare(t.value.outlet))}function qv(i){let e=i.value.routeConfig;return e&&e.path===""}function bp(i){let e=[],t=new Set;for(let n of i){if(!qv(n)){e.push(n);continue}let r=e.find(s=>n.value.routeConfig===s.value.routeConfig);r!==void 0?(r.children.push(...n.children),t.add(r)):e.push(n)}for(let n of t){let r=bp(n.children);e.push(new dn(n.value,r))}return e.filter(n=>!t.has(n))}function Zf(i){return i.data||{}}function Jf(i){return i.resolve||{}}function Yv(i,e,t,n,r,s){return yn(o=>$v(i,e,t,n,o.extractedUrl,r,s).pipe(at(({state:a,tree:l})=>yt(pe({},o),{targetSnapshot:a,urlAfterRedirects:l}))))}function Zv(i,e){return yn(t=>{let{targetSnapshot:n,guards:{canActivateChecks:r}}=t;if(!r.length)return Fe(t);let s=new Set(r.map(l=>l.route)),o=new Set;for(let l of s)if(!o.has(l))for(let c of wp(l))o.add(c);let a=0;return rn(o).pipe(Js(l=>s.has(l)?Jv(l,n,i,e):(l.data=wa(l,l.parent,i).resolve,Fe(void 0))),Wt(()=>a++),cc(1),yn(l=>a===o.size?Fe(t):Kn))})}function wp(i){let e=i.children.map(t=>wp(t)).flat();return[i,...e]}function Jv(i,e,t,n){let r=i.routeConfig,s=i._resolve;return r?.title!==void 0&&!pp(r)&&(s[Do]=r.title),ea(()=>(i.data=wa(i,i.parent,t).resolve,Kv(s,i,e,n).pipe(at(o=>(i._resolvedData=o,i.data=pe(pe({},i.data),o),null)))))}function Kv(i,e,t,n){let r=Wc(i);if(r.length===0)return Fe({});let s={};return rn(r).pipe(yn(o=>Qv(i[o],e,t,n).pipe(Si(),Wt(a=>{if(a instanceof Co)throw Ca(new Wr,a);s[o]=a}))),cc(1),at(()=>s),Dr(o=>xp(o)?Kn:Zs(o)))}function Qv(i,e,t,n){let r=qr(e)??n,s=Yr(i,r),o=s.resolve?s.resolve(e,t):xn(r,()=>s(e,t));return si(o)}function Hc(i){return un(e=>{let t=i(e);return t?rn(t).pipe(at(()=>e)):Fe(e)})}var Ep=(()=>{class i{buildTitle(t){let n,r=t.root;for(;r!==void 0;)n=this.getResolvedTitleForRoute(r)??n,r=r.children.find(s=>s.outlet===Ne);return n}getResolvedTitleForRoute(t){return t.data[Do]}static \u0275fac=function(n){return new(n||i)};static \u0275prov=Re({token:i,factory:()=>ne(e_),providedIn:"root"})}return i})(),e_=(()=>{class i extends Ep{title;constructor(t){super(),this.title=t}updateTitle(t){let n=this.buildTitle(t);n!==void 0&&this.title.setTitle(n)}static \u0275fac=function(n){return new(n||i)(et(Wf))};static \u0275prov=Re({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Ra=new lt("",{providedIn:"root",factory:()=>({})}),Ia=new lt(""),Cp=(()=>{class i{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=ne(Mf);loadComponent(t,n){if(this.componentLoaders.get(n))return this.componentLoaders.get(n);if(n._loadedComponent)return Fe(n._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(n);let r=si(xn(t,()=>n.loadComponent())).pipe(at(Ap),un(Tp),Wt(o=>{this.onLoadEndListener&&this.onLoadEndListener(n),n._loadedComponent=o}),ta(()=>{this.componentLoaders.delete(n)})),s=new oc(r,()=>new vn).pipe(sc());return this.componentLoaders.set(n,s),s}loadChildren(t,n){if(this.childrenLoaders.get(n))return this.childrenLoaders.get(n);if(n._loadedRoutes)return Fe({routes:n._loadedRoutes,injector:n._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(n);let s=t_(n,this.compiler,t,this.onLoadEndListener).pipe(ta(()=>{this.childrenLoaders.delete(n)})),o=new oc(s,()=>new vn).pipe(sc());return this.childrenLoaders.set(n,o),o}static \u0275fac=function(n){return new(n||i)};static \u0275prov=Re({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function t_(i,e,t,n){return si(xn(t,()=>i.loadChildren())).pipe(at(Ap),un(Tp),yn(r=>r instanceof df||Array.isArray(r)?Fe(r):rn(e.compileModuleAsync(r))),at(r=>{n&&n(i);let s,o,a=!1;return Array.isArray(r)?(o=r,a=!0):(s=r.create(t).injector,o=s.get(Ia,[],{optional:!0,self:!0}).flat()),{routes:o.map(gu),injector:s}}))}function n_(i){return i&&typeof i=="object"&&"default"in i}function Ap(i){return n_(i)?i.default:i}function Tp(i){return Fe(i)}var vu=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275prov=Re({token:i,factory:()=>ne(i_),providedIn:"root"})}return i})(),i_=(()=>{class i{shouldProcessUrl(t){return!0}extract(t){return t}merge(t,n){return t}static \u0275fac=function(n){return new(n||i)};static \u0275prov=Re({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),_u=new lt(""),yu=new lt("");function Dp(i,e,t){let n=i.get(yu),r=i.get(It);if(!r.startViewTransition||n.skipNextTransition)return n.skipNextTransition=!1,new Promise(c=>setTimeout(c));let s,o=new Promise(c=>{s=c}),a=r.startViewTransition(()=>(s(),r_(i)));a.ready.catch(c=>{});let{onViewTransitionCreated:l}=n;return l&&xn(i,()=>l({transition:a,from:e,to:t})),o}function r_(i){return new Promise(e=>{ra({read:()=>setTimeout(e)},{injector:i})})}var Rp=new lt(""),xu=(()=>{class i{currentNavigation=ct(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=null;events=new vn;transitionAbortWithErrorSubject=new vn;configLoader=ne(Cp);environmentInjector=ne(Ir);destroyRef=ne(eo);urlSerializer=ne(Ro);rootContexts=ne(Io);location=ne(Qi);inputBindingEnabled=ne(Ta,{optional:!0})!==null;titleStrategy=ne(Ep);options=ne(Ra,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=ne(vu);createViewTransition=ne(_u,{optional:!0});navigationErrorHandler=ne(Rp,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>Fe(void 0);rootComponentType=null;destroyed=!1;constructor(){let t=r=>this.events.next(new Kc(r)),n=r=>this.events.next(new Qc(r));this.configLoader.onLoadEndListener=n,this.configLoader.onLoadStartListener=t,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(t){let n=++this.navigationId;qt(()=>{this.transitions?.next(yt(pe({},t),{extractedUrl:this.urlHandlingStrategy.extract(t.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,abortController:new AbortController,id:n}))})}setupNavigations(t){return this.transitions=new _n(null),this.transitions.pipe(Xi(n=>n!==null),un(n=>{let r=!1;return Fe(n).pipe(un(s=>{if(this.navigationId>n.id)return this.cancelNavigationTransition(n,"",sn.SupersededByNewNavigation),Kn;this.currentTransition=n,this.currentNavigation.set({id:s.id,initialUrl:s.rawUrl,extractedUrl:s.extractedUrl,targetBrowserUrl:typeof s.extras.browserUrl=="string"?this.urlSerializer.parse(s.extras.browserUrl):s.extras.browserUrl,trigger:s.source,extras:s.extras,previousNavigation:this.lastSuccessfulNavigation?yt(pe({},this.lastSuccessfulNavigation),{previousNavigation:null}):null,abort:()=>s.abortController.abort()});let o=!t.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),a=s.extras.onSameUrlNavigation??t.onSameUrlNavigation;if(!o&&a!=="reload")return this.events.next(new ri(s.id,this.urlSerializer.serialize(s.rawUrl),"",Mo.IgnoredSameUrlNavigation)),s.resolve(!1),Kn;if(this.urlHandlingStrategy.shouldProcessUrl(s.rawUrl))return Fe(s).pipe(un(l=>(this.events.next(new nr(l.id,this.urlSerializer.serialize(l.extractedUrl),l.source,l.restoredState)),l.id!==this.navigationId?Kn:Promise.resolve(l))),Yv(this.environmentInjector,this.configLoader,this.rootComponentType,t.config,this.urlSerializer,this.paramsInheritanceStrategy),Wt(l=>{n.targetSnapshot=l.targetSnapshot,n.urlAfterRedirects=l.urlAfterRedirects,this.currentNavigation.update(u=>(u.finalUrl=l.urlAfterRedirects,u));let c=new Ma(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot);this.events.next(c)}));if(o&&this.urlHandlingStrategy.shouldProcessUrl(s.currentRawUrl)){let{id:l,extractedUrl:c,source:u,restoredState:d,extras:f}=s,m=new nr(l,this.urlSerializer.serialize(c),u,d);this.events.next(m);let g=hp(this.rootComponentType).snapshot;return this.currentTransition=n=yt(pe({},s),{targetSnapshot:g,urlAfterRedirects:c,extras:yt(pe({},f),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(y=>(y.finalUrl=c,y)),Fe(n)}else return this.events.next(new ri(s.id,this.urlSerializer.serialize(s.extractedUrl),"",Mo.IgnoredByUrlHandlingStrategy)),s.resolve(!1),Kn}),Wt(s=>{let o=new qc(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(o)}),at(s=>(this.currentTransition=n=yt(pe({},s),{guards:pv(s.targetSnapshot,s.currentSnapshot,this.rootContexts)}),n)),Ev(this.environmentInjector,s=>this.events.next(s)),Wt(s=>{if(n.guardsResult=s.guardsResult,s.guardsResult&&typeof s.guardsResult!="boolean")throw Ca(this.urlSerializer,s.guardsResult);let o=new Yc(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot,!!s.guardsResult);this.events.next(o)}),Xi(s=>s.guardsResult?!0:(this.cancelNavigationTransition(s,"",sn.GuardRejected),!1)),Hc(s=>{if(s.guards.canActivateChecks.length!==0)return Fe(s).pipe(Wt(o=>{let a=new Zc(o.id,this.urlSerializer.serialize(o.extractedUrl),this.urlSerializer.serialize(o.urlAfterRedirects),o.targetSnapshot);this.events.next(a)}),un(o=>{let a=!1;return Fe(o).pipe(Zv(this.paramsInheritanceStrategy,this.environmentInjector),Wt({next:()=>a=!0,complete:()=>{a||this.cancelNavigationTransition(o,"",sn.NoDataFromResolver)}}))}),Wt(o=>{let a=new Jc(o.id,this.urlSerializer.serialize(o.extractedUrl),this.urlSerializer.serialize(o.urlAfterRedirects),o.targetSnapshot);this.events.next(a)}))}),Hc(s=>{let o=a=>{let l=[];if(a.routeConfig?.loadComponent){let c=qr(a)??this.environmentInjector;l.push(this.configLoader.loadComponent(c,a.routeConfig).pipe(Wt(u=>{a.component=u}),at(()=>{})))}for(let c of a.children)l.push(...o(c));return l};return ac(o(s.targetSnapshot.root)).pipe(lc(null),Rr(1))}),Hc(()=>this.afterPreactivation()),un(()=>{let{currentSnapshot:s,targetSnapshot:o}=n,a=this.createViewTransition?.(this.environmentInjector,s.root,o.root);return a?rn(a).pipe(at(()=>n)):Fe(n)}),at(s=>{let o=cv(t.routeReuseStrategy,s.targetSnapshot,s.currentRouterState);return this.currentTransition=n=yt(pe({},s),{targetRouterState:o}),this.currentNavigation.update(a=>(a.targetRouterState=o,a)),n}),Wt(()=>{this.events.next(new wo)}),fv(this.rootContexts,t.routeReuseStrategy,s=>this.events.next(s),this.inputBindingEnabled),Rr(1),uc(new Xh(s=>{let o=n.abortController.signal,a=()=>s.next();return o.addEventListener("abort",a),()=>o.removeEventListener("abort",a)}).pipe(Xi(()=>!r&&!n.targetRouterState),Wt(()=>{this.cancelNavigationTransition(n,n.abortController.signal.reason+"",sn.Aborted)}))),Wt({next:s=>{r=!0,this.lastSuccessfulNavigation=qt(this.currentNavigation),this.events.next(new ii(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects))),this.titleStrategy?.updateTitle(s.targetRouterState.snapshot),s.resolve(!0)},complete:()=>{r=!0}}),uc(this.transitionAbortWithErrorSubject.pipe(Wt(s=>{throw s}))),ta(()=>{r||this.cancelNavigationTransition(n,"",sn.SupersededByNewNavigation),this.currentTransition?.id===n.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),Dr(s=>{if(this.destroyed)return n.resolve(!1),Kn;if(r=!0,yp(s))this.events.next(new ti(n.id,this.urlSerializer.serialize(n.extractedUrl),s.message,s.cancellationCode)),hv(s)?this.events.next(new Xr(s.url,s.navigationBehaviorOptions)):n.resolve(!1);else{let o=new So(n.id,this.urlSerializer.serialize(n.extractedUrl),s,n.targetSnapshot??void 0);try{let a=xn(this.environmentInjector,()=>this.navigationErrorHandler?.(o));if(a instanceof Co){let{message:l,cancellationCode:c}=Ca(this.urlSerializer,a);this.events.next(new ti(n.id,this.urlSerializer.serialize(n.extractedUrl),l,c)),this.events.next(new Xr(a.redirectTo,a.navigationBehaviorOptions))}else throw this.events.next(o),s}catch(a){this.options.resolveNavigationPromiseOnError?n.resolve(!1):n.reject(a)}}return Kn}))}))}cancelNavigationTransition(t,n,r){let s=new ti(t.id,this.urlSerializer.serialize(t.extractedUrl),n,r);this.events.next(s),t.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let t=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),n=qt(this.currentNavigation),r=n?.targetBrowserUrl??n?.extractedUrl;return t.toString()!==r?.toString()&&!n?.extras.skipLocationChange}static \u0275fac=function(n){return new(n||i)};static \u0275prov=Re({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function s_(i){return i!==Vr}var o_=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275prov=Re({token:i,factory:()=>ne(a_),providedIn:"root"})}return i})(),pu=class{shouldDetach(e){return!1}store(e,t){}shouldAttach(e){return!1}retrieve(e){return null}shouldReuseRoute(e,t){return e.routeConfig===t.routeConfig}},a_=(()=>{class i extends pu{static \u0275fac=(()=>{let t;return function(r){return(t||(t=bi(i)))(r||i)}})();static \u0275prov=Re({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Ip=(()=>{class i{urlSerializer=ne(Ro);options=ne(Ra,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=ne(Qi);urlHandlingStrategy=ne(vu);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new ni;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:t,initialUrl:n,targetBrowserUrl:r}){let s=t!==void 0?this.urlHandlingStrategy.merge(t,n):n,o=r??s;return o instanceof ni?this.urlSerializer.serialize(o):o}commitTransition({targetRouterState:t,finalUrl:n,initialUrl:r}){n&&t?(this.currentUrlTree=n,this.rawUrlTree=this.urlHandlingStrategy.merge(n,r),this.routerState=t):this.rawUrlTree=r}routerState=hp(null);getRouterState(){return this.routerState}stateMemento=this.createStateMemento();updateStateMemento(){this.stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}resetInternalState({finalUrl:t}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,t??this.rawUrlTree)}static \u0275fac=function(n){return new(n||i)};static \u0275prov=Re({token:i,factory:()=>ne(l_),providedIn:"root"})}return i})(),l_=(()=>{class i extends Ip{currentPageId=0;lastSuccessfulId=-1;restoredState(){return this.location.getState()}get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(t){return this.location.subscribe(n=>{n.type==="popstate"&&setTimeout(()=>{t(n.url,n.state,"popstate")})})}handleRouterEvent(t,n){t instanceof nr?this.updateStateMemento():t instanceof ri?this.commitTransition(n):t instanceof Ma?this.urlUpdateStrategy==="eager"&&(n.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(n),n)):t instanceof wo?(this.commitTransition(n),this.urlUpdateStrategy==="deferred"&&!n.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(n),n)):t instanceof ti&&t.code!==sn.SupersededByNewNavigation&&t.code!==sn.Redirect?this.restoreHistory(n):t instanceof So?this.restoreHistory(n,!0):t instanceof ii&&(this.lastSuccessfulId=t.id,this.currentPageId=this.browserPageId)}setBrowserUrl(t,{extras:n,id:r}){let{replaceUrl:s,state:o}=n;if(this.location.isCurrentPathEqualTo(t)||s){let a=this.browserPageId,l=pe(pe({},o),this.generateNgRouterState(r,a));this.location.replaceState(t,"",l)}else{let a=pe(pe({},o),this.generateNgRouterState(r,this.browserPageId+1));this.location.go(t,"",a)}}restoreHistory(t,n=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,s=this.currentPageId-r;s!==0?this.location.historyGo(s):this.getCurrentUrlTree()===t.finalUrl&&s===0&&(this.resetInternalState(t),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(n&&this.resetInternalState(t),this.resetUrlToCurrentUrlTree())}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(t,n){return this.canceledNavigationResolution==="computed"?{navigationId:t,\u0275routerPageId:n}:{navigationId:t}}static \u0275fac=(()=>{let t;return function(r){return(t||(t=bi(i)))(r||i)}})();static \u0275prov=Re({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function Pp(i,e){i.events.pipe(Xi(t=>t instanceof ii||t instanceof ti||t instanceof So||t instanceof ri),at(t=>t instanceof ii||t instanceof ri?0:(t instanceof ti?t.code===sn.Redirect||t.code===sn.SupersededByNewNavigation:!1)?2:1),Xi(t=>t!==2),Rr(1)).subscribe(()=>{e()})}var c_={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},u_={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"},Mu=(()=>{class i{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=ne(ff);stateManager=ne(Ip);options=ne(Ra,{optional:!0})||{};pendingTasks=ne(sf);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=ne(xu);urlSerializer=ne(Ro);location=ne(Qi);urlHandlingStrategy=ne(vu);injector=ne(Ir);_events=new vn;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=ne(o_);onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=ne(Ia,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!ne(Ta,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:t=>{this.console.warn(t)}}),this.subscribeToNavigationEvents()}eventsSubscription=new Wh;subscribeToNavigationEvents(){let t=this.navigationTransitions.events.subscribe(n=>{try{let r=this.navigationTransitions.currentTransition,s=qt(this.navigationTransitions.currentNavigation);if(r!==null&&s!==null){if(this.stateManager.handleRouterEvent(n,s),n instanceof ti&&n.code!==sn.Redirect&&n.code!==sn.SupersededByNewNavigation)this.navigated=!0;else if(n instanceof ii)this.navigated=!0;else if(n instanceof Xr){let o=n.navigationBehaviorOptions,a=this.urlHandlingStrategy.merge(n.url,r.currentRawUrl),l=pe({browserUrl:r.extras.browserUrl,info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy==="eager"||s_(r.source)},o);this.scheduleNavigation(a,Vr,null,l,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}rv(n)&&this._events.next(n)}catch(r){this.navigationTransitions.transitionAbortWithErrorSubject.next(r)}});this.eventsSubscription.add(t)}resetRootComponentType(t){this.routerState.root.component=t,this.navigationTransitions.rootComponentType=t}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),Vr,this.stateManager.restoredState())}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((t,n,r)=>{this.navigateToSyncWithBrowser(t,r,n)})}navigateToSyncWithBrowser(t,n,r){let s={replaceUrl:!0},o=r?.navigationId?r:null;if(r){let l=pe({},r);delete l.navigationId,delete l.\u0275routerPageId,Object.keys(l).length!==0&&(s.state=l)}let a=this.parseUrl(t);this.scheduleNavigation(a,n,o,s).catch(l=>{this.disposed||this.injector.get(ia)(l)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return qt(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(t){this.config=t.map(gu),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription&&(this.nonRouterCurrentEntryChangeSubscription.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0),this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(t,n={}){let{relativeTo:r,queryParams:s,fragment:o,queryParamsHandling:a,preserveFragment:l}=n,c=l?this.currentUrlTree.fragment:o,u=null;switch(a??this.options.defaultQueryParamsHandling){case"merge":u=pe(pe({},this.currentUrlTree.queryParams),s);break;case"preserve":u=this.currentUrlTree.queryParams;break;default:u=s||null}u!==null&&(u=this.removeEmptyProps(u));let d;try{let f=r?r.snapshot:this.routerState.snapshot.root;d=lp(f)}catch{(typeof t[0]!="string"||t[0][0]!=="/")&&(t=[]),d=this.currentUrlTree.root}return cp(d,t,u,c??null)}navigateByUrl(t,n={skipLocationChange:!1}){let r=$r(t)?t:this.parseUrl(t),s=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(s,Vr,null,n)}navigate(t,n={skipLocationChange:!1}){return d_(t),this.navigateByUrl(this.createUrlTree(t,n),n)}serializeUrl(t){return this.urlSerializer.serialize(t)}parseUrl(t){try{return this.urlSerializer.parse(t)}catch{return this.console.warn(Ks(4018,!1)),this.urlSerializer.parse("/")}}isActive(t,n){let r;if(n===!0?r=pe({},c_):n===!1?r=pe({},u_):r=n,$r(t))return $f(this.currentUrlTree,t,r);let s=this.parseUrl(t);return $f(this.currentUrlTree,s,r)}removeEmptyProps(t){return Object.entries(t).reduce((n,[r,s])=>(s!=null&&(n[r]=s),n),{})}scheduleNavigation(t,n,r,s,o){if(this.disposed)return Promise.resolve(!1);let a,l,c;o?(a=o.resolve,l=o.reject,c=o.promise):c=new Promise((d,f)=>{a=d,l=f});let u=this.pendingTasks.add();return Pp(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(u))}),this.navigationTransitions.handleNavigationRequest({source:n,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:t,extras:s,resolve:a,reject:l,promise:c,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),c.catch(d=>Promise.reject(d))}static \u0275fac=function(n){return new(n||i)};static \u0275prov=Re({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function d_(i){for(let e=0;e<i.length;e++)if(i[e]==null)throw new Ye(4008,!1)}var Op=new lt(""),h_=(()=>{class i{urlSerializer;transitions;viewportScroller;zone;options;routerEventsSubscription;scrollEventsSubscription;lastId=0;lastSource=Vr;restoredId=0;store={};constructor(t,n,r,s,o={}){this.urlSerializer=t,this.transitions=n,this.viewportScroller=r,this.zone=s,this.options=o,o.scrollPositionRestoration||="disabled",o.anchorScrolling||="disabled"}init(){this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.setHistoryScrollRestoration("manual"),this.routerEventsSubscription=this.createScrollEvents(),this.scrollEventsSubscription=this.consumeScrollEvents()}createScrollEvents(){return this.transitions.events.subscribe(t=>{t instanceof nr?(this.store[this.lastId]=this.viewportScroller.getScrollPosition(),this.lastSource=t.navigationTrigger,this.restoredId=t.restoredState?t.restoredState.navigationId:0):t instanceof ii?(this.lastId=t.id,this.scheduleScrollEvent(t,this.urlSerializer.parse(t.urlAfterRedirects).fragment)):t instanceof ri&&t.code===Mo.IgnoredSameUrlNavigation&&(this.lastSource=void 0,this.restoredId=0,this.scheduleScrollEvent(t,this.urlSerializer.parse(t.url).fragment))})}consumeScrollEvents(){return this.transitions.events.subscribe(t=>{if(!(t instanceof bo))return;let n={behavior:"instant"};t.position?this.options.scrollPositionRestoration==="top"?this.viewportScroller.scrollToPosition([0,0],n):this.options.scrollPositionRestoration==="enabled"&&this.viewportScroller.scrollToPosition(t.position,n):t.anchor&&this.options.anchorScrolling==="enabled"?this.viewportScroller.scrollToAnchor(t.anchor):this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.scrollToPosition([0,0])})}scheduleScrollEvent(t,n){this.zone.runOutsideAngular(()=>zn(this,null,function*(){yield new Promise(r=>{setTimeout(r),typeof requestAnimationFrame<"u"&&requestAnimationFrame(r)}),this.zone.run(()=>{this.transitions.events.next(new bo(t,this.lastSource==="popstate"?this.store[this.restoredId]:null,n))})}))}ngOnDestroy(){this.routerEventsSubscription?.unsubscribe(),this.scrollEventsSubscription?.unsubscribe()}static \u0275fac=function(n){oa()};static \u0275prov=Re({token:i,factory:i.\u0275fac})}return i})();function Su(i,...e){return na([{provide:Ia,multi:!0,useValue:i},[],{provide:ir,useFactory:f_,deps:[Mu]},{provide:pf,multi:!0,useFactory:p_},e.map(t=>t.\u0275providers)])}function f_(i){return i.routerState.root}function Fp(i,e){return{\u0275kind:i,\u0275providers:e}}function bu(i={}){return Fp(4,[{provide:Op,useFactory:()=>{let t=ne(Nf),n=ne(wi),r=ne(xu),s=ne(Ro);return new h_(s,r,t,n,i)}}])}function p_(){let i=ne(Yi);return e=>{let t=i.get(aa);if(e!==t.components[0])return;let n=i.get(Mu),r=i.get(m_);i.get(g_)===1&&n.initialNavigation(),i.get(v_,null,{optional:!0})?.setUpPreloading(),i.get(Op,null,{optional:!0})?.init(),n.resetRootComponentType(t.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var m_=new lt("",{factory:()=>new vn}),g_=new lt("",{providedIn:"root",factory:()=>1});var v_=new lt("");function wu(i){to("NgRouterViewTransitions");let e=[{provide:_u,useValue:Dp},{provide:yu,useValue:pe({skipNextTransition:!!i?.skipInitialTransition},i)}];return Fp(9,e)}var y_="@",x_=(()=>{class i{doc;delegate;zone;animationType;moduleImpl;_rendererFactoryPromise=null;scheduler=null;injector=ne(Yi);loadingSchedulerFn=ne(M_,{optional:!0});_engine;constructor(t,n,r,s,o){this.doc=t,this.delegate=n,this.zone=r,this.animationType=s,this.moduleImpl=o}ngOnDestroy(){this._engine?.flush()}loadImpl(){let t=()=>this.moduleImpl??import("./chunk-B4XOLFEM.js").then(r=>r),n;return this.loadingSchedulerFn?n=this.loadingSchedulerFn(t):n=t(),n.catch(r=>{throw new Ye(5300,!1)}).then(({\u0275createEngine:r,\u0275AnimationRendererFactory:s})=>{this._engine=r(this.animationType,this.doc);let o=new s(this.delegate,this._engine,this.zone);return this.delegate=o,o})}createRenderer(t,n){let r=this.delegate.createRenderer(t,n);if(r.\u0275type===0)return r;typeof r.throwOnSyntheticProps=="boolean"&&(r.throwOnSyntheticProps=!1);let s=new Eu(r);return n?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(o=>{let a=o.createRenderer(t,n);s.use(a),this.scheduler??=this.injector.get(rf,null,{optional:!0}),this.scheduler?.notify(10)}).catch(o=>{s.use(r)}),s}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}componentReplaced(t){this._engine?.flush(),this.delegate.componentReplaced?.(t)}static \u0275fac=function(n){oa()};static \u0275prov=Re({token:i,factory:i.\u0275fac})}return i})(),Eu=class{delegate;replay=[];\u0275type=1;constructor(e){this.delegate=e}use(e){if(this.delegate=e,this.replay!==null){for(let t of this.replay)t(e);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(e,t){return this.delegate.createElement(e,t)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}get destroyNode(){return this.delegate.destroyNode}appendChild(e,t){this.delegate.appendChild(e,t)}insertBefore(e,t,n,r){this.delegate.insertBefore(e,t,n,r)}removeChild(e,t,n,r){this.delegate.removeChild(e,t,n,r)}selectRootElement(e,t){return this.delegate.selectRootElement(e,t)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,t,n,r){this.delegate.setAttribute(e,t,n,r)}removeAttribute(e,t,n){this.delegate.removeAttribute(e,t,n)}addClass(e,t){this.delegate.addClass(e,t)}removeClass(e,t){this.delegate.removeClass(e,t)}setStyle(e,t,n,r){this.delegate.setStyle(e,t,n,r)}removeStyle(e,t,n){this.delegate.removeStyle(e,t,n)}setProperty(e,t,n){this.shouldReplay(t)&&this.replay.push(r=>r.setProperty(e,t,n)),this.delegate.setProperty(e,t,n)}setValue(e,t){this.delegate.setValue(e,t)}listen(e,t,n,r){return this.shouldReplay(t)&&this.replay.push(s=>s.listen(e,t,n,r)),this.delegate.listen(e,t,n,r)}shouldReplay(e){return this.replay!==null&&e.startsWith(y_)}},M_=new lt("");function Lp(i="animations"){return to("NgAsyncAnimations"),na([{provide:sa,useFactory:(e,t,n)=>new x_(e,t,n,i),deps:[It,po,wi]},{provide:lf,useValue:i==="noop"?"NoopAnimations":"BrowserAnimations"}])}var Np=[{path:"**",redirectTo:""}];var Up={providers:[Sf({eventCoalescing:!0}),Su(Np,bu({scrollPositionRestoration:"top",anchorScrolling:"enabled"}),wu()),Lp()]};var rr=class rr{constructor(){this.platformId=ne(Ft);this.progress=ct(0);this.isScrolled=ct(!1);this.activeSection=ct("hero");this.showBtt=ct(!1);this.sections=["hero","about","skills","exp","packages","certs","writing","contact"]}init(){if(!Bt(this.platformId))return;let e=()=>{let t=window.scrollY,n=document.documentElement.scrollHeight-window.innerHeight;this.progress.set(n>0?Math.min(t/n,1):0),this.isScrolled.set(t>80),this.showBtt.set(t>500);for(let r=this.sections.length-1;r>=0;r--){let s=document.getElementById(this.sections[r]);if(s&&t>=s.offsetTop-220){this.activeSection.set(this.sections[r]);break}}};window.addEventListener("scroll",e,{passive:!0})}scrollTo(e){Bt(this.platformId)&&document.getElementById(e)?.scrollIntoView({behavior:"smooth"})}toTop(){Bt(this.platformId)&&window.scrollTo({top:0,behavior:"smooth"})}};rr.\u0275fac=function(t){return new(t||rr)},rr.\u0275prov=Re({token:rr,factory:rr.\u0275fac,providedIn:"root"});var Ri=rr;var sr=class sr{constructor(){this.platformId=ne(Ft);this.theme=ct(this.getInitial());wf(()=>{if(Bt(this.platformId)){document.documentElement.setAttribute("data-theme",this.theme());try{localStorage.setItem("pf-theme",this.theme())}catch{}}})}toggle(){this.theme.update(e=>e==="light"?"dark":"light")}getInitial(){if(!Bt(this.platformId))return"light";try{let e=localStorage.getItem("pf-theme");if(e)return e}catch{}return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}};sr.\u0275fac=function(t){return new(t||sr)},sr.\u0275prov=Re({token:sr,factory:sr.\u0275fac,providedIn:"root"});var Zr=sr;function S_(i,e){if(i&1&&(ft(0,"span"),O(1),Mt()),i&2){let t=e.$implicit,n=e.$index;ro("animation-delay",n*55+60+"ms"),$(),$e(t)}}function b_(i,e){if(i&1&&(ft(0,"div",1)(1,"div",2),dt(2,S_,2,3,"span",3,la),Mt(),ft(4,"div",4),Qn(5,"div",5),Mt(),ft(6,"div",6),O(7),Mt()()),i&2){let t=Lt();kt("out",t.hiding()),$(2),ht(t.letters),$(3),ro("width",t.pct()+"%"),$(2),Sn("",t.pct(),"%")}}var Jr=class Jr{constructor(){this.platformId=ne(Ft);this.letters="Soufiane".split("");this.pct=ct(0);this.visible=ct(!0);this.hiding=ct(!1)}ngAfterViewInit(){Bt(this.platformId)&&(this.interval=setInterval(()=>{this.pct.update(e=>{let t=Math.min(e+Math.random()*18,99);return Math.floor(t)}),this.pct()>=99&&clearInterval(this.interval)},80),document.readyState==="complete"?setTimeout(()=>this.done(),300):window.addEventListener("load",()=>this.done(),{once:!0}))}done(){this.pct.set(100),clearInterval(this.interval),setTimeout(()=>this.hiding.set(!0),450),setTimeout(()=>this.visible.set(!1),1150)}ngOnDestroy(){clearInterval(this.interval)}};Jr.\u0275fac=function(t){return new(t||Jr)},Jr.\u0275cmp=rt({type:Jr,selectors:[["app-loader"]],decls:1,vars:1,consts:[[1,"loader",3,"out"],[1,"loader"],["aria-hidden","true",1,"loader__name"],[3,"animation-delay"],[1,"loader__bar"],[1,"loader__fill"],[1,"loader__pct"]],template:function(t,n){t&1&&Gn(0,b_,8,5,"div",0),t&2&&Wn(n.visible()?0:-1)},styles:[".loader[_ngcontent-%COMP%]{position:fixed;inset:0;z-index:1000;background:var(--bg);display:flex;align-items:center;justify-content:center;flex-direction:column;gap:1.8rem;transition:opacity .65s var(--ease),visibility .65s}.loader.out[_ngcontent-%COMP%]{opacity:0;visibility:hidden;pointer-events:none}.loader__name[_ngcontent-%COMP%]{font-family:var(--f1);font-size:clamp(3.5rem,11vw,8rem);font-weight:300;letter-spacing:-.03em;overflow:hidden;line-height:1}.loader__name[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-block;opacity:0;transform:translateY(115%);animation:_ngcontent-%COMP%_sup .9s var(--ease) forwards}@keyframes _ngcontent-%COMP%_sup{to{opacity:1;transform:none}}.loader__bar[_ngcontent-%COMP%]{width:200px;height:1px;background:var(--line);overflow:hidden}.loader__fill[_ngcontent-%COMP%]{height:100%;background:var(--acc);transition:width .1s linear}.loader__pct[_ngcontent-%COMP%]{font-family:var(--f3);font-size:.6rem;color:var(--ink3);letter-spacing:.22em}"],changeDetection:0});var Pa=Jr;var Kr=class Kr{constructor(){this.platformId=ne(Ft);this.mx=0;this.my=0;this.rx=0;this.ry=0;this.animId=0;this.cleanups=[]}ngAfterViewInit(){if(!Bt(this.platformId))return;this.dot=document.querySelector(".cur__dot"),this.ring=document.querySelector(".cur__ring");let e=o=>{this.mx=o.clientX,this.my=o.clientY,this.dot.style.left=this.mx+"px",this.dot.style.top=this.my+"px"};document.addEventListener("mousemove",e),this.cleanups.push(()=>document.removeEventListener("mousemove",e));let t=()=>document.body.classList.add("cur-big"),n=()=>document.body.classList.remove("cur-big"),r=()=>{document.querySelectorAll("a, button, .hover-el").forEach(o=>{o.addEventListener("mouseenter",t),o.addEventListener("mouseleave",n)})};r(),[500,1500].forEach(o=>setTimeout(r,o));let s=()=>{this.rx+=(this.mx-this.rx)*.1,this.ry+=(this.my-this.ry)*.1,this.ring.style.left=this.rx+"px",this.ring.style.top=this.ry+"px",this.animId=requestAnimationFrame(s)};s()}ngOnDestroy(){cancelAnimationFrame(this.animId),this.cleanups.forEach(e=>e())}};Kr.\u0275fac=function(t){return new(t||Kr)},Kr.\u0275cmp=rt({type:Kr,selectors:[["app-cursor"]],decls:4,vars:0,consts:[["cur",""],[1,"cur"],[1,"cur__dot"],[1,"cur__ring"]],template:function(t,n){t&1&&(ft(0,"div",1,0),Qn(2,"div",2)(3,"div",3),Mt())},styles:[".cur[_ngcontent-%COMP%]{position:fixed;top:0;left:0;z-index:9999;pointer-events:none}.cur__dot[_ngcontent-%COMP%]{width:9px;height:9px;background:var(--acc);border-radius:50%;position:absolute;transform:translate(-50%,-50%);transition:transform .1s}.cur__ring[_ngcontent-%COMP%]{width:34px;height:34px;border:1.5px solid var(--acc);border-radius:50%;position:absolute;transform:translate(-50%,-50%);opacity:.4;transition:width .32s var(--ease),height .32s var(--ease),opacity .32s}body.cur-big[_nghost-%COMP%]   .cur__ring[_ngcontent-%COMP%], body.cur-big   [_nghost-%COMP%]   .cur__ring[_ngcontent-%COMP%]{width:56px;height:56px;opacity:.18}body.cur-big[_nghost-%COMP%]   .cur__dot[_ngcontent-%COMP%], body.cur-big   [_nghost-%COMP%]   .cur__dot[_ngcontent-%COMP%]{transform:translate(-50%,-50%) scale(.35)}"],changeDetection:0});var Oa=Kr;var kp=(i,e)=>e.id;function w_(i,e){if(i&1){let t=Qt();ft(0,"a",12),ei("click",function(){Dt(t);let r=Lt();return Rt(r.closeMM())}),O(1),Mt()}if(i&2){let t=e.$implicit;vc("href","#"+t.id,$t),$(),$e(t.label)}}function E_(i,e){if(i&1){let t=Qt();ft(0,"li")(1,"a",12),ei("click",function(){let r=Dt(t).$implicit,s=Lt();return Rt(s.go(r.id))}),O(2),Mt()()}if(i&2){let t=e.$implicit,n=Lt();$(),kt("act",n.scroll.activeSection()===t.id),vc("href","#"+t.id,$t),$(),$e(t.label)}}function C_(i,e){i&1&&(Qs(),ft(0,"svg",9),Qn(1,"circle",13)(2,"line",14)(3,"line",15)(4,"line",16)(5,"line",17)(6,"line",18)(7,"line",19)(8,"line",20)(9,"line",21),Mt())}function A_(i,e){i&1&&(Qs(),ft(0,"svg",9),Qn(1,"path",22),Mt())}var Qr=class Qr{constructor(){this.scroll=ne(Ri);this.theme=ne(Zr);this.isDark=Rn(()=>this.theme.theme()==="dark");this.menuOpen=ct(!1);this.links=[{id:"about",label:"About"},{id:"skills",label:"Skills"},{id:"exp",label:"Work"},{id:"packages",label:"Projects"},{id:"certs",label:"Certs"},{id:"writing",label:"Writing"},{id:"contact",label:"Contact"}]}go(e){this.closeMM(),this.scroll.scrollTo(e)}toggleMenu(){this.menuOpen.update(e=>!e)}closeMM(){this.menuOpen.set(!1)}};Qr.\u0275fac=function(t){return new(t||Qr)},Qr.\u0275cmp=rt({type:Qr,selectors:[["app-navbar"]],decls:23,vars:9,consts:[["role","dialog","aria-label","Navigation menu",1,"m-menu"],[3,"href"],["role","navigation","aria-label","Main navigation"],[1,"n-logo","hover-el",3,"click"],["src","assets/profile/soufiane.jpg","alt","Soufiane Asrih","width","34","height","34",1,"n-photo"],[1,"n-title"],["role","list",1,"n-links"],[1,"n-right"],[1,"t-btn","hover-el",3,"click"],["width","15","height","15","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2"],["aria-label","Toggle menu",1,"hbg",3,"click"],[1,"n-hire","hover-el",3,"click"],[3,"click","href"],["cx","12","cy","12","r","5"],["x1","12","y1","1","x2","12","y2","3"],["x1","12","y1","21","x2","12","y2","23"],["x1","4.22","y1","4.22","x2","5.64","y2","5.64"],["x1","18.36","y1","18.36","x2","19.78","y2","19.78"],["x1","1","y1","12","x2","3","y2","12"],["x1","21","y1","12","x2","23","y2","12"],["x1","4.22","y1","19.78","x2","5.64","y2","18.36"],["x1","18.36","y1","5.64","x2","19.78","y2","4.22"],["d","M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"]],template:function(t,n){t&1&&(ft(0,"div",0),dt(1,w_,2,2,"a",1,kp),Mt(),ft(3,"nav",2)(4,"a",3),ei("click",function(){return n.go("hero")}),Qn(5,"img",4),ft(6,"span",5),O(7,"Soufiane "),ft(8,"em"),O(9,"Asrih"),Mt()()(),ft(10,"ul",6),dt(11,E_,3,4,"li",null,kp),Mt(),ft(13,"div",7)(14,"button",8),ei("click",function(){return n.theme.toggle()}),Gn(15,C_,10,0,":svg:svg",9)(16,A_,2,0,":svg:svg",9),Mt(),ft(17,"button",10),ei("click",function(){return n.toggleMenu()}),Qn(18,"span")(19,"span")(20,"span"),Mt(),ft(21,"a",11),ei("click",function(){return n.go("contact")}),O(22,"Hire me"),Mt()()()),t&2&&(kt("op",n.menuOpen()),$(),ht(n.links),$(2),kt("stuck",n.scroll.isScrolled()),$(8),ht(n.links),$(3),Ci("aria-label",n.isDark()?"Light mode":"Dark mode"),$(),Wn(n.isDark()?15:16),$(2),kt("op",n.menuOpen()),Ci("aria-expanded",n.menuOpen()))},styles:['nav[_ngcontent-%COMP%]{position:fixed;top:0;left:0;right:0;z-index:100;display:flex;align-items:center;justify-content:space-between;padding:2rem 5vw;transition:all .4s var(--ease)}nav.stuck[_ngcontent-%COMP%]{background:var(--surf);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);padding:1rem 5vw;border-bottom:1px solid var(--line);box-shadow:0 1px 24px #0000000d}.n-logo[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.7rem;text-decoration:none;cursor:none}.n-photo[_ngcontent-%COMP%]{width:34px;height:34px;border-radius:50%;object-fit:contain;border:2px solid var(--acc);flex-shrink:0}.n-title[_ngcontent-%COMP%]{font-family:var(--f1);font-size:1.25rem;font-weight:600;color:var(--ink);letter-spacing:-.02em}.n-title[_ngcontent-%COMP%]   em[_ngcontent-%COMP%]{font-style:italic;color:var(--acc)}.n-links[_ngcontent-%COMP%]{display:flex;gap:2.5rem;list-style:none}.n-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-family:var(--f3);font-size:.67rem;color:var(--ink3);text-decoration:none;letter-spacing:.13em;text-transform:uppercase;transition:color .25s;position:relative;padding-bottom:2px;cursor:none}.n-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after{content:"";position:absolute;bottom:0;left:0;width:0;height:1px;background:var(--acc);transition:width .3s var(--ease)}.n-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .n-links[_ngcontent-%COMP%]   a.act[_ngcontent-%COMP%]{color:var(--acc)}.n-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:after, .n-links[_ngcontent-%COMP%]   a.act[_ngcontent-%COMP%]:after{width:100%}.n-right[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.9rem}.t-btn[_ngcontent-%COMP%]{background:none;border:1px solid var(--line);padding:.4rem;color:var(--ink3);border-radius:2px;display:flex;align-items:center;justify-content:center;transition:all .25s}.t-btn[_ngcontent-%COMP%]:hover{color:var(--acc);border-color:var(--acc)}.n-hire[_ngcontent-%COMP%]{font-family:var(--f3);font-size:.67rem;letter-spacing:.12em;text-transform:uppercase;padding:.52rem 1.15rem;background:var(--ink);color:var(--bg);text-decoration:none;border-radius:2px;transition:background .25s,transform .2s;border:1.5px solid var(--ink);cursor:none}.n-hire[_ngcontent-%COMP%]:hover{background:var(--acc);border-color:var(--acc);transform:translateY(-1px)}.hbg[_ngcontent-%COMP%]{display:none;flex-direction:column;gap:5px;background:none;border:none;padding:4px}.hbg[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:22px;height:1.5px;background:var(--ink);border-radius:1px;display:block;transition:all .3s var(--ease)}.hbg.op[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(1){transform:rotate(45deg) translate(5px,5px)}.hbg.op[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2){opacity:0;transform:scaleX(0)}.hbg.op[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3){transform:rotate(-45deg) translate(5px,-5px)}.m-menu[_ngcontent-%COMP%]{position:fixed;inset:0;z-index:90;background:var(--bg);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2.5rem;transform:translateY(-100%);transition:transform .5s var(--ease);pointer-events:none}.m-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-family:var(--f1);font-size:2.8rem;font-weight:300;color:var(--ink);text-decoration:none;letter-spacing:-.02em;transition:color .25s}.m-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:var(--acc)}.m-menu.op[_ngcontent-%COMP%]{transform:none;pointer-events:all}@media (max-width: 900px){nav[_ngcontent-%COMP%]{padding:1.3rem 5vw}.n-links[_ngcontent-%COMP%]{display:none}.hbg[_ngcontent-%COMP%]{display:flex}}'],changeDetection:0});var Fa=Qr;var T_=0,Bp=1,D_=2;var Hm=1,R_=2,di=3,Vi=0,ln=1,fi=2,ki=0,gs=1,Vp=2,zp=3,Hp=4,I_=5,fr=100,P_=101,O_=102,F_=103,L_=104,N_=200,U_=201,k_=202,B_=203,nd=204,id=205,V_=206,z_=207,H_=208,G_=209,W_=210,$_=211,X_=212,j_=213,q_=214,rd=0,sd=1,od=2,xs=3,ad=4,ld=5,cd=6,ud=7,Gm=0,Y_=1,Z_=2,Bi=0,J_=1,K_=2,Q_=3,ey=4,ty=5,ny=6,iy=7;var Gp=300,Ms=301,Ss=302,dd=303,hd=304,Dl=306,fd=1e3,gr=1001,pd=1002,Un=1003,ry=1004;var La=1005;var qn=1006,Cu=1007;var vr=1008;var _i=1009,Wm=1010,$m=1011,zo=1012,mh=1013,_r=1014,pi=1015,Wo=1016,gh=1017,vh=1018,bs=1020,Xm=35902,jm=1021,qm=1022,Ln=1023,Ym=1024,Zm=1025,vs=1026,ws=1027,Jm=1028,_h=1029,Km=1030,yh=1031;var xh=1033,sl=33776,ol=33777,al=33778,ll=33779,md=35840,gd=35841,vd=35842,_d=35843,yd=36196,xd=37492,Md=37496,Sd=37808,bd=37809,wd=37810,Ed=37811,Cd=37812,Ad=37813,Td=37814,Dd=37815,Rd=37816,Id=37817,Pd=37818,Od=37819,Fd=37820,Ld=37821,cl=36492,Nd=36494,Ud=36495,Qm=36283,kd=36284,Bd=36285,Vd=36286;var ul=2300,zd=2301,Au=2302,Wp=2400,$p=2401,Xp=2402;var sy=3200,oy=3201;var ay=0,ly=1,Ui="",Cn="srgb",Rs="srgb-linear",Rl="linear",pt="srgb";var es=7680;var jp=519,cy=512,uy=513,dy=514,eg=515,hy=516,fy=517,py=518,my=519,qp=35044;var Yp="300 es",mi=2e3,dl=2001,zi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let r=this._listeners[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},Yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Tu=Math.PI/180,Hd=180/Math.PI;function $o(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Yt[i&255]+Yt[i>>8&255]+Yt[i>>16&255]+Yt[i>>24&255]+"-"+Yt[e&255]+Yt[e>>8&255]+"-"+Yt[e>>16&15|64]+Yt[e>>24&255]+"-"+Yt[t&63|128]+Yt[t>>8&255]+"-"+Yt[t>>16&255]+Yt[t>>24&255]+Yt[n&255]+Yt[n>>8&255]+Yt[n>>16&255]+Yt[n>>24&255]).toLowerCase()}function an(i,e,t){return Math.max(e,Math.min(t,i))}function gy(i,e){return(i%e+e)%e}function Du(i,e,t){return(1-t)*i+t*e}function Oo(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function on(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var gt=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(an(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ve=class i{constructor(e,t,n,r,s,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c)}set(e,t,n,r,s,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],d=n[7],f=n[2],m=n[5],g=n[8],y=r[0],p=r[3],h=r[6],E=r[1],w=r[4],M=r[7],B=r[2],I=r[5],C=r[8];return s[0]=o*y+a*E+l*B,s[3]=o*p+a*w+l*I,s[6]=o*h+a*M+l*C,s[1]=c*y+u*E+d*B,s[4]=c*p+u*w+d*I,s[7]=c*h+u*M+d*C,s[2]=f*y+m*E+g*B,s[5]=f*p+m*w+g*I,s[8]=f*h+m*M+g*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+r*s*c-r*o*l}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,f=a*l-u*s,m=c*s-o*l,g=t*d+n*f+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return e[0]=d*y,e[1]=(r*c-u*n)*y,e[2]=(a*n-r*o)*y,e[3]=f*y,e[4]=(u*t-r*l)*y,e[5]=(r*s-a*t)*y,e[6]=m*y,e[7]=(n*l-c*t)*y,e[8]=(o*t-n*s)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ru.makeScale(e,t)),this}rotate(e){return this.premultiply(Ru.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ru.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ru=new Ve;function tg(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function hl(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function vy(){let i=hl("canvas");return i.style.display="block",i}var Zp={};function ko(i){i in Zp||(Zp[i]=!0,console.warn(i))}function _y(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function yy(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function xy(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var Ke={enabled:!0,workingColorSpace:Rs,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===pt&&(i.r=gi(i.r),i.g=gi(i.g),i.b=gi(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===pt&&(i.r=_s(i.r),i.g=_s(i.g),i.b=_s(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ui?Rl:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function gi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function _s(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Jp=[.64,.33,.3,.6,.15,.06],Kp=[.2126,.7152,.0722],Qp=[.3127,.329],em=new Ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),tm=new Ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ke.define({[Rs]:{primaries:Jp,whitePoint:Qp,transfer:Rl,toXYZ:em,fromXYZ:tm,luminanceCoefficients:Kp,workingColorSpaceConfig:{unpackColorSpace:Cn},outputColorSpaceConfig:{drawingBufferColorSpace:Cn}},[Cn]:{primaries:Jp,whitePoint:Qp,transfer:pt,toXYZ:em,fromXYZ:tm,luminanceCoefficients:Kp,outputColorSpaceConfig:{drawingBufferColorSpace:Cn}}});var ts,Gd=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ts===void 0&&(ts=hl("canvas")),ts.width=e.width,ts.height=e.height;let n=ts.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ts}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=hl("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=gi(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(gi(t[n]/255)*255):t[n]=gi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},My=0,fl=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:My++}),this.uuid=$o(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Iu(r[o].image)):s.push(Iu(r[o]))}else s=Iu(r);n.url=s}return t||(e.images[this.uuid]=n),n}};function Iu(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Gd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Sy=0,br=(()=>{class i extends zi{constructor(t=i.DEFAULT_IMAGE,n=i.DEFAULT_MAPPING,r=gr,s=gr,o=qn,a=vr,l=Ln,c=_i,u=i.DEFAULT_ANISOTROPY,d=Ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Sy++}),this.uuid=$o(),this.name="",this.source=new fl(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=s,this.magFilter=o,this.minFilter=a,this.anisotropy=u,this.format=l,this.internalFormat=null,this.type=c,this.offset=new gt(0,0),this.repeat=new gt(1,1),this.center=new gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Gp)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case fd:t.x=t.x-Math.floor(t.x);break;case gr:t.x=t.x<0?0:1;break;case pd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case fd:t.y=t.y-Math.floor(t.y);break;case gr:t.y=t.y<0?0:1;break;case pd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}return i.DEFAULT_IMAGE=null,i.DEFAULT_MAPPING=Gp,i.DEFAULT_ANISOTROPY=1,i})(),Ot=class i{constructor(e=0,t=0,n=0,r=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s,l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],m=l[5],g=l[9],y=l[2],p=l[6],h=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-y)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+y)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let w=(c+1)/2,M=(m+1)/2,B=(h+1)/2,I=(u+f)/4,C=(d+y)/4,F=(g+p)/4;return w>M&&w>B?w<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(w),r=I/n,s=C/n):M>B?M<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),n=I/r,s=F/r):B<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(B),n=C/s,r=F/s),this.set(n,r,s,t),this}let E=Math.sqrt((p-g)*(p-g)+(d-y)*(d-y)+(f-u)*(f-u));return Math.abs(E)<.001&&(E=1),this.x=(p-g)/E,this.y=(d-y)/E,this.z=(f-u)/E,this.w=Math.acos((c+m+h-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Wd=class extends zi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ot(0,0,e,t),this.scissorTest=!1,this.viewport=new Ot(0,0,e,t);let r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let s=new br(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new fl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},yi=class extends Wd{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},pl=class extends br{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Un,this.minFilter=Un,this.wrapR=gr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var $d=class extends br{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Un,this.minFilter=Un,this.wrapR=gr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Hi=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],u=n[r+2],d=n[r+3],f=s[o+0],m=s[o+1],g=s[o+2],y=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=m,e[t+2]=g,e[t+3]=y;return}if(d!==y||l!==f||c!==m||u!==g){let p=1-a,h=l*f+c*m+u*g+d*y,E=h>=0?1:-1,w=1-h*h;if(w>Number.EPSILON){let B=Math.sqrt(w),I=Math.atan2(B,h*E);p=Math.sin(p*I)/B,a=Math.sin(a*I)/B}let M=a*E;if(l=l*p+f*M,c=c*p+m*M,u=u*p+g*M,d=d*p+y*M,p===1-a){let B=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=B,c*=B,u*=B,d*=B}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,r,s,o){let a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],d=s[o],f=s[o+1],m=s[o+2],g=s[o+3];return e[t]=a*g+u*d+l*m-c*f,e[t+1]=l*g+u*f+c*d-a*m,e[t+2]=c*g+u*m+a*f-l*d,e[t+3]=u*g-a*d-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),d=a(s/2),f=l(n/2),m=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=f*u*d+c*m*g,this._y=c*m*d-f*u*g,this._z=c*u*g+f*m*d,this._w=c*u*d-f*m*g;break;case"YXZ":this._x=f*u*d+c*m*g,this._y=c*m*d-f*u*g,this._z=c*u*g-f*m*d,this._w=c*u*d+f*m*g;break;case"ZXY":this._x=f*u*d-c*m*g,this._y=c*m*d+f*u*g,this._z=c*u*g+f*m*d,this._w=c*u*d-f*m*g;break;case"ZYX":this._x=f*u*d-c*m*g,this._y=c*m*d+f*u*g,this._z=c*u*g-f*m*d,this._w=c*u*d+f*m*g;break;case"YZX":this._x=f*u*d+c*m*g,this._y=c*m*d+f*u*g,this._z=c*u*g-f*m*d,this._w=c*u*d-f*m*g;break;case"XZY":this._x=f*u*d-c*m*g,this._y=c*m*d-f*u*g,this._z=c*u*g+f*m*d,this._w=c*u*d+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],f=n+a+d;if(f>0){let m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(n>a&&n>d){let m=2*Math.sqrt(1+n-a-d);this._w=(u-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>d){let m=2*Math.sqrt(1+a-n-d);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+u)/m}else{let m=2*Math.sqrt(1+d-n-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(an(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-r*a,this._w=o*u-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,r=this._y,s=this._z,o=this._w,a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;let l=1-a*a;if(l<=Number.EPSILON){let m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*d+this._w*f,this._x=n*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},z=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(nm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(nm.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*n),u=2*(a*t-s*r),d=2*(s*n-o*t);return this.x=t+l*c+o*d-a*u,this.y=n+l*u+a*c-s*d,this.z=r+l*d+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Pu.copy(this).projectOnVector(e),this.sub(Pu)}reflect(e){return this.sub(Pu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(an(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Pu=new z,nm=new Hi,yr=class{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Pn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Pn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Pn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Pn):Pn.fromBufferAttribute(s,o),Pn.applyMatrix4(e.matrixWorld),this.expandByPoint(Pn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Na.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Na.copy(n.boundingBox)),Na.applyMatrix4(e.matrixWorld),this.union(Na)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Pn),Pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Fo),Ua.subVectors(this.max,Fo),ns.subVectors(e.a,Fo),is.subVectors(e.b,Fo),rs.subVectors(e.c,Fo),Ii.subVectors(is,ns),Pi.subVectors(rs,is),or.subVectors(ns,rs);let t=[0,-Ii.z,Ii.y,0,-Pi.z,Pi.y,0,-or.z,or.y,Ii.z,0,-Ii.x,Pi.z,0,-Pi.x,or.z,0,-or.x,-Ii.y,Ii.x,0,-Pi.y,Pi.x,0,-or.y,or.x,0];return!Ou(t,ns,is,rs,Ua)||(t=[1,0,0,0,1,0,0,0,1],!Ou(t,ns,is,rs,Ua))?!1:(ka.crossVectors(Ii,Pi),t=[ka.x,ka.y,ka.z],Ou(t,ns,is,rs,Ua))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Pn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Pn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(oi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},oi=[new z,new z,new z,new z,new z,new z,new z,new z],Pn=new z,Na=new yr,ns=new z,is=new z,rs=new z,Ii=new z,Pi=new z,or=new z,Fo=new z,Ua=new z,ka=new z,ar=new z;function Ou(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){ar.fromArray(i,s);let a=r.x*Math.abs(ar.x)+r.y*Math.abs(ar.y)+r.z*Math.abs(ar.z),l=e.dot(ar),c=t.dot(ar),u=n.dot(ar);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var by=new yr,Lo=new z,Fu=new z,Es=class{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):by.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Lo.subVectors(e,this.center);let t=Lo.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Lo,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Lo.copy(e.center).add(Fu)),this.expandByPoint(Lo.copy(e.center).sub(Fu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},ai=new z,Lu=new z,Ba=new z,Oi=new z,Nu=new z,Va=new z,Uu=new z,ml=class{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ai)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ai.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ai.copy(this.origin).addScaledVector(this.direction,t),ai.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Lu.copy(e).add(t).multiplyScalar(.5),Ba.copy(t).sub(e).normalize(),Oi.copy(this.origin).sub(Lu);let s=e.distanceTo(t)*.5,o=-this.direction.dot(Ba),a=Oi.dot(this.direction),l=-Oi.dot(Ba),c=Oi.lengthSq(),u=Math.abs(1-o*o),d,f,m,g;if(u>0)if(d=o*l-a,f=o*a-l,g=s*u,d>=0)if(f>=-g)if(f<=g){let y=1/u;d*=y,f*=y,m=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=s,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),m=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+c):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),m=-d*d+f*(f+2*l)+c);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Lu).addScaledVector(Ba,f),m}intersectSphere(e,t){ai.subVectors(e.center,this.origin);let n=ai.dot(this.direction),r=ai.dot(ai)-n*n,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,ai)!==null}intersectTriangle(e,t,n,r,s){Nu.subVectors(t,e),Va.subVectors(n,e),Uu.crossVectors(Nu,Va);let o=this.direction.dot(Uu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Oi.subVectors(this.origin,e);let l=a*this.direction.dot(Va.crossVectors(Oi,Va));if(l<0)return null;let c=a*this.direction.dot(Nu.cross(Oi));if(c<0||l+c>o)return null;let u=-a*Oi.dot(Uu);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ut=class i{constructor(e,t,n,r,s,o,a,l,c,u,d,f,m,g,y,p){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c,u,d,f,m,g,y,p)}set(e,t,n,r,s,o,a,l,c,u,d,f,m,g,y,p){let h=this.elements;return h[0]=e,h[4]=t,h[8]=n,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=d,h[14]=f,h[3]=m,h[7]=g,h[11]=y,h[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,r=1/ss.setFromMatrixColumn(e,0).length(),s=1/ss.setFromMatrixColumn(e,1).length(),o=1/ss.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){let f=o*u,m=o*d,g=a*u,y=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=m+g*c,t[5]=f-y*c,t[9]=-a*l,t[2]=y-f*c,t[6]=g+m*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*u,m=l*d,g=c*u,y=c*d;t[0]=f+y*a,t[4]=g*a-m,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=m*a-g,t[6]=y+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*u,m=l*d,g=c*u,y=c*d;t[0]=f-y*a,t[4]=-o*d,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*u,t[9]=y-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*u,m=o*d,g=a*u,y=a*d;t[0]=l*u,t[4]=g*c-m,t[8]=f*c+y,t[1]=l*d,t[5]=y*c+f,t[9]=m*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,m=o*c,g=a*l,y=a*c;t[0]=l*u,t[4]=y-f*d,t[8]=g*d+m,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=m*d+g,t[10]=f-y*d}else if(e.order==="XZY"){let f=o*l,m=o*c,g=a*l,y=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=f*d+y,t[5]=o*u,t[9]=m*d-g,t[2]=g*d-m,t[6]=a*u,t[10]=y*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(wy,e,Ey)}lookAt(e,t,n){let r=this.elements;return fn.subVectors(e,t),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),Fi.crossVectors(n,fn),Fi.lengthSq()===0&&(Math.abs(n.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),Fi.crossVectors(n,fn)),Fi.normalize(),za.crossVectors(fn,Fi),r[0]=Fi.x,r[4]=za.x,r[8]=fn.x,r[1]=Fi.y,r[5]=za.y,r[9]=fn.y,r[2]=Fi.z,r[6]=za.z,r[10]=fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],d=n[5],f=n[9],m=n[13],g=n[2],y=n[6],p=n[10],h=n[14],E=n[3],w=n[7],M=n[11],B=n[15],I=r[0],C=r[4],F=r[8],S=r[12],x=r[1],A=r[5],j=r[9],H=r[13],K=r[2],Q=r[6],Y=r[10],te=r[14],W=r[3],le=r[7],me=r[11],Ce=r[15];return s[0]=o*I+a*x+l*K+c*W,s[4]=o*C+a*A+l*Q+c*le,s[8]=o*F+a*j+l*Y+c*me,s[12]=o*S+a*H+l*te+c*Ce,s[1]=u*I+d*x+f*K+m*W,s[5]=u*C+d*A+f*Q+m*le,s[9]=u*F+d*j+f*Y+m*me,s[13]=u*S+d*H+f*te+m*Ce,s[2]=g*I+y*x+p*K+h*W,s[6]=g*C+y*A+p*Q+h*le,s[10]=g*F+y*j+p*Y+h*me,s[14]=g*S+y*H+p*te+h*Ce,s[3]=E*I+w*x+M*K+B*W,s[7]=E*C+w*A+M*Q+B*le,s[11]=E*F+w*j+M*Y+B*me,s[15]=E*S+w*H+M*te+B*Ce,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],m=e[14],g=e[3],y=e[7],p=e[11],h=e[15];return g*(+s*l*d-r*c*d-s*a*f+n*c*f+r*a*m-n*l*m)+y*(+t*l*m-t*c*f+s*o*f-r*o*m+r*c*u-s*l*u)+p*(+t*c*d-t*a*m-s*o*d+n*o*m+s*a*u-n*c*u)+h*(-r*a*u-t*l*d+t*a*f+r*o*d-n*o*f+n*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],m=e[11],g=e[12],y=e[13],p=e[14],h=e[15],E=d*p*c-y*f*c+y*l*m-a*p*m-d*l*h+a*f*h,w=g*f*c-u*p*c-g*l*m+o*p*m+u*l*h-o*f*h,M=u*y*c-g*d*c+g*a*m-o*y*m-u*a*h+o*d*h,B=g*d*l-u*y*l-g*a*f+o*y*f+u*a*p-o*d*p,I=t*E+n*w+r*M+s*B;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/I;return e[0]=E*C,e[1]=(y*f*s-d*p*s-y*r*m+n*p*m+d*r*h-n*f*h)*C,e[2]=(a*p*s-y*l*s+y*r*c-n*p*c-a*r*h+n*l*h)*C,e[3]=(d*l*s-a*f*s-d*r*c+n*f*c+a*r*m-n*l*m)*C,e[4]=w*C,e[5]=(u*p*s-g*f*s+g*r*m-t*p*m-u*r*h+t*f*h)*C,e[6]=(g*l*s-o*p*s-g*r*c+t*p*c+o*r*h-t*l*h)*C,e[7]=(o*f*s-u*l*s+u*r*c-t*f*c-o*r*m+t*l*m)*C,e[8]=M*C,e[9]=(g*d*s-u*y*s-g*n*m+t*y*m+u*n*h-t*d*h)*C,e[10]=(o*y*s-g*a*s+g*n*c-t*y*c-o*n*h+t*a*h)*C,e[11]=(u*a*s-o*d*s-u*n*c+t*d*c+o*n*m-t*a*m)*C,e[12]=B*C,e[13]=(u*y*r-g*d*r+g*n*f-t*y*f-u*n*p+t*d*p)*C,e[14]=(g*a*r-o*y*r-g*n*l+t*y*l+o*n*p-t*a*p)*C,e[15]=(o*d*r-u*a*r+u*n*l-t*d*l-o*n*f+t*a*f)*C,this}scale(e){let t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,d=a+a,f=s*c,m=s*u,g=s*d,y=o*u,p=o*d,h=a*d,E=l*c,w=l*u,M=l*d,B=n.x,I=n.y,C=n.z;return r[0]=(1-(y+h))*B,r[1]=(m+M)*B,r[2]=(g-w)*B,r[3]=0,r[4]=(m-M)*I,r[5]=(1-(f+h))*I,r[6]=(p+E)*I,r[7]=0,r[8]=(g+w)*C,r[9]=(p-E)*C,r[10]=(1-(f+y))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements,s=ss.set(r[0],r[1],r[2]).length(),o=ss.set(r[4],r[5],r[6]).length(),a=ss.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],On.copy(this);let c=1/s,u=1/o,d=1/a;return On.elements[0]*=c,On.elements[1]*=c,On.elements[2]*=c,On.elements[4]*=u,On.elements[5]*=u,On.elements[6]*=u,On.elements[8]*=d,On.elements[9]*=d,On.elements[10]*=d,t.setFromRotationMatrix(On),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=mi){let l=this.elements,c=2*s/(t-e),u=2*s/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),m,g;if(a===mi)m=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===dl)m=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=mi){let l=this.elements,c=1/(t-e),u=1/(n-r),d=1/(o-s),f=(t+e)*c,m=(n+r)*u,g,y;if(a===mi)g=(o+s)*d,y=-2*d;else if(a===dl)g=s*d,y=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=y,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},ss=new z,On=new Ut,wy=new z(0,0,0),Ey=new z(1,1,1),Fi=new z,za=new z,fn=new z,im=new Ut,rm=new Hi,Cs=(()=>{class i{constructor(t=0,n=0,r=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,r,s=this._order){return this._x=t,this._y=n,this._z=r,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,r=!0){let s=t.elements,o=s[0],a=s[4],l=s[8],c=s[1],u=s[5],d=s[9],f=s[2],m=s[6],g=s[10];switch(n){case"XYZ":this._y=Math.asin(an(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,g),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(m,u),this._z=0);break;case"YXZ":this._x=Math.asin(-an(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(l,g),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-f,o),this._z=0);break;case"ZXY":this._x=Math.asin(an(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-f,g),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(c,o));break;case"ZYX":this._y=Math.asin(-an(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(m,g),this._z=Math.atan2(c,o)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(an(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-f,o)):(this._x=0,this._y=Math.atan2(l,g));break;case"XZY":this._z=Math.asin(-an(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(m,u),this._y=Math.atan2(l,o)):(this._x=Math.atan2(-d,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,r){return im.makeRotationFromQuaternion(t),this.setFromRotationMatrix(im,n,r)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return rm.setFromEuler(this),this.setFromQuaternion(rm,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}return i.DEFAULT_ORDER="XYZ",i})(),gl=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Cy=0,sm=new z,os=new Hi,li=new Ut,Ha=new z,No=new z,Ay=new z,Ty=new Hi,om=new z(1,0,0),am=new z(0,1,0),lm=new z(0,0,1),cm={type:"added"},Dy={type:"removed"},as={type:"childadded",child:null},ku={type:"childremoved",child:null},wr=(()=>{class i extends zi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Cy++}),this.uuid=$o(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new z,n=new Cs,r=new Hi,s=new z(1,1,1);function o(){r.setFromEuler(n,!1)}function a(){n.setFromQuaternion(r,void 0,!1)}n._onChange(o),r._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ut},normalMatrix:{value:new Ve}}),this.matrix=new Ut,this.matrixWorld=new Ut,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return os.setFromAxisAngle(t,n),this.quaternion.multiply(os),this}rotateOnWorldAxis(t,n){return os.setFromAxisAngle(t,n),this.quaternion.premultiply(os),this}rotateX(t){return this.rotateOnAxis(om,t)}rotateY(t){return this.rotateOnAxis(am,t)}rotateZ(t){return this.rotateOnAxis(lm,t)}translateOnAxis(t,n){return sm.copy(t).applyQuaternion(this.quaternion),this.position.add(sm.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(om,t)}translateY(t){return this.translateOnAxis(am,t)}translateZ(t){return this.translateOnAxis(lm,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(li.copy(this.matrixWorld).invert())}lookAt(t,n,r){t.isVector3?Ha.copy(t):Ha.set(t,n,r);let s=this.parent;this.updateWorldMatrix(!0,!1),No.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?li.lookAt(No,Ha,this.up):li.lookAt(Ha,No,this.up),this.quaternion.setFromRotationMatrix(li),s&&(li.extractRotation(s.matrixWorld),os.setFromRotationMatrix(li),this.quaternion.premultiply(os.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(cm),as.child=t,this.dispatchEvent(as),as.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(Dy),ku.child=t,this.dispatchEvent(ku),ku.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),li.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),li.multiply(t.parent.matrixWorld)),t.applyMatrix4(li),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(cm),as.child=t,this.dispatchEvent(as),as.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let r=0,s=this.children.length;r<s;r++){let a=this.children[r].getObjectByProperty(t,n);if(a!==void 0)return a}}getObjectsByProperty(t,n,r=[]){this[t]===n&&r.push(this);let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].getObjectsByProperty(t,n,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(No,t,Ay),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(No,Ty,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);let n=this.children;for(let r=0,s=n.length;r<s;r++)n[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let n=this.children;for(let r=0,s=n.length;r<s;r++)n[r].traverseVisible(t)}traverseAncestors(t){let n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let n=this.children;for(let r=0,s=n.length;r<s;r++)n[r].updateMatrixWorld(t)}updateWorldMatrix(t,n){let r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){let n=t===void 0||typeof t=="string",r={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(l=>({boxInitialized:l.boxInitialized,boxMin:l.box.min.toArray(),boxMax:l.box.max.toArray(),sphereInitialized:l.sphereInitialized,sphereRadius:l.sphere.radius,sphereCenter:l.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);let l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){let c=l.shapes;if(Array.isArray(c))for(let u=0,d=c.length;u<d;u++){let f=c[u];o(t.shapes,f)}else o(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let l=[];for(let c=0,u=this.material.length;c<u;c++)l.push(o(t.materials,this.material[c]));s.material=l}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let l=0;l<this.children.length;l++)s.children.push(this.children[l].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let l=0;l<this.animations.length;l++){let c=this.animations[l];s.animations.push(o(t.animations,c))}}if(n){let l=a(t.geometries),c=a(t.materials),u=a(t.textures),d=a(t.images),f=a(t.shapes),m=a(t.skeletons),g=a(t.animations),y=a(t.nodes);l.length>0&&(r.geometries=l),c.length>0&&(r.materials=c),u.length>0&&(r.textures=u),d.length>0&&(r.images=d),f.length>0&&(r.shapes=f),m.length>0&&(r.skeletons=m),g.length>0&&(r.animations=g),y.length>0&&(r.nodes=y)}return r.object=s,r;function a(l){let c=[];for(let u in l){let d=l[u];delete d.metadata,c.push(d)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let r=0;r<t.children.length;r++){let s=t.children[r];this.add(s.clone())}return this}}return i.DEFAULT_UP=new z(0,1,0),i.DEFAULT_MATRIX_AUTO_UPDATE=!0,i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0,i})(),Fn=new z,ci=new z,Bu=new z,ui=new z,ls=new z,cs=new z,um=new z,Vu=new z,zu=new z,Hu=new z,Gu=new Ot,Wu=new Ot,$u=new Ot,pr=class i{constructor(e=new z,t=new z,n=new z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Fn.subVectors(e,t),r.cross(Fn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Fn.subVectors(r,t),ci.subVectors(n,t),Bu.subVectors(e,t);let o=Fn.dot(Fn),a=Fn.dot(ci),l=Fn.dot(Bu),c=ci.dot(ci),u=ci.dot(Bu),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;let f=1/d,m=(c*l-a*u)*f,g=(o*u-a*l)*f;return s.set(1-m-g,g,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,ui)===null?!1:ui.x>=0&&ui.y>=0&&ui.x+ui.y<=1}static getInterpolation(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,ui)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ui.x),l.addScaledVector(o,ui.y),l.addScaledVector(a,ui.z),l)}static getInterpolatedAttribute(e,t,n,r,s,o){return Gu.setScalar(0),Wu.setScalar(0),$u.setScalar(0),Gu.fromBufferAttribute(e,t),Wu.fromBufferAttribute(e,n),$u.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Gu,s.x),o.addScaledVector(Wu,s.y),o.addScaledVector($u,s.z),o}static isFrontFacing(e,t,n,r){return Fn.subVectors(n,t),ci.subVectors(e,t),Fn.cross(ci).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Fn.subVectors(this.c,this.b),ci.subVectors(this.a,this.b),Fn.cross(ci).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return i.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,s=this.c,o,a;ls.subVectors(r,n),cs.subVectors(s,n),Vu.subVectors(e,n);let l=ls.dot(Vu),c=cs.dot(Vu);if(l<=0&&c<=0)return t.copy(n);zu.subVectors(e,r);let u=ls.dot(zu),d=cs.dot(zu);if(u>=0&&d<=u)return t.copy(r);let f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(ls,o);Hu.subVectors(e,s);let m=ls.dot(Hu),g=cs.dot(Hu);if(g>=0&&m<=g)return t.copy(s);let y=m*c-l*g;if(y<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(cs,a);let p=u*g-m*d;if(p<=0&&d-u>=0&&m-g>=0)return um.subVectors(s,r),a=(d-u)/(d-u+(m-g)),t.copy(r).addScaledVector(um,a);let h=1/(p+y+f);return o=y*h,a=f*h,t.copy(n).addScaledVector(ls,o).addScaledVector(cs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ng={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Li={h:0,s:0,l:0},Ga={h:0,s:0,l:0};function Xu(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var tt=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Cn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ke.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Ke.workingColorSpace){if(e=gy(e,1),t=an(t,0,1),n=an(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Xu(o,s,e+1/3),this.g=Xu(o,s,e),this.b=Xu(o,s,e-1/3)}return Ke.toWorkingColorSpace(this,r),this}setStyle(e,t=Cn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Cn){let n=ng[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=gi(e.r),this.g=gi(e.g),this.b=gi(e.b),this}copyLinearToSRGB(e){return this.r=_s(e.r),this.g=_s(e.g),this.b=_s(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Cn){return Ke.fromWorkingColorSpace(Zt.copy(this),e),Math.round(an(Zt.r*255,0,255))*65536+Math.round(an(Zt.g*255,0,255))*256+Math.round(an(Zt.b*255,0,255))}getHexString(e=Cn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.fromWorkingColorSpace(Zt.copy(this),t);let n=Zt.r,r=Zt.g,s=Zt.b,o=Math.max(n,r,s),a=Math.min(n,r,s),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case n:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-n)/d+2;break;case s:l=(n-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ke.workingColorSpace){return Ke.fromWorkingColorSpace(Zt.copy(this),t),e.r=Zt.r,e.g=Zt.g,e.b=Zt.b,e}getStyle(e=Cn){Ke.fromWorkingColorSpace(Zt.copy(this),e);let t=Zt.r,n=Zt.g,r=Zt.b;return e!==Cn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Li),this.setHSL(Li.h+e,Li.s+t,Li.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Li),e.getHSL(Ga);let n=Du(Li.h,Ga.h,t),r=Du(Li.s,Ga.s,t),s=Du(Li.l,Ga.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Zt=new tt;tt.NAMES=ng;var Ry=0,xr=class extends zi{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ry++}),this.uuid=$o(),this.name="",this.blending=gs,this.side=Vi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=nd,this.blendDst=id,this.blendEquation=fr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=xs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=es,this.stencilZFail=es,this.stencilZPass=es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==gs&&(n.blending=this.blending),this.side!==Vi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==nd&&(n.blendSrc=this.blendSrc),this.blendDst!==id&&(n.blendDst=this.blendDst),this.blendEquation!==fr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==xs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==jp&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==es&&(n.stencilFail=this.stencilFail),this.stencilZFail!==es&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==es&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},vl=class extends xr{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cs,this.combine=Gm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Nt=new z,Wa=new gt,Jt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=qp,this.updateRanges=[],this.gpuType=pi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Wa.fromBufferAttribute(this,t),Wa.applyMatrix3(e),this.setXY(t,Wa.x,Wa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix3(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix4(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyNormalMatrix(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.transformDirection(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Oo(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Oo(t,this.array)),t}setX(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Oo(t,this.array)),t}setY(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Oo(t,this.array)),t}setZ(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Oo(t,this.array)),t}setW(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=on(t,this.array),n=on(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=on(t,this.array),n=on(n,this.array),r=on(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=on(t,this.array),n=on(n,this.array),r=on(r,this.array),s=on(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==qp&&(e.usage=this.usage),e}};var _l=class extends Jt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var yl=class extends Jt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var vi=class extends Jt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Iy=0,En=new Ut,ju=new wr,us=new z,pn=new yr,Uo=new yr,Gt=new z,kn=class i extends zi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Iy++}),this.uuid=$o(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(tg(e)?yl:_l)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Ve().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return En.makeRotationFromQuaternion(e),this.applyMatrix4(En),this}rotateX(e){return En.makeRotationX(e),this.applyMatrix4(En),this}rotateY(e){return En.makeRotationY(e),this.applyMatrix4(En),this}rotateZ(e){return En.makeRotationZ(e),this.applyMatrix4(En),this}translate(e,t,n){return En.makeTranslation(e,t,n),this.applyMatrix4(En),this}scale(e,t,n){return En.makeScale(e,t,n),this.applyMatrix4(En),this}lookAt(e){return ju.lookAt(e),ju.updateMatrix(),this.applyMatrix4(ju.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(us).negate(),this.translate(us.x,us.y,us.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let r=0,s=e.length;r<s;r++){let o=e[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new vi(n,3))}else{for(let n=0,r=t.count;n<r;n++){let s=e[n];t.setXYZ(n,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let s=t[n];pn.setFromBufferAttribute(s),this.morphTargetsRelative?(Gt.addVectors(this.boundingBox.min,pn.min),this.boundingBox.expandByPoint(Gt),Gt.addVectors(this.boundingBox.max,pn.max),this.boundingBox.expandByPoint(Gt)):(this.boundingBox.expandByPoint(pn.min),this.boundingBox.expandByPoint(pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Es);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){let n=this.boundingSphere.center;if(pn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];Uo.setFromBufferAttribute(a),this.morphTargetsRelative?(Gt.addVectors(pn.min,Uo.min),pn.expandByPoint(Gt),Gt.addVectors(pn.max,Uo.max),pn.expandByPoint(Gt)):(pn.expandByPoint(Uo.min),pn.expandByPoint(Uo.max))}pn.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)Gt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Gt));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Gt.fromBufferAttribute(a,c),l&&(us.fromBufferAttribute(e,c),Gt.add(us)),r=Math.max(r,n.distanceToSquared(Gt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Jt(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let F=0;F<n.count;F++)a[F]=new z,l[F]=new z;let c=new z,u=new z,d=new z,f=new gt,m=new gt,g=new gt,y=new z,p=new z;function h(F,S,x){c.fromBufferAttribute(n,F),u.fromBufferAttribute(n,S),d.fromBufferAttribute(n,x),f.fromBufferAttribute(s,F),m.fromBufferAttribute(s,S),g.fromBufferAttribute(s,x),u.sub(c),d.sub(c),m.sub(f),g.sub(f);let A=1/(m.x*g.y-g.x*m.y);isFinite(A)&&(y.copy(u).multiplyScalar(g.y).addScaledVector(d,-m.y).multiplyScalar(A),p.copy(d).multiplyScalar(m.x).addScaledVector(u,-g.x).multiplyScalar(A),a[F].add(y),a[S].add(y),a[x].add(y),l[F].add(p),l[S].add(p),l[x].add(p))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let F=0,S=E.length;F<S;++F){let x=E[F],A=x.start,j=x.count;for(let H=A,K=A+j;H<K;H+=3)h(e.getX(H+0),e.getX(H+1),e.getX(H+2))}let w=new z,M=new z,B=new z,I=new z;function C(F){B.fromBufferAttribute(r,F),I.copy(B);let S=a[F];w.copy(S),w.sub(B.multiplyScalar(B.dot(S))).normalize(),M.crossVectors(I,S);let A=M.dot(l[F])<0?-1:1;o.setXYZW(F,w.x,w.y,w.z,A)}for(let F=0,S=E.length;F<S;++F){let x=E[F],A=x.start,j=x.count;for(let H=A,K=A+j;H<K;H+=3)C(e.getX(H+0)),C(e.getX(H+1)),C(e.getX(H+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Jt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);let r=new z,s=new z,o=new z,a=new z,l=new z,c=new z,u=new z,d=new z;if(e)for(let f=0,m=e.count;f<m;f+=3){let g=e.getX(f+0),y=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,y),o.fromBufferAttribute(t,p),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,p),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Gt.fromBufferAttribute(e,t),Gt.normalize(),e.setXYZ(t,Gt.x,Gt.y,Gt.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u),m=0,g=0;for(let y=0,p=l.length;y<p;y++){a.isInterleavedBufferAttribute?m=l[y]*a.data.stride+a.offset:m=l[y]*u;for(let h=0;h<u;h++)f[g++]=c[m++]}return new Jt(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,r=this.attributes;for(let a in r){let l=r[a],c=e(l,n);t.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){let f=c[u],m=e(f,n);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){let m=c[d];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let r=e.attributes;for(let c in r){let u=r[c];this.setAttribute(c,u.clone(t))}let s=e.morphAttributes;for(let c in s){let u=[],d=s[c];for(let f=0,m=d.length;f<m;f++)u.push(d[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},dm=new Ut,lr=new ml,$a=new Es,hm=new z,Xa=new z,ja=new z,qa=new z,qu=new z,Ya=new z,fm=new z,Za=new z,Nn=class extends wr{constructor(e=new kn,t=new vl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){Ya.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let u=a[l],d=s[l];u!==0&&(qu.fromBufferAttribute(d,e),o?Ya.addScaledVector(qu,u):Ya.addScaledVector(qu.sub(t),u))}t.add(Ya)}return t}raycast(e,t){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),$a.copy(n.boundingSphere),$a.applyMatrix4(s),lr.copy(e.ray).recast(e.near),!($a.containsPoint(lr.origin)===!1&&(lr.intersectSphere($a,hm)===null||lr.origin.distanceToSquared(hm)>(e.far-e.near)**2))&&(dm.copy(s).invert(),lr.copy(e.ray).applyMatrix4(dm),!(n.boundingBox!==null&&lr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,lr)))}_computeIntersections(e,t,n){let r,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=f.length;g<y;g++){let p=f[g],h=o[p.materialIndex],E=Math.max(p.start,m.start),w=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let M=E,B=w;M<B;M+=3){let I=a.getX(M),C=a.getX(M+1),F=a.getX(M+2);r=Ja(this,h,e,n,c,u,d,I,C,F),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{let g=Math.max(0,m.start),y=Math.min(a.count,m.start+m.count);for(let p=g,h=y;p<h;p+=3){let E=a.getX(p),w=a.getX(p+1),M=a.getX(p+2);r=Ja(this,o,e,n,c,u,d,E,w,M),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,y=f.length;g<y;g++){let p=f[g],h=o[p.materialIndex],E=Math.max(p.start,m.start),w=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let M=E,B=w;M<B;M+=3){let I=M,C=M+1,F=M+2;r=Ja(this,h,e,n,c,u,d,I,C,F),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{let g=Math.max(0,m.start),y=Math.min(l.count,m.start+m.count);for(let p=g,h=y;p<h;p+=3){let E=p,w=p+1,M=p+2;r=Ja(this,o,e,n,c,u,d,E,w,M),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}};function Py(i,e,t,n,r,s,o,a){let l;if(e.side===ln?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===Vi,a),l===null)return null;Za.copy(a),Za.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Za);return c<t.near||c>t.far?null:{distance:c,point:Za.clone(),object:i}}function Ja(i,e,t,n,r,s,o,a,l,c){i.getVertexPosition(a,Xa),i.getVertexPosition(l,ja),i.getVertexPosition(c,qa);let u=Py(i,e,t,n,Xa,ja,qa,fm);if(u){let d=new z;pr.getBarycoord(fm,Xa,ja,qa,d),r&&(u.uv=pr.getInterpolatedAttribute(r,a,l,c,d,new gt)),s&&(u.uv1=pr.getInterpolatedAttribute(s,a,l,c,d,new gt)),o&&(u.normal=pr.getInterpolatedAttribute(o,a,l,c,d,new z),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new z,materialIndex:0};pr.getNormal(Xa,ja,qa,f.normal),u.face=f,u.barycoord=d}return u}var Ho=class i extends kn{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],u=[],d=[],f=0,m=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,r,o,2),g("x","z","y",1,-1,e,n,-t,r,o,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new vi(c,3)),this.setAttribute("normal",new vi(u,3)),this.setAttribute("uv",new vi(d,2));function g(y,p,h,E,w,M,B,I,C,F,S){let x=M/C,A=B/F,j=M/2,H=B/2,K=I/2,Q=C+1,Y=F+1,te=0,W=0,le=new z;for(let me=0;me<Y;me++){let Ce=me*A-H;for(let Ge=0;Ge<Q;Ge++){let mt=Ge*x-j;le[y]=mt*E,le[p]=Ce*w,le[h]=K,c.push(le.x,le.y,le.z),le[y]=0,le[p]=0,le[h]=I>0?1:-1,u.push(le.x,le.y,le.z),d.push(Ge/C),d.push(1-me/F),te+=1}}for(let me=0;me<F;me++)for(let Ce=0;Ce<C;Ce++){let Ge=f+Ce+Q*me,mt=f+Ce+Q*(me+1),q=f+(Ce+1)+Q*(me+1),se=f+(Ce+1)+Q*me;l.push(Ge,mt,se),l.push(mt,q,se),W+=6}a.addGroup(m,W,S),m+=W,f+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function As(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function en(i){let e={};for(let t=0;t<i.length;t++){let n=As(i[t]);for(let r in n)e[r]=n[r]}return e}function Oy(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function ig(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}var Fy={clone:As,merge:en},Ly=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ny=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Yn=class extends xr{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ly,this.fragmentShader=Ny,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=As(e.uniforms),this.uniformsGroups=Oy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},xl=class extends wr{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ut,this.projectionMatrix=new Ut,this.projectionMatrixInverse=new Ut,this.coordinateSystem=mi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ni=new z,pm=new gt,mm=new gt,tn=class extends xl{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Hd*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Tu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Hd*2*Math.atan(Math.tan(Tu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ni.x,Ni.y).multiplyScalar(-e/Ni.z),Ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ni.x,Ni.y).multiplyScalar(-e/Ni.z)}getViewSize(e,t){return this.getViewBounds(e,pm,mm),t.subVectors(mm,pm)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Tu*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ds=-90,hs=1,Xd=class extends wr{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new tn(ds,hs,e,t);r.layers=this.layers,this.add(r);let s=new tn(ds,hs,e,t);s.layers=this.layers,this.add(s);let o=new tn(ds,hs,e,t);o.layers=this.layers,this.add(o);let a=new tn(ds,hs,e,t);a.layers=this.layers,this.add(a);let l=new tn(ds,hs,e,t);l.layers=this.layers,this.add(l);let c=new tn(ds,hs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,l]=t;for(let c of t)this.remove(c);if(e===mi)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===dl)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(d,f,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Ml=class extends br{constructor(e,t,n,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Ms,super(e,t,n,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},jd=class extends yi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Ml(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:qn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ho(5,5,5),s=new Yn({name:"CubemapFromEquirect",uniforms:As(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ln,blending:ki});s.uniforms.tEquirect.value=t;let o=new Nn(r,s),a=t.minFilter;return t.minFilter===vr&&(t.minFilter=qn),new Xd(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}},Yu=new z,Uy=new z,ky=new Ve,hi=class{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Yu.subVectors(n,t).cross(Uy.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Yu),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||ky.getNormalMatrix(e),r=this.coplanarPoint(Yu).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},cr=new Es,Ka=new z,Sl=class{constructor(e=new hi,t=new hi,n=new hi,r=new hi,s=new hi,o=new hi){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=mi){let n=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],d=r[6],f=r[7],m=r[8],g=r[9],y=r[10],p=r[11],h=r[12],E=r[13],w=r[14],M=r[15];if(n[0].setComponents(l-s,f-c,p-m,M-h).normalize(),n[1].setComponents(l+s,f+c,p+m,M+h).normalize(),n[2].setComponents(l+o,f+u,p+g,M+E).normalize(),n[3].setComponents(l-o,f-u,p-g,M-E).normalize(),n[4].setComponents(l-a,f-d,p-y,M-w).normalize(),t===mi)n[5].setComponents(l+a,f+d,p+y,M+w).normalize();else if(t===dl)n[5].setComponents(a,d,y,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),cr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),cr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(cr)}intersectsSprite(e){return cr.center.set(0,0,0),cr.radius=.7071067811865476,cr.applyMatrix4(e.matrixWorld),this.intersectsSphere(cr)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Ka.x=r.normal.x>0?e.max.x:e.min.x,Ka.y=r.normal.y>0?e.max.y:e.min.y,Ka.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ka)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function rg(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function By(i){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,d=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,u),a.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){let u=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,u);else{d.sort((m,g)=>m.start-g.start);let f=0;for(let m=1;m<d.length;m++){let g=d[f],y=d[m];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++f,d[f]=y)}d.length=f+1;for(let m=0,g=d.length;m<g;m++){let y=d[m];i.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var bl=class i extends kn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,d=e/a,f=t/l,m=[],g=[],y=[],p=[];for(let h=0;h<u;h++){let E=h*f-o;for(let w=0;w<c;w++){let M=w*d-s;g.push(M,-E,0),y.push(0,0,1),p.push(w/a),p.push(1-h/l)}}for(let h=0;h<l;h++)for(let E=0;E<a;E++){let w=E+c*h,M=E+c*(h+1),B=E+1+c*(h+1),I=E+1+c*h;m.push(w,M,I),m.push(M,B,I)}this.setIndex(m),this.setAttribute("position",new vi(g,3)),this.setAttribute("normal",new vi(y,3)),this.setAttribute("uv",new vi(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Vy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zy=`#ifdef USE_ALPHAHASH
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
#endif`,Hy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Gy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$y=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xy=`#ifdef USE_AOMAP
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
#endif`,jy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qy=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Yy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Zy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Jy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ky=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Qy=`#ifdef USE_IRIDESCENCE
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
#endif`,ex=`#ifdef USE_BUMPMAP
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
#endif`,tx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,nx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ix=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ox=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ax=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,lx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,cx=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,ux=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,dx=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,hx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,px=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gx="gl_FragColor = linearToOutputTexel( gl_FragColor );",vx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_x=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,yx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,xx=`#ifdef USE_ENVMAP
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
#endif`,Mx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Sx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,bx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ex=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Cx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ax=`#ifdef USE_GRADIENTMAP
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
}`,Tx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Dx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Rx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ix=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,Px=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
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
	#endif
#endif`,Ox=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Fx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Lx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Nx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ux=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,kx=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Bx=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Vx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,zx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Hx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Gx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$x=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Xx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Yx=`#if defined( USE_POINTS_UV )
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
#endif`,Zx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Jx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Kx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Qx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,eM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tM=`#ifdef USE_MORPHTARGETS
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
#endif`,nM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,iM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,rM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,sM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,oM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,aM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,lM=`#ifdef USE_NORMALMAP
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
#endif`,cM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,uM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,dM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,pM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,mM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,gM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_M=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,MM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,SM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,bM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,wM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,EM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,CM=`#ifdef USE_SKINNING
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
#endif`,AM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,TM=`#ifdef USE_SKINNING
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
#endif`,DM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,RM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,IM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,PM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,OM=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,FM=`#ifdef USE_TRANSMISSION
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
#endif`,LM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,NM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,UM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,BM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,VM=`uniform sampler2D t2D;
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
}`,zM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,HM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,WM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$M=`#include <common>
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
}`,XM=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,jM=`#define DISTANCE
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
}`,qM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,YM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ZM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,JM=`uniform float scale;
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
}`,KM=`uniform vec3 diffuse;
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
}`,QM=`#include <common>
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
}`,eS=`uniform vec3 diffuse;
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
}`,tS=`#define LAMBERT
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
}`,nS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,iS=`#define MATCAP
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
}`,rS=`#define MATCAP
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
}`,sS=`#define NORMAL
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
}`,oS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,aS=`#define PHONG
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
}`,lS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,cS=`#define STANDARD
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
}`,uS=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,dS=`#define TOON
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
}`,hS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,fS=`uniform float size;
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
}`,pS=`uniform vec3 diffuse;
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
}`,mS=`#include <common>
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
}`,gS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,vS=`uniform float rotation;
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
}`,_S=`uniform vec3 diffuse;
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
}`,He={alphahash_fragment:Vy,alphahash_pars_fragment:zy,alphamap_fragment:Hy,alphamap_pars_fragment:Gy,alphatest_fragment:Wy,alphatest_pars_fragment:$y,aomap_fragment:Xy,aomap_pars_fragment:jy,batching_pars_vertex:qy,batching_vertex:Yy,begin_vertex:Zy,beginnormal_vertex:Jy,bsdfs:Ky,iridescence_fragment:Qy,bumpmap_pars_fragment:ex,clipping_planes_fragment:tx,clipping_planes_pars_fragment:nx,clipping_planes_pars_vertex:ix,clipping_planes_vertex:rx,color_fragment:sx,color_pars_fragment:ox,color_pars_vertex:ax,color_vertex:lx,common:cx,cube_uv_reflection_fragment:ux,defaultnormal_vertex:dx,displacementmap_pars_vertex:hx,displacementmap_vertex:fx,emissivemap_fragment:px,emissivemap_pars_fragment:mx,colorspace_fragment:gx,colorspace_pars_fragment:vx,envmap_fragment:_x,envmap_common_pars_fragment:yx,envmap_pars_fragment:xx,envmap_pars_vertex:Mx,envmap_physical_pars_fragment:Px,envmap_vertex:Sx,fog_vertex:bx,fog_pars_vertex:wx,fog_fragment:Ex,fog_pars_fragment:Cx,gradientmap_pars_fragment:Ax,lightmap_pars_fragment:Tx,lights_lambert_fragment:Dx,lights_lambert_pars_fragment:Rx,lights_pars_begin:Ix,lights_toon_fragment:Ox,lights_toon_pars_fragment:Fx,lights_phong_fragment:Lx,lights_phong_pars_fragment:Nx,lights_physical_fragment:Ux,lights_physical_pars_fragment:kx,lights_fragment_begin:Bx,lights_fragment_maps:Vx,lights_fragment_end:zx,logdepthbuf_fragment:Hx,logdepthbuf_pars_fragment:Gx,logdepthbuf_pars_vertex:Wx,logdepthbuf_vertex:$x,map_fragment:Xx,map_pars_fragment:jx,map_particle_fragment:qx,map_particle_pars_fragment:Yx,metalnessmap_fragment:Zx,metalnessmap_pars_fragment:Jx,morphinstance_vertex:Kx,morphcolor_vertex:Qx,morphnormal_vertex:eM,morphtarget_pars_vertex:tM,morphtarget_vertex:nM,normal_fragment_begin:iM,normal_fragment_maps:rM,normal_pars_fragment:sM,normal_pars_vertex:oM,normal_vertex:aM,normalmap_pars_fragment:lM,clearcoat_normal_fragment_begin:cM,clearcoat_normal_fragment_maps:uM,clearcoat_pars_fragment:dM,iridescence_pars_fragment:hM,opaque_fragment:fM,packing:pM,premultiplied_alpha_fragment:mM,project_vertex:gM,dithering_fragment:vM,dithering_pars_fragment:_M,roughnessmap_fragment:yM,roughnessmap_pars_fragment:xM,shadowmap_pars_fragment:MM,shadowmap_pars_vertex:SM,shadowmap_vertex:bM,shadowmask_pars_fragment:wM,skinbase_vertex:EM,skinning_pars_vertex:CM,skinning_vertex:AM,skinnormal_vertex:TM,specularmap_fragment:DM,specularmap_pars_fragment:RM,tonemapping_fragment:IM,tonemapping_pars_fragment:PM,transmission_fragment:OM,transmission_pars_fragment:FM,uv_pars_fragment:LM,uv_pars_vertex:NM,uv_vertex:UM,worldpos_vertex:kM,background_vert:BM,background_frag:VM,backgroundCube_vert:zM,backgroundCube_frag:HM,cube_vert:GM,cube_frag:WM,depth_vert:$M,depth_frag:XM,distanceRGBA_vert:jM,distanceRGBA_frag:qM,equirect_vert:YM,equirect_frag:ZM,linedashed_vert:JM,linedashed_frag:KM,meshbasic_vert:QM,meshbasic_frag:eS,meshlambert_vert:tS,meshlambert_frag:nS,meshmatcap_vert:iS,meshmatcap_frag:rS,meshnormal_vert:sS,meshnormal_frag:oS,meshphong_vert:aS,meshphong_frag:lS,meshphysical_vert:cS,meshphysical_frag:uS,meshtoon_vert:dS,meshtoon_frag:hS,points_vert:fS,points_frag:pS,shadow_vert:mS,shadow_frag:gS,sprite_vert:vS,sprite_frag:_S},oe={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},jn={basic:{uniforms:en([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:en([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new tt(0)}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:en([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:en([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:en([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new tt(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:en([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:en([oe.points,oe.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:en([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:en([oe.common,oe.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:en([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:en([oe.sprite,oe.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distanceRGBA:{uniforms:en([oe.common,oe.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distanceRGBA_vert,fragmentShader:He.distanceRGBA_frag},shadow:{uniforms:en([oe.lights,oe.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};jn.physical={uniforms:en([jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};var Qa={r:0,b:0,g:0},ur=new Cs,yS=new Ut;function xS(i,e,t,n,r,s,o){let a=new tt(0),l=s===!0?0:1,c,u,d=null,f=0,m=null;function g(E){let w=E.isScene===!0?E.background:null;return w&&w.isTexture&&(w=(E.backgroundBlurriness>0?t:e).get(w)),w}function y(E){let w=!1,M=g(E);M===null?h(a,l):M&&M.isColor&&(h(M,1),w=!0);let B=i.xr.getEnvironmentBlendMode();B==="additive"?n.buffers.color.setClear(0,0,0,1,o):B==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||w)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(E,w){let M=g(w);M&&(M.isCubeTexture||M.mapping===Dl)?(u===void 0&&(u=new Nn(new Ho(1,1,1),new Yn({name:"BackgroundCubeMaterial",uniforms:As(jn.backgroundCube.uniforms),vertexShader:jn.backgroundCube.vertexShader,fragmentShader:jn.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(B,I,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),ur.copy(w.backgroundRotation),ur.x*=-1,ur.y*=-1,ur.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(ur.y*=-1,ur.z*=-1),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(yS.makeRotationFromEuler(ur)),u.material.toneMapped=Ke.getTransfer(M.colorSpace)!==pt,(d!==M||f!==M.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,d=M,f=M.version,m=i.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Nn(new bl(2,2),new Yn({name:"BackgroundMaterial",uniforms:As(jn.background.uniforms),vertexShader:jn.background.vertexShader,fragmentShader:jn.background.fragmentShader,side:Vi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=Ke.getTransfer(M.colorSpace)!==pt,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(d!==M||f!==M.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,d=M,f=M.version,m=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function h(E,w){E.getRGB(Qa,ig(i)),n.buffers.color.setClear(Qa.r,Qa.g,Qa.b,w,o)}return{getClearColor:function(){return a},setClearColor:function(E,w=1){a.set(E),l=w,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,h(a,l)},render:y,addToRenderList:p}}function MS(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null),s=r,o=!1;function a(x,A,j,H,K){let Q=!1,Y=d(H,j,A);s!==Y&&(s=Y,c(s.object)),Q=m(x,H,j,K),Q&&g(x,H,j,K),K!==null&&e.update(K,i.ELEMENT_ARRAY_BUFFER),(Q||o)&&(o=!1,M(x,A,j,H),K!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function l(){return i.createVertexArray()}function c(x){return i.bindVertexArray(x)}function u(x){return i.deleteVertexArray(x)}function d(x,A,j){let H=j.wireframe===!0,K=n[x.id];K===void 0&&(K={},n[x.id]=K);let Q=K[A.id];Q===void 0&&(Q={},K[A.id]=Q);let Y=Q[H];return Y===void 0&&(Y=f(l()),Q[H]=Y),Y}function f(x){let A=[],j=[],H=[];for(let K=0;K<t;K++)A[K]=0,j[K]=0,H[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:j,attributeDivisors:H,object:x,attributes:{},index:null}}function m(x,A,j,H){let K=s.attributes,Q=A.attributes,Y=0,te=j.getAttributes();for(let W in te)if(te[W].location>=0){let me=K[W],Ce=Q[W];if(Ce===void 0&&(W==="instanceMatrix"&&x.instanceMatrix&&(Ce=x.instanceMatrix),W==="instanceColor"&&x.instanceColor&&(Ce=x.instanceColor)),me===void 0||me.attribute!==Ce||Ce&&me.data!==Ce.data)return!0;Y++}return s.attributesNum!==Y||s.index!==H}function g(x,A,j,H){let K={},Q=A.attributes,Y=0,te=j.getAttributes();for(let W in te)if(te[W].location>=0){let me=Q[W];me===void 0&&(W==="instanceMatrix"&&x.instanceMatrix&&(me=x.instanceMatrix),W==="instanceColor"&&x.instanceColor&&(me=x.instanceColor));let Ce={};Ce.attribute=me,me&&me.data&&(Ce.data=me.data),K[W]=Ce,Y++}s.attributes=K,s.attributesNum=Y,s.index=H}function y(){let x=s.newAttributes;for(let A=0,j=x.length;A<j;A++)x[A]=0}function p(x){h(x,0)}function h(x,A){let j=s.newAttributes,H=s.enabledAttributes,K=s.attributeDivisors;j[x]=1,H[x]===0&&(i.enableVertexAttribArray(x),H[x]=1),K[x]!==A&&(i.vertexAttribDivisor(x,A),K[x]=A)}function E(){let x=s.newAttributes,A=s.enabledAttributes;for(let j=0,H=A.length;j<H;j++)A[j]!==x[j]&&(i.disableVertexAttribArray(j),A[j]=0)}function w(x,A,j,H,K,Q,Y){Y===!0?i.vertexAttribIPointer(x,A,j,K,Q):i.vertexAttribPointer(x,A,j,H,K,Q)}function M(x,A,j,H){y();let K=H.attributes,Q=j.getAttributes(),Y=A.defaultAttributeValues;for(let te in Q){let W=Q[te];if(W.location>=0){let le=K[te];if(le===void 0&&(te==="instanceMatrix"&&x.instanceMatrix&&(le=x.instanceMatrix),te==="instanceColor"&&x.instanceColor&&(le=x.instanceColor)),le!==void 0){let me=le.normalized,Ce=le.itemSize,Ge=e.get(le);if(Ge===void 0)continue;let mt=Ge.buffer,q=Ge.type,se=Ge.bytesPerElement,Se=q===i.INT||q===i.UNSIGNED_INT||le.gpuType===mh;if(le.isInterleavedBufferAttribute){let ce=le.data,Ie=ce.stride,Ue=le.offset;if(ce.isInstancedInterleavedBuffer){for(let We=0;We<W.locationSize;We++)h(W.location+We,ce.meshPerAttribute);x.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let We=0;We<W.locationSize;We++)p(W.location+We);i.bindBuffer(i.ARRAY_BUFFER,mt);for(let We=0;We<W.locationSize;We++)w(W.location+We,Ce/W.locationSize,q,me,Ie*se,(Ue+Ce/W.locationSize*We)*se,Se)}else{if(le.isInstancedBufferAttribute){for(let ce=0;ce<W.locationSize;ce++)h(W.location+ce,le.meshPerAttribute);x.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let ce=0;ce<W.locationSize;ce++)p(W.location+ce);i.bindBuffer(i.ARRAY_BUFFER,mt);for(let ce=0;ce<W.locationSize;ce++)w(W.location+ce,Ce/W.locationSize,q,me,Ce*se,Ce/W.locationSize*ce*se,Se)}}else if(Y!==void 0){let me=Y[te];if(me!==void 0)switch(me.length){case 2:i.vertexAttrib2fv(W.location,me);break;case 3:i.vertexAttrib3fv(W.location,me);break;case 4:i.vertexAttrib4fv(W.location,me);break;default:i.vertexAttrib1fv(W.location,me)}}}}E()}function B(){F();for(let x in n){let A=n[x];for(let j in A){let H=A[j];for(let K in H)u(H[K].object),delete H[K];delete A[j]}delete n[x]}}function I(x){if(n[x.id]===void 0)return;let A=n[x.id];for(let j in A){let H=A[j];for(let K in H)u(H[K].object),delete H[K];delete A[j]}delete n[x.id]}function C(x){for(let A in n){let j=n[A];if(j[x.id]===void 0)continue;let H=j[x.id];for(let K in H)u(H[K].object),delete H[K];delete j[x.id]}}function F(){S(),o=!0,s!==r&&(s=r,c(s.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:F,resetDefaultState:S,dispose:B,releaseStatesOfGeometry:I,releaseStatesOfProgram:C,initAttributes:y,enableAttribute:p,disableUnusedAttributes:E}}function SS(i,e,t){let n;function r(c){n=c}function s(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,d){d!==0&&(i.drawArraysInstanced(n,c,u,d),t.update(u,n,d))}function a(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,d);let m=0;for(let g=0;g<d;g++)m+=u[g];t.update(m,n,1)}function l(c,u,d,f){if(d===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)o(c[g],u[g],f[g]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,d);let g=0;for(let y=0;y<d;y++)g+=u[y]*f[y];t.update(g,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function bS(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(C){return!(C!==Ln&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){let F=C===Wo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==_i&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==pi&&!F)}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),h=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),B=g>0,I=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:m,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:p,maxAttributes:h,maxVertexUniforms:E,maxVaryings:w,maxFragmentUniforms:M,vertexTextures:B,maxSamples:I}}function wS(i){let e=this,t=null,n=0,r=!1,s=!1,o=new hi,a=new Ve,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let m=d.length!==0||f||n!==0||r;return r=f,n=d.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,m){let g=d.clippingPlanes,y=d.clipIntersection,p=d.clipShadows,h=i.get(d);if(!r||g===null||g.length===0||s&&!p)s?u(null):c();else{let E=s?0:n,w=E*4,M=h.clippingState||null;l.value=M,M=u(g,f,w,m);for(let B=0;B!==w;++B)M[B]=t[B];h.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,f,m,g){let y=d!==null?d.length:0,p=null;if(y!==0){if(p=l.value,g!==!0||p===null){let h=m+y*4,E=f.matrixWorldInverse;a.getNormalMatrix(E),(p===null||p.length<h)&&(p=new Float32Array(h));for(let w=0,M=m;w!==y;++w,M+=4)o.copy(d[w]).applyMatrix4(E,a),o.normal.toArray(p,M),p[M+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,p}}function ES(i){let e=new WeakMap;function t(o,a){return a===dd?o.mapping=Ms:a===hd&&(o.mapping=Ss),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===dd||a===hd)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new jd(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}var qd=class extends xl{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ps=4,gm=[.125,.215,.35,.446,.526,.582],mr=20,Zu=new qd,vm=new tt,Ju=null,Ku=0,Qu=0,ed=!1,hr=(1+Math.sqrt(5))/2,fs=1/hr,_m=[new z(-hr,fs,0),new z(hr,fs,0),new z(-fs,0,hr),new z(fs,0,hr),new z(0,hr,-fs),new z(0,hr,fs),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)],wl=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Ju=this._renderer.getRenderTarget(),Ku=this._renderer.getActiveCubeFace(),Qu=this._renderer.getActiveMipmapLevel(),ed=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ju,Ku,Qu),this._renderer.xr.enabled=ed,e.scissorTest=!1,el(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ms||e.mapping===Ss?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ju=this._renderer.getRenderTarget(),Ku=this._renderer.getActiveCubeFace(),Qu=this._renderer.getActiveMipmapLevel(),ed=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:qn,minFilter:qn,generateMipmaps:!1,type:Wo,format:Ln,colorSpace:Rs,depthBuffer:!1},r=ym(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ym(e,t,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=CS(s)),this._blurMaterial=AS(s,e,t)}return r}_compileMaterial(e){let t=new Nn(this._lodPlanes[0],e);this._renderer.compile(t,Zu)}_sceneToCubeUV(e,t,n,r){let a=new tn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(vm),u.toneMapping=Bi,u.autoClear=!1;let m=new vl({name:"PMREM.Background",side:ln,depthWrite:!1,depthTest:!1}),g=new Nn(new Ho,m),y=!1,p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,y=!0):(m.color.copy(vm),y=!0);for(let h=0;h<6;h++){let E=h%3;E===0?(a.up.set(0,l[h],0),a.lookAt(c[h],0,0)):E===1?(a.up.set(0,0,l[h]),a.lookAt(0,c[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,c[h]));let w=this._cubeSize;el(r,E*w,h>2?w:0,w,w),u.setRenderTarget(r),y&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=p}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===Ms||e.mapping===Ss;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xm());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new Nn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let l=this._cubeSize;el(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Zu)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=_m[(r-s-1)%_m.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,d=new Nn(this._lodPlanes[r],c),f=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*mr-1),y=s/g,p=isFinite(s)?1+Math.floor(u*y):mr;p>mr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${mr}`);let h=[],E=0;for(let C=0;C<mr;++C){let F=C/y,S=Math.exp(-F*F/2);h.push(S),C===0?E+=S:C<p&&(E+=2*S)}for(let C=0;C<h.length;C++)h[C]=h[C]/E;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=h,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:w}=this;f.dTheta.value=g,f.mipInt.value=w-n;let M=this._sizeLods[r],B=3*M*(r>w-ps?r-w+ps:0),I=4*(this._cubeSize-M);el(t,B,I,3*M,2*M),l.setRenderTarget(t),l.render(d,Zu)}};function CS(i){let e=[],t=[],n=[],r=i,s=i-ps+1+gm.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);t.push(a);let l=1/a;o>i-ps?l=gm[o-i+ps-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,g=6,y=3,p=2,h=1,E=new Float32Array(y*g*m),w=new Float32Array(p*g*m),M=new Float32Array(h*g*m);for(let I=0;I<m;I++){let C=I%3*2/3-1,F=I>2?0:-1,S=[C,F,0,C+2/3,F,0,C+2/3,F+1,0,C,F,0,C+2/3,F+1,0,C,F+1,0];E.set(S,y*g*I),w.set(f,p*g*I);let x=[I,I,I,I,I,I];M.set(x,h*g*I)}let B=new kn;B.setAttribute("position",new Jt(E,y)),B.setAttribute("uv",new Jt(w,p)),B.setAttribute("faceIndex",new Jt(M,h)),e.push(B),r>ps&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ym(i,e,t){let n=new yi(i,e,t);return n.texture.mapping=Dl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function el(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function AS(i,e,t){let n=new Float32Array(mr),r=new z(0,1,0);return new Yn({name:"SphericalGaussianBlur",defines:{n:mr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Mh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ki,depthTest:!1,depthWrite:!1})}function xm(){return new Yn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Mh(),fragmentShader:`

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
		`,blending:ki,depthTest:!1,depthWrite:!1})}function Mm(){return new Yn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Mh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ki,depthTest:!1,depthWrite:!1})}function Mh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function TS(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===dd||l===hd,u=l===Ms||l===Ss;if(c||u){let d=e.get(a),f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new wl(i)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{let m=a.image;return c&&m&&m.height>0||u&&m&&r(m)?(t===null&&(t=new wl(i)),d=c?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){let l=a.target;l.removeEventListener("dispose",s);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function DS(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let r=t(n);return r===null&&ko("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function RS(i,e,t,n){let r={},s=new WeakMap;function o(d){let f=d.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);for(let g in f.morphAttributes){let y=f.morphAttributes[g];for(let p=0,h=y.length;p<h;p++)e.remove(y[p])}f.removeEventListener("dispose",o),delete r[f.id];let m=s.get(f);m&&(e.remove(m),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(d){let f=d.attributes;for(let g in f)e.update(f[g],i.ARRAY_BUFFER);let m=d.morphAttributes;for(let g in m){let y=m[g];for(let p=0,h=y.length;p<h;p++)e.update(y[p],i.ARRAY_BUFFER)}}function c(d){let f=[],m=d.index,g=d.attributes.position,y=0;if(m!==null){let E=m.array;y=m.version;for(let w=0,M=E.length;w<M;w+=3){let B=E[w+0],I=E[w+1],C=E[w+2];f.push(B,I,I,C,C,B)}}else if(g!==void 0){let E=g.array;y=g.version;for(let w=0,M=E.length/3-1;w<M;w+=3){let B=w+0,I=w+1,C=w+2;f.push(B,I,I,C,C,B)}}else return;let p=new(tg(f)?yl:_l)(f,1);p.version=y;let h=s.get(d);h&&e.remove(h),s.set(d,p)}function u(d){let f=s.get(d);if(f){let m=d.index;m!==null&&f.version<m.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function IS(i,e,t){let n;function r(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,m){i.drawElements(n,m,s,f*o),t.update(m,n,1)}function c(f,m,g){g!==0&&(i.drawElementsInstanced(n,m,s,f*o,g),t.update(m,n,g))}function u(f,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,s,f,0,g);let p=0;for(let h=0;h<g;h++)p+=m[h];t.update(p,n,1)}function d(f,m,g,y){if(g===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let h=0;h<f.length;h++)c(f[h]/o,m[h],y[h]);else{p.multiDrawElementsInstancedWEBGL(n,m,0,s,f,0,y,0,g);let h=0;for(let E=0;E<g;E++)h+=m[E]*y[E];t.update(h,n,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function PS(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function OS(i,e,t){let n=new WeakMap,r=new Ot;function s(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0,f=n.get(a);if(f===void 0||f.count!==d){let x=function(){F.dispose(),n.delete(a),a.removeEventListener("dispose",x)};var m=x;f!==void 0&&f.texture.dispose();let g=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],E=a.morphAttributes.normal||[],w=a.morphAttributes.color||[],M=0;g===!0&&(M=1),y===!0&&(M=2),p===!0&&(M=3);let B=a.attributes.position.count*M,I=1;B>e.maxTextureSize&&(I=Math.ceil(B/e.maxTextureSize),B=e.maxTextureSize);let C=new Float32Array(B*I*4*d),F=new pl(C,B,I,d);F.type=pi,F.needsUpdate=!0;let S=M*4;for(let A=0;A<d;A++){let j=h[A],H=E[A],K=w[A],Q=B*I*4*A;for(let Y=0;Y<j.count;Y++){let te=Y*S;g===!0&&(r.fromBufferAttribute(j,Y),C[Q+te+0]=r.x,C[Q+te+1]=r.y,C[Q+te+2]=r.z,C[Q+te+3]=0),y===!0&&(r.fromBufferAttribute(H,Y),C[Q+te+4]=r.x,C[Q+te+5]=r.y,C[Q+te+6]=r.z,C[Q+te+7]=0),p===!0&&(r.fromBufferAttribute(K,Y),C[Q+te+8]=r.x,C[Q+te+9]=r.y,C[Q+te+10]=r.z,C[Q+te+11]=K.itemSize===4?r.w:1)}}f={count:d,texture:F,size:new gt(B,I)},n.set(a,f),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];let y=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",y),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function FS(i,e,t,n){let r=new WeakMap;function s(l){let c=n.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return d}function o(){r=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}var El=class extends br{constructor(e,t,n,r,s,o,a,l,c,u=vs){if(u!==vs&&u!==ws)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===vs&&(n=_r),n===void 0&&u===ws&&(n=bs),super(null,r,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Un,this.minFilter=l!==void 0?l:Un,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},sg=new br,Sm=new El(1,1),og=new pl,ag=new $d,lg=new Ml,bm=[],wm=[],Em=new Float32Array(16),Cm=new Float32Array(9),Am=new Float32Array(4);function Is(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,s=bm[r];if(s===void 0&&(s=new Float32Array(r),bm[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function Vt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function zt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Il(i,e){let t=wm[e];t===void 0&&(t=new Int32Array(e),wm[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function LS(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function NS(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;i.uniform2fv(this.addr,e),zt(t,e)}}function US(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Vt(t,e))return;i.uniform3fv(this.addr,e),zt(t,e)}}function kS(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;i.uniform4fv(this.addr,e),zt(t,e)}}function BS(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),zt(t,e)}else{if(Vt(t,n))return;Am.set(n),i.uniformMatrix2fv(this.addr,!1,Am),zt(t,n)}}function VS(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),zt(t,e)}else{if(Vt(t,n))return;Cm.set(n),i.uniformMatrix3fv(this.addr,!1,Cm),zt(t,n)}}function zS(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),zt(t,e)}else{if(Vt(t,n))return;Em.set(n),i.uniformMatrix4fv(this.addr,!1,Em),zt(t,n)}}function HS(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function GS(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;i.uniform2iv(this.addr,e),zt(t,e)}}function WS(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;i.uniform3iv(this.addr,e),zt(t,e)}}function $S(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;i.uniform4iv(this.addr,e),zt(t,e)}}function XS(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function jS(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;i.uniform2uiv(this.addr,e),zt(t,e)}}function qS(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;i.uniform3uiv(this.addr,e),zt(t,e)}}function YS(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;i.uniform4uiv(this.addr,e),zt(t,e)}}function ZS(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Sm.compareFunction=eg,s=Sm):s=sg,t.setTexture2D(e||s,r)}function JS(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||ag,r)}function KS(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||lg,r)}function QS(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||og,r)}function eb(i){switch(i){case 5126:return LS;case 35664:return NS;case 35665:return US;case 35666:return kS;case 35674:return BS;case 35675:return VS;case 35676:return zS;case 5124:case 35670:return HS;case 35667:case 35671:return GS;case 35668:case 35672:return WS;case 35669:case 35673:return $S;case 5125:return XS;case 36294:return jS;case 36295:return qS;case 36296:return YS;case 35678:case 36198:case 36298:case 36306:case 35682:return ZS;case 35679:case 36299:case 36307:return JS;case 35680:case 36300:case 36308:case 36293:return KS;case 36289:case 36303:case 36311:case 36292:return QS}}function tb(i,e){i.uniform1fv(this.addr,e)}function nb(i,e){let t=Is(e,this.size,2);i.uniform2fv(this.addr,t)}function ib(i,e){let t=Is(e,this.size,3);i.uniform3fv(this.addr,t)}function rb(i,e){let t=Is(e,this.size,4);i.uniform4fv(this.addr,t)}function sb(i,e){let t=Is(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function ob(i,e){let t=Is(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function ab(i,e){let t=Is(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function lb(i,e){i.uniform1iv(this.addr,e)}function cb(i,e){i.uniform2iv(this.addr,e)}function ub(i,e){i.uniform3iv(this.addr,e)}function db(i,e){i.uniform4iv(this.addr,e)}function hb(i,e){i.uniform1uiv(this.addr,e)}function fb(i,e){i.uniform2uiv(this.addr,e)}function pb(i,e){i.uniform3uiv(this.addr,e)}function mb(i,e){i.uniform4uiv(this.addr,e)}function gb(i,e,t){let n=this.cache,r=e.length,s=Il(t,r);Vt(n,s)||(i.uniform1iv(this.addr,s),zt(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||sg,s[o])}function vb(i,e,t){let n=this.cache,r=e.length,s=Il(t,r);Vt(n,s)||(i.uniform1iv(this.addr,s),zt(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||ag,s[o])}function _b(i,e,t){let n=this.cache,r=e.length,s=Il(t,r);Vt(n,s)||(i.uniform1iv(this.addr,s),zt(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||lg,s[o])}function yb(i,e,t){let n=this.cache,r=e.length,s=Il(t,r);Vt(n,s)||(i.uniform1iv(this.addr,s),zt(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||og,s[o])}function xb(i){switch(i){case 5126:return tb;case 35664:return nb;case 35665:return ib;case 35666:return rb;case 35674:return sb;case 35675:return ob;case 35676:return ab;case 5124:case 35670:return lb;case 35667:case 35671:return cb;case 35668:case 35672:return ub;case 35669:case 35673:return db;case 5125:return hb;case 36294:return fb;case 36295:return pb;case 36296:return mb;case 35678:case 36198:case 36298:case 36306:case 35682:return gb;case 35679:case 36299:case 36307:return vb;case 35680:case 36300:case 36308:case 36293:return _b;case 36289:case 36303:case 36311:case 36292:return yb}}var Yd=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=eb(t.type)}},Zd=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=xb(t.type)}},Jd=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],n)}}},td=/(\w+)(\])?(\[|\.)?/g;function Tm(i,e){i.seq.push(e),i.map[e.id]=e}function Mb(i,e,t){let n=i.name,r=n.length;for(td.lastIndex=0;;){let s=td.exec(n),o=td.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Tm(t,c===void 0?new Yd(a,i,e):new Zd(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new Jd(a),Tm(t,d)),t=d}}}var ys=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);Mb(s,o,this)}}setValue(e,t,n,r){let s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&n.push(o)}return n}};function Dm(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Sb=37297,bb=0;function wb(i,e){let t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Rm=new Ve;function Eb(i){Ke._getMatrix(Rm,Ke.workingColorSpace,i);let e=`mat3( ${Rm.elements.map(t=>t.toFixed(4))} )`;switch(Ke.getTransfer(i)){case Rl:return[e,"LinearTransferOETF"];case pt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Im(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+wb(i.getShaderSource(e),o)}else return r}function Cb(i,e){let t=Eb(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Ab(i,e){let t;switch(e){case J_:t="Linear";break;case K_:t="Reinhard";break;case Q_:t="Cineon";break;case ey:t="ACESFilmic";break;case ny:t="AgX";break;case iy:t="Neutral";break;case ty:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var tl=new z;function Tb(){Ke.getLuminanceCoefficients(tl);let i=tl.x.toFixed(4),e=tl.y.toFixed(4),t=tl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Db(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Bo).join(`
`)}function Rb(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Ib(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(e,r),o=s.name,a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Bo(i){return i!==""}function Pm(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Om(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Pb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kd(i){return i.replace(Pb,Fb)}var Ob=new Map;function Fb(i,e){let t=He[e];if(t===void 0){let n=Ob.get(e);if(n!==void 0)t=He[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Kd(t)}var Lb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fm(i){return i.replace(Lb,Nb)}function Nb(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Lm(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Ub(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Hm?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===R_?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===di&&(e="SHADOWMAP_TYPE_VSM"),e}function kb(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ms:case Ss:e="ENVMAP_TYPE_CUBE";break;case Dl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Bb(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ss:e="ENVMAP_MODE_REFRACTION";break}return e}function Vb(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Gm:e="ENVMAP_BLENDING_MULTIPLY";break;case Y_:e="ENVMAP_BLENDING_MIX";break;case Z_:e="ENVMAP_BLENDING_ADD";break}return e}function zb(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Hb(i,e,t,n){let r=i.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,l=Ub(t),c=kb(t),u=Bb(t),d=Vb(t),f=zb(t),m=Db(t),g=Rb(s),y=r.createProgram(),p,h,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Bo).join(`
`),p.length>0&&(p+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Bo).join(`
`),h.length>0&&(h+=`
`)):(p=[Lm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bo).join(`
`),h=[Lm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Bi?"#define TONE_MAPPING":"",t.toneMapping!==Bi?He.tonemapping_pars_fragment:"",t.toneMapping!==Bi?Ab("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,Cb("linearToOutputTexel",t.outputColorSpace),Tb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Bo).join(`
`)),o=Kd(o),o=Pm(o,t),o=Om(o,t),a=Kd(a),a=Pm(a,t),a=Om(a,t),o=Fm(o),a=Fm(a),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,h=["#define varying in",t.glslVersion===Yp?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Yp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);let w=E+p+o,M=E+h+a,B=Dm(r,r.VERTEX_SHADER,w),I=Dm(r,r.FRAGMENT_SHADER,M);r.attachShader(y,B),r.attachShader(y,I),t.index0AttributeName!==void 0?r.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function C(A){if(i.debug.checkShaderErrors){let j=r.getProgramInfoLog(y).trim(),H=r.getShaderInfoLog(B).trim(),K=r.getShaderInfoLog(I).trim(),Q=!0,Y=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(Q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,y,B,I);else{let te=Im(r,B,"vertex"),W=Im(r,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+j+`
`+te+`
`+W)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):(H===""||K==="")&&(Y=!1);Y&&(A.diagnostics={runnable:Q,programLog:j,vertexShader:{log:H,prefix:p},fragmentShader:{log:K,prefix:h}})}r.deleteShader(B),r.deleteShader(I),F=new ys(r,y),S=Ib(r,y)}let F;this.getUniforms=function(){return F===void 0&&C(this),F};let S;this.getAttributes=function(){return S===void 0&&C(this),S};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(y,Sb)),x},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=bb++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=B,this.fragmentShader=I,this}var Gb=0,Qd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new eh(e),t.set(e,n)),n}},eh=class{constructor(e){this.id=Gb++,this.code=e,this.usedTimes=0}};function Wb(i,e,t,n,r,s,o){let a=new gl,l=new Qd,c=new Set,u=[],d=r.logarithmicDepthBuffer,f=r.vertexTextures,m=r.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(S){return c.add(S),S===0?"uv":`uv${S}`}function p(S,x,A,j,H){let K=j.fog,Q=H.geometry,Y=S.isMeshStandardMaterial?j.environment:null,te=(S.isMeshStandardMaterial?t:e).get(S.envMap||Y),W=te&&te.mapping===Dl?te.image.height:null,le=g[S.type];S.precision!==null&&(m=r.getMaxPrecision(S.precision),m!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",m,"instead."));let me=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Ce=me!==void 0?me.length:0,Ge=0;Q.morphAttributes.position!==void 0&&(Ge=1),Q.morphAttributes.normal!==void 0&&(Ge=2),Q.morphAttributes.color!==void 0&&(Ge=3);let mt,q,se,Se;if(le){let ot=jn[le];mt=ot.vertexShader,q=ot.fragmentShader}else mt=S.vertexShader,q=S.fragmentShader,l.update(S),se=l.getVertexShaderID(S),Se=l.getFragmentShaderID(S);let ce=i.getRenderTarget(),Ie=i.state.buffers.depth.getReversed(),Ue=H.isInstancedMesh===!0,We=H.isBatchedMesh===!0,Et=!!S.map,Ze=!!S.matcap,Tt=!!te,P=!!S.aoMap,mn=!!S.lightMap,Xe=!!S.bumpMap,je=!!S.normalMap,Te=!!S.displacementMap,St=!!S.emissiveMap,Ae=!!S.metalnessMap,b=!!S.roughnessMap,v=S.anisotropy>0,N=S.clearcoat>0,Z=S.dispersion>0,ee=S.iridescence>0,X=S.sheen>0,be=S.transmission>0,ue=v&&!!S.anisotropyMap,ge=N&&!!S.clearcoatMap,Je=N&&!!S.clearcoatNormalMap,ie=N&&!!S.clearcoatRoughnessMap,ve=ee&&!!S.iridescenceMap,De=ee&&!!S.iridescenceThicknessMap,Pe=X&&!!S.sheenColorMap,_e=X&&!!S.sheenRoughnessMap,qe=!!S.specularMap,ze=!!S.specularColorMap,vt=!!S.specularIntensityMap,T=be&&!!S.transmissionMap,ae=be&&!!S.thicknessMap,G=!!S.gradientMap,J=!!S.alphaMap,fe=S.alphaTest>0,de=!!S.alphaHash,ke=!!S.extensions,At=Bi;S.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(At=i.toneMapping);let jt={shaderID:le,shaderType:S.type,shaderName:S.name,vertexShader:mt,fragmentShader:q,defines:S.defines,customVertexShaderID:se,customFragmentShaderID:Se,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:m,batching:We,batchingColor:We&&H._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&H.instanceColor!==null,instancingMorph:Ue&&H.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ce===null?i.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:Rs,alphaToCoverage:!!S.alphaToCoverage,map:Et,matcap:Ze,envMap:Tt,envMapMode:Tt&&te.mapping,envMapCubeUVHeight:W,aoMap:P,lightMap:mn,bumpMap:Xe,normalMap:je,displacementMap:f&&Te,emissiveMap:St,normalMapObjectSpace:je&&S.normalMapType===ly,normalMapTangentSpace:je&&S.normalMapType===ay,metalnessMap:Ae,roughnessMap:b,anisotropy:v,anisotropyMap:ue,clearcoat:N,clearcoatMap:ge,clearcoatNormalMap:Je,clearcoatRoughnessMap:ie,dispersion:Z,iridescence:ee,iridescenceMap:ve,iridescenceThicknessMap:De,sheen:X,sheenColorMap:Pe,sheenRoughnessMap:_e,specularMap:qe,specularColorMap:ze,specularIntensityMap:vt,transmission:be,transmissionMap:T,thicknessMap:ae,gradientMap:G,opaque:S.transparent===!1&&S.blending===gs&&S.alphaToCoverage===!1,alphaMap:J,alphaTest:fe,alphaHash:de,combine:S.combine,mapUv:Et&&y(S.map.channel),aoMapUv:P&&y(S.aoMap.channel),lightMapUv:mn&&y(S.lightMap.channel),bumpMapUv:Xe&&y(S.bumpMap.channel),normalMapUv:je&&y(S.normalMap.channel),displacementMapUv:Te&&y(S.displacementMap.channel),emissiveMapUv:St&&y(S.emissiveMap.channel),metalnessMapUv:Ae&&y(S.metalnessMap.channel),roughnessMapUv:b&&y(S.roughnessMap.channel),anisotropyMapUv:ue&&y(S.anisotropyMap.channel),clearcoatMapUv:ge&&y(S.clearcoatMap.channel),clearcoatNormalMapUv:Je&&y(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&y(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&y(S.iridescenceMap.channel),iridescenceThicknessMapUv:De&&y(S.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&y(S.sheenColorMap.channel),sheenRoughnessMapUv:_e&&y(S.sheenRoughnessMap.channel),specularMapUv:qe&&y(S.specularMap.channel),specularColorMapUv:ze&&y(S.specularColorMap.channel),specularIntensityMapUv:vt&&y(S.specularIntensityMap.channel),transmissionMapUv:T&&y(S.transmissionMap.channel),thicknessMapUv:ae&&y(S.thicknessMap.channel),alphaMapUv:J&&y(S.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(je||v),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!Q.attributes.uv&&(Et||J),fog:!!K,useFog:S.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Ie,skinning:H.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:Ce,morphTextureStride:Ge,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&A.length>0,shadowMapType:i.shadowMap.type,toneMapping:At,decodeVideoTexture:Et&&S.map.isVideoTexture===!0&&Ke.getTransfer(S.map.colorSpace)===pt,decodeVideoTextureEmissive:St&&S.emissiveMap.isVideoTexture===!0&&Ke.getTransfer(S.emissiveMap.colorSpace)===pt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===fi,flipSided:S.side===ln,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:ke&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ke&&S.extensions.multiDraw===!0||We)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return jt.vertexUv1s=c.has(1),jt.vertexUv2s=c.has(2),jt.vertexUv3s=c.has(3),c.clear(),jt}function h(S){let x=[];if(S.shaderID?x.push(S.shaderID):(x.push(S.customVertexShaderID),x.push(S.customFragmentShaderID)),S.defines!==void 0)for(let A in S.defines)x.push(A),x.push(S.defines[A]);return S.isRawShaderMaterial===!1&&(E(x,S),w(x,S),x.push(i.outputColorSpace)),x.push(S.customProgramCacheKey),x.join()}function E(S,x){S.push(x.precision),S.push(x.outputColorSpace),S.push(x.envMapMode),S.push(x.envMapCubeUVHeight),S.push(x.mapUv),S.push(x.alphaMapUv),S.push(x.lightMapUv),S.push(x.aoMapUv),S.push(x.bumpMapUv),S.push(x.normalMapUv),S.push(x.displacementMapUv),S.push(x.emissiveMapUv),S.push(x.metalnessMapUv),S.push(x.roughnessMapUv),S.push(x.anisotropyMapUv),S.push(x.clearcoatMapUv),S.push(x.clearcoatNormalMapUv),S.push(x.clearcoatRoughnessMapUv),S.push(x.iridescenceMapUv),S.push(x.iridescenceThicknessMapUv),S.push(x.sheenColorMapUv),S.push(x.sheenRoughnessMapUv),S.push(x.specularMapUv),S.push(x.specularColorMapUv),S.push(x.specularIntensityMapUv),S.push(x.transmissionMapUv),S.push(x.thicknessMapUv),S.push(x.combine),S.push(x.fogExp2),S.push(x.sizeAttenuation),S.push(x.morphTargetsCount),S.push(x.morphAttributeCount),S.push(x.numDirLights),S.push(x.numPointLights),S.push(x.numSpotLights),S.push(x.numSpotLightMaps),S.push(x.numHemiLights),S.push(x.numRectAreaLights),S.push(x.numDirLightShadows),S.push(x.numPointLightShadows),S.push(x.numSpotLightShadows),S.push(x.numSpotLightShadowsWithMaps),S.push(x.numLightProbes),S.push(x.shadowMapType),S.push(x.toneMapping),S.push(x.numClippingPlanes),S.push(x.numClipIntersection),S.push(x.depthPacking)}function w(S,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reverseDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),S.push(a.mask)}function M(S){let x=g[S.type],A;if(x){let j=jn[x];A=Fy.clone(j.uniforms)}else A=S.uniforms;return A}function B(S,x){let A;for(let j=0,H=u.length;j<H;j++){let K=u[j];if(K.cacheKey===x){A=K,++A.usedTimes;break}}return A===void 0&&(A=new Hb(i,x,S,s),u.push(A)),A}function I(S){if(--S.usedTimes===0){let x=u.indexOf(S);u[x]=u[u.length-1],u.pop(),S.destroy()}}function C(S){l.remove(S)}function F(){l.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:M,acquireProgram:B,releaseProgram:I,releaseShaderCache:C,programs:u,dispose:F}}function $b(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function Xb(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Nm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Um(){let i=[],e=0,t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(d,f,m,g,y,p){let h=i[e];return h===void 0?(h={id:d.id,object:d,geometry:f,material:m,groupOrder:g,renderOrder:d.renderOrder,z:y,group:p},i[e]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=m,h.groupOrder=g,h.renderOrder=d.renderOrder,h.z=y,h.group=p),e++,h}function a(d,f,m,g,y,p){let h=o(d,f,m,g,y,p);m.transmission>0?n.push(h):m.transparent===!0?r.push(h):t.push(h)}function l(d,f,m,g,y,p){let h=o(d,f,m,g,y,p);m.transmission>0?n.unshift(h):m.transparent===!0?r.unshift(h):t.unshift(h)}function c(d,f){t.length>1&&t.sort(d||Xb),n.length>1&&n.sort(f||Nm),r.length>1&&r.sort(f||Nm)}function u(){for(let d=e,f=i.length;d<f;d++){let m=i[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function jb(){let i=new WeakMap;function e(n,r){let s=i.get(n),o;return s===void 0?(o=new Um,i.set(n,[o])):r>=s.length?(o=new Um,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function qb(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new tt};break;case"SpotLight":t={position:new z,direction:new z,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new tt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":t={color:new tt,position:new z,halfWidth:new z,halfHeight:new z};break}return i[e.id]=t,t}}}function Yb(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Zb=0;function Jb(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Kb(i){let e=new qb,t=Yb(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new z);let r=new z,s=new Ut,o=new Ut;function a(c){let u=0,d=0,f=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let m=0,g=0,y=0,p=0,h=0,E=0,w=0,M=0,B=0,I=0,C=0;c.sort(Jb);for(let S=0,x=c.length;S<x;S++){let A=c[S],j=A.color,H=A.intensity,K=A.distance,Q=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)u+=j.r*H,d+=j.g*H,f+=j.b*H;else if(A.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(A.sh.coefficients[Y],H);C++}else if(A.isDirectionalLight){let Y=e.get(A);if(Y.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let te=A.shadow,W=t.get(A);W.shadowIntensity=te.intensity,W.shadowBias=te.bias,W.shadowNormalBias=te.normalBias,W.shadowRadius=te.radius,W.shadowMapSize=te.mapSize,n.directionalShadow[m]=W,n.directionalShadowMap[m]=Q,n.directionalShadowMatrix[m]=A.shadow.matrix,E++}n.directional[m]=Y,m++}else if(A.isSpotLight){let Y=e.get(A);Y.position.setFromMatrixPosition(A.matrixWorld),Y.color.copy(j).multiplyScalar(H),Y.distance=K,Y.coneCos=Math.cos(A.angle),Y.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),Y.decay=A.decay,n.spot[y]=Y;let te=A.shadow;if(A.map&&(n.spotLightMap[B]=A.map,B++,te.updateMatrices(A),A.castShadow&&I++),n.spotLightMatrix[y]=te.matrix,A.castShadow){let W=t.get(A);W.shadowIntensity=te.intensity,W.shadowBias=te.bias,W.shadowNormalBias=te.normalBias,W.shadowRadius=te.radius,W.shadowMapSize=te.mapSize,n.spotShadow[y]=W,n.spotShadowMap[y]=Q,M++}y++}else if(A.isRectAreaLight){let Y=e.get(A);Y.color.copy(j).multiplyScalar(H),Y.halfWidth.set(A.width*.5,0,0),Y.halfHeight.set(0,A.height*.5,0),n.rectArea[p]=Y,p++}else if(A.isPointLight){let Y=e.get(A);if(Y.color.copy(A.color).multiplyScalar(A.intensity),Y.distance=A.distance,Y.decay=A.decay,A.castShadow){let te=A.shadow,W=t.get(A);W.shadowIntensity=te.intensity,W.shadowBias=te.bias,W.shadowNormalBias=te.normalBias,W.shadowRadius=te.radius,W.shadowMapSize=te.mapSize,W.shadowCameraNear=te.camera.near,W.shadowCameraFar=te.camera.far,n.pointShadow[g]=W,n.pointShadowMap[g]=Q,n.pointShadowMatrix[g]=A.shadow.matrix,w++}n.point[g]=Y,g++}else if(A.isHemisphereLight){let Y=e.get(A);Y.skyColor.copy(A.color).multiplyScalar(H),Y.groundColor.copy(A.groundColor).multiplyScalar(H),n.hemi[h]=Y,h++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=oe.LTC_FLOAT_1,n.rectAreaLTC2=oe.LTC_FLOAT_2):(n.rectAreaLTC1=oe.LTC_HALF_1,n.rectAreaLTC2=oe.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=f;let F=n.hash;(F.directionalLength!==m||F.pointLength!==g||F.spotLength!==y||F.rectAreaLength!==p||F.hemiLength!==h||F.numDirectionalShadows!==E||F.numPointShadows!==w||F.numSpotShadows!==M||F.numSpotMaps!==B||F.numLightProbes!==C)&&(n.directional.length=m,n.spot.length=y,n.rectArea.length=p,n.point.length=g,n.hemi.length=h,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=M+B-I,n.spotLightMap.length=B,n.numSpotLightShadowsWithMaps=I,n.numLightProbes=C,F.directionalLength=m,F.pointLength=g,F.spotLength=y,F.rectAreaLength=p,F.hemiLength=h,F.numDirectionalShadows=E,F.numPointShadows=w,F.numSpotShadows=M,F.numSpotMaps=B,F.numLightProbes=C,n.version=Zb++)}function l(c,u){let d=0,f=0,m=0,g=0,y=0,p=u.matrixWorldInverse;for(let h=0,E=c.length;h<E;h++){let w=c[h];if(w.isDirectionalLight){let M=n.directional[d];M.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(p),d++}else if(w.isSpotLight){let M=n.spot[m];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(p),m++}else if(w.isRectAreaLight){let M=n.rectArea[g];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(p),o.identity(),s.copy(w.matrixWorld),s.premultiply(p),o.extractRotation(s),M.halfWidth.set(w.width*.5,0,0),M.halfHeight.set(0,w.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(w.isPointLight){let M=n.point[f];M.position.setFromMatrixPosition(w.matrixWorld),M.position.applyMatrix4(p),f++}else if(w.isHemisphereLight){let M=n.hemi[y];M.direction.setFromMatrixPosition(w.matrixWorld),M.direction.transformDirection(p),y++}}}return{setup:a,setupView:l,state:n}}function km(i){let e=new Kb(i),t=[],n=[];function r(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function Qb(i){let e=new WeakMap;function t(r,s=0){let o=e.get(r),a;return o===void 0?(a=new km(i),e.set(r,[a])):s>=o.length?(a=new km(i),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var th=class extends xr{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=sy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},nh=class extends xr{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},ew=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function nw(i,e,t){let n=new Sl,r=new gt,s=new gt,o=new Ot,a=new th({depthPacking:oy}),l=new nh,c={},u=t.maxTextureSize,d={[Vi]:ln,[ln]:Vi,[fi]:fi},f=new Yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new gt},radius:{value:4}},vertexShader:ew,fragmentShader:tw}),m=f.clone();m.defines.HORIZONTAL_PASS=1;let g=new kn;g.setAttribute("position",new Jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Nn(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hm;let h=this.type;this.render=function(I,C,F){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||I.length===0)return;let S=i.getRenderTarget(),x=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),j=i.state;j.setBlending(ki),j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);let H=h!==di&&this.type===di,K=h===di&&this.type!==di;for(let Q=0,Y=I.length;Q<Y;Q++){let te=I[Q],W=te.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;r.copy(W.mapSize);let le=W.getFrameExtents();if(r.multiply(le),s.copy(W.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/le.x),r.x=s.x*le.x,W.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/le.y),r.y=s.y*le.y,W.mapSize.y=s.y)),W.map===null||H===!0||K===!0){let Ce=this.type!==di?{minFilter:Un,magFilter:Un}:{};W.map!==null&&W.map.dispose(),W.map=new yi(r.x,r.y,Ce),W.map.texture.name=te.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();let me=W.getViewportCount();for(let Ce=0;Ce<me;Ce++){let Ge=W.getViewport(Ce);o.set(s.x*Ge.x,s.y*Ge.y,s.x*Ge.z,s.y*Ge.w),j.viewport(o),W.updateMatrices(te,Ce),n=W.getFrustum(),M(C,F,W.camera,te,this.type)}W.isPointLightShadow!==!0&&this.type===di&&E(W,F),W.needsUpdate=!1}h=this.type,p.needsUpdate=!1,i.setRenderTarget(S,x,A)};function E(I,C){let F=e.update(y);f.defines.VSM_SAMPLES!==I.blurSamples&&(f.defines.VSM_SAMPLES=I.blurSamples,m.defines.VSM_SAMPLES=I.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new yi(r.x,r.y)),f.uniforms.shadow_pass.value=I.map.texture,f.uniforms.resolution.value=I.mapSize,f.uniforms.radius.value=I.radius,i.setRenderTarget(I.mapPass),i.clear(),i.renderBufferDirect(C,null,F,f,y,null),m.uniforms.shadow_pass.value=I.mapPass.texture,m.uniforms.resolution.value=I.mapSize,m.uniforms.radius.value=I.radius,i.setRenderTarget(I.map),i.clear(),i.renderBufferDirect(C,null,F,m,y,null)}function w(I,C,F,S){let x=null,A=F.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(A!==void 0)x=A;else if(x=F.isPointLight===!0?l:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){let j=x.uuid,H=C.uuid,K=c[j];K===void 0&&(K={},c[j]=K);let Q=K[H];Q===void 0&&(Q=x.clone(),K[H]=Q,C.addEventListener("dispose",B)),x=Q}if(x.visible=C.visible,x.wireframe=C.wireframe,S===di?x.side=C.shadowSide!==null?C.shadowSide:C.side:x.side=C.shadowSide!==null?C.shadowSide:d[C.side],x.alphaMap=C.alphaMap,x.alphaTest=C.alphaTest,x.map=C.map,x.clipShadows=C.clipShadows,x.clippingPlanes=C.clippingPlanes,x.clipIntersection=C.clipIntersection,x.displacementMap=C.displacementMap,x.displacementScale=C.displacementScale,x.displacementBias=C.displacementBias,x.wireframeLinewidth=C.wireframeLinewidth,x.linewidth=C.linewidth,F.isPointLight===!0&&x.isMeshDistanceMaterial===!0){let j=i.properties.get(x);j.light=F}return x}function M(I,C,F,S,x){if(I.visible===!1)return;if(I.layers.test(C.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&x===di)&&(!I.frustumCulled||n.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,I.matrixWorld);let H=e.update(I),K=I.material;if(Array.isArray(K)){let Q=H.groups;for(let Y=0,te=Q.length;Y<te;Y++){let W=Q[Y],le=K[W.materialIndex];if(le&&le.visible){let me=w(I,le,S,x);I.onBeforeShadow(i,I,C,F,H,me,W),i.renderBufferDirect(F,null,H,me,I,W),I.onAfterShadow(i,I,C,F,H,me,W)}}}else if(K.visible){let Q=w(I,K,S,x);I.onBeforeShadow(i,I,C,F,H,Q,null),i.renderBufferDirect(F,null,H,Q,I,null),I.onAfterShadow(i,I,C,F,H,Q,null)}}let j=I.children;for(let H=0,K=j.length;H<K;H++)M(j[H],C,F,S,x)}function B(I){I.target.removeEventListener("dispose",B);for(let F in c){let S=c[F],x=I.target.uuid;x in S&&(S[x].dispose(),delete S[x])}}}var iw={[rd]:sd,[od]:cd,[ad]:ud,[xs]:ld,[sd]:rd,[cd]:od,[ud]:ad,[ld]:xs};function rw(i,e){function t(){let T=!1,ae=new Ot,G=null,J=new Ot(0,0,0,0);return{setMask:function(fe){G!==fe&&!T&&(i.colorMask(fe,fe,fe,fe),G=fe)},setLocked:function(fe){T=fe},setClear:function(fe,de,ke,At,jt){jt===!0&&(fe*=At,de*=At,ke*=At),ae.set(fe,de,ke,At),J.equals(ae)===!1&&(i.clearColor(fe,de,ke,At),J.copy(ae))},reset:function(){T=!1,G=null,J.set(-1,0,0,0)}}}function n(){let T=!1,ae=!1,G=null,J=null,fe=null;return{setReversed:function(de){if(ae!==de){let ke=e.get("EXT_clip_control");ae?ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.ZERO_TO_ONE_EXT):ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.NEGATIVE_ONE_TO_ONE_EXT);let At=fe;fe=null,this.setClear(At)}ae=de},getReversed:function(){return ae},setTest:function(de){de?ce(i.DEPTH_TEST):Ie(i.DEPTH_TEST)},setMask:function(de){G!==de&&!T&&(i.depthMask(de),G=de)},setFunc:function(de){if(ae&&(de=iw[de]),J!==de){switch(de){case rd:i.depthFunc(i.NEVER);break;case sd:i.depthFunc(i.ALWAYS);break;case od:i.depthFunc(i.LESS);break;case xs:i.depthFunc(i.LEQUAL);break;case ad:i.depthFunc(i.EQUAL);break;case ld:i.depthFunc(i.GEQUAL);break;case cd:i.depthFunc(i.GREATER);break;case ud:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}J=de}},setLocked:function(de){T=de},setClear:function(de){fe!==de&&(ae&&(de=1-de),i.clearDepth(de),fe=de)},reset:function(){T=!1,G=null,J=null,fe=null,ae=!1}}}function r(){let T=!1,ae=null,G=null,J=null,fe=null,de=null,ke=null,At=null,jt=null;return{setTest:function(ot){T||(ot?ce(i.STENCIL_TEST):Ie(i.STENCIL_TEST))},setMask:function(ot){ae!==ot&&!T&&(i.stencilMask(ot),ae=ot)},setFunc:function(ot,An,Zn){(G!==ot||J!==An||fe!==Zn)&&(i.stencilFunc(ot,An,Zn),G=ot,J=An,fe=Zn)},setOp:function(ot,An,Zn){(de!==ot||ke!==An||At!==Zn)&&(i.stencilOp(ot,An,Zn),de=ot,ke=An,At=Zn)},setLocked:function(ot){T=ot},setClear:function(ot){jt!==ot&&(i.clearStencil(ot),jt=ot)},reset:function(){T=!1,ae=null,G=null,J=null,fe=null,de=null,ke=null,At=null,jt=null}}}let s=new t,o=new n,a=new r,l=new WeakMap,c=new WeakMap,u={},d={},f=new WeakMap,m=[],g=null,y=!1,p=null,h=null,E=null,w=null,M=null,B=null,I=null,C=new tt(0,0,0),F=0,S=!1,x=null,A=null,j=null,H=null,K=null,Q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=!1,te=0,W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(W)[1]),Y=te>=1):W.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),Y=te>=2);let le=null,me={},Ce=i.getParameter(i.SCISSOR_BOX),Ge=i.getParameter(i.VIEWPORT),mt=new Ot().fromArray(Ce),q=new Ot().fromArray(Ge);function se(T,ae,G,J){let fe=new Uint8Array(4),de=i.createTexture();i.bindTexture(T,de),i.texParameteri(T,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(T,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ke=0;ke<G;ke++)T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY?i.texImage3D(ae,0,i.RGBA,1,1,J,0,i.RGBA,i.UNSIGNED_BYTE,fe):i.texImage2D(ae+ke,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,fe);return de}let Se={};Se[i.TEXTURE_2D]=se(i.TEXTURE_2D,i.TEXTURE_2D,1),Se[i.TEXTURE_CUBE_MAP]=se(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Se[i.TEXTURE_2D_ARRAY]=se(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Se[i.TEXTURE_3D]=se(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ce(i.DEPTH_TEST),o.setFunc(xs),Xe(!1),je(Bp),ce(i.CULL_FACE),P(ki);function ce(T){u[T]!==!0&&(i.enable(T),u[T]=!0)}function Ie(T){u[T]!==!1&&(i.disable(T),u[T]=!1)}function Ue(T,ae){return d[T]!==ae?(i.bindFramebuffer(T,ae),d[T]=ae,T===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ae),T===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ae),!0):!1}function We(T,ae){let G=m,J=!1;if(T){G=f.get(ae),G===void 0&&(G=[],f.set(ae,G));let fe=T.textures;if(G.length!==fe.length||G[0]!==i.COLOR_ATTACHMENT0){for(let de=0,ke=fe.length;de<ke;de++)G[de]=i.COLOR_ATTACHMENT0+de;G.length=fe.length,J=!0}}else G[0]!==i.BACK&&(G[0]=i.BACK,J=!0);J&&i.drawBuffers(G)}function Et(T){return g!==T?(i.useProgram(T),g=T,!0):!1}let Ze={[fr]:i.FUNC_ADD,[P_]:i.FUNC_SUBTRACT,[O_]:i.FUNC_REVERSE_SUBTRACT};Ze[F_]=i.MIN,Ze[L_]=i.MAX;let Tt={[N_]:i.ZERO,[U_]:i.ONE,[k_]:i.SRC_COLOR,[nd]:i.SRC_ALPHA,[W_]:i.SRC_ALPHA_SATURATE,[H_]:i.DST_COLOR,[V_]:i.DST_ALPHA,[B_]:i.ONE_MINUS_SRC_COLOR,[id]:i.ONE_MINUS_SRC_ALPHA,[G_]:i.ONE_MINUS_DST_COLOR,[z_]:i.ONE_MINUS_DST_ALPHA,[$_]:i.CONSTANT_COLOR,[X_]:i.ONE_MINUS_CONSTANT_COLOR,[j_]:i.CONSTANT_ALPHA,[q_]:i.ONE_MINUS_CONSTANT_ALPHA};function P(T,ae,G,J,fe,de,ke,At,jt,ot){if(T===ki){y===!0&&(Ie(i.BLEND),y=!1);return}if(y===!1&&(ce(i.BLEND),y=!0),T!==I_){if(T!==p||ot!==S){if((h!==fr||M!==fr)&&(i.blendEquation(i.FUNC_ADD),h=fr,M=fr),ot)switch(T){case gs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Vp:i.blendFunc(i.ONE,i.ONE);break;case zp:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Hp:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",T);break}else switch(T){case gs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Vp:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case zp:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Hp:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",T);break}E=null,w=null,B=null,I=null,C.set(0,0,0),F=0,p=T,S=ot}return}fe=fe||ae,de=de||G,ke=ke||J,(ae!==h||fe!==M)&&(i.blendEquationSeparate(Ze[ae],Ze[fe]),h=ae,M=fe),(G!==E||J!==w||de!==B||ke!==I)&&(i.blendFuncSeparate(Tt[G],Tt[J],Tt[de],Tt[ke]),E=G,w=J,B=de,I=ke),(At.equals(C)===!1||jt!==F)&&(i.blendColor(At.r,At.g,At.b,jt),C.copy(At),F=jt),p=T,S=!1}function mn(T,ae){T.side===fi?Ie(i.CULL_FACE):ce(i.CULL_FACE);let G=T.side===ln;ae&&(G=!G),Xe(G),T.blending===gs&&T.transparent===!1?P(ki):P(T.blending,T.blendEquation,T.blendSrc,T.blendDst,T.blendEquationAlpha,T.blendSrcAlpha,T.blendDstAlpha,T.blendColor,T.blendAlpha,T.premultipliedAlpha),o.setFunc(T.depthFunc),o.setTest(T.depthTest),o.setMask(T.depthWrite),s.setMask(T.colorWrite);let J=T.stencilWrite;a.setTest(J),J&&(a.setMask(T.stencilWriteMask),a.setFunc(T.stencilFunc,T.stencilRef,T.stencilFuncMask),a.setOp(T.stencilFail,T.stencilZFail,T.stencilZPass)),St(T.polygonOffset,T.polygonOffsetFactor,T.polygonOffsetUnits),T.alphaToCoverage===!0?ce(i.SAMPLE_ALPHA_TO_COVERAGE):Ie(i.SAMPLE_ALPHA_TO_COVERAGE)}function Xe(T){x!==T&&(T?i.frontFace(i.CW):i.frontFace(i.CCW),x=T)}function je(T){T!==T_?(ce(i.CULL_FACE),T!==A&&(T===Bp?i.cullFace(i.BACK):T===D_?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ie(i.CULL_FACE),A=T}function Te(T){T!==j&&(Y&&i.lineWidth(T),j=T)}function St(T,ae,G){T?(ce(i.POLYGON_OFFSET_FILL),(H!==ae||K!==G)&&(i.polygonOffset(ae,G),H=ae,K=G)):Ie(i.POLYGON_OFFSET_FILL)}function Ae(T){T?ce(i.SCISSOR_TEST):Ie(i.SCISSOR_TEST)}function b(T){T===void 0&&(T=i.TEXTURE0+Q-1),le!==T&&(i.activeTexture(T),le=T)}function v(T,ae,G){G===void 0&&(le===null?G=i.TEXTURE0+Q-1:G=le);let J=me[G];J===void 0&&(J={type:void 0,texture:void 0},me[G]=J),(J.type!==T||J.texture!==ae)&&(le!==G&&(i.activeTexture(G),le=G),i.bindTexture(T,ae||Se[T]),J.type=T,J.texture=ae)}function N(){let T=me[le];T!==void 0&&T.type!==void 0&&(i.bindTexture(T.type,null),T.type=void 0,T.texture=void 0)}function Z(){try{i.compressedTexImage2D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function ee(){try{i.compressedTexImage3D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function X(){try{i.texSubImage2D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function be(){try{i.texSubImage3D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function ue(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function ge(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Je(){try{i.texStorage2D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function ie(){try{i.texStorage3D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function ve(){try{i.texImage2D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function De(){try{i.texImage3D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Pe(T){mt.equals(T)===!1&&(i.scissor(T.x,T.y,T.z,T.w),mt.copy(T))}function _e(T){q.equals(T)===!1&&(i.viewport(T.x,T.y,T.z,T.w),q.copy(T))}function qe(T,ae){let G=c.get(ae);G===void 0&&(G=new WeakMap,c.set(ae,G));let J=G.get(T);J===void 0&&(J=i.getUniformBlockIndex(ae,T.name),G.set(T,J))}function ze(T,ae){let J=c.get(ae).get(T);l.get(ae)!==J&&(i.uniformBlockBinding(ae,J,T.__bindingPointIndex),l.set(ae,J))}function vt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},le=null,me={},d={},f=new WeakMap,m=[],g=null,y=!1,p=null,h=null,E=null,w=null,M=null,B=null,I=null,C=new tt(0,0,0),F=0,S=!1,x=null,A=null,j=null,H=null,K=null,mt.set(0,0,i.canvas.width,i.canvas.height),q.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ce,disable:Ie,bindFramebuffer:Ue,drawBuffers:We,useProgram:Et,setBlending:P,setMaterial:mn,setFlipSided:Xe,setCullFace:je,setLineWidth:Te,setPolygonOffset:St,setScissorTest:Ae,activeTexture:b,bindTexture:v,unbindTexture:N,compressedTexImage2D:Z,compressedTexImage3D:ee,texImage2D:ve,texImage3D:De,updateUBOMapping:qe,uniformBlockBinding:ze,texStorage2D:Je,texStorage3D:ie,texSubImage2D:X,texSubImage3D:be,compressedTexSubImage2D:ue,compressedTexSubImage3D:ge,scissor:Pe,viewport:_e,reset:vt}}function Bm(i,e,t,n){let r=sw(n);switch(t){case jm:return i*e;case Ym:return i*e;case Zm:return i*e*2;case Jm:return i*e/r.components*r.byteLength;case _h:return i*e/r.components*r.byteLength;case Km:return i*e*2/r.components*r.byteLength;case yh:return i*e*2/r.components*r.byteLength;case qm:return i*e*3/r.components*r.byteLength;case Ln:return i*e*4/r.components*r.byteLength;case xh:return i*e*4/r.components*r.byteLength;case sl:case ol:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case al:case ll:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case gd:case _d:return Math.max(i,16)*Math.max(e,8)/4;case md:case vd:return Math.max(i,8)*Math.max(e,8)/2;case yd:case xd:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Md:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Sd:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case bd:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case wd:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ed:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Cd:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ad:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Td:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Dd:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Rd:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Id:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Pd:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Od:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Fd:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ld:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case cl:case Nd:case Ud:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Qm:case kd:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Bd:case Vd:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function sw(i){switch(i){case _i:case Wm:return{byteLength:1,components:1};case zo:case $m:case Wo:return{byteLength:2,components:1};case gh:case vh:return{byteLength:2,components:4};case _r:case mh:case pi:return{byteLength:4,components:1};case Xm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function ow(i,e,t,n,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new gt,u=new WeakMap,d,f=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,v){return m?new OffscreenCanvas(b,v):hl("canvas")}function y(b,v,N){let Z=1,ee=Ae(b);if((ee.width>N||ee.height>N)&&(Z=N/Math.max(ee.width,ee.height)),Z<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){let X=Math.floor(Z*ee.width),be=Math.floor(Z*ee.height);d===void 0&&(d=g(X,be));let ue=v?g(X,be):d;return ue.width=X,ue.height=be,ue.getContext("2d").drawImage(b,0,0,X,be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+X+"x"+be+")."),ue}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),b;return b}function p(b){return b.generateMipmaps}function h(b){i.generateMipmap(b)}function E(b){return b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?i.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function w(b,v,N,Z,ee=!1){if(b!==null){if(i[b]!==void 0)return i[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let X=v;if(v===i.RED&&(N===i.FLOAT&&(X=i.R32F),N===i.HALF_FLOAT&&(X=i.R16F),N===i.UNSIGNED_BYTE&&(X=i.R8)),v===i.RED_INTEGER&&(N===i.UNSIGNED_BYTE&&(X=i.R8UI),N===i.UNSIGNED_SHORT&&(X=i.R16UI),N===i.UNSIGNED_INT&&(X=i.R32UI),N===i.BYTE&&(X=i.R8I),N===i.SHORT&&(X=i.R16I),N===i.INT&&(X=i.R32I)),v===i.RG&&(N===i.FLOAT&&(X=i.RG32F),N===i.HALF_FLOAT&&(X=i.RG16F),N===i.UNSIGNED_BYTE&&(X=i.RG8)),v===i.RG_INTEGER&&(N===i.UNSIGNED_BYTE&&(X=i.RG8UI),N===i.UNSIGNED_SHORT&&(X=i.RG16UI),N===i.UNSIGNED_INT&&(X=i.RG32UI),N===i.BYTE&&(X=i.RG8I),N===i.SHORT&&(X=i.RG16I),N===i.INT&&(X=i.RG32I)),v===i.RGB_INTEGER&&(N===i.UNSIGNED_BYTE&&(X=i.RGB8UI),N===i.UNSIGNED_SHORT&&(X=i.RGB16UI),N===i.UNSIGNED_INT&&(X=i.RGB32UI),N===i.BYTE&&(X=i.RGB8I),N===i.SHORT&&(X=i.RGB16I),N===i.INT&&(X=i.RGB32I)),v===i.RGBA_INTEGER&&(N===i.UNSIGNED_BYTE&&(X=i.RGBA8UI),N===i.UNSIGNED_SHORT&&(X=i.RGBA16UI),N===i.UNSIGNED_INT&&(X=i.RGBA32UI),N===i.BYTE&&(X=i.RGBA8I),N===i.SHORT&&(X=i.RGBA16I),N===i.INT&&(X=i.RGBA32I)),v===i.RGB&&N===i.UNSIGNED_INT_5_9_9_9_REV&&(X=i.RGB9_E5),v===i.RGBA){let be=ee?Rl:Ke.getTransfer(Z);N===i.FLOAT&&(X=i.RGBA32F),N===i.HALF_FLOAT&&(X=i.RGBA16F),N===i.UNSIGNED_BYTE&&(X=be===pt?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT_4_4_4_4&&(X=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&(X=i.RGB5_A1)}return(X===i.R16F||X===i.R32F||X===i.RG16F||X===i.RG32F||X===i.RGBA16F||X===i.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function M(b,v){let N;return b?v===null||v===_r||v===bs?N=i.DEPTH24_STENCIL8:v===pi?N=i.DEPTH32F_STENCIL8:v===zo&&(N=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===_r||v===bs?N=i.DEPTH_COMPONENT24:v===pi?N=i.DEPTH_COMPONENT32F:v===zo&&(N=i.DEPTH_COMPONENT16),N}function B(b,v){return p(b)===!0||b.isFramebufferTexture&&b.minFilter!==Un&&b.minFilter!==qn?Math.log2(Math.max(v.width,v.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?v.mipmaps.length:1}function I(b){let v=b.target;v.removeEventListener("dispose",I),F(v),v.isVideoTexture&&u.delete(v)}function C(b){let v=b.target;v.removeEventListener("dispose",C),x(v)}function F(b){let v=n.get(b);if(v.__webglInit===void 0)return;let N=b.source,Z=f.get(N);if(Z){let ee=Z[v.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&S(b),Object.keys(Z).length===0&&f.delete(N)}n.remove(b)}function S(b){let v=n.get(b);i.deleteTexture(v.__webglTexture);let N=b.source,Z=f.get(N);delete Z[v.__cacheKey],o.memory.textures--}function x(b){let v=n.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),n.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(v.__webglFramebuffer[Z]))for(let ee=0;ee<v.__webglFramebuffer[Z].length;ee++)i.deleteFramebuffer(v.__webglFramebuffer[Z][ee]);else i.deleteFramebuffer(v.__webglFramebuffer[Z]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[Z])}else{if(Array.isArray(v.__webglFramebuffer))for(let Z=0;Z<v.__webglFramebuffer.length;Z++)i.deleteFramebuffer(v.__webglFramebuffer[Z]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let Z=0;Z<v.__webglColorRenderbuffer.length;Z++)v.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[Z]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let N=b.textures;for(let Z=0,ee=N.length;Z<ee;Z++){let X=n.get(N[Z]);X.__webglTexture&&(i.deleteTexture(X.__webglTexture),o.memory.textures--),n.remove(N[Z])}n.remove(b)}let A=0;function j(){A=0}function H(){let b=A;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),A+=1,b}function K(b){let v=[];return v.push(b.wrapS),v.push(b.wrapT),v.push(b.wrapR||0),v.push(b.magFilter),v.push(b.minFilter),v.push(b.anisotropy),v.push(b.internalFormat),v.push(b.format),v.push(b.type),v.push(b.generateMipmaps),v.push(b.premultiplyAlpha),v.push(b.flipY),v.push(b.unpackAlignment),v.push(b.colorSpace),v.join()}function Q(b,v){let N=n.get(b);if(b.isVideoTexture&&Te(b),b.isRenderTargetTexture===!1&&b.version>0&&N.__version!==b.version){let Z=b.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(N,b,v);return}}t.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+v)}function Y(b,v){let N=n.get(b);if(b.version>0&&N.__version!==b.version){q(N,b,v);return}t.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+v)}function te(b,v){let N=n.get(b);if(b.version>0&&N.__version!==b.version){q(N,b,v);return}t.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+v)}function W(b,v){let N=n.get(b);if(b.version>0&&N.__version!==b.version){se(N,b,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+v)}let le={[fd]:i.REPEAT,[gr]:i.CLAMP_TO_EDGE,[pd]:i.MIRRORED_REPEAT},me={[Un]:i.NEAREST,[ry]:i.NEAREST_MIPMAP_NEAREST,[La]:i.NEAREST_MIPMAP_LINEAR,[qn]:i.LINEAR,[Cu]:i.LINEAR_MIPMAP_NEAREST,[vr]:i.LINEAR_MIPMAP_LINEAR},Ce={[cy]:i.NEVER,[my]:i.ALWAYS,[uy]:i.LESS,[eg]:i.LEQUAL,[dy]:i.EQUAL,[py]:i.GEQUAL,[hy]:i.GREATER,[fy]:i.NOTEQUAL};function Ge(b,v){if(v.type===pi&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===qn||v.magFilter===Cu||v.magFilter===La||v.magFilter===vr||v.minFilter===qn||v.minFilter===Cu||v.minFilter===La||v.minFilter===vr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(b,i.TEXTURE_WRAP_S,le[v.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,le[v.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,le[v.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,me[v.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,me[v.minFilter]),v.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,Ce[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Un||v.minFilter!==La&&v.minFilter!==vr||v.type===pi&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let N=e.get("EXT_texture_filter_anisotropic");i.texParameterf(b,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function mt(b,v){let N=!1;b.__webglInit===void 0&&(b.__webglInit=!0,v.addEventListener("dispose",I));let Z=v.source,ee=f.get(Z);ee===void 0&&(ee={},f.set(Z,ee));let X=K(v);if(X!==b.__cacheKey){ee[X]===void 0&&(ee[X]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,N=!0),ee[X].usedTimes++;let be=ee[b.__cacheKey];be!==void 0&&(ee[b.__cacheKey].usedTimes--,be.usedTimes===0&&S(v)),b.__cacheKey=X,b.__webglTexture=ee[X].texture}return N}function q(b,v,N){let Z=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(Z=i.TEXTURE_3D);let ee=mt(b,v),X=v.source;t.bindTexture(Z,b.__webglTexture,i.TEXTURE0+N);let be=n.get(X);if(X.version!==be.__version||ee===!0){t.activeTexture(i.TEXTURE0+N);let ue=Ke.getPrimaries(Ke.workingColorSpace),ge=v.colorSpace===Ui?null:Ke.getPrimaries(v.colorSpace),Je=v.colorSpace===Ui||ue===ge?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Je);let ie=y(v.image,!1,r.maxTextureSize);ie=St(v,ie);let ve=s.convert(v.format,v.colorSpace),De=s.convert(v.type),Pe=w(v.internalFormat,ve,De,v.colorSpace,v.isVideoTexture);Ge(Z,v);let _e,qe=v.mipmaps,ze=v.isVideoTexture!==!0,vt=be.__version===void 0||ee===!0,T=X.dataReady,ae=B(v,ie);if(v.isDepthTexture)Pe=M(v.format===ws,v.type),vt&&(ze?t.texStorage2D(i.TEXTURE_2D,1,Pe,ie.width,ie.height):t.texImage2D(i.TEXTURE_2D,0,Pe,ie.width,ie.height,0,ve,De,null));else if(v.isDataTexture)if(qe.length>0){ze&&vt&&t.texStorage2D(i.TEXTURE_2D,ae,Pe,qe[0].width,qe[0].height);for(let G=0,J=qe.length;G<J;G++)_e=qe[G],ze?T&&t.texSubImage2D(i.TEXTURE_2D,G,0,0,_e.width,_e.height,ve,De,_e.data):t.texImage2D(i.TEXTURE_2D,G,Pe,_e.width,_e.height,0,ve,De,_e.data);v.generateMipmaps=!1}else ze?(vt&&t.texStorage2D(i.TEXTURE_2D,ae,Pe,ie.width,ie.height),T&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ie.width,ie.height,ve,De,ie.data)):t.texImage2D(i.TEXTURE_2D,0,Pe,ie.width,ie.height,0,ve,De,ie.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){ze&&vt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ae,Pe,qe[0].width,qe[0].height,ie.depth);for(let G=0,J=qe.length;G<J;G++)if(_e=qe[G],v.format!==Ln)if(ve!==null)if(ze){if(T)if(v.layerUpdates.size>0){let fe=Bm(_e.width,_e.height,v.format,v.type);for(let de of v.layerUpdates){let ke=_e.data.subarray(de*fe/_e.data.BYTES_PER_ELEMENT,(de+1)*fe/_e.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,de,_e.width,_e.height,1,ve,ke)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,0,_e.width,_e.height,ie.depth,ve,_e.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,G,Pe,_e.width,_e.height,ie.depth,0,_e.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ze?T&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,0,_e.width,_e.height,ie.depth,ve,De,_e.data):t.texImage3D(i.TEXTURE_2D_ARRAY,G,Pe,_e.width,_e.height,ie.depth,0,ve,De,_e.data)}else{ze&&vt&&t.texStorage2D(i.TEXTURE_2D,ae,Pe,qe[0].width,qe[0].height);for(let G=0,J=qe.length;G<J;G++)_e=qe[G],v.format!==Ln?ve!==null?ze?T&&t.compressedTexSubImage2D(i.TEXTURE_2D,G,0,0,_e.width,_e.height,ve,_e.data):t.compressedTexImage2D(i.TEXTURE_2D,G,Pe,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?T&&t.texSubImage2D(i.TEXTURE_2D,G,0,0,_e.width,_e.height,ve,De,_e.data):t.texImage2D(i.TEXTURE_2D,G,Pe,_e.width,_e.height,0,ve,De,_e.data)}else if(v.isDataArrayTexture)if(ze){if(vt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ae,Pe,ie.width,ie.height,ie.depth),T)if(v.layerUpdates.size>0){let G=Bm(ie.width,ie.height,v.format,v.type);for(let J of v.layerUpdates){let fe=ie.data.subarray(J*G/ie.data.BYTES_PER_ELEMENT,(J+1)*G/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,J,ie.width,ie.height,1,ve,De,fe)}v.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,ve,De,ie.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Pe,ie.width,ie.height,ie.depth,0,ve,De,ie.data);else if(v.isData3DTexture)ze?(vt&&t.texStorage3D(i.TEXTURE_3D,ae,Pe,ie.width,ie.height,ie.depth),T&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,ve,De,ie.data)):t.texImage3D(i.TEXTURE_3D,0,Pe,ie.width,ie.height,ie.depth,0,ve,De,ie.data);else if(v.isFramebufferTexture){if(vt)if(ze)t.texStorage2D(i.TEXTURE_2D,ae,Pe,ie.width,ie.height);else{let G=ie.width,J=ie.height;for(let fe=0;fe<ae;fe++)t.texImage2D(i.TEXTURE_2D,fe,Pe,G,J,0,ve,De,null),G>>=1,J>>=1}}else if(qe.length>0){if(ze&&vt){let G=Ae(qe[0]);t.texStorage2D(i.TEXTURE_2D,ae,Pe,G.width,G.height)}for(let G=0,J=qe.length;G<J;G++)_e=qe[G],ze?T&&t.texSubImage2D(i.TEXTURE_2D,G,0,0,ve,De,_e):t.texImage2D(i.TEXTURE_2D,G,Pe,ve,De,_e);v.generateMipmaps=!1}else if(ze){if(vt){let G=Ae(ie);t.texStorage2D(i.TEXTURE_2D,ae,Pe,G.width,G.height)}T&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ve,De,ie)}else t.texImage2D(i.TEXTURE_2D,0,Pe,ve,De,ie);p(v)&&h(Z),be.__version=X.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function se(b,v,N){if(v.image.length!==6)return;let Z=mt(b,v),ee=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+N);let X=n.get(ee);if(ee.version!==X.__version||Z===!0){t.activeTexture(i.TEXTURE0+N);let be=Ke.getPrimaries(Ke.workingColorSpace),ue=v.colorSpace===Ui?null:Ke.getPrimaries(v.colorSpace),ge=v.colorSpace===Ui||be===ue?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);let Je=v.isCompressedTexture||v.image[0].isCompressedTexture,ie=v.image[0]&&v.image[0].isDataTexture,ve=[];for(let J=0;J<6;J++)!Je&&!ie?ve[J]=y(v.image[J],!0,r.maxCubemapSize):ve[J]=ie?v.image[J].image:v.image[J],ve[J]=St(v,ve[J]);let De=ve[0],Pe=s.convert(v.format,v.colorSpace),_e=s.convert(v.type),qe=w(v.internalFormat,Pe,_e,v.colorSpace),ze=v.isVideoTexture!==!0,vt=X.__version===void 0||Z===!0,T=ee.dataReady,ae=B(v,De);Ge(i.TEXTURE_CUBE_MAP,v);let G;if(Je){ze&&vt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ae,qe,De.width,De.height);for(let J=0;J<6;J++){G=ve[J].mipmaps;for(let fe=0;fe<G.length;fe++){let de=G[fe];v.format!==Ln?Pe!==null?ze?T&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,fe,0,0,de.width,de.height,Pe,de.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,fe,qe,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ze?T&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,fe,0,0,de.width,de.height,Pe,_e,de.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,fe,qe,de.width,de.height,0,Pe,_e,de.data)}}}else{if(G=v.mipmaps,ze&&vt){G.length>0&&ae++;let J=Ae(ve[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ae,qe,J.width,J.height)}for(let J=0;J<6;J++)if(ie){ze?T&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,ve[J].width,ve[J].height,Pe,_e,ve[J].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,qe,ve[J].width,ve[J].height,0,Pe,_e,ve[J].data);for(let fe=0;fe<G.length;fe++){let ke=G[fe].image[J].image;ze?T&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,fe+1,0,0,ke.width,ke.height,Pe,_e,ke.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,fe+1,qe,ke.width,ke.height,0,Pe,_e,ke.data)}}else{ze?T&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Pe,_e,ve[J]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,qe,Pe,_e,ve[J]);for(let fe=0;fe<G.length;fe++){let de=G[fe];ze?T&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,fe+1,0,0,Pe,_e,de.image[J]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,fe+1,qe,Pe,_e,de.image[J])}}}p(v)&&h(i.TEXTURE_CUBE_MAP),X.__version=ee.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function Se(b,v,N,Z,ee,X){let be=s.convert(N.format,N.colorSpace),ue=s.convert(N.type),ge=w(N.internalFormat,be,ue,N.colorSpace),Je=n.get(v),ie=n.get(N);if(ie.__renderTarget=v,!Je.__hasExternalTextures){let ve=Math.max(1,v.width>>X),De=Math.max(1,v.height>>X);ee===i.TEXTURE_3D||ee===i.TEXTURE_2D_ARRAY?t.texImage3D(ee,X,ge,ve,De,v.depth,0,be,ue,null):t.texImage2D(ee,X,ge,ve,De,0,be,ue,null)}t.bindFramebuffer(i.FRAMEBUFFER,b),je(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,ee,ie.__webglTexture,0,Xe(v)):(ee===i.TEXTURE_2D||ee>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,ee,ie.__webglTexture,X),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ce(b,v,N){if(i.bindRenderbuffer(i.RENDERBUFFER,b),v.depthBuffer){let Z=v.depthTexture,ee=Z&&Z.isDepthTexture?Z.type:null,X=M(v.stencilBuffer,ee),be=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ue=Xe(v);je(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ue,X,v.width,v.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,ue,X,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,X,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,be,i.RENDERBUFFER,b)}else{let Z=v.textures;for(let ee=0;ee<Z.length;ee++){let X=Z[ee],be=s.convert(X.format,X.colorSpace),ue=s.convert(X.type),ge=w(X.internalFormat,be,ue,X.colorSpace),Je=Xe(v);N&&je(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Je,ge,v.width,v.height):je(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Je,ge,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,ge,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ie(b,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,b),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Z=n.get(v.depthTexture);Z.__renderTarget=v,(!Z.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Q(v.depthTexture,0);let ee=Z.__webglTexture,X=Xe(v);if(v.depthTexture.format===vs)je(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ee,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ee,0);else if(v.depthTexture.format===ws)je(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ee,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function Ue(b){let v=n.get(b),N=b.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==b.depthTexture){let Z=b.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),Z){let ee=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,Z.removeEventListener("dispose",ee)};Z.addEventListener("dispose",ee),v.__depthDisposeCallback=ee}v.__boundDepthTexture=Z}if(b.depthTexture&&!v.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");Ie(v.__webglFramebuffer,b)}else if(N){v.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[Z]),v.__webglDepthbuffer[Z]===void 0)v.__webglDepthbuffer[Z]=i.createRenderbuffer(),ce(v.__webglDepthbuffer[Z],b,!1);else{let ee=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=v.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,ee,i.RENDERBUFFER,X)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),ce(v.__webglDepthbuffer,b,!1);else{let Z=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ee=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ee),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,ee)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function We(b,v,N){let Z=n.get(b);v!==void 0&&Se(Z.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),N!==void 0&&Ue(b)}function Et(b){let v=b.texture,N=n.get(b),Z=n.get(v);b.addEventListener("dispose",C);let ee=b.textures,X=b.isWebGLCubeRenderTarget===!0,be=ee.length>1;if(be||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=v.version,o.memory.textures++),X){N.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(v.mipmaps&&v.mipmaps.length>0){N.__webglFramebuffer[ue]=[];for(let ge=0;ge<v.mipmaps.length;ge++)N.__webglFramebuffer[ue][ge]=i.createFramebuffer()}else N.__webglFramebuffer[ue]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){N.__webglFramebuffer=[];for(let ue=0;ue<v.mipmaps.length;ue++)N.__webglFramebuffer[ue]=i.createFramebuffer()}else N.__webglFramebuffer=i.createFramebuffer();if(be)for(let ue=0,ge=ee.length;ue<ge;ue++){let Je=n.get(ee[ue]);Je.__webglTexture===void 0&&(Je.__webglTexture=i.createTexture(),o.memory.textures++)}if(b.samples>0&&je(b)===!1){N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let ue=0;ue<ee.length;ue++){let ge=ee[ue];N.__webglColorRenderbuffer[ue]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[ue]);let Je=s.convert(ge.format,ge.colorSpace),ie=s.convert(ge.type),ve=w(ge.internalFormat,Je,ie,ge.colorSpace,b.isXRRenderTarget===!0),De=Xe(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,De,ve,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,N.__webglColorRenderbuffer[ue])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),ce(N.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(X){t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),Ge(i.TEXTURE_CUBE_MAP,v);for(let ue=0;ue<6;ue++)if(v.mipmaps&&v.mipmaps.length>0)for(let ge=0;ge<v.mipmaps.length;ge++)Se(N.__webglFramebuffer[ue][ge],b,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ge);else Se(N.__webglFramebuffer[ue],b,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);p(v)&&h(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(be){for(let ue=0,ge=ee.length;ue<ge;ue++){let Je=ee[ue],ie=n.get(Je);t.bindTexture(i.TEXTURE_2D,ie.__webglTexture),Ge(i.TEXTURE_2D,Je),Se(N.__webglFramebuffer,b,Je,i.COLOR_ATTACHMENT0+ue,i.TEXTURE_2D,0),p(Je)&&h(i.TEXTURE_2D)}t.unbindTexture()}else{let ue=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ue=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ue,Z.__webglTexture),Ge(ue,v),v.mipmaps&&v.mipmaps.length>0)for(let ge=0;ge<v.mipmaps.length;ge++)Se(N.__webglFramebuffer[ge],b,v,i.COLOR_ATTACHMENT0,ue,ge);else Se(N.__webglFramebuffer,b,v,i.COLOR_ATTACHMENT0,ue,0);p(v)&&h(ue),t.unbindTexture()}b.depthBuffer&&Ue(b)}function Ze(b){let v=b.textures;for(let N=0,Z=v.length;N<Z;N++){let ee=v[N];if(p(ee)){let X=E(b),be=n.get(ee).__webglTexture;t.bindTexture(X,be),h(X),t.unbindTexture()}}}let Tt=[],P=[];function mn(b){if(b.samples>0){if(je(b)===!1){let v=b.textures,N=b.width,Z=b.height,ee=i.COLOR_BUFFER_BIT,X=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,be=n.get(b),ue=v.length>1;if(ue)for(let ge=0;ge<v.length;ge++)t.bindFramebuffer(i.FRAMEBUFFER,be.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,be.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let ge=0;ge<v.length;ge++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(ee|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(ee|=i.STENCIL_BUFFER_BIT)),ue){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,be.__webglColorRenderbuffer[ge]);let Je=n.get(v[ge]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Je,0)}i.blitFramebuffer(0,0,N,Z,0,0,N,Z,ee,i.NEAREST),l===!0&&(Tt.length=0,P.length=0,Tt.push(i.COLOR_ATTACHMENT0+ge),b.depthBuffer&&b.resolveDepthBuffer===!1&&(Tt.push(X),P.push(X),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,P)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Tt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ue)for(let ge=0;ge<v.length;ge++){t.bindFramebuffer(i.FRAMEBUFFER,be.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.RENDERBUFFER,be.__webglColorRenderbuffer[ge]);let Je=n.get(v[ge]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,be.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.TEXTURE_2D,Je,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){let v=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function Xe(b){return Math.min(r.maxSamples,b.samples)}function je(b){let v=n.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Te(b){let v=o.render.frame;u.get(b)!==v&&(u.set(b,v),b.update())}function St(b,v){let N=b.colorSpace,Z=b.format,ee=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||N!==Rs&&N!==Ui&&(Ke.getTransfer(N)===pt?(Z!==Ln||ee!==_i)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),v}function Ae(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=j,this.setTexture2D=Q,this.setTexture2DArray=Y,this.setTexture3D=te,this.setTextureCube=W,this.rebindTextures=We,this.setupRenderTarget=Et,this.updateRenderTargetMipmap=Ze,this.updateMultisampleRenderTarget=mn,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=je}function aw(i,e){function t(n,r=Ui){let s,o=Ke.getTransfer(r);if(n===_i)return i.UNSIGNED_BYTE;if(n===gh)return i.UNSIGNED_SHORT_4_4_4_4;if(n===vh)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Xm)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Wm)return i.BYTE;if(n===$m)return i.SHORT;if(n===zo)return i.UNSIGNED_SHORT;if(n===mh)return i.INT;if(n===_r)return i.UNSIGNED_INT;if(n===pi)return i.FLOAT;if(n===Wo)return i.HALF_FLOAT;if(n===jm)return i.ALPHA;if(n===qm)return i.RGB;if(n===Ln)return i.RGBA;if(n===Ym)return i.LUMINANCE;if(n===Zm)return i.LUMINANCE_ALPHA;if(n===vs)return i.DEPTH_COMPONENT;if(n===ws)return i.DEPTH_STENCIL;if(n===Jm)return i.RED;if(n===_h)return i.RED_INTEGER;if(n===Km)return i.RG;if(n===yh)return i.RG_INTEGER;if(n===xh)return i.RGBA_INTEGER;if(n===sl||n===ol||n===al||n===ll)if(o===pt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===sl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ol)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===al)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ll)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===sl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ol)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===al)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ll)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===md||n===gd||n===vd||n===_d)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===md)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===gd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===vd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===_d)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===yd||n===xd||n===Md)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===yd||n===xd)return o===pt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Md)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Sd||n===bd||n===wd||n===Ed||n===Cd||n===Ad||n===Td||n===Dd||n===Rd||n===Id||n===Pd||n===Od||n===Fd||n===Ld)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Sd)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===bd)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===wd)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ed)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Cd)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ad)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Td)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Dd)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Rd)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Id)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Pd)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Od)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Fd)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ld)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===cl||n===Nd||n===Ud)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===cl)return o===pt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Nd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ud)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Qm||n===kd||n===Bd||n===Vd)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===cl)return s.COMPRESSED_RED_RGTC1_EXT;if(n===kd)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Bd)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Vd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===bs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var ih=class extends tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},ms=class extends wr{constructor(){super(),this.isGroup=!0,this.type="Group"}},lw={type:"move"},Vo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ms,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ms,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ms,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let y of e.hand.values()){let p=t.getJointPose(y,n),h=this._getHandJoint(c,y);p!==null&&(h.matrix.fromArray(p.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=p.radius),h.visible=p!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),m=.02,g=.005;c.inputState.pinching&&f>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(lw)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new ms;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},cw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,uw=`
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

}`,rh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let r=new br,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Yn({vertexShader:cw,fragmentShader:uw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Nn(new bl(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},sh=class extends zi{constructor(e,t){super();let n=this,r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,m=null,g=null,y=new rh,p=t.getContextAttributes(),h=null,E=null,w=[],M=[],B=new gt,I=null,C=new tn;C.viewport=new Ot;let F=new tn;F.viewport=new Ot;let S=[C,F],x=new ih,A=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let se=w[q];return se===void 0&&(se=new Vo,w[q]=se),se.getTargetRaySpace()},this.getControllerGrip=function(q){let se=w[q];return se===void 0&&(se=new Vo,w[q]=se),se.getGripSpace()},this.getHand=function(q){let se=w[q];return se===void 0&&(se=new Vo,w[q]=se),se.getHandSpace()};function H(q){let se=M.indexOf(q.inputSource);if(se===-1)return;let Se=w[se];Se!==void 0&&(Se.update(q.inputSource,q.frame,c||o),Se.dispatchEvent({type:q.type,data:q.inputSource}))}function K(){r.removeEventListener("select",H),r.removeEventListener("selectstart",H),r.removeEventListener("selectend",H),r.removeEventListener("squeeze",H),r.removeEventListener("squeezestart",H),r.removeEventListener("squeezeend",H),r.removeEventListener("end",K),r.removeEventListener("inputsourceschange",Q);for(let q=0;q<w.length;q++){let se=M[q];se!==null&&(M[q]=null,w[q].disconnect(se))}A=null,j=null,y.reset(),e.setRenderTarget(h),m=null,f=null,d=null,r=null,E=null,mt.stop(),n.isPresenting=!1,e.setPixelRatio(I),e.setSize(B.width,B.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=function(q){return zn(this,null,function*(){if(r=q,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",H),r.addEventListener("selectstart",H),r.addEventListener("selectend",H),r.addEventListener("squeeze",H),r.addEventListener("squeezestart",H),r.addEventListener("squeezeend",H),r.addEventListener("end",K),r.addEventListener("inputsourceschange",Q),p.xrCompatible!==!0&&(yield t.makeXRCompatible()),I=e.getPixelRatio(),e.getSize(B),r.renderState.layers===void 0){let se={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,se),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),E=new yi(m.framebufferWidth,m.framebufferHeight,{format:Ln,type:_i,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let se=null,Se=null,ce=null;p.depth&&(ce=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=p.stencil?ws:vs,Se=p.stencil?bs:_r);let Ie={colorFormat:t.RGBA8,depthFormat:ce,scaleFactor:s};d=new XRWebGLBinding(r,t),f=d.createProjectionLayer(Ie),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),E=new yi(f.textureWidth,f.textureHeight,{format:Ln,type:_i,depthTexture:new El(f.textureWidth,f.textureHeight,Se,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=yield r.requestReferenceSpace(a),mt.setContext(r),mt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}})},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function Q(q){for(let se=0;se<q.removed.length;se++){let Se=q.removed[se],ce=M.indexOf(Se);ce>=0&&(M[ce]=null,w[ce].disconnect(Se))}for(let se=0;se<q.added.length;se++){let Se=q.added[se],ce=M.indexOf(Se);if(ce===-1){for(let Ue=0;Ue<w.length;Ue++)if(Ue>=M.length){M.push(Se),ce=Ue;break}else if(M[Ue]===null){M[Ue]=Se,ce=Ue;break}if(ce===-1)break}let Ie=w[ce];Ie&&Ie.connect(Se)}}let Y=new z,te=new z;function W(q,se,Se){Y.setFromMatrixPosition(se.matrixWorld),te.setFromMatrixPosition(Se.matrixWorld);let ce=Y.distanceTo(te),Ie=se.projectionMatrix.elements,Ue=Se.projectionMatrix.elements,We=Ie[14]/(Ie[10]-1),Et=Ie[14]/(Ie[10]+1),Ze=(Ie[9]+1)/Ie[5],Tt=(Ie[9]-1)/Ie[5],P=(Ie[8]-1)/Ie[0],mn=(Ue[8]+1)/Ue[0],Xe=We*P,je=We*mn,Te=ce/(-P+mn),St=Te*-P;if(se.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(St),q.translateZ(Te),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Ie[10]===-1)q.projectionMatrix.copy(se.projectionMatrix),q.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{let Ae=We+Te,b=Et+Te,v=Xe-St,N=je+(ce-St),Z=Ze*Et/b*Ae,ee=Tt*Et/b*Ae;q.projectionMatrix.makePerspective(v,N,Z,ee,Ae,b),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function le(q,se){se===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(se.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;let se=q.near,Se=q.far;y.texture!==null&&(y.depthNear>0&&(se=y.depthNear),y.depthFar>0&&(Se=y.depthFar)),x.near=F.near=C.near=se,x.far=F.far=C.far=Se,(A!==x.near||j!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),A=x.near,j=x.far),C.layers.mask=q.layers.mask|2,F.layers.mask=q.layers.mask|4,x.layers.mask=C.layers.mask|F.layers.mask;let ce=q.parent,Ie=x.cameras;le(x,ce);for(let Ue=0;Ue<Ie.length;Ue++)le(Ie[Ue],ce);Ie.length===2?W(x,C,F):x.projectionMatrix.copy(C.projectionMatrix),me(q,x,ce)};function me(q,se,Se){Se===null?q.matrix.copy(se.matrixWorld):(q.matrix.copy(Se.matrixWorld),q.matrix.invert(),q.matrix.multiply(se.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(se.projectionMatrix),q.projectionMatrixInverse.copy(se.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Hd*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=q)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(x)};let Ce=null;function Ge(q,se){if(u=se.getViewerPose(c||o),g=se,u!==null){let Se=u.views;m!==null&&(e.setRenderTargetFramebuffer(E,m.framebuffer),e.setRenderTarget(E));let ce=!1;Se.length!==x.cameras.length&&(x.cameras.length=0,ce=!0);for(let Ue=0;Ue<Se.length;Ue++){let We=Se[Ue],Et=null;if(m!==null)Et=m.getViewport(We);else{let Tt=d.getViewSubImage(f,We);Et=Tt.viewport,Ue===0&&(e.setRenderTargetTextures(E,Tt.colorTexture,f.ignoreDepthValues?void 0:Tt.depthStencilTexture),e.setRenderTarget(E))}let Ze=S[Ue];Ze===void 0&&(Ze=new tn,Ze.layers.enable(Ue),Ze.viewport=new Ot,S[Ue]=Ze),Ze.matrix.fromArray(We.transform.matrix),Ze.matrix.decompose(Ze.position,Ze.quaternion,Ze.scale),Ze.projectionMatrix.fromArray(We.projectionMatrix),Ze.projectionMatrixInverse.copy(Ze.projectionMatrix).invert(),Ze.viewport.set(Et.x,Et.y,Et.width,Et.height),Ue===0&&(x.matrix.copy(Ze.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),ce===!0&&x.cameras.push(Ze)}let Ie=r.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")){let Ue=d.getDepthInformation(Se[0]);Ue&&Ue.isValid&&Ue.texture&&y.init(e,Ue,r.renderState)}}for(let Se=0;Se<w.length;Se++){let ce=M[Se],Ie=w[Se];ce!==null&&Ie!==void 0&&Ie.update(ce,se,c||o)}Ce&&Ce(q,se),se.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:se}),g=null}let mt=new rg;mt.setAnimationLoop(Ge),this.setAnimationLoop=function(q){Ce=q},this.dispose=function(){}}},dr=new Cs,dw=new Ut;function hw(i,e){function t(p,h){p.matrixAutoUpdate===!0&&p.updateMatrix(),h.value.copy(p.matrix)}function n(p,h){h.color.getRGB(p.fogColor.value,ig(i)),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function r(p,h,E,w,M){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(p,h):h.isMeshToonMaterial?(s(p,h),d(p,h)):h.isMeshPhongMaterial?(s(p,h),u(p,h)):h.isMeshStandardMaterial?(s(p,h),f(p,h),h.isMeshPhysicalMaterial&&m(p,h,M)):h.isMeshMatcapMaterial?(s(p,h),g(p,h)):h.isMeshDepthMaterial?s(p,h):h.isMeshDistanceMaterial?(s(p,h),y(p,h)):h.isMeshNormalMaterial?s(p,h):h.isLineBasicMaterial?(o(p,h),h.isLineDashedMaterial&&a(p,h)):h.isPointsMaterial?l(p,h,E,w):h.isSpriteMaterial?c(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.bumpMap&&(p.bumpMap.value=h.bumpMap,t(h.bumpMap,p.bumpMapTransform),p.bumpScale.value=h.bumpScale,h.side===ln&&(p.bumpScale.value*=-1)),h.normalMap&&(p.normalMap.value=h.normalMap,t(h.normalMap,p.normalMapTransform),p.normalScale.value.copy(h.normalScale),h.side===ln&&p.normalScale.value.negate()),h.displacementMap&&(p.displacementMap.value=h.displacementMap,t(h.displacementMap,p.displacementMapTransform),p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,p.emissiveMapTransform)),h.specularMap&&(p.specularMap.value=h.specularMap,t(h.specularMap,p.specularMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);let E=e.get(h),w=E.envMap,M=E.envMapRotation;w&&(p.envMap.value=w,dr.copy(M),dr.x*=-1,dr.y*=-1,dr.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(dr.y*=-1,dr.z*=-1),p.envMapRotation.value.setFromMatrix4(dw.makeRotationFromEuler(dr)),p.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap&&(p.lightMap.value=h.lightMap,p.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,p.lightMapTransform)),h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,p.aoMapTransform))}function o(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform))}function a(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function l(p,h,E,w){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*E,p.scale.value=w*.5,h.map&&(p.map.value=h.map,t(h.map,p.uvTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function c(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function u(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function d(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function f(p,h){p.metalness.value=h.metalness,h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,p.metalnessMapTransform)),p.roughness.value=h.roughness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,p.roughnessMapTransform)),h.envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function m(p,h,E){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,p.sheenColorMapTransform)),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,p.sheenRoughnessMapTransform))),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,p.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(p.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===ln&&p.clearcoatNormalScale.value.negate())),h.dispersion>0&&(p.dispersion.value=h.dispersion),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,p.iridescenceMapTransform)),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=E.texture,p.transmissionSamplerSize.value.set(E.width,E.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,p.transmissionMapTransform)),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(p.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(p.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,p.specularColorMapTransform)),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,h){h.matcap&&(p.matcap.value=h.matcap)}function y(p,h){let E=e.get(h).light;p.referencePosition.value.setFromMatrixPosition(E.matrixWorld),p.nearDistance.value=E.shadow.camera.near,p.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function fw(i,e,t,n){let r={},s={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,w){let M=w.program;n.uniformBlockBinding(E,M)}function c(E,w){let M=r[E.id];M===void 0&&(g(E),M=u(E),r[E.id]=M,E.addEventListener("dispose",p));let B=w.program;n.updateUBOMapping(E,B);let I=e.render.frame;s[E.id]!==I&&(f(E),s[E.id]=I)}function u(E){let w=d();E.__bindingPointIndex=w;let M=i.createBuffer(),B=E.__size,I=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,B,I),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,M),M}function d(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){let w=r[E.id],M=E.uniforms,B=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let I=0,C=M.length;I<C;I++){let F=Array.isArray(M[I])?M[I]:[M[I]];for(let S=0,x=F.length;S<x;S++){let A=F[S];if(m(A,I,S,B)===!0){let j=A.__offset,H=Array.isArray(A.value)?A.value:[A.value],K=0;for(let Q=0;Q<H.length;Q++){let Y=H[Q],te=y(Y);typeof Y=="number"||typeof Y=="boolean"?(A.__data[0]=Y,i.bufferSubData(i.UNIFORM_BUFFER,j+K,A.__data)):Y.isMatrix3?(A.__data[0]=Y.elements[0],A.__data[1]=Y.elements[1],A.__data[2]=Y.elements[2],A.__data[3]=0,A.__data[4]=Y.elements[3],A.__data[5]=Y.elements[4],A.__data[6]=Y.elements[5],A.__data[7]=0,A.__data[8]=Y.elements[6],A.__data[9]=Y.elements[7],A.__data[10]=Y.elements[8],A.__data[11]=0):(Y.toArray(A.__data,K),K+=te.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,j,A.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(E,w,M,B){let I=E.value,C=w+"_"+M;if(B[C]===void 0)return typeof I=="number"||typeof I=="boolean"?B[C]=I:B[C]=I.clone(),!0;{let F=B[C];if(typeof I=="number"||typeof I=="boolean"){if(F!==I)return B[C]=I,!0}else if(F.equals(I)===!1)return F.copy(I),!0}return!1}function g(E){let w=E.uniforms,M=0,B=16;for(let C=0,F=w.length;C<F;C++){let S=Array.isArray(w[C])?w[C]:[w[C]];for(let x=0,A=S.length;x<A;x++){let j=S[x],H=Array.isArray(j.value)?j.value:[j.value];for(let K=0,Q=H.length;K<Q;K++){let Y=H[K],te=y(Y),W=M%B,le=W%te.boundary,me=W+le;M+=le,me!==0&&B-me<te.storage&&(M+=B-me),j.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=M,M+=te.storage}}}let I=M%B;return I>0&&(M+=B-I),E.__size=M,E.__cache={},this}function y(E){let w={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(w.boundary=4,w.storage=4):E.isVector2?(w.boundary=8,w.storage=8):E.isVector3||E.isColor?(w.boundary=16,w.storage=12):E.isVector4?(w.boundary=16,w.storage=16):E.isMatrix3?(w.boundary=48,w.storage=48):E.isMatrix4?(w.boundary=64,w.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),w}function p(E){let w=E.target;w.removeEventListener("dispose",p);let M=o.indexOf(w.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(r[w.id]),delete r[w.id],delete s[w.id]}function h(){for(let E in r)i.deleteBuffer(r[E]);o=[],r={},s={}}return{bind:l,update:c,dispose:h}}var Cl=class{constructor(e={}){let{canvas:t=vy(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;let g=new Uint32Array(4),y=new Int32Array(4),p=null,h=null,E=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Cn,this.toneMapping=Bi,this.toneMappingExposure=1;let M=this,B=!1,I=0,C=0,F=null,S=-1,x=null,A=new Ot,j=new Ot,H=null,K=new tt(0),Q=0,Y=t.width,te=t.height,W=1,le=null,me=null,Ce=new Ot(0,0,Y,te),Ge=new Ot(0,0,Y,te),mt=!1,q=new Sl,se=!1,Se=!1,ce=new Ut,Ie=new Ut,Ue=new z,We=new Ot,Et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ze=!1;function Tt(){return F===null?W:1}let P=n;function mn(_,D){return t.getContext(_,D)}try{let _={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r170"),t.addEventListener("webglcontextlost",J,!1),t.addEventListener("webglcontextrestored",fe,!1),t.addEventListener("webglcontextcreationerror",de,!1),P===null){let D="webgl2";if(P=mn(D,_),P===null)throw mn(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(_){throw console.error("THREE.WebGLRenderer: "+_.message),_}let Xe,je,Te,St,Ae,b,v,N,Z,ee,X,be,ue,ge,Je,ie,ve,De,Pe,_e,qe,ze,vt,T;function ae(){Xe=new DS(P),Xe.init(),ze=new aw(P,Xe),je=new bS(P,Xe,e,ze),Te=new rw(P,Xe),je.reverseDepthBuffer&&f&&Te.buffers.depth.setReversed(!0),St=new PS(P),Ae=new $b,b=new ow(P,Xe,Te,Ae,je,ze,St),v=new ES(M),N=new TS(M),Z=new By(P),vt=new MS(P,Z),ee=new RS(P,Z,St,vt),X=new FS(P,ee,Z,St),Pe=new OS(P,je,b),ie=new wS(Ae),be=new Wb(M,v,N,Xe,je,vt,ie),ue=new hw(M,Ae),ge=new jb,Je=new Qb(Xe),De=new xS(M,v,N,Te,X,m,l),ve=new nw(M,X,je),T=new fw(P,St,je,Te),_e=new SS(P,Xe,St),qe=new IS(P,Xe,St),St.programs=be.programs,M.capabilities=je,M.extensions=Xe,M.properties=Ae,M.renderLists=ge,M.shadowMap=ve,M.state=Te,M.info=St}ae();let G=new sh(M,P);this.xr=G,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let _=Xe.get("WEBGL_lose_context");_&&_.loseContext()},this.forceContextRestore=function(){let _=Xe.get("WEBGL_lose_context");_&&_.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(_){_!==void 0&&(W=_,this.setSize(Y,te,!1))},this.getSize=function(_){return _.set(Y,te)},this.setSize=function(_,D,k=!0){if(G.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=_,te=D,t.width=Math.floor(_*W),t.height=Math.floor(D*W),k===!0&&(t.style.width=_+"px",t.style.height=D+"px"),this.setViewport(0,0,_,D)},this.getDrawingBufferSize=function(_){return _.set(Y*W,te*W).floor()},this.setDrawingBufferSize=function(_,D,k){Y=_,te=D,W=k,t.width=Math.floor(_*k),t.height=Math.floor(D*k),this.setViewport(0,0,_,D)},this.getCurrentViewport=function(_){return _.copy(A)},this.getViewport=function(_){return _.copy(Ce)},this.setViewport=function(_,D,k,V){_.isVector4?Ce.set(_.x,_.y,_.z,_.w):Ce.set(_,D,k,V),Te.viewport(A.copy(Ce).multiplyScalar(W).round())},this.getScissor=function(_){return _.copy(Ge)},this.setScissor=function(_,D,k,V){_.isVector4?Ge.set(_.x,_.y,_.z,_.w):Ge.set(_,D,k,V),Te.scissor(j.copy(Ge).multiplyScalar(W).round())},this.getScissorTest=function(){return mt},this.setScissorTest=function(_){Te.setScissorTest(mt=_)},this.setOpaqueSort=function(_){le=_},this.setTransparentSort=function(_){me=_},this.getClearColor=function(_){return _.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor.apply(De,arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha.apply(De,arguments)},this.clear=function(_=!0,D=!0,k=!0){let V=0;if(_){let R=!1;if(F!==null){let re=F.texture.format;R=re===xh||re===yh||re===_h}if(R){let re=F.texture.type,he=re===_i||re===_r||re===zo||re===bs||re===gh||re===vh,ye=De.getClearColor(),xe=De.getClearAlpha(),Oe=ye.r,Be=ye.g,Me=ye.b;he?(g[0]=Oe,g[1]=Be,g[2]=Me,g[3]=xe,P.clearBufferuiv(P.COLOR,0,g)):(y[0]=Oe,y[1]=Be,y[2]=Me,y[3]=xe,P.clearBufferiv(P.COLOR,0,y))}else V|=P.COLOR_BUFFER_BIT}D&&(V|=P.DEPTH_BUFFER_BIT),k&&(V|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",J,!1),t.removeEventListener("webglcontextrestored",fe,!1),t.removeEventListener("webglcontextcreationerror",de,!1),ge.dispose(),Je.dispose(),Ae.dispose(),v.dispose(),N.dispose(),X.dispose(),vt.dispose(),T.dispose(),be.dispose(),G.dispose(),G.removeEventListener("sessionstart",Nh),G.removeEventListener("sessionend",Uh),$i.stop()};function J(_){_.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),B=!0}function fe(){console.log("THREE.WebGLRenderer: Context Restored."),B=!1;let _=St.autoReset,D=ve.enabled,k=ve.autoUpdate,V=ve.needsUpdate,R=ve.type;ae(),St.autoReset=_,ve.enabled=D,ve.autoUpdate=k,ve.needsUpdate=V,ve.type=R}function de(_){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",_.statusMessage)}function ke(_){let D=_.target;D.removeEventListener("dispose",ke),At(D)}function At(_){jt(_),Ae.remove(_)}function jt(_){let D=Ae.get(_).programs;D!==void 0&&(D.forEach(function(k){be.releaseProgram(k)}),_.isShaderMaterial&&be.releaseShaderCache(_))}this.renderBufferDirect=function(_,D,k,V,R,re){D===null&&(D=Et);let he=R.isMesh&&R.matrixWorld.determinant()<0,ye=Hg(_,D,k,V,R);Te.setMaterial(V,he);let xe=k.index,Oe=1;if(V.wireframe===!0){if(xe=ee.getWireframeAttribute(k),xe===void 0)return;Oe=2}let Be=k.drawRange,Me=k.attributes.position,Qe=Be.start*Oe,_t=(Be.start+Be.count)*Oe;re!==null&&(Qe=Math.max(Qe,re.start*Oe),_t=Math.min(_t,(re.start+re.count)*Oe)),xe!==null?(Qe=Math.max(Qe,0),_t=Math.min(_t,xe.count)):Me!=null&&(Qe=Math.max(Qe,0),_t=Math.min(_t,Me.count));let bt=_t-Qe;if(bt<0||bt===1/0)return;vt.setup(R,V,ye,k,xe);let nn,nt=_e;if(xe!==null&&(nn=Z.get(xe),nt=qe,nt.setIndex(nn)),R.isMesh)V.wireframe===!0?(Te.setLineWidth(V.wireframeLinewidth*Tt()),nt.setMode(P.LINES)):nt.setMode(P.TRIANGLES);else if(R.isLine){let we=V.linewidth;we===void 0&&(we=1),Te.setLineWidth(we*Tt()),R.isLineSegments?nt.setMode(P.LINES):R.isLineLoop?nt.setMode(P.LINE_LOOP):nt.setMode(P.LINE_STRIP)}else R.isPoints?nt.setMode(P.POINTS):R.isSprite&&nt.setMode(P.TRIANGLES);if(R.isBatchedMesh)if(R._multiDrawInstances!==null)nt.renderMultiDrawInstances(R._multiDrawStarts,R._multiDrawCounts,R._multiDrawCount,R._multiDrawInstances);else if(Xe.get("WEBGL_multi_draw"))nt.renderMultiDraw(R._multiDrawStarts,R._multiDrawCounts,R._multiDrawCount);else{let we=R._multiDrawStarts,Jn=R._multiDrawCounts,it=R._multiDrawCount,Tn=xe?Z.get(xe).bytesPerElement:1,Tr=Ae.get(V).currentProgram.getUniforms();for(let cn=0;cn<it;cn++)Tr.setValue(P,"_gl_DrawID",cn),nt.render(we[cn]/Tn,Jn[cn])}else if(R.isInstancedMesh)nt.renderInstances(Qe,bt,R.count);else if(k.isInstancedBufferGeometry){let we=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Jn=Math.min(k.instanceCount,we);nt.renderInstances(Qe,bt,Jn)}else nt.render(Qe,bt)};function ot(_,D,k){_.transparent===!0&&_.side===fi&&_.forceSinglePass===!1?(_.side=ln,_.needsUpdate=!0,Qo(_,D,k),_.side=Vi,_.needsUpdate=!0,Qo(_,D,k),_.side=fi):Qo(_,D,k)}this.compile=function(_,D,k=null){k===null&&(k=_),h=Je.get(k),h.init(D),w.push(h),k.traverseVisible(function(R){R.isLight&&R.layers.test(D.layers)&&(h.pushLight(R),R.castShadow&&h.pushShadow(R))}),_!==k&&_.traverseVisible(function(R){R.isLight&&R.layers.test(D.layers)&&(h.pushLight(R),R.castShadow&&h.pushShadow(R))}),h.setupLights();let V=new Set;return _.traverse(function(R){if(!(R.isMesh||R.isPoints||R.isLine||R.isSprite))return;let re=R.material;if(re)if(Array.isArray(re))for(let he=0;he<re.length;he++){let ye=re[he];ot(ye,k,R),V.add(ye)}else ot(re,k,R),V.add(re)}),w.pop(),h=null,V},this.compileAsync=function(_,D,k=null){let V=this.compile(_,D,k);return new Promise(R=>{function re(){if(V.forEach(function(he){Ae.get(he).currentProgram.isReady()&&V.delete(he)}),V.size===0){R(_);return}setTimeout(re,10)}Xe.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let An=null;function Zn(_){An&&An(_)}function Nh(){$i.stop()}function Uh(){$i.start()}let $i=new rg;$i.setAnimationLoop(Zn),typeof self<"u"&&$i.setContext(self),this.setAnimationLoop=function(_){An=_,G.setAnimationLoop(_),_===null?$i.stop():$i.start()},G.addEventListener("sessionstart",Nh),G.addEventListener("sessionend",Uh),this.render=function(_,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;if(_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),G.enabled===!0&&G.isPresenting===!0&&(G.cameraAutoUpdate===!0&&G.updateCamera(D),D=G.getCamera()),_.isScene===!0&&_.onBeforeRender(M,_,D,F),h=Je.get(_,w.length),h.init(D),w.push(h),Ie.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),q.setFromProjectionMatrix(Ie),Se=this.localClippingEnabled,se=ie.init(this.clippingPlanes,Se),p=ge.get(_,E.length),p.init(),E.push(p),G.enabled===!0&&G.isPresenting===!0){let re=M.xr.getDepthSensingMesh();re!==null&&rc(re,D,-1/0,M.sortObjects)}rc(_,D,0,M.sortObjects),p.finish(),M.sortObjects===!0&&p.sort(le,me),Ze=G.enabled===!1||G.isPresenting===!1||G.hasDepthSensing()===!1,Ze&&De.addToRenderList(p,_),this.info.render.frame++,se===!0&&ie.beginShadows();let k=h.state.shadowsArray;ve.render(k,_,D),se===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();let V=p.opaque,R=p.transmissive;if(h.setupLights(),D.isArrayCamera){let re=D.cameras;if(R.length>0)for(let he=0,ye=re.length;he<ye;he++){let xe=re[he];Bh(V,R,_,xe)}Ze&&De.render(_);for(let he=0,ye=re.length;he<ye;he++){let xe=re[he];kh(p,_,xe,xe.viewport)}}else R.length>0&&Bh(V,R,_,D),Ze&&De.render(_),kh(p,_,D);F!==null&&(b.updateMultisampleRenderTarget(F),b.updateRenderTargetMipmap(F)),_.isScene===!0&&_.onAfterRender(M,_,D),vt.resetDefaultState(),S=-1,x=null,w.pop(),w.length>0?(h=w[w.length-1],se===!0&&ie.setGlobalState(M.clippingPlanes,h.state.camera)):h=null,E.pop(),E.length>0?p=E[E.length-1]:p=null};function rc(_,D,k,V){if(_.visible===!1)return;if(_.layers.test(D.layers)){if(_.isGroup)k=_.renderOrder;else if(_.isLOD)_.autoUpdate===!0&&_.update(D);else if(_.isLight)h.pushLight(_),_.castShadow&&h.pushShadow(_);else if(_.isSprite){if(!_.frustumCulled||q.intersectsSprite(_)){V&&We.setFromMatrixPosition(_.matrixWorld).applyMatrix4(Ie);let he=X.update(_),ye=_.material;ye.visible&&p.push(_,he,ye,k,We.z,null)}}else if((_.isMesh||_.isLine||_.isPoints)&&(!_.frustumCulled||q.intersectsObject(_))){let he=X.update(_),ye=_.material;if(V&&(_.boundingSphere!==void 0?(_.boundingSphere===null&&_.computeBoundingSphere(),We.copy(_.boundingSphere.center)):(he.boundingSphere===null&&he.computeBoundingSphere(),We.copy(he.boundingSphere.center)),We.applyMatrix4(_.matrixWorld).applyMatrix4(Ie)),Array.isArray(ye)){let xe=he.groups;for(let Oe=0,Be=xe.length;Oe<Be;Oe++){let Me=xe[Oe],Qe=ye[Me.materialIndex];Qe&&Qe.visible&&p.push(_,he,Qe,k,We.z,Me)}}else ye.visible&&p.push(_,he,ye,k,We.z,null)}}let re=_.children;for(let he=0,ye=re.length;he<ye;he++)rc(re[he],D,k,V)}function kh(_,D,k,V){let R=_.opaque,re=_.transmissive,he=_.transparent;h.setupLightsView(k),se===!0&&ie.setGlobalState(M.clippingPlanes,k),V&&Te.viewport(A.copy(V)),R.length>0&&Ko(R,D,k),re.length>0&&Ko(re,D,k),he.length>0&&Ko(he,D,k),Te.buffers.depth.setTest(!0),Te.buffers.depth.setMask(!0),Te.buffers.color.setMask(!0),Te.setPolygonOffset(!1)}function Bh(_,D,k,V){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[V.id]===void 0&&(h.state.transmissionRenderTarget[V.id]=new yi(1,1,{generateMipmaps:!0,type:Xe.has("EXT_color_buffer_half_float")||Xe.has("EXT_color_buffer_float")?Wo:_i,minFilter:vr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ke.workingColorSpace}));let re=h.state.transmissionRenderTarget[V.id],he=V.viewport||A;re.setSize(he.z,he.w);let ye=M.getRenderTarget();M.setRenderTarget(re),M.getClearColor(K),Q=M.getClearAlpha(),Q<1&&M.setClearColor(16777215,.5),M.clear(),Ze&&De.render(k);let xe=M.toneMapping;M.toneMapping=Bi;let Oe=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),h.setupLightsView(V),se===!0&&ie.setGlobalState(M.clippingPlanes,V),Ko(_,k,V),b.updateMultisampleRenderTarget(re),b.updateRenderTargetMipmap(re),Xe.has("WEBGL_multisampled_render_to_texture")===!1){let Be=!1;for(let Me=0,Qe=D.length;Me<Qe;Me++){let _t=D[Me],bt=_t.object,nn=_t.geometry,nt=_t.material,we=_t.group;if(nt.side===fi&&bt.layers.test(V.layers)){let Jn=nt.side;nt.side=ln,nt.needsUpdate=!0,Vh(bt,k,V,nn,nt,we),nt.side=Jn,nt.needsUpdate=!0,Be=!0}}Be===!0&&(b.updateMultisampleRenderTarget(re),b.updateRenderTargetMipmap(re))}M.setRenderTarget(ye),M.setClearColor(K,Q),Oe!==void 0&&(V.viewport=Oe),M.toneMapping=xe}function Ko(_,D,k){let V=D.isScene===!0?D.overrideMaterial:null;for(let R=0,re=_.length;R<re;R++){let he=_[R],ye=he.object,xe=he.geometry,Oe=V===null?he.material:V,Be=he.group;ye.layers.test(k.layers)&&Vh(ye,D,k,xe,Oe,Be)}}function Vh(_,D,k,V,R,re){_.onBeforeRender(M,D,k,V,R,re),_.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,_.matrixWorld),_.normalMatrix.getNormalMatrix(_.modelViewMatrix),R.onBeforeRender(M,D,k,V,_,re),R.transparent===!0&&R.side===fi&&R.forceSinglePass===!1?(R.side=ln,R.needsUpdate=!0,M.renderBufferDirect(k,D,V,R,_,re),R.side=Vi,R.needsUpdate=!0,M.renderBufferDirect(k,D,V,R,_,re),R.side=fi):M.renderBufferDirect(k,D,V,R,_,re),_.onAfterRender(M,D,k,V,R,re)}function Qo(_,D,k){D.isScene!==!0&&(D=Et);let V=Ae.get(_),R=h.state.lights,re=h.state.shadowsArray,he=R.state.version,ye=be.getParameters(_,R.state,re,D,k),xe=be.getProgramCacheKey(ye),Oe=V.programs;V.environment=_.isMeshStandardMaterial?D.environment:null,V.fog=D.fog,V.envMap=(_.isMeshStandardMaterial?N:v).get(_.envMap||V.environment),V.envMapRotation=V.environment!==null&&_.envMap===null?D.environmentRotation:_.envMapRotation,Oe===void 0&&(_.addEventListener("dispose",ke),Oe=new Map,V.programs=Oe);let Be=Oe.get(xe);if(Be!==void 0){if(V.currentProgram===Be&&V.lightsStateVersion===he)return Hh(_,ye),Be}else ye.uniforms=be.getUniforms(_),_.onBeforeCompile(ye,M),Be=be.acquireProgram(ye,xe),Oe.set(xe,Be),V.uniforms=ye.uniforms;let Me=V.uniforms;return(!_.isShaderMaterial&&!_.isRawShaderMaterial||_.clipping===!0)&&(Me.clippingPlanes=ie.uniform),Hh(_,ye),V.needsLights=Wg(_),V.lightsStateVersion=he,V.needsLights&&(Me.ambientLightColor.value=R.state.ambient,Me.lightProbe.value=R.state.probe,Me.directionalLights.value=R.state.directional,Me.directionalLightShadows.value=R.state.directionalShadow,Me.spotLights.value=R.state.spot,Me.spotLightShadows.value=R.state.spotShadow,Me.rectAreaLights.value=R.state.rectArea,Me.ltc_1.value=R.state.rectAreaLTC1,Me.ltc_2.value=R.state.rectAreaLTC2,Me.pointLights.value=R.state.point,Me.pointLightShadows.value=R.state.pointShadow,Me.hemisphereLights.value=R.state.hemi,Me.directionalShadowMap.value=R.state.directionalShadowMap,Me.directionalShadowMatrix.value=R.state.directionalShadowMatrix,Me.spotShadowMap.value=R.state.spotShadowMap,Me.spotLightMatrix.value=R.state.spotLightMatrix,Me.spotLightMap.value=R.state.spotLightMap,Me.pointShadowMap.value=R.state.pointShadowMap,Me.pointShadowMatrix.value=R.state.pointShadowMatrix),V.currentProgram=Be,V.uniformsList=null,Be}function zh(_){if(_.uniformsList===null){let D=_.currentProgram.getUniforms();_.uniformsList=ys.seqWithValue(D.seq,_.uniforms)}return _.uniformsList}function Hh(_,D){let k=Ae.get(_);k.outputColorSpace=D.outputColorSpace,k.batching=D.batching,k.batchingColor=D.batchingColor,k.instancing=D.instancing,k.instancingColor=D.instancingColor,k.instancingMorph=D.instancingMorph,k.skinning=D.skinning,k.morphTargets=D.morphTargets,k.morphNormals=D.morphNormals,k.morphColors=D.morphColors,k.morphTargetsCount=D.morphTargetsCount,k.numClippingPlanes=D.numClippingPlanes,k.numIntersection=D.numClipIntersection,k.vertexAlphas=D.vertexAlphas,k.vertexTangents=D.vertexTangents,k.toneMapping=D.toneMapping}function Hg(_,D,k,V,R){D.isScene!==!0&&(D=Et),b.resetTextureUnits();let re=D.fog,he=V.isMeshStandardMaterial?D.environment:null,ye=F===null?M.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Rs,xe=(V.isMeshStandardMaterial?N:v).get(V.envMap||he),Oe=V.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Be=!!k.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Me=!!k.morphAttributes.position,Qe=!!k.morphAttributes.normal,_t=!!k.morphAttributes.color,bt=Bi;V.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(bt=M.toneMapping);let nn=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,nt=nn!==void 0?nn.length:0,we=Ae.get(V),Jn=h.state.lights;if(se===!0&&(Se===!0||_!==x)){let gn=_===x&&V.id===S;ie.setState(V,_,gn)}let it=!1;V.version===we.__version?(we.needsLights&&we.lightsStateVersion!==Jn.state.version||we.outputColorSpace!==ye||R.isBatchedMesh&&we.batching===!1||!R.isBatchedMesh&&we.batching===!0||R.isBatchedMesh&&we.batchingColor===!0&&R.colorTexture===null||R.isBatchedMesh&&we.batchingColor===!1&&R.colorTexture!==null||R.isInstancedMesh&&we.instancing===!1||!R.isInstancedMesh&&we.instancing===!0||R.isSkinnedMesh&&we.skinning===!1||!R.isSkinnedMesh&&we.skinning===!0||R.isInstancedMesh&&we.instancingColor===!0&&R.instanceColor===null||R.isInstancedMesh&&we.instancingColor===!1&&R.instanceColor!==null||R.isInstancedMesh&&we.instancingMorph===!0&&R.morphTexture===null||R.isInstancedMesh&&we.instancingMorph===!1&&R.morphTexture!==null||we.envMap!==xe||V.fog===!0&&we.fog!==re||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==ie.numPlanes||we.numIntersection!==ie.numIntersection)||we.vertexAlphas!==Oe||we.vertexTangents!==Be||we.morphTargets!==Me||we.morphNormals!==Qe||we.morphColors!==_t||we.toneMapping!==bt||we.morphTargetsCount!==nt)&&(it=!0):(it=!0,we.__version=V.version);let Tn=we.currentProgram;it===!0&&(Tn=Qo(V,D,R));let Tr=!1,cn=!1,qs=!1,wt=Tn.getUniforms(),Vn=we.uniforms;if(Te.useProgram(Tn.program)&&(Tr=!0,cn=!0,qs=!0),V.id!==S&&(S=V.id,cn=!0),Tr||x!==_){Te.buffers.depth.getReversed()?(ce.copy(_.projectionMatrix),yy(ce),xy(ce),wt.setValue(P,"projectionMatrix",ce)):wt.setValue(P,"projectionMatrix",_.projectionMatrix),wt.setValue(P,"viewMatrix",_.matrixWorldInverse);let xi=wt.map.cameraPosition;xi!==void 0&&xi.setValue(P,Ue.setFromMatrixPosition(_.matrixWorld)),je.logarithmicDepthBuffer&&wt.setValue(P,"logDepthBufFC",2/(Math.log(_.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&wt.setValue(P,"isOrthographic",_.isOrthographicCamera===!0),x!==_&&(x=_,cn=!0,qs=!0)}if(R.isSkinnedMesh){wt.setOptional(P,R,"bindMatrix"),wt.setOptional(P,R,"bindMatrixInverse");let gn=R.skeleton;gn&&(gn.boneTexture===null&&gn.computeBoneTexture(),wt.setValue(P,"boneTexture",gn.boneTexture,b))}R.isBatchedMesh&&(wt.setOptional(P,R,"batchingTexture"),wt.setValue(P,"batchingTexture",R._matricesTexture,b),wt.setOptional(P,R,"batchingIdTexture"),wt.setValue(P,"batchingIdTexture",R._indirectTexture,b),wt.setOptional(P,R,"batchingColorTexture"),R._colorsTexture!==null&&wt.setValue(P,"batchingColorTexture",R._colorsTexture,b));let Ys=k.morphAttributes;if((Ys.position!==void 0||Ys.normal!==void 0||Ys.color!==void 0)&&Pe.update(R,k,Tn),(cn||we.receiveShadow!==R.receiveShadow)&&(we.receiveShadow=R.receiveShadow,wt.setValue(P,"receiveShadow",R.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Vn.envMap.value=xe,Vn.flipEnvMap.value=xe.isCubeTexture&&xe.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&D.environment!==null&&(Vn.envMapIntensity.value=D.environmentIntensity),cn&&(wt.setValue(P,"toneMappingExposure",M.toneMappingExposure),we.needsLights&&Gg(Vn,qs),re&&V.fog===!0&&ue.refreshFogUniforms(Vn,re),ue.refreshMaterialUniforms(Vn,V,W,te,h.state.transmissionRenderTarget[_.id]),ys.upload(P,zh(we),Vn,b)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(ys.upload(P,zh(we),Vn,b),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&wt.setValue(P,"center",R.center),wt.setValue(P,"modelViewMatrix",R.modelViewMatrix),wt.setValue(P,"normalMatrix",R.normalMatrix),wt.setValue(P,"modelMatrix",R.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){let gn=V.uniformsGroups;for(let xi=0,Mi=gn.length;xi<Mi;xi++){let Gh=gn[xi];T.update(Gh,Tn),T.bind(Gh,Tn)}}return Tn}function Gg(_,D){_.ambientLightColor.needsUpdate=D,_.lightProbe.needsUpdate=D,_.directionalLights.needsUpdate=D,_.directionalLightShadows.needsUpdate=D,_.pointLights.needsUpdate=D,_.pointLightShadows.needsUpdate=D,_.spotLights.needsUpdate=D,_.spotLightShadows.needsUpdate=D,_.rectAreaLights.needsUpdate=D,_.hemisphereLights.needsUpdate=D}function Wg(_){return _.isMeshLambertMaterial||_.isMeshToonMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isShadowMaterial||_.isShaderMaterial&&_.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(_,D,k){Ae.get(_.texture).__webglTexture=D,Ae.get(_.depthTexture).__webglTexture=k;let V=Ae.get(_);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=k===void 0,V.__autoAllocateDepthBuffer||Xe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(_,D){let k=Ae.get(_);k.__webglFramebuffer=D,k.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(_,D=0,k=0){F=_,I=D,C=k;let V=!0,R=null,re=!1,he=!1;if(_){let xe=Ae.get(_);if(xe.__useDefaultFramebuffer!==void 0)Te.bindFramebuffer(P.FRAMEBUFFER,null),V=!1;else if(xe.__webglFramebuffer===void 0)b.setupRenderTarget(_);else if(xe.__hasExternalTextures)b.rebindTextures(_,Ae.get(_.texture).__webglTexture,Ae.get(_.depthTexture).__webglTexture);else if(_.depthBuffer){let Me=_.depthTexture;if(xe.__boundDepthTexture!==Me){if(Me!==null&&Ae.has(Me)&&(_.width!==Me.image.width||_.height!==Me.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(_)}}let Oe=_.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(he=!0);let Be=Ae.get(_).__webglFramebuffer;_.isWebGLCubeRenderTarget?(Array.isArray(Be[D])?R=Be[D][k]:R=Be[D],re=!0):_.samples>0&&b.useMultisampledRTT(_)===!1?R=Ae.get(_).__webglMultisampledFramebuffer:Array.isArray(Be)?R=Be[k]:R=Be,A.copy(_.viewport),j.copy(_.scissor),H=_.scissorTest}else A.copy(Ce).multiplyScalar(W).floor(),j.copy(Ge).multiplyScalar(W).floor(),H=mt;if(Te.bindFramebuffer(P.FRAMEBUFFER,R)&&V&&Te.drawBuffers(_,R),Te.viewport(A),Te.scissor(j),Te.setScissorTest(H),re){let xe=Ae.get(_.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+D,xe.__webglTexture,k)}else if(he){let xe=Ae.get(_.texture),Oe=D||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,xe.__webglTexture,k||0,Oe)}S=-1},this.readRenderTargetPixels=function(_,D,k,V,R,re,he){if(!(_&&_.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=Ae.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&he!==void 0&&(ye=ye[he]),ye){Te.bindFramebuffer(P.FRAMEBUFFER,ye);try{let xe=_.texture,Oe=xe.format,Be=xe.type;if(!je.textureFormatReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!je.textureTypeReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=_.width-V&&k>=0&&k<=_.height-R&&P.readPixels(D,k,V,R,ze.convert(Oe),ze.convert(Be),re)}finally{let xe=F!==null?Ae.get(F).__webglFramebuffer:null;Te.bindFramebuffer(P.FRAMEBUFFER,xe)}}},this.readRenderTargetPixelsAsync=function(_,D,k,V,R,re,he){return zn(this,null,function*(){if(!(_&&_.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=Ae.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&he!==void 0&&(ye=ye[he]),ye){let xe=_.texture,Oe=xe.format,Be=xe.type;if(!je.textureFormatReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!je.textureTypeReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=_.width-V&&k>=0&&k<=_.height-R){Te.bindFramebuffer(P.FRAMEBUFFER,ye);let Me=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Me),P.bufferData(P.PIXEL_PACK_BUFFER,re.byteLength,P.STREAM_READ),P.readPixels(D,k,V,R,ze.convert(Oe),ze.convert(Be),0);let Qe=F!==null?Ae.get(F).__webglFramebuffer:null;Te.bindFramebuffer(P.FRAMEBUFFER,Qe);let _t=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),yield _y(P,_t,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Me),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,re),P.deleteBuffer(Me),P.deleteSync(_t),re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}})},this.copyFramebufferToTexture=function(_,D=null,k=0){_.isTexture!==!0&&(ko("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,_=arguments[1]);let V=Math.pow(2,-k),R=Math.floor(_.image.width*V),re=Math.floor(_.image.height*V),he=D!==null?D.x:0,ye=D!==null?D.y:0;b.setTexture2D(_,0),P.copyTexSubImage2D(P.TEXTURE_2D,k,0,0,he,ye,R,re),Te.unbindTexture()},this.copyTextureToTexture=function(_,D,k=null,V=null,R=0){_.isTexture!==!0&&(ko("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,_=arguments[1],D=arguments[2],R=arguments[3]||0,k=null);let re,he,ye,xe,Oe,Be,Me,Qe,_t,bt=_.isCompressedTexture?_.mipmaps[R]:_.image;k!==null?(re=k.max.x-k.min.x,he=k.max.y-k.min.y,ye=k.isBox3?k.max.z-k.min.z:1,xe=k.min.x,Oe=k.min.y,Be=k.isBox3?k.min.z:0):(re=bt.width,he=bt.height,ye=bt.depth||1,xe=0,Oe=0,Be=0),V!==null?(Me=V.x,Qe=V.y,_t=V.z):(Me=0,Qe=0,_t=0);let nn=ze.convert(D.format),nt=ze.convert(D.type),we;D.isData3DTexture?(b.setTexture3D(D,0),we=P.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(b.setTexture2DArray(D,0),we=P.TEXTURE_2D_ARRAY):(b.setTexture2D(D,0),we=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,D.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,D.unpackAlignment);let Jn=P.getParameter(P.UNPACK_ROW_LENGTH),it=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Tn=P.getParameter(P.UNPACK_SKIP_PIXELS),Tr=P.getParameter(P.UNPACK_SKIP_ROWS),cn=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,bt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,bt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,xe),P.pixelStorei(P.UNPACK_SKIP_ROWS,Oe),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Be);let qs=_.isDataArrayTexture||_.isData3DTexture,wt=D.isDataArrayTexture||D.isData3DTexture;if(_.isRenderTargetTexture||_.isDepthTexture){let Vn=Ae.get(_),Ys=Ae.get(D),gn=Ae.get(Vn.__renderTarget),xi=Ae.get(Ys.__renderTarget);Te.bindFramebuffer(P.READ_FRAMEBUFFER,gn.__webglFramebuffer),Te.bindFramebuffer(P.DRAW_FRAMEBUFFER,xi.__webglFramebuffer);for(let Mi=0;Mi<ye;Mi++)qs&&P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ae.get(_).__webglTexture,R,Be+Mi),_.isDepthTexture?(wt&&P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ae.get(D).__webglTexture,R,_t+Mi),P.blitFramebuffer(xe,Oe,re,he,Me,Qe,re,he,P.DEPTH_BUFFER_BIT,P.NEAREST)):wt?P.copyTexSubImage3D(we,R,Me,Qe,_t+Mi,xe,Oe,re,he):P.copyTexSubImage2D(we,R,Me,Qe,_t+Mi,xe,Oe,re,he);Te.bindFramebuffer(P.READ_FRAMEBUFFER,null),Te.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else wt?_.isDataTexture||_.isData3DTexture?P.texSubImage3D(we,R,Me,Qe,_t,re,he,ye,nn,nt,bt.data):D.isCompressedArrayTexture?P.compressedTexSubImage3D(we,R,Me,Qe,_t,re,he,ye,nn,bt.data):P.texSubImage3D(we,R,Me,Qe,_t,re,he,ye,nn,nt,bt):_.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,R,Me,Qe,re,he,nn,nt,bt.data):_.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,R,Me,Qe,bt.width,bt.height,nn,bt.data):P.texSubImage2D(P.TEXTURE_2D,R,Me,Qe,re,he,nn,nt,bt);P.pixelStorei(P.UNPACK_ROW_LENGTH,Jn),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,it),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Tn),P.pixelStorei(P.UNPACK_SKIP_ROWS,Tr),P.pixelStorei(P.UNPACK_SKIP_IMAGES,cn),R===0&&D.generateMipmaps&&P.generateMipmap(we),Te.unbindTexture()},this.copyTextureToTexture3D=function(_,D,k=null,V=null,R=0){return _.isTexture!==!0&&(ko("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,V=arguments[1]||null,_=arguments[2],D=arguments[3],R=arguments[4]||0),ko('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(_,D,k,V,R)},this.initRenderTarget=function(_){Ae.get(_).__webglFramebuffer===void 0&&b.setupRenderTarget(_)},this.initTexture=function(_){_.isCubeTexture?b.setTextureCube(_,0):_.isData3DTexture?b.setTexture3D(_,0):_.isDataArrayTexture||_.isCompressedArrayTexture?b.setTexture2DArray(_,0):b.setTexture2D(_,0),Te.unbindTexture()},this.resetState=function(){I=0,C=0,F=null,Te.reset(),vt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=Ke._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ke._getUnpackColorSpace()}};var Al=class extends wr{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Cs,this.environmentIntensity=1,this.environmentRotation=new Cs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var Ts=class extends xr{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new tt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Vm=new Ut,oh=new ml,nl=new Es,il=new z,Go=class extends wr{constructor(e=new kn,t=new Ts){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),nl.copy(n.boundingSphere),nl.applyMatrix4(r),nl.radius+=s,e.ray.intersectsSphere(nl)===!1)return;Vm.copy(r).invert(),oh.copy(e.ray).applyMatrix4(Vm);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let g=f,y=m;g<y;g++){let p=c.getX(g);il.fromBufferAttribute(d,p),zm(il,p,l,r,e,t,this)}}else{let f=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let g=f,y=m;g<y;g++)il.fromBufferAttribute(d,g),zm(il,g,l,r,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function zm(i,e,t,n,r,s,o){let a=oh.distanceSqToPoint(i);if(a<t){let l=new z;oh.closestPointToPoint(i,l),l.applyMatrix4(n);let c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}function rl(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function pw(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Ds=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=t[++n],e<r)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ah=class extends Ds{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Wp,endingEnd:Wp}}intervalChanged_(e,t,n){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case $p:s=e,a=2*t-n;break;case Xp:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case $p:o=e,l=2*n-t;break;case Xp:o=1,l=n+r[1]-r[0];break;default:o=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,m=this._weightNext,g=(n-t)/(r-t),y=g*g,p=y*g,h=-f*p+2*f*y-f*g,E=(1+f)*p+(-1.5-2*f)*y+(-.5+f)*g+1,w=(-1-m)*p+(1.5+m)*y+.5*g,M=m*p-m*y;for(let B=0;B!==a;++B)s[B]=h*o[u+B]+E*o[c+B]+w*o[l+B]+M*o[d+B];return s}},lh=class extends Ds{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(r-t),d=1-u;for(let f=0;f!==a;++f)s[f]=o[c+f]*d+o[l+f]*u;return s}},ch=class extends Ds{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Bn=class{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=rl(t,this.TimeBufferType),this.values=rl(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:rl(e.times,Array),values:rl(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ch(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new lh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ah(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ul:t=this.InterpolantFactoryMethodDiscrete;break;case zd:t=this.InterpolantFactoryMethodLinear;break;case Au:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ul;case this.InterpolantFactoryMethodLinear:return zd;case this.InterpolantFactoryMethodSmooth:return Au}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,s=0,o=r-1;for(;s!==r&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&pw(r))for(let a=0,l=r.length;a!==l;++a){let c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Au,s=e.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(r)l=!0;else{let d=a*n,f=d-n,m=d+n;for(let g=0;g!==n;++g){let y=t[d+g];if(y!==t[f+g]||y!==t[m+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let d=a*n,f=o*n;for(let m=0;m!==n;++m)t[f+m]=t[d+m]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};Bn.prototype.TimeBufferType=Float32Array;Bn.prototype.ValueBufferType=Float32Array;Bn.prototype.DefaultInterpolation=zd;var Mr=class extends Bn{constructor(e,t,n){super(e,t,n)}};Mr.prototype.ValueTypeName="bool";Mr.prototype.ValueBufferType=Array;Mr.prototype.DefaultInterpolation=ul;Mr.prototype.InterpolantFactoryMethodLinear=void 0;Mr.prototype.InterpolantFactoryMethodSmooth=void 0;var uh=class extends Bn{};uh.prototype.ValueTypeName="color";var dh=class extends Bn{};dh.prototype.ValueTypeName="number";var hh=class extends Ds{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(r-t),c=e*a;for(let u=c+a;c!==u;c+=4)Hi.slerpFlat(s,0,o,c-a,o,c,l);return s}},Tl=class extends Bn{InterpolantFactoryMethodLinear(e){return new hh(this.times,this.values,this.getValueSize(),e)}};Tl.prototype.ValueTypeName="quaternion";Tl.prototype.InterpolantFactoryMethodSmooth=void 0;var Sr=class extends Bn{constructor(e,t,n){super(e,t,n)}};Sr.prototype.ValueTypeName="string";Sr.prototype.ValueBufferType=Array;Sr.prototype.DefaultInterpolation=ul;Sr.prototype.InterpolantFactoryMethodLinear=void 0;Sr.prototype.InterpolantFactoryMethodSmooth=void 0;var fh=class extends Bn{};fh.prototype.ValueTypeName="vector";var Sh="\\[\\]\\.:\\/",mw=new RegExp("["+Sh+"]","g"),bh="[^"+Sh+"]",gw="[^"+Sh.replace("\\.","")+"]",vw=/((?:WC+[\/:])*)/.source.replace("WC",bh),_w=/(WCOD+)?/.source.replace("WCOD",gw),yw=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",bh),xw=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",bh),Mw=new RegExp("^"+vw+_w+yw+xw+"$"),Sw=["material","materials","bones","map"],ph=class{constructor(e,t,n){let r=n||Pt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Pt=(()=>{class i{constructor(t,n,r){this.path=n,this.parsedPath=r||i.parseTrackName(n),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new i.Composite(t,n,r):new i(t,n,r)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(mw,"")}static parseTrackName(t){let n=Mw.exec(t);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let r={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},s=r.nodeName&&r.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let o=r.nodeName.substring(s+1);Sw.indexOf(o)!==-1&&(r.nodeName=r.nodeName.substring(0,s),r.objectName=o)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return r}static findNode(t,n){if(n===void 0||n===""||n==="."||n===-1||n===t.name||n===t.uuid)return t;if(t.skeleton){let r=t.skeleton.getBoneByName(n);if(r!==void 0)return r}if(t.children){let r=function(o){for(let a=0;a<o.length;a++){let l=o[a];if(l.name===n||l.uuid===n)return l;let c=r(l.children);if(c)return c}return null},s=r(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,n){t[n]=this.targetObject[this.propertyName]}_getValue_array(t,n){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)t[n++]=r[s]}_getValue_arrayElement(t,n){t[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,n){this.resolvedProperty.toArray(t,n)}_setValue_direct(t,n){this.targetObject[this.propertyName]=t[n]}_setValue_direct_setNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,n){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[n++]}_setValue_array_setNeedsUpdate(t,n){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,n){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,n){this.resolvedProperty[this.propertyIndex]=t[n]}_setValue_arrayElement_setNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,n){this.resolvedProperty.fromArray(t,n)}_setValue_fromArray_setNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,n){this.bind(),this.getValue(t,n)}_setValue_unbound(t,n){this.bind(),this.setValue(t,n)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,s=n.propertyName,o=n.propertyIndex;if(t||(t=i.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let u=n.objectIndex;switch(r){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let d=0;d<t.length;d++)if(t[d].name===u){u=d;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[r]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[r]}if(u!==void 0){if(t[u]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[u]}}let a=t[s];if(a===void 0){let u=n.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+u+"."+s+" but it wasn't found.",t);return}let l=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?l=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(o!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=o}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}return i.Composite=ph,i})();Pt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Pt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Pt.prototype.GetterByBindingType=[Pt.prototype._getValue_direct,Pt.prototype._getValue_array,Pt.prototype._getValue_arrayElement,Pt.prototype._getValue_toArray];Pt.prototype.SetterByBindingTypeAndVersioning=[[Pt.prototype._setValue_direct,Pt.prototype._setValue_direct_setNeedsUpdate,Pt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_array,Pt.prototype._setValue_array_setNeedsUpdate,Pt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_arrayElement,Pt.prototype._setValue_arrayElement_setNeedsUpdate,Pt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_fromArray,Pt.prototype._setValue_fromArray_setNeedsUpdate,Pt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var iD=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var Er=class Er{constructor(){this.platformId=ne(Ft);this.morphT=0;this.scrollR=0;this.tX=0;this.tY=0;this.cX=0;this.cY=0;this.t=0;this.animId=0;this.N=3800}init(e){Bt(this.platformId)&&(this.renderer=new Cl({canvas:e,alpha:!0,antialias:!0}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,2)),this.renderer.setSize(innerWidth,innerHeight),this.scene=new Al,this.camera=new tn(42,innerWidth/innerHeight,.1,200),this.camera.position.set(0,0,22),this.buildParticles(),this.buildDust(),this.bindEvents(),this.animate())}buildParticles(){let e=this.N;this.posA=new Float32Array(e*3),this.posB=new Float32Array(e*3);let t=new Float32Array(e*3);for(let n=0;n<e;n++){let r=Math.acos(1-2*(n/e)),s=Math.PI*2*n*1.6180339887,o=5.8+(Math.random()-.5)*.4;this.posA[n*3]=o*Math.sin(r)*Math.cos(s),this.posA[n*3+1]=o*Math.sin(r)*Math.sin(s),this.posA[n*3+2]=o*Math.cos(r)}for(let n=0;n<e;n++){let r=n/e*Math.PI*2,s=n*13%e/e*Math.PI*2,o=5,a=1.9;this.posB[n*3]=(o+a*Math.cos(s))*Math.cos(r),this.posB[n*3+1]=(o+a*Math.cos(s))*Math.sin(r)*.5,this.posB[n*3+2]=a*Math.sin(s)}for(let n=0;n<e;n++)n/e<.3?(t[n*3]=.788,t[n*3+1]=.294,t[n*3+2]=.047):(t[n*3]=.21,t[n*3+1]=.2,t[n*3+2]=.18);this.geo=new kn,this.geo.setAttribute("position",new Jt(this.posA.slice(),3)),this.geo.setAttribute("color",new Jt(t,3)),this.pts=new Go(this.geo,new Ts({size:.055,vertexColors:!0,transparent:!0,opacity:.88,sizeAttenuation:!0})),this.pts.position.set(4.5,0,0),this.scene.add(this.pts)}buildDust(){let e=new Float32Array(1500);for(let n=0;n<500;n++)e[n*3]=(Math.random()-.5)*50,e[n*3+1]=(Math.random()-.5)*35,e[n*3+2]=(Math.random()-.5)*12-10;let t=new kn;t.setAttribute("position",new Jt(e,3)),this.scene.add(new Go(t,new Ts({size:.04,color:12623984,transparent:!0,opacity:.22})))}bindEvents(){document.addEventListener("mousemove",e=>{this.tX=(e.clientX/innerWidth-.5)*2,this.tY=(e.clientY/innerHeight-.5)*2}),window.addEventListener("scroll",()=>{let e=document.body.scrollHeight-innerHeight;this.scrollR=e>0?Math.min(window.scrollY/e,1):0},{passive:!0}),window.addEventListener("resize",()=>{this.camera.aspect=innerWidth/innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(innerWidth,innerHeight)})}animate(){this.animId=requestAnimationFrame(()=>this.animate()),this.t+=.007,this.cX+=(this.tX*1.5-this.cX)*.05,this.cY+=(-this.tY-this.cY)*.05,this.camera.position.x=this.cX,this.camera.position.y=this.cY,this.camera.lookAt(this.scene.position),this.pts.rotation.y=this.t*.17,this.pts.rotation.x=this.t*.05,this.morphT+=(this.scrollR-this.morphT)*.02;let e=this.geo.attributes.position;for(let t=0;t<this.N;t++){let n=Math.sin(this.t*1.2+t*.008)*.09;e.array[t*3]=this.posA[t*3]*(1-this.morphT)+this.posB[t*3]*this.morphT+n,e.array[t*3+1]=this.posA[t*3+1]*(1-this.morphT)+this.posB[t*3+1]*this.morphT+n*.5,e.array[t*3+2]=this.posA[t*3+2]*(1-this.morphT)+this.posB[t*3+2]*this.morphT}e.needsUpdate=!0,this.renderer.render(this.scene,this.camera)}destroy(){cancelAnimationFrame(this.animId),this.renderer?.dispose()}};Er.\u0275fac=function(t){return new(t||Er)},Er.\u0275prov=Re({token:Er,factory:Er.\u0275fac,providedIn:"root"});var Pl=Er;var Ps=class Ps{constructor(){this.target=0;this.suffix="";this.duration=1800;this.el=ne(Mn);this.platformId=ne(Ft)}ngOnInit(){if(!Bt(this.platformId)){this.el.nativeElement.textContent=this.target+this.suffix;return}let e=new IntersectionObserver(t=>{t[0].isIntersecting&&(this.run(),e.disconnect())},{threshold:.5});e.observe(this.el.nativeElement)}run(){let e=performance.now(),t=this.el.nativeElement,n=r=>{let s=Math.min((r-e)/this.duration,1),o=Math.floor((1-Math.pow(1-s,3))*this.target);t.textContent=o+this.suffix,s<1&&requestAnimationFrame(n)};requestAnimationFrame(n)}};Ps.\u0275fac=function(t){return new(t||Ps)},Ps.\u0275dir=Ct({type:Ps,selectors:[["","appCounter",""]],inputs:{target:[0,"appCounter","target"],suffix:"suffix",duration:"duration"}});var Ol=Ps;var ww=["threeCanvas"],Os=class Os{constructor(){this.three=ne(Pl);this.scroll=ne(Ri)}ngAfterViewInit(){this.three.init(this.canvasRef.nativeElement)}ngOnDestroy(){this.three.destroy()}go(e){this.scroll.scrollTo(e)}};Os.\u0275fac=function(t){return new(t||Os)},Os.\u0275cmp=rt({type:Os,selectors:[["app-hero"]],viewQuery:function(t,n){if(t&1&&mf(ww,5),t&2){let r;yc(r=xc())&&(n.canvasRef=r.first)}},decls:50,vars:5,consts:[["threeCanvas",""],["id","hero"],["aria-hidden","true",1,"three-canvas"],[1,"h-l"],[1,"h-bdg"],["aria-hidden","true",1,"g-dot"],[1,"h-h1"],[1,"h-ctas"],[1,"btn-p","hover-el",3,"click"],[1,"btn-o","hover-el",3,"click"],["aria-label","Key statistics",1,"h-stats"],[1,"stat"],[1,"stat-n"],["suffix","+",3,"appCounter"],[1,"stat-l"],["suffix","K+",3,"appCounter"],[3,"appCounter"],["suffix","%",3,"appCounter"],["aria-hidden","true",1,"h-r"],[1,"h-hint"],[1,"hint-dot"]],template:function(t,n){if(t&1){let r=Qt();L(0,"section",1),Le(1,"canvas",2,0),L(3,"div",3)(4,"div",4),Le(5,"span",5),O(6," Expert Frontend Architect & Scrum Master "),U(),L(7,"h1",6),O(8," Building the"),Le(9,"br"),O(10,"web "),L(11,"i"),O(12,"with"),U(),Le(13,"br"),O(14,"precision. "),U(),L(15,"div",7)(16,"a",8),Xt("click",function(){return Dt(r),Rt(n.go("exp"))}),O(17,"View Experience"),U(),L(18,"a",9),Xt("click",function(){return Dt(r),Rt(n.go("contact"))}),O(19,"Start a conversation"),U()(),L(20,"div",10)(21,"div",11)(22,"div",12),Le(23,"span",13),U(),L(24,"div",14),O(25,"Years"),U()(),L(26,"div",11)(27,"div",12),Le(28,"span",15),U(),L(29,"div",14),O(30,"LinkedIn"),U()(),L(31,"div",11)(32,"div",12),Le(33,"span",16),U(),L(34,"div",14),O(35,"npm Packages"),U()(),L(36,"div",11)(37,"div",12),Le(38,"span",16),U(),L(39,"div",14),O(40,"Companies"),U()(),L(41,"div",11)(42,"div",12),Le(43,"span",17),U(),L(44,"div",14),O(45,"Dev time saved"),U()()()(),L(46,"div",18)(47,"div",19),Le(48,"span",20),O(49," Interactive \xB7 move mouse \xB7 scroll to morph "),U()()()}t&2&&($(23),Ee("appCounter",10),$(5),Ee("appCounter",16),$(5),Ee("appCounter",4),$(5),Ee("appCounter",6),$(5),Ee("appCounter",50))},dependencies:[Ol],styles:['section[_ngcontent-%COMP%]{min-height:100vh;display:grid;grid-template-columns:1fr 1fr;align-items:center;padding:0 5vw;gap:4rem;position:relative}.three-canvas[_ngcontent-%COMP%]{position:fixed;inset:0;z-index:0;pointer-events:none;width:100%!important;height:100%!important}.h-l[_ngcontent-%COMP%]{padding-top:6rem;position:relative;z-index:2}.h-bdg[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:.8rem;font-family:var(--f3);font-size:.64rem;color:var(--acc);letter-spacing:.22em;text-transform:uppercase;margin-bottom:2.5rem;opacity:0;animation:_ngcontent-%COMP%_fi .8s 1.9s forwards}.h-bdg[_ngcontent-%COMP%]:before{content:"";width:26px;height:1px;background:var(--acc)}.g-dot[_ngcontent-%COMP%]{width:6px;height:6px;border-radius:50%;background:#2ecc71;animation:_ngcontent-%COMP%_gb 2.2s infinite}@keyframes _ngcontent-%COMP%_gb{0%,to{box-shadow:0 0 #2ecc7166}50%{box-shadow:0 0 0 6px #2ecc7100}}.h-h1[_ngcontent-%COMP%]{font-family:var(--f1);font-size:clamp(3.5rem,7vw,7.5rem);font-weight:300;line-height:.9;letter-spacing:-.035em;margin-bottom:2rem;opacity:0;animation:_ngcontent-%COMP%_fi 1s 2.1s forwards}.h-h1[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-style:italic;color:var(--acc)}.h-sub[_ngcontent-%COMP%]{display:block;font-family:var(--f2);font-size:clamp(.95rem,1.7vw,1.1rem);font-weight:300;color:var(--ink2);line-height:1.78;margin-top:1.3rem;font-style:normal}.h-ctas[_ngcontent-%COMP%]{display:flex;gap:.9rem;flex-wrap:wrap;margin-bottom:3rem;opacity:0;animation:_ngcontent-%COMP%_fi .8s 2.3s forwards}.h-stats[_ngcontent-%COMP%]{display:flex;gap:2.5rem;padding-top:2.5rem;border-top:1px solid var(--line);flex-wrap:wrap;opacity:0;animation:_ngcontent-%COMP%_fi .8s 2.5s forwards}.stat-n[_ngcontent-%COMP%]{font-family:var(--f1);font-size:2.8rem;font-weight:300;line-height:1;color:var(--ink)}.stat-l[_ngcontent-%COMP%]{font-family:var(--f3);font-size:.56rem;color:var(--ink3);letter-spacing:.14em;text-transform:uppercase;margin-top:.3rem}.h-r[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;height:100vh;position:relative;z-index:2}.h-hint[_ngcontent-%COMP%]{position:absolute;bottom:3rem;left:50%;transform:translate(-50%);font-family:var(--f3);font-size:.56rem;color:var(--ink3);letter-spacing:.2em;text-transform:uppercase;display:flex;align-items:center;gap:.6rem;white-space:nowrap;opacity:0;animation:_ngcontent-%COMP%_fi 1s 2.9s both}.hint-dot[_ngcontent-%COMP%]{width:6px;height:6px;border-radius:50%;background:var(--acc);flex-shrink:0;animation:_ngcontent-%COMP%_blk 2s infinite}@keyframes _ngcontent-%COMP%_blk{0%,to{opacity:1}50%{opacity:.1}}@keyframes _ngcontent-%COMP%_fi{0%{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}@media (max-width: 900px){section[_ngcontent-%COMP%]{grid-template-columns:1fr;padding-top:7rem;min-height:auto;padding-bottom:2rem}.h-r[_ngcontent-%COMP%]{height:55vw;min-height:240px}.h-stats[_ngcontent-%COMP%]{gap:1.5rem}}'],changeDetection:0});var Fl=Os;var Fs=class Fs{constructor(){this.delay=0;this.el=ne(Mn);this.platformId=ne(Ft)}ngOnInit(){if(!Bt(this.platformId))return;let e=this.el.nativeElement;e.classList.add("rv"),this.delay&&(e.style.transitionDelay=`${this.delay}ms`),this.observer=new IntersectionObserver(t=>{t.forEach(n=>{n.isIntersecting&&(e.classList.add("on"),this.observer.unobserve(e))})},{threshold:.1}),this.observer.observe(e)}ngOnDestroy(){this.observer?.disconnect()}};Fs.\u0275fac=function(t){return new(t||Fs)},Fs.\u0275dir=Ct({type:Fs,selectors:[["","appReveal",""]],inputs:{delay:[0,"appReveal","delay"]}});var Kt=Fs;var Ew=()=>[1,2,3,4,5],Cw=(i,e)=>e.key,Aw=(i,e)=>e.name;function Tw(i,e){if(i&1&&(L(0,"a",23),O(1),U()),i&2){let t=Lt().$implicit;Ee("href",t.href,$t)("target",t.external?"_blank":"_self"),$(),$e(t.value)}}function Dw(i,e){if(i&1&&O(0),i&2){let t=Lt().$implicit;Sn(" ",t.value," ")}}function Rw(i,e){if(i&1&&(L(0,"div",8)(1,"span",21),O(2),U(),L(3,"span",22),Gn(4,Tw,2,3,"a",23)(5,Dw,1,1),U()()),i&2){let t=e.$implicit;$(2),$e(t.key),$(2),Wn(t.href?4:5)}}function Iw(i,e){if(i&1&&Le(0,"div",28),i&2){let t=e.$implicit,n=Lt().$implicit;kt("on",t<=n.dots)}}function Pw(i,e){if(i&1&&(L(0,"div",17)(1,"div",24),O(2),U(),L(3,"div",25),O(4),U(),L(5,"div",26),dt(6,Iw,1,2,"div",27,Ai),U()()),i&2){let t=e.$implicit;$(2),$e(t.name),$(2),$e(t.level),$(2),ht(_f(2,Ew))}}var Ls=class Ls{constructor(){this.facts=[{key:"Location",value:"T\xE9touan, Morocco \u{1F1F2}\u{1F1E6}"},{key:"Email",value:"asrihsoufiane@gmail.com",href:"mailto:asrihsoufiane@gmail.com"},{key:"Phone",value:"+212 677 604 950",href:"tel:+212677604950"},{key:"LinkedIn",value:"soufiane-asrih-274303125",href:"https://linkedin.com/in/soufiane-asrih-274303125",external:!0},{key:"GitHub",value:"github.com/Asrih7 (23 repos)",href:"https://github.com/Asrih7",external:!0},{key:"Medium",value:"@asrihsoufiane",href:"https://medium.com/@asrihsoufiane",external:!0},{key:"npm",value:"4 published packages",href:"https://www.npmjs.com/~asrih7",external:!0},{key:"DOB",value:"27 March 1993 \xB7 Casablanca"}];this.languages=[{name:"Arabic",level:"Native",dots:5},{name:"Spanish",level:"C1 \u2014 Professional",dots:4},{name:"French",level:"B2/C2 \u2014 Advanced",dots:4},{name:"English",level:"B1 \u2014 Intermediate",dots:3}]}};Ls.\u0275fac=function(t){return new(t||Ls)},Ls.\u0275cmp=rt({type:Ls,selectors:[["app-about"]],decls:74,vars:10,consts:[["id","about"],[1,"s-lbl",3,"appReveal"],[1,"s-num"],[1,"s-ttl",3,"appReveal"],[1,"ab-g"],[1,"ab-p",3,"appReveal"],[1,"hi"],[1,"facts",3,"appReveal"],[1,"fact"],[1,"aside-col"],[1,"p-frame",3,"appReveal"],["src","assets/profile/soufiane.jpg","alt","Soufiane Asrih \u2014 Senior Angular Developer"],[1,"p-ov"],[1,"av-card",3,"appReveal"],["aria-hidden","true",1,"av-dot"],[1,"av-txt"],[1,"a-card",3,"appReveal"],[1,"l-row"],[1,"edu-l"],[1,"edu-t"],[1,"edu-m"],[1,"fk"],[1,"fv"],["rel","noopener",3,"href","target"],[1,"l-name"],[1,"l-lvl"],[1,"dots"],[1,"dot",3,"on"],[1,"dot"]],template:function(t,n){t&1&&(L(0,"section",0)(1,"div",1)(2,"span",2),O(3,"01 //"),U(),O(4," About"),U(),L(5,"h2",3),O(6,"The person"),Le(7,"br"),L(8,"em"),O(9,"behind the code."),U()(),L(10,"div",4)(11,"div")(12,"p",5),O(13," I'm "),L(14,"strong"),O(15,"Soufiane Asrih"),U(),O(16,", an "),L(17,"span",6),O(18,"Expert Frontend Architect & Scrum Master"),U(),O(19," based in T\xE9touan, Morocco. With 10+ years I've led frontend development for global enterprises \u2014 from "),L(20,"strong"),O(21,"Allianz Spain"),U(),O(22," to "),L(23,"strong"),O(24,"Banco Sabadell"),U(),O(25," and "),L(26,"strong"),O(27,"MAPFRE Madrid"),U(),O(28," \u2014 currently at "),L(29,"strong"),O(30,"NTT DATA Morocco"),U(),O(31,". "),U(),L(32,"p",5),O(33," I architect Angular applications that scale. I care deeply about component reusability, reactive state with RxJS & Signals, Scrum leadership, and the craftsmanship that makes a codebase a pleasure six months later. I hold "),L(34,"span",6),O(35,"16K+ LinkedIn connections"),U(),O(36," in the Angular ecosystem. "),U(),L(37,"p",5),O(38," In 2023 I founded "),L(39,"span",6),O(40,"SA7Tec"),U(),O(41," \u2014 my studio for mobile apps, npm packages, and freelance solutions. I've published "),L(42,"span",6),O(43,"4 npm packages"),U(),O(44," used by the Angular community and write on Medium about Angular best practices. "),U(),L(45,"div",7),dt(46,Rw,6,2,"div",8,Cw),U()(),L(48,"div")(49,"div",9)(50,"div",10),Le(51,"img",11)(52,"div",12),U(),L(53,"div",13),Le(54,"div",14),L(55,"div",15)(56,"b"),O(57,"Available for new opportunities"),U(),Le(58,"br"),O(59," Senior Angular roles & select freelance "),U()(),L(60,"div",16)(61,"h3"),O(62,"Languages"),U(),dt(63,Pw,8,3,"div",17,Aw),U(),L(65,"div",16)(66,"div",18),O(67,"Education"),U(),L(68,"div",19),O(69,"Dipl\xF4me Technicien Sp\xE9cialis\xE9"),Le(70,"br"),O(71,"en D\xE9veloppement Informatique"),U(),L(72,"div",20),O(73,"ISMONTIC / ISTA \xB7 T\xE9touan \xB7 2012\u20132014"),U()()()()()()),t&2&&($(),Ee("appReveal",0),$(4),Ee("appReveal",100),$(7),Ee("appReveal",100),$(20),Ee("appReveal",200),$(5),Ee("appReveal",300),$(8),Ee("appReveal",400),$(),ht(n.facts),$(4),Ee("appReveal",0),$(3),Ee("appReveal",100),$(7),Ee("appReveal",200),$(3),ht(n.languages),$(2),Ee("appReveal",300))},dependencies:[Kt],styles:["section[_ngcontent-%COMP%]{background:var(--bg2)}.ab-g[_ngcontent-%COMP%]{display:grid;grid-template-columns:55fr 42fr;gap:7rem;align-items:start;margin-top:4rem}.ab-p[_ngcontent-%COMP%]{font-size:1.08rem;line-height:1.88;color:var(--ink2);margin-bottom:1.6rem;font-weight:300}.ab-p[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:var(--ink);font-weight:500}.hi[_ngcontent-%COMP%]{color:var(--acc)}.facts[_ngcontent-%COMP%]{margin-top:2.5rem;border-top:1px solid var(--line)}.fact[_ngcontent-%COMP%]{display:flex;gap:1.5rem;padding:.85rem 0;border-bottom:1px solid var(--line);align-items:baseline}.fk[_ngcontent-%COMP%]{font-family:var(--f3);font-size:.59rem;color:var(--ink3);letter-spacing:.14em;text-transform:uppercase;min-width:88px;flex-shrink:0}.fv[_ngcontent-%COMP%]{color:var(--ink2);font-size:.88rem}.fv[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--acc);text-decoration:none}.fv[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-decoration:underline}.p-frame[_ngcontent-%COMP%]{width:100%;padding-top:115%;position:relative;border-radius:2px;overflow:hidden;border:1px solid var(--line);box-shadow:var(--sh2);background:var(--bg3)}.p-frame[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:absolute;inset:0;width:100%;height:100%;object-fit:contain}.p-ov[_ngcontent-%COMP%]{position:absolute;bottom:0;left:0;right:0;padding:1.5rem 2rem;background:linear-gradient(0deg,rgba(11,11,9,.82),transparent)}.p-nm[_ngcontent-%COMP%]{font-family:var(--f1);font-size:1.4rem;font-weight:600;color:#fff;letter-spacing:-.01em}.p-role[_ngcontent-%COMP%]{font-family:var(--f3);font-size:.58rem;color:#ffffffad;letter-spacing:.14em;text-transform:uppercase;margin-top:.2rem}.aside-col[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1.5rem;position:sticky;top:8rem}.av-card[_ngcontent-%COMP%]{padding:1.4rem;border:1px solid rgba(var(--acc-rgb),.2);background:var(--acc-l);border-radius:2px;display:flex;align-items:center;gap:.85rem}.av-dot[_ngcontent-%COMP%]{width:9px;height:9px;border-radius:50%;background:#2ecc71;flex-shrink:0;animation:_ngcontent-%COMP%_pu 2.2s infinite}@keyframes _ngcontent-%COMP%_pu{0%,to{box-shadow:0 0 #2ecc7173}60%{box-shadow:0 0 0 7px #2ecc7100}}.av-txt[_ngcontent-%COMP%]{font-family:var(--f3);font-size:.62rem;color:var(--ink2);letter-spacing:.1em;text-transform:uppercase;line-height:1.5}.av-txt[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]{color:var(--acc);font-weight:500}.a-card[_ngcontent-%COMP%]{background:var(--bg);border:1px solid var(--line);padding:2rem;border-radius:2px;box-shadow:var(--sh)}.a-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-family:var(--f1);font-size:1.35rem;font-weight:300;margin-bottom:1.5rem}.l-row[_ngcontent-%COMP%]{padding:.65rem 0;border-bottom:1px solid var(--line)}.l-row[_ngcontent-%COMP%]:last-child{border:none}.l-name[_ngcontent-%COMP%]{font-weight:500;font-size:.86rem;margin-bottom:.2rem}.l-lvl[_ngcontent-%COMP%]{font-family:var(--f3);font-size:.58rem;color:var(--ink3);letter-spacing:.07em;text-transform:uppercase;margin-bottom:.35rem}.dots[_ngcontent-%COMP%]{display:flex;gap:4px}.dot[_ngcontent-%COMP%]{width:20px;height:3px;border-radius:1px;background:var(--line)}.dot.on[_ngcontent-%COMP%]{background:var(--acc)}.edu-l[_ngcontent-%COMP%]{font-family:var(--f3);font-size:.57rem;color:var(--acc);letter-spacing:.18em;text-transform:uppercase;margin-bottom:.7rem}.edu-t[_ngcontent-%COMP%]{font-family:var(--f1);font-size:1rem;line-height:1.4;margin-bottom:.35rem}.edu-m[_ngcontent-%COMP%]{font-family:var(--f3);font-size:.6rem;color:var(--ink3);letter-spacing:.06em}@media (max-width: 900px){.ab-g[_ngcontent-%COMP%]{grid-template-columns:1fr;gap:3rem}.aside-col[_ngcontent-%COMP%]{position:static}}"],changeDetection:0});var Ll=Ls;var wh=[{name:"Angular 17/18",years:"10+ yrs",hot:!0,category:"Frontend"},{name:"TypeScript",years:"10+ yrs",hot:!0,category:"Frontend"},{name:"RxJS",years:"8 yrs",hot:!0,category:"Frontend"},{name:"JavaScript ES2022+",years:"10+ yrs",category:"Frontend"},{name:"SCSS / SASS",years:"10 yrs",category:"Frontend"},{name:"Angular Material",years:"7 yrs",category:"Frontend"},{name:"Bootstrap 5",years:"8 yrs",category:"Frontend"},{name:"PrimeNG",years:"4 yrs",category:"Frontend"},{name:"AngularJS",years:"8 yrs",category:"Frontend"},{name:"HTML5 / CSS3",years:"10+ yrs",category:"Frontend"},{name:"Ionic 7",years:"6 yrs",hot:!0,category:"Mobile"},{name:"Capacitor",years:"5 yrs",category:"Mobile"},{name:"Cordova",years:"6 yrs",category:"Mobile"},{name:"AdMob",years:"4 yrs",category:"Mobile"},{name:"Play Store Deploy",years:"3 yrs",category:"Mobile"},{name:"Node.js / npm",years:"7 yrs",category:"Backend"},{name:"RESTful APIs",years:"10 yrs",category:"Backend"},{name:"Swagger / OpenAPI",years:"6 yrs",category:"Backend"},{name:"Socket.io",years:"4 yrs",category:"Backend"},{name:"CSRF Security",years:"5 yrs",category:"Backend"},{name:"Jenkins / CI-CD",years:"6 yrs",category:"DevOps"},{name:"Git / Bitbucket",years:"10 yrs",category:"DevOps"},{name:"SonarQube",years:"6 yrs",category:"DevOps"},{name:"Jira / Confluence",years:"8 yrs",category:"DevOps"},{name:"npm Publishing",years:"3 yrs",category:"DevOps"},{name:"Scrum Master",years:"4 yrs",hot:!0,category:"Architecture"},{name:"Agile / Scrum",years:"8 yrs",hot:!0,category:"Architecture"},{name:"DI Pattern",years:"9 yrs",category:"Architecture"},{name:"Component Library",years:"6 yrs",category:"Architecture"},{name:"Angular Signals",years:"2 yrs",category:"Architecture"}],cg=[{id:1,company:"NTT DATA Morocco",logo:"assets/companies/nttdata.svg",date:"Aug 2024 \u2013 Present",badge:"Current",role:"Senior Frontend Angular Developer",points:["Building critical insurance pool management platform for Allianz Spain using Angular 17/18.","Integrating RESTful APIs with Swagger documentation across cross-functional backend teams.","Automating CI/CD pipelines with Jenkins; managing production release generation and validation.","Leading testing strategies, Agile sprint estimation, and cross-environment bug resolution."],tags:["Angular 18","TypeScript","Jenkins","Swagger","Allianz","REST API","Agile"]},{id:2,company:"SA7Tec",logo:"assets/companies/SA7Tec.svg",date:"Nov 2023 \u2013 Present",badge:"Founder",role:"Founder \u2014 Freelance Web & Mobile",points:["Founded SA7Tec \u2014 studio for Angular/Ionic freelance projects and 4 published npm packages.","Migrated legacy AngularJS / Ionic 1 codebases to Angular 17 / Ionic 7, dramatically improving DX.","Published ng-payment-card-form, ng-chatbot-angular, ts-file-refactor, ng-capture-screenshots.","Built full-stack Inventory Management App (web + Android) with Capacitor and AdMob monetization."],tags:["Angular 17","Ionic 7","Capacitor","npm","Open Source","AdMob"]},{id:3,company:"Hiberus",logo:"assets/companies/hiberus.svg",date:"Apr \u2013 Oct 2023",badge:"E-Commerce",role:"Senior Frontend Angular Developer",points:["Delivered Angular modules for Cepsa, Beds.es, Iberdrola, and Sinersis \u2014 major Spanish brands.","Architected a shared reusable component library reducing development time by 50%.","Facilitated all Scrum events ensuring on-time delivery across parallel multi-brand projects."],tags:["Angular","SCSS","Bootstrap","Scrum","Cepsa","Iberdrola","Component Library"]},{id:4,company:"noodra",logo:"assets/companies/noodra.svg",date:"Jul 2022 \u2013 Mar 2023",badge:"Mobile",role:"Senior Web Developer",points:["Built cross-platform apps with Ionic 6, Capacitor, and Angular 13 for high-quality delivery.","Designed REST APIs secured with CSRF Token; applied DI Pattern for maintainable architecture."],tags:["Angular 13","Ionic 6","Capacitor","CSRF","DI Pattern"]},{id:5,company:"Babel",logo:"assets/companies/babel.svg",date:"Mar \u2013 Jun 2022",badge:"Internal",role:"Senior Frontend Angular Developer",points:['Developed features for the "Reales" internal project maintaining Sonar code quality gates.',"Used Swagger for API documentation, DevOps pipelines, and international team coordination."],tags:["Angular","Swagger","Sonar","DevOps","DI Pattern"]},{id:6,company:"everis / NTT DATA",logo:"assets/companies/everis.svg",date:"Mar 2016 \u2013 Jan 2022",badge:"6 Years",role:"Senior FullStack Developer",points:["Led frontend for MAPFRE insurance (Madrid), Banco Sabadell, and Solvia over 6 years.","Authored specification documents, Design Documents, Test Cases, and Reporting.","Managed international team coordination, sprint commitments, and effort estimation at scale.","Full DevOps stack: Git, Bitbucket, Jenkins, Jira, Confluence, SonarQube quality gates."],tags:["Angular","AngularJS","Jenkins","Git","Jira","SonarQube","Scrum","MAPFRE","Banco Sabadell"]}],ug=[{type:"npm \xB7 Angular \xB7 Open Source",title:"ng-payment-card-form",description:"Angular component for payment card forms \u2014 automatic formatting, validation, and dynamic backgrounds for Visa, Mastercard, Amex. Converted from Vue.js to Angular + TypeScript.",image:"assets/npm/ng-payment-card.svg",links:[{label:"npm \u2197",url:"https://www.npmjs.com/package/ng-payment-card-form"},{label:"GitHub \u2197",url:"https://github.com/Asrih7/ng-payment-card-form"},{label:"Article \u2197",url:"https://medium.com/@asrihsoufiane/enhance-your-angular-projects-with-the-ng-payment-card-form-component-6ace092ad75a"}],tags:["Angular","TypeScript","npm","eCommerce"]},{type:"npm \xB7 Angular \xB7 UI Component",title:"ng-chatbot-angular",description:"Angular component for creating chat-box interfaces. Simulate chatbot conversations with a fully customisable UI. Easy to integrate into any Angular project via npm.",image:"assets/npm/ng-chatbot.svg",links:[{label:"npm \u2197",url:"https://www.npmjs.com/package/ng-chatbot-angular"},{label:"GitHub \u2197",url:"https://github.com/Asrih7/ng-chatbot-angular"}],tags:["Angular","Chatbot","npm","UI"]},{type:"npm \xB7 TypeScript \xB7 CLI Tool",title:"ts-file-refactor",description:"Automates TypeScript refactoring \u2014 renames symbols, moves files, and updates all import paths across your codebase. Interactive CLI and programmatic API.",image:"assets/npm/ts-refactor.svg",links:[{label:"npm \u2197",url:"https://www.npmjs.com/package/ts-file-refactor"},{label:"Article \u2197",url:"https://medium.com/@asrihsoufiane/streamlining-typescript-refactoring-a-comprehensive-guide-to-ts-file-refactor-npm-package-017f53db521b"}],tags:["TypeScript","CLI","npm","Refactoring"]},{type:"npm \xB7 Angular \xB7 Utility",title:"ng-capture-screenshots",description:"Streamline web workflows by automating screenshot capture in Angular applications. Enhance development efficiency with a simple, powerful capture utility.",image:"assets/npm/ng-capture.svg",links:[{label:"GitHub \u2197",url:"https://github.com/Asrih7"}],tags:["Angular","Screenshots","npm","Workflow"]}],dg=[{image:"assets/certs/scrum-master.svg",name:"Scrum Master",org:"Agile \xB7 Scrum Framework",description:"Certified Scrum Master with 4+ years facilitating Scrum ceremonies, managing sprints, and leading cross-functional teams across European enterprises."},{image:"assets/certs/angular-expert.svg",name:"Angular Expert Developer",org:"Google Angular Framework",description:"10+ years mastering Angular from AngularJS to Angular 18 \u2014 components, RxJS, Signals, NgRx, Angular Universal, and complete CI/CD pipelines."},{image:"assets/certs/frontend-arch.svg",name:"Frontend Architect",org:"Enterprise Architecture",description:"Designed reusable component libraries reducing dev time by 50%. Led architecture decisions for Allianz Spain, MAPFRE Madrid, and Banco Sabadell projects."},{image:"assets/certs/npm-author.svg",name:"npm Package Author",org:"Open Source \xB7 npm Registry",description:"Published 4 Angular/TypeScript npm packages \u2014 ng-payment-card-form, ng-chatbot-angular, ts-file-refactor, ng-capture-screenshots \u2014 used by the Angular community."}],hg=[{coverImage:"assets/articles/ng-payment-card.svg",tag:"Angular \xB7 npm \xB7 Open Source",title:"Enhance Your Angular Projects with ng-payment-card-form",description:"How I built and published an Angular payment card component \u2014 automatic card detection, smooth animations, dynamic backgrounds. Converted from Vue.js to TypeScript.",date:"Aug 11, 2024",readTime:"3 min read",url:"https://medium.com/@asrihsoufiane/enhance-your-angular-projects-with-the-ng-payment-card-form-component-6ace092ad75a"},{coverImage:"assets/articles/angular-guide.svg",tag:"Angular \xB7 Training \xB7 Guide",title:"Unlocking the Power of Angular: A Step-by-Step Guide",description:"A comprehensive guide through Angular's essential features \u2014 from basics to NgRx, Signals, Angular Universal, security, and deployment. Based on the Angular Training Academy.",date:"Oct 20, 2024",readTime:"6 min read",url:"https://medium.com/@asrihsoufiane/unlocking-the-power-of-angular-a-step-by-step-guide-5ab60fc07a94"},{coverImage:"assets/articles/ts-refactor.svg",tag:"TypeScript \xB7 npm \xB7 CLI",title:"Streamlining TypeScript Refactoring with ts-file-refactor",description:"A comprehensive guide to the ts-file-refactor npm package \u2014 automate symbol renaming, file moves, and import path updates across your entire TypeScript codebase.",date:"Feb 22, 2024",readTime:"5 min read",url:"https://medium.com/@asrihsoufiane/streamlining-typescript-refactoring-a-comprehensive-guide-to-ts-file-refactor-npm-package-017f53db521b"},{coverImage:"assets/articles/chatbot-article.svg",tag:"Angular \xB7 Chatbot \xB7 npm",title:"Integrating Chatbot Functionality into Angular Apps",description:"Integrating chatbot functionality into Angular applications can be daunting. ng-chatbot-angular provides a simple yet powerful solution for incorporating chatbots into your projects.",date:"2024",readTime:"4 min read",url:"https://medium.com/@asrihsoufiane"}];var Ow=(i,e)=>e.name;function Fw(i,e){if(i&1){let t=Qt();L(0,"button",9),Xt("click",function(){let r=Dt(t).$implicit,s=Lt();return Rt(s.setCategory(r))}),O(1),U()}if(i&2){let t=e.$implicit,n=Lt();kt("act",n.activeCategory()===t),$(),Sn(" ",t," ")}}function Lw(i,e){if(i&1&&(L(0,"div",10)(1,"span",11),O(2),U(),L(3,"span",12),O(4),U()()),i&2){let t=e.$implicit;kt("hot",t.hot),$(2),$e(t.name),$(2),$e(t.years)}}var Ns=class Ns{constructor(){this.categories=["All","Frontend","Mobile","Backend","DevOps","Architecture"];this.activeCategory=ct("All");this.filtered=Rn(()=>{let e=this.activeCategory();return e==="All"?wh:wh.filter(t=>t.category===e)})}setCategory(e){this.activeCategory.set(e)}};Ns.\u0275fac=function(t){return new(t||Ns)},Ns.\u0275cmp=rt({type:Ns,selectors:[["app-skills"]],decls:18,vars:5,consts:[["id","skills"],[1,"s-lbl",3,"appReveal"],[1,"s-num"],[1,"s-ttl",3,"appReveal"],[1,"sk-intro",3,"appReveal"],["role","group","aria-label","Filter skills by category",1,"sk-fs",3,"appReveal"],[1,"sf-b","hover-el",3,"act"],["role","list","aria-label","Skills list",1,"sk-g",3,"appReveal"],["role","listitem",1,"sk-p","hover-el",3,"hot"],[1,"sf-b","hover-el",3,"click"],["role","listitem",1,"sk-p","hover-el"],[1,"sk-n"],[1,"sk-y"]],template:function(t,n){t&1&&(L(0,"section",0)(1,"div",1)(2,"span",2),O(3,"02 //"),U(),O(4," Skills & Stack"),U(),L(5,"h2",3),O(6,"My technical"),Le(7,"br"),L(8,"em"),O(9,"toolkit."),U()(),L(10,"p",4),O(11," 10 years of focused Angular architecture, Scrum mastery, mobile hybrid apps with Ionic, npm package publishing, and full DevOps tooling. "),U(),L(12,"div",5),dt(13,Fw,2,3,"button",6,Ai),U(),L(15,"div",7),dt(16,Lw,5,4,"div",8,Ow),U()()),t&2&&($(),Ee("appReveal",0),$(4),Ee("appReveal",100),$(5),Ee("appReveal",200),$(2),Ee("appReveal",250),$(),ht(n.categories),$(2),Ee("appReveal",300),$(),ht(n.filtered()))},dependencies:[Kt],styles:['section[_ngcontent-%COMP%]{overflow:hidden}.sk-intro[_ngcontent-%COMP%]{font-size:1.05rem;line-height:1.82;color:var(--ink2);font-weight:300;max-width:520px;margin-bottom:2.5rem}.sk-fs[_ngcontent-%COMP%]{display:flex;gap:.5rem;flex-wrap:wrap;margin-bottom:2rem}.sf-b[_ngcontent-%COMP%]{font-family:var(--f3);font-size:.6rem;letter-spacing:.12em;text-transform:uppercase;padding:.38rem .82rem;background:transparent;border:1px solid var(--line);color:var(--ink3);border-radius:2px;transition:all .25s var(--ease)}.sf-b[_ngcontent-%COMP%]:hover{border-color:var(--ink);color:var(--ink)}.sf-b.act[_ngcontent-%COMP%]{background:var(--ink);color:var(--bg);border-color:var(--ink)}.sk-g[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:.7rem;min-height:120px}.sk-p[_ngcontent-%COMP%]{display:flex;align-items:baseline;gap:.6rem;padding:.82rem 1.25rem;border:1px solid var(--line);position:relative;overflow:hidden;border-radius:2px;transition:border-color .3s}.sk-p[_ngcontent-%COMP%]:before{content:"";position:absolute;inset:0;background:var(--ink);transform:translateY(101%);transition:transform .3s var(--ease)}.sk-p[_ngcontent-%COMP%]:hover:before{transform:none}.sk-p[_ngcontent-%COMP%]:hover   .sk-n[_ngcontent-%COMP%], .sk-p[_ngcontent-%COMP%]:hover   .sk-y[_ngcontent-%COMP%]{color:var(--bg)}.sk-p.hot[_ngcontent-%COMP%]{background:var(--acc);border-color:var(--acc)}.sk-p.hot[_ngcontent-%COMP%]   .sk-n[_ngcontent-%COMP%], .sk-p.hot[_ngcontent-%COMP%]   .sk-y[_ngcontent-%COMP%]{color:#fff}.sk-p.hot[_ngcontent-%COMP%]:before{background:var(--ink)}.sk-n[_ngcontent-%COMP%]{font-size:.84rem;font-weight:500;position:relative;z-index:1;transition:color .3s;color:var(--ink)}.sk-y[_ngcontent-%COMP%]{font-family:var(--f3);font-size:.54rem;color:var(--ink3);letter-spacing:.06em;position:relative;z-index:1;transition:color .3s}'],changeDetection:0});var Nl=Ns;var Nw=(i,e)=>e.id;function Uw(i,e){if(i&1&&(L(0,"li"),O(1),U()),i&2){let t=e.$implicit;$(),$e(t)}}function kw(i,e){if(i&1&&(L(0,"span",21),O(1),U()),i&2){let t=e.$implicit;$(),$e(t)}}function Bw(i,e){if(i&1){let t=Qt();L(0,"div",6),Xt("click",function(){let r=Dt(t).$implicit,s=Lt();return Rt(s.toggle(r.id))}),L(1,"div",7),Le(2,"img",8),L(3,"div",9),O(4),U(),L(5,"div",10),O(6),U(),L(7,"div",11),O(8),U(),L(9,"span",12),O(10),yf(11,"number"),U()(),L(12,"div",13)(13,"div",14)(14,"div",15),O(15),U(),L(16,"div",16),O(17),Qs(),L(18,"svg",17),Le(19,"path",18),U()()(),nf(),L(20,"ul",19),dt(21,Uw,2,1,"li",null,la),U(),L(23,"div",20),dt(24,kw,2,1,"span",21,Ai),U()()()}if(i&2){let t=e.$implicit,n=Lt();kt("open",n.openId()===t.id),Ee("appReveal",t.id*50),$(2),Ee("src",t.logo,$t)("alt",t.company),$(2),$e(t.company),$(2),$e(t.date),$(2),$e(t.badge),$(2),$e(xf(11,16,t.id,"2.0-0")),$(5),$e(t.role),$(),Ci("aria-expanded",n.openId()===t.id),$(),Sn(" ",n.openId()===t.id?"Less":"More"," "),$(3),kt("vis",n.openId()===t.id),$(),ht(t.points),$(2),kt("vis",n.openId()===t.id),$(),ht(t.tags)}}var Us=class Us{constructor(){this.experiences=cg;this.openId=ct(null)}toggle(e){this.openId.update(t=>t===e?null:e)}};Us.\u0275fac=function(t){return new(t||Us)},Us.\u0275cmp=rt({type:Us,selectors:[["app-experience"]],decls:13,vars:2,consts:[["id","exp"],[1,"s-lbl",3,"appReveal"],[1,"s-num"],[1,"s-ttl",3,"appReveal"],[1,"ex-list"],[1,"ex-item","hover-el",3,"open","appReveal"],[1,"ex-item","hover-el",3,"click","appReveal"],[1,"ex-l"],["width","110","height","36","loading","lazy",1,"ex-logo",3,"src","alt"],[1,"ex-co"],[1,"ex-dt"],[1,"ex-bg"],[1,"ex-nm"],[1,"ex-r"],[1,"ex-hd"],[1,"ex-role"],[1,"ex-tgl"],["width","12","height","12","viewBox","0 0 12 12","fill","none","aria-hidden","true"],["d","M2 4l4 4 4-4","stroke","currentColor","stroke-width","1.5","stroke-linecap","round"],["role","list",1,"ex-pts"],[1,"ex-tags"],[1,"ex-tag"]],template:function(t,n){t&1&&(L(0,"section",0)(1,"div",1)(2,"span",2),O(3,"03 //"),U(),O(4," Experience"),U(),L(5,"h2",3),O(6,"Where I've"),Le(7,"br"),L(8,"em"),O(9,"made an impact."),U()(),L(10,"div",4),dt(11,Bw,26,19,"div",5,Nw),U()()),t&2&&($(),Ee("appReveal",0),$(4),Ee("appReveal",100),$(6),ht(n.experiences))},dependencies:[Kt,Ac],styles:['section[_ngcontent-%COMP%]{background:var(--bg2)}.ex-list[_ngcontent-%COMP%]{margin-top:4rem}.ex-item[_ngcontent-%COMP%]{display:grid;grid-template-columns:190px 1fr;gap:3rem;padding:2.5rem 0;border-top:1px solid var(--line);transition:background .2s}.ex-item[_ngcontent-%COMP%]:last-child{border-bottom:1px solid var(--line)}.ex-item[_ngcontent-%COMP%]:hover{background:rgba(var(--acc-rgb),.02)}.ex-l[_ngcontent-%COMP%]{display:flex;flex-direction:column}.ex-logo[_ngcontent-%COMP%]{width:110px;height:36px;object-fit:contain;margin-bottom:.8rem;opacity:.85}[data-theme=dark][_ngcontent-%COMP%]   .ex-logo[_ngcontent-%COMP%]{filter:brightness(1.3) saturate(.8)}.ex-co[_ngcontent-%COMP%]{font-family:var(--f1);font-size:1rem;font-weight:600;margin-bottom:.25rem;color:var(--ink)}.ex-dt[_ngcontent-%COMP%]{font-family:var(--f3);font-size:.59rem;color:var(--ink3);letter-spacing:.1em;text-transform:uppercase;margin-bottom:.6rem}.ex-bg[_ngcontent-%COMP%]{display:inline-block;font-family:var(--f3);font-size:.54rem;letter-spacing:.08em;text-transform:uppercase;padding:.18rem .52rem;background:var(--acc-l);color:var(--acc);border:1px solid rgba(var(--acc-rgb),.2);border-radius:1px;width:fit-content}.ex-nm[_ngcontent-%COMP%]{font-family:var(--f1);font-size:3rem;font-weight:300;color:var(--line);margin-top:auto;text-align:right;line-height:1;transition:color .3s;letter-spacing:-.02em;align-self:flex-end}.ex-item[_ngcontent-%COMP%]:hover   .ex-nm[_ngcontent-%COMP%]{color:rgba(var(--acc-rgb),.18)}.ex-hd[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:1rem;gap:1rem}.ex-role[_ngcontent-%COMP%]{font-family:var(--f1);font-size:1.45rem;font-weight:300;letter-spacing:-.02em;color:var(--ink)}.ex-tgl[_ngcontent-%COMP%]{font-family:var(--f3);font-size:.56rem;color:var(--ink3);letter-spacing:.1em;text-transform:uppercase;display:flex;align-items:center;gap:.35rem;flex-shrink:0;padding-top:.4rem}.ex-tgl[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{transition:transform .35s var(--ease)}.ex-item.open[_ngcontent-%COMP%]   .ex-tgl[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{transform:rotate(180deg)}.ex-pts[_ngcontent-%COMP%]{max-height:0;overflow:hidden;transition:max-height .55s var(--ease);display:flex;flex-direction:column;gap:.5rem}.ex-pts.vis[_ngcontent-%COMP%]{max-height:500px}.ex-pts[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-size:.86rem;line-height:1.72;color:var(--ink2);list-style:none;display:flex;gap:.65rem;font-weight:300}.ex-pts[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{content:"\\2192";color:var(--acc);flex-shrink:0;font-size:.7rem;margin-top:.18em}.ex-tags[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:.38rem;margin-top:1rem;max-height:0;overflow:hidden;transition:max-height .55s var(--ease)}.ex-tags.vis[_ngcontent-%COMP%]{max-height:80px}.ex-tag[_ngcontent-%COMP%]{font-family:var(--f3);font-size:.53rem;letter-spacing:.06em;padding:.2rem .48rem;border:1px solid var(--line);color:var(--ink3);border-radius:1px}@media (max-width: 900px){.ex-item[_ngcontent-%COMP%]{grid-template-columns:1fr;gap:1rem}.ex-nm[_ngcontent-%COMP%]{display:none}}'],changeDetection:0});var Ul=Us;var Vw=(i,e)=>e.title,zw=(i,e)=>e.label;function Hw(i,e){if(i&1&&(L(0,"a",21),O(1),U()),i&2){let t=e.$implicit;Ee("href",t.url,$t),$(),$e(t.label)}}function Gw(i,e){if(i&1&&(L(0,"span",15),O(1),U()),i&2){let t=e.$implicit;$(),$e(t)}}function Ww(i,e){if(i&1&&(L(0,"div",5),Le(1,"img",16),L(2,"div",17)(3,"div",8),O(4),U(),L(5,"div",18),O(6),U(),L(7,"div",19),O(8),U(),L(9,"div",20),dt(10,Hw,2,2,"a",21,zw),U(),L(12,"div",22),dt(13,Gw,2,1,"span",15,Ai),U()()()),i&2){let t=e.$implicit,n=e.$index;Ee("appReveal",n%2*150+100),$(),Ee("src",t.image,$t)("alt",t.title+" preview"),$(3),$e(t.type),$(2),$e(t.title),$(2),$e(t.description),$(2),ht(t.links),$(3),ht(t.tags)}}var ks=class ks{constructor(){this.packages=ug}};ks.\u0275fac=function(t){return new(t||ks)},ks.\u0275cmp=rt({type:ks,selectors:[["app-packages"]],decls:37,vars:3,consts:[["id","packages"],[1,"s-lbl",3,"appReveal"],[1,"s-num"],[1,"s-ttl",3,"appReveal"],[1,"pk-g"],[1,"pk-c","hover-el",3,"appReveal"],[1,"academy-card","hover-el",3,"appReveal"],[1,"ac-left"],[1,"pk-type"],[1,"ac-ttl"],[1,"ac-desc"],[1,"pk-links",2,"margin-top","1rem"],["href","https://asrih7.github.io/AsrihAngularAcademy/","target","_blank","rel","noopener",1,"pk-lk","hover-el"],["href","https://github.com/Asrih7/AsrihAngularAcademy","target","_blank","rel","noopener",1,"pk-lk","hover-el"],[1,"pk-tags",2,"flex-shrink","0","align-self","center"],[1,"pk-tag"],["loading","lazy",1,"pk-img",3,"src","alt"],[1,"pk-body"],[1,"pk-ttl"],[1,"pk-desc"],[1,"pk-links"],["target","_blank","rel","noopener",1,"pk-lk","hover-el",3,"href"],[1,"pk-tags"]],template:function(t,n){t&1&&(L(0,"section",0)(1,"div",1)(2,"span",2),O(3,"04 //"),U(),O(4," npm Packages & Open Source"),U(),L(5,"h2",3),O(6,"Things I've"),Le(7,"br"),L(8,"em"),O(9,"built & shipped."),U()(),L(10,"div",4),dt(11,Ww,15,6,"div",5,Vw),U(),L(13,"div",6)(14,"div",7)(15,"div",8),O(16,"Platform \xB7 Angular \xB7 Learning"),U(),L(17,"div",9),O(18,"Angular Training Academy"),U(),L(19,"div",10),O(20,"Comprehensive Angular learning platform \u2014 RxJS, NgRx, Signals, Universal SSR, security, and deployment. Live on GitHub Pages."),U(),L(21,"div",11)(22,"a",12),O(23,"Live Demo \u2197"),U(),L(24,"a",13),O(25,"GitHub \u2197"),U()()(),L(26,"div",14)(27,"span",15),O(28,"Angular 17"),U(),L(29,"span",15),O(30,"RxJS"),U(),L(31,"span",15),O(32,"NgRx"),U(),L(33,"span",15),O(34,"Signals"),U(),L(35,"span",15),O(36,"GitHub Pages"),U()()()()),t&2&&($(),Ee("appReveal",0),$(4),Ee("appReveal",100),$(6),ht(n.packages),$(2),Ee("appReveal",200))},dependencies:[Kt],styles:["section[_ngcontent-%COMP%]{overflow:hidden}.pk-g[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,1fr);gap:1.5rem;margin-top:4rem}.pk-c[_ngcontent-%COMP%]{border:1px solid var(--line);border-radius:2px;overflow:hidden;background:var(--bg2);transition:transform .3s var(--ease),border-color .3s,box-shadow .3s;position:relative}.pk-c[_ngcontent-%COMP%]:hover{transform:translateY(-4px);border-color:rgba(var(--acc-rgb),.35);box-shadow:var(--sh2)}.pk-img[_ngcontent-%COMP%]{width:100%;height:200px;object-fit:cover;background:var(--bg3);display:block}.pk-body[_ngcontent-%COMP%]{padding:1.8rem}.pk-type[_ngcontent-%COMP%]{font-family:var(--f3);font-size:.57rem;color:var(--acc);letter-spacing:.18em;text-transform:uppercase;margin-bottom:.9rem}.pk-ttl[_ngcontent-%COMP%]{font-family:var(--f1);font-size:1.4rem;font-weight:400;letter-spacing:-.02em;margin-bottom:.6rem;color:var(--ink);line-height:1.1}.pk-desc[_ngcontent-%COMP%]{font-size:.87rem;line-height:1.75;color:var(--ink2);font-weight:300;margin-bottom:1.2rem}.pk-links[_ngcontent-%COMP%]{display:flex;gap:1rem;flex-wrap:wrap}.pk-lk[_ngcontent-%COMP%]{font-family:var(--f3);font-size:.6rem;letter-spacing:.1em;text-transform:uppercase;color:var(--acc);text-decoration:none;display:flex;align-items:center;gap:.35rem;transition:gap .25s;border-bottom:1px solid rgba(var(--acc-rgb),.3);padding-bottom:1px}.pk-lk[_ngcontent-%COMP%]:hover{gap:.6rem}.pk-tags[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:.38rem;margin-top:.9rem}.pk-tag[_ngcontent-%COMP%]{font-family:var(--f3);font-size:.52rem;padding:.18rem .48rem;border:1px solid var(--line);color:var(--ink3);border-radius:1px}.academy-card[_ngcontent-%COMP%]{margin-top:1.5rem;border:1px solid var(--line);padding:2.5rem;border-radius:2px;display:flex;align-items:flex-start;justify-content:space-between;flex-wrap:wrap;gap:2rem;background:var(--bg2);transition:border-color .3s,box-shadow .3s}.academy-card[_ngcontent-%COMP%]:hover{border-color:rgba(var(--acc-rgb),.35);box-shadow:var(--sh2)}.ac-ttl[_ngcontent-%COMP%]{font-family:var(--f1);font-size:1.55rem;font-weight:400;color:var(--ink);margin-bottom:.6rem;letter-spacing:-.02em}.ac-desc[_ngcontent-%COMP%]{font-size:.87rem;line-height:1.75;color:var(--ink2);font-weight:300;max-width:520px}@media (max-width: 900px){.pk-g[_ngcontent-%COMP%]{grid-template-columns:1fr}.academy-card[_ngcontent-%COMP%]{flex-direction:column}}"],changeDetection:0});var kl=ks;var $w=(i,e)=>e.name;function Xw(i,e){if(i&1&&(L(0,"div",5),Le(1,"img",6),L(2,"div",7),O(3),U(),L(4,"div",8),O(5),U(),L(6,"div",9),O(7),U()()),i&2){let t=e.$implicit,n=e.$index;Ee("appReveal",n*100+100),$(),Ee("src",t.image,$t)("alt",t.name+" badge"),$(2),$e(t.name),$(2),$e(t.org),$(2),$e(t.description)}}var Bs=class Bs{constructor(){this.certs=dg}};Bs.\u0275fac=function(t){return new(t||Bs)},Bs.\u0275cmp=rt({type:Bs,selectors:[["app-certifications"]],decls:13,vars:2,consts:[["id","certs"],[1,"s-lbl",3,"appReveal"],[1,"s-num"],[1,"s-ttl",3,"appReveal"],[1,"cert-g"],[1,"cert-c","hover-el",3,"appReveal"],["loading","lazy",1,"cert-img",3,"src","alt"],[1,"cert-name"],[1,"cert-org"],[1,"cert-desc"]],template:function(t,n){t&1&&(L(0,"section",0)(1,"div",1)(2,"span",2),O(3,"05 //"),U(),O(4," Certifications & Expertise"),U(),L(5,"h2",3),O(6,"Validated"),Le(7,"br"),L(8,"em"),O(9,"expertise."),U()(),L(10,"div",4),dt(11,Xw,8,6,"div",5,$w),U()()),t&2&&($(),Ee("appReveal",0),$(4),Ee("appReveal",100),$(6),ht(n.certs))},dependencies:[Kt],styles:['section[_ngcontent-%COMP%]{background:var(--bg2)}.cert-g[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(4,1fr);gap:2rem;margin-top:4rem}.cert-c[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;text-align:center;padding:2.5rem 1.5rem;border:1px solid var(--line);background:var(--bg);border-radius:2px;position:relative;overflow:hidden;transition:transform .3s var(--ease),border-color .3s,box-shadow .3s}.cert-c[_ngcontent-%COMP%]:before{content:"";position:absolute;inset:0;background:linear-gradient(135deg,rgba(var(--acc-rgb),.04),transparent);opacity:0;transition:opacity .3s}.cert-c[_ngcontent-%COMP%]:hover{transform:translateY(-4px);border-color:rgba(var(--acc-rgb),.35);box-shadow:var(--sh2)}.cert-c[_ngcontent-%COMP%]:hover:before{opacity:1}.cert-img[_ngcontent-%COMP%]{width:100px;height:100px;object-fit:contain;margin-bottom:1.5rem}.cert-name[_ngcontent-%COMP%]{font-family:var(--f1);font-size:1.15rem;font-weight:400;margin-bottom:.5rem;color:var(--ink);line-height:1.25}.cert-org[_ngcontent-%COMP%]{font-family:var(--f3);font-size:.6rem;color:var(--acc);letter-spacing:.14em;text-transform:uppercase;margin-bottom:.75rem}.cert-desc[_ngcontent-%COMP%]{font-size:.82rem;color:var(--ink2);font-weight:300;line-height:1.65}@media (max-width: 1100px){.cert-g[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr)}}@media (max-width: 600px){.cert-g[_ngcontent-%COMP%]{grid-template-columns:1fr}}'],changeDetection:0});var Bl=Bs;var jw=(i,e)=>e.title;function qw(i,e){if(i&1&&(L(0,"a",5)(1,"div",8),Le(2,"img",9),U(),L(3,"div",10)(4,"div",11),O(5),U(),L(6,"div",12),O(7),U(),L(8,"div",13),O(9),U(),L(10,"div",14)(11,"span",15),O(12),U(),L(13,"span",16),O(14,"Read \u2192"),U()()(),L(15,"div",17),Le(16,"img",18),L(17,"span",19),O(18,"Asrihsoufiane \xB7 Medium"),U()()()),i&2){let t=e.$implicit,n=e.$index;Ee("href",t.url,$t)("appReveal",n%2*150+100),$(2),Ee("src",t.coverImage,$t)("alt",t.title),$(3),$e(t.tag),$(2),$e(t.title),$(2),$e(t.description),$(3),vf("",t.date," \xB7 ",t.readTime)}}var Vs=class Vs{constructor(){this.articles=hg}};Vs.\u0275fac=function(t){return new(t||Vs)},Vs.\u0275cmp=rt({type:Vs,selectors:[["app-writing"]],decls:16,vars:3,consts:[["id","writing"],[1,"s-lbl",3,"appReveal"],[1,"s-num"],[1,"s-ttl",3,"appReveal"],[1,"wr-g"],["target","_blank","rel","noopener",1,"wr-c","hover-el",3,"href","appReveal"],[1,"more-link",3,"appReveal"],["href","https://medium.com/@asrihsoufiane","target","_blank","rel","noopener",1,"btn-o","hover-el"],[1,"wr-img-w"],["loading","lazy",1,"wr-img",3,"src","alt"],[1,"wr-body"],[1,"wr-tag"],[1,"wr-ttl"],[1,"wr-desc"],[1,"wr-meta"],[1,"wr-date"],[1,"wr-read"],[1,"wr-auth"],["src","assets/profile/soufiane.svg","alt","Asrihsoufiane","width","26","height","26","loading","lazy",1,"wr-av"],[1,"wr-an"]],template:function(t,n){t&1&&(L(0,"section",0)(1,"div",1)(2,"span",2),O(3,"06 //"),U(),O(4," Writing on Medium"),U(),L(5,"h2",3),O(6,"Sharing what"),Le(7,"br"),L(8,"em"),O(9,"I've learned."),U()(),L(10,"div",4),dt(11,qw,19,9,"a",5,jw),U(),L(13,"div",6)(14,"a",7),O(15," View all articles on Medium \u2192 "),U()()()),t&2&&($(),Ee("appReveal",0),$(4),Ee("appReveal",100),$(6),ht(n.articles),$(2),Ee("appReveal",300))},dependencies:[Kt],styles:["section[_ngcontent-%COMP%]{overflow:hidden}.wr-g[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,1fr);gap:1.5rem;margin-top:4rem}.wr-c[_ngcontent-%COMP%]{border:1px solid var(--line);background:var(--bg2);border-radius:2px;overflow:hidden;display:flex;flex-direction:column;transition:transform .3s var(--ease),box-shadow .3s,border-color .3s;text-decoration:none}.wr-c[_ngcontent-%COMP%]:hover{transform:translateY(-5px);box-shadow:var(--sh2);border-color:rgba(var(--acc-rgb),.3)}.wr-img-w[_ngcontent-%COMP%]{overflow:hidden;position:relative;height:220px;background:var(--bg3)}.wr-img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover;transition:transform .4s var(--ease);display:block}.wr-c[_ngcontent-%COMP%]:hover   .wr-img[_ngcontent-%COMP%]{transform:scale(1.04)}.wr-body[_ngcontent-%COMP%]{padding:1.8rem;flex:1;display:flex;flex-direction:column}.wr-tag[_ngcontent-%COMP%]{font-family:var(--f3);font-size:.54rem;color:var(--acc);letter-spacing:.18em;text-transform:uppercase;margin-bottom:.7rem}.wr-ttl[_ngcontent-%COMP%]{font-family:var(--f1);font-size:1.3rem;font-weight:400;line-height:1.28;margin-bottom:.75rem;color:var(--ink);letter-spacing:-.01em}.wr-desc[_ngcontent-%COMP%]{font-size:.85rem;color:var(--ink2);line-height:1.72;font-weight:300;flex:1;margin-bottom:1.2rem}.wr-meta[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding-top:1rem;border-top:1px solid var(--line)}.wr-date[_ngcontent-%COMP%]{font-family:var(--f3);font-size:.58rem;color:var(--ink3);letter-spacing:.08em}.wr-read[_ngcontent-%COMP%]{font-family:var(--f3);font-size:.58rem;color:var(--acc);letter-spacing:.1em;text-transform:uppercase;display:flex;align-items:center;gap:.35rem;transition:gap .25s}.wr-c[_ngcontent-%COMP%]:hover   .wr-read[_ngcontent-%COMP%]{gap:.6rem}.wr-auth[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.6rem;padding:.9rem 1.8rem;border-top:1px solid var(--line);background:var(--bg3)}.wr-av[_ngcontent-%COMP%]{width:26px;height:26px;border-radius:50%;object-fit:cover;border:1.5px solid var(--acc)}.wr-an[_ngcontent-%COMP%]{font-family:var(--f3);font-size:.58rem;color:var(--ink3);letter-spacing:.08em}.more-link[_ngcontent-%COMP%]{text-align:center;margin-top:3rem}@media (max-width: 900px){.wr-g[_ngcontent-%COMP%]{grid-template-columns:1fr}}"],changeDetection:0});var Vl=Vs;var Sg=(()=>{class i{_renderer;_elementRef;onChange=t=>{};onTouched=()=>{};constructor(t,n){this._renderer=t,this._elementRef=n}setProperty(t,n){this._renderer.setProperty(this._elementRef.nativeElement,t,n)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}static \u0275fac=function(n){return new(n||i)(xt(Ei),xt(Mn))};static \u0275dir=Ct({type:i})}return i})(),Ah=(()=>{class i extends Sg{static \u0275fac=(()=>{let t;return function(r){return(t||(t=bi(i)))(r||i)}})();static \u0275dir=Ct({type:i,features:[Hn]})}return i})(),Yl=new lt("");var Yw={provide:Yl,useExisting:ji(()=>Zl),multi:!0};function Zw(){let i=bn()?bn().getUserAgent():"";return/android (\d+)/.test(i.toLowerCase())}var Jw=new lt(""),Zl=(()=>{class i extends Sg{_compositionMode;_composing=!1;constructor(t,n,r){super(t,n),this._compositionMode=r,this._compositionMode==null&&(this._compositionMode=!Zw())}writeValue(t){let n=t??"";this.setProperty("value",n)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static \u0275fac=function(n){return new(n||i)(xt(Ei),xt(Mn),xt(Jw,8))};static \u0275dir=Ct({type:i,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(n,r){n&1&&Xt("input",function(o){return r._handleInput(o.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(o){return r._compositionEnd(o.target.value)})},standalone:!1,features:[Ki([Yw]),Hn]})}return i})();function Kw(i){return i==null||Qw(i)===0}function Qw(i){return i==null?null:Array.isArray(i)||typeof i=="string"?i.length:i instanceof Set?i.size:null}var Th=new lt(""),bg=new lt("");function eE(i){return Kw(i.value)?{required:!0}:null}function fg(i){return null}function wg(i){return i!=null}function Eg(i){return no(i)?rn(i):i}function Cg(i){let e={};return i.forEach(t=>{e=t!=null?pe(pe({},e),t):e}),Object.keys(e).length===0?null:e}function Ag(i,e){return e.map(t=>t(i))}function tE(i){return!i.validate}function Tg(i){return i.map(e=>tE(e)?e:t=>e.validate(t))}function nE(i){if(!i)return null;let e=i.filter(wg);return e.length==0?null:function(t){return Cg(Ag(t,e))}}function Dh(i){return i!=null?nE(Tg(i)):null}function iE(i){if(!i)return null;let e=i.filter(wg);return e.length==0?null:function(t){let n=Ag(t,e).map(Eg);return Zh(n).pipe(at(Cg))}}function Rh(i){return i!=null?iE(Tg(i)):null}function pg(i,e){return i===null?[e]:Array.isArray(i)?[...i,e]:[i,e]}function rE(i){return i._rawValidators}function sE(i){return i._rawAsyncValidators}function Eh(i){return i?Array.isArray(i)?i:[i]:[]}function Hl(i,e){return Array.isArray(i)?i.includes(e):i===e}function mg(i,e){let t=Eh(e);return Eh(i).forEach(r=>{Hl(t,r)||t.push(r)}),t}function gg(i,e){return Eh(e).filter(t=>!Hl(i,t))}var Gl=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=Dh(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=Rh(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,t){return this.control?this.control.hasError(e,t):!1}getError(e,t){return this.control?this.control.getError(e,t):null}},Gs=class extends Gl{name;get formDirective(){return null}get path(){return null}},Jo=class extends Gl{_parent=null;name=null;valueAccessor=null},Wl=class{_cd;constructor(e){this._cd=e}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},oE={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},yR=yt(pe({},oE),{"[class.ng-submitted]":"isSubmitted"}),Dg=(()=>{class i extends Wl{constructor(t){super(t)}static \u0275fac=function(n){return new(n||i)(xt(Jo,2))};static \u0275dir=Ct({type:i,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(n,r){n&2&&kt("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},standalone:!1,features:[Hn]})}return i})(),Rg=(()=>{class i extends Wl{constructor(t){super(t)}static \u0275fac=function(n){return new(n||i)(xt(Gs,10))};static \u0275dir=Ct({type:i,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(n,r){n&2&&kt("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)("ng-submitted",r.isSubmitted)},standalone:!1,features:[Hn]})}return i})();var Xo="VALID",zl="INVALID",zs="PENDING",jo="DISABLED",Gi=class{},$l=class extends Gi{value;source;constructor(e,t){super(),this.value=e,this.source=t}},Yo=class extends Gi{pristine;source;constructor(e,t){super(),this.pristine=e,this.source=t}},Zo=class extends Gi{touched;source;constructor(e,t){super(),this.touched=e,this.source=t}},Hs=class extends Gi{status;source;constructor(e,t){super(),this.status=e,this.source=t}},Ch=class extends Gi{source;constructor(e){super(),this.source=e}},Xl=class extends Gi{source;constructor(e){super(),this.source=e}};function Ig(i){return(Jl(i)?i.validators:i)||null}function aE(i){return Array.isArray(i)?Dh(i):i||null}function Pg(i,e){return(Jl(e)?e.asyncValidators:i)||null}function lE(i){return Array.isArray(i)?Rh(i):i||null}function Jl(i){return i!=null&&!Array.isArray(i)&&typeof i=="object"}function cE(i,e,t){let n=i.controls;if(!(e?Object.keys(n):n).length)throw new Ye(1e3,"");if(!n[t])throw new Ye(1001,"")}function uE(i,e,t){i._forEachChild((n,r)=>{if(t[r]===void 0)throw new Ye(1002,"")})}var jl=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(e,t){this._assignValidators(e),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get status(){return qt(this.statusReactive)}set status(e){qt(()=>this.statusReactive.set(e))}_status=Rn(()=>this.statusReactive());statusReactive=ct(void 0);get valid(){return this.status===Xo}get invalid(){return this.status===zl}get pending(){return this.status==zs}get disabled(){return this.status===jo}get enabled(){return this.status!==jo}errors;get pristine(){return qt(this.pristineReactive)}set pristine(e){qt(()=>this.pristineReactive.set(e))}_pristine=Rn(()=>this.pristineReactive());pristineReactive=ct(!0);get dirty(){return!this.pristine}get touched(){return qt(this.touchedReactive)}set touched(e){qt(()=>this.touchedReactive.set(e))}_touched=Rn(()=>this.touchedReactive());touchedReactive=ct(!1);get untouched(){return!this.touched}_events=new vn;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(mg(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(mg(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(gg(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(gg(e,this._rawAsyncValidators))}hasValidator(e){return Hl(this._rawValidators,e)}hasAsyncValidator(e){return Hl(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){let t=this.touched===!1;this.touched=!0;let n=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsTouched(yt(pe({},e),{sourceControl:n})),t&&e.emitEvent!==!1&&this._events.next(new Zo(!0,n))}markAllAsDirty(e={}){this.markAsDirty({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsDirty(e))}markAllAsTouched(e={}){this.markAsTouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsTouched(e))}markAsUntouched(e={}){let t=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let n=e.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:n})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,n),t&&e.emitEvent!==!1&&this._events.next(new Zo(!1,n))}markAsDirty(e={}){let t=this.pristine===!0;this.pristine=!1;let n=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsDirty(yt(pe({},e),{sourceControl:n})),t&&e.emitEvent!==!1&&this._events.next(new Yo(!1,n))}markAsPristine(e={}){let t=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let n=e.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:e.emitEvent})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e,n),t&&e.emitEvent!==!1&&this._events.next(new Yo(!0,n))}markAsPending(e={}){this.status=zs;let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new Hs(this.status,t)),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.markAsPending(yt(pe({},e),{sourceControl:t}))}disable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=jo,this.errors=null,this._forEachChild(r=>{r.disable(yt(pe({},e),{onlySelf:!0}))}),this._updateValue();let n=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new $l(this.value,n)),this._events.next(new Hs(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(yt(pe({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=Xo,this._forEachChild(n=>{n.enable(yt(pe({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(yt(pe({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(e,t){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine({},t),this._parent._updateTouched({},t))}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let n=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===Xo||this.status===zs)&&this._runAsyncValidator(n,e.emitEvent)}let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new $l(this.value,t)),this._events.next(new Hs(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(yt(pe({},e),{sourceControl:t}))}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?jo:Xo}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e,t){if(this.asyncValidator){this.status=zs,this._hasOwnPendingAsyncValidator={emitEvent:t!==!1,shouldHaveEmitted:e!==!1};let n=Eg(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:t,shouldHaveEmitted:e})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let e=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,e}return!1}setErrors(e,t={}){this.errors=e,this._updateControlsErrors(t.emitEvent!==!1,this,t.shouldHaveEmitted)}get(e){let t=e;return t==null||(Array.isArray(t)||(t=t.split(".")),t.length===0)?null:t.reduce((n,r)=>n&&n._find(r),this)}getError(e,t){let n=t?this.get(t):this;return n&&n.errors?n.errors[e]:null}hasError(e,t){return!!this.getError(e,t)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e,t,n){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),(e||n)&&this._events.next(new Hs(this.status,t)),this._parent&&this._parent._updateControlsErrors(e,t,n)}_initObservables(){this.valueChanges=new Dn,this.statusChanges=new Dn}_calculateStatus(){return this._allControlsDisabled()?jo:this.errors?zl:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(zs)?zs:this._anyControlsHaveStatus(zl)?zl:Xo}_anyControlsHaveStatus(e){return this._anyControls(t=>t.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e,t){let n=!this._anyControlsDirty(),r=this.pristine!==n;this.pristine=n,this._parent&&!e.onlySelf&&this._parent._updatePristine(e,t),r&&this._events.next(new Yo(this.pristine,t))}_updateTouched(e={},t){this.touched=this._anyControlsTouched(),this._events.next(new Zo(this.touched,t)),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,t)}_onDisabledChange=[];_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){Jl(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let t=this._parent&&this._parent.dirty;return!e&&!!t&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=aE(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=lE(this._rawAsyncValidators)}},ql=class extends jl{constructor(e,t,n){super(Ig(t),Pg(n,t)),this.controls=e,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(e,t){return this.controls[e]?this.controls[e]:(this.controls[e]=t,t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange),t)}addControl(e,t,n={}){this.registerControl(e,t),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}removeControl(e,t={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}setControl(e,t,n={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],t&&this.registerControl(e,t),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,t={}){uE(this,!0,e),Object.keys(e).forEach(n=>{cE(this,!0,n),this.controls[n].setValue(e[n],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(e,t={}){e!=null&&(Object.keys(e).forEach(n=>{let r=this.controls[n];r&&r.patchValue(e[n],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(e={},t={}){this._forEachChild((n,r)=>{n.reset(e?e[r]:null,{onlySelf:!0,emitEvent:t.emitEvent})}),this._updatePristine(t,this),this._updateTouched(t,this),this.updateValueAndValidity(t),t?.emitEvent!==!1&&this._events.next(new Xl(this))}getRawValue(){return this._reduceChildren({},(e,t,n)=>(e[n]=t.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(t,n)=>n._syncPendingControls()?!0:t);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(t=>{let n=this.controls[t];n&&e(n,t)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[t,n]of Object.entries(this.controls))if(this.contains(t)&&e(n))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(t,n,r)=>((n.enabled||this.disabled)&&(t[r]=n.value),t))}_reduceChildren(e,t){let n=e;return this._forEachChild((r,s)=>{n=t(n,r,s)}),n}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}};var Ih=new lt("",{providedIn:"root",factory:()=>Ph}),Ph="always";function dE(i,e){return[...e.path,i]}function Og(i,e,t=Ph){Fg(i,e),e.valueAccessor.writeValue(i.value),(i.disabled||t==="always")&&e.valueAccessor.setDisabledState?.(i.disabled),fE(i,e),mE(i,e),pE(i,e),hE(i,e)}function vg(i,e){i.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(e)})}function hE(i,e){if(e.valueAccessor.setDisabledState){let t=n=>{e.valueAccessor.setDisabledState(n)};i.registerOnDisabledChange(t),e._registerOnDestroy(()=>{i._unregisterOnDisabledChange(t)})}}function Fg(i,e){let t=rE(i);e.validator!==null?i.setValidators(pg(t,e.validator)):typeof t=="function"&&i.setValidators([t]);let n=sE(i);e.asyncValidator!==null?i.setAsyncValidators(pg(n,e.asyncValidator)):typeof n=="function"&&i.setAsyncValidators([n]);let r=()=>i.updateValueAndValidity();vg(e._rawValidators,r),vg(e._rawAsyncValidators,r)}function fE(i,e){e.valueAccessor.registerOnChange(t=>{i._pendingValue=t,i._pendingChange=!0,i._pendingDirty=!0,i.updateOn==="change"&&Lg(i,e)})}function pE(i,e){e.valueAccessor.registerOnTouched(()=>{i._pendingTouched=!0,i.updateOn==="blur"&&i._pendingChange&&Lg(i,e),i.updateOn!=="submit"&&i.markAsTouched()})}function Lg(i,e){i._pendingDirty&&i.markAsDirty(),i.setValue(i._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(i._pendingValue),i._pendingChange=!1}function mE(i,e){let t=(n,r)=>{e.valueAccessor.writeValue(n),r&&e.viewToModelUpdate(n)};i.registerOnChange(t),e._registerOnDestroy(()=>{i._unregisterOnChange(t)})}function gE(i,e){i==null,Fg(i,e)}function vE(i,e){if(!i.hasOwnProperty("model"))return!1;let t=i.model;return t.isFirstChange()?!0:!Object.is(e,t.currentValue)}function _E(i){return Object.getPrototypeOf(i.constructor)===Ah}function yE(i,e){i._syncPendingControls(),e.forEach(t=>{let n=t.control;n.updateOn==="submit"&&n._pendingChange&&(t.viewToModelUpdate(n._pendingValue),n._pendingChange=!1)})}function xE(i,e){if(!e)return null;Array.isArray(e);let t,n,r;return e.forEach(s=>{s.constructor===Zl?t=s:_E(s)?n=s:r=s}),r||n||t||null}var ME={provide:Gs,useExisting:ji(()=>Oh)},qo=Promise.resolve(),Oh=(()=>{class i extends Gs{callSetDisabledState;get submitted(){return qt(this.submittedReactive)}_submitted=Rn(()=>this.submittedReactive());submittedReactive=ct(!1);_directives=new Set;form;ngSubmit=new Dn;options;constructor(t,n,r){super(),this.callSetDisabledState=r,this.form=new ql({},Dh(t),Rh(n))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(t){qo.then(()=>{let n=this._findContainer(t.path);t.control=n.registerControl(t.name,t.control),Og(t.control,t,this.callSetDisabledState),t.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(t)})}getControl(t){return this.form.get(t.path)}removeControl(t){qo.then(()=>{let n=this._findContainer(t.path);n&&n.removeControl(t.name),this._directives.delete(t)})}addFormGroup(t){qo.then(()=>{let n=this._findContainer(t.path),r=new ql({});gE(r,t),n.registerControl(t.name,r),r.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(t){qo.then(()=>{let n=this._findContainer(t.path);n&&n.removeControl(t.name)})}getFormGroup(t){return this.form.get(t.path)}updateModel(t,n){qo.then(()=>{this.form.get(t.path).setValue(n)})}setValue(t){this.control.setValue(t)}onSubmit(t){return this.submittedReactive.set(!0),yE(this.form,this._directives),this.ngSubmit.emit(t),this.form._events.next(new Ch(this.control)),t?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(t=void 0){this.form.reset(t),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(t){return t.pop(),t.length?this.form.get(t):this.form}static \u0275fac=function(n){return new(n||i)(xt(Th,10),xt(bg,10),xt(Ih,8))};static \u0275dir=Ct({type:i,selectors:[["form",3,"ngNoForm","",3,"formGroup",""],["ng-form"],["","ngForm",""]],hostBindings:function(n,r){n&1&&Xt("submit",function(o){return r.onSubmit(o)})("reset",function(){return r.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[Ki([ME]),Hn]})}return i})();function _g(i,e){let t=i.indexOf(e);t>-1&&i.splice(t,1)}function yg(i){return typeof i=="object"&&i!==null&&Object.keys(i).length===2&&"value"in i&&"disabled"in i}var SE=class extends jl{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(e=null,t,n){super(Ig(t),Pg(n,t)),this._applyFormState(e),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Jl(t)&&(t.nonNullable||t.initialValueIsDefault)&&(yg(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,t={}){this.value=this._pendingValue=e,this._onChange.length&&t.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,t.emitViewToModelChange!==!1)),this.updateValueAndValidity(t)}patchValue(e,t={}){this.setValue(e,t)}reset(e=this.defaultValue,t={}){this._applyFormState(e),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),this._pendingChange=!1,t?.emitEvent!==!1&&this._events.next(new Xl(this))}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){_g(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){_g(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){yg(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var bE={provide:Jo,useExisting:ji(()=>Fh)},xg=Promise.resolve(),Fh=(()=>{class i extends Jo{_changeDetectorRef;callSetDisabledState;control=new SE;static ngAcceptInputType_isDisabled;_registered=!1;viewModel;name="";isDisabled;model;options;update=new Dn;constructor(t,n,r,s,o,a){super(),this._changeDetectorRef=o,this.callSetDisabledState=a,this._parent=t,this._setValidators(n),this._setAsyncValidators(r),this.valueAccessor=xE(this,s)}ngOnChanges(t){if(this._checkForErrors(),!this._registered||"name"in t){if(this._registered&&(this._checkName(),this.formDirective)){let n=t.name.previousValue;this.formDirective.removeControl({name:n,path:this._getPath(n)})}this._setUpControl()}"isDisabled"in t&&this._updateDisabled(t),vE(t,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){Og(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._checkName()}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(t){xg.then(()=>{this.control.setValue(t,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(t){let n=t.isDisabled.currentValue,r=n!==0&&so(n);xg.then(()=>{r&&!this.control.disabled?this.control.disable():!r&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(t){return this._parent?dE(t,this._parent):[t]}static \u0275fac=function(n){return new(n||i)(xt(Gs,9),xt(Th,10),xt(bg,10),xt(Yl,10),xt(Ti,8),xt(Ih,8))};static \u0275dir=Ct({type:i,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],standalone:!1,features:[Ki([bE]),Hn,Zi]})}return i})();var Ng=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275dir=Ct({type:i,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return i})();var wE={provide:Yl,useExisting:ji(()=>Kl),multi:!0};function Ug(i,e){return i==null?`${e}`:(e&&typeof e=="object"&&(e="Object"),`${i}: ${e}`.slice(0,50))}function EE(i){return i.split(":")[0]}var Kl=(()=>{class i extends Ah{value;_optionMap=new Map;_idCounter=0;set compareWith(t){this._compareWith=t}_compareWith=Object.is;appRefInjector=ne(aa).injector;destroyRef=ne(eo);cdr=ne(Ti);_queuedWrite=!1;_writeValueAfterRender(){this._queuedWrite||this.appRefInjector.destroyed||(this._queuedWrite=!0,ra({write:()=>{this.destroyRef.destroyed||(this._queuedWrite=!1,this.writeValue(this.value))}},{injector:this.appRefInjector}))}writeValue(t){this.cdr.markForCheck(),this.value=t;let n=this._getOptionId(t),r=Ug(n,t);this.setProperty("value",r)}registerOnChange(t){this.onChange=n=>{this.value=this._getOptionValue(n),t(this.value)}}_registerOption(){return(this._idCounter++).toString()}_getOptionId(t){for(let n of this._optionMap.keys())if(this._compareWith(this._optionMap.get(n),t))return n;return null}_getOptionValue(t){let n=EE(t);return this._optionMap.has(n)?this._optionMap.get(n):t}static \u0275fac=(()=>{let t;return function(r){return(t||(t=bi(i)))(r||i)}})();static \u0275dir=Ct({type:i,selectors:[["select","formControlName","",3,"multiple",""],["select","formControl","",3,"multiple",""],["select","ngModel","",3,"multiple",""]],hostBindings:function(n,r){n&1&&Xt("change",function(o){return r.onChange(o.target.value)})("blur",function(){return r.onTouched()})},inputs:{compareWith:"compareWith"},standalone:!1,features:[Ki([wE]),Hn]})}return i})(),kg=(()=>{class i{_element;_renderer;_select;id;constructor(t,n,r){this._element=t,this._renderer=n,this._select=r,this._select&&(this.id=this._select._registerOption())}set ngValue(t){this._select!=null&&(this._select._optionMap.set(this.id,t),this._setElementValue(Ug(this.id,t)),this._select._writeValueAfterRender())}set value(t){this._setElementValue(t),this._select&&this._select._writeValueAfterRender()}_setElementValue(t){this._renderer.setProperty(this._element.nativeElement,"value",t)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select._writeValueAfterRender())}static \u0275fac=function(n){return new(n||i)(xt(Mn),xt(Ei),xt(Kl,9))};static \u0275dir=Ct({type:i,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"},standalone:!1})}return i})(),CE={provide:Yl,useExisting:ji(()=>Bg),multi:!0};function Mg(i,e){return i==null?`${e}`:(typeof e=="string"&&(e=`'${e}'`),e&&typeof e=="object"&&(e="Object"),`${i}: ${e}`.slice(0,50))}function AE(i){return i.split(":")[0]}var Bg=(()=>{class i extends Ah{value;_optionMap=new Map;_idCounter=0;set compareWith(t){this._compareWith=t}_compareWith=Object.is;writeValue(t){this.value=t;let n;if(Array.isArray(t)){let r=t.map(s=>this._getOptionId(s));n=(s,o)=>{s._setSelected(r.indexOf(o.toString())>-1)}}else n=(r,s)=>{r._setSelected(!1)};this._optionMap.forEach(n)}registerOnChange(t){this.onChange=n=>{let r=[],s=n.selectedOptions;if(s!==void 0){let o=s;for(let a=0;a<o.length;a++){let l=o[a],c=this._getOptionValue(l.value);r.push(c)}}else{let o=n.options;for(let a=0;a<o.length;a++){let l=o[a];if(l.selected){let c=this._getOptionValue(l.value);r.push(c)}}}this.value=r,t(r)}}_registerOption(t){let n=(this._idCounter++).toString();return this._optionMap.set(n,t),n}_getOptionId(t){for(let n of this._optionMap.keys())if(this._compareWith(this._optionMap.get(n)._value,t))return n;return null}_getOptionValue(t){let n=AE(t);return this._optionMap.has(n)?this._optionMap.get(n)._value:t}static \u0275fac=(()=>{let t;return function(r){return(t||(t=bi(i)))(r||i)}})();static \u0275dir=Ct({type:i,selectors:[["select","multiple","","formControlName",""],["select","multiple","","formControl",""],["select","multiple","","ngModel",""]],hostBindings:function(n,r){n&1&&Xt("change",function(o){return r.onChange(o.target)})("blur",function(){return r.onTouched()})},inputs:{compareWith:"compareWith"},standalone:!1,features:[Ki([CE]),Hn]})}return i})(),Vg=(()=>{class i{_element;_renderer;_select;id;_value;constructor(t,n,r){this._element=t,this._renderer=n,this._select=r,this._select&&(this.id=this._select._registerOption(this))}set ngValue(t){this._select!=null&&(this._value=t,this._setElementValue(Mg(this.id,t)),this._select.writeValue(this._select.value))}set value(t){this._select?(this._value=t,this._setElementValue(Mg(this.id,t)),this._select.writeValue(this._select.value)):this._setElementValue(t)}_setElementValue(t){this._renderer.setProperty(this._element.nativeElement,"value",t)}_setSelected(t){this._renderer.setProperty(this._element.nativeElement,"selected",t)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}static \u0275fac=function(n){return new(n||i)(xt(Mn),xt(Ei),xt(Bg,9))};static \u0275dir=Ct({type:i,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"},standalone:!1})}return i})();var TE=(()=>{class i{_validator=fg;_onChange;_enabled;ngOnChanges(t){if(this.inputName in t){let n=this.normalizeInput(t[this.inputName].currentValue);this._enabled=this.enabled(n),this._validator=this._enabled?this.createValidator(n):fg,this._onChange&&this._onChange()}}validate(t){return this._validator(t)}registerOnValidatorChange(t){this._onChange=t}enabled(t){return t!=null}static \u0275fac=function(n){return new(n||i)};static \u0275dir=Ct({type:i,features:[Zi]})}return i})();var DE={provide:Th,useExisting:ji(()=>Lh),multi:!0};var Lh=(()=>{class i extends TE{required;inputName="required";normalizeInput=so;createValidator=t=>eE;enabled(t){return t}static \u0275fac=(()=>{let t;return function(r){return(t||(t=bi(i)))(r||i)}})();static \u0275dir=Ct({type:i,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(n,r){n&2&&Ci("required",r._enabled?"":null)},inputs:{required:"required"},standalone:!1,features:[Ki([DE]),Hn]})}return i})();var RE=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=Ji({type:i});static \u0275inj=qi({})}return i})();var zg=(()=>{class i{static withConfig(t){return{ngModule:i,providers:[{provide:Ih,useValue:t.callSetDisabledState??Ph}]}}static \u0275fac=function(n){return new(n||i)};static \u0275mod=Ji({type:i});static \u0275inj=qi({imports:[RE]})}return i})();var Cr=class Cr{constructor(){this.toasts=ct([]);this.counter=0}show(e,t="info",n=4200){let r=++this.counter;this.toasts.update(s=>[...s,{id:r,message:e,type:t}]),setTimeout(()=>this.remove(r),n)}success(e){this.show(e,"suc")}error(e){this.show(e,"err")}remove(e){this.toasts.update(t=>t.filter(n=>n.id!==e))}};Cr.\u0275fac=function(t){return new(t||Cr)},Cr.\u0275prov=Re({token:Cr,factory:Cr.\u0275fac,providedIn:"root"});var Wi=Cr;var PE="JzJlbmIoQ5-ujtIgN",OE="service_6womk7q",FE="template_s2wirfx",Ar=class Ar{constructor(){this.toast=new Wi;this.sending=ct(!1);this.ejReady=!0;this.ejReady&&this.loadEmailJS()}loadEmailJS(){let e=document.createElement("script");e.src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js",e.onload=()=>window.emailjs?.init(PE),document.head.appendChild(e)}send(e,t){return zn(this,null,function*(){if(this.sending.set(!0),this.ejReady&&window.emailjs)try{yield window.emailjs.send(OE,FE,{from_name:e.name,reply_to:e.email,company:e.company||"N/A",enquiry_type:e.type||"General",message:e.message}),t.success("\u2713 Sent! I'll reply to "+e.email+" within 24h.")}catch{t.error("Send failed \u2014 email me directly at asrihsoufiane@gmail.com")}else yield new Promise(n=>setTimeout(n,500)),t.show("Demo mode \u2014 add your EmailJS keys in contact.service.ts to activate real sending.","info");this.sending.set(!1)})}};Ar.\u0275fac=function(t){return new(t||Ar)},Ar.\u0275prov=Re({token:Ar,factory:Ar.\u0275fac,providedIn:"root"});var Ql=Ar;var LE=(i,e)=>e.label;function NE(i,e){if(i&1&&(L(0,"a",8)(1,"span"),O(2),U(),L(3,"span",25),O(4,"\u2192"),U()()),i&2){let t=e.$implicit;Ee("href",t.href,$t)("target",t.external?"_blank":"_self"),$(2),$e(t.label)}}function UE(i,e){i&1&&O(0," Sending\u2026 ")}function kE(i,e){i&1&&O(0," Send message \u2192 ")}var Ws=class Ws{constructor(){this.contactSvc=ne(Ql);this.toast=ne(Wi);this.form={name:"",email:"",company:"",type:"",message:""};this.channels=[{label:"asrihsoufiane@gmail.com",href:"mailto:asrihsoufiane@gmail.com"},{label:"+212 677 604 950",href:"tel:+212677604950"},{label:"LinkedIn \u2014 16K+ connections",href:"https://linkedin.com/in/soufiane-asrih-274303125",external:!0},{label:"GitHub \u2014 Asrih7 (23 repos)",href:"https://github.com/Asrih7",external:!0},{label:"Medium \u2014 @asrihsoufiane",href:"https://medium.com/@asrihsoufiane",external:!0}]}submit(){return zn(this,null,function*(){if(!this.form.name.trim()||!this.form.email.trim()||!this.form.message.trim()){this.toast.error("Please fill in all required fields.");return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.form.email)){this.toast.error("Please enter a valid email address.");return}yield this.contactSvc.send(this.form,this.toast),this.contactSvc.sending()||(this.form={name:"",email:"",company:"",type:"",message:""})})}};Ws.\u0275fac=function(t){return new(t||Ws)},Ws.\u0275cmp=rt({type:Ws,selectors:[["app-contact"]],decls:58,vars:12,consts:[["f","ngForm"],["id","contact"],[1,"s-lbl",3,"appReveal"],[1,"s-num"],[1,"ct-g"],[1,"ct-big",3,"appReveal"],[1,"ct-sub",3,"appReveal"],[1,"ct-chs",3,"appReveal"],["rel","noopener",1,"ct-ch","hover-el",3,"href","target"],[3,"appReveal"],["novalidate","",1,"ct-form",3,"ngSubmit"],[1,"f-row"],[1,"fg"],["for","f-name"],["id","f-name","name","name","type","text","placeholder","Jane Smith","autocomplete","name","required","",3,"ngModelChange","ngModel"],["for","f-email"],["id","f-email","name","email","type","email","placeholder","jane@company.com","autocomplete","email","required","",3,"ngModelChange","ngModel"],["for","f-company"],["id","f-company","name","company","type","text","placeholder","Acme Corp","autocomplete","organization",3,"ngModelChange","ngModel"],["for","f-type"],["id","f-type","name","type",3,"ngModelChange","ngModel"],["value",""],["for","f-msg"],["id","f-msg","name","message","placeholder","Tell me about the role or project\u2026","required","",3,"ngModelChange","ngModel"],["type","submit",1,"btn-send","hover-el",3,"disabled"],[1,"ct-arr"]],template:function(t,n){if(t&1){let r=Qt();L(0,"section",1)(1,"div",2)(2,"span",3),O(3,"07 //"),U(),O(4," Contact"),U(),L(5,"div",4)(6,"div")(7,"div",5),O(8," Let's build"),Le(9,"br"),O(10,"something"),Le(11,"br"),L(12,"em"),O(13,"great."),U()(),L(14,"p",6),O(15," Looking for a Senior Angular Architect to elevate your frontend or lead a Scrum team? Open to senior roles worldwide and select freelance engagements. "),U(),L(16,"div",7),dt(17,NE,5,3,"a",8,LE),U()(),L(19,"div",9)(20,"form",10,0),Xt("ngSubmit",function(){return Dt(r),Rt(n.submit())}),L(22,"div",11)(23,"div",12)(24,"label",13),O(25,"Full Name *"),U(),L(26,"input",14),Lr("ngModelChange",function(o){return Dt(r),Fr(n.form.name,o)||(n.form.name=o),Rt(o)}),U()(),L(27,"div",12)(28,"label",15),O(29,"Email *"),U(),L(30,"input",16),Lr("ngModelChange",function(o){return Dt(r),Fr(n.form.email,o)||(n.form.email=o),Rt(o)}),U()()(),L(31,"div",12)(32,"label",17),O(33,"Company"),U(),L(34,"input",18),Lr("ngModelChange",function(o){return Dt(r),Fr(n.form.company,o)||(n.form.company=o),Rt(o)}),U()(),L(35,"div",12)(36,"label",19),O(37,"Enquiry Type"),U(),L(38,"select",20),Lr("ngModelChange",function(o){return Dt(r),Fr(n.form.type,o)||(n.form.type=o),Rt(o)}),L(39,"option",21),O(40,"Select\u2026"),U(),L(41,"option"),O(42,"Full-time Senior Role"),U(),L(43,"option"),O(44,"Freelance Project"),U(),L(45,"option"),O(46,"Technical Consulting"),U(),L(47,"option"),O(48,"Open Source / Collaboration"),U(),L(49,"option"),O(50,"Other"),U()()(),L(51,"div",12)(52,"label",22),O(53,"Message *"),U(),L(54,"textarea",23),Lr("ngModelChange",function(o){return Dt(r),Fr(n.form.message,o)||(n.form.message=o),Rt(o)}),U()(),L(55,"button",24),Gn(56,UE,1,0)(57,kE,1,0),U()()()()()}t&2&&($(),Ee("appReveal",0),$(6),Ee("appReveal",100),$(7),Ee("appReveal",200),$(2),Ee("appReveal",300),$(),ht(n.channels),$(2),Ee("appReveal",200),$(7),Or("ngModel",n.form.name),$(4),Or("ngModel",n.form.email),$(4),Or("ngModel",n.form.company),$(4),Or("ngModel",n.form.type),$(16),Or("ngModel",n.form.message),$(),Ee("disabled",n.contactSvc.sending()),$(),Wn(n.contactSvc.sending()?56:57))},dependencies:[zg,Ng,kg,Vg,Zl,Kl,Dg,Rg,Lh,Fh,Oh,Kt],styles:["section[_ngcontent-%COMP%]{overflow:hidden}.ct-g[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;gap:7rem;margin-top:4rem}.ct-big[_ngcontent-%COMP%]{font-family:var(--f1);font-size:clamp(3rem,6vw,6.5rem);font-weight:300;line-height:.95;letter-spacing:-.04em}.ct-big[_ngcontent-%COMP%]   em[_ngcontent-%COMP%]{font-style:italic;color:var(--acc)}.ct-sub[_ngcontent-%COMP%]{font-size:1rem;line-height:1.82;color:var(--ink2);margin-top:1.8rem;font-weight:300;max-width:420px}.ct-chs[_ngcontent-%COMP%]{margin-top:2.5rem}.ct-ch[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:1.1rem 0;border-top:1px solid var(--line);text-decoration:none;color:var(--ink2);font-size:.87rem;transition:color .25s;cursor:none}.ct-ch[_ngcontent-%COMP%]:last-child{border-bottom:1px solid var(--line)}.ct-ch[_ngcontent-%COMP%]:hover{color:var(--acc)}.ct-arr[_ngcontent-%COMP%]{color:var(--ink3);font-size:.72rem;transition:transform .25s}.ct-ch[_ngcontent-%COMP%]:hover   .ct-arr[_ngcontent-%COMP%]{transform:translate(5px);color:var(--acc)}.ct-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1.2rem}.f-row[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;gap:1rem}.fg[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:block;font-family:var(--f3);font-size:.59rem;color:var(--ink3);letter-spacing:.16em;text-transform:uppercase;margin-bottom:.4rem}.fg[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .fg[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], .fg[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{width:100%;padding:.82rem 0;background:transparent;border:none;border-bottom:1.5px solid var(--line);color:var(--ink);font-family:var(--f2);font-size:.9rem;outline:none;transition:border-color .25s;font-weight:300;appearance:none}[_ngcontent-%COMP%]:is(.fg input,.fg textarea,.fg select):focus{border-color:var(--acc)}[_ngcontent-%COMP%]:is(.fg input,.fg textarea,.fg select)::placeholder{color:var(--ink3)}.fg[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{min-height:115px;resize:none}.fg[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{color:var(--ink2)}.f-note[_ngcontent-%COMP%]{font-family:var(--f3);font-size:.58rem;color:var(--ink3);letter-spacing:.06em;line-height:1.6;padding:.75rem;border:1px solid var(--line);border-radius:2px;background:var(--bg2)}.f-note[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:var(--acc)}.f-note[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{color:#2ecc71}.btn-send[_ngcontent-%COMP%]{align-self:flex-start;padding:.88rem 2.1rem;background:var(--acc);color:#fff;font-family:var(--f3);font-size:.67rem;letter-spacing:.12em;text-transform:uppercase;border:none;border-radius:2px;transition:background .25s,transform .25s}.btn-send[_ngcontent-%COMP%]:hover:not(:disabled){background:var(--ink);transform:translateY(-2px)}.btn-send[_ngcontent-%COMP%]:disabled{opacity:.6}@media (max-width: 900px){.ct-g[_ngcontent-%COMP%]{grid-template-columns:1fr;gap:4rem}.f-row[_ngcontent-%COMP%]{grid-template-columns:1fr}}"],changeDetection:0});var ec=Ws;var $s=class $s{constructor(){this.year=new Date().getFullYear()}};$s.\u0275fac=function(t){return new(t||$s)},$s.\u0275cmp=rt({type:$s,selectors:[["app-footer"]],decls:11,vars:1,consts:[[1,"f-c"],[1,"f-r"],["href","mailto:asrihsoufiane@gmail.com"]],template:function(t,n){t&1&&(ft(0,"footer")(1,"span"),O(2),ft(3,"b"),O(4,"Soufiane Asrih"),Mt(),O(5," \xB7 SA7Tec"),Mt(),ft(6,"span",0),O(7,"T\xE9touan, Morocco \u{1F1F2}\u{1F1E6} "),Mt(),ft(8,"span",1)(9,"a",2),O(10,"asrihsoufiane@gmail.com"),Mt()()()),t&2&&($(2),Sn("\xA9 ",n.year," "))},styles:["footer[_ngcontent-%COMP%]{padding:2rem 5vw;border-top:1px solid var(--line);display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:1rem;font-family:var(--f3);font-size:.59rem;color:var(--ink3);letter-spacing:.1em;text-transform:uppercase}footer[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]{color:var(--acc);font-weight:400}.f-c[_ngcontent-%COMP%]{text-align:center}.f-r[_ngcontent-%COMP%]{text-align:right}.f-r[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--ink3);text-decoration:none;transition:color .25s}.f-r[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:var(--acc)}@media (max-width: 900px){footer[_ngcontent-%COMP%]{grid-template-columns:1fr;text-align:center}.f-c[_ngcontent-%COMP%], .f-r[_ngcontent-%COMP%]{text-align:center}}"],changeDetection:0});var tc=$s;var BE=(i,e)=>e.id;function VE(i,e){if(i&1){let t=Qt();ft(0,"div",2),ei("click",function(){let r=Dt(t).$implicit,s=Lt();return Rt(s.toast.remove(r.id))}),O(1),Mt()}if(i&2){let t=e.$implicit;gf(t.type),$(),Sn(" ",t.message," ")}}var Xs=class Xs{constructor(){this.toast=ne(Wi)}};Xs.\u0275fac=function(t){return new(t||Xs)},Xs.\u0275cmp=rt({type:Xs,selectors:[["app-toast-container"]],decls:3,vars:0,consts:[["role","status","aria-live","polite","aria-atomic","true",1,"toast-wrap"],[1,"toast",3,"class"],[1,"toast",3,"click"]],template:function(t,n){t&1&&(ft(0,"div",0),dt(1,VE,2,3,"div",1,BE),Mt()),t&2&&($(),ht(n.toast.toasts()))},styles:[".toast-wrap[_ngcontent-%COMP%]{position:fixed;bottom:2rem;right:2rem;z-index:800;display:flex;flex-direction:column;gap:.7rem;max-width:340px;pointer-events:none}.toast[_ngcontent-%COMP%]{padding:.9rem 1.4rem;background:var(--ink);color:var(--bg);font-family:var(--f3);font-size:.7rem;letter-spacing:.07em;border-left:3px solid var(--acc);border-radius:2px;animation:_ngcontent-%COMP%_toIn .4s var(--ease) forwards;box-shadow:var(--sh2);pointer-events:all;cursor:pointer}.toast.suc[_ngcontent-%COMP%]{border-color:#2ecc71}.toast.err[_ngcontent-%COMP%]{border-color:#e74c3c}@keyframes _ngcontent-%COMP%_toIn{0%{opacity:0;transform:translate(20px)}to{opacity:1;transform:none}}"],changeDetection:0});var nc=Xs;function zE(i,e){if(i&1){let t=Qt();L(0,"button",3),Xt("click",function(){Dt(t);let r=Lt();return Rt(r.scroll.toTop())}),O(1,"\u2191"),U()}}var js=class js{constructor(){this.scroll=ne(Ri);this.theme=ne(Zr);this.platformId=ne(Ft);this.isDark=Rn(()=>this.theme.theme()==="dark")}ngOnInit(){this.scroll.init()}ngAfterViewInit(){Bt(this.platformId)&&(document.addEventListener("keydown",e=>{e.key==="Tab"&&(document.body.style.cursor="auto")}),document.addEventListener("mousemove",()=>{document.body.style.cursor="none"}))}};js.\u0275fac=function(t){return new(t||js)},js.\u0275cmp=rt({type:js,selectors:[["app-root"]],decls:16,vars:3,consts:[["id","scroll-progress","role","progressbar","aria-label","Page scroll progress"],["id","main-content"],["aria-label","Back to top",1,"btt","hover-el"],["aria-label","Back to top",1,"btt","hover-el",3,"click"]],template:function(t,n){t&1&&(Le(0,"app-loader")(1,"app-cursor")(2,"div",0)(3,"app-navbar"),L(4,"main",1),Le(5,"app-hero")(6,"app-about")(7,"app-skills")(8,"app-experience")(9,"app-packages")(10,"app-certifications")(11,"app-writing")(12,"app-contact"),U(),Le(13,"app-footer")(14,"app-toast-container"),Gn(15,zE,2,0,"button",2)),t&2&&($(2),ro("transform","scaleX("+n.scroll.progress()+")"),$(13),Wn(n.scroll.showBtt()?15:-1))},dependencies:[Pa,Oa,Fa,Fl,Ll,Nl,Ul,kl,Bl,Vl,ec,tc,nc],styles:["[_nghost-%COMP%]{display:block}#scroll-progress[_ngcontent-%COMP%]{position:fixed;top:0;left:0;right:0;z-index:500;height:2px;background:var(--acc);transform-origin:left;pointer-events:none;transition:transform .08s linear}.btt[_ngcontent-%COMP%]{position:fixed;bottom:2rem;left:2rem;z-index:400;width:40px;height:40px;background:var(--bg);border:1px solid var(--line);color:var(--ink2);border-radius:2px;font-size:1rem;display:flex;align-items:center;justify-content:center;box-shadow:var(--sh);transition:background .25s,color .25s,border-color .25s,transform .25s;animation:_ngcontent-%COMP%_bttIn .35s var(--ease) forwards}.btt[_ngcontent-%COMP%]:hover{background:var(--acc);color:#fff;border-color:var(--acc);transform:translateY(-2px)}@keyframes _ngcontent-%COMP%_bttIn{0%{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}.skip-link[_ngcontent-%COMP%]{position:absolute;top:-100%;left:1rem;padding:.5rem 1rem;background:var(--acc);color:#fff;font-family:var(--f3);font-size:.75rem;letter-spacing:.1em;text-decoration:none;border-radius:0 0 2px 2px;z-index:9999}.skip-link[_ngcontent-%COMP%]:focus{top:0}"],changeDetection:0});var ic=js;kc(ic,Up).catch(i=>console.error(i));
