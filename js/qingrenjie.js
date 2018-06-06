$(function(){
// 选择态开始
    $(function(){
       $(".box>label").click(function(){
           $(this).addClass("on").siblings().removeClass("on");
           if($(this).hasClass("last")){
               $(this).children("input").focus();
           }
       })
    });


// 弹窗开始1
   $(".hd").click(function () {
       $(".di").removeClass("d-none")
   });
// 弹窗结束1

// // 弹窗关闭开始1
//    $("#but").click(function () {
//       $(".di").addClass("d-none")
//    });
// // 弹窗关闭结束1

// 立即支付开始
    $("#butb").click(function () {
      var aa=/^[1][3,4,5,6,7,8][0-9]{9}$/;
      var i=$(".hm").val();

      if(aa.test(i)){
          $(".dd").removeClass("d-none");
          $(".hm-1").addClass("d-none");
      }else {
          $(".hh-1").removeClass("d-none");
      }

    });
// 立即支付结束


// 确认第2弹窗
    $(".queren").click(function () {
        var ab=$(".hh").val();
        var abc=$(".hm").val();
        var aa=/^[1][3,4,5,6,7,8][0-9]{9}$/;
        if(aa.test(ab)){
            if(ab===abc){
                $(".ddd").removeClass("d-none")
                $(".dd").addClass("d-none")
            }else {
                window.location.href="czcg.html"
            }

        }else {
            $(".hh-2").removeClass("d-none");
        }
    });


// 关闭第2弹窗
    $(".quxiao").click(function () {
        $(".dd").addClass("d-none");
    });

// 弹窗开始3
$("quxiaoo").click(function () {
    $(".dd").addClass("d-none")
    $(".ddd").removeClass("d-none")
});
$(".querenn").click(function () {
    window.location.href="czcg.html"
});
// 弹窗结束3









});
