(function(n){function v(e){var m=e||window.event,r=[].slice.call(arguments,1),b=0,v=0,u=0;e=n.event.fix(m);e.type="mousewheel";m.wheelDelta&&(b=m.wheelDelta/120);m.detail&&(b=-m.detail/3);u=b;void 0!==m.axis&&m.axis===m.HORIZONTAL_AXIS&&(u=0,v=-1*b);void 0!==m.wheelDeltaY&&(u=m.wheelDeltaY/120);void 0!==m.wheelDeltaX&&(v=-1*m.wheelDeltaX/120);r.unshift(e,b,v,u);return(n.event.dispatch||n.event.handle).apply(this,r)}var e=["DOMMouseScroll","mousewheel"];if(n.event.fixHooks)for(var u=e.length;u;)n.event.fixHooks[e[--u]]=
n.event.mouseHooks;n.event.special.mousewheel={setup:function(){if(this.addEventListener)for(var n=e.length;n;)this.addEventListener(e[--n],v,!1);else this.onmousewheel=v},teardown:function(){if(this.removeEventListener)for(var n=e.length;n;)this.removeEventListener(e[--n],v,!1);else this.onmousewheel=null}};n.fn.extend({mousewheel:function(e){return e?this.bind("mousewheel",e):this.trigger("mousewheel")},unmousewheel:function(e){return this.unbind("mousewheel",e)}})})(jQuery);
(function(n,v,e,u){var I=e("html"),m=e(n),r=e(v),b=e.fancybox=function(){b.open.apply(this,arguments)},D=navigator.userAgent.match(/msie/i),A=null,s=v.createTouch!==u,w=function(a){return a&&a.hasOwnProperty&&a instanceof e},t=function(a){return a&&"string"===e.type(a)},E=function(a){return t(a)&&0<a.indexOf("%")},q=function(a,d){var f=parseInt(a,10)||0;d&&E(a)&&(f*=b.getViewport()[d]/100);return Math.ceil(f)},x=function(a,b){return q(a,b)+"px"};e.extend(b,{version:"2.1.5",defaults:{padding:15,margin:20,
width:800,height:600,minWidth:100,minHeight:100,maxWidth:9999,maxHeight:9999,pixelRatio:1,autoSize:!0,autoHeight:!1,autoWidth:!1,autoResize:!0,autoCenter:!s,fitToView:!0,aspectRatio:!1,topRatio:0.5,leftRatio:0.5,scrolling:"auto",wrapCSS:"",arrows:!0,closeBtn:!0,closeClick:!1,nextClick:!1,mouseWheel:!0,autoPlay:!1,playSpeed:3E3,preload:3,modal:!1,loop:!0,ajax:{dataType:"html",headers:{"X-fancyBox":!0}},iframe:{scrolling:"auto",preload:!0},swf:{wmode:"transparent",allowfullscreen:"true",allowscriptaccess:"always"},
keys:{next:{13:"left",34:"up",39:"left",40:"up"},prev:{8:"right",33:"down",37:"right",38:"down"},close:[27],play:[32],toggle:[70]},direction:{next:"left",prev:"right"},scrollOutside:!0,index:0,type:null,href:null,content:null,title:null,tpl:{wrap:'<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',image:'<img class="fancybox-image" src="{href}" alt="" />',iframe:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen'+
(D?' allowtransparency="true"':"")+"></iframe>",error:'<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',closeBtn:'<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',next:'<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',prev:'<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'},openEffect:"fade",openSpeed:250,openEasing:"swing",openOpacity:!0,
openMethod:"zoomIn",closeEffect:"fade",closeSpeed:250,closeEasing:"swing",closeOpacity:!0,closeMethod:"zoomOut",nextEffect:"elastic",nextSpeed:250,nextEasing:"swing",nextMethod:"changeIn",prevEffect:"elastic",prevSpeed:250,prevEasing:"swing",prevMethod:"changeOut",helpers:{overlay:!0,title:!0},onCancel:e.noop,beforeLoad:e.noop,afterLoad:e.noop,beforeShow:e.noop,afterShow:e.noop,beforeChange:e.noop,beforeClose:e.noop,afterClose:e.noop},group:{},opts:{},previous:null,coming:null,current:null,isActive:!1,
isOpen:!1,isOpened:!1,wrap:null,skin:null,outer:null,inner:null,player:{timer:null,isActive:!1},ajaxLoad:null,imgPreload:null,transitions:{},helpers:{},open:function(a,d){if(a&&(e.isPlainObject(d)||(d={}),!1!==b.close(!0)))return e.isArray(a)||(a=w(a)?e(a).get():[a]),e.each(a,function(f,c){var l={},g,k,h,p,q;"object"===e.type(c)&&(c.nodeType&&(c=e(c)),w(c)?(l={href:c.data("fancybox-href")||c.attr("href"),title:c.data("fancybox-title")||c.attr("title"),isDom:!0,element:c},e.metadata&&e.extend(!0,l,
c.metadata())):l=c);g=d.href||l.href||(t(c)?c:null);k=d.title!==u?d.title:l.title||"";p=(h=d.content||l.content)?"html":d.type||l.type;!p&&l.isDom&&(p=c.data("fancybox-type"),p||(p=(p=c.prop("class").match(/fancybox\.(\w+)/))?p[1]:null));t(g)&&(p||(b.isImage(g)?p="image":b.isSWF(g)?p="swf":"#"===g.charAt(0)?p="inline":t(c)&&(p="html",h=c)),"ajax"===p&&(q=g.split(/\s+/,2),g=q.shift(),q=q.shift()));h||("inline"===p?g?h=e(t(g)?g.replace(/.*(?=#[^\s]+$)/,""):g):l.isDom&&(h=c):"html"===p?h=g:p||g||!l.isDom||
(p="inline",h=c));e.extend(l,{href:g,type:p,content:h,title:k,selector:q});a[f]=l}),b.opts=e.extend(!0,{},b.defaults,d),d.keys!==u&&(b.opts.keys=d.keys?e.extend({},b.defaults.keys,d.keys):!1),b.group=a,b._start(b.opts.index)},cancel:function(){var a=b.coming;a&&!1!==b.trigger("onCancel")&&(b.hideLoading(),b.ajaxLoad&&b.ajaxLoad.abort(),b.ajaxLoad=null,b.imgPreload&&(b.imgPreload.onload=b.imgPreload.onerror=null),a.wrap&&a.wrap.stop(!0,!0).trigger("onReset").remove(),b.coming=null,b.current||b._afterZoomOut(a))},
close:function(a){b.cancel();!1!==b.trigger("beforeClose")&&(b.unbindEvents(),b.isActive&&(b.isOpen&&!0!==a?(b.isOpen=b.isOpened=!1,b.isClosing=!0,e(".fancybox-item, .fancybox-nav").remove(),b.wrap.stop(!0,!0).removeClass("fancybox-opened"),b.transitions[b.current.closeMethod]()):(e(".fancybox-wrap").stop(!0).trigger("onReset").remove(),b._afterZoomOut())))},play:function(a){var d=function(){clearTimeout(b.player.timer)},f=function(){d();b.current&&b.player.isActive&&(b.player.timer=setTimeout(b.next,
b.current.playSpeed))},c=function(){d();r.unbind(".player");b.player.isActive=!1;b.trigger("onPlayEnd")};!0===a||!b.player.isActive&&!1!==a?b.current&&(b.current.loop||b.current.index<b.group.length-1)&&(b.player.isActive=!0,r.bind({"onCancel.player beforeClose.player":c,"onUpdate.player":f,"beforeLoad.player":d}),f(),b.trigger("onPlayStart")):c()},next:function(a){var d=b.current;d&&(t(a)||(a=d.direction.next),b.jumpto(d.index+1,a,"next"))},prev:function(a){var d=b.current;d&&(t(a)||(a=d.direction.prev),
b.jumpto(d.index-1,a,"prev"))},jumpto:function(a,d,f){var c=b.current;c&&(a=q(a),b.direction=d||c.direction[a>=c.index?"next":"prev"],b.router=f||"jumpto",c.loop&&(0>a&&(a=c.group.length+a%c.group.length),a%=c.group.length),c.group[a]!==u&&(b.cancel(),b._start(a)))},reposition:function(a,d){var f=b.current,c=f?f.wrap:null,l;c&&(l=b._getPosition(d),a&&"scroll"===a.type?(delete l.position,c.stop(!0,!0).animate(l,200)):(c.css(l),f.pos=e.extend({},f.dim,l)))},update:function(a){var d=a&&a.type,f=!d||
"orientationchange"===d;f&&(clearTimeout(A),A=null);b.isOpen&&!A&&(A=setTimeout(function(){var c=b.current;c&&!b.isClosing&&(b.wrap.removeClass("fancybox-tmp"),(f||"load"===d||"resize"===d&&c.autoResize)&&b._setDimension(),"scroll"===d&&c.canShrink||b.reposition(a),b.trigger("onUpdate"),A=null)},f&&!s?0:300))},toggle:function(a){b.isOpen&&(b.current.fitToView="boolean"===e.type(a)?a:!b.current.fitToView,s&&(b.wrap.removeAttr("style").addClass("fancybox-tmp"),b.trigger("onUpdate")),b.update())},hideLoading:function(){r.unbind(".loading");
e("#fancybox-loading").remove()},showLoading:function(){var a,d;b.hideLoading();a=e('<div id="fancybox-loading"><div></div></div>').click(b.cancel).appendTo("body");r.bind("keydown.loading",function(a){27===(a.which||a.keyCode)&&(a.preventDefault(),b.cancel())});b.defaults.fixed||(d=b.getViewport(),a.css({position:"absolute",top:0.5*d.h+d.y,left:0.5*d.w+d.x}))},getViewport:function(){var a=b.current&&b.current.locked||!1,d={x:m.scrollLeft(),y:m.scrollTop()};a?(d.w=a[0].clientWidth,d.h=a[0].clientHeight):
(d.w=s&&n.innerWidth?n.innerWidth:m.width(),d.h=s&&n.innerHeight?n.innerHeight:m.height());return d},unbindEvents:function(){b.wrap&&w(b.wrap)&&b.wrap.unbind(".fb");r.unbind(".fb");m.unbind(".fb")},bindEvents:function(){var a=b.current,d;a&&(m.bind("orientationchange.fb"+(s?"":" resize.fb")+(a.autoCenter&&!a.locked?" scroll.fb":""),b.update),(d=a.keys)&&r.bind("keydown.fb",function(f){var c=f.which||f.keyCode,l=f.target||f.srcElement;if(27===c&&b.coming)return!1;f.ctrlKey||f.altKey||f.shiftKey||f.metaKey||
l&&(l.type||e(l).is("[contenteditable]"))||e.each(d,function(d,l){if(1<a.group.length&&l[c]!==u)return b[d](l[c]),f.preventDefault(),!1;if(-1<e.inArray(c,l))return b[d](),f.preventDefault(),!1})}),e.fn.mousewheel&&a.mouseWheel&&b.wrap.bind("mousewheel.fb",function(d,c,l,g){for(var k=e(d.target||null),h=!1;k.length&&!(h||k.is(".fancybox-skin")||k.is(".fancybox-wrap"));)h=(h=k[0])&&!(h.style.overflow&&"hidden"===h.style.overflow)&&(h.clientWidth&&h.scrollWidth>h.clientWidth||h.clientHeight&&h.scrollHeight>
h.clientHeight),k=e(k).parent();0!==c&&!h&&1<b.group.length&&!a.canShrink&&(0<g||0<l?b.prev(0<g?"down":"left"):(0>g||0>l)&&b.next(0>g?"up":"right"),d.preventDefault())}))},trigger:function(a,d){var f,c=d||b.coming||b.current;if(c){e.isFunction(c[a])&&(f=c[a].apply(c,Array.prototype.slice.call(arguments,1)));if(!1===f)return!1;c.helpers&&e.each(c.helpers,function(d,f){if(f&&b.helpers[d]&&e.isFunction(b.helpers[d][a]))b.helpers[d][a](e.extend(!0,{},b.helpers[d].defaults,f),c)});r.trigger(a)}},isImage:function(a){return t(a)&&
a.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)},isSWF:function(a){return t(a)&&a.match(/\.(swf)((\?|#).*)?$/i)},_start:function(a){var d={},f,c;a=q(a);f=b.group[a]||null;if(!f)return!1;d=e.extend(!0,{},b.opts,f);f=d.margin;c=d.padding;"number"===e.type(f)&&(d.margin=[f,f,f,f]);"number"===e.type(c)&&(d.padding=[c,c,c,c]);d.modal&&e.extend(!0,d,{closeBtn:!1,closeClick:!1,nextClick:!1,arrows:!1,mouseWheel:!1,keys:null,helpers:{overlay:{closeClick:!1}}});d.autoSize&&
(d.autoWidth=d.autoHeight=!0);"auto"===d.width&&(d.autoWidth=!0);"auto"===d.height&&(d.autoHeight=!0);d.group=b.group;d.index=a;b.coming=d;if(!1===b.trigger("beforeLoad"))b.coming=null;else{c=d.type;f=d.href;if(!c)return b.coming=null,b.current&&b.router&&"jumpto"!==b.router?(b.current.index=a,b[b.router](b.direction)):!1;b.isActive=!0;if("image"===c||"swf"===c)d.autoHeight=d.autoWidth=!1,d.scrolling="visible";"image"===c&&(d.aspectRatio=!0);"iframe"===c&&s&&(d.scrolling="scroll");d.wrap=e(d.tpl.wrap).addClass("fancybox-"+
(s?"mobile":"desktop")+" fancybox-type-"+c+" fancybox-tmp "+d.wrapCSS).appendTo(d.parent||"body");e.extend(d,{skin:e(".fancybox-skin",d.wrap),outer:e(".fancybox-outer",d.wrap),inner:e(".fancybox-inner",d.wrap)});e.each(["Top","Right","Bottom","Left"],function(a,b){d.skin.css("padding"+b,x(d.padding[a]))});b.trigger("onReady");if("inline"===c||"html"===c){if(!d.content||!d.content.length)return b._error("content")}else if(!f)return b._error("href");"image"===c?b._loadImage():"ajax"===c?b._loadAjax():
"iframe"===c?b._loadIframe():b._afterLoad()}},_error:function(a){e.extend(b.coming,{type:"html",autoWidth:!0,autoHeight:!0,minWidth:0,minHeight:0,scrolling:"no",hasError:a,content:b.coming.tpl.error});b._afterLoad()},_loadImage:function(){var a=b.imgPreload=new Image;a.onload=function(){this.onload=this.onerror=null;b.coming.width=this.width/b.opts.pixelRatio;b.coming.height=this.height/b.opts.pixelRatio;b._afterLoad()};a.onerror=function(){this.onload=this.onerror=null;b._error("image")};a.src=b.coming.href;
!0!==a.complete&&b.showLoading()},_loadAjax:function(){var a=b.coming;b.showLoading();b.ajaxLoad=e.ajax(e.extend({},a.ajax,{url:a.href,error:function(a,f){b.coming&&"abort"!==f?b._error("ajax",a):b.hideLoading()},success:function(d,f){"success"===f&&(a.content=d,b._afterLoad())}}))},_loadIframe:function(){var a=b.coming,d=e(a.tpl.iframe.replace(/\{rnd\}/g,(new Date).getTime())).attr("scrolling",s?"auto":a.iframe.scrolling).attr("src",a.href);e(a.wrap).bind("onReset",function(){try{e(this).find("iframe").hide().attr("src",
"//about:blank").end().empty()}catch(a){}});a.iframe.preload&&(b.showLoading(),d.one("load",function(){e(this).data("ready",1);s||e(this).bind("load.fb",b.update);e(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show();b._afterLoad()}));a.content=d.appendTo(a.inner);a.iframe.preload||b._afterLoad()},_preloadImages:function(){var a=b.group,d=b.current,f=a.length,c=d.preload?Math.min(d.preload,f-1):0,e,g;for(g=1;g<=c;g+=1)e=a[(d.index+g)%f],"image"===e.type&&e.href&&((new Image).src=
e.href)},_afterLoad:function(){var a=b.coming,d=b.current,f,c,l,g,k;b.hideLoading();if(a&&!1!==b.isActive)if(!1===b.trigger("afterLoad",a,d))a.wrap.stop(!0).trigger("onReset").remove(),b.coming=null;else{d&&(b.trigger("beforeChange",d),d.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove());b.unbindEvents();f=a.content;c=a.type;l=a.scrolling;e.extend(b,{wrap:a.wrap,skin:a.skin,outer:a.outer,inner:a.inner,current:a,previous:d});g=a.href;switch(c){case "inline":case "ajax":case "html":a.selector?
f=e("<div>").html(f).find(a.selector):w(f)&&(f.data("fancybox-placeholder")||f.data("fancybox-placeholder",e('<div class="fancybox-placeholder"></div>').insertAfter(f).hide()),f=f.show().detach(),a.wrap.bind("onReset",function(){e(this).find(f).length&&f.hide().replaceAll(f.data("fancybox-placeholder")).data("fancybox-placeholder",!1)}));break;case "image":f=a.tpl.image.replace("{href}",g);break;case "swf":f='<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="'+
g+'"></param>',k="",e.each(a.swf,function(a,b){f+='<param name="'+a+'" value="'+b+'"></param>';k+=" "+a+'="'+b+'"'}),f+='<embed src="'+g+'" type="application/x-shockwave-flash" width="100%" height="100%"'+k+"></embed></object>"}w(f)&&f.parent().is(a.inner)||a.inner.append(f);b.trigger("beforeShow");a.inner.css("overflow","yes"===l?"scroll":"no"===l?"hidden":l);b._setDimension();b.reposition();b.isOpen=!1;b.coming=null;b.bindEvents();if(!b.isOpened)e(".fancybox-wrap").not(a.wrap).stop(!0).trigger("onReset").remove();
else if(d.prevMethod)b.transitions[d.prevMethod]();b.transitions[b.isOpened?a.nextMethod:a.openMethod]();b._preloadImages()}},_setDimension:function(){var a=b.getViewport(),d=0,f=!1,c=!1,f=b.wrap,l=b.skin,g=b.inner,k=b.current,c=k.width,h=k.height,p=k.minWidth,m=k.minHeight,n=k.maxWidth,r=k.maxHeight,v=k.scrolling,u=k.scrollOutside?k.scrollbarWidth:0,s=k.margin,t=q(s[1]+s[3]),w=q(s[0]+s[2]),A,y,G,B,z,F,D,C,H;f.add(l).add(g).width("auto").height("auto").removeClass("fancybox-tmp");s=q(l.outerWidth(!0)-
l.width());A=q(l.outerHeight(!0)-l.height());y=t+s;G=w+A;B=E(c)?(a.w-y)*q(c)/100:c;z=E(h)?(a.h-G)*q(h)/100:h;if("iframe"===k.type){if(H=k.content,k.autoHeight&&1===H.data("ready"))try{H[0].contentWindow.document.location&&(g.width(B).height(9999),F=H.contents().find("body"),u&&F.css("overflow-x","hidden"),z=F.outerHeight(!0))}catch(I){}}else if(k.autoWidth||k.autoHeight)g.addClass("fancybox-tmp"),k.autoWidth||g.width(B),k.autoHeight||g.height(z),k.autoWidth&&(B=g.width()),k.autoHeight&&(z=g.height()),
g.removeClass("fancybox-tmp");c=q(B);h=q(z);C=B/z;p=q(E(p)?q(p,"w")-y:p);n=q(E(n)?q(n,"w")-y:n);m=q(E(m)?q(m,"h")-G:m);r=q(E(r)?q(r,"h")-G:r);F=n;D=r;k.fitToView&&(n=Math.min(a.w-y,n),r=Math.min(a.h-G,r));y=a.w-t;w=a.h-w;k.aspectRatio?(c>n&&(c=n,h=q(c/C)),h>r&&(h=r,c=q(h*C)),c<p&&(c=p,h=q(c/C)),h<m&&(h=m,c=q(h*C))):(c=Math.max(p,Math.min(c,n)),k.autoHeight&&"iframe"!==k.type&&(g.width(c),h=g.height()),h=Math.max(m,Math.min(h,r)));if(k.fitToView)if(g.width(c).height(h),f.width(c+s),a=f.width(),t=f.height(),
k.aspectRatio)for(;(a>y||t>w)&&c>p&&h>m&&!(19<d++);)h=Math.max(m,Math.min(r,h-10)),c=q(h*C),c<p&&(c=p,h=q(c/C)),c>n&&(c=n,h=q(c/C)),g.width(c).height(h),f.width(c+s),a=f.width(),t=f.height();else c=Math.max(p,Math.min(c,c-(a-y))),h=Math.max(m,Math.min(h,h-(t-w)));u&&"auto"===v&&h<z&&c+s+u<y&&(c+=u);g.width(c).height(h);f.width(c+s);a=f.width();t=f.height();f=(a>y||t>w)&&c>p&&h>m;c=k.aspectRatio?c<F&&h<D&&c<B&&h<z:(c<F||h<D)&&(c<B||h<z);e.extend(k,{dim:{width:x(a),height:x(t)},origWidth:B,origHeight:z,
canShrink:f,canExpand:c,wPadding:s,hPadding:A,wrapSpace:t-l.outerHeight(!0),skinSpace:l.height()-h});!H&&k.autoHeight&&h>m&&h<r&&!c&&g.height("auto")},_getPosition:function(a){var d=b.current,f=b.getViewport(),c=d.margin,e=b.wrap.width()+c[1]+c[3],g=b.wrap.height()+c[0]+c[2],c={position:"absolute",top:c[0],left:c[3]};d.autoCenter&&d.fixed&&!a&&g<=f.h&&e<=f.w?c.position="fixed":d.locked||(c.top+=f.y,c.left+=f.x);c.top=x(Math.max(c.top,c.top+(f.h-g)*d.topRatio));c.left=x(Math.max(c.left,c.left+(f.w-
e)*d.leftRatio));return c},_afterZoomIn:function(){var a=b.current;a&&((b.isOpen=b.isOpened=!0,b.wrap.css("overflow","visible").addClass("fancybox-opened"),b.update(),(a.closeClick||a.nextClick&&1<b.group.length)&&b.inner.css("cursor","pointer").bind("click.fb",function(d){e(d.target).is("a")||e(d.target).parent().is("a")||(d.preventDefault(),b[a.closeClick?"close":"next"]())}),a.closeBtn&&e(a.tpl.closeBtn).appendTo(b.skin).bind("click.fb",function(a){a.preventDefault();b.close()}),a.arrows&&1<b.group.length&&
((a.loop||0<a.index)&&e(a.tpl.prev).appendTo(b.outer).bind("click.fb",b.prev),(a.loop||a.index<b.group.length-1)&&e(a.tpl.next).appendTo(b.outer).bind("click.fb",b.next)),b.trigger("afterShow"),a.loop||a.index!==a.group.length-1)?b.opts.autoPlay&&!b.player.isActive&&(b.opts.autoPlay=!1,b.play()):b.play(!1))},_afterZoomOut:function(a){a=a||b.current;e(".fancybox-wrap").trigger("onReset").remove();e.extend(b,{group:{},opts:{},router:!1,current:null,isActive:!1,isOpened:!1,isOpen:!1,isClosing:!1,wrap:null,
skin:null,outer:null,inner:null});b.trigger("afterClose",a)}});b.transitions={getOrigPosition:function(){var a=b.current,d=a.element,f=a.orig,c={},e=50,g=50,k=a.hPadding,h=a.wPadding,p=b.getViewport();!f&&a.isDom&&d.is(":visible")&&(f=d.find("img:first"),f.length||(f=d));w(f)?(c=f.offset(),f.is("img")&&(e=f.outerWidth(),g=f.outerHeight())):(c.top=p.y+(p.h-g)*a.topRatio,c.left=p.x+(p.w-e)*a.leftRatio);if("fixed"===b.wrap.css("position")||a.locked)c.top-=p.y,c.left-=p.x;return c={top:x(c.top-k*a.topRatio),
left:x(c.left-h*a.leftRatio),width:x(e+h),height:x(g+k)}},step:function(a,d){var f,c,e=d.prop;c=b.current;var g=c.wrapSpace,k=c.skinSpace;if("width"===e||"height"===e)f=d.end===d.start?1:(a-d.start)/(d.end-d.start),b.isClosing&&(f=1-f),c="width"===e?c.wPadding:c.hPadding,c=a-c,b.skin[e](q("width"===e?c:c-g*f)),b.inner[e](q("width"===e?c:c-g*f-k*f))},zoomIn:function(){var a=b.current,d=a.pos,f=a.openEffect,c="elastic"===f,l=e.extend({opacity:1},d);delete l.position;c?(d=this.getOrigPosition(),a.openOpacity&&
(d.opacity=0.1)):"fade"===f&&(d.opacity=0.1);b.wrap.css(d).animate(l,{duration:"none"===f?0:a.openSpeed,easing:a.openEasing,step:c?this.step:null,complete:b._afterZoomIn})},zoomOut:function(){var a=b.current,d=a.closeEffect,f="elastic"===d,c={opacity:0.1};f&&(c=this.getOrigPosition(),a.closeOpacity&&(c.opacity=0.1));b.wrap.animate(c,{duration:"none"===d?0:a.closeSpeed,easing:a.closeEasing,step:f?this.step:null,complete:b._afterZoomOut})},changeIn:function(){var a=b.current,d=a.nextEffect,f=a.pos,
c={opacity:1},e=b.direction,g;f.opacity=0.1;"elastic"===d&&(g="down"===e||"up"===e?"top":"left","down"===e||"right"===e?(f[g]=x(q(f[g])-200),c[g]="+=200px"):(f[g]=x(q(f[g])+200),c[g]="-=200px"));"none"===d?b._afterZoomIn():b.wrap.css(f).animate(c,{duration:a.nextSpeed,easing:a.nextEasing,complete:b._afterZoomIn})},changeOut:function(){var a=b.previous,d=a.prevEffect,f={opacity:0.1},c=b.direction;"elastic"===d&&(f["down"===c||"up"===c?"top":"left"]=("up"===c||"left"===c?"-":"+")+"=200px");a.wrap.animate(f,
{duration:"none"===d?0:a.prevSpeed,easing:a.prevEasing,complete:function(){e(this).trigger("onReset").remove()}})}};b.helpers.overlay={defaults:{closeClick:!0,speedOut:200,showEarly:!0,css:{},locked:!s,fixed:!0},overlay:null,fixed:!1,el:e("html"),create:function(a){a=e.extend({},this.defaults,a);this.overlay&&this.close();this.overlay=e('<div class="fancybox-overlay"></div>').appendTo(b.coming?b.coming.parent:a.parent);this.fixed=!1;a.fixed&&b.defaults.fixed&&(this.overlay.addClass("fancybox-overlay-fixed"),
this.fixed=!0)},open:function(a){var d=this;a=e.extend({},this.defaults,a);this.overlay?this.overlay.unbind(".overlay").width("auto").height("auto"):this.create(a);this.fixed||(m.bind("resize.overlay",e.proxy(this.update,this)),this.update());a.closeClick&&this.overlay.bind("click.overlay",function(a){if(e(a.target).hasClass("fancybox-overlay"))return b.isActive?b.close():d.close(),!1});this.overlay.css(a.css).show()},close:function(){var a,b;m.unbind("resize.overlay");this.el.hasClass("fancybox-lock")&&
(e(".fancybox-margin").removeClass("fancybox-margin"),a=m.scrollTop(),b=m.scrollLeft(),this.el.removeClass("fancybox-lock"),m.scrollTop(a).scrollLeft(b));e(".fancybox-overlay").remove().hide();e.extend(this,{overlay:null,fixed:!1})},update:function(){var a="100%",b;this.overlay.width(a).height("100%");D?(b=Math.max(v.documentElement.offsetWidth,v.body.offsetWidth),r.width()>b&&(a=r.width())):r.width()>m.width()&&(a=r.width());this.overlay.width(a).height(r.height())},onReady:function(a,b){var f=this.overlay;
e(".fancybox-overlay").stop(!0,!0);f||this.create(a);a.locked&&this.fixed&&b.fixed&&(f||(this.margin=r.height()>m.height()?e("html").css("margin-right").replace("px",""):!1),b.locked=this.overlay.append(b.wrap),b.fixed=!1);!0===a.showEarly&&this.beforeShow.apply(this,arguments)},beforeShow:function(a,b){var f,c;b.locked&&(!1!==this.margin&&(e("*").filter(function(){return"fixed"===e(this).css("position")&&!e(this).hasClass("fancybox-overlay")&&!e(this).hasClass("fancybox-wrap")}).addClass("fancybox-margin"),
this.el.addClass("fancybox-margin")),f=m.scrollTop(),c=m.scrollLeft(),this.el.addClass("fancybox-lock"),m.scrollTop(f).scrollLeft(c));this.open(a)},onUpdate:function(){this.fixed||this.update()},afterClose:function(a){this.overlay&&!b.coming&&this.overlay.fadeOut(a.speedOut,e.proxy(this.close,this))}};b.helpers.title={defaults:{type:"float",position:"bottom"},beforeShow:function(a){var d=b.current,f=d.title,c=a.type;e.isFunction(f)&&(f=f.call(d.element,d));if(t(f)&&""!==e.trim(f)){d=e('<div class="fancybox-title fancybox-title-'+
c+'-wrap">'+f+"</div>");switch(c){case "inside":c=b.skin;break;case "outside":c=b.wrap;break;case "over":c=b.inner;break;default:c=b.skin,d.appendTo("body"),D&&d.width(d.width()),d.wrapInner('<span class="child"></span>'),b.current.margin[2]+=Math.abs(q(d.css("margin-bottom")))}d["top"===a.position?"prependTo":"appendTo"](c)}}};e.fn.fancybox=function(a){var d,f=e(this),c=this.selector||"",l=function(g){var k=e(this).blur(),h=d,l,m;g.ctrlKey||g.altKey||g.shiftKey||g.metaKey||k.is(".fancybox-wrap")||
(l=a.groupAttr||"data-fancybox-group",m=k.attr(l),m||(l="rel",m=k.get(0)[l]),m&&""!==m&&"nofollow"!==m&&(k=c.length?e(c):f,k=k.filter("["+l+'="'+m+'"]'),h=k.index(this)),a.index=h,!1!==b.open(k,a)&&g.preventDefault())};a=a||{};d=a.index||0;c&&!1!==a.live?r.undelegate(c,"click.fb-start").delegate(c+":not('.fancybox-item, .fancybox-nav')","click.fb-start",l):f.unbind("click.fb-start").bind("click.fb-start",l);this.filter("[data-fancybox-start=1]").trigger("click");return this};r.ready(function(){var a,
d;e.scrollbarWidth===u&&(e.scrollbarWidth=function(){var a=e('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),b=a.children(),b=b.innerWidth()-b.height(99).innerWidth();a.remove();return b});e.support.fixedPosition===u&&(e.support.fixedPosition=function(){var a=e('<div style="position:fixed;top:20px;"></div>').appendTo("body"),b=20===a[0].offsetTop||15===a[0].offsetTop;a.remove();return b}());e.extend(b.defaults,{scrollbarWidth:e.scrollbarWidth(),fixed:e.support.fixedPosition,
parent:e("body")});a=e(n).width();I.addClass("fancybox-lock-test");d=e(n).width();I.removeClass("fancybox-lock-test");e("<style type='text/css'>.fancybox-margin{margin-right:"+(d-a)+"px;}</style>").appendTo("head")})})(window,document,jQuery);(function(n){n(document).ready(function(){var v={padding:0,openEffect:"elastic",closeEffect:"elastic"};"object"===typeof LumiFancyboxConfig&&n.extend(v,LumiFancyboxConfig);n("a[data-lumi-fancybox]").fancybox(v)})})(jQuery);
