var movefn={
    linear:function (c,t,d,b) {
        return b+c*t/d;
    },
    easein:function (c,t,d,b) {
        return b+c*(t/=d)*t;
    },
    easeout:function (c,t,d,b) {
        return b-c*(t/=d)*(t-2);
    }
};
function animate(obj,attr,end,duration,fun1,callback) {
    var begin=parseInt(getComputedStyle(obj,null)[attr])?parseInt(getComputedStyle(obj,null)[attr]):0;
    var c=end-begin;
    var t=0;
    var t1=setInterval(function () {
        t=t+40;
        var val=movefn[fun1](c,t,duration,begin);
        if(t>=duration){
            clearInterval(t1);
            val=end;
            if(callback){
                callback();
            }
        }
        obj.style[attr]=val+"px";
    },40);
}
