# ES6

## Table of Contents

  1. [Class Definition](#class-definition)
  1. [Usage] (#usage)

##Class definition

``` javascript

"use strict";

let instance = Symbol();
let instanceEnforcer = Symbol();

/**
 * Class Fibanacci Serie
 */
class Fibonacci{
   

    static get instance(){
        if (!this[instance]) {
            this[instance] = new Fibonacci(instanceEnforcer);
        }

        return this[instance];
    }

    constructor(enforcer){
        if (enforcer !== instanceEnforcer) throw ('Cannot construct singleton');
    }

    execute(number){
        if (number == 0 || number == 1) return number;

        return this.execute(number-2) + this.execute(number-1);
    }

    static print(){
        let res = '';
        let fibo = Fibonacci.instance;

        for (let i = 0; i < 10; i++){
            res += `Fibonacci(${i}) = ${fibo.execute(i)} \n`;
        }

        return res;
    }
}
  ```

##How to instantiate the class

``` javascript
Fibonacci.print()
  ```
