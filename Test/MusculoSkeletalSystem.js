const quiz_u55 = [
    {
        "q": "1. Бывают ли у вас боли в позвоночнике?",
        "a" : {
            "w": "Да",
            "t": "Нет",
            "c" : "Иногда",
        }
    },
     {
        "q": "2. Бывает ли у вас тугоподвижность, скованность суставов? ",
        "a" : {
            "w": "Да",
            "t": "Нет",
            "c" : "Иногда",
        }
    },
    {
        "q": "3. Есть ли у вас нарушение осанки (сколиоз, сутулость)?  ",
        "a" : {
            "w": "Да",
            "t": "Нет",
            "c" : "Иногда",
        }
    },
     {
        "q": "4. Испытываете ли вы боли в ногах при длительной ходьбе? ",
        "a" : {
            "w": "Да",
            "t": "Нет",
            "c" : "Иногда",
        }
    },
    {
        "q": "5. Бывает ли у вас похрустывание, щелчки в суставах рук и ног? ",
        "a" : {
            "w": "Да",
            "t": "Нет",
            "c" : "Иногда",
        }
    },
    {
        "q": "6. Есть ли у вас плоскостопие? ",
        "a" : {
            "w": "Да",
            "t": "Нет",
            "c" : "Иногда",
        }
    },
    {
        "q": "7. Испытываете ли вы усталость при длительном нахождении в положении стоя? ",
        "a" : {
            "w": "Да",
            "t": "Нет",
            "c" : "Иногда",
        }
    },
    {
        "q": "8. Бывают ли у вас боли в суставах в холодную погоду? ",
        "a" : {
            "w": "Да",
            "t": "Нет",
        }
    },
    {
        "q": "9. Есть ли у вас деформация суставов? ",
        "a" : {
            "w": "Да",
            "t": "Нет",
            "c" : "Иногда",
        }
    },
    {
        "q": "10. Бывает ли у вас покраснение и отечность суставов? ",
        "a" : {
            "w": "Да",
            "t": "Нет",
        }
    },
];

let answers_u55 = {
    "t" : {
        "point" : "0-5 баллов",
        "description" : "Норма (Система функционирует нормально. Поддерживайте ее в этом состоянии) ",
    } ,
    "c" : {
        "point" : "6-10 баллов",
        "description" : "Средняя нагрузка (Система функционирует со средней нагрузкой. Ей требуется помощь) ",
    } ,
    "w" : {
        "point" : "11-20 баллов ",
        "description" : "Перегрузка (ВНИМАНИЕ!!! Система значительно перегружена. Необходимо восстановление) ",
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
    