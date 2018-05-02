// add by yanyj 20180502 start
let assert = require('./assert');
let expect = assert.expect;
console.log(expect(null).is('Object'));

// isNumber
console.log(expect(12).isNumber());
console.log(expect(12 + "").isNumber());

// equal
console.log('************** equal ******************');
console.log(expect(1).equal(1));
console.log(expect(NaN).equal(NaN));
console.log(expect({b:2,a:1}).equal({a:1,b:2}));

console.log('************** Array has ******************');
console.log(expect(1).has);
console.log(expect([1,2,3]).has(1,2));


console.log('************** Object has ******************');
console.log(expect(1).keys); //undefined
console.log(expect({a:1, b:2}).keys); // {has: [Function: has]}
console.log(expect({a:1, b:2}).keys.has('a')); // true
console.log(expect({a:1, b:2}).keys.has('c')); // false
console.log(expect({a:1, b:2}).keys.has('a', 'c')); // false
console.log(expect({a:1, b:2}).values.has('1')); // false
console.log(expect({a:1, b:2}).values.has(1)); // true
console.log(expect({a:1, b:2}).values.has(3)); // false
// add by yanyj 20180502 end
