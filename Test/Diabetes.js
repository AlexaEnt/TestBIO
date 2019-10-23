const quiz_u55 = [
    {
        "q": "1. У вас средний возраст (35-45 лет)? ",
        "a" : {
            "w": "Да",
            "t": "Нет",
        }
    },
     {
        "q": "2. Есть ли у вас родственники, страдающие диабетом? ",
        "a" : {
            "w": "Да",
            "t": "Нет",
        }
    },
    {
        "q": "3. Вы физически неактивны? ",
        "a" : {
            "w": "Да",
            "t": "Нет",
            "c" : "Иногда",
        }
    },
     {
        "q": "4. Вы тучны, у вас растет живот",
        "a" : {
            "w": "Да",
            "t": "Нет",
        }
    },
    {
        "q": "5. Вы курите? ",
        "a" : {
            "w": "Да",
            "t": "Нет",
            "c" : "Иногда",
        }
    },
    {
        "q": "6. У вас высокое артериальное давление?",
        "a" : {
            "w": "Да",
            "t": "Нет",
            "c" : "Иногда",
        }
    },
    {
        "q": "7. Вы употребляете слишком много сладкого?",
        "a" : {
            "w": "Да",
            "t": "Нет",
            "c" : "Иногда",
        }
    },
    {
        "q": "8. Вы употребляете алкоголь более чем 2 раза в неделю? ",
        "a" : {
            "w": "Да",
            "t": "Нет",
            "c" : "Иногда",
        }
    },
    {
        "q": "9. У вас повышенный уровень холестерина? ",
        "a" : {
            "w": "Да",
            "t": "Нет",
        }
    },
    {
        "q": "10. Вы подвергаетесь внешним стрессовым воздействиям? ",
        "a" : {
            "w": "Да",
            "t": "Нет",
            "c" : "Иногда",
        }
    },
    {
        "q": "11. Вы слишком часто ходите в туалет, особенно ночью после того, как легли спать? ",
        "a" : {
            "w": "Да",
            "t": "Нет",
        }
    },
    {
        "q": "12. Вам кажется, что вы чувствуете постоянную жажду? ",
        "a" : {
            "w": "Да",
            "t": "Нет",
            "c" : "Иногда",
        }
    },
    {
        "q": "13. Вы чувствуете очень сильный голод, пока не съедите что-нибудь? ",
        "a" : {
            "w": "Да",
            "t": "Нет",
            "c" : "Иногда",
        }
    },
    {
        "q": "14. Вы недавно потеряли вес без каких-либо причин? ",
        "a" : {
            "w": "Да",
            "t": "Нет",
            "c" : "Иногда",
        }
    },
    {
        "q": "15. У вас бывают случаи расплывчатого видения предметов? ",
        "a" : {
            "w": "Да",
            "t": "Нет",
            "c" : "Иногда",
        }
    },
];

let answers_u55 = {
    "t" : {
        "point" : "0-2 баллов",
        "description" : "Норма (Минимальный риск) ",
    } ,
    "c" : {
        "point" : "4-9 баллов ",
        "description" : " Средняя нагрузка (Средний риск) ",
    } ,
    "w" : {
        "point" : "6-15 баллов",
        "description" : "Перегрузка (Высокий риск) ",
    } 
};


window.onload = function () {
    document.getElementById('back').style.display="flex";

        let result = {};
        let step = 0;
        function showQuestion(questionNumber) {
            document.querySelector('.question').innerHTML = quiz_u55[step]['q'];
            let answer = '';
            for (let key in quiz_u55[step]['a']) {
                answer += `<li data-v='${key}' class="answer-variant">${quiz_u55[step]['a'][key]}</li>`;
            }
            document.querySelector('.answer').innerHTML = answer;
    
        }
    
        document.onclick = function (event) {
            event.stopPropagation();
            if (event.target.classList.contains('answer-variant') && step < quiz_u55.length) {
                // event.target.data
                if (result[event.target.dataset.v] != undefined) {
                    result[event.target.dataset.v]++;
                }
                else {
                    result[event.target.dataset.v] = 0;
                }
                step++;
                if (step == quiz_u55.length) {
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
            poi.innerHTML = answers_u55[key]['point'];
            document.querySelector('main').appendChild(poi);
    
            let div = document.createElement('div');
            div.classList.add('result');
            div.innerHTML = answers_u55[key]['description'];
            document.querySelector('main').appendChild(div);

            document.getElementById('Next').style.display="Flex";
        }
    
        showQuestion();
    };
    