(this["webpackJsonpmain-ui"]=this["webpackJsonpmain-ui"]||[]).push([[0],{12:function(e,t,a){e.exports={wrap:"Contacts_wrap__2UpDo",maps:"Contacts_maps__3cJE-",main:"Contacts_main__1k7fU",block:"Contacts_block__bhjcI",number:"Contacts_number__NMQm0"}},121:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),s=a(33),i=a.n(s),r=a(9),o=a(17),l=a(15),m=a(14),j=a(3),b=a.n(j),u=a(2),x=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(u.jsx)("div",{})}}]),a}(c.Component),d=(a(75),function(e){return Object(u.jsx)("div",{})}),_=function(e){return Object(u.jsx)("div",{children:"hello"})},h=a(5),p=a(8),f=a(29),O=a(24),g=a.n(O),v=a(134),N=a(34),k=a.n(N),y=function(e){var t=Object(c.useState)([]),a=Object(f.a)(t,2),n=a[0],s=a[1];return Object(c.useEffect)((function(){k()({method:"GET",url:"http://127.0.0.1:8000/api/service/"}).then((function(e){s(e.data)}))}),[]),Object(u.jsx)(v.a,{fluid:!0,children:Object(u.jsx)("div",{className:g.a.main,children:n.map((function(e){return Object(u.jsxs)("div",{className:g.a.block,children:[Object(u.jsx)("img",{src:e.image,alt:"website",className:g.a.img}),Object(u.jsxs)("div",{className:g.a.text,children:[Object(u.jsx)("h1",{className:g.a.h1,children:e.title}),e.text]})]})}))})})},I=a(38),C=a(30),w=a.n(C),L={width:"300px",height:"300px",backgroundColor:"#eb3b5a",marginTop:"30%"},M=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(u.jsx)("div",{className:w.a.wrap,children:Object(u.jsx)(p.b,{href:"/"+this.props.link,children:Object(u.jsxs)(I.a,{className:w.a.main,style:L,onClick:function(){return console.log("Card clicked")},children:[Object(u.jsx)("img",{src:this.props.img,alt:"none",className:w.a.img}),Object(u.jsx)("h1",{className:w.a.text,children:this.props.text})]})})})}}]),a}(c.Component),S=a(25),B=a.n(S),E=a.p+"static/media/logo.6ce24c58.svg",P={width:"250px",height:"250px",backgroundColor:"#eb3b5a",position:"relative"},T=function(){return Object(u.jsx)("div",{className:B.a.main,children:Object(u.jsx)("div",{className:B.a.wrap,children:Object(u.jsxs)(I.a,{className:B.a.main,style:P,children:[Object(u.jsx)("img",{src:E,alt:"none",className:B.a.img}),Object(u.jsx)("h1",{className:B.a.text,children:"React"})]})})})},X=a(12),F=a.n(X),J=a(31),W=a.n(J),Y=a(47),z=a.n(Y),G=function(e){var t=[z.a.Button,z.a[e.type]];return Object(u.jsx)("button",{onClick:e.onClick,className:t.join(" "),disabled:e.disabled,children:e.text})},R=a(67),A=function(e){return e.trigger?Object(u.jsxs)(R.Transition,{children:["from=",{transform:"translateX(100px)"},"enter=",[{transform:"translateX(-100%)"},{transition:"0.5s"}],"leave=",[{transform:"translateX(0)"},{transition:"0.5s"}],">",Object(u.jsxs)("div",{className:W.a.main,children:[Object(u.jsxs)("form",{className:W.a.form,method:"post",children:[Object(u.jsx)("input",{type:"text",name:"name",value:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0418\u043c\u044f"}),Object(u.jsx)("input",{type:"text",name:"number",value:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430"}),Object(u.jsx)("input",{type:"text",name:"info",value:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u0443\u044e \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e"}),Object(u.jsx)(G,{type:"btn",text:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c",className:W.a.btn})]}),Object(u.jsx)("button",{className:W.a.a,onClick:function(){return e.setTrigger(!1)},children:"\u0437\u0430\u043a\u0440\u044b\u0442\u044c"})]})]}):""},D=(a(115),function(){var e=Object(c.useState)(!1),t=Object(f.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)([]),i=Object(f.a)(s,2),r=i[0],o=i[1];return Object(c.useEffect)((function(){k()({method:"GET",url:"http://127.0.0.1:8000/api/contact/"}).then((function(e){o(e.data)}))}),[]),Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:F.a.wrap,children:[Object(u.jsxs)("div",{className:F.a.main,children:[Object(u.jsx)("h5",{children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"}),r.map((function(e){return Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{className:F.a.block,children:"\u0418\u043c\u044f"}),Object(u.jsx)("div",{className:F.a.number,children:e.name}),Object(u.jsx)("h3",{className:F.a.block,children:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430"}),Object(u.jsx)("div",{className:F.a.number,children:e.number}),Object(u.jsx)("div",{className:F.a.number,children:e.number_second}),Object(u.jsx)("h3",{className:F.a.block,children:"Email"}),Object(u.jsx)("div",{className:F.a.number,children:e.email})]})})),Object(u.jsx)("h3",{className:F.a.block,children:"\u0410\u0434\u0440\u0435\u0441"}),Object(u.jsx)("div",{className:F.a.number,children:"\u0411\u0438\u0448\u043a\u0435\u043a/\u0443\u043b.\u041c\u0438\u0440\u0430\u211626"}),Object(u.jsx)(G,{onClick:function(){return n(!0)},text:"\u0417\u0430\u043a\u0430\u0437\u0430\u0442\u044c \u0437\u0432\u043e\u043d\u043e\u043a",type:"btn"})]}),Object(u.jsx)("iframe",{className:F.a.maps,src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1503089.685065611!2d73.98598728289637!3d42.62485068389512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3899315e98a28049%3A0x8093082b1ff0acbb!2sChuy%20Province!5e0!3m2!1sen!2skg!4v1612088126484!5m2!1sen!2skg",width:"100%",height:"100%",frameBorder:"0",tabIndex:"5"}),Object(u.jsx)(A,{trigger:a,setTrigger:n})]})})}),V=a.p+"static/media/licey.dffcbc10.png",H=a.p+"static/media/wesley-tingey-eMNevd6ErCU-unsplash.dc55e6bd.jpg",Q=a.p+"static/media/background.0adfec2f.png",U=a(42),Z=a.n(U),q=a(43),K=a.n(q),$=a(48),ee=function(e){var t=Object(h.f)(),a=Object($.b)(t,(function(e){return e.pathname}),{from:{transform:"translateY(100vh)",transition:"0.1s",opacity:0},enter:{transform:"translateY(0)",transition:"0.3   s",opacity:1},leave:{transform:"translateY(-1000vh)",transition:".5s",opacity:0}}),c={licey:[{link:"m78595.hostru09.fornex.host"},{img:V},{text:"Licey.kg"}],Chicomoda:[{link:"m78595.hostru09.fornex.host"},{img:H},{text:"Chicomoda.site"}],Megasport:[{link:"m78595.hostru09.fornex.host"},{img:Q},{text:"Megasport.kg"}]};return Object(u.jsxs)(n.a.Fragment,{children:[Object(u.jsx)(p.c,{to:"/about-us",className:b.a.link,style:{zIndex:100},children:Object(u.jsx)(Z.a,{style:{fontSize:"100pt",cursor:"pointer"},className:b.a.beforeIcon})}),Object(u.jsx)(p.c,{to:"/portfolio",className:b.a.link,style:{zIndex:100},children:Object(u.jsx)(K.a,{style:{fontSize:"100pt",cursor:"pointer"},className:b.a.afterIcon})}),Object(u.jsx)("div",{className:b.a.main,children:Object(u.jsx)("div",{className:"container-fluid",children:Object(u.jsxs)("div",{className:b.a.menu,children:[Object(u.jsx)("h6",{className:b.a.title,children:Object(u.jsx)(p.c,{to:"/",className:b.a.a,children:" \u0414\u043e\u043c\u043e\u0439 "})}),Object(u.jsxs)("ul",{className:b.a.menuItem,children:[Object(u.jsx)("li",{className:b.a.menuItems,children:Object(u.jsx)(p.c,{to:"/about-us/services",activeClassName:b.a.active,className:b.a.a,children:" \u0423\u0441\u043b\u0443\u0433\u0438"})}),Object(u.jsx)("li",{className:b.a.menuItems,children:Object(u.jsx)(p.c,{to:"/about-us/portfolio",activeClassName:b.a.active,className:b.a.a,children:" \u041d\u0430\u0448\u0438 \u0440\u0430\u0431\u043e\u0442\u044b"})}),Object(u.jsx)("li",{className:b.a.menuItems,children:Object(u.jsx)(p.c,{to:"/about-us/instruments",activeClassName:b.a.active,className:b.a.a,children:" \u0418\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u044b"})}),Object(u.jsx)("li",{className:b.a.menuItems,children:Object(u.jsx)(p.c,{to:"/about-us/contacts",activeClassName:b.a.active,className:b.a.a+" "+b.a.contact,children:" \u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"})})]})]})})}),a.map((function(e){var t=e.item,a=e.props,n=e.key;return Object(u.jsx)($.a.div,{style:a,children:Object(u.jsxs)(h.c,{location:t,children:[Object(u.jsx)(h.a,{exact:!0,path:"/",component:d}),Object(u.jsx)(h.a,{exact:!0,path:"/portfolio",component:_}),Object(u.jsx)(h.a,{exact:!0,path:"/about-us",component:x}),Object(u.jsx)(h.a,{path:"/about-us/services",component:y}),Object(u.jsx)(h.a,{path:"/about-us/portfolio",component:function(){return Object(u.jsxs)("div",{className:b.a.card,children:[Object(u.jsx)(M,{img:c.licey[1].img,link:c.licey[0].link,text:c.licey[2].text}),Object(u.jsx)(M,{img:c.Chicomoda[1].img,link:c.Chicomoda[0].link,text:c.Chicomoda[2].text}),Object(u.jsx)(M,{img:c.Megasport[1].img,link:c.Megasport[0].link,text:c.Megasport[2].text})]})}}),Object(u.jsx)(h.a,{path:"/about-us/instruments",component:function(){return Object(u.jsxs)("div",{className:b.a.card,children:[Object(u.jsx)(T,{}),Object(u.jsx)(T,{}),Object(u.jsx)(T,{}),Object(u.jsx)(T,{})]})}}),Object(u.jsx)(h.a,{path:"/about-us/contacts",component:D}),Object(u.jsx)(h.a,{path:"/about-us/contacts/callback",component:function(){return Object(u.jsx)(A,{})}})]})},n)}))]})},te=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,135)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),c(e),n(e),s(e),i(e)}))};i.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(p.a,{children:Object(u.jsx)(ee,{})})}),document.getElementById("root")),te()},24:function(e,t,a){e.exports={main:"Services_main__3j2A1",block:"Services_block__lwt4R",img:"Services_img__3stMs",text:"Services_text__22FW9"}},25:function(e,t,a){e.exports={main:"Instruments_main__3YRuZ",wrap:"Instruments_wrap__1iXkV",img:"Instruments_img__NZW8L",text:"Instruments_text__2W1Se"}},3:function(e,t,a){e.exports={card:"Leftscroll_card__2jId1",main:"Leftscroll_main__5ZyLR",title:"Leftscroll_title__2HXTG",menu:"Leftscroll_menu__1IWEA",menuItem:"Leftscroll_menuItem__2xwe2",menuItems:"Leftscroll_menuItems__mu2hL",a:"Leftscroll_a__PWQgG",active:"Leftscroll_active__1jVo2",contact:"Leftscroll_contact__3Pq8W",afterIcon:"Leftscroll_afterIcon__1aDpE",beforeIcon:"Leftscroll_beforeIcon__1JQyh",link:"Leftscroll_link__2_cPM"}},30:function(e,t,a){e.exports={img:"Portfolio_img__1K5lN",wrap:"Portfolio_wrap__39J6f",text:"Portfolio_text__3McC8",main:"Portfolio_main__MoYkP"}},31:function(e,t,a){e.exports={main:"Inputs_main__3nIRK",form:"Inputs_form__3y-4X",btn:"Inputs_btn__20agV",a:"Inputs_a__XXplG"}},47:function(e,t,a){e.exports={btn:"Button_btn__250JT",Button:"Button_Button__12ATg",error:"Button_error__2rvnk",success:"Button_success__wDyVv",primary:"Button_primary__1zXCd"}},75:function(e,t,a){e.exports={afterIcon:"main_afterIcon__bq-eX",beforeIcon:"main_beforeIcon__lYF65",link:"main_link__2HHE5"}}},[[121,1,2]]]);
//# sourceMappingURL=main.fcf79abf.chunk.js.map