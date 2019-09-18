function f(obj, alter, end, speed, callback) {
    var t= setInterval(function () {
        var start = parseInt(getComputedStyle(obj,null)[alter])?parseInt(getComputedStyle(obj,null)[alter]):0
        var val = start+speed;
        if(start<end){
            if(val>=end) {
                clearInterval(t)
                val = end;
                if (callback) {
                    callback()
                }
            }
            }else{
                if(val<=end) {
                    clearInterval(t)
                    val = end;
                    if (callback) {
                        callback()
                    }
                }
        }
        obj.style[alter]=val+"px"
    },40)
}

var movefn ={
    linear:function (c, t, d, b) {
        return b + c * t / d
    },
    easein: function (c,t,d,b) {
        return b + c*(t/=d)*t
    },
    easeout: function (c, t, d, b) {
        return b-c*(t/=d)*(t-2)
    }
}








function f1(obj, altobj,duration,fun, callback) {
    var begin=[],end=[],change=[],val=[],t=0
    if(arguments.length==2){
        var d = 1000;
        var f= "linear"
        var call=null

    }else if(arguments.length==3){
        if (typeof arguments[2] == "number") {
            var d = arguments[2];
            var f = "linear"
            var call = null
        }else if ( typeof arguments[2] == "string") {
            var d = 1000;
            var f = arguments[2]
            var call =null
        }else if (typeof arguments[2] == "function") {
            var d = 1000;
            var f = "linear"
            var call =arguments[2]
        }
    }else if (arguments.length == 4) {
        if (typeof arguments[3] == "number") {
            var d = arguments[3]
            var f = "linear"
            var call = null
        }else if (typeof arguments[3] == "string") {
            var d = 1000;
            var f =arguments[3]
            var call = null
        }else if (typeof arguments[3] == "function") {
            var d = 1000;
            var f = "linear"
            var call = arguments[3]
        }
    }

    for (var i in altobj) {
        begin[i] = parseInt(getComputedStyle(obj,null)[i])?parseInt(getComputedStyle(obj,null)[i]):0
        end[i]=altobj[i]
        change[i]=altobj[i]-begin[i]
       // console.log(begin[i],end[i],change[i])
    }
    var fu = setInterval(function () {
            t+=40
        for (var i in altobj) {
            val[i] = movefn[f](change[i],t,d,begin[i]);
        }

        if(t>d){
            clearInterval(fu)
            for (var i in altobj) {
                val[i]=end[i]
            }
            if(call){
                call()
            }
        }else{
            for (var i in altobj) {
                obj.style[i]=val[i]+"px"
            }
        }


    },40)

}



function f2(obj, altobj,duration,fun, callback) {
    var begin=[],end=[],change=[],val=[],t=0
    if(arguments.length==2){
        var d = 1000;
        var f= "linear"
        var call=null

    }else if(arguments.length==3){
        if (typeof arguments[2] == "number") {
            var d = arguments[2];
            var f = "linear"
            var call = null
        }else if ( typeof arguments[2] == "string") {
            var d = 1000;
            var f = arguments[2]
            var call =null
        }else if (typeof arguments[2] == "function") {
            var d = 1000;
            var f = "linear"
            var call =arguments[2]
        }
    }else if (arguments.length == 4) {
        if (typeof arguments[3] == "number") {
            var d = arguments[3]
            var f = "linear"
            var call = null
        }else if (typeof arguments[3] == "string") {
            var d = 1000;
            var f =arguments[3]
            var call = null
        }else if (typeof arguments[3] == "function") {
            var d = 1000;
            var f = "linear"
            var call = arguments[3]
        }
    }

    for (var i in altobj) {
        begin[i] = parseInt(getComputedStyle(obj,null)[i])?parseInt(getComputedStyle(obj,null)[i]):0
        end[i]=altobj[i]
        change[i]=altobj[i]-begin[i]
        // console.log(begin[i],end[i],change[i])
    }
    var fu = requestAnimationFrame(function () {
        t+=40
        for (var i in altobj) {
            val[i] = movefn[f](change[i],t,d,begin[i]);
        }

        if(t>d){
            cancelAnimationFrame(fu)
            for (var i in altobj) {
                obj.style[i]=end[i]
            }
            if(call){
                call()
            }
        }else{
            fu=requestAnimationFrame(t1)

        for (var i in altobj) {
            obj.style[i]=val[i]+"px"
        }
    }
    },40)

}










