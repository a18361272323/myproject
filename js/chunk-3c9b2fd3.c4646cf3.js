(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3c9b2fd3"],{5636:function(e,t,a){"use strict";a("cf9e")},cf9e:function(e,t,a){},de88:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e._self._c;return t("div",{staticClass:"user-record full"},[t("div",{staticClass:"user-record-header"},[t("div",{staticClass:"f_left",staticStyle:{width:"210px"}},[t("DropdownZtreeUser",{ref:"users",attrs:{placeholder:e.$t("bgManage.pleaseEnterQueryUser"),label:e.$t("bgManage.queryUser")},model:{value:e.searchText,callback:function(t){e.searchText=t},expression:"searchText"}})],1),t("div",{staticClass:"f_left"},[t("el-button",{staticStyle:{width:"90px"},attrs:{type:"primary",loading:e.loading},on:{click:e.handleClickQuery}},[e._v(e._s(e.$t("common.query")))])],1),t("div",{staticClass:"f_left",staticStyle:{"padding-top":"5px"}},[t("span",{staticStyle:{"font-size":"13px"}},[e._v(" "+e._s(e.$t("missing.totalNumber"))+":"+e._s(e.tableList.length)+" ")])]),t("div",{staticClass:"f_right"},[t("el-button",{attrs:{type:"primary",loading:e.exportLoading1},on:{click:e.exportData}},[e._v(e._s(e.$t("common.export")))])],1)]),t("div",{staticClass:"user-record-content",staticStyle:{top:"39px"}},[t("vxe-table",{ref:"xTable",attrs:{border:"",resizable:"","auto-resize":"","menu-config":e.tableMenu,"sort-config":e.sortConfig,"show-overflow":"","highlight-current-row":"",size:"mini",height:"auto",data:e.tableList},on:{"menu-click":e.handleClickTableMenu,"current-change":e.currentChangeEvent,"cell-dblclick":e.cellDblclick}},[t("vxe-table-column",{attrs:{field:"usertype",title:e.$t("reportForm.action"),width:"100"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("div",{staticStyle:{"padding-top":"7px"}},[t("span",{staticStyle:{padding:"0px 11px 0px 0px"},attrs:{title:e.$t("common.edit")}},[t("img",{staticStyle:{width:"17px",cursor:"pointer"},attrs:{src:e.editIcon},on:{click:function(t){return e.handleEditUser(a)}}})]),t("el-popconfirm",{attrs:{placement:"top",icon:"el-icon-info","icon-color":"red","confirm-button-text":e.$t("common.confirm"),"cancel-button-text":e.$t("common.cancel"),title:e.$t("tips.confirmDelete")},on:{confirm:function(t){return e.handleDelete(a)}}},[t("span",{attrs:{slot:"reference"},slot:"reference"},[t("img",{staticStyle:{width:"16px",cursor:"pointer","margin-right":"11px"},attrs:{src:e.deleteIcon,title:e.$t("common.delete")}})])]),t("el-dropdown",{attrs:{trigger:"click",size:"mini"},on:{command:e.onCommand}},[t("span",{staticStyle:{position:"relative",top:"1px"}},[t("img",{staticStyle:{width:"18px",cursor:"pointer"},attrs:{src:e.moreIcon,title:e.$t("common.more")}})]),t("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[t("el-dropdown-item",{staticClass:"clearfix",attrs:{command:"resetPassword"}},[e._v(e._s(e.$t("common.resetPassword")))]),t("el-dropdown-item",{staticClass:"clearfix",attrs:{command:"loginUser"}},[e._v(e._s(e.$t("bgManage.loginUser")))])],1)],1)],1)]}}])}),t("vxe-table-column",{attrs:{type:"seq",width:"60",title:e.$t("reportForm.index")}}),t("vxe-table-column",{attrs:{title:e.$t("bgManage.user"),field:"username",width:"145",sortable:""},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-popover",{attrs:{placement:"bottom",trigger:"click"}},[t("div",{staticClass:"parents-wrapper"},e._l(e.parentsList,(function(a){return t("div",{key:a.username},[e._v(e._s(a.username)+"("+e._s(a.usertypeStr)+")")])})),0),t("el-button",{staticStyle:{color:"#000000"},attrs:{slot:"reference",type:"text"},on:{click:function(t){return e.queryParents(a.row.username)}},slot:"reference"},[e._v(e._s(a.row.username))])],1)]}}])}),t("vxe-table-column",{attrs:{field:"showname",title:e.$t("bgManage.displayName"),width:"145",sortable:""}}),t("vxe-table-column",{attrs:{field:"usertypeStr",title:e.$t("bgManage.userType"),width:"90",sortable:""}}),t("vxe-table-column",{attrs:{field:"roleStr",title:e.$t("bgManage.role"),width:"90",sortable:""}}),t("vxe-table-column",{attrs:{field:"companyname",title:e.$t("bgManage.companyName"),sortable:""}}),t("vxe-table-column",{attrs:{field:"cardname",title:e.$t("bgManage.contacts"),sortable:""}}),t("vxe-table-column",{attrs:{field:"phone",title:e.$t("reportForm.contactPhone"),sortable:""}}),t("vxe-table-column",{attrs:{field:"companyaddr",title:e.$t("bgManage.contactAddress"),sortable:""}}),t("vxe-table-column",{attrs:{title:e.$t("bgManage.upperUser"),field:"creater",sortable:""},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-popover",{attrs:{placement:"bottom",trigger:"click"}},[t("div",{staticClass:"parents-wrapper"},e._l(e.parentsList,(function(a){return t("div",{key:a.username},[e._v(e._s(a.username)+"("+e._s(a.usertypeStr)+")")])})),0),t("el-button",{staticStyle:{color:"#000000"},attrs:{slot:"reference",type:"text"},on:{click:function(t){return e.queryParents(a.row.creater)}},slot:"reference"},[e._v(e._s(a.row.creater))])],1)]}}])}),t("vxe-table-column",{attrs:{field:"createtimeStr",title:e.$t("bgManage.createTime"),sortable:""}})],1)],1),t("EditUserDialog",{ref:"dialog",attrs:{roles:e.roles},on:{"edit-user":e.onEditUser},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}})],1)},s=[],o=a("ade3"),n=a("5530"),i=(a("99af"),a("4de4"),a("c975"),a("14d9"),a("4e82"),a("a9e3"),a("b680"),a("d3b7"),a("159b"),a("2f62")),c=a("e285"),l=a("201d"),u=a("c7bc"),d=a("4a8a"),m=a("5101"),p=a("c276"),g=a("6e52"),h=a("0c87"),b=a("a05b"),f=a("b562"),v=a("61fc"),x=a("e173"),w=a("7b49"),y={name:"queryUser",data:function(){return{editIcon:v,deleteIcon:x,moreIcon:w,dialog:!1,loading:!1,exportLoading1:!1,searchText:"",parentsList:[],tableList:[],roles:[],sortConfig:{sortMethod:function(e){var t=e.data,a=e.sortList,r=a[0],s=r.property,o=r.order,n=[];return console.log("property",s),n="desc"===o?t.sort((function(e,t){var a=t[s]+"";return a.localeCompare(e[s])})):"asc"===o?t.sort((function(e,t){var a=e[s]+"";return a.localeCompare(t[s])})):t.sort(),n}}}},mixins:[h["a"],b["a"]],components:{LabelWrap:l["a"],EditUserDialog:d["a"],DropdownZtreeUser:u["a"]},computed:Object(n["a"])({},Object(i["b"])(["isZh","userName","isQueryInitData"])),watch:{isQueryInitData:function(e){e&&this.queryRecords()}},methods:Object(n["a"])(Object(n["a"])({},Object(i["c"])(["setIsReloadRootuser","setReportTagList"])),{},{onCommand:function(e){var t=this.currentRow.username;switch(e){case"resetPassword":this.resetUserPwd(t);break;case"loginUser":this.loginUserPwd(t);break;default:break}},currentChangeEvent:function(e){var t=e.row;this.currentRow=t},cellDblclick:function(e){this.handleEditUser(e)},handleEditUser:function(e){var t=e.row;this.$refs.dialog.setInfo(t),this.dialog=!0},handleDelete:function(e){var t=this,a=e.rowIndex,r=e.row,s=r.username;Object(c["I"])([s]).then((function(e){var r=e.status,o=e.cause,n=e.count,i=e.bonuspoints,c=e.addvaluepoints,l=e.commission;if(0==r)t.$XModal.message({message:t.$t("tips.deleteSucc"),status:"success",zIndex:9999}),t.$delete(t.tableList,a),t.cacheList=t.cacheList.filter((function(e){return e.username!=s})),g["a"].removeUser(s),t.setReportTagList([]),t.setIsReloadRootuser(!0);else if(1==r)t.$XModal.message({message:t.$t("tips.accountAndDevice",{count:n}),status:"error",zIndex:9999});else if(2==r){var u="";i>0&&(u+=t.$t("bgManage.bonuspoints")+" "+i.toFixed(0)),c>0&&(u.length>0&&(u+=","),u+=t.$t("bgManage.addvaluepoints")+" "+Number(c.toFixed(2))),l>0&&(u.length>0&&(u+=","),u+=t.$t("bgManage.commission")+" "+Number(l.toFixed(2))),t.$XModal.message({message:t.$t("tips.accountAndGoldenBean",{str:u}),status:"error",zIndex:9999})}else t.$XModal.message({message:t.$t("tips.deleteFail")+o,status:"error",zIndex:9999})}))},resetUserPwd:function(e){var t=this;Object(c["dc"])(e).then((function(e){var a=e.status,r=e.newpass;t.isZh?0==a?t.$XModal.message({message:"重置密码成功,新密码:"+r,status:"success",zIndex:9999}):t.$XModal.message({message:"重置密码失败:"+cause,status:"error",zIndex:9999}):0==a?t.$XModal.message({message:"Password reset succeeded, new password:"+r,status:"success",zIndex:9999}):t.$XModal.message({message:"Password reset failed:"+cause,status:"error",zIndex:9999})}))},loginUserPwd:function(e){var t=this,a={type:"USER",from:"web",username:e,aslevel1:0};Object(f["K"])(a,this.$store.state.user.token).then((function(e){var a=e.status,r=e.token;if(0==a){var s;Object(p["Ab"])(r),Object(p["Cb"])(e.username),Object(p["xb"])(e.nickname),Object(p["Db"])(e.usertype),Object(p["rb"])(e.forcealarm),Object(p["pb"])(e.alarmaction);var n=(s={playbacklinewidth:e.playbacklinewidth,email:e.email,nickname:e.nickname,phone:e.phone,qq:e.qq,wechat:e.wechat},Object(o["a"])(Object(o["a"])(Object(o["a"])(Object(o["a"])(Object(o["a"])(Object(o["a"])(Object(o["a"])(Object(o["a"])(Object(o["a"])(Object(o["a"])(s,"email",e.email),"creatername",e.creatername),"username",e.username),"multilogin",e.multilogin),"intervaltime",e.intervaltime),"createremail",e.createremail),"creatername",e.creatername),"createrphone",e.createrphone),"createrqq",e.createrqq),"createrwechat",e.createrwechat),Object(o["a"])(Object(o["a"])(s,"logourl",e.logourl),"logotitle",e.logotitle));Object(p["wb"])(n),window.open("".concat(window.location.origin).concat(window.location.pathname,"#/monitorPage"))}else-1==a?t.$XModal.message({message:t.$t("login.error_3"),status:"error",zIndex:9999}):1==a?t.$XModal.message({message:t.$t("login.error_4"),status:"error",zIndex:9999}):2==a?t.$XModal.message({message:t.$t("login.error_5"),status:"error",zIndex:9999}):3==a?t.$XModal.message({message:t.$t("login.error_6"),status:"error",zIndex:9999}):4==a?t.$XModal.message({message:t.$t("login.error_7"),status:"error",zIndex:9999}):5==a&&t.$XModal.message({message:t.$t("login.error_8"),status:"error",zIndex:9999})}))},formatLevel:function(e){var t=e.usertype;return Object(p["ab"])(this.isZh,t)},formatRole:function(e){for(var t=e.roleuuid,a=this.roles,r="",s=0;s<a.length;s++){var o=a[s];if(o.roleuuid==t){r=1==o.roletype?this.isZh?o.rolename:o.rolenameen:o.rolename;break}}return r},onEditUser:function(e){e.usertypeStr=this.formatLevel(e),e.roleStr=this.formatRole(e)},queryRecords:function(){var e=this;this.loading=!0;this.isZh;Object(c["Rb"])(this.userName,0).then((function(t){var a=t.userlists,r=[];a&&(a.forEach((function(t){t.usertypeStr=e.formatLevel(t),t.roleStr=e.formatRole(t),t.createtimeStr=m["a"].format(new Date(t.createtime),"yyyy-MM-dd")})),r=a),e.tableList=r,e.cacheList=r,e.loading=!1}))},handleClickQuery:function(){var e=[],t=this.searchText.toLowerCase();this.cacheList.forEach((function(a){var r=a.username?a.username:"",s=a.showname?a.showname:"";-1==r.toLowerCase().indexOf(t)&&-1==s.toLowerCase().indexOf(t)||e.push(a)})),this.tableList=e},queryRoles:function(e){var t=this,a=this.isZh;Object(c["Kb"])({}).then((function(r){var s=r.status,o=r.roles,n=[];0==s&&null!=o&&o.forEach((function(e){1==e.roletype&&0==a&&(e.rolename=e.rolenameen);var t="";e.remark&&(t="-"+e.remark),e.label=e.rolename+"(".concat(e.creater,")")+t,e.value=e.roleuuid,n.push(e)})),t.roles=n,e()})).catch((function(e){console.log(e),t.loading=!1}))},exportData:function(){if(0!=this.cacheList.length){var e=[[this.$t("reportForm.index"),this.$t("bgManage.user"),this.$t("bgManage.displayName"),this.$t("bgManage.userType"),this.$t("bgManage.role"),this.$t("reportForm.contactPhone"),this.$t("bgManage.contactAddress"),this.$t("reportForm.creater"),this.$t("bgManage.createTime")]],t=this.$refs.xTable.getTableData().visibleData;t.forEach((function(t,a){var r=[];r.push(a+1),r.push(t.username),r.push(t.showname),r.push(t.usertypeStr),r.push(t.roleStr),r.push(t.phone?t.phone:""),r.push(t.companyaddr?t.companyaddr:""),r.push(t.creater),r.push(t.createtimeStr),e.push(r)}));var a={title:this.$t("bgManage.queryUser"),data:e};this.exportLoading1=!0,new ExcelCls(a).exportExcel(this)}}}),mounted:function(){var e=this;this.cacheList=[],this.$nextTick((function(){e.isQueryInitData&&e.queryRoles((function(){e.queryRecords()}))}))}},$=y,M=(a("5636"),a("2877")),k=Object(M["a"])($,r,s,!1,null,null,null),_=k.exports;t["default"]=_}}]);