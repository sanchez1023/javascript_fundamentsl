var car=function()
    {
        drive()
        {
            console.log( 'move ahead');
        }
        stop()
        {
            return'brake hard';
        }
    };

    var a=function porshe()
    {
        eminities()
        {
            return 'luxaury';
        }
    };
    Object.assign(a,car);
    a();
console.dir(a());