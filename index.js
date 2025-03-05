// Increase the timeout duration for Mocha tests
before(function(done) {
	this.timeout(5000);
	done();
});

function receivesAFunction(callback) {
	callback();
}

function returnsANamedFunction() {
	return function namedFunction() {
	};
}

function returnsAnAnonymousFunction() {
	return function() {
	};
}
