(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{58:function(n,e,t){},81:function(n,e,t){"use strict";t.r(e);var c,a=t(0),r=t.n(a),o=t(29),i=t.n(o),s=t(6),u=t(23),l=t(8),d=t(21),h=t(40),b=t(42),f=t(3),j="@@CURRENT_LOCATION/UPDATE_LOCATION",p="@@CURRENT_LOCATION/UPDATE_GEO_LOCATION",m="@@CURRENT_LOCATION/UPDATE_WEATHER",O={location:{city:"Lisbon",country:"Portugal",lat:38.7259284,lon:-9.137382},weather:{}},g=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case p:return Object(f.a)(Object(f.a)({},n),{},{location:Object(f.a)(Object(f.a)({},n.location),{},{lat:e.payload.lat,lon:e.payload.lon})});case j:return Object(f.a)(Object(f.a)({},n),{},{location:Object(f.a)(Object(f.a)({},n.location),{},{city:""===e.payload.city?n.location.city:e.payload.city,country:""===e.payload.country?n.location.country:e.payload.country})});case m:return Object(f.a)(Object(f.a)({},n),{},{weather:e.payload});default:return Object(f.a)({},n)}},y="@@SEARCH/SEARCH_ITEMS_LOAD",x="@@SEARCH/SEARCH_QUERY",v="@@SEARCH/SEARCH_CLEAR",w="@@SEARCH/SEARCH_FOUND",k="@@SEARCH/SEARCH_QUERY_SELECTED",E={searchQuery:"",locations:[],searchedResult:{}},C=function(n,e){var t=n.split(", "),c=t[0],a=1===t.length?"":t[1];return""===a?e.find((function(n){return n.city===c})):e.find((function(n){return n.city===c&&n.country===a}))},S=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case y:return Object(f.a)(Object(f.a)({},n),{},{locations:e.payload});case x:return Object(f.a)(Object(f.a)({},n),{},{searchQuery:e.payload});case v:return Object(f.a)(Object(f.a)({},n),{},{searchQuery:"",locations:[]});case w:return Object(f.a)(Object(f.a)({},n),{},{searchQuery:"",locations:[],searchedResult:e.payload});case k:var t=C(e.payload,n.locations);return Object(f.a)(Object(f.a)({},n),{},{searchQuery:e.payload,searchedResult:t});default:return Object(f.a)({},n)}},F="@@FAVOURITE_LOCATIONS/ADD_FAVOURITE",R="@@FAVOURITE_LOCATIONS/DELETE_FAVOURITE",_="@@FAVOURITE_LOCATIONS/INIT_FAVOURITES",L={favourites:[],cookie_key:"FAVOURITES"},T=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case _:return Object(f.a)(Object(f.a)({},n),{},{favourites:[].concat(Object(d.a)(n.favourites),Object(d.a)(e.payload))});case F:return Object(f.a)(Object(f.a)({},n),{},{favourites:[].concat(Object(d.a)(n.favourites),[e.payload])});case R:return Object(f.a)(Object(f.a)({},n),{},{favourites:n.favourites.filter((function(n){return!(n.location.city===e.payload.location.city&&n.location.country===e.payload.location.country)}))});default:return Object(f.a)({},n)}},N="@@RECENTLY_VIEWED/ADD_NEW_LOCATION",A={viewed:[]},I=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case N:return{viewed:[].concat(Object(d.a)(n.viewed),[e.payload])};default:return Object(f.a)({},n)}},D=Object(h.c)({currentLocationState:g,searchState:S,favouriteLocationsState:T,recentlyViewedState:I}),z=Object(h.d)(D,(c=[b.a],h.a.apply(void 0,Object(d.a)(c))));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(58);var U,H,W,B,M,V,P,Q=t(7),G=t(83),Y=t(84),q=t(18),J=t(5),K=t(13),$=t(11),X=t(12),Z=X.b.nav(U||(U=Object($.a)(["\n  background: #222;\n  padding: 0 15rem;\n\n  .menu {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    align-items: center;\n    list-style-type: none;\n\n    li a {\n      display: block;\n      padding: 15px 5px;\n      color: white;\n      text-decoration: none;\n    }\n\n    .toggle {\n      order: 1;\n      font-size: 20px;\n    }\n\n    .logo {\n      font-size: 20px;\n      padding: 7.5px 10px 7.5px 0;\n    }\n\n    .item {\n      padding: 10px;\n      order: 3;\n      width: 100%;\n      text-align: center;\n      display: none;\n\n      a:hover,\n      a:hover::after {\n        color: #ccc;\n      }\n    }\n  }\n\n  .active .item {\n    display: block;\n  }\n\n  /* Tablet menu */\n  @media all and (min-width: 700px) {\n    .menu {\n      justify-content: center;\n\n      .logo {\n        flex: 1;\n      }\n\n      .toggle {\n        flex: 1;\n        text-align: right;\n        order: 2;\n      }\n    }\n  }\n  /* Desktop menu */\n  @media all and (min-width: 960px) {\n    .menu {\n      align-items: flex-start;\n      flex-wrap: nowrap;\n      background: none;\n\n      .logo {\n        order: 0;\n      }\n      .item {\n        order: 1;\n        position: relative;\n        display: block;\n        width: auto;\n      }\n\n      .toggle {\n        display: none;\n      }\n    }\n  }\n"]))),nn=t(1),en=function(){var n=Object(a.useState)(!1),e=Object(Q.a)(n,2),t=e[0],c=e[1];return Object(nn.jsx)(Z,{children:Object(nn.jsxs)("ul",{className:t?"menu active":"menu",children:[Object(nn.jsx)("li",{className:"logo",children:Object(nn.jsx)(q.b,{to:"/",children:"Weather App"})}),Object(nn.jsx)("li",{className:"item",children:Object(nn.jsx)(q.b,{to:"/current-location",children:"Current Location"})}),Object(nn.jsx)("li",{className:"item",children:Object(nn.jsx)(q.b,{to:"/favourites",children:"Favourites"})}),Object(nn.jsx)("li",{className:"toggle",children:Object(nn.jsx)("a",{"aria-label":"Click to open mobile menu",onClick:function(){return c(!t)},children:Object(nn.jsx)(K.a,{icon:l.a})})})]})})},tn=t.p+"static/media/background.65800c54.jpg",cn=X.b.section(H||(H=Object($.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-flow: column;\n\n  h1,\n  h2 {\n    font-weight: bold;\n  }\n\n  h3 {\n    font-weight: 500;\n  }\n\n  p {\n    margin-top: 25rem;\n  }\n\n  svg {\n    margin-top: 25rem;\n    font-size: 60rem;\n  }\n"]))),an=function(n){var e=n.weather,t=n.country,c=n.city;return Object(nn.jsxs)(cn,{children:[Object(nn.jsx)("h3",{children:t}),Object(nn.jsx)("h2",{children:c}),""!==e.weather_icon&&Object(nn.jsx)(K.a,{icon:e.weather_icon}),Object(nn.jsxs)("h1",{children:[" ","".concat(e.temperature," ").concat("\xb0C")]}),Object(nn.jsx)("p",{children:e.date})]})},rn=X.b.section(W||(W=Object($.a)(["\n  width: 50%;\n  margin: 0 auto;\n  border-radius: 5rem;\n  background-color: rgba(0, 0, 0, 0.45);\n  line-height: 1;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  max-width: 50%;\n  padding: 10rem;\n  margin-top: 30rem;\n\n  .flex-forecast {\n    display: flex;\n    justify-content: space-between;\n    padding: 5rem 0;\n\n    .weather-forecast-info {\n      span {\n        margin-left: 10rem;\n      }\n    }\n  }\n"]))),on=function(n){var e=n.forecast;return Object(nn.jsx)(rn,{"aria-label":"forecast data",children:Object(nn.jsx)(nn.Fragment,{children:e.map((function(n,e){return Object(nn.jsx)(r.a.Fragment,{children:Object(nn.jsxs)("div",{className:"flex-forecast",children:[Object(nn.jsx)("p",{children:n.day}),Object(nn.jsxs)("p",{className:"weather-forecast-info",children:[""!==n.weather_icon&&Object(nn.jsx)(K.a,{icon:n.weather_icon}),Object(nn.jsx)("span",{children:"".concat(n.temp_max," ").concat("\xb0C")})]})]})},e)}))})})},sn=t(10),un=t.n(sn),ln=t(19),dn=function(n){if(n.ok)return n.json();n.status},hn=t(28),bn=t.n(hn),fn=function(n){var e={};return n&&(e={today:jn(n.current),forecast:pn(n.daily)}),e},jn=function(n){return{date:bn.a.unix(n.dt).format("LL"),temperature:Math.round(n.temp),feels_like:Math.round(n.feels_like),weather_icon:0===n.weather.length?"":On(n.weather[0].main),weather_description:0===n.weather.length?"":n.weather[0].description,humidity:"".concat(n.humidity,"%"),wind:"".concat(mn(n.wind_deg)," ").concat(Math.round(3.6*n.wind_speed)," km/h")}},pn=function(n){var e=[];return n.map((function(n){e.push({day:bn.a.unix(n.dt).isSame(bn()(),"day")?"Today":bn.a.unix(n.dt).format("dddd"),weather_icon:0===n.weather.length?"":On(n.weather[0].main),weather_description:0===n.weather.length?"":n.weather[0].description,temp_min:Math.round(n.temp.min),temp_max:Math.round(n.temp.max)})})),e},mn=function(n){var e="";switch(!0){case n>=0&&n<30||360===n:e="N";break;case n>=30&&n<60:e="NE";break;case n>=60&&n<120:e="E";break;case n>=120&&n<150:e="ES";break;case n>=150&&n<210:e="S";break;case n>=210&&n<240:e="SW";break;case n>=240&&n<300:e="W";break;case n>=300&&n<330:e="NW"}return e},On=function(n){var e="";switch(n){case"Thunderstorm":e="bolt";break;case"Drizzle":e="cloud-rain";break;case"Rain":e="cloud-showers-heavy";break;case"Snow":e="snowflake";break;case"Clear":e="sun";break;case"Clouds":e="cloud";break;case"Smoke":case"Fog":case"Mist":case"Haze":case"Dust":e="smog"}return e},gn=function(){return{getWeather:function(){var n=Object(ln.a)(un.a.mark((function n(e,t){return un.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://api.openweathermap.org/data/2.5/onecall?lat=".concat(e,"&lon=").concat(t,"&units=metric&exclude=").concat("minutely,hourly,alerts","&appid=").concat("72be570f8fa6d10abaadbb7166f6e634"),{method:"GET"}).then((function(n){return dn(n)})).then((function(n){return fn(n)}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()}},yn=t(46),xn=X.b.button(B||(B=Object($.a)(["\n  width: 100%;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n\n  &:focus {\n    outline: none;\n  }\n\n  svg {\n    font-size: 30rem;\n  }\n\n  @media (min-width: 1080px) {\n    width: 80%;\n  }\n"]))),vn=t(9),wn=function(n){var e=n.information,t=Object(a.useState)(!1),c=Object(Q.a)(t,2),r=c[0],o=c[1],i=Object(s.c)((function(n){return n.favouriteLocationsState})),u=Object(G.a)([i.cookie_key]),d=Object(Q.a)(u,2),h=(d[0],d[1]),b=Object(s.b)();Object(a.useEffect)((function(){var n=i.favourites.find((function(n){return n.location.city===e.location.city&&n.location.country===e.location.country}));o(void 0!==n)}),[i.favourites]),Object(a.useEffect)((function(){h(i.cookie_key,i.favourites)}),[i.favourites]);var f=function(){var n;b((n=e,Object(vn.action)(F,n))),o(!0)},j=function(){var n;b((n=e,Object(vn.action)(R,n))),o(!1)};return Object(nn.jsxs)(nn.Fragment,{children:[Object(nn.jsx)(xn,{onClick:function(){return j()},style:{display:r?"flex":"none"},title:"Unfavourite Location","aria-label":"Unfavourite Location",children:Object(nn.jsx)(K.a,{icon:l.f})}),Object(nn.jsx)(xn,{onClick:function(){return f()},style:{display:r?"none":"flex"},title:"Favourite Location","aria-label":"Favourite Location",children:Object(nn.jsx)(K.a,{icon:yn.a})})]})},kn=function(n){return Object(vn.action)(N,n)},En=function(n){return Object(vn.action)(j,n)},Cn=function(n){var e=[];return n&&n.map((function(n){e.push({city:n.name,country:n.country.name,lat:n.coordinates.latitude,lon:n.coordinates.longitude})})),e},Sn=function(){var n="40b992f2acmsh37b5e36462aa771p13d32bjsn5804c8186f4a";return{getLocationByCoords:function(){var e=Object(ln.a)(un.a.mark((function e(t,c){return un.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://wft-geo-db.p.rapidapi.com/v1/geo/adminDivisions?location=".concat(t).concat(c),{method:"GET",headers:{"x-rapidapi-key":n,"x-rapidapi-host":"wft-geo-db.p.rapidapi.com"}}).then((function(n){return dn(n)})).then((function(n){if(n&&0!==n.data.length){var e={city:n.data[0].name,country:n.data[0].country,lat:0,lon:0};z.dispatch(En(e))}console.error("There is no available data")})).catch((function(n){console.error(n)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),getLocationByName:function(){var e=Object(ln.a)(un.a.mark((function e(t,c){return un.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://wft-geo-db.p.rapidapi.com/v1/geo/cities?limit=5&offset=0&namePrefix=".concat(t),{method:"GET",headers:{"x-rapidapi-key":n,"x-rapidapi-host":"wft-geo-db.p.rapidapi.com"}}).then((function(n){return dn(n)})).then((function(n){if(n&&0!==n.data.length){var e=n.data.find((function(n){return n.country.toLowerCase().replace(/\s+/g,"-")===c}));return{city:void 0===e?n.data[0].name:e.name,country:void 0===e?n.data[0].country:e.country,lat:void 0===e?n.data[0].latitude:e.latitude,lon:void 0===e?n.data[0].longitude:e.longitude}}return{}})).catch((function(n){return console.error(n),n}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),searchForPlaces:function(){var n=Object(ln.a)(un.a.mark((function n(e){return un.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://spott.p.rapidapi.com/places/autocomplete?q=".concat(e,"&type=CITY"),{method:"GET",headers:{"x-rapidapi-key":"40b992f2acmsh37b5e36462aa771p13d32bjsn5804c8186f4a","x-rapidapi-host":"spott.p.rapidapi.com"}}).then((function(n){return dn(n)})).then((function(n){return Cn(n)}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}},Fn=t(24),Rn=t.n(Fn),_n=function(n){var e=n.match,t=gn().getWeather,c=Object(s.c)((function(n){return n.searchState})),r=Object(s.c)((function(n){return n.recentlyViewedState})),o=Object(s.b)(),i=Object(a.useState)(),u=Object(Q.a)(i,2),l=u[0],d=u[1],h=Object(a.useState)(c.searchedResult),b=Object(Q.a)(h,2),f=b[0],j=b[1];Object(a.useEffect)((function(){!m()||""===c.searchedResult.city||c.searchedResult.city!==e.params.city&&c.searchedResult.country!==e.params.country?Sn().getLocationByName(e.params.city,e.params.country).then((function(n){j(n),p(n.lat,n.lon)})):p(c.searchedResult.lat,c.searchedResult.lon)}),[]);var p=function(n,e){t(n,e).then((function(n){d(n),o(kn(O()))}))},m=function(){return r.viewed.find((function(n){return n.location.city===c.searchedResult.city&&n.location.country===c.searchedResult.country}))},O=function(){return{location:void 0===c.searchedResult.city?f:c.searchedResult,weather:null===l||void 0===l?void 0:l.today}};return Object(nn.jsx)(nn.Fragment,{children:Object(nn.jsxs)("main",{style:{backgroundImage:"url(".concat(tn,")")},children:[void 0===l&&void 0===f&&Object(nn.jsx)("div",{className:"page-loader",children:Object(nn.jsx)(Rn.a,{type:"Bars",color:"#FFFFFF",height:80,width:80})}),void 0!==l&&void 0!==f&&Object(nn.jsxs)(nn.Fragment,{children:[Object(nn.jsx)(wn,{information:O()}),Object(nn.jsx)(an,{weather:l.today,city:f.city,country:f.country}),Object(nn.jsx)(on,{forecast:l.forecast})]})]})})},Ln=function(){var n=Object(s.b)(),e=gn().getWeather,t=Object(a.useState)(),c=Object(Q.a)(t,2),r=c[0],o=c[1],i=Object(s.c)((function(n){return n.currentLocationState}));Object(a.useEffect)((function(){u()}),[]);var u=function(){navigator.geolocation.getCurrentPosition((function(t){var c,a={city:"",country:"",lat:t.coords.latitude,lon:t.coords.longitude};Sn().getLocationByCoords(t.coords.latitude,t.coords.longitude),n((c=a,Object(vn.action)(p,c))),e(t.coords.latitude,t.coords.longitude).then((function(e){n(function(n){return Object(vn.action)(m,n)}(e)),o(e),n(kn(l()))}))}))},l=function(){return{location:i.location,weather:i.weather.today}};return Object(nn.jsx)(nn.Fragment,{children:Object(nn.jsxs)("main",{style:{backgroundImage:"url(".concat(tn,")")},children:[void 0===r&&Object(nn.jsx)("div",{className:"page-loader",children:Object(nn.jsx)(Rn.a,{type:"Bars",color:"#FFFFFF",height:80,width:80})}),void 0!==r&&Object(nn.jsxs)(nn.Fragment,{children:[Object(nn.jsx)(wn,{information:l()}),Object(nn.jsx)(an,{weather:r.today,city:i.location.city,country:i.location.country}),Object(nn.jsx)(on,{forecast:r.forecast})]})]})})},Tn=X.b.section(M||(M=Object($.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-flow: column;\n  height: 100%;\n\n  ul {\n    display: flex;\n    flex-wrap: wrap;\n    width: 100%;\n    flex-direction: row;\n    justify-content: center;\n\n    li {\n      box-sizing: border-box;\n      margin: 1rem 0.25em;\n      cursor: pointer;\n      border-radius: 20rem;\n      background-color: rgba(0, 0, 0, 0.45);\n      line-height: 1;\n      -webkit-backdrop-filter: blur(10px);\n      backdrop-filter: blur(10px);\n      height: 180rem;\n      padding: 15rem;\n      width: 150rem;\n      position: relative;\n      div {\n        position: absolute;\n        bottom: 15rem;\n\n        p {\n          cursor: pointer;\n          line-height: 30rem;\n\n          span {\n            margin-left: 5rem;\n          }\n        }\n      }\n    }\n  }\n"]))),Nn=function(n){var e=n.locations,t=Object(J.f)();return Object(nn.jsxs)(Tn,{children:[0===e.length&&Object(nn.jsx)("h2",{children:"You don't have any favourite locations yet!"}),0!==e.length&&Object(nn.jsx)("ul",{children:e.map((function(n,e){return Object(nn.jsx)("li",{onClick:function(){return function(n){var e=n.location.city.replace(/\s+/g,"-").toLowerCase(),c=n.location.country.replace(/\s+/g,"-").toLowerCase();t.push("/".concat(e,"/").concat(c))}(n)},children:Object(nn.jsxs)("div",{children:[Object(nn.jsx)("p",{children:n.location.city}),Object(nn.jsxs)("p",{className:"weather-forecast-info",children:[""!==n.weather.weather_icon&&Object(nn.jsx)(K.a,{icon:n.weather.weather_icon}),Object(nn.jsx)("span",{children:"".concat(n.weather.temperature," ").concat("\xb0C")})]})]})},e)}))})]})},An=function(){var n=Object(s.c)((function(n){return n.favouriteLocationsState})),e=Object(a.useState)(),t=Object(Q.a)(e,2),c=t[0],r=t[1];return Object(a.useEffect)((function(){r(n.favourites)}),[n.favourites]),Object(nn.jsx)(nn.Fragment,{children:Object(nn.jsxs)("main",{style:{backgroundImage:"url(".concat(tn,")")},children:[void 0===c&&Object(nn.jsx)("div",{className:"page-loader",children:Object(nn.jsx)(Rn.a,{type:"Bars",color:"#FFFFFF",height:80,width:80})}),void 0!==c&&Object(nn.jsx)(Nn,{locations:c})]})})},In=function(n){return Object(vn.action)(x,n)},Dn=function(n){return Object(vn.action)(y,n)},zn=X.b.section(V||(V=Object($.a)(["\n  margin-top: 50rem;\n  width: 100%;\n\n  .open-search-dropdown {\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n    border-bottom-style: 1px solid #222;\n  }\n\n  form {\n    background: white;\n    border-radius: 4rem;\n\n    input {\n      border: none;\n      color: #222;\n      margin: 8rem 0;\n      outline: none;\n      font-size: 14rem;\n      width: calc(100% - 60rem);\n    }\n\n    #search-term-btn,\n    #clear-search-term-btn {\n      width: 30rem;\n      height: 36rem;\n      background: none;\n      border: none;\n      cursor: pointer;\n      vertical-align: top;\n\n      svg {\n        color: #222;\n      }\n\n      &:focus {\n        outline: none;\n      }\n    }\n  }\n\n  #search-options,\n  #no-search-options {\n    height: auto;\n    background: white;\n    border-style: none;\n\n    li {\n      color: #222;\n      height: 36rem;\n      font-size: 13rem;\n      padding: 8rem 16rem;\n      font-weight: 500;\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      vertical-align: middle;\n\n      &:hover,\n      &.active {\n        background: rgba(0, 129, 141, 0.2);\n        cursor: pointer;\n      }\n\n      &#no-results {\n        cursor: default;\n        opacity: 0.8;\n        svg {\n          color: #222;\n        }\n        &:hover {\n          background: unset;\n          color: unset;\n        }\n      }\n    }\n  }\n  @media (min-width: 1080px) {\n    form,\n    #no-search-options,\n    #search-options {\n      width: 50%;\n      margin: 0 auto;\n    }\n  }\n"]))),Un=function(){var n=Object(J.f)(),e=Object(s.c)((function(n){return n.searchState})),t=Object(a.useState)(""),c=Object(Q.a)(t,2),r=c[0],o=c[1],i=Object(a.useState)(!1),u=Object(Q.a)(i,2),d=u[0],h=u[1],b=Object(a.useState)(-1),f=Object(Q.a)(b,2),j=f[0],p=f[1],m=Object(a.useState)([]),O=Object(Q.a)(m,2),g=O[0],y=O[1],x=Object(a.useState)(!1),w=Object(Q.a)(x,2),E=w[0],C=w[1],S=Sn().searchForPlaces,F=Object(s.b)();Object(a.useEffect)((function(){return document.addEventListener("mouseup",R),function(){document.removeEventListener("mouseup",R)}}),[d]);var R=function(n){var e,t=n.target;d&&!(t.closest("input")||t.closest("li")||(null===(e=document.querySelector("form"))||void 0===e?void 0:e.contains(t)))&&(h(!1),p(-1))},_=function(){h(!1),F(Object(vn.action)(v,null)),o(""),p(-1),C(!1)},L=function(){var n=Object(ln.a)(un.a.mark((function n(e){return un.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:o(e.target.value),C(0!==e.target.value.length),e.target.value.length>=3?(T(e.target.value),F(In(e.target.value))):h(!1);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),T=function(){var n=Object(ln.a)(un.a.mark((function n(e){return un.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:S(e).then((function(n){y(n),F(Dn(n)),h(!0)}));case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),N=function(n){p(n);var t=-1===n?e.searchQuery:"".concat(e.locations[n].city,", ").concat(e.locations[n].country);o(t)},A=function(n){var e;""!==n&&(h(!1),o(n),p(-1),F((e=n,Object(vn.action)(k,e))),I(n))},I=function(e){var t=e.split(", ")[0].replace(/\s+/g,"-").toLowerCase(),c=e.split(", ")[1].replace(/\s+/g,"-").toLowerCase();n.push("/".concat(t,"/").concat(c))};return Object(nn.jsxs)(zn,{children:[Object(nn.jsxs)("form",{className:d?"open-search-dropdown":"",children:[Object(nn.jsx)("button",{id:"search-term-btn","aria-label":"Click to search",onClick:function(n){return function(n){n.preventDefault(),r.length>=3&&(0!==e.locations.length||0!==g.length)&&A(r)}(n)},children:Object(nn.jsx)(K.a,{icon:l.g})}),Object(nn.jsx)("input",{type:"text",placeholder:"Get weather for new locations...",value:r,maxLength:50,onChange:function(n){return L(n)},onKeyDown:function(n){return function(n){if(r.length>=3&&(0!==e.locations.length||0!==g.length))if(13===n.keyCode)A(r);else if(38===n.keyCode){n.preventDefault();var t=j>-1?j-1:e.locations.length-1;N(t)}else if(40===n.keyCode){n.preventDefault();var c=j<e.locations.length-1?j+1:-1;N(c)}}(n)},onFocus:function(n){return function(n){n.preventDefault(),r.length>=3&&(T(r),h(!0),F(In(r)))}(n)}}),Object(nn.jsx)("button",{id:"clear-search-term-btn","aria-label":"Click to clear search",onClick:function(){return _()},style:{visibility:E?"initial":"hidden"},children:Object(nn.jsx)(K.a,{icon:l.k})})]}),d&&0===e.locations.length&&0===g.length&&Object(nn.jsx)("ul",{id:"no-search-options",children:Object(nn.jsxs)("li",{id:"no-results",children:["No results found for ",Object(nn.jsx)("i",{children:r})]})}),d&&(0!==e.locations.length||0!==g.length)&&Object(nn.jsx)("ul",{id:"search-options",children:g.map((function(n,e){return Object(nn.jsxs)("li",{onClick:function(){return A("".concat(n.city,", ").concat(n.country))},children:[n.city,", ",n.country]},e)}))})]})},Hn=function(){return Object(nn.jsx)(nn.Fragment,{children:Object(nn.jsxs)("main",{style:{backgroundImage:"url(".concat(tn,")")},className:"centered-container",children:[Object(nn.jsx)("h1",{children:"Welcome!"}),Object(nn.jsx)("h3",{children:"Select your city to view the weather forecast."}),Object(nn.jsx)(Un,{})]})})},Wn=function(){return Object(nn.jsx)(nn.Fragment,{children:Object(nn.jsx)("main",{style:{backgroundImage:"url(".concat(tn,")")},className:"centered-container",children:Object(nn.jsxs)("h1",{children:["Page not found. Go back to",Object(nn.jsx)(q.b,{to:"/",replace:!0,children:" homepage."})]})})})},Bn=Object(X.a)(P||(P=Object($.a)(["\n    ","\n    ","\n\n    body {\n        min-width: 360px;\n        min-height: 660px;\n        display: flex;\n        flex-direction: column;\n\n        #root {\n            min-width: 360px;\n            min-height: 641px;\n        }\n\n        main {\n            height: calc(100vh - 100px);\n            min-height: 641px;\n            padding: 0;\n            flex: 1;\n            padding: 25rem;\n            background-position: center center;\n            background-repeat: no-repeat;\n            background-size: cover;\n\n            .page-loader {\n                display: flex;\n                flex-direction: column;\n                align-items: center;\n                justify-content: center;\n                height: 100%;\n            }\n\n            &.centered-container {\n                display: flex;\n                flex-direction: column;\n                align-items: center;\n                justify-content: center;\n\n                h1,\n                h3 {\n                    text-align: center;\n                }\n            }\n\n            h1, h2, h3, h4, h5, h6, p {\n                color: white;\n                cursor: default;\n            }\n\n            h1 {\n                font-size: 35rem;\n            }\n\n            h2 {\n                font-size: 25rem;\n            }\n\n            h3 {\n                font-size: 20rem;\n            }\n\n            svg {\n                color: white;\n            }\n        }\n    }\n"])),"\n    /****** Elad Shechter's RESET *******/\n    /*** box sizing border-box for all elements ***/\n    *,\n    *::before,\n    *::after{box-sizing:border-box;}\n    a{text-decoration:none; color:inherit; cursor:pointer;}\n    button{background-color:transparent; color:inherit; border-width:0; padding:0; cursor:pointer;}\n    figure{margin:0;}\n    input::-moz-focus-inner {border:0; padding:0; margin:0;}\n    ul, ol, dd{margin:0; padding:0; list-style:none;}\n    h1, h2, h3, h4, h5, h6{margin:0; font-size:inherit; font-weight:inherit;}\n    p{margin:0;}\n    cite {font-style:normal;}\n    fieldset{border-width:0; padding:0; margin:0;}\n","\n   html { \n      font-size: 1px; /*for using REM units*/\n   }\n   body {\n      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;\n      font-size: 16rem;\n      font-weight: 400;\n      line-height: 1.3;\n      color: #222;\n   }\n"),Mn=function(){var n=Object(s.c)((function(n){return n.favouriteLocationsState})),e=Object(G.a)([n.cookie_key]),t=Object(Q.a)(e,1)[0],c=Object(s.b)();return Object(a.useEffect)((function(){var e,a=t[n.cookie_key];a&&c((e=a,Object(vn.action)(_,e)))}),[]),Object(nn.jsxs)(Y.a,{children:[Object(nn.jsxs)(q.a,{children:[Object(nn.jsx)(en,{}),Object(nn.jsx)(J.a,{render:function(n){var e=n.location;return Object(nn.jsxs)(J.c,{location:e,children:[Object(nn.jsx)(J.a,{path:"/",exact:!0,component:Hn}),Object(nn.jsx)(J.a,{path:"/current-location",exact:!0,component:Ln}),Object(nn.jsx)(J.a,{path:"/favourites",exact:!0,component:An}),Object(nn.jsx)(J.a,{path:"/:city/:country",component:_n}),Object(nn.jsx)(J.a,{component:Wn})]})}})]}),Object(nn.jsx)(Bn,{})]})};i.a.render(Object(nn.jsx)(r.a.StrictMode,{children:Object(nn.jsx)(s.a,{store:z,children:Object(nn.jsx)(Mn,{})})}),document.getElementById("root")),u.b.add(l.j,l.e,l.c,l.h,l.d,l.b,l.i,l.a,l.g,l.k,l.f),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[81,1,2]]]);
//# sourceMappingURL=main.5a651bc7.chunk.js.map