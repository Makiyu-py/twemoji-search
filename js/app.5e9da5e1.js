(function(e){function t(t){for(var n,o,a=t[0],l=t[1],i=t[2],d=0,b=[];d<a.length;d++)o=a[d],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&b.push(c[o][0]),c[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);u&&u(t);while(b.length)b.shift()();return s.push.apply(s,i||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,a=1;a<r.length;a++){var l=r[a];0!==c[l]&&(n=!1)}n&&(s.splice(t--,1),e=o(o.s=r[0]))}return e}var n={},c={app:0},s=[];function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/twemoji-search/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=t,a=a.slice();for(var i=0;i<a.length;i++)t(a[i]);var u=l;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"38c8":function(e,t,r){},4028:function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);var n=r("aef5");const c={class:"not-footer"},s=Object(n["d"])(" Twemoji Search! "),o={key:0,class:"placeholder-text"},a={key:1},l={class:"res"},i={class:"placeholder-text"},u=Object(n["e"])("footer",null,[Object(n["d"])(" Made with "),Object(n["e"])("img",{src:"https://twemoji.maxcdn.com/v/latest/72x72/1f499.png",class:"emoji"}),Object(n["d"])(" (and "),Object(n["e"])("a",{href:"https://v3.vuejs.org/",target:"_blank",style:{"text-decoration-color":"#42b883"}},"Vue.js"),Object(n["d"])(") by "),Object(n["e"])("a",{href:"https://github.com/Makiyu-py",style:{"text-decoration-color":"#3b5375"},target:"_blank"},"Makiyu")],-1);function d(e,t,r,d,b,h){const f=Object(n["j"])("emojiCard");return Object(n["f"])(),Object(n["c"])(n["a"],null,[Object(n["e"])("div",c,[Object(n["e"])("h1",null,[s,Object(n["e"])("img",{src:h.getPublicPath()+"logo.svg",alt:"logo",class:"emoji",style:{"margin-left":"0.1em"}},null,8,["src"])]),b.loading?(Object(n["f"])(),Object(n["c"])("div",o,"Loading... ✨")):(Object(n["f"])(),Object(n["c"])("div",a,[Object(n["e"])("form",{onSubmit:t[3]||(t[3]=Object(n["o"])((...e)=>h.findSearch&&h.findSearch(...e),["prevent"]))},[Object(n["n"])(Object(n["e"])("input",{style:{"text-align":"center"},type:"text","onUpdate:modelValue":t[1]||(t[1]=e=>b.searchQuery=e),placeholder:"smile",onKeyup:t[2]||(t[2]=(...e)=>h.findSearch&&h.findSearch(...e))},null,544),[[n["l"],b.searchQuery]])],32),Object(n["n"])(Object(n["e"])("div",l,[(Object(n["f"])(!0),Object(n["c"])(n["a"],null,Object(n["i"])(b.queriedEmojis,e=>(Object(n["f"])(),Object(n["c"])(f,{key:e,info:e["item"]},null,8,["info"]))),128))],512),[[n["m"],b.hasResults]]),Object(n["n"])(Object(n["e"])("div",i," Welp, no results (yet)! ",512),[[n["m"],!b.hasResults]])]))]),u],64)}const b=Object(n["p"])("data-v-3b2f4c6d");Object(n["h"])("data-v-3b2f4c6d");const h={class:"card"},f={class:"text"},j=Object(n["e"])("br",null,null,-1),p={class:"btns"};Object(n["g"])();const O=b((e,t,r,c,s,o)=>(Object(n["f"])(),Object(n["c"])("div",h,[Object(n["e"])("img",{src:r.info.url.png},null,8,["src"]),Object(n["e"])("div",f,[Object(n["e"])("a",null,Object(n["k"])(r.info.label),1)]),j,Object(n["e"])("div",p,[Object(n["e"])("a",{class:"dwnld-btn",href:r.info.url.png,target:"_blank"},"PNG",8,["href"]),Object(n["e"])("a",{class:"dwnld-btn",href:r.info.url.svg,target:"_blank"},"SVG",8,["href"])])])));var g={name:"emojiCard",props:{info:Object}};r("c455");g.render=O,g.__scopeId="data-v-3b2f4c6d";var m=g,v=r("565d"),y=r("4921"),w=r("2515"),x=r.n(w);async function k(){let e=await x.a.get("https://api.github.com/repos/twitter/twemoji/git/trees/master?recursive=1"),t=[];for(let r of e.data.tree)r.path.startsWith("assets/svg/")&&t.push(r.path.substring(11,r.path.length-4));return t}async function S(){let e=await k(),t=await Object(y["a"])("en",{shortcodes:["cldr"]});return t=t.filter((function(t){return e.includes(t.hexcode.toLowerCase())})),t}var _={name:"App",components:{emojiCard:m},methods:{getPublicPath(){return"/twemoji-search/"},findSearch(){if(0===this.searchQuery.length)return this.queriedEmojis=[],void(this.hasResults=!1);let e=(" "+this.searchQuery).slice(1);e=e.toLowerCase().replaceAll(/[^a-z\s]/g,"").replaceAll(/\s/g,"_");let t=this.fuzzy.search(e);if(0===t.length)return this.queriedEmojis=[],void(this.hasResults=!1);t.length>10&&(t=t.slice(0,10)),this.queriedEmojis=t,this.hasResults=!0}},data(){return{loading:!0,hasResults:!1,queriedEmojis:[],searchQuery:""}},mounted(){S().then(e=>{e=e.map(e=>({...e,url:{png:`https://twemoji.maxcdn.com/v/latest/72x72/${e.hexcode.toLowerCase()}.png`,svg:`https://twemoji.maxcdn.com/v/latest/svg/${e.hexcode.toLowerCase()}.svg`}})),this.fuzzy=new v["a"](e,{threshold:.2,keys:["label"]}),this.emojis=e,this.loading=!1})}};_.render=d;var P=_;r("38c8");const C=Object(n["b"])(P);C.mount("#app")},c455:function(e,t,r){"use strict";r("4028")}});
//# sourceMappingURL=app.5e9da5e1.js.map