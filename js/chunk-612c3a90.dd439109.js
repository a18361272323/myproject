(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-612c3a90"],{1141:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"stock-devices full"},[e("div",{staticClass:"stock-devices-header"},[e("div",{staticClass:"f_left",staticStyle:{width:"210px"}},[e("LabelWrap",{attrs:{label:t.$t("bgManage.queryDevice")}},[e("el-input",{attrs:{placeholder:this.$t("bgManage.pleaseEnterSearchDeviceid")},model:{value:t.queryText,callback:function(e){t.queryText=e},expression:"queryText"}})],1)],1),e("div",{staticClass:"f_left",staticStyle:{"margin-left":"10px"}},[e("el-button",{attrs:{type:"primary",loading:t.loading},on:{click:t.handleQuery}},[t._v(t._s(t.$t("common.query")))])],1),e("div",{staticClass:"f_left",staticStyle:{"margin-left":"10px"}},[e("el-button",{attrs:{type:"primary",loading:t.exportLoading},on:{click:t.exportAll}},[t._v(t._s(t.$t("device.exportAllDevice")))])],1),e("div",{staticClass:"f_right",staticStyle:{"margin-left":"10px"}},[e("el-button",{attrs:{type:"danger"},on:{click:function(e){t.isAdd=!1,t.dialog=!0}}},[t._v(t._s(t.$t("missing.batchDelete")))])],1),e("div",{staticClass:"f_right",staticStyle:{"margin-left":"10px"}},[e("el-button",{attrs:{type:"primary"},on:{click:function(e){t.isAdd=!0,t.dialog=!0}}},[t._v(t._s(t.$t("bgManage.batchAdd")))])],1)]),e("div",{staticClass:"stock-devices-body"},[e("div",{staticClass:"stock-devices-body-table"},[e("vxe-table",{staticClass:"mytable-scrollbar",attrs:{border:"","menu-config":t.tableMenu,resizable:"","auto-resize":"","show-overflow":"","highlight-current-row":"","highlight-hover-row":"",size:"mini",height:"auto",data:t.tableList},on:{"menu-click":t.handleClickTableMenu}},[e("vxe-table-column",{attrs:{title:t.$t("reportForm.action"),width:"80",align:"center"},scopedSlots:t._u([{key:"default",fn:function(i){return[e("div",{staticStyle:{"padding-top":"6px"}},[e("el-popconfirm",{attrs:{placement:"top",icon:"el-icon-info","icon-color":"red","confirm-button-text":t.$t("common.confirm"),"cancel-button-text":t.$t("common.cancel"),title:t.$t("tips.confirmDelete")},on:{confirm:function(e){return t.handleDelete(i)}}},[e("span",{attrs:{slot:"reference"},slot:"reference"},[e("img",{staticStyle:{width:"16px",cursor:"pointer"},attrs:{src:t.deleteIcon}})])])],1)]}}])}),e("vxe-table-column",{attrs:{type:"seq",width:"60",title:t.$t("reportForm.index")}}),e("vxe-table-column",{attrs:{field:"deviceid",title:t.$t("alarm.devNum")}}),e("vxe-table-column",{attrs:{field:"addtimeStr",title:t.$t("reportForm.addTime")}})],1)],1),e("div",{staticClass:"stock-devices-body-page"},[e("el-pagination",{attrs:{currentPage:t.currentPage,"current-page":t.currentChangePage,"page-sizes":[20,40,60,80,100],"page-size":t.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:t.totalcount},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)]),e("el-dialog",{attrs:{title:t.isAdd?t.$t("bgManage.batchAdd"):t.$t("missing.batchDelete"),visible:t.dialog,width:"620px",center:"","close-on-click-modal":!1},on:{"update:visible":function(e){t.dialog=e}}},[e("TextareaIds",{ref:"textareaIds",attrs:{showTips:"",textPlaceholder:t.$t("tips.textareaidsOneid")},on:{"on-change":t.onChangeIds}}),e("el-row",[e("el-col",{staticStyle:{"text-align":"center"},attrs:{span:8,offset:8}},[t.isAdd?e("el-button",{staticStyle:{width:"200px"},attrs:{type:"primary",loading:t.addLoading},on:{click:t.handleSubmit}},[t._v(t._s(t.$t("common.add")))]):e("el-button",{staticStyle:{width:"200px"},attrs:{type:"primary",loading:t.addLoading},on:{click:t.handleBatchDelete}},[t._v(t._s(t.$t("common.delete")))])],1)],1)],1)],1)},s=[],n=(i("d81d"),i("14d9"),i("d3b7"),i("159b"),i("4795"),i("9c0e1")),o=i("0139"),r=i("e285"),c=i("5101"),l=i("a05b"),d=i("e173"),u={name:"StockDevices",data:function(){return{deleteIcon:d,isAdd:!1,dialog:!1,loading:!1,addLoading:!1,exportLoading:!1,queryText:"",currentPage:1,pageSize:20,totalcount:0,tableList:[]}},components:{TextareaIds:n["a"],LabelWrap:o["a"]},mounted:function(){this.deviceids=[],this.queryStockDevices()},watch:{dialog:function(t){0==t&&this.$refs.textareaIds.handleClear()}},mixins:[l["a"]],methods:{exportAll:function(){var t=this,e=[[this.$t("reportForm.index"),this.$t("alarm.devNum"),this.$t("reportForm.addTime")]];this.exportLoading=!0,Object(r["Nb"])({all:!0}).then((function(i){var a=i.devices;a.forEach((function(t,i){t.addtimeStr=c["a"].longToLocalDateTimeStr(t.addtime);var a=[];a.push(++i),a.push(t.deviceid),a.push(t.addtimeStr),e.push(a)}));var s={title:t.$t("bgManage.deviceList"),data:e,dateRange:null,exportMaxLength:1e5};new ExcelCls(s).exportExcel(t),t.exportLoading=!1}))},handleSubmit:function(){var t=this,e=this.$refs.textareaIds;e.immediatelyMatching();var i=this.deviceids;this.addLoading=!0,Object(r["h"])(i).then((function(i){0==i.status&&setTimeout((function(){t.addLoading=!1;var a=i.errorrecords;if(0==a.length)e.isOk=!0,e.errorTips=t.$t("tips.addSucc"),t.queryStockDevices();else{e.isOk=!1;var s="";a.forEach((function(t){s+=t.deviceid+": "+t.cause+"\n"})),e.errorTips=s}}),1e3)}))},handleDelete:function(t){var e=this;Object(r["H"])([t.row.deviceid]).then((function(i){var a=i.status,s=i.cause;0==a?(e.$delete(e.tableList,t.rowIndex),e.totalcount--):e.$XModal.message({message:s,status:"error",zIndex:9999})}))},handleBatchDelete:function(){var t=this,e=this.$refs.textareaIds,i=this.deviceids;i.length&&(this.addLoading=!0,Object(r["H"])(i).then((function(i){var a=i.status,s=i.cause;0==a?(t.$XModal.message({message:t.$t("tips.deleteSucc"),status:"success",zIndex:9999}),t.dialog=!1,e.handleClear(),t.queryStockDevices()):t.$XModal.message({message:s,status:"error",zIndex:9999}),t.addLoading=!1})))},handleQuery:function(){this.currentPage=1,this.queryStockDevices()},queryStockDevices:function(){var t=this,e={offset:this.currentPage-1,count:this.pageSize,keyword:this.queryText,all:!1};this.loading=!0,Object(r["Nb"])(e).then((function(e){var i=e.devices,a=e.totalcount;t.loading=!1,t.tableList=i.map((function(t){return t.addtimeStr=c["a"].longToLocalDateTimeStr(t.addtime),t})),t.totalcount=a}))},onChangeIds:function(t){this.deviceids=t},handleSizeChange:function(t){this.pageSize=t,this.queryStockDevices()},handleCurrentChange:function(t){this.currentPage=t,this.queryStockDevices()},currentChangePage:function(t){this.queryStockDevices()}}},h=u,p=(i("95cc"),i("2877")),g=Object(p["a"])(h,a,s,!1,null,"865b13f6",null),v=g.exports;e["default"]=v},"7d2c":function(t,e,i){"use strict";i("be1c")},"95cc":function(t,e,i){"use strict";i("d72f")},"9c0e1":function(t,e,i){"use strict";var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"textarea-ids"},[e("el-row",{attrs:{gutter:10}},[e("el-col",{staticClass:"textarea-ids-red-star",attrs:{span:1}},[t._v("*")]),e("el-col",{attrs:{span:11}},[e("span",[t._v(" "+t._s(t.$t("common.deviceids")))]),t.showTips?t._e():e("span",{attrs:{span:""}},[t._v("/SIM/ICCID")]),t.showTips?e("el-tooltip",{attrs:{placement:"top",effect:"light"}},[e("div",{attrs:{slot:"content"},slot:"content"},[e("div",[t._v(t._s(t.$t("tips.addNewDeviceTip1")))]),e("div",[t._v(t._s(t.$t("tips.addNewDeviceTip2")))]),e("div",[t._v(t._s(t.$t("tips.addNewDeviceTip3")))]),e("div",[t._v(t._s(t.$t("tips.addNewDeviceTip4")))])]),e("i",{staticClass:"el-icon-warning-outline new-add-tips-icon",staticStyle:{position:"relative",top:"-1px"}})]):t._e(),e("div",{staticClass:"tips_clear noselect"},[e("div",{staticClass:"small-clear",on:{click:t.handleClear}},[t._v(t._s(t.$t("tips.clear")))])])],1),e("el-col",{attrs:{span:11}},[e("span",[t._v(t._s(t.$t("reportForm.result")))])])],1),e("el-row",{staticClass:"margin_b10",attrs:{gutter:10}},[e("el-col",{attrs:{span:11,offset:1}},[e("el-input",{attrs:{type:"textarea",autosize:{minRows:10,maxRows:10},rows:10,placeholder:t.textPlaceholder},on:{input:t.onChange},model:{value:t.ids,callback:function(e){t.ids=e},expression:"ids"}})],1),e("el-col",{class:[t.isOk?"correct":"error"],attrs:{span:11}},[e("el-input",{attrs:{type:"textarea",readonly:!0,disabled:"",autosize:{minRows:10,maxRows:10},rows:10},model:{value:t.errorTips,callback:function(e){t.errorTips=e},expression:"errorTips"}})],1)],1)],1)},s=[],n=(i("99af"),i("c975"),i("a15b"),i("14d9"),i("d3b7"),i("ac1f"),i("5319"),i("498a"),i("159b"),i("4795"),i("c276")),o={name:"Temp",props:{showTips:{type:Boolean,default:!1},textPlaceholder:{type:String,default:function(){return this.$t("tips.textareaids")}}},data:function(){return{ids:"",isOk:!1,isMatchingCompletado:!0,errorTips:""}},methods:{handleClear:function(){this.ids="",this.errorTips="",this.isOk=!1,this.isMatchingCompletado=!0,this.$emit("on-change",[])},onChange:function(t){if(""==t)return this.errorTips="",this.isOk=!1,void this.$emit("on-change",[]);t=t.replace(/\s+/g,"\n");var e=/[0-9A-Za-z]/g.exec(t);if(e){this.isMatchingCompletado=!1;var i=e.input;this.matchingDeviceIds(this,i)}else this.errorTips=this.$t("tips.deviceIdTips")},submitFailTips:function(t){var e=this,i="";t.forEach((function(t){var a=t.deviceid,s=t.cause,n=t.status,o=t.creater,r="";r=1==n?null!=o&&o.length>0?e.$t("tips.occupiedUser")+o:e.$t("tips.occupiedOtherUser"):s,i+="".concat(a,":").concat(r,"\n")})),this.errorTips=i,this.isOk=!1},immediatelyMatching:function(){var t=this,e=this.ids;if(t.isMatchingCompletado=!0,e&&e.length>0){var i=t.filtered(e),a=i.length;t.errorTips=t.$t("missing.totalNumber")+" : "+a,t.isOk=!0,t.ids=i.join("\n"),t.$emit("on-change",i)}else t.errorTips=t.$t("missing.adjustDeviceidLength"),t.isOk=!1,t.$emit("on-change",[]);setTimeout((function(){t.isMatchingCompletado=!1}),2e3)},matchingDeviceIds:Object(n["e"])((function(t,e){if(0==t.isMatchingCompletado)if(t.isMatchingCompletado=!0,e&&e.length>0){var i=t.filtered(e),a=i.length;t.errorTips=t.$t("missing.totalNumber")+" : "+a,t.isOk=!0,t.ids=i.join("\n"),console.log("newArr",i),t.$emit("on-change",i)}else t.errorTips=t.$t("missing.adjustDeviceidLength"),t.isOk=!1,t.$emit("on-change",[])}),2e3),filtered:function(t){function e(t){for(var e=[],i=0;i<t.length;i++)-1==e.indexOf(t[i])&&e.push(t[i]);return e}var i=[];return t.split("\n").forEach((function(t){t=t.trim(),t&&i.push(t)})),e(i)}},mounted:function(){}},r=o,c=(i("7d2c"),i("2877")),l=Object(c["a"])(r,a,s,!1,null,null,null);e["a"]=l.exports},be1c:function(t,e,i){},d72f:function(t,e,i){}}]);