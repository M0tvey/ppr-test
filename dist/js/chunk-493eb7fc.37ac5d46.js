(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-493eb7fc"],{"0cb2":function(e,t,r){var a=r("7b0b"),n=Math.floor,i="".replace,s=/\$([$&'`]|\d\d?|<[^>]*>)/g,o=/\$([$&'`]|\d\d?)/g;e.exports=function(e,t,r,l,c,u){var f=r+e.length,d=l.length,p=o;return void 0!==c&&(c=a(c),p=s),i.call(u,p,(function(a,i){var s;switch(i.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,r);case"'":return t.slice(f);case"<":s=c[i.slice(1,-1)];break;default:var o=+i;if(0===o)return a;if(o>d){var u=n(o/10);return 0===u?a:u<=d?void 0===l[u-1]?i.charAt(1):l[u-1]+i.charAt(1):a}s=l[o-1]}return void 0===s?"":s}))}},"14c3":function(e,t,r){var a=r("c6b6"),n=r("9263");e.exports=function(e,t){var r=e.exec;if("function"===typeof r){var i=r.call(e,t);if("object"!==typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==a(e))throw TypeError("RegExp#exec called on incompatible receiver");return n.call(e,t)}},2614:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"films"},[r("b-form",{staticClass:"films_filter",on:{submit:e.onSubmit}},[r("b-container",{staticClass:"films_filter_wrap"},[r("b-row",{attrs:{"align-h":"around"}},[r("b-col",{staticClass:"films_filter_year_wrap",attrs:{lg:"4",md:"6",sm:"12"}},[r("b-form-select",{on:{change:e.filterOnChange},model:{value:e.form.yearSelected,callback:function(t){e.$set(e.form,"yearSelected",t)},expression:"form.yearSelected"}},[r("b-form-select-option",{attrs:{value:null}},[e._v("Выберете год")]),e._l((new Date).getFullYear()-e.startYear,(function(t){return r("b-form-select-option",{key:t+e.startYear,attrs:{value:t+e.startYear}},[e._v(e._s(t+e.startYear))])}))],2)],1),r("b-col",{staticClass:"films_filter_type-video",class:"type-"+e.form.videoType,attrs:{lg:"4",md:"6",sm:"12"}},[r("p",{staticClass:"movie"},[e._v("Фильмы")]),r("div",{staticClass:"films_filter_type-video_change",on:{click:e.toggleChecked}}),r("p",{staticClass:"tv"},[e._v("Сериалы")])])],1)],1)],1),e.theMovieDbData&&e.config?r("b-container",{staticClass:"films_list"},e._l(e.theMovieDbData.slice(0,10),(function(t,a){return r("b-row",{key:t.id,staticClass:"films_item",on:{click:function(r){return e.itemOnclick(t.id,e.form.videoType,t.original_title?t.original_title:t.original_name,r)}}},[r("b-col",{staticClass:"films_item_index",attrs:{md:"1",sm:"3"}},[r("span",[e._v(e._s(a+1))])]),r("b-col",{staticClass:"films_item_image text-center",attrs:{md:"2",sm:"9"}},[t.poster_path?r("img",{attrs:{src:e.config.images.secure_base_url+e.config.images.poster_sizes[0]+t.poster_path,alt:t.title}}):r("span",{staticClass:"no-image"},[r("img",{attrs:{src:e.defaultImage,alt:t.title}})])]),r("b-col",{attrs:{md:"9",sm:"12"}},[r("p",{staticClass:"films_item_title"},[e._v(e._s(t.title?t.title:t.name))]),r("div",{staticClass:"films_item_data"},[t.release_date&&""!==t.release_date?r("p",{staticClass:"films_item_date"},[e._v("Дата выхода: "+e._s(t.release_date.replace(/-/g,".")))]):e._e(),""!==t.overview?r("p",{staticClass:"films_item_description"},[e._v("Описание: "+e._s(t.overview))]):e._e()])])],1)})),1):e._e(),r("Loader",{ref:"loader"})],1)},n=[],i=(r("99af"),r("5319"),r("ac1f"),r("bc3a")),s=r.n(i),o=r("3f4d"),l=r.n(o),c=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.isLoader?r("div",{staticClass:"preloader",on:{click:e.start}},[r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"200px",height:"200px",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid"}},[r("path",{attrs:{d:"M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50",fill:"#a4a4a4",stroke:"none"}},[r("animateTransform",{attrs:{attributeName:"transform",type:"rotate",dur:"1s",repeatCount:"indefinite",keyTimes:"0;1",values:"0 50 51;360 50 51"}})],1)])]):e._e()},u=[],f={name:"Loader",data:function(){return{isLoader:null}},methods:{start:function(){this.isLoader=!0},end:function(){var e=this;setTimeout((function(){return e.isLoader=!1}),300)}}},d=f,p=r("2877"),v=Object(p["a"])(d,c,u,!1,null,null,null),m=v.exports,g={name:"Main",components:{Loader:m},data:function(){return{config:window.theMDB.config,startYear:1969,form:{yearSelected:null,videoType:"movie"},defaultImage:l.a,theMovieDbData:null}},beforeCreate:function(){var e=this;s.a.get("".concat(window.theMDB.baseUrl,"discover/movie").concat(window.theMDB.apiKey).concat(window.theMDB.lang,"&sort_by=popularity.asc")).then((function(t){return e.theMovieDbData=t.data.results}))},methods:{onSubmit:function(e){e.preventDefault()},toggleChecked:function(e){e.preventDefault(),this.form.videoType="movie"===this.form.videoType?"tv":"movie",this.filterOnChange()},filterOnChange:function(){var e=this,t="movie"===this.form.videoType?"&year="+this.form.yearSelected:"&first_air_date_year="+this.form.yearSelected,r="".concat(window.theMDB.baseUrl,"discover/").concat(this.form.videoType).concat(window.theMDB.apiKey).concat(window.theMDB.lang,"&sort_by=popularity.asc").concat(this.form.yearSelected?t:"");this.$refs.loader.start(),s.a.get(r).then((function(t){e.theMovieDbData=t.data.results,e.$refs.loader.end()}))},itemOnclick:function(e,t,r,a){a.preventDefault();var n="movie"===t?"film":"serial";this.$router.push({name:n,params:{itemTitle:r.replace(/\s/g,"_"),itemId:e,itemType:t}})}}},h=g,_=Object(p["a"])(h,a,n,!1,null,null,null);t["default"]=_.exports},"3f4d":function(e,t,r){e.exports=r.p+"img/default.7ebd0560.svg"},5319:function(e,t,r){"use strict";var a=r("d784"),n=r("825a"),i=r("50c4"),s=r("a691"),o=r("1d80"),l=r("8aa5"),c=r("0cb2"),u=r("14c3"),f=Math.max,d=Math.min,p=function(e){return void 0===e?e:String(e)};a("replace",2,(function(e,t,r,a){var v=a.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,m=a.REPLACE_KEEPS_$0,g=v?"$":"$0";return[function(r,a){var n=o(this),i=void 0==r?void 0:r[e];return void 0!==i?i.call(r,n,a):t.call(String(n),r,a)},function(e,a){if(!v&&m||"string"===typeof a&&-1===a.indexOf(g)){var o=r(t,e,this,a);if(o.done)return o.value}var h=n(e),_=String(this),x="function"===typeof a;x||(a=String(a));var b=h.global;if(b){var y=h.unicode;h.lastIndex=0}var E=[];while(1){var w=u(h,_);if(null===w)break;if(E.push(w),!b)break;var C=String(w[0]);""===C&&(h.lastIndex=l(_,i(h.lastIndex),y))}for(var S="",D=0,T=0;T<E.length;T++){w=E[T];for(var R=String(w[0]),k=f(d(s(w.index),_.length),0),I=[],$=1;$<w.length;$++)I.push(p(w[$]));var M=w.groups;if(x){var A=[R].concat(I,k,_);void 0!==M&&A.push(M);var O=String(a.apply(void 0,A))}else O=c(R,_,k,I,M,a);k>=D&&(S+=_.slice(D,k)+O,D=k+R.length)}return S+_.slice(D)}]}))},"8aa5":function(e,t,r){"use strict";var a=r("6547").charAt;e.exports=function(e,t,r){return t+(r?a(e,t).length:1)}},9263:function(e,t,r){"use strict";var a=r("ad6d"),n=r("9f7f"),i=RegExp.prototype.exec,s=String.prototype.replace,o=i,l=function(){var e=/a/,t=/b*/g;return i.call(e,"a"),i.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),c=n.UNSUPPORTED_Y||n.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],f=l||u||c;f&&(o=function(e){var t,r,n,o,f=this,d=c&&f.sticky,p=a.call(f),v=f.source,m=0,g=e;return d&&(p=p.replace("y",""),-1===p.indexOf("g")&&(p+="g"),g=String(e).slice(f.lastIndex),f.lastIndex>0&&(!f.multiline||f.multiline&&"\n"!==e[f.lastIndex-1])&&(v="(?: "+v+")",g=" "+g,m++),r=new RegExp("^(?:"+v+")",p)),u&&(r=new RegExp("^"+v+"$(?!\\s)",p)),l&&(t=f.lastIndex),n=i.call(d?r:f,g),d?n?(n.input=n.input.slice(m),n[0]=n[0].slice(m),n.index=f.lastIndex,f.lastIndex+=n[0].length):f.lastIndex=0:l&&n&&(f.lastIndex=f.global?n.index+n[0].length:t),u&&n&&n.length>1&&s.call(n[0],r,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(n[o]=void 0)})),n}),e.exports=o},"9f7f":function(e,t,r){"use strict";var a=r("d039");function n(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=a((function(){var e=n("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=a((function(){var e=n("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},ac1f:function(e,t,r){"use strict";var a=r("23e7"),n=r("9263");a({target:"RegExp",proto:!0,forced:/./.exec!==n},{exec:n})},ad6d:function(e,t,r){"use strict";var a=r("825a");e.exports=function(){var e=a(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},d784:function(e,t,r){"use strict";r("ac1f");var a=r("6eeb"),n=r("d039"),i=r("b622"),s=r("9263"),o=r("9112"),l=i("species"),c=!n((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),f=i("replace"),d=function(){return!!/./[f]&&""===/./[f]("a","$0")}(),p=!n((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var r="ab".split(e);return 2!==r.length||"a"!==r[0]||"b"!==r[1]}));e.exports=function(e,t,r,f){var v=i(e),m=!n((function(){var t={};return t[v]=function(){return 7},7!=""[e](t)})),g=m&&!n((function(){var t=!1,r=/a/;return"split"===e&&(r={},r.constructor={},r.constructor[l]=function(){return r},r.flags="",r[v]=/./[v]),r.exec=function(){return t=!0,null},r[v](""),!t}));if(!m||!g||"replace"===e&&(!c||!u||d)||"split"===e&&!p){var h=/./[v],_=r(v,""[e],(function(e,t,r,a,n){return t.exec===s?m&&!n?{done:!0,value:h.call(t,r,a)}:{done:!0,value:e.call(r,t,a)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:d}),x=_[0],b=_[1];a(String.prototype,e,x),a(RegExp.prototype,v,2==t?function(e,t){return b.call(e,this,t)}:function(e){return b.call(e,this)})}f&&o(RegExp.prototype[v],"sham",!0)}}}]);
//# sourceMappingURL=chunk-493eb7fc.37ac5d46.js.map