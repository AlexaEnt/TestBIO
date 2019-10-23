const quiz_u10 = [
    {
        "q": "1. Есть ли у вас лишний вес? ",
        "a" : {
            "w": "Да",
            "t": "Нет",
            "c" : "Иногда",
        }
    },
     {
        "q": "2. Для женщин: бывают ли у вас гормональные нарушения (расстройства менструального цикла)? ",
        "a" : {
            "w": "Да",
            "t": "Нет",
            "c" : "Иногда",
        }
    },
     {
        "q": "3.  Есть ли у вас увеличение щитовидной железы?* ",
        "a" : {
            "w": "Да",
            "t": "Нет",
            "c" : "Иногда",
        }
    },
    {
        "q": "4. Для женщин: есть ли у вас изменения в молочных железах?* ",
        "a" : {
            "w": "Да",
            "t": "Нет",
            "c" : "Иногда",
        }
    },
    {
        "q": "5. Был ли у вас повышенный сахар в крови?* ",
        "a" : {
            "w": "Да",
            "t": "Нет",
            "c" : "Иногда",
        }
    },
    {
        "q": "6. Есть ли у вас постоянная жажда? ",
        "a" : {
            "w": "Да",
            "t": "Нет",
            "c" : "Иногда",
        }
    },
    {
        "q": "7. Были ли у вас в анамнезе эндокринные заболевания? ",
        "a" : {
            "w": "Да",
            "t": "Нет",
            "c" : "Иногда",
        }
    },
    {
        "q": "8. Бывают ли у вас длительно незаживающие ранки на коже?",
        "a" : {
            "w": "Да",
            "t": "Нет",
            "c" : "Иногда",
        }
    },
    {
        "q": "9. Бывает ли у вас резкая потеря веса?* ",
        "a" : {
            "w": "Да",
            "t": "Нет",
            "c" : "Иногда",
        }
    },
    {
        "q": "10. Бывает ли у вас неотступный кожный зуд? ",
        "a" : {
            "w": "Да",
            "t": "Нет",
            "c" : "Иногда",
        }
    },
];

let answers_u10 = {
    "t" : {
        "point" : "0-15 баллов - Допустимо",
        "description" : " Норма (Система функционирует нормально. Поддерживайте ее в этом состоянии)",
    } ,
    "c" : {
        "point" : "0-15 баллов - Допустимо",
        "description" : "Средняя нагрузка (Система функционирует со средней нагрузкой. Ей требуется помощь)",
    } ,
    "w" : {
        "point" : "16-70 баллов - Недопустимо",
        "description" : "ВНИМАНИЕ!!! (Система значительно перегружена. Необходимо восстановление)",
    } 
};


window.onload = function () {
    document.getElementById('back').style.display="flex";

        let result = {};
        let step = 0;
        function showQuestion(questionNumber) {
            document.querySelector('.question').innerHTML = quiz_u10[step]['q'];
            let answer = '';
            for (let key in quiz_u10[step]['a']) {
                answer += `<li data-v='${key}' class="answer-variant">${quiz_u10[step]['a'][key]}</li>`;
            }
            document.querySelector('.answer').innerHTML = answer;
    
        }
    
        document.onclick = function (event) {
            event.stopPropagation();
            if (event.target.classList.contains('answer-variant') && step < quiz_u10.length) {
                // event.target.data
                if (result[event.target.dataset.v] != undefined) {
                    result[event.target.dataset.v]++;
                }
                else {
                    result[event.target.dataset.v] = 0;
                }
                step++;
                if (step == quiz_u10.length) {
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
            poi.innerHTML = answers_u10[key]['point'];
            document.querySelector('main').appendChild(poi);
    
            let div = document.createElement('div');
            div.classList.add('result');
            div.innerHTML = answers_u10[key]['description'];
            document.querySelector('main').appendChild(div);

            document.getElementById('Next').style.display="Flex";
        }
    
        showQuestion();
    };
    