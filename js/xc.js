function tabs(selector1,selector2) {
    var s1=document.querySelectorAll(selector1)
    var s2=document.querySelectorAll(selector2)
    for(let i=0;i<s1.length;i++){
        s1[i].onclick=function () {
            for(var j=0;j<s2.length;j++){
                s2[j].style.display="none"
                s1[j].style.color ="#1b79ff"
                s1[j].style.backgroundColor="white"
            }
            s2[i].style.display="block"
            s1[i].style.color="white"
            s1[i].style.backgroundColor="#1b79ff"
        }
    }
}
function tab(selector1,selector2) {
    var s1=document.querySelectorAll(selector1)
    var s2=document.querySelectorAll(selector2)
    for(let i=0;i<s1.length;i++){
        s1[i].onclick=function () {
            for(var j=0;j<s2.length;j++){
                s2[j].style.display="none"
                s1[j].style.color ="black"
            }
            s2[i].style.display="block"
            s1[i].style.color="#1b79ff"
        }
    }
}