(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{126:function(e,t,a){e.exports=a.p+"static/media/aurora.ab77d2ad.jpg"},127:function(e,t,a){e.exports=a.p+"static/media/IMG_5710.be4749a8.jpg"},128:function(e,t,a){e.exports=a.p+"static/media/IMG_5733.44e23dfb.jpg"},129:function(e,t,a){e.exports=a.p+"static/media/IMG_5740.e51ba331.jpg"},130:function(e,t,a){e.exports=a.p+"static/media/IMG_5700.8cc3d730.jpg"},131:function(e,t,a){e.exports=a.p+"static/media/IMG_5702.3609d22f.jpg"},132:function(e,t,a){e.exports=a.p+"static/media/IMG_5725.3e608f18.jpg"},133:function(e,t,a){e.exports=a.p+"static/media/Liz_Pic.090360df.jpg"},134:function(e,t,a){e.exports=a.p+"static/media/auroraKeynote.05a501d5.jpg"},137:function(e,t,a){e.exports=a(238)},142:function(e,t,a){},19:function(e,t,a){e.exports=a.p+"static/media/GE2019En.02cdf7d4.pdf"},20:function(e,t,a){e.exports=a.p+"static/media/GE2019Es.6d529386.pdf"},214:function(e,t,a){},233:function(e,t,a){},238:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(9),c=a.n(r);a(142),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=a(16),i=a(11),o=a(12),h=a(14),m=a(13),u=a(15),p=(a(28),a(242)),d=a(245),E={apiKey:"AIzaSyCsbdkVxitaZHEvixS73t3ZDkFE2pR6hOg",discoveryDocs:["https://sheets.googleapis.com/$discovery/rest?version=v4"],spreadsheetId:"1yZWPh8McX-D2mZ9roKmCz56e9Te2P4w4TsVA5JdHO8g",textsheetId:"1f9T3uKqF24H3wOBKweVgFqViDA5dvBOhXsf25zFLXek"},x=[],f=[];function b(e){f.push(e)}var g={english:0,spanish:1},y=g.english;function v(){var e="B";e=e.substring(0,e.length-1)+String.fromCharCode(e.charCodeAt(e.length-1)+y),window.gapi.client.load("sheets","v4",function(){window.gapi.client.sheets.spreadsheets.values.get({spreadsheetId:E.textsheetId,range:"Sheet1!"+e+"2:"+e}).then(function(e){x=e.result.values,console.log(f);for(var t=0;t<f.length;t++)console.log(t),f[t]()},function(e){})})}var k=p.a.Header,w=p.a.Content,j=p.a.Footer,O=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={current:"registration",text:[]},a.initClient=function(){window.gapi.client.init({apiKey:E.apiKey,discoveryDocs:E.discoveryDocs}).then(function(){v()},function(){console.log("Error initializing Google API!")})},a.langSwitch=function(){y=y===g.english?g.spanish:g.english,v()},a.handleClick=function(e){console.log("click ",e),a.setState({current:e.key})},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){window.gapi.load("client",this.initClient),b(this.updateText.bind(this))}},{key:"updateText",value:function(){this.setState({text:x})}},{key:"render",value:function(){return l.a.createElement(p.a,{className:"layout"},l.a.createElement(k,null,l.a.createElement("div",{className:"logo"}),l.a.createElement(d.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:[this.state.current],style:{lineHeight:"64px"},onClick:this.handleClick},l.a.createElement(d.a.Item,{key:"about"},l.a.createElement(s.b,{to:"/about"},this.state.text[2])),l.a.createElement(d.a.Item,{key:"schedule"},l.a.createElement(s.b,{to:"/schedule"},this.state.text[3])),l.a.createElement(d.a.Item,{key:"registration"},l.a.createElement(s.b,{to:"/registration"},this.state.text[4])),l.a.createElement(d.a.Item,{key:"payment"},l.a.createElement(s.b,{to:"/payment"},this.state.text[5])),l.a.createElement(d.a.Item,{key:"sponsors"},l.a.createElement(s.b,{to:"/sponsors"},this.state.text[6])),l.a.createElement(d.a.Item,{key:"keynote"},l.a.createElement(s.b,{to:"/keynote"},this.state.text[7])),l.a.createElement(d.a.Item,{key:"faq"},l.a.createElement(s.b,{to:"/faq"},this.state.text[8])),l.a.createElement(d.a.Item,{key:"/contact"},l.a.createElement(s.b,{to:"/contact"},this.state.text[9])))),l.a.createElement(w,{style:{padding:"0 3vw 0 3vw",minHeight:"100vh"}},this.props.children),l.a.createElement(j,{style:{textAlign:"center"}},this.state.text[1]))}}]),t}(n.Component),A=a(243),N=a(244),S=a(241),D=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={show:!1},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"handleClick",value:function(){this.setState({show:!this.state.show})}},{key:"render",value:function(){var e=null;return e=l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement("iframe",{src:"https://docs.google.com/forms/d/e/1FAIpQLSdanU5zmNOIIvhtWTqJlRUfSdb8pjrp7nFabyqa71w91Yu4Yg/viewform?embedded=true",width:"640",height:"4590",frameborder:"0",marginheight:"0",marginwidth:"0",scrolling:"no",style:{overflow:"hidden"},title:"Embedded Registration Form"},"Loading...")),l.a.createElement("div",null,e)}}]),t}(l.a.Component),T=a(246),C=a(239),I=a(247),_=(a(214),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={workshops:[],error:null},a.initClient=function(){window.gapi.client.init({apiKey:E.apiKey,discoveryDocs:E.discoveryDocs}).then(function(){var e;e=a.onLoad,window.gapi.client.load("sheets","v4",function(){window.gapi.client.sheets.spreadsheets.values.get({spreadsheetId:E.spreadsheetId,range:"Sheet1!A2:D"}).then(function(t){var a=t.result.values,n=1,l=a.map(function(e){return{category:e[0],instructor:e[1],title:"("+n+++") "+e[2],description:e[3]}})||[];e({workshops:l})},function(t){e(!1,t.result.error)})})})},a.onLoad=function(e,t){if(e){var n=e.workshops,l=[];n.map(function(e,t){return l.push(e),0}),a.setState({workshops:l})}else a.setState({error:t})},a.createWorkshops=function(){var e=[],t=0,n=[];return a.state.workshops.map(function(a){var r=l.a.createElement("div",null,l.a.createElement("p",null,a.description),l.a.createElement("p",null,"Instructor: ",a.instructor));return n.push(l.a.createElement(T.a,{className:"gutter-row",span:6},l.a.createElement(C.a,{content:r,title:a.category,trigger:"hover",overlayStyle:{width:"300px"}},l.a.createElement("div",{className:"gutter-box"}," ",a.title," ")))),(t+=1)>=4&&(t=0,e.push(l.a.createElement(I.a,{gutter:"5vw"},n)),n=[]),0}),0!==t&&e.push(l.a.createElement(I.a,{gutter:"5vw"},n)),e},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){window.gapi.load("client",this.initClient)}},{key:"render",value:function(){return this.state.error?l.a.createElement("div",null,this.state.error):l.a.createElement("div",{className:"gutter-example"},this.createWorkshops())}}]),t}(l.a.Component)),W=a(125),z=a.n(W),M=(a(233),a(126)),F=a.n(M),B=a(127),H=a.n(B),K=a(128),G=a.n(K),q=a(129),L=a.n(q),P=a(130),R=a.n(P),Z=a(131),J=a.n(Z),V=a(132),X=a.n(V),U=function(e){function t(){return Object(i.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{style:{width:window.innerWidth,display:!0}},l.a.createElement(z.a,{dots:!0,speed:1e3,autoplay:!0,autoplaySpeed:5e3,centerMode:!0,centerPadding:"0px",variableWidth:!0,adaptiveHeight:!0,overflow:"hidden"},l.a.createElement("div",null,l.a.createElement("h3",null,l.a.createElement("img",{src:F.a,height:"300px",alt:"logo"}))),l.a.createElement("div",null,l.a.createElement("h3",null,l.a.createElement("img",{src:H.a,height:"300px",alt:"logo"}))),l.a.createElement("div",null,l.a.createElement("h3",null,l.a.createElement("img",{src:G.a,height:"300px",alt:"logo"}))),l.a.createElement("div",null,l.a.createElement("h3",null,l.a.createElement("img",{src:L.a,height:"300px",alt:"logo"}))),l.a.createElement("div",null,l.a.createElement("h3",null,l.a.createElement("img",{src:R.a,height:"300px",alt:"logo"}))),l.a.createElement("div",null,l.a.createElement("h3",null,l.a.createElement("img",{src:J.a,height:"300px",alt:"logo"}))),l.a.createElement("div",null,l.a.createElement("h3",null,l.a.createElement("img",{src:X.a,height:"300px",alt:"logo"})))))}}]),t}(l.a.Component),Y=a(19),$=a.n(Y),Q=a(20),ee=a.n(Q),te=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={text:[]},a.success=function(){window.location.replace("/#/payment"),A.a.success(a.state.text[116],10)},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){b(this.updateText.bind(this)),this.updateText()}},{key:"updateText",value:function(){this.setState({text:x})}},{key:"render",value:function(){return l.a.createElement("div",{style:{background:"#fff",padding:24,minHeight:"100vh"}},l.a.createElement("div",null,l.a.createElement("p",{className:"App-text"},l.a.createElement("center",{style:{fontSize:"1.25vw",color:"black",fontWeight:"200"}},l.a.createElement("a",{target:"_blank",href:$.a},"English Brochure Download"),"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",l.a.createElement("a",{target:"_blank",href:ee.a},"Descargar Folleto en Espa\xf1ol"))),l.a.createElement("p",{className:"App-header-text"},l.a.createElement(U,null)),l.a.createElement("p",{className:"App-header-text"},this.state.text[10],l.a.createElement("br",null),l.a.createElement("center",{style:{fontSize:"2vw",color:"black",fontWeight:"400"}},this.state.text[11])),l.a.createElement("p",{className:"App-text"},l.a.createElement("center",null,this.state.text[12],l.a.createElement("br",null)),l.a.createElement("center",{style:{fontStyle:"oblique",fontWeight:"600"}},this.state.text[13]),l.a.createElement("br",null),l.a.createElement("center",null,this.state.text[14])),l.a.createElement("p",{className:"App-text-small"},this.state.text[15],l.a.createElement("br",null)),l.a.createElement("p",{className:"App-header-text"},l.a.createElement(_,null)),l.a.createElement("p",{className:"App-text-tiny"},l.a.createElement("i",null,this.state.text[16])),l.a.createElement("p",{align:"right"},l.a.createElement(N.a,{offsetTop:200},l.a.createElement(S.a,{type:"primary",onClick:function(){window.location.hash="#registration"}},this.state.text[113]))," ",l.a.createElement("br",null),l.a.createElement(N.a,{offsetTop:255},l.a.createElement(S.a,{type:"danger",onClick:function(){window.location.hash="#registration"}},this.state.text[114]))),l.a.createElement("p",{className:"App-header-text",id:"registration"},l.a.createElement(D,null)),l.a.createElement("p",{align:"center"},l.a.createElement(S.a,{type:"primary",onClick:this.success,ghost:!0},this.state.text[115]))))}}]),t}(n.Component),ae=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={text:[]},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){b(this.updateText.bind(this)),this.updateText()}},{key:"updateText",value:function(){this.setState({text:x})}},{key:"render",value:function(){return l.a.createElement("div",{style:{background:"#fff",padding:24,minHeight:"100vh"}},l.a.createElement("div",{className:"App-header-text"},l.a.createElement("p",{className:"App-text"},l.a.createElement("center",{style:{fontSize:"1.25vw",color:"black",fontWeight:"200"}},l.a.createElement("a",{target:"_blank",href:$.a},"English Brochure Download"),"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",l.a.createElement("a",{target:"_blank",href:ee.a},"Descargar Folleto en Espa\xf1ol"))),l.a.createElement("p",{className:"App-header-text"},this.state.text[17]),l.a.createElement("p",{className:"App-text"},this.state.text[18],l.a.createElement("br",null),l.a.createElement("br",null),this.state.text[19],l.a.createElement("br",null),l.a.createElement("br",null),this.state.text[20],l.a.createElement("br",null),l.a.createElement("br",null),this.state.text[21],l.a.createElement("br",null),l.a.createElement("br",null))))}}]),t}(n.Component),ne=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={text:[]},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){b(this.updateText.bind(this)),this.updateText()}},{key:"updateText",value:function(){this.setState({text:x})}},{key:"render",value:function(){return l.a.createElement("div",{style:{background:"#fff",padding:24,minHeight:"100vh"}},l.a.createElement("div",null,l.a.createElement("p",{className:"App-text"},l.a.createElement("center",{style:{fontSize:"1.25vw",color:"black",fontWeight:"200"}},l.a.createElement("a",{target:"_blank",href:$.a},"English Brochure Download"),"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",l.a.createElement("a",{target:"_blank",href:ee.a},"Descargar Folleto en Espa\xf1ol"))),l.a.createElement("p",{className:"App-header-text"},this.state.text[59]),l.a.createElement("p",{className:"App-text-subheader"},this.state.text[60],l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("ul",{className:"App-text"},l.a.createElement("li",null,this.state.text[61]),l.a.createElement("li",null,this.state.text[62]),l.a.createElement("li",null,this.state.text[63]),l.a.createElement("li",null,this.state.text[64]))),l.a.createElement("p",{className:"App-text-subheader"},this.state.text[65],l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("ul",{className:"App-text"},l.a.createElement("li",null,this.state.text[66]),l.a.createElement("li",null,this.state.text[67]),l.a.createElement("li",null,this.state.text[68]),l.a.createElement("li",null,this.state.text[69]),l.a.createElement("li",null,this.state.text[70]),l.a.createElement("li",null,this.state.text[71]))),l.a.createElement("p",{className:"App-text-subheader"},this.state.text[72],l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("ul",{className:"App-text"},l.a.createElement("li",null,this.state.text[73]),l.a.createElement("li",null,this.state.text[74])))))}}]),t}(n.Component),le=a(240),re=le.a.Panel,ce={background:"#f7f7f7",fontSize:"2vw",borderRadius:4,overflow:"hidden"},se=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={text:[]},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){b(this.updateText.bind(this)),this.updateText()}},{key:"updateText",value:function(){this.setState({text:x})}},{key:"render",value:function(){return l.a.createElement("div",{style:{background:"#fff",padding:24,minHeight:"100vh"}},l.a.createElement("div",null,l.a.createElement("p",{className:"App-text"},l.a.createElement("center",{style:{fontSize:"1.25vw",color:"black",fontWeight:"200"}},l.a.createElement("a",{target:"_blank",href:$.a},"English Brochure Download"),"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",l.a.createElement("a",{target:"_blank",href:ee.a},"Descargar Folleto en Espa\xf1ol"))),l.a.createElement("p",{className:"App-header-text"},this.state.text[41]),l.a.createElement(le.a,{bordered:!0,defaultActiveKey:["3"]},l.a.createElement(re,{header:this.state.text[42],key:"1",style:ce},l.a.createElement("p",null,l.a.createElement(S.a,{type:"primary",onClick:function(){window.location.replace("https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=X96WALSTDBZR8&source=url")}},this.state.text[43]))),l.a.createElement(re,{header:this.state.text[44],key:"2",style:ce},l.a.createElement("p",null,this.state.text[45],l.a.createElement("br",null),l.a.createElement("br",null),this.state.text[46],l.a.createElement("br",null),this.state.text[47],l.a.createElement("br",null),this.state.text[48])),l.a.createElement(re,{header:this.state.text[49],key:"3",style:ce},l.a.createElement("p",null,this.state.text[50],l.a.createElement("br",null),l.a.createElement("br",null),this.state.text[51],l.a.createElement("br",null),this.state.text[52],l.a.createElement("br",null),this.state.text[53],l.a.createElement("br",null),this.state.text[54])),l.a.createElement(re,{header:this.state.text[55],key:"4",style:ce},l.a.createElement("p",null,this.state.text[56],l.a.createElement("br",null),l.a.createElement("br",null),this.state.text[57],l.a.createElement("br",null),this.state.text[58])))))}}]),t}(n.Component),ie=le.a.Panel,oe={background:"#f7f7f7",fontSize:"2vw",borderRadius:4,marginBottom:24,border:0,overflow:"hidden"},he=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={text:[]},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){b(this.updateText.bind(this)),this.updateText()}},{key:"updateText",value:function(){this.setState({text:x})}},{key:"render",value:function(){var e=[{description:this.state.text[90],key:0},{description:this.state.text[91],key:1},{description:this.state.text[92],key:2}],t=[{description:this.state.text[97],key:0},{description:this.state.text[98],key:1},{description:this.state.text[99],key:2}];return l.a.createElement("div",{style:{background:"#fff",padding:24,minHeight:"100vh"}},l.a.createElement("div",null,l.a.createElement("p",{className:"App-text"},l.a.createElement("center",{style:{fontSize:"1.25vw",color:"black",fontWeight:"200"}},l.a.createElement("a",{target:"_blank",href:$.a},"English Brochure Download"),"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",l.a.createElement("a",{target:"_blank",href:ee.a},"Descargar Folleto en Espa\xf1ol"))),l.a.createElement("p",{className:"App-header-text"},this.state.text[85])),l.a.createElement("div",null,l.a.createElement(le.a,{bordered:!1,defaultActiveKey:["1"]},l.a.createElement(ie,{header:this.state.text[86],key:"1",style:oe},l.a.createElement("p",null,this.state.text[87])),l.a.createElement(ie,{header:this.state.text[88],key:"2",style:oe},l.a.createElement("p",null,this.state.text[89],l.a.createElement("br",null),l.a.createElement("ol",null,e.map(function(e){return l.a.createElement("li",{key:e.key},e.description)})),this.state.text[93])),l.a.createElement(ie,{header:this.state.text[94],key:"3",style:oe},l.a.createElement("p",null,this.state.text[95])),l.a.createElement(ie,{header:this.state.text[96],key:"4",style:oe},l.a.createElement("p",null,l.a.createElement("ol",null,t.map(function(e){return l.a.createElement("li",{key:e.key},e.description)})))),l.a.createElement(ie,{header:this.state.text[100],key:"5",style:oe},l.a.createElement("p",null,this.state.text[101])),l.a.createElement(ie,{header:this.state.text[102],key:"6",style:oe},l.a.createElement("p",null,this.state.text[103])),l.a.createElement(ie,{header:this.state.text[104],key:"7",style:oe},l.a.createElement("p",null,this.state.text[105])),l.a.createElement(ie,{header:this.state.text[106],key:"8",style:oe},l.a.createElement("p",null,this.state.text[107])))))}}]),t}(n.Component),me=a(133),ue=a.n(me),pe=a(134),de=a.n(pe),Ee=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={text:[]},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){b(this.updateText.bind(this)),this.updateText()}},{key:"updateText",value:function(){this.setState({text:x})}},{key:"render",value:function(){return l.a.createElement("div",{style:{background:"#fff",padding:24,minHeight:"100vh"}},l.a.createElement("div",{className:"App-header-text"},l.a.createElement("p",{className:"App-text"},l.a.createElement("center",{style:{fontSize:"1.25vw",color:"black",fontWeight:"200"}},l.a.createElement("a",{target:"_blank",href:$.a},"English Brochure Download"),"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",l.a.createElement("a",{target:"_blank",href:ee.a},"Descargar Folleto en Espa\xf1ol"))),l.a.createElement("p",{className:"App-header-text"},this.state.text[75]),l.a.createElement("p",{className:"App-header-text-2"},l.a.createElement("center",null,this.state.text[76],l.a.createElement("br",null),this.state.text[77])),l.a.createElement("div",null,l.a.createElement("h3",null,l.a.createElement("img",{src:ue.a,height:"300px",alt:"logo"}))),l.a.createElement("p",{className:"App-text"},l.a.createElement("center",null,l.a.createElement("span",{class:"picture"},this.state.text[78]),l.a.createElement("br",null),l.a.createElement("br",null)),this.state.text[80],l.a.createElement("br",null),l.a.createElement("br",null),this.state.text[81],l.a.createElement("br",null),l.a.createElement("br",null),this.state.text[82],l.a.createElement("br",null),l.a.createElement("br",null),this.state.text[83],l.a.createElement("br",null),l.a.createElement("br",null),this.state.text[84]),l.a.createElement("div",null,l.a.createElement("h3",null,l.a.createElement("img",{src:de.a,height:"350px",alt:"logo"}))),l.a.createElement("p",{className:"picture"},this.state.text[79])))}}]),t}(n.Component),xe=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={text:[]},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){b(this.updateText.bind(this)),this.updateText()}},{key:"updateText",value:function(){this.setState({text:x})}},{key:"render",value:function(){return l.a.createElement("div",{style:{background:"#fff",padding:24,minHeight:"100vh"}},l.a.createElement("div",null,l.a.createElement("p",{className:"App-text"},l.a.createElement("center",{style:{fontSize:"1.25vw",color:"black",fontWeight:"200"}},l.a.createElement("a",{target:"_blank",href:$.a},"English Brochure Download"),"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",l.a.createElement("a",{target:"_blank",href:ee.a},"Descargar Folleto en Espa\xf1ol"))),l.a.createElement("p",{className:"App-header-text"},this.state.text[108]),l.a.createElement("p",{className:"App-text-subheader"},this.state.text[109],l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("ul",{className:"App-text"},l.a.createElement("li",null,this.state.text[110]),l.a.createElement("li",null,this.state.text[111]),l.a.createElement("li",null,this.state.text[112])))))}}]),t}(n.Component),fe=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={text:[]},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){b(this.updateText.bind(this)),this.updateText()}},{key:"updateText",value:function(){this.setState({text:x})}},{key:"render",value:function(){return l.a.createElement("div",{style:{background:"#fff",padding:24,minHeight:"100vh"}},l.a.createElement("div",{className:"App-header-text"},l.a.createElement("p",{className:"App-text"},l.a.createElement("center",{style:{fontSize:"1.25vw",color:"black",fontWeight:"200"}},l.a.createElement("a",{target:"_blank",href:$.a},"English Brochure Download"),"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",l.a.createElement("a",{target:"_blank",href:ee.a},"Descargar Folleto en Espa\xf1ol"))),l.a.createElement("p",{className:"App-header-text"},this.state.text[22],l.a.createElement("center",{style:{fontSize:"1.7vw",color:"darkblue",fontWeight:"400"}},this.state.text[23]),l.a.createElement("center",{style:{fontSize:"1.7vw",color:"darkblue",fontWeight:"400"}},this.state.text[24])),l.a.createElement("p",{className:"App-text"},this.state.text[25]," ",l.a.createElement("span",{class:"schedule"},this.state.text[26]),l.a.createElement("br",null),this.state.text[27],l.a.createElement("span",{class:"schedule"},this.state.text[28]),l.a.createElement("br",null),this.state.text[29],l.a.createElement("span",{class:"schedule"},this.state.text[30]),l.a.createElement("br",null),this.state.text[31],l.a.createElement("span",{class:"schedule"},this.state.text[32]),l.a.createElement("br",null),this.state.text[33],l.a.createElement("span",{class:"schedule"},this.state.text[34]),l.a.createElement("br",null),this.state.text[35],l.a.createElement("span",{class:"schedule"},this.state.text[36]),l.a.createElement("br",null),this.state.text[37],l.a.createElement("span",{class:"schedule"},this.state.text[38]),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null)),l.a.createElement("p",{className:"App-text"},l.a.createElement("span",{class:"App-text-small"},this.state.text[39])," ",this.state.text[40])))}}]),t}(n.Component),be=l.a.createElement(s.c,{path:"/",component:O},l.a.createElement(s.a,{component:te}),l.a.createElement(s.c,{path:"/about",component:ae}),l.a.createElement(s.c,{path:"/schedule",component:fe}),l.a.createElement(s.c,{path:"/registration",component:te}),l.a.createElement(s.c,{path:"/payment",component:se}),l.a.createElement(s.c,{path:"/sponsors",component:ne}),l.a.createElement(s.c,{path:"/keynote",component:Ee}),l.a.createElement(s.c,{path:"/faq",component:he}),l.a.createElement(s.c,{path:"/contact",component:xe}));c.a.render(l.a.createElement(s.d,{routes:be,history:s.e}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},28:function(e,t,a){}},[[137,2,1]]]);
//# sourceMappingURL=main.6e096f77.chunk.js.map