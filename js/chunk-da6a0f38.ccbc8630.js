(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-da6a0f38"],{"0595":function(t,e,a){"use strict";var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"quick-time-range"},[e("div",{staticClass:"quick-time-range-wrapper"},t._l(t.list,(function(a){return e("div",{key:a.type,style:{color:a.type==t.type?"#409EFF":""},on:{click:function(e){return t.selectDate(a.type)}}},[t._v(t._s(a.label))])})),0),e("div",{staticClass:"quick-time-range-space"}),e("div",{staticClass:"quick-time-range-btn",on:{click:function(e){t.isCollapse=!t.isCollapse}}},[t.isCollapse?e("i",{staticClass:"el-icon-arrow-right"}):e("i",{staticClass:"el-icon-arrow-left"})])])},r=[],o=a("5101"),n={name:"QuickTimeRange",props:{value:{type:Array,default:function(){return[]}},dateType:{type:String,default:"date"}},watch:{isCollapse:function(){this.setList()}},data:function(){return{isCollapse:!0,type:0,list:[]}},methods:{setList:function(){this.isCollapse?this.list=[{label:this.$t("reportForm.toDay"),type:0},{label:this.$t("reportForm.yesterDay"),type:1},{label:this.$t("reportForm.recent3Days"),type:3}]:this.list=[{label:this.$t("reportForm.recent7Days"),type:7},{label:this.$t("reportForm.recent10Days"),type:10},{label:this.$t("reportForm.recent30Days"),type:30}]},selectDate:function(t){var e="datetimerange"==this.dateType,a=[],i=new Date,r=new Date;switch(e&&(i=new Date(o["a"].format(new Date,"yyyy-MM-dd")+" 00:00:00"),r=new Date(o["a"].format(new Date,"yyyy-MM-dd")+" 23:59:59")),t){case 0:a=[new Date(o["a"].format(i,"yyyy-MM-dd")+" 00:00:00"),new Date(o["a"].format(r,"yyyy-MM-dd")+" 23:59:59")];break;case 1:i.setTime(i.getTime()-864e5),a=[i,r];break;case 3:i.setTime(i.getTime()-2592e5),a=[i,r];break;case 7:i.setTime(i.getTime()-6048e5),a=[i,r];break;case 10:i.setTime(i.getTime()-864e6),a=[i,r];break;case 30:i.setTime(i.getTime()-2592e6),a=[i,r];break}this.type=t,this.$emit("input",a)}},mounted:function(){var t=this;this.$nextTick((function(){t.setList()}))}},l=n,s=(a("c51d"),a("2877")),c=Object(s["a"])(l,i,r,!1,null,null,null);e["a"]=c.exports},"271ae":function(t,e,a){},"2ddc":function(t,e,a){"use strict";var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"multi-choice",style:t.warpStyle},[e("div",{staticClass:"multi-choice-input"},["daterange"==t.dateType?e("div",[e("el-date-picker",{attrs:{type:t.dateType,"picker-options":t.pickerOptions,"range-separator":"-",align:"center","unlink-panels":"",clearable:!1,"start-placeholder":t.$t("device.driverinitialdate"),"end-placeholder":t.$t("device.drivereffectivedate")},on:{change:t.onChange},model:{value:t.dateRange,callback:function(e){t.dateRange=e},expression:"dateRange"}})],1):t._e(),"date"==t.dateType?e("div",[e("el-date-picker",{attrs:{type:"date","picker-options":t.datePickerOptions},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}})],1):t._e(),"datetimerange"==t.dateType?e("div",{staticClass:"datetimerange"},[e("el-date-picker",{attrs:{type:t.dateType,"range-separator":"-","picker-options":t.pickerOptionsTime,align:"center","unlink-panels":"",clearable:!1,"start-placeholder":t.$t("device.driverinitialdate"),"end-placeholder":t.$t("device.drivereffectivedate"),"default-time":["00:00:00","23:59:59"]},on:{change:t.onChange},model:{value:t.dateRange,callback:function(e){t.dateRange=e},expression:"dateRange"}})],1):t._e(),"month"==t.dateType?e("div",[e("el-date-picker",{attrs:{type:"month"},model:{value:t.month,callback:function(e){t.month=e},expression:"month"}})],1):t._e()])])},r=[],o=(a("99af"),a("5101")),n=a("5867"),l={name:"SelectDate",props:{value:{type:Array|Date,default:function(){return[]}},dateType:{type:String,default:"daterange"},label:{type:String,default:function(){return this.$t("common.selectTime")}}},computed:{isDaterange:function(){return"daterange"==this.dateType},warpStyle:function(){var t=200;switch(this.dateType){case"date":t=120;break;case"daterange":t=230;break;case"datetimerange":t=310;break}return{width:"".concat(t,"px")}}},mixins:[n["a"]],data:function(){var t=864e5;return{dateRange:[],date:new Date,month:new Date,pickerOptions:{shortcuts:[{text:this.$t("reportForm.toDay"),onClick:function(t){var e=new Date;t.$emit("pick",[e,e])}},{text:this.$t("reportForm.yesterDay"),onClick:function(e){var a=new Date;a.setTime(a.getTime()-t),e.$emit("pick",[a,a])}},{text:this.$t("missing.theWeek"),onClick:function(e){var a=new Date,i=new Date,r=a.getDay();a.setTime(a.getTime()-t*(r-1)),i.setTime(a.getTime()+6*t),e.$emit("pick",[a,i])}},{text:this.$t("missing.lastWeek"),onClick:function(e){var a=new Date,i=new Date,r=a.getDay(),o=a.getTime()-t*(r-1);a.setTime(o-7*t),i.setTime(o-t),e.$emit("pick",[a,i])}},{text:this.$t("missing.thisMonth"),onClick:function(t){var e=new Date,a=e.getFullYear(),i=e.getMonth()+1,r=new Date("".concat(a,"-").concat(i,"-01")),o=new Date("".concat(a,"-").concat(i,"-01 00:00:00"));o.setMonth(o.getMonth()+1),o=new Date(o.getTime()-1e3),t.$emit("pick",[r,o])}},{text:this.$t("missing.lastMonth"),onClick:function(t){var e=new Date;e.setMonth(e.getMonth()-1);var a=e.getFullYear(),i=e.getMonth()+1,r=new Date(new Date(a,i,1)-1).getDate(),o=new Date("".concat(a,"-").concat(i,"-01")),n=new Date("".concat(a,"-").concat(i,"-").concat(r));t.$emit("pick",[o,n])}}]},pickerOptionsTime:{shortcuts:[{text:this.$t("reportForm.toDay"),onClick:function(t){var e=new Date(o["a"].format(new Date,"yyyy-MM-dd")+" 00:00:00"),a=new Date(o["a"].format(new Date,"yyyy-MM-dd")+" 23:59:59");t.$emit("pick",[e,a])}},{text:this.$t("reportForm.yesterDay"),onClick:function(e){var a=new Date;a.setTime(a.getTime()-t),e.$emit("pick",[new Date(o["a"].format(a,"yyyy-MM-dd")+" 00:00:00"),new Date(o["a"].format(a,"yyyy-MM-dd")+" 23:59:59")])}},{text:this.$t("missing.theWeek"),onClick:function(e){var a=new Date,i=new Date,r=a.getDay();a.setTime(a.getTime()-t*(r-1)),i.setTime(a.getTime()+6*t),e.$emit("pick",[new Date(o["a"].format(a,"yyyy-MM-dd")+" 00:00:00"),new Date(o["a"].format(i,"yyyy-MM-dd")+" 23:59:59")])}},{text:this.$t("missing.lastWeek"),onClick:function(e){var a=new Date,i=new Date,r=a.getDay(),n=a.getTime()-t*(r-1);a.setTime(n-7*t),i.setTime(n-t),e.$emit("pick",[new Date(o["a"].format(a,"yyyy-MM-dd")+" 00:00:00"),new Date(o["a"].format(i,"yyyy-MM-dd")+" 23:59:59")])}},{text:this.$t("missing.thisMonth"),onClick:function(t){var e=new Date,a=e.getFullYear(),i=e.getMonth()+1,r=new Date("".concat(a,"-").concat(i,"-01")),n=new Date("".concat(a,"-").concat(i,"-01 00:00:00"));n.setMonth(n.getMonth()+1),n=new Date(n.getTime()-1e3),t.$emit("pick",[new Date(o["a"].format(r,"yyyy-MM-dd")+" 00:00:00"),new Date(o["a"].format(n,"yyyy-MM-dd")+" 23:59:59")])}},{text:this.$t("missing.lastMonth"),onClick:function(t){var e=new Date;e.setMonth(e.getMonth()-1);var a=e.getFullYear(),i=e.getMonth()+1,r=new Date(new Date(a,i,1)-1).getDate(),n=new Date("".concat(a,"-").concat(i,"-01")),l=new Date("".concat(a,"-").concat(i,"-").concat(r));t.$emit("pick",[new Date(o["a"].format(n,"yyyy-MM-dd")+" 00:00:00"),new Date(o["a"].format(l,"yyyy-MM-dd")+" 23:59:59")])}}]}}},watch:{dateRange:function(t){null==t?this.$emit("input",[]):this.$emit("input",t)},value:function(t){this.dateRange=t},date:function(t){this.$emit("input",t)},month:function(t){this.$emit("input",t)}},methods:{onChange:function(t){this.$emit("input",t)}},mounted:function(){"date"==this.dateType?this.date=this.value:"month"==this.dateType?this.month=this.value:this.dateRange=this.value}},s=l,c=(a("e716"),a("2877")),d=Object(c["a"])(s,i,r,!1,null,"5dbb8594",null);e["a"]=d.exports},"57c9":function(t,e,a){"use strict";var i=a("0595");e["a"]=i["a"]},"5fdd":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"report-form full"},[e("div",{staticClass:"report-form-inner"},[e("div",{staticClass:"report-form-inner-header",staticStyle:{height:"35px"}},[e("div",{staticClass:"f_left"},[e("MultiChoiceVehicle",{on:{onSelectDevice:t.onSelectDevice}})],1),e("div",{staticClass:"f_left"},[e("SelectDate",{model:{value:t.dateRange,callback:function(e){t.dateRange=e},expression:"dateRange"}})],1),e("div",{staticClass:"f_left"},[e("QuickTimeRange",{model:{value:t.dateRange,callback:function(e){t.dateRange=e},expression:"dateRange"}})],1),e("div",{staticClass:"f_left"},[e("el-button",{attrs:{loading:t.loading,type:"primary"},on:{click:t.handleQuery}},[t._v(t._s(t.$t("common.query")))])],1),e("div",{staticClass:"f_left"},[e("el-popover",{attrs:{placement:"bottom",width:"236",trigger:"click"}},[e("div",[e("el-button",{staticStyle:{width:"100px"},attrs:{slot:"reference",type:"primary",loading:t.exportLoading1,plain:""},on:{click:t.exportData},slot:"reference"},[t._v(t._s(t.$t("common.summary")))]),e("el-button",{staticStyle:{width:"100px"},attrs:{slot:"reference",type:"primary",loading:t.exportLoading2,plain:""},on:{click:t.exportDetailData},slot:"reference"},[t._v(t._s(t.$t("reportForm.detailed")))])],1),e("el-button",{attrs:{slot:"reference",type:"primary"},slot:"reference"},[t._v(t._s(t.$t("common.export")))])],1)],1)]),e("div",{staticClass:"report-form-inner-content",staticStyle:{top:"40px"}},[e("vxe-table",{ref:"xTable",staticClass:"mytable-scrollbar",attrs:{border:"","expand-config":{accordion:!1},"sort-config":t.sortConfig,"menu-config":t.tableMenu,data:t.totalList,height:"auto",size:"mini"},on:{"menu-click":t.handleClickTableMenu,"cell-dblclick":t.cellDblclick}},[e("vxe-table-column",{attrs:{type:"seq",width:"60"}}),e("vxe-table-column",{attrs:{type:"expand",width:"36"},scopedSlots:t._u([{key:"content",fn:function(a){var i=a.row;a.rowIndex;return[[e("div",{staticStyle:{"padding-left":"60px"}},[e("vxe-table",{staticClass:"mytable-scrollbar",attrs:{"menu-config":t.tableMenu,border:"","auto-resize":"",resizable:"","show-overflow":"","highlight-hover-row":"",height:i.tableHeight,data:i.records,size:"mini"},on:{"menu-click":t.handleClickTableMenu}},[e("vxe-table-column",{attrs:{type:"seq",width:"60",title:t.$t("reportForm.index")}}),e("vxe-table-column",{attrs:{field:"statisticsday",width:"120",title:t.$t("reportForm.date"),sortable:""}}),e("vxe-table-column",{attrs:{field:"totaldistance",align:"right",formatter:t.numberToFixed2,width:"120",title:t.$t("reportForm.mileage"),sortable:""}}),e("vxe-table-column",{attrs:{field:"avgspeed",width:"100",align:"right",formatter:t.numberToFixed2,title:t.$t("reportForm.avgSpeed"),sortable:""}}),e("vxe-table-column",{attrs:{field:"totalaccStr",align:"right",width:"130",formatter:t.numberToFixed2,title:t.$t("reportForm.workingDuration")+"(H)",sortable:""}}),e("vxe-table-column",{attrs:{field:"totaloil",align:"right",width:"120",formatter:t.numberToFixed2,title:t.$t("reportForm.oilConsumption"),sortable:""}}),e("vxe-table-column",{attrs:{field:"currenttotaloil",align:"right",formatter:t.numberToFixed2,sortable:"",width:"100",title:t.$t("reportForm.currentTotaloil")}}),e("vxe-table-column",{attrs:{field:"totalidle",align:"right",formatter:t.numberToFixed2,width:"130",title:t.$t("home.idleDuration"),sortable:""}}),e("vxe-table-column",{attrs:{field:"addoil",align:"right",formatter:t.numberToFixed2,width:"120",title:t.$t("reportForm.fuelVolume"),sortable:""}}),e("vxe-table-column",{attrs:{field:"leakoil",align:"right",formatter:t.numberToFixed2,width:"130",title:t.$t("reportForm.oilLeakage"),sortable:""}}),e("vxe-table-column",{attrs:{field:"idleoil",align:"right",formatter:t.numberToFixed2,width:"120",title:t.$t("reportForm.idleOil"),sortable:""}}),e("vxe-table-column",{attrs:{field:"oilperhour",align:"right",formatter:t.numberToFixed2,width:"120",title:t.$t("reportForm.fuelConsumptionHour"),sortable:""}}),e("vxe-table-column",{attrs:{field:"runoilper100km",align:"right",formatter:t.numberToFixed2,width:"130",title:t.$t("reportForm.runoilper100km"),sortable:""}}),e("vxe-table-column",{attrs:{field:"oilper100km",align:"right",formatter:t.numberToFixed2,width:"130",title:t.$t("reportForm.fuelConsumption100km"),sortable:""}}),e("vxe-table-column",{attrs:{field:"totalnotrunningad",align:"right",formatter:t.numberToFixed2,width:"155",title:t.$t("reportForm.totalnotrunningad"),sortable:""}}),e("vxe-table-column",{attrs:{field:"addnotrunningad",align:"right",formatter:t.numberToFixed2,width:"155",title:t.$t("reportForm.addnotrunningad"),sortable:""}}),e("vxe-table-column",{attrs:{field:"leaknotrunningad",align:"right",formatter:t.numberToFixed2,width:"155",title:t.$t("reportForm.leaknotrunningad"),sortable:""}})],1)],1)]]}}])}),e("vxe-table-column",{attrs:{field:"devicename",title:t.$t("alarm.devName"),sortable:""}}),e("vxe-table-column",{attrs:{field:"deviceid",title:t.$t("alarm.devNum"),sortable:""}}),e("vxe-table-column",{attrs:{field:"creater",title:t.$t("reportForm.creater"),sortable:""},scopedSlots:t._u([{key:"default",fn:function(a){return[e("el-popover",{attrs:{placement:"bottom",trigger:"click"}},[e("div",{staticClass:"parents-wrapper"},t._l(t.parentsList,(function(a){return e("div",{key:a.username},[t._v(t._s(a.username)+"("+t._s(a.usertypeStr)+")")])})),0),e("el-button",{staticStyle:{color:"#000000"},attrs:{slot:"reference",type:"text"},on:{click:function(e){return t.queryParents(a.row.creater)}},slot:"reference"},[t._v(t._s(a.row.creater))])],1)]}}])}),e("vxe-table-column",{attrs:{field:"groupname",title:t.$t("reportForm.groupName"),sortable:""}}),e("vxe-table-column",{attrs:{field:"avgrunoilper100km",align:"right",formatter:t.numberToFixed2,sortable:"",width:"150",title:t.$t("reportForm.avgrunoilper100km")+"(L)"}}),e("vxe-table-column",{attrs:{field:"avgoilper100km",align:"right",formatter:t.numberToFixed2,sortable:"",width:"150",title:t.$t("reportForm.avgoilper100km")+"(L)"}}),e("vxe-table-column",{attrs:{field:"totalaccStr",align:"right",formatter:t.numberToFixed2,title:t.$t("reportForm.workingDuration")+"(H)",sortable:""}}),e("vxe-table-column",{attrs:{field:"totaloil",align:"right",formatter:t.numberToFixed2,title:t.$t("reportForm.oilConsumption"),sortable:""}}),e("vxe-table-column",{attrs:{field:"totalidle",align:"right",formatter:t.numberToFixed2,title:t.$t("home.idleDuration"),sortable:""}}),e("vxe-table-column",{attrs:{field:"addoil",align:"right",formatter:t.numberToFixed2,title:t.$t("reportForm.fuelVolume"),sortable:""}}),e("vxe-table-column",{attrs:{field:"leakoil",align:"right",formatter:t.numberToFixed2,title:t.$t("reportForm.oilLeakage"),sortable:""}}),e("vxe-table-column",{attrs:{field:"idleoil",align:"right",formatter:t.numberToFixed2,title:t.$t("reportForm.idleOil"),sortable:""}})],1)],1)])])},r=[],o=a("5530"),n=(a("14d9"),a("4e82"),a("a9e3"),a("b680"),a("d3b7"),a("159b"),a("2f62")),l=a("e561"),s=a("d462"),c=a("57c9"),d=a("1c31"),u=a("5101"),p=a("6e52"),m=a("a05b"),h=a("0c87"),g=a("c276"),f={name:"dayTravelOil",data:function(){return{loading:!1,exportLoading1:!1,exportLoading2:!1,dateRange:[new Date,new Date],totalList:[],sortConfig:{sortMethod:function(t){var e=t.data,a=t.sortList,i=a[0],r=i.property,o=i.order,n=[];return n="totalaccStr"==r?"desc"===o?e.sort((function(t,e){return e.totalacc-t.totalacc})):"asc"===o?e.sort((function(t,e){return t.totalacc-e.totalacc})):e.sort():"durationidleStr"==r?"desc"===o?e.sort((function(t,e){return e.durationidle-t.durationidle})):"asc"===o?e.sort((function(t,e){return t.durationidle-e.durationidle})):e.sort():"parkTimeStr"==r?"desc"===o?e.sort((function(t,e){return e.parktime-t.parktime})):"asc"===o?e.sort((function(t,e){return t.parktime-e.parktime})):e.sort():"totalParkTime"==r?"desc"===o?e.sort((function(t,e){return e.gTotalParkTime-t.gTotalParkTime})):"asc"===o?e.sort((function(t,e){return t.gTotalParkTime-e.gTotalParkTime})):e.sort():"gTotalDurationIdle"==r?"desc"===o?e.sort((function(t,e){return e.gtotaldurationidle-t.gtotaldurationidle})):"asc"===o?e.sort((function(t,e){return t.gtotaldurationidle-e.gtotaldurationidle})):e.sort():"desc"===o?e.sort((function(t,e){var a=e[r]+"";return a.localeCompare(t[r])})):"asc"===o?e.sort((function(t,e){var a=t[r]+"";return a.localeCompare(e[r])})):e.sort(),n}}}},mixins:[m["a"],h["a"]],watch:{},components:{MultiChoiceVehicle:l["a"],SelectDate:s["a"],QuickTimeRange:c["a"]},computed:Object(o["a"])({},Object(n["b"])(["singleDeviceid"])),methods:Object(o["a"])(Object(o["a"])({},Object(n["c"])(["setSingleDeviceid"])),{},{numberToFixed2:g["nb"],cellDblclick:function(t){var e=t.row,a=this.$refs.xTable.isExpandByRow(e);this.$refs.xTable.setRowExpand(e,!a)},onSelectDevice:function(t){this.deviceids=t},handleQuery:function(){var t=this,e=this.deviceids,a=this.dateRange;if(e.length){var i=u["a"].format(a[0],"yyyy-MM-dd"),r=u["a"].format(a[1],"yyyy-MM-dd"),o={startday:i,endday:r,offset:u["a"].getOffset(),devices:e};this.loading=!0,Object(d["X"])(o).then((function(e){var a=e.records;t.startdayAndEndday=i==r?i:i+" - "+r,t.loading=!1;var o=[];a&&a.forEach((function(t){var e=t.deviceid,a=p["a"].deviceInfos[e].devicename,i=p["a"].deviceInfos[e].creater,r=p["a"].deviceInfos[e].groupname;t.devicename=a,t.creater=i,t.groupname=r,t.totalacc=0,t.totaloil=0,t.totalidle=0,t.addoil=0,t.leakoil=0,t.idleoil=0,t.records.forEach((function(o){o.deviceid=e,o.devicename=a,o.creater=i,o.groupname=r;var n=o.totalacc/1e3/3600;o.idleoil=o.idleoil/100,o.runoilper100km=o.runoilper100km,o.totaldistance=o.totaldistance/1e3,o.totalaccStr=n,o.totaloil=o.totaloil/100,o.addoil=o.addoil/100,o.leakoil=o.leakoil/100,o.totalnotrunningad=o.totalnotrunningad/100,o.addnotrunningad=o.addnotrunningad/100,o.leaknotrunningad=o.leaknotrunningad/100,o.oilperhour=o.oilperhour,o.currenttotaloil=o.endoil/100;var l=o.totalidle/1e3/3600;o.totalidle=l,o.avgspeed=o.avgspeed.toFixed(2),0==o.totaldistance||0==o.totalacc?o.averagespeed=0:o.averagespeed=o.totaldistance/n,t.totalacc+=Number(n),t.totaloil+=Number(o.totaloil),t.totalidle+=Number(o.totalidle),t.addoil+=Number(o.addoil),t.leakoil+=Number(o.leakoil),t.idleoil+=Number(o.idleoil)})),t.totalacc=t.totalacc,t.totaloil=t.totaloil,t.totalidle=t.totalidle,t.addoil=t.addoil,t.leakoil=t.leakoil,t.idleoil=t.idleoil,t.avgrunoilper100km=t.avgrunoilper100km,t.avgoilper100km=t.avgoilper100km,0==t.records.length?t.tableHeight=72:t.tableHeight=36*t.records.length+36,t.tableHeight+=10,t.totalaccStr=t.totalacc,o.push(t)})),t.totalList=o}))}},exportData:function(){if(this.totalList.length){var t=[[this.$t("reportForm.index"),this.$t("alarm.devName"),this.$t("alarm.devNum"),this.$t("reportForm.creater"),this.$t("reportForm.groupName"),this.$t("reportForm.avgrunoilper100km")+"(L)",this.$t("reportForm.avgoilper100km")+"(L)",this.$t("reportForm.workingDuration")+"(H)",this.$t("reportForm.oilConsumption"),this.$t("reportForm.idleDuration"),this.$t("reportForm.fuelVolume"),this.$t("reportForm.oilLeakage"),this.$t("reportForm.idleOil")]],e=this.$refs.xTable.getTableData().visibleData;e.forEach((function(e,a){var i=[];i.push(a+1),i.push(e.devicename),i.push(e.deviceid),i.push(e.creater),i.push(e.groupname),i.push(Object(g["nb"])(e.avgrunoilper100km)),i.push(Object(g["nb"])(e.avgoilper100km)),i.push(Object(g["nb"])(e.totalaccStr)),i.push(Object(g["nb"])(e.totaloil)),i.push(Object(g["nb"])(e.totalidle)),i.push(Object(g["nb"])(e.addoil)),i.push(Object(g["nb"])(e.leakoil)),i.push(Object(g["nb"])(e.idleoil)),t.push(i)}));var a={title:this.$t("reportForm.dayTravelOil")+" "+this.startdayAndEndday,data:t};this.exportLoading1=!0,new ExcelCls(a).exportExcel(this)}},exportDetailData:function(){if(this.totalList.length){var t=[[this.$t("reportForm.index"),this.$t("reportForm.date"),this.$t("alarm.devName"),this.$t("alarm.devNum"),this.$t("reportForm.mileage"),this.$t("reportForm.avgSpeed"),this.$t("reportForm.workingDuration"),this.$t("reportForm.oilConsumption"),this.$t("reportForm.currentTotaloil"),this.$t("reportForm.idleDuration"),this.$t("reportForm.fuelVolume"),this.$t("reportForm.oilLeakage"),this.$t("reportForm.idleOil"),this.$t("reportForm.fuelConsumptionHour"),this.$t("reportForm.runoilper100km"),this.$t("reportForm.fuelConsumption100km"),this.$t("reportForm.totalnotrunningad"),this.$t("reportForm.addnotrunningad"),this.$t("reportForm.leaknotrunningad")]],e=this.$refs.xTable.getTableData().visibleData;e.forEach((function(e){if(e.records.forEach((function(e,a){var i=[];i.push(a+1),i.push(e.statisticsday),i.push(e.devicename),i.push(e.deviceid),i.push(Object(g["nb"])(e.totaldistance)),i.push(Object(g["nb"])(e.avgspeed)),i.push(Object(g["nb"])(e.totalaccStr)),i.push(Object(g["nb"])(e.totaloil)),i.push(Object(g["nb"])(e.currenttotaloil)),i.push(Object(g["nb"])(e.totalidle)),i.push(Object(g["nb"])(e.addoil)),i.push(Object(g["nb"])(e.leakoil)),i.push(Object(g["nb"])(e.idleoil)),i.push(Object(g["nb"])(e.oilperhour)),i.push(Object(g["nb"])(e.runoilper100km)),i.push(Object(g["nb"])(e.oilper100km)),i.push(Object(g["nb"])(e.totalnotrunningad)),i.push(Object(g["nb"])(e.addnotrunningad)),i.push(Object(g["nb"])(e.leaknotrunningad)),t.push(i)})),0==e.records.length){var a=[];a.push("1"),a.push(e.devicename),a.push(e.deviceid),a.push(e.creater),a.push(e.groupname),a.push("0"),a.push("0"),a.push("0"),a.push("0"),a.push("0"),a.push("0"),a.push("0"),a.push("0"),a.push("0"),a.push("0"),a.push("0"),a.push("0"),a.push("0"),a.push("0"),t.push(a)}else{a=[];a.push(""),a.push(""),a.push(""),a.push(""),a.push(""),a.push(""),a.push(Object(g["nb"])(e.totalaccStr)),a.push(Object(g["nb"])(e.totaloil)),a.push(""),a.push(Object(g["nb"])(e.totalidle)),a.push(Object(g["nb"])(e.addoil)),a.push(Object(g["nb"])(e.leakoil)),a.push(Object(g["nb"])(e.idleoil)),a.push(""),a.push(""),a.push(""),a.push(""),a.push(""),a.push(""),t.push(a)}a=[];a.push(""),a.push(""),a.push(""),a.push(""),a.push(""),a.push(""),a.push(""),a.push(""),a.push(""),a.push(""),a.push(""),a.push(""),a.push(""),a.push(""),a.push(""),a.push(""),a.push(""),a.push(""),a.push(""),t.push(a)}));var a={title:this.$t("reportForm.dayTravelOil")+" "+this.startdayAndEndday,data:t};this.exportLoading2=!0,new ExcelCls(a).exportExcel(this)}}}),mounted:function(){this.deviceids=[]}},b=f,v=(a("cc56"),a("2877")),y=Object(v["a"])(b,i,r,!1,null,null,null),k=y.exports;e["default"]=k},c51d:function(t,e,a){"use strict";a("ecfc")},cc56:function(t,e,a){"use strict";a("d9ed")},d462:function(t,e,a){"use strict";var i=a("2ddc");e["a"]=i["a"]},d9ed:function(t,e,a){},e561:function(t,e,a){"use strict";var i=a("ea22");e["a"]=i["a"]},e716:function(t,e,a){"use strict";a("271ae")},ecfc:function(t,e,a){}}]);