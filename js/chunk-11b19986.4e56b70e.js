(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-11b19986"],{"0a03":function(e,t,a){"use strict";a("76fb")},"2f46":function(e,t,a){"use strict";a("ba14")},"369b":function(e,t,a){},"4c3c":function(e,t,a){"use strict";a("4e82");t["a"]={data:function(){return{sortConfig:{sortMethod:function(e){var t=e.data,a=e.sortList,i=a[0],r=i.property,s=i.order,n=[];return n="desc"===s?t.sort((function(e,t){var a=e[r],i=t[r];if(isNaN(a)&&!isNaN(Date.parse(a))&&isNaN(i)&&!isNaN(Date.parse(i)))return Date.parse(i)-Date.parse(a);if(a=parseFloat(a),i=parseFloat(i),isNaN(a)||isNaN(i)){var s=t[r]+"";return s.localeCompare(e[r])}return i-a})):"asc"===s?t.sort((function(e,t){var a=e[r],i=t[r];if(isNaN(a)&&!isNaN(Date.parse(a))&&isNaN(i)&&!isNaN(Date.parse(i)))return Date.parse(a)-Date.parse(i);if(a=parseFloat(e[r]),i=parseFloat(t[r]),isNaN(a)||isNaN(i)){var s=e[r]+"";return s.localeCompare(t[r])}return a-i})):t.sort(),n}}}}}},5103:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));a("99af"),a("14d9"),a("b0c0"),a("d3b7"),a("159b");var i=a("c276"),r=a("6e52"),s=a("5101"),n=a("a47e"),o=a("0d33"),l=a("7fa8"),c=function(e,t,a,s){var n=r["a"].lastPositions,o=n[e.deviceid],l=Object(i["r"])(o,e,t),c=Object(i["fb"])(e,t,o,a);c&&(c=" ["+c+"]");var d=e.hasFunctions.isHasVideo,u={deviceid:e.deviceid,name:e.devicename+c,devicename:e.devicename,icon:l,id:e.deviceid,hasFunctions:e.hasFunctions,isOnline:t,nodeType:d?r["a"].NodeType_Device_Video:r["a"].NodeType_Device_Normal,checked:void 0!==s&&s,isStared:1==e.stared,loginname:e.loginname?e.loginname:"",remark:e.remark?e.remark:"",remark2:e.remark2?e.remark2:"",simiccid:e.simiccid?e.simiccid:"",simnum:e.simnum?e.simnum:""};return u},d=function(e,t){var a={name:n["a"].t("common.empty"),children:[],open:!0,icon:o,nodeType:r["a"].NodeType_User};if(e){var l=e.username,d=e.subusers;a.name=l,a.username=l;var h=Object(i["o"])(e.groups),f=Object(i["E"])(h,e.groups,d),v=null;null!=h&&(v=e.groups[h]);var m=p(e.groups,l,f,t);if(null!=l&&null!=d&&d.length>0){var b=u(d,t);a.children=m.concat(b)}else a.children=m;Object(i["Gb"])(a.children);var g=0,w=0;if(0==f&&v&&v.devices.length){var k=s["a"].getCurrentUTC(),C=r["a"].lastPositions;v.devices.forEach((function(e){if(e){var r=Object(i["F"])(C[e.deviceid],k);r&&w++,g++;var s=!!t[e.deviceid],n=c(e,r,k,s);a.children.push(n)}})),Object(i["Fb"])(a.children)}if(a.children)for(var y=0;y<a.children.length;++y){var x=a.children[y];void 0!=x.totalCount&&(g+=x.totalCount,w+=x.onlineCount)}a.totalCount=g,a.name+="("+w+"/"+g+")"}return a},u=function e(t,a){var n=[];if(null!=t&&t.length>0)for(var l,d,u,h,f,v,m,b,g,w,k,C,y,x=function(){if(l=t[N],d=l.username,u=l.subusers,h=l.showname,f=0,v={name:h||d,username:d,showname:h,icon:o,id:d+"_"+N,nodeType:r["a"].NodeType_User},m=Object(i["o"])(l.groups),b=Object(i["E"])(m,l.groups,u),g=null,null!=m&&(g=l.groups[m]),w=p(l.groups,d,b,a),w.forEach((function(e){f+=e.onlineCount})),null!=d&&null!=u&&u.length>0?(k=e(u,a),k.forEach((function(e){f+=e.onlineCount})),k=w.concat(k),v.children=k):v.children=w,Object(i["Gb"])(v.children),0==b&&g&&g.devices.length){var x=s["a"].getCurrentUTC(),I=r["a"].lastPositions;g.devices.forEach((function(e){if(e){var t=Object(i["F"])(I[e.deviceid],x);t&&f++;var r=!!a[e.deviceid],s=c(e,t,x,r);v.children.push(s)}})),Object(i["Fb"])(v.children)}if(C=0,v.children)for(y=0;y<v.children.length;++y){var L=v.children[y];void 0!=L.totalCount?C+=L.totalCount:C++}v.totalCount=C,v.onlineCount=f,v.name+="("+f+"/"+C+")",n.push(v)},N=0;N<t.length;++N)x();return n},p=function(e,t,a,o){var d=n["a"].t("common.defaultGroup"),u=[],p=r["a"].lastPositions;if(e)for(var h=s["a"].getCurrentUTC(),f=0;f<e.length;++f){var v=e[f],m=void 0===v.shared?0:v.shared,b=v.groupid>0;if(a||b){var g=b?v.groupname:d,w={groupid:v.groupid,name:g,groupname:g,icon:l,id:t+"_"+v.groupid,username:t,nodeType:r["a"].NodeType_Group},k=0;v.devices&&(w.totalCount=v.devices.length,w.children=[],v.devices.forEach((function(e){if(e){var t=Object(i["F"])(p[e.deviceid],h);t&&k++;var a=!!o[e.deviceid],r=c(e,t,h,a);w.children.push(r)}})),Object(i["Fb"])(w.children)),w.onlineCount=k,w.name=g+"("+k+"/"+v.devices.length+")",w.label+="(".concat(w.children.length,")"),1!==m&&u.push(w)}}return u}},"76fb":function(e,t,a){},"7e15":function(e,t,a){"use strict";var i=function(){var e=this,t=e._self._c;return t("div",{staticClass:"device-ztree-search full"},[t("div",{staticClass:"device-ztree-search-wrap"},[t("div",{staticClass:"device-ztree-search-wrap-input",style:{padding:"8px 38px 0px 10px"}},[t("div",[t("el-input",{staticStyle:{width:"100%",height:"32px"},attrs:{placeholder:e.$t("bgManage.pleaseEnterUsernameOrGroupname"),clearable:""},model:{value:e.searchText,callback:function(t){e.searchText=t},expression:"searchText"}},[t("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"prefix"},slot:"prefix"})])],1),t("div",{staticClass:"device-ztree-search-wrap-refresh",style:{right:"2px"},on:{click:e.refreshZtree}},[e.reloadLoading?t("i",{staticClass:"el-icon-loading",staticStyle:{"font-size":"18px"}}):t("i",{staticClass:"el-icon-refresh-right",staticStyle:{"font-size":"18px"}})])])]),t("div",{staticClass:"device-ztree-search-ztree"},[t("el-scrollbar",{staticStyle:{height:"100%"}},[t("ul",{staticClass:"ztree",attrs:{id:e.ztreeId}})])],1)])},r=[],s=a("5530"),n=(a("c975"),a("14d9"),a("b0c0"),a("b64b"),a("d3b7"),a("498a"),a("159b"),a("2f62")),o=a("c276"),l=a("5103"),c=a("cd6d"),d=a.n(c),u=a("6e52"),p=a("5101"),h=a("b562"),f=a("0d33"),v={name:"Temp",props:{showClear:{type:Boolean,default:!1}},data:function(){return{searchText:"",reloadLoading:!1}},watch:{isQueryInitData:function(e){e&&this.initZtree()},searchText:function(e){this.searchZtree(this,e.trim())}},computed:Object(s["a"])(Object(s["a"])({},Object(n["b"])(["isQueryInitData"])),{},{ztreeId:function(){return"ztreeEl_".concat(this._uid)}}),methods:{handleClear:function(){this.$parent.totalCount=0,this.$parent.tableList=[],this.$parent.totalList=[],this.$parent.cacheDeviceids=[]},refreshZtree:function(){var e=this;0==this.reloadLoading&&(this.reloadLoading=!0,Object(h["S"])().then((function(t){var a=t.rootuser;e.reloadLoading=!1,u["a"].deviceInfos={},u["a"].rootuser=a,u["a"].setDeviceInfos(a),e.ztreeIns.destroy(),e.initZtree(),e.searchText="",e.selectedDeviceIds={},e.handleClear(),e.$emit("onTreeCheck",[])})).catch((function(t){e.reloadLoading=!1})))},updateZtreeIns:function(){var e=Object.keys(this.selectedDeviceIds);this.ztreeIns.destroy(),this.initZtree();for(var t=this.ztreeIns,a=t.transformToArray(t.getNodes()),i=0;i<e.length;i++){var r=e[i];this.selectedDeviceIds[r]=!0;for(var s=0;s<a.length;s++){var n=a[s];if(n.deviceid==r){t.checkNode(n,!0);break}}}},updateNodes:function(e){var t=this.ztreeIns,a=t.getNodes(),i=u["a"].deviceInfos,r=u["a"].lastPositions,s=p["a"].getCurrentUTC();e.forEach((function(e){var n=i[e],l=r[e],c=Object(o["hb"])(a,e);c&&(c.name=Object(o["eb"])(n,l?l.online:0,l,s),t.updateNode(c))}))},initZtree:function(){this.selectedDeviceIds={};var e=Object(l["a"])(u["a"].rootuser,this.selectedDeviceIds);this.treeNodes=e,this.ztreeIns=$.fn.zTree.init($("#".concat(this.ztreeId)),this.setting,this.treeNodes)},onTreeCheck:function(e,t,a){var i=[];this.changeSelectedDeviceIds([a]);var r=this.selectedDeviceIds;for(var s in r)r.hasOwnProperty(s)&&1==r[s]&&i.push(s);this.$emit("onTreeCheck",i)},changeSelectedDeviceIds:function(e){var t=this.selectedDeviceIds;function a(e){for(var i in e){var r=e[i];r.deviceid?r.checked?t[r.deviceid]=!0:delete t[r.deviceid]:r.children&&r.children.length>0&&a(r.children)}}a(e)},cancelCheckNode:function(e){var t=Object(o["hb"])(this.ztreeIns.getNodes(),e);null!=t&&this.ztreeIns.checkNode(t,!1,!0),delete this.selectedDeviceIds[e]},selectedCheckNodes:function(e){var t=this;this.selectedDeviceIds={},this.ztreeIns.checkAllNodes(),e.forEach((function(e){t.selectedDeviceIds[e]=!0;var a=Object(o["hb"])(t.ztreeIns.getNodes(),e);null!=a&&t.ztreeIns.checkNode(a,!0,!0)})),this.$emit("onTreeCheck",e)},zTreeOnClick:function(e,t,a){this.ztreeIns.checkNode(a,!0,!0),this.onTreeCheck(e,t,a)},searchZtree:Object(o["e"])((function(e,t){if(e.ztreeIns.destroy(),0==t.length){var a=Object(l["a"])(u["a"].rootuser,e.selectedDeviceIds);e.ztreeIns=$.fn.zTree.init($("#".concat(e.ztreeId)),e.setting,a)}else{var i=e.variableDeepSearch(e.treeNodes.children,t),r=[{name:u["a"].rootuser.username,children:i,open:!0,icon:f,username:u["a"].rootuser.username,nodeType:u["a"].NodeType_User}];e.ztreeIns=$.fn.zTree.init($("#".concat(e.ztreeId)),e.setting,r)}}),1e3),variableDeepSearch:function(e,t){t=t.toLowerCase();for(var a=[],i=this,r=this.selectedDeviceIds,s=0;s<e.length;s++){var n=null,o=e[s];if(null!=o){var l=!1;if((-1!=o.name.toLowerCase().indexOf(t)||o.username&&-1!=o.username.toLowerCase().indexOf(t)||o.deviceid&&-1!=o.deviceid.toLowerCase().indexOf(t)||o.loginname&&-1!=o.loginname.toLowerCase().indexOf(t)||o.remark&&-1!=o.remark.toLowerCase().indexOf(t)||o.remark2&&-1!=o.remark2.toLowerCase().indexOf(t)||o.simiccid&&-1!=o.simiccid.toLowerCase().indexOf(t)||o.simnum&&-1!=o.simnum.toLowerCase().indexOf(t))&&(n=d()(o),n.open=!1,l=!0),0==l&&o.children&&o.children.length>0){var c=i.variableDeepSearch(o.children,t);c&&c.length>0&&(n=d()(o),n.children=c,n.open=!0,l=!0)}1==l&&(void 0!=n.deviceid&&1==r[n.deviceid]&&(n.checked=!0),a.push(n))}}return a},addDiyDom:function(e,t){if(t.nodeType==u["a"].NodeType_Device_Video){var a=document.getElementById("".concat(t.tId,"_switch"));t.isLastNode?a.className="button  switch bottom_docu":a.className="button  switch center_docu",a.onclick=null}}},created:function(){this.setting={view:{dblClickExpand:!1,addDiyDom:this.addDiyDom},check:{enable:!0,chkStyle:"checkbox",radioType:"all"},callback:{onCheck:this.onTreeCheck,onClick:this.zTreeOnClick}}},destroyed:function(){this.treeNodes=null,this.ztreeIns&&this.ztreeIns.destroy(),this.ztreeIns=null,this.selectedDeviceIds=null},mounted:function(){this.isQueryInitData&&this.initZtree()}},m=v,b=(a("0a03"),a("2877")),g=Object(b["a"])(m,i,r,!1,null,null,null);t["a"]=g.exports},a8f6:function(e,t,a){"use strict";a("369b")},b059:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAu1JREFUWEftmDuMTVEUQNcmPgUJEf8JQUIxtYZK4RsUCgalROIzmIoOHdX4zESl9JkpNAQzEho0WiQKEt/BEILGCEf2u/vOO+9+5t773vXmFU43887ee539OWfvK7TYkhbjoRCQg0nAemAtsBJYCsywQ30FXgCPgDvAgMCvogfOBeQCo0eA/cDsnEY+Ab3AGQGFzbUygRx0qFJgbi6N8U0f9DACV/PIpwI5mAicB/ZFFL0CrgB3gafAMEEo24DFwBpgO7AkIncB6BT4PRZYIpDB9APbPGEFOQb0Zyk1eYU6BSzydFxT2LHk04DUMwc9RTeA3QLf8rg93ONgOnAZ2OzJ9Uqt7hqVMSAHO6iN9zmgS+BPERgPagLQDRzy5DsE+pL01QBZNT0D5thmFdop4OqB8aDUjuadHlbXR2BFUvVFgU4Ax03oNdAu8L0RmEj4Hns5dVJA7SWHzMFk4I13z2jOaPxLWw52AZdMoVZnm8CIb2DUQy5IvOv240tgWVY1FSW16ntu14OKbxHQghldPpAmb6f9clqCEi99ueAqOGqKe6Rqs/IvH+g+sNo2bhAYKJ2GSnXoW3jbdD+Uqs0YkGZ++E5pbN/+I6CFlquqfliqFR0D+kmQ2LqmCujfeqKNwEVgfp2AQ8AegVumT21UdAMjAlPScigN6F0DMKGtIYEFRYESQ+agDKD3Yh52kDtkD4BV0aR2sMlCNq/OkGku7hW4aR7KndQtV/bNuBj1odU2V/smXVulehnHqkyzX/Nllm0e36fD4us/rtqQ6eP6o87cqRFzMA14kvtxNSBt5pvRfujDujyz/TCoZjRo2mMlNv1pLWwPcMDz+fi1sOYlnTjSmvy+rHa29Cbfg0obg7Rxu2dJqje8Lm17220M0rCXNwb55WGD4lmvzy5adAp8uOFBMQKl1ddleRXeU1lgn22U7i51lI6AhR8b1nkfG2bani/ex4ZBYDDaL2edQH/PnO3zKClzz3+gLG+2nIf+AjPc2CWQPrm+AAAAAElFTkSuQmCC"},ba14:function(e,t,a){},f634:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e._self._c;return t("div",{staticClass:"batch-manage full"},[t("div",{staticClass:"batch-manage-left"},[t("div",{staticClass:"batch-manage-inner full"},[t("div",{staticClass:"batch-manage-inner-title"},[t("i",{staticClass:"circle"}),t("b",{domProps:{textContent:e._s(e.$t("common.selectDevice"))}}),t("span")]),t("div",{staticClass:"batch-manage-inner-content"},[t("SearchDeviceZtree",{ref:"ztree",on:{onTreeCheck:e.onTreeCheck}})],1)])]),t("div",{staticClass:"batch-manage-right"},[t("div",{staticClass:"batch-manage-inner-title"},[t("i",{staticClass:"circle"}),t("b",{domProps:{textContent:e._s(e.$t("bgManage.selectedDevice"))}}),t("b",{domProps:{textContent:e._s(e.selectList.length)}}),t("div",{staticClass:"batch-manage-btns"},[t("el-button",{attrs:{size:"mini"},on:{click:e.clearTable}},[e._v(e._s(e.$t("common.clearList")))]),t("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.handleShowDialog}},[e._v(e._s(e.$t("bgManage.setConveyIp")))]),t("el-button",{attrs:{type:"danger",size:"mini"},on:{click:e.cancelSettingUrl}},[e._v(e._s(e.$t("bgManage.cancelConveyIp")))]),t("span",{staticStyle:{padding:"0px 5px"}}),t("el-select",{staticStyle:{width:"100px"},attrs:{"popper-append-to-body":!0,filterable:"",size:"mini"},model:{value:e.forwardid,callback:function(t){e.forwardid=t},expression:"forwardid"}},[t("el-option",{attrs:{label:e.$t("monitor.all"),value:"all"}}),e._l(e.forwards,(function(e){return t("el-option",{key:e.forwardid,attrs:{label:e.servername,value:e.forwardid}})}))],2),t("span",{staticStyle:{padding:"0px 5px"}}),t("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.localQuery}},[e._v(e._s(e.$t("common.query")))])],1)]),t("div",{staticClass:"batch-manage-inner-content"},[t("vxe-table",{ref:"xTable",staticClass:"mytable-scrollbar",attrs:{"sort-config":e.sortConfig,border:"","auto-resize":"",resizable:"","show-overflow":"","highlight-hover-row":"",size:"mini",height:"auto",data:e.totalList},on:{"checkbox-all":e.selectAllEvent,"checkbox-change":e.selectChangeEvent,"cell-dblclick":e.handleDblClick}},[t("vxe-table-column",{attrs:{type:"checkbox",width:"50"}}),t("vxe-table-column",{attrs:{type:"seq",width:"60",title:e.$t("reportForm.index")}}),t("vxe-table-column",{attrs:{field:"devicename",sortable:"",title:e.$t("alarm.devName")}}),t("vxe-table-column",{attrs:{field:"deviceid",sortable:"",title:e.$t("alarm.devNum")}}),t("vxe-table-column",{attrs:{field:"creater",sortable:"",title:e.$t("reportForm.creater")}}),t("vxe-table-column",{attrs:{field:"groupname",sortable:"",title:e.$t("reportForm.groupName")}}),t("vxe-table-column",{attrs:{field:"serverName",sortable:"",title:e.$t("bgManage.serverName")},scopedSlots:e._u([{key:"default",fn:function(a){return[t("div",{on:{click:function(t){return e.handleDblClick(a)}}},[t("a",{staticStyle:{"text-decoration":"underline",cursor:"pointer"},domProps:{textContent:e._s(a.row.serverName)}})])]}}])})],1)],1)]),t("SettingUrlDialog",{attrs:{forwards:e.forwards,totalList:e.selectList,protocolsList:e.protocolsList},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}}),t("ShowSettingDialog",{ref:"showSetting",attrs:{forwards:e.forwards,totalList:e.selectList,protocolsList:e.protocolsList},model:{value:e.showDialog,callback:function(t){e.showDialog=t},expression:"showDialog"}})],1)},r=[],s=(a("d81d"),a("14d9"),a("a434"),a("d3b7"),a("159b"),a("4795"),a("6e52")),n=a("7e15"),o=function(){var e=this,t=e._self._c;return t("el-dialog",{attrs:{title:e.$t("bgManage.setConveyIp"),center:"",visible:e.value,width:"720px","append-to-body":"","close-on-click-modal":!1},on:{close:e.handleClose}},[t("div",{staticClass:"setting-url"},[t("div",{staticClass:"setting-url-left"},[t("div",{staticClass:"setting-url-left-search"},[t("el-input",{staticStyle:{width:"100%"},model:{value:e.searchText,callback:function(t){e.searchText=t},expression:"searchText"}},[t("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"prefix"},slot:"prefix"}),t("i",{staticClass:"el-input__icon el-icon-circle-close",attrs:{slot:"suffix"},on:{click:function(t){e.searchText=""}},slot:"suffix"})])],1),t("div",{staticClass:"setting-url-left-list"},[e.value?t("el-scrollbar",{staticStyle:{height:"100%"}},e._l(e.itemList,(function(a,i){return t("div",{staticClass:"el-menu-item",class:[e.activeIndex==i?"is-active":""],on:{click:function(t){return e.handleClickItem(i)}}},[t("b",[e._v(e._s(i+1)+".")]),e._v(" "),t("span",{domProps:{textContent:e._s(a.servername)}})])})),0):e._e()],1)]),t("div",{staticClass:"setting-url-right"},[t("div",{staticStyle:{padding:"10px"}},[t("el-row",{staticClass:"margin_b10",attrs:{gutter:10}},[t("el-col",{attrs:{span:11,offset:1}},[t("LabelWrap",{attrs:{label:e.$t("bgManage.platformName")}},[t("el-input",{attrs:{disabled:""},model:{value:e.servername,callback:function(t){e.servername=t},expression:"servername"}})],1)],1),t("el-col",{attrs:{span:11,offset:1}},[t("LabelWrap",{attrs:{label:e.$t("bgManage.protocolType")}},[t("el-select",{staticStyle:{width:"100%"},attrs:{"popper-append-to-body":!0,disabled:""},model:{value:e.protocoltype,callback:function(t){e.protocoltype=t},expression:"protocoltype"}},e._l(e.protocolOptions,(function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)],1)],1),t("el-row",{staticClass:"margin_b10",attrs:{gutter:10}},[t("el-col",{attrs:{span:23,offset:1}},[t("LabelWrap",{attrs:{label:e.$t("bgManage.domainIp")}},[t("el-input",{attrs:{disabled:""},model:{value:e.uplinkip,callback:function(t){e.uplinkip=t},expression:"uplinkip"}})],1)],1)],1),t("el-row",{staticClass:"margin_b10",attrs:{gutter:10}},[t("el-col",{attrs:{span:11,offset:1}},[t("LabelWrap",{attrs:{label:e.$t("bgManage.userName")}},[t("el-input",{attrs:{type:"password",disabled:""},model:{value:e.userid,callback:function(t){e.userid=t},expression:"userid"}})],1)],1),t("el-col",{attrs:{span:11,offset:1}},[t("LabelWrap",{attrs:{label:e.$t("login.password")}},[t("el-input",{attrs:{type:"password",disabled:""},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1)],1)],1),t("el-row",{staticClass:"margin_b10",attrs:{gutter:10}},[t("el-col",{attrs:{span:23,offset:1}},[t("LabelWrap",{attrs:{label:e.$t("reportForm.remarks")}},[t("el-input",{attrs:{disabled:""},model:{value:e.remark,callback:function(t){e.remark=t},expression:"remark"}})],1)],1)],1)],1),t("div",{staticStyle:{"padding-top":"40px","text-align":"center"}},[t("el-button",{staticStyle:{width:"90px"},attrs:{type:"primary"},on:{click:e.batchOperate}},[e._v(e._s(e.$t("common.confirm")))])],1)])])])},l=[],c=(a("c975"),a("b0c0"),a("e9c4"),a("b64b"),a("498a"),a("201d")),d=a("e285"),u={name:"SettingUrlDialog",props:{value:{type:Boolean,default:!1},forwards:{type:Array,default:function(){return[]}},totalList:{type:Array,default:function(){return[]}},protocolsList:{type:Array,default:function(){return[]}}},watch:{value:function(e){e&&(this.activeIndex=0,this.itemList=JSON.parse(JSON.stringify(this.forwards)),this.handleClickItem(this.activeIndex))},searchText:function(e){if(e=e.trim(),""==e)this.itemList=JSON.parse(JSON.stringify(this.forwards));else{var t=[];e=e.toLowerCase(),this.forwards.forEach((function(a){(a.servername&&-1!=a.servername.toLowerCase().indexOf(e)||a.remark&&-1!=a.remark.indexOf(e)||a.uplinkip&&-1!=a.uplinkip.toLowerCase().indexOf(e)||a.uplinkport&&-1!=String(a.uplinkport).toLowerCase().indexOf(e))&&t.push(a)})),this.itemList=t}this.itemList.length>0&&this.handleClickItem(0)}},data:function(){return{searchText:"",activeIndex:0,servername:"",protocoltype:"",uplinkip:"",userid:"",password:"",remark:"",itemList:[]}},components:{LabelWrap:c["a"]},computed:{protocolOptions:function(){var e=[];return this.protocolsList.forEach((function(t){e.push({label:t.name,value:t.index})})),e}},methods:{handleClose:function(){this.$emit("input",!1)},handleClickItem:function(e){this.activeIndex=e;var t=this.itemList[e];this.servername=t.servername,this.protocoltype=t.protocoltype,this.uplinkip=t.uplinkip,this.userid=t.userid,this.password=t.password,this.remark=t.remark,this.forwardid=t.forwardid},batchOperate:function(){var e=this,t=this.totalList;if(t.length>0){var a={deviceids:t,action:"modifyforwardurl",forwardid:this.forwardid};Object(d["l"])(a).then((function(i){var r=i.success,n=i.total;r==n?(e.$XModal.message({message:e.$t("tips.setSucc"),status:"success",zIndex:9999}),t.forEach((function(e){e&&s["a"].deviceInfos[e]&&(s["a"].deviceInfos[e].forwardid=a.forwardid)})),e.$parent.updateTable(t),e.handleClose()):e.$XModal.message({message:e.$t("tips.setFail"),status:"error",zIndex:9999})}))}else this.$XModal.message({message:this.$t("tips.selectDevice"),status:"error",zIndex:9999})}}},p=u,h=(a("2f46"),a("2877")),f=Object(h["a"])(p,o,l,!1,null,null,null),v=f.exports,m=function(){var e=this,t=e._self._c;return t("el-dialog",{attrs:{title:e.deviceName+" - "+e.$t("bgManage.setConveyIp"),center:"",visible:e.value,width:"560px","append-to-body":"","close-on-click-modal":!1},on:{close:e.handleClose}},[t("div",{staticStyle:{padding:"10px"}},[t("el-row",{staticClass:"margin_b10",attrs:{gutter:10}},[t("el-col",{attrs:{span:12}},[t("LabelWrap",{attrs:{label:e.$t("bgManage.platformName")}},[t("el-input",{attrs:{disabled:""},model:{value:e.servername,callback:function(t){e.servername=t},expression:"servername"}})],1)],1),t("el-col",{attrs:{span:12}},[t("LabelWrap",{attrs:{label:e.$t("bgManage.protocolType")}},[t("el-select",{staticStyle:{width:"100%"},attrs:{"popper-append-to-body":!0,disabled:""},model:{value:e.protocoltype,callback:function(t){e.protocoltype=t},expression:"protocoltype"}},e._l(e.protocolOptions,(function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)],1)],1),t("el-row",{staticClass:"margin_b10",attrs:{gutter:10}},[t("el-col",{attrs:{span:24}},[t("LabelWrap",{attrs:{label:e.$t("bgManage.domainIp")}},[t("el-input",{attrs:{disabled:""},model:{value:e.uplinkip,callback:function(t){e.uplinkip=t},expression:"uplinkip"}})],1)],1)],1),t("el-row",{staticClass:"margin_b10",attrs:{gutter:10}},[t("el-col",{attrs:{span:12}},[t("LabelWrap",{attrs:{label:e.$t("bgManage.userName")}},[t("el-input",{attrs:{type:"password",disabled:""},model:{value:e.userid,callback:function(t){e.userid=t},expression:"userid"}})],1)],1),t("el-col",{attrs:{span:12}},[t("LabelWrap",{attrs:{label:e.$t("login.password")}},[t("el-input",{attrs:{type:"password",disabled:""},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1)],1)],1),t("el-row",{staticClass:"margin_b10",attrs:{gutter:10}},[t("el-col",{attrs:{span:24}},[t("LabelWrap",{attrs:{label:e.$t("reportForm.remarks")}},[t("el-input",{attrs:{disabled:""},model:{value:e.remark,callback:function(t){e.remark=t},expression:"remark"}})],1)],1)],1)],1)])},b=[],g={name:"SettingUrlDialog",props:{value:{type:Boolean,default:!1},forwards:{type:Array,default:function(){return[]}},totalList:{type:Array,default:function(){return[]}},protocolsList:{type:Array,default:function(){return[]}}},watch:{value:function(e){}},data:function(){return{deviceName:"",activeIndex:0,servername:"",protocoltype:"",uplinkip:"",userid:"",password:"",remark:"",itemList:[]}},components:{LabelWrap:c["a"]},computed:{protocolOptions:function(){var e=[];return this.protocolsList.forEach((function(t){e.push({label:t.name,value:t.index})})),e}},methods:{handleClose:function(){this.$emit("input",!1)},setSettingInfo:function(e){var t=this;this.servername="",this.protocoltype="",this.uplinkip="",this.userid="",this.password="",this.remark="",this.itemList=JSON.parse(JSON.stringify(this.forwards)),this.itemList.forEach((function(a,i){a.forwardid==e&&t.handleClickItem(i)}))},handleClickItem:function(e){this.activeIndex=e;var t=this.itemList[e];this.servername=t.servername,this.protocoltype=t.protocoltype,this.uplinkip=t.uplinkip,this.userid=t.userid,this.password=t.password,this.remark=t.remark,this.forwardid=t.forwardid}}},w=g,k=Object(h["a"])(w,m,b,!1,null,null,null),C=k.exports,y=a("4c3c"),x=a("b059"),N={name:"settingTransfer",data:function(){return{icon:x,dialog:!1,showDialog:!1,forwards:[],totalList:[],selectList:[],protocolsList:[],forwardid:"all"}},mixins:[y["a"]],components:{SearchDeviceZtree:n["a"],SettingUrlDialog:v,ShowSettingDialog:C},methods:{selectAllEvent:function(e){e.checked;var t=e.records;this.selectList=t.map((function(e){return e.deviceid}))},selectChangeEvent:function(e){e.checked;var t=e.records;this.selectList=t.map((function(e){return e.deviceid}))},handleDblClick:function(e){var t=e.row;this.showDialog=!0,this.$refs.showSetting.deviceName=t.devicename,this.$refs.showSetting.setSettingInfo(t.forwardid)},handleShowDialog:function(){this.dialog=!0},cancelSettingUrl:function(){var e=this,t=this.selectList,a={deviceids:t,action:"modifyforwardurl",forwardid:null};Object(d["l"])(a).then((function(a){var i=a.success,r=a.total;if(i==r){var n=s["a"].deviceInfos;t.forEach((function(e){n[e].forwardid=null})),e.updateTable(t),e.$XModal.message({message:e.$t("tips.setSucc"),status:"success",zIndex:9999})}else e.$XModal.message({message:e.$t("tips.setFail"),status:"error",zIndex:9999})}))},clearTable:function(){this.totalList=[],this.$refs.ztree.refreshZtree()},noRepeat:function(e){for(var t=0;t<e.length-1;t++)for(var a=t+1;a<e.length;a++)e[t]===e[a]&&(e.splice(a,1),a--);return e},updateTable:function(e){var t=this,a=s["a"].deviceInfos;this.totalList.forEach((function(i){var r=i.deviceid,s=a[r];e.forEach((function(e){e==r&&(i.serverName=t.getServerName(s.forwardid),i.forwardid=s.forwardid)}))}))},onTreeCheck:function(e){var t=this,a=[],i=s["a"].deviceInfos;e.forEach((function(e){var r=i[e];a.push({devicename:r.devicename,deviceid:r.deviceid,groupname:r.groupname,creater:r.creater,serverName:t.getServerName(r.forwardid),forwardid:r.forwardid})})),this.totalList=a,this.selectList=a.map((function(e){return e.deviceid})),setTimeout((function(){t.$refs.xTable.setAllCheckboxRow(!0)}),100)},localQuery:function(){var e=this,t=this.forwardid,a=s["a"].deviceInfos,i=[];if("all"==t)for(var r in a){var n=a[r];n&&n.forwardid&&i.push({devicename:n.devicename,deviceid:n.deviceid,groupname:n.groupname,creater:n.creater,serverName:this.getServerName(n.forwardid),forwardid:n.forwardid})}else for(var o in a){var l=a[o];l&&t==l.forwardid&&i.push({devicename:l.devicename,deviceid:l.deviceid,groupname:l.groupname,creater:l.creater,serverName:this.getServerName(l.forwardid),forwardid:l.forwardid})}this.totalList=i,this.selectList=i.map((function(e){return e.deviceid})),setTimeout((function(){e.$refs.xTable.setAllCheckboxRow(!0)}),100)},getServerName:function(e){var t="",a=this.forwards;if(a)for(var i=0;i<a.length;i++){var r=a[i];if(e==r.forwardid){t=r.servername;break}}return t}},mounted:function(){var e=this;Object(d["qb"])({creater:null,keyword:""}).then((function(t){var a=t.forwards;a&&(e.forwards=a)})),Object(d["rb"])().then((function(t){var a=t.protocols;a&&(e.protocolsList=a)}))}},I=N,L=(a("a8f6"),Object(h["a"])(I,i,r,!1,null,null,null)),D=L.exports;t["default"]=D}}]);