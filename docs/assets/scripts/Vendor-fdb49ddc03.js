!function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=10)}({10:function(e,t,n){"use strict";n(7),n(6)},6:function(e,t){!function(t,n){var r=function(e,t){"use strict";if(t.getElementsByClassName){var n,r,i=t.documentElement,s=e.Date,a=e.HTMLPictureElement,c=e.addEventListener,o=e.setTimeout,u=e.requestAnimationFrame||o,l=e.requestIdleCallback,d=/^picture$/i,f=["load","error","lazyincluded","_lazyloaded"],p={},m=Array.prototype.forEach,h=function(e,t){return p[t]||(p[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")),p[t].test(e.getAttribute("class")||"")&&p[t]},A=function(e,t){h(e,t)||e.setAttribute("class",(e.getAttribute("class")||"").trim()+" "+t)},g=function(e,t){var n;(n=h(e,t))&&e.setAttribute("class",(e.getAttribute("class")||"").replace(n," "))},v=function(e,t,n){var r=n?"addEventListener":"removeEventListener";n&&v(e,t),f.forEach(function(n){e[r](n,t)})},y=function(e,r,i,s,a){var c=t.createEvent("CustomEvent");return i||(i={}),i.instance=n,c.initCustomEvent(r,!s,!a,i),e.dispatchEvent(c),c},z=function(t,n){var i;!a&&(i=e.picturefill||r.pf)?i({reevaluate:!0,elements:[t]}):n&&n.src&&(t.src=n.src)},b=function(e,t){return(getComputedStyle(e,null)||{})[t]},w=function(e,t,n){for(n=n||e.offsetWidth;n<r.minSize&&t&&!e._lazysizesWidth;)n=t.offsetWidth,t=t.parentNode;return n},E=function(){var e,n,r=[],i=[],s=r,a=function(){var t=s;for(s=r.length?i:r,e=!0,n=!1;t.length;)t.shift()();e=!1},c=function(r,i){e&&!i?r.apply(this,arguments):(s.push(r),n||(n=!0,(t.hidden?o:u)(a)))};return c._lsFlush=a,c}(),C=function(e,t){return t?function(){E(e)}:function(){var t=this,n=arguments;E(function(){e.apply(t,n)})}},x=function(e){var t,n=0,r=666,i=function(){t=!1,n=s.now(),e()},a=l?function(){l(i,{timeout:r}),666!==r&&(r=666)}:C(function(){o(i)},!0);return function(e){var i;(e=!0===e)&&(r=44),t||(t=!0,(i=125-(s.now()-n))<0&&(i=0),e||i<9&&l?a():o(a,i))}},S=function(e){var t,n,r=function(){t=null,e()},i=function(){var e=s.now()-n;e<99?o(i,99-e):(l||r)(r)};return function(){n=s.now(),t||(t=o(i,99))}},M=function(){var n,a,u,l,f,p,w,M,L,R,P,B,W,D,k,N=/^img$/i,$=/^iframe$/i,_="onscroll"in e&&!/glebot/.test(navigator.userAgent),I=0,F=0,U=-1,H=function(e){F--,e&&e.target&&v(e.target,H),(!e||F<0||!e.target)&&(F=0)},O=function(e,n){var r,s=e,a="hidden"==b(t.body,"visibility")||"hidden"!=b(e,"visibility");for(L-=n,B+=n,R-=n,P+=n;a&&(s=s.offsetParent)&&s!=t.body&&s!=i;)(a=(b(s,"opacity")||1)>0)&&"visible"!=b(s,"overflow")&&(r=s.getBoundingClientRect(),a=P>r.left&&R<r.right&&B>r.top-1&&L<r.bottom+1);return a},Q=function(){var e,s,c,o,l,d,p,m,h;if((f=r.loadMode)&&F<8&&(e=n.length)){s=0,U++,null==D&&("expand"in r||(r.expand=i.clientHeight>500&&i.clientWidth>500?500:370),W=r.expand,D=W*r.expFactor),I<D&&F<1&&U>2&&f>2&&!t.hidden?(I=D,U=0):I=f>1&&U>1&&F<6?W:0;for(;s<e;s++)if(n[s]&&!n[s]._lazyRace)if(_)if((m=n[s].getAttribute("data-expand"))&&(d=1*m)||(d=I),h!==d&&(w=innerWidth+d*k,M=innerHeight+d,p=-1*d,h=d),c=n[s].getBoundingClientRect(),(B=c.bottom)>=p&&(L=c.top)<=M&&(P=c.right)>=p*k&&(R=c.left)<=w&&(B||P||R||L)&&(r.loadHidden||"hidden"!=b(n[s],"visibility"))&&(u&&F<3&&!m&&(f<3||U<4)||O(n[s],d))){if(Y(n[s]),l=!0,F>9)break}else!l&&u&&!o&&F<4&&U<4&&f>2&&(a[0]||r.preloadAfterLoad)&&(a[0]||!m&&(B||P||R||L||"auto"!=n[s].getAttribute(r.sizesAttr)))&&(o=a[0]||n[s]);else Y(n[s]);o&&!l&&Y(o)}},G=x(Q),j=function(e){A(e.target,r.loadedClass),g(e.target,r.loadingClass),v(e.target,V)},q=C(j),V=function(e){q({target:e.target})},K=function(e,t){try{e.contentWindow.location.replace(t)}catch(n){e.src=t}},J=function(e){var t,n=e.getAttribute(r.srcsetAttr);(t=r.customMedia[e.getAttribute("data-media")||e.getAttribute("media")])&&e.setAttribute("media",t),n&&e.setAttribute("srcset",n)},X=C(function(e,t,n,i,s){var a,c,u,f,p,h;(p=y(e,"lazybeforeunveil",t)).defaultPrevented||(i&&(n?A(e,r.autosizesClass):e.setAttribute("sizes",i)),c=e.getAttribute(r.srcsetAttr),a=e.getAttribute(r.srcAttr),s&&(f=(u=e.parentNode)&&d.test(u.nodeName||"")),h=t.firesLoad||"src"in e&&(c||a||f),p={target:e},h&&(v(e,H,!0),clearTimeout(l),l=o(H,2500),A(e,r.loadingClass),v(e,V,!0)),f&&m.call(u.getElementsByTagName("source"),J),c?e.setAttribute("srcset",c):a&&!f&&($.test(e.nodeName)?K(e,a):e.src=a),s&&(c||f)&&z(e,{src:a})),e._lazyRace&&delete e._lazyRace,g(e,r.lazyClass),E(function(){(!h||e.complete&&e.naturalWidth>1)&&(h?H(p):F--,j(p))},!0)}),Y=function(e){var t,n=N.test(e.nodeName),i=n&&(e.getAttribute(r.sizesAttr)||e.getAttribute("sizes")),s="auto"==i;(!s&&u||!n||!e.src&&!e.srcset||e.complete||h(e,r.errorClass))&&(t=y(e,"lazyunveilread").detail,s&&T.updateElem(e,!0,e.offsetWidth),e._lazyRace=!0,F++,X(e,t,s,i,n))},Z=function(){if(!u)if(s.now()-p<999)o(Z,999);else{var e=S(function(){r.loadMode=3,G()});u=!0,r.loadMode=3,G(),c("scroll",function(){3==r.loadMode&&(r.loadMode=2),e()},!0)}};return{_:function(){p=s.now(),n=t.getElementsByClassName(r.lazyClass),a=t.getElementsByClassName(r.lazyClass+" "+r.preloadClass),k=r.hFac,c("scroll",G,!0),c("resize",G,!0),e.MutationObserver?new MutationObserver(G).observe(i,{childList:!0,subtree:!0,attributes:!0}):(i.addEventListener("DOMNodeInserted",G,!0),i.addEventListener("DOMAttrModified",G,!0),setInterval(G,999)),c("hashchange",G,!0),["focus","mouseover","click","load","transitionend","animationend","webkitAnimationEnd"].forEach(function(e){t.addEventListener(e,G,!0)}),/d$|^c/.test(t.readyState)?Z():(c("load",Z),t.addEventListener("DOMContentLoaded",G),o(Z,2e4)),n.length?(Q(),E._lsFlush()):G()},checkElems:G,unveil:Y}}(),T=function(){var e,n=C(function(e,t,n,r){var i,s,a;if(e._lazysizesWidth=r,r+="px",e.setAttribute("sizes",r),d.test(t.nodeName||""))for(s=0,a=(i=t.getElementsByTagName("source")).length;s<a;s++)i[s].setAttribute("sizes",r);n.detail.dataAttr||z(e,n.detail)}),i=function(e,t,r){var i,s=e.parentNode;s&&(r=w(e,s,r),(i=y(e,"lazybeforesizes",{width:r,dataAttr:!!t})).defaultPrevented||(r=i.detail.width)&&r!==e._lazysizesWidth&&n(e,s,i,r))},s=S(function(){var t,n=e.length;if(n)for(t=0;t<n;t++)i(e[t])});return{_:function(){e=t.getElementsByClassName(r.autosizesClass),c("resize",s)},checkElems:s,updateElem:i}}(),L=function(){L.i||(L.i=!0,T._(),M._())};return function(){var t,n={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0};r=e.lazySizesConfig||e.lazysizesConfig||{};for(t in n)t in r||(r[t]=n[t]);e.lazySizesConfig=r,o(function(){r.init&&L()})}(),n={cfg:r,autoSizer:T,loader:M,init:L,uP:z,aC:A,rC:g,hC:h,fire:y,gW:w,rAF:E}}}(t,t.document);t.lazySizes=r,"object"==typeof e&&e.exports&&(e.exports=r)}(window)},7:function(e,t,n){var r;!function(e){var t=navigator.userAgent;e.HTMLPictureElement&&/ecko/.test(t)&&t.match(/rv\:(\d+)/)&&RegExp.$1<45&&addEventListener("resize",function(){var t,n=document.createElement("source"),r=function(e){var t,r,i=e.parentNode;"PICTURE"===i.nodeName.toUpperCase()?(t=n.cloneNode(),i.insertBefore(t,i.firstElementChild),setTimeout(function(){i.removeChild(t)})):(!e._pfLastSize||e.offsetWidth>e._pfLastSize)&&(e._pfLastSize=e.offsetWidth,r=e.sizes,e.sizes+=",100vw",setTimeout(function(){e.sizes=r}))},i=function(){var e,t=document.querySelectorAll("picture > img, img[srcset][sizes]");for(e=0;e<t.length;e++)r(t[e])},s=function(){clearTimeout(t),t=setTimeout(i,99)},a=e.matchMedia&&matchMedia("(orientation: landscape)"),c=function(){s(),a&&a.addListener&&a.addListener(s)};return n.srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",/^[c|i]|d$/.test(document.readyState||"")?c():document.addEventListener("DOMContentLoaded",c),s}())}(window),function(i,s,a){"use strict";function c(e){return" "===e||"\t"===e||"\n"===e||"\f"===e||"\r"===e}function o(){$=!1,F=i.devicePixelRatio,_={},I={},z.DPR=F||1,U.width=Math.max(i.innerWidth||0,M.clientWidth),U.height=Math.max(i.innerHeight||0,M.clientHeight),U.vw=U.width/100,U.vh=U.height/100,y=[U.height,U.width,F].join("-"),U.em=z.getEmValue(),U.rem=U.em}function u(e,t,n,r){var i,s,a;return"saveData"===L.algorithm?e>2.7?a=n+1:(s=(t-n)*(i=Math.pow(e-.6,1.5)),r&&(s+=.1*i),a=e+s):a=n>1?Math.sqrt(e*t):e,a>n}function l(e){var t,n=z.getSet(e),r=!1;"pending"!==n&&(r=y,n&&(t=z.setRes(n),z.applySetCandidate(t,e))),e[z.ns].evaled=r}function d(e,t){return e.res-t.res}function f(e,t,n){var r;return!n&&t&&(n=(n=e[z.ns].sets)&&n[n.length-1]),(r=p(t,n))&&(t=z.makeUrl(t),e[z.ns].curSrc=t,e[z.ns].curCan=r,r.res||Z(r,r.set.sizes)),r}function p(e,t){var n,r,i;if(e&&t)for(i=z.parseSet(t),e=z.makeUrl(e),n=0;n<i.length;n++)if(e===z.makeUrl(i[n].url)){r=i[n];break}return r}function m(e,t){var n,r,i,s,a=e.getElementsByTagName("source");for(n=0,r=a.length;n<r;n++)(i=a[n])[z.ns]=!0,(s=i.getAttribute("srcset"))&&t.push({srcset:s,media:i.getAttribute("media"),type:i.getAttribute("type"),sizes:i.getAttribute("sizes")})}function h(e,t){function n(t){var n,r=t.exec(e.substring(d));if(r)return n=r[0],d+=n.length,n}function r(){var e,n,r,a,c,o,u,l,d,p=!1,m={};for(a=0;a<s.length;a++)o=(c=s[a])[c.length-1],u=c.substring(0,c.length-1),l=parseInt(u,10),d=parseFloat(u),V.test(u)&&"w"===o?((e||n)&&(p=!0),0===l?p=!0:e=l):K.test(u)&&"x"===o?((e||n||r)&&(p=!0),d<0?p=!0:n=d):V.test(u)&&"h"===o?((r||n)&&(p=!0),0===l?p=!0:r=l):p=!0;p||(m.url=i,e&&(m.w=e),n&&(m.d=n),r&&(m.h=r),r||n||e||(m.d=1),1===m.d&&(t.has1x=!0),m.set=t,f.push(m))}for(var i,s,a,o,u,l=e.length,d=0,f=[];;){if(n(G),d>=l)return f;i=n(j),s=[],","===i.slice(-1)?(i=i.replace(q,""),r()):function(){for(n(Q),a="",o="in descriptor";;){if(u=e.charAt(d),"in descriptor"===o)if(c(u))a&&(s.push(a),a="",o="after descriptor");else{if(","===u)return d+=1,a&&s.push(a),void r();if("("===u)a+=u,o="in parens";else{if(""===u)return a&&s.push(a),void r();a+=u}}else if("in parens"===o)if(")"===u)a+=u,o="in descriptor";else{if(""===u)return s.push(a),void r();a+=u}else if("after descriptor"===o)if(c(u));else{if(""===u)return void r();o="in descriptor",d-=1}d+=1}}()}}function A(e){var t,n,r,i,s,a,o=/^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,u=/^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;for(r=(n=function(e){function t(){i&&(s.push(i),i="")}function n(){s[0]&&(a.push(s),s=[])}for(var r,i="",s=[],a=[],o=0,u=0,l=!1;;){if(""===(r=e.charAt(u)))return t(),n(),a;if(l){if("*"===r&&"/"===e[u+1]){l=!1,u+=2,t();continue}u+=1}else{if(c(r)){if(e.charAt(u-1)&&c(e.charAt(u-1))||!i){u+=1;continue}if(0===o){t(),u+=1;continue}r=" "}else if("("===r)o+=1;else if(")"===r)o-=1;else{if(","===r){t(),n(),u+=1;continue}if("/"===r&&"*"===e.charAt(u+1)){l=!0,u+=2;continue}}i+=r,u+=1}}}(e)).length,t=0;t<r;t++)if(i=n[t],s=i[i.length-1],function(e){return!!(o.test(e)&&parseFloat(e)>=0)||(!!u.test(e)||("0"===e||"-0"===e||"+0"===e))}(s)){if(a=s,i.pop(),0===i.length)return a;if(i=i.join(" "),z.matchesMedia(i))return a}return"100vw"}s.createElement("picture");var g,v,y,z={},b=!1,w=function(){},E=s.createElement("img"),C=E.getAttribute,x=E.setAttribute,S=E.removeAttribute,M=s.documentElement,T={},L={algorithm:""},R=navigator.userAgent,P=/rident/.test(R)||/ecko/.test(R)&&R.match(/rv\:(\d+)/)&&RegExp.$1>35,B="currentSrc",W=/\s+\+?\d+(e\d+)?w/,D=/(\([^)]+\))?\s*(.+)/,k=i.picturefillCFG,N="font-size:100%!important;",$=!0,_={},I={},F=i.devicePixelRatio,U={px:1,in:96},H=s.createElement("a"),O=!1,Q=/^[ \t\n\r\u000c]+/,G=/^[, \t\n\r\u000c]+/,j=/^[^ \t\n\r\u000c]+/,q=/[,]+$/,V=/^\d+$/,K=/^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,J=function(e,t,n,r){e.addEventListener?e.addEventListener(t,n,r||!1):e.attachEvent&&e.attachEvent("on"+t,n)},X=function(e){var t={};return function(n){return n in t||(t[n]=e(n)),t[n]}},Y=function(){var e=/^([\d\.]+)(em|vw|px)$/,t=function(){for(var e=arguments,t=0,n=e[0];++t in e;)n=n.replace(e[t],e[++t]);return n},n=X(function(e){return"return "+t((e||"").toLowerCase(),/\band\b/g,"&&",/,/g,"||",/min-([a-z-\s]+):/g,"e.$1>=",/max-([a-z-\s]+):/g,"e.$1<=",/calc([^)]+)/g,"($1)",/(\d+[\.]*[\d]*)([a-z]+)/g,"($1 * e.$2)",/^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi,"")+";"});return function(t,r){var i;if(!(t in _))if(_[t]=!1,r&&(i=t.match(e)))_[t]=i[1]*U[i[2]];else try{_[t]=new Function("e",n(t))(U)}catch(e){}return _[t]}}(),Z=function(e,t){return e.w?(e.cWidth=z.calcListLength(t||"100vw"),e.res=e.w/e.cWidth):e.res=e.d,e},ee=function(e){if(b){var t,n,r,i=e||{};if(i.elements&&1===i.elements.nodeType&&("IMG"===i.elements.nodeName.toUpperCase()?i.elements=[i.elements]:(i.context=i.elements,i.elements=null)),t=i.elements||z.qsa(i.context||s,i.reevaluate||i.reselect?z.sel:z.selShort),r=t.length){for(z.setupRun(i),O=!0,n=0;n<r;n++)z.fillImg(t[n],i);z.teardownRun(i)}}};i.console&&console.warn,B in E||(B="src"),T["image/jpeg"]=!0,T["image/gif"]=!0,T["image/png"]=!0,T["image/svg+xml"]=s.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"),z.ns=("pf"+(new Date).getTime()).substr(0,9),z.supSrcset="srcset"in E,z.supSizes="sizes"in E,z.supPicture=!!i.HTMLPictureElement,z.supSrcset&&z.supPicture&&!z.supSizes&&function(e){E.srcset="data:,a",e.src="data:,a",z.supSrcset=E.complete===e.complete,z.supPicture=z.supSrcset&&z.supPicture}(s.createElement("img")),z.supSrcset&&!z.supSizes?function(){var e="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",t=s.createElement("img"),n=function(){2===t.width&&(z.supSizes=!0),v=z.supSrcset&&!z.supSizes,b=!0,setTimeout(ee)};t.onload=n,t.onerror=n,t.setAttribute("sizes","9px"),t.srcset=e+" 1w,data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw== 9w",t.src=e}():b=!0,z.selShort="picture>img,img[srcset]",z.sel=z.selShort,z.cfg=L,z.DPR=F||1,z.u=U,z.types=T,z.setSize=w,z.makeUrl=X(function(e){return H.href=e,H.href}),z.qsa=function(e,t){return"querySelector"in e?e.querySelectorAll(t):[]},z.matchesMedia=function(){return i.matchMedia&&(matchMedia("(min-width: 0.1em)")||{}).matches?z.matchesMedia=function(e){return!e||matchMedia(e).matches}:z.matchesMedia=z.mMQ,z.matchesMedia.apply(this,arguments)},z.mMQ=function(e){return!e||Y(e)},z.calcLength=function(e){var t=Y(e,!0)||!1;return t<0&&(t=!1),t},z.supportsType=function(e){return!e||T[e]},z.parseSize=X(function(e){var t=(e||"").match(D);return{media:t&&t[1],length:t&&t[2]}}),z.parseSet=function(e){return e.cands||(e.cands=h(e.srcset,e)),e.cands},z.getEmValue=function(){var e;if(!g&&(e=s.body)){var t=s.createElement("div"),n=M.style.cssText,r=e.style.cssText;t.style.cssText="position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)",M.style.cssText=N,e.style.cssText=N,e.appendChild(t),g=t.offsetWidth,e.removeChild(t),g=parseFloat(g,10),M.style.cssText=n,e.style.cssText=r}return g||16},z.calcListLength=function(e){if(!(e in I)||L.uT){var t=z.calcLength(A(e));I[e]=t||U.width}return I[e]},z.setRes=function(e){var t;if(e)for(var n=0,r=(t=z.parseSet(e)).length;n<r;n++)Z(t[n],e.sizes);return t},z.setRes.res=Z,z.applySetCandidate=function(e,t){if(e.length){var n,r,i,s,a,c,o,l,p,m=t[z.ns],h=z.DPR;if(c=m.curSrc||t[B],(o=m.curCan||f(t,c,e[0].set))&&o.set===e[0].set&&((p=P&&!t.complete&&o.res-.1>h)||(o.cached=!0,o.res>=h&&(a=o))),!a)for(e.sort(d),a=e[(s=e.length)-1],r=0;r<s;r++)if((n=e[r]).res>=h){a=e[i=r-1]&&(p||c!==z.makeUrl(n.url))&&u(e[i].res,n.res,h,e[i].cached)?e[i]:n;break}a&&(l=z.makeUrl(a.url),m.curSrc=l,m.curCan=a,l!==c&&z.setSrc(t,a),z.setSize(t))}},z.setSrc=function(e,t){var n;e.src=t.url,"image/svg+xml"===t.set.type&&(n=e.style.width,e.style.width=e.offsetWidth+1+"px",e.offsetWidth+1&&(e.style.width=n))},z.getSet=function(e){var t,n,r,i=!1,s=e[z.ns].sets;for(t=0;t<s.length&&!i;t++)if((n=s[t]).srcset&&z.matchesMedia(n.media)&&(r=z.supportsType(n.type))){"pending"===r&&(n=r),i=n;break}return i},z.parseSets=function(e,t,n){var r,i,s,a,c=t&&"PICTURE"===t.nodeName.toUpperCase(),o=e[z.ns];(void 0===o.src||n.src)&&(o.src=C.call(e,"src"),o.src?x.call(e,"data-pfsrc",o.src):S.call(e,"data-pfsrc")),(void 0===o.srcset||n.srcset||!z.supSrcset||e.srcset)&&(r=C.call(e,"srcset"),o.srcset=r,a=!0),o.sets=[],c&&(o.pic=!0,m(t,o.sets)),o.srcset?(i={srcset:o.srcset,sizes:C.call(e,"sizes")},o.sets.push(i),(s=(v||o.src)&&W.test(o.srcset||""))||!o.src||p(o.src,i)||i.has1x||(i.srcset+=", "+o.src,i.cands.push({url:o.src,d:1,set:i}))):o.src&&o.sets.push({srcset:o.src,sizes:null}),o.curCan=null,o.curSrc=void 0,o.supported=!(c||i&&!z.supSrcset||s&&!z.supSizes),a&&z.supSrcset&&!o.supported&&(r?(x.call(e,"data-pfsrcset",r),e.srcset=""):S.call(e,"data-pfsrcset")),o.supported&&!o.srcset&&(!o.src&&e.src||e.src!==z.makeUrl(o.src))&&(null===o.src?e.removeAttribute("src"):e.src=o.src),o.parsed=!0},z.fillImg=function(e,t){var n,r=t.reselect||t.reevaluate;e[z.ns]||(e[z.ns]={}),n=e[z.ns],(r||n.evaled!==y)&&(n.parsed&&!t.reevaluate||z.parseSets(e,e.parentNode,t),n.supported?n.evaled=y:l(e))},z.setupRun=function(){O&&!$&&F===i.devicePixelRatio||o()},z.supPicture?(ee=w,z.fillImg=w):function(){var e,t=i.attachEvent?/d$|^c/:/d$|^c|^i/,n=function(){var i=s.readyState||"";r=setTimeout(n,"loading"===i?200:999),s.body&&(z.fillImgs(),(e=e||t.test(i))&&clearTimeout(r))},r=setTimeout(n,s.body?9:99),a=M.clientHeight;J(i,"resize",function(e,t){var n,r,i=function(){var s=new Date-r;s<t?n=setTimeout(i,t-s):(n=null,e())};return function(){r=new Date,n||(n=setTimeout(i,t))}}(function(){$=Math.max(i.innerWidth||0,M.clientWidth)!==U.width||M.clientHeight!==a,a=M.clientHeight,$&&z.fillImgs()},99)),J(s,"readystatechange",n)}(),z.picturefill=ee,z.fillImgs=ee,z.teardownRun=w,ee._=z,i.picturefillCFG={pf:z,push:function(e){var t=e.shift();"function"==typeof z[t]?z[t].apply(z,e):(L[t]=e[0],O&&z.fillImgs({reselect:!0}))}};for(;k&&k.length;)i.picturefillCFG.push(k.shift());i.picturefill=ee,"object"==typeof e&&"object"==typeof e.exports?e.exports=ee:void 0!==(r=function(){return ee}.call(t,n,t,e))&&(e.exports=r),z.supPicture||(T["image/webp"]=function(e,t){var n=new i.Image;return n.onerror=function(){T[e]=!1,ee()},n.onload=function(){T[e]=1===n.width,ee()},n.src=t,"pending"}("image/webp","data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA=="))}(window,document)}});