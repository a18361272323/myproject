(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-22f3b036"],{3566:function(t,e,i){},"3f83":function(t,e,i){"use strict";i("3566")},"647a":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAeCAYAAABaKIzgAAAAAXNSR0IArs4c6QAABJBJREFUWEe9mFtsFFUYx3/fbIFSBCt2Z0vBYIJRqwJGI0ETtF6iSEyMJmpMxCrx+qCRpO3OiqZUxc5WojE+eCEGTYwGjdEYjRH0wQceIMYLodIQvESRsKdIRZS6dHc+c6bbdgvbdrbb9Dztznzf//zzP/PdjgC4rboEhyTCtcA8YMA+n8QSoArlkArv9/rSOQmMki7SsEHPyeXpBuZOFWgRzifGl1unAlfinm4ReKAIrBewylSy6oadldUmLV9UAmZ9xfV0D7AUOImyYt4JenLzKyPaf5IuVR6zGyh4vb6kp4LoN8DlwDHjS22lgNY/ntJmUd4KsZS1Ji3vVIorbkp3WSWB40HAwiNdcrwY1H1SEwKXlLORBjQDa0Mf4VURPrQ/8zn2HemSQ+VgDdmOSzSe1JdEeASongx4CR+bTbYaXx4uF29MovGUPivKU+UCRrIXXjedYgWIvEoSrW3X2plZ+goo/wHbUU4CTmTk0YYBQgxYDcwGssaXsk6pJNFEUpeqYLOBXZ8bX9ZMkuAot4SnnyrcDPQZX0ZSWATwkkQXtGlj3uHHQtR+bNJyWwSsCU0Snr6scB/KAZMWm2kir5JEz07phTFl32DQ8lnGl1siI45jGPc0KYTBuae4Ytmi4wjzMp1y11ju00rUTeo9CM0K3b2+PGFJJTx9U2FdSHCcIJtWovGUrhKlCeWXoSLgevoM8HSRkq8ZXx49VdnpJdqq9RpjYRCQOdolB4fIjKpkgw9PIzutRLlDY+fVU3XgFcmeqljh+/WLnr9gfGkb+j+9RCeIyISndytsAeZYU4VNvb6ERadionUpPf9Ip+wf5vCQznDraFSlyVGWqxKp0VFhQOCgwDqFs4bxlM0mLa0VE3WTepOpZgcdEljwho1aM9DPNTjcK8oNQFmJvZToqjxuG+fdAlcAf0uOhsxm+beuTS9wHHqi5NF4Uq/u/ZmdfCB5a79ovc7OzqSpQPS6IqJRyu8/4Sgzugn6zVHW2Mb5B2CZbfOML3ZegnZ13CzhxhMlfKvgoY1yYkQJlUQLNblZ1ErAnCq7cYAEMWLkx2nIYxwmz6UivFd09N1ZWHXMlz5xk/olwvVAIMrb6vA7AQsQHoxCtKyK1a5WVYcOyZ3mNyjO7kITb1/vNUe5jDckHDQlntQ7Rdg2ZumawhI6v00XzYK5TgzzR6f8ObRnvafnBsp3SCHwlO9rqrny1w6xnVu4wiEu7ulzAhtKkZ3o6MtRtCDKYnH4NvO8fGV93aQuR/gaOLNAqCfjcxGIFmMPT5uhg8MyVWY4Sr0Km6b66F1PtxaOdrvxpcUWAHcJPwGLC6T2Dygr+tJy7FQBSo/F7VrlZocvIT4yvtxejnJj2bqeWhVtJthlfFkJKq4Xxse7wOGqalaODswRpJJE65N6cSDsLXwcO0yn3DhFRHcCV6H8ZdIyktQjgJckGm/XM2RwFLE5zUZoD0oOmeS8rygSjjGNwAyg3/hSE4HfsMmYNyIJT9crvFgOWGRbpcukJRnZfqKrGzelLSj32+As2I6KxDI2CgVRMALbjC8dZfiGpv8Dc3Q77o+DnSsAAAAASUVORK5CYII="},"9deb":function(t,e,i){"use strict";i.r(e);i("498a");var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"oil-marking full"},[e("OilMarkingHeader",{on:{queryRefuelTicket:t.queryRefuelTicket,queryDayRecords:t.queryDayRecords,clearData:t.handleClearData}}),e("div",{staticClass:"oil-marking-inner"},[e("div",{staticClass:"oil-marking-inner-wrap"},[e("split-pane",{style:{height:"100%"},attrs:{direction:"vertical",showBtn:!1,min:25,max:75},on:{"on-resizing-end":t.onResizingEnd},model:{value:t.triggerOffsetV,callback:function(e){t.triggerOffsetV=e},expression:"triggerOffsetV"}},[e("div",{staticStyle:{height:"100%"},attrs:{slot:"top"},slot:"top"},[e("div",{staticClass:"oil-marking-inner-echarts"},[e("OilMarkingEcharts",{ref:"echartIns",attrs:{oilType:t.tank},on:{onClickMarkPoint:t.onClickMarkPoint}})],1)]),e("div",{staticStyle:{height:"100%"},attrs:{slot:"bottom"},slot:"bottom"},[e("div",{staticClass:"oil-marking-inner-table"},[e("div",{staticStyle:{"padding-right":"5px"}},[e("div",[e("div",{staticClass:"oil-marking-table-title"},[e("span"),t._v(" "+t._s(t.$t("bgManage.currentMarkingData"))+"("+t._s(t.oldMarkingList.length)+") ")]),e("div",{staticClass:"oil-marking-table-ctrl"},[e("div",{staticClass:"f_left",staticStyle:{width:"160px"}},[e("LabelWrap",{attrs:{label:t.$t("reportForm.selectTabk")}},[e("el-select",{model:{value:t.tank,callback:function(e){t.tank=e},expression:"tank"}},[e("el-option",{attrs:{label:t.$t("device.tank1"),value:1}}),e("el-option",{attrs:{label:t.$t("device.tank2"),value:2}}),e("el-option",{attrs:{label:t.$t("device.tank3"),value:3}}),e("el-option",{attrs:{label:t.$t("device.tank4"),value:4}})],1)],1)],1),e("div",{staticClass:"f_left"},[e("el-tooltip",{attrs:{placement:"top"}},[e("div",{attrs:{slot:"content"},slot:"content"},[t._v(" "+t._s(t.$t("tips.thresholdTip1"))+" "),e("br"),t._v(" "+t._s(t.$t("tips.thresholdTip2"))+" "),e("br"),t._v(" "+t._s(t.$t("tips.thresholdTip3"))+" "),e("br")]),e("div",{staticStyle:{cursor:"pointer","padding-top":"5px"}},[e("i",{staticClass:"el-icon-info",staticStyle:{color:"#FF9900","font-size":"18px"}})])])],1),e("div",{staticClass:"f_left threshold",staticStyle:{width:"140px"}},[e("LabelWrap",{attrs:{label:t.$t("device.threshold")}},[1==t.tank?e("el-input",{model:{value:t.threshold1,callback:function(e){t.threshold1="string"===typeof e?e.trim():e},expression:"threshold1"}}):t._e(),2==t.tank?e("el-input",{model:{value:t.threshold2,callback:function(e){t.threshold2="string"===typeof e?e.trim():e},expression:"threshold2"}}):t._e(),3==t.tank?e("el-input",{model:{value:t.threshold3,callback:function(e){t.threshold3="string"===typeof e?e.trim():e},expression:"threshold3"}}):t._e(),4==t.tank?e("el-input",{model:{value:t.threshold4,callback:function(e){t.threshold4="string"===typeof e?e.trim():e},expression:"threshold4"}}):t._e()],1)],1),e("div",{staticClass:"f_left blindVolume",staticStyle:{width:"90px",display:"none"}},[e("LabelWrap",{attrs:{label:t.$t("bgManage.blindVolume")}},[1==t.tank?e("el-input",{model:{value:t.blindVolume1,callback:function(e){t.blindVolume1=t._n(e)},expression:"blindVolume1"}}):t._e(),2==t.tank?e("el-input",{model:{value:t.blindVolume2,callback:function(e){t.blindVolume2=t._n(e)},expression:"blindVolume2"}}):t._e(),3==t.tank?e("el-input",{model:{value:t.blindVolume3,callback:function(e){t.blindVolume3=t._n(e)},expression:"blindVolume3"}}):t._e(),4==t.tank?e("el-input",{model:{value:t.blindVolume4,callback:function(e){t.blindVolume4=t._n(e)},expression:"blindVolume4"}}):t._e()],1)],1),e("div",{staticClass:"f_right"},[e("el-button",{on:{click:function(e){t.ratioDialog=!0}}},[t._v(t._s(t.$t("bgManage.editRatio")))])],1)]),e("div",{staticClass:"oil-marking-table-body"},[e("div",{staticClass:"full"},[e("vxe-table",{attrs:{border:"",resizable:"","auto-resize":"","show-overflow":"","highlight-hover-row":"",size:"mini",height:"auto",data:t.oldMarkingList}},[e("vxe-table-column",{attrs:{type:"seq",width:"60",title:t.$t("reportForm.index")}}),e("vxe-table-column",{attrs:{field:"height",title:t.$t("bgManage.srcad")}}),e("vxe-table-column",{attrs:{field:"volume",title:t.$t("reportForm.oil")}}),e("vxe-table-column",{attrs:{width:"70",title:t.$t("reportForm.action")},scopedSlots:t._u([{key:"default",fn:function(i){return[e("div",{staticStyle:{"padding-top":"1px"}},[e("span",{staticStyle:{padding:"0px 10px 0px 0px"}},[e("b",{staticStyle:{"vertical-align":"top","margin-right":"6px"}},[t._v(t._s(t.$t("bgManage.copy")))]),e("img",{staticStyle:{width:"20px",cursor:"pointer","vertical-align":"middle"},attrs:{src:t.oilIconDel},on:{click:function(e){return t.handleCopy(i)}}})])])]}}])})],1)],1)])])]),e("div",{staticStyle:{"padding-left":"5px"}},[e("div",[e("div",{staticClass:"oil-marking-table-title"},[e("span"),t._v(" "+t._s(t.$t("bgManage.editMarkingData"))+"("+t._s(t.newMarkingListLength)+") ")]),e("div",{staticClass:"oil-marking-table-ctrl"},[e("div",{staticClass:"f_left",staticStyle:{width:"150px"}},[e("LabelWrap",{attrs:{label:t.$t("device.scale")}},[e("el-input",{model:{value:t.height,callback:function(e){t.height=t._n("string"===typeof e?e.trim():e)},expression:"height"}})],1)],1),e("div",{staticClass:"f_left",staticStyle:{width:"150px"}},[e("LabelWrap",{attrs:{label:t.$t("device.calibratedFluid")}},[e("el-input",{model:{value:t.volume,callback:function(e){t.volume="string"===typeof e?e.trim():e},expression:"volume"}})],1)],1),e("div",{staticClass:"f_right"},[e("el-button",{staticStyle:{height:"34px"},on:{click:t.handleAdd}},[t._v(t._s(t.$t("bgManage.newAddMark")))]),e("el-button",{staticStyle:{height:"34px"},attrs:{type:"primary",loading:t.loading},on:{click:t.previewOilDetectors}},[t._v(t._s(t.$t("bgManage.afterPreview")))])],1)]),e("div",{staticClass:"oil-marking-table-body"},[e("div",{staticClass:"full"},[1==t.tank?e("vxe-table",{ref:"xTab1",attrs:{"auto-resize":"",border:"",resizable:"","show-overflow":"","highlight-current-row":"","highlight-hover-row":"",size:"mini",height:"auto",data:t.newMarkingList1}},[e("vxe-table-column",{attrs:{type:"seq",width:"60",title:t.$t("reportForm.index")}}),e("vxe-table-column",{attrs:{field:"height",title:t.$t("bgManage.srcad")}}),e("vxe-table-column",{attrs:{field:"volume",title:t.$t("reportForm.oil")}}),e("vxe-table-column",{attrs:{width:"60",title:t.$t("reportForm.action")},scopedSlots:t._u([{key:"default",fn:function(i){return[e("div",{staticStyle:{"padding-top":"7px"}},[e("span",{staticStyle:{padding:"0px 10px 0px 0px"}},[e("img",{staticStyle:{width:"20px",cursor:"pointer"},attrs:{src:t.deleteIcon},on:{click:function(e){return t.handleDelete(i)}}})])])]}}],null,!1,2867821905)})],1):t._e(),2==t.tank?e("vxe-table",{ref:"xTab2",attrs:{"auto-resize":"",border:"",resizable:"","show-overflow":"","highlight-current-row":"","highlight-hover-row":"",size:"mini",height:"auto",data:t.newMarkingList2}},[e("vxe-table-column",{attrs:{type:"seq",width:"60",title:t.$t("reportForm.index")}}),e("vxe-table-column",{attrs:{field:"height",title:t.$t("bgManage.srcad")}}),e("vxe-table-column",{attrs:{field:"volume",title:t.$t("reportForm.oil")}}),e("vxe-table-column",{attrs:{width:"60",title:t.$t("reportForm.action")},scopedSlots:t._u([{key:"default",fn:function(i){return[e("div",{staticStyle:{"padding-top":"7px"}},[e("span",{staticStyle:{padding:"0px 10px 0px 0px"}},[e("img",{staticStyle:{width:"20px",cursor:"pointer"},attrs:{src:t.deleteIcon},on:{click:function(e){return t.handleDelete(i)}}})])])]}}],null,!1,2867821905)})],1):t._e(),3==t.tank?e("vxe-table",{ref:"xTab3",attrs:{"auto-resize":"",border:"",resizable:"","show-overflow":"","highlight-current-row":"","highlight-hover-row":"",size:"mini",height:"auto",data:t.newMarkingList3}},[e("vxe-table-column",{attrs:{type:"seq",width:"60",title:t.$t("reportForm.index")}}),e("vxe-table-column",{attrs:{field:"height",title:t.$t("bgManage.srcad")}}),e("vxe-table-column",{attrs:{field:"volume",title:t.$t("reportForm.oil")}}),e("vxe-table-column",{attrs:{width:"60",title:t.$t("reportForm.action")},scopedSlots:t._u([{key:"default",fn:function(i){return[e("div",{staticStyle:{"padding-top":"7px"}},[e("span",{staticStyle:{padding:"0px 10px 0px 0px"}},[e("img",{staticStyle:{width:"20px",cursor:"pointer"},attrs:{src:t.deleteIcon},on:{click:function(e){return t.handleDelete(i)}}})])])]}}],null,!1,2867821905)})],1):t._e(),4==t.tank?e("vxe-table",{ref:"xTab4",attrs:{"auto-resize":"",border:"",resizable:"","show-overflow":"","highlight-current-row":"","highlight-hover-row":"",size:"mini",height:"auto",data:t.newMarkingList4}},[e("vxe-table-column",{attrs:{type:"seq",width:"60",title:t.$t("reportForm.index")}}),e("vxe-table-column",{attrs:{field:"height",title:t.$t("bgManage.srcad")}}),e("vxe-table-column",{attrs:{field:"volume",title:t.$t("reportForm.oil")}}),e("vxe-table-column",{attrs:{width:"60",title:t.$t("reportForm.action")},scopedSlots:t._u([{key:"default",fn:function(i){return[e("div",{staticStyle:{"padding-top":"7px"}},[e("span",{staticStyle:{padding:"0px 10px 0px 0px"}},[e("img",{staticStyle:{width:"20px",cursor:"pointer"},attrs:{src:t.deleteIcon},on:{click:function(e){return t.handleDelete(i)}}})])])]}}],null,!1,2867821905)})],1):t._e()],1)])])])])])])],1),e("div",{staticClass:"oil-marking-inner-btn-wrap",staticStyle:{"text-align":"center"}},[e("div",{staticClass:"oil-marking-inner-btn-wrap-checkbox"},[e("div",{staticStyle:{height:"29px","line-height":"30px"}},[e("el-checkbox",{model:{value:t.travelOil,callback:function(e){t.travelOil=e},expression:"travelOil"}},[t._v(t._s(t.$t("bgManage.mergeStatistical")))]),e("el-checkbox",{model:{value:t.noTravelOil,callback:function(e){t.noTravelOil=e},expression:"noTravelOil"}},[t._v(t._s(t.$t("bgManage.notRunOilMergeStatistical")))])],1)]),e("el-popconfirm",{attrs:{placement:"top",icon:"el-icon-info","icon-color":"red","confirm-button-text":t.$t("common.confirm"),"cancel-button-text":t.$t("common.cancel"),title:t.$t("tips.overlayMarker")},on:{confirm:t.saveOilDetectors}},[e("span",{attrs:{slot:"reference"},slot:"reference"},[e("el-button",{attrs:{type:"primary"}},[t._v(t._s(t.$t("bgManage.saveCurrentMark")))])],1)]),e("div",{staticClass:"oil-marking-inner-btn-wrap-btns"},[1==t.tank?e("a",{staticClass:"ellipsis",attrs:{title:t.markerStr1},on:{click:function(e){return t.editMarkerStr(t.markerStr1)}}},[t._v(t._s(t.markerStr1))]):t._e(),1==t.tank&&null==t.markerStr1?e("a",{on:{click:function(e){return t.editMarkerStr("")}}},[t._v(t._s(t.$t("device.remarkInfo")))]):t._e(),2==t.tank?e("a",{staticClass:"ellipsis",attrs:{title:t.markerStr2},on:{click:function(e){return t.editMarkerStr(t.markerStr2)}}},[t._v(t._s(t.markerStr2))]):t._e(),2==t.tank&&null==t.markerStr2?e("a",{on:{click:function(e){return t.editMarkerStr("")}}},[t._v(t._s(t.$t("device.remarkInfo")))]):t._e(),3==t.tank?e("a",{staticClass:"ellipsis",attrs:{title:t.markerStr3},on:{click:function(e){return t.editMarkerStr(t.markerStr3)}}},[t._v(t._s(t.markerStr3))]):t._e(),3==t.tank&&null==t.markerStr3?e("a",{on:{click:function(e){return t.editMarkerStr("")}}},[t._v(t._s(t.$t("device.remarkInfo")))]):t._e(),4==t.tank?e("a",{staticClass:"ellipsis",attrs:{title:t.markerStr4},on:{click:function(e){return t.editMarkerStr(t.markerStr4)}}},[t._v(t._s(t.markerStr4))]):t._e(),4==t.tank&&null==t.markerStr4?e("a",{on:{click:function(e){return t.editMarkerStr("")}}},[t._v(t._s(t.$t("device.remarkInfo")))]):t._e(),e("input",{ref:"fileEl",staticStyle:{display:"none"},attrs:{type:"file"}}),e("el-button",{attrs:{type:"primary"},on:{click:function(e){t.qeuryOilMarkDialog=!0}}},[t._v(t._s(t.$t("common.referenceDevice")))]),e("el-button",{attrs:{type:"primary"},on:{click:t.downloadTemp}},[t._v(t._s(t.$t("insure.templateDownload")))]),e("el-button",{attrs:{type:"primary"},on:{click:t.importMark}},[t._v(t._s(t.$t("common.importMark")))])],1)],1)]),e("el-dialog",{attrs:{title:t.$t("bgManage.editVolumeFactor")+" "+t.$t("reportForm.tank")+t.tank,center:"",visible:t.ratioDialog,width:"320px","append-to-body":"","close-on-click-modal":!1},on:{close:function(e){t.ratioDialog=!1}}},[e("div",{staticClass:"margin_b10"},[e("LabelWrap",{attrs:{label:t.$t("bgManage.actualRefuel")}},[e("el-input",{attrs:{placeholder:t.$t("bgManage.inputActualRefuel"),clearable:""},on:{input:t.onActualRefueling},model:{value:t.actualRefueling,callback:function(e){t.actualRefueling=e},expression:"actualRefueling"}})],1)],1),e("div",{staticClass:"margin_b10"},[e("LabelWrap",{attrs:{label:t.$t("bgManage.curveRefuel")}},[e("el-input",{attrs:{placeholder:t.$t("bgManage.inputCurveRefuel"),clearable:""},on:{input:t.onTheoryRefueling},model:{value:t.theoryRefueling,callback:function(e){t.theoryRefueling=e},expression:"theoryRefueling"}})],1)],1),e("div",{staticClass:"margin_b10"},[e("LabelWrap",{attrs:{label:t.$t("bgManage.volumeFactorRatio")}},[e("div",{staticStyle:{height:"31px","line-height":"31px","background-color":"#F5F7FA","padding-left":"15px"}},[t._v(t._s(t.refuelingRatio))])])],1),e("div",{staticClass:"margin_b10",staticStyle:{"text-align":"center"}},[e("el-button",{staticStyle:{width:"200px"},attrs:{type:"primary"},on:{click:t.handleRatio}},[t._v(t._s(t.$t("bgManage.editRatio")))])],1)]),e("el-dialog",{attrs:{title:t.$t("reportForm.tank")+t.tank+"-"+t.$t("device.remarkInfo"),center:"",visible:t.markerDialog,width:"320px","append-to-body":"","close-on-click-modal":!1},on:{close:function(e){t.markerDialog=!1}}},[e("div",{staticClass:"margin_b10"},[e("el-input",{staticStyle:{width:"100%"},attrs:{type:"textarea",rows:6,placeholder:t.$t("device.fuelRemarkTip"),clearable:""},model:{value:t.markerStr,callback:function(e){t.markerStr=e},expression:"markerStr"}})],1),e("div",{staticClass:"margin_b10",staticStyle:{"text-align":"center","padding-top":"10px"}},[e("el-button",{staticStyle:{width:"200px"},attrs:{type:"primary"},on:{click:t.onEditMarkerStr}},[t._v(t._s(t.$t("common.confirm")))])],1)]),e("OilRecordDialog",{ref:"oilRecord",on:{onSucc:t.onEditOilRecordSucc,onDelete:t.onDeleteOilRecord},model:{value:t.oilRecordDialog,callback:function(e){t.oilRecordDialog=e},expression:"oilRecordDialog"}}),e("OilMarkingQuery",{on:{queryRefuelTicket:t.queryRefuelTicket},model:{value:t.qeuryOilMarkDialog,callback:function(e){t.qeuryOilMarkDialog=e},expression:"qeuryOilMarkDialog"}})],1)},r=[],l=i("5530"),n=(i("99af"),i("14d9"),i("4e82"),i("b0c0"),i("e9c4"),i("a9e3"),i("b680"),i("b64b"),i("d3b7"),i("159b"),i("4795"),i("1078")),s=i("201d"),o=i("8871"),c=i("4258"),d=function(){var t=this,e=t._self._c;return e("el-dialog",{attrs:{title:t.title,center:"",visible:t.value,width:"320px","append-to-body":"","close-on-click-modal":!1},on:{close:function(e){return t.$emit("input",!1)}}},[e("div",{staticStyle:{padding:"10px 0px 10px 0px"}},[e("SingleChoiceVehicle",{attrs:{placeholder:this.$t("tips.selectSingleDevice"),width:"230px"},model:{value:t.deviceid,callback:function(e){t.deviceid=e},expression:"deviceid"}})],1),e("div",{staticStyle:{"padding-bottom":"10px"}},[e("el-button",{staticStyle:{width:"300px"},attrs:{type:"primary"},on:{click:t.handleSubmit}},[t._v(t._s(t.$t("common.query")))])],1)])},h=[],u=i("26c6"),g={name:"OilRecordDialog",props:{value:{type:Boolean,default:!1}},data:function(){return{deviceid:""}},components:{SingleChoiceVehicle:u["a"]},computed:{title:function(){return this.$t("common.referenceDevice")}},mounted:function(){},methods:{handleSubmit:function(){var t=this.deviceid;t?this.$emit("queryRefuelTicket",t):this.$XModal.message({message:this.$t("tips.selectDevice"),status:"error",zIndex:9999})}}},m=g,p=i("2877"),f=Object(p["a"])(m,d,h,!1,null,null,null),v=f.exports,k=i("550c"),b=i("1c31"),x=i("e285"),S=i("c276"),w=i("5101"),y=i("2f62"),M=i("647a"),$=i("e173"),R={name:"OilMarking",data:function(){return{loading:!1,triggerOffsetV:50,oilIconDel:M,deleteIcon:$,deviceid:"",dateStr:"",tank:1,threshold1:"",threshold2:"",threshold3:"",threshold4:"",blindVolume1:"",blindVolume2:"",blindVolume3:"",blindVolume4:"",markerStr:"",markerStr1:"",markerStr2:"",markerStr3:"",markerStr4:"",travelOil:!1,noTravelOil:!1,ratioDialog:!1,markerDialog:!1,oilRecordDialog:!1,qeuryOilMarkDialog:!1,actualRefueling:"",theoryRefueling:"",height:"",volume:"",oldMarkingList:[],newMarkingList1:[],newMarkingList2:[],newMarkingList3:[],newMarkingList4:[]}},components:{OilMarkingHeader:o["a"],LabelWrap:s["a"],OilMarkingEcharts:k["a"],OilRecordDialog:c["a"],SplitPane:n["a"],OilMarkingQuery:v},computed:Object(l["a"])(Object(l["a"])({},Object(y["b"])(["isZh"])),{},{refuelingRatio:function(){var t=this.actualRefueling,e=this.theoryRefueling;return""==t||""==e?"":Number(Number(t)/Number(e).toFixed(2))},newMarkingListLength:function(){var t=this.tank;return 1==t?this.newMarkingList1.length:2==t?this.newMarkingList2.length:3==t?this.newMarkingList3.length:4==t?this.newMarkingList4.length:void 0}}),watch:{tank:function(){var t=this.oilDetectors[this.tank-1];this.oldMarkingList=t?t.markers:[]}},methods:{onActualRefueling:function(t){""!=t&&(isNaN(t)||Number(t)<1)&&(this.actualRefueling=1)},onTheoryRefueling:function(t){""!=t&&(isNaN(t)||Number(t)<1)&&(this.theoryRefueling=1)},onResizingEnd:function(){var t=this;setTimeout((function(){t.$refs.echartIns.resize()}),300)},onEditOilRecordSucc:function(t){this.$refs.echartIns.updatePrevChartsOption(this.dateStr,this.oilRecords,this.trackRecords)},onDeleteOilRecord:function(t){var e=t.oilrecordid,i=[];this.oilRecords.forEach((function(t){t.oilrecordid!=e&&i.push(t)})),this.oilRecords=i,this.$refs.echartIns.updatePrevChartsOption(this.dateStr,this.oilRecords,this.trackRecords)},handleClearData:function(t){this.deviceid=t,this.travelOil=!1,this.noTravelOil=!1,this.oilDetectors=[],this.threshold1="",this.blindVolume1="",this.newMarkingList1=[],this.markerStr1="",this.threshold2="",this.blindVolume2="",this.newMarkingList2=[],this.markerStr2="",this.threshold3="",this.blindVolume3="",this.newMarkingList3=[],this.markerStr3="",this.threshold4="",this.blindVolume4="",this.newMarkingList4=[],this.markerStr4="",this.oldMarkingList=[],this.$refs.echartIns&&this.$refs.echartIns.updatePrevChartsOption("",[],[]),this.$refs.echartIns&&this.$refs.echartIns.updateNextChartsOption("",[],[])},onClickMarkPoint:function(t){var e=this,i=t.type,a=t.oilRecord;if("prev"==i)a.dateStr=w["a"].longToLocalDateTimeStr(a.endtime),this.$refs.oilRecord.setOilRecordInfo(a),this.oilRecordDialog=!0;else{var r=null,l=null;1==a.oilstate?(r=!0,l=Number((Math.abs(a.eoil-a.soil)/100).toFixed(2))):-1==a.oilstate&&(r=!1,l=Number((Math.abs(a.eoil-a.soil)/100).toFixed(2)));var n='\n                     <div style="text-align:left;">'.concat(r?this.$t("reportForm.refuel"):this.$t("reportForm.leak"),":").concat(l,'L</div>\n                     <div style="text-align:left;">').concat(this.$t("reportForm.duration"),":").concat(Object(S["Hb"])(a.duration),'</div>\n                     <div style="text-align:left;">').concat(this.$t("reportForm.startTime"),":").concat(w["a"].longToLocalDateTimeStr(a.begintime),'</div>\n                     <div style="text-align:left;">').concat(this.$t("reportForm.endTime"),":").concat(w["a"].longToLocalDateTimeStr(a.endtime),'</div>\n                     <div style="text-align:left;">').concat(this.$t("reportForm.threshold"),":").concat(a.threshold,'L</div>\n                     <div style="text-align:left;">').concat(this.$t("reportForm.distance"),":").concat(a.distance/1e3,'km</div> \n                     <div style="text-align:left;">').concat(this.$t("reportForm.avgSpeed"),":").concat(a.avgspeed.toFixed(0),'km/h</div>\n                     <div style="text-align:left;">').concat(this.$t("missing.zerospeedcount"),":").concat(a.zerospeedcount,"</div>\n                ");this.$confirm(n,{title:r?this.$t("missing.refuelingRecord"):this.$t("missing.leakageRecord"),dangerouslyUseHTMLString:!0,distinguishCancelAndClose:!0,showConfirmButton:!0,showCancelButton:!0,cancelButtonText:this.$t("reportForm.newAdd"),cancelButtonClass:"add-oil-record-btn",center:!0,customClass:"MessageBox_confirm_oilrecord"}).then((function(t){}),(function(t){if("cancel"==t){var i={deviceid:a.deviceid,soil:a.soil,eoil:a.eoil,begintime:a.begintime,endtime:a.endtime,oilstate:a.oilstate,oilindex:a.oilindex,maunedit:a.maunedit};Object(b["a"])(i).then((function(t){var i=t.status,a=t.cause;0==i?e.$XModal.message({message:e.$t("tips.addSucc"),status:"success",zIndex:9999}):e.$XModal.message({message:e.$t("tips.addFail")+" : "+a,status:"error",zIndex:9999})}))}})).catch((function(t){}))}},editMarkerStr:function(t){this.deviceid&&(this.markerStr=t,this.markerDialog=!0)},onEditMarkerStr:function(){var t=this,e=this.tank,i=this.markerStr,a=this.oilDetectors,r={deviceid:this.deviceid,oilindex:e,name:i};Object(x["hc"])(r).then((function(r){var l=r.status;0==l?(1==e?t.markerStr1=i:2==e?t.markerStr2=i:3==e?t.markerStr3=i:4==e&&(t.markerStr4=i),a.forEach((function(t,a){a+=1,(a==e||a==e||a==e||a==e)&&(t.name=i)})),t.$XModal.message({message:t.$t("tips.saveSucc"),status:"success",zIndex:9999}),t.markerDialog=!1):1==l?t.$XModal.message({message:t.$t("tips.recordInUse"),status:"error",zIndex:9999}):t.$XModal.message({message:t.$t("tips.saveFail"),status:"error",zIndex:9999})}))},importMark:function(){var t=this.$refs.fileEl;t.value="",t.click()},downloadTemp:function(){var t=document.createElement("a");t.href=this.isZh?"./xlsxtemplates/oiladtemplate.xlsx":"./xlsxtemplates/oiladtemplate_en.xlsx",t.download="oiladtemplate.xlsx",t.click()},handleRatio:function(){var t=this;if(isNaN(this.refuelingRatio));else{var e=this.tank,i=JSON.parse(JSON.stringify(this.oldMarkingList));i.forEach((function(e){e.volume*=t.refuelingRatio})),1==e?this.newMarkingList1=i:2==e?this.newMarkingList2=i:3==e?this.newMarkingList3=i:4==e&&(this.newMarkingList4=i),this.ratioDialog=!1}},saveOilDetectors:function(){var t=this,e=this.deviceid;if(""!=e){var i=JSON.parse(JSON.stringify(this.oilDetectors));i.forEach((function(e,i){0==i?(e.threshold=t.threshold1,e.markers=t.newMarkingList1,t.newMarkingList1.length>0&&(e.appearance=4)):1==i?(e.threshold=t.threshold2,e.markers=t.newMarkingList2,t.newMarkingList2.length>0&&(e.appearance=4)):2==i?(e.threshold=t.threshold3,e.markers=t.newMarkingList3,t.newMarkingList3.length>0&&(e.appearance=4)):3==i&&(e.threshold=t.threshold4,e.markers=t.newMarkingList4,t.newMarkingList4.length>0&&(e.appearance=4))}));var a={deviceid:e,oildetectors:i,combinestatus:this.getCombinestatus()};Object(x["jc"])(a).then((function(e){var i=e.status,a=e.oildetectors;0==i?(t.oilDetectors=a,t.setTableData(),t.$XModal.message({message:t.$t("tips.saveSucc"),status:"success"})):t.$XModal.message({message:t.$t("tips.saveFail"),status:"error"})}))}else this.$XModal.message({message:this.$t("tips.selectDevice"),status:"error"})},previewOilDetectors:function(){var t=this,e=this.deviceid,i=this.dateStr;if(""!=e)if(i){var a=JSON.parse(JSON.stringify(this.oilDetectors));a.forEach((function(e,i){0==i?(e.threshold=t.threshold1,e.blindvolume=t.blindVolume1,e.markers=t.newMarkingList1,t.newMarkingList1.length>0&&(e.appearance=4)):1==i?(e.threshold=t.threshold2,e.blindvolume=t.blindVolume2,e.markers=t.newMarkingList2,t.newMarkingList2.length>0&&(e.appearance=4)):2==i?(e.threshold=t.threshold3,e.blindvolume=t.blindVolume3,e.markers=t.newMarkingList3,t.newMarkingList3.length>0&&(e.appearance=4)):3==i&&(e.threshold=t.threshold4,e.blindvolume=t.blindVolume4,e.markers=t.newMarkingList4,t.newMarkingList4.length>0&&(e.appearance=4))}));var r={deviceid:e,startday:i,endday:i,combinestatus:this.getCombinestatus(),offset:w["a"].getOffset(),oildetectors:a};this.loading=!0,Object(x["cb"])(r).then((function(a){if(a.records&&a.records[0]){var r=a.records[0].records,l=a.records[0].addorleakrecords;r&&(r.sort((function(t,e){return t.updatetime-e.updatetime})),r.forEach((function(t,e){t.index=e;var i=t.totalad,a=t.totalnotrunningad,r=t.ad0,l=t.ad1,n=t.ad2,s=t.ad3;r<0&&(r=0),l<0&&(l=0),n<0&&(n=0),s<0&&(s=0),t.totalad=i/100,t.totalnotrunningad=a/100,t.ad0=r/100,t.ad1=l/100,t.ad2=n/100,t.ad3=s/100}))),l.forEach((function(t){t.deviceid=e})),t.$refs.echartIns.updateNextChartsOption(i,l,r)}else t.$refs.echartIns.updateNextChartsOption(i,[],[]);t.loading=!1})).catch((function(e){t.loading=!1}))}else this.$XModal.message({message:this.$t("common.selectTime"),status:"error"});else this.$XModal.message({message:this.$t("tips.selectDevice"),status:"error"})},getCombinestatus:function(){var t=0;return this.travelOil&&(t|=1),this.noTravelOil&&(t|=2),t},queryDayRecords:function(t){var e=t.oilRecords,i=t.trackRecords,a=t.dateStr;this.dateStr=a,this.oilRecords=e,this.trackRecords=i,i.forEach((function(t,e){t.index=e;var i=t.totalad,a=t.totalnotrunningad,r=t.ad0,l=t.ad1,n=t.ad2,s=t.ad3;r<0&&(r=0),l<0&&(l=0),n<0&&(n=0),s<0&&(s=0),t.totalad=i/100,t.totalnotrunningad=a/100,t.ad0=r/100,t.ad1=l/100,t.ad2=n/100,t.ad3=s/100})),this.$refs.echartIns.updatePrevChartsOption(a,e,i),this.$refs.echartIns.updateNextChartsOption(a,[],[]);var r=1;if(e.length>0){var l=null;e.forEach((function(t){null==l&&t.eoil-t.soil>0&&(l=t)})),r=l?Number((l.eoil/100-l.soil/100).toFixed(2)):1}this.theoryRefueling=r},queryRefuelTicket:function(t){var e=this;this.dateStr="",Object(x["Gb"])(t).then((function(t){var i=t.oildetectors;if(i){var a=i.oildetectors,r=i.combinestatus;e.travelOil=1==(1&r),e.noTravelOil=1==(1&r),e.oilDetectors=a,e.setTableData()}e.$refs.echartIns.updatePrevChartsOption("",[],[]),e.$refs.echartIns.updateNextChartsOption("",[],[]),e.qeuryOilMarkDialog=!1}))},handleCopy:function(t){var e=-1,i=t.row,a=i.height,r=i.volume;this.height=a,this.volume=r;for(var l=this.getNewMarkingList(),n=0;n<l.length;n++){var s=l[n];s.height==a&&(s.volume=r,e=n)}if(-1==e){l.push({height:a,volume:r}),l.sort((function(t,e){return e.height-t.height}));for(n=0;n<l.length;n++){var o=l[n];o.height==a&&this.tableSelectScrollToRow(l[n])}}else this.tableSelectScrollToRow(l[e])},tableSelectScrollToRow:function(t){var e=this.tank;1==e?(this.$refs.xTab1.setCurrentRow(t),this.$refs.xTab1.scrollToRow(t,null)):2==e?(this.$refs.xTab2.setCurrentRow(t),this.$refs.xTab2.scrollToRow(t,null)):3==e?(this.$refs.xTab3.setCurrentRow(t),this.$refs.xTab3.scrollToRow(t,null)):4==e&&(this.$refs.xTab4.setCurrentRow(t),this.$refs.xTab4.scrollToRow(t,null))},handleDelete:function(t){var e=t.rowIndex,i=this.getNewMarkingList();this.$delete(i,e)},getNewMarkingList:function(){var t=this.tank,e=[];return 1==t?e=this.newMarkingList1:2==t?e=this.newMarkingList2:3==t?e=this.newMarkingList3:4==t&&(e=this.newMarkingList4),e},setTableData:function(){var t=this,e=this.tank;this.oilDetectors.forEach((function(i,a){null==i.markers&&(i.markers=[]),0==a?(t.threshold1=i.threshold,t.blindVolume1=i.blindvolume,t.newMarkingList1=JSON.parse(JSON.stringify(i.markers)),t.markerStr1=i.name):1==a?(t.threshold2=i.threshold,t.blindVolume2=i.blindvolume,t.newMarkingList2=JSON.parse(JSON.stringify(i.markers)),t.markerStr2=i.name):2==a?(t.threshold3=i.threshold,t.blindVolume3=i.blindvolume,t.newMarkingList3=JSON.parse(JSON.stringify(i.markers)),t.markerStr3=i.name):3==a&&(t.threshold4=i.threshold,t.blindVolume4=i.blindvolume,t.newMarkingList4=JSON.parse(JSON.stringify(i.markers)),t.markerStr4=i.name),e==a+1&&(t.oldMarkingList=i.markers)}))},handleAdd:function(){var t=-1,e=this.height,i=this.volume,a=this.getNewMarkingList();if(""!=e&&""!=i&&!isNaN(e)&&!isNaN(i)){for(var r=0;r<a.length;r++){var l=a[r];l.height==e&&(l.volume=i,t=r)}if(-1==t){a.push({height:e,volume:i}),a.sort((function(t,e){return e.height-t.height}));for(r=0;r<a.length;r++){var n=a[r];n.height==e&&this.tableSelectScrollToRow(a[r])}}else this.tableSelectScrollToRow(a[t]);this.height="",this.volume=""}},readWorkbookFromLocalFile:function(t,e){var i=new FileReader;i.onload=function(t){var i=t.target.result,a=new ExcelJS.Workbook;a.xlsx.load(i).then((function(){e&&e(a)}))},i.readAsBinaryString(t)},parserExcelData:function(t){try{var e=[];t.eachRow({includeEmpty:!0},(function(t,i){if(i>1){var a={};t.eachCell({includeEmpty:!0},(function(t,e){switch(e){case 1:a.height=t.text;break;case 2:a.volume=t.text;break}})),e.push(a)}})),e.sort((function(t,e){return e.height-t.height})),1==this.tank?this.newMarkingList1=e:2==this.tank?this.newMarkingList2=e:3==this.tank?this.newMarkingList3=e:4==this.tank&&(this.newMarkingList4=e)}catch(i){console.log(i),this.$XModal.message({message:this.$t("tips.useTemplateTips"),status:"error",zIndex:9999})}}},mounted:function(){var t=this;this.excelX=["A","B","C"],this.$nextTick((function(){t.oilDetectors=[];var e=t.$refs.fileEl;e.onchange=function(e){var i=e.target.files[0];t.readWorkbookFromLocalFile(i,(function(e){var i="测量标定",a=e.getWorksheet(i);void 0==a&&(i="VolumeCalibration",a=e.getWorksheet(i)),t.parserExcelData(a)}))}}))}},O=R,_=(i("3f83"),Object(p["a"])(O,a,r,!1,null,null,null)),C=_.exports;e["default"]=C}}]);