!function(){function e(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],i=!0,o=!1,r=void 0;try{for(var s,a=e[Symbol.iterator]();!(i=(s=a.next()).done)&&(n.push(s.value),!t||n.length!==t);i=!0);}catch(u){o=!0,r=u}finally{try{i||null==a.return||a.return()}finally{if(o)throw r}}return n}(e,t)||n(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||n(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t){if(e){if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=c(e);if(t){var o=c(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return a(this,n)}}function a(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?u(e):t}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function m(e,t,n){return t&&h(e.prototype,t),n&&h(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{STbY:function(n,i,r){"use strict";r.d(i,"a",(function(){return B})),r.d(i,"b",(function(){return X})),r.d(i,"c",(function(){return $})),r.d(i,"d",(function(){return G})),r.d(i,"e",(function(){return J}));var a=r("u47x"),c=r("8LU1"),h=r("FtGj"),d=r("fXoL"),f=r("XNiG"),p=r("quSY"),b=r("VRyK"),_=r("LRne"),v=r("7Hc7"),g=r("JX91"),y=r("eIep"),k=r("IzEk"),O=r("pLZG"),M=r("1G5W"),w=r("3E0/"),C=r("R0Ic"),I=r("+rOU"),j=r("ofXK"),x=r("FKr1"),S=r("rDax"),P=r("nLfN"),R=r("vxfF"),A=r("cH1L"),D=["mat-menu-item",""],E=["*"];function T(e,t){if(1&e){var n=d.jc();d.ic(0,"div",0),d.tc("keydown",(function(e){return d.Qc(n),d.xc()._handleKeydown(e)}))("click",(function(){return d.Qc(n),d.xc().closed.emit("click")}))("@transformMenu.start",(function(e){return d.Qc(n),d.xc()._onAnimationStart(e)}))("@transformMenu.done",(function(e){return d.Qc(n),d.xc()._onAnimationDone(e)})),d.ic(1,"div",1),d.Bc(2),d.hc(),d.hc()}if(2&e){var i=d.xc();d.Dc("id",i.panelId)("ngClass",i._classList)("@transformMenu",i._panelAnimationState),d.Qb("aria-label",i.ariaLabel||null)("aria-labelledby",i.ariaLabelledby||null)("aria-describedby",i.ariaDescribedby||null)}}var L={transformMenu:Object(C.n)("transformMenu",[Object(C.k)("void",Object(C.l)({opacity:0,transform:"scale(0.8)"})),Object(C.m)("void => enter",Object(C.g)([Object(C.i)(".mat-menu-content, .mat-mdc-menu-content",Object(C.e)("100ms linear",Object(C.l)({opacity:1}))),Object(C.e)("120ms cubic-bezier(0, 0, 0.2, 1)",Object(C.l)({transform:"scale(1)"}))])),Object(C.m)("* => void",Object(C.e)("100ms 25ms linear",Object(C.l)({opacity:0})))]),fadeInItems:Object(C.n)("fadeInItems",[Object(C.k)("showing",Object(C.l)({opacity:1})),Object(C.m)("void => *",[Object(C.l)({opacity:0}),Object(C.e)("400ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)")])])},F=new d.y("MatMenuContent"),B=function(){var e=function(){function e(t,n,i,o,r,s,a){l(this,e),this._template=t,this._componentFactoryResolver=n,this._appRef=i,this._injector=o,this._viewContainerRef=r,this._document=s,this._changeDetectorRef=a,this._attached=new f.a}return m(e,[{key:"attach",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this._portal||(this._portal=new I.j(this._template,this._viewContainerRef)),this.detach(),this._outlet||(this._outlet=new I.f(this._document.createElement("div"),this._componentFactoryResolver,this._appRef,this._injector));var t=this._template.elementRef.nativeElement;t.parentNode.insertBefore(this._outlet.outletElement,t),this._changeDetectorRef&&this._changeDetectorRef.markForCheck(),this._portal.attach(this._outlet,e),this._attached.next()}},{key:"detach",value:function(){this._portal.isAttached&&this._portal.detach()}},{key:"ngOnDestroy",value:function(){this._outlet&&this._outlet.dispose()}}]),e}();return e.\u0275fac=function(t){return new(t||e)(d.cc(d.Y),d.cc(d.l),d.cc(d.g),d.cc(d.z),d.cc(d.db),d.cc(j.d),d.cc(d.i))},e.\u0275dir=d.Xb({type:e,selectors:[["ng-template","matMenuContent",""]],features:[d.Ob([{provide:F,useExisting:e}])]}),e}(),Y=new d.y("MAT_MENU_PANEL"),z=Object(x.B)(Object(x.C)((function e(){l(this,e)}))),X=function(){var e=function(e){o(n,e);var t=s(n);function n(e,i,o,r){var s;return l(this,n),(s=t.call(this))._elementRef=e,s._focusMonitor=o,s._parentMenu=r,s.role="menuitem",s._hovered=new f.a,s._focused=new f.a,s._highlighted=!1,s._triggersSubmenu=!1,r&&r.addItem&&r.addItem(u(s)),s}return m(n,[{key:"focus",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"program",t=arguments.length>1?arguments[1]:void 0;this._focusMonitor?this._focusMonitor.focusVia(this._getHostElement(),e,t):this._getHostElement().focus(t),this._focused.next(this)}},{key:"ngAfterViewInit",value:function(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}},{key:"ngOnDestroy",value:function(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}},{key:"_getTabIndex",value:function(){return this.disabled?"-1":"0"}},{key:"_getHostElement",value:function(){return this._elementRef.nativeElement}},{key:"_checkDisabled",value:function(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}},{key:"_handleMouseEnter",value:function(){this._hovered.next(this)}},{key:"getLabel",value:function(){for(var e,t,n=this._elementRef.nativeElement.cloneNode(!0),i=n.querySelectorAll("mat-icon, .material-icons"),o=0;o<i.length;o++){var r=i[o];null===(e=r.parentNode)||void 0===e||e.removeChild(r)}return(null===(t=n.textContent)||void 0===t?void 0:t.trim())||""}}]),n}(z);return e.\u0275fac=function(t){return new(t||e)(d.cc(d.o),d.cc(j.d),d.cc(a.h),d.cc(Y,8))},e.\u0275cmp=d.Wb({type:e,selectors:[["","mat-menu-item",""]],hostAttrs:[1,"mat-focus-indicator"],hostVars:10,hostBindings:function(e,t){1&e&&d.tc("click",(function(e){return t._checkDisabled(e)}))("mouseenter",(function(){return t._handleMouseEnter()})),2&e&&(d.Qb("role",t.role)("tabindex",t._getTabIndex())("aria-disabled",t.disabled.toString())("disabled",t.disabled||null),d.Ub("mat-menu-item",!0)("mat-menu-item-highlighted",t._highlighted)("mat-menu-item-submenu-trigger",t._triggersSubmenu))},inputs:{disabled:"disabled",disableRipple:"disableRipple",role:"role"},exportAs:["matMenuItem"],features:[d.Mb],attrs:D,ngContentSelectors:E,decls:2,vars:2,consts:[["matRipple","",1,"mat-menu-ripple",3,"matRippleDisabled","matRippleTrigger"]],template:function(e,t){1&e&&(d.Cc(),d.Bc(0),d.dc(1,"div",0)),2&e&&(d.Pb(1),d.Dc("matRippleDisabled",t.disableRipple||t.disabled)("matRippleTrigger",t._getHostElement()))},directives:[x.u],encapsulation:2,changeDetection:0}),e}(),H=new d.y("mat-menu-default-options",{providedIn:"root",factory:function(){return{overlapTrigger:!1,xPosition:"after",yPosition:"below",backdropClass:"cdk-overlay-transparent-backdrop"}}}),Q=0,V=function(){var e=function(){function e(t,n,i){l(this,e),this._elementRef=t,this._ngZone=n,this._defaultOptions=i,this._xPosition=this._defaultOptions.xPosition,this._yPosition=this._defaultOptions.yPosition,this._directDescendantItems=new d.P,this._tabSubscription=p.a.EMPTY,this._classList={},this._panelAnimationState="void",this._animationDone=new f.a,this.overlayPanelClass=this._defaultOptions.overlayPanelClass||"",this.backdropClass=this._defaultOptions.backdropClass,this._overlapTrigger=this._defaultOptions.overlapTrigger,this._hasBackdrop=this._defaultOptions.hasBackdrop,this.closed=new d.r,this.close=this.closed,this.panelId="mat-menu-panel-"+Q++}return m(e,[{key:"ngOnInit",value:function(){this.setPositionClasses()}},{key:"ngAfterContentInit",value:function(){var e=this;this._updateDirectDescendants(),this._keyManager=new a.g(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd(),this._tabSubscription=this._keyManager.tabOut.subscribe((function(){return e.closed.emit("tab")})),this._directDescendantItems.changes.pipe(Object(g.a)(this._directDescendantItems),Object(y.a)((function(e){return Object(b.a).apply(void 0,t(e.map((function(e){return e._focused}))))}))).subscribe((function(t){return e._keyManager.updateActiveItem(t)}))}},{key:"ngOnDestroy",value:function(){this._directDescendantItems.destroy(),this._tabSubscription.unsubscribe(),this.closed.complete()}},{key:"_hovered",value:function(){return this._directDescendantItems.changes.pipe(Object(g.a)(this._directDescendantItems),Object(y.a)((function(e){return Object(b.a).apply(void 0,t(e.map((function(e){return e._hovered}))))})))}},{key:"addItem",value:function(e){}},{key:"removeItem",value:function(e){}},{key:"_handleKeydown",value:function(e){var t=e.keyCode,n=this._keyManager;switch(t){case h.h:Object(h.t)(e)||(e.preventDefault(),this.closed.emit("keydown"));break;case h.j:this.parentMenu&&"ltr"===this.direction&&this.closed.emit("keydown");break;case h.n:this.parentMenu&&"rtl"===this.direction&&this.closed.emit("keydown");break;default:t!==h.q&&t!==h.e||n.setFocusOrigin("keyboard"),n.onKeydown(e)}}},{key:"focusFirstItem",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"program";this.lazyContent?this._ngZone.onStable.pipe(Object(k.a)(1)).subscribe((function(){return e._focusFirstItem(t)})):this._focusFirstItem(t)}},{key:"_focusFirstItem",value:function(e){var t=this._keyManager;if(t.setFocusOrigin(e).setFirstItemActive(),!t.activeItem&&this._directDescendantItems.length)for(var n=this._directDescendantItems.first._getHostElement().parentElement;n;){if("menu"===n.getAttribute("role")){n.focus();break}n=n.parentElement}}},{key:"resetActiveItem",value:function(){this._keyManager.setActiveItem(-1)}},{key:"setElevation",value:function(e){var t="mat-elevation-z"+Math.min(4+e,24),n=Object.keys(this._classList).find((function(e){return e.startsWith("mat-elevation-z")}));n&&n!==this._previousElevation||(this._previousElevation&&(this._classList[this._previousElevation]=!1),this._classList[t]=!0,this._previousElevation=t)}},{key:"setPositionClasses",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.xPosition,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.yPosition,n=this._classList;n["mat-menu-before"]="before"===e,n["mat-menu-after"]="after"===e,n["mat-menu-above"]="above"===t,n["mat-menu-below"]="below"===t}},{key:"_startAnimation",value:function(){this._panelAnimationState="enter"}},{key:"_resetAnimation",value:function(){this._panelAnimationState="void"}},{key:"_onAnimationDone",value:function(e){this._animationDone.next(e),this._isAnimating=!1}},{key:"_onAnimationStart",value:function(e){this._isAnimating=!0,"enter"===e.toState&&0===this._keyManager.activeItemIndex&&(e.element.scrollTop=0)}},{key:"_updateDirectDescendants",value:function(){var e=this;this._allItems.changes.pipe(Object(g.a)(this._allItems)).subscribe((function(t){e._directDescendantItems.reset(t.filter((function(t){return t._parentMenu===e}))),e._directDescendantItems.notifyOnChanges()}))}},{key:"xPosition",get:function(){return this._xPosition},set:function(e){this._xPosition=e,this.setPositionClasses()}},{key:"yPosition",get:function(){return this._yPosition},set:function(e){this._yPosition=e,this.setPositionClasses()}},{key:"overlapTrigger",get:function(){return this._overlapTrigger},set:function(e){this._overlapTrigger=Object(c.c)(e)}},{key:"hasBackdrop",get:function(){return this._hasBackdrop},set:function(e){this._hasBackdrop=Object(c.c)(e)}},{key:"panelClass",set:function(e){var t=this,n=this._previousPanelClass;n&&n.length&&n.split(" ").forEach((function(e){t._classList[e]=!1})),this._previousPanelClass=e,e&&e.length&&(e.split(" ").forEach((function(e){t._classList[e]=!0})),this._elementRef.nativeElement.className="")}},{key:"classList",get:function(){return this.panelClass},set:function(e){this.panelClass=e}}]),e}();return e.\u0275fac=function(t){return new(t||e)(d.cc(d.o),d.cc(d.J),d.cc(H))},e.\u0275dir=d.Xb({type:e,contentQueries:function(e,t,n){var i;1&e&&(d.Vb(n,F,!0),d.Vb(n,X,!0),d.Vb(n,X,!1)),2&e&&(d.Lc(i=d.uc())&&(t.lazyContent=i.first),d.Lc(i=d.uc())&&(t._allItems=i),d.Lc(i=d.uc())&&(t.items=i))},viewQuery:function(e,t){var n;1&e&&d.gd(d.Y,!0),2&e&&d.Lc(n=d.uc())&&(t.templateRef=n.first)},inputs:{backdropClass:"backdropClass",xPosition:"xPosition",yPosition:"yPosition",overlapTrigger:"overlapTrigger",hasBackdrop:"hasBackdrop",panelClass:["class","panelClass"],classList:"classList",ariaLabel:["aria-label","ariaLabel"],ariaLabelledby:["aria-labelledby","ariaLabelledby"],ariaDescribedby:["aria-describedby","ariaDescribedby"]},outputs:{closed:"closed",close:"close"}}),e}(),K=function(){var e=function(e){o(n,e);var t=s(n);function n(){return l(this,n),t.apply(this,arguments)}return n}(V);return e.\u0275fac=function(t){return N(t||e)},e.\u0275dir=d.Xb({type:e,features:[d.Mb]}),e}(),N=d.kc(K),J=function(){var e=function(e){o(n,e);var t=s(n);function n(e,i,o){return l(this,n),t.call(this,e,i,o)}return n}(K);return e.\u0275fac=function(t){return new(t||e)(d.cc(d.o),d.cc(d.J),d.cc(H))},e.\u0275cmp=d.Wb({type:e,selectors:[["mat-menu"]],exportAs:["matMenu"],features:[d.Ob([{provide:Y,useExisting:K},{provide:K,useExisting:e}]),d.Mb],ngContentSelectors:E,decls:1,vars:0,consts:[["tabindex","-1","role","menu",1,"mat-menu-panel",3,"id","ngClass","keydown","click"],[1,"mat-menu-content"]],template:function(e,t){1&e&&(d.Cc(),d.ad(0,T,3,6,"ng-template"))},directives:[j.l],styles:['.mat-menu-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;max-height:calc(100vh - 48px);border-radius:4px;outline:0;min-height:64px}.mat-menu-panel.ng-animating{pointer-events:none}.cdk-high-contrast-active .mat-menu-panel{outline:solid 1px}.mat-menu-content:not(:empty){padding-top:8px;padding-bottom:8px}.mat-menu-item{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;position:relative}.mat-menu-item::-moz-focus-inner{border:0}.mat-menu-item[disabled]{cursor:default}[dir=rtl] .mat-menu-item{text-align:right}.mat-menu-item .mat-icon{margin-right:16px;vertical-align:middle}.mat-menu-item .mat-icon svg{vertical-align:top}[dir=rtl] .mat-menu-item .mat-icon{margin-left:16px;margin-right:0}.mat-menu-item[disabled]{pointer-events:none}.cdk-high-contrast-active .mat-menu-item.cdk-program-focused,.cdk-high-contrast-active .mat-menu-item.cdk-keyboard-focused,.cdk-high-contrast-active .mat-menu-item-highlighted{outline:dotted 1px}.mat-menu-item-submenu-trigger{padding-right:32px}.mat-menu-item-submenu-trigger::after{width:0;height:0;border-style:solid;border-width:5px 0 5px 5px;border-color:transparent transparent transparent currentColor;content:"";display:inline-block;position:absolute;top:50%;right:16px;transform:translateY(-50%)}[dir=rtl] .mat-menu-item-submenu-trigger{padding-right:16px;padding-left:32px}[dir=rtl] .mat-menu-item-submenu-trigger::after{right:auto;left:16px;transform:rotateY(180deg) translateY(-50%)}button.mat-menu-item{width:100%}.mat-menu-item .mat-menu-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}\n'],encapsulation:2,data:{animation:[L.transformMenu,L.fadeInItems]},changeDetection:0}),e}(),U=new d.y("mat-menu-scroll-strategy"),W={provide:U,deps:[S.d],useFactory:function(e){return function(){return e.scrollStrategies.reposition()}}},Z=Object(P.f)({passive:!0}),G=function(){var t=function(){function t(e,n,i,o,r,s,a,u){var c=this;l(this,t),this._overlay=e,this._element=n,this._viewContainerRef=i,this._parentMenu=r,this._menuItemInstance=s,this._dir=a,this._focusMonitor=u,this._overlayRef=null,this._menuOpen=!1,this._closingActionsSubscription=p.a.EMPTY,this._hoverSubscription=p.a.EMPTY,this._menuCloseSubscription=p.a.EMPTY,this._handleTouchStart=function(){return c._openedBy="touch"},this._openedBy=null,this.restoreFocus=!0,this.menuOpened=new d.r,this.onMenuOpen=this.menuOpened,this.menuClosed=new d.r,this.onMenuClose=this.menuClosed,n.nativeElement.addEventListener("touchstart",this._handleTouchStart,Z),s&&(s._triggersSubmenu=this.triggersSubmenu()),this._scrollStrategy=o}return m(t,[{key:"ngAfterContentInit",value:function(){this._checkMenu(),this._handleHover()}},{key:"ngOnDestroy",value:function(){this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null),this._element.nativeElement.removeEventListener("touchstart",this._handleTouchStart,Z),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._hoverSubscription.unsubscribe()}},{key:"triggersSubmenu",value:function(){return!(!this._menuItemInstance||!this._parentMenu)}},{key:"toggleMenu",value:function(){return this._menuOpen?this.closeMenu():this.openMenu()}},{key:"openMenu",value:function(){var e=this;if(!this._menuOpen){this._checkMenu();var t=this._createOverlay(),n=t.getConfig();this._setPosition(n.positionStrategy),n.hasBackdrop=null==this.menu.hasBackdrop?!this.triggersSubmenu():this.menu.hasBackdrop,t.attach(this._getPortal()),this.menu.lazyContent&&this.menu.lazyContent.attach(this.menuData),this._closingActionsSubscription=this._menuClosingActions().subscribe((function(){return e.closeMenu()})),this._initMenu(),this.menu instanceof K&&this.menu._startAnimation()}}},{key:"closeMenu",value:function(){this.menu.close.emit()}},{key:"focus",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"program",t=arguments.length>1?arguments[1]:void 0;this._focusMonitor?this._focusMonitor.focusVia(this._element,e,t):this._element.nativeElement.focus(t)}},{key:"_destroyMenu",value:function(){var e=this;if(this._overlayRef&&this.menuOpen){var t=this.menu;this._closingActionsSubscription.unsubscribe(),this._overlayRef.detach(),this._restoreFocus(),t instanceof K?(t._resetAnimation(),t.lazyContent?t._animationDone.pipe(Object(O.a)((function(e){return"void"===e.toState})),Object(k.a)(1),Object(M.a)(t.lazyContent._attached)).subscribe({next:function(){return t.lazyContent.detach()},complete:function(){return e._setIsMenuOpen(!1)}}):this._setIsMenuOpen(!1)):(this._setIsMenuOpen(!1),t.lazyContent&&t.lazyContent.detach())}}},{key:"_initMenu",value:function(){this.menu.parentMenu=this.triggersSubmenu()?this._parentMenu:void 0,this.menu.direction=this.dir,this._setMenuElevation(),this._setIsMenuOpen(!0),this.menu.focusFirstItem(this._openedBy||"program")}},{key:"_setMenuElevation",value:function(){if(this.menu.setElevation){for(var e=0,t=this.menu.parentMenu;t;)e++,t=t.parentMenu;this.menu.setElevation(e)}}},{key:"_restoreFocus",value:function(){this.restoreFocus&&(this._openedBy?this.triggersSubmenu()||this.focus(this._openedBy):this.focus()),this._openedBy=null}},{key:"_setIsMenuOpen",value:function(e){this._menuOpen=e,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this.triggersSubmenu()&&(this._menuItemInstance._highlighted=e)}},{key:"_checkMenu",value:function(){}},{key:"_createOverlay",value:function(){if(!this._overlayRef){var e=this._getOverlayConfig();this._subscribeToPositions(e.positionStrategy),this._overlayRef=this._overlay.create(e),this._overlayRef.keydownEvents().subscribe()}return this._overlayRef}},{key:"_getOverlayConfig",value:function(){return new S.e({positionStrategy:this._overlay.position().flexibleConnectedTo(this._element).withLockedPosition().withTransformOriginOn(".mat-menu-panel, .mat-mdc-menu-panel"),backdropClass:this.menu.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:this.menu.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir})}},{key:"_subscribeToPositions",value:function(e){var t=this;this.menu.setPositionClasses&&e.positionChanges.subscribe((function(e){t.menu.setPositionClasses("start"===e.connectionPair.overlayX?"after":"before","top"===e.connectionPair.overlayY?"below":"above")}))}},{key:"_setPosition",value:function(t){var n=e("before"===this.menu.xPosition?["end","start"]:["start","end"],2),i=n[0],o=n[1],r=e("above"===this.menu.yPosition?["bottom","top"]:["top","bottom"],2),s=r[0],a=r[1],u=s,c=a,l=i,h=o,m=0;this.triggersSubmenu()?(h=i="before"===this.menu.xPosition?"start":"end",o=l="end"===i?"start":"end",m="bottom"===s?8:-8):this.menu.overlapTrigger||(u="top"===s?"bottom":"top",c="top"===a?"bottom":"top"),t.withPositions([{originX:i,originY:u,overlayX:l,overlayY:s,offsetY:m},{originX:o,originY:u,overlayX:h,overlayY:s,offsetY:m},{originX:i,originY:c,overlayX:l,overlayY:a,offsetY:-m},{originX:o,originY:c,overlayX:h,overlayY:a,offsetY:-m}])}},{key:"_menuClosingActions",value:function(){var e=this,t=this._overlayRef.backdropClick(),n=this._overlayRef.detachments(),i=this._parentMenu?this._parentMenu.closed:Object(_.a)(),o=this._parentMenu?this._parentMenu._hovered().pipe(Object(O.a)((function(t){return t!==e._menuItemInstance})),Object(O.a)((function(){return e._menuOpen}))):Object(_.a)();return Object(b.a)(t,i,o,n)}},{key:"_handleMousedown",value:function(e){Object(a.l)(e)||(this._openedBy=0===e.button?"mouse":null,this.triggersSubmenu()&&e.preventDefault())}},{key:"_handleKeydown",value:function(e){var t=e.keyCode;this.triggersSubmenu()&&(t===h.n&&"ltr"===this.dir||t===h.j&&"rtl"===this.dir)&&this.openMenu()}},{key:"_handleClick",value:function(e){this.triggersSubmenu()?(e.stopPropagation(),this.openMenu()):this.toggleMenu()}},{key:"_handleHover",value:function(){var e=this;this.triggersSubmenu()&&(this._hoverSubscription=this._parentMenu._hovered().pipe(Object(O.a)((function(t){return t===e._menuItemInstance&&!t.disabled})),Object(w.a)(0,v.a)).subscribe((function(){e._openedBy="mouse",e.menu instanceof K&&e.menu._isAnimating?e.menu._animationDone.pipe(Object(k.a)(1),Object(w.a)(0,v.a),Object(M.a)(e._parentMenu._hovered())).subscribe((function(){return e.openMenu()})):e.openMenu()})))}},{key:"_getPortal",value:function(){return this._portal&&this._portal.templateRef===this.menu.templateRef||(this._portal=new I.j(this.menu.templateRef,this._viewContainerRef)),this._portal}},{key:"_deprecatedMatMenuTriggerFor",get:function(){return this.menu},set:function(e){this.menu=e}},{key:"menu",get:function(){return this._menu},set:function(e){var t=this;e!==this._menu&&(this._menu=e,this._menuCloseSubscription.unsubscribe(),e&&(this._menuCloseSubscription=e.close.subscribe((function(e){t._destroyMenu(),"click"!==e&&"tab"!==e||!t._parentMenu||t._parentMenu.closed.emit(e)}))))}},{key:"menuOpen",get:function(){return this._menuOpen}},{key:"dir",get:function(){return this._dir&&"rtl"===this._dir.value?"rtl":"ltr"}}]),t}();return t.\u0275fac=function(e){return new(e||t)(d.cc(S.d),d.cc(d.o),d.cc(d.db),d.cc(U),d.cc(K,8),d.cc(X,10),d.cc(A.b,8),d.cc(a.h))},t.\u0275dir=d.Xb({type:t,selectors:[["","mat-menu-trigger-for",""],["","matMenuTriggerFor",""]],hostAttrs:["aria-haspopup","true",1,"mat-menu-trigger"],hostVars:2,hostBindings:function(e,t){1&e&&d.tc("mousedown",(function(e){return t._handleMousedown(e)}))("keydown",(function(e){return t._handleKeydown(e)}))("click",(function(e){return t._handleClick(e)})),2&e&&d.Qb("aria-expanded",t.menuOpen||null)("aria-controls",t.menuOpen?t.menu.panelId:null)},inputs:{restoreFocus:["matMenuTriggerRestoreFocus","restoreFocus"],_deprecatedMatMenuTriggerFor:["mat-menu-trigger-for","_deprecatedMatMenuTriggerFor"],menu:["matMenuTriggerFor","menu"],menuData:["matMenuTriggerData","menuData"]},outputs:{menuOpened:"menuOpened",onMenuOpen:"onMenuOpen",menuClosed:"menuClosed",onMenuClose:"onMenuClose"},exportAs:["matMenuTrigger"]}),t}(),q=function(){var e=function e(){l(this,e)};return e.\u0275mod=d.ac({type:e}),e.\u0275inj=d.Zb({factory:function(t){return new(t||e)},providers:[W],imports:[x.k]}),e}(),$=function(){var e=function e(){l(this,e)};return e.\u0275mod=d.ac({type:e}),e.\u0275inj=d.Zb({factory:function(t){return new(t||e)},providers:[W],imports:[[j.c,x.k,x.v,S.g,q],R.b,x.k,q]}),e}()}}])}();