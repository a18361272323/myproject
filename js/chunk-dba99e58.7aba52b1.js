(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-dba99e58"],{"3ba2":function(e,t,a){},c93f:function(e,t,a){"use strict";a("3ba2")},f9f27:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"selfRegisterUser full"},[t("div",{staticClass:"selfRegisterUser-header"},[t("div",{staticClass:"f_left",staticStyle:{width:"210px"}},[t("DropdownZtreeUser",{ref:"users",attrs:{placeholder:e.$t("bgManage.pleaseEnterQueryUser"),label:e.$t("bgManage.queryUser")},model:{value:e.searchText,callback:function(t){e.searchText=t},expression:"searchText"}})],1),t("div",{staticClass:"f_left"},[t("el-button",{staticStyle:{width:"90px"},attrs:{type:"primary",loading:e.loading},on:{click:e.handleClickQuery}},[e._v(e._s(e.$t("common.query")))])],1),t("div",{staticClass:"f_left"},[t("div",{staticStyle:{"font-size":"13px","line-height":"34px"}},[e._v(" "+e._s(e.$t("missing.totalNumber"))+" : "+e._s(e.tableList.length))])])]),t("div",{staticClass:"selfRegisterUser-content",staticStyle:{top:"39px"}},[t("vxe-table",{staticClass:"mytable-scrollbar",attrs:{"menu-config":e.tableMenu,"scroll-y":{enabled:!0,gt:30},border:"",resizable:"","auto-resize":"","sort-config":e.sortConfig,"show-overflow":"","highlight-current-row":"",size:"mini",height:"auto",data:e.tableList},on:{"menu-click":e.handleClickTableMenu,"current-change":e.currentChangeEvent,"cell-dblclick":e.cellDblclick}},[t("vxe-table-column",{attrs:{field:"usertype",title:e.$t("reportForm.action"),width:"100"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("div",{staticStyle:{"padding-top":"7px"}},[t("span",{staticStyle:{padding:"0px 11px 0px 0px"}},[t("img",{staticStyle:{width:"17px",cursor:"pointer"},attrs:{src:e.editIcon,title:e.$t("common.edit")},on:{click:function(t){return e.handleEditUser(a)}}})]),t("el-popconfirm",{attrs:{placement:"top",icon:"el-icon-info","icon-color":"red","confirm-button-text":e.$t("common.confirm"),"cancel-button-text":e.$t("common.cancel"),title:e.$t("tips.confirmDelete")},on:{confirm:function(t){return e.handleDelete(a)}}},[t("span",{attrs:{slot:"reference"},slot:"reference"},[t("img",{staticStyle:{width:"16px",cursor:"pointer","margin-right":"11px"},attrs:{src:e.deleteIcon,title:e.$t("common.delete")}})])]),t("el-dropdown",{attrs:{trigger:"click",size:"mini"},on:{command:e.onCommand}},[t("span",{staticStyle:{position:"relative",top:"1px"}},[t("img",{staticStyle:{width:"18px",cursor:"pointer"},attrs:{src:e.moreIcon,title:e.$t("common.more")}})]),t("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[t("el-dropdown-item",{staticClass:"clearfix",attrs:{command:"resetPassword"}},[e._v(e._s(e.$t("common.resetPassword")))]),t("el-dropdown-item",{staticClass:"clearfix",attrs:{command:"bindDevice"}},[e._v(e._s(e.$t("missing.bindDeviceList")))]),t("el-dropdown-item",{staticClass:"clearfix",attrs:{command:"loginUserPwd"}},[e._v(e._s(e.$t("bgManage.loginUser")))])],1)],1)],1)]}}])}),t("vxe-table-column",{attrs:{type:"seq",width:"60",title:e.$t("reportForm.index")}}),t("vxe-table-column",{attrs:{title:e.$t("bgManage.user"),field:"username",width:"145",sortable:""},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-popover",{attrs:{placement:"bottom",trigger:"click"}},[t("div",{staticClass:"parents-wrapper"},e._l(e.parentsList,(function(a){return t("div",{key:a.username},[e._v(e._s(a.username)+"("+e._s(a.usertypeStr)+")")])})),0),t("el-button",{staticStyle:{color:"#000000"},attrs:{slot:"reference",type:"text"},on:{click:function(t){return e.queryParents(a.row.username)}},slot:"reference"},[e._v(e._s(a.row.username))])],1)]}}])}),t("vxe-table-column",{attrs:{field:"showname",title:e.$t("bgManage.displayName"),width:"145",sortable:""}}),t("vxe-table-column",{attrs:{title:e.$t("reportForm.creater"),field:"creater",sortable:""},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-popover",{attrs:{placement:"bottom",trigger:"click"}},[t("div",{staticClass:"parents-wrapper"},e._l(e.parentsList,(function(a){return t("div",{key:a.username},[e._v(e._s(a.username)+"("+e._s(a.usertypeStr)+")")])})),0),t("el-button",{staticStyle:{color:"#000000"},attrs:{slot:"reference",type:"text"},on:{click:function(t){return e.queryParents(a.row.creater)}},slot:"reference"},[e._v(e._s(a.row.creater))])],1)]}}])}),t("vxe-table-column",{attrs:{field:"createtimeStr",title:e.$t("bgManage.createTime"),sortable:""}})],1)],1),t("EditUserDialog",{ref:"dialog",attrs:{roles:e.roles},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}}),t("BindDeviceDialog",{ref:"deviceDialog",model:{value:e.deviceDialog,callback:function(t){e.deviceDialog=t},expression:"deviceDialog"}})],1)},r=[],o=a("ade3"),n=a("5530"),i=(a("99af"),a("4de4"),a("c975"),a("14d9"),a("4e82"),a("a9e3"),a("b680"),a("d3b7"),a("498a"),a("159b"),a("2f62")),c=a("e285"),l=a("c7bc"),d=a("4a8a"),u=a("b2e5"),m=a("5101"),g=a("6e52"),b=a("0c87"),f=a("a05b"),p=a("c276"),h=a("b562"),v=a("61fc"),w=a("e173"),x=a("7b49"),y={name:"SelfRegisterUser",data:function(){return{editIcon:v,deleteIcon:w,moreIcon:x,dialog:!1,deviceDialog:!1,loading:!1,searchText:"",parentsList:[],tableList:[],roles:[],sortConfig:{sortMethod:function(e){var t=e.data,a=e.sortList,s=a[0],r=s.property,o=s.order,n=[];return n="desc"===o?t.sort((function(e,t){var a=t[r]+"";return a.localeCompare(e[r])})):"asc"===o?t.sort((function(e,t){var a=e[r]+"";return a.localeCompare(t[r])})):t.sort(),n}}}},mixins:[b["a"],f["a"]],components:{DropdownZtreeUser:l["a"],EditUserDialog:d["a"],BindDeviceDialog:u["a"]},computed:Object(n["a"])({},Object(i["b"])(["isZh","userName","isQueryInitData"])),watch:{isQueryInitData:function(e){e&&this.queryRecords()}},methods:Object(n["a"])(Object(n["a"])({},Object(i["c"])(["setIsReloadRootuser","setReportTagList"])),{},{onCommand:function(e){var t=this.currentRow.username;switch(e){case"resetPassword":this.resetUserPwd(t);break;case"bindDevice":this.handleSeeBindDevice(t);break;case"loginUserPwd":this.loginUserPwd(t);break;default:break}},currentChangeEvent:function(e){var t=e.row;this.currentRow=t},loginUserPwd:function(e){var t=this,a={type:"USER",from:"web",username:e,aslevel1:0};Object(h["K"])(a,this.$store.state.user.token).then((function(e){var a=e.status,s=e.token;if(0==a){var r;Object(p["Ab"])(s),Object(p["Cb"])(e.username),Object(p["xb"])(e.nickname),Object(p["Db"])(e.usertype),Object(p["rb"])(e.forcealarm),Object(p["pb"])(e.alarmaction);var n=(r={playbacklinewidth:e.playbacklinewidth,email:e.email,nickname:e.nickname,phone:e.phone,qq:e.qq,wechat:e.wechat},Object(o["a"])(Object(o["a"])(Object(o["a"])(Object(o["a"])(Object(o["a"])(Object(o["a"])(Object(o["a"])(Object(o["a"])(Object(o["a"])(Object(o["a"])(r,"email",e.email),"creatername",e.creatername),"username",e.username),"multilogin",e.multilogin),"intervaltime",e.intervaltime),"createremail",e.createremail),"creatername",e.creatername),"createrphone",e.createrphone),"createrqq",e.createrqq),"createrwechat",e.createrwechat),Object(o["a"])(Object(o["a"])(r,"logourl",e.logourl),"logotitle",e.logotitle));Object(p["wb"])(n),window.open("".concat(window.location.origin).concat(window.location.pathname,"#/monitorPage"))}else-1==a?t.$XModal.message({message:t.$t("login.error_3"),status:"error",zIndex:9999}):1==a?t.$XModal.message({message:t.$t("login.error_4"),status:"error",zIndex:9999}):2==a?t.$XModal.message({message:t.$t("login.error_5"),status:"error",zIndex:9999}):3==a?t.$XModal.message({message:t.$t("login.error_6"),status:"error",zIndex:9999}):4==a?t.$XModal.message({message:t.$t("login.error_7"),status:"error",zIndex:9999}):5==a&&t.$XModal.message({message:t.$t("login.error_8"),status:"error",zIndex:9999})}))},cellDblclick:function(e){this.handleEditUser(e)},handleEditUser:function(e){var t=e.row;this.$refs.dialog.setInfo(t),this.dialog=!0},handleSeeBindDevice:function(e){this.$refs.deviceDialog.queryMonitorList(e),this.deviceDialog=!0},handleDelete:function(e){var t=this,a=e.rowIndex,s=e.row,r=s.username;Object(c["I"])([r]).then((function(e){var s=e.status,o=e.cause,n=e.count,i=e.bonuspoints,c=e.addvaluepoints,l=e.commission;if(0==s)t.$XModal.message({message:t.$t("tips.deleteSucc"),status:"success",zIndex:9999}),t.$delete(t.tableList,a),t.cacheList=t.cacheList.filter((function(e){return e.username!=r})),g["a"].removeUser(r),t.setReportTagList([]),t.setIsReloadRootuser(!0);else if(1==s)t.$XModal.message({message:t.$t("tips.accountAndDevice",{count:n}),status:"error",zIndex:9999});else if(2==s){var d="";i>0&&(d+=t.$t("bgManage.bonuspoints")+" "+i.toFixed(0)),c>0&&(d.length>0&&(d+=","),d+=t.$t("bgManage.addvaluepoints")+" "+Number(c.toFixed(2))),l>0&&(d.length>0&&(d+=","),d+=t.$t("bgManage.commission")+" "+Number(l.toFixed(2))),t.$XModal.message({message:t.$t("tips.accountAndGoldenBean",{str:d}),status:"error",zIndex:9999})}else t.$XModal.message({message:t.$t("tips.deleteFail")+o,status:"error",zIndex:9999})}))},resetUserPwd:function(e){var t=this;Object(c["dc"])(e).then((function(e){var a=e.status,s=e.newpass;t.isZh?0==a?t.$XModal.message({message:"重置密码成功,新密码:"+s,status:"success",zIndex:9999}):t.$XModal.message({message:"重置密码失败:"+cause,status:"error",zIndex:9999}):0==a?t.$XModal.message({message:"Password reset succeeded, new password:"+s,status:"success",zIndex:9999}):t.$XModal.message({message:"Password reset failed:"+cause,status:"error",zIndex:9999})}))},queryRecords:function(){var e=this;this.loading=!0;this.isZh;Object(c["Lb"])({username:this.userName}).then((function(t){var a=t.userlists,s=[];a&&(a.forEach((function(e){e.createtimeStr=m["a"].format(new Date(e.createtime),"yyyy-MM-dd")})),s=a),e.tableList=s,e.cacheList=s,e.loading=!1}))},handleClickQuery:function(){var e=[],t=this.searchText.toLowerCase().trim();this.cacheList.forEach((function(a){var s=a.username?a.username:"",r=a.showname?a.showname:"",o=a.creater?a.creater:"";-1==s.toLowerCase().indexOf(t)&&-1==r.toLowerCase().indexOf(t)&&-1==o.toLowerCase().indexOf(t)||e.push(a)})),this.tableList=e}}),mounted:function(){var e=this;this.cacheList=[],this.$nextTick((function(){e.isQueryInitData&&e.queryRecords()}))}},$=y,k=(a("c93f"),a("2877")),_=Object(k["a"])($,s,r,!1,null,null,null),O=_.exports;t["default"]=O}}]);