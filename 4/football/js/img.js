window.onload = function() {
    function creatimg(){//建立大图图层
       var img = document.getElementById("bigimg");//通过查看html元素class属性来查找文档内是否存在大图图层
       var pic = $(this).children().attr("src"); //获取该图片路径
       console.log(2);
       //如果这个元素不存在，则
       if (!img) {
           img = document.createElement("div");//创造这个div
           img.id = "bigimg";//给予div样式ID
           img.innerHTML = '<img src="'+pic+'" />';
           console.log(pic);
           document.body.appendChild(img);
       }
    }
    $(".pic").on("click",creatimg);
        
    
};