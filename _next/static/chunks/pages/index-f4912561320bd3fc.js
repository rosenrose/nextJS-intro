(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(n,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(3678)}])},819:function(n,t,a){"use strict";a.d(t,{Z:function(){return i}});var e=a(5893),s=a(9008);function i(n){var t=n.title;return(0,e.jsx)(s.default,{children:(0,e.jsxs)("title",{children:[t," | Next Movies"]})})}},3678:function(n,t,a){"use strict";a.r(t),a.d(t,{default:function(){return x}});var e=a(5893),s=a(5988),i=a.n(s),c=a(7294),r=a(8767),o=a(1664),u=a(1163),d=a(819),l="UUyWiQldYO_-yeLJC0j5oq2g";function x(n){n.data;var t=(0,c.useState)(l),a=t[0],s=t[1],x=(0,r.useQuery)(["movies",a],(function(){return fetch("https://www.googleapis.com/youtube/v3/playlistItems?key=".concat("AIzaSyDjjx-wgYbQK-hua00Wk9C1nCiiMSS8VDI","&playlistId=").concat(a,"&part=snippet,contentDetails&maxResults=20")).then((function(n){return n.json()})).then((function(n){return n.items}))})),m=x.isLoading,p=x.data,f=(0,r.useQueries)((null!==p&&void 0!==p?p:[]).map((function(n){var t=n.contentDetails.videoId;return{queryKey:t,queryFn:function(){return fetch("https://asia-northeast3-get-youtube-thumbnail.cloudfunctions.net/thumbnail?id=".concat(t)).then((function(n){return n.text()})).then((function(n){return{id:t,thumbnail:n}}))}}}))),j=Object.fromEntries(f.map((function(n){return n.data?[n.data.id,n.data.thumbnail]:[]}))),h=(0,u.useRouter)();return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("input",{type:"text",onChange:function(n){s(n.target.value)},list:"playlists",className:"jsx-d6c9a486847ab729 idInput"}),(0,e.jsxs)("datalist",{id:"playlists",className:"jsx-d6c9a486847ab729",children:[(0,e.jsx)("option",{value:l,className:"jsx-d6c9a486847ab729"}),(0,e.jsx)("option",{value:"PLtYQ7DpMMg-I22iICgrMNC1ln3ZT4FxUj",className:"jsx-d6c9a486847ab729"})]}),(0,e.jsxs)("div",{className:"jsx-d6c9a486847ab729 container",children:[(0,e.jsx)(d.Z,{title:"home"}),m?(0,e.jsx)("h1",{className:"jsx-d6c9a486847ab729",children:"\ub85c\ub529..."}):p.map((function(n,t){var a=n.contentDetails.videoId,s=n.snippet.title,i="/movies/".concat(encodeURIComponent(s),"/").concat(a);return(0,e.jsxs)("div",{onClick:function(){return function(n,t){h.push("/movies/".concat(encodeURIComponent(t),"/").concat(n))}(a,s)},className:"jsx-d6c9a486847ab729 movie",children:[(null===j||void 0===j?void 0:j[a])&&(0,e.jsx)("img",{src:j[a],alt:a,className:"jsx-d6c9a486847ab729"}),(0,e.jsx)("h4",{className:"jsx-d6c9a486847ab729",children:(0,e.jsx)(o.default,{href:i,as:i,children:(0,e.jsx)("a",{className:"jsx-d6c9a486847ab729",children:s})})})]},a)}))]}),(0,e.jsx)(i(),{id:"d6c9a486847ab729",children:".container.jsx-d6c9a486847ab729{display:grid;\ngrid-template-columns:1fr 1fr;\npadding:20px;\ngap:20px}\n.movie.jsx-d6c9a486847ab729{cursor:pointer}\n.movie.jsx-d6c9a486847ab729 img.jsx-d6c9a486847ab729{max-width:100%;\nborder-radius:12px;\n-webkit-transition:-webkit-transform 0.2s ease-in-out;\ntransition:transform 0.2s ease-in-out;\nbox-shadow:rgba(0, 0, 0, 0.1) 0px 4px 12px}\n.movie.jsx-d6c9a486847ab729:hover img.jsx-d6c9a486847ab729{-webkit-transform:scale(1.05) translateY(-10px);\n-moz-transform:scale(1.05) translateY(-10px);\n-ms-transform:scale(1.05) translateY(-10px);\ntransform:scale(1.05) translateY(-10px)}\n.movie.jsx-d6c9a486847ab729 h4.jsx-d6c9a486847ab729{font-size:18px;\ntext-align:center}\n.idInput.jsx-d6c9a486847ab729{width:20rem;\ndisplay:block;\nmargin:0 auto}"})]})}},9008:function(n,t,a){n.exports=a(5443)}},function(n){n.O(0,[774,888,179],(function(){return t=8581,n(n.s=t);var t}));var t=n.O();_N_E=t}]);