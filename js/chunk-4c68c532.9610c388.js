(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4c68c532"],{2607:function(t,e,i){},"427e":function(t,e,i){"use strict";i("2607")},4896:function(t,e,i){t.exports=i.p+"img/tripin.1821f8a3.png"},"5a6c":function(t,e,i){"use strict";i("8c87")},"632c":function(t,e,i){"use strict";var r=function(){var t=this,e=t._self._c;return e("div",{ref:"wraper",class:t.wraperClasses,on:{mouseup:t.handleMouseup,mousemove:t.handleMousemove,mouseleave:t.handleMouseout}},["horizontal"===t.direction?e("div",{class:"".concat(t.prefix,"-container")},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.horizontalModeShowLeft,expression:"horizontalModeShowLeft"}],class:"".concat(t.prefix,"-left-area"),style:{width:t.leftSize}},[t._t("left")],2),t._t("trigger",(function(){return[e("div",{directives:[{name:"show",rawName:"v-show",value:t.horizontalModeShowLeft,expression:"horizontalModeShowLeft"}],ref:"trigger",class:"".concat(t.prefix,"-trigger"),style:t.horizontalTriggerStyle},[e("div",{staticClass:"split-pane-trigger-btn",on:{click:t.onClickHorizontal}}),e("div",{class:"".concat(t.prefix,"-trigger-wrap"),attrs:{unselectable:"on"},on:{mousedown:t.handleMousedown}})])]})),e("div",{class:"".concat(t.prefix,"-right-area"),style:{width:t.horizontalModeShowLeft?t.rightSize:"100%"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:!t.horizontalModeShowLeft,expression:"!horizontalModeShowLeft"}],staticClass:"split-pane-right-btn",on:{click:t.onClickHorizontal}}),t._t("right")],2)],2):e("div",{class:"".concat(t.prefix,"-container")},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.verticalShowTop,expression:"verticalShowTop"}],class:"".concat(t.prefix,"-top-area"),style:{height:"move"==t.verticalMode?t.leftSize:"100%"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:"bottom"==t.verticalMode,expression:"verticalMode == 'bottom'"}],staticClass:"trigger-show-bottom",on:{click:function(e){return t.setVerticalMode("move")}}}),t._t("top")],2),t._t("trigger",(function(){return[e("div",{directives:[{name:"show",rawName:"v-show",value:"move"==t.verticalMode,expression:"verticalMode == 'move'"}],ref:"trigger",class:"".concat(t.prefix,"-trigger"),style:t.verticalTriggerStyle},[e("div",{class:"".concat(t.prefix,"-trigger-btn")},[e("div",{on:{click:function(e){return t.setVerticalMode("top")}}}),e("div",{on:{click:function(e){return t.setVerticalMode("bottom")}}})]),e("div",{class:"".concat(t.prefix,"-trigger-wrap"),attrs:{unselectable:"on"},on:{mousedown:t.handleMousedown}})])]})),e("div",{directives:[{name:"show",rawName:"v-show",value:t.verticalShowBottom,expression:"verticalShowBottom"}],class:"".concat(t.prefix,"-bottom-area"),style:{height:"move"==t.verticalMode?t.rightSize:"100%"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:"top"==t.verticalMode,expression:"verticalMode == 'top'"}],staticClass:"trigger-show-top",on:{click:function(e){return t.setVerticalMode("move")}}}),t._t("bottom")],2)],2)])},a=[],o=(i("c975"),i("a9e3"),function(t,e){return e.indexOf(t)>=0}),n={name:"splitPane",props:{value:{type:[Number,String],default:50},horizontalModeShowLeft:{type:Boolean,default:!0},verticalMode:{type:String,default:"move"},direction:{type:String,default:"horizontal",validator:function(t){return o(t,["vertical","horizontal"])}},min:{type:[Number,String],default:3},max:{type:[Number,String],default:97},maxRight:{type:Boolean,default:!1},right:{type:Boolean,default:!1},triggerStyle:{type:Object,default:function(){return"horizontal"===this.direction?{width:"8px",background:"#ffffff"}:{height:"8px",background:"#ffffff"}}}},data:function(){return{prefix:"split-pane",canMove:!1,triggerOffset:50,triggerOldOffset:50,offset:{},atMin:!1,atMax:!1,directionMark:0}},computed:{wraperClasses:function(){return[this.prefix,"vertical"===this.direction?"".concat(this.prefix,"-vertical"):"".concat(this.prefix,"-horizontal")]},leftSize:function(){return this.right?"".concat(100-this.triggerOffset,"%"):"".concat(this.triggerOffset,"%")},rightSize:function(){return this.right?"".concat(this.triggerOffset,"%"):"".concat(100-this.triggerOffset,"%")},triggerLeft:function(){return this.right?"".concat(100-this.triggerOffset,"%"):"".concat(this.triggerOffset,"%")},minTransed:function(){return this.transValue(this.min)},maxTransed:function(){var t=this.right?100-this.transValue(this.max):this.transValue(this.max);return this.maxRight?100-t:t},horizontalTriggerStyle:function(){return Object.assign({left:this.triggerLeft,borderTop:"1px solid #E2E3E5"},this.triggerStyle)},verticalTriggerStyle:function(){return Object.assign({top:this.triggerLeft},this.triggerStyle)},verticalShowTop:function(){return"bottom"==this.verticalMode||"move"==this.verticalMode},verticalShowBottom:function(){return"top"==this.verticalMode||"move"==this.verticalMode}},methods:{setVerticalMode:function(t){this.$emit("on-resize",t)},onClickHorizontal:function(){this.$emit("on-resize",!this.horizontalModeShowLeft)},handleMouseup:function(t){1==this.canMove&&(this.canMove=!1,this.$emit("on-resizing-end",t))},transValue:function(t){return"number"===typeof t?t:Math.floor(parseFloat(t)/this.$refs.wraper.offsetWidth*1e4)/100},handleMousedown:function(t){this.canMove=!0,this.triggerOldOffset=this.triggerOffset,this.offset={x:t.pageX,y:t.pageY},this.$emit("on-resizing-start",t),t.preventDefault()},handleMouseout:function(){this.canMove=!1},handleMousemove:function(t){if(this.canMove){var e,i=0;if("horizontal"===this.direction?(i=Math.floor((t.clientX-this.offset.x)/this.$refs.wraper.offsetWidth*1e4)/100,e=this.triggerOldOffset+(this.right?-i:i)):(i=Math.floor((t.clientY-this.offset.y)/this.$refs.wraper.offsetHeight*1e4)/100,e=this.triggerOldOffset+(this.right?-i:i)),this.right){var r=100-e;r<=this.minTransed?this.triggerOffset=100-Math.max(r,this.minTransed):this.triggerOffset=100-Math.min(r,this.maxTransed)}else e<=this.minTransed?this.triggerOffset=Math.max(e,this.minTransed):this.triggerOffset=Math.min(e,this.maxTransed);t.atMin=100-e<=this.minTransed,t.atMax=100-e>=this.maxTransed,t.pageX>this.directionMark?t.direction=1:t.direction=0,this.directionMark=t.pageX,this.$emit("input",this.triggerOffset),this.$emit("on-resizing",t)}},setTriggerOffset:function(t){var e=this;this.$nextTick((function(){e.triggerOffset="number"===typeof t?t:Math.floor(parseInt(t)/e.$refs.wraper.offsetWidth*1e4)/100,e.$emit("input",e.triggerOffset)}))}},watch:{value:function(t){var e=this;this.$nextTick((function(){e.triggerOffset="number"===typeof t?t:Math.floor(parseInt(t)/e.$refs.wraper.offsetWidth*1e4)/100}))}},mounted:function(){var t=this;void 0!==this.value&&(this.$nextTick((function(){t.triggerOffset="number"===typeof t.value?t.value:Math.floor(parseInt(t.value)/t.$refs.wraper.offsetWidth*1e4)/100})),this.triggerOffset="number"===typeof this.value?this.value:Math.floor(parseInt(this.value)/this.$refs.wraper.offsetWidth*1e4)/100)}},s=n,l=(i("427e"),i("2877")),c=Object(l["a"])(s,r,a,!1,null,null,null),d=c.exports;e["a"]=d},"6bef":function(t,e,i){"use strict";i.r(e);var r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"report-form full trip-report"},[e("div",{staticClass:"report-form-inner"},[e("div",{staticClass:"report-form-inner-header",staticStyle:{height:"35px"}},[e("div",{staticClass:"f_left"},[e("MultiChoiceVehicle",{on:{onSelectDevice:t.onSelectDevice}})],1),e("div",{staticClass:"f_left"},[e("SelectDate",{model:{value:t.dateRange,callback:function(e){t.dateRange=e},expression:"dateRange"}})],1),e("div",{staticClass:"f_left"},[e("QuickTimeRange",{model:{value:t.dateRange,callback:function(e){t.dateRange=e},expression:"dateRange"}})],1),e("div",{staticClass:"f_left"},[e("el-button",{attrs:{loading:t.loading,type:"primary"},on:{click:t.handleQuery}},[t._v(t._s(t.$t("common.query")))])],1),e("div",{staticClass:"f_left"},[e("el-popover",{attrs:{placement:"bottom",width:"236",trigger:"click"}},[e("div",[e("el-button",{staticStyle:{width:"100px"},attrs:{slot:"reference",type:"primary",plain:"",loading:t.exportLoading1},on:{click:t.exportData},slot:"reference"},[t._v(t._s(t.$t("common.summary")))]),e("el-button",{staticStyle:{width:"100px"},attrs:{slot:"reference",type:"primary",loading:t.exportLoading2,plain:""},on:{click:t.exportDetailData},slot:"reference"},[t._v(t._s(t.$t("reportForm.detailed")))])],1),e("el-button",{attrs:{slot:"reference",type:"primary"},slot:"reference"},[t._v(t._s(t.$t("common.export")))])],1)],1)]),e("div",{staticClass:"report-form-inner-header",staticStyle:{height:"34px","margin-top":"4px"}},[e("div",{staticClass:"f_left"},[e("TripDropdown",{model:{value:t.tripType,callback:function(e){t.tripType=e},expression:"tripType"}})],1),e("div",{staticClass:"f_left"},[e("TripPulldown",{attrs:{label:t.$t("reportForm.deliveryArea"),treeData:t.treeData},model:{value:t.startgeouuids,callback:function(e){t.startgeouuids=e},expression:"startgeouuids"}})],1),e("div",{directives:[{name:"show",rawName:"v-show",value:"0"!=t.tripType,expression:"tripType != '0'"}],staticClass:"f_left"},[e("TripPulldown",{attrs:{label:t.$t("reportForm.ReceivingArea"),treeData:t.treeData},model:{value:t.endgeouuids,callback:function(e){t.endgeouuids=e},expression:"endgeouuids"}})],1)]),e("el-tabs",{model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[e("el-tab-pane",{attrs:{label:t.$t("reportForm.tripStatistics")+"(".concat(t.totalList.length,")"),name:"tabTotal"}}),e("el-tab-pane",{attrs:{label:t.$t("reportForm.tripDetails"),name:"details"}})],1),e("div",{directives:[{name:"show",rawName:"v-show",value:"details"==t.activeName,expression:"activeName == 'details'"}],staticStyle:{position:"absolute",left:"0px",right:"0px",top:"82px","text-align":"center"}},[e("b",{domProps:{textContent:t._s(t.devicenameAndDeviceid)}}),t._v("("+t._s(t.detailsList.length)+") ")]),e("div",{staticClass:"report-form-inner-content",staticStyle:{top:"118px"}},[e("div",{style:t.statisticsStyle},[e("vxe-table",{staticClass:"mytable-scrollbar",attrs:{"sort-config":t.sortConfig,"menu-config":t.tableMenu,border:"",resizable:"","auto-resize":"","show-overflow":"","highlight-hover-row":"",size:"mini",height:"auto",data:t.totalList},on:{"menu-click":t.handleClickTableMenu}},[e("vxe-table-column",{attrs:{type:"seq",width:"60",title:t.$t("reportForm.index")}}),e("vxe-table-column",{attrs:{title:t.$t("reportForm.action"),width:"70"},scopedSlots:t._u([{key:"default",fn:function(i){return[e("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(e){return t.handleClickRow(i.row)}}},[t._v(t._s(t.$t("reportForm.details")))])]}}])}),e("vxe-table-column",{attrs:{field:"devicename",width:"120",title:t.$t("alarm.devName"),sortable:""}}),e("vxe-table-column",{attrs:{field:"deviceid",width:"120",title:t.$t("alarm.devNum"),sortable:""}}),e("vxe-table-column",{attrs:{field:"creater",title:t.$t("reportForm.creater"),width:"100",sortable:""},scopedSlots:t._u([{key:"default",fn:function(i){return[e("el-popover",{attrs:{placement:"bottom",trigger:"click"}},[e("div",{staticClass:"parents-wrapper"},t._l(t.parentsList,(function(i){return e("div",{key:i.username},[t._v(t._s(i.username)+"("+t._s(i.usertypeStr)+")")])})),0),e("el-button",{staticStyle:{color:"#000000"},attrs:{slot:"reference",type:"text"},on:{click:function(e){return t.queryParents(i.row.creater)}},slot:"reference"},[t._v(t._s(i.row.creater))])],1)]}}])}),e("vxe-table-column",{attrs:{field:"groupname",title:t.$t("reportForm.groupName"),width:"100",sortable:""}}),e("vxe-table-column",{attrs:{field:"tripcount",width:"80",title:t.$t("reportForm.tripCount"),sortable:""}}),e("vxe-table-column",{attrs:{field:"timeduration",width:"100",formatter:t.numberToFixed2,align:"right",title:t.$t("reportForm.duration"),sortable:""}}),e("vxe-table-column",{attrs:{field:"mileage",width:"100",formatter:t.numberToFixed2,align:"right",title:t.$t("reportForm.mileage"),sortable:""}}),e("vxe-table-column",{attrs:{field:"totalrunningfuel",width:"120",formatter:t.numberToFixed2,align:"right",title:t.$t("reportForm.oilConsumption"),sortable:""}}),e("vxe-table-column",{attrs:{field:"totalotherfuel",width:"120",formatter:t.numberToFixed2,align:"right",title:t.$t("reportForm.totalnotrunningad"),sortable:""}}),e("vxe-table-column",{attrs:{field:"starttimeStr",width:"150",title:t.$t("reportForm.startTime"),sortable:""}}),e("vxe-table-column",{attrs:{field:"endtimeStr",width:"150",title:t.$t("reportForm.endTime"),sortable:""}}),e("vxe-table-column",{attrs:{field:"starttotaldistance",width:"105",formatter:t.numberToFixed2,align:"right",title:t.$t("reportForm.startDistance"),sortable:""}}),e("vxe-table-column",{attrs:{field:"endtotaldistance",width:"105",formatter:t.numberToFixed2,align:"right",title:t.$t("reportForm.endDistance"),sortable:""}})],1)],1),e("div",{style:t.detailsStyle},[e("div",{staticClass:"trip-report-details-table"},[e("vxe-table",{ref:"xTable",staticClass:"mytable-scrollbar",attrs:{"auto-resize":"","menu-config":t.tableMenu,"highlight-current-row":"",border:"",resizable:"","show-overflow":"","highlight-hover-row":"",size:"mini",height:"auto",data:t.detailsList},on:{"menu-click":t.handleClickTableMenu,"cell-click":t.cellClickEvent}},[e("vxe-table-column",{attrs:{type:"seq",width:"60",title:t.$t("reportForm.index")}}),e("vxe-table-column",{attrs:{field:"fenceName",title:t.$t("reportForm.fence"),sortable:""}}),e("vxe-table-column",{attrs:{field:"timeduration",formatter:t.numberToFixed2,align:"right",title:t.$t("reportForm.duration"),sortable:""}}),e("vxe-table-column",{attrs:{field:"mileage",formatter:t.numberToFixed2,align:"right",width:"100",title:t.$t("reportForm.mileage"),sortable:""}}),e("vxe-table-column",{attrs:{field:"totalrunningfuel",formatter:t.numberToFixed2,align:"right",width:"100",title:t.$t("reportForm.oilConsumption"),sortable:""}}),e("vxe-table-column",{attrs:{field:"totalotherfuel",formatter:t.numberToFixed2,align:"right",width:"100",title:t.$t("reportForm.totalnotrunningad"),sortable:""}}),e("vxe-table-column",{attrs:{field:"starttimeStr",width:"150",title:t.$t("reportForm.startTime"),sortable:""}}),e("vxe-table-column",{attrs:{field:"endtimeStr",width:"150",title:t.$t("reportForm.endTime"),sortable:""}}),e("vxe-table-column",{attrs:{field:"starttotaldistance",formatter:t.numberToFixed2,align:"right",width:"105",title:t.$t("reportForm.startDistance"),sortable:""}}),e("vxe-table-column",{attrs:{field:"endtotaldistance",formatter:t.numberToFixed2,align:"right",width:"105",title:t.$t("reportForm.endDistance"),sortable:""}})],1)],1),e("div",{staticClass:"trip-report-details"},[e("split-pane",{staticStyle:{height:"100%"},attrs:{horizontalModeShowLeft:t.horizontalModeShowLeft,mode:"horizontal",min:"200",max:"1200"},on:{"on-resize":t.onResize,"on-resizing-end":t.onResizingEnd},model:{value:t.offsetVertical,callback:function(e){t.offsetVertical=e},expression:"offsetVertical"}},[e("div",{staticStyle:{height:"100%","background-color":"#ffffff"},attrs:{slot:"left"},slot:"left"},[e("ReportMap",{ref:"mapIns"})],1),e("div",{staticStyle:{height:"100%","background-color":"#ffffff"},attrs:{slot:"right"},slot:"right"},[e("TravelEchart",{ref:"echartIns"})],1)])],1)])])],1)])},a=[],o=(i("99af"),i("14d9"),i("b0c0"),i("a9e3"),i("d3b7"),i("159b"),i("4795"),i("e561")),n=i("d462"),s=i("57c9"),l=i("80f4"),c=i("41da"),d=function(){var t=this,e=t._self._c;return e("div",{staticClass:"multi-choice trip-dropdown",style:t.warpStyle},[e("div",{staticClass:"multi-choice-label"},[t._v(" "+t._s(t.$t("reportForm.statisticalType"))+" ")]),e("div",{staticClass:"multi-choice-input"},[e("el-dropdown",{attrs:{trigger:"click"},on:{command:t.onClickDropdownMenu}},[e("div",{staticClass:"trip-dropdown-button el-button--mini el-dropdown-selfdefine",staticStyle:{width:"240px","text-align":"left"}},[e("img",{directives:[{name:"show",rawName:"v-show",value:"0"==t.value,expression:"value=='0'"}],staticStyle:{width:"36px",height:"18px","margin-right":"4px"},attrs:{src:t.icon1}}),e("img",{directives:[{name:"show",rawName:"v-show",value:"1"==t.value,expression:"value=='1'"}],staticStyle:{width:"36px",height:"18px","margin-right":"4px"},attrs:{src:t.icon2}}),e("img",{directives:[{name:"show",rawName:"v-show",value:"2"==t.value,expression:"value=='2'"}],staticStyle:{width:"36px",height:"18px","margin-right":"4px"},attrs:{src:t.icon3}}),e("span",[t._v(t._s(t.tripSettingStr))])]),e("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[e("el-dropdown-item",{attrs:{command:"0"}},[e("img",{staticStyle:{width:"36px",height:"18px","margin-right":"4px"},attrs:{src:t.icon1}}),e("span",[t._v(t._s(t.$t("reportForm.tripRule1")))])]),e("el-dropdown-item",{attrs:{command:"1"}},[e("img",{staticStyle:{width:"36px",height:"18px","margin-right":"4px"},attrs:{src:t.icon2}}),e("span",[t._v(t._s(t.$t("reportForm.tripRule2")))])]),e("el-dropdown-item",{attrs:{command:"2"}},[e("img",{staticStyle:{width:"36px",height:"18px","margin-right":"4px"},attrs:{src:t.icon3}}),e("span",[t._v(t._s(t.$t("reportForm.tripRule3")))])])],1)],1)],1)])},u=[],h=i("4896"),f=i("c89f"),p=i("da25"),m={name:"TripDropdown",props:{value:{type:String,default:"0"}},data:function(){return{icon1:h,icon2:f,icon3:p}},computed:{warpStyle:function(){return{width:"320px"}},tripSettingStr:function(){return this.$t("reportForm.tripRule".concat(Number(this.value)+1))}},methods:{onClickDropdownMenu:function(t){this.$emit("input",t)}},mounted:function(){}},g=m,v=(i("de80"),i("2877")),b=Object(v["a"])(g,d,u,!1,null,null,null),w=b.exports,x=function(){var t=this,e=t._self._c;return e("div",{staticClass:"multi-choice trip-pulldown",style:t.warpStyle},[e("div",{staticClass:"multi-choice-label"},[t._v(" "+t._s(t.label)+" ")]),e("div",{staticClass:"multi-choice-input"},[e("div",{staticClass:"trip-pulldown-wrapper"},[e("el-popover",{attrs:{placement:"bottom",width:"180",trigger:"manual","append-to-body":!1,"popper-options":{boundariesElement:"body",gpuAcceleration:!0,positionFixed:!0,preventOverflow:!0}},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[e("div",{directives:[{name:"clickoutside",rawName:"v-clickoutside",value:t.handleClickOutside,expression:"handleClickOutside"}],staticClass:"ztree-drapdown",staticStyle:{height:"180px",width:"100%",overflow:"hidden"}},[e("el-scrollbar",{staticStyle:{height:"100%"}},[e("el-tree",{ref:"elTree",attrs:{"default-checked-keys":t.checkedKeys,data:t.treeData,"filter-node-method":t.filterNode,"show-checkbox":""},on:{"check-change":t.handleCheckChange}})],1)],1),e("el-input",{attrs:{slot:"reference","prefix-icon":"el-icon-search",clearable:""},on:{input:t.onInputChange},nativeOn:{click:function(e){t.show=!0}},slot:"reference",model:{value:t.textVal,callback:function(e){t.textVal=e},expression:"textVal"}})],1)],1)])])},y=[],$=(i("4de4"),i("c975"),i("a15b"),i("d81d"),i("9169")),S={name:"TripPulldown",props:{value:{type:Array,default:[]},label:{type:String,default:""},treeData:{type:Array,default:function(){return[]}}},data:function(){return{show:!1,textVal:"",checkedKeys:[]}},directives:{Clickoutside:$["a"]},computed:{warpStyle:function(){return{width:"240px"}}},methods:{handleClickOutside:function(){this.show=!1},handleCheckChange:function(){var t=this.$refs.elTree.getCheckedNodes(),e=t.filter((function(t){return void 0==t.children})).map((function(t){return t.value})),i=t.filter((function(t){return void 0==t.children})).map((function(t){return t.label}));this.textVal=i.join(","),this.$emit("input",e)},onInputChange:function(t){""==t?this.$refs.elTree.filter(""):this.$refs.elTree.filter(t)},filterNode:function(t,e){return!t||-1!==e.label.indexOf(t)}},mounted:function(){}},T=S,M=(i("5a6c"),Object(v["a"])(T,x,y,!1,null,null,null)),F=M.exports,k=i("632c"),C=i("5101"),z=i("1c31"),O=i("7cf8"),D=i("6e52"),_=i("4c3c"),L=i("a05b"),N=i("0c87"),R=i("c276"),j={name:"tripReport",data:function(){return{loading:!1,exportLoading1:!1,exportLoading2:!1,offsetVertical:Number(50),horizontalModeShowLeft:!0,activeName:"tabTotal",tripType:"0",dateRange:[new Date,new Date],treeData:[],startgeouuids:[],endgeouuids:[],totalList:[],detailsList:[],devicenameAndDeviceid:""}},mixins:[_["a"],L["a"],N["a"]],watch:{dateRange:function(){this.loading||this.handleQuery()}},components:{MultiChoiceVehicle:o["a"],SelectDate:n["a"],QuickTimeRange:s["a"],TripDropdown:w,TripPulldown:F,ReportMap:l["a"],TravelEchart:c["a"],SplitPane:k["a"]},computed:{statisticsStyle:function(){return{zIndex:"tabTotal"==this.activeName?999:0}},detailsStyle:function(){return{zIndex:"details"==this.activeName?999:0}}},methods:{numberToFixed2:R["ob"],onResizingEnd:function(){this.onResize(this.horizontalModeShowLeft)},onResize:function(t){var e=this;this.horizontalModeShowLeft=t,setTimeout((function(){e.$refs.echartIns.resize()}),300)},onSelectDevice:function(t){this.deviceids=t},handleClickRow:function(t){var e=this;if(t.records.length>0){if(this.devicenameAndDeviceid=t.devicename+" - "+t.deviceid,this.activeName="details",this.detailsList=t.records,this.detailsList.length>0){var i=this.detailsList[0],r=i.starttime,a=i.endtime,o={deviceid:i.deviceid,endtimeutclong:a,begintimeutclong:r,begintime:i.starttimeStr,endtime:i.endtimeStr,timezone:C["a"].getOffset()};Object(O["X"])(o).then((function(t){var r=t.records;r&&(e.$refs.mapIns.drawFenceAndLine(r,i.points),e.$refs.echartIns.updateChartsOption(r))})),this.$refs.xTable.setCurrentRow(i)}}else this.$XModal.message({message:this.$t("tips.noData"),status:"error",zIndex:9999})},cellClickEvent:function(t){var e=this,i=t.row,r=i.starttime,a=i.endtime,o={deviceid:i.deviceid,begintime:i.starttimeStr,endtime:i.endtimeStr,timezone:C["a"].getOffset(),begintimeutclong:r,endtimeutclong:a};Object(O["X"])(o).then((function(t){var r=t.records;r&&(e.$refs.mapIns.drawFenceAndLine(r,i.points),e.$refs.echartIns.updateChartsOption(r))}))},handleQuery:function(){var t=this,e=this.deviceids,i=this.dateRange,r=Number(this.tripType),a=this.startgeouuids,o=this.endgeouuids;if(0!=e.length)if(0!=i.length){if("details"==this.activeName&&(this.activeName="tabTotal",this.totalList=[],this.detailsList=[]),0==r){if(0==a.length)return void this.$XModal.message({message:this.$t("tips.selectDeliveryArea"),status:"error",zIndex:9999})}else if(0==a.length||0==o.length)return void this.$XModal.message({message:this.$t("tips.selectReceivingArea"),status:"error",zIndex:9999});var n=C["a"].format(i[0],"yyyy-MM-dd"),s=C["a"].format(i[1],"yyyy-MM-dd"),l={startday:n,endday:s,offset:C["a"].getOffset(),deviceids:e,triptype:r,startgeouuids:a,endgeouuids:o};this.loading=!0,Object(z["ob"])(l).then((function(e){var i=e.summaries;t.loading=!1,t.queryDetailDateRange="".concat(n," ").concat(s);var r=[];i&&(r=t.getAllTripTableData(i)),t.totalList=r})).catch((function(e){t.loading=!1}))}else this.$XModal.message({message:this.$t("tips.selectTime"),status:"error",zIndex:9999});else this.$XModal.message({message:this.$t("tips.selectDevice"),status:"error",zIndex:9999})},getAllTripTableData:function(t){var e=this.tripType;return t.forEach((function(t){var i=t.deviceid,r=D["a"].deviceInfos[i],a=r.devicename,o=D["a"].getShowName(r.creater),n=r.groupname;t.devicename=a,t.creater=o,t.groupname=n,t.tripcount=t.records.length,t.starttimeStr=t.starttime>0?C["a"].longToLocalDateTimeStr(t.starttime):0,t.endtimeStr=t.endtime>0?C["a"].longToLocalDateTimeStr(t.endtime):0,t.timeduration=t.timeduration/1e3/3600,t.totaldistanceduration=t.totaldistanceduration/1e3,t.starttotaldistance=t.starttotaldistance/1e3,t.endtotaldistance=t.endtotaldistance/1e3,t.totalrunningfuel=t.totalrunningfuel/100,t.totalotherfuel=t.totalotherfuel/100,t.mileage=t.endtotaldistance-t.starttotaldistance,t.records.forEach((function(t){var r="";t.deviceid=i,t.devicename=a,t.creater=o,t.groupname=n,t.starttimeStr=C["a"].longToLocalDateTimeStr(t.starttime),t.endtimeStr=C["a"].longToLocalDateTimeStr(t.endtime),t.timeduration=t.timeduration/1e3/3600,t.totaldistanceduration=t.totaldistanceduration/1e3,t.starttotaldistance=t.starttotaldistance/1e3,t.endtotaldistance=t.endtotaldistance/1e3,t.totalrunningfuel=t.totalrunningfuel/100,t.totalotherfuel=t.totalotherfuel/100,t.mileage=t.endtotaldistance-t.starttotaldistance,"0"==e?r=t.points[0].geosystemrecord.name:"1"==e?r=t.points[1].geosystemrecord.name+"→"+t.points[2].geosystemrecord.name:"2"==e&&(r=t.points[1].geosystemrecord.name+"←→"+t.points[2].geosystemrecord.name),t.fenceName=r}))})),t},exportData:function(){if(this.totalList.length){var t=[[this.$t("reportForm.index"),this.$t("alarm.devName"),this.$t("alarm.devNum"),this.$t("reportForm.creater"),this.$t("reportForm.groupName"),this.$t("reportForm.tripCount"),this.$t("reportForm.duration"),this.$t("reportForm.mileage"),this.$t("reportForm.oilConsumption"),this.$t("reportForm.totalnotrunningad"),this.$t("reportForm.startTime"),this.$t("reportForm.endTime"),this.$t("reportForm.startDistance"),this.$t("reportForm.endDistance")]];this.totalList.forEach((function(e,i){var r=[];r.push(i),r.push(e.devicename),r.push(e.deviceid),r.push(e.creater),r.push(e.groupname),r.push(e.tripcount),r.push(Object(R["ob"])(e.timeduration)),r.push(Object(R["ob"])(e.mileage)),r.push(Object(R["ob"])(e.totalrunningfuel)),r.push(Object(R["ob"])(e.totalotherfuel)),r.push(e.starttimeStr),r.push(e.endtimeStr),r.push(Object(R["ob"])(e.starttotaldistance)),r.push(Object(R["ob"])(e.endtotaldistance)),t.push(r)}));var e={title:this.$t("reportForm.tripReport"),data:t,dateRange:this.queryDetailDateRange};this.exportLoading1=!0,new ExcelCls(e).exportExcel(this)}},exportDetailData:function(){if(this.totalList.length){var t=[[this.$t("reportForm.index"),this.$t("alarm.devName"),this.$t("alarm.devNum"),this.$t("reportForm.fence"),this.$t("reportForm.duration"),this.$t("reportForm.mileage"),this.$t("reportForm.oilConsumption"),this.$t("reportForm.totalnotrunningad"),this.$t("reportForm.startTime"),this.$t("reportForm.endTime"),this.$t("reportForm.startDistance"),this.$t("reportForm.endDistance")]];this.totalList.forEach((function(e,i){if(e.records.length){e.records.forEach((function(e,i){var r=[];r.push(i),r.push(e.devicename),r.push(e.deviceid),r.push(e.fenceName),r.push(Object(R["ob"])(e.timeduration)),r.push(Object(R["ob"])(e.mileage)),r.push(Object(R["ob"])(e.totalrunningfuel)),r.push(Object(R["ob"])(e.totalotherfuel)),r.push(e.starttimeStr),r.push(e.endtimeStr),r.push(Object(R["ob"])(e.starttotaldistance)),r.push(Object(R["ob"])(e.endtotaldistance)),t.push(r)}));var r=[];r.push(""),r.push(""),r.push(""),r.push(""),r.push(""),r.push(""),r.push(""),r.push(""),r.push(""),r.push(""),r.push(""),r.push(""),t.push(r)}}));var e={title:this.$t("reportForm.tripDetails"),data:t,dateRange:this.queryDetailDateRange};this.exportLoading2=!0,new ExcelCls(e).exportExcel(this)}}},mounted:function(){var t=this;this.deviceids=[],this.queryDetailDateRange=null,Object(O["M"])().then((function(e){var i=e.categorys,r=[];i&&i.forEach((function(t){var e={label:t.name,value:t.categoryid,children:[]};t&&t.records.forEach((function(t){1==t.useas&&e.children.push({label:t.name,value:t.georecorduuid})})),e.children.length>0&&r.push(e)})),t.treeData=r}))}},E=j,I=(i("f19f"),Object(v["a"])(E,r,a,!1,null,null,null)),V=I.exports;e["default"]=V},"8c87":function(t,e,i){},"982f":function(t,e,i){},b0bf:function(t,e,i){},c89f:function(t,e,i){t.exports=i.p+"img/tripinout.87117ef7.png"},da25:function(t,e,i){t.exports=i.p+"img/tripinoutin.80fb57fe.png"},de80:function(t,e,i){"use strict";i("b0bf")},f19f:function(t,e,i){"use strict";i("982f")}}]);