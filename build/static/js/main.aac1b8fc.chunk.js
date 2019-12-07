(this["webpackJsonpreact-character-api"]=this["webpackJsonpreact-character-api"]||[]).push([[0],{10:function(e,t,a){e.exports=a(17)},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(8),i=a.n(c),s=a(6),l=a.n(s),o=a(1),u=a(2),m=a(4),h=a(3),p=a(5),d=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"buildName",value:function(){var e=this.props.character;return n.a.createElement("div",{className:"CharacterCard__name-container text-truncate"},e.name)}},{key:"buildImage",value:function(){var e=this.props.character;return n.a.createElement("img",{src:e.img,alt:""})}},{key:"render",value:function(){return n.a.createElement("div",{className:"CharacterCard"},this.buildImage(),this.buildName())}}]),t}(n.a.Component),b=a(9),f=a.n(b),g=function(e){function t(){var e,a;Object(o.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(n)))).state={loading:!0,error:null,data:[],limit:9},a.fetchCharacters=function(){var e,t;return l.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return a.setState({loading:!0,error:null}),r.prev=1,r.next=4,l.a.awrap(fetch("https://www.breakingbadapi.com/api/characters?limit=".concat(a.state.limit)));case 4:return e=r.sent,r.next=7,l.a.awrap(e.json());case 7:t=r.sent,a.setState({loading:!1,error:null,data:t,limit:a.state.limit+9}),r.next=14;break;case 11:r.prev=11,r.t0=r.catch(1),a.setState({loading:!1,error:r.t0});case 14:case"end":return r.stop()}}),null,null,[[1,11]])},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.fetchCharacters()}},{key:"render",value:function(){var e=this;return this.state.error?"Error!":n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"App"},n.a.createElement("img",{className:"Logo",src:f.a,alt:"Breaking Bad"}),n.a.createElement("ul",{className:"row"},this.state.data.map((function(e){return n.a.createElement("li",{key:e.char_id},n.a.createElement(d,{character:e}))}))),this.state.loading&&n.a.createElement("p",{className:"text-center loader"},"Loading..."),!this.state.loading&&this.state.limit<72&&n.a.createElement("button",{onClick:function(){return e.fetchCharacters()}},"Load More")))}}]),t}(n.a.Component),v=(a(16),document.getElementById("root"));i.a.render(n.a.createElement(g,null),v)},9:function(e,t,a){e.exports=a.p+"static/media/breaking_bad.e3b9a208.png"}},[[10,1,2]]]);
//# sourceMappingURL=main.aac1b8fc.chunk.js.map