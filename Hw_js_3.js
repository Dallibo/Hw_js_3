let numb = +prompt("Введите число");
if (numb === 0) { 
    alert("Вы ввели ноль");
}
else
if (numb > 0) { 
    alert("Положительное число");
}
else
if (numb < 0){
    alert("Отрицательное число");
}

let age = +prompt("Введіть ваш вік");
const currentYear = 2023;
let result1 = currentYear - age;
if (result1 >= 0 && result1 <= 120) {
    alert("Ваш вік: " + result1);
} else {
    alert("Некоректний вік");
}

let numb1 = +prompt("Введите число");
let mod = Math.abs(numb1);
alert("Модуль числа: " + mod);

let hours = +prompt("Введите текущие часы:");
let minutes = +prompt("Введите текущие минуты:");
let seconds = +prompt("Введите текущие секунды:");
let result2 = true;
if (hours < 0 || hours > 23) {
    result2 = false;
}
if (minutes < 0 || minutes > 59) {
    result2 = false;
}
if (seconds < 0 || seconds > 59) {
    result2 = false;
}
if (result2) {
    alert("Данные введены правильно.");
} else {
    alert("Данные введены не правильно.");
}

let x = +prompt("Введите координату (Х):");
let y = +prompt("Введите координату (Y):");
let numb2;
if (x > 0 && y > 0) {
    numb2 = 1;
} else if (x < 0 && y > 0) {
    numb2 = 2;
} else if (x < 0 && y < 0) {
    numb2 = 3;
} else if (x > 0 && y < 0) {
    numb2 = 4;
} else {
    numb2 = "Точка на ходиться на оси";
}
alert("Номер четверти: " + numb2);

let month = +prompt("Введите номер месяца:");
let monthName;
switch (month) {
    case 1:
        monthName = "Январь";
        break;
    case 2:
        monthName = "Февраль";
        break;
    case 3:
        monthName = "Март";
        break;
    case 4:
        monthName = "Апрель";
        break;
    case 5:
        monthName = "Май";
        break;
    case 6:
        monthName = "Июнь";
        break;
    case 7:
        monthName = "Июль";
        break;
    case 8:
        monthName = "Август";
        break;
    case 9:
        monthName = "Сентябрь";
        break;
    case 10:
        monthName = "Октябрь";
        break;
    case 11:
        monthName = "Ноябрь";
        break;
    case 12:
        monthName = "Декабрь";
        break;
}
alert("Название месяца: " + monthName);

let numb3 = +prompt("Введіть перше число");
let numb4 = +prompt("Введіть друге число");
let numb5 = prompt("Введіть знак операції (+, -, *, /)");
let result;
switch (numb5) {
    case "+":
        result = numb3 + numb4;
        break;
    case "-":
        result = numb3 - numb4;
        break;
    case "*":
        result = numb3 * numb4;
        break;
    case "/":
        result = numb3 / numb4;
        break;
}
alert("Результат: " + result);

let numb6 = +prompt("Введите первое число:");
let numb7 = +prompt("Введите второе число:");
let maxNumb = (numb6 > numb7) ? numb6 : numb7;
alert("Большее число: " + maxNumb);

let numb8 = +prompt("Введите число:");
let numb9 = (numb8  % 5 === 0);
if (numb9) {
    alert("Число кратне 5");
} 
else {
    alert("Число не кратне 5");
}

let planet = prompt("Введите название своей планеты: ")
let Earth;
switch (planet) {
        case "Земля":
            result = "Привет, землянин!";
            break;
        case "земля":
            result = "Привет, землянин!";
            break;
        default:
            result = "Привет, инопланетянен!";
            break;
}
alert("Результат: " + result);

