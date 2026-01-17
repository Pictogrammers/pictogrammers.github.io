var Ld=Object.create;var Fs=Object.defineProperty;var Fd=Object.getOwnPropertyDescriptor;var b8=Object.getOwnPropertyNames;var v8=Object.getPrototypeOf,x8=Object.prototype.hasOwnProperty;var Sd=(e,r)=>(r=Symbol[e])?r:Symbol.for("Symbol."+e),aa=e=>{throw TypeError(e)};var Md=(e,r,t)=>r in e?Fs(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t;var kd=(e,r)=>Fs(e,"name",{value:r,configurable:!0});var y8=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports);var E8=(e,r,t,n)=>{if(r&&typeof r=="object"||typeof r=="function")for(let i of b8(r))!x8.call(e,i)&&i!==t&&Fs(e,i,{get:()=>r[i],enumerable:!(n=Fd(r,i))||n.enumerable});return e};var w8=(e,r,t)=>(t=e!=null?Ld(v8(e)):{},E8(r||!e||!e.__esModule?Fs(t,"default",{value:e,enumerable:!0}):t,e));var A=e=>[,,,Ld(e?.[Sd("metadata")]??null)],Td=["class","method","getter","setter","accessor","field","value","get","set"],Ls=e=>e!==void 0&&typeof e!="function"?aa("Function expected"):e,C8=(e,r,t,n,i)=>({kind:Td[e],name:r,metadata:n,addInitializer:o=>t._?aa("Already initialized"):i.push(Ls(o||null))}),A8=(e,r)=>Md(r,Sd("metadata"),e[3]),a=(e,r,t,n)=>{for(var i=0,o=e[r>>1],s=o&&o.length;i<s;i++)r&1?o[i].call(t):n=o[i].call(t,n);return n},c=(e,r,t,n,i,o)=>{var s,l,u,d,h,f=r&7,g=!!(r&8),b=!!(r&16),w=f>3?e.length+1:f?g?1:2:0,v=Td[f+5],y=f>3&&(e[w-1]=[]),E=e[w]||(e[w]=[]),C=f&&(!b&&!g&&(i=i.prototype),f<5&&(f>3||!b)&&Fd(f<4?i:{get[t](){return x(this,o)},set[t](M){return B(this,o,M)}},t));f?b&&f<4&&kd(o,(f>2?"set ":f>1?"get ":"")+t):kd(i,t);for(var S=n.length-1;S>=0;S--)d=C8(f,t,u={},e[3],E),f&&(d.static=g,d.private=b,h=d.access={has:b?M=>k8(i,M):M=>t in M},f^3&&(h.get=b?M=>(f^1?x:F)(M,i,f^4?o:C.get):M=>M[t]),f>2&&(h.set=b?(M,_)=>B(M,i,_,f^4?o:C.set):(M,_)=>M[t]=_)),l=(0,n[S])(f?f<4?b?o:C[v]:f>4?void 0:{get:C.get,set:C.set}:i,d),u._=1,f^4||l===void 0?Ls(l)&&(f>4?y.unshift(l):f?b?o=l:C[v]=l:i=l):typeof l!="object"||l===null?aa("Object expected"):(Ls(s=l.get)&&(C.get=s),Ls(s=l.set)&&(C.set=s),Ls(s=l.init)&&y.unshift(s));return f||A8(e,i),C&&Fs(i,t,C),b?f^4?o:C:i},p=(e,r,t)=>Md(e,typeof r!="symbol"?r+"":r,t),Pu=(e,r,t)=>r.has(e)||aa("Cannot "+t),k8=(e,r)=>Object(r)!==r?aa('Cannot use the "in" operator on this value'):e.has(r),x=(e,r,t)=>(Pu(e,r,"read from private field"),t?t.call(e):r.get(e)),R=(e,r,t)=>r.has(e)?aa("Cannot add the same private member more than once"):r instanceof WeakSet?r.add(e):r.set(e,t),B=(e,r,t,n)=>(Pu(e,r,"write to private field"),n?n.call(e,t):r.set(e,t),t),F=(e,r,t)=>(Pu(e,r,"access private method"),t);var nn=(e,r,t,n)=>({set _(i){B(e,r,i,t)},get _(){return x(e,r,n)}});var z5=y8((sQ,Iu)=>{var $H=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};var Y=(function(e){var r=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,t=0,n={},i={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function v(y){return y instanceof o?new o(y.type,v(y.content),y.alias):Array.isArray(y)?y.map(v):y.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(v){return Object.prototype.toString.call(v).slice(8,-1)},objId:function(v){return v.__id||Object.defineProperty(v,"__id",{value:++t}),v.__id},clone:function v(y,E){E=E||{};var C,S;switch(i.util.type(y)){case"Object":if(S=i.util.objId(y),E[S])return E[S];C={},E[S]=C;for(var M in y)y.hasOwnProperty(M)&&(C[M]=v(y[M],E));return C;case"Array":return S=i.util.objId(y),E[S]?E[S]:(C=[],E[S]=C,y.forEach(function(_,D){C[D]=v(_,E)}),C);default:return y}},getLanguage:function(v){for(;v;){var y=r.exec(v.className);if(y)return y[1].toLowerCase();v=v.parentElement}return"none"},setLanguage:function(v,y){v.className=v.className.replace(RegExp(r,"gi"),""),v.classList.add("language-"+y)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(C){var v=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(C.stack)||[])[1];if(v){var y=document.getElementsByTagName("script");for(var E in y)if(y[E].src==v)return y[E]}return null}},isActive:function(v,y,E){for(var C="no-"+y;v;){var S=v.classList;if(S.contains(y))return!0;if(S.contains(C))return!1;v=v.parentElement}return!!E}},languages:{plain:n,plaintext:n,text:n,txt:n,extend:function(v,y){var E=i.util.clone(i.languages[v]);for(var C in y)E[C]=y[C];return E},insertBefore:function(v,y,E,C){C=C||i.languages;var S=C[v],M={};for(var _ in S)if(S.hasOwnProperty(_)){if(_==y)for(var D in E)E.hasOwnProperty(D)&&(M[D]=E[D]);E.hasOwnProperty(_)||(M[_]=S[_])}var H=C[v];return C[v]=M,i.languages.DFS(i.languages,function(T,$){$===H&&T!=v&&(this[T]=M)}),M},DFS:function v(y,E,C,S){S=S||{};var M=i.util.objId;for(var _ in y)if(y.hasOwnProperty(_)){E.call(y,_,y[_],C||_);var D=y[_],H=i.util.type(D);H==="Object"&&!S[M(D)]?(S[M(D)]=!0,v(D,E,null,S)):H==="Array"&&!S[M(D)]&&(S[M(D)]=!0,v(D,E,_,S))}}},plugins:{},highlightAll:function(v,y){i.highlightAllUnder(document,v,y)},highlightAllUnder:function(v,y,E){var C={callback:E,container:v,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};i.hooks.run("before-highlightall",C),C.elements=Array.prototype.slice.apply(C.container.querySelectorAll(C.selector)),i.hooks.run("before-all-elements-highlight",C);for(var S=0,M;M=C.elements[S++];)i.highlightElement(M,y===!0,C.callback)},highlightElement:function(v,y,E){var C=i.util.getLanguage(v),S=i.languages[C];i.util.setLanguage(v,C);var M=v.parentElement;M&&M.nodeName.toLowerCase()==="pre"&&i.util.setLanguage(M,C);var _=v.textContent,D={element:v,language:C,grammar:S,code:_};function H($){D.highlightedCode=$,i.hooks.run("before-insert",D),D.element.innerHTML=D.highlightedCode,i.hooks.run("after-highlight",D),i.hooks.run("complete",D),E&&E.call(D.element)}if(i.hooks.run("before-sanity-check",D),M=D.element.parentElement,M&&M.nodeName.toLowerCase()==="pre"&&!M.hasAttribute("tabindex")&&M.setAttribute("tabindex","0"),!D.code){i.hooks.run("complete",D),E&&E.call(D.element);return}if(i.hooks.run("before-highlight",D),!D.grammar){H(i.util.encode(D.code));return}if(y&&e.Worker){var T=new Worker(i.filename);T.onmessage=function($){H($.data)},T.postMessage(JSON.stringify({language:D.language,code:D.code,immediateClose:!0}))}else H(i.highlight(D.code,D.grammar,D.language))},highlight:function(v,y,E){var C={code:v,grammar:y,language:E};if(i.hooks.run("before-tokenize",C),!C.grammar)throw new Error('The language "'+C.language+'" has no grammar.');return C.tokens=i.tokenize(C.code,C.grammar),i.hooks.run("after-tokenize",C),o.stringify(i.util.encode(C.tokens),C.language)},tokenize:function(v,y){var E=y.rest;if(E){for(var C in E)y[C]=E[C];delete y.rest}var S=new u;return d(S,S.head,v),l(v,S,y,S.head,0),f(S)},hooks:{all:{},add:function(v,y){var E=i.hooks.all;E[v]=E[v]||[],E[v].push(y)},run:function(v,y){var E=i.hooks.all[v];if(!(!E||!E.length))for(var C=0,S;S=E[C++];)S(y)}},Token:o};e.Prism=i;function o(v,y,E,C){this.type=v,this.content=y,this.alias=E,this.length=(C||"").length|0}o.stringify=function v(y,E){if(typeof y=="string")return y;if(Array.isArray(y)){var C="";return y.forEach(function(H){C+=v(H,E)}),C}var S={type:y.type,content:v(y.content,E),tag:"span",classes:["token",y.type],attributes:{},language:E},M=y.alias;M&&(Array.isArray(M)?Array.prototype.push.apply(S.classes,M):S.classes.push(M)),i.hooks.run("wrap",S);var _="";for(var D in S.attributes)_+=" "+D+'="'+(S.attributes[D]||"").replace(/"/g,"&quot;")+'"';return"<"+S.tag+' class="'+S.classes.join(" ")+'"'+_+">"+S.content+"</"+S.tag+">"};function s(v,y,E,C){v.lastIndex=y;var S=v.exec(E);if(S&&C&&S[1]){var M=S[1].length;S.index+=M,S[0]=S[0].slice(M)}return S}function l(v,y,E,C,S,M){for(var _ in E)if(!(!E.hasOwnProperty(_)||!E[_])){var D=E[_];D=Array.isArray(D)?D:[D];for(var H=0;H<D.length;++H){if(M&&M.cause==_+","+H)return;var T=D[H],$=T.inside,ne=!!T.lookbehind,X=!!T.greedy,Et=T.alias;if(X&&!T.pattern.global){var J=T.pattern.toString().match(/[imsuy]*$/)[0];T.pattern=RegExp(T.pattern.source,J+"g")}for(var ee=T.pattern||T,pe=C.next,ye=S;pe!==y.tail&&!(M&&ye>=M.reach);ye+=pe.value.length,pe=pe.next){var Ge=pe.value;if(y.length>v.length)return;if(!(Ge instanceof o)){var De=1,bt;if(X){if(bt=s(ee,ye,v,ne),!bt||bt.index>=v.length)break;var Ao=bt.index,Wu=bt.index+bt[0].length,kr=ye;for(kr+=pe.value.length;Ao>=kr;)pe=pe.next,kr+=pe.value.length;if(kr-=pe.value.length,ye=kr,pe.value instanceof o)continue;for(var Lr=pe;Lr!==y.tail&&(kr<Wu||typeof Lr.value=="string");Lr=Lr.next)De++,kr+=Lr.value.length;De--,Ge=v.slice(ye,kr),bt.index-=ye}else if(bt=s(ee,0,Ge,ne),!bt)continue;var Ao=bt.index,oa=bt[0],qu=Ge.slice(0,Ao),Ad=Ge.slice(Ao+oa.length),Qu=ye+Ge.length;M&&Qu>M.reach&&(M.reach=Qu);var El=pe.prev;qu&&(El=d(y,El,qu),ye+=qu.length),h(y,El,De);var g8=new o(_,$?i.tokenize(oa,$):oa,Et,oa);if(pe=d(y,El,g8),Ad&&d(y,pe,Ad),De>1){var Zu={cause:_+","+H,reach:Qu};l(v,y,E,pe.prev,ye,Zu),M&&Zu.reach>M.reach&&(M.reach=Zu.reach)}}}}}}function u(){var v={value:null,prev:null,next:null},y={value:null,prev:v,next:null};v.next=y,this.head=v,this.tail=y,this.length=0}function d(v,y,E){var C=y.next,S={value:E,prev:y,next:C};return y.next=S,C.prev=S,v.length++,S}function h(v,y,E){for(var C=y.next,S=0;S<E&&C!==v.tail;S++)C=C.next;y.next=C,C.prev=y,v.length-=S}function f(v){for(var y=[],E=v.head.next;E!==v.tail;)y.push(E.value),E=E.next;return y}if(!e.document)return e.addEventListener&&(i.disableWorkerMessageHandler||e.addEventListener("message",function(v){var y=JSON.parse(v.data),E=y.language,C=y.code,S=y.immediateClose;e.postMessage(i.highlight(C,i.languages[E],E)),S&&e.close()},!1)),i;var g=i.util.currentScript();g&&(i.filename=g.src,g.hasAttribute("data-manual")&&(i.manual=!0));function b(){i.manual||i.highlightAll()}if(!i.manual){var w=document.readyState;w==="loading"||w==="interactive"&&g&&g.defer?document.addEventListener("DOMContentLoaded",b):window.requestAnimationFrame?window.requestAnimationFrame(b):window.setTimeout(b,16)}return i})($H);typeof Iu<"u"&&Iu.exports&&(Iu.exports=Y);typeof global<"u"&&(global.Prism=Y);Y.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]};Y.languages.markup.tag.inside["attr-value"].inside.entity=Y.languages.markup.entity;Y.languages.markup.doctype.inside["internal-subset"].inside=Y.languages.markup;Y.hooks.add("wrap",function(e){e.type==="entity"&&(e.attributes.title=e.content.replace(/&amp;/,"&"))});Object.defineProperty(Y.languages.markup.tag,"addInlined",{value:function(r,t){var n={};n["language-"+t]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:Y.languages[t]},n.cdata=/^<!\[CDATA\[|\]\]>$/i;var i={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:n}};i["language-"+t]={pattern:/[\s\S]+/,inside:Y.languages[t]};var o={};o[r]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return r}),"i"),lookbehind:!0,greedy:!0,inside:i},Y.languages.insertBefore("markup","cdata",o)}});Object.defineProperty(Y.languages.markup.tag,"addAttribute",{value:function(e,r){Y.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+e+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[r,"language-"+r],inside:Y.languages[r]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}});Y.languages.html=Y.languages.markup;Y.languages.mathml=Y.languages.markup;Y.languages.svg=Y.languages.markup;Y.languages.xml=Y.languages.extend("markup",{});Y.languages.ssml=Y.languages.xml;Y.languages.atom=Y.languages.xml;Y.languages.rss=Y.languages.xml;(function(e){var r=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+r.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+r.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+r.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:r,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var t=e.languages.markup;t&&(t.tag.addInlined("style","css"),t.tag.addAttribute("style","css"))})(Y);Y.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/};Y.languages.javascript=Y.languages.extend("clike",{"class-name":[Y.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/});Y.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;Y.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:Y.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:Y.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:Y.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:Y.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:Y.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/});Y.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Y.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}});Y.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}});Y.languages.markup&&(Y.languages.markup.tag.addInlined("script","javascript"),Y.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript"));Y.languages.js=Y.languages.javascript;(function(){if(typeof Y>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var e="Loading\u2026",r=function(g,b){return"\u2716 Error "+g+" while fetching file: "+b},t="\u2716 Error: File does not exist or is empty",n={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},i="data-src-status",o="loading",s="loaded",l="failed",u="pre[data-src]:not(["+i+'="'+s+'"]):not(['+i+'="'+o+'"])';function d(g,b,w){var v=new XMLHttpRequest;v.open("GET",g,!0),v.onreadystatechange=function(){v.readyState==4&&(v.status<400&&v.responseText?b(v.responseText):v.status>=400?w(r(v.status,v.statusText)):w(t))},v.send(null)}function h(g){var b=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(g||"");if(b){var w=Number(b[1]),v=b[2],y=b[3];return v?y?[w,Number(y)]:[w,void 0]:[w,w]}}Y.hooks.add("before-highlightall",function(g){g.selector+=", "+u}),Y.hooks.add("before-sanity-check",function(g){var b=g.element;if(b.matches(u)){g.code="",b.setAttribute(i,o);var w=b.appendChild(document.createElement("CODE"));w.textContent=e;var v=b.getAttribute("data-src"),y=g.language;if(y==="none"){var E=(/\.(\w+)$/.exec(v)||[,"none"])[1];y=n[E]||E}Y.util.setLanguage(w,y),Y.util.setLanguage(b,y);var C=Y.plugins.autoloader;C&&C.loadLanguages(y),d(v,function(S){b.setAttribute(i,s);var M=h(b.getAttribute("data-range"));if(M){var _=S.split(/\r\n?|\n/g),D=M[0],H=M[1]==null?_.length:M[1];D<0&&(D+=_.length),D=Math.max(0,Math.min(D-1,_.length)),H<0&&(H+=_.length),H=Math.max(0,Math.min(H,_.length)),S=_.slice(D,H).join(`
`),b.hasAttribute("data-start")||b.setAttribute("data-start",String(D+1))}w.textContent=S,Y.highlightElement(w)},function(S){b.setAttribute(i,l),w.textContent=S})}}),Y.plugins.fileHighlight={highlight:function(b){for(var w=(b||document).querySelectorAll(u),v=0,y;y=w[v++];)Y.highlightElement(y)}};var f=!1;Y.fileHighlight=function(){f||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),f=!0),Y.plugins.fileHighlight.highlight.apply(this,arguments)}})()});var wl=Symbol("addObserver"),L8=Symbol("removeObserver"),Ju=Symbol("getObservers"),Xu=Symbol("swapObserver"),sa=Symbol("isProxy"),Cl=Symbol("getTarget"),F8=["fill","pop","push","reverse","shift","sort","splice","unshift"];var lr=new Map;window.observers=lr;function vn(e){return new Proxy(e,{get(r,t){if(typeof t=="symbol"){switch(t){case sa:return!0;case Cl:return r;case Ju:return n=>lr.get(e)?.has(n);case Xu:return(n,i)=>{let o=lr.get(e);if(o){let s=o.get(n);s&&s.forEach((l,u)=>{if(l){let d=lr.get(i);if(d){let h=d.get(n);h?h.set(u,l):d.set(n,new Map([[u,l]]))}else lr.set(i,new Map([[n,new Map([[u,l]])]]))}else throw new Error("Unreachable");s.delete(u),l.forEach(d=>{d(null,Fr.swap,[i])})})}};case wl:return(n,i)=>{let o=n.getRootNode().host,s=lr.get(e);if(s){let l=s.get(o);if(l){let u=l.get(n);u?u.push(i):l.set(n,[i])}else s.set(o,new Map([[n,[i]]]))}else lr.set(e,new Map([[o,new Map([[n,[i]]])]]))};case L8:return n=>{let i=n.getRootNode().host,o=lr.get(e);o&&(o.delete(i),o.size===0&&lr.delete(e))};case Symbol.toPrimitive:case Symbol.toStringTag:return Reflect.get(r,t)}throw new Error("Unsupported symbol")}if(t in r){if(!Number.isNaN(Number(t)))return typeof r[t]=="object"?vn(r[t]):r[t];if(t==="copyWithin")throw new Error("Unsupported array method copyWithin");if(F8.includes(t))return lr.has(r)?function(){let n=Array.prototype[t].apply(r,arguments);return lr.get(r)?.forEach(o=>{o.forEach(s=>{s.forEach(l=>{l(r,t,arguments)})})}),n}:Reflect.get(r,t);if(r[t]instanceof Array)return vn(r[t])}return Reflect.get(r,t)},set(r,t,n){if(typeof t=="symbol")throw new Error("Setting symbols not allowed.");return Array.isArray(r)||lr.has(r)&&lr.get(r)?.forEach(o=>{o.forEach(s=>{s.forEach(l=>{l(t,n)})})}),Reflect.set(r,t,n)}})}var Fr={fill:"fill",pop:"pop",push:"push",reverse:"reverse",shift:"shift",sort:"sort",splice:"splice",unshift:"unshift",swap:"swap"};var tc=class extends Error{constructor(r,t){super(r),this.name="PropError",Error.captureStackTrace&&Error.captureStackTrace(this,t)}};var ko=Symbol("init"),Al=Symbol("template"),ec=Symbol("style"),Lo=Symbol("parent");function rc(e){return e[sa]&&e[Cl]}function S8(e,r){return r&&r.match(/<parent\/>/)?r.replace(/<parent\/>/,e):e.match(/<child\/>/)?e.replace(/<child\/>/,r||""):`${e}${r||""}`}function Rd(e){return e.replace(/([a-zA-Z])(?=[A-Z])/g,"$1-").toLowerCase()}function Dd(e){return e.replace(/-([a-z])/g,r=>r[1].toUpperCase())}function k(e={}){return function(r,t){if(t.kind!=="class")throw new Error("@Component() can only decorate a class");Reflect.defineProperty(r,"name",{value:e.selector,writable:!1,configurable:!1}),r.prototype[Lo]&&!(r.prototype[Lo][r.prototype[Lo].length-1]instanceof Object.getPrototypeOf(r))?(r.prototype[Lo].push(r.prototype),r.prototype[ec].push(e.style),r.prototype[Al]=S8(r.prototype[Al],e.template||null)):r.prototype instanceof HTMLElement&&(r.prototype[Lo]=[r.prototype],r.prototype[ec]=e.style?[e.style]:[],r.prototype[Al]=e.template||"");let n=r.prototype.connectedCallback||(()=>{}),i=r.prototype.disconnectedCallback||(()=>{});r.prototype.connectedCallback=function(){if(!this[ko]&&e.template===void 0&&e.style===void 0)e.useShadow===!1||this.attachShadow({mode:"open"});else if(this[ko]){if(!(this[ko]&&e.style)){if(this[ko]&&e.selector&&!e.template)throw new Error("You need to pass a template for an extended element.")}}else{if(e.useShadow===!1)throw new Error("unsupported");{let u=document.createElement("template");u.innerHTML=r.prototype[Al]||"";let d=document.importNode(u.content,!0),h=this.attachShadow({mode:"open"});h.adoptedStyleSheets=r.prototype[ec].reduce((f,g)=>{if(!g)return f;if(g instanceof CSSStyleSheet)return f.push(g),f;var b=new CSSStyleSheet;return b.replaceSync(g.toString()),f.push(b),f},[]),h.appendChild(d)}}let o=new Set;for(let u of this.shadowRoot.querySelectorAll("*"))u.localName.indexOf("-")!==-1&&o.add(u.localName);let s=Array.from(o.values()).map(u=>customElements.get(u)?Promise.resolve():customElements.whenDefined(u)),l=()=>{this[Lo].map(u=>{u.render&&u.render.call(this,r.observedAttributes?r.observedAttributes.reduce((d,h)=>{let f=Dd(h);return d[f]=!0,d},{}):{})})};s.length===0?(this[ko]=!0,n.call(this),l()):Promise.all(s).then(()=>{this[ko]=!0,n.call(this);for(let u of this.shadowRoot.querySelectorAll("slot"))u.dispatchEvent(new CustomEvent("slotchange"));l()})},r.prototype.disconnectedCallback=function(){i.call(this)},r.prototype.attributeChangedCallback=function(o,s,l){let u=Dd(o);this[u]=l},t.addInitializer(function(){if(e.selector){if(window.customElements.get(e.selector))throw new Error(`@Component() ${t.name} duplicate selector '${e.selector}'`);window.customElements.define(e.selector,r)}})}}function _d(e){return!!e&&e.constructor===Array}function $d(e,r){e[ko]&&e[Lo].map(t=>{t.render&&t.render.call(e,{[r]:!0})})}function Hd(e){return e===null?"null":_d(e)?"array":typeof e}function L(e){return function(r,t){let n=t.name,i=Symbol(n),o=Symbol(`${n}:type`),s=Symbol(`${n}:meta`);return t.addInitializer(function(){Reflect.defineProperty(this,n,{get:()=>this[o]==="object"?this[i][sa]?this[i]:vn(this[i]):this[o]==="array"?this[i][sa]?this[i]:vn(this[i]):this[i],set:l=>{let u=Hd(e?e(l):l);if(n!=="index"&&this[o]!==u&&this[o]!=="null"&&u!=="null")throw new Error(`@Prop() ${n} with type '${this[o]}' cannot be set to ${u}.`);if(this[o]==="array"){if(!_d(l))throw new tc(`Array "${n}" (Prop) initialized already. Reassignments must be array type.`,Object.getOwnPropertyDescriptor(this,n)?.set);if(this[i]===l)throw new Error("Setting an array to itself is not allowed.");let d=vn(this[i]);if(d[Ju](this)){let h=l[sa]?l[Cl]:l;d[Xu](this,h),this[i]=l}else this[i]=l}else this[i]=e?e(l):l,$d(this,n)}})}),function(l){if(l===void 0&&n!=="index")throw new Error(`@Prop() ${n} must have an initial value defined.`);if(l!==void 0&&n==="index")throw new Error("@Prop() index must not have an initial value defined.");if(l===!0)throw new Error(`@Prop() ${n} boolean must initialize to false.`);if(!t.private){let{constructor:u}=this;u.observedAttributes??=[],u.symbols||(u.symbols={});let{symbols:d}=u,h=Rd(n);d[n]||(u.observedAttributes.push(h),d[n]=i)}return this[o]=Hd(l),this[o]==="array"?(this[i]=l,new Proxy(l,{get:(u,d)=>d===Id?this[s]:(console.log("errr???"),Reflect.get(this[i],d)),set:(u,d,h)=>{if(d===Id)return this[s]=h,!0;let f=Reflect.set(u,d,h);return d==="length"&&this[i].length===h||$d(this,n),this[i]=h,f}})):(this[i]=e?e(this.getAttribute(n)??l):this.getAttribute(n)??l,this[i])}}}function m(){return function(e,r){let t=r.name,n=t.replace(/^\$/,"");r.addInitializer(function(){let i=null;Reflect.defineProperty(this,t,{get(){return i??(i=this.shadowRoot?.querySelector(`[part~=${n}]`))}})})}}function la(e){return function(r,t){let n=t.name;return function(i){if(!(i instanceof Map))throw new Error("@Local(key) property must be type Map");return new Proxy(i,{get(o,s){switch(s){case"get":return l=>{if(!i.has(l))throw new Error(`@Local(key) missing key ${l}`);let u=`${e}:${l}`;return window.localStorage.getItem(u)===null?i.get(l):JSON.parse(window.localStorage.getItem(u)??"null")};case"set":return(l,u)=>{if(!i.has(l))throw new Error(`@Local(key) missing key ${l}`);let d=`${e}:${l}`;u===null||JSON.stringify(u)===JSON.stringify(i.get(l))?window.localStorage.removeItem(d):window.localStorage.setItem(d,JSON.stringify(u))};default:throw new Error(`@Local(key) supported method ${s}`)}}})}}}function kl(e,r){let t=document.createElement("template");t.innerHTML=e;let n=document.importNode(t.content,!0);for(let[i,o]of Object.entries(r)){let s=n.querySelector(`[part~="${i}"]`);if(s)for(let[l,u]of Object.entries(o))u instanceof Function?u()===null?s.removeAttribute(l):s.setAttribute(l,u()):s[l]=u}return n}function Ss(e){return parseInt(`${e}`,10)}function Ii(e){return e===""||e===!0?!0:e===null||e===!1?!1:e||!0}var Id=Symbol("meta");function M8(e,r){let t=new Set(e);return r.filter(n=>t.has(n))}function Je({container:e,items:r,type:t,create:n,connect:i,disconnect:o,update:s}){function l(u,d){let h=t(u),f=document.createElement(Rd(h.name),h),g=Object.keys(h.symbols),b=M8(Object.keys(u),g);return g.includes("index")&&(f.index=d),b.forEach(w=>{w!=="index"&&(f[w]=u[w])}),n&&n(f,vn(u)),r[d][wl](f,(w,v)=>{f[w]=v}),f}r.forEach((u,d)=>{let h=l(u,d);e.appendChild(h),i&&i(h,vn(u))}),r[wl](e,(u,d,h)=>{if(d===Fr.swap){let g=r.length;r=vn(h[0]),d=Fr.splice,h=[0,g,...h[0]]}switch(d){case Fr.fill:let[g,b,w]=h;for(let H=b||0;H<(w||r.length);H++)Object.keys(g).forEach(T=>{e.children[H][T]=g[T]});break;case Fr.pop:let v=e.children.length;v>0&&e.children[v-1].remove();break;case Fr.push:let y=e.children.length;[...h].forEach((H,T)=>{let $=l(H,y+T);e.appendChild($),i&&i($,vn(H))});break;case Fr.reverse:for(var f=1;f<e.children.length;f++)e.insertBefore(e.children[f],e.children[0]);break;case Fr.shift:e.children.length&&e.children[0].remove();for(let H=0;H<e.children.length;H++)e.children[H].index=H;break;case Fr.sort:throw new Error("ToDo... write sort.");case Fr.splice:let[E,C,...S]=h;if(C>0)for(let H=E;H<C+E;H++)e.children[H].remove();let M=S.length||0;if(M>0){let H=S.map((T,$)=>l(T,E+$));E===0?e.prepend(...H):e.children[E-1].after(...H);for(let T=E-C+M;T<e.children.length;T++)e.children[T].index=T;H.forEach(T=>{i&&i(T,S[f])})}else for(let H=E;H<e.children.length;H++)e.children[H].index=H;break;case Fr.unshift:let _=e.children.length&&e.children[0],D=[...h].length;[...h].forEach((H,T)=>{_?_.before(l(H,T)):e.appendChild(l(H,T))});for(let H=D;H<e.children.length;H++)e.children[H].index=H;break}})}var Bd=`<div>
  <button part="close">
    <svg viewBox="0 0 24 24">
      <path fill="currentColor" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
    </svg>
  </button>
  <slot></slot>
</div>`;var Od=`:host {\r
  display: block;\r
  position: var(--pg-annoy-position, fixed);\r
  font-family: var(--pg-font-family, system-ui);\r
  width: var(--pg-annoy-width, 12rem);\r
  height: var(--pg-annoy-height, auto);\r
  max-height: var(--pg-annoy-max-height, auto);\r
  font-size: 1rem;\r
  transition: 0.1s margin-bottom ease-in;\r
}\r
:host(.footer) {\r
  margin-bottom: 4rem;\r
}\r
\r
div {\r
  position: relative;\r
  display: grid;\r
  margin-right: 0.75rem;\r
  padding: 0.5rem;\r
  border: 1px solid #FFFFFF;\r
  border-radius: 0.25rem;\r
  background: #FFFFFF;\r
  box-shadow: 0 1px 2rem rgba(0, 0, 0, 0.3);\r
}\r
\r
[part=close] {\r
  position: absolute;\r
  right: -0.75rem;\r
  top: -0.75rem;\r
  width: 1.5rem;\r
  height: 1.5rem;\r
  border: 1px solid #fff;\r
  border-radius: 50%;\r
  background: #fff;\r
  display: flex;\r
  align-items: center;\r
  justify-content: center;\r
  box-shadow: 0 1px 0.25rem rgba(0, 0, 0, 0.4);\r
  padding: 0;\r
  color: rgba(69, 60, 79, 0.8);\r
  outline: none;\r
}\r
\r
[part=close]:hover {\r
  color: #453C4F;\r
  border-color: rgba(69, 60, 79, 0.6);\r
}\r
\r
[part=close]:active {\r
  box-shadow: 0 1px 0.25rem rgba(0, 0, 0, 0.2);\r
  border-color: rgba(69, 60, 79, 0.9);\r
}\r
\r
[part=close]:focus::before {\r
  pointer-events: none;\r
  content: '';\r
  position: absolute;\r
  top: -1px;\r
  right: -1px;\r
  bottom: -1px;\r
  left: -1px;\r
  border-radius: 50%;\r
  box-shadow: 0 0 0 3px var(--pg-focus-color, rgb(79, 143, 249, 0.6));\r
}\r
\r
[part=close] svg {\r
  width: 1rem;\r
  height: 1rem;\r
}\r
`;var Nd,Vd,zd,ua;zd=[k({selector:"pg-annoy",style:Od,template:Bd})];var Fo=class extends(Vd=HTMLElement,Nd=[m()],Vd){constructor(){super(...arguments);p(this,"$close",a(ua,8,this)),a(ua,11,this);p(this,"list",[])}connectedCallback(){}};ua=A(Vd),c(ua,5,"$close",Nd,Fo),Fo=c(ua,0,"PgAnnoy",zd,Fo),a(ua,1,Fo);var jd=`<div class="example">
  <pg-annoy>
    This is a very annoying corner message.
  </pg-annoy>
</div>`;var Yd=`:host {\r
  --pg-annoy-position: static;\r
}`;var Kd,nc,$8;Kd=[k({selector:"x-pg-annoy-basic",template:jd,style:Yd})];var ca=class extends($8=HTMLElement){};nc=A($8),ca=c(nc,0,"XPgAnnoyBasic",Kd,ca),a(nc,1,ca);var Ud=`<div part="grid">
  <header part="header">
    <button part="logo">
      <slot name="icon"></slot>
    </button>
    <slot name="top"></slot>
  </header>
  <div part="side">
    <slot name="side"></slot>
  </div>
  <button part="resize"></button>
  <div part="main">
    <slot name="main"></slot>
  </div>
  <div part="home" class="hide">
    <slot name="home"></slot>
  </div>
</div>`;var Gd=`:host {\r
  display: contents;\r
}\r
\r
[part=grid] {\r
  display: grid;\r
  grid-template-columns: auto 0.5rem minmax(0, 1fr);\r
  grid-template-rows: auto minmax(0, 1fr);\r
  height: 100%;\r
}\r
\r
[part=header] {\r
  display: flex;\r
  grid-column: 1 / 4;\r
  grid-row: 1;\r
  border-bottom: 2px solid #453C4F;\r
}\r
\r
[part=header] > button {\r
  display: flex;\r
  border: 0;\r
  padding: 0.5rem;\r
  background-color: transparent;\r
  border-right: 1px solid rgba(69, 60, 79, 0.5);\r
  outline: none;\r
}\r
\r
[part=header] > button:hover {\r
  background-color: rgba(69, 60, 79, 0.10);\r
}\r
\r
[part=header] > button:focus-visible {\r
  position: relative;\r
}\r
\r
[part=header] > button:focus-visible::before {\r
  pointer-events: none;\r
  content: '';\r
  position: absolute;\r
  top: 3px;\r
  right: 3px;\r
  bottom: 3px;\r
  left: 3px;\r
  box-shadow: 0 0 0 3px var(--pg-focus-color, rgba(79, 143, 249, 0.5));\r
}\r
\r
[part=header] > button.selected {\r
  --pg-icon-color: rgb(79, 143, 249);\r
}\r
\r
[part=header] > button.selected:hover {\r
  background-color: #fff;\r
}\r
\r
[part=side] {\r
  display: flex;\r
  flex-direction: column;\r
  grid-column: 1;\r
  grid-row: 2;\r
  min-width: 12rem;\r
  max-width: 20rem;\r
}\r
\r
[part=main] {\r
  display: flex;\r
  flex-direction: column;\r
  grid-column: 3;\r
  grid-row: 2;\r
}\r
\r
[part=resize] {\r
  display: flex;\r
  grid-column: 2;\r
  grid-row: 2;\r
  border: 0;\r
  padding: 0;\r
  cursor: ew-resize;\r
  border-left: 1px solid #453C4F;\r
  border-right: 1px solid #453C4F;\r
  background-color: transparent;\r
}\r
\r
[part=resize].dragging {\r
  background-color: var(--pg-focus-color, rgb(79, 143, 249, 0.5))\r
}\r
\r
[part=home] {\r
  display: flex;\r
  flex-direction: column;\r
  grid-column: 1 / 4;\r
  grid-row: 2;\r
  background-color: #fff;\r
  position: relative;\r
}\r
\r
[part=home]::before {\r
  content: ' ';\r
  position: absolute;\r
  top: -2px;\r
  width: 2.5rem;\r
  height: 2px;\r
  background-color: #fff;\r
}\r
\r
[part=home].selected {\r
  background-color: #fff;\r
}\r
\r
.hide {\r
  display: none;\r
}`;var Wd,qd,Qd,Zd,Pd,Jd,Xd,Xe,pa,eh,th;Xd=[k({selector:"pg-app",style:Gd,template:Ud})];var on=class extends(Jd=HTMLElement,Pd=[m()],Zd=[m()],Qd=[m()],qd=[m()],Wd=[la("app")],Jd){constructor(){super(...arguments);R(this,pa);p(this,"$logo",a(Xe,8,this)),a(Xe,11,this);p(this,"$home",a(Xe,12,this)),a(Xe,15,this);p(this,"$side",a(Xe,16,this)),a(Xe,19,this);p(this,"$resize",a(Xe,20,this)),a(Xe,23,this);p(this,"store",a(Xe,24,this,new Map([["width",192]]))),a(Xe,27,this)}connectedCallback(){this.$logo.addEventListener("click",F(this,pa,eh).bind(this)),this.$resize.addEventListener("pointerdown",F(this,pa,th).bind(this)),this.$side.style.width=`${this.store.get("width")}px`}};Xe=A(Jd),pa=new WeakSet,eh=function(){this.$logo.classList.toggle("selected"),this.$home.classList.toggle("hide")},th=function(t){let{clientX:n}=t;this.$resize.classList.add("dragging");let i=this.$side.getBoundingClientRect().width,o=n,s=u=>{let d=o-u.clientX,h=i-d;this.$side.style.width=`${h}px`,this.store.set("width",Math.floor(h))},l=()=>{this.$resize.classList.remove("dragging"),document.removeEventListener("pointermove",s),document.removeEventListener("pointerup",l)};document.addEventListener("pointermove",s),document.addEventListener("pointerup",l)},c(Xe,5,"$logo",Pd,on),c(Xe,5,"$home",Zd,on),c(Xe,5,"$side",Qd,on),c(Xe,5,"$resize",qd,on),c(Xe,5,"store",Wd,on),on=c(Xe,0,"PgApp",Xd,on),a(Xe,1,on);var rh=`<svg part="svg" viewBox="0 0 24 24">
  <path part="path" fill="currentColor" d="M13,14H11V10H13M13,18H11V16H13M1,21H23L12,2L1,21Z"/>
</svg>`;var nh=`:host {\r
  display: inline-flex;\r
  color: var(--pg-icon-color, #453C4F);\r
}\r
\r
[part="svg"] {\r
  width: var(--pg-icon-width, 1.5rem);\r
  height: var(--pg-icon-height, 1.5rem);\r
}`;var R8="M0 0h24v24H0V0zm2 2v20h20V2H2z",ih,oh,ah,sh,lh,Sr;lh=[k({selector:"pg-icon",style:nh,template:rh})];var _n=class extends(sh=HTMLElement,ah=[L()],oh=[m()],ih=[m()],sh){constructor(){super(...arguments);p(this,"path",a(Sr,8,this,R8)),a(Sr,11,this);p(this,"$svg",a(Sr,12,this)),a(Sr,15,this);p(this,"$path",a(Sr,16,this)),a(Sr,19,this)}render(t){if(t.path){let n=getComputedStyle(this).getPropertyValue("--pg-icon-viewbox");if(this.$svg.setAttribute("viewBox",n||"0 0 24 24"),!this.path)throw new Error("invalid path set on pg-icon");this.$path.setAttribute("d",this.path)}}};Sr=A(sh),c(Sr,5,"path",ah,_n),c(Sr,5,"$svg",oh,_n),c(Sr,5,"$path",ih,_n),_n=c(Sr,0,"PgIcon",lh,_n),a(Sr,1,_n);var uh=`<div class="example">
  <pg-app>
    <pg-icon slot="icon" path="M13 3H16V4H21V14H18L20 23H18L16.7998 17H13V21H11V17H7.2002L6 23H4L6 14H3V4H8V3H11V1H13V3ZM7.59961 16H11V14H8L7.59961 16ZM13 16H16.4004L16 14H13V16ZM5 12H19V6H5V12Z"></pg-icon>
    <div slot="top">Top Bar</div>
    <div slot="side">
      Sidebar
    </div>
    <div slot="main">
      Content Area
    </div>
    <div slot="home">
      Home is the initial page containing helpful info.
    </div>
  </pg-app>
</div>`;var ch=`:host {\r
\r
}\r
\r
.example {\r
  border: 0.25rem solid #111;\r
  height: 10rem;\r
}`;var ph,ic,B8;ph=[k({selector:"x-pg-app-basic",template:uh,style:ch})];var da=class extends(B8=HTMLElement){};ic=A(B8),da=c(ic,0,"XPgAppBasic",ph,da),a(ic,1,da);var dh=`<div part="wrap">
  <img part="img" src="data:image/png;base64,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"/>
</div>
<a part="sponsored" href="">
  <svg viewBox="0 0 24 24">
    <path fill="currentColor" d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" />
  </svg>
</a>`;var hh=`:host {\r
  display: flex;\r
  position: relative;\r
  width: var(--pg-avatar-width, 3rem);\r
  height: var(--pg-avatar-height, 3rem);\r
}\r
\r
[part="wrap"] {\r
  border: 1px solid var(--pg-icon-border-color, #453C4F);\r
  border-radius: 50%;\r
  overflow: hidden;\r
}\r
\r
[part="img"] {\r
  width: calc(var(--pg-avatar-width, 3rem) - 2px);\r
  height: calc(var(--pg-avatar-height, 3rem) - 2px);\r
}\r
\r
[part="sponsored"] {\r
  display: flex;\r
  position: absolute;\r
  bottom: -0.25rem;\r
  right: -0.5rem;\r
  border: 1px solid var(--pg-icon-border-color, #453C4F);\r
  background-color: #fff;\r
  border-radius: 50%;\r
  color: #ea4aaa;\r
  width: 1.5rem;\r
  height: 1.5rem;\r
  align-content: center;\r
  align-items: center;\r
  justify-items: center;\r
  justify-content: center;\r
}\r
[part="sponsored"]:hover {\r
  box-shadow: 0 0 0 0.125rem #fff;\r
  color: #fff;\r
  background-color: #ea4aaa;\r
  border-color: #ea4aaa;\r
}\r
[part="sponsored"] svg {\r
  width: 1rem;\r
  height: 1rem;\r
  margin-top: 1px; /* meh */\r
}`;var vt=class{id=null;github=null;name=null;base64=null;iconCount=null;description=null;website=null;sponsored=!1;sponsorship="";core=!1;from(r){return this.id=r.id,this.github=r.github,this.name=r.name,typeof r.base64=="string"&&(r.base64.match(/^data/)?this.base64=r.base64:this.base64=`data:image/png;base64,${r.base64}`),this.iconCount=r.iconCount,this.description=r.description,this.website=r.website,this.sponsored=r.sponsored,this.sponsorship=`https://github.com/users/${r.github}/sponsorship`,this.core=r.core,this}};var oc="top-start",ac="top-end",sc="right",lc="right-start",uc="right-end",So="bottom",Ms="bottom-start",Ts="bottom-end",cc="left",pc="left-start",dc="left-end";function Ri(e,r,t){function n(){e.dispatchEvent(new CustomEvent("tooltip",{detail:{visible:!0,rect:e.getBoundingClientRect(),text:r(),position:t??So},bubbles:!0,composed:!0}))}function i(){e.dispatchEvent(new CustomEvent("tooltip",{detail:{visible:!1},bubbles:!0,composed:!0}))}e.addEventListener("mouseenter",n),e.addEventListener("mouseleave",i)}var N8="data:image/png;base64,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",fh,mh,gh,bh,vh,Mr;vh=[k({selector:"pg-avatar",style:hh,template:dh})];var Bn=class extends(bh=HTMLElement,gh=[L()],mh=[m()],fh=[m()],bh){constructor(){super(...arguments);p(this,"user",a(Mr,8,this,new vt)),a(Mr,11,this);p(this,"$img",a(Mr,12,this)),a(Mr,15,this);p(this,"$sponsored",a(Mr,16,this)),a(Mr,19,this)}connectedCallback(){Ri(this.$sponsored,()=>`Sponsor ${this.user.name} on GitHub`)}render(t){t.user&&(this.$img.src=this.user.base64||N8,this.$sponsored.style.display=this.user.sponsored?"flex":"none",this.user.sponsored&&(this.$sponsored.href=`https://github.com/sponsors/${this.user.github}`))}};Mr=A(bh),c(Mr,5,"user",gh,Bn),c(Mr,5,"$img",mh,Bn),c(Mr,5,"$sponsored",fh,Bn),Bn=c(Mr,0,"PgAvatar",vh,Bn),a(Mr,1,Bn);var hc="data:image/png;base64,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";var xh=`<div part="tooltip">
  <span part="tooltipText"></span>
  <div part="tooltipArrow"></div>
</div>`;var yh=`:host {\r
  pointer-events: none;\r
}\r
\r
[part~=tooltip] {\r
  position: relative;\r
}\r
\r
[part~=tooltipText] {\r
  position: absolute;\r
  background: #737E9E;\r
  border-radius: 0.25rem;\r
  color: #FFF;\r
  padding: 0.15rem 0.5rem 0.3rem 0.5rem;\r
  white-space: nowrap;\r
  left: 0;\r
  top: 0;\r
}\r
\r
[part~=tooltipArrow] {\r
  left: 16px;\r
  top: -7px;\r
}\r
\r
[part~=tooltipArrow],\r
[part~=tooltipArrow]::before {\r
  position: absolute;\r
  width: 10px;\r
  height: 10px;\r
}\r
\r
[part~=tooltipArrow]::before {\r
  content: '';\r
  transform: rotate(45deg);\r
  background: #737E9E;\r
}`;var Eh={[oc]:(e,r,t)=>({arrowTop:r-5,arrowLeft:t.width>e?Math.floor(e/2)-5:Math.floor(t.width/2)-5,left:t.left,top:t.top-r-10}),top:(e,r,t)=>({arrowTop:r-5,arrowLeft:Math.floor(e/2)-5,left:t.left-Math.floor((e-t.width)/2),top:t.top-r-10}),[ac]:(e,r,t)=>({arrowTop:r-5,arrowLeft:t.width>e?e-Math.floor(e/2)-5:e-Math.floor(t.width/2)-5,left:t.left-e+t.width,top:t.top-r-10}),[lc]:(e,r,t)=>({arrowTop:Math.floor(r/2)-5,arrowLeft:-5,left:t.left+t.width+10,top:t.top}),[sc]:(e,r,t)=>({arrowTop:Math.floor(r/2)-5,arrowLeft:-5,left:t.left+t.width+10,top:t.top+Math.floor(t.height/2)-Math.floor(r/2)}),[uc]:(e,r,t)=>({arrowTop:Math.floor(r/2)-5,arrowLeft:-5,left:t.left+t.width+10,top:t.top+t.height-r}),[Ms]:(e,r,t)=>({arrowTop:-5,arrowLeft:t.width>e?Math.floor(e/2)-5:Math.floor(t.width/2)-5,left:t.left,top:t.top+t.height+r-20}),[So]:(e,r,t)=>({arrowTop:-5,arrowLeft:Math.floor(e/2)-5,left:t.left-Math.floor((e-t.width)/2),top:t.top+t.height+r-20}),[Ts]:(e,r,t)=>({arrowTop:-5,arrowLeft:t.width>e?e-Math.floor(e/2)-5:e-Math.floor(t.width/2)-5,left:t.left-e+t.width,top:t.top+t.height+r-20}),[pc]:(e,r,t)=>({arrowTop:Math.floor(r/2)-5,arrowLeft:e-5,left:t.left-e-10,top:t.top}),[cc]:(e,r,t)=>({arrowTop:Math.floor(r/2)-5,arrowLeft:e-5,left:t.left-e-10,top:t.top+Math.floor(t.height/2)-Math.floor(r/2)}),[dc]:(e,r,t)=>({arrowTop:Math.floor(r/2)-5,arrowLeft:e-5,left:t.left-e-10,top:t.top+t.height-r})},wh,Ch,Ah,kh,Lh,Fh,Sh,Mh,Th,Ee;Th=[k({selector:"pg-tooltip",style:yh,template:xh})];var er=class extends(Mh=HTMLElement,Sh=[L()],Fh=[L()],Lh=[L()],kh=[L()],Ah=[m()],Ch=[m()],wh=[m()],Mh){constructor(){super(...arguments);p(this,"visible",a(Ee,8,this,!1)),a(Ee,11,this);p(this,"rect",a(Ee,12,this,null)),a(Ee,15,this);p(this,"text",a(Ee,16,this,"")),a(Ee,19,this);p(this,"position",a(Ee,20,this,So)),a(Ee,23,this);p(this,"$tooltip",a(Ee,24,this)),a(Ee,27,this);p(this,"$tooltipText",a(Ee,28,this)),a(Ee,31,this);p(this,"$tooltipArrow",a(Ee,32,this)),a(Ee,35,this)}render(t){this.$tooltipText.textContent=this.text,this.style.position="absolute",t.visible&&(this.style.display=this.visible?"block":"none");let{width:n,height:i}=this.$tooltipText.getBoundingClientRect(),o=this.position;if(o in Eh||(o=So),this.rect){let{arrowLeft:s,arrowTop:l,left:u,top:d}=Eh[o](n,i,this.rect);this.style.left=`${u+window.scrollX}px`,this.style.top=`${d+window.scrollY}px`,this.$tooltipArrow.style.left=`${s}px`,this.$tooltipArrow.style.top=`${l}px`}}};Ee=A(Mh),c(Ee,5,"visible",Sh,er),c(Ee,5,"rect",Fh,er),c(Ee,5,"text",Lh,er),c(Ee,5,"position",kh,er),c(Ee,5,"$tooltip",Ah,er),c(Ee,5,"$tooltipText",Ch,er),c(Ee,5,"$tooltipArrow",wh,er),er=c(Ee,0,"PgTooltip",Th,er),a(Ee,1,er);var $h=`<pg-tooltip part="tooltip"></pg-tooltip>
<div class="example example-flex">
  <pg-avatar></pg-avatar>
  <pg-avatar part="avatar1"></pg-avatar>
  <pg-avatar part="avatar2"></pg-avatar>
</div>`;var Hh,Ih,Rh,_h,Bh,Tr;Bh=[k({selector:"x-pg-avatar-basic",template:$h})];var On=class extends(_h=HTMLElement,Rh=[m()],Ih=[m()],Hh=[m()],_h){constructor(){super(...arguments);p(this,"$tooltip",a(Tr,8,this)),a(Tr,11,this);p(this,"$avatar1",a(Tr,12,this)),a(Tr,15,this);p(this,"$avatar2",a(Tr,16,this)),a(Tr,19,this)}connectedCallback(){this.$avatar1.user=new vt().from({base64:hc}),this.$avatar2.user=new vt().from({base64:hc,sponsored:!0,github:"Templarian",name:"Austin Andrews"}),this.addEventListener("tooltip",this.handleTooltip.bind(this))}handleTooltip(t){let{visible:n,rect:i,text:o,position:s}=t.detail;this.$tooltip.visible=n,n&&(this.$tooltip.rect=i,this.$tooltip.text=o,this.$tooltip.position=s),t.stopPropagation()}};Tr=A(_h),c(Tr,5,"$tooltip",Rh,On),c(Tr,5,"$avatar1",Ih,On),c(Tr,5,"$avatar2",Hh,On),On=c(Tr,0,"XPgAvatarBasic",Bh,On),a(Tr,1,On);var Oh=`<button part="button">
  <slot></slot>
</button>`;var Nh=`:host {\r
  display: contents;\r
}\r
\r
[part="button"] {\r
  display: flex;\r
  align-items: center;\r
  align-content: center;\r
  font-family: var(--pg-font-family, system-ui);\r
  font-size: var(--pg-button-font-size, 1rem);\r
  line-height: var(--pg-button-line-height, 1.5rem);\r
  border: var(--pg-button-border-width, 1px) solid var(--pg-button-border-color, #453C4F);\r
  background-color: var(--pg-button-background-color, #FFFFFF);\r
  color: var(--pg-button-color, #453C4F);\r
  padding: var(--pg-button-padding, 0.25rem 0.5rem);\r
  border-radius: var(--pg-button-border-radius, 0.25rem);\r
  outline: none;\r
  --pg-icon-color: var(--pg-button-color, #453C4F);\r
}\r
\r
[part="button"]:hover {\r
  --pg-button-border-color: var(--pg-button-hover-border-color, #453C4F);\r
  background-color: var(--pg-button-hover-background-color, #453C4F);\r
  color: var(--pg-button-hover-color, #FFFFFF);\r
  --pg-icon-color: var(--pg-button-hover-color, #FFFFFF);\r
}\r
\r
[part="button"]:active {\r
  box-shadow: 0 1px 0.25rem rgba(0, 0, 0, 0.5) inset;\r
  position: relative;\r
}\r
\r
[part="button"]:focus-visible {\r
  position: relative;\r
}\r
\r
[part="button"]:active::before {\r
  content: '';\r
  position: absolute;\r
  top: -1px;\r
  right: -1px;\r
  bottom: -1px;\r
  left: -1px;\r
  border-radius: var(--pg-button-border-radius, 0.25rem);\r
  box-shadow: 0 0 0 3px var(--pg-focus-color, rgb(79, 143, 249, 0.6));\r
}\r
[part="button"]:focus-visible::before {\r
  pointer-events: none;\r
  content: '';\r
  position: absolute;\r
  top: -1px;\r
  right: -1px;\r
  bottom: -1px;\r
  left: -1px;\r
  border-radius: var(--pg-button-border-radius, 0.25rem);\r
  box-shadow: 0 0 0 3px var(--pg-focus-color, rgb(79, 143, 249, 0.5));\r
}\r
\r
[part="button"].start {\r
  border-top-right-radius: 0;\r
  border-bottom-right-radius: 0;\r
  margin-right: -1px;\r
}\r
\r
[part="button"].center {\r
  border-radius: 0;\r
  margin-right: -1px;\r
}\r
\r
[part="button"].end {\r
  border-top-left-radius: 0;\r
  border-bottom-left-radius: 0;\r
}\r
\r
[part="button"].active {\r
  box-shadow: 0 1px 0.25rem rgba(0, 0, 0, 0.5) inset;\r
  background-color: rgba(69, 60, 79, 0.1);\r
  color: var(--pg-button-color, #453C4F);\r
}\r
[part="button"].active:hover {\r
  box-shadow: 0 1px 0.25rem rgba(0, 0, 0, 0.5) inset;\r
  background-color: var(--pg-button-color, #453C4F);\r
  color: var(--pg-button-hover-color, #fff);\r
}\r
\r
[part="button"].block {\r
  flex: 1;\r
}\r
\r
::slotted {\r
  align-self: center;\r
}`;var Vh,zh,jh,Yh,Kh,Uh,Gh,Wh,qh,Qh,de;Qh=[k({selector:"pg-button",style:Nh,template:Oh})];var tr=class extends(qh=HTMLElement,Wh=[L(Ii)],Gh=[L(Ii)],Uh=[L(Ii)],Kh=[L(Ii)],Yh=[L(Ii)],jh=[m()],zh=[m()],Vh=[m()],qh){constructor(){super(...arguments);p(this,"active",a(de,8,this,!1)),a(de,11,this);p(this,"block",a(de,12,this,!1)),a(de,15,this);p(this,"start",a(de,16,this,!1)),a(de,19,this);p(this,"center",a(de,20,this,!1)),a(de,23,this);p(this,"end",a(de,24,this,!1)),a(de,27,this);p(this,"$button",a(de,28,this)),a(de,31,this);p(this,"$number",a(de,32,this)),a(de,35,this);p(this,"$bar",a(de,36,this)),a(de,39,this)}connectedCallback(){this.$button.addEventListener("click",t=>{t.stopPropagation(),this.dispatchEvent(new CustomEvent("click"))})}render(t){t.active&&this.$button.classList.toggle("active",this.active),t.start&&this.$button.classList.toggle("start",this.start),t.end&&this.$button.classList.toggle("end",this.end),t.center&&this.$button.classList.toggle("center",this.center),t.block&&this.$button.classList.toggle("block",this.block)}getBoundingClientRect(){return this.$button.getBoundingClientRect()}};de=A(qh),c(de,5,"active",Wh,tr),c(de,5,"block",Gh,tr),c(de,5,"start",Uh,tr),c(de,5,"center",Kh,tr),c(de,5,"end",Yh,tr),c(de,5,"$button",jh,tr),c(de,5,"$number",zh,tr),c(de,5,"$bar",Vh,tr),tr=c(de,0,"PgButton",Qh,tr),a(de,1,tr);var Zh=`<div class="example">
  <div class="example-flex">
    <pg-button>Example Button</pg-button>
    <pg-button><pg-icon path="M12,19.2C9.5,19.2 7.29,17.92 6,16C6.03,14 10,12.9 12,12.9C14,12.9 17.97,14 18,16C16.71,17.92 14.5,19.2 12,19.2M12,5A3,3 0 0,1 15,8A3,3 0 0,1 12,11A3,3 0 0,1 9,8A3,3 0 0,1 12,5M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z"></pg-icon></pg-button>
    <pg-button>
      <pg-icon path="M12,19.2C9.5,19.2 7.29,17.92 6,16C6.03,14 10,12.9 12,12.9C14,12.9 17.97,14 18,16C16.71,17.92 14.5,19.2 12,19.2M12,5A3,3 0 0,1 15,8A3,3 0 0,1 12,11A3,3 0 0,1 9,8A3,3 0 0,1 12,5M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z"></pg-icon>
      With Icon
    </pg-button>
  </div>
  <pg-button block>Block Button</pg-button>
</div>`;var Ph,fc,j8;Ph=[k({selector:"x-pg-button-basic",template:Zh})];var ha=class extends(j8=HTMLElement){};fc=A(j8),ha=c(fc,0,"XPgButtonBasic",Ph,ha),a(fc,1,ha);var Jh=`<h4>Active</h4>
<pg-button active part="active">Button</pg-button>
<h4>Start</h4>
<pg-button start>Button</pg-button>
<h4>Center</h4>
<pg-button center>Button</pg-button>
<h4>End</h4>
<pg-button end>Button</pg-button>`;var Xh,ef,tf,fa;tf=[k({selector:"x-pg-button-states",template:Jh})];var Mo=class extends(ef=HTMLElement,Xh=[m()],ef){constructor(){super(...arguments);p(this,"$active",a(fa,8,this)),a(fa,11,this)}connectedCallback(){this.$active.addEventListener("click",this.handleActive.bind(this))}handleActive(){this.$active.active=!this.$active.active}};fa=A(ef),c(fa,5,"$active",Xh,Mo),Mo=c(fa,0,"XPgButtonStates",tf,Mo),a(fa,1,Mo);var rf='<slot part="slot"></slot>';var nf=`:host {\r
  display: inline-flex;\r
  flex-direction: row;\r
}`;var K8="PG-BUTTON",U8="PG-BUTTON-LINK";function mc(e){return e.tagName===K8||e.tagName===U8}var of,af,sf,ma;sf=[k({selector:"pg-button-group",style:nf,template:rf})];var To=class extends(af=HTMLElement,of=[m()],af){constructor(){super(...arguments);p(this,"$slot",a(ma,8,this)),a(ma,11,this)}connectedCallback(){this.$slot.addEventListener("slotchange",this.handleSlotChange.bind(this))}handleSlotChange(t){let n=this.$slot.assignedElements();if(n.length!==0){let i=n[0];mc(i)&&(i.start=!0);let o=n[n.length-1];mc(o)&&(o.end=!0);for(let s=0;s<n.length;s++){let l=n[s];mc(l)&&(l.center=!l.start&&!l.end)}}}render(t){}};ma=A(af),c(ma,5,"$slot",of,To),To=c(ma,0,"PgButtonGroup",sf,To),a(ma,1,To);var lf=`<div class="example example-flex">
  <pg-button-group>
    <pg-button><pg-icon path="M12,19.2C9.5,19.2 7.29,17.92 6,16C6.03,14 10,12.9 12,12.9C14,12.9 17.97,14 18,16C16.71,17.92 14.5,19.2 12,19.2M12,5A3,3 0 0,1 15,8A3,3 0 0,1 12,11A3,3 0 0,1 9,8A3,3 0 0,1 12,5M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z"></pg-icon></pg-button>
    <pg-button>
      <pg-icon path="M12,19.2C9.5,19.2 7.29,17.92 6,16C6.03,14 10,12.9 12,12.9C14,12.9 17.97,14 18,16C16.71,17.92 14.5,19.2 12,19.2M12,5A3,3 0 0,1 15,8A3,3 0 0,1 12,11A3,3 0 0,1 9,8A3,3 0 0,1 12,5M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z"></pg-icon>
      With Icon
    </pg-button>
    <pg-button active>
      active
    </pg-button>
  </pg-button-group>
</div>`;var uf,gc,G8;uf=[k({selector:"x-pg-button-group-basic",template:lf})];var ga=class extends(G8=HTMLElement){};gc=A(G8),ga=c(gc,0,"XPgButtonGroupBasic",uf,ga),a(gc,1,ga);var cf=`<a part="button">
  <slot></slot>
</a>`;var pf=`:host {\r
  display: flex;\r
}\r
\r
[part="button"] {\r
  display: inline-flex;\r
  align-items: center;\r
  align-content: center;\r
  font-family: var(--pg-font-family, system-ui);\r
  font-size: 1rem;\r
  line-height: 1.5rem;\r
  text-decoration: none;\r
}\r
\r
[part="button"] {\r
  border: 1px solid var(--pg-button-border-color, #453C4F);\r
  background-color: var(--pg-button-background-color, #fff);\r
  color: var(--pg-button-color, #453C4F);\r
  padding: var(--pg-button-padding, 0.25rem 0.5rem);\r
  border-radius: 0.25rem;\r
  outline: none;\r
  --pg-icon-color: var(--pg-button-color, #453C4F);\r
}\r
\r
[part="button"]:hover {\r
  border: 1px solid var(--pg-button-hover-border-color, #453C4F);\r
  background-color: var(--pg-button-hover-background-color, #453C4F);\r
  color: var(--pg-hover-button-color, #fff);\r
  --pg-icon-color: var(--pg-button-hover-color, #fff);\r
}\r
\r
[part="button"]:active {\r
  box-shadow: 0 1px 0.25rem rgba(0, 0, 0, 0.5) inset;\r
  position: relative;\r
}\r
\r
[part="button"]:focus {\r
  position: relative;\r
}\r
\r
[part="button"]:active::before {\r
  content: '';\r
  position: absolute;\r
  top: -1px;\r
  right: -1px;\r
  bottom: -1px;\r
  left: -1px;\r
  border-radius: 0.25rem;\r
  box-shadow: 0 0 0 3px var(--pg-focus-color, rgb(79, 143, 249, 0.6));\r
}\r
[part="button"]:focus::before {\r
  pointer-events: none;\r
  content: '';\r
  position: absolute;\r
  top: -1px;\r
  right: -1px;\r
  bottom: -1px;\r
  left: -1px;\r
  border-radius: 0.25rem;\r
  box-shadow: 0 0 0 3px var(--pg-focus-color, rgb(79, 143, 249, 0.5));\r
}\r
\r
[part="button"].start {\r
  border-top-right-radius: 0;\r
  border-bottom-right-radius: 0;\r
  margin-right: -1px;\r
}\r
\r
[part="button"].center {\r
  border-radius: 0;\r
  margin-right: -1px;\r
}\r
\r
[part="button"].end {\r
  border-top-left-radius: 0;\r
  border-bottom-left-radius: 0;\r
}\r
\r
[part="button"].active,\r
[part="button"].active:hover {\r
  box-shadow: 0 1px 0.25rem rgba(0, 0, 0, 0.5) inset;\r
  background-color: rgba(69, 60, 79, 0.1);\r
  color: var(--pg-button-color, #453C4F);\r
}\r
\r
[part="button"].block {\r
  flex: 1;\r
}\r
\r
::slotted(*) {\r
  align-self: center;\r
}\r
`;var df,hf,ff,mf,gf,bf,vf,xf,yf,we;yf=[k({selector:"pg-button-link",style:pf,template:cf})];var ur=class extends(xf=HTMLElement,vf=[L()],bf=[L()],gf=[L()],mf=[L()],ff=[L()],hf=[L()],df=[m()],xf){constructor(){super(...arguments);p(this,"href",a(we,8,this,"")),a(we,11,this);p(this,"active",a(we,12,this,!1)),a(we,15,this);p(this,"block",a(we,16,this,!1)),a(we,19,this);p(this,"start",a(we,20,this,!1)),a(we,23,this);p(this,"center",a(we,24,this,!1)),a(we,27,this);p(this,"end",a(we,28,this,!1)),a(we,31,this);p(this,"$button",a(we,32,this)),a(we,35,this)}connectedCallback(){this.$button.addEventListener("click",t=>this.dispatchEvent(new CustomEvent("click")))}render(t){t.href&&(this.$button.href=this.href);let n=[!0,"true",""];t.active&&this.$button.classList.toggle("active",n.includes(this.active)),t.start&&this.$button.classList.toggle("start",n.includes(this.start)),t.end&&this.$button.classList.toggle("end",n.includes(this.end)),t.center&&this.$button.classList.toggle("center",n.includes(this.center)),t.block&&this.$button.classList.toggle("block",n.includes(this.block))}};we=A(xf),c(we,5,"href",vf,ur),c(we,5,"active",bf,ur),c(we,5,"block",gf,ur),c(we,5,"start",mf,ur),c(we,5,"center",ff,ur),c(we,5,"end",hf,ur),c(we,5,"$button",df,ur),ur=c(we,0,"PgButtonLink",yf,ur),a(we,1,ur);var Ef=`<div class="example">
  <div class="example-flex">
    <pg-button-link href="#test">Example Button Link</pg-button-link>
    <pg-button-link href="#test">
      <pg-icon
        path="M12,19.2C9.5,19.2 7.29,17.92 6,16C6.03,14 10,12.9 12,12.9C14,12.9 17.97,14 18,16C16.71,17.92 14.5,19.2 12,19.2M12,5A3,3 0 0,1 15,8A3,3 0 0,1 12,11A3,3 0 0,1 9,8A3,3 0 0,1 12,5M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z">
      </pg-icon>
    </pg-button-link>
    <pg-button-link href="#test">
      <pg-icon
        path="M12,19.2C9.5,19.2 7.29,17.92 6,16C6.03,14 10,12.9 12,12.9C14,12.9 17.97,14 18,16C16.71,17.92 14.5,19.2 12,19.2M12,5A3,3 0 0,1 15,8A3,3 0 0,1 12,11A3,3 0 0,1 9,8A3,3 0 0,1 12,5M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z">
      </pg-icon>
      With Icon
    </pg-button-link>
  </div>
  <pg-button-link href="#test" block>Block Button Link</pg-button-link>
</div>`;var wf,bc,q8;wf=[k({selector:"x-pg-button-link-basic",template:Ef})];var ba=class extends(q8=HTMLElement){};bc=A(q8),ba=c(bc,0,"XPgButtonLinkBasic",wf,ba),a(bc,1,ba);var Cf=new Set,vc=new Map,Af,xc,Q8;Af=[k()];var je=class extends(Q8=HTMLElement){static open(r={}){var t=document.createElement(this.name);return Object.assign(t,r),document.body.appendChild(t),Cf.add(t),new Promise(n=>{vc.set(t,n)})}close(r){this.remove(),Cf.delete(this);let t=vc.get(this);t&&t(r),vc.delete(this)}};xc=A(Q8),je=c(xc,0,"PgOverlay",Af,je),a(xc,1,je);var kf=`<div part="overlay">
  <pg-menu part="menu"></pg-menu>
</div>`;var Lf=`:host {\r
  display: contents;\r
}\r
\r
[part="overlay"] {\r
  margin: 0;\r
  padding: 0;\r
  border: 0;\r
  background: transparent;\r
  overflow: visible;\r
  --pg-menu-box-shadow: 0 0.125rem 0.5rem rgba(0, 0, 0, 0.25);\r
  top: calc(anchor(top) - 0.25rem);\r
  left: calc(anchor(right) - 0.25rem);\r
  translate: var(--pg-overlay-menu-_x, 0) var(--pg-overlay-menu-_y, 0);\r
  position-try-fallbacks: --custom-right, --custom-left;\r
}\r
\r
@position-try --custom-right {\r
  top: calc(anchor(top) - 0.25rem);\r
  left: calc(anchor(right) - 0.25rem);\r
}\r
\r
@position-try --custom-left {\r
  top: calc(anchor(top) - 0.25rem);\r
  left: calc(anchor(left) - anchor-size(width) + 0.25rem);\r
}\r
`;var Ff=[],yc=[],Sf,Mf,Tf,Df,$f,Hf,If,Rf,_f,Bf,he,Ds,va,xn,Of,Nf,Vf,zf;Bf=[k({selector:"pg-overlay-sub-menu",template:kf,style:Lf})];var We=class extends(_f=je,Rf=[m()],If=[m()],Hf=[L()],$f=[L()],Df=[L()],Tf=[L()],Mf=[L()],Sf=[L()],_f){constructor(){super(...arguments);R(this,xn);p(this,"$overlay",a(he,8,this)),a(he,11,this);p(this,"$menu",a(he,12,this)),a(he,15,this);p(this,"source",a(he,16,this,null)),a(he,19,this);p(this,"x",a(he,20,this,0)),a(he,23,this);p(this,"y",a(he,24,this,0)),a(he,27,this);p(this,"default",a(he,28,this,null)),a(he,31,this);p(this,"items",a(he,32,this,[])),a(he,35,this);p(this,"value",a(he,36,this,null)),a(he,39,this);R(this,Ds,!1);R(this,va)}render(t){t.items&&(this.$menu.items=this.items)}connectedCallback(){Ff.pop()?.close(),Ff.push(this),yc.push(this),this.$menu.addEventListener("select",F(this,xn,zf).bind(this)),this.$menu.addEventListener("close",F(this,xn,Vf).bind(this)),this.$overlay.popover="auto",this.source!==null&&this.$overlay.showPopover({source:this.source}),this.$overlay.addEventListener("toggle",F(this,xn,Nf).bind(this));let t=this.source?.getBoundingClientRect(),n=0,i=0;this.$overlay.style.setProperty("--pg-overlay-menu-_x",`${n}px`),this.$overlay.style.setProperty("--pg-overlay-menu-_y",`${i}px`),this.$menu.focus(0),B(this,va,F(this,xn,Of).bind(this)),document.addEventListener("pointerdown",x(this,va))}disconnectedCallback(){yc.pop(),document.removeEventListener("pointerdown",x(this,va))}};he=A(_f),Ds=new WeakMap,va=new WeakMap,xn=new WeakSet,Of=function(t){B(this,Ds,t.composedPath().includes(this.source))},Nf=function(t){t.newState==="closed"&&yc.length===0&&x(this,Ds)&&(console.log(t),this.source?.focus())},Vf=function(t){let{depth:n}=t.detail;console.log("close",n),n===1?this.close(null):this.close()},zf=function(t){t.detail.item.index=t.detail.index,this.close(t.detail.item),this.source?.focus()},c(he,5,"$overlay",Rf,We),c(he,5,"$menu",If,We),c(he,5,"source",Hf,We),c(he,5,"x",$f,We),c(he,5,"y",Df,We),c(he,5,"default",Tf,We),c(he,5,"items",Mf,We),c(he,5,"value",Sf,We),We=c(he,0,"PgOverlaySubMenu",Bf,We),a(he,1,We);var jf='<button part="label"></button>';var Yf=`:host {\r
  display: contents;\r
}\r
\r
[part=label] {\r
  outline: none;\r
  display: flex;\r
  align-items: center;\r
  font-family: var(--pg-font-family, system-ui);\r
  text-align: var(--pg-menu-item-text-align, left);\r
  background: var(--pg-menu-item-background, transparent);\r
  padding: var(--pg-menu-item-padding, 0.25rem 0.5rem 0.25rem 0.5rem);\r
  border-color: transparent;\r
  border-width: 0;\r
  border-style: solid;\r
  border-top-left-radius: var(--pg-menu-item-border-radius-top, 0.25rem);\r
  border-top-right-radius: var(--pg-menu-item-border-radius-top, 0.25rem);\r
  border-bottom-left-radius: var(--pg-menu-item-border-radius-bottom, 0.25rem);\r
  border-bottom-right-radius: var(--pg-menu-item-border-radius-bottom, 0.25rem);\r
  color: var(--pg-menu-item-color, #453C4F);\r
}\r
\r
[part=label]:not(:disabled):active,\r
[part=label]:not(:disabled):hover {\r
  background: var(--pg-menu-item-selected-background, #453C4F);\r
  color: #FFFFFF;\r
}\r
\r
[part=label]:not(:disabled):active {\r
  background: var(--pg-menu-item-active-background, #5f516e);\r
}\r
\r
[part=label]:disabled {\r
  color: var(--pg-menu-item-disabled-color, rgb(69, 60, 79, 0.75));\r
}\r
\r
@container style(--pg-menu-_has-check: true) {\r
  [part=label] {\r
    padding-inline-start: 1.5rem;\r
  }\r
\r
  [part=label].checked::before {\r
    position: absolute;\r
    translate: -1.5rem 0;\r
    content: var(--pg-menu-item-check, url("data:image/svg+xml; utf8, <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M 17.5,10.2501L 10.5,17.25L 6.5,13.25L 7.9,11.8L 10.5,14.4L 16.0857,8.8L 17.5,10.25Z' fill='rgb(69, 60, 79)' /></svg>"));\r
    width: 1.5rem;\r
    height: 1.5rem;\r
  }\r
\r
  [part=label].checked:active::before,\r
  [part=label].checked:hover::before {\r
    content: var(--pg-menu-item-hover-check, url("data:image/svg+xml; utf8, <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M 17.5,10.2501L 10.5,17.25L 6.5,13.25L 7.9,11.8L 10.5,14.4L 16.0857,8.8L 17.5,10.25Z' fill='white' /></svg>"));\r
  }\r
\r
  [part=label].checked:disabled::before {\r
    content: var(--pg-menu-item-disabled-check, url("data:image/svg+xml; utf8, <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M 17.5,10.2501L 10.5,17.25L 6.5,13.25L 7.9,11.8L 10.5,14.4L 16.0857,8.8L 17.5,10.25Z' fill='rgb(69, 60, 79, 0.5)' /></svg>"));\r
  }\r
}\r
\r
[part=label]:focus-visible {\r
  position: relative;\r
}\r
\r
[part=label]:focus-visible::after {\r
  pointer-events: none;\r
  content: '';\r
  position: absolute;\r
  top: -1px;\r
  right: -1px;\r
  bottom: -1px;\r
  left: -1px;\r
  border-radius: 0.25rem;\r
  box-shadow: 0 0 0 3px var(--pg-focus-color, rgb(79, 143, 249, 0.5));\r
}\r
\r
[part=label]:focus-visible:not(:hover)::after {\r
  background: var(--pg-focus-background-color, rgb(79, 143, 249, 0.1));\r
}\r
\r
[part=label].more {\r
  padding-right: 1.5rem;\r
}\r
\r
[part=label].more::after {\r
  position: absolute;\r
  translate: -0.25rem 0;\r
  right: 0;\r
  content: var(--pg-menu-item-check, url("data:image/svg+xml; utf8, <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z' fill='rgb(69, 60, 79)' /></svg>"));\r
  width: 1.5rem;\r
  height: 1.5rem;\r
}\r
\r
[part=label].more:active::after,\r
[part=label].more:hover::after {\r
  content: var(--pg-menu-item-hover-check, url("data:image/svg+xml; utf8, <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z' fill='white' /></svg>"));\r
}\r
\r
[part=label].more:disabled::after {\r
  content: var(--pg-menu-item-disabled-check, url("data:image/svg+xml; utf8, <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z' fill='rgb(69, 60, 79, 0.5)' /></svg>"));\r
}\r
`;var Kf,Uf,Gf,Wf,qf,Qf,Zf,Pf,He;Pf=[k({selector:"pg-menu-item",style:Yf,template:jf})];var Te=class extends(Zf=HTMLElement,Qf=[L()],qf=[L()],Wf=[L()],Gf=[L()],Uf=[L()],Kf=[m()],Zf){constructor(){super(...arguments);p(this,"index",a(He,8,this)),a(He,11,this);p(this,"label",a(He,12,this,"")),a(He,15,this);p(this,"checked",a(He,16,this,!1)),a(He,19,this);p(this,"disabled",a(He,20,this,!1)),a(He,23,this);p(this,"items",a(He,24,this,[])),a(He,27,this);p(this,"$label",a(He,28,this)),a(He,31,this)}render(t){t.label&&(this.$label.textContent=this.label),t.disabled&&(this.$label.disabled=this.disabled),t.checked&&this.$label.classList.toggle("checked",this.checked),t.checked&&this.checked===!0&&this.dispatchEvent(new CustomEvent("hasCheck",{bubbles:!0})),t.items&&this.$label.classList.toggle("more",this.items.length>0)}connectedCallback(){this.$label.addEventListener("click",async()=>{if(this.items.length>0){let t=await We.open({source:this.$label,x:0,y:0,value:this.items[0],items:this.items});t===null?this.focus():t?this.dispatchEvent(new CustomEvent("select",{detail:{item:t}})):this.dispatchEvent(new CustomEvent("close",{detail:{depth:-1}}))}else this.dispatchEvent(new CustomEvent("select",{detail:{index:this.index}}))}),this.$label.addEventListener("keydown",t=>{switch(t.key){case"ArrowDown":this.dispatchEvent(new CustomEvent("down",{detail:{index:this.index}})),t.preventDefault();break;case"ArrowUp":this.dispatchEvent(new CustomEvent("up",{detail:{index:this.index}})),t.preventDefault();break;case"Escape":this.dispatchEvent(new CustomEvent("close")),t.preventDefault();break}})}focus(){this.$label.focus()}getHeight(){return this.$label.getBoundingClientRect().height}};He=A(Zf),c(He,5,"index",Qf,Te),c(He,5,"label",qf,Te),c(He,5,"checked",Wf,Te),c(He,5,"disabled",Gf,Te),c(He,5,"items",Uf,Te),c(He,5,"$label",Kf,Te),Te=c(He,0,"PgMenuItem",Pf,Te),p(Te,"delegatesFocus",!0),a(He,1,Te);var Jf='<div part="items"></div>';var Xf=`:host {\r
  display: contents;\r
}\r
\r
[part=items] {\r
  display: flex;\r
  flex-direction: column;\r
  padding: var(--pg-menu-padding, 0.25rem);\r
  border-width: var(--pg-menu-border-width, 1px);\r
  border-color: var(--pg-menu-border-color, #453C4F);\r
  border-style: solid;\r
  border-radius: 0.5rem;\r
  background-color: var(--pg-menu-background-color, #FFFFFF);\r
  box-shadow: var(--pg-menu-box-shadow, none);\r
}\r
\r
[part=items].check {\r
  --pg-menu-_has-check: true;\r
}`;var em,tm,rm,nm,Nn,Vn,Do;nm=[k({selector:"pg-menu",style:Xf,template:Jf})];var _i=class extends(rm=HTMLElement,tm=[L()],em=[m()],rm){constructor(){super(...arguments);R(this,Vn);p(this,"items",a(Nn,8,this,[])),a(Nn,11,this);p(this,"$items",a(Nn,12,this)),a(Nn,15,this)}connectedCallback(){Je({container:this.$items,items:this.items,type:t=>t.type??Te,create:(t,n)=>{t.addEventListener("close",i=>{let o=i.detail?i.detail.depth:1;this.dispatchEvent(new CustomEvent("close",{detail:{depth:o}}))}),t.addEventListener("select",i=>{let{index:o}=i.detail;this.dispatchEvent(new CustomEvent("select",{detail:{indexes:[o],item:n}}))}),t.addEventListener("up",i=>{let{index:o}=i.detail;F(this,Vn,Do).call(this,o-1,-1,o)}),t.addEventListener("down",i=>{let{index:o}=i.detail;F(this,Vn,Do).call(this,o+1,1,o)})}}),this.$items.addEventListener("hasCheck",t=>{t.stopPropagation(),this.$items.classList.toggle("check",!0)})}focus(t){t===-1?F(this,Vn,Do).call(this,0,1,this.items.length-1):this.$items.children[t]?.focus()}getItemOffset(t,n){let i=getComputedStyle(this.$items),o=parseInt(i.getPropertyValue("padding-top"),10),s=this.items.length;if(t>s||n>s)throw new Error("startIndex or endIndex not within range of items");for(let l=t;l<n;l++){let u=this.$items.children[l];o+=u.getHeight()}return o}getItemHeight(t){if(t>this.items.length)throw new Error("index outside range of items");return this.$items.children[t].getHeight()}};Nn=A(rm),Vn=new WeakSet,Do=function(t,n,i){if(t===i)return;if(t===-1)return F(this,Vn,Do).call(this,this.items.length-1,n,i);if(t>=this.items.length)return F(this,Vn,Do).call(this,0,n,i);let o=this.$items.children[t];if(o.focusable===!1||this.items[t].disabled)return F(this,Vn,Do).call(this,t+n,n,i);o?.focus()},c(Nn,5,"items",tm,_i),c(Nn,5,"$items",em,_i),_i=c(Nn,0,"PgMenu",nm,_i),a(Nn,1,_i);var im=`<div part="overlay">
  <pg-menu part="menu"></pg-menu>
</div>`;var om=`:host {\r
  display: contents;\r
}\r
\r
[part="overlay"] {\r
  margin: 0;\r
  padding: 0;\r
  border: 0;\r
  background: transparent;\r
  --pg-menu-box-shadow: 0 0.125rem 0.5rem rgba(0, 0, 0, 0.25);\r
  top: calc(anchor(bottom) - 0.25rem);\r
  left: anchor(left);\r
  min-width: calc(anchor-size(width) + calc(2 * var(--pg-menu-padding, 0.25rem)));\r
  translate: var(--pg-overlay-menu-_x, 0) var(--pg-overlay-menu-_y, 0);\r
  overflow: visible;\r
}`;var am,sm,lm,um,cm,pm,dm,hm,Ie,xa,fm,mm;hm=[k({selector:"pg-overlay-menu",template:im,style:om})];var wt=class extends(dm=je,pm=[m()],cm=[m()],um=[L()],lm=[L()],sm=[L()],am=[L()],dm){constructor(){super(...arguments);R(this,xa);p(this,"$overlay",a(Ie,8,this)),a(Ie,11,this);p(this,"$menu",a(Ie,12,this)),a(Ie,15,this);p(this,"source",a(Ie,16,this,null)),a(Ie,19,this);p(this,"default",a(Ie,20,this,null)),a(Ie,23,this);p(this,"items",a(Ie,24,this,[])),a(Ie,27,this);p(this,"value",a(Ie,28,this,null)),a(Ie,31,this)}render(t){}connectedCallback(){this.$menu.items=this.items,this.$menu.addEventListener("select",F(this,xa,mm).bind(this)),this.$overlay.popover="auto",this.source!==null&&this.$overlay.showPopover({source:this.source}),this.$overlay.addEventListener("toggle",F(this,xa,fm).bind(this));let t=this.source?.getBoundingClientRect(),n=0,i=0,o=this.value===null||typeof this.value!="object"?this.value:this.value.value,s=this.value===null?0:this.items.findIndex(l=>l.value===o);this.$menu.focus(s)}disconnectedCallback(){}};Ie=A(dm),xa=new WeakSet,fm=function(t){t.newState==="closed"&&(this.close(),this.source?.focus())},mm=function(t){t.detail.item.index=t.detail.index,this.close(t.detail.item),this.source?.focus()},c(Ie,5,"$overlay",pm,wt),c(Ie,5,"$menu",cm,wt),c(Ie,5,"source",um,wt),c(Ie,5,"default",lm,wt),c(Ie,5,"items",sm,wt),c(Ie,5,"value",am,wt),wt=c(Ie,0,"PgOverlayMenu",hm,wt),a(Ie,1,wt);var gm=`<pg-button part="button">
  <span part="label"></span>
  <pg-icon part="icon" path="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"></pg-icon>
</pg-button>`;var bm=`:host {\r
  display: inline-flex;\r
}\r
\r
span {\r
  align-self: center;\r
  display: flex;\r
}\r
\r
[part=collapse] {\r
  display: none;\r
}`;var vm="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z",t9="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z",xm,ym,Em,wm,Cm,Am,km,Lm,Fm,Ce,Bi,Ll,Sm;Fm=[k({selector:"pg-button-menu",style:bm,template:gm})];var cr=class extends(Lm=HTMLElement,km=[L()],Am=[L()],Cm=[L()],wm=[L()],Em=[m()],ym=[m()],xm=[m()],Lm){constructor(){super(...arguments);R(this,Ll);p(this,"items",a(Ce,8,this,[])),a(Ce,11,this);p(this,"value",a(Ce,12,this,null)),a(Ce,15,this);p(this,"label",a(Ce,16,this,"")),a(Ce,19,this);p(this,"default",a(Ce,20,this,null)),a(Ce,23,this);p(this,"$button",a(Ce,24,this)),a(Ce,27,this);p(this,"$icon",a(Ce,28,this)),a(Ce,31,this);p(this,"$label",a(Ce,32,this)),a(Ce,35,this);R(this,Bi,!1)}connectedCallback(){this.$button.addEventListener("click",F(this,Ll,Sm).bind(this))}render(t){t.label&&(this.$label.textContent=this.label)}};Ce=A(Lm),Bi=new WeakMap,Ll=new WeakSet,Sm=async function(){if(B(this,Bi,!x(this,Bi)),this.$icon.path=x(this,Bi)?t9:vm,!x(this,Bi))return;let t=await wt.open({source:this,default:this.default??this.items[0],value:this.items.find(n=>n.value===this.value)??null,items:this.items});this.$icon.path=vm,t!==void 0&&this.dispatchEvent(new CustomEvent("change",{detail:{value:t.value}})),B(this,Bi,!1)},c(Ce,5,"items",km,cr),c(Ce,5,"value",Am,cr),c(Ce,5,"label",Cm,cr),c(Ce,5,"default",wm,cr),c(Ce,5,"$button",Em,cr),c(Ce,5,"$icon",ym,cr),c(Ce,5,"$label",xm,cr),cr=c(Ce,0,"PgButtonMenu",Fm,cr),a(Ce,1,cr);var Mm=`<button part="button">
  <pg-icon part="icon"></pg-icon>
  <span part="label"></span>
</button>`;var Tm=`:host {\r
  display: contents;\r
}\r
\r
[part=button] {\r
  outline: none;\r
  display: flex;\r
  align-items: center;\r
  font-family: var(--pg-font-family, system-ui);\r
  text-align: var(--pg-menu-item-text-align, left);\r
  background: var(--pg-menu-item-background, transparent);\r
  padding: var(--pg-menu-item-padding, 0.25rem 0.5rem 0.25rem 0.5rem);\r
  border-color: transparent;\r
  border-width: 0;\r
  border-style: solid;\r
  border-top-left-radius: var(--pg-menu-item-border-radius-top, 0.25rem);\r
  border-top-right-radius: var(--pg-menu-item-border-radius-top, 0.25rem);\r
  border-bottom-left-radius: var(--pg-menu-item-border-radius-bottom, 0.25rem);\r
  border-bottom-right-radius: var(--pg-menu-item-border-radius-bottom, 0.25rem);\r
  color: var(--pg-menu-item-color, #453C4F);\r
}\r
\r
[part=button]:not(:disabled):active,\r
[part=button]:not(:disabled):hover {\r
  background: var(--pg-menu-item-selected-background, #453C4F);\r
  color: #FFFFFF;\r
  --pg-icon-color: #FFFFFF;\r
}\r
\r
[part=button]:not(:disabled):active {\r
  background: var(--pg-menu-item-active-background, #5f516e);\r
}\r
\r
[part=button]:disabled {\r
  color: var(--pg-menu-item-disabled-color, rgb(69, 60, 79, 0.75));\r
  --pg-icon-color: var(--pg-menu-item-disabled-color, rgb(69, 60, 79, 0.75));\r
}\r
\r
@container style(--pg-menu-_has-check: true) {\r
  [part=button] {\r
    padding-inline-start: 1.5rem;\r
  }\r
\r
  [part=button].checked::before {\r
    position: absolute;\r
    translate: -1.5rem 0;\r
    content: var(--pg-menu-item-check, url("data:image/svg+xml; utf8, <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M 17.5,10.2501L 10.5,17.25L 6.5,13.25L 7.9,11.8L 10.5,14.4L 16.0857,8.8L 17.5,10.25Z' fill='rgb(69, 60, 79)' /></svg>"));\r
    width: 1.5rem;\r
    height: 1.5rem;\r
  }\r
\r
  [part=button].checked:active::before,\r
  [part=button].checked:hover::before {\r
    content: var(--pg-menu-item-hover-check, url("data:image/svg+xml; utf8, <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M 17.5,10.2501L 10.5,17.25L 6.5,13.25L 7.9,11.8L 10.5,14.4L 16.0857,8.8L 17.5,10.25Z' fill='white' /></svg>"));\r
  }\r
\r
  [part=button].checked:disabled::before {\r
    content: var(--pg-menu-item-disabled-check, url("data:image/svg+xml; utf8, <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M 17.5,10.2501L 10.5,17.25L 6.5,13.25L 7.9,11.8L 10.5,14.4L 16.0857,8.8L 17.5,10.25Z' fill='rgb(69, 60, 79, 0.5)' /></svg>"));\r
  }\r
}\r
\r
[part=button]:focus-visible {\r
  position: relative;\r
}\r
\r
[part=button]:focus-visible::after {\r
  pointer-events: none;\r
  content: '';\r
  position: absolute;\r
  top: -1px;\r
  right: -1px;\r
  bottom: -1px;\r
  left: -1px;\r
  border-radius: 0.25rem;\r
  box-shadow: 0 0 0 3px var(--pg-focus-color, rgb(79, 143, 249, 0.5));\r
}\r
\r
[part=button]:focus-visible:not(:hover)::after {\r
  background: var(--pg-focus-background-color, rgb(79, 143, 249, 0.1));\r
}\r
\r
[part=icon] {\r
  margin-inline-end: 0.5rem;\r
}\r
\r
[part=button].more [part=label]::after {\r
  content: var(--pg-menu-item-check, url("data:image/svg+xml; utf8, <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z' fill='rgb(69, 60, 79)' /></svg>"));\r
  width: 1.5rem;\r
  height: 1.5rem;\r
  vertical-align: middle;\r
  translate: 0.25rem 0;\r
}\r
\r
[part=button].more:active [part=label]::after,\r
[part=button].more:hover [part=label]::after {\r
  content: var(--pg-menu-item-hover-check, url("data:image/svg+xml; utf8, <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z' fill='white' /></svg>"));\r
}\r
\r
[part=button].more:disabled [part=label]::after {\r
  content: var(--pg-menu-item-disabled-check, url("data:image/svg+xml; utf8, <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z' fill='rgb(69, 60, 79, 0.5)' /></svg>"));\r
}\r
\r
[part=label] {\r
  display: flex;\r
  align-items: center;\r
}\r
`;var Dm,$m,Hm,Im,Rm,_m,Bm,Om,Nm,Vm,zm,ae;zm=[k({selector:"pg-menu-item-icon",style:Tm,template:Mm})];var be=class extends(Vm=HTMLElement,Nm=[L()],Om=[L()],Bm=[L()],_m=[L()],Rm=[L()],Im=[L()],Hm=[m()],$m=[m()],Dm=[m()],Vm){constructor(){super(...arguments);p(this,"index",a(ae,8,this)),a(ae,11,this);p(this,"icon",a(ae,12,this,"M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z")),a(ae,15,this);p(this,"label",a(ae,16,this,"")),a(ae,19,this);p(this,"checked",a(ae,20,this,!1)),a(ae,23,this);p(this,"disabled",a(ae,24,this,!1)),a(ae,27,this);p(this,"items",a(ae,28,this,[])),a(ae,31,this);p(this,"$icon",a(ae,32,this)),a(ae,35,this);p(this,"$button",a(ae,36,this)),a(ae,39,this);p(this,"$label",a(ae,40,this)),a(ae,43,this)}render(t){t.icon&&(this.$icon.path=this.icon),t.label&&(this.$label.textContent=this.label),t.disabled&&(this.$button.disabled=this.disabled),t.checked&&this.$button.classList.toggle("checked",this.checked),t.items&&this.$button.classList.toggle("more",this.items.length>0),t.checked&&this.checked===!0&&this.dispatchEvent(new CustomEvent("hasCheck",{bubbles:!0}))}connectedCallback(){this.$button.addEventListener("click",async()=>{if(this.items.length>0){let t=await We.open({source:this.$button,x:0,y:0,value:this.items[0],items:this.items});t===null?this.focus():t?this.dispatchEvent(new CustomEvent("select",{detail:{item:t}})):this.dispatchEvent(new CustomEvent("close",{detail:{depth:-1}}))}else this.dispatchEvent(new CustomEvent("select",{detail:{index:this.index,item:this.items[this.index]}}))}),this.$button.addEventListener("keydown",async t=>{switch(t.key){case"ArrowDown":this.dispatchEvent(new CustomEvent("down",{detail:{index:this.index}})),t.preventDefault();break;case"ArrowUp":this.dispatchEvent(new CustomEvent("up",{detail:{index:this.index}})),t.preventDefault();break;case"ArrowLeft":this.dispatchEvent(new CustomEvent("close",{detail:{depth:1}})),t.preventDefault();break;case"ArrowRight":if(this.items.length>0){let n=await We.open({source:this.$button,x:0,y:0,value:this.items[0],items:this.items});n===null?this.focus():n?this.dispatchEvent(new CustomEvent("select",{detail:{item:n}})):this.dispatchEvent(new CustomEvent("close",{detail:{depth:-1}}))}t.preventDefault();break;case"Escape":this.dispatchEvent(new CustomEvent("close",{detail:{depth:-1}})),t.preventDefault();break}})}focus(){this.$button.focus()}getHeight(){return this.$label.getBoundingClientRect().height}};ae=A(Vm),c(ae,5,"index",Nm,be),c(ae,5,"icon",Om,be),c(ae,5,"label",Bm,be),c(ae,5,"checked",_m,be),c(ae,5,"disabled",Rm,be),c(ae,5,"items",Im,be),c(ae,5,"$icon",Hm,be),c(ae,5,"$button",$m,be),c(ae,5,"$label",Dm,be),be=c(ae,0,"PgMenuItemIcon",zm,be),p(be,"delegatesFocus",!0),a(ae,1,be);var jm=`<div class="example">
  <pg-button-menu part="menu"></pg-button-menu>
  <div>
    <code>value: <code part="value"></code></code>
  </div>
</div>`;var Ym="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z",Km,Um,Gm,Wm,zn;Wm=[k({selector:"x-pg-button-menu-basic",template:jm})];var Oi=class extends(Gm=HTMLElement,Um=[m()],Km=[m()],Gm){constructor(){super(...arguments);p(this,"$menu",a(zn,8,this)),a(zn,11,this);p(this,"$value",a(zn,12,this)),a(zn,15,this)}connectedCallback(){this.$menu.label="Options",this.$menu.items=[{value:"item1",label:"Item 1",icon:Ym,type:be,items:[{value:"subitem1",label:"Sub Item 1",icon:Ym,type:be}]},{value:"item2",label:"Item 2"}],this.$menu.value=this.$menu.items[0],this.$menu.addEventListener("change",this.handleChange.bind(this))}handleChange(t){let{active:n}=t.detail;this.$value.textContent=`${n}`}};zn=A(Gm),c(zn,5,"$menu",Um,Oi),c(zn,5,"$value",Km,Oi),Oi=c(zn,0,"XPgButtonMenuBasic",Wm,Oi),a(zn,1,Oi);var qm=`<pg-button part="button">
  <slot part="expand" name="active"></slot>
  <slot part="collapse" name="inactive"></slot>
</pg-button>`;var Qm=`:host {\r
  display: inline-flex;\r
}\r
\r
::slotted(*) {\r
  align-self: center;\r
  display: flex;\r
}`;var Zm=[!0,"true",""],Pm,Jm,Xm,eg,tg,rg,Tt;rg=[k({selector:"pg-button-toggle",style:Qm,template:qm})];var yn=class extends(tg=HTMLElement,eg=[L()],Xm=[m()],Jm=[m()],Pm=[m()],tg){constructor(){super(...arguments);p(this,"active",a(Tt,8,this,!1)),a(Tt,11,this);p(this,"$button",a(Tt,12,this)),a(Tt,15,this);p(this,"$expand",a(Tt,16,this)),a(Tt,19,this);p(this,"$collapse",a(Tt,20,this)),a(Tt,23,this)}connectedCallback(){this.$button.addEventListener("click",t=>{t.stopPropagation(),this.active=!Zm.includes(this.active),this.dispatchEvent(new CustomEvent("click",{detail:{active:this.active}}))})}render(t){t.active&&(this.$button.active=Zm.includes(this.active),this.$expand.style.display=this.$button.active?"initial":"none",this.$collapse.style.display=this.$button.active?"none":"initial")}};Tt=A(tg),c(Tt,5,"active",eg,yn),c(Tt,5,"$button",Xm,yn),c(Tt,5,"$expand",Jm,yn),c(Tt,5,"$collapse",Pm,yn),yn=c(Tt,0,"PgButtonToggle",rg,yn),a(Tt,1,yn);var ng=`<div class="example">
  <div>click to toggle state</div>
  <pg-button-toggle part="button">
    <pg-icon slot="inactive" path="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"></pg-icon>
    <pg-icon slot="active" path="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z"></pg-icon>
  </pg-button-toggle>
  <div>
    <code>onclick: <code part="value"></code></code>
  </div>
</div>`;var ig,og,ag,sg,jn;sg=[k({selector:"x-pg-button-toggle-basic",template:ng})];var Ni=class extends(ag=HTMLElement,og=[m()],ig=[m()],ag){constructor(){super(...arguments);p(this,"$button",a(jn,8,this)),a(jn,11,this);p(this,"$value",a(jn,12,this)),a(jn,15,this)}connectedCallback(){this.$button.addEventListener("click",this.handleClick.bind(this))}handleClick(t){let{active:n}=t.detail;this.$value.textContent=`${n}`}};jn=A(ag),c(jn,5,"$button",og,Ni),c(jn,5,"$value",ig,Ni),Ni=c(jn,0,"XPgButtonToggleBasic",sg,Ni),a(jn,1,Ni);var lg=`<div class="example">
  <p>click to toggle and persist state in LocalStorage</p>
  <pg-button-toggle part="button">
    <pg-icon slot="inactive" path="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"></pg-icon>
    <pg-icon slot="active" path="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z"></pg-icon>
  </pg-button-toggle>
  <div>
    <code>button onclick: <code part="value"></code></code>
  </div>
</div>`;var ug,cg,pg,dg,hg,Dr,ya,Fl,fg;hg=[k({selector:"x-pg-button-toggle-persist",template:lg})];var Vi=class extends(dg=HTMLElement,pg=[m()],cg=[m()],ug=[la("example")],dg){constructor(){super(...arguments);R(this,Fl);p(this,"$button",a(Dr,8,this)),a(Dr,11,this);p(this,"$value",a(Dr,12,this)),a(Dr,15,this);R(this,ya,a(Dr,16,this,new Map([["toggle",!1]]))),a(Dr,19,this)}connectedCallback(){this.$button.addEventListener("click",F(this,Fl,fg).bind(this)),x(this,ya).get("toggle")&&(this.$button.active=!0,this.$value.textContent="true")}};Dr=A(dg),ya=new WeakMap,Fl=new WeakSet,fg=function(t){let{active:n}=t.detail;this.$value.textContent=`${n}`,x(this,ya).set("toggle",n)},c(Dr,5,"$button",pg,Vi),c(Dr,5,"$value",cg,Vi),c(Dr,21,"#store",ug,ya),Vi=c(Dr,0,"XPgButtonTogglePersist",hg,Vi),a(Dr,1,Vi);var mg=`<div part="body">
  <slot></slot>
</div>`;var gg=`:host {\r
  display: flex;\r
  flex-direction: column;\r
}\r
\r
[part="body"] {\r
  padding: var(--pg-card-padding, 0);\r
  border-radius: var(--pg-card-padding, 0.5rem);\r
  background: var(--pg-card-background, #fff);\r
  box-shadow: 0 0.0625rem 0.25rem rgba(0, 0, 0, 0.3);\r
}`;var bg,Ec,o9;bg=[k({selector:"pg-card",style:gg,template:mg})];var Ea=class extends(o9=HTMLElement){};Ec=A(o9),Ea=c(Ec,0,"PgCard",bg,Ea),a(Ec,1,Ea);var vg=`<div class="example">
  <pg-card>
    <p>Content</p>
  </pg-card>
</div>`;var xg,wc,a9;xg=[k({selector:"x-pg-card-basic",template:vg})];var wa=class extends(a9=HTMLElement){};wc=A(a9),wa=c(wc,0,"XPgCardBasic",xg,wa),a(wc,1,wa);var yg=`<pg-card>
  <div part="loading">
    Loading...
  </div>
  <div part="user">
    <pg-avatar part="avatar"></pg-avatar>
    <div part="name"></div>
    <div part="iconCount">
      <div part="iconCountValue"></div>
      <div part="iconCountLabel">Icons</div>
    </div>
    <a part="github">
      <svg viewBox="0 0 24 24">
        <path fill="currentColor" d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
      </svg>
    </a>
  </div>
</pg-card>`;var Eg=`:host {\r
  display: flex;\r
  flex-direction: column;\r
  font-family: var(--pg-font-family, system-ui);\r
}\r
\r
[part="user"] {\r
  display: grid;\r
  grid-template-rows: 1fr 1fr;\r
  grid-template-columns: 4rem 2rem 1.5rem 1fr auto;\r
  padding: 0.5rem;\r
}\r
\r
[part="avatar"] {\r
  grid-column: 1;\r
  grid-row: 1 / span 2;\r
  align-self: center;\r
}\r
\r
[part="name"] {\r
  grid-column: 2 / span 3;\r
  grid-row: 1;\r
  white-space: nowrap;\r
}\r
\r
[part="iconCount"] {\r
  display: flex;\r
  flex-direction: column;\r
  text-align: center;\r
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2) inset;\r
  border-radius: 0.25rem;\r
  background: rgba(0, 0, 0, 0.05);\r
  grid-column: 5;\r
  grid-row: 1 / span 2;\r
  padding: 0 0.5rem;\r
  align-items: stretch;\r
  justify-content: center;\r
  color: #444;\r
  margin-left: 0.5rem;\r
}\r
\r
[part="iconCountValue"] {\r
  font-weight: bold;\r
}\r
\r
[part="github"] svg {\r
  width: 1.5rem;\r
  height: 1.5rem;\r
}\r
\r
[part="github"] {\r
  grid-row: 2;\r
  grid-column: 2;\r
  color: #333;\r
}\r
\r
[part="github"]:hover {\r
  color: #4f8ff9;\r
}`;var wg,Cg,Ag,kg,Lg,Fg,Sg,Mg,Tg,Ae;Tg=[k({selector:"pg-card-user",style:Eg,template:yg})];var pr=class extends(Mg=HTMLElement,Sg=[L()],Fg=[m()],Lg=[m()],kg=[m()],Ag=[m()],Cg=[m()],wg=[m()],Mg){constructor(){super(...arguments);p(this,"user",a(Ae,8,this,null)),a(Ae,11,this);p(this,"$loading",a(Ae,12,this)),a(Ae,15,this);p(this,"$user",a(Ae,16,this)),a(Ae,19,this);p(this,"$name",a(Ae,20,this)),a(Ae,23,this);p(this,"$github",a(Ae,24,this)),a(Ae,27,this);p(this,"$iconCountValue",a(Ae,28,this)),a(Ae,31,this);p(this,"$avatar",a(Ae,32,this)),a(Ae,35,this)}connectedCallback(){Ri(this.$github,()=>`View ${this.user?.github} on GitHub`)}render(t){t.user&&this.user?(this.$avatar.user=this.user,this.$name.innerText=`${this.user.name}`,this.$iconCountValue.innerText=`${this.user.iconCount}`,this.$github.href=`https://github.com/${this.user.github}`,this.$github.style.setProperty("display",this.user.github?null:"none"),this.$user.style.setProperty("display",null),this.$loading.style.setProperty("display","none")):(this.$user.style.setProperty("display","none"),this.$loading.style.setProperty("display",null))}};Ae=A(Mg),c(Ae,5,"user",Sg,pr),c(Ae,5,"$loading",Fg,pr),c(Ae,5,"$user",Lg,pr),c(Ae,5,"$name",kg,pr),c(Ae,5,"$github",Ag,pr),c(Ae,5,"$iconCountValue",Cg,pr),c(Ae,5,"$avatar",wg,pr),pr=c(Ae,0,"PgCardUser",Tg,pr),a(Ae,1,pr);var Dg="iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAasSURBVHhe7Z1taFZlGMevHNN9SDEFM0KXWakgpWWmaep8mW6+LHtjHxphkBDVF4kk0IjyiwV9iIgISWRJgzILQ2s5p8t3DJcYJn0oX+ZUcLqpNR26nv9zrnvPOfee7Xk79zkXcf3g4bmv52ye2/O7z32u+74e8Y4FM6u6SRHDAH5XhKBChKFChKFChKFChKFChKFChKFChKFChKFChKFChKFChKFChKFChKFChKFChKFChKFChKFChKFChKFChKFChKFChKFChKFChKFChKFChKFChKFChKFChKFChKFChBH7P9h5Z91qGjX6Xo6IGur3UN2XWzhyyyuvvkRTpz/GEdGZ0y303pr1HMVDrHdI6X2jaObs6VQ6ZnTPq+q5xTRggPtuDSoZREufqQicO9mXRJ/iJFYhS5dXcivF8OHDkhfGNeUVc6mkpISjFOn6FCWxCSkuLqay+U9xFGRB4mK5BkLSgT6hb3ERm5DpM6fS4CF3ckR06dJlbhFNmTqJhg2/i6PwwbQ0bsKDHHnPDgP6hL7FRWxCli6v4JbH7p1N3CIqKiqixcsWchQ+i5bM55ZH/Y5d3PKw+xYlsQi5e+QIemTyRI6Ifjt6nPY2HeTIo68ppVAwHZVXzOOIqLOzk7Zt3Z58N6Bv6GMcxCLEvtgYob8fO0EXWi/yJwlp94yghyelpIWFPVU2Ne6nf67/m3z342pAZCJyIUhpK6vKOfJGaFPjvmTbnjqWJdLSsLEThvrt3jnNuwF9jCL9ton8jFOemJxMbQ0YmTc6byTbtpBpMxKjeXBqNBcKpiEkDAbckceajyfbePffoegj+ho1kQvpNV35RuaF8xeTzxPDwIHFNKeP1DgfcG4kDAZ7ANhxHNNWpEKQys6YNY0jpLptPSPU0GvaCnGhZl/gxoZUZgfsGH11mX6nI1Ih88rnBEborp/2cCsFnif+jKd0TGLNMD61ZsgXJAhIFAwnT/xJZ0+f48gDMT43oK/oc5REKqTXdGXdDQDPEzvjCWPlbicI6c4N4p62IhOCEYrRbsBIPPX3GY6C2BlPeWVZcjMwX5AYIEEw3LzZlViI/sJREHyO4wb02UX63ReRCSmvzHx3GPBcOfVXShY2AWeVzeAod5AYIEEwHNx3mK5evcZREHyO437svrskEiEY3bPKnuSo/xFqCHPqyGaq9GMfR98LuUNzIRIhuCD+re7+RqihoX433bp1iyNvOyOfWsUDD90f2EhEZnfk0FGO0oPj+DkD+h7VsyQyIX4yjVDQdukyHTnczJFHPhdl0eIF3PJAZnf79m2O0oPjdgb4vxFib3VnM0INP1vi5i6cndN2RrqaSzaDAdg/h79DFNVE50LsClzzkWPJGjr+cple51paA2uSXKuJ9kaiqXukO5f9Av46CYiimuj0Sw4YoXXfbQxclEI5dOBXWvvW+xz1z4cfrwts8xfK1Y5rVP30CurqSqXFYeP0DrFHaBhkW020ay5hEEU10akQF5W3bKuJrh7CrquJzqYsjNDarz/nyFt7rHrt7Z6t9lyYt3AOVb/4LEfetnnNCys56g0e/JvqPgvsXX20/hM6cfwkR9kzYeI4WrX6dY48ap5fmdyZdoEzITUrqqnm5WqOcpv7bTBFbd6yIbAx+eYba3rtFBvw5bd1H6zliOjKlXaqrlqRMd1NB+Ru/nZDoIZT+0Ud1W6s4yhcnExZdlUQ2ClsLqRbk/RXTbSnq6Zd+/OSAfB727+v58jDZTXRyZ9qVwWRuh7YG9wfyhVbaF/VRHsjERQyGIC9JnFZTXQipNcIbdxfcKoIoUg7DX1VE7FV799IxFri5B+pGkc+2JVM4CppCF2IXRUE5ksMhQCh9TsaOPJIV02sWBLcKsm0iZkt27bu4JaHq2pi6ELsqiAeqNlulWTixx92csvDriai7a+5gGy3SjJh36GuqomhCwnzgWqDgpa/xAr81US7sohpJqz0FHdoo3W3uZi2QhViVwVBoQ9UG3vEm2oiXmj78X89NQzwDUc/LqqJRWNHj3+X2wWDETN06BBqT0xTeGFEf1X7DR8Nh9aW8/T4tEepo70jeY7r165Ty9lWGplYBGLKMudua7tMGz7dlFiQ3uTfLJz2Kx00ZmwpdXd395wHC92+1kP5oP/lkTCcpL1K/qgQYagQYagQYagQYagQYagQYagQYagQYagQYagQYagQYagQYagQYagQYagQYagQYagQYagQYagQYagQYagQYagQYagQYagQYagQYagQYagQYagQYagQYagQYagQURD9B1WpU64ZforRAAAAAElFTkSuQmCC";var $g=`<div class="example">
  <pg-card-user part="cardUser1"></pg-card-user>
</div>`;var Hg,Ig,Rg,Ca;Rg=[k({selector:"x-pg-card-user-basic",template:$g})];var $o=class extends(Ig=HTMLElement,Hg=[m()],Ig){constructor(){super(...arguments);p(this,"$cardUser1",a(Ca,8,this)),a(Ca,11,this)}connectedCallback(){this.$cardUser1.user=new vt().from({id:"c4ea5584-07e3-11e4-bf19-842b2b6cfe1b",name:"Austin Andrews",description:"Hello, I am a developer that gets bored and makes icons, then websites for icons, then more icons. Open Source is pretty awesome.",base64:Dg,github:"Templarian",iconCount:928,website:"http://templarian.com",sponsored:!0,core:!0})}};Ca=A(Ig),c(Ca,5,"$cardUser1",Hg,$o),$o=c(Ca,0,"XPgCardUserBasic",Rg,$o),a(Ca,1,$o);var _g=[{name:"Red",camel:"red",colors:[{name:"50",hex:"FFEBEE"},{name:"100",hex:"FFCDD2"},{name:"200",hex:"EF9A9A"},{name:"300",hex:"E57373"},{name:"400",hex:"EF5350"},{name:"500",hex:"F44336"},{name:"600",hex:"E53935"},{name:"700",hex:"D32F2F"},{name:"800",hex:"C62828"},{name:"900",hex:"B71C1C"},{name:"A100",hex:"FF8A80"},{name:"A200",hex:"FF5252"},{name:"A400",hex:"FF1744"},{name:"A700",hex:"D50000"}]},{name:"Pink",camel:"pink",colors:[{name:"50",hex:"FCE4EC"},{name:"100",hex:"F8BBD0"},{name:"200",hex:"F48FB1"},{name:"300",hex:"F06292"},{name:"400",hex:"EC407A"},{name:"500",hex:"E91E63"},{name:"600",hex:"D81B60"},{name:"700",hex:"C2185B"},{name:"800",hex:"AD1457"},{name:"900",hex:"880E4F"},{name:"A100",hex:"FF80AB"},{name:"A200",hex:"FF4081"},{name:"A400",hex:"F50057"},{name:"A700",hex:"C51162"}]},{name:"Purple",camel:"purple",colors:[{name:"50",hex:"F3E5F5"},{name:"100",hex:"E1BEE7"},{name:"200",hex:"CE93D8"},{name:"300",hex:"BA68C8"},{name:"400",hex:"AB47BC"},{name:"500",hex:"9C27B0"},{name:"600",hex:"8E24AA"},{name:"700",hex:"7B1FA2"},{name:"800",hex:"6A1B9A"},{name:"900",hex:"4A148C"},{name:"A100",hex:"EA80FC"},{name:"A200",hex:"E040FB"},{name:"A400",hex:"D500F9"},{name:"A700",hex:"AA00FF"}]},{name:"Deep Purple",camel:"deepPurple",colors:[{name:"50",hex:"EDE7F6"},{name:"100",hex:"D1C4E9"},{name:"200",hex:"B39DDB"},{name:"300",hex:"9575CD"},{name:"400",hex:"7E57C2"},{name:"500",hex:"673AB7"},{name:"600",hex:"5E35B1"},{name:"700",hex:"512DA8"},{name:"800",hex:"4527A0"},{name:"900",hex:"311B92"},{name:"A100",hex:"B388FF"},{name:"A200",hex:"7C4DFF"},{name:"A400",hex:"651FFF"},{name:"A700",hex:"6200EA"}]},{name:"Indigo",camel:"indigo",colors:[{name:"50",hex:"E8EAF6"},{name:"100",hex:"C5CAE9"},{name:"200",hex:"9FA8DA"},{name:"300",hex:"7986CB"},{name:"400",hex:"5C6BC0"},{name:"500",hex:"3F51B5"},{name:"600",hex:"3949AB"},{name:"700",hex:"303F9F"},{name:"800",hex:"283593"},{name:"900",hex:"1A237E"},{name:"A100",hex:"8C9EFF"},{name:"A200",hex:"536DFE"},{name:"A400",hex:"3D5AFE"},{name:"A700",hex:"304FFE"}]},{name:"Blue",camel:"blue",colors:[{name:"50",hex:"E3F2FD"},{name:"100",hex:"BBDEFB"},{name:"200",hex:"90CAF9"},{name:"300",hex:"64B5F6"},{name:"400",hex:"42A5F5"},{name:"500",hex:"2196F3"},{name:"600",hex:"1E88E5"},{name:"700",hex:"1976D2"},{name:"800",hex:"1565C0"},{name:"900",hex:"0D47A1"},{name:"A100",hex:"82B1FF"},{name:"A200",hex:"448AFF"},{name:"A400",hex:"2979FF"},{name:"A700",hex:"2962FF"}]},{name:"Light Blue",camel:"lightBlue",colors:[{name:"50",hex:"E1F5FE"},{name:"100",hex:"B3E5FC"},{name:"200",hex:"81D4FA"},{name:"300",hex:"4FC3F7"},{name:"400",hex:"29B6F6"},{name:"500",hex:"03A9F4"},{name:"600",hex:"039BE5"},{name:"700",hex:"0288D1"},{name:"800",hex:"0277BD"},{name:"900",hex:"01579B"},{name:"A100",hex:"80D8FF"},{name:"A200",hex:"40C4FF"},{name:"A400",hex:"00B0FF"},{name:"A700",hex:"0091EA"}]},{name:"Cyan",camel:"cyan",colors:[{name:"50",hex:"E0F7FA"},{name:"100",hex:"B2EBF2"},{name:"200",hex:"80DEEA"},{name:"300",hex:"4DD0E1"},{name:"400",hex:"26C6DA"},{name:"500",hex:"00BCD4"},{name:"600",hex:"00ACC1"},{name:"700",hex:"0097A7"},{name:"800",hex:"00838F"},{name:"900",hex:"006064"},{name:"A100",hex:"84FFFF"},{name:"A200",hex:"18FFFF"},{name:"A400",hex:"00E5FF"},{name:"A700",hex:"00B8D4"}]},{name:"Teal",camel:"teal",colors:[{name:"50",hex:"E0F2F1"},{name:"100",hex:"B2DFDB"},{name:"200",hex:"80CBC4"},{name:"300",hex:"4DB6AC"},{name:"400",hex:"26A69A"},{name:"500",hex:"009688"},{name:"600",hex:"00897B"},{name:"700",hex:"00796B"},{name:"800",hex:"00695C"},{name:"900",hex:"004D40"},{name:"A100",hex:"A7FFEB"},{name:"A200",hex:"64FFDA"},{name:"A400",hex:"1DE9B6"},{name:"A700",hex:"00BFA5"}]},{name:"Green",camel:"green",colors:[{name:"50",hex:"E8F5E9"},{name:"100",hex:"C8E6C9"},{name:"200",hex:"A5D6A7"},{name:"300",hex:"81C784"},{name:"400",hex:"66BB6A"},{name:"500",hex:"4CAF50"},{name:"600",hex:"43A047"},{name:"700",hex:"388E3C"},{name:"800",hex:"2E7D32"},{name:"900",hex:"1B5E20"},{name:"A100",hex:"B9F6CA"},{name:"A200",hex:"69F0AE"},{name:"A400",hex:"00E676"},{name:"A700",hex:"00C853"}]},{name:"Light Green",camel:"lightGreen",colors:[{name:"50",hex:"F1F8E9"},{name:"100",hex:"DCEDC8"},{name:"200",hex:"C5E1A5"},{name:"300",hex:"AED581"},{name:"400",hex:"9CCC65"},{name:"500",hex:"8BC34A"},{name:"600",hex:"7CB342"},{name:"700",hex:"689F38"},{name:"800",hex:"558B2F"},{name:"900",hex:"33691E"},{name:"A100",hex:"CCFF90"},{name:"A200",hex:"B2FF59"},{name:"A400",hex:"76FF03"},{name:"A700",hex:"64DD17"}]},{name:"Lime",camel:"lime",colors:[{name:"50",hex:"F9FBE7"},{name:"100",hex:"F0F4C3"},{name:"200",hex:"E6EE9C"},{name:"300",hex:"DCE775"},{name:"400",hex:"D4E157"},{name:"500",hex:"CDDC39"},{name:"600",hex:"C0CA33"},{name:"700",hex:"AFB42B"},{name:"800",hex:"9E9D24"},{name:"900",hex:"827717"},{name:"A100",hex:"F4FF81"},{name:"A200",hex:"EEFF41"},{name:"A400",hex:"C6FF00"},{name:"A700",hex:"AEEA00"}]},{name:"Yellow",camel:"yellow",colors:[{name:"50",hex:"FFFDE7"},{name:"100",hex:"FFF9C4"},{name:"200",hex:"FFF59D"},{name:"300",hex:"FFF176"},{name:"400",hex:"FFEE58"},{name:"500",hex:"FFEB3B"},{name:"600",hex:"FDD835"},{name:"700",hex:"FBC02D"},{name:"800",hex:"F9A825"},{name:"900",hex:"F57F17"},{name:"A100",hex:"FFFF8D"},{name:"A200",hex:"FFFF00"},{name:"A400",hex:"FFEA00"},{name:"A700",hex:"FFD600"}]},{name:"Amber",camel:"amber",colors:[{name:"50",hex:"FFF8E1"},{name:"100",hex:"FFECB3"},{name:"200",hex:"FFE082"},{name:"300",hex:"FFD54F"},{name:"400",hex:"FFCA28"},{name:"500",hex:"FFC107"},{name:"600",hex:"FFB300"},{name:"700",hex:"FFA000"},{name:"800",hex:"FF8F00"},{name:"900",hex:"FF6F00"},{name:"A100",hex:"FFE57F"},{name:"A200",hex:"FFD740"},{name:"A400",hex:"FFC400"},{name:"A700",hex:"FFAB00"}]},{name:"Orange",camel:"orange",colors:[{name:"50",hex:"FFF3E0"},{name:"100",hex:"FFE0B2"},{name:"200",hex:"FFCC80"},{name:"300",hex:"FFB74D"},{name:"400",hex:"FFA726"},{name:"500",hex:"FF9800"},{name:"600",hex:"FB8C00"},{name:"700",hex:"F57C00"},{name:"800",hex:"EF6C00"},{name:"900",hex:"E65100"},{name:"A100",hex:"FFD180"},{name:"A200",hex:"FFAB40"},{name:"A400",hex:"FF9100"},{name:"A700",hex:"FF6D00"}]},{name:"Deep Orange",camel:"deepOrange",colors:[{name:"50",hex:"FBE9E7"},{name:"100",hex:"FFCCBC"},{name:"200",hex:"FFAB91"},{name:"300",hex:"FF8A65"},{name:"400",hex:"FF7043"},{name:"500",hex:"FF5722"},{name:"600",hex:"F4511E"},{name:"700",hex:"E64A19"},{name:"800",hex:"D84315"},{name:"900",hex:"BF360C"},{name:"A100",hex:"FF9E80"},{name:"A200",hex:"FF6E40"},{name:"A400",hex:"FF3D00"},{name:"A700",hex:"DD2C00"}]},{name:"Brown",camel:"brown",colors:[{name:"50",hex:"EFEBE9"},{name:"100",hex:"D7CCC8"},{name:"200",hex:"BCAAA4"},{name:"300",hex:"A1887F"},{name:"400",hex:"8D6E63"},{name:"500",hex:"795548"},{name:"600",hex:"6D4C41"},{name:"700",hex:"5D4037"},{name:"800",hex:"4E342E"},{name:"900",hex:"3E2723"}]},{name:"Grey",camel:"grey",colors:[{name:"50",hex:"FAFAFA"},{name:"100",hex:"F5F5F5"},{name:"200",hex:"EEEEEE"},{name:"300",hex:"E0E0E0"},{name:"400",hex:"BDBDBD"},{name:"500",hex:"9E9E9E"},{name:"600",hex:"757575"},{name:"700",hex:"616161"},{name:"800",hex:"424242"},{name:"900",hex:"212121"}]},{name:"Blue Grey",camel:"blueGrey",colors:[{name:"50",hex:"ECEFF1"},{name:"100",hex:"CFD8DC"},{name:"200",hex:"B0BEC5"},{name:"300",hex:"90A4AE"},{name:"400",hex:"78909C"},{name:"500",hex:"607D8B"},{name:"600",hex:"546E7A"},{name:"700",hex:"455A64"},{name:"800",hex:"37474F"},{name:"900",hex:"263238"}]},{name:"Misc",camel:"",colors:[{name:"white",hex:"FFFFFF",x:19,y:0},{name:"black",hex:"000000",x:19,y:1}]}];function Bg(e){var r=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return r?{r:parseInt(r[1],16),g:parseInt(r[2],16),b:parseInt(r[3],16)}:null}var Og='<div part="grid"></div>';var Ng=`button {\r
  border: 0;\r
  padding: 0;\r
  outline: 0;\r
}\r
\r
button.active {\r
  border: 2px solid #fff;\r
  box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.5);\r
  order: 1;\r
}\r
\r
button.white.active {\r
  box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.5) inset;\r
}\r
\r
[part~=grid] {\r
  display: grid;\r
  grid-template-columns: repeat(19, 1rem);\r
  grid-template-rows: repeat(14, 1rem);\r
}`;var Vg,zg,jg,Yg,Yn;Yg=[k({selector:"pg-color",style:Ng,template:Og})];var zi=class extends(jg=HTMLElement,zg=[L()],Vg=[m()],jg){constructor(){super(...arguments);p(this,"value",a(Yn,8,this,"#000000")),a(Yn,11,this);p(this,"$grid",a(Yn,12,this)),a(Yn,15,this);p(this,"buttons",[]);p(this,"isMouseDown",!1);p(this,"index",-1)}connectedCallback(){_g.forEach((n,i)=>{n.colors.forEach((o,s)=>{let l=document.createElement("button");l.style.background=`#${o.hex}`,o.name==="black"?l.style.gridArea="13 / 17 / 15 / 20":o.name==="white"?(l.style.gridArea="11 / 17 / 13 / 20",l.classList.add("white")):(l.style.gridRow=`${s+1}`,l.style.gridColumn=`${i+1}`);let u=this.buttons.push([l,`#${o.hex}`,n]);l.addEventListener("click",()=>{this.handleSelect(u-1)}),l.addEventListener("mouseenter",()=>{this.isMouseDown&&this.handleSelect(u-1)}),this.$grid.appendChild(l)})});let t=()=>{this.isMouseDown=!1,document.removeEventListener("mouseup",t)};this.$grid.addEventListener("mousedown",n=>{this.isMouseDown=!0;let i=this.buttons.findIndex(([o])=>o===n.target);i!==-1&&this.handleSelect(i),document.addEventListener("mouseup",t)})}handleSelect(t){let[n,i,o]=this.buttons[t],s=Bg(i);if(this.dispatchEvent(new CustomEvent("select",{detail:{group:o,hex:i,rgb:s}})),this.index!==-1){let[l]=this.buttons[this.index];l.classList.toggle("active",!1)}n.classList.toggle("active",!0),this.index=t}render(){if(this.index!==-1){let[n]=this.buttons[this.index];n.classList.toggle("active",!1)}let t=this.buttons.findIndex(n=>n[1]===this.value);if(this.index=t,this.buttons[t]){let[n]=this.buttons[t];n.classList.toggle("active",!0)}}};Yn=A(jg),c(Yn,5,"value",zg,zi),c(Yn,5,"$grid",Vg,zi),zi=c(Yn,0,"PgColor",Yg,zi),a(Yn,1,zi);var Kg=`<div class="example">
  <pg-color part="color1" value="#000"></pg-color>
  <code>Selected: <span part="colorSelected"></span></code>
</div>`;var Ug,Gg,Wg,qg,Kn;qg=[k({selector:"x-pg-color-basic",template:Kg})];var ji=class extends(Wg=HTMLElement,Gg=[m()],Ug=[m()],Wg){constructor(){super(...arguments);p(this,"$color1",a(Kn,8,this)),a(Kn,11,this);p(this,"$colorSelected",a(Kn,12,this)),a(Kn,15,this)}connectedCallback(){this.$color1.addEventListener("select",t=>{let{rgb:n,hex:i}=t.detail;this.$colorSelected.innerText=`${i} or rgb(${n.r}, ${n.g}, ${n.b})`})}};Kn=A(Wg),c(Kn,5,"$color1",Gg,ji),c(Kn,5,"$colorSelected",Ug,ji),ji=c(Kn,0,"XPgColorBasic",qg,ji),a(Kn,1,ji);var Qg="";var Zg="";var ve=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Ye=Object.keys,At=Array.isArray;typeof Promise<"u"&&!ve.Promise&&(ve.Promise=Promise);function $t(e,r){return typeof r!="object"||Ye(r).forEach(function(t){e[t]=r[t]}),e}var Bs=Object.getPrototypeOf,c9={}.hasOwnProperty;function $r(e,r){return c9.call(e,r)}function Sa(e,r){typeof r=="function"&&(r=r(Bs(e))),(typeof Reflect>"u"?Ye:Reflect.ownKeys)(r).forEach(t=>{Zn(e,t,r[t])})}var u0=Object.defineProperty;function Zn(e,r,t,n){u0(e,r,$t(t&&$r(t,"get")&&typeof t.get=="function"?{get:t.get,set:t.set,configurable:!0}:{value:t,configurable:!0,writable:!0},n))}function Ta(e){return{from:function(r){return e.prototype=Object.create(r.prototype),Zn(e.prototype,"constructor",e),{extend:Sa.bind(null,e.prototype)}}}}var p9=Object.getOwnPropertyDescriptor;function np(e,r){let t=p9(e,r),n;return t||(n=Bs(e))&&np(n,r)}var d9=[].slice;function Ql(e,r,t){return d9.call(e,r,t)}function c0(e,r){return r(e)}function $s(e){if(!e)throw new Error("Assertion Failed")}function p0(e){ve.setImmediate?setImmediate(e):setTimeout(e,0)}function d0(e,r){return e.reduce((t,n,i)=>{var o=r(n,i);return o&&(t[o[0]]=o[1]),t},{})}function h9(e,r,t){try{e.apply(null,t)}catch(n){r&&r(n)}}function Qn(e,r){if($r(e,r))return e[r];if(!r)return e;if(typeof r!="string"){for(var t=[],n=0,i=r.length;n<i;++n){var o=Qn(e,r[n]);t.push(o)}return t}var s=r.indexOf(".");if(s!==-1){var l=e[r.substr(0,s)];return l===void 0?void 0:Qn(l,r.substr(s+1))}}function an(e,r,t){if(!(!e||r===void 0)&&!("isFrozen"in Object&&Object.isFrozen(e)))if(typeof r!="string"&&"length"in r){$s(typeof t!="string"&&"length"in t);for(var n=0,i=r.length;n<i;++n)an(e,r[n],t[n])}else{var o=r.indexOf(".");if(o!==-1){var s=r.substr(0,o),l=r.substr(o+1);if(l==="")t===void 0?At(e)&&!isNaN(parseInt(s))?e.splice(s,1):delete e[s]:e[s]=t;else{var u=e[s];u||(u=e[s]={}),an(u,l,t)}}else t===void 0?At(e)&&!isNaN(parseInt(r))?e.splice(r,1):delete e[r]:e[r]=t}}function f9(e,r){typeof r=="string"?an(e,r,void 0):"length"in r&&[].map.call(r,function(t){an(e,t,void 0)})}function h0(e){var r={};for(var t in e)$r(e,t)&&(r[t]=e[t]);return r}var m9=[].concat;function f0(e){return m9.apply([],e)}var m0="Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(f0([8,16,32,64].map(e=>["Int","Uint","Float"].map(r=>r+e+"Array")))).filter(e=>ve[e]),g9=m0.map(e=>ve[e]);d0(m0,e=>[e,!0]);var Ki=null;function Ks(e){Ki=typeof WeakMap<"u"&&new WeakMap;let r=Mc(e);return Ki=null,r}function Mc(e){if(!e||typeof e!="object")return e;let r=Ki&&Ki.get(e);if(r)return r;if(At(e)){r=[],Ki&&Ki.set(e,r);for(var t=0,n=e.length;t<n;++t)r.push(Mc(e[t]))}else if(g9.indexOf(e.constructor)>=0)r=e;else{let o=Bs(e);r=o===Object.prototype?{}:Object.create(o),Ki&&Ki.set(e,r);for(var i in e)$r(e,i)&&(r[i]=Mc(e[i]))}return r}var{toString:b9}={};function Tc(e){return b9.call(e).slice(8,-1)}var Dc=typeof Symbol<"u"?Symbol.iterator:"@@iterator",v9=typeof Dc=="symbol"?function(e){var r;return e!=null&&(r=e[Dc])&&r.apply(e)}:function(){return null},La={};function Wn(e){var r,t,n,i;if(arguments.length===1){if(At(e))return e.slice();if(this===La&&typeof e=="string")return[e];if(i=v9(e)){for(t=[];n=i.next(),!n.done;)t.push(n.value);return t}if(e==null)return[e];if(r=e.length,typeof r=="number"){for(t=new Array(r);r--;)t[r]=e[r];return t}return[e]}for(r=arguments.length,t=new Array(r);r--;)t[r]=arguments[r];return t}var ip=typeof Symbol<"u"?e=>e[Symbol.toStringTag]==="AsyncFunction":()=>!1,wn=typeof location<"u"&&/^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);function g0(e,r){wn=e,b0=r}var b0=()=>!0,x9=!new Error("").stack;function No(){if(x9)try{throw No.arguments,new Error}catch(e){return e}return new Error}function $c(e,r){var t=e.stack;return t?(r=r||0,t.indexOf(e.name)===0&&(r+=(e.name+e.message).split(`
`).length),t.split(`
`).slice(r).filter(b0).map(n=>`
`+n).join("")):""}var y9=["Modify","Bulk","OpenFailed","VersionChange","Schema","Upgrade","InvalidTable","MissingAPI","NoSuchDatabase","InvalidArgument","SubTransaction","Unsupported","Internal","DatabaseClosed","PrematureCommit","ForeignAwait"],v0=["Unknown","Constraint","Data","TransactionInactive","ReadOnly","Version","NotFound","InvalidState","InvalidAccess","Abort","Timeout","QuotaExceeded","Syntax","DataClone"],op=y9.concat(v0),E9={VersionChanged:"Database version changed by other database connection",DatabaseClosed:"Database has been closed",Abort:"Transaction aborted",TransactionInactive:"Transaction has already completed or failed",MissingAPI:"IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"};function Da(e,r){this._e=No(),this.name=e,this.message=r}Ta(Da).from(Error).extend({stack:{get:function(){return this._stack||(this._stack=this.name+": "+this.message+$c(this._e,2))}},toString:function(){return this.name+": "+this.message}});function x0(e,r){return e+". Errors: "+Object.keys(r).map(t=>r[t].toString()).filter((t,n,i)=>i.indexOf(t)===n).join(`
`)}function Nl(e,r,t,n){this._e=No(),this.failures=r,this.failedKeys=n,this.successCount=t,this.message=x0(e,r)}Ta(Nl).from(Da);function Is(e,r){this._e=No(),this.name="BulkError",this.failures=Object.keys(r).map(t=>r[t]),this.failuresByPos=r,this.message=x0(e,r)}Ta(Is).from(Da);var ap=op.reduce((e,r)=>(e[r]=r+"Error",e),{}),w9=Da,Z=op.reduce((e,r)=>{var t=r+"Error";function n(i,o){this._e=No(),this.name=t,i?typeof i=="string"?(this.message=`${i}${o?`
 `+o:""}`,this.inner=o||null):typeof i=="object"&&(this.message=`${i.name} ${i.message}`,this.inner=i):(this.message=E9[r]||t,this.inner=null)}return Ta(n).from(w9),e[r]=n,e},{});Z.Syntax=SyntaxError;Z.Type=TypeError;Z.Range=RangeError;var Pg=v0.reduce((e,r)=>(e[r+"Error"]=Z[r],e),{});function C9(e,r){if(!e||e instanceof Da||e instanceof TypeError||e instanceof SyntaxError||!e.name||!Pg[e.name])return e;var t=new Pg[e.name](r||e.message,e);return"stack"in e&&Zn(t,"stack",{get:function(){return this.inner.stack}}),t}var Zl=op.reduce((e,r)=>(["Syntax","Type","Range"].indexOf(r)===-1&&(e[r+"Error"]=Z[r]),e),{});Zl.ModifyError=Nl;Zl.DexieError=Da;Zl.BulkError=Is;function fe(){}function Us(e){return e}function A9(e,r){return e==null||e===Us?r:function(t){return r(e(t))}}function Bo(e,r){return function(){e.apply(this,arguments),r.apply(this,arguments)}}function k9(e,r){return e===fe?r:function(){var t=e.apply(this,arguments);t!==void 0&&(arguments[0]=t);var n=this.onsuccess,i=this.onerror;this.onsuccess=null,this.onerror=null;var o=r.apply(this,arguments);return n&&(this.onsuccess=this.onsuccess?Bo(n,this.onsuccess):n),i&&(this.onerror=this.onerror?Bo(i,this.onerror):i),o!==void 0?o:t}}function L9(e,r){return e===fe?r:function(){e.apply(this,arguments);var t=this.onsuccess,n=this.onerror;this.onsuccess=this.onerror=null,r.apply(this,arguments),t&&(this.onsuccess=this.onsuccess?Bo(t,this.onsuccess):t),n&&(this.onerror=this.onerror?Bo(n,this.onerror):n)}}function F9(e,r){return e===fe?r:function(t){var n=e.apply(this,arguments);$t(t,n);var i=this.onsuccess,o=this.onerror;this.onsuccess=null,this.onerror=null;var s=r.apply(this,arguments);return i&&(this.onsuccess=this.onsuccess?Bo(i,this.onsuccess):i),o&&(this.onerror=this.onerror?Bo(o,this.onerror):o),n===void 0?s===void 0?void 0:s:$t(n,s)}}function S9(e,r){return e===fe?r:function(){return r.apply(this,arguments)===!1?!1:e.apply(this,arguments)}}function sp(e,r){return e===fe?r:function(){var t=e.apply(this,arguments);if(t&&typeof t.then=="function"){for(var n=this,i=arguments.length,o=new Array(i);i--;)o[i]=arguments[i];return t.then(function(){return r.apply(n,o)})}return r.apply(this,arguments)}}var Os={},M9=100,T9=20,y0=100,[Hc,Vl,Ic]=typeof Promise>"u"?[]:(()=>{let e=Promise.resolve();if(typeof crypto>"u"||!crypto.subtle)return[e,Bs(e),e];let r=crypto.subtle.digest("SHA-512",new Uint8Array([0]));return[r,Bs(r),e]})(),E0=Vl&&Vl.then,Hl=Hc&&Hc.constructor,lp=!!Ic,Rc=!1,D9=Ic?()=>{Ic.then(Sl)}:ve.setImmediate?setImmediate.bind(null,Sl):ve.MutationObserver?()=>{var e=document.createElement("div");new MutationObserver(()=>{Sl(),e=null}).observe(e,{attributes:!0}),e.setAttribute("i","1")}:()=>{setTimeout(Sl,0)},Ns=function(e,r){Hs.push([e,r]),zl&&(D9(),zl=!1)},_c=!0,zl=!0,Ro=[],Il=[],Bc=null,Oc=Us,Fa={id:"global",global:!0,ref:0,unhandleds:[],onunhandled:e0,pgp:!1,env:{},finalize:function(){this.unhandleds.forEach(e=>{try{e0(e[0],e[1])}catch{}})}},W=Fa,Hs=[],_o=0,Rl=[];function V(e){if(typeof this!="object")throw new TypeError("Promises must be constructed via new");this._listeners=[],this.onuncatched=fe,this._lib=!1;var r=this._PSD=W;if(wn&&(this._stackHolder=No(),this._prev=null,this._numPrev=0),typeof e!="function"){if(e!==Os)throw new TypeError("Not a function");this._state=arguments[1],this._value=arguments[2],this._state===!1&&Vc(this,this._value);return}this._state=null,this._value=null,++r.ref,C0(this,e)}var Nc={get:function(){var e=W,r=jl;function t(n,i){var o=!e.global&&(e!==W||r!==jl);let s=o&&!Pn();var l=new V((u,d)=>{up(this,new w0(Kl(n,e,o,s),Kl(i,e,o,s),u,d,e))});return wn&&L0(l,this),l}return t.prototype=Os,t},set:function(e){Zn(this,"then",e&&e.prototype===Os?Nc:{get:function(){return e},set:Nc.set})}};Sa(V.prototype,{then:Nc,_then:function(e,r){up(this,new w0(null,null,e,r,W))},catch:function(e){if(arguments.length===1)return this.then(null,e);var r=arguments[0],t=arguments[1];return typeof r=="function"?this.then(null,n=>n instanceof r?t(n):_l(n)):this.then(null,n=>n&&n.name===r?t(n):_l(n))},finally:function(e){return this.then(r=>(e(),r),r=>(e(),_l(r)))},stack:{get:function(){if(this._stack)return this._stack;try{Rc=!0;var e=k0(this,[],T9),r=e.join(`
From previous: `);return this._state!==null&&(this._stack=r),r}finally{Rc=!1}}},timeout:function(e,r){return e<1/0?new V((t,n)=>{var i=setTimeout(()=>n(new Z.Timeout(r)),e);this.then(t,n).finally(clearTimeout.bind(null,i))}):this}});typeof Symbol<"u"&&Symbol.toStringTag&&Zn(V.prototype,Symbol.toStringTag,"Dexie.Promise");Fa.env=F0();function w0(e,r,t,n,i){this.onFulfilled=typeof e=="function"?e:null,this.onRejected=typeof r=="function"?r:null,this.resolve=t,this.reject=n,this.psd=i}Sa(V,{all:function(){var e=Wn.apply(null,arguments).map(Yl);return new V(function(r,t){e.length===0&&r([]);var n=e.length;e.forEach((i,o)=>V.resolve(i).then(s=>{e[o]=s,--n||r(e)},t))})},resolve:e=>{if(e instanceof V)return e;if(e&&typeof e.then=="function")return new V((t,n)=>{e.then(t,n)});var r=new V(Os,!0,e);return L0(r,Bc),r},reject:_l,race:function(){var e=Wn.apply(null,arguments).map(Yl);return new V((r,t)=>{e.map(n=>V.resolve(n).then(r,t))})},PSD:{get:()=>W,set:e=>W=e},totalEchoes:{get:()=>jl},newPSD:Gi,usePSD:Ha,scheduler:{get:()=>Ns,set:e=>{Ns=e}},rejectionMapper:{get:()=>Oc,set:e=>{Oc=e}},follow:(e,r)=>new V((t,n)=>Gi((i,o)=>{var s=W;s.unhandleds=[],s.onunhandled=o,s.finalize=Bo(function(){H9(()=>{this.unhandleds.length===0?i():o(this.unhandleds[0])})},s.finalize),e()},r,t,n))});Hl&&(Hl.allSettled&&Zn(V,"allSettled",function(){let e=Wn.apply(null,arguments).map(Yl);return new V(r=>{e.length===0&&r([]);let t=e.length,n=new Array(t);e.forEach((i,o)=>V.resolve(i).then(s=>n[o]={status:"fulfilled",value:s},s=>n[o]={status:"rejected",reason:s}).then(()=>--t||r(n)))})}),Hl.any&&typeof AggregateError<"u"&&Zn(V,"any",function(){let e=Wn.apply(null,arguments).map(Yl);return new V((r,t)=>{e.length===0&&t(new AggregateError([]));let n=e.length,i=new Array(n);e.forEach((o,s)=>V.resolve(o).then(l=>r(l),l=>{i[s]=l,--n||t(new AggregateError(i))}))})}));function C0(e,r){try{r(t=>{if(e._state===null){if(t===e)throw new TypeError("A promise cannot be resolved with itself.");var n=e._lib&&Gs();t&&typeof t.then=="function"?C0(e,(i,o)=>{t instanceof V?t._then(i,o):t.then(i,o)}):(e._state=!0,e._value=t,A0(e)),n&&Ws()}},Vc.bind(null,e))}catch(t){Vc(e,t)}}function Vc(e,r){if(Il.push(r),e._state===null){var t=e._lib&&Gs();r=Oc(r),e._state=!1,e._value=r,wn&&r!==null&&typeof r=="object"&&!r._promise&&h9(()=>{var n=np(r,"stack");r._promise=e,Zn(r,"stack",{get:()=>Rc?n&&(n.get?n.get.apply(r):n.value):e.stack})}),I9(e),A0(e),t&&Ws()}}function A0(e){var r=e._listeners;e._listeners=[];for(var t=0,n=r.length;t<n;++t)up(e,r[t]);var i=e._PSD;--i.ref||i.finalize(),_o===0&&(++_o,Ns(()=>{--_o===0&&cp()},[]))}function up(e,r){if(e._state===null){e._listeners.push(r);return}var t=e._state?r.onFulfilled:r.onRejected;if(t===null)return(e._state?r.resolve:r.reject)(e._value);++r.psd.ref,++_o,Ns($9,[t,e,r])}function $9(e,r,t){try{Bc=r;var n,i=r._value;r._state?n=e(i):(Il.length&&(Il=[]),n=e(i),Il.indexOf(i)===-1&&R9(r)),t.resolve(n)}catch(o){t.reject(o)}finally{Bc=null,--_o===0&&cp(),--t.psd.ref||t.psd.finalize()}}function k0(e,r,t){if(r.length===t)return r;var n="";if(e._state===!1){var i=e._value,o,s;i!=null?(o=i.name||"Error",s=i.message||i,n=$c(i,0)):(o=i,s=""),r.push(o+(s?": "+s:"")+n)}return wn&&(n=$c(e._stackHolder,2),n&&r.indexOf(n)===-1&&r.push(n),e._prev&&k0(e._prev,r,t)),r}function L0(e,r){var t=r?r._numPrev+1:0;t<M9&&(e._prev=r,e._numPrev=t)}function Sl(){Gs()&&Ws()}function Gs(){var e=_c;return _c=!1,zl=!1,e}function Ws(){var e,r,t;do for(;Hs.length>0;)for(e=Hs,Hs=[],t=e.length,r=0;r<t;++r){var n=e[r];n[0].apply(null,n[1])}while(Hs.length>0);_c=!0,zl=!0}function cp(){var e=Ro;Ro=[],e.forEach(n=>{n._PSD.onunhandled.call(null,n._value,n)});for(var r=Rl.slice(0),t=r.length;t;)r[--t]()}function H9(e){function r(){e(),Rl.splice(Rl.indexOf(r),1)}Rl.push(r),++_o,Ns(()=>{--_o===0&&cp()},[])}function I9(e){Ro.some(r=>r._value===e._value)||Ro.push(e)}function R9(e){for(var r=Ro.length;r;)if(Ro[--r]._value===e._value){Ro.splice(r,1);return}}function _l(e){return new V(Os,!1,e)}function ke(e,r){var t=W;return function(){var n=Gs(),i=W;try{return Wi(t,!0),e.apply(this,arguments)}catch(o){r&&r(o)}finally{Wi(i,!1),n&&Ws()}}}var Ct={awaits:0,echoes:0,id:0},_9=0,Bl=[],Cc=0,jl=0,B9=0;function Gi(e,r,t,n){var i=W,o=Object.create(i);o.parent=i,o.ref=0,o.global=!1,o.id=++B9;var s=Fa.env;o.env=lp?{Promise:V,PromiseProp:{value:V,configurable:!0,writable:!0},all:V.all,race:V.race,allSettled:V.allSettled,any:V.any,resolve:V.resolve,reject:V.reject,nthen:Jg(s.nthen,o),gthen:Jg(s.gthen,o)}:{},r&&$t(o,r),++i.ref,o.finalize=function(){--this.parent.ref||this.parent.finalize()};var l=Ha(o,e,t,n);return o.ref===0&&o.finalize(),l}function $a(){return Ct.id||(Ct.id=++_9),++Ct.awaits,Ct.echoes+=y0,Ct.id}function Pn(){return Ct.awaits?(--Ct.awaits===0&&(Ct.id=0),Ct.echoes=Ct.awaits*y0,!0):!1}(""+E0).indexOf("[native code]")===-1&&($a=Pn=fe);function Yl(e){return Ct.echoes&&e&&e.constructor===Hl?($a(),e.then(r=>(Pn(),r),r=>(Pn(),qe(r)))):e}function O9(e){++jl,(!Ct.echoes||--Ct.echoes===0)&&(Ct.echoes=Ct.id=0),Bl.push(W),Wi(e,!0)}function N9(){var e=Bl[Bl.length-1];Bl.pop(),Wi(e,!1)}function Wi(e,r){var t=W;if((r?Ct.echoes&&(!Cc++||e!==W):Cc&&(!--Cc||e!==W))&&S0(r?O9.bind(null,e):N9),e!==W&&(W=e,t===Fa&&(Fa.env=F0()),lp)){var n=Fa.env.Promise,i=e.env;Vl.then=i.nthen,n.prototype.then=i.gthen,(t.global||e.global)&&(Object.defineProperty(ve,"Promise",i.PromiseProp),n.all=i.all,n.race=i.race,n.resolve=i.resolve,n.reject=i.reject,i.allSettled&&(n.allSettled=i.allSettled),i.any&&(n.any=i.any))}}function F0(){var e=ve.Promise;return lp?{Promise:e,PromiseProp:Object.getOwnPropertyDescriptor(ve,"Promise"),all:e.all,race:e.race,allSettled:e.allSettled,any:e.any,resolve:e.resolve,reject:e.reject,nthen:Vl.then,gthen:e.prototype.then}:{}}function Ha(e,r,t,n,i){var o=W;try{return Wi(e,!0),r(t,n,i)}finally{Wi(o,!1)}}function S0(e){E0.call(Hc,e)}function Kl(e,r,t,n){return typeof e!="function"?e:function(){var i=W;t&&$a(),Wi(r,!0);try{return e.apply(this,arguments)}finally{Wi(i,!1),n&&S0(Pn)}}}function Jg(e,r){return function(t,n){return e.call(this,Kl(t,r),Kl(n,r))}}var Xg="unhandledrejection";function e0(e,r){var t;try{t=r.onuncatched(e)}catch{}if(t!==!1)try{var n,i={promise:r,reason:e};if(ve.document&&document.createEvent?(n=document.createEvent("Event"),n.initEvent(Xg,!0,!0),$t(n,i)):ve.CustomEvent&&(n=new CustomEvent(Xg,{detail:i}),$t(n,i)),n&&ve.dispatchEvent&&(dispatchEvent(n),!ve.PromiseRejectionEvent&&ve.onunhandledrejection))try{ve.onunhandledrejection(n)}catch{}wn&&n&&!n.defaultPrevented&&console.warn(`Unhandled rejection: ${e.stack||e}`)}catch{}}var qe=V.reject;function zc(e,r,t,n){if(!e.idbdb||!e._state.openComplete&&!W.letThrough&&!e._vip){if(e._state.openComplete)return qe(new Z.DatabaseClosed(e._state.dbOpenError));if(!e._state.isBeingOpened){if(!e._options.autoOpen)return qe(new Z.DatabaseClosed);e.open().catch(fe)}return e._state.dbReadyPromise.then(()=>zc(e,r,t,n))}else{var i=e._createTransaction(r,t,e._dbSchema);try{i.create(),e._state.PR1398_maxLoop=3}catch(o){return o.name===ap.InvalidState&&e.isOpen()&&--e._state.PR1398_maxLoop>0?(console.warn("Dexie: Need to reopen db"),e._close(),e.open().then(()=>zc(e,r,t,n))):qe(o)}return i._promise(r,(o,s)=>Gi(()=>(W.trans=i,n(o,s,i)))).then(o=>i._completion.then(()=>o))}}var t0="3.2.1",Io="\uFFFF",jc=-1/0,Un="Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",M0="String expected.",Rs=[],Pl=typeof navigator<"u"&&/(MSIE|Trident|Edge)/.test(navigator.userAgent),V9=Pl,z9=Pl,T0=e=>!/(dexie\.js|dexie\.min\.js)/.test(e),Jl="__dbnames",Ac="readonly",kc="readwrite";function Oo(e,r){return e?r?function(){return e.apply(this,arguments)&&r.apply(this,arguments)}:e:r}var D0={type:3,lower:-1/0,lowerOpen:!1,upper:[[]],upperOpen:!1};function Ml(e){return typeof e=="string"&&!/\./.test(e)?r=>(r[e]===void 0&&e in r&&(r=Ks(r),delete r[e]),r):r=>r}var Yc=class{_trans(r,t,n){let i=this._tx||W.trans,o=this.name;function s(u,d,h){if(!h.schema[o])throw new Z.NotFound("Table "+o+" not part of transaction");return t(h.idbtrans,h)}let l=Gs();try{return i&&i.db===this.db?i===W.trans?i._promise(r,s,n):Gi(()=>i._promise(r,s,n),{trans:i,transless:W.transless||W}):zc(this.db,r,[this.name],s)}finally{l&&Ws()}}get(r,t){return r&&r.constructor===Object?this.where(r).first(t):this._trans("readonly",n=>this.core.get({trans:n,key:r}).then(i=>this.hook.reading.fire(i))).then(t)}where(r){if(typeof r=="string")return new this.db.WhereClause(this,r);if(At(r))return new this.db.WhereClause(this,`[${r.join("+")}]`);let t=Ye(r);if(t.length===1)return this.where(t[0]).equals(r[t[0]]);let n=this.schema.indexes.concat(this.schema.primKey).filter(d=>d.compound&&t.every(h=>d.keyPath.indexOf(h)>=0)&&d.keyPath.every(h=>t.indexOf(h)>=0))[0];if(n&&this.db._maxKey!==Io)return this.where(n.name).equals(n.keyPath.map(d=>r[d]));!n&&wn&&console.warn(`The query ${JSON.stringify(r)} on ${this.name} would benefit of a compound index [${t.join("+")}]`);let{idxByName:i}=this.schema,o=this.db._deps.indexedDB;function s(d,h){try{return o.cmp(d,h)===0}catch{return!1}}let[l,u]=t.reduce(([d,h],f)=>{let g=i[f],b=r[f];return[d||g,d||!g?Oo(h,g&&g.multi?w=>{let v=Qn(w,f);return At(v)&&v.some(y=>s(b,y))}:w=>s(b,Qn(w,f))):h]},[null,null]);return l?this.where(l.name).equals(r[l.keyPath]).filter(u):n?this.filter(u):this.where(t).equals("")}filter(r){return this.toCollection().and(r)}count(r){return this.toCollection().count(r)}offset(r){return this.toCollection().offset(r)}limit(r){return this.toCollection().limit(r)}each(r){return this.toCollection().each(r)}toArray(r){return this.toCollection().toArray(r)}toCollection(){return new this.db.Collection(new this.db.WhereClause(this))}orderBy(r){return new this.db.Collection(new this.db.WhereClause(this,At(r)?`[${r.join("+")}]`:r))}reverse(){return this.toCollection().reverse()}mapToClass(r){this.schema.mappedClass=r;let t=n=>{if(!n)return n;let i=Object.create(r.prototype);for(var o in n)if($r(n,o))try{i[o]=n[o]}catch{}return i};return this.schema.readHook&&this.hook.reading.unsubscribe(this.schema.readHook),this.schema.readHook=t,this.hook("reading",t),r}defineClass(){function r(t){$t(this,t)}return this.mapToClass(r)}add(r,t){let{auto:n,keyPath:i}=this.schema.primKey,o=r;return i&&n&&(o=Ml(i)(r)),this._trans("readwrite",s=>this.core.mutate({trans:s,type:"add",keys:t!=null?[t]:null,values:[o]})).then(s=>s.numFailures?V.reject(s.failures[0]):s.lastResult).then(s=>{if(i)try{an(r,i,s)}catch{}return s})}update(r,t){if(typeof r=="object"&&!At(r)){let n=Qn(r,this.schema.primKey.keyPath);if(n===void 0)return qe(new Z.InvalidArgument("Given object does not contain its primary key"));try{typeof t!="function"?Ye(t).forEach(i=>{an(r,i,t[i])}):t(r,{value:r,primKey:n})}catch{}return this.where(":id").equals(n).modify(t)}else return this.where(":id").equals(r).modify(t)}put(r,t){let{auto:n,keyPath:i}=this.schema.primKey,o=r;return i&&n&&(o=Ml(i)(r)),this._trans("readwrite",s=>this.core.mutate({trans:s,type:"put",values:[o],keys:t!=null?[t]:null})).then(s=>s.numFailures?V.reject(s.failures[0]):s.lastResult).then(s=>{if(i)try{an(r,i,s)}catch{}return s})}delete(r){return this._trans("readwrite",t=>this.core.mutate({trans:t,type:"delete",keys:[r]})).then(t=>t.numFailures?V.reject(t.failures[0]):void 0)}clear(){return this._trans("readwrite",r=>this.core.mutate({trans:r,type:"deleteRange",range:D0})).then(r=>r.numFailures?V.reject(r.failures[0]):void 0)}bulkGet(r){return this._trans("readonly",t=>this.core.getMany({keys:r,trans:t}).then(n=>n.map(i=>this.hook.reading.fire(i))))}bulkAdd(r,t,n){let i=Array.isArray(t)?t:void 0;n=n||(i?void 0:t);let o=n?n.allKeys:void 0;return this._trans("readwrite",s=>{let{auto:l,keyPath:u}=this.schema.primKey;if(u&&i)throw new Z.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");if(i&&i.length!==r.length)throw new Z.InvalidArgument("Arguments objects and keys must have the same length");let d=r.length,h=u&&l?r.map(Ml(u)):r;return this.core.mutate({trans:s,type:"add",keys:i,values:h,wantResults:o}).then(({numFailures:f,results:g,lastResult:b,failures:w})=>{let v=o?g:b;if(f===0)return v;throw new Is(`${this.name}.bulkAdd(): ${f} of ${d} operations failed`,w)})})}bulkPut(r,t,n){let i=Array.isArray(t)?t:void 0;n=n||(i?void 0:t);let o=n?n.allKeys:void 0;return this._trans("readwrite",s=>{let{auto:l,keyPath:u}=this.schema.primKey;if(u&&i)throw new Z.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");if(i&&i.length!==r.length)throw new Z.InvalidArgument("Arguments objects and keys must have the same length");let d=r.length,h=u&&l?r.map(Ml(u)):r;return this.core.mutate({trans:s,type:"put",keys:i,values:h,wantResults:o}).then(({numFailures:f,results:g,lastResult:b,failures:w})=>{let v=o?g:b;if(f===0)return v;throw new Is(`${this.name}.bulkPut(): ${f} of ${d} operations failed`,w)})})}bulkDelete(r){let t=r.length;return this._trans("readwrite",n=>this.core.mutate({trans:n,type:"delete",keys:r})).then(({numFailures:n,lastResult:i,failures:o})=>{if(n===0)return i;throw new Is(`${this.name}.bulkDelete(): ${n} of ${t} operations failed`,o)})}};function qs(e){var r={},t=function(l,u){if(u){for(var d=arguments.length,h=new Array(d-1);--d;)h[d-1]=arguments[d];return r[l].subscribe.apply(null,h),e}else if(typeof l=="string")return r[l]};t.addEventType=o;for(var n=1,i=arguments.length;n<i;++n)o(arguments[n]);return t;function o(l,u,d){if(typeof l=="object")return s(l);u||(u=S9),d||(d=fe);var h={subscribers:[],fire:d,subscribe:function(f){h.subscribers.indexOf(f)===-1&&(h.subscribers.push(f),h.fire=u(h.fire,f))},unsubscribe:function(f){h.subscribers=h.subscribers.filter(function(g){return g!==f}),h.fire=h.subscribers.reduce(u,d)}};return r[l]=t[l]=h,h}function s(l){Ye(l).forEach(function(u){var d=l[u];if(At(d))o(u,l[u][0],l[u][1]);else if(d==="asap")var h=o(u,Us,function(){for(var g=arguments.length,b=new Array(g);g--;)b[g]=arguments[g];h.subscribers.forEach(function(w){p0(function(){w.apply(null,b)})})});else throw new Z.InvalidArgument("Invalid event config")})}}function Qs(e,r){return Ta(r).from({prototype:e}),r}function j9(e){return Qs(Yc.prototype,function(t,n,i){this.db=e,this._tx=i,this.name=t,this.schema=n,this.hook=e._allTables[t]?e._allTables[t].hook:qs(null,{creating:[k9,fe],reading:[A9,Us],updating:[F9,fe],deleting:[L9,fe]})})}function Aa(e,r){return!(e.filter||e.algorithm||e.or)&&(r?e.justLimit:!e.replayFilter)}function Lc(e,r){e.filter=Oo(e.filter,r)}function Fc(e,r,t){var n=e.replayFilter;e.replayFilter=n?()=>Oo(n(),r()):r,e.justLimit=t&&!n}function Y9(e,r){e.isMatch=Oo(e.isMatch,r)}function Ol(e,r){if(e.isPrimKey)return r.primaryKey;let t=r.getIndexByKeyPath(e.index);if(!t)throw new Z.Schema("KeyPath "+e.index+" on object store "+r.name+" is not indexed");return t}function r0(e,r,t){let n=Ol(e,r.schema);return r.openCursor({trans:t,values:!e.keysOnly,reverse:e.dir==="prev",unique:!!e.unique,query:{index:n,range:e.range}})}function Tl(e,r,t,n){let i=e.replayFilter?Oo(e.filter,e.replayFilter()):e.filter;if(e.or){let o={},s=(l,u,d)=>{if(!i||i(u,d,g=>u.stop(g),g=>u.fail(g))){var h=u.primaryKey,f=""+h;f==="[object ArrayBuffer]"&&(f=""+new Uint8Array(h)),$r(o,f)||(o[f]=!0,r(l,u,d))}};return Promise.all([e.or._iterate(s,t),n0(r0(e,n,t),e.algorithm,s,!e.keysOnly&&e.valueMapper)])}else return n0(r0(e,n,t),Oo(e.algorithm,i),r,!e.keysOnly&&e.valueMapper)}function n0(e,r,t,n){var i=n?(s,l,u)=>t(n(s),l,u):t,o=ke(i);return e.then(s=>{if(s)return s.start(()=>{var l=()=>s.continue();(!r||r(s,u=>l=u,u=>{s.stop(u),l=fe},u=>{s.fail(u),l=fe}))&&o(s.value,s,u=>l=u),l()})})}function Dt(e,r){try{let t=i0(e),n=i0(r);if(t!==n)return t==="Array"?1:n==="Array"?-1:t==="binary"?1:n==="binary"?-1:t==="string"?1:n==="string"?-1:t==="Date"?1:n!=="Date"?NaN:-1;switch(t){case"number":case"Date":case"string":return e>r?1:e<r?-1:0;case"binary":return U9(o0(e),o0(r));case"Array":return K9(e,r)}}catch{}return NaN}function K9(e,r){let t=e.length,n=r.length,i=t<n?t:n;for(let o=0;o<i;++o){let s=Dt(e[o],r[o]);if(s!==0)return s}return t===n?0:t<n?-1:1}function U9(e,r){let t=e.length,n=r.length,i=t<n?t:n;for(let o=0;o<i;++o)if(e[o]!==r[o])return e[o]<r[o]?-1:1;return t===n?0:t<n?-1:1}function i0(e){let r=typeof e;if(r!=="object")return r;if(ArrayBuffer.isView(e))return"binary";let t=Tc(e);return t==="ArrayBuffer"?"binary":t}function o0(e){return e instanceof Uint8Array?e:ArrayBuffer.isView(e)?new Uint8Array(e.buffer,e.byteOffset,e.byteLength):new Uint8Array(e)}var Kc=class{_read(r,t){var n=this._ctx;return n.error?n.table._trans(null,qe.bind(null,n.error)):n.table._trans("readonly",r).then(t)}_write(r){var t=this._ctx;return t.error?t.table._trans(null,qe.bind(null,t.error)):t.table._trans("readwrite",r,"locked")}_addAlgorithm(r){var t=this._ctx;t.algorithm=Oo(t.algorithm,r)}_iterate(r,t){return Tl(this._ctx,r,t,this._ctx.table.core)}clone(r){var t=Object.create(this.constructor.prototype),n=Object.create(this._ctx);return r&&$t(n,r),t._ctx=n,t}raw(){return this._ctx.valueMapper=null,this}each(r){var t=this._ctx;return this._read(n=>Tl(t,r,n,t.table.core))}count(r){return this._read(t=>{let n=this._ctx,i=n.table.core;if(Aa(n,!0))return i.count({trans:t,query:{index:Ol(n,i.schema),range:n.range}}).then(s=>Math.min(s,n.limit));var o=0;return Tl(n,()=>(++o,!1),t,i).then(()=>o)}).then(r)}sortBy(r,t){let n=r.split(".").reverse(),i=n[0],o=n.length-1;function s(d,h){return h?s(d[n[h]],h-1):d[i]}var l=this._ctx.dir==="next"?1:-1;function u(d,h){var f=s(d,o),g=s(h,o);return f<g?-l:f>g?l:0}return this.toArray(function(d){return d.sort(u)}).then(t)}toArray(r){return this._read(t=>{var n=this._ctx;if(n.dir==="next"&&Aa(n,!0)&&n.limit>0){let{valueMapper:i}=n,o=Ol(n,n.table.core.schema);return n.table.core.query({trans:t,limit:n.limit,values:!0,query:{index:o,range:n.range}}).then(({result:s})=>i?s.map(i):s)}else{let i=[];return Tl(n,o=>i.push(o),t,n.table.core).then(()=>i)}},r)}offset(r){var t=this._ctx;return r<=0?this:(t.offset+=r,Aa(t)?Fc(t,()=>{var n=r;return(i,o)=>n===0?!0:n===1?(--n,!1):(o(()=>{i.advance(n),n=0}),!1)}):Fc(t,()=>{var n=r;return()=>--n<0}),this)}limit(r){return this._ctx.limit=Math.min(this._ctx.limit,r),Fc(this._ctx,()=>{var t=r;return function(n,i,o){return--t<=0&&i(o),t>=0}},!0),this}until(r,t){return Lc(this._ctx,function(n,i,o){return r(n.value)?(i(o),t):!0}),this}first(r){return this.limit(1).toArray(function(t){return t[0]}).then(r)}last(r){return this.reverse().first(r)}filter(r){return Lc(this._ctx,function(t){return r(t.value)}),Y9(this._ctx,r),this}and(r){return this.filter(r)}or(r){return new this.db.WhereClause(this._ctx.table,r,this)}reverse(){return this._ctx.dir=this._ctx.dir==="prev"?"next":"prev",this._ondirectionchange&&this._ondirectionchange(this._ctx.dir),this}desc(){return this.reverse()}eachKey(r){var t=this._ctx;return t.keysOnly=!t.isMatch,this.each(function(n,i){r(i.key,i)})}eachUniqueKey(r){return this._ctx.unique="unique",this.eachKey(r)}eachPrimaryKey(r){var t=this._ctx;return t.keysOnly=!t.isMatch,this.each(function(n,i){r(i.primaryKey,i)})}keys(r){var t=this._ctx;t.keysOnly=!t.isMatch;var n=[];return this.each(function(i,o){n.push(o.key)}).then(function(){return n}).then(r)}primaryKeys(r){var t=this._ctx;if(t.dir==="next"&&Aa(t,!0)&&t.limit>0)return this._read(i=>{var o=Ol(t,t.table.core.schema);return t.table.core.query({trans:i,values:!1,limit:t.limit,query:{index:o,range:t.range}})}).then(({result:i})=>i).then(r);t.keysOnly=!t.isMatch;var n=[];return this.each(function(i,o){n.push(o.primaryKey)}).then(function(){return n}).then(r)}uniqueKeys(r){return this._ctx.unique="unique",this.keys(r)}firstKey(r){return this.limit(1).keys(function(t){return t[0]}).then(r)}lastKey(r){return this.reverse().firstKey(r)}distinct(){var r=this._ctx,t=r.index&&r.table.schema.idxByName[r.index];if(!t||!t.multi)return this;var n={};return Lc(this._ctx,function(i){var o=i.primaryKey.toString(),s=$r(n,o);return n[o]=!0,!s}),this}modify(r){var t=this._ctx;return this._write(n=>{var i;if(typeof r=="function")i=r;else{var o=Ye(r),s=o.length;i=function(v){for(var y=!1,E=0;E<s;++E){var C=o[E],S=r[C];Qn(v,C)!==S&&(an(v,C,S),y=!0)}return y}}let l=t.table.core,{outbound:u,extractKey:d}=l.schema.primaryKey,h=this.db._options.modifyChunkSize||200,f=[],g=0,b=[],w=(v,y)=>{let{failures:E,numFailures:C}=y;g+=v-C;for(let S of Ye(E))f.push(E[S])};return this.clone().primaryKeys().then(v=>{let y=E=>{let C=Math.min(h,v.length-E);return l.getMany({trans:n,keys:v.slice(E,E+C),cache:"immutable"}).then(S=>{let M=[],_=[],D=u?[]:null,H=[];for(let $=0;$<C;++$){let ne=S[$],X={value:Ks(ne),primKey:v[E+$]};i.call(X,X.value,X)!==!1&&(X.value==null?H.push(v[E+$]):!u&&Dt(d(ne),d(X.value))!==0?(H.push(v[E+$]),M.push(X.value)):(_.push(X.value),u&&D.push(v[E+$])))}let T=Aa(t)&&t.limit===1/0&&(typeof r!="function"||r===Sc)&&{index:t.index,range:t.range};return Promise.resolve(M.length>0&&l.mutate({trans:n,type:"add",values:M}).then($=>{for(let ne in $.failures)H.splice(parseInt(ne),1);w(M.length,$)})).then(()=>(_.length>0||T&&typeof r=="object")&&l.mutate({trans:n,type:"put",keys:D,values:_,criteria:T,changeSpec:typeof r!="function"&&r}).then($=>w(_.length,$))).then(()=>(H.length>0||T&&r===Sc)&&l.mutate({trans:n,type:"delete",keys:H,criteria:T}).then($=>w(H.length,$))).then(()=>v.length>E+C&&y(E+h))})};return y(0).then(()=>{if(f.length>0)throw new Nl("Error modifying one or more objects",f,g,b);return v.length})})})}delete(){var r=this._ctx,t=r.range;return Aa(r)&&(r.isPrimKey&&!z9||t.type===3)?this._write(n=>{let{primaryKey:i}=r.table.core.schema,o=t;return r.table.core.count({trans:n,query:{index:i,range:o}}).then(s=>r.table.core.mutate({trans:n,type:"deleteRange",range:o}).then(({failures:l,lastResult:u,results:d,numFailures:h})=>{if(h)throw new Nl("Could not delete some values",Object.keys(l).map(f=>l[f]),s-h);return s-h}))}):this.modify(Sc)}},Sc=(e,r)=>r.value=null;function G9(e){return Qs(Kc.prototype,function(t,n){this.db=e;let i=D0,o=null;if(n)try{i=n()}catch(d){o=d}let s=t._ctx,l=s.table,u=l.hook.reading.fire;this._ctx={table:l,index:s.index,isPrimKey:!s.index||l.schema.primKey.keyPath&&s.index===l.schema.primKey.name,range:i,keysOnly:!1,dir:"next",unique:"",algorithm:null,filter:null,replayFilter:null,justLimit:!0,isMatch:null,offset:0,limit:1/0,error:o,or:s.or,valueMapper:u!==Us?u:null}})}function W9(e,r){return e<r?-1:e===r?0:1}function q9(e,r){return e>r?-1:e===r?0:1}function dr(e,r,t){var n=e instanceof Ul?new e.Collection(e):e;return n._ctx.error=t?new t(r):new TypeError(r),n}function ka(e){return new e.Collection(e,()=>$0("")).limit(0)}function Q9(e){return e==="next"?r=>r.toUpperCase():r=>r.toLowerCase()}function Z9(e){return e==="next"?r=>r.toLowerCase():r=>r.toUpperCase()}function P9(e,r,t,n,i,o){for(var s=Math.min(e.length,n.length),l=-1,u=0;u<s;++u){var d=r[u];if(d!==n[u])return i(e[u],t[u])<0?e.substr(0,u)+t[u]+t.substr(u+1):i(e[u],n[u])<0?e.substr(0,u)+n[u]+t.substr(u+1):l>=0?e.substr(0,l)+r[l]+t.substr(l+1):null;i(e[u],d)<0&&(l=u)}return s<n.length&&o==="next"?e+t.substr(e.length):s<e.length&&o==="prev"?e.substr(0,t.length):l<0?null:e.substr(0,l)+n[l]+t.substr(l+1)}function Dl(e,r,t,n){var i,o,s,l,u,d,h,f=t.length;if(!t.every(v=>typeof v=="string"))return dr(e,M0);function g(v){i=Q9(v),o=Z9(v),s=v==="next"?W9:q9;var y=t.map(function(E){return{lower:o(E),upper:i(E)}}).sort(function(E,C){return s(E.lower,C.lower)});l=y.map(function(E){return E.upper}),u=y.map(function(E){return E.lower}),d=v,h=v==="next"?"":n}g("next");var b=new e.Collection(e,()=>Yi(l[0],u[f-1]+n));b._ondirectionchange=function(v){g(v)};var w=0;return b._addAlgorithm(function(v,y,E){var C=v.key;if(typeof C!="string")return!1;var S=o(C);if(r(S,u,w))return!0;for(var M=null,_=w;_<f;++_){var D=P9(C,S,l[_],u[_],s,d);D===null&&M===null?w=_+1:(M===null||s(M,D)>0)&&(M=D)}return y(M!==null?function(){v.continue(M+h)}:E),!1}),b}function Yi(e,r,t,n){return{type:2,lower:e,upper:r,lowerOpen:t,upperOpen:n}}function $0(e){return{type:1,lower:e,upper:e}}var Ul=class{get Collection(){return this._ctx.table.db.Collection}between(r,t,n,i){n=n!==!1,i=i===!0;try{return this._cmp(r,t)>0||this._cmp(r,t)===0&&(n||i)&&!(n&&i)?ka(this):new this.Collection(this,()=>Yi(r,t,!n,!i))}catch{return dr(this,Un)}}equals(r){return r==null?dr(this,Un):new this.Collection(this,()=>$0(r))}above(r){return r==null?dr(this,Un):new this.Collection(this,()=>Yi(r,void 0,!0))}aboveOrEqual(r){return r==null?dr(this,Un):new this.Collection(this,()=>Yi(r,void 0,!1))}below(r){return r==null?dr(this,Un):new this.Collection(this,()=>Yi(void 0,r,!1,!0))}belowOrEqual(r){return r==null?dr(this,Un):new this.Collection(this,()=>Yi(void 0,r))}startsWith(r){return typeof r!="string"?dr(this,M0):this.between(r,r+Io,!0,!0)}startsWithIgnoreCase(r){return r===""?this.startsWith(r):Dl(this,(t,n)=>t.indexOf(n[0])===0,[r],Io)}equalsIgnoreCase(r){return Dl(this,(t,n)=>t===n[0],[r],"")}anyOfIgnoreCase(){var r=Wn.apply(La,arguments);return r.length===0?ka(this):Dl(this,(t,n)=>n.indexOf(t)!==-1,r,"")}startsWithAnyOfIgnoreCase(){var r=Wn.apply(La,arguments);return r.length===0?ka(this):Dl(this,(t,n)=>n.some(i=>t.indexOf(i)===0),r,Io)}anyOf(){let r=Wn.apply(La,arguments),t=this._cmp;try{r.sort(t)}catch{return dr(this,Un)}if(r.length===0)return ka(this);let n=new this.Collection(this,()=>Yi(r[0],r[r.length-1]));n._ondirectionchange=o=>{t=o==="next"?this._ascending:this._descending,r.sort(t)};let i=0;return n._addAlgorithm((o,s,l)=>{let u=o.key;for(;t(u,r[i])>0;)if(++i,i===r.length)return s(l),!1;return t(u,r[i])===0?!0:(s(()=>{o.continue(r[i])}),!1)}),n}notEqual(r){return this.inAnyRange([[jc,r],[r,this.db._maxKey]],{includeLowers:!1,includeUppers:!1})}noneOf(){let r=Wn.apply(La,arguments);if(r.length===0)return new this.Collection(this);try{r.sort(this._ascending)}catch{return dr(this,Un)}let t=r.reduce((n,i)=>n?n.concat([[n[n.length-1][1],i]]):[[jc,i]],null);return t.push([r[r.length-1],this.db._maxKey]),this.inAnyRange(t,{includeLowers:!1,includeUppers:!1})}inAnyRange(r,t){let n=this._cmp,i=this._ascending,o=this._descending,s=this._min,l=this._max;if(r.length===0)return ka(this);if(!r.every(M=>M[0]!==void 0&&M[1]!==void 0&&i(M[0],M[1])<=0))return dr(this,"First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower",Z.InvalidArgument);let u=!t||t.includeLowers!==!1,d=t&&t.includeUppers===!0;function h(M,_){let D=0,H=M.length;for(;D<H;++D){let T=M[D];if(n(_[0],T[1])<0&&n(_[1],T[0])>0){T[0]=s(T[0],_[0]),T[1]=l(T[1],_[1]);break}}return D===H&&M.push(_),M}let f=i;function g(M,_){return f(M[0],_[0])}let b;try{b=r.reduce(h,[]),b.sort(g)}catch{return dr(this,Un)}let w=0,v=d?M=>i(M,b[w][1])>0:M=>i(M,b[w][1])>=0,y=u?M=>o(M,b[w][0])>0:M=>o(M,b[w][0])>=0;function E(M){return!v(M)&&!y(M)}let C=v,S=new this.Collection(this,()=>Yi(b[0][0],b[b.length-1][1],!u,!d));return S._ondirectionchange=M=>{M==="next"?(C=v,f=i):(C=y,f=o),b.sort(g)},S._addAlgorithm((M,_,D)=>{for(var H=M.key;C(H);)if(++w,w===b.length)return _(D),!1;return E(H)?!0:(this._cmp(H,b[w][1])===0||this._cmp(H,b[w][0])===0||_(()=>{f===i?M.continue(b[w][0]):M.continue(b[w][1])}),!1)}),S}startsWithAnyOf(){let r=Wn.apply(La,arguments);return r.every(t=>typeof t=="string")?r.length===0?ka(this):this.inAnyRange(r.map(t=>[t,t+Io])):dr(this,"startsWithAnyOf() only works with strings")}};function J9(e){return Qs(Ul.prototype,function(t,n,i){this.db=e,this._ctx={table:t,index:n===":id"?null:n,or:i};let o=e._deps.indexedDB;if(!o)throw new Z.MissingAPI;this._cmp=this._ascending=o.cmp.bind(o),this._descending=(s,l)=>o.cmp(l,s),this._max=(s,l)=>o.cmp(s,l)>0?s:l,this._min=(s,l)=>o.cmp(s,l)<0?s:l,this._IDBKeyRange=e._deps.IDBKeyRange})}function En(e){return ke(function(r){return Vs(r),e(r.target.error),!1})}function Vs(e){e.stopPropagation&&e.stopPropagation(),e.preventDefault&&e.preventDefault()}var zs="storagemutated",Ui="x-storagemutated-1",qi=qs(null,zs),Uc=class{_lock(){return $s(!W.global),++this._reculock,this._reculock===1&&!W.global&&(W.lockOwnerFor=this),this}_unlock(){if($s(!W.global),--this._reculock===0)for(W.global||(W.lockOwnerFor=null);this._blockedFuncs.length>0&&!this._locked();){var r=this._blockedFuncs.shift();try{Ha(r[1],r[0])}catch{}}return this}_locked(){return this._reculock&&W.lockOwnerFor!==this}create(r){if(!this.mode)return this;let t=this.db.idbdb,n=this.db._state.dbOpenError;if($s(!this.idbtrans),!r&&!t)switch(n&&n.name){case"DatabaseClosedError":throw new Z.DatabaseClosed(n);case"MissingAPIError":throw new Z.MissingAPI(n.message,n);default:throw new Z.OpenFailed(n)}if(!this.active)throw new Z.TransactionInactive;return $s(this._completion._state===null),r=this.idbtrans=r||(this.db.core?this.db.core.transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability}):t.transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability})),r.onerror=ke(i=>{Vs(i),this._reject(r.error)}),r.onabort=ke(i=>{Vs(i),this.active&&this._reject(new Z.Abort(r.error)),this.active=!1,this.on("abort").fire(i)}),r.oncomplete=ke(()=>{this.active=!1,this._resolve(),"mutatedParts"in r&&qi.storagemutated.fire(r.mutatedParts)}),this}_promise(r,t,n){if(r==="readwrite"&&this.mode!=="readwrite")return qe(new Z.ReadOnly("Transaction is readonly"));if(!this.active)return qe(new Z.TransactionInactive);if(this._locked())return new V((o,s)=>{this._blockedFuncs.push([()=>{this._promise(r,t,n).then(o,s)},W])});if(n)return Gi(()=>{var o=new V((s,l)=>{this._lock();let u=t(s,l,this);u&&u.then&&u.then(s,l)});return o.finally(()=>this._unlock()),o._lib=!0,o});var i=new V((o,s)=>{var l=t(o,s,this);l&&l.then&&l.then(o,s)});return i._lib=!0,i}_root(){return this.parent?this.parent._root():this}waitFor(r){var t=this._root();let n=V.resolve(r);if(t._waitingFor)t._waitingFor=t._waitingFor.then(()=>n);else{t._waitingFor=n,t._waitingQueue=[];var i=t.idbtrans.objectStore(t.storeNames[0]);(function s(){for(++t._spinCount;t._waitingQueue.length;)t._waitingQueue.shift()();t._waitingFor&&(i.get(-1/0).onsuccess=s)})()}var o=t._waitingFor;return new V((s,l)=>{n.then(u=>t._waitingQueue.push(ke(s.bind(null,u))),u=>t._waitingQueue.push(ke(l.bind(null,u)))).finally(()=>{t._waitingFor===o&&(t._waitingFor=null)})})}abort(){this.active&&(this.active=!1,this.idbtrans&&this.idbtrans.abort(),this._reject(new Z.Abort))}table(r){let t=this._memoizedTables||(this._memoizedTables={});if($r(t,r))return t[r];let n=this.schema[r];if(!n)throw new Z.NotFound("Table "+r+" not part of transaction");let i=new this.db.Table(r,n,this);return i.core=this.db.core.table(r),t[r]=i,i}};function X9(e){return Qs(Uc.prototype,function(t,n,i,o,s){this.db=e,this.mode=t,this.storeNames=n,this.schema=i,this.chromeTransactionDurability=o,this.idbtrans=null,this.on=qs(this,"complete","error","abort"),this.parent=s||null,this.active=!0,this._reculock=0,this._blockedFuncs=[],this._resolve=null,this._reject=null,this._waitingFor=null,this._waitingQueue=null,this._spinCount=0,this._completion=new V((l,u)=>{this._resolve=l,this._reject=u}),this._completion.then(()=>{this.active=!1,this.on.complete.fire()},l=>{var u=this.active;return this.active=!1,this.on.error.fire(l),this.parent?this.parent._reject(l):u&&this.idbtrans&&this.idbtrans.abort(),qe(l)})})}function Gc(e,r,t,n,i,o,s){return{name:e,keyPath:r,unique:t,multi:n,auto:i,compound:o,src:(t&&!s?"&":"")+(n?"*":"")+(i?"++":"")+H0(r)}}function H0(e){return typeof e=="string"?e:e?"["+[].join.call(e,"+")+"]":""}function I0(e,r,t){return{name:e,primKey:r,indexes:t,mappedClass:null,idxByName:d0(t,n=>[n.name,n])}}function e6(e){return e.length===1?e[0]:e}var js=e=>{try{return e.only([[]]),js=()=>[[]],[[]]}catch{return js=()=>Io,Io}};function Wc(e){return e==null?()=>{}:typeof e=="string"?t6(e):r=>Qn(r,e)}function t6(e){return e.split(".").length===1?t=>t[e]:t=>Qn(t,e)}function a0(e){return[].slice.call(e)}var r6=0;function _s(e){return e==null?":id":typeof e=="string"?e:`[${e.join("+")}]`}function n6(e,r,t){function n(h,f){let g=a0(h.objectStoreNames);return{schema:{name:h.name,tables:g.map(b=>f.objectStore(b)).map(b=>{let{keyPath:w,autoIncrement:v}=b,y=At(w),E=w==null,C={},S={name:b.name,primaryKey:{name:null,isPrimaryKey:!0,outbound:E,compound:y,keyPath:w,autoIncrement:v,unique:!0,extractKey:Wc(w)},indexes:a0(b.indexNames).map(M=>b.index(M)).map(M=>{let{name:_,unique:D,multiEntry:H,keyPath:T}=M,$=At(T),ne={name:_,compound:$,keyPath:T,unique:D,multiEntry:H,extractKey:Wc(T)};return C[_s(T)]=ne,ne}),getIndexByKeyPath:M=>C[_s(M)]};return C[":id"]=S.primaryKey,w!=null&&(C[_s(w)]=S.primaryKey),S})},hasGetAll:g.length>0&&"getAll"in f.objectStore(g[0])&&!(typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604)}}function i(h){if(h.type===3)return null;if(h.type===4)throw new Error("Cannot convert never type to IDBKeyRange");let{lower:f,upper:g,lowerOpen:b,upperOpen:w}=h;return f===void 0?g===void 0?null:r.upperBound(g,!!w):g===void 0?r.lowerBound(f,!!b):r.bound(f,g,!!b,!!w)}function o(h){let f=h.name;function g({trans:v,type:y,keys:E,values:C,range:S}){return new Promise((M,_)=>{M=ke(M);let D=v.objectStore(f),H=D.keyPath==null,T=y==="put"||y==="add";if(!T&&y!=="delete"&&y!=="deleteRange")throw new Error("Invalid operation type: "+y);let{length:$}=E||C||{length:1};if(E&&C&&E.length!==C.length)throw new Error("Given keys array must have same length as given values array.");if($===0)return M({numFailures:0,failures:{},results:[],lastResult:void 0});let ne,X=[],Et=[],J=0,ee=ye=>{++J,Vs(ye)};if(y==="deleteRange"){if(S.type===4)return M({numFailures:J,failures:Et,results:[],lastResult:void 0});S.type===3?X.push(ne=D.clear()):X.push(ne=D.delete(i(S)))}else{let[ye,Ge]=T?H?[C,E]:[C,null]:[E,null];if(T)for(let De=0;De<$;++De)X.push(ne=Ge&&Ge[De]!==void 0?D[y](ye[De],Ge[De]):D[y](ye[De])),ne.onerror=ee;else for(let De=0;De<$;++De)X.push(ne=D[y](ye[De])),ne.onerror=ee}let pe=ye=>{let Ge=ye.target.result;X.forEach((De,bt)=>De.error!=null&&(Et[bt]=De.error)),M({numFailures:J,failures:Et,results:y==="delete"?E:X.map(De=>De.result),lastResult:Ge})};ne.onerror=ye=>{ee(ye),pe(ye)},ne.onsuccess=pe})}function b({trans:v,values:y,query:E,reverse:C,unique:S}){return new Promise((M,_)=>{M=ke(M);let{index:D,range:H}=E,T=v.objectStore(f),$=D.isPrimaryKey?T:T.index(D.name),ne=C?S?"prevunique":"prev":S?"nextunique":"next",X=y||!("openKeyCursor"in $)?$.openCursor(i(H),ne):$.openKeyCursor(i(H),ne);X.onerror=En(_),X.onsuccess=ke(Et=>{let J=X.result;if(!J){M(null);return}J.___id=++r6,J.done=!1;let ee=J.continue.bind(J),pe=J.continuePrimaryKey;pe&&(pe=pe.bind(J));let ye=J.advance.bind(J),Ge=()=>{throw new Error("Cursor not started")},De=()=>{throw new Error("Cursor not stopped")};J.trans=v,J.stop=J.continue=J.continuePrimaryKey=J.advance=Ge,J.fail=ke(_),J.next=function(){let bt=1;return this.start(()=>bt--?this.continue():this.stop()).then(()=>this)},J.start=bt=>{let Wu=new Promise((Lr,Ao)=>{Lr=ke(Lr),X.onerror=En(Ao),J.fail=Ao,J.stop=oa=>{J.stop=J.continue=J.continuePrimaryKey=J.advance=De,Lr(oa)}}),kr=()=>{if(X.result)try{bt()}catch(Lr){J.fail(Lr)}else J.done=!0,J.start=()=>{throw new Error("Cursor behind last entry")},J.stop()};return X.onsuccess=ke(Lr=>{X.onsuccess=kr,kr()}),J.continue=ee,J.continuePrimaryKey=pe,J.advance=ye,kr(),Wu},M(J)},_)})}function w(v){return y=>new Promise((E,C)=>{E=ke(E);let{trans:S,values:M,limit:_,query:D}=y,H=_===1/0?void 0:_,{index:T,range:$}=D,ne=S.objectStore(f),X=T.isPrimaryKey?ne:ne.index(T.name),Et=i($);if(_===0)return E({result:[]});if(v){let J=M?X.getAll(Et,H):X.getAllKeys(Et,H);J.onsuccess=ee=>E({result:ee.target.result}),J.onerror=En(C)}else{let J=0,ee=M||!("openKeyCursor"in X)?X.openCursor(Et):X.openKeyCursor(Et),pe=[];ee.onsuccess=ye=>{let Ge=ee.result;if(!Ge)return E({result:pe});if(pe.push(M?Ge.value:Ge.primaryKey),++J===_)return E({result:pe});Ge.continue()},ee.onerror=En(C)}})}return{name:f,schema:h,mutate:g,getMany({trans:v,keys:y}){return new Promise((E,C)=>{E=ke(E);let S=v.objectStore(f),M=y.length,_=new Array(M),D=0,H=0,T,$=X=>{let Et=X.target;(_[Et._pos]=Et.result)!=null,++H===D&&E(_)},ne=En(C);for(let X=0;X<M;++X)y[X]!=null&&(T=S.get(y[X]),T._pos=X,T.onsuccess=$,T.onerror=ne,++D);D===0&&E(_)})},get({trans:v,key:y}){return new Promise((E,C)=>{E=ke(E);let M=v.objectStore(f).get(y);M.onsuccess=_=>E(_.target.result),M.onerror=En(C)})},query:w(l),openCursor:b,count({query:v,trans:y}){let{index:E,range:C}=v;return new Promise((S,M)=>{let _=y.objectStore(f),D=E.isPrimaryKey?_:_.index(E.name),H=i(C),T=H?D.count(H):D.count();T.onsuccess=ke($=>S($.target.result)),T.onerror=En(M)})}}}let{schema:s,hasGetAll:l}=n(e,t),u=s.tables.map(h=>o(h)),d={};return u.forEach(h=>d[h.name]=h),{stack:"dbcore",transaction:e.transaction.bind(e),table(h){if(!d[h])throw new Error(`Table '${h}' not found`);return d[h]},MIN_KEY:-1/0,MAX_KEY:js(r),schema:s}}function i6(e,r){return r.reduce((t,{create:n})=>({...t,...n(t)}),e)}function o6(e,r,{IDBKeyRange:t,indexedDB:n},i){return{dbcore:i6(n6(r,t,i),e.dbcore)}}function pp({_novip:e},r){let t=r.db,n=o6(e._middlewares,t,e._deps,r);e.core=n.dbcore,e.tables.forEach(i=>{let o=i.name;e.core.schema.tables.some(s=>s.name===o)&&(i.core=e.core.table(o),e[o]instanceof e.Table&&(e[o].core=i.core))})}function Gl({_novip:e},r,t,n){t.forEach(i=>{let o=n[i];r.forEach(s=>{let l=np(s,i);(!l||"value"in l&&l.value===void 0)&&(s===e.Transaction.prototype||s instanceof e.Transaction?Zn(s,i,{get(){return this.table(i)},set(u){u0(this,i,{value:u,writable:!0,configurable:!0,enumerable:!0})}}):s[i]=new e.Table(i,o))})})}function qc({_novip:e},r){r.forEach(t=>{for(let n in t)t[n]instanceof e.Table&&delete t[n]})}function a6(e,r){return e._cfg.version-r._cfg.version}function s6(e,r,t,n){let i=e._dbSchema,o=e._createTransaction("readwrite",e._storeNames,i);o.create(t),o._completion.catch(n);let s=o._reject.bind(o),l=W.transless||W;Gi(()=>{W.trans=o,W.transless=l,r===0?(Ye(i).forEach(u=>{dp(t,u,i[u].primKey,i[u].indexes)}),pp(e,t),V.follow(()=>e.on.populate.fire(o)).catch(s)):l6(e,r,o,t).catch(s)})}function l6({_novip:e},r,t,n){let i=[],o=e._versions,s=e._dbSchema=hp(e,e.idbdb,n),l=!1;o.filter(h=>h._cfg.version>=r).forEach(h=>{i.push(()=>{let f=s,g=h._cfg.dbschema;Zc(e,f,n),Zc(e,g,n),s=e._dbSchema=g;let b=R0(f,g);b.add.forEach(v=>{dp(n,v[0],v[1].primKey,v[1].indexes)}),b.change.forEach(v=>{if(v.recreate)throw new Z.Upgrade("Not yet support for changing primary key");{let y=n.objectStore(v.name);v.add.forEach(E=>Qc(y,E)),v.change.forEach(E=>{y.deleteIndex(E.name),Qc(y,E)}),v.del.forEach(E=>y.deleteIndex(E))}});let w=h._cfg.contentUpgrade;if(w&&h._cfg.version>r){pp(e,n),t._memoizedTables={},l=!0;let v=h0(g);b.del.forEach(S=>{v[S]=f[S]}),qc(e,[e.Transaction.prototype]),Gl(e,[e.Transaction.prototype],Ye(v),v),t.schema=v;let y=ip(w);y&&$a();let E,C=V.follow(()=>{if(E=w(t),E&&y){var S=Pn.bind(null,null);E.then(S,S)}});return E&&typeof E.then=="function"?V.resolve(E):C.then(()=>E)}}),i.push(f=>{if(!l||!V9){let g=h._cfg.dbschema;c6(g,f)}qc(e,[e.Transaction.prototype]),Gl(e,[e.Transaction.prototype],e._storeNames,e._dbSchema),t.schema=e._dbSchema})});function d(){return i.length?V.resolve(i.shift()(t.idbtrans)).then(d):V.resolve()}return d().then(()=>{u6(s,n)})}function R0(e,r){let t={del:[],add:[],change:[]},n;for(n in e)r[n]||t.del.push(n);for(n in r){let i=e[n],o=r[n];if(!i)t.add.push([n,o]);else{let s={name:n,def:o,recreate:!1,del:[],add:[],change:[]};if(""+(i.primKey.keyPath||"")!=""+(o.primKey.keyPath||"")||i.primKey.auto!==o.primKey.auto&&!Pl)s.recreate=!0,t.change.push(s);else{let l=i.idxByName,u=o.idxByName,d;for(d in l)u[d]||s.del.push(d);for(d in u){let h=l[d],f=u[d];h?h.src!==f.src&&s.change.push(f):s.add.push(f)}(s.del.length>0||s.add.length>0||s.change.length>0)&&t.change.push(s)}}}return t}function dp(e,r,t,n){let i=e.db.createObjectStore(r,t.keyPath?{keyPath:t.keyPath,autoIncrement:t.auto}:{autoIncrement:t.auto});return n.forEach(o=>Qc(i,o)),i}function u6(e,r){Ye(e).forEach(t=>{r.db.objectStoreNames.contains(t)||dp(r,t,e[t].primKey,e[t].indexes)})}function c6(e,r){[].slice.call(r.db.objectStoreNames).forEach(t=>e[t]==null&&r.db.deleteObjectStore(t))}function Qc(e,r){e.createIndex(r.name,r.keyPath,{unique:r.unique,multiEntry:r.multi})}function hp(e,r,t){let n={};return Ql(r.objectStoreNames,0).forEach(o=>{let s=t.objectStore(o),l=s.keyPath,u=Gc(H0(l),l||"",!1,!1,!!s.autoIncrement,l&&typeof l!="string",!0),d=[];for(let f=0;f<s.indexNames.length;++f){let g=s.index(s.indexNames[f]);l=g.keyPath;var h=Gc(g.name,l,!!g.unique,!!g.multiEntry,!1,l&&typeof l!="string",!1);d.push(h)}n[o]=I0(o,u,d)}),n}function p6({_novip:e},r,t){e.verno=r.version/10;let n=e._dbSchema=hp(e,r,t);e._storeNames=Ql(r.objectStoreNames,0),Gl(e,[e._allTables],Ye(n),n)}function d6(e,r){let t=hp(e,e.idbdb,r),n=R0(t,e._dbSchema);return!(n.add.length||n.change.some(i=>i.add.length||i.change.length))}function Zc({_novip:e},r,t){let n=t.db.objectStoreNames;for(let i=0;i<n.length;++i){let o=n[i],s=t.objectStore(o);e._hasGetAll="getAll"in s;for(let l=0;l<s.indexNames.length;++l){let u=s.indexNames[l],d=s.index(u).keyPath,h=typeof d=="string"?d:"["+Ql(d).join("+")+"]";if(r[o]){let f=r[o].idxByName[h];f&&(f.name=u,delete r[o].idxByName[h],r[o].idxByName[u]=f)}}}typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&ve.WorkerGlobalScope&&ve instanceof ve.WorkerGlobalScope&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604&&(e._hasGetAll=!1)}function h6(e){return e.split(",").map((r,t)=>{r=r.trim();let n=r.replace(/([&*]|\+\+)/g,""),i=/^\[/.test(n)?n.match(/^\[(.*)\]$/)[1].split("+"):n;return Gc(n,i||null,/\&/.test(r),/\*/.test(r),/\+\+/.test(r),At(i),t===0)})}var Pc=class{_parseStoresSpec(r,t){Ye(r).forEach(n=>{if(r[n]!==null){var i=h6(r[n]),o=i.shift();if(o.multi)throw new Z.Schema("Primary key cannot be multi-valued");i.forEach(s=>{if(s.auto)throw new Z.Schema("Only primary key can be marked as autoIncrement (++)");if(!s.keyPath)throw new Z.Schema("Index must have a name and cannot be an empty string")}),t[n]=I0(n,o,i)}})}stores(r){let t=this.db;this._cfg.storesSource=this._cfg.storesSource?$t(this._cfg.storesSource,r):r;let n=t._versions,i={},o={};return n.forEach(s=>{$t(i,s._cfg.storesSource),o=s._cfg.dbschema={},s._parseStoresSpec(i,o)}),t._dbSchema=o,qc(t,[t._allTables,t,t.Transaction.prototype]),Gl(t,[t._allTables,t,t.Transaction.prototype,this._cfg.tables],Ye(o),o),t._storeNames=Ye(o),this}upgrade(r){return this._cfg.contentUpgrade=sp(this._cfg.contentUpgrade||fe,r),this}};function f6(e){return Qs(Pc.prototype,function(t){this.db=e,this._cfg={version:t,storesSource:null,dbschema:{},tables:{},contentUpgrade:null}})}function fp(e,r){let t=e._dbNamesDB;return t||(t=e._dbNamesDB=new Ma(Jl,{addons:[],indexedDB:e,IDBKeyRange:r}),t.version(1).stores({dbnames:"name"})),t.table("dbnames")}function mp(e){return e&&typeof e.databases=="function"}function m6({indexedDB:e,IDBKeyRange:r}){return mp(e)?Promise.resolve(e.databases()).then(t=>t.map(n=>n.name).filter(n=>n!==Jl)):fp(e,r).toCollection().primaryKeys()}function g6({indexedDB:e,IDBKeyRange:r},t){!mp(e)&&t!==Jl&&fp(e,r).put({name:t}).catch(fe)}function b6({indexedDB:e,IDBKeyRange:r},t){!mp(e)&&t!==Jl&&fp(e,r).delete(t).catch(fe)}function Jc(e){return Gi(function(){return W.letThrough=!0,e()})}function v6(){var e=!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent);if(!e||!indexedDB.databases)return Promise.resolve();var r;return new Promise(function(t){var n=function(){return indexedDB.databases().finally(t)};r=setInterval(n,100),n()}).finally(function(){return clearInterval(r)})}function x6(e){let r=e._state,{indexedDB:t}=e._deps;if(r.isBeingOpened||e.idbdb)return r.dbReadyPromise.then(()=>r.dbOpenError?qe(r.dbOpenError):e);wn&&(r.openCanceller._stackHolder=No()),r.isBeingOpened=!0,r.dbOpenError=null,r.openComplete=!1;let n=r.openCanceller;function i(){if(r.openCanceller!==n)throw new Z.DatabaseClosed("db.open() was cancelled")}let o=r.dbReadyResolve,s=null,l=!1;return V.race([n,(typeof navigator>"u"?V.resolve():v6()).then(()=>new V((u,d)=>{if(i(),!t)throw new Z.MissingAPI;let h=e.name,f=r.autoSchema?t.open(h):t.open(h,Math.round(e.verno*10));if(!f)throw new Z.MissingAPI;f.onerror=En(d),f.onblocked=ke(e._fireOnBlocked),f.onupgradeneeded=ke(g=>{if(s=f.transaction,r.autoSchema&&!e._options.allowEmptyDB){f.onerror=Vs,s.abort(),f.result.close();let w=t.deleteDatabase(h);w.onsuccess=w.onerror=ke(()=>{d(new Z.NoSuchDatabase(`Database ${h} doesnt exist`))})}else{s.onerror=En(d);var b=g.oldVersion>Math.pow(2,62)?0:g.oldVersion;l=b<1,e._novip.idbdb=f.result,s6(e,b/10,s,d)}},d),f.onsuccess=ke(()=>{s=null;let g=e._novip.idbdb=f.result,b=Ql(g.objectStoreNames);if(b.length>0)try{let w=g.transaction(e6(b),"readonly");r.autoSchema?p6(e,g,w):(Zc(e,e._dbSchema,w),d6(e,w)||console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Some queries may fail.")),pp(e,w)}catch{}Rs.push(e),g.onversionchange=ke(w=>{r.vcFired=!0,e.on("versionchange").fire(w)}),g.onclose=ke(w=>{e.on("close").fire(w)}),l&&g6(e._deps,h),u()},d)}))]).then(()=>(i(),r.onReadyBeingFired=[],V.resolve(Jc(()=>e.on.ready.fire(e.vip))).then(function u(){if(r.onReadyBeingFired.length>0){let d=r.onReadyBeingFired.reduce(sp,fe);return r.onReadyBeingFired=[],V.resolve(Jc(()=>d(e.vip))).then(u)}}))).finally(()=>{r.onReadyBeingFired=null,r.isBeingOpened=!1}).then(()=>e).catch(u=>{r.dbOpenError=u;try{s&&s.abort()}catch{}return n===r.openCanceller&&e._close(),qe(u)}).finally(()=>{r.openComplete=!0,o()})}function Xc(e){var r=s=>e.next(s),t=s=>e.throw(s),n=o(r),i=o(t);function o(s){return l=>{var u=s(l),d=u.value;return u.done?d:!d||typeof d.then!="function"?At(d)?Promise.all(d).then(n,i):n(d):d.then(n,i)}}return o(r)()}function y6(e,r,t){var n=arguments.length;if(n<2)throw new Z.InvalidArgument("Too few arguments");for(var i=new Array(n-1);--n;)i[n-1]=arguments[n];t=i.pop();var o=f0(i);return[e,o,t]}function _0(e,r,t,n,i){return V.resolve().then(()=>{let o=W.transless||W,s=e._createTransaction(r,t,e._dbSchema,n),l={trans:s,transless:o};if(n)s.idbtrans=n.idbtrans;else try{s.create(),e._state.PR1398_maxLoop=3}catch(f){return f.name===ap.InvalidState&&e.isOpen()&&--e._state.PR1398_maxLoop>0?(console.warn("Dexie: Need to reopen db"),e._close(),e.open().then(()=>_0(e,r,t,null,i))):qe(f)}let u=ip(i);u&&$a();let d,h=V.follow(()=>{if(d=i.call(s,s),d)if(u){var f=Pn.bind(null,null);d.then(f,f)}else typeof d.next=="function"&&typeof d.throw=="function"&&(d=Xc(d))},l);return(d&&typeof d.then=="function"?V.resolve(d).then(f=>s.active?f:qe(new Z.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))):h.then(()=>d)).then(f=>(n&&s._resolve(),s._completion.then(()=>f))).catch(f=>(s._reject(f),qe(f)))})}function $l(e,r,t){let n=At(e)?e.slice():[e];for(let i=0;i<t;++i)n.push(r);return n}function E6(e){return{...e,table(r){let t=e.table(r),{schema:n}=t,i={},o=[];function s(g,b,w){let v=_s(g),y=i[v]=i[v]||[],E=g==null?0:typeof g=="string"?1:g.length,C=b>0,S={...w,isVirtual:C,keyTail:b,keyLength:E,extractKey:Wc(g),unique:!C&&w.unique};if(y.push(S),S.isPrimaryKey||o.push(S),E>1){let M=E===2?g[0]:g.slice(0,E-1);s(M,b+1,w)}return y.sort((M,_)=>M.keyTail-_.keyTail),S}let l=s(n.primaryKey.keyPath,0,n.primaryKey);i[":id"]=[l];for(let g of n.indexes)s(g.keyPath,0,g);function u(g){let b=i[_s(g)];return b&&b[0]}function d(g,b){return{type:g.type===1?2:g.type,lower:$l(g.lower,g.lowerOpen?e.MAX_KEY:e.MIN_KEY,b),lowerOpen:!0,upper:$l(g.upper,g.upperOpen?e.MIN_KEY:e.MAX_KEY,b),upperOpen:!0}}function h(g){let b=g.query.index;return b.isVirtual?{...g,query:{index:b,range:d(g.query.range,b.keyTail)}}:g}return{...t,schema:{...n,primaryKey:l,indexes:o,getIndexByKeyPath:u},count(g){return t.count(h(g))},query(g){return t.query(h(g))},openCursor(g){let{keyTail:b,isVirtual:w,keyLength:v}=g.query.index;if(!w)return t.openCursor(g);function y(E){function C(M){M!=null?E.continue($l(M,g.reverse?e.MAX_KEY:e.MIN_KEY,b)):g.unique?E.continue(E.key.slice(0,v).concat(g.reverse?e.MIN_KEY:e.MAX_KEY,b)):E.continue()}return Object.create(E,{continue:{value:C},continuePrimaryKey:{value(M,_){E.continuePrimaryKey($l(M,e.MAX_KEY,b),_)}},primaryKey:{get(){return E.primaryKey}},key:{get(){let M=E.key;return v===1?M[0]:M.slice(0,v)}},value:{get(){return E.value}}})}return t.openCursor(h(g)).then(E=>E&&y(E))}}}}}var w6={stack:"dbcore",name:"VirtualIndexMiddleware",level:1,create:E6};function gp(e,r,t,n){return t=t||{},n=n||"",Ye(e).forEach(i=>{if(!$r(r,i))t[n+i]=void 0;else{var o=e[i],s=r[i];if(typeof o=="object"&&typeof s=="object"&&o&&s){let l=Tc(o),u=Tc(s);l!==u?t[n+i]=r[i]:l==="Object"?gp(o,s,t,n+i+"."):o!==s&&(t[n+i]=r[i])}else o!==s&&(t[n+i]=r[i])}}),Ye(r).forEach(i=>{$r(e,i)||(t[n+i]=r[i])}),t}function C6(e,r){return r.type==="delete"?r.keys:r.keys||r.values.map(e.extractKey)}var A6={stack:"dbcore",name:"HooksMiddleware",level:2,create:e=>({...e,table(r){let t=e.table(r),{primaryKey:n}=t.schema;return{...t,mutate(o){let s=W.trans,{deleting:l,creating:u,updating:d}=s.table(r).hook;switch(o.type){case"add":if(u.fire===fe)break;return s._promise("readwrite",()=>h(o),!0);case"put":if(u.fire===fe&&d.fire===fe)break;return s._promise("readwrite",()=>h(o),!0);case"delete":if(l.fire===fe)break;return s._promise("readwrite",()=>h(o),!0);case"deleteRange":if(l.fire===fe)break;return s._promise("readwrite",()=>f(o),!0)}return t.mutate(o);function h(b){let w=W.trans,v=b.keys||C6(n,b);if(!v)throw new Error("Keys missing");return b=b.type==="add"||b.type==="put"?{...b,keys:v}:{...b},b.type!=="delete"&&(b.values=[...b.values]),b.keys&&(b.keys=[...b.keys]),k6(t,b,v).then(y=>{let E=v.map((C,S)=>{let M=y[S],_={onerror:null,onsuccess:null};if(b.type==="delete")l.fire.call(_,C,M,w);else if(b.type==="add"||M===void 0){let D=u.fire.call(_,C,b.values[S],w);C==null&&D!=null&&(C=D,b.keys[S]=C,n.outbound||an(b.values[S],n.keyPath,C))}else{let D=gp(M,b.values[S]),H=d.fire.call(_,D,C,M,w);if(H){let T=b.values[S];Object.keys(H).forEach($=>{$r(T,$)?T[$]=H[$]:an(T,$,H[$])})}}return _});return t.mutate(b).then(({failures:C,results:S,numFailures:M,lastResult:_})=>{for(let D=0;D<v.length;++D){let H=S?S[D]:v[D],T=E[D];H==null?T.onerror&&T.onerror(C[D]):T.onsuccess&&T.onsuccess(b.type==="put"&&y[D]?b.values[D]:H)}return{failures:C,results:S,numFailures:M,lastResult:_}}).catch(C=>(E.forEach(S=>S.onerror&&S.onerror(C)),Promise.reject(C)))})}function f(b){return g(b.trans,b.range,1e4)}function g(b,w,v){return t.query({trans:b,values:!1,query:{index:n,range:w},limit:v}).then(({result:y})=>h({type:"delete",keys:y,trans:b}).then(E=>E.numFailures>0?Promise.reject(E.failures[0]):y.length<v?{failures:[],numFailures:0,lastResult:void 0}:g(b,{...w,lower:y[y.length-1],lowerOpen:!0},v)))}}}}})};function k6(e,r,t){return r.type==="add"?Promise.resolve([]):e.getMany({trans:r.trans,keys:t,cache:"immutable"})}function B0(e,r,t){try{if(!r||r.keys.length<e.length)return null;let n=[];for(let i=0,o=0;i<r.keys.length&&o<e.length;++i)Dt(r.keys[i],e[o])===0&&(n.push(t?Ks(r.values[i]):r.values[i]),++o);return n.length===e.length?n:null}catch{return null}}var L6={stack:"dbcore",level:-1,create:e=>({table:r=>{let t=e.table(r);return{...t,getMany:n=>{if(!n.cache)return t.getMany(n);let i=B0(n.keys,n.trans._cache,n.cache==="clone");return i?V.resolve(i):t.getMany(n).then(o=>(n.trans._cache={keys:n.keys,values:n.cache==="clone"?Ks(o):o},o))},mutate:n=>(n.type!=="add"&&(n.trans._cache=null),t.mutate(n))}}})};function bp(e){return!("from"in e)}var Gn=function(e,r){if(this)$t(this,arguments.length?{d:1,from:e,to:arguments.length>1?r:e}:{d:0});else{let t=new Gn;return e&&"d"in e&&$t(t,e),t}};Sa(Gn.prototype,{add(e){return Wl(this,e),this},addKey(e){return Ys(this,e,e),this},addKeys(e){return e.forEach(r=>Ys(this,r,r)),this},[Dc](){return ep(this)}});function Ys(e,r,t){let n=Dt(r,t);if(isNaN(n))return;if(n>0)throw RangeError();if(bp(e))return $t(e,{from:r,to:t,d:1});let i=e.l,o=e.r;if(Dt(t,e.from)<0)return i?Ys(i,r,t):e.l={from:r,to:t,d:1,l:null,r:null},s0(e);if(Dt(r,e.to)>0)return o?Ys(o,r,t):e.r={from:r,to:t,d:1,l:null,r:null},s0(e);Dt(r,e.from)<0&&(e.from=r,e.l=null,e.d=o?o.d+1:1),Dt(t,e.to)>0&&(e.to=t,e.r=null,e.d=e.l?e.l.d+1:1);let s=!e.r;i&&!e.l&&Wl(e,i),o&&s&&Wl(e,o)}function Wl(e,r){function t(n,{from:i,to:o,l:s,r:l}){Ys(n,i,o),s&&t(n,s),l&&t(n,l)}bp(r)||t(e,r)}function F6(e,r){let t=ep(r),n=t.next();if(n.done)return!1;let i=n.value,o=ep(e),s=o.next(i.from),l=s.value;for(;!n.done&&!s.done;){if(Dt(l.from,i.to)<=0&&Dt(l.to,i.from)>=0)return!0;Dt(i.from,l.from)<0?i=(n=t.next(l.from)).value:l=(s=o.next(i.from)).value}return!1}function ep(e){let r=bp(e)?null:{s:0,n:e};return{next(t){let n=arguments.length>0;for(;r;)switch(r.s){case 0:if(r.s=1,n)for(;r.n.l&&Dt(t,r.n.from)<0;)r={up:r,n:r.n.l,s:1};else for(;r.n.l;)r={up:r,n:r.n.l,s:1};case 1:if(r.s=2,!n||Dt(t,r.n.to)<=0)return{value:r.n,done:!1};case 2:if(r.n.r){r.s=3,r={up:r,n:r.n.r,s:0};continue}case 3:r=r.up}return{done:!0}}}}function s0(e){var r,t;let n=(((r=e.r)===null||r===void 0?void 0:r.d)||0)-(((t=e.l)===null||t===void 0?void 0:t.d)||0),i=n>1?"r":n<-1?"l":"";if(i){let o=i==="r"?"l":"r",s={...e},l=e[i];e.from=l.from,e.to=l.to,e[i]=l[i],s[i]=l[o],e[o]=s,s.d=l0(s)}e.d=l0(e)}function l0({r:e,l:r}){return(e?r?Math.max(e.d,r.d):e.d:r?r.d:0)+1}var S6={stack:"dbcore",level:0,create:e=>{let r=e.schema.name,t=new Gn(e.MIN_KEY,e.MAX_KEY);return{...e,table:n=>{let i=e.table(n),{schema:o}=i,{primaryKey:s}=o,{extractKey:l,outbound:u}=s,d={...i,mutate:g=>{let b=g.trans,w=b.mutatedParts||(b.mutatedParts={}),v=D=>{let H=`idb://${r}/${n}/${D}`;return w[H]||(w[H]=new Gn)},y=v(""),E=v(":dels"),{type:C}=g,[S,M]=g.type==="deleteRange"?[g.range]:g.type==="delete"?[g.keys]:g.values.length<50?[[],g.values]:[],_=g.trans._cache;return i.mutate(g).then(D=>{if(At(S)){C!=="delete"&&(S=D.results),y.addKeys(S);let H=B0(S,_);!H&&C!=="add"&&E.addKeys(S),(H||M)&&M6(v,o,H,M)}else if(S){let H={from:S.lower,to:S.upper};E.add(H),y.add(H)}else y.add(t),E.add(t),o.indexes.forEach(H=>v(H.name).add(t));return D})}},h=({query:{index:g,range:b}})=>{var w,v;return[g,new Gn((w=b.lower)!==null&&w!==void 0?w:e.MIN_KEY,(v=b.upper)!==null&&v!==void 0?v:e.MAX_KEY)]},f={get:g=>[s,new Gn(g.key)],getMany:g=>[s,new Gn().addKeys(g.keys)],count:h,query:h,openCursor:h};return Ye(f).forEach(g=>{d[g]=function(b){let{subscr:w}=W;if(w){let v=M=>{let _=`idb://${r}/${n}/${M}`;return w[_]||(w[_]=new Gn)},y=v(""),E=v(":dels"),[C,S]=f[g](b);if(v(C.name||"").add(S),!C.isPrimaryKey)if(g==="count")E.add(t);else{let M=g==="query"&&u&&b.values&&i.query({...b,values:!1});return i[g].apply(this,arguments).then(_=>{if(g==="query"){if(u&&b.values)return M.then(({result:H})=>(y.addKeys(H),_));let D=b.values?_.result.map(l):_.result;b.values?y.addKeys(D):E.addKeys(D)}else if(g==="openCursor"){let D=_,H=b.values;return D&&Object.create(D,{key:{get(){return E.addKey(D.primaryKey),D.key}},primaryKey:{get(){let T=D.primaryKey;return E.addKey(T),T}},value:{get(){return H&&y.addKey(D.primaryKey),D.value}}})}return _})}}return i[g].apply(this,arguments)}}),d}}}};function M6(e,r,t,n){function i(o){let s=e(o.name||"");function l(d){return d!=null?o.extractKey(d):null}let u=d=>o.multiEntry&&At(d)?d.forEach(h=>s.addKey(h)):s.addKey(d);(t||n).forEach((d,h)=>{let f=t&&l(t[h]),g=n&&l(n[h]);Dt(f,g)!==0&&(f!=null&&u(f),g!=null&&u(g))})}r.indexes.forEach(i)}var Ma=class e{constructor(r,t){this._middlewares={},this.verno=0;let n=e.dependencies;this._options=t={addons:e.addons,autoOpen:!0,indexedDB:n.indexedDB,IDBKeyRange:n.IDBKeyRange,...t},this._deps={indexedDB:t.indexedDB,IDBKeyRange:t.IDBKeyRange};let{addons:i}=t;this._dbSchema={},this._versions=[],this._storeNames=[],this._allTables={},this.idbdb=null,this._novip=this;let o={dbOpenError:null,isBeingOpened:!1,onReadyBeingFired:null,openComplete:!1,dbReadyResolve:fe,dbReadyPromise:null,cancelOpen:fe,openCanceller:null,autoSchema:!0,PR1398_maxLoop:3};o.dbReadyPromise=new V(s=>{o.dbReadyResolve=s}),o.openCanceller=new V((s,l)=>{o.cancelOpen=l}),this._state=o,this.name=r,this.on=qs(this,"populate","blocked","versionchange","close",{ready:[sp,fe]}),this.on.ready.subscribe=c0(this.on.ready.subscribe,s=>(l,u)=>{e.vip(()=>{let d=this._state;if(d.openComplete)d.dbOpenError||V.resolve().then(l),u&&s(l);else if(d.onReadyBeingFired)d.onReadyBeingFired.push(l),u&&s(l);else{s(l);let h=this;u||s(function f(){h.on.ready.unsubscribe(l),h.on.ready.unsubscribe(f)})}})}),this.Collection=G9(this),this.Table=j9(this),this.Transaction=X9(this),this.Version=f6(this),this.WhereClause=J9(this),this.on("versionchange",s=>{s.newVersion>0?console.warn(`Another connection wants to upgrade database '${this.name}'. Closing db now to resume the upgrade.`):console.warn(`Another connection wants to delete database '${this.name}'. Closing db now to resume the delete request.`),this.close()}),this.on("blocked",s=>{!s.newVersion||s.newVersion<s.oldVersion?console.warn(`Dexie.delete('${this.name}') was blocked`):console.warn(`Upgrade '${this.name}' blocked by other connection holding version ${s.oldVersion/10}`)}),this._maxKey=js(t.IDBKeyRange),this._createTransaction=(s,l,u,d)=>new this.Transaction(s,l,u,this._options.chromeTransactionDurability,d),this._fireOnBlocked=s=>{this.on("blocked").fire(s),Rs.filter(l=>l.name===this.name&&l!==this&&!l._state.vcFired).map(l=>l.on("versionchange").fire(s))},this.use(w6),this.use(A6),this.use(S6),this.use(L6),this.vip=Object.create(this,{_vip:{value:!0}}),i.forEach(s=>s(this))}version(r){if(isNaN(r)||r<.1)throw new Z.Type("Given version is not a positive number");if(r=Math.round(r*10)/10,this.idbdb||this._state.isBeingOpened)throw new Z.Schema("Cannot add version when database is open");this.verno=Math.max(this.verno,r);let t=this._versions;var n=t.filter(i=>i._cfg.version===r)[0];return n||(n=new this.Version(r),t.push(n),t.sort(a6),n.stores({}),this._state.autoSchema=!1,n)}_whenReady(r){return this.idbdb&&(this._state.openComplete||W.letThrough||this._vip)?r():new V((t,n)=>{if(this._state.openComplete)return n(new Z.DatabaseClosed(this._state.dbOpenError));if(!this._state.isBeingOpened){if(!this._options.autoOpen){n(new Z.DatabaseClosed);return}this.open().catch(fe)}this._state.dbReadyPromise.then(t,n)}).then(r)}use({stack:r,create:t,level:n,name:i}){i&&this.unuse({stack:r,name:i});let o=this._middlewares[r]||(this._middlewares[r]=[]);return o.push({stack:r,create:t,level:n??10,name:i}),o.sort((s,l)=>s.level-l.level),this}unuse({stack:r,name:t,create:n}){return r&&this._middlewares[r]&&(this._middlewares[r]=this._middlewares[r].filter(i=>n?i.create!==n:t?i.name!==t:!1)),this}open(){return x6(this)}_close(){let r=this._state,t=Rs.indexOf(this);if(t>=0&&Rs.splice(t,1),this.idbdb){try{this.idbdb.close()}catch{}this._novip.idbdb=null}r.dbReadyPromise=new V(n=>{r.dbReadyResolve=n}),r.openCanceller=new V((n,i)=>{r.cancelOpen=i})}close(){this._close();let r=this._state;this._options.autoOpen=!1,r.dbOpenError=new Z.DatabaseClosed,r.isBeingOpened&&r.cancelOpen(r.dbOpenError)}delete(){let r=arguments.length>0,t=this._state;return new V((n,i)=>{let o=()=>{this.close();var s=this._deps.indexedDB.deleteDatabase(this.name);s.onsuccess=ke(()=>{b6(this._deps,this.name),n()}),s.onerror=En(i),s.onblocked=this._fireOnBlocked};if(r)throw new Z.InvalidArgument("Arguments not allowed in db.delete()");t.isBeingOpened?t.dbReadyPromise.then(o):o()})}backendDB(){return this.idbdb}isOpen(){return this.idbdb!==null}hasBeenClosed(){let r=this._state.dbOpenError;return r&&r.name==="DatabaseClosed"}hasFailed(){return this._state.dbOpenError!==null}dynamicallyOpened(){return this._state.autoSchema}get tables(){return Ye(this._allTables).map(r=>this._allTables[r])}transaction(){let r=y6.apply(this,arguments);return this._transaction.apply(this,r)}_transaction(r,t,n){let i=W.trans;(!i||i.db!==this||r.indexOf("!")!==-1)&&(i=null);let o=r.indexOf("?")!==-1;r=r.replace("!","").replace("?","");let s,l;try{if(l=t.map(d=>{var h=d instanceof this.Table?d.name:d;if(typeof h!="string")throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");return h}),r=="r"||r===Ac)s=Ac;else if(r=="rw"||r==kc)s=kc;else throw new Z.InvalidArgument("Invalid transaction mode: "+r);if(i){if(i.mode===Ac&&s===kc)if(o)i=null;else throw new Z.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");i&&l.forEach(d=>{if(i&&i.storeNames.indexOf(d)===-1)if(o)i=null;else throw new Z.SubTransaction("Table "+d+" not included in parent transaction.")}),o&&i&&!i.active&&(i=null)}}catch(d){return i?i._promise(null,(h,f)=>{f(d)}):qe(d)}let u=_0.bind(null,this,s,l,i,n);return i?i._promise(s,u,"lock"):W.trans?Ha(W.transless,()=>this._whenReady(u)):this._whenReady(u)}table(r){if(!$r(this._allTables,r))throw new Z.InvalidTable(`Table ${r} does not exist`);return this._allTables[r]}},T6=typeof Symbol<"u"&&"observable"in Symbol?Symbol.observable:"@@observable",tp=class{constructor(r){this._subscribe=r}subscribe(r,t,n){return this._subscribe(!r||typeof r=="function"?{next:r,error:t,complete:n}:r)}[T6](){return this}};function O0(e,r){return Ye(r).forEach(t=>{let n=e[t]||(e[t]=new Gn);Wl(n,r[t])}),e}function D6(e){return new tp(r=>{let t=ip(e);function n(b){t&&$a();let w=()=>Gi(e,{subscr:b,trans:null}),v=W.trans?Ha(W.transless,w):w();return t&&v.then(Pn,Pn),v}let i=!1,o={},s={},l={get closed(){return i},unsubscribe:()=>{i=!0,qi.storagemutated.unsubscribe(f)}};r.start&&r.start(l);let u=!1,d=!1;function h(){return Ye(s).some(b=>o[b]&&F6(o[b],s[b]))}let f=b=>{O0(o,b),h()&&g()},g=()=>{if(u||i)return;o={};let b={},w=n(b);d||(qi(zs,f),d=!0),u=!0,Promise.resolve(w).then(v=>{u=!1,!i&&(h()?g():(o={},s=b,r.next&&r.next(v)))},v=>{u=!1,r.error&&r.error(v),l.unsubscribe()})};return g(),l})}var rp;try{rp={indexedDB:ve.indexedDB||ve.mozIndexedDB||ve.webkitIndexedDB||ve.msIndexedDB,IDBKeyRange:ve.IDBKeyRange||ve.webkitIDBKeyRange}}catch{rp={indexedDB:null,IDBKeyRange:null}}var Ho=Ma;Sa(Ho,{...Zl,delete(e){return new Ho(e,{addons:[]}).delete()},exists(e){return new Ho(e,{addons:[]}).open().then(r=>(r.close(),!0)).catch("NoSuchDatabaseError",()=>!1)},getDatabaseNames(e){try{return m6(Ho.dependencies).then(e)}catch{return qe(new Z.MissingAPI)}},defineClass(){function e(r){$t(this,r)}return e},ignoreTransaction(e){return W.trans?Ha(W.transless,e):e()},vip:Jc,async:function(e){return function(){try{var r=Xc(e.apply(this,arguments));return!r||typeof r.then!="function"?V.resolve(r):r}catch(t){return qe(t)}}},spawn:function(e,r,t){try{var n=Xc(e.apply(t,r||[]));return!n||typeof n.then!="function"?V.resolve(n):n}catch(i){return qe(i)}},currentTransaction:{get:()=>W.trans||null},waitFor:function(e,r){let t=V.resolve(typeof e=="function"?Ho.ignoreTransaction(e):e).timeout(r||6e4);return W.trans?W.trans.waitFor(t):t},Promise:V,debug:{get:()=>wn,set:e=>{g0(e,e==="dexie"?()=>!0:T0)}},derive:Ta,extend:$t,props:Sa,override:c0,Events:qs,on:qi,liveQuery:D6,extendObservabilitySet:O0,getByKeyPath:Qn,setByKeyPath:an,delByKeyPath:f9,shallowClone:h0,deepClone:Ks,getObjectDiff:gp,cmp:Dt,asap:p0,minKey:jc,addons:[],connections:Rs,errnames:ap,dependencies:rp,semVer:t0,version:t0.split(".").map(e=>parseInt(e)).reduce((e,r,t)=>e+r/Math.pow(10,t*2))});Ho.maxKey=js(Ho.dependencies.IDBKeyRange);typeof dispatchEvent<"u"&&typeof addEventListener<"u"&&(qi(zs,e=>{if(!qn){let r;Pl?(r=document.createEvent("CustomEvent"),r.initCustomEvent(Ui,!0,!0,e)):r=new CustomEvent(Ui,{detail:e}),qn=!0,dispatchEvent(r),qn=!1}}),addEventListener(Ui,({detail:e})=>{qn||ql(e)}));function ql(e){let r=qn;try{qn=!0,qi.storagemutated.fire(e)}finally{qn=r}}var qn=!1;if(typeof BroadcastChannel<"u"){let e=new BroadcastChannel(Ui);qi(zs,r=>{qn||e.postMessage(r)}),e.onmessage=r=>{r.data&&ql(r.data)}}else if(typeof self<"u"&&typeof navigator<"u"){qi(zs,r=>{try{qn||(typeof localStorage<"u"&&localStorage.setItem(Ui,JSON.stringify({trig:Math.random(),changedParts:r})),typeof self.clients=="object"&&[...self.clients.matchAll({includeUncontrolled:!0})].forEach(t=>t.postMessage({type:Ui,changedParts:r})))}catch{}}),addEventListener("storage",r=>{if(r.key===Ui){let t=JSON.parse(r.newValue);t&&ql(t.changedParts)}});let e=self.document&&navigator.serviceWorker;e&&e.addEventListener("message",$6)}function $6({data:e}){e&&e.type===Ui&&ql(e.changedParts)}V.rejectionMapper=C9;g0(wn,T0);var Xl=class extends Ma{hashes;icons;constructor(){super("IconCache"),this.version(1).stores({hashes:"&id, hash",icons:"&id, idFull, fontId, name, data, aliases, tags, codepoint"}),this.hashes=this.table("hashes"),this.icons=this.table("icons")}};var N0=window.location.href.match(/localhost/),vp=window.location.href.match(/templarian\.github\.io/);async function H6(e,r={}){let{params:t={}}=r,n=Object.keys(t),i=`?${n.map(s=>{let l=t[s];return l instanceof Array?`${s}=${l.join(",")}`:`${s}=${l}`}).join("&")}`;if(N0||vp){let s=n.map(l=>{let u=t[l];return u instanceof Array?(u.forEach((d,h)=>{d.match(/\w{8}-\w{4}-\w{4}-\w{4}-\w{12}/)&&(u[h]=d.substr(0,3))}),`${l}/${u.join("-")}`):`${l}/${u}`}).join("/");s&&(e+=`/_/${s}`),vp&&(e=e.replace(/^\//,""))}let o=await fetch(N0||vp?`${e}/mock.get.json`:`${e}${i==="?"?"":i}`);try{return o.json()}catch{}if(!o.ok)throw new Error(o.statusText);return Promise.reject()}async function I6(e,r={}){let{params:t={}}=r,i=`?${Object.keys(t).map(s=>`${s}=${t[s]}`).join("&")}`,o=await fetch(`${e}${i==="?"?"":i}`);try{return o.text()}catch{}if(!o.ok)throw new Error(o.statusText);return Promise.reject()}var Jn={get:H6,asset:I6};var Ia=class{id;name;match=!1;constructor(r,t){r!==void 0&&(this.id=r),t!==void 0&&(this.name=t)}from(r){return r.id!==void 0&&(this.id=r.id),r.name!==void 0&&(this.name=r.name),this}to(){return{name:this.name}}};var Hr=class{id;name;url;count;from(r){return r.id!==void 0&&(this.id=r.id),r.name!==void 0&&(this.name=r.name),r.url!==void 0&&(this.url=r.url),r.count!==void 0&&(this.count=r.count),this}to(){return{name:this.name,url:this.url,count:this.count}}};var eu=class{id;name;count=null;from(r){return this.id=r.id,this.name=r.name,this.count=r.count,this}};var tu=class{id;codepoint;font;version;from(r){return this.id=r.id,this.codepoint=r.codepoint,this.font=r.font,this.version=r.version,this}to(){return{id:this.id,codepoint:this.codepoint,font:this.font,version:this.version}}};var Ir=class{id=null;packageId=null;baseIconId=null;name=null;description=null;data=null;user=null;version=null;aliases=[];tags=[];styles=[];published=!0;deprecated=!1;codepoint=null;fontIcons=[];fontIcon=null;constructor(r,t){this.name=r||null,this.data=t||null}from(r){return this.id=r.id,this.packageId=r.packageId,this.baseIconId=r.baseIconId,this.name=r.name,this.description=r.description,this.data=r.data,r.version&&(this.version=r.version),r.fontIcon&&(this.fontIcon=r.fontIcon),r.user&&(this.user=new vt().from(r.user)),r.aliases&&(this.aliases=r.aliases.map(t=>new Ia().from(t))),r.tags&&(this.tags=r.tags.map(t=>new Hr().from(t))),r.styles&&(this.styles=r.styles.map(t=>new eu().from(t))),typeof r.published=="boolean"&&(this.published=r.published),typeof r.deprecated=="boolean"&&(this.deprecated=r.deprecated),r.codepoint&&(this.codepoint=r.codepoint),r.fontIcons&&(this.fontIcons=r.fontIcons.map(t=>new tu().from(t))),this}to(){let{id:r,name:t,description:n,data:i,version:o,fontIcon:s,packageId:l,baseIconId:u,aliases:d,tags:h}=this;return{id:r,name:t,description:n,data:i,version:o,fontIcon:s,packageId:l,baseIconId:u,aliases:d.map(f=>f.to()),tags:h.map(f=>f.to())}}};var ru=class{id;major;minor;patch;iconCount;description;date;released;from(r){return this.id=r.id,this.major=r.major,this.minor=r.minor,this.patch=r.patch,this.iconCount=r.iconCount,this.description=r.description,this.date=new Date(r.date),this.released=r.released,this}};var nu=class{id;name;description;prefix;fontName;fileName;fontFamily;fontWeight;price;versions=[];iconCount;from(r){return this.id=r.id,this.name=r.name,this.description=r.description,this.prefix=r.prefix,this.fontName=r.fontName,this.fontFamily=r.fontFamily,this.fontWeight=r.fontWeight,this.price=r.price,this.iconCount=r.iconCount,r.versions&&(this.versions=r.versions.map(t=>new ru().from(t))),this}};var iu=class{db=new Xl;async getHashesFromServer(r){return await Jn.get(`/api/font/${r.id}/hash`)}async getIconsFromServer(r,t){return t.length===0?[]:(await Jn.get(`/api/font/${r.id}`,{params:{ids:t.join(",")}})).map(i=>new Ir().from(i))}async getIconsByPage(r,t,n){return(await Jn.get(`/api/font/${r.id}`,{params:{page:t.toString(),size:n.toString()}})).map(o=>new Ir().from(o))}async asyncThrottledMap(r,t,n){let i=new Set,o=[];for(let l of t){i.size>=r&&await Promise.race(i);let u=n(l),d=s(u);o.push(d)}return Promise.all(o);async function s(l){i.add(l);let u=await l;return i.delete(l),u}}async exists(r){return await this.getCount(r)>0}async resync(r){let t=!1,n=new nu().from({id:r}),i=await this.getHashesFromServer(n),o=Object.keys(i),s=await this.db.hashes.toArray(),l={};s.forEach(f=>{l[f.id]=f.hash});let u=Object.keys(l),d=[];o.forEach(f=>{(!(f in l)||l[f]!==i[f])&&d.push(f)});let h=[];if(u.forEach(f=>{f in i||h.push(f)}),await this.db.icons.bulkDelete(h),(d.length>0||h.length>0)&&(t=!0),d.length<500){let f,g,b=[],w=100;for(f=0,g=d.length;f<g;f+=w)b.push(d.slice(f,f+w));let v=b.map(E=>this.getIconsFromServer(n,E));(await Promise.all(v)).forEach(E=>{this.db.icons.bulkPut(E.map(C=>({id:C.fontIcon.id,idFull:C.id,fontId:n.id,name:C.name,data:C.data,version:C.version,codepoint:C.codepoint,aliases:C.aliases,tags:C.tags})))})}else if(d.length!==0){let f=500,g=Math.ceil(o.length/f),b=[];for(let w=1;w<=g;w++)b.push(this.getIconsByPage(n,w,f));await this.asyncThrottledMap(2,b,w=>w.then(v=>{this.db.icons.bulkPut(v.map(y=>({id:y.fontIcon.id,idFull:y.id,fontId:n.id,name:y.name,data:y.data,version:y.version,codepoint:y.codepoint,aliases:JSON.stringify(y.aliases.map(E=>({name:E.name}))),tags:JSON.stringify(y.tags.map(E=>({name:E.name,url:E.url})))})))}))}return t&&(await this.db.hashes.bulkPut(o.map(f=>({id:f,hash:i[f]}))),await this.db.hashes.bulkDelete(h)),t}synced=!1;async sync(r){if(!this.synced){let t=await this.resync(r);return this.synced=!0,t}return!1}convert(r){let t=new Ir;t.id=r.idFull,t.name=r.name,t.data=r.data,t.version=r.version,t.codepoint=r.codepoint;let n=r.aliases instanceof Array?r.aliases:JSON.parse(r.aliases);t.aliases=n.map(o=>new Ia().from(o));let i=r.tags instanceof Array?r.tags:JSON.parse(r.tags);return t.tags=i.map(o=>new Hr().from(o)),t}async getIconByName(r){let t=await this.db.icons.where("name").equals(r).first();return t?this.convert(t):null}async getIcons(r,t){let n;if(t){let i=t.toLowerCase().replace(/[^a-z0-9-]/g,""),o=new RegExp(`${i}`);n=await this.db.icons.where("fontId").equals(r).filter(s=>s.name.match(o)!==null).sortBy("name")}else n=await this.db.icons.where("fontId").equals(r).sortBy("name");return n.map(i=>this.convert(i))}async getCount(r){return await this.db.icons.where("fontId").equals(r).count()}async delete(){await this.db.delete()}};var ou=new iu,V0,z0,j0,Ra;j0=[k({selector:"pg-database",style:Zg,template:Qg})];var Vo=class extends(z0=HTMLElement,V0=[L()],z0){constructor(){super(...arguments);p(this,"font",a(Ra,8,this,"")),a(Ra,11,this)}async render(){if(this.font!==""){let t=await ou.exists(this.font),n=!0;t&&this.dispatchEvent(new CustomEvent("sync",{detail:{db:ou,delay:n}})),await ou.sync(this.font)&&(n=!1,this.dispatchEvent(new CustomEvent("sync",{detail:{db:ou,delay:n}})))}}};Ra=A(z0),c(Ra,5,"font",V0,Vo),Vo=c(Ra,0,"PgDatabase",j0,Vo),a(Ra,1,Vo);var Y0=`<div class="example">
  <!-- disable for now -->
  <!--<pg-database part="database"></pg-database>-->
  <div>
    Total Icons: <code part="count"></code>
  </div>
  <div>
    Icon Objects: <code part="total"></code>
  </div>
</div>`;var K0,U0,G0,W0,q0,Rr;q0=[k({selector:"x-pg-database-basic",template:Y0})];var Xn=class extends(W0=HTMLElement,G0=[L()],U0=[m()],K0=[m()],W0){constructor(){super(...arguments);p(this,"fontId",a(Rr,8,this,"D051337E-BC7E-11E5-A4E9-842B2B6CFE1B")),a(Rr,11,this);p(this,"$count",a(Rr,12,this)),a(Rr,15,this);p(this,"$total",a(Rr,16,this)),a(Rr,19,this);p(this,"icons",[])}connectedCallback(){}async handleSync(t){let{db:n}=t.detail,i=await n.getCount(this.fontId);this.$count.innerText=i;let o=await n.getIcons(this.fontId);this.$total.innerText=o.length,this.icons=o}};Rr=A(W0),c(Rr,5,"fontId",G0,Xn),c(Rr,5,"$count",U0,Xn),c(Rr,5,"$total",K0,Xn),Xn=c(Rr,0,"XPgDatabaseBasic",q0,Xn),a(Rr,1,Xn);var Q0=`<slot part="main"></slot>
<div part="popover">
  <div part="arrow"></div>
  <slot name="popover"></slot>
</div>`;var Z0=`[part~=popover] {\r
  background: #FFF;\r
  padding: 0.5rem;\r
  border-radius: 0.5rem;\r
  box-shadow: 0 1px 14px rgba(0, 0, 0, 0.2);\r
  border: 4px solid var(--pg-dropdown-border-color);\r
}\r
\r
[part~=arrow],\r
[part~=arrow]::before {\r
  position: absolute;\r
  width: 10px;\r
  height: 10px;\r
}\r
\r
[part~=arrow]::before {\r
  content: '';\r
  transform: rotate(45deg);\r
  background: #FFF;\r
}\r
\r
[part~=popover][data-popper-placement^='top'] > [part~=arrow] {\r
  bottom: -5px;\r
}\r
[part~=popover][data-popper-placement^='top'] > [part~=arrow]::before {\r
  border-bottom: 4px solid var(--pg-dropdown-border-color);\r
  border-right: 4px solid var(--pg-dropdown-border-color);\r
  border-bottom-right-radius: 0.25rem;\r
}\r
\r
[part~=popover][data-popper-placement^='bottom'] > [part~=arrow] {\r
  top: -10px;\r
}\r
[part~=popover][data-popper-placement^='bottom'] > [part~=arrow]::before {\r
  border-top: 4px solid var(--pg-dropdown-border-color);\r
  border-left: 4px solid var(--pg-dropdown-border-color);\r
  border-top-left-radius: 0.25rem;\r
}\r
\r
[part~=popover][data-popper-placement^='left'] > [part~=arrow] {\r
  right: -5px;\r
}\r
\r
[part~=popover][data-popper-placement^='right'] > [part~=arrow] {\r
  left: -5px;\r
}`;window.process={env:{}};var P0,J0,X0,e1,t1,_r;t1=[k({selector:"pg-dropdown",style:Z0,template:Q0})];var ei=class extends(e1=HTMLElement,X0=[m()],J0=[m()],P0=[m()],e1){constructor(){super(...arguments);p(this,"$main",a(_r,8,this)),a(_r,11,this);p(this,"$popover",a(_r,12,this)),a(_r,15,this);p(this,"$arrow",a(_r,16,this)),a(_r,19,this);p(this,"isVisible",!1)}connectedCallback(){this.$main.addEventListener("slotchange",t=>{for(var n=this.$main.assignedElements(),i=0;i<n.length;i++){var o=n[i];this.wireUpPopover(o)}})}wireUpPopover(t){this.$popover.style.visibility="hidden",t.addEventListener("click",n=>{this.$popover.style.visibility=this.isVisible?"hidden":"visible",this.isVisible=!this.isVisible,n.preventDefault()})}render(){}};_r=A(e1),c(_r,5,"$main",X0,ei),c(_r,5,"$popover",J0,ei),c(_r,5,"$arrow",P0,ei),ei=c(_r,0,"PgDropdown",t1,ei),a(_r,1,ei);var r1=`<div class="example">
  <pg-dropdown>
    <button>Click Me</button>
    <div slot="popover">
      Render anything inside...
    </div>
  </pg-dropdown>
  <pg-dropdown>
    <a href="/">Click Me</a>
    <div slot="popover">
      Render anything inside...
    </div>
  </pg-dropdown>
</div>`;var n1,xp,_6;n1=[k({selector:"x-pg-dropdown-basic",template:r1})];var _a=class extends(_6=HTMLElement){};xp=A(_6),_a=c(xp,0,"XPgDropdownBasic",n1,_a),a(xp,1,_a);var i1=(e,r)=>{let t;return(...n)=>new Promise(i=>{t&&clearTimeout(t),t=setTimeout(()=>i(e(...n)),r)})};var B6=typeof global=="object"&&global&&global.Object===Object&&global,o1=B6;var O6=typeof self=="object"&&self&&self.Object===Object&&self,N6=o1||O6||Function("return this")(),au=N6;var V6=au.Symbol,Ba=V6;var a1=Object.prototype,z6=a1.hasOwnProperty,j6=a1.toString,Zs=Ba?Ba.toStringTag:void 0;function Y6(e){var r=z6.call(e,Zs),t=e[Zs];try{e[Zs]=void 0;var n=!0}catch{}var i=j6.call(e);return n&&(r?e[Zs]=t:delete e[Zs]),i}var s1=Y6;var K6=Object.prototype,U6=K6.toString;function G6(e){return U6.call(e)}var l1=G6;var W6="[object Null]",q6="[object Undefined]",u1=Ba?Ba.toStringTag:void 0;function Q6(e){return e==null?e===void 0?q6:W6:u1&&u1 in Object(e)?s1(e):l1(e)}var c1=Q6;function Z6(e){return e!=null&&typeof e=="object"}var p1=Z6;var P6="[object Symbol]";function J6(e){return typeof e=="symbol"||p1(e)&&c1(e)==P6}var d1=J6;var X6=/\s/;function eS(e){for(var r=e.length;r--&&X6.test(e.charAt(r)););return r}var h1=eS;var tS=/^\s+/;function rS(e){return e&&e.slice(0,h1(e)+1).replace(tS,"")}var f1=rS;function nS(e){var r=typeof e;return e!=null&&(r=="object"||r=="function")}var zo=nS;var m1=NaN,iS=/^[-+]0x[0-9a-f]+$/i,oS=/^0b[01]+$/i,aS=/^0o[0-7]+$/i,sS=parseInt;function lS(e){if(typeof e=="number")return e;if(d1(e))return m1;if(zo(e)){var r=typeof e.valueOf=="function"?e.valueOf():e;e=zo(r)?r+"":r}if(typeof e!="string")return e===0?e:+e;e=f1(e);var t=oS.test(e);return t||aS.test(e)?sS(e.slice(2),t?2:8):iS.test(e)?m1:+e}var yp=lS;var uS=function(){return au.Date.now()},su=uS;var cS="Expected a function",pS=Math.max,dS=Math.min;function hS(e,r,t){var n,i,o,s,l,u,d=0,h=!1,f=!1,g=!0;if(typeof e!="function")throw new TypeError(cS);r=yp(r)||0,zo(t)&&(h=!!t.leading,f="maxWait"in t,o=f?pS(yp(t.maxWait)||0,r):o,g="trailing"in t?!!t.trailing:g);function b(D){var H=n,T=i;return n=i=void 0,d=D,s=e.apply(T,H),s}function w(D){return d=D,l=setTimeout(E,r),h?b(D):s}function v(D){var H=D-u,T=D-d,$=r-H;return f?dS($,o-T):$}function y(D){var H=D-u,T=D-d;return u===void 0||H>=r||H<0||f&&T>=o}function E(){var D=su();if(y(D))return C(D);l=setTimeout(E,v(D))}function C(D){return l=void 0,g&&n?b(D):(n=i=void 0,s)}function S(){l!==void 0&&clearTimeout(l),d=0,n=u=i=l=void 0}function M(){return l===void 0?s:C(su())}function _(){var D=su(),H=y(D);if(n=arguments,i=this,u=D,H){if(l===void 0)return w(u);if(f)return clearTimeout(l),l=setTimeout(E,r),b(u)}return l===void 0&&(l=setTimeout(E,r)),s}return _.cancel=S,_.flush=M,_}var g1=hS;var fS="Expected a function";function mS(e,r,t){var n=!0,i=!0;if(typeof e!="function")throw new TypeError(fS);return zo(t)&&(n="leading"in t?!!t.leading:n,i="trailing"in t?!!t.trailing:i),g1(e,r,{leading:n,maxWait:r,trailing:i})}var lu=mS;var b1=`<div part="scroll">
  <slot></slot>
</div>`;var v1=`:host {\r
  display: block;\r
}\r
\r
div {\r
  transform: translateY(0);\r
}`;var x1,y1,E1,w1,ti;w1=[k({selector:"pg-scroll",style:v1,template:b1})];var Qi=class extends(E1=HTMLElement,y1=[L()],x1=[m()],E1){constructor(){super(...arguments);p(this,"height",a(ti,8,this,0)),a(ti,11,this);p(this,"$scroll",a(ti,12,this)),a(ti,15,this);p(this,"scrollElement");p(this,"currentHeight",-1);p(this,"columns",10);p(this,"size",44);p(this,"visible",!1);p(this,"y",-1);p(this,"width",0);p(this,"resizeObserver",new ResizeObserver(lu(t=>{let{width:n}=t[0].contentRect;this.columns=Math.floor(n/(this.size+20)),this.y=-1,this.width=n,this.calculateScroll()},100)))}connectedCallback(){this.resizeObserver.observe(this.$scroll)}getInnerHeight(){let t=this.parentElement;for(;t;){if(t.style.overflow==="auto")return t.getBoundingClientRect().height;t=t.parentElement}return window.innerHeight}get isWindow(){return this.scrollElement===window}getView(){let t=this.getInnerHeight(),n=this.getBoundingClientRect(),{y:i,height:o}=this.isWindow?{y:n.top,height:n.height}:{y:n.top-this.scrollElement.getBoundingClientRect().top,height:n.height},s=i<0?-1*i:0,l=o-s-t<0?o-t<0?0:o-t:s,u=o<t?o:i+o-t>0?t:i+o-t;return{visible:i<t&&o+i>0||!this.isWindow,y:l,height:u<0?t:u,atEnd:u<0}}calculateScroll(){let{visible:t,y:n,height:i}=this.getView();t&&(this.$scroll.style.transform=`translateY(${n}px)`,this.$scroll.style.height=`${i}px`),this.visible!==t&&(this.visible=t,this.visible?this.enterView():this.leaveView()),this.visible&&this.y!==n&&(this.dispatchEvent(new CustomEvent("calculate",{detail:{offsetY:n,viewWidth:this.width,viewHeight:i,height:this.height}})),this.y=n)}enterView(){this.dispatchEvent(new CustomEvent("enter"))}leaveView(){this.dispatchEvent(new CustomEvent("leave"))}getParentElement(){let t=this.parentElement;for(;t;){if(t.style.overflow==="auto")return t;t=t.parentElement}return window}updateHeight(){this.scrollElement=this.getParentElement(),this.scrollElement.addEventListener("scroll",lu(()=>{this.calculateScroll()},100)),this.style.height=`${this.currentHeight}px`,this.y=-1,this.calculateScroll()}render(t){console.log("changes",t);let n=parseInt(`${this.height}`,10);console.log("set",this.height),this.currentHeight!==n&&(this.currentHeight=n,this.updateHeight())}};ti=A(E1),c(ti,5,"height",y1,Qi),c(ti,5,"$scroll",x1,Qi),Qi=c(ti,0,"PgScroll",w1,Qi),a(ti,1,Qi);var C1=`<div part="none">
  <slot></slot>
</div>
<pg-scroll part="scroll">
  <div part="grid"></div>
</pg-scroll>`;var A1=`* {\r
  font-family: var(--pg-font-family, system-ui);\r
}\r
\r
:host {\r
  display: block;\r
}\r
\r
[part~=none] {\r
  display: none;\r
}\r
\r
[part~=none].show {\r
  display: block;\r
}\r
\r
[part~=grid] {\r
  position: relative;\r
}\r
\r
[part~=grid] > button {\r
  border: 0;\r
  background: transparent;\r
  padding: 0.625rem;\r
  outline: none;\r
  width: 2.75rem;\r
  height: 2.75rem;\r
  position: absolute;\r
  left: 0;\r
  top: 0;\r
  border: 0;\r
  border-radius: 0.25rem;\r
}\r
\r
[part~=grid] > button.hover {\r
  background: rgba(0, 0, 0, 0.1);\r
}\r
\r
[part~=grid] > button:focus,\r
[part~=grid] > button:active {\r
  background: rgba(0, 0, 0, 0.15);\r
  box-shadow: 0 0.0125rem 0.25rem rgba(0, 0, 0, 0.2) inset;\r
}\r
\r
[part~=grid] > button > svg {\r
  fill: #453C4F;\r
  width: 1.5rem;\r
  height: 1.5rem;\r
}\r
\r
[part~=grid] > button > svg {\r
  fill: #453C4F;\r
}\r
\r
[part~=grid]::-webkit-scrollbar {\r
  width: 1em;\r
}\r
\r
[part~=grid]::-webkit-scrollbar-track {\r
  box-shadow: inset 0 0 6px rgba(0,0,0,0.2);\r
  border-radius: 0.25rem;\r
}\r
\r
[part~=grid]::-webkit-scrollbar-thumb {\r
  background-color: #453C4F;\r
  outline: 1px solid slategrey;\r
  border-radius: 0.25rem;\r
}`;var uu={ArrowUp:"ArrowUp",ArrowRight:"ArrowRight",ArrowDown:"ArrowDown",ArrowLeft:"ArrowLeft"},k1,L1,F1,S1,M1,T1,D1,$1,H1,I1,R1,se;R1=[k({selector:"pg-grid",style:A1,template:C1})];var Ht=class extends(I1=HTMLElement,H1=[L()],$1=[L()],D1=[L()],T1=[L()],M1=[L()],S1=[L()],F1=[m()],L1=[m()],k1=[m()],I1){constructor(){super(...arguments);p(this,"icons",a(se,8,this,[])),a(se,11,this);p(this,"size",a(se,12,this,24)),a(se,15,this);p(this,"padding",a(se,16,this,8)),a(se,19,this);p(this,"gap",a(se,20,this,4)),a(se,23,this);p(this,"width",a(se,24,this,"auto")),a(se,27,this);p(this,"height",a(se,28,this,"auto")),a(se,31,this);p(this,"$none",a(se,32,this)),a(se,35,this);p(this,"$scroll",a(se,36,this)),a(se,39,this);p(this,"$grid",a(se,40,this)),a(se,43,this);p(this,"currentCount",0);p(this,"currentSize",0);p(this,"currentPadding",0);p(this,"currentGap",0);p(this,"rowHeight",0);p(this,"items",[]);p(this,"svg","http://www.w3.org/2000/svg");p(this,"columns");p(this,"debounceRender",i1(()=>this.render({}),300));p(this,"color","svg");p(this,"resizeObserver",new ResizeObserver(()=>{this.debounceRender()}));p(this,"index",0);p(this,"hoverLast",0);p(this,"currentRow",0);p(this,"timeouts",[]);p(this,"cacheHeight",0);p(this,"cacheViewWidth",0);p(this,"canOpenTooltip",!0);p(this,"preventClose",!1);p(this,"currentIndex",0)}connectedCallback(){this.resizeObserver.observe(this.$grid),this.addEventListener("mousemove",this.handleTooltip.bind(this)),this.addEventListener("mouseleave",t=>{this.index=-2,this.handleTooltip(t)}),this.$scroll.addEventListener("calculate",t=>{let{offsetY:n,height:i,viewWidth:o,viewHeight:s}=t.detail;this.calculate(n,i,o,s)})}getMetaFromMouse(t){let{width:n,height:i,gap:o,extra:s}=this.getIconMetrics();var l=t.target.getBoundingClientRect();let u=t.clientX-l.left,d=t.clientY-l.top;console.log(u,d);let h=this.getColumnFromX(u,n,o,s),f=this.getRowFromY(d,i,o,s),g=h!==-1&&f!==-1?h+f*this.columns:-1,b=n+o+(h-1)*n+h*(o+s),w=f*i+(f+1)*o;return{gridX:b,gridY:w,x:b+l.left,y:w+l.top,width:n,height:i,column:h,row:f,gap:o,extra:s,index:g,icon:this.icons[g]}}getColumnFromX(t,n,i,o){if(t=Math.round(t),t<i)return-1;if(t<=n+i)return 0;let s=Math.floor((t-n-i)/(n+i+o))+1;return t-s*(n+i+o)<i+o?-1:s}getRowFromY(t,n,i,o){if(t<i)return-1;if(t<=n+i)return 0;let s=Math.floor((t-n-i)/(n+i))+1;return t-s*(n+i)<i?-1:s}handleTooltip(t){let n=this.getMetaFromMouse(t),{column:i,index:o}=n;this.hoverLast>=0&&this.items[this.hoverLast][0].classList.toggle("hover",!1);var s=o-this.currentRow*this.columns;s>=0&&(this.items[s][0].classList.toggle("hover",!0),this.hoverLast=s),this.index!==o&&(o===-1||this.index===-2?(n.index=this.index,this.hideTooltip(this.icons[this.index],n),this.index=-1):this.icons[o]&&(i>this.columns-1?(n.index=this.index,this.hideTooltip(this.icons[this.index],n),this.index=-1):(this.showTooltip(this.icons[o],n),this.index=o)))}updateHover(){this.items[this.index][0].classList.toggle("hover",!1)}syncVirtual(t){for(let b=this.currentCount;b<t;b++){this.currentCount=b+1;let w=document.createElement("button");w.dataset.index=`${b}`,w.addEventListener("click",()=>{let E=b+this.columns*this.currentRow;this.handleClick(this.icons[E])}),w.addEventListener("keydown",E=>{let C=b+this.columns*this.currentRow;this.moveFocus(E,C)}),w.addEventListener("contextmenu",E=>{var C=this.$grid.getBoundingClientRect();let S=Math.floor(E.clientX-C.left),M=Math.floor(E.clientY-C.top);this.showContextMenu(b,S,M),E.preventDefault()});let v=document.createElementNS(this.svg,"svg");v.setAttribute("viewBox","0 0 24 24");let y=document.createElementNS(this.svg,"path");v.appendChild(y),w.appendChild(v),this.$grid.appendChild(w),this.items.push([w,v,y])}for(let b=this.currentCount;b>t;b--){let w=this.items.pop();this.$grid.removeChild(w[0]),this.currentCount--}let{size:n,padding:i,gap:o,width:s,height:l,rowHeight:u,scrollWidth:d,extra:h}=this.getIconMetrics(),f=o,g=o;this.items.forEach(([b,w],v)=>{b.style.padding=`${i}px`,b.style.width=`${s}px`,b.style.height=`${l}px`,b.style.transform=`translate(${f}px, ${g}px)`,w.style.width=`${n}px`,w.style.height=`${n}px`,f+=s+o+h,v%this.columns===this.columns-1&&(g+=l+o,f=o)})}calculate(t,n,i,o){let s=this.rowHeight,l=this.icons.length,u=Math.ceil(o/s)+1,d=Math.floor(t/s);this.$grid.style.transform=`translateY(${-1*t%s}px)`,(this.cacheHeight!==n||this.cacheViewWidth!==i)&&(this.syncVirtual(u*this.columns),this.cacheHeight=n,this.cacheViewWidth=i),this.currentRow!==d&&(this.items.forEach(([h,f,g],b)=>{let w=b+d*this.columns;w<l?(g.setAttribute("d",this.icons[w].data),h.style.display="block"):h.style.display="none"}),this.currentRow=d)}getIconMetrics(){let t=parseInt(this.size,10),n=parseInt(this.padding,10),i=parseInt(this.gap,10),{width:o}=this.$scroll.getBoundingClientRect(),s=t+n*2,l=s+i,u=(o-i-l*this.columns)/(this.columns-1);return{size:t,padding:n,gap:i,width:s,height:s,rowHeight:l,extra:u,scrollWidth:o}}calculateColumns(t,n){let i=t-this.currentGap,o=Math.floor(i/n);return o>0?o:1}render(t){let{size:n,padding:i,gap:o,rowHeight:s,scrollWidth:l}=this.getIconMetrics();(this.currentSize!==n||this.currentPadding!==i||this.currentGap!==o)&&(this.currentSize=n,this.currentPadding=i,this.currentGap=o,this.rowHeight=s);let u=this.calculateColumns(l,s);this.columns!==u&&(this.columns=u);let d=this.icons.length;if(d){let h=Math.ceil(d/this.columns);this.currentRow=-1,console.log("---",o+h*s),console.log("init",this.$scroll.height),this.$scroll.setAttribute("height",(o+h*s).toString())}else this.$scroll.setAttribute("height","0");this.$none.classList.toggle("show",d===0)}moveFocus(t,n){let i;switch(t.key){case uu.ArrowLeft:i=n-1,i>=0&&(this.items[i][0].focus(),t.preventDefault());break;case uu.ArrowUp:i=n-this.columns,i>=0&&(this.items[i][0].focus(),t.preventDefault());break;case uu.ArrowRight:i=n+1,i<this.icons.length&&(this.items[i][0].focus(),t.preventDefault());break;case uu.ArrowDown:i=n+this.columns,i<this.icons.length?(this.items[i][0].focus(),t.preventDefault()):i!==this.icons.length-1&&(this.items[this.icons.length-1][0].focus(),t.preventDefault());break}}handleClick(t){this.dispatchEvent(new CustomEvent("select",{detail:t}))}showContextMenu(t,n,i){this.dispatchEvent(new CustomEvent("openmenu"))}hideContextMenu(){this.dispatchEvent(new CustomEvent("closemenu")),this.canOpenTooltip=!0}showTooltip(t,n){this.canOpenTooltip&&this.dispatchEvent(new CustomEvent("entericon",{detail:n}))}hideTooltip(t,n){this.dispatchEvent(new CustomEvent("leaveicon",{detail:n}))}getPositionFromIndex(t){return{x:t%this.columns,y:Math.floor(t/this.columns)}}};se=A(I1),c(se,5,"icons",H1,Ht),c(se,5,"size",$1,Ht),c(se,5,"padding",D1,Ht),c(se,5,"gap",T1,Ht),c(se,5,"width",M1,Ht),c(se,5,"height",S1,Ht),c(se,5,"$none",F1,Ht),c(se,5,"$scroll",L1,Ht),c(se,5,"$grid",k1,Ht),Ht=c(se,0,"PgGrid",R1,Ht),a(se,1,Ht);var _1=`<pg-tooltip part="tooltip"></pg-tooltip>
<p>
  <button part="button0">Render 0</button>
  <button part="button1">Render 1</button>
  <button part="button10">Render 10</button>
  <button part="button50">Render 50</button>
  <button part="button250">Render 250</button>
  <button part="buttonAll">Render 5000+</button>
</p>
<p>
  <label>
    Size (<span part="sizeText">24</span>):
    <input part="size" type="range" min="24" max="96" step="4" value="24" />
  </label>
  <label>
    Padding (<span part="paddingText">8</span>):
    <input part="padding" type="range" min="0" max="24" step="2" value="8" />
  </label>
  <label>
    Gap (<span part="gapText">4</span>):
    <input part="gap" type="range" min="0" max="16" step="2" value="4" />
  </label>
</p>
<div class="example">
  <!--<pg-database part="database"></pg-database>
  <pg-grid part="grid">
    <p>No Icons Found! default slot content</p>
  </pg-grid>-->
</div>`;var B1,Ep,vS;B1=[k({selector:"x-pg-grid-basic",template:_1})];var Oa=class extends(vS=HTMLElement){};Ep=A(vS),Oa=c(Ep,0,"XPgGridBasic",B1,Oa),a(Ep,1,Oa);var O1=`<header>
  <a href="/">
    <slot name="logo">
      <svg viewBox="0 0 24 24">
        <path part="path" fill="currentColor" d=""></path>
      </svg>
    </slot>
    <span part="name"></span>
  </a>
  <div>
    <slot name="nav"></slot>
    <slot name="search"></slot>
    <slot name="menu"></slot>
  </div>
</header>`;var N1=`:host {\r
  display: block;\r
}\r
header {\r
  display: grid;\r
  grid-template-columns: auto 1fr;\r
  grid-template-rows: 1fr;\r
  grid-row: 1;\r
  grid-column: 1 / span 2;\r
  background: var(--pg-header-background, #fff);\r
  color: var(--pg-header-color, #453C4F);\r
  font-family: var(--pg-font-family, system-ui);\r
  height: 3rem;\r
}\r
header > a {\r
  grid-column: 1;\r
  display: inline-flex;\r
  color: var(--pg-header-color, #453C4F);\r
  text-decoration: none;\r
  align-items: center;\r
}\r
header > a svg,\r
header > a slot::slotted(svg) {\r
  display: inline-flex;\r
  width: 1.75rem;\r
  height: 1.75rem;\r
  margin: 0 0.75rem 0 1rem;\r
}\r
header > a > span {\r
  display: inline-flex;\r
  color: var(--pg-header-color, #453C4F);\r
  font-size: 1.5rem;\r
  margin: 0;\r
  font-weight: normal;\r
  padding-bottom: 1px;\r
}\r
header > div {\r
  display: flex;\r
  grid-column: 2;\r
  justify-self: right;\r
  margin-right: 1rem;\r
}`;var yS="M0 0h24v24H0V0zm2 2v20h20V2H2z",V1,z1,j1,Y1,K1,U1,It;U1=[k({selector:"pg-header",style:N1,template:O1})];var Cn=class extends(K1=HTMLElement,Y1=[L()],j1=[L()],z1=[m()],V1=[m()],K1){constructor(){super(...arguments);p(this,"logo",a(It,8,this,yS)),a(It,11,this);p(this,"name",a(It,12,this,"Default")),a(It,15,this);p(this,"$path",a(It,16,this)),a(It,19,this);p(this,"$name",a(It,20,this)),a(It,23,this)}render(t){t.logo&&this.$path.setAttribute("d",this.logo),t.name&&(this.$name.innerText=this.name)}};It=A(K1),c(It,5,"logo",Y1,Cn),c(It,5,"name",j1,Cn),c(It,5,"$path",z1,Cn),c(It,5,"$name",V1,Cn),Cn=c(It,0,"PgHeader",U1,Cn),a(It,1,Cn);function G1(e){for(var r=[{base:"A",letters:/[\u0041\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F]/g},{base:"AA",letters:/[\uA732]/g},{base:"AE",letters:/[\u00C6\u01FC\u01E2]/g},{base:"AO",letters:/[\uA734]/g},{base:"AU",letters:/[\uA736]/g},{base:"AV",letters:/[\uA738\uA73A]/g},{base:"AY",letters:/[\uA73C]/g},{base:"B",letters:/[\u0042\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181]/g},{base:"C",letters:/[\u0043\u24B8\uFF23\u0106\u0108\u010A\u010C\u00C7\u1E08\u0187\u023B\uA73E]/g},{base:"D",letters:/[\u0044\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779]/g},{base:"DZ",letters:/[\u01F1\u01C4]/g},{base:"Dz",letters:/[\u01F2\u01C5]/g},{base:"E",letters:/[\u0045\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E]/g},{base:"F",letters:/[\u0046\u24BB\uFF26\u1E1E\u0191\uA77B]/g},{base:"G",letters:/[\u0047\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E]/g},{base:"H",letters:/[\u0048\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D]/g},{base:"I",letters:/[\u0049\u24BE\uFF29\u00CC\u00CD\u00CE\u0128\u012A\u012C\u0130\u00CF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197]/g},{base:"J",letters:/[\u004A\u24BF\uFF2A\u0134\u0248]/g},{base:"K",letters:/[\u004B\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2]/g},{base:"L",letters:/[\u004C\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780]/g},{base:"LJ",letters:/[\u01C7]/g},{base:"Lj",letters:/[\u01C8]/g},{base:"M",letters:/[\u004D\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C]/g},{base:"N",letters:/[\u004E\u24C3\uFF2E\u01F8\u0143\u00D1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4]/g},{base:"NJ",letters:/[\u01CA]/g},{base:"Nj",letters:/[\u01CB]/g},{base:"O",letters:/[\u004F\u24C4\uFF2F\u00D2\u00D3\u00D4\u1ED2\u1ED0\u1ED6\u1ED4\u00D5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\u00D6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\u00D8\u01FE\u0186\u019F\uA74A\uA74C]/g},{base:"OI",letters:/[\u01A2]/g},{base:"OO",letters:/[\uA74E]/g},{base:"OU",letters:/[\u0222]/g},{base:"P",letters:/[\u0050\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754]/g},{base:"Q",letters:/[\u0051\u24C6\uFF31\uA756\uA758\u024A]/g},{base:"R",letters:/[\u0052\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782]/g},{base:"S",letters:/[\u0053\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784]/g},{base:"T",letters:/[\u0054\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786]/g},{base:"TZ",letters:/[\uA728]/g},{base:"U",letters:/[\u0055\u24CA\uFF35\u00D9\u00DA\u00DB\u0168\u1E78\u016A\u1E7A\u016C\u00DC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244]/g},{base:"V",letters:/[\u0056\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245]/g},{base:"VY",letters:/[\uA760]/g},{base:"W",letters:/[\u0057\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72]/g},{base:"X",letters:/[\u0058\u24CD\uFF38\u1E8A\u1E8C]/g},{base:"Y",letters:/[\u0059\u24CE\uFF39\u1EF2\u00DD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE]/g},{base:"Z",letters:/[\u005A\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762]/g},{base:"a",letters:/[\u0061\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250]/g},{base:"aa",letters:/[\uA733]/g},{base:"ae",letters:/[\u00E6\u01FD\u01E3]/g},{base:"ao",letters:/[\uA735]/g},{base:"au",letters:/[\uA737]/g},{base:"av",letters:/[\uA739\uA73B]/g},{base:"ay",letters:/[\uA73D]/g},{base:"b",letters:/[\u0062\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253]/g},{base:"c",letters:/[\u0063\u24D2\uFF43\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184]/g},{base:"d",letters:/[\u0064\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A]/g},{base:"dz",letters:/[\u01F3\u01C6]/g},{base:"e",letters:/[\u0065\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD]/g},{base:"f",letters:/[\u0066\u24D5\uFF46\u1E1F\u0192\uA77C]/g},{base:"g",letters:/[\u0067\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F]/g},{base:"h",letters:/[\u0068\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265]/g},{base:"hv",letters:/[\u0195]/g},{base:"i",letters:/[\u0069\u24D8\uFF49\u00EC\u00ED\u00EE\u0129\u012B\u012D\u00EF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131]/g},{base:"j",letters:/[\u006A\u24D9\uFF4A\u0135\u01F0\u0249]/g},{base:"k",letters:/[\u006B\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3]/g},{base:"l",letters:/[\u006C\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747]/g},{base:"lj",letters:/[\u01C9]/g},{base:"m",letters:/[\u006D\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F]/g},{base:"n",letters:/[\u006E\u24DD\uFF4E\u01F9\u0144\u00F1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5]/g},{base:"nj",letters:/[\u01CC]/g},{base:"o",letters:/[\u006F\u24DE\uFF4F\u00F2\u00F3\u00F4\u1ED3\u1ED1\u1ED7\u1ED5\u00F5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\u00F6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\u00F8\u01FF\u0254\uA74B\uA74D\u0275]/g},{base:"oi",letters:/[\u01A3]/g},{base:"ou",letters:/[\u0223]/g},{base:"oo",letters:/[\uA74F]/g},{base:"p",letters:/[\u0070\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755]/g},{base:"q",letters:/[\u0071\u24E0\uFF51\u024B\uA757\uA759]/g},{base:"r",letters:/[\u0072\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783]/g},{base:"s",letters:/[\u0073\u24E2\uFF53\u00DF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B]/g},{base:"t",letters:/[\u0074\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787]/g},{base:"tz",letters:/[\uA729]/g},{base:"u",letters:/[\u0075\u24E4\uFF55\u00F9\u00FA\u00FB\u0169\u1E79\u016B\u1E7B\u016D\u00FC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289]/g},{base:"v",letters:/[\u0076\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C]/g},{base:"vy",letters:/[\uA761]/g},{base:"w",letters:/[\u0077\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73]/g},{base:"x",letters:/[\u0078\u24E7\uFF58\u1E8B\u1E8D]/g},{base:"y",letters:/[\u0079\u24E8\uFF59\u1EF3\u00FD\u0177\u1EF9\u0233\u1E8F\u00FF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF]/g},{base:"z",letters:/[\u007A\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763]/g}],t=0;t<r.length;t++)e=e.replace(r[t].letters,r[t].base);return e}function*Na(e,r,t){(!t||t>e.length)&&(t=e.length);let n=0,i=0;for(;n<t&&i<e.length;)r(e[i])&&(yield e[i],n++),i++}function ES(e,r){for(var t=0,n=e.length;t<n;t++)if(e[t].name?.toLowerCase()===r)return e.unshift(e.splice(t,1)[0]),e;return e}function wp(e){return G1(e.trim().toLowerCase()).replace(/(\w) (\w)/g,"$1-$2")}function W1(e,r,t=5){r=wp(r);let n=Na(e,d=>d.name?.toLowerCase().indexOf(r)===0,t),i=Array.from(n),o=i.map(d=>d.id);if(i.length<t){var s=Na(e,d=>o.includes(d.id)?!1:d.name?.toLowerCase().indexOf(r)!==-1,t-i.length),l=Array.from(s);l.forEach(d=>i.push(d))}if(o=i.map(d=>d.id),i.length<t){var u=Na(e,h=>{if(o.includes(h.id))return!1;for(var f=0,g=h.aliases.length;f<g;f++){if(h.aliases[f].name==null)return console.error(`Invalid alias in ${h.name}`),!1;if(h.aliases[f].name.indexOf(r)!==-1)return h.aliases[f].match=!0,!0}return!1},t-i.length);Array.from(u).forEach(h=>i.push(h))}return ES(i,r)}var q1=`<div part="grid">
  <input part="input" type="text" />
  <svg viewBox="0 0 24 24"><path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" /></svg>
  <div part="menu">
    <ul part="list"></ul>
    <section part="empty">
      <strong>No Results</strong>
      <a part="reqIcon" href="https://github.com/Templarian/MaterialDesign/issues/new?labels=Icon+Request&template=1_icon_request.md&title=" target="_blank">
        Request an Icon
        <svg viewBox="0 0 24 24"><path fill="currentColor" d="M10.59,13.41C11,13.8 11,14.44 10.59,14.83C10.2,15.22 9.56,15.22 9.17,14.83C7.22,12.88 7.22,9.71 9.17,7.76V7.76L12.71,4.22C14.66,2.27 17.83,2.27 19.78,4.22C21.73,6.17 21.73,9.34 19.78,11.29L18.29,12.78C18.3,11.96 18.17,11.14 17.89,10.36L18.36,9.88C19.54,8.71 19.54,6.81 18.36,5.64C17.19,4.46 15.29,4.46 14.12,5.64L10.59,9.17C9.41,10.34 9.41,12.24 10.59,13.41M13.41,9.17C13.8,8.78 14.44,8.78 14.83,9.17C16.78,11.12 16.78,14.29 14.83,16.24V16.24L11.29,19.78C9.34,21.73 6.17,21.73 4.22,19.78C2.27,17.83 2.27,14.66 4.22,12.71L5.71,11.22C5.7,12.04 5.83,12.86 6.11,13.65L5.64,14.12C4.46,15.29 4.46,17.19 5.64,18.36C6.81,19.54 8.71,19.54 9.88,18.36L13.41,14.83C14.59,13.66 14.59,11.76 13.41,10.59C13,10.2 13,9.56 13.41,9.17Z" /></svg>
      </a>
      <a part="reqDoc" href="https://github.com/Templarian/MaterialDesign/issues/new?labels=Documentation&template=6_doc_guide_request.md&title=" target="_blank">
        Request Documentation
        <svg viewBox="0 0 24 24"><path fill="currentColor" d="M10.59,13.41C11,13.8 11,14.44 10.59,14.83C10.2,15.22 9.56,15.22 9.17,14.83C7.22,12.88 7.22,9.71 9.17,7.76V7.76L12.71,4.22C14.66,2.27 17.83,2.27 19.78,4.22C21.73,6.17 21.73,9.34 19.78,11.29L18.29,12.78C18.3,11.96 18.17,11.14 17.89,10.36L18.36,9.88C19.54,8.71 19.54,6.81 18.36,5.64C17.19,4.46 15.29,4.46 14.12,5.64L10.59,9.17C9.41,10.34 9.41,12.24 10.59,13.41M13.41,9.17C13.8,8.78 14.44,8.78 14.83,9.17C16.78,11.12 16.78,14.29 14.83,16.24V16.24L11.29,19.78C9.34,21.73 6.17,21.73 4.22,19.78C2.27,17.83 2.27,14.66 4.22,12.71L5.71,11.22C5.7,12.04 5.83,12.86 6.11,13.65L5.64,14.12C4.46,15.29 4.46,17.19 5.64,18.36C6.81,19.54 8.71,19.54 9.88,18.36L13.41,14.83C14.59,13.66 14.59,11.76 13.41,10.59C13,10.2 13,9.56 13.41,9.17Z" /></svg>
      </a>
    </section>
  </div>
</div>`;var Q1=`:host {\r
  display: block;\r
  align-self: center;\r
  font-family: var(--pg-font-family, system-ui);\r
}\r
\r
div {\r
  display: grid;\r
  grid-template-columns: 1fr 0;\r
  grid-template-rows: 1fr 0;\r
}\r
input {\r
  grid-row: 1;\r
  grid-column: 1;\r
  border-radius: 0.25rem;\r
  border: 0;\r
  padding: 0.25rem 0.5rem;\r
  font-size: 1rem;\r
  outline: none;\r
  width: calc(100% - 1rem);\r
  border: .0625rem solid var(--pg-search-border-color);\r
}\r
input:active {\r
  box-shadow: 0 0 0 3px var(--pg-search-active-glow, rgba(79, 143, 249, 0.6));\r
}\r
input:focus {\r
  box-shadow: 0 0 0 3px var(--pg-focus-color, rgba(79, 143, 249, 0.5));\r
}\r
.active input + svg path {\r
  fill: #453C4F;\r
}\r
svg {\r
  grid-row: 1;\r
  grid-column: 2;\r
  width: 1.5rem;\r
  height: 1.5rem;\r
  justify-self: right;\r
  margin-right: 0.25rem;\r
  pointer-events: none;\r
  align-self: center;\r
}\r
svg > path {\r
  transition: fill 0.3s ease-in-out;\r
}\r
[part=menu] {\r
  display: none;\r
  background: #FFF;\r
  grid-row: 2;\r
  grid-column: 1 / span 2;\r
  z-index: 1;\r
}\r
ul {\r
  list-style: none;\r
  display: flex;\r
  flex-direction: column;\r
  padding: 0;\r
  margin: 0;\r
  border-radius: 0.25rem;\r
  box-shadow: 0 0.125rem 0.75rem rgba(0, 0, 0, 0.4);\r
}\r
ul > li {\r
  color: #222;\r
}\r
ul > li > a {\r
  display: flex;\r
  padding: 0.25rem 0.5rem;\r
  background: #FFF;\r
  border-left: 1px solid #DDD;\r
  border-right: 1px solid #DDD;\r
}\r
ul > li > a:hover,\r
ul > li > a:active,\r
ul > li > a:focus {\r
  background: #DAF4FB;\r
}\r
ul > li.item:first-child > a {\r
  border-top: 1px solid #DDD;\r
  border-bottom: 1px solid #DDD;\r
  border-radius: 0.25rem 0.25rem 0 0;\r
}\r
ul > li.item:not(:first-child) > a {\r
  border-bottom: 1px solid #DDD;\r
}\r
ul > li.item:last-child > a {\r
  border-radius: 0 0 0.25rem 0.25rem;\r
}\r
ul > li > a {\r
  text-decoration: none;\r
  color: #222;\r
}\r
ul > li > a strong {\r
  color: #453C4F;\r
}\r
.section {\r
  color: #FFF;\r
  padding: 0.25rem 0.5rem;\r
  font-weight: bold;\r
  background: #453C4F;\r
  border-radius: 0.25rem 0.25rem 0 0;\r
  cursor: default;\r
}\r
.section + li a {\r
  border-radius: 0;\r
}\r
\r
li + .section {\r
  border-radius: 0;\r
}\r
\r
.type {\r
  background-color: #453C4F;\r
  border-radius: 0.25rem;\r
  font-size: 0.75rem;\r
  color: #fff;\r
  padding-left: 0.25rem;\r
  padding-right: 0.25rem;\r
  margin: 0.125rem 0 0.125rem 0.25rem;\r
  align-self: end;\r
}\r
\r
.icon {\r
  background-color: #453C4F;\r
  padding-left: 0.25rem;\r
  padding-right: 0.25rem;\r
}\r
.icon.first > a {\r
  border-top-left-radius: 0.25rem;\r
  border-top-right-radius: 0.25rem;\r
}\r
.icon.last {\r
  padding-bottom: 0.25rem;\r
  border-bottom-left-radius: 0.25rem;\r
  border-bottom-right-radius: 0.25rem;\r
}\r
.icon.last > a {\r
  border-radius: 0 0 0.25rem 0.25rem;\r
}\r
.icon svg {\r
  color: #453C4F;\r
  margin-right: 0.345rem;\r
  margin-left: -0.25rem;\r
}\r
\r
.all {\r
  background-color: #453C4F;\r
  padding: 0 0.25rem 0.25rem 0.25rem;\r
  border-radius: 0 0 0.25rem 0.25rem;\r
}\r
\r
.all a {\r
  border-radius: 0.25rem;\r
}\r
\r
[part~=empty] {\r
  background: #453C4F;\r
  border-radius: 0.25rem;\r
  padding: 0.25rem;\r
  box-shadow: 0 0.125rem 0.75rem rgba(0, 0, 0, 0.4);\r
}\r
[part~=empty] strong {\r
  color: #fff;\r
  padding: 0 0.25rem;\r
}\r
[part~=empty] a {\r
  display: block;\r
  background: #fff;\r
  color: #453C4F;\r
  text-decoration: none;\r
  padding: 0.25rem 0.5rem;\r
  border-radius: 0.25rem;\r
  margin-top: 0.25rem;\r
}\r
[part~=empty] a:hover,\r
[part~=empty] a:active,\r
[part~=empty] a:focus {\r
  background: #DAF4FB;\r
}\r
[part~=empty] a svg {\r
  vertical-align: middle;\r
  width: 1.5rem;\r
  height: 1.5rem;\r
  float: right;\r
  margin: -0.125rem -0.25rem 0 0;\r
}\r
\r
.hide {\r
  display: none;\r
}`;var Z1={ArrowUp:"ArrowUp",ArrowRight:"ArrowRight",ArrowDown:"ArrowDown",ArrowLeft:"ArrowLeft"},P1,J1,X1,eb,tb,rb,nb,ib,ob,ab,sb,le;sb=[k({selector:"pg-search",style:Q1,template:q1})];var Rt=class extends(ab=HTMLElement,ob=[L()],ib=[L()],nb=[m()],rb=[m()],tb=[m()],eb=[m()],X1=[m()],J1=[m()],P1=[m()],ab){constructor(){super(...arguments);p(this,"items",a(le,8,this,[])),a(le,11,this);p(this,"icons",a(le,12,this,[])),a(le,15,this);p(this,"$grid",a(le,16,this)),a(le,19,this);p(this,"$menu",a(le,20,this)),a(le,23,this);p(this,"$input",a(le,24,this)),a(le,27,this);p(this,"$list",a(le,28,this)),a(le,31,this);p(this,"$empty",a(le,32,this)),a(le,35,this);p(this,"$reqIcon",a(le,36,this)),a(le,39,this);p(this,"$reqDoc",a(le,40,this)),a(le,43,this);p(this,"isOpen",!1);p(this,"isOver",!1);p(this,"term","");p(this,"keyIndex",-1);p(this,"anchors",[])}connectedCallback(){this.$input.addEventListener("input",this.handleInput.bind(this)),this.$input.addEventListener("focus",this.handleFocus.bind(this)),this.$input.addEventListener("blur",this.handleBlur.bind(this)),this.addEventListener("keydown",this.keydown.bind(this)),this.$list.addEventListener("mouseenter",this.handleListEnter.bind(this)),this.$list.addEventListener("mouseleave",this.handleListLeave.bind(this))}handleInput(t){let n=t.target,{value:i}=n;this.term=i,this.updateList()}handleFocus(){this.keyIndex=-1,this.updateList(),this.isOpen=!0,this.$menu.style.display="block",this.$grid.classList.add("active")}handleBlur(){this.isOver||(this.isOpen=!1,this.$menu.style.display="none",this.$grid.classList.remove("active"),this.keyIndex-=1)}keydown(t){switch(t.key){case Z1.ArrowDown:this.keyIndex+=1,this.setActive(),t.preventDefault(),t.stopPropagation();break;case Z1.ArrowUp:this.keyIndex-=1,this.setActive(),t.preventDefault(),t.stopPropagation();break}}setActive(){this.keyIndex===-2&&(this.keyIndex=this.anchors.length-1),this.keyIndex===this.anchors.length&&(this.keyIndex=-1),this.keyIndex===-1?(this.$input.focus(),this.isOver=!1):(this.isOver=!0,this.anchors[this.keyIndex].focus())}handleListEnter(){this.isOver=!0}handleListLeave(){this.isOver=!1}highlight(t){var n=0,i=t;let o=document.createElement("span"),s=wp(this.term);if(this.term==="")return o.innerText=t,o;for(;i;){var l=i.toLowerCase().indexOf(s);if(l===-1){let u=document.createElement("span");u.innerText=i.substr(0,i.length),o.appendChild(u),i=""}else{if(l>0){let d=document.createElement("span");d.innerText=i.substr(0,l),o.appendChild(d)}let u=document.createElement("strong");u.innerText=i.substr(l,s.length),o.appendChild(u),i=i.substr(l+s.length,i.length)}}return o}clearList(){for(;this.$list.firstChild;)this.$list.removeChild(this.$list.firstChild);this.anchors=[]}updateList(){this.clearList();let t=!1,n=new RegExp(this.term,"i"),i=Array.from(Na(this.items,u=>u.name.match(n),5));if(i.forEach((u,d)=>{var h=document.createElement("li");h.classList.add("item"),h.classList.toggle("first",d===0),h.classList.toggle("last",d===i.length-1);var f=document.createElement("a");f.href=u.url;var g=this.highlight(u.name);f.appendChild(g);var b=document.createElement("span");b.innerText=u.type,b.classList.add("type"),f.appendChild(b),h.appendChild(f),this.$list.appendChild(h),this.anchors.push(f),t=!0}),this.term!==""){let u=W1(this.icons,this.term,5);if(u.length){var o=document.createElement("li");o.innerText="Icons",o.classList.add("section"),this.$list.appendChild(o)}if(u.forEach((d,h)=>{var f=document.createElement("li");f.classList.add("icon"),f.classList.toggle("first",h===0),f.classList.toggle("last",h===u.length-1);var g=document.createElement("a");g.href=`/icon/${d.name}`;var b=d.aliases.reduce((C,S)=>(S.match&&C.push(S.name||""),C),[]),w="";b.length&&(w=` (${b.join(", ")})`);let v=this.highlight(`${d.name}${w}`),y=document.createElementNS("http://www.w3.org/2000/svg","svg");y.setAttribute("viewBox","0 0 24 24"),y.setAttribute("fill","currentColor");let E=document.createElementNS("http://www.w3.org/2000/svg","path");E.setAttribute("d",d.data),y.appendChild(E),g.appendChild(y),g.appendChild(v),f.appendChild(g),this.anchors.push(g),this.$list.appendChild(f)}),u.length===5){var o=document.createElement("li");o.classList.add("all");var s=document.createElement("a");s.href=`/icons?search=${this.term}`,s.appendChild(document.createTextNode('All results for "'));var l=document.createElement("strong");l.innerText=this.term,s.appendChild(l),s.appendChild(document.createTextNode('"')),o.appendChild(s),this.anchors.push(s),this.$list.appendChild(o)}u.length>0&&(t=!0)}t||(this.anchors.push(this.$reqIcon),this.anchors.push(this.$reqDoc)),this.$empty.classList.toggle("hide",t)}};le=A(ab),c(le,5,"items",ob,Rt),c(le,5,"icons",ib,Rt),c(le,5,"$grid",nb,Rt),c(le,5,"$menu",rb,Rt),c(le,5,"$input",tb,Rt),c(le,5,"$list",eb,Rt),c(le,5,"$empty",X1,Rt),c(le,5,"$reqIcon",J1,Rt),c(le,5,"$reqDoc",P1,Rt),Rt=c(le,0,"PgSearch",sb,Rt),a(le,1,Rt);var lb=`<nav part="nav">
  <a href="/">
    <span part="name"></span>
  </a>
  <a href="/icons">
    Icons
  </a>
  <a href="/icons">
    Docs
  </a>
  <button part="menu">
    <svg viewBox="0 0 24 24">
      <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
    </svg>
  </button>
</nav>`;var ub=`:host {\r
  align-self: center;\r
}\r
svg {\r
  width: 1.5rem;\r
  height: 1.5rem;\r
}\r
button {\r
  border: 0;\r
  background: transparent;\r
}\r
button > svg {\r
  fill: #fff;\r
}`;var AS="M0 0h24v24H0V0zm2 2v20h20V2H2z",cb,pb,db,hb,ri;hb=[k({selector:"pg-nav",style:ub,template:lb})];var Zi=class extends(db=HTMLElement,pb=[L()],cb=[m()],db){constructor(){super(...arguments);p(this,"nav",a(ri,8,this,AS)),a(ri,11,this);p(this,"$path",a(ri,12,this)),a(ri,15,this)}render(){}};ri=A(db),c(ri,5,"nav",pb,Zi),c(ri,5,"$path",cb,Zi),Zi=c(ri,0,"PgNav",hb,Zi),a(ri,1,Zi);var fb=`<div class="example">
  <pg-header
    logo="M2,2H8V4H16V2H22V8H20V16H22V22H16V20H8V22H2V16H4V8H2V2M16,8V6H8V8H6V16H8V18H16V16H18V8H16M4,4V6H6V4H4M18,4V6H20V4H18M4,18V20H6V18H4M18,18V20H20V18H18Z"
    name="Material Design Icons">
    <pg-search slot="search"></pg-search>
    <pg-nav slot="nav"></pg-nav>
  </pg-nav>
</div>`;var mb,Cp,kS;mb=[k({selector:"x-pg-header-basic",template:fb})];var Va=class extends(kS=HTMLElement){};Cp=A(kS),Va=c(Cp,0,"XPgHeaderBasic",mb,Va),a(Cp,1,Va);var gb=`<div class="example">
  <pg-icon part="icon1"></pg-icon>
</div>
<button part="buttonClear">
  Clear Icon
</button>
<button part="buttonAccount">
  Set icon to Account
</button>
<button part="buttonSquare">
  Set icon to Square
</button>

<div class="example" style="--pg-icon-viewbox: 0 0 22 22">
  <pg-icon part="icon2" path="M9 3H13V4H14V5H15V9H14V10H13V11H9V10H8V9H7V5H8V4H9V3M10 8V9H12V8H13V6H12V5H10V6H9V8H10M7 12H15V13H17V14H18V15H19V19H3V15H4V14H5V13H7V12M6 16H5V17H17V16H16V15H14V14H8V15H6V16Z"></pg-icon>
</div>`;var bb="M12,4C14.21,4 16,5.79 16,8C16,10.21 14.21,12 12,12C9.79,12 8,10.21 8,8C8,5.79 9.79,4 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z",vb="M2,2H8V4H16V2H22V8H20V16H22V22H16V20H8V22H2V16H4V8H2V2M16,8V6H8V8H6V16H8V18H16V16H18V8H16M4,4V6H6V4H4M18,4V6H20V4H18M4,18V20H6V18H4M18,18V20H20V18H18Z";var xb,yb,Eb,wb,Cb,Ab,_t;Ab=[k({selector:"x-pg-icon-basic",template:gb})];var An=class extends(Cb=HTMLElement,wb=[m()],Eb=[m()],yb=[m()],xb=[m()],Cb){constructor(){super(...arguments);p(this,"$icon1",a(_t,8,this)),a(_t,11,this);p(this,"$buttonClear",a(_t,12,this)),a(_t,15,this);p(this,"$buttonAccount",a(_t,16,this)),a(_t,19,this);p(this,"$buttonSquare",a(_t,20,this)),a(_t,23,this)}connectedCallback(){this.$buttonClear.addEventListener("click",this.handleClear.bind(this)),this.$buttonAccount.addEventListener("click",this.handleAccount.bind(this)),this.$buttonSquare.addEventListener("click",this.handleSquare.bind(this))}handleClear(){this.$icon1.path="M0 0h24v24H0V0zm2 2v20h20V2H2z"}handleAccount(){this.$icon1.path=bb}handleSquare(){this.$icon1.path=vb}};_t=A(Cb),c(_t,5,"$icon1",wb,An),c(_t,5,"$buttonClear",Eb,An),c(_t,5,"$buttonAccount",yb,An),c(_t,5,"$buttonSquare",xb,An),An=c(_t,0,"XPgIconBasic",Ab,An),a(_t,1,An);var kb=`<button part="button">
  <svg part="svg" viewBox="0 0 24 24">
    <path part="path" fill="currentColor" d="M19 19L5 19V5H15V3H5C3.89 3 3 3.89 3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V11H19"/>
	  <path part="check" fill="currentColor" d="M7.91 10.08L6.5 11.5L11 16L21 6L19.59 4.58L11 13.17L7.91 10.08Z"/>
  </svg>
</button>`;var Lb=`:host {\r
  display: inline-flex;\r
}\r
\r
.blank {\r
  color: var(--pg-input-check-blank-color, #453C4F);\r
}\r
.blank [part="check"] {\r
  visibility: hidden;\r
}\r
\r
.checked {\r
  color: var(--pg-input-check-checked-color, #453C4F);\r
}\r
\r
[part="button"] {\r
  display: flex;\r
  padding: 0;\r
  border: 0;\r
  outline: 0;\r
  border-radius: 0.25rem;\r
  background: transparent;\r
}\r
\r
[part="button"].readonly {\r
  display: contents;\r
  pointer-events: none;\r
}\r
\r
[part="svg"] {\r
  width: var(--pg-icon-check-size, 1.5rem);\r
  height: var(--pg-icon-check-size, 1.5rem);\r
}\r
\r
[part="button"]:not(:hover):active {\r
  box-shadow: 0 0 0 3px var(--pg-input-check-active-glow, rgb(79, 143, 249, 0.6));\r
}\r
[part="button"]:not(:hover):focus:not(:focus-visible) {\r
  box-shadow: none;\r
}\r
[part="button"]:not(:hover):focus {\r
  box-shadow: 0 0 0 3px var(--pg-input-check-focus-glow, rgb(79, 143, 249, 0.5));\r
}\r
[part="button"]:not(:disabled):hover [part="path"] {\r
  fill: #4f8ff9;\r
}\r
\r
[part="button"]:disabled {\r
  color: #AAA;\r
}`;var FS="M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z",SS="M19 19L5 19V5H15V3H5C3.89 3 3 3.89 3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V11H19",Fb,Sb,Mb,Tb,Db,$b,Hb,et;Hb=[k({selector:"pg-input-check",style:Lb,template:kb})];var sn=class extends($b=HTMLElement,Db=[L()],Tb=[L()],Mb=[L()],Sb=[m()],Fb=[m()],$b){constructor(){super(...arguments);p(this,"value",a(et,8,this,!1)),a(et,11,this);p(this,"disabled",a(et,12,this,!1)),a(et,15,this);p(this,"readOnly",a(et,16,this,!1)),a(et,19,this);p(this,"$button",a(et,20,this)),a(et,23,this);p(this,"$path",a(et,24,this)),a(et,27,this)}connectedCallback(){this.$button.addEventListener("click",this.handleClick.bind(this))}handleClick(){let t=[!0,"true"].includes(this.value);this.value=!t,this.dispatchEvent(new CustomEvent("change"))}render(t){if(t.value){let n=[!0,"true"].includes(this.value);this.$path.setAttribute("d",n?SS:FS),this.$button.classList.toggle("blank",!n),this.$button.classList.toggle("checked",n)}t.disabled&&(this.$button.disabled=["",!0,"true"].includes(this.disabled)),t.readOnly&&this.$button.classList.toggle("readonly",this.readOnly)}};et=A($b),c(et,5,"value",Db,sn),c(et,5,"disabled",Tb,sn),c(et,5,"readOnly",Mb,sn),c(et,5,"$button",Sb,sn),c(et,5,"$path",Fb,sn),sn=c(et,0,"PgInputCheck",Hb,sn),a(et,1,sn);var Ib=`<div class="example">
  <pg-input-check part="input" value="true"></pg-input-check>
  <pg-input-check disabled></pg-input-check>
  <pg-input-check value="true" disabled></pg-input-check>
  <div>
    <code>onchange: <span part="value"></span></code>
  </div>
</div>`;var Rb,_b,Bb,Ob,ni;Ob=[k({selector:"x-pg-input-check-basic",template:Ib})];var Pi=class extends(Bb=HTMLElement,_b=[m()],Rb=[m()],Bb){constructor(){super(...arguments);p(this,"$input",a(ni,8,this)),a(ni,11,this);p(this,"$value",a(ni,12,this)),a(ni,15,this)}connectedCallback(){this.$input.addEventListener("change",this.handleChange.bind(this))}handleChange(t){var n=t.target.value;this.$value.innerText=n}};ni=A(Bb),c(ni,5,"$input",_b,Pi),c(ni,5,"$value",Rb,Pi),Pi=c(ni,0,"XPgInputCheckBasic",Ob,Pi),a(ni,1,Pi);var Nb='<ul part="list"></ul>';var Vb=`:host {\r
  display: flex;\r
  flex-direction: column;\r
}\r
\r
.blank {\r
  color: var(--pg-input-check-blank-color, #453C4F);\r
}\r
.blank [part="check"] {\r
  visibility: hidden;\r
}\r
\r
.checked {\r
  color: var(--pg-input-check-checked-color, #453C4F);\r
}\r
\r
[part="list"] {\r
  display: flex;\r
  flex-direction: column;\r
  list-style: none;\r
  margin: 0;\r
  padding: 0.25rem 0;\r
}\r
\r
[part="list"] li {\r
  display: flex;\r
  flex-direction: column;\r
}\r
\r
[part="list"] li:not(:last-child) {\r
  margin-bottom: 0.25rem;\r
}\r
\r
[part="list"] button {\r
  display: flex;\r
  padding: 0;\r
  border: 0;\r
  outline: 0;\r
  border-radius: 0.25rem;\r
  align-items: center;\r
  background: transparent;\r
}\r
\r
[part="svg"] {\r
  width: var(--pg-icon-check-size, 1.5rem);\r
  height: var(--pg-icon-check-size, 1.5rem);\r
}\r
\r
[part="list"] button span {\r
  margin-left: 0.25rem;\r
}\r
\r
[part="list"] button:not(:hover):active {\r
  box-shadow: 0 0 0 3px var(--pg-input-check-active-glow, rgb(79, 143, 249, 0.6));\r
}\r
[part="list"] button:not(:hover):focus:not(:focus-visible) {\r
  box-shadow: none;\r
}\r
[part="list"] button:not(:hover):focus-visible {\r
  box-shadow: 0 0 0 3px var(--pg-input-check-focus-glow, rgb(79, 143, 249, 0.5));\r
}\r
[part="list"] button:not(:disabled):hover [part="path"] {\r
  fill: #4f8ff9;\r
}\r
[part="list"] button:not(:disabled):hover span {\r
  color: #4f8ff9;\r
}\r
[part="list"] button:disabled {\r
  color: #AAA;\r
}`;function cu(e,r,t,n,i){let o=Array.from(e.children),s=o.map(u=>u.dataset.key),l=r.map(u=>u[t]);r.forEach(u=>{if(s.includes(u[t])){let d=o.find(h=>h.dataset.key===s[t]);if(u[t]===s[t]){i(u,d);return}}else{let d=n(u);d instanceof DocumentFragment?d.children[0].dataset.key=u[t]:d.dataset.key=u[t],e.appendChild(d);return}}),o.forEach(u=>{l.includes(u.dataset.key)||u.remove()})}function zb(e,r,t){return Array.from(e.children).find(o=>o.dataset.key===r[t])}var TS="M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z",DS="M19 19L5 19V5H15V3H5C3.89 3 3 3.89 3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V11H19";var jb,Yb,Kb,Ub,Gb,Br;Gb=[k({selector:"pg-input-check-list",style:Vb,template:Nb})];var ii=class extends(Ub=HTMLElement,Kb=[L()],Yb=[L()],jb=[m()],Ub){constructor(){super(...arguments);p(this,"value",a(Br,8,this,[])),a(Br,11,this);p(this,"options",a(Br,12,this,[])),a(Br,15,this);p(this,"$list",a(Br,16,this)),a(Br,19,this)}connectedCallback(){}handleClick(t){let n=this.value.includes(t.value),i=zb(this.$list,t,"value"),o=i.querySelector("button");o?.classList.toggle("blank",n),o?.classList.toggle("checked",!n),i.querySelector('[part="path"]')?.setAttribute("d",n?TS:DS),n?this.value.splice(this.value.findIndex(s=>s===t.value),1):this.value.push(t.value),this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value}}))}render(t){t.options,t.value}};Br=A(Ub),c(Br,5,"value",Kb,ii),c(Br,5,"options",Yb,ii),c(Br,5,"$list",jb,ii),ii=c(Br,0,"PgInputCheckList",Gb,ii),a(Br,1,ii);var Wb=`<div class="example">
  <pg-input-check-list part="input"></pg-input-check-list>
  <code>Value: <span part="value"></span></code>
</div>`;var qb,Qb,Zb,Pb,oi;Pb=[k({selector:"x-pg-input-check-list-basic",template:Wb})];var Ji=class extends(Zb=HTMLElement,Qb=[m()],qb=[m()],Zb){constructor(){super(...arguments);p(this,"$input",a(oi,8,this)),a(oi,11,this);p(this,"$value",a(oi,12,this)),a(oi,15,this)}connectedCallback(){this.$input.value.push("uuid1","uuid3"),this.$input.options.push({value:"uuid1",label:"Item 1"},{value:"uuid2",label:"Item 2"},{value:"uuid3",label:"Item 3",disabled:!0},{value:"uuid4",label:"Item 4"}),this.$value.textContent=this.$input.value.join(","),this.$input.addEventListener("change",this.handleChange.bind(this))}handleChange(t){let{value:n}=t.detail;this.$value.textContent=n.join(",")}};oi=A(Zb),c(oi,5,"$input",Qb,Ji),c(oi,5,"$value",qb,Ji),Ji=c(oi,0,"XPgInputCheckListBasic",Pb,Ji),a(oi,1,Ji);var Jb=`<label part="label">
  <input type="file" part="file" />
  <svg part="icon" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M9,16V10H5L12,3L19,10H15V16H9M5,20V18H19V20H5Z" /></svg>
  <span part="text">Upload a File...</span>
</label>`;var Xb=`:host {\r
  display: block;\r
}\r
\r
[part="label"] {\r
  display: grid;\r
  grid-template-columns: 1.5rem auto;\r
  grid-template-rows: auto;\r
  font-family: var(--pg-font-family, system-ui);\r
  font-size: 1rem;\r
  line-height: 1.5rem;\r
  border: 1px solid var(--pg-button-border-color, #453C4F);\r
  background-color: var(--pg-button-background-color, #fff);\r
  color: var(--pg-button-color, #453C4F);\r
  padding: var(--pg-button-padding, 0.25rem 0.5rem);\r
  border-radius: 0.25rem;\r
  outline: none;\r
  --pg-icon-color: var(--pg-button-color, #453C4F);\r
}\r
\r
[part="label"]:hover {\r
  border: 1px solid var(--pg-button-hover-border-color, #453C4F);\r
  background-color: var(--pg-button-hover-background-color, #453C4F);\r
  color: var(--pg-button-hover-color, #fff);\r
  --pg-icon-color: var(--pg-button-hover-color, #fff);\r
}\r
\r
[part="label"]:active {\r
  box-shadow: 0 1px 0.25rem rgba(0, 0, 0, 0.5) inset;\r
  position: relative;\r
}\r
\r
[part="label"]:focus {\r
  position: relative;\r
}\r
\r
[part="label"]:active::before {\r
  content: '';\r
  position: absolute;\r
  top: -1px;\r
  right: -1px;\r
  bottom: -1px;\r
  left: -1px;\r
  border-radius: 0.25rem;\r
  box-shadow: 0 0 0 3px var(--pg-focus-color, rgb(79, 143, 249, 0.6));\r
}\r
\r
[part="label"]:focus::before {\r
  pointer-events: none;\r
  content: '';\r
  position: absolute;\r
  top: -1px;\r
  right: -1px;\r
  bottom: -1px;\r
  left: -1px;\r
  border-radius: 0.25rem;\r
  box-shadow: 0 0 0 3px var(--pg-focus-color, rgb(79, 143, 249, 0.5));\r
}\r
\r
[part="file"] {\r
  width: 100%;\r
  border: 0;\r
  outline: 0;\r
  height: 1.5rem;\r
  grid-row: 1;\r
  grid-column: 1 / span 2;\r
  visibility: hidden;\r
}\r
\r
[part="icon"] {\r
  grid-row: 1;\r
  grid-column: 1;\r
  transform: translate(-0.25rem, 0.075rem);\r
  pointer-events: none;\r
}\r
\r
[part="text"] {\r
  grid-row: 1;\r
  grid-column: 2;\r
  pointer-events: none;\r
}`;var ev,tv,rv,nv,ai;nv=[k({selector:"pg-input-file-local",style:Xb,template:Jb})];var Xi=class extends(rv=HTMLElement,tv=[L()],ev=[m()],rv){constructor(){super(...arguments);p(this,"acceptsFileType",a(ai,8,this,"")),a(ai,11,this);p(this,"$file",a(ai,12,this)),a(ai,15,this)}connectedCallback(){this.$file.addEventListener("change",()=>{if(this.$file.files===null||this.$file.files.length===0){alert("Error : No file selected");return}var t=this.$file.files[0];if(this.acceptsFileType){var n=this.acceptsFileType.split(",").join("|"),i=new RegExp(`(${n})$`,"i");if(t.name.match(i)===null){alert(`${this.acceptsFileType} file only`);return}}var o=new FileReader;o.addEventListener("loadstart",function(){}),o.addEventListener("load",s=>{var l=s.target.result;this.dispatchEvent(new CustomEvent("change",{detail:{value:l,name:t.name}}))}),o.addEventListener("error",function(){alert("Error : Failed to read file")}),o.addEventListener("progress",function(s){if(s.lengthComputable==!0)var l=Math.floor(s.loaded/s.total*100)}),o.readAsText(t)})}render(t){}};ai=A(rv),c(ai,5,"acceptsFileType",tv,Xi),c(ai,5,"$file",ev,Xi),Xi=c(ai,0,"PgInputFileLocal",nv,Xi),a(ai,1,Xi);var iv=`<div class="example">
  <pg-input-file-local part="input" accepts-file-type="svg"></pg-input-file-local>
  <code>onchange: <span part="value"></span></code>
</div>`;var ov,av,sv,lv,si;lv=[k({selector:"x-pg-input-file-local-basic",template:iv})];var eo=class extends(sv=HTMLElement,av=[m()],ov=[m()],sv){constructor(){super(...arguments);p(this,"$input",a(si,8,this)),a(si,11,this);p(this,"$value",a(si,12,this)),a(si,15,this)}connectedCallback(){this.$input.addEventListener("change",this.handleChange.bind(this))}handleChange(t){let{name:n,value:i}=t.detail;this.$value.innerText=`${n} - ${i}`}};si=A(sv),c(si,5,"$input",av,eo),c(si,5,"$value",ov,eo),eo=c(si,0,"XPgInputFileLocalBasic",lv,eo),a(si,1,eo);function kp(e){var r=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return r?{r:parseInt(r[1],16),g:parseInt(r[2],16),b:parseInt(r[3],16)}:null}function pu(e){let r=e.toUpperCase();return r.length===7?r:r.length===4?`#${r[1]}${r[1]}${r[2]}${r[2]}${r[3]}${r[3]}`:"#000000"}function Ap(e){var r=e.toString(16);return r.length==1?"0"+r:r}function Lp(e,r,t){return"#"+Ap(e)+Ap(r)+Ap(t)}var uv=`<div>
  <input part="hex" type="text" />
  <label part="labelRed">R</label>
  <input part="red" type="number" step="1" min="0" max="255" />
  <label part="labelGreen">G</label>
  <input part="green" type="number" step="1" min="0" max="255" />
  <label part="labelBlue">B</label>
  <input part="blue" type="number" step="1" min="0" max="255" />
</div>`;var cv=`:host {\r
  display: block;\r
}\r
\r
:host > div {\r
  display: grid;\r
  grid-template-rows: auto 1rem 2rem 1rem 2rem 1rem 2rem;\r
  grid-template-rows: 1fr;\r
}\r
\r
[part~="hex"] {\r
  grid-row: 1;\r
  grid-column: 1;\r
}\r
\r
[part~="labelRed"] {\r
  grid-row: 1;\r
  grid-column: 2;\r
  background: red;\r
}\r
\r
[part~="red"] {\r
  grid-row: 1;\r
  grid-column: 3;\r
}\r
\r
[part~="labelGreen"] {\r
  grid-row: 1;\r
  grid-column: 4;\r
  background: green;\r
  color: white;\r
}\r
\r
[part~="green"] {\r
  grid-row: 1;\r
  grid-column: 5;\r
}\r
\r
[part~="labelBlue"] {\r
  grid-row: 1;\r
  grid-column: 6;\r
  background: blue;\r
  color: white;\r
}\r
\r
[part~="blue"] {\r
  grid-row: 1;\r
  grid-column: 7;\r
}\r
\r
[part~="labelRed"],\r
[part~="labelGreen"],\r
[part~="labelBlue"] {\r
  display: flex;\r
  margin-left: 0.25rem;\r
  align-items: center;\r
  justify-content: center;\r
  border-radius: 0.25rem 0 0 0.25rem;\r
  color: white;\r
  min-width: 1rem;\r
}\r
\r
[part~="hex"] {\r
  border-radius: 0.25rem;\r
  min-width: 4rem;\r
}\r
\r
[part~="hex"],\r
[part~="red"],\r
[part~="green"],\r
[part~="blue"] {\r
  outline: none;\r
  font-size: 1rem;\r
  padding: 0.25rem 0.5rem;\r
  border: 0;\r
  width: calc(100% - 1rem);\r
}\r
\r
[part~="red"],\r
[part~="green"],\r
[part~="blue"] {\r
  border-radius: 0 0.25rem 0.25rem 0;\r
  -moz-appearance: textfield;\r
  width: calc(100% - 1rem);\r
  min-width: 2rem;\r
}\r
\r
[part~="red"]::-webkit-inner-spin-button,\r
[part~="red"]::-webkit-outer-spin-button,\r
[part~="green"]::-webkit-inner-spin-button,\r
[part~="green"]::-webkit-outer-spin-button,\r
[part~="blue"]::-webkit-inner-spin-button,\r
[part~="blue"]::-webkit-outer-spin-button {\r
  -webkit-appearance: none;\r
  margin: 0;\r
}`;var pv,dv,hv,fv,mv,gv,bv,tt;bv=[k({selector:"pg-input-hex-rgb",style:cv,template:uv})];var ln=class extends(gv=HTMLElement,mv=[L()],fv=[m()],hv=[m()],dv=[m()],pv=[m()],gv){constructor(){super(...arguments);p(this,"value",a(tt,8,this,"#000000")),a(tt,11,this);p(this,"$hex",a(tt,12,this)),a(tt,15,this);p(this,"$red",a(tt,16,this)),a(tt,19,this);p(this,"$green",a(tt,20,this)),a(tt,23,this);p(this,"$blue",a(tt,24,this)),a(tt,27,this)}connectedCallback(){this.$hex.value=this.value,this.updateRgb(),this.$hex.addEventListener("input",this.updateRgbDispatch.bind(this)),this.$red.addEventListener("input",this.updateHexDispatch.bind(this)),this.$green.addEventListener("input",this.updateHexDispatch.bind(this)),this.$blue.addEventListener("input",this.updateHexDispatch.bind(this))}updateRgb(){let t=pu(this.$hex.value),n=kp(t);n!==null&&(this.$red.value=n.r.toString(),this.$green.value=n.g.toString(),this.$blue.value=n.b.toString())}updateRgbDispatch(){this.updateRgb(),this.dispatchSelect()}updateHexDispatch(){this.$hex.value=Lp(parseInt(this.$red.value||"0",10),parseInt(this.$green.value||"0",10),parseInt(this.$blue.value||"0",10)),this.dispatchSelect()}dispatchSelect(){let t=pu(this.$hex.value),n=Lp(parseInt(this.$red.value||"0",10),parseInt(this.$green.value||"0"),parseInt(this.$blue.value||"0"));this.value=t,this.dispatchEvent(new CustomEvent("change",{detail:{hex:t,rgb:n}}))}render(){let t=pu(this.value),n=kp(t);this.$hex.value=t,this.$red.value=`${n?n.r:0}`,this.$green.value=`${n?n.g:0}`,this.$blue.value=`${n?n.b:0}`}};tt=A(gv),c(tt,5,"value",mv,ln),c(tt,5,"$hex",fv,ln),c(tt,5,"$red",hv,ln),c(tt,5,"$green",dv,ln),c(tt,5,"$blue",pv,ln),ln=c(tt,0,"PgInputHexRgb",bv,ln),a(tt,1,ln);var vv=`<div class="example">
  <pg-input-hex-rgb part="input" value="#000000"></pg-input-hex-rgb>
  <code>Selected: <span part="value"></span></code>
</div>`;var xv,yv,Ev,wv,li;wv=[k({selector:"x-pg-input-hex-rgb-basic",template:vv})];var to=class extends(Ev=HTMLElement,yv=[m()],xv=[m()],Ev){constructor(){super(...arguments);p(this,"$input",a(li,8,this)),a(li,11,this);p(this,"$value",a(li,12,this)),a(li,15,this)}connectedCallback(){this.$input.addEventListener("change",this.handleChange.bind(this))}handleChange(t){var{value:n}=t.target;this.$value.innerText=`${n}`}};li=A(Ev),c(li,5,"$input",yv,to),c(li,5,"$value",xv,to),to=c(li,0,"XPgInputHexRgbBasic",wv,to),a(li,1,to);var Cv='<input part="input" type="number" />';var Av=`:host {\r
  display: block;\r
  font-family: var(--pg-font-family, system-ui);\r
}\r
\r
[part=input] {\r
  border: 1px solid var(--pg-input-text-border-color, #453C4F);\r
  border-radius: 0.125rem;\r
  padding: var(--pg-input-text-padding, calc(0.5rem - 1px) 0.75rem);\r
  font-family: var(--pg-input-number-font-family, var(--pg-font-family));\r
  font-size: 1rem;\r
  outline: none;\r
  field-sizing: content;\r
  min-width: calc(100% - 0.5rem - 2px);\r
  max-width: calc(var(--pg-input-text-max-width, 100%) - 0.5rem - 2px);\r
  background-color: transparent;\r
  appearance: textfield;\r
}\r
\r
[part=input]::-webkit-outer-spin-button,\r
[part=input]::-webkit-inner-spin-button {\r
  -webkit-appearance: none;\r
}\r
\r
[part=input]:read-only {\r
  border-color: transparent;\r
}\r
\r
[part=input]:active {\r
  box-shadow: 0 0 0 3px var(--pg-input-text-active-glow, rgb(79, 143, 249, 0.6));\r
}\r
[part=input]:focus {\r
  box-shadow: 0 0 0 3px var(--pg-input-text-focus-glow, rgb(79, 143, 249, 0.5));\r
}\r
`;var kv,Lv,Fv,Sv,Mv,Tv,Dv,rt;Dv=[k({selector:"pg-input-number",style:Av,template:Cv})];var un=class extends(Tv=HTMLElement,Mv=[L()],Sv=[L()],Fv=[L()],Lv=[L()],kv=[m()],Tv){constructor(){super(...arguments);p(this,"name",a(rt,8,this,"")),a(rt,11,this);p(this,"value",a(rt,12,this,"")),a(rt,15,this);p(this,"placeholder",a(rt,16,this,"")),a(rt,19,this);p(this,"readOnly",a(rt,20,this,!1)),a(rt,23,this);p(this,"$input",a(rt,24,this)),a(rt,27,this);p(this,"skipValue",!1)}connectedCallback(){this.$input.addEventListener("input",this.handleInput.bind(this)),this.$input.addEventListener("change",this.handleChange.bind(this))}render(t){t.value&&!this.skipValue&&(this.$input.value=this.value),t.placeholder&&(this.$input.placeholder=this.placeholder),t.readOnly&&(this.$input.readOnly=this.readOnly),this.skipValue=!1}handleInput(t){t.stopPropagation(),this.skipValue=!0,this.value=t.target.value,this.dispatchEvent(new CustomEvent("input",{detail:{value:t.target.value,name:t.name}}))}handleChange(t){this.dispatchEvent(new CustomEvent("change",{detail:{value:t.target.value,name:t.name}}))}};rt=A(Tv),c(rt,5,"name",Mv,un),c(rt,5,"value",Sv,un),c(rt,5,"placeholder",Fv,un),c(rt,5,"readOnly",Lv,un),c(rt,5,"$input",kv,un),un=c(rt,0,"PgInputNumber",Dv,un),a(rt,1,un);var $v=`<div class="example">
  <pg-input-number part="input" value="42"></pg-input-number>
  <div>
    <code>onchange: <span part="value1"></span></code>
  </div>
  <div>
    <code>oninput: <span part="value2"></span></code>
  </div>
</div>`;var Hv,Iv,Rv,_v,Bv,Or,za,Ov,Nv;Bv=[k({selector:"x-pg-input-number-basic",template:$v})];var ui=class extends(_v=HTMLElement,Rv=[m()],Iv=[m()],Hv=[m()],_v){constructor(){super(...arguments);R(this,za);p(this,"$input",a(Or,8,this)),a(Or,11,this);p(this,"$value1",a(Or,12,this)),a(Or,15,this);p(this,"$value2",a(Or,16,this)),a(Or,19,this)}connectedCallback(){this.$input.addEventListener("change",F(this,za,Ov).bind(this)),this.$input.addEventListener("input",F(this,za,Nv).bind(this))}};Or=A(_v),za=new WeakSet,Ov=function(t){let{value:n}=t.detail;this.$value1.textContent=n},Nv=function(t){let{value:n}=t.detail;this.$value2.textContent=n},c(Or,5,"$input",Rv,ui),c(Or,5,"$value1",Iv,ui),c(Or,5,"$value2",Hv,ui),ui=c(Or,0,"XPgInputNumberBasic",Bv,ui),a(Or,1,ui);var Vv=`<div part="wrapper" tabindex="0">
  <canvas part="canvas" draggable="false"></canvas>
  <svg part="selection" viewBox="0 0 10 10">
    <defs>
    <filter id="whiteOutline" x="-50%" y="-50%" width="200%" height="200%">
      <!-- Thicken the source graphic (the original stroke path) -->
      <feMorphology in="SourceGraphic" operator="dilate" radius="1" result="dilated" />

      <!-- Flood the dilated shape with white color -->
      <feFlood flood-color="white" result="flood" />

      <!-- Composite the white color with the dilated shape to create the white outline shape -->
      <feComposite in="flood" in2="dilated" operator="in" result="whiteOutlineShape" />

      <!-- Merge the white outline shape with the original source graphic -->
      <feMerge>
        <feMergeNode in="whiteOutlineShape" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  </defs>
    <path part="selectionPath" class="hide" d="M9,7H1V1H9Z" filter="url(#whiteOutline)" />
    <path part="selectionPathPreview" class="hide preview" d="M9,7H1V1H9Z" filter="url(#whiteOutline)" />
  </svg>
</div>`;var zv=`:host {\r
  display: inline-flex;\r
}\r
\r
[part="wrapper"] {\r
  display: grid;\r
  grid-template-columns: auto;\r
  grid-template-rows: auto;\r
  position: relative;\r
  outline: 0;\r
}\r
\r
[part="wrapper"]:not(.ignore):focus-visible::before {\r
  pointer-events: none;\r
  content: '';\r
  position: absolute;\r
  top: -1px;\r
  right: -1px;\r
  bottom: -1px;\r
  left: -1px;\r
  border-radius: 0.125rem;\r
  box-shadow: 0 0 0 3px var(--pg-focus-color, rgb(79, 143, 249, 0.5));\r
}\r
\r
canvas {\r
  grid-column: 1;\r
  grid-row: 1;\r
  touch-action: none;\r
  user-select: none;\r
  outline: 0;\r
}\r
\r
svg {\r
  pointer-events: none;\r
  grid-column: 1;\r
  grid-row: 1;\r
}\r
\r
path {\r
  fill: none;\r
  stroke: #000;\r
  stroke-width: 1px;\r
  vector-effect: non-scaling-stroke;\r
  stroke-dasharray: 5px;\r
  animation: stroke 0.4s linear infinite;\r
  shape-rendering: geometricPrecision;\r
  stroke-dashoffset: 10px;\r
}\r
\r
path.preview {\r
  stroke: rgb(0 96 255);\r
}\r
\r
path.hide {\r
  display: none;\r
}\r
\r
@keyframes stroke {\r
  to {\r
    stroke-dashoffset: 0;\r
  }\r
}`;function Ps(e){let r=[];for(let t=0;t<e.length;t++){r.push([]);for(let n=0;n<e[0].length;n++)r[t].push(e[t][n])}return r}function _S(e,r,t){return Math.sqrt(Math.pow(r*t,2)+Math.pow(e,2))}function BS(e,r,t,n){return _S(e,r,n)<=t}function OS(e,r,t,n){let i=Math.abs(e-t),o=Math.abs(r-n),s=Math.min(e,t),l=Math.min(r,n),u=[];for(let d=0;d<o;d++)for(let h=0;h<i;h++){let f=-.5*(i-2*(h+.5)),g=-.5*(o-2*(d+.5));BS(f,g,i/2,i/o)&&u.push({x:h+s,y:d+l})}return u}function NS(e,r,t,n){let i=[],o=Math.abs(t-e),s=Math.abs(n-r),l=s&1,u=4*(1-o)*s*s,d=4*(l+1)*o*o,h=u+d+l*o*o,f;e>t&&(e=t,t+=o),r>n&&(r=n),r+=s+1>>1,n=r-l,o=8*o*o,l=8*s*s;do i.push({x:t,y:r}),i.push({x:e,y:r}),i.push({x:e,y:n}),i.push({x:t,y:n}),f=2*h,f<=d&&(r++,n--,h+=d+=o),(f>=u||2*h>d)&&(e++,t--,h+=u+=l);while(e<=t);for(;r-n<=s;)i.push({x:e-1,y:r}),i.push({x:t+1,y:r++}),i.push({x:e-1,y:n}),i.push({x:t+1,y:n--});let g={};for(let w of i)w.y in g?(g[w.y].minX=Math.min(g[w.y].minX,w.x),g[w.y].maxX=Math.max(g[w.y].maxX,w.x)):g[w.y]={minX:w.x,maxX:w.x};let b=[...i];for(let w in g){let{minX:v,maxX:y}=g[w];for(let E=v;E<=y;E++)b.push({x:E,y:parseInt(w)})}return b}function Js(e,r,t,n){return Math.abs(e-t)===Math.abs(r-n)&&Math.abs(e-t)?(console.log("circle",Math.abs(e-t),Math.abs(r-n)),OS(e,r,t+1,n+1)):NS(e,r,t,n)}function VS(e,r,t){return Math.sqrt(Math.pow(r*t,2)+Math.pow(e,2))}function Xs(e,r,t,n){return VS(e,r,n)<=t}function zS(e,r,t,n){return Xs(e,r,t,n)&&!(Xs(e+1,r,t,n)&&Xs(e-1,r,t,n)&&Xs(e,r+1,t,n)&&Xs(e,r-1,t,n))}function jS(e,r,t,n){let i={minX:0,maxX:t,minY:0,maxY:n};return e=-.5*(i.maxX-2*(e+.5)),r=-.5*(i.maxY-2*(r+.5)),zS(e,r,i.maxX/2,i.maxX/i.maxY)}function YS(e,r,t,n){let i=Math.abs(e-t),o=Math.abs(r-n),s=Math.min(e,t),l=Math.min(r,n),u=[];for(let d=0;d<o;d++)for(let h=0;h<i;h++)jS(h,d,i,o)&&u.push({x:h+s,y:d+l});return u}function KS(e,r,t,n){let i=[];var o=Math.abs(t-e),s=Math.abs(n-r),l=s&1,u=4*(1-o)*s*s,d=4*(l+1)*o*o,h=u+d+l*o*o,f;e>t&&(e=t,t+=o),r>n&&(r=n),r+=s+1>>1,n=r-l,o=8*o*o,l=8*s*s;do i.push({x:t,y:r}),i.push({x:e,y:r}),i.push({x:e,y:n}),i.push({x:t,y:n}),f=2*h,f<=d&&(r++,n--,h+=d+=o),(f>=u||2*h>d)&&(e++,t--,h+=u+=l);while(e<=t);for(;r-n<=s;)i.push({x:e-1,y:r}),i.push({x:t+1,y:r++}),i.push({x:e-1,y:n}),i.push({x:t+1,y:n--});return i}function du(e,r,t,n){return Math.abs(e-t)===Math.abs(r-n)&&Math.abs(e-t)?(console.log("circle",Math.abs(e-t),Math.abs(r-n)),YS(e,r,t+1,n+1)):KS(e,r,t,n)}var hu="#FFFFFF";function fu(e,r,t,n){let i=[],o=Math.abs(t-e),s=Math.abs(n-r),l=e<t?1:-1,u=r<n?1:-1,d=o-s;for(;i.push({x:e,y:r}),!(e===t&&r===n);){var h=2*d;h>-s&&(d-=s,e+=l),h<o&&(d+=o,r+=u)}return i}function ja(e,r,t,n){let i=[],o=Math.min(e,t),s=Math.min(r,n);for(var l=Math.abs(t-e)+1,u=Math.abs(n-r)+1,d=s;d<s+u;d++)for(var h=o;h<o+l;h++)i.push({x:h,y:d});return i}function mu(e,r,t,n){let i=[],o=Math.min(e,t),s=Math.min(r,n);for(var l=Math.abs(t-e),u=Math.abs(n-r),d=s;d<=s+u;d++)i.push({x:o,y:d}),i.push({x:o+l,y:d});for(var h=o+1;h<=o+l-1;h++)i.push({x:h,y:s}),i.push({x:h,y:s+u});return i}function hr(e,r){let t=[];for(let n=0;n<r;n++){let i=[];for(let o=0;o<e;o++)i.push(0);t.push(i)}return t}function Ya(e,r){for(let t=0;t<e.length;t++)for(let n=0;n<e[0].length;n++)r(n,t,e[t][n])}function US(e,r,t){return r*t+e}function ci(e,r={}){let t,n,i,o=1,s=0,l=0,u=[1];if(r.width){if(t=e,n=r.width,i=t.length/n,i%1!==0)throw new Error(`Invalid bitmask width. ${i} = ${t.length} / ${n}`)}else if(e[0]instanceof Array)t=e.flat(),n=e[0].length,i=e.length;else throw new Error("options.width is required for 1 dimensional array.");r.scale&&(o=r.scale),r.offsetX&&(s=r.offsetX),r.offsetY&&(l=r.offsetY),r.include&&(u=r.include);let d=n+2,h=i+2,f=Array(d*h).fill(0);function g(T,$){return($+1)*d+(T+1)}for(let T=0;T<i;++T)for(let $=0;$<n;++$)f[g($,T)]=u.includes(t[US($,T,n)])?1:0;let b=n*(i+1),w=(n+1)*i,v=b+w,y=Array(v).fill(0).map(()=>({x:0,y:0,next:void 0}));function E(T,$){return $*n+T}function C(T,$){return b+$*(n+1)+T}let S=new Set;function M(T,$,ne){T.x=$,T.y=ne,S.add(T)}function _(T){for(var $=T.next;$!==void 0&&$!==T;$=$.next)S.delete($);$!==void 0&&S.add(T)}for(let T=0;T<i;++T)for(let $=0;$<n;++$)if(f[g($,T)]===1){if(f[g($-1,T)]==0){let ee=y[C($,T)];M(ee,$,T+1),f[g($-1,T-1)]?ee.next=y[E($-1,T)]:f[g($,T-1)]?ee.next=y[C($,T-1)]:ee.next=y[E($,T)],_(ee)}if(f[g($+1,T)]===0){let ee=y[C($+1,T)];M(ee,$+1,T),f[g($+1,T+1)]?ee.next=y[E($+1,T+1)]:f[g($,T+1)]?ee.next=y[C($+1,T+1)]:ee.next=y[E($,T+1)],_(ee)}if(f[g($,T-1)]===0){let ee=y[E($,T)];M(ee,$,T),f[g($+1,T-1)]?ee.next=y[C($+1,T-1)]:f[g($+1,T)]?ee.next=y[E($+1,T)]:ee.next=y[C($+1,T)],_(ee)}if(f[g($,T+1)]===0){let ee=y[E($,T+1)];M(ee,$+1,T+1),f[g($-1,T+1)]?ee.next=y[C($,T+1)]:f[g($-1,T)]?ee.next=y[E($-1,T+1)]:ee.next=y[C($,T)],_(ee)}}for(let T of S){let $=T;do $.next&&($.next.type=$.x==$?.next?.x?"V":"H",$=$.next);while($!==T)}for(let T of S){let $=T;do{if($.type!=$.next?.type)for(;$.next?.type==$.next?.next?.type;)$.next===T&&(S.delete(T),T=$.next.next,S.add(T)),$.next=$.next?.next;$=$.next}while($!==T)}let D="";for(let T of S){D+=`M${T.x*o},${T.y*o}`;for(var H=T.next;H!=T;H=H?.next)H?.type=="H"?D+=`H${H?.x*o+s}`:H?.type=="V"&&(D+=`V${H?.y*o+l}`);D+="Z"}return D}function Ka(e,r){let t=document.createElement("canvas");return t.width=e,t.height=r,[t,t.getContext("2d")]}function Fp(e,r){let t=[],n=e[0].length,i=e.length,o=r[0].length,s=r.length,l=Math.max(n,o),u=Math.max(i,s);for(let d=0;d<u;d++)for(let h=0;h<l;h++){let f=r&&r[d]&&r[d][h],g=e&&e[d]&&e[d][h];f!==g&&t.push([h,d,g,f])}return t}var GS=[{name:"Circle Outer",width:22,height:22,color:"#F00",opacity:1,lines:[[7,1],[15,1],[15,2],[17,2],[17,3],[18,3],[18,4],[19,4],[19,5],[20,5],[20,7],[21,7],[21,15],[20,15],[20,17],[19,17],[19,18],[18,18],[18,19],[17,19],[17,20],[15,20],[15,21],[7,21],[7,20],[5,20],[5,19],[4,19],[4,18],[3,18],[3,17],[2,17],[2,15],[1,15],[1,7],[2,7],[2,5],[3,5],[3,4],[4,4],[4,3],[5,3],[5,2],[7,2],[7,1]]},{name:"Circle Inner",width:22,height:22,color:"#00F",opacity:1,lines:[[8,3],[14,3],[14,4],[16,4],[16,5],[17,5],[17,6],[18,6],[18,8],[19,8],[19,14],[18,14],[18,16],[17,16],[17,17],[16,17],[16,18],[14,18],[14,19],[8,19],[8,18],[6,18],[6,17],[5,17],[5,16],[4,16],[4,14],[3,14],[3,8],[4,8],[4,6],[5,6],[5,5],[6,5],[6,4],[8,4],[8,3]]},{name:"Square",width:22,height:22,color:"#9932cc",opacity:1,dashed:[4,4],lines:[[2,2],[20,2],[20,20],[2,20],[2,2]]},{name:"Square",width:22,height:22,color:"#9932cc",opacity:.1,dashed:[4,4],dashOffset:4,lines:[[2,2],[20,2],[20,20],[2,20],[2,2]]}],Sp=new Map;function jv(e,r,t,n){let i=`${e}:${r}:${t}:${n}`;if(Sp.has(i))return Sp.get(i);let o=GS.filter(f=>f.width===e&&f.height===r);o.length===0&&e%2===0&&r%2===0&&(o=[{name:"Horizontal",color:"#00F",opacity:1,lines:[[0,r/2],[e,r/2]]},{name:"Vertical",color:"#00F",opacity:1,lines:[[e/2,0],[e/2,r]]}]);let s=t+n,l=e*s-n,u=r*s-n,d=document.createElement("canvas"),h=d.getContext("2d");if(d.width=l,d.height=u,n!==0){h.fillStyle="#BBB";for(let f=1;f<e;f++)h.fillRect(f*s-n,0,1,u);for(let f=1;f<r;f++)h.fillRect(0,f*s-n,l,1)}return o.forEach(f=>{h.lineDashOffset=f.dashOffset||0,h.setLineDash(f.dashed||[1]),h.strokeStyle=f.color,h.globalAlpha=f.opacity,h.lineWidth=1,h.fillStyle="transparent",h.beginPath(),f.lines.forEach((g,b)=>{b===0?h.moveTo(g[0]*(t+n)-.5,g[1]*(t+n)-.5):h.lineTo(g[0]*(t+n)-.5,g[1]*(t+n)-.5)}),h.stroke()}),Sp.set(i,d),d}function Mp(e,r=!1,t=[]){let n=[],i=e.length;if(i===0)return n;let o=e[0].length,s=[[0,1],[0,-1],[1,0],[-1,0]],l=Array.from({length:i},()=>Array(o).fill(!1));if(r){let h=[];for(let f=0;f<o;f++)e[0][f]===0&&h.push([f,0]),e[i-1][f]===0&&h.push([f,i-1]);for(let f=0;f<i;f++)e[f][0]===0&&h.push([0,f]),e[f][o-1]===0&&h.push([o-1,f]);for(;h.length>0;){let[f,g]=h.shift();if(!l[g][f]){l[g][f]=!0;for(let[b,w]of s){let v=f+b,y=g+w;v>=0&&v<o&&y>=0&&y<i&&e[y][v]===0&&!l[y][v]&&h.push([v,y])}}}}let u=new Set,d=h=>h===0;t.length!==0&&(d=h=>!t.includes(h));for(let h=0;h<i;h++)for(let f=0;f<o;f++)if(!d(e[h][f]))for(let[g,b]of s){let w=f+g,v=h+b;if(!(w<0||w>=o||v<0||v>=i)&&e[v][w]===0){if(r&&!l[v][w])continue;let y=`${w},${v}`;u.has(y)||(u.add(y),n.push([w,v]))}}return n}function Yv(e){let r=new Set([0]),t=[];for(let n of e)for(let i of n)r.has(i)||(r.add(i),t.push(i));return t}function Kv(e,r,t,n){let i=new Set(n);if(t<0||t>=e.length||r<0||r>=e[0].length||!i.has(e[t][r]))return[];let o=[[r,t]],s=new Set,l=[],u=(d,h)=>`${d},${h}`;for(s.add(u(r,t)),l.push([r,t]);o.length>0;){let[d,h]=o.shift(),f=e[h][d],g=[[d+1,h],[d-1,h],[d,h+1],[d,h-1]];for(let[b,w]of g)if(w>=0&&w<e.length&&b>=0&&b<e[0].length){let v=e[w][b],y=u(b,w);i.has(v)&&!s.has(y)&&(s.add(y),l.push([b,w]),o.push([b,w]))}}return l}function WS({polynomial:e,numTables:r}){let t=new Uint32Array(256*r);for(let n=0;n<256;n++){let i=n;i=(i&1)*e^i>>>1,i=(i&1)*e^i>>>1,i=(i&1)*e^i>>>1,i=(i&1)*e^i>>>1,i=(i&1)*e^i>>>1,i=(i&1)*e^i>>>1,i=(i&1)*e^i>>>1,i=(i&1)*e^i>>>1,t[n]=i}for(let n=256;n<t.length;n++){let i=t[n-256];t[n]=t[i&255]^i>>>8}return t}var kn=WS({polynomial:3988292384,numTables:8});function qS(){return-1}function QS(e,r){let t=r.byteLength,n=new DataView(r.buffer,r.byteOffset,t),i=e,o=0,s=-n.byteOffset&3;for(;o<s&&o<t;o++)i=kn[(i^n.getUint8(o))&255]^i>>>8;if(o===t)return i;o=s;let l=t-o;for(;l>=8;o+=8,l-=8){i^=n.getUint32(o,!0);let u=n.getUint32(o+4,!0);i=kn[0*256+(u>>>24&255)]^kn[1*256+(u>>>16&255)]^kn[2*256+(u>>>8&255)]^kn[3*256+(u>>>0&255)]^kn[4*256+(i>>>24&255)]^kn[5*256+(i>>>16&255)]^kn[6*256+(i>>>8&255)]^kn[7*256+(i>>>0&255)]}for(let u=o;u<t;u++)i=kn[(i^n.getUint8(u))&255]^i>>>8;return i}function ZS(e){return(e^-1)>>>0}function Uv(e){return ZS(QS(qS(),e))}function PS(e){if(e.length%2!==0)throw new Error("Invalid hex string");let r=new Uint8Array(e.length/2);for(let t=0;t<e.length;t+=2)r[t/2]=parseInt(e.slice(t,t+2),16);return r}function JS(e){return(e>>>0).toString(16).padStart(8,"0")}var nt=new Uint8Array(4),qv=new Int32Array(nt.buffer),Qv=new Uint32Array(nt.buffer);function Zv(e){return new DataView(PS(JS(Uv(e))).buffer).getInt32(0)}function XS(e,r=0,t){let n=[],i=e.length;if(i===0)return n;let o=r<0?Math.max(0,r+i):r;for(t!==void 0&&(i=t<0?t+i:t);i-- >o;)n[i-o]=e[i];return n}function eM(e,r,t="tEXt"){if(e=String(e),r=String(r),console.log({keyword:e,content:r}),r.length&&(!/^[\x00-\xFF]+$/.test(e)||!/^[\x00-\xFF]+$/.test(r)))throw new Error("Only Latin-1 characters are permitted in PNG tEXt chunks. You might want to consider base64 encoding and/or zEXt compression");if(e.length>=80)throw new Error('Keyword "'+e+'" is longer than the 79-character limit imposed by the PNG specification');let n=e.length+r.length+1,i=new Uint8Array(n),o=0,s;for(let l=0;l<e.length;l++){if(!(s=e.charCodeAt(l)))throw new Error("0x00 character is not permitted in tEXt keywords");i[o++]=s}i[o++]=0;for(let l=0;l<r.length;l++){if(!(s=r.charCodeAt(l)))throw new Error("0x00 character is not permitted in tEXt content");i[o++]=s}return{name:t,data:i}}function tM(e){let r=e instanceof Uint8Array?e:e.data,t=!0,n="",i="";for(let o=0;o<r.length;o++){let s=r[o];if(t)s?i+=String.fromCharCode(s):t=!1;else if(s)n+=String.fromCharCode(s);else throw new Error("Invalid NULL character found. 0x00 character is not permitted in tEXt content")}return{keyword:i,text:n}}function Pv(e){if(e[0]!==137)throw new Error("Invalid .png file header");if(e[1]!==80)throw new Error("Invalid .png file header");if(e[2]!==78)throw new Error("Invalid .png file header");if(e[3]!==71)throw new Error("Invalid .png file header");if(e[4]!==13)throw new Error("Invalid .png file header: possibly caused by DOS-Unix line ending conversion?");if(e[5]!==10)throw new Error("Invalid .png file header: possibly caused by DOS-Unix line ending conversion?");if(e[6]!==26)throw new Error("Invalid .png file header");if(e[7]!==10)throw new Error("Invalid .png file header: possibly caused by DOS-Unix line ending conversion?");let r=!1,t=[],n=8;for(;n<e.length;){nt[3]=e[n++],nt[2]=e[n++],nt[1]=e[n++],nt[0]=e[n++];let i=Qv[0]+4,o=new Uint8Array(i);o[0]=e[n++],o[1]=e[n++],o[2]=e[n++],o[3]=e[n++];let s=String.fromCharCode(o[0])+String.fromCharCode(o[1])+String.fromCharCode(o[2])+String.fromCharCode(o[3]);if(!t.length&&s!=="IHDR")throw new Error("IHDR header missing");if(s==="IEND"){r=!0,t.push({name:s,data:new Uint8Array(0)});break}for(let h=4;h<i;h++)o[h]=e[n++];nt[3]=e[n++],nt[2]=e[n++],nt[1]=e[n++],nt[0]=e[n++];let l=qv[0];if(Zv(o)!==l)throw new Error("CRC values for "+s+" header do not match, PNG file is likely corrupted");let d=new Uint8Array(o.buffer.slice(4));t.push({name:s,data:d})}if(!r)throw new Error(".png file ended prematurely: no IEND header was found");return t}function rM(e){let r=8,t=r,n;for(n=0;n<e.length;n++)r+=e[n].data.length,r+=12;let i=new Uint8Array(r);for(i[0]=137,i[1]=80,i[2]=78,i[3]=71,i[4]=13,i[5]=10,i[6]=26,i[7]=10,n=0;n<e.length;n++){let o=e[n],s=o.name,l=o.data,u=l.length,d=[s.charCodeAt(0),s.charCodeAt(1),s.charCodeAt(2),s.charCodeAt(3)];Qv[0]=u,i[t++]=nt[3],i[t++]=nt[2],i[t++]=nt[1],i[t++]=nt[0],i[t++]=d[0],i[t++]=d[1],i[t++]=d[2],i[t++]=d[3];for(let f=0;f<u;)i[t++]=l[f++];let h=d.concat(XS(l));qv[0]=Zv(Uint8Array.from(h)),i[t++]=nt[3],i[t++]=nt[2],i[t++]=nt[1],i[t++]=nt[0]}return i}function Gv(e,r){let t=e[r++],n=e[r++],i=e[r++],o=e[r];return 0|t<<24|n<<16|i<<8|o}function Wv(e,r,t){e[t]=(r&4278190080)>>24,e[t+1]=(r&16711680)>>16,e[t+2]=(r&65280)>>8,e[t+3]=r&255}function Jv(e){let r={};return Pv(e).forEach(n=>{switch(n.name){case"tEXt":{r.tEXt||(r.tEXt={});let i=tM(n.data);r.tEXt[i.keyword]=i.text;break}case"pHYs":r.pHYs={x:Gv(n.data,0),y:Gv(n.data,4),unit:n.data[8]};break;default:r[n.name]=!0}}),r}function Xv(e,r){let t=Pv(e);return nM(t,r),Uint8Array.from(rM(t))}function nM(e,r){if(r.clear)for(let t=e.length-1;t--;)switch(e[t].name){case"IHDR":case"IDAT":case"IEND":break;default:e.splice(t,1)}if(r.tEXt)for(let t of Object.keys(r.tEXt))e.splice(-1,0,eM(t,r.tEXt[t]));if(r.pHYs){let t=new Uint8Array(9);Wv(t,r.pHYs.x,0),Wv(t,r.pHYs.y,4),t[8]=r.pHYs.unit;let n=e.find(i=>i.name==="pHYs");n?n.data=t:e.splice(1,0,{name:"pHYs",data:t})}}function ex(e,r){let t=[];for(let n of e.keys())r.has(n)||t.push(e.get(n));return t}function tx([e,r,t,n]){return`rgba(${e}, ${r}, ${t}, ${n})`}var rx,nx,ix,ox,ax,sx,lx,ux,cx,px,dx,hx,fx,te,ro,Ze,no,Nr,Ga,fr,mr,io,oo,re,ao,el,jo,tl,q,cn,rr,kt,gr,Ln,pi,ce,so,Lt,nr,pn,Vr,di,zr,Yo,lo,it,Wa,z,gu,mx,gx,rl,bx,qa,vx,Tp,bu,Qe,Dp,xx,Ua,nl,$p,yx,Qa,Za,Pa,Ko,Uo,Go,Ja,Hp,Ip,vu,Ex,wx;fx=[k({selector:"pg-input-pixel-editor",style:zv,template:Vv})];var xt=class extends(hx=HTMLElement,dx=[L(Ss)],px=[L(Ss)],cx=[L(Ss)],ux=[L(Ss)],lx=[L(Ii)],sx=[L()],ax=[m()],ox=[m()],ix=[m()],nx=[m()],rx=[m()],hx){constructor(){super(...arguments);R(this,z);p(this,"width",a(te,8,this,10)),a(te,11,this);p(this,"height",a(te,12,this,10)),a(te,15,this);p(this,"size",a(te,16,this,10)),a(te,19,this);p(this,"gridSize",a(te,20,this,1)),a(te,23,this);p(this,"transparent",a(te,24,this,!1)),a(te,27,this);p(this,"placeholder",a(te,28,this,"")),a(te,31,this);p(this,"$wrapper",a(te,32,this)),a(te,35,this);p(this,"$canvas",a(te,36,this)),a(te,39,this);p(this,"$selection",a(te,40,this)),a(te,43,this);p(this,"$selectionPath",a(te,44,this)),a(te,47,this);p(this,"$selectionPathPreview",a(te,48,this)),a(te,51,this);R(this,ro,[]);R(this,Ze,5);R(this,no,!1);R(this,Nr,!1);R(this,Ga,-1);R(this,fr,-1);R(this,mr,-1);R(this,io,-1);R(this,oo,-1);R(this,re,[0]);R(this,ao,[]);R(this,el,!1);R(this,jo,!1);R(this,tl,!1);R(this,q,[]);R(this,cn,[]);R(this,rr,new Map);R(this,kt,[]);R(this,gr,[]);R(this,Ln,[]);R(this,pi,[]);R(this,ce);R(this,so,1);R(this,Lt,[[0,0,0,0],[0,0,0,1],[255,0,255,1]]);R(this,nr);R(this,pn);R(this,Vr);R(this,di);R(this,zr);R(this,Yo);R(this,lo);R(this,it);R(this,Wa,!0);R(this,rl,0);R(this,qa,[]);R(this,nl,{x:0,y:0,width:1,height:1});R(this,Qa);R(this,Za);R(this,Pa,!1);R(this,Ko,-1);R(this,Uo,-1);R(this,Go);R(this,Ja);R(this,vu,1)}connectedCallback(){let t=this.$canvas.getContext("2d");t!==null&&(B(this,ce,t),this.$canvas.addEventListener("contextmenu",this.handleContextMenu.bind(this)),this.$canvas.addEventListener("doubleclick",this.handleDoubleClick.bind(this)),this.$canvas.addEventListener("pointerdown",this.handlePointerDown.bind(this)),this.$canvas.addEventListener("pointerenter",this.handlePointerEnter.bind(this)),this.$canvas.addEventListener("pointerleave",this.handlePointerLeave.bind(this)),this.$wrapper.addEventListener("focus",this.handleFocus.bind(this)),this.$wrapper.addEventListener("blur",this.handleBlur.bind(this)),this.$wrapper.addEventListener("keypress",this.handleKeyPress.bind(this)),this.$wrapper.addEventListener("keydown",this.handleKeyDown.bind(this)),this.$wrapper.addEventListener("keyup",this.handleKeyUp.bind(this)),this.$wrapper.addEventListener("paste",async n=>{n.preventDefault();let i=await navigator.clipboard.read();for(let o of i){if(o.types.includes("image/png")){let s=await o.getType("image/png");console.log("read",s.size);let l=await s.arrayBuffer();console.log(Jv(new Uint8Array(l)))}if(o.types.includes("web application/easel+json")){let l=await(await o.getType("web application/easel+json")).text();console.log("Text content:",l)}}}))}render(t){(t.width||t.height||t.size||t.transparent)&&F(this,z,gu).call(this)}clearSelection(){x(this,rr).forEach(([t,n])=>{x(this,kt)[n][t]=0}),x(this,rr).clear(),this.$selectionPath.classList.toggle("hide",!0)}hasSelection(){return x(this,rr).size!==0}getSelection(){}getExportLayerIndexes(){return x(this,ao).reduce((t,n,i)=>(n.export&&t.push(i),t),[])}async copyPngToClipboard(t,n){try{if(t.type!=="image/png"){console.error("Fetched resource is not a PNG image.");return}let i=new ClipboardItem({[t.type]:t,"web application/easel+json":new Blob([JSON.stringify(n)],{type:"web application/easel+json"})});await navigator.clipboard.write([i])}catch(i){console.error("Failed to copy image: ",i.name,i.message)}}handleFocus(){this.$wrapper.matches(":focus-visible")||this.$wrapper.classList.toggle("ignore",!0)}handleBlur(){this.$wrapper.classList.toggle("ignore",!1)}handleKeyPress(t){t.key==="Delete"&&t.preventDefault()}async handleKeyDown(t){switch(console.log(t.shiftKey,t.ctrlKey,t.altKey,t.key),B(this,jo,!0),t.key){case" ":t.preventDefault();break;case"Escape":this.hasSelection()&&this.clearSelection();break;case"Delete":x(this,rr).forEach(([n,i])=>{F(this,z,Qe).call(this,n,i,0)}),this.clearSelection();break;case"ArrowLeft":this.hasSelection()&&(this.moveSelection(t.shiftKey?-10:-1,0),t.preventDefault());break;case"ArrowRight":this.hasSelection()&&(this.moveSelection(t.shiftKey?10:1,0),t.preventDefault());break;case"ArrowUp":this.hasSelection()&&(this.moveSelection(0,t.shiftKey?-10:-1),t.preventDefault());break;case"ArrowDown":this.hasSelection()&&(this.moveSelection(0,t.shiftKey?10:1),t.preventDefault());break}if(t.ctrlKey)switch(t.key){case"c":if(this.hasSelection()){let n=await this.getSelectionPng();this.copyPngToClipboard(n,{x:2,y:2})}else{let n=await this.getExportPng();this.copyPngToClipboard(n,{})}break;case"z":t.shiftKey?this.redo():this.undo();break;case"y":this.redo();break}}handleKeyUp(t){B(this,jo,!1)}handleContextMenu(t){t?.preventDefault()}handleDoubleClick(t){t?.preventDefault()}handlePointerDown(t){if(t.buttons!==1&&t.buttons!==32){t.preventDefault(),t.stopPropagation();return}B(this,tl,t.altKey),B(this,el,t.ctrlKey),B(this,jo,t.shiftKey);let n=this.$canvas.getBoundingClientRect(),i=this.size+this.gridSize,o=Math.floor((t.clientX-n.left)/i),s=Math.floor((t.clientY-n.top)/i);if(o===x(this,io)&&s===x(this,oo))return;o>=this.width&&(o=this.width-1),s>=this.height&&(s=this.height-1),B(this,no,!0),B(this,Ga,x(this,q)[x(this,re)[0]][s][o]),B(this,fr,o),B(this,mr,s),B(this,io,o),B(this,oo,s);let l=t.buttons===32?0:x(this,so);switch(x(this,Ze)){case 5:F(this,z,Qe).call(this,o,s,l);break;case 4:x(this,ro).forEach(u=>{F(this,z,Qe).call(this,o+u[0],s+u[1],l)});break}B(this,Qa,this.handlePointerMove.bind(this)),document.addEventListener("pointermove",x(this,Qa)),B(this,Za,this.handlePointerUp.bind(this)),document.addEventListener("pointerup",x(this,Za))}cleanupPointerGlobal(){document.removeEventListener("pointermove",x(this,Qa)),document.removeEventListener("pointerup",x(this,Za))}handlePointerUp(t){let n=this.$canvas.getBoundingClientRect(),i=this.size+this.gridSize,o=Math.floor((t.clientX-n.left)/i),s=Math.floor((t.clientY-n.top)/i);if(o===x(this,fr)&&s===x(this,mr))switch(x(this,Ze)){case 3:t.shiftKey||this.clearSelection();let l=x(this,q)[x(this,re)[0]][s][o];console.log(l),Kv(x(this,q)[x(this,re)[0]],o,s,[l]).forEach(([d,h])=>{F(this,z,bu).call(this,d,h)}),this.$selectionPathPreview.classList.toggle("hide",!0),this.$selectionPath.classList.toggle("hide",!1),this.$selectionPath.setAttribute("d",ci(x(this,kt),{scale:this.size}));break;case 5:x(this,Ga)===1&&(F(this,z,Qe).call(this,o,s,0),x(this,q)[x(this,re)[0]][s][o]=0);break;case 4:x(this,Ga)===1&&x(this,ro).forEach(d=>{F(this,z,Qe).call(this,o+d[0],s+d[1],0)});break}else switch(x(this,Ze)){case 0:F(this,z,Tp).call(this),t.shiftKey||this.clearSelection(),ja(x(this,fr),x(this,mr),o,s).forEach(({x:l,y:u})=>{F(this,z,bu).call(this,l,u)}),this.$selectionPathPreview.classList.toggle("hide",!0),this.$selectionPath.classList.toggle("hide",!1),this.$selectionPath.setAttribute("d",ci(x(this,kt),{scale:this.size}));break;case 1:F(this,z,Tp).call(this),t.shiftKey||this.clearSelection(),Js(x(this,fr),x(this,mr),o,s).forEach(({x:l,y:u})=>{F(this,z,bu).call(this,l,u)}),this.$selectionPathPreview.classList.toggle("hide",!0),this.$selectionPath.classList.toggle("hide",!1),this.$selectionPath.setAttribute("d",ci(x(this,kt),{scale:this.size}));break;case 2:break;case 6:fu(x(this,fr),x(this,mr),o,s).forEach(({x:l,y:u})=>{F(this,z,Qe).call(this,l,u,1)});break;case 7:ja(x(this,fr),x(this,mr),o,s).forEach(({x:l,y:u})=>{F(this,z,Qe).call(this,l,u,1)});break;case 8:mu(x(this,fr),x(this,mr),o,s).forEach(({x:l,y:u})=>{F(this,z,Qe).call(this,l,u,1)});break;case 9:Js(x(this,fr),x(this,mr),o,s).forEach(({x:l,y:u})=>{F(this,z,Qe).call(this,l,u,1)});break;case 10:du(x(this,fr),x(this,mr),o,s).forEach(({x:l,y:u})=>{F(this,z,Qe).call(this,l,u,1)});break}B(this,io,-1),B(this,oo,-1),B(this,no,!1),this.cleanupPointerGlobal(),x(this,Pa)&&(B(this,Nr,!1),x(this,ce).drawImage(x(this,nr),0,0),x(this,ce).drawImage(x(this,Nr)?x(this,Vr):x(this,zr),0,0))}handlePointerMove(t){let n=this.$canvas;if(x(this,no)){B(this,tl,t.altKey),B(this,el,t.ctrlKey),B(this,jo,t.shiftKey);let o=x(this,q),s=n.getBoundingClientRect(),l=this.size+this.gridSize,u=[],d=x(this,fr),h=x(this,mr),f=x(this,io),g=x(this,oo);if(typeof t.getCoalescedEvents=="function"){let y=t.getCoalescedEvents();for(let E of y){let C=Math.floor((E.clientX-s.left)/l),S=Math.floor((E.clientY-s.top)/l);C===f&&S===g||u.push([C,S])}}else{let y=Math.floor((t.clientX-s.left)/l),E=Math.floor((t.clientY-s.top)/l);if(y===f&&E===g)return;u.push([y,E])}let b=t.buttons===32?0:x(this,so);if(u.length===0)return;let[w,v]=u.at(-1);switch(B(this,io,w),B(this,oo,v),x(this,Ze)){case 0:F(this,z,vx).call(this,ja(d,h,w,v));break;case 5:for(var i of u)F(this,z,Qe).call(this,i[0],i[1],b);break;case 4:for(var i of u)x(this,ro).forEach(E=>{F(this,z,Qe).call(this,i[0]+E[0],i[1]+E[1],b)});break;case 6:F(this,z,Ua).call(this,fu(d,h,w,v),f,g);break;case 7:F(this,z,Ua).call(this,ja(d,h,w,v),f,g);break;case 8:F(this,z,Ua).call(this,mu(d,h,w,v),f,g);break;case 9:F(this,z,Ua).call(this,Js(d,h,w,v),f,g);break;case 10:F(this,z,Ua).call(this,du(d,h,w,v),f,g);break}}}handlePointerEnter(t){!x(this,no)&&!x(this,Nr)&&(B(this,Nr,!0),x(this,ce).drawImage(x(this,nr),0,0),x(this,ce).drawImage(x(this,Nr)?x(this,Vr):x(this,zr),0,0),x(this,Ze)===4&&(B(this,Go,this.handlePointerMovePreview.bind(this)),this.$canvas.addEventListener("pointermove",x(this,Go)),B(this,Ja,this.handlePointerLeavePreview.bind(this)),this.$canvas.addEventListener("pointerleave",x(this,Ja)))),B(this,Pa,!1)}handlePointerMovePreview(t){let n=this.$canvas.getBoundingClientRect(),i=this.size+this.gridSize,o=Math.floor((t.clientX-n.left)/i),s=Math.floor((t.clientY-n.top)/i);o===x(this,Ko)&&s===x(this,Uo)||o<0||s<0||(F(this,z,yx).call(this,x(this,ro).map(l=>({x:l[0]+o,y:l[1]+s})),o,s,x(this,Ko)===-1?o:x(this,Ko),x(this,Uo)===-1?s:x(this,Uo)),B(this,Ko,o),B(this,Uo,s))}handlePointerLeavePreview(){F(this,z,$p).call(this),this.$canvas.removeEventListener("pointermove",x(this,Go)),this.$canvas.removeEventListener("pointerleave",x(this,Ja))}handlePointerLeave(t){x(this,no)?x(this,Nr)&&B(this,Pa,!0):(B(this,Nr,!1),x(this,ce).drawImage(x(this,nr),0,0),x(this,ce).drawImage(x(this,Nr)?x(this,Vr):x(this,zr),0,0),this.$canvas.removeEventListener("pointermove",x(this,Go)))}mergeColor(t,n){}clear(){let t=hr(this.width,this.height),n=Fp(x(this,q)[x(this,re)[0]],t);B(this,q,[hr(this.width,this.height)]),B(this,gr,hr(this.width,this.height)),B(this,cn,hr(this.width,this.height)),B(this,kt,hr(this.width,this.height)),F(this,z,Hp).call(this)}reset(){B(this,Wa,!0),F(this,z,gu).call(this)}clearHistory(){B(this,Ln,[]),B(this,pi,[])}getHistory(){return x(this,Ln)}applyTemplate(t){B(this,q,[t]),F(this,z,Dp).call(this)}flipHorizontal(){let t=Ps(x(this,q)[x(this,re)[0]]),n=t[0].length-1;Ya(x(this,q)[x(this,re)[0]],(i,o)=>{t[o][i]=x(this,q)[x(this,re)[0]][o][n-i]}),x(this,q)[x(this,re)[0]]=t}flipVertical(){let t=Ps(x(this,q)[x(this,re)[0]]),n=t.length-1;Ya(x(this,q)[x(this,re)[0]],(i,o)=>{t[x(this,re)[0]][o][i]=x(this,q)[n-o][i]}),x(this,q)[x(this,re)[0]]=t}move(t,n){let i=hr(this.width,this.height);for(let o=0;o<this.height;o++)i[o].fill(0);Ya(x(this,q)[x(this,re)[0]],(o,s)=>{s-n<0||o-t<0||s-n>=this.height||o-t>=this.width||(i[s][o]=x(this,q)[x(this,re)[0]][s-n][o-t])}),x(this,q)[x(this,re)[0]]=i}invert(){x(this,Lt).length>2||(Ya(x(this,q)[x(this,re)[0]],(t,n)=>{x(this,q)[x(this,re)[0]][n][t]=x(this,q)[x(this,re)[0]][n][t]===0?1:0}),F(this,z,Dp).call(this))}applyGuides(){let t=jv(this.width,this.height,this.size,this.gridSize);x(this,pn).drawImage(t,0,0)}clearGuides(){}undo(){let t=x(this,Ln).pop();t&&(x(this,pi).push(t),t.forEach(n=>{n.type===1&&n.data.pixels.forEach(i=>{let[o,s]=i;x(this,q)[x(this,re)[0]][s][o]=i[2]})}))}redo(){}rotateClockwise(){F(this,z,Ip).call(this,!1)}rotateCounterclockwise(){F(this,z,Ip).call(this,!0)}hasUndo(){return x(this,Ln).length!==0}hasRedo(){return x(this,pi).length!==0}inputModePixelSize(t=1){B(this,vu,t)}inputModeStamp(t){B(this,ro,t),B(this,Ze,4),F(this,z,$p).call(this)}inputModeSelectRectangle(){B(this,Ze,0)}inputModeSelectEllipse(){B(this,Ze,1)}inputModeSelectLasso(){B(this,Ze,2)}inputModeSelectMagicWand(){B(this,Ze,3)}inputModePixel(){B(this,Ze,5)}inputModeLine(){B(this,Ze,6)}inputModeRectangle(){B(this,Ze,7)}inputModeRectangleOutline(){B(this,Ze,8)}inputModeEllipse(){B(this,Ze,9)}inputModeEllipseOutline(){B(this,Ze,10)}async getJson(t={}){let n={width:this.width,height:this.height,transparent:this.transparent,colors:x(this,Lt),layers:x(this,ao),data:x(this,q)};t.history===!0&&(n.undo=x(this,Ln),n.redo=x(this,pi));for(let i=0;i<n.data.length;i++)for(let o=n.data[i].length-1;o>=0;o--){if(o>=this.height){n.data[i].pop();continue}for(let s=n.data[i][o].length-1;s>=0;s--)s>=this.width&&n.data[i][o].pop()}return n}async setJson(t){if(typeof t!="object")return["json must be type object"];let n=[],i=Object.keys(t);["width","height","transparent","colors","layers","data"].forEach(s=>{i.includes(s)||n.push(`JSON key '${s}' required.`)}),this.width=t.width,this.height=t.height,this.transparent=t.transparent,B(this,Lt,t.colors),B(this,ao,t.layers),B(this,q,t.data),t.undo&&B(this,Ln,t.undo),t.redo&&B(this,pi,t.redo),F(this,z,gu).call(this)}selectColor(t){B(this,so,t)}getColors(){return x(this,Lt)}addColor(t,n,i,o){x(this,Lt).push([t,n,i,o])}removeColor(t){x(this,Lt).splice(t,1)}getColor(t){return x(this,Lt)[t]}setColor(t,n,i,o,s){x(this,Lt)[t]=[n,i,o,s]}moveColor(t,n){}getLayers(){return x(this,q).map((t,n)=>n)}selectLayers(t){B(this,re,t)}addLayer(){x(this,q).push(hr(this.width,this.height)),x(this,ao).push({name:"Layer 1",export:!0,locked:!1,visible:!0,opacity:1})}removeLayer(t){x(this,q).splice(t,1)}outline(t=[]){Mp(x(this,q)[x(this,re)[0]],!0,t).forEach(([i,o])=>{F(this,z,Qe).call(this,i,o,x(this,so))})}glow(t=[]){Mp(x(this,q)[x(this,re)[0]],!1,t).forEach(([i,o])=>{F(this,z,Qe).call(this,i,o,x(this,so))})}flattenLayers(t){}getLayerColorIndexes(t=x(this,re)[0]){return Yv(x(this,q)[t]).sort()}getLayerPaths(){return F(this,z,Ex).call(this)}getExportPath(){return ci(x(this,gr),{scale:1})}getExportCanvas(t={}){let n=document.createElement("canvas"),i=n.getContext("2d"),o=t.scale??1,s=t.x??0,l=t.y??0;n.width=(t.width??this.width)*o,n.height=(t.height??this.height)*o;let u=t.height??x(this,gr).length,d=t.width??x(this,gr)[0].length;for(let h=0;h<u;h++)for(let f=0;f<d;f++){let g=f+s,b=h+l,w=x(this,gr)[b][g],[v,y,E,C]=x(this,Lt)[w];i.fillStyle=`rgba(${v},${y},${E},${C})`,i.fillRect(f*o,h*o,o,o)}return n}async getExportPng(t={},n=null){let i=await F(this,z,wx).call(this,t);if(n){let o=await i.arrayBuffer(),s=new Uint8Array(o);return Xv(s,{tEXt:n}).buffer}else return i}async getSelectionPng(t={},n=null){let i=[],o=[];x(this,rr).forEach(([h,f])=>{i.push(h),o.push(f)});let s=Math.min(...i),l=Math.min(...o),u=Math.max(...i),d=Math.max(...o);return await this.getExportPng({...t,x:s,y:l,width:u-s,height:d-l},n)}moveSelection(t,n){let i=new Map,o=new Map;x(this,rr).forEach(([l,u])=>{let d=l+t,h=u+n;x(this,re).forEach(f=>{let g=x(this,q)[f][u][l],b=x(this,q)[f][h][d];g!==0&&(g!==b&&i.set(`${f},${d},${h}`,[f,d,h,g]),o.set(`${d},${h}`,[d,h]))})});let s=ex(x(this,rr),o);console.log(i),i.forEach(([l,u,d,h])=>{x(this,q)[l][d][u]=h,F(this,z,Qe).call(this,u,d,h,[l]),x(this,rr).set(`${u},${d}`,[u,d]),x(this,kt)[d][u]=1}),o.forEach(([l,u])=>{x(this,rr).set(`${l},${u}`,[l,u]),x(this,kt)[u][l]=1}),s.forEach(([l,u])=>{x(this,re).forEach(d=>{x(this,q)[d][u][l]!==0&&F(this,z,Qe).call(this,l,u,0)}),x(this,rr).delete(`${l},${u}`),x(this,kt)[u][l]=0}),this.$selectionPath.setAttribute("d",ci(x(this,kt),{scale:this.size}))}};te=A(hx),ro=new WeakMap,Ze=new WeakMap,no=new WeakMap,Nr=new WeakMap,Ga=new WeakMap,fr=new WeakMap,mr=new WeakMap,io=new WeakMap,oo=new WeakMap,re=new WeakMap,ao=new WeakMap,el=new WeakMap,jo=new WeakMap,tl=new WeakMap,q=new WeakMap,cn=new WeakMap,rr=new WeakMap,kt=new WeakMap,gr=new WeakMap,Ln=new WeakMap,pi=new WeakMap,ce=new WeakMap,so=new WeakMap,Lt=new WeakMap,nr=new WeakMap,pn=new WeakMap,Vr=new WeakMap,di=new WeakMap,zr=new WeakMap,Yo=new WeakMap,lo=new WeakMap,it=new WeakMap,Wa=new WeakMap,z=new WeakSet,gu=function(){let t=this.size+this.gridSize,n=this.width*t-this.gridSize,i=this.height*t-this.gridSize;if(this.$canvas.width=n,this.$canvas.height=i,x(this,ce).clearRect(0,0,n,i),[nn(this,nr)._,nn(this,pn)._]=Ka(n,i),[nn(this,Vr)._,nn(this,di)._]=Ka(n,i),[nn(this,zr)._,nn(this,Yo)._]=Ka(n,i),[nn(this,lo)._,nn(this,it)._]=Ka(n,i),this.transparent)for(let o=0;o<this.height;o++)for(let s=0;s<this.width;s++)x(this,pn).fillStyle=hu,x(this,pn).fillRect(s*t,o*t,this.size+1,this.size+1),x(this,pn).fillStyle="#DDD",x(this,pn).fillRect(s*t+Math.ceil(this.size/2),o*t,Math.floor(this.size/2),Math.floor(this.size/2)),x(this,pn).fillRect(s*t,o*t+Math.floor(this.size/2),Math.ceil(this.size/2),Math.ceil(this.size/2));else x(this,pn).clearRect(0,0,n,i);this.$selection.setAttribute("viewBox",`0 0 ${this.width*this.size} ${this.height*this.size}`),x(this,Wa)?(B(this,re,[0]),B(this,ao,[{name:"Layer 1",export:!0,locked:!1,visible:!0,opacity:1}]),B(this,q,[hr(this.width,this.height)]),B(this,gr,hr(this.width,this.height)),B(this,cn,hr(this.width,this.height)),B(this,kt,hr(this.width,this.height)),B(this,Wa,!1),B(this,Ln,[]),B(this,pi,[])):F(this,z,mx).call(this),F(this,z,Hp).call(this)},mx=function(){let t=x(this,q).toReversed(),n=t.length;for(let i=0;i<this.height;i++){if(i>=t[0].length)for(let o=0;o<n;o++)t[o].push(new Array(this.width).fill(0)),x(this,gr).push(new Array(this.width).fill(0)),x(this,kt).push(new Array(this.width).fill(0)),x(this,cn).push(new Array(this.width).fill(0));for(let o=0;o<this.width;o++){if(o>=t[0][i].length)for(let s=0;s<n;s++)t[s][i].push(0),x(this,gr)[i].push(0),x(this,kt)[i].push(0),x(this,cn)[i].push(0);for(let s=0;s<n;s++)if(t[s][i][o]!==0){F(this,z,Qe).call(this,o,i,t[s][i][o]);break}}}},gx=function(){this.dispatchEvent(new CustomEvent("change",{detail:{export:x(this,gr)}}))},rl=new WeakMap,bx=function(){clearInterval(x(this,rl)),B(this,rl,window.setTimeout(F(this,z,gx).bind(this),1e3))},qa=new WeakMap,vx=function(t){x(this,qa).forEach(({x:n,y:i})=>{x(this,cn)[i][n]=0}),t.forEach(({x:n,y:i})=>{B(this,qa,t),x(this,cn)[i][n]=1}),this.$selectionPathPreview.classList.toggle("hide",!1),this.$selectionPathPreview.setAttribute("d",ci(x(this,cn),{scale:this.size}))},Tp=function(){this.$selectionPathPreview.classList.toggle("hide",!0),x(this,qa).forEach(({x:t,y:n})=>{x(this,cn)[n][t]=0})},bu=function(t,n){x(this,rr).set(`${t},${n}`,[t,n]),x(this,kt)[n][t]=1},Qe=function(t,n,i,o=x(this,re)){if(t>=this.width||t<0||n>=this.height||n<0)return;let s=this.size+this.gridSize;x(this,ce).clearRect(t*s,n*s,this.size,this.size),x(this,di).clearRect(t*s,n*s,this.size,this.size),x(this,Yo).clearRect(t*s,n*s,this.size,this.size),x(this,Lt)[i][3]!==0&&(x(this,di).fillStyle=hu,x(this,di).fillRect(t*s-this.gridSize+1,n*s-this.gridSize+1,this.size+this.gridSize*2-2,this.size+this.gridSize*2-2),x(this,di).fillStyle=tx(x(this,Lt)[i]),x(this,di).fillRect(t*s+1,n*s+1,this.size-2,this.size-2)),x(this,Lt)[i][3]!==0&&(x(this,Yo).fillStyle=tx(x(this,Lt)[i]),x(this,Yo).fillRect(t*s,n*s,this.size,this.size)),x(this,ce).drawImage(x(this,nr),t*s,n*s,this.size+2,this.size+2,t*s,n*s,this.size+2,this.size+2),x(this,ce).drawImage(x(this,Nr)?x(this,Vr):x(this,zr),t*s,n*s,this.size+2,this.size+2,t*s,n*s,this.size+2,this.size+2),o.forEach(l=>{x(this,q)[l][n][t]=i}),F(this,z,xx).call(this,t,n),F(this,z,bx).call(this)},Dp=function(){for(let t=0;t<this.height;t++)for(let n=0;n<this.width;n++)F(this,z,Qe).call(this,n,t,x(this,q)[x(this,re)[0]][t][n])},xx=function(t,n){let i=0,o=this.getExportLayerIndexes();for(let s=0;s<o.length;s++){let l=o[s];if(x(this,q)[l][n][t]!==0){i=x(this,q)[l][n][t];break}}x(this,gr)[n][t]=i},Ua=function(t,n,i){let o=this.size+this.gridSize,s=this.width*o-this.gridSize,l=this.height*o-this.gridSize,{minX:u,maxX:d,minY:h,maxY:f}=t.reduce((y,E)=>({minX:Math.min(y.minX,E.x,n),maxX:Math.max(y.maxX,E.x,n),minY:Math.min(y.minY,E.y,i),maxY:Math.max(y.maxY,E.y,i)}),{minX:this.width,maxX:0,minY:this.height,maxY:0}),g=u*o,b=h*o,w=(d-u+1)*o,v=(f-h+1)*o;x(this,ce).clearRect(g,b,w,v),x(this,ce).drawImage(x(this,nr),g,b,w,v,g,b,w,v),x(this,ce).drawImage(x(this,Vr),g,b,w,v,g,b,w,v),x(this,it).clearRect(0,0,s,l),t.forEach(({x:y,y:E})=>{x(this,it).fillStyle=hu,x(this,it).beginPath(),x(this,it).arc(y*o+5,E*o+5,3,0,2*Math.PI),x(this,it).closePath(),x(this,it).fill(),x(this,it).fillStyle="#1B79C8",x(this,it).beginPath(),x(this,it).arc(y*o+5,E*o+5,2,0,2*Math.PI),x(this,it).closePath(),x(this,it).fill()}),x(this,ce).drawImage(x(this,lo),g,b,w,v,g,b,w,v),this.dispatchEvent(new CustomEvent("debug",{detail:{x:g,y:b,width:w,height:v,canvas:this.$canvas,context:x(this,ce),editLayer:x(this,Vr),noEditLayer:x(this,zr),baseLayer:x(this,nr),previewLayer:x(this,lo)}}))},nl=new WeakMap,$p=function(){let{x:t,y:n,width:i,height:o}=x(this,nl);x(this,ce).clearRect(t,n,i,o),x(this,ce).drawImage(x(this,nr),t,n,i,o,t,n,i,o),x(this,ce).drawImage(x(this,zr),t,n,i,o,t,n,i,o)},yx=function(t,n,i,o,s){let l=this.size+this.gridSize,{minX:u,maxX:d,minY:h,maxY:f}=t.reduce((C,S)=>({minX:Math.min(C.minX,S.x,o),maxX:Math.max(C.maxX,S.x,o),minY:Math.min(C.minY,S.y,s),maxY:Math.max(C.maxY,S.y,s)}),{minX:this.width,maxX:0,minY:this.height,maxY:0}),g=o-n,b=s-i,w=g<0?(u+g)*l:u*l,v=b<0?(h+b)*l:h*l,y=(d-u+1+Math.abs(g))*l,E=(f-h+1+Math.abs(b))*l;x(this,ce).clearRect(w,v,y,E),x(this,ce).drawImage(x(this,nr),w,v,y,E,w,v,y,E),x(this,ce).drawImage(x(this,Vr),w,v,y,E,w,v,y,E),x(this,it).clearRect(w,v,y,E),t.forEach(({x:C,y:S})=>{x(this,it).fillStyle="#1B79C8",x(this,it).fillRect(C*l+2,S*l+2,this.size-4,this.size-4)}),x(this,ce).drawImage(x(this,lo),w,v,y,E,w,v,y,E),B(this,nl,{x:w,y:v,width:y,height:E}),this.dispatchEvent(new CustomEvent("debug",{detail:{x:w,y:v,width:y,height:E,canvas:this.$canvas,context:x(this,ce),editLayer:x(this,Vr),noEditLayer:x(this,zr),baseLayer:x(this,nr),previewLayer:x(this,lo)}}))},Qa=new WeakMap,Za=new WeakMap,Pa=new WeakMap,Ko=new WeakMap,Uo=new WeakMap,Go=new WeakMap,Ja=new WeakMap,Hp=function(){x(this,ce).drawImage(x(this,nr),0,0),x(this,ce).drawImage(x(this,zr),0,0)},Ip=function(t=!1){let n=Ps(x(this,q)[x(this,re)[0]]);if(t){let i=x(this,q)[0].map((o,s)=>x(this,q).map(l=>l[l.length-1-s]));for(let o=0;o<this.height;o++)for(let s=0;s<this.width;s++)n[o][s]=i[x(this,re)[0]][o][s]}else{let i=x(this,q)[0].map((o,s)=>x(this,q).map(l=>l[s]).reverse());for(let o=0;o<this.height;o++)for(let s=0;s<this.width;s++)n[o][s]=i[x(this,re)[0]][o][s]}x(this,q)[x(this,re)[0]]=n},vu=new WeakMap,Ex=function(){return x(this,q).map((t,n)=>this.getLayerColorIndexes(n).map(o=>[o,ci(t,{scale:1,include:[o]})]))},wx=async function(t={}){return new Promise((n,i)=>{this.getExportCanvas(t).toBlob(o=>{o?n(o):i()},"image/png")})},c(te,5,"width",dx,xt),c(te,5,"height",px,xt),c(te,5,"size",cx,xt),c(te,5,"gridSize",ux,xt),c(te,5,"transparent",lx,xt),c(te,5,"placeholder",sx,xt),c(te,5,"$wrapper",ax,xt),c(te,5,"$canvas",ox,xt),c(te,5,"$selection",ix,xt),c(te,5,"$selectionPath",nx,xt),c(te,5,"$selectionPathPreview",rx,xt),xt=c(te,0,"PgInputPixelEditor",fx,xt),a(te,1,xt);var Cx='<div part="label"></div>';var Ax=`:host {\r
  display: contents;\r
}\r
\r
[part=label] {\r
  display: table-cell;\r
  border-style: solid;\r
  border-width: 0 0 1px 0;\r
  border-color: var(--pg-table-border-color, #453C4F);\r
  padding: 0.125rem 0.5rem;\r
  font-weight: 600;\r
}\r
`;var kx,Lx,Fx,Sx,Mx,Tx,Bt;Tx=[k({selector:"pg-table-column",style:Ax,template:Cx})];var jr=class extends(Mx=HTMLElement,Sx=[L()],Fx=[L()],Lx=[L()],kx=[m()],Mx){constructor(){super(...arguments);p(this,"label",a(Bt,8,this,"")),a(Bt,11,this);p(this,"hideLabel",a(Bt,12,this,!1)),a(Bt,15,this);p(this,"key",a(Bt,16,this,"")),a(Bt,19,this);p(this,"$label",a(Bt,20,this)),a(Bt,23,this)}render(t){(t.label||t.hideLabel)&&(this.hideLabel?(this.$label.ariaLabel=this.label,this.$label.textContent=""):(this.$label.ariaLabel=null,this.$label.textContent=this.label))}};Bt=A(Mx),c(Bt,5,"label",Sx,jr),c(Bt,5,"hideLabel",Fx,jr),c(Bt,5,"key",Lx,jr),c(Bt,5,"$label",kx,jr),jr=c(Bt,0,"PgTableColumn",Tx,jr),a(Bt,1,jr);var Dx='<input part="input" type="text" />';var $x=`:host {\r
  display: block;\r
  font-family: var(--pg-font-family, system-ui);\r
}\r
\r
[part=input] {\r
  border: 1px solid var(--pg-input-text-border-color, #453C4F);\r
  border-radius: 0.125rem;\r
  padding: var(--pg-input-text-padding, calc(0.5rem - 1px) 0.75rem);\r
  font-family: var(--pg-input-text-font-family, var(--pg-font-family));\r
  font-size: 1rem;\r
  outline: none;\r
  field-sizing: content;\r
  min-width: calc(100% - 0.5rem - 2px);\r
  max-width: calc(var(--pg-input-text-max-width, 100%) - 0.5rem - 2px);\r
  background-color: transparent;\r
}\r
\r
[part=input]:read-only {\r
  border-color: transparent;\r
}\r
\r
[part=input]:active {\r
  box-shadow: 0 0 0 3px var(--pg-input-text-active-glow, rgb(79, 143, 249, 0.6));\r
}\r
[part=input]:focus {\r
  box-shadow: 0 0 0 3px var(--pg-input-text-focus-glow, rgb(79, 143, 249, 0.5));\r
}`;var Hx,Ix,Rx,_x,Bx,Ox,Nx,ot;Nx=[k({selector:"pg-input-text",style:$x,template:Dx})];var br=class extends(Ox=HTMLElement,Bx=[L()],_x=[L()],Rx=[L()],Ix=[L()],Hx=[m()],Ox){constructor(){super(...arguments);p(this,"name",a(ot,8,this,"")),a(ot,11,this);p(this,"value",a(ot,12,this,"")),a(ot,15,this);p(this,"placeholder",a(ot,16,this,"")),a(ot,19,this);p(this,"readOnly",a(ot,20,this,!1)),a(ot,23,this);p(this,"$input",a(ot,24,this)),a(ot,27,this);p(this,"skipValue",!1)}connectedCallback(){this.$input.addEventListener("input",this.handleInput.bind(this)),this.$input.addEventListener("change",this.handleChange.bind(this))}render(t){t.value&&!this.skipValue&&(this.$input.value=this.value),t.placeholder&&(this.$input.placeholder=this.placeholder),t.readOnly&&(this.$input.readOnly=this.readOnly),this.skipValue=!1}handleInput(t){t.stopPropagation(),this.skipValue=!0,this.value=t.target.value,this.dispatchEvent(new CustomEvent("input",{detail:{value:t.target.value,name:t.name}}))}handleChange(t){this.dispatchEvent(new CustomEvent("change",{detail:{value:t.target.value,name:t.name}}))}};ot=A(Ox),c(ot,5,"name",Bx,br),c(ot,5,"value",_x,br),c(ot,5,"placeholder",Rx,br),c(ot,5,"readOnly",Ix,br),c(ot,5,"$input",Hx,br),br=c(ot,0,"PgInputText",Nx,br),a(ot,1,br);var Vx=`<div part="cell">
  <pg-input-text part="input"></pg-input-text>
</div>`;var zx=`:host {\r
  display: contents;\r
}\r
\r
[part=cell] {\r
  display: table-cell;\r
  background-color: var(--pg-table-row-background-color);\r
  --pg-input-text-padding: 0.125rem 0.25rem;\r
  --pg-input-text-border-color: rgb(69, 60, 79, 0.5);\r
  vertical-align: middle;\r
}\r
`;var jx,Yx,Kx,Ux,Gx,Wx,qx,at;qx=[k({selector:"pg-table-cell-text",style:zx,template:Vx})];var vr=class extends(Wx=HTMLElement,Gx=[L()],Ux=[L()],Kx=[L()],Yx=[L()],jx=[m()],Wx){constructor(){super(...arguments);p(this,"value",a(at,8,this,"")),a(at,11,this);p(this,"key",a(at,12,this,"")),a(at,15,this);p(this,"editable",a(at,16,this,!1)),a(at,19,this);p(this,"maxWidth",a(at,20,this,null)),a(at,23,this);p(this,"$input",a(at,24,this)),a(at,27,this)}connectedCallback(){this.$input.addEventListener("input",t=>{this.dispatchEvent(new CustomEvent("action",{detail:{value:t.detail.value,event:"input"}}))}),this.$input.addEventListener("change",t=>{this.dispatchEvent(new CustomEvent("action",{detail:{value:t.detail.value,event:"change"}}))})}render(t){t.value&&(this.$input.value=this.value),t.editable&&(this.$input.readOnly=!this.editable),t.maxWidth&&(this.maxWidth===null?this.$input.style.removeProperty("--pg-input-text-max-width"):this.$input.style.setProperty("--pg-input-text-max-width",`${typeof this.maxWidth=="string"?this.maxWidth:this.maxWidth+"px"}`))}};at=A(Wx),c(at,5,"value",Gx,vr),c(at,5,"key",Ux,vr),c(at,5,"editable",Kx,vr),c(at,5,"maxWidth",Yx,vr),c(at,5,"$input",jx,vr),vr=c(at,0,"PgTableCellText",qx,vr),a(at,1,vr);var Qx=`<div part="cell">
  <pg-input-text part="input"></pg-input-text>
</div>`;var Zx=`:host {\r
  display: contents;\r
}\r
\r
[part=cell] {\r
  display: table-cell;\r
  background-color: var(--pg-table-row-background-color);\r
  --pg-input-text-padding: 0.125rem 0.25rem;\r
  --pg-input-text-border-color: rgb(69, 60, 79, 0.5);\r
  vertical-align: middle;\r
}\r
`;var Px,Jx,Xx,ey,ty,ry,Ot;ry=[k({selector:"pg-table-cell-number",style:Zx,template:Qx})];var Yr=class extends(ty=HTMLElement,ey=[L()],Xx=[L()],Jx=[L()],Px=[m()],ty){constructor(){super(...arguments);p(this,"value",a(Ot,8,this,0)),a(Ot,11,this);p(this,"key",a(Ot,12,this,"")),a(Ot,15,this);p(this,"editable",a(Ot,16,this,!1)),a(Ot,19,this);p(this,"$input",a(Ot,20,this)),a(Ot,23,this)}connectedCallback(){this.$input.addEventListener("change",t=>{this.dispatchEvent(new CustomEvent("action",{detail:{value:t.detail.value}}))})}render(t){t.value&&(this.$input.value=`${this.value}`),t.editable&&(this.$input.readOnly=!this.editable)}};Ot=A(ty),c(Ot,5,"value",ey,Yr),c(Ot,5,"key",Xx,Yr),c(Ot,5,"editable",Jx,Yr),c(Ot,5,"$input",Px,Yr),Yr=c(Ot,0,"PgTableCellNumber",ry,Yr),a(Ot,1,Yr);var ny=`<div part="cell">
  <pg-input-check part="input" />
</div>`;var iy=`:host {\r
  display: contents;\r
}\r
\r
[part=cell] {\r
  display: table-cell;\r
  padding: 0.125rem;\r
  background-color: var(--pg-table-row-background-color);\r
  border-top: 0;\r
  border-radius: 0.125rem;\r
}\r
\r
[part=input] {\r
  vertical-align: middle;\r
}\r
`;var oy,ay,sy,ly,uy,cy,Nt;cy=[k({selector:"pg-table-cell-check",style:iy,template:ny})];var Kr=class extends(uy=HTMLElement,ly=[L()],sy=[L()],ay=[L()],oy=[m()],uy){constructor(){super(...arguments);p(this,"value",a(Nt,8,this,!1)),a(Nt,11,this);p(this,"editable",a(Nt,12,this,!1)),a(Nt,15,this);p(this,"key",a(Nt,16,this,"")),a(Nt,19,this);p(this,"$input",a(Nt,20,this)),a(Nt,23,this)}connectedCallback(){this.$input.addEventListener("change",this.handleChange.bind(this))}render(t){t.value&&(this.$input.value=this.value),t.editable&&(this.$input.readOnly=!this.editable)}handleChange(t){let{value:n}=t.target;this.dispatchEvent(new CustomEvent("action",{detail:{value:n}}))}};Nt=A(uy),c(Nt,5,"value",ly,Kr),c(Nt,5,"editable",sy,Kr),c(Nt,5,"key",ay,Kr),c(Nt,5,"$input",oy,Kr),Kr=c(Nt,0,"PgTableCellCheck",cy,Kr),a(Nt,1,Kr);var py='<div part="cells"></div>';var dy=`:host {\r
  display: contents;\r
}\r
\r
:host(:nth-child(odd)) {\r
  --pg-table-row-background-color: #f1f1f1;\r
}\r
\r
[part=cells] {\r
  display: table-row;\r
}\r
`;var cM=new Map([["string",vr],["number",Yr],["boolean",Kr]]),hy,fy,my,gy,by,vy,xy,st;xy=[k({selector:"pg-table-row",style:dy,template:py})];var xr=class extends(vy=HTMLElement,by=[L()],gy=[L()],my=[L()],fy=[L()],hy=[m()],vy){constructor(){super(...arguments);p(this,"index",a(st,8,this)),a(st,11,this);p(this,"items",a(st,12,this,[])),a(st,15,this);p(this,"key",a(st,16,this,"")),a(st,19,this);p(this,"columns",a(st,20,this,[])),a(st,23,this);p(this,"$cells",a(st,24,this)),a(st,27,this)}connectedCallback(){Je({container:this.$cells,items:this.items,type:t=>t.type?t.type:cM.get(typeof t.value),create:(t,n)=>{let{editable:i,maxWidth:o}=this.columns.find(s=>s.key===n.key)??{};i&&(t.editable=i),o&&(t.maxWidth=o),t.addEventListener("action",s=>{s.stopPropagation(),this.dispatchEvent(new CustomEvent("action",{detail:{...s.detail,index:this.index,key:n.key,getRows:()=>this.parentNode?Array.from(this.parentNode.children).map((u,d)=>({getColumn:h=>u.items.find(f=>f.key===h),index:d})):void 0,getRow(){return this.items},getColumn:l=>this.items.find(u=>u.key===l)}}))})}})}};st=A(vy),c(st,5,"index",by,xr),c(st,5,"items",gy,xr),c(st,5,"key",my,xr),c(st,5,"columns",fy,xr),c(st,5,"$cells",hy,xr),xr=c(st,0,"PgTableRow",xy,xr),a(st,1,xr);var yy=`<div part="table">
  <div part="header">
    <div part="columns"></div>
  </div>
  <div part="rows"></div>
</div>`;var Ey=`:host {\r
  display: inline-flex;\r
}\r
\r
[part=table] {\r
  display: table;\r
  border-spacing: 2px;\r
}\r
\r
[part=header] {\r
  display: table-header-group;\r
}\r
\r
[part=columns] {\r
  display: table-row;\r
}\r
\r
[part=rows] {\r
  display: table-row-group;\r
}`;function hi(e){let r=Object.keys(e),t=[];return r.forEach(n=>{typeof e[n]=="object"&&e[n]!==null?t.push({key:n,...e[n]}):t.push({key:n,value:e[n]})}),{items:t}}var wy,Cy,Ay,ky,Ly,Fy,Vt;Fy=[k({selector:"pg-table",style:Ey,template:yy})];var Fn=class extends(Ly=HTMLElement,ky=[L()],Ay=[L()],Cy=[m()],wy=[m()],Ly){constructor(){super(...arguments);p(this,"columns",a(Vt,8,this,[])),a(Vt,11,this);p(this,"data",a(Vt,12,this,[])),a(Vt,15,this);p(this,"$columns",a(Vt,16,this)),a(Vt,19,this);p(this,"$rows",a(Vt,20,this)),a(Vt,23,this);p(this,"trackedData",[])}connectedCallback(){Je({container:this.$columns,items:this.columns,type:()=>jr}),Je({container:this.$rows,items:this.data,type:()=>xr,create:(t,n)=>{if(this.columns.length===0)throw"columns must be set before data";t.columns=this.columns,t.addEventListener("action",i=>{i.stopPropagation(),this.dispatchEvent(new CustomEvent("action",{detail:i.detail}))})}})}getCSV(){let t=this.columns.map(n=>n.label).join(",");return t+=`
`,t+=this.data.map(({items:n})=>n.map(i=>i.value).join(",")).join(`
`),t}};Vt=A(Ly),c(Vt,5,"columns",ky,Fn),c(Vt,5,"data",Ay,Fn),c(Vt,5,"$columns",Cy,Fn),c(Vt,5,"$rows",wy,Fn),Fn=c(Vt,0,"PgTable",Fy,Fn),a(Vt,1,Fn);var Sy=`<div part="cell">
  <pg-button part="button">
    <pg-icon part="icon"></pg-icon>
  </pg-button>
</div>`;var My=`:host {\r
  display: contents;\r
}\r
\r
[part=cell] {\r
  display: table-cell;\r
  padding: 0 0.5rem;\r
  background-color: var(--pg-table-row-background-color);\r
  border-top: 0;\r
  border-radius: 0.125rem;\r
  vertical-align: middle;\r
  justify-items: center;\r
  --pg-button-background-color: transparent;\r
  --pg-button-padding: 0;\r
  --pg-button-border-width: 0;\r
}\r
`;var Ty,Dy,$y,Hy,Iy,Ry,zt;Ry=[k({selector:"pg-table-cell-button-icon",style:My,template:Sy})];var Re=class extends(Iy=HTMLElement,Hy=[L()],$y=[L()],Dy=[m()],Ty=[m()],Iy){constructor(){super(...arguments);p(this,"value",a(zt,8,this,null)),a(zt,11,this);p(this,"icon",a(zt,12,this,"")),a(zt,15,this);p(this,"$button",a(zt,16,this)),a(zt,19,this);p(this,"$icon",a(zt,20,this)),a(zt,23,this)}connectedCallback(){this.$button.addEventListener("click",()=>{this.dispatchEvent(new CustomEvent("action",{detail:{}}))})}render(t){t.icon&&(this.$icon.path=this.icon)}};zt=A(Iy),c(zt,5,"value",Hy,Re),c(zt,5,"icon",$y,Re),c(zt,5,"$button",Dy,Re),c(zt,5,"$icon",Ty,Re),Re=c(zt,0,"PgTableCellButtonIcon",Ry,Re),a(zt,1,Re);function _y(e,r,t){let n=Array(t).fill(0).map(()=>Array(r).fill(0)),i=[],o=e.match(/M[^Z]*Z/g)||[];for(let s of o){let l,u,d,h,f=s.match(/[MHVZ][\d, ]*/g)||[];for(let g of f){let b=g[0],w=g.slice(1),v;switch(b){case"M":{let[y,E]=w.split(/,| /).map(C=>parseInt(C,10));d=y,h=E,l=y,u=E;break}case"H":d=parseInt(w,10);break;case"V":v=parseInt(w,10),i.push({x:d,y:[h,v].sort((y,E)=>y-E)}),h=v;break;case"Z":l===d&&i.push({x:d,y:[h,u].sort((y,E)=>y-E)});break}}}for(let s=0;s<t;++s){let l=!1;for(let u=0;u<r;++u){for(let d of i)if(d.x===u&&s>=d.y[0]&&s<d.y[1]){l=!l;break}l&&(n[s][u]=1)}}return n}var By={1:[[0,0]],"3-circle":[[0,-1],[-1,0],[0,0],[1,0],[0,1]],"3-square":[[-1,-1],[0,-1],[1,-1],[-1,0],[0,0],[1,0],[-1,1],[0,1],[1,1]],heart:[[-1,-1],[1,-1],[-2,0],[-1,0],[0,0],[1,0],[2,0],[-1,1],[0,1],[1,1],[0,2]]};var Oy=`<div class="example">
  <div class="props">
    <label>
      Width
      <input part="width" type="range" min="4" max="22">
    </label>
    <label>
      Height
      <input part="height" type="range" min="4" max="22">
    </label>
    <label>
      Size
      <input part="size" type="range" step="2" min="4" max="16">
    </label>
    <label>
      <input part="transparent" type="checkbox">
      Transparent
    </label>
  </div>
  <pg-input-pixel-editor part="input" width="10" height="10" size="10" style="box-shadow:0 0 0.5rem rgba(0, 0, 0, 0.2)"></pg-input-pixel-editor>
  <div>
    <code>onchange: <span part="value1"></span></code>
  </div>
  <div>
    <code>oninput: <span part="value2"></span></code>
  </div>
  <div>
    <h3>Canvas Tools</h3>
    <button part="reset">Reset</button>
    <button part="clear">Clear</button>
    <button part="invert">Invert</button>
    <button part="outline">Outline</button>
    <button part="glow">Glow</button>
    |
    <button part="undo">Undo</button>
    <button part="redo">Redo</button>
    |
    <button part="save">Save</button>
    <button part="open">Open</button>
  </div>
  <div>
    <h3>Selection Tools</h3>
    <button part="selectRectangle">Select Rectangle</button>
    <button part="selectEllipse">Select Circle</button>
    <button part="selectLasso">Select Lasso</button>
    <button part="selectMagic">Select Magic Wand</button>
  </div>
  <div>
    <h3>Drawing Tools</h3>
    <button part="modePixel">Pixel</button>
    <button part="modeLine">Line</button>
    <button part="modeRectangle">Rectangle</button>
    <button part="modeRectangleOutline">Rectangle Outline</button>
    <button part="modeEllipse">Ellipse</button>
    <button part="modeEllipseOutline">Ellipse Outline</button>
  </div>
  <div>
    Stamps:
    <button part="modeStamp1" data-stamp="1">1 Pixel</button>
    <button part="modeStamp2" data-stamp="3-circle">3 Pixel Circle</button>
    <button part="modeStamp3" data-stamp="3-square">3 Pixel Square</button>
    <button part="modeStamp4" data-stamp="heart">Heart</button>
  </div>
  <div>
    <h3>Color Tools <button part="addColor">Add Color</button></h3>
    <pg-table part="colors"></pg-table>
  </div>
  <div>
    <h3>Layer Tools <button part="addLayer">Add Layer</button></h3>
    <pg-table part="layers"></table>
  </div>
  <div>
    <h3>Example Tools</h3>
    <input part="file" type="file" />
    <button part="saveSvg">Save SVG</button>
    <button part="savePng">Save PNG</button>
  </div>
  <div part="debug"></div>
  <pre part="output" contenteditable></pre>
</div>`;var Ny=`[part="debug"] {\r
  background: #555;\r
  padding: 1rem;\r
  display: flex;\r
}\r
\r
[part="debug"] canvas {\r
  border: 1px solid #FFF;\r
}\r
\r
[part="value1"] {\r
  word-wrap: break-word;\r
}\r
\r
.props {\r
  display: flex;\r
  flex-direction: row;\r
  margin-bottom: 0.5rem;\r
}\r
\r
label {\r
  display: flex;\r
  flex-direction: column;\r
}\r
\r
h3 {\r
  display: flex;\r
  margin: 0.25rem 0;\r
  font-size: 1.125rem;\r
  align-items: center;\r
}\r
\r
[part=addColor],\r
[part=addLayer] {\r
  vertical-align: middle;\r
  margin-left: 0.5rem;\r
}`;var Vy="M19.35,11.72L17.22,13.85L15.81,12.43L8.1,20.14L3.5,22L2,20.5L3.86,15.9L11.57,8.19L10.15,6.78L12.28,4.65L19.35,11.72M16.76,3C17.93,1.83 19.83,1.83 21,3C22.17,4.17 22.17,6.07 21,7.24L19.08,9.16L14.84,4.92L16.76,3M5.56,17.03L4.5,19.5L6.97,18.44L14.4,11L13,9.6L5.56,17.03Z",zy="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z",jy="M4.63 10.27L3 9L12 2L19.94 8.17L12.5 15.61L12 16L4.63 10.27M10 18.94V18.11L10.59 17.53L10.63 17.5L4.62 12.81L3 14.07L10 19.5V18.94M21.7 12.58L20.42 11.3C20.21 11.09 19.86 11.09 19.65 11.3L18.65 12.3L20.7 14.35L21.7 13.35C21.91 13.14 21.91 12.79 21.7 12.58M12 21H14.06L20.11 14.93L18.06 12.88L12 18.94V21Z",Yy,Ky,Uy,Gy,Wy,qy,Qy,Zy,Py,Jy,Xy,e2,t2,r2,n2,i2,o2,a2,s2,l2,u2,c2,p2,d2,h2,f2,m2,g2,b2,v2,x2,y2,E2,w2,C2,A2,k2,L2,F2,S2,M2,I;M2=[k({selector:"x-pg-input-pixel-editor-basic",style:Ny,template:Oy})];var P=class extends(S2=HTMLElement,F2=[m()],L2=[m()],k2=[m()],A2=[m()],C2=[m()],w2=[m()],E2=[m()],y2=[m()],x2=[m()],v2=[m()],b2=[m()],g2=[m()],m2=[m()],f2=[m()],h2=[m()],d2=[m()],p2=[m()],c2=[m()],u2=[m()],l2=[m()],s2=[m()],a2=[m()],o2=[m()],i2=[m()],n2=[m()],r2=[m()],t2=[m()],e2=[m()],Xy=[m()],Jy=[m()],Py=[m()],Zy=[m()],Qy=[m()],qy=[m()],Wy=[m()],Gy=[m()],Uy=[m()],Ky=[m()],Yy=[m()],S2){constructor(){super(...arguments);p(this,"$input",a(I,8,this)),a(I,11,this);p(this,"$value1",a(I,12,this)),a(I,15,this);p(this,"$value2",a(I,16,this)),a(I,19,this);p(this,"$debug",a(I,20,this)),a(I,23,this);p(this,"$width",a(I,24,this)),a(I,27,this);p(this,"$height",a(I,28,this)),a(I,31,this);p(this,"$size",a(I,32,this)),a(I,35,this);p(this,"$transparent",a(I,36,this)),a(I,39,this);p(this,"$reset",a(I,40,this)),a(I,43,this);p(this,"$clear",a(I,44,this)),a(I,47,this);p(this,"$invert",a(I,48,this)),a(I,51,this);p(this,"$outline",a(I,52,this)),a(I,55,this);p(this,"$glow",a(I,56,this)),a(I,59,this);p(this,"$modeStamp1",a(I,60,this)),a(I,63,this);p(this,"$modeStamp2",a(I,64,this)),a(I,67,this);p(this,"$modeStamp3",a(I,68,this)),a(I,71,this);p(this,"$modeStamp4",a(I,72,this)),a(I,75,this);p(this,"$modePixel",a(I,76,this)),a(I,79,this);p(this,"$modeLine",a(I,80,this)),a(I,83,this);p(this,"$modeRectangle",a(I,84,this)),a(I,87,this);p(this,"$modeRectangleOutline",a(I,88,this)),a(I,91,this);p(this,"$modeEllipse",a(I,92,this)),a(I,95,this);p(this,"$modeEllipseOutline",a(I,96,this)),a(I,99,this);p(this,"$selectRectangle",a(I,100,this)),a(I,103,this);p(this,"$selectEllipse",a(I,104,this)),a(I,107,this);p(this,"$selectLasso",a(I,108,this)),a(I,111,this);p(this,"$selectMagic",a(I,112,this)),a(I,115,this);p(this,"$undo",a(I,116,this)),a(I,119,this);p(this,"$redo",a(I,120,this)),a(I,123,this);p(this,"$save",a(I,124,this)),a(I,127,this);p(this,"$open",a(I,128,this)),a(I,131,this);p(this,"$output",a(I,132,this)),a(I,135,this);p(this,"$file",a(I,136,this)),a(I,139,this);p(this,"$saveSvg",a(I,140,this)),a(I,143,this);p(this,"$savePng",a(I,144,this)),a(I,147,this);p(this,"$addLayer",a(I,148,this)),a(I,151,this);p(this,"$addColor",a(I,152,this)),a(I,155,this);p(this,"$colors",a(I,156,this)),a(I,159,this);p(this,"$layers",a(I,160,this)),a(I,163,this)}connectedCallback(){this.$width.value="10",this.$height.value="10",this.$size.value="10",this.$input.addEventListener("change",this.handleChange.bind(this)),this.$width.addEventListener("input",this.handleWidthChange.bind(this)),this.$height.addEventListener("input",this.handleHeightChange.bind(this)),this.$size.addEventListener("input",this.handleSizeChange.bind(this)),this.$transparent.addEventListener("input",this.handleTransparentChange.bind(this)),this.$input.addEventListener("input",this.handleInput.bind(this)),this.$input.addEventListener("debug",this.handleDebug.bind(this)),[this.$modeStamp1,this.$modeStamp2,this.$modeStamp3,this.$modeStamp4].forEach(t=>{t.addEventListener("click",n=>{let i=n.target.dataset.stamp;this.$input.inputModeStamp(By[i])})}),this.$modePixel.addEventListener("click",()=>{this.$input.inputModePixel()}),this.$modeLine.addEventListener("click",()=>{this.$input.inputModeLine()}),this.$modeRectangle.addEventListener("click",()=>{this.$input.inputModeRectangle()}),this.$modeRectangleOutline.addEventListener("click",()=>{this.$input.inputModeRectangleOutline()}),this.$modeEllipse.addEventListener("click",()=>{this.$input.inputModeEllipse()}),this.$modeEllipseOutline.addEventListener("click",()=>{this.$input.inputModeEllipseOutline()}),this.$selectRectangle.addEventListener("click",()=>{this.$input.inputModeSelectRectangle()}),this.$selectEllipse.addEventListener("click",()=>{this.$input.inputModeSelectEllipse()}),this.$selectLasso.addEventListener("click",()=>{this.$input.inputModeSelectLasso()}),this.$selectMagic.addEventListener("click",()=>{this.$input.inputModeSelectMagicWand()}),this.$reset.addEventListener("click",()=>{this.$input.reset()}),this.$clear.addEventListener("click",()=>{this.$input.clear()}),this.$invert.addEventListener("click",()=>{this.$input.invert()}),this.$outline.addEventListener("click",()=>{this.$input.outline()}),this.$glow.addEventListener("click",()=>{this.$input.glow()}),this.$save.addEventListener("click",async()=>{let t=await this.$input.getJson();this.$output.textContent=JSON.stringify(t,null,4)}),this.$open.addEventListener("click",()=>{let t=JSON.parse(this.$output.textContent||"");this.$input.setJson(t)}),this.$file.addEventListener("change",this.handleFile.bind(this)),this.$saveSvg.addEventListener("click",async()=>{try{let n=await(await window.showSaveFilePicker({suggestedName:"Canvas",types:[{description:"SVG Document",accept:{"image/svg+xml":[".svg"]}}]})).createWritable();await n.write(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${this.$width.value} ${this.$height.value}">`),await n.write('<path d="test" />'),await n.write("</svg>"),await n.close()}catch{}}),this.$savePng.addEventListener("click",async()=>{try{let n=await(await window.showSaveFilePicker({suggestedName:"CanvasName",types:[{description:"PNG Image",accept:{"image/png":[".png"]}}]})).createWritable(),i=await this.$input.getExportPng();await n.write(i),await n.close()}catch{}}),this.$layers.columns=[{label:"Name",key:"name"},{label:"Type",key:"type"},{label:"Selected",key:"selected",hideLabel:!0},{label:"Select",key:"select",hideLabel:!0}],this.$layers.data=[hi({name:"Layer 1",type:"pixel",selected:!0,select:{type:Re,icon:jy,value:this.$layers.data.length}})],this.$layers.addEventListener("action",t=>{let{getColumn:n,getRows:i,key:o,index:s}=t.detail;switch(o){case"select":let l=[];if(i().forEach(({getColumn:u,index:d})=>{u("selected").value&&l.push(d)}),!(l.length===1&&l[0]===s)){let u=n("selected").value;n("selected").value=!u,u?l.splice(l.findIndex(d=>d===s),1):l.push(s)}console.log("selected",l),this.$input.selectLayers(l);break}}),this.$addLayer.addEventListener("click",()=>{this.$layers.data.push(hi({name:"Layer 2",type:"pixel",selected:!1,select:{type:Re,icon:jy,value:1}})),this.$input.addLayer()}),this.$colors.columns=[{label:"Red",key:"r",editable:!0},{label:"Green",key:"g",editable:!0},{label:"Blue",key:"b",editable:!0},{label:"Alpha",key:"a",editable:!0},{label:"Selected",key:"selected",hideLabel:!0},{label:"Select",key:"select",hideLabel:!0},{label:"Delete",key:"delete",hideLabel:!0}],this.$colors.data.push(...this.$input.getColors().map(([t,n,i,o],s)=>hi({r:t,g:n,b:i,a:o,selected:s===1,select:{type:Re,icon:Vy,value:s},delete:{type:Re,icon:zy,value:s}}))),this.$colors.addEventListener("action",t=>{let{getColumn:n,getRows:i,key:o,value:s,index:l}=t.detail,[u,d,h,f]=this.$input.getColor(l);switch(o){case"select":i().forEach(({getColumn:g})=>{g("selected").value=!1}),n("selected").value=!0,this.$input.selectColor(n("select").value);break;case"r":this.$input.setColor(l,s,d,h,f);break;case"g":this.$input.setColor(l,u,s,h,f);break;case"b":this.$input.setColor(l,u,d,s,f);break;case"a":this.$input.setColor(l,u,d,h,s);break}}),this.$addColor.addEventListener("click",()=>{this.$colors.data.push(hi({r:5,g:5,b:5,a:1,selected:!1,select:{type:Re,icon:Vy,value:this.$colors.data.length},delete:{type:Re,icon:zy}}))})}handleFile(t){let{files:n}=t.currentTarget;if(n.length!==1)throw new Error("select only 1 file");if(n[0].type==="image/svg+xml"){let i=new FileReader;i.onload=()=>{let o=i.result,s=o.match(/viewBox="\d+ \d+ (\d+) (\d+)"/),l=parseInt(s[1],10),u=parseInt(s[2],10),d=o.match(/\sd="([^"]+)"/)[1];console.log(d,s[1],s[2]),this.$input.applyTemplate(_y(d,l,u))},i.onerror=()=>{throw new Error("Error reading the file. Please try again.")},i.readAsText(n[0])}else throw new Error("Unsupported format.")}handleChange(t){this.$value1.textContent=this.$input.getLayerPaths().map(n=>n.map(i=>i.join("=")).join(";")).join(`
`)}handleInput(t){let{value:n}=t.detail;this.$value2.textContent=n}handleDebug(t){let{x:n,y:i,width:o,height:s,context:l,baseLayer:u,editLayer:d,noEditLayer:h,previewLayer:f}=t.detail;this.$debug.appendChild(u),this.$debug.appendChild(d),this.$debug.appendChild(h),this.$debug.appendChild(f)}handleWidthChange(t){this.$input.width=t.target.value,this.$debug.innerHTML=""}handleHeightChange(t){this.$input.height=t.target.value,this.$debug.innerHTML=""}handleSizeChange(t){this.$input.size=t.target.value,this.$debug.innerHTML=""}handleTransparentChange(t){this.$input.transparent=t.target.checked}};I=A(S2),c(I,5,"$input",F2,P),c(I,5,"$value1",L2,P),c(I,5,"$value2",k2,P),c(I,5,"$debug",A2,P),c(I,5,"$width",C2,P),c(I,5,"$height",w2,P),c(I,5,"$size",E2,P),c(I,5,"$transparent",y2,P),c(I,5,"$reset",x2,P),c(I,5,"$clear",v2,P),c(I,5,"$invert",b2,P),c(I,5,"$outline",g2,P),c(I,5,"$glow",m2,P),c(I,5,"$modeStamp1",f2,P),c(I,5,"$modeStamp2",h2,P),c(I,5,"$modeStamp3",d2,P),c(I,5,"$modeStamp4",p2,P),c(I,5,"$modePixel",c2,P),c(I,5,"$modeLine",u2,P),c(I,5,"$modeRectangle",l2,P),c(I,5,"$modeRectangleOutline",s2,P),c(I,5,"$modeEllipse",a2,P),c(I,5,"$modeEllipseOutline",o2,P),c(I,5,"$selectRectangle",i2,P),c(I,5,"$selectEllipse",n2,P),c(I,5,"$selectLasso",r2,P),c(I,5,"$selectMagic",t2,P),c(I,5,"$undo",e2,P),c(I,5,"$redo",Xy,P),c(I,5,"$save",Jy,P),c(I,5,"$open",Py,P),c(I,5,"$output",Zy,P),c(I,5,"$file",Qy,P),c(I,5,"$saveSvg",qy,P),c(I,5,"$savePng",Wy,P),c(I,5,"$addLayer",Gy,P),c(I,5,"$addColor",Uy,P),c(I,5,"$colors",Ky,P),c(I,5,"$layers",Yy,P),P=c(I,0,"XPgInputPixelEditorBasic",M2,P),a(I,1,P);var T2='<input part="input" type="range" />';var D2="";var $2,H2,I2,R2,_2,B2,O2,lt,Xa,N2,V2;O2=[k({selector:"pg-input-range",style:D2,template:T2})];var dn=class extends(B2=HTMLElement,_2=[L()],R2=[L()],I2=[L()],H2=[L()],$2=[m()],B2){constructor(){super(...arguments);R(this,Xa);p(this,"min",a(lt,8,this,"0")),a(lt,11,this);p(this,"max",a(lt,12,this,"100")),a(lt,15,this);p(this,"step",a(lt,16,this,"1")),a(lt,19,this);p(this,"name",a(lt,20,this,"")),a(lt,23,this);p(this,"$input",a(lt,24,this)),a(lt,27,this)}render(){this.$input.min=this.min,this.$input.max=this.max,this.$input.step=this.step}connectedCallback(){this.$input.addEventListener("change",F(this,Xa,N2).bind(this)),this.$input.addEventListener("input",F(this,Xa,V2).bind(this))}};lt=A(B2),Xa=new WeakSet,N2=function(t){t.stopPropagation();let{value:n}=t.target;this.dispatchEvent(new CustomEvent("change",{detail:{value:n,name:this.name}}))},V2=function(t){t.stopPropagation();let{value:n}=t.target;this.dispatchEvent(new CustomEvent("input",{detail:{value:n,name:this.name}}))},c(lt,5,"min",_2,dn),c(lt,5,"max",R2,dn),c(lt,5,"step",I2,dn),c(lt,5,"name",H2,dn),c(lt,5,"$input",$2,dn),dn=c(lt,0,"PgInputRange",O2,dn),a(lt,1,dn);var z2=`<div class="example">
  <pg-input-range part="input" value="50"></pg-input-range>
  <div>
    <code>onchange: <span part="value1"></span></code>
  </div>
  <div>
    <code>oninput: <span part="value2"></span></code>
  </div>
</div>`;var j2,Y2,K2,U2,G2,Ur,es,W2,q2;G2=[k({selector:"x-pg-input-range-basic",template:z2})];var fi=class extends(U2=HTMLElement,K2=[m()],Y2=[m()],j2=[m()],U2){constructor(){super(...arguments);R(this,es);p(this,"$input",a(Ur,8,this)),a(Ur,11,this);p(this,"$value1",a(Ur,12,this)),a(Ur,15,this);p(this,"$value2",a(Ur,16,this)),a(Ur,19,this)}connectedCallback(){this.$input.addEventListener("change",F(this,es,W2).bind(this)),this.$input.addEventListener("input",F(this,es,q2).bind(this))}};Ur=A(U2),es=new WeakSet,W2=function(t){let{value:n}=t.detail;this.$value1.innerText=n},q2=function(t){let{value:n}=t.detail;this.$value2.innerText=n},c(Ur,5,"$input",K2,fi),c(Ur,5,"$value1",Y2,fi),c(Ur,5,"$value2",j2,fi),fi=c(Ur,0,"XPgInputRangeBasic",G2,fi),a(Ur,1,fi);var Q2=`<div part="overlay">
  <pg-menu part="menu"></pg-menu>
</div>`;var Z2=`:host {\r
  display: contents;\r
}\r
\r
[part="overlay"] {\r
  margin: 0;\r
  padding: 0;\r
  border: 0;\r
  background: transparent;\r
  overflow: visible;\r
  --pg-menu-box-shadow: 0 0.125rem 0.5rem rgba(0, 0, 0, 0.25);\r
  top: anchor(top);\r
  left: anchor(left);\r
  min-width: calc(anchor-size(width) + calc(2 * var(--pg-menu-padding, 0.25rem)));\r
  margin: var(--pg-overlay-menu-_y, 0) 0 0 var(--pg-overlay-menu-_x, 0);\r
  overflow: visible;\r
}\r
`;var P2,J2,X2,eE,tE,rE,nE,iE,_e,uo,oE,aE,sE;iE=[k({selector:"pg-overlay-select-menu",template:Q2,style:Z2})];var ut=class extends(nE=je,rE=[m()],tE=[m()],eE=[L()],X2=[L()],J2=[L()],P2=[L()],nE){constructor(){super(...arguments);R(this,uo);p(this,"$overlay",a(_e,8,this)),a(_e,11,this);p(this,"$menu",a(_e,12,this)),a(_e,15,this);p(this,"source",a(_e,16,this,null)),a(_e,19,this);p(this,"default",a(_e,20,this,null)),a(_e,23,this);p(this,"items",a(_e,24,this,[])),a(_e,27,this);p(this,"value",a(_e,28,this,null)),a(_e,31,this)}render(t){t.items&&this.value!==null&&(this.items.forEach(n=>n.checked=!1),this.items.find(n=>n.value===this.value.value).checked=!0)}connectedCallback(){this.$menu.items=this.items,this.$menu.addEventListener("select",F(this,uo,aE).bind(this)),this.$menu.addEventListener("close",F(this,uo,sE).bind(this)),this.$overlay.popover="auto",this.source!==null&&this.$overlay.showPopover({source:this.source}),this.$overlay.addEventListener("toggle",F(this,uo,oE).bind(this));let t=this.source?.getBoundingClientRect(),n=0,i=0,o=this.value===null||typeof this.value!="object"?this.value:this.value.value,s=this.value===null?-1:this.items.findIndex(l=>l.value===o);if(s!==-1){let l=this.$menu.getItemHeight(s);i-=this.$menu.getItemOffset(0,s),t?.height!==l&&t?.height&&(i+=(t.height-l)/2)}else if(this.items.length>0){this.default&&(this.default.checked=!0,this.$menu.items.unshift(this.default));let l=this.$menu.getItemHeight(0);i-=this.$menu.getItemOffset(0,0),t?.height!==l&&t?.height&&(i+=(t.height-l)/2)}this.$overlay.style.setProperty("--pg-overlay-menu-_x",`${n}px`),this.$overlay.style.setProperty("--pg-overlay-menu-_y",`${i}px`),this.$menu.focus(s)}disconnectedCallback(){}};_e=A(nE),uo=new WeakSet,oE=function(t){t.newState==="closed"&&(this.close(),this.source?.focus())},aE=function(t){t.detail.item.index=t.detail.index,this.close(t.detail.item),this.source?.focus()},sE=function(){this.close({value:null}),this.source?.focus()},c(_e,5,"$overlay",rE,ut),c(_e,5,"$menu",tE,ut),c(_e,5,"source",eE,ut),c(_e,5,"default",X2,ut),c(_e,5,"items",J2,ut),c(_e,5,"value",P2,ut),ut=c(_e,0,"PgOverlaySelectMenu",iE,ut),a(_e,1,ut);var lE=`<button part="button">
  <span part="label"></span>
  <svg part="chevron" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
</button>`;var uE=`:host {\r
  display: contents;\r
}\r
\r
[part=button] {\r
  font-family: var(--pg-font-family, system-ui);\r
  background: var(--pg-input-select-background, #FFFFFF);\r
  text-align: left;\r
  display: grid;\r
  grid-template-rows: auto;\r
  grid-template-columns: 100% 1.25rem;\r
  border: 1px solid var(--pg-input-select-border-color, #453C4F);\r
  border-radius: 0.25rem;\r
  padding: 0;\r
  width: 100%;\r
  font-size: 1rem;\r
  outline: 0;\r
}\r
\r
[part=button]:focus {\r
  box-shadow: 0 0 0 3px rgba(79, 143, 249, 0.5);\r
}\r
\r
[part=label] {\r
  grid-row: 1;\r
  grid-column: 1;\r
  padding: var(--pg-input-select-padding, 0.5rem 0.75rem);\r
  font-size: var(--pg-input-select-font-size, 1rem);\r
}\r
\r
[part=chevron] {\r
  grid-row: 1;\r
  grid-column: 2;\r
  pointer-events: none;\r
  width: 1.5rem;\r
  height: 1.5rem;\r
  align-self: center;\r
  transform: translate(-1.5rem, 0);\r
}`;var cE,pE,dE,hE,fE,mE,gE,bE,Be,ts,xu,vE;bE=[k({selector:"pg-input-select",style:uE,template:lE})];var Gr=class extends(gE=HTMLElement,mE=[L()],fE=[L()],hE=[L()],dE=[L()],pE=[m()],cE=[m()],gE){constructor(){super(...arguments);R(this,xu);p(this,"options",a(Be,8,this,[])),a(Be,11,this);p(this,"value",a(Be,12,this,"")),a(Be,15,this);p(this,"name",a(Be,16,this,"")),a(Be,19,this);p(this,"default",a(Be,20,this,null)),a(Be,23,this);p(this,"$button",a(Be,24,this)),a(Be,27,this);p(this,"$label",a(Be,28,this)),a(Be,31,this);R(this,ts,!1)}connectedCallback(){this.$button.addEventListener("click",F(this,xu,vE).bind(this))}render(t){(t.value||t.default)&&(this.$label.textContent=this.value?this.value:this.default?this.default.label:"\xA0")}};Be=A(gE),ts=new WeakMap,xu=new WeakSet,vE=async function(){if(x(this,ts))return;B(this,ts,!0);let t=await ut.open({source:this.$button,default:this.default,value:this.options.find(n=>n.value===this.value)??null,items:this.options});t!==void 0&&(this.dispatchEvent(new CustomEvent("change",{detail:{value:t.value}})),this.$label.textContent=t.label),B(this,ts,!1)},c(Be,5,"options",mE,Gr),c(Be,5,"value",fE,Gr),c(Be,5,"name",hE,Gr),c(Be,5,"default",dE,Gr),c(Be,5,"$button",pE,Gr),c(Be,5,"$label",cE,Gr),Gr=c(Be,0,"PgInputSelect",bE,Gr),a(Be,1,Gr);var xE=`<div class="example">
  <pg-input-select part="input"></pg-input-select>
  <div>
    <code>onchange: <span part="value"></span></code>
  </div>
</div>`;var yE,EE,wE,CE,mi,yu,AE;CE=[k({selector:"x-pg-input-select-basic",template:xE})];var co=class extends(wE=HTMLElement,EE=[m()],yE=[m()],wE){constructor(){super(...arguments);R(this,yu);p(this,"$input",a(mi,8,this)),a(mi,11,this);p(this,"$value",a(mi,12,this)),a(mi,15,this)}connectedCallback(){this.$input.options.push({label:"Option 1",value:"option1"},{label:"Option 2",value:"option2"},{label:"Option 3",value:"option3"},{label:"Option 4",value:"option4"}),this.$input.default={label:"None",value:"",disabled:!0},this.$input.addEventListener("change",F(this,yu,AE).bind(this))}};mi=A(wE),yu=new WeakSet,AE=function(t){let{value:n}=t.detail;this.$input.value=n,this.$value.innerText=`${n}`},c(mi,5,"$input",EE,co),c(mi,5,"$value",yE,co),co=c(mi,0,"XPgInputSelectBasic",CE,co),a(mi,1,co);var kE=`<div class="example">
  <pg-input-text part="input" value="Hello World!"></pg-input-text>
  <div>
    <code>onchange: <span part="value1"></span></code>
  </div>
  <div>
    <code>oninput: <span part="value2"></span></code>
  </div>
</div>`;var LE,FE,SE,ME,TE,Wr,rs,DE,$E;TE=[k({selector:"x-pg-input-text-basic",template:kE})];var gi=class extends(ME=HTMLElement,SE=[m()],FE=[m()],LE=[m()],ME){constructor(){super(...arguments);R(this,rs);p(this,"$input",a(Wr,8,this)),a(Wr,11,this);p(this,"$value1",a(Wr,12,this)),a(Wr,15,this);p(this,"$value2",a(Wr,16,this)),a(Wr,19,this)}connectedCallback(){this.$input.addEventListener("change",F(this,rs,DE).bind(this)),this.$input.addEventListener("input",F(this,rs,$E).bind(this))}};Wr=A(ME),rs=new WeakSet,DE=function(t){let{value:n}=t.detail;this.$value1.textContent=n},$E=function(t){let{value:n}=t.detail;this.$value2.textContent=n},c(Wr,5,"$input",SE,gi),c(Wr,5,"$value1",FE,gi),c(Wr,5,"$value2",LE,gi),gi=c(Wr,0,"XPgInputTextBasic",TE,gi),a(Wr,1,gi);var HE=`<div part="grid">
  <parent/>
  <pg-icon part="icon"></pg-icon>
</div>`;var IE=`:host {\r
  display: block;\r
}\r
\r
[part="grid"] {\r
  display: grid;\r
  grid-template-columns: auto 1.5rem;\r
}\r
\r
[part="icon"] {\r
  grid-row: 1;\r
  grid-column: 2;\r
  pointer-events: none;\r
  transform: translate(calc(-0.35rem + 1px), calc(0.25rem + 1px));\r
}\r
\r
[part="input"] {\r
  grid-row: 1;\r
  grid-column: 1 / span 2;\r
}\r
\r
[part="input"]:focus + [part="icon"] {\r
  --pg-icon-color: #4f8ff9;\r
}`;var RE,_E,BE,OE,bi;OE=[k({selector:"pg-input-text-icon",style:IE,template:HE})];var po=class extends(BE=br,_E=[L()],RE=[m()],BE){constructor(){super(...arguments);p(this,"path",a(bi,8,this,"M3,3V21H21V3")),a(bi,11,this);p(this,"$icon",a(bi,12,this)),a(bi,15,this)}render(t){t.path&&(this.$icon.path=this.path)}};bi=A(BE),c(bi,5,"path",_E,po),c(bi,5,"$icon",RE,po),po=c(bi,0,"PgInputTextIcon",OE,po),a(bi,1,po);var NE=`<div part="wrapper">
  <button part="select">
    <img part="selectedAvatar" />
    <span part="selectedName">First Last</span>
    <svg part="githubIcon" viewBox="0 0 24 24"><path fill="currentColor" d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" /></svg>
    <span part="selectedGithub">GitHub</span>
    <svg part="countIcon" viewBox="0 0 24 24"><path fill="currentColor" d="M11,13.5V21.5H3V13.5H11M12,2L17.5,11H6.5L12,2M17.5,13C20,13 22,15 22,17.5C22,20 20,22 17.5,22C15,22 13,20 13,17.5C13,15 15,13 17.5,13Z" /></svg>
    <span part="selectedCount">9999</span>
    <svg part="loading" viewBox="0 0 24 24"><path fill="currentColor" d="M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z" /></svg>
    <span part="loadingText">Loading...</span>
    <svg part="chevron" viewBox="0 0 24 24"><path fill="currentColor" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
    <span part="noData">Empty Users List</span>
    <span part="noSelection">Select a User</span>
  </button>
  <div part="dropdownContainer">
    <div part="dropdown"></div>
  </div>
</div>`;var VE=`:host {\r
  display: block;\r
}\r
\r
[part="wrapper"] {\r
  display: grid;\r
  grid-template-rows: auto 0;\r
  grid-template-columns: 100%;\r
}\r
\r
[part="select"] {\r
  display: grid;\r
  grid-template-columns: 3.5rem 1.75rem auto 2.75rem 1fr 1.5rem;\r
  grid-template-rows: 1.5rem 1.5rem;\r
  grid-row: 1;\r
  grid-column: 1;\r
  border: 1px solid var(--pg-input-select-border-color, #453C4F);\r
  border-radius: 0.25rem;\r
  padding: 0.5rem 0.5rem 0.5rem 0.75rem;\r
  width: 100%;\r
  font-size: 1rem;\r
  outline: 0;\r
  text-align: left;\r
  background: var(--pg-input-select-background, #fff);\r
}\r
\r
[part="select"]:focus {\r
  box-shadow: 0 0 0 3px rgba(79, 143, 249, 0.5);\r
}\r
\r
[part="select"]:disabled {\r
  border: 1px solid var(--pg-input-select-disabled-border-color, rgba(69, 60, 79, 0.6));\r
  color: var(--pg-input-select-disabled-color, rgba(69, 60, 79, 0.6));\r
}\r
\r
[part="chevron"] {\r
  grid-row: 1 / span 2;\r
  grid-column: 6;\r
  pointer-events: none;\r
  width: 1.5rem;\r
  height: 1.5rem;\r
  align-self: center;\r
}\r
\r
.githubIcon,\r
[part="githubIcon"] {\r
  grid-row: 2;\r
  grid-column: 2;\r
  width: 1.5rem;\r
  height: 1.5rem;\r
  align-self: center;\r
  color: var(--pg-input-select-border-color, #453C4F);\r
}\r
\r
.avatar,\r
[part="selectedAvatar"] {\r
  grid-row: 1 / span 2;\r
  grid-column: 1;\r
  width: 3rem;\r
  height: 3rem;\r
  border-radius: 50%;\r
  border: 1px solid var(--pg-input-select-border-color, #453C4F);\r
}\r
\r
.name,\r
[part="selectedName"] {\r
  grid-row: 1;\r
  grid-column: 2 / span 4;\r
  align-self: center;\r
}\r
\r
.github,\r
[part="selectedGithub"] {\r
  grid-row: 2;\r
  grid-column: 3;\r
  align-self: center;\r
}\r
\r
.countIcon,\r
[part="countIcon"] {\r
  grid-row: 2;\r
  grid-column: 4;\r
  width: 1.5rem;\r
  height: 1.5rem;\r
  align-self: center;\r
  margin-left: 1rem;\r
  color: var(--pg-input-select-border-color, #453C4F);\r
}\r
\r
.iconCount,\r
[part="selectedCount"] {\r
  grid-row: 2;\r
  grid-column: 5;\r
  align-self: center;\r
  font-weight: bold;\r
}\r
\r
[part="dropdown"].open {\r
  display: flex;\r
}\r
\r
[part="dropdown"] {\r
  grid-row: 2;\r
  grid-column: 1;\r
  display: none;\r
  flex-direction: column;\r
  border: 1px solid var(--pg-input-select-border-color, #453C4F);\r
  border-radius: 0.25rem;\r
  background: #fff;\r
  z-index: 1;\r
  position: absolute;\r
  max-height: 16.5rem;\r
  overflow: auto;\r
}\r
\r
[part="dropdown"] button {\r
  display: grid;\r
  grid-template-columns: 3.5rem 1.75rem auto 2.75rem 1fr;\r
  grid-template-rows: auto;\r
  border: 0;\r
  padding: 0.5rem 0.75rem;\r
  text-align: left;\r
  background: #fff;\r
}\r
\r
[part="dropdown"] button:hover,\r
[part="dropdown"] button:focus {\r
  color: #fff;\r
  background: #1E90FF;\r
}\r
\r
[part="dropdown"] button:hover .githubIcon,\r
[part="dropdown"] button:hover .countIcon,\r
[part="dropdown"] button:focus .githubIcon,\r
[part="dropdown"] button:focus .countIcon {\r
  color: #fff;\r
}\r
\r
[part="loading"] {\r
  width: 3rem;\r
  height: 3rem;\r
  animation: spin 2s infinite linear;\r
  grid-row: 1 / span 2;;\r
  grid-column: 1;\r
  pointer-events: none;\r
  align-self: center;\r
}\r
\r
@keyframes spin {\r
  0% {\r
    transform: rotate(0deg);\r
  }\r
  100% {\r
    transform: rotate(359deg);\r
  }\r
}\r
\r
[part="loadingText"] {\r
  grid-row: 1 / span 2;\r
  grid-column: 2 / span 3;\r
  align-self: center;\r
}\r
\r
[part="noData"] {\r
  grid-row: 1 / span 2;\r
  grid-column: 1 / span 4;\r
  align-self: center;\r
}\r
\r
[part="noSelection"] {\r
  grid-row: 1 / span 2;\r
  grid-column: 1 / span 4;\r
  align-self: center;\r
}`;function zE(e,r){let t=document.createElementNS("http://www.w3.org/2000/svg","svg");t.setAttribute("viewBox","0 0 24 24");let n=document.createElementNS("http://www.w3.org/2000/svg","path");return n.setAttribute("d",e),n.setAttribute("fill","currentColor"),t.appendChild(n),t.classList.add(r),t}var Eu={ArrowUp:"ArrowUp",ArrowRight:"ArrowRight",ArrowDown:"ArrowDown",ArrowLeft:"ArrowLeft",Escape:"Escape",Tab:"Tab"},xM="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z",yM="M11,13.5V21.5H3V13.5H11M12,2L17.5,11H6.5L12,2M17.5,13C20,13 22,15 22,17.5C22,20 20,22 17.5,22C15,22 13,20 13,17.5C13,15 15,13 17.5,13Z",jE,YE,KE,UE,GE,WE,qE,QE,ZE,PE,JE,XE,ew,tw,rw,nw,iw,ow,aw,sw,U;sw=[k({selector:"pg-input-user-select",style:VE,template:NE})];var Le=class extends(aw=HTMLElement,ow=[L()],iw=[L()],nw=[L()],rw=[L()],tw=[L()],ew=[L()],XE=[m()],JE=[m()],PE=[m()],ZE=[m()],QE=[m()],qE=[m()],WE=[m()],GE=[m()],UE=[m()],KE=[m()],YE=[m()],jE=[m()],aw){constructor(){super(...arguments);p(this,"options",a(U,8,this,[])),a(U,11,this);p(this,"value",a(U,12,this,null)),a(U,15,this);p(this,"clear",a(U,16,this,!1)),a(U,19,this);p(this,"noDataText",a(U,20,this,"Empty Users List")),a(U,23,this);p(this,"noSelectionText",a(U,24,this,"Select a User")),a(U,27,this);p(this,"name",a(U,28,this,"")),a(U,31,this);p(this,"$select",a(U,32,this)),a(U,35,this);p(this,"$selectedAvatar",a(U,36,this)),a(U,39,this);p(this,"$selectedName",a(U,40,this)),a(U,43,this);p(this,"$githubIcon",a(U,44,this)),a(U,47,this);p(this,"$selectedGithub",a(U,48,this)),a(U,51,this);p(this,"$countIcon",a(U,52,this)),a(U,55,this);p(this,"$selectedCount",a(U,56,this)),a(U,59,this);p(this,"$dropdown",a(U,60,this)),a(U,63,this);p(this,"$loading",a(U,64,this)),a(U,67,this);p(this,"$loadingText",a(U,68,this)),a(U,71,this);p(this,"$noData",a(U,72,this)),a(U,75,this);p(this,"$noSelection",a(U,76,this)),a(U,79,this);p(this,"isOpen",!1);p(this,"handleCloseBind");p(this,"optionsElements",[]);p(this,"index",-1)}connectedCallback(){this.$select.addEventListener("click",this.handleClick.bind(this)),this.addEventListener("keydown",this.handleKeys.bind(this))}close(){this.isOpen=!1,this.$dropdown.classList.remove("open"),document.removeEventListener("mousedown",this.handleCloseBind)}handleClose(t){let n=t.target;n.nodeName===this.nodeName&&n.isOpen||this.close()}handleClick(){this.isOpen=!this.isOpen,this.$dropdown.classList.toggle("open",this.isOpen),this.handleCloseBind=this.handleClose.bind(this),document.addEventListener("mousedown",this.handleCloseBind),this.focusSelected()}focusSelected(){let t=this.options?.findIndex(n=>n===this.value);t&&t!==-1?(this.optionsElements[t].focus(),this.index=t):this.optionsElements.length&&this.optionsElements[0].focus()}handleSelect(t){console.log("clicked");let{id:n}=t.currentTarget.dataset,i=this.options?.find(o=>o.id===n);this.value=i||null,this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value,name:this.name}})),this.close()}loadingMode(){this.$selectedAvatar.style.display="none",this.$selectedName.style.display="none",this.$githubIcon.style.display="none",this.$selectedGithub.style.display="none",this.$countIcon.style.display="none",this.$selectedCount.style.display="none",this.$noData.style.display="none",this.$noSelection.style.display="none",this.$loading.style.display="flex",this.$loadingText.style.display="initial",this.$select.disabled=!0}noDataMode(){this.$selectedAvatar.style.display="none",this.$selectedName.style.display="none",this.$githubIcon.style.display="none",this.$selectedGithub.style.display="none",this.$countIcon.style.display="none",this.$selectedCount.style.display="none",this.$noData.style.display="initial",this.$noSelection.style.display="none",this.$loading.style.display="none",this.$loadingText.style.display="none",this.$select.disabled=!0}noSelectionMode(){this.$selectedAvatar.style.display="none",this.$selectedName.style.display="none",this.$githubIcon.style.display="none",this.$selectedGithub.style.display="none",this.$countIcon.style.display="none",this.$selectedCount.style.display="none",this.$noData.style.display="none",this.$noSelection.style.display="initial",this.$loading.style.display="none",this.$loadingText.style.display="none",this.$select.disabled=!1}selectMode(){this.$selectedAvatar.style.display="initial",this.$selectedName.style.display="initial",this.$githubIcon.style.display="initial",this.$selectedGithub.style.display="initial",this.$countIcon.style.display="initial",this.$selectedCount.style.display="initial",this.$noData.style.display="none",this.$noSelection.style.display="none",this.$loading.style.display="none",this.$loadingText.style.display="none",this.$select.disabled=!1}render(t){t.options&&(this.options===null?this.loadingMode():this.options.length===0?this.noDataMode():(this.selectMode(),this.calculateMinWidth(),this.optionsElements=this.options.map(n=>{let i=document.createElement("button"),o=document.createElement("img");o.src=`${n.base64}`,o.classList.add("avatar"),i.appendChild(o);let s=document.createElement("span");s.innerText=`${n.name}`,s.classList.add("name"),i.appendChild(s);let l=document.createElement("span");l.innerText=`${n.github}`,l.classList.add("github"),i.appendChild(l);let u=document.createElement("span");return u.innerText=`${n.iconCount}`,u.classList.add("iconCount"),i.appendChild(u),i.dataset.id=`${n.id}`,i.appendChild(zE(xM,"githubIcon")),i.appendChild(zE(yM,"countIcon")),i.addEventListener("click",this.handleSelect.bind(this)),this.$dropdown.appendChild(i),i}),this.value===null&&this.noSelectionMode())),t.value&&t.value&&this.value&&(this.$selectedAvatar.src=this.value.base64||"",this.$selectedCount.innerText=`${this.value.iconCount}`,this.$selectedName.innerText=`${this.value.name}`,this.$selectedGithub.innerText=`${this.value.github}`,this.selectMode()),t.noDataText&&(this.$noData.innerText=this.noDataText),t.noSelectionText&&(this.$noSelection.innerText=this.noSelectionText)}calculateMinWidth(){let{width:t}=this.$select.getBoundingClientRect();this.$dropdown.style.minWidth=`${t-2}px`}handleKeys(t){let n=this.optionsElements,i=this.index;switch(t.key){case Eu.ArrowUp:i===0?i=n.length-1:i>=0&&(i-=1);break;case Eu.ArrowDown:i<n.length-1?i+=1:i===n.length-1&&(i=0);break;case Eu.Tab:case Eu.Escape:this.close();break}i!=this.index&&(this.index=i,n[i].focus(),t.preventDefault())}};U=A(aw),c(U,5,"options",ow,Le),c(U,5,"value",iw,Le),c(U,5,"clear",nw,Le),c(U,5,"noDataText",rw,Le),c(U,5,"noSelectionText",tw,Le),c(U,5,"name",ew,Le),c(U,5,"$select",XE,Le),c(U,5,"$selectedAvatar",JE,Le),c(U,5,"$selectedName",PE,Le),c(U,5,"$githubIcon",ZE,Le),c(U,5,"$selectedGithub",QE,Le),c(U,5,"$countIcon",qE,Le),c(U,5,"$selectedCount",WE,Le),c(U,5,"$dropdown",GE,Le),c(U,5,"$loading",UE,Le),c(U,5,"$loadingText",KE,Le),c(U,5,"$noData",YE,Le),c(U,5,"$noSelection",jE,Le),Le=c(U,0,"PgInputUserSelect",sw,Le),a(U,1,Le);var Rp="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",lw=[{id:"14ea5584-07e3-11e4-bf19-842b2b6cfe1b",base64:Rp,name:"First Last 1",twitter:"templarian",github:"Templarian",website:"http://templarian.com",iconCount:1e3},{id:"24ea5584-07e3-11e4-bf19-842b2b6cfe1b",base64:Rp,name:"First Last 2",twitter:"templarian",github:"Templarian",website:"http://templarian.com",iconCount:0},{id:"34ea5584-07e3-11e4-bf19-842b2b6cfe1b",base64:Rp,name:"First Last 3",twitter:"templarian",github:"Templarian",website:"http://templarian.com",iconCount:9999}].map(e=>new vt().from(e));var uw=`<div class="example">
  <pg-input-user-select part="input"></pg-input-user-select>
  <code>onchange: <span part="value"></span></code>
</div>`;var cw,pw,dw,hw,vi;hw=[k({selector:"x-pg-input-user-select-basic",template:uw})];var ho=class extends(dw=HTMLElement,pw=[m()],cw=[m()],dw){constructor(){super(...arguments);p(this,"$input",a(vi,8,this)),a(vi,11,this);p(this,"$value",a(vi,12,this)),a(vi,15,this)}connectedCallback(){this.$input.options=lw,this.$input.addEventListener("change",this.handleChange.bind(this))}handleChange(t){let{name:n,value:i}=t.detail;this.$value.innerText=`${n} - ${i}`}};vi=A(dw),c(vi,5,"$input",pw,ho),c(vi,5,"$value",cw,ho),ho=c(vi,0,"XPgInputUserSelectBasic",hw,ho),a(vi,1,ho);var fw=`<div part="start">
  <div part="key"></div>
  <div part="seperator">:&nbsp;</div>
  <div part="startLabel">[</div>
</div>
<div part="items"></div>
<div part="endLabel">]</div>`;var mw=`:host {\r
  display: contents;\r
}\r
\r
.hide {\r
  display: none;\r
}\r
\r
[part=items] {\r
  padding-left: 1rem;\r
}\r
\r
[part=start] {\r
  display: flex;\r
}`;var gw,bw,vw,xw,yw,Ew,ww,Cw,Oe;Cw=[k({selector:"pg-json-array",style:mw,template:fw})];var jt=class extends(ww=HTMLElement,Ew=[L()],yw=[L()],xw=[L()],vw=[m()],bw=[m()],gw=[m()],ww){constructor(){super(...arguments);p(this,"key",a(Oe,8,this,"")),a(Oe,11,this);p(this,"value",a(Oe,12,this,[])),a(Oe,15,this);p(this,"expanded",a(Oe,16,this,!1)),a(Oe,19,this);p(this,"$key",a(Oe,20,this)),a(Oe,23,this);p(this,"$seperator",a(Oe,24,this)),a(Oe,27,this);p(this,"$items",a(Oe,28,this)),a(Oe,31,this)}connectedCallback(){Je({container:this.$items,items:this.value,type:t=>t.type,create:(t,n)=>{t.addEventListener("update",i=>{let{path:o,key:s,value:l}=i.detail;this.key&&o.push(this.key),this.dispatchEvent(new CustomEvent("update",{detail:{path:o,key:s,value:l}}))})}})}render(t){t.key&&(this.$key.classList.toggle("hide",this.key===""),this.$seperator.classList.toggle("hide",this.key===""),this.$key.textContent=this.key)}};Oe=A(ww),c(Oe,5,"key",Ew,jt),c(Oe,5,"value",yw,jt),c(Oe,5,"expanded",xw,jt),c(Oe,5,"$key",vw,jt),c(Oe,5,"$seperator",bw,jt),c(Oe,5,"$items",gw,jt),jt=c(Oe,0,"PgJsonArray",Cw,jt),a(Oe,1,jt);var Aw=`<div part="key"></div>
<div part="seperator">:</div>
<div part="startLabel">{</div>
<div part="items"></div>
<div part="endLabel">}</div>`;var kw=`:host {\r
  display: contents;\r
}\r
\r
.hide {\r
  display: none;\r
}\r
\r
[part=items] {\r
  padding-left: 1rem;\r
}\r
`;var Lw,Fw,Sw,Mw,Tw,Dw,$w,Hw,Ne;Hw=[k({selector:"pg-json-object",style:kw,template:Aw})];var Yt=class extends($w=HTMLElement,Dw=[L()],Tw=[L()],Mw=[L()],Sw=[m()],Fw=[m()],Lw=[m()],$w){constructor(){super(...arguments);p(this,"key",a(Ne,8,this,"")),a(Ne,11,this);p(this,"value",a(Ne,12,this,[])),a(Ne,15,this);p(this,"expanded",a(Ne,16,this,!1)),a(Ne,19,this);p(this,"$key",a(Ne,20,this)),a(Ne,23,this);p(this,"$seperator",a(Ne,24,this)),a(Ne,27,this);p(this,"$items",a(Ne,28,this)),a(Ne,31,this)}connectedCallback(){Je({container:this.$items,items:this.value,type:t=>t.type,create:(t,n)=>{t.addEventListener("update",i=>{let{path:o,key:s,value:l}=i.detail;this.key&&o.push(this.key),this.dispatchEvent(new CustomEvent("update",{detail:{path:o,key:s,value:l}}))})}})}render(t){t.key&&(this.$key.classList.toggle("hide",this.key===""||!isNaN(this.key)),this.$seperator.classList.toggle("hide",this.key===""||!isNaN(this.key)),this.$key.textContent=this.key)}};Ne=A($w),c(Ne,5,"key",Dw,Yt),c(Ne,5,"value",Tw,Yt),c(Ne,5,"expanded",Mw,Yt),c(Ne,5,"$key",Sw,Yt),c(Ne,5,"$seperator",Fw,Yt),c(Ne,5,"$items",Lw,Yt),Yt=c(Ne,0,"PgJsonObject",Hw,Yt),a(Ne,1,Yt);var Iw=`<div part="key"></div>
<div part="seperator">:&nbsp;</div>
<div part="container">
  <span>&quot;</span><pg-input-text part="value"></pg-input-text><span>&quot;</span>
</div>`;var Rw=`:host {\r
  display: flex;\r
}\r
\r
[part=key],\r
[part=seperator]  {\r
  display: inline-flex;\r
  align-items: center;\r
}\r
\r
[part=value] {\r
  user-select: text;\r
  --pg-input-text-padding: 0 0.25rem;\r
  --pg-input-text-border-color: transparent;\r
  --pg-input-text-font-family: var(--pg-json-font-family);\r
  display: inline-flex;\r
  vertical-align: middle;\r
  margin: 0 -0.25rem;\r
  z-index: 1;\r
  position: relative;\r
}\r
`;var _w,Bw,Ow,Nw,Vw,zw,Kt;zw=[k({selector:"pg-json-string",style:Rw,template:Iw})];var qr=class extends(Vw=HTMLElement,Nw=[L()],Ow=[L()],Bw=[m()],_w=[m()],Vw){constructor(){super(...arguments);p(this,"key",a(Kt,8,this,"")),a(Kt,11,this);p(this,"value",a(Kt,12,this,"")),a(Kt,15,this);p(this,"$key",a(Kt,16,this)),a(Kt,19,this);p(this,"$value",a(Kt,20,this)),a(Kt,23,this)}connectedCallback(){this.$value.addEventListener("input",t=>{this.dispatchEvent(new CustomEvent("update",{detail:{path:[this.key],key:this.key,value:t.detail.value}}))})}render(t){t.key&&(this.$key.textContent=this.key),t.value&&(this.$value.value=this.value)}};Kt=A(Vw),c(Kt,5,"key",Nw,qr),c(Kt,5,"value",Ow,qr),c(Kt,5,"$key",Bw,qr),c(Kt,5,"$value",_w,qr),qr=c(Kt,0,"PgJsonString",zw,qr),a(Kt,1,qr);var jw=`<div part="key"></div>
<div part="seperator">:&nbsp;</div>
<div part="container">
  <button part="value"></button>
</div>`;var Yw=`:host {\r
  display: flex;\r
}\r
\r
[part=key],\r
[part=seperator] {\r
  display: inline-flex;\r
  align-items: center;\r
}\r
\r
[part=value] {\r
  margin: 0 -0.25rem;\r
  background-color: transparent;\r
  border: 0;\r
  font-size: 1rem;\r
  padding: 0.125rem 0.25rem;\r
  vertical-align: middle;\r
  font-family: inherit;\r
  z-index: 1;\r
  position: relative;\r
  outline: 0;\r
  border-radius: 0.125rem;\r
}\r
\r
[part=value]:focus-visible {\r
    box-shadow: 0 0 0 3px var(--pg-input-text-focus-glow, rgb(79, 143, 249, 0.5));\r
}\r
`;var Kw,Uw,Gw,Ww,qw,Qw,Ut,ns,wu,Zw;Qw=[k({selector:"pg-json-boolean",style:Yw,template:jw})];var Qr=class extends(qw=HTMLElement,Ww=[L()],Gw=[L()],Uw=[m()],Kw=[m()],qw){constructor(){super(...arguments);R(this,wu);p(this,"key",a(Ut,8,this,"")),a(Ut,11,this);p(this,"value",a(Ut,12,this,!1)),a(Ut,15,this);p(this,"$key",a(Ut,16,this)),a(Ut,19,this);p(this,"$value",a(Ut,20,this)),a(Ut,23,this);p(this,"options",[{label:"true",value:"true"},{label:"false",value:"false"}]);R(this,ns,!1)}connectedCallback(){this.$value.addEventListener("click",F(this,wu,Zw).bind(this))}render(t){t.key&&(this.$key.textContent=this.key),t.value&&(this.$value.textContent=this.value?"true":"false")}};Ut=A(qw),ns=new WeakMap,wu=new WeakSet,Zw=async function(){if(x(this,ns))return;B(this,ns,!0);let t=await ut.open({source:this.$value,value:this.options.find(n=>n.value===`${this.value}`)??"false",items:this.options});t!==void 0&&(this.dispatchEvent(new CustomEvent("update",{detail:{path:[this.key],key:this.key,value:t.value==="true"}})),this.$value.textContent=t.label,this.value=t.value==="true"),B(this,ns,!1)},c(Ut,5,"key",Ww,Qr),c(Ut,5,"value",Gw,Qr),c(Ut,5,"$key",Uw,Qr),c(Ut,5,"$value",Kw,Qr),Qr=c(Ut,0,"PgJsonBoolean",Qw,Qr),a(Ut,1,Qr);var Pw=`<div part="key"></div>
<div part="seperator">:&nbsp;</div>
<div part="container">
  <pg-input-number part="value"></pg-input-number>
</div>`;var Jw=`:host {\r
  display: flex;\r
}\r
\r
[part=key],\r
[part=seperator]  {\r
  display: inline-flex;\r
  align-items: center;\r
}\r
\r
[part=value] {\r
  user-select: text;\r
  --pg-input-text-padding: 0 0.25rem;\r
  --pg-input-text-border-color: transparent;\r
  --pg-input-number-font-family: var(--pg-json-font-family);\r
  display: inline-flex;\r
  vertical-align: middle;\r
  margin: 0 -0.25rem;\r
  z-index: 1;\r
  position: relative;\r
}\r
`;var Xw,eC,tC,rC,nC,iC,Gt;iC=[k({selector:"pg-json-number",style:Jw,template:Pw})];var Zr=class extends(nC=HTMLElement,rC=[L()],tC=[L()],eC=[m()],Xw=[m()],nC){constructor(){super(...arguments);p(this,"key",a(Gt,8,this,"")),a(Gt,11,this);p(this,"value",a(Gt,12,this,0)),a(Gt,15,this);p(this,"$key",a(Gt,16,this)),a(Gt,19,this);p(this,"$value",a(Gt,20,this)),a(Gt,23,this)}connectedCallback(){this.$value.addEventListener("input",t=>{this.dispatchEvent(new CustomEvent("update",{detail:{path:[this.key],key:this.key,value:Number.parseInt(t.detail.value,10)}}))})}render(t){t.key&&(this.$key.textContent=this.key),t.value&&(this.$value.value=`${this.value}`)}};Gt=A(nC),c(Gt,5,"key",rC,Zr),c(Gt,5,"value",tC,Zr),c(Gt,5,"$key",eC,Zr),c(Gt,5,"$value",Xw,Zr),Zr=c(Gt,0,"PgJsonNumber",iC,Zr),a(Gt,1,Zr);var oC='<div part="container"></div>';var aC=`:host {\r
  display: contents;\r
}\r
\r
[part=container] {\r
  --pg-json-font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;\r
  font-family: var(--pg-json-font-family);\r
  user-select: none;\r
}`;function hC(e){if(typeof e=="string")return qr;if(typeof e=="boolean")return Qr;if(typeof e=="number")return Zr}function _p(e){return Object.keys(e).map(r=>Array.isArray(e[r])?{key:r,value:Bp(e[r]),type:jt}:typeof e[r]=="object"?{key:r,value:_p(e[r]),type:Yt}:{key:r,value:e[r],type:hC(e[r])})}function Bp(e){return e.map((r,t)=>Array.isArray(r)?{key:t.toString(),value:Bp(r),type:jt}:typeof r=="object"?{key:t.toString(),value:_p(r),type:Yt}:{key:t.toString(),value:r,type:hC(r)})}var sC,lC,uC,cC,pC,dC,Wt;dC=[k({selector:"pg-json",style:aC,template:oC})];var Sn=class extends(pC=HTMLElement,cC=[L()],uC=[L()],lC=[L()],sC=[m()],pC){constructor(){super(...arguments);p(this,"value",a(Wt,8,this,null)),a(Wt,11,this);p(this,"root",a(Wt,12,this,[])),a(Wt,15,this);p(this,"schema",a(Wt,16,this,null)),a(Wt,19,this);p(this,"$container",a(Wt,20,this)),a(Wt,23,this)}render(t){if(t.value&&this.value!==null){if(this.$container.children.length===1&&this.$container.children[0].remove(),typeof this.value=="object"){let n=document.createElement("pg-json-object");n.value=_p(this.value),n.addEventListener("update",this.handleUpdate.bind(this)),this.$container.appendChild(n)}else if(Array.isArray(this.value)){let n=document.createElement("pg-json-array");n.value=Bp(this.value),n.addEventListener("update",this.handleUpdate.bind(this)),this.$container.appendChild(n)}}}getParent(t,n){let i=t.pop();return i&&(typeof n[i]=="object"||n[i]instanceof Array)?this.getParent(t,n[i]):n}handleUpdate(t){let{path:n,key:i,value:o}=t.detail,s=this.getParent(n,this.value);this.dispatchEvent(new CustomEvent("change",{detail:{parent:s,key:i,value:o}}))}};Wt=A(pC),c(Wt,5,"value",cC,Sn),c(Wt,5,"root",uC,Sn),c(Wt,5,"schema",lC,Sn),c(Wt,5,"$container",sC,Sn),Sn=c(Wt,0,"PgJson",dC,Sn),a(Wt,1,Sn);var fC=`<div class="example">
  <pg-json part="json"></pg-json>
  <pre part="output"></pre>
</div>`;var mC,gC,bC,vC,xi;vC=[k({selector:"x-pg-json-basic",template:fC})];var fo=class extends(bC=HTMLElement,gC=[m()],mC=[m()],bC){constructor(){super(...arguments);p(this,"$json",a(xi,8,this)),a(xi,11,this);p(this,"$output",a(xi,12,this)),a(xi,15,this)}connectedCallback(){this.$json.value={users:[{name:"Dipper Pines",age:12,selected:!1}]},this.$json.addEventListener("change",t=>{let{parent:n,key:i,value:o}=t.detail;o!==n[i]&&(n[i]=o),this.$output.textContent=JSON.stringify(this.$json.value)})}};xi=A(bC),c(xi,5,"$json",gC,fo),c(xi,5,"$output",mC,fo),fo=c(xi,0,"XPgJsonBasic",vC,fo),a(xi,1,fo);var xC=`<button part="name">

</button>`;var yC='<div part="items"></div>';var EC=`:host {\r
  display: inline-flex;\r
  color: var(--pg-icon-color, #453C4F);\r
}\r
\r
[part="svg"] {\r
  width: var(--pg-icon-width, 1.5rem);\r
  height: var(--pg-icon-height, 1.5rem);\r
}`;var wC,CC,AC,kC,LC,Pr;LC=[k({selector:"pg-list-tag",style:EC,template:yC})];var yi=class extends(kC=HTMLElement,AC=[L()],CC=[L()],wC=[m()],kC){constructor(){super(...arguments);p(this,"items",a(Pr,8,this,[])),a(Pr,11,this);p(this,"edit",a(Pr,12,this,!1)),a(Pr,15,this);p(this,"$items",a(Pr,16,this)),a(Pr,19,this)}render(t){t.items&&cu(this.$items,this.items,"id",n=>{let i=kl(xC,{name:{innerText:n.name}});return i.querySelector('[part="name"]')?.addEventListener("click",s=>{console.log(n)}),i},(n,i)=>{}),t.edit}};Pr=A(kC),c(Pr,5,"items",AC,yi),c(Pr,5,"edit",CC,yi),c(Pr,5,"$items",wC,yi),yi=c(Pr,0,"PgListTag",LC,yi),a(Pr,1,yi);var FC=[new Hr().from({id:"uuid1",name:"test 1",url:"test-1",count:42}),new Hr().from({id:"uuid2",name:"test 2",url:"test-2",count:12}),new Hr().from({id:"uuid3",name:"test 3",url:"test-3",count:0})];var SC=`<button part="buttonClear">
  Clear Tags
</button>
<button part="buttonAdd">
  Add Tag
</button>
<button part="buttonRemove">
  Remove Tag
</button>
<button part="buttonEdit">
  Toggle Edit
</button>

<div class="example">
  <pg-list-tag part="tags"></pg-list-tag>
</div>`;var MC,TC,DC,$C,HC,IC,RC,ct;RC=[k({selector:"x-pg-list-tag-basic",template:SC})];var hn=class extends(IC=HTMLElement,HC=[m()],$C=[m()],DC=[m()],TC=[m()],MC=[m()],IC){constructor(){super(...arguments);p(this,"$tags",a(ct,8,this)),a(ct,11,this);p(this,"$buttonClear",a(ct,12,this)),a(ct,15,this);p(this,"$buttonAdd",a(ct,16,this)),a(ct,19,this);p(this,"$buttonRemove",a(ct,20,this)),a(ct,23,this);p(this,"$buttonEdit",a(ct,24,this)),a(ct,27,this);p(this,"uuid",4)}connectedCallback(){this.$buttonClear.addEventListener("click",this.handleClear.bind(this)),this.$buttonAdd.addEventListener("click",this.handleAdd.bind(this)),this.$buttonRemove.addEventListener("click",this.handleRemove.bind(this)),this.$buttonEdit.addEventListener("click",this.handleEdit.bind(this)),this.$tags.items.push(...FC)}handleClear(){this.$tags.items.splice(0,this.$tags.items.length)}handleAdd(){this.$tags.items.push(new Hr().from({id:`uuid${this.uuid++}`,count:42,name:"Foo Bar",url:"foo-bar"}))}handleRemove(){this.$tags.items=this.$tags.items.slice(0,this.$tags.items.length-1)}handleEdit(){this.$tags.edit=!this.$tags.edit}};ct=A(IC),c(ct,5,"$tags",HC,hn),c(ct,5,"$buttonClear",$C,hn),c(ct,5,"$buttonAdd",DC,hn),c(ct,5,"$buttonRemove",TC,hn),c(ct,5,"$buttonEdit",MC,hn),hn=c(ct,0,"XPgIconBasic",RC,hn),a(ct,1,hn);var Cu;function KC(e){return Cu=Cu||document.createElement("textarea"),Cu.innerHTML="&"+e+";",Cu.value}var SM=Object.prototype.hasOwnProperty;function MM(e,r){return e?SM.call(e,r):!1}function UC(e){var r=[].slice.call(arguments,1);return r.forEach(function(t){if(t){if(typeof t!="object")throw new TypeError(t+"must be object");Object.keys(t).forEach(function(n){e[n]=t[n]})}}),e}var TM=/\\([\\!"#$%&'()*+,.\/:;<=>?@[\]^_`{|}~-])/g;function il(e){return e.indexOf("\\")<0?e:e.replace(TM,"$1")}function GC(e){return!(e>=55296&&e<=57343||e>=64976&&e<=65007||(e&65535)===65535||(e&65535)===65534||e>=0&&e<=8||e===11||e>=14&&e<=31||e>=127&&e<=159||e>1114111)}function Yp(e){if(e>65535){e-=65536;var r=55296+(e>>10),t=56320+(e&1023);return String.fromCharCode(r,t)}return String.fromCharCode(e)}var DM=/&([a-z#][a-z0-9]{1,31});/gi,$M=/^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))/i;function HM(e,r){var t=0,n=KC(r);return r!==n?n:r.charCodeAt(0)===35&&$M.test(r)&&(t=r[1].toLowerCase()==="x"?parseInt(r.slice(2),16):parseInt(r.slice(1),10),GC(t))?Yp(t):e}function Wo(e){return e.indexOf("&")<0?e:e.replace(DM,HM)}var IM=/[&<>"]/,RM=/[&<>"]/g,_M={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"};function BM(e){return _M[e]}function ir(e){return IM.test(e)?e.replace(RM,BM):e}var j={};j.blockquote_open=function(){return`<blockquote>
`};j.blockquote_close=function(e,r){return"</blockquote>"+qo(e,r)};j.code=function(e,r){return e[r].block?"<pre><code>"+ir(e[r].content)+"</code></pre>"+qo(e,r):"<code>"+ir(e[r].content)+"</code>"};j.fence=function(e,r,t,n,i){var o=e[r],s="",l=t.langPrefix,u="",d,h,f;if(o.params){if(d=o.params.split(/\s+/g),h=d.join(" "),MM(i.rules.fence_custom,d[0]))return i.rules.fence_custom[d[0]](e,r,t,n,i);u=ir(Wo(il(h))),s=' class="'+l+u+'"'}return t.highlight?f=t.highlight.apply(t.highlight,[o.content].concat(d))||ir(o.content):f=ir(o.content),"<pre><code"+s+">"+f+"</code></pre>"+qo(e,r)};j.fence_custom={};j.heading_open=function(e,r){return"<h"+e[r].hLevel+">"};j.heading_close=function(e,r){return"</h"+e[r].hLevel+`>
`};j.hr=function(e,r,t){return(t.xhtmlOut?"<hr />":"<hr>")+qo(e,r)};j.bullet_list_open=function(){return`<ul>
`};j.bullet_list_close=function(e,r){return"</ul>"+qo(e,r)};j.list_item_open=function(){return"<li>"};j.list_item_close=function(){return`</li>
`};j.ordered_list_open=function(e,r){var t=e[r],n=t.order>1?' start="'+t.order+'"':"";return"<ol"+n+`>
`};j.ordered_list_close=function(e,r){return"</ol>"+qo(e,r)};j.paragraph_open=function(e,r){return e[r].tight?"":"<p>"};j.paragraph_close=function(e,r){var t=!(e[r].tight&&r&&e[r-1].type==="inline"&&!e[r-1].content);return(e[r].tight?"":"</p>")+(t?qo(e,r):"")};j.link_open=function(e,r,t){var n=e[r].title?' title="'+ir(Wo(e[r].title))+'"':"",i=t.linkTarget?' target="'+t.linkTarget+'"':"";return'<a href="'+ir(e[r].href)+'"'+n+i+">"};j.link_close=function(){return"</a>"};j.image=function(e,r,t){var n=' src="'+ir(e[r].src)+'"',i=e[r].title?' title="'+ir(Wo(e[r].title))+'"':"",o=' alt="'+(e[r].alt?ir(Wo(il(e[r].alt))):"")+'"',s=t.xhtmlOut?" /":"";return"<img"+n+o+i+s+">"};j.table_open=function(){return`<table>
`};j.table_close=function(){return`</table>
`};j.thead_open=function(){return`<thead>
`};j.thead_close=function(){return`</thead>
`};j.tbody_open=function(){return`<tbody>
`};j.tbody_close=function(){return`</tbody>
`};j.tr_open=function(){return"<tr>"};j.tr_close=function(){return`</tr>
`};j.th_open=function(e,r){var t=e[r];return"<th"+(t.align?' style="text-align:'+t.align+'"':"")+">"};j.th_close=function(){return"</th>"};j.td_open=function(e,r){var t=e[r];return"<td"+(t.align?' style="text-align:'+t.align+'"':"")+">"};j.td_close=function(){return"</td>"};j.strong_open=function(){return"<strong>"};j.strong_close=function(){return"</strong>"};j.em_open=function(){return"<em>"};j.em_close=function(){return"</em>"};j.del_open=function(){return"<del>"};j.del_close=function(){return"</del>"};j.ins_open=function(){return"<ins>"};j.ins_close=function(){return"</ins>"};j.mark_open=function(){return"<mark>"};j.mark_close=function(){return"</mark>"};j.sub=function(e,r){return"<sub>"+ir(e[r].content)+"</sub>"};j.sup=function(e,r){return"<sup>"+ir(e[r].content)+"</sup>"};j.hardbreak=function(e,r,t){return t.xhtmlOut?`<br />
`:`<br>
`};j.softbreak=function(e,r,t){return t.breaks?t.xhtmlOut?`<br />
`:`<br>
`:`
`};j.text=function(e,r){return ir(e[r].content)};j.htmlblock=function(e,r){return e[r].content};j.htmltag=function(e,r){return e[r].content};j.abbr_open=function(e,r){return'<abbr title="'+ir(Wo(e[r].title))+'">'};j.abbr_close=function(){return"</abbr>"};j.footnote_ref=function(e,r){var t=Number(e[r].id+1).toString(),n="fnref"+t;return e[r].subId>0&&(n+=":"+e[r].subId),'<sup class="footnote-ref"><a href="#fn'+t+'" id="'+n+'">['+t+"]</a></sup>"};j.footnote_block_open=function(e,r,t){var n=t.xhtmlOut?`<hr class="footnotes-sep" />
`:`<hr class="footnotes-sep">
`;return n+`<section class="footnotes">
<ol class="footnotes-list">
`};j.footnote_block_close=function(){return`</ol>
</section>
`};j.footnote_open=function(e,r){var t=Number(e[r].id+1).toString();return'<li id="fn'+t+'"  class="footnote-item">'};j.footnote_close=function(){return`</li>
`};j.footnote_anchor=function(e,r){var t=Number(e[r].id+1).toString(),n="fnref"+t;return e[r].subId>0&&(n+=":"+e[r].subId),' <a href="#'+n+'" class="footnote-backref">\u21A9</a>'};j.dl_open=function(){return`<dl>
`};j.dt_open=function(){return"<dt>"};j.dd_open=function(){return"<dd>"};j.dl_close=function(){return`</dl>
`};j.dt_close=function(){return`</dt>
`};j.dd_close=function(){return`</dd>
`};function WC(e,r){return++r>=e.length-2?r:e[r].type==="paragraph_open"&&e[r].tight&&e[r+1].type==="inline"&&e[r+1].content.length===0&&e[r+2].type==="paragraph_close"&&e[r+2].tight?WC(e,r+2):r}var qo=j.getBreak=function(r,t){return t=WC(r,t),t<r.length&&r[t].type==="list_item_close"?"":`
`};function Up(){this.rules=UC({},j),this.getBreak=j.getBreak}Up.prototype.renderInline=function(e,r,t){for(var n=this.rules,i=e.length,o=0,s="";i--;)s+=n[e[o].type](e,o++,r,t,this);return s};Up.prototype.render=function(e,r,t){for(var n=this.rules,i=e.length,o=-1,s="";++o<i;)e[o].type==="inline"?s+=this.renderInline(e[o].children,r,t):s+=n[e[o].type](e,o,r,t,this);return s};function yr(){this.__rules__=[],this.__cache__=null}yr.prototype.__find__=function(e){for(var r=this.__rules__.length,t=-1;r--;)if(this.__rules__[++t].name===e)return t;return-1};yr.prototype.__compile__=function(){var e=this,r=[""];e.__rules__.forEach(function(t){t.enabled&&t.alt.forEach(function(n){r.indexOf(n)<0&&r.push(n)})}),e.__cache__={},r.forEach(function(t){e.__cache__[t]=[],e.__rules__.forEach(function(n){n.enabled&&(t&&n.alt.indexOf(t)<0||e.__cache__[t].push(n.fn))})})};yr.prototype.at=function(e,r,t){var n=this.__find__(e),i=t||{};if(n===-1)throw new Error("Parser rule not found: "+e);this.__rules__[n].fn=r,this.__rules__[n].alt=i.alt||[],this.__cache__=null};yr.prototype.before=function(e,r,t,n){var i=this.__find__(e),o=n||{};if(i===-1)throw new Error("Parser rule not found: "+e);this.__rules__.splice(i,0,{name:r,enabled:!0,fn:t,alt:o.alt||[]}),this.__cache__=null};yr.prototype.after=function(e,r,t,n){var i=this.__find__(e),o=n||{};if(i===-1)throw new Error("Parser rule not found: "+e);this.__rules__.splice(i+1,0,{name:r,enabled:!0,fn:t,alt:o.alt||[]}),this.__cache__=null};yr.prototype.push=function(e,r,t){var n=t||{};this.__rules__.push({name:e,enabled:!0,fn:r,alt:n.alt||[]}),this.__cache__=null};yr.prototype.enable=function(e,r){e=Array.isArray(e)?e:[e],r&&this.__rules__.forEach(function(t){t.enabled=!1}),e.forEach(function(t){var n=this.__find__(t);if(n<0)throw new Error("Rules manager: invalid rule name "+t);this.__rules__[n].enabled=!0},this),this.__cache__=null};yr.prototype.disable=function(e){e=Array.isArray(e)?e:[e],e.forEach(function(r){var t=this.__find__(r);if(t<0)throw new Error("Rules manager: invalid rule name "+r);this.__rules__[t].enabled=!1},this),this.__cache__=null};yr.prototype.getRules=function(e){return this.__cache__===null&&this.__compile__(),this.__cache__[e]||[]};function OM(e){e.inlineMode?e.tokens.push({type:"inline",content:e.src.replace(/\n/g," ").trim(),level:0,lines:[0,1],children:[]}):e.block.parse(e.src,e.options,e.env,e.tokens)}function Qo(e,r,t,n,i){this.src=e,this.env=n,this.options=t,this.parser=r,this.tokens=i,this.pos=0,this.posMax=this.src.length,this.level=0,this.pending="",this.pendingLevel=0,this.cache=[],this.isInLabel=!1,this.linkLevel=0,this.linkContent="",this.labelUnmatchedScopes=0}Qo.prototype.pushPending=function(){this.tokens.push({type:"text",content:this.pending,level:this.pendingLevel}),this.pending=""};Qo.prototype.push=function(e){this.pending&&this.pushPending(),this.tokens.push(e),this.pendingLevel=this.level};Qo.prototype.cacheSet=function(e,r){for(var t=this.cache.length;t<=e;t++)this.cache.push(0);this.cache[e]=r};Qo.prototype.cacheGet=function(e){return e<this.cache.length?this.cache[e]:0};function ol(e,r){var t,n,i,o=-1,s=e.posMax,l=e.pos,u=e.isInLabel;if(e.isInLabel)return-1;if(e.labelUnmatchedScopes)return e.labelUnmatchedScopes--,-1;for(e.pos=r+1,e.isInLabel=!0,t=1;e.pos<s;){if(i=e.src.charCodeAt(e.pos),i===91)t++;else if(i===93&&(t--,t===0)){n=!0;break}e.parser.skipToken(e)}return n?(o=e.pos,e.labelUnmatchedScopes=0):e.labelUnmatchedScopes=t-1,e.pos=l,e.isInLabel=u,o}function NM(e,r,t,n){var i,o,s,l,u,d;if(e.charCodeAt(0)!==42||e.charCodeAt(1)!==91||e.indexOf("]:")===-1||(i=new Qo(e,r,t,n,[]),o=ol(i,1),o<0||e.charCodeAt(o+1)!==58))return-1;for(l=i.posMax,s=o+2;s<l&&i.src.charCodeAt(s)!==10;s++);return u=e.slice(2,o),d=e.slice(o+2,s).trim(),d.length===0?-1:(n.abbreviations||(n.abbreviations={}),typeof n.abbreviations[":"+u]>"u"&&(n.abbreviations[":"+u]=d),s)}function VM(e){var r=e.tokens,t,n,i,o;if(!e.inlineMode){for(t=1,n=r.length-1;t<n;t++)if(r[t-1].type==="paragraph_open"&&r[t].type==="inline"&&r[t+1].type==="paragraph_close"){for(i=r[t].content;i.length&&(o=NM(i,e.inline,e.options,e.env),!(o<0));)i=i.slice(o).trim();r[t].content=i,i.length||(r[t-1].tight=!0,r[t+1].tight=!0)}}}function Kp(e){var r=Wo(e);try{r=decodeURI(r)}catch{}return encodeURI(r)}function qC(e,r){var t,n,i,o=r,s=e.posMax;if(e.src.charCodeAt(r)===60){for(r++;r<s;){if(t=e.src.charCodeAt(r),t===10)return!1;if(t===62)return i=Kp(il(e.src.slice(o+1,r))),e.parser.validateLink(i)?(e.pos=r+1,e.linkContent=i,!0):!1;if(t===92&&r+1<s){r+=2;continue}r++}return!1}for(n=0;r<s&&(t=e.src.charCodeAt(r),!(t===32||t<32||t===127));){if(t===92&&r+1<s){r+=2;continue}if(t===40&&(n++,n>1)||t===41&&(n--,n<0))break;r++}return o===r||(i=il(e.src.slice(o,r)),!e.parser.validateLink(i))?!1:(e.linkContent=i,e.pos=r,!0)}function QC(e,r){var t,n=r,i=e.posMax,o=e.src.charCodeAt(r);if(o!==34&&o!==39&&o!==40)return!1;for(r++,o===40&&(o=41);r<i;){if(t=e.src.charCodeAt(r),t===o)return e.pos=r+1,e.linkContent=il(e.src.slice(n+1,r)),!0;if(t===92&&r+1<i){r+=2;continue}r++}return!1}function ZC(e){return e.trim().replace(/\s+/g," ").toUpperCase()}function zM(e,r,t,n){var i,o,s,l,u,d,h,f,g;if(e.charCodeAt(0)!==91||e.indexOf("]:")===-1||(i=new Qo(e,r,t,n,[]),o=ol(i,0),o<0||e.charCodeAt(o+1)!==58))return-1;for(l=i.posMax,s=o+2;s<l&&(u=i.src.charCodeAt(s),!(u!==32&&u!==10));s++);if(!qC(i,s))return-1;for(h=i.linkContent,s=i.pos,d=s,s=s+1;s<l&&(u=i.src.charCodeAt(s),!(u!==32&&u!==10));s++);for(s<l&&d!==s&&QC(i,s)?(f=i.linkContent,s=i.pos):(f="",s=d);s<l&&i.src.charCodeAt(s)===32;)s++;return s<l&&i.src.charCodeAt(s)!==10?-1:(g=ZC(e.slice(1,o)),typeof n.references[g]>"u"&&(n.references[g]={title:f,href:h}),s)}function jM(e){var r=e.tokens,t,n,i,o;if(e.env.references=e.env.references||{},!e.inlineMode){for(t=1,n=r.length-1;t<n;t++)if(r[t].type==="inline"&&r[t-1].type==="paragraph_open"&&r[t+1].type==="paragraph_close"){for(i=r[t].content;i.length&&(o=zM(i,e.inline,e.options,e.env),!(o<0));)i=i.slice(o).trim();r[t].content=i,i.length||(r[t-1].tight=!0,r[t+1].tight=!0)}}}function YM(e){var r=e.tokens,t,n,i;for(n=0,i=r.length;n<i;n++)t=r[n],t.type==="inline"&&e.inline.parse(t.content,e.options,e.env,t.children)}function KM(e){var r,t,n,i,o,s,l,u,d,h=0,f=!1,g={};if(e.env.footnotes&&(e.tokens=e.tokens.filter(function(b){return b.type==="footnote_reference_open"?(f=!0,u=[],d=b.label,!1):b.type==="footnote_reference_close"?(f=!1,g[":"+d]=u,!1):(f&&u.push(b),!f)}),!!e.env.footnotes.list)){for(s=e.env.footnotes.list,e.tokens.push({type:"footnote_block_open",level:h++}),r=0,t=s.length;r<t;r++){for(e.tokens.push({type:"footnote_open",id:r,level:h++}),s[r].tokens?(l=[],l.push({type:"paragraph_open",tight:!1,level:h++}),l.push({type:"inline",content:"",level:h,children:s[r].tokens}),l.push({type:"paragraph_close",tight:!1,level:--h})):s[r].label&&(l=g[":"+s[r].label]),e.tokens=e.tokens.concat(l),e.tokens[e.tokens.length-1].type==="paragraph_close"?o=e.tokens.pop():o=null,i=s[r].count>0?s[r].count:1,n=0;n<i;n++)e.tokens.push({type:"footnote_anchor",id:r,subId:n,level:h});o&&e.tokens.push(o),e.tokens.push({type:"footnote_close",level:--h})}e.tokens.push({type:"footnote_block_close",level:--h})}}var _C=` 
()[]'".,!?-`;function Op(e){return e.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1")}function UM(e){var r,t,n,i,o,s,l,u,d,h,f,g,b=e.tokens;if(e.env.abbreviations){for(e.env.abbrRegExp||(g="(^|["+_C.split("").map(Op).join("")+"])("+Object.keys(e.env.abbreviations).map(function(w){return w.substr(1)}).sort(function(w,v){return v.length-w.length}).map(Op).join("|")+")($|["+_C.split("").map(Op).join("")+"])",e.env.abbrRegExp=new RegExp(g,"g")),h=e.env.abbrRegExp,t=0,n=b.length;t<n;t++)if(b[t].type==="inline"){for(i=b[t].children,r=i.length-1;r>=0;r--)if(o=i[r],o.type==="text"){for(u=0,s=o.content,h.lastIndex=0,d=o.level,l=[];f=h.exec(s);)h.lastIndex>u&&l.push({type:"text",content:s.slice(u,f.index+f[1].length),level:d}),l.push({type:"abbr_open",title:e.env.abbreviations[":"+f[2]],level:d++}),l.push({type:"text",content:f[2],level:d}),l.push({type:"abbr_close",level:--d}),u=h.lastIndex-f[3].length;l.length&&(u<s.length&&l.push({type:"text",content:s.slice(u),level:d}),b[t].children=i=[].concat(i.slice(0,r),l,i.slice(r+1)))}}}}var GM=/\+-|\.\.|\?\?\?\?|!!!!|,,|--/,WM=/\((c|tm|r|p)\)/ig,qM={c:"\xA9",r:"\xAE",p:"\xA7",tm:"\u2122"};function QM(e){return e.indexOf("(")<0?e:e.replace(WM,function(r,t){return qM[t.toLowerCase()]})}function ZM(e){var r,t,n,i,o;if(e.options.typographer){for(o=e.tokens.length-1;o>=0;o--)if(e.tokens[o].type==="inline")for(i=e.tokens[o].children,r=i.length-1;r>=0;r--)t=i[r],t.type==="text"&&(n=t.content,n=QM(n),GM.test(n)&&(n=n.replace(/\+-/g,"\xB1").replace(/\.{2,}/g,"\u2026").replace(/([?!])…/g,"$1..").replace(/([?!]){4,}/g,"$1$1$1").replace(/,{2,}/g,",").replace(/(^|[^-])---([^-]|$)/mg,"$1\u2014$2").replace(/(^|\s)--(\s|$)/mg,"$1\u2013$2").replace(/(^|[^-\s])--([^-\s]|$)/mg,"$1\u2013$2")),t.content=n)}}var PM=/['"]/,BC=/['"]/g,JM=/[-\s()\[\]]/,OC="\u2019";function NC(e,r){return r<0||r>=e.length?!1:!JM.test(e[r])}function is(e,r,t){return e.substr(0,r)+t+e.substr(r+1)}function XM(e){var r,t,n,i,o,s,l,u,d,h,f,g,b,w,v,y,E;if(e.options.typographer){for(E=[],v=e.tokens.length-1;v>=0;v--)if(e.tokens[v].type==="inline"){for(y=e.tokens[v].children,E.length=0,r=0;r<y.length;r++)if(t=y[r],!(t.type!=="text"||PM.test(t.text))){for(l=y[r].level,b=E.length-1;b>=0&&!(E[b].level<=l);b--);E.length=b+1,n=t.content,o=0,s=n.length;e:for(;o<s&&(BC.lastIndex=o,i=BC.exec(n),!!i);){if(u=!NC(n,i.index-1),o=i.index+1,w=i[0]==="'",d=!NC(n,o),!d&&!u){w&&(t.content=is(t.content,i.index,OC));continue}if(f=!d,g=!u,g){for(b=E.length-1;b>=0&&(h=E[b],!(E[b].level<l));b--)if(h.single===w&&E[b].level===l){h=E[b],w?(y[h.token].content=is(y[h.token].content,h.pos,e.options.quotes[2]),t.content=is(t.content,i.index,e.options.quotes[3])):(y[h.token].content=is(y[h.token].content,h.pos,e.options.quotes[0]),t.content=is(t.content,i.index,e.options.quotes[1])),E.length=b;continue e}}f?E.push({token:r,pos:i.index,single:w,level:l}):g&&w&&(t.content=is(t.content,i.index,OC))}}}}}var Np=[["block",OM],["abbr",VM],["references",jM],["inline",YM],["footnote_tail",KM],["abbr2",UM],["replacements",ZM],["smartquotes",XM]];function PC(){this.options={},this.ruler=new yr;for(var e=0;e<Np.length;e++)this.ruler.push(Np[e][0],Np[e][1])}PC.prototype.process=function(e){var r,t,n;for(n=this.ruler.getRules(""),r=0,t=n.length;r<t;r++)n[r](e)};function Zo(e,r,t,n,i){var o,s,l,u,d,h,f;for(this.src=e,this.parser=r,this.options=t,this.env=n,this.tokens=i,this.bMarks=[],this.eMarks=[],this.tShift=[],this.blkIndent=0,this.line=0,this.lineMax=0,this.tight=!1,this.parentType="root",this.ddIndent=-1,this.level=0,this.result="",s=this.src,h=0,f=!1,l=u=h=0,d=s.length;u<d;u++){if(o=s.charCodeAt(u),!f)if(o===32){h++;continue}else f=!0;(o===10||u===d-1)&&(o!==10&&u++,this.bMarks.push(l),this.eMarks.push(u),this.tShift.push(h),f=!1,h=0,l=u+1)}this.bMarks.push(s.length),this.eMarks.push(s.length),this.tShift.push(0),this.lineMax=this.bMarks.length-1}Zo.prototype.isEmpty=function(r){return this.bMarks[r]+this.tShift[r]>=this.eMarks[r]};Zo.prototype.skipEmptyLines=function(r){for(var t=this.lineMax;r<t&&!(this.bMarks[r]+this.tShift[r]<this.eMarks[r]);r++);return r};Zo.prototype.skipSpaces=function(r){for(var t=this.src.length;r<t&&this.src.charCodeAt(r)===32;r++);return r};Zo.prototype.skipChars=function(r,t){for(var n=this.src.length;r<n&&this.src.charCodeAt(r)===t;r++);return r};Zo.prototype.skipCharsBack=function(r,t,n){if(r<=n)return r;for(;r>n;)if(t!==this.src.charCodeAt(--r))return r+1;return r};Zo.prototype.getLines=function(r,t,n,i){var o,s,l,u,d,h=r;if(r>=t)return"";if(h+1===t)return s=this.bMarks[h]+Math.min(this.tShift[h],n),l=i?this.eMarks[h]+1:this.eMarks[h],this.src.slice(s,l);for(u=new Array(t-r),o=0;h<t;h++,o++)d=this.tShift[h],d>n&&(d=n),d<0&&(d=0),s=this.bMarks[h]+d,h+1<t||i?l=this.eMarks[h]+1:l=this.eMarks[h],u[o]=this.src.slice(s,l);return u.join("")};function eT(e,r,t){var n,i;if(e.tShift[r]-e.blkIndent<4)return!1;for(i=n=r+1;n<t;){if(e.isEmpty(n)){n++;continue}if(e.tShift[n]-e.blkIndent>=4){n++,i=n;continue}break}return e.line=n,e.tokens.push({type:"code",content:e.getLines(r,i,4+e.blkIndent,!0),block:!0,lines:[r,e.line],level:e.level}),!0}function tT(e,r,t,n){var i,o,s,l,u,d=!1,h=e.bMarks[r]+e.tShift[r],f=e.eMarks[r];if(h+3>f||(i=e.src.charCodeAt(h),i!==126&&i!==96)||(u=h,h=e.skipChars(h,i),o=h-u,o<3)||(s=e.src.slice(h,f).trim(),s.indexOf("`")>=0))return!1;if(n)return!0;for(l=r;l++,!(l>=t||(h=u=e.bMarks[l]+e.tShift[l],f=e.eMarks[l],h<f&&e.tShift[l]<e.blkIndent));)if(e.src.charCodeAt(h)===i&&!(e.tShift[l]-e.blkIndent>=4)&&(h=e.skipChars(h,i),!(h-u<o)&&(h=e.skipSpaces(h),!(h<f)))){d=!0;break}return o=e.tShift[r],e.line=l+(d?1:0),e.tokens.push({type:"fence",params:s,content:e.getLines(r+1,l,o,!0),lines:[r,e.line],level:e.level}),!0}function rT(e,r,t,n){var i,o,s,l,u,d,h,f,g,b,w,v=e.bMarks[r]+e.tShift[r],y=e.eMarks[r];if(v>y||e.src.charCodeAt(v++)!==62||e.level>=e.options.maxNesting)return!1;if(n)return!0;for(e.src.charCodeAt(v)===32&&v++,u=e.blkIndent,e.blkIndent=0,l=[e.bMarks[r]],e.bMarks[r]=v,v=v<y?e.skipSpaces(v):v,o=v>=y,s=[e.tShift[r]],e.tShift[r]=v-e.bMarks[r],f=e.parser.ruler.getRules("blockquote"),i=r+1;i<t&&(v=e.bMarks[i]+e.tShift[i],y=e.eMarks[i],!(v>=y));i++){if(e.src.charCodeAt(v++)===62){e.src.charCodeAt(v)===32&&v++,l.push(e.bMarks[i]),e.bMarks[i]=v,v=v<y?e.skipSpaces(v):v,o=v>=y,s.push(e.tShift[i]),e.tShift[i]=v-e.bMarks[i];continue}if(o)break;for(w=!1,g=0,b=f.length;g<b;g++)if(f[g](e,i,t,!0)){w=!0;break}if(w)break;l.push(e.bMarks[i]),s.push(e.tShift[i]),e.tShift[i]=-1337}for(d=e.parentType,e.parentType="blockquote",e.tokens.push({type:"blockquote_open",lines:h=[r,0],level:e.level++}),e.parser.tokenize(e,r,i),e.tokens.push({type:"blockquote_close",level:--e.level}),e.parentType=d,h[1]=e.line,g=0;g<s.length;g++)e.bMarks[g+r]=l[g],e.tShift[g+r]=s[g];return e.blkIndent=u,!0}function nT(e,r,t,n){var i,o,s,l=e.bMarks[r],u=e.eMarks[r];if(l+=e.tShift[r],l>u||(i=e.src.charCodeAt(l++),i!==42&&i!==45&&i!==95))return!1;for(o=1;l<u;){if(s=e.src.charCodeAt(l++),s!==i&&s!==32)return!1;s===i&&o++}return o<3?!1:(n||(e.line=r+1,e.tokens.push({type:"hr",lines:[r,e.line],level:e.level})),!0)}function VC(e,r){var t,n,i;return n=e.bMarks[r]+e.tShift[r],i=e.eMarks[r],n>=i||(t=e.src.charCodeAt(n++),t!==42&&t!==45&&t!==43)||n<i&&e.src.charCodeAt(n)!==32?-1:n}function zC(e,r){var t,n=e.bMarks[r]+e.tShift[r],i=e.eMarks[r];if(n+1>=i||(t=e.src.charCodeAt(n++),t<48||t>57))return-1;for(;;){if(n>=i)return-1;if(t=e.src.charCodeAt(n++),!(t>=48&&t<=57)){if(t===41||t===46)break;return-1}}return n<i&&e.src.charCodeAt(n)!==32?-1:n}function iT(e,r){var t,n,i=e.level+2;for(t=r+2,n=e.tokens.length-2;t<n;t++)e.tokens[t].level===i&&e.tokens[t].type==="paragraph_open"&&(e.tokens[t+2].tight=!0,e.tokens[t].tight=!0,t+=2)}function oT(e,r,t,n){var i,o,s,l,u,d,h,f,g,b,w,v,y,E,C,S,M,_,D=!0,H,T,$,ne;if((f=zC(e,r))>=0)y=!0;else if((f=VC(e,r))>=0)y=!1;else return!1;if(e.level>=e.options.maxNesting)return!1;if(v=e.src.charCodeAt(f-1),n)return!0;for(C=e.tokens.length,y?(h=e.bMarks[r]+e.tShift[r],w=Number(e.src.substr(h,f-h-1)),e.tokens.push({type:"ordered_list_open",order:w,lines:M=[r,0],level:e.level++})):e.tokens.push({type:"bullet_list_open",lines:M=[r,0],level:e.level++}),i=r,S=!1,H=e.parser.ruler.getRules("list");i<t&&(E=e.skipSpaces(f),g=e.eMarks[i],E>=g?b=1:b=E-f,b>4&&(b=1),b<1&&(b=1),o=f-e.bMarks[i]+b,e.tokens.push({type:"list_item_open",lines:_=[r,0],level:e.level++}),l=e.blkIndent,u=e.tight,s=e.tShift[r],d=e.parentType,e.tShift[r]=E-e.bMarks[r],e.blkIndent=o,e.tight=!0,e.parentType="list",e.parser.tokenize(e,r,t,!0),(!e.tight||S)&&(D=!1),S=e.line-r>1&&e.isEmpty(e.line-1),e.blkIndent=l,e.tShift[r]=s,e.tight=u,e.parentType=d,e.tokens.push({type:"list_item_close",level:--e.level}),i=r=e.line,_[1]=i,E=e.bMarks[r],!(i>=t||e.isEmpty(i)||e.tShift[i]<e.blkIndent));){for(ne=!1,T=0,$=H.length;T<$;T++)if(H[T](e,i,t,!0)){ne=!0;break}if(ne)break;if(y){if(f=zC(e,i),f<0)break}else if(f=VC(e,i),f<0)break;if(v!==e.src.charCodeAt(f-1))break}return e.tokens.push({type:y?"ordered_list_close":"bullet_list_close",level:--e.level}),M[1]=i,e.line=i,D&&iT(e,C),!0}function aT(e,r,t,n){var i,o,s,l,u,d=e.bMarks[r]+e.tShift[r],h=e.eMarks[r];if(d+4>h||e.src.charCodeAt(d)!==91||e.src.charCodeAt(d+1)!==94||e.level>=e.options.maxNesting)return!1;for(l=d+2;l<h;l++){if(e.src.charCodeAt(l)===32)return!1;if(e.src.charCodeAt(l)===93)break}return l===d+2||l+1>=h||e.src.charCodeAt(++l)!==58?!1:(n||(l++,e.env.footnotes||(e.env.footnotes={}),e.env.footnotes.refs||(e.env.footnotes.refs={}),u=e.src.slice(d+2,l-2),e.env.footnotes.refs[":"+u]=-1,e.tokens.push({type:"footnote_reference_open",label:u,level:e.level++}),i=e.bMarks[r],o=e.tShift[r],s=e.parentType,e.tShift[r]=e.skipSpaces(l)-l,e.bMarks[r]=l,e.blkIndent+=4,e.parentType="footnote",e.tShift[r]<e.blkIndent&&(e.tShift[r]+=e.blkIndent,e.bMarks[r]-=e.blkIndent),e.parser.tokenize(e,r,t,!0),e.parentType=s,e.blkIndent-=4,e.tShift[r]=o,e.bMarks[r]=i,e.tokens.push({type:"footnote_reference_close",level:--e.level})),!0)}function sT(e,r,t,n){var i,o,s,l=e.bMarks[r]+e.tShift[r],u=e.eMarks[r];if(l>=u||(i=e.src.charCodeAt(l),i!==35||l>=u))return!1;for(o=1,i=e.src.charCodeAt(++l);i===35&&l<u&&o<=6;)o++,i=e.src.charCodeAt(++l);return o>6||l<u&&i!==32?!1:(n||(u=e.skipCharsBack(u,32,l),s=e.skipCharsBack(u,35,l),s>l&&e.src.charCodeAt(s-1)===32&&(u=s),e.line=r+1,e.tokens.push({type:"heading_open",hLevel:o,lines:[r,e.line],level:e.level}),l<u&&e.tokens.push({type:"inline",content:e.src.slice(l,u).trim(),level:e.level+1,lines:[r,e.line],children:[]}),e.tokens.push({type:"heading_close",hLevel:o,level:e.level})),!0)}function lT(e,r,t){var n,i,o,s=r+1;return s>=t||e.tShift[s]<e.blkIndent||e.tShift[s]-e.blkIndent>3||(i=e.bMarks[s]+e.tShift[s],o=e.eMarks[s],i>=o)||(n=e.src.charCodeAt(i),n!==45&&n!==61)||(i=e.skipChars(i,n),i=e.skipSpaces(i),i<o)?!1:(i=e.bMarks[r]+e.tShift[r],e.line=s+1,e.tokens.push({type:"heading_open",hLevel:n===61?1:2,lines:[r,e.line],level:e.level}),e.tokens.push({type:"inline",content:e.src.slice(i,e.eMarks[r]).trim(),level:e.level+1,lines:[r,e.line-1],children:[]}),e.tokens.push({type:"heading_close",hLevel:n===61?1:2,level:e.level}),!0)}var JC={};["article","aside","button","blockquote","body","canvas","caption","col","colgroup","dd","div","dl","dt","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","iframe","li","map","object","ol","output","p","pre","progress","script","section","style","table","tbody","td","textarea","tfoot","th","tr","thead","ul","video"].forEach(function(e){JC[e]=!0});var uT=/^<([a-zA-Z]{1,15})[\s\/>]/,cT=/^<\/([a-zA-Z]{1,15})[\s>]/;function pT(e){var r=e|32;return r>=97&&r<=122}function dT(e,r,t,n){var i,o,s,l=e.bMarks[r],u=e.eMarks[r],d=e.tShift[r];if(l+=d,!e.options.html||d>3||l+2>=u||e.src.charCodeAt(l)!==60)return!1;if(i=e.src.charCodeAt(l+1),i===33||i===63){if(n)return!0}else if(i===47||pT(i)){if(i===47){if(o=e.src.slice(l,u).match(cT),!o)return!1}else if(o=e.src.slice(l,u).match(uT),!o)return!1;if(JC[o[1].toLowerCase()]!==!0)return!1;if(n)return!0}else return!1;for(s=r+1;s<e.lineMax&&!e.isEmpty(s);)s++;return e.line=s,e.tokens.push({type:"htmlblock",level:e.level,lines:[r,e.line],content:e.getLines(r,s,0,!0)}),!0}function Vp(e,r){var t=e.bMarks[r]+e.blkIndent,n=e.eMarks[r];return e.src.substr(t,n-t)}function hT(e,r,t,n){var i,o,s,l,u,d,h,f,g,b,w;if(r+2>t||(u=r+1,e.tShift[u]<e.blkIndent)||(s=e.bMarks[u]+e.tShift[u],s>=e.eMarks[u])||(i=e.src.charCodeAt(s),i!==124&&i!==45&&i!==58)||(o=Vp(e,r+1),!/^[-:| ]+$/.test(o))||(d=o.split("|"),d<=2))return!1;for(f=[],l=0;l<d.length;l++){if(g=d[l].trim(),!g){if(l===0||l===d.length-1)continue;return!1}if(!/^:?-+:?$/.test(g))return!1;g.charCodeAt(g.length-1)===58?f.push(g.charCodeAt(0)===58?"center":"right"):g.charCodeAt(0)===58?f.push("left"):f.push("")}if(o=Vp(e,r).trim(),o.indexOf("|")===-1||(d=o.replace(/^\||\|$/g,"").split("|"),f.length!==d.length))return!1;if(n)return!0;for(e.tokens.push({type:"table_open",lines:b=[r,0],level:e.level++}),e.tokens.push({type:"thead_open",lines:[r,r+1],level:e.level++}),e.tokens.push({type:"tr_open",lines:[r,r+1],level:e.level++}),l=0;l<d.length;l++)e.tokens.push({type:"th_open",align:f[l],lines:[r,r+1],level:e.level++}),e.tokens.push({type:"inline",content:d[l].trim(),lines:[r,r+1],level:e.level,children:[]}),e.tokens.push({type:"th_close",level:--e.level});for(e.tokens.push({type:"tr_close",level:--e.level}),e.tokens.push({type:"thead_close",level:--e.level}),e.tokens.push({type:"tbody_open",lines:w=[r+2,0],level:e.level++}),u=r+2;u<t&&!(e.tShift[u]<e.blkIndent||(o=Vp(e,u).trim(),o.indexOf("|")===-1));u++){for(d=o.replace(/^\||\|$/g,"").split("|"),e.tokens.push({type:"tr_open",level:e.level++}),l=0;l<d.length;l++)e.tokens.push({type:"td_open",align:f[l],level:e.level++}),h=d[l].substring(d[l].charCodeAt(0)===124?1:0,d[l].charCodeAt(d[l].length-1)===124?d[l].length-1:d[l].length).trim(),e.tokens.push({type:"inline",content:h,level:e.level,children:[]}),e.tokens.push({type:"td_close",level:--e.level});e.tokens.push({type:"tr_close",level:--e.level})}return e.tokens.push({type:"tbody_close",level:--e.level}),e.tokens.push({type:"table_close",level:--e.level}),b[1]=w[1]=u,e.line=u,!0}function Au(e,r){var t,n,i=e.bMarks[r]+e.tShift[r],o=e.eMarks[r];return i>=o||(n=e.src.charCodeAt(i++),n!==126&&n!==58)||(t=e.skipSpaces(i),i===t)||t>=o?-1:t}function fT(e,r){var t,n,i=e.level+2;for(t=r+2,n=e.tokens.length-2;t<n;t++)e.tokens[t].level===i&&e.tokens[t].type==="paragraph_open"&&(e.tokens[t+2].tight=!0,e.tokens[t].tight=!0,t+=2)}function mT(e,r,t,n){var i,o,s,l,u,d,h,f,g,b,w,v,y,E;if(n)return e.ddIndent<0?!1:Au(e,r)>=0;if(h=r+1,e.isEmpty(h)&&++h>t||e.tShift[h]<e.blkIndent||(i=Au(e,h),i<0)||e.level>=e.options.maxNesting)return!1;d=e.tokens.length,e.tokens.push({type:"dl_open",lines:u=[r,0],level:e.level++}),s=r,o=h;e:for(;;){for(E=!0,y=!1,e.tokens.push({type:"dt_open",lines:[s,s],level:e.level++}),e.tokens.push({type:"inline",content:e.getLines(s,s+1,e.blkIndent,!1).trim(),level:e.level+1,lines:[s,s],children:[]}),e.tokens.push({type:"dt_close",level:--e.level});;){if(e.tokens.push({type:"dd_open",lines:l=[h,0],level:e.level++}),v=e.tight,g=e.ddIndent,f=e.blkIndent,w=e.tShift[o],b=e.parentType,e.blkIndent=e.ddIndent=e.tShift[o]+2,e.tShift[o]=i-e.bMarks[o],e.tight=!0,e.parentType="deflist",e.parser.tokenize(e,o,t,!0),(!e.tight||y)&&(E=!1),y=e.line-o>1&&e.isEmpty(e.line-1),e.tShift[o]=w,e.tight=v,e.parentType=b,e.blkIndent=f,e.ddIndent=g,e.tokens.push({type:"dd_close",level:--e.level}),l[1]=h=e.line,h>=t||e.tShift[h]<e.blkIndent)break e;if(i=Au(e,h),i<0)break;o=h}if(h>=t||(s=h,e.isEmpty(s))||e.tShift[s]<e.blkIndent||(o=s+1,o>=t)||(e.isEmpty(o)&&o++,o>=t)||e.tShift[o]<e.blkIndent||(i=Au(e,o),i<0))break}return e.tokens.push({type:"dl_close",level:--e.level}),u[1]=h,e.line=h,E&&fT(e,d),!0}function gT(e,r){var t,n,i,o,s,l=r+1,u;if(t=e.lineMax,l<t&&!e.isEmpty(l)){for(u=e.parser.ruler.getRules("paragraph");l<t&&!e.isEmpty(l);l++)if(!(e.tShift[l]-e.blkIndent>3)){for(i=!1,o=0,s=u.length;o<s;o++)if(u[o](e,l,t,!0)){i=!0;break}if(i)break}}return n=e.getLines(r,l,e.blkIndent,!1).trim(),e.line=l,n.length&&(e.tokens.push({type:"paragraph_open",tight:!1,lines:[r,e.line],level:e.level}),e.tokens.push({type:"inline",content:n,level:e.level+1,lines:[r,e.line],children:[]}),e.tokens.push({type:"paragraph_close",tight:!1,level:e.level})),!0}var ku=[["code",eT],["fences",tT,["paragraph","blockquote","list"]],["blockquote",rT,["paragraph","blockquote","list"]],["hr",nT,["paragraph","blockquote","list"]],["list",oT,["paragraph","blockquote"]],["footnote",aT,["paragraph"]],["heading",sT,["paragraph","blockquote"]],["lheading",lT],["htmlblock",dT,["paragraph","blockquote"]],["table",hT,["paragraph"]],["deflist",mT,["paragraph"]],["paragraph",gT]];function Gp(){this.ruler=new yr;for(var e=0;e<ku.length;e++)this.ruler.push(ku[e][0],ku[e][1],{alt:(ku[e][2]||[]).slice()})}Gp.prototype.tokenize=function(e,r,t){for(var n=this.ruler.getRules(""),i=n.length,o=r,s=!1,l,u;o<t&&(e.line=o=e.skipEmptyLines(o),!(o>=t||e.tShift[o]<e.blkIndent));){for(u=0;u<i&&(l=n[u](e,o,t,!1),!l);u++);if(e.tight=!s,e.isEmpty(e.line-1)&&(s=!0),o=e.line,o<t&&e.isEmpty(o)){if(s=!0,o++,o<t&&e.parentType==="list"&&e.isEmpty(o))break;e.line=o}}};var bT=/[\n\t]/g,vT=/\r[\n\u0085]|[\u2424\u2028\u0085]/g,xT=/\u00a0/g;Gp.prototype.parse=function(e,r,t,n){var i,o=0,s=0;if(!e)return[];e=e.replace(xT," "),e=e.replace(vT,`
`),e.indexOf("	")>=0&&(e=e.replace(bT,function(l,u){var d;return e.charCodeAt(u)===10?(o=u+1,s=0,l):(d="    ".slice((u-o-s)%4),s=u-o+1,d)})),i=new Zo(e,this,r,t,n),this.tokenize(i,i.line,i.lineMax)};function yT(e){switch(e){case 10:case 92:case 96:case 42:case 95:case 94:case 91:case 93:case 33:case 38:case 60:case 62:case 123:case 125:case 36:case 37:case 64:case 126:case 43:case 61:case 58:return!0;default:return!1}}function ET(e,r){for(var t=e.pos;t<e.posMax&&!yT(e.src.charCodeAt(t));)t++;return t===e.pos?!1:(r||(e.pending+=e.src.slice(e.pos,t)),e.pos=t,!0)}function wT(e,r){var t,n,i=e.pos;if(e.src.charCodeAt(i)!==10)return!1;if(t=e.pending.length-1,n=e.posMax,!r)if(t>=0&&e.pending.charCodeAt(t)===32)if(t>=1&&e.pending.charCodeAt(t-1)===32){for(var o=t-2;o>=0;o--)if(e.pending.charCodeAt(o)!==32){e.pending=e.pending.substring(0,o+1);break}e.push({type:"hardbreak",level:e.level})}else e.pending=e.pending.slice(0,-1),e.push({type:"softbreak",level:e.level});else e.push({type:"softbreak",level:e.level});for(i++;i<n&&e.src.charCodeAt(i)===32;)i++;return e.pos=i,!0}var Wp=[];for(zp=0;zp<256;zp++)Wp.push(0);var zp;"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(e){Wp[e.charCodeAt(0)]=1});function CT(e,r){var t,n=e.pos,i=e.posMax;if(e.src.charCodeAt(n)!==92)return!1;if(n++,n<i){if(t=e.src.charCodeAt(n),t<256&&Wp[t]!==0)return r||(e.pending+=e.src[n]),e.pos+=2,!0;if(t===10){for(r||e.push({type:"hardbreak",level:e.level}),n++;n<i&&e.src.charCodeAt(n)===32;)n++;return e.pos=n,!0}}return r||(e.pending+="\\"),e.pos++,!0}function AT(e,r){var t,n,i,o,s,l=e.pos,u=e.src.charCodeAt(l);if(u!==96)return!1;for(t=l,l++,n=e.posMax;l<n&&e.src.charCodeAt(l)===96;)l++;for(i=e.src.slice(t,l),o=s=l;(o=e.src.indexOf("`",s))!==-1;){for(s=o+1;s<n&&e.src.charCodeAt(s)===96;)s++;if(s-o===i.length)return r||e.push({type:"code",content:e.src.slice(l,o).replace(/[ \n]+/g," ").trim(),block:!1,level:e.level}),e.pos=s,!0}return r||(e.pending+=i),e.pos+=i.length,!0}function kT(e,r){var t,n,i,o=e.posMax,s=e.pos,l,u;if(e.src.charCodeAt(s)!==126||r||s+4>=o||e.src.charCodeAt(s+1)!==126||e.level>=e.options.maxNesting||(l=s>0?e.src.charCodeAt(s-1):-1,u=e.src.charCodeAt(s+2),l===126)||u===126||u===32||u===10)return!1;for(n=s+2;n<o&&e.src.charCodeAt(n)===126;)n++;if(n>s+3)return e.pos+=n-s,r||(e.pending+=e.src.slice(s,n)),!0;for(e.pos=s+2,i=1;e.pos+1<o;){if(e.src.charCodeAt(e.pos)===126&&e.src.charCodeAt(e.pos+1)===126&&(l=e.src.charCodeAt(e.pos-1),u=e.pos+2<o?e.src.charCodeAt(e.pos+2):-1,u!==126&&l!==126&&(l!==32&&l!==10?i--:u!==32&&u!==10&&i++,i<=0))){t=!0;break}e.parser.skipToken(e)}return t?(e.posMax=e.pos,e.pos=s+2,r||(e.push({type:"del_open",level:e.level++}),e.parser.tokenize(e),e.push({type:"del_close",level:--e.level})),e.pos=e.posMax+2,e.posMax=o,!0):(e.pos=s,!1)}function LT(e,r){var t,n,i,o=e.posMax,s=e.pos,l,u;if(e.src.charCodeAt(s)!==43||r||s+4>=o||e.src.charCodeAt(s+1)!==43||e.level>=e.options.maxNesting||(l=s>0?e.src.charCodeAt(s-1):-1,u=e.src.charCodeAt(s+2),l===43)||u===43||u===32||u===10)return!1;for(n=s+2;n<o&&e.src.charCodeAt(n)===43;)n++;if(n!==s+2)return e.pos+=n-s,r||(e.pending+=e.src.slice(s,n)),!0;for(e.pos=s+2,i=1;e.pos+1<o;){if(e.src.charCodeAt(e.pos)===43&&e.src.charCodeAt(e.pos+1)===43&&(l=e.src.charCodeAt(e.pos-1),u=e.pos+2<o?e.src.charCodeAt(e.pos+2):-1,u!==43&&l!==43&&(l!==32&&l!==10?i--:u!==32&&u!==10&&i++,i<=0))){t=!0;break}e.parser.skipToken(e)}return t?(e.posMax=e.pos,e.pos=s+2,r||(e.push({type:"ins_open",level:e.level++}),e.parser.tokenize(e),e.push({type:"ins_close",level:--e.level})),e.pos=e.posMax+2,e.posMax=o,!0):(e.pos=s,!1)}function FT(e,r){var t,n,i,o=e.posMax,s=e.pos,l,u;if(e.src.charCodeAt(s)!==61||r||s+4>=o||e.src.charCodeAt(s+1)!==61||e.level>=e.options.maxNesting||(l=s>0?e.src.charCodeAt(s-1):-1,u=e.src.charCodeAt(s+2),l===61)||u===61||u===32||u===10)return!1;for(n=s+2;n<o&&e.src.charCodeAt(n)===61;)n++;if(n!==s+2)return e.pos+=n-s,r||(e.pending+=e.src.slice(s,n)),!0;for(e.pos=s+2,i=1;e.pos+1<o;){if(e.src.charCodeAt(e.pos)===61&&e.src.charCodeAt(e.pos+1)===61&&(l=e.src.charCodeAt(e.pos-1),u=e.pos+2<o?e.src.charCodeAt(e.pos+2):-1,u!==61&&l!==61&&(l!==32&&l!==10?i--:u!==32&&u!==10&&i++,i<=0))){t=!0;break}e.parser.skipToken(e)}return t?(e.posMax=e.pos,e.pos=s+2,r||(e.push({type:"mark_open",level:e.level++}),e.parser.tokenize(e),e.push({type:"mark_close",level:--e.level})),e.pos=e.posMax+2,e.posMax=o,!0):(e.pos=s,!1)}function jC(e){return e>=48&&e<=57||e>=65&&e<=90||e>=97&&e<=122}function YC(e,r){var t=r,n,i,o,s=!0,l=!0,u=e.posMax,d=e.src.charCodeAt(r);for(n=r>0?e.src.charCodeAt(r-1):-1;t<u&&e.src.charCodeAt(t)===d;)t++;return t>=u&&(s=!1),o=t-r,o>=4?s=l=!1:(i=t<u?e.src.charCodeAt(t):-1,(i===32||i===10)&&(s=!1),(n===32||n===10)&&(l=!1),d===95&&(jC(n)&&(s=!1),jC(i)&&(l=!1))),{can_open:s,can_close:l,delims:o}}function ST(e,r){var t,n,i,o,s,l,u,d=e.posMax,h=e.pos,f=e.src.charCodeAt(h);if(f!==95&&f!==42||r)return!1;if(u=YC(e,h),t=u.delims,!u.can_open)return e.pos+=t,r||(e.pending+=e.src.slice(h,e.pos)),!0;if(e.level>=e.options.maxNesting)return!1;for(e.pos=h+t,l=[t];e.pos<d;){if(e.src.charCodeAt(e.pos)===f){if(u=YC(e,e.pos),n=u.delims,u.can_close){for(o=l.pop(),s=n;o!==s;){if(s<o){l.push(o-s);break}if(s-=o,l.length===0)break;e.pos+=o,o=l.pop()}if(l.length===0){t=o,i=!0;break}e.pos+=n;continue}u.can_open&&l.push(n),e.pos+=n;continue}e.parser.skipToken(e)}return i?(e.posMax=e.pos,e.pos=h+t,r||((t===2||t===3)&&e.push({type:"strong_open",level:e.level++}),(t===1||t===3)&&e.push({type:"em_open",level:e.level++}),e.parser.tokenize(e),(t===1||t===3)&&e.push({type:"em_close",level:--e.level}),(t===2||t===3)&&e.push({type:"strong_close",level:--e.level})),e.pos=e.posMax+t,e.posMax=d,!0):(e.pos=h,!1)}var MT=/\\([ \\!"#$%&'()*+,.\/:;<=>?@[\]^_`{|}~-])/g;function TT(e,r){var t,n,i=e.posMax,o=e.pos;if(e.src.charCodeAt(o)!==126||r||o+2>=i||e.level>=e.options.maxNesting)return!1;for(e.pos=o+1;e.pos<i;){if(e.src.charCodeAt(e.pos)===126){t=!0;break}e.parser.skipToken(e)}return!t||o+1===e.pos||(n=e.src.slice(o+1,e.pos),n.match(/(^|[^\\])(\\\\)*\s/))?(e.pos=o,!1):(e.posMax=e.pos,e.pos=o+1,r||e.push({type:"sub",level:e.level,content:n.replace(MT,"$1")}),e.pos=e.posMax+1,e.posMax=i,!0)}var DT=/\\([ \\!"#$%&'()*+,.\/:;<=>?@[\]^_`{|}~-])/g;function $T(e,r){var t,n,i=e.posMax,o=e.pos;if(e.src.charCodeAt(o)!==94||r||o+2>=i||e.level>=e.options.maxNesting)return!1;for(e.pos=o+1;e.pos<i;){if(e.src.charCodeAt(e.pos)===94){t=!0;break}e.parser.skipToken(e)}return!t||o+1===e.pos||(n=e.src.slice(o+1,e.pos),n.match(/(^|[^\\])(\\\\)*\s/))?(e.pos=o,!1):(e.posMax=e.pos,e.pos=o+1,r||e.push({type:"sup",level:e.level,content:n.replace(DT,"$1")}),e.pos=e.posMax+1,e.posMax=i,!0)}function HT(e,r){var t,n,i,o,s,l,u,d,h=!1,f=e.pos,g=e.posMax,b=e.pos,w=e.src.charCodeAt(b);if(w===33&&(h=!0,w=e.src.charCodeAt(++b)),w!==91||e.level>=e.options.maxNesting||(t=b+1,n=ol(e,b),n<0))return!1;if(l=n+1,l<g&&e.src.charCodeAt(l)===40){for(l++;l<g&&(d=e.src.charCodeAt(l),!(d!==32&&d!==10));l++);if(l>=g)return!1;for(b=l,qC(e,l)?(o=e.linkContent,l=e.pos):o="",b=l;l<g&&(d=e.src.charCodeAt(l),!(d!==32&&d!==10));l++);if(l<g&&b!==l&&QC(e,l))for(s=e.linkContent,l=e.pos;l<g&&(d=e.src.charCodeAt(l),!(d!==32&&d!==10));l++);else s="";if(l>=g||e.src.charCodeAt(l)!==41)return e.pos=f,!1;l++}else{if(e.linkLevel>0)return!1;for(;l<g&&(d=e.src.charCodeAt(l),!(d!==32&&d!==10));l++);if(l<g&&e.src.charCodeAt(l)===91&&(b=l+1,l=ol(e,l),l>=0?i=e.src.slice(b,l++):l=b-1),i||(typeof i>"u"&&(l=n+1),i=e.src.slice(t,n)),u=e.env.references[ZC(i)],!u)return e.pos=f,!1;o=u.href,s=u.title}return r||(e.pos=t,e.posMax=n,h?e.push({type:"image",src:o,title:s,alt:e.src.substr(t,n-t),level:e.level}):(e.push({type:"link_open",href:o,title:s,level:e.level++}),e.linkLevel++,e.parser.tokenize(e),e.linkLevel--,e.push({type:"link_close",level:--e.level}))),e.pos=l,e.posMax=g,!0}function IT(e,r){var t,n,i,o,s=e.posMax,l=e.pos;return l+2>=s||e.src.charCodeAt(l)!==94||e.src.charCodeAt(l+1)!==91||e.level>=e.options.maxNesting||(t=l+2,n=ol(e,l+1),n<0)?!1:(r||(e.env.footnotes||(e.env.footnotes={}),e.env.footnotes.list||(e.env.footnotes.list=[]),i=e.env.footnotes.list.length,e.pos=t,e.posMax=n,e.push({type:"footnote_ref",id:i,level:e.level}),e.linkLevel++,o=e.tokens.length,e.parser.tokenize(e),e.env.footnotes.list[i]={tokens:e.tokens.splice(o)},e.linkLevel--),e.pos=n+1,e.posMax=s,!0)}function RT(e,r){var t,n,i,o,s=e.posMax,l=e.pos;if(l+3>s||!e.env.footnotes||!e.env.footnotes.refs||e.src.charCodeAt(l)!==91||e.src.charCodeAt(l+1)!==94||e.level>=e.options.maxNesting)return!1;for(n=l+2;n<s;n++){if(e.src.charCodeAt(n)===32||e.src.charCodeAt(n)===10)return!1;if(e.src.charCodeAt(n)===93)break}return n===l+2||n>=s||(n++,t=e.src.slice(l+2,n-1),typeof e.env.footnotes.refs[":"+t]>"u")?!1:(r||(e.env.footnotes.list||(e.env.footnotes.list=[]),e.env.footnotes.refs[":"+t]<0?(i=e.env.footnotes.list.length,e.env.footnotes.list[i]={label:t,count:0},e.env.footnotes.refs[":"+t]=i):i=e.env.footnotes.refs[":"+t],o=e.env.footnotes.list[i].count,e.env.footnotes.list[i].count++,e.push({type:"footnote_ref",id:i,subId:o,level:e.level})),e.pos=n,e.posMax=s,!0)}var _T=["coap","doi","javascript","aaa","aaas","about","acap","cap","cid","crid","data","dav","dict","dns","file","ftp","geo","go","gopher","h323","http","https","iax","icap","im","imap","info","ipp","iris","iris.beep","iris.xpc","iris.xpcs","iris.lwz","ldap","mailto","mid","msrp","msrps","mtqp","mupdate","news","nfs","ni","nih","nntp","opaquelocktoken","pop","pres","rtsp","service","session","shttp","sieve","sip","sips","sms","snmp","soap.beep","soap.beeps","tag","tel","telnet","tftp","thismessage","tn3270","tip","tv","urn","vemmi","ws","wss","xcon","xcon-userid","xmlrpc.beep","xmlrpc.beeps","xmpp","z39.50r","z39.50s","adiumxtra","afp","afs","aim","apt","attachment","aw","beshare","bitcoin","bolo","callto","chrome","chrome-extension","com-eventbrite-attendee","content","cvs","dlna-playsingle","dlna-playcontainer","dtn","dvb","ed2k","facetime","feed","finger","fish","gg","git","gizmoproject","gtalk","hcp","icon","ipn","irc","irc6","ircs","itms","jar","jms","keyparc","lastfm","ldaps","magnet","maps","market","message","mms","ms-help","msnim","mumble","mvn","notes","oid","palm","paparazzi","platform","proxy","psyc","query","res","resource","rmi","rsync","rtmp","secondlife","sftp","sgn","skype","smb","soldat","spotify","ssh","steam","svn","teamspeak","things","udp","unreal","ut2004","ventrilo","view-source","webcal","wtai","wyciwyg","xfire","xri","ymsgr"],BT=/^<([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)>/,OT=/^<([a-zA-Z.\-]{1,25}):([^<>\x00-\x20]*)>/;function NT(e,r){var t,n,i,o,s,l=e.pos;return e.src.charCodeAt(l)!==60||(t=e.src.slice(l),t.indexOf(">")<0)?!1:(n=t.match(OT),n?_T.indexOf(n[1].toLowerCase())<0||(o=n[0].slice(1,-1),s=Kp(o),!e.parser.validateLink(o))?!1:(r||(e.push({type:"link_open",href:s,level:e.level}),e.push({type:"text",content:o,level:e.level+1}),e.push({type:"link_close",level:e.level})),e.pos+=n[0].length,!0):(i=t.match(BT),i?(o=i[0].slice(1,-1),s=Kp("mailto:"+o),e.parser.validateLink(s)?(r||(e.push({type:"link_open",href:s,level:e.level}),e.push({type:"text",content:o,level:e.level+1}),e.push({type:"link_close",level:e.level})),e.pos+=i[0].length,!0):!1):!1))}function Lu(e,r){return e=e.source,r=r||"",function t(n,i){return n?(i=i.source||i,e=e.replace(n,i),t):new RegExp(e,r)}}var VT=/[a-zA-Z_:][a-zA-Z0-9:._-]*/,zT=/[^"'=<>`\x00-\x20]+/,jT=/'[^']*'/,YT=/"[^"]*"/,KT=Lu(/(?:unquoted|single_quoted|double_quoted)/)("unquoted",zT)("single_quoted",jT)("double_quoted",YT)(),UT=Lu(/(?:\s+attr_name(?:\s*=\s*attr_value)?)/)("attr_name",VT)("attr_value",KT)(),GT=Lu(/<[A-Za-z][A-Za-z0-9]*attribute*\s*\/?>/)("attribute",UT)(),WT=/<\/[A-Za-z][A-Za-z0-9]*\s*>/,qT=/<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->/,QT=/<[?].*?[?]>/,ZT=/<![A-Z]+\s+[^>]*>/,PT=/<!\[CDATA\[[\s\S]*?\]\]>/,JT=Lu(/^(?:open_tag|close_tag|comment|processing|declaration|cdata)/)("open_tag",GT)("close_tag",WT)("comment",qT)("processing",QT)("declaration",ZT)("cdata",PT)();function XT(e){var r=e|32;return r>=97&&r<=122}function eD(e,r){var t,n,i,o=e.pos;return!e.options.html||(i=e.posMax,e.src.charCodeAt(o)!==60||o+2>=i)||(t=e.src.charCodeAt(o+1),t!==33&&t!==63&&t!==47&&!XT(t))||(n=e.src.slice(o).match(JT),!n)?!1:(r||e.push({type:"htmltag",content:e.src.slice(o,o+n[0].length),level:e.level}),e.pos+=n[0].length,!0)}var tD=/^&#((?:x[a-f0-9]{1,8}|[0-9]{1,8}));/i,rD=/^&([a-z][a-z0-9]{1,31});/i;function nD(e,r){var t,n,i,o=e.pos,s=e.posMax;if(e.src.charCodeAt(o)!==38)return!1;if(o+1<s){if(t=e.src.charCodeAt(o+1),t===35){if(i=e.src.slice(o).match(tD),i)return r||(n=i[1][0].toLowerCase()==="x"?parseInt(i[1].slice(1),16):parseInt(i[1],10),e.pending+=GC(n)?Yp(n):Yp(65533)),e.pos+=i[0].length,!0}else if(i=e.src.slice(o).match(rD),i){var l=KC(i[1]);if(i[1]!==l)return r||(e.pending+=l),e.pos+=i[0].length,!0}}return r||(e.pending+="&"),e.pos++,!0}var jp=[["text",ET],["newline",wT],["escape",CT],["backticks",AT],["del",kT],["ins",LT],["mark",FT],["emphasis",ST],["sub",TT],["sup",$T],["links",HT],["footnote_inline",IT],["footnote_ref",RT],["autolink",NT],["htmltag",eD],["entity",nD]];function Fu(){this.ruler=new yr;for(var e=0;e<jp.length;e++)this.ruler.push(jp[e][0],jp[e][1]);this.validateLink=iD}Fu.prototype.skipToken=function(e){var r=this.ruler.getRules(""),t=r.length,n=e.pos,i,o;if((o=e.cacheGet(n))>0){e.pos=o;return}for(i=0;i<t;i++)if(r[i](e,!0)){e.cacheSet(n,e.pos);return}e.pos++,e.cacheSet(n,e.pos)};Fu.prototype.tokenize=function(e){for(var r=this.ruler.getRules(""),t=r.length,n=e.posMax,i,o;e.pos<n;){for(o=0;o<t&&(i=r[o](e,!1),!i);o++);if(i){if(e.pos>=n)break;continue}e.pending+=e.src[e.pos++]}e.pending&&e.pushPending()};Fu.prototype.parse=function(e,r,t,n){var i=new Qo(e,this,r,t,n);this.tokenize(i)};function iD(e){var r=["vbscript","javascript","file","data"],t=e.trim().toLowerCase();return t=Wo(t),!(t.indexOf(":")!==-1&&r.indexOf(t.split(":")[0])!==-1)}var oD={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkTarget:"",typographer:!1,quotes:"\u201C\u201D\u2018\u2019",highlight:null,maxNesting:20},components:{core:{rules:["block","inline","references","replacements","smartquotes","references","abbr2","footnote_tail"]},block:{rules:["blockquote","code","fences","footnote","heading","hr","htmlblock","lheading","list","paragraph","table"]},inline:{rules:["autolink","backticks","del","emphasis","entity","escape","footnote_ref","htmltag","links","newline","text"]}}},aD={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkTarget:"",typographer:!1,quotes:"\u201C\u201D\u2018\u2019",highlight:null,maxNesting:20},components:{core:{},block:{},inline:{}}},sD={options:{html:!0,xhtmlOut:!0,breaks:!1,langPrefix:"language-",linkTarget:"",typographer:!1,quotes:"\u201C\u201D\u2018\u2019",highlight:null,maxNesting:20},components:{core:{rules:["block","inline","references","abbr2"]},block:{rules:["blockquote","code","fences","heading","hr","htmlblock","lheading","list","paragraph"]},inline:{rules:["autolink","backticks","emphasis","entity","escape","htmltag","links","newline","text"]}}},lD={default:oD,full:aD,commonmark:sD};function XC(e,r,t){this.src=r,this.env=t,this.options=e.options,this.tokens=[],this.inlineMode=!1,this.inline=e.inline,this.block=e.block,this.renderer=e.renderer,this.typographer=e.typographer}function Ei(e,r){typeof e!="string"&&(r=e,e="default"),r&&r.linkify!=null&&console.warn(`linkify option is removed. Use linkify plugin instead:

import Remarkable from 'remarkable';
import linkify from 'remarkable/linkify';
new Remarkable().use(linkify)
`),this.inline=new Fu,this.block=new Gp,this.core=new PC,this.renderer=new Up,this.ruler=new yr,this.options={},this.configure(lD[e]),this.set(r||{})}Ei.prototype.set=function(e){UC(this.options,e)};Ei.prototype.configure=function(e){var r=this;if(!e)throw new Error("Wrong `remarkable` preset, check name/content");e.options&&r.set(e.options),e.components&&Object.keys(e.components).forEach(function(t){e.components[t].rules&&r[t].ruler.enable(e.components[t].rules,!0)})};Ei.prototype.use=function(e,r){return e(this,r),this};Ei.prototype.parse=function(e,r){var t=new XC(this,e,r);return this.core.process(t),t.tokens};Ei.prototype.render=function(e,r){return r=r||{},this.renderer.render(this.parse(e,r),this.options,r)};Ei.prototype.parseInline=function(e,r){var t=new XC(this,e,r);return t.inlineMode=!0,this.core.process(t),t.tokens};Ei.prototype.renderInline=function(e,r){return r=r||{},this.renderer.render(this.parseInline(e,r),this.options,r)};function m5(e){return typeof e>"u"||e===null}function uD(e){return typeof e=="object"&&e!==null}function cD(e){return Array.isArray(e)?e:m5(e)?[]:[e]}function pD(e,r){var t,n,i,o;if(r)for(o=Object.keys(r),t=0,n=o.length;t<n;t+=1)i=o[t],e[i]=r[i];return e}function dD(e,r){var t="",n;for(n=0;n<r;n+=1)t+=e;return t}function hD(e){return e===0&&Number.NEGATIVE_INFINITY===1/e}var fD=m5,mD=uD,gD=cD,bD=dD,vD=hD,xD=pD,Pe={isNothing:fD,isObject:mD,toArray:gD,repeat:bD,isNegativeZero:vD,extend:xD};function g5(e,r){var t="",n=e.reason||"(unknown reason)";return e.mark?(e.mark.name&&(t+='in "'+e.mark.name+'" '),t+="("+(e.mark.line+1)+":"+(e.mark.column+1)+")",!r&&e.mark.snippet&&(t+=`

`+e.mark.snippet),n+" "+t):n}function sl(e,r){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=r,this.message=g5(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}sl.prototype=Object.create(Error.prototype);sl.prototype.constructor=sl;sl.prototype.toString=function(r){return this.name+": "+g5(this,r)};var or=sl;function qp(e,r,t,n,i){var o="",s="",l=Math.floor(i/2)-1;return n-r>l&&(o=" ... ",r=n-l+o.length),t-n>l&&(s=" ...",t=n+l-s.length),{str:o+e.slice(r,t).replace(/\t/g,"\u2192")+s,pos:n-r+o.length}}function Qp(e,r){return Pe.repeat(" ",r-e.length)+e}function yD(e,r){if(r=Object.create(r||null),!e.buffer)return null;r.maxLength||(r.maxLength=79),typeof r.indent!="number"&&(r.indent=1),typeof r.linesBefore!="number"&&(r.linesBefore=3),typeof r.linesAfter!="number"&&(r.linesAfter=2);for(var t=/\r?\n|\r|\0/g,n=[0],i=[],o,s=-1;o=t.exec(e.buffer);)i.push(o.index),n.push(o.index+o[0].length),e.position<=o.index&&s<0&&(s=n.length-2);s<0&&(s=n.length-1);var l="",u,d,h=Math.min(e.line+r.linesAfter,i.length).toString().length,f=r.maxLength-(r.indent+h+3);for(u=1;u<=r.linesBefore&&!(s-u<0);u++)d=qp(e.buffer,n[s-u],i[s-u],e.position-(n[s]-n[s-u]),f),l=Pe.repeat(" ",r.indent)+Qp((e.line-u+1).toString(),h)+" | "+d.str+`
`+l;for(d=qp(e.buffer,n[s],i[s],e.position,f),l+=Pe.repeat(" ",r.indent)+Qp((e.line+1).toString(),h)+" | "+d.str+`
`,l+=Pe.repeat("-",r.indent+h+3+d.pos)+`^
`,u=1;u<=r.linesAfter&&!(s+u>=i.length);u++)d=qp(e.buffer,n[s+u],i[s+u],e.position-(n[s]-n[s+u]),f),l+=Pe.repeat(" ",r.indent)+Qp((e.line+u+1).toString(),h)+" | "+d.str+`
`;return l.replace(/\n$/,"")}var ED=yD,wD=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],CD=["scalar","sequence","mapping"];function AD(e){var r={};return e!==null&&Object.keys(e).forEach(function(t){e[t].forEach(function(n){r[String(n)]=t})}),r}function kD(e,r){if(r=r||{},Object.keys(r).forEach(function(t){if(wD.indexOf(t)===-1)throw new or('Unknown option "'+t+'" is met in definition of "'+e+'" YAML type.')}),this.options=r,this.tag=e,this.kind=r.kind||null,this.resolve=r.resolve||function(){return!0},this.construct=r.construct||function(t){return t},this.instanceOf=r.instanceOf||null,this.predicate=r.predicate||null,this.represent=r.represent||null,this.representName=r.representName||null,this.defaultStyle=r.defaultStyle||null,this.multi=r.multi||!1,this.styleAliases=AD(r.styleAliases||null),CD.indexOf(this.kind)===-1)throw new or('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')}var Ft=kD;function e5(e,r){var t=[];return e[r].forEach(function(n){var i=t.length;t.forEach(function(o,s){o.tag===n.tag&&o.kind===n.kind&&o.multi===n.multi&&(i=s)}),t[i]=n}),t}function LD(){var e={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},r,t;function n(i){i.multi?(e.multi[i.kind].push(i),e.multi.fallback.push(i)):e[i.kind][i.tag]=e.fallback[i.tag]=i}for(r=0,t=arguments.length;r<t;r+=1)arguments[r].forEach(n);return e}function Pp(e){return this.extend(e)}Pp.prototype.extend=function(r){var t=[],n=[];if(r instanceof Ft)n.push(r);else if(Array.isArray(r))n=n.concat(r);else if(r&&(Array.isArray(r.implicit)||Array.isArray(r.explicit)))r.implicit&&(t=t.concat(r.implicit)),r.explicit&&(n=n.concat(r.explicit));else throw new or("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");t.forEach(function(o){if(!(o instanceof Ft))throw new or("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(o.loadKind&&o.loadKind!=="scalar")throw new or("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(o.multi)throw new or("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),n.forEach(function(o){if(!(o instanceof Ft))throw new or("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var i=Object.create(Pp.prototype);return i.implicit=(this.implicit||[]).concat(t),i.explicit=(this.explicit||[]).concat(n),i.compiledImplicit=e5(i,"implicit"),i.compiledExplicit=e5(i,"explicit"),i.compiledTypeMap=LD(i.compiledImplicit,i.compiledExplicit),i};var FD=Pp,SD=new Ft("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return e!==null?e:""}}),MD=new Ft("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return e!==null?e:[]}}),TD=new Ft("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return e!==null?e:{}}}),DD=new FD({explicit:[SD,MD,TD]});function $D(e){if(e===null)return!0;var r=e.length;return r===1&&e==="~"||r===4&&(e==="null"||e==="Null"||e==="NULL")}function HD(){return null}function ID(e){return e===null}var RD=new Ft("tag:yaml.org,2002:null",{kind:"scalar",resolve:$D,construct:HD,predicate:ID,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function _D(e){if(e===null)return!1;var r=e.length;return r===4&&(e==="true"||e==="True"||e==="TRUE")||r===5&&(e==="false"||e==="False"||e==="FALSE")}function BD(e){return e==="true"||e==="True"||e==="TRUE"}function OD(e){return Object.prototype.toString.call(e)==="[object Boolean]"}var ND=new Ft("tag:yaml.org,2002:bool",{kind:"scalar",resolve:_D,construct:BD,predicate:OD,represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"});function VD(e){return 48<=e&&e<=57||65<=e&&e<=70||97<=e&&e<=102}function zD(e){return 48<=e&&e<=55}function jD(e){return 48<=e&&e<=57}function YD(e){if(e===null)return!1;var r=e.length,t=0,n=!1,i;if(!r)return!1;if(i=e[t],(i==="-"||i==="+")&&(i=e[++t]),i==="0"){if(t+1===r)return!0;if(i=e[++t],i==="b"){for(t++;t<r;t++)if(i=e[t],i!=="_"){if(i!=="0"&&i!=="1")return!1;n=!0}return n&&i!=="_"}if(i==="x"){for(t++;t<r;t++)if(i=e[t],i!=="_"){if(!VD(e.charCodeAt(t)))return!1;n=!0}return n&&i!=="_"}if(i==="o"){for(t++;t<r;t++)if(i=e[t],i!=="_"){if(!zD(e.charCodeAt(t)))return!1;n=!0}return n&&i!=="_"}}if(i==="_")return!1;for(;t<r;t++)if(i=e[t],i!=="_"){if(!jD(e.charCodeAt(t)))return!1;n=!0}return!(!n||i==="_")}function KD(e){var r=e,t=1,n;if(r.indexOf("_")!==-1&&(r=r.replace(/_/g,"")),n=r[0],(n==="-"||n==="+")&&(n==="-"&&(t=-1),r=r.slice(1),n=r[0]),r==="0")return 0;if(n==="0"){if(r[1]==="b")return t*parseInt(r.slice(2),2);if(r[1]==="x")return t*parseInt(r.slice(2),16);if(r[1]==="o")return t*parseInt(r.slice(2),8)}return t*parseInt(r,10)}function UD(e){return Object.prototype.toString.call(e)==="[object Number]"&&e%1===0&&!Pe.isNegativeZero(e)}var GD=new Ft("tag:yaml.org,2002:int",{kind:"scalar",resolve:YD,construct:KD,predicate:UD,represent:{binary:function(e){return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){return e>=0?"0o"+e.toString(8):"-0o"+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),WD=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function qD(e){return!(e===null||!WD.test(e)||e[e.length-1]==="_")}function QD(e){var r,t;return r=e.replace(/_/g,"").toLowerCase(),t=r[0]==="-"?-1:1,"+-".indexOf(r[0])>=0&&(r=r.slice(1)),r===".inf"?t===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:r===".nan"?NaN:t*parseFloat(r,10)}var ZD=/^[-+]?[0-9]+e/;function PD(e,r){var t;if(isNaN(e))switch(r){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(r){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(r){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(Pe.isNegativeZero(e))return"-0.0";return t=e.toString(10),ZD.test(t)?t.replace("e",".e"):t}function JD(e){return Object.prototype.toString.call(e)==="[object Number]"&&(e%1!==0||Pe.isNegativeZero(e))}var XD=new Ft("tag:yaml.org,2002:float",{kind:"scalar",resolve:qD,construct:QD,predicate:JD,represent:PD,defaultStyle:"lowercase"}),e$=DD.extend({implicit:[RD,ND,GD,XD]}),t$=e$,b5=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),v5=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function r$(e){return e===null?!1:b5.exec(e)!==null||v5.exec(e)!==null}function n$(e){var r,t,n,i,o,s,l,u=0,d=null,h,f,g;if(r=b5.exec(e),r===null&&(r=v5.exec(e)),r===null)throw new Error("Date resolve error");if(t=+r[1],n=+r[2]-1,i=+r[3],!r[4])return new Date(Date.UTC(t,n,i));if(o=+r[4],s=+r[5],l=+r[6],r[7]){for(u=r[7].slice(0,3);u.length<3;)u+="0";u=+u}return r[9]&&(h=+r[10],f=+(r[11]||0),d=(h*60+f)*6e4,r[9]==="-"&&(d=-d)),g=new Date(Date.UTC(t,n,i,o,s,l,u)),d&&g.setTime(g.getTime()-d),g}function i$(e){return e.toISOString()}var o$=new Ft("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:r$,construct:n$,instanceOf:Date,represent:i$});function a$(e){return e==="<<"||e===null}var s$=new Ft("tag:yaml.org,2002:merge",{kind:"scalar",resolve:a$}),rd=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function l$(e){if(e===null)return!1;var r,t,n=0,i=e.length,o=rd;for(t=0;t<i;t++)if(r=o.indexOf(e.charAt(t)),!(r>64)){if(r<0)return!1;n+=6}return n%8===0}function u$(e){var r,t,n=e.replace(/[\r\n=]/g,""),i=n.length,o=rd,s=0,l=[];for(r=0;r<i;r++)r%4===0&&r&&(l.push(s>>16&255),l.push(s>>8&255),l.push(s&255)),s=s<<6|o.indexOf(n.charAt(r));return t=i%4*6,t===0?(l.push(s>>16&255),l.push(s>>8&255),l.push(s&255)):t===18?(l.push(s>>10&255),l.push(s>>2&255)):t===12&&l.push(s>>4&255),new Uint8Array(l)}function c$(e){var r="",t=0,n,i,o=e.length,s=rd;for(n=0;n<o;n++)n%3===0&&n&&(r+=s[t>>18&63],r+=s[t>>12&63],r+=s[t>>6&63],r+=s[t&63]),t=(t<<8)+e[n];return i=o%3,i===0?(r+=s[t>>18&63],r+=s[t>>12&63],r+=s[t>>6&63],r+=s[t&63]):i===2?(r+=s[t>>10&63],r+=s[t>>4&63],r+=s[t<<2&63],r+=s[64]):i===1&&(r+=s[t>>2&63],r+=s[t<<4&63],r+=s[64],r+=s[64]),r}function p$(e){return Object.prototype.toString.call(e)==="[object Uint8Array]"}var d$=new Ft("tag:yaml.org,2002:binary",{kind:"scalar",resolve:l$,construct:u$,predicate:p$,represent:c$}),h$=Object.prototype.hasOwnProperty,f$=Object.prototype.toString;function m$(e){if(e===null)return!0;var r=[],t,n,i,o,s,l=e;for(t=0,n=l.length;t<n;t+=1){if(i=l[t],s=!1,f$.call(i)!=="[object Object]")return!1;for(o in i)if(h$.call(i,o))if(!s)s=!0;else return!1;if(!s)return!1;if(r.indexOf(o)===-1)r.push(o);else return!1}return!0}function g$(e){return e!==null?e:[]}var b$=new Ft("tag:yaml.org,2002:omap",{kind:"sequence",resolve:m$,construct:g$}),v$=Object.prototype.toString;function x$(e){if(e===null)return!0;var r,t,n,i,o,s=e;for(o=new Array(s.length),r=0,t=s.length;r<t;r+=1){if(n=s[r],v$.call(n)!=="[object Object]"||(i=Object.keys(n),i.length!==1))return!1;o[r]=[i[0],n[i[0]]]}return!0}function y$(e){if(e===null)return[];var r,t,n,i,o,s=e;for(o=new Array(s.length),r=0,t=s.length;r<t;r+=1)n=s[r],i=Object.keys(n),o[r]=[i[0],n[i[0]]];return o}var E$=new Ft("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:x$,construct:y$}),w$=Object.prototype.hasOwnProperty;function C$(e){if(e===null)return!0;var r,t=e;for(r in t)if(w$.call(t,r)&&t[r]!==null)return!1;return!0}function A$(e){return e!==null?e:{}}var k$=new Ft("tag:yaml.org,2002:set",{kind:"mapping",resolve:C$,construct:A$}),x5=t$.extend({implicit:[o$,s$],explicit:[d$,b$,E$,k$]}),go=Object.prototype.hasOwnProperty,Su=1,y5=2,E5=3,Mu=4,Zp=1,L$=2,t5=3,F$=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,S$=/[\x85\u2028\u2029]/,M$=/[,\[\]\{\}]/,w5=/^(?:!|!!|![a-z\-]+!)$/i,C5=/^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;function r5(e){return Object.prototype.toString.call(e)}function Mn(e){return e===10||e===13}function Jo(e){return e===9||e===32}function ar(e){return e===9||e===32||e===10||e===13}function as(e){return e===44||e===91||e===93||e===123||e===125}function T$(e){var r;return 48<=e&&e<=57?e-48:(r=e|32,97<=r&&r<=102?r-97+10:-1)}function D$(e){return e===120?2:e===117?4:e===85?8:0}function $$(e){return 48<=e&&e<=57?e-48:-1}function n5(e){return e===48?"\0":e===97?"\x07":e===98?"\b":e===116||e===9?"	":e===110?`
`:e===118?"\v":e===102?"\f":e===114?"\r":e===101?"\x1B":e===32?" ":e===34?'"':e===47?"/":e===92?"\\":e===78?"\x85":e===95?"\xA0":e===76?"\u2028":e===80?"\u2029":""}function H$(e){return e<=65535?String.fromCharCode(e):String.fromCharCode((e-65536>>10)+55296,(e-65536&1023)+56320)}var A5=new Array(256),k5=new Array(256);for(Po=0;Po<256;Po++)A5[Po]=n5(Po)?1:0,k5[Po]=n5(Po);var Po;function I$(e,r){this.input=e,this.filename=r.filename||null,this.schema=r.schema||x5,this.onWarning=r.onWarning||null,this.legacy=r.legacy||!1,this.json=r.json||!1,this.listener=r.listener||null,this.implicitTypes=this.schema.compiledImplicit,this.typeMap=this.schema.compiledTypeMap,this.length=e.length,this.position=0,this.line=0,this.lineStart=0,this.lineIndent=0,this.firstTabInLine=-1,this.documents=[]}function L5(e,r){var t={name:e.filename,buffer:e.input.slice(0,-1),position:e.position,line:e.line,column:e.position-e.lineStart};return t.snippet=ED(t),new or(r,t)}function G(e,r){throw L5(e,r)}function Tu(e,r){e.onWarning&&e.onWarning.call(null,L5(e,r))}var i5={YAML:function(r,t,n){var i,o,s;r.version!==null&&G(r,"duplication of %YAML directive"),n.length!==1&&G(r,"YAML directive accepts exactly one argument"),i=/^([0-9]+)\.([0-9]+)$/.exec(n[0]),i===null&&G(r,"ill-formed argument of the YAML directive"),o=parseInt(i[1],10),s=parseInt(i[2],10),o!==1&&G(r,"unacceptable YAML version of the document"),r.version=n[0],r.checkLineBreaks=s<2,s!==1&&s!==2&&Tu(r,"unsupported YAML version of the document")},TAG:function(r,t,n){var i,o;n.length!==2&&G(r,"TAG directive accepts exactly two arguments"),i=n[0],o=n[1],w5.test(i)||G(r,"ill-formed tag handle (first argument) of the TAG directive"),go.call(r.tagMap,i)&&G(r,'there is a previously declared suffix for "'+i+'" tag handle'),C5.test(o)||G(r,"ill-formed tag prefix (second argument) of the TAG directive");try{o=decodeURIComponent(o)}catch{G(r,"tag prefix is malformed: "+o)}r.tagMap[i]=o}};function mo(e,r,t,n){var i,o,s,l;if(r<t){if(l=e.input.slice(r,t),n)for(i=0,o=l.length;i<o;i+=1)s=l.charCodeAt(i),s===9||32<=s&&s<=1114111||G(e,"expected valid JSON character");else F$.test(l)&&G(e,"the stream contains non-printable characters");e.result+=l}}function o5(e,r,t,n){var i,o,s,l;for(Pe.isObject(t)||G(e,"cannot merge mappings; the provided source object is unacceptable"),i=Object.keys(t),s=0,l=i.length;s<l;s+=1)o=i[s],go.call(r,o)||(r[o]=t[o],n[o]=!0)}function ss(e,r,t,n,i,o,s,l,u){var d,h;if(Array.isArray(i))for(i=Array.prototype.slice.call(i),d=0,h=i.length;d<h;d+=1)Array.isArray(i[d])&&G(e,"nested arrays are not supported inside keys"),typeof i=="object"&&r5(i[d])==="[object Object]"&&(i[d]="[object Object]");if(typeof i=="object"&&r5(i)==="[object Object]"&&(i="[object Object]"),i=String(i),r===null&&(r={}),n==="tag:yaml.org,2002:merge")if(Array.isArray(o))for(d=0,h=o.length;d<h;d+=1)o5(e,r,o[d],t);else o5(e,r,o,t);else!e.json&&!go.call(t,i)&&go.call(r,i)&&(e.line=s||e.line,e.lineStart=l||e.lineStart,e.position=u||e.position,G(e,"duplicated mapping key")),i==="__proto__"?Object.defineProperty(r,i,{configurable:!0,enumerable:!0,writable:!0,value:o}):r[i]=o,delete t[i];return r}function nd(e){var r;r=e.input.charCodeAt(e.position),r===10?e.position++:r===13?(e.position++,e.input.charCodeAt(e.position)===10&&e.position++):G(e,"a line break is expected"),e.line+=1,e.lineStart=e.position,e.firstTabInLine=-1}function Ke(e,r,t){for(var n=0,i=e.input.charCodeAt(e.position);i!==0;){for(;Jo(i);)i===9&&e.firstTabInLine===-1&&(e.firstTabInLine=e.position),i=e.input.charCodeAt(++e.position);if(r&&i===35)do i=e.input.charCodeAt(++e.position);while(i!==10&&i!==13&&i!==0);if(Mn(i))for(nd(e),i=e.input.charCodeAt(e.position),n++,e.lineIndent=0;i===32;)e.lineIndent++,i=e.input.charCodeAt(++e.position);else break}return t!==-1&&n!==0&&e.lineIndent<t&&Tu(e,"deficient indentation"),n}function Hu(e){var r=e.position,t;return t=e.input.charCodeAt(r),!!((t===45||t===46)&&t===e.input.charCodeAt(r+1)&&t===e.input.charCodeAt(r+2)&&(r+=3,t=e.input.charCodeAt(r),t===0||ar(t)))}function id(e,r){r===1?e.result+=" ":r>1&&(e.result+=Pe.repeat(`
`,r-1))}function R$(e,r,t){var n,i,o,s,l,u,d,h,f=e.kind,g=e.result,b;if(b=e.input.charCodeAt(e.position),ar(b)||as(b)||b===35||b===38||b===42||b===33||b===124||b===62||b===39||b===34||b===37||b===64||b===96||(b===63||b===45)&&(i=e.input.charCodeAt(e.position+1),ar(i)||t&&as(i)))return!1;for(e.kind="scalar",e.result="",o=s=e.position,l=!1;b!==0;){if(b===58){if(i=e.input.charCodeAt(e.position+1),ar(i)||t&&as(i))break}else if(b===35){if(n=e.input.charCodeAt(e.position-1),ar(n))break}else{if(e.position===e.lineStart&&Hu(e)||t&&as(b))break;if(Mn(b))if(u=e.line,d=e.lineStart,h=e.lineIndent,Ke(e,!1,-1),e.lineIndent>=r){l=!0,b=e.input.charCodeAt(e.position);continue}else{e.position=s,e.line=u,e.lineStart=d,e.lineIndent=h;break}}l&&(mo(e,o,s,!1),id(e,e.line-u),o=s=e.position,l=!1),Jo(b)||(s=e.position+1),b=e.input.charCodeAt(++e.position)}return mo(e,o,s,!1),e.result?!0:(e.kind=f,e.result=g,!1)}function _$(e,r){var t,n,i;if(t=e.input.charCodeAt(e.position),t!==39)return!1;for(e.kind="scalar",e.result="",e.position++,n=i=e.position;(t=e.input.charCodeAt(e.position))!==0;)if(t===39)if(mo(e,n,e.position,!0),t=e.input.charCodeAt(++e.position),t===39)n=e.position,e.position++,i=e.position;else return!0;else Mn(t)?(mo(e,n,i,!0),id(e,Ke(e,!1,r)),n=i=e.position):e.position===e.lineStart&&Hu(e)?G(e,"unexpected end of the document within a single quoted scalar"):(e.position++,i=e.position);G(e,"unexpected end of the stream within a single quoted scalar")}function B$(e,r){var t,n,i,o,s,l;if(l=e.input.charCodeAt(e.position),l!==34)return!1;for(e.kind="scalar",e.result="",e.position++,t=n=e.position;(l=e.input.charCodeAt(e.position))!==0;){if(l===34)return mo(e,t,e.position,!0),e.position++,!0;if(l===92){if(mo(e,t,e.position,!0),l=e.input.charCodeAt(++e.position),Mn(l))Ke(e,!1,r);else if(l<256&&A5[l])e.result+=k5[l],e.position++;else if((s=D$(l))>0){for(i=s,o=0;i>0;i--)l=e.input.charCodeAt(++e.position),(s=T$(l))>=0?o=(o<<4)+s:G(e,"expected hexadecimal character");e.result+=H$(o),e.position++}else G(e,"unknown escape sequence");t=n=e.position}else Mn(l)?(mo(e,t,n,!0),id(e,Ke(e,!1,r)),t=n=e.position):e.position===e.lineStart&&Hu(e)?G(e,"unexpected end of the document within a double quoted scalar"):(e.position++,n=e.position)}G(e,"unexpected end of the stream within a double quoted scalar")}function O$(e,r){var t=!0,n,i,o,s=e.tag,l,u=e.anchor,d,h,f,g,b,w=Object.create(null),v,y,E,C;if(C=e.input.charCodeAt(e.position),C===91)h=93,b=!1,l=[];else if(C===123)h=125,b=!0,l={};else return!1;for(e.anchor!==null&&(e.anchorMap[e.anchor]=l),C=e.input.charCodeAt(++e.position);C!==0;){if(Ke(e,!0,r),C=e.input.charCodeAt(e.position),C===h)return e.position++,e.tag=s,e.anchor=u,e.kind=b?"mapping":"sequence",e.result=l,!0;t?C===44&&G(e,"expected the node content, but found ','"):G(e,"missed comma between flow collection entries"),y=v=E=null,f=g=!1,C===63&&(d=e.input.charCodeAt(e.position+1),ar(d)&&(f=g=!0,e.position++,Ke(e,!0,r))),n=e.line,i=e.lineStart,o=e.position,ls(e,r,Su,!1,!0),y=e.tag,v=e.result,Ke(e,!0,r),C=e.input.charCodeAt(e.position),(g||e.line===n)&&C===58&&(f=!0,C=e.input.charCodeAt(++e.position),Ke(e,!0,r),ls(e,r,Su,!1,!0),E=e.result),b?ss(e,l,w,y,v,E,n,i,o):f?l.push(ss(e,null,w,y,v,E,n,i,o)):l.push(v),Ke(e,!0,r),C=e.input.charCodeAt(e.position),C===44?(t=!0,C=e.input.charCodeAt(++e.position)):t=!1}G(e,"unexpected end of the stream within a flow collection")}function N$(e,r){var t,n,i=Zp,o=!1,s=!1,l=r,u=0,d=!1,h,f;if(f=e.input.charCodeAt(e.position),f===124)n=!1;else if(f===62)n=!0;else return!1;for(e.kind="scalar",e.result="";f!==0;)if(f=e.input.charCodeAt(++e.position),f===43||f===45)Zp===i?i=f===43?t5:L$:G(e,"repeat of a chomping mode identifier");else if((h=$$(f))>=0)h===0?G(e,"bad explicit indentation width of a block scalar; it cannot be less than one"):s?G(e,"repeat of an indentation width identifier"):(l=r+h-1,s=!0);else break;if(Jo(f)){do f=e.input.charCodeAt(++e.position);while(Jo(f));if(f===35)do f=e.input.charCodeAt(++e.position);while(!Mn(f)&&f!==0)}for(;f!==0;){for(nd(e),e.lineIndent=0,f=e.input.charCodeAt(e.position);(!s||e.lineIndent<l)&&f===32;)e.lineIndent++,f=e.input.charCodeAt(++e.position);if(!s&&e.lineIndent>l&&(l=e.lineIndent),Mn(f)){u++;continue}if(e.lineIndent<l){i===t5?e.result+=Pe.repeat(`
`,o?1+u:u):i===Zp&&o&&(e.result+=`
`);break}for(n?Jo(f)?(d=!0,e.result+=Pe.repeat(`
`,o?1+u:u)):d?(d=!1,e.result+=Pe.repeat(`
`,u+1)):u===0?o&&(e.result+=" "):e.result+=Pe.repeat(`
`,u):e.result+=Pe.repeat(`
`,o?1+u:u),o=!0,s=!0,u=0,t=e.position;!Mn(f)&&f!==0;)f=e.input.charCodeAt(++e.position);mo(e,t,e.position,!1)}return!0}function a5(e,r){var t,n=e.tag,i=e.anchor,o=[],s,l=!1,u;if(e.firstTabInLine!==-1)return!1;for(e.anchor!==null&&(e.anchorMap[e.anchor]=o),u=e.input.charCodeAt(e.position);u!==0&&(e.firstTabInLine!==-1&&(e.position=e.firstTabInLine,G(e,"tab characters must not be used in indentation")),!(u!==45||(s=e.input.charCodeAt(e.position+1),!ar(s))));){if(l=!0,e.position++,Ke(e,!0,-1)&&e.lineIndent<=r){o.push(null),u=e.input.charCodeAt(e.position);continue}if(t=e.line,ls(e,r,E5,!1,!0),o.push(e.result),Ke(e,!0,-1),u=e.input.charCodeAt(e.position),(e.line===t||e.lineIndent>r)&&u!==0)G(e,"bad indentation of a sequence entry");else if(e.lineIndent<r)break}return l?(e.tag=n,e.anchor=i,e.kind="sequence",e.result=o,!0):!1}function V$(e,r,t){var n,i,o,s,l,u,d=e.tag,h=e.anchor,f={},g=Object.create(null),b=null,w=null,v=null,y=!1,E=!1,C;if(e.firstTabInLine!==-1)return!1;for(e.anchor!==null&&(e.anchorMap[e.anchor]=f),C=e.input.charCodeAt(e.position);C!==0;){if(!y&&e.firstTabInLine!==-1&&(e.position=e.firstTabInLine,G(e,"tab characters must not be used in indentation")),n=e.input.charCodeAt(e.position+1),o=e.line,(C===63||C===58)&&ar(n))C===63?(y&&(ss(e,f,g,b,w,null,s,l,u),b=w=v=null),E=!0,y=!0,i=!0):y?(y=!1,i=!0):G(e,"incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"),e.position+=1,C=n;else{if(s=e.line,l=e.lineStart,u=e.position,!ls(e,t,y5,!1,!0))break;if(e.line===o){for(C=e.input.charCodeAt(e.position);Jo(C);)C=e.input.charCodeAt(++e.position);if(C===58)C=e.input.charCodeAt(++e.position),ar(C)||G(e,"a whitespace character is expected after the key-value separator within a block mapping"),y&&(ss(e,f,g,b,w,null,s,l,u),b=w=v=null),E=!0,y=!1,i=!1,b=e.tag,w=e.result;else if(E)G(e,"can not read an implicit mapping pair; a colon is missed");else return e.tag=d,e.anchor=h,!0}else if(E)G(e,"can not read a block mapping entry; a multiline key may not be an implicit key");else return e.tag=d,e.anchor=h,!0}if((e.line===o||e.lineIndent>r)&&(y&&(s=e.line,l=e.lineStart,u=e.position),ls(e,r,Mu,!0,i)&&(y?w=e.result:v=e.result),y||(ss(e,f,g,b,w,v,s,l,u),b=w=v=null),Ke(e,!0,-1),C=e.input.charCodeAt(e.position)),(e.line===o||e.lineIndent>r)&&C!==0)G(e,"bad indentation of a mapping entry");else if(e.lineIndent<r)break}return y&&ss(e,f,g,b,w,null,s,l,u),E&&(e.tag=d,e.anchor=h,e.kind="mapping",e.result=f),E}function z$(e){var r,t=!1,n=!1,i,o,s;if(s=e.input.charCodeAt(e.position),s!==33)return!1;if(e.tag!==null&&G(e,"duplication of a tag property"),s=e.input.charCodeAt(++e.position),s===60?(t=!0,s=e.input.charCodeAt(++e.position)):s===33?(n=!0,i="!!",s=e.input.charCodeAt(++e.position)):i="!",r=e.position,t){do s=e.input.charCodeAt(++e.position);while(s!==0&&s!==62);e.position<e.length?(o=e.input.slice(r,e.position),s=e.input.charCodeAt(++e.position)):G(e,"unexpected end of the stream within a verbatim tag")}else{for(;s!==0&&!ar(s);)s===33&&(n?G(e,"tag suffix cannot contain exclamation marks"):(i=e.input.slice(r-1,e.position+1),w5.test(i)||G(e,"named tag handle cannot contain such characters"),n=!0,r=e.position+1)),s=e.input.charCodeAt(++e.position);o=e.input.slice(r,e.position),M$.test(o)&&G(e,"tag suffix cannot contain flow indicator characters")}o&&!C5.test(o)&&G(e,"tag name cannot contain such characters: "+o);try{o=decodeURIComponent(o)}catch{G(e,"tag name is malformed: "+o)}return t?e.tag=o:go.call(e.tagMap,i)?e.tag=e.tagMap[i]+o:i==="!"?e.tag="!"+o:i==="!!"?e.tag="tag:yaml.org,2002:"+o:G(e,'undeclared tag handle "'+i+'"'),!0}function j$(e){var r,t;if(t=e.input.charCodeAt(e.position),t!==38)return!1;for(e.anchor!==null&&G(e,"duplication of an anchor property"),t=e.input.charCodeAt(++e.position),r=e.position;t!==0&&!ar(t)&&!as(t);)t=e.input.charCodeAt(++e.position);return e.position===r&&G(e,"name of an anchor node must contain at least one character"),e.anchor=e.input.slice(r,e.position),!0}function Y$(e){var r,t,n;if(n=e.input.charCodeAt(e.position),n!==42)return!1;for(n=e.input.charCodeAt(++e.position),r=e.position;n!==0&&!ar(n)&&!as(n);)n=e.input.charCodeAt(++e.position);return e.position===r&&G(e,"name of an alias node must contain at least one character"),t=e.input.slice(r,e.position),go.call(e.anchorMap,t)||G(e,'unidentified alias "'+t+'"'),e.result=e.anchorMap[t],Ke(e,!0,-1),!0}function ls(e,r,t,n,i){var o,s,l,u=1,d=!1,h=!1,f,g,b,w,v,y;if(e.listener!==null&&e.listener("open",e),e.tag=null,e.anchor=null,e.kind=null,e.result=null,o=s=l=Mu===t||E5===t,n&&Ke(e,!0,-1)&&(d=!0,e.lineIndent>r?u=1:e.lineIndent===r?u=0:e.lineIndent<r&&(u=-1)),u===1)for(;z$(e)||j$(e);)Ke(e,!0,-1)?(d=!0,l=o,e.lineIndent>r?u=1:e.lineIndent===r?u=0:e.lineIndent<r&&(u=-1)):l=!1;if(l&&(l=d||i),(u===1||Mu===t)&&(Su===t||y5===t?v=r:v=r+1,y=e.position-e.lineStart,u===1?l&&(a5(e,y)||V$(e,y,v))||O$(e,v)?h=!0:(s&&N$(e,v)||_$(e,v)||B$(e,v)?h=!0:Y$(e)?(h=!0,(e.tag!==null||e.anchor!==null)&&G(e,"alias node should not have any properties")):R$(e,v,Su===t)&&(h=!0,e.tag===null&&(e.tag="?")),e.anchor!==null&&(e.anchorMap[e.anchor]=e.result)):u===0&&(h=l&&a5(e,y))),e.tag===null)e.anchor!==null&&(e.anchorMap[e.anchor]=e.result);else if(e.tag==="?"){for(e.result!==null&&e.kind!=="scalar"&&G(e,'unacceptable node kind for !<?> tag; it should be "scalar", not "'+e.kind+'"'),f=0,g=e.implicitTypes.length;f<g;f+=1)if(w=e.implicitTypes[f],w.resolve(e.result)){e.result=w.construct(e.result),e.tag=w.tag,e.anchor!==null&&(e.anchorMap[e.anchor]=e.result);break}}else if(e.tag!=="!"){if(go.call(e.typeMap[e.kind||"fallback"],e.tag))w=e.typeMap[e.kind||"fallback"][e.tag];else for(w=null,b=e.typeMap.multi[e.kind||"fallback"],f=0,g=b.length;f<g;f+=1)if(e.tag.slice(0,b[f].tag.length)===b[f].tag){w=b[f];break}w||G(e,"unknown tag !<"+e.tag+">"),e.result!==null&&w.kind!==e.kind&&G(e,"unacceptable node kind for !<"+e.tag+'> tag; it should be "'+w.kind+'", not "'+e.kind+'"'),w.resolve(e.result,e.tag)?(e.result=w.construct(e.result,e.tag),e.anchor!==null&&(e.anchorMap[e.anchor]=e.result)):G(e,"cannot resolve a node with !<"+e.tag+"> explicit tag")}return e.listener!==null&&e.listener("close",e),e.tag!==null||e.anchor!==null||h}function K$(e){var r=e.position,t,n,i,o=!1,s;for(e.version=null,e.checkLineBreaks=e.legacy,e.tagMap=Object.create(null),e.anchorMap=Object.create(null);(s=e.input.charCodeAt(e.position))!==0&&(Ke(e,!0,-1),s=e.input.charCodeAt(e.position),!(e.lineIndent>0||s!==37));){for(o=!0,s=e.input.charCodeAt(++e.position),t=e.position;s!==0&&!ar(s);)s=e.input.charCodeAt(++e.position);for(n=e.input.slice(t,e.position),i=[],n.length<1&&G(e,"directive name must not be less than one character in length");s!==0;){for(;Jo(s);)s=e.input.charCodeAt(++e.position);if(s===35){do s=e.input.charCodeAt(++e.position);while(s!==0&&!Mn(s));break}if(Mn(s))break;for(t=e.position;s!==0&&!ar(s);)s=e.input.charCodeAt(++e.position);i.push(e.input.slice(t,e.position))}s!==0&&nd(e),go.call(i5,n)?i5[n](e,n,i):Tu(e,'unknown document directive "'+n+'"')}if(Ke(e,!0,-1),e.lineIndent===0&&e.input.charCodeAt(e.position)===45&&e.input.charCodeAt(e.position+1)===45&&e.input.charCodeAt(e.position+2)===45?(e.position+=3,Ke(e,!0,-1)):o&&G(e,"directives end mark is expected"),ls(e,e.lineIndent-1,Mu,!1,!0),Ke(e,!0,-1),e.checkLineBreaks&&S$.test(e.input.slice(r,e.position))&&Tu(e,"non-ASCII line breaks are interpreted as content"),e.documents.push(e.result),e.position===e.lineStart&&Hu(e)){e.input.charCodeAt(e.position)===46&&(e.position+=3,Ke(e,!0,-1));return}if(e.position<e.length-1)G(e,"end of the stream or a document separator is expected");else return}function F5(e,r){e=String(e),r=r||{},e.length!==0&&(e.charCodeAt(e.length-1)!==10&&e.charCodeAt(e.length-1)!==13&&(e+=`
`),e.charCodeAt(0)===65279&&(e=e.slice(1)));var t=new I$(e,r),n=e.indexOf("\0");for(n!==-1&&(t.position=n,G(t,"null byte is not allowed in input")),t.input+="\0";t.input.charCodeAt(t.position)===32;)t.lineIndent+=1,t.position+=1;for(;t.position<t.length-1;)K$(t);return t.documents}function U$(e,r,t){r!==null&&typeof r=="object"&&typeof t>"u"&&(t=r,r=null);var n=F5(e,t);if(typeof r!="function")return n;for(var i=0,o=n.length;i<o;i+=1)r(n[i])}function G$(e,r){var t=F5(e,r);if(t.length!==0){if(t.length===1)return t[0];throw new or("expected a single document in the stream, but found more")}}var W$=U$,q$=G$,S5={loadAll:W$,load:q$},M5=Object.prototype.toString,T5=Object.prototype.hasOwnProperty,od=65279,Q$=9,ll=10,Z$=13,P$=32,J$=33,X$=34,Jp=35,eH=37,tH=38,rH=39,nH=42,D5=44,iH=45,Du=58,oH=61,aH=62,sH=63,lH=64,$5=91,H5=93,uH=96,I5=123,cH=124,R5=125,St={};St[0]="\\0";St[7]="\\a";St[8]="\\b";St[9]="\\t";St[10]="\\n";St[11]="\\v";St[12]="\\f";St[13]="\\r";St[27]="\\e";St[34]='\\"';St[92]="\\\\";St[133]="\\N";St[160]="\\_";St[8232]="\\L";St[8233]="\\P";var pH=["y","Y","yes","Yes","YES","on","On","ON","n","N","no","No","NO","off","Off","OFF"],dH=/^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;function hH(e,r){var t,n,i,o,s,l,u;if(r===null)return{};for(t={},n=Object.keys(r),i=0,o=n.length;i<o;i+=1)s=n[i],l=String(r[s]),s.slice(0,2)==="!!"&&(s="tag:yaml.org,2002:"+s.slice(2)),u=e.compiledTypeMap.fallback[s],u&&T5.call(u.styleAliases,l)&&(l=u.styleAliases[l]),t[s]=l;return t}function fH(e){var r,t,n;if(r=e.toString(16).toUpperCase(),e<=255)t="x",n=2;else if(e<=65535)t="u",n=4;else if(e<=4294967295)t="U",n=8;else throw new or("code point within a string may not be greater than 0xFFFFFFFF");return"\\"+t+Pe.repeat("0",n-r.length)+r}var mH=1,ul=2;function gH(e){this.schema=e.schema||x5,this.indent=Math.max(1,e.indent||2),this.noArrayIndent=e.noArrayIndent||!1,this.skipInvalid=e.skipInvalid||!1,this.flowLevel=Pe.isNothing(e.flowLevel)?-1:e.flowLevel,this.styleMap=hH(this.schema,e.styles||null),this.sortKeys=e.sortKeys||!1,this.lineWidth=e.lineWidth||80,this.noRefs=e.noRefs||!1,this.noCompatMode=e.noCompatMode||!1,this.condenseFlow=e.condenseFlow||!1,this.quotingType=e.quotingType==='"'?ul:mH,this.forceQuotes=e.forceQuotes||!1,this.replacer=typeof e.replacer=="function"?e.replacer:null,this.implicitTypes=this.schema.compiledImplicit,this.explicitTypes=this.schema.compiledExplicit,this.tag=null,this.result="",this.duplicates=[],this.usedDuplicates=null}function s5(e,r){for(var t=Pe.repeat(" ",r),n=0,i=-1,o="",s,l=e.length;n<l;)i=e.indexOf(`
`,n),i===-1?(s=e.slice(n),n=l):(s=e.slice(n,i+1),n=i+1),s.length&&s!==`
`&&(o+=t),o+=s;return o}function Xp(e,r){return`
`+Pe.repeat(" ",e.indent*r)}function bH(e,r){var t,n,i;for(t=0,n=e.implicitTypes.length;t<n;t+=1)if(i=e.implicitTypes[t],i.resolve(r))return!0;return!1}function $u(e){return e===P$||e===Q$}function cl(e){return 32<=e&&e<=126||161<=e&&e<=55295&&e!==8232&&e!==8233||57344<=e&&e<=65533&&e!==od||65536<=e&&e<=1114111}function l5(e){return cl(e)&&e!==od&&e!==Z$&&e!==ll}function u5(e,r,t){var n=l5(e),i=n&&!$u(e);return(t?n:n&&e!==D5&&e!==$5&&e!==H5&&e!==I5&&e!==R5)&&e!==Jp&&!(r===Du&&!i)||l5(r)&&!$u(r)&&e===Jp||r===Du&&i}function vH(e){return cl(e)&&e!==od&&!$u(e)&&e!==iH&&e!==sH&&e!==Du&&e!==D5&&e!==$5&&e!==H5&&e!==I5&&e!==R5&&e!==Jp&&e!==tH&&e!==nH&&e!==J$&&e!==cH&&e!==oH&&e!==aH&&e!==rH&&e!==X$&&e!==eH&&e!==lH&&e!==uH}function xH(e){return!$u(e)&&e!==Du}function al(e,r){var t=e.charCodeAt(r),n;return t>=55296&&t<=56319&&r+1<e.length&&(n=e.charCodeAt(r+1),n>=56320&&n<=57343)?(t-55296)*1024+n-56320+65536:t}function _5(e){var r=/^\n* /;return r.test(e)}var B5=1,ed=2,O5=3,N5=4,os=5;function yH(e,r,t,n,i,o,s,l){var u,d=0,h=null,f=!1,g=!1,b=n!==-1,w=-1,v=vH(al(e,0))&&xH(al(e,e.length-1));if(r||s)for(u=0;u<e.length;d>=65536?u+=2:u++){if(d=al(e,u),!cl(d))return os;v=v&&u5(d,h,l),h=d}else{for(u=0;u<e.length;d>=65536?u+=2:u++){if(d=al(e,u),d===ll)f=!0,b&&(g=g||u-w-1>n&&e[w+1]!==" ",w=u);else if(!cl(d))return os;v=v&&u5(d,h,l),h=d}g=g||b&&u-w-1>n&&e[w+1]!==" "}return!f&&!g?v&&!s&&!i(e)?B5:o===ul?os:ed:t>9&&_5(e)?os:s?o===ul?os:ed:g?N5:O5}function EH(e,r,t,n,i){e.dump=(function(){if(r.length===0)return e.quotingType===ul?'""':"''";if(!e.noCompatMode&&(pH.indexOf(r)!==-1||dH.test(r)))return e.quotingType===ul?'"'+r+'"':"'"+r+"'";var o=e.indent*Math.max(1,t),s=e.lineWidth===-1?-1:Math.max(Math.min(e.lineWidth,40),e.lineWidth-o),l=n||e.flowLevel>-1&&t>=e.flowLevel;function u(d){return bH(e,d)}switch(yH(r,l,e.indent,s,u,e.quotingType,e.forceQuotes&&!n,i)){case B5:return r;case ed:return"'"+r.replace(/'/g,"''")+"'";case O5:return"|"+c5(r,e.indent)+p5(s5(r,o));case N5:return">"+c5(r,e.indent)+p5(s5(wH(r,s),o));case os:return'"'+CH(r)+'"';default:throw new or("impossible error: invalid scalar style")}})()}function c5(e,r){var t=_5(e)?String(r):"",n=e[e.length-1]===`
`,i=n&&(e[e.length-2]===`
`||e===`
`),o=i?"+":n?"":"-";return t+o+`
`}function p5(e){return e[e.length-1]===`
`?e.slice(0,-1):e}function wH(e,r){for(var t=/(\n+)([^\n]*)/g,n=(function(){var d=e.indexOf(`
`);return d=d!==-1?d:e.length,t.lastIndex=d,d5(e.slice(0,d),r)})(),i=e[0]===`
`||e[0]===" ",o,s;s=t.exec(e);){var l=s[1],u=s[2];o=u[0]===" ",n+=l+(!i&&!o&&u!==""?`
`:"")+d5(u,r),i=o}return n}function d5(e,r){if(e===""||e[0]===" ")return e;for(var t=/ [^ ]/g,n,i=0,o,s=0,l=0,u="";n=t.exec(e);)l=n.index,l-i>r&&(o=s>i?s:l,u+=`
`+e.slice(i,o),i=o+1),s=l;return u+=`
`,e.length-i>r&&s>i?u+=e.slice(i,s)+`
`+e.slice(s+1):u+=e.slice(i),u.slice(1)}function CH(e){for(var r="",t=0,n,i=0;i<e.length;t>=65536?i+=2:i++)t=al(e,i),n=St[t],!n&&cl(t)?(r+=e[i],t>=65536&&(r+=e[i+1])):r+=n||fH(t);return r}function AH(e,r,t){var n="",i=e.tag,o,s,l;for(o=0,s=t.length;o<s;o+=1)l=t[o],e.replacer&&(l=e.replacer.call(t,String(o),l)),(wi(e,r,l,!1,!1)||typeof l>"u"&&wi(e,r,null,!1,!1))&&(n!==""&&(n+=","+(e.condenseFlow?"":" ")),n+=e.dump);e.tag=i,e.dump="["+n+"]"}function h5(e,r,t,n){var i="",o=e.tag,s,l,u;for(s=0,l=t.length;s<l;s+=1)u=t[s],e.replacer&&(u=e.replacer.call(t,String(s),u)),(wi(e,r+1,u,!0,!0,!1,!0)||typeof u>"u"&&wi(e,r+1,null,!0,!0,!1,!0))&&((!n||i!=="")&&(i+=Xp(e,r)),e.dump&&ll===e.dump.charCodeAt(0)?i+="-":i+="- ",i+=e.dump);e.tag=o,e.dump=i||"[]"}function kH(e,r,t){var n="",i=e.tag,o=Object.keys(t),s,l,u,d,h;for(s=0,l=o.length;s<l;s+=1)h="",n!==""&&(h+=", "),e.condenseFlow&&(h+='"'),u=o[s],d=t[u],e.replacer&&(d=e.replacer.call(t,u,d)),wi(e,r,u,!1,!1)&&(e.dump.length>1024&&(h+="? "),h+=e.dump+(e.condenseFlow?'"':"")+":"+(e.condenseFlow?"":" "),wi(e,r,d,!1,!1)&&(h+=e.dump,n+=h));e.tag=i,e.dump="{"+n+"}"}function LH(e,r,t,n){var i="",o=e.tag,s=Object.keys(t),l,u,d,h,f,g;if(e.sortKeys===!0)s.sort();else if(typeof e.sortKeys=="function")s.sort(e.sortKeys);else if(e.sortKeys)throw new or("sortKeys must be a boolean or a function");for(l=0,u=s.length;l<u;l+=1)g="",(!n||i!=="")&&(g+=Xp(e,r)),d=s[l],h=t[d],e.replacer&&(h=e.replacer.call(t,d,h)),wi(e,r+1,d,!0,!0,!0)&&(f=e.tag!==null&&e.tag!=="?"||e.dump&&e.dump.length>1024,f&&(e.dump&&ll===e.dump.charCodeAt(0)?g+="?":g+="? "),g+=e.dump,f&&(g+=Xp(e,r)),wi(e,r+1,h,!0,f)&&(e.dump&&ll===e.dump.charCodeAt(0)?g+=":":g+=": ",g+=e.dump,i+=g));e.tag=o,e.dump=i||"{}"}function f5(e,r,t){var n,i,o,s,l,u;for(i=t?e.explicitTypes:e.implicitTypes,o=0,s=i.length;o<s;o+=1)if(l=i[o],(l.instanceOf||l.predicate)&&(!l.instanceOf||typeof r=="object"&&r instanceof l.instanceOf)&&(!l.predicate||l.predicate(r))){if(t?l.multi&&l.representName?e.tag=l.representName(r):e.tag=l.tag:e.tag="?",l.represent){if(u=e.styleMap[l.tag]||l.defaultStyle,M5.call(l.represent)==="[object Function]")n=l.represent(r,u);else if(T5.call(l.represent,u))n=l.represent[u](r,u);else throw new or("!<"+l.tag+'> tag resolver accepts not "'+u+'" style');e.dump=n}return!0}return!1}function wi(e,r,t,n,i,o,s){e.tag=null,e.dump=t,f5(e,t,!1)||f5(e,t,!0);var l=M5.call(e.dump),u=n,d;n&&(n=e.flowLevel<0||e.flowLevel>r);var h=l==="[object Object]"||l==="[object Array]",f,g;if(h&&(f=e.duplicates.indexOf(t),g=f!==-1),(e.tag!==null&&e.tag!=="?"||g||e.indent!==2&&r>0)&&(i=!1),g&&e.usedDuplicates[f])e.dump="*ref_"+f;else{if(h&&g&&!e.usedDuplicates[f]&&(e.usedDuplicates[f]=!0),l==="[object Object]")n&&Object.keys(e.dump).length!==0?(LH(e,r,e.dump,i),g&&(e.dump="&ref_"+f+e.dump)):(kH(e,r,e.dump),g&&(e.dump="&ref_"+f+" "+e.dump));else if(l==="[object Array]")n&&e.dump.length!==0?(e.noArrayIndent&&!s&&r>0?h5(e,r-1,e.dump,i):h5(e,r,e.dump,i),g&&(e.dump="&ref_"+f+e.dump)):(AH(e,r,e.dump),g&&(e.dump="&ref_"+f+" "+e.dump));else if(l==="[object String]")e.tag!=="?"&&EH(e,e.dump,r,o,u);else{if(l==="[object Undefined]")return!1;if(e.skipInvalid)return!1;throw new or("unacceptable kind of an object to dump "+l)}e.tag!==null&&e.tag!=="?"&&(d=encodeURI(e.tag[0]==="!"?e.tag.slice(1):e.tag).replace(/!/g,"%21"),e.tag[0]==="!"?d="!"+d:d.slice(0,18)==="tag:yaml.org,2002:"?d="!!"+d.slice(18):d="!<"+d+">",e.dump=d+" "+e.dump)}return!0}function FH(e,r){var t=[],n=[],i,o;for(td(e,t,n),i=0,o=n.length;i<o;i+=1)r.duplicates.push(t[n[i]]);r.usedDuplicates=new Array(o)}function td(e,r,t){var n,i,o;if(e!==null&&typeof e=="object")if(i=r.indexOf(e),i!==-1)t.indexOf(i)===-1&&t.push(i);else if(r.push(e),Array.isArray(e))for(i=0,o=e.length;i<o;i+=1)td(e[i],r,t);else for(n=Object.keys(e),i=0,o=n.length;i<o;i+=1)td(e[n[i]],r,t)}function SH(e,r){r=r||{};var t=new gH(r);t.noRefs||FH(e,t);var n=e;return t.replacer&&(n=t.replacer.call({"":n},"",n)),wi(t,0,n,!0,!0)?t.dump+`
`:""}var MH=SH,TH={dump:MH};function ad(e,r){return function(){throw new Error("Function yaml."+e+" is removed in js-yaml 4. Use yaml."+r+" instead, which is now safe by default.")}}var V5=S5.load,rQ=S5.loadAll,nQ=TH.dump;var iQ=ad("safeLoad","load"),oQ=ad("safeLoadAll","loadAll"),aQ=ad("safeDump","dump");var hQ=w8(z5(),1);(function(e){function r(t,n){return"___"+t.toUpperCase()+n+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(t,n,i,o){if(t.language===n){var s=t.tokenStack=[];t.code=t.code.replace(i,function(l){if(typeof o=="function"&&!o(l))return l;for(var u=s.length,d;t.code.indexOf(d=r(n,u))!==-1;)++u;return s[u]=l,d}),t.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(t,n){if(t.language!==n||!t.tokenStack)return;t.grammar=e.languages[n];var i=0,o=Object.keys(t.tokenStack);function s(l){for(var u=0;u<l.length&&!(i>=o.length);u++){var d=l[u];if(typeof d=="string"||d.content&&typeof d.content=="string"){var h=o[i],f=t.tokenStack[h],g=typeof d=="string"?d:d.content,b=r(n,h),w=g.indexOf(b);if(w>-1){++i;var v=g.substring(0,w),y=new e.Token(n,e.tokenize(f,t.grammar),"language-"+n,f),E=g.substring(w+b.length),C=[];v&&C.push.apply(C,s([v])),C.push(y),E&&C.push.apply(C,s([E])),typeof d=="string"?l.splice.apply(l,[u,1].concat(C)):d.content=C}}else d.content&&s(d.content)}return l}s(t.tokens)}}})})(Prism);(function(e){var r=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+r.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+r.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+r.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:r,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var t=e.languages.markup;t&&(t.tag.addInlined("style","css"),t.tag.addAttribute("style","css"))})(Prism);Prism.languages.groovy=Prism.languages.extend("clike",{string:[{pattern:/("""|''')(?:[^\\]|\\[\s\S])*?\1|\$\/(?:[^/$]|\$(?:[/$]|(?![/$]))|\/(?!\$))*\/\$/,greedy:!0},{pattern:/(["'/])(?:\\.|(?!\1)[^\\\r\n])*\1/,greedy:!0}],keyword:/\b(?:abstract|as|assert|boolean|break|byte|case|catch|char|class|const|continue|def|default|do|double|else|enum|extends|final|finally|float|for|goto|if|implements|import|in|instanceof|int|interface|long|native|new|package|private|protected|public|return|short|static|strictfp|super|switch|synchronized|this|throw|throws|trait|transient|try|void|volatile|while)\b/,number:/\b(?:0b[01_]+|0x[\da-f_]+(?:\.[\da-f_p\-]+)?|[\d_]+(?:\.[\d_]+)?(?:e[+-]?\d+)?)[glidf]?\b/i,operator:{pattern:/(^|[^.])(?:~|==?~?|\?[.:]?|\*(?:[.=]|\*=?)?|\.[@&]|\.\.<|\.\.(?!\.)|-[-=>]?|\+[+=]?|!=?|<(?:<=?|=>?)?|>(?:>>?=?|=)?|&[&=]?|\|[|=]?|\/=?|\^=?|%=?)/,lookbehind:!0},punctuation:/\.+|[{}[\];(),:$]/});Prism.languages.insertBefore("groovy","string",{shebang:{pattern:/#!.+/,alias:"comment"}});Prism.languages.insertBefore("groovy","punctuation",{"spock-block":/\b(?:and|cleanup|expect|given|setup|then|when|where):/});Prism.languages.insertBefore("groovy","function",{annotation:{pattern:/(^|[^.])@\w+/,lookbehind:!0,alias:"punctuation"}});Prism.hooks.add("wrap",function(e){if(e.language==="groovy"&&e.type==="string"){var r=e.content[0];if(r!="'"){var t=/([^\\])(?:\$(?:\{.*?\}|[\w.]+))/;r==="$"&&(t=/([^\$])(?:\$(?:\{.*?\}|[\w.]+))/),e.content=e.content.replace(/&lt;/g,"<").replace(/&amp;/g,"&"),e.content=Prism.highlight(e.content,{expression:{pattern:t,lookbehind:!0,inside:Prism.languages.groovy}}),e.classes.push(r==="/"?"regex":"gstring")}}});Prism.languages.javascript=Prism.languages.extend("clike",{"class-name":[Prism.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/});Prism.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:Prism.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:Prism.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/});Prism.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}});Prism.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}});Prism.languages.markup&&(Prism.languages.markup.tag.addInlined("script","javascript"),Prism.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript"));Prism.languages.js=Prism.languages.javascript;Prism.languages.json={property:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,lookbehind:!0,greedy:!0},comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}};Prism.languages.webmanifest=Prism.languages.json;(function(e){var r=e.util.clone(e.languages.javascript),t=/(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,n=/(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,i=/(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;function o(u,d){return u=u.replace(/<S>/g,function(){return t}).replace(/<BRACES>/g,function(){return n}).replace(/<SPREAD>/g,function(){return i}),RegExp(u,d)}i=o(i).source,e.languages.jsx=e.languages.extend("markup",r),e.languages.jsx.tag.pattern=o(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source),e.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/,e.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/,e.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,e.languages.jsx.tag.inside.comment=r.comment,e.languages.insertBefore("inside","attr-name",{spread:{pattern:o(/<SPREAD>/.source),inside:e.languages.jsx}},e.languages.jsx.tag),e.languages.insertBefore("inside","special-attr",{script:{pattern:o(/=<BRACES>/.source),alias:"language-javascript",inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:e.languages.jsx}}},e.languages.jsx.tag);var s=function(u){return u?typeof u=="string"?u:typeof u.content=="string"?u.content:u.content.map(s).join(""):""},l=function(u){for(var d=[],h=0;h<u.length;h++){var f=u[h],g=!1;if(typeof f!="string"&&(f.type==="tag"&&f.content[0]&&f.content[0].type==="tag"?f.content[0].content[0].content==="</"?d.length>0&&d[d.length-1].tagName===s(f.content[0].content[1])&&d.pop():f.content[f.content.length-1].content==="/>"||d.push({tagName:s(f.content[0].content[1]),openedBraces:0}):d.length>0&&f.type==="punctuation"&&f.content==="{"?d[d.length-1].openedBraces++:d.length>0&&d[d.length-1].openedBraces>0&&f.type==="punctuation"&&f.content==="}"?d[d.length-1].openedBraces--:g=!0),(g||typeof f=="string")&&d.length>0&&d[d.length-1].openedBraces===0){var b=s(f);h<u.length-1&&(typeof u[h+1]=="string"||u[h+1].type==="plain-text")&&(b+=s(u[h+1]),u.splice(h+1,1)),h>0&&(typeof u[h-1]=="string"||u[h-1].type==="plain-text")&&(b=s(u[h-1])+b,u.splice(h-1,1),h--),u[h]=new e.Token("plain-text",b,null,b)}f.content&&typeof f.content!="string"&&l(f.content)}};e.hooks.add("after-tokenize",function(u){u.language!=="jsx"&&u.language!=="tsx"||l(u.tokens)})})(Prism);(function(e){var r=e.util.clone(e.languages.typescript);e.languages.tsx=e.languages.extend("jsx",r),delete e.languages.tsx.parameter,delete e.languages.tsx["literal-property"];var t=e.languages.tsx.tag;t.pattern=RegExp(/(^|[^\w$]|(?=<\/))/.source+"(?:"+t.pattern.source+")",t.pattern.flags),t.lookbehind=!0})(Prism);(function(e){var r=/\b(?:abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|exports|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|module|native|new|non-sealed|null|open|opens|package|permits|private|protected|provides|public|record|requires|return|sealed|short|static|strictfp|super|switch|synchronized|this|throw|throws|to|transient|transitive|try|uses|var|void|volatile|while|with|yield)\b/,t=/(^|[^\w.])(?:[a-z]\w*\s*\.\s*)*(?:[A-Z]\w*\s*\.\s*)*/.source,n={pattern:RegExp(t+/[A-Z](?:[\d_A-Z]*[a-z]\w*)?\b/.source),lookbehind:!0,inside:{namespace:{pattern:/^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/,inside:{punctuation:/\./}},punctuation:/\./}};e.languages.java=e.languages.extend("clike",{string:{pattern:/(^|[^\\])"(?:\\.|[^"\\\r\n])*"/,lookbehind:!0,greedy:!0},"class-name":[n,{pattern:RegExp(t+/[A-Z]\w*(?=\s+\w+\s*[;,=()])/.source),lookbehind:!0,inside:n.inside}],keyword:r,function:[e.languages.clike.function,{pattern:/(::\s*)[a-z_]\w*/,lookbehind:!0}],number:/\b0b[01][01_]*L?\b|\b0x(?:\.[\da-f_p+-]+|[\da-f_]+(?:\.[\da-f_p+-]+)?)\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,operator:{pattern:/(^|[^.])(?:<<=?|>>>?=?|->|--|\+\+|&&|\|\||::|[?:~]|[-+*/%&|^!=<>]=?)/m,lookbehind:!0}}),e.languages.insertBefore("java","string",{"triple-quoted-string":{pattern:/"""[ \t]*[\r\n](?:(?:"|"")?(?:\\.|[^"\\]))*"""/,greedy:!0,alias:"string"},char:{pattern:/'(?:\\.|[^'\\\r\n]){1,6}'/,greedy:!0}}),e.languages.insertBefore("java","class-name",{annotation:{pattern:/(^|[^.])@\w+(?:\s*\.\s*\w+)*/,lookbehind:!0,alias:"punctuation"},generics:{pattern:/<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&))*>)*>)*>)*>/,inside:{"class-name":n,keyword:r,punctuation:/[<>(),.:]/,operator:/[?&|]/}},namespace:{pattern:RegExp(/(\b(?:exports|import(?:\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\s+)(?!<keyword>)[a-z]\w*(?:\.[a-z]\w*)*\.?/.source.replace(/<keyword>/g,function(){return r.source})),lookbehind:!0,inside:{punctuation:/\./}}})})(Prism);Prism.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]};Prism.languages.markup.tag.inside["attr-value"].inside.entity=Prism.languages.markup.entity;Prism.languages.markup.doctype.inside["internal-subset"].inside=Prism.languages.markup;Prism.hooks.add("wrap",function(e){e.type==="entity"&&(e.attributes.title=e.content.replace(/&amp;/,"&"))});Object.defineProperty(Prism.languages.markup.tag,"addInlined",{value:function(r,t){var n={};n["language-"+t]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:Prism.languages[t]},n.cdata=/^<!\[CDATA\[|\]\]>$/i;var i={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:n}};i["language-"+t]={pattern:/[\s\S]+/,inside:Prism.languages[t]};var o={};o[r]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return r}),"i"),lookbehind:!0,greedy:!0,inside:i},Prism.languages.insertBefore("markup","cdata",o)}});Object.defineProperty(Prism.languages.markup.tag,"addAttribute",{value:function(e,r){Prism.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+e+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[r,"language-"+r],inside:Prism.languages[r]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}});Prism.languages.html=Prism.languages.markup;Prism.languages.mathml=Prism.languages.markup;Prism.languages.svg=Prism.languages.markup;Prism.languages.xml=Prism.languages.extend("markup",{});Prism.languages.ssml=Prism.languages.xml;Prism.languages.atom=Prism.languages.xml;Prism.languages.rss=Prism.languages.xml;(function(e){e.languages.typescript=e.languages.extend("javascript",{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},builtin:/\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/}),e.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/,/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,/\btype\b(?=\s*(?:[\{*]|$))/),delete e.languages.typescript.parameter,delete e.languages.typescript["literal-property"];var r=e.languages.extend("typescript",{});delete r["class-name"],e.languages.typescript["class-name"].inside=r,e.languages.insertBefore("typescript","function",{decorator:{pattern:/@[$\w\xA0-\uFFFF]+/,inside:{at:{pattern:/^@/,alias:"operator"},function:/^[\s\S]+/}},"generic-function":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:r}}}}),e.languages.ts=e.languages.typescript})(Prism);(function(e){e.languages.sass=e.languages.extend("css",{comment:{pattern:/^([ \t]*)\/[\/*].*(?:(?:\r?\n|\r)\1[ \t].+)*/m,lookbehind:!0,greedy:!0}}),e.languages.insertBefore("sass","atrule",{"atrule-line":{pattern:/^(?:[ \t]*)[@+=].+/m,greedy:!0,inside:{atrule:/(?:@[\w-]+|[+=])/}}}),delete e.languages.sass.atrule;var r=/\$[-\w]+|#\{\$[-\w]+\}/,t=[/[+*\/%]|[=!]=|<=?|>=?|\b(?:and|not|or)\b/,{pattern:/(\s)-(?=\s)/,lookbehind:!0}];e.languages.insertBefore("sass","property",{"variable-line":{pattern:/^[ \t]*\$.+/m,greedy:!0,inside:{punctuation:/:/,variable:r,operator:t}},"property-line":{pattern:/^[ \t]*(?:[^:\s]+ *:.*|:[^:\s].*)/m,greedy:!0,inside:{property:[/[^:\s]+(?=\s*:)/,{pattern:/(:)[^:\s]+/,lookbehind:!0}],punctuation:/:/,variable:r,operator:t,important:e.languages.sass.important}}}),delete e.languages.sass.property,delete e.languages.sass.important,e.languages.insertBefore("sass","punctuation",{selector:{pattern:/^([ \t]*)\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*(?:,(?:\r?\n|\r)\1[ \t]+\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*)*/m,lookbehind:!0,greedy:!0}})})(Prism);Prism.languages.scss=Prism.languages.extend("css",{comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,lookbehind:!0},atrule:{pattern:/@[\w-](?:\([^()]+\)|[^()\s]|\s+(?!\s))*?(?=\s+[{;])/,inside:{rule:/@[\w-]+/}},url:/(?:[-a-z]+-)?url(?=\()/i,selector:{pattern:/(?=\S)[^@;{}()]?(?:[^@;{}()\s]|\s+(?!\s)|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}][^:{}]*[:{][^}]))/,inside:{parent:{pattern:/&/,alias:"important"},placeholder:/%[-\w]+/,variable:/\$[-\w]+|#\{\$[-\w]+\}/}},property:{pattern:/(?:[-\w]|\$[-\w]|#\{\$[-\w]+\})+(?=\s*:)/,inside:{variable:/\$[-\w]+|#\{\$[-\w]+\}/}}});Prism.languages.insertBefore("scss","atrule",{keyword:[/@(?:content|debug|each|else(?: if)?|extend|for|forward|function|if|import|include|mixin|return|use|warn|while)\b/i,{pattern:/( )(?:from|through)(?= )/,lookbehind:!0}]});Prism.languages.insertBefore("scss","important",{variable:/\$[-\w]+|#\{\$[-\w]+\}/});Prism.languages.insertBefore("scss","function",{"module-modifier":{pattern:/\b(?:as|hide|show|with)\b/i,alias:"keyword"},placeholder:{pattern:/%[-\w]+/,alias:"selector"},statement:{pattern:/\B!(?:default|optional)\b/i,alias:"keyword"},boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"},operator:{pattern:/(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|not|or)(?=\s)/,lookbehind:!0}});Prism.languages.scss.atrule.inside.rest=Prism.languages.scss;(function(e){var r=/[*&][^\s[\]{},]+/,t=/!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,n="(?:"+t.source+"(?:[ 	]+"+r.source+")?|"+r.source+"(?:[ 	]+"+t.source+")?)",i=/(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g,function(){return/[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source}),o=/"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;function s(l,u){u=(u||"").replace(/m/g,"")+"m";var d=/([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g,function(){return n}).replace(/<<value>>/g,function(){return l});return RegExp(d,u)}e.languages.yaml={scalar:{pattern:RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g,function(){return n})),lookbehind:!0,alias:"string"},comment:/#.*/,key:{pattern:RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source.replace(/<<prop>>/g,function(){return n}).replace(/<<key>>/g,function(){return"(?:"+i+"|"+o+")"})),lookbehind:!0,greedy:!0,alias:"atrule"},directive:{pattern:/(^[ \t]*)%.+/m,lookbehind:!0,alias:"important"},datetime:{pattern:s(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source),lookbehind:!0,alias:"number"},boolean:{pattern:s(/false|true/.source,"i"),lookbehind:!0,alias:"important"},null:{pattern:s(/null|~/.source,"i"),lookbehind:!0,alias:"important"},string:{pattern:s(o),lookbehind:!0,greedy:!0},number:{pattern:s(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source,"i"),lookbehind:!0},tag:t,important:r,punctuation:/---|[:[\]{}\-,|>?]|\.\.\./},e.languages.yml=e.languages.yaml})(Prism);(function(e){var r=/\/\*[\s\S]*?\*\/|\/\/.*|#(?!\[).*/,t=[{pattern:/\b(?:false|true)\b/i,alias:"boolean"},{pattern:/(::\s*)\b[a-z_]\w*\b(?!\s*\()/i,greedy:!0,lookbehind:!0},{pattern:/(\b(?:case|const)\s+)\b[a-z_]\w*(?=\s*[;=])/i,greedy:!0,lookbehind:!0},/\b(?:null)\b/i,/\b[A-Z_][A-Z0-9_]*\b(?!\s*\()/],n=/\b0b[01]+(?:_[01]+)*\b|\b0o[0-7]+(?:_[0-7]+)*\b|\b0x[\da-f]+(?:_[\da-f]+)*\b|(?:\b\d+(?:_\d+)*\.?(?:\d+(?:_\d+)*)?|\B\.\d+)(?:e[+-]?\d+)?/i,i=/<?=>|\?\?=?|\.{3}|\??->|[!=]=?=?|::|\*\*=?|--|\+\+|&&|\|\||<<|>>|[?~]|[/^|%*&<>.+-]=?/,o=/[{}\[\](),:;]/;e.languages.php={delimiter:{pattern:/\?>$|^<\?(?:php(?=\s)|=)?/i,alias:"important"},comment:r,variable:/\$+(?:\w+\b|(?=\{))/,package:{pattern:/(namespace\s+|use\s+(?:function\s+)?)(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,lookbehind:!0,inside:{punctuation:/\\/}},"class-name-definition":{pattern:/(\b(?:class|enum|interface|trait)\s+)\b[a-z_]\w*(?!\\)\b/i,lookbehind:!0,alias:"class-name"},"function-definition":{pattern:/(\bfunction\s+)[a-z_]\w*(?=\s*\()/i,lookbehind:!0,alias:"function"},keyword:[{pattern:/(\(\s*)\b(?:array|bool|boolean|float|int|integer|object|string)\b(?=\s*\))/i,alias:"type-casting",greedy:!0,lookbehind:!0},{pattern:/([(,?]\s*)\b(?:array(?!\s*\()|bool|callable|(?:false|null)(?=\s*\|)|float|int|iterable|mixed|object|self|static|string)\b(?=\s*\$)/i,alias:"type-hint",greedy:!0,lookbehind:!0},{pattern:/(\)\s*:\s*(?:\?\s*)?)\b(?:array(?!\s*\()|bool|callable|(?:false|null)(?=\s*\|)|float|int|iterable|mixed|object|self|static|string|void)\b/i,alias:"return-type",greedy:!0,lookbehind:!0},{pattern:/\b(?:array(?!\s*\()|bool|float|int|iterable|mixed|object|string|void)\b/i,alias:"type-declaration",greedy:!0},{pattern:/(\|\s*)(?:false|null)\b|\b(?:false|null)(?=\s*\|)/i,alias:"type-declaration",greedy:!0,lookbehind:!0},{pattern:/\b(?:parent|self|static)(?=\s*::)/i,alias:"static-context",greedy:!0},{pattern:/(\byield\s+)from\b/i,lookbehind:!0},/\bclass\b/i,{pattern:/((?:^|[^\s>:]|(?:^|[^-])>|(?:^|[^:]):)\s*)\b(?:abstract|and|array|as|break|callable|case|catch|clone|const|continue|declare|default|die|do|echo|else|elseif|empty|enddeclare|endfor|endforeach|endif|endswitch|endwhile|enum|eval|exit|extends|final|finally|fn|for|foreach|function|global|goto|if|implements|include|include_once|instanceof|insteadof|interface|isset|list|match|namespace|new|or|parent|print|private|protected|public|require|require_once|return|self|static|switch|throw|trait|try|unset|use|var|while|xor|yield|__halt_compiler)\b/i,lookbehind:!0}],"argument-name":{pattern:/([(,]\s+)\b[a-z_]\w*(?=\s*:(?!:))/i,lookbehind:!0},"class-name":[{pattern:/(\b(?:extends|implements|instanceof|new(?!\s+self|\s+static))\s+|\bcatch\s*\()\b[a-z_]\w*(?!\\)\b/i,greedy:!0,lookbehind:!0},{pattern:/(\|\s*)\b[a-z_]\w*(?!\\)\b/i,greedy:!0,lookbehind:!0},{pattern:/\b[a-z_]\w*(?!\\)\b(?=\s*\|)/i,greedy:!0},{pattern:/(\|\s*)(?:\\?\b[a-z_]\w*)+\b/i,alias:"class-name-fully-qualified",greedy:!0,lookbehind:!0,inside:{punctuation:/\\/}},{pattern:/(?:\\?\b[a-z_]\w*)+\b(?=\s*\|)/i,alias:"class-name-fully-qualified",greedy:!0,inside:{punctuation:/\\/}},{pattern:/(\b(?:extends|implements|instanceof|new(?!\s+self\b|\s+static\b))\s+|\bcatch\s*\()(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,alias:"class-name-fully-qualified",greedy:!0,lookbehind:!0,inside:{punctuation:/\\/}},{pattern:/\b[a-z_]\w*(?=\s*\$)/i,alias:"type-declaration",greedy:!0},{pattern:/(?:\\?\b[a-z_]\w*)+(?=\s*\$)/i,alias:["class-name-fully-qualified","type-declaration"],greedy:!0,inside:{punctuation:/\\/}},{pattern:/\b[a-z_]\w*(?=\s*::)/i,alias:"static-context",greedy:!0},{pattern:/(?:\\?\b[a-z_]\w*)+(?=\s*::)/i,alias:["class-name-fully-qualified","static-context"],greedy:!0,inside:{punctuation:/\\/}},{pattern:/([(,?]\s*)[a-z_]\w*(?=\s*\$)/i,alias:"type-hint",greedy:!0,lookbehind:!0},{pattern:/([(,?]\s*)(?:\\?\b[a-z_]\w*)+(?=\s*\$)/i,alias:["class-name-fully-qualified","type-hint"],greedy:!0,lookbehind:!0,inside:{punctuation:/\\/}},{pattern:/(\)\s*:\s*(?:\?\s*)?)\b[a-z_]\w*(?!\\)\b/i,alias:"return-type",greedy:!0,lookbehind:!0},{pattern:/(\)\s*:\s*(?:\?\s*)?)(?:\\?\b[a-z_]\w*)+\b(?!\\)/i,alias:["class-name-fully-qualified","return-type"],greedy:!0,lookbehind:!0,inside:{punctuation:/\\/}}],constant:t,function:{pattern:/(^|[^\\\w])\\?[a-z_](?:[\w\\]*\w)?(?=\s*\()/i,lookbehind:!0,inside:{punctuation:/\\/}},property:{pattern:/(->\s*)\w+/,lookbehind:!0},number:n,operator:i,punctuation:o};var s={pattern:/\{\$(?:\{(?:\{[^{}]+\}|[^{}]+)\}|[^{}])+\}|(^|[^\\{])\$+(?:\w+(?:\[[^\r\n\[\]]+\]|->\w+)?)/,lookbehind:!0,inside:e.languages.php},l=[{pattern:/<<<'([^']+)'[\r\n](?:.*[\r\n])*?\1;/,alias:"nowdoc-string",greedy:!0,inside:{delimiter:{pattern:/^<<<'[^']+'|[a-z_]\w*;$/i,alias:"symbol",inside:{punctuation:/^<<<'?|[';]$/}}}},{pattern:/<<<(?:"([^"]+)"[\r\n](?:.*[\r\n])*?\1;|([a-z_]\w*)[\r\n](?:.*[\r\n])*?\2;)/i,alias:"heredoc-string",greedy:!0,inside:{delimiter:{pattern:/^<<<(?:"[^"]+"|[a-z_]\w*)|[a-z_]\w*;$/i,alias:"symbol",inside:{punctuation:/^<<<"?|[";]$/}},interpolation:s}},{pattern:/`(?:\\[\s\S]|[^\\`])*`/,alias:"backtick-quoted-string",greedy:!0},{pattern:/'(?:\\[\s\S]|[^\\'])*'/,alias:"single-quoted-string",greedy:!0},{pattern:/"(?:\\[\s\S]|[^\\"])*"/,alias:"double-quoted-string",greedy:!0,inside:{interpolation:s}}];e.languages.insertBefore("php","variable",{string:l,attribute:{pattern:/#\[(?:[^"'\/#]|\/(?![*/])|\/\/.*$|#(?!\[).*$|\/\*(?:[^*]|\*(?!\/))*\*\/|"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*')+\](?=\s*[a-z$#])/im,greedy:!0,inside:{"attribute-content":{pattern:/^(#\[)[\s\S]+(?=\]$)/,lookbehind:!0,inside:{comment:r,string:l,"attribute-class-name":[{pattern:/([^:]|^)\b[a-z_]\w*(?!\\)\b/i,alias:"class-name",greedy:!0,lookbehind:!0},{pattern:/([^:]|^)(?:\\?\b[a-z_]\w*)+/i,alias:["class-name","class-name-fully-qualified"],greedy:!0,lookbehind:!0,inside:{punctuation:/\\/}}],constant:t,number:n,operator:i,punctuation:o}},delimiter:{pattern:/^#\[|\]$/,alias:"punctuation"}}}}),e.hooks.add("before-tokenize",function(u){if(/<\?/.test(u.code)){var d=/<\?(?:[^"'/#]|\/(?![*/])|("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|(?:\/\/|#(?!\[))(?:[^?\n\r]|\?(?!>))*(?=$|\?>|[\r\n])|#\[|\/\*(?:[^*]|\*(?!\/))*(?:\*\/|$))*?(?:\?>|$)/g;e.languages["markup-templating"].buildPlaceholders(u,"php",d)}}),e.hooks.add("after-tokenize",function(u){e.languages["markup-templating"].tokenizePlaceholders(u,"php")})})(Prism);(function(e){var r="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",t={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},n={bash:t,environment:{pattern:RegExp("\\$"+r),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+r),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};e.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+r),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:n},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:t}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:n},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:n.entity}}],environment:{pattern:RegExp("\\$?"+r),alias:"constant"},variable:n.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},t.inside=e.languages.bash;for(var i=["comment","function-name","for-or-select","assign-left","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],o=n.variable[1].inside,s=0;s<i.length;s++)o[i[s]]=e.languages.bash[i[s]];e.languages.shell=e.languages.bash})(Prism);(function(e){var r=/(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;function t(h){return h=h.replace(/<inner>/g,function(){return r}),RegExp(/((?:^|[^\\])(?:\\{2})*)/.source+"(?:"+h+")")}var n=/(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/.source,i=/\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(/__/g,function(){return n}),o=/\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/.source;e.languages.markdown=e.languages.extend("markup",{}),e.languages.insertBefore("markdown","prolog",{"front-matter-block":{pattern:/(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,lookbehind:!0,greedy:!0,inside:{punctuation:/^---|---$/,"front-matter":{pattern:/\S+(?:\s+\S+)*/,alias:["yaml","language-yaml"],inside:e.languages.yaml}}},blockquote:{pattern:/^>(?:[\t ]*>)*/m,alias:"punctuation"},table:{pattern:RegExp("^"+i+o+"(?:"+i+")*","m"),inside:{"table-data-rows":{pattern:RegExp("^("+i+o+")(?:"+i+")*$"),lookbehind:!0,inside:{"table-data":{pattern:RegExp(n),inside:e.languages.markdown},punctuation:/\|/}},"table-line":{pattern:RegExp("^("+i+")"+o+"$"),lookbehind:!0,inside:{punctuation:/\||:?-{3,}:?/}},"table-header-row":{pattern:RegExp("^"+i+"$"),inside:{"table-header":{pattern:RegExp(n),alias:"important",inside:e.languages.markdown},punctuation:/\|/}}}},code:[{pattern:/((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,lookbehind:!0,alias:"keyword"},{pattern:/^```[\s\S]*?^```$/m,greedy:!0,inside:{"code-block":{pattern:/^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,lookbehind:!0},"code-language":{pattern:/^(```).+/,lookbehind:!0},punctuation:/```/}}],title:[{pattern:/\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,alias:"important",inside:{punctuation:/==+$|--+$/}},{pattern:/(^\s*)#.+/m,lookbehind:!0,alias:"important",inside:{punctuation:/^#+|#+$/}}],hr:{pattern:/(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,lookbehind:!0,alias:"punctuation"},list:{pattern:/(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,lookbehind:!0,alias:"punctuation"},"url-reference":{pattern:/!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,inside:{variable:{pattern:/^(!?\[)[^\]]+/,lookbehind:!0},string:/(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,punctuation:/^[\[\]!:]|[<>]/},alias:"url"},bold:{pattern:t(/\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^..)[\s\S]+(?=..$)/,lookbehind:!0,inside:{}},punctuation:/\*\*|__/}},italic:{pattern:t(/\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^.)[\s\S]+(?=.$)/,lookbehind:!0,inside:{}},punctuation:/[*_]/}},strike:{pattern:t(/(~~?)(?:(?!~)<inner>)+\2/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^~~?)[\s\S]+(?=\1$)/,lookbehind:!0,inside:{}},punctuation:/~~?/}},"code-snippet":{pattern:/(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,lookbehind:!0,greedy:!0,alias:["code","keyword"]},url:{pattern:t(/!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/.source),lookbehind:!0,greedy:!0,inside:{operator:/^!/,content:{pattern:/(^\[)[^\]]+(?=\])/,lookbehind:!0,inside:{}},variable:{pattern:/(^\][ \t]?\[)[^\]]+(?=\]$)/,lookbehind:!0},url:{pattern:/(^\]\()[^\s)]+/,lookbehind:!0},string:{pattern:/(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,lookbehind:!0}}}}),["url","bold","italic","strike"].forEach(function(h){["url","bold","italic","strike","code-snippet"].forEach(function(f){h!==f&&(e.languages.markdown[h].inside.content.inside[f]=e.languages.markdown[f])})}),e.hooks.add("after-tokenize",function(h){if(h.language!=="markdown"&&h.language!=="md")return;function f(g){if(!(!g||typeof g=="string"))for(var b=0,w=g.length;b<w;b++){var v=g[b];if(v.type!=="code"){f(v.content);continue}var y=v.content[1],E=v.content[3];if(y&&E&&y.type==="code-language"&&E.type==="code-block"&&typeof y.content=="string"){var C=y.content.replace(/\b#/g,"sharp").replace(/\b\+\+/g,"pp");C=(/[a-z][\w-]*/i.exec(C)||[""])[0].toLowerCase();var S="language-"+C;E.alias?typeof E.alias=="string"?E.alias=[E.alias,S]:E.alias.push(S):E.alias=[S]}}}f(h.tokens)}),e.hooks.add("wrap",function(h){if(h.type==="code-block"){for(var f="",g=0,b=h.classes.length;g<b;g++){var w=h.classes[g],v=/language-(.+)/.exec(w);if(v){f=v[1];break}}var y=e.languages[f];if(y)h.content=e.highlight(d(h.content),y,f);else if(f&&f!=="none"&&e.plugins.autoloader){var E="md-"+new Date().valueOf()+"-"+Math.floor(Math.random()*1e16);h.attributes.id=E,e.plugins.autoloader.loadLanguages(f,function(){var C=document.getElementById(E);C&&(C.innerHTML=e.highlight(C.textContent,e.languages[f],f))})}}});var s=RegExp(e.languages.markup.tag.pattern.source,"gi"),l={amp:"&",lt:"<",gt:">",quot:'"'},u=String.fromCodePoint||String.fromCharCode;function d(h){var f=h.replace(s,"");return f=f.replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi,function(g,b){if(b=b.toLowerCase(),b[0]==="#"){var w;return b[1]==="x"?w=parseInt(b.slice(2),16):w=Number(b.slice(1)),u(w)}else{var v=l[b];return v||g}}),f}e.languages.md=e.languages.markdown})(Prism);var j5='<div part="content"></div>';var Y5=`:host {\r
  display: contents;\r
  color: #453C4F;\r
}\r
\r
[part=content] {\r
  display: contents;\r
}\r
\r
h1 {\r
  font-size: 2rem;\r
  margin-top: 1rem;\r
  margin-bottom: 0.75rem;\r
}\r
\r
h2 {\r
  font-size: 1.75rem;\r
  margin-top: 2rem;\r
  margin-bottom: 0.75rem;\r
}\r
\r
h2 + p {\r
  margin-top: 0.75rem;\r
}\r
\r
h3 {\r
  font-size: 1.5rem;\r
  margin-top: 1.5rem;\r
  margin-bottom: 0.5rem;\r
}\r
\r
h4 {\r
  font-size: 1.25rem;\r
  margin-top: 1.5rem;\r
  margin-bottom: 0.5rem;\r
}\r
\r
blockquote {\r
  border-left: 4px solid #453C4F;\r
  padding: 0.25rem 0.5rem;\r
  margin: 1rem 0;\r
}\r
\r
blockquote p:first-child {\r
  margin-top: 0;\r
}\r
\r
blockquote p:last-child {\r
  margin-bottom: 0;\r
}\r
\r
blockquote.note {\r
  background: #FFFF88;\r
  color: rgba(0, 0, 0, 0.8);\r
  border-color: rgba(0, 0, 0, 0.3);\r
  border-top: 1px solid rgba(0, 0, 0, 0.2);\r
  border-right: 1px solid rgba(0, 0, 0, 0.2);\r
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);\r
  border-radius: 0.25rem;\r
}\r
\r
blockquote.warning {\r
  background: #fff3cd;\r
  color: #856404;\r
  border-color: #856404;\r
  border-top: 1px solid #ffeeba;\r
  border-right: 1px solid #ffeeba;\r
  border-bottom: 1px solid #ffeeba;\r
  border-radius: 0.25rem;\r
}\r
\r
blockquote.good,\r
blockquote.success {\r
  background: #d4edda;\r
  color: #155724;\r
  border-color: #155724;\r
  border-top: 1px solid #c3e6cb;\r
  border-right: 1px solid #c3e6cb;\r
  border-bottom: 1px solid #c3e6cb;\r
  border-radius: 0.25rem;\r
}\r
\r
blockquote.bad,\r
blockquote.danger,\r
blockquote.alert {\r
  background: #f8d7da;\r
  color: #721c24;\r
  border-color: #721c24;\r
  border-top: 1px solid #f5c6cb;\r
  border-right: 1px solid #f5c6cb;\r
  border-bottom: 1px solid #f5c6cb;\r
  border-radius: 0.25rem;\r
}\r
\r
blockquote.information,\r
blockquote.attention {\r
  background: #cfe2ff;\r
  color: #073984;\r
  border-color: #073984;\r
  border-top: 1px solid #bbd6fe;\r
  border-right: 1px solid #bbd6fe;\r
  border-bottom: 1px solid #bbd6fe;\r
  border-radius: 0.25rem;\r
}\r
\r
pre {\r
  background: #222;\r
  padding: 0.75rem;\r
  border-radius: 0.25rem;\r
  color: #EEE;\r
  overflow: auto;\r
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1) inset;\r
}\r
\r
table {\r
  border-radius: 0.25rem;\r
  border-spacing: 0;\r
  margin: 1rem 0;\r
}\r
table tr th {\r
  text-align: left;\r
  padding: 0.125rem 0.25rem;\r
}\r
table tr td {\r
  padding: 0.125rem 0.25rem;\r
}\r
table tr:nth-child(1) td {\r
  border-top: 1px solid #453C4F;\r
}\r
table tr:nth-child(1) td:first-child {\r
  border-radius: 0.25rem 0 0 0;\r
}\r
table tr:nth-child(1) td:last-child {\r
  border-radius: 0 0.25rem 0 0;\r
}\r
table tr td:first-child {\r
  border-left: 1px solid #453C4F;\r
}\r
table tr:last-child td {\r
  border-bottom: 1px solid #453C4F;\r
}\r
table tr td:last-child {\r
  border-right: 1px solid #453C4F;\r
}\r
table tr:last-child td:first-child {\r
  border-radius: 0 0 0 0.25rem;\r
}\r
table tr:last-child td:last-child {\r
  border-radius: 0 0 0.25rem 0;\r
}\r
table tr:nth-child(even) {\r
  background: rgba(0, 0, 0, 0.05);\r
}\r
table tr td:nth-child(even) {\r
  background: rgba(0, 0, 0, 0.05);\r
}\r
\r
p {\r
  font-size: 1.125rem;\r
  line-height: 1.75rem;\r
  margin: 1rem 0;\r
}\r
\r
img {\r
  border: 0.25rem solid var(--pg-markdown-img-border-color, #453C4F);\r
  border-radius: 0.25rem;\r
}\r
\r
a {\r
  color: #278eca;\r
}\r
\r
[part=content] > ul,\r
.tab-content > ul {\r
  list-style: square;\r
  padding-left: 2rem;\r
  line-height: 1.75rem;\r
}\r
\r
[part=content] > ul > li > ul,\r
.tab-content > ul > li > ul {\r
  list-style: square;\r
  padding-left: 1.25rem;\r
  line-height: 1.75rem;\r
}\r
\r
dl dd {\r
  margin-left: 2rem;\r
}\r
\r
[part=content] > p code,\r
[part=content] > ul code,\r
[part=content] > table code,\r
.tab-content > p code,\r
.tab-content > ul code,\r
.tab-content > table code{\r
  display: inline-block;\r
  background: rgba(0, 0, 0, 0.05);\r
  padding: 0.125rem 0.25rem;\r
  border-radius: 0.125rem;\r
  text-shadow: 0 1px 1px rgba(255, 255, 255, 0.5);\r
  border: 1px solid rgba(69, 60, 79, 0.2);\r
  line-height: 1.125rem;\r
}\r
\r
[part=content] > p a > code,\r
[part=content] > ul a > code,\r
[part=content] > table a > code,\r
.tab-content > p a > code,\r
.tab-content > ul a > code,\r
.tab-content > table a > code {\r
  text-decoration: none;\r
}\r
\r
[part=content] > p a:hover > code,\r
[part=content] > ul a:hover > code,\r
[part=content] > table a:hover > code,\r
.tab-content > p a:hover > code,\r
.tab-content > ul a:hover > code,\r
.tab-content > table a:hover > code {\r
  border-color: #278eca;\r
}\r
\r
table code {\r
  transform: translateY(-1px);\r
}\r
\r
h1 > code,\r
h2 > code,\r
h3 > code,\r
h4 > code,\r
h5 > code {\r
  border: 1px solid #DDD;\r
  padding: 0.25rem 0.5rem;\r
  border-radius: 0.5rem;\r
  background: #F1F1F1;\r
}\r
\r
p > svg.icon,\r
blockquote > svg.icon,\r
p > a.icon > svg.icon,\r
blockquote > a.icon > svg.icon,\r
th > svg.icon,\r
th > a.icon > svg.icon,\r
td > svg.icon,\r
td > a.icon > svg.icon {\r
  width: 1.5rem;\r
  height: 1.5rem;\r
  vertical-align: middle;\r
}\r
\r
p > a.button {\r
  display: inline-flex;\r
  padding: 0.25rem 0.5rem;\r
  background: transparent;\r
  border-radius: 0.25rem;\r
  color: #fff;\r
  text-decoration: none;\r
  font-size: 1rem;\r
  color: var(--pg-markdown-button-color, #453C4F);\r
  border: 1px solid var(--pg-markdown-button-color, #453C4F);\r
}\r
\r
p > a.button:hover {\r
  background: var(--pg-markdown-button-hover-background, #453C4F);\r
  color: var(--pg-markdown-button-hover-color, #fff);\r
}\r
\r
p > a.button:active {\r
  box-shadow: 0 1px 0.25rem rgba(0, 0, 0, 0.4) inset;\r
}\r
\r
p > a.button > svg.icon {\r
  width: 1.5rem;\r
  height: 1.5rem;\r
  margin-left: -0.125rem;\r
  margin-right: 0.25rem;\r
  align-self: center;\r
}\r
\r
/* PrismJS 1.15.0\r
/**\r
 * prism.js Visual Studio Code Theme\r
 * @author Visual Studio Code\r
 */\r
\r
code[class*="language-"],\r
pre[class*="language-"] {\r
  color: #9CDCFE;\r
  background: none;\r
  font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;\r
  text-align: left;\r
  white-space: pre;\r
  word-spacing: normal;\r
  word-break: normal;\r
  word-wrap: normal;\r
  line-height: 1.5;\r
\r
  -moz-tab-size: 4;\r
  -o-tab-size: 4;\r
  tab-size: 4;\r
\r
  -webkit-hyphens: none;\r
  -moz-hyphens: none;\r
  -ms-hyphens: none;\r
  hyphens: none;\r
\r
}\r
\r
/* Code blocks */\r
pre[class*="language-"] {\r
  margin: .5em 0;\r
  overflow: auto;\r
}\r
\r
:not(pre) > code[class*="language-"],\r
pre[class*="language-"] {\r
  background: #1E1E1E;\r
}\r
\r
/* Inline code */\r
:not(pre) > code[class*="language-"] {\r
  padding: .1em;\r
  border-radius: .3em;\r
  white-space: normal;\r
}\r
\r
.token.comment,\r
.token.block-comment,\r
.token.prolog,\r
.token.doctype,\r
.token.cdata {\r
  color: #608B4E;\r
}\r
\r
.token.punctuation {\r
  color: #ccc;\r
}\r
\r
.token.tag,\r
.token.namespace,\r
.token.deleted {\r
  color: #4EC9B0;\r
}\r
\r
.token.attr-name {\r
  color: #9CDCFE;\r
}\r
\r
.token.function-name {\r
  color: #6196cc;\r
}\r
\r
.token.boolean {\r
  color: #569CD6;\r
}\r
.token.number {\r
  color: #B5CEA8;\r
}\r
.token.function {\r
  color: #DCDCAA;\r
}\r
\r
.token.property,\r
.token.constant,\r
.token.symbol {\r
  color: #f8c555;\r
}\r
\r
.token.class-name {\r
  color: #4EC9B0;\r
}\r
\r
.token.selector,\r
.token.important,\r
.token.atrule,\r
.token.keyword,\r
.token.builtin {\r
  color: #C586C0;\r
}\r
\r
.token.string,\r
.token.char,\r
.token.attr-value,\r
.token.regex,\r
.token.variable {\r
  color: #CE9169;\r
}\r
\r
.token.operator {\r
  color: #D4D4D4;\r
}\r
.token.entity,\r
.token.url {\r
  color: #67cdcc;\r
}\r
\r
.token.important,\r
.token.bold {\r
  font-weight: bold;\r
}\r
.token.italic {\r
  font-style: italic;\r
}\r
\r
.token.entity {\r
  cursor: help;\r
}\r
\r
.token.inserted {\r
  color: green;\r
}\r
/* TypeScript */\r
.language-jsx .token:not(.keyword) + .token.keyword + .token.keyword + .token.keyword,\r
.language-jsx .token:not(.keyword) + .token.keyword + .token.keyword + .token.keyword + .token.class-name + .token.keyword,\r
.language-jsx .token.function-variable.function + .token.operator + .token.keyword {\r
  color: #569CD6;\r
}\r
/* JSX */\r
.language-jsx .language-javascript {\r
  color: #9CDCFE;\r
}\r
.language-jsx .language-javascript .token.string {\r
  color: #CE9169;\r
}\r
.language-jsx .language-javascript .token.punctuation {\r
  color: #3F9CD6;\r
}\r
.language-jsx .language-javascript .script-punctuation + .token.punctuation + .token.punctuation {\r
  color: #D4D4D4;\r
}\r
.language-jsx .language-javascript .script-punctuation + .token.punctuation + .token.punctuation ~ .token.punctuation {\r
  color: #D4D4D4;\r
}\r
.language-jsx .language-javascript .script-punctuation + .token.punctuation + .token.punctuation ~ .token.punctuation + .token.punctuation {\r
  color: #3F9CD6;\r
}\r
\r
/* Fancy Language Labels */\r
\r
pre {\r
  position: relative;\r
  font-size: 0.875rem;\r
}\r
\r
pre code:not([class]) {\r
  font-size: 0.875rem;\r
}\r
\r
pre.language-text::before {\r
  content: 'Text';\r
}\r
pre.language-html::before {\r
  content: 'HTML';\r
}\r
pre.language-typescript::before {\r
  content: 'TypeScript';\r
}\r
pre.language-javascript::before {\r
  content: 'JavaScript';\r
}\r
pre.language-jsx::before {\r
  content: 'JavaScript / JSX';\r
}\r
pre.language-tsx::before {\r
  content: 'TypeScript / TSX';\r
}\r
pre.language-xml::before {\r
  content: 'XML';\r
}\r
pre.language-css::before {\r
  content: 'CSS';\r
}\r
pre.language-scss::before {\r
  content: 'SCSS';\r
}\r
pre.language-php::before {\r
  content: 'PHP';\r
}\r
pre.language-yaml::before {\r
  content: 'YAML';\r
}\r
pre.language-groovy::before {\r
  content: 'Groovy';\r
}\r
\r
pre.language-text::before,\r
pre.language-html::before,\r
pre.language-typescript::before,\r
pre.language-javascript::before,\r
pre.language-tsx::before,\r
pre.language-jsx::before,\r
pre.language-xml::before,\r
pre.language-css::before,\r
pre.language-scss::before,\r
pre.language-php::before,\r
pre.language-yaml::before,\r
pre.language-groovy::before {\r
  display: var(--pg-markdown-language-display, 'block');\r
  font-size: 12px;\r
  border-radius: 0 0 0 4px;\r
  position: absolute;\r
  top: 0;\r
  right: 0;\r
  color: #453C4F;\r
  background: #FFF;\r
  padding: 2px 4px 2px 6px;\r
  pointer-events: none;\r
  border-bottom: 1px solid #000;\r
  border-left: 1px solid #000;\r
}\r
\r
/* YAML */\r
div.yaml + pre.language-yaml {\r
  margin-top: 0;\r
}\r
.yaml-preview {\r
  position: relative;\r
  background: #1e1e1e;\r
  color: #fff;\r
  padding: 0.75rem 1.25rem;\r
  border-radius: 0.25rem;\r
  margin-bottom: 1rem;\r
}\r
.yaml-preview code {\r
  border: none;\r
  color: #fff;\r
  font-size: 1rem;\r
  padding: 0;\r
}\r
.yaml-preview ul {\r
  list-style: none;\r
  padding-left: 0;\r
  margin-bottom: 0;\r
  margin-top: 0;\r
}\r
.yaml-preview ul li button {\r
  position: relative;\r
  top: 1px;\r
  background: #fff;\r
  color: #444;\r
  border: none;\r
  border-radius: 2px;\r
  padding: 0;\r
  width: 1rem;\r
  line-height: 1rem;\r
  font-weight: bold;\r
  margin-left: -1rem;\r
  margin-right: 0.75rem;\r
  cursor: pointer;\r
}\r
.yaml-preview ul li button:focus {\r
  outline: none;\r
}\r
.yaml-preview ul li button:hover {\r
  color: #000;\r
  background: #f1f1f1;\r
}\r
.yaml-preview ul li ul {\r
  padding-left: 1rem;\r
}\r
.yaml-preview ul li ul > li {\r
  border-left: 1px solid rgba(255, 255, 255, 0.05);\r
  padding-left: 0.5rem;\r
}\r
.yaml-preview ul > li {\r
  border-left: 1px solid transparent;\r
  padding-left: 0.5rem;\r
}\r
.yaml-preview .yaml-end {\r
  padding-left: 0.75rem;\r
}\r
.yaml-preview .yaml-prop {\r
  padding-left: 0.75rem;\r
}\r
.yaml-preview .yaml-type {\r
  color: #9cdcfe;\r
}\r
.yaml-preview .yaml-error {\r
  color: #e91e63;\r
}\r
.yaml-preview .yaml-key {\r
  color: #c586c0;\r
}\r
.yaml-preview .yaml-auth {\r
  width: 1rem;\r
  height: 1rem;\r
  fill: #d7b558;\r
  margin-left: -0.5rem;\r
  margin-right: -0.1rem;\r
  margin-bottom: -0.1rem;\r
}\r
.yaml-preview .yaml-example {\r
  color: #666;\r
}\r
.yaml-preview::before {\r
  content: 'JSON Preview';\r
  font-size: 12px;\r
  border-radius: 0 4px 0 4px;\r
  position: absolute;\r
  top: 0;\r
  right: 0;\r
  color: #453C4F;\r
  background: #fff;\r
  padding: 2px 4px 2px 6px;\r
  pointer-events: none;\r
  border-bottom: 1px solid #000;\r
  border-left: 1px solid #000;\r
}\r
.yaml-toolbar button {\r
  margin-right: 0.25rem;\r
  padding: 0.25rem 0.75rem 0.25rem 0.75rem;\r
  background: #eee;\r
  border: 1px solid #ddd;\r
  color: #444;\r
  border-radius: 0.25rem 0.25rem 0 0;\r
  cursor: pointer;\r
}\r
.yaml-toolbar button:focus {\r
  outline: none;\r
}\r
.yaml-toolbar button:hover {\r
  border-color: #bbb;\r
}\r
.yaml-toolbar button.active {\r
  margin-right: 0.25rem;\r
  padding: 0.25rem 0.75rem 0.25rem 0.75rem;\r
  background: #1e1e1e;\r
  border: 1px solid #1e1e1e;\r
  color: #fff;\r
  border-radius: 0.25rem 0.25rem 0 0;\r
  position: relative;\r
  z-index: 1;\r
  cursor: default;\r
}\r
.yaml-toolbar button.active:focus {\r
  outline: none;\r
}\r
.yaml-show {\r
  margin-top: 0;\r
  border-top-left-radius: 0 !important;\r
}\r
.yaml-hide {\r
  display: none;\r
}\r
\r
/* Tabs */\r
\r
.tabs {\r
  display: grid;\r
  grid-template-rows: calc(2.5rem - 1px) auto;\r
  grid-template-columns: calc(100% - 2rem) 2rem;\r
  box-sizing: border-box;\r
  margin: 1rem 0;\r
}\r
\r
.tabs .tabset {\r
  grid-row: 1;\r
  display: flex;\r
  list-style: none;\r
  padding: 0;\r
  align-self: flex-start;\r
  align-items: flex-start;\r
  margin: 0;\r
  box-sizing: border-box;\r
}\r
\r
.tabs .tab-label,\r
.tabs .tab-title {\r
  display: flex;\r
}\r
\r
.tabs .tab-label {\r
  padding: 0 0.75rem;\r
  font-size: 1.125rem;\r
  font-weight: bold;\r
  line-height: 2.5rem;\r
  border: 1px solid transparent;\r
}\r
\r
.tabs .tab-title {\r
  margin-right: 0.25rem;\r
  position: relative;\r
}\r
\r
.tabs .tab-title a {\r
  display: flex;\r
  line-height: calc(2.5rem - 0.5px);\r
  border-top: 1px solid transparent;\r
  border-right: 1px solid transparent;\r
  border-bottom: 0;\r
  border-left: 1px solid transparent;\r
  border-radius: 0.25rem 0.25rem 0 0;\r
  padding: 0 0.75rem;\r
  text-decoration: none;\r
  color: var(--pg-markdown-tab-border, #453C4F);\r
  align-items: center;\r
  align-content: center;\r
  box-sizing: border-box;\r
}\r
\r
.tabs .tab-title a svg:nth-child(1) {\r
  width: 1.5rem;\r
  margin: -0.25rem;\r
  align-self: center;\r
}\r
\r
.tabs .tab-title a span:nth-child(2) {\r
  margin-left: 0.55rem;\r
}\r
\r
.tabs .tab-title a svg:nth-child(3) {\r
  width: 1.5rem;\r
  margin: -0.25rem;\r
  align-self: center;\r
}\r
\r
.tabs .tab-title:not(.active) a:hover {\r
  border-color: rgba(69, 60, 79, 0.5);\r
}\r
\r
.tabs .tab-title.active a {\r
  border-color: var(--pg-markdown-tab-border, #453C4F);\r
  font-weight: bold;\r
  background: #fff;\r
  cursor: default;\r
  height: calc(2.5rem + 0.5px);\r
}\r
\r
.tabs .tab-title:not(.active):first-child:hover::before {\r
  position: absolute;\r
  top: calc(2.5rem - 1px);\r
  content: ' ';\r
  border-top: 1px solid  var(--pg-markdown-tab-border, #453C4F);\r
  border-left: 1px solid  var(--pg-markdown-tab-border, #453C4F);\r
  height: 0.25rem;\r
  width: 0.25rem;\r
  background: #fff;\r
}\r
\r
.tabs .tab-title.active:first-child::before {\r
  position: absolute;\r
  bottom: -0.25rem;\r
  content: ' ';\r
  border-left: 1px solid  var(--pg-markdown-tab-border, #453C4F);\r
  height: 0.25rem;\r
  width: 0.25rem;\r
  background: #fff;\r
}\r
\r
.tabs .tab-content {\r
  box-sizing: border-box;\r
  grid-row: 2;\r
  grid-column: 1 / span 2;\r
  border: 1px solid var(--pg-markdown-tab-border, #453C4F);\r
  border-radius: 0.25rem;\r
  padding: 1px 1rem;\r
  background: #fff;\r
}\r
\r
.tabs .tab-content > *:nth-child(1) {\r
  margin-top: 1rem;\r
}\r
\r
.tabs .tab-content > *:nth-last-child(1) {\r
  margin-bottom: 1rem;\r
}\r
\r
.tabs .tab-content.has-label {\r
  border-radius: 0.25rem;\r
}\r
\r
.tab-hide {\r
  display: none;\r
}`;var IH=["css","sass","scss","groovy","typescript","javascript","jsx","tsx","java","html","xml","php","bash","json","yaml","markdown"];function RH(e){let r=e.target,n=r.parentNode.querySelector("ul");n.className==="yaml-hide"?(n.className="",r.innerText="-"):(n.className="yaml-hide",r.innerText="+")}function K5(e,r){let t=e.target;t.parentNode.querySelectorAll("button").forEach(l=>l.className=""),t.className="active";let o=t.parentNode.nextElementSibling,s=t.parentNode.parentNode.nextElementSibling;switch(r){case"json":o.className="yaml-preview yaml-show",s.className="language-yaml yaml-hide";break;case"yaml":o.className="yaml-preview yaml-hide",s.className="language-yaml yaml-show";break}}var U5,G5,W5,q5,Q5,Z5,qt;Z5=[k({selector:"pg-markdown",style:Y5,template:j5})];var Tn=class extends(Q5=HTMLElement,q5=[L()],W5=[L()],G5=[L()],U5=[m()],Q5){constructor(){super(...arguments);p(this,"file",a(qt,8,this,"")),a(qt,11,this);p(this,"text",a(qt,12,this,"")),a(qt,15,this);p(this,"replace",a(qt,16,this,[])),a(qt,19,this);p(this,"$content",a(qt,20,this)),a(qt,23,this);p(this,"modifiers",[t=>{let n=t.querySelectorAll('code[class*="language-"]');for(let i=0;i<n.length;i++){let o=n[i],s=o.parentNode;s.classList.add(o.classList.value);let l=o.classList.value.replace("language-","");IH.includes(l)?o.innerHTML=Prism.highlight(o.innerText,Prism.languages[l],l):l!==""&&l!=="text"&&console.error(`Markdown contains a codeblock with "${l}" which is not loaded.`),s.addEventListener("scroll",()=>{s.scrollLeft===0?s.style.removeProperty("--pg-markdown-language-display"):s.style.setProperty("--pg-markdown-language-display","none")})}},t=>{let n=t.querySelectorAll('[data-id="yamlToggle"]');for(let s=0;s<n.length;s++)n[s].addEventListener("click",l=>{RH(l)});let i=t.querySelectorAll('[data-id="yamlTabJson"]');for(let s=0;s<i.length;s++)i[s].addEventListener("click",l=>{K5(l,"json")}),i[s].click();let o=t.querySelectorAll('[data-id="yamlTabYaml"]');for(let s=0;s<o.length;s++)o[s].addEventListener("click",l=>{K5(l,"yaml")})},t=>{let n=t.querySelectorAll(".tabs");for(let i=0;i<n.length;i++){let o=n[i],s=[],l=[],u=o.querySelectorAll(".tab-title a"),d=o.querySelectorAll(".tab-content");for(let h=0;h<u.length;h++)s.push(u[h]),l.push(d[h]);s.forEach((h,f)=>{h.addEventListener("click",g=>{s.forEach((b,w)=>{b.parentNode.classList.toggle("active",f===w)}),l.forEach((b,w)=>{b.classList.toggle("tab-hide",f!==w)}),g.preventDefault()})})}}])}modify(t){this.modifiers.push(t)}async render(t){if(t.file&&this.file&&(this.text=await Jn.asset(this.file)),t.text){let n=new Ei({html:!0}),i=await this.loadContent(this.text),o=n.render(i);this.replace.forEach(s=>{o=o.replace(s.find,s.replace)}),this.$content.innerHTML=o,this.modifiers.forEach(s=>s(this.$content)),this.replace.forEach(s=>{s.render&&s.render(this.$content)}),this.dispatchEvent(new CustomEvent("load",{detail:{$content:this.$content}}))}}async loadFile(t){let n=await Jn.asset(t);return this.loadContent(n)}async loadContent(t){return t=await this.processImports(t),t=await this.processImports(t),t=t.replace(/\r/g,""),t=await this.processRefs(t),t=await this.processRefs(t),t=await this.processRefs(t),t=t.replace(/```yaml\r?\n([\s\S]*?)\r?\n```/g,(n,i)=>this.processYaml(n,i)),t=this.tabs(t),t}tabs(t){var n="";return t.replace(/tabs ?([^\n]+)?\n([\s\S]+?)\n\/tabs/g,(i,o,s)=>{var l=0;n=o?`<li class="tab-label">${o}</li>`:"";var u=s.replace(/tab ([^\n]+)\n([\s\S]+?)\n\/tab/g,(d,h,f)=>{h=h.replace(/^(icon:\w[\w-]*)? ? (.+?) ?(icon:\w.*)?$/,(b,w,v,y)=>`${w||""}<span>${v||""}</span>${y||""}`),n+=[l===0?'<li class="tab-title active">':'<li class="tab-title">','<a href="#" role="tab" aria-selected="true">',h,"</a>","</li>"].join(`
`);let g=[l===0?'<div class="tab-content">':'<div class="tab-content tab-hide">',`
${f.trim()}
`,"</div>"].join(`
`);return l++,g});return['<div class="tabs">','<ul class="tabset">',n,"</ul>",u,"</div>"].join(`
`)})}async processImports(t){let n=[];t.replace(/import:(.*)/g,(o,s)=>(n.push(s),o));let i=await Promise.all(n.map(async(o,s)=>await Jn.asset(o)));return n.forEach((o,s)=>{t=t.replace(`import:${o}`,i[s])}),t}async processRefs(t){let n=[],i=0;t=t.replace(/([ ]*)\$ref: '#([^']+)'/g,(s,l,u)=>(i++,n.push({unique:i,spaces:l,file:u}),console.log(`${s}-${i}`),`${s}-${i}`));let o=await Promise.all(n.map(async s=>await Jn.asset(`/content/${s.file}.yaml`)));return n.forEach((s,l)=>{let d=o[l].split(/\r?\n/).map((h,f)=>`${f===0?"":s.spaces}${h}`).join(`
`);t=t.replace(`$ref: '#${s.file}'-${s.unique}`,d)}),t}processYaml(t,n){let i="";try{let o=V5(n);if(o.type){let s=[];return s.push('<div class="yaml">'),s.push('<div class="yaml-toolbar">'),s.push('<button data-id="yamlTabJson" class="yaml-click">JSON Preview</button>'),s.push('<button data-id="yamlTabYaml" class="">YAML</button>'),s.push("</div>"),s.push('<div class="yaml-preview">'),s.push("<ul>"),this.processYamlRecursive(s,o),s.push("</ul>"),s.push("</div>"),s.push("</div>"),s.push(`\r
\r
`),s.push(t),s.join("")}}catch(o){i=['<div class="alert alert-danger">',"<strong>YAML Error:</strong><br/>",o.message,"</div>",""].join("")+`\r
\r
`}return`${i}${t}`}processYamlRecursive(t,n,i=""){if(n.$ref)t.push('<li><code class="yaml-prop">'),t.push(`<code class="yaml-key">${i}</code>: <code class="yaml-error">$ref: '${n.$ref}'</code> `),t.push('<code class="yaml-example">Too many nested levels</code>'),t.push("</code></li>");else if(n.type)switch(n.type){case"object":let o=i===""?"":`<code class="yaml-key">${i}</code>: `;t.push(`<li><button data-id="yamlToggle">+</button><code>${o}{</code><ul class="d-none">`);for(let l of Object.keys(n.properties))this.processYamlRecursive(t,n.properties[l],l);t.push('</ul><code class="yaml-end">}</code></li>');break;case"array":let s=i===""?"":`<code class="yaml-key">${i}</code>: `;t.push(`<li><button data-id="yamlToggle">+</button><code>${s}[</code><ul class="d-none">`),this.processYamlRecursive(t,n.items),t.push('</ul><code class="yaml-end">]</code></li>');break;case"string":case"integer":case"number":case"boolean":t.push('<li><code class="yaml-prop">'),t.push(`<code class="yaml-key">${i}</code>`),n.auth&&t.push(` <svg width="24" height="24" viewBox="0 0 24 24" class="yaml-auth" title="${n.auth} Access Required"><path d="M12,17C13.1,17 14,16.1 14,15C14,13.89 13.1,13 12,13C10.9,13 10,13.9 10,15C10,16.1 10.9,17 12,17M18,8C19.1,8 20,8.9 20,10V20C20,21.1 19.1,22 18,22H6C4.9,22 4,21.1 4,20V10C4,8.89 4.9,8 6,8H7V6C7,3.24 9.24,1 12,1C14.76,1 17,3.24 17,6V8H18M12,3C10.34,3 9,4.34 9,6V8H15V6C15,4.34 13.66,3 12,3Z" /></svg>`),t.push(": "),t.push(`<code class="yaml-type">${n.type}</code>`),n.example&&t.push(` <code class="yaml-example">${n.example}</code>`),t.push("</code></li>");break;default:t.push(`<li><code class="yaml-prop"><code class="yaml-key">${i}</code>: <code class="yaml-error">Error: Invalid type &quot;${n.type}&quot;.</code></code></li>`)}else t.push(`<li><code class="yaml-prop"><code class="yaml-key">${i}</code>: <code class="yaml-error">Error: No type found.</code></code></li>`)}};qt=A(Q5),c(qt,5,"file",q5,Tn),c(qt,5,"text",W5,Tn),c(qt,5,"replace",G5,Tn),c(qt,5,"$content",U5,Tn),Tn=c(qt,0,"PgMarkdown",Z5,Tn),a(qt,1,Tn);var sd="M16,13V11H21V13H16M14.83,7.76L17.66,4.93L19.07,6.34L16.24,9.17L14.83,7.76M11,16H13V21H11V16M11,3H13V8H11V3M4.93,17.66L7.76,14.83L9.17,16.24L6.34,19.07L4.93,17.66M4.93,6.34L6.34,4.93L9.17,7.76L7.76,9.17L4.93,6.34M8,13H3V11H8V13M19.07,17.66L17.66,19.07L14.83,16.24L16.24,14.83L19.07,17.66Z",P5="M13,14H11V10H13M13,18H11V16H13M1,21H23L12,2L1,21Z",J5={account:"M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"},X5=["# Header 1","","Paragraph text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text","","## Header 2","","Paragraph text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text","","### Header 3","","Paragraph text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text","","#### Header 4","","Paragraph text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text","","Test [`link code`](#) example.","",'<a href="" class="button">icon:account Button</a>',"","- List 1","- List 2","  - List 1 `code`","  - List 2","- List 3 `inline` code","","> Blockquote","","","> **Warning:** Blockquote","","","> **Note:** Blockquote","","","> **Alert:** Blockquote","","> **Attention:** Blockquote","","> **Success:** Blockquote","","> ",">","","```javascript","function foo() {","    // Code","}","```","```typescript","function foo() {","    // Really long item with overlap. test test test test test test test test test test test test test test test test test test","}","```","```markdown","# Header","","Does markdown in markdown work...","```","","```","Nothing","```","","```yaml","type: object","properties:","  id:","    type: string","    format: uuid","  name:","    type: string","    pattern: /$[a-z0-9-]+^/","    example: user","  complex:","    type: object","    properties:","      id:","        type: string","        format: uuid","```","","Tabs without Label","","tabs","tab Tab Title 1","","Anything...","","/tab","tab icon:foo Tab Title 2","","Another tabs `content`.","","/tab","/tabs","","","Tabs with Label","","tabs Label","tab Tab Title 1","","Anything...","","/tab","tab Tab Title 2","","Another tabs `content`.","","/tab","/tabs","","| Header 1             | Header 2 |","|----------------------|----------|","| Row 1... larger size | Row 1    |","| Row 2                | Row 2    |","| Row 3                | Row 3    |","| Row 4                | Row 4    |","","End of document, and `code` blocks also work."].join(`
`);var e4=`<div class="example">
  <pg-markdown part="markdown"></pg-markdown>
</div>`;var t4,r4,n4,us;n4=[k({selector:"x-pg-markdown-basic",template:e4})];var Xo=class extends(r4=HTMLElement,t4=[m()],r4){constructor(){super(...arguments);p(this,"$markdown",a(us,8,this)),a(us,11,this)}connectedCallback(){this.$markdown.replace.push({find:new RegExp("(\\\\mdi|mdi|icon):([a-z0-9-]+):?([#a-z0-9-]+)?","g"),replace:(t,n,i,o)=>{if(n=="\\mdi")return`mdi:${i}`;if(i=="not"||i=="before")return t;let s=o?` style="fill:${o}"`:"";return n==="mdi"?`<a href="icon/${i}"><svg class="icon" data-type="link" viewBox="0 0 24 24"><path data-icon="${i}" fill="currentColor" d="${sd}"${s} /></svg></a>`:`<svg class="icon" data-type="icon" viewBox="0 0 24 24"><path data-icon="${i}" fill="currentColor" d="${sd}"${s} /></svg>`}},{find:new RegExp("<blockquote>([\\s\\S]*?)<\\/blockquote>","g"),replace:t=>{let n=t.match(/<blockquote>\r?\n?<p><strong>([\w ]+):</);if(n){let i=n[1],o=n[1].trim().toLowerCase().replace(/[ _]/g,"-");t=t.replace(new RegExp(`<strong>${i}:</strong> ?`),""),t=t.replace(/^<blockquote/,`<blockquote class="${o}"`)}return t}}),this.$markdown.text=X5,this.$markdown.modify(t=>{for(var n=t.querySelectorAll("[data-icon]"),i=0;i<n.length;i++){var o=n[i];o.setAttribute("d",J5[o.dataset.icon]||P5)}})}};us=A(r4),c(us,5,"$markdown",t4,Xo),Xo=c(us,0,"XPgMarkdownBasic",n4,Xo),a(us,1,Xo);var i4='<div part="divider"></div>';var o4=`:host {\r
  display: contents;\r
}\r
\r
[part=divider] {\r
  margin-top: 0.25rem;\r
  border-top: 1px solid var(--pg-menu-divider-color, rgba(69, 60, 79, 0.5));\r
  margin-bottom: 0.25rem;\r
}\r
`;var a4,s4,l4,u4,Ci;u4=[k({selector:"pg-menu-divider",style:o4,template:i4})];var pt=class extends(l4=HTMLElement,s4=[L()],a4=[m()],l4){constructor(){super(...arguments);p(this,"focusable",a(Ci,8,this,!1)),a(Ci,11,this);p(this,"$divider",a(Ci,12,this)),a(Ci,15,this)}getHeight(){let t=window.getComputedStyle(this.$divider),n=parseFloat(t.marginTop),i=parseFloat(t.marginBottom);return this.$divider.getBoundingClientRect().height+n+i}};Ci=A(l4),c(Ci,5,"focusable",s4,pt),c(Ci,5,"$divider",a4,pt),pt=c(Ci,0,"PgMenuDivider",u4,pt),a(Ci,1,pt);var c4=`<div class="example">
  <pg-menu part="menu"></pg-menu>
  <div>
    Result: <code part="result"></code>
  </div>
</div>`;var p4,d4,h4,f4,Ai,Ru,m4;f4=[k({selector:"x-pg-menu-basic",template:c4})];var bo=class extends(h4=HTMLElement,d4=[m()],p4=[m()],h4){constructor(){super(...arguments);R(this,Ru);p(this,"$menu",a(Ai,8,this)),a(Ai,11,this);p(this,"$result",a(Ai,12,this)),a(Ai,15,this);p(this,"previousItem",null)}connectedCallback(){this.$menu.items=[{label:"Item 1",value:"item1"},{label:"Item 2",value:"item2"},{type:pt},{label:"Item 3",value:"item3",items:[{label:"Item 4",value:"item4"}]}],this.$menu.addEventListener("select",F(this,Ru,m4).bind(this))}};Ai=A(h4),Ru=new WeakSet,m4=function(t){let{item:n}=t.detail;this.previousItem!==null&&(this.previousItem.checked=!1),n.checked=!0,this.previousItem=n,this.$result.textContent=JSON.stringify(t.detail)},c(Ai,5,"$menu",d4,bo),c(Ai,5,"$result",p4,bo),bo=c(Ai,0,"XPgMenuBasic",f4,bo),a(Ai,1,bo);var g4=`<div class="example">
  <pg-menu part="menu"></pg-menu>
</div>`;var b4,v4,x4,cs;x4=[k({selector:"x-pg-menu-divider-basic",template:g4})];var ea=class extends(v4=HTMLElement,b4=[m()],v4){constructor(){super(...arguments);p(this,"$menu",a(cs,8,this)),a(cs,11,this)}connectedCallback(){this.$menu.items=[{label:"Item 1",value:"item1"},{type:pt},{label:"Item 2",value:"item2"}]}};cs=A(v4),c(cs,5,"$menu",b4,ea),ea=c(cs,0,"XPgMenuDividerBasic",x4,ea),a(cs,1,ea);var y4=`<div part="contextMenu">
  <a part="newTab" href="">Open icon in New Tab</a>
  <button part="copyIconName">Copy Icon Name</button>
  <div class="section">Download PNG</div>
  <div class="group">
    <button part="png24">24</button>
    <button part="png36">36</button>
    <button part="png48">48</button>
    <button part="png96">96</button>
  </div>
  <div class="row" style="margin-top: 0.25rem;">
    <div class="group">
      <button part="pngBlack"><span class="black"></span></button>
      <button part="pngWhite"><span class="white"></span></button>
      <button part="pngColor">
        <svg viewBox="0 0 24 24">
          <path fill="#fff" d="M19.35,11.72L17.22,13.85L15.81,12.43L8.1,20.14L3.5,22L2,20.5L3.86,15.9L11.57,8.19L10.15,6.78L12.28,4.65L19.35,11.72M16.76,3C17.93,1.83 19.83,1.83 21,3C22.17,4.17 22.17,6.07 21,7.24L19.08,9.16L14.84,4.92L16.76,3M5.56,17.03L4.5,19.5L6.97,18.44L14.4,11L13,9.6L5.56,17.03Z"/>
          <path fill="currentColor" d="M12.97 8L15.8 10.85L7.67 19L3.71 20.68L3.15 20.11L4.84 16.15L12.97 8Z"/>
        </svg>
      </button>
    </div>
    <div class="group">
      <button part="pngDownload" class="download">
        PNG
        <svg viewBox="0 0 24 24">
          <path fill="currentColor" d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z"/>
        </svg>
      </button>
    </div>
  </div>
  <div class="section">SVG</div>
  <div class="row" style="margin-bottom: 0.25rem;">
    <div class="group">
      <button part="svgBlack" class="active"><span class="black"></span></button>
      <button part="svgWhite"><span class="white"></span></button>
      <button part="svgColor">
        <svg viewBox="0 0 24 24">
          <path fill="#fff" d="M19.35,11.72L17.22,13.85L15.81,12.43L8.1,20.14L3.5,22L2,20.5L3.86,15.9L11.57,8.19L10.15,6.78L12.28,4.65L19.35,11.72M16.76,3C17.93,1.83 19.83,1.83 21,3C22.17,4.17 22.17,6.07 21,7.24L19.08,9.16L14.84,4.92L16.76,3M5.56,17.03L4.5,19.5L6.97,18.44L14.4,11L13,9.6L5.56,17.03Z"/>
          <path fill="currentColor" d="M12.97 8L15.8 10.85L7.67 19L3.71 20.68L3.15 20.11L4.84 16.15L12.97 8Z"/>
        </svg>
      </button>
    </div>
    <div class="group">
      <button part="svgDownload" class="download">
        SVG
        <svg viewBox="0 0 24 24">
          <path fill="currentColor" d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z"/>
        </svg>
      </button>
    </div>
  </div>
  <button part="copySvgInline">Copy HTML SVG Inline</button>
  <button part="copySvgFile">Copy SVG File Contents</button>
  <button part="copySvgPath">Copy SVG Path Data</button>
  <div class="section">Desktop Font</div>
  <button part="copyUnicode">Copy Unicode Character</button>
  <button part="copyCodepoint">Copy Codepoint</button>
  <div class="divider"></div>
  <button part="copyPreview">Copy GitHub Preview</button>
  <div part="color">
    <pg-input-hex-rgb part="colorHexRgb"></pg-input-hex-rgb>
    <pg-color part="colorPicker"></pg-color>
  </div>
</div>`;var E4=`\r
[part~=contextMenu] {\r
  position: relative;\r
  background: #737E9E;\r
  border-radius: 0.25rem;\r
  width: 12rem;\r
  display: flex;\r
  flex-direction: column;\r
  padding: 0.25rem 0;\r
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.3);\r
}\r
\r
[part~=contextMenu] > div.section {\r
  color: #FFF;\r
  font-size: 0.875rem;\r
  padding: 0.25rem 0.5rem;\r
  cursor: default;\r
  font-weight: bold;\r
}\r
\r
[part~=contextMenu] > div.section:not(:first-child) {\r
  border-top: 1px solid rgba(255, 255, 255, 0.3);\r
  margin-top: 0.5rem;\r
}\r
\r
[part~=contextMenu] > div.group {\r
  margin: 0 0.5rem;\r
  border: 1px solid rgba(255, 255, 255, 0.2);\r
  border-radius: 0.25rem;\r
  display: flex;\r
  flex-direction: row;\r
  overflow: hidden;\r
}\r
[part~=contextMenu] > div.row > div.group {\r
  border: 1px solid rgba(255, 255, 255, 0.2);\r
  border-radius: 0.25rem;\r
  display: flex;\r
  flex-direction: row;\r
  flex: 1;\r
  overflow: hidden;\r
}\r
\r
[part~=contextMenu] > div.row > div.group:first-child {\r
  margin-left: 0.5rem;\r
  margin-right: 0.25rem;\r
}\r
\r
[part~=contextMenu] > div.row > div.group:last-child {\r
  margin-right: 0.5rem;\r
}\r
\r
[part~=contextMenu] > div.group > button,\r
[part~=contextMenu] > div.row > div.group > button {\r
  display: flex;\r
  flex: 1;\r
  padding: 0.25rem;\r
  justify-content: center;\r
  border: 0;\r
  margin: 0;\r
  background: transparent;\r
  color: #FFF;\r
  font-size: 1rem;\r
  line-height: 1.25rem;\r
  align-items: center;\r
  outline: none;\r
}\r
\r
[part~=contextMenu] > button,\r
[part~=contextMenu] > a {\r
  display: flex;\r
  border: 0;\r
  margin: 0;\r
  padding: 0.125rem 0.5rem;\r
  background: transparent;\r
  text-align: left;\r
  color: #FFF;\r
  font-size: 1rem;\r
  text-decoration: none;\r
  cursor: default;\r
  outline: none;\r
}\r
\r
[part~=contextMenu] > div.group > button.active,\r
[part~=contextMenu] > div.row > div.group > button.active {\r
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.3) inset;\r
  background: rgba(0, 0, 0, 0.1);\r
}\r
\r
[part~=contextMenu] > div.group > button.active:hover,\r
[part~=contextMenu] > div.row > div.group > button.active:hover {\r
  background: rgba(0, 0, 0, 0.2);\r
}\r
\r
[part~=contextMenu] > div.group > button:not(:first-child),\r
[part~=contextMenu] > div.row > div.group > button:not(:first-child) {\r
  border-left: 1px solid rgba(255, 255, 255, 0.1);\r
}\r
\r
[part~=contextMenu] > div.row > div.group > button > svg,\r
[part~=contextMenu] > div.group > button > svg,\r
[part~=contextMenu] > div.row > button > svg,\r
[part~=contextMenu] > button > svg {\r
  width: 1.5rem;\r
  height: 1.5rem;\r
  align-self: center;\r
}\r
\r
[part~=contextMenu] > div.row > div.group > button:hover,\r
[part~=contextMenu] > div.group > button:hover,\r
[part~=contextMenu] > button:hover,\r
[part~=contextMenu] > a:hover {\r
  background: rgba(255, 255, 255, 0.2);\r
}\r
\r
[part~=contextMenu] > div.row > div.group > button:active,\r
[part~=contextMenu] > div.group > button:active {\r
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.3) inset;\r
  background: rgba(0, 0, 0, 0.2);\r
}\r
[part~=contextMenu] > button:active,\r
[part~=contextMenu] > a:active {\r
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3) inset;\r
  background: rgba(0, 0, 0, 0.2);\r
}\r
\r
.row {\r
  display: flex;\r
}\r
\r
.divider {\r
  border-top: 1px solid rgba(255, 255, 255, 0.3);\r
  margin-top: 0.5rem;\r
  height: 0.4375rem;\r
}\r
\r
.black {\r
  display: inline-flex;\r
  border-radius: 50%;\r
  width: 1rem;\r
  height: 1rem;\r
  background: #000;\r
}\r
\r
.white {\r
  display: inline-flex;\r
  border-radius: 50%;\r
  width: 1rem;\r
  height: 1rem;\r
  background: #FFF;\r
}\r
\r
.download svg {\r
  margin-bottom: -0.125rem;\r
  margin-left: 0.25rem;\r
}\r
\r
[part~=color] {\r
  visibility: hidden;\r
  position: absolute;\r
  padding: 0.25rem;\r
  background: #737E9E;\r
  border-radius: 0.25rem;\r
  box-shadow: 0 1px 16px rgba(0, 0, 0, 0.6);\r
}\r
\r
[part~=colorHexRgb] {\r
  margin-bottom: 0.25rem;\r
}`;function w4(e){return`<svg viewBox="0 0 24 24"><path fill="currentColor" d="${e.data}"/></svg>`}var ld=e=>{var r=document.createElement("textarea");r.setAttribute("style","position:fixed;opacity:0;top:100px;left:100px;"),r.value=e,document.body.appendChild(r),r.select(),document.execCommand("copy"),setTimeout(function(){document.body.removeChild(r)},1500)};function pl(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var r=Math.random()*16|0,t=e=="x"?r:r&3|8;return t.toString(16)})}var C4="pgtoastadd",A4="pgtoastremove";function k4({add:e,remove:r}){document.body.addEventListener(C4,t=>{e(t.detail)}),document.body.addEventListener(A4,t=>{r(t.detail.key)})}function OH(e){e.key=e.key||pl();let r=new CustomEvent(C4,{detail:e});return document.body.dispatchEvent(r),setTimeout(()=>{NH(e.key)},e.seconds*1e3),e.key}function NH(e){let r=new CustomEvent(A4,{detail:{key:e}});document.body.dispatchEvent(r)}function ud(e,r=3){return OH({type:"info",message:e,seconds:r})}var L4,F4,S4,M4,T4,D4,$4,H4,I4,R4,_4,B4,O4,N4,V4,z4,j4,Y4,K4,U4,G4,W4,q4,Q4,Z4,P4,J4,X4,eA,O;eA=[k({selector:"pg-menu-icon",style:E4,template:y4})];var ie=class extends(X4=HTMLElement,J4=[m()],P4=[m()],Z4=[m()],Q4=[m()],q4=[m()],W4=[m()],G4=[m()],U4=[m()],K4=[m()],Y4=[m()],j4=[m()],z4=[m()],V4=[m()],N4=[m()],O4=[m()],B4=[m()],_4=[m()],R4=[m()],I4=[m()],H4=[m()],$4=[m()],D4=[m()],T4=[m()],M4=[m()],S4=[la("store")],F4=[L()],L4=[L()],X4){constructor(){super(...arguments);p(this,"$contextMenu",a(O,8,this)),a(O,11,this);p(this,"$newTab",a(O,12,this)),a(O,15,this);p(this,"$copyIconName",a(O,16,this)),a(O,19,this);p(this,"$pngBlack",a(O,20,this)),a(O,23,this);p(this,"$pngWhite",a(O,24,this)),a(O,27,this);p(this,"$pngColor",a(O,28,this)),a(O,31,this);p(this,"$png24",a(O,32,this)),a(O,35,this);p(this,"$png36",a(O,36,this)),a(O,39,this);p(this,"$png48",a(O,40,this)),a(O,43,this);p(this,"$png96",a(O,44,this)),a(O,47,this);p(this,"$pngDownload",a(O,48,this)),a(O,51,this);p(this,"$svgBlack",a(O,52,this)),a(O,55,this);p(this,"$svgWhite",a(O,56,this)),a(O,59,this);p(this,"$svgColor",a(O,60,this)),a(O,63,this);p(this,"$svgDownload",a(O,64,this)),a(O,67,this);p(this,"$copySvgInline",a(O,68,this)),a(O,71,this);p(this,"$copySvgFile",a(O,72,this)),a(O,75,this);p(this,"$copySvgPath",a(O,76,this)),a(O,79,this);p(this,"$copyUnicode",a(O,80,this)),a(O,83,this);p(this,"$copyCodepoint",a(O,84,this)),a(O,87,this);p(this,"$copyPreview",a(O,88,this)),a(O,91,this);p(this,"$color",a(O,92,this)),a(O,95,this);p(this,"$colorPicker",a(O,96,this)),a(O,99,this);p(this,"$colorHexRgb",a(O,100,this)),a(O,103,this);p(this,"store",a(O,104,this,new Map([["cachePngColor","#000000"],["cachePngSize",24],["cacheSvgColor","#000000"]]))),a(O,107,this);p(this,"color","svg");p(this,"currentIndex",a(O,108,this,0)),a(O,111,this);p(this,"icon",a(O,112,this,new Ir)),a(O,115,this)}connectedCallback(){this.$copyIconName.addEventListener("click",this.handleCopyIconName.bind(this)),this.$svgBlack.addEventListener("click",()=>{this.store.set("cacheSvgColor","#000000"),this.render()}),this.$svgWhite.addEventListener("click",()=>{this.store.set("cacheSvgColor","#FFFFFF"),this.render()});let t=!1;this.$svgColor.addEventListener("click",()=>{if(t){t=!1;return}this.color="svg",this.$colorPicker.value=this.store.get("cacheSvgColor"),this.$colorHexRgb.value=this.store.get("cacheSvgColor");let i=this;this.$color.style.visibility="visible";let o=!0;function s(l){o&&(i.$color.style.visibility="hidden",document.removeEventListener("mousedown",s),t=!0,i.render(),setTimeout(()=>t=!1,500))}this.$color.addEventListener("mouseenter",()=>o=!1),this.$color.addEventListener("mouseleave",()=>o=!0),document.addEventListener("mousedown",s)}),this.$pngBlack.addEventListener("click",()=>{this.store.set("cachePngColor","#000000"),this.render()}),this.$pngWhite.addEventListener("click",()=>{this.store.set("cachePngColor","#FFFFFF"),this.render()});let n=!1;this.$pngColor.addEventListener("click",()=>{if(n){n=!1;return}this.color="png",this.$colorPicker.value=this.store.get("cachePngColor"),this.$colorHexRgb.value=this.store.get("cachePngColor");let i=this;this.$color.style.visibility="visible";let o=!0;function s(l){o&&(i.$color.style.visibility="hidden",document.removeEventListener("mousedown",s),n=!0,i.render(),setTimeout(()=>n=!1,500))}this.$color.addEventListener("mouseenter",()=>o=!1),this.$color.addEventListener("mouseleave",()=>o=!0),document.addEventListener("mousedown",s)}),this.$png24.addEventListener("click",()=>{this.store.set("cachePngSize",24),this.render()}),this.$png36.addEventListener("click",()=>{this.store.set("cachePngSize",36),this.render()}),this.$png48.addEventListener("click",()=>{this.store.set("cachePngSize",48),this.render()}),this.$png96.addEventListener("click",()=>{this.store.set("cachePngSize",96),this.render()}),this.$svgDownload.addEventListener("click",()=>{alert(`SVG ${this.store.get("cacheSvgColor")}`)}),this.$pngDownload.addEventListener("click",()=>{alert(`SVG ${this.store.get("cachePngSize")} ${this.store.get("cachePngColor")}`)}),this.$copySvgInline.addEventListener("click",()=>{let i=this.icon;ld(w4(i)),this.hideContextMenu(),ud(`Copied inline SVG "${i.name}" to clipboard.`)}),this.$copySvgFile.addEventListener("click",()=>{}),this.$copySvgPath.addEventListener("click",()=>{}),this.$copyUnicode.addEventListener("click",()=>{}),this.$copyCodepoint.addEventListener("click",()=>{}),this.$copyPreview.addEventListener("click",()=>{})}handleCopyIconName(){let t=this.icon;t&&t.name&&(ld(t.name),ud(`Copied "${t.name}" to clipboard.`)),this.hideContextMenu()}hideContextMenu(){}showContextMenu(t,n,i){this.dispatchEvent(new CustomEvent("closemenu"))}render(){let t=this.store.get("cacheSvgColor"),n=this.store.get("cachePngColor"),i=this.store.get("cachePngSize");this.$svgBlack.classList.toggle("active",t==="#000000"),this.$svgWhite.classList.toggle("active",t==="#FFFFFF"),this.$svgColor.classList.toggle("active",t!=="#000000"&&t!=="#FFFFFF"),this.$pngBlack.classList.toggle("active",n==="#000000"),this.$pngWhite.classList.toggle("active",n==="#FFFFFF"),this.$pngColor.classList.toggle("active",n!=="#000000"&&n!=="#FFFFFF"),this.$png24.classList.toggle("active",i===24),this.$png36.classList.toggle("active",i===36),this.$png48.classList.toggle("active",i===48),this.$png96.classList.toggle("active",i===96),this.$colorPicker.addEventListener("select",this.handleColorSelect.bind(this)),this.$colorHexRgb.addEventListener("change",this.handleHexRgbChange.bind(this)),this.syncEyedropper()}handleColorSelect(t){switch(this.color){case"svg":this.store.set("cacheSvgColor",t.detail.hex);break;case"png":this.store.set("cachePngColor",t.detail.hex);break}this.$colorHexRgb.value=t.detail.hex,this.syncEyedropper()}handleHexRgbChange(t){switch(this.color){case"svg":this.store.set("cacheSvgColor",t.detail.hex);break;case"png":this.store.set("cachePngColor",t.detail.hex);break}this.$colorPicker.value=t.detail.hex,this.syncEyedropper()}syncEyedropper(){let t=this.store.get("cachePngColor");t!=="#000000"&&t!=="#FFFFFF"?this.$pngColor.style.color=t:this.$pngColor.style.color="transparent";let n=this.store.get("cacheSvgColor");n!=="#000000"&&n!=="#FFFFFF"?this.$svgColor.style.color=n:this.$svgColor.style.color="transparent"}};O=A(X4),c(O,5,"$contextMenu",J4,ie),c(O,5,"$newTab",P4,ie),c(O,5,"$copyIconName",Z4,ie),c(O,5,"$pngBlack",Q4,ie),c(O,5,"$pngWhite",q4,ie),c(O,5,"$pngColor",W4,ie),c(O,5,"$png24",G4,ie),c(O,5,"$png36",U4,ie),c(O,5,"$png48",K4,ie),c(O,5,"$png96",Y4,ie),c(O,5,"$pngDownload",j4,ie),c(O,5,"$svgBlack",z4,ie),c(O,5,"$svgWhite",V4,ie),c(O,5,"$svgColor",N4,ie),c(O,5,"$svgDownload",O4,ie),c(O,5,"$copySvgInline",B4,ie),c(O,5,"$copySvgFile",_4,ie),c(O,5,"$copySvgPath",R4,ie),c(O,5,"$copyUnicode",I4,ie),c(O,5,"$copyCodepoint",H4,ie),c(O,5,"$copyPreview",$4,ie),c(O,5,"$color",D4,ie),c(O,5,"$colorPicker",T4,ie),c(O,5,"$colorHexRgb",M4,ie),c(O,5,"store",S4,ie),c(O,5,"currentIndex",F4,ie),c(O,5,"icon",L4,ie),ie=c(O,0,"PgMenuIcon",eA,ie),a(O,1,ie);var tA=`<div class="example">
  <pg-menu-icon></pg-menu-icon>
</div>`;var rA,cd,VH;rA=[k({selector:"x-pg-menu-icon-basic",template:tA})];var ps=class extends(VH=HTMLElement){connectedCallback(){}};cd=A(VH),ps=c(cd,0,"XPgMenuIconBasic",rA,ps),a(cd,1,ps);var nA=`<div class="example">
  <pg-menu-item part="item"></pg-menu-item>
</div>
<div>
  <table style="border: 1px solid #ddd;margin-block-start: 0.5rem;">
    <thead>
      <tr>
        <th>Property</th>
        <th>Value</th>
        <th>&nbsp;</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>checked</code></td>
        <td part="checkedValue"></td>
        <td><input part="checkedToggle" type="checkbox"/></td>
      </tr>
      <tr>
        <td><code>disabled</code></td>
        <td part="disabledValue"></td>
        <td><input part="disabledToggle" type="checkbox"/></td>
      </tr>
    </tbody>
  </table>
</div>`;var iA,oA,aA,sA,lA,uA,cA,dt;cA=[k({selector:"x-pg-menu-item-basic",template:nA})];var fn=class extends(uA=HTMLElement,lA=[m()],sA=[m()],aA=[m()],oA=[m()],iA=[m()],uA){constructor(){super(...arguments);p(this,"$item",a(dt,8,this)),a(dt,11,this);p(this,"$checkedToggle",a(dt,12,this)),a(dt,15,this);p(this,"$disabledToggle",a(dt,16,this)),a(dt,19,this);p(this,"$checkedValue",a(dt,20,this)),a(dt,23,this);p(this,"$disabledValue",a(dt,24,this)),a(dt,27,this)}connectedCallback(){this.$item.label="Item 1",this.$item.checked=!1,this.$item.disabled=!1,this.$checkedValue.textContent=`${this.$item.checked}`,this.$disabledValue.textContent=`${this.$item.disabled}`,this.$item.addEventListener("select",t=>{this.$checkedToggle.checked=t.target.checked,this.$checkedValue.textContent=`${this.$item.checked}`}),this.$checkedToggle.addEventListener("change",t=>{this.$item.checked=t.target.checked,this.$checkedValue.textContent=`${this.$item.checked}`}),this.$disabledToggle.addEventListener("change",t=>{this.$item.disabled=t.target.checked,this.$disabledValue.textContent=`${this.$item.disabled}`})}};dt=A(uA),c(dt,5,"$item",lA,fn),c(dt,5,"$checkedToggle",sA,fn),c(dt,5,"$disabledToggle",aA,fn),c(dt,5,"$checkedValue",oA,fn),c(dt,5,"$disabledValue",iA,fn),fn=c(dt,0,"XPgMenuItemBasic",cA,fn),a(dt,1,fn);var pA=`<div class="example" part="example">
  <pg-menu-item-icon part="item"></pg-menu-item-icon>
</div>
<div>
  <table style="border: 1px solid #ddd;margin-block-start: 0.5rem;">
    <thead>
      <tr>
        <th>Property</th>
        <th>Value</th>
        <th>&nbsp;</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>icon</code></td>
        <td part="iconValue"></td>
        <td>
          <button part="iconFile">File</button>
          <button part="iconFolder">Folder</button>
        </td>
      </tr>
      <tr>
        <td><code>checked</code></td>
        <td part="checkedValue"></td>
        <td><input part="checkedToggle" type="checkbox"/></td>
      </tr>
      <tr>
        <td><code>disabled</code></td>
        <td part="disabledValue"></td>
        <td><input part="disabledToggle" type="checkbox"/></td>
      </tr>
    </tbody>
  </table>
</div>`;var dA="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z",zH="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z",hA,fA,mA,gA,bA,vA,xA,yA,EA,wA,me;wA=[k({selector:"x-pg-menu-item-icon-basic",template:pA})];var sr=class extends(EA=HTMLElement,yA=[m()],xA=[m()],vA=[m()],bA=[m()],gA=[m()],mA=[m()],fA=[m()],hA=[m()],EA){constructor(){super(...arguments);p(this,"$item",a(me,8,this)),a(me,11,this);p(this,"$checkedToggle",a(me,12,this)),a(me,15,this);p(this,"$disabledToggle",a(me,16,this)),a(me,19,this);p(this,"$iconFile",a(me,20,this)),a(me,23,this);p(this,"$iconFolder",a(me,24,this)),a(me,27,this);p(this,"$checkedValue",a(me,28,this)),a(me,31,this);p(this,"$disabledValue",a(me,32,this)),a(me,35,this);p(this,"$example",a(me,36,this)),a(me,39,this)}connectedCallback(){this.$item.icon=dA,this.$item.label="Item 1",this.$item.checked=!1,this.$item.disabled=!1,this.$checkedValue.textContent=`${this.$item.checked}`,this.$disabledValue.textContent=`${this.$item.disabled}`,this.$item.addEventListener("select",t=>{this.$checkedToggle.checked=t.target.checked,this.$checkedValue.textContent=`${this.$item.checked}`}),this.$iconFile.addEventListener("click",()=>{this.$item.icon=dA}),this.$iconFolder.addEventListener("click",()=>{this.$item.icon=zH}),this.$checkedToggle.addEventListener("change",t=>{this.$item.checked=t.target.checked,this.$checkedValue.textContent=`${this.$item.checked}`,t.target.checked?this.$example.style.setProperty("--pg-menu-_has-check","true"):this.$example.style.removeProperty("--pg-menu-_has-check")}),this.$disabledToggle.addEventListener("change",t=>{this.$item.disabled=t.target.checked,this.$disabledValue.textContent=`${this.$item.disabled}`})}};me=A(EA),c(me,5,"$item",yA,sr),c(me,5,"$checkedToggle",xA,sr),c(me,5,"$disabledToggle",vA,sr),c(me,5,"$iconFile",bA,sr),c(me,5,"$iconFolder",gA,sr),c(me,5,"$checkedValue",mA,sr),c(me,5,"$disabledValue",fA,sr),c(me,5,"$example",hA,sr),sr=c(me,0,"XPgMenuItemIconBasic",wA,sr),a(me,1,sr);var CA=`<div class="backdrop">
  <div class="dialog"
    role="dialog"
    id="dialog1"
    aria-labelledby="dialog1_label"
    aria-modal="true">
    <child/>
  </div>
</div>`;var AA=`.backdrop {\r
  display: flex;\r
  position: fixed;\r
  top: 0;\r
  left: 0;\r
  right: 0;\r
  bottom: 0;\r
  background: rgba(0, 0, 0, 0.6);\r
  justify-content: center;\r
  align-items: center;\r
}\r
.dialog {\r
  background: #fff;\r
  border-radius: 0.5rem;\r
  box-shadow: 0 1px 1rem rgba(0, 0, 0, 0.5);\r
  overflow: hidden;\r
  min-width: 15rem;\r
}\r
header {\r
  border-bottom: 1px solid #ccc;\r
  background: #f1f1f1;\r
  padding: 0.75rem 1rem;\r
}\r
header h2 {\r
  font-size: 1.25rem;\r
  margin: 0;\r
  font-weight: normal;\r
}\r
main {\r
  padding: 0.5rem 1rem;\r
}\r
footer {\r
  display: flex;\r
  flex-direction: row;\r
  padding: 0.75rem 1rem;\r
  border-top: 1px solid #ccc;\r
  background: #f1f1f1;\r
  justify-content: flex-end;\r
  gap: 0.5rem;\r
}`;var kA,pd,YH;kA=[k({template:CA,style:AA})];var vo=class extends(YH=je){};pd=A(YH),vo=c(pd,0,"PgModal",kA,vo),a(pd,1,vo);var LA=`<div class="example">
  <button part="button">Launch MyModal</button>
  <div><code>Result: </code><code part="result"></code></div>
</div>`;var FA,SA,MA,ds;MA=[k({selector:"x-my-modal",template:'<main>Hello! <button part="close">Close</button></main>'})];var ta=class extends(SA=vo,FA=[m()],SA){constructor(){super(...arguments);p(this,"$close",a(ds,8,this)),a(ds,11,this)}connectedCallback(){this.$close.addEventListener("click",()=>{this.close()})}};ds=A(SA),c(ds,5,"$close",FA,ta),ta=c(ds,0,"XMyModal",MA,ta),a(ds,1,ta);var TA,DA,$A,HA,ki;HA=[k({selector:"x-pg-modal-basic",template:LA})];var xo=class extends($A=HTMLElement,DA=[m()],TA=[m()],$A){constructor(){super(...arguments);p(this,"$button",a(ki,8,this)),a(ki,11,this);p(this,"$result",a(ki,12,this)),a(ki,15,this)}connectedCallback(){this.$button.addEventListener("click",this.handleClick.bind(this))}async handleClick(){let t=await ta.open({header:"Delete Item",message:"Are you sure you want to delete the item?"});this.$result.textContent=`${t}`}};ki=A($A),c(ki,5,"$button",DA,xo),c(ki,5,"$result",TA,xo),xo=c(ki,0,"XPgModalBasic",HA,xo),a(ki,1,xo);var IA=`<div class="backdrop">
  <div class="dialog"
    role="dialog"
    id="dialog1"
    aria-labelledby="dialog1_label"
    aria-modal="true">
    <header part="header">
      <h2 id="dialog1_label"
        class="dialog_label"
        part="headerText">
        Add Delivery Address
      </h2>
    </header>
    <main>
      <p part="message"></p>
    </main>
    <footer>
      <pg-button part="no">No</pg-button>
      <pg-button part="yes">Yes</pg-button>
    </footer>
  </div>
</div>`;var RA=`.backdrop {\r
  display: flex;\r
  position: fixed;\r
  top: 0;\r
  left: 0;\r
  right: 0;\r
  bottom: 0;\r
  background: rgba(0, 0, 0, 0.6);\r
  justify-content: center;\r
  align-items: center;\r
}\r
.dialog {\r
  background: #fff;\r
  border-radius: 0.5rem;\r
  box-shadow: 0 1px 1rem rgba(0, 0, 0, 0.5);\r
  overflow: hidden;\r
  min-width: 15rem;\r
}\r
header {\r
  border-bottom: 1px solid #ccc;\r
  background: #f1f1f1;\r
  padding: 0.75rem 1rem;\r
}\r
header h2 {\r
  font-size: 1.25rem;\r
  margin: 0;\r
  font-weight: normal;\r
}\r
main {\r
  padding: 0.5rem 1rem;\r
}\r
footer {\r
  display: flex;\r
  flex-direction: row;\r
  padding: 0.75rem 1rem;\r
  border-top: 1px solid #ccc;\r
  background: #f1f1f1;\r
  justify-content: flex-end;\r
  gap: 0.5rem;\r
}`;var _A,BA,OA,NA,VA,zA,jA,YA,KA,Fe,hs,yo,UA,GA,WA;KA=[k({selector:"pg-modal-alert",template:IA,style:RA})];var Qt=class extends(YA=je,jA=[L()],zA=[L()],VA=[m()],NA=[m()],OA=[m()],BA=[m()],_A=[m()],YA){constructor(){super(...arguments);R(this,yo);p(this,"header",a(Fe,8,this,"Are you sure?")),a(Fe,11,this);p(this,"message",a(Fe,12,this,"Are you sure?")),a(Fe,15,this);p(this,"$header",a(Fe,16,this)),a(Fe,19,this);p(this,"$headerText",a(Fe,20,this)),a(Fe,23,this);p(this,"$message",a(Fe,24,this)),a(Fe,27,this);p(this,"$yes",a(Fe,28,this)),a(Fe,31,this);p(this,"$no",a(Fe,32,this)),a(Fe,35,this);R(this,hs)}connectedCallback(){this.$yes.addEventListener("click",F(this,yo,GA).bind(this)),this.$no.addEventListener("click",F(this,yo,WA).bind(this)),x(this,hs)??B(this,hs,F(this,yo,UA).bind(this)),document.addEventListener("keydown",x(this,hs))}disconnectedCallback(){document.removeEventListener("keydown",x(this,hs))}render(t){t.header&&(this.$headerText.innerText=this.header),t.message&&(this.$message.innerText=this.message)}};Fe=A(YA),hs=new WeakMap,yo=new WeakSet,UA=function(t){t.key==="Escape"&&this.close(null)},GA=function(){this.close(!0)},WA=function(){this.close(!1)},c(Fe,5,"header",jA,Qt),c(Fe,5,"message",zA,Qt),c(Fe,5,"$header",VA,Qt),c(Fe,5,"$headerText",NA,Qt),c(Fe,5,"$message",OA,Qt),c(Fe,5,"$yes",BA,Qt),c(Fe,5,"$no",_A,Qt),Qt=c(Fe,0,"PgModalAlert",KA,Qt),a(Fe,1,Qt);var qA=`<div class="example">
  <button part="button">Launch Alert Modal</button>
  <div><code>Result: </code><code part="result"></code></div>
</div>`;var QA,ZA,PA,JA,Li;JA=[k({selector:"x-pg-modal-alert-basic",template:qA})];var Eo=class extends(PA=HTMLElement,ZA=[m()],QA=[m()],PA){constructor(){super(...arguments);p(this,"$button",a(Li,8,this)),a(Li,11,this);p(this,"$result",a(Li,12,this)),a(Li,15,this)}connectedCallback(){this.$button.addEventListener("click",this.handleClick.bind(this))}async handleClick(){let t=await Qt.open({header:"Delete Item",message:"Are you sure you want to delete the item?"});this.$result.textContent=`${t}`}};Li=A(PA),c(Li,5,"$button",ZA,Eo),c(Li,5,"$result",QA,Eo),Eo=c(Li,0,"XPgModalAlertBasic",JA,Eo),a(Li,1,Eo);var XA='<div part="items"></div>';var ek=`:host {\r
  display: flex;\r
  flex-direction: column;\r
  color: #453C4F;\r
}\r
\r
.invalid {\r
  color: #721c24;\r
  background-color: #f8d7da;\r
  border-color: #f5c6cb;\r
}\r
\r
h2 {\r
  font-weight: normal;\r
  font-size: 1.25rem;\r
  margin: 0.5rem 0 0.5rem 0;\r
}\r
\r
/* Individual Templates */\r
\r
[part="news"] {\r
  display: grid;\r
  grid-template-columns: 3.5rem 1fr;\r
  grid-template-rows: 3.25rem auto;\r
  padding: 0.25rem;\r
}\r
[part="news"] [part="avatar"] {\r
  grid-column: 1;\r
}\r
[part="news"] [part="label"] {\r
  grid-column: 1;\r
  grid-row: 2;\r
  text-align: center;\r
  padding-right: 0.5rem;\r
}\r
[part="news"] [part="markdown"] {\r
  grid-column: 2;\r
  grid-row: 1 / span 2;\r
  border: 1px solid #DDD;\r
  padding: 0 1rem;\r
  background: #fff;\r
  border-radius: 0.25rem;\r
}\r
\r
[part="iconCreated"],\r
[part="iconRenamed"],\r
[part="iconDeleted"],\r
[part="iconAliasCreated"],\r
[part="iconAliasDeleted"],\r
[part="iconTagCreated"],\r
[part="iconTagDeleted"],\r
[part="iconAuthorModified"],\r
[part="iconDeprecated"] {\r
  display: grid;\r
  grid-template-columns: 3.5rem 3.5rem 1fr auto auto;\r
  padding: 0.25rem;\r
}\r
[part="iconCreated"] [part="avatar"],\r
[part="iconModified"] [part="avatar"],\r
[part="iconRenamed"] [part="avatar"],\r
[part="iconDeleted"] [part="avatar"],\r
[part="iconAliasCreated"] [part="avatar"],\r
[part="iconAliasDeleted"] [part="avatar"],\r
[part="iconTagCreated"] [part="avatar"],\r
[part="iconTagDeleted"] [part="avatar"],\r
[part="iconAuthorModified"] [part="avatar"],\r
[part="iconDeprecated"] [part="avatar"] {\r
  grid-column: 1;\r
}\r
[part="iconCreated"] [part="icon"],\r
[part="iconModified"] [part="iconDataBefore"],\r
[part="iconModified"] [part="iconDataAfter"],\r
[part="iconRenamed"] [part="icon"],\r
[part="iconDeleted"] [part="icon"],\r
[part="iconAliasCreated"] [part="icon"],\r
[part="iconAliasDeleted"] [part="icon"],\r
[part="iconTagCreated"] [part="icon"],\r
[part="iconTagDeleted"] [part="icon"],\r
[part="iconAuthorModified"] [part="icon"],\r
[part="iconDeprecated"] [part="icon"] {\r
  grid-column: 2;\r
  --pg-icon-width: 3rem;\r
  --pg-icon-height: 3rem;\r
  width: 3rem;\r
  border: 1px solid #ddd;\r
  background: #fff;\r
  border-radius: 0.25rem;\r
  align-self: flex-start;\r
}\r
[part="iconCreated"] [part="content"],\r
[part="iconModified"] [part="content"],\r
[part="iconRenamed"] [part="content"],\r
[part="iconDeleted"] [part="content"],\r
[part="iconAliasCreated"] [part="content"],\r
[part="iconAliasDeleted"] [part="content"],\r
[part="iconTagCreated"] [part="content"],\r
[part="iconTagDeleted"] [part="content"],\r
[part="iconAuthorModified"] [part="content"],\r
[part="iconDeprecated"] [part="content"] {\r
  grid-column: 3;\r
  align-content: center;\r
  display: flex;\r
  align-items: center;\r
}\r
[part="iconCreated"] [part="content"] code,\r
[part="iconModified"] [part="content"] code,\r
[part="iconRenamed"] [part="content"] code,\r
[part="iconDeleted"] [part="content"] code,\r
[part="iconAliasCreated"] [part="content"] code,\r
[part="iconAliasDeleted"] [part="content"] code,\r
[part="iconTagCreated"] [part="content"] code,\r
[part="iconTagDeleted"] [part="content"] code,\r
[part="iconAuthorModified"] [part="content"] code,\r
[part="iconDeprecated"] [part="content"] code {\r
  display: inline-block;\r
  background: rgba(0, 0, 0, 0.05);\r
  padding: 0.125rem 0.25rem;\r
  border-radius: 0.125rem;\r
  text-shadow: 0 1px 1px rgba(255, 255, 255, 0.5);\r
  border: 1px solid rgba(69, 60, 79, 0.2);\r
  line-height: 1.125rem;\r
}\r
[part="iconCreated"] [part="issue"],\r
[part="iconModified"] [part="issue"],\r
[part="iconRenamed"] [part="issue"],\r
[part="iconDeleted"] [part="issue"],\r
[part="iconAliasCreated"] [part="issue"],\r
[part="iconAliasDeleted"] [part="issue"],\r
[part="iconTagCreated"] [part="issue"],\r
[part="iconTagDeleted"] [part="issue"],\r
[part="iconDescriptionModified"] [part="issue"],\r
[part="iconAuthorModified"] [part="issue"],\r
[part="iconDeprecated"] [part="issue"] {\r
  grid-column: 4;\r
  display: flex;\r
  align-self: center;\r
  text-decoration: none;\r
  padding: 0.25rem 0.5rem;\r
  border: 1px solid #453C4F;\r
  color: #453C4F;\r
  border-radius: 0.25rem;\r
}\r
[part="iconCreated"] [part="issue"]:hover,\r
[part="iconModified"] [part="issue"]:hover,\r
[part="iconRenamed"] [part="issue"]:hover,\r
[part="iconDeleted"] [part="issue"]:hover,\r
[part="iconAliasCreated"] [part="issue"]:hover,\r
[part="iconAliasDeleted"] [part="issue"]:hover,\r
[part="iconTagCreated"] [part="issue"]:hover,\r
[part="iconTagDeleted"] [part="issue"]:hover,\r
[part="iconDescriptionModified"] [part="issue"]:hover,\r
[part="iconAuthorModified"] [part="issue"]:hover,\r
[part="iconDeprecated"] [part="issue"]:hover {\r
  background: #453C4F;\r
  color: #fff;\r
}\r
.edit [part="iconCreated"] [part="edit"],\r
.edit [part="iconModified"] [part="edit"],\r
.edit [part="iconRenamed"] [part="edit"],\r
.edit [part="iconDeleted"] [part="edit"],\r
.edit [part="iconAliasCreated"] [part="edit"],\r
.edit [part="iconAliasDeleted"] [part="edit"],\r
.edit [part="iconTagCreated"] [part="edit"],\r
.edit [part="iconTagDeleted"] [part="edit"],\r
.edit [part="iconDescriptionModified"] [part="edit"],\r
.edit [part="iconAuthorModified"] [part="edit"],\r
.edit [part="iconDeprecated"] [part="edit"] {\r
  display: flex;\r
}\r
[part="iconCreated"] [part="edit"],\r
[part="iconModified"] [part="edit"],\r
[part="iconRenamed"] [part="edit"],\r
[part="iconDeleted"] [part="edit"],\r
[part="iconAliasCreated"] [part="edit"],\r
[part="iconAliasDeleted"] [part="edit"],\r
[part="iconTagCreated"] [part="edit"],\r
[part="iconTagDeleted"] [part="edit"],\r
[part="iconDescriptionModified"] [part="edit"],\r
[part="iconAuthorModified"] [part="edit"],\r
[part="iconDeprecated"] [part="edit"] {\r
  display: none;\r
  grid-column: 5;\r
  align-self: center;\r
  padding: 0.25rem;\r
  border: 0;\r
  border-radius: 0.25rem;\r
  margin-left: 0.5rem;\r
  cursor: pointer;\r
}\r
[part="iconCreated"] [part="edit"]:hover,\r
[part="iconModified"] [part="edit"]:hover,\r
[part="iconRenamed"] [part="edit"]:hover,\r
[part="iconDeleted"] [part="edit"]:hover,\r
[part="iconAliasCreated"] [part="edit"]:hover,\r
[part="iconAliasDeleted"] [part="edit"]:hover,\r
[part="iconTagCreated"] [part="edit"]:hover,\r
[part="iconTagDeleted"] [part="edit"]:hover,\r
[part="iconDescriptionModified"] [part="edit"]:hover,\r
[part="iconAuthorModified"] [part="edit"]:hover,\r
[part="iconDeprecated"] [part="edit"]:hover {\r
  background: #453C4F;\r
  --pg-icon-color: #fff;\r
}\r
\r
/* Individiual Tweaks */\r
[part="iconCreated"] [part="icon"] {\r
  background: #d1e7dd;\r
  border-color: #badbcc;\r
}\r
\r
[part="iconRenamed"] [part="icon"] {\r
  background-color: #fff3cd;\r
  border-color: #ffecb5;\r
}\r
\r
[part="iconDeleted"] [part="icon"] {\r
  background: #f5c6cb;\r
  border-color: #d06e78;\r
}\r
\r
[part="iconModified"] {\r
  display: grid;\r
  grid-template-columns: 3.5rem 3.5rem 3.5rem 1fr auto auto;\r
  padding: 0.25rem;\r
}\r
[part="iconModified"] [part="iconDataBefore"] {\r
  opacity: 0.4;\r
}\r
[part="iconModified"] [part="iconDataAfter"] {\r
  grid-column: 3;\r
}\r
[part="iconModified"] [part="content"] {\r
  grid-column: 4;\r
}\r
[part="iconModified"] [part="issue"] {\r
  grid-column: 5;\r
}\r
[part="iconModified"] [part="edit"] {\r
  grid-column: 6;\r
}\r
\r
[part="iconAliasCreated"] [part="icon"],\r
[part="iconAliasDeleted"] [part="icon"] {\r
  background-color: #DDC6E7;\r
  border-color: 1px solid #DBBDE5;\r
}\r
\r
[part="iconTagCreated"] [part="icon"],\r
[part="iconTagDeleted"] [part="icon"] {\r
  background-color: #cff4fc;\r
  border-color: #b6effb;\r
}\r
\r
[part="iconDescriptionModified"] {\r
  display: grid;\r
  grid-template-columns: 3.5rem 3.5rem 1fr 0.5rem 1fr auto;\r
  grid-template-rows: auto auto;\r
  padding: 0.25rem;\r
}\r
[part="iconDescriptionModified"] [part="avatar"] {\r
  grid-column: 1;\r
  grid-row: 1 / span 2;\r
}\r
[part="iconDescriptionModified"] [part="icon"] {\r
  grid-column: 2;\r
  grid-row: 1 / span 2;\r
  --pg-icon-width: 3rem;\r
  --pg-icon-height: 3rem;\r
  width: 3rem;\r
  border: 1px solid #ddd;\r
  background: #fff;\r
  border-radius: 0.25rem;\r
  align-self: flex-start;\r
}\r
[part="iconDescriptionModified"] [part="iconDescriptionBefore"] {\r
  grid-column: 3;\r
  grid-row: 1 / span 2;\r
  border: 1px solid #DDD;\r
  padding: 0 1rem;\r
  background: #fff;\r
  border-radius: 0.25rem;\r
}\r
[part="iconDescriptionModified"] [part="iconDescriptionAfter"] {\r
  grid-column: 5;\r
  grid-row: 1 / span 2;\r
  border: 1px solid #DDD;\r
  padding: 0 1rem;\r
  background: #fff;\r
  border-radius: 0.25rem;\r
}\r
[part="iconDescriptionModified"] [part="issue"] {\r
  grid-column: 6;\r
  grid-row: 1;\r
  margin-left: 0.5rem;\r
}\r
[part="iconDescriptionModified"] [part="edit"] {\r
  grid-column: 6;\r
  grid-row: 2;\r
  justify-content: center;\r
  margin-top: 0.25rem;\r
}\r
\r
.added,\r
.created {\r
  border-bottom: 3px solid #badbcc;\r
}\r
\r
.removed,\r
.deleted {\r
  border-bottom: 3px solid #f5c6cb;\r
}`;var tk='<h2 part="text"></h1>';var rk=`<div part="news">
  <pg-avatar part="avatar"></pg-avatar>
  <span part="label">News</span>
  <pg-markdown part="markdown"></pg-markdown>
</div>`;var nk=`<div part="iconCreated">
  <pg-avatar part="avatar"></pg-avatar>
  <pg-icon part="icon"></pg-icon>
  <span part="content">
    <span>
      Icon <code part="iconName"></code> <span class="created">created</span>.
    </span>
  </span>
  <a part="issue"></a>
  <button part="edit">
    <pg-icon part="editIcon"></pg-icon>
  </button>
</div>`;var ik=`<div part="iconModified">
  <pg-avatar part="avatar"></pg-avatar>
  <pg-icon part="iconDataBefore"></pg-icon>
  <pg-icon part="iconDataAfter"></pg-icon>
  <span part="content">
    <span>
      Icon <code part="iconName"></code> modified.
    </span>
  </span>
  <a part="issue"></a>
  <button part="edit">
    <pg-icon part="editIcon"></pg-icon>
  </button>
</div>`;var ok=`<div part="iconRenamed">
  <pg-avatar part="avatar"></pg-avatar>
  <pg-icon part="icon"></pg-icon>
  <span part="content">
    <span>
      Icon <code part="iconNameBefore"></code> renamed to <code part="iconNameAfter"></code>.
    </span>
  </span>
  <a part="issue"></a>
  <button part="edit">
    <pg-icon part="editIcon"></pg-icon>
  </button>
</div>`;var ak=`<div part="iconDeleted">
  <pg-avatar part="avatar"></pg-avatar>
  <pg-icon part="icon"></pg-icon>
  <span part="content">
    <span>
      Icon <code part="iconName"></code> <span class="deleted">deleted</span>.
    </span>
  </span>
  <a part="issue"></a>
  <button part="edit">
    <pg-icon part="editIcon"></pg-icon>
  </button>
</div>`;var sk=`<div part="iconAliasCreated">
  <pg-avatar part="avatar"></pg-avatar>
  <pg-icon part="icon"></pg-icon>
  <span part="content">
    <span>
      <span class="added">Added</span> alias <code part="text"></code> to <code part="iconName"></code>.
    </span>
  </span>
  <a part="issue"></a>
  <button part="edit">
    <pg-icon part="editIcon"></pg-icon>
  </button>
</div>`;var lk=`<div part="iconAliasDeleted">
  <pg-avatar part="avatar"></pg-avatar>
  <pg-icon part="icon"></pg-icon>
  <span part="content">
    <span>
      <span class="removed">Removed</span> alias <code part="text"></code> from <code part="iconName"></code>.
    </span>
  </span>
  <a part="issue"></a>
  <button part="edit">
    <pg-icon part="editIcon"></pg-icon>
  </button>
</div>`;var uk=`<div part="iconTagCreated">
  <pg-avatar part="avatar"></pg-avatar>
  <pg-icon part="icon"></pg-icon>
  <span part="content">
    <span>
      <span class="added">Added</span> tag <code part="text"></code> to <code part="iconName"></code>.
    </span>
  </span>
  <a part="issue"></a>
  <button part="edit">
    <pg-icon part="editIcon"></pg-icon>
  </button>
</div>`;var ck=`<div part="iconTagDeleted">
  <pg-avatar part="avatar"></pg-avatar>
  <pg-icon part="icon"></pg-icon>
  <span part="content">
    <span>
      <span class="removed">Removed</span> tag <code part="text"></code> from <code part="iconName"></code>.
    </span>
  </span>
  <a part="issue"></a>
  <button part="edit">
    <pg-icon part="editIcon"></pg-icon>
  </button>
</div>`;var pk=`<div part="iconDescriptionModified">
  <pg-avatar part="avatar"></pg-avatar>
  <pg-icon part="icon"></pg-icon>
  <pg-markdown part="iconDescriptionBefore"></pg-markdown>
  <pg-markdown part="iconDescriptionAfter"></pg-markdown>
  <a part="issue"></a>
  <button part="edit">
    <pg-icon part="editIcon"></pg-icon>
  </button>
</div>`;var dk=`<div part="iconAuthorModified">
  <pg-avatar part="avatar"></pg-avatar>
  <pg-icon part="icon"></pg-icon>
  <span part="content">
    <span>
      Author modified.
    </span>
  </span>
  <a part="issue"></a>
  <button part="edit">
    <pg-icon part="editIcon"></pg-icon>
  </button>
</div>`;var hk=`<div part="iconDeprecated">
  <pg-avatar part="avatar"></pg-avatar>
  <pg-icon part="icon"></pg-icon>
  <span part="content">
    <span>
      Deprecated. Warning this icon will be removed in a future release.
    </span>
  </span>
  <a part="issue"></a>
  <button part="edit">
    <pg-icon part="editIcon"></pg-icon>
  </button>
</div>`;var _u=class{id;modificationId;packageId;user;icon;iconNameBefore;iconNameAfter;iconDescriptionBefore;iconDescriptionAfter;iconDataBefore;iconDataAfter;text;date;issue;isVisible;constructor(){}from(r){return this.id=r.id,this.modificationId=r.modificationId,this.packageId=r.packageId,this.user=new vt().from(r.user),this.icon=new Ir().from(r.icon),this.iconNameBefore=r.iconNameBefore,this.iconNameAfter=r.iconNameAfter,this.iconDescriptionBefore=r.iconDescriptionBefore,this.iconDescriptionAfter=r.iconDescriptionAfter,this.iconDataBefore=r.iconDataBefore,this.iconDataAfter=r.iconDataAfter,this.text=r.text,this.date=r.date,this.issue=r.issue,this.isVisible=r.isVisible,this}};var GH="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z",fk={"B4DEB3A8-A146-4086-9D7B-B67842A9CCB8":rk,"AFFE875E-01BC-4A34-9BE3-27625A155B28":nk,"1506F66B-CC2A-4575-A20A-DC138628977A":ik,"F7B6D49B-A86F-49AC-AF92-6B9D0DF6188B":ok,"B1CE1713-A18A-4E9D-9E26-D0B4E44A1FAC":ak,"691c8829-b1e7-11e7-bf5c-94188269ec50":sk,"f1f70a76-b975-11e9-8ca0-94188269ec50":lk,"a185a9e8-c192-11e7-bf5c-94188269ec50":uk,"ffe6b5f6-b975-11e9-8ca0-94188269ec50":ck,"3c638179-c4ca-11e8-9f27-94188269ec50":pk,"254591d0-b28e-11e9-8ca0-94188269ec50":dk,"f92f310f-bfed-11e9-8ca0-94188269ec50":hk,date:tk},Ek=["January","February","March","April","May","June","July","August","September","October","November","December"];function WH(e){let r=new Date(e);return`${Ek[r.getMonth()]} ${r.getDate()}, ${r.getFullYear()}`}function qH(e){let r=new Date(e),t=Ek[r.getMonth()];return`${r.getFullYear()}-${t}-${r.getDate()}`}function QH(e){let r=[],t="";return e.forEach((n,i)=>{let o=WH(n.date);t!==o&&(r.push(new _u().from({id:`date-${qH(n.date)}`,modificationId:"date",text:o,user:new vt,icon:new Ir})),t=o),r.push(n)}),r}var mk,gk,bk,vk,xk,yk,Zt;yk=[k({selector:"pg-modification",style:ek,template:XA})];var Dn=class extends(xk=HTMLElement,vk=[L()],bk=[L()],gk=[L()],mk=[m()],xk){constructor(){super(...arguments);p(this,"modifications",a(Zt,8,this,[])),a(Zt,11,this);p(this,"edit",a(Zt,12,this,!1)),a(Zt,15,this);p(this,"github",a(Zt,16,this,"")),a(Zt,19,this);p(this,"$items",a(Zt,20,this)),a(Zt,23,this)}render(t){t.modifications&&this.modifications&&cu(this.$items,QH(this.modifications),"id",n=>{if(n.modificationId in fk){let o=kl(fk[n.modificationId],{text:{innerText:n.text},markdown:{text:n.text},icon:{path:n.icon&&n.icon.data},iconName:{innerText:n.icon&&n.icon.name},iconNameBefore:{innerText:n.iconNameBefore},iconNameAfter:{innerText:n.iconNameAfter},iconDescriptionBefore:{text:n.iconDescriptionBefore},iconDescriptionAfter:{text:n.iconDescriptionAfter},iconDataBefore:{path:n.iconDataBefore},iconDataAfter:{path:n.iconDataAfter},avatar:{user:n.user},editIcon:{path:GH},issue:{style:n.issue?"":"display:none",innerText:n.issue?`#${n.issue}`:"",href:`https://github.com/${this.github}/issues/${n.issue}`}}),s=o.querySelector('[part="issue"]');s&&Ri(s,()=>"View on GitHub",Ts);let l=o.querySelector('[part="avatar"]');l&&Ri(l,()=>n.user.name,Ms);let u=o.querySelector('[part="edit"]');return u&&u.addEventListener("click",()=>{this.dispatchEvent(new CustomEvent("edit",{detail:{modification:n}}))}),o}let i=document.createElement("div");return i.classList.add("invalid"),i.innerText=`Error: Unsupported modificationId with text: "${n.text}"`,i},(n,i)=>{}),t.edit&&this.$items.classList.toggle("edit",this.edit)}addItem(t){let n=document.createElement("div");this.$items.appendChild(n)}};Zt=A(xk),c(Zt,5,"modifications",vk,Dn),c(Zt,5,"edit",bk,Dn),c(Zt,5,"github",gk,Dn),c(Zt,5,"$items",mk,Dn),Dn=c(Zt,0,"PgModification",yk,Dn),a(Zt,1,Dn);var wk=`<div class="example">
  <div>
    <button part="clear">Clear List</button>
    <button part="single">Single Item</button>
    <button part="editToggle">Toggle Edit Mode</button>
  </div>
  <pg-modification part="modification"></pg-nav>
</div>`;var Ck=[{id:"3e7a0e1b-b355-11e7-bf5c-94188269ec50",modificationId:"B4DEB3A8-A146-4086-9D7B-B67842A9CCB8",packageId:"38EF63D0-4744-11E4-B3CF-842B2B6CFE1B",iconNameBefore:null,iconNameAfter:null,iconDescriptionBefore:null,iconDescriptionAfter:null,iconDataBefore:null,iconDataAfter:null,text:"Release `v1.0.42` with awesome updates.\n\n- Updates\n  - `markdown` Supported",date:"2020-10-20T16:07:15Z",user:{id:"c4ea5584-07e3-11e4-bf19-842b2b6cfe1b",name:"Austin Andrews",github:"templarian"},icon:null,version:{major:1,minor:0,patch:42},issue:null},{id:"87fb6a41-b354-11e7-bf5c-94188269ec50",modificationId:"691c8829-b1e7-11e7-bf5c-94188269ec50",packageId:"38EF63D0-4744-11E4-B3CF-842B2B6CFE1B",iconNameBefore:null,iconNameAfter:null,iconDescriptionBefore:null,iconDescriptionAfter:null,iconDataBefore:null,iconDataAfter:null,text:"alias-created",date:"2017-10-17T16:02:09Z",user:{id:"c4ea5584-07e3-11e4-bf19-842b2b6cfe1b",name:"Austin Andrews",github:"templarian"},icon:{id:"AB147073-9D20-4DA1-A108-3856FC1764C1",name:"icon-name",data:"M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z",user:{id:"79c44334-2d86-11e5-8ac4-842b2b6cfe1b",name:"First Last",github:"GitHubUser"}},issue:42},{id:"820b8714-b354-11e7-bf5c-94188269ec50",modificationId:"f1f70a76-b975-11e9-8ca0-94188269ec50",packageId:"38EF63D0-4744-11E4-B3CF-842B2B6CFE1B",iconNameBefore:null,iconNameAfter:null,iconDescriptionBefore:null,iconDescriptionAfter:null,iconDataBefore:null,iconDataAfter:null,text:"alias-deleted",date:"2017-10-17T16:01:59Z",user:{id:"c4ea5584-07e3-11e4-bf19-842b2b6cfe1b",name:"Austin Andrews",github:"templarian"},icon:{id:"AB147073-9D20-4DA1-A108-3856FC1764C1",name:"icon-name",data:"M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z",user:{id:"79c44334-2d86-11e5-8ac4-842b2b6cfe1b",name:"First Last",github:"GitHubUser"}},issue:42},{id:"51b1b2cc-b354-11e7-bf5c-94188269ec50",modificationId:"AFFE875E-01BC-4A34-9BE3-27625A155B28",packageId:"38EF63D0-4744-11E4-B3CF-842B2B6CFE1B",iconNameBefore:null,iconNameAfter:null,iconDescriptionBefore:null,iconDescriptionAfter:null,iconDataAfter:null,iconDataBefore:null,text:null,date:"2017-10-17T16:00:38Z",user:{id:"c4ea5584-07e3-11e4-bf19-842b2b6cfe1b",name:"Austin Andrews",github:"templarian"},icon:{id:"AB147073-9D20-4DA1-A108-3856FC1764C1",name:"icon-name",data:"M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z",user:{id:"79c44334-2d86-11e5-8ac4-842b2b6cfe1b",name:"First Last",github:"GitHubUser"}},issue:42},{id:"46e38abf-b353-11e7-bf5c-94188269ec50",modificationId:"B1CE1713-A18A-4E9D-9E26-D0B4E44A1FAC",packageId:"38EF63D0-4744-11E4-B3CF-842B2B6CFE1B",iconNameBefore:null,iconNameAfter:null,iconDescriptionBefore:null,iconDescriptionAfter:null,iconDataBefore:null,iconDataAfter:null,text:null,date:"2017-10-17T15:53:11Z",user:{id:"c4ea5584-07e3-11e4-bf19-842b2b6cfe1b",name:"Austin Andrews",github:"templarian"},icon:{id:"AB147073-9D20-4DA1-A108-3856FC1764C1",name:"icon-name",data:"M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z",user:{id:"79c44334-2d86-11e5-8ac4-842b2b6cfe1b",name:"First Last",github:"GitHubUser"}},issue:42},{id:"19445be2-b353-11e7-bf5c-94188269ec50",modificationId:"1506F66B-CC2A-4575-A20A-DC138628977A",packageId:"38EF63D0-4744-11E4-B3CF-842B2B6CFE1B",iconNameBefore:null,iconNameAfter:null,iconDescriptionBefore:null,iconDescriptionAfter:null,iconDataBefore:"M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z",iconDataAfter:"M10 4A4 4 0 0 1 14 8A4 4 0 0 1 10 12A4 4 0 0 1 6 8A4 4 0 0 1 10 4M10 14C14.42 14 18 15.79 18 18V20H2V18C2 15.79 5.58 14 10 14M20 12V7H22V13H20M20 17V15H22V17H20Z",text:null,date:"2017-10-17T15:51:54Z",user:{id:"c4ea5584-07e3-11e4-bf19-842b2b6cfe1b",name:"Austin Andrews",github:"templarian"},icon:{id:"AB147073-9D20-4DA1-A108-3856FC1764C1",name:"icon-name",data:"M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z",user:{id:"79c44334-2d86-11e5-8ac4-842b2b6cfe1b",name:"First Last",github:"GitHubUser"}},issue:42},{id:"f6100c55-b352-11e7-bf5c-94188269ec50",modificationId:"F7B6D49B-A86F-49AC-AF92-6B9D0DF6188B",packageId:"38EF63D0-4744-11E4-B3CF-842B2B6CFE1B",iconNameBefore:"old-name",iconNameAfter:"new-name",iconDescriptionBefore:null,iconDescriptionAfter:null,iconDataBefore:null,iconDataAfter:null,text:null,date:"2017-10-17T15:50:55Z",user:{id:"c4ea5584-07e3-11e4-bf19-842b2b6cfe1b",name:"Austin Andrews",github:"templarian"},icon:{id:"AB147073-9D20-4DA1-A108-3856FC1764C1",name:"icon-name",data:"M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z",user:{id:"79c44334-2d86-11e5-8ac4-842b2b6cfe1b",name:"First Last",github:"GitHubUser"}},issue:42},{id:"ecb3dfda-b352-11e7-bf5c-94188269ec50",modificationId:"a185a9e8-c192-11e7-bf5c-94188269ec50",packageId:"38EF63D0-4744-11E4-B3CF-842B2B6CFE1B",iconNameBefore:null,iconNameAfter:null,iconDescriptionBefore:null,iconDescriptionAfter:null,iconDataBefore:null,iconDataAfter:null,text:"tag-created",date:"2017-10-16T15:50:39Z",user:{id:"c4ea5584-07e3-11e4-bf19-842b2b6cfe1b",name:"Austin Andrews",github:"templarian"},icon:{id:"AB147073-9D20-4DA1-A108-3856FC1764C1",name:"icon-name",data:"M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z",user:{id:"79c44334-2d86-11e5-8ac4-842b2b6cfe1b",name:"First Last",github:"GitHubUser"}},issue:42},{id:"c6d9381b-b352-11e7-bf5c-94188269ec50",modificationId:"ffe6b5f6-b975-11e9-8ca0-94188269ec50",packageId:"38EF63D0-4744-11E4-B3CF-842B2B6CFE1B",iconNameBefore:null,iconNameAfter:null,iconDescriptionBefore:null,iconDescriptionAfter:null,iconDataBefore:null,iconDataAfter:null,text:"tag-deleted",date:"2017-10-16T15:49:36Z",user:{id:"c4ea5584-07e3-11e4-bf19-842b2b6cfe1b",name:"Austin Andrews",github:"templarian"},icon:{id:"AB147073-9D20-4DA1-A108-3856FC1764C1",name:"icon-name",data:"M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z",user:{id:"79c44334-2d86-11e5-8ac4-842b2b6cfe1b",name:"First Last",github:"GitHubUser"}},issue:42},{id:"c2acb992-b352-11e7-bf5c-94188269ec50",modificationId:"3c638179-c4ca-11e8-9f27-94188269ec50",packageId:"38EF63D0-4744-11E4-B3CF-842B2B6CFE1B",iconNameBefore:null,iconNameAfter:null,iconDescriptionBefore:"Old Description",iconDescriptionAfter:"New Description",iconDataBefore:null,iconDataAfter:null,text:null,date:"2017-10-16T15:49:29Z",user:{id:"c4ea5584-07e3-11e4-bf19-842b2b6cfe1b",name:"Austin Andrews",github:"templarian"},icon:{id:"AB147073-9D20-4DA1-A108-3856FC1764C1",name:"icon-name",data:"M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z",user:{id:"79c44334-2d86-11e5-8ac4-842b2b6cfe1b",name:"First Last",github:"GitHubUser"}},issue:42},{id:"c2acb992-b352-11e7-bf5c-94188269ec50",modificationId:"254591d0-b28e-11e9-8ca0-94188269ec50",packageId:"38EF63D0-4744-11E4-B3CF-842B2B6CFE1B",iconNameBefore:null,iconNameAfter:null,iconDescriptionBefore:null,iconDescriptionAfter:null,iconDataBefore:null,iconDataAfter:null,text:"c4ea5584-07e3-11e4-bf19-842b2b6cfe1b",date:"2017-10-16T15:49:29Z",user:{id:"c4ea5584-07e3-11e4-bf19-842b2b6cfe1b",name:"Austin Andrews",github:"templarian"},icon:{id:"AB147073-9D20-4DA1-A108-3856FC1764C1",name:"icon-name",data:"M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z",user:{id:"79c44334-2d86-11e5-8ac4-842b2b6cfe1b",name:"First Last",github:"GitHubUser"}},issue:42},{id:"c2acb992-b352-11e7-bf5c-94188269ec50",modificationId:"f92f310f-bfed-11e9-8ca0-94188269ec50",packageId:"38EF63D0-4744-11E4-B3CF-842B2B6CFE1B",iconNameBefore:null,iconNameAfter:null,iconDescriptionBefore:null,iconDescriptionAfter:null,iconDataBefore:null,iconDataAfter:null,text:null,date:"2017-10-16T15:49:29Z",user:{id:"c4ea5584-07e3-11e4-bf19-842b2b6cfe1b",name:"Austin Andrews",github:"templarian"},icon:{id:"AB147073-9D20-4DA1-A108-3856FC1764C1",name:"icon-name",data:"M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z",user:{id:"79c44334-2d86-11e5-8ac4-842b2b6cfe1b",name:"First Last",github:"GitHubUser"}},issue:42},{id:"c2acb992-b352-11e7-bf5c-94188269ec50",modificationId:"brokenf-bfed-11e9-8ca0-94188269ec50",packageId:"38EF63D0-4744-11E4-B3CF-842B2B6CFE1B",iconNameBefore:null,iconNameAfter:null,iconDescriptionBefore:null,iconDescriptionAfter:null,iconDataBefore:null,iconDataAfter:null,text:"invalid type, this modification id is supposed to break!",date:"2017-10-16T15:49:29Z",user:{id:"c4ea5584-07e3-11e4-bf19-842b2b6cfe1b",name:"Austin Andrews",github:"templarian"},icon:{id:"AB147073-9D20-4DA1-A108-3856FC1764C1",name:"icon-name",data:"M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z",user:{id:"79c44334-2d86-11e5-8ac4-842b2b6cfe1b",name:"First Last",github:"GitHubUser"}},issue:42}];var Ak,kk,Lk,Fk,Sk,Mk,Pt;Mk=[k({selector:"x-pg-modification-basic",template:wk})];var $n=class extends(Sk=HTMLElement,Fk=[m()],Lk=[m()],kk=[m()],Ak=[m()],Sk){constructor(){super(...arguments);p(this,"$modification",a(Pt,8,this)),a(Pt,11,this);p(this,"$clear",a(Pt,12,this)),a(Pt,15,this);p(this,"$single",a(Pt,16,this)),a(Pt,19,this);p(this,"$editToggle",a(Pt,20,this)),a(Pt,23,this)}connectedCallback(){this.$modification.modifications=Ck,this.$modification.addEventListener("edit",n=>{console.log(n.detail)}),this.$editToggle.addEventListener("click",()=>{this.$modification.edit=!this.$modification.edit}),this.$clear.addEventListener("click",()=>{this.$modification.modifications=[]});var t=0;this.$single.addEventListener("click",()=>{t++;let n=this.$modification.modifications;this.$modification.modifications=[...n,{id:"3e7a0e1b-b355-11e7-bf5c-94188269ec50"+t,modificationId:"B4DEB3A8-A146-4086-9D7B-B67842A9CCB8",packageId:"38EF63D0-4744-11E4-B3CF-842B2B6CFE1B",iconNameBefore:null,iconNameAfter:null,iconDescriptionBefore:null,iconDescriptionAfter:null,iconDataBefore:null,iconDataAfter:null,text:"Example `"+t+'"',date:"2020-10-20T16:07:15Z",user:{id:"c4ea5584-07e3-11e4-bf19-842b2b6cfe1b",name:"Austin Andrews",github:"templarian"},icon:null,version:{major:1,minor:0,patch:42},issue:null}]})}};Pt=A(Sk),c(Pt,5,"$modification",Fk,$n),c(Pt,5,"$clear",Lk,$n),c(Pt,5,"$single",kk,$n),c(Pt,5,"$editToggle",Ak,$n),$n=c(Pt,0,"XPgModificationBasic",Mk,$n),a(Pt,1,$n);var Tk=`<div class="example">
  <pg-nav
    logo="M2,2H8V4H16V2H22V8H20V16H22V22H16V20H8V22H2V16H4V8H2V2M16,8V6H8V8H6V16H8V18H16V16H18V8H16M4,4V6H6V4H4M18,4V6H20V4H18M4,18V20H6V18H4M18,18V20H20V18H18Z"
    name="Material Design Icons"></pg-nav>
</div>`;var Dk,dd,ZH;Dk=[k({selector:"x-pg-nav-basic",template:Tk})];var fs=class extends(ZH=HTMLElement){};dd=A(ZH),fs=c(dd,0,"XPgNavBasic",Dk,fs),a(dd,1,fs);var $k=`<div class="example">
  <p>Extend <code>PgOverlay</code> to create overlays. View the readme for details.</p>
</div>`;var Hk=`p {\r
  margin: 0.5rem 0;\r
}`;var Ik,hd,JH;Ik=[k({selector:"x-pg-overlay-basic",template:$k,style:Hk})];var ms=class extends(JH=HTMLElement){};hd=A(JH),ms=c(hd,0,"XPgOverlayBasic",Ik,ms),a(hd,1,ms);var Rk=`<div part="overlay">
  <pg-menu part="menu"></pg-menu>
</div>`;var _k=`:host {\r
  display: contents;\r
}\r
\r
[part="overlay"] {\r
  margin: 0;\r
  padding: 0;\r
  border: 0;\r
  background: transparent;\r
  overflow: visible;\r
  --pg-menu-box-shadow: 0 0.125rem 0.5rem rgba(0, 0, 0, 0.25);\r
  top: anchor(top);\r
  left: anchor(left);\r
  min-width: 10rem;\r
  margin: var(--pg-overlay-menu-_y, 0) 0 0 var(--pg-overlay-menu-_x, 0);\r
}`;var Bk=[],fd=[],Ok,Nk,Vk,zk,jk,Yk,Kk,Uk,Gk,Wk,ge,dl,gs,Hn,qk,Qk,Zk,Pk;Wk=[k({selector:"pg-overlay-context-menu",template:Rk,style:_k})];var Mt=class extends(Gk=je,Uk=[m()],Kk=[m()],Yk=[L()],jk=[L()],zk=[L()],Vk=[L()],Nk=[L()],Ok=[L()],Gk){constructor(){super(...arguments);R(this,Hn);p(this,"$overlay",a(ge,8,this)),a(ge,11,this);p(this,"$menu",a(ge,12,this)),a(ge,15,this);p(this,"source",a(ge,16,this,null)),a(ge,19,this);p(this,"x",a(ge,20,this,0)),a(ge,23,this);p(this,"y",a(ge,24,this,0)),a(ge,27,this);p(this,"default",a(ge,28,this,null)),a(ge,31,this);p(this,"items",a(ge,32,this,[])),a(ge,35,this);p(this,"value",a(ge,36,this,null)),a(ge,39,this);R(this,dl,!1);R(this,gs)}render(t){t.items&&(this.$menu.items=this.items)}connectedCallback(){Bk.pop()?.close(),Bk.push(this),fd.push(this),this.$menu.addEventListener("select",F(this,Hn,Pk).bind(this)),this.$menu.addEventListener("close",F(this,Hn,Zk).bind(this)),this.$overlay.popover="auto",this.source!==null&&this.$overlay.showPopover({source:this.source}),this.$overlay.addEventListener("toggle",F(this,Hn,Qk).bind(this));let t=this.source?.getBoundingClientRect(),n=this.x-(t?.left||0),i=this.y-(t?.top||0);this.$overlay.style.setProperty("--pg-overlay-menu-_x",`${n}px`),this.$overlay.style.setProperty("--pg-overlay-menu-_y",`${i}px`),this.$menu.focus(0),B(this,gs,F(this,Hn,qk).bind(this)),document.addEventListener("pointerdown",x(this,gs))}disconnectedCallback(){fd.pop(),document.removeEventListener("pointerdown",x(this,gs))}};ge=A(Gk),dl=new WeakMap,gs=new WeakMap,Hn=new WeakSet,qk=function(t){B(this,dl,t.composedPath().includes(this.source))},Qk=function(t){t.newState==="closed"&&(this.close(),fd.length===0&&x(this,dl)&&(console.log(t),this.source?.focus()))},Zk=function(t){this.close(),this.source?.focus()},Pk=function(t){t.detail.item.index=t.detail.index,this.close(t.detail.item),this.source?.focus()},c(ge,5,"$overlay",Uk,Mt),c(ge,5,"$menu",Kk,Mt),c(ge,5,"source",Yk,Mt),c(ge,5,"x",jk,Mt),c(ge,5,"y",zk,Mt),c(ge,5,"default",Vk,Mt),c(ge,5,"items",Nk,Mt),c(ge,5,"value",Ok,Mt),Mt=c(ge,0,"PgOverlayContextMenu",Wk,Mt),a(ge,1,Mt);var Jk=`<div class="example">
  <div part="area" tabindex="0">
    Right Click or Context Menu Key
  </div>
  <p>Result: <code part="result"></code></p></p>
  <p>input: <code part="input"></code></p></p>
</div>`;var Xk=`p {\r
  margin: 0.5rem 0;\r
}\r
\r
[part=area] {\r
  display: flex;\r
  width: 20rem;\r
  height: 6rem;\r
  border: 1px dashed rgb(79, 143, 249);\r
  border-radius: 1rem;\r
  align-items: center;\r
  justify-content: center;\r
  cursor: default;\r
  background: var(--pg-focus-background-color, rgba(79, 143, 249, 0.1));\r
  color: rgba(79, 143, 249, 0.75);\r
  text-shadow: 0 0 4px #fff;\r
  box-sizing: border-box;\r
  outline: 0;\r
}\r
\r
[part=area]:focus {\r
  border-width: 2px;\r
}`;var tI="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z",rI="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z",eL="M3,3H21V5H3V3M3,7H15V9H3V7M3,11H21V13H3V11M3,15H15V17H3V15M3,19H21V21H3V19Z",nI="M3,3H21V5H3V3M7,7H17V9H7V7M3,11H21V13H3V11M7,15H17V17H7V15M3,19H21V21H3V19Z",iI="M3,3H21V5H3V3M9,7H21V9H9V7M3,11H21V13H3V11M9,15H21V17H9V15M3,19H21V21H3V19Z",tL,rL,nL,iL,oL,Jr,hl,Bu,aL;oL=[k({selector:"x-pg-overlay-context-menu-basic",template:Jk,style:Xk})];var Fi=class extends(iL=HTMLElement,nL=[m()],rL=[m()],tL=[m()],iL){constructor(){super(...arguments);R(this,Bu);p(this,"$area",a(Jr,8,this)),a(Jr,11,this);p(this,"$result",a(Jr,12,this)),a(Jr,15,this);p(this,"$input",a(Jr,16,this)),a(Jr,19,this);R(this,hl,null)}connectedCallback(){this.$area.addEventListener("contextmenu",F(this,Bu,aL).bind(this))}};Jr=A(iL),hl=new WeakMap,Bu=new WeakSet,aL=async function(t){console.log("context"),t.preventDefault();let n=[{label:"Add File",value:"item1",icon:tI,type:be},{label:"Add Folder",value:"item2",icon:rI,type:be},{type:pt},{label:"Text Alignment",value:"item3",icon:eL,type:be,items:[{label:"Left",value:"left",icon:eL,type:be,checked:!0},{label:"Center",value:"center",icon:nI,type:be,checked:!1},{label:"Right",value:"right",icon:iI,type:be,checked:!1}]}],i=await Mt.open({source:this.$area,x:t.clientX,y:t.clientY,value:x(this,hl),items:n});i!==void 0&&B(this,hl,i),this.$result.textContent=JSON.stringify(i)},c(Jr,5,"$area",nL,Fi),c(Jr,5,"$result",rL,Fi),c(Jr,5,"$input",tL,Fi),Fi=c(Jr,0,"XPgOverlayContextMenuBasic",oL,Fi),a(Jr,1,Fi);var sL=`<div class="example">
  <button part="button">Create Menu Overlay</button>
  <p>Result: <code part="result"></code></p></p>
  <p>input: <code part="input"></code></p></p>
</div>`;var lL=`p {\r
  margin: 0.5rem 0;\r
}`;var uL,cL,pL,dL,hL,Xr,fl,bs,Ou,fL;hL=[k({selector:"x-pg-overlay-menu-basic",template:sL,style:lL})];var Si=class extends(dL=HTMLElement,pL=[m()],cL=[m()],uL=[m()],dL){constructor(){super(...arguments);R(this,Ou);p(this,"$button",a(Xr,8,this)),a(Xr,11,this);p(this,"$result",a(Xr,12,this)),a(Xr,15,this);p(this,"$input",a(Xr,16,this)),a(Xr,19,this);R(this,fl,null);R(this,bs,!1)}connectedCallback(){this.$button.addEventListener("click",F(this,Ou,fL).bind(this))}};Xr=A(dL),fl=new WeakMap,bs=new WeakMap,Ou=new WeakSet,fL=async function(){if(x(this,bs))return;let t=[{label:"Item 1",value:"item1",type:Te},{label:"Item 2",value:"item2",type:Te},{type:pt},{label:"Item 3",value:"item3",type:Te}];B(this,bs,!0);let n=await wt.open({source:this.$button,value:x(this,fl),items:t,oninput:i=>{this.$input.textContent=i}});n!==void 0&&B(this,fl,n),this.$result.textContent=n,B(this,bs,!1)},c(Xr,5,"$button",pL,Si),c(Xr,5,"$result",cL,Si),c(Xr,5,"$input",uL,Si),Si=c(Xr,0,"XPgOverlayMenuBasic",hL,Si),a(Xr,1,Si);var mL=`<div class="example">
  <button part="button">Create Menu Overlay</button>
  <p>Result: <code part="result"></code></p></p>
  <p>input: <code part="input"></code></p></p>
</div>`;var gL=`p {\r
  margin: 0.5rem 0;\r
}`;var bL,vL,xL,yL,EL,en,ml,vs,Nu,wL;EL=[k({selector:"x-pg-overlay-select-menu-basic",template:mL,style:gL})];var Mi=class extends(yL=HTMLElement,xL=[m()],vL=[m()],bL=[m()],yL){constructor(){super(...arguments);R(this,Nu);p(this,"$button",a(en,8,this)),a(en,11,this);p(this,"$result",a(en,12,this)),a(en,15,this);p(this,"$input",a(en,16,this)),a(en,19,this);R(this,ml,null);R(this,vs,!1)}connectedCallback(){this.$button.addEventListener("click",F(this,Nu,wL).bind(this))}};en=A(yL),ml=new WeakMap,vs=new WeakMap,Nu=new WeakSet,wL=async function(){if(x(this,vs))return;let t=[{label:"Item 1",value:"item1",type:Te},{label:"Item 2",value:"item2",type:Te},{type:pt},{label:"Item 3",value:"item3",type:Te}];B(this,vs,!0);let n=await ut.open({source:this.$button,value:x(this,ml),items:t,oninput:i=>{this.$input.textContent=i}});n!==void 0&&B(this,ml,n),this.$result.textContent=n,B(this,vs,!1)},c(en,5,"$button",xL,Mi),c(en,5,"$result",vL,Mi),c(en,5,"$input",bL,Mi),Mi=c(en,0,"XPgOverlaySelectMenuBasic",EL,Mi),a(en,1,Mi);var CL=`<parent />
<div part="popover">
  <div part="arrow"></div>
  <input part="search" type="text" />
  <div part="scroll">
    <pg-grid part="grid" height="12rem"></pg-grid>
  </div>
</div>`;var AL=`[part~=popover] {\r
  background: #FFF;\r
  padding: 0.5rem;\r
  border-radius: 0.5rem;\r
  box-shadow: 0 1px 14px rgba(0, 0, 0, 0.2);\r
  border: 4px solid #4F8FF9;\r
}\r
\r
[part~=search] {\r
  border: 2px solid #453C4F;\r
  border-radius: 0.125rem;\r
  padding: 0.25rem 0.5rem;\r
  font-size: 1rem;\r
  width: 27.25rem;\r
  margin-bottom: 0.25rem;\r
  outline: none;\r
}\r
\r
[part~=arrow],\r
[part~=arrow]::before {\r
  position: absolute;\r
  width: 10px;\r
  height: 10px;\r
}\r
\r
[part~=arrow]::before {\r
  content: '';\r
  transform: rotate(45deg);\r
  background: #FFF;\r
}\r
\r
[part~=popover][data-popper-placement^='top'] > [part~=arrow] {\r
  bottom: -5px;\r
}\r
[part~=popover][data-popper-placement^='top'] > [part~=arrow]::before {\r
  border-bottom: 4px solid #4F8FF9;\r
  border-right: 4px solid #4F8FF9;\r
  border-bottom-right-radius: 0.25rem;\r
}\r
\r
[part~=popover][data-popper-placement^='bottom'] > [part~=arrow] {\r
  top: -10px;\r
}\r
[part~=popover][data-popper-placement^='bottom'] > [part~=arrow]::before {\r
  border-top: 4px solid #4F8FF9;\r
  border-left: 4px solid #4F8FF9;\r
  border-top-left-radius: 0.25rem;\r
}\r
\r
[part~=popover][data-popper-placement^='left'] > [part~=arrow] {\r
  right: -5px;\r
}\r
\r
[part~=popover][data-popper-placement^='right'] > [part~=arrow] {\r
  left: -5px;\r
}`;window.process={env:{}};var kL,LL,FL,SL,ML,TL,DL,ht;DL=[k({selector:"pg-picker",style:AL,template:CL})];var mn=class extends(TL=HTMLElement,ML=[L()],SL=[m()],FL=[m()],LL=[m()],kL=[m()],TL){constructor(){super(...arguments);p(this,"icons",a(ht,8,this,[])),a(ht,11,this);p(this,"$popover",a(ht,12,this)),a(ht,15,this);p(this,"$arrow",a(ht,16,this)),a(ht,19,this);p(this,"$search",a(ht,20,this)),a(ht,23,this);p(this,"$grid",a(ht,24,this)),a(ht,27,this);p(this,"isVisible",!1);p(this,"search","")}connectedCallback(){}render(){this.$grid.icons=this.icons.filter(t=>t.name.indexOf(this.search)!==-1)}};ht=A(TL),c(ht,5,"icons",ML,mn),c(ht,5,"$popover",SL,mn),c(ht,5,"$arrow",FL,mn),c(ht,5,"$search",LL,mn),c(ht,5,"$grid",kL,mn),mn=c(ht,0,"PgPicker",DL,mn),a(ht,1,mn);var $L=`<div part="grid">
  <svg part="svg" viewBox="0 0 24 24">
    <path part="path" fill="currentColor" d="M13,14H11V10H13M13,18H11V16H13M1,21H23L12,2L1,21Z"/>
  </svg>
</div>`;var HL=`:host {\r
  display: inline-flex;\r
  color: var(--pg-icon-color, #222);\r
}\r
\r
[part=svg] {\r
  position: relative;\r
  width: 1.5rem;\r
  height: 1.5rem;\r
  z-index: 1;\r
}\r
\r
[part="grid"] {\r
  position: relative;\r
  background-image:\r
    repeating-linear-gradient(rgba(83, 137, 164, 0.5) 0 2px, transparent 2px 100%),\r
    repeating-linear-gradient(90deg, rgba(83, 137, 164, 0.5) 0 2px, transparent 2px 100%);\r
  background-size: var(--pg-preview-size, 4px) var(--pg-preview-size, 4px);\r
  background-position: calc(var(--pg-preview-size, 4px) - 1px) calc(var(--pg-preview-size, 4px) - 1px);\r
}\r
\r
[part="grid"]::after {\r
  position: absolute;\r
  top: 0;\r
  left: 0;\r
  right: 0;\r
  bottom: 0;\r
  content: ' ';\r
  background-image:\r
    repeating-linear-gradient(#5389a4 0 2px, transparent 2px 100%),\r
    repeating-linear-gradient(90deg, #5389a4 0 2px, transparent 2px 100%);\r
  background-size: calc(var(--pg-preview-size, 4px) * 4) calc(var(--pg-preview-size, 4px) * 4);\r
  background-position: calc(var(--pg-preview-size, 4px) * 4 - 1px) calc(var(--pg-preview-size, 4px) * 4 - 1px);\r
}\r
`;var uI="M0 0h24v24H0V0zm2 2v20h20V2H2z",IL,RL,_L,BL,OL,NL,VL,zL,jL,Se;jL=[k({selector:"pg-preview",style:HL,template:$L})];var Er=class extends(zL=HTMLElement,VL=[L()],NL=[L()],OL=[L()],BL=[L()],_L=[m()],RL=[m()],IL=[m()],zL){constructor(){super(...arguments);p(this,"path",a(Se,8,this,uI)),a(Se,11,this);p(this,"width",a(Se,12,this,24)),a(Se,15,this);p(this,"height",a(Se,16,this,24)),a(Se,19,this);p(this,"size",a(Se,20,this,8)),a(Se,23,this);p(this,"$svg",a(Se,24,this)),a(Se,27,this);p(this,"$path",a(Se,28,this)),a(Se,31,this);p(this,"$grid",a(Se,32,this)),a(Se,35,this)}render(t){if(t.path&&this.$path.setAttribute("d",this.path),t.size){let n=parseInt(`${this.width}`,10),i=parseInt(`${this.height}`,10),o=parseInt(`${this.size}`,10);this.$svg.style.width=`${n*o}px`,this.$svg.style.height=`${i*o}px`,this.$grid.style.width=`${n*o}px`,this.$grid.style.height=`${i*o}px`,this.$grid.style.setProperty("--pg-preview-size",`${o}px`)}}};Se=A(zL),c(Se,5,"path",VL,Er),c(Se,5,"width",NL,Er),c(Se,5,"height",OL,Er),c(Se,5,"size",BL,Er),c(Se,5,"$svg",_L,Er),c(Se,5,"$path",RL,Er),c(Se,5,"$grid",IL,Er),Er=c(Se,0,"PgPreview",jL,Er),a(Se,1,Er);var YL=`<div class="example">
  <pg-preview part="preview"></pg-preview>
  <div>
    <button>None</button>
    <button>Account</button>
    <button>24x24</button>
    <button>36x36</button>
    <button>Grid Size = 4</button>
    <button>Grid Size = 8</button>
  </div>
</div>`;var KL,UL,GL,xs;GL=[k({selector:"x-pg-preview-basic",template:YL})];var ra=class extends(UL=HTMLElement,KL=[m()],UL){constructor(){super(...arguments);p(this,"$preview",a(xs,8,this)),a(xs,11,this)}connectedCallback(){}handleClick(){}};xs=A(UL),c(xs,5,"$preview",KL,ra),ra=c(xs,0,"XPgPreviewBasic",GL,ra),a(xs,1,ra);var WL=`<p>
  Content <span part="scrollCount">0</span>
  <button part="small">10 Items</button>
  <button part="large">500 Items</button>
  Overflow = <code part="overflow">visible</code>
</p>
<div class="example" part="overflowContainer">
  <pg-scroll part="scroll">
    <div part="scrollList" style="display:flex;flex-direction:column;"></div>
  </pg-scroll>
</div>`;var qL=`[part=scrollList] {\r
  display: flex;\r
  flex-direction: column;\r
}`;var QL,ZL,PL,JL,XL,e3,t3,r3,n3,Me;n3=[k({selector:"x-pg-scroll-basic",template:WL,style:qL})];var wr=class extends(r3=HTMLElement,t3=[m()],e3=[m()],XL=[m()],JL=[m()],PL=[m()],ZL=[m()],QL=[m()],r3){constructor(){super(...arguments);p(this,"$scroll",a(Me,8,this)),a(Me,11,this);p(this,"$scrollList",a(Me,12,this)),a(Me,15,this);p(this,"$scrollCount",a(Me,16,this)),a(Me,19,this);p(this,"$small",a(Me,20,this)),a(Me,23,this);p(this,"$large",a(Me,24,this)),a(Me,27,this);p(this,"$overflow",a(Me,28,this)),a(Me,31,this);p(this,"$overflowContainer",a(Me,32,this)),a(Me,35,this)}connectedCallback(){let t=[];var n=0,i=0;let o=()=>{this.$scroll.height=t.length*44};function s(){t.splice(0,t.length);for(var f=0;f<10;f++)t.push(`Test Item ${f}`);o()}function l(){t.splice(0,t.length);for(var f=0;f<500;f++)t.push(`Test Item ${f}`);o()}this.$small.addEventListener("click",s),this.$large.addEventListener("click",l);var u=[];let d=f=>{for(var g=u.length;g<f;g++){var b=document.createElement("button");b.innerText="Placeholder",b.style.height="44px",this.$scrollList.appendChild(b),u.push(b)}u.forEach((w,v)=>{w.style.display=v<f-1?"":"none"})};this.$scroll.addEventListener("calculate",f=>{var{offsetY:g,height:b,viewHeight:w}=f.detail,v=Math.ceil(w/44)+1,y=Math.floor(g/44);d(v),(n!==y||i!==w)&&(this.$scrollCount.innerText=`${y}, ${v}`,u.forEach((E,C)=>{E.innerText=t[C+y]}),n=y,i=w),this.$scrollList.style.transform=`translateY(${-1*g%44}px)`}),(f=>{f==="auto"?(this.$overflowContainer.style.overflow="auto",this.$overflowContainer.style.height="300px",this.$overflow.innerText="auto"):(this.$overflowContainer.style.overflow="visible",this.$overflowContainer.style.height="",this.$overflow.innerText="visible")})("auto"),s()}};Me=A(r3),c(Me,5,"$scroll",t3,wr),c(Me,5,"$scrollList",e3,wr),c(Me,5,"$scrollCount",XL,wr),c(Me,5,"$small",JL,wr),c(Me,5,"$large",PL,wr),c(Me,5,"$overflow",ZL,wr),c(Me,5,"$overflowContainer",QL,wr),wr=c(Me,0,"XPgScrollBasic",n3,wr),a(Me,1,wr);var i3=`<div class="example">
  <pg-search part="search"></pg-search>
</div>`;var o3,a3,s3,ys;s3=[k({selector:"x-pg-search-basic",template:i3})];var na=class extends(a3=HTMLElement,o3=[m()],a3){constructor(){super(...arguments);p(this,"$search",a(ys,8,this)),a(ys,11,this)}connectedCallback(){this.$search.items.push({type:"Documentation",name:"Android",url:"/getting-started/android"},{type:"Documentation",name:"Angular",url:"/getting-started/angular"},{type:"Documentation",name:"AngularJS",url:"/getting-started/angularjs"},{type:"Documentation",name:"Bootstrap",url:"/getting-started/bootstrap"},{type:"Documentation",name:"How to Play Football",url:"/getting-started/football"},{type:"Documentation",name:"Foo Angular Foo Angular",url:"/getting-started/bootstraps"}),this.$search.icons.push()}};ys=A(a3),c(ys,5,"$search",o3,na),na=c(ys,0,"XPgSearchBasic",s3,na),a(ys,1,na);var l3=`<div part="tab">
  <slot></slot>
</div>`;var u3=`:host {\r
  display: block;\r
}\r
\r
[part="tab"] {\r
  display: none;\r
}\r
\r
[part="tab"].active {\r
  display: block;\r
  border-top: 1px solid var(--pg-tab-border, #453C4F);\r
  margin-top: -1px;\r
}`;var c3,p3,d3,h3,Ti;h3=[k({selector:"pg-tab",style:u3,template:l3})];var wo=class extends(d3=HTMLElement,p3=[L()],c3=[m()],d3){constructor(){super(...arguments);p(this,"label",a(Ti,8,this,"")),a(Ti,11,this);p(this,"$tab",a(Ti,12,this)),a(Ti,15,this)}connectedCallback(){}show(){this.$tab.classList.add("active")}hide(){this.$tab.classList.remove("active")}render(t){t.label&&this.dispatchEvent(new CustomEvent("tab",{detail:{label:this.label},bubbles:!0}))}};Ti=A(d3),c(Ti,5,"label",p3,wo),c(Ti,5,"$tab",c3,wo),wo=c(Ti,0,"PgTab",h3,wo),a(Ti,1,wo);var f3="";var m3=`<div class="example">
  <pg-table part="table"></pg-table>
  <div>
    <button part="pushData">Push Data</button>
    <button part="deleteLast">Delete Last</button>
  </div>
  <div>
    <code>.getCSV()</code>: <pre part="output"></pre>
  </div>
</div>`;var hI="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z",Vu="M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z",g3,b3,v3,x3,y3,E3,Jt;E3=[k({selector:"x-pg-table-basic",style:f3,template:m3})];var In=class extends(y3=HTMLElement,x3=[m()],v3=[m()],b3=[m()],g3=[m()],y3){constructor(){super(...arguments);p(this,"$table",a(Jt,8,this)),a(Jt,11,this);p(this,"$pushData",a(Jt,12,this)),a(Jt,15,this);p(this,"$deleteLast",a(Jt,16,this)),a(Jt,19,this);p(this,"$output",a(Jt,20,this)),a(Jt,23,this);p(this,"newCount",0)}connectedCallback(){this.$table.columns=[{label:"Select",key:"selected",hideLabel:!0,editable:!0},{label:"Name",key:"name",editable:!0,maxWidth:"12rem"},{label:"Age",key:"age"},{label:"Favorite",key:"favorite",hideLabel:!0}],this.$table.data=[hi({selected:!0,name:"Dipper Pines",age:12,favorite:{type:Re,icon:Vu,value:!1}}),hi({selected:!1,name:"Mabel Pines",age:12,favorite:{type:Re,icon:Vu,value:!1}})],this.$pushData.addEventListener("click",this.handlePushData.bind(this)),this.$deleteLast.addEventListener("click",this.handleDeleteLast.bind(this)),this.$table.addEventListener("action",t=>{let{getColumn:n,key:i}=t.detail;switch(i){case"name":n(i).value=t.detail.value;break;case"favorite":n(i).value=!n(i).value,n(i).value?n(i).icon=hI:n(i).icon=Vu;break;case"selected":n(i).value=t.detail.value;break}this.$output.textContent=this.$table.getCSV()})}handlePushData(){this.$table.data.push(hi({name:`new ${this.newCount++}`,age:this.newCount,favorite:{type:Re,icon:Vu}})),this.$output.textContent=this.$table.getCSV()}handleDeleteLast(){this.$table.data.pop(),this.$output.textContent=this.$table.getCSV()}};Jt=A(y3),c(Jt,5,"$table",x3,In),c(Jt,5,"$pushData",v3,In),c(Jt,5,"$deleteLast",b3,In),c(Jt,5,"$output",g3,In),In=c(Jt,0,"XPgTableBasic",E3,In),a(Jt,1,In);var w3=`<ul part="tabset"></ul>
<div part="tabs">
  <slot part="slot"></slot>
</div>`;var C3=`:host {\r
  display: block;\r
  font-family: var(--pg-font-family, system-ui);\r
}\r
\r
[part="tabset"] {\r
  display: flex;\r
  flex-direction: row;\r
  list-style: none;\r
  padding: 0;\r
  margin: 0;\r
}\r
\r
[part="tab"] {\r
  margin-right: 0.25rem;\r
}\r
`;var A3=`<li part="tab">
  <button part="button"></button>
</li>`;var k3=`\r
[part="button"] {\r
  position: relative;\r
  display: flex;\r
  line-height: calc(2.5rem - 0.5px);\r
  border-top: 1px solid transparent;\r
  border-right: 1px solid transparent;\r
  border-bottom: 0;\r
  border-left: 1px solid transparent;\r
  border-radius: 0.25rem 0.25rem 0 0;\r
  padding: 0 0.75rem;\r
  text-decoration: none;\r
  color: var(--pg-tab-border, #453C4F);\r
  align-items: center;\r
  align-content: center;\r
  box-sizing: border-box;\r
  outline: none;\r
  background: transparent;\r
}\r
\r
[part="button"].selected {\r
  border-color: var(--pg-tab-border, #453C4F);\r
  font-weight: bold;\r
  background: #fff;\r
  cursor: default;\r
  height: calc(2.5rem + 0.5px);\r
}\r
\r
[part="button"]:not(.selected):hover {\r
  border-color: var(--pg-tab-border, #453C4F);\r
}\r
\r
[part="button"].selected:focus-visible {\r
  color: #197BE0;\r
  border-color: rgb(79, 143, 249);\r
}\r
\r
[part="button"]:not(.selected):focus-visible {\r
  background: var(--pg-focus-color, rgb(79, 143, 249, 0.15));\r
  border-color: rgb(79, 143, 249);\r
  color: #197BE0;\r
}`;var L3,F3,S3,M3,T3,D3,$3,ft,Es,H3,I3;$3=[k({selector:"pg-partial-tab",template:A3,style:k3})];var Cr=class extends(D3=HTMLElement,T3=[L()],M3=[L()],S3=[L()],F3=[m()],L3=[m()],D3){constructor(){super(...arguments);R(this,Es);p(this,"index",a(ft,8,this)),a(ft,11,this);p(this,"label",a(ft,12,this,"")),a(ft,15,this);p(this,"selected",a(ft,16,this,!1)),a(ft,19,this);p(this,"$tab",a(ft,20,this)),a(ft,23,this);p(this,"$button",a(ft,24,this)),a(ft,27,this)}connectedCallback(){this.$button.addEventListener("click",F(this,Es,H3).bind(this)),this.$button.addEventListener("keydown",F(this,Es,I3).bind(this))}render(t){t.label&&(this.$button.textContent=this.label),t.selected&&this.$button.classList.toggle("selected",this.selected)}focus(){this.$button.focus()}};ft=A(D3),Es=new WeakSet,H3=function(){let t=new CustomEvent("select",{detail:{index:this.index}});this.dispatchEvent(t)},I3=function(t){switch(t.key){case"ArrowLeft":let n=new CustomEvent("arrowleft",{detail:{index:this.index}});this.dispatchEvent(n),t.preventDefault();break;case"ArrowRight":let i=new CustomEvent("arrowright",{detail:{index:this.index}});this.dispatchEvent(i),t.preventDefault();break}},c(ft,5,"index",T3,Cr),c(ft,5,"label",M3,Cr),c(ft,5,"selected",S3,Cr),c(ft,5,"$tab",F3,Cr),c(ft,5,"$button",L3,Cr),Cr=c(ft,0,"PgPartialTab",$3,Cr),a(ft,1,Cr);var R3,_3,B3,O3,N3,tn,ws,$i,zu,V3;N3=[k({selector:"pg-tabs",style:C3,template:w3})];var Di=class extends(O3=HTMLElement,B3=[m()],_3=[m()],R3=[L()],O3){constructor(){super(...arguments);R(this,zu);p(this,"$tabset",a(tn,8,this)),a(tn,11,this);p(this,"$slot",a(tn,12,this)),a(tn,15,this);p(this,"tabs",a(tn,16,this,[])),a(tn,19,this);R(this,ws,0);R(this,$i,0)}connectedCallback(){this.addEventListener("tab",F(this,zu,V3).bind(this)),this.$slot.addEventListener("slotchange",this.handleSlotChange.bind(this)),Je({container:this.$tabset,items:this.tabs,type(t){return Cr},connect:(t,n)=>{t.addEventListener("select",i=>{let o=Array.from(this.$tabset.children),{index:s}=i.detail,l=this.$slot.assignedElements();l[x(this,ws)].hide(),o[x(this,ws)].selected=!1,l[s].show(),t.selected=!0,B(this,ws,s)}),t.addEventListener("arrowleft",i=>{let o=Array.from(this.$tabset.children),{index:s}=i.detail;this.tabs.length>1&&(s===0?B(this,$i,this.tabs.length-1):B(this,$i,s-1),o[x(this,$i)].focus())}),t.addEventListener("arrowright",i=>{let o=Array.from(this.$tabset.children),{index:s}=i.detail;this.tabs.length>1&&(s===this.tabs.length-1?B(this,$i,0):nn(this,$i)._++,o[x(this,$i)].focus())})}})}handleSlotChange(t){let n=Array.from(this.$tabset.children),i=this.$slot.assignedElements();i.length!==0&&(i[0].show(),n[0].selected=!0)}};tn=A(O3),ws=new WeakMap,$i=new WeakMap,zu=new WeakSet,V3=function(t){let{detail:n}=t;this.tabs.push(n),t.stopPropagation()},c(tn,5,"$tabset",B3,Di),c(tn,5,"$slot",_3,Di),c(tn,5,"tabs",R3,Di),Di=c(tn,0,"PgTabs",N3,Di),a(tn,1,Di);var z3=`<div class="example">
  <pg-tabs>
    <pg-tab label="Tab 1">
      Content 1
    </pg-tab>
    <pg-tab label="Tab 2">
      Content 2
    </pg-tab>
    <pg-tab label="Tab 3">
      Content 3
    </pg-tab>
  </pg-tabs>
</div>`;var j3,md,gI;j3=[k({selector:"x-pg-tabs-basic",template:z3})];var Cs=class extends(gI=HTMLElement){};md=A(gI),Cs=c(md,0,"XPgTabsBasic",j3,Cs),a(md,1,Cs);var Y3=`<button part="button">
  <span part="loading">
    <svg part="loadingIcon" viewBox="0 0 24 24">
      <path fill="currentColor" d="M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z" />
    </svg>
  </span>
  <span part="message"></span>
  <span part="close">
    <svg part="closeIcon" viewBox="0 0 24 24">
      <path fill="currentColor" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
    </svg>
  </span>
</button>`;var K3=`[part~=button] {\r
  position: fixed;\r
  top: 1rem;\r
  right: 1rem;\r
  display: flex;\r
  background: #737E9E;\r
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.4);\r
  border-radius: 0.25rem;\r
  border: 1px solid #737E9E;\r
  padding: 0.5rem 0.5rem 0.5rem 0.75rem;\r
  color: #FFF;\r
  align-items: center;\r
  outline: 0;\r
  transition: border-color 0.1s ease-in;\r
  margin-bottom: 0.5rem;\r
  max-width: 18rem;\r
  font-size: 1rem;\r
  align-items: center;\r
}\r
\r
[part~=loading] {\r
  height: 1.5rem;\r
  margin: -0.25rem 0.5rem -0.25rem -0.25rem;\r
}\r
\r
[part~=button]:hover {\r
  border: 1px solid rgba(255, 255, 255, 0.75);\r
}\r
\r
[part~=close] {\r
  height: 1rem;\r
}\r
\r
[part~=closeIcon] {\r
  width: 1rem;\r
  height: 1rem;\r
}\r
\r
[part~=loadingIcon] {\r
  animation: spin 2s infinite linear;\r
  width: 1.5rem;\r
  height: 1.5rem;\r
}\r
\r
@keyframes progress {\r
  from {\r
    width: 0;\r
  }\r
  to {\r
    width: 20rem;\r
  }\r
}\r
\r
@keyframes spin {\r
  0% {\r
    transform: rotate(0deg);\r
  }\r
  100% {\r
    transform: rotate(359deg);\r
  }\r
}\r
\r
[part~=closeIcon] {\r
  margin-left: 0.5rem;\r
  color: rgba(255, 255, 255, 0.5);\r
  transition: color 0.1s ease-in;\r
}\r
\r
[part~=button]:hover [part~=closeIcon] {\r
  color: #fff;\r
}\r
\r
.hide {\r
  display: none;\r
}\r
\r
/* Error */\r
\r
[part~=button].error {\r
  color: #721c24;\r
  background-color: #f8d7da;\r
  border-color: #f5c6cb;\r
}\r
\r
[part~=button].error [part~=closeIcon] {\r
  color: rgba(114, 28, 36, 0.6);\r
}\r
\r
[part~=button].error:hover {\r
  border-color: #721c24;\r
}\r
\r
[part~=button].error:hover [part~=closeIcon] {\r
  color: #721c24;\r
}\r
\r
/* Warning */\r
\r
[part~=button].warning {\r
  color: #856404;\r
  background-color: #fff3cd;\r
  border-color: #ffeeba;\r
}\r
\r
[part~=button].warning [part~=closeIcon] {\r
  color: rgba(133, 101, 4, 0.6);\r
}\r
\r
[part~=button].warning:hover {\r
  border-color: #856404;\r
}\r
\r
[part~=button].warning:hover [part~=closeIcon] {\r
  color: #856404;\r
}`;var U3,G3,W3,q3,Q3,Z3,P3,J3,X3,eF,tF,ue;tF=[k({selector:"pg-toast",style:K3,template:Y3})];var Ve=class extends(eF=je,X3=[L()],J3=[L()],P3=[L()],Z3=[L()],Q3=[m()],q3=[m()],W3=[m()],G3=[m()],U3=[m()],eF){constructor(){super(...arguments);p(this,"loading",a(ue,8,this,!1)),a(ue,11,this);p(this,"message",a(ue,12,this,"")),a(ue,15,this);p(this,"type",a(ue,16,this,"default")),a(ue,19,this);p(this,"key",a(ue,20,this,pl())),a(ue,23,this);p(this,"$button",a(ue,24,this)),a(ue,27,this);p(this,"$loadingIcon",a(ue,28,this)),a(ue,31,this);p(this,"$closeIcon",a(ue,32,this)),a(ue,35,this);p(this,"$message",a(ue,36,this)),a(ue,39,this);p(this,"$loading",a(ue,40,this)),a(ue,43,this);p(this,"toasts",[])}static open(t={}){super.open(t);let n=pl();return Promise.resolve(function(i){let o=n;i===void 0&&this.toasts.find(s=>s.key===o).remove()})}connectedCallback(){this.$button.addEventListener("click",()=>{this.remove()})}render(){this.$message.textContent=this.message,this.$loading.classList.toggle("hide",!this.loading),this.$button.classList.toggle("error",this.type==="error"),this.$button.classList.toggle("warning",this.type==="warning")}};ue=A(eF),c(ue,5,"loading",X3,Ve),c(ue,5,"message",J3,Ve),c(ue,5,"type",P3,Ve),c(ue,5,"key",Z3,Ve),c(ue,5,"$button",Q3,Ve),c(ue,5,"$loadingIcon",q3,Ve),c(ue,5,"$closeIcon",W3,Ve),c(ue,5,"$message",G3,Ve),c(ue,5,"$loading",U3,Ve),Ve=c(ue,0,"PgToast",tF,Ve),a(ue,1,Ve);var rF=`<div>
  <button part="toastInfo">Info</button>
  <button part="toastWarning">Warning</button>
  <button part="toastError">Error</button>
  <button part="toastLoading">Loading (mock 3 seconds)</button>
  <button part="toastToggle">Toggle Toast</button>
</div>`;var nF,iF,oF,aF,sF,lF,uF,mt;uF=[k({selector:"x-pg-toast-basic",template:rF})];var gn=class extends(lF=HTMLElement,sF=[m()],aF=[m()],oF=[m()],iF=[m()],nF=[m()],lF){constructor(){super(...arguments);p(this,"$toastInfo",a(mt,8,this)),a(mt,11,this);p(this,"$toastWarning",a(mt,12,this)),a(mt,15,this);p(this,"$toastError",a(mt,16,this)),a(mt,19,this);p(this,"$toastLoading",a(mt,20,this)),a(mt,23,this);p(this,"$toastToggle",a(mt,24,this)),a(mt,27,this);p(this,"cacheToast")}connectedCallback(){this.$toastInfo.addEventListener("click",this.handleInfo.bind(this)),this.$toastWarning.addEventListener("click",this.handleWarning.bind(this)),this.$toastError.addEventListener("click",this.handleError.bind(this)),this.$toastLoading.addEventListener("click",this.handleLoading.bind(this)),this.$toastToggle.addEventListener("click",this.handleToggle.bind(this))}handleInfo(){Ve.open({type:"info",message:"Hello World! With really long content that wraps rows."})}handleWarning(){Ve.open({type:"warning",message:"Hello World! Warning"})}handleError(){Ve.open({type:"error",message:"Hello World! Error"})}async handleLoading(){let t=await Ve.open({type:"info",message:"Loading...",loading:!0});setTimeout(()=>{t({type:"success",message:"Saved record.",timeout:5})},3e3)}async handleToggle(){this.cacheToast?(this.cacheToast(),this.cacheToast=null):this.cacheToast=await Ve.open({type:"info",message:"Loading...",loading:!0})}};mt=A(lF),c(mt,5,"$toastInfo",sF,gn),c(mt,5,"$toastWarning",aF,gn),c(mt,5,"$toastError",oF,gn),c(mt,5,"$toastLoading",iF,gn),c(mt,5,"$toastToggle",nF,gn),gn=c(mt,0,"XPgToastsBasic",uF,gn),a(mt,1,gn);var cF='<div part="container"></div>';var pF=`[part~=container] {\r
  display: inline-flex;\r
  flex-direction: column;\r
  align-items: flex-end;\r
  position: fixed;\r
  top: 1rem;\r
  right: 1rem;\r
}`;var dF,hF,fF,As;fF=[k({selector:"pg-toasts",style:pF,template:cF})];var ia=class extends(hF=HTMLElement,dF=[m()],hF){constructor(){super(...arguments);p(this,"toasts",[]);p(this,"$container",a(As,8,this)),a(As,11,this)}connectedCallback(){k4({add:t=>{this.toasts.push(t),this.render()},remove:t=>{let n=this.toasts.findIndex(o=>o.key===t);if(n!==-1){var[i]=this.toasts.splice(n,1);this.$container.querySelector(`[key="${i.key}"]`)?.remove()}}})}render(){this.toasts.forEach(t=>{let n=this.$container.querySelector(`[key="${t.key}"]`);if(n)n.message=t.message,n.loading=t.loading,n.type=t.type;else{let i=document.createElement("pg-toast");i.setAttribute("key",t.key),i.message=t.message,i.loading=t.loading,i.type=t.type,this.$container.appendChild(i)}})}};As=A(hF),c(As,5,"$container",dF,ia),ia=c(As,0,"PgToasts",fF,ia),a(As,1,ia);var mF=`<div>
  <div class="example">
    <pg-toasts></pg-toasts>
  </div>
  <button part="toastInfo">Info</button>
  <button part="toastWarning">Warning</button>
  <button part="toastError">Error</button>
  <button part="toastLoading">Loading</button>
  <button part="toastRemove">Remove Loading</button>
  <p>Note: This just triggers the show to make styling easier.</p>
</div>`;function ju(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var r=Math.random()*16|0,t=e=="x"?r:r&3|8;return t.toString(16)})}var gF,bF,vF,xF,yF,EF,wF,gt;wF=[k({selector:"x-pg-toasts-basic",template:mF})];var bn=class extends(EF=HTMLElement,yF=[m()],xF=[m()],vF=[m()],bF=[m()],gF=[m()],EF){constructor(){super(...arguments);p(this,"$toastInfo",a(gt,8,this)),a(gt,11,this);p(this,"$toastWarning",a(gt,12,this)),a(gt,15,this);p(this,"$toastError",a(gt,16,this)),a(gt,19,this);p(this,"$toastLoading",a(gt,20,this)),a(gt,23,this);p(this,"$toastRemove",a(gt,24,this)),a(gt,27,this);p(this,"key","")}connectedCallback(){this.$toastInfo.addEventListener("click",this.handleInfo.bind(this)),this.$toastWarning.addEventListener("click",this.handleWarning.bind(this)),this.$toastError.addEventListener("click",this.handleError.bind(this)),this.$toastLoading.addEventListener("click",this.handleLoading.bind(this)),this.$toastRemove.addEventListener("click",this.handleRemove.bind(this))}handleInfo(){document.body.dispatchEvent(new CustomEvent("pgtoastadd",{detail:{type:"info",message:"Hello World! With really long content that wraps rows.",key:ju()}}))}handleWarning(){document.body.dispatchEvent(new CustomEvent("pgtoastadd",{detail:{type:"warning",message:"Hello World! Warning",key:ju()}}))}handleError(){document.body.dispatchEvent(new CustomEvent("pgtoastadd",{detail:{type:"error",message:"Hello World! Error",key:ju()}}))}handleLoading(){this.key=ju(),document.body.dispatchEvent(new CustomEvent("pgtoastadd",{detail:{type:"info",message:"Loading...",loading:!0,key:this.key}}))}handleRemove(){this.key&&(document.body.dispatchEvent(new CustomEvent("pgtoastremove",{detail:{key:this.key}})),this.key="")}};gt=A(EF),c(gt,5,"$toastInfo",yF,bn),c(gt,5,"$toastWarning",xF,bn),c(gt,5,"$toastError",vF,bn),c(gt,5,"$toastLoading",bF,bn),c(gt,5,"$toastRemove",gF,bn),bn=c(gt,0,"XPgToastsBasic",wF,bn),a(gt,1,bn);var CF=`<pg-tooltip part="tooltip1"></pg-tooltip>
<pg-tooltip part="tooltip2"></pg-tooltip>

<div class="example">
  <div class="tooltip-grid">
    <button part="tooltipSource1"></button>
    <button part="tooltipSource2"></button>
    <button part="tooltipTop"></button>
    <button part="tooltipTopStart"></button>
    <button part="tooltipTopEnd"></button>
    <button part="tooltipRight"></button>
    <button part="tooltipRightStart"></button>
    <button part="tooltipRightEnd"></button>
    <button part="tooltipBottom"></button>
    <button part="tooltipBottomStart"></button>
    <button part="tooltipBottomEnd"></button>
    <button part="tooltipLeft"></button>
    <button part="tooltipLeftStart"></button>
    <button part="tooltipLeftEnd"></button>
  </div>
</div>`;var AF=`.tooltip-grid {\r
  height: 300px;\r
  display: grid;\r
  grid-template-rows: 4rem 4rem 1fr 4rem 4rem;\r
  grid-template-columns: 4rem 4rem 1fr 4rem 4rem;\r
}\r
.tooltip-grid button {\r
  width: 3rem;\r
  height: 3rem;\r
  align-self: center;\r
  justify-self: center;\r
}\r
[part="tooltipSource1"] {\r
  grid-column: 3;\r
  grid-row: 3;\r
}\r
[part="tooltipSource2"] {\r
  grid-column: 3;\r
  grid-row: 3;\r
}\r
[part="tooltipSource1"] {\r
  margin-right: 10rem;\r
}\r
[part="tooltipSource2"] {\r
  margin-left: 10rem;\r
}\r
[part="tooltipTopStart"] {  grid-column: 2; grid-row: 1; }\r
[part="tooltipTop"] { grid-column: 3; grid-row: 1; }\r
[part="tooltipTopEnd"] { grid-column: 4; grid-row: 1; }\r
[part="tooltipRightStart"] {  grid-column: 5; grid-row: 2; }\r
[part="tooltipRight"] { grid-column: 5; grid-row: 3; }\r
[part="tooltipRightEnd"] { grid-column: 5; grid-row: 4; }\r
[part="tooltipBottomStart"] {  grid-column: 2; grid-row: 5; }\r
[part="tooltipBottom"] { grid-column: 3; grid-row: 5; }\r
[part="tooltipBottomEnd"] { grid-column: 4; grid-row: 5; }\r
[part="tooltipLeftStart"] {  grid-column: 1; grid-row: 2; }\r
[part="tooltipLeft"] { grid-column: 1; grid-row: 3; }\r
[part="tooltipLeftEnd"] { grid-column: 1; grid-row: 4; }`;var kF,LF,FF,SF,MF,TF,DF,$F,HF,IF,RF,_F,BF,OF,NF,VF,zF,jF,Q;jF=[k({selector:"x-pg-tooltip-basic",template:CF,style:AF})];var $e=class extends(zF=HTMLElement,VF=[m()],NF=[m()],OF=[m()],BF=[m()],_F=[m()],RF=[m()],IF=[m()],HF=[m()],$F=[m()],DF=[m()],TF=[m()],MF=[m()],SF=[m()],FF=[m()],LF=[m()],kF=[m()],zF){constructor(){super(...arguments);p(this,"$tooltip1",a(Q,8,this)),a(Q,11,this);p(this,"$tooltip2",a(Q,12,this)),a(Q,15,this);p(this,"$tooltipSource1",a(Q,16,this)),a(Q,19,this);p(this,"$tooltipSource2",a(Q,20,this)),a(Q,23,this);p(this,"$tooltipTop",a(Q,24,this)),a(Q,27,this);p(this,"$tooltipTopStart",a(Q,28,this)),a(Q,31,this);p(this,"$tooltipTopEnd",a(Q,32,this)),a(Q,35,this);p(this,"$tooltipRight",a(Q,36,this)),a(Q,39,this);p(this,"$tooltipRightStart",a(Q,40,this)),a(Q,43,this);p(this,"$tooltipRightEnd",a(Q,44,this)),a(Q,47,this);p(this,"$tooltipBottom",a(Q,48,this)),a(Q,51,this);p(this,"$tooltipBottomStart",a(Q,52,this)),a(Q,55,this);p(this,"$tooltipBottomEnd",a(Q,56,this)),a(Q,59,this);p(this,"$tooltipLeft",a(Q,60,this)),a(Q,63,this);p(this,"$tooltipLeftStart",a(Q,64,this)),a(Q,67,this);p(this,"$tooltipLeftEnd",a(Q,68,this)),a(Q,71,this)}connectedCallback(){let t=n=>{this.$tooltip1.position=n,this.$tooltip2.position=n,this.$tooltip1.visible=!0,this.$tooltip1.rect=this.$tooltipSource1.getBoundingClientRect(),this.$tooltip1.text="Hello World!",this.$tooltip2.visible=!0,this.$tooltip2.rect=this.$tooltipSource2.getBoundingClientRect(),this.$tooltip2.text="-"};this.$tooltipTop.addEventListener("click",()=>{t("top")}),this.$tooltipTopStart.addEventListener("click",()=>{t("top-start")}),this.$tooltipTopEnd.addEventListener("click",()=>{t("top-end")}),this.$tooltipRight.addEventListener("click",()=>{t("right")}),this.$tooltipRightStart.addEventListener("click",()=>{t("right-start")}),this.$tooltipRightEnd.addEventListener("click",()=>{t("right-end")}),this.$tooltipBottom.addEventListener("click",()=>{t("bottom")}),this.$tooltipBottomStart.addEventListener("click",()=>{t("bottom-start")}),this.$tooltipBottomEnd.addEventListener("click",()=>{t("bottom-end")}),this.$tooltipLeft.addEventListener("click",()=>{t("left")}),this.$tooltipLeftStart.addEventListener("click",()=>{t("left-start")}),this.$tooltipLeftEnd.addEventListener("click",()=>{t("left-end")})}};Q=A(zF),c(Q,5,"$tooltip1",VF,$e),c(Q,5,"$tooltip2",NF,$e),c(Q,5,"$tooltipSource1",OF,$e),c(Q,5,"$tooltipSource2",BF,$e),c(Q,5,"$tooltipTop",_F,$e),c(Q,5,"$tooltipTopStart",RF,$e),c(Q,5,"$tooltipTopEnd",IF,$e),c(Q,5,"$tooltipRight",HF,$e),c(Q,5,"$tooltipRightStart",$F,$e),c(Q,5,"$tooltipRightEnd",DF,$e),c(Q,5,"$tooltipBottom",TF,$e),c(Q,5,"$tooltipBottomStart",MF,$e),c(Q,5,"$tooltipBottomEnd",SF,$e),c(Q,5,"$tooltipLeft",FF,$e),c(Q,5,"$tooltipLeftStart",LF,$e),c(Q,5,"$tooltipLeftEnd",kF,$e),$e=c(Q,0,"XPgTooltipBasic",jF,$e),a(Q,1,$e);var YF=`<button part="button">
  <pg-icon part="icon"></pg-icon>
</button>`;var KF=`:host {\r
  display: contents;\r
}\r
\r
[part="button"] {\r
  display: flex;\r
  background: transparent;\r
  border: 0;\r
  padding: 0.125rem;\r
  margin: -0.125rem;\r
  border-radius: 0.125rem;\r
}\r
\r
[part="button"]:hover {\r
  box-shadow: 0 0 0.125rem rgba(0, 0, 0, 0.25);\r
  background-color: rgba(255, 255, 255, 0.5);\r
  border-radius: 0.125rem;\r
}`;var EI="M0 0h24v24H0V0zm2 2v20h20V2H2z",UF,GF,WF,qF,QF,ZF,Xt,Yu,PF;ZF=[k({selector:"pg-tree-button-icon",style:KF,template:YF})];var yt=class extends(QF=HTMLElement,qF=[L()],WF=[L()],GF=[m()],UF=[m()],QF){constructor(){super(...arguments);R(this,Yu);p(this,"index",a(Xt,8,this)),a(Xt,11,this);p(this,"icon",a(Xt,12,this,EI)),a(Xt,15,this);p(this,"$button",a(Xt,16,this)),a(Xt,19,this);p(this,"$icon",a(Xt,20,this)),a(Xt,23,this)}connectedCallback(){this.$button.addEventListener("click",F(this,Yu,PF).bind(this))}render(t){t.icon&&(this.$icon.path=this.icon)}};Xt=A(QF),Yu=new WeakSet,PF=function(t){this.dispatchEvent(new CustomEvent("action",{bubbles:!0,composed:!0,detail:{index:this.index}}))},c(Xt,5,"index",qF,yt),c(Xt,5,"icon",WF,yt),c(Xt,5,"$button",GF,yt),c(Xt,5,"$icon",UF,yt),yt=c(Xt,0,"PgTreeButtonIcon",ZF,yt),a(Xt,1,yt);var JF=`<div part="item" draggable="true">
  <div part="selected"></div>
  <button part="toggle"></button>
  <button part="iconButton">
    <pg-icon part="icon"></pg-icon>
  </button>
  <input part="input" type="text" class="hide" />
  <button part="labelButton">
    <span part="label"></span>
  </button>
  <div part="actions"></div>
  <div part="dropabove"></div>
  <div part="dropon"></div>
  <div part="dropbelow"></div>
</div>
<div part="items"></div>`;var XF=`:host {\r
  display: contents;\r
  --y: calc(var(--x) + 1);\r
}\r
\r
.hide {\r
  display: none !important;\r
}\r
\r
[part=iconButton] {\r
  display: flex;\r
  background: transparent;\r
  border: 0;\r
  color: var(--pg-tree-item-color, #453C4F);\r
  padding: 0;\r
  --pg-icon-color: var(--pg-tree-item-color, #453C4F);\r
  align-items: center;\r
  font-family: var(--pg-font-family, system-ui);\r
  font-size: var(--pg-tree-item-font-size, 1rem);\r
}\r
\r
[part=labelButton] {\r
  display: flex;\r
  background: transparent;\r
  border: 0;\r
  color: var(--pg-tree-item-color, #453C4F);\r
  --pg-icon-color: var(--pg-tree-item-color, #453C4F);\r
  flex: 1;\r
  align-items: center;\r
  font-family: var(--pg-font-family, system-ui);\r
  font-size: var(--pg-tree-item-font-size, 1rem);\r
  margin: -0.25rem -0.25rem -0.25rem -0.25rem;\r
  padding: 0 0.25rem 0 0.25rem;\r
}\r
\r
[part=label] {\r
  text-overflow: ellipsis;\r
  white-space: nowrap;\r
  overflow: hidden;\r
}\r
\r
[part=input] {\r
  display: flex;\r
  font-family: var(--pg-font-family, system-ui);\r
  font-size: var(--pg-tree-item-font-size, 1rem);\r
  border-radius: 0.125rem;\r
  flex: 1;\r
  outline: 0;\r
  padding: 0 0.25rem;\r
  margin: -0.125rem -0.625rem -0.125rem -0.25rem;\r
  border-width: var(--pg-tree-item-border-width, 0);\r
  border-style: solid;\r
  border-color: var(--pg-tree-item-border-color, #453C4F);\r
}\r
\r
[part=item] {\r
  display: grid;\r
  background: var(--pg-tree-item-background, transparent);\r
  border-radius: 0.25rem;\r
  padding: 0.25rem;\r
  gap: 0 0.5rem;\r
  user-select: none;\r
  padding-left: calc((var(--x) * 0.5rem) + 0.25rem);\r
  transition: background-color 0.1s ease-out;\r
}\r
\r
[part=item] {\r
  grid-template-columns: min-content min-content minmax(0, 1fr) min-content;\r
  grid-template-rows: auto;\r
}\r
[part=item] [part=selected] {\r
  grid-row: 1;\r
  grid-column: 1;\r
}\r
[part=item] [part=toggle] {\r
  grid-row: 1;\r
  grid-column: 1;\r
}\r
[part=item] [part=iconButton] {\r
  grid-row: 1;\r
  grid-column: 2;\r
}\r
[part=item] [part=labelButton] {\r
  grid-row: 1;\r
  grid-column: 3;\r
}\r
[part=item] [part=actions] {\r
  grid-row: 1;\r
  grid-column: 4;\r
}\r
[part=item] [part=dropabove] {\r
  grid-row: 1;\r
  grid-column: 1 / 5;\r
  align-self: flex-start;\r
  transform: translateY(-0.875rem);\r
  height: 1rem;\r
  margin: 0 -0.25rem 0 -0.25rem;\r
  z-index: 1;\r
}\r
[part=item] [part=dropon] {\r
  grid-row: 1;\r
  grid-column: 1 / 5;\r
  margin: 0.125rem -0.25rem;\r
  z-index: 1;\r
}\r
[part=item]:not(.items) [part=dropon] {\r
  display: none;\r
}\r
[part=item].items.expanded [part=dropbelow] {\r
  display: none;\r
}\r
[part=item] [part=dropbelow] {\r
  grid-row: 1;\r
  grid-column: 1 / 5;\r
  align-self: flex-end;\r
  transform: translateY(0.875rem);\r
  height: 1rem;\r
  margin: 0 -0.25rem 0 -0.25rem;\r
  z-index: 1;\r
}\r
\r
[part=item]:not(.selected):not(.dragging):hover {\r
  background: var(--pg-tree-selected-secondary, rgb(69, 60, 79, 0.1));\r
}\r
[part=item].selected:not(.dragging):hover {\r
  background: var(--pg-tree-selected-secondary-hover, rgb(69, 60, 79, 0.1));\r
}\r
[part=item].selected,\r
[part=item].items.selected {\r
  background-color: var(--pg-tree-selected-secondary);\r
}\r
[part=item].items.selected:not(.expanded):not(.dragging) [part=toggle] {\r
  border-radius: 0.125rem;\r
  background-color: var(--pg-tree-selected-primary);\r
  background-image: url("data:image/svg+xml; utf8, <svg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27><path d=%27M 17,13L 17,11L 11,5L 9,7L 14,12L 9,17L 11,19%27 fill='white' /></svg>") !important;\r
}\r
\r
[part=item].items.selected.expanded:not(.dragging) [part=toggle] {\r
  border-radius: 0.125rem;\r
  background-color: var(--pg-tree-selected-primary);\r
  background-image: url("data:image/svg+xml; utf8, <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M 11,17L 13,17L 19,11L 17,9L 12,14L 7,9L 5,11' fill='white' /></svg>") !important;\r
}\r
\r
[part=item].items [part=selected] {\r
  display: none;\r
}\r
\r
[part=item]:not(.items) [part=selected] {\r
  visibility: hidden;\r
  display: flex;\r
  width: 1rem;\r
  margin-left: -0.125rem;\r
  margin-right: -0.375rem;\r
  margin-top: -0.125rem;\r
  margin-bottom: -0.125rem;\r
  border-radius: 0.125rem;\r
  background: var(--pg-tree-selected-primary);\r
}\r
\r
[part=item]:not(.dragging):not(.items).selected [part=selected] {\r
  visibility: visible;\r
}\r
\r
[part=actions] {\r
  display: flex;\r
  gap: 0.25rem;\r
  --pg-icon-color: var(--pg-tree-item-color, #453C4F);\r
}\r
\r
[part=items] {\r
  display: none;\r
  flex-direction: column;\r
  --x: calc(var(--y) + 1);\r
  gap: 0.25rem;\r
}\r
[part=items].expanded {\r
  display: flex;\r
}\r
\r
[part=toggle] {\r
  display: none;\r
  margin-left: -0.125rem;\r
  margin-right: -0.375rem;\r
  margin-top: -0.125rem;\r
  margin-bottom: -0.125rem;\r
  padding: 0 0 0 1rem;\r
  width: 1rem;\r
  border: 0;\r
  background-repeat: no-repeat;\r
  background-position: center;\r
  background-color: transparent;\r
}\r
\r
[part=toggle]:hover {\r
  box-shadow: 0 0 0.125rem rgba(0, 0, 0, 0.25);\r
  background-color: rgba(255, 255, 255, 0.5);\r
  border-radius: 0.125rem;\r
}\r
\r
[part=item].items:not(.expanded) [part=toggle] {\r
  display: flex;\r
  background-image: url("data:image/svg+xml; utf8, <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M 17,13L 17,11L 11,5L 9,7L 14,12L 9,17L 11,19' fill='rgb(69 60 79)' /></svg>");\r
}\r
\r
[part=item].items.expanded [part=toggle] {\r
  display: flex;\r
  background-image: url("data:image/svg+xml; utf8, <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M 11,17L 13,17L 19,11L 17,9L 12,14L 7,9L 5,11' fill='rgb(69 60 79)' /></svg>");\r
}\r
\r
[part=dropabove].drop::before,\r
[part=dropbelow].drop::before {\r
  content: ' ';\r
  height: 0.25rem;\r
  background-color: rgb(79, 143, 249);\r
  border-radius: 0.125rem;\r
  display: flex;\r
  margin-top: 0.375rem;\r
}\r
\r
[part=dropon].drop {\r
  margin: -0.25rem !important;\r
  border: 4px solid rgb(79, 143, 249);\r
  border-radius: 0.25rem;\r
}\r
\r
[part=item].dragging::after {\r
  content: ' ';\r
  display: flex;\r
  grid-column: 1 / 5;\r
  grid-row: 1;\r
  border-radius: 0.25rem;\r
  background: rgba(255, 255, 255, 0.5);\r
  user-select: none;\r
  margin: -0.25rem;\r
  border: 2px dashed rgb(79, 143, 249);\r
}\r
[part=items].dragging {\r
  --pg-_is-index-dragging: true;\r
}\r
[part=item].dragging [part=dropabove],\r
[part=item].dragging [part=dropon],\r
[part=item].dragging [part=dropbelow] {\r
  display: none;\r
}\r
\r
@container style(--pg-_is-dragging: false) {\r
  [part=dropabove],\r
  [part=dropon],\r
  [part=dropbelow] {\r
    display: none;\r
  }\r
}\r
\r
@container style(--pg-_is-index-dragging: true) {\r
  [part=item]::after {\r
    content: ' ';\r
    display: flex;\r
    grid-column: 1 / 5;\r
    grid-row: 1;\r
    border-radius: 0.25rem;\r
    background: rgba(255, 255, 255, 0.5);\r
    user-select: none;\r
    margin: -0.25rem;\r
  }\r
  [part=dropabove],\r
  [part=dropon],\r
  [part=dropbelow] {\r
    display: none;\r
  }\r
}\r
`;var CI="M0 0h24v24H0V0zm2 2v20h20V2H2z",e7,t7,r7,n7,i7,o7,a7,s7,l7,u7,c7,p7,d7,h7,f7,m7,g7,b7,v7,x7,y7,K,bl,N,gd,bd,E7,w7,C7,A7,k7,L7,F7,S7,M7,T7,D7,$7,H7,I7,R7,_7,vd,ks,B7,xd,O7,N7,vl,V7,z7,j7,Y7,K7,U7,xl,G7,W7,q7,Q7,Ku,Z7,P7,J7;y7=[k({selector:"pg-tree-item",style:XF,template:JF})];var xe=class xe extends(x7=HTMLElement,v7=[L()],b7=[L()],g7=[L()],m7=[L()],f7=[L()],h7=[L()],d7=[L()],p7=[m()],c7=[m()],u7=[m()],l7=[m()],s7=[m()],a7=[m()],o7=[m()],i7=[m()],n7=[m()],r7=[m()],t7=[m()],e7=[m()],x7){constructor(){super(...arguments);R(this,N);p(this,"index",a(K,8,this)),a(K,11,this);p(this,"label",a(K,12,this,"")),a(K,15,this);p(this,"selected",a(K,16,this,!1)),a(K,19,this);p(this,"expanded",a(K,20,this,!1)),a(K,23,this);p(this,"icon",a(K,24,this,{path:CI})),a(K,27,this);p(this,"actions",a(K,28,this,[])),a(K,31,this);p(this,"items",a(K,32,this,[])),a(K,35,this);p(this,"$toggle",a(K,36,this)),a(K,39,this);p(this,"$item",a(K,40,this)),a(K,43,this);p(this,"$input",a(K,44,this)),a(K,47,this);p(this,"$iconButton",a(K,48,this)),a(K,51,this);p(this,"$icon",a(K,52,this)),a(K,55,this);p(this,"$label",a(K,56,this)),a(K,59,this);p(this,"$labelButton",a(K,60,this)),a(K,63,this);p(this,"$actions",a(K,64,this)),a(K,67,this);p(this,"$items",a(K,68,this)),a(K,71,this);p(this,"$dropabove",a(K,72,this)),a(K,75,this);p(this,"$dropon",a(K,76,this)),a(K,79,this);p(this,"$dropbelow",a(K,80,this)),a(K,83,this);R(this,bl,!0);R(this,ks,!1);R(this,vl);R(this,xl)}connectedCallback(){this.$toggle.addEventListener("click",F(this,N,bd).bind(this)),this.$item.addEventListener("action",F(this,N,F7).bind(this)),this.$item.addEventListener("pointerenter",F(this,N,k7).bind(this)),this.$item.addEventListener("pointerleave",F(this,N,L7).bind(this)),this.$item.addEventListener("dragstart",F(this,N,V7).bind(this)),this.$item.addEventListener("dragend",F(this,N,z7).bind(this)),this.$labelButton.addEventListener("dblclick",F(this,N,B7).bind(this)),this.$labelButton.addEventListener("click",F(this,N,C7).bind(this)),this.$labelButton.addEventListener("keydown",F(this,N,A7).bind(this)),this.$iconButton.addEventListener("dblclick",F(this,N,E7).bind(this)),this.$iconButton.addEventListener("click",F(this,N,w7).bind(this)),this.$iconButton.addEventListener("keydown",F(this,N,O7).bind(this)),this.$item.addEventListener("contextmenu",F(this,N,_7).bind(this)),this.$input.addEventListener("blur",F(this,N,xd).bind(this)),this.$input.addEventListener("keydown",F(this,N,N7).bind(this)),this.$items.addEventListener("action",F(this,N,S7).bind(this)),this.$items.addEventListener("move",F(this,N,M7).bind(this)),this.$items.addEventListener("toggle",F(this,N,T7).bind(this)),this.$items.addEventListener("select",F(this,N,I7).bind(this)),this.$items.addEventListener("rename",F(this,N,D7).bind(this)),this.$items.addEventListener("up",F(this,N,$7).bind(this)),this.$items.addEventListener("down",F(this,N,H7).bind(this)),this.$items.addEventListener("itemdragstart",F(this,N,j7).bind(this)),this.$items.addEventListener("itemdragend",F(this,N,Y7).bind(this)),this.$items.addEventListener("itemdropenter",F(this,N,R7).bind(this)),this.$dropabove.addEventListener("dragenter",F(this,N,K7).bind(this)),this.$dropabove.addEventListener("dragleave",F(this,N,U7).bind(this)),this.$dropabove.addEventListener("dragover",F(this,N,Ku).bind(this)),this.$dropabove.addEventListener("drop",F(this,N,Z7).bind(this)),this.$dropon.addEventListener("dragenter",F(this,N,G7).bind(this)),this.$dropon.addEventListener("dragleave",F(this,N,W7).bind(this)),this.$dropon.addEventListener("dragover",F(this,N,Ku).bind(this)),this.$dropon.addEventListener("drop",F(this,N,P7).bind(this)),this.$dropbelow.addEventListener("dragenter",F(this,N,q7).bind(this)),this.$dropbelow.addEventListener("dragleave",F(this,N,Q7).bind(this)),this.$dropbelow.addEventListener("dragover",F(this,N,Ku).bind(this)),this.$dropbelow.addEventListener("drop",F(this,N,J7).bind(this)),Je({container:this.$actions,items:this.actions,type:t=>yt}),this.expanded&&F(this,N,gd).call(this)}disconnectedCallback(){console.log("disconnect",this.index)}render(t){t.label&&(this.$label.textContent=this.label),t.icon&&this.icon&&(this.$icon.path=this.icon.path),t.selected&&this.$item.classList.toggle("selected",this.selected),t.items&&this.$item.classList.toggle("items",this.items.length!==0),t.expanded&&(this.expanded&&F(this,N,gd).call(this),this.$item.classList.toggle("expanded",this.expanded),this.$items.classList.toggle("expanded",this.expanded))}};K=A(x7),bl=new WeakMap,N=new WeakSet,gd=function(){x(this,bl)&&(Je({container:this.$items,items:this.items,type:t=>xe}),B(this,bl,!1))},bd=function(){this.dispatchEvent(new CustomEvent("toggle",{bubbles:!0,composed:!0,detail:{indexes:[this.index]}}))},E7=function(t){let{ctrlKey:n,shiftKey:i}=t;n||i||this.dispatchEvent(new CustomEvent("select",{bubbles:!0,composed:!0,detail:{type:"icondoubleclick",indexes:[this.index]}}))},w7=function(){this.dispatchEvent(new CustomEvent("select",{bubbles:!0,composed:!0,detail:{type:"icon",indexes:[this.index]}}))},C7=function(t){if(x(this,ks)){B(this,ks,!1);return}let{ctrlKey:n,shiftKey:i}=t;this.dispatchEvent(new CustomEvent("select",{bubbles:!0,composed:!0,detail:{type:"label",indexes:[this.index],ctrlKey:n,shiftKey:i}}))},A7=function(t){t.key==="Enter"&&(F(this,N,vd).call(this),t.preventDefault())},k7=function(){this.dispatchEvent(new CustomEvent("enter",{bubbles:!0,composed:!0,detail:{indexes:[this.index]}}))},L7=function(){this.dispatchEvent(new CustomEvent("leave",{bubbles:!0,composed:!0,detail:{indexes:[this.index]}}))},F7=function(t){t.stopPropagation(),this.dispatchEvent(new CustomEvent("action",{bubbles:!0,composed:!0,detail:{indexes:[this.index],actionIndex:t.detail.index}}))},S7=function(t){t.detail.indexes.unshift(this.index)},M7=function(t){t.detail.indexes.unshift(this.index)},T7=function(t){t.detail.indexes.unshift(this.index)},D7=function(t){t.detail.indexes.unshift(this.index)},$7=function(t){t.detail.indexes.unshift(this.index)},H7=function(t){t.detail.indexes.unshift(this.index)},I7=function(t){t.detail.indexes.unshift(this.index)},R7=function(t){t.detail.indexes.unshift(this.index)},_7=function(t){t.preventDefault()},vd=function(){this.$labelButton.classList.add("hide"),this.$actions.classList.add("hide"),this.$input.classList.remove("hide"),this.$input.value=this.label,this.$input.select(),B(this,ks,!0),this.dispatchEvent(new CustomEvent("select",{bubbles:!0,composed:!0,detail:{type:"rename",indexes:[this.index]}}))},ks=new WeakMap,B7=function(t){let{ctrlKey:n,shiftKey:i}=t;n||i||(F(this,N,vd).call(this),t.preventDefault())},xd=function(){this.$labelButton.classList.remove("hide"),this.$actions.classList.remove("hide"),this.$input.classList.add("hide"),this.$labelButton.click(),this.dispatchEvent(new CustomEvent("rename",{bubbles:!0,composed:!0,detail:{indexes:[this.index],label:this.$input.value}}))},O7=function(t){switch(t.key){case"ArrowUp":this.dispatchEvent(new CustomEvent("up",{bubbles:!0,composed:!0,detail:{indexes:[this.index]}})),t.preventDefault();break;case"ArrowDown":this.dispatchEvent(new CustomEvent("down",{bubbles:!0,composed:!0,detail:{indexes:[this.index]}})),t.preventDefault();break}},N7=function(t){switch(t.key){case"Enter":F(this,N,xd).call(this);break;case"Escape":this.$labelButton.classList.remove("hide"),this.$actions.classList.remove("hide"),this.$input.classList.add("hide"),this.$input.value=this.label,this.$labelButton.click();break;case"ArrowUp":this.dispatchEvent(new CustomEvent("up",{bubbles:!0,composed:!0,detail:{indexes:[this.index]}})),this.$labelButton.classList.remove("hide"),this.$actions.classList.remove("hide"),this.$input.classList.add("hide"),t.preventDefault();break;case"ArrowDown":this.dispatchEvent(new CustomEvent("down",{bubbles:!0,composed:!0,detail:{indexes:[this.index]}})),this.$labelButton.classList.remove("hide"),this.$actions.classList.remove("hide"),this.$input.classList.add("hide"),t.preventDefault();break}},vl=new WeakMap,V7=function(t){let n=0;this.dispatchEvent(new CustomEvent("itemdragstart",{bubbles:!0,composed:!0,detail:{ctrlKey:t.ctrlKey,shiftKey:t.shiftKey,indexes:[this.index],callback:f=>{n=f}}})),this.$item.classList.toggle("dragging",!0),this.$items.classList.toggle("dragging",!0);let i=window.devicePixelRatio,o=document.createElement("canvas");document.body.append(o),o.width=100*i,o.height=40*i,o.style.width=`${o.width/i}px`;let s=20,l=16,u=6,d=6;var h=o.getContext("2d");if(h){let f=`${n}`;h.font=`bold ${l*i}px Segoe UI`;let g=h.measureText(f);h.fillStyle="#453C4F",h.beginPath(),h.roundRect(s*i,0,(g.width+d*2)*i,(l+u*2)*i,8+i*2),h.fill(),h.fillStyle="#FFF",h.beginPath(),h.roundRect((s+2)*i,2*i,(g.width+d*2-4)*i,(l+u*2-4)*i,8),h.fill(),h.fillStyle="#453C4F",h.fillText(f,(s+d+4)*i,(l+u-2)*i)}t.dataTransfer.setDragImage(o,0,0),B(this,vl,o)},z7=function(t){this.dispatchEvent(new CustomEvent("itemdragend",{bubbles:!0,composed:!0,detail:{indexes:[this.index]}})),this.$item.classList.toggle("dragging",!1),this.$items.classList.toggle("dragging",!1),x(this,vl).remove()},j7=function(t){t.detail.indexes.unshift(this.index)},Y7=function(t){t.detail.indexes.unshift(this.index)},K7=function(t){this.dispatchEvent(new CustomEvent("itemdropenter",{bubbles:!0,composed:!0,detail:{indexes:[this.index],callback:n=>{n&&(t.dataTransfer.dropEffect="move")}}})),t.target.classList.toggle("drop",!0),t.dataTransfer.setData("text","test"),t.dataTransfer.effectAllowed="move"},U7=function(t){console.log("darg leave"),t.target.classList.toggle("drop",!1)},xl=new WeakMap,G7=function(t){this.dispatchEvent(new CustomEvent("itemdropenter",{bubbles:!0,composed:!0,detail:{indexes:[this.index],callback:n=>{n&&(t.dataTransfer.dropEffect="move")}}})),t.target.classList.toggle("drop",!0),B(this,xl,setTimeout(()=>{F(this,N,bd).call(this)},1500))},W7=function(t){clearTimeout(x(this,xl)),console.log("darg leave"),t.target.classList.toggle("drop",!1)},q7=function(t){this.dispatchEvent(new CustomEvent("itemdropenter",{bubbles:!0,composed:!0,detail:{indexes:[this.index],callback:n=>{n&&(t.dataTransfer.dropEffect="move")}}})),t.target.classList.toggle("drop",!0)},Q7=function(t){console.log("darg leave"),t.target.classList.toggle("drop",!1)},Ku=function(t){t.preventDefault(),t.dataTransfer.dropEffect="move"},Z7=function(t){t.target.classList.toggle("drop",!1),this.dispatchEvent(new CustomEvent("move",{bubbles:!0,composed:!0,detail:{indexes:[this.index],position:"before"}}))},P7=function(t){t.target.classList.toggle("drop",!1),this.dispatchEvent(new CustomEvent("move",{bubbles:!0,composed:!0,detail:{indexes:[this.index],position:"on"}}))},J7=function(t){t.target.classList.toggle("drop",!1),this.dispatchEvent(new CustomEvent("move",{bubbles:!0,composed:!0,detail:{indexes:[this.index],position:"after"}}))},c(K,5,"index",v7,xe),c(K,5,"label",b7,xe),c(K,5,"selected",g7,xe),c(K,5,"expanded",m7,xe),c(K,5,"icon",f7,xe),c(K,5,"actions",h7,xe),c(K,5,"items",d7,xe),c(K,5,"$toggle",p7,xe),c(K,5,"$item",c7,xe),c(K,5,"$input",u7,xe),c(K,5,"$iconButton",l7,xe),c(K,5,"$icon",s7,xe),c(K,5,"$label",a7,xe),c(K,5,"$labelButton",o7,xe),c(K,5,"$actions",i7,xe),c(K,5,"$items",n7,xe),c(K,5,"$dropabove",r7,xe),c(K,5,"$dropon",t7,xe),c(K,5,"$dropbelow",e7,xe),xe=c(K,0,"PgTreeItem",y7,xe),a(K,1,xe);var gl=xe;var X7='<div part="items"></div>';var e8=`:host {\r
  display: contents;\r
  --pg-tree-size: 2;\r
  --pg-tree-selected-primary: #453C4F;\r
  --pg-tree-selected-secondary: var(--pg-tree-item-background-selected, rgb(69, 60, 79, 0.1));\r
  --pg-tree-selected-secondary-hover: var(--pg-tree-item-background-selected, rgb(69, 60, 79, 0.2));\r
}\r
/*\r
--pg-tree-item-background-selected\r
*/\r
:host(:focus-within) {\r
  --pg-tree-selected-primary: rgb(79, 143, 249);\r
  --pg-tree-selected-secondary: rgba(79, 143, 249, 0.15);\r
  --pg-tree-selected-secondary-hover: rgba(79, 143, 249, 0.25);\r
}\r
\r
[part=items] {\r
  display: flex;\r
  flex-direction: column;\r
  background: var(--pg-tree-background, transparent);\r
  padding: 0.25rem;\r
  gap: 0.25rem;\r
  --x: 0;\r
  --pg-_is-dragging: false;\r
}\r
\r
[part=items].dragging {\r
  --pg-_is-dragging: true;\r
}`;var t8,r8,n8,i8,Hi,Ue,oe,yd,o8,Uu,Ar,yl,a8;i8=[k({selector:"pg-tree",style:e8,template:X7})];var Co=class extends(n8=HTMLElement,r8=[L()],t8=[m()],n8){constructor(){super(...arguments);R(this,oe);p(this,"items",a(Hi,8,this,[])),a(Hi,11,this);p(this,"$items",a(Hi,12,this)),a(Hi,15,this);R(this,Ue,new Map)}connectedCallback(){Je({container:this.$items,items:this.items,type:t=>gl}),this.$items.addEventListener("action",t=>{t.stopPropagation(),this.dispatchEvent(new CustomEvent("action",{detail:{actionIndex:t.detail.actionIndex,item:F(this,oe,yl).call(this,t.detail.indexes)}}))}),this.$items.addEventListener("move",t=>{let{indexes:n,position:i}=t.detail;t.stopPropagation(),this.dispatchEvent(new CustomEvent("move",{detail:{item:F(this,oe,yl).call(this,t.detail.indexes),position:i}}))}),this.$items.addEventListener("rename",t=>{let{indexes:n,label:i}=t.detail;t.stopPropagation(),this.dispatchEvent(new CustomEvent("rename",{detail:{item:F(this,oe,yl).call(this,n),label:i}}))}),this.$items.addEventListener("toggle",t=>{let{indexes:n}=t.detail,i=F(this,oe,Ar).call(this,n);i.expanded=!i.expanded}),this.$items.addEventListener("select",t=>{t.stopPropagation();let{indexes:n,type:i,ctrlKey:o,shiftKey:s}=t.detail,l=F(this,oe,Ar).call(this,n),u=x(this,Ue).size,d=rc(l);!o&&u&&!x(this,Ue).has(d)&&(x(this,Ue).forEach(h=>F(this,oe,Ar).call(this,h).selected=!1),x(this,Ue).clear()),l.selected=i==="rename"?!0:!l.selected,l.selected?x(this,Ue).set(d,n):x(this,Ue).delete(d),this.dispatchEvent(new CustomEvent("select",{detail:{items:[...x(this,Ue).values()].map(h=>F(this,oe,yl).call(this,h))}}))}),this.$items.addEventListener("keydown",t=>{t.key==="Delete"&&(x(this,Ue).forEach(n=>{F(this,oe,Uu).call(this,n)}),x(this,Ue).clear())}),this.$items.addEventListener("itemdragstart",t=>{let{indexes:n,callback:i,ctrlKey:o,shiftKey:s}=t.detail;console.log("drag valid",n);let l=F(this,oe,Ar).call(this,n),u=rc(l);!o&&x(this,Ue).size&&(x(this,Ue).forEach(h=>F(this,oe,Ar).call(this,h).selected=!1),x(this,Ue).clear()),l.selected=!0,x(this,Ue).set(u,n);let d=0;x(this,Ue).forEach(h=>{let f=F(this,oe,Ar).call(this,h);d=F(this,oe,yd).call(this,f,d)}),i(d),this.$items.classList.toggle("dragging",!0)}),this.$items.addEventListener("itemdragend",t=>{this.$items.classList.toggle("dragging",!1)}),this.$items.addEventListener("itemdropenter",F(this,oe,o8).bind(this))}render(t){t.items&&console.log("yay",this.items.map(n=>n))}unselect(t){}};Hi=A(n8),Ue=new WeakMap,oe=new WeakSet,yd=function(t,n){return n+=1,t.items&&t.items.length>0&&t.items.forEach(i=>{n=F(this,oe,yd).call(this,i,n)}),n},o8=function(t){let{indexes:n,callback:i}=t.detail,o=F(this,oe,a8).call(this);console.log("valid???",n,o);let s=n.join(","),l=o.some(u=>s.startsWith(u));i(!l,u=>{t.dataTransfer.effectAllowed=u})},Uu=function(t){let n=t[t.length-1];t.slice(0,t.length-1).reduce((s,l)=>s.items[l],this).items.splice(n,1)},Ar=function(t){return t.reduce((n,i)=>n.items[i],this)},yl=function(t){return{indexes:t,remove:()=>{F(this,oe,Uu).call(this,t),x(this,Ue).clear()},getData:()=>F(this,oe,Ar).call(this,t),getParentData:()=>{let n=t.slice(0,t.length-1);return n.length===0?this:F(this,oe,Ar).call(this,n)},move:(n,i)=>{console.log(n,i);let o=n.indexes[n.indexes.length-1],s=n.indexes.slice(0,n.indexes.length-1),l=F(this,oe,Ar).call(this,t);F(this,oe,Uu).call(this,t),i==="on"?(F(this,oe,Ar).call(this,n.indexes).items.push(l),F(this,oe,Ar).call(this,n.indexes).expanded=!0):s.length===0?this.items.splice(i==="after"?o+1:o,0,l):F(this,oe,Ar).call(this,s).items.splice(i==="after"?o+1:o,0,l),x(this,Ue).clear(),this.$items.classList.toggle("dragging",!1)}}},a8=function(){let t=[];return x(this,Ue).forEach(n=>{t.push(n.join(","))}),t},c(Hi,5,"items",r8,Co),c(Hi,5,"$items",t8,Co),Co=c(Hi,0,"PgTree",i8,Co),a(Hi,1,Co);var s8=`<div style="background: #F1F1F1;padding: 0.25rem;">
  <div style="background: #FFF; max-width: 20rem">
    <pg-tree part="tree"></pg-tree>
  </div>
</div>
<h2>Tools</h2>
<button part="addItem">Add Item</button>
<button part="addFolder">Add Folder</button>
<button part="removeItem">Remove Item</button>
<button part="updateItem">Update Selected Label Item</button>
<input part="height" type="range" value="2" min="1" max="2" step="0.1" />
`;var kI="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z",LI="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z",wd="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z",FI="M2,5.27L3.28,4L20,20.72L18.73,22L15.65,18.92C14.5,19.3 13.28,19.5 12,19.5C7,19.5 2.73,16.39 1,12C1.69,10.24 2.79,8.69 4.19,7.46L2,5.27M12,9A3,3 0 0,1 15,12C15,12.35 14.94,12.69 14.83,13L11,9.17C11.31,9.06 11.65,9 12,9M12,4.5C17,4.5 21.27,7.61 23,12C22.18,14.08 20.79,15.88 19,17.19L17.58,15.76C18.94,14.82 20.06,13.54 20.82,12C19.17,8.64 15.76,6.5 12,6.5C10.91,6.5 9.84,6.68 8.84,7L7.3,5.47C8.74,4.85 10.33,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C12.69,17.5 13.37,17.43 14,17.29L11.72,15C10.29,14.85 9.15,13.71 9,12.28L5.6,8.87C4.61,9.72 3.78,10.78 3.18,12Z",SI="M12,17A2,2 0 0,0 14,15C14,13.89 13.1,13 12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V10C4,8.89 4.9,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z",Cd="M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V10A2,2 0 0,1 6,8H15V6A3,3 0 0,0 12,3A3,3 0 0,0 9,6H7A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,17A2,2 0 0,0 14,15A2,2 0 0,0 12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17Z";function Ed(e,r=!0,t=[]){return{icon:{path:LI},label:e,expanded:r,actions:[{type:yt,icon:wd,enabled:!0},{type:yt,label:"Delete",icon:Cd,enabled:!1}],items:t}}function Gu(e){return{icon:{path:kI},label:e,actions:[{type:yt,icon:wd,enabled:!0},{type:yt,label:"Delete",icon:Cd,enabled:!1}]}}var l8,u8,c8,p8,d8,h8,f8,m8,ze,Rn;m8=[k({selector:"x-pg-tree-basic",template:s8})];var rn=class extends(f8=HTMLElement,h8=[m()],d8=[m()],p8=[m()],c8=[m()],u8=[m()],l8=[m()],f8){constructor(){super(...arguments);p(this,"$tree",a(ze,8,this)),a(ze,11,this);p(this,"$addItem",a(ze,12,this)),a(ze,15,this);p(this,"$addFolder",a(ze,16,this)),a(ze,19,this);p(this,"$removeItem",a(ze,20,this)),a(ze,23,this);p(this,"$updateItem",a(ze,24,this)),a(ze,27,this);p(this,"$height",a(ze,28,this)),a(ze,31,this);R(this,Rn,[])}connectedCallback(){this.$tree.addEventListener("action",o=>{let s=o.detail.item,{actionIndex:l}=o.detail,u=s.getData().actions[l],{enabled:d}=u;l===0&&d?(u.icon=FI,u.enabled=!1):l===0&&!d&&(u.icon=wd,u.enabled=!0),l===1&&d?(u.icon=Cd,u.enabled=!1):l===1&&!d&&(u.icon=SI,u.enabled=!0)}),this.$tree.addEventListener("move",o=>{x(this,Rn).forEach(s=>{s.move(o.detail.item,o.detail.position)})}),this.$tree.addEventListener("rename",o=>{let{item:s,label:l}=o.detail,u=s.getData();u.label=l}),this.$tree.addEventListener("menu",o=>{}),this.$tree.addEventListener("select",o=>{B(this,Rn,o.detail.items)}),this.$tree.items=[Ed("Folder 1",!0,[Gu("Item 1")]),Gu("Item 2")];let t=3;this.$addItem.addEventListener("click",()=>{x(this,Rn).forEach(o=>{o.getData().items?o.getData().items.push(Gu(`Item ${t}`)):o.getParentData().items.push(Gu(`Item ${t}`)),t++})});let n=2;this.$addFolder.addEventListener("click",()=>{x(this,Rn).forEach(o=>{o.getData().items?o.getData().items.push(Ed(`Folder ${n}`)):o.getParentData().items.push(Ed(`Folder ${n}`)),n++})}),this.$removeItem.addEventListener("click",()=>{x(this,Rn).length===0&&alert("Select items first!"),x(this,Rn).forEach(o=>{o.remove()})});let i=0;this.$updateItem.addEventListener("click",()=>{x(this,Rn).forEach(o=>{o.getData().label=`Updated ${i++}`})}),this.$height.addEventListener("input",o=>{let{value:s}=o.target;this.$tree.style.setProperty("--pg-tree-size",`${s}`)})}};ze=A(f8),Rn=new WeakMap,c(ze,5,"$tree",h8,rn),c(ze,5,"$addItem",d8,rn),c(ze,5,"$addFolder",p8,rn),c(ze,5,"$removeItem",c8,rn),c(ze,5,"$updateItem",u8,rn),c(ze,5,"$height",l8,rn),rn=c(ze,0,"XPgTreeBasic",m8,rn),a(ze,1,rn);
/*! Bundled license information:

prismjs/prism.js:
  (**
   * Prism: Lightweight, robust, elegant syntax highlighting
   *
   * @license MIT <https://opensource.org/licenses/MIT>
   * @author Lea Verou <https://lea.verou.me>
   * @namespace
   * @public
   *)

lodash-es/lodash.js:
  (**
   * @license
   * Lodash (Custom Build) <https://lodash.com/>
   * Build: `lodash modularize exports="es" -o ./`
   * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   *)

js-yaml/dist/js-yaml.mjs:
  (*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT *)
*/
