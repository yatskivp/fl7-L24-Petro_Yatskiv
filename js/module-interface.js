let createDom = () => {
    let btnId = {
        'concat' : '+',
        'subtract': '-',
        'multiply': '*',
        'divide': '/'
    }, 
        inpId = ['num1','num2'], i, buttons = document.getElementById('buttons'),
        inputs = document.getElementById('inputs');

    for(i=0; i<inpId.length; i++){
        let input = document.createElement('input');
        input.className = 'inp';
        inputs.appendChild(input);
    }
    
    for(i in btnId){
        let btn = document.createElement('button');
        btn.className = 'btn';
        btn.id = i;
        btn.innerHTML = btnId[i];
        buttons.appendChild(btn);
    }
}

export default createDom;