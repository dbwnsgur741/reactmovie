(this.webpackJsonpreactproject=this.webpackJsonpreactproject||[]).push([[0],{34:function(e,t,a){e.exports=a(62)},62:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(24),s=a.n(c);var l=function(){return r.a.createElement("span",null," About this page : !! ")},o=a(9),i=a(6),m=a(11),u=a.n(m),d=a(25),p=a(26),v=a(27),E=a(32),h=a(28),b=a(33),y=a(29),f=a.n(y);var g=function(e){var t=e.id,a=e.year,n=e.title,c=e.summary,s=e.poster;return r.a.createElement("div",{class:"col"},r.a.createElement("div",{class:"card mt-3",style:{width:"18rem"}},r.a.createElement("img",{src:s,class:"card-img-top",alt:"..."}),r.a.createElement("div",{class:"card-body"},r.a.createElement("h5",{class:"card-title"},n),r.a.createElement("small",null,t),r.a.createElement("p",null,a),r.a.createElement("p",{class:"card-text"},c.slice(0,140),"..."),r.a.createElement("a",{href:"#",class:"btn btn-primary"},"Go somewhere"))))},j=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(E.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={isLoading:!0,movies:[]},a.getMovies=Object(d.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("https://yts-proxy.now.sh/list_movies.json");case 2:t=e.sent,n=t.data.data.movies,a.setState({movies:n,isLoading:!1});case 5:case"end":return e.stop()}}),e)}))),a}return Object(b.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.movies;return r.a.createElement("section",{class:"container"},t?r.a.createElement("div",{class:"loader"},r.a.createElement("span",{class:"loader__text"},"Loading ...")):r.a.createElement("div",{class:"container"},r.a.createElement("div",{class:"row"},a.map((function(e){return r.a.createElement(g,{key:e.id,id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image})})))))}}]),t}(r.a.Component);var w=function(){return r.a.createElement("div",null,r.a.createElement(o.b,{to:"/"},"Home"),r.a.createElement(o.b,{to:"about"},"About"))};var x=function(){return r.a.createElement(o.a,null,r.a.createElement(w,null),r.a.createElement(i.a,{path:"/",exact:!0,component:j}),r.a.createElement(i.a,{path:"/about",component:l}))};s.a.render(r.a.createElement(x,null),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.46e08737.chunk.js.map