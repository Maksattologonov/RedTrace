(this["webpackJsonpmain-ui"]=this["webpackJsonpmain-ui"]||[]).push([[0],{118:function(e,t,a){"use strict";a.r(t);var c=a(2),n=a(0),s=a.n(n),i=a(33),r=a.n(i),o=a(9),l=a(17),m=a(15),j=a(14),b=a(3),u=a.n(b),x=function(e){Object(m.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(c.jsx)("div",{})}}]),a}(n.Component),d=(a(75),function(e){return Object(c.jsx)("div",{})}),_=function(e){return Object(c.jsx)("div",{children:"hello"})},h=a(5),p=a(8),f=a(29),O=a(24),g=a.n(O),v=a(131),N=a(34),k=a.n(N),y=function(e){var t=Object(n.useState)([]),a=Object(f.a)(t,2),s=a[0],i=a[1];return Object(n.useEffect)((function(){k()({method:"GET",url:"http://127.0.0.1:8000/api/service/"}).then((function(e){i(e.data)}))}),[]),Object(c.jsx)(v.a,{fluid:!0,children:Object(c.jsx)("div",{className:g.a.main,children:s.map((function(e){return Object(c.jsxs)("div",{className:g.a.block,children:[Object(c.jsx)("img",{src:e.image,alt:"website",className:g.a.img}),Object(c.jsxs)("div",{className:g.a.text,children:[Object(c.jsx)("h1",{className:g.a.h1,children:e.title}),e.text]})]})}))})})},I=a(38),C=a(30),w=a.n(C),L={width:"300px",height:"300px",backgroundColor:"#eb3b5a",marginTop:"30%"},M=function(e){Object(m.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(c.jsx)("div",{className:w.a.wrap,children:Object(c.jsx)(p.b,{href:"/"+this.props.link,children:Object(c.jsxs)(I.a,{className:w.a.main,style:L,onClick:function(){return console.log("Card clicked")},children:[Object(c.jsx)("img",{src:this.props.img,alt:"none",className:w.a.img}),Object(c.jsx)("h1",{className:w.a.text,children:this.props.text})]})})})}}]),a}(n.Component),S=a(25),B=a.n(S),E=a.p+"static/media/logo.6ce24c58.svg",P={width:"250px",height:"250px",backgroundColor:"#eb3b5a",position:"relative"},T=function(){return Object(c.jsx)("div",{className:B.a.main,children:Object(c.jsx)("div",{className:B.a.wrap,children:Object(c.jsxs)(I.a,{className:B.a.main,style:P,children:[Object(c.jsx)("img",{src:E,alt:"none",className:B.a.img}),Object(c.jsx)("h1",{className:B.a.text,children:"React"})]})})})},X=a(12),F=a.n(X),J=a(31),W=a.n(J),Y=a(47),z=a.n(Y),G=function(e){var t=[z.a.Button,z.a[e.type]];return Object(c.jsx)("button",{onClick:e.onClick,className:t.join(" "),disabled:e.disabled,children:e.text})},R=a(67),A=function(e){return e.trigger?Object(c.jsxs)(R.Transition,{children:["from=",{transform:"translateX(100px)"},"enter=",[{transform:"translateX(-100%)"},{transition:"0.5s"}],"leave=",[{transform:"translateX(0)"},{transition:"0.5s"}],">",Object(c.jsxs)("div",{className:W.a.main,children:[Object(c.jsxs)("form",{className:W.a.form,method:"post",children:[Object(c.jsx)("input",{type:"text",name:"name",value:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0418\u043c\u044f"}),Object(c.jsx)("input",{type:"text",name:"number",value:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430"}),Object(c.jsx)("input",{type:"text",name:"info",value:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u0443\u044e \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e"}),Object(c.jsx)(G,{type:"btn",text:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c",className:W.a.btn})]}),Object(c.jsx)("button",{className:W.a.a,onClick:function(){return e.setTrigger(!1)},children:"\u0437\u0430\u043a\u0440\u044b\u0442\u044c"})]})]}):""},D=(a(112),function(){var e=Object(n.useState)(!1),t=Object(f.a)(e,2),a=t[0],s=t[1],i=Object(n.useState)([]),r=Object(f.a)(i,2),o=r[0],l=r[1];return Object(n.useEffect)((function(){k()({method:"GET",url:"http://127.0.0.1:8000/api/contact/"}).then((function(e){l(e.data)}))}),[]),Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",{className:F.a.wrap,children:[Object(c.jsxs)("div",{className:F.a.main,children:[Object(c.jsx)("h5",{children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"}),o.map((function(e){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h3",{className:F.a.block,children:"\u0418\u043c\u044f"}),Object(c.jsx)("div",{className:F.a.number,children:e.name}),Object(c.jsx)("h3",{className:F.a.block,children:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430"}),Object(c.jsx)("div",{className:F.a.number,children:e.number}),Object(c.jsx)("div",{className:F.a.number,children:e.number_second}),Object(c.jsx)("h3",{className:F.a.block,children:"Email"}),Object(c.jsx)("div",{className:F.a.number,children:e.email})]})})),Object(c.jsx)("h3",{className:F.a.block,children:"\u0410\u0434\u0440\u0435\u0441"}),Object(c.jsx)("div",{className:F.a.number,children:"\u0411\u0438\u0448\u043a\u0435\u043a/\u0443\u043b.\u041c\u0438\u0440\u0430\u211626"}),Object(c.jsx)(G,{onClick:function(){return s(!0)},text:"\u0417\u0430\u043a\u0430\u0437\u0430\u0442\u044c \u0437\u0432\u043e\u043d\u043e\u043a",type:"btn"})]}),Object(c.jsx)("iframe",{className:F.a.maps,src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1503089.685065611!2d73.98598728289637!3d42.62485068389512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3899315e98a28049%3A0x8093082b1ff0acbb!2sChuy%20Province!5e0!3m2!1sen!2skg!4v1612088126484!5m2!1sen!2skg",width:"100%",height:"100%",frameBorder:"0",tabIndex:"5"}),Object(c.jsx)(A,{trigger:a,setTrigger:s})]})})}),V=a.p+"static/media/licey.dffcbc10.png",H=a.p+"static/media/wesley-tingey-eMNevd6ErCU-unsplash.dc55e6bd.jpg",Q=a.p+"static/media/background.0adfec2f.png",U=a(42),Z=a.n(U),q=a(43),K=a.n(q),$=a(48),ee=function(e){var t=Object(h.f)(),a=Object($.b)(t,(function(e){return e.pathname}),{from:{transform:"translateY(100vh)",transition:"0.1s",opacity:0},enter:{transform:"translateY(0)",transition:"0.3   s",opacity:1},leave:{transform:"translateY(-1000vh)",transition:".5s",opacity:0}}),n={licey:[{link:"m78595.hostru09.fornex.host"},{img:V},{text:"Licey.kg"}],Chicomoda:[{link:"m78595.hostru09.fornex.host"},{img:H},{text:"Chicomoda.site"}],Megasport:[{link:"m78595.hostru09.fornex.host"},{img:Q},{text:"Megasport.kg"}]};return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(p.c,{to:"/about-us",className:u.a.link,style:{zIndex:100},children:Object(c.jsx)(Z.a,{style:{fontSize:"100pt",cursor:"pointer"},className:u.a.beforeIcon})}),Object(c.jsx)(p.c,{to:"/portfolio",className:u.a.link,style:{zIndex:100},children:Object(c.jsx)(K.a,{style:{fontSize:"100pt",cursor:"pointer"},className:u.a.afterIcon})}),Object(c.jsx)("div",{className:u.a.main,children:Object(c.jsx)("div",{className:"container-fluid",children:Object(c.jsxs)("div",{className:u.a.menu,children:[Object(c.jsx)("h6",{className:u.a.title,children:Object(c.jsx)(p.c,{to:"/",className:u.a.a,children:" \u0414\u043e\u043c\u043e\u0439 "})}),Object(c.jsxs)("ul",{className:u.a.menuItem,children:[Object(c.jsx)("li",{className:u.a.menuItems,children:Object(c.jsx)(p.c,{to:"/about-us/services",activeClassName:u.a.active,className:u.a.a,children:" \u0423\u0441\u043b\u0443\u0433\u0438"})}),Object(c.jsx)("li",{className:u.a.menuItems,children:Object(c.jsx)(p.c,{to:"/about-us/portfolio",activeClassName:u.a.active,className:u.a.a,children:" \u041d\u0430\u0448\u0438 \u0440\u0430\u0431\u043e\u0442\u044b"})}),Object(c.jsx)("li",{className:u.a.menuItems,children:Object(c.jsx)(p.c,{to:"/about-us/instruments",activeClassName:u.a.active,className:u.a.a,children:" \u0418\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u044b"})}),Object(c.jsx)("li",{className:u.a.menuItems,children:Object(c.jsx)(p.c,{to:"/about-us/contacts",activeClassName:u.a.active,className:u.a.a+" "+u.a.contact,children:" \u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"})})]})]})})}),a.map((function(e){var t=e.item,a=e.props,s=e.key;return Object(c.jsx)($.a.div,{style:a,children:Object(c.jsxs)(h.c,{location:t,children:[Object(c.jsx)(h.a,{exact:!0,path:"/",component:d}),Object(c.jsx)(h.a,{exact:!0,path:"/portfolio",component:_}),Object(c.jsx)(h.a,{exact:!0,path:"/about-us",component:x}),Object(c.jsx)(h.a,{path:"/about-us/services",component:y}),Object(c.jsx)(h.a,{path:"/about-us/portfolio",component:function(){return Object(c.jsxs)("div",{className:u.a.card,children:[Object(c.jsx)(M,{img:n.licey[1].img,link:n.licey[0].link,text:n.licey[2].text}),Object(c.jsx)(M,{img:n.Chicomoda[1].img,link:n.Chicomoda[0].link,text:n.Chicomoda[2].text}),Object(c.jsx)(M,{img:n.Megasport[1].img,link:n.Megasport[0].link,text:n.Megasport[2].text})]})}}),Object(c.jsx)(h.a,{path:"/about-us/instruments",component:function(){return Object(c.jsxs)("div",{className:u.a.card,children:[Object(c.jsx)(T,{}),Object(c.jsx)(T,{}),Object(c.jsx)(T,{}),Object(c.jsx)(T,{})]})}}),Object(c.jsx)(h.a,{path:"/about-us/contacts",component:D}),Object(c.jsx)(h.a,{path:"/about-us/contacts/callback",component:function(){return Object(c.jsx)(A,{})}})]})},s)}))]})},te=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,132)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),c(e),n(e),s(e),i(e)}))};r.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(p.a,{children:Object(c.jsx)(ee,{})})}),document.getElementById("root")),te()},12:function(e,t,a){e.exports={wrap:"Contacts_wrap__2UpDo",maps:"Contacts_maps__3cJE-",main:"Contacts_main__1k7fU",block:"Contacts_block__bhjcI",number:"Contacts_number__NMQm0"}},24:function(e,t,a){e.exports={main:"Services_main__3j2A1",block:"Services_block__lwt4R",img:"Services_img__3stMs",text:"Services_text__22FW9"}},25:function(e,t,a){e.exports={main:"Instruments_main__3YRuZ",wrap:"Instruments_wrap__1iXkV",img:"Instruments_img__NZW8L",text:"Instruments_text__2W1Se"}},3:function(e,t,a){e.exports={card:"Leftscroll_card__2jId1",main:"Leftscroll_main__5ZyLR",title:"Leftscroll_title__2HXTG",menu:"Leftscroll_menu__1IWEA",menuItem:"Leftscroll_menuItem__2xwe2",menuItems:"Leftscroll_menuItems__mu2hL",a:"Leftscroll_a__PWQgG",active:"Leftscroll_active__1jVo2",contact:"Leftscroll_contact__3Pq8W",afterIcon:"Leftscroll_afterIcon__1aDpE",beforeIcon:"Leftscroll_beforeIcon__1JQyh",link:"Leftscroll_link__2_cPM"}},30:function(e,t,a){e.exports={img:"Portfolio_img__1K5lN",wrap:"Portfolio_wrap__39J6f",text:"Portfolio_text__3McC8",main:"Portfolio_main__MoYkP"}},31:function(e,t,a){e.exports={main:"Inputs_main__3nIRK",form:"Inputs_form__3y-4X",btn:"Inputs_btn__20agV",a:"Inputs_a__XXplG"}},47:function(e,t,a){e.exports={btn:"Button_btn__250JT",Button:"Button_Button__12ATg",error:"Button_error__2rvnk",success:"Button_success__wDyVv",primary:"Button_primary__1zXCd"}},75:function(e,t,a){e.exports={afterIcon:"main_afterIcon__bq-eX",beforeIcon:"main_beforeIcon__lYF65",link:"main_link__2HHE5"}}},[[118,1,2]]]);
//# sourceMappingURL=main.39bf16ef.chunk.js.map