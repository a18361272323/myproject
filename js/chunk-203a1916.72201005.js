(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-203a1916"],{"203c":function(t,e,a){"use strict";a("cc31")},"271ae":function(t,e,a){},"2ddc":function(t,e,a){"use strict";var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"multi-choice",style:t.warpStyle},[e("div",{staticClass:"multi-choice-input"},["daterange"==t.dateType?e("div",[e("el-date-picker",{attrs:{type:t.dateType,"picker-options":t.pickerOptions,"range-separator":"-",align:"center","unlink-panels":"",clearable:!1,"start-placeholder":t.$t("device.driverinitialdate"),"end-placeholder":t.$t("device.drivereffectivedate")},on:{change:t.onChange},model:{value:t.dateRange,callback:function(e){t.dateRange=e},expression:"dateRange"}})],1):t._e(),"date"==t.dateType?e("div",[e("el-date-picker",{attrs:{type:"date","picker-options":t.datePickerOptions},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}})],1):t._e(),"datetimerange"==t.dateType?e("div",{staticClass:"datetimerange"},[e("el-date-picker",{attrs:{type:t.dateType,"range-separator":"-","picker-options":t.pickerOptionsTime,align:"center","unlink-panels":"",clearable:!1,"start-placeholder":t.$t("device.driverinitialdate"),"end-placeholder":t.$t("device.drivereffectivedate"),"default-time":["00:00:00","23:59:59"]},on:{change:t.onChange},model:{value:t.dateRange,callback:function(e){t.dateRange=e},expression:"dateRange"}})],1):t._e(),"month"==t.dateType?e("div",[e("el-date-picker",{attrs:{type:"month"},model:{value:t.month,callback:function(e){t.month=e},expression:"month"}})],1):t._e()])])},o=[],r=(a("99af"),a("5101")),n=a("5867"),s={name:"SelectDate",props:{value:{type:Array|Date,default:function(){return[]}},dateType:{type:String,default:"daterange"},label:{type:String,default:function(){return this.$t("common.selectTime")}}},computed:{isDaterange:function(){return"daterange"==this.dateType},warpStyle:function(){var t=200;switch(this.dateType){case"date":t=120;break;case"daterange":t=230;break;case"datetimerange":t=310;break}return{width:"".concat(t,"px")}}},mixins:[n["a"]],data:function(){var t=864e5;return{dateRange:[],date:new Date,month:new Date,pickerOptions:{shortcuts:[{text:this.$t("reportForm.toDay"),onClick:function(t){var e=new Date;t.$emit("pick",[e,e])}},{text:this.$t("reportForm.yesterDay"),onClick:function(e){var a=new Date;a.setTime(a.getTime()-t),e.$emit("pick",[a,a])}},{text:this.$t("missing.theWeek"),onClick:function(e){var a=new Date,i=new Date,o=a.getDay();a.setTime(a.getTime()-t*(o-1)),i.setTime(a.getTime()+6*t),e.$emit("pick",[a,i])}},{text:this.$t("missing.lastWeek"),onClick:function(e){var a=new Date,i=new Date,o=a.getDay(),r=a.getTime()-t*(o-1);a.setTime(r-7*t),i.setTime(r-t),e.$emit("pick",[a,i])}},{text:this.$t("missing.thisMonth"),onClick:function(t){var e=new Date,a=e.getFullYear(),i=e.getMonth()+1,o=new Date("".concat(a,"-").concat(i,"-01")),r=new Date("".concat(a,"-").concat(i,"-01 00:00:00"));r.setMonth(r.getMonth()+1),r=new Date(r.getTime()-1e3),t.$emit("pick",[o,r])}},{text:this.$t("missing.lastMonth"),onClick:function(t){var e=new Date;e.setMonth(e.getMonth()-1);var a=e.getFullYear(),i=e.getMonth()+1,o=new Date(new Date(a,i,1)-1).getDate(),r=new Date("".concat(a,"-").concat(i,"-01")),n=new Date("".concat(a,"-").concat(i,"-").concat(o));t.$emit("pick",[r,n])}}]},pickerOptionsTime:{shortcuts:[{text:this.$t("reportForm.toDay"),onClick:function(t){var e=new Date(r["a"].format(new Date,"yyyy-MM-dd")+" 00:00:00"),a=new Date(r["a"].format(new Date,"yyyy-MM-dd")+" 23:59:59");t.$emit("pick",[e,a])}},{text:this.$t("reportForm.yesterDay"),onClick:function(e){var a=new Date;a.setTime(a.getTime()-t),e.$emit("pick",[new Date(r["a"].format(a,"yyyy-MM-dd")+" 00:00:00"),new Date(r["a"].format(a,"yyyy-MM-dd")+" 23:59:59")])}},{text:this.$t("missing.theWeek"),onClick:function(e){var a=new Date,i=new Date,o=a.getDay();a.setTime(a.getTime()-t*(o-1)),i.setTime(a.getTime()+6*t),e.$emit("pick",[new Date(r["a"].format(a,"yyyy-MM-dd")+" 00:00:00"),new Date(r["a"].format(i,"yyyy-MM-dd")+" 23:59:59")])}},{text:this.$t("missing.lastWeek"),onClick:function(e){var a=new Date,i=new Date,o=a.getDay(),n=a.getTime()-t*(o-1);a.setTime(n-7*t),i.setTime(n-t),e.$emit("pick",[new Date(r["a"].format(a,"yyyy-MM-dd")+" 00:00:00"),new Date(r["a"].format(i,"yyyy-MM-dd")+" 23:59:59")])}},{text:this.$t("missing.thisMonth"),onClick:function(t){var e=new Date,a=e.getFullYear(),i=e.getMonth()+1,o=new Date("".concat(a,"-").concat(i,"-01")),n=new Date("".concat(a,"-").concat(i,"-01 00:00:00"));n.setMonth(n.getMonth()+1),n=new Date(n.getTime()-1e3),t.$emit("pick",[new Date(r["a"].format(o,"yyyy-MM-dd")+" 00:00:00"),new Date(r["a"].format(n,"yyyy-MM-dd")+" 23:59:59")])}},{text:this.$t("missing.lastMonth"),onClick:function(t){var e=new Date;e.setMonth(e.getMonth()-1);var a=e.getFullYear(),i=e.getMonth()+1,o=new Date(new Date(a,i,1)-1).getDate(),n=new Date("".concat(a,"-").concat(i,"-01")),s=new Date("".concat(a,"-").concat(i,"-").concat(o));t.$emit("pick",[new Date(r["a"].format(n,"yyyy-MM-dd")+" 00:00:00"),new Date(r["a"].format(s,"yyyy-MM-dd")+" 23:59:59")])}}]}}},watch:{dateRange:function(t){null==t?this.$emit("input",[]):this.$emit("input",t)},value:function(t){this.dateRange=t},date:function(t){this.$emit("input",t)},month:function(t){this.$emit("input",t)}},methods:{onChange:function(t){this.$emit("input",t)}},mounted:function(){"date"==this.dateType?this.date=this.value:"month"==this.dateType?this.month=this.value:this.dateRange=this.value}},l=s,c=(a("e716"),a("2877")),d=Object(c["a"])(l,i,o,!1,null,"5dbb8594",null);e["a"]=d.exports},"4c3c":function(t,e,a){"use strict";a("4e82");e["a"]={data:function(){return{sortConfig:{sortMethod:function(t){var e=t.data,a=t.sortList,i=a[0],o=i.property,r=i.order,n=[];return n="desc"===r?e.sort((function(t,e){var a=t[o],i=e[o];if(isNaN(a)&&!isNaN(Date.parse(a))&&isNaN(i)&&!isNaN(Date.parse(i)))return Date.parse(i)-Date.parse(a);if(a=parseFloat(a),i=parseFloat(i),isNaN(a)||isNaN(i)){var r=e[o]+"";return r.localeCompare(t[o])}return i-a})):"asc"===r?e.sort((function(t,e){var a=t[o],i=e[o];if(isNaN(a)&&!isNaN(Date.parse(a))&&isNaN(i)&&!isNaN(Date.parse(i)))return Date.parse(a)-Date.parse(i);if(a=parseFloat(t[o]),i=parseFloat(e[o]),isNaN(a)||isNaN(i)){var r=t[o]+"";return r.localeCompare(e[o])}return a-i})):e.sort(),n}}}}}},"5aff":function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"h",(function(){return o})),a.d(e,"l",(function(){return r})),a.d(e,"k",(function(){return n})),a.d(e,"c",(function(){return s})),a.d(e,"d",(function(){return l})),a.d(e,"e",(function(){return c})),a.d(e,"f",(function(){return d})),a.d(e,"g",(function(){return m})),a.d(e,"m",(function(){return u})),a.d(e,"i",(function(){return h})),a.d(e,"a",(function(){return p})),a.d(e,"j",(function(){return f}));var i="#2D9F28",o="#89C6F2",r="#FFC65E",n="red",s="#1EBEFF",l="#E505F7",c="#40A703",d="#F27908",m="#F180D1",u="#0F1F46",h="#000000",p={backgroundColor:"rgba(255,255,255,0.85)",borderColor:"transparent",textStyle:{fontSize:12,color:"#000"},padding:2},f=function(t,e,a,i,o){var r=t[0],n=o.contentSize,s=o.viewSize;return r+10>s[0]-n[0]?r=r-n[0]-10:r+=10,[r,"0%"]}},"80f4":function(t,e,a){"use strict";var i=a("32eb");e["a"]=i["a"]},"945e":function(t,e,a){"use strict";var i=function(){var t=this,e=t._self._c;return e("div",{ref:"chartId",staticClass:"full"})},o=[],r=a("ade3"),n=a("5530"),s=(a("14d9"),a("b0c0"),a("e9c4"),a("a9e3"),a("b680"),a("b64b"),a("d3b7"),a("159b"),a("43c8")),l=a.n(s),c=a("2f62"),d=a("c276"),m=a("5101"),u=a("5aff"),h={name:"FuelLeakOilEcharts",computed:Object(n["a"])({},Object(c["b"])(["isZh"])),methods:{initChart:function(){var t=this;this.distance=[],this.recvtime=[],this.veo=[],this.totalad=[],this.notRunOil=[],this.oil1=[],this.oil2=[],this.oil3=[],this.oil4=[],this.devStates=[],this.devReissue=[],this.markPointData=[],this.markPointDataOil1=[],this.markPointDataOil2=[],this.markPointDataOil3=[],this.markPointDataOil4=[],this.markPointDataOil99=[],this.disMin=0,this.totalDistanceMin=0;var e=this.$t("reportForm.oil2"),a=this.$t("reportForm.oil3"),i=this.$t("reportForm.oil4");this.selectedLegend=Object(r["a"])(Object(r["a"])(Object(r["a"])({},e,!1),a,!1),i,!1),this.chartsIns=l.a.init(this.$refs.chartId),this.chartsIns.setOption(this.getChartsOption(),!0),this.chartsIns.getZr().on("click",(function(e){var a=[e.offsetX,e.offsetY];if(t.chartsIns.containPixel("grid",a)&&t.recvtime.length){var i=t.chartsIns.convertFromPixel({seriesIndex:0},[e.offsetX,e.offsetY])[0];t.$emit("select-index",i)}}))},updateChartsOption:function(t,e){var a=this,i=[],o=[],r=[],n=[],s=[],l=[],c=[],u=[],h=[],p=[],f=[],v=0;t.forEach((function(t,e){t.totaldistance=t.totaldistance/1e3,t.totalad=t.totalad/100,t.ad0=t.ad0/100,t.ad1=t.ad1/100,t.ad2=t.ad2/100,t.ad3=t.ad3/100,0==e&&(v=t.totaldistance),l.push(t.ad0),c.push(t.ad1),u.push(t.ad2),h.push(t.ad3),p.push(t.strstatus),f.push(0==t.reissue?a.$t("header.no"):a.$t("header.yes")),n.push(t.totalad),s.push(t.totalnotrunningad),o.push(m["a"].longToLocalDateTimeStr(t.updatetime)),r.push(Number((t.speed/1e3).toFixed(0))),i.push(Number((t.totaldistance-v).toFixed(3)))})),this.distance=i,this.recvtime=o,this.veo=r,this.totalad=n,this.notRunOil=s,this.oil1=l,this.oil2=c,this.oil3=u,this.oil4=h,this.devStates=p,this.devReissue=f,e&&(e=JSON.parse(JSON.stringify(e)),e.forEach((function(t){t.eoil=100*t.eoil,t.soil=100*t.soil}))),this.markPointData=Object(d["a"])(t,e,0),this.totalDistanceMin=v,this.chartsIns.setOption(this.getChartsOption(),!0),this.chartsIns.resize()},resize:function(){this.chartsIns.resize()},getChartsOption:function(){var t=this.$t("reportForm.totalOil"),e=this.$t("reportForm.notRunTotalad"),a=this.$t("reportForm.speed"),i=this.$t("reportForm.mileage"),o=this.$t("reportForm.time"),r=this.$t("reportForm.oil1"),s=this.$t("reportForm.oil2"),l=this.$t("reportForm.oil3"),c=this.$t("reportForm.oil4"),m=this.$t("reportForm.status"),h=this.$t("reportForm.reissue");this.totalDistanceMin;return{grid:{top:40,left:60,right:60,bottom:20},tooltip:Object(n["a"])(Object(n["a"])({trigger:"axis"},u["a"]),{},{formatter:function(n){var m="<div>".concat(n[0].name,"</div>");for(var h in n){var p=n[h].seriesName,f=n[h].value;p&&p!=o&&(m+=p==i?Object(d["i"])(u["b"],p,f,"km"):p==a?Object(d["i"])(u["h"],p,f,"km/h"):p==t?Object(d["i"])(u["k"],p,f,"L"):p==e?Object(d["i"])(u["c"],p,f,"L"):p==r?Object(d["i"])(u["d"],p,f,""):p==s?Object(d["i"])(u["e"],p,f,""):p==l?Object(d["i"])(u["f"],p,f,""):p==c?Object(d["i"])(u["g"],p,f,""):Object(d["i"])(u["m"],p,f,""))}return'<div style="width:230px">'.concat(m,"</div>")}}),legend:{data:[a,i,t,e,r,s,l,c],selected:this.selectedLegend,x:"left"},xAxis:[{type:"category",boundaryGap:!1,axisLine:{onZero:!1},data:this.recvtime}],yAxis:[{name:this.$t("reportForm.oil"),type:"value",nameTextStyle:10,nameGap:5,axisLabel:{formatter:"{value} L"}},{name:i,type:"value",nameTextStyle:10,nameGap:2,min:this.disMin,axisLabel:{formatter:"{value} km"},axisTick:{show:!1}}],series:[{name:o,type:"line",symbol:"none",yAxisIndex:1,color:"#F0805A",smooth:!0,data:this.recvtime},{name:a,type:"line",symbol:"none",yAxisIndex:1,smooth:!0,color:u["h"],data:this.veo},{name:i,type:"line",symbol:"none",yAxisIndex:1,color:u["b"],smooth:!0,data:this.distance},{smooth:!0,name:t,type:"line",symbol:"none",color:u["k"],data:this.totalad,markPoint:{data:this.markPointData,symbolSize:36,symbolKeepAspect:!0}},{smooth:!0,name:e,type:"line",symbol:"none",color:u["c"],data:this.notRunOil,markPoint:{data:this.markPointDataOil99,symbolSize:36,symbolKeepAspect:!0}},{smooth:!0,name:r,type:"line",symbol:"none",color:u["d"],data:this.oil1,markPoint:{data:this.markPointDataOil1,symbolSize:36,symbolKeepAspect:!0}},{smooth:!0,name:s,type:"line",symbol:"none",color:u["e"],data:this.oil2,markPoint:{data:this.markPointDataOil2,symbolSize:36,symbolKeepAspect:!0}},{smooth:!0,name:l,type:"line",symbol:"none",color:u["f"],data:this.oil3,markPoint:{data:this.markPointDataOil3,symbolSize:36,symbolKeepAspect:!0}},{smooth:!0,name:c,type:"line",symbol:"none",color:u["g"],data:this.oil4,markPoint:{data:this.markPointDataOil4,symbolSize:36,symbolKeepAspect:!0}},{smooth:!0,name:m,type:"line",symbol:"none",color:u["m"],data:this.devStates},{smooth:!0,name:h,type:"line",symbol:"none",color:u["m"],data:this.devReissue}]}}},mounted:function(){var t=this;this.$nextTick((function(){t.initChart()}))}},p=h,f=a("2877"),v=Object(f["a"])(p,i,o,!1,null,null,null);e["a"]=v.exports},"95f3":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"report-form full fuelLeakOil"},[e("div",{staticClass:"report-form-inner"},[e("div",{staticClass:"report-form-inner-header",staticStyle:{height:"35px"}},[e("div",{staticClass:"f_left"},[e("MultiChoiceVehicle",{on:{onSelectDevice:t.onSelectDevice}})],1),e("div",{staticClass:"f_left"},[e("SelectDate",{attrs:{dateType:"daterange"},model:{value:t.dateRange,callback:function(e){t.dateRange=e},expression:"dateRange"}})],1),e("div",{staticClass:"f_left",staticStyle:{width:"100px"}},[e("el-select",{model:{value:t.oilindex,callback:function(e){t.oilindex=e},expression:"oilindex"}},t._l(t.oilIndexList,(function(t){return e("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),e("div",{staticClass:"f_left",staticStyle:{width:"100px"}},[e("el-select",{model:{value:t.oilstate,callback:function(e){t.oilstate=e},expression:"oilstate"}},[e("el-option",{attrs:{label:t.$t("reportForm.all"),value:99}}),e("el-option",{attrs:{label:t.$t("reportForm.refuel"),value:1}}),e("el-option",{attrs:{label:t.$t("reportForm.leak"),value:-1}})],1)],1),e("div",{staticClass:"f_left"},[e("el-button",{attrs:{loading:t.loading,type:"primary"},on:{click:t.handleQuery}},[t._v(t._s(t.$t("common.query"))+" ")])],1),e("div",{staticClass:"f_left"},[e("el-popover",{attrs:{placement:"bottom",width:"236",trigger:"click"}},[e("div",[e("el-button",{staticStyle:{width:"100px"},attrs:{slot:"reference",type:"primary",plain:"",loading:t.exportLoading1},on:{click:t.exportData},slot:"reference"},[t._v(t._s(t.$t("common.summary")))]),e("el-button",{staticStyle:{width:"100px"},attrs:{slot:"reference",type:"primary",loading:t.exportLoading2,plain:""},on:{click:t.exportDetailData},slot:"reference"},[t._v(t._s(t.$t("reportForm.detailed")))])],1),e("el-button",{attrs:{slot:"reference",type:"primary"},slot:"reference"},[t._v(t._s(t.$t("common.export")))])],1)],1)]),e("div",{staticClass:"report-form-inner-content",staticStyle:{top:"45px"}},[e("div",[e("div",[e("vxe-table",{ref:"xTable",attrs:{"sort-config":t.sortConfig,"menu-config":t.tableMenu,"auto-resize":"",border:"",resizable:"","show-overflow":"","highlight-hover-row":"",height:"auto",data:t.totalList,size:"mini"},on:{"menu-click":t.handleClickTableMenu}},[e("vxe-table-column",{attrs:{type:"seq",width:"55",title:t.$t("reportForm.index"),fixed:"left"}}),e("vxe-table-column",{attrs:{type:"expand",width:"36"},scopedSlots:t._u([{key:"content",fn:function(a){var i=a.row;a.rowIndex;return[[e("div",{staticStyle:{"padding-left":"60px"}},[e("vxe-table",{attrs:{"menu-config":t.tableMenu,border:"",resizable:"","auto-resize":"",height:i.tableHeight,"show-overflow":"","highlight-current-row":"","highlight-hover-row":"",size:"mini",data:i.detaileList},on:{"menu-click":t.handleClickTableMenu,"cell-click":t.handleClickRow}},[e("vxe-table-column",{attrs:{field:"statisticsday",width:"300",title:t.$t("reportForm.time"),sortable:""}}),e("vxe-table-column",{attrs:{field:"oilIndexStr",width:"80",title:t.$t("reportForm.oilIndex"),sortable:""}}),e("vxe-table-column",{attrs:{field:"oilStatus",type:"html",width:"70",title:t.$t("reportForm.status"),sortable:""}}),e("vxe-table-column",{attrs:{field:"oil",formatter:t.numberToFixed2,align:"right",width:"80",title:t.$t("reportForm.oil"),sortable:""}}),e("vxe-table-column",{attrs:{field:"soil",formatter:t.numberToFixed2,align:"right",width:"80",title:t.$t("reportForm.startOil"),sortable:""}}),e("vxe-table-column",{attrs:{field:"eoil",formatter:t.numberToFixed2,align:"right",width:"80",title:t.$t("reportForm.endOil"),sortable:""}}),e("vxe-table-column",{attrs:{field:"address",title:t.$t("reportForm.address")}})],1)],1)]]}}])}),e("vxe-table-column",{attrs:{field:"devicename",title:t.$t("alarm.devName"),sortable:""}}),e("vxe-table-column",{attrs:{field:"deviceid",title:t.$t("alarm.devNum"),sortable:""}}),e("vxe-table-column",{attrs:{field:"creater",title:t.$t("reportForm.creater"),sortable:""},scopedSlots:t._u([{key:"default",fn:function(a){return[e("el-popover",{attrs:{placement:"bottom",trigger:"click"}},[e("div",{staticClass:"parents-wrapper"},t._l(t.parentsList,(function(a){return e("div",{key:a.username},[t._v(t._s(a.username)+"("+t._s(a.usertypeStr)+")")])})),0),e("el-button",{staticStyle:{color:"#000000"},attrs:{slot:"reference",type:"text"},on:{click:function(e){return t.queryParents(a.row.creater)}},slot:"reference"},[t._v(t._s(a.row.creater))])],1)]}}])}),e("vxe-table-column",{attrs:{field:"groupname",title:t.$t("reportForm.groupName"),sortable:""}}),e("vxe-table-column",{attrs:{field:"begintimeStr",title:t.$t("videoback.startTime"),width:"155",sortable:""}}),e("vxe-table-column",{attrs:{field:"endtimeStr",title:t.$t("videoback.endTime"),width:"155",sortable:""}}),e("vxe-table-column",{attrs:{field:"refuelVolume",formatter:t.numberToFixed2,align:"right",title:t.$t("home.refuelVolume"),sortable:""}}),e("vxe-table-column",{attrs:{field:"leakageFuel",formatter:t.numberToFixed2,align:"right",title:t.$t("home.leakageFuel"),sortable:""}})],1)],1),e("div",[e("div",{staticClass:"fuel-leak-oil-month-map"},[e("ReportMap",{ref:"mapIns"})],1),e("div",{staticClass:"fuel-leak-oil-month-echarts"},[e("FuelLeakOilEcharts",{ref:"echartsIns",on:{"select-index":t.onSelectIndex}})],1)])])])])])},o=[],r=(a("14d9"),a("4e82"),a("a9e3"),a("d3b7"),a("159b"),a("d462")),n=a("e561"),s=a("80f4"),l=a("945e"),c=a("1c31"),d=a("7cf8"),m=a("5101"),u=a("c276"),h=a("6e52"),p=a("4c3c"),f=a("a05b"),v=a("0c87"),b={name:"fuelLeakOil",data:function(){return{deviceid:"",tableTitle:"",dateRange:[new Date,new Date],loading:!1,exportLoading1:!1,exportLoading2:!1,totalList:[],oilindex:"0",oilstate:99,oilIndexList:[{label:this.$t("reportForm.totalDriving"),value:"0"},{label:this.$t("reportForm.tank1"),value:"1"},{label:this.$t("reportForm.tank2"),value:"2"},{label:this.$t("reportForm.tank3"),value:"3"},{label:this.$t("reportForm.tank4"),value:"4"},{label:this.$t("reportForm.totalNotRun"),value:"99"}]}},mixins:[p["a"],f["a"],v["a"]],components:{MultiChoiceVehicle:n["a"],SelectDate:r["a"],ReportMap:s["a"],FuelLeakOilEcharts:l["a"]},watch:{month:function(){this.loading||this.handleQuery()}},methods:{numberToFixed2:u["ob"],onSelectDevice:function(t){this.deviceids=t},onSelectIndex:function(t){this.$refs.mapIns.moveingCarMarker(t)},handleClickRow:function(t){var e=this,a=t.row,i=m["a"].longToLocalDateTimeStr(a.begintime-6e5),o=m["a"].longToLocalDateTimeStr(a.endtime+6e5),r={deviceid:a.deviceid,begintime:i,endtime:o,timezone:m["a"].getOffset()};Object(d["X"])(r).then((function(t){var i=t.records;if(i&&i.length){e.$refs.mapIns.carMarkersAndLineLayerToMap(i,a),e.$refs.echartsIns.updateChartsOption(i,[a]);var o=m["a"].longToLocalDateTimeStr(a.begintime),r=m["a"].longToLocalDateTimeStr(a.endtime),n={deviceid:a.deviceid,begintime:o,endtime:r,timezone:m["a"].getOffset()};Object(d["X"])(n).then((function(t){var a=t.records;a&&e.$refs.mapIns.addFuleLine(a)}))}else e.$refs.mapIns.markersAndLineLayerToMap([]),e.$refs.echartsIns.updateChartsOption([])}))},handleQuery:function(){var t=this,e=this.deviceids,a=this.dateRange;if(e){var i=m["a"].format(a[0],"yyyy-MM-dd"),o=m["a"].format(a[1],"yyyy-MM-dd"),r={startday:i,endday:o,oilstate:this.oilstate,oilindex:Number(this.oilindex),deviceids:e,offset:m["a"].getOffset()};this.loading=!0,Object(c["eb"])(r).then((function(e){var a=e.records,r=e.addressmap;t.addressmap=r,t.loading=!1;var n=[];a&&a.length&&(a.forEach((function(e){var a=e.deviceid,n=h["a"].deviceInfos[a],s=n.devicename,l=h["a"].getShowName(n.creater),c=n.groupname,d=e.records,p=0,f=0;e.devicename=s,e.creater=l,e.groupname=c,e.detaileList=d,e.tableHeight=0==d.length?72:36*d.length+36,d.sort((function(t,e){return t.begintime-e.begintime})),d.forEach((function(e){e.soil=e.soil/100,e.eoil=e.eoil/100;var i=Number(Math.abs(e.eoil-e.soil)),o="";-1==e.oilstate?(o='<span style="color:red;">'.concat(t.$t("reportForm.leak"),"</span>"),f+=Number(i),e.oil=-i):1==e.oilstate&&(o=t.$t("reportForm.refuel"),p+=Number(i),e.oil=i),e.devicename=s,e.deviceid=a,e.oilIndexStr=Object(u["V"])(e.oilindex),e.oilStatus=o,e.statisticsday=m["a"].longToLocalDateTimeStr(e.begintime)+" - "+m["a"].longToLocalDateTimeStr(e.endtime);var n=Object(u["M"])(r,e.slat,e.slon);e.address=n||"-"})),d.length>0?(e.begintimeStr=m["a"].longToLocalDateTimeStr(d[0].begintime),e.endtimeStr=m["a"].longToLocalDateTimeStr(d[d.length-1].endtime)):(e.begintimeStr=i+" 00:00:00",e.endtimeStr=o+" 23:59:59"),e.refuelVolume=Number(p),e.leakageFuel=Number(f)})),a.sort((function(t,e){var a=0;return a=e.refuelVolume+Math.abs(e.leakageFuel)-(t.refuelVolume+Math.abs(t.leakageFuel)),0==a&&(a=e.devicename.localeCompare(t.devicename)),a})),n=a),t.totalList=n,1==n.length&&t.$refs.xTable.setRowExpand(n[0],!0)})).catch((function(t){console.log(t)}))}else this.$XModal.message({message:this.$t("tips.selectDevice"),status:"error",zIndex:9999})},exportData:function(){if(this.totalList.length>0){var t=[[this.$t("reportForm.index"),this.$t("alarm.devName"),this.$t("alarm.devNum"),this.$t("reportForm.creater"),this.$t("reportForm.groupName"),this.$t("videoback.startTime"),this.$t("videoback.endTime"),this.$t("home.refuelVolume"),this.$t("home.leakageFuel")]];this.totalList.forEach((function(e,a){var i=[];i.push(a+1),i.push(e.devicename),i.push(e.deviceid),i.push(e.creater),i.push(e.groupname),i.push(e.begintimeStr),i.push(e.endtimeStr),i.push(Object(u["ob"])(e.refuelVolume)),i.push(Object(u["ob"])(e.leakageFuel)),t.push(i)}));var e={title:this.$t("reportForm.fuelLeakOil"),data:t};this.exportLoading1=!0,new ExcelCls(e).exportExcel(this)}},exportDetailData:function(){var t=this;if(this.totalList.length>0){var e=[[this.$t("reportForm.index"),this.$t("alarm.devName"),this.$t("alarm.devNum"),this.$t("reportForm.creater"),this.$t("reportForm.groupName"),this.$t("reportForm.time"),this.$t("reportForm.oilIndex"),this.$t("reportForm.status"),this.$t("reportForm.oil"),this.$t("reportForm.startOil"),this.$t("reportForm.endOil"),this.$t("reportForm.address")]];this.totalList.forEach((function(a,i){var o=a.refuelVolume,r=a.leakageFuel;if(a.records.forEach((function(i,o){var r=[];r.push(o+1),r.push(a.devicename),r.push(a.deviceid),r.push(a.creater),r.push(a.groupname),r.push(i.statisticsday),r.push(i.oilIndexStr),-1==i.oilstate?r.push(t.$t("reportForm.leak")):1==i.oilstate&&r.push(t.$t("reportForm.refuel")),r.push(Object(u["ob"])(i.oil)),r.push(Object(u["ob"])(i.soil)),r.push(Object(u["ob"])(i.eoil)),r.push(i.address),e.push(r)})),a.records.length>0){var n=[];n.push(""),n.push(""),n.push(""),n.push(""),n.push(""),n.push(""),n.push(""),n.push(t.$t("reportForm.totalFuelVolume")+":"),n.push(Object(u["ob"])(o)+"L"),n.push(t.$t("reportForm.totalLeakVolume")+":"),n.push(Object(u["ob"])(r)+"L"),n.push(""),e.push(n)}}));var a={title:this.$t("reportForm.fuelLeakOil"),data:e};this.exportLoading2=!0,new ExcelCls(a).exportExcel(this)}}},mounted:function(){this.deviceids=[]}},g=b,y=(a("203c"),a("2877")),k=Object(y["a"])(g,i,o,!1,null,null,null),x=k.exports;e["default"]=x},cc31:function(t,e,a){},d462:function(t,e,a){"use strict";var i=a("2ddc");e["a"]=i["a"]},e561:function(t,e,a){"use strict";var i=a("ea22");e["a"]=i["a"]},e716:function(t,e,a){"use strict";a("271ae")}}]);