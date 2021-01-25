(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{79:function(t,a,e){"use strict";e.r(a),e.d(a,"frontMatter",(function(){return c})),e.d(a,"metadata",(function(){return b})),e.d(a,"rightToc",(function(){return i})),e.d(a,"default",(function(){return j}));var n=e(3),r=e(7),l=(e(0),e(97)),c={id:"foresight-data-dictionary",title:"CloudScend Foresight Data Dictionary For Knowledge Discovery",hide_title:"CloudScend Foresight Data Dictionary For Knowledge Discovery",sidebar_label:"CloudScend Foresight Data Dictionary For Knowledge Discovery"},b={unversionedId:"foresight-data-dictionary",id:"foresight-data-dictionary",isDocsHomePage:!1,title:"CloudScend Foresight Data Dictionary For Knowledge Discovery",description:"CloudScend Foresight Data Dictionary for Knowledge Discovery",source:"@site/docs/foresight-data-dictionary.mdx",slug:"/foresight-data-dictionary",permalink:"/cloudscend-foresight-docs/docs/foresight-data-dictionary",version:"current",sidebar_label:"CloudScend Foresight Data Dictionary For Knowledge Discovery"},i=[{value:"CloudScend Foresight Database",id:"cloudscend-foresight-database",children:[]}],O={rightToc:i};function j(t){var a=t.components,e=Object(r.a)(t,["components"]);return Object(l.a)("wrapper",Object(n.a)({},O,e,{components:a,mdxType:"MDXLayout"}),Object(l.a)("h1",{id:"cloudscend-foresight-data-dictionary-for-knowledge-discovery"},"CloudScend Foresight Data Dictionary for Knowledge Discovery"),Object(l.a)("p",null,"You are able to use your own instance of Metabase or any other Business Intelligence product to create your desired analytics using CloudScend Foresight data. We have provided read only access to the database tables below so you can create charts, graphs and perform analysis with the CloudScend Foresight data. The read only account information was provided with your CloudScend Foresight licenses."),Object(l.a)("h2",{id:"cloudscend-foresight-database"},"CloudScend Foresight Database"),Object(l.a)("table",null,Object(l.a)("thead",{parentName:"table"},Object(l.a)("tr",{parentName:"thead"},Object(l.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Table Name"),Object(l.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.a)("tbody",{parentName:"table"},Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.a)("strong",{parentName:"td"},"app_analysis_loe_results")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Table containing the data needed to calculate the Migration Estimate.")))),Object(l.a)("table",null,Object(l.a)("thead",{parentName:"table"},Object(l.a)("tr",{parentName:"thead"},Object(l.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Field Name"),Object(l.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Data Type"),Object(l.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.a)("tbody",{parentName:"table"},Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"P","*"," id"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"INTEGER"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Table specific key")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"*"," app_global_id"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"VARCHAR2(255)"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Application Global ID used as application key across CloudScend Foresight tables")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"estimated_survey_app_analysis_effort_hours"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"INTEGER"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Estimated AA effort hours from AA Summary")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"estimated_app_analysis_effort_cost"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"INTEGER"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Estimated AA effort cost from AA Summary")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"estimated_app_analysis_effort_bucket"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"VARCHAR2(10)"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Estimated AA effort bucket from AA Summary")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"actual_survey_app_analysis_effort_hours"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"INTEGER"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Actual AA effort hours - entered by user when complete")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"actual_app_analysis_effort_cost"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"INTEGER"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Actual AA cost - entered by user when complete")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"actual_app_analysis_effort_bucket"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"VARCHAR2(10)"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Actual AA bucket - entered by user when complete")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"eff_date"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"DATE"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Date the analysis was performed")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"end_date"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"DATE"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"estimated_migration_effort_bucket"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"VARCHAR2(16)"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Calculated Estimated Refactor Effort Bucket from Refactor Details")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"actual_migration_effort_bucket"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"VARCHAR2(16)"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Actual Refactor Effort Bucket entered by user when complete")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"estimated_migration_effort_hours"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"VARCHAR2(255)"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Calculated Estimated Refactor Hours from Refactor Details")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"actual_migration_effort_hours"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"INTEGER"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Actual Refactor Hours entered by user when complete")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"estimated_migration_effort_cost"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"VARCHAR2(255)"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Calculated Estimated Refactor Cost from Refactor Details")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"actual_migration_effort_cost"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"INTEGER"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Actual Refactor Cost entered by user when complete")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"estimated_app_analysis_total_score"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"INTEGER"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Total Calculated Score from AA Details Summary")))),Object(l.a)("table",null,Object(l.a)("thead",{parentName:"table"},Object(l.a)("tr",{parentName:"thead"},Object(l.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Table Name"),Object(l.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.a)("tbody",{parentName:"table"},Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.a)("strong",{parentName:"td"},"app_cast_highlight_tech_properties")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Table containing data for major CAST Highlight metrics.")))),Object(l.a)("table",null,Object(l.a)("thead",{parentName:"table"},Object(l.a)("tr",{parentName:"thead"},Object(l.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Field Name"),Object(l.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Data Type"),Object(l.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.a)("tbody",{parentName:"table"},Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"P","*"," table_id"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"INTEGER"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Table specific key")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"app_cast_highlight_cloud_blocker_index"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"NUMBER"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"CAST HL Cloud Blocker Index - Lower scores indicate fewer blockers to Cloud migration")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"app_cast_highlight_cloud_readiness_index"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"NUMBER"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"CAST HL Cloud Readiness Index - Higher scores indicate an application is better suited for Cloud migration with fewer modifications")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"app_cast_highlight_security_vulnerability_index_critical"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"INTEGER"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"CAST HL Critical Security Vulnerabilities Index")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"app_cast_highlight_security_vulnerability_index_high"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"INTEGER"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"CAST HL High Security Vulnerabilities Index")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"app_cast_highlight_security_vulnerability_index_low"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"INTEGER"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"CAST HL Low Security Vulnerabilities Index")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"app_cast_highlight_security_vulnerability_index_medium"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"INTEGER"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"CAST HL Medium Security Vulnerabilities Index")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"app_cast_highlight_tech_debt"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"NUMBER"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"CAST HL technical debt value refers to the cost to fix the structural quality of the application per CAST Highlight calculations")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"app_cast_app_id"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"INTEGER"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"CAST HL Application ID")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"app_cast_major_technology"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"VARCHAR2(255)"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"CAST HL provided major languages used")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"app_cast_software_agility_index"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"NUMBER"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"CAST HL Software Agility Index represents the ease of maintaining your application source code")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"app_cast_software_elegance_index"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"NUMBER"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"CAST HL Software Elegance Index represents code complexity")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"app_cast_software_resiliency_index"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"NUMBER"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"CAST HL Resiliency Index represents the presence of good or bad programming habits within your source code that make it more or less robust and secure")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"app_cast_software_sloc_count"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"INTEGER"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"CAST HL Source Lines Of Code Count")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"app_global_id"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"VARCHAR2(255)"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"CloudScend Foresight Application Global ID used as application key across CloudScend Foresight tables")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"eff_date"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"DATE"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Date analysis was performed")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"end_date"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"DATE"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"app_cast_app_name"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"VARCHAR2(255)"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Application Name")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"app_cast_functional_organization"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"VARCHAR2(255)"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Application Functional Organization")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"app_cast_highlight_obsolescence_outdated"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"INTEGER"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"CAST HL Outdated Obsolescence Index. Obsolesence information informs you of the number of frameworks that are obsolete and need remediation")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"app_cast_highlight_obsolescence_nearly_outdated"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"INTEGER"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"CAST HL Nearly Outdated Obsolescence Index. Obsolesence information informs you of the number of frameworks that are obsolete and need remediation")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"app_cast_highlight_obsolescence_not_outdated"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"INTEGER"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"CAST HL Not Outdated Obsolescence Index.")))),Object(l.a)("table",null,Object(l.a)("thead",{parentName:"table"},Object(l.a)("tr",{parentName:"thead"},Object(l.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Table Name"),Object(l.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.a)("tbody",{parentName:"table"},Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.a)("strong",{parentName:"td"},"app_cast_highlight_technologies_slocs")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Table contains data regarding SLOC by technology per application.")))),Object(l.a)("table",null,Object(l.a)("thead",{parentName:"table"},Object(l.a)("tr",{parentName:"thead"},Object(l.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Field Name"),Object(l.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Data Type"),Object(l.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.a)("tbody",{parentName:"table"},Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"P","*","table_id"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"INTEGER"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Table specific key")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"app_global_id"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"VARCHAR2(255)"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Application Global ID used as application key across CloudScend Foresight tables")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"technology"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"VARCHAR2(255)"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Software Language")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"slocs"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"INTEGER"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Number of Source Lines of Code")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"cloud_readiness_supported"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"CHAR(1)"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Indicator showing if cloud readiness is supported for this language")))),Object(l.a)("table",null,Object(l.a)("thead",{parentName:"table"},Object(l.a)("tr",{parentName:"thead"},Object(l.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Table Name"),Object(l.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.a)("tbody",{parentName:"table"},Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.a)("strong",{parentName:"td"},"app_history")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Table contains data showing history and location of source code uploads by application.")))),Object(l.a)("table",null,Object(l.a)("thead",{parentName:"table"},Object(l.a)("tr",{parentName:"thead"},Object(l.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Field Name"),Object(l.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Data Type"),Object(l.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.a)("tbody",{parentName:"table"},Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"*"," id"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"INTEGER"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Table specific key")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"*"," app_global_id"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"VARCHAR2 (255)"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Application Global ID used as application key across CloudScend Foresight tables")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"git_tag"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"VARCHAR2 (255)"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"GIT location for uploaded source code")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"upload_timestamp"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"TIMESTAMP"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Date/Time the instance of the source code was uploaded")))),Object(l.a)("table",null,Object(l.a)("thead",{parentName:"table"},Object(l.a)("tr",{parentName:"thead"},Object(l.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Table Name"),Object(l.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.a)("tbody",{parentName:"table"},Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.a)("strong",{parentName:"td"},"app_org")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Table contains data regarding application ownership and organization.")))),Object(l.a)("table",null,Object(l.a)("thead",{parentName:"table"},Object(l.a)("tr",{parentName:"thead"},Object(l.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Field Name"),Object(l.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Data Type"),Object(l.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.a)("tbody",{parentName:"table"},Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"P ","*"," id"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"INTEGER"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Table specific key")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"app_org"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"VARCHAR2 (255)"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Application Organization entered during Onboarding")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"app_owner"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"VARCHAR2 (255)"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Application Owner entered during Onboarding")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"app_project_manager"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"VARCHAR2 (255)"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Application Project Manager entered during Onboarding")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"*"," app_global_id"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"VARCHAR2 (255)"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Application Global ID used as application key across CloudScend Foresight tables")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"eff_date"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"DATE"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Date application was onboarded")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"end_date"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"DATE"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}))))),Object(l.a)("table",null,Object(l.a)("thead",{parentName:"table"},Object(l.a)("tr",{parentName:"thead"},Object(l.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Table Name"),Object(l.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.a)("tbody",{parentName:"table"},Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.a)("strong",{parentName:"td"},"app_sonarqube_metrics")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Table contains data regarding technical debt and vulnerabilities determined by SonarQube scan.")))),Object(l.a)("table",null,Object(l.a)("thead",{parentName:"table"},Object(l.a)("tr",{parentName:"thead"},Object(l.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Field Name"),Object(l.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Data Type"),Object(l.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.a)("tbody",{parentName:"table"},Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"P ","*"," id"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"NTEGER"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Table specific key")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"*"," app_global_id"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"VARCHAR2 (255)"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Application Global ID used as application key across CloudScend Foresight tables")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"technical_debt_rating"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"NUMBER"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Technical Debt rating for application received from SonarQube scan - 1.0 means very low technical debt and 5.0 means very high technical debt")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"vulnerability_count"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"INTEGER"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Vulnerability count from SonarQube scan")))),Object(l.a)("table",null,Object(l.a)("thead",{parentName:"table"},Object(l.a)("tr",{parentName:"thead"},Object(l.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Table Name"),Object(l.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.a)("tbody",{parentName:"table"},Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.a)("strong",{parentName:"td"},"application")),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Table contains main application data information.")))),Object(l.a)("table",null,Object(l.a)("thead",{parentName:"table"},Object(l.a)("tr",{parentName:"thead"},Object(l.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Field Name"),Object(l.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Data Type"),Object(l.a)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.a)("tbody",{parentName:"table"},Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"P ","*"," id"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"INTEGER"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Table specific key")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"*"," analysis_status"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"VARCHAR2 (255)"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Current status of analysis for the application")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"*"," app_id"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"VARCHAR2 (255)"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Application Global ID used as application key across CloudScend Foresight tables")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"*"," app_language"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"VARCHAR2 (255)"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Main programming language determined following Onboarding")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"*"," app_name"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"VARCHAR2 (255)"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Application Name entered during Onboarding")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"*"," app_user"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"VARCHAR2 (255)"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Application User entered during Onboarding")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"*"," functional"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"VARCHAR2 (255)"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Application Functional Org entered during Onboarding")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"*"," project_manager"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"VARCHAR2 (255)"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Application Project Manager entered during Onboarding")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"artifact_url"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"VARCHAR2 (255)"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"URL to location of stored artifacts")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"app_owner"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"VARCHAR2 (255)"),Object(l.a)("td",Object(n.a)({parentName:"tr"},{align:null}),"Application Owner entered during Onboarding")))))}j.isMDXComponent=!0},97:function(t,a,e){"use strict";e.d(a,"a",(function(){return o}));var n=e(0),r=e.n(n);function l(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function c(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function b(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?c(Object(e),!0).forEach((function(a){l(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):c(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function i(t,a){if(null==t)return{};var e,n,r=function(t,a){if(null==t)return{};var e,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)e=l[n],a.indexOf(e)>=0||(r[e]=t[e]);return r}(t,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)e=l[n],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var O=r.a.createContext({}),j=function(t){var a=r.a.useContext(O),e=a;return t&&(e="function"==typeof t?t(a):b(b({},a),t)),e},p={inlineCode:"code",wrapper:function(t){var a=t.children;return r.a.createElement(r.a.Fragment,{},a)}},d=r.a.forwardRef((function(t,a){var e=t.components,n=t.mdxType,l=t.originalType,c=t.parentName,O=i(t,["components","mdxType","originalType","parentName"]),d=j(e),o=n,m=d["".concat(c,".").concat(o)]||d[o]||p[o]||l;return e?r.a.createElement(m,b(b({ref:a},O),{},{components:e})):r.a.createElement(m,b({ref:a},O))}));function o(t,a){var e=arguments,n=a&&a.mdxType;if("string"==typeof t||n){var l=e.length,c=new Array(l);c[0]=d;var b={};for(var i in a)hasOwnProperty.call(a,i)&&(b[i]=a[i]);b.originalType=t,b.mdxType="string"==typeof t?t:n,c[1]=b;for(var O=2;O<l;O++)c[O]=e[O];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,e)}d.displayName="MDXCreateElement"}}]);