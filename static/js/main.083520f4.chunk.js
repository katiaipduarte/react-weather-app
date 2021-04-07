(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{53:function(n,e,t){},58:function(n,e,t){"use strict";t.r(e);var r,a=t(0),c=t.n(a),o=t(27),i=t.n(o),s=t(7),u=t(22),l=t(6),d=t(23),h=t(36),b=t(38),f=t(4),p="@@CURRENT_LOCATION/UPDATE_LOCATION",j="@@CURRENT_LOCATION/UPDATE_GEO_LOCATION",m="@@CURRENT_LOCATION/UPDATE_WEATHER",O={location:{city:"Lisbon",country:"Portugal",lat:38.7259284,lon:-9.137382},weather:{}},g=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case j:return Object(f.a)(Object(f.a)({},n),{},{location:Object(f.a)(Object(f.a)({},n.location),{},{lat:e.payload.lat,lon:e.payload.lon})});case p:return Object(f.a)(Object(f.a)({},n),{},{location:Object(f.a)(Object(f.a)({},n.location),{},{city:""===e.payload.city?n.location.city:e.payload.city,country:""===e.payload.country?n.location.country:e.payload.country})});case m:return Object(f.a)(Object(f.a)({},n),{},{weather:e.payload});default:return Object(f.a)({},n)}},y="@@SEARCH/SEARCH_ITEMS_LOAD",x="@@SEARCH/SEARCH_QUERY",v="@@SEARCH/SEARCH_CLEAR",w="@@SEARCH/SEARCH_FOUND",k="@@SEARCH/SEARCH_QUERY_SELECTED",E={searchQuery:"",locations:[],searchedResult:{}},C=function(n,e){var t=n.split(", "),r=t[0],a=1===t.length?"":t[1];return""===a?e.find((function(n){return n.city===r})):e.find((function(n){return n.city===r&&n.country===a}))},S=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case y:return Object(f.a)(Object(f.a)({},n),{},{locations:e.payload});case x:return Object(f.a)(Object(f.a)({},n),{},{searchQuery:e.payload});case v:return Object(f.a)(Object(f.a)({},n),{},{searchQuery:"",locations:[]});case w:return Object(f.a)(Object(f.a)({},n),{},{searchQuery:"",locations:[],searchedResult:e.payload});case k:var t=C(e.payload,n.locations);return Object(f.a)(Object(f.a)({},n),{},{searchQuery:e.payload,searchedResult:t});default:return Object(f.a)({},n)}},R="@@FAVOURITE_LOCATIONS/ADD_FAVOURITE",L="@@FAVOURITE_LOCATIONS/DELETE_FAVOURITE",_={favourites:[]},T=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case R:return{favourites:[].concat(Object(d.a)(n.favourites),[e.payload])};case L:return{favourites:n.favourites.filter((function(n){return!(n.location.city===e.payload.location.city&&n.location.country===e.payload.location.country)}))};default:return Object(f.a)({},n)}},A="@@RECENTLY_VIEWED/ADD_NEW_LOCATION",N={viewed:[]},F=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case A:return{viewed:[].concat(Object(d.a)(n.viewed),[e.payload])};default:return Object(f.a)({},n)}},D=Object(h.c)({currentLocationState:g,searchState:S,favouriteLocationsState:T,recentlyViewedState:F}),I=Object(h.d)(D,(r=[b.a],h.a.apply(void 0,Object(d.a)(r))));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(53);var z,U,H,W,M,P,Q,B,V=t(18),G=t(5),Y=t(10),q=t(13),J=t(8),K=t(9),$=K.b.nav(z||(z=Object(J.a)(["\n  background: #222;\n  padding: 0 15rem;\n\n  .menu {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    align-items: center;\n    list-style-type: none;\n\n    li a {\n      display: block;\n      padding: 15px 5px;\n      color: white;\n      text-decoration: none;\n    }\n\n    .toggle {\n      order: 1;\n      font-size: 20px;\n    }\n\n    .logo {\n      font-size: 20px;\n      padding: 7.5px 10px 7.5px 0;\n    }\n\n    .item {\n      padding: 10px;\n      order: 3;\n      width: 100%;\n      text-align: center;\n      display: none;\n\n      a:hover,\n      a:hover::after {\n        color: #ccc;\n      }\n    }\n  }\n\n  .active .item {\n    display: block;\n  }\n\n  /* Tablet menu */\n  @media all and (min-width: 700px) {\n    .menu {\n      justify-content: center;\n\n      .logo {\n        flex: 1;\n      }\n\n      .toggle {\n        flex: 1;\n        text-align: right;\n        order: 2;\n      }\n    }\n  }\n  /* Desktop menu */\n  @media all and (min-width: 960px) {\n    .menu {\n      align-items: flex-start;\n      flex-wrap: nowrap;\n      background: none;\n\n      .logo {\n        order: 0;\n      }\n      .item {\n        order: 1;\n        position: relative;\n        display: block;\n        width: auto;\n      }\n\n      .toggle {\n        display: none;\n      }\n    }\n  }\n"]))),X=t(1),Z=function(){var n=Object(a.useState)(!1),e=Object(Y.a)(n,2),t=e[0],r=e[1];return Object(X.jsx)($,{children:Object(X.jsxs)("ul",{className:t?"menu active":"menu",children:[Object(X.jsx)("li",{className:"logo",children:Object(X.jsx)(V.b,{to:"/",children:"Weather App"})}),Object(X.jsx)("li",{className:"item",children:Object(X.jsx)(V.b,{to:"/current-location",children:"Current Location"})}),Object(X.jsx)("li",{className:"item",children:Object(X.jsx)(V.b,{to:"/favourites",children:"Favourites"})}),Object(X.jsx)("li",{className:"toggle",children:Object(X.jsx)("a",{"aria-label":"Click to open mobile menu",onClick:function(){return r(!t)},children:Object(X.jsx)(q.a,{icon:l.a})})})]})})},nn=t.p+"static/media/background.65800c54.jpg",en=K.b.section(U||(U=Object(J.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-flow: column;\n\n  h1,\n  h2 {\n    font-weight: bold;\n  }\n\n  h3 {\n    font-weight: 500;\n  }\n\n  p {\n    margin-top: 25rem;\n  }\n\n  svg {\n    margin-top: 25rem;\n    font-size: 60rem;\n  }\n"]))),tn=function(n){var e=n.weather,t=n.country,r=n.city;return Object(X.jsxs)(en,{children:[Object(X.jsx)("h3",{children:t}),Object(X.jsx)("h2",{children:r}),""!==e.weather_icon&&Object(X.jsx)(q.a,{icon:e.weather_icon}),Object(X.jsxs)("h1",{children:[" ","".concat(e.temperature," ").concat("\xb0C")]}),Object(X.jsx)("p",{children:e.date})]})},rn=K.b.section(H||(H=Object(J.a)(["\n  width: 50%;\n  margin: 0 auto;\n  border-radius: 5rem;\n  background-color: rgba(0, 0, 0, 0.45);\n  line-height: 1;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  max-width: 50%;\n  padding: 10rem;\n  margin-top: 30rem;\n\n  .flex-forecast {\n    display: flex;\n    justify-content: space-between;\n    padding: 5rem 0;\n\n    .weather-forecast-info {\n      span {\n        margin-left: 10rem;\n      }\n    }\n  }\n"]))),an=function(n){var e=n.forecast;return Object(X.jsx)(rn,{"aria-label":"forecast data",children:Object(X.jsx)(X.Fragment,{children:e.map((function(n,e){return Object(X.jsx)(c.a.Fragment,{children:Object(X.jsxs)("div",{className:"flex-forecast",children:[Object(X.jsx)("p",{children:n.day}),Object(X.jsxs)("p",{className:"weather-forecast-info",children:[""!==n.weather_icon&&Object(X.jsx)(q.a,{icon:n.weather_icon}),Object(X.jsx)("span",{children:"".concat(n.temp_max," ").concat("\xb0C")})]})]})},e)}))})})},cn=t(12),on=t.n(cn),sn=t(19),un=function(n){if(n.ok)return n.json();n.status},ln=t(26),dn=t.n(ln),hn=function(n){var e={};return n&&(e={today:bn(n.current),forecast:fn(n.daily)}),e},bn=function(n){return{date:dn.a.unix(n.dt).format("LL"),temperature:Math.round(n.temp),feels_like:Math.round(n.feels_like),weather_icon:0===n.weather.length?"":jn(n.weather[0].main),weather_description:0===n.weather.length?"":n.weather[0].description,humidity:"".concat(n.humidity,"%"),wind:"".concat(pn(n.wind_deg)," ").concat(Math.round(3.6*n.wind_speed)," km/h")}},fn=function(n){var e=[];return n.map((function(n){e.push({day:dn.a.unix(n.dt).isSame(dn()(),"day")?"Today":dn.a.unix(n.dt).format("dddd"),weather_icon:0===n.weather.length?"":jn(n.weather[0].main),weather_description:0===n.weather.length?"":n.weather[0].description,temp_min:Math.round(n.temp.min),temp_max:Math.round(n.temp.max)})})),e},pn=function(n){var e="";switch(!0){case n>=0&&n<30||360===n:e="N";break;case n>=30&&n<60:e="NE";break;case n>=60&&n<120:e="E";break;case n>=120&&n<150:e="ES";break;case n>=150&&n<210:e="S";break;case n>=210&&n<240:e="SW";break;case n>=240&&n<300:e="W";break;case n>=300&&n<330:e="NW"}return e},jn=function(n){var e="";switch(n){case"Thunderstorm":e="bolt";break;case"Drizzle":e="cloud-rain";break;case"Rain":e="cloud-showers-heavy";break;case"Snow":e="snowflake";break;case"Clear":e="sun";break;case"Clouds":e="cloud";break;case"Smoke":case"Fog":case"Mist":case"Haze":case"Dust":e="smog"}return e},mn=function(){return{getWeather:function(){var n=Object(sn.a)(on.a.mark((function n(e,t){return on.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://api.openweathermap.org/data/2.5/onecall?lat=".concat(e,"&lon=").concat(t,"&units=metric&exclude=").concat("minutely,hourly,alerts","&appid=").concat("72be570f8fa6d10abaadbb7166f6e634"),{method:"GET"}).then((function(n){return un(n)})).then((function(n){return hn(n)}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()}},On=K.b.button(W||(W=Object(J.a)(["\n  width: 100%;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n  padding-top: 25rem;\n\n  &:focus {\n    outline: none;\n  }\n\n  svg {\n    font-size: 30rem;\n  }\n\n  @media (min-width: 1080px) {\n    width: 80%;\n  }\n"]))),gn=t(11),yn=t(42),xn=function(n){var e=n.information,t=Object(a.useState)(!1),r=Object(Y.a)(t,2),c=r[0],o=r[1],i=Object(s.c)((function(n){return n.favouriteLocationsState})),u=Object(s.b)();Object(a.useEffect)((function(){var n=i.favourites.find((function(n){return n.location.city===e.location.city&&n.location.country===e.location.country}));o(void 0!==n)}),[]);var d=function(){var n;u((n=e,Object(gn.action)(R,n))),o(!0)},h=function(){var n;u((n=e,Object(gn.action)(L,n))),o(!1)};return Object(X.jsxs)(X.Fragment,{children:[Object(X.jsx)(On,{onClick:function(){return h()},style:{display:c?"flex":"none"},title:"Unfavourite Location","aria-label":"Unfavourite Location",children:Object(X.jsx)(q.a,{icon:l.f})}),Object(X.jsx)(On,{onClick:function(){return d()},style:{display:c?"none":"flex"},title:"Favourite Location","aria-label":"Favourite Location",children:Object(X.jsx)(q.a,{icon:yn.a})})]})},vn=function(n){return Object(gn.action)(A,n)},wn=function(n){return Object(gn.action)(p,n)},kn=function(n){var e=[];return n&&n.map((function(n){e.push({city:n.name,country:n.country.name,lat:n.coordinates.latitude,lon:n.coordinates.longitude})})),e},En=function(){var n="40b992f2acmsh37b5e36462aa771p13d32bjsn5804c8186f4a";return{getLocationByCoords:function(){var e=Object(sn.a)(on.a.mark((function e(t,r){return on.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://wft-geo-db.p.rapidapi.com/v1/geo/adminDivisions?location=".concat(t).concat(r),{method:"GET",headers:{"x-rapidapi-key":n,"x-rapidapi-host":"wft-geo-db.p.rapidapi.com"}}).then((function(n){return un(n)})).then((function(n){if(n&&0!==n.data.length){var e={city:n.data[0].name,country:n.data[0].country,lat:0,lon:0};I.dispatch(wn(e))}console.error("There is no available data")})).catch((function(n){console.error(n)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),getLocationByName:function(){var e=Object(sn.a)(on.a.mark((function e(t,r){return on.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://wft-geo-db.p.rapidapi.com/v1/geo/cities?limit=5&offset=0&namePrefix=".concat(t),{method:"GET",headers:{"x-rapidapi-key":n,"x-rapidapi-host":"wft-geo-db.p.rapidapi.com"}}).then((function(n){return un(n)})).then((function(n){if(n&&0!==n.data.length){var e=n.data.find((function(n){return n.country.toLowerCase().replace(/\s+/g,"-")===r}));return{city:void 0===e?n.data[0].name:e.name,country:void 0===e?n.data[0].country:e.country,lat:void 0===e?n.data[0].latitude:e.latitude,lon:void 0===e?n.data[0].longitude:e.longitude}}return{}})).catch((function(n){return console.error(n),n}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),searchForPlaces:function(){var n=Object(sn.a)(on.a.mark((function n(e){return on.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://spott.p.rapidapi.com/places/autocomplete?q=".concat(e,"&type=CITY"),{method:"GET",headers:{"x-rapidapi-key":"40b992f2acmsh37b5e36462aa771p13d32bjsn5804c8186f4a","x-rapidapi-host":"spott.p.rapidapi.com"}}).then((function(n){return un(n)})).then((function(n){return kn(n)}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}},Cn=function(n){var e=n.match,t=mn().getWeather,r=Object(s.c)((function(n){return n.searchState})),c=Object(s.c)((function(n){return n.recentlyViewedState})),o=Object(s.b)(),i=Object(a.useState)(),u=Object(Y.a)(i,2),l=u[0],d=u[1],h=Object(a.useState)(r.searchedResult),b=Object(Y.a)(h,2),f=b[0],p=b[1];Object(a.useEffect)((function(){var n=m();n?d(n.weather):""===r.searchedResult.city||r.searchedResult.city!==e.params.city&&r.searchedResult.country!==e.params.country?En().getLocationByName(e.params.city,e.params.country).then((function(n){p(n),j(n.lat,n.lon)})):j(r.searchedResult.lat,r.searchedResult.lon)}),[]);var j=function(n,e){t(n,e).then((function(n){d(n),o(vn(O()))}))},m=function(){return c.viewed.find((function(n){return n.location.city===r.searchedResult.city&&n.location.country===r.searchedResult.country}))},O=function(){return{location:void 0===r.searchedResult.city?f:r.searchedResult,weather:l}};return Object(X.jsxs)(X.Fragment,{children:[Object(X.jsx)(Z,{}),Object(X.jsx)("main",{style:{backgroundImage:"url(".concat(nn,")")},children:void 0!==l&&void 0!==f&&Object(X.jsxs)(X.Fragment,{children:[Object(X.jsx)(xn,{information:O()}),Object(X.jsx)(tn,{weather:l.today,city:f.city,country:f.country}),Object(X.jsx)(an,{forecast:l.forecast})]})})]})},Sn=function(){var n=Object(s.b)(),e=mn().getWeather,t=Object(a.useState)(),r=Object(Y.a)(t,2),c=r[0],o=r[1],i=Object(s.c)((function(n){return n.currentLocationState}));Object(a.useEffect)((function(){u()}),[]);var u=function(){navigator.geolocation.getCurrentPosition((function(t){var r,a={city:"",country:"",lat:t.coords.latitude,lon:t.coords.longitude};En().getLocationByCoords(t.coords.latitude,t.coords.longitude),n((r=a,Object(gn.action)(j,r))),e(t.coords.latitude,t.coords.longitude).then((function(e){n(function(n){return Object(gn.action)(m,n)}(e)),o(e),n(vn(i))}))}))};return Object(X.jsxs)(X.Fragment,{children:[Object(X.jsx)(Z,{}),Object(X.jsx)("main",{style:{backgroundImage:"url(".concat(nn,")")},children:void 0!==c&&Object(X.jsxs)(X.Fragment,{children:[Object(X.jsx)(xn,{information:i}),Object(X.jsx)(tn,{weather:c.today,city:i.location.city,country:i.location.country}),Object(X.jsx)(an,{forecast:c.forecast})]})})]})},Rn=K.b.section(M||(M=Object(J.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-flow: column;\n  height: 100vh;\n\n  ul {\n    display: flex;\n    flex-wrap: wrap;\n    width: 100%;\n    flex-direction: row;\n    justify-content: center;\n\n    li {\n      box-sizing: border-box;\n      margin: 1rem 0.25em;\n      cursor: pointer;\n      border-radius: 20rem;\n      background-color: rgba(0, 0, 0, 0.45);\n      line-height: 1;\n      -webkit-backdrop-filter: blur(10px);\n      backdrop-filter: blur(10px);\n      height: 180rem;\n      padding: 15rem;\n      width: 150rem;\n      div {\n        position: absolute;\n        bottom: 15rem;\n\n        p {\n          cursor: pointer;\n          line-height: 30rem;\n\n          span {\n            margin-left: 5rem;\n          }\n        }\n      }\n    }\n  }\n"]))),Ln=function(){var n=Object(s.c)((function(n){return n.favouriteLocationsState})),e=Object(G.f)();return Object(X.jsxs)(Rn,{children:[0===n.favourites.length&&Object(X.jsx)("h2",{children:"You don't have any favourite locations yet!"}),0!==n.favourites.length&&Object(X.jsx)("ul",{children:n.favourites.map((function(n,t){return Object(X.jsx)("li",{onClick:function(){return function(n){var t=n.location.city.replace(/\s+/g,"-").toLowerCase(),r=n.location.country.replace(/\s+/g,"-").toLowerCase();e.push("/".concat(t,"/").concat(r))}(n)},children:Object(X.jsxs)("div",{children:[Object(X.jsx)("p",{children:n.location.city}),Object(X.jsxs)("p",{className:"weather-forecast-info",children:[""!==n.weather.today.weather_icon&&Object(X.jsx)(q.a,{icon:n.weather.today.weather_icon}),Object(X.jsx)("span",{children:"".concat(n.weather.today.temperature," ").concat("\xb0C")})]})]})},t)}))})]})},_n=function(){return Object(X.jsxs)(X.Fragment,{children:[Object(X.jsx)(Z,{}),Object(X.jsx)("main",{style:{backgroundImage:"url(".concat(nn,")")},children:Object(X.jsx)(Ln,{})})]})},Tn=K.b.main(P||(P=Object(J.a)(["\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n\n  h1,\n  h3 {\n    text-align: center;\n  }\n"]))),An=function(n){return Object(gn.action)(x,n)},Nn=function(n){return Object(gn.action)(y,n)},Fn=K.b.section(Q||(Q=Object(J.a)(["\n  margin-top: 50rem;\n  width: 100%;\n\n  .open-search-dropdown {\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n    border-bottom-style: 1px solid #222;\n  }\n\n  form {\n    background: white;\n    border-radius: 4rem;\n\n    input {\n      border: none;\n      color: #222;\n      margin: 8rem 0;\n      outline: none;\n      font-size: 14rem;\n      width: calc(100% - 60rem);\n    }\n\n    #search-term-btn,\n    #clear-search-term-btn {\n      width: 30rem;\n      height: 36rem;\n      background: none;\n      border: none;\n      cursor: pointer;\n      vertical-align: top;\n\n      svg {\n        color: #222;\n      }\n\n      &:focus {\n        outline: none;\n      }\n    }\n  }\n\n  #search-options,\n  #no-search-options {\n    height: auto;\n    background: white;\n    border-style: none;\n\n    li {\n      color: #222;\n      height: 36rem;\n      font-size: 13rem;\n      padding: 8rem 16rem;\n      font-weight: 500;\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      vertical-align: middle;\n\n      &:hover,\n      &.active {\n        background: rgba(0, 129, 141, 0.2);\n        cursor: pointer;\n      }\n\n      &#no-results {\n        cursor: default;\n        opacity: 0.8;\n        svg {\n          color: #222;\n        }\n        &:hover {\n          background: unset;\n          color: unset;\n        }\n      }\n    }\n  }\n  @media (min-width: 1080px) {\n    form,\n    #no-search-options,\n    #search-options {\n      width: 50%;\n      margin: 0 auto;\n    }\n  }\n"]))),Dn=function(){var n=Object(G.f)(),e=Object(s.c)((function(n){return n.searchState})),t=Object(a.useState)(""),r=Object(Y.a)(t,2),c=r[0],o=r[1],i=Object(a.useState)(!1),u=Object(Y.a)(i,2),d=u[0],h=u[1],b=Object(a.useState)(-1),f=Object(Y.a)(b,2),p=f[0],j=f[1],m=Object(a.useState)([]),O=Object(Y.a)(m,2),g=O[0],y=O[1],x=Object(a.useState)(!1),w=Object(Y.a)(x,2),E=w[0],C=w[1],S=En().searchForPlaces,R=Object(s.b)();Object(a.useEffect)((function(){return document.addEventListener("mouseup",L),function(){document.removeEventListener("mouseup",L)}}),[d]);var L=function(n){var e,t=n.target;d&&!(t.closest("input")||t.closest("li")||(null===(e=document.querySelector("form"))||void 0===e?void 0:e.contains(t)))&&(h(!1),j(-1))},_=function(){h(!1),R(Object(gn.action)(v,null)),o(""),j(-1),C(!1)},T=function(){var n=Object(sn.a)(on.a.mark((function n(e){return on.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:o(e.target.value),C(0!==e.target.value.length),e.target.value.length>=3?(A(e.target.value),h(!0),R(An(e.target.value))):h(!1);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),A=function(){var n=Object(sn.a)(on.a.mark((function n(e){return on.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:S(e).then((function(n){y(n),R(Nn(n))}));case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),N=function(n){j(n);var t=-1===n?e.searchQuery:"".concat(e.locations[n].city,", ").concat(e.locations[n].country);o(t)},F=function(n){var e;""!==n&&(h(!1),o(n),j(-1),R((e=n,Object(gn.action)(k,e))),D(n))},D=function(e){var t=e.split(", ")[0].replace(/\s+/g,"-").toLowerCase(),r=e.split(", ")[1].replace(/\s+/g,"-").toLowerCase();n.push("/".concat(t,"/").concat(r))};return Object(X.jsxs)(Fn,{children:[Object(X.jsxs)("form",{className:d?"open-search-dropdown":"",children:[Object(X.jsx)("button",{id:"search-term-btn","aria-label":"Click to search",onClick:function(n){return function(n){n.preventDefault(),c.length>=3&&(0!==e.locations.length||0!==g.length)&&F(c)}(n)},children:Object(X.jsx)(q.a,{icon:l.g})}),Object(X.jsx)("input",{type:"text",placeholder:"Get weather for new locations...",value:c,maxLength:50,onChange:function(n){return T(n)},onKeyDown:function(n){return function(n){if(c.length>=3&&(0!==e.locations.length||0!==g.length))if(13===n.keyCode)F(c);else if(38===n.keyCode){n.preventDefault();var t=p>-1?p-1:e.locations.length-1;N(t)}else if(40===n.keyCode){n.preventDefault();var r=p<e.locations.length-1?p+1:-1;N(r)}}(n)},onFocus:function(n){return function(n){n.preventDefault(),c.length>=3&&(A(c),h(!0),R(An(c)))}(n)}}),Object(X.jsx)("button",{id:"clear-search-term-btn","aria-label":"Click to clear search",onClick:function(){return _()},style:{visibility:E?"initial":"hidden"},children:Object(X.jsx)(q.a,{icon:l.k})})]}),d&&0===e.locations.length&&0===g.length&&Object(X.jsx)("ul",{id:"no-search-options",children:Object(X.jsxs)("li",{id:"no-results",children:["No results found for ",Object(X.jsx)("i",{children:c})]})}),d&&(0!==e.locations.length||0!==g.length)&&Object(X.jsx)("ul",{id:"search-options",children:g.map((function(n,e){return Object(X.jsxs)("li",{onClick:function(){return F("".concat(n.city,", ").concat(n.country))},children:[n.city,", ",n.country]},e)}))})]})},In=function(){return Object(X.jsxs)(X.Fragment,{children:[Object(X.jsx)(Z,{}),Object(X.jsxs)(Tn,{style:{backgroundImage:"url(".concat(nn,")")},children:[Object(X.jsx)("h1",{children:"Welcome!"}),Object(X.jsx)("h3",{children:"Select your city to view the weather forecast."}),Object(X.jsx)(Dn,{})]})]})},zn=function(){return Object(X.jsxs)(X.Fragment,{children:[Object(X.jsx)(Z,{}),Object(X.jsx)(V.b,{to:"/",replace:!0,children:"Page not found"})]})},Un=Object(K.a)(B||(B=Object(J.a)(["\n    ","\n    ","\n\n    body {\n        min-width: 360px;\n        display: flex;\n        min-height: 100vh;\n        flex-direction: column;\n\n        main {\n            height: calc(100vh - 100px);\n            padding: 0;\n            flex: 1;\n\n            h1, h2, h3, h4, h5, h6, p {\n                color: white;\n                cursor: default;\n            }\n\n            h1 {\n                font-size: 35rem;\n            }\n\n            h2 {\n                font-size: 25rem;\n            }\n\n            h3 {\n                font-size: 20rem;\n            }\n\n            svg {\n                color: white;\n            }\n        }\n    }\n"])),"\n    /****** Elad Shechter's RESET *******/\n    /*** box sizing border-box for all elements ***/\n    *,\n    *::before,\n    *::after{box-sizing:border-box;}\n    a{text-decoration:none; color:inherit; cursor:pointer;}\n    button{background-color:transparent; color:inherit; border-width:0; padding:0; cursor:pointer;}\n    figure{margin:0;}\n    input::-moz-focus-inner {border:0; padding:0; margin:0;}\n    ul, ol, dd{margin:0; padding:0; list-style:none;}\n    h1, h2, h3, h4, h5, h6{margin:0; font-size:inherit; font-weight:inherit;}\n    p{margin:0;}\n    cite {font-style:normal;}\n    fieldset{border-width:0; padding:0; margin:0;}\n","\n   html { \n      font-size: 1px; /*for using REM units*/\n   }\n   body {\n      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;\n      font-size: 16rem;\n      font-weight: 400;\n      line-height: 1.3;\n      color: #222;\n   }\n");i.a.render(Object(X.jsx)(c.a.StrictMode,{children:Object(X.jsxs)(s.a,{store:I,children:[Object(X.jsx)(V.a,{basename:"react-weather-app",children:Object(X.jsxs)(G.c,{children:[Object(X.jsx)(G.a,{path:"/",exact:!0,component:In}),Object(X.jsx)(G.a,{path:"/current-location",exact:!0,component:Sn}),Object(X.jsx)(G.a,{path:"/favourites",exact:!0,component:_n}),Object(X.jsx)(G.a,{path:"/:city/:country",component:Cn}),Object(X.jsx)(G.a,{component:zn})]})}),Object(X.jsx)(Un,{})]})}),document.getElementById("root")),u.b.add(l.j,l.e,l.c,l.h,l.d,l.b,l.i,l.a,l.g,l.k,l.f),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[58,1,2]]]);
//# sourceMappingURL=main.083520f4.chunk.js.map