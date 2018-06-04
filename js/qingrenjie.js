$(function(){
// 选择态开始
    $(function(){
       $(".box>label").click(function(){
           $(this).addClass("on").siblings().removeClass("on");
           if($(this).hasClass("last")){
               $(this.children("input").focus())
           }
       })
    });


// 弹窗开始1
   $(".hd").click(function () {
       $(".di").removeClass("d-none")
   });
// 弹窗结束1
// 弹窗关闭开始1
   $("#but").click(function () {
      $(".di").addClass("d-none")
   });
// 弹窗关闭结束1

// 立即支付开始
    $("#butb").click(function () {
      var aa=/^[1][3,4,5,6,7,8][0-9]{9}$/;
      var i=$(".hm").val();

      if(aa.test(i)){
          $(".dd").removeClass("d-none");
          $("").addClass("d-none");
      }else {
          $("").removeClass("d-none");
      }

    });
// 立即支付结束

// 关闭第2弹窗
    $(".ann").click(function () {
        $(".dd").addClass("d-none");
        $(".quxiao").val("")
    });
// 确认第2弹窗
    $(".queren").click(function () {
        var ab=$(".queren").val();
        var abc=$(".quxiao").val();
        var aa=/^[1][3,4,5,6,7,8][0-9]{9}$/;
        if(aa.ab(abc)){
            if(ab===abc){
                $("").removeClass("d-none")
                $(".dd").addClass("d-none")
            }else {
                window.location.href="czcg.html"
            }

        }else {
            $("").removeClass("d-none")
        }
    });


// 弹窗开始3
$(".ddd").click(function () {
    $(".quxiaoo").addClass("d-none")
    $(".querenn").removeClass("d-none")
});
$(".tongzhiii").click(function () {
    window.location.href="wacz.html"
})
// 弹窗结束3









});
