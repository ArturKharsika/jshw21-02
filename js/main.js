let tests = [
    { qst: '2+2=4?', ans: true },
    { qst: '2*2=5?', ans: false },
    { qst: '2/2=2?', ans: false },
];

while (passtest = confirm('Желаете пройти тест?')) {
    let correctAnswers=0;
    for (let i = 0; i < tests.length; i++) {
        let userAnswer = confirm(tests[i].qst);
        if (userAnswer == tests[i].ans) {
            correctAnswers++;
        } else {
            correctAnswers--;
        }
    }

    if (correctAnswers > 0) {
        alert('Тест пройден! Правильных ответов:' + ' ' + correctAnswers);
        let tryAgain = confirm('Желаете пройти тест ещё раз?');
        if (tryAgain == false) {
            break;
        } else {

        }
    } else {
        alert('Тест не пройден. Слишком много неправильных ответов' + ' (' + correctAnswers + ')');
        tryAgain = confirm('Желаете пройти тест ещё раз?');
        if (tryAgain == false) {
            break;
        } else {

        }

    }
}