var time = 0;
var call = 0;

var iage,isex;

function show() {
    $(".cover").hide();
    $.getJSON("./rdata.json", function (data) {
        isex = rd(getJsonLength(data, "sex"));
        iage = Math.floor(Math.random() * 30 + 0);

        
        //性别
        document.getElementById("sex").innerHTML = data.sex[isex];
        //年龄
        document.getElementById("age").innerHTML = iage;
        //性格
        document.getElementById("character").innerHTML = data.character[rd(getJsonLength(data, "character"))];
        //发型与着装，男女区分
        if (isex == 0) {
            document.getElementById("hair").innerHTML = data.haircolor[rd(getJsonLength(data, "haircolor"))] + data.manhair[rd(getJsonLength(data, "manhair"))];
            //document.getElementById("dress").innerHTML = data.mandress[rd(getJsonLength(data, "mandress"))];
        } else if (isex == 1) {
            document.getElementById("hair").innerHTML = data.haircolor[rd(getJsonLength(data, "haircolor"))] + data.womanhair[rd(getJsonLength(data, "womanhair"))];
            //document.getElementById("dress").innerHTML = data.womandress[rd(getJsonLength(data, "womandress"))];
        }
        //1920s
        if (time == 0) {
            //年代显示
            document.getElementById("time").innerHTML = "1920s";
            //重要之人
            document.getElementById("someone").innerHTML = data.someone[rd(getJsonLength(data, "someone"))];
            //重要之地
            document.getElementById("somewhere").innerHTML = data.beforesomewhere[rd(getJsonLength(data, "beforesomewhere"))];
            //重要之物
            document.getElementById("something").innerHTML = data.beforesomething[rd(getJsonLength(data, "beforesomething"))];
            //特质
            document.getElementById("characteristic").innerHTML = data.characteristic[rd(getJsonLength(data, "characteristic"))];
            //难言之隐
            if (Math.random() > 0.4) {
                document.getElementById("secret").innerHTML = data.beforesecret[rd(getJsonLength(data, "beforesecret"))];
            } else {
                document.getElementById("secret").innerHTML = "无";
            }
            //伤疤
            if (Math.random() > 0.8) {
                document.getElementById("scar").innerHTML = data.beforescar[rd(getJsonLength(data, "beforescar"))];
            } else {
                document.getElementById("scar").innerHTML = "无";
            }
            //随身物品
            var Ar = rd3(getJsonLength(data, "beforebelongings"));
            document.getElementById("belongings").innerHTML = data.beforebelongings[Ar[0]] + "、" + data.beforebelongings[Ar[1]] + "、" + data.beforebelongings[Ar[2]];

        } else if (time == 1) {//现代
            //年代显示
            document.getElementById("time").innerHTML = "现代";
            //重要之人
            document.getElementById("someone").innerHTML = data.someone[rd(getJsonLength(data, "someone"))];
            //重要之地
            document.getElementById("somewhere").innerHTML = data.nowsomewhere[rd(getJsonLength(data, "nowsomewhere"))];
            //重要之物
            document.getElementById("something").innerHTML = data.nowsomething[rd(getJsonLength(data, "nowsomething"))];
            //特质
            document.getElementById("characteristic").innerHTML = data.characteristic[rd(getJsonLength(data, "characteristic"))];
            //难言之隐
            if (Math.random() > 0.4) {
                document.getElementById("secret").innerHTML = data.nowsecret[rd(getJsonLength(data, "nowsecret"))];
            } else {
                document.getElementById("secret").innerHTML = "无";
            }
            //伤疤
            if (Math.random() > 0.8) {
                document.getElementById("scar").innerHTML = data.nowscar[rd(getJsonLength(data, "nowscar"))];
            } else {
                document.getElementById("scar").innerHTML = "无";
            }
            //随身物品
            var Ar = rd3(getJsonLength(data, "nowbelongings"));
            document.getElementById("belongings").innerHTML = data.nowbelongings[Ar[0]] + "、" + data.nowbelongings[Ar[1]] + "、" + data.nowbelongings[Ar[2]];
            
        }
        //职业
        foundjob(data);
    })
    document.getElementById("result").style.display = "block";
    //   console.log(rd(getJsonLength(data,"sex")));
    //     console.log(data.sex[rd(getJsonLength(data,"sex"))]);
}

function rd(length) {
    return parseInt(Math.random() * length, 10);
}

function getHsonLength(json) {
    var jsonLength = 0;
    for (var i in json) {
        jsonLength++;
    }
    return jsonLength;
}

function getJsonLength(jsonData, name) {
    var jsonLength = 0;
    for (var item in jsonData) {
        if (item == name) {
            for (var x in jsonData[item]) {
                jsonLength++;
            }
        }
    }
    return jsonLength;
}

function rd3(length) {
    var Arr = [];
    // 声明一个变量并赋值
    var add = 0;
    while (add < 3) {
        var num = parseInt(Math.random() * length, 10);
        if (Arr.indexOf(num) == -1) {
            Arr.push(num);
            add++;
        }
        Arr.sort(function (a, b) {
            return b - a;
        })
    }

    return Arr;
}

function before() {
    time = 0;
    document.getElementById("btnbefore1").style.backgroundColor = "rgb(229, 111, 127)";
    document.getElementById("btnbefore2").style.backgroundColor = "rgb(229, 111, 127)";
    document.getElementById("btnnow1").style.backgroundColor = "rgb(239,199,191)";
    document.getElementById("btnnow2").style.backgroundColor = "rgb(239,199,191)";
}

function now() {
    time = 1;
    document.getElementById("btnnow1").style.backgroundColor = "rgb(229, 111, 127)";
    document.getElementById("btnnow2").style.backgroundColor = "rgb(229, 111, 127)";
    document.getElementById("btnbefore1").style.backgroundColor = "rgb(239,199,191)";
    document.getElementById("btnbefore2").style.backgroundColor = "rgb(239,199,191)";
}

function callme() {
    call++;
    console.log(1);
    switch (call) {
        case 1:
            alert("作者摸鱼中，联系是不可能联系得上的Ψ(￣∀￣)Ψ");
            break;
        case 2:
            alert("其实吧，想找作者也不是不行...");
            break;
        case 3:
            alert("但是你得先保证你找到了不会催更ヽ(#`Д´)ﾉ！");
            break;
        default:
            alert("ヽ(￣▽￣)ﾉ那好叭，你可以加一下这个群：540184048");
    }
}

function foundjob(data) {
    if (iage <= 18) {
        if (Math.random() < 0.7) {
            document.getElementById("job").innerHTML = "学生/实习生 (序号106)";
            console.log("1");
        } else {
            var arr = [1, 15, 22, 31, 38, 42, 45, 52, 61, 62, 73, 94, 106, 111, 117, 118, 119, 120, 152, 215, 216, 227];
            var key = arr[rd(arr.length)];
            for (var i in arr) {
                if(time==0){
                    for (var item in data.beforejob) {
                        if (data.beforejob[item].num == key) {
                            var jValue = data.beforejob[item].name;
                            console.log(jValue);
                            document.getElementById("job").innerHTML = jValue + " (序号" + key + ")";
                        }
                    }
                }else{
                    for (var item in data.nowjob) {
                        if (data.beforejob[item].num == key) {
                            var jValue = data.nowjob[item].name;
                            console.log(jValue);
                            document.getElementById("job").innerHTML = jValue + " (序号" + key + ")";
                        }
                    }
                }
                
            }

        }
    }else{
        if(time==0){
            document.getElementById("job").innerHTML = data.beforejob[rd(getJsonLength(data, "beforejob"))].name + "  (序号" + data.beforejob[rd(getJsonLength(data, "beforejob"))].num + ")";
        }else{
            document.getElementById("job").innerHTML = data.nowjob[rd(getJsonLength(data, "nowjob"))].name + "  (序号" + data.nowjob[rd(getJsonLength(data,"nowjob"))].num + ")";
        }
    }

}