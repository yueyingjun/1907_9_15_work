window.onload=function () {
    let myxiec=document.querySelector(".head-right .myxc .myxiec")
    let my=document.querySelector(".myxc")
    my.onmouseover=function () {
        my.style.backgroundColor="white";
        myxiec.style.display="block"
    }
    my.onmouseout=function () {
        my.style.backgroundColor="#f4f4f4";
        myxiec.style.display="none"
    }
    var link=document.querySelectorAll(".search-left>ul>li")
    var list=document.querySelectorAll(".search-right")
    for (let i=0;i<link.length;i++){
        link[i].onclick=function () {
            for (var j=0;j<list.length;j++){
                link[j].style.backgroundColor="#2691fd"
                link[j].style.color="white"
                link[j].style.borderLeft="0px solid orange"
                list[j].style.display="none"
            }
            this.style.color="#1c88f6"
            this.style.backgroundColor="white"
            link[i].style.borderLeft="3px solid orange"
            list[i].style.display="block"
        }
    }
    var link1=document.querySelectorAll(".search-one .search-right-top>li")
    var list1=document.querySelectorAll(".search-right .right-one")
    function abc(selector1,selector2) {
        for (let i=0;i<selector1.length;i++){
            selector1[i].onclick=function () {
                for (var j=0;j<selector2.length;j++){
                    selector1[j].style.color="black"
                    selector2[j].style.display="none"
                }
                this.style.color="#1c88f6"
                selector2[i].style.display="block"
            }
        }
    }
    abc(link1,list1)
    var link3=document.querySelectorAll(".contento .content-title>span")
    var list3=document.querySelectorAll(".content-ones .content-one")
    abc(link3,list3)
    function f(select1,select2) {
        var link2=document.querySelectorAll(select1)
        var list2=document.querySelectorAll(select2)
        for (let i=0;i<link2.length;i++){
            link2[i].onclick=function () {
                for (var j=0;j<list2.length;j++){
                    link2[j].style.color="#1c88f6"
                    link2[j].style.backgroundColor="white"
                    list2[j].style.display="none"
                }
                this.style.color="white"
                this.style.backgroundColor="#1c88f6"
                list2[i].style.display="block"
            }
        }
    }
    f(".content-one .title li",".content-one .small-content")
    for (var i=0;i<=9;i++){
        f(".content-one:nth-child("+i+") .title li",".content-one:nth-child("+i+")  .small-content")
    }
    // for (var i=2;i<=8;i++){
    //     f(".content-one:nth-child("+i+") .cright .title li",".content-one:nth-child("+i+") .cright .small-content")
    // }
    var lis=document.querySelectorAll(".nav .nav-content .lis")
    var liss=document.querySelectorAll(".nav .nav-content>.liss")
    for (let i=0;i<lis.length;i++) {
        lis[i].onmouseover = function () {
            liss[i].style.display = "block"
        }
        lis[i].onmouseout= function () {
            liss[i].style.display = "none"
        }
    }
    var box1=document.querySelector(".box1")
    var lists=document.querySelectorAll(".box1 a")
    var view=document.querySelector(".view")
    var btn=document.querySelectorAll(".btns .btn")
    var clientW=document.documentElement.clientWidth
    var num=0
    function move() {
        num++
        if(num>8){
            animate2(box1,{left:-num*clientW},function (){
                box1.style.left=0+"px"
                console.log(box1.offsetLeft)
            })
        }
        // if (num>3){
        //     num=0
        // }
        // for (var i=0;i<lists.length;i++){
        //     lists[i].style.opacity=0
        // }
        // lists[num].style.opacity=1
        animate2(box1, {left: -num * clientW})
        for (var j = 0; j < btn.length; j++) {
            btn[j].style.backgroundColor = ""
        }
        if (num>8){
            num=0
        }
        btn[num].style.backgroundColor = "#000"
    }
    var t1=setInterval(move,2000)
    view.onmouseover=function () {
        clearInterval(t1)
    }
    view.onmouseout=function () {
        t1=setInterval(move,2000)
    }
    for (let i=0;i<btn.length;i++){
        btn[i].onclick=function () {
            num=i
            // for (var j=0;j<lists.length;j++){
            //     lists[j].style.opacity=0
            // }
            // lists[num].style.opacity=1
            // for (var j=0;j<btn.length;j++){
            //     btn[j].style.backgroundColor=""
            // }
            // btn[num].style.backgroundColor="#000"
            animate2(box1,{left:-num*clientW})
            for (var j=0;j<btn.length;j++){
                btn[j].style.backgroundColor=""
            }
            btn[i].style.backgroundColor="#000"
        }
    }
}