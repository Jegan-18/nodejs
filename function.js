var counter= require('./count')
console.log(counter(['Jegan','R']));
function sayhi()
{
    console.log('hi')
}

sayhi();

var saybye=function()
{
    console.log('bye');
};
function callfun(fun)
{
    fun();
}
callfun(saybye);
