# assertJS
assert.js 断言库 个人使用的断言库

## api
1.  **expect**: 该方法用来断言其参数
2.  **expect(arg).type**:  类型断言
3.  **expect(arg).type.is**: 判断该方法的类型  eg:<br/>
     
            expect(1).type.is('Number'); *// true*
            expect(1).type.isNumber(); *// true*
     
4.  **expect(arg).equal**:  arg 是否等于
        
            expect(1).equal(1);  *//true*
    
5.  **expect(arg).has**: arg 为数组时才会提供的断言  eg:
       
            expect([1,2,3]).has(1); *//true;*  
            expect([1,2,3]).has(1,2); *//true;*   
            expect([1,2,3]).has(1,2,4); *//false;*
 
6.  **expect(arg).keys**: arg 为对象时才会提供的断言 
7.  **expect(arg).keys.has**: arg 为对象时才会提供的断言 eg:

            expect({a:1,b:2}).has('a'); *//true;*  
            expect({a:1,b:2}).has('a','b'); *//true;*   
            expect({a:1,b:2}).has('c'); *//false;*
8. **expect(arg).values.has**: 同第**7**条一样，取得是对象的value值        