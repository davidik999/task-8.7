let minValue = parseInt(prompt("Минимальное знание числа для игры", "0"));
let maxValue = parseInt(prompt("Максимальное знание числа для игры", "100"));
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
  `Вы загадали число ${answerNumber}?`,
  `Ну наверное это число ${answerNumber}?`,
  `И как я всегда угадываю число ${answerNumber}?`,
];
const answerPhrase = (max) => {
  return Math.floor(Math.random() * max);
};
const random2 = answerPhrase(question.length);
answerField.innerText = question[random2];

document.getElementById("btnRetry").addEventListener("click", function () {
  minValue = parseInt(prompt("Минимальное знание числа для игры", "0"));
  maxValue = parseInt(prompt("Максимальное знание числа для игры", "100"));
  alert(
    `Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`
  );
  answerNumber = Math.floor((minValue + maxValue) / 2);
  orderNumber = 1;
  gameRun = true;
  answerField.innerText = `Вы загадали число ${answerNumber}?`;
  minValue = 0;
  maxValue = 100;
  orderNumber = 0;
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
      answerField.innerText = `Вы загадали число ${answerNumber}?`;
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
      answerField.innerText = `Вы загадали число ${answerNumber}?`;
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
});
