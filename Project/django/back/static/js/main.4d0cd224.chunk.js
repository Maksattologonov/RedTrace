(this["webpackJsonpmain-ui"]=this["webpackJsonpmain-ui"]||[]).push([[0],{10:function(t,e,a){t.exports={wrap:"Contacts_wrap__2UpDo",maps:"Contacts_maps__3cJE-",main:"Contacts_main__1k7fU",block:"Contacts_block__bhjcI",number:"Contacts_number__NMQm0"}},113:function(t,e,a){"use strict";a.r(e);var c=a(2),n=a(0),s=a.n(n),i=a(53),r=a.n(i),o=a(7),l=a(15),m=a(13),j=a(12),b=a(4),u=a.n(b),x=function(t){Object(m.a)(a,t);var e=Object(j.a)(a);function a(){return Object(o.a)(this,a),e.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(c.jsx)("div",{})}}]),a}(n.Component),d=(a(68),function(t){return Object(c.jsx)("div",{})}),_=function(t){return Object(c.jsx)("div",{children:"hello"})},h=a(5),p=a(11),f=a(54),O=a(33),g=a(29),v=a.n(g),N={width:"300px",height:"300px",backgroundColor:"#eb3b5a",marginTop:"30%"},k=function(t){Object(m.a)(a,t);var e=Object(j.a)(a);function a(){return Object(o.a)(this,a),e.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(c.jsx)("div",{className:v.a.wrap,children:Object(c.jsx)(p.b,{href:"/"+this.props.link,children:Object(c.jsxs)(O.a,{className:v.a.main,style:N,onClick:function(){return console.log("Card clicked")},children:[Object(c.jsx)("img",{src:this.props.img,alt:"none",className:v.a.img}),Object(c.jsx)("h1",{className:v.a.text,children:this.props.text})]})})})}}]),a}(n.Component),y=a(22),I=a.n(y),C=a.p+"static/media/logo.6ce24c58.svg",w={width:"250px",height:"250px",backgroundColor:"#eb3b5a",position:"relative"},L=function(){return Object(c.jsx)("div",{className:I.a.main,children:Object(c.jsx)("div",{className:I.a.wrap,children:Object(c.jsxs)(O.a,{className:I.a.main,style:w,children:[Object(c.jsx)("img",{src:C,alt:"none",className:I.a.img}),Object(c.jsx)("h1",{className:I.a.text,children:"React"})]})})})},B=a(28),M=a(10),E=a.n(M),P=a(30),T=a.n(P),S=a(39),X=a.n(S),F=function(t){var e=[X.a.Button,X.a[t.type]];return Object(c.jsx)("button",{onClick:t.onClick,className:e.join(" "),disabled:t.disabled,children:t.text})},J=a(58),W=function(t){return t.trigger?Object(c.jsxs)(J.Transition,{children:["from=",{transform:"translateX(100px)"},"enter=",[{transform:"translateX(-100%)"},{transition:"0.5s"}],"leave=",[{transform:"translateX(0)"},{transition:"0.5s"}],">",Object(c.jsxs)("div",{className:T.a.main,children:[Object(c.jsxs)("form",{className:T.a.form,method:"post",children:[Object(c.jsx)("input",{type:"text",name:"name",value:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0418\u043c\u044f"}),Object(c.jsx)("input",{type:"text",name:"number",value:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430"}),Object(c.jsx)("input",{type:"text",name:"info",value:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u0443\u044e \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e"}),Object(c.jsx)(F,{type:"btn",text:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c",className:T.a.btn})]}),Object(c.jsx)("button",{className:T.a.a,onClick:function(){return t.setTrigger(!1)},children:"\u0437\u0430\u043a\u0440\u044b\u0442\u044c"})]})]}):""},Y=a(26),G=a.n(Y),R=(a(109),function(){var t=Object(n.useState)(!1),e=Object(B.a)(t,2),a=e[0],s=e[1],i=Object(n.useState)([]),r=Object(B.a)(i,2),o=r[0],l=r[1];return Object(n.useEffect)((function(){G()({method:"GET",url:"http://127.0.0.1:8000/api/contact"}).then((function(t){l(t.data)}))}),[]),Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",{className:E.a.wrap,children:[Object(c.jsxs)("div",{className:E.a.main,children:[Object(c.jsx)("h5",{children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"}),o.map((function(t){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h3",{className:E.a.block,children:"\u0418\u043c\u044f"}),Object(c.jsx)("div",{className:E.a.number,children:t.name}),Object(c.jsx)("h3",{className:E.a.block,children:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430"}),Object(c.jsx)("div",{className:E.a.number,children:t.number}),Object(c.jsx)("div",{className:E.a.number,children:t.number_second}),Object(c.jsx)("h3",{className:E.a.block,children:"Email"}),Object(c.jsx)("div",{className:E.a.number,children:t.email})]})})),Object(c.jsx)("h3",{className:E.a.block,children:"\u0410\u0434\u0440\u0435\u0441"}),Object(c.jsx)("div",{className:E.a.number,children:"\u0411\u0438\u0448\u043a\u0435\u043a/\u0443\u043b.\u041c\u0438\u0440\u0430\u211626"}),Object(c.jsx)(F,{onClick:function(){return s(!0)},text:"\u0417\u0430\u043a\u0430\u0437\u0430\u0442\u044c \u0437\u0432\u043e\u043d\u043e\u043a",type:"btn"})]}),Object(c.jsx)("iframe",{className:E.a.maps,src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1503089.685065611!2d73.98598728289637!3d42.62485068389512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3899315e98a28049%3A0x8093082b1ff0acbb!2sChuy%20Province!5e0!3m2!1sen!2skg!4v1612088126484!5m2!1sen!2skg",width:"100%",height:"100%",frameBorder:"0",tabIndex:"5"}),Object(c.jsx)(W,{trigger:a,setTrigger:s})]})})}),A=a.p+"static/media/licey.dffcbc10.png",D=a.p+"static/media/wesley-tingey-eMNevd6ErCU-unsplash.dc55e6bd.jpg",V=a.p+"static/media/background.0adfec2f.png",H=a(40),Q=function(t){var e=Object(h.f)(),a=Object(H.b)(e,(function(t){return t.pathname}),{from:{transform:"translateY(100vh)",transition:"0.1s",opacity:0},enter:{transform:"translateY(0)",transition:"0.3   s",opacity:1},leave:{transform:"translateY(-1000vh)",transition:".5s",opacity:0}}),n={licey:[{link:"m78595.hostru09.fornex.host"},{img:A},{text:"Licey.kg"}],Chicomoda:[{link:"m78595.hostru09.fornex.host"},{img:D},{text:"Chicomoda.site"}],Megasport:[{link:"m78595.hostru09.fornex.host"},{img:V},{text:"Megasport.kg"}]};return Object(c.jsxs)(s.a.Fragment,{children:[Object(c.jsx)("div",{className:u.a.main,children:Object(c.jsx)("div",{className:"container-fluid",children:Object(c.jsxs)("div",{className:u.a.menu,children:[Object(c.jsx)("h6",{className:u.a.title,children:Object(c.jsx)(p.c,{to:"/",className:u.a.a,children:" \u0414\u043e\u043c\u043e\u0439 "})}),Object(c.jsxs)("ul",{className:u.a.menuItem,children:[Object(c.jsx)("li",{className:u.a.menuItems,children:Object(c.jsx)(p.c,{to:"/about-us/services",activeClassName:u.a.active,className:u.a.a,children:" \u0423\u0441\u043b\u0443\u0433\u0438"})}),Object(c.jsx)("li",{className:u.a.menuItems,children:Object(c.jsx)(p.c,{to:"/about-us/portfolio",activeClassName:u.a.active,className:u.a.a,children:" \u041d\u0430\u0448\u0438 \u0440\u0430\u0431\u043e\u0442\u044b"})}),Object(c.jsx)("li",{className:u.a.menuItems,children:Object(c.jsx)(p.c,{to:"/about-us/instruments",activeClassName:u.a.active,className:u.a.a,children:" \u0418\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u044b"})}),Object(c.jsx)("li",{className:u.a.menuItems,children:Object(c.jsx)(p.c,{to:"/about-us/contacts",activeClassName:u.a.active,className:u.a.a+" "+u.a.contact,children:" \u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"})})]})]})})}),a.map((function(t){var e=t.item,a=t.props,s=t.key;return Object(c.jsx)(H.a.div,{style:a,children:Object(c.jsxs)(h.c,{location:e,children:[Object(c.jsx)(h.a,{exact:!0,path:"/",component:d}),Object(c.jsx)(h.a,{exact:!0,path:"/portfolio",component:_}),Object(c.jsx)(h.a,{exact:!0,path:"/about-us",component:x}),Object(c.jsx)(h.a,{path:"/about-us/services",component:f.a}),Object(c.jsx)(h.a,{path:"/about-us/portfolio",component:function(){return Object(c.jsxs)("div",{className:u.a.card,children:[Object(c.jsx)(k,{img:n.licey[1].img,link:n.licey[0].link,text:n.licey[2].text}),Object(c.jsx)(k,{img:n.Chicomoda[1].img,link:n.Chicomoda[0].link,text:n.Chicomoda[2].text}),Object(c.jsx)(k,{img:n.Megasport[1].img,link:n.Megasport[0].link,text:n.Megasport[2].text})]})}}),Object(c.jsx)(h.a,{path:"/about-us/instruments",component:function(){return Object(c.jsxs)("div",{className:u.a.card,children:[Object(c.jsx)(L,{}),Object(c.jsx)(L,{}),Object(c.jsx)(L,{}),Object(c.jsx)(L,{})]})}}),Object(c.jsx)(h.a,{path:"/about-us/contacts",component:R}),Object(c.jsx)(h.a,{path:"/about-us/contacts/callback",component:function(){return Object(c.jsx)(W,{})}})]})},s)}))]})},U=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,125)).then((function(e){var a=e.getCLS,c=e.getFID,n=e.getFCP,s=e.getLCP,i=e.getTTFB;a(t),c(t),n(t),s(t),i(t)}))};r.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(p.a,{children:Object(c.jsx)(Q,{})})}),document.getElementById("root")),U()},21:function(t,e,a){t.exports={main:"Services_main__3j2A1",block:"Services_block__lwt4R",img:"Services_img__3stMs",text:"Services_text__22FW9"}},22:function(t,e,a){t.exports={main:"Instruments_main__3YRuZ",wrap:"Instruments_wrap__1iXkV",img:"Instruments_img__NZW8L",text:"Instruments_text__2W1Se"}},29:function(t,e,a){t.exports={img:"Portfolio_img__1K5lN",wrap:"Portfolio_wrap__39J6f",text:"Portfolio_text__3McC8",main:"Portfolio_main__MoYkP"}},30:function(t,e,a){t.exports={main:"Inputs_main__3nIRK",form:"Inputs_form__3y-4X",btn:"Inputs_btn__20agV",a:"Inputs_a__XXplG"}},39:function(t,e,a){t.exports={btn:"Button_btn__250JT",Button:"Button_Button__12ATg",error:"Button_error__2rvnk",success:"Button_success__wDyVv",primary:"Button_primary__1zXCd"}},4:function(t,e,a){t.exports={card:"Leftscroll_card__2jId1",main:"Leftscroll_main__5ZyLR",title:"Leftscroll_title__2HXTG",menu:"Leftscroll_menu__1IWEA",menuItem:"Leftscroll_menuItem__2xwe2",menuItems:"Leftscroll_menuItems__mu2hL",a:"Leftscroll_a__PWQgG",active:"Leftscroll_active__1jVo2",contact:"Leftscroll_contact__3Pq8W",afterIcon:"Leftscroll_afterIcon__1aDpE",beforeIcon:"Leftscroll_beforeIcon__1JQyh",link:"Leftscroll_link__2_cPM"}},54:function(t,e,a){"use strict";(function(t){var c=a(28),n=a(2),s=a(0),i=a(21),r=a.n(i),o=a(114),l=a(26),m=a.n(l);e.a=function(t){var e=Object(s.useState)([]),a=Object(c.a)(e,2),i=a[0],l=a[1];return Object(s.useEffect)((function(){m()({method:"GET",url:"http://127.0.0.1:8000/api/service"}).then((function(t){l(t.data)}))}),[]),Object(n.jsx)(o.a,{fluid:!0,children:Object(n.jsx)("div",{className:r.a.main,children:i.map((function(t){return Object(n.jsxs)("div",{className:r.a.block,children:[console.log('"'+t.image+'"'),Object(n.jsx)("img",{src:'"'+t.image+'"',alt:"website",className:r.a.img}),Object(n.jsxs)("div",{className:r.a.text,children:[Object(n.jsx)("h1",{className:r.a.h1,children:t.title}),t.text]})]})}))})})}}).call(this,a(69).Buffer)},68:function(t,e,a){t.exports={afterIcon:"main_afterIcon__bq-eX",beforeIcon:"main_beforeIcon__lYF65",link:"main_link__2HHE5"}}},[[113,1,2]]]);
//# sourceMappingURL=main.4d0cd224.chunk.js.map