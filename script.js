let minValue = parseInt(prompt("Минимальное знание числа для игры", "0"));
function rejection (x) {
  let res = parseInt(x);
  if (isNaN(res)) {
    return 0;
  }
  return res;
}
minValue = rejection(minValue);

minValue = minValue < -999 ? -999 : minValue > 999 ? (minValue = 999) : minValue;

let maxValue = parseInt(prompt("Максимальное знание числа для игры", "100"));

function rejection2 (x) {
  let res = parseInt(x);
  if (isNaN(res)) {
    return 0;
  }
  return res;
}
maxValue = rejection(maxValue);
maxValue = maxValue > 999 ? 999 : maxValue < -999 ? (maxValue = -999) : maxValue;
if(maxValue < minValue){
  let temp = minValue;
  minValue = maxValue;
  maxValue = temp;
}
alert(
  `Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`
);
let answerNumber = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById("orderNumberField");
const answerField = document.getElementById("answerField");

orderNumberField.innerText = orderNumber;
const question = [
  `Вы загадали число ${parseNumber(answerNumber)}?`,
  `Ну наверное это число ${parseNumber(answerNumber)}?`,
  `И как я всегда угадываю число ${parseNumber(answerNumber)}?`,
];
const answerPhrase = (max) => {
  return Math.floor(Math.random() * max);
};
const random2 = answerPhrase(question.length);
answerField.innerText = question[random2];

document.getElementById("btnRetry").addEventListener("click", function () {
  
  minValue = parseInt(prompt("Минимальное знание числа для игры", "0"));
  maxValue = parseInt(prompt("Максимальное знание числа для игры", "100"));
  minValue = rejection(minValue);
  maxValue = rejection(maxValue);
  minValue = minValue < -999 ? -999 : minValue > 999 ? (minValue = 999) : minValue;
  maxValue =  maxValue > 999 ? 999 : maxValue < -999 ? (maxValue = -999) : maxValue;
  if(maxValue < minValue){
    let temp = minValue;
    minValue = maxValue;
    maxValue = temp;
  }
  alert(
    `Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`
  );
  answerNumber = Math.floor((minValue + maxValue) / 2);
  orderNumber = 1;
  gameRun = true;
  answerField.innerText = `Вы загадали число ${parseNumber(answerNumber)}?`;
});

document.getElementById("btnLess").addEventListener("click", function () {
  if (gameRun) {
    if (minValue === maxValue) {
      const phraseRandom = Math.round(Math.random());
      const answerPhrase =
        phraseRandom === 1
          ? `Вы загадали неправильное число!\n\u{1F914}`
          : `Я сдаюсь..\n\u{1F92F}`;

      answerField.innerText = answerPhrase;
      gameRun = false;
    } else {
      maxValue = answerNumber - 1;
      answerNumber = Math.round((minValue + maxValue) / 2);
      orderNumber++;
      orderNumberField.innerText = orderNumber;
      answerField.innerText = `Вы загадали число ${parseNumber(answerNumber)}?`;
    }
  }
});

document.getElementById("btnOver").addEventListener("click", function () {
  if (gameRun) {
    if (minValue === maxValue) {
      const phraseRandom = Math.round(Math.random());
      const answerPhrase =
        phraseRandom === 1
          ? `Вы загадали неправильное число!\n\u{1F914}`
          : `Я сдаюсь..\n\u{1F92F}`;

      answerField.innerText = answerPhrase;
      gameRun = false;
    } else {
      minValue = answerNumber + 1;
      answerNumber = Math.floor((minValue + maxValue) / 2);
      orderNumber++;
      orderNumberField.innerText = orderNumber;
      answerField.innerText = `Вы загадали число ${parseNumber(answerNumber)}?`;
    }
  }
});

document.getElementById("btnEqual").addEventListener("click", function () {
  const numbers = [
    `А ты сомневался во мне ?\n\u{1F60F}`,
    `Сыграем еще раз ?\n\u{1F60E}`,
    `Абра Кадабра \n\u{1FA84}`,
  ];
  const answerPhrase = (max) => {
    return Math.floor(Math.random() * max);
  };
  const random1 = answerPhrase(numbers.length);
  answerField.innerText = numbers[random1];
  gameRun = false;
});
function innerText(number = "") {
  if (number == "") {
    answerField.innerText = `${answerPhrase()}`;
  } else {
    answerField.innerHTML = `${answerField.innerText()}\n<span class='number'>${number}</span>?`;
  }
}



function parseNumber(number){

    const
        hun = ['сто', 'двести', 'триста', 'четыреста', 'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот'],
        doz = ['десять', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'],
        units = ['ноль', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять'],
        fdoz = ['одиннацать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'];
   
    let str = number.toString(), out = '';

    if(number < 0){
      str = str.substring(1);
    }

    if(str.length == 1) return units[number];
    
    else if(str.length == 2){
      
        if(str == '10') out = doz[0];
     
        else if(str[0] == 1) out = fdoz[parseInt(str[1])-1];
      
        else out = (doz[parseInt(str[0])-1] + ((str[1]!='0')?(' ' + units[parseInt(str[1])]):''));
    }
 
    else if(str.length == 3){
        if(parseInt(str.substring(1)) > 10 && parseInt(str.substring(1)) < 20)
          out = hun[parseInt(str[0])-1] + ' ' + fdoz[parseInt(str[2])-1];
        else
          out = (hun[parseInt(str[0])-1] + ((str[1]!='0')?(' ' + doz[parseInt(str[1])-1]):'') + ((str[2]!='0')?(' ' + units[parseInt(str[2])]):''));
    }
    
    if(number < 0){
      out = "минус " + out;
    } if (out.length > 20) return number;
    return out;
    
  
}


  


