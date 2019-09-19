function animate(obj,attr,end,speed,callback) {
    var t=setInterval(function (){
        var start=parseInt(getComputedStyle(obj,null)[attr])?parseInt(getComputedStyle(obj,null)[attr]):0
        var val=start+speed
        if (start<end) {
            if (val >= end) {
                val=end
                clearInterval(t)
                if (callback) {
                    callback()
                }
            }
        }else{
            if (val <= end) {
                val=end
                clearInterval(t)
                if (callback) {
                    callback()
                }
            }
        }
        obj.style[attr]=val+"px"
    },40)
}
function animate1(obj,attrobj,duration,fun,callback){
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
//b+c*(t/=d)*t
//easeout b-c*(t/=d)*(t-2)   100    200    1000    100
var movef={
    linear:function(b,c,d,t) {
        return b+c*t/d
    },
    easein:function (b,c,d,t) {
        return b+c*(t/=d)*t
    },
    easeout:function (b,c,d,t) {
        return b-c*(t/=d)*(t-2)
    }
}
function animate2(obj,attrobj,duration,fun,callback){
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
    var t1
    function move() {
        t+=40
        for (var i in attrobj) {
            val[i]= movef[f](start[i], change[i], d, t)
        }
        if (t>=d){
            cancelAnimationFrame(t1)
            for (var i in attrobj) {
                if (i=="opacity"){
                    obj.style[i] = val[i]
                } else{
                    // obj.style[i] = val[i] + "px"
                    val=end
                }
            }
            if (call){
                call()
            }
        }else {
            for (var i in attrobj) {
                if (i=="opacity" ) {
                    obj.style[i] = val[i]
                }else{
                    obj.style[i] = val[i] + "px"
                }
            }
            t1=requestAnimationFrame(move)
        }
    }
    move()
}