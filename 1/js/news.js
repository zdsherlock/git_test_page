$(document).ready(function(){
    $("#news-button").on("click",function(){
       if ($(".list2").css("display") == "none"){
          $(".list2").css("display","block");
       } else {
           $(".list2").css("display","none")
       }
   });
})