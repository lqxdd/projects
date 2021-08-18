'use strict';

// 1) Даны 3 инпута и кнопка. По нажатию на кнопку получите числа, 
// стоящие в этих инпутах и запишите их сумму в четвертый инпут. Показать решение

const btn = document.getElementById("sumbtn");
btn.addEventListener('click', function () {
    const num1 = +(document.getElementById("num1").value);
    const num2 = +(document.getElementById("num2").value);
    const num3 = +(document.getElementById("num3").value);
    document.getElementById("sum").value = num1 + num2 + num3;
});

// 2) Даны N инпутов с классом .num и кнопка. По нажатию на кнопку получите числа, 
// стоящие в этих инпутах и запишите их сумму в абзац с id="result". Показать решение.


const btn2 = document.getElementById("sumbtn2");
const nums = document.getElementsByClassName('num');
btn2.addEventListener('click', function () {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += +nums[i].value;
      }
    document.getElementById('result').innerHTML = sum;
});

// 3) Дан инпут. В него вводится число. По потери фокуса найдите сумму цифр этого числа. Показать решение.

let num = document.getElementById('num');
num.addEventListener('focusout', function () {
	let sum = 0;
	let str = num.value;
	let arr = str.split('');
  	for (let i = 0; i < arr.length; i++) {
		sum += +arr[i];
	}
    document.getElementById('sum_digits').innerHTML = sum;
});








