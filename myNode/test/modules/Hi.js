function Hi() {
	
	var name;
	
	this.setName = function(pName) {
		this.name = pName;
	};
	
	this.sayHi = function() {
		console.log("Hi, " + this.name);
	};
}

module.exports = Hi;