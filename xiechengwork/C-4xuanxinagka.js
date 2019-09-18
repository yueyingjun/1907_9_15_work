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

function daohang(selector1,selector2) {
    var links=document.querySelectorAll(selector1)
    var list=document.querySelectorAll(selector2)
    for(let i=0;i<links.length;i++){
        links[i].onmouseover=function () {
            list[i].style.display="block"
            links[i].style.background="#fff"
        }
        links[i].onmouseout = function () {
            links[i].style.color=""
            links[i].style.background=""
            list[i].style.display = "none"
        }
    }
}
function daohang11(selector1,selector2) {
    var links=document.querySelectorAll(selector1)
    var list=document.querySelectorAll(selector2)
    for(let i=0;i<links.length;i++){
        links[i].onmouseover=function () {
            list[i].style.display="block"

        }
        links[i].onmouseout = function () {
            links[i].style.background=""
            list[i].style.display = "none"
        }
    }
}

function daohang1(selector1,selector2) {
    var links=document.querySelectorAll(selector1)
    var list=document.querySelectorAll(selector2)
    for(let i=0;i<links.length;i++){
        links[i].onmouseover=function () {
            list[i].style.display="block"
            links[i].style.background="#3983e5"

        }
        links[i].onmouseout = function () {
            links[i].style.background=""
            list[i].style.display = "none"
        }
    }
}
