(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7db3c792"],{"0595":function(t,e,a){"use strict";var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"quick-time-range"},[e("div",{staticClass:"quick-time-range-wrapper"},t._l(t.list,(function(a){return e("div",{key:a.type,style:{color:a.type==t.type?"#409EFF":""},on:{click:function(e){return t.selectDate(a.type)}}},[t._v(t._s(a.label))])})),0),e("div",{staticClass:"quick-time-range-space"}),e("div",{staticClass:"quick-time-range-btn",on:{click:function(e){t.isCollapse=!t.isCollapse}}},[t.isCollapse?e("i",{staticClass:"el-icon-arrow-right"}):e("i",{staticClass:"el-icon-arrow-left"})])])},r=[],n=a("5101"),s={name:"QuickTimeRange",props:{value:{type:Array,default:function(){return[]}},dateType:{type:String,default:"date"}},watch:{isCollapse:function(){this.setList()}},data:function(){return{isCollapse:!0,type:0,list:[]}},methods:{setList:function(){this.isCollapse?this.list=[{label:this.$t("reportForm.toDay"),type:0},{label:this.$t("reportForm.yesterDay"),type:1},{label:this.$t("reportForm.recent3Days"),type:3}]:this.list=[{label:this.$t("reportForm.recent7Days"),type:7},{label:this.$t("reportForm.recent10Days"),type:10},{label:this.$t("reportForm.recent30Days"),type:30}]},selectDate:function(t){var e="datetimerange"==this.dateType,a=[],i=new Date,r=new Date;switch(e&&(i=new Date(n["a"].format(new Date,"yyyy-MM-dd")+" 00:00:00"),r=new Date(n["a"].format(new Date,"yyyy-MM-dd")+" 23:59:59")),t){case 0:a=[new Date(n["a"].format(i,"yyyy-MM-dd")+" 00:00:00"),new Date(n["a"].format(r,"yyyy-MM-dd")+" 23:59:59")];break;case 1:i.setTime(i.getTime()-864e5),a=[i,r];break;case 3:i.setTime(i.getTime()-2592e5),a=[i,r];break;case 7:i.setTime(i.getTime()-6048e5),a=[i,r];break;case 10:i.setTime(i.getTime()-864e6),a=[i,r];break;case 30:i.setTime(i.getTime()-2592e6),a=[i,r];break}this.type=t,this.$emit("input",a)}},mounted:function(){var t=this;this.$nextTick((function(){t.setList()}))}},o=s,c=(a("c51d"),a("2877")),l=Object(c["a"])(o,i,r,!1,null,null,null);e["a"]=l.exports},"271ae":function(t,e,a){},"2ddc":function(t,e,a){"use strict";var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"multi-choice",style:t.warpStyle},[e("div",{staticClass:"multi-choice-input"},["daterange"==t.dateType?e("div",[e("el-date-picker",{attrs:{type:t.dateType,"picker-options":t.pickerOptions,"range-separator":"-",align:"center","unlink-panels":"",clearable:!1,"start-placeholder":t.$t("device.driverinitialdate"),"end-placeholder":t.$t("device.drivereffectivedate")},on:{change:t.onChange},model:{value:t.dateRange,callback:function(e){t.dateRange=e},expression:"dateRange"}})],1):t._e(),"date"==t.dateType?e("div",[e("el-date-picker",{attrs:{type:"date","picker-options":t.datePickerOptions},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}})],1):t._e(),"datetimerange"==t.dateType?e("div",{staticClass:"datetimerange"},[e("el-date-picker",{attrs:{type:t.dateType,"range-separator":"-","picker-options":t.pickerOptionsTime,align:"center","unlink-panels":"",clearable:!1,"start-placeholder":t.$t("device.driverinitialdate"),"end-placeholder":t.$t("device.drivereffectivedate"),"default-time":["00:00:00","23:59:59"]},on:{change:t.onChange},model:{value:t.dateRange,callback:function(e){t.dateRange=e},expression:"dateRange"}})],1):t._e(),"month"==t.dateType?e("div",[e("el-date-picker",{attrs:{type:"month"},model:{value:t.month,callback:function(e){t.month=e},expression:"month"}})],1):t._e()])])},r=[],n=(a("99af"),a("5101")),s=a("5867"),o={name:"SelectDate",props:{value:{type:Array|Date,default:function(){return[]}},dateType:{type:String,default:"daterange"},label:{type:String,default:function(){return this.$t("common.selectTime")}}},computed:{isDaterange:function(){return"daterange"==this.dateType},warpStyle:function(){var t=200;switch(this.dateType){case"date":t=120;break;case"daterange":t=230;break;case"datetimerange":t=310;break}return{width:"".concat(t,"px")}}},mixins:[s["a"]],data:function(){var t=864e5;return{dateRange:[],date:new Date,month:new Date,pickerOptions:{shortcuts:[{text:this.$t("reportForm.toDay"),onClick:function(t){var e=new Date;t.$emit("pick",[e,e])}},{text:this.$t("reportForm.yesterDay"),onClick:function(e){var a=new Date;a.setTime(a.getTime()-t),e.$emit("pick",[a,a])}},{text:this.$t("missing.theWeek"),onClick:function(e){var a=new Date,i=new Date,r=a.getDay();a.setTime(a.getTime()-t*(r-1)),i.setTime(a.getTime()+6*t),e.$emit("pick",[a,i])}},{text:this.$t("missing.lastWeek"),onClick:function(e){var a=new Date,i=new Date,r=a.getDay(),n=a.getTime()-t*(r-1);a.setTime(n-7*t),i.setTime(n-t),e.$emit("pick",[a,i])}},{text:this.$t("missing.thisMonth"),onClick:function(t){var e=new Date,a=e.getFullYear(),i=e.getMonth()+1,r=new Date("".concat(a,"-").concat(i,"-01")),n=new Date("".concat(a,"-").concat(i,"-01 00:00:00"));n.setMonth(n.getMonth()+1),n=new Date(n.getTime()-1e3),t.$emit("pick",[r,n])}},{text:this.$t("missing.lastMonth"),onClick:function(t){var e=new Date;e.setMonth(e.getMonth()-1);var a=e.getFullYear(),i=e.getMonth()+1,r=new Date(new Date(a,i,1)-1).getDate(),n=new Date("".concat(a,"-").concat(i,"-01")),s=new Date("".concat(a,"-").concat(i,"-").concat(r));t.$emit("pick",[n,s])}}]},pickerOptionsTime:{shortcuts:[{text:this.$t("reportForm.toDay"),onClick:function(t){var e=new Date(n["a"].format(new Date,"yyyy-MM-dd")+" 00:00:00"),a=new Date(n["a"].format(new Date,"yyyy-MM-dd")+" 23:59:59");t.$emit("pick",[e,a])}},{text:this.$t("reportForm.yesterDay"),onClick:function(e){var a=new Date;a.setTime(a.getTime()-t),e.$emit("pick",[new Date(n["a"].format(a,"yyyy-MM-dd")+" 00:00:00"),new Date(n["a"].format(a,"yyyy-MM-dd")+" 23:59:59")])}},{text:this.$t("missing.theWeek"),onClick:function(e){var a=new Date,i=new Date,r=a.getDay();a.setTime(a.getTime()-t*(r-1)),i.setTime(a.getTime()+6*t),e.$emit("pick",[new Date(n["a"].format(a,"yyyy-MM-dd")+" 00:00:00"),new Date(n["a"].format(i,"yyyy-MM-dd")+" 23:59:59")])}},{text:this.$t("missing.lastWeek"),onClick:function(e){var a=new Date,i=new Date,r=a.getDay(),s=a.getTime()-t*(r-1);a.setTime(s-7*t),i.setTime(s-t),e.$emit("pick",[new Date(n["a"].format(a,"yyyy-MM-dd")+" 00:00:00"),new Date(n["a"].format(i,"yyyy-MM-dd")+" 23:59:59")])}},{text:this.$t("missing.thisMonth"),onClick:function(t){var e=new Date,a=e.getFullYear(),i=e.getMonth()+1,r=new Date("".concat(a,"-").concat(i,"-01")),s=new Date("".concat(a,"-").concat(i,"-01 00:00:00"));s.setMonth(s.getMonth()+1),s=new Date(s.getTime()-1e3),t.$emit("pick",[new Date(n["a"].format(r,"yyyy-MM-dd")+" 00:00:00"),new Date(n["a"].format(s,"yyyy-MM-dd")+" 23:59:59")])}},{text:this.$t("missing.lastMonth"),onClick:function(t){var e=new Date;e.setMonth(e.getMonth()-1);var a=e.getFullYear(),i=e.getMonth()+1,r=new Date(new Date(a,i,1)-1).getDate(),s=new Date("".concat(a,"-").concat(i,"-01")),o=new Date("".concat(a,"-").concat(i,"-").concat(r));t.$emit("pick",[new Date(n["a"].format(s,"yyyy-MM-dd")+" 00:00:00"),new Date(n["a"].format(o,"yyyy-MM-dd")+" 23:59:59")])}}]}}},watch:{dateRange:function(t){null==t?this.$emit("input",[]):this.$emit("input",t)},value:function(t){this.dateRange=t},date:function(t){this.$emit("input",t)},month:function(t){this.$emit("input",t)}},methods:{onChange:function(t){this.$emit("input",t)}},mounted:function(){"date"==this.dateType?this.date=this.value:"month"==this.dateType?this.month=this.value:this.dateRange=this.value}},c=o,l=(a("e716"),a("2877")),d=Object(l["a"])(c,i,r,!1,null,"5dbb8594",null);e["a"]=d.exports},3260:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"report-form full"},[e("div",{staticClass:"report-form-inner"},[e("div",{staticClass:"report-form-inner-header",staticStyle:{height:"35px"}},[e("div",{staticClass:"f_left"},[e("MultiChoiceVehicle",{on:{onSelectDevice:t.onSelectDevice}})],1),e("div",{staticClass:"f_left"},[e("SelectDate",{attrs:{dateType:"datetimerange"},model:{value:t.dateRange,callback:function(e){t.dateRange=e},expression:"dateRange"}})],1),e("div",{staticClass:"f_left"},[e("el-button",{attrs:{loading:t.loading,type:"primary"},on:{click:t.handleQuery}},[t._v(t._s(t.$t("common.query")))])],1),e("div",{staticClass:"f_left"},[e("el-popover",{attrs:{placement:"bottom",width:"236",trigger:"click"}},[e("div",[e("el-button",{staticStyle:{width:"100px"},attrs:{slot:"reference",type:"primary",loading:t.exportLoading1,plain:""},on:{click:t.exportData},slot:"reference"},[t._v(t._s(t.$t("common.summary")))]),e("el-button",{staticStyle:{width:"100px"},attrs:{slot:"reference",type:"primary",loading:t.exportLoading2,plain:""},on:{click:t.exportDetailData},slot:"reference"},[t._v(t._s(t.$t("reportForm.detailed")))])],1),e("el-button",{attrs:{slot:"reference",type:"primary"},slot:"reference"},[t._v(t._s(t.$t("common.export")))])],1)],1)]),e("div",{staticClass:"report-form-inner-content",staticStyle:{top:"39px"}},[e("vxe-table",{ref:"xTable",staticClass:"mytable-scrollbar",attrs:{"sort-config":t.sortConfig,"menu-config":t.tableMenu,border:"",resizable:"","auto-resize":"","show-overflow":"","highlight-hover-row":"",size:"mini",height:"auto",data:t.totalList},on:{"menu-click":t.handleClickTableMenu}},[e("vxe-table-column",{attrs:{type:"seq",width:"60",title:t.$t("reportForm.index")}}),e("vxe-table-column",{attrs:{type:"expand",width:"36"},scopedSlots:t._u([{key:"content",fn:function(a){var i=a.row;a.rowIndex;return[[e("div",{staticStyle:{"padding-left":"60px"}},[e("vxe-table",{attrs:{border:"",resizable:"","auto-resize":"","menu-config":t.tableMenu,height:i.tableHeight,"show-overflow":"","highlight-hover-row":"",size:"mini",data:i.days},on:{"menu-click":t.handleClickTableMenu}},[e("vxe-table-column",{attrs:{field:"statisticsday",title:t.$t("reportForm.date"),width:"100",sortable:""}}),e("vxe-table-column",{attrs:{field:"totaldistance",align:"right",formatter:t.numberToFixed2,title:t.$t("reportForm.totalMileage"),width:"120",sortable:""}}),e("vxe-table-column",{attrs:{field:"starttimeStr",title:t.$t("reportForm.startTime"),width:"155",sortable:""}}),e("vxe-table-column",{attrs:{field:"endtimeStr",title:t.$t("reportForm.endTime"),width:"155",sortable:""}}),e("vxe-table-column",{attrs:{field:"mintotaldistance",align:"right",formatter:t.numberToFixed2,title:t.$t("reportForm.startDistance")+"(km)",sortable:""}}),e("vxe-table-column",{attrs:{field:"maxtotaldistance",align:"right",formatter:t.numberToFixed2,title:t.$t("reportForm.endDistance")+"(km)",sortable:""}})],1)],1)]]}}])}),e("vxe-table-column",{attrs:{field:"devicename",width:"140",title:t.$t("alarm.devName"),sortable:""}}),e("vxe-table-column",{attrs:{field:"deviceid",width:"140",title:t.$t("alarm.devNum"),sortable:""}}),e("vxe-table-column",{attrs:{field:"creater",title:t.$t("reportForm.creater"),sortable:""},scopedSlots:t._u([{key:"default",fn:function(a){return[e("el-popover",{attrs:{placement:"bottom",trigger:"click"}},[e("div",{staticClass:"parents-wrapper"},t._l(t.parentsList,(function(a){return e("div",{key:a.username},[t._v(t._s(a.username)+"("+t._s(a.usertypeStr)+")")])})),0),e("el-button",{staticStyle:{color:"#000000"},attrs:{slot:"reference",type:"text"},on:{click:function(e){return t.queryParents(a.row.creater)}},slot:"reference"},[t._v(t._s(a.row.creater))])],1)]}}])}),e("vxe-table-column",{attrs:{field:"groupname",title:t.$t("reportForm.groupName"),sortable:""}}),e("vxe-table-column",{attrs:{field:"totaldistance",align:"right",formatter:t.numberToFixed2,title:t.$t("reportForm.totalMileage"),sortable:""}}),e("vxe-table-column",{attrs:{field:"starttimeStr",title:t.$t("reportForm.startTime"),width:"155",sortable:""}}),e("vxe-table-column",{attrs:{field:"endtimeStr",title:t.$t("reportForm.endTime"),width:"155",sortable:""}}),e("vxe-table-column",{attrs:{field:"startdistance",align:"right",formatter:t.numberToFixed2,title:t.$t("reportForm.startDistance")+"(km)",sortable:""}}),e("vxe-table-column",{attrs:{field:"enddistance",align:"right",formatter:t.numberToFixed2,title:t.$t("reportForm.endDistance")+"(km)",sortable:""}})],1)],1)])])},r=[],n=a("5530"),s=(a("14d9"),a("a9e3"),a("b680"),a("d3b7"),a("159b"),a("e561")),o=a("d462"),c=a("57c9"),l=a("1c31"),d=a("5101"),m=a("6e52"),u=a("2f62"),p=a("4c3c"),h=a("a05b"),f=a("0c87"),y=a("c276"),g={name:"mileageSummary",data:function(){return{loading:!1,exportLoading1:!1,exportLoading2:!1,dateRange:[new Date(d["a"].format(new Date,"yyyy-MM-dd")+" 00:00:00"),new Date(d["a"].format(new Date,"yyyy-MM-dd")+" 23:59:59")],totalList:[]}},mixins:[p["a"],h["a"],f["a"]],components:{MultiChoiceVehicle:s["a"],SelectDate:o["a"],QuickTimeRange:c["a"]},watch:{dateRange:function(){this.loading||this.handleQuery()}},computed:Object(n["a"])({},Object(u["b"])(["isZh"])),methods:{numberToFixed2:y["ob"],onSelectDevice:function(t){this.deviceids=t},handleQuery:function(){var t=this,e=this.deviceids,a=this.dateRange;if(0!=e.length)if(0!=a.length){var i=d["a"].format(a[0],"yyyy-MM-dd HH:mm:ss"),r=d["a"].format(a[1],"yyyy-MM-dd HH:mm:ss"),n={deviceids:e,begintime:i,endtime:r,offset:d["a"].getOffset()};this.loading=!0,this.queryDetailDateRange=i+"  -  "+r,Object(l["T"])(n).then((function(e){var a=e.records;t.loading=!1;var i=[];a&&a.length>0&&a.forEach((function(t,e){t.index=e+1,0==t.starttime?t.starttimeStr="-":t.starttimeStr=d["a"].longToLocalDateTimeStr(t.starttime),0==t.endtime?t.endtimeStr="-":t.endtimeStr=d["a"].longToLocalDateTimeStr(t.endtime);var a=m["a"].deviceInfos[t.deviceid],r=a?a.devicename:t.deviceid;t.devicename=r,t.creater=m["a"].getShowName(a.creater),t.groupname=a?a.groupname:"",t.enddistance=t.enddistance/1e3,t.startdistance=t.startdistance/1e3,t.totaldistance=t.totaldistance/1e3,t.days.forEach((function(t){t.devicename=r,0==t.starttime?t.starttimeStr="-":t.starttimeStr=d["a"].longToLocalDateTimeStr(t.starttime),0==t.endtime?t.endtimeStr="-":t.endtimeStr=d["a"].longToLocalDateTimeStr(t.endtime),t.maxtotaldistance=t.maxtotaldistance/1e3,t.mintotaldistance=t.mintotaldistance/1e3,t.totaldistance=t.totaldistance/1e3})),t.tableHeight=t.days.length>0?36*t.days.length+36:72,i.push(t)})),t.totalList=i,1==i.length&&t.$refs.xTable.setRowExpand(i[0],!0)}))}else this.$XModal.message({message:this.$t("tips.selectTime"),status:"error",zIndex:9999});else this.$XModal.message({message:this.$t("tips.selectDevice"),status:"error",zIndex:9999})},exportData:function(){if(0!=this.totalList.length){var t=[[this.$t("reportForm.index"),this.$t("alarm.devName"),this.$t("alarm.devNum"),this.$t("reportForm.creater"),this.$t("reportForm.groupName"),this.$t("reportForm.totalMileage"),this.$t("reportForm.startTime"),this.$t("reportForm.endTime"),this.$t("reportForm.startDistance"),this.$t("reportForm.endDistance")]];this.totalList.forEach((function(e,a){var i=[];i.push(a+1),i.push(e.devicename),i.push(e.deviceid),i.push(e.creater),i.push(e.groupname),i.push(Object(y["ob"])(e.totaldistance)),i.push(e.starttimeStr),i.push(e.endtimeStr),i.push(Object(y["ob"])(e.startdistance)),i.push(Object(y["ob"])(e.enddistance)),t.push(i)}));var e={title:this.$t("reportForm.mileageSummary"),data:t,dateRange:this.queryDetailDateRange};this.exportLoading1=!0,new ExcelCls(e).exportExcel(this)}},exportDetailData:function(){if(0!=this.totalList.length){var t=[[this.$t("reportForm.index"),this.$t("alarm.devName"),this.$t("alarm.devNum"),this.$t("reportForm.creater"),this.$t("reportForm.groupName"),this.$t("reportForm.totalMileage"),this.$t("reportForm.startTime"),this.$t("reportForm.endTime"),this.$t("reportForm.startDistance"),this.$t("reportForm.endDistance")]];this.totalList.forEach((function(e){var a=e.devicename,i=e.deviceid,r=e.creater,n=e.groupname,s=e.days;if(s.length>0){var o=0;s.forEach((function(e,s){var c=[];o+=Number(e.totaldistance),c.push(s+1),c.push(a),c.push(i),c.push(r),c.push(n),c.push(Object(y["ob"])(e.totaldistance)),c.push(e.starttimeStr),c.push(e.endtimeStr),c.push(Object(y["ob"])(e.mintotaldistance)),c.push(Object(y["ob"])(e.maxtotaldistance)),t.push(c)}));var c=[];c.push(""),c.push(""),c.push(""),c.push(""),c.push(""),c.push(o.toFixed(2)),c.push(""),c.push(""),c.push(""),c.push(""),t.push(c)}}));var e={title:this.$t("missing.mileageList"),data:t,dateRange:this.queryDetailDateRange};this.exportLoading2=!0,new ExcelCls(e).exportExcel(this)}}},mounted:function(){this.deviceids=[]}},v=g,b=(a("f7221"),a("2877")),D=Object(b["a"])(v,i,r,!1,null,null,null),w=D.exports;e["default"]=w},"4c3c":function(t,e,a){"use strict";a("4e82");e["a"]={data:function(){return{sortConfig:{sortMethod:function(t){var e=t.data,a=t.sortList,i=a[0],r=i.property,n=i.order,s=[];return s="desc"===n?e.sort((function(t,e){var a=t[r],i=e[r];if(isNaN(a)&&!isNaN(Date.parse(a))&&isNaN(i)&&!isNaN(Date.parse(i)))return Date.parse(i)-Date.parse(a);if(a=parseFloat(a),i=parseFloat(i),isNaN(a)||isNaN(i)){var n=e[r]+"";return n.localeCompare(t[r])}return i-a})):"asc"===n?e.sort((function(t,e){var a=t[r],i=e[r];if(isNaN(a)&&!isNaN(Date.parse(a))&&isNaN(i)&&!isNaN(Date.parse(i)))return Date.parse(a)-Date.parse(i);if(a=parseFloat(t[r]),i=parseFloat(e[r]),isNaN(a)||isNaN(i)){var n=t[r]+"";return n.localeCompare(e[r])}return a-i})):e.sort(),s}}}}}},"57c9":function(t,e,a){"use strict";var i=a("0595");e["a"]=i["a"]},a080:function(t,e,a){},c51d:function(t,e,a){"use strict";a("ecfc")},d462:function(t,e,a){"use strict";var i=a("2ddc");e["a"]=i["a"]},e561:function(t,e,a){"use strict";var i=a("ea22");e["a"]=i["a"]},e716:function(t,e,a){"use strict";a("271ae")},ecfc:function(t,e,a){},f7221:function(t,e,a){"use strict";a("a080")}}]);