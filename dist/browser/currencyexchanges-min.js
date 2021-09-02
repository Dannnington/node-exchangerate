!function o(n,i,s){function a(e,t){if(!i[e]){if(!n[e]){var r="function"==typeof require&&require;if(!t&&r)return r(e,!0);if(u)return u(e,!0);throw(r=new Error("Cannot find module '"+e+"'")).code="MODULE_NOT_FOUND",r}r=i[e]={exports:{}},n[e][0].call(r.exports,function(t){return a(n[e][1][t]||t)},r,r.exports,o,n,i,s)}return i[e].exports}for(var u="function"==typeof require&&require,t=0;t<s.length;t++)a(s[t]);return a}({1:[function(s,t,a){!function(i){!function(){"use strict";var t=this&&this.__awaiter||function(t,s,a,u){return new(a=a||Promise)(function(r,e){function o(t){try{i(u.next(t))}catch(t){e(t)}}function n(t){try{i(u.throw(t))}catch(t){e(t)}}function i(t){var e;t.done?r(t.value):((e=t.value)instanceof a?e:new a(function(t){t(e)})).then(o,n)}i((u=u.apply(t,s||[])).next())})},e=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(a,"__esModule",{value:!0});const n=e(s("cross-fetch")),r=e(s("url-parse"));class o{constructor(t={url:"https://api.exchangerate.host",primaryCurrency:"USD"}){this.url=(0,r.default)(t.url).protocol+"//"+(0,r.default)(t.url).host,this.primaryCurrency=t.primaryCurrency,"//"!==this.url&&void 0!==this.url&&null!==this.url||(this.url="https://api.exchangerate.host"),"//"!==this.primaryCurrency&&void 0!==this.primaryCurrency&&null!==this.primaryCurrency||(this.primaryCurrency="USD")}getExchangeRate(e="GBP",r=this.primaryCurrency){return t(this,void 0,void 0,function*(){if("string"!=typeof e)throw new TypeError("Expected type is string:ISO4217. Type is: "+typeof e);var t=yield(0,n.default)(`${this.url}/convert?from=${e}&to=${r}`).then(t=>t.json()).catch(()=>"falseError");if("falseError"===t)throw new Error("An error occurred while fetching the exchange rate");if(null===t.info.rate)throw new Error("An error occured while fetching the exchange rate: an invalid currency was entered, or no data is currently available");return t.info.rate})}getHistoricalRates(e,r,o){return t(this,void 0,void 0,function*(){if(!Array.isArray(e))throw new TypeError("Expected type is array:ISO4217. Type is: "+typeof e);if("object"!=typeof r)throw new TypeError("Expected type is object:Date. Type is: "+typeof r);if("object"!=typeof o)throw new TypeError("Expected type is object:Date. Type is: "+typeof o);var t=yield(0,n.default)(`${this.url}/timeseries?base=${this.primaryCurrency}&start_date=${r.toISOString()}&end_date=${o.toISOString()}&symbols=${e.join(",")}`).then(t=>t.json()).catch(()=>"falseError");if("falseError"===t)throw new Error("An error occurred while fetching historical exchange rates");if(null===t.rates)throw new Error("An error occured while fetching historical exchange rates: an invalid currency was entered, or no data is currently available");return t.rates})}getFluctuations(e,r,o){return t(this,void 0,void 0,function*(){if(!Array.isArray(e))throw new TypeError("Expected type is array:ISO4217. Type is: "+typeof e);if("object"!=typeof r)throw new TypeError("Expected type is object:Date. Type is: "+typeof r);if("object"!=typeof o)throw new TypeError("Expected type is object:Date. Type is: "+typeof o);var t=yield(0,n.default)(`${this.url}/fluctuation?base=${this.primaryCurrency}&start_date=${r.toISOString().split("T")[0]}&end_date=${o.toISOString().split("T")[0]}&symbols=${e.join(",")}`).then(t=>t.json()).catch(()=>"falseError");if("falseError"===t)throw new Error("An error occurred while fetching fluctuation data");if(null===t.rates)throw new Error("An error occured while fetching fluctuation data: an invalid currency was entered, or no data is currently available");return t.rates})}getBulkExchangeRates(e){return t(this,void 0,void 0,function*(){if(!Array.isArray(e))throw new TypeError("Expected type is array:ISO4217. Type is: "+typeof e);var t=yield(0,n.default)(`${this.url}/latest?base=${this.primaryCurrency}&symbols=${e.join(",")}`).then(t=>t.json()).catch(()=>"falseError");if("falseError"===t)throw new Error("An error occurred while fetching historical exchange rates");if(null===t.rates)throw new Error("An error occured while fetching historical exchange rates: an invalid currency was entered, or no data is currently available");return t.rates})}getISO4217Codes(){return t(this,void 0,void 0,function*(){var t=yield(0,n.default)(`${this.url}/symbols`).then(t=>t.json()).catch(()=>"falseError");if("falseError"===t)throw new Error("An error occurred while fetching ISO 4217 codes");return t.symbols})}}a.default=o,i.NodeExr=o}.call(this)}.call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"cross-fetch":2,"url-parse":5}],2:[function(t,e,r){var A,o="undefined"!=typeof self?self:this,n=(i.prototype=o,new i);function i(){this.fetch=!1,this.DOMException=o.DOMException}A=n,function(a){var e,r,o="URLSearchParams"in A,n="Symbol"in A&&"iterator"in Symbol,u="FileReader"in A&&"Blob"in A&&function(){try{return new Blob,!0}catch(t){return!1}}(),i="FormData"in A,s="ArrayBuffer"in A;function c(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function h(t){return t="string"!=typeof t?String(t):t}function t(e){var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return n&&(t[Symbol.iterator]=function(){return t}),t}function l(e){this.map={},e instanceof l?e.forEach(function(t,e){this.append(e,t)},this):Array.isArray(e)?e.forEach(function(t){this.append(t[0],t[1])},this):e&&Object.getOwnPropertyNames(e).forEach(function(t){this.append(t,e[t])},this)}function f(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function p(r){return new Promise(function(t,e){r.onload=function(){t(r.result)},r.onerror=function(){e(r.error)}})}function y(t){var e=new FileReader,r=p(e);return e.readAsArrayBuffer(t),r}function d(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function w(){return this.bodyUsed=!1,this._initBody=function(t){var e;(this._bodyInit=t)?"string"==typeof t?this._bodyText=t:u&&Blob.prototype.isPrototypeOf(t)?this._bodyBlob=t:i&&FormData.prototype.isPrototypeOf(t)?this._bodyFormData=t:o&&URLSearchParams.prototype.isPrototypeOf(t)?this._bodyText=t.toString():s&&u&&((e=t)&&DataView.prototype.isPrototypeOf(e))?(this._bodyArrayBuffer=d(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):s&&(ArrayBuffer.prototype.isPrototypeOf(t)||r(t))?this._bodyArrayBuffer=d(t):this._bodyText=t=Object.prototype.toString.call(t):this._bodyText="",this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):o&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},u&&(this.blob=function(){var t=f(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?f(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(y)}),this.text=function(){var t,e,r=f(this);if(r)return r;if(this._bodyBlob)return t=this._bodyBlob,e=new FileReader,r=p(e),e.readAsText(t),r;if(this._bodyArrayBuffer)return Promise.resolve(function(t){for(var e=new Uint8Array(t),r=new Array(e.length),o=0;o<e.length;o++)r[o]=String.fromCharCode(e[o]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},i&&(this.formData=function(){return this.text().then(g)}),this.json=function(){return this.text().then(JSON.parse)},this}s&&(e=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],r=ArrayBuffer.isView||function(t){return t&&-1<e.indexOf(Object.prototype.toString.call(t))}),l.prototype.append=function(t,e){t=c(t),e=h(e);var r=this.map[t];this.map[t]=r?r+", "+e:e},l.prototype.delete=function(t){delete this.map[c(t)]},l.prototype.get=function(t){return t=c(t),this.has(t)?this.map[t]:null},l.prototype.has=function(t){return this.map.hasOwnProperty(c(t))},l.prototype.set=function(t,e){this.map[c(t)]=h(e)},l.prototype.forEach=function(t,e){for(var r in this.map)this.map.hasOwnProperty(r)&&t.call(e,this.map[r],r,this)},l.prototype.keys=function(){var r=[];return this.forEach(function(t,e){r.push(e)}),t(r)},l.prototype.values=function(){var e=[];return this.forEach(function(t){e.push(t)}),t(e)},l.prototype.entries=function(){var r=[];return this.forEach(function(t,e){r.push([e,t])}),t(r)},n&&(l.prototype[Symbol.iterator]=l.prototype.entries);var b=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function m(t,e){var r,o=(e=e||{}).body;if(t instanceof m){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new l(t.headers)),this.method=t.method,this.mode=t.mode,this.signal=t.signal,o||null==t._bodyInit||(o=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"same-origin",!e.headers&&this.headers||(this.headers=new l(e.headers)),this.method=(r=e.method||this.method||"GET",t=r.toUpperCase(),-1<b.indexOf(t)?t:r),this.mode=e.mode||this.mode||null,this.signal=e.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&o)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(o)}function g(t){var r=new FormData;return t.trim().split("&").forEach(function(t){var e;t&&(t=(e=t.split("=")).shift().replace(/\+/g," "),e=e.join("=").replace(/\+/g," "),r.append(decodeURIComponent(t),decodeURIComponent(e)))}),r}function v(t,e){e=e||{},this.type="default",this.status=void 0===e.status?200:e.status,this.ok=200<=this.status&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new l(e.headers),this.url=e.url||"",this._initBody(t)}m.prototype.clone=function(){return new m(this,{body:this._bodyInit})},w.call(m.prototype),w.call(v.prototype),v.prototype.clone=function(){return new v(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new l(this.headers),url:this.url})},v.error=function(){var t=new v(null,{status:0,statusText:""});return t.type="error",t};var E=[301,302,303,307,308];v.redirect=function(t,e){if(-1===E.indexOf(e))throw new RangeError("Invalid status code");return new v(null,{status:e,headers:{location:t}})},a.DOMException=A.DOMException;try{new a.DOMException}catch(t){a.DOMException=function(t,e){this.message=t,this.name=e;t=Error(t);this.stack=t.stack},a.DOMException.prototype=Object.create(Error.prototype),a.DOMException.prototype.constructor=a.DOMException}function x(i,s){return new Promise(function(o,t){var e=new m(i,s);if(e.signal&&e.signal.aborted)return t(new a.DOMException("Aborted","AbortError"));var n=new XMLHttpRequest;function r(){n.abort()}n.onload=function(){var r,t={status:n.status,statusText:n.statusText,headers:(e=n.getAllResponseHeaders()||"",r=new l,e.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach(function(t){var e=t.split(":"),t=e.shift().trim();t&&(e=e.join(":").trim(),r.append(t,e))}),r)};t.url="responseURL"in n?n.responseURL:t.headers.get("X-Request-URL");var e="response"in n?n.response:n.responseText;o(new v(e,t))},n.onerror=function(){t(new TypeError("Network request failed"))},n.ontimeout=function(){t(new TypeError("Network request failed"))},n.onabort=function(){t(new a.DOMException("Aborted","AbortError"))},n.open(e.method,e.url,!0),"include"===e.credentials?n.withCredentials=!0:"omit"===e.credentials&&(n.withCredentials=!1),"responseType"in n&&u&&(n.responseType="blob"),e.headers.forEach(function(t,e){n.setRequestHeader(e,t)}),e.signal&&(e.signal.addEventListener("abort",r),n.onreadystatechange=function(){4===n.readyState&&e.signal.removeEventListener("abort",r)}),n.send(void 0===e._bodyInit?null:e._bodyInit)})}x.polyfill=!0,A.fetch||(A.fetch=x,A.Headers=l,A.Request=m,A.Response=v),a.Headers=l,a.Request=m,a.Response=v,a.fetch=x,Object.defineProperty(a,"__esModule",{value:!0})}({}),n.fetch.ponyfill=!0,delete n.fetch.polyfill;(r=n.fetch).default=n.fetch,r.fetch=n.fetch,r.Headers=n.Headers,r.Request=n.Request,r.Response=n.Response,e.exports=r},{}],3:[function(t,e,r){"use strict";var i=Object.prototype.hasOwnProperty;function s(t){try{return decodeURIComponent(t.replace(/\+/g," "))}catch(t){return null}}function a(t){try{return encodeURIComponent(t)}catch(t){return null}}r.stringify=function(t,e){var r,o,n=[];for(o in"string"!=typeof(e=e||"")&&(e="?"),t)i.call(t,o)&&((r=t[o])||null!=r&&!isNaN(r)||(r=""),o=a(o),r=a(r),null!==o&&null!==r&&n.push(o+"="+r));return n.length?e+n.join("&"):""},r.parse=function(t){for(var e=/([^=?#&]+)=?([^&]*)/g,r={};n=e.exec(t);){var o=s(n[1]),n=s(n[2]);null===o||null===n||o in r||(r[o]=n)}return r}},{}],4:[function(t,e,r){"use strict";e.exports=function(t,e){if(e=e.split(":")[0],!(t=+t))return!1;switch(e){case"http":case"ws":return 80!==t;case"https":case"wss":return 443!==t;case"ftp":return 21!==t;case"gopher":return 70!==t;case"file":return!1}return 0!==t}},{}],5:[function(t,r,e){!function(s){!function(){"use strict";var f=t("requires-port"),p=t("querystringify"),n=/^[A-Za-z][A-Za-z0-9+-.]*:\/\//,a=/^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i,y=/^[a-zA-Z]:/,e=new RegExp("^[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]+");function d(t){return(t||"").toString().replace(e,"")}var w=[["#","hash"],["?","query"],function(t,e){return m(e.protocol)?t.replace(/\\/g,"/"):t},["/","pathname"],["@","auth",1],[NaN,"host",void 0,1,1],[/:(\d+)$/,"port",void 0,1],[NaN,"hostname",void 0,1,1]],i={hash:1,query:1};function b(t){var e,r="undefined"!=typeof window?window:void 0!==s?s:"undefined"!=typeof self?self:{},r=r.location||{},o={},r=typeof(t=t||r);if("blob:"===t.protocol)o=new v(unescape(t.pathname),{});else if("string"==r)for(e in o=new v(t,{}),i)delete o[e];else if("object"==r){for(e in t)e in i||(o[e]=t[e]);void 0===o.slashes&&(o.slashes=n.test(t.href))}return o}function m(t){return"file:"===t||"ftp:"===t||"http:"===t||"https:"===t||"ws:"===t||"wss:"===t}function g(t,e){t=d(t),e=e||{};var r,o=a.exec(t),n=o[1]?o[1].toLowerCase():"",i=!!o[2],s=!!o[3],t=0;return i?t=s?(r=o[2]+o[3]+o[4],o[2].length+o[3].length):(r=o[2]+o[4],o[2].length):s?(r=o[3]+o[4],t=o[3].length):r=o[4],"file:"===n?2<=t&&(r=r.slice(2)):m(n)?r=o[4]:n?i&&(r=r.slice(2)):2<=t&&m(e.protocol)&&(r=o[4]),{protocol:n,slashes:i||m(n),slashesCount:t,rest:r}}function v(t,e,r){if(t=d(t),!(this instanceof v))return new v(t,e,r);var o,n,i,s,a,u=w.slice(),c=typeof e,h=this,l=0;for("object"!=c&&"string"!=c&&(r=e,e=null),r&&"function"!=typeof r&&(r=p.parse),o=!(c=g(t||"",e=b(e))).protocol&&!c.slashes,h.slashes=c.slashes||o&&e.slashes,h.protocol=c.protocol||e.protocol||"",t=c.rest,("file:"===c.protocol&&(2!==c.slashesCount||y.test(t))||!c.slashes&&(c.protocol||c.slashesCount<2||!m(h.protocol)))&&(u[3]=[/(.*)/,"pathname"]);l<u.length;l++)"function"!=typeof(i=u[l])?(n=i[0],a=i[1],n!=n?h[a]=t:"string"==typeof n?~(s=t.indexOf(n))&&(t="number"==typeof i[2]?(h[a]=t.slice(0,s),t.slice(s+i[2])):(h[a]=t.slice(s),t.slice(0,s))):(s=n.exec(t))&&(h[a]=s[1],t=t.slice(0,s.index)),h[a]=h[a]||o&&i[3]&&e[a]||"",i[4]&&(h[a]=h[a].toLowerCase())):t=i(t,h);r&&(h.query=r(h.query)),o&&e.slashes&&"/"!==h.pathname.charAt(0)&&(""!==h.pathname||""!==e.pathname)&&(h.pathname=function(t,e){if(""===t)return e;for(var r=(e||"/").split("/").slice(0,-1).concat(t.split("/")),o=r.length,t=r[o-1],n=!1,i=0;o--;)"."===r[o]?r.splice(o,1):".."===r[o]?(r.splice(o,1),i++):i&&(0===o&&(n=!0),r.splice(o,1),i--);return n&&r.unshift(""),"."!==t&&".."!==t||r.push(""),r.join("/")}(h.pathname,e.pathname)),"/"!==h.pathname.charAt(0)&&m(h.protocol)&&(h.pathname="/"+h.pathname),f(h.port,h.protocol)||(h.host=h.hostname,h.port=""),h.username=h.password="",h.auth&&(i=h.auth.split(":"),h.username=i[0]||"",h.password=i[1]||""),h.origin="file:"!==h.protocol&&m(h.protocol)&&h.host?h.protocol+"//"+h.host:"null",h.href=h.toString()}v.prototype={set:function(t,e,r){var o,n=this;switch(t){case"query":"string"==typeof e&&e.length&&(e=(r||p.parse)(e)),n[t]=e;break;case"port":n[t]=e,f(e,n.protocol)?e&&(n.host=n.hostname+":"+e):(n.host=n.hostname,n[t]="");break;case"hostname":n[t]=e,n.port&&(e+=":"+n.port),n.host=e;break;case"host":n[t]=e,/:\d+$/.test(e)?(e=e.split(":"),n.port=e.pop(),n.hostname=e.join(":")):(n.hostname=e,n.port="");break;case"protocol":n.protocol=e.toLowerCase(),n.slashes=!r;break;case"pathname":case"hash":e?(o="pathname"===t?"/":"#",n[t]=e.charAt(0)!==o?o+e:e):n[t]=e;break;default:n[t]=e}for(var i=0;i<w.length;i++){var s=w[i];s[4]&&(n[s[1]]=n[s[1]].toLowerCase())}return n.origin="file:"!==n.protocol&&m(n.protocol)&&n.host?n.protocol+"//"+n.host:"null",n.href=n.toString(),n},toString:function(t){t&&"function"==typeof t||(t=p.stringify);var e=this,r=e.protocol;return r&&":"!==r.charAt(r.length-1)&&(r+=":"),r+=e.slashes||m(e.protocol)?"//":"",e.username&&(r+=e.username,e.password&&(r+=":"+e.password),r+="@"),r+=e.host+e.pathname,(t="object"==typeof e.query?t(e.query):e.query)&&(r+="?"!==t.charAt(0)?"?"+t:t),e.hash&&(r+=e.hash),r}},v.extractProtocol=g,v.location=b,v.trimLeft=d,v.qs=p,r.exports=v}.call(this)}.call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{querystringify:3,"requires-port":4}]},{},[1]);