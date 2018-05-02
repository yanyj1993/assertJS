# assertJS
assert.js 断言库 个人使用的断言库

## api
1.  **expect**: 该方法用来断言其参数
2.  **expect(arg).type**:  类型断言
3.  **expect(arg).type.is**: 判断该方法的类型  
     
            expect(1).type.is('Number');    // true
            expect(1).type.isNumber();      // true

4.  **expect(arg).type.not.is**: 判断该方法的类型
   
            expect(1).type.not.is('Number');    // false
            expect(1).type.not.isNumber();      // true
   
5.  **expect(arg).equal**:  *arg* 是否等于
        
            expect(1).equal(1);  // true
 
6.  **expect(arg).not.equal**:  *arg* 是否不等于

            expect(1).not.equal(2); // true
    
7.  **expect(arg).has**: *arg* 为数组时才会提供的断言
       
            expect([1,2,3]).has(1);     //true 
            expect([1,2,3]).has(1,2);   //true 
            expect([1,2,3]).has(1,2,4); //false
8.  **expect(arg).not.has**: *arg* 为数组时才会提供的断言

            expect([1,2,3]).not.has(1); // false  
            expect([1,2,3]).has(1,2);   // false  
            expect([1,2,3]).has(1,2,4); // false
            expect([1,2,3]).has(4);     // true
9.  **expect(arg).keys**: *arg* 为对象时才会提供的断言 
10.  **expect(arg).keys.has**: *arg* 为对象时才会提供的断言 

            expect({a:1,b:2}).has('a');     //true  
            expect({a:1,b:2}).has('a','b'); //true  
            expect({a:1,b:2}).has('c');     //false
11.  **expect(arg).keys.not.has**: *arg* 为对象时才会提供的断言 eg:

            expect({a:1,b:2}).not.has('a');     // false  
            expect({a:1,b:2}).not.has('a','b'); // false   
            expect({a:1,b:2}).not.has('c');     // true            
12. **expect(arg).values.has**: 同第**10**条一样，取得是对象的value值        
13. **expect(arg).values.not.has**: 同第**11**条一样，取得是对象的value值        