/*1. Переделайте приведенный код так, чтобы в нем использовались операции +=, -=, *=, /=,
++, --. Количество строк кода при этом не должно измениться. Код для переделки:*/
var num = 1;
    num += 12;
    num -= 14;
    num *= 5;
    num /= 7;
   /* num ++ 1;
    num -- 1;*/
    num += 7;
    num -= 18;
    num *= 10;
    num /= 15;
console.log(num);

/*2. Создайте три числовые переменные: час, минута, секунда. С их помощью выведите
время в формате час:минута:секунда'.*/
var hr = 12,
    min = 30,
    sec = 10;
console.log (hr + ':' + min + ':' + sec);

/*3. Дана строка, состоящая из символов, например, 'abcde'. Проверьте, что первым
символом этой строки является буква 'a'. Если это так - выведите 'да', в противном
случае выведите 'нет'.*/
var st = 'abcde';
if (st [0] == 'a'){
    alert('да');
} else {
    alert('нет');
}

/*4. Создайте переменную str и присвойте ей значение «В некиим царстве, в некиим
государстве жил-был богатый купец, именитый человек». Выведите на экран только
фразу «богатый купец».*/
var str = 'В некиим царстве, в некиим государстве жил-был богатый купец, именитый человек.'
var end = str.substring(str.length -19, 47);
console.log(end);

/*5. Дана строка из 3-х цифр. Найдите сумму этих цифр. То есть сложите как числа первый
символ строки, второй и третий.*/
var c = '123';
alert (+c[0] + +c[1] + +c[2]);

/*6. Если переменная a равна 10, то выведите 'Верно', иначе выведите 'Неверно'.*/
var a = 5;
if (a == 10) {
    console.log ('Верно');
} else {
    console.log ('Неверно');
}

/*7. Если переменная a равна 'test', то выведите 'Верно', иначе выведите 'Неверно'.
Проверьте работу скрипта при a, равном 'test', 'тест', 3.*/
var a1 = 'test';
if (a1 == 'test') {
    console.log ('Верно');
} else {
    console.log ('Неверно');
}

a1 = 'тест';
if (a1 == 'test') {
    console.log ('Верно');
} else {
    console.log ('Неверно');
}

a1 = 3;
if (a1 == 'test') {
    console.log ('Верно');
} else {
    console.log ('Неверно');
}

/*8. Если переменная a равна или меньше 1, а переменная b больше или равна 3, то
выведите сумму этих переменных, иначе выведите их разность (результат вычитания).
Проверьте работу скрипта при a и b, равном 1 и 3, 0 и 6, 3 и 5.*/
var a2 = 1;
    b2 = 3;
if (a2 <= 1 && b2 >= 3) {
    console.log(a2 + b2);
} else {
    console.loge(a2 - b2);
}    

var a2 = 0;
    b2 = 6;
if (a2 <= 1 && b2 >= 3) {
    console.log(a2 + b2);
} else {
    console.log(a2 - b2);
} 

var a2 = 3;
    b2 = 5;
if (a2 <= 1 && b2 >= 3) {
    console.log(a2 + b2);
} else {
    console.log(a2 - b2);
}

/*9. Создайте переменную name, login и pass. С помощью ф-ции prompt() получите
соответствующие значения: «Ваше имя», «Введите логин», «Ваш пароль». Выведите на
экран «Добро пожаловать, %Имя%! Вы успешно вошли на сайт.», если логин и пароль
равны 'admin' и 'nimda', иначе «%Имя%, вы неверно ввели логин или пароль!».*/
let name = prompt('Ваше имя');
    login = prompt('Введите логин');
    pass = prompt('Ваш пароль');
if (login == 'admin' && pass == 'nimba') {
    alert ('Добро пожаловать,' + name + '!' + 'Вы успешно вошли на сайт.');
} else {
    alert (name + 'вы неверно ввели логин или пароль!');
}

/*10. Переменная month может принимать значения от 1 до 12. Если она имеет значение 1, 2
или 12, то в переменную season запишем 1, если имеет значение 3, 4 или 5 – 2 и так далее. После определения сезона, определите пору года и запишите значение в
переменную seasonName: если 1, то 'Зима', если 2 - 'Лето' и т.д. Определение поры года
написать через switch.*/
let month = 7;
switch (month) {
    case 12:
    case 1:
    case 2:
        console.log ('Сезон ' + 1);
    break;
    case 3:
    case 4:
    case 5:
        console.log ('Сезон ' + 2);
    break;
    case 6:
    case 7:
    case 8:
        console.log ('Сезон ' + 3);
    break;
    case 9:
    case 10:
    case 11:
        console.log ('Сезон ' + 4);
    break;
    default:
        console.log ('Неизвестное значение');
}
seasonName = 3;
switch (seasonName) {
    case 1:
        document.write ('Зима');
    break;
    case 2:
        document.write ('Весна');
    break;
    case 3:
        document.write ('Лето');
    break;
    case 4:
        document.write ('Осень');
    break;
    default:
        document.write ('Неизвестное значение');
}


