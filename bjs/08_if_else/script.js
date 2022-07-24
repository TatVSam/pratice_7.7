//let minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
//let maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
//alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
const minValueField = document.querySelector('#minValueInput');
const maxValueField = document.querySelector('#maxValueInput');
const invitation = document.querySelector('#gameStart');
invitation.textContent="Задайте промежуток от -999 до 999";
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
btnRetry.disabled = true;
btnOver.disabled = true;
btnLess.disabled = true;
btnEqual.disabled = true;

orderNumberField.innerText = orderNumber;
//answerField.innerText = `Вы загадали число ${answerNumber }?`;

var oneToNineteen = ['один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять', 'десять',
'одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 
'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'];
var tens = ['десять', 'двадцать', 'тридцать', 'сорок', 
'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'];
var hundreds = ['сто', 'двести', 'триста', 'четыреста', 
'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот'];

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

    tensOnes = myNumberAbs % 100;
   
   if (tensOnes > 0 && tensOnes < 20) {
        result = `${oneToNineteen[tensOnes - 1]}`;
    } else if (tensOnes > 19) {
        if (tensOnes % 10 > 0) {
        result = `${tens[Math.floor(tensOnes / 10) - 1]} ${oneToNineteen[tensOnes % 10 - 1] || ''}`} else {
        result = `${tens[Math.floor(tensOnes / 10) - 1]}`}
    }
    
    
    if (myNumberAbs / 100 >= 1) {
        if (tensOnes === 0) {
        result = `${hundreds[Math.floor(myNumberAbs / 100) - 1]}`} else {
            result = `${hundreds[Math.floor(myNumberAbs / 100) - 1]} ${result}` 
        }
    }

    if ((myNumberAbs / 100 === 0) && (tensOnes === 0)) {
        result = "0";
    }
    
    result = `${signRes} ${result}`;
    
    if (result.length < 20) 
    return result
    else return myNumber
}

//answerField.innerText = `Вы загадали число ${numToStr(minValue) }?`;



document.querySelector('#btnInput').addEventListener('click', function () {
    
    minValue = (minValueField.value / 1) || 0;
    minValue = minValue < -999 ? -999 : minValue;
    maxValue = (maxValueField.value / 1) || 100;
    maxValue = maxValue > 999 ? 999 : maxValue;
    if (minValue > maxValue) {invitation.textContent = 'Неверный промежуток! Меньшее значение больше большего! Попробуйте еще раз...'} 
    else {
    
        orderNumber = 1;
    orderNumberField.innerText = orderNumber;
    btnRetry.disabled = false;
    btnOver.disabled = false;
    btnLess.disabled = false;
    btnEqual.disabled = false;
    gameRun = true;
    
    invitation.textContent=`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`;
    answerNumber = Math.floor((minValue + maxValue) / 2);
    answerField.innerText = `${threeRandomPhrases("Неужели это число ", "Кажется, знаю, вы загадали число ", "Я догадался! Это ведь число ")} 
    ${numToStr(answerNumber)}?`;

    }
})

btnRetry.addEventListener('click', function () {
    minValue = (minValueField.value / 1) || 0;
    minValue = minValue < -999 ? -999 : minValue;
    maxValue = (maxValueField.value / 1) || 100;
    maxValue = maxValue > 999 ? 999 : maxValue;
    orderNumber = 1;
    //invitation.textContent="Введите границы интервала от -999 до 999";
    
    answerNumber = Math.floor((minValue + maxValue) / 2);
    
    orderNumberField.innerText = orderNumber;
    
   answerField.innerText = `${threeRandomPhrases("Неужели это число ", "Кажется, знаю, вы загадали число ", "Я догадался! Это ведь число ")} 
    ${numToStr(answerNumber)}?`;
      
    gameRun = true;

})

btnOver.addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            answerField.innerText = `${threeRandomPhrases("Вы загадали неправильное число!\n\u{1F914}","Я сдаюсь...\n\u{1F92F}", "Я сегодня не в форме...\n\u{1F62B}")}`;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
                                         
            answerField.innerText = `${threeRandomPhrases("Неужели это число ", "Кажется, знаю, вы загадали число ", "Я догадался! Это ведь число ")} 
            ${numToStr(answerNumber)}?`;
        }
    }
})

btnLess.addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){       

            answerField.innerText = `${threeRandomPhrases("Вы загадали неправильное число!\n\u{1F914}","Я сдаюсь...\n\u{1F92F}", "Я сегодня не в форме...\n\u{1F62B}")}`;
            gameRun = false;
        } else {
            maxValue = answerNumber - 1;
            answerNumber  = Math.ceil((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = `${threeRandomPhrases("Неужели это число ", "Кажется, знаю, вы загадали число ", "Я догадался! Это ведь число ")} 
            ${numToStr(answerNumber)}?`;
        }
    }
})

btnEqual.addEventListener('click', function () {
    if (gameRun){
        answerField.innerText = `${threeRandomPhrases("Я всегда угадываю\n\u{1F60E} ", "Обожаю играть с вами!\n\u{1F60A}", "Спасибо за интересную игру!\n\u{1F609}")}`;
        gameRun = false;
    }
})

