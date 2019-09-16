window.onload=function () {
    var link1 = document.querySelector(".header .title-first .title-left-2 a");
    var list1 = document.querySelector(".title-left-2 .lag");
    var link2=document.querySelector(".myxc");
    var list2=document.querySelector(".my-xc-list");
    var link3=document.querySelector(".mydd");
    var list3=document.querySelector(".my-dd-list");
    link1.onmouseover = function () {
        link1.style.background = "white";
        list1.style.display = "block";
    }
    link1.onmouseout =function () {
        link1.style.background="#F4F4F4";
        list1.style.display="none";
    }
    link2.onmouseover = function () {
        link2.style.background = "white";
        link3.style.background = "#F4F4F4";
        list2.style.display = "block";
        // list3.style.display="none";
    }
    link2.onmouseout =function () {
        link2.style.background="#F4F4F4";
        list2.style.display="none";
    }
    link3.onmouseover = function () {
        link3.style.background = "white";
        link2.style.background="#F4F4F4";
        list3.style.display = "block";
    }
    link3.onmouseout =function () {
        link3.style.background="#F4F4F4";
        list3.style.display="none";
    }
    var link4=document.querySelector(".title-right-3 li:first-child");
    var list4=document.querySelector(".ph-img");
    var link5=document.querySelector(".title-right-3 li:last-child");
    var list5=document.querySelector(".wx-img");
    link4.onmouseover = function () {
        link4.style.background = "white";
        list4.style.display = "block";
    }
    link4.onmouseout =function () {
        link4.style.background="#F4F4F4";
        list4.style.display="none";
    }
    link5.onmouseover = function () {
        link5.style.background = "white";
        list5.style.display = "block";
    }
    link5.onmouseout =function () {
        link5.style.background="#F4F4F4";
        list5.style.display="none";
    }
    function tabs1(selector1,selector2) {
        var links=document.querySelectorAll(selector1)
        var list=document.querySelectorAll(selector2)
        for(let i=0;i<links.length;i++){
            links[i].onmouseover=function () {
                for(let j=0;j<list.length;j++){
                    list[j].style.display="none";
                }
                list[i].style.display="block";
            }
        }

        for(let i=0;i<links.length;i++){
            links[i].onmouseout=function () {
                for(let j=0;j<list.length;j++){
                    list[j].style.display="none";
                }
                list[i].style.display="none";
            }
        }
    }
    tabs1(".shouye-list",".xxk-1-list");
    function tabs2(selector1,selector2) {
        var links=document.querySelectorAll(selector1)
        var list=document.querySelectorAll(selector2)
        for(let i=0;i<links.length;i++){
            links[i].onclick=function () {
                for(let j=0;j<list.length;j++){
                    list[j].style.display="none";
                    links[j].style.background="#1883ba";
                    links[j].style.color="#ffffff";

                }
                list[i].style.display="block"
                links[i].style.background="#ffffff";
                this.style.color="#3983e5";

            }
        }
    }
    tabs2(".main-img .list-left>ul li",".main-img .list-right");
    for(var i=1;i<=6;i++){
        tabs2(".right-list:nth-child("+i+") .right-top li",".right-list:nth-child("+i+") .right-bottom")
    }

    function tabs3(selector1,selector2) {
        var links=document.querySelectorAll(selector1)
        var list=document.querySelectorAll(selector2)
        for(let i=0;i<links.length;i++){
            links[i].onclick=function () {
                for(let j=0;j<list.length;j++){
                    list[j].style.display="none";

                }
                list[i].style.display="block"
            }
        }
    }
    tabs3(".travel-1>ul li",".travel-2");
    for(var i=1;i<=10;i++){
        tabs3(".travel-2:nth-child("+i+") .travel-list li",".travel-2:nth-child("+i+") .travel-img")
    }

}
