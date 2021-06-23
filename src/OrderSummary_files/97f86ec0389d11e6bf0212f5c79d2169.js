if (typeof tiMonitor == "undefined"){ var tiMonitor = tiMonitor || {};
(function(){Function.prototype.bind=Function.prototype.bind||function(a){var c=this;return function(){return c.apply(a,arguments)}}})();var EMPTY_FUN=function(){},UNDEF;
(function(){function a(){}var c=null;try{c=(0,eval)("this")||function(){return this}()}catch(b){}a.global=function(){return c};a.namespace=function(b,e,f,l){b=b.split(".");var g=a.NAMESPACE_BASE||a.global(),h=null,m=null,g=f||g;for(f=0;f<b.length-1;f+=1)m=b[f],g[m]=g[m]||{},g=g[m];h=g;m=b[b.length-1];c.TAGSDK_NS_OVERRIDE&&(l=!1);void 0!==e?void 0!==h[m]&&l||(h[m]=e):h[m]=h[m]||{};return h[m]};a.clazz=function(b,e,c,l,g){a.namespace(b,e,l,!0);"function"===typeof c&&(e.superclass=c,e.prototype=new e.superclass(g));
e.prototype&&(b=b.split("."),e.prototype.CLASS_NAME=b[b.length-1],b.splice(b.length-1,1),e.prototype.PACKAGE_NAME=b.join("."));return e};a.clazz("taginspector.Define",a)})();
(function(){function a(b){}for(var c={},b=0;93>b;b++)c["abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ*!-#$&+()@'%./:<>?[\"]^_`{|}~\\;=".charAt(b)]=b;taginspector.Define.clazz("taginspector.Cookie",a);a.cookieAlphabet="abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ*!-#$&+()@'%./:<>?[\"]^_`{|}~\\;=";a.cookieAlphabetMap=c;a.decode=function(b){return decodeURIComponent(b)};a.encode=function(b){return encodeURIComponent(b)};a.set=function(b,e,c,l,g){if(c){var h=new Date;
h.setTime(h.getTime()+864E5*c);c="; expires="+h.toGMTString()}else c="";g&&(b=a.encode(b),e=a.encode(e));b=b+"="+e+c+"; path=/;";l&&(b+=" domain="+l);document.cookie=b};a.get=function(b,c){for(var f=b+"=",l=document.cookie.split(";"),g=0;g<l.length;g++){for(var h=l[g];" "===h.charAt(0);)h=h.substring(1,h.length);if(0===h.indexOf(f))return f=h.substring(f.length,h.length),c&&(f=a.decode(f)),f}return null};a.getAll=function(b,c){for(var f=b+"=",l=document.cookie.split(";"),g=[],h=0;h<l.length;h++){for(var m=
l[h];" "===m.charAt(0);)m=m.substring(1,m.length);0===m.indexOf(f)&&(m=m.substring(f.length,m.length),c&&(m=a.decode(m)),g.push(m))}return g};a.rm=function(b,c){a.set(b,"",-1,c)}})();
(function(){function a(a){if(a)if(a.alphabet)for(this.alphabet=a.alphabet,this.dict={},a=0;a<this.alphabet.length;a++)this.dict[this.alphabet[a]]=a;else this.alphabet=b,this.dict=f}function c(b,a){for(var c in a)if(b===a[c])return c;return null}for(var b=[],d=Math.pow(2,8),e=0;e<d;e++)b.push(String.fromCharCode(e));for(var f={},d=0;d<b.length;d++)f[b[d]]=d;taginspector.Define.clazz("taginspector.compression.LZW",a);a.prototype.encode=function(b){for(var a=this.alphabet.length,c={},e=[],d=0,p=b.charAt(d++),
q,k=this.dict;q=b.charAt(d++);){var n=p+q;if(k.hasOwnProperty(n)||c.hasOwnProperty(n))p=n;else{var f=k.hasOwnProperty(p)?k[p]:c[p];if(void 0===f)throw"Dictionary base is to small for those contents: "+p;e.push(f);c[n]=a++;p=q}}""!==p&&e.push(c.hasOwnProperty(p)?c[p]:k[p]);return e};a.prototype.decode=function(b){for(var a=this.dict,e=this.alphabet.length,d,f={},p=c(b[0],a),q=p,k=[p],n=1;n<b.length;n++){var w=b[n];d=c(w,a);null===d&&(f.hasOwnProperty(w)&&(d=f[w]),null===d&&(d=q+p));k.push(d);p=d.charAt(0);
f[e++]=q+p;q=d}return k.join("")}})();
(function(){function a(b){}for(var c={},b=0;45>b;b++)c["abcdefghijklmnopqrstuvwxyz0123456789'%./:<>?[".charAt(b)]=b;for(var d={},b=0;45>b;b++)d['ABCDEFGHIJKLMNOPQRSTUVWXYZ*!-+()@{|}"]^_`~$&#'.charAt(b)]=b;for(var e={},b=0;45>b;b++)e["abcdefghijklmnopqrstuvwxyz0123456789'%./:<>?[".charAt(b)]='ABCDEFGHIJKLMNOPQRSTUVWXYZ*!-+()@{|}"]^_`~$&#'.charAt(b);var f="abcdefghijklmnopqrstuvwxyz0123456789'%./:<>?[".split(""),l=f.length,g=new taginspector.compression.LZW({});taginspector.Define.clazz("taginspector.compression.Compressor",
a);a.prototype.compress=function(b,a){for(var c=(a||g).encode(b),p=[],q=0;q<c.length;q++)p.push(String.fromCharCode(c[q]));return p.join("")};a.prototype.compressAnsi=function(b,a){for(var c=(a||g).encode(b),p=[],q=0;q<c.length;q++){var k;k=c[q];var n=0,d=0>k;d&&(k=-k);var s="",v=!0;do n=k%l,v?(s=e[f[n]],v=!1):s=f[n]+s,k=(k-n)/l;while(0<k);k=d?"-"+s:s;p.push(k)}return p.join("")};a.prototype.decompressAnsi=function(b,a){for(var e=[],p="",q=0;q<b.length;q++){var k=b.charAt(q);if(d.hasOwnProperty(k)){for(var k=
p+k,p="",n=0,f=0,s=!0,v=0;v<k.length;v++){var x=k.charAt(k.length-1-v);s&&(s=!1,x="abcdefghijklmnopqrstuvwxyz0123456789'%./:<>?[".charAt(d[x]));n+=c[x]*Math.pow(l,f++)}k=n;e.push(k)}else p+=k}return(a||g).decode(e)};a.prototype.decompress=function(b,a){for(var c=[],p=0;p<b.length;p++)c.push(b.charCodeAt(p));return(a||g).decode(c)}})();
(function(){function a(){}function c(b,a){for(var k=l.length,n=0;n<k;n++)if(b===l[n][0])return l[n][1];l[l.length]=[b,a];return!1}function b(a,q,k,n,e){var d=!1,g=!1,m=!1,h=!1,r=!1,r=!1;q&&(d=(r=!!q.all)||q.nodes,h=r||q.win,g=r,m=q.noFunctions&&!r,void 0!==q.noOwn&&(g=!!q.noOwn),void 0!==q.noFunctions&&(m=!!q.noFunctions),void 0!==q.win&&(h=!!q.win),void 0!==q.nodes&&(d=!!q.nodes),r=!!q.copyReference);if(void 0===k||k){void 0!==k&&k--;if(!(a&&a instanceof Object))return a;if(!d){try{if(a instanceof
Node)return a}catch(y){if(a instanceof ActiveXObject&&void 0!==a.nodeType)return a}if(a===document)return a}if(!h&&a===f)return a;d=a instanceof Array?[]:{};a instanceof Date&&(d=new Date(a));!m&&a instanceof Function&&(m=String(a).replace(/\s+/g,""),d=m.indexOf("{[nativecode]}")+14===m.length?function(){return a.apply(e||this,arguments)}:function(){return a.apply(this,arguments)});void 0===n&&(l=[],n=0);if(m=c(a,d))return m;if(d instanceof Array)for(m=0;m<a.length;m++)d[d.length]=a[m]===a[m]?b(a[m],
q,k,n+1,a):a[m];else{var m=0,u;for(u in a){if(g||a.hasOwnProperty(u))d[u]=a[u]===a[u]?b(a[u],q,k,n+1,a):a[u];m++}}q.proto&&(d.prototype=b(a.prototype,q,k,n+1,a));r&&(d.___copy_ref=a);return d}}function d(b,a,k,n,c,e,m){k=k||{};void 0===k.hasOwn&&(k.hasOwn=!0);if(!k.objectsOnly||b instanceof Object)if(void 0===k.maxDeep||k.maxDeep){void 0!==k.maxDeep&&k.maxDeep--;if(!k||!k.nodes)try{if(b instanceof Node)return}catch(l){if(b instanceof ActiveXObject&&void 0!==b.nodeType)return}if(b!==f){void 0===n&&
(g=[],n=0);var h;a:{for(h=0;h<n&&h<g.length;h++)if(b===g[h]){h=!0;break a}h=!1}if(!(h||(g[n]=b,c=c||b,c&&e&&c[e]!==c[e]||a(b,c,e,m)))){e=0;h="";for(var r in b){if(!k.hasOwn||b.hasOwnProperty(r))try{var y=b[r];k.track&&(h=m?m+"."+r:r);d(y,a,k,n+1,c,r,h)}catch(u){}e++}}}}}var e=taginspector.Define,f=e.global();e.clazz("taginspector.datapulse.Utils",a);a.global=e.global;a.namespace=e.namespace;a.clazz=e.clazz;a.getObjectUsingPath=function(b,a){a=a||f;for(var k=b.split("."),c=0;c<k.length;c++)a&&k[c]&&
(a=a[k[c]]);return a};a.variableExists=function(b){return void 0!==b&&null!==b&&""!==b};a.ANON_VARS=[];a.getAnonymousAcessor=function(b){var c=a.indexInArray(b,a.ANON_VARS);-1===c&&(c=a.addToArrayIfNotExist(a.ANON_VARS,b));return"taginspector.datapulse.Utils.ANON_VARS["+c+"]"};a.replaceAll=function(b,a,k){return b.replace(new RegExp(a.replace(/([.*+?^=!:${}()|\[\]\/\\])/g,"\\$1"),"g"),k)};a.isInt=function(b){if(isNaN(b))return!1;b=parseFloat(b);return(b|0)===b};a.secureText=function(b){"string"!==
typeof b&&(b+="");b=b.replace(/</g,"&lt;");return b=b.replace(/>/g,"&gt;")};a.getUrl=function(){return document.location.href};a.getQueryParam=function(b){var c,k,n,d;c=a.getUrl();if(0<c.indexOf("?"))for(d=c.substring(c.indexOf("?")+1).split("&"),c=0,k=d.length;c<k;c+=1)if(n=d[c],0<n.indexOf("=")&&(n=n.split("="),2===n.length&&n[0]===b))return n[1];return null};a.getElementValue=function(b){return(b=document.getElementById(b))?b.textContent||b.innerText:null};var l=[];a.objectCopy=function(a,c){c=
c||{};var k=b(a,c,c.maxDeep);l=[];return k};var g=[];a.traverse=function(b,a,k){d(b,a,k)};a.prepareQuotedString=function(b){return"string"===typeof b?'"'+b.replace(/\"/g,'\\"')+'"':b};a.expressionToFunction=function(b,c){return a.gevalAndReturn("function ("+(c||"")+") {"+b+"}").result};a.defineClass=function(b,c,k){var n=b.split("."),n=a.gevalAndReturn("(function "+n[n.length-1]+"() {  if ("+b+"._CONSTRUCTOR) {    return "+b+"._CONSTRUCTOR.apply(this, arguments);  } else {    if ("+b+".superclass) {      return "+
b+".superclass.apply(this, arguments);    }  }})").result;n._CONSTRUCTOR=k.CONSTRUCTOR;n.superclass=c;a.clazz(b,n,c);for(var d in k)k.hasOwnProperty(d)&&"CONSTRUCTOR"!==d&&(n.prototype[d]=k[d]);return n};a.keys=function(b){if(b instanceof Object){if(Object.keys)return Object.keys(b);var a=[],c;for(c in b)b.hasOwnProperty(c)&&(a[a.length]=c);return a}throw"keys() called on non-object!";};a.getSrcElement=function(b){var a;b=b||window.event;b.srcElement?a=b.srcElement:b.target&&(a=b.target);return a};
a.addToArrayIfNotExist=function(b,a){for(var c=0,n=!1;c<b.length;c+=1)if(b[c]===a){n=!0;break}n||(b[b.length]=a,c=-1);return c};a.indexInArray=function(b,a){for(var c=0,n=!1;c<b.length;c++)if(b[c]===a){n=!0;break}return n?c:-1};a.removeFromArray=function(b,a){for(var c=0;c<b.length;c+=1)b[c]===a&&b.splice(c,1)};a.addClass=function(b,c){var k;try{b.classList.add(c)}catch(n){null===b.className?b.className=c:(k=b.className.split(" "),a.addToArrayIfNotExist(k,c),b.className=k.join(" "))}};a.removeClass=
function(b,c){var k;try{b.classList.remove(c)}catch(n){null===b.className?b.className="":(k=b.className.split(" "),a.removeFromArray(k,c),b.className=k.join(" "))}};a.gevalAndReturn=function(b){a.gevalAndReturn.___var_test___=void 0;a.gevalAndReturn.___var_test___error=void 0;a.geval("try{taginspector.datapulse.Utils.gevalAndReturn.___var_test___=("+b+");}catch(ex){taginspector.datapulse.Utils.gevalAndReturn.___var_test___error = ex;}");return{result:a.gevalAndReturn.___var_test___,error:a.gevalAndReturn.___var_test___error}};
a.trim=function(b){try{return String(b).trim()}catch(a){return String(b).replace(/^\s+|\s+$/g,"")}};a.setIfUnset=function(b,a){if(b&&a)for(var c in a)a.hasOwnProperty(c)&&!b.hasOwnProperty(c)&&(b[c]=a[c])};a.geval=function(b){window&&window.execScript?window.execScript(b):f.eval.call(f,b)};var h=[],m=!1;a.bodyReady=function(b){if(m)return b&&b(),!0;if(m=!(!document.body||"complete"!==document.readyState)){for(var a=0;a<h.length;a++)try{h[a]()}catch(c){}b&&b()}else b&&h.push(b);return m};var r=f.onload;
f.onload=function(b){a.bodyReady();r&&r(b)}})();
(function(){function a(b){this.config={name:"Trigger-"+c++,uniqueId:"Trigger-"+c++,triggerScript:void 0,rules:[]};this.currentState=a.state.WAITING;if(b){for(var d in b)b.hasOwnProperty(d)&&(this.config[d]=b[d]);this.uniqueId=this.config.uniqueId;b.session&&this.setSession(b.session);return a.register(this)}}var c=0;taginspector.datapulse.Utils.clazz("taginspector.datapulse.trigger.BaseTrigger",a);a.pageTriggers=[];a.resetFiredTriggers=function(){pageTriggers=a.pageTriggers;for(i=0;i<pageTriggers.length;i++){t=
pageTriggers[i];t.config.triggerFired=!1;t.currentState=a.state.WAITING;for(var b=0;b<t.config.rules.length;b++)rule=t.config.rules[b],rule.hitSent=!1}};a.register=function(b){return b instanceof a?(a.pageTriggers.push(b),b):null};a.state={WAITING:0,FIRED:1};a.prototype.checkRules=function(){for(var b=0;b<this.config.rules.length;b++)rule=this.config.rules[b],rule.checkFiltersIfTriggersFired()};a.prototype.triggerCallback=function(){this.currentState=a.state.FIRED;this.checkRules()};a.prototype.initTrigger=
function(b){cb=this.triggerCallback;cb=cb.bind(this);triggerFired=this.config.triggerFired;!1==triggerFired&&this.config.triggerScript(cb,triggerFired);this.config.triggerFired=!0;b(this.config.triggerFired)};a.prototype.getState=function(){return this.currentState};a.prototype.addRule=function(b){this.config.rules.push(b)};a.prototype.setTriggerScript=function(b){this.config.triggerScript=b}})();
(function(){function a(b){this.config={};this.parameters=null;this.reportValue=!1;if(b){this.uniqueId=b.uniqueId;this.reportValue=b.reportValue;a.ALL_VARIABLES[this.uniqueId]=this;for(var c in b)this.config[c]=b[c];void 0!==b.value&&(this.value=b.value);void 0!==b.defaultValue&&(this.defaultValue=b.defaultValue);return a.register(this)}}var c=taginspector.datapulse.Utils;c.clazz("taginspector.datapulse.pagevariable.BaseVariable",a);a.ALL_VARIABLES={};a.pageVariables=[];a.clearCache=function(){pageVars=
a.pageVariables;for(i=0;i<pageVars.length;i++)t=pageVars[i],t.isCachedValueSet=!1};a.register=function(b){return b instanceof a?(a.pageVariables.push(b),b):null};a.prototype.getValue=function(){return this.value};a.prototype.setValue=function(b){this.value=b};a.prototype.getDefaultValue=function(){return this.defaultValue};a.prototype.setDefaultValue=function(b){this.defaultValue=b};a.prototype.exists=function(b){var a=c.variableExists(this.getValue());b&&(a=a||c.variableExists(this.getDefaultValue()));
return a};a.prototype.getRelativeValue=function(b,a){var e=this.getValue();c.variableExists(e)||(e=a);var f;b&&!c.variableExists(e)&&(f=this.getDefaultValue(),c.variableExists(f)&&(e=f));return e};a.prototype.replaceToken=function(b,a,e,f){var l=this.exists();e=l?this.getValue():e;b="\\$\\{"+b+"\\}";return f||e instanceof Array?(f=l?this.getValueAccessorString():c.getAnonymousAcessor(e),a.replace(new RegExp(b,"g"),f)):a.replace(new RegExp(b,"g"),e)};a.prototype.getAccessorString=function(){return"taginspector.datapulse.pagevariable.BaseVariable.ALL_VARIABLES."+
this.uniqueId};a.prototype.getValueAccessorString=function(){return this.getAccessorString()+".getValue()"}})();
(function(){function a(b){this._lockObject={};var d={uniqueId:"Macro-"+c++};if(b)for(var e in b)d[e]=b[e];this.reportValue=!1;b&&(this.uniqueId=b.uniqueId,this.reportValue=b.reportValue);this.valueSetTimestamp=0;this.isCachedValueSet=!1;this.cachedValue="";a.superclass.call(this,d)}var c=0;taginspector.datapulse.Utils.clazz("taginspector.datapulse.pagevariable.JsExpression",a,taginspector.datapulse.pagevariable.BaseVariable);a.prototype.getValue=function(){return!0==this.isCachedValueSet&&3>=performance.now()-
this.valueSetTimestamp?this.cachedValue:this.value(!0)?(this.isCachedValueSet=!0,this.valueSetTimestamp=performance.now(),this.cachedValue=this.value(!0).toString()):""}})();
(function(){function a(b){this.config={order:0,include:!0,name:"Filter-"+c++,uniqueId:"Filter-"+c++,script:void 0,session:void 0};this.session=null;if(b){for(var a in b)b.hasOwnProperty(a)&&(this.config[a]=b[a]);b.session&&this.setSession(b.session)}this.uniqueId=this.config.uniqueId}var c=0;taginspector.datapulse.Utils.clazz("taginspector.datapulse.filter.BaseFilter",a);a.state={DISABLED:-3,SESSION:-2,PASS:-1,FAIL:0};a.prototype.reset=function(){this.enable()};a.prototype.disable=function(){this.config.disabled=
!0};a.prototype.enable=function(){this.config.disabled=!1};a.prototype.match=function(){return!0};a.prototype.setSession=function(b){this.session=b};a.prototype.getSession=function(){return this.session};a.prototype.getState=function(){var b=a.state.PASS;if(this.config.disabled)return a.state.DISABLED;this.config.script&&(b=this.config.script.call(this,b));isNaN(+b)&&(b=a.state.FAIL);this.lastState=+b;return b}})();
(function(){taginspector.datapulse.Utils.namespace("taginspector.datapulse.filter.pattern.PatternType",{CONTAINS:"Contains",MATCHES_EXACTLY:"Matches Exactly",STARTS_WITH:"Starts With",ENDS_WITH:"Ends With",REGULAR_EXPRESSION:"Regular Expression",ALL_URLS:"All URLs",EQUALS:"Equals",DOES_NOT_EQUAL:"Does not Equal",DOES_NOT_CONTAIN:"Does not Contain",DOES_NOT_STARTS_WITH:"Does not Start With",DOES_NOT_END_WITH:"Does not End With",MATCHES_REGEX:"Matches Regex",DOES_NOT_MATCH_REGEX:"Does not Match Regex",
LESS_THAN:"Less Than",GREATER_THAN:"Greater Than"})})();
(function(){function a(c){this._lockObject={};var e={comparisonType:b.CONTAINS,sourceVariable:void 0,comparisonVariable:void 0};if(c)for(var f in c)c.hasOwnProperty(f)&&(e[f]=c[f]);a.superclass.call(this,e)}var c=taginspector.datapulse.Utils,b=taginspector.datapulse.filter.pattern.PatternType;c.clazz("taginspector.datapulse.filter.JsExpressionFilter",a,taginspector.datapulse.filter.BaseFilter);a.prototype.match=function(){var a=!0,e=this.config.sourceVariable.getValue();if("object"==typeof this.config.comparisonVariable)var f=
this.config.comparisonVariable.getValue();else if("string"==typeof this.config.comparisonVariable||"number"==typeof this.config.comparisonVariable)f=this.config.comparisonVariable;else return!1;switch(this.config.comparisonType){case b.LESS_THAN:case b.GREATER_THAN:if(!1==c.isInt(f))return!1;f=parseInt(f)}switch(this.config.comparisonType){case b.DOES_NOT_CONTAIN:case b.CONTAINS:a=0<=e.toLowerCase().indexOf(f.toLowerCase());break;case b.EQUALS:case b.DOES_NOT_EQUAL:case b.MATCHES_EXACTLY:a=e.toLowerCase()===
f.toLowerCase();break;case b.STARTS_WITH:case b.DOES_NOT_STARTS_WITH:a=0===e.toLowerCase().indexOf(f.toLowerCase());break;case b.ENDS_WITH:case b.DOES_NOT_END_WITH:a=e.toLowerCase().substr(-f.length)===f.toLowerCase();break;case b.MATCHES_REGEX:case b.REGULAR_EXPRESSION:case b.DOES_NOT_MATCH_REGEX:a=(new RegExp(f,"i")).test(e);break;case b.LESS_THAN:a=e<f;break;case b.GREATER_THAN:a=e>f;break;case b.ALL_variableValueS:a=!0}switch(this.config.comparisonType){case b.DOES_NOT_EQUAL:case b.DOES_NOT_CONTAIN:case b.DOES_NOT_STARTS_WITH:case b.DOES_NOT_END_WITH:case b.DOES_NOT_MATCH_REGEX:a=
!a}return a}})();
(function(){function a(b){this.config={};this.uniqueId="BR"+e++;this.ruleVersion=1;this.triggerTiming="";if(b){this.uniqueId=b.uniqueId;this.ruleVersion=b.ruleVersion;this.triggerTiming=b.triggerTiming;this.dataCollector=b.dataCollector;for(var a in b)this.config[a]=b[a]}this.filters=[];this.session=void 0;this.triggers=[];this.hitSent=!1}var c=taginspector.datapulse.filter.BaseFilter,b=taginspector.datapulse.trigger.BaseTrigger,d=taginspector.datapulse.pagevariable.BaseVariable,e=0;taginspector.datapulse.Utils.clazz("taginspector.datapulse.BaseRule",
a);a.prototype.getFilters=function(){return this.filters};a.prototype.addFilter=function(b){this.filters.push(b)};a.prototype.addTrigger=function(b){this.triggers.push(b)};a.prototype.hasHitBeenSent=function(){return this.hitSent};var f=b.state.WAITING,l=b.state.FIRED,g=c.state.PASS,h=c.state.FAIL;a.prototype.getFailedFilters=function(){filters=this.filters;failedFilters=[];for(var b=0;b<filters.length;b++)filter=filters[b],filter.match()||failedFilters.push(filter.uniqueId+"|"+filter.config.sourceVariable.uniqueId);
return failedFilters};a.prototype.checkFiltersIfTriggersFired=function(b){b=tiMonitor.dataCollector.timeOnPage();triggersRun=this.triggersState();if(triggersRun==l&&!1==this.hitSent)if(this.hitSent=!0,validationResults=this.filtersState(),validationResults==h){failedFilters=this.getFailedFilters();qsPageVariables=[];pageVariables=d.pageVariables;for(i=0;i<pageVariables.length;i++)try{pageVariable=pageVariables[i],pageVariable instanceof d&&!0==pageVariable.reportValue&&(variableId=pageVariable.uniqueId,
(variableValue=pageVariable.getValue())?1E3<variableValue.length&&(variableValue=variableValue.substring(0,1E3)):variableValue="*undefined*",combinedVariableValue=encodeURIComponent(variableId)+"="+encodeURIComponent(variableValue),qsPageVariables.push(combinedVariableValue))}catch(a){errMessage="Error with variable "+variableId+": "+a.message,console.log(errMessage),jeErrorObj={message:errMessage},tiMonitor.dataCollector.queueRequest(jeErrorObj,"jserror")}failedRuleObject={failedConditions:failedFilters.toString(),
pageMacros:qsPageVariables.toString(),failedRule:this.uniqueId,validationTime:b,ruleVersion:this.ruleVersion,triggerTiming:this.triggerTiming};this.dataCollector.queueRequest(failedRuleObject,"validationerror")}else passedRuleObject={passedRule:this.uniqueId,ruleVersion:this.ruleVersion,validationTime:b,triggerTiming:this.triggerTiming},this.dataCollector.queueRequest(passedRuleObject,"validationsuccess")};a.prototype.triggersState=function(){for(var b=l,a=0;a<this.triggers.length;a++)if(trigger=
this.triggers[a],trigger.getState()==f){b=f;break}return b};a.prototype.filtersState=function(){filters=this.filters;session=this.session;filters=filters.sort(function(b,a){try{return a.config.order-b.config.order}catch(c){return 0}});var b=g;if(!filters||0===filters.length)return b;for(var a,c=0;c<filters.length;c++)if(a=filters[c],a.setSession(session),!1==a.match()){b=h;break}return b}})();
(function(){function a(b){for(var a=[],c=0;c<b.length;c++){var d=e(b[c][0]);a.push([new RegExp(d,"g"),"*"+b[c][1]])}return a}function c(b,a){for(var c=0;c<a.length;c++)if(a[c][1]===b)return a[c][0];return null}function b(b){this._regexDefs=m;this._defs=h;b&&b.definitions&&(this._regexDefs=a(b.definitions),this._defs=b.definitions)}function d(b,a){for(var c=[],e=0;e<b.length;e++){var d=!0;a&&(d=b.charCodeAt(e)<=a);var f=g.cookieAlphabetMap.hasOwnProperty(b.charAt(e));d&&!f?c.push("*"+b.charCodeAt(e)+
"."):c.push(b.charAt(e))}return c.join("")}function e(b){return b.replace(/([.*+?^=!:${}()|\[\]\/\\])/g,"\\$1")}function f(b){for(var a={},c="",e=0;e<b.length;e++){var d=b.charAt(e);switch(d){case "=":case "&":case "?":case "/":case "*":case ",":case ":":isNaN(a[c])&&(a[c]=b.split(c).length-1);c="";break;default:c+=d}}b=[];for(var f in a)a.hasOwnProperty(f)&&(c=a[f],c>=p&&f.length>=r&&b.push([f,c]));return b=b.sort(function(b,a){return b[0].length===a[0].length?0:a[0].length>b[0].length?1:-1})}var l=
taginspector.Define,g=taginspector.Cookie,h=[['","referrer":[{"url":"http://',"1-"],['","referrer":[{"url":"https://',"2-"],[',"referrer":[{"url":"http://',"3-"],[',"referrer":[{"url":"https://',"4-"],[',"sessionStartTime":',"5-"],['":{}}',"6-"],["www.google.com","7-"],["www.google.co.uk","8-"],["www.google.","9-"],['"landing":"',"Z"],['"landing":',"L"],['"time":',"A"],['"sessionStartTime":',"S"],['"pageViews":',"P"],['"sessionCount":',"B"],['"sessionLandingPage":',"E"],['"referrer":',"R"],['"url":"http://www.',
"J"],['"url":"https://www.',"M"],['"url":"',"I"],['"url":',"U"],["http://www.","W"],["https://www.","V"],["%2Fen%2Ftsuk%2F","K"],["http%3A%2F%2Fwww","F"],["http%3A%2F%2F","D"],["http://","H"],["https://","X"],['""',"O"],['",',"Y"]],m=a(h);l.clazz("taginspector.datapulse.compression.Encoder",b);b.prototype.encode=function(b,a){for(var c=b.replace(/\*/g,"**"),g=0;g<this._regexDefs.length;g++)var h=this._regexDefs[g],c=c.replace(h[0],h[1]);for(var c=c.replace(/;/g,"*-"),c=c.replace(/&/g,"*."),c=c.replace(/\\/g,
"*/"),c=c.replace(/=/g,"*+"),c=c.replace(/\n/g,"*N"),c=c.replace(/ /g,"*_"),c=c.replace(/\t/g,"*T"),c=c.replace(/,/g,"*C"),c=c.replace(/"/g,"*Q"),g=f(c),h=c.replace(/\$/g,"$$$"),l=[],m=0,p=0;m<g.length;m++){var r=new RegExp(e(g[m][0]),"g"),r=h.replace(r,"$"+p+"-");r!==h&&(l.push(g[m][0]),p++,h=r)}g=[h,l];h=g[1];(l=0<h.length)&&(c=g[0]);c=a?d(c,a):d(c);return l?"Y"+h.join("*")+"?"+c:"N"+c};var r=4,p=2;b.prototype.decode=function(b){var a=null;if("N"===b.charAt(0))b=b.substring(1);else if("Y"===b.charAt(0)){var e=
b.indexOf("?");if(0<=e&&(a=b.substring(1,e),a=a.split("*"),b=b.substring(e+1),a&&0!==a.length&&b)){for(var e="",d=!1,f=!1,g="",h=0;h<b.length;h++){var l=b.charAt(h);"$"===l||d||f?d||f?(d=!1,"$"===l?e+="$":isNaN(+("-"+l))?f?(e=a&&"-"===l&&a[+g]?e+a[+g]:e+("$"+g+l),g="",f=!1):e+="$"+l:(f=!0,g+=l)):d=!0:e+=l}g&&(e+="$"+g);d&&(e+="$");b=e}}a="";d=e=!1;f="";for(g=0;g<b.length;g++)h=b.charAt(g),"*"===h||e||d?e||d?(e=!1,isNaN(+("-"+h))?d?(a="."===h?a+String.fromCharCode(+f):"-"===h&&c(f+"-",this._defs)?
a+c(f+"-",this._defs):a+("*"+f+h),f="",d=!1):"*"===h?a+="*":"-"===h?a+=";":"/"===h?a+="\\":"."===h?a+="&":"+"===h?a+="=":"N"===h?a+="\n":"_"===h?a+=" ":"T"===h?a+="\t":"C"===h?a+=",":"Q"===h?a+='"':null!==c(h,this._defs)?(h=c(h,this._defs),a+=h):a+="*"+h:(f+=h,d=!0)):e=!0:a+=h;f&&(a+="*"+f);e&&(a+="*");return a}})();
(function(){function a(b){this.testBinary=!1;this.binSupported=d;b&&(this.compressor=new taginspector.compression.Compressor,this.encoder=new taginspector.datapulse.compression.Encoder({}),void 0!==b.binSupported&&(this.binSupported=!!b.binSupported))}var c=taginspector.Define,b=taginspector.Cookie;c.global();var d=!1;c.clazz("taginspector.datapulse.compression.CookieCompressor",a);a.prototype.compress=function(a,c){if("string"!==typeof a||""===a)return a;var d=this.encoder.encode(a),g;if(this.binSupported||
this.testBinary){g=this.compressor.compress(d);g='"B'+this.encoder.encode(g,128)+'"';b.set("__qtag_test_bin__",g);var h=b.get("__qtag_test_bin__");b.rm("__qtag_test_bin__");h&&h!==g&&(g=null)}h=this.encoder.encode(this.compressor.compressAnsi(d));d=!c&&d.length<=h.length?'"E'+d+'"':'"C'+h+'"';return g&&g.length<d.length?g:d};a.prototype.decompress=function(b){if("string"!==typeof b||""===b)return b;'"'===b.charAt(0)&&(b=b.substring(1,b.length-1));var a=b.charAt(0);b=b.substring(1);switch(a){case "E":return this.encoder.decode(b);
case "C":return b=this.compressor.decompressAnsi(this.encoder.decode(b)),this.encoder.decode(b);case "B":return b=this.compressor.decompress(this.encoder.decode(b)),this.encoder.decode(b);default:throw"This code is not supported! Code: "+a;}}})();
(function(){var a=taginspector.Cookie,c=taginspector.datapulse.Utils,b=function(){};c.clazz("taginspector.datapulse.Session",b);var d=new taginspector.datapulse.compression.CookieCompressor({});b.readCompressedCookie=function(b){b=a.get(b);return d.decompress(b)};b.setupSession=function(e){var f,l,g,h,m;f={};m="tm_"+e.containerId;var r="x_tm_"+e.containerId;g=a.get(m,!0);var p=!!g;null===g&&(g=a.get(r),g=d.decompress(g));if(g)try{g=JSON.parse(g)}catch(q){g={sc:0,sessionCount:0,pageViews:0,sessionStartTime:0,
referrer:[],sessionLandingPage:"",__v:{}}}else g={sc:0,sessionCount:0,pageViews:0,sessionStartTime:0,referrer:[],sessionLandingPage:"",__v:{}};l=(new Date).getTime();f.sessionCount!==parseInt(g.sc,10)?(g.sessionStartTime=l,g.sc=f.sessionCount,g.sessionCount+=1,g.referrer.push({url:b.getReferrer(),landing:c.getUrl().substring(0,300),time:l}),g.sessionLandingPage=c.getUrl().substring(0,300)):b.isReferrerDifferent()&&!b.referrerIsSameAsPrevious(g.referrer,l,18E5)&&(g.referrer.push({url:b.getReferrer(),
landing:c.getUrl().substring(0,300),time:l}),g.sessionLandingPage=c.getUrl().substring(0,300),g.sessionStartTime=l,g.sessionCount+=1);f.sessionCount=g.sessionCount;f.sessionStartTime=g.sessionStartTime;f.pageStartTime=l;g.pageViews+=1;f.pageViews=g.pageViews;f.sessionLandingPage=g.sessionLandingPage;f.referrer=g.referrer;5<f.referrer.length&&f.referrer.splice(2,f.referrer.length-5);h=JSON.stringify(g);for(l=0;d.compress(h).length>e.maxCookieLength&&5>l;)3<=g.referrer.length?g.referrer.splice(2,1):
2===g.referrer.length?g.referrer=[g.referrer[0]]:1===g.referrer.length&&(g.referrer=[]),h=JSON.stringify(g),l+=1;f.referrer=g.referrer;p&&a.rm(m);m=d.compress(h);a.rm(r);a.set(r,m,365,e.cookieDomain);f.setVariable=function(b,c,f){g.__v[b]=[c,f?f:0];b=d.compress(JSON.stringify(g));a.set(r,b,365,e.cookieDomain)};f.getCookie=function(b,c){var e=a.get(b);if(e&&(c||0===b.indexOf("x_")))try{e=d.decompress(e)}catch(f){}else e=a.decode(e);return e};f.getVariable=function(b){var a;if(b=g.__v[b])if(a=b[1],
0===a||a>(new Date).getTime())return b[0];return null};f.on=function(b,a,c){a.attachEvent?a.attachEvent("on"+b,c):a.addEventListener&&a.addEventListener(b,c,!1)};f.getTagCookie=function(){return b.readCompressedCookie(r)};return b.lastSession=f};b.referrerIsSameAsPrevious=function(a,d,l){var g,h;return 0<a.length?(g=b.getReferrer(),h=c.getUrl().substring(0,300),a=a[a.length-1],a.url===g&&a.landing===h&&a.time+l>d):!1};b.isReferrerDifferent=function(){var a,c;c=b.getReferrer();a=c.indexOf("://");if(-1===
a)return!0;try{return 0!==c.substring(a+3).indexOf(b.getDomain())?!0:!1}catch(d){return!0}};b.getReferrer=function(){return document.referrer?document.referrer.substring(0,300):"direct"};b.getDomain=function(){return document.location.host}})();
(function(){function a(a){this.config={siteID:"",pixelHost:"",tagDefinitions:[]};this.session=null;if(a)for(var b in a)a.hasOwnProperty(b)&&(this.config[b]=a[b]);this.pixelHost=this.config.pixelHost;this.siteID=this.config.siteID;this.tagDefinitions=this.config.tagDefinitions;this.startTime=Date.now();this.resourceCounter=this.offsetTime=0;this.pageId="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(b){var a=16*Math.random()|0;return("x"==b?a:a&3|8).toString(16)});this.pendingRequests=
[];this.currentlySendingData=!1;this.identifiedRequests={}}taginspector.datapulse.Utils.clazz("taginspector.datapulse.DataCollector",a);a.prototype.timeOnPage=function(){return performance.now()-this.offsetTime};a.prototype.adjustTimeForOffset=function(a){return!1==isNaN(a)?(fts=parseFloat(a).toFixed(2),fts=parseFloat(a),fts-=this.offsetTime,0>fts&&(fts=0),fts.toString()):a};a.prototype.getPageCurrentTime=function(){return Date.now()};a.prototype.getPageStartTime=function(){return this.startTime};
a.prototype.isBeaconSupported=function(){return"sendBeacon"in navigator?!0:!1};a.prototype.getMaxBodySize=function(){isSendBeaconRequest=this.isBeaconSupported();return 6E3};a.prototype.createRequestBody=function(){for(var a={requestList:[]},b=0,d=this.getMaxBodySize(),e=0;0<this.pendingRequests.length;){var f=this.pendingRequests[0];if(void 0!=f||null!=f)if(b+=encodeURIComponent(f).length,b>d&&0!=e)break;else a.requestList.push(this.pendingRequests.shift()),e+=1;else this.pendingRequests.shift()}return a};
a.prototype.createPixelRequest=function(a){reqPixel=new Image;reqPixel.src=this.pixelHost+"?"+a};a.prototype.createAjaxPostRequest=function(a){XMLHttpRequest.prototype.sendAsBinary||(XMLHttpRequest.prototype.sendAsBinary=function(b){for(var a=b.length,c=new Uint8Array(a),d=0;d<a;d++)c[d]=b.charCodeAt(d)&255;this.send(c)});var b=new XMLHttpRequest;b.open("POST",this.pixelHost,!0);var d="----"+Date.now().toString(16);b.setRequestHeader("Content-Type","multipart/form-data; boundary="+d);b.sendAsBinary("--"+
d+'\r\nContent-Disposition: form-data; name="beaconreq"\r\n\r\n'+a+"\r\n--"+d+"--\r\n")};a.prototype.createSendBeaconRequest=function(a){var b=new FormData;b.append("beaconreq",a);result=navigator.sendBeacon(this.pixelHost,b);!1==result&&this.createAjaxPostRequest(a)};a.prototype.b64EncodeUnicode=function(a){return btoa(encodeURIComponent(a).replace(/%([0-9A-F]{2})/g,function(b,a){return String.fromCharCode("0x"+a)}))};a.prototype.identifyRequest=function(a){for(var b=0;b<this.tagDefinitions.length;b++){var d=
this.tagDefinitions[b];if(!0==d.regex.test(a.name)){!1==this.identifiedRequests.hasOwnProperty(d.id)&&(this.identifiedRequests[d.id]=[]);this.identifiedRequests[d.id].push(a);break}}};a.prototype.resetIdentifiedRequests=function(){try{currentTs=performance.now();newIdentifiedRequests={};for(var a in this.identifiedRequests)if(this.identifiedRequests.hasOwnProperty(a))for(z=0;z<this.identifiedRequests[a].length;z++)foundTag=this.identifiedRequests[a][z],350>Math.abs(currentTs-foundTag.startTime)&&
(!1==newIdentifiedRequests.hasOwnProperty(a)&&(newIdentifiedRequests[a]=[]),newIdentifiedRequests[a].push(foundTag));this.identifiedRequests=newIdentifiedRequests}catch(b){console.log(b.message)}};a.prototype.sendRequests=function(a){if(!1==tiMonitor.dataCollector.currentlySendingData){tiMonitor.dataCollector.currentlySendingData=!0;for(base_req_data="pid="+this.pageId+"&sid="+this.siteID+"&purl="+encodeURIComponent(tiMonitor.sendData.currentUrl)+"&pst="+encodeURIComponent(this.getPageStartTime())+
"&pct="+encodeURIComponent(this.getPageCurrentTime());0<this.pendingRequests.length;)requestBody=this.createRequestBody(),encodedRequestString=encodeURIComponent(this.b64EncodeUnicode(JSON.stringify(requestBody))),req_data=base_req_data+"&taginfo="+encodedRequestString+"&b64=1",!0!=this.isBeaconSupported()||!0!=a&&!0!=tiMonitor.sendData.windowUnloadEvent?this.createAjaxPostRequest(req_data):this.createSendBeaconRequest(req_data);tiMonitor.dataCollector.currentlySendingData=!1}};a.prototype.isValidResourceStartTime=
function(a){var b=!0;try{if(a=parseFloat(a),this.timeOnPage()<a||36E5<a)b=!1}catch(d){console.log(d.message)}return b};a.prototype.queueRequest=function(a,b){if("validationerror"!=b&&"validationsuccess"!=b||!("complete"!=document.readyState||3E3>performance.now()-tiMonitor.dataCollector.offsetTime)||"DOM Load"==a.triggerTiming){if("resource"==b)if(!0==this.isValidResourceStartTime(this.adjustTimeForOffset(a.startTime)))reqName=a.name,req="rt="+b+"&ce="+encodeURIComponent(this.adjustTimeForOffset(a.connectEnd))+
"&cs="+encodeURIComponent(this.adjustTimeForOffset(a.connectStart))+"&dle="+encodeURIComponent(this.adjustTimeForOffset(a.domainLookupEnd))+"&dls="+encodeURIComponent(this.adjustTimeForOffset(a.domainLookupStart))+"&d="+encodeURIComponent(a.duration.toFixed(2))+"&et="+encodeURIComponent(a.entryType)+"&fs="+encodeURIComponent(this.adjustTimeForOffset(a.fetchStart))+"&it="+encodeURIComponent(a.initiatorType)+"&n="+encodeURIComponent(a.name)+"&rde="+encodeURIComponent(this.adjustTimeForOffset(a.redirectEnd))+
"&rds="+encodeURIComponent(this.adjustTimeForOffset(a.redirectStart))+"&reqs="+encodeURIComponent(this.adjustTimeForOffset(a.requestStart))+"&rse="+encodeURIComponent(this.adjustTimeForOffset(a.responseEnd))+"&rss="+encodeURIComponent(this.adjustTimeForOffset(a.responseStart))+"&scc=&st="+encodeURIComponent(this.adjustTimeForOffset(a.startTime))+"&sz="+encodeURIComponent(this.adjustTimeForOffset(a.decodedBodySize)),this.identifyRequest(a),this.resourceCounter+=1;else return;else if("pageload"==b){dom_complete=
dom_content_load=dom_interactive=page_size="";try{var d=performance.timing;0!=d.domInteractive&&(dom_interactive=d.domInteractive-d.fetchStart);0!=d.domContentLoadedEventEnd&&(dom_content_load=d.domContentLoadedEventEnd-d.fetchStart);0!=d.domComplete&&(dom_complete=d.domComplete-d.fetchStart)}catch(e){console.log(e.message)}conn_type=conn_downlink=conn_roundtrip=conn_downlinkMax=conn_effType="";req="rt="+b+"&ref=&top="+encodeURIComponent(this.timeOnPage())+"&domint="+encodeURIComponent(dom_interactive)+
"&domcl="+encodeURIComponent(dom_content_load)+"&domcom="+encodeURIComponent(dom_complete)+"&condl="+encodeURIComponent(conn_downlink)+"&conrt="+encodeURIComponent(conn_roundtrip)+"&coneff="+encodeURIComponent(conn_effType)+"&psz="+ +encodeURIComponent(page_size)}else"validationerror"==b&&!1==tiMonitor.sendData.preventFiringValidationRules?req="rt="+b+"&fr="+encodeURIComponent(a.failedRule)+"&rv="+encodeURIComponent(a.ruleVersion)+"&pm="+encodeURIComponent(a.pageMacros)+"&fc="+encodeURIComponent(a.failedConditions)+
"&vt="+encodeURIComponent(a.validationTime):"validationsuccess"==b&&!1==tiMonitor.sendData.preventFiringValidationRules?req="rt="+b+"&pr="+encodeURIComponent(a.passedRule)+"&rv="+encodeURIComponent(a.ruleVersion)+"&vt="+encodeURIComponent(a.validationTime):"jserror"==b?req="rt="+b+"&msg="+a.message:"pageBeforeUnload"==b&&(d=performance.timing,dom_interactive=d.domInteractive-d.fetchStart,dom_content_load=d.domContentLoadedEventEnd-d.fetchStart,dom_complete=d.domComplete-d.fetchStart,dom_content_load_end=
d.domContentLoadedEventEnd,response_end=d.responseEnd,navigation_start=d.navigationStart,firstContentfulPaint=first_paint=timeToFirstPaint=void 0,window.performance&&(d=window.performance.getEntriesByType("paint"),void 0!=d&&0<d.length&&(timeToFirstPaint=parseInt(1E3*d[0].startTime),first_paint=navigation_start+timeToFirstPaint,firstContentfulPaint=parseInt(1E3*d[1].startTime))),req="rt="+b+"&ref=&top="+encodeURIComponent(performance.now())+"&domint="+encodeURIComponent(dom_interactive)+"&domcl="+
encodeURIComponent(dom_content_load)+"&domcom="+encodeURIComponent(dom_complete)+"&domcle="+encodeURIComponent(dom_content_load_end)+"&rse="+encodeURIComponent(response_end)+"&navs="+encodeURIComponent(navigation_start)+"&fpt="+encodeURIComponent(first_paint)+"&tfpt="+encodeURIComponent(timeToFirstPaint)+"&fcpt="+encodeURIComponent(firstContentfulPaint));0<this.resourceCounter&&(this.pendingRequests.push(req),"validationerror"!=b&&"validationsuccess"!=b||this.sendRequests(!0))}}})();


tiMonitor.dataCollector = new taginspector.datapulse.DataCollector({siteID:"97f86ec0389d11e6bf0212f5c79d2169", pixelHost:"https://collect.analyze.ly", tagDefinitions: [{id: '1', regex: new RegExp('(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)google-analytics\\.com(\\/r)?\\/__utm\\.gif)|(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)google-analytics\\.com\\/u\\/ga\\.js)|(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)google-analytics\\.com\\/p\\/__utm\\.gif)|(\\/u\\/ga_debug\\.js)|(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)google-analytics\\.com\\/ga\\.js)|(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)google-analytics\\.com\\/)|(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)google\\.com\\/js\\/gweb\\/analytics\\/autotrack\\.js)|(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)google\\.com\\/js\\/gweb\\/analytics\\/doubletrack\\.js)|(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)google-analytics\\.com\\/ga_exp\\.js)|((^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)google-analytics\\.com\\/analytics\\.js|^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)google-analytics\\.com\\/plugins\\/ua\\/))|((^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)google-analytics\\.com(\\/[a-z])?\\/collect|^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)stats\\.g\\.doubleclick\\.net(\\/[a-z])?\\/collect))|((^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)stats\\.g\\.doubleclick\\.net\\/dc\\.js|^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)stats\\.g\\.doubleclick\\.net\\/__utm\\.gif))', 'i')},{id: '2527', regex: new RegExp('(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)aarp\\.go2cloud.org\\/)', 'i')},{id: '2526', regex: new RegExp('(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)adobedtm\\.com([\\/a-zA-Z0-9]*)?\\/launch)', 'i')},{id: '59', regex: new RegExp('((^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)offermatica\\.com\\/|^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)tt\\.omtrdc\\.net\\/))|(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)d4isvpgrs7dwu\\.cloudfront\\.net\\/adobetarget\\/)|(\\/mbox\\.js)|(\\/m[0-9]\\/(.*)\\/mbox\\/)', 'i')},{id: '85', regex: new RegExp('(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)leadback\\.advertising\\.com\\/)', 'i')},{id: '139', regex: new RegExp('(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)atdmt\\.com\\/mstag\\/site\\/(.*)\\/(mstag\\.js|analytics\\.html))', 'i')},{id: '273', regex: new RegExp('(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)js\\.stormiq\\.com\\/[0-9]*\\.ct\\.js)', 'i')},{id: '740', regex: new RegExp('(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)constantcontact\\.com\\/(.*)\\/safe_subscribe_logo\\.gif)', 'i')},{id: '882', regex: new RegExp('(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)google-analytics\\.com\\/urchin\\.js)', 'i')},{id: '1385', regex: new RegExp('((^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)s3\\.amazonaws\\.com\\/searchdiscovery-satellite-production\\/|\\/satellitelib([a-zA-Z0-9-]*)\\.js)|^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)adobedtm\\.com([\\/a-zA-Z0-9]*)?\\/satelliteLib)', 'i')},{id: '1420', regex: new RegExp('(^http(s)?:\\/\\/ct\\.pinterest\\.com\\/|^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)pinimg.com\\/ct\\/)', 'i')},{id: '1436', regex: new RegExp('((^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)snap\\.licdn\\.com\\/|^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)(dc|imp2|px).ads\\.linkedin\\.com\\/|^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)bizographics.com\\/insight\\.(min\\.)?js))', 'i')},{id: '1473', regex: new RegExp('(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)yimg\\.com\\/wi\\/ytc\\.js|^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)sp\\.analytics\\.yahoo\\.com\\/)', 'i')},{id: '2532', regex: new RegExp('(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)(demdex|omtrdc)\\.net\\/id\\?d_visid_ver)', 'i')},{id: '2547', regex: new RegExp('(gtag\\/js\\?id\\=(G)-)|((\\/g\\/collect\\?v=2|^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)(google-analytics|google)\\.com(\\/[a-z])?\\/collect\\?v=2|^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)stats\\.g\\.doubleclick\\.net(\\/[a-z])?\\/collect\\?v=2))', 'i')},{id: '294', regex: new RegExp('(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)doubleclick\\.net\\/activity)|(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)fls\\.doubleclick\\.net\\/)|(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)googletagmanager\\.com\\/.*id=dc-)|(gtag\\/js\\?id\\=(DC|dc)-)', 'i')},{id: '401', regex: new RegExp('(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)google-analytics\\.com\\/siteopt\\.js)', 'i')},{id: '747', regex: new RegExp('(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)liveagentforsalesforce\\.com\\/)|(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)salesforceliveagent\\.com\\/|^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)force\\.com\\/(.*)\\/(ChatInvite|LiveAgent))', 'i')},{id: '1406', regex: new RegExp('((^http(s)?:\\/\\/connect\\.facebook\\.net\\/(.*)\\/fbevents\\.js|^http(s)?:\\/\\/www\\.facebook\\.com\\/tr(\\/|\\?)|http(s)?:\\/\\/connect\\.facebook\\.net\\/signals\\/(config\\/|plugins\\/identity.js)|^http(s)?:\\/\\/facebook\\.com\\/(platform|common)\\/cavalry_endpoint\\.php))', 'i')},{id: '1480', regex: new RegExp('(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)googletagmanager\\.com\\/gtag\\/js)', 'i')},{id: '1393', regex: new RegExp('(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)platform\\.twitter\\.com\\/oct\\.js|^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)ads-twitter\\.com\\/uwt\\.js|^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)t\\.co\\/i\\/adsct|^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)analytics.twitter.com\\/i\\/adsct)', 'i')},{id: '1450', regex: new RegExp('((^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)google-analytics\\.com\\/gtm\\/js|^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)googletagmanager\\.com\\/a\\?|googleoptimize\\.com))', 'i')},{id: '396', regex: new RegExp('((^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)googletagmanager\\.com\\/|\\?id=(gtm|GTM)-([a-zA-Z0-9]{4,10})))', 'i')},{id: '1397', regex: new RegExp('(^http(s)?:\\/\\/(.*)fls\\.doubleclick\\.net\\/(.*)type=visua0)', 'i')},{id: '2548', regex: new RegExp('(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)(googletagservices|doubleclick)\\.(com|net)(\\/tag\\/js\\/gpt\\.js|\\/gpt\\/|\\/gampad\\/ads)|^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)tpc\\.googlesyndication\\.com\\/safeframe\\/|^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)googlesyndication\\.com\\/pagead\\/show_companion_ad\\.js)', 'i')},{id: '2549', regex: new RegExp('(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)googleapis\\.com\\/adexchangebuyer\\/|^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)adexchangebuyer\\.googleapis\\.com\\/)', 'i')},{id: '2550', regex: new RegExp('(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)cm\\.g\\.doubleclick\\.net\\/)', 'i')},{id: '291', regex: new RegExp('(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)googleads\\.g\\.doubleclick\\.net\\/pagead\\/viewthroughconversion)|(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)google\\.com\\/ads\\/user-lists\\/)', 'i')},{id: '292', regex: new RegExp('(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)gan\\.doubleclick\\.net\\/)', 'i')},{id: '1458', regex: new RegExp('(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)bid\\.g\\.doubleclick\\.net\\/|^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)googleads\\.g\\.doubleclick\\.net\\/dbm\\/ad)', 'i')},{id: '296', regex: new RegExp('(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)adx\\.g\\.doubleclick\\.net\\/)', 'i')},{id: '390', regex: new RegExp('(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)survey\\.g\\.doubleclick\\.net\\/)', 'i')},{id: '1398', regex: new RegExp('(^http(s)?:\\/\\/(ad\\.doubleclick\\.net\\/(.*)visualiqinc(.*)|((.*)\\.|)myvisualiq\\.net\\/))', 'i')},{id: '295', regex: new RegExp('(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)www\\.googletagservices\\.com\\/tag\\/)|(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)ad-ace\\.doubleclick\\.net\\/)|(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)ad\\.doubleclick\\.net\\/)|(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)ad\\.[a-z]*\\.doubleclick\\.net\\/)|(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)ad-apac\\.doubleclick\\.net\\/)|(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)ad-emea\\.doubleclick\\.net\\/)|(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)pubads\\.g\\.doubleclick\\.net\\/)|(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)m\\.doubleclick\\.net\\/)|(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)ad-g\\.doubleclick\\.net\\/)|(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)2mdn\\.net\\/)|(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)static\\.doubleclick\\.net\\/)|(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)iv\\.doubleclick\\.net\\/)|(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)cm\\.g\\.doubleclick\\.net\\/)|(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)donotmatchme\\.com\\/)|(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)g\\.doubleclick\\.net\\/)', 'i')},{id: '1312', regex: new RegExp('(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)ads\\.yahoo\\.com\\/|^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)analytics\\.yahoo\\.com\\/|^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)advertising\\.com\\/|^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)adsonar\\.com\\/|^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)tacoda\\.net\\/|^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)adtechus\\.com\\/|^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)adtech\\.de\\/|^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)atwola\\.com\\/)', 'i')},{id: '1427', regex: new RegExp('((^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)bluecore\\.com\\/|^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)triggeredmail\\.appspot\\.com\\/))', 'i')},{id: '2205', regex: new RegExp('(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)go2cloud\\.org\\/)', 'i')},{id: '323', regex: new RegExp('(^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)(betrad|evidon)\\.com\\/)', 'i')},{id: '1388', regex: new RegExp('((^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)preferences-mgr\\.(truste|trustarc)\\.com\\/|^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)preferences\\.(truste|trustarc)\\.com\\/|^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)choices-st\\.(truste|trustarc)\\.com\\/|^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)choices\\.(truste|trustarc)\\.com\\/|^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)consent\\.(truste|trustarc)\\.com\\/|^http(s)?:\\/\\/(([a-zA-Z0-9-\\.]*)\\.|)trustarc\\.com\\/))', 'i')}]});
tiMonitor.sendData = {
	pageId: 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);return v.toString(16);}),
	sentUnload: false,
	currentlyIterating: false,
	pageBeingSampled: false,
	externalTagStartTimes: [],
	internalTagStartTimes: [],
	currentUrl: window.location.href,
	minimumBeforeUnloadRestriction: 5,
	pageTitle: '',
	sampleRate: 1695,
	sampleBlackList: new RegExp('order(C|c)onfirmation|checkout(C|c)onfirmation', 'i'),
	sampleBlackListEnabled: true,
	getRandomInt: function() {
		return Math.floor(Math.random() * (this.sampleRate - 1 + 1)) + 1;
	},
	shouldSamplePage: function(){
		if(this.sampleBlackListEnabled == true){
			if(this.sampleBlackList.test(this.currentUrl) == true){
				return false;
			}
		}
		if(1 == tiMonitor.sendData.getRandomInt()){
			return false;
		}else{
			tiMonitor.sendData.pageBeingSampled = true;
			return true;
		}
	},
	createFakeReq: function(reqUrl){
		fakeHit = {
			connectEnd: 0,
			connectStart: 0,
			decodedBodySize: 0,
			domainLookupEnd: 0,
			domainLookupStart: 0,
			duration: 0,
			entryType: "resource",
			fetchStart: 0,
			initiatorType: "script",
			name: "",
			redirectEnd: 0,
			redirectStart: 0,
			requestStart: 0,
			responseEnd: 0,
			responseStart: 0,
			startTime: 0
		};
		fetchStart = performance.now()
		fakeDuration = 10.47999999905005;
		
		fakeHit.fetchStart = fetchStart;
		fakeHit.startTime = fetchStart;
		fakeHit.duration = fakeDuration;
		fakeHit.responseEnd = fetchStart + fakeDuration;
		fakeHit.name = reqUrl;
		tiMonitor.dataCollector.queueRequest(fakeHit, "resource");
		
	},
	isSinglePageApp: function(){
		if(window.angular){
			return true;
		}else{
			return false;
		}
	},
	isPerformanceObserverSupported: function(){
		if(window.PerformanceObserver){
			return true;
		}else{
			return false;
		}
	},
	isInIframe: function(){
		try {
			return window.self !== window.top;
		} catch (e) {
			return true;
		}
	},
	isPerformanceObserverInitialized: false,
	performanceObserverCallback: function(list){

		var perfEntries = list.getEntries();
		for (var i = 0; i < perfEntries.length; i++){
			var req = perfEntries[i];
			if(tiMonitor.sendData.isValidRequest(req) == true){
				tiMonitor.sendData.externalTagStartTimes.push(tiMonitor.sendData.getUniqueReqKey(req));
				tiMonitor.dataCollector.queueRequest(req, "resource");
			}else{
				tiMonitor.sendData.internalTagStartTimes.push(tiMonitor.sendData.getUniqueReqKey(req));
			}
		}

		tiMonitor.sendData.isPerformanceObserverInitialized=true;
	},
	suportedBrowser: function(){
		var isSupported = true;
		ua = navigator.userAgent;
		var isNativeAndroid = ((ua.indexOf('Mozilla/5.0') > -1 && ua.indexOf('Android ') > -1 && ua.indexOf('AppleWebKit') > -1) && (ua.indexOf('Version') > -1));
		var isIE = ((ua.indexOf('Trident') > -1) || (ua.indexOf('MSIE') > -1));
		var perfMonSupport = false;
		var isEventSupported = false;
		if(typeof Event == "function"){
			isEventSupported = true;
		}
		if ('performance' in window) { 
			if ('getEntries' in performance) {
				perfMonSupport = true;
			}
		}
		if(isNativeAndroid == true || perfMonSupport == false || isIE == true || isEventSupported == false){
			isSupported = false;
		}
		return isSupported;
	},
	blackList: new RegExp('http(s)?:\/\/(col\.eum-appdynamics\.com|((.*)\.|)mouseflow.com)'),
	lastPerformanceObjLength: 0,
	areTriggersActivated: false,
	isDuplicateRequest: function(req){
		lt = tiMonitor.sendData.getUniqueReqKey(req);
		return !(tiMonitor.sendData.externalTagStartTimes.indexOf(lt) == -1 && tiMonitor.sendData.internalTagStartTimes.indexOf(lt) == -1);
	},
	isBlacklistedRequest: function(req){
		return this.blackList.test(req.name) == true;
	},
	isExternalRequest: function(req){
		externalReq = true;
		windowOrigin = window.location.protocol + '//' + window.location.hostname;
		if(req.name.length >= windowOrigin.length){
			truncReqName = (req.name).substr(0, windowOrigin.length);
			externalReq = (truncReqName).indexOf(windowOrigin) == -1;
		}
		return externalReq;
	},
	isTIRequest: function(req){
		return !((req.name).indexOf(tiMonitor.dataCollector.pixelHost) == -1);
	},
	isValidRequest:function(req){
		validReq = false;

		if(this.isTIRequest(req) == false && this.isExternalRequest(req) == true && this.isBlacklistedRequest(req) == false){
			validReq = true;
		}
		return validReq;
	},
	getUniqueReqKey:function(req){
		return (req.startTime).toString() + "-" + (req.responseEnd).toString();
	},
	isBufferFull:function(){
		bufferFull = false;
		if(window.performance.getEntriesByType("resource").length == 150 || window.performance.getEntriesByType("resource").length == 250 || window.performance.getEntriesByType("resource").length == 400){
			bufferFull = true;
		}
		return bufferFull;
	},
	iteratePerformance: function(){
		if(this.currentlyIterating == false){
			this.currentlyIterating = true;

			var pe = performance.getEntriesByType("resource");
			if(this.lastPerformanceObjLength != pe.length){
				this.lastPerformanceObjLength = pe.length;
				for (var i = 0; i < pe.length; i++) {
					var req = pe[i];
					if(this.isDuplicateRequest(req) == false){
						if(tiMonitor.sendData.isValidRequest(req) == true){
							tiMonitor.sendData.externalTagStartTimes.push(tiMonitor.sendData.getUniqueReqKey(req));
							tiMonitor.dataCollector.queueRequest(req, "resource");
						}else{
							tiMonitor.sendData.internalTagStartTimes.push(tiMonitor.sendData.getUniqueReqKey(req));
						}
					}
				}
			}
			if(this.areTriggersActivated == false){
				this.areTriggersActivated = true;
				tiMonitor.validationRules(true);
			}
			this.currentlyIterating = false;
		}
	},
	domLoadCompleteEvent: (document.readyState == 'complete'),
	windowUnloadEvent: false,
	preventFiringValidationRules: false,
	pageVariableFiredEvents: {},
	pageComplete: function(){
		if(tiMonitor.sendData.sentUnload == false && tiMonitor.sendData.pageBeingSampled == false){
			tiMonitor.sendData.sentUnload = true;
			tiMonitor.dataCollector.queueRequest(null, "pageload");
			this.iteratePerformance();
			this.fire();
		}
	},
	waitForDomLoad: function(){
		if (document.readyState == 'complete' && tiMonitor.sendData.sentUnload == false){
			tiMonitor.sendData.pageComplete();
			return true;
		}else{
			return false;
		}
	},
	fire: function(){
		tiMonitor.dataCollector.sendRequests(false);
	},
	clearBuffer: function(){
		if(window.performance.clearResourceTimings){
			startBufferLength = window.performance.getEntriesByType("resource").length;
			tiMonitor.sendData.iteratePerformance();
			window.performance.clearResourceTimings();
			endBufferLength = window.performance.getEntriesByType("resource").length;

			if (startBufferLength == endBufferLength){
				this.preventFiringValidationRules = true;
			}
		}
	},
	handleUnload: function(){
		tiMonitor.windowUnloadEvent=true;
		tiMonitor.sendData.pageComplete();

		if(tiMonitor.sendData.isPerformanceObserverSupported() == false){
			tiMonitor.sendData.iteratePerformance();
		}
		tiMonitor.sendData.fire();
	},
	fullBufferEventListener: function(){
		if("clearResourceTimings" in window.performance){
			if("addEventListener" in window.performance){
				window.performance.addEventListener("resourcetimingbufferfull", function(){
					tiMonitor.sendData.clearBuffer();
				});
			}else{
				if("onresourcetimingbufferfull" in window.performance){
					window.performance.onresourcetimingbufferfull = function(event) {
						tiMonitor.sendData.clearBuffer();
					};
				}
			}
		}
	},
	initialized: false
};

tiMonitor.ruleVariableCache = {
	spaRulesFiring: false,
	_cachedVariableValues: {},
	censor: function(n) {var o = 0;return function(r, t) {if (0 !== o && "object" == typeof n && "object" == typeof t && n == t) {return "[Circular]"}else if (o >= 500) {return "[Unknown]"}else {return (++o, t)}}},
	updateCache: function(maxCacheTime){
		globalVars = tiMonitor.getGlobalJsVars();
		for(var p=0; p<globalVars.length; p++){
			this.getVariableValue(globalVars[p], maxCacheTime)
		}
	},
	getVariableValue: function(variableName, maxCacheTime){
		retVal = '';
		if(this._cachedVariableValues.hasOwnProperty(variableName)){
			if(this._cachedVariableValues[variableName]["cacheTime"] > performance.now() || this.spaRulesFiring == true){
				this._cachedVariableValues[variableName]["cacheTime"] = this._cachedVariableValues[variableName]["cacheTime"] + 30;
				return this._cachedVariableValues[variableName]["val"];
			}
		}
		try{
			var tmpVarVal = eval(variableName);
			if(typeof tmpVarVal === 'object'){
				try{
					if(tmpVarVal.hasOwnProperty('length')){
						tmpArray = [];
						objStart = tiMonitor.spaRuleObjectLengthTracker.getLastValidatedObjectLength(tmpVarVal, variableName);
						for(z=objStart; z < tmpVarVal.length; z++){
							try{
								tmpArray.push(JSON.stringify(tmpVarVal[z]));
							}catch(err){ }
						}
						retVal = tmpArray.toString();
					}else{
						retVal = JSON.stringify(tmpVarVal);
					}
				}catch(err) {
					retVal = JSON.stringify(tmpVarVal, this.censor(tmpVarVal));
					console.log(err.message);
				}
			}else if(typeof tmpVarVal !== 'undefined'){
				retVal = tmpVarVal;
			}
			this._cachedVariableValues[variableName] = {"val": retVal, "cacheTime": performance.now() + maxCacheTime}

		} catch(err) {
			console.log(err.message);
		}
		
		return retVal;
	}
};

tiMonitor.spaRuleObjectLengthTracker = {
	spaPageCounter: 0,
	spaRuleObjectLengths: {0:{}},
	_checkIfObject: function(obj){
		return typeof(obj) == 'object';
	},
	isTrackable: function(obj){
		if(this._checkIfObject(obj)){
			return obj.hasOwnProperty("length")
		}else{
			return false;
		}
	},
	_trackObjectLength: function(obj, objName){
		if(this.isTrackable(obj)){
			objLen = obj.length;
			this.spaRuleObjectLengths[this.spaPageCounter][objName] = objLen;
		}
	},
	getLastValidatedObjectLength: function(obj, objName){
		if(this.isTrackable(obj)){
			if(this.spaRuleObjectLengths[this.spaPageCounter].hasOwnProperty(objName) == false){
				this._trackObjectLength(obj, objName);
			}

			lastValidationLength = 0;
			if(this.spaRuleObjectLengths[this.spaPageCounter - 1].hasOwnProperty(objName)){
				lastValidationLength = this.spaRuleObjectLengths[this.spaPageCounter - 1][objName]
			}
			return lastValidationLength;
		}
	},
	incrimentSpaPageview: function(){
		this.spaPageCounter = this.spaPageCounter + 1;
		this.spaRuleObjectLengths[this.spaPageCounter] = {};
	}
};

tiMonitor.getGlobalJsVars = function (){
	try {
		var tiGlobalJsVars = ['gtmDataObject'];
		return tiGlobalJsVars;
	}
	catch(err) {
		console.log(err.message);
		jeErrorObj = {
			message: err.message
		};
		tiMonitor.dataCollector.queueRequest(jeErrorObj, "jserror");
		return [];
	}
};

tiMonitor.validationRules = function (){
	try {
		macro_function_c01dd0cd_51e8_5173_9dbe_051b24e09698 = function(){
			returnVal = 'false';
			if(tiMonitor.dataCollector.identifiedRequests.hasOwnProperty('323') == true){
				returnVal = 'true';
			}
			return returnVal;
		} 
		macro_c01dd0cd_51e8_5173_9dbe_051b24e09698 = new taginspector.datapulse.pagevariable.JsExpression({uniqueId: 'c01dd0cd_51e8_5173_9dbe_051b24e09698', reportValue: false});
		macro_c01dd0cd_51e8_5173_9dbe_051b24e09698.setValue(macro_function_c01dd0cd_51e8_5173_9dbe_051b24e09698);
		macro_function_5d73e5ea_98a3_50d1_b89a_7a8cacf5bae1 = function(){
			return 'true';
		} 
		macro_5d73e5ea_98a3_50d1_b89a_7a8cacf5bae1 = new taginspector.datapulse.pagevariable.JsExpression({uniqueId: '5d73e5ea_98a3_50d1_b89a_7a8cacf5bae1', reportValue: false});
		macro_5d73e5ea_98a3_50d1_b89a_7a8cacf5bae1.setValue(macro_function_5d73e5ea_98a3_50d1_b89a_7a8cacf5bae1);
		macro_function_eea3cfac_e3de_56ed_abe3_6912dc14a61f = function(){
			return tiMonitor.ruleVariableCache.getVariableValue('gtmDataObject', 100);
		} 
		macro_eea3cfac_e3de_56ed_abe3_6912dc14a61f = new taginspector.datapulse.pagevariable.JsExpression({uniqueId: 'eea3cfac_e3de_56ed_abe3_6912dc14a61f', reportValue: true});
		macro_eea3cfac_e3de_56ed_abe3_6912dc14a61f.setValue(macro_function_eea3cfac_e3de_56ed_abe3_6912dc14a61f);
		macro_function_475dffdb_65ed_5adf_9a13_2ef5d5739613 = function(){
			returnVal = 'false';
			if(tiMonitor.dataCollector.identifiedRequests.hasOwnProperty('1') == true){
				var re = new RegExp('ec\\.js', 'i');
				for (var i = 0; i < tiMonitor.dataCollector.identifiedRequests['1'].length; i++) {
					tagReq = tiMonitor.dataCollector.identifiedRequests['1'][i].name;
					if (re.test(tagReq) || re.test(decodeURIComponent(tagReq))) {
						returnVal = 'true';
						break;
					}
				}
			}
			return returnVal;
		} 
		macro_475dffdb_65ed_5adf_9a13_2ef5d5739613 = new taginspector.datapulse.pagevariable.JsExpression({uniqueId: '475dffdb_65ed_5adf_9a13_2ef5d5739613', reportValue: false});
		macro_475dffdb_65ed_5adf_9a13_2ef5d5739613.setValue(macro_function_475dffdb_65ed_5adf_9a13_2ef5d5739613);
		macro_function_4a5e4616_af03_5f2e_a29a_dd1e95a8994b = function(){
			returnVal = 'false';
			if(tiMonitor.dataCollector.identifiedRequests.hasOwnProperty('1') == true){
				var re = new RegExp("(?:[?&])(tid=UA-77240692-74)(&|$)", 'i');
				for (var i = 0; i < tiMonitor.dataCollector.identifiedRequests['1'].length; i++) {
					tagReq = tiMonitor.dataCollector.identifiedRequests['1'][i].name;
					if (re.test(tagReq) || re.test(decodeURIComponent(tagReq))) {
						returnVal = 'true';
						break;
					}
				}
			}
			return returnVal;
		} 
		macro_4a5e4616_af03_5f2e_a29a_dd1e95a8994b = new taginspector.datapulse.pagevariable.JsExpression({uniqueId: '4a5e4616_af03_5f2e_a29a_dd1e95a8994b', reportValue: false});
		macro_4a5e4616_af03_5f2e_a29a_dd1e95a8994b.setValue(macro_function_4a5e4616_af03_5f2e_a29a_dd1e95a8994b);
		macro_function_31dad1ae_f686_5581_8cbc_52bf9629b428 = function(){
			return tiMonitor.sendData.currentUrl;
		} 
		macro_31dad1ae_f686_5581_8cbc_52bf9629b428 = new taginspector.datapulse.pagevariable.JsExpression({uniqueId: '31dad1ae_f686_5581_8cbc_52bf9629b428', reportValue: false});
		macro_31dad1ae_f686_5581_8cbc_52bf9629b428.setValue(macro_function_31dad1ae_f686_5581_8cbc_52bf9629b428);
		macro_function_b6843c86_dc2d_555b_887d_d23659acb8e5 = function(){
			returnVal = 'false';
			if(tiMonitor.dataCollector.identifiedRequests.hasOwnProperty('396') == true){
				var re = new RegExp("(?:[?&])(id=GTM-PMLDHS)(&|$)", 'i');
				for (var i = 0; i < tiMonitor.dataCollector.identifiedRequests['396'].length; i++) {
					tagReq = tiMonitor.dataCollector.identifiedRequests['396'][i].name;
					if (re.test(tagReq) || re.test(decodeURIComponent(tagReq))) {
						returnVal = 'true';
						break;
					}
				}
			}
			return returnVal;
		} 
		macro_b6843c86_dc2d_555b_887d_d23659acb8e5 = new taginspector.datapulse.pagevariable.JsExpression({uniqueId: 'b6843c86_dc2d_555b_887d_d23659acb8e5', reportValue: false});
		macro_b6843c86_dc2d_555b_887d_d23659acb8e5.setValue(macro_function_b6843c86_dc2d_555b_887d_d23659acb8e5);
		macro_function_455e8d59_ef68_5b85_ad3f_36a942fe9e74 = function(){
			returnVal = 'false';
			if(tiMonitor.dataCollector.identifiedRequests.hasOwnProperty('1') == true){
				var re = new RegExp("(?:[?&])(t=pageview)(&|$)", 'i');
				for (var i = 0; i < tiMonitor.dataCollector.identifiedRequests['1'].length; i++) {
					tagReq = tiMonitor.dataCollector.identifiedRequests['1'][i].name;
					if (re.test(tagReq) || re.test(decodeURIComponent(tagReq))) {
						returnVal = 'true';
						break;
					}
				}
			}
			return returnVal;
		} 
		macro_455e8d59_ef68_5b85_ad3f_36a942fe9e74 = new taginspector.datapulse.pagevariable.JsExpression({uniqueId: '455e8d59_ef68_5b85_ad3f_36a942fe9e74', reportValue: false});
		macro_455e8d59_ef68_5b85_ad3f_36a942fe9e74.setValue(macro_function_455e8d59_ef68_5b85_ad3f_36a942fe9e74);
		macro_function_44647a73_05cd_57ab_b217_ac1191339e61 = function(){
			returnVal = 'false';
			if(tiMonitor.dataCollector.identifiedRequests.hasOwnProperty('1388') == true){
				returnVal = 'true';
			}
			return returnVal;
		} 
		macro_44647a73_05cd_57ab_b217_ac1191339e61 = new taginspector.datapulse.pagevariable.JsExpression({uniqueId: '44647a73_05cd_57ab_b217_ac1191339e61', reportValue: false});
		macro_44647a73_05cd_57ab_b217_ac1191339e61.setValue(macro_function_44647a73_05cd_57ab_b217_ac1191339e61);
		

condition_f98c17d1_7429_4b08_8d8f_d02ccfbd7e43 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_c01dd0cd_51e8_5173_9dbe_051b24e09698, comparisonVariable: 'true', comparisonType: 'Equals', uniqueId: 'f98c17d1_7429_4b08_8d8f_d02ccfbd7e43'});

rule_4267 = new taginspector.datapulse.BaseRule({uniqueId: '4267', triggerTiming: 'Window Before Unload',  ruleVersion: 3, dataCollector: tiMonitor.dataCollector});
rule_4267.addFilter(condition_f98c17d1_7429_4b08_8d8f_d02ccfbd7e43);

condition_9bfec8fd_8f7d_4e4f_9b32_6c9f2156142e = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_eea3cfac_e3de_56ed_abe3_6912dc14a61f, comparisonVariable: '"category":\\".*\\"', comparisonType: 'Matches Regex', uniqueId: '9bfec8fd_8f7d_4e4f_9b32_6c9f2156142e'});

rule_1289 = new taginspector.datapulse.BaseRule({uniqueId: '1289', triggerTiming: 'Window Before Unload',  ruleVersion: 1, dataCollector: tiMonitor.dataCollector});
rule_1289.addFilter(condition_9bfec8fd_8f7d_4e4f_9b32_6c9f2156142e);

condition_270553bb_e4ce_40bc_ae2c_004bd1f6ddfa = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_475dffdb_65ed_5adf_9a13_2ef5d5739613, comparisonVariable: 'true', comparisonType: 'Equals', uniqueId: '270553bb_e4ce_40bc_ae2c_004bd1f6ddfa'});

