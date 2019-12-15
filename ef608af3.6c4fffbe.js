(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{155:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"rightToc",(function(){return i})),n.d(t,"metadata",(function(){return u})),n.d(t,"default",(function(){return p}));var a=n(1),r=n(9),o=(n(0),n(160)),s={id:"multi-run",title:"Multi-run",sidebar_label:"Multi-run"},i=[],u={id:"tutorial/multi-run",title:"Multi-run",description:"Sometimes you want to run a parameter sweep.",source:"@site/docs/tutorial/6_multirun.md",permalink:"/docs/tutorial/multi-run",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/docs/tutorial/6_multirun.md",lastUpdatedBy:"Omry Yadan",lastUpdatedAt:1570385071,sidebar_label:"Multi-run",sidebar:"Docs",previous:{title:"Config composition",permalink:"/docs/tutorial/composition"},next:{title:"Tab completion",permalink:"/docs/tutorial/tab_completion"}},l={rightToc:i,metadata:u},c="wrapper";function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)(c,Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Sometimes you want to run a parameter sweep.\nTo run a parameter sweep, use the ",Object(o.b)("inlineCode",{parentName:"p"},"--multirun")," (",Object(o.b)("inlineCode",{parentName:"p"},"-m"),") flag and pass a comma separated list for each\ndimension you want to sweep."),Object(o.b)("p",null,"Here is a sweep over the db types (mysql,postgresql) and the schemas (warehouse,support,school).\nOutput does not contain the configuration prints."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-text"})," $ python tutorial/50_composition/my_app.py schema=warehouse,support,school db=mysql,postgresql -m\n[2019-10-01 14:44:16,254] - Launching 6 jobs locally\n[2019-10-01 14:44:16,254] - Sweep output dir : multirun/2019-10-01/14-44-16\n[2019-10-01 14:44:16,254] -     #0 : schema=warehouse db=mysql\n[2019-10-01 14:44:16,321] -     #1 : schema=warehouse db=postgresql\n[2019-10-01 14:44:16,390] -     #2 : schema=support db=mysql\n[2019-10-01 14:44:16,458] -     #3 : schema=support db=postgresql\n[2019-10-01 14:44:16,527] -     #4 : schema=school db=mysql\n[2019-10-01 14:44:16,602] -     #5 : schema=school db=postgresql\n")),Object(o.b)("p",null,"The default launcher runs the jobs locally and serially."),Object(o.b)("p",null,"There are plans to add additional Launchers, such as a Launcher that launches your application code on AWS."))}p.isMDXComponent=!0},160:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return p}));var a=n(0),r=n.n(a),o=r.a.createContext({}),s=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},i=function(e){var t=s(e.components);return r.a.createElement(o.Provider,{value:t},e.children)};var u="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},c=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),c=s(n),p=a,m=c[i+"."+p]||c[p]||l[p]||o;return n?r.a.createElement(m,Object.assign({},{ref:t},u,{components:n})):r.a.createElement(m,Object.assign({},{ref:t},u))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}c.displayName="MDXCreateElement"}}]);