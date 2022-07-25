const minValueField = document.querySelector('#minValueInput');
const maxValueField = document.querySelector('#maxValueInput');
const invitation = document.querySelector('#invitation');
invitation.textContent = "Задайте промежуток от -999 до 999. Значения по умолчанию 0 и 100. Дроби округляются.";
var minValue;
var maxValue;
var answerNumber;
var orderNumber = 0;
var gameRun = true;

const orderNumberField = document.querySelector('#orderNumberField');
const answerField = document.querySelector('#answerField');
const btnRetry = document.querySelector('#btnRetry');
const btnOver = document.querySelector('#btnOver');
const btnLess = document.querySelector('#btnLess');
const btnEqual = document.querySelector('#btnEqual');
const btnInput = document.querySelector('#btnInput');
btnRetry.disabled = true;
btnOver.disabled = true;
btnLess.disabled = true;
btnEqual.disabled = true;

orderNumberField.textContent = orderNumber;


var oneToNineteen = ['один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять', 'десять',
'одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 
'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'];
var tens = ['десять', 'двадцать', 'тридцать', 'сорок', 
'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'];
var hundreds = ['сто', 'двести', 'триста', 'четыреста', 
'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот'];

//функция, выдающая случайным образом одну из трех заданных фраз
function threeRandomPhrases (phrase1, phrase2, phrase3) {
    
    const phraseRandom = Math.round(Math.random() * 3 + 0.5);
       switch (phraseRandom) {
        case 1:
            answerPhrase = phrase1;
            break;
        case 2:
            answerPhrase = phrase2;
            break;
        case 3:
            answerPhrase = phrase3;           
    }
    return answerPhrase;
}


function numToStr (myNumber) {
    var result = '';
    var signRes = '';
   
    if (myNumber < 0) {
        signRes = 'минус';
    }

    var myNumberAbs = Math.abs(myNumber);

    tensOnes = myNumberAbs % 100; //двузначный (или однозначный) остаток от деления числа
   
   if (tensOnes > 0 && tensOnes < 20) {
        result = `${oneToNineteen[tensOnes - 1]}`; //если остаток число от 01 до 19
    } else if (tensOnes > 19) {
        if (tensOnes % 10 > 0) {
            result = `${tens[Math.floor(tensOnes / 10) - 1]} ${oneToNineteen[tensOnes % 10 - 1] || ''}`//2-значный остаток из десятков и единиц
        } else {
            result = `${tens[Math.floor(tensOnes / 10) - 1]}` //2-значный остаток только из десятков
        }
    }
    
    
    if (myNumberAbs / 100 >= 1) { //если число трехзначное
        if (tensOnes === 0) {
            result = `${hundreds[Math.floor(myNumberAbs / 100) - 1]}` //чисто трехзначное число
        } else {
            result = `${hundreds[Math.floor(myNumberAbs / 100) - 1]} ${result}` //терхзначеное число и десятками и/или единицами
        }
    }
   
    if ((myNumberAbs / 100 === 0) && (tensOnes === 0)) {
        result = "0"; //если ноль
    }
    
    if (signRes) {
        result = `${signRes} ${result}` //если отрицательное (с "минус")
    }
   
    if (result.length < 20) //если длина текстового представления меньше 20
        return result 
    else 
        return myNumber
}




btnInput.addEventListener('click', function () {
    
    minValue = Math.ceil(minValueField.value / 1) || 0; //числовое значение или 0, дроби округляются
    minValue = minValue < -999 ? -999 : minValue; //сдвиг границы
    minValue = minValue > 999 ? 999 : minValue;

    if((maxValueField.value / 1 === 0) && (maxValueField.value !== '') ) {
        maxValue = 0; //если 0
    } else {
        maxValue = Math.floor(maxValueField.value / 1) || 100;
    }
   
    maxValue = maxValue > 999 ? 999 : maxValue;
    maxValue = maxValue < -999 ? -999 : maxValue;

    if (minValue > maxValue) {
        invitation.textContent = 'Неверный промежуток! Меньшее значение больше большего! Попробуйте еще раз...'
    } else {
    
        orderNumber = 1;
    orderNumberField.textContent = orderNumber;
    btnRetry.disabled = false;
    btnOver.disabled = false;
    btnLess.disabled = false;
    btnEqual.disabled = false;
    this.disabled = true;
    minValueField.disabled = true;
    maxValueField.disabled = true;
    gameRun = true;
    
    invitation.textContent=`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю.`;
    answerNumber = Math.floor((minValue + maxValue) / 2);
    answerField.textContent = `${threeRandomPhrases("Неужели это число ", "Кажется, знаю. Вы загадали число ", "Я догадался! Это ведь число ")} 
    ${numToStr(answerNumber)}?`;

    }
})

btnRetry.addEventListener('click', function () {

    btnRetry.disabled = true;
    btnOver.disabled = true;
    btnLess.disabled = true;
    btnEqual.disabled = true;

    btnInput.disabled = false;
    minValueField.disabled = false;
    maxValueField.disabled = false;
   
    orderNumber = 0;
    maxValueField.value = "";
    minValueField.value = "";
    
    invitation.textContent="Задайте промежуток от -999 до 999. Значения по умолчанию 0 и 100. Дроби округляются.";
    
    orderNumberField.textContent = orderNumber;
    
    answerField.textContent = "";
      
    gameRun = false;

})

btnOver.addEventListener('click', function () {
    
    minValue = answerNumber + 1;
 
    if (gameRun){
        if (minValue > maxValue){
            answerField.textContent = `${threeRandomPhrases("Вы загадали неправильное число!\n\u{1F914}","Я сдаюсь...\n\u{1F92F}", "Я сегодня не в форме...\n\u{1F62B}")}`;
            gameRun = false;
        } else {
           
            answerNumber = Math.floor((minValue + maxValue) / 2);
            
           
            orderNumber++;
            orderNumberField.textContent = orderNumber;
                                         
            answerField.textContent = `${threeRandomPhrases("Неужели это число ", "Кажется, знаю. Вы загадали число ", "Я догадался! Это ведь число ")} 
            ${numToStr(answerNumber)}?`;
        }
    }
})

btnLess.addEventListener('click', function () {
    maxValue = answerNumber - 1;
    
    if (gameRun){
        if (minValue > maxValue){       

            answerField.textContent = `${threeRandomPhrases("Вы загадали неправильное число!\n\u{1F914}","Я сдаюсь...\n\u{1F92F}", "Я сегодня не в форме...\n\u{1F62B}")}`;
            gameRun = false;
        } else {
            
            answerNumber = Math.ceil((minValue + maxValue) / 2);
            
            orderNumber++;
            orderNumberField.textContent = orderNumber;
            answerField.textContent = `${threeRandomPhrases("Неужели это число ", "Кажется, знаю. Вы загадали число ", "Я догадался! Это ведь число ")} 
            ${numToStr(answerNumber)}?`;
        }
    }
})

btnEqual.addEventListener('click', function () {
    if (gameRun){
        answerField.textContent = `${threeRandomPhrases("Я всегда угадываю\n\u{1F60E} ", "Обожаю играть с вами!\n\u{1F60A}", "Спасибо за интересную игру!\n\u{1F609}")}`;
        gameRun = false;
    }
})

