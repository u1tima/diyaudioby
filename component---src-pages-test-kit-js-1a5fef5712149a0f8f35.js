(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"+JMC":function(t,e,a){t.exports={partList:"PartList-module--partList--3KGeD",table:"PartList-module--table---2JTv"}},"5f/D":function(t,e,a){t.exports={caption:"PartCaption-module--caption--6i8YE"}},Fidb:function(t,e,a){"use strict";a.r(e);var n=a("q1tI"),r=a.n(n),i=a("ra4U"),c=a("758n"),o=a("ibge"),l=a("+JMC"),u=a.n(l),m=(a("f3/d"),a("rDU3")),s=a.n(m),p=a("iHL6"),d=a("rQDK"),f=a("/gbb");var P=function(t){var e,a;function n(e){var a;return(a=t.call(this,e)||this).part=a.props.part,a.comp=a.part.comp,a.priceData=a.renderPriceData(),a.techData=a.renderTechData(),a.state={qnt:0,price:0,total:0},a}a=t,(e=n).prototype=Object.create(a.prototype),e.prototype.constructor=e,e.__proto__=a;var i=n.prototype;return i.renderPriceData=function(){var t=this;return this.comp.sellPrice.map((function(e,a){var n=e.qnt,i=e.unitPrice;return r.a.createElement("div",{key:a,className:s.a.priceRow},r.a.createElement("div",{className:s.a.qntItem,onClick:function(){return t.priceClick(a)}},n+"+"),r.a.createElement("div",{className:s.a.priceItem},i.toFixed(2)+" р"))}))},i.renderTechData=function(){return this.comp.techData.map((function(t,e){return r.a.createElement("div",{key:e},t.name+": "+t.value+t.units)}))},i.render=function(){var t=this;return r.a.createElement("tr",{className:s.a.row},r.a.createElement("td",{className:s.a.position},this.part.position),r.a.createElement("td",{className:s.a.info},r.a.createElement("div",{className:s.a.name},this.comp.name)),r.a.createElement("td",{className:s.a.asmQnt},this.part.asmQnt),r.a.createElement("td",{className:s.a.details},r.a.createElement(p.a,{data:this.techData})),r.a.createElement("td",{className:s.a.price},this.priceData),r.a.createElement("td",{className:s.a.control},r.a.createElement(d.a,{value:this.state.qnt,btnMinusClick:this.btnMinusClick,btnPlusClick:this.btnPlusClick,onChange:function(e){return t.handleChange(e)},onBlur:function(e){return t.handleBlur(e)}})),r.a.createElement("td",{className:s.a.total},this.state.total," р"),r.a.createElement("td",{className:s.a.cart},r.a.createElement(f.a,{onClick:this.addToCart})))},n}(n.Component),v=a("5f/D"),E=a.n(v),h=function(t){return r.a.createElement("tr",{className:E.a.row},r.a.createElement("td",{className:E.a.caption,colSpan:"8"},t.caption.name))};var q=function(t){var e,a;function n(e){var a;return(a=t.call(this,e)||this).addToCart=function(){return console.log("Add to cart")},a.project=a.props.data,a}return a=t,(e=n).prototype=Object.create(a.prototype),e.prototype.constructor=e,e.__proto__=a,n.prototype.render=function(){return r.a.createElement("div",{className:u.a.partList},r.a.createElement("table",{className:u.a.table},r.a.createElement("thead",null,r.a.createElement("tr",{className:u.a.row},r.a.createElement("th",null,"Позиция"),r.a.createElement("th",null,"Наименование"),r.a.createElement("th",null,"Кол-во"),r.a.createElement("th",null,"Инфо"),r.a.createElement("th",null,"Цена"),r.a.createElement("th",null,"Заказ"),r.a.createElement("th",null,"Сумма"),r.a.createElement("th",null,"Корзина"))),r.a.createElement("tbody",null,this.project.parts.map((function(t,e){return"part"===t.type?r.a.createElement(P,{key:e,part:t}):r.a.createElement(h,{key:e,caption:t})})))))},n}(n.Component),C={name:"PSL-3604",parts:[{type:"caption",name:"Конденсаторы SMD 0805 Yageo CC0805 (кратно 10 шт)"},{type:"part",position:"OUT: C33, C34",asmQnt:2,comp:{id:1,name:"Panasonic FC 100uF x 16V",partNumber:"EEUFC1C101",body:"",manufacture:{id:12,name:"Panasonic"},category:{id:123,name:"Электролиты"},techData:[{name:"Серия",value:"FC",units:"",factor:0},{name:"Емкость",value:100,units:"uF",factor:1e-6},{name:"Напряжение",value:16,units:"V",factor:0},{name:"Полярность",value:"Bipolar",units:"",factor:0},{name:"Диаметр",value:6.3,units:"мм",factor:0},{name:"Высота",value:12,units:"мм",factor:0},{name:"Шаг",value:2.5,units:"мм",factor:0}],storaqe:[{id:1,name:"C-23",qnt:230},{id:23,name:"B-29",qnt:12}],totalqnt:242,sellPrice:[{qnt:1,unitPrice:20},{qnt:10,unitPrice:15},{qnt:25,unitPrice:10}],buyPrice:40,priceStory:[{date:"12-03-2007",qnt:100,unitPrice:1},{date:"12-03-2007",qnt:100,unitPrice:10}],minOrder:1}},{type:"part",position:"OUT: C22...C34",asmQnt:12,comp:{id:1,name:"Panasonic FC 220uF x 16V",partNumber:"EEUFC1C101",body:"TH",manufacture:{id:12,name:"Panasonic"},category:{id:123,name:"Электролиты"},techData:[{name:"Серия",value:"FC",units:"",factor:0},{name:"Емкость",value:220,units:"uF",factor:1e-6},{name:"Напряжение",value:16,units:"V",factor:0},{name:"Полярность",value:"Bipolar",units:"",factor:0},{name:"Диаметр",value:6.3,units:"мм",factor:0},{name:"Высота",value:12,units:"мм",factor:0},{name:"Шаг",value:2.5,units:"мм",factor:0}],storaqe:[{id:1,name:"C-23",qnt:230},{id:23,name:"B-29",qnt:12}],totalqnt:242,sellPrice:[{qnt:1,unitPrice:20},{qnt:10,unitPrice:15},{qnt:25,unitPrice:10}],buyPrice:40,priceStory:[{date:"12-03-2007",qnt:100,unitPrice:1},{date:"12-03-2007",qnt:100,unitPrice:10}],minOrder:1}},{type:"caption",name:"Резисторы SMD 1206 Yageo (кратно 10 шт)"},{type:"part",position:"R22, R23",asmQnt:22,comp:{id:1,name:"Panasonic FC 100uF x 16V",partNumber:"EEUFC1C101",body:"",manufacture:{id:12,name:"Panasonic"},category:{id:123,name:"Электролиты"},techData:[{name:"Серия",value:"FC",units:"",factor:0},{name:"Емкость",value:100,units:"uF",factor:1e-6},{name:"Напряжение",value:16,units:"V",factor:0},{name:"Полярность",value:"Bipolar",units:"",factor:0},{name:"Диаметр",value:6.3,units:"мм",factor:0},{name:"Высота",value:12,units:"мм",factor:0},{name:"Шаг",value:2.5,units:"мм",factor:0}],storaqe:[{id:1,name:"C-23",qnt:230},{id:23,name:"B-29",qnt:12}],totalqnt:242,sellPrice:[{qnt:1,unitPrice:20},{qnt:10,unitPrice:15},{qnt:25,unitPrice:10}],buyPrice:40,priceStory:[{date:"12-03-2007",qnt:100,unitPrice:1},{date:"12-03-2007",qnt:100,unitPrice:10}],minOrder:1}},{type:"part",position:"R17, R18 - R20",asmQnt:3,comp:{id:1,name:"Panasonic FC 220uF x 16V",partNumber:"EEUFC1C101",body:"TH",manufacture:{id:12,name:"Panasonic"},category:{id:123,name:"Электролиты"},techData:[{name:"Серия",value:"FC",units:"",factor:0},{name:"Емкость",value:220,units:"uF",factor:1e-6},{name:"Напряжение",value:16,units:"V",factor:0},{name:"Полярность",value:"Bipolar",units:"",factor:0},{name:"Диаметр",value:6.3,units:"мм",factor:0},{name:"Высота",value:12,units:"мм",factor:0},{name:"Шаг",value:2.5,units:"мм",factor:0}],storaqe:[{id:1,name:"C-23",qnt:230},{id:23,name:"B-29",qnt:12}],totalqnt:242,sellPrice:[{qnt:1,unitPrice:20},{qnt:10,unitPrice:15},{qnt:25,unitPrice:10}],buyPrice:40,priceStory:[{date:"12-03-2007",qnt:100,unitPrice:1},{date:"12-03-2007",qnt:100,unitPrice:10}],minOrder:1}}]};e.default=function(){return r.a.createElement(i.a,null,r.a.createElement(c.a,{side:"left"}),r.a.createElement(o.a,null,r.a.createElement(q,{data:C})))}},rDU3:function(t,e,a){t.exports={row:"Part-module--row--75l2a",position:"Part-module--position--3ZoOd",info:"Part-module--info--DSsb6",asmQnt:"Part-module--asmQnt--1eKMm",details:"Part-module--details--1mThg",price:"Part-module--price--2rT8r",priceRow:"Part-module--priceRow--lhvm8",priceItem:"Part-module--priceItem--aIuIQ",qntItem:"Part-module--qntItem--2kGLJ",control:"Part-module--control--3Qf-b",total:"Part-module--total--1qRd6",cart:"Part-module--cart--PsAgY"}}}]);
//# sourceMappingURL=component---src-pages-test-kit-js-1a5fef5712149a0f8f35.js.map