(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fd367e28"],{"115a":function(t,e,s){"use strict";s.r(e);var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"PageBox"},[s("div",{staticClass:"ScrollBox"},[s("div",{staticClass:"Robot"},[s("img",{staticClass:"main_img img-hover",staticStyle:{"background-color":"rgb(143, 163, 167)",width:"100%"},attrs:{src:"https://cdn.jsdelivr.net/gh/Devetome/dist@master/static/img/ai.jpeg"}}),s("h2",{staticStyle:{"font-size":"19px",color:"#FF8C00","font-weight":"800"}},[t._v("รายละเอียด")]),s("p",{staticStyle:{"font-size":"14px",color:"#FF0000","font-weight":"600"}},[t._v("1. ต่ำกว่า VIP4 ค่าบริการหุ่นยนต์ 99/ปี")]),s("p",{staticStyle:{"font-size":"14px",color:"#FF0000","font-weight":"600"}},[t._v("2. หุ่นยนต์จะช่วยให้คุณทำงานประจำวันได้สำเร็จ")]),s("p",{staticStyle:{"font-size":"14px",color:"#FF0000","font-weight":"600"}},[t._v("3. คุณต้องคลิกวันละครั้งเพื่อทำงานทั้งหมดของวันให้เสร็จ")]),0==t.UserInfo.is_housekeeper?s("van-button",{staticClass:"mt15",staticStyle:{"font-size":"16px"},attrs:{type:"danger",block:""},on:{click:t.onSubmit}},[t._v("เปิดAI")]):t._e(),1==t.UserInfo.is_housekeeper?s("van-button",{staticClass:"mt15",staticStyle:{"font-size":"16px"},attrs:{type:"danger",block:""},on:{click:t.oftaks}},[t._v("AI")]):t._e()],1)])])},a=[],i={name:"Robot",components:{},props:[],data(){return{}},computed:{},watch:{},created(){this.$parent.navBarTitle="หุ่นยนต์"},mounted(){},activated(){},destroyed(){},methods:{onSubmit(){this.$dialog.confirm({message:"คุณแน่ใจว่าจะเปิดใช้งานหุ่นยนต์?",confirmButtonColor:"red"}).then(()=>{this.$Model.SetUserInfo({is_housekeeper:1})}).catch(()=>{})},oftaks(){this.$Model.mastaks()}}},n=i,c=(s("365d"),s("2877")),r=Object(c["a"])(n,o,a,!1,null,"51f4b2f5",null);e["default"]=r.exports},"365d":function(t,e,s){"use strict";var o=s("36ca"),a=s.n(o);a.a},"36ca":function(t,e,s){}}]);