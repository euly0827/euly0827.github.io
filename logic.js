
function show(){
    $(".cover").hide();
    var isex = rd(2); 
    $.getJSON("./rdata.json", function (data){
        var strHtml = "";
        // console.log(data);
        console.log(getJsonLength(data,"scar"));
        console.log(isex);
        console.log(data.sex[isex]);
        

      })
      document.getElementById("result").style.display="block";
}

function rd(length){
    return parseInt(Math.random()*length,10);
}

function getHsonLength(json){
    var jsonLength=0;
    for (var i in json) {
        jsonLength++;
    }
    return jsonLength;
}

function getJsonLength(jsonData,name){
    　　var jsonLength = 0;
    　　for(var item in jsonData){
    　　　　if(item == name){
    　　　　　　for(var x in jsonData[item]){
    　　　　　　　　jsonLength++;
    　　　　　　}
    　　　　}
    　　}
            return jsonLength;
    }

// $.getJSON("./rdata.json", function (data){
//     var $jsontip = $("#jsonTip");
//     var strHtml = "";
//     //存储数据的变量
//     $jsontip.empty();
//     //清空内容
//     console.log(data);
    
//     $.each(data, function (infoIndex, info){
//         console.log(infoIndex+ info);
//         var i = 0;
//         var one = info;
//         console.log(one);
//         $.each(one, function (infoIndex, info){
//             console.log(infoIndex+ info);
//             strHtml += "姓名：" + one[i].name + "<br>";
//             strHtml += "性别：" + one[i].sex + "<br>";
//             strHtml += "邮箱：" + one[i].email + "<br>";
//             strHtml += "<hr>" ;
//             i++;
//         }) 
     
//     }) 
//     $jsontip.html(strHtml);
//     //显示处理后的数据 
//   })