(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-028a828b"],{1015:function(t,e,i){},3963:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"report-form full posi-records"},[e("div",{staticClass:"report-form-inner"},[e("div",{staticClass:"report-form-inner-header",staticStyle:{height:"35px"}},[e("div",{staticClass:"f_left"},[e("MultiChoiceVehicle",{on:{onSelectDevice:t.onSelectDevice}})],1),e("div",{staticClass:"f_left"},[e("el-button",{attrs:{loading:t.loading,type:"primary"},on:{click:t.handleQuery}},[t._v(t._s(t.$t("common.query")))])],1),e("div",{staticClass:"f_left"},[e("el-button",{attrs:{type:"primary",loading:t.exportLoading1},on:{click:t.exportData}},[t._v(t._s(t.$t("common.export")))])],1),e("div",{staticClass:"f_center"}),e("div",{staticClass:"f_right"},[e("el-button",{attrs:{type:"info",size:"mini"},on:{click:function(e){t.importDialog=!0}}},[t._v(t._s(t.$t("common.importQuery")))])],1),e("div",{staticClass:"f_right"},[e("el-button",{attrs:{type:"info",size:"mini",loading:t.addressLoading},on:{click:t.queryAllAddress}},[t._v(t._s(t.$t("common.oneClickQueryAddress")))])],1)]),e("div",{staticClass:"report-form-inner-tabs"},[e("el-tabs",{model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[e("el-tab-pane",{attrs:{label:t.$t("bgManage.deviceList")+"(".concat(t.totalList.length,")"),name:"tabTotal"}}),e("el-tab-pane",{attrs:{label:"",name:"details"}})],1),e("div",{directives:[{name:"show",rawName:"v-show",value:"details"==t.activeName,expression:"activeName=='details'"}],staticClass:"tableTitle"},[e("b",{domProps:{textContent:t._s(t.tableTitle)}}),t._v("("+t._s(t.detailsList.length)+") ")]),e("div",{staticClass:"table-btns"})],1),e("div",{staticClass:"report-form-inner-content",staticStyle:{top:"80px",bottom:"0px"}},[e("div",{style:t.statisticsStyle},[e("vxe-table",{staticClass:"mytable-scrollbar",attrs:{border:"","menu-config":t.tableMenu,resizable:"","auto-resize":"","show-overflow":"","highlight-hover-row":"",size:"mini",height:"auto",data:t.totalList,"sort-config":t.sortConfig},on:{"menu-click":t.handleClickTableMenu}},[e("vxe-table-column",{attrs:{title:t.$t("reportForm.action"),width:"70"},scopedSlots:t._u([{key:"default",fn:function(i){return[e("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(e){return t.handleClickRow(i.row)}}},[t._v(t._s(t.$t("reportForm.detailed")))])]}}])}),e("vxe-table-column",{attrs:{type:"seq",width:"60",title:t.$t("reportForm.index")}}),e("vxe-table-column",{attrs:{field:"devicename",title:t.$t("alarm.devName"),width:"100",sortable:""}}),e("vxe-table-column",{attrs:{field:"deviceid",title:t.$t("alarm.devNum"),width:"100",sortable:""}}),e("vxe-table-column",{attrs:{field:"creater",title:t.$t("reportForm.creater"),width:"100",sortable:""},scopedSlots:t._u([{key:"default",fn:function(i){return[e("el-popover",{attrs:{placement:"bottom",trigger:"click"}},[e("div",{staticClass:"parents-wrapper"},t._l(t.parentsList,(function(i){return e("div",{key:i.username},[t._v(t._s(i.username)+"("+t._s(i.usertypeStr)+")")])})),0),e("el-button",{staticStyle:{color:"#000000"},attrs:{slot:"reference",type:"text"},on:{click:function(e){return t.queryParents(i.row.creater)}},slot:"reference"},[t._v(t._s(i.row.creater))])],1)]}}])}),e("vxe-table-column",{attrs:{field:"groupname",title:t.$t("reportForm.groupName"),width:"100",sortable:""}}),e("vxe-table-column",{attrs:{field:"offlineDuration",title:t.$t("alarm.onlineStatus"),width:"90",sortable:""}}),e("vxe-table-column",{attrs:{field:"speed",align:"right",formatter:t.numberToFixed2,title:t.$t("reportForm.speed"),width:"80",sortable:""}}),e("vxe-table-column",{attrs:{field:"isEffective",title:t.$t("common.positioning"),width:"80",sortable:""}}),e("vxe-table-column",{attrs:{field:"parkdurationStr",align:"right",title:t.$t("reportForm.parkingDuration"),width:"130",sortable:""}}),e("vxe-table-column",{attrs:{field:"updatetimeStr",title:t.$t("monitor.lastUpdate"),width:"156",sortable:""}}),e("vxe-table-column",{attrs:{field:"validpoistiontimeStr",title:t.$t("monitor.validpoistionTime"),width:"156",sortable:""}}),e("vxe-table-column",{attrs:{field:"strstatus",title:t.$t("reportForm.status"),width:"100",sortable:""}}),e("vxe-table-column",{attrs:{field:"positype",title:t.$t("reportForm.posiType"),width:"100",sortable:""}}),e("vxe-table-column",{attrs:{field:"address",title:t.$t("reportForm.address"),width:"200"}}),e("vxe-table-column",{attrs:{field:"callon",title:t.$t("reportForm.callon"),width:"100"}}),e("vxe-table-column",{attrs:{field:"callat",title:t.$t("reportForm.callat"),width:"100"}}),e("vxe-table-column",{attrs:{field:"direction",title:t.$t("reportForm.direction"),width:"100"}})],1)],1),e("div",{style:t.detailsStyle},[e("vxe-table",{staticClass:"mytable-scrollbar",attrs:{border:"",resizable:"","auto-resize":"","show-overflow":"","highlight-hover-row":"",size:"mini",height:"auto",data:t.detailsList}},[e("vxe-table-column",{attrs:{type:"seq",width:"60",title:t.$t("reportForm.index")}}),e("vxe-table-column",{attrs:{field:"updatetimeStr",title:t.$t("reportForm.time"),width:"140",sortable:""}}),e("vxe-table-column",{attrs:{field:"address",title:t.$t("reportForm.address")},scopedSlots:t._u([{key:"default",fn:function(i){return[e("span",{staticStyle:{"text-decoration":"underline",cursor:"pointer",color:"#388CFE"},domProps:{textContent:t._s(i.row.address)},on:{click:function(e){return t.seeMap(i.row)}}})]}}])}),e("vxe-table-column",{attrs:{field:"positype",title:t.$t("reportForm.posiType"),sortable:""}}),e("vxe-table-column",{attrs:{field:"callon",title:t.$t("reportForm.callon"),width:"100",sortable:""}}),e("vxe-table-column",{attrs:{field:"callat",title:t.$t("reportForm.callat"),width:"100",sortable:""}}),e("vxe-table-column",{attrs:{field:"direction",title:t.$t("reportForm.direction"),width:"100",sortable:""}}),e("vxe-table-column",{attrs:{field:"speed",align:"right",formatter:t.numberToFixed2,title:t.$t("reportForm.speed"),width:"100",sortable:""}}),e("vxe-table-column",{attrs:{field:"strstatus",title:t.$t("reportForm.status"),sortable:""}})],1)],1)]),e("el-dialog",{attrs:{title:t.$t("reportForm.seeMap"),visible:t.dialogMap,width:"500",center:"","close-on-click-modal":!1},on:{"update:visible":function(e){t.dialogMap=e}}},[e("div",{staticStyle:{width:"100%",height:"400px"}},[e("ReportMap",{ref:"mapIns"})],1)]),e("ImportDeviceidsDialog",{on:{"on-import":t.onImportDevice},model:{value:t.importDialog,callback:function(e){t.importDialog=e},expression:"importDialog"}})],1)])},o=[],s=i("5530"),r=(i("caad"),i("14d9"),i("4e82"),i("d3b7"),i("159b"),i("4795"),i("6e52")),n=i("e561"),l=i("80f4"),c=i("5101"),d=i("5bca"),p=i("1c31"),u=i("7cf8"),m=i("c276"),h=i("2f62"),f=i("a05b"),v=i("0c87"),b={name:"posiReport",data:function(){return{loading:!1,exportLoading1:!1,exportLoading2:!1,qeuryAddressLoading:!1,importDialog:!1,activeName:"tabTotal",tableTitle:"",addressLoading:!1,dialogMap:!1,dateRange:[new Date,new Date],totalList:[],detailsList:[],tableHeight:$(window).height()-120,sortConfig:{sortMethod:function(t){var e=t.data,i=t.sortList,a=i[0],o=a.property,s=a.order,r=Date.now(),n=[];return n="desc"===s?"offlineDuration"==o?e.sort((function(t,e){return r-e.updatetime-(r-t.updatetime)})):"parkdurationStr"==o?e.sort((function(t,e){return e.parkduration-t.parkduration})):e.sort((function(t,e){var i=e[o]+"";return i.localeCompare(t[o])})):"asc"===s?"offlineDuration"==o?e.sort((function(t,e){return r-t.updatetime-(r-e.updatetime)})):"parkdurationStr"==o?e.sort((function(t,e){return t.parkduration-e.parkduration})):e.sort((function(t,e){var i=t[o]+"";return i.localeCompare(e[o])})):e.sort(),n}}}},components:{MultiChoiceVehicle:n["a"],ReportMap:l["a"],ImportDeviceidsDialog:d["a"]},mixins:[f["a"],v["a"]],methods:{numberToFixed2:m["ob"],getPosiType:function(t){var e=Object(m["C"])(t),i=t.gotsrc,a=0===t.rxlevel?"":"/"+this.$t("monitor.signal")+t.rxlevel+"%";if("gps"==i&&t.gpsvalidnum>0&&(e+=" "+String(t.gpsvalidnum)+this.$t("monitor.n")),t.radius>0){var o=(""!==e?"/":"")+this.$t("monitor.around")+t.radius+this.$t("common.metre");e+=o}var s="";"gps"==t.gotsrc&&0!=t.altitude&&(s="/"+this.$t("reportForm.altitude")+t.altitude+this.$t("reportForm.altitudeunit"),e+=s),e+=a;var r=t.status,n=1==this.$store.state.userSetting.mapshownotreallocation;return n&&4!=(4&r)&&"gps"===t.gotsrc&&(e+=" "+this.$t("monitor.notRealtime")),e},onSelectDevice:function(t){this.deviceids=t},onImportDevice:function(t){var e=this,i=this.isZh,a=r["a"].deviceInfos,o=[],n=Object(m["s"])(a),l=n.simMap,d=n.iccidMap;t.forEach((function(t,n){var p=Object(m["mb"])(a,l,d,t),u=r["a"].lastPositions[p.deviceid];if(p)if(u){var h=Date.now();u.index=n+1,u.devicename=p.devicename,u.creater=r["a"].getShowName(p.creater),u.groupname=p.groupname,u.updatetimeStr=c["a"].longToLocalDateTimeStr(u.updatetime),u.validpoistiontimeStr=c["a"].longToLocalDateTimeStrUnderLine(u.validpoistiontime),u.isEffective=4==(4&u.status)?e.$t("header.yes"):e.$t("header.no"),u.callon=Object(m["Ob"])(u.callon),u.callat=Object(m["Ob"])(u.callat);var f=Object(m["J"])(u);u.address=f||"",u.disabled=!!f,u.positype=e.getPosiType(u),u.direction=Object(m["n"])(u.course);var v=Object(m["F"])(u,h);0==v?u.offlineDuration=Object(m["U"])(u)+" "+Object(m["Ib"])(h-u.updatetime):1==v?u.offlineDuration=e.$t("monitor.online",!0):2==v&&(u.offlineDuration=e.$t("monitor.sleep")),u.speed=u.speed/1e3,u.parkdurationStr=Object(m["Ib"])(u.parkduration,!0),i||(u.strstatus=Object(m["z"])(u.strstatusen)),u.data={deviceid:t,begintime:c["a"].longToLocalDateTimeStr(u.updatetime-216e5),endtime:u.updatetimeStr,interval:300,timezone:c["a"].getOffset()},null==f&&points.push({lat:u.callat,lon:u.callon}),o.push(Object(s["a"])({},u))}else o.push({index:++n,deviceid:p.deviceid,devicename:p.devicename,creater:p.creater,groupname:p.groupname,data:null,address:"-",isEffective:"-",validpoistiontimeStr:"-",updatetimeStr:"-",offlineDuration:e.$t("common.notReported"),parkdurationStr:"-",speed:"-",positype:"-",direction:"-",callon:"-",callat:"-",strstatus:"-"})})),this.totalList=o,this.activeName="tabTotal"},handleQuery:function(){var t=this,e=this.deviceids;if(e.length>0){"tabTotal"!==this.activeName&&(this.activeName="tabTotal");var i=this.isZh;this.loading=!0,this.queryDetailDateRange=null,Object(p["l"])(e).then((function(a){var o=a.status,s=a.records;t.loading=!1;var n=[],l=[];if(0==o&&s){var d=[];s.forEach((function(e,a){if(e){var o=Date.now(),s=e.deviceid,p=r["a"].deviceInfos[s];d.push(s),e.index=a+1,e.devicename=p.devicename,e.creater=r["a"].getShowName(p.creater),e.groupname=p.groupname,e.updatetimeStr=c["a"].longToLocalDateTimeStr(e.updatetime),e.validpoistiontimeStr=c["a"].longToLocalDateTimeStrUnderLine(e.validpoistiontime),e.isEffective=4==(4&e.status)?t.$t("header.yes"):t.$t("header.no"),e.callon=Object(m["Ob"])(e.callon),e.callat=Object(m["Ob"])(e.callat);var u=Object(m["J"])(e);e.address=u||"",e.disabled=!!u,e.positype=t.getPosiType(e),e.direction=Object(m["n"])(e.course);var h=Object(m["F"])(e,o);0==h?e.offlineDuration=Object(m["U"])(e)+" "+Object(m["Ib"])(o-e.updatetime):1==h?e.offlineDuration=t.$t("monitor.online"):2==h&&(e.offlineDuration=t.$t("monitor.sleep")),e.speed=e.speed/1e3,e.parkdurationStr=Object(m["Ib"])(e.parkduration,!0),i||(e.strstatus=Object(m["z"])(e.strstatusen)),e.data={deviceid:s,begintime:c["a"].longToLocalDateTimeStr(e.updatetime-216e5),endtime:e.updatetimeStr,interval:300,timezone:c["a"].getOffset()},null==u&&l.push({lat:e.callat,lon:e.callon}),n.push(e)}}));var p=n.length;e.forEach((function(e){if(0==d.includes(e)){var i=r["a"].deviceInfos[e];n.push({index:++p,deviceid:e,devicename:i.devicename,creater:i.creater,groupname:i.groupname,data:null,address:"-",isEffective:"-",validpoistiontimeStr:"-",updatetimeStr:"-",offlineDuration:t.$t("common.notReported"),parkdurationStr:"-",speed:"-",positype:"-",direction:"-",callon:"-",callat:"-",strstatus:"-"})}})),l.length>0&&Object(u["u"])(l).then((function(t){var e=t.points;e.forEach((function(t){var e=t.lat,i=t.lon,a=t.address;n.forEach((function(t){a&&t.callon==i&&t.callat==e&&(Object(m["pb"])(t,a),t.address=a)}))}))}))}t.totalList=n}))}else this.$XModal.message({message:this.$t("tips.selectDevice"),status:"error",zIndex:9999})},queryAllAddress:function(){var t=this,e=[];if("details"==this.activeName){var i=this.detailsList;i.forEach((function(t){var i=t.callon,a=t.callat,o=t.address;""==o&&e.push({lat:a,lon:i})})),this.addressLoading=!0,Object(u["u"])(e).then((function(e){var a=e.points;t.addressLoading=!1,a&&(a.forEach((function(t){if(t&&""!=t.address&&null!=t.address){var e=t.address,i=t.lat,a=t.lon;Object(m["pb"])({callat:i,callon:a},e)}})),i.forEach((function(t){t.address||(t.address=Object(m["J"])(t))})))})).catch((function(e){t.addressLoading=!1}))}else{var a=this.totalList;a.forEach((function(t){var i=t.callon,a=t.callat,o=t.address;""==o&&e.push({lat:a,lon:i})})),this.addressLoading=!0,Object(u["u"])(e).then((function(e){var i=e.points;t.addressLoading=!1,i&&(i.forEach((function(t){if(t&&""!=t.address&&null!=t.address){var e=t.address,i=t.lat,a=t.lon;Object(m["pb"])({callat:i,callon:a},e)}})),a.forEach((function(t){t.address||(t.address=Object(m["J"])(t))})))})).catch((function(e){t.addressLoading=!1}))}},handleClickRow:function(t){var e=this,i=t.data;if(null!=i){this.queryDetailDateRange=i.begintime+" "+i.endtime,this.activeName="details";var a=this.isZh,o=i.deviceid,s=r["a"].deviceInfos[o].devicename;this.tableTitle=s+"-"+o,Object(u["X"])(i).then((function(t){var i=t.records,r=[];null!=i&&i.length>0&&i.forEach((function(t,i){t.deviceid=o,t.index=i+1,t.devicename=s,t.updatetimeStr=c["a"].longToLocalDateTimeStr(t.updatetime),t.callon=Object(m["Ob"])(t.callon),t.callat=Object(m["Ob"])(t.callat);var n=Object(m["J"])(t);t.address=n||"",t.disabled=!!n,a||(t.strstatus=Object(m["z"])(t.strstatusen)),t.positype=e.getPosiType(t),t.direction=Object(m["n"])(t.course),t.speed=t.speed/1e3,r.push(t)})),e.detailsList=r}))}},seeMap:function(t){var e=this;this.dialogMap=!0,setTimeout((function(){e.$refs.mapIns.singleMarkerToMap(t)}),300)},exportData:function(){if("details"!=this.activeName){var t=[[this.$t("reportForm.index"),this.$t("alarm.devName"),this.$t("alarm.devNum"),this.$t("reportForm.creater"),this.$t("reportForm.groupName"),this.$t("reportForm.offlineDuration"),this.$t("reportForm.speed"),this.$t("common.positioning"),this.$t("reportForm.parkingDuration"),this.$t("monitor.lastUpdate"),this.$t("monitor.validpoistionTime"),this.$t("reportForm.status"),this.$t("reportForm.posiType"),this.$t("reportForm.address"),this.$t("reportForm.callon"),this.$t("reportForm.callat"),this.$t("reportForm.direction")]];if(0!=this.totalList.length){this.totalList.forEach((function(e,i){var a=[];a.push(i+1),a.push(e.devicename),a.push(e.deviceid),a.push(e.creater),a.push(e.groupname),a.push(e.offlineDuration),a.push(Object(m["ob"])(e.speed)),a.push(e.isEffective),a.push(e.parkdurationStr),a.push(e.updatetimeStr),a.push(e.validpoistiontimeStr),a.push(e.strstatus),a.push(e.positype),a.push(e.address),a.push(e.callon),a.push(e.callat),a.push(e.direction),t.push(a)}));var e={title:this.$t("reportForm.posiReport"),data:t,dateRange:null};this.exportLoading1=!0,new ExcelCls(e).exportExcel(this)}}else this.exportDetailsData()},exportDetailsData:function(){var t=[[this.$t("reportForm.index"),this.$t("alarm.devName"),this.$t("alarm.devNum"),this.$t("reportForm.callon"),this.$t("reportForm.callat"),this.$t("reportForm.direction"),this.$t("reportForm.speed"),this.$t("reportForm.time"),this.$t("reportForm.status"),this.$t("reportForm.posiType"),this.$t("reportForm.address")]];if(0!=this.detailsList.length){this.detailsList.forEach((function(e,i){var a=[];a.push(i+1),a.push(e.devicename),a.push(e.deviceid),a.push(e.callon),a.push(e.callat),a.push(e.direction),a.push(e.speed),a.push(e.updatetimeStr),a.push(e.strstatus),a.push(e.positype),a.push(e.address),t.push(a)}));var e={title:this.$t("reportForm.posiReport"),data:t,dateRange:null};this.exportLoading1=!0,new ExcelCls(e).exportExcel(this)}}},computed:Object(s["a"])(Object(s["a"])({},Object(h["d"])(["isZh"])),{},{statisticsStyle:function(){return{zIndex:"tabTotal"==this.activeName?999:0}},detailsStyle:function(){return{zIndex:"details"==this.activeName?999:0}}}),mounted:function(){this.deviceids=[]}},g=b,x=(i("7f1d"),i("2877")),w=Object(x["a"])(g,a,o,!1,null,null,null),y=w.exports;e["default"]=y},"5bca":function(t,e,i){"use strict";var a=function(){var t=this,e=t._self._c;return e("el-dialog",{attrs:{title:t.$t("bgManage.importDeviceID")+"/SIM/ICCID",visible:t.value,center:"",width:"560px","append-to-body":"","close-on-click-modal":!1},on:{close:t.handleClose}},[e("TextareaIds",{ref:"textareaIds",on:{"on-change":t.onChange}}),e("el-row",{staticClass:"margin_b10",attrs:{gutter:10}},[e("el-col",{staticStyle:{"text-align":"center"},attrs:{span:8,offset:8}},[e("el-button",{staticStyle:{width:"100%"},attrs:{type:"primary",loading:t.loading},on:{click:t.handleClick}},[t._v(t._s(t.$t("common.determine")))])],1)],1)],1)},o=[],s=i("5530"),r=i("2f62"),n=i("9c0e1"),l=i("201d"),c={name:"ImportDeviceidsDialog",props:{value:{type:Boolean,default:!1}},data:function(){return{loading:!1}},components:{TextareaIds:n["a"],LabelWrap:l["a"]},computed:Object(s["a"])({},Object(r["b"])(["isZh"])),methods:{handleClick:function(){this.loading=!0,this.$refs.textareaIds.immediatelyMatching(),this.loading=!1,this.$emit("on-import",this.deviceids),this.handleClose()},handleClose:function(){this.$emit("input",!1)},onChange:function(t){this.deviceids=t,this.loading=!1}},mounted:function(){this.deviceids=[]}},d=c,p=i("2877"),u=Object(p["a"])(d,a,o,!1,null,null,null);e["a"]=u.exports},"7f1d":function(t,e,i){"use strict";i("1015")},"80f4":function(t,e,i){"use strict";var a=i("32eb");e["a"]=a["a"]},"9c0e1":function(t,e,i){"use strict";var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"textarea-ids"},[e("el-row",{attrs:{gutter:10}},[e("el-col",{staticClass:"textarea-ids-red-star",attrs:{span:1}},[t._v("*")]),e("el-col",{attrs:{span:11}},[e("span",[t._v(" "+t._s(t.$t("common.deviceids")))]),t.showTips?t._e():e("span",{attrs:{span:""}},[t._v("/SIM/ICCID")]),t.showTips?e("el-tooltip",{attrs:{placement:"top",effect:"light"}},[e("div",{attrs:{slot:"content"},slot:"content"},[e("div",[t._v(t._s(t.$t("tips.addNewDeviceTip1")))]),e("div",[t._v(t._s(t.$t("tips.addNewDeviceTip2")))]),e("div",[t._v(t._s(t.$t("tips.addNewDeviceTip3")))]),e("div",[t._v(t._s(t.$t("tips.addNewDeviceTip4")))])]),e("i",{staticClass:"el-icon-warning-outline new-add-tips-icon",staticStyle:{position:"relative",top:"-1px"}})]):t._e(),e("div",{staticClass:"tips_clear noselect"},[e("div",{staticClass:"small-clear",on:{click:t.handleClear}},[t._v(t._s(t.$t("tips.clear")))])])],1),e("el-col",{attrs:{span:11}},[e("span",[t._v(t._s(t.$t("reportForm.result")))])])],1),e("el-row",{staticClass:"margin_b10",attrs:{gutter:10}},[e("el-col",{attrs:{span:11,offset:1}},[e("el-input",{attrs:{type:"textarea",autosize:{minRows:10,maxRows:10},rows:10,placeholder:t.textPlaceholder},on:{input:t.onChange},model:{value:t.ids,callback:function(e){t.ids=e},expression:"ids"}})],1),e("el-col",{class:[t.isOk?"correct":"error"],attrs:{span:11}},[e("el-input",{attrs:{type:"textarea",readonly:!0,disabled:"",autosize:{minRows:10,maxRows:10},rows:10},model:{value:t.errorTips,callback:function(e){t.errorTips=e},expression:"errorTips"}})],1)],1)],1)},o=[],s=(i("99af"),i("c975"),i("a15b"),i("14d9"),i("d3b7"),i("ac1f"),i("5319"),i("498a"),i("159b"),i("4795"),i("c276")),r={name:"Temp",props:{showTips:{type:Boolean,default:!1},textPlaceholder:{type:String,default:function(){return this.$t("tips.textareaids")}}},data:function(){return{ids:"",isOk:!1,isMatchingCompletado:!0,errorTips:""}},methods:{handleClear:function(){this.ids="",this.errorTips="",this.isOk=!1,this.isMatchingCompletado=!0,this.$emit("on-change",[])},onChange:function(t){if(""==t)return this.errorTips="",this.isOk=!1,void this.$emit("on-change",[]);t=t.replace(/\s+/g,"\n");var e=/[0-9A-Za-z]/g.exec(t);if(e){this.isMatchingCompletado=!1;var i=e.input;this.matchingDeviceIds(this,i)}else this.errorTips=this.$t("tips.deviceIdTips")},submitFailTips:function(t){var e=this,i="";t.forEach((function(t){var a=t.deviceid,o=t.cause,s=t.status,r=t.creater,n="";n=1==s?null!=r&&r.length>0?e.$t("tips.occupiedUser")+r:e.$t("tips.occupiedOtherUser"):o,i+="".concat(a,":").concat(n,"\n")})),this.errorTips=i,this.isOk=!1},immediatelyMatching:function(){var t=this,e=this.ids;if(t.isMatchingCompletado=!0,e&&e.length>0){var i=t.filtered(e),a=i.length;t.errorTips=t.$t("missing.totalNumber")+" : "+a,t.isOk=!0,t.ids=i.join("\n"),t.$emit("on-change",i)}else t.errorTips=t.$t("missing.adjustDeviceidLength"),t.isOk=!1,t.$emit("on-change",[]);setTimeout((function(){t.isMatchingCompletado=!1}),2e3)},matchingDeviceIds:Object(s["e"])((function(t,e){if(0==t.isMatchingCompletado)if(t.isMatchingCompletado=!0,e&&e.length>0){var i=t.filtered(e),a=i.length;t.errorTips=t.$t("missing.totalNumber")+" : "+a,t.isOk=!0,t.ids=i.join("\n"),t.$emit("on-change",i)}else t.errorTips=t.$t("missing.adjustDeviceidLength"),t.isOk=!1,t.$emit("on-change",[])}),2e3),filtered:function(t){function e(t){for(var e=[],i=0;i<t.length;i++)-1==e.indexOf(t[i])&&e.push(t[i]);return e}var i=[];return t.split("\n").forEach((function(t){t=t.trim(),t&&i.push(t)})),e(i)}},mounted:function(){}},n=r,l=(i("c556"),i("2877")),c=Object(l["a"])(n,a,o,!1,null,null,null);e["a"]=c.exports},ad85:function(t,e,i){},c556:function(t,e,i){"use strict";i("ad85")},e561:function(t,e,i){"use strict";var a=i("ea22");e["a"]=a["a"]}}]);