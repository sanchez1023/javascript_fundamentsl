var o=2;

var add=function(a,b)
{
    return o+a+b;
};

var sum=add.call(o,2,5);//functionname.call.(obj,functionarguments).
console.log(sum);

var obj=4

var plus=function(c,d)
{
    return obj+c+d;
}
var sum=plus.apply(obj,[2,5]);//functionname.apply.(obj,[arrayofarguments])
console.log(sum);

var p=function(e,f)
{
    return obj+e+f;
}
var arr=[1,2];
var sum=p.apply(obj,arr);//array of arguments
console.log(sum);


var s=function(g,h)
{
    return obj*g+h;
}

var b=s.bind(obj)//binding object to the method/function's'
var sum=b(2,3);
console.log(b(2,3));