rule_1416 = new taginspector.datapulse.BaseRule({uniqueId: '1416', triggerTiming: 'Window Before Unload',  ruleVersion: 1, dataCollector: tiMonitor.dataCollector});
rule_1416.addFilter(condition_270553bb_e4ce_40bc_ae2c_004bd1f6ddfa);

condition_8E3F2F8E_C080_4C12_9DD3_A3C5B9D0E36F = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_4a5e4616_af03_5f2e_a29a_dd1e95a8994b, comparisonVariable: 'true', comparisonType: 'Equals', uniqueId: '8E3F2F8E_C080_4C12_9DD3_A3C5B9D0E36F'});

rule_575 = new taginspector.datapulse.BaseRule({uniqueId: '575', triggerTiming: 'Window Before Unload',  ruleVersion: 1, dataCollector: tiMonitor.dataCollector});
rule_575.addFilter(condition_8E3F2F8E_C080_4C12_9DD3_A3C5B9D0E36F);

condition_291b1e25_3f65_406e_8ae0_856502307ef2 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_31dad1ae_f686_5581_8cbc_52bf9629b428, comparisonVariable: 'welcomeOffer|confirm\\-info', comparisonType: 'Matches Regex', uniqueId: '291b1e25_3f65_406e_8ae0_856502307ef2'});

