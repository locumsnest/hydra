(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{151:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"metadata",(function(){return p})),n.d(t,"default",(function(){return d}));var r=n(1),a=n(9),o=(n(0),n(160)),i={id:"release",title:"Release process",sidebar_label:"Release process"},c=[],p={id:"development/release",title:"Release process",description:"The release process may be automated in the future.",source:"@site/docs/development/release.md",permalink:"/docs/development/release",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/docs/development/release.md",lastUpdatedBy:"Omry Yadan",lastUpdatedAt:1575499860,sidebar_label:"Release process",sidebar:"Docs",previous:{title:"Contributing",permalink:"/docs/development/contributing"}},l={rightToc:c,metadata:p},s="wrapper";function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)(s,Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The release process may be automated in the future."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Checkout master"),Object(o.b)("li",{parentName:"ul"},"Update the Hydra version in ",Object(o.b)("inlineCode",{parentName:"li"},"hydra/__init__.py")),Object(o.b)("li",{parentName:"ul"},"Update NEWS.md with towncrier"),Object(o.b)("li",{parentName:"ul"},"Create a pip package for hydra-core: ",Object(o.b)("inlineCode",{parentName:"li"},"python setup.py sdist bdist_wheel")),Object(o.b)("li",{parentName:"ul"},"Upload pip package: ",Object(o.b)("inlineCode",{parentName:"li"},"python -m twine upload dist/*"))))}d.isMDXComponent=!0},160:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r),o=a.a.createContext({}),i=function(e){var t=a.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},c=function(e){var t=i(e.components);return a.a.createElement(o.Provider,{value:t},e.children)};var p="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}(e,["components","mdxType","originalType","parentName"]),s=i(n),d=r,u=s[c+"."+d]||s[d]||l[d]||o;return n?a.a.createElement(u,Object.assign({},{ref:t},p,{components:n})):a.a.createElement(u,Object.assign({},{ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:r,i[1]=c;for(var d=2;d<o;d++)i[d]=n[d];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);