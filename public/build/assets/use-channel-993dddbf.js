import{r as h,aW as Oe,bt as we,h as Y,s as tt,j as i,c as j,A as nt,bZ as rt,l as st,bT as ke,au as ot,H as ce,aj as at,f as it,bP as Pe,$ as Ne,b_ as lt,b$ as je,aO as ct,c0 as Ee,d as ut,a as G,aZ as dt,p as fe,q as me,v as he,I as ue,J as ft,a3 as Fe,b9 as De,aE as ve,n as mt,as as ht,a8 as vt,o as Ce,T as O,m as re,aw as ge,Q as be,V as pe,U as $e,a0 as Re,W as Le,X as se,w as _e,t as Ae,x as Ke,G as Be,B as ee,an as gt}from"./main-0b7be7a7.js";import{A as bt,a0 as pt,K as xt,a as yt,c as Te}from"./play-arrow-filled-61b607f8.js";const Ue=h.createContext(null);function St(n=!1){h.useEffect(()=>(n?document.documentElement.classList.remove("no-page-overflow"):document.documentElement.classList.add("no-page-overflow"),()=>{document.documentElement.classList.remove("no-page-overflow")}),[n])}function an({children:n,leftSidenavStatus:s,onLeftSidenavChange:e,rightSidenavStatus:t,initialRightSidenavStatus:r,onRightSidenavChange:o,name:a,leftSidenavCanBeCompact:l,height:c="h-screen",className:f,gridClassName:m="dashboard-grid",blockBodyOverflow:u=!0,...v}){St(!u);const g=Oe("(max-width: 1024px)"),x=h.useMemo(()=>a?we(`${a}.sidenav.compact`):!1,[a])?"compact":"open",[w,E]=Y(s,g?"closed":x,e),I=h.useMemo(()=>{if(g)return"closed";if(r!=null)return r;const C=we(`${a}.sidenav.right.position`,"open");return C??(r||"closed")},[g,a,r]),[b,N]=Y(t,I,o),S=h.useCallback(C=>{N(C),tt(`${a}.sidenav.right.position`,C)},[N,a]),$=g&&(w==="open"||b==="open");return i.jsx(Ue.Provider,{value:{leftSidenavStatus:w,setLeftSidenavStatus:E,rightSidenavStatus:b,setRightSidenavStatus:S,leftSidenavCanBeCompact:l,name:a,isMobileMode:g},children:i.jsxs("div",{...v,className:j("relative isolate",m,f,c),children:[n,i.jsx(nt,{children:$&&i.jsx(rt,{position:"fixed",onClick:()=>{E("closed"),S("closed")}},"dashboard-underlay")})]})})}function ln({children:n,isScrollable:s=!0}){return h.cloneElement(n,{className:j(n.props.className,s&&"overflow-y-auto stable-scrollbar","dashboard-grid-content")})}function cn({className:n,position:s,children:e,size:t="md",mode:r,overlayPosition:o="fixed",display:a="flex",overflow:l="overflow-hidden",forceClosed:c=!1}){const{isMobileMode:f,leftSidenavStatus:m,setLeftSidenavStatus:u,rightSidenavStatus:v,setRightSidenavStatus:g}=h.useContext(Ue),p=s==="left"?m:v,x=f||r==="overlay",w={open:{display:a,width:null},compact:{display:a,width:null},closed:{width:0,transitionEnd:{display:"none"}}},E=It(p==="compact"?"compact":t);return i.jsx(st.div,{variants:w,initial:!1,animate:c?"closed":p,transition:{type:"tween",duration:.15},onClick:I=>{const b=I.target;f&&(b.closest("button")||b.closest("a"))&&(u("closed"),g("closed"))},className:j(n,s==="left"?"dashboard-grid-sidenav-left":"dashboard-grid-sidenav-right","will-change-[width]",l,E,x&&`${o} bottom-0 top-0 z-20 shadow-2xl`,x&&s==="left"&&"left-0",x&&s==="right"&&"right-0"),children:h.cloneElement(e,{className:j(e.props.className,"w-full h-full",p==="compact"&&"compact-scrollbar"),isCompactMode:p==="compact"})})}function It(n){switch(n){case"compact":return"w-80";case"sm":return"w-224";case"md":return"w-240";case"lg":return"w-288";default:return n||""}}const X="filters";function wt(n){if(!n)return[];let s=[];try{s=JSON.parse(atob(decodeURIComponent(n))),s.map(e=>(e.valueKey!=null&&(e.value=e.valueKey),e))}catch{}return s}function jt(n,s){return!n||(n=s?n.filter(e=>e.value!=="").map(e=>Et(e,s)):n,n=n.filter(e=>!e.isInactive),!n.length)?"":encodeURIComponent(btoa(JSON.stringify(n)))}function Et(n,s){var t;const e=s.find(r=>r.key===n.key);if((e==null?void 0:e.control.type)==="select"){const r=(e.control.options||[]).find(o=>o.key===n.value);if(r)return{...n,value:r.value,valueKey:r.key}}return(t=e==null?void 0:e.extraFilters)!=null&&t.length&&(n.extraFilters=e.extraFilters),n}function Ct(n,s){const[e]=ke(),t=ot(),r=e.get(X),o=h.useMemo(()=>{if(!n)return[];const m=wt(r);return(s||[]).forEach(u=>{if(!m.find(v=>v.key===u)){const v=n.find(g=>g.key===u);m.push({key:u,value:v.control.defaultValue,operator:v.defaultOperator,isInactive:!0})}}),m.sort((u,v)=>n.findIndex(g=>g.key===u.key)-n.findIndex(g=>g.key===v.key)),m},[r,s,n]),a=h.useCallback(m=>{const u=[...o];return m.forEach(v=>{const g=typeof v=="object"?v.key:v,p=u.findIndex(x=>x.key===g);p>-1&&u.splice(p,1)}),u},[o]),l=h.useCallback(m=>{const u=jt(m,n);u?e.set(X,u):e.delete(X),t({search:`?${e}`},{replace:!0})},[n,t,e]),c=h.useCallback(m=>{const v=[...a(m),...m];l(v)},[a,l]),f=h.useCallback(m=>l(a([m])),[a,l]);return{add:c,remove:f,replaceAll:l,decodedFilters:o,encodedFilters:r}}const un={pagination:{data:[],from:0,to:0,per_page:15,current_page:1}};function dn(n){return"next_cursor"in n?n.next_cursor!=null:"last_page"in n?n.current_page<n.last_page:n.data.length>0&&n.data.length>=n.per_page}function fn(n,s){const e=document.createElement("a");e.href=n,s&&(e.download=s),document.body.appendChild(e),e.click(),document.body.removeChild(e)}function mn({image:n,label:s,description:e,labelClassName:t,avatarSize:r="md"}){return i.jsxs("div",{className:"flex items-center gap-12",children:[n&&i.jsx(bt,{size:r,className:"flex-shrink-0",src:n}),i.jsxs("div",{className:"min-w-0 overflow-hidden",children:[i.jsx("div",{className:j(t,"overflow-hidden overflow-ellipsis"),children:s}),e&&i.jsx("div",{className:"overflow-hidden overflow-ellipsis text-xs text-muted",children:e})]})]})}function hn({labelClassName:n,showDescription:s}){return i.jsxs("div",{className:"flex w-full max-w-4/5 items-center gap-12",children:[i.jsx(ce,{size:"w-40 h-40 md:w-32 md:h-32",variant:"rect"}),i.jsxs("div",{className:"flex-auto",children:[i.jsx("div",{className:j(n,"leading-3"),children:i.jsx(ce,{})}),s&&i.jsx("div",{className:"mt-4 leading-3 text-muted",children:i.jsx(ce,{})})]})]})}const Tt=n=>(s,e,t)=>{const r=t.subscribe;return t.subscribe=(a,l,c)=>{let f=a;if(l){const m=(c==null?void 0:c.equalityFn)||Object.is;let u=a(t.getState());f=v=>{const g=a(v);if(!m(u,g)){const p=u;l(u=g,p)}},c!=null&&c.fireImmediately&&l(u,u)}return r(f)},n(s,e,t)},vn=Tt;function gn(n){const s=h.useRef();return h.useEffect(()=>{s.current=n},[n]),s.current}function Mt(n){const{size:s="md",inline:e,label:t,showValueLabel:r=!!t,className:o,width:a="w-full",slider:l,children:c,trackColor:f="primary",fillColor:m="primary"}=n,{domProps:u,trackRef:v,getThumbPercent:g,getThumbValueLabel:p,labelId:x,groupId:w,thumbIds:E,isDisabled:I,numberFormatter:b,minValue:N,maxValue:S,step:$,values:C,getValueLabel:T}=l;let R="",k=Math.max([...b.format(N)].length,[...b.format(S)].length,[...b.format($)].length);T?R=T(C[0]):C.length===1?R=p(0):C.length===2&&(R=`${p(0)} – ${p(1)}`,k=3+2*Math.max(k,[...b.format(N)].length,[...b.format(S)].length));const H=at({size:s,disabled:I,labelDisplay:"flex"}),A=j("touch-none",o,a,{"flex items-center":e});return i.jsxs("div",{className:A,role:"group",id:w,children:[(t||r)&&i.jsxs("div",{className:j(H.label,"select-none"),children:[t&&i.jsx("label",{onClick:()=>{var K;(K=document.getElementById(E[0]))==null||K.focus()},id:x,htmlFor:w,children:t}),r&&i.jsx("output",{htmlFor:E[0],className:"ml-auto text-right","aria-live":"off",style:k?{width:`${k}ch`,minWidth:`${k}ch`}:void 0,children:R})]}),i.jsxs("div",{ref:v,className:"relative h-30",...u,role:"presentation",children:[i.jsx("div",{className:j("absolute inset-0 m-auto rounded",zt(f,I),Me(s))}),i.jsx("div",{className:j("absolute inset-0 my-auto rounded",Ot(m,I),Me(s)),style:{width:`${g(0)*100}%`}}),c]})]})}function Me(n){switch(n){case"xs":return"h-2";case"sm":return"h-3";default:return"h-4"}}function zt(n,s){switch(s&&(n="disabled"),n){case"disabled":return"bg-slider-disabled/60";case"primary":return"bg-primary-light";case"neutral":return"bg-divider";default:return n}}function Ot(n,s){switch(s&&(n="disabled"),n){case"disabled":return"bg-slider-disabled";case"primary":return"bg-primary";default:return n}}function kt({minValue:n=0,maxValue:s=100,isDisabled:e=!1,step:t=1,formatOptions:r,onChangeEnd:o,onPointerDown:a,label:l,getValueLabel:c,showThumbOnHoverOnly:f,thumbSize:m,onPointerMove:u,...v}){const[g,p]=h.useState(!1),x=it(r),{addGlobalListener:w,removeGlobalListener:E}=Pe(),I=h.useRef(null),[b,N]=Y(v.value?v.value:void 0,v.defaultValue??[n],v.onChange),S=h.useRef(null);S.current=b;const[$,C]=h.useState(new Array(b.length).fill(!1)),T=h.useRef(null);T.current=$;function R(d){return x.format(d)}const k=d=>{var y;return((y=T.current)==null?void 0:y[d])||!1},H=d=>R(b[d]),A=d=>d===0?n:b[d-1],K=d=>d===b.length-1?s:b[d+1],L=(d,y)=>{if(e||!oe(d)||!S.current)return;const P=A(d),_=K(d);y=lt(y,P,_,t),S.current=ze(S.current,d,y),N(S.current)},F=(d,y)=>{var _;if(e||!oe(d))return;const P=(_=T.current)==null?void 0:_[d];T.current=ze(T.current||[],d,y),C(T.current),o&&P&&!T.current.some(Boolean)&&o(S.current||[])},[W,V]=h.useState(void 0),Q=d=>{const y=Math.min(1,(d-n)/(s-n));return isNaN(y)?0:y},J=d=>Q(S.current[d]),M=(d,y)=>{L(d,xe(y))},qe=d=>Math.round((d-n)/t)*t+n,xe=d=>{const y=d*(s-n)+n;return je(qe(y),n,s)},ye=h.useRef(new Array(b.length).fill(!0)),oe=d=>ye.current[d],Ge=(d,y)=>{ye.current[d]=y},z=h.useRef(null),Se=h.useRef(void 0),We=d=>{if(!(d.pointerType==="mouse"&&(d.button!==0||d.altKey||d.ctrlKey||d.metaKey))&&(a==null||a(),I.current&&!e&&b.every((y,P)=>!$[P]))){const y=I.current.offsetWidth,P=I.current.getBoundingClientRect().left,ie=(d.clientX-P)/y,Z=xe(ie);let D;const B=b.findIndex(le=>Z-le<0);if(B===0)D=B;else if(B===-1)D=b.length-1;else{const le=b[B-1],et=b[B];Math.abs(le-Z)<Math.abs(et-Z)?D=B-1:D=B}D>=0&&oe(D)?(d.preventDefault(),z.current=D,V(D),Se.current=d.pointerId,F(z.current,!0),L(D,Z),w(window,"pointerup",Ie,!1)):z.current=null}},q=h.useRef(null),{domProps:Qe}=pt({onPointerDown:We,onMoveStart(){q.current=null},onMove(d,y){var _;const P=((_=I.current)==null?void 0:_.offsetWidth)||0;if(q.current==null&&(q.current=J(z.current||0)*P),q.current+=y,z.current!=null&&I.current){const ie=je(q.current/P,0,1);M(z.current,ie)}},onMoveEnd(){z.current!=null&&(F(z.current,!1),z.current=null)}}),Je=Ne(Qe,{onPointerEnter:()=>{p(!0)},onPointerLeave:()=>{p(!1)},onPointerMove:d=>{u==null||u(d)}}),Ie=d=>{d.pointerId===Se.current&&(z.current!=null&&(F(z.current,!1),z.current=null),E(window,"pointerup",Ie,!1))},ae=h.useId(),Ze=l?`${ae}-label`:void 0,Xe=`${ae}-group`,Ye=[...Array(b.length)].map((d,y)=>`${ae}-thumb-${y}`);return{domProps:Je,trackRef:I,isDisabled:e,step:t,values:b,minValue:n,maxValue:s,focusedThumb:W,labelId:Ze,groupId:Xe,thumbIds:Ye,numberFormatter:x,getThumbPercent:J,getThumbMinValue:A,getThumbMaxValue:K,getThumbValueLabel:H,isThumbDragging:k,setThumbValue:L,updateDraggedThumbs:F,setThumbEditable:Ge,setFocusedThumb:V,getValueLabel:c,isPointerOver:g,showThumbOnHoverOnly:f,thumbSize:m}}function ze(n,s,e){return n[s]===e?n:[...n.slice(0,s),e,...n.slice(s+1)]}function Pt({index:n,slider:s,isDisabled:e,ariaLabel:t,inputRef:r,onBlur:o,fillColor:a="primary"}){const l=ct(r),{addGlobalListener:c,removeGlobalListener:f}=Pe(),{step:m,values:u,focusedThumb:v,labelId:g,thumbIds:p,isDisabled:x,getThumbPercent:w,getThumbMinValue:E,getThumbMaxValue:I,getThumbValueLabel:b,setThumbValue:N,updateDraggedThumbs:S,isThumbDragging:$,setThumbEditable:C,setFocusedThumb:T,isPointerOver:R,showThumbOnHoverOnly:k,thumbSize:H="w-18 h-18"}=s,A=$(n),K=u[n];C(n,!e);const L=e||x,F=h.useCallback(()=>{l.current&&l.current.focus({preventScroll:!0})},[l]),W=v===n;h.useEffect(()=>{W&&F()},[W,F]);const V=h.useRef(void 0),Q=M=>{M.pointerId===V.current&&(F(),S(n,!1),f(window,"pointerup",Q,!1))},J=j("outline-none rounded-full top-1/2 -translate-y-1/2 -translate-x-1/2 absolute inset-0 transition-button duration-200",H,!L&&"shadow-md",Nt({fillColor:a,isDisabled:L,isDragging:A}),!k||k&&A||R?"visible":"invisible");return i.jsx("div",{role:"presentation",className:J,style:{left:`${Math.max(w(n)*100,0)}%`},onPointerDown:M=>{M.button!==0||M.altKey||M.ctrlKey||M.metaKey||(F(),V.current=M.pointerId,S(n,!0),c(window,"pointerup",Q,!1))},children:i.jsx("input",{id:p[n],onKeyDown:Ee(()=>{S(n,!0)}),onKeyUp:Ee(()=>{S(n,!1)}),ref:l,tabIndex:L?void 0:0,min:E(n),max:I(n),step:m,value:K,disabled:L,"aria-label":t,"aria-labelledby":g,"aria-orientation":"horizontal","aria-valuetext":b(n),onFocus:()=>{T(n)},onBlur:M=>{T(void 0),S(n,!1),o==null||o(M)},onChange:M=>{N(n,parseFloat(M.target.value))},type:"range",className:"sr-only"})})}function Nt({isDisabled:n,isDragging:s,fillColor:e}){return n?"bg-slider-disabled cursor-default":e&&e!=="primary"?e:j("hover:bg-primary-dark",s?"bg-primary-dark":"bg-primary")}function Ft({inputRef:n,onBlur:s,...e}){const{onChange:t,onChangeEnd:r,value:o,defaultValue:a,...l}=e,c={...l,value:o!=null?[o]:void 0,defaultValue:a!=null?[a]:void 0,onChange:m=>{t==null||t(m[0])},onChangeEnd:m=>{r==null||r(m[0])}},f=kt(c);return i.jsx(Mt,{...c,slider:f,children:i.jsx(Pt,{fillColor:e.fillColor,index:0,slider:f,inputRef:n,onBlur:s})})}function bn({name:n,...s}){const{field:{onChange:e,onBlur:t,value:r="",ref:o}}=ut({name:n}),a={onChange:e,onBlur:t,value:r||""};return i.jsx(Ft,{inputRef:o,...Ne(a,s)})}const pn="user",xn=G(i.jsx("path",{d:"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreVertOutlined"),yn={discography:1,similar:2,about:3,tracks:4,albums:5,followers:6};/**
 * react-virtual
 *
 * Copyright (c) TanStack
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function te(){return te=Object.assign?Object.assign.bind():function(n){for(var s=1;s<arguments.length;s++){var e=arguments[s];for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t])}return n},te.apply(this,arguments)}/**
 * virtual-core
 *
 * Copyright (c) TanStack
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ne(){return ne=Object.assign?Object.assign.bind():function(n){for(var s=1;s<arguments.length;s++){var e=arguments[s];for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t])}return n},ne.apply(this,arguments)}/**
 * virtual-core
 *
 * Copyright (c) TanStack
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function U(n,s,e){var t,r=(t=e.initialDeps)!=null?t:[],o;return function(){var a;e.key&&e.debug!=null&&e.debug()&&(a=Date.now());var l=n(),c=l.length!==r.length||l.some(function(p,x){return r[x]!==p});if(!c)return o;r=l;var f;if(e.key&&e.debug!=null&&e.debug()&&(f=Date.now()),o=s.apply(void 0,l),e.key&&e.debug!=null&&e.debug()){var m=Math.round((Date.now()-a)*100)/100,u=Math.round((Date.now()-f)*100)/100,v=u/16,g=function(x,w){for(x=String(x);x.length<w;)x=" "+x;return x};console.info("%c⏱ "+g(u,5)+" /"+g(m,5)+" ms",`
            font-size: .6rem;
            font-weight: bold;
            color: hsl(`+Math.max(0,Math.min(120-120*v,120))+"deg 100% 31%);",e==null?void 0:e.key)}return e==null||e.onChange==null||e.onChange(o),o}}function de(n,s){if(n===void 0)throw new Error("Unexpected undefined"+(s?": "+s:""));return n}var Dt=function(s,e){return Math.abs(s-e)<1};/**
 * virtual-core
 *
 * Copyright (c) TanStack
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var $t=function(s){return s},Rt=function(s){for(var e=Math.max(s.startIndex-s.overscan,0),t=Math.min(s.endIndex+s.overscan,s.count-1),r=[],o=e;o<=t;o++)r.push(o);return r},Lt=function(s,e){var t=s.scrollElement;if(t){var r=function(l){var c=l.width,f=l.height;e({width:Math.round(c),height:Math.round(f)})};r(t.getBoundingClientRect());var o=new ResizeObserver(function(a){var l=a[0];if(l!=null&&l.borderBoxSize){var c=l.borderBoxSize[0];if(c){r({width:c.inlineSize,height:c.blockSize});return}}r(t.getBoundingClientRect())});return o.observe(t,{box:"border-box"}),function(){o.unobserve(t)}}},_t=function(s,e){var t=s.scrollElement;if(t){var r=function(){e(t[s.options.horizontal?"scrollLeft":"scrollTop"])};return r(),t.addEventListener("scroll",r,{passive:!0}),function(){t.removeEventListener("scroll",r)}}},At=function(s,e,t){if(e!=null&&e.borderBoxSize){var r=e.borderBoxSize[0];if(r){var o=Math.round(r[t.options.horizontal?"inlineSize":"blockSize"]);return o}}return Math.round(s.getBoundingClientRect()[t.options.horizontal?"width":"height"])},Kt=function(s,e,t){var r,o,a=e.adjustments,l=a===void 0?0:a,c=e.behavior,f=s+l;(r=t.scrollElement)==null||r.scrollTo==null||r.scrollTo((o={},o[t.options.horizontal?"left":"top"]=f,o.behavior=c,o))},Bt=function(s){var e=this;this.unsubs=[],this.scrollElement=null,this.isScrolling=!1,this.isScrollingTimeoutId=null,this.scrollToIndexTimeoutId=null,this.measurementsCache=[],this.itemSizeCache=new Map,this.pendingMeasuredCacheIndexes=[],this.scrollDirection=null,this.scrollAdjustments=0,this.measureElementCache=new Map,this.observer=function(){var t=null,r=function(){return t||(typeof ResizeObserver<"u"?t=new ResizeObserver(function(a){a.forEach(function(l){e._measureElement(l.target,l)})}):null)};return{disconnect:function(){var a;return(a=r())==null?void 0:a.disconnect()},observe:function(a){var l;return(l=r())==null?void 0:l.observe(a,{box:"border-box"})},unobserve:function(a){var l;return(l=r())==null?void 0:l.unobserve(a)}}}(),this.range=null,this.setOptions=function(t){Object.entries(t).forEach(function(r){var o=r[0],a=r[1];typeof a>"u"&&delete t[o]}),e.options=ne({debug:!1,initialOffset:0,overscan:1,paddingStart:0,paddingEnd:0,scrollPaddingStart:0,scrollPaddingEnd:0,horizontal:!1,getItemKey:$t,rangeExtractor:Rt,onChange:function(){},measureElement:At,initialRect:{width:0,height:0},scrollMargin:0,scrollingDelay:150,indexAttribute:"data-index",initialMeasurementsCache:[],lanes:1},t)},this.notify=function(t){e.options.onChange==null||e.options.onChange(e,t)},this.maybeNotify=U(function(){return e.calculateRange(),[e.isScrolling,e.range?e.range.startIndex:null,e.range?e.range.endIndex:null]},function(t){e.notify(t)},{key:!1,debug:function(){return e.options.debug},initialDeps:[this.isScrolling,this.range?this.range.startIndex:null,this.range?this.range.endIndex:null]}),this.cleanup=function(){e.unsubs.filter(Boolean).forEach(function(t){return t()}),e.unsubs=[],e.scrollElement=null},this._didMount=function(){return e.measureElementCache.forEach(e.observer.observe),function(){e.observer.disconnect(),e.cleanup()}},this._willUpdate=function(){var t=e.options.getScrollElement();e.scrollElement!==t&&(e.cleanup(),e.scrollElement=t,e._scrollToOffset(e.scrollOffset,{adjustments:void 0,behavior:void 0}),e.unsubs.push(e.options.observeElementRect(e,function(r){e.scrollRect=r,e.maybeNotify()})),e.unsubs.push(e.options.observeElementOffset(e,function(r){e.scrollAdjustments=0,e.scrollOffset!==r&&(e.isScrollingTimeoutId!==null&&(clearTimeout(e.isScrollingTimeoutId),e.isScrollingTimeoutId=null),e.isScrolling=!0,e.scrollDirection=e.scrollOffset<r?"forward":"backward",e.scrollOffset=r,e.maybeNotify(),e.isScrollingTimeoutId=setTimeout(function(){e.isScrollingTimeoutId=null,e.isScrolling=!1,e.scrollDirection=null,e.maybeNotify()},e.options.scrollingDelay))})))},this.getSize=function(){return e.scrollRect[e.options.horizontal?"width":"height"]},this.memoOptions=U(function(){return[e.options.count,e.options.paddingStart,e.options.scrollMargin,e.options.getItemKey]},function(t,r,o,a){return e.pendingMeasuredCacheIndexes=[],{count:t,paddingStart:r,scrollMargin:o,getItemKey:a}},{key:!1}),this.getFurthestMeasurement=function(t,r){for(var o=new Map,a=new Map,l=r-1;l>=0;l--){var c=t[l];if(!o.has(c.lane)){var f=a.get(c.lane);if(f==null||c.end>f.end?a.set(c.lane,c):c.end<f.end&&o.set(c.lane,!0),o.size===e.options.lanes)break}}return a.size===e.options.lanes?Array.from(a.values()).sort(function(m,u){return m.end-u.end})[0]:void 0},this.getMeasurements=U(function(){return[e.memoOptions(),e.itemSizeCache]},function(t,r){var o=t.count,a=t.paddingStart,l=t.scrollMargin,c=t.getItemKey,f=e.pendingMeasuredCacheIndexes.length>0?Math.min.apply(Math,e.pendingMeasuredCacheIndexes):0;e.pendingMeasuredCacheIndexes=[];for(var m=e.measurementsCache.slice(0,f),u=f;u<o;u++){var v=c(u),g=e.options.lanes===1?m[u-1]:e.getFurthestMeasurement(m,u),p=g?g.end:a+l,x=r.get(v),w=typeof x=="number"?x:e.options.estimateSize(u),E=p+w,I=g?g.lane:u%e.options.lanes;m[u]={index:u,start:p,size:w,end:E,key:v,lane:I}}return e.measurementsCache=m,m},{key:!1,debug:function(){return e.options.debug}}),this.calculateRange=U(function(){return[e.getMeasurements(),e.getSize(),e.scrollOffset]},function(t,r,o){return e.range=t.length>0&&r>0?Ut({measurements:t,outerSize:r,scrollOffset:o}):null},{key:!1,debug:function(){return e.options.debug}}),this.getIndexes=U(function(){return[e.options.rangeExtractor,e.calculateRange(),e.options.overscan,e.options.count]},function(t,r,o,a){return r===null?[]:t(ne({},r,{overscan:o,count:a}))},{key:!1,debug:function(){return e.options.debug}}),this.indexFromElement=function(t){var r=e.options.indexAttribute,o=t.getAttribute(r);return o?parseInt(o,10):(console.warn("Missing attribute name '"+r+"={index}' on measured element."),-1)},this._measureElement=function(t,r){var o=e.measurementsCache[e.indexFromElement(t)];if(!o||!t.isConnected){e.measureElementCache.forEach(function(c,f){c===t&&(e.observer.unobserve(t),e.measureElementCache.delete(f))});return}var a=e.measureElementCache.get(o.key);a!==t&&(a&&e.observer.unobserve(a),e.observer.observe(t),e.measureElementCache.set(o.key,t));var l=e.options.measureElement(t,r,e);e.resizeItem(o,l)},this.resizeItem=function(t,r){var o,a=(o=e.itemSizeCache.get(t.key))!=null?o:t.size,l=r-a;l!==0&&(t.start<e.scrollOffset&&e._scrollToOffset(e.scrollOffset,{adjustments:e.scrollAdjustments+=l,behavior:void 0}),e.pendingMeasuredCacheIndexes.push(t.index),e.itemSizeCache=new Map(e.itemSizeCache.set(t.key,r)),e.notify(!1))},this.measureElement=function(t){t&&e._measureElement(t,void 0)},this.getVirtualItems=U(function(){return[e.getIndexes(),e.getMeasurements()]},function(t,r){for(var o=[],a=0,l=t.length;a<l;a++){var c=t[a],f=r[c];o.push(f)}return o},{key:!1,debug:function(){return e.options.debug}}),this.getVirtualItemForOffset=function(t){var r=e.getMeasurements();return de(r[He(0,r.length-1,function(o){return de(r[o]).start},t)])},this.getOffsetForAlignment=function(t,r){var o=e.getSize();r==="auto"&&(t<=e.scrollOffset?r="start":t>=e.scrollOffset+o?r="end":r="start"),r==="start"?t=t:r==="end"?t=t-o:r==="center"&&(t=t-o/2);var a=e.options.horizontal?"scrollWidth":"scrollHeight",l=e.scrollElement?"document"in e.scrollElement?e.scrollElement.document.documentElement[a]:e.scrollElement[a]:0,c=l-e.getSize();return Math.max(Math.min(c,t),0)},this.getOffsetForIndex=function(t,r){r===void 0&&(r="auto"),t=Math.max(0,Math.min(t,e.options.count-1));var o=de(e.getMeasurements()[t]);if(r==="auto")if(o.end>=e.scrollOffset+e.getSize()-e.options.scrollPaddingEnd)r="end";else if(o.start<=e.scrollOffset+e.options.scrollPaddingStart)r="start";else return[e.scrollOffset,r];var a=r==="end"?o.end+e.options.scrollPaddingEnd:o.start-e.options.scrollPaddingStart;return[e.getOffsetForAlignment(a,r),r]},this.isDynamicMode=function(){return e.measureElementCache.size>0},this.cancelScrollToIndex=function(){e.scrollToIndexTimeoutId!==null&&(clearTimeout(e.scrollToIndexTimeoutId),e.scrollToIndexTimeoutId=null)},this.scrollToOffset=function(t,r){var o=r===void 0?{}:r,a=o.align,l=a===void 0?"start":a,c=o.behavior;e.cancelScrollToIndex(),c==="smooth"&&e.isDynamicMode()&&console.warn("The `smooth` scroll behavior is not fully supported with dynamic size."),e._scrollToOffset(e.getOffsetForAlignment(t,l),{adjustments:void 0,behavior:c})},this.scrollToIndex=function(t,r){var o=r===void 0?{}:r,a=o.align,l=a===void 0?"auto":a,c=o.behavior;t=Math.max(0,Math.min(t,e.options.count-1)),e.cancelScrollToIndex(),c==="smooth"&&e.isDynamicMode()&&console.warn("The `smooth` scroll behavior is not fully supported with dynamic size.");var f=e.getOffsetForIndex(t,l),m=f[0],u=f[1];e._scrollToOffset(m,{adjustments:void 0,behavior:c}),c!=="smooth"&&e.isDynamicMode()&&(e.scrollToIndexTimeoutId=setTimeout(function(){e.scrollToIndexTimeoutId=null;var v=e.measureElementCache.has(e.options.getItemKey(t));if(v){var g=e.getOffsetForIndex(t,u),p=g[0];Dt(p,e.scrollOffset)||e.scrollToIndex(t,{align:u,behavior:c})}else e.scrollToIndex(t,{align:u,behavior:c})}))},this.scrollBy=function(t,r){var o=r===void 0?{}:r,a=o.behavior;e.cancelScrollToIndex(),a==="smooth"&&e.isDynamicMode()&&console.warn("The `smooth` scroll behavior is not fully supported with dynamic size."),e._scrollToOffset(e.scrollOffset+t,{adjustments:void 0,behavior:a})},this.getTotalSize=function(){var t;return(((t=e.getMeasurements()[e.options.count-1])==null?void 0:t.end)||e.options.paddingStart)-e.options.scrollMargin+e.options.paddingEnd},this._scrollToOffset=function(t,r){var o=r.adjustments,a=r.behavior;e.options.scrollToFn(t,{behavior:a,adjustments:o},e)},this.measure=function(){e.itemSizeCache=new Map,e.notify(!1)},this.setOptions(s),this.scrollRect=this.options.initialRect,this.scrollOffset=this.options.initialOffset,this.measurementsCache=this.options.initialMeasurementsCache,this.measurementsCache.forEach(function(t){e.itemSizeCache.set(t.key,t.size)}),this.maybeNotify()},He=function(s,e,t,r){for(;s<=e;){var o=(s+e)/2|0,a=t(o);if(a<r)s=o+1;else if(a>r)e=o-1;else return o}return s>0?s-1:0};function Ut(n){for(var s=n.measurements,e=n.outerSize,t=n.scrollOffset,r=s.length-1,o=function(f){return s[f].start},a=He(0,r,o,t),l=a;l<r&&s[l].end<t+e;)l++;return{startIndex:a,endIndex:l}}/**
 * react-virtual
 *
 * Copyright (c) TanStack
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Ht=typeof document<"u"?h.useLayoutEffect:h.useEffect;function Vt(n){var s=h.useReducer(function(){return{}},{})[1],e=te({},n,{onChange:function(a,l){l?dt.flushSync(s):s(),n.onChange==null||n.onChange(a,l)}}),t=h.useState(function(){return new Bt(e)}),r=t[0];return r.setOptions(e),h.useEffect(function(){return r._didMount()},[]),Ht(function(){return r._willUpdate()}),r}function Sn(n){return Vt(te({observeElementRect:Lt,observeElementOffset:_t,scrollToFn:Kt},n))}function In(n){const{close:s}=fe(),{image:e,images:t}=n,[r,o]=Y(n.activeIndex,n.defaultActiveIndex,n.onActiveIndexChange),a=e||(t==null?void 0:t[r]);return i.jsx(me,{size:"fullscreenTakeover",background:"bg-black/80",children:i.jsxs(he,{padding:"p-0",className:"h-full w-full",children:[i.jsx(ue,{size:"lg",color:"paper",className:"absolute right-0 top-0 z-20 text-white",onClick:()=>{s()},children:i.jsx(ft,{})}),i.jsxs("div",{className:"relative flex h-full w-full items-center justify-center p-40",children:[t!=null&&t.length?i.jsx(ue,{size:"lg",color:"white",variant:"flat",className:"absolute bottom-0 left-20 top-0 my-auto",disabled:r<1,onClick:()=>{o(r-1)},children:i.jsx(xt,{})}):null,i.jsx("img",{src:a,alt:"",className:"max-h-full w-auto object-contain shadow"}),t!=null&&t.length?i.jsx(ue,{size:"lg",color:"white",variant:"flat",className:"absolute bottom-0 right-20 top-0 my-auto",disabled:r+1===(t==null?void 0:t.length),onClick:()=>{o(r+1)},children:i.jsx(yt,{})}):null]})]})})}const wn=G(i.jsx("path",{d:"M6 19h4V5H6v14zm8-14v14h4V5h-4z"}),"PauseOutlined"),jn="artist",En="track";function Cn({genre:n,className:s,...e}){const t=h.useMemo(()=>qt(n),[n]);return i.jsx(Fe,{...e,className:j("block outline-none first-letter:capitalize hover:underline focus-visible:underline",s),to:t,children:n.display_name||n.name})}function qt(n,{absolute:s}={}){let t=`/genre/${De(n.name)}`;return s&&(t=`${ve().settings.base_url}${t}`),t}function Tn({playlist:n,className:s}){const e=h.useMemo(()=>Gt(n),[n.id]);return i.jsx(Fe,{className:j("capitalize hover:underline",s),to:e,children:n.name})}function Gt(n,{absolute:s}={}){const e=De(n.name);let t=`/playlist/${n.id}/${e}`;return s&&(t=`${ve().settings.base_url}${t}`),t}const Wt=G(i.jsx("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4.86 8.86-3 3.87L9 13.14 6 17h12l-3.86-5.14z"}),"ImageOutlined");function Ve(){const{trans:n}=mt();return i.jsxs(h.Fragment,{children:[i.jsxs("div",{className:"md:flex gap-28",children:[i.jsx(ht,{children:i.jsx(vt,{name:"image",diskPrefix:"playlist_media",variant:"square",previewSize:"w-160 h-160",className:"mb-24 md:mb-0",placeholderIcon:i.jsx(Wt,{}),showRemoveButton:!0,stretchPreview:!0})}),i.jsxs("div",{className:"flex-auto mb-34",children:[i.jsx(Ce,{autoFocus:!0,name:"name",label:i.jsx(O,{message:"Name"}),className:"mb-24"}),i.jsx(Te,{name:"collaborative",description:i.jsx(O,{message:"Invite other users to add tracks."}),className:"mb-24",children:i.jsx(O,{message:"Collaborative"})}),i.jsx(Te,{name:"public",description:i.jsx(O,{message:"Everyone can see public playlists."}),children:i.jsx(O,{message:"Public"})})]})]}),i.jsx(Ce,{name:"description",label:i.jsx(O,{message:"Description"}),inputElementType:"textarea",rows:4,placeholder:n(re("Give your playlist a catchy description."))})]})}function Qt({form:n,playlistId:s}={}){const e=ge();return e.playlistId&&!s&&(s=e.playlistId),be({mutationFn:t=>Jt(s,t),onSuccess:()=>{pe(re("Playlist updated")),$e.invalidateQueries({queryKey:["playlists"]})},onError:t=>n?Re(t,n):Le(t)})}function Jt(n,s){return se.put(`playlists/${n}`,s).then(e=>e.data)}function Mn({playlist:n}){const{close:s,formId:e}=fe(),t=_e({defaultValues:{name:n.name,public:n.public,collaborative:n.collaborative,image:n.image,description:n.description}}),r=Qt({form:t,playlistId:n.id});return i.jsxs(me,{size:"xl",children:[i.jsx(Ae,{children:i.jsx(O,{message:"Update playlist"})}),i.jsx(he,{children:i.jsx(Ke,{id:e,form:t,onSubmit:o=>{r.mutate(o,{onSuccess:a=>{s(a.playlist)}})},children:i.jsx(Ve,{})})}),i.jsxs(Be,{children:[i.jsx(ee,{onClick:()=>s(),children:i.jsx(O,{message:"Cancel"})}),i.jsx(ee,{form:e,type:"submit",variant:"flat",color:"primary",disabled:r.isPending,children:i.jsx(O,{message:"Update"})})]})]})}function Zt(n){return be({mutationFn:s=>Xt(s),onSuccess:()=>{pe(re("Playlist created")),$e.invalidateQueries({queryKey:["playlists"]})},onError:s=>Re(s,n)})}function Xt(n){return se.post("playlists",n).then(s=>s.data)}function zn(){const{close:n,formId:s}=fe(),e=_e(),t=Zt(e);return i.jsxs(me,{size:"xl",children:[i.jsx(Ae,{children:i.jsx(O,{message:"New playlist"})}),i.jsx(he,{children:i.jsx(Ke,{id:s,form:e,onSubmit:r=>{t.mutate(r,{onSuccess:o=>{n(o.playlist)}})},children:i.jsx(Ve,{})})}),i.jsxs(Be,{children:[i.jsx(ee,{onClick:()=>n(),children:i.jsx(O,{message:"Cancel"})}),i.jsx(ee,{form:s,type:"submit",variant:"flat",color:"primary",disabled:t.isPending,children:i.jsx(O,{message:"Create"})})]})]})}const On="playlist";function kn(){return be({mutationFn:n=>Yt(n),onSuccess:(n,s)=>{pe(re("[one Comment deleted|other Deleted :count comments]",{values:{count:s.commentIds.length}}))},onError:n=>Le(n)})}function Yt({commentIds:n}){return se.delete(`comment/${n.join(",")}`).then(s=>s.data)}const Pn=G(i.jsx("path",{d:"m16 6 2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6h-6z"}),"TrendingUpOutlined"),Nn="channel",Fn=G(i.jsx("path",{d:"M3 3v8h8V3H3zm6 6H5V5h4v4zm-6 4v8h8v-8H3zm6 6H5v-4h4v4zm4-16v8h8V3h-8zm6 6h-4V5h4v4zm-6 4v8h8v-8h-8zm6 6h-4v-4h4v4z"}),"GridViewOutlined");function Dn(){return Oe("((pointer: coarse))")}function en(n,s){const e=ge(),[t]=ke(),{encodedFilters:r}=Ct(),o={...s,restriction:e.restriction||"",order:t.get("order"),[X]:r,paginate:"simple"};return!o.order&&n&&(o.order=n.config.contentOrder||"popularity:desc"),o}function $n(n,s,e){const t=ge(),r=n||t.slugOrId,o=en(void 0,e);return gt({queryKey:tn(r,{restriction:o.restriction}),queryFn:()=>rn(r,{...o,loader:s}),initialData:()=>{var f,m;const a=(f=ve().loaders)==null?void 0:f[s],l=(a==null?void 0:a.channel.id)==r||(a==null?void 0:a.channel.slug)==r,c=!o.restriction||((m=a==null?void 0:a.channel.restriction)==null?void 0:m.name)===o.restriction;if(l&&c)return a}})}function tn(n,s){return["channel",`${n}`,s]}function nn(n){return`channel/${n}`}function rn(n,s={}){return se.get(nn(n),{params:s}).then(e=>e.data)}export{jn as A,X as B,zn as C,Ue as D,un as E,bn as F,Cn as G,hn as H,In as I,_t as J,kt as K,xn as M,mn as N,wn as P,Ft as S,En as T,pn as U,an as a,cn as b,ln as c,fn as d,gn as e,yn as f,Sn as g,dn as h,On as i,Tn as j,Mn as k,kn as l,Pn as m,Nn as n,Fn as o,Wt as p,Dn as q,$n as r,vn as s,Gt as t,Ct as u,qt as v,Qt as w,en as x,tn as y,nn as z};
//# sourceMappingURL=use-channel-993dddbf.js.map
