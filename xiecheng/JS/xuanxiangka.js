window.onload=function () {

    // 导航
    var link1 = document.querySelector(".header .title-first .title-left-2 a");
    var list1 = document.querySelector(".title-left-2 .lag");
    var link2 = document.querySelector(".myxc");
    var list2 = document.querySelector(".my-xc-list");
    var link3 = document.querySelector(".mydd");
    var list3 = document.querySelector(".my-dd-list");
    link1.onmouseover = function () {
        link1.style.background = "white";
        list1.style.display = "block";
    }
    link1.onmouseout = function () {
        link1.style.background = "#F4F4F4";
        list1.style.display = "none";
    }
    link2.onmouseover = function () {
        link2.style.background = "white";
        link3.style.background = "#F4F4F4";
        list2.style.display = "block";
        // list3.style.display="none";
    }
    link2.onmouseout = function () {
        link2.style.background = "#F4F4F4";
        list2.style.display = "none";
    }
    link3.onmouseover = function () {
        link3.style.background = "white";
        link2.style.background = "#F4F4F4";
        list3.style.display = "block";
    }
    link3.onmouseout = function () {
        link3.style.background = "#F4F4F4";
        list3.style.display = "none";
    }
    var link4 = document.querySelector(".title-right-3 li:first-child");
    var list4 = document.querySelector(".ph-img");
    var link5 = document.querySelector(".title-right-3 li:last-child");
    var list5 = document.querySelector(".wx-img");
    link4.onmouseover = function () {
        link4.style.background = "white";
        list4.style.display = "block";
    }
    link4.onmouseout = function () {
        link4.style.background = "#F4F4F4";
        list4.style.display = "none";
    }
    link5.onmouseover = function () {
        link5.style.background = "white";
        list5.style.display = "block";
    }
    link5.onmouseout = function () {
        link5.style.background = "#F4F4F4";
        list5.style.display = "none";
    }

    // 导航2

    function tabs1(selector1, selector2) {
        var links = document.querySelectorAll(selector1)
        var list = document.querySelectorAll(selector2)
        for (let i = 0; i < links.length; i++) {
            links[i].onmouseover = function () {
                for (let j = 0; j < list.length; j++) {
                    list[j].style.display = "none";
                }
                list[i].style.display = "block";
            }
        }

        for (let i = 0; i < links.length; i++) {
            links[i].onmouseout = function () {
                for (let j = 0; j < list.length; j++) {
                    list[j].style.display = "none";
                }
                list[i].style.display = "none";
            }
        }
    }

    tabs1(".shouye-list", ".xxk-1-list");

    // 大图
    function tabs2(selector1, selector2) {
        var links = document.querySelectorAll(selector1);
        var list = document.querySelectorAll(selector2);
        for (let i = 0; i < links.length; i++) {
            links[i].onclick = function () {
                for (var j = 0; j < list.length; j++) {
                    list[j].style.display = "none";
                    links[j].style.background = "#1883ba";
                    links[j].style.color = "#ffffff";

                }
                list[i].style.display = "block";
                links[i].style.background = "#ffffff";
                this.style.color = "#3983e5";
            }
        }
    }

    function tabs22(selector1, selector2) {
        var links = document.querySelectorAll(selector1);
        var list = document.querySelectorAll(selector2);
        for (let i = 0; i < links.length; i++) {
            links[i].onclick = function () {
                for (let j = 0; j < list.length; j++) {
                    list[j].style.display = "none";
                    links[j].style.color = "#666666";

                }
                list[i].style.display = "block";
                this.style.color = "#3983e5";

            }
        }
    }

    tabs2(".main-img .list-left>ul li", ".main-img .list-right");
    for (var i = 1; i <= 7; i++) {
        tabs22(".list-right:nth-child(" + i + ") .right-top li", ".list-right:nth-child(" + i + ") .right-bottom")
    }

    // 旅游
    function tabs3(selector1, selector2) {
        var links = document.querySelectorAll(selector1)
        var list = document.querySelectorAll(selector2)
        for (let i = 0; i < links.length; i++) {
            links[i].onclick = function () {
                for (let j = 0; j < list.length; j++) {
                    list[j].style.display = "none";
                    links[j].style.color = "#333333"

                }
                list[i].style.display = "block"
                links[i].style.color = "#3983e5";
            }
        }
    }

    function tabs33(selector1, selector2) {
        var links = document.querySelectorAll(selector1)
        var list = document.querySelectorAll(selector2)
        for (let i = 0; i < links.length; i++) {
            links[i].onclick = function () {
                for (let j = 0; j < list.length; j++) {
                    list[j].style.display = "none";
                    links[j].style.background = "#ffffff"
                    links[j].style.color = "#1883ba"


                }
                list[i].style.display = "block"
                links[i].style.background = "#1883ba"
                links[i].style.color = "#ffffff"

            }
        }
    }

    tabs3(".travel-1>ul li", ".travel-2");
    for (var i = 1; i <= 8; i++) {
        tabs33(".travel-2:nth-child(" + i + ")>ul li", ".travel-2:nth-child(" + i + ") .travel-img")
    }

//轮播图


    //代码

    var box = document.querySelector(".box");
    var view = document.querySelector(".main-img");
    var btns = document.querySelectorAll(".bnts .btn");
    var clientW = document.documentElement.clientWidth;
    var num = 0

    function move() {
        num++
        if (num > 7) {
            animate(box, {
                left: -num * clientW
            },function () {
                box.style.left=0;
            })
            num = 0
        }else {

            animate(box, {
                left: -num * clientW
            })
        }
        for (var i = 0; i < btns.length; i++) {
            btns[i].style.background = "rgba(0,0,0,0.3)"
        }
        btns[num].style.background = "#fff"
    }

    var t = setInterval(move, 2000)
    view.onmouseover = function () {
        clearInterval(t)
    }

    view.onmouseout = function () {
        t = setInterval(move, 2000)
    }

    for (let i = 0; i < btns.length; i++) {
        btns[i].onclick =function () {
            num=i
            animate(box, {
                left: -num * clientW
            })

            for (var j = 0; j < btns.length; j++) {
                btns[j].style.background = "rgba(0,0,0,0.3)"
            }
            btns[num].style.background = "#ffffff"
        }
    }


}
// 函数
var movefn = {
    linear: function (c, t, d, b) {
        return b + c * t / d
    },
    easein: function (c, t, d, b) {
        return b + c * (t /= d) * t
    },
    easeout: function (c, t, d, b) {
        return b - c * (t /= d) * (t - 2)
    }
}

function animate(obj, attrobj, duration, fun, callback) {
    var begin = [], end = [], change = [], val = [], t = 0
    if (arguments.length == 2) {
        var d = 1000
        var f = "linear"
        var call = null

    } else if (arguments.length == 3) {
        if (typeof arguments[2] == "number") {
            var d = arguments[2]
            var f = "linear"
            var call = null
        } else if (typeof arguments[2] == "string") {
            var d = 1000
            var f = arguments[2]
            var call = null
        } else if (typeof arguments[2] == "function") {
            var d = 1000
            var f = "linear"
            var call = arguments[2]
        }
    } else if (arguments.length == 4) {
        if (typeof arguments[3] == "string") {
            var d = duration
            var f = arguments[3]
            var call = null
        } else if (typeof arguments[3] == "function") {
            var d = duration
            var f = "linear"
            var call = arguments[3]
        }
    }

    for (var i in attrobj) {
        begin[i] = parseInt(getComputedStyle(obj, null)[i]) ? parseInt(getComputedStyle(obj, null)[i]) : 0
        change[i] = attrobj[i] - begin[i]
    }

    function move() {
        t += 40
        for (var i in attrobj) {
            val[i] = movefn[f](change[i], t, d, begin[i]);
        }
        if (t >= d) {
            cancelAnimationFrame(t1)
            for (var i in attrobj) {
                if (i == "opacity") {
                    obj.style[i] = attrobj[i]
                } else {
                    obj.style[i] = attrobj[i] + "px";
                }
            }
            if (call) {
                call()
            }
        } else {
            for (var i in attrobj) {
                if (i == "opacity") {
                    obj.style[i] = val[i]
                } else {
                    obj.style[i] = val[i] + "px"
                }
            }
            t1 = requestAnimationFrame(move)
        }
    }

    move()
}