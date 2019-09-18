var movefn = {
    linear: function(change,time,duration,begin){
        return begin+change*time/duration
    },
    easein :function(change,time,duration,begin){
        return begin+change*(time/=duration)*time
    },
    easeout: function(change,time,duration,begin){
        return begin - change*(time/duration)*(time-2)
    } 
}

function animate4(obj,attrobj,duration,fun,callback){
    var begin = [],change=[],end=[],val=[]
    var time = 0;
    if(arguments.length==2){
        var d = 1000
        var f = "linear"
        var call = null
    }else if(arguments.length==3){
        if(typeof arguments[2]=="number"){
            var d = arguments[2]
            var f = "linear"
            var call = null
        }else if(typeof arguments[2]=="string"){
            var d = 1000
            var f = arguments[2]
            var call = null
        }else if(typeof arguments[2]=="function"){
            var d = 1000
            var f = "linear"
            var call = arguments[2]
        }
    }else if(arguments.length == 4){
        if(typeof arguments[3]=="string"){
            var d = duration
            var f = arguments[3]
            var call = null
        }else if(typeof arguments[3]=="function"){
            var d = duration
            var f = "linear"
            var call = arguments[3]
        }
    }else if(arguments.length == 5){
        var d = duration
        var f = fun
        var call = callback
    }

    for(var i in attrobj){
        begin[i]=parseInt(getComputedStyle(obj,null)[i])?parseInt(getComputedStyle(obj,null)[i]):0; 
        change[i]=attrobj[i]-begin[i]
    }
    function move(){
        time+=40
        for(var i in attrobj){
            val[i] = movefn[f](change[i],time,d,begin[i]);
        }
        if(time>=d){
            cancelAnimationFrame(t)
            for(var i in attrobj){
                if(i=="opacity"){
                    obj.style[i] = attrobj[i]
                }else{
                    obj.style[i] = attrobj[i] + "px"
                }
            }
            if(call){
                call();
            }
        }else{
            for(var i in attrobj){
                if(i=="opacity"){
                    obj.style[i] = attrobj[i]
                }else{
                    obj.style[i] = attrobj[i] + "px"
                }obj.style[i] = val[i]+"px"
            }
            t = requestAnimationFrame(move)
        }
        
    }

   move()
}

