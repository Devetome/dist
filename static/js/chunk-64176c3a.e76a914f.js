(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-64176c3a"],{"4ca0":function(a,t,e){"use strict";e.r(t);var n=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"PageBox"},[e("div",{staticClass:"ScrollBox"},[1!=a.userInfo.is_realname?e("div",{staticStyle:{overflow:"hidden","margin-top":"15px"}},[e("van-divider",{attrs:{hairline:!1}},[a._v(a._s(a.$t("bankCard.tips[0]")))]),e("div",{staticStyle:{padding:"15px"}},[e("van-button",{staticStyle:{"font-size":"16px"},attrs:{block:"",type:"danger"},on:{click:function(t){return a.$router.push("/user/set/realname")}}},[a._v(a._s(a.$t("bankCard.default[1]")))])],1)],1):e("div",[a.showAdd?e("van-divider",{staticStyle:{"text-align":"center"},attrs:{hairline:!1}},[a._v(a._s(a.$t("bankCard.tips[1]")))]):a._e(),a.showAdd?e("van-form",{on:{submit:a.onSubmit}},[e("van-field",{attrs:{readonly:"",value:a.userInfo.realname,label:a.$t("bankCard.label[0]")}}),e("van-field",{attrs:{label:a.$t("bankCard.label[2]"),placeholder:a.$t("bankCard.placeholder[1]")},model:{value:a.postData.card_no,callback:function(t){a.$set(a.postData,"card_no","string"===typeof t?t.trim():t)},expression:"postData.card_no"}}),e("van-field",{attrs:{label:a.$t("bankCard.label[3]"),placeholder:a.$t("bankCard.placeholder[5]")},model:{value:a.postData.Bank_Code,callback:function(t){a.$set(a.postData,"Bank_Code","string"===typeof t?t.trim():t)},expression:"postData.Bank_Code"}}),e("van-field",{attrs:{label:a.$t("bankCard.label[4]"),placeholder:a.$t("bankCard.placeholder[6]")},model:{value:a.postData.Bank_branch_code,callback:function(t){a.$set(a.postData,"Bank_branch_code","string"===typeof t?t.trim():t)},expression:"postData.Bank_branch_code"}}),e("van-field",{attrs:{label:a.$t("bankCard.label[5]"),placeholder:a.$t("bankCard.placeholder[7]")},model:{value:a.postData.CPF_CNPJ,callback:function(t){a.$set(a.postData,"CPF_CNPJ","string"===typeof t?t.trim():t)},expression:"postData.CPF_CNPJ"}}),e("van-field",{attrs:{readonly:"",value:a.postData.bank_name,label:a.$t("bankCard.label[1]"),placeholder:"--"+a.$t("bankCard.placeholder[0]")+"--"},on:{click:function(t){a.showPicker=!0}}}),e("div",{staticStyle:{padding:"15px"}},[e("van-button",{staticStyle:{"font-size":"16px"},attrs:{block:"",type:"danger",loading:a.isSubmit,"loading-text":a.$t("bankCard.default[2]")}},[a._v(a._s(a.$t("bankCard.default[3]")))])],1)],1):e("div",[e("div",{staticStyle:{padding:"10px 10px 0"}},[e("van-button",{staticStyle:{"font-size":"16px"},attrs:{block:"",type:"info"},on:{click:function(t){a.showAdd=!0}}},[a._v(a._s(a.$t("bankCard.default[4]")))])],1),a._l(a.cardList,(function(a){return e("van-cell",{key:a.id,staticClass:"list",attrs:{border:!1,title:a.bank_name+" "+a.bank_branch_name,label:a.card_no.replace(/^(.{4}).*(.{4})$/,"$1 **** **** $2"),icon:"card"}})}))],2)],1)]),e("van-popup",{attrs:{position:"bottom"},model:{value:a.showPicker,callback:function(t){a.showPicker=t},expression:"showPicker"}},[e("van-picker",{attrs:{"show-toolbar":"",columns:a.bankList,"confirm-button-text":a.$t("bankCard.placeholder[3]"),"cancel-button-text":a.$t("bankCard.placeholder[4]")},on:{confirm:a.onConfirm,cancel:function(t){a.showPicker=!1}}})],1)],1)},s=[],i={name:"BankCard",components:{},props:[],data(){return{postData:{name:"",bank_id:"",bank_name:"",card_no:""},showPicker:!1,bankList:"",showAdd:!1,isSubmit:!1}},computed:{userInfo(){return this.$store.state.UserInfo},cardList(){return this.$store.state.BankCardList}},watch:{},created(){this.$parent.navBarTitle=this.$t("bankCard.default[0]"),this.cardList.length?this.showAdd=!1:this.showAdd=!0,this.postData.name=this.userInfo.realname,this.bankList=this.InitData.BanksList.flatMap(a=>a.bank),this.$Model.GetBankCardList()},mounted(){},activated(){},destroyed(){},methods:{onConfirm(a,t){this.postData.bank_name=a,null!=this.InitData.BanksList&&this.InitData.BanksList.length>0&&(this.postData.bank_id=this.InitData.BanksList[t].bank_id),this.showPicker=!1},onSubmit(){this.postData.bank_name?this.postData.card_no?(this.postData.name=this.userInfo.realname,this.isSubmit=!0,this.$Model.AddBankCard(this.postData,a=>{this.isSubmit=!1,1==a.code&&(this.showAdd=!1)})):this.$Dialog.Toast(this.$t("bankCard.placeholder[1]")):this.$Dialog.Toast(this.$t("bankCard.placeholder[0]"))}}},o=i,r=(e("6da8"),e("2877")),l=Object(r["a"])(o,n,s,!1,null,"50721c1e",null);t["default"]=l.exports},"6da8":function(a,t,e){"use strict";var n=e("ebcc"),s=e.n(n);s.a},ebcc:function(a,t,e){}}]);