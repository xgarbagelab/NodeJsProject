var events = require('events')
var util = require('util')

var person = function(name){
  this.name = name
}

util.inherits(person,events.EventEmitter)

var maddy = new person('maddy')
var sejal = new person('sejal')
var hentai = new person('hentai')

var people = [maddy,sejal,hentai]

people.forEach(function(person){
  person.on('speak',function(msg){
    console.log(person.name + ' said ' + msg)
  })
})

maddy.emit('speak','Hello World')
sejal.emit('speak','I am sexy')
hentai.emit('speak','I am Horny')