rule_1296 = new taginspector.datapulse.BaseRule({uniqueId: '1296', triggerTiming: 'Window Before Unload',  ruleVersion: 1, dataCollector: tiMonitor.dataCollector});
rule_1296.addFilter(condition_291b1e25_3f65_406e_8ae0_856502307ef2);

condition_48641592_dbf8_44ed_bd45_249ff33c0ff0 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_475dffdb_65ed_5adf_9a13_2ef5d5739613, comparisonVariable: 'true', comparisonType: 'Equals', uniqueId: '48641592_dbf8_44ed_bd45_249ff33c0ff0'});

rule_1415 = new taginspector.datapulse.BaseRule({uniqueId: '1415', triggerTiming: 'Window Before Unload',  ruleVersion: 1, dataCollector: tiMonitor.dataCollector});
rule_1415.addFilter(condition_48641592_dbf8_44ed_bd45_249ff33c0ff0);

condition_922b08bb_9b33_4782_af90_efe42553e754 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_475dffdb_65ed_5adf_9a13_2ef5d5739613, comparisonVariable: 'true', comparisonType: 'Equals', uniqueId: '922b08bb_9b33_4782_af90_efe42553e754'});

rule_1418 = new taginspector.datapulse.BaseRule({uniqueId: '1418', triggerTiming: 'Window Before Unload',  ruleVersion: 1, dataCollector: tiMonitor.dataCollector});
rule_1418.addFilter(condition_922b08bb_9b33_4782_af90_efe42553e754);

condition_6fe1e8ae_b3cd_4e55_aa90_27d3cfa8c6a7 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_eea3cfac_e3de_56ed_abe3_6912dc14a61f, comparisonVariable: '"event":\\"detailView\\"', comparisonType: 'Matches Regex', uniqueId: '6fe1e8ae_b3cd_4e55_aa90_27d3cfa8c6a7'});

rule_1297 = new taginspector.datapulse.BaseRule({uniqueId: '1297', triggerTiming: 'Window Before Unload',  ruleVersion: 1, dataCollector: tiMonitor.dataCollector});
rule_1297.addFilter(condition_6fe1e8ae_b3cd_4e55_aa90_27d3cfa8c6a7);

condition_f85b5e17_2dad_4915_aac2_3128924251b1 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_eea3cfac_e3de_56ed_abe3_6912dc14a61f, comparisonVariable: '"pageSubCategory":\\".*\\"', comparisonType: 'Matches Regex', uniqueId: 'f85b5e17_2dad_4915_aac2_3128924251b1'});

rule_345 = new taginspector.datapulse.BaseRule({uniqueId: '345', triggerTiming: 'Window Before Unload',  ruleVersion: 1, dataCollector: tiMonitor.dataCollector});
rule_345.addFilter(condition_f85b5e17_2dad_4915_aac2_3128924251b1);

condition_6FAF09E4_74E1_4A43_B574_7FA2B1BB78B6 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_b6843c86_dc2d_555b_887d_d23659acb8e5, comparisonVariable: 'true', comparisonType: 'Equals', uniqueId: '6FAF09E4_74E1_4A43_B574_7FA2B1BB78B6'});

rule_497 = new taginspector.datapulse.BaseRule({uniqueId: '497', triggerTiming: 'Window Before Unload',  ruleVersion: 1, dataCollector: tiMonitor.dataCollector});
rule_497.addFilter(condition_6FAF09E4_74E1_4A43_B574_7FA2B1BB78B6);

condition_a5da27b4_10e6_426f_94c6_6d439fd8bca3 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_eea3cfac_e3de_56ed_abe3_6912dc14a61f, comparisonVariable: '"pageName":\\".*\\"', comparisonType: 'Matches Regex', uniqueId: 'a5da27b4_10e6_426f_94c6_6d439fd8bca3'});

rule_346 = new taginspector.datapulse.BaseRule({uniqueId: '346', triggerTiming: 'Window Before Unload',  ruleVersion: 1, dataCollector: tiMonitor.dataCollector});
rule_346.addFilter(condition_a5da27b4_10e6_426f_94c6_6d439fd8bca3);

condition_8a464833_812d_4a8a_89fb_ffd7d5901065 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_475dffdb_65ed_5adf_9a13_2ef5d5739613, comparisonVariable: 'true', comparisonType: 'Equals', uniqueId: '8a464833_812d_4a8a_89fb_ffd7d5901065'});

rule_1417 = new taginspector.datapulse.BaseRule({uniqueId: '1417', triggerTiming: 'Window Before Unload',  ruleVersion: 1, dataCollector: tiMonitor.dataCollector});
rule_1417.addFilter(condition_8a464833_812d_4a8a_89fb_ffd7d5901065);

condition_fe0eeab9_ae85_4f52_8568_42c606f754d7 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_eea3cfac_e3de_56ed_abe3_6912dc14a61f, comparisonVariable: '"clubMemberID":\\"\\"', comparisonType: 'Does not Match Regex', uniqueId: 'fe0eeab9_ae85_4f52_8568_42c606f754d7'});

condition_2f3f5ae8_13cc_4421_b838_7a76d79fc5f8 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_eea3cfac_e3de_56ed_abe3_6912dc14a61f, comparisonVariable: '"clubMemberID":\\".*\\"', comparisonType: 'Matches Regex', uniqueId: '2f3f5ae8_13cc_4421_b838_7a76d79fc5f8'});

rule_1292 = new taginspector.datapulse.BaseRule({uniqueId: '1292', triggerTiming: 'Window Before Unload',  ruleVersion: 1, dataCollector: tiMonitor.dataCollector});
rule_1292.addFilter(condition_fe0eeab9_ae85_4f52_8568_42c606f754d7);
rule_1292.addFilter(condition_2f3f5ae8_13cc_4421_b838_7a76d79fc5f8);

condition_d3c96d97_aa91_4891_a534_fd63c0bf1b7d = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_455e8d59_ef68_5b85_ad3f_36a942fe9e74, comparisonVariable: 'true', comparisonType: 'Equals', uniqueId: 'd3c96d97_aa91_4891_a534_fd63c0bf1b7d'});

rule_1411 = new taginspector.datapulse.BaseRule({uniqueId: '1411', triggerTiming: 'Window Before Unload',  ruleVersion: 1, dataCollector: tiMonitor.dataCollector});
rule_1411.addFilter(condition_d3c96d97_aa91_4891_a534_fd63c0bf1b7d);

condition_f84dde5c_5c31_4959_ae27_5f262df3c876 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_eea3cfac_e3de_56ed_abe3_6912dc14a61f, comparisonVariable: '"event":\\"checkout\\"', comparisonType: 'Matches Regex', uniqueId: 'f84dde5c_5c31_4959_ae27_5f262df3c876'});

rule_1295 = new taginspector.datapulse.BaseRule({uniqueId: '1295', triggerTiming: 'Window Before Unload',  ruleVersion: 1, dataCollector: tiMonitor.dataCollector});
rule_1295.addFilter(condition_f84dde5c_5c31_4959_ae27_5f262df3c876);

condition_f01600a4_ed81_4043_a40c_3a8323c97ed5 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_eea3cfac_e3de_56ed_abe3_6912dc14a61f, comparisonVariable: '"ecommerce":{"purchase":{"actionField":{"id":\\"(.*)\\"', comparisonType: 'Matches Regex', uniqueId: 'f01600a4_ed81_4043_a40c_3a8323c97ed5'});

rule_1293 = new taginspector.datapulse.BaseRule({uniqueId: '1293', triggerTiming: 'Window Before Unload',  ruleVersion: 1, dataCollector: tiMonitor.dataCollector});
rule_1293.addFilter(condition_f01600a4_ed81_4043_a40c_3a8323c97ed5);

condition_f11bffd8_f249_4114_bf65_3c304bc73fca = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_eea3cfac_e3de_56ed_abe3_6912dc14a61f, comparisonVariable: '"pageType":\\".*\\"', comparisonType: 'Matches Regex', uniqueId: 'f11bffd8_f249_4114_bf65_3c304bc73fca'});

rule_343 = new taginspector.datapulse.BaseRule({uniqueId: '343', triggerTiming: 'Window Before Unload',  ruleVersion: 1, dataCollector: tiMonitor.dataCollector});
rule_343.addFilter(condition_f11bffd8_f249_4114_bf65_3c304bc73fca);

condition_11b3b2c6_862e_4b4d_bf27_dd8c703daba2 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_475dffdb_65ed_5adf_9a13_2ef5d5739613, comparisonVariable: 'true', comparisonType: 'Equals', uniqueId: '11b3b2c6_862e_4b4d_bf27_dd8c703daba2'});

rule_1414 = new taginspector.datapulse.BaseRule({uniqueId: '1414', triggerTiming: 'Window Before Unload',  ruleVersion: 1, dataCollector: tiMonitor.dataCollector});
rule_1414.addFilter(condition_11b3b2c6_862e_4b4d_bf27_dd8c703daba2);

condition_4dcae854_1606_4a7f_872c_8eb3927cd874 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_475dffdb_65ed_5adf_9a13_2ef5d5739613, comparisonVariable: 'true', comparisonType: 'Equals', uniqueId: '4dcae854_1606_4a7f_872c_8eb3927cd874'});

rule_1412 = new taginspector.datapulse.BaseRule({uniqueId: '1412', triggerTiming: 'Window Before Unload',  ruleVersion: 1, dataCollector: tiMonitor.dataCollector});
rule_1412.addFilter(condition_4dcae854_1606_4a7f_872c_8eb3927cd874);

condition_4e8af741_69c9_4b27_9519_b0e04fc79678 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_44647a73_05cd_57ab_b217_ac1191339e61, comparisonVariable: 'true', comparisonType: 'Equals', uniqueId: '4e8af741_69c9_4b27_9519_b0e04fc79678'});

rule_4268 = new taginspector.datapulse.BaseRule({uniqueId: '4268', triggerTiming: 'Window Before Unload',  ruleVersion: 1, dataCollector: tiMonitor.dataCollector});
rule_4268.addFilter(condition_4e8af741_69c9_4b27_9519_b0e04fc79678);

condition_3ea3b3f9_f3d4_41c3_b4e3_7a9cc16850fd = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_475dffdb_65ed_5adf_9a13_2ef5d5739613, comparisonVariable: 'true', comparisonType: 'Equals', uniqueId: '3ea3b3f9_f3d4_41c3_b4e3_7a9cc16850fd'});

rule_1413 = new taginspector.datapulse.BaseRule({uniqueId: '1413', triggerTiming: 'Window Before Unload',  ruleVersion: 1, dataCollector: tiMonitor.dataCollector});
rule_1413.addFilter(condition_3ea3b3f9_f3d4_41c3_b4e3_7a9cc16850fd);

condition_c5997ea7_a196_444b_9686_03f05099eccc = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_eea3cfac_e3de_56ed_abe3_6912dc14a61f, comparisonVariable: '"segmentBusiness":\\"(B2C|B2B)\\"', comparisonType: 'Matches Regex', uniqueId: 'c5997ea7_a196_444b_9686_03f05099eccc'});

rule_1291 = new taginspector.datapulse.BaseRule({uniqueId: '1291', triggerTiming: 'Window Before Unload',  ruleVersion: 1, dataCollector: tiMonitor.dataCollector});
rule_1291.addFilter(condition_c5997ea7_a196_444b_9686_03f05099eccc);

condition_232706db_1813_4d73_87f0_911b1177c19f = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_eea3cfac_e3de_56ed_abe3_6912dc14a61f, comparisonVariable: '"pageCategory":\\".*\\"', comparisonType: 'Matches Regex', uniqueId: '232706db_1813_4d73_87f0_911b1177c19f'});

rule_344 = new taginspector.datapulse.BaseRule({uniqueId: '344', triggerTiming: 'Window Before Unload',  ruleVersion: 1, dataCollector: tiMonitor.dataCollector});
rule_344.addFilter(condition_232706db_1813_4d73_87f0_911b1177c19f);

condition_6aadaeae_d5e9_4ee9_aab3_1b535ac4c45e = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_eea3cfac_e3de_56ed_abe3_6912dc14a61f, comparisonVariable: '"market":\\"ES\\"', comparisonType: 'Matches Regex', uniqueId: '6aadaeae_d5e9_4ee9_aab3_1b535ac4c45e'});

rule_1454 = new taginspector.datapulse.BaseRule({uniqueId: '1454', triggerTiming: 'Window Before Unload',  ruleVersion: 1, dataCollector: tiMonitor.dataCollector});
rule_1454.addFilter(condition_6aadaeae_d5e9_4ee9_aab3_1b535ac4c45e);

condition_73d66143_999d_4a48_b4d6_1774c3995b61 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_eea3cfac_e3de_56ed_abe3_6912dc14a61f, comparisonVariable: '"clubMemberID":\\".*\\"', comparisonType: 'Matches Regex', uniqueId: '73d66143_999d_4a48_b4d6_1774c3995b61'});

condition_26da4fb1_5380_48a8_9792_4360a5199259 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_eea3cfac_e3de_56ed_abe3_6912dc14a61f, comparisonVariable: '"clubMemberID":\\"\\"', comparisonType: 'Does not Match Regex', uniqueId: '26da4fb1_5380_48a8_9792_4360a5199259'});

rule_1439 = new taginspector.datapulse.BaseRule({uniqueId: '1439', triggerTiming: 'Window Before Unload',  ruleVersion: 1, dataCollector: tiMonitor.dataCollector});
rule_1439.addFilter(condition_73d66143_999d_4a48_b4d6_1774c3995b61);
rule_1439.addFilter(condition_26da4fb1_5380_48a8_9792_4360a5199259);

condition_010cd49e_c3bb_436f_9f5f_5140cf19a606 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_475dffdb_65ed_5adf_9a13_2ef5d5739613, comparisonVariable: 'true', comparisonType: 'Equals', uniqueId: '010cd49e_c3bb_436f_9f5f_5140cf19a606'});

rule_1419 = new taginspector.datapulse.BaseRule({uniqueId: '1419', triggerTiming: 'Window Before Unload',  ruleVersion: 1, dataCollector: tiMonitor.dataCollector});
rule_1419.addFilter(condition_010cd49e_c3bb_436f_9f5f_5140cf19a606);

condition_9410fb91_86e0_48a1_a60d_ab12f1d2a119 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_eea3cfac_e3de_56ed_abe3_6912dc14a61f, comparisonVariable: '"landscape":\\".*\\"', comparisonType: 'Matches Regex', uniqueId: '9410fb91_86e0_48a1_a60d_ab12f1d2a119'});

rule_1290 = new taginspector.datapulse.BaseRule({uniqueId: '1290', triggerTiming: 'Window Before Unload',  ruleVersion: 1, dataCollector: tiMonitor.dataCollector});
rule_1290.addFilter(condition_9410fb91_86e0_48a1_a60d_ab12f1d2a119);

condition_25c95262_1ed6_4f6d_9337_a575613c112f = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_eea3cfac_e3de_56ed_abe3_6912dc14a61f, comparisonVariable: '"event":\\"transaction\\"', comparisonType: 'Matches Regex', uniqueId: '25c95262_1ed6_4f6d_9337_a575613c112f'});

rule_1294 = new taginspector.datapulse.BaseRule({uniqueId: '1294', triggerTiming: 'Window Before Unload',  ruleVersion: 1, dataCollector: tiMonitor.dataCollector});
rule_1294.addFilter(condition_25c95262_1ed6_4f6d_9337_a575613c112f);


condition_e25a78ee_ccf5_40ff_8a96_2747fc57d325 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_5d73e5ea_98a3_50d1_b89a_7a8cacf5bae1, comparisonVariable: 'true', comparisonType: 'Equals', uniqueId: 'e25a78ee_ccf5_40ff_8a96_2747fc57d325'});
trigger_function_trigger_aeae7ce0_c3a8_11eb_bb5c_1201f4358c27 = function (cb) {
				if(triggerFired == false){
					triggerFired = true;
					try {
						if(condition_e25a78ee_ccf5_40ff_8a96_2747fc57d325.match() == true){
							cb(true);
						}
					} catch (err) {
						console.log(err.message);
						jeErrorObj = {
							message: err.message
						};
						tiMonitor.dataCollector.queueRequest(jeErrorObj, "jserror");
					}
				}
		}
trigger_aeae7ce0_c3a8_11eb_bb5c_1201f4358c27 = new taginspector.datapulse.trigger.BaseTrigger({triggerScript: trigger_function_trigger_aeae7ce0_c3a8_11eb_bb5c_1201f4358c27, uniqueId: 'aeae7ce0_c3a8_11eb_bb5c_1201f4358c27', triggerFired: false });
trigger_aeae7ce0_c3a8_11eb_bb5c_1201f4358c27.addRule(rule_4267);
rule_4267.addTrigger(trigger_aeae7ce0_c3a8_11eb_bb5c_1201f4358c27);

condition_c31c6402_f080_436a_b80c_8005d1caddc5 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_eea3cfac_e3de_56ed_abe3_6912dc14a61f, comparisonVariable: '"event":\\"transaction\\"', comparisonType: 'Matches Regex', uniqueId: 'c31c6402_f080_436a_b80c_8005d1caddc5'});
trigger_function_trigger_aeae8e2e_c3a8_11eb_bb5c_1201f4358c27 = function (cb) {
				if(triggerFired == false){
					triggerFired = true;
					try {
						if(condition_c31c6402_f080_436a_b80c_8005d1caddc5.match() == true){
							cb(true);
						}
					} catch (err) {
						console.log(err.message);
						jeErrorObj = {
							message: err.message
						};
						tiMonitor.dataCollector.queueRequest(jeErrorObj, "jserror");
					}
				}
		}
trigger_aeae8e2e_c3a8_11eb_bb5c_1201f4358c27 = new taginspector.datapulse.trigger.BaseTrigger({triggerScript: trigger_function_trigger_aeae8e2e_c3a8_11eb_bb5c_1201f4358c27, uniqueId: 'aeae8e2e_c3a8_11eb_bb5c_1201f4358c27', triggerFired: false });
trigger_aeae8e2e_c3a8_11eb_bb5c_1201f4358c27.addRule(rule_1289);
rule_1289.addTrigger(trigger_aeae8e2e_c3a8_11eb_bb5c_1201f4358c27);

condition_5f1e7fcd_918b_4a04_b37e_2815a88bcbe8 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_eea3cfac_e3de_56ed_abe3_6912dc14a61f, comparisonVariable: '"event":\\"detailView\\"', comparisonType: 'Matches Regex', uniqueId: '5f1e7fcd_918b_4a04_b37e_2815a88bcbe8'});
trigger_function_trigger_aeaea134_c3a8_11eb_bb5c_1201f4358c27 = function (cb) {
				if(triggerFired == false){
					triggerFired = true;
					try {
						if(condition_5f1e7fcd_918b_4a04_b37e_2815a88bcbe8.match() == true){
							cb(true);
						}
					} catch (err) {
						console.log(err.message);
						jeErrorObj = {
							message: err.message
						};
						tiMonitor.dataCollector.queueRequest(jeErrorObj, "jserror");
					}
				}
		}
trigger_aeaea134_c3a8_11eb_bb5c_1201f4358c27 = new taginspector.datapulse.trigger.BaseTrigger({triggerScript: trigger_function_trigger_aeaea134_c3a8_11eb_bb5c_1201f4358c27, uniqueId: 'aeaea134_c3a8_11eb_bb5c_1201f4358c27', triggerFired: false });
trigger_aeaea134_c3a8_11eb_bb5c_1201f4358c27.addRule(rule_1416);
rule_1416.addTrigger(trigger_aeaea134_c3a8_11eb_bb5c_1201f4358c27);

condition_5225C047_CF95_44B8_AEF6_FEA8DAAB5BAD = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_5d73e5ea_98a3_50d1_b89a_7a8cacf5bae1, comparisonVariable: 'true', comparisonType: 'Equals', uniqueId: '5225C047_CF95_44B8_AEF6_FEA8DAAB5BAD'});
trigger_function_trigger_aeaeb2b4_c3a8_11eb_bb5c_1201f4358c27 = function (cb) {
				if(triggerFired == false){
					triggerFired = true;
					try {
						if(condition_5225C047_CF95_44B8_AEF6_FEA8DAAB5BAD.match() == true){
							cb(true);
						}
					} catch (err) {
						console.log(err.message);
						jeErrorObj = {
							message: err.message
						};
						tiMonitor.dataCollector.queueRequest(jeErrorObj, "jserror");
					}
				}
		}
trigger_aeaeb2b4_c3a8_11eb_bb5c_1201f4358c27 = new taginspector.datapulse.trigger.BaseTrigger({triggerScript: trigger_function_trigger_aeaeb2b4_c3a8_11eb_bb5c_1201f4358c27, uniqueId: 'aeaeb2b4_c3a8_11eb_bb5c_1201f4358c27', triggerFired: false });
trigger_aeaeb2b4_c3a8_11eb_bb5c_1201f4358c27.addRule(rule_575);
rule_575.addTrigger(trigger_aeaeb2b4_c3a8_11eb_bb5c_1201f4358c27);

condition_1d4a4fc4_1f8e_44de_806b_dac01342def3 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_eea3cfac_e3de_56ed_abe3_6912dc14a61f, comparisonVariable: '"eventAction":\\"New(%20| )User(%20| )Account(%20| )Creation\\"', comparisonType: 'Matches Regex', uniqueId: '1d4a4fc4_1f8e_44de_806b_dac01342def3'});
trigger_function_trigger_aeaec2ae_c3a8_11eb_bb5c_1201f4358c27 = function (cb) {
				if(triggerFired == false){
					triggerFired = true;
					try {
						if(condition_1d4a4fc4_1f8e_44de_806b_dac01342def3.match() == true){
							cb(true);
						}
					} catch (err) {
						console.log(err.message);
						jeErrorObj = {
							message: err.message
						};
						tiMonitor.dataCollector.queueRequest(jeErrorObj, "jserror");
					}
				}
		}
trigger_aeaec2ae_c3a8_11eb_bb5c_1201f4358c27 = new taginspector.datapulse.trigger.BaseTrigger({triggerScript: trigger_function_trigger_aeaec2ae_c3a8_11eb_bb5c_1201f4358c27, uniqueId: 'aeaec2ae_c3a8_11eb_bb5c_1201f4358c27', triggerFired: false });
trigger_aeaec2ae_c3a8_11eb_bb5c_1201f4358c27.addRule(rule_1296);
rule_1296.addTrigger(trigger_aeaec2ae_c3a8_11eb_bb5c_1201f4358c27);

condition_9590d772_0d04_48db_b20e_6fb2c49da7b0 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_eea3cfac_e3de_56ed_abe3_6912dc14a61f, comparisonVariable: '"event":\\"removeFromCart\\"', comparisonType: 'Matches Regex', uniqueId: '9590d772_0d04_48db_b20e_6fb2c49da7b0'});
trigger_function_trigger_aeaed4ba_c3a8_11eb_bb5c_1201f4358c27 = function (cb) {
				if(triggerFired == false){
					triggerFired = true;
					try {
						if(condition_9590d772_0d04_48db_b20e_6fb2c49da7b0.match() == true){
							cb(true);
						}
					} catch (err) {
						console.log(err.message);
						jeErrorObj = {
							message: err.message
						};
						tiMonitor.dataCollector.queueRequest(jeErrorObj, "jserror");
					}
				}
		}
trigger_aeaed4ba_c3a8_11eb_bb5c_1201f4358c27 = new taginspector.datapulse.trigger.BaseTrigger({triggerScript: trigger_function_trigger_aeaed4ba_c3a8_11eb_bb5c_1201f4358c27, uniqueId: 'aeaed4ba_c3a8_11eb_bb5c_1201f4358c27', triggerFired: false });
trigger_aeaed4ba_c3a8_11eb_bb5c_1201f4358c27.addRule(rule_1415);
rule_1415.addTrigger(trigger_aeaed4ba_c3a8_11eb_bb5c_1201f4358c27);

condition_4f57600b_fe11_454e_b472_4ff5d543491e = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_eea3cfac_e3de_56ed_abe3_6912dc14a61f, comparisonVariable: '"event":\\"promoClick\\"', comparisonType: 'Matches Regex', uniqueId: '4f57600b_fe11_454e_b472_4ff5d543491e'});
trigger_function_trigger_aeaee7a2_c3a8_11eb_bb5c_1201f4358c27 = function (cb) {
				if(triggerFired == false){
					triggerFired = true;
					try {
						if(condition_4f57600b_fe11_454e_b472_4ff5d543491e.match() == true){
							cb(true);
						}
					} catch (err) {
						console.log(err.message);
						jeErrorObj = {
							message: err.message
						};
						tiMonitor.dataCollector.queueRequest(jeErrorObj, "jserror");
					}
				}
		}
trigger_aeaee7a2_c3a8_11eb_bb5c_1201f4358c27 = new taginspector.datapulse.trigger.BaseTrigger({triggerScript: trigger_function_trigger_aeaee7a2_c3a8_11eb_bb5c_1201f4358c27, uniqueId: 'aeaee7a2_c3a8_11eb_bb5c_1201f4358c27', triggerFired: false });
trigger_aeaee7a2_c3a8_11eb_bb5c_1201f4358c27.addRule(rule_1418);
rule_1418.addTrigger(trigger_aeaee7a2_c3a8_11eb_bb5c_1201f4358c27);

condition_a8562ffb_41d1_4eb9_84da_42e9bd795135 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_eea3cfac_e3de_56ed_abe3_6912dc14a61f, comparisonVariable: '"breadcrumbUID":\\"(.*)pdp-(.*)\\"', comparisonType: 'Matches Regex', uniqueId: 'a8562ffb_41d1_4eb9_84da_42e9bd795135'});
trigger_function_trigger_aeaef896_c3a8_11eb_bb5c_1201f4358c27 = function (cb) {
				if(triggerFired == false){
					triggerFired = true;
					try {
						if(condition_a8562ffb_41d1_4eb9_84da_42e9bd795135.match() == true){
							cb(true);
						}
					} catch (err) {
						console.log(err.message);
						jeErrorObj = {
							message: err.message
						};
						tiMonitor.dataCollector.queueRequest(jeErrorObj, "jserror");
					}
				}
		}
trigger_aeaef896_c3a8_11eb_bb5c_1201f4358c27 = new taginspector.datapulse.trigger.BaseTrigger({triggerScript: trigger_function_trigger_aeaef896_c3a8_11eb_bb5c_1201f4358c27, uniqueId: 'aeaef896_c3a8_11eb_bb5c_1201f4358c27', triggerFired: false });
trigger_aeaef896_c3a8_11eb_bb5c_1201f4358c27.addRule(rule_1297);
rule_1297.addTrigger(trigger_aeaef896_c3a8_11eb_bb5c_1201f4358c27);

condition_58a897d5_364c_4899_b855_57e968d55ac3 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_5d73e5ea_98a3_50d1_b89a_7a8cacf5bae1, comparisonVariable: 'true', comparisonType: 'Equals', uniqueId: '58a897d5_364c_4899_b855_57e968d55ac3'});
trigger_function_trigger_aeaf089a_c3a8_11eb_bb5c_1201f4358c27 = function (cb) {
				if(triggerFired == false){
					triggerFired = true;
					try {
						if(condition_58a897d5_364c_4899_b855_57e968d55ac3.match() == true){
							cb(true);
						}
					} catch (err) {
						console.log(err.message);
						jeErrorObj = {
							message: err.message
						};
						tiMonitor.dataCollector.queueRequest(jeErrorObj, "jserror");
					}
				}
		}
trigger_aeaf089a_c3a8_11eb_bb5c_1201f4358c27 = new taginspector.datapulse.trigger.BaseTrigger({triggerScript: trigger_function_trigger_aeaf089a_c3a8_11eb_bb5c_1201f4358c27, uniqueId: 'aeaf089a_c3a8_11eb_bb5c_1201f4358c27', triggerFired: false });
trigger_aeaf089a_c3a8_11eb_bb5c_1201f4358c27.addRule(rule_345);
rule_345.addTrigger(trigger_aeaf089a_c3a8_11eb_bb5c_1201f4358c27);

condition_36F42A41_0A3F_445F_9A60_4642E0B5EBFC = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_5d73e5ea_98a3_50d1_b89a_7a8cacf5bae1, comparisonVariable: 'true', comparisonType: 'Equals', uniqueId: '36F42A41_0A3F_445F_9A60_4642E0B5EBFC'});
trigger_function_trigger_aeaf1920_c3a8_11eb_bb5c_1201f4358c27 = function (cb) {
				if(triggerFired == false){
					triggerFired = true;
					try {
						if(condition_36F42A41_0A3F_445F_9A60_4642E0B5EBFC.match() == true){
							cb(true);
						}
					} catch (err) {
						console.log(err.message);
						jeErrorObj = {
							message: err.message
						};
						tiMonitor.dataCollector.queueRequest(jeErrorObj, "jserror");
					}
				}
		}
trigger_aeaf1920_c3a8_11eb_bb5c_1201f4358c27 = new taginspector.datapulse.trigger.BaseTrigger({triggerScript: trigger_function_trigger_aeaf1920_c3a8_11eb_bb5c_1201f4358c27, uniqueId: 'aeaf1920_c3a8_11eb_bb5c_1201f4358c27', triggerFired: false });
trigger_aeaf1920_c3a8_11eb_bb5c_1201f4358c27.addRule(rule_497);
rule_497.addTrigger(trigger_aeaf1920_c3a8_11eb_bb5c_1201f4358c27);

condition_63b84731_2ed0_40a5_b9e6_2a4e4d163608 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_5d73e5ea_98a3_50d1_b89a_7a8cacf5bae1, comparisonVariable: 'true', comparisonType: 'Equals', uniqueId: '63b84731_2ed0_40a5_b9e6_2a4e4d163608'});
trigger_function_trigger_aeaf28d4_c3a8_11eb_bb5c_1201f4358c27 = function (cb) {
				if(triggerFired == false){
					triggerFired = true;
					try {
						if(condition_63b84731_2ed0_40a5_b9e6_2a4e4d163608.match() == true){
							cb(true);
						}
					} catch (err) {
						console.log(err.message);
						jeErrorObj = {
							message: err.message
						};
						tiMonitor.dataCollector.queueRequest(jeErrorObj, "jserror");
					}
				}
		}
trigger_aeaf28d4_c3a8_11eb_bb5c_1201f4358c27 = new taginspector.datapulse.trigger.BaseTrigger({triggerScript: trigger_function_trigger_aeaf28d4_c3a8_11eb_bb5c_1201f4358c27, uniqueId: 'aeaf28d4_c3a8_11eb_bb5c_1201f4358c27', triggerFired: false });
trigger_aeaf28d4_c3a8_11eb_bb5c_1201f4358c27.addRule(rule_346);
rule_346.addTrigger(trigger_aeaf28d4_c3a8_11eb_bb5c_1201f4358c27);

condition_0cdd270d_2a18_4ba8_b75b_4fe486e26691 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_eea3cfac_e3de_56ed_abe3_6912dc14a61f, comparisonVariable: '"event":\\"productClick\\"', comparisonType: 'Matches Regex', uniqueId: '0cdd270d_2a18_4ba8_b75b_4fe486e26691'});
trigger_function_trigger_aeaf4076_c3a8_11eb_bb5c_1201f4358c27 = function (cb) {
				if(triggerFired == false){
					triggerFired = true;
					try {
						if(condition_0cdd270d_2a18_4ba8_b75b_4fe486e26691.match() == true){
							cb(true);
						}
					} catch (err) {
						console.log(err.message);
						jeErrorObj = {
							message: err.message
						};
						tiMonitor.dataCollector.queueRequest(jeErrorObj, "jserror");
					}
				}
		}
trigger_aeaf4076_c3a8_11eb_bb5c_1201f4358c27 = new taginspector.datapulse.trigger.BaseTrigger({triggerScript: trigger_function_trigger_aeaf4076_c3a8_11eb_bb5c_1201f4358c27, uniqueId: 'aeaf4076_c3a8_11eb_bb5c_1201f4358c27', triggerFired: false });
trigger_aeaf4076_c3a8_11eb_bb5c_1201f4358c27.addRule(rule_1417);
rule_1417.addTrigger(trigger_aeaf4076_c3a8_11eb_bb5c_1201f4358c27);

condition_863099ae_b352_4651_9725_35998b1e4efb = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_eea3cfac_e3de_56ed_abe3_6912dc14a61f, comparisonVariable: '"event":\\"userLogin\\"|\\"eventAction":\\"new(%20| )user(%20| )account(%20| )creation\\"', comparisonType: 'Matches Regex', uniqueId: '863099ae_b352_4651_9725_35998b1e4efb'});
trigger_function_trigger_aeaf562e_c3a8_11eb_bb5c_1201f4358c27 = function (cb) {
				if(triggerFired == false){
					triggerFired = true;
					try {
						if(condition_863099ae_b352_4651_9725_35998b1e4efb.match() == true){
							cb(true);
						}
					} catch (err) {
						console.log(err.message);
						jeErrorObj = {
							message: err.message
						};
						tiMonitor.dataCollector.queueRequest(jeErrorObj, "jserror");
					}
				}
		}
trigger_aeaf562e_c3a8_11eb_bb5c_1201f4358c27 = new taginspector.datapulse.trigger.BaseTrigger({triggerScript: trigger_function_trigger_aeaf562e_c3a8_11eb_bb5c_1201f4358c27, uniqueId: 'aeaf562e_c3a8_11eb_bb5c_1201f4358c27', triggerFired: false });
trigger_aeaf562e_c3a8_11eb_bb5c_1201f4358c27.addRule(rule_1292);
rule_1292.addTrigger(trigger_aeaf562e_c3a8_11eb_bb5c_1201f4358c27);

condition_59bc30be_8d59_4069_a31f_ad6aac851022 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_5d73e5ea_98a3_50d1_b89a_7a8cacf5bae1, comparisonVariable: 'true', comparisonType: 'Equals', uniqueId: '59bc30be_8d59_4069_a31f_ad6aac851022'});
trigger_function_trigger_aeaf6682_c3a8_11eb_bb5c_1201f4358c27 = function (cb) {
				if(triggerFired == false){
					triggerFired = true;
					try {
						if(condition_59bc30be_8d59_4069_a31f_ad6aac851022.match() == true){
							cb(true);
						}
					} catch (err) {
						console.log(err.message);
						jeErrorObj = {
							message: err.message
						};
						tiMonitor.dataCollector.queueRequest(jeErrorObj, "jserror");
					}
				}
		}
trigger_aeaf6682_c3a8_11eb_bb5c_1201f4358c27 = new taginspector.datapulse.trigger.BaseTrigger({triggerScript: trigger_function_trigger_aeaf6682_c3a8_11eb_bb5c_1201f4358c27, uniqueId: 'aeaf6682_c3a8_11eb_bb5c_1201f4358c27', triggerFired: false });
trigger_aeaf6682_c3a8_11eb_bb5c_1201f4358c27.addRule(rule_1411);
rule_1411.addTrigger(trigger_aeaf6682_c3a8_11eb_bb5c_1201f4358c27);

condition_8f914f90_91f6_4f46_ae6b_c0ab6ecfe0f9 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_31dad1ae_f686_5581_8cbc_52bf9629b428, comparisonVariable: 'shoppingBag$|fastregistration(.*)s|checkout(.*)s|\\/mobile(.*)\\/checkout\\/multi\\/(.*)', comparisonType: 'Matches Regex', uniqueId: '8f914f90_91f6_4f46_ae6b_c0ab6ecfe0f9'});
trigger_function_trigger_aeaf7956_c3a8_11eb_bb5c_1201f4358c27 = function (cb) {
				if(triggerFired == false){
					triggerFired = true;
					try {
						if(condition_8f914f90_91f6_4f46_ae6b_c0ab6ecfe0f9.match() == true){
							cb(true);
						}
					} catch (err) {
						console.log(err.message);
						jeErrorObj = {
							message: err.message
						};
						tiMonitor.dataCollector.queueRequest(jeErrorObj, "jserror");
					}
				}
		}
trigger_aeaf7956_c3a8_11eb_bb5c_1201f4358c27 = new taginspector.datapulse.trigger.BaseTrigger({triggerScript: trigger_function_trigger_aeaf7956_c3a8_11eb_bb5c_1201f4358c27, uniqueId: 'aeaf7956_c3a8_11eb_bb5c_1201f4358c27', triggerFired: false });
trigger_aeaf7956_c3a8_11eb_bb5c_1201f4358c27.addRule(rule_1295);
rule_1295.addTrigger(trigger_aeaf7956_c3a8_11eb_bb5c_1201f4358c27);

condition_b2c4711e_a7f6_4d31_b6c7_7d2c39d2c8f5 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_31dad1ae_f686_5581_8cbc_52bf9629b428, comparisonVariable: 'redirect|confirmation', comparisonType: 'Does not Match Regex', uniqueId: 'b2c4711e_a7f6_4d31_b6c7_7d2c39d2c8f5'});
trigger_function_trigger_aeaf8266_c3a8_11eb_bb5c_1201f4358c27 = function (cb) {
				if(triggerFired == false){
					triggerFired = true;
					try {
						if(condition_b2c4711e_a7f6_4d31_b6c7_7d2c39d2c8f5.match() == true){
							cb(true);
						}
					} catch (err) {
						console.log(err.message);
						jeErrorObj = {
							message: err.message
						};
						tiMonitor.dataCollector.queueRequest(jeErrorObj, "jserror");
					}
				}
		}
trigger_aeaf8266_c3a8_11eb_bb5c_1201f4358c27 = new taginspector.datapulse.trigger.BaseTrigger({triggerScript: trigger_function_trigger_aeaf8266_c3a8_11eb_bb5c_1201f4358c27, uniqueId: 'aeaf8266_c3a8_11eb_bb5c_1201f4358c27', triggerFired: false });
trigger_aeaf8266_c3a8_11eb_bb5c_1201f4358c27.addRule(rule_1295);
rule_1295.addTrigger(trigger_aeaf8266_c3a8_11eb_bb5c_1201f4358c27);

condition_39c3cf2b_d8db_4d97_9f51_2bcc59891428 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_eea3cfac_e3de_56ed_abe3_6912dc14a61f, comparisonVariable: '"event":\\"transaction\\"', comparisonType: 'Matches Regex', uniqueId: '39c3cf2b_d8db_4d97_9f51_2bcc59891428'});
trigger_function_trigger_aeaf94c2_c3a8_11eb_bb5c_1201f4358c27 = function (cb) {
				if(triggerFired == false){
					triggerFired = true;
					try {
						if(condition_39c3cf2b_d8db_4d97_9f51_2bcc59891428.match() == true){
							cb(true);
						}
					} catch (err) {
						console.log(err.message);
						jeErrorObj = {
							message: err.message
						};
						tiMonitor.dataCollector.queueRequest(jeErrorObj, "jserror");
					}
				}
		}
trigger_aeaf94c2_c3a8_11eb_bb5c_1201f4358c27 = new taginspector.datapulse.trigger.BaseTrigger({triggerScript: trigger_function_trigger_aeaf94c2_c3a8_11eb_bb5c_1201f4358c27, uniqueId: 'aeaf94c2_c3a8_11eb_bb5c_1201f4358c27', triggerFired: false });
trigger_aeaf94c2_c3a8_11eb_bb5c_1201f4358c27.addRule(rule_1293);
rule_1293.addTrigger(trigger_aeaf94c2_c3a8_11eb_bb5c_1201f4358c27);

condition_9b4cdb48_3e19_4ed4_884a_7257d4fb376e = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_5d73e5ea_98a3_50d1_b89a_7a8cacf5bae1, comparisonVariable: 'true', comparisonType: 'Equals', uniqueId: '9b4cdb48_3e19_4ed4_884a_7257d4fb376e'});
trigger_function_trigger_aeafa52a_c3a8_11eb_bb5c_1201f4358c27 = function (cb) {
				if(triggerFired == false){
					triggerFired = true;
					try {
						if(condition_9b4cdb48_3e19_4ed4_884a_7257d4fb376e.match() == true){
							cb(true);
						}
					} catch (err) {
						console.log(err.message);
						jeErrorObj = {
							message: err.message
						};
						tiMonitor.dataCollector.queueRequest(jeErrorObj, "jserror");
					}
				}
		}
trigger_aeafa52a_c3a8_11eb_bb5c_1201f4358c27 = new taginspector.datapulse.trigger.BaseTrigger({triggerScript: trigger_function_trigger_aeafa52a_c3a8_11eb_bb5c_1201f4358c27, uniqueId: 'aeafa52a_c3a8_11eb_bb5c_1201f4358c27', triggerFired: false });
trigger_aeafa52a_c3a8_11eb_bb5c_1201f4358c27.addRule(rule_343);
rule_343.addTrigger(trigger_aeafa52a_c3a8_11eb_bb5c_1201f4358c27);

condition_720237a1_8c8e_4178_a784_43e98791a946 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_eea3cfac_e3de_56ed_abe3_6912dc14a61f, comparisonVariable: '"event":\\"addToCart\\"', comparisonType: 'Matches Regex', uniqueId: '720237a1_8c8e_4178_a784_43e98791a946'});
trigger_function_trigger_aeafb54c_c3a8_11eb_bb5c_1201f4358c27 = function (cb) {
				if(triggerFired == false){
					triggerFired = true;
					try {
						if(condition_720237a1_8c8e_4178_a784_43e98791a946.match() == true){
							cb(true);
						}
					} catch (err) {
						console.log(err.message);
						jeErrorObj = {
							message: err.message
						};
						tiMonitor.dataCollector.queueRequest(jeErrorObj, "jserror");
					}
				}
		}
trigger_aeafb54c_c3a8_11eb_bb5c_1201f4358c27 = new taginspector.datapulse.trigger.BaseTrigger({triggerScript: trigger_function_trigger_aeafb54c_c3a8_11eb_bb5c_1201f4358c27, uniqueId: 'aeafb54c_c3a8_11eb_bb5c_1201f4358c27', triggerFired: false });
trigger_aeafb54c_c3a8_11eb_bb5c_1201f4358c27.addRule(rule_1414);
rule_1414.addTrigger(trigger_aeafb54c_c3a8_11eb_bb5c_1201f4358c27);

condition_ffff90de_2159_4bd5_b5c4_d007fcab7b14 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_eea3cfac_e3de_56ed_abe3_6912dc14a61f, comparisonVariable: '"event":\\"transaction\\"', comparisonType: 'Matches Regex', uniqueId: 'ffff90de_2159_4bd5_b5c4_d007fcab7b14'});
trigger_function_trigger_aeafc5be_c3a8_11eb_bb5c_1201f4358c27 = function (cb) {
				if(triggerFired == false){
					triggerFired = true;
					try {
						if(condition_ffff90de_2159_4bd5_b5c4_d007fcab7b14.match() == true){
							cb(true);
						}
					} catch (err) {
						console.log(err.message);
						jeErrorObj = {
							message: err.message
						};
						tiMonitor.dataCollector.queueRequest(jeErrorObj, "jserror");
					}
				}
		}
trigger_aeafc5be_c3a8_11eb_bb5c_1201f4358c27 = new taginspector.datapulse.trigger.BaseTrigger({triggerScript: trigger_function_trigger_aeafc5be_c3a8_11eb_bb5c_1201f4358c27, uniqueId: 'aeafc5be_c3a8_11eb_bb5c_1201f4358c27', triggerFired: false });
trigger_aeafc5be_c3a8_11eb_bb5c_1201f4358c27.addRule(rule_1412);
rule_1412.addTrigger(trigger_aeafc5be_c3a8_11eb_bb5c_1201f4358c27);

condition_ad0faae9_d1f2_47cc_8cb1_8afa1fde4ae3 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_5d73e5ea_98a3_50d1_b89a_7a8cacf5bae1, comparisonVariable: 'true', comparisonType: 'Equals', uniqueId: 'ad0faae9_d1f2_47cc_8cb1_8afa1fde4ae3'});
trigger_function_trigger_aeafd5ae_c3a8_11eb_bb5c_1201f4358c27 = function (cb) {
				if(triggerFired == false){
					triggerFired = true;
					try {
						if(condition_ad0faae9_d1f2_47cc_8cb1_8afa1fde4ae3.match() == true){
							cb(true);
						}
					} catch (err) {
						console.log(err.message);
						jeErrorObj = {
							message: err.message
						};
						tiMonitor.dataCollector.queueRequest(jeErrorObj, "jserror");
					}
				}
		}
trigger_aeafd5ae_c3a8_11eb_bb5c_1201f4358c27 = new taginspector.datapulse.trigger.BaseTrigger({triggerScript: trigger_function_trigger_aeafd5ae_c3a8_11eb_bb5c_1201f4358c27, uniqueId: 'aeafd5ae_c3a8_11eb_bb5c_1201f4358c27', triggerFired: false });
trigger_aeafd5ae_c3a8_11eb_bb5c_1201f4358c27.addRule(rule_4268);
rule_4268.addTrigger(trigger_aeafd5ae_c3a8_11eb_bb5c_1201f4358c27);

condition_36847879_76ca_4a17_9599_fd37f51ef9a8 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_eea3cfac_e3de_56ed_abe3_6912dc14a61f, comparisonVariable: '"event":\\"checkout\\"', comparisonType: 'Matches Regex', uniqueId: '36847879_76ca_4a17_9599_fd37f51ef9a8'});
trigger_function_trigger_aeafe6b6_c3a8_11eb_bb5c_1201f4358c27 = function (cb) {
				if(triggerFired == false){
					triggerFired = true;
					try {
						if(condition_36847879_76ca_4a17_9599_fd37f51ef9a8.match() == true){
							cb(true);
						}
					} catch (err) {
						console.log(err.message);
						jeErrorObj = {
							message: err.message
						};
						tiMonitor.dataCollector.queueRequest(jeErrorObj, "jserror");
					}
				}
		}
trigger_aeafe6b6_c3a8_11eb_bb5c_1201f4358c27 = new taginspector.datapulse.trigger.BaseTrigger({triggerScript: trigger_function_trigger_aeafe6b6_c3a8_11eb_bb5c_1201f4358c27, uniqueId: 'aeafe6b6_c3a8_11eb_bb5c_1201f4358c27', triggerFired: false });
trigger_aeafe6b6_c3a8_11eb_bb5c_1201f4358c27.addRule(rule_1413);
rule_1413.addTrigger(trigger_aeafe6b6_c3a8_11eb_bb5c_1201f4358c27);

condition_abedf4bf_c273_44ca_9701_f3457ca1525a = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_5d73e5ea_98a3_50d1_b89a_7a8cacf5bae1, comparisonVariable: 'true', comparisonType: 'Equals', uniqueId: 'abedf4bf_c273_44ca_9701_f3457ca1525a'});
trigger_function_trigger_aeaff7aa_c3a8_11eb_bb5c_1201f4358c27 = function (cb) {
				if(triggerFired == false){
					triggerFired = true;
					try {
						if(condition_abedf4bf_c273_44ca_9701_f3457ca1525a.match() == true){
							cb(true);
						}
					} catch (err) {
						console.log(err.message);
						jeErrorObj = {
							message: err.message
						};
						tiMonitor.dataCollector.queueRequest(jeErrorObj, "jserror");
					}
				}
		}
trigger_aeaff7aa_c3a8_11eb_bb5c_1201f4358c27 = new taginspector.datapulse.trigger.BaseTrigger({triggerScript: trigger_function_trigger_aeaff7aa_c3a8_11eb_bb5c_1201f4358c27, uniqueId: 'aeaff7aa_c3a8_11eb_bb5c_1201f4358c27', triggerFired: false });
trigger_aeaff7aa_c3a8_11eb_bb5c_1201f4358c27.addRule(rule_1291);
rule_1291.addTrigger(trigger_aeaff7aa_c3a8_11eb_bb5c_1201f4358c27);

condition_5874861b_e575_4e6b_a8ef_91384c4c1626 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_5d73e5ea_98a3_50d1_b89a_7a8cacf5bae1, comparisonVariable: 'true', comparisonType: 'Equals', uniqueId: '5874861b_e575_4e6b_a8ef_91384c4c1626'});
trigger_function_trigger_aeb00790_c3a8_11eb_bb5c_1201f4358c27 = function (cb) {
				if(triggerFired == false){
					triggerFired = true;
					try {
						if(condition_5874861b_e575_4e6b_a8ef_91384c4c1626.match() == true){
							cb(true);
						}
					} catch (err) {
						console.log(err.message);
						jeErrorObj = {
							message: err.message
						};
						tiMonitor.dataCollector.queueRequest(jeErrorObj, "jserror");
					}
				}
		}
trigger_aeb00790_c3a8_11eb_bb5c_1201f4358c27 = new taginspector.datapulse.trigger.BaseTrigger({triggerScript: trigger_function_trigger_aeb00790_c3a8_11eb_bb5c_1201f4358c27, uniqueId: 'aeb00790_c3a8_11eb_bb5c_1201f4358c27', triggerFired: false });
trigger_aeb00790_c3a8_11eb_bb5c_1201f4358c27.addRule(rule_344);
rule_344.addTrigger(trigger_aeb00790_c3a8_11eb_bb5c_1201f4358c27);

condition_5b7bd48a_5659_4eb7_b424_ce4dba7b196e = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_5d73e5ea_98a3_50d1_b89a_7a8cacf5bae1, comparisonVariable: 'true', comparisonType: 'Equals', uniqueId: '5b7bd48a_5659_4eb7_b424_ce4dba7b196e'});
trigger_function_trigger_aeb01956_c3a8_11eb_bb5c_1201f4358c27 = function (cb) {
				if(triggerFired == false){
					triggerFired = true;
					try {
						if(condition_5b7bd48a_5659_4eb7_b424_ce4dba7b196e.match() == true){
							cb(true);
						}
					} catch (err) {
						console.log(err.message);
						jeErrorObj = {
							message: err.message
						};
						tiMonitor.dataCollector.queueRequest(jeErrorObj, "jserror");
					}
				}
		}
trigger_aeb01956_c3a8_11eb_bb5c_1201f4358c27 = new taginspector.datapulse.trigger.BaseTrigger({triggerScript: trigger_function_trigger_aeb01956_c3a8_11eb_bb5c_1201f4358c27, uniqueId: 'aeb01956_c3a8_11eb_bb5c_1201f4358c27', triggerFired: false });
trigger_aeb01956_c3a8_11eb_bb5c_1201f4358c27.addRule(rule_1454);
rule_1454.addTrigger(trigger_aeb01956_c3a8_11eb_bb5c_1201f4358c27);

condition_85481dc9_8c0b_4af5_bcae_dc195bb4d23b = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_eea3cfac_e3de_56ed_abe3_6912dc14a61f, comparisonVariable: '"event":\\"transaction\\"', comparisonType: 'Matches Regex', uniqueId: '85481dc9_8c0b_4af5_bcae_dc195bb4d23b'});
trigger_function_trigger_aeb03166_c3a8_11eb_bb5c_1201f4358c27 = function (cb) {
				if(triggerFired == false){
					triggerFired = true;
					try {
						if(condition_85481dc9_8c0b_4af5_bcae_dc195bb4d23b.match() == true){
							cb(true);
						}
					} catch (err) {
						console.log(err.message);
						jeErrorObj = {
							message: err.message
						};
						tiMonitor.dataCollector.queueRequest(jeErrorObj, "jserror");
					}
				}
		}
trigger_aeb03166_c3a8_11eb_bb5c_1201f4358c27 = new taginspector.datapulse.trigger.BaseTrigger({triggerScript: trigger_function_trigger_aeb03166_c3a8_11eb_bb5c_1201f4358c27, uniqueId: 'aeb03166_c3a8_11eb_bb5c_1201f4358c27', triggerFired: false });
trigger_aeb03166_c3a8_11eb_bb5c_1201f4358c27.addRule(rule_1439);
rule_1439.addTrigger(trigger_aeb03166_c3a8_11eb_bb5c_1201f4358c27);

condition_1ef7491a_b8b0_4989_874a_b7b7e6001a7a = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_eea3cfac_e3de_56ed_abe3_6912dc14a61f, comparisonVariable: '"event":\\"(customProductImpressionAction|impression|promoSliderChange)\\"', comparisonType: 'Matches Regex', uniqueId: '1ef7491a_b8b0_4989_874a_b7b7e6001a7a'});
trigger_function_trigger_aeb044ee_c3a8_11eb_bb5c_1201f4358c27 = function (cb) {
				if(triggerFired == false){
					triggerFired = true;
					try {
						if(condition_1ef7491a_b8b0_4989_874a_b7b7e6001a7a.match() == true){
							cb(true);
						}
					} catch (err) {
						console.log(err.message);
						jeErrorObj = {
							message: err.message
						};
						tiMonitor.dataCollector.queueRequest(jeErrorObj, "jserror");
					}
				}
		}
trigger_aeb044ee_c3a8_11eb_bb5c_1201f4358c27 = new taginspector.datapulse.trigger.BaseTrigger({triggerScript: trigger_function_trigger_aeb044ee_c3a8_11eb_bb5c_1201f4358c27, uniqueId: 'aeb044ee_c3a8_11eb_bb5c_1201f4358c27', triggerFired: false });
trigger_aeb044ee_c3a8_11eb_bb5c_1201f4358c27.addRule(rule_1419);
rule_1419.addTrigger(trigger_aeb044ee_c3a8_11eb_bb5c_1201f4358c27);

condition_c3cc4318_13c4_4da1_b484_747759c7c1a0 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_5d73e5ea_98a3_50d1_b89a_7a8cacf5bae1, comparisonVariable: 'true', comparisonType: 'Equals', uniqueId: 'c3cc4318_13c4_4da1_b484_747759c7c1a0'});
trigger_function_trigger_aeb057c2_c3a8_11eb_bb5c_1201f4358c27 = function (cb) {
				if(triggerFired == false){
					triggerFired = true;
					try {
						if(condition_c3cc4318_13c4_4da1_b484_747759c7c1a0.match() == true){
							cb(true);
						}
					} catch (err) {
						console.log(err.message);
						jeErrorObj = {
							message: err.message
						};
						tiMonitor.dataCollector.queueRequest(jeErrorObj, "jserror");
					}
				}
		}
trigger_aeb057c2_c3a8_11eb_bb5c_1201f4358c27 = new taginspector.datapulse.trigger.BaseTrigger({triggerScript: trigger_function_trigger_aeb057c2_c3a8_11eb_bb5c_1201f4358c27, uniqueId: 'aeb057c2_c3a8_11eb_bb5c_1201f4358c27', triggerFired: false });
trigger_aeb057c2_c3a8_11eb_bb5c_1201f4358c27.addRule(rule_1290);
rule_1290.addTrigger(trigger_aeb057c2_c3a8_11eb_bb5c_1201f4358c27);

condition_992dad72_a4ff_4d8e_8ab0_582dd8e50fe1 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_31dad1ae_f686_5581_8cbc_52bf9629b428, comparisonVariable: '(orderConfirmation|checkoutConfirmation)', comparisonType: 'Matches Regex', uniqueId: '992dad72_a4ff_4d8e_8ab0_582dd8e50fe1'});
trigger_function_trigger_aeb06924_c3a8_11eb_bb5c_1201f4358c27 = function (cb) {
				if(triggerFired == false){
					triggerFired = true;
					try {
						if(condition_992dad72_a4ff_4d8e_8ab0_582dd8e50fe1.match() == true){
							cb(true);
						}
					} catch (err) {
						console.log(err.message);
						jeErrorObj = {
							message: err.message
						};
						tiMonitor.dataCollector.queueRequest(jeErrorObj, "jserror");
					}
				}
		}
trigger_aeb06924_c3a8_11eb_bb5c_1201f4358c27 = new taginspector.datapulse.trigger.BaseTrigger({triggerScript: trigger_function_trigger_aeb06924_c3a8_11eb_bb5c_1201f4358c27, uniqueId: 'aeb06924_c3a8_11eb_bb5c_1201f4358c27', triggerFired: false });
trigger_aeb06924_c3a8_11eb_bb5c_1201f4358c27.addRule(rule_1294);
rule_1294.addTrigger(trigger_aeb06924_c3a8_11eb_bb5c_1201f4358c27);

condition_8bea3f95_3174_428a_8dbb_e8279c414bb5 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_31dad1ae_f686_5581_8cbc_52bf9629b428, comparisonVariable: 'redirect', comparisonType: 'Does not Contain', uniqueId: '8bea3f95_3174_428a_8dbb_e8279c414bb5'});
trigger_function_trigger_aeb07298_c3a8_11eb_bb5c_1201f4358c27 = function (cb) {
				if(triggerFired == false){
					triggerFired = true;
					try {
						if(condition_8bea3f95_3174_428a_8dbb_e8279c414bb5.match() == true){
							cb(true);
						}
					} catch (err) {
						console.log(err.message);
						jeErrorObj = {
							message: err.message
						};
						tiMonitor.dataCollector.queueRequest(jeErrorObj, "jserror");
					}
				}
		}
trigger_aeb07298_c3a8_11eb_bb5c_1201f4358c27 = new taginspector.datapulse.trigger.BaseTrigger({triggerScript: trigger_function_trigger_aeb07298_c3a8_11eb_bb5c_1201f4358c27, uniqueId: 'aeb07298_c3a8_11eb_bb5c_1201f4358c27', triggerFired: false });
trigger_aeb07298_c3a8_11eb_bb5c_1201f4358c27.addRule(rule_1294);
rule_1294.addTrigger(trigger_aeb07298_c3a8_11eb_bb5c_1201f4358c27);


		function _asyncFireTrigger(tgr){
			return new Promise(function(resolve, reject){
				tgr.initTrigger(resolve);
			});
		}

		function initUnloadTriggers(){
			var tiTriggerListInit = [];
			tiMonitor.ruleVariableCache.updateCache(100);
			tiTriggerListInit.push(_asyncFireTrigger(trigger_aeae7ce0_c3a8_11eb_bb5c_1201f4358c27));
tiTriggerListInit.push(_asyncFireTrigger(trigger_aeae8e2e_c3a8_11eb_bb5c_1201f4358c27));
tiTriggerListInit.push(_asyncFireTrigger(trigger_aeaea134_c3a8_11eb_bb5c_1201f4358c27));
tiTriggerListInit.push(_asyncFireTrigger(trigger_aeaeb2b4_c3a8_11eb_bb5c_1201f4358c27));
tiTriggerListInit.push(_asyncFireTrigger(trigger_aeaec2ae_c3a8_11eb_bb5c_1201f4358c27));
tiTriggerListInit.push(_asyncFireTrigger(trigger_aeaed4ba_c3a8_11eb_bb5c_1201f4358c27));
tiTriggerListInit.push(_asyncFireTrigger(trigger_aeaee7a2_c3a8_11eb_bb5c_1201f4358c27));
tiTriggerListInit.push(_asyncFireTrigger(trigger_aeaef896_c3a8_11eb_bb5c_1201f4358c27));
tiTriggerListInit.push(_asyncFireTrigger(trigger_aeaf089a_c3a8_11eb_bb5c_1201f4358c27));
tiTriggerListInit.push(_asyncFireTrigger(trigger_aeaf1920_c3a8_11eb_bb5c_1201f4358c27));
tiTriggerListInit.push(_asyncFireTrigger(trigger_aeaf28d4_c3a8_11eb_bb5c_1201f4358c27));
tiTriggerListInit.push(_asyncFireTrigger(trigger_aeaf4076_c3a8_11eb_bb5c_1201f4358c27));
tiTriggerListInit.push(_asyncFireTrigger(trigger_aeaf562e_c3a8_11eb_bb5c_1201f4358c27));
tiTriggerListInit.push(_asyncFireTrigger(trigger_aeaf6682_c3a8_11eb_bb5c_1201f4358c27));
tiTriggerListInit.push(_asyncFireTrigger(trigger_aeaf7956_c3a8_11eb_bb5c_1201f4358c27));
tiTriggerListInit.push(_asyncFireTrigger(trigger_aeaf8266_c3a8_11eb_bb5c_1201f4358c27));
tiTriggerListInit.push(_asyncFireTrigger(trigger_aeaf94c2_c3a8_11eb_bb5c_1201f4358c27));
tiTriggerListInit.push(_asyncFireTrigger(trigger_aeafa52a_c3a8_11eb_bb5c_1201f4358c27));
tiTriggerListInit.push(_asyncFireTrigger(trigger_aeafb54c_c3a8_11eb_bb5c_1201f4358c27));
tiTriggerListInit.push(_asyncFireTrigger(trigger_aeafc5be_c3a8_11eb_bb5c_1201f4358c27));
tiTriggerListInit.push(_asyncFireTrigger(trigger_aeafd5ae_c3a8_11eb_bb5c_1201f4358c27));
tiTriggerListInit.push(_asyncFireTrigger(trigger_aeafe6b6_c3a8_11eb_bb5c_1201f4358c27));
tiTriggerListInit.push(_asyncFireTrigger(trigger_aeaff7aa_c3a8_11eb_bb5c_1201f4358c27));
tiTriggerListInit.push(_asyncFireTrigger(trigger_aeb00790_c3a8_11eb_bb5c_1201f4358c27));
tiTriggerListInit.push(_asyncFireTrigger(trigger_aeb01956_c3a8_11eb_bb5c_1201f4358c27));
tiTriggerListInit.push(_asyncFireTrigger(trigger_aeb03166_c3a8_11eb_bb5c_1201f4358c27));
tiTriggerListInit.push(_asyncFireTrigger(trigger_aeb044ee_c3a8_11eb_bb5c_1201f4358c27));
tiTriggerListInit.push(_asyncFireTrigger(trigger_aeb057c2_c3a8_11eb_bb5c_1201f4358c27));
tiTriggerListInit.push(_asyncFireTrigger(trigger_aeb06924_c3a8_11eb_bb5c_1201f4358c27));
tiTriggerListInit.push(_asyncFireTrigger(trigger_aeb07298_c3a8_11eb_bb5c_1201f4358c27));

			Promise.all(tiTriggerListInit).then(function(values){
			});
		}

		window.addEventListener("unload", function (event) {
			tiMonitor.sendData.fire();
		});

		window.addEventListener("pagehide", function (event) {
			tiMonitor.fireValidationRules();
		});

		window.addEventListener("beforeunload", function (event) {
			tiMonitor.fireValidationRules();
		});

		document.addEventListener('tiSimulateUnload', function (e) {
			initUnloadTriggers();
		}, false);


	}
	catch(err) {
		console.log(err.message);
		jeErrorObj = {
			message: err.message
		};
		tiMonitor.dataCollector.queueRequest(jeErrorObj, "jserror");
	}
};

tiMonitor.fireValidationRules = function (){
	try {
		//fire unload triggers:
		if(typeof Event == "function" && tiMonitor.sendData.pageBeingSampled == false){
			var event = new Event("tiSimulateUnload");
			tiMonitor.sendData.handleUnload();
			document.dispatchEvent(event);
		}
	}
	catch(err) {
		console.log(err.message);
		jeErrorObj = {
			message: err.message
		};
		tiMonitor.dataCollector.queueRequest(jeErrorObj, "jserror");
	}
};

tiMonitor.enableEnhancedTagSupport = function (){
	try {
		scInterval = 0;
		var tiScPostSupport = setInterval(function() {
			scInterval = scInterval + 100;
			if(scInterval >= 20000){
				clearInterval(tiScPostSupport);
			}
			if(typeof(s) != "undefined"){
				if (s.hasOwnProperty("registerPostTrackCallback")){
					s.registerPostTrackCallback(function(requestUrl) {
						if(requestUrl.length > 2048 || navigator.userAgent.indexOf("iPhone") > -1){
							tiMonitor.sendData.createFakeReq(requestUrl);
						}
					});
					clearInterval(tiScPostSupport);
				}
			}
		}, 100);
		fbInterval = 0;
		var tiFbPostSupport = setInterval(function() {
			fbInterval = fbInterval + 100;
			if(fbInterval >= 20000){
				clearInterval(tiFbPostSupport);
			}
			if(typeof(fbq) != "undefined"){
				if (fbq.hasOwnProperty("on")){
					clearInterval(tiFbPostSupport);
					fbq.on( "fired", function(reqMethod, reqData) {
						if(reqMethod == "POST"){
							params = []
							for(x=1;x<reqData["_params"].length;x++){
								param = reqData["_params"][x];
								params.push(encodeURIComponent(param.name) + '=' + encodeURIComponent(param.value));
							}
							fbUrl = "https://www.facebook.com/tr/?" + params.join('&');
							tiMonitor.sendData.createFakeReq(fbUrl);
						}
					});
				}
			}
		}, 100);
	
		function initGaTracker(tracker){
			var globalSendTaskName = '_' + tracker.get('trackingId') + '_sendHitTask';
			var originalSendHitTask = window[globalSendTaskName] = window[globalSendTaskName] || tracker.get('sendHitTask');

			tracker.set('sendHitTask', function(model) {
				globalSendTaskName2 = '_' + model.get('trackingId') + '_sendHitTask';
				originalSendHitTask2 = window[globalSendTaskName2];
				originalSendHitTask2(model);
				hitPayload = model.get('hitPayload');
				fullHitUrl = "https://www.google-analytics.com/collect?" + hitPayload
				if(hitPayload.length > 2036 && hitPayload.length <= 8192){
					tiMonitor.sendData.createFakeReq(fullHitUrl);
				}
			});
		}
		gaInterval = 0;
		tiGaPostSupport = setInterval(function() {
			gaInterval = gaInterval + 500;
			if(gaInterval >= 20000){
				clearInterval(tiGaPostSupport);
			}
			if(typeof(ga) != "undefined"){
				if (ga.hasOwnProperty("getAll")){
					if(ga.getAll().length > 0){
						for(x=0; x<ga.getAll().length; x++){
						initGaTracker(ga.getAll()[x])
						}
						clearInterval(tiGaPostSupport);
					}
				}
			}
		}, 500);
	}catch(err) {
		console.log(err.message);
		jeErrorObj = {
			message: err.message
		};
		tiMonitor.dataCollector.queueRequest(jeErrorObj, "jserror");
	}
};

tiMonitor.initializeNewPage = function (){
	try {
		tiMonitor.windowUnloadEvent = false;
		tiMonitor.sendData.sentUnload = false;
		tiMonitor.sendData.pageBeingSampled = tiMonitor.sendData.shouldSamplePage();
		newPageId = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);return v.toString(16);});
		tiMonitor.sendData.pageId = newPageId;
		tiMonitor.dataCollector.pageId = newPageId;
		
		tiMonitor.dataCollector.startTime = Date.now();
		// tiMonitor.dataCollector.identifiedRequests = {};
		tiMonitor.dataCollector.resetIdentifiedRequests();
		tiMonitor.dataCollector.offsetTime = performance.now();
		tiMonitor.sendData.currentUrl = window.location.href;
		tiMonitor.sendData.preventFiringValidationRules = false;
		tiMonitor.dataCollector.resource_size = 0;
		taginspector.datapulse.trigger.BaseTrigger.resetFiredTriggers();
		taginspector.datapulse.pagevariable.BaseVariable.clearCache();
		tiMonitor.spaRuleObjectLengthTracker.incrimentSpaPageview();
	}
	catch(err) {
		console.log(err.message);
		jeErrorObj = {
			message: err.message
		};
		tiMonitor.dataCollector.queueRequest(jeErrorObj, "jserror");
	}
};

tiMonitor.enableSpaSupport = function() {
	var portRegex = /:[0-9]+$/;
	var kd = {};
	ld = function (a, b) {
		kd[a] = kd[a] || [];
		kd[a][b] = !0
	}
	getWindowParam = function(a, b, c) {
		b && (void 0 === window[a] || c && !window[a]) && (window[a] = b);
		return window[a]
	}
	getUrl = function () {
		return document.location.href;
	}

	getUrlwithoutFragment = function (a) {
		return stripFragmentFromUrl(getUrlDict(a))
	}
	stripFragmentFromUrl = function (a) {
		var b = "";
		if (a && a.href) {
			var c = a.href.indexOf("#");
			b = 0 > c ? a.href : a.href.substr(0, c)
		}
		return b
	}
	getUrlDict = function (a) {
		var b = document.createElement("a");
		a && (b.href = a);
		var c = b.pathname;
		"/" !== c[0] && (a || ld("TAGGING", 1), c = "/" + c);
		var d = b.hostname.replace(portRegex, "");
		return {
			href: b.href,
			protocol: b.protocol,
			host: b.host,
			hostname: d,
			pathname: c,
			search: b.search,
			hash: b.hash,
			port: b.port
		}
	}
	getUrlComponent = function (urlDict, uriComponent, c, d, e) {
		uriComponent && (uriComponent = String(uriComponent).toLowerCase());
		if ("protocol" === uriComponent || "port" === uriComponent){
			urlDict.protocol = stripSemicolon(urlDict.protocol) || stripSemicolon(document.location.protocol);
		}
		"port" === uriComponent ? urlDict.port = String(Number(urlDict.hostname ? urlDict.port : document.location.port) || ("http" == urlDict.protocol ? 80 : "https" == urlDict.protocol ? 443 : "")) : "host" === uriComponent && (urlDict.hostname = (urlDict.hostname || document.location.hostname).replace(portRegex, "").toLowerCase());
		var uriComponentCopy = uriComponent, h, k = stripSemicolon(urlDict.protocol);
		uriComponentCopy && (uriComponentCopy = String(uriComponentCopy).toLowerCase());
		switch (uriComponentCopy) {
			case "url_no_fragment":
				result = stripFragmentFromUrl(a);
				break;
			case "protocol":
				result = k;
				break;
			case "host":
				result = urlDict.hostname.replace(portRegex, "").toLowerCase();
				if (c) {
					var l = /^www\d*\./.exec(result);
					l && l[0] && (result = result.substr(l[0].length))
				}
				break;
			case "port":
				result = String(Number(urlDict.port) || ("http" == k ? 80 : "https" == k ? 443 : ""));
				break;
			case "path":
				urlDict.pathname || urlDict.hostname || ld("TAGGING", 1);
				result = "/" == urlDict.pathname.substr(0, 1) ? urlDict.pathname : "/" + urlDict.pathname;
				var m = result.split("/");
				0 <= n(d || [], m[m.length - 1]) && (m[m.length - 1] = "");
				result = m.join("/");
				break;
			case "query":
				result = urlDict.search.replace("?", "");
				e && (result = getQueryparameters(result, e, void 0));
				break;
			case "extension":
				var q = urlDict.pathname.split(".");
				result = 1 < q.length ? q[q.length - 1] : "";
				result = result.split("/")[0];
				break;
			case "fragment":
				result = urlDict.hash.replace("#", "");
				break;
			default:
				result = a && urlDict.href
		}
		return result
	}
	getUrlFragment = function (a) {
		return getUrlComponent(getUrlDict(a), "fragment")
	}
	stripSemicolon = function (a) {
		return a ? a.replace(":", "").toLowerCase() : ""
	}
	isFunction = function(a) {
		return "function" == typeof a
	}
	getQueryparameters = function(a, b, c) {
		for (var d = a.split("&"), e = 0; e < d.length; e++) {
			var f = d[e].split("=");
			if (decodeURIComponent(f[0]).replace(/\+/g, " ") === b) {
				var h = f.slice(1).join("=");
				return c ? h : decodeURIComponent(h).replace(/\+/g, " ")
			}
		}
	}
	addListener = function(a, b, c, d) {
		a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c)
	}
	var avb = function(){
		function getNewUrlOnEventCallback(event) {
			return event.target && event.target.location && event.target.location.href ? event.target.location.href : getUrl()
		}
		function listenToHashChangeEvents(winObj, histObj) {
			addListener(winObj, "hashchange", function(event) {
				var newUrl = getNewUrlOnEventCallback(event);
				histObj({
					source: "hashchange",
					state: null,
					url: getUrlwithoutFragment(newUrl),
					L: getUrlFragment(newUrl)
				})
			})
		} 
		function listenToPopstateEvents(winObj, histObj) {
			addListener(winObj, "popstate", function(event) {
				var newUrl = getNewUrlOnEventCallback(event);
				histObj({
					source: "popstate",
					state: event.state,
					url: getUrlwithoutFragment(newUrl),
					L: getUrlFragment(newUrl)
				})
			})
		}
		function bindToHistoryEvent(eventName, windowObj, historyObj) {
			var windowHistoryObj = windowObj.history;
			var eventType = windowHistoryObj[eventName];
			if (isFunction(eventType))
				try {
					windowHistoryObj[eventName] = function (q, r, u) {
						eventType.apply(windowHistoryObj, [].slice.call(arguments, 0));
						historyObj({
							source: eventName,
							state: q,
							url: getUrlwithoutFragment(getUrl()),
							L: getUrlFragment(getUrl())
						})
					}
				} catch (q) {}
		}	
		function orgHistoryObj() {
			var historyDict = {
				source: null,
				state: getWindowParam("history").state || null,
				url: getUrlwithoutFragment(getUrl()),
				L: getUrlFragment(getUrl())
			};
			return function(winObj) {
				var l = {};
				l[historyDict.source] = !0;
				l[winObj.source] = !0;
				if (!l.popstate || !l.hashchange || historyDict.L != winObj.L) {
					if(historyDict.url !== undefined && winObj.url !== undefined){
						var historyDictUrlNoQs = (historyDict.url).split("?")[0];
						var winObjUrlNoQs = (winObj.url).split("?")[0];
						if (historyDictUrlNoQs !== winObjUrlNoQs) {
							historyDict = winObj;
							if(performance.now() - tiMonitor.dataCollector.offsetTime > 200){
								tiMonitor.ruleVariableCache.updateCache(100);
								tiMonitor.ruleVariableCache.spaRulesFiring = true;
								setTimeout(function() {
									tiMonitor.fireValidationRules();
									tiMonitor.sendData.pageComplete();
									tiMonitor.ruleVariableCache.spaRulesFiring = false;
									tiMonitor.initializeNewPage();
									tiMonitor.sendData.pageComplete();
								}, 200);
							}
						}
					}
				}
			}
		}(function(f) {
			f()
		})(function() {
			var winObj = getWindowParam("self");
			var histObj = orgHistoryObj();
			listenToHashChangeEvents(winObj, histObj);
			listenToPopstateEvents(winObj, histObj);
			bindToHistoryEvent("pushState", winObj, histObj);
			bindToHistoryEvent("replaceState", winObj, histObj);
		})
	}();
};

tiMonitor.initializeMain = function() {
	if(tiMonitor.sendData.suportedBrowser() == true && tiMonitor.sendData.isInIframe() == false){
		if(tiMonitor.sendData.initialized == false){
			tiMonitor.sendData.initialized = true;
			if(tiMonitor.sendData.shouldSamplePage() == false && tiMonitor.sendData.isBufferFull() == false){
				if(false){
					tiMonitor.dataCollector.session = taginspector.datapulse.Session.setupSession({"containerId": "97f86ec0389d11e6bf0212f5c79d2169"});
				}
				tiMonitor.sendData.fullBufferEventListener();
				tiMonitor.spaRuleObjectLengthTracker.incrimentSpaPageview();

				if(tiMonitor.sendData.isPerformanceObserverSupported() == true){
					var iteratePerformanceCompleted = false;
					while(iteratePerformanceCompleted == false){
						tiMonitor.sendData.iteratePerformance();
						pe = performance.getEntriesByType("resource");
						if(tiMonitor.sendData.lastPerformanceObjLength == pe.length){
							iteratePerformanceCompleted = true;
						}
					}
					var observer = new PerformanceObserver(tiMonitor.sendData.performanceObserverCallback);
					observer.observe({entryTypes: ['resource']});

				}else{
					setInterval(function () {tiMonitor.sendData.iteratePerformance()}, 1000);
				}
				tiMonitor.enableEnhancedTagSupport();
				try {
					tiMonitor.enableSpaSupport();
				} catch (err) {
					console.log(err.message);
					jeErrorObj = {
						message: err.message
					};
					tiMonitor.dataCollector.queueRequest(jeErrorObj, "jserror");
				}
				var tiDomLoadInterval = setInterval(function () {
					isDomLoaded = tiMonitor.sendData.waitForDomLoad();
					if(isDomLoaded){
						clearInterval(tiDomLoadInterval);
					}
				}, 1000);
				setInterval(function () {tiMonitor.sendData.fire()}, 1000);
			}
		}
	}
}
tiMonitor.initializeMain();
 }