(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e683e994"],{2909:function(e,t,i){"use strict";function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,a=Array(t);i<t;i++)a[i]=e[i];return a}function r(e){if(Array.isArray(e))return a(e)}i.d(t,"a",(function(){return o}));i("a4d3"),i("e01a"),i("d28b"),i("a630"),i("d3b7"),i("3ca3"),i("ddb0");function c(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}i("fb6a"),i("b0c0"),i("ac1f"),i("00b4"),i("25f0");function n(e,t){if(e){if("string"==typeof e)return a(e,t);var i={}.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?a(e,t):void 0}}i("d9e2");function s(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(e){return r(e)||c(e)||n(e)||s()}},"29f3":function(e,t,i){},"4b41":function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"batch-manage full"},[t("div",{staticClass:"batch-manage-left"},[t("div",{staticClass:"batch-manage-inner full"},[t("div",{staticClass:"batch-manage-inner-title"},[t("i",{staticClass:"circle"}),t("b",{domProps:{textContent:e._s(e.$t("common.selectDevice"))}}),t("span",[e._v(e._s(e.$t("bgManage.batchTransferDevice")))])]),t("div",{staticClass:"batch-manage-inner-content"},[t("SearchDeviceZtree",{ref:"ztree",on:{onTreeCheck:e.onTreeCheck}})],1)])]),t("div",{staticClass:"batch-manage-right"},[t("div",{staticClass:"batch-manage-inner-title"},[t("i",{staticClass:"circle"}),t("b",{domProps:{textContent:e._s(e.$t("bgManage.selectedDevice"))}}),t("b",{domProps:{textContent:e._s(e.tableList.length)}}),t("span",{staticClass:"clear_btn",on:{click:function(t){e.tableList=[]}}},[e._v(e._s(e.$t("common.clearList")))]),t("div",{staticClass:"batch-manage-btns",staticStyle:{"padding-top":"1px"}},[t("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){e.importDialog=!0}}},[e._v(e._s(e.$t("common.importQuery")))]),t("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){e.dialog=!0}}},[e._v(e._s(e.$t("bgManage.batchTransfer")))])],1)]),t("div",{staticClass:"batch-manage-inner-content"},[t("div",{staticStyle:{position:"absolute",top:"0px",left:"0px",right:"0px",bottom:"35px"}},[t("vxe-table",{ref:"xTable",attrs:{"cell-class-name":e.headerCellClassName,"sort-config":e.sortConfig,"menu-config":e.tableMenu,border:"",resizable:"","auto-resize":"","show-overflow":"","highlight-hover-row":"",size:"mini",height:"auto",data:e.tableList},on:{"checkbox-all":e.selectAllEvent,"menu-click":e.handleClickTableMenu,"checkbox-change":e.selectChangeEvent,"cell-dblclick":e.cellDblclick}},[t("vxe-table-column",{attrs:{type:"checkbox",width:"50"}}),t("vxe-table-column",{attrs:{type:"seq",width:"60",title:e.$t("reportForm.index")}}),t("vxe-table-column",{attrs:{field:"devicename",title:e.$t("alarm.devName"),width:"120",sortable:""}}),t("vxe-table-column",{attrs:{field:"deviceid",title:e.$t("alarm.devNum"),width:"120",sortable:""}}),t("vxe-table-column",{attrs:{field:"creater",title:e.$t("reportForm.creater"),width:"110",sortable:""},scopedSlots:e._u([{key:"default",fn:function(i){return[t("el-popover",{attrs:{placement:"bottom",trigger:"click"}},[t("div",{staticClass:"parents-wrapper"},e._l(e.parentsList,(function(i){return t("div",{key:i.username},[e._v(e._s(i.username)+"("+e._s(i.usertypeStr)+")")])})),0),t("el-button",{staticStyle:{color:"#000000"},attrs:{slot:"reference",type:"text"},on:{click:function(t){return e.queryParents(i.row.creater)}},slot:"reference"},[e._v(e._s(i.row.creater))])],1)]}}])}),t("vxe-table-column",{attrs:{field:"deviceType",title:e.$t("reportForm.deviceType"),width:"110",sortable:""}}),t("vxe-table-column",{attrs:{field:"groupname",title:e.$t("reportForm.groupName"),width:"110"}}),t("vxe-table-column",{attrs:{field:"roleStr",title:e.$t("bgManage.useState"),sortable:"",width:"115"}}),t("vxe-table-column",{attrs:{field:"overdueTime",title:e.$t("monitor.deviceExpiration"),width:"110",sortable:""}}),t("vxe-table-column",{attrs:{field:"lastValidpoistiontime",title:e.$t("bgManage.lastOnlineTime"),width:"110",sortable:""}}),t("vxe-table-column",{attrs:{field:"firstloctimeStr",title:e.$t("bgManage.firstloctimeStr"),width:"125",sortable:""}}),t("vxe-table-column",{attrs:{field:"createTime",title:e.$t("alarm.createTime"),width:"125",sortable:""}}),t("vxe-table-column",{attrs:{field:"simnum",title:e.$t("common.simnum"),sortable:"",width:"140"}}),t("vxe-table-column",{attrs:{field:"simiccid",title:"ICCID",width:"140",sortable:""}})],1)],1),t("div",{staticStyle:{position:"absolute",bottom:"0px",left:"0px",right:"0px",height:"30px"}},[t("el-pagination",{attrs:{currentPage:e.currentPage,"current-page":e.currentChangePage,"page-sizes":[100,200,300,400,500],"page-size":e.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.totalcount},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)])]),t("ImportDeviceidsDialog",{on:{"on-import":e.onImportDevice},model:{value:e.importDialog,callback:function(t){e.importDialog=t},expression:"importDialog"}}),t("EditDevice",{attrs:{deviceid:e.deviceid,info:e.currentRow},on:{editSucc:e.onEditSucc},model:{value:e.editDialog,callback:function(t){e.editDialog=t},expression:"editDialog"}}),t("TransferDeviceDialog",{attrs:{selectList:e.selectList},on:{transferSucc:e.transferSucc},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}})],1)},r=[],c=i("ade3"),n=i("2909"),s=i("5530"),o=(i("99af"),i("a15b"),i("d81d"),i("14d9"),i("13d5"),i("fb6a"),i("a434"),i("d3b7"),i("159b"),i("4795"),i("7e15")),l=i("5bca"),d=i("ae31"),m=i("f1b2"),u=i("c276"),f=i("2f62"),b=i("6e52"),h=i("5101"),v=i("a05b"),p=i("4c3c"),g=i("0c87"),y=i("b059"),w={name:"batchTransfer",data:function(){return{totalColumns:["devicename","deviceid","creater","deviceType","groupname","roleStr","overdueTime","lastValidpoistiontime","firstloctimeStr","createTime","simnum","simiccid"],icon:y,dialog:!1,importDialog:!1,loading:!1,searchText:"",tableList:[],selectList:[],editDialog:!1,deviceid:"",currentRow:{},pageSize:500,currentPage:1,totalcount:0}},mixins:[v["a"],p["a"],g["a"]],components:{SearchDeviceZtree:o["a"],ImportDeviceidsDialog:l["a"],EditDevice:m["a"],TransferDeviceDialog:d["a"]},computed:Object(s["a"])({},Object(f["b"])(["isZh","userName","userLevelList","isQueryInitData","deviceTypes"])),methods:Object(s["a"])(Object(s["a"])({},Object(f["c"])(["setIsReloadRootuser","setReportTagList"])),{},{headerCellClassName:function(e){var t=e.column,i=e.row;if("roleStr"===t.field){var a=i.isfree,r="";switch(a){case 1:r="black-font ";break;case 2:r="experience-font";break;case 3:r="red-font";break;case 4:r="red-font";break;case 5:r="red-font";break;case 6:r="free-font";break}return r}return null},transferSucc:function(){this.$refs.ztree.updateZtreeIns(),this.updateTable()},currentChangePage:function(e){var t=this,i=(e-1)*this.pageSize,a=this.cacheTableList.slice(i,i+this.pageSize),r=a.map((function(e){return Object(s["a"])({},e)}));this.tableList=r,setTimeout((function(){t.$refs.xTable.scrollTo(0,0),t.$refs.xTable.setAllCheckboxRow(!0),t.selectList=t.tableList}),30)},handleSizeChange:function(e){this.pageSize=e,this.currentChangePage(this.currentPage)},handleCurrentChange:function(e){this.currentChangePage(e)},cellDblclick:function(e){var t=e.column,i=e.row;"devicename"==t.property&&(this.row=i,this.currentRow={creater:i.creater},this.deviceid=i.deviceid,this.editDialog=!0)},onEditSucc:function(e){var t=e.deviceid,i=this.deviceTypes,a=i[e.devicetype].typename;this.row.deviceType=a,this.row.devicename=e.devicename,this.row.simiccid=e.simiccid,this.row.simnum=e.simnum,this.currentRow.deviceType=a,this.currentRow.devicename=e.devicename,this.currentRow.creater=e.creater,this.currentRow.simiccid=e.simiccid,this.currentRow.simnum=e.simnum,this.currentRow.offlinedelay=e.offlinedelay,this.currentRow.parkdrifting=e.parkdrifting,this.currentRow.parktimeout=e.parktimeout,this.currentRow.installtimeStr=h["a"].format(new Date(e.installtime),"yyyy-MM-dd"),b["a"].deviceInfos[t].offlinedelay=e.offlinedelay,this.$refs.ztree.updateNodes([t])},formatRole:function(e){var t=e.row,i=Object(u["t"])(t.isfree);return'<span style="color:'.concat(i.color,'">').concat(i.stateStr,"</span>")},onImportDevice:function(e){var t=this,i=[],a=b["a"].deviceInfos,r=this.deviceTypes,c=[],n=Object(u["r"])(a),s=n.simMap,o=n.iccidMap;e.forEach((function(e){var t=Object(u["lb"])(a,s,o,e);if(t){var c=r[t.devicetype].typename;i.push({devicename:t.devicename,deviceid:t.deviceid,groupname:t.groupname,creater:t.creater,deviceType:c,isfree:t.isfree,roleStr:Object(u["t"])(t.isfree).stateStr,status:Object(u["V"])(0),createTime:h["a"].format(new Date(t.createtime),"yyyy-MM-dd"),firstloctimeStr:0!=t.firstloctime?h["a"].format(new Date(t.firstloctime),"yyyy-MM-dd"):"-",lastValidpoistiontime:0!=t.lastactivetime?h["a"].format(new Date(t.lastactivetime),"yyyy-MM-dd"):"-",overdueTime:h["a"].format(new Date(t.expirenotifytime),"yyyy-MM-dd"),simnum:t.simnum?t.simnum:"",simiccid:t.simiccid?t.simiccid:""})}})),i=this.tableList.concat(i);var l={};i=i.reduce((function(e,t){return!l[t.deviceid]&&(l[t.deviceid]=e.push(t)),e}),[]),this.tableList=i,setTimeout((function(){t.$refs.xTable.setAllCheckboxRow(!0),t.selectList=t.tableList}),30),c.length>0&&this.$XModal.message({message:c.join(",")+" "+this.$t("tips.editDeviceFailTip1"),status:"error",zIndex:9999})},handleClickRow:function(e){var t=e.rowIndex,i=e.row;this.$delete(this.tableList,t),this.$refs.ztree.cancelCheckNode(i.deviceid)},clearTable:function(){this.tableList=[],this.$refs.ztree.ztreeIns.checkAllNodes(!1),this.$refs.ztree.selectedDeviceIds={}},updateTable:function(){var e=(this.currentPage-1)*this.pageSize,t=e+this.pageSize,i=this.cacheTableList,a=this.tableList,r=b["a"].deviceInfos;a.forEach((function(e){var t=r[e.deviceid];e.groupname=t.groupname,e.creater=t.creater})),i.splice.apply(i,[e,t].concat(Object(n["a"])(a)))},onTreeCheck:function(e){var t=[],i=this.deviceTypes,a=b["a"].deviceInfos;e.forEach((function(e){var r=a[e],n=i[r.devicetype].typename;t.push(Object(c["a"])(Object(c["a"])(Object(c["a"])(Object(c["a"])(Object(c["a"])(Object(c["a"])(Object(c["a"])({devicename:r.devicename,deviceid:r.deviceid,groupname:r.groupname,creater:r.creater,status:Object(u["V"])(0),deviceType:n,isfree:r.isfree,roleStr:Object(u["t"])(r.isfree).stateStr},"status",Object(u["V"])(0)),"createTime",h["a"].format(new Date(r.createtime),"yyyy-MM-dd")),"firstloctimeStr",0!=r.firstloctime?h["a"].format(new Date(r.firstloctime),"yyyy-MM-dd"):"-"),"lastValidpoistiontime",0!=r.lastactivetime?h["a"].format(new Date(r.lastactivetime),"yyyy-MM-dd"):"-"),"overdueTime",h["a"].format(new Date(r.expirenotifytime),"yyyy-MM-dd")),"simnum",r.simnum?r.simnum:""),"simiccid",r.simiccid?r.simiccid:""))})),this.cacheTableList=t,this.totalcount=t.length,this.currentPage=1,this.currentChangePage(this.currentPage)},selectAllEvent:function(e){e.checked;var t=e.records;this.selectList=t},selectChangeEvent:function(e){e.checked;var t=e.records;this.selectList=t},cancelCheckNode:function(){this.$refs.ztree.cancelCheckNode(row.deviceid)}}),mounted:function(){this.cacheTableList=[],this.selectList=[]}},A=w,C=(i("4bfd"),i("2877")),D=Object(C["a"])(A,a,r,!1,null,null,null),k=D.exports;t["default"]=k},"4bfd":function(e,t,i){"use strict";i("29f3")},b059:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAu1JREFUWEftmDuMTVEUQNcmPgUJEf8JQUIxtYZK4RsUCgalROIzmIoOHdX4zESl9JkpNAQzEho0WiQKEt/BEILGCEf2u/vOO+9+5t773vXmFU43887ee539OWfvK7TYkhbjoRCQg0nAemAtsBJYCsywQ30FXgCPgDvAgMCvogfOBeQCo0eA/cDsnEY+Ab3AGQGFzbUygRx0qFJgbi6N8U0f9DACV/PIpwI5mAicB/ZFFL0CrgB3gafAMEEo24DFwBpgO7AkIncB6BT4PRZYIpDB9APbPGEFOQb0Zyk1eYU6BSzydFxT2LHk04DUMwc9RTeA3QLf8rg93ONgOnAZ2OzJ9Uqt7hqVMSAHO6iN9zmgS+BPERgPagLQDRzy5DsE+pL01QBZNT0D5thmFdop4OqB8aDUjuadHlbXR2BFUvVFgU4Ax03oNdAu8L0RmEj4Hns5dVJA7SWHzMFk4I13z2jOaPxLWw52AZdMoVZnm8CIb2DUQy5IvOv240tgWVY1FSW16ntu14OKbxHQghldPpAmb6f9clqCEi99ueAqOGqKe6Rqs/IvH+g+sNo2bhAYKJ2GSnXoW3jbdD+Uqs0YkGZ++E5pbN/+I6CFlquqfliqFR0D+kmQ2LqmCujfeqKNwEVgfp2AQ8AegVumT21UdAMjAlPScigN6F0DMKGtIYEFRYESQ+agDKD3Yh52kDtkD4BV0aR2sMlCNq/OkGku7hW4aR7KndQtV/bNuBj1odU2V/smXVulehnHqkyzX/Nllm0e36fD4us/rtqQ6eP6o87cqRFzMA14kvtxNSBt5pvRfujDujyz/TCoZjRo2mMlNv1pLWwPcMDz+fi1sOYlnTjSmvy+rHa29Cbfg0obg7Rxu2dJqje8Lm17220M0rCXNwb55WGD4lmvzy5adAp8uOFBMQKl1ddleRXeU1lgn22U7i51lI6AhR8b1nkfG2bani/ex4ZBYDDaL2edQH/PnO3zKClzz3+gLG+2nIf+AjPc2CWQPrm+AAAAAElFTkSuQmCC"}}]);