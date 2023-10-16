import{a as h,o as c,b as i,p as x,e as g,f as e,h as S,i as f,j as k,k as w,F as v,r as p,l,t as a,m,q as y,w as F,u as d,s as M,v as D,x as L,y as E}from"./entry.ccab5f5f.js";const T={},$=t=>(x("data-v-671716d8"),t=t(),g(),t),P={class:"cv-about-me cv-section",id:"about-me"},I=$(()=>e("div",{class:"cv-about-me__background"},[e("div",{class:"cv-about-me__background-waves"})],-1)),C=$(()=>e("div",{class:"cv-about-me__text"},[e("h1",null,"Pedro Ondiviela"),e("p",null,[e("b",null,"Creative Developer"),S(" (Front-end Developer, expert in complex interfaces and animations) ")])],-1)),V=[I,C];function B(t,o){return c(),i("section",P,V)}const A=h(T,[["render",B],["__scopeId","data-v-671716d8"]]),H={},R=t=>(x("data-v-b5cdf3c4"),t=t(),g(),t),U={class:"cv-about-this cv-section"},J=R(()=>e("b",null," This page have been designed and developed from scratch by his author using Nuxt 3, Typescript and SCSS. ",-1)),N=[J];function W(t,o){return c(),i("div",U,N)}const X=h(H,[["render",W],["__scopeId","data-v-b5cdf3c4"]]),Z=""+globalThis.__publicAssetsURL("assets/moon.svg"),z=""+globalThis.__publicAssetsURL("assets/earth.svg"),O=f({__name:"Star",props:{animation:{type:Boolean,default:!1}},setup(t){const o=`${Math.random()*100}%`,_=`${Math.random()*100}%`,u=`${Math.max(1,Math.random()*3)}px`,s=`${Math.random()*4}s`;return(n,ot)=>(c(),i("circle",{class:k(["cv-star-decoration",{"cv-star-decoration--animation":t.animation}]),cx:o,cy:_,r:u,style:w(`--top-position: ${o}; --left-position: ${_}; animation-delay: ${s};`)},null,6))}}),Q=h(O,[["__scopeId","data-v-b60420bd"]]),r=t=>(x("data-v-9833c8e3"),t=t(),g(),t),j={class:"cv-experience cv-section",id:"experience"},G={class:"cv-experience__background"},q={class:"cv-experience__star-wrapper",width:"100%",height:"100%"},Y=r(()=>e("img",{class:"cv-experience__moon",src:Z,alt:"Moon"},null,-1)),K=r(()=>e("img",{class:"cv-experience__earth",src:z,alt:"Earth"},null,-1)),ee=r(()=>e("h2",{class:"cv-experience__title"},"Experience",-1)),te={class:"cv-experience__list"},se={class:"cv-experience__list-item"},ce=r(()=>e("div",{class:"cv-experience__list-item-background"},null,-1)),ie={class:"cv-experience__list-item-duration"},oe={class:"cv-experience__list-item-text"},ne={class:"cv-experience__list-item-title"},ae={class:"cv-experience__list-item-company"},_e={class:"cv-experience__list-item-time"},de={class:"cv-experience__list-item-description"},le={class:"cv-experience__technologies-wrapper"},re={key:0,class:"cv-experience__list-item-technologies cv-experience__list-item-technologies--front"},ve=r(()=>e("div",{class:"cv-experience__technology-title"},"Front",-1)),pe={class:"cv-experience__list-item-technology-wrapper"},he={class:"cv-experience__list-item-technology"},ue={key:1,class:"cv-experience__list-item-technologies cv-experience__list-item-technologies--test"},me=r(()=>e("div",{class:"cv-experience__technology-title"},"Test",-1)),xe={class:"cv-experience__list-item-technology-wrapper"},ge={class:"cv-experience__list-item-technology"},fe={key:2,class:"cv-experience__list-item-technologies cv-experience__list-item-technologies--back"},be=r(()=>e("div",{class:"cv-experience__technology-title"},"Back",-1)),ye={class:"cv-experience__list-item-technology-wrapper"},we={class:"cv-experience__list-item-technology"},$e={key:3,class:"cv-experience__list-item-technologies cv-experience__list-item-technologies--ops"},Se=r(()=>e("div",{class:"cv-experience__technology-title"},"DevOps",-1)),ke={class:"cv-experience__list-item-technology-wrapper"},Fe={class:"cv-experience__list-item-technology"},Me=f({__name:"Experience",setup(t){const o=[{title:"Front-end Engineer",start:"mar 2021",end:"present",duration:"2y 8m",months:31,company:"Empathy.co",description:"Front-end Engineer leading tech in the Documentation and web teams (3-4 devs).",front:["Typescript","Vue","React","D3.js","Vuepress","Redux","Vuex","Nuxt","Jekyll"],test:["Jest","Cypress"],back:["Node.js","Express"],ops:["Github actions","AWS","Jenkins"]},{title:"UX & Front-end",start:"feb 2020",end:"mar 2021",duration:"1y 2m",months:14,company:"Empathy.co",description:`Front-end Developer and UX Designer as part of the UX Team.

Centered in developing complex layouts and animations.`,front:["Typescript","Vue","Vuex","React","Webpack","Nuxt","Jekyll","UX"]},{title:"Front-end Developer",start:"oct 2019",end:"feb 2020",duration:"5m",months:5,company:"Capgemini",description:"Front-end development with React, Redux, websockets and API REST services",front:["Typescript","React","Redux","Webpack"],back:["Websockets","API REST"]},{title:"UX/UI Developer",start:"oct 2018",end:"sep 2019",duration:"1y",months:12,company:"DIL SE Estudio Creativo",description:`Development and layout of custom web pages with HTML, CSS, JavaScript, PHP, WordPress, responsive layouts & Génesis Framework.

Occasional intervention in the design process, highlighting UX values of the final product.`,front:["HTML","CSS","SCSS","Javascript","Wordpress","UX"],back:["PHP"]},{title:"Scholarship in web development",start:"may 2018",end:"sep 2018",duration:"5m",months:5,company:"3WAYS",description:`Edition and updating of Apps and web pages with HTML, CSS, JavaScript, JQuery & Bootstrap.
Edition of back and databases with PHP, MySQL y PHPMyAdmin.`,front:["HTML","CSS","Javascript","JQuery","Bootstrap"],back:["PHP","MySQL"]}];return(_,u)=>(c(),i("section",j,[e("div",G,[(c(),i("svg",q,[(c(),i(v,null,p(500,s=>l(Q,{animation:s%5===0,key:s},null,8,["animation"])),64))])),Y,K]),ee,e("ul",te,[(c(),i(v,null,p(o,s=>e("li",se,[ce,e("div",ie,a(s.duration),1),e("div",oe,[e("h3",ne,a(s.title),1),e("div",ae,[e("b",null,a(s.company),1)]),e("div",_e,a(s.start)+" - "+a(s.end),1),e("p",de,a(s.description),1)]),e("div",le,[s.front?(c(),i("div",re,[ve,e("div",pe,[(c(!0),i(v,null,p(s.front,n=>(c(),i("span",he,a(n),1))),256))])])):m("",!0),s.test?(c(),i("div",ue,[me,e("div",xe,[(c(!0),i(v,null,p(s.test,n=>(c(),i("span",ge,a(n),1))),256))])])):m("",!0),s.back?(c(),i("div",fe,[be,e("div",ye,[(c(!0),i(v,null,p(s.back,n=>(c(),i("span",we,a(n),1))),256))])])):m("",!0),s.ops?(c(),i("div",$e,[Se,e("div",ke,[(c(!0),i(v,null,p(s.ops,n=>(c(),i("span",Fe,a(n),1))),256))])])):m("",!0)])])),64))])]))}}),De=h(Me,[["__scopeId","data-v-9833c8e3"]]),Le={xmlns:"http://www.w3.org/2000/svg","xml:space":"preserve",width:"30",height:"30",fill:"#FFF",viewBox:"0 0 415 415"},Ee=e("path",{d:"M325.662 3.768A7.498 7.498 0 0 0 319.157 0H164.555a7.501 7.501 0 0 0-7.107 5.102L91.19 201.421a7.502 7.502 0 0 0 7.107 9.898h62.812L88.817 404.876a7.5 7.5 0 0 0 12.779 7.437l201.228-240.49a7.5 7.5 0 0 0-5.752-12.313h-58.094l86.654-148.224a7.499 7.499 0 0 0 .03-7.518zM219.429 163.223a7.499 7.499 0 0 0-.03 7.518 7.498 7.498 0 0 0 6.505 3.768h55.111L118.189 369.107l60.754-162.664a7.499 7.499 0 0 0-7.026-10.124h-63.173L169.939 15h136.145l-86.655 148.223z"},null,-1),Te=[Ee];function Pe(t,o){return c(),i("svg",Le,Te)}const Ie={render:Pe},Ce={xmlns:"http://www.w3.org/2000/svg",width:"800",height:"800",fill:"none",viewBox:"0 0 45 45"},Ve=e("path",{fill:"#FFF",d:"m24.155 8.781.175.164 13.072 12.842L36 23.213l-1.8-1.768L34.201 35a2 2 0 0 1-1.851 1.994l-.149.006h-20a2.001 2.001 0 0 1-1.995-1.851L10.201 35 10.2 21.446l-1.798 1.767L7 21.787 20.058 8.958a3 3 0 0 1 4.097-.177Zm-2.586 1.504-.096.087-9.273 9.109L12.201 35l4.999-.001.001-9.999c0-1.054.816-1.918 1.851-1.995l.149-.005h6c1.054 0 1.918.816 1.995 1.851l.005.149-.001 9.999 5.001.001-.001-15.52-9.299-9.136a1.001 1.001 0 0 0-1.332-.059ZM25.201 25h-6l-.001 9.999h6L25.201 25Z"},null,-1),Be=[Ve];function Ae(t,o){return c(),i("svg",Ce,Be)}const He={render:Ae},Re={xmlns:"http://www.w3.org/2000/svg",width:"800",height:"800",fill:"none",viewBox:"0 0 24 24"},Ue=e("path",{fill:"#FFF","fill-rule":"evenodd",d:"M6 6a1.5 1.5 0 1 0 0 3V6Zm0 4.5a3 3 0 0 1 0-6h12a3 3 0 1 1 0 6v.83c0 2.637-2.29 4.812-5.25 5.13v2.29H15v1.5H9v-1.5h2.25v-2.29C8.29 16.142 6 13.967 6 11.33v-.83Zm6 4.5c2.703 0 4.5-1.845 4.5-3.67V6h-9v5.33C7.5 13.156 9.297 15 12 15Zm7.5-7.5A1.5 1.5 0 0 1 18 9V6a1.5 1.5 0 0 1 1.5 1.5Z","clip-rule":"evenodd"},null,-1),Je=[Ue];function Ne(t,o){return c(),i("svg",Re,Je)}const We={render:Ne},b=t=>(x("data-v-a3bc9d16"),t=t(),g(),t),Xe=b(()=>e("h2",{class:"cv-studies__title"},"Studies & achievements",-1)),Ze={class:"cv-studies__wrapper"},ze={class:"cv-studies__section cv-studies__section--first"},Oe=b(()=>e("div",{class:"cv-studies__section-text"},[e("h3",{class:"cv-studies__section-title cv-studies__section-title--second"}," Bachelor in architecture "),e("p",{class:"cv-studies__section-info"},"2011-2017"),e("p",{class:"cv-studies__section-info"},"Universidad de Valladolid")],-1)),Qe=E('<div class="cv-studies__section cv-studies__section--second" data-v-a3bc9d16><div class="cv-studies__section-text" data-v-a3bc9d16><h3 class="cv-studies__section-title cv-studies__section-title--third" data-v-a3bc9d16> Master&#39;s degree in Interactive Design </h3><p class="cv-studies__section-info" data-v-a3bc9d16>2017-2018</p><p class="cv-studies__section-info" data-v-a3bc9d16>Escuela Superior de Diseño de Madrid</p></div></div><div class="cv-studies__section cv-studies__section--third" data-v-a3bc9d16><div class="cv-studies__section-text" data-v-a3bc9d16><h3 class="cv-studies__section-title cv-studies__section-title--third" data-v-a3bc9d16> Full stack Web Development Bootcamp </h3><p class="cv-studies__section-info" data-v-a3bc9d16>2017-2018</p><p class="cv-studies__section-info" data-v-a3bc9d16>Escuela Superior de Diseño de Madrid</p></div></div><div class="cv-studies__section cv-studies__section--fourth" data-v-a3bc9d16><div class="cv-studies__section-text" data-v-a3bc9d16><h3 class="cv-studies__section-title cv-studies__section-title--fourth" data-v-a3bc9d16> 5+ years of Front-end experience </h3><p class="cv-studies__section-info" data-v-a3bc9d16>2017-present</p></div></div>',3),je={class:"cv-studies__section cv-studies__section--fifth"},Ge=b(()=>e("div",{class:"cv-studies__section-text"},[e("h3",{class:"cv-studies__section-title cv-studies__section-title--fifth"}," Best Overall Enterprise DevPortal + Best Visual Design "),e("p",{class:"cv-studies__section-info"},"2022"),e("p",{class:"cv-studies__section-info"},"DevPortal Awards")],-1)),qe={class:"cv-studies__volume-wrapper"},Ye={class:"cv-studies__volume-label",for:"volume"},Ke={class:"cv-studies__volume-measure"},et=f({__name:"Studies",setup(t){const o=y(5),_=y(!1);return F(o,()=>{o.value==12&&(_.value=!0)}),(u,s)=>(c(),i("section",{class:"cv-studies cv-section",id:"studies",style:w(`--power: ${d(_)?0:d(o)}px;`)},[Xe,e("div",Ze,[e("div",ze,[Oe,l(d(He),{class:"cv-studies__section-image cv-studies__section-image--house"})]),Qe,e("div",je,[Ge,l(d(We),{class:"cv-studies__section-image cv-studies__section-image--trophy"})])]),e("div",qe,[e("label",Ye,[l(d(Ie))]),M(e("input",{class:"cv-studies__volume-range",type:"range",id:"power",name:"power","onUpdate:modelValue":s[0]||(s[0]=n=>L(o)?o.value=n:null),min:"1",max:"12"},null,512),[[D,d(o)]]),e("span",Ke,a(d(_)?"Broken":d(o)),1)])],4))}}),tt=h(et,[["__scopeId","data-v-a3bc9d16"]]);const st={},ct={class:"cv-main"};function it(t,o){const _=A,u=De,s=tt,n=X;return c(),i("main",ct,[l(_),l(u),l(s),l(n)])}const at=h(st,[["render",it],["__scopeId","data-v-5ab61d51"]]);export{at as default};
