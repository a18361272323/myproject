(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6c0d22a4"],{"0595":function(e,t,a){"use strict";var i=function(){var e=this,t=e._self._c;return t("div",{staticClass:"quick-time-range"},[t("div",{staticClass:"quick-time-range-wrapper"},e._l(e.list,(function(a){return t("div",{key:a.type,style:{color:a.type==e.type?"#409EFF":""},on:{click:function(t){return e.selectDate(a.type)}}},[e._v(e._s(a.label))])})),0),t("div",{staticClass:"quick-time-range-space"}),t("div",{staticClass:"quick-time-range-btn",on:{click:function(t){e.isCollapse=!e.isCollapse}}},[e.isCollapse?t("i",{staticClass:"el-icon-arrow-right"}):t("i",{staticClass:"el-icon-arrow-left"})])])},r=[],s=a("5101"),n={name:"QuickTimeRange",props:{value:{type:Array,default:function(){return[]}},dateType:{type:String,default:"date"}},watch:{isCollapse:function(){this.setList()}},data:function(){return{isCollapse:!0,type:0,list:[]}},methods:{setList:function(){this.isCollapse?this.list=[{label:this.$t("reportForm.toDay"),type:0},{label:this.$t("reportForm.yesterDay"),type:1},{label:this.$t("reportForm.recent3Days"),type:3}]:this.list=[{label:this.$t("reportForm.recent7Days"),type:7},{label:this.$t("reportForm.recent10Days"),type:10},{label:this.$t("reportForm.recent30Days"),type:30}]},selectDate:function(e){var t="datetimerange"==this.dateType,a=[],i=new Date,r=new Date;switch(t&&(i=new Date(s["a"].format(new Date,"yyyy-MM-dd")+" 00:00:00"),r=new Date(s["a"].format(new Date,"yyyy-MM-dd")+" 23:59:59")),e){case 0:a=[new Date(s["a"].format(i,"yyyy-MM-dd")+" 00:00:00"),new Date(s["a"].format(r,"yyyy-MM-dd")+" 23:59:59")];break;case 1:i.setTime(i.getTime()-864e5),a=[i,r];break;case 3:i.setTime(i.getTime()-2592e5),a=[i,r];break;case 7:i.setTime(i.getTime()-6048e5),a=[i,r];break;case 10:i.setTime(i.getTime()-864e6),a=[i,r];break;case 30:i.setTime(i.getTime()-2592e6),a=[i,r];break}this.type=e,this.$emit("input",a)}},mounted:function(){var e=this;this.$nextTick((function(){e.setList()}))}},o=n,l=(a("c51d"),a("2877")),c=Object(l["a"])(o,i,r,!1,null,null,null);t["a"]=c.exports},"271ae":function(e,t,a){},"2ddc":function(e,t,a){"use strict";var i=function(){var e=this,t=e._self._c;return t("div",{staticClass:"multi-choice",style:e.warpStyle},[t("div",{staticClass:"multi-choice-input"},["daterange"==e.dateType?t("div",[t("el-date-picker",{attrs:{type:e.dateType,"picker-options":e.pickerOptions,"range-separator":"-",align:"center","unlink-panels":"",clearable:!1,"start-placeholder":e.$t("device.driverinitialdate"),"end-placeholder":e.$t("device.drivereffectivedate")},on:{change:e.onChange},model:{value:e.dateRange,callback:function(t){e.dateRange=t},expression:"dateRange"}})],1):e._e(),"date"==e.dateType?t("div",[t("el-date-picker",{attrs:{type:"date","picker-options":e.datePickerOptions},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}})],1):e._e(),"datetimerange"==e.dateType?t("div",{staticClass:"datetimerange"},[t("el-date-picker",{attrs:{type:e.dateType,"range-separator":"-","picker-options":e.pickerOptionsTime,align:"center","unlink-panels":"",clearable:!1,"start-placeholder":e.$t("device.driverinitialdate"),"end-placeholder":e.$t("device.drivereffectivedate"),"default-time":["00:00:00","23:59:59"]},on:{change:e.onChange},model:{value:e.dateRange,callback:function(t){e.dateRange=t},expression:"dateRange"}})],1):e._e(),"month"==e.dateType?t("div",[t("el-date-picker",{attrs:{type:"month"},model:{value:e.month,callback:function(t){e.month=t},expression:"month"}})],1):e._e()])])},r=[],s=(a("99af"),a("5101")),n=a("5867"),o={name:"SelectDate",props:{value:{type:Array|Date,default:function(){return[]}},dateType:{type:String,default:"daterange"},label:{type:String,default:function(){return this.$t("common.selectTime")}}},computed:{isDaterange:function(){return"daterange"==this.dateType},warpStyle:function(){var e=200;switch(this.dateType){case"date":e=120;break;case"daterange":e=230;break;case"datetimerange":e=310;break}return{width:"".concat(e,"px")}}},mixins:[n["a"]],data:function(){var e=864e5;return{dateRange:[],date:new Date,month:new Date,pickerOptions:{shortcuts:[{text:this.$t("reportForm.toDay"),onClick:function(e){var t=new Date;e.$emit("pick",[t,t])}},{text:this.$t("reportForm.yesterDay"),onClick:function(t){var a=new Date;a.setTime(a.getTime()-e),t.$emit("pick",[a,a])}},{text:this.$t("missing.theWeek"),onClick:function(t){var a=new Date,i=new Date,r=a.getDay();a.setTime(a.getTime()-e*(r-1)),i.setTime(a.getTime()+6*e),t.$emit("pick",[a,i])}},{text:this.$t("missing.lastWeek"),onClick:function(t){var a=new Date,i=new Date,r=a.getDay(),s=a.getTime()-e*(r-1);a.setTime(s-7*e),i.setTime(s-e),t.$emit("pick",[a,i])}},{text:this.$t("missing.thisMonth"),onClick:function(e){var t=new Date,a=t.getFullYear(),i=t.getMonth()+1,r=new Date("".concat(a,"-").concat(i,"-01")),s=new Date("".concat(a,"-").concat(i,"-01 00:00:00"));s.setMonth(s.getMonth()+1),s=new Date(s.getTime()-1e3),e.$emit("pick",[r,s])}},{text:this.$t("missing.lastMonth"),onClick:function(e){var t=new Date;t.setMonth(t.getMonth()-1);var a=t.getFullYear(),i=t.getMonth()+1,r=new Date(new Date(a,i,1)-1).getDate(),s=new Date("".concat(a,"-").concat(i,"-01")),n=new Date("".concat(a,"-").concat(i,"-").concat(r));e.$emit("pick",[s,n])}}]},pickerOptionsTime:{shortcuts:[{text:this.$t("reportForm.toDay"),onClick:function(e){var t=new Date(s["a"].format(new Date,"yyyy-MM-dd")+" 00:00:00"),a=new Date(s["a"].format(new Date,"yyyy-MM-dd")+" 23:59:59");e.$emit("pick",[t,a])}},{text:this.$t("reportForm.yesterDay"),onClick:function(t){var a=new Date;a.setTime(a.getTime()-e),t.$emit("pick",[new Date(s["a"].format(a,"yyyy-MM-dd")+" 00:00:00"),new Date(s["a"].format(a,"yyyy-MM-dd")+" 23:59:59")])}},{text:this.$t("missing.theWeek"),onClick:function(t){var a=new Date,i=new Date,r=a.getDay();a.setTime(a.getTime()-e*(r-1)),i.setTime(a.getTime()+6*e),t.$emit("pick",[new Date(s["a"].format(a,"yyyy-MM-dd")+" 00:00:00"),new Date(s["a"].format(i,"yyyy-MM-dd")+" 23:59:59")])}},{text:this.$t("missing.lastWeek"),onClick:function(t){var a=new Date,i=new Date,r=a.getDay(),n=a.getTime()-e*(r-1);a.setTime(n-7*e),i.setTime(n-e),t.$emit("pick",[new Date(s["a"].format(a,"yyyy-MM-dd")+" 00:00:00"),new Date(s["a"].format(i,"yyyy-MM-dd")+" 23:59:59")])}},{text:this.$t("missing.thisMonth"),onClick:function(e){var t=new Date,a=t.getFullYear(),i=t.getMonth()+1,r=new Date("".concat(a,"-").concat(i,"-01")),n=new Date("".concat(a,"-").concat(i,"-01 00:00:00"));n.setMonth(n.getMonth()+1),n=new Date(n.getTime()-1e3),e.$emit("pick",[new Date(s["a"].format(r,"yyyy-MM-dd")+" 00:00:00"),new Date(s["a"].format(n,"yyyy-MM-dd")+" 23:59:59")])}},{text:this.$t("missing.lastMonth"),onClick:function(e){var t=new Date;t.setMonth(t.getMonth()-1);var a=t.getFullYear(),i=t.getMonth()+1,r=new Date(new Date(a,i,1)-1).getDate(),n=new Date("".concat(a,"-").concat(i,"-01")),o=new Date("".concat(a,"-").concat(i,"-").concat(r));e.$emit("pick",[new Date(s["a"].format(n,"yyyy-MM-dd")+" 00:00:00"),new Date(s["a"].format(o,"yyyy-MM-dd")+" 23:59:59")])}}]}}},watch:{dateRange:function(e){null==e?this.$emit("input",[]):this.$emit("input",e)},value:function(e){this.dateRange=e},date:function(e){this.$emit("input",e)},month:function(e){this.$emit("input",e)}},methods:{onChange:function(e){this.$emit("input",e)}},mounted:function(){"date"==this.dateType?this.date=this.value:"month"==this.dateType?this.month=this.value:this.dateRange=this.value}},l=o,c=(a("e716"),a("2877")),d=Object(c["a"])(l,i,r,!1,null,"5dbb8594",null);t["a"]=d.exports},"4c3c":function(e,t,a){"use strict";a("4e82");t["a"]={data:function(){return{sortConfig:{sortMethod:function(e){var t=e.data,a=e.sortList,i=a[0],r=i.property,s=i.order,n=[];return n="desc"===s?t.sort((function(e,t){var a=e[r],i=t[r];if(isNaN(a)&&!isNaN(Date.parse(a))&&isNaN(i)&&!isNaN(Date.parse(i)))return Date.parse(i)-Date.parse(a);if(a=parseFloat(a),i=parseFloat(i),isNaN(a)||isNaN(i)){var s=t[r]+"";return s.localeCompare(e[r])}return i-a})):"asc"===s?t.sort((function(e,t){var a=e[r],i=t[r];if(isNaN(a)&&!isNaN(Date.parse(a))&&isNaN(i)&&!isNaN(Date.parse(i)))return Date.parse(a)-Date.parse(i);if(a=parseFloat(e[r]),i=parseFloat(t[r]),isNaN(a)||isNaN(i)){var s=e[r]+"";return s.localeCompare(t[r])}return a-i})):t.sort(),n}}}}}},"57c9":function(e,t,a){"use strict";var i=a("0595");t["a"]=i["a"]},"7c1b":function(e,t,a){"use strict";a("d1d1")},c51d:function(e,t,a){"use strict";a("ecfc")},c5b5:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e._self._c;return t("div",{staticClass:"report-form full rotate-report"},[t("div",{staticClass:"report-form-inner"},[t("div",{staticClass:"report-form-inner-header",staticStyle:{height:"35px"}},[t("div",{staticClass:"f_left"},[t("MultiChoiceVehicle",{on:{onSelectDevice:e.onSelectDevice}})],1),t("div",{staticClass:"f_left"},[t("SelectDate",{model:{value:e.dateRange,callback:function(t){e.dateRange=t},expression:"dateRange"}})],1),t("div",{staticClass:"f_left"},[t("QuickTimeRange",{model:{value:e.dateRange,callback:function(t){e.dateRange=t},expression:"dateRange"}})],1),t("div",{staticClass:"f_left"},[t("el-button",{attrs:{loading:e.loading,type:"primary"},on:{click:e.handleQuery}},[e._v(e._s(e.$t("common.query")))])],1),t("div",{staticClass:"f_left"},[t("el-button",{attrs:{type:"primary",loading:e.exportLoading1},on:{click:e.exportData}},[e._v(e._s(e.$t("common.export")))])],1)]),t("div",{staticClass:"rotate-report-charts"},[t("RotateEchart",{ref:"echartIns",on:{"legend-changed":e.onLegendChanged}})],1),t("div",{staticClass:"report-form-inner-content",staticStyle:{top:"286px"}},[t("el-tabs",{model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[t("el-tab-pane",{attrs:{label:e.$t("reportForm.rotationStatistics")+"(".concat(e.totalList.length,")"),name:"tabTotal"}}),t("el-tab-pane",{attrs:{label:"",name:"details"}})],1),t("div",{directives:[{name:"show",rawName:"v-show",value:"details"==e.activeName,expression:"activeName=='details'"}],staticStyle:{position:"absolute",left:"0px",right:"0px",top:"10px","text-align":"center"}},[t("b",{domProps:{textContent:e._s(e.tableTitle)}}),e._v("("+e._s(e.detailsList.length)+") ")])],1),t("div",{staticClass:"report-form-inner-content",staticStyle:{top:"330px"}},[t("div",{style:{zIndex:"tabTotal"==e.activeName?999:1}},[t("vxe-table",{attrs:{"sort-config":e.sortConfig,"menu-config":e.tableMenu,border:"",resizable:"","auto-resize":"","show-overflow":"","highlight-hover-row":"",size:"mini",height:"auto",data:e.totalList},on:{"menu-click":e.handleClickTableMenu}},[t("vxe-table-column",{attrs:{type:"seq",width:"60",title:e.$t("reportForm.index")}}),t("vxe-table-column",{attrs:{title:e.$t("reportForm.action"),width:"70"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(t){return e.handleClickRow(a.row)}}},[e._v(e._s(e.$t("reportForm.details")))])]}}])}),t("vxe-table-column",{attrs:{field:"devicename",title:e.$t("alarm.devName"),sortable:""}}),t("vxe-table-column",{attrs:{field:"deviceid",title:e.$t("alarm.devNum"),sortable:""}}),t("vxe-table-column",{attrs:{field:"creater",title:e.$t("reportForm.creater"),sortable:""},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-popover",{attrs:{placement:"bottom",trigger:"click"}},[t("div",{staticClass:"parents-wrapper"},e._l(e.parentsList,(function(a){return t("div",{key:a.username},[e._v(e._s(a.username)+"("+e._s(a.usertypeStr)+")")])})),0),t("el-button",{staticStyle:{color:"#000000"},attrs:{slot:"reference",type:"text"},on:{click:function(t){return e.queryParents(a.row.creater)}},slot:"reference"},[e._v(e._s(a.row.creater))])],1)]}}])}),t("vxe-table-column",{attrs:{field:"groupname",title:e.$t("reportForm.groupName"),sortable:""}}),t("vxe-table-column",{attrs:{field:"zzTimes",title:e.$t("reportForm.zzTimes"),align:"right",formatter:e.numberToFixed2,sortable:""}}),t("vxe-table-column",{attrs:{field:"fzTimes",title:e.$t("reportForm.fzTimes"),align:"right",formatter:e.numberToFixed2,sortable:""}}),t("vxe-table-column",{attrs:{field:"tzTimes",title:e.$t("reportForm.tzTimes"),align:"right",formatter:e.numberToFixed2,sortable:""}}),t("vxe-table-column",{attrs:{field:"count",title:e.$t("reportForm.count"),sortable:""}})],1)],1),t("div",{style:{zIndex:"details"==e.activeName?999:1}},[t("vxe-table",{attrs:{border:"",resizable:"","menu-config":e.tableMenu,"auto-resize":"","show-overflow":"","highlight-hover-row":"",size:"mini",height:"auto",data:e.detailsList},on:{"menu-click":e.handleClickTableMenu}},[t("vxe-table-column",{attrs:{type:"seq",width:"60",title:e.$t("reportForm.index")}}),t("vxe-table-column",{attrs:{field:"devicename",title:e.$t("alarm.devName"),sortable:""}}),t("vxe-table-column",{attrs:{field:"deviceid",title:e.$t("alarm.devNum"),sortable:""}}),t("vxe-table-column",{attrs:{field:"creater",title:e.$t("reportForm.creater"),sortable:""},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-popover",{attrs:{placement:"bottom",trigger:"click"}},[t("div",{staticClass:"parents-wrapper"},e._l(e.parentsList,(function(a){return t("div",{key:a.username},[e._v(e._s(a.username)+"("+e._s(a.usertypeStr)+")")])})),0),t("el-button",{staticStyle:{color:"#000000"},attrs:{slot:"reference",type:"text"},on:{click:function(t){return e.queryParents(a.row.creater)}},slot:"reference"},[e._v(e._s(a.row.creater))])],1)]}}])}),t("vxe-table-column",{attrs:{field:"groupname",title:e.$t("reportForm.groupName"),sortable:""}}),t("vxe-table-column",{attrs:{field:"status",title:e.$t("reportForm.status"),sortable:""}}),t("vxe-table-column",{attrs:{field:"startDate",title:e.$t("reportForm.startTime"),sortable:""}}),t("vxe-table-column",{attrs:{field:"endDate",title:e.$t("reportForm.endTime"),sortable:""}}),t("vxe-table-column",{attrs:{field:"address",title:e.$t("reportForm.address")},scopedSlots:e._u([{key:"default",fn:function(a){return[t("span",{staticStyle:{"text-decoration":"underline",cursor:"pointer",color:"#388CFE"},domProps:{textContent:e._s(a.row.address)},on:{click:function(t){return e.seeMapTracks(a.row)}}})]}}])}),t("vxe-table-column",{attrs:{field:"durationStr",title:e.$t("reportForm.duration"),align:"right",formatter:e.numberToFixed2,sortable:""}})],1)],1)]),t("el-dialog",{attrs:{title:e.$t("reportForm.seeMap"),visible:e.dialogMap,width:"500",center:"","close-on-click-modal":!1},on:{"update:visible":function(t){e.dialogMap=t}}},[t("div",{staticStyle:{width:"100%",height:"400px"}},[t("ReportMap",{ref:"mapIns"})],1)])],1)])},r=[],s=a("ade3"),n=(a("99af"),a("14d9"),a("4e82"),a("a9e3"),a("d3b7"),a("159b"),a("4795"),a("e561")),o=a("d462"),l=a("57c9"),c=function(){var e=this,t=e._self._c;return t("div",{ref:"chartId",staticClass:"full"})},d=[],u=a("5530"),m=(a("b0c0"),a("b680"),a("43c8")),p=a.n(m),h=a("2f62"),v={name:"RotateEchart",computed:Object(u["a"])({},Object(h["b"])(["isZh"])),methods:{initChart:function(){var e=this,t=this.$t("reportForm.zz"),a=this.$t("reportForm.fz"),i=this.$t("reportForm.tz");this.selectedLegend=Object(s["a"])(Object(s["a"])(Object(s["a"])({},t,!0),a,!0),i,!0),this.chartsIns=p.a.init(this.$refs.chartId),this.chartsIns.setOption(this.getChartsOption([],[],[],[]),!0),this.chartsIns.on("legendselectchanged",(function(t){e.selectedLegend=t.selected,e.$emit("legend-changed",t.selected)}))},updateChartsOption:function(e,t,a,i){this.chartsIns.setOption(this.getChartsOption(e,t,a,i),!0),this.chartsIns.resize()},getChartsOption:function(e,t,a,i){var r=this.$t("reportForm.h"),s=this.$t("reportForm.m"),n=this.$t("alarm.devName"),o=this.$t("reportForm.zz"),l=this.$t("reportForm.fz"),c=this.$t("reportForm.tz"),d={tooltip:{show:!0,trigger:"axis",formatter:function(e){var t="",a="",i="";if(1==e.length){var d=e[0];if(0==d.seriesIndex)return t=e[0].value>60?parseInt(e[0].value/60)+r+(e[0].value%60).toFixed(2)+s:e[0]&&e[0].value%60==0&&0!=e[0].value?parseInt(e[0].value/60)+r:e[0].value+s,n+": "+e[0].name+"</br>"+o+": "+t+"</br>";if(1==d.seriesIndex)return a=e[0].value>60?parseInt(e[0].value/60)+r+(e[0].value%60).toFixed(2)+s:e[0]&&e[0].value%60==0&&0!=e[0].value?parseInt(e[0].value/60)+r:e[0].value+s,n+": "+e[0].name+"</br>"+l+": "+a+"</br>";if(2==d.seriesIndex)return i=e[0].value>60?parseInt(e[0].value/60)+r+(e[0].value%60).toFixed(2)+s:e[0]&&e[0].value%60==0&&0!=e[0].value?parseInt(e[0].value/60)+r:e[0].value+s,n+": "+e[0].name+"</br>"+c+": "+i}else if(2==e.length){d=e[0];var u=e[1];if(0==d.seriesIndex?t=d.value>60?parseInt(d.value/60)+r+(d.value%60).toFixed(2)+s:d&&d.value%60==0&&0!=d.value?parseInt(d.value/60)+r:d.value+s:1==d.seriesIndex?a=d.value>60?parseInt(d.value/60)+r+(d.value%60).toFixed(2)+s:d&&d.value%60==0&&0!=d.value?parseInt(d.value/60)+r:d.value+s:2==d.seriesIndex&&(i=d.value>60?parseInt(d.value/60)+r+(d.value%60).toFixed(2)+s:d&&d.value%60==0&&0!=d.value?parseInt(d.value/60)+r:d.value+s),0==u.seriesIndex?t=u.value>60?parseInt(u.value/60)+r+(u.value%60).toFixed(2)+s:u&&u.value%60==0&&0!=u.value?parseInt(u.value/60)+r:u.value+s:1==u.seriesIndex?a=u.value>60?parseInt(u.value/60)+r+(u.value%60).toFixed(2)+s:u&&u.value%60==0&&0!=u.value?parseInt(u.value/60)+r:u.value+s:2==u.seriesIndex&&(i=u.value>60?parseInt(u.value/60)+r+(u.value%60).toFixed(2)+s:u&&u.value%60==0&&0!=u.value?parseInt(u.value/60)+r:u.value+s),""===t)return n+": "+e[0].name+"</br>"+l+": "+a+"</br>"+c+": "+i;if(""===a)return n+": "+e[0].name+"</br>"+o+": "+t+"</br>"+c+": "+i;if(""===i)return n+": "+e[0].name+"</br>"+o+": "+t+"</br>"+l+": "+a+"</br>"}else if(3==e.length)return t=e[0].value>60?parseInt(e[0].value/60)+r+(e[0].value%60).toFixed(2)+s:e[0]&&e[0].value%60==0&&0!=e[0].value?parseInt(e[0].value/60)+r:e[0].value+s,a=e[1]&&e[1].value>60?parseInt(e[1].value/60)+r+(e[1].value%60).toFixed(2)+s:e[1]&&e[1].value%60==0&&0!=e[1].value?parseInt(e[1].value/60)+r:e[1].value+s,i=e[2]&&e[2].value>60?parseInt(e[2].value/60)+r+(e[2].value%60).toFixed(2)+s:e[2]&&e[2].value%60==0&&0!=e[2].value?parseInt(e[2].value/60)+r:e[2].value+s,n+": "+e[0].name+"</br>"+o+": "+t+"</br>"+l+": "+a+"</br>"+c+": "+i}},legend:{data:[o,l,c],y:13,x:"center",selected:this.selectedLegend},toolbox:{show:!1,feature:{magicType:{show:!0,type:["line","bar"]},restore:{show:!0},saveAsImage:{show:!0}},itemSize:14,y:"top",x:"right"},grid:{x:100,y:40,x2:80,y2:30},xAxis:[{type:"category",axisLabel:{show:!0,interval:0,rotate:0,margin:8,textStyle:{fontSize:12}},data:e}],yAxis:[{type:"value",position:"bottom",nameLocation:"end",boundaryGap:[0,.2],axisLabel:{formatter:"{value}"}}],series:[{name:o,type:"bar",itemStyle:{normal:{label:{show:!0,textStyle:{fontSize:"12",fontFamily:"微软雅黑",fontWeight:"bold"}}}},data:t},{name:l,type:"bar",itemStyle:{normal:{label:{show:!0,textStyle:{fontSize:"12",fontFamily:"微软雅黑",fontWeight:"bold"}}}},data:a},{name:c,type:"bar",itemStyle:{normal:{label:{show:!0,textStyle:{fontSize:"14",fontFamily:"微软雅黑",fontWeight:"bold"}}}},data:i}]};return d}},mounted:function(){var e=this;this.$nextTick((function(){e.initChart()}))}},f=v,g=a("2877"),y=Object(g["a"])(f,c,d,!1,null,null,null),b=y.exports,x=a("32eb"),$=a("5101"),D=a("1c31"),w=a("7cf8"),T=a("6e52"),k=a("c276"),F=a("4c3c"),z=a("a05b"),M=a("0c87"),C={name:"rotateReport",data:function(){return{loading:!1,dialogMap:!1,exportLoading1:!1,activeName:"tabTotal",tableTitle:"",dateRange:[new Date,new Date],totalList:[],detailsList:[]}},mixins:[F["a"],z["a"],M["a"]],components:{MultiChoiceVehicle:n["a"],SelectDate:o["a"],QuickTimeRange:l["a"],RotateEchart:b,ReportMap:x["a"]},watch:{dateRange:function(){this.loading||this.handleQuery()}},methods:{numberToFixed2:k["ob"],seeMapTracks:function(e){var t=this,a={deviceid:e.deviceid,begintime:e.startDate,endtime:e.endDate,timezone:$["a"].getOffset()};this.dialogMap=!0,Object(w["X"])(a).then((function(e){e.status;var a=e.records;setTimeout((function(){a=a||[],t.$refs.mapIns.markersAndLineLayerToMap(a)}),300)})).catch((function(e){console.log(e)}))},onSelectDevice:function(e){this.deviceids=e},onLegendChanged:function(e){this.selectedLegend=e,this.filterDetailsList(e)},filterDetailsList:function(e){var t=this.cacheDetailsList,a=this.$t("reportForm.zz"),i=this.$t("reportForm.fz"),r=this.$t("reportForm.tz"),s=[];t.forEach((function(t){t.status==a&&e[a]&&s.push(t),t.status==i&&e[i]&&s.push(t),t.status==r&&e[r]&&s.push(t)})),this.detailsList=s},handleQuery:function(){var e=this,t=this.deviceids,a=this.dateRange;if(0!=t.length)if(0!=a.length){"details"==this.activeName&&(this.activeName="tabTotal",this.totalList=[],this.detailsList=[]),this.loading=!0;var i=$["a"].format(a[0],"yyyy-MM-dd"),r=$["a"].format(a[1],"yyyy-MM-dd"),s={startday:i,endday:r,offset:$["a"].getOffset(),deviceids:t};Object(D["kb"])(s).then((function(t){var a=t.records,s=t.addressmap;e.queryDateRange="".concat(i,"  ").concat(r),e.loading=!1,e.addressmap=s;var n=[];a&&(n=e.getAllRotateTableData(a)),e.$refs.echartIns.updateChartsOption(e.deviceNamesArr,e.zzTimesArr,e.fzTimesArr,e.tzTimesArr),e.totalList=n}))}else this.$XModal.message({message:this.$t("tips.selectTime"),status:"error",zIndex:9999});else this.$XModal.message({message:this.$t("tips.selectDevice"),status:"error",zIndex:9999})},getAllRotateTableData:function(e){var t=[],a=[],i=[],r=[],s=[],n=this.addressmap;return e.forEach((function(e,o){var l=T["a"].deviceInfos[e.deviceid],c={index:o+1,deviceid:e.deviceid,devicename:l.devicename,records:e.records,groupname:l.groupname,creater:T["a"].getShowName(l.creater)},d=0,u=0,m=0,p=0;e.records.forEach((function(e){e.creater=l.creater,e.groupname=l.groupname,e.address=Object(k["M"])(n,e.slat,e.slon),1==e.rotatestate&&(u+=e.endtime-e.begintime),2==e.rotatestate&&(m+=e.endtime-e.begintime),3==e.rotatestate&&(p+=e.endtime-e.begintime),d++})),e.records.sort((function(e,t){return t.begintime-e.begintime})),c.zzTimes=u/1e3/3600,c.fzTimes=m/1e3/3600,c.tzTimes=p/1e3/3600,c.count=d,a.push(c.devicename),i.push(Number(Object(k["ob"])(c.zzTimes))),r.push(Number(Object(k["ob"])(c.fzTimes))),s.push(Number(Object(k["ob"])(c.tzTimes))),t.push(c)})),a.length&&(this.deviceNamesArr=a,this.zzTimesArr=i,this.fzTimesArr=r,this.tzTimesArr=s),t},handleClickRow:function(e){var t=this;this.activeName="details";var a=[],i=e.devicename;this.tableTitle=e.devicename+"-"+e.deviceid,e.records.forEach((function(e,r){var s=e.endtime-e.begintime,n=s/1e3/3600,o="";1==e.rotatestate?(o=t.$t("reportForm.zz"),s):2==e.rotatestate?(o=t.$t("reportForm.fz"),s):3==e.rotatestate&&(s,o=t.$t("reportForm.tz")),a.push({index:r+1,deviceid:e.deviceid,devicename:i,creater:e.creater,groupname:e.groupname,startDate:$["a"].longToLocalDateTimeStr(e.begintime),endDate:$["a"].longToLocalDateTimeStr(e.endtime),status:o,address:e.address,durationStr:n,slon:e.slon,slat:e.slat,elon:e.elon,elat:e.elat})})),this.cacheDetailsList=a,this.filterDetailsList(this.selectedLegend)},exportData:function(){if("tabTotal"==this.activeName){if(0==this.totalList.length)return;var e=[[this.$t("reportForm.index"),this.$t("alarm.devName"),this.$t("alarm.devNum"),this.$t("reportForm.creater"),this.$t("reportForm.groupName"),this.$t("reportForm.zzTimes"),this.$t("reportForm.fzTimes"),this.$t("reportForm.tzTimes"),this.$t("reportForm.count")]],t="",a="";this.totalList.forEach((function(i,r){var s=[];s.push(i.index),s.push(i.devicename),s.push(i.deviceid),s.push(i.creater),s.push(i.groupname),s.push(Object(k["ob"])(i.zzTimes)),s.push(Object(k["ob"])(i.fzTimes)),s.push(Object(k["ob"])(i.tzTimes)),s.push(i.count),t=i.deviceid,a=i.devicename,e.push(s)}));var i={title:this.$t("reportForm.rotateReport")+" ".concat(a," - ").concat(t),data:e,dateRange:this.queryDateRange};this.exportLoading1=!0,new ExcelCls(i).exportExcel(this)}else{if(0==this.detailsList.length)return;var r=[[this.$t("reportForm.index"),this.$t("alarm.devName"),this.$t("alarm.devNum"),this.$t("reportForm.creater"),this.$t("reportForm.groupName"),this.$t("reportForm.status"),this.$t("reportForm.startTime"),this.$t("reportForm.endTime"),this.$t("reportForm.address"),this.$t("reportForm.duration"),this.$t("reportForm.startLonLat"),this.$t("reportForm.endLonLat")]],s="",n="";this.detailsList.forEach((function(e,t){var a=[];a.push(e.index),a.push(e.devicename),a.push(e.deviceid),a.push(e.creater),a.push(e.groupname),a.push(e.status),a.push(e.startDate),a.push(e.endDate),a.push(e.address),a.push(Object(k["ob"])(e.durationStr)),a.push(e.slon+","+e.slat),a.push(e.elon+","+e.elat),s=e.deviceid,n=e.devicename,r.push(a)}));i={title:this.$t("reportForm.rotateReport")+" ".concat(n," - ").concat(s),data:r,dateRange:this.queryDateRange};this.exportLoading1=!0,new ExcelCls(i).exportExcel(this)}}},mounted:function(){this.deviceids=[],this.deviceNamesArr=[],this.zzTimesArr=[],this.fzTimesArr=[],this.tzTimesArr=[],this.cacheDetailsList=[],this.queryDateRange=null;var e=this.$t("reportForm.zz"),t=this.$t("reportForm.fz"),a=this.$t("reportForm.tz");this.selectedLegend=Object(s["a"])(Object(s["a"])(Object(s["a"])({},e,!0),t,!0),a,!0)}},N=C,I=(a("7c1b"),Object(g["a"])(N,i,r,!1,null,null,null)),L=I.exports;t["default"]=L},d1d1:function(e,t,a){},d462:function(e,t,a){"use strict";var i=a("2ddc");t["a"]=i["a"]},e561:function(e,t,a){"use strict";var i=a("ea22");t["a"]=i["a"]},e716:function(e,t,a){"use strict";a("271ae")},ecfc:function(e,t,a){}}]);