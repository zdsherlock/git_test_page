$(function(){
    var explainImg = ["./img/01.png","./img/02.png"];
    var medicineBox = $(".medicine-box");
    
    $(".hand-img").click(function(){
        $("#closed-box").css("display","none");
        $("#open-box").css("display","block");
    });
    
    for (var i = 0;i < medicineBox.length;i++){
        medicineBox[i].index = i;
        medicineBox.click(function(){
            $(".explain-img").attr("src",explainImg[this.index]);
            $("#main").fadeOut(1000);
            $("#explain").delay(500).fadeIn(1000);
        })
    }
    $(".explain-btn").click(function(){
        $("#explain").fadeOut(1000);
        $("#main").delay(500).fadeIn(1000);
    });
    
})
