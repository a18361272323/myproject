(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3cc8ff09"],{"202f":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"api-record full"},[e("div",{staticClass:"api-record-header"},[e("div",{staticClass:"f_left",staticStyle:{width:"280px"}},[e("DropdownZtreeUser",{ref:"users",attrs:{label:t.$t("reportForm.selectUser")},model:{value:t.searchText,callback:function(e){t.searchText=e},expression:"searchText"}})],1),e("div",{staticClass:"f_left"},[e("div",{staticStyle:{"padding-top":"4px"}},[e("el-checkbox",{model:{value:t.isSub,callback:function(e){t.isSub=e},expression:"isSub"}},[t._v(t._s(t.$t("missing.hasSubordinate")))])],1)]),e("div",{staticClass:"f_left"},[e("LabelWrap",{attrs:{label:t.$t("bgManage.responseTime"),labelWidth:"120px"}},[e("el-select",{staticStyle:{width:"80px"},model:{value:t.duration,callback:function(e){t.duration=e},expression:"duration"}},[e("el-option",{attrs:{label:"0s",value:0}}),e("el-option",{attrs:{label:"1s",value:1}}),e("el-option",{attrs:{label:"2s",value:2}}),e("el-option",{attrs:{label:"3s",value:3}}),e("el-option",{attrs:{label:"4s",value:4}}),e("el-option",{attrs:{label:"5s",value:5}})],1)],1)],1),e("div",{staticClass:"f_left"},[e("SelectDate",{attrs:{label:t.$t("common.selectDate")},model:{value:t.dateRange,callback:function(e){t.dateRange=e},expression:"dateRange"}})],1),e("div",{staticClass:"f_left"},[e("el-button",{staticStyle:{width:"90px"},attrs:{type:"primary",loading:t.loading},on:{click:t.handleClickQuery}},[t._v(t._s(t.$t("common.query")))])],1)]),e("div",{staticClass:"api-record-content",staticStyle:{top:"39px"}},[e("vxe-table",{attrs:{border:"",resizable:"","auto-resize":"","show-overflow":"","highlight-current-row":"",size:"mini",height:"auto",data:t.tableList}},[e("vxe-table-column",{attrs:{type:"seq",width:"60",title:t.$t("reportForm.index")}}),e("vxe-table-column",{attrs:{type:"expand",width:"36"},scopedSlots:t._u([{key:"content",fn:function(a){var i=a.row;a.rowIndex;return[[e("div",{staticStyle:{"padding-left":"60px"}},[e("vxe-table",{staticClass:"mytable-scrollbar",attrs:{border:"",resizable:"","auto-resize":"","show-overflow":"","highlight-hover-row":"",size:"mini",height:i.tableHeight,data:i.detailsList}},[e("vxe-table-column",{attrs:{field:"loginfrom",title:t.$t("bgManage.loginSource"),width:"100"}}),e("vxe-table-column",{attrs:{field:"ip",title:"Ip",width:"120",sortable:""}}),e("vxe-table-column",{attrs:{field:"action",title:"Api",width:"160",sortable:""}}),e("vxe-table-column",{attrs:{field:"version",title:t.$t("bgManage.version"),width:"160",sortable:""}}),e("vxe-table-column",{attrs:{field:"duration",title:t.$t("missing.millisecond"),width:"80",sortable:""}}),e("vxe-table-column",{attrs:{field:"starttimeStr",title:t.$t("reportForm.startTime"),width:"158",sortable:""}}),e("vxe-table-column",{attrs:{field:"params",title:t.$t("missing.params"),sortable:""}})],1)],1)]]}}])}),e("vxe-table-column",{attrs:{field:"username",title:t.$t("login.username"),sortable:""},scopedSlots:t._u([{key:"default",fn:function(a){return[e("el-popover",{attrs:{placement:"bottom",trigger:"click"}},[e("div",{staticClass:"parents-wrapper"},t._l(t.parentsList,(function(a){return e("div",{key:a.username},[t._v(t._s(a.username)+"("+t._s(a.usertypeStr)+")")])})),0),e("el-button",{attrs:{slot:"reference",type:"text"},on:{click:function(e){return t.queryParents(a.row.username)}},slot:"reference"},[t._v(t._s(a.row.username))])],1)]}}])}),e("vxe-table-column",{attrs:{field:"queryCount",title:t.$t("missing.queryCount"),sortable:""}})],1)],1)])},n=[],s=a("5530"),r=(a("14d9"),a("4e82"),a("d3b7"),a("159b"),a("2f62")),o=a("e285"),c=a("201d"),l=a("d462"),d=a("c7bc"),u=a("5101"),m=a("c276"),h={name:"ApiRecord",data:function(){return{loading:!1,isSub:!0,searchText:"",dateRange:[new Date,new Date],duration:1,tableList:[],parentsList:[]}},components:{LabelWrap:c["a"],DropdownZtreeUser:d["a"],SelectDate:l["a"]},computed:Object(s["a"])({},Object(r["b"])(["isZh","userName","isQueryInitData"])),watch:{isQueryInitData:function(t){t&&(this.searchText=this.userName)}},methods:{queryParents:function(t){var e=this;this.parentsList=[],Object(o["Ab"])(t).then((function(t){var a=t.status,i=t.records;0==a&&(i.forEach((function(t){t.usertypeStr=Object(m["ab"])(e.isZh,t.usertype)})),e.parentsList=i)}))},handleClickQuery:function(){var t=this;this.cacheObject={};var e=this.dateRange,a=u["a"].format(e[0],"yyyy-MM-dd"),i=u["a"].format(e[1],"yyyy-MM-dd"),n=this.searchText,s=this.cacheObject;if(n){var r={username:n,includesub:this.isSub?1:0,duration:this.duration,offset:u["a"].getOffset(),startday:a,endday:i};this.loading=!0;var c=(document.body.clientHeight||documentElement.clientHeight)-240;Object(o["ac"])(r).then((function(e){var a=e.status,i=e.records,n=e.cause;t.loading=!1;var r=[];if(0==a){if(i){for(var o in i.forEach((function(t){var e=t.username;void 0==s[e]&&(s[e]=[]),t.starttimeStr=u["a"].longToLocalDateTimeStr(t.starttime),s[e].push(t)})),s){var l=s[o],d=0==l.length?72:36*l.length+72;d>c&&(d=c),r.push({username:o,queryCount:l.length,detailsList:l,tableHeight:d})}r.sort((function(t,e){return e.queryCount-t.queryCount}))}}else 1==a?t.$XModal.message({message:t.$t("tips.noPermission"),status:"error",zIndex:9999}):t.$XModal.message({message:t.$t("tips.queryFail")+":"+n,status:"error",zIndex:9999});t.tableList=r}))}else this.$XModal.message({message:this.$t("tips.selectUser"),status:"error",zIndex:9999})}},mounted:function(){var t=this;this.cacheObject={},this.$nextTick((function(){t.isQueryInitData&&(t.searchText=t.userName)}))}},p=h,f=(a("98cea"),a("2877")),y=Object(f["a"])(p,i,n,!1,null,null,null),g=y.exports;e["default"]=g},"271ae":function(t,e,a){},"2ddc":function(t,e,a){"use strict";var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"multi-choice",style:t.warpStyle},[e("div",{staticClass:"multi-choice-input"},["daterange"==t.dateType?e("div",[e("el-date-picker",{attrs:{type:t.dateType,"picker-options":t.pickerOptions,"range-separator":"-",align:"center","unlink-panels":"",clearable:!1,"start-placeholder":t.$t("device.driverinitialdate"),"end-placeholder":t.$t("device.drivereffectivedate")},on:{change:t.onChange},model:{value:t.dateRange,callback:function(e){t.dateRange=e},expression:"dateRange"}})],1):t._e(),"date"==t.dateType?e("div",[e("el-date-picker",{attrs:{type:"date","picker-options":t.datePickerOptions},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}})],1):t._e(),"datetimerange"==t.dateType?e("div",{staticClass:"datetimerange"},[e("el-date-picker",{attrs:{type:t.dateType,"range-separator":"-","picker-options":t.pickerOptionsTime,align:"center","unlink-panels":"",clearable:!1,"start-placeholder":t.$t("device.driverinitialdate"),"end-placeholder":t.$t("device.drivereffectivedate"),"default-time":["00:00:00","23:59:59"]},on:{change:t.onChange},model:{value:t.dateRange,callback:function(e){t.dateRange=e},expression:"dateRange"}})],1):t._e(),"month"==t.dateType?e("div",[e("el-date-picker",{attrs:{type:"month"},model:{value:t.month,callback:function(e){t.month=e},expression:"month"}})],1):t._e()])])},n=[],s=(a("99af"),a("5101")),r=a("5867"),o={name:"SelectDate",props:{value:{type:Array|Date,default:function(){return[]}},dateType:{type:String,default:"daterange"},label:{type:String,default:function(){return this.$t("common.selectTime")}}},computed:{isDaterange:function(){return"daterange"==this.dateType},warpStyle:function(){var t=200;switch(this.dateType){case"date":t=120;break;case"daterange":t=230;break;case"datetimerange":t=310;break}return{width:"".concat(t,"px")}}},mixins:[r["a"]],data:function(){var t=864e5;return{dateRange:[],date:new Date,month:new Date,pickerOptions:{shortcuts:[{text:this.$t("reportForm.toDay"),onClick:function(t){var e=new Date;t.$emit("pick",[e,e])}},{text:this.$t("reportForm.yesterDay"),onClick:function(e){var a=new Date;a.setTime(a.getTime()-t),e.$emit("pick",[a,a])}},{text:this.$t("missing.theWeek"),onClick:function(e){var a=new Date,i=new Date,n=a.getDay();a.setTime(a.getTime()-t*(n-1)),i.setTime(a.getTime()+6*t),e.$emit("pick",[a,i])}},{text:this.$t("missing.lastWeek"),onClick:function(e){var a=new Date,i=new Date,n=a.getDay(),s=a.getTime()-t*(n-1);a.setTime(s-7*t),i.setTime(s-t),e.$emit("pick",[a,i])}},{text:this.$t("missing.thisMonth"),onClick:function(t){var e=new Date,a=e.getFullYear(),i=e.getMonth()+1,n=new Date("".concat(a,"-").concat(i,"-01")),s=new Date("".concat(a,"-").concat(i,"-01 00:00:00"));s.setMonth(s.getMonth()+1),s=new Date(s.getTime()-1e3),t.$emit("pick",[n,s])}},{text:this.$t("missing.lastMonth"),onClick:function(t){var e=new Date;e.setMonth(e.getMonth()-1);var a=e.getFullYear(),i=e.getMonth()+1,n=new Date(new Date(a,i,1)-1).getDate(),s=new Date("".concat(a,"-").concat(i,"-01")),r=new Date("".concat(a,"-").concat(i,"-").concat(n));t.$emit("pick",[s,r])}}]},pickerOptionsTime:{shortcuts:[{text:this.$t("reportForm.toDay"),onClick:function(t){var e=new Date(s["a"].format(new Date,"yyyy-MM-dd")+" 00:00:00"),a=new Date(s["a"].format(new Date,"yyyy-MM-dd")+" 23:59:59");t.$emit("pick",[e,a])}},{text:this.$t("reportForm.yesterDay"),onClick:function(e){var a=new Date;a.setTime(a.getTime()-t),e.$emit("pick",[new Date(s["a"].format(a,"yyyy-MM-dd")+" 00:00:00"),new Date(s["a"].format(a,"yyyy-MM-dd")+" 23:59:59")])}},{text:this.$t("missing.theWeek"),onClick:function(e){var a=new Date,i=new Date,n=a.getDay();a.setTime(a.getTime()-t*(n-1)),i.setTime(a.getTime()+6*t),e.$emit("pick",[new Date(s["a"].format(a,"yyyy-MM-dd")+" 00:00:00"),new Date(s["a"].format(i,"yyyy-MM-dd")+" 23:59:59")])}},{text:this.$t("missing.lastWeek"),onClick:function(e){var a=new Date,i=new Date,n=a.getDay(),r=a.getTime()-t*(n-1);a.setTime(r-7*t),i.setTime(r-t),e.$emit("pick",[new Date(s["a"].format(a,"yyyy-MM-dd")+" 00:00:00"),new Date(s["a"].format(i,"yyyy-MM-dd")+" 23:59:59")])}},{text:this.$t("missing.thisMonth"),onClick:function(t){var e=new Date,a=e.getFullYear(),i=e.getMonth()+1,n=new Date("".concat(a,"-").concat(i,"-01")),r=new Date("".concat(a,"-").concat(i,"-01 00:00:00"));r.setMonth(r.getMonth()+1),r=new Date(r.getTime()-1e3),t.$emit("pick",[new Date(s["a"].format(n,"yyyy-MM-dd")+" 00:00:00"),new Date(s["a"].format(r,"yyyy-MM-dd")+" 23:59:59")])}},{text:this.$t("missing.lastMonth"),onClick:function(t){var e=new Date;e.setMonth(e.getMonth()-1);var a=e.getFullYear(),i=e.getMonth()+1,n=new Date(new Date(a,i,1)-1).getDate(),r=new Date("".concat(a,"-").concat(i,"-01")),o=new Date("".concat(a,"-").concat(i,"-").concat(n));t.$emit("pick",[new Date(s["a"].format(r,"yyyy-MM-dd")+" 00:00:00"),new Date(s["a"].format(o,"yyyy-MM-dd")+" 23:59:59")])}}]}}},watch:{dateRange:function(t){null==t?this.$emit("input",[]):this.$emit("input",t)},value:function(t){this.dateRange=t},date:function(t){this.$emit("input",t)},month:function(t){this.$emit("input",t)}},methods:{onChange:function(t){this.$emit("input",t)}},mounted:function(){"date"==this.dateType?this.date=this.value:"month"==this.dateType?this.month=this.value:this.dateRange=this.value}},c=o,l=(a("e716"),a("2877")),d=Object(l["a"])(c,i,n,!1,null,"5dbb8594",null);e["a"]=d.exports},5266:function(t,e,a){},"98cea":function(t,e,a){"use strict";a("5266")},d462:function(t,e,a){"use strict";var i=a("2ddc");e["a"]=i["a"]},e716:function(t,e,a){"use strict";a("271ae")}}]);