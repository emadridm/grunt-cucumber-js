function Testing_steps() {
    var firstNumber;
    var secondNumber;
    var sum = 0;
    var a,b,c;

    this.Given(/^I have the number (\d+) and (\d+)$/, function(arg1, arg2, callback) {
        firstNumber = parseInt(arg1);
        secondNumber = parseInt(arg2);
        callback();
    });

    this.When(/^I add them together$/, function(callback) {
        sum = firstNumber + secondNumber;
        callback();
    });

    this.Then(/^I should have (\d+)$/, function(arg1, callback) {
        var expectedSum = parseInt(arg1);
        if (expectedSum !== sum) {
            throw new Error('It doesn\'t add up! ' + arg1 + ' !== ' + sum);
        }
        callback();
    });

    this.Given(/^I have the object '([^']*)'$/, function (arg1, callback) {
        a = JSON.parse(arg1);
        callback();
    });

    this.When(/^I extend previus object with the object '([^']*)'$/, function (arg1, callback) {
        b = JSON.parse(arg1);
        callback();
    });

    this.Then(/^I should have the object '([^']*)'$/, function (arg1, callback) {
        c = JSON.parse(arg1);
        d = this.extend(a, b);
        if (!this.isEqual(c, d)) {
            throw new Error('It doesn\'t add up! ' + arg1 + ' !== ' + JSON.stringify(d));
        }
        callback();
    });
};

module.exports = Testing_steps;
