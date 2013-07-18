
/*! h5ive:storage,usermedia,canvas,animationFrame | (c) Kyle Simpson | MIT License: http://getify.mit-license.org */
(function(e){e.h5={}})(this),function(e){if(!e)throw new Error("storage.h5ive: core.h5ive required.");e.storage=function(e){function i(e){var i,s;for(i in e)s={"h5ive:data":e[i]},r&&(s["h5ive:expires"]=r),t.setItem(i,JSON.stringify(s));return n}function s(e){Object.prototype.toString.call(e)!="[object Array]"&&(e=[e]);for(var r=0;r<e.length;r++)t.removeItem(e[r]);return n}function o(e){var n,r,i=[],s=(new Date).getTime();Object.prototype.toString.call(e)!=="[object Array]"&&(e=[e]);for(n=0;n<e.length;n++){r=i[e[n]]=t.getItem(e[n]);try{r=JSON.parse(r);if("h5ive:data"in r){if("h5ive:expires"in r&&s>=r["h5ive:expires"]){delete i[e[n]],t.removeItem(e[n]);continue}i[e[n]]=r["h5ive:data"]}}catch(o){}}if(e.length<2){if(e.length>0&&e[0]in i)return i[e[0]];return}return i}var t,n,r;return e=e||{},"expires"in e&&typeof e.expires=="number"&&e.expires>0&&(r=e.expires+(new Date).getTime()),e.expires=="session"?t=sessionStorage:t=localStorage,n={save:i,discard:s,get:o},n}}(this.h5);!function(a){if(!a)throw new Error("userMedia.h5ive: core.h5ive required.");var b=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia;a.userMedia=function(c,d,e){function l(b){if(g){if(g!==!0)throw new Error("Success callback already defined.");b.apply(a.userMedia,i)}else g=b;return f}function m(b){if(h){if(g!==!0)throw new Error("Failed callback already defined.");b.apply(a.userMedia,j)}else h=b;return f}function n(){window.webkitURL&&(arguments[0]=webkitURL.createObjectURL(arguments[0])),g&&"function"==typeof g?g.apply(a.userMedia,arguments):(g=!0,i=[].slice.call(arguments))}function o(){h&&"function"==typeof h?h.apply(a.userMedia,arguments):(h=!0,j=[].slice.call(arguments))}var f,g,h,k,i=[],j=[];if(g=d,h=e,b){for(idx in c)c.hasOwnProperty(idx)&&(k+=(""!=k?",":"")+idx);try{b.call(navigator,c,n,o)}catch(p){try{b.call(navigator,k,n,o)}catch(q){o("'getUserMedia' failed.")}}}else o("'getUserMedia' is not available.");return f={stream:l,failed:m}}}(this.h5);!function(a){if(!a)throw new Error("canvas.h5ive: core.h5ive required.");a.canvas=function(a){function i(){return c}function j(){return 0==arguments.length?d.clearRect(0,0,e,f):d.clearRect.apply(d,arguments),b}function k(a){return a=a||{},"composite"in a&&(d.globalCompositeOperation=a.composite),"alpha"in a&&(d.globalAlpha=a.alpha),a.stroke&&("width"in a.stroke&&(d.lineWidth=a.stroke.width),"caps"in a.stroke&&(d.lineCap=a.stroke.caps),"joints"in a.stroke&&(d.lineJoin=a.stroke.joints),"color"in a.stroke&&(d.strokeStyle=a.stroke.color),"miter"in a.stroke&&(d.miterLimit=a.stroke.miter)),a.fill&&"color"in a.fill&&(d.fillStyle=a.fill.color),a.shadow&&("offsetX"in a.shadow&&(d.shadowOffsetX=a.shadow.offsetX),"offsetY"in a.shadow&&(d.shadowOffsetY=a.shadow.offsetY),"blur"in a.shadow&&(d.shadowBlur=a.shadow.blur),"color"in a.shadow&&(d.shadowColor=a.shadow.color)),b}function l(a,c){if(g)throw new Error("A path is still currently being defined. End it first.");return d.beginPath(),null!=a&&null!=c&&d.moveTo(a,c),g=!0,b}function m(a){var c,e;if(!g)throw new Error("Segments need a path started first.");a=a||[];for(var f=0;f<a.length;f++)c=a[f],e=Object.keys(c)[0],e in h&&d[e].apply(d,c[e]);return b}function n(a){if(!g)throw new Error("No path currently active.");return a=a||{},a.close&&d.closePath(),a.fill&&d.fill(),a.stroke&&d.stroke(),g=!1,b}function o(a){return a=a||{},a.path?m([{rect:a.path}]):a.stroke?d.strokeRect.apply(d,a.stroke):a.fill&&d.fillRect.apply(d,a.fill),b}function p(a){return a=a||{},"translate"in a&&d.translate(a.translate.x,a.translate.y),"scale"in a&&d.scale(a.scale.x,a.scale.y),"rotate"in a&&d.rotate(a.rotate),b}function q(a,c){return d.moveTo(a,c),b}function r(){return d.save(),b}function s(){return d.restore(),b}function t(){return d.clip(),b}function u(b){var e,f;return b=b||{},b.bitmap?d.getImageData(b.bitmap.x,b.bitmap.y,b.bitmap.width,b.bitmap.height):b.dataURL?"x"in b.dataURL&&"y"in b.dataURL||"width"in b.dataURL&&"height"in b.dataURL?(e=document.createElement("canvas"),e.setAttribute("width",b.dataURL.width||a.width),e.setAttribute("height",b.dataURL.height||a.height),f=e.getContext("2d"),f.drawImage(c,b.dataURL.x,b.dataURL.y,b.dataURL.width||a.width,b.dataURL.height||a.height,0,0,b.dataURL.width||a.width,b.dataURL.height||a.height),e.toDataURL(b.dataURL.type)):c.toDataURL(b.dataURL.type):void 0}function v(a,c){var e;return c=c||{},c.bitmap?d.putImageData(a,c.bitmap.x||0,c.bitmap.y||0):c.dataURL&&(e=[a],"x"in c.dataURL&&"y"in c.dataURL&&e.push(c.dataURL.x,c.dataURL.y),"width"in c.dataURL&&"height"in c.dataURL&&e.push(c.dataURL.width,c.dataURL.height),"sx"in c.dataURL&&"sy"in c.dataURL&&"sWidth"in c.dataURL&&"sHeight"in c.dataURL&&"dx"in c.dataURL&&"dy"in c.dataURL&&"dWidth"in c.dataURL&&"dHeight"in c.dataURL&&e.push(c.dataURL.sx,c.dataURL.sy,c.dataURL.sWidth,c.dataURL.sHeight,c.dataURL.dx,c.dataURL.dy,c.dataURL.dWidth,c.dataURL.dHeight),d.drawImage.apply(d,e)),b}var b,c,d,e,f,g=!1,h={lineTo:1,arc:1,rect:1,quadraticCurveTo:1,bezierCurveTo:1};return a=a||{},a.width="width"in a?a.width:300,a.height="height"in a?a.height:150,a.matchDimensions="matchDimensions"in a?a.matchDimensions:!0,a.type="webgl"==a.type?"experimental-webgl":"2d",c=document.createElement("canvas"),c.setAttribute("width",a.width),c.setAttribute("height",a.height),a.matchDimensions&&(c.style.width=a.width+"px",c.style.height=a.height+"px"),d=c.getContext(a.type),b={__raw__:c,__raw__context__:d,element:i,clear:j,setStyles:k,startPath:l,defineSegments:m,endPath:n,rect:o,transform:p,shiftPathTo:q,pushState:r,popState:s,getImage:u,putImage:v,clip:t}}}(this.h5);!function(a){function f(){var a;do a=Math.floor(1e9*Math.random());while(a in e);return a}function g(a){var c=f();return e[c]=b(function(){delete e[c],a.apply(d,arguments)}),c}function h(a){var c;return c=g(function(){e[c]=b(function(){delete e[c],a.apply(d,arguments)})})}function i(a){return a in e&&(c(e[a]),delete e[a]),d}function j(){throw new Error("'requestAnimationFrame' not supported.")}if(!a)throw new Error("animationFrame.h5ive: core.h5ive required.");var d,b=window.requestAnimationFrame||window.msRequestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.oRequestAnimationFrame,c=window.cancelAnimationFrame||window.msCancelAnimationFrame||window.msCancelRequestAnimationFrame||window.mozCancelAnimationFrame||window.mozCancelRequestAnimationFrame||window.webkitCancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.oCancelAnimationFrame||window.oCancelRequestAnimationFrame,e={};d=b&&c?{queue:g,queueAfter:h,cancel:i}:{queue:j,queueAfter:j,cancel:j},a.animationFrame=d}(this.h5);

/*! asynquence
    v0.0.2 (c) Kyle Simpson
    MIT License: http://getify.mit-license.org
*/
!function(a){function d(a){return"undefined"!=typeof setImmediate?setImmediate(a):setTimeout(a,0)}function e(){function a(){function a(){clearTimeout(v),v=null,r.length=0,s.length=0,t.length=0,u.length=0}function b(){return p?e():(v||(v=d(e)),void 0)}function e(){var c,d;if(v=null,p)a();else if(o)for(;s.length;){c=s.shift();try{c.apply(c,u)}catch(e){u.push(e),e.stack&&u.push(e.stack),0===s.length&&console.error.apply(console,u)}}else if(q&&r.length>0){q=!1,c=r.shift(),d=t.slice(),t.length=0,d.unshift(f());try{c.apply(c,d)}catch(e){u.push(e),o=!0,b()}}}function f(){function a(){o||p||q||(q=!0,t.push.apply(t,arguments),u.length=0,b())}return a.fail=function(){o||p||q||(o=!0,t.length=0,u.push.apply(u,arguments),b())},a.abort=function(){o||p||(q=!1,p=!0,t.length=0,u.length=0,b())},a}function g(a,b){function e(){clearTimeout(v),v=r=s=u=null}function f(){return k?g():(v||(v=d(g)),void 0)}function g(){if(!(o||p||l)){var b,c=[];if(v=null,j)a.fail.apply(a,u),e();else if(k)a.abort(),e();else if(h()){for(l=!0,b=0;b<r.length;b++)c.push(s["m"+b]);a.apply(a,c),e()}}}function h(){if(!(o||p||j||k||l||0===r.length)){var a,b=!0;for(a=0;a<r.length;a++)if(null===r[a]){b=!1;break}return b}}function i(){function a(){if(!(o||p||j||k||l||r[b])){var a=c.call(arguments);s["m"+b]=a.length>1?a:a[0],r[b]=!0,f()}}var b=r.length;return a.fail=function(){o||p||j||k||l||r[b]||(j=!0,u=c.call(arguments),f())},a.abort=function(){o||p||j||k||l||(k=!0,g())},r[b]=null,a}var m,n,q,u,v,j=!1,k=!1,l=!1,r=[],s={};for(m=0;m<b.length&&!j&&!k;m++){n=t.slice(),n.unshift(i());try{b[m].apply(b[m],n)}catch(w){q=w,j=!0;break}}q&&a.fail(q)}function h(){return o||p?w:(arguments.length>0&&r.push.apply(r,arguments),b(),w)}function i(){return p?w:(s.push.apply(s,arguments),b(),w)}function j(){if(o||p||0===arguments.length)return w;var a=c.apply(arguments);return h(function(b){g(b,a)}),w}function k(){if(o||p||0===arguments.length)return w;var a,b=c.call(arguments);for(a=0;a<b.length;a++)!function(a){h(function(b){var d=c.call(arguments,1);a.apply(a,d),b()}).or(a.fail)}(b[a]);return w}function l(){if(o||p||0===arguments.length)return w;var a,b=c.call(arguments);for(a=0;a<b.length;a++)!function(a){h(function(b){var d=c.call(arguments,1);a.apply(a,d).pipe(b)})}(b[a]);return w}function m(){if(o||p||0===arguments.length)return w;var a,b=c.call(arguments);for(a=0;a<b.length;a++)!function(a){h(function(b){var d=c.call(arguments,1);b(a.apply(a,d))})}(b[a]);return w}function n(){return o?w:(p=!0,e(),w)}var v,o=!1,p=!1,q=!0,r=[],s=[],t=[],u=[],w={then:h,or:i,gate:j,pipe:k,seq:l,val:m,abort:n};return arguments.length>0&&w.then.apply(w,arguments),w}return a}var b=a.ASQ,c=Array.prototype.slice;a.ASQ=e(),a.ASQ.noConflict=function(){var c=a.ASQ;return a.ASQ=b,c}}(this);

// parseUri 1.2.2
// (c) Steven Levithan <stevenlevithan.com>
// MIT License
// From: http://blog.stevenlevithan.com/archives/parseuri
function parseUri(a){for(var b=parseUri.options,c=b.parser[b.strictMode?"strict":"loose"].exec(a),d={},e=14;e--;)d[b.key[e]]=c[e]||"";return d[b.q.name]={},d[b.key[12]].replace(b.q.parser,function(a,c,e){c&&(d[b.q.name][c]=e)}),d}parseUri.options={strictMode:!1,key:["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],q:{name:"queryKey",parser:/(?:^|&)([^&=]*)=?([^&]*)/g},parser:{strict:/^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,loose:/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/}};

// various non-ES5 polyfills
Object.keys||(Object.keys=function(a){var b,c;for(b in a)a.hasOwnProperty(b)&&c.push(b);return c});
Array.isArray||(Array.isArray=function(e){return Object.prototype.toString.call(e)==="[object Array]"});
Array.prototype.filter||(Array.prototype.filter=function(a){for(var b=Object(this),c=b.length>>>0,d=[],e=arguments[1],f=0;c>f;f++)if(f in b){var g=b[f];a.call(e,g,f,b)&&d.push(g)}return d});
Array.prototype.forEach||(Array.prototype.forEach=function(a,b){for(var c=0,d=this.length;d>c;++c)a.call(b,this[c],c,this)});
Array.prototype.some||(Array.prototype.some=function(a){"use strict";if(null==this)throw new TypeError;var b=Object(this),c=b.length>>>0;if("function"!=typeof a)throw new TypeError;for(var d=arguments[1],e=0;c>e;e++)if(e in b&&a.call(d,b[e],e,b))return!0;return!1});
Array.prototype.every||(Array.prototype.every=function(a){"use strict";if(null==this)throw new TypeError;var b=Object(this),c=b.length>>>0;if("function"!=typeof a)throw new TypeError;for(var d=arguments[1],e=0;c>e;e++)if(e in b&&!a.call(d,b[e],e,b))return!1;return!0});
Date.now||(Date.now=function(){return+new Date});
String.prototype.trim||(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")});

// my own "hopefills"
Object.values||(Object.values=function(e){var t,n=[];for(t in e)n.push(e[t]);return n});
JSON.clone||(JSON.clone=function(a){return JSON.parse(JSON.stringify(a))});
// wraps Error.prototype.toString() to output the `.stack` property, if available
!function(){var a=Error.prototype.toString;Error.prototype.toString=function(){var b;return this.stack?(b=(this.stack+"").replace(new RegExp(this.name+": "+this.message+"\n"),""),this.name+": "+this.message+"\n"+b):a.call(this)}}();



// *********************************************************

(function(global){

	function doLogin() {
		$.ajax({
			url: SERVER + "/login",
			type: "POST",
			contentType: "application/json",
			dataType: "json",
			cache: false,
			data: JSON.stringify({
				first_name: $("#first_name").val(),
				email: $("#email").val()
			}),
			success: loginSuccess,
			error: function() {
				alert("Error logging in. Try again!");
			}
		});
	}

	function loginSuccess(resp) {
		user_id = resp.user_id;
		first_name = resp.first_name;
		email = resp.email;

		// save login info to sessionStorage, if possible
		if (session_storage_available) {
			app_session.save({
				user_id: user_id,
				first_name: first_name,
				email: email
			});
		}

		loggedIn();
	}

	function loggedIn() {
		$("#loginentry").hide();
		$("#logout, #leaderboard").show();
	}

	function doLogout() {
		user_id = first_name = email = null;

		// discard sessionStorage data, if any
		if (session_storage_available) {
			app_session.discard(["user_id","first_name","email"]);
		}
		
		loggedOut();
	}

	function loggedOut() {
		$("#loginentry").show();
		$("#logout, #captureme, #game, #leaderboard").hide();
	}

	function init() {
		$(document).ready(function(){
			$("#login").click(doLogin);
			$("#logout").click(doLogout);

			if (user_id) {
				loggedIn();
			}
			else {
				loggedOut();
			}
		});
	}

	var user_id,
		first_name,
		email,

		app_session,

		// feature test for sessionStorage
		session_storage_available = (function(test) {
			try {
				sessionStorage.setItem(test, test);
				sessionStorage.removeItem(test);
				return true;
			}
			catch (err) {
				return false;
			}
		})("unnamed"),

		SERVER = "http://localhost:8005"
	;

	// do we have sessionStorage available?
	if (session_storage_available) {
		app_session = h5.storage({ expires: "session" });

		// pull login session info from sessionStorage
		user_id = app_session.get("user_id");
		first_name = app_session.get("first_name");
		email = app_session.get("email");
	}

	global.unnamed = {
		init: init
	};

})(window);
