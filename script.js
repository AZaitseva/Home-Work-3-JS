// console.log

// Задание 1
function task_1() {
  let a = Math.trunc(
    prompt("Задайте целое число, которое будет началом диапазона: "));
  let a1 = a;
  let b = Math.trunc(
    prompt("Задайте целое число, которое будет концом диапазона: "));
  while (a >= b);
  let summa = 0;
  while (a <= b) {
    summa += a;
    a++;
  }
  alert(`В диапазоне от ${a1} до ${b} включительно сумма всех чисел составляет: ${summa}.`);
}
task_1();

// Задание 2
// 1 вариант:
// function task_2_1() {
// let e = +prompt("Введите первое число для определения наибольшего общего делителя: ");
// let f = +prompt("Введите второе число: ");
// let gcd;
// while (e!=f) {
//   if (e>f) {
//     e = e -f;
//   }
//   else { 
//     f = f - e;
//   }
// }
// gcd = e;
// alert(`У чисел ${e} и ${f} наибольший общий делитель: ${gcd}`)
// }
// task_2_1();


// Задание 2
// 2 вариант:
function task_2_2() {
let n = +prompt("Введите первое число для определения наибольшего общего делителя: ");
let m = +prompt("Введите второе число: ");
let new_n = Math.abs(n);
let new_m = Math.abs(m);
let max_divisor = 1;
let i = 1;
  while (i <= new_n && i <= new_m) {
    if (new_n % i == 0 && new_m % i == 0) {
      max_divisor = i;
    }
    i++;
  }
alert(`У чисел ${n} и ${m} наибольший общий делитель: ${max_divisor}`);
}
task_2_2();


// Задание 3
function task_3() {
let g = +prompt("Введите число для определения делителей: ");
let new_g = Math.abs(g);
let divisors = "";
let j = 1;
  do {
    if (new_g % j == 0) {
      divisors += j + ",";
    }
    j++;
  } while (j <= new_g);
alert(`У числа ${g} следующие делители: ${divisors}`);
}
task_3();


// Задание 4
function task_4() {
let h = Math.abs(+prompt("Введите целое число для определения количества цифр: "));
let new_h = h;
let counter = 0;
while (new_h > 0) {
  new_h = Math.trunc(new_h / 10);
  counter++;
}
alert(`В введенном вами числе ${h}  ${counter} цифр.`);
}
task_4();


// Задание 5
function task_5() {
let k = 0;
let positive_number = 0;
let negative_number = 0;
let null_number = 0;
let even_number = 0;
let uneven_number = 0;
  for (let s = 0; s < 10; s++) {
    k = +prompt("Введите 10 чисел: ");
    if (k > 0) {
      positive_number += 1;
    } else if (k < 0) {
      negative_number += 1;
    } else {
      null_number += 1;
    }
    !(k % 2) ? (even_number += 1) : (uneven_number += 1);
  }
alert(`Из 10 введенных вами чисел ${positive_number} положительных, ${negative_number} отрицательных, ${null_number} равных нулю, ${even_number} четных и ${uneven_number} нечетных.`
);
}
task_5();


// Задание 6
function task_6() {
alert(`Калькулятор:  Для решения примера введите 2 числа и знак действия: `);
let numberA = 0;
let numberB = 0;
let result = true;
let sign = "";
   do {
    numberA = +prompt("Введите первое число: ");
    numberB = +prompt("Введите второе число: ");
    sign = prompt("Введите знак операции (*, /, + либо -): ");
    switch (sign) {
      case "+":
        alert(
          `${numberA} ${sign} ${numberB} = ${numberA + numberB}`
        );
        break;
      case "-":
        alert(
          `${numberA} ${sign} ${numberB} = ${numberA - numberB}`
        );
        break;
      case "*":
        alert(
          `${numberA} ${sign} ${numberB} = ${numberA * numberB}`
        );
        break;
      case "/":
        alert(
          `${numberA} ${sign} ${numberB} = ${numberA / numberB}`
        );
        break;
      default:
        alert(`Вы не ввели знак математической операции!`);
        break;
    }
    result = confirm("Хотите вычислить ещё один пример?");
} while (result == true);
}
task_6();


// Задание 7
function task_7() {
let base_number = Math.abs(
  Math.trunc(+prompt("Введите число для сдвига: "))
);
let jump = Math.abs(
  Math.trunc(
    +prompt("Введите, на сколько позиций вы хотите произвести сдвиг: ")
  )
);
let array = [];
let new_base_number = base_number;
while (base_number > 0) {
  array.unshift(base_number % 10);    // метод unshift добавляет элемент в начало массива
  base_number = Math.trunc(base_number / 10);
}
let new_jump = jump;
jump = jump % array.length; //если указ. число больше длины строки
let arrJumpLeft_L = [];
let arrJumpLeft_R = [];
let arrJumpRight_L = [];
let arrJumpRight_R = [];
for (let i = 0; i < array.length; i++) {
  if (i < jump) {
    arrJumpLeft_L[i] = array[i];
  } else {
    arrJumpLeft_R[i] = array[i];
  }
  if (i < array.length - jump) {
    arrJumpRight_L[i] = array[i];
  } else {
    arrJumpRight_R[i] = array[i];
  }
}
alert(
  `Сдвиг вправо "${new_base_number}" на ${new_jump} позиции: ` +
    arrJumpRight_R.concat(arrJumpRight_L).join("")  // метод concat соединяет два массива
);
alert(
  `Сдвиг влево "${new_base_number}" на ${new_jump} позиции: ` +
    arrJumpLeft_R.concat(arrJumpLeft_L).join("")
);
alert(`Спасибо!:)`);
}
task_7();


// Задание 8
function task_8() {
let arr_Week = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье",];
let i = 0;
let stop = true;
while (stop == true) {
  stop = confirm(`${arr_Week[i]}. Хотите узнать следующий день недели?`);
  i++;
  if (i > 6) {
    i = 0;
  }
}
alert("Вывод дней недели окончен!");
}
task_8();


// Задание 9
function task_9() {
alert("Таблица умножения для чисел от 2 до 9: ")
let table = "";
  for (let i = 2; i <= 9; i++) {
    for (let j = 1; j <= 10; j++) {
      table += `${i} x ${j} = ` + i * j + ", ";
    }
  }
  alert(table);
}
task_9();

// Задание 10
function task_10() {
alert("Игра «Угадай число»: ");
let N = 0;
  // do {
  //    N = Math.trunc(+prompt("Загадайте число от 0 до 100!: "));
  // }  while (N < 0 || N > 100);
   do {
    N = Math.trunc(+prompt("Загадайте число от 0 до 999!: "));
  } while (N < 0 || N > 999);
  // alert(`Ваше число > ${N}, < ${N} или == ${N}?`);
  let counter = 0;
  let low = 0;
  let middle = 0;
  // let high = 100;
  let high = 999;
  let condition = "";

  while (low <= high) {
    middle = Math.trunc((low + high) / 2);
    condition = prompt(
      `Вы загадали число ${middle}? Введите без кавычек "=", если это так. Если искомое число меньше, введите "<", либо же ">", если оно больше.`);
    if (condition != "=" && condition != "<" && condition != ">") {
      alert(
        "Вводите, пожалуйста, только символы: = < >!"
      );
    continue;
    }
    if (
      (condition != "=" && middle == N) ||
      (condition == "<" && middle < N) ||
      (condition == ">" && middle > N) ||
      (condition == "=" && middle != N)
    ) {
      alert(
        `Вводите, пожалуйста, только символы: = < >! Попробуйте снова!`
      );
      continue;
    }
    if (condition == ">") {
      low = middle + 1;
    } else if (condition == "<") {
      high = middle - 1;
    } else {
      low = high + 1;
    }
    counter++;
  }
  alert(
    `Итак, за ${counter} попыток мы установили, что вы загадали число ${middle}!`
  );
}
task_10();

















