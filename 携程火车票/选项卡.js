function tabs(selector1,selector2) {
    var links=document.querySelectorAll(selector1)
    var list=document.querySelectorAll(selector2)
    for(let i=0;i<links.length;i++){
        links[i].onclick=function () {
            for(let j=0;j<list.length;j++){
                list[j].style.display="none"
                links[j].style.color=""
            }
            list[i].style.display="block"
            this.style.color="#2577e3";
        }
    }
}
function tabs1(selector1,selector2) {
    var links=document.querySelectorAll(selector1)
    var list=document.querySelectorAll(selector2)
    for(let i=0;i<links.length;i++){
        links[i].onclick=function () {
            for(let j=0;j<list.length;j++){
                list[j].style.display="none"
                links[j].style.color="#fff"
                links[j].style.background="#2577e3"
            }
            list[i].style.display="block"
            this.style.color="#000";
            this.style.background="#fff";
        }
    }
}