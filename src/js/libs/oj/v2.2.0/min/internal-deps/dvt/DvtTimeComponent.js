/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(['./DvtToolkit'], function(dvt) {
  // Internal use only.  All APIs and functionality are subject to change at any time.

var p;function ba(a,b){0==a.indexOf("dvt.")&&(a=a.substring(4));var c=a.split("."),d=eval("dvt");c[0]in d||!d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d=d[e]?d[e]:d[e]={}:d[e]=b}Math.floor(2147483648*Math.random()).toString(36);
(function(a){a.We=function(a,c,d){this.Init(a,c,d)};a.v.F(a.We,a.Le);a.We.REa=1.5;a.We.yja=15;a.We.f3a=40;a.We.prototype.Init=function(b,c,d){a.We.C.Init.call(this,b,c,d);this.Hhb=!1};a.We.prototype.ta=function(a,c,d){a&&(this.Al=a._resources,null==this.Al&&(this.Al=[]),this.yf(a));this.xb=c;this.Kb=d;this.W&&(a=this.oD(this.W),this.Dv(a))};a.We.prototype.yf=function(b){this.W=this.Xg.jn(b);a.B.wj()||(this.W.animationOnDisplay="none",this.W.animationOnDataChange="none")};a.We.prototype.Dv=function(a){this.ac=
a.start;this.Ic=a.end;this.fL=a.EX;this.RE()};a.We.prototype.RE=function(){this.Gk&&this.Gk.Ui(this.fL)};a.We.prototype.yF=function(a){this.je=this.Af<a?a:this.Af;this.Hhb||(this.xz=0,this.Sv=this.je)};a.We.prototype.Mo=function(){return a.B.ca(this.u())};a.We.prototype.Sb=function(){return this.Yd};a.We.prototype.yR=function(){return null};a.We.prototype.xfa=function(){this.DA(0);if(this.yc&&this.Td){var a=this.Td-this.yc;0<a&&(a=this.Af/a,this.yF(a*(this.Ic-this.ac)),this.DA(a*(this.ac-this.yc)))}else{var a=
this.yR(),a=a.DW[a.np],c=this.ac,d=this.Ic;null==this.yc?null!=this.Td?(this.yc=this.Td-this.Af/a*(d-c),this.yc<this.ac&&(this.yc=this.ac),a=this.Td-this.yc,a=this.Af/a,this.yF(a*(this.Ic-this.ac)),this.DA(a*(this.ac-this.yc))):(this.yc=this.ac,this.DA(0),this.Td=this.Af/a*(d-c)+this.yc,this.Td>this.Ic&&(this.Td=this.Ic)):(this.Td=this.Af/a*(d-c)+this.yc,this.Td>this.Ic&&(this.Td=this.Ic),a=this.Td-this.yc,a=this.Af/a,this.yF(a*(this.Ic-this.ac)),this.DA(a*(this.ac-this.yc)))}};a.We.prototype.Hfa=
function(b){this.Tl?this.Tl.oe(null):this.Tl=new a.ma(this.u(),"iCanvas");var c=new a.wd;this.Sb()?(c.Ge(this.al,this.Sl,this.Ii,this.Af),this.Tl.ha(this.al),this.Tl.va(this.Sl+this.TL)):(c.Ge(this.al,this.Sl,this.Af,this.Ii),this.Tl.ha(this.al+this.TL),this.Tl.va(this.Sl));b.oe(c);this.Tl.getParent()!=b&&b.A(this.Tl)};a.We.prototype.LWa=function(b){var c=this.u(),d=this.yR(),e=b.zoomInProps,f=e.imageSize,h=e.cssUrl,k=e.cssUrlHover,l=e.cssUrlActive,n=e.cssUrlDisabled,m=e.enabledBackgroundColor,r=
e.enabledBorderColor,q=e.hoverBackgroundColor,v=e.hoverBorderColor,x=e.activeBackgroundColor,u=e.activeBorderColor,A=e.disabledBackgroundColor,w=e.disabledBorderColor,h=a.vk.DM(c,h,f,f,m,r),k=a.vk.DM(c,k,f,f,q,v),l=a.vk.DM(c,l,f,f,x,u),f=a.vk.DM(c,n,f,f,A,w),D=e.posX,e=e.posY;null==this.Ep?(this.Ep=new a.vk(c,h,k,l,f,this.H,this.H.g7),this.H.nb(this.Ep,this.Ep)):(this.Ep.lN(h),this.Ep.eN(k),this.Ep.ZM(l),this.Ep.Yxa(f));b=b.zoomOutProps;f=b.imageSize;h=b.cssUrl;k=b.cssUrlHover;l=b.cssUrlActive;n=
b.cssUrlDisabled;m=b.enabledBackgroundColor;r=b.enabledBorderColor;q=b.hoverBackgroundColor;v=b.hoverBorderColor;x=b.activeBackgroundColor;u=b.activeBorderColor;A=b.disabledBackgroundColor;w=b.disabledBorderColor;h=a.vk.DM(c,h,f,f,m,r);k=a.vk.DM(c,k,f,f,q,v);l=a.vk.DM(c,l,f,f,x,u);f=a.vk.DM(c,n,f,f,A,w);n=b.posX;b=b.posY;null==this.Fp?(this.Fp=new a.vk(c,h,k,l,f,this.H,this.H.h7),this.H.nb(this.Fp,this.Fp)):(this.Fp.lN(h),this.Fp.eN(k),this.Fp.ZM(l),this.Fp.Yxa(f));this.Ep.Po(a.I.wa(a.I.Ia,"ZOOM_IN",
null));this.Fp.Po(a.I.wa(a.I.Ia,"ZOOM_OUT",null));this.Ep.xt();this.Fp.xt();a.Vb.zn()&&(a.K.Y(this.Ep.Ua(),"role","button"),a.K.Y(this.Ep.Ua(),"aria-label",a.I.wa(a.I.Ia,"ZOOM_IN",null)),a.K.Y(this.Fp.Ua(),"role","button"),a.K.Y(this.Fp.Ua(),"aria-label",a.I.wa(a.I.Ia,"ZOOM_OUT",null)));this.Ep.ha(D);this.Fp.ha(n);this.Ep.va(e);this.Fp.va(b);this.Ep.getParent()!=this.li&&this.li.A(this.Ep);this.Fp.getParent()!=this.li&&this.li.A(this.Fp);c=this.je;c>=d.f1&&this.RW(!0);this.Af>=c&&this.RW(!1)};a.We.prototype.pZ=
function(b){a.H.sc(b);var c=b.wheelDelta,d=b.up();if(this.Uu()&&(null!=d.wheelDeltaX?b.wheelDeltaX=d.wheelDeltaX/a.We.f3a:null!=d.deltaX&&(d.deltaMode==d.DOM_DELTA_LINE?b.wheelDeltaX=-d.deltaX:d.deltaMode==d.DOM_DELTA_PIXEL&&(b.wheelDeltaX=-d.deltaX/a.We.yja)),c)){var d=this.u().wC(),d=this.Yd?b.pageY-d.y:b.pageX-d.x,e=(this.Ic-this.ac)/this.je,e=this.Mo()&&!this.Yd?this.Td-e*d:e*d+this.yc;b.bYa=e;b.$Xa=d;b.xga=.02*c+1}};a.We.prototype.FM=function(a,c,d){var e=(this.Td-this.yc)/(this.Ic-this.ac)*
this.je;this.yF(a);a=e/this.je*(this.Ic-this.ac);c?(e=(this.Ic-this.ac)/this.je,this.Mo()&&!this.Yd?(this.Td=c+d*e,this.Td>this.Ic&&(this.Td=this.Ic),this.yc=this.Td-a,this.yc<this.ac&&(this.yc=this.ac,this.Td=this.yc+a,this.Td>this.Ic&&(this.Td=this.Ic))):(this.yc=c-d*e,this.yc<this.ac&&(this.yc=this.ac),this.Td=this.yc+a,this.Td>this.Ic&&(this.Td=this.Ic,this.yc=this.Td-a,this.yc<this.ac&&(this.yc=this.ac))),this.DA(1/e*(this.ac-this.yc))):(this.yc=this.ac,this.Td=this.yc+a,this.yc<this.ac&&(this.yc=
this.ac),this.DA(0));this.KW()};a.We.prototype.GA=function(a){var c=this.Yd?this.Kb/2:this.xb/2;this.FM(this.je*((1/a-1)/2+1),(this.Ic-this.ac)/this.je*c+this.yc,c,!0)};a.We.prototype.Kib=function(a,c,d,e){this.fpa=this.Yd?Math.sqrt((c-e)*(c-e))+(c<e?c:e):Math.sqrt((a-d)*(a-d))+(a<d?a:d);this.rLa=(this.Ic-this.ac)/this.je*this.fpa+this.yc;this.epa=Math.sqrt((a-d)*(a-d)+(c-e)*(c-e));this.qLa=this.je};a.We.prototype.njb=function(a,c,d,e){a=Math.sqrt((a-d)*(a-d)+(c-e)*(c-e));a!=this.epa&&(this.ZH=!0);
this.FM(a/this.epa*this.qLa,this.rLa,this.fpa,!1)};a.We.prototype.tkb=function(){this.rLa=this.qLa=this.fpa=this.epa=null;this.ZH&&(this.ZH=!1,this.dispatchEvent(this.Yx()))};a.We.prototype.bxa=function(a){if(this.Yd){a=this.Tl.pa()-a;var c=-(this.je-this.Af-this.Sl),d=this.Sl;a<c?a=c:a>d&&(a=d);this.Tl.va(a);a-=this.Sl;this.RWa(a)}else a=this.Tl.ra()-a,c=-(this.je-this.Af-this.al),d=this.al,a<c?a=c:a>d&&(a=d),this.Tl.ha(a),this.RWa(a-this.al),a=this.sUa();c=this.je/(this.Ic-this.ac);d=this.Td-this.yc;
this.yc=this.ac-a/c;this.Td=this.yc+d};a.We.prototype.SUa=function(b){b?this.GA(1/a.We.REa):this.GA(a.We.REa)};a.We.prototype.Ada=function(a){a?(this.Ep.xn(!0),this.Ep.TE()):(this.Fp.xn(!0),this.Fp.TE())};a.We.prototype.RW=function(a){a?(this.Ep.xn(!1),this.Ep.wda(),this.Ep.setCursor(null)):(this.Fp.xn(!1),this.Fp.wda(),this.Fp.setCursor(null))};a.We.prototype.KW=function(){this.Yd?this.Tl.va(this.Sl+this.TL):this.Tl.ha(this.al+this.TL)};a.We.prototype.RWa=function(a){this.TL=a};a.We.prototype.sUa=
function(){return this.Mo()&&!this.Yd?this.Af-this.je-this.TL:this.TL};a.We.prototype.DA=function(a){this.Mo()&&!this.Yd?this.TL=this.Af-this.je-a:this.TL=a};a.We.prototype.lga=function(a){this.al=a};a.We.prototype.xXa=function(a){this.Sl=a};a.We.prototype.ag=function(a){a&&this.dispatchEvent(a)};a.We.prototype.Yx=function(){return null};a.We.prototype.aT=function(){};a.We.prototype.YF=function(){};a.We.prototype.RQ=function(a,c){this.fna=a;this.gna=c};a.We.prototype.hI=function(){this.Dda()};a.We.prototype.f7=
function(a){"none"!=this.nw&&this.dwa(a,"multiple"==this.nw)};a.We.prototype.dwa=function(){};a.We.prototype.N_a=function(a){this.dwa(a,a.ctrlKey&&"multiple"==this.nw)};a.We.prototype.Dda=function(){this.ZH&&(this.ZH=!1,this.dispatchEvent(this.Yx()))};a.We.prototype.b3=function(a,c){if(this.fna&&this.gna){var d=this.fna-a,e=this.gna-c;if(0==d&&0==e)return!1;this.ZH=!0;this.fna=a;this.gna=c;this.Ti(d,e);return!0}return!1};a.We.prototype.Ti=function(a){this.bxa(a)};a.Xh=function(a){this.Init(a.u(),
a.ag,a);this.mj=a;this.upa=this.opa=!1};a.v.F(a.Xh,a.H);a.Xh.GAa="wheel";a.Xh.prototype.Lf=function(b){a.Xh.C.Lf.call(this,b);a.zj.X2(this.mj,this.aQ,this.$P,this.ZP,this);a.B.Wa()||(a.B.ao()?b.Ya(a.Xh.GAa,this.mD,!1,this):b.Ya(a.MouseEvent.cG,this.mD,!1,this))};a.Xh.prototype.Pj=function(b){a.Xh.C.Pj.call(this,b);a.B.Wa()||(a.B.ao()?b.kc(a.Xh.GAa,this.mD,!1,this):b.kc(a.MouseEvent.cG,this.mD,!1,this))};a.Xh.prototype.CZ=function(b){a.Xh.C.CZ.call(this,b);this.mj.aT(b)};a.Xh.prototype.Tj=function(b){this.opa||
(a.Xh.C.Tj.call(this,b),this.mj.N_a(b))};a.Xh.prototype.B7=function(b){this.opa=!1;a.Xh.C.B7.call(this,b);this.mj.YF(b)};a.Xh.prototype.mD=function(a){this.mj.pZ(a)};a.Xh.prototype.kT=function(b){a.Xh.C.kT.call(this,b);this.mj.rZ(b);this.mj.u().Re.sG.parentNode.focus()};a.Xh.prototype.x7=function(b){a.Xh.C.x7.call(this,b);this.mj.f7(b)};a.Xh.prototype.aQ=function(b){if(this.mj.Uu())return a.B.Wa()?this.K1(b):this.H1(b)};a.Xh.prototype.$P=function(b){return a.B.Wa()?this.J1(b):this.G1(b)};a.Xh.prototype.ZP=
function(b){return a.B.Wa()?this.I1(b):this.F1(b)};a.Xh.prototype.Li=function(b,c){this.Gm||(this.Gm=this.Da.wC());return new a.R(b-this.Gm.x,c-this.Gm.y)};a.Xh.prototype.H1=function(b){return b.button!=a.MouseEvent.lja?(b=this.Li(b.pageX,b.pageY),this.mj.RQ(b.x,b.y),!0):!1};a.Xh.prototype.G1=function(a){a=this.Li(a.pageX,a.pageY);this.mj.b3(a.x,a.y)&&(this.opa=!0)};a.Xh.prototype.F1=function(){this.mj.hI();this.Gm=null};a.Xh.prototype.K1=function(b){var c=b.touches;if(1==c.length)return b=this.Li(c[0].pageX,
c[0].pageY),this.mj.RQ(b.x,b.y),!0;if(2==c.length){this.mj.hI();this.upa=!0;var d=this.Li(c[0].pageX,c[0].pageY),c=this.Li(c[1].pageX,c[1].pageY);this.mj.Kib(d.x,d.y,c.x,c.y);a.H.sc(b);return!0}return!1};a.Xh.prototype.J1=function(a){var c=a.touches;if(1==c.length){var d=this.Li(c[0].pageX,c[0].pageY);this.mj.b3(d.x,d.y);a.preventDefault()}else 2==c.length&&(d=this.Li(c[0].pageX,c[0].pageY),c=this.Li(c[1].pageX,c[1].pageY),this.mj.njb(d.x,d.y,c.x,c.y),a.preventDefault())};a.Xh.prototype.I1=function(a){this.upa?
(this.upa=!1,this.mj.tkb()):this.mj.hI();a.preventDefault();this.Gm=null};a.Xh.prototype.GA=function(a){this.mj.GA(a)};a.Xh.prototype.Ti=function(b,c){var d=b*this.mj.Af*(a.B.ca(this.Da)?-1:1),e=c*this.mj.Ii;0!=d&&(this.mj.ZH=!0);this.mj.Ti(d,e);this.mj.Dda()};a.Xh.prototype.g7=function(){this.mj.SUa(!0)};a.Xh.prototype.h7=function(){this.mj.SUa(!1)};a.Xh.prototype.QA=function(){return a.H.oG};a.jO=function(a){this.Init(a)};a.v.F(a.jO,a.Cb);a.jO.prototype.qF=function(a){return this.Si(a)&&!a.ctrlKey};
a.jO.prototype.Vu=function(b){return b.keyCode==a.KeyboardEvent.ki&&b.ctrlKey};a.jO.prototype.mk=function(b){if(a.KeyboardEvent.hfa(b))this.yb.g7();else if(a.KeyboardEvent.efa(b))this.yb.h7();else{var c=b.keyCode;c==a.KeyboardEvent.Uia?(b.shiftKey?this.yb.Ti(-.25,0):this.yb.Ti(0,-.25),a.H.sc(b)):c==a.KeyboardEvent.Tia&&(b.shiftKey?this.yb.Ti(.25,0):this.yb.Ti(0,.25),a.H.sc(b))}return a.jO.C.mk.call(this,b)}})(dvt);
  return dvt;
});