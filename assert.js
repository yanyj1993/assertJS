// add by yanyj 20180502 start
// JS断言库
(function (root, factory) {

    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.

        define([], factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory();
    } else {
        // Browser globals (root is window)
        root.assert = factory();
    }
}(this, function () {

    var expect = function (arg) {
        var _expect = {

            // 严格相等
            equal: function (value) {
                // 对NaN的特殊判断
                if (isNaN(value)) {
                    return isNaN(arg);
                }

                if (is.call(value, 'Object') || is.call(value, 'Array')) {
                    return JSON.stringify(value) === JSON.stringify(arg);
                }

                return value === arg;
            },

            type: {
                is: function (type) {
                    return is.call(arg, type);
                },
                isNumber: function () {
                    return is.call(arg, 'Number');
                },
                isString: function () {
                    return is.call(arg, 'String');
                },
                isArray: function () {
                    return is.call(arg, 'Array');
                },
                isNull: function () {
                    return is.call(arg, 'Null');
                },
                isObject: function () {
                    return is.call(arg, 'Object');
                },
                isBoolean: function () {
                    return is.call(arg, 'Boolean');
                },
                isUndefined: function () {
                    return is.call(arg, 'Undefined');
                },
            },
        };

        // 数组会有has的断言属性
        if (is.call(arg, 'Array')) {
            _expect.has = function () {
                var _args = Array.prototype.slice.call(arguments);
                var hasFlag = true;
                _args.map(function (_arg) {
                    if (arg.indexOf(_arg) === -1) hasFlag = false;
                });
                return hasFlag;
            }
        }

        if (is.call(arg, 'Object')) {
            var _keys = Object.keys(arg);
            var _values = Object.values(arg);
            _expect.keys = {
                has: function () {
                    var _args = Array.prototype.slice.call(arguments);
                    var hasFlag = true;
                    _args.map(function (_arg) {
                        if (_keys.indexOf(_arg) === -1) hasFlag = false;
                    });
                    return hasFlag;
                }


            }

            _expect.values = {
                has: function () {
                    var _args = Array.prototype.slice.call(arguments);
                    var hasFlag = true;
                    _args.map(function (_arg) {
                        if (_values.indexOf(_arg) === -1) hasFlag = false;
                    });
                    return hasFlag;
                }


            }
        }

        return _expect;

    };


    var is = function (type) {
        return toString.call(this) === '[object ' + type + ']';
    }

    return {
        expect: expect
    }

}));


// add by yanyj 20180502 end
