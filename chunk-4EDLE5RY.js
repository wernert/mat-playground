import{$ as A,Ca as I,Fa as D,_a as d,ba as s,ca as S,ea as h,eb as g,fb as M,ga as u,gc as L,ha as c,hc as B,ma as b,mc as p,na as f,oa as _,sc as m,ta as v}from"./chunk-O6HXM2TI.js";var k=null;function C(){return k}function je(n){k??=n}var O=class{};var $=new h(""),x=(()=>{class n{historyGo(e){throw new Error("")}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275prov=s({token:n,factory:()=>c(z),providedIn:"platform"})}}return n})();var z=(()=>{class n extends x{constructor(){super(),this._doc=c($),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return C().getBaseHref(this._doc)}onPopState(e){let t=C().getGlobalEventTarget(this._doc,"window");return t.addEventListener("popstate",e,!1),()=>t.removeEventListener("popstate",e)}onHashChange(e){let t=C().getGlobalEventTarget(this._doc,"window");return t.addEventListener("hashchange",e,!1),()=>t.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,t,i){this._history.pushState(e,t,i)}replaceState(e,t,i){this._history.replaceState(e,t,i)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275prov=s({token:n,factory:()=>new n,providedIn:"platform"})}}return n})();function U(n,r){if(n.length==0)return r;if(r.length==0)return n;let e=0;return n.endsWith("/")&&e++,r.startsWith("/")&&e++,e==2?n+r.substring(1):e==1?n+r:n+"/"+r}function R(n){let r=n.match(/#|\?|$/),e=r&&r.index||n.length,t=e-(n[e-1]==="/"?1:0);return n.slice(0,t)+n.slice(e)}function o(n){return n&&n[0]!=="?"?"?"+n:n}var w=(()=>{class n{historyGo(e){throw new Error("")}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275prov=s({token:n,factory:()=>c(j),providedIn:"root"})}}return n})(),V=new h(""),j=(()=>{class n extends w{constructor(e,t){super(),this._platformLocation=e,this._removeListenerFns=[],this._baseHref=t??this._platformLocation.getBaseHrefFromDOM()??c($).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return U(this._baseHref,e)}path(e=!1){let t=this._platformLocation.pathname+o(this._platformLocation.search),i=this._platformLocation.hash;return i&&e?`${t}${i}`:t}pushState(e,t,i,a){let l=this.prepareExternalUrl(i+o(a));this._platformLocation.pushState(e,t,l)}replaceState(e,t,i,a){let l=this.prepareExternalUrl(i+o(a));this._platformLocation.replaceState(e,t,l)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static{this.\u0275fac=function(t){return new(t||n)(u(x),u(V,8))}}static{this.\u0275prov=s({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();var G=(()=>{class n{constructor(e){this._subject=new I,this._urlChangeListeners=[],this._urlChangeSubscription=null,this._locationStrategy=e;let t=this._locationStrategy.getBaseHref();this._basePath=Z(R(T(t))),this._locationStrategy.onPopState(i=>{this._subject.emit({url:this.path(!0),pop:!0,state:i.state,type:i.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,t=""){return this.path()==this.normalize(e+o(t))}normalize(e){return n.stripTrailingSlash(Y(this._basePath,T(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,t="",i=null){this._locationStrategy.pushState(i,"",e,t),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+o(t)),i)}replaceState(e,t="",i=null){this._locationStrategy.replaceState(i,"",e,t),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+o(t)),i)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(t=>{this._notifyUrlChangeListeners(t.url,t.state)}),()=>{let t=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(t,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",t){this._urlChangeListeners.forEach(i=>i(e,t))}subscribe(e,t,i){return this._subject.subscribe({next:e,error:t,complete:i})}static{this.normalizeQueryParams=o}static{this.joinWithSlash=U}static{this.stripTrailingSlash=R}static{this.\u0275fac=function(t){return new(t||n)(u(w))}}static{this.\u0275prov=s({token:n,factory:()=>H(),providedIn:"root"})}}return n})();function H(){return new G(u(w))}function Y(n,r){if(!n||!r.startsWith(n))return r;let e=r.substring(n.length);return e===""||["/",";","?","#"].includes(e[0])?e:r}function T(n){return n.replace(/\/index.html$/,"")}function Z(n){if(new RegExp("^(https?:)?//").test(n)){let[,e]=n.split(/\/\/[^\/]+/);return e}return n}function Ge(n,r){r=encodeURIComponent(r);for(let e of n.split(";")){let t=e.indexOf("="),[i,a]=t==-1?[e,""]:[e.slice(0,t),e.slice(t+1)];if(i.trim()===r)return decodeURIComponent(a)}return null}var F=/\s+/,P=[],He=(()=>{class n{constructor(e,t){this._ngEl=e,this._renderer=t,this.initialClasses=P,this.stateMap=new Map}set klass(e){this.initialClasses=e!=null?e.trim().split(F):P}set ngClass(e){this.rawClass=typeof e=="string"?e.trim().split(F):e}ngDoCheck(){for(let t of this.initialClasses)this._updateState(t,!0);let e=this.rawClass;if(Array.isArray(e)||e instanceof Set)for(let t of e)this._updateState(t,!0);else if(e!=null)for(let t of Object.keys(e))this._updateState(t,!!e[t]);this._applyStateDiff()}_updateState(e,t){let i=this.stateMap.get(e);i!==void 0?(i.enabled!==t&&(i.changed=!0,i.enabled=t),i.touched=!0):this.stateMap.set(e,{enabled:t,changed:!0,touched:!0})}_applyStateDiff(){for(let e of this.stateMap){let t=e[0],i=e[1];i.changed?(this._toggleClass(t,i.enabled),i.changed=!1):i.touched||(i.enabled&&this._toggleClass(t,!1),this.stateMap.delete(t)),i.touched=!1}}_toggleClass(e,t){e=e.trim(),e.length>0&&e.split(F).forEach(i=>{t?this._renderer.addClass(this._ngEl.nativeElement,i):this._renderer.removeClass(this._ngEl.nativeElement,i)})}static{this.\u0275fac=function(t){return new(t||n)(d(D),d(g))}}static{this.\u0275dir=f({type:n,selectors:[["","ngClass",""]],inputs:{klass:[0,"class","klass"],ngClass:"ngClass"},standalone:!0})}}return n})();var Ye=(()=>{class n{constructor(e){this._viewContainerRef=e,this._viewRef=null,this.ngTemplateOutletContext=null,this.ngTemplateOutlet=null,this.ngTemplateOutletInjector=null}ngOnChanges(e){if(this._shouldRecreateView(e)){let t=this._viewContainerRef;if(this._viewRef&&t.remove(t.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let i=this._createContextForwardProxy();this._viewRef=t.createEmbeddedView(this.ngTemplateOutlet,i,{injector:this.ngTemplateOutletInjector??void 0})}}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,t,i)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,t,i):!1,get:(e,t,i)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,t,i)}})}static{this.\u0275fac=function(t){return new(t||n)(d(M))}}static{this.\u0275dir=f({type:n,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},standalone:!0,features:[v]})}}return n})();function W(n,r){return new A(2100,!1)}var E=class{createSubscription(r,e){return m(()=>r.subscribe({next:e,error:t=>{throw t}}))}dispose(r){m(()=>r.unsubscribe())}},y=class{createSubscription(r,e){return r.then(e,t=>{throw t})}dispose(r){}},K=new y,X=new E,Ze=(()=>{class n{constructor(e){this._latestValue=null,this.markForCheckOnValueUpdate=!0,this._subscription=null,this._obj=null,this._strategy=null,this._ref=e}ngOnDestroy(){this._subscription&&this._dispose(),this._ref=null}transform(e){if(!this._obj){if(e)try{this.markForCheckOnValueUpdate=!1,this._subscribe(e)}finally{this.markForCheckOnValueUpdate=!0}return this._latestValue}return e!==this._obj?(this._dispose(),this.transform(e)):this._latestValue}_subscribe(e){this._obj=e,this._strategy=this._selectStrategy(e),this._subscription=this._strategy.createSubscription(e,t=>this._updateLatestValue(e,t))}_selectStrategy(e){if(L(e))return K;if(B(e))return X;throw W(n,e)}_dispose(){this._strategy.dispose(this._subscription),this._latestValue=null,this._subscription=null,this._obj=null}_updateLatestValue(e,t){e===this._obj&&(this._latestValue=t,this.markForCheckOnValueUpdate&&this._ref?.markForCheck())}static{this.\u0275fac=function(t){return new(t||n)(d(p,16))}}static{this.\u0275pipe=_({name:"async",type:n,pure:!1,standalone:!0})}}return n})();var We=(()=>{class n{static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275mod=b({type:n})}static{this.\u0275inj=S({})}}return n})(),q="browser",J="server";function Ke(n){return n===q}function Xe(n){return n===J}var N=class{};export{C as a,je as b,O as c,$ as d,w as e,G as f,Ge as g,He as h,Ye as i,Ze as j,We as k,q as l,Ke as m,Xe as n,N as o};
