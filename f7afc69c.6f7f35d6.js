(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{104:function(e,n,t){"use strict";t.d(n,"a",(function(){return m}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=o.a.createContext({}),u=function(e){var n=o.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},p=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(t),m=r,b=p["".concat(i,".").concat(m)]||p[m]||d[m]||a;return t?o.a.createElement(b,l(l({ref:n},c),{},{components:t})):o.a.createElement(b,l({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=p;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},99:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return u}));var r=t(3),o=t(7),a=(t(0),t(104)),i={id:"sage-install-onprem",title:"Installing CloudScend Foresight On-Prem or In Other Clouds",hide_title:"Installing CloudScend Foresight On-Prem or In Other Clouds",sidebar_label:"Installing CloudScend Foresight On-Prem or In Other Clouds"},l={unversionedId:"sage-install-onprem",id:"sage-install-onprem",isDocsHomePage:!1,title:"Installing CloudScend Foresight On-Prem or In Other Clouds",description:"Installing CloudScend Foresight On-Prem or in Other Cloud Environments",source:"@site/docs/sage-install-onprem.mdx",slug:"/sage-install-onprem",permalink:"/sage-docs/docs/sage-install-onprem",editUrl:"https://github.com/saic-oss/sage-docs/edit/main/webapp/docs/docs/sage-install-onprem.mdx",version:"current",sidebar_label:"Installing CloudScend Foresight On-Prem or In Other Clouds"},s=[{value:"Installing CloudScend Foresight on Docker Engine",id:"installing-cloudscend-foresight-on-docker-engine",children:[{value:"Assumptions for Docker Engine Installation",id:"assumptions-for-docker-engine-installation",children:[]},{value:"Technical Requirements for Docker Engine Installation",id:"technical-requirements-for-docker-engine-installation",children:[]},{value:"Steps for Installing CloudScend Foresight in Docker Engine Environment",id:"steps-for-installing-cloudscend-foresight-in-docker-engine-environment",children:[]},{value:"Configurations for CloudScend Foresight in Docker Engine Environment",id:"configurations-for-cloudscend-foresight-in-docker-engine-environment",children:[]}]},{value:"Installing CloudScend Foresight on Kubernetes",id:"installing-cloudscend-foresight-on-kubernetes",children:[{value:"Assumptions for Kubernetes Installation",id:"assumptions-for-kubernetes-installation",children:[]},{value:"Technical Requirements for Kubernetes Installation",id:"technical-requirements-for-kubernetes-installation",children:[]},{value:"Steps for Installing CloudScend Foresight in Kubernetes Environment",id:"steps-for-installing-cloudscend-foresight-in-kubernetes-environment",children:[]},{value:"Configurations for CloudScend Foresight in Kubernetes Environment",id:"configurations-for-cloudscend-foresight-in-kubernetes-environment",children:[]}]},{value:"Troubleshooting and Support",id:"troubleshooting-and-support",children:[]}],c={rightToc:s};function u(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.a)("wrapper",Object(r.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(a.a)("h1",{id:"installing-cloudscend-foresight-on-prem-or-in-other-cloud-environments"},"Installing CloudScend Foresight On-Prem or in Other Cloud Environments"),Object(a.a)("h2",{id:"installing-cloudscend-foresight-on-docker-engine"},"Installing CloudScend Foresight on Docker Engine"),Object(a.a)("h3",{id:"assumptions-for-docker-engine-installation"},"Assumptions for Docker Engine Installation"),Object(a.a)("ul",null,Object(a.a)("li",{parentName:"ul"},"You are familiar with Docker Engine"),Object(a.a)("li",{parentName:"ul"},"Access to functional Docker Enginer Environment"),Object(a.a)("li",{parentName:"ul"},"Knowledge of use of Docker files"),Object(a.a)("li",{parentName:"ul"},"SSL Instructions have been completed ",Object(a.a)("strong",{parentName:"li"},Object(a.a)("em",{parentName:"strong"},"NEED INPUT FROM TEAM ON THIS"))),Object(a.a)("li",{parentName:"ul"},Object(a.a)("strong",{parentName:"li"},"NEED INPUT FROM TEAM"))),Object(a.a)("h3",{id:"technical-requirements-for-docker-engine-installation"},"Technical Requirements for Docker Engine Installation"),Object(a.a)("ul",null,Object(a.a)("li",{parentName:"ul"},"Access to Docker Engine Environment"),Object(a.a)("li",{parentName:"ul"},"You must download and install an instance of ",Object(a.a)("a",Object(r.a)({parentName:"li"},{href:"https://www.sonarqube.org/downloads/"}),"SonarQube"),". You may download either a Community, Developer or Enterprise Edition."),Object(a.a)("li",{parentName:"ul"},"If any of your source code is written in ColdFusion, you must also download and install ",Object(a.a)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/stepstone-tech/sonar-coldfusion/releases/tag/2.0.0"}),"CFLint"),"."),Object(a.a)("li",{parentName:"ul"},Object(a.a)("strong",{parentName:"li"},"Explain different plugins for different versions of SonarQube (like CFLint, TypeScript, Java, etc)")),Object(a.a)("li",{parentName:"ul"},Object(a.a)("strong",{parentName:"li"},"NEED INPUT FROM TEAM"))),Object(a.a)("h3",{id:"steps-for-installing-cloudscend-foresight-in-docker-engine-environment"},"Steps for Installing CloudScend Foresight in Docker Engine Environment"),Object(a.a)("ol",null,Object(a.a)("li",{parentName:"ol"},Object(a.a)("p",{parentName:"li"},"Run Docker file...")),Object(a.a)("li",{parentName:"ol"},Object(a.a)("p",{parentName:"li"},Object(a.a)("strong",{parentName:"p"},"NEED INPUT FROM TEAM")))),Object(a.a)("h3",{id:"configurations-for-cloudscend-foresight-in-docker-engine-environment"},"Configurations for CloudScend Foresight in Docker Engine Environment"),Object(a.a)("ol",null,Object(a.a)("li",{parentName:"ol"},Object(a.a)("p",{parentName:"li"},"Environment Variables ???? (perhaps this should be somewhere else or isn't valid)")),Object(a.a)("li",{parentName:"ol"},Object(a.a)("p",{parentName:"li"},Object(a.a)("strong",{parentName:"p"},"NEED INPUT FROM TEAM")))),Object(a.a)("h2",{id:"installing-cloudscend-foresight-on-kubernetes"},"Installing CloudScend Foresight on Kubernetes"),Object(a.a)("h3",{id:"assumptions-for-kubernetes-installation"},"Assumptions for Kubernetes Installation"),Object(a.a)("ul",null,Object(a.a)("li",{parentName:"ul"},"You are familiar with Kubernetes"),Object(a.a)("li",{parentName:"ul"},"Access to Kubernetes Environment"),Object(a.a)("li",{parentName:"ul"},"SSL Instructions have been completed ",Object(a.a)("strong",{parentName:"li"},Object(a.a)("em",{parentName:"strong"},"NEED INPUT FROM TEAM ON THIS"))),Object(a.a)("li",{parentName:"ul"},Object(a.a)("strong",{parentName:"li"},"NEED INPUT FROM TEAM"))),Object(a.a)("h3",{id:"technical-requirements-for-kubernetes-installation"},"Technical Requirements for Kubernetes Installation"),Object(a.a)("ul",null,Object(a.a)("li",{parentName:"ul"},"Access to functional Kubernetes Environment"),Object(a.a)("li",{parentName:"ul"},"You must download and install an instance of ",Object(a.a)("a",Object(r.a)({parentName:"li"},{href:"https://www.sonarqube.org/downloads/"}),"SonarQube"),". You may download either a Community, Developer or Enterprise Edition."),Object(a.a)("li",{parentName:"ul"},"If any of your source code is written in ColdFusion, you must also download and install ",Object(a.a)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/stepstone-tech/sonar-coldfusion/releases/tag/2.0.0"}),"CFLint"),"."),Object(a.a)("li",{parentName:"ul"},Object(a.a)("strong",{parentName:"li"},"Explain different plugins for different versions of SonarQube (like CFLint, TypeScript, Java, etc)")),Object(a.a)("li",{parentName:"ul"},Object(a.a)("strong",{parentName:"li"},"NEED INPUT FROM TEAM"))),Object(a.a)("h3",{id:"steps-for-installing-cloudscend-foresight-in-kubernetes-environment"},"Steps for Installing CloudScend Foresight in Kubernetes Environment"),Object(a.a)("ol",null,Object(a.a)("li",{parentName:"ol"},Object(a.a)("p",{parentName:"li"},"Run file...")),Object(a.a)("li",{parentName:"ol"},Object(a.a)("p",{parentName:"li"},Object(a.a)("strong",{parentName:"p"},"NEED INPUT FROM TEAM")))),Object(a.a)("h3",{id:"configurations-for-cloudscend-foresight-in-kubernetes-environment"},"Configurations for CloudScend Foresight in Kubernetes Environment"),Object(a.a)("ol",null,Object(a.a)("li",{parentName:"ol"},Object(a.a)("p",{parentName:"li"},"Environment Variables ???? (perhaps this should be somewhere else or isn't valid)")),Object(a.a)("li",{parentName:"ol"},Object(a.a)("p",{parentName:"li"},Object(a.a)("strong",{parentName:"p"},"NEED INPUT FROM TEAM")))),Object(a.a)("h2",{id:"troubleshooting-and-support"},"Troubleshooting and Support"),Object(a.a)("p",null,"If you experience issues with your installation or need support with your CloudScend Foresight installation, please refer to the ",Object(a.a)("a",Object(r.a)({parentName:"p"},{href:"/sage-docs/docs/sage-operations-guide"}),"CloudScend Foresight Operations Guide"),"."))}u.isMDXComponent=!0}}]);