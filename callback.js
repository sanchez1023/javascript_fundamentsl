let add=function(a,b)

{
    return a+b;
};

let sub=function(a,b){

    return a-b;
};
/*let getcal=new Promise(function(add,mul){

    let getcal=add;

    if(getcal==add)
    {
        add=add();
    }
    elseif(getcal==mul)
    {
         mul=mul();
    }
});

getcal.then(function(fromadd){

let cal=function(num1,num2,callback)
{
    return callback(num1,num2);
    console.log(cal(2,3,fromadd));}
}).catch(function(frommul){
    return callback(num1,num2);
    console.log(cal(2,3,frommul));
})*/
let abc=function(num1,num2,callback)
{
    return callback(num1,num2);

};
console.log(abc(3,4,add));