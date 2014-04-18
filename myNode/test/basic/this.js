var someuser = {
	name : "someuser",
	display : function() {
		console.log(this.name);
	}
};
someuser.display();

var foo = {
	bar : someuser.display,
	name : "foo"
};
foo.bar();

//虽然有警告，但还是能运行的
name="global";
func = someuser.display;
func();