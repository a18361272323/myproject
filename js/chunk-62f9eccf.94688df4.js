(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-62f9eccf"],{"103d":function(e,t,i){"use strict";i("a9d3")},a9d3:function(e,t,i){},aa5f:function(e,t,i){"use strict";i.r(t);i("498a");var r=function(){var e=this,t=e._self._c;return t("div",{staticClass:"full price-list"},[t("div",{staticClass:"btns"},[t("div",[t("LabelWrap",{attrs:{label:e.$t("bgManage.searchType")}},[t("el-input",{attrs:{type:"text","prefix-icon":"el-icon-search",placeholder:e.$t("bgManage.pleaseEnterSearchDeviceType"),clearable:""},model:{value:e.searchText,callback:function(t){e.searchText=t},expression:"searchText"}})],1)],1),t("div",[t("el-button",{attrs:{type:"primary"},on:{click:e.handleClickSearch}},[e._v(e._s(e.$t("common.search")))])],1)]),t("div",{staticClass:"price-list-table"},[t("vxe-table",{staticClass:"mytable-scrollbar",attrs:{border:"",resizable:"","auto-resize":"","show-overflow":"","highlight-hover-row":"",size:"mini",height:"auto",data:e.priceList},on:{"cell-dblclick":e.handleClick}},[t("vxe-table-column",{attrs:{field:"typename",title:e.$t("reportForm.deviceType"),sortable:"",width:"120"}}),t("vxe-table-column",{attrs:{field:"typecode",title:e.$t("bgManage.protocolType"),sortable:"",width:"120"}}),e.userType<2?t("vxe-table-column",{attrs:{field:"supportmodels",title:e.$t("bgManage.factoryType"),width:"320",sortable:""}}):e._e(),t("vxe-table-column",{attrs:{field:"remark",title:e.$t("reportForm.remarks"),sortable:"",width:"360"}}),t("vxe-table-column",{attrs:{field:"price",title:e.$t("reportForm.oneYear"),sortable:"",width:"70"}}),t("vxe-table-column",{attrs:{field:"price3",title:e.$t("reportForm.threeYear"),sortable:"",width:"70"}}),t("vxe-table-column",{attrs:{field:"price5",title:e.$t("reportForm.fiveYear"),sortable:"",width:"70"}}),t("vxe-table-column",{attrs:{field:"price10",title:e.$t("reportForm.tenYear"),sortable:"",width:"70"}}),t("vxe-table-column",{attrs:{title:e.$t("common.functions"),width:"680"},scopedSlots:e._u([{key:"default",fn:function(i){return e._l(i.row.functionsCheck,(function(i){return t("el-checkbox",{key:i.mask,attrs:{value:!0,label:i.functionname}},[t("span",[e._v(e._s(i.functionname))])])}))}}])}),0==e.userType?t("vxe-table-column",{attrs:{title:e.$t("reportForm.action"),width:"70"},scopedSlots:e._u([{key:"default",fn:function(i){return[t("el-button",{attrs:{type:"text"},on:{click:function(t){return e.handleClick(i)}}},[e._v(e._s(e.$t("common.edit")))])]}}],null,!1,3112588434)}):e._e()],1)],1),t("el-dialog",{attrs:{title:e.$t("common.adjustPrice"),center:"",visible:e.dialogVisible,width:"240px","close-on-click-modal":!1},on:{"update:visible":function(t){e.dialogVisible=t}}},[t("div",{staticClass:"margin_b10"},[t("LabelWrap",{attrs:{label:e.$t("reportForm.oneYear")}},[t("el-input-number",{staticStyle:{width:"100%"},attrs:{min:1,max:1e3,"controls-position":"right"},model:{value:e.price,callback:function(t){e.price=e._n("string"===typeof t?t.trim():t)},expression:"price"}})],1)],1),t("div",{staticClass:"margin_b10"},[t("LabelWrap",{attrs:{label:e.$t("reportForm.threeYear")}},[t("el-input-number",{staticStyle:{width:"100%"},attrs:{min:1,max:1e3,"controls-position":"right"},model:{value:e.price3,callback:function(t){e.price3=e._n("string"===typeof t?t.trim():t)},expression:"price3"}})],1)],1),t("div",{staticClass:"margin_b10"},[t("LabelWrap",{attrs:{label:e.$t("reportForm.fiveYear")}},[t("el-input-number",{staticStyle:{width:"100%"},attrs:{min:1,max:1e3,"controls-position":"right"},model:{value:e.price5,callback:function(t){e.price5=e._n("string"===typeof t?t.trim():t)},expression:"price5"}})],1)],1),t("div",{staticClass:"margin_b10"},[t("LabelWrap",{attrs:{label:e.$t("reportForm.tenYear")}},[t("el-input-number",{staticStyle:{width:"100%"},attrs:{min:1,max:1e3,"controls-position":"right"},model:{value:e.price10,callback:function(t){e.price10=e._n("string"===typeof t?t.trim():t)},expression:"price10"}})],1)],1),t("div",{staticStyle:{"text-align":"center"}},[t("el-button",{staticStyle:{width:"100%"},attrs:{type:"primary"},on:{click:e.setQuotation}},[e._v(e._s(e.$t("common.determine")))])],1)])],1)},a=[],c=i("5530"),o=(i("c975"),i("14d9"),i("d3b7"),i("159b"),i("2f62")),s=i("201d"),n=i("b562"),l=i("e285"),p={name:"priceList",data:function(){return{searchText:"",dialogVisible:!1,functionsDesc:[],priceList:[],quotation:0,price:2,price3:99,price5:99,price10:99}},computed:Object(c["a"])({},Object(o["b"])(["isQueryInitData","userType","isZh"])),components:{LabelWrap:s["a"]},watch:{isQueryInitData:function(e){var t=this;e&&Object(n["U"])().then((function(e){var i=e.records;t.functionsDesc=i||[],t.queryQuotation()}))}},methods:{handleClickSearch:function(){var e=this.searchText.trim(),t=[];this.cacehList.forEach((function(i){var r=i.typecode?i.typecode:"",a=i.typename?i.typename:"",c=i.supportmodels?String(i.supportmodels):"",o=i.remark?i.remark:"",s=i.remarken?i.remarken:"";e=e.toLocaleLowerCase(),r=r.toLocaleLowerCase(),a=a.toLocaleLowerCase(),c=c.toLocaleLowerCase(),o=o.toLocaleLowerCase(),s=s.toLocaleLowerCase(),-1==r.indexOf(e)&&-1==a.indexOf(e)&&-1==c.indexOf(e)&&-1==o.indexOf(e)&&-1==s.indexOf(e)||t.push(i)})),this.priceList=t},setQuotation:function(){var e=this,t=this.row,i={devicetypeid:t.devicetypeid,price:this.price,price3:this.price3,price5:this.price5,price10:this.price10};Object(l["oc"])(i).then((function(r){var a=r.status,c=r.cause;0==a?(t.price=i.price,t.price3=i.price3,t.price5=i.price5,t.price10=i.price10,e.dialogVisible=!1,e.$XModal.message({message:e.$t("tips.editSucc"),status:"success",zIndex:9999})):e.$XModal.message({message:e.$t("tips.editFail")+c,status:"error",zIndex:9999})}))},handleClick:function(e){var t=e.row;this.row=t,this.price=t.price,this.price3=t.price3,this.price5=t.price5,this.price10=t.price10,this.dialogVisible=!0},queryQuotation:function(){var e=this,t=this.isZh;Object(l["Eb"])().then((function(i){var r=i.records;if(r){var a=[];r.forEach((function(i){i.functionsCheck=e.getFunctionsLong(i.functionslong),0==t&&(i.remark=i.remarken),99999!=i.price&&a.push(i)})),e.priceList=a;var o=[];a.forEach((function(e){o.push(Object(c["a"])({},e))})),e.cacehList=o}}))},getFunctionsLong:function(e){for(var t=this.isZh,i=[],r=this.functionsDesc,a=0;a<r.length;++a){var c=r[a],o=c.mask;(o&e)==o&&(0==t&&(c.functionname=c.functionnameen),i.push(c))}return i}},mounted:function(){var e=this;this.cacehList=[],this.isQueryInitData&&Object(n["U"])().then((function(t){var i=t.records;e.functionsDesc=i||[],e.queryQuotation()}))}},u=p,d=(i("103d"),i("2877")),h=Object(d["a"])(u,r,a,!1,null,null,null),m=h.exports;t["default"]=m}}]);