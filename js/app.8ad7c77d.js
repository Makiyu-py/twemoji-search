(function(e){function t(t){for(var n,s,a=t[0],l=t[1],i=t[2],f=0,b=[];f<a.length;f++)s=a[f],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&b.push(o[s][0]),o[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);u&&u(t);while(b.length)b.shift()();return c.push.apply(c,i||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],n=!0,a=1;a<r.length;a++){var l=r[a];0!==o[l]&&(n=!1)}n&&(c.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},o={app:0},c=[];function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/twemoji-search/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=t,a=a.slice();for(var i=0;i<a.length;i++)t(a[i]);var u=l;c.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"263b":function(e,t,r){const n=r("2515");async function o(){let e=await n.get("https://api.github.com/repos/twitter/twemoji/git/trees/fc6688975af4c908eae5a144f6df6e71bdb8a428"),t=[];for(let r of e.data.tree)t.push(r.path.substring(0,r.path.length-4));return t}async function c(){let e=await o();const t=await n.get("https://unpkg.com/emoji.json@13.1.0/emoji.json");let r=t.data;for(let n of r)n.name=n.name.replace(/:?\s/g,"_"),n.codes=n.codes.toLowerCase().replace(/\s/g,"-");return r=r.filter((function(t){return e.includes(t.codes)})),r}e.exports={fetchEmojiInfo:c,getEmojiCodes:o}},"38c8":function(e,t,r){},"4b98":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);var n=r("aef5");const o=Object(n["d"])(" Twemoji Search! "),c={class:"res"},s={class:"footer"},a=Object(n["d"])(" Made with "),l=Object(n["d"])(" (and "),i=Object(n["e"])("a",{href:"https://v3.vuejs.org/",target:"_blank",style:{"text-decoration-color":"#42b883"}},"Vue.js",-1),u=Object(n["d"])(") by "),f=Object(n["e"])("a",{href:"https://github.com/Makiyu-py",style:{"text-decoration-color":"#3b5375"},target:"_blank"},"Makiyu",-1);function b(e,t,r,b,h,d){const j=Object(n["h"])("emojiCard");return Object(n["f"])(),Object(n["c"])(n["a"],null,[Object(n["e"])("h1",null,[o,Object(n["e"])("img",{src:d.getPublicPath()+"logo.svg",alt:"logo",class:"emoji",style:{"margin-left":"0.1em"}},null,8,["src"])]),Object(n["e"])("form",{onSubmit:t[3]||(t[3]=Object(n["m"])((...e)=>d.findSearch&&d.findSearch(...e),["prevent"]))},[Object(n["l"])(Object(n["e"])("input",{style:{"text-align":"center"},type:"text","onUpdate:modelValue":t[1]||(t[1]=e=>h.searchQuery=e),placeholder:"smile",onKeyup:t[2]||(t[2]=(...e)=>d.findSearch&&d.findSearch(...e))},null,544),[[n["j"],h.searchQuery]])],32),Object(n["l"])(Object(n["e"])("ul",c,[(Object(n["f"])(!0),Object(n["c"])(n["a"],null,Object(n["g"])(h.queriedEmojis,e=>(Object(n["f"])(),Object(n["c"])("li",{key:e},[Object(n["e"])(j,{info:e["item"]},null,8,["info"])]))),128))],512),[[n["k"],h.hasResults]]),Object(n["l"])(Object(n["e"])("h3",null,"Welp, no results!",512),[[n["k"],!h.hasResults]]),Object(n["e"])("footer",s,[a,Object(n["e"])("img",{src:e.emojiArray.find(e=>"blue heart"===e.name).url.png,class:"emoji"},null,8,["src"]),l,i,u,f])],64)}const h={class:"card"},d={class:"text"},j=Object(n["e"])("br",null,null,-1),p={class:"btns"};function m(e,t,r,o,c,s){return Object(n["f"])(),Object(n["c"])("div",h,[Object(n["e"])("img",{src:r.info.url.png},null,8,["src"]),Object(n["e"])("div",d,[Object(n["e"])("a",null,Object(n["i"])(r.info.name),1)]),j,Object(n["e"])("div",p,[Object(n["e"])("a",{class:"dwnld-btn",href:r.info.url.png,target:"_blank"},"PNG",8,["href"]),Object(n["e"])("a",{class:"dwnld-btn",href:r.info.url.svg,target:"_blank"},"SVG",8,["href"])])])}var g={name:"emojiCard",props:{info:Object}};r("d80d");g.render=m;var O=g,y={name:"App",components:{emojiCard:O},methods:{getPublicPath(){return"/twemoji-search/"},findSearch(){if(0===this.searchQuery.length)return this.queriedEmojis=[],void(this.hasResults=!1);let e=(" "+this.searchQuery).slice(1);e=e.toLowerCase().replaceAll(/[^a-z\s]/g,"").replaceAll(/\s/g,"_");let t=this.fuzzy.search(e);if(0===t.length)return this.queriedEmojis=[],void(this.hasResults=!1);t.length>10&&(t=t.slice(0,10)),this.queriedEmojis=t,this.hasResults=!0}},data(){return{hasResults:!1,queriedEmojis:[],searchQuery:""}}};y.render=b;var v=y,w=r("565d"),k=r("263b");r("38c8");const x=Object(n["b"])(v);Object(k["fetchEmojiInfo"])().then(e=>{let t=r("b12b").emoji,n=[];Object.keys(t).forEach(r=>{let o=e.find(e=>e.char===t[r]);void 0!==o&&(o=o.codes,n.push({name:r.replaceAll("_"," "),emoji:t[r],url:{png:`https://twemoji.maxcdn.com/v/latest/72x72/${o}.png`,svg:`https://twemoji.maxcdn.com/v/latest/svg/${o}.svg`},cp:o}))}),x.config.globalProperties.emojiArray=n,x.config.globalProperties.charInfos=e,x.config.globalProperties.fuzzy=new w["a"](n,{threshold:.2,keys:["name"]}),x.mount("#app")})},d80d:function(e,t,r){"use strict";r("4b98")}});
//# sourceMappingURL=app.8ad7c77d.js.map