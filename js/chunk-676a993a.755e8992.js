(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-676a993a"],{"156e":function(t,e,a){"use strict";a("c7b6")},2584:function(t,e,a){"use strict";var i=function(){var t=this,e=t._self._c;return e("el-dialog",{attrs:{title:t.title,visible:t.value,"custom-class":"dialog-center",center:"",width:"460px",top:"6vh","append-to-body":"","close-on-click-modal":!1},on:{close:t.handleClose},scopedSlots:t._u([{key:"title",fn:function(){return[e("b",{staticStyle:{color:"#000000"},domProps:{innerHTML:t._s(t.title)}})]},proxy:!0}])},[e("WorkingCalendar",{ref:"workingCalendar",on:{"on-select-date":t.reportAccs,queryWorkingHours:t.queryMonthWorkingHours}}),e("div",{staticClass:"working-hours-detail"},[e("div",{staticClass:"working-hours-item"},[e("div",[t._v(t._s(t.$t("reportForm.monthlyWorking")))]),e("div",{domProps:{textContent:t._s(t.monthtotalacc)}})]),e("div",{staticClass:"working-hours-item"},[e("div",[t._v(t._s(t.$t("reportForm.dayWorking")))]),e("div",{domProps:{textContent:t._s(t.daytotalacc)}})]),e("div",{staticClass:"working-hours-charts"},[e("div",{staticClass:"working-hours-charts-wrap",domProps:{innerHTML:t._s(t.chartsHtml)}}),e("div",{staticClass:"working-hours-charts-label"},[e("div",[t._v("0")]),e("div",[t._v("1")]),e("div",[t._v("2")]),e("div",[t._v("3")]),e("div",[t._v("4")]),e("div",[t._v("5")]),e("div",[t._v("6")]),e("div",[t._v("7")]),e("div",[t._v("8")]),e("div",[t._v("9")]),e("div",[t._v("10")]),e("div",[t._v("11")]),e("div",[t._v("12")]),e("div",[t._v("13")]),e("div",[t._v("14")]),e("div",[t._v("15")]),e("div",[t._v("16")]),e("div",[t._v("17")]),e("div",[t._v("18")]),e("div",[t._v("19")]),e("div",[t._v("20")]),e("div",[t._v("21")]),e("div",[t._v("22")]),e("div",[t._v("23")])])]),e("div",{staticClass:"working-hours-item"},[e("div",[t._v(t._s(t.$t("reportForm.workingDetail"))+"("+t._s(t.workingHoursList.length)+")")]),e("div")]),e("div",{staticStyle:{height:"120px",position:"relative",width:"410px"}},[0==t.loading?e("el-scrollbar",{staticStyle:{height:"100%"}},t._l(t.workingHoursList,(function(a){return e("div",{staticClass:"working-hours-item"},[e("div",[e("span",{domProps:{textContent:t._s(a.begintimeStr)}}),t._v(" - "),e("span",{domProps:{textContent:t._s(a.endtimeStr)}})]),e("div",[e("span",{staticStyle:{"padding-right":"10px"},domProps:{textContent:t._s(a.totalaccStr)}})])])})),0):t._e(),e("MyLoading",{model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}})],1),e("el-row",[e("el-col",{staticStyle:{"text-align":"center"},attrs:{span:12}},[e("el-button",{staticStyle:{width:"120px"},attrs:{type:"primary"},on:{click:t.handleClose}},[t._v(t._s(t.$t("common.determine")))])],1),e("el-col",{staticStyle:{"text-align":"center"},attrs:{span:12}},[e("el-button",{staticStyle:{width:"120px"},attrs:{type:"primary",loading:t.exportLoading1},on:{click:t.exportData}},[t._v(t._s(t.$t("common.export")))])],1)],1)],1)],1)},n=[],o=a("5530"),s=(a("99af"),a("14d9"),a("4e82"),a("d3b7"),a("159b"),a("1c31")),r=a("6e52"),c=function(){var t=this,e=t._self._c;return e("div",{staticClass:"mileage-calendar noselect"},[e("div",{staticClass:"mileage-calendar-header"},[e("div",{staticClass:"calendar-header-left"},[e("div",{staticClass:"calendar-header-title",staticStyle:{height:"40px","line-height":"40px",color:"#000000"}},[t._v(t._s(t.year)+t._s(t.$t("monitor.year"))+t._s(t.month)+t._s(t.$t("monitor.month")))])]),e("div",{staticClass:"calendar-header-right"},[e("el-button-group",[e("el-button",{attrs:{size:"mini"},on:{click:t.prveMonth}},[t._v(t._s(t.$t("monitor.prevMonth")))]),e("el-button",{attrs:{size:"mini"},on:{click:t.toDay}},[t._v(t._s(t.$t("el.datepicker.today")))]),e("el-button",{attrs:{size:"mini"},on:{click:t.nextMonth}},[t._v(t._s(t.$t("el.datepicker.nextMonth")))])],1)],1)]),e("div",{staticClass:"mileage-calendar-body"},[e("div",{staticClass:"calendar-body-week"},t._l(t.weeks,(function(a,i){return e("div",{key:i},[t._v(t._s(a))])})),0),e("div",{staticClass:"calendar-body-dates"},t._l(t.datesArr,(function(a,i){return e("div",{key:i,class:{"to-day":a.isTheMonth&&t.toDayStr==a.dateStr&&a.dateStr!=t.currentDateStr},on:{click:function(e){return t.handleSelectDay(a)}}},[e("div",{staticClass:"calendar-body-dates-date",class:{"active-day":a.dateStr==t.currentDateStr&&a.isTheMonth,"no-current-month":!a.isTheMonth},domProps:{textContent:t._s(a.day)}}),e("div",{class:{"active-day":a.dateStr==t.currentDateStr&&a.isTheMonth,"no-current-month":!a.isTheMonth}},[e("div",{staticStyle:{"font-size":"12px"},domProps:{textContent:t._s(a.mileage)}})])])})),0),e("div",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"calendar-body-loading"},[t._m(0)])])])},d=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"el-loading-mask"},[e("div",{staticClass:"el-loading-spinner"},[e("i",{staticClass:"el-icon-loading"}),e("p",{staticClass:"el-loading-text"},[t._v("Loading")])])])}],l=(a("3c65"),a("5101")),h=a("7cf8"),u=a("c276"),y={name:"WorkingCalendar",data:function(){return{year:"",month:"",date:"",weeks:[],datesArr:[],loading:!1,toDayStr:l["a"].format(new Date,"yyyy-MM-dd")}},mounted:function(){var t=this;this.dailyMileages={},this.$nextTick((function(){t.weeks=[t.$t("el.datepicker.weeks.sun"),t.$t("el.datepicker.weeks.mon"),t.$t("el.datepicker.weeks.tue"),t.$t("el.datepicker.weeks.wed"),t.$t("el.datepicker.weeks.thu"),t.$t("el.datepicker.weeks.fri"),t.$t("el.datepicker.weeks.sat")],t.setTheDate(l["a"].format(new Date,"yyyy-MM-dd"))}))},computed:{currentDateStr:function(){return"".concat(this.year,"-").concat(this.month,"-").concat(this.date)}},methods:{prveMonth:function(){this.$emit("queryWorkingHours",-1);var t=new Date(this.year+"-"+this.month+"-1");t.setMonth(t.getMonth()-1);var e=l["a"].format(t,"yyyy-MM-dd");if(this.setTheDate(e),this.$emit("on-select-date",e),void 0==this.dailyMileages[e])this.queryMonthDailyMileage(this.deviceid);else{for(var a=this.dailyMileages,i=this.getTheMonthDays(),n="".concat(this.year,"-").concat(this.month,"-"),o=0,s=1;s<=i;s++){var r=n+(s<=9?"0"+s:s),c=a[r];c&&(o+=c.totalacc)}this.$emit("queryWorkingHours",o)}},toDay:function(){this.setTheDate(l["a"].format(new Date,"yyyy-MM-dd"))},nextMonth:function(){this.$emit("queryWorkingHours",-1);var t=new Date(this.year+"-"+this.month+"-1");t.setMonth(t.getMonth()+1);var e=l["a"].format(t,"yyyy-MM-dd");if(this.setTheDate(e),this.$emit("on-select-date",e),void 0==this.dailyMileages[e])this.queryMonthDailyMileage(this.deviceid);else{for(var a=this.dailyMileages,i=this.getTheMonthDays(),n="".concat(this.year,"-").concat(this.month,"-"),o=0,s=1;s<=i;s++){var r=n+(s<=9?"0"+s:s),c=a[r];c&&(o+=c.totalacc)}this.$emit("queryWorkingHours",o)}},setTheDate:function(t){var e=t.split("-");this.year=e[0],this.month=e[1],this.date=e[2],this.datesArr=this.getDatesArr()},setTodayWorkingHours:function(t,e){this.dailyMileages[t]=e,this.setTheDate(t)},handleSelectDay:function(t){var e=t.dateStr;if(t.isPrevMonth||t.isNextMonth)this.setTheDate(e);else{var a=t.dateStr.split("-");this.year=a[0],this.month=a[1],this.date=a[2]}void 0==this.dailyMileages[e]&&this.deviceid&&this.queryMonthDailyMileage(this.deviceid),this.$emit("on-select-date",e)},getTheMonthFirstDayWeek:function(){return new Date(this.year,this.month-1,1).getDay()},getTheMonthDays:function(){var t=12==this.month?this.year+1:this.year,e=12==this.month?1:this.month;return new Date(new Date(t,e,1)-1).getDate()},getPrevMonthLastDate:function(){return new Date(new Date(this.year,this.month-1,1)-1).getDate()},getDatesArr:function(){var t=[],e=this.getTheMonthFirstDayWeek(),a=this.getPrevMonthLastDate(),i=l["a"].format(new Date(new Date(this.year,this.month-2,1)),"yyyy-MM"),n=l["a"].format(new Date(new Date(this.year,this.month,1)),"yyyy-MM"),o=this.getTheMonthDays();while(e--)t.unshift({dateStr:i+"-"+(a>9?a:"0"+a),day:a--,isTheMonth:!1,isPrevMonth:!0,isNextMonth:!1,mileage:"-"});var s=1,r=this.month;while(o--){var c=this.year+"-"+r+"-"+(s<10?"0"+s:s),d="-";void 0!=this.dailyMileages[c]&&(d=this.dailyMileages[c].totalaccStr),t.push({day:s,isTheMonth:!0,mileage:d,dateStr:c}),s++}var h=1;while(t.length<42){c=n+"-"+(h<10?"0"+h:h);t.push({day:h++,isTheMonth:!1,mileage:"-",dateStr:c,isNextMonth:!0,isPrevMonth:!1})}return t},queryWorkingHours:function(t){this.deviceid=t,this.dailyMileages={},this.toDay(),this.queryMonthDailyMileage(t)},queryMonthDailyMileage:function(t){var e=this,a=this.dailyMileages,i=this.year,n=this.month,o=this.getTheMonthDays();if(""!=i&&""!=n){var s={startday:"".concat(i,"-").concat(n,"-01"),endday:"".concat(i,"-").concat(n,"-").concat(o),offset:this.$dateformat.getOffset(),deviceid:t,forcetodaydetail:!0},r=l["a"].format(new Date,"yyyy-MM-dd");Object(h["cb"])(s).then((function(t){t.status,t.deviceid;var i=t.records,n=0;i&&i.length&&(i.forEach((function(t){var e=t.statisticsday,i=t.totalacc,o=t.onlinestatus;r>=e?(a[e]={totalaccStr:0==o?"x":Object(u["Ib"])(i,!1),totalacc:i},n+=i):a[e]={totalaccStr:"-",totalacc:0}})),e.datesArr=e.getDatesArr()),e.$emit("queryWorkingHours",n)})).catch((function(t){e.loading=!1}))}}}},m=y,v=(a("7dc9"),a("2877")),p=Object(v["a"])(m,c,d,!1,null,null,null),g=p.exports,f=g,D=a("2f62"),k=a("45f0"),M={name:"WorkingHoursCalendar",props:{value:{type:Boolean,default:!1}},data:function(){return{title:"",deviceid:"",chartsHtml:"",daytotalacc:0,monthtotalacc:0,workingHoursList:[],loading:!1,exportLoading1:!1}},components:{WorkingCalendar:f,MyLoading:k["a"]},computed:Object(o["a"])({},Object(D["b"])(["isZh"])),mounted:function(){},methods:{handleClose:function(){this.$emit("input",!1)},exportData:function(){for(var t=this.deviceid,e=r["a"].deviceInfos[t],a=e.devicename,i=e.creater,n=e.groupname,o=this.$refs.workingCalendar,s=o.getTheMonthDays(),c=o.dailyMileages,d=o.year+"-"+o.month,l=[[this.$t("alarm.devName"),this.$t("alarm.devNum"),this.$t("reportForm.creater"),this.$t("reportForm.groupName"),this.$t("reportForm.date"),this.$t("reportForm.workingDuration")]],h=1;h<=s;h++){var u=d+(h<10?"-0"+h:"-"+h),y=c[u];if(y){var m=[];m.push(a),m.push(t),m.push(i),m.push(n),m.push(u),m.push(y.totalaccStr),l.push(m)}}l.push(["","","","",this.$t("reportForm.totalWorkingDuration"),this.monthtotalacc]);var v={title:this.$t("reportForm.workingDuration")+" - "+d+" "+t,data:l};this.exportLoading1=!0,new ExcelCls(v).exportExcel(this)},queryMonthWorkingHours:function(t){if(t>-1){var e=parseInt(t/36e5),a=parseInt(t%36e5/6e4);this.isZh?this.monthtotalacc=(e>0?e+"时":"")+a+"分":this.monthtotalacc=(e>0?e+"H":"")+a+"M"}else this.monthtotalacc=""},setDeviceId:function(t){this.deviceid=t,this.title=r["a"].getDeviceNameByDeviceId(t)+"-"+this.$t("reportForm.calendar"),this.$refs.workingCalendar.queryWorkingHours(t),this.reportAccs(l["a"].formatutc(new Date,"yyyy-MM-dd"))},reportAccs:function(t){var e=this;this.loading=!0;var a=864e5,i=400/a,n=3600*l["a"].getOffset()*1e3,o={starttime:"".concat(t," 00:00:00"),endtime:"".concat(t," 23:59:59"),offset:l["a"].getOffset(),deviceids:[this.deviceid]},r=t==l["a"].format(new Date,"yyyy-MM-dd");Object(s["B"])(o).then((function(o){var s=o.records;e.loading=!1;var c=[],d=0,h="";if(s&&s.length>0){var y=s[0].records;y.sort((function(t,e){return t.begintime-e.begintime})),y.forEach((function(t){if(3==t.accstate){var e=t.begintime,o=t.endtime;t.begintimeStr=l["a"].longToLocalDateTimeStr(t.begintime).split(" ")[1],t.endtimeStr=l["a"].longToLocalDateTimeStr(t.endtime).split(" ")[1],d+=o-e,t.totalaccStr=Object(u["Ib"])(o-e,!0);var s=e+n,r=o+n,y=s%a,m=(r-s)*i,v=y*i;h+='<div style="left:'.concat(v,"px;width:").concat(m,'px;"></div>'),c.push(t)}}))}e.chartsHtml=h,e.daytotalacc=Object(u["Ib"])(d,!0),e.workingHoursList=c,r&&e.$refs.workingCalendar.setTodayWorkingHours(t,{totalacc:totalacc,totalaccStr:e.daytotalacc})})).catch((function(){e.loading=!1}))}}},w=M,_=(a("156e"),Object(v["a"])(w,i,n,!1,null,null,null));e["a"]=_.exports},"271ae":function(t,e,a){},"2ddc":function(t,e,a){"use strict";var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"multi-choice",style:t.warpStyle},[e("div",{staticClass:"multi-choice-input"},["daterange"==t.dateType?e("div",[e("el-date-picker",{attrs:{type:t.dateType,"picker-options":t.pickerOptions,"range-separator":"-",align:"center","unlink-panels":"",clearable:!1,"start-placeholder":t.$t("device.driverinitialdate"),"end-placeholder":t.$t("device.drivereffectivedate")},on:{change:t.onChange},model:{value:t.dateRange,callback:function(e){t.dateRange=e},expression:"dateRange"}})],1):t._e(),"date"==t.dateType?e("div",[e("el-date-picker",{attrs:{type:"date","picker-options":t.datePickerOptions},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}})],1):t._e(),"datetimerange"==t.dateType?e("div",{staticClass:"datetimerange"},[e("el-date-picker",{attrs:{type:t.dateType,"range-separator":"-","picker-options":t.pickerOptionsTime,align:"center","unlink-panels":"",clearable:!1,"start-placeholder":t.$t("device.driverinitialdate"),"end-placeholder":t.$t("device.drivereffectivedate"),"default-time":["00:00:00","23:59:59"]},on:{change:t.onChange},model:{value:t.dateRange,callback:function(e){t.dateRange=e},expression:"dateRange"}})],1):t._e(),"month"==t.dateType?e("div",[e("el-date-picker",{attrs:{type:"month"},model:{value:t.month,callback:function(e){t.month=e},expression:"month"}})],1):t._e()])])},n=[],o=(a("99af"),a("5101")),s=a("5867"),r={name:"SelectDate",props:{value:{type:Array|Date,default:function(){return[]}},dateType:{type:String,default:"daterange"},label:{type:String,default:function(){return this.$t("common.selectTime")}}},computed:{isDaterange:function(){return"daterange"==this.dateType},warpStyle:function(){var t=200;switch(this.dateType){case"date":t=120;break;case"daterange":t=230;break;case"datetimerange":t=310;break}return{width:"".concat(t,"px")}}},mixins:[s["a"]],data:function(){var t=864e5;return{dateRange:[],date:new Date,month:new Date,pickerOptions:{shortcuts:[{text:this.$t("reportForm.toDay"),onClick:function(t){var e=new Date;t.$emit("pick",[e,e])}},{text:this.$t("reportForm.yesterDay"),onClick:function(e){var a=new Date;a.setTime(a.getTime()-t),e.$emit("pick",[a,a])}},{text:this.$t("missing.theWeek"),onClick:function(e){var a=new Date,i=new Date,n=a.getDay();a.setTime(a.getTime()-t*(n-1)),i.setTime(a.getTime()+6*t),e.$emit("pick",[a,i])}},{text:this.$t("missing.lastWeek"),onClick:function(e){var a=new Date,i=new Date,n=a.getDay(),o=a.getTime()-t*(n-1);a.setTime(o-7*t),i.setTime(o-t),e.$emit("pick",[a,i])}},{text:this.$t("missing.thisMonth"),onClick:function(t){var e=new Date,a=e.getFullYear(),i=e.getMonth()+1,n=new Date("".concat(a,"-").concat(i,"-01")),o=new Date("".concat(a,"-").concat(i,"-01 00:00:00"));o.setMonth(o.getMonth()+1),o=new Date(o.getTime()-1e3),t.$emit("pick",[n,o])}},{text:this.$t("missing.lastMonth"),onClick:function(t){var e=new Date;e.setMonth(e.getMonth()-1);var a=e.getFullYear(),i=e.getMonth()+1,n=new Date(new Date(a,i,1)-1).getDate(),o=new Date("".concat(a,"-").concat(i,"-01")),s=new Date("".concat(a,"-").concat(i,"-").concat(n));t.$emit("pick",[o,s])}}]},pickerOptionsTime:{shortcuts:[{text:this.$t("reportForm.toDay"),onClick:function(t){var e=new Date(o["a"].format(new Date,"yyyy-MM-dd")+" 00:00:00"),a=new Date(o["a"].format(new Date,"yyyy-MM-dd")+" 23:59:59");t.$emit("pick",[e,a])}},{text:this.$t("reportForm.yesterDay"),onClick:function(e){var a=new Date;a.setTime(a.getTime()-t),e.$emit("pick",[new Date(o["a"].format(a,"yyyy-MM-dd")+" 00:00:00"),new Date(o["a"].format(a,"yyyy-MM-dd")+" 23:59:59")])}},{text:this.$t("missing.theWeek"),onClick:function(e){var a=new Date,i=new Date,n=a.getDay();a.setTime(a.getTime()-t*(n-1)),i.setTime(a.getTime()+6*t),e.$emit("pick",[new Date(o["a"].format(a,"yyyy-MM-dd")+" 00:00:00"),new Date(o["a"].format(i,"yyyy-MM-dd")+" 23:59:59")])}},{text:this.$t("missing.lastWeek"),onClick:function(e){var a=new Date,i=new Date,n=a.getDay(),s=a.getTime()-t*(n-1);a.setTime(s-7*t),i.setTime(s-t),e.$emit("pick",[new Date(o["a"].format(a,"yyyy-MM-dd")+" 00:00:00"),new Date(o["a"].format(i,"yyyy-MM-dd")+" 23:59:59")])}},{text:this.$t("missing.thisMonth"),onClick:function(t){var e=new Date,a=e.getFullYear(),i=e.getMonth()+1,n=new Date("".concat(a,"-").concat(i,"-01")),s=new Date("".concat(a,"-").concat(i,"-01 00:00:00"));s.setMonth(s.getMonth()+1),s=new Date(s.getTime()-1e3),t.$emit("pick",[new Date(o["a"].format(n,"yyyy-MM-dd")+" 00:00:00"),new Date(o["a"].format(s,"yyyy-MM-dd")+" 23:59:59")])}},{text:this.$t("missing.lastMonth"),onClick:function(t){var e=new Date;e.setMonth(e.getMonth()-1);var a=e.getFullYear(),i=e.getMonth()+1,n=new Date(new Date(a,i,1)-1).getDate(),s=new Date("".concat(a,"-").concat(i,"-01")),r=new Date("".concat(a,"-").concat(i,"-").concat(n));t.$emit("pick",[new Date(o["a"].format(s,"yyyy-MM-dd")+" 00:00:00"),new Date(o["a"].format(r,"yyyy-MM-dd")+" 23:59:59")])}}]}}},watch:{dateRange:function(t){null==t?this.$emit("input",[]):this.$emit("input",t)},value:function(t){this.dateRange=t},date:function(t){this.$emit("input",t)},month:function(t){this.$emit("input",t)}},methods:{onChange:function(t){this.$emit("input",t)}},mounted:function(){"date"==this.dateType?this.date=this.value:"month"==this.dateType?this.month=this.value:this.dateRange=this.value}},c=r,d=(a("e716"),a("2877")),l=Object(d["a"])(c,i,n,!1,null,"5dbb8594",null);e["a"]=l.exports},"4c3c":function(t,e,a){"use strict";a("4e82");e["a"]={data:function(){return{sortConfig:{sortMethod:function(t){var e=t.data,a=t.sortList,i=a[0],n=i.property,o=i.order,s=[];return s="desc"===o?e.sort((function(t,e){var a=t[n],i=e[n];if(isNaN(a)&&!isNaN(Date.parse(a))&&isNaN(i)&&!isNaN(Date.parse(i)))return Date.parse(i)-Date.parse(a);if(a=parseFloat(a),i=parseFloat(i),isNaN(a)||isNaN(i)){var o=e[n]+"";return o.localeCompare(t[n])}return i-a})):"asc"===o?e.sort((function(t,e){var a=t[n],i=e[n];if(isNaN(a)&&!isNaN(Date.parse(a))&&isNaN(i)&&!isNaN(Date.parse(i)))return Date.parse(a)-Date.parse(i);if(a=parseFloat(t[n]),i=parseFloat(e[n]),isNaN(a)||isNaN(i)){var o=t[n]+"";return o.localeCompare(e[n])}return a-i})):e.sort(),s}}}}}},"7dc9":function(t,e,a){"use strict";a("da00")},c7b6:function(t,e,a){},d462:function(t,e,a){"use strict";var i=a("2ddc");e["a"]=i["a"]},da00:function(t,e,a){},e561:function(t,e,a){"use strict";var i=a("ea22");e["a"]=i["a"]},e716:function(t,e,a){"use strict";a("271ae")}}]);