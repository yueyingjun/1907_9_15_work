window.onload=function (){

    var top_color = document.querySelectorAll(".nav1_left>span");
    var top_dis = document.querySelectorAll(".nav1_left>span>i");
    var bottom = document.querySelectorAll(".nav1_con_1");
        this.console.log(bottom[0].style);
    top_color[0].style = "color:#06c; ";
    top_dis[0].style = "display:block;";
    bottom[0].style = "display:block;";
    // alert(top_dis.length);
    for (let i = 0; i < top_color.length; i++) {
        top_color[i].onclick = function () {
            
            for (var j = 0; j < bottom.length; j++) {
                top_color[j].style = "color:color: #333;";
                top_dis[j].style = "display:none;";
                bottom[j].style = "display:none;";
            }
            top_color[i].style = "color:#06c; ";
            top_dis[i].style = "display:block;";
            bottom[i].style = "display:block;";
        
        }	
    }
    secondTab(bottom[0]);secondTab(bottom[1]);
    secondTab(bottom[2]);secondTab(bottom[3]);
    secondTab(bottom[4]);secondTab(bottom[5]);
    secondTab(bottom[6]);secondTab(bottom[7]);
    secondTab(bottom[8]);
    
    function secondTab(firstDiv){	
        var Top2 = firstDiv.querySelectorAll(".nav1_con_nav > ul > li ");
        var Top2_color = firstDiv.querySelectorAll(".nav1_con_nav > ul > li > a");
        var bottom2 = firstDiv.querySelectorAll(".nav1_con_con");
        Top2[0].style = "background-color: #3983e5;";
        Top2_color[0].style = "color: white;";
        bottom2[0].style = "display:block;";
        for (let i = 0; i < Top2.length; i++) {
            Top2[i].onclick = function () {
                for (var j = 0; j < bottom2.length; j++) {
                    Top2[j].style = "background-color: #fff;";
                    Top2_color[j].style = "color: #3983e5;;";
                    bottom2[j].style = "display:none;";
                }
                Top2[i].style = "background-color: #3983e5;";
                Top2_color[i].style = "color: white;";
                bottom2[i].style = "display:block;";
            }
        }
    }

    
    



}