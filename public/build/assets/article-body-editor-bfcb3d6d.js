import{d0 as ut,r as ve,j as ft}from"./main-0b7be7a7.js";import{M as le,m as G,a as gt,P as ee,b as te,c as dt,g as ht,f as pt,d as bt,e as Et,N as ue,n as yt,E as De,C as xt,h as ce,D as Mt,i as _t,S as wt,U as kt,T as At,j as vt,B as mt,I as St,k as Ot,l as Rt}from"./admin-routes-613b611b.js";import{r as me,f as fe,a as Tt}from"./linkify.es-7225a065.js";import{H as Lt,j as Nt,t as Ct,x as It,c as Bt,p as Ht,s as Dt,b as Pt,r as jt,a as Ut,d as $t,e as Kt}from"./highlight-material-palenight-7a9fb828.js";import"./use-channel-993dddbf.js";import"./play-arrow-filled-61b607f8.js";import"./backstage-track-insights-6a8a7ef9.js";import"./Edit-554396de.js";import"./use-resume-subscription-938c23d8.js";import"./MoreHoriz-ea8d0e50.js";function Gt(e){return new ee({key:new te("autolink"),appendTransaction:(t,n,i)=>{const l=t.some(u=>u.docChanged)&&!n.doc.eq(i.doc),d=t.some(u=>u.getMeta("preventAutolink"));if(!l||d)return;const{tr:o}=i,r=dt(n.doc,[...t]);if(ht(r).forEach(({newRange:u})=>{const g=pt(i.doc,u,k=>k.isTextblock);let y,M;if(g.length>1?(y=g[0],M=i.doc.textBetween(y.pos,y.pos+y.node.nodeSize,void 0," ")):g.length&&i.doc.textBetween(u.from,u.to," "," ").endsWith(" ")&&(y=g[0],M=i.doc.textBetween(y.pos,u.to,void 0," ")),y&&M){const k=M.split(" ").filter(_=>_!=="");if(k.length<=0)return!1;const S=k[k.length-1],T=y.pos+M.lastIndexOf(S);if(!S)return!1;fe(S).filter(_=>_.isLink).map(_=>({..._,from:T+_.start+1,to:T+_.end+1})).filter(_=>i.schema.marks.code?!i.doc.rangeHasMark(_.from,_.to,i.schema.marks.code):!0).filter(_=>e.validate?e.validate(_.value):!0).forEach(_=>{bt(_.from,_.to,i.doc).some(re=>re.mark.type===e.type)||o.addMark(_.from,_.to,e.type.create({href:_.href}))})}}),!!o.steps.length)return o}})}function Wt(e){return new ee({key:new te("handleClickLink"),props:{handleClick:(t,n,i)=>{var l,d;if(i.button!==0||i.target.nodeName!=="A")return!1;const r=Et(t.state,e.type.name),s=i.target,u=(l=s==null?void 0:s.href)!==null&&l!==void 0?l:r.href,g=(d=s==null?void 0:s.target)!==null&&d!==void 0?d:r.target;return s&&u?(t.editable&&window.open(u,g),!0):!1}}})}function zt(e){return new ee({key:new te("handlePasteLink"),props:{handlePaste:(t,n,i)=>{var l;const{state:d}=t,{selection:o}=d,{empty:r}=o;if(r)return!1;let s="";i.content.forEach(S=>{s+=S.textContent});const u=fe(s).find(S=>S.isLink&&S.value===s);if(!s||!u)return!1;const g=(l=n.clipboardData)===null||l===void 0?void 0:l.getData("text/html"),y=/href="([^"]*)"/,M=g==null?void 0:g.match(y),k=M?M[1]:u.href;return e.editor.commands.setMark(e.type,{href:k}),!0}}})}const Ft=le.create({name:"link",priority:1e3,keepOnSplit:!1,onCreate(){this.options.protocols.forEach(e=>{if(typeof e=="string"){me(e);return}me(e.scheme,e.optionalSlashes)})},onDestroy(){Tt()},inclusive(){return this.options.autolink},addOptions(){return{openOnClick:!0,linkOnPaste:!0,autolink:!0,protocols:[],HTMLAttributes:{target:"_blank",rel:"noopener noreferrer nofollow",class:null},validate:void 0}},addAttributes(){return{href:{default:null},target:{default:this.options.HTMLAttributes.target},rel:{default:this.options.HTMLAttributes.rel},class:{default:this.options.HTMLAttributes.class}}},parseHTML(){return[{tag:'a[href]:not([href *= "javascript:" i])'}]},renderHTML({HTMLAttributes:e}){return["a",G(this.options.HTMLAttributes,e),0]},addCommands(){return{setLink:e=>({chain:t})=>t().setMark(this.name,e).setMeta("preventAutolink",!0).run(),toggleLink:e=>({chain:t})=>t().toggleMark(this.name,e,{extendEmptyMarkRange:!0}).setMeta("preventAutolink",!0).run(),unsetLink:()=>({chain:e})=>e().unsetMark(this.name,{extendEmptyMarkRange:!0}).setMeta("preventAutolink",!0).run()}},addPasteRules(){return[gt({find:e=>fe(e).filter(t=>this.options.validate?this.options.validate(t.value):!0).filter(t=>t.isLink).map(t=>({text:t.value,index:t.start,data:t})),type:this.type,getAttributes:(e,t)=>{var n,i;const l=(n=t==null?void 0:t.clipboardData)===null||n===void 0?void 0:n.getData("text/html"),d=/href="([^"]*)"/,o=l==null?void 0:l.match(d);return o?{href:o[1]}:{href:(i=e.data)===null||i===void 0?void 0:i.href}}})]},addProseMirrorPlugins(){const e=[];return this.options.autolink&&e.push(Gt({type:this.type,validate:this.options.validate})),this.options.openOnClick&&e.push(Wt({type:this.type})),this.options.linkOnPaste&&e.push(zt({editor:this.editor,type:this.type})),e}}),Xt=/(?:^|\s)(!\[(.+|:?)]\((\S+)(?:(?:\s+)["'](\S+)["'])?\))$/,Yt=ue.create({name:"image",addOptions(){return{inline:!1,allowBase64:!1,HTMLAttributes:{}}},inline(){return this.options.inline},group(){return this.options.inline?"inline":"block"},draggable:!0,addAttributes(){return{src:{default:null},alt:{default:null},title:{default:null}}},parseHTML(){return[{tag:this.options.allowBase64?"img[src]":'img[src]:not([src^="data:"])'}]},renderHTML({HTMLAttributes:e}){return["img",G(this.options.HTMLAttributes,e)]},addCommands(){return{setImage:e=>({commands:t})=>t.insertContent({type:this.name,attrs:e})}},addInputRules(){return[yt({find:Xt,type:this.type,getAttributes:e=>{const[,,t,n,i]=e;return{src:n,alt:t,title:i}}})]}}),Zt=le.create({name:"superscript",addOptions(){return{HTMLAttributes:{}}},parseHTML(){return[{tag:"sup"},{style:"vertical-align",getAttrs(e){return e!=="super"?!1:null}}]},renderHTML({HTMLAttributes:e}){return["sup",G(this.options.HTMLAttributes,e),0]},addCommands(){return{setSuperscript:()=>({commands:e})=>e.setMark(this.name),toggleSuperscript:()=>({commands:e})=>e.toggleMark(this.name),unsetSuperscript:()=>({commands:e})=>e.unsetMark(this.name)}},addKeyboardShortcuts(){return{"Mod-.":()=>this.editor.commands.toggleSuperscript()}}}),Jt=le.create({name:"subscript",addOptions(){return{HTMLAttributes:{}}},parseHTML(){return[{tag:"sub"},{style:"vertical-align",getAttrs(e){return e!=="sub"?!1:null}}]},renderHTML({HTMLAttributes:e}){return["sub",G(this.options.HTMLAttributes,e),0]},addCommands(){return{setSubscript:()=>({commands:e})=>e.setMark(this.name),toggleSubscript:()=>({commands:e})=>e.toggleMark(this.name),unsetSubscript:()=>({commands:e})=>e.unsetMark(this.name)}},addKeyboardShortcuts(){return{"Mod-,":()=>this.editor.commands.toggleSubscript()}}}),Vt=De.create({name:"textAlign",addOptions(){return{types:[],alignments:["left","center","right","justify"],defaultAlignment:"left"}},addGlobalAttributes(){return[{types:this.options.types,attributes:{textAlign:{default:this.options.defaultAlignment,parseHTML:e=>e.style.textAlign||this.options.defaultAlignment,renderHTML:e=>e.textAlign===this.options.defaultAlignment?{}:{style:`text-align: ${e.textAlign}`}}}}]},addCommands(){return{setTextAlign:e=>({commands:t})=>this.options.alignments.includes(e)?this.options.types.every(n=>t.updateAttributes(n,{textAlign:e})):!1,unsetTextAlign:()=>({commands:e})=>this.options.types.every(t=>e.resetAttributes(t,"textAlign"))}},addKeyboardShortcuts(){return{"Mod-Shift-l":()=>this.editor.commands.setTextAlign("left"),"Mod-Shift-e":()=>this.editor.commands.setTextAlign("center"),"Mod-Shift-r":()=>this.editor.commands.setTextAlign("right"),"Mod-Shift-j":()=>this.editor.commands.setTextAlign("justify")}}});var ge={exports:{}};function de(e){return e instanceof Map?e.clear=e.delete=e.set=function(){throw new Error("map is read-only")}:e instanceof Set&&(e.add=e.clear=e.delete=function(){throw new Error("set is read-only")}),Object.freeze(e),Object.getOwnPropertyNames(e).forEach(function(t){var n=e[t];typeof n=="object"&&!Object.isFrozen(n)&&de(n)}),e}ge.exports=de;ge.exports.default=de;class Se{constructor(t){t.data===void 0&&(t.data={}),this.data=t.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function Pe(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function P(e,...t){const n=Object.create(null);for(const i in e)n[i]=e[i];return t.forEach(function(i){for(const l in i)n[l]=i[l]}),n}const qt="</span>",Oe=e=>!!e.scope||e.sublanguage&&e.language,Qt=(e,{prefix:t})=>{if(e.includes(".")){const n=e.split(".");return[`${t}${n.shift()}`,...n.map((i,l)=>`${i}${"_".repeat(l+1)}`)].join(" ")}return`${t}${e}`};class en{constructor(t,n){this.buffer="",this.classPrefix=n.classPrefix,t.walk(this)}addText(t){this.buffer+=Pe(t)}openNode(t){if(!Oe(t))return;let n="";t.sublanguage?n=`language-${t.language}`:n=Qt(t.scope,{prefix:this.classPrefix}),this.span(n)}closeNode(t){Oe(t)&&(this.buffer+=qt)}value(){return this.buffer}span(t){this.buffer+=`<span class="${t}">`}}const Re=(e={})=>{const t={children:[]};return Object.assign(t,e),t};class he{constructor(){this.rootNode=Re(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(t){this.top.children.push(t)}openNode(t){const n=Re({scope:t});this.add(n),this.stack.push(n)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(t){return this.constructor._walk(t,this.rootNode)}static _walk(t,n){return typeof n=="string"?t.addText(n):n.children&&(t.openNode(n),n.children.forEach(i=>this._walk(t,i)),t.closeNode(n)),t}static _collapse(t){typeof t!="string"&&t.children&&(t.children.every(n=>typeof n=="string")?t.children=[t.children.join("")]:t.children.forEach(n=>{he._collapse(n)}))}}class tn extends he{constructor(t){super(),this.options=t}addKeyword(t,n){t!==""&&(this.openNode(n),this.addText(t),this.closeNode())}addText(t){t!==""&&this.add(t)}addSublanguage(t,n){const i=t.root;i.sublanguage=!0,i.language=n,this.add(i)}toHTML(){return new en(this,this.options).value()}finalize(){return!0}}function W(e){return e?typeof e=="string"?e:e.source:null}function je(e){return $("(?=",e,")")}function nn(e){return $("(?:",e,")*")}function rn(e){return $("(?:",e,")?")}function $(...e){return e.map(n=>W(n)).join("")}function sn(e){const t=e[e.length-1];return typeof t=="object"&&t.constructor===Object?(e.splice(e.length-1,1),t):{}}function pe(...e){return"("+(sn(e).capture?"":"?:")+e.map(i=>W(i)).join("|")+")"}function Ue(e){return new RegExp(e.toString()+"|").exec("").length-1}function on(e,t){const n=e&&e.exec(t);return n&&n.index===0}const an=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function be(e,{joinWith:t}){let n=0;return e.map(i=>{n+=1;const l=n;let d=W(i),o="";for(;d.length>0;){const r=an.exec(d);if(!r){o+=d;break}o+=d.substring(0,r.index),d=d.substring(r.index+r[0].length),r[0][0]==="\\"&&r[1]?o+="\\"+String(Number(r[1])+l):(o+=r[0],r[0]==="("&&n++)}return o}).map(i=>`(${i})`).join(t)}const cn=/\b\B/,$e="[a-zA-Z]\\w*",Ee="[a-zA-Z_]\\w*",Ke="\\b\\d+(\\.\\d+)?",Ge="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",We="\\b(0b[01]+)",ln="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",un=(e={})=>{const t=/^#![ ]*\//;return e.binary&&(e.begin=$(t,/.*\b/,e.binary,/\b.*/)),P({scope:"meta",begin:t,end:/$/,relevance:0,"on:begin":(n,i)=>{n.index!==0&&i.ignoreMatch()}},e)},z={begin:"\\\\[\\s\\S]",relevance:0},fn={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[z]},gn={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[z]},dn={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},ne=function(e,t,n={}){const i=P({scope:"comment",begin:e,end:t,contains:[]},n);i.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const l=pe("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return i.contains.push({begin:$(/[ ]+/,"(",l,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),i},hn=ne("//","$"),pn=ne("/\\*","\\*/"),bn=ne("#","$"),En={scope:"number",begin:Ke,relevance:0},yn={scope:"number",begin:Ge,relevance:0},xn={scope:"number",begin:We,relevance:0},Mn={begin:/(?=\/[^/\n]*\/)/,contains:[{scope:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[z,{begin:/\[/,end:/\]/,relevance:0,contains:[z]}]}]},_n={scope:"title",begin:$e,relevance:0},wn={scope:"title",begin:Ee,relevance:0},kn={begin:"\\.\\s*"+Ee,relevance:0},An=function(e){return Object.assign(e,{"on:begin":(t,n)=>{n.data._beginMatch=t[1]},"on:end":(t,n)=>{n.data._beginMatch!==t[1]&&n.ignoreMatch()}})};var q=Object.freeze({__proto__:null,MATCH_NOTHING_RE:cn,IDENT_RE:$e,UNDERSCORE_IDENT_RE:Ee,NUMBER_RE:Ke,C_NUMBER_RE:Ge,BINARY_NUMBER_RE:We,RE_STARTERS_RE:ln,SHEBANG:un,BACKSLASH_ESCAPE:z,APOS_STRING_MODE:fn,QUOTE_STRING_MODE:gn,PHRASAL_WORDS_MODE:dn,COMMENT:ne,C_LINE_COMMENT_MODE:hn,C_BLOCK_COMMENT_MODE:pn,HASH_COMMENT_MODE:bn,NUMBER_MODE:En,C_NUMBER_MODE:yn,BINARY_NUMBER_MODE:xn,REGEXP_MODE:Mn,TITLE_MODE:_n,UNDERSCORE_TITLE_MODE:wn,METHOD_GUARD:kn,END_SAME_AS_BEGIN:An});function vn(e,t){e.input[e.index-1]==="."&&t.ignoreMatch()}function mn(e,t){e.className!==void 0&&(e.scope=e.className,delete e.className)}function Sn(e,t){t&&e.beginKeywords&&(e.begin="\\b("+e.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",e.__beforeBegin=vn,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,e.relevance===void 0&&(e.relevance=0))}function On(e,t){Array.isArray(e.illegal)&&(e.illegal=pe(...e.illegal))}function Rn(e,t){if(e.match){if(e.begin||e.end)throw new Error("begin & end are not supported with match");e.begin=e.match,delete e.match}}function Tn(e,t){e.relevance===void 0&&(e.relevance=1)}const Ln=(e,t)=>{if(!e.beforeMatch)return;if(e.starts)throw new Error("beforeMatch cannot be used with starts");const n=Object.assign({},e);Object.keys(e).forEach(i=>{delete e[i]}),e.keywords=n.keywords,e.begin=$(n.beforeMatch,je(n.begin)),e.starts={relevance:0,contains:[Object.assign(n,{endsParent:!0})]},e.relevance=0,delete n.beforeMatch},Nn=["of","and","for","in","not","or","if","then","parent","list","value"],Cn="keyword";function ze(e,t,n=Cn){const i=Object.create(null);return typeof e=="string"?l(n,e.split(" ")):Array.isArray(e)?l(n,e):Object.keys(e).forEach(function(d){Object.assign(i,ze(e[d],t,d))}),i;function l(d,o){t&&(o=o.map(r=>r.toLowerCase())),o.forEach(function(r){const s=r.split("|");i[s[0]]=[d,In(s[0],s[1])]})}}function In(e,t){return t?Number(t):Bn(e)?0:1}function Bn(e){return Nn.includes(e.toLowerCase())}const Te={},U=e=>{console.error(e)},Le=(e,...t)=>{console.log(`WARN: ${e}`,...t)},K=(e,t)=>{Te[`${e}/${t}`]||(console.log(`Deprecated as of ${e}. ${t}`),Te[`${e}/${t}`]=!0)},Q=new Error;function Fe(e,t,{key:n}){let i=0;const l=e[n],d={},o={};for(let r=1;r<=t.length;r++)o[r+i]=l[r],d[r+i]=!0,i+=Ue(t[r-1]);e[n]=o,e[n]._emit=d,e[n]._multi=!0}function Hn(e){if(Array.isArray(e.begin)){if(e.skip||e.excludeBegin||e.returnBegin)throw U("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),Q;if(typeof e.beginScope!="object"||e.beginScope===null)throw U("beginScope must be object"),Q;Fe(e,e.begin,{key:"beginScope"}),e.begin=be(e.begin,{joinWith:""})}}function Dn(e){if(Array.isArray(e.end)){if(e.skip||e.excludeEnd||e.returnEnd)throw U("skip, excludeEnd, returnEnd not compatible with endScope: {}"),Q;if(typeof e.endScope!="object"||e.endScope===null)throw U("endScope must be object"),Q;Fe(e,e.end,{key:"endScope"}),e.end=be(e.end,{joinWith:""})}}function Pn(e){e.scope&&typeof e.scope=="object"&&e.scope!==null&&(e.beginScope=e.scope,delete e.scope)}function jn(e){Pn(e),typeof e.beginScope=="string"&&(e.beginScope={_wrap:e.beginScope}),typeof e.endScope=="string"&&(e.endScope={_wrap:e.endScope}),Hn(e),Dn(e)}function Un(e){function t(o,r){return new RegExp(W(o),"m"+(e.case_insensitive?"i":"")+(e.unicodeRegex?"u":"")+(r?"g":""))}class n{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(r,s){s.position=this.position++,this.matchIndexes[this.matchAt]=s,this.regexes.push([s,r]),this.matchAt+=Ue(r)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const r=this.regexes.map(s=>s[1]);this.matcherRe=t(be(r,{joinWith:"|"}),!0),this.lastIndex=0}exec(r){this.matcherRe.lastIndex=this.lastIndex;const s=this.matcherRe.exec(r);if(!s)return null;const u=s.findIndex((y,M)=>M>0&&y!==void 0),g=this.matchIndexes[u];return s.splice(0,u),Object.assign(s,g)}}class i{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(r){if(this.multiRegexes[r])return this.multiRegexes[r];const s=new n;return this.rules.slice(r).forEach(([u,g])=>s.addRule(u,g)),s.compile(),this.multiRegexes[r]=s,s}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(r,s){this.rules.push([r,s]),s.type==="begin"&&this.count++}exec(r){const s=this.getMatcher(this.regexIndex);s.lastIndex=this.lastIndex;let u=s.exec(r);if(this.resumingScanAtSamePosition()&&!(u&&u.index===this.lastIndex)){const g=this.getMatcher(0);g.lastIndex=this.lastIndex+1,u=g.exec(r)}return u&&(this.regexIndex+=u.position+1,this.regexIndex===this.count&&this.considerAll()),u}}function l(o){const r=new i;return o.contains.forEach(s=>r.addRule(s.begin,{rule:s,type:"begin"})),o.terminatorEnd&&r.addRule(o.terminatorEnd,{type:"end"}),o.illegal&&r.addRule(o.illegal,{type:"illegal"}),r}function d(o,r){const s=o;if(o.isCompiled)return s;[mn,Rn,jn,Ln].forEach(g=>g(o,r)),e.compilerExtensions.forEach(g=>g(o,r)),o.__beforeBegin=null,[Sn,On,Tn].forEach(g=>g(o,r)),o.isCompiled=!0;let u=null;return typeof o.keywords=="object"&&o.keywords.$pattern&&(o.keywords=Object.assign({},o.keywords),u=o.keywords.$pattern,delete o.keywords.$pattern),u=u||/\w+/,o.keywords&&(o.keywords=ze(o.keywords,e.case_insensitive)),s.keywordPatternRe=t(u,!0),r&&(o.begin||(o.begin=/\B|\b/),s.beginRe=t(s.begin),!o.end&&!o.endsWithParent&&(o.end=/\B|\b/),o.end&&(s.endRe=t(s.end)),s.terminatorEnd=W(s.end)||"",o.endsWithParent&&r.terminatorEnd&&(s.terminatorEnd+=(o.end?"|":"")+r.terminatorEnd)),o.illegal&&(s.illegalRe=t(o.illegal)),o.contains||(o.contains=[]),o.contains=[].concat(...o.contains.map(function(g){return $n(g==="self"?o:g)})),o.contains.forEach(function(g){d(g,s)}),o.starts&&d(o.starts,r),s.matcher=l(s),s}if(e.compilerExtensions||(e.compilerExtensions=[]),e.contains&&e.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return e.classNameAliases=P(e.classNameAliases||{}),d(e)}function Xe(e){return e?e.endsWithParent||Xe(e.starts):!1}function $n(e){return e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map(function(t){return P(e,{variants:null},t)})),e.cachedVariants?e.cachedVariants:Xe(e)?P(e,{starts:e.starts?P(e.starts):null}):Object.isFrozen(e)?P(e):e}var Kn="11.6.0";class Gn extends Error{constructor(t,n){super(t),this.name="HTMLInjectionError",this.html=n}}const ae=Pe,Ne=P,Ce=Symbol("nomatch"),Wn=7,zn=function(e){const t=Object.create(null),n=Object.create(null),i=[];let l=!0;const d="Could not find the language '{}', did you forget to load/include a language module?",o={disableAutodetect:!0,name:"Plain text",contains:[]};let r={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:tn};function s(a){return r.noHighlightRe.test(a)}function u(a){let h=a.className+" ";h+=a.parentNode?a.parentNode.className:"";const E=r.languageDetectRe.exec(h);if(E){const w=I(E[1]);return w||(Le(d.replace("{}",E[1])),Le("Falling back to no-highlight mode for this block.",a)),w?E[1]:"no-highlight"}return h.split(/\s+/).find(w=>s(w)||I(w))}function g(a,h,E){let w="",v="";typeof h=="object"?(w=a,E=h.ignoreIllegals,v=h.language):(K("10.7.0","highlight(lang, code, ...args) has been deprecated."),K("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),v=a,w=h),E===void 0&&(E=!0);const N={code:w,language:v};Y("before:highlight",N);const B=N.result?N.result:y(N.language,N.code,E);return B.code=N.code,Y("after:highlight",B),B}function y(a,h,E,w){const v=Object.create(null);function N(c,f){return c.keywords[f]}function B(){if(!p.keywords){m.addText(A);return}let c=0;p.keywordPatternRe.lastIndex=0;let f=p.keywordPatternRe.exec(A),b="";for(;f;){b+=A.substring(c,f.index);const x=D.case_insensitive?f[0].toLowerCase():f[0],O=N(p,x);if(O){const[C,ct]=O;if(m.addText(b),b="",v[x]=(v[x]||0)+1,v[x]<=Wn&&(V+=ct),C.startsWith("_"))b+=f[0];else{const lt=D.classNameAliases[C]||C;m.addKeyword(f[0],lt)}}else b+=f[0];c=p.keywordPatternRe.lastIndex,f=p.keywordPatternRe.exec(A)}b+=A.substring(c),m.addText(b)}function Z(){if(A==="")return;let c=null;if(typeof p.subLanguage=="string"){if(!t[p.subLanguage]){m.addText(A);return}c=y(p.subLanguage,A,!0,Ae[p.subLanguage]),Ae[p.subLanguage]=c._top}else c=k(A,p.subLanguage.length?p.subLanguage:null);p.relevance>0&&(V+=c.relevance),m.addSublanguage(c._emitter,c.language)}function R(){p.subLanguage!=null?Z():B(),A=""}function H(c,f){let b=1;const x=f.length-1;for(;b<=x;){if(!c._emit[b]){b++;continue}const O=D.classNameAliases[c[b]]||c[b],C=f[b];O?m.addKeyword(C,O):(A=C,B(),A=""),b++}}function _e(c,f){return c.scope&&typeof c.scope=="string"&&m.openNode(D.classNameAliases[c.scope]||c.scope),c.beginScope&&(c.beginScope._wrap?(m.addKeyword(A,D.classNameAliases[c.beginScope._wrap]||c.beginScope._wrap),A=""):c.beginScope._multi&&(H(c.beginScope,f),A="")),p=Object.create(c,{parent:{value:p}}),p}function we(c,f,b){let x=on(c.endRe,b);if(x){if(c["on:end"]){const O=new Se(c);c["on:end"](f,O),O.isMatchIgnored&&(x=!1)}if(x){for(;c.endsParent&&c.parent;)c=c.parent;return c}}if(c.endsWithParent)return we(c.parent,f,b)}function rt(c){return p.matcher.regexIndex===0?(A+=c[0],1):(oe=!0,0)}function st(c){const f=c[0],b=c.rule,x=new Se(b),O=[b.__beforeBegin,b["on:begin"]];for(const C of O)if(C&&(C(c,x),x.isMatchIgnored))return rt(f);return b.skip?A+=f:(b.excludeBegin&&(A+=f),R(),!b.returnBegin&&!b.excludeBegin&&(A=f)),_e(b,c),b.returnBegin?0:f.length}function it(c){const f=c[0],b=h.substring(c.index),x=we(p,c,b);if(!x)return Ce;const O=p;p.endScope&&p.endScope._wrap?(R(),m.addKeyword(f,p.endScope._wrap)):p.endScope&&p.endScope._multi?(R(),H(p.endScope,c)):O.skip?A+=f:(O.returnEnd||O.excludeEnd||(A+=f),R(),O.excludeEnd&&(A=f));do p.scope&&m.closeNode(),!p.skip&&!p.subLanguage&&(V+=p.relevance),p=p.parent;while(p!==x.parent);return x.starts&&_e(x.starts,c),O.returnEnd?0:f.length}function ot(){const c=[];for(let f=p;f!==D;f=f.parent)f.scope&&c.unshift(f.scope);c.forEach(f=>m.openNode(f))}let J={};function ke(c,f){const b=f&&f[0];if(A+=c,b==null)return R(),0;if(J.type==="begin"&&f.type==="end"&&J.index===f.index&&b===""){if(A+=h.slice(f.index,f.index+1),!l){const x=new Error(`0 width match regex (${a})`);throw x.languageName=a,x.badRule=J.rule,x}return 1}if(J=f,f.type==="begin")return st(f);if(f.type==="illegal"&&!E){const x=new Error('Illegal lexeme "'+b+'" for mode "'+(p.scope||"<unnamed>")+'"');throw x.mode=p,x}else if(f.type==="end"){const x=it(f);if(x!==Ce)return x}if(f.type==="illegal"&&b==="")return 1;if(ie>1e5&&ie>f.index*3)throw new Error("potential infinite loop, way more iterations than matches");return A+=b,b.length}const D=I(a);if(!D)throw U(d.replace("{}",a)),new Error('Unknown language: "'+a+'"');const at=Un(D);let se="",p=w||at;const Ae={},m=new r.__emitter(r);ot();let A="",V=0,j=0,ie=0,oe=!1;try{for(p.matcher.considerAll();;){ie++,oe?oe=!1:p.matcher.considerAll(),p.matcher.lastIndex=j;const c=p.matcher.exec(h);if(!c)break;const f=h.substring(j,c.index),b=ke(f,c);j=c.index+b}return ke(h.substring(j)),m.closeAllNodes(),m.finalize(),se=m.toHTML(),{language:a,value:se,relevance:V,illegal:!1,_emitter:m,_top:p}}catch(c){if(c.message&&c.message.includes("Illegal"))return{language:a,value:ae(h),illegal:!0,relevance:0,_illegalBy:{message:c.message,index:j,context:h.slice(j-100,j+100),mode:c.mode,resultSoFar:se},_emitter:m};if(l)return{language:a,value:ae(h),illegal:!1,relevance:0,errorRaised:c,_emitter:m,_top:p};throw c}}function M(a){const h={value:ae(a),illegal:!1,relevance:0,_top:o,_emitter:new r.__emitter(r)};return h._emitter.addText(a),h}function k(a,h){h=h||r.languages||Object.keys(t);const E=M(a),w=h.filter(I).filter(Me).map(R=>y(R,a,!1));w.unshift(E);const v=w.sort((R,H)=>{if(R.relevance!==H.relevance)return H.relevance-R.relevance;if(R.language&&H.language){if(I(R.language).supersetOf===H.language)return 1;if(I(H.language).supersetOf===R.language)return-1}return 0}),[N,B]=v,Z=N;return Z.secondBest=B,Z}function S(a,h,E){const w=h&&n[h]||E;a.classList.add("hljs"),a.classList.add(`language-${w}`)}function T(a){let h=null;const E=u(a);if(s(E))return;if(Y("before:highlightElement",{el:a,language:E}),a.children.length>0&&(r.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(a)),r.throwUnescapedHTML))throw new Gn("One of your code blocks includes unescaped HTML.",a.innerHTML);h=a;const w=h.textContent,v=E?g(w,{language:E,ignoreIllegals:!0}):k(w);a.innerHTML=v.value,S(a,E,v.language),a.result={language:v.language,re:v.relevance,relevance:v.relevance},v.secondBest&&(a.secondBest={language:v.secondBest.language,relevance:v.secondBest.relevance}),Y("after:highlightElement",{el:a,result:v,text:w})}function _(a){r=Ne(r,a)}const re=()=>{X(),K("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function Ze(){X(),K("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let ye=!1;function X(){if(document.readyState==="loading"){ye=!0;return}document.querySelectorAll(r.cssSelector).forEach(T)}function Je(){ye&&X()}typeof window<"u"&&window.addEventListener&&window.addEventListener("DOMContentLoaded",Je,!1);function Ve(a,h){let E=null;try{E=h(e)}catch(w){if(U("Language definition for '{}' could not be registered.".replace("{}",a)),l)U(w);else throw w;E=o}E.name||(E.name=a),t[a]=E,E.rawDefinition=h.bind(null,e),E.aliases&&xe(E.aliases,{languageName:a})}function qe(a){delete t[a];for(const h of Object.keys(n))n[h]===a&&delete n[h]}function Qe(){return Object.keys(t)}function I(a){return a=(a||"").toLowerCase(),t[a]||t[n[a]]}function xe(a,{languageName:h}){typeof a=="string"&&(a=[a]),a.forEach(E=>{n[E.toLowerCase()]=h})}function Me(a){const h=I(a);return h&&!h.disableAutodetect}function et(a){a["before:highlightBlock"]&&!a["before:highlightElement"]&&(a["before:highlightElement"]=h=>{a["before:highlightBlock"](Object.assign({block:h.el},h))}),a["after:highlightBlock"]&&!a["after:highlightElement"]&&(a["after:highlightElement"]=h=>{a["after:highlightBlock"](Object.assign({block:h.el},h))})}function tt(a){et(a),i.push(a)}function Y(a,h){const E=a;i.forEach(function(w){w[E]&&w[E](h)})}function nt(a){return K("10.7.0","highlightBlock will be removed entirely in v12.0"),K("10.7.0","Please use highlightElement now."),T(a)}Object.assign(e,{highlight:g,highlightAuto:k,highlightAll:X,highlightElement:T,highlightBlock:nt,configure:_,initHighlighting:re,initHighlightingOnLoad:Ze,registerLanguage:Ve,unregisterLanguage:qe,listLanguages:Qe,getLanguage:I,registerAliases:xe,autoDetection:Me,inherit:Ne,addPlugin:tt}),e.debugMode=function(){l=!1},e.safeMode=function(){l=!0},e.versionString=Kn,e.regex={concat:$,lookahead:je,either:pe,optional:rn,anyNumberOfTimes:nn};for(const a in q)typeof q[a]=="object"&&ge.exports(q[a]);return Object.assign(e,q),e};var F=zn({}),Fn=F;F.HighlightJS=F;F.default=F;var Xn=Fn;function Ye(e,t=[]){return e.map(n=>{const i=[...t,...n.properties?n.properties.className:[]];return n.children?Ye(n.children,i):{text:n.value,classes:i}}).flat()}function Ie(e){return e.value||e.children||[]}function Yn(e){return!!Xn.getLanguage(e)}function Be({doc:e,name:t,lowlight:n,defaultLanguage:i}){const l=[];return ce(e,d=>d.type.name===t).forEach(d=>{let o=d.pos+1;const r=d.node.attrs.language||i,s=n.listLanguages(),u=r&&(s.includes(r)||Yn(r))?Ie(n.highlight(r,d.node.textContent)):Ie(n.highlightAuto(d.node.textContent));Ye(u).forEach(g=>{const y=o+g.text.length;if(g.classes.length){const M=Mt.inline(o,y,{class:g.classes.join(" ")});l.push(M)}o=y})}),_t.create(e,l)}function Zn(e){return typeof e=="function"}function Jn({name:e,lowlight:t,defaultLanguage:n}){if(!["highlight","highlightAuto","listLanguages"].every(l=>Zn(t[l])))throw Error("You should provide an instance of lowlight to use the code-block-lowlight extension");const i=new ee({key:new te("lowlight"),state:{init:(l,{doc:d})=>Be({doc:d,name:e,lowlight:t,defaultLanguage:n}),apply:(l,d,o,r)=>{const s=o.selection.$head.parent.type.name,u=r.selection.$head.parent.type.name,g=ce(o.doc,M=>M.type.name===e),y=ce(r.doc,M=>M.type.name===e);return l.docChanged&&([s,u].includes(e)||y.length!==g.length||l.steps.some(M=>M.from!==void 0&&M.to!==void 0&&g.some(k=>k.pos>=M.from&&k.pos+k.node.nodeSize<=M.to)))?Be({doc:l.doc,name:e,lowlight:t,defaultLanguage:n}):d.map(l.mapping,l.doc)}},props:{decorations(l){return i.getState(l)}}});return i}const Vn=xt.extend({addOptions(){var e;return{...(e=this.parent)===null||e===void 0?void 0:e.call(this),lowlight:{},defaultLanguage:null}},addProseMirrorPlugins(){var e;return[...((e=this.parent)===null||e===void 0?void 0:e.call(this))||[],Jn({name:this.name,lowlight:this.options.lowlight,defaultLanguage:this.options.defaultLanguage})]}}),qn=ue.create({name:"embed",group:"block",atom:!0,addAttributes(){return{src:{default:null}}},parseHTML(){return[{tag:"iframe"}]},renderHTML({HTMLAttributes:e}){return["iframe",G(this.options.HTMLAttributes,e)]},addCommands(){return{setEmbed:e=>({commands:t})=>t.insertContent({type:this.name,attrs:e})}}}),He={},Qn="hljs-";function er(e){const t=Lt.newInstance();return e&&d(e),{highlight:n,highlightAuto:i,listLanguages:l,register:d,registerAlias:o,registered:r};function n(s,u,g){const y=g||He,M=typeof y.prefix=="string"?y.prefix:Qn;if(!t.getLanguage(s))throw new Error("Unknown language: `"+s+"` is not registered");t.configure({__emitter:tr,classPrefix:M});const k=t.highlight(u,{ignoreIllegals:!0,language:s});if(k.errorRaised)throw new Error("Could not highlight with `Highlight.js`",{cause:k.errorRaised});const S=k._emitter.root,T=S.data;return T.language=k.language,T.relevance=k.relevance,S}function i(s,u){const y=(u||He).subset||l();let M=-1,k=0,S;for(;++M<y.length;){const T=y[M];if(!t.getLanguage(T))continue;const _=n(T,s,u);_.data&&_.data.relevance!==void 0&&_.data.relevance>k&&(k=_.data.relevance,S=_)}return S||{type:"root",children:[],data:{language:void 0,relevance:k}}}function l(){return t.listLanguages()}function d(s,u){if(typeof s=="string")t.registerLanguage(s,u);else{let g;for(g in s)Object.hasOwn(s,g)&&t.registerLanguage(g,s[g])}}function o(s,u){if(typeof s=="string")t.registerAliases(typeof u=="string"?u:[...u],{languageName:s});else{let g;for(g in s)if(Object.hasOwn(s,g)){const y=s[g];t.registerAliases(typeof y=="string"?y:[...y],{languageName:g})}}}function r(s){return!!t.getLanguage(s)}}class tr{constructor(t){this.options=t,this.root={type:"root",children:[],data:{language:void 0,relevance:0}},this.stack=[this.root]}addText(t){if(t==="")return;const n=this.stack[this.stack.length-1],i=n.children[n.children.length-1];i&&i.type==="text"?i.value+=t:n.children.push({type:"text",value:t})}startScope(t){this.openNode(String(t))}endScope(){this.closeNode()}__addSublanguage(t,n){const i=this.stack[this.stack.length-1],l=t.root.children;n?i.children.push({type:"element",tagName:"span",properties:{className:[n]},children:l}):i.children.push(...l)}openNode(t){const n=this,i=t.split(".").map(function(o,r){return r?o+"_".repeat(r):n.options.classPrefix+o}),l=this.stack[this.stack.length-1],d={type:"element",tagName:"span",properties:{className:i},children:[]};l.children.push(d),this.stack.push(d)}closeNode(){this.stack.pop()}finalize(){}toHTML(){return""}}const L=er();L.register("javascript",Nt);L.register("typescript",Ct);L.register("html",It);L.register("css",Bt);L.register("php",Ht);L.register("shell",Dt);L.register("bash",Pt);L.register("ruby",jt);L.register("python",Ut);L.register("java",$t);L.register("c",Kt);const nr=ue.create({name:"be-info-block",group:"block",content:"inline*",defining:!0,addAttributes(){return{type:{default:"success",renderHTML:e=>({class:e.type})}}},parseHTML(){return[{tag:"div",getAttrs:e=>e.classList.contains("info-block")&&null}]},renderHTML({HTMLAttributes:e}){return["div",G(e,{class:"info-block"}),["div",{class:"title"},"Important:"],["p",0]]},addCommands(){return{addInfo:e=>({commands:t})=>t.setNode(this.name,e)}}});function dr({initialContent:e="",children:t,onLoad:n,onCtrlEnter:i,minHeight:l="min-h-320",autoFocus:d}){const o=ut(n),r=ve.useRef(!1),s=[wt.configure({codeBlock:!1}),kt,Ft.extend({inclusive:!1,validate:{url:g=>/^https?:\/\//.test(g)}}),Yt,Zt,Jt,At,vt,mt,St,Vn.configure({lowlight:L}),Vt.configure({types:["heading","paragraph"]}),nr,qn];i&&s.push(De.create({addKeyboardShortcuts:()=>({"Cmd-Enter"(){return i(),!0},"Ctrl-Enter"(){return i(),!0}})}));const u=Ot({extensions:s,onFocus:()=>{},autofocus:d,content:e});return ve.useEffect(()=>{if(u)return()=>u.destroy()},[u]),u?(u&&o&&!r.current&&(o(u),r.current=!0),t(ft.jsx(Rt,{className:l,editor:u}),u)):null}export{dr as default};
//# sourceMappingURL=article-body-editor-bfcb3d6d.js.map
