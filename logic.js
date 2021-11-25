
function show(){
    $(".cover").hide();
    $.getJSON("./rdata.json", function (data){
        var $jsontip = $("#jsonTip");
        var strHtml = "";
        //存储数据的变量
        $jsontip.empty();
        //清空内容
        console.log(data);
        
        $.each(data, function (infoIndex, info){
            console.log(infoIndex+ info);
            var i = 0;
            var one = info;
            console.log(one);
            $.each(one, function (infoIndex, info){
                console.log(infoIndex+ info);
                strHtml += one[i].name;
                i++;
            }) 
            document.getElementById("sex").innerHTML=strHtml; // 改变内容
            document.getElementById("result").style.display="block";
        }) 
      })
    // var strsex = "性别：" + "男";
   
}


$.getJSON("./rdata.json", function (data){
    var $jsontip = $("#jsonTip");
    var strHtml = "";
    //存储数据的变量
    $jsontip.empty();
    //清空内容
    console.log(data);
    
    $.each(data, function (infoIndex, info){
        console.log(infoIndex+ info);
        var i = 0;
        var one = info;
        console.log(one);
        $.each(one, function (infoIndex, info){
            console.log(infoIndex+ info);
            strHtml += "姓名：" + one[i].name + "<br>";
            strHtml += "性别：" + one[i].sex + "<br>";
            strHtml += "邮箱：" + one[i].email + "<br>";
            strHtml += "<hr>" ;
            i++;
        }) 
     
    }) 
    $jsontip.html(strHtml);
    //显示处理后的数据 
  })