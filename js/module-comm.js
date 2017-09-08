import Calc from './module-calc'
import createDom from './module-interface'
import output from './module-output'

createDom();

let operation = new Calc,
    buttons = document.getElementById('buttons'),
    inputs = document.querySelectorAll('input.inp'),
    resDiv = document.getElementById('result'),
    name, res;

buttons.addEventListener('click', (e) => {
    let target = e.target;
    if(target.tagName == 'BUTTON'){
        name = target.id;
        res = operation[name](+inputs[0].value,+inputs[1].value);
        inputs[0].value = inputs[1].value = '';
        output(res,resDiv)
    }
})