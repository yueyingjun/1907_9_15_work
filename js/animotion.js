function anim(obj,attr,end,speed,callback) {
    var star
    var h
    var t = setInterval(function () {
        star= parseInt(getComputedStyle(obj,null)[attr])
        h=star+speed
        if(star<end){
            if(h>=end){
            clearInterval(t)
            val=end
            if(callback){
                callback()
            }
            }
        }else {
            if(h<end){
                clearInterval(t)
                h=end
                if(callback){
                    callback()
                }
            }
        }
        obj.style[attr] = h+"px"
    },40)
}
function anim2(obj,arrt,end,duration,fun,callback) {
    var start = parseInt(getComputedStyle(obj)[arrt])
    var t=0
    var c=end-start
    var t1 = setInterval(function () {
        t+=40
        var h=movefn[fun](c,t,duration,start)
        if(t>duration){
            c=end
            clearInterval(t1)
            if(callback){
                callback()
            }
        }
        obj.style[arrt]=h+"px"

    },40)
}
var movefn={
    linear:function(c,t,d,b){
        return  b+c*t/d
    },
    easein:function (c,t,d,b) {
        return b+c*(t/=d)*t
    },
    easeout:function (c,t,d,b) {
        return b-c*(t/=d)*(t-2)
    }
}
var movef= {
    linear: function (b, c, d, t) {
        return b + c * t / d
    },
    easein: function (b, c, d, t) {
        return b + c * (t /= d) * t
    },
    easeout: function (b, c, d, t) {
        return b - c * (t /= d) * (t - 2)
    }
}
function anim3(obj,attrobj,duration,fun,callback){
    var change=[],end=[],start=[],val=[]
    if(arguments.length==2){
        var d=1000
        var f="linear"
        var call=null
    }else if(arguments.length==3){
        if (typeof arguments[2]=="number"){
            var d=arguments[2]
            var f="linear"
            var call=null
        }
        if (typeof arguments[2]=="string"){
            var d=1000
            var f=arguments[2]
            var call=null
        }
        if (typeof arguments[2]=="function"){
            var d=1000
            var f="linear"
            var call=arguments[2]
        }
    }else if(arguments.length==4){
        if (typeof arguments[3]=="string"){
            var d=arguments[2]
            var f=arguments[3]
            var call=null
        }
        if (typeof arguments[3]=="function"){
            var d=arguments[2]
            var f="linear"
            var call=arguments[3]
        }
    }else{
        var d=arguments[2]
        var f=arguments[3]
        var call=arguments[4]
    }
    for(var i in attrobj){
        start[i]=parseInt(getComputedStyle(obj,null)[i])?parseInt(getComputedStyle(obj,null)[i]):0
    }
    for (var i in attrobj){
        change[i]=attrobj[i]-start[i]
    }
    var t=0
    var t1=setInterval(function () {
        t+=40
        for (var i in attrobj) {
            val[i]= movef[f](start[i], change[i], d, t)
        }
        if (t>=d){
            clearInterval(t1)
            for (var i in attrobj) {
                val = end
            }
            if (call){
                call()
            }
        }
        for (var i in attrobj) {
            obj.style[i] = val[i] + "px"
        }
    },40)

}
