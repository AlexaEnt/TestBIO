const quiz_w66 = [
    {
        "q": "Вас беспокоит: 1. Общая слабость, снижение работоспособности",
        "a" : {
            "w": "Да",
            "t": "Нет",
            "c" : "Иногда",
        }
    },
     {
        "q": "Вас беспокоит: 2. Сонливость ",
        "a" : {
            "w": "Да",
            "t": "Нет",
            "c" : "Иногда",
        }
    },
    {
        "q": "Вас беспокоит: 3. Депрессия, частое подавленное настроение ",
        "a" : {
            "w": "Да",
            "t": "Нет",
            "c" : "Иногда",
        }
    },
     {
        "q": "Вас беспокоит: 4.Снижение памяти ",
        "a" : {
            "w": "Да",
            "t": "Нет",
            "c" : "Иногда",
        }
    },
    {
        "q": "Вас беспокоит: 5. Зябкость, озноб, холодная кожа ",
        "a" : {
            "w": "Да",
            "t": "Нет",
            "c" : "Иногда",
        }
    },
    {
        "q": "Вас беспокоит: 6. Снижение полового влечения ",
        "a" : {
            "w": "Да",
            "t": "Нет",
            "c" : "Иногда",
        }
    },
    {
        "q": "Вас беспокоит: 7. Усиленное выпадение волос ",
        "a" : {
            "w": "Да",
            "t": "Нет",
        }
    },
    {
        "q": "Вас беспокоит: 8. Сухость кожи ",
        "a" : {
            "w": "Да",
            "t": "Нет",
        }
    },
    {
        "q": "Вас беспокоит: 9.Отёчность (одутловатость) вокруг глаз ",
        "a" : {
            "w": "Да",
            "t": "Нет",
            "c" : "Иногда",
        }
    },
    {
        "q": "Вас беспокоит: 10.Беспричинная прибавка веса ",
        "a" : {
            "w": "Да",
            "t": "Нет",
        }
    },
    {
        "q": "Вас беспокоит: 11.Охриплость голоса ",
        "a" : {
            "w": "Да",
            "t": "Нет",
            "c" : "Иногда",
        }
    },
    {
        "q": "Вас беспокоит: 12.Мышечные судороги ",
        "a" : {
            "w": "Да",
            "t": "Нет",
            "c" : "Иногда",
        }
    },
    {
        "q": "Вас беспокоит: 13.Снижение слуха ",
        "a" : {
            "w": "Да",
            "t": "Нет",
            "c" : "Иногда",
        }
    },
    {
        "q": "Вас беспокоит: 14.Запоры ",
        "a" : {
            "w": "Да",
            "t": "Нет",
            "c" : "Иногда",
        }
    },
    {
        "q": "Вас беспокоит: 15.Нарушение эрекции ",
        "a" : {
            "w": "Да",
            "t": "Нет",
            "c" : "Иногда",
        }
    },
    {
        "q": "Вас беспокоит: 16.Нарушение (нерегулярность) менструального цикла ",
        "a" : {
            "w": "Да",
            "t": "Нет",
        }
    },
    {
        "q": "Вас беспокоит: 17.Бесплодие (отсутствие беременности в течении года отсутствия контрацепции)",
        "a" : {
            "w": "Да",
            "t": "Нет",
        }
    },
];

let answers_w66 = {
    "t" : {
        "point" : "0-3 баллов",
        "description" : " Норма (Система функционирует нормально. Поддерживайте ее в этом состоянии)",
        'text' : "Для оценки функции щитовидной железы необходимо определение уровня ТТГ (тиреотропного гормона)в крови, направление на которое может дать эндокринолог или врач другой специальности.",
    } ,
    "c" : {
        "point" : "3-5 баллов",
        "description" : "Средняя нагрузка (Система функционирует со средней нагрузкой. Ей требуется помощь)",
        'text' : "Для оценки функции щитовидной железы необходимо определение уровня ТТГ (тиреотропного гормона)в крови, направление на которое может дать эндокринолог или врач другой специальности.",

    } ,
    "w" : {
        "point" : "15-17 баллов",
        "description" : "Перегрузка (ВНИМАНИЕ!!! Система значительно перегружена. Необходимо восстановление)",
        'text' : "Для оценки функции щитовидной железы необходимо определение уровня ТТГ (тиреотропного гормона)в крови, направление на которое может дать эндокринолог или врач другой специальности.",
    } 
};


window.onload = function () {
    document.getElementById('back').style.display="flex";

        let result = {};
        let step = 0;
        function showQuestion(questionNumber) {
            document.querySelector('.question').innerHTML = quiz_w66[step]['q'];
            let answer = '';
            for (let key in quiz_w66[step]['a']) {
                answer += `<li data-v='${key}' class="answer-variant">${quiz_w66[step]['a'][key]}</li>`;
            }
            document.querySelector('.answer').innerHTML = answer;
    
        }
    
        document.onclick = function (event) {
            event.stopPropagation();
            if (event.target.classList.contains('answer-variant') && step < quiz_w66.length) {
                // event.target.data
                if (result[event.target.dataset.v] != undefined) {
                    result[event.target.dataset.v]++;
                }
                else {
                    result[event.target.dataset.v] = 0;
                }
                step++;
                if (step == quiz_w66.length) {
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
            poi.innerHTML = answers_w66[key]['point'];
            document.querySelector('main').appendChild(poi);
    
            let div = document.createElement('div');
            div.classList.add('result');
            div.innerHTML = answers_w66[key]['description'];
            document.querySelector('main').appendChild(div);

            let divv = document.createElement('div');
            divv.classList.add('result');
            divv.innerHTML = answers_w66[key]['text'];
            document.querySelector('main').appendChild(divv);


            document.getElementById('Next').style.display="Flex";
        }
    
        showQuestion();
    };
    