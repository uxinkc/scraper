(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{33:function(e,t,a){"use strict";var s={props:{APP_ABBR_NAME:String,APP_FULL_NAME:String,PROFILE_NAME:String,LOGOFF_URL:String},computed:{appTitleValue:function(){return this.APP_ABBR_NAME+" Prototype Kit"}}},i=a(5),n=Object(i.a)(s,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"fsa-header-app"},[a("div",{staticClass:"fsa-header-app__bd"},[a("div",{staticClass:"fsa-header-app__primary"},[a("router-link",{staticClass:"fsa-header-app__home-link",attrs:{to:"home"}},[a("span",{staticClass:"fsa-header-app__app-name"},[a("abbr",{staticClass:"fsa-header-app__app-abbr",attrs:{title:e.appTitleValue}},[e._v(e._s(e.APP_ABBR_NAME))]),e._v(" "),a("span",{staticClass:"fsa-header-app__app-full"},[e._v(e._s(e.APP_FULL_NAME))])])])],1),e._v(" "),a("div",{staticClass:"fsa-header-app__secondary"},[a("span",{staticClass:"fsa-header-app__profile"},[a("a",{staticClass:"fsa-header-app__profile-link",attrs:{href:e.LOGOFF_URL}},[a("span",{staticClass:"fsa-header-app__profile-name"},[e._v(e._s(e.PROFILE_NAME))])])])])])])}),[],!1,null,null,null).exports,l={props:{NAV_DATA:Array,EXTRA_CLASSES:String},data:function(){return{menuOpen:!1}},computed:{items:function(){return this.NAV_DATA}},methods:{toggleMenu:function(e){var t=e.currentTarget,a=t.getAttribute("aria-expanded");this.loopItems("closeAllMenus"),"true"==a?this.closeMenu(t):this.openMenu(t)},openMenu:function(e){var t=e.getAttribute("aria-controls");e.setAttribute("aria-expanded","true"),document.getElementById(t).setAttribute("aria-hidden","false")},closeMenu:function(e){var t=e.getAttribute("aria-controls");e.setAttribute("aria-expanded","false"),document.getElementById(t).setAttribute("aria-hidden","true")},addFocusListeners:function(e){e.addEventListener("focus",this.closeMenu(e))},removeFocusListeners:function(e){e.removeEventListener("focus",this.closeMenu(e))},addUnfocusListener:function(e){e.ref=this,document.addEventListener("click",(function(t){e.contains(t.target)||e.ref.loopItems("closeAllMenus")}))},listenForClickAway:function(){},listenForKeys:function(e){27==e.keyCode&&this.loopItems("closeAllMenus")},loopItems:function(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1];for(var t=document.getElementsByClassName("fsa-nav-global__link--has-sub-menu"),a=0;a<t.length;a++){var s=t[a];s.ref=this,this.addActionListener(e,s)}},addActionListener:function(e,t){"addFocusListeners"==e?this.addFocusListeners(t):"removeFocusListeners"==e?this.removeFocusListeners(t):"closeAllMenus"==e?this.closeMenu(t):"addUnfocusListener"==e&&this.addUnfocusListener(t)}},created:function(){window.addEventListener("keydown",this.listenForKeys)},mounted:function(){this.loopItems("addFocusListeners"),this.listenForClickAway()},beforeDestroy:function(){window.removeEventListener("keydown",this.listenForKeys),this.loopItems("removeFocusListeners")}},r={components:{headerApp:n,globalNav:Object(i.a)(l,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("nav",[a("div",{staticClass:"fsa-nav-global"},[a("div",{staticClass:"fsa-nav-global__bd"},[a("ul",{staticClass:"fsa-nav-global__list",attrs:{"aria-label":"Primary Navigation",id:"primary-navigation"}},e._l(e.items,(function(t){return a("li",{class:"fsa-nav-global__list-item "+t.columnClass},["true"==t.hasChild&&t.columnClass==e.EXTRA_CLASSES&&"true"==t.hasHeaders?a("div",[a("button",{staticClass:"fsa-nav-global__link fsa-nav-global__link--has-sub-menu",attrs:{id:t.uid+"-BTN",type:"button","aria-expanded":"false","aria-controls":t.uid},on:{click:e.toggleMenu}},[a("span",{staticClass:"fsa-nav-global__text",attrs:{id:t.uid+"-SUB"}},[e._v(e._s(t.label))])]),e._v(" "),a("div",{staticClass:"fsa-nav-global__sub-menu",attrs:{id:t.uid,"aria-hidden":"true"}},[a("div",{staticClass:"fsa-nav-global__sub-menu-bd",attrs:{"aria-labelledby":t.uid+"-SUB"}},e._l(t.children,(function(t){return a("div",{staticClass:"fsa-nav-global__sub-menu-group"},[a("h3",{staticClass:"fsa-nav-global__sub-menu-title",attrs:{id:t.uid}},[e._v(e._s(t.header))]),e._v(" "),a("ul",{staticClass:"fsa-nav-global__sub-menu-list",attrs:{"aria-labelledby":t.uid}},e._l(t.group,(function(t){return a("li",{staticClass:"fsa-nav-global__sub-menu-item"},[a("router-link",{staticClass:"fsa-nav-global__sub-menu-link",attrs:{to:t.path}},[e._v(e._s(t.label))])],1)})),0)])})),0)])]):"true"==t.hasChild&&t.columnClass==e.EXTRA_CLASSES&&"false"==t.hasHeaders||"true"==t.hasChild&&"false"==t.multiColumn?a("div",[a("button",{staticClass:"fsa-nav-global__link fsa-nav-global__link--has-sub-menu",attrs:{id:t.uid+"-BTN",type:"button","aria-expanded":"false","aria-controls":t.uid},on:{click:e.toggleMenu}},[a("span",{staticClass:"fsa-nav-global__text",attrs:{id:t.uid+"-SUB"}},[e._v(e._s(t.label))])]),e._v(" "),a("div",{staticClass:"fsa-nav-global__sub-menu",attrs:{id:t.uid,"aria-hidden":"true"}},[a("div",{staticClass:"fsa-nav-global__sub-menu-bd"},[a("ul",{staticClass:"fsa-nav-global__sub-menu-list",attrs:{"aria-labelledby":t.uid+"-SUB"}},e._l(t.children,(function(t){return a("li",{staticClass:"fsa-nav-global__sub-menu-item"},[a("router-link",{staticClass:"fsa-nav-global__sub-menu-link",attrs:{to:t.path}},[e._v(e._s(t.label))])],1)})),0)])])]):a("div",[a("router-link",{staticClass:"fsa-nav-global__link",attrs:{to:t.path}},[a("span",{staticClass:"fsa-nav-global__text"},[e._v(e._s(t.label))])])],1)])})),0)])])])}),[],!1,null,null,null).exports},computed:{navigationData:function(){return this.$store.getters["navigation/getNavigation"]}},methods:{},created:function(){this.$store.dispatch("navigation/getNavApi")}},o=Object(i.a)(r,(function(){var e=this.$createElement,t=this._self._c||e;return t("header",[t("headerApp",{attrs:{APP_ABBR_NAME:"SCRPR",APP_FULL_NAME:"Scraping Continously Robbing Precious Resources",PROFILE_NAME:"Michael Scott (Log off)",LOGOFF_URL:"https://www.google.com"}}),this._v(" "),t("globalNav",{attrs:{NAV_DATA:this.navigationData,EXTRA_CLASSES:"fsa-nav-global__list-item--multi-column"}})],1)}),[],!1,null,null,null);t.a=o.exports},34:function(e,t,a){"use strict";var s={},i=a(5),n={components:{hiddenItems:Object(i.a)(s,(function(){var e=this.$createElement;return(this._self._c||e)("div")}),[],!1,null,null,null).exports}},l=Object(i.a)(n,(function(){var e=this.$createElement,t=this._self._c||e;return t("footer",[t("hiddenItems")],1)}),[],!1,null,null,null);t.a=l.exports},39:function(e,t,a){"use strict";a.r(t);var s=a(33),i=a(34),n={props:{ID:String,LABEL:String,REQUIRED:String,INPUT_VALUE:String,INPUT_TYPE:String,BEHAVIOR:String,EXTRA_CLASSES:String,ERROR_FIELD:String,MESSAGE:String,HELP:String,ARIA_REQUIRED:String,ARIA_DESCRIBEDBY:String,HAS_MESSAGE:String,HAS_HELP:String},data:function(){return{hasMessge:!1,hasHelp:!0}}},l=a(5),r=Object(l.a)(n,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{class:"fsa-field "+e.ERROR_FIELD+" "+e.EXTRA_CLASSES},[a("label",{staticClass:"fsa-field__label",attrs:{for:e.ID,id:e.ID+"_label"}},[e._v("\n      "+e._s(e.LABEL)+" "),e._t("default")],2),e._v(" "),a("input",{class:"fsa-input fsa-field__item",attrs:{id:e.ID,"aria-required":e.ARIA_REQUIRED,required:e.REQUIRED,name:e.ID,type:e.INPUT_TYPE,"data-behavior":e.BEHAVIOR,"aria-describedby":e.ARIA_DESCRIBEDBY},domProps:{value:e.INPUT_VALUE}}),e._v(" "),e._t("labelDescribe"),e._v(" "),e.HAS_HELP?e._t("help"):e._e(),e._v(" "),e.HAS_MESSAGE?e._t("message"):e._e()],2)}),[],!1,null,null,null).exports,o={data:function(){return{searchArray:[],quickSearchUrl:"https://usda-fsa.github.io/fsa-design-system/sitemap/",quickSearchClass:".ds-sitemap__link"}},components:{baseHeader:s.a,baseFooter:i.a,field:r},computed:{navigationData:function(){return this.$store.getters["navigation/getNavigation"]},users:function(){return this.$store.getters["users/getUsers"]},employees:function(){return this.$store.getters["employees/getEmployees"]},tableHeadersData:function(){return this.$store.getters["employees/getEmployees"].headerData},tableData:function(){return this.$store.getters["employees/getEmployees"].tableData},totalItems:function(){var e=this.$store.getters["employees/getEmployees"],t=e.tableData?e.tableData.length:0;return t},totalPages:function(){var e=this.$store.getters["employees/getEmployees"],t=e.tableData?e.tableData.length:0;return Math.ceil(t/this.itemsPerPage)}},methods:{setSearchProperties:function(){this.getSearchSource(this.getSearchContent)},getSearchSource:function(e){if(window.XMLHttpRequest){var t=new XMLHttpRequest;console.log("xhr",t),t.onreadystatechange=function(){e(this)},t.open("GET",this.quickSearchUrl,!0),t.send()}else console.log("no xhr")},getSearchContent:function(e){console.log("res",e.response);var t=document.createElement("html");t.innerHTML=e.response;var a=[].slice.call(t.querySelectorAll(this.quickSearchClass));this.searchArray=a.map((function(e){return console.log("item",e),{text:e.innerText.trim(),url:e.pathname}}))},doSearch:function(e){var t=this.searchArray.filter((function(t){var a=t.text.toLowerCase(),s=e.toLowerCase();if(a.indexOf(s)>-1)return!0}));return console.log("list",t),t.slice(0,7)},onQuickSearchInput:function(){var e=document.getElementById("quick-search-id"),t=document.getElementById("quick-search-results-id");if(""!=e.value){var a="<ul>";this.doSearch(e.value).forEach((function(e){a+="<li>"+e.text+' - <a href="'+e.url+'">'+e.url+"</a></li>"})),a+="</ul>",t.innerHTML=a}else t.innerHTML=""},submitForm:function(e){this.$store.dispatch("users/addNewUser",e)},resetForm:function(e){e.name.value="",e.email.value=""},handleSubmit:function(e){this.submitForm({name:e.target.name.value,email:e.target.email.value}),this.resetForm(e.target)}},created:function(){this.$store.dispatch("users/getUsersApi"),this.$store.dispatch("employees/getEmployeesApi")}},u=Object(l.a)(o,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("baseHeader"),e._v(" "),a("main",{attrs:{id:"main-content",tabindex:"-1"}},[a("div",{staticClass:"fsa-section"},[a("div",{staticClass:"fsa-section__bd"},[a("h1",[e._v("Scraper Tool")]),e._v(" "),a("div",{staticClass:"fsa-field"},[e._m(0),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.quickSearchUrl,expression:"quickSearchUrl"}],staticClass:"fsa-input fsa-field__item",attrs:{id:"url","aria-describedby":"url-help","aria-required":"true",name:"url",type:"text"},domProps:{value:e.quickSearchUrl},on:{input:function(t){t.target.composing||(e.quickSearchUrl=t.target.value)}}}),e._v(" "),a("span",{staticClass:"fsa-field__help",attrs:{id:"url-help"}},[e._v("HTTPS enabled URLs are required")]),e._v(" "),e._m(1),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.quickSearchClass,expression:"quickSearchClass"}],staticClass:"fsa-input fsa-field__item",attrs:{id:"linkClass","aria-describedby":"linkClass-help","aria-required":"true",name:"linkClass",type:"text"},domProps:{value:e.quickSearchClass},on:{input:function(t){t.target.composing||(e.quickSearchClass=t.target.value)}}}),e._v(" "),a("span",{staticClass:"fsa-field__help",attrs:{id:"linkClass-help"}},[e._v("Use a class that is on the achor tag")])]),e._v(" "),a("div",{staticClass:"fsa-field"},[a("button",{staticClass:"fsa-btn",on:{click:e.setSearchProperties}},[e._v("Set Properties")])]),e._v(" "),a("div",{staticClass:"fsa-field"},[a("input",{staticClass:"fsa-input fsa-input--block",attrs:{id:"quick-search-id",type:"text",name:"search",value:"",placeholder:"Quick Search"},on:{input:e.onQuickSearchInput}}),e._v(" "),a("div",{attrs:{id:"quick-search-results-id"}})])])])]),e._v(" "),a("baseFooter")],1)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("label",{staticClass:"fsa-field__label",attrs:{for:"url"}},[this._v("URL "),t("span",{staticClass:"fsa-field__label-desc"},[this._v("Required")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("label",{staticClass:"fsa-field__label",attrs:{for:"linkClass"}},[this._v("Link Class "),t("span",{staticClass:"fsa-field__label-desc"},[this._v("Required")])])}],!1,null,null,null);t.default=u.exports}}]);
//# sourceMappingURL=4.bundle.js.map