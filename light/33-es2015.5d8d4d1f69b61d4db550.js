(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{Mumg:function(e,a,t){"use strict";t.d(a,"a",(function(){return D})),t.d(a,"b",(function(){return S})),t.d(a,"c",(function(){return w})),t.d(a,"d",(function(){return y})),t.d(a,"e",(function(){return C}));var l=t("ofXK"),u=t("fXoL");const i=["canvas"],d=["rLabel"],n=["reading"];function s(e,a){1&e&&u.Bc(0,0,["*ngSwitchCase","true"])}function r(e,a){if(1&e&&(u.gc(0),u.cd(1),u.fc()),2&e){const e=u.xc();u.Pb(1),u.dd(e.prepend)}}function v(e,a){1&e&&u.Bc(0,1,["*ngSwitchCase","true"])}function o(e,a){if(1&e&&(u.gc(0),u.cd(1),u.yc(2,"number"),u.fc()),2&e){const e=u.xc();u.Pb(1),u.dd(u.zc(2,1,e.value))}}function c(e,a){1&e&&u.Bc(0,2,["*ngSwitchCase","true"])}function h(e,a){if(1&e&&(u.gc(0),u.cd(1),u.fc()),2&e){const e=u.xc();u.Pb(1),u.dd(e.append)}}function g(e,a){1&e&&u.Bc(0,3,["*ngSwitchCase","true"])}function p(e,a){if(1&e&&(u.gc(0),u.cd(1),u.fc()),2&e){const e=u.xc();u.Pb(1),u.dd(e.label)}}const f=[[["ngx-gauge-prepend"]],[["ngx-gauge-value"]],[["ngx-gauge-append"]],[["ngx-gauge-label"]]],m=["ngx-gauge-prepend","ngx-gauge-value","ngx-gauge-append","ngx-gauge-label"];function b(e,a=0){return isNaN(parseFloat(e))||isNaN(Number(e))?a:Number(e)}function _(e){return e+"px"}let w=(()=>{let e=class{};return e.\u0275fac=function(a){return new(a||e)},e.\u0275dir=u.Xb({type:e,selectors:[["ngx-gauge-append"]],exportAs:["ngxGaugeAppend"]}),e})(),x=(()=>{let e=class{};return e.\u0275fac=function(a){return new(a||e)},e.\u0275dir=u.Xb({type:e,selectors:[["ngx-gauge-prepend"]],exportAs:["ngxGaugePrepend"]}),e})(),y=(()=>{let e=class{};return e.\u0275fac=function(a){return new(a||e)},e.\u0275dir=u.Xb({type:e,selectors:[["ngx-gauge-value"]],exportAs:["ngxGaugeValue"]}),e})(),C=(()=>{let e=class{};return e.\u0275fac=function(a){return new(a||e)},e.\u0275dir=u.Xb({type:e,selectors:[["ngx-gauge-label"]],exportAs:["ngxGaugeLabel"]}),e})(),S=(()=>{let e=class{constructor(e,a){this._elementRef=e,this._renderer=a,this._size=200,this._min=0,this._max=100,this._animate=!0,this._initialized=!1,this._animationRequestID=0,this.ariaLabel="",this.ariaLabelledby=null,this.type="arch",this.cap="butt",this.thick=4,this.foregroundColor="rgba(0, 150, 136, 1)",this.backgroundColor="rgba(0, 0, 0, 0.1)",this.thresholds=Object.create(null),this._value=0,this.duration=1200}get size(){return this._size}set size(e){this._size=b(e)}get min(){return this._min}set min(e){this._min=b(e,0)}get animate(){return this._animate}set animate(e){this._animate=function(e){return null!=e&&""+e!="false"}(e)}get max(){return this._max}set max(e){this._max=b(e,100)}get value(){return this._value}set value(e){this._value=b(e)}ngOnChanges(e){const a=e.thick||e.type||e.cap||e.size;if(this._initialized){if(e.value||e.min||e.max){let a,t;e.value&&(a=e.value.currentValue,t=e.value.previousValue),this._update(a,t)}a&&(this._destroy(),this._init())}}_updateSize(){this._renderer.setStyle(this._elementRef.nativeElement,"width",_(this._getWidth())),this._renderer.setStyle(this._elementRef.nativeElement,"height",_(this._getCanvasHeight())),this._canvas.nativeElement.width=this._getWidth(),this._canvas.nativeElement.height=this._getCanvasHeight(),this._renderer.setStyle(this._label.nativeElement,"transform","translateY("+(this.size/3*2-this.size/13/4)+"px)"),this._renderer.setStyle(this._reading.nativeElement,"transform","translateY("+(this.size/2-.22*this.size/2)+"px)")}ngAfterViewInit(){this._canvas&&this._init()}ngOnDestroy(){this._destroy()}_getBounds(e){let a,t;return"semi"==e?(a=Math.PI,t=2*Math.PI):"full"==e?(a=1.5*Math.PI,t=3.5*Math.PI):"arch"===e&&(a=.8*Math.PI,t=2.2*Math.PI),{head:a,tail:t}}_drawShell(e,a,t,l){let u=this._getCenter(),i=this._getRadius();a=Math.max(a,e),a=Math.min(a,t),this._initialized&&(this._clear(),this._context.beginPath(),this._context.strokeStyle=this.backgroundColor,this._context.arc(u.x,u.y,i,a,t,!1),this._context.stroke(),this._context.beginPath(),this._context.strokeStyle=l,this._context.arc(u.x,u.y,i,e,a,!1),this._context.stroke())}_clear(){this._context.clearRect(0,0,this._getWidth(),this._getHeight())}_getWidth(){return this.size}_getHeight(){return this.size}_getCanvasHeight(){return"arch"==this.type||"semi"==this.type?.85*this._getHeight():this._getHeight()}_getRadius(){return this._getCenter().x-this.thick}_getCenter(){return{x:this._getWidth()/2,y:this._getHeight()/2}}_init(){this._context=this._canvas.nativeElement.getContext("2d"),this._initialized=!0,this._updateSize(),this._setupStyles(),this._create()}_destroy(){this._animationRequestID&&(window.cancelAnimationFrame(this._animationRequestID),this._animationRequestID=0),this._clear(),this._context=null,this._initialized=!1}_setupStyles(){this._context.lineCap=this.cap,this._context.lineWidth=this.thick}_getForegroundColorByRange(e){const a=Object.keys(this.thresholds).filter((function(a){return function(e){return null!=e&&!isNaN(parseFloat(e))&&!isNaN(Number(e))}(a)&&Number(a)<=e})).sort((e,a)=>Number(e)-Number(a)).reverse()[0];return void 0!==a&&this.thresholds[a].color||this.foregroundColor}_create(e,a){let t,l=this,u=this._getBounds(this.type),i=this.duration,d=this.min,n=this.max,s=function(e,a,t){return Math.max(a,Math.min(t,e))}(this.value,this.min,this.max),r=u.head,v=(u.tail-u.head)/(n-d),o=v*(s-d),c=u.tail,h=this._getForegroundColorByRange(s);l._animationRequestID&&window.cancelAnimationFrame(l._animationRequestID),this._animate?(null!=e&&null!=a&&(o=v*e-v*a),l._animationRequestID=window.requestAnimationFrame(e=>{t=e||(new Date).getTime(),function e(u){let n=(u=u||(new Date).getTime())-t,s=Math.min(n/i,1);l._drawShell(r,r+(a?(a-d)*v:0)+o*s,c,h),l._animationRequestID&&n<i?l._animationRequestID=window.requestAnimationFrame(a=>e(a)):window.cancelAnimationFrame(l._animationRequestID)}(t)})):l._drawShell(r,r+o,c,h)}_update(e,a){this._clear(),this._create(e,a)}};return e.\u0275fac=function(a){return new(a||e)(u.cc(u.o),u.cc(u.R))},e.\u0275cmp=u.Wb({type:e,selectors:[["ngx-gauge"]],contentQueries:function(e,a,t){var l;1&e&&(u.Vb(t,C,!0),u.Vb(t,x,!0),u.Vb(t,w,!0),u.Vb(t,y,!0)),2&e&&(u.Lc(l=u.uc())&&(a._labelChild=l.first),u.Lc(l=u.uc())&&(a._prependChild=l.first),u.Lc(l=u.uc())&&(a._appendChild=l.first),u.Lc(l=u.uc())&&(a._valueDisplayChild=l.first))},viewQuery:function(e,a){var t;1&e&&(u.Wc(i,!0),u.Wc(d,!0),u.Wc(n,!0)),2&e&&(u.Lc(t=u.uc())&&(a._canvas=t.first),u.Lc(t=u.uc())&&(a._label=t.first),u.Lc(t=u.uc())&&(a._reading=t.first))},hostAttrs:["role","slider","aria-readonly","true"],hostVars:7,hostBindings:function(e,a){2&e&&(u.Qb("aria-valuemin",a.min)("aria-valuemax",a.max)("aria-valuenow",a.value)("aria-label",a.ariaLabel)("aria-labelledby",a.ariaLabelledby),u.Ub("ngx-gauge-meter",!0))},inputs:{ariaLabel:["aria-label","ariaLabel"],ariaLabelledby:["aria-labelledby","ariaLabelledby"],type:"type",cap:"cap",thick:"thick",foregroundColor:"foregroundColor",backgroundColor:"backgroundColor",thresholds:"thresholds",duration:"duration",size:"size",min:"min",animate:"animate",max:"max",value:"value",label:"label",append:"append",prepend:"prepend"},features:[u.Nb],ngContentSelectors:m,decls:17,vars:16,consts:[[1,"reading-block"],["reading",""],[1,"reading-affix",3,"ngSwitch"],[4,"ngSwitchCase"],[3,"ngSwitch"],[1,"reading-label",3,"ngSwitch"],["rLabel",""],["canvas",""]],template:function(e,a){1&e&&(u.Cc(f),u.ic(0,"div",0,1),u.ic(2,"u",2),u.ad(3,s,1,0,"ng-content",3),u.ad(4,r,2,1,"ng-container",3),u.hc(),u.gc(5,4),u.ad(6,v,1,0,"ng-content",3),u.ad(7,o,3,3,"ng-container",3),u.fc(),u.ic(8,"u",2),u.ad(9,c,1,0,"ng-content",3),u.ad(10,h,2,1,"ng-container",3),u.hc(),u.hc(),u.ic(11,"div",5,6),u.ad(13,g,1,0,"ng-content",3),u.ad(14,p,2,1,"ng-container",3),u.hc(),u.dc(15,"canvas",null,7)),2&e&&(u.Xc("font-size",.22*a.size+"px"),u.Pb(2),u.Dc("ngSwitch",null!=a._prependChild),u.Pb(1),u.Dc("ngSwitchCase",!0),u.Pb(1),u.Dc("ngSwitchCase",!1),u.Pb(1),u.Dc("ngSwitch",null!=a._valueDisplayChild),u.Pb(1),u.Dc("ngSwitchCase",!0),u.Pb(1),u.Dc("ngSwitchCase",!1),u.Pb(1),u.Dc("ngSwitch",null!=a._appendChild),u.Pb(1),u.Dc("ngSwitchCase",!0),u.Pb(1),u.Dc("ngSwitchCase",!1),u.Pb(1),u.Xc("font-size",a.size/13+"px"),u.Dc("ngSwitch",null!=a._labelChild),u.Pb(2),u.Dc("ngSwitchCase",!0),u.Pb(1),u.Dc("ngSwitchCase",!1))},directives:[l.p,l.q],pipes:[l.f],styles:[".ngx-gauge-meter{display:inline-block;text-align:center;position:relative}.reading-block{position:absolute;width:100%;font-weight:400;white-space:nowrap;text-align:center;overflow:hidden;text-overflow:ellipsis}.reading-label{font-family:inherit;width:100%;display:inline-block;position:absolute;text-align:center;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-weight:400}.reading-affix{text-decoration:none;font-size:.6em;opacity:.8;font-weight:200;padding:0 .18em}.reading-affix:first-child{padding-left:0}.reading-affix:last-child{padding-right:0}"],encapsulation:2}),e})(),D=(()=>{let e=class{};return e.\u0275mod=u.ac({type:e}),e.\u0275inj=u.Zb({factory:function(a){return new(a||e)},imports:[[l.c]]}),e})()},TDBs:function(e,a,t){"use strict";t.r(a),t.d(a,"DashboardModule",(function(){return _}));var l=t("ofXK"),u=t("Kdsb"),i=t("tyNb"),d=t("KDUW");const n=[[{date:"2014-01-01",value:2e7},{date:"2014-01-02",value:10379978},{date:"2014-01-03",value:30493749},{date:"2014-01-04",value:10785250},{date:"2014-01-05",value:33901904},{date:"2014-01-06",value:11576838},{date:"2014-01-07",value:14413854},{date:"2014-01-08",value:15177211},{date:"2014-01-09",value:16622100},{date:"2014-01-10",value:17381072},{date:"2014-01-11",value:18802310},{date:"2014-01-12",value:15531790},{date:"2014-01-13",value:15748881},{date:"2014-01-14",value:18706437},{date:"2014-01-15",value:19752685},{date:"2014-01-16",value:21016418},{date:"2014-01-17",value:25622924},{date:"2014-01-18",value:25337480},{date:"2014-01-19",value:22258882},{date:"2014-01-20",value:23829538},{date:"2014-01-21",value:24245689},{date:"2014-01-22",value:26429711},{date:"2014-01-23",value:26259017},{date:"2014-01-24",value:25396183},{date:"2014-01-25",value:23107346},{date:"2014-01-26",value:28659852},{date:"2014-01-27",value:25270783},{date:"2014-01-28",value:26270783},{date:"2014-01-29",value:27270783},{date:"2014-01-30",value:28270783},{date:"2014-01-31",value:29270783},{date:"2014-02-01",value:30270783},{date:"2014-02-02",value:31270783},{date:"2014-02-03",value:32270783},{date:"2014-02-04",value:33270783},{date:"2014-02-05",value:28270783},{date:"2014-02-06",value:27270783},{date:"2014-02-07",value:35270783},{date:"2014-02-08",value:34270783},{date:"2014-02-09",value:28270783},{date:"2014-02-10",value:35270783},{date:"2014-02-11",value:36270783},{date:"2014-02-12",value:34127078},{date:"2014-02-13",value:33124078},{date:"2014-02-14",value:36227078},{date:"2014-02-15",value:37827078},{date:"2014-02-16",value:36427073},{date:"2014-02-17",value:37570783},{date:"2014-02-18",value:38627073},{date:"2014-02-19",value:37727078},{date:"2014-02-20",value:38827073},{date:"2014-02-21",value:40927078},{date:"2014-02-22",value:41027078},{date:"2014-02-23",value:42127073},{date:"2014-02-24",value:43220783},{date:"2014-02-25",value:44327078},{date:"2014-02-26",value:40427078},{date:"2014-02-27",value:41027078},{date:"2014-02-28",value:45627078},{date:"2014-03-01",value:44727078},{date:"2014-03-02",value:44227078},{date:"2014-03-03",value:45227078},{date:"2014-03-04",value:46027078},{date:"2014-03-05",value:46927078},{date:"2014-03-06",value:47027078},{date:"2014-03-07",value:46227078},{date:"2014-03-08",value:47027078},{date:"2014-03-09",value:48027078},{date:"2014-03-10",value:47027078},{date:"2014-03-11",value:47027078},{date:"2014-03-12",value:48017078},{date:"2014-03-13",value:48077078},{date:"2014-03-14",value:48087078},{date:"2014-03-15",value:48017078},{date:"2014-03-16",value:48047078},{date:"2014-03-17",value:48067078},{date:"2014-03-18",value:48077078},{date:"2014-03-19",value:48027074},{date:"2014-03-20",value:48927079},{date:"2014-03-21",value:48727071},{date:"2014-03-22",value:48127072},{date:"2014-03-23",value:48527072},{date:"2014-03-24",value:48627027},{date:"2014-03-25",value:48027040},{date:"2014-03-26",value:48027043},{date:"2014-03-27",value:48057022},{date:"2014-03-28",value:49057022},{date:"2014-03-29",value:50057022},{date:"2014-03-30",value:51057022},{date:"2014-03-31",value:52057022},{date:"2014-04-01",value:53057022},{date:"2014-04-02",value:54057022},{date:"2014-04-03",value:52057022},{date:"2014-04-04",value:55057022},{date:"2014-04-05",value:58270783},{date:"2014-04-06",value:56270783},{date:"2014-04-07",value:55270783},{date:"2014-04-08",value:58270783},{date:"2014-04-09",value:59270783},{date:"2014-04-10",value:60270783},{date:"2014-04-11",value:61270783},{date:"2014-04-12",value:62270783},{date:"2014-04-13",value:63270783},{date:"2014-04-14",value:64270783},{date:"2014-04-15",value:65270783},{date:"2014-04-16",value:66270783},{date:"2014-04-17",value:67270783},{date:"2014-04-18",value:68270783},{date:"2014-04-19",value:69270783},{date:"2014-04-20",value:70270783},{date:"2014-04-21",value:71270783},{date:"2014-04-22",value:72270783},{date:"2014-04-23",value:73270783},{date:"2014-04-24",value:74270783},{date:"2014-04-25",value:75270783},{date:"2014-04-26",value:76660783},{date:"2014-04-27",value:77270783},{date:"2014-04-28",value:78370783},{date:"2014-04-29",value:79470783},{date:"2014-04-30",value:80170783}],[{date:"2014-01-01",value:15e7},{date:"2014-01-02",value:160379978},{date:"2014-01-03",value:170493749},{date:"2014-01-04",value:160785250},{date:"2014-01-05",value:167391904},{date:"2014-01-06",value:161576838},{date:"2014-01-07",value:161413854},{date:"2014-01-08",value:152177211},{date:"2014-01-09",value:140762210},{date:"2014-01-10",value:144381072},{date:"2014-01-11",value:154352310},{date:"2014-01-12",value:165531790},{date:"2014-01-13",value:175748881},{date:"2014-01-14",value:187064037},{date:"2014-01-15",value:197520685},{date:"2014-01-16",value:210176418},{date:"2014-01-17",value:196122924},{date:"2014-01-18",value:207337480},{date:"2014-01-19",value:200258882},{date:"2014-01-20",value:186829538},{date:"2014-01-21",value:192456897},{date:"2014-01-22",value:204299711},{date:"2014-01-23",value:192759017},{date:"2014-01-24",value:203596183},{date:"2014-01-25",value:208107346},{date:"2014-01-26",value:196359852},{date:"2014-01-27",value:192570783},{date:"2014-01-28",value:177967768},{date:"2014-01-29",value:190632803},{date:"2014-01-30",value:203725316},{date:"2014-01-31",value:218226177},{date:"2014-02-01",value:210698669},{date:"2014-02-02",value:217640656},{date:"2014-02-03",value:216142362},{date:"2014-02-04",value:201410971},{date:"2014-02-05",value:196704289},{date:"2014-02-06",value:190436945},{date:"2014-02-07",value:178891686},{date:"2014-02-08",value:171613962},{date:"2014-02-09",value:157579773},{date:"2014-02-10",value:158677098},{date:"2014-02-11",value:147129977},{date:"2014-02-12",value:151561876},{date:"2014-02-13",value:151627421},{date:"2014-02-14",value:143543872},{date:"2014-02-15",value:136581057},{date:"2014-02-16",value:135560715},{date:"2014-02-17",value:122625263},{date:"2014-02-18",value:112091484},{date:"2014-02-19",value:98810329},{date:"2014-02-20",value:99882912},{date:"2014-02-21",value:94943095},{date:"2014-02-22",value:104875743},{date:"2014-02-23",value:116383678},{date:"2014-02-24",value:125028841},{date:"2014-02-25",value:123967310},{date:"2014-02-26",value:133167029},{date:"2014-02-27",value:128577263},{date:"2014-02-28",value:115836969},{date:"2014-03-01",value:119264529},{date:"2014-03-02",value:109363374},{date:"2014-03-03",value:113985628},{date:"2014-03-04",value:114650999},{date:"2014-03-05",value:110866108},{date:"2014-03-06",value:96473454},{date:"2014-03-07",value:104075886},{date:"2014-03-08",value:103568384},{date:"2014-03-09",value:101534883},{date:"2014-03-10",value:115825447},{date:"2014-03-11",value:126133916},{date:"2014-03-12",value:116502109},{date:"2014-03-13",value:130169411},{date:"2014-03-14",value:124296886},{date:"2014-03-15",value:126347399},{date:"2014-03-16",value:131483669},{date:"2014-03-17",value:142811333},{date:"2014-03-18",value:129675396},{date:"2014-03-19",value:115514483},{date:"2014-03-20",value:117630630},{date:"2014-03-21",value:122340239},{date:"2014-03-22",value:132349091},{date:"2014-03-23",value:125613305},{date:"2014-03-24",value:135592466},{date:"2014-03-25",value:123408762},{date:"2014-03-26",value:111991454},{date:"2014-03-27",value:116123955},{date:"2014-03-28",value:112817214},{date:"2014-03-29",value:113029590},{date:"2014-03-30",value:108753398},{date:"2014-03-31",value:99383763},{date:"2014-04-01",value:100151737},{date:"2014-04-02",value:94985209},{date:"2014-04-03",value:82913669},{date:"2014-04-04",value:78748268},{date:"2014-04-05",value:63829135},{date:"2014-04-06",value:78694727},{date:"2014-04-07",value:80868994},{date:"2014-04-08",value:93799013},{date:"2014-04-09",value:99042416},{date:"2014-04-10",value:97298692},{date:"2014-04-11",value:83353499},{date:"2014-04-12",value:71248129},{date:"2014-04-13",value:75253744},{date:"2014-04-14",value:68976648},{date:"2014-04-15",value:71002284},{date:"2014-04-16",value:75052401},{date:"2014-04-17",value:83894030},{date:"2014-04-18",value:90236528},{date:"2014-04-19",value:99739114},{date:"2014-04-20",value:96407136},{date:"2014-04-21",value:108323177},{date:"2014-04-22",value:101578914},{date:"2014-04-23",value:115877608},{date:"2014-04-24",value:112088857},{date:"2014-04-25",value:112071353},{date:"2014-04-26",value:101790062},{date:"2014-04-27",value:115003761},{date:"2014-04-28",value:120457727},{date:"2014-04-29",value:118253926},{date:"2014-04-30",value:117956992}],[{date:"2014-01-01",value:5e7},{date:"2014-01-02",value:60379978},{date:"2014-01-03",value:40493749},{date:"2014-01-04",value:60785250},{date:"2014-01-05",value:67391904},{date:"2014-01-06",value:61576838},{date:"2014-01-07",value:61413854},{date:"2014-01-08",value:82177211},{date:"2014-01-09",value:103762210},{date:"2014-01-10",value:84381072},{date:"2014-01-11",value:54352310},{date:"2014-01-12",value:65531790},{date:"2014-01-13",value:75748881},{date:"2014-01-14",value:47064037},{date:"2014-01-15",value:67520685},{date:"2014-01-16",value:60176418},{date:"2014-01-17",value:66122924},{date:"2014-01-18",value:57337480},{date:"2014-01-19",value:100258882},{date:"2014-01-20",value:46829538},{date:"2014-01-21",value:92456897},{date:"2014-01-22",value:94299711},{date:"2014-01-23",value:62759017},{date:"2014-01-24",value:103596183},{date:"2014-01-25",value:108107346},{date:"2014-01-26",value:66359852},{date:"2014-01-27",value:62570783},{date:"2014-01-28",value:77967768},{date:"2014-01-29",value:60632803},{date:"2014-01-30",value:103725316},{date:"2014-01-31",value:98226177},{date:"2014-02-01",value:60698669},{date:"2014-02-02",value:67640656},{date:"2014-02-03",value:66142362},{date:"2014-02-04",value:101410971},{date:"2014-02-05",value:66704289},{date:"2014-02-06",value:60436945},{date:"2014-02-07",value:78891686},{date:"2014-02-08",value:71613962},{date:"2014-02-09",value:107579773},{date:"2014-02-10",value:58677098},{date:"2014-02-11",value:87129977},{date:"2014-02-12",value:51561876},{date:"2014-02-13",value:51627421},{date:"2014-02-14",value:83543872},{date:"2014-02-15",value:66581057},{date:"2014-02-16",value:65560715},{date:"2014-02-17",value:62625263},{date:"2014-02-18",value:92091484},{date:"2014-02-19",value:48810329},{date:"2014-02-20",value:49882912},{date:"2014-02-21",value:44943095},{date:"2014-02-22",value:104875743},{date:"2014-02-23",value:96383678},{date:"2014-02-24",value:105028841},{date:"2014-02-25",value:63967310},{date:"2014-02-26",value:63167029},{date:"2014-02-27",value:68577263},{date:"2014-02-28",value:95836969},{date:"2014-03-01",value:99264529},{date:"2014-03-02",value:109363374},{date:"2014-03-03",value:93985628},{date:"2014-03-04",value:94650999},{date:"2014-03-05",value:90866108},{date:"2014-03-06",value:46473454},{date:"2014-03-07",value:84075886},{date:"2014-03-08",value:103568384},{date:"2014-03-09",value:101534883},{date:"2014-03-10",value:95825447},{date:"2014-03-11",value:66133916},{date:"2014-03-12",value:96502109},{date:"2014-03-13",value:80169411},{date:"2014-03-14",value:84296886},{date:"2014-03-15",value:86347399},{date:"2014-03-16",value:31483669},{date:"2014-03-17",value:82811333},{date:"2014-03-18",value:89675396},{date:"2014-03-19",value:95514483},{date:"2014-03-20",value:97630630},{date:"2014-03-21",value:62340239},{date:"2014-03-22",value:62349091},{date:"2014-03-23",value:65613305},{date:"2014-03-24",value:65592466},{date:"2014-03-25",value:63408762},{date:"2014-03-26",value:91991454},{date:"2014-03-27",value:96123955},{date:"2014-03-28",value:92817214},{date:"2014-03-29",value:93029590},{date:"2014-03-30",value:108753398},{date:"2014-03-31",value:49383763},{date:"2014-04-01",value:100151737},{date:"2014-04-02",value:44985209},{date:"2014-04-03",value:52913669},{date:"2014-04-04",value:48748268},{date:"2014-04-05",value:23829135},{date:"2014-04-06",value:58694727},{date:"2014-04-07",value:50868994},{date:"2014-04-08",value:43799013},{date:"2014-04-09",value:4042416},{date:"2014-04-10",value:47298692},{date:"2014-04-11",value:53353499},{date:"2014-04-12",value:71248129},{date:"2014-04-13",value:75253744},{date:"2014-04-14",value:68976648},{date:"2014-04-15",value:71002284},{date:"2014-04-16",value:75052401},{date:"2014-04-17",value:83894030},{date:"2014-04-18",value:50236528},{date:"2014-04-19",value:59739114},{date:"2014-04-20",value:56407136},{date:"2014-04-21",value:108323177},{date:"2014-04-22",value:101578914},{date:"2014-04-23",value:95877608},{date:"2014-04-24",value:62088857},{date:"2014-04-25",value:92071353},{date:"2014-04-26",value:81790062},{date:"2014-04-27",value:105003761},{date:"2014-04-28",value:100457727},{date:"2014-04-29",value:98253926},{date:"2014-04-30",value:67956992}]];var s=t("fXoL");const r=["chart"],v=[{path:"",redirectTo:"main",pathMatch:"full"},{path:"main",component:(()=>{class e{constructor(e){this.authService=e,this._welcome="",this.gaugeType="arch",this.gaugeValue=48,this.gaugeSize=170,this.guageThick=16,this.thresholdConfig={0:{color:"green"},40:{color:"orange"},75.5:{color:"red"}},this.gaugeType2="arch",this.gaugeValue2=34,this.gaugeSize2=170,this.guageThick2=16,this.thresholdConfig2={0:{color:"green"},40:{color:"orange"},75.5:{color:"red"}},this.chart1(),this.chart2(),this.smallChart(),this.smallChart2()}chart1(){let e=14844186e5,a=[];for(let t=0;t<120;t++)e+=864e5,a.push([e,n[1][t].value]);this.areaChartOptions={series:[{name:"Booking Per Day",data:a}],chart:{type:"area",stacked:!1,height:250,toolbar:{show:!0},foreColor:"#9aa0ac"},colors:["#9F8DF1","#E79A3B"],dataLabels:{enabled:!1},markers:{size:0},fill:{type:"gradient",gradient:{shadeIntensity:1,inverseColors:!1,opacityFrom:.5,opacityTo:0,stops:[0,90,100]}},stroke:{curve:"smooth"},yaxis:{labels:{formatter:function(e){return(e/1e6).toFixed(0)}},title:{text:"Booking"}},xaxis:{type:"datetime"},legend:{show:!0,position:"top",horizontalAlign:"center",offsetX:0,offsetY:0},tooltip:{theme:"dark",marker:{show:!0},x:{show:!0},y:{formatter:function(e){return(e/1e6).toFixed(0)}}}}}chart2(){this.barChartOptions={series:[{name:"Net Profit",data:[44,55,57,56,61,58]},{name:"Revenue",data:[76,85,101,98,87,105]}],chart:{type:"bar",height:350,toolbar:{show:!1},dropShadow:{enabled:!0,color:"#000",top:18,left:7,blur:10,opacity:.2},foreColor:"#9aa0ac"},colors:["#5C9FFB","#AEAEAE"],plotOptions:{bar:{horizontal:!1,columnWidth:"50%",endingShape:"rounded"}},legend:{show:!1},dataLabels:{enabled:!1},stroke:{show:!0,width:2,colors:["transparent"]},xaxis:{categories:["jan","Feb","Mar","Apr","May","Jun"]},yaxis:{title:{text:"$ (thousands)"}},tooltip:{theme:"dark",marker:{show:!0},x:{show:!0},y:{formatter:function(e){return"$ "+e+" thousands"}}}}}smallChart(){this.circleChartOptions={series2:[76,67,61,90],chart:{height:260,type:"radialBar"},plotOptions:{radialBar:{offsetY:0,startAngle:0,endAngle:270,hollow:{margin:5,size:"30%",background:"transparent",image:void 0},dataLabels:{name:{show:!1},value:{show:!1}}}},colors:["#569C4D","#72B1AC","#EA8A2A","#4772A0"],labels:["Data 1","Data 2","Data 3","Data 4"],legend:{show:!0,floating:!0,fontSize:"16px",position:"left",offsetX:50,offsetY:10,labels:{useSeriesColors:!0},formatter:function(e,a){return e+":  "+a.w.globals.series[a.seriesIndex]},itemMargin:{horizontal:3}},responsive:[{breakpoint:480,options:{legend:{show:!1}}}]}}smallChart2(){this.pieChartOptions={series2:[44,55,13,43,22],chart:{type:"donut",width:200},legend:{show:!1},dataLabels:{enabled:!1},labels:["Science","Mathes","Economics","History","Music"],responsive:[{breakpoint:480,options:{}}]}}ngOnInit(){this.loadWelcome(),this.user=this.authService.getLoggedInUser()}loadWelcome(){let e=new Date;this._welcome=e.getHours()>=0&&e.getHours()<12?"Xin ch\xe0o bu\u1ed5i s\xe1ng, ":(e.getHours()>=12&&e.getHours(),"Xin ch\xe0o, ")}}return e.\u0275fac=function(a){return new(a||e)(s.cc(d.a))},e.\u0275cmp=s.Wb({type:e,selectors:[["app-main"]],viewQuery:function(e,a){var t;1&e&&s.gd(r,!0),2&e&&s.Lc(t=s.uc())&&(a.chart=t.first)},decls:9,vars:2,consts:[[1,"content"],[1,"container-fluid"],[1,"block-header","mt-n3"],[1,"row"],[1,"col-xl-6","col-lg-6","col-md-12","col-sm-12"],[1,"breadcrumb","breadcrumb-style"],[1,"breadcrumb-item"],[1,"font-weight-bold"]],template:function(e,a){1&e&&(s.ic(0,"section",0),s.ic(1,"div",1),s.ic(2,"div",2),s.ic(3,"div",3),s.ic(4,"div",4),s.ic(5,"ul",5),s.ic(6,"li",6),s.ic(7,"h4",7),s.cd(8),s.hc(),s.hc(),s.hc(),s.hc(),s.hc(),s.hc(),s.hc(),s.hc()),2&e&&(s.Pb(8),s.fd("",a._welcome," ",a.user.name,""))},styles:[""]}),e})()}];let o=(()=>{class e{}return e.\u0275mod=s.ac({type:e}),e.\u0275inj=s.Zb({factory:function(a){return new(a||e)},imports:[[i.h.forChild(v)],i.h]}),e})();var c=t("DKVz"),h=t("CV0D"),g=t("NFeN"),p=t("bTqV"),f=t("Qu3c"),m=t("wZkO"),b=t("Mumg");let _=(()=>{class e{}return e.\u0275mod=s.ac({type:e}),e.\u0275inj=s.Zb({factory:function(a){return new(a||e)},imports:[[l.c,o,c.b.forRoot({echarts:()=>t.e(18).then(t.t.bind(null,"MT78",7))}),u.c,g.b,h.b,p.c,f.b,m.d,b.a]]}),e})()}}]);