var Hello = require('./Hello');
var Hi = require('./Hi');

var hello = new Hello();
var hi = new Hi();

hello.setName("Li");
hi.setName("Hu");

hello.sayHello();
hi.sayHi();