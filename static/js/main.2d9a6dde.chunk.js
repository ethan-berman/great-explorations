(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{101:function(e,t,a){e.exports=a.p+"static/media/aurora.ab77d2ad.jpg"},102:function(e,t,a){e.exports=a.p+"static/media/IMG_5710.be4749a8.jpg"},103:function(e,t,a){e.exports=a.p+"static/media/IMG_5733.44e23dfb.jpg"},104:function(e,t,a){e.exports=a.p+"static/media/IMG_5740.e51ba331.jpg"},105:function(e,t,a){e.exports=a.p+"static/media/IMG_5700.8cc3d730.jpg"},106:function(e,t,a){e.exports=a.p+"static/media/IMG_5702.3609d22f.jpg"},107:function(e,t,a){e.exports=a.p+"static/media/IMG_5725.3e608f18.jpg"},113:function(e,t,a){e.exports=a(207)},118:function(e,t,a){},172:function(e,t,a){},194:function(e,t,a){},207:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(7),c=a.n(l),o=(a(118),a(11)),i=a(12),s=a(14),u=a(13),p=a(15),m=(a(37),a(213)),h=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={show:!1},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"handleClick",value:function(){this.setState({show:!this.state.show})}},{key:"render",value:function(){var e=this,t=null,a="Show Form";return this.state.show&&(a="Hide Form",t=r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("iframe",{src:"https://docs.google.com/forms/d/e/1FAIpQLSd1sLdB-sNR0X2F5C6lMEPU_tagEjNvMIaq3Ar-1Krs9mtl8A/viewform?embedded=true",width:"600",height:"1255",frameborder:"0",marginheight:"0",marginwidth:"0"},"Loading..."))),r.a.createElement("div",null,r.a.createElement(m.a,{type:"primary",onClick:function(){return e.handleClick()}},a),t)}}]),t}(r.a.Component),d=a(217),g=a(209),f=a(216),E=(a(172),{apiKey:"AIzaSyBIe-MGvrJ2560PsAgDJhbou_ggIa3Ys6A",discoveryDocs:["https://sheets.googleapis.com/$discovery/rest?version=v4"],spreadsheetId:"1h-UJlgXtuydbPonqGLyPRx3FG8hp9XANk_TxjoQ46uw"});var v=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={workshops:[],error:null},a.initClient=function(){window.gapi.client.init({apiKey:E.apiKey,discoveryDocs:E.discoveryDocs}).then(function(){var e;e=a.onLoad,window.gapi.client.load("sheets","v4",function(){window.gapi.client.sheets.spreadsheets.values.get({spreadsheetId:E.spreadsheetId,range:"Sheet1!A2:D"}).then(function(t){var a=t.result.values.map(function(e){return{category:e[0],instructor:e[1],title:e[2],description:e[3]}})||[];e({workshops:a})},function(t){e(!1,t.result.error)})})})},a.onLoad=function(e,t){if(e){var n=e.workshops,r=[];n.map(function(e,t){r.push(e)}),a.setState({workshops:r})}else a.setState({error:t})},a.createWorkshops=function(){var e=[],t=0,n=[];return a.state.workshops.map(function(a){var l=r.a.createElement("div",null,r.a.createElement("p",null,a.description),r.a.createElement("p",null,"Instructor: ",a.instructor));n.push(r.a.createElement(d.a,{className:"gutter-row",span:6},r.a.createElement(g.a,{content:l,title:a.category,trigger:"hover",overlayStyle:{width:"300px"}},r.a.createElement("div",{className:"gutter-box"}," ",a.title," ")))),(t+=1)>=4&&(t=0,e.push(r.a.createElement(f.a,{gutter:48},n)),n=[])}),e},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){window.gapi.load("client",this.initClient)}},{key:"render",value:function(){return this.state.error?r.a.createElement("div",null,this.state.error):(console.log(this.state.workshops),r.a.createElement("div",{className:"gutter-example"},this.createWorkshops()))}}]),t}(r.a.Component),y=a(100),b=a.n(y),j=(a(194),a(101)),w=a.n(j),k=a(102),O=a.n(k),x=a(103),A=a.n(x),C=a(104),N=a.n(C),I=a(105),M=a.n(I),S=a(106),G=a.n(S),H=a(107),W=a.n(H),_=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{width:window.innerWidth,display:!0}},r.a.createElement(b.a,{dots:!0,speed:1e3,autoplay:!0,autoplaySpeed:5e3,centerMode:!0,centerPadding:"0px",variableWidth:!0,adaptiveHeight:!0,overflow:"hidden"},r.a.createElement("div",null,r.a.createElement("h3",null,r.a.createElement("img",{src:w.a,height:"300px",alt:"logo"}))),r.a.createElement("div",null,r.a.createElement("h3",null,r.a.createElement("img",{src:O.a,height:"300px",alt:"logo"}))),r.a.createElement("div",null,r.a.createElement("h3",null,r.a.createElement("img",{src:A.a,height:"300px",alt:"logo"}))),r.a.createElement("div",null,r.a.createElement("h3",null,r.a.createElement("img",{src:N.a,height:"300px",alt:"logo"}))),r.a.createElement("div",null,r.a.createElement("h3",null,r.a.createElement("img",{src:M.a,height:"300px",alt:"logo"}))),r.a.createElement("div",null,r.a.createElement("h3",null,r.a.createElement("img",{src:G.a,height:"300px",alt:"logo"}))),r.a.createElement("div",null,r.a.createElement("h3",null,r.a.createElement("img",{src:W.a,height:"300px",alt:"logo"})))))}}]),t}(r.a.Component),K=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{background:"#fff",padding:24,minHeight:"100vh"}},r.a.createElement("div",{className:"App-header-text"},r.a.createElement("p",null,r.a.createElement(_,null)),r.a.createElement("p",{className:"App-header-text"},"Welcome to Great Explorations!"),r.a.createElement("p",{className:"App-text"},"A Science, Technology, Engineering and Math conference for 5th thru 8th grade girls.",r.a.createElement("br",null),"March 9th, 2019 - Whitman College"),r.a.createElement("p",null,r.a.createElement(v,null)),r.a.createElement("p",null,r.a.createElement(h,null))))}}]),t}(n.Component),L=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{background:"#fff",padding:24,minHeight:"100vh"}},r.a.createElement("div",{className:"App-header-text"},r.a.createElement("p",{className:"App-header-text"},"About page!"),r.a.createElement("p",{className:"App-text"},"Our information:")))}}]),t}(n.Component),D=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{background:"#fff",padding:24,minHeight:"100vh"}},r.a.createElement("div",{className:"App-header-text"},r.a.createElement("p",{className:"App-header-text"},"Sponsor page!"),r.a.createElement("p",{className:"App-text"},"Our sponsors:")))}}]),t}(n.Component),F=(n.Component,a(214)),J=a(210),P=a(215),B=a(211),U=a(212),X=B.a.Header,q=B.a.Content,z=B.a.Footer,Q={about:L,registration:K,sponsors:D},R=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={current:"registration"},a.handleClick=function(e){console.log("click ",e),a.setState({current:e.key})},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(F.a,null,r.a.createElement(B.a,{className:"layout"},r.a.createElement(X,null,r.a.createElement("div",{className:"logo"}),r.a.createElement(U.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:[this.state.current],style:{lineHeight:"64px"},onClick:this.handleClick},Object.keys(Q).map(function(e){return r.a.createElement(U.a.Item,{key:e},r.a.createElement(J.a,{to:"/"+e},e.charAt(0).toUpperCase()+e.slice(1)))}))),r.a.createElement(q,{style:{padding:"0 50px 0 50px",minHeight:"100vh"}},r.a.createElement("div",null,Object.keys(Q).map(function(e){return r.a.createElement(P.a,{exact:!0,path:"/"+e,component:Q[e],key:e})})),r.a.createElement("div",null,r.a.createElement(P.a,{exact:!0,path:"/",component:K,key:"default"}))),r.a.createElement(z,{style:{textAlign:"center"}},"Whitman College Copyright \xa92018 Nelson Hayes, Melissa Kohl, Kirk Lange, and Jack Stewart")))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},37:function(e,t,a){}},[[113,2,1]]]);
//# sourceMappingURL=main.2d9a6dde.chunk.js.map