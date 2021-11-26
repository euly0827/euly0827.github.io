var time = 0;

function show() {
    $(".cover").hide();
    $.getJSON("./rdata.json", function (data) {
        var isex = rd(getJsonLength(data, "sex"));
        var ijob = rd(getJsonLength(data, "job"));
        console.log(data.beforejob[1].name + data.beforejob[1].num);
        //性别
        document.getElementById("sex").innerHTML = data.sex[isex];
        //年龄
        document.getElementById("age").innerHTML = Math.floor(Math.random() * 30 + 15);
        //发型与着装，男女区分
        if (isex == 0) {
            document.getElementById("hair").innerHTML = data.haircolor[rd(getJsonLength(data, "haircolor"))] + "的" + data.manhair[rd(getJsonLength(data, "manhair"))];
            document.getElementById("dress").innerHTML = data.mandress[rd(getJsonLength(data, "mandress"))];
        } else if (isex == 1) {
            document.getElementById("hair").innerHTML = data.haircolor[rd(getJsonLength(data, "haircolor"))] + "的" + data.womanhair[rd(getJsonLength(data, "womanhair"))];
            document.getElementById("dress").innerHTML = data.womandress[rd(getJsonLength(data, "womandress"))];
        }
        //职业
        document.getElementById("job").innerHTML = data.job[ijob] + "  (序号" + (ijob + 1) + ")";
        //重要之人
        document.getElementById("someone").innerHTML = data.someone[rd(getJsonLength(data, "someone"))];
        //重要之地
        document.getElementById("somewhere").innerHTML = data.somewhere[rd(getJsonLength(data, "somewhere"))];
        //重要之物
        document.getElementById("something").innerHTML = data.something[rd(getJsonLength(data, "something"))];
        //特质
        document.getElementById("characteristic").innerHTML = data.characteristic[rd(getJsonLength(data, "characteristic"))];
        //难言之隐
        if (Math.random() > 0.4) {
            document.getElementById("secret").innerHTML = data.secret[rd(getJsonLength(data, "secret"))];
        } else {
            document.getElementById("secret").innerHTML = "无";
        }
        //伤疤
        if (Math.random() > 0.8) {
            document.getElementById("scar").innerHTML = data.scar[rd(getJsonLength(data, "scar"))];
        } else {
            document.getElementById("scar").innerHTML = "无";
        }
        //随身物品
        var Ar = rd3(getJsonLength(data,"belongings"));
        document.getElementById("belongings").innerHTML = data.belongings[Ar[0]] + "、" + data.belongings[Ar[1]] + "、" + data.belongings[Ar[2]];
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

function before(){
    time = 0;
    document.getElementById("btnbefore").style.backgroundColor = "rgb(229, 111, 127)";
    document.getElementById("btnnow").style.backgroundColor = "rgb(239,199,191)";
}

function now(){
    time = 1;
    document.getElementById("btnnow").style.backgroundColor = "rgb(229, 111, 127)";
    document.getElementById("btnbefore").style.backgroundColor = "rgb(239,199,191)";
}