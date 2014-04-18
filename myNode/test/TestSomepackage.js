console.log("test a");

var somepackage = require('./somepackage');	//测试package中只有单一文件
somepackage.hello();

var somepackage2 = require('./somepackage2');	//测试package中有多个文件
somepackage2.hello();