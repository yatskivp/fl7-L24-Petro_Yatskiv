class Calc {
    constructor(){}

    concat(num1,num2){
        let res = num1 + num2;
        if(typeof res === 'number' && isFinite(res)){
            return res.toFixed(2);
        }
    }
    subtract(num1,num2){
        let res = num1 - num2;
        if(typeof res === 'number' && isFinite(res)){
            return res.toFixed(2);
        }
    }
    multiply(num1,num2){
        let res = num1 * num2;
        if(typeof res === 'number' && isFinite(res)){
            return res.toFixed(2);
        }
    }
    divide(num1,num2){
        let res = num1 / num2;
        if(typeof res === 'number' && isFinite(res)){
            return res.toFixed(2);
        }
    }
}

export default Calc; 