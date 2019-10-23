const quiz_w11 = [
    {
        "q": "Раздражает ли вас: 1. Смятая страница газеты, которую вы хотите прочитать? ",
        "a" : {
            "w": "Да",
            "t": "Нет",
            "c" : "Иногда",
        }
    },
     {
        "q": "Раздражает ли вас: 2. Женщина в возрасте, одетая как молоденькая девушка? ",
        "a" : {
            "w": "Да",
            "t": "Нет",
            "c" : "Иногда",
        }
    },
     {
        "q": "Раздражает ли вас: 3. Чрезмерная близость собеседника? ",
        "a" : {
            "w": "Да",
            "t": "Нет",
            "c" : "Иногда",
        }
    },
    {
        "q": "Раздражает ли вас: 4. Курящая на улице женщина? ",
        "a" : {
            "w": "Да",
            "t": "Нет",
            "c" : "Иногда",
        }
    },
    {
        "q": "Раздражает ли вас: 5. Когда какой-нибудь человек кашляет в вашу сторону? ",
        "a" : {
            "w": "Да",
            "t": "Нет",
            "c" : "Иногда",
        }
    },
    {
        "q": "Раздражает ли вас: 6. Когда кто-то грызет ногти? ",
        "a" : {
            "w": "Да",
            "t": "Нет",
            "c" : "Иногда",
        }
    },
    {
        "q": "Раздражает ли вас: 7. Когда кто-то смеется без причины? ",
        "a" : {
            "w": "Да",
            "t": "Нет",
            "c" : "Иногда",
        }
    },
    {
        "q": "Раздражает ли вас: 8. Когда кто-то пытается учить вас, что и как нужно делать? ",
        "a" : {
            "w": "Да",
            "t": "Нет",
            "c" : "Иногда",
        }
    },
    {
        "q": "Раздражает ли вас: 9. Когда любимый человек постоянно опаздывает? ",
        "a" : {
            "w": "Да",
            "t": "Нет",
            "c" : "Иногда",
        }
    },
    {
        "q": "Раздражает ли вас: 10. Когда в кинотеатре ваш сосед все время вертится и комментирует сюжет фильма? ",
        "a" : {
            "w": "Да",
            "t": "Нет",
            "c" : "Иногда",
        }
    },

    {
        "q": "Раздражает ли вас: 11. Когда вам пересказывают сюжет книги, которую вы собираетесь прочесть? ",
        "a" : {
            "w": "Да",
            "t": "Нет",
            "c" : "Иногда",
        }
    },
    {
        "q": "Раздражает ли вас: 12. Когда вам дарят ненужные предметы? ",
        "a" : {
            "w": "Да",
            "t": "Нет",
            "c" : "Иногда",
        }
    },
    {
        "q": "Раздражает ли вас: 13. Громкий разговор в общественном транспорте? ",
        "a" : {
            "w": "Да",
            "t": "Нет",
            "c" : "Иногда",
        }
    },
    {
        "q": "Раздражает ли вас: 14. Слишком сильный запах духов?",
        "a" : {
            "w": "Да",
            "t": "Нет",
            "c" : "Иногда",
        }
    },
    {
        "q": "Раздражает ли вас: 15. Человек, который жестикулирует во время разговора? ",
        "a" : {
            "w": "Да",
            "t": "Нет",
            "c" : "Иногда",
        }
    },
];

let answers_w11 = {
    "t" : {
        "point" : "0-5 баллов",
        "description" : " Норма (Система функционирует нормально. Поддерживайте ее в этом состоянии)",
    } ,
    "c" : {
        "point" : "7-14 баллов",
        "description" : "Средняя нагрузка (Система функционирует со средней нагрузкой. Ей требуется помощь)",
    } ,
    "w" : {
        "point" : "15-30 баллов ",
        "description" : "Перегрузка (ВНИМАНИЕ!!! Система значительно перегружена. Необходимо восстановление) ",
    } 
};


window.onload = function () {
    document.getElementById('back').style.display="flex";

        let result = {};
        let step = 0;
        function showQuestion(questionNumber) {
            document.querySelector('.question').innerHTML = quiz_w11[step]['q'];
            let answer = '';
            for (let key in quiz_w11[step]['a']) {
                answer += `<li data-v='${key}' class="answer-variant">${quiz_w11[step]['a'][key]}</li>`;
            }
            document.querySelector('.answer').innerHTML = answer;
    
        }
    
        document.onclick = function (event) {
            event.stopPropagation();
            if (event.target.classList.contains('answer-variant') && step < quiz_w11.length) {
                // event.target.data
                if (result[event.target.dataset.v] != undefined) {
                    result[event.target.dataset.v]++;
                }
                else {
                    result[event.target.dataset.v] = 0;
                }
                step++;
                if (step == quiz_w11.length) {
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
            poi.innerHTML = answers_w11[key]['point'];
            document.querySelector('main').appendChild(poi);
    
            let div = document.createElement('div');
            div.classList.add('result');
            div.innerHTML = answers_w11[key]['description'];
            document.querySelector('main').appendChild(div);

            document.getElementById('Next').style.display="Flex";
        }
    
        showQuestion();
    };
    