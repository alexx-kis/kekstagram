// /* eslint-disable indent */
/* eslint-disable no-console */
// 1. Функция для проверки длины строки

const checkStringLength = (string, maxLength) => string.length <= maxLength;

console.log(checkStringLength('проверяемая строка', 10)); // false
console.log(checkStringLength('проверяемая строка', 12)); // false
console.log(checkStringLength('проверяемая строка', 18)); // true
console.log(checkStringLength('проверяемая строка', 20)); // true
console.log(checkStringLength('проверяемая строка', 25)); // true

// 2. Функция, проверяющая, является ли строка палиндромом

const isPalindrome = (string) => {
    const normalString = string.replaceAll(' ', '').toLowerCase();
    let newString = '';

    for (let i = normalString.length - 1; i >= 0; i--) {
        newString += normalString[i];
    }
    return newString === normalString;
};

console.log(isPalindrome('Лёша на полке клопа нашёл ')); // true
console.log(isPalindrome('Лёша на полке клопа нашёл ')); // true
console.log(isPalindrome('Лёша на полке клопа нашёл ')); // true
console.log(isPalindrome('Лёша на полке клопа нашёл ')); // true
console.log(isPalindrome('Лёша на полке клопа нашёл ')); // true


// 3. Функция принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа. Если в строке нет ни одной цифры, функция должна вернуть NaN:
const BASE = 10;
const extractNumber = (string) => {
    if (typeof (string) === 'number') {
        string = String(string);
    }
    let output = '';
    for (let i = 0; i < string.length; i++) {
        const char = parseInt(string[i], BASE);
        if (!Number.isNaN(char)) {
            output += char;
        }
    }
    if (!output) {
        return NaN;
    }
    return parseInt(output, BASE);
};

console.log(extractNumber('2023 год'));
console.log(extractNumber('ECMAScript 2022'));
console.log(extractNumber('1 кефир, 0.5 батона'));
console.log(extractNumber('агент 007'));
console.log(extractNumber('а я томат'));
console.log(extractNumber(2023));
console.log(extractNumber(-1));
console.log(extractNumber(1.5));



/*!// !------------ 5.16. Функции возвращаются ------------! //!*/

// домашнее задание - 5.16 Функции возвращаются

//@ функция переводит сроку времени типа 08:15 в десятичный формат в часы типа 8.25
const decimalizeTime = (time) => {
    const timeArr = time.split(':');
    const decimalTime = Number(timeArr[0]) + Number(timeArr[1] / 60);
    return decimalTime;
}

const checkTimeOverlap = (dayStart, dayEnd, meetingStart, meetingDuration) => {
    const meetingEnd = decimalizeTime(meetingStart) + meetingDuration / 60;

    if (decimalizeTime(dayStart) <= decimalizeTime(meetingStart) && meetingEnd <= decimalizeTime(dayEnd)) {
        return true
    }
    return false;
}


//# проверки
const times = [
    ['09:00', '18:00', '10:0', 120],
    ['08:00', '17:00', '07:0', 120],
    ['7:00', '19:0', '17:0', 180],
    ['6:0', '15:00', '05:0', 60],
    ['8:00', '15:00', '16:0', 120],
    ['07:00', '15:00', '6:0', 720],
    ['08:0', '15:00', '8:0', 480],
    ['7:00', '15:00', '6:0', 560],
]
for (let time of times) {
    console.log(checkTimeOverlap(...time));
}