if (self.CavalryLogger) { CavalryLogger.start_js(["oKOV7"]); }

__d("FBRTCConfig",["CurrentUser"],(function(a,b,c,d,e,f){__p&&__p();var g=!1,h=null,i=null,j=0,k={};a={setConfig:function(a){var b=a.isVCEndpointCall,c=a.meetingID,d=a.meetingPassword,e=a.peerID;a=a.serverConfig;g=b;h=c;i=d;j=e;k=a},isVCEndpointCall:function(){return g},getMeetingID:function(){return h},getMeetingPassword:function(){return i},getPeerID:function(){return j},statsInterpreterConfig:function(){return{bad_score_count:3,frr_weight:800,plr_weight:500,rtt_weight:2,score_threshold:1e3}},unsupportedBrowserUrl:function(){if(k.troubleshooting_urls&&k.troubleshooting_urls.unsupported_browser)return k.troubleshooting_urls.unsupported_browser;if(b("CurrentUser").isWorkUser())return"https://www.facebook.com/help/work/919532078125908";else return"https://www.facebook.com/help/211644178877843"},userMediaErrorUrl:function(){if(k.troubleshooting_urls&&k.troubleshooting_urls.user_media_error)return k.troubleshooting_urls.user_media_error;if(b("CurrentUser").isWorkUser())return"https://www.facebook.com/help/work/180714775754632";else return"https://www.facebook.com/help/232232800134371"},userMediaPermissionErrorUrl:function(){if(k.troubleshooting_urls&&k.troubleshooting_urls.user_media_permission_error)return k.troubleshooting_urls.user_media_permission_error;if(b("CurrentUser").isWorkUser())return"https://www.facebook.com/help/work/180714775754632";else return"https://www.facebook.com/help/232232800134371"},isMessengerDotCom:function(){return k.is_messenger_dot_com},useMessengerCallUI:function(){return k.messenger_call_ui},useHDVideoQuality:function(){return k.use_hd_video_quality},shouldCreateDataChannel:function(){return k.data_channel},disableURLManager:function(){return k.disable_url_manager}};e.exports=a}),null);
__d("JSLogger",["lowerFacebookDomain"],(function(a,b,c,d,e,f){__p&&__p();var g={MAX_HISTORY:500,counts:{},categories:{},seq:0,pageId:(Math.random()*2147483648|0).toString(36),forwarding:!1};function h(a){if(a=="/"||a.indexOf("/",1)<0)return!1;var b=/^\/(v\d+\.\d\d?|head)\//.test(a);return b?/^\/(dialog|plugins)\//.test(a.substring(a.indexOf("/",1))):/^\/(dialog|plugins)\//.test(a)}function i(b){b instanceof Error&&a.ErrorUtils&&(b=a.ErrorUtils.normalizeError(b));try{return JSON.stringify(b)}catch(a){return"{}"}}function j(a,b,c){g.counts[a]||(g.counts[a]={}),g.counts[a][b]||(g.counts[a][b]=0),c=c==null?1:Number(c),g.counts[a][b]+=isFinite(c)?c:0}g.logAction=function(a,b,c){__p&&__p();if(this.type=="bump")j(this.cat,a,b);else if(this.type=="rate")b&&j(this.cat,a+"_n",c),j(this.cat,a+"_d",c);else{c={cat:this.cat,type:this.type,event:a,data:b!=null?i(b):null,date:Date.now(),seq:g.seq++};g.head=g.head?g.head.next=c:g.tail=c;while(g.head.seq-g.tail.seq>g.MAX_HISTORY)g.tail=g.tail.next;return c}};function c(c){__p&&__p();if(!g.categories[c]){g.categories[c]={};var d=function(d){__p&&__p();var e={cat:c,type:d};g.categories[c][d]=function(){__p&&__p();g.forwarding=!1;var c=null;if(b("lowerFacebookDomain").isValidDocumentDomain())return;c=g.logAction;if(h(location.pathname))g.forwarding=!1;else try{c=a.top.require("JSLogger")._.logAction,g.forwarding=c!==g.logAction}catch(a){}c&&c.apply(e,arguments)}};d("debug");d("log");d("warn");d("error");d("bump");d("rate")}return g.categories[c]}function d(a,b){var c=[];for(var b=b||g.tail;b;b=b.next)if(!a||a(b)){var d={type:b.type,cat:b.cat,date:b.date,event:b.event,seq:b.seq};b.data&&(d.data=JSON.parse(b.data));c.push(d)}return c}e.exports={_:g,DUMP_EVENT:"jslogger/dump",create:c,getEntries:d}}),null);
__d("keyMirror",["invariant"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();function a(a){var b={};a instanceof Object&&!Array.isArray(a)||g(0,3387);for(var c in a){if(!Object.prototype.hasOwnProperty.call(a,c))continue;b[c]=c}return b}e.exports=a}),null);
__d("MessengerPage",["EventEmitter","EventEmitterWithHolding","EventHolder","keyMirror","performanceAbsoluteNow"],(function(a,b,c,d,e,f){"use strict";a={Events:b("keyMirror")({APP_MOUNTED:null,DATA_INITIALIZED:null,JS_LOADED:null}),addRetroactiveListener:function(a,b){return g.addRetroactiveListener(a,b)},emit:function(a){g.emitAndHold(a,b("performanceAbsoluteNow")())},removeCurrentListener:function(){g.removeCurrentListener()}};var g=new(b("EventEmitterWithHolding"))(new(b("EventEmitter"))(),new(b("EventHolder"))());e.exports=a}),null);
__d("DOMDimensions",["Style","getDocumentScrollElement"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a={getElementDimensions:function(a){var b=a?a.offsetHeight:0;a=a?a.offsetWidth:0;return{height:b,width:a}},getDocumentDimensions:function(a){a=b("getDocumentScrollElement")(a);var c=a.scrollWidth||0;a=a.scrollHeight||0;return{width:c,height:a}},measureElementBox:function(a,c,d,e,f){__p&&__p();var g;switch(c){case"left":case"right":case"top":case"bottom":g=[c];break;case"width":g=["left","right"];break;case"height":g=["top","bottom"];break;default:throw Error("Invalid plane: "+c)}c=function(c,d){var e=0;for(var f=0;f<g.length;f++)e+=parseFloat(b("Style").get(a,c+"-"+g[f]+d))||0;return e};return(d?c("padding",""):0)+(e?c("border","-width"):0)+(f?c("margin",""):0)}};e.exports=a}),null);
__d("SystemEvents",["ArbiterMixin","Cookie","ErrorGuard","ErrorUtils","SystemEventsInitialData","TimeSlice","UserActivity","UserAgent_DEPRECATED","gkx","mixin","setIntervalAcrossTransitions","setTimeoutAcrossTransitions"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h=1e3;c=babelHelpers.inherits(a,b("mixin")(b("ArbiterMixin")));g=c&&c.prototype;function a(){g.constructor.call(this),this.$SystemEvents12=function(){var a=this.$SystemEvents7();this.$SystemEvents2!=a&&(this.$SystemEvents2=a,this.inform(this.USER,a));this.$SystemEvents13()}.bind(this),this.USER="SystemEvents/USER",this.ONLINE="SystemEvents/ONLINE",this.TIME_TRAVEL="SystemEvents/TIME_TRAVEL",this.$SystemEvents1=b("SystemEventsInitialData").ORIGINAL_USER_ID,this.$SystemEvents2=this.$SystemEvents1,this.$SystemEvents3=navigator.onLine,this.$SystemEvents4=Date.now(),this.$SystemEvents6()}a.prototype.isPageOwner=function(a){return(a||this.$SystemEvents7())==this.$SystemEvents1};a.prototype.isOnline=function(){return!!(b("UserAgent_DEPRECATED").chrome()||this.$SystemEvents3)};a.prototype.checkTimeTravel=function(){var a=Date.now(),b=a-this.$SystemEvents4;this.$SystemEvents4=a;(b<0||b>1e4)&&this.inform(this.TIME_TRAVEL,b)};a.prototype.$SystemEvents6=function(){this.$SystemEvents8(),this.$SystemEvents9(),this.$SystemEvents10(),this.$SystemEvents11()};a.prototype.$SystemEvents8=function(){var a=b("TimeSlice").guard(function(){this.$SystemEvents3||(this.$SystemEvents3=!0,this.inform(this.ONLINE,this.$SystemEvents3))}.bind(this),"SystemEvents onOnline"),c=b("TimeSlice").guard(function(){this.$SystemEvents3&&(this.$SystemEvents3=!1,this.inform(this.ONLINE,this.$SystemEvents3))}.bind(this),"SystemEvents onOffline");b("UserAgent_DEPRECATED").ie()?b("UserAgent_DEPRECATED").ie()>=11?(window.addEventListener("online",a,!1),window.addEventListener("offline",c,!1)):b("UserAgent_DEPRECATED").ie()>=8?window.attachEvent("onload",function(){document.body.ononline=a,document.body.onoffline=c}):b("setIntervalAcrossTransitions")(function(){(navigator.onLine?a:c)()},h):window.addEventListener&&(window.addEventListener("online",a,!1),window.addEventListener("offline",c,!1))};a.prototype.$SystemEvents13=function(){clearTimeout(this.$SystemEvents5),this.$SystemEvents5=b("setTimeoutAcrossTransitions")(this.$SystemEvents12,h)};a.prototype.$SystemEvents9=function(){if(self!==top&&b("gkx")("678677"))return;b("gkx")("678678")&&b("UserActivity").subscribe(function(){this.$SystemEvents13()}.bind(this));this.$SystemEvents13()};a.prototype.$SystemEvents10=function(){b("setIntervalAcrossTransitions")(this.checkTimeTravel.bind(this),h)};a.prototype.$SystemEvents11=function(){b("setIntervalAcrossTransitions")(function(){window.onerror!=b("ErrorUtils").onerror&&window.onerror!=b("ErrorGuard").onerror&&(window.onerror=b("ErrorUtils").onerror)},h)};a.prototype.$SystemEvents7=function(){return b("Cookie").get("c_user")||"0"};e.exports=new a()}),3);
__d("LoadingMarker.react",["LoadingMarkerGated","React"],(function(a,b,c,d,e,f){"use strict";function a(a){return a.children}e.exports=b("LoadingMarkerGated").component||a}),null);
__d("LayerHideSources",[],(function(a,b,c,d,e,f){a=Object.freeze({BLUR:"blur",ESCAPE:"escape",LAYER_CANCEL_BUTTON:"layerCancelButton",LAYER_HIDE_BUTTON:"layerHideButton",TRANSITION:"transition"});e.exports=a}),null);
__d("BanzaiBase",["BanzaiAdapter","BanzaiConsts","BanzaiLazyQueue","ErrorUtils","FBLogger"],(function(a,b,c,d,e,f){__p&&__p();var g=b("BanzaiAdapter"),h="ods:banzai",i="send_via_beacon_failure",j=0,k=1,l=2,m=null,n,o=[],p=null,q=[];function r(a,b){a.__meta.status=j,a[3]=(a[3]||0)+1,!a.__meta.retry&&b>=400&&b<600&&o.push(a)}var s={adapter:g,SEND:b("BanzaiConsts").SEND,OK:b("BanzaiConsts").OK,ERROR:b("BanzaiConsts").ERROR,SHUTDOWN:b("BanzaiConsts").SHUTDOWN,VITAL_WAIT:b("BanzaiConsts").VITAL_WAIT,BASIC_WAIT:b("BanzaiConsts").BASIC_WAIT,VITAL:{delay:g.config.MIN_WAIT||b("BanzaiConsts").VITAL_WAIT},BASIC:{delay:g.config.MAX_WAIT||b("BanzaiConsts").BASIC_WAIT},isEnabled:function(a){return g.config.gks&&g.config.gks[a]},post:function(a,c,d){__p&&__p();a||b("FBLogger")("banzai").mustfix("Banzai.post called without specifying a route");d=d||{};var e=d.retry;if(g.config.disabled)return;var f=g.config.blacklist;if(f&&(f.indexOf&&(typeof f.indexOf=="function"&&f.indexOf(a)!=-1)))return;var h=s._wrapData(a,c,s._getEventTime(),e);d.callback&&(h.__meta.callback=d.callback);d.compress!=null&&(h.__meta.compress=d.compress);f=d.delay;f==null&&(f=b("BanzaiConsts").BASIC_WAIT);if(d.signal){h.__meta.status=k;c=[{user:s._getUserId(),page_id:s._getPageId(),posts:[h],trigger:a}];g.send(c,function(){h.__meta.status=l,h.__meta.callback&&h.__meta.callback()},function(a){r(h,a)},!0);if(!e)return}o.push(h);(s._schedule(f)||!p)&&(p=a);d=b("BanzaiLazyQueue").flushQueue();d.forEach(function(a){return s.post.apply(s,a)})},registerToSendWithBeacon:function(a,c,d,e){if(!(navigator&&navigator.sendBeacon&&g.isOkToSendViaBeacon()))return!1;if(!a){b("FBLogger")("banzai").mustfix("Banzai.registerToSendWithBeacon called without specifying a route");return!1}q.push({cb:c,route:a,onSuccess:d,onFailure:e});return!0},flush:function(b,c){a.clearTimeout(m),m=null,s._sendWithCallbacks(b,c)},subscribe:g.subscribe,canUseNavigatorBeacon:function(){return navigator&&navigator.sendBeacon&&g.isOkToSendViaBeacon()},_canSend:function(a){return a[2]>=s._getEventTime()-(g.config.EXPIRY||b("BanzaiConsts").EXPIRY)},_getPostBuffer:function(){return o},_clearPostBuffer:function(){o=[]},_schedule:function(b){var c=s._getEventTime()+b;if(!n||c<n){n=c;m&&a.clearTimeout(m);m=a.setTimeout(function(){s._sendWithCallbacks()},b);return!0}return!1},_sendWithCallbacks:function(a,c){__p&&__p();n=null;s._schedule(s.BASIC.delay);if(!g.readyToSend()){c&&c();return}if(s.isEnabled("flush_storage_periodically")||s.isEnabled("error_impact_test")){var d=s._getStorage();b("ErrorUtils").applyWithGuard(d.flush,d)}g.inform(b("BanzaiConsts").SEND);d=[];var e=[];o=s._gatherWadsAndPostsFromBuffer(d,e,!0,o);if(d.length<=0){g.inform(b("BanzaiConsts").OK);a&&a();return}d[0].trigger=p;p=null;d[0].send_method="ajax";d.map(g.prepWadForTransit);g.send(d,function(){e.forEach(function(a){a.__meta.status=l,a.__meta.callback&&a.__meta.callback()}),a&&a()},function(a){e.forEach(function(b){r(b,a)}),c&&c()})},_gatherWadsAndPostsFromBuffer:function(a,b,c,d){__p&&__p();var e={};return d.filter(function(d){__p&&__p();var f=d.__meta;if(f.status>=l||!s._canSend(d))return!1;if(f.status>=k)return!0;var g=f.compress!=null?f.compress:!0,h=f.pageID+f.userID+(g?"compress":""),i=e[h];i||(i={user:f.userID,page_id:f.pageID,posts:[],snappy:g},e[h]=i,a.push(i));f.status=k;i.posts.push(d);b.push(d);return c&&f.retry})},_resetPostStatus:function(a){a.__meta.status=j},_store:function(a){a=s._getStorage();b("ErrorUtils").applyWithGuard(a.store,a)},_restore:function(a){a=s._getStorage();b("ErrorUtils").applyWithGuard(a.restore,a);s._schedule(g.config.RESTORE_WAIT||b("BanzaiConsts").VITAL_WAIT)},_wrapData:function(a,b,c,d){a=[a,b,c,0];a.__meta={pageID:s._getPageId(),userID:s._getUserId(),retry:d===!0,status:j};return a},_tryToSendViaBeacon:function(){__p&&__p();if(!(navigator&&navigator.sendBeacon&&g.isOkToSendViaBeacon()))return!1;var b=[],c=[];o=s._gatherWadsAndPostsFromBuffer(b,c,!1,o);if(b.length<=0)return!1;b[0].send_method="beacon";b.map(g.prepWadForTransit);b=new Blob([g.addRequestAuthData(g.prepForTransit(b))],{type:"application/x-www-form-urlencoded"});b=a.navigator.sendBeacon(s.adapter.endpoint,b);if(!b){c.forEach(function(a){o.push(a)});o.push(s._wrapData(h,(b={},b[i]=[1],b),s._getEventTime()));return!1}return!0},_processCallbacksAndSendViaBeacon:function(){__p&&__p();var b=[];q.forEach(function(a){var c=a.cb();c.forEach(function(c){var d=a.route;if(d){d=s._wrapData(d,c,s._getEventTime());d.__meta.onSuccess=a.onSuccess;d.__meta.onFailure=a.onFailure;b.push(d)}})});q=[];var c=[],d=[];s._gatherWadsAndPostsFromBuffer(c,d,!0,b);if(c.length>0){c[0].send_method="beacon";c.map(g.prepWadForTransit);c=new Blob([g.addRequestAuthData(g.prepForTransit(c))],{type:"application/x-www-form-urlencoded"});c=a.navigator.sendBeacon(s.adapter.endpoint,c);c?d.forEach(function(a){return a.__meta&&a.__meta.onSuccess&&a.__meta.onSuccess()}):d.forEach(function(a){return a.__meta&&a.__meta.onFailure&&a.__meta.onFailure()})}},_unload:function(){navigator&&navigator.sendBeacon&&g.isOkToSendViaBeacon()&&s._processCallbacksAndSendViaBeacon(),g.cleanup(),g.inform(b("BanzaiConsts").SHUTDOWN),o.length>0&&((!s.adapter.useBeacon||!s._tryToSendViaBeacon())&&s._store(!1))},_getEventTime:function(){return Date.now()},_testState:function(){return{postBuffer:o,triggerRoute:p}},_getStorage:function(){return{store:function(){},restore:function(){},flush:function(){}}},_getPageId:function(){return"0"},_getUserId:function(){return"0"},_initialize:function(){}};e.exports=s}),null);
__d("BanzaiNew",["BanzaiBase","BanzaiConsts","BanzaiStreamPayloads","CurrentUser","ExecutionEnvironment","FBJSON","NavigationMetrics","SetIdleTimeoutAcrossTransitions","TimeSlice","Visibility","WebStorage","emptyFunction","isInIframe","lowerFacebookDomain","pageID","performanceAbsoluteNow","WebStorageMutex"],(function(a,b,c,d,e,f){__p&&__p();var g="bz:",h={_getStorage:b("BanzaiBase")._getStorage,_getPageId:b("BanzaiBase")._getPageId,_getUserId:b("BanzaiBase")._getUserId,_initialize:b("BanzaiBase")._initialize,_schedule:b("BanzaiBase")._schedule,flush:b("BanzaiBase").flush,_unload:b("BanzaiBase")._unload,post:b("BanzaiBase").post},i=b("isInIframe")(),j=null,k,l,m,n,o=!1;function p(){o||(o=!0,n=b("WebStorage").getLocalStorage());return n}function q(){var a="check_quota";try{var b=p();if(!b)return!1;b.setItem(a,a);b.removeItem(a);return!0}catch(a){return!1}}b("BanzaiBase")._getStorage=function(){__p&&__p();m||(!i?m={store:function(){var a=p();if(!a||b("BanzaiBase")._getPostBuffer().length<=0)return;var c=b("BanzaiBase")._getPostBuffer().map(function(a){return[a[0],a[1],a[2],a[3]||0,a.__meta]});b("BanzaiBase")._clearPostBuffer();b("WebStorage").setItemGuarded(a,g+b("pageID")+"."+b("BanzaiBase")._getEventTime(),b("FBJSON").stringify(c))},restore:function(){__p&&__p();var a=p();if(!a)return;var c=b("WebStorageMutex"),d=function(c){__p&&__p();var d=[];for(var e=0;e<a.length;e++){var f=a.key(e);f.indexOf(g)===0&&f.indexOf("bz:__")!==0&&d.push(f)}d.forEach(function(c){__p&&__p();var d=a.getItem(c);a.removeItem(c);if(!d)return;c=b("FBJSON").parse(d);c.forEach(function(a){if(!a)return;var c=a.__meta=a.pop(),d=b("BanzaiBase")._canSend(a);if(!d)return;d=b("CurrentUser").getID();(c.userID===d||d==="0")&&(b("BanzaiBase")._resetPostStatus(a),b("BanzaiBase")._getPostBuffer().push(a))})});c&&c.unlock()};q()?new c("banzai").lock(d):b("SetIdleTimeoutAcrossTransitions").start(d,0)},flush:function(){var a=p();if(a){j===null&&(j=parseInt(a.getItem(b("BanzaiConsts").LAST_STORAGE_FLUSH),10));var c=j&&b("performanceAbsoluteNow")()-j>=b("BanzaiConsts").STORAGE_FLUSH_INTERVAL;c&&b("BanzaiBase")._restore(!1);(c||!j)&&(j=b("performanceAbsoluteNow")(),b("WebStorage").setItemGuarded(a,b("BanzaiConsts").LAST_STORAGE_FLUSH,j.toString()))}}}:m={store:b("emptyFunction"),restore:b("emptyFunction"),flush:b("emptyFunction")});return m};b("BanzaiBase")._getPageId=function(){return b("pageID")};b("BanzaiBase")._getUserId=function(){return b("CurrentUser").getID()};b("BanzaiBase")._initialize=function(){b("ExecutionEnvironment").canUseDOM&&(b("BanzaiBase").adapter.useBeacon&&b("Visibility").isSupported()?(b("Visibility").addListener(b("Visibility").HIDDEN,function(){b("BanzaiBase")._getPostBuffer().length>0&&(b("BanzaiBase")._tryToSendViaBeacon()||b("BanzaiBase")._store(!1))}),(b("BanzaiBase").isEnabled("enable_client_logging_clear_on_visible")||b("BanzaiBase").isEnabled("error_impact_test"))&&b("Visibility").addListener(b("Visibility").VISIBLE,function(){b("BanzaiBase")._tryToSendViaBeacon()||b("BanzaiBase")._restore(!1)})):b("BanzaiBase").adapter.setHooks(b("BanzaiBase")),b("BanzaiBase").adapter.setUnloadHook(b("BanzaiBase")),b("NavigationMetrics").addListener(b("NavigationMetrics").Events.NAVIGATION_DONE,function(a,c){if(c.pageType!=="normal")return;b("BanzaiBase")._restore(!1);b("NavigationMetrics").removeCurrentListener()}))};b("BanzaiBase")._getEventTime=function(){return b("performanceAbsoluteNow")()};var r=b("TimeSlice").guard(function(){k=null,b("BanzaiBase")._sendWithCallbacks()},"Banzai.send",{propagationType:b("TimeSlice").PropagationType.ORPHAN});b("BanzaiBase")._schedule=function(a){__p&&__p();var c=b("BanzaiBase")._getEventTime()+a;if(!k||c<k){k=c;b("SetIdleTimeoutAcrossTransitions").clear(l);c=function(){l=b("SetIdleTimeoutAcrossTransitions").start(r,a)};c();return!0}return!1};b("BanzaiBase").flush=function(a,c){b("SetIdleTimeoutAcrossTransitions").clear(l),k=null,b("BanzaiBase")._sendWithCallbacks(a,c)};b("BanzaiBase")._unload=function(){b("BanzaiStreamPayloads").unload(b("BanzaiBase").post),h._unload()};b("BanzaiBase").post=function(c,d,e){__p&&__p();if(b("BanzaiBase").adapter.config.disabled)return;if(!b("ExecutionEnvironment").canUseDOM)return;if(i&&b("lowerFacebookDomain").isValidDocumentDomain()){var f;try{f=a.top.require("Banzai")}catch(a){f=null}if(f){f.post.apply(f,arguments);return}}h.post(c,d,e)};b("BanzaiBase")._initialize();e.exports=b("BanzaiBase")}),null);
__d("filterObject",[],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=Object.prototype.hasOwnProperty;function a(a,b,c){if(!a)return null;var d={};for(var e in a)g.call(a,e)&&b.call(c,a[e],e,a)&&(d[e]=a[e]);return d}e.exports=a}),null);
__d("BanzaiLogger",["Banzai"],(function(a,b,c,d,e,f){__p&&__p();var g="logger";function a(a){return{log:function(c,d){b("Banzai").post(h._getRoute(c),d,a)},logImmediately:function(a,c){b("Banzai").post(h._getRoute(a),c,{signal:!0})},registerToSendWithBeacon:function(a,c,d,e){b("Banzai").registerToSendWithBeacon(h._getRoute(a),c,d,e)},_getRoute:function(a){return g+":"+a}}}var h=a();h.create=a;e.exports=h}),null);
__d("cssVar",[],(function(a,b,c,d,e,f){function a(a){throw new Error('cssVar("'+a+'"): Unexpected class transformation.')}e.exports=a}),null);