let getready=new Promise(function(resolve ,error){
     
    let ready=false;

    if(ready)
    {
        resolve('ready');
    }
        else{
            error('not ready');
        }
    
});
getready.then(function(fromresolve){
    console.log('Are you ready ?  '+fromresolve);
}).catch(function(fromerror){
    console.log('are you ready  ?  ' +fromerror)
});
