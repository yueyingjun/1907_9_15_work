function animate(obj,attr,end,speed,callback) {
    var t = setInterval(function () {
        var start = parseInt(getComputedStyle(obj,null)[attr])?parseInt(getComputedStyle(obj,null)[attr]):0
        var val=start+speed
        if(start<end){
            if(val >= end){
                clearInterval(t)
                val=end
                if(callback){
                    callback()
                }
            }
        }else{
            if(val <= end){
                clearInterval(t)
                val=end
                if(callback){
                    callback()
                }
            }
        }
        obj.style[attr]=val+"px"
    },40)
}
/*
动画的时间
持续的时间  duration    d
当前的时间              t
变化值                  c
开始值                  b
val =变化值*当前的时间/持续的时间+开始值    匀速运动
 */
var movefn ={
    //直线运动
    linear: function(c,t,d,b) {
        return b+c*t/d
    },
//缓冲
    easein: function (c,t,d,b) {
        return b+c*(t/=d)*t
    },
//由快到慢
    easeout:function (c,t,d,b) {
        return b-c*(t/=d)*(t-2)
    }
}
function animate3(obj,altobj,duration,fun,callback) {
    var begin = [], end = [], change = [], val = [], t = 0
    if (arguments.length == 2) {
        var d = 1000
        var f = "linear"
        var call = null
    } else if (arguments.length == 3) {
        if (typeof arguments[2] == "number") {
            var d = arguments[2]
            var f = "linear"
            var call = null
        } else if (typeof arguments[2] == "string") {
            var d = 1000
            var f = arguments[2]
            var call = null
        } else if (typeof arguments[2] == "function") {
            var d = 1000
            var f = "linear"
            var call = arguments[2]
        }
    }else if (arguments.length == 4) {
            if (typeof arguments[3] == "string") {
                var d = 1000
                var f = arguments[3]
                var call = null
            } else if (typeof arguments[3] == "function") {
                var d = 1000
                var f = "linear"
                var call = arguments[3]
            }
        }
        for (var i in altobj) {
            begin[i] = parseInt(getComputedStyle(obj, null)[i]) ? parseInt(getComputedStyle(obj, null)[i]) : 0
            end[i] = altobj[i]
            change[i] = altobj[i] - begin[i]
        }
    var t1= setInterval(function () {
        t+=40
        for(var i in altobj){
            val[i] = movefn[f](change[i],t,d,begin[i]);
        }
        if(t>d){
            clearInterval(t1)
            for(var i in altobj){
                obj.style[i] = end[i];
            }
            if(call){
                call()
            }
        }else{

            for(var i in altobj){
                obj.style[i] = val[i]+"px"
            }
        }

    },40)

}

function animate2(obj,attr,end,duration,fun,callback) {
    var start = parseInt(getComputedStyle(obj,null)[attr])?parseInt(getComputedStyle(obj,null)[attr]):0
    var c = end-start
    var t = 0
   var t1= setInterval(function () {
        t+=40
       var val = movefn[fun](c,t,duration,start)
        if(t>=duration){
            clearInterval(t1)
            val=end
            if(callback){
                callback()
            }
        }
        obj.style[attr]=val+"px"
    },40)
}


function animate4(obj,altobj,duration,fun,callback) {
    var begin = [], end = [], change = [], val = [], t = 0
    if (arguments.length == 2) {
        var d = 1000
        var f = "linear"
        var call = null
    } else if (arguments.length == 3) {
        if (typeof arguments[2] == "number") {
            var d = arguments[2]
            var f = "linear"
            var call = null
        } else if (typeof arguments[2] == "string") {
            var d = 1000
            var f = arguments[2]
            var call = null
        } else if (typeof arguments[2] == "function") {
            var d = 1000
            var f = "linear"
            var call = arguments[2]
        }
    }else if (arguments.length == 4) {
        if (typeof arguments[3] == "string") {
            var d = 1000
            var f = arguments[3]
            var call = null
        } else if (typeof arguments[3] == "function") {
            var d = 1000
            var f = "linear"
            var call = arguments[3]
        }
    }
    for (var i in altobj) {
        begin[i] = parseInt(getComputedStyle(obj, null)[i]) ? parseInt(getComputedStyle(obj, null)[i]) : 0
        end[i] = altobj[i]
        change[i] = altobj[i] - begin[i]
    }
    function mvoe() {
        t+=40
        for(var i in altobj){
            val[i] = movefn[f](change[i],t,d,begin[i]);
        }
        if(t>=d){
            cancelAnimationFrame(t1)
            for(var i in altobj){
                obj.style[i] = end[i];
            }
            if(call){
                call()
            }
        }else{

            for(var i in altobj){
                obj.style[i] = val[i]+"px"
            }
            t1= requestAnimationFrame(move)
        }

}
   move()

}



function animate5(obj, attrobj, duration, fun, callback) {
    var begin = [], end = [], change = [], val = [], t = 0
    if (arguments.length == 2) {
        var d = 1000
        var f = "linear"
        var call = null

    } else if (arguments.length == 3) {
        if (typeof arguments[2] == "number") {
            var d = arguments[2]
            var f = "linear"
            var call = null
        } else if (typeof arguments[2] == "string") {
            var d = 1000
            var f = arguments[2]
            var call = null
        } else if (typeof arguments[2] == "function") {
            var d = 1000
            var f = "linear"
            var call = arguments[2]
        }
    } else if (arguments.length == 4) {
        if (typeof  arguments[3] == "string") {
            var d = duration
            var f = arguments[3]
            var call = null
        } else if (typeof  arguments[3] == "function") {
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
        t += 40
        for (var i in attrobj) {
            val[i] = movefn[f](change[i], t, d, begin[i]);
        }
        if (t >= d) {
            cancelAnimationFrame(t1)
            for (var i in attrobj) {
                if(i=="opacity"){
                    obj.style[i] = attrobj[i]
                }else {
                    obj.style[i] = attrobj[i] + "px";
                }
            }
            if (call) {
                call()
            }
        }else {
            for (var i in attrobj) {
                if(i=="opacity"){
                    obj.style[i] = val[i]
                }else {
                    obj.style[i] = val[i] + "px"
                }
            }
            t1 = requestAnimationFrame(move)
        }
    }

    move()


}








