(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6b0ff1c9"],{"3ad6":function(t,i,e){"use strict";e.r(i);var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return t.articleId?e("div",{staticClass:"Site PageBox"},[e("van-nav-bar",{attrs:{fixed:"",border:!1,title:t.showInfo.title,"left-arrow":""},on:{"click-left":function(i){return t.$router.go(-1)}}}),e("div",{staticClass:"ScrollBox"},[e("div",{staticClass:"Content",domProps:{innerHTML:t._s(t.showInfo.content)}})])],1):e("div",{staticClass:"Site PageBox"},[e("van-nav-bar",{attrs:{fixed:"",border:!1,title:t.$t("home.menu[1]"),"left-arrow":""},on:{"click-left":function(i){return t.$router.go(-1)}}}),e("div",{staticClass:"ScrollBox"},[t._l(t.InitData.videovTutorial,(function(t){return e("van-cell",{key:t.id,attrs:{size:"large",title:t.title,"is-link":"",to:"/article/video/"+t.id}})})),t.InitData.videovTutorial.length?t._e():e("van-empty",{attrs:{description:t.$t("help[1]")}})],2)],1)},n=[],o={name:"Info",components:{},props:["articleType","articleId"],data(){return{showInfo:{title:""}}},computed:{},watch:{$route(){"video"==this.articleType&&(this.showInfo=this.InitData.videovTutorial.find(t=>t.id==this.articleId)),"help"==this.articleType&&(this.showInfo=this.InitData.helpList.find(t=>t.id==this.articleId)),"notice"==this.articleType&&(this.showInfo=this.InitData.noticelist.find(t=>t.id==this.articleId))}},created(){"video"==this.articleType&&(this.showInfo=this.InitData.videovTutorial.find(t=>t.id==this.articleId)),"help"==this.articleType&&(this.showInfo=this.InitData.helpList.find(t=>t.id==this.articleId)),"notice"==this.articleType&&(this.showInfo=this.InitData.noticelist.find(t=>t.id==this.articleId))},mounted(){},activated(){},destroyed(){},methods:{}},s=o,r=(e("9af9"),e("2877")),l=Object(r["a"])(s,a,n,!1,null,"3e6e70ee",null);i["default"]=l.exports},"59a8":function(t,i,e){},"9af9":function(t,i,e){"use strict";var a=e("59a8"),n=e.n(a);n.a}}]);