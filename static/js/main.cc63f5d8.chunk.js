(this.webpackJsonpcountry=this.webpackJsonpcountry||[]).push([[0],{51:function(e,n,t){},89:function(e,n,t){},90:function(e,n,t){},91:function(e,n,t){"use strict";t.r(n);var r,a,c,i,o,s,l,d,j,b,u,h,m,O,x,p,f,g,v,w,y,k,S,C,E,N,A,R=t(0),z=t.n(R),B=t(16),L=t.n(B),D=t(25),F=(t(51),t(6)),I=t(5),J=t(14),T=t(3),M=t(4),P=M.a.div(r||(r=Object(T.a)(["\n  width: 100%;\n  max-width: 1240px;\n  margin: 0 auto;\n  padding: 0 2rem;\n"]))),W=M.a.header(a||(a=Object(T.a)(["\n  box-shadow: var(--shadow);\n  background-color: var(--color-ui-base);\n"]))),_=M.a.div(c||(c=Object(T.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 2rem 0;\n"]))),q=Object(M.a)(D.b).attrs({to:"/"})(i||(i=Object(T.a)(["\n  color: var(--colors-text);\n  font-size: var(--fs-sm);\n  font-weight: var(--fw-bold);\n  text-decoration: none;\n"]))),G=M.a.div(o||(o=Object(T.a)(["\n  color: var(--colors-text);\n  font-size: var(--fs-sm);\n  text-transform: capitalize;\n  cursor: pointer;\n"]))),H=t(1),K=function(){var e=function(e,n){var t=Object(R.useState)((function(){var t=localStorage.getItem(n);return t?JSON.parse(t):e})),r=Object(F.a)(t,2),a=r[0],c=r[1];return Object(R.useEffect)((function(){localStorage.setItem(n,JSON.stringify(a))}),[a]),[a,c]}("light","theme"),n=Object(F.a)(e,2),t=n[0],r=n[1];return Object(R.useEffect)((function(){document.body.setAttribute("data-theme",t)}),[t]),Object(H.jsx)(W,{children:Object(H.jsx)(P,{children:Object(H.jsxs)(_,{children:[Object(H.jsx)(q,{children:"Where is the world?"}),Object(H.jsxs)(G,{onClick:function(){return r("light"===t?"dark":"light")},children:["light"===t?Object(H.jsx)(J.c,{}):Object(H.jsx)(J.b,{})," ",t," Mode"]})]})})})},Q=M.a.main(s||(s=Object(T.a)(["\n  padding: 2rem 0;\n\n  @media (min-width: 767px) {\n    padding: 4rem 0;\n  }\n"]))),U=function(e){var n=e.children;return Object(H.jsx)(Q,{children:Object(H.jsx)(P,{children:n})})},V=t(12),X=t(46),Y=t(15),Z=t.n(Y),$=M.a.label(l||(l=Object(T.a)(["\n  display: flex;\n  align-item: center;\n\n  width: 100%;\n  padding: 1rem 2rem;\n  margin-bottom: 1.5rem;\n\n  background-color: var(--colors-ui-base);\n  border-radius: var(--radii);\n  box-shadow: var(--shadow);\n\n  @media (min-width: 767px) {\n    width: 280px;\n    margin-bottom: 0;\n  }\n"]))),ee=M.a.input.attrs({type:"search",placeholder:"Search for a country"})(d||(d=Object(T.a)(["\n  margin-left: 2rem;\n\n  background-color: var(--colors-ui-base);\n  color: var(--color-text);\n  border: none;\n  outline: none;\n"]))),ne=function(e){var n=e.search,t=e.setSearch;return Object(H.jsxs)($,{children:[Object(H.jsx)(J.d,{}),Object(H.jsx)(ee,{onChange:function(e){return t(e.target.value)},value:n})]})},te=t(45),re=Object(M.a)(te.a).attrs({styles:{control:function(e){return Object(V.a)(Object(V.a)({},e),{},{backgroundColor:"var(--colors-ui-base)",color:"var(--color-text)",borderRadius:"var(--radii)",padding:"0.25rem",border:"none",boxShadow:"var(--shadow)",height:"50px"})},option:function(e,n){return Object(V.a)(Object(V.a)({},e),{},{cursor:"pointer",color:"var(--colors-text)",backgroundColor:n.isSelected?"var(--colors-bg)":"var(--colors-ui-base)"})}}})(j||(j=Object(T.a)(["\n  width:200px;\n  borderRadius: var(--radii);\n  font-family: var(--family);\n\n  & > * {\n    boxShadow: var(--shadow);\n  }\n\n  & * {\n    color: var(--color-text) !important;\n  }\n\n  & > div[id] {\n    background-color: var(--colors-ui-base);\n  }\n"]))),ae=[{value:"Africa",label:"Africa"},{value:"America",label:"America"},{value:"Asia",label:"Asia"},{value:"Europe",label:"Europe"},{value:"Oceania",label:"Oceania"}],ce=M.a.div(b||(b=Object(T.a)(["\n  display: flex;\n  flex-direction: column;\n  align-item: flex-start;\n\n  @media (min-width: 767px) {\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n  }\n"]))),ie=function(e){var n=e.onSearch,t=Object(R.useState)(""),r=Object(F.a)(t,2),a=r[0],c=r[1],i=Object(R.useState)(""),o=Object(F.a)(i,2),s=o[0],l=o[1];return Object(R.useEffect)((function(){var e=(null===s||void 0===s?void 0:s.value)||"";n(a,e)}),[a,s]),Object(H.jsxs)(ce,{children:[Object(H.jsx)(ne,{search:a,setSearch:c}),Object(H.jsx)(re,{options:ae,placeholder:"Filter by Region",isClearable:!0,isSearchable:!1,value:s,onChange:l})]})},oe=M.a.section(u||(u=Object(T.a)(["\n  width: 100%;\n  padding: 2rem 0;\n\n  display: grid;\n  grid-template-columns: repeat(1, 1fr);\n  gap: 2rem;\n\n  @media (min-width: 767px) {\n    padding: 2.5rem 0;\n\n    grid-template-columns: repeat(2, 1fr);\n    gap: 3rem;\n  }\n\n  @media (min-width: 1024px) {\n    grid-template-columns: repeat(4, 1fr);\n    gap: 4rem;\n  }\n"]))),se=function(e){var n=e.children;return Object(H.jsx)(oe,{children:n})},le=M.a.article(h||(h=Object(T.a)(["\n  border-radius: var(--radii);\n  background-color: var(--colors-ui-base);\n  box-shadow: var(--shadow);\n  cursor: pointer;\n  overflow: hidden;\n"]))),de=M.a.img(m||(m=Object(T.a)(["\n  display: block;\n  width: 100%;\n  height: 150px;\n  object-fit: cover;\n  object-position: center;\n  box-shadow: var(--shadow);\n"]))),je=M.a.div(O||(O=Object(T.a)(["\n  padding: 1rem 1.5rem 2rem;\n"]))),be=M.a.h3(x||(x=Object(T.a)(["\n  margin: 0;\n  font-size: var(--fs-md);\n  font-weight: var(--fw-bold);\n"]))),ue=M.a.ul(p||(p=Object(T.a)(["\n  list-style: none;\n  margin: 0;\n  padding: 1rem 0 0;\n"]))),he=M.a.li(f||(f=Object(T.a)(["\n  font-size: var(--fs-sm);\n  line-height: 1.5;\n  font-weight: var(--fw-light);\n\n  & > b {\n    font-weight: var(--fw-bold);\n  }\n"]))),me=function(e){var n=e.img,t=e.name,r=e.info,a=void 0===r?[]:r,c=e.onClick;return Object(H.jsxs)(le,{onClick:c,children:[Object(H.jsx)(de,{src:n}),Object(H.jsxs)(je,{children:[Object(H.jsx)(be,{children:t}),Object(H.jsx)(ue,{children:a.map((function(e){return Object(H.jsxs)(he,{children:[Object(H.jsxs)("b",{children:[e.title,":"]})," ",e.description]},e.title)}))})]})]})},Oe=(t(89),function(){return Object(H.jsxs)("article",{className:"skeleton-Wrapper",children:[Object(H.jsx)("div",{className:"skeleton-CardImage",alt:"loading"}),Object(H.jsx)("div",{className:"skeleton-CardBody"})]})}),xe="https://restcountries.com/v2/",pe=function(e){var n=e.countries,t=e.setCountries,r=Object(R.useState)(n),a=Object(F.a)(r,2),c=a[0],i=a[1],o=Object(I.f)().push,s=function(e,t){var r=Object(X.a)(n);t&&(r=r.filter((function(e){return e.region.includes(t)}))),e&&(r=r.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))),i(r)};return Object(R.useEffect)((function(){n.length||Z.a.get("https://restcountries.com/v2/all?fields=name,capital,flags,population,region").then((function(e){var n=e.data;return t(n)}))}),[]),Object(R.useEffect)((function(){s()}),[n]),Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)(ie,{onSearch:s}),Object(H.jsx)(se,{children:c.length?c.map((function(e){var n={img:e.flags.png,name:e.name,info:[{title:"Population",description:e.population},{title:"Region",description:e.region},{title:"Capital",description:e.capital}]};return Object(H.jsx)(me,Object(V.a)({onClick:function(){return o("/country/".concat(e.name))}},n),e.name)})):Array.from({length:10}).map((function(e){return Object(H.jsx)(Oe,{})}))})]})},fe=(t(90),function(){return Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)("div",{className:"skeleton-Details-image"}),Object(H.jsx)("div",{className:"skeleton-Details-list"})]})}),ge=M.a.section(g||(g=Object(T.a)(["\n  margin-top: 3rem;\n  width: 100%;\n  display: grid;\n  grid-template-columns: 100%;\n  gap: 2rem;\n\n  @media (min-width: 767px) {\n    grid-template-columns: minmax(100px, 400px) 1fr;\n    align-items: center;\n    gap: 5rem;\n  }\n\n  @media (min-width: 1024px) {\n    grid-template-columns: minmax(400px, 600px) 1fr;\n  }\n"]))),ve=M.a.img(v||(v=Object(T.a)(["\n  display: block;\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n"]))),we=M.a.h1(w||(w=Object(T.a)(["\n  margin: 0;\n  margin-bottom: 1rem;\n  font-weight: var(--fw-normal);\n"]))),ye=M.a.div(y||(y=Object(T.a)(["\n  display: flex;\n  flex-direction: column;\n\n  gap: 2rem;\n  \n  @media (min-width: 1024px) {\n    flex-direction: row;\n    gap: 2.5rem;\n  }\n"]))),ke=M.a.ul(k||(k=Object(T.a)(["\n  list-style: none;\n  margin: 0;\n  padding: 0;\n"]))),Se=M.a.li(S||(S=Object(T.a)(["\n  line-height: 1.8;\n\n  & > b {\n    font-weight: var(--fw-bold);\n  }\n"]))),Ce=M.a.div(C||(C=Object(T.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 1.5rem;\n  margin-top: 3rem;\n\n  & > b {\n    font-weight: var(--fw-bold);\n  }\n\n  @media (min-width: 767px) {\n    flex-direction: row;\n    align-items: center\n  }\n"]))),Ee=M.a.div(E||(E=Object(T.a)(["\n  display: flex;\n  gap: 1rem;\n  flex-wrap: wrap;  \n"]))),Ne=M.a.span(N||(N=Object(T.a)(["\n  padding: 0 1rem;\n  bacground-color: var(--colors-ui-base);\n  box-shadow: var(--shadow);\n  line-height: 1.5;\n  cursor: pointer;\n"]))),Ae=function(e){var n=e.name,t=e.nativeName,r=e.flag,a=e.capital,c=e.population,i=e.region,o=e.subregion,s=e.topLevelDomain,l=e.currencies,d=void 0===l?[]:l,j=e.languages,b=e.borders,u=void 0===b?[]:b,h=e.push,m=Object(R.useState)([]),O=Object(F.a)(m,2),x=O[0],p=O[1];return Object(R.useEffect)((function(){var e;u.length&&Z.a.get((e=u,xe+"alpha?codes="+e.join(","))).then((function(e){var n=e.data;return p(n.map((function(e){return e.name})))}))}),[u]),Object(H.jsxs)(ge,{children:[Object(H.jsx)(ve,{src:r,alt:n}),Object(H.jsxs)("div",{children:[Object(H.jsx)(we,{children:n}),Object(H.jsxs)(ye,{children:[Object(H.jsxs)(ke,{children:[Object(H.jsxs)(Se,{children:[Object(H.jsx)("b",{children:"Native Name: "})," ",t]}),Object(H.jsxs)(Se,{children:[Object(H.jsx)("b",{children:"Population: "})," ",c]}),Object(H.jsxs)(Se,{children:[Object(H.jsx)("b",{children:"Region: "})," ",i]}),Object(H.jsxs)(Se,{children:[Object(H.jsx)("b",{children:"SubRegion: "})," ",o]}),Object(H.jsxs)(Se,{children:[Object(H.jsx)("b",{children:"Capital: "})," ",a]})]}),Object(H.jsxs)(ke,{children:[Object(H.jsxs)(Se,{children:[Object(H.jsx)("b",{children:"Top Level Domain :"})," ",s.map((function(e){return Object(H.jsx)("span",{children:e},e)}))]}),Object(H.jsxs)(Se,{children:[Object(H.jsx)("b",{children:"Currency :"})," ",d.map((function(e){return Object(H.jsxs)("span",{children:[e.name," "]},e.code)}))]}),Object(H.jsxs)(Se,{children:[Object(H.jsx)("b",{children:"Languages :"})," ",j.map((function(e){return Object(H.jsx)("span",{children:e.name},e.name)}))]})]})]}),Object(H.jsxs)(Ce,{children:[Object(H.jsx)("b",{children:"Border Countries"}),x.length?Object(H.jsx)(Ee,{children:x.map((function(e){return Object(H.jsxs)(Ne,{onClick:function(){return h("/country/".concat(e))},children:[" ",e]},e)}))}):Object(H.jsx)("span",{children:"There is no border countries"})]})]})]})},Re=M.a.button(A||(A=Object(T.a)(["\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n\n  padding: 0 1rem;\n  color: var(--color-text);\n  background-color: var(--colors-ui-base);\n  box-shadow: var(--shadow);\n  line-height: 2.5;\n  border-radius: var(--radii);\n\n  border: none;\n  cursor: pointer;\n"]))),ze=function(){var e=Object(R.useState)(null),n=Object(F.a)(e,2),t=n[0],r=n[1],a=Object(I.g)().name,c=Object(I.f)(),i=c.push,o=c.goBack;return Object(R.useEffect)((function(){var e;Z.a.get((e=a,xe+"/name/"+e)).then((function(e){var n=e.data;return r(n[0])}))}),[a]),Object(H.jsxs)("div",{children:[Object(H.jsxs)(Re,{onClick:o,children:[Object(H.jsx)(J.a,{})," Back"]}),t?Object(H.jsx)(Ae,Object(V.a)({push:i},t)):Object(H.jsx)(ge,{children:Object(H.jsx)(fe,{})})]})},Be=function(){return Object(H.jsx)("div",{children:"This page doesn't exist, how did you do it?"})};var Le=function(){var e=Object(R.useState)([]),n=Object(F.a)(e,2),t=n[0],r=n[1];return Object(H.jsxs)(H.Fragment,{children:[Object(H.jsx)(K,{}),Object(H.jsx)(U,{children:Object(H.jsxs)(I.c,{children:[Object(H.jsx)(I.a,{exact:!0,path:"/",children:Object(H.jsx)(pe,{countries:t,setCountries:r})}),Object(H.jsx)(I.a,{path:"/country/:name",component:ze}),Object(H.jsx)(I.a,{component:Be})]})})]})};L.a.render(Object(H.jsx)(z.a.StrictMode,{children:Object(H.jsx)(D.a,{basename:"/React_country",children:Object(H.jsx)(Le,{})})}),document.getElementById("root"))}},[[91,1,2]]]);
//# sourceMappingURL=main.cc63f5d8.chunk.js.map