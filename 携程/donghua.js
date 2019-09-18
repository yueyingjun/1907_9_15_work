var movefun = {
    // 匀速运动（直线运动）
    linear:function (c,t,d,b) {
        return b + c * t / d
    },
    // 又快到慢的运动
    easein:function (c,t,d,b) {
        return b + c * (t /= d) *t
    },
    // 由慢到快的运动
    easeout:function (c,t,d,b) {
        return b - c * (t /=d) / (t-2)
    }
}


// 动画函数  。 。。  。 。。  。
/*function move(obj,atter,end,speed,callback){
    var t  =setInterval(function () {
        var start = parseInt(getComputedStyle(obj,null)[atter])?parseInt(getComputedStyle(obj,null)[atter]):0


        var conut = start + speed
        if (start<end){
            if (conut >= end){
                clearInterval(t)
                conut = end;
                if(callback){
                    callback()
                }
            }
        } else{
            // speed =  -speed
            if (conut<=end){

                clearInterval(t)
                if (callback){
                    callback()
                }
            }
        }
        obj.style[atter] = conut+"px"
    },40)


}*/
// 根据时间确定的动画
function move2(obj,attrobj,d,fun,callback){
    var begin= [] , end = [] ,change = []  ,val = [] ,t = 0,tt

    if (arguments.length ==2){
        var dd = 1000
        var ff = "linear"
        var call = null
    }
    else if(arguments.length == 3 ){
        if (typeof arguments[2] == "number") {
            var dd = arguments[2]
            var ff = "linear"
            var call = null
        }
        else if(typeof arguments[2] == "string"){
            var dd = 1000
            var ff = arguments[2]
            var call = null
        }
        else if (typeof arguments[2] == "function"){
            var dd = 1000
            var ff = "linear"
            var call = arguments[2]
        }
    }
    else if(arguments.length ==4){
        if(typeof arguments[3] == "string"){
            var dd = 1000
            var ff = arguments[3]
            var call = null
        }else if(typeof arguments[3] == "function"){
            var dd = 1000
            var ff = "linear"
            var call = arguments[3]
        }
    }
    for(var i in attrobj){
        begin[i] =  parseInt(getComputedStyle(obj,null)[i])?parseInt(getComputedStyle(obj,null)[i]):0
        end[i] = attrobj[i]
        change[i] = attrobj[i] - begin[i]

    }
    function move1() {
        t+=40;
        for (var i in attrobj){
            val[i] = movefun[ff](change[i],t,dd,begin[i])
        }
        if (t>dd){
            cancelAnimationFrame(tt)
            for (var i in attrobj){
                if (i == "opacity"){
                    obj.style[i] = attrobj[i]
                } else {
                    obj.style[i] = attrobj[i] + "px"
                }
            }
            if (call){
                call()
            }
        }else{

            for (var i in attrobj){
                if (i == "opacity"){
                    obj.style[i] = val[i]
                }else {
                    obj.style[i] = val[i] + "px"
                }
            }
            tt = requestAnimationFrame(move1)
            }
        }
    move1()
}

