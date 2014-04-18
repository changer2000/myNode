/* 注释掉的代码已经无法运行了，估计是太老了

var events = require('events');

var emitter = events.EventEmitter();
emitter.on('someEvent',function(arg1,arg2){
	console.log('listener1', arg1, arg2);
});

emitter.on('someEvent',function(arg1,arg2){
	console.log('listener2', arg1, arg2);
});

emitter.emit('someEvent','Haha',2014);

*/

var util = require('util');
var events = require('events');

function MyEvent() {
	events.EventEmitter.call(this);
	/*
	this.write = function(data) {
		this.emit('data', data);
	};
	*/
}
util.inherits(MyEvent, events.EventEmitter);	//这一行如果移到下面那个方法的下面，程序运行就会出错

MyEvent.prototype.write = function(data) {
	this.emit('data', data);
};

var myEvent = new MyEvent();
myEvent.on('data', function(data){
	console.log('Received data:"' + data + '"');
});
myEvent.write('It works.');