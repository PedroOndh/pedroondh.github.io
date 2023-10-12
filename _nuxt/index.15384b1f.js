import{a as p,o as s,b as i,e,f as b,h as m,i as x,F as d,r,j as u,t as c,k as h,p as g,l as y,m as f}from"./entry.a9b08363.js";const S=""+globalThis.__publicAssetsURL("assets/lakes.jpg"),k={},$={class:"cv-about-me cv-section",id:"about-me"},w=e("h1",null,[b(" Hi! I am "),e("b",null,"Pedro Ondiviela")],-1),E=e("h2",null,"About me",-1),M=e("p",null," I'm a Front-end Developer, expert in complex interfaces and animations, in the point where UX and programming met. ",-1),D=e("p",null,"I am from Asturias, a beautiful and green area in the north of Spain.",-1),P=e("div",{class:"cv-about-me__homeland"},[e("img",{src:S,alt:"lake image"})],-1),I=[w,E,M,D,P];function T(o,_){return s(),i("section",$,I)}const F=p(k,[["render",T]]),U=""+globalThis.__publicAssetsURL("assets/moon.svg"),A=""+globalThis.__publicAssetsURL("assets/earth.svg"),R=m({__name:"Star",setup(o){const _=`${Math.random()*100}%`,l=`${Math.random()*100}%`,v=`${Math.max(1,Math.random()*3)}px`,t=`${Math.random()*4}s`;return(n,Ee)=>(s(),i("circle",{class:"cv-star-decoration",fill:"white",cx:_,cy:l,r:v,style:x(`--top-position: ${_}; --left-position: ${l}; animation-delay: ${t};`)},null,4))}}),C=p(R,[["__scopeId","data-v-fadbcc4d"]]),a=o=>(g("data-v-09f81b14"),o=o(),y(),o),L={class:"cv-experience cv-section",id:"experience"},V={class:"cv-experience__background"},H={viewBox:"0 100 100",width:"100%",height:"100%"},J=a(()=>e("img",{class:"cv-experience__moon",src:U,alt:"Moon"},null,-1)),B=a(()=>e("img",{class:"cv-experience__earth",src:A,alt:"Earth"},null,-1)),N=a(()=>e("h2",{class:"cv-experience__title"},"Experience",-1)),W={class:"cv-experience__list"},X={class:"cv-experience__list-item"},j=a(()=>e("div",{class:"cv-experience__list-item-background"},null,-1)),Q={class:"cv-experience__list-item-duration"},O={class:"cv-experience__list-item-text"},G={class:"cv-experience__list-item-title"},z={class:"cv-experience__list-item-company"},Y={class:"cv-experience__list-item-time"},q={class:"cv-experience__list-item-description"},K={class:"cv-experience__technologies-wrapper"},Z={key:0,class:"cv-experience__list-item-technologies cv-experience__list-item-technologies--front"},ee=a(()=>e("div",{class:"cv-experience__technology-title"},"Front",-1)),te={class:"cv-experience__list-item-technology-wrapper"},se={class:"cv-experience__list-item-technology"},ie={key:1,class:"cv-experience__list-item-technologies cv-experience__list-item-technologies--test"},ce=a(()=>e("div",{class:"cv-experience__technology-title"},"Test",-1)),oe={class:"cv-experience__list-item-technology-wrapper"},ne={class:"cv-experience__list-item-technology"},ae={key:2,class:"cv-experience__list-item-technologies cv-experience__list-item-technologies--back"},_e=a(()=>e("div",{class:"cv-experience__technology-title"},"Back",-1)),de={class:"cv-experience__list-item-technology-wrapper"},re={class:"cv-experience__list-item-technology"},le={key:3,class:"cv-experience__list-item-technologies cv-experience__list-item-technologies--ops"},pe=a(()=>e("div",{class:"cv-experience__technology-title"},"DevOps",-1)),ve={class:"cv-experience__list-item-technology-wrapper"},he={class:"cv-experience__list-item-technology"},ue=m({__name:"Experience",setup(o){const _=[{title:"Front-end Engineer",start:"mar 2021",end:"present",duration:"2y 8m",months:31,company:"Empathy.co",description:"Front-end Engineer leading tech in the Documentation and web teams (3-4 devs).",front:["Typescript","Vue","React","D3.js","Vuepress","Redux","Vuex","Nuxt","Jekyll"],test:["Jest","Cypress"],back:["Node.js","Express"],ops:["Github actions","AWS","Jenkins"]},{title:"UX & Front-end",start:"feb 2020",end:"mar 2021",duration:"1y 2m",months:14,company:"Empathy.co",description:`Front-end Developer and UX Designer as part of the UX Team.

Centered in developing complex layouts and animations.`,front:["Typescript","Vue","Vuex","React","Webpack","Nuxt","Jekyll","UX"]},{title:"Front-end Developer",start:"oct 2019",end:"feb 2020",duration:"5m",months:5,company:"Capgemini",description:"Front-end development with React, Redux, websockets and API REST services",front:["Typescript","React","Redux","Webpack"],back:["Websockets","API REST"]},{title:"UX/UI Developer",start:"oct 2018",end:"sep 2019",duration:"1y",months:12,company:"DIL SE Estudio Creativo",description:`Development and layout of custom web pages with HTML, CSS, JavaScript, PHP, WordPress, responsive layouts & Génesis Framework.

Occasional intervention in the design process, highlighting UX values of the final product.`,front:["HTML","CSS","SCSS","Javascript","Wordpress","UX"],back:["PHP"]},{title:"Scholarship in web development",start:"may 2018",end:"sep 2018",duration:"5m",months:5,company:"3WAYS",description:`Edition and updating of Apps and web pages with HTML, CSS, JavaScript, JQuery & Bootstrap.
Edition of back and databases with PHP, MySQL y PHPMyAdmin.`,front:["HTML","CSS","Javascript","JQuery","Bootstrap"],back:["PHP","MySQL"]}];return(l,v)=>(s(),i("section",L,[e("div",V,[(s(),i("svg",H,[(s(),i(d,null,r(1e3,t=>u(C,{key:t})),64))])),J,B]),N,e("ul",W,[(s(),i(d,null,r(_,t=>e("li",X,[j,e("div",Q,c(t.duration),1),e("div",O,[e("h3",G,c(t.title),1),e("div",z,[e("b",null,c(t.company),1)]),e("div",Y,c(t.start)+" - "+c(t.end),1),e("p",q,c(t.description),1)]),e("div",K,[t.front?(s(),i("div",Z,[ee,e("div",te,[(s(!0),i(d,null,r(t.front,n=>(s(),i("span",se,c(n),1))),256))])])):h("",!0),t.test?(s(),i("div",ie,[ce,e("div",oe,[(s(!0),i(d,null,r(t.test,n=>(s(),i("span",ne,c(n),1))),256))])])):h("",!0),t.back?(s(),i("div",ae,[_e,e("div",de,[(s(!0),i(d,null,r(t.back,n=>(s(),i("span",re,c(n),1))),256))])])):h("",!0),t.ops?(s(),i("div",le,[pe,e("div",ve,[(s(!0),i(d,null,r(t.ops,n=>(s(),i("span",he,c(n),1))),256))])])):h("",!0)])])),64))])]))}}),me=p(ue,[["__scopeId","data-v-09f81b14"]]),be={},xe={class:"cv-studies",id:"studies"},ge=f('<h2 class="cv-studies__title" data-v-44a445ab>Studies</h2><div class="cv-studies__wrapper" data-v-44a445ab><div class="cv-studies__section cv-studies__section--first" data-v-44a445ab><h3 class="cv-studies__section-title cv-studies__section-title--second" data-v-44a445ab> Bachelor in architecture </h3><p data-v-44a445ab>2011-2017</p><p data-v-44a445ab>Universidad de Valladolid</p></div><div class="cv-studies__section cv-studies__section--second" data-v-44a445ab><h3 class="cv-studies__section-title cv-studies__section-title--third" data-v-44a445ab> Master&#39;s degree in Interactive Design </h3><p data-v-44a445ab>2017-2018</p><p data-v-44a445ab>Escuela Superior de Diseño de Madrid</p></div><div class="cv-studies__section cv-studies__section--third" data-v-44a445ab><h3 class="cv-studies__section-title cv-studies__section-title--third" data-v-44a445ab> Full stack Web Development Bootcamp </h3><p data-v-44a445ab>2017-2018</p><p data-v-44a445ab>Escuela Superior de Diseño de Madrid</p><h3 class="cv-studies__section-title cv-studies__section-title--third" data-v-44a445ab> 5+ years of Front-end experience </h3><p data-v-44a445ab>2017-present</p></div></div>',2),ye=[ge];function fe(o,_){return s(),i("section",xe,ye)}const Se=p(be,[["render",fe],["__scopeId","data-v-44a445ab"]]);const ke={},$e={class:"cv-main"};function we(o,_){const l=F,v=me,t=Se;return s(),i("main",$e,[u(l),u(v),u(t)])}const De=p(ke,[["render",we],["__scopeId","data-v-1eb6da69"]]);export{De as default};
