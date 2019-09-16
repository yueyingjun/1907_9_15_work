
window.onload=function () {

    var op1=document.querySelectorAll(".navc a")
    var list1 =document.querySelectorAll(".nbcbox div")
    for (let i=0;i<op1.length;i++){
        op1[i].onmouseover=function () {
           for (let j=0;j<list1.length;j++){
               list1[j].style.display="none";
           }
            list1[i].style.display="block";
        }

    }
    for (let i=0;i<op1.length;i++){
        op1[i].onmouseout=function () {
            for (let j=0;j<list1.length;j++){
                list1[j].style.display="none";
            }
            list1[0].style.display="block";
        }

    }
    var op2=document.querySelectorAll(".picop div")
    var list2=document.querySelectorAll(".picr .picrop")

    for (let i=0;i<op2.length;i++){
        op2[i].onclick=function () {
            for (let j=0;j<list2.length;j++){
                op2[j].style.background="#2577e3"
                op2[j].style. color="#ffffff"
                list2[j].style.display="none";
            }
            this.style.background="#ffffff"
            this.style. color="#2577e3"
            list2[i].style.display="block";
        }

    }

    var op3=document.querySelectorAll(".prt a")
    var list3=document.querySelectorAll(".prb")
    op3[0].style.color="#2577e3"
    list3[0].style.display="block";
    for (let i=0;i<op3.length;i++){
        op3[i].onclick=function () {
            for (let j=0;j<list3.length;j++){
                op3[j].style.color="black"
                list3[j].style.display="none";
            }
            op3[i].style.color="#2577e3"
            list3[i].style.display="block";
        }
    }
    var op4=document.querySelectorAll(".nav1 a")
    var list4=document.querySelectorAll(".nav1pic")
    for (let i=0;i<op4.length;i++){
        op4[i].onclick=function () {
            for (let j=0;j<list4.length;j++){
                op4[j].style.color="black"
                list4[j].style.display="none";
            }
            op4[i].style.color="#2577e3"
            list4[i].style.display="block";
        }
    }

}
