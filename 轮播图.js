
   var movefn={
        linear:function(c,t,d,b){return b+c*t/d},
        easein:function(c,t,d,b){return b+c*(t/d)*t},
        easeout:function(c,t,d,b){return b-c*(t/d)*(t-2)}
    }
    function animate(obj,attrobj,duration,fun,callback) {
        var begin = [], end = [], change = [], val = [], t = 0;




        if (arguments.length == 2) {
            var d = 1000;
            var f = "linear";
            var call = null;
        } else if (arguments.length == 3) {
            if (typeof arguments[2] == "number") {
                var d = arguments[2];
                var f = "linear";
                var call = null;
            } else if (typeof arguments[2] == "string") {
                var d = 1000;
                var f = arguments[2];
                var call = null;
            } else if (typeof arguments[2] == "function") {
                var d = 1000;
                var f = "linear";
                var call = arguments[2];
            }

        } else if (arguments.length == 4) {
            if (typeof arguments[3] == "string") {
                var d = duration
                var f = arguments[3]
                var call = null;
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
            t+=40
            for(var i in attrobj){
               val[i] = movefn[f](change[i],t,d,begin[i])
            }if(t>=d){
                cancelAnimationFrame(t1)
                for(var i in attrobj){
                    if(i=="opacity"){
                   obj.style[i]=attrobj[i]
                }else{
                     obj.style[i] = attrobj[i]+"px"
                }

            }
            if (call){
                call()
            }

        } else {
                for(var i in attrobj){
                      if(i=="opacity"){
                   obj.style[i]=val[i]
                }else{
                    obj.style[i]=val[i]+"px"
                }
                    }
                t1=requestAnimationFrame(move)
                }
            }

        move()
  }