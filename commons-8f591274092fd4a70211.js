(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"8+s/":function(e,t,n){"use strict";var r,a=n("q1tI"),o=(r=a)&&"object"==typeof r&&"default"in r?r.default:r;function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var l,s=[];function u(){l=e(s.map((function(e){return e.props}))),f.canUseDOM?t(l):n&&(l=n(l))}var f=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return l},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,s=[],e};var i=a.prototype;return i.UNSAFE_componentWillMount=function(){s.push(this),u()},i.componentDidUpdate=function(){u()},i.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),u()},i.render=function(){return o.createElement(r,this.props)},a}(a.PureComponent);return i(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),i(f,"canUseDOM",c),f}}},H8eV:function(e,t,n){"use strict";var r=n("K4Vd"),a=n("q1tI"),o=n("qhky"),i=n("YwZP");t.a=({title:e,description:t,image:n,article:c})=>{const{site:l}=r.data,{pathname:s}=Object(i.useLocation)(),{defaultTitle:u,titleTemplate:f,defaultDescription:m,siteUrl:p,defaultImage:d,social:h}=l.siteMetadata,y={title:e||u,description:t||m,image:n?`${p}${n}`:"",url:`${p}${s}`};return a.createElement(o.a,{title:y.title,titleTemplate:f},a.createElement("meta",{name:"description",content:y.description}),a.createElement("meta",{name:"image",content:y.image}),y.url&&a.createElement("meta",{property:"og:url",content:y.url}),!c?null:a.createElement("meta",{property:"og:type",content:"article"}),y.title&&a.createElement("meta",{property:"og:title",content:y.title}),y.description&&a.createElement("meta",{property:"og:description",content:y.description}),y.image&&a.createElement("meta",{property:"og:image",content:y.image}),a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),h.twitter&&a.createElement("meta",{name:"twitter:creator",content:h.twitter}),y.title&&a.createElement("meta",{name:"twitter:title",content:y.title}),y.description&&a.createElement("meta",{name:"twitter:description",content:y.description}),y.image&&a.createElement("meta",{name:"twitter:image",content:y.image}))}},K4Vd:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"defaultTitle":"FrozenAlex","titleTemplate":"%s · FrozenAlex","defaultDescription":"My blog built on gatsby","siteUrl":"https://alexx.ml","defaultImage":"","author":{"name":"FrozenAlex","summary":"who likes to build stuff"},"social":{"twitter":"@FrosteeAlex","github":"FrozenAlex","gitlab":"FrozenAlex"}}}}}')},Lnxd:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n("q1tI"),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=r.createContext&&r.createContext(a),i=function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&(n[r[a]]=e[r[a]])}return n};function l(e){return function(t){return r.createElement(s,i({attr:i({},e.attr)},t),function e(t){return t&&t.map((function(t,n){return r.createElement(t.tag,i({key:n},t.attr),e(t.child))}))}(e.child))}}function s(e){var t=function(t){var n,a=e.size||t.size||"1em";t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className);var o=e.attr,l=e.title,s=c(e,["attr","title"]);return r.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,s,{className:n,style:i({color:e.color||t.color},t.style,e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),l&&r.createElement("title",null,l),e.children)};return void 0!==o?r.createElement(o.Consumer,null,(function(e){return t(e)})):t(a)}},N5vR:function(e,t,n){"use strict";var r=n("q1tI"),a=n("Wbzz"),o=n("ma3e");class i extends r.Component{constructor(e){super(e),this.state={night:!0}}render(){let e=this.state.night?r.createElement(o.b,null):r.createElement(o.d,null);return r.createElement("div",{className:"cursor-pointer",onClick:this.toggleTheme.bind(this)},e)}componentDidMount(){let e="light"!==localStorage.getItem("theme");e?document.documentElement.setAttribute("data-theme","dark"):document.documentElement.setAttribute("data-theme","light"),this.setState({night:e})}toggleTheme(){let e=!this.state.night;localStorage.setItem("theme",e?"dark":"light"),e?document.documentElement.setAttribute("data-theme","dark"):document.documentElement.setAttribute("data-theme","light"),this.setState({night:e})}}var c=i;class l extends r.Component{constructor(e){super(e),this.state={open:!1}}render(){return r.createElement("header",{className:"header",style:{borderBottom:"var(--accent) solid",position:"fixed",top:0,left:0,right:0,zIndex:999}},r.createElement("nav",{className:"navbar container mx-auto px-4"},r.createElement("div",{className:"flex items-center flex-shrink-0 mr-6"},r.createElement(c,null),r.createElement(a.Link,{to:"/"},r.createElement("span",{className:" ml-3 font-semibold text-xl tracking-tight"},"FrozenAlex"))),r.createElement("div",{className:"block md:hidden"},r.createElement("button",{className:"flex items-center px-3 py-1 select-none outline-none focus:outline-none",onClick:this.toggleNavBar.bind(this)},r.createElement("svg",{className:"fill-current h-5 w-5",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},r.createElement("title",null,"Menu"),r.createElement("path",{d:"M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"})))),r.createElement("div",{className:"w-full block flex-grow md:flex md:items-center md:w-auto "+(this.state.open?"":"hidden")},r.createElement("div",{className:"text-md justify-center md:justify-start items-center md:flex-grow flex"},r.createElement(a.Link,{className:"block mt-4 lg:inline-block md:mt-0 mr-4",activeClassName:"active",partiallyActive:!0,to:"/blog/"},"Blog"),r.createElement(a.Link,{className:"block mt-4 lg:inline-block md:mt-0 mr-4",activeClassName:"active",to:"/about/"},"About"),r.createElement(a.Link,{className:"block mt-4 lg:inline-block md:mt-0 mr-4",activeClassName:"active",to:"/contact/"},"Contact"),r.createElement("a",{className:"block mt-4 lg:inline-block md:mt-0 mr-4",href:"https://cloud.alexx.ml/s/LA55ZXR2oR9adsn",target:"__blank"},"Files"),r.createElement("a",{className:"block mt-4 lg:inline-block md:mt-0 text-teal-400 mr-4",href:"https://cloud.alexx.ml/s/5tMTwfk7cnAwSy9",target:"__blank"},"Private")),r.createElement("div",{className:"text-md lg:flex-shrink flex justify-center md:justify-start"},r.createElement("a",{className:"transition-colors duration-300 block mt-4 lg:inline-block md:mt-0 hover:text-blue-500 mr-4",href:"https://twitter.com/FrosteeAlex",target:"__blank"},r.createElement(o.e,{size:24})),r.createElement("a",{className:"transition-colors duration-300 block mt-4 lg:inline-block md:mt-0 hover:text-black mr-4",href:"https://github.com/FrozenAlex",target:"__blank"},r.createElement(o.a,{size:24}))))))}toggleNavBar(){this.setState({open:!this.state.open})}}var s=l;t.a=({shrink:e,location:t,title:n,children:a,className:o})=>r.createElement("div",{className:"app mt-20",style:{marginTop:"65px"}},r.createElement(s,null),r.createElement("main",{className:(o||"")+""+(e?" container mx-auto max-w-3xl  ":"")},a),r.createElement("footer",{className:"text-center my-8 mx-auto max-w-3xl"},"© ",(new Date).getFullYear(),", ",r.createElement("span",{className:"text-accent"},"FrozenAlex"),", Built with"," ",r.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")))},bmMU:function(e,t,n){n("rzGZ");var r="undefined"!=typeof Element,a="function"==typeof Map,o="function"==typeof Set,i="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,t){try{return function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){if(t.constructor!==n.constructor)return!1;var c,l,s,u;if(Array.isArray(t)){if((c=t.length)!=n.length)return!1;for(l=c;0!=l--;)if(!e(t[l],n[l]))return!1;return!0}if(a&&t instanceof Map&&n instanceof Map){if(t.size!==n.size)return!1;for(u=t.entries();!(l=u.next()).done;)if(!n.has(l.value[0]))return!1;for(u=t.entries();!(l=u.next()).done;)if(!e(l.value[1],n.get(l.value[0])))return!1;return!0}if(o&&t instanceof Set&&n instanceof Set){if(t.size!==n.size)return!1;for(u=t.entries();!(l=u.next()).done;)if(!n.has(l.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(n)){if((c=t.length)!=n.length)return!1;for(l=c;0!=l--;)if(t[l]!==n[l])return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if((c=(s=Object.keys(t)).length)!==Object.keys(n).length)return!1;for(l=c;0!=l--;)if(!Object.prototype.hasOwnProperty.call(n,s[l]))return!1;if(r&&t instanceof Element)return!1;for(l=c;0!=l--;)if(("_owner"!==s[l]&&"__v"!==s[l]&&"__o"!==s[l]||!t.$$typeof)&&!e(t[s[l]],n[s[l]]))return!1;return!0}return t!=t&&n!=n}(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},qhky:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return he}));n("rzGZ");var r,a,o,i,c=n("17x9"),l=n.n(c),s=n("8+s/"),u=n.n(s),f=n("bmMU"),m=n.n(f),p=n("q1tI"),d=n.n(p),h=n("MgzW"),y=n.n(h),b="bodyAttributes",g="htmlAttributes",v="titleAttributes",w={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},T=(Object.keys(w).map((function(e){return w[e]})),"charset"),E="cssText",A="href",x="http-equiv",O="innerHTML",C="itemprop",k="name",S="property",j="rel",N="src",P="target",L={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},I="defaultTitle",M="defer",z="encodeSpecialCharacters",_="onChangeClientState",F="titleTemplate",R=Object.keys(L).reduce((function(e,t){return e[L[t]]=t,e}),{}),q=[w.NOSCRIPT,w.SCRIPT,w.STYLE],B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},D=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},H=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Y=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},K=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},V=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},W=function(e){var t=X(e,w.TITLE),n=X(e,F);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=X(e,I);return t||r||void 0},$=function(e){return X(e,_)||function(){}},Z=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return U({},e,t)}),{})},G=function(e,t){return t.filter((function(e){return void 0!==e[w.BASE]})).map((function(e){return e[w.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var o=r[a].toLowerCase();if(-1!==e.indexOf(o)&&n[o])return t.concat(n)}return t}),[])},J=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+B(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var a={};n.filter((function(e){for(var n=void 0,o=Object.keys(e),i=0;i<o.length;i++){var c=o[i],l=c.toLowerCase();-1===t.indexOf(l)||n===j&&"canonical"===e[n].toLowerCase()||l===j&&"stylesheet"===e[l].toLowerCase()||(n=l),-1===t.indexOf(c)||c!==O&&c!==E&&c!==C||(n=c)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return r[n]||(r[n]={}),a[n]||(a[n]={}),!r[n][s]&&(a[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(a),i=0;i<o.length;i++){var c=o[i],l=y()({},r[c],a[c]);r[c]=l}return e}),[]).reverse()},X=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},Q=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){Q(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||Q:e.requestAnimationFrame||Q,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:e.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,oe=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,l=e.onChangeClientState,s=e.scriptTags,u=e.styleTags,f=e.title,m=e.titleAttributes;le(w.BODY,r),le(w.HTML,a),ce(f,m);var p={baseTag:se(w.BASE,n),linkTags:se(w.LINK,o),metaTags:se(w.META,i),noscriptTags:se(w.NOSCRIPT,c),scriptTags:se(w.SCRIPT,s),styleTags:se(w.STYLE,u)},d={},h={};Object.keys(p).forEach((function(e){var t=p[e],n=t.newTags,r=t.oldTags;n.length&&(d[e]=n),r.length&&(h[e]=p[e].oldTags)})),t&&t(),l(e,d,h)},ie=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ie(e)),le(w.TITLE,t)},le=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute("data-react-helmet"),a=r?r.split(","):[],o=[].concat(a),i=Object.keys(t),c=0;c<i.length;c++){var l=i[c],s=t[l]||"";n.getAttribute(l)!==s&&n.setAttribute(l,s),-1===a.indexOf(l)&&a.push(l);var u=o.indexOf(l);-1!==u&&o.splice(u,1)}for(var f=o.length-1;f>=0;f--)n.removeAttribute(o[f]);a.length===o.length?n.removeAttribute("data-react-helmet"):n.getAttribute("data-react-helmet")!==i.join(",")&&n.setAttribute("data-react-helmet",i.join(","))}},se=function(e,t){var n=document.head||document.querySelector(w.HEAD),r=n.querySelectorAll(e+"[data-react-helmet]"),a=Array.prototype.slice.call(r),o=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===O)n.innerHTML=t.innerHTML;else if(r===E)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute("data-react-helmet","true"),a.some((function(e,t){return i=t,n.isEqualNode(e)}))?a.splice(i,1):o.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:o}},ue=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[L[n]||n]=e[n],t}),t)},me=function(e,t,n){switch(e){case w.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})["data-react-helmet"]=!0,a=fe(n,r),[d.a.createElement(w.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=ue(n),o=ie(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+V(o,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+V(o,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case b:case g:return{toComponent:function(){return fe(t)},toString:function(){return ue(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})["data-react-helmet"]=!0,r);return Object.keys(t).forEach((function(e){var n=L[e]||e;if(n===O||n===E){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),d.a.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===O||e===E)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+V(r[t],n)+'"';return e?e+" "+a:a}),""),o=r.innerHTML||r.cssText||"",i=-1===q.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(i?"/>":">"+o+"</"+e+">")}),"")}(e,t,n)}}}},pe=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,l=e.scriptTags,s=e.styleTags,u=e.title,f=void 0===u?"":u,m=e.titleAttributes;return{base:me(w.BASE,t,r),bodyAttributes:me(b,n,r),htmlAttributes:me(g,a,r),link:me(w.LINK,o,r),meta:me(w.META,i,r),noscript:me(w.NOSCRIPT,c,r),script:me(w.SCRIPT,l,r),style:me(w.STYLE,s,r),title:me(w.TITLE,{title:f,titleAttributes:m},r)}},de=u()((function(e){return{baseTag:G([A,P],e),bodyAttributes:Z(b,e),defer:X(e,M),encode:X(e,z),htmlAttributes:Z(g,e),linkTags:J(w.LINK,[j,A],e),metaTags:J(w.META,[k,T,x,S,C],e),noscriptTags:J(w.NOSCRIPT,[O],e),onChangeClientState:$(e),scriptTags:J(w.SCRIPT,[N,O],e),styleTags:J(w.STYLE,[E],e),title:W(e),titleAttributes:Z(v,e)}}),(function(e){ae&&ne(ae),e.defer?ae=te((function(){oe(e,(function(){ae=null}))})):(oe(e),ae=null)}),pe)((function(){return null})),he=(a=de,i=o=function(e){function t(){return D(this,t),K(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!m()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case w.SCRIPT:case w.NOSCRIPT:return{innerHTML:t};case w.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,a=e.newChildProps,o=e.nestedChildren;return U({},r,((t={})[n.type]=[].concat(r[n.type]||[],[U({},a,this.mapNestedChildrenToProps(n,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,a=e.newProps,o=e.newChildProps,i=e.nestedChildren;switch(r.type){case w.TITLE:return U({},a,((t={})[r.type]=i,t.titleAttributes=U({},o),t));case w.BODY:return U({},a,{bodyAttributes:U({},o)});case w.HTML:return U({},a,{htmlAttributes:U({},o)})}return U({},a,((n={})[r.type]=U({},o),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=U({},t);return Object.keys(e).forEach((function(t){var r;n=U({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return d.a.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,o=a.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[R[n]||n]=e[n],t}),t)}(Y(a,["children"]));switch(n.warnOnInvalidChildren(e,o),e.type){case w.LINK:case w.META:case w.NOSCRIPT:case w.SCRIPT:case w.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:i,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=Y(e,["children"]),r=U({},n);return t&&(r=this.mapChildrenToProps(t,r)),d.a.createElement(a,r)},H(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(d.a.Component),o.propTypes={base:l.a.object,bodyAttributes:l.a.object,children:l.a.oneOfType([l.a.arrayOf(l.a.node),l.a.node]),defaultTitle:l.a.string,defer:l.a.bool,encodeSpecialCharacters:l.a.bool,htmlAttributes:l.a.object,link:l.a.arrayOf(l.a.object),meta:l.a.arrayOf(l.a.object),noscript:l.a.arrayOf(l.a.object),onChangeClientState:l.a.func,script:l.a.arrayOf(l.a.object),style:l.a.arrayOf(l.a.object),title:l.a.string,titleAttributes:l.a.object,titleTemplate:l.a.string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=a.peek,o.rewind=function(){var e=a.rewind();return e||(e=pe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);he.renderStatic=he.rewind}).call(this,n("yLpj"))},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"==typeof window&&(n=window)}e.exports=n}}]);
//# sourceMappingURL=commons-8f591274092fd4a70211.js.map