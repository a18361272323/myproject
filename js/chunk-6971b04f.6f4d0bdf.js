(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6971b04f"],{"0595":function(e,t,a){"use strict";var i=function(){var e=this,t=e._self._c;return t("div",{staticClass:"quick-time-range"},[t("div",{staticClass:"quick-time-range-wrapper"},e._l(e.list,(function(a){return t("div",{key:a.type,style:{color:a.type==e.type?"#409EFF":""},on:{click:function(t){return e.selectDate(a.type)}}},[e._v(e._s(a.label))])})),0),t("div",{staticClass:"quick-time-range-space"}),t("div",{staticClass:"quick-time-range-btn",on:{click:function(t){e.isCollapse=!e.isCollapse}}},[e.isCollapse?t("i",{staticClass:"el-icon-arrow-right"}):t("i",{staticClass:"el-icon-arrow-left"})])])},r=[],n=a("5101"),o={name:"QuickTimeRange",props:{value:{type:Array,default:function(){return[]}},dateType:{type:String,default:"date"}},watch:{isCollapse:function(){this.setList()}},data:function(){return{isCollapse:!0,type:0,list:[]}},methods:{setList:function(){this.isCollapse?this.list=[{label:this.$t("reportForm.toDay"),type:0},{label:this.$t("reportForm.yesterDay"),type:1},{label:this.$t("reportForm.recent3Days"),type:3}]:this.list=[{label:this.$t("reportForm.recent7Days"),type:7},{label:this.$t("reportForm.recent10Days"),type:10},{label:this.$t("reportForm.recent30Days"),type:30}]},selectDate:function(e){var t="datetimerange"==this.dateType,a=[],i=new Date,r=new Date;switch(t&&(i=new Date(n["a"].format(new Date,"yyyy-MM-dd")+" 00:00:00"),r=new Date(n["a"].format(new Date,"yyyy-MM-dd")+" 23:59:59")),e){case 0:a=[new Date(n["a"].format(i,"yyyy-MM-dd")+" 00:00:00"),new Date(n["a"].format(r,"yyyy-MM-dd")+" 23:59:59")];break;case 1:i.setTime(i.getTime()-864e5),a=[i,r];break;case 3:i.setTime(i.getTime()-2592e5),a=[i,r];break;case 7:i.setTime(i.getTime()-6048e5),a=[i,r];break;case 10:i.setTime(i.getTime()-864e6),a=[i,r];break;case 30:i.setTime(i.getTime()-2592e6),a=[i,r];break}this.type=e,this.$emit("input",a)}},mounted:function(){var e=this;this.$nextTick((function(){e.setList()}))}},s=o,c=(a("c51d"),a("2877")),l=Object(c["a"])(s,i,r,!1,null,null,null);t["a"]=l.exports},"271ae":function(e,t,a){},"2a46":function(e,t,a){},"2ddc":function(e,t,a){"use strict";var i=function(){var e=this,t=e._self._c;return t("div",{staticClass:"multi-choice",style:e.warpStyle},[t("div",{staticClass:"multi-choice-input"},["daterange"==e.dateType?t("div",[t("el-date-picker",{attrs:{type:e.dateType,"picker-options":e.pickerOptions,"range-separator":"-",align:"center","unlink-panels":"",clearable:!1,"start-placeholder":e.$t("device.driverinitialdate"),"end-placeholder":e.$t("device.drivereffectivedate")},on:{change:e.onChange},model:{value:e.dateRange,callback:function(t){e.dateRange=t},expression:"dateRange"}})],1):e._e(),"date"==e.dateType?t("div",[t("el-date-picker",{attrs:{type:"date","picker-options":e.datePickerOptions},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}})],1):e._e(),"datetimerange"==e.dateType?t("div",{staticClass:"datetimerange"},[t("el-date-picker",{attrs:{type:e.dateType,"range-separator":"-","picker-options":e.pickerOptionsTime,align:"center","unlink-panels":"",clearable:!1,"start-placeholder":e.$t("device.driverinitialdate"),"end-placeholder":e.$t("device.drivereffectivedate"),"default-time":["00:00:00","23:59:59"]},on:{change:e.onChange},model:{value:e.dateRange,callback:function(t){e.dateRange=t},expression:"dateRange"}})],1):e._e(),"month"==e.dateType?t("div",[t("el-date-picker",{attrs:{type:"month"},model:{value:e.month,callback:function(t){e.month=t},expression:"month"}})],1):e._e()])])},r=[],n=(a("99af"),a("5101")),o=a("5867"),s={name:"SelectDate",props:{value:{type:Array|Date,default:function(){return[]}},dateType:{type:String,default:"daterange"},label:{type:String,default:function(){return this.$t("common.selectTime")}}},computed:{isDaterange:function(){return"daterange"==this.dateType},warpStyle:function(){var e=200;switch(this.dateType){case"date":e=120;break;case"daterange":e=230;break;case"datetimerange":e=310;break}return{width:"".concat(e,"px")}}},mixins:[o["a"]],data:function(){var e=864e5;return{dateRange:[],date:new Date,month:new Date,pickerOptions:{shortcuts:[{text:this.$t("reportForm.toDay"),onClick:function(e){var t=new Date;e.$emit("pick",[t,t])}},{text:this.$t("reportForm.yesterDay"),onClick:function(t){var a=new Date;a.setTime(a.getTime()-e),t.$emit("pick",[a,a])}},{text:this.$t("missing.theWeek"),onClick:function(t){var a=new Date,i=new Date,r=a.getDay();a.setTime(a.getTime()-e*(r-1)),i.setTime(a.getTime()+6*e),t.$emit("pick",[a,i])}},{text:this.$t("missing.lastWeek"),onClick:function(t){var a=new Date,i=new Date,r=a.getDay(),n=a.getTime()-e*(r-1);a.setTime(n-7*e),i.setTime(n-e),t.$emit("pick",[a,i])}},{text:this.$t("missing.thisMonth"),onClick:function(e){var t=new Date,a=t.getFullYear(),i=t.getMonth()+1,r=new Date("".concat(a,"-").concat(i,"-01")),n=new Date("".concat(a,"-").concat(i,"-01 00:00:00"));n.setMonth(n.getMonth()+1),n=new Date(n.getTime()-1e3),e.$emit("pick",[r,n])}},{text:this.$t("missing.lastMonth"),onClick:function(e){var t=new Date;t.setMonth(t.getMonth()-1);var a=t.getFullYear(),i=t.getMonth()+1,r=new Date(new Date(a,i,1)-1).getDate(),n=new Date("".concat(a,"-").concat(i,"-01")),o=new Date("".concat(a,"-").concat(i,"-").concat(r));e.$emit("pick",[n,o])}}]},pickerOptionsTime:{shortcuts:[{text:this.$t("reportForm.toDay"),onClick:function(e){var t=new Date(n["a"].format(new Date,"yyyy-MM-dd")+" 00:00:00"),a=new Date(n["a"].format(new Date,"yyyy-MM-dd")+" 23:59:59");e.$emit("pick",[t,a])}},{text:this.$t("reportForm.yesterDay"),onClick:function(t){var a=new Date;a.setTime(a.getTime()-e),t.$emit("pick",[new Date(n["a"].format(a,"yyyy-MM-dd")+" 00:00:00"),new Date(n["a"].format(a,"yyyy-MM-dd")+" 23:59:59")])}},{text:this.$t("missing.theWeek"),onClick:function(t){var a=new Date,i=new Date,r=a.getDay();a.setTime(a.getTime()-e*(r-1)),i.setTime(a.getTime()+6*e),t.$emit("pick",[new Date(n["a"].format(a,"yyyy-MM-dd")+" 00:00:00"),new Date(n["a"].format(i,"yyyy-MM-dd")+" 23:59:59")])}},{text:this.$t("missing.lastWeek"),onClick:function(t){var a=new Date,i=new Date,r=a.getDay(),o=a.getTime()-e*(r-1);a.setTime(o-7*e),i.setTime(o-e),t.$emit("pick",[new Date(n["a"].format(a,"yyyy-MM-dd")+" 00:00:00"),new Date(n["a"].format(i,"yyyy-MM-dd")+" 23:59:59")])}},{text:this.$t("missing.thisMonth"),onClick:function(e){var t=new Date,a=t.getFullYear(),i=t.getMonth()+1,r=new Date("".concat(a,"-").concat(i,"-01")),o=new Date("".concat(a,"-").concat(i,"-01 00:00:00"));o.setMonth(o.getMonth()+1),o=new Date(o.getTime()-1e3),e.$emit("pick",[new Date(n["a"].format(r,"yyyy-MM-dd")+" 00:00:00"),new Date(n["a"].format(o,"yyyy-MM-dd")+" 23:59:59")])}},{text:this.$t("missing.lastMonth"),onClick:function(e){var t=new Date;t.setMonth(t.getMonth()-1);var a=t.getFullYear(),i=t.getMonth()+1,r=new Date(new Date(a,i,1)-1).getDate(),o=new Date("".concat(a,"-").concat(i,"-01")),s=new Date("".concat(a,"-").concat(i,"-").concat(r));e.$emit("pick",[new Date(n["a"].format(o,"yyyy-MM-dd")+" 00:00:00"),new Date(n["a"].format(s,"yyyy-MM-dd")+" 23:59:59")])}}]}}},watch:{dateRange:function(e){null==e?this.$emit("input",[]):this.$emit("input",e)},value:function(e){this.dateRange=e},date:function(e){this.$emit("input",e)},month:function(e){this.$emit("input",e)}},methods:{onChange:function(e){this.$emit("input",e)}},mounted:function(){"date"==this.dateType?this.date=this.value:"month"==this.dateType?this.month=this.value:this.dateRange=this.value}},c=s,l=(a("e716"),a("2877")),d=Object(l["a"])(c,i,r,!1,null,"5dbb8594",null);t["a"]=d.exports},"4c3c":function(e,t,a){"use strict";a("4e82");t["a"]={data:function(){return{sortConfig:{sortMethod:function(e){var t=e.data,a=e.sortList,i=a[0],r=i.property,n=i.order,o=[];return o="desc"===n?t.sort((function(e,t){var a=e[r],i=t[r];if(isNaN(a)&&!isNaN(Date.parse(a))&&isNaN(i)&&!isNaN(Date.parse(i)))return Date.parse(i)-Date.parse(a);if(a=parseFloat(a),i=parseFloat(i),isNaN(a)||isNaN(i)){var n=t[r]+"";return n.localeCompare(e[r])}return i-a})):"asc"===n?t.sort((function(e,t){var a=e[r],i=t[r];if(isNaN(a)&&!isNaN(Date.parse(a))&&isNaN(i)&&!isNaN(Date.parse(i)))return Date.parse(a)-Date.parse(i);if(a=parseFloat(e[r]),i=parseFloat(t[r]),isNaN(a)||isNaN(i)){var n=e[r]+"";return n.localeCompare(t[r])}return a-i})):t.sort(),o}}}}}},"57c9":function(e,t,a){"use strict";var i=a("0595");t["a"]=i["a"]},"7d6d":function(e,t,a){"use strict";a("2a46")},"95d5":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e._self._c;return t("div",{staticClass:"report-form full"},[t("div",{staticClass:"report-form-inner"},[t("div",{staticClass:"report-form-inner-header",staticStyle:{height:"35px"}},[t("div",{staticClass:"f_left"},[t("MultiChoiceVehicle",{on:{onSelectDevice:e.onSelectDevice}})],1),t("div",{staticClass:"f_left"},[t("SelectDate",{model:{value:e.dateRange,callback:function(t){e.dateRange=t},expression:"dateRange"}})],1),t("div",{staticClass:"f_left"},[t("QuickTimeRange",{model:{value:e.dateRange,callback:function(t){e.dateRange=t},expression:"dateRange"}})],1),t("div",{staticClass:"f_left"},[t("el-button",{attrs:{loading:e.loading,type:"primary"},on:{click:e.handleQuery}},[e._v(e._s(e.$t("common.query")))])],1),t("div",{staticClass:"f_left"},[t("el-popover",{attrs:{placement:"bottom",width:"236",trigger:"click"}},[t("div",[t("el-button",{staticStyle:{width:"100px"},attrs:{slot:"reference",type:"primary",loading:e.exportLoading1,plain:""},on:{click:e.exportAllData},slot:"reference"},[e._v(e._s(e.$t("reportForm.onlySummary")))]),t("el-button",{staticStyle:{width:"100px"},attrs:{slot:"reference",type:"primary",loading:e.exportLoading2,plain:""},on:{click:e.exportDetailData},slot:"reference"},[e._v(e._s(e.$t("reportForm.SummaryAndDetail")))])],1),t("el-button",{attrs:{slot:"reference",type:"primary"},slot:"reference"},[e._v(e._s(e.$t("common.export")))])],1)],1)]),t("div",{staticClass:"report-form-inner-content",staticStyle:{top:"39px"}},[t("vxe-table",{ref:"xTable",attrs:{"sort-config":e.sortConfig,"menu-config":e.tableMenu,border:"",resizable:"","auto-resize":"","show-overflow":"","highlight-hover-row":"",size:"mini",height:"auto",data:e.totalList},on:{"menu-click":e.handleClickTableMenu}},[t("vxe-table-column",{attrs:{type:"seq",width:"60",title:e.$t("reportForm.index")}}),t("vxe-table-column",{attrs:{type:"expand",width:"36"},scopedSlots:e._u([{key:"content",fn:function(a){var i=a.row;a.rowIndex;return[[t("div",{staticStyle:{"padding-left":"60px"}},[t("vxe-table",{attrs:{"menu-config":e.tableMenu,border:"",resizable:"","auto-resize":"",height:i.tableHeight,"show-overflow":"","highlight-hover-row":"",size:"mini",data:i.records},on:{"menu-click":e.handleClickTableMenu}},[t("vxe-table-column",{attrs:{type:"seq",width:"40"}}),t("vxe-table-column",{attrs:{field:"workingDuration",align:"right",width:"140",title:e.$t("reportForm.workingDuration"),sortable:""}}),t("vxe-table-column",{attrs:{field:"mileage",formatter:e.numberToFixed2,align:"right",width:"100",title:e.$t("reportForm.mileage"),sortable:""}}),t("vxe-table-column",{attrs:{field:"cardinsertTime",width:"156",title:e.$t("reportForm.cardinsertTime"),sortable:""}}),t("vxe-table-column",{attrs:{field:"cardPullTime",width:"156",title:e.$t("reportForm.cardPullTime"),sortable:""}}),t("vxe-table-column",{attrs:{field:"cardinsertAddress",title:e.$t("reportForm.cardinsertAddress")}}),t("vxe-table-column",{attrs:{field:"cardPullAddress",title:e.$t("reportForm.cardPullAddress")}}),t("vxe-table-column",{attrs:{field:"devicename",title:e.$t("alarm.devName"),sortable:""}}),t("vxe-table-column",{attrs:{field:"deviceid",title:e.$t("alarm.devNum"),sortable:""}})],1)],1)]]}}])}),t("vxe-table-column",{attrs:{field:"driverName",title:e.$t("reportForm.driverName"),sortable:""}}),t("vxe-table-column",{attrs:{field:"certificationcode",width:"180",title:e.$t("reportForm.certificationcode"),sortable:""}}),t("vxe-table-column",{attrs:{field:"workingDuration",align:"right",width:"140",title:e.$t("reportForm.workingDuration"),sortable:""}}),t("vxe-table-column",{attrs:{field:"mileage",formatter:e.numberToFixed2,align:"right",width:"100",title:e.$t("reportForm.mileage"),sortable:""}})],1)],1)])])},r=[],n=(a("14d9"),a("4e82"),a("d3b7"),a("159b"),a("6e52")),o=a("e561"),s=a("d462"),c=a("57c9"),l=a("5101"),d=a("c276"),u=a("1c31"),m=a("4c3c"),p=a("a05b"),h={name:"driverWorkDetails",data:function(){return{loading:!1,exportLoading2:!1,exportLoading1:!1,dateRange:[new Date,new Date],totalList:[]}},components:{MultiChoiceVehicle:o["a"],SelectDate:s["a"],QuickTimeRange:c["a"]},watch:{dateRange:function(){this.loading||this.handleQuery()}},mixins:[m["a"],p["a"]],methods:{numberToFixed2:d["ob"],onSelectDevice:function(e){this.deviceids=e},handleClickRow:function(e){var t=e.row;console.log(t)},handleQuery:function(){var e=this,t=this.deviceids,a=this.dateRange;if(0!=t.length)if(0!=a.length){var i=l["a"].format(a[0],"yyyy-MM-dd"),r=l["a"].format(a[1],"yyyy-MM-dd"),o={startday:i,endday:r,offset:l["a"].getOffset(),deviceids:t,needaddress:1};this.loading=!0,Object(u["L"])(o).then((function(t){var a=t.records,i=t.addressmap;e.loading=!1;var r=[];a&&a.forEach((function(e){var t=e.records?e.records:[],a="",o="",s=0,c=0;t.sort((function(e,t){return t.uptime-e.uptime})),t.forEach((function(e){var t=e.deviceid,r=n["a"].deviceInfos[t],u=r?r.devicename:t;a=e.drivername,o=e.certificationcode,e.cardinsertTime=e.uptime>0?l["a"].longToLocalDateTimeStr(e.uptime):"-",e.cardPullTime=e.downtime>0?l["a"].longToLocalDateTimeStr(e.downtime):"-";var m=Object(d["M"])(i,e.uplat,e.uplon);e.cardinsertAddress=m||"-";var p=Object(d["M"])(i,e.downlat,e.downlon);e.cardPullAddress=p||"-";var h=e.downtime-e.uptime,f=e.downdistance-e.updistance;e.workingDuration=Object(d["Ib"])(h,!1),e.mileage=f,f>0&&(s+=f),h>0&&(c+=h),e.devicename=u})),r.push({records:t,driverName:a,certificationcode:o,mileage:s,workingDuration:Object(d["Ib"])(c,!1),duration:c,tableHeight:0==t.length?72:36*t.length+36})})),e.totalList=r}))}else this.$XModal.message({message:this.$t("tips.selectTime"),status:"error",zIndex:9999});else this.$XModal.message({message:this.$t("tips.selectDevice"),status:"error",zIndex:9999})},exportAllData:function(){var e=this,t=this.$refs.xTable.getTableData().visibleData;if(t.length>0){var a=[[this.$t("reportForm.index"),this.$t("reportForm.driverName"),this.$t("reportForm.certificationcode"),this.$t("reportForm.workingDuration"),this.$t("reportForm.mileage")]];t.forEach((function(t,i){var r=[];r.push(i+1),r.push(t.driverName?t.driverName:""),r.push(t.certificationcode?t.certificationcode:""),r.push(t.workingDuration?t.workingDuration:"0"),r.push(t.mileage?e.numberToFixed2(t.mileage):""),a.push(r)}));var i={title:this.$t("reportForm.driverWorkDetails"),data:a,dateRange:this.queryDateRange};this.exportLoading1=!0,new ExcelCls(i).exportExcel(this)}},exportDetailData:function(){var e=this.$refs.xTable.getTableData().visibleData;if(e.length>0){var t=[[this.$t("reportForm.index"),this.$t("reportForm.driverName"),this.$t("reportForm.certificationcode"),this.$t("reportForm.workingDuration"),this.$t("reportForm.mileage"),this.$t("reportForm.cardinsertTime"),this.$t("reportForm.cardPullTime"),this.$t("reportForm.cardinsertAddress"),this.$t("reportForm.cardPullAddress"),this.$t("alarm.devName"),this.$t("alarm.devNum")]];e.forEach((function(e){e.records.forEach((function(a,i){var r=[];r.push(i+1),r.push(e.driverName?e.driverName:""),r.push(a.certificationcode?a.certificationcode:""),r.push(a.workingDuration?a.workingDuration:""),r.push(a.mileage?Object(d["ob"])(a.mileage):""),r.push(a.cardinsertTime?a.cardinsertTime:""),r.push(a.cardPullTime?a.cardPullTime:""),r.push(a.cardinsertAddress?a.cardinsertAddress:""),r.push(a.cardPullAddress?a.cardPullAddress:""),r.push(a.devicename),r.push(a.deviceid),t.push(r)}));var a=[];a.push(""),a.push(""),a.push(""),a.push(""),a.push(e.workingDuration?e.workingDuration:"0"),a.push(e.mileage?e.mileage:"0"),a.push(""),a.push(""),a.push(""),a.push(""),a.push(""),t.push(a),a=[],a.push(""),a.push(""),a.push(""),a.push(""),a.push(""),a.push(""),a.push(""),a.push(""),a.push(""),a.push(""),a.push(""),t.push(a)}));var a={title:this.$t("reportForm.driverWorkDetails"),data:t,dateRange:this.queryDateRange};this.exportLoading2=!0,new ExcelCls(a).exportExcel(this)}}},mounted:function(){this.deviceids=[]}},f=h,g=(a("7d6d"),a("2877")),y=Object(g["a"])(f,i,r,!1,null,null,null),v=y.exports;t["default"]=v},c51d:function(e,t,a){"use strict";a("ecfc")},d462:function(e,t,a){"use strict";var i=a("2ddc");t["a"]=i["a"]},e561:function(e,t,a){"use strict";var i=a("ea22");t["a"]=i["a"]},e716:function(e,t,a){"use strict";a("271ae")},ecfc:function(e,t,a){}}]);