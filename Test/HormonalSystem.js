const quiz_t11 = [
    {
        "q": "1. Часто ли у Вас бывает депрессия? ",
        "a" : {
            "w": "Да",
            "t": "Нет",
        }
    },
     {
        "q": "2. Страдаете ли Вы повышенной чувствительностью к боли (например, при небольших ушибах или ранах)? ",
        "a" : {
            "w": "Да",
            "t": "Нет",
        }
    },
     {
        "q": "3. Часто ли Вы в течение дня употребляете сладости? ",
        "a" : {
            "w": "Да",
            "t": "Нет",
        }
    },
    {
        "q": "4. Часто ли у Вас возникает ощущение необъяснимой усталости? ",
        "a" : {
            "w": "Да",
            "t": "Нет",
        }
    },
    {
        "q": "5. Тяжело ли Вам спокойно посидеть и о чем-нибудь подумать? ",
        "a" : {
            "w": "Да",
            "t": "Нет",
        }
    },
    {
        "q": "6. Случается ли у Вас временами непроизвольное мочеиспускание? ",
        "a" : {
            "w": "Да",
            "t": "Нет",
        }
    },
    {
        "q": "7. Часто ли Вы становитесь агрессивным? ",
        "a" : {
            "w": "Да",
            "t": "Нет",
        }
    },
    {
        "q": "8. Интересует ли Вас прошлое больше, чем настоящее? ",
        "a" : {
            "w": "Да",
            "t": "Нет",
        }
    },
    {
        "q": "9. Чувствуете ли Вы себя неспособным радоваться (например, подарку, предстоящему отпуску)? ",
        "a" : {
            "w": "Да",
            "t": "Нет",
        }
    },
];

let answers_t11 = {
    "t" : {
        "point" : "0-3 баллов",
        "description" : " Норма (Организм справится) ",
    } ,
    "w" : {
        "point" : "4-9 баллов ",
        "description" : "Перегрузка (ВНИМАНИЕ!!! Система значительно перегружена. Необходимо восстановление) ",
    } 
};


window.onload = function () {
    document.getElementById('back').style.display="flex";

        let result = {};
        let step = 0;
        function showQuestion(questionNumber) {
            document.querySelector('.question').innerHTML = quiz_t11[step]['q'];
            let answer = '';
            for (let key in quiz_t11[step]['a']) {
                answer += `<li data-v='${key}' class="answer-variant">${quiz_t11[step]['a'][key]}</li>`;
            }
            document.querySelector('.answer').innerHTML = answer;
    
        }
    
        document.onclick = function (event) {
            event.stopPropagation();
            if (event.target.classList.contains('answer-variant') && step < quiz_t11.length) {
                // event.target.data
                if (result[event.target.dataset.v] != undefined) {
                    result[event.target.dataset.v]++;
                }
                else {
                    result[event.target.dataset.v] = 0;
                }
                step++;
                if (step == quiz_t11.length) {
                    document.querySelector('.question').remove();
                    document.querySelector('.answer').remove();
                    showResult();
                }
                else {
                    showQuestion();
                }
            }
            if (event.target.classList.contains('reload-button')) {
                location.reload();
            }
        }
    
        function showResult() {
            let key = Object.keys(result).reduce(function (a, b) { return result[a] > result[b] ? a : b });
    
            let poi = document.createElement('p');
            poi.classList.add('p');
            poi.innerHTML = answers_t11[key]['point'];
            document.querySelector('main').appendChild(poi);
    
            let div = document.createElement('div');
            div.classList.add('result');
            div.innerHTML = answers_t11[key]['description'];
            document.querySelector('main').appendChild(div);

            document.getElementById('Next').style.display="Flex";
        }
    
        showQuestion();
    };
    