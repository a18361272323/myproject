(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1feb8872"],{"04e5":function(t,e,a){"use strict";a("5211")},"1cea":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"report-form full"},[e("div",{staticClass:"report-form-inner"},[e("div",{staticClass:"report-form-inner-header",staticStyle:{height:"35px"}},[e("div",{staticClass:"f_left"},[e("MultiChoiceVehicle",{on:{onSelectDevice:t.onSelectDevice}})],1),e("div",{staticClass:"f_left"},[e("SelectDate",{model:{value:t.dateRange,callback:function(e){t.dateRange=e},expression:"dateRange"}})],1),e("div",{staticClass:"f_left"},[e("el-button",{attrs:{loading:t.loading,type:"primary"},on:{click:t.handleQuery}},[t._v(t._s(t.$t("common.query")))])],1),e("div",{staticClass:"f_left"},[e("el-button",{attrs:{type:"primary"},on:{click:t.exportData}},[t._v(t._s(t.$t("common.export")))])],1)]),e("div",{staticStyle:{width:"100%",height:"380px"}},[e("div",{staticStyle:{margin:"0px auto",width:"600px",height:"380px"}},[e("WeightEcharts",{ref:"echartsIns"})],1)]),e("el-tabs",{model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[e("el-tab-pane",{attrs:{label:t.$t("reportForm.weightSummary"),name:"tabTotal"}}),e("el-tab-pane",{attrs:{label:"载重详情",name:"details"}})],1),e("div",{staticClass:"report-form-inner-content",staticStyle:{top:"460px"}},[e("div",{style:t.statisticsStyle},[e("vxe-table",{attrs:{"sort-config":t.sortConfig,"menu-config":t.tableMenu,border:"",resizable:"","auto-resize":"","show-overflow":"","highlight-hover-row":"",size:"mini",height:"auto",data:t.totalList},on:{"menu-click":t.handleClickTableMenu}},[e("vxe-table-column",{attrs:{type:"seq",width:"60",title:t.$t("reportForm.index")}}),e("vxe-table-column",{attrs:{title:t.$t("reportForm.action"),width:"70"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(e){return t.handleClickRow(a.row)}}},[t._v(t._s(t.$t("reportForm.details")))])]}}])}),e("vxe-table-column",{attrs:{field:"devicename",title:t.$t("alarm.devName"),width:"120",sortable:""}}),e("vxe-table-column",{attrs:{field:"deviceid",title:t.$t("alarm.devNum"),width:"120",sortable:""}}),e("vxe-table-column",{attrs:{field:"emptyDurationTime",align:"right",title:t.$t("reportForm.emptyDuration"),sortable:""}}),e("vxe-table-column",{attrs:{field:"emptyDurationDist",formatter:t.numberToFixed2,align:"right",title:t.$t("reportForm.emptyMileage"),sortable:""}}),e("vxe-table-column",{attrs:{field:"halfLoadDurationTime",align:"right",title:t.$t("reportForm.halfLoadDuration"),sortable:""}}),e("vxe-table-column",{attrs:{field:"halfLoadDurationDist",formatter:t.numberToFixed2,align:"right",title:t.$t("reportForm.halfLoadMileage"),sortable:""}}),e("vxe-table-column",{attrs:{field:"overDurationTime",align:"right",title:t.$t("reportForm.overloadDuration"),sortable:""}}),e("vxe-table-column",{attrs:{field:"overDurationDist",formatter:t.numberToFixed2,align:"right",title:t.$t("reportForm.overloadMileage"),sortable:""}}),e("vxe-table-column",{attrs:{field:"fullDurationTime",align:"right",title:t.$t("reportForm.fullLoadDuration"),sortable:""}}),e("vxe-table-column",{attrs:{field:"fullDurationDist",formatter:t.numberToFixed2,align:"right",title:t.$t("reportForm.fullLoadMileage"),sortable:""}}),e("vxe-table-column",{attrs:{field:"loadingDurationTime",align:"right",title:t.$t("reportForm.loadingDuration"),sortable:""}}),e("vxe-table-column",{attrs:{field:"loadingDurationDist",formatter:t.numberToFixed2,align:"right",title:t.$t("reportForm.loadingMileage"),sortable:""}}),e("vxe-table-column",{attrs:{field:"unloadDurationTime",align:"right",title:t.$t("reportForm.unloadingDuration"),sortable:""}}),e("vxe-table-column",{attrs:{field:"unloadDurationDist",formatter:t.numberToFixed2,align:"right",title:t.$t("reportForm.unloadingMileage"),sortable:""}})],1)],1),e("div",{style:t.detailsStyle},[e("vxe-table",{attrs:{"menu-config":t.tableMenu,border:"",resizable:"","show-overflow":"","highlight-hover-row":"",size:"mini",height:"auto",data:t.detailsList},on:{"menu-click":t.handleClickTableMenu}},[e("vxe-table-column",{attrs:{field:"devicename",title:t.$t("alarm.devName"),width:"120"}}),e("vxe-table-column",{attrs:{field:"statisticsday",title:t.$t("reportForm.date"),width:"120"}}),e("vxe-table-column",{attrs:{field:"emptyDurationTime",align:"right",title:t.$t("reportForm.emptyDuration"),sortable:""}}),e("vxe-table-column",{attrs:{field:"emptyDurationDist",formatter:t.numberToFixed2,title:t.$t("reportForm.emptyMileage"),sortable:""}}),e("vxe-table-column",{attrs:{field:"halfLoadDurationTime",align:"right",title:t.$t("reportForm.halfLoadDuration"),sortable:""}}),e("vxe-table-column",{attrs:{field:"halfLoadDurationDist",formatter:t.numberToFixed2,title:t.$t("reportForm.halfLoadMileage"),sortable:""}}),e("vxe-table-column",{attrs:{field:"overDurationTime",align:"right",title:t.$t("reportForm.overloadDuration"),sortable:""}}),e("vxe-table-column",{attrs:{field:"overDurationDist",formatter:t.numberToFixed2,title:t.$t("reportForm.overloadMileage"),sortable:""}}),e("vxe-table-column",{attrs:{field:"fullDurationTime",align:"right",title:t.$t("reportForm.fullLoadDuration"),sortable:""}}),e("vxe-table-column",{attrs:{field:"fullDurationDist",formatter:t.numberToFixed2,title:t.$t("reportForm.fullLoadMileage"),sortable:""}}),e("vxe-table-column",{attrs:{field:"loadingDurationTime",align:"right",title:t.$t("reportForm.loadingDuration"),sortable:""}}),e("vxe-table-column",{attrs:{field:"loadingDurationDist",formatter:t.numberToFixed2,title:t.$t("reportForm.loadingMileage"),sortable:""}}),e("vxe-table-column",{attrs:{field:"unloadDurationTime",align:"right",title:t.$t("reportForm.unloadingDuration"),sortable:""}}),e("vxe-table-column",{attrs:{field:"unloadDurationDist",formatter:t.numberToFixed2,title:t.$t("reportForm.unloadingMileage"),sortable:""}})],1)],1)])],1)])},r=[],n=(a("14d9"),a("d3b7"),a("159b"),a("ea22")),o=a("2ddc"),l=a("1c31"),s=a("c276"),d=a("5101"),c=function(){var t=this,e=t._self._c;return e("div",{ref:"chartId",staticClass:"full"})},u=[],m=a("5530"),h=a("43c8"),f=a.n(h),p=a("2f62"),g={name:"WeightEcharts",computed:Object(m["a"])({},Object(p["b"])(["isZh"])),methods:{initChart:function(){var t=[{value:12,name:this.$t("reportForm.weightDuration")},{value:112,name:this.$t("reportForm.loadingMileage")},{value:92,name:this.$t("reportForm.halfLoadDuration")},{value:12,name:this.$t("reportForm.halfLoadMileage")}];this.chartsIns=f.a.init(this.$refs.chartId),this.chartsIns.setOption(this.getChartsOption(t),!0)},updateChartsOption:function(t){this.chartsIns.setOption(this.getChartsOption([]),!0),this.chartsIns.resize()},resize:function(){this.chartsIns.resize()},getChartsOption:function(t){return{title:{text:this.$t("reportForm.weightDuration"),bottom:"auto"},tooltip:{trigger:"item"},legend:{orient:"vertical",left:"right"},series:[{type:"pie",radius:"70%",data:t,emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]}}},mounted:function(){var t=this;this.$nextTick((function(){t.initChart()}))}},D=g,v=a("2877"),b=Object(v["a"])(D,c,u,!1,null,null,null),y=b.exports,x=a("6e52"),w=a("4c3c"),k=a("a05b"),T={name:"weightState",data:function(){return{loading:!1,activeName:"tabTotal",dateRange:[new Date,new Date],totalList:[],detailsList:[]}},mixins:[w["a"],k["a"]],components:{MultiChoiceVehicle:n["a"],SelectDate:o["a"],WeightEcharts:y},computed:{statisticsStyle:function(){return{zIndex:"tabTotal"==this.activeName?999:0}},detailsStyle:function(){return{zIndex:"details"==this.activeName?999:0}}},methods:{numberToFixed2:s["nb"],onSelectDevice:function(t){this.deviceids=t},handleQuery:function(){var t=this,e=this.deviceids;if(e.length>0){var a=this.dateRange,i=d["a"].format(a[0],"yyyy-MM-dd"),r=d["a"].format(a[1],"yyyy-MM-dd"),n={startday:i,endday:r,offset:d["a"].getOffset(),devices:e};this.loading=!0,Object(l["pb"])(n).then((function(e){var a=e.status,i=e.records,r=[];0==a&&i&&i.forEach((function(t,e){var a={index:e+1,deviceid:t.deviceid,devicename:x["a"].deviceInfos[t.deviceid].devicename,dailyrecords:t.dailyrecords,records:t.records};t.totalrecords.forEach((function(t){switch(t.loadstatus){case 0:a.emptyDurationTime=Object(s["Jb"])(t.durationtime),a.emptyDurationDist=t.durationdistance,a.durationtime0=t.durationtime/1e3/60;break;case 1:a.halfLoadDurationTime=Object(s["Jb"])(t.durationtime),a.halfLoadDurationDist=t.durationdistance,a.durationtime1=t.durationtime/1e3/60;break;case 2:a.overDurationTime=Object(s["Jb"])(t.durationtime),a.overDurationDist=t.durationdistance,a.durationtime2=t.durationtime/1e3/60;break;case 3:a.fullDurationTime=Object(s["Jb"])(t.durationtime),a.fullDurationDist=t.durationdistance,a.durationtime3=t.durationtime/1e3/60;break;case 4:a.loadingDurationTime=Object(s["Jb"])(t.durationtime),a.loadingDurationDist=t.durationdistance,a.durationtime4=t.durationtime/1e3/60;break;case 5:a.unloadDurationTime=Object(s["Jb"])(t.durationtime),a.unloadDurationDist=t.durationdistance,a.durationtime5=t.durationtime/1e3/60;break}})),r.push(a)})),t.loading=!1,t.totalList=r}))}else this.$XModal.message({message:this.$t("tips.selectDevice"),status:"error",zIndex:9999})},exportData:function(){},handleClickRow:function(t){this.activeName="details";var e=t.deviceid,a=[];t.dailyrecords.forEach((function(t){var i={deviceid:e};i.statisticsday=t.statisticsday,i.devicename=x["a"].deviceInfos[e].devicename,t.records.forEach((function(t){switch(t.loadstatus){case 0:i.emptyDurationTime=Object(s["Jb"])(t.durationtime),i.emptyDurationDist=t.durationdistance,i.durationtime0=t.durationtime/1e3/60;break;case 1:i.halfLoadDurationTime=Object(s["Jb"])(t.durationtime),i.halfLoadDurationDist=t.durationdistance,i.durationtime1=t.durationtime/1e3/60;break;case 2:i.overDurationTime=Object(s["Jb"])(t.durationtime),i.overDurationDist=t.durationdistance,i.durationtime2=t.durationtime/1e3/60;break;case 3:i.fullDurationTime=Object(s["Jb"])(t.durationtime),i.fullDurationDist=t.durationdistance,i.durationtime3=t.durationtime/1e3/60;break;case 4:i.loadingDurationTime=Object(s["Jb"])(t.durationtime),i.loadingDurationDist=t.durationdistance,i.durationtime4=t.durationtime/1e3/60;break;case 5:i.unloadDurationTime=Object(s["Jb"])(t.durationtime),i.unloadDurationDist=t.durationdistance,i.durationtime5=t.durationtime/1e3/60;break}})),a.push(i)})),this.detailsList=a}},mounted:function(){this.deviceids=[]}},$=T,M=(a("04e5"),Object(v["a"])($,i,r,!1,null,null,null)),F=M.exports;e["default"]=F},"271ae":function(t,e,a){},"2ddc":function(t,e,a){"use strict";var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"multi-choice",style:t.warpStyle},[e("div",{staticClass:"multi-choice-input"},["daterange"==t.dateType?e("div",[e("el-date-picker",{attrs:{type:t.dateType,"picker-options":t.pickerOptions,"range-separator":"-",align:"center","unlink-panels":"",clearable:!1,"start-placeholder":t.$t("device.driverinitialdate"),"end-placeholder":t.$t("device.drivereffectivedate")},on:{change:t.onChange},model:{value:t.dateRange,callback:function(e){t.dateRange=e},expression:"dateRange"}})],1):t._e(),"date"==t.dateType?e("div",[e("el-date-picker",{attrs:{type:"date","picker-options":t.datePickerOptions},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}})],1):t._e(),"datetimerange"==t.dateType?e("div",{staticClass:"datetimerange"},[e("el-date-picker",{attrs:{type:t.dateType,"range-separator":"-","picker-options":t.pickerOptionsTime,align:"center","unlink-panels":"",clearable:!1,"start-placeholder":t.$t("device.driverinitialdate"),"end-placeholder":t.$t("device.drivereffectivedate"),"default-time":["00:00:00","23:59:59"]},on:{change:t.onChange},model:{value:t.dateRange,callback:function(e){t.dateRange=e},expression:"dateRange"}})],1):t._e(),"month"==t.dateType?e("div",[e("el-date-picker",{attrs:{type:"month"},model:{value:t.month,callback:function(e){t.month=e},expression:"month"}})],1):t._e()])])},r=[],n=(a("99af"),a("5101")),o=a("5867"),l={name:"SelectDate",props:{value:{type:Array|Date,default:function(){return[]}},dateType:{type:String,default:"daterange"},label:{type:String,default:function(){return this.$t("common.selectTime")}}},computed:{isDaterange:function(){return"daterange"==this.dateType},warpStyle:function(){var t=200;switch(this.dateType){case"date":t=120;break;case"daterange":t=230;break;case"datetimerange":t=310;break}return{width:"".concat(t,"px")}}},mixins:[o["a"]],data:function(){var t=864e5;return{dateRange:[],date:new Date,month:new Date,pickerOptions:{shortcuts:[{text:this.$t("reportForm.toDay"),onClick:function(t){var e=new Date;t.$emit("pick",[e,e])}},{text:this.$t("reportForm.yesterDay"),onClick:function(e){var a=new Date;a.setTime(a.getTime()-t),e.$emit("pick",[a,a])}},{text:this.$t("missing.theWeek"),onClick:function(e){var a=new Date,i=new Date,r=a.getDay();a.setTime(a.getTime()-t*(r-1)),i.setTime(a.getTime()+6*t),e.$emit("pick",[a,i])}},{text:this.$t("missing.lastWeek"),onClick:function(e){var a=new Date,i=new Date,r=a.getDay(),n=a.getTime()-t*(r-1);a.setTime(n-7*t),i.setTime(n-t),e.$emit("pick",[a,i])}},{text:this.$t("missing.thisMonth"),onClick:function(t){var e=new Date,a=e.getFullYear(),i=e.getMonth()+1,r=new Date("".concat(a,"-").concat(i,"-01")),n=new Date("".concat(a,"-").concat(i,"-01 00:00:00"));n.setMonth(n.getMonth()+1),n=new Date(n.getTime()-1e3),t.$emit("pick",[r,n])}},{text:this.$t("missing.lastMonth"),onClick:function(t){var e=new Date;e.setMonth(e.getMonth()-1);var a=e.getFullYear(),i=e.getMonth()+1,r=new Date(new Date(a,i,1)-1).getDate(),n=new Date("".concat(a,"-").concat(i,"-01")),o=new Date("".concat(a,"-").concat(i,"-").concat(r));t.$emit("pick",[n,o])}}]},pickerOptionsTime:{shortcuts:[{text:this.$t("reportForm.toDay"),onClick:function(t){var e=new Date(n["a"].format(new Date,"yyyy-MM-dd")+" 00:00:00"),a=new Date(n["a"].format(new Date,"yyyy-MM-dd")+" 23:59:59");t.$emit("pick",[e,a])}},{text:this.$t("reportForm.yesterDay"),onClick:function(e){var a=new Date;a.setTime(a.getTime()-t),e.$emit("pick",[new Date(n["a"].format(a,"yyyy-MM-dd")+" 00:00:00"),new Date(n["a"].format(a,"yyyy-MM-dd")+" 23:59:59")])}},{text:this.$t("missing.theWeek"),onClick:function(e){var a=new Date,i=new Date,r=a.getDay();a.setTime(a.getTime()-t*(r-1)),i.setTime(a.getTime()+6*t),e.$emit("pick",[new Date(n["a"].format(a,"yyyy-MM-dd")+" 00:00:00"),new Date(n["a"].format(i,"yyyy-MM-dd")+" 23:59:59")])}},{text:this.$t("missing.lastWeek"),onClick:function(e){var a=new Date,i=new Date,r=a.getDay(),o=a.getTime()-t*(r-1);a.setTime(o-7*t),i.setTime(o-t),e.$emit("pick",[new Date(n["a"].format(a,"yyyy-MM-dd")+" 00:00:00"),new Date(n["a"].format(i,"yyyy-MM-dd")+" 23:59:59")])}},{text:this.$t("missing.thisMonth"),onClick:function(t){var e=new Date,a=e.getFullYear(),i=e.getMonth()+1,r=new Date("".concat(a,"-").concat(i,"-01")),o=new Date("".concat(a,"-").concat(i,"-01 00:00:00"));o.setMonth(o.getMonth()+1),o=new Date(o.getTime()-1e3),t.$emit("pick",[new Date(n["a"].format(r,"yyyy-MM-dd")+" 00:00:00"),new Date(n["a"].format(o,"yyyy-MM-dd")+" 23:59:59")])}},{text:this.$t("missing.lastMonth"),onClick:function(t){var e=new Date;e.setMonth(e.getMonth()-1);var a=e.getFullYear(),i=e.getMonth()+1,r=new Date(new Date(a,i,1)-1).getDate(),o=new Date("".concat(a,"-").concat(i,"-01")),l=new Date("".concat(a,"-").concat(i,"-").concat(r));t.$emit("pick",[new Date(n["a"].format(o,"yyyy-MM-dd")+" 00:00:00"),new Date(n["a"].format(l,"yyyy-MM-dd")+" 23:59:59")])}}]}}},watch:{dateRange:function(t){null==t?this.$emit("input",[]):this.$emit("input",t)},value:function(t){this.dateRange=t},date:function(t){this.$emit("input",t)},month:function(t){this.$emit("input",t)}},methods:{onChange:function(t){this.$emit("input",t)}},mounted:function(){"date"==this.dateType?this.date=this.value:"month"==this.dateType?this.month=this.value:this.dateRange=this.value}},s=l,d=(a("e716"),a("2877")),c=Object(d["a"])(s,i,r,!1,null,"5dbb8594",null);e["a"]=c.exports},"4c3c":function(t,e,a){"use strict";a("4e82");e["a"]={data:function(){return{sortConfig:{sortMethod:function(t){var e=t.data,a=t.sortList,i=a[0],r=i.property,n=i.order,o=[];return o="desc"===n?e.sort((function(t,e){var a=t[r],i=e[r];if(isNaN(a)&&!isNaN(Date.parse(a))&&isNaN(i)&&!isNaN(Date.parse(i)))return Date.parse(i)-Date.parse(a);if(a=parseFloat(a),i=parseFloat(i),isNaN(a)||isNaN(i)){var n=e[r]+"";return n.localeCompare(t[r])}return i-a})):"asc"===n?e.sort((function(t,e){var a=t[r],i=e[r];if(isNaN(a)&&!isNaN(Date.parse(a))&&isNaN(i)&&!isNaN(Date.parse(i)))return Date.parse(a)-Date.parse(i);if(a=parseFloat(t[r]),i=parseFloat(e[r]),isNaN(a)||isNaN(i)){var n=t[r]+"";return n.localeCompare(e[r])}return a-i})):e.sort(),o}}}}}},5211:function(t,e,a){},e716:function(t,e,a){"use strict";a("271ae")}}]);