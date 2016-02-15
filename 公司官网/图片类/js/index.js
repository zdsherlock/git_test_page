$(document).ready(function(){
    $(".products-list-item").hover(function(){
        $(this).find(".hover").css("display", "block");},function(){
        $(this).find(".hover").css("display", "none");   
   });
   function index(){
       window.location.href = "index.html"
   }//首页链接
   function products(){
       window.location.href = "products-index.html"
   }//产品中心链接
   function products_f(){
       window.location.href = "products-index-fruits.html"
   }
   function aboutus(){
       window.location.href = "aboutus.html"
   }//关于我们链接
   function news(){
       window.location.href = "news.html"
   }//新闻链接
   function contactus(){
       window.location.href = "contactus.html"
   }//联系我们链接
   $("#products-list-button").on("click",function(){
       console.log("2")
       products();
   });
   $("#about-us-button").on("click",function(){
       aboutus();
   });
   $("#news-button").on("click",function(){
       if ($(".list2").css("display") == "none"){
          $(".list2").css("display","block");
          console.log("1")
       } else {
          console.log("2")
           $(".list2").css("display","none")
       }
   });
   $(".products-list > div:first-child").on("click",function(){
       products_f();
   });
   $(".products-list > div:last-child").on("click",function(){
       products();
   });
});

