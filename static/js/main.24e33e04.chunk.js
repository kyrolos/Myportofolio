(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,a){},,,function(e,t,a){e.exports=a.p+"static/media/myphoto.f2ff1d64.jpg"},function(e,t,a){e.exports=a.p+"static/media/JeopardyApp.ed5b8663.png"},function(e,t,a){e.exports=a.p+"static/media/RopoFriend.74a63616.PNG"},function(e,t,a){e.exports=a.p+"static/media/LetsGetCookin.7f20f677.png"},function(e,t,a){e.exports=a.p+"static/media/Adios.8f52593a.png"},function(e,t,a){e.exports=a.p+"static/media/SkiResortGem.90065d5a.png"},function(e,t,a){e.exports=a(42)},,,,,function(e,t,a){},,function(e,t,a){},,,,function(e,t,a){},,function(e,t,a){},,,,,,function(e,t,a){"use strict";a.r(t);var i=a(0),s=a.n(i),n=a(16),r=a.n(n),c=(a(28),a(2)),l=a(3),o=a(5),m=a(4),d=a(6),u=(a(30),a(8)),p=a(7),h=a(10),b=(a(34),function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(o.a)(this,Object(m.a)(t).call(this))).state={className:"navbar-burger burger",classNameItems:"navbar-menu"},e}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=function(){"navbar-burger burger is-active"===e.state.className?(e.setState({className:"navbar-burger burger"}),"navbar-menu is-active"===e.state.classNameItems&&e.setState({classNameItems:"navbar-menu"})):"navbar-burger burger"===e.state.className&&(e.setState({className:"navbar-burger burger is-active"}),"navbar-menu"===e.state.classNameItems&&e.setState({classNameItems:"navbar-menu is-active"}))};return s.a.createElement("nav",{className:"navbar is-fixed-top is-info",role:"navigation","aria-label":"main navigation"},s.a.createElement("div",{className:"navbar-brand"},s.a.createElement("a",{className:"navbar-item",href:"/"},s.a.createElement("div",{className:"fa-3x is-mobile"},s.a.createElement(h.a,{className:"is-mobile",icon:"code","data-fa-transform":"shrink-8"}))),s.a.createElement("a",{role:"button",href:"/",className:this.state.className,"aria-label":"menu",onClick:t,"aria-expanded":"false","data-target":"navbarBasicExample"},s.a.createElement("span",{"aria-hidden":"true"}),s.a.createElement("span",{"aria-hidden":"true"}),s.a.createElement("span",{"aria-hidden":"true"}))),s.a.createElement("div",{id:"navbarBasicExample",className:this.state.classNameItems,onClick:t},s.a.createElement("div",{className:"navbar-end is-active"},s.a.createElement("a",{className:"navbar-item is-active",style:{fontWeight:"bold",paddingRight:"15%"},href:"/"},"Home"),s.a.createElement("a",{className:"navbar-item is-active",style:{fontWeight:"bold",paddingRight:"15%"},href:"/"},"Documentation"),s.a.createElement("a",{className:"navbar-item is-active",style:{fontWeight:"bold"},href:"/"},"More"))))}}]),t}(i.Component)),f=(a(36),a(17)),g=a.n(f),E=function(){return s.a.createElement("div",{className:"hero is-spaced centered justified is-mobile"},s.a.createElement("div",{className:"tile is-ancestor  "},s.a.createElement("div",{className:"tile is-vertical is-8"},s.a.createElement("div",{className:"tile"},s.a.createElement("div",{className:"tile is-parent is-vertical "},s.a.createElement("article",{className:"tile is-child notification is-primary"},s.a.createElement("p",{className:"title"},"Hi I 'm JS web-Dev"),s.a.createElement("p",{className:"subtitle"}," Currently looking for a new cooding adventure")),s.a.createElement("article",{className:"tile is-child notification is-warning "},s.a.createElement("p",{className:"title"},"What am I capable of ?"),s.a.createElement("p",{className:"subtitle"},"isn't that your question ?\n\t\t\t\t\t         \t\tdon't worry you will find the answer below ",s.a.createElement(h.a,{icon:"angle-double-down"})))),s.a.createElement("div",{className:"tile is-parent"},s.a.createElement("article",{className:"tile is-child notification is-info"},s.a.createElement("p",{className:"title"},"Kyrolos Magdy"),s.a.createElement("p",{className:"subtitle"},"a full-Stack Web Developer"),s.a.createElement("figure",{className:"image is-4by3"},s.a.createElement("img",{className:"is-rounded",src:"".concat(g.a),alt:"Your browser dosen't support this Img"}))))),s.a.createElement("div",{className:"tile is-parent"},s.a.createElement("article",{className:"tile is-child notification is-danger"},s.a.createElement("p",{className:"title"},"our quote for today"),s.a.createElement("p",{className:"subtitle"}," you only stop learning when you Die"),s.a.createElement("div",{className:"content"},"Albert Einstein")))),s.a.createElement("div",{className:"tile is-parent"},s.a.createElement("article",{className:"tile is-child notification is-success"},s.a.createElement("div",{className:"content"},s.a.createElement("p",{className:"title"},"preferres remotely jobs"),s.a.createElement("p",{className:"subtitle"},"I 'm using Git so I can deals with teams remotly, you know in 2019 most programers dosen't go to work like office and all these traditional stuff they just working from there own office there own home there own country that's one reason why I prefers working remotly"),s.a.createElement("div",{className:"content"}))))))},v=(a(11),a(14),a(9)),N=a.n(v),y=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).flipCard=function(){a.setState({flip:!0})},a.flipCardBack=function(){a.setState({flip:!1})},a.state={flip:!1},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"column card box is-two-thirds-mobile is-one-quarter-tablet cardContainer individual-project-container ".concat(this.state.flip?" cardFlipped":""),style:{backgroundImage:!1===this.state.flip?"url(".concat(this.props.backgroundImage,")"):""},onMouseEnter:this.flipCard,onMouseLeave:this.flipCardBack,onClick:this.state.flip?this.flipCardBack:this.flipCard,key:""},s.a.createElement("header",{className:"box"},s.a.createElement("p",{className:"title is-4 is-centered"},s.a.createElement("a",{href:this.props.link},this.props.title))),s.a.createElement("div",{className:"card__side front-card card__side--front".concat(this.state.flip?"cardFlipped":"")},s.a.createElement("div",{className:"card-content is-centered is-paddingless card__side card__side--back ".concat(this.state.flip?" cardBack cardFlipped":" back")},s.a.createElement("div",{className:"content is-centered"},this.props.description),s.a.createElement("div",{className:"columns is-mobile is-centered"},s.a.createElement("footer",{className:"box column is-paddingless is-three-quarters"},s.a.createElement("ul",{className:"columns is-multiline is-mobile is-marginless"},this.props.techStack.map(function(e){return s.a.createElement("li",{key:"li1",className:"column is-half is-paddingless is-marginless is-size-7 has-text-weight-light"},e)})))))))}}]),t}(i.Component),k=a(18),w=a.n(k),R=a(19),j=a.n(R),x=a(20),I=a.n(x),S=a(21),C=a.n(S),O=a(22),_=a.n(O),A=function(){return s.a.createElement("section",{className:"section content has-text-centered is-marginless project-section",id:"projects"},s.a.createElement(N.a,{left:!0},s.a.createElement("h1",{className:"title is-1 has-text-white"},"Projects")),s.a.createElement(N.a,{right:!0},s.a.createElement("h4",{className:"subtitle is-4 has-text-white has-text-weight-light"},"Currently, I am working on a site for a smaller automotive business that is local to me. Really enjoying the experience.")),s.a.createElement(N.a,{left:!0},s.a.createElement("h4",{className:"subtitle is-4 has-text-white has-text-weight-light"},"Here are some recent projects I have completed.")),s.a.createElement(N.a,{right:!0},s.a.createElement("div",{className:"columns is-mobile is-multiline is-variable is-3 is-centered projects-container"},s.a.createElement(y,{title:"RopoFriendsApp",link:"https://kyrolos.github.io/Robofriend-app/",backgroundImage:j.a,description:"as a problem solver this app with quite entertainment it's my RopoFriendsApp try it you woll find it quite entertaining",techStack:["React","Redux","Node.js","Express.js","Tachyons (css framework)"]}),s.a.createElement(y,{title:"Jeopardy",link:"https://github.com/brettCole/Jeopardy",backgroundImage:w.a,description:"Similar to Jeopardy app. Set up for three teams to go head to head in full rounds of questions with a final Jeopardy round. Great for family and friends.",techStack:["React","Redux","ResponsiveVoice.js","jService Gem","Ruby on Rails"]}),s.a.createElement(y,{title:"Adios",link:"https://github.com/brettCole/adios2",backgroundImage:C.a,description:"Vacation rental app. Used Faraday Gem to access Homeaway's API for listings. Then used React and Redux to display rentals. Also has checklist creation for users.",techStack:["React","Redux","HomeAway API","Faraday Gem","Reactstrap","Ruby on Rails"]}),s.a.createElement(y,{title:"Lets Get Cookin",link:"https://github.com/brettCole/Lets-get-cookin",backgroundImage:I.a,description:"Ruby on Rails app to add favorite recipes. Plus displays the details of each dish. Simple layout.",techStack:["Ruby","Ruby on Rails"]}),s.a.createElement(y,{title:"Top Ski Resort Ruby Gem",link:"https://github.com/brettCole/Top_Ranked_Ski_Resorts-cli-gem",backgroundImage:_.a,description:"Top ranked ski resorts across the United States. Displays all of the details of each chosen mountain from height to number of lifts.",techStack:["Ruby"]}))))};u.b.add(p.b,p.a,p.c,p.d);var G=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"hiro"},s.a.createElement(b,null),s.a.createElement(E,null),s.a.createElement(A,null))}}]),t}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[23,2,1]]]);
//# sourceMappingURL=main.24e33e04.chunk.js.map