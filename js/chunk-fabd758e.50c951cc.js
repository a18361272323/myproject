(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fabd758e"],{"0595":function(e,t,a){"use strict";var i=function(){var e=this,t=e._self._c;return t("div",{staticClass:"quick-time-range"},[t("div",{staticClass:"quick-time-range-wrapper"},e._l(e.list,(function(a){return t("div",{key:a.type,style:{color:a.type==e.type?"#409EFF":""},on:{click:function(t){return e.selectDate(a.type)}}},[e._v(e._s(a.label))])})),0),t("div",{staticClass:"quick-time-range-space"}),t("div",{staticClass:"quick-time-range-btn",on:{click:function(t){e.isCollapse=!e.isCollapse}}},[e.isCollapse?t("i",{staticClass:"el-icon-arrow-right"}):t("i",{staticClass:"el-icon-arrow-left"})])])},r=[],n=a("5101"),s={name:"QuickTimeRange",props:{value:{type:Array,default:function(){return[]}},dateType:{type:String,default:"date"}},watch:{isCollapse:function(){this.setList()}},data:function(){return{isCollapse:!0,type:0,list:[]}},methods:{setList:function(){this.isCollapse?this.list=[{label:this.$t("reportForm.toDay"),type:0},{label:this.$t("reportForm.yesterDay"),type:1},{label:this.$t("reportForm.recent3Days"),type:3}]:this.list=[{label:this.$t("reportForm.recent7Days"),type:7},{label:this.$t("reportForm.recent10Days"),type:10},{label:this.$t("reportForm.recent30Days"),type:30}]},selectDate:function(e){var t="datetimerange"==this.dateType,a=[],i=new Date,r=new Date;switch(t&&(i=new Date(n["a"].format(new Date,"yyyy-MM-dd")+" 00:00:00"),r=new Date(n["a"].format(new Date,"yyyy-MM-dd")+" 23:59:59")),e){case 0:a=[new Date(n["a"].format(i,"yyyy-MM-dd")+" 00:00:00"),new Date(n["a"].format(r,"yyyy-MM-dd")+" 23:59:59")];break;case 1:i.setTime(i.getTime()-864e5),a=[i,r];break;case 3:i.setTime(i.getTime()-2592e5),a=[i,r];break;case 7:i.setTime(i.getTime()-6048e5),a=[i,r];break;case 10:i.setTime(i.getTime()-864e6),a=[i,r];break;case 30:i.setTime(i.getTime()-2592e6),a=[i,r];break}this.type=e,this.$emit("input",a)}},mounted:function(){var e=this;this.$nextTick((function(){e.setList()}))}},o=s,l=(a("c51d"),a("2877")),c=Object(l["a"])(o,i,r,!1,null,null,null);t["a"]=c.exports},"26c6":function(e,t,a){"use strict";var i=function(){var e=this,t=e._self._c;return t("div",{staticClass:"multi-choice single-choice-vehicle",style:{width:e.width}},[e.showLabel?t("div",{staticClass:"multi-choice-label"},[e._v(" "+e._s(e.$t("common.selectDevice"))+" ")]):e._e(),t("div",{staticClass:"multi-choice-input"},[t("ZtreeDeviceDropdown",{attrs:{placeholder:e.placeholder,disableShare:e.disableShare,isQueryInitData:e.isQueryInitData},model:{value:e.deviceid,callback:function(t){e.deviceid=t},expression:"deviceid"}})],1)])},r=[],n=a("5530"),s=a("2f62"),o=a("2df7"),l={props:{value:{type:String,default:""},width:{type:String,default:"230px"},showLabel:{type:Boolean,default:!1},disableShare:{type:Boolean,default:!1},placeholder:{type:String,default:""}},name:"SingleChoiceVehicle",data:function(){return{deviceid:""}},watch:{value:function(e){e&&(this.deviceid=e)},deviceid:function(e){this.$emit("input",e)}},computed:Object(n["a"])({},Object(s["b"])(["isQueryInitData"])),components:{ZtreeDeviceDropdown:o["a"]},methods:{},mounted:function(){this.value&&(this.deviceid=this.value)}},c=l,d=(a("facb"),a("2877")),u=Object(d["a"])(c,i,r,!1,null,null,null);t["a"]=u.exports},"271ae":function(e,t,a){},"2ddc":function(e,t,a){"use strict";var i=function(){var e=this,t=e._self._c;return t("div",{staticClass:"multi-choice",style:e.warpStyle},[t("div",{staticClass:"multi-choice-input"},["daterange"==e.dateType?t("div",[t("el-date-picker",{attrs:{type:e.dateType,"picker-options":e.pickerOptions,"range-separator":"-",align:"center","unlink-panels":"",clearable:!1,"start-placeholder":e.$t("device.driverinitialdate"),"end-placeholder":e.$t("device.drivereffectivedate")},on:{change:e.onChange},model:{value:e.dateRange,callback:function(t){e.dateRange=t},expression:"dateRange"}})],1):e._e(),"date"==e.dateType?t("div",[t("el-date-picker",{attrs:{type:"date","picker-options":e.datePickerOptions},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}})],1):e._e(),"datetimerange"==e.dateType?t("div",{staticClass:"datetimerange"},[t("el-date-picker",{attrs:{type:e.dateType,"range-separator":"-","picker-options":e.pickerOptionsTime,align:"center","unlink-panels":"",clearable:!1,"start-placeholder":e.$t("device.driverinitialdate"),"end-placeholder":e.$t("device.drivereffectivedate"),"default-time":["00:00:00","23:59:59"]},on:{change:e.onChange},model:{value:e.dateRange,callback:function(t){e.dateRange=t},expression:"dateRange"}})],1):e._e(),"month"==e.dateType?t("div",[t("el-date-picker",{attrs:{type:"month"},model:{value:e.month,callback:function(t){e.month=t},expression:"month"}})],1):e._e()])])},r=[],n=(a("99af"),a("5101")),s=a("5867"),o={name:"SelectDate",props:{value:{type:Array|Date,default:function(){return[]}},dateType:{type:String,default:"daterange"},label:{type:String,default:function(){return this.$t("common.selectTime")}}},computed:{isDaterange:function(){return"daterange"==this.dateType},warpStyle:function(){var e=200;switch(this.dateType){case"date":e=120;break;case"daterange":e=230;break;case"datetimerange":e=310;break}return{width:"".concat(e,"px")}}},mixins:[s["a"]],data:function(){var e=864e5;return{dateRange:[],date:new Date,month:new Date,pickerOptions:{shortcuts:[{text:this.$t("reportForm.toDay"),onClick:function(e){var t=new Date;e.$emit("pick",[t,t])}},{text:this.$t("reportForm.yesterDay"),onClick:function(t){var a=new Date;a.setTime(a.getTime()-e),t.$emit("pick",[a,a])}},{text:this.$t("missing.theWeek"),onClick:function(t){var a=new Date,i=new Date,r=a.getDay();a.setTime(a.getTime()-e*(r-1)),i.setTime(a.getTime()+6*e),t.$emit("pick",[a,i])}},{text:this.$t("missing.lastWeek"),onClick:function(t){var a=new Date,i=new Date,r=a.getDay(),n=a.getTime()-e*(r-1);a.setTime(n-7*e),i.setTime(n-e),t.$emit("pick",[a,i])}},{text:this.$t("missing.thisMonth"),onClick:function(e){var t=new Date,a=t.getFullYear(),i=t.getMonth()+1,r=new Date("".concat(a,"-").concat(i,"-01")),n=new Date("".concat(a,"-").concat(i,"-01 00:00:00"));n.setMonth(n.getMonth()+1),n=new Date(n.getTime()-1e3),e.$emit("pick",[r,n])}},{text:this.$t("missing.lastMonth"),onClick:function(e){var t=new Date;t.setMonth(t.getMonth()-1);var a=t.getFullYear(),i=t.getMonth()+1,r=new Date(new Date(a,i,1)-1).getDate(),n=new Date("".concat(a,"-").concat(i,"-01")),s=new Date("".concat(a,"-").concat(i,"-").concat(r));e.$emit("pick",[n,s])}}]},pickerOptionsTime:{shortcuts:[{text:this.$t("reportForm.toDay"),onClick:function(e){var t=new Date(n["a"].format(new Date,"yyyy-MM-dd")+" 00:00:00"),a=new Date(n["a"].format(new Date,"yyyy-MM-dd")+" 23:59:59");e.$emit("pick",[t,a])}},{text:this.$t("reportForm.yesterDay"),onClick:function(t){var a=new Date;a.setTime(a.getTime()-e),t.$emit("pick",[new Date(n["a"].format(a,"yyyy-MM-dd")+" 00:00:00"),new Date(n["a"].format(a,"yyyy-MM-dd")+" 23:59:59")])}},{text:this.$t("missing.theWeek"),onClick:function(t){var a=new Date,i=new Date,r=a.getDay();a.setTime(a.getTime()-e*(r-1)),i.setTime(a.getTime()+6*e),t.$emit("pick",[new Date(n["a"].format(a,"yyyy-MM-dd")+" 00:00:00"),new Date(n["a"].format(i,"yyyy-MM-dd")+" 23:59:59")])}},{text:this.$t("missing.lastWeek"),onClick:function(t){var a=new Date,i=new Date,r=a.getDay(),s=a.getTime()-e*(r-1);a.setTime(s-7*e),i.setTime(s-e),t.$emit("pick",[new Date(n["a"].format(a,"yyyy-MM-dd")+" 00:00:00"),new Date(n["a"].format(i,"yyyy-MM-dd")+" 23:59:59")])}},{text:this.$t("missing.thisMonth"),onClick:function(e){var t=new Date,a=t.getFullYear(),i=t.getMonth()+1,r=new Date("".concat(a,"-").concat(i,"-01")),s=new Date("".concat(a,"-").concat(i,"-01 00:00:00"));s.setMonth(s.getMonth()+1),s=new Date(s.getTime()-1e3),e.$emit("pick",[new Date(n["a"].format(r,"yyyy-MM-dd")+" 00:00:00"),new Date(n["a"].format(s,"yyyy-MM-dd")+" 23:59:59")])}},{text:this.$t("missing.lastMonth"),onClick:function(e){var t=new Date;t.setMonth(t.getMonth()-1);var a=t.getFullYear(),i=t.getMonth()+1,r=new Date(new Date(a,i,1)-1).getDate(),s=new Date("".concat(a,"-").concat(i,"-01")),o=new Date("".concat(a,"-").concat(i,"-").concat(r));e.$emit("pick",[new Date(n["a"].format(s,"yyyy-MM-dd")+" 00:00:00"),new Date(n["a"].format(o,"yyyy-MM-dd")+" 23:59:59")])}}]}}},watch:{dateRange:function(e){null==e?this.$emit("input",[]):this.$emit("input",e)},value:function(e){this.dateRange=e},date:function(e){this.$emit("input",e)},month:function(e){this.$emit("input",e)}},methods:{onChange:function(e){this.$emit("input",e)}},mounted:function(){"date"==this.dateType?this.date=this.value:"month"==this.dateType?this.month=this.value:this.dateRange=this.value}},l=o,c=(a("e716"),a("2877")),d=Object(c["a"])(l,i,r,!1,null,"5dbb8594",null);t["a"]=d.exports},"57c9":function(e,t,a){"use strict";var i=a("0595");t["a"]=i["a"]},"80f4":function(e,t,a){"use strict";var i=a("32eb");t["a"]=i["a"]},9550:function(e,t,a){"use strict";a.r(t);var i=a("ade3"),r=function(){var e=this,t=e._self._c;return t("div",{staticClass:"report-form full"},[t("div",{staticClass:"report-form-inner"},[t("div",{staticClass:"report-form-inner-header",staticStyle:{height:"35px"}},[t("div",{staticClass:"f_left"},[t("MultiChoiceVehicle",{on:{onSelectDevice:e.onSelectDevice}})],1),t("div",{staticClass:"f_left",staticStyle:{width:"170px"}},[t("LabelWrap",{attrs:{label:e.$t("reportForm.parkingDuration")}},[t("el-select",{model:{value:e.interval,callback:function(t){e.interval=t},expression:"interval"}},e._l(e.optionList,(function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)],1),t("div",{staticClass:"f_left"},[t("SelectDate",{attrs:{dateType:"datetimerange"},model:{value:e.dateRange,callback:function(t){e.dateRange=t},expression:"dateRange"}})],1),t("div",{staticClass:"f_left"},[t("QuickTimeRange",{attrs:{dateType:"datetimerange"},model:{value:e.dateRange,callback:function(t){e.dateRange=t},expression:"dateRange"}})],1),t("div",{staticClass:"f_left"},[t("el-button",{attrs:{loading:e.loading,type:"primary"},on:{click:e.handleQuery}},[e._v(e._s(e.$t("common.query")))])],1),t("div",{staticClass:"f_left"},[t("el-button",{attrs:{type:"primary",loading:e.exportLoading1},on:{click:e.exportData}},[e._v(e._s(e.$t("common.export")))])],1)]),t("div",{staticClass:"report-form-inner-content",staticStyle:{top:"40px"}},[t("vxe-table",{ref:"xTable",staticClass:"mytable-scrollbar",attrs:{border:"","expand-config":{accordion:!0},"sort-config":e.sortConfig,"menu-config":e.tableMenu,data:e.totalList,height:"auto",size:"mini"},on:{"menu-click":e.handleClickTableMenu,"cell-dblclick":e.cellDblclick}},[t("vxe-table-column",{attrs:{type:"seq",width:"60"}}),t("vxe-table-column",{attrs:{type:"expand",width:"36"},scopedSlots:e._u([{key:"content",fn:function(a){var i=a.row;a.rowIndex;return[[t("div",{staticStyle:{"padding-left":"60px"}},[t("vxe-table",{attrs:{"sort-config":e.sortConfig,"menu-config":e.tableMenu,border:"",resizable:"","auto-resize":"",height:i.tableHeight,"show-overflow":"","highlight-hover-row":"","highlight-current-row":"",size:"mini",data:i.records},on:{"menu-click":e.handleClickTableMenu}},[t("vxe-table-column",{attrs:{type:"seq",width:"40"}}),t("vxe-table-column",{attrs:{field:"startDate",title:e.$t("reportForm.startTime"),width:"158",sortable:""}}),t("vxe-table-column",{attrs:{field:"endDate",title:e.$t("reportForm.endTime"),width:"158",sortable:""}}),t("vxe-table-column",{attrs:{field:"triptimeStrNoDay",align:"right",title:e.$t("reportForm.travelTime"),width:"100",sortable:""}}),t("vxe-table-column",{attrs:{field:"tripdistanceStr",formatter:e.numberToFixed2,align:"right",title:e.$t("reportForm.durationDistance"),width:"100",sortable:""}}),t("vxe-table-column",{attrs:{field:"averagespeedStr",formatter:e.numberToFixed2,align:"right",title:e.$t("reportForm.avgSpeed"),width:"100",sortable:""}}),t("vxe-table-column",{attrs:{field:"maxspeedStr",formatter:e.numberToFixed2,align:"right",title:e.$t("reportForm.maxSpeed"),width:"100",sortable:""}}),t("vxe-table-column",{attrs:{field:"saddress",title:e.$t("reportForm.startAddress"),width:"240"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("span",{staticStyle:{"text-decoration":"underline",cursor:"pointer",color:"#388CFE"},domProps:{textContent:e._s(a.row.saddress)},on:{click:function(t){return e.handleClickRow(a.row)}}})]}}],null,!0)}),t("vxe-table-column",{attrs:{field:"eaddress",title:e.$t("reportForm.endAddress"),width:"240"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("span",{staticStyle:{"text-decoration":"underline",cursor:"pointer",color:"#388CFE"},domProps:{textContent:e._s(a.row.eaddress)},on:{click:function(t){return e.handleClickRow(a.row)}}})]}}],null,!0)})],1)],1)]]}}])}),t("vxe-table-column",{attrs:{field:"devicename",title:e.$t("alarm.devName"),sortable:""}}),t("vxe-table-column",{attrs:{field:"deviceid",title:e.$t("alarm.devNum"),sortable:""}}),t("vxe-table-column",{attrs:{field:"creater",title:e.$t("reportForm.creater"),sortable:""},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-popover",{attrs:{placement:"bottom",trigger:"click"}},[t("div",{staticClass:"parents-wrapper"},e._l(e.parentsList,(function(a){return t("div",{key:a.username},[e._v(e._s(a.username)+"("+e._s(a.usertypeStr)+")")])})),0),t("el-button",{staticStyle:{color:"#000000"},attrs:{slot:"reference",type:"text"},on:{click:function(t){return e.queryParents(a.row.creater)}},slot:"reference"},[e._v(e._s(a.row.creater))])],1)]}}])}),t("vxe-table-column",{attrs:{field:"groupname",title:e.$t("reportForm.groupName"),sortable:""}}),t("vxe-table-column",{attrs:Object(i["a"])({field:"triptimeStrNoDay",align:"right",sortable:"",title:e.$t("reportForm.travelTime")},"sortable","")}),t("vxe-table-column",{attrs:Object(i["a"])({field:"totalDistance",formatter:e.numberToFixed2,align:"right",sortable:"",title:e.$t("reportForm.durationDistance")},"sortable","")}),t("vxe-table-column",{attrs:{field:"averageSpeed",formatter:e.numberToFixed2,align:"right",sortable:"",title:e.$t("reportForm.avgSpeed")}}),t("vxe-table-column",{attrs:{field:"maxSpeed",formatter:e.numberToFixed2,align:"right",sortable:"",title:e.$t("reportForm.maxSpeed")}})],1)],1),t("el-dialog",{attrs:{title:e.$t("reportForm.seeMap"),visible:e.dialogMap,width:"500",center:"","close-on-click-modal":!1},on:{"update:visible":function(t){e.dialogMap=t}}},[t("div",{staticStyle:{width:"100%",height:"400px"}},[t("ReportMap",{ref:"mapIns"})],1)])],1)])},n=[],s=(a("14d9"),a("4e82"),a("a9e3"),a("d3b7"),a("159b"),a("4795"),a("d03a")),o=a("e561"),l=a("d462"),c=a("80f4"),d=a("57c9"),u=a("1c31"),p=a("7cf8"),m=a("c276"),h=a("201d"),f=a("5101"),v=a("6e52"),g=a("a05b"),y=a("0c87"),b={name:"TravelRecords",data:function(){return{loading:!1,exportLoading1:!1,deviceid:"",tableTitle:"",totalParkTime:"",dialogMap:!1,interval:"10",optionList:[],dateRange:[new Date(f["a"].format(new Date,"yyyy-MM-dd")+" 00:00:00"),new Date(f["a"].format(new Date,"yyyy-MM-dd")+" 23:59:59")],totalList:[],detailsList:[],sortConfig:{sortMethod:function(e){var t=e.data,a=e.sortList,i=a[0],r=i.property,n=i.order,s=[];return s="maxspeedStr"==r?"desc"===n?t.sort((function(e,t){return t.maxspeed-e.maxspeed})):"asc"===n?t.sort((function(e,t){return e.maxspeed-t.maxspeed})):t.sort():"triptimeStrNoDay"==r?"desc"===n?t.sort((function(e,t){return t.triptime-e.triptime})):"asc"===n?t.sort((function(e,t){return e.triptime-t.triptime})):t.sort():"desc"===n?t.sort((function(e,t){var a=t[r]+"";return a.localeCompare(e[r])})):"asc"===n?t.sort((function(e,t){var a=e[r]+"";return a.localeCompare(t[r])})):t.sort(),s}}}},watch:{dateRange:function(){this.loading||this.handleQuery()}},mixins:[g["a"],y["a"]],components:{MultiChoiceVehicle:o["a"],SingleChoiceVehicle:s["a"],SelectDate:l["a"],ReportMap:c["a"],QuickTimeRange:d["a"],LabelWrap:h["a"]},methods:{numberToFixed2:m["nb"],cellDblclick:function(e){var t=e.row,a=this.$refs.xTable.isExpandByRow(t);this.$refs.xTable.setRowExpand(t,!a)},onSelectDevice:function(e){this.deviceids=e},exportData:function(){var e=this,t=[[this.$t("reportForm.index"),this.$t("alarm.devName"),this.$t("alarm.devNum"),this.$t("reportForm.creater"),this.$t("reportForm.groupName"),this.$t("reportForm.startTime"),this.$t("reportForm.endTime"),this.$t("reportForm.travelTime")+"(H)",this.$t("reportForm.travelTime"),this.$t("reportForm.durationDistance"),this.$t("reportForm.avgSpeed"),this.$t("reportForm.maxSpeed"),this.$t("reportForm.startAddress"),this.$t("reportForm.endAddress"),this.$t("reportForm.startLonLat"),this.$t("reportForm.endLonLat")]];if(0!=this.totalList.length){var a="",i="";this.totalList.forEach((function(r,n){a=r.devicename,i=r.deviceid,r.records.forEach((function(e,i){var n=[];n.push(++i),n.push(a),n.push(r.deviceid),n.push(r.creater),n.push(r.groupname),n.push(e.startDate),n.push(e.endDate),n.push(Object(m["nb"])(e.triptimeStr)),n.push(Object(m["Ib"])(e.triptime)),n.push(Object(m["nb"])(e.tripdistanceStr)),n.push(Object(m["nb"])(e.averagespeedStr)),n.push(Object(m["nb"])(e.maxspeedStr)),n.push(e.saddress?e.saddress:""),n.push(e.eaddress?e.eaddress:""),n.push(e.slon+","+e.slat),n.push(e.elon+","+e.elat),t.push(n),i++}));var s=[];s.push(e.$t("common.summary")),s.push(a),s.push(0==r.records.length?i:""),s.push(""),s.push(""),s.push(""),s.push(""),s.push(Object(m["nb"])(r.triptimeStr)),s.push(Object(m["Ib"])(r.triptime)),s.push(Object(m["nb"])(r.totalDistance)),s.push(Object(m["nb"])(r.averageSpeed)),s.push(Object(m["nb"])(r.maxSpeed)),s.push(""),s.push(""),s.push(""),s.push(""),t.push(s),s=[],s.push(""),s.push(""),s.push(""),s.push(""),s.push(""),s.push(""),s.push(""),s.push(""),s.push(""),s.push(""),s.push(""),s.push(""),s.push(""),s.push(""),s.push(""),s.push(""),t.push(s)}));var r="";r=1==this.totalList.length?a:e.$t("bgManage.tower",{count:this.totalList.length});var n={title:this.$t("reportForm.travelRecords")+" - "+r,data:t,dateRange:this.queryDetailDateRange};this.exportLoading1=!0,new ExcelCls(n).exportExcel(this)}},handleClickRow:function(e){var t=this,a={deviceid:e.deviceid,begintime:e.startDate,endtime:e.endDate,timezone:f["a"].getOffset()};this.dialogMap=!0,Object(p["X"])(a).then((function(e){e.status;var a=e.records;setTimeout((function(){a=a||[],t.$refs.mapIns.markersAndLineLayerToMap(a)}),300)})).catch((function(e){console.log(e)}))},handleQuery:function(){var e=this,t=this.deviceids,a=this.dateRange;if(0!=t.length)if(0!=a.length){var i=f["a"].format(a[0],"yyyy-MM-dd HH:mm:ss"),r=f["a"].format(a[1],"yyyy-MM-dd HH:mm:ss"),n={begintime:i,endtime:r,deviceids:t,interval:60*Number(this.interval),needaddress:1,timezone:f["a"].getOffset(),needfuelreport:0};this.loading=!0,this.queryDetailDateRange=null,Object(u["w"])(n).then((function(t){e.queryDetailDateRange=i+"  "+r,e.loading=!1,console.log(t);var a=[],n=t.status,s=t.tripsmulti;0==n?s.forEach((function(e){var t=e.deviceid,i=e.totaltrips,r=e.totalaveragespeed,n=e.totaldistance,s=e.totalmaxspeed,o=e.totaltriptime,l=e.addressmap,c=v["a"].deviceInfos[t];i.forEach((function(e){e.deviceid=t,e.startDate=f["a"].longToLocalDateTimeStr(e.starttime),e.endDate=f["a"].longToLocalDateTimeStr(e.endtime),e.triptimeStr=e.triptime/1e3/3600,e.triptimeStrNoDay=Object(m["Ib"])(e.triptime),e.tripdistanceStr=e.tripdistance/1e3,e.averagespeedStr=e.averagespeed/1e3,e.maxspeedStr=e.maxspeed/1e3,e.saddress=Object(m["L"])(l,e.slat,e.slon),e.eaddress=Object(m["L"])(l,e.elat,e.elon)}));var d={deviceid:t,tableHeight:0==i.length?82:36*i.length+46,devicename:c.devicename,creater:c.creater,groupname:c.groupname,averageSpeed:r/1e3,totalDistance:n/1e3,maxSpeed:s/1e3,triptimeStr:o/1e3/3600,triptimeStrNoDay:Object(m["Ib"])(o),triptime:o,records:i};a.push(d)})):e.$XModal.message({message:e.$t("tips.queryFail"),status:"error",zIndex:9999}),e.totalList=a,1==a.length&&e.$refs.xTable.setRowExpand(a[0],!0)}))}else this.$XModal.message({message:this.$t("tips.selectTime"),status:"error",zIndex:9999});else this.$XModal.message({message:this.$t("tips.selectDevice"),status:"error",zIndex:9999})}},mounted:function(){var e=this;this.deviceids=[],this.$nextTick((function(){e.optionList=[{label:"1"+e.$t("monitor.minute"),value:"1"},{label:"3"+e.$t("monitor.minute"),value:"3"},{label:"5"+e.$t("monitor.minute"),value:"5"},{label:"10"+e.$t("monitor.minute"),value:"10"},{label:"30"+e.$t("monitor.minute"),value:"30"},{label:"1"+e.$t("monitor.hour"),value:"60"},{label:"2"+e.$t("monitor.hour"),value:"120"}]}))}},D=b,w=(a("b9ad"),a("2877")),x=Object(w["a"])(D,r,n,!1,null,null,null),$=x.exports;t["default"]=$},b9ad:function(e,t,a){"use strict";a("c015")},c015:function(e,t,a){},c51d:function(e,t,a){"use strict";a("ecfc")},d03a:function(e,t,a){"use strict";var i=a("26c6");t["a"]=i["a"]},d462:function(e,t,a){"use strict";var i=a("2ddc");t["a"]=i["a"]},e561:function(e,t,a){"use strict";var i=a("ea22");t["a"]=i["a"]},e716:function(e,t,a){"use strict";a("271ae")},ec11:function(e,t,a){},ecfc:function(e,t,a){},facb:function(e,t,a){"use strict";a("ec11")}}]);