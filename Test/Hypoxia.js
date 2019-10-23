const quiz_t33 = [
    {
        "q": "1. Вы быстро устаете?",
        "a" : {
            "w": "Да",
            "t": "Нет",
            "c" : "Иногда",
        }
    },
     {
        "q": "2. Вас беспокоят периодические головные боли? ",
        "a" : {
            "w": "Да",
            "t": "Нет",
            "c" : "Иногда",
        }
    },
     {
        "q": "3. Вы испытываете волнение и страх без причины? ",
        "a" : {
            "w": "Да",
            "t": "Нет",
            "c" : "Иногда",
        }
    },
    {
        "q": "4. У вас устают ноги при ходьбе? ",
        "a" : {
            "w": "Да",
            "t": "Нет",
            "c" : "Иногда",
        }
    },
    {
        "q": "5. Вас беспокоит одышка при нагрузке? ",
        "a" : {
            "w": "Да",
            "t": "Нет",
            "c" : "Иногда",
        }
    },
    {
        "q": "6. Вас беспокоят периодические боли в сердце (давящего и снижающего характера)? ",
        "a" : {
            "w": "Да",
            "t": "Нет",
            "c" : "Иногда",
        }
    },
    {
        "q": "7. Вас беспокоит возрастное снижение зрения? ",
        "a" : {
            "w": "Да",
            "t": "Нет",
            "c" : "Иногда",
        }
    },
    {
        "q": "8. Вы плохо переносите физическую нагрузку? ",
        "a" : {
            "w": "Да",
            "t": "Нет",
            "c" : "Иногда",
        }
    },
    {
        "q": "9. У Вас мерзнут руки и ноги? ",
        "a" : {
            "w": "Да",
            "t": "Нет",
            "c" : "Иногда",
        }
    },
    {
        "q": "10. Вы ощущаете мелькание «мушек» перед глазами? ",
        "a" : {
            "w": "Да",
            "t": "Нет",
            "c" : "Иногда",
        }
    },
    {
        "q": "11. Вы отмечаете покалывание в пальцах рук и ног? ",
        "a" : {
            "w": "Да",
            "t": "Нет",
            "c" : "Иногда",
        }
    },
        "q": "12. Вас беспокоит слабость, потеря или снижение энергетики? ",
        "a" : {
            "w": "Да",
            "t": "Нет",
            "c" : "Иногда",
        }
    },
    {
        "q": "13. Вам все время хочется спать? ",
        "a" : {
            "w": "Да",
            "t": "Нет",
            "c" : "Иногда",
        }
    },
];

let answers_t33 = {
    "t" : {
        "point" : "0-6 баллов",
        "description" : " Норма (Система функционирует нормально. Поддерживайте ее в этом состоянии)",
    } ,
    "c" : {
        "point" : "7-15 баллов",
        "description" : "Средняя нагрузка (Система функционирует со средней нагрузкой. Ей требуется помощь)",
    } ,
    "w" : {
        "point" : "16-26 баллов",
        "description" : " ВНИМАНИЕ!!! (Система значительно перегружена. Необходимо восстановление)",
    } 
};


window.onload = function () {
    document.getElementById('back').style.display="flex";

        let result = {};
        let step = 0;
        function showQuestion(questionNumber) {
            document.querySelector('.question').innerHTML = quiz_t33[step]['q'];
            let answer = '';
            for (let key in quiz_t33[step]['a']) {
                answer += `<li data-v='${key}' class="answer-variant">${quiz_t33[step]['a'][key]}</li>`;
            }
            document.querySelector('.answer').innerHTML = answer;
    
        }
    
        document.onclick = function (event) {
            event.stopPropagation();
            if (event.target.classList.contains('answer-variant') && step < quiz_t33.length) {
                // event.target.data
                if (result[event.target.dataset.v] != undefined) {
                    result[event.target.dataset.v]++;
                }
                else {
                    result[event.target.dataset.v] = 0;
                }
                step++;
                if (step == quiz_t33.length) {
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
            poi.innerHTML = answers_t33[key]['point'];
            document.querySelector('main').appendChild(poi);
    
            let div = document.createElement('div');
            div.classList.add('result');
            div.innerHTML = answers_t33[key]['description'];
            document.querySelector('main').appendChild(div);

            document.getElementById('Next').style.display="Flex";
        }
    
        showQuestion();
    };
    