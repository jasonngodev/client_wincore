(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{Aoip:function(t,i,c){"use strict";c.r(i),c.d(i,"CommonSettingsModule",(function(){return dt}));var e=c("ofXK"),a=c("tyNb"),o=c("mrSG"),n=c("piOG"),d=c("KDUW"),s=c("llI/"),l=c("dDfE"),r=c("PSD3"),h=c.n(r),m=c("0IaG"),g=c("FKr1"),u=c("4VuT"),f=c("fXoL"),b=c("3Pt+"),p=c("bTqV"),y=c("NFeN"),_=c("kmnG"),v=c("qFsG"),w=c("z17N"),k=c("1jcm");function x(t,i){if(1&t&&(f.ic(0,"div",28),f.cd(1),f.hc()),2&t){const t=f.xc();f.Pb(1),f.ed(" ",t.dialogTitle," ")}}function D(t,i){1&t&&(f.ic(0,"div",28),f.cd(1," C\u1eadp nh\u1eadt "),f.hc())}function S(t,i){1&t&&(f.ic(0,"mat-error"),f.cd(1," Vui l\xf2ng nh\u1eadp t\xean vai tr\xf2 "),f.hc())}function T(t,i){1&t&&(f.ic(0,"mat-error"),f.cd(1," Vui l\xf2ng ch\u1ecdn ng\xe0y b\u1eaft \u0111\u1ea7u "),f.hc())}function M(t,i){1&t&&(f.ic(0,"mat-error"),f.cd(1," Vui l\xf2ng ch\u1ecdn ng\xe0y k\u1ebft th\xfac "),f.hc())}let C=(()=>{class t{constructor(t,i,c,e){this.dialogRef=t,this.data=i,this._dataService=c,this.fb=e,this.isDetails=!1,this.entity={},this.action=i.action,"edit"===this.action?(this.entity=i.holidays,this.isDetails=!0,this.holidayForm=this.createRoleForm()):(this.isDetails=!1,this.dialogTitle="T\u1ea1o m\u1edbi",this.entity.is_active=!0,this.holidayForm=this.createRoleForm())}ngOnInit(){}createRoleForm(){return this.fb.group({id:[this.entity.id],name:[this.entity.name],start_date:[null==this.entity.start_date||""==this.entity.start_date?null:new Date(this.entity.start_date)],end_date:[null==this.entity.end_date||""==this.entity.end_date?null:new Date(this.entity.end_date)],is_active:[this.entity.is_active]})}submit(){}confirmAdd(){console.log(this.holidayForm.getRawValue());let t={};t.id=this.holidayForm.get("id").value,t.name=this.holidayForm.get("name").value,t.start_date=Object(e.y)(this.holidayForm.get("start_date").value,"yyyy-MM-dd HH:mm","en"),t.end_date=Object(e.y)(this.holidayForm.get("end_date").value,"yyyy-MM-dd HH:mm","en"),t.is_active=this.holidayForm.get("is_active").value,console.log(t),"add"==this.action?this._dataService.post("/workflow/holiday/add/",t).subscribe(t=>{console.log(t)}):this._dataService.post("/workflow/holiday/update/",t).subscribe(t=>{console.log(t)})}onNoClick(){this.dialogRef.close()}}return t.\u0275fac=function(i){return new(i||t)(f.cc(m.g),f.cc(m.a),f.cc(s.a),f.cc(b.e))},t.\u0275cmp=f.Wb({type:t,selectors:[["app-cmh-form"]],features:[f.Ob([{provide:g.c,useClass:u.b},{provide:g.e,useValue:u.a}])],decls:58,vars:15,consts:[[1,"addContainer"],[1,"contact-form"],[1,"modalHeader"],[1,"editRowModal"],[1,"modalHeader","clearfix"],[1,"modal-about"],["class","font-weight-bold p-t-5 p-l-1 font-17",4,"ngIf"],["mat-icon-button","","aria-label","Close dialog",3,"click"],["mat-dialog-content",""],[1,"register-form","m-4",3,"formGroup","ngSubmit"],[1,"row"],[1,"col-xl-12","col-lg-12","col-md-12","col-sm-12"],["appearance","outline",1,"example-full-width","mb-3"],["matInput","","formControlName","name","required","","autocomplete","off"],["matSuffix","",1,"material-icons-two-tone","color-icon"],[4,"ngIf"],[1,"col-xl-6","col-lg-6","col-md-12","col-sm-12"],["matInput","","formControlName","start_date","autocomplete","off",3,"owlDateTimeTrigger","owlDateTime"],["matSuffix","",1,"date-icon",3,"owlDateTimeTrigger"],["start_date",""],["matInput","","formControlName","end_date","autocomplete","off",3,"owlDateTimeTrigger","owlDateTime"],["end_date",""],["formControlName","is_active"],[1,"row","clear-fix"],[1,"col-xl-12","col-lg-12","col-md-12","col-sm-12","mb-2"],[1,"example-button-row"],["mat-raised-button","","color","primary",3,"type","disabled","mat-dialog-close","click"],["mat-raised-button","","color","warn","tabindex","-1",3,"click"],[1,"font-weight-bold","p-t-5","p-l-1","font-17"]],template:function(t,i){if(1&t&&(f.ic(0,"div",0),f.ic(1,"div",1),f.ic(2,"div",2),f.ic(3,"div",3),f.ic(4,"div",4),f.ic(5,"div",5),f.ad(6,x,2,1,"div",6),f.ad(7,D,2,0,"div",6),f.hc(),f.hc(),f.hc(),f.ic(8,"button",7),f.tc("click",(function(){return i.dialogRef.close()})),f.ic(9,"mat-icon"),f.cd(10,"close"),f.hc(),f.hc(),f.hc(),f.ic(11,"div",8),f.ic(12,"form",9),f.tc("ngSubmit",(function(){return i.submit})),f.ic(13,"div",10),f.ic(14,"div",11),f.ic(15,"mat-form-field",12),f.ic(16,"mat-label"),f.cd(17,"Ti\xeau \u0111\u1ec1"),f.hc(),f.dc(18,"input",13),f.ic(19,"i",14),f.cd(20,"face"),f.hc(),f.ad(21,S,2,0,"mat-error",15),f.hc(),f.hc(),f.hc(),f.ic(22,"div",10),f.ic(23,"div",16),f.ic(24,"mat-form-field",12),f.ic(25,"mat-label"),f.cd(26,"T\u1eeb ng\xe0y"),f.hc(),f.dc(27,"input",17),f.ic(28,"mat-icon",18),f.cd(29,"today"),f.hc(),f.dc(30,"owl-date-time",null,19),f.ad(32,T,2,0,"mat-error",15),f.hc(),f.hc(),f.ic(33,"div",16),f.ic(34,"mat-form-field",12),f.ic(35,"mat-label"),f.cd(36,"\u0110\u1ebfn ng\xe0y"),f.hc(),f.dc(37,"input",20),f.ic(38,"mat-icon",18),f.cd(39,"today"),f.hc(),f.dc(40,"owl-date-time",null,21),f.ad(42,M,2,0,"mat-error",15),f.hc(),f.hc(),f.hc(),f.ic(43,"div",10),f.ic(44,"div",16),f.ic(45,"mat-label"),f.cd(46,"Ho\u1ea1t \u0111\u1ed9ng"),f.hc(),f.dc(47,"br"),f.dc(48,"mat-slide-toggle",22),f.hc(),f.hc(),f.ic(49,"div",23),f.dc(50,"br"),f.hc(),f.ic(51,"div",10),f.ic(52,"div",24),f.ic(53,"div",25),f.ic(54,"button",26),f.tc("click",(function(){return i.confirmAdd()})),f.cd(55," Save "),f.hc(),f.ic(56,"button",27),f.tc("click",(function(){return i.onNoClick()})),f.cd(57," Cancel "),f.hc(),f.hc(),f.hc(),f.hc(),f.hc(),f.hc(),f.hc(),f.hc()),2&t){const t=f.Mc(31),c=f.Mc(41);f.Pb(6),f.Dc("ngIf",!i.isDetails),f.Pb(1),f.Dc("ngIf",i.isDetails),f.Pb(5),f.Dc("formGroup",i.holidayForm),f.Pb(9),f.Dc("ngIf",i.holidayForm.get("name").hasError("required")),f.Pb(6),f.Dc("owlDateTimeTrigger",t)("owlDateTime",t),f.Pb(1),f.Dc("owlDateTimeTrigger",t),f.Pb(4),f.Dc("ngIf",i.holidayForm.get("start_date").hasError("required")),f.Pb(5),f.Dc("owlDateTimeTrigger",c)("owlDateTime",c),f.Pb(1),f.Dc("owlDateTimeTrigger",c),f.Pb(4),f.Dc("ngIf",i.holidayForm.get("end_date").hasError("required")),f.Pb(12),f.Dc("type",i.submit)("disabled",!i.holidayForm.valid)("mat-dialog-close",1)}},directives:[e.n,p.b,y.a,m.e,b.y,b.o,b.i,_.c,_.g,v.b,b.d,b.n,b.h,b.u,_.i,w.c,w.e,w.b,k.a,m.d,_.b],styles:[""]}),t})();var P=c("dNgK"),I=c("Lm2G");function R(t,i){if(1&t){const t=f.jc();f.ic(0,"button",36),f.tc("click",(function(){f.Qc(t);const i=f.xc();return i._deleteAll(i.holidays)})),f.dc(1,"i",37),f.hc()}}function F(t,i){1&t&&f.dc(0,"img",48)}function N(t,i){1&t&&f.dc(0,"img",49)}function G(t,i){if(1&t){const t=f.jc();f.ic(0,"tr"),f.ic(1,"td",38),f.cd(2),f.hc(),f.ic(3,"td"),f.ic(4,"input",39),f.tc("change",(function(){f.Qc(t);const c=i.$implicit;return f.xc()._changeCheckOne(c)}))("ngModelChange",(function(c){return f.Qc(t),i.$implicit.flag=c})),f.hc(),f.hc(),f.ic(5,"td",40),f.tc("click",(function(){return f.Qc(t),f.xc()._editTask()})),f.cd(6),f.hc(),f.ic(7,"td"),f.cd(8),f.yc(9,"date"),f.hc(),f.ic(10,"td"),f.cd(11),f.yc(12,"date"),f.hc(),f.ic(13,"td"),f.ad(14,F,1,0,"img",41),f.ad(15,N,1,0,"img",42),f.hc(),f.ic(16,"td"),f.ic(17,"a",43),f.tc("click",(function(){f.Qc(t);const c=i.$implicit;return f.xc()._editTask(c)})),f.dc(18,"i",44),f.hc(),f.ic(19,"a",45),f.tc("click",(function(){return f.Qc(t),f.xc()._copyTask()})),f.dc(20,"i",46),f.hc(),f.ic(21,"a",47),f.tc("click",(function(){f.Qc(t);const c=i.$implicit;return f.xc()._delete(c)})),f.dc(22,"i",37),f.hc(),f.hc(),f.hc()}if(2&t){const t=i.$implicit,c=i.index;f.Pb(2),f.dd(c+1),f.Pb(2),f.Fc("name","ckU",c+1,""),f.Dc("ngModel",t.flag),f.Pb(2),f.ed(" ",t.name," "),f.Pb(2),f.dd(f.Ac(9,8,t.start_date,"dd/MM/yyyy HH:mm")),f.Pb(3),f.dd(f.Ac(12,11,t.end_date,"dd/MM/yyyy HH:mm")),f.Pb(3),f.Dc("ngIf",t.is_active),f.Pb(1),f.Dc("ngIf",!t.is_active)}}const A=[{path:"holidays",component:(()=>{class t{constructor(t,i,c,e,a,o){this.dialog=t,this.snackBar=i,this._dataService=c,this._notifyService=e,this._authService=a,this.router=o,this.pageIndex=1,this.pageSize=10,this.pageDisplay=10,this.totalRow=0,this.filter="",this.entity={},this.holidays=[],this._isLoading=!1,this._checkAll=!1,this.URL="ws://localhost:8000/workflow"}ngOnInit(){this.loadData()}setsock(){var t=new WebSocket("ws://localhost:8000/alarm/workflow/");this.socket=t,this.socket.onmessage=t=>{var i=JSON.parse(t.data);console.log("data from socket:"+i.message)},this.socket.onclose=t=>{console.log("WebSockets disconnection.")},this.socket.onopen=()=>{console.log("Try WebSockets connection created.")}}test(){this.socket.send("start")}test1(){this.socket.send("stop")}loadData(){let t={};this._isLoading=!0,t.filter=this.filter,t.page=this.pageIndex,t.limit=this.pageSize,this._dataService.post("/workflow/holiday/getlistbypaging/",t).subscribe(t=>{console.log(t);let i=[];for(let c of t.data)i.push({id:c.id,name:c.name,start_date:c.start_date,end_date:c.end_date,flag:!1,is_active:c.is_active});this.holidays=i,this.totalRow=t.row_count,this.totalPage=t.total_page,this._isLoading=!1},()=>this._isLoading=!1)}pageChanged(t){this.pageIndex=t.page,this.loadData()}changeCheckAll(t){let i=[];if(this._checkAll)for(let c of t)i.push({id:c.id,name:c.name,start_date:c.start_date,end_date:c.end_date,flag:!0,is_active:c.is_active});else for(let c of t)i.push({id:c.id,name:c.name,start_date:c.start_date,end_date:c.end_date,flag:!1,is_active:c.is_active});this.holidays=i}_changeCheckOne(t){this._checkAll=!0;let i=[];for(let c of this.holidays)i.push(c.id==t.id?{id:c.id,name:c.name,start_date:c.start_date,end_date:c.end_date,flag:t.flag,is_active:c.is_active}:{id:c.id,name:c.name,start_date:c.start_date,end_date:c.end_date,flag:c.flag,is_active:c.is_active});this.holidays=i}addNew(){this.entity={},this.dialog.open(C,{width:"750px",data:{holidays:this.entity,action:"add"}}).afterClosed().subscribe(t=>{1===t&&(this._notifyService.showNotification("snackbar-success",n.a.MSG_ADD_VN,"top","center"),this.loadData())})}_editTask(t){this.dialog.open(C,{width:"750px",data:{holidays:t,action:"edit"}}).afterClosed().subscribe(t=>{1===t&&(this._notifyService.showNotification("snackbar-success",n.a.MSG_UPDATE_VN,"top","center"),this.loadData())})}_copyTask(){}_delete(t){h.a.fire({title:n.a.MSG_R_U_S_VI,text:t.name,icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"\u0110\u1ed3ng \xfd",cancelButtonText:"Kh\xf4ng"}).then(i=>{if(i.value){let i={},c='["'+t.id+'"]';console.log(c),i.ids=JSON.parse(c),this._dataService.post("/workflow/holiday/delete/",i).subscribe(t=>{console.log(t),this.loadData(),200==t.status?this._notifyService.showSuccess(n.a.MSG_DELETE_VN,"OK"):this._notifyService.showError(n.a.MSG_ERROR,"L\u1ed7i x\u1ea3y ra")},t=>{401===t.status?this.logout():this._notifyService.showError(n.a.MSG_404_VI,"L\u1ed7i x\u1ea3y ra")})}})}_deleteAll(t){h.a.fire({title:n.a.MSG_R_U_S_VI,icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"\u0110\u1ed3ng \xfd",cancelButtonText:"Kh\xf4ng"}).then(i=>{if(i.value){let i={},c=[];for(let e of t)c.push(e.id);console.log(c),i.ids=c,this._dataService.post("/workflow/holiday/delete/",i).subscribe(t=>{console.log(t),this.loadData(),200==t.status?this._notifyService.showSuccess(n.a.MSG_DELETE_VN,"OK"):this._notifyService.showError(n.a.MSG_ERROR,"L\u1ed7i x\u1ea3y ra")},t=>{401===t.status?this.logout():this._notifyService.showError(n.a.MSG_404_VI,"L\u1ed7i x\u1ea3y ra")})}})}logout(){this._authService.logout().subscribe(t=>{t.success||this.router.navigate(["/authentication/signin"])})}delay(t){return Object(o.a)(this,void 0,void 0,(function*(){yield new Promise(i=>setTimeout(()=>i(),t)).then(()=>console.log("fired"))}))}}return t.\u0275fac=function(i){return new(i||t)(f.cc(m.b),f.cc(P.a),f.cc(s.a),f.cc(l.a),f.cc(d.a),f.cc(a.d))},t.\u0275cmp=f.Wb({type:t,selectors:[["app-common-holidays"]],decls:60,vars:13,consts:[[1,"content"],[1,"container-fluid"],[1,"block-header"],[1,"row"],[1,"col-xs-12","col-sm-12","col-md-12","col-lg-12"],[1,"breadcrumb","breadcrumb-style"],[1,"breadcrumb-item","bcrumb-1"],["routerLink","/dashboard/main"],[1,"fas","fa-home"],[1,"breadcrumb-item","active"],[1,"col-md-12"],[1,"tabbable-line"],[1,"col-lg-12","col-md-12","col-sm-12","col-xs-12"],[1,"card"],[1,"header"],[1,"col-md-4"],["type","text","name","filter","placeholder","Nh\u1eadp th\xf4ng tin t\xecm ki\u1ebfm",1,"form-control",3,"ngModel","ngModelChange","change","keyup.enter"],[1,"col-md-1"],["class","btn btn-sm btn-danger",3,"click",4,"ngIf"],[1,"col-md-3"],[1,"col-md-4",2,"text-align","right"],["mat-raised-button","","color","primary",1,"mr-sm-1",3,"click"],["mat-raised-button","","color","accent",1,"bg-success"],[1,"body"],[2,"overflow-x","auto"],["id","hor-minimalist-line"],[2,"width","2px"],[1,"checkboxFive"],["type","checkbox","name","checkAll",1,"form-control",2,"width","15px",3,"disabled","ngModel","ngModelChange","change"],[2,"width","200px"],["scope","col"],[4,"ngFor","ngForOf"],["colspan","4","scope","col"],["previousText","\u2039","nextText","\u203a","firstText","\xab","lastText","\xbb",1,"pagination-sm",3,"boundaryLinks","totalItems","ngModel","maxSize","itemsPerPage","ngModelChange","pageChanged"],["colspan","3","scope","col",1,"text-right"],[1,"btn","btn-sm",2,"padding-bottom","20px"],[1,"btn","btn-sm","btn-danger",3,"click"],[1,"fa","fa-trash"],[2,"text-align","center"],["type","checkbox",1,"form-control",2,"width","15px",3,"name","ngModel","change","ngModelChange"],[2,"cursor","pointer",3,"click"],["src","../../../assets/images/icon-yes.svg",4,"ngIf"],["src","../../../assets/images/icon-no.svg",4,"ngIf"],["href","javascript:;","title","S\u1eeda",1,"btn","btn-sm","btn-success","mr-sm-1",3,"click"],[1,"fas","fa-pencil-alt"],["href","javascript:;","title","Sao ch\xe9p",1,"btn","btn-sm","btn-primary","mr-sm-1",3,"click"],[1,"fa","fa-copy"],["href","javascript:;","title","H\u1ee7y",1,"btn","btn-sm","btn-danger","mr-sm-1",3,"click"],["src","../../../assets/images/icon-yes.svg"],["src","../../../assets/images/icon-no.svg"]],template:function(t,i){1&t&&(f.ic(0,"section",0),f.ic(1,"div",1),f.ic(2,"div",2),f.ic(3,"div",3),f.ic(4,"div",4),f.ic(5,"ul",5),f.ic(6,"li",6),f.ic(7,"a",7),f.dc(8,"i",8),f.cd(9," Trang ch\u1ee7"),f.hc(),f.hc(),f.ic(10,"li",9),f.cd(11,"Danh m\u1ee5c ng\xe0y ngh\u1ec9"),f.hc(),f.hc(),f.hc(),f.hc(),f.hc(),f.ic(12,"div",3),f.ic(13,"div",10),f.ic(14,"div",11),f.ic(15,"div",3),f.ic(16,"div",12),f.ic(17,"div",13),f.ic(18,"div",14),f.ic(19,"div",10),f.ic(20,"div",3),f.ic(21,"div",15),f.ic(22,"input",16),f.tc("ngModelChange",(function(t){return i.filter=t}))("change",(function(){return i.loadData()}))("keyup.enter",(function(){return i.loadData()})),f.hc(),f.hc(),f.ic(23,"div",17),f.ad(24,R,2,0,"button",18),f.hc(),f.dc(25,"div",19),f.ic(26,"div",20),f.ic(27,"button",21),f.tc("click",(function(){return i.addNew()})),f.cd(28," T\u1ea1o m\u1edbi "),f.hc(),f.ic(29,"button",22),f.cd(30," Xu\u1ea5t danh s\xe1ch "),f.hc(),f.hc(),f.hc(),f.hc(),f.hc(),f.ic(31,"div",23),f.ic(32,"div",24),f.ic(33,"table",25),f.ic(34,"thead"),f.ic(35,"tr"),f.ic(36,"th",26),f.cd(37,"STT"),f.hc(),f.ic(38,"th",26),f.ic(39,"div",27),f.ic(40,"input",28),f.tc("ngModelChange",(function(t){return i._checkAll=t}))("change",(function(){return i.changeCheckAll(i.holidays)})),f.hc(),f.hc(),f.hc(),f.ic(41,"th",29),f.cd(42,"Ti\xeau \u0111\u1ec1"),f.hc(),f.ic(43,"th",30),f.cd(44,"B\u1eaft \u0111\u1ea7u"),f.hc(),f.ic(45,"th",30),f.cd(46,"K\u1ebft th\xfac"),f.hc(),f.ic(47,"th",30),f.cd(48,"Tr\u1ea1ng th\xe1i"),f.hc(),f.ic(49,"th",30),f.cd(50,"Thao t\xe1c"),f.hc(),f.hc(),f.hc(),f.ic(51,"tbody"),f.ad(52,G,23,14,"tr",31),f.hc(),f.ic(53,"tfoot"),f.ic(54,"tr"),f.ic(55,"td",32),f.ic(56,"pagination",33),f.tc("ngModelChange",(function(t){return i.pageIndex=t}))("pageChanged",(function(t){return i.pageChanged(t)})),f.hc(),f.hc(),f.ic(57,"td",34),f.ic(58,"a",35),f.cd(59),f.hc(),f.hc(),f.hc(),f.hc(),f.hc(),f.hc(),f.hc(),f.hc(),f.hc(),f.hc(),f.hc(),f.hc(),f.hc(),f.hc(),f.hc()),2&t&&(f.Pb(22),f.Dc("ngModel",i.filter),f.Pb(2),f.Dc("ngIf",i._checkAll),f.Pb(16),f.Dc("disabled",0==i.totalRow)("ngModel",i._checkAll),f.Pb(12),f.Dc("ngForOf",i.holidays),f.Pb(4),f.Dc("boundaryLinks",!0)("totalItems",i.totalRow)("ngModel",i.pageIndex)("maxSize",i.pageDisplay)("itemsPerPage",i.pageSize),f.Pb(3),f.gd("T\u1ed5ng s\u1ed1 m\u1eabu tin: ",i.totalRow," - Trang ",i.pageIndex," c\u1ee7a ",i.totalPage," trang"))},directives:[a.g,b.d,b.n,b.q,e.n,p.b,b.a,e.m,I.a],pipes:[e.e],styles:[""]}),t})()}];let O=(()=>{class t{}return t.\u0275mod=f.ac({type:t}),t.\u0275inj=f.Zb({factory:function(i){return new(i||t)},imports:[[a.h.forChild(A)],a.h]}),t})();var E=c("zioG"),L=c("/1cH"),V=c("jaxi"),j=c("Wp6s"),H=c("bSwM"),B=c("iadO"),q=c("zkoq"),K=c("MutI"),Q=c("STbY"),W=c("QibW"),z=c("d3UM"),U=c("XhcP"),$=c("5RNC"),J=c("Dh3D"),X=c("xHqg"),Z=c("/t3+"),Y=c("Qu3c"),tt=c("8yBR"),it=c("tmjD"),ct=c("R9Cn"),et=c("7ZcW"),at=c("PCNd"),ot=c("+0xr"),nt=c("M9IT");let dt=(()=>{class t{}return t.\u0275mod=f.ac({type:t}),t.\u0275inj=f.Zb({factory:function(i){return new(i||t)},providers:[l.a,s.a],imports:[[e.c,O,b.j,b.t,E.b,L.b,p.c,V.c,j.g,H.b,B.c,m.f,_.e,q.a,y.b,v.c,K.c,Q.c,W.c,z.b,U.d,k.b,$.b,J.c,X.d,Z.a,Y.b,w.d,w.f,it.b,ct.b,et.b,at.a,ot.l,nt.b,P.b,tt.d,I.b.forRoot()]]}),t})()}}]);