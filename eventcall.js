var events = require('events');
var util=require('util');

var Person=function (name) {
     this.name=name;
};
util.inherits(Person, events.EventEmitter)

var soka=new Person('soka');
var moka=new Person('moka');
var people=[neeraj,drishya];

people.forEach(function(person)
{
    person.on('speak',function(mssg)
    {
        console.log(person.name +' said ' +mssg)
    });
});
soka.emit('speak','hey guys');
moka.emit('speak','how are you guys');
