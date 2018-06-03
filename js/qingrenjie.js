$(function(){

    $(function(){
       $(".box>label").click(function(){
           $(this).addClass("on").siblings().removeClass("on");
           if($(this).hasClass("last")){
               $(this.children("input").focus())
           }
       })

    })

$(".hd").click(function () {
    alert("活动规则")
})















});
