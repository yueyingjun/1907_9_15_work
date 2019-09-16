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
    var link2=document.querySelectorAll(".content-one .title li")
    var list2=document.querySelectorAll(".content-one .small-content")
    function f() {
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

}