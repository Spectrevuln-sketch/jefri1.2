(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{C0rs:function(t,e,a){"use strict";a.r(e),a.d(e,"LandingTipModule",(function(){return c}));var n=a("ofXK"),i=a("tyNb"),o=a("3Pt+"),s=a("fXoL"),l=a("UdNJ"),r=a("6dj9"),b=a("bTqV");const m=[{path:"",component:(()=>{class t{constructor(t,e,a){this.router=t,this.title=e,this.angulartics=a,this.username=new o.f,this.users=[]}ngOnInit(){this.title.setTitle("APP_TITLE.landing")}submit(){const t=this.username.value;null!==this.username&&(this.angulartics.eventTrack("Landing Button Clicked",{eventType:"click",label:"Claim"}),this.router.navigate(["/","auth","register"],{queryParams:{username:t}}))}}return t.\u0275fac=function(e){return new(e||t)(s.Nb(i.g),s.Nb(l.a),s.Nb(r.a))},t.\u0275cmp=s.Hb({type:t,selectors:[["app-landing-tip"]],decls:91,vars:7,consts:[[1,"bg-red-900"],["id","hero",1,"medium","container","flex","flex-col-reverse","md:flex-row","items-center","pb-20","pt-12"],[1,"w-full","md:w-7/12","lg:w-7/12","xl:w-5/12","text-white"],[1,"flex","items-center","mb-4"],[1,"rounded-full","bg-white","flex","items-center","justify-center","w-8","h-8","mr-4","flex-shrink-0","overflow-hidden"],[1,"arx-icon","tip","text-red-700","text-base","w-10/12","text-center"],[1,""],[1,"font-black","text-2xl","md:text-3xl"],[1,"mt-4","opacity-70","leading-relaxed","text-sm","lg:text-base"],[1,"ml-auto"],["src","assets/landing/chibi_pastel.png","alt","",1,"w-full","md:w-64","xl:w-96"],["id","tip",1,"w-full","pt-20","pb-8","md:pb-16","relative"],[1,"absolute","bg-white","h-56","mask-rounded"],[1,"text","container","z-10","relative"],[1,"w-full","lg:w-10/12"],[1,"gradient-text","font-black","text-2xl","md:text-3xl"],[1,"leading-relaxed","mt-4","text-sm","md:text-base"],["src","assets/landing/kasihsayang.png","alt","",1,"w-full","mt-8"],["id","membership",1,"w-full","py-12","relative"],[1,"lg:w-9/12","mx-auto"],["src","assets/landing/membership.png","alt","",1,"w-full","mt-8"],["id","exclusive",1,"w-full","py-12","relative"],[1,"relative"],[1,"lg:w-7/12","mx-auto"],["src","assets/landing/konten_eksklusif.png","alt","",1,"w-full","mt-8"],["id","floating-image"],["src","assets/landing/books.png","alt","",1,"absolute","z-10","w-8","img-books"],["src","assets/landing/coffee.png","alt","",1,"absolute","z-10","w-8","img-coffee"],["src","assets/landing/console.png","alt","",1,"absolute","z-10","w-8","img-console"],["src","assets/landing/camera.png","alt","",1,"absolute","z-10","w-8","img-camera"],["src","assets/landing/guitar.png","alt","",1,"absolute","z-10","w-8","img-guitar"],["id","payment",1,"py-12"],[1,"text","container","flex","flex-col","items-center"],[1,"payment-list","flex","flex-wrap","items-center","justify-center"],["src","assets/logo-bank/bni-logo-200.png","alt",""],["src","assets/logo-bank/bri-logo-200.png","alt",""],["src","assets/logo-bank/permata-logo-200.png","alt",""],["src","assets/logo-bank/mandiri-logo-200.png","alt",""],["src","assets/logo-bank/ovo-logo-200.png","alt",""],["src","assets/logo-bank/dana-logo-200.png","alt",""],["src","assets/logo-bank/gopay-logo-200.png","alt",""],["src","assets/logo-bank/linkaja-logo-200.png","alt","",1,"lj"],["src","assets/logo-bank/alfamart-logo-200.png","alt",""],["src","assets/logo-bank/shopeepay-logo-200.png","alt",""],[1,"mt-8","text-center"],["src","assets/logo-bank/mastercard-logo.svg","alt","",2,"width","50px"],["src","assets/logo-bank/jcb-logo.svg","alt","",2,"width","50px"],["src","assets/logo-bank/visa-logo.svg","alt","",2,"width","50px"],["src","assets/logo-bank/amex-logo.png","alt","",2,"width","50px"],[1,"payment-list","flex","flex-wrap","items-center","justify-center","mt-4"],[1,"arx-icon","cc-stripe","mr-2","text-xl"],[1,"arx-icon","bitcoin","mr-2","text-xl"],[1,"arx-icon","ethereum","text-xl"],[1,"text","container"],[1,"w-full","lg:w-10/12","mx-auto","my-8","lg:my-16"],[1,"gradient-text","font-black","text-2xl","md:text-3xl","mb-4","text-center"],[1,"flex"],[1,"flex","items-center","w-full","px-4","text-base","rounded-md","bg-gray-100","mr-4","h-11","lg:h-14"],[1,"text-sm","lg:text-base","font-bold"],["type","text","autocomplete","off","placeholder","coolcreatorname",1,"placeholder-gray-400","text-sm","lg:text-base","py-4","outline-none","h-full","border-none","w-full",2,"background","transparent",3,"formControl"],[1,"flex-shrink-0"],["mat-flat-button","","color","primary",1,"h-full","text-sm","lg:text-base",3,"click"]],template:function(t,e){1&t&&(s.Tb(0,"div",0),s.Tb(1,"div",1),s.Tb(2,"div",2),s.Tb(3,"div",3),s.Tb(4,"div",4),s.Ob(5,"i",5),s.Sb(),s.Tb(6,"div",6),s.Mc(7," Donasi / Tip "),s.Sb(),s.Sb(),s.Tb(8,"div",7),s.Mc(9," Terima penghasilan dari para pemuja yang menyukai karyamu "),s.Sb(),s.Tb(10,"div",8),s.Tb(11,"p"),s.Mc(12," Kini konten kreatifmu bisa kamu monetisasi dengan menerima donasi dengan mudah dan menyenangkan. Arxist menerima seluruh pembayaran ternama yang ada di Indonesia. "),s.Sb(),s.Sb(),s.Sb(),s.Tb(13,"div",9),s.Ob(14,"img",10),s.Sb(),s.Sb(),s.Sb(),s.Tb(15,"div",11),s.Ob(16,"div",12),s.Tb(17,"div",13),s.Tb(18,"div",14),s.Tb(19,"div",15),s.Mc(20,"Kumpulkan lebih banyak kasih sayang."),s.Sb(),s.Tb(21,"div",16),s.Mc(22," Tidak ada yang lebih indah daripada kasih sayang. Berikan jalan untuk para pemujamu memberikan kasih sayang. "),s.Sb(),s.Sb(),s.Ob(23,"img",17),s.Sb(),s.Sb(),s.Tb(24,"div",18),s.Tb(25,"div",13),s.Tb(26,"div",14),s.Tb(27,"div",15),s.Mc(28,"Membership untuk pemuja setiamu."),s.Sb(),s.Tb(29,"div",16),s.Mc(30," Dapatkan penghasilan yang lebih stabil dengan menerima membership bulanan. "),s.Sb(),s.Sb(),s.Tb(31,"div",19),s.Ob(32,"img",20),s.Sb(),s.Sb(),s.Sb(),s.Tb(33,"div",21),s.Tb(34,"div",13),s.Tb(35,"div",14),s.Tb(36,"div",15),s.Mc(37,"Konten Eksklusif hanya untuk Pemujamu."),s.Sb(),s.Tb(38,"div",16),s.Mc(39," Kamu dapat menawarkan konten-konten eksklusif bagi mereka yang memberikan donasi / tip ke kamu. "),s.Sb(),s.Sb(),s.Tb(40,"div",22),s.Tb(41,"div",23),s.Ob(42,"img",24),s.Sb(),s.Tb(43,"div",25),s.Ob(44,"img",26),s.Ob(45,"img",27),s.Ob(46,"img",28),s.Ob(47,"img",29),s.Ob(48,"img",30),s.Sb(),s.Sb(),s.Sb(),s.Sb(),s.Tb(49,"div",31),s.Tb(50,"div",32),s.Tb(51,"div",15),s.Mc(52),s.fc(53,"translate"),s.Sb(),s.Tb(54,"div",33),s.Ob(55,"img",34),s.Ob(56,"img",35),s.Ob(57,"img",36),s.Ob(58,"img",37),s.Ob(59,"img",38),s.Ob(60,"img",39),s.Ob(61,"img",40),s.Ob(62,"img",41),s.Ob(63,"img",42),s.Ob(64,"img",43),s.Sb(),s.Tb(65,"h3",44),s.Mc(66,"International"),s.Sb(),s.Tb(67,"div",33),s.Ob(68,"img",45),s.Ob(69,"img",46),s.Ob(70,"img",47),s.Ob(71,"img",48),s.Sb(),s.Tb(72,"h3",44),s.Mc(73,"Coming Soon"),s.Sb(),s.Tb(74,"div",49),s.Ob(75,"i",50),s.Ob(76,"i",51),s.Ob(77,"i",52),s.Sb(),s.Sb(),s.Sb(),s.Tb(78,"div",53),s.Tb(79,"div",54),s.Tb(80,"div",55),s.Mc(81,"Semuanya dalam satu platform"),s.Sb(),s.Tb(82,"div",56),s.Tb(83,"div",57),s.Tb(84,"div",58),s.Mc(85,"arxist.com/"),s.Sb(),s.Ob(86,"input",59),s.Sb(),s.Tb(87,"div",60),s.Tb(88,"button",61),s.ac("click",(function(){return e.submit()})),s.Mc(89),s.fc(90,"translate"),s.Sb(),s.Sb(),s.Sb(),s.Sb(),s.Sb()),2&t&&(s.Bb(52),s.Nc(s.gc(53,3,"L.mtd")),s.Bb(34),s.mc("formControl",e.username),s.Bb(3),s.Nc(s.gc(90,5,"L.reg")))},directives:[o.c,o.q,o.g,b.b],pipes:[l.c],styles:[".payment-list[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin:8px;width:80px}.payment-list[_ngcontent-%COMP%]   .lj[_ngcontent-%COMP%]{width:70px;margin-top:-8px}@media only screen and (max-width:767px){.payment-list[_ngcontent-%COMP%]   .lj[_ngcontent-%COMP%]{margin-top:8px;width:90px}}.mask-rounded[_ngcontent-%COMP%]{transform:rotate(3deg);border-top-left-radius:90px;left:-10px;top:-70px;width:calc(100% + 10px)}@media only screen and (max-width:767px){.mask-rounded[_ngcontent-%COMP%]{transform:rotate(1deg);top:-50px}}.gradient-text[_ngcontent-%COMP%]{background:-webkit-linear-gradient(110deg,#a80f5c 54.4%,#058099 88.13%);background-clip:text;-webkit-background-clip:text;-webkit-text-fill-color:transparent}.img-books[_ngcontent-%COMP%]{top:40px;left:5px}.img-coffee[_ngcontent-%COMP%]{top:180px;right:70px}.img-console[_ngcontent-%COMP%]{bottom:0;left:5px}.img-camera[_ngcontent-%COMP%]{right:10px;top:40px}.img-guitar[_ngcontent-%COMP%]{right:15px;bottom:0}@-webkit-keyframes float{0%{transform:rotate(0deg) translateX(16px) rotate(0deg)}to{transform:rotate(1turn) translateX(16px) rotate(-1turn)}}@keyframes float{0%{transform:rotate(0deg) translateX(16px) rotate(0deg)}to{transform:rotate(1turn) translateX(16px) rotate(-1turn)}}.img-books[_ngcontent-%COMP%]{-webkit-animation:float 10s ease-in-out .2s infinite;animation:float 10s ease-in-out .2s infinite}.img-coffee[_ngcontent-%COMP%]{-webkit-animation:float 10s linear .2s infinite;animation:float 10s linear .2s infinite;-webkit-animation-direction:alternate;animation-direction:alternate}.img-camera[_ngcontent-%COMP%], .img-console[_ngcontent-%COMP%]{-webkit-animation:float 10s linear .2s infinite;animation:float 10s linear .2s infinite}.img-camera[_ngcontent-%COMP%]{animation-direction:alternate-reverse}.img-guitar[_ngcontent-%COMP%]{-webkit-animation:float 10s linear .2s infinite;animation:float 10s linear .2s infinite}"]}),t})()}];let g=(()=>{class t{}return t.\u0275mod=s.Lb({type:t}),t.\u0275inj=s.Kb({factory:function(e){return new(e||t)},imports:[[i.k.forChild(m)],i.k]}),t})(),c=(()=>{class t{}return t.\u0275mod=s.Lb({type:t}),t.\u0275inj=s.Kb({factory:function(e){return new(e||t)},imports:[[n.c,g,l.b,o.v,b.c]]}),t})()}}]);