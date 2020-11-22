'use strict';

(function calculate() {
    const btnCalc = document.querySelector('.form__button');
    btnCalc.addEventListener('click', () => { 
        const feet = document.querySelector('.feet');
        const inches = document.querySelector('.inches');
        const result = document.querySelector('.form__result');
        const resultNum = parseInt(feet.value) * 30.48 + parseInt(inches.value) * 2.54;
        if (isNaN(resultNum)) {
            result.textContent = 'Wrong input data!';
        } else {
            result.textContent = resultNum + ' cm';
        }
    })
})();