function animate(obj, attr, end, speed,callback) {
    var t = setInterval(function () {
        var start = parseInt(getComputedStyle(obj,null)[attr])?parseInt(getComputedStyle(obj,null)[attr]):0
        var val = start+speed;
        if(start<end){
            if(val>=end){
                clearInterval(t)
                val = end;
                if(callback){
                    callback()
                }
            }
        }else{
            if(val<=end){
                clearInterval(t)
                val = end;
                if(callback){
                    callback()
                }
            }
        }
        obj.style[attr]=val+"px"
    },40)
}



var movefn = {
    linear: function (c,t,d,b) {
        return b + c * t / d
    },
    easein: function (c, t, d, b) {
        return b + c * (t /= d) * t
    },
    easeout: function (c, t, d, b) {
        return b - c * (t /= d) * (t -2)
    }
}


function animate2(obj, attrobj,duration,fun,callback) {
    var begin = [] , end = [] , change = [] , val = [] , t=0
    if(arguments.length==2){
        var d = 1000;
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
        } else if(typeof arguments[2]=="function"){
            var d = 1000
            var f = "linear"
            var call = arguments[2]
        }
    }else if(arguments.length==4){
        if(typeof arguments[3]=="string"){
            var d = duration
            var f = arguments[3]
            var call = null
        }else if(typeof arguments[3]=="function"){
            var d = duration
            var f = "linear"
            var call = arguments[3]
        }
    }else if(arguments.length==5){
        var d = duration[2]
        var f = arguments[3]
        var call = arguments[4]
    }
    for(var i in attrobj){
        begin[i] = parseInt(getComputedStyle(obj,null)[i])?parseInt(getComputedStyle(obj,null)[i]):0
        end[i] = attrobj[i]
        change[i] = attrobj[i] - begin[i]
    }

    var tt = setInterval(function () {
        t +=40;
        for (var i in attrobj){
            val[i] = movefn[f](change[i],t,d,begin[i])
        }
        if (t>d){
            clearInterval(tt)
            for (var i in attrobj){
                val[i] = end[i]
            }
            if (call){
                call()
            }
        }else{
            for (var i in attrobj){
                obj.style[i] = val[i] + "px"
                //console.log( obj.style.i)
            }
        }

    },40)
}
