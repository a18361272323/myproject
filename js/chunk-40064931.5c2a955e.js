(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-40064931"],{"0595":function(t,e,a){"use strict";var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"quick-time-range"},[e("div",{staticClass:"quick-time-range-wrapper"},t._l(t.list,(function(a){return e("div",{key:a.type,style:{color:a.type==t.type?"#409EFF":""},on:{click:function(e){return t.selectDate(a.type)}}},[t._v(t._s(a.label))])})),0),e("div",{staticClass:"quick-time-range-space"}),e("div",{staticClass:"quick-time-range-btn",on:{click:function(e){t.isCollapse=!t.isCollapse}}},[t.isCollapse?e("i",{staticClass:"el-icon-arrow-right"}):e("i",{staticClass:"el-icon-arrow-left"})])])},r=[],o=a("5101"),n={name:"QuickTimeRange",props:{value:{type:Array,default:function(){return[]}},dateType:{type:String,default:"date"}},watch:{isCollapse:function(){this.setList()}},data:function(){return{isCollapse:!0,type:0,list:[]}},methods:{setList:function(){this.isCollapse?this.list=[{label:this.$t("reportForm.toDay"),type:0},{label:this.$t("reportForm.yesterDay"),type:1},{label:this.$t("reportForm.recent3Days"),type:3}]:this.list=[{label:this.$t("reportForm.recent7Days"),type:7},{label:this.$t("reportForm.recent10Days"),type:10},{label:this.$t("reportForm.recent30Days"),type:30}]},selectDate:function(t){var e="datetimerange"==this.dateType,a=[],i=new Date,r=new Date;switch(e&&(i=new Date(o["a"].format(new Date,"yyyy-MM-dd")+" 00:00:00"),r=new Date(o["a"].format(new Date,"yyyy-MM-dd")+" 23:59:59")),t){case 0:a=[new Date(o["a"].format(i,"yyyy-MM-dd")+" 00:00:00"),new Date(o["a"].format(r,"yyyy-MM-dd")+" 23:59:59")];break;case 1:i.setTime(i.getTime()-864e5),a=[i,r];break;case 3:i.setTime(i.getTime()-2592e5),a=[i,r];break;case 7:i.setTime(i.getTime()-6048e5),a=[i,r];break;case 10:i.setTime(i.getTime()-864e6),a=[i,r];break;case 30:i.setTime(i.getTime()-2592e6),a=[i,r];break}this.type=t,this.$emit("input",a)}},mounted:function(){var t=this;this.$nextTick((function(){t.setList()}))}},s=n,l=(a("c51d"),a("2877")),c=Object(l["a"])(s,i,r,!1,null,null,null);e["a"]=c.exports},"1f0f":function(t,e,a){"use strict";a("2576")},2576:function(t,e,a){},"271ae":function(t,e,a){},"2ddc":function(t,e,a){"use strict";var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"multi-choice",style:t.warpStyle},[e("div",{staticClass:"multi-choice-input"},["daterange"==t.dateType?e("div",[e("el-date-picker",{attrs:{type:t.dateType,"picker-options":t.pickerOptions,"range-separator":"-",align:"center","unlink-panels":"",clearable:!1,"start-placeholder":t.$t("device.driverinitialdate"),"end-placeholder":t.$t("device.drivereffectivedate")},on:{change:t.onChange},model:{value:t.dateRange,callback:function(e){t.dateRange=e},expression:"dateRange"}})],1):t._e(),"date"==t.dateType?e("div",[e("el-date-picker",{attrs:{type:"date","picker-options":t.datePickerOptions},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}})],1):t._e(),"datetimerange"==t.dateType?e("div",{staticClass:"datetimerange"},[e("el-date-picker",{attrs:{type:t.dateType,"range-separator":"-","picker-options":t.pickerOptionsTime,align:"center","unlink-panels":"",clearable:!1,"start-placeholder":t.$t("device.driverinitialdate"),"end-placeholder":t.$t("device.drivereffectivedate"),"default-time":["00:00:00","23:59:59"]},on:{change:t.onChange},model:{value:t.dateRange,callback:function(e){t.dateRange=e},expression:"dateRange"}})],1):t._e(),"month"==t.dateType?e("div",[e("el-date-picker",{attrs:{type:"month"},model:{value:t.month,callback:function(e){t.month=e},expression:"month"}})],1):t._e()])])},r=[],o=(a("99af"),a("5101")),n=a("5867"),s={name:"SelectDate",props:{value:{type:Array|Date,default:function(){return[]}},dateType:{type:String,default:"daterange"},label:{type:String,default:function(){return this.$t("common.selectTime")}}},computed:{isDaterange:function(){return"daterange"==this.dateType},warpStyle:function(){var t=200;switch(this.dateType){case"date":t=120;break;case"daterange":t=230;break;case"datetimerange":t=310;break}return{width:"".concat(t,"px")}}},mixins:[n["a"]],data:function(){var t=864e5;return{dateRange:[],date:new Date,month:new Date,pickerOptions:{shortcuts:[{text:this.$t("reportForm.toDay"),onClick:function(t){var e=new Date;t.$emit("pick",[e,e])}},{text:this.$t("reportForm.yesterDay"),onClick:function(e){var a=new Date;a.setTime(a.getTime()-t),e.$emit("pick",[a,a])}},{text:this.$t("missing.theWeek"),onClick:function(e){var a=new Date,i=new Date,r=a.getDay();a.setTime(a.getTime()-t*(r-1)),i.setTime(a.getTime()+6*t),e.$emit("pick",[a,i])}},{text:this.$t("missing.lastWeek"),onClick:function(e){var a=new Date,i=new Date,r=a.getDay(),o=a.getTime()-t*(r-1);a.setTime(o-7*t),i.setTime(o-t),e.$emit("pick",[a,i])}},{text:this.$t("missing.thisMonth"),onClick:function(t){var e=new Date,a=e.getFullYear(),i=e.getMonth()+1,r=new Date("".concat(a,"-").concat(i,"-01")),o=new Date("".concat(a,"-").concat(i,"-01 00:00:00"));o.setMonth(o.getMonth()+1),o=new Date(o.getTime()-1e3),t.$emit("pick",[r,o])}},{text:this.$t("missing.lastMonth"),onClick:function(t){var e=new Date;e.setMonth(e.getMonth()-1);var a=e.getFullYear(),i=e.getMonth()+1,r=new Date(new Date(a,i,1)-1).getDate(),o=new Date("".concat(a,"-").concat(i,"-01")),n=new Date("".concat(a,"-").concat(i,"-").concat(r));t.$emit("pick",[o,n])}}]},pickerOptionsTime:{shortcuts:[{text:this.$t("reportForm.toDay"),onClick:function(t){var e=new Date(o["a"].format(new Date,"yyyy-MM-dd")+" 00:00:00"),a=new Date(o["a"].format(new Date,"yyyy-MM-dd")+" 23:59:59");t.$emit("pick",[e,a])}},{text:this.$t("reportForm.yesterDay"),onClick:function(e){var a=new Date;a.setTime(a.getTime()-t),e.$emit("pick",[new Date(o["a"].format(a,"yyyy-MM-dd")+" 00:00:00"),new Date(o["a"].format(a,"yyyy-MM-dd")+" 23:59:59")])}},{text:this.$t("missing.theWeek"),onClick:function(e){var a=new Date,i=new Date,r=a.getDay();a.setTime(a.getTime()-t*(r-1)),i.setTime(a.getTime()+6*t),e.$emit("pick",[new Date(o["a"].format(a,"yyyy-MM-dd")+" 00:00:00"),new Date(o["a"].format(i,"yyyy-MM-dd")+" 23:59:59")])}},{text:this.$t("missing.lastWeek"),onClick:function(e){var a=new Date,i=new Date,r=a.getDay(),n=a.getTime()-t*(r-1);a.setTime(n-7*t),i.setTime(n-t),e.$emit("pick",[new Date(o["a"].format(a,"yyyy-MM-dd")+" 00:00:00"),new Date(o["a"].format(i,"yyyy-MM-dd")+" 23:59:59")])}},{text:this.$t("missing.thisMonth"),onClick:function(t){var e=new Date,a=e.getFullYear(),i=e.getMonth()+1,r=new Date("".concat(a,"-").concat(i,"-01")),n=new Date("".concat(a,"-").concat(i,"-01 00:00:00"));n.setMonth(n.getMonth()+1),n=new Date(n.getTime()-1e3),t.$emit("pick",[new Date(o["a"].format(r,"yyyy-MM-dd")+" 00:00:00"),new Date(o["a"].format(n,"yyyy-MM-dd")+" 23:59:59")])}},{text:this.$t("missing.lastMonth"),onClick:function(t){var e=new Date;e.setMonth(e.getMonth()-1);var a=e.getFullYear(),i=e.getMonth()+1,r=new Date(new Date(a,i,1)-1).getDate(),n=new Date("".concat(a,"-").concat(i,"-01")),s=new Date("".concat(a,"-").concat(i,"-").concat(r));t.$emit("pick",[new Date(o["a"].format(n,"yyyy-MM-dd")+" 00:00:00"),new Date(o["a"].format(s,"yyyy-MM-dd")+" 23:59:59")])}}]}}},watch:{dateRange:function(t){null==t?this.$emit("input",[]):this.$emit("input",t)},value:function(t){this.dateRange=t},date:function(t){this.$emit("input",t)},month:function(t){this.$emit("input",t)}},methods:{onChange:function(t){this.$emit("input",t)}},mounted:function(){"date"==this.dateType?this.date=this.value:"month"==this.dateType?this.month=this.value:this.dateRange=this.value}},l=s,c=(a("e716"),a("2877")),d=Object(c["a"])(l,i,r,!1,null,"5dbb8594",null);e["a"]=d.exports},"4c3c":function(t,e,a){"use strict";a("4e82");e["a"]={data:function(){return{sortConfig:{sortMethod:function(t){var e=t.data,a=t.sortList,i=a[0],r=i.property,o=i.order,n=[];return n="desc"===o?e.sort((function(t,e){var a=t[r],i=e[r];if(isNaN(a)&&!isNaN(Date.parse(a))&&isNaN(i)&&!isNaN(Date.parse(i)))return Date.parse(i)-Date.parse(a);if(a=parseFloat(a),i=parseFloat(i),isNaN(a)||isNaN(i)){var o=e[r]+"";return o.localeCompare(t[r])}return i-a})):"asc"===o?e.sort((function(t,e){var a=t[r],i=e[r];if(isNaN(a)&&!isNaN(Date.parse(a))&&isNaN(i)&&!isNaN(Date.parse(i)))return Date.parse(a)-Date.parse(i);if(a=parseFloat(t[r]),i=parseFloat(e[r]),isNaN(a)||isNaN(i)){var o=t[r]+"";return o.localeCompare(e[r])}return a-i})):e.sort(),n}}}}}},"57c9":function(t,e,a){"use strict";var i=a("0595");e["a"]=i["a"]},"80f4":function(t,e,a){"use strict";var i=a("32eb");e["a"]=i["a"]},c51d:function(t,e,a){"use strict";a("ecfc")},d462:function(t,e,a){"use strict";var i=a("2ddc");e["a"]=i["a"]},e561:function(t,e,a){"use strict";var i=a("ea22");e["a"]=i["a"]},e585:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"report-form full"},[e("div",{staticClass:"report-form-inner"},[e("el-scrollbar",{staticStyle:{width:"100%"}},[e("div",{staticClass:"report-form-inner-header",staticStyle:{height:"45px"}},[e("div",{staticClass:"f_left"},[e("MultiChoiceVehicle",{on:{onSelectDevice:t.onSelectDevice}})],1),e("div",{staticClass:"f_left"},[e("SelectDate",{model:{value:t.dateRange,callback:function(e){t.dateRange=e},expression:"dateRange"}})],1),e("div",{staticClass:"f_left"},[e("QuickTimeRange",{model:{value:t.dateRange,callback:function(e){t.dateRange=e},expression:"dateRange"}})],1),e("div",{staticClass:"f_left",staticStyle:{width:"100px"}},[e("el-select",{staticStyle:{width:"100px"},model:{value:t.oilindex,callback:function(e){t.oilindex=e},expression:"oilindex"}},t._l(t.oilIndexList,(function(t){return e("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),e("div",{staticClass:"f_left"},[e("el-button",{attrs:{loading:t.loading,type:"primary"},on:{click:t.handleQuery}},[t._v(t._s(t.$t("common.query")))])],1),e("div",{staticClass:"f_left"},[e("el-popover",{attrs:{placement:"bottom",width:"236",trigger:"click"}},[e("div",[e("el-button",{staticStyle:{width:"100px"},attrs:{slot:"reference",type:"primary",plain:"",loading:t.exportLoading1},on:{click:t.exportData},slot:"reference"},[t._v(t._s(t.$t("common.summary")))]),e("el-button",{staticStyle:{width:"100px"},attrs:{slot:"reference",type:"primary",loading:t.exportLoading2,plain:""},on:{click:t.exportDetailData},slot:"reference"},[t._v(t._s(t.$t("reportForm.detailed")))])],1),e("el-button",{attrs:{slot:"reference",type:"primary"},slot:"reference"},[t._v(t._s(t.$t("common.export")))])],1)],1)])]),e("div",{staticStyle:{width:"100%",height:"300px"}},[e("FuelOilEcharts",{attrs:{chartList:t.chartList}})],1),e("div",{staticClass:"report-form-inner-content",staticStyle:{top:"346px"}},[e("el-tabs",{model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[e("el-tab-pane",{attrs:{label:t.$t("reportForm.addOilStatistics")+"(".concat(t.totalList.length,")"),name:"tabTotal"}}),e("el-tab-pane",{attrs:{label:"",name:"details"}})],1),e("div",{directives:[{name:"show",rawName:"v-show",value:"details"==t.activeName,expression:"activeName=='details'"}],staticStyle:{position:"absolute",left:"0px",right:"0px",top:"10px","text-align":"center"}},[e("b",{domProps:{textContent:t._s(t.tableTitle)}}),t._v(" ("+t._s(t.detailsList.length)+") "),e("span",[t._v(t._s(t.$t("reportForm.totalFuelVolume"))+":"+t._s(t.totalFuelVolume)+"L")])])],1),e("div",{staticClass:"report-form-inner-content",staticStyle:{top:"390px"}},[e("div",{style:t.statisticsStyle},[e("vxe-table",{attrs:{"sort-config":t.sortConfig,"menu-config":t.tableMenu,border:"",resizable:"","show-overflow":"","auto-resize":"","highlight-hover-row":"",size:"mini",height:"auto",data:t.totalList},on:{"menu-click":t.handleClickTableMenu}},[e("vxe-table-column",{attrs:{type:"seq",width:"60",title:t.$t("reportForm.index")}}),e("vxe-table-column",{attrs:{title:t.$t("reportForm.action"),width:"70"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(e){return t.handleClickRow(a.row)}}},[t._v(t._s(t.$t("reportForm.details")))])]}}])}),e("vxe-table-column",{attrs:{field:"devicename",title:t.$t("alarm.devName"),sortable:""}}),e("vxe-table-column",{attrs:{field:"deviceid",title:t.$t("alarm.devNum"),sortable:""}}),e("vxe-table-column",{attrs:{field:"dateStr",title:t.$t("reportForm.time"),width:"160",sortable:""}}),e("vxe-table-column",{attrs:{field:"creater",title:t.$t("reportForm.creater"),sortable:""},scopedSlots:t._u([{key:"default",fn:function(a){return[e("el-popover",{attrs:{placement:"bottom",trigger:"click"}},[e("div",{staticClass:"parents-wrapper"},t._l(t.parentsList,(function(a){return e("div",{key:a.username},[t._v(t._s(a.username)+"("+t._s(a.usertypeStr)+")")])})),0),e("el-button",{staticStyle:{color:"#000000"},attrs:{slot:"reference",type:"text"},on:{click:function(e){return t.queryParents(a.row.creater)}},slot:"reference"},[t._v(t._s(a.row.creater))])],1)]}}])}),e("vxe-table-column",{attrs:{field:"groupName",title:t.$t("reportForm.groupName"),sortable:""}}),e("vxe-table-column",{attrs:{field:"fuelVolume",formatter:t.numberToFixed2,align:"right",title:t.$t("reportForm.fuelVolume"),sortable:""}}),e("vxe-table-column",{attrs:{field:"fuelCount",title:t.$t("reportForm.count"),sortable:""}})],1)],1),e("div",{style:t.detailsStyle},[e("vxe-table",{attrs:{border:"","menu-config":t.tableMenu,resizable:"","show-overflow":"","auto-resize":"","highlight-hover-row":"",size:"mini",height:"auto",data:t.detailsList},on:{"menu-click":t.handleClickTableMenu}},[e("vxe-table-column",{attrs:{type:"seq",width:"60",title:t.$t("reportForm.index")}}),e("vxe-table-column",{attrs:{field:"oilIndexStr",title:t.$t("reportForm.oilIndex"),width:"80",sortable:""}}),e("vxe-table-column",{attrs:{field:"oil",formatter:t.numberToFixed2,align:"right",title:t.$t("reportForm.fuelVolume"),width:"100",sortable:""}}),e("vxe-table-column",{attrs:{field:"soil",formatter:t.numberToFixed2,align:"right",title:t.$t("reportForm.startOil"),width:"100",sortable:""}}),e("vxe-table-column",{attrs:{field:"eoil",formatter:t.numberToFixed2,align:"right",title:t.$t("reportForm.endOil"),width:"100",sortable:""}}),e("vxe-table-column",{attrs:{field:"begintimeStr",title:t.$t("reportForm.startTime"),width:"145",sortable:""}}),e("vxe-table-column",{attrs:{field:"endtimeStr",title:t.$t("reportForm.endTime"),width:"145",sortable:""}}),e("vxe-table-column",{attrs:{field:"address",title:t.$t("reportForm.address"),width:"260",sortable:""},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",{staticStyle:{"text-decoration":"underline",cursor:"pointer",color:"#388CFE"},domProps:{textContent:t._s(a.row.address)},on:{click:function(e){return t.seeMap(a.row)}}})]}}])}),e("vxe-table-column",{attrs:{field:"threshold",title:t.$t("reportForm.threshold"),width:"80",sortable:""}}),e("vxe-table-column",{attrs:{field:"marker",title:t.$t("reportForm.remarks"),width:"120",sortable:""}}),e("vxe-table-column",{attrs:{field:"mauneditStr",title:t.$t("reportForm.artificialEdit"),width:"120",sortable:""}}),e("vxe-table-column",{attrs:{title:t.$t("reportForm.action"),width:"100"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(e){return t.editRemark(a.row)}}},[t._v(t._s(t.$t("reportForm.editRemark")))])]}}])})],1)],1)]),e("el-dialog",{attrs:{title:t.$t("reportForm.editRemark"),visible:t.remarkDialog,"close-on-click-modal":!1,width:"360px","append-to-body":""},on:{close:function(e){t.remarkDialog=!1}}},[e("el-row",{attrs:{gutter:10}},[e("el-col",{staticStyle:{"text-align":"center","line-height":"32px"},attrs:{span:4}},[t._v(" "+t._s(t.$t("reportForm.remarks"))+" ")]),e("el-col",{attrs:{span:18}},[e("el-input",{model:{value:t.remark,callback:function(e){t.remark=e},expression:"remark"}})],1)],1),e("div",{staticStyle:{height:"10px"}}),e("el-row",{attrs:{gutter:10}},[e("el-col",{attrs:{span:18,offset:4}},[e("el-button",{staticStyle:{width:"100%"},attrs:{type:"primary"},on:{click:t.editOilRecord}},[t._v(t._s(t.$t("common.confirm")))])],1)],1)],1),e("el-dialog",{attrs:{title:t.$t("reportForm.seeMap"),visible:t.mapDialog,width:"560px","append-to-body":"","close-on-click-modal":!1},on:{close:function(e){t.mapDialog=!1}}},[e("div",{staticStyle:{width:"100%",height:"400px"}},[e("ReportMap",{ref:"mapIns"})],1)])],1)])},r=[],o=(a("99af"),a("14d9"),a("4e82"),a("a9e3"),a("b680"),a("d3b7"),a("159b"),a("4795"),a("6e52")),n=a("e561"),s=a("d462"),l=a("57c9"),c=a("80f4"),d=function(){var t=this,e=t._self._c;return e("div",{staticClass:"full"},[e("el-carousel",{attrs:{trigger:"click",autoplay:!1}},t._l(t.chartList,(function(t,a){return e("el-carousel-item",{key:a},[e("div",{staticClass:"full",attrs:{id:"fuel-oil"+a}})])})),1),e("div",{directives:[{name:"show",rawName:"v-show",value:0==t.chartList.length,expression:"chartList.length == 0"}],staticClass:"fuel-oil-mask"},[e("span",[t._v(t._s(t.$t("tips.noData")))])])],1)},u=[],m=a("5530"),p=(a("b0c0"),a("43c8")),h=a.n(p),f=a("2f62"),v={name:"FuelOilEcharts",props:{chartList:{type:Array,default:function(){return[]}}},computed:Object(m["a"])({},Object(f["b"])(["isZh"])),watch:{chartList:function(t){var e=this;setTimeout((function(){e.updateChartsOption(t)}),100)}},methods:{initChart:function(){},updateChartsOption:function(t){var e=0,a=t.length;while(e<a){var i=h.a.init(document.getElementById("fuel-oil"+e)),r=t[e];i.setOption(this.getChartsOption(r.data,r.oil),!0),e++}},getChartsOption:function(t,e){var a=this.$t("reportForm.fuelVolume");return{tooltip:{trigger:"axis",formatter:function(t,e){var i=t[0].name+"<br/>";for(var r in t)t[r].seriesName==a&&(i+=t[r].seriesName+" : "+t[r].value+"L<br/>");return i}},legend:{data:[a],y:13,x:"center"},grid:{x:100,y:40,x2:80,y2:30},xAxis:[{type:"category",axisLabel:{show:!0,interval:0,rotate:0,margin:8,textStyle:{fontSize:12}},data:t}],yAxis:[{type:"value",position:"bottom",nameLocation:"end",boundaryGap:[0,.2],axisLabel:{formatter:"{value}"}}],series:[{name:a,type:"bar",itemStyle:{normal:{label:{show:!0,textStyle:{fontSize:"12",fontFamily:"微软雅黑",fontWeight:"bold"}}}},data:e}]}}},mounted:function(){var t=this;this.$nextTick((function(){t.initChart()}))}},y=v,g=a("2877"),b=Object(g["a"])(y,d,u,!1,null,null,null),x=b.exports,k=a("5101"),w=a("1c31"),$=a("7cf8"),D=a("c276"),F=a("4c3c"),T=a("a05b"),C=a("0c87"),M={name:"fuelOil",data:function(){return{loading:!1,activeName:"tabTotal",tableTitle:"",totalFuelVolume:"",dateRange:[new Date,new Date],totalList:[],detailsList:[],chartList:[],oilindex:"0",oilIndexList:[],remark:"",remarkDialog:!1,exportLoading1:!1,exportLoading2:!1,mapDialog:!1}},watch:{dateRange:function(){this.loading||this.handleQuery()}},mixins:[F["a"],T["a"],C["a"]],components:{MultiChoiceVehicle:n["a"],SelectDate:s["a"],QuickTimeRange:l["a"],ReportMap:c["a"],FuelOilEcharts:x},computed:{statisticsStyle:function(){return{zIndex:"tabTotal"==this.activeName?999:0}},detailsStyle:function(){return{zIndex:"details"==this.activeName?999:0}}},methods:{numberToFixed2:D["nb"],onSelectDevice:function(t){this.deviceids=t},handleClickRow:function(t){t.records.length?(this.detailsList=t.records,this.tableTitle=t.devicename+"-"+t.deviceid,this.totalFuelVolume=t.fuelVolume,this.activeName="details"):this.$t("tips.noData")},seeMap:function(t){var e=this;this.mapDialog=!0;var a={deviceid:t.deviceid,begintime:t.begintimeStr,endtime:t.endtimeStr,interval:0,timezone:k["a"].getOffset()};Object($["X"])(a).then((function(t){var a=t.records;a&&setTimeout((function(){e.$refs.mapIns.markersAndLineLayerToMap(a)}),300)}))},editRemark:function(t){this.remarkDialog=!0,this.remark=t.marker,this.editRow=t},editOilRecord:function(){var t=this,e=this.editRow,a={oilrecordid:e.oilrecordid,marker:this.remark,deviceid:e.deviceid,oilindex:e.oilindex};Object(w["h"])(a).then((function(i){var r=i.status;0==r&&(e.marker=a.marker,t.remarkDialog=!1)}))},handleQuery:function(){var t=this,e=this.deviceids,a=this.dateRange;if(0!=e.length)if(0!=a.length){"details"==this.activeName&&(this.activeName="tabTotal",this.totalList=[],this.detailsList=[]);var i=k["a"].format(a[0],"yyyy-MM-dd"),r=k["a"].format(a[1],"yyyy-MM-dd"),n={startday:i,endday:r,offset:k["a"].getOffset(),devices:e,oilstate:1,oilindex:Number(this.oilindex)};this.loading=!0,this.queryDetailDateRange=n.startday+"  "+n.endday,Object(w["db"])(n).then((function(e){var a=e.addressmap,n=e.records;t.loading=!1;var s=[],l=[];if(n){var c="".concat(i," - ").concat(r);n.forEach((function(e,i){i%4==0&&l.push({data:[],oil:[]});var r=l.length-1,n=e.deviceid,s=o["a"].deviceInfos[n],d=s.devicename,u=s.groupname;e.devicename=d,e.creater=o["a"].getShowName(s.creater),e.groupName=u,e.fuelCount=e.records.length,e.fuelVolume=0,e.dateStr=c,e.records.forEach((function(i){i.deviceid=n,i.devicename=d,i.oilIndexStr=Object(D["U"])(i.oilindex),i.eoil=i.eoil/100,i.soil=i.soil/100,i.oil=Math.abs(i.eoil-i.soil),i.begintimeStr=k["a"].longToLocalDateTimeStr(i.begintime),i.endtimeStr=k["a"].longToLocalDateTimeStr(i.endtime),i.address=Object(D["L"])(a,i.slat,i.slon),i.mauneditStr=0==i.maunedit?t.$t("header.no"):t.$t("header.yes"),e.fuelVolume+=i.oil})),l[r].data.push(d),l[r].oil.push(Number(e.fuelVolume.toFixed(2)))})),n.sort((function(t,e){var a=0;return a=e.fuelVolume-t.fuelVolume,0==a&&(a=e.devicename.localeCompare(t.devicename)),a})),s=n}t.totalList=s,t.chartList=l}))}else this.$XModal.message({message:this.$t("tips.selectTime"),status:"error",zIndex:9999});else this.$XModal.message({message:this.$t("tips.selectDevice"),status:"error",zIndex:9999})},exportData:function(){var t=[[this.$t("reportForm.index"),this.$t("alarm.devName"),this.$t("alarm.devNum"),this.$t("reportForm.time"),this.$t("reportForm.creater"),this.$t("reportForm.groupName"),this.$t("reportForm.fuelVolume"),this.$t("reportForm.count")]];if(0!=this.totalList.length){this.totalList.forEach((function(e,a){var i=[];i.push(a+1),i.push(e.devicename),i.push(e.deviceid),i.push(e.dateStr),i.push(e.creater),i.push(e.groupName),i.push(Object(D["nb"])(e.fuelVolume)),i.push(e.fuelCount),t.push(i)}));var e={title:this.$t("reportForm.fuelOil")+this.$t("common.summary"),data:t,dateRange:this.queryDetailDateRange};this.exportLoading1=!0,new ExcelCls(e).exportExcel(this)}},exportDetailData:function(){var t=this,e=[[this.$t("reportForm.index"),this.$t("alarm.devName"),this.$t("alarm.devNum"),this.$t("reportForm.oilIndex"),this.$t("reportForm.fuelVolume"),this.$t("reportForm.startOil"),this.$t("reportForm.endOil"),this.$t("reportForm.startTime"),this.$t("reportForm.endTime"),this.$t("reportForm.address"),this.$t("reportForm.threshold"),this.$t("reportForm.remarks"),this.$t("reportForm.artificialEdit"),this.$t("monitor.coordinate")]];if(0!=this.totalList.length){this.totalList.forEach((function(a,i){var r=a.records.length>0;a.records.forEach((function(t,a){var i=[];i.push(a+1),i.push(t.devicename),i.push(t.deviceid),i.push(t.oilIndexStr),i.push(Object(D["nb"])(t.oil)),i.push(Object(D["nb"])(t.soil)),i.push(Object(D["nb"])(t.eoil)),i.push(t.begintimeStr),i.push(t.endtimeStr),i.push(t.address?t.address:""),i.push(t.threshold),i.push(t.marker?t.marker:""),i.push(t.mauneditStr),i.push(t.slon+","+t.slat),e.push(i)}));var o=[];o.push(r?"":1),o.push(r?"":a.devicename),o.push(r?"":a.deviceid),o.push(t.$t("reportForm.total")),o.push(a.fuelVolume),o.push(""),o.push(""),o.push(""),o.push(""),o.push(""),o.push(""),o.push(""),o.push(""),o.push(""),e.push(o),o=[],o.push(""),o.push(""),o.push(""),o.push(""),o.push(""),o.push(""),o.push(""),o.push(""),o.push(""),o.push(""),o.push(""),o.push(""),o.push(""),o.push(""),e.push(o)}));var a={title:this.$t("reportForm.fuelOil")+this.$t("reportForm.detailed"),data:e,dateRange:this.queryDetailDateRange};this.exportLoading2=!0,new ExcelCls(a).exportExcel(this)}}},mounted:function(){var t=this;this.deviceids=[],this.queryDetailDateRange=null,this.$nextTick((function(){t.oilIndexList=[{label:t.$t("reportForm.totalDriving"),value:"0"},{label:t.$t("reportForm.tank1"),value:"1"},{label:t.$t("reportForm.tank2"),value:"2"},{label:t.$t("reportForm.tank3"),value:"3"},{label:t.$t("reportForm.tank4"),value:"4"},{label:t.$t("reportForm.totalNotRun"),value:"99"}]}))}},S=M,_=(a("1f0f"),Object(g["a"])(S,i,r,!1,null,null,null)),N=_.exports;e["default"]=N},e716:function(t,e,a){"use strict";a("271ae")},ecfc:function(t,e,a){}}]);