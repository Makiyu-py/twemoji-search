(function(e){function t(t){for(var r,s,a=t[0],l=t[1],i=t[2],f=0,b=[];f<a.length;f++)s=a[f],Object.prototype.hasOwnProperty.call(c,s)&&c[s]&&b.push(c[s][0]),c[s]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);u&&u(t);while(b.length)b.shift()();return o.push.apply(o,i||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var l=n[a];0!==c[l]&&(r=!1)}r&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},c={app:0},o=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/twemoji-search/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=t,a=a.slice();for(var i=0;i<a.length;i++)t(a[i]);var u=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"263b":function(e,t,n){const r=n("2515");async function c(){let e=await r.get("https://api.github.com/repos/twitter/twemoji/git/trees/fc6688975af4c908eae5a144f6df6e71bdb8a428"),t=[];for(let n of e.data.tree)t.push(n.path.substring(0,n.path.length-4));return t}async function o(){let e=await c();const t=await r.get("https://unpkg.com/emoji.json@13.1.0/emoji.json");let n=t.data;for(let r of n)r.name=r.name.replace(/:?\s/g,"_"),r.codes=r.codes.toLowerCase().replace(/\s/g,"-");return n=n.filter((function(t){return e.includes(t.codes)})),n}e.exports={fetchEmojiInfo:o,getEmojiCodes:c}},"38c8":function(e,t,n){},"4b98":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);var r=n("aef5");const c=Object(r["d"])(" Twemoji Search! "),o={key:0},s=Object(r["e"])("br",null,null,-1),a=Object(r["e"])("h3",null,"Loading... ✨",-1),l={key:1},i={class:"res"},u=Object(r["e"])("footer",{class:"footer"},[Object(r["d"])(" Made with "),Object(r["e"])("img",{src:"https://twemoji.maxcdn.com/v/latest/72x72/1f499.png",class:"emoji"}),Object(r["d"])(" (and "),Object(r["e"])("a",{href:"https://v3.vuejs.org/",target:"_blank",style:{"text-decoration-color":"#42b883"}},"Vue.js"),Object(r["d"])(") by "),Object(r["e"])("a",{href:"https://github.com/Makiyu-py",style:{"text-decoration-color":"#3b5375"},target:"_blank"},"Makiyu")],-1);function f(e,t,n,f,b,h){const d=Object(r["h"])("emojiCard");return Object(r["f"])(),Object(r["c"])(r["a"],null,[Object(r["e"])("h1",null,[c,Object(r["e"])("img",{src:h.getPublicPath()+"logo.svg",alt:"logo",class:"emoji",style:{"margin-left":"0.1em"}},null,8,["src"])]),b.loading?(Object(r["f"])(),Object(r["c"])("div",o,[s,a])):(Object(r["f"])(),Object(r["c"])("div",l,[Object(r["e"])("form",{onSubmit:t[3]||(t[3]=Object(r["m"])((...e)=>h.findSearch&&h.findSearch(...e),["prevent"]))},[Object(r["l"])(Object(r["e"])("input",{style:{"text-align":"center"},type:"text","onUpdate:modelValue":t[1]||(t[1]=e=>b.searchQuery=e),placeholder:"smile",onKeyup:t[2]||(t[2]=(...e)=>h.findSearch&&h.findSearch(...e))},null,544),[[r["j"],b.searchQuery]])],32),Object(r["l"])(Object(r["e"])("ul",i,[(Object(r["f"])(!0),Object(r["c"])(r["a"],null,Object(r["g"])(b.queriedEmojis,e=>(Object(r["f"])(),Object(r["c"])("li",{key:e},[Object(r["e"])(d,{info:e["item"]},null,8,["info"])]))),128))],512),[[r["k"],b.hasResults]]),Object(r["l"])(Object(r["e"])("h3",null,"Welp, no results!",512),[[r["k"],!b.hasResults]])])),u],64)}const b={class:"card"},h={class:"text"},d=Object(r["e"])("br",null,null,-1),j={class:"btns"};function p(e,t,n,c,o,s){return Object(r["f"])(),Object(r["c"])("div",b,[Object(r["e"])("img",{src:n.info.url.png},null,8,["src"]),Object(r["e"])("div",h,[Object(r["e"])("a",null,Object(r["i"])(n.info.name),1)]),d,Object(r["e"])("div",j,[Object(r["e"])("a",{class:"dwnld-btn",href:n.info.url.png,target:"_blank"},"PNG",8,["href"]),Object(r["e"])("a",{class:"dwnld-btn",href:n.info.url.svg,target:"_blank"},"SVG",8,["href"])])])}var m={name:"emojiCard",props:{info:Object}};n("d80d");m.render=p;var O=m,g=n("565d"),y=n("263b"),v={name:"App",components:{emojiCard:O},methods:{getPublicPath(){return"/twemoji-search/"},findSearch(){if(0===this.searchQuery.length)return this.queriedEmojis=[],void(this.hasResults=!1);let e=(" "+this.searchQuery).slice(1);e=e.toLowerCase().replaceAll(/[^a-z\s]/g,"").replaceAll(/\s/g,"_");let t=this.fuzzy.search(e);if(0===t.length)return this.queriedEmojis=[],void(this.hasResults=!1);t.length>10&&(t=t.slice(0,10)),this.queriedEmojis=t,this.hasResults=!0}},data(){return{loading:!0,hasResults:!1,queriedEmojis:[],searchQuery:""}},mounted(){Object(y["fetchEmojiInfo"])().then(e=>{let t=n("b12b").emoji,r=[];Object.keys(t).forEach(n=>{let c=e.find(e=>e.char===t[n]);void 0!==c&&(c=c.codes,r.push({name:n.replaceAll("_"," "),emoji:t[n],url:{png:`https://twemoji.maxcdn.com/v/latest/72x72/${c}.png`,svg:`https://twemoji.maxcdn.com/v/latest/svg/${c}.svg`},cp:c}))}),this.emojiArray=r,this.charInfos=e,this.fuzzy=new g["a"](r,{threshold:.2,keys:["name"]}),this.loading=!1})}};v.render=f;var w=v;n("38c8");const k=Object(r["b"])(w);k.mount("#app")},d80d:function(e,t,n){"use strict";n("4b98")}});
//# sourceMappingURL=app.f58ba315.js.map