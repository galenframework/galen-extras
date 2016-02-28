function MockedFunction(funcName) {
    this.funcName = funcName;
    this.expectedReturns = [];
}
MockedFunction.prototype.invoke = function () {
    if (this.expectedReturns.length > 0) {
        var value = this.expectedReturns.shift();
        return value;
    } else {
        throw new Error("Unexpected mock invokation for function: " + this.funcName);
    }
};
MockedFunction.prototype.thenReturn = function (returnValue) {
    this.expectedReturns.push(returnValue);
    return this;
};

this._mock = {
    funcs: {},
    addMock: function (funcName) {
        this.funcs[funcName] = new MockedFunction(funcName);
        return this.funcs[funcName];
    }
};

this.mockFunction = function (funcName) {
    var mock = this._mock.addMock(funcName);
    this[funcName] = function () {
        return mock.invoke();
    };
    return mock;
};

this.mockReturn = function (returnValue) {
    return function () {return returnValue;};
};
