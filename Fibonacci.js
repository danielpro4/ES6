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

    static print(value = 10){
        let res = '';
        let fibo = Fibonacci.instance;

        for (let i = 0; i < value; i++){
            res += `Fibonacci(${i}) = ${fibo.execute(i)} \n`;
        }

        return res;
    }
}
