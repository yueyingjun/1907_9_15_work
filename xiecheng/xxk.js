function C4xuanxiangka(selector1,selector2) {
    var links=document.querySelectorAll(selector1)
    var list=document.querySelectorAll(selector2)
    for(let i=0;i<links.length;i++){
        links[i].onclick=function () {

            for(let j=0;j<list.length;j++){
                list[j].style.display="none"
                links[j].style.color=""
                links[j].style.background=""
            }
            list[i].style.display="block"
            links[i].style.background="#fff"
            this.style.color="#3983e5";
        }
    }
}
function dhl(selector1,selector2) {
    var links = document.querySelectorAll(selector1)
    var list = document.querySelectorAll(selector2)
    for (let i = 0; i < links.length; i++) {
        links[i].onmouseover = function () {
            list[i].style.display = "block"
            links[i].style.background = ""
        }

        links[i].onmouseout = function () {
            list[i].style.display = "none"
            links[i].style.background = ""

    }

    }
}
function xuanxiangka(selector1,selector2) {
    var links=document.querySelectorAll(selector1)
    var list=document.querySelectorAll(selector2)
    for(let i=0;i<links.length;i++){
        links[i].onclick=function () {

            for(let j=0;j<list.length;j++){
                list[j].style.display="none"
                links[j].style.color=""
                links[j].style.background=""
            }
            list[i].style.display="block"
            links[i].style.background=""
            this.style.color="#3983e5";
        }
    }
}