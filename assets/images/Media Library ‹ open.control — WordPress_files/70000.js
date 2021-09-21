var NSfTIF=window.NSfTIF||{};NSfTIF.ts="2021-09-16T08:10:11Z";NSfTIF.cnr=70000;NSfTIF.pid=1218;NSfTIF.pType="CP";NSfTIF.section="undef/undef";
NSfTIF.tax_id="1";NSfTIF.cr="";NSfTIF.sktg="Diverse/Diverse/Diverse";NSfTIF.cc="de";NSfTIF.rc="de";NSfTIF.frabo=true;NSfTIF.has_ads=true;
NSfTIF.options={};NSfTIF.sectionList={};NSfTIF._validateSection=function(b){if(/^[a-z0-9@./_-]+$/i.test(b)){var a=String(b).toLowerCase();
a=a.replace(new RegExp("//+","g"),"/");return a}else{return this.section}};NSfTIF._setSection=function(a){this.section=this._validateSection(a);
this._setIdCode()};NSfTIF._setIdCode=function(){var a=this.section.length;if(this._isDef(this.sectionList[this.section])){this.tax_id=this.sectionList[this.section]
}else{for(var b in this.sectionList){if(a>=b.length&&this.section.substr(0,b.length)===b){this.tax_id=this.sectionList[b];
break}}}};NSfTIF._replaceVariables=function(a){a=a.replace(/__SC__/g,this.section);a=a.replace(/__TYPE__/g,this.pType);a=a.replace(/__CODE__/g,this.tax_id);
a=a.replace(/__SKTG__/g,this.sktg);a=a.replace(/__CRG__/g,this.cr);a=a.replace(/__CR__/g,this.cr);a=a.replace(/__CC__/g,this.cc);
a=a.replace(/__REGION__/g,this.rc);a=a.replace(/__R__/g,escape(document.referrer));a=a.replace(/__D__/g,this._getRandom());
a=a.replace(/__CNR__/g,this.cnr);a=a.replace(/__PID__/g,this.pid);for(var b in this.options){a=a.replace(new RegExp("__"+b.toUpperCase()+"__","g"),this.options[b])
}a=a.replace(/__[A-Z0-9_-]+__/g,"");return a};NSfTIF._rvmv=function(b){for(var a in b){b[a]=NSfTIF._replaceVariables(b[a])
}return b};NSfTIF._isDef=function(b){return typeof(b)!=="undefined"};NSfTIF.init=function(a){if(!this._isDef(a)){return}if(typeof a.frabo==="boolean"){this.frabo=a.frabo
}if(typeof a.has_ads==="boolean"){this.has_ads=a.has_ads}if(a.cr){this.cr=a.cr}if(a.cc){this.cc=a.cc.toLowerCase()}if(a.region){this.rc=a.region.toLowerCase()
}this.initUniv(a);if(a.pageidentifier){this._setSection(a.pageidentifier)}if(a.contentclass){this.tax_id=a.contentclass}if(a.sktg){this.sktg=a.sktg
}};NSfTIF.initUniv=function(a){if(a){for(var b in a){if(/^[a-z0-9_-]+$/i.test(b)){this.options[b]=a[b]}}}};NSfTIF.checkFraBo=function(){return this.frabo&&window.location.protocol==="http:"&&document.readyState!=="complete"
};NSfTIF.rlsTrc=function(a){(new Image()).src=this._replaceVariables(a)};NSfTIF.rlsTrcRed=function(a){window.location=this._replaceVariables(a)
};NSfTIF._trim=function(a){return a.replace(/\s+$/,"").replace(/^\s+/,"")};NSfTIF._getRandom=function(){return Math.round(Math.random()*100000)
};NSfTIF.track=function(b){if(b){this.init(b)}var d=(function(h){var g=[{r:/(^|\.)ionos\.de$/,d:"t.ionos.de"},{r:/(^|\.)ionos\.at$/,d:"t.ionos.at"},{r:/(^|\.)ionos\.com$/,d:"t.ionos.com"},{r:/(^|\.)ionos\.co\.uk$/,d:"t.ionos.co.uk"},{r:/(^|\.)ionos\.ca$/,d:"t.ionos.ca"},{r:/(^|\.)ionos\.es$/,d:"t.ionos.es"},{r:/(^|\.)ionos\.fr$/,d:"t.ionos.fr"},{r:/(^|\.)ionos\.it$/,d:"t.ionos.it"},{r:/(^|\.)ionos\.mx$/,d:"t.ionos.mx"}];
for(var f in g){if(g[f].r.test(h)){return g[f].d}}return""})(window.location.hostname);if(d!==""){var a=this._replaceVariables("//"+d+"/globalnavigation_p/?sc=__SC__&session_id=__SESSION_ID__&request_touchpoint=__REQUEST_TOUCHPOINT__&tenant=__TENANT__&brand=__BRAND__&content_language=__CONTENT_LANGUAGE__&market=__MARKET__&hid=__HID__&main_topic=__MAIN_TOPIC__&sub_topic=__SUB_TOPIC__&subject=__SUBJECT__&pixel_type=__PIXEL_TYPE__&utm_source=__UTM_SOURCE__&utm_medium=__UTM_MEDIUM__&utm_campaign=__UTM_CAMPAIGN__&utm_term=__UTM_TERM__&utm_content=__UTM_CONTENT__&utm_rid=__UTM_RID__&tif=__CNR__&d=__D__&r=__R__");
var c=new RegExp("&[a-z0-9_-]+=&","gi");var e=a.replace(c,"&");while(e.length<a.length){a=e;e=a.replace(c,"&")}(new Image()).src=e
}};NSfTIF._loadJavaScript=function(b){var a=document.createElement("script");a.setAttribute("type","text/javascript");a.setAttribute("src",b);
if(document.head){document.head.appendChild(a)}};NSfTIF._writeJS=function(a){document.write('<script type="text/javascript" src="'+a+'"><\/script>')
};NSfTIF._replaceVariables=function(d){d=d.replace(/__SC__/g,encodeURIComponent(this.section));d=d.replace(/__TYPE__/g,encodeURIComponent(this.pType));
d=d.replace(/__CODE__/g,encodeURIComponent(this.tax_id));d=d.replace(/__SKTG__/g,encodeURIComponent(this.sktg));d=d.replace(/__CRG__/g,encodeURIComponent(this.cr));
d=d.replace(/__CR__/g,encodeURIComponent(this.cr));d=d.replace(/__CC__/g,encodeURIComponent(this.cc));d=d.replace(/__REGION__/g,encodeURIComponent(this.rc));
d=d.replace(/__R__/g,encodeURIComponent(document.referrer));d=d.replace(/__D__/g,this._getRandom());d=d.replace(/__CNR__/g,this.cnr);
d=d.replace(/__PID__/g,this.pid);for(var c in this.options){if(this.options.hasOwnProperty(c)&&typeof this.options[c]!=="undefined"){var e;
if(typeof this.options[c]==="object"){e=encodeURIComponent(JSON.stringify(this.options[c]))}else{e=encodeURIComponent(this.options[c])
}d=d.replace(new RegExp("__"+c.toUpperCase()+"__","g"),e)}}d=d.replace(/__[A-Z0-9_-]+__/g,"");return d};NSfTIF._parseUrl=function(h,c,g,a,b){var f=c.indexOf(g);
if(f>0){var j=c.slice(f+g.length);if(j.length>1){var k=j.split(a);for(var e in k){var d=k[e].split(b);h[d[0]]=decodeURIComponent(d[1])
}}}};NSfTIF._parseUrl(NSfTIF.options,window.location.href,"?","&","=");