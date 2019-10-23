const quiz_w66 = [
    {
        "q": "1. Ваш цвет лица оставляет желать лучшего? ",
        "a" : {
            "w": "Да",
            "t": "Нет",
        }
    },
     {
        "q": "2. В последнее время ваша кожа стала сухой или, напротив, чересчур жирной? ",
        "a" : {
            "w": "Да",
            "t": "Нет",
        }
    },
    {
        "q": "3. Белки ваших глаз с желтоватым оттенком? ",
        "a" : {
            "w": "Да",
            "t": "Нет",
        }
    },
     {
        "q": "4. Вас беспокоит тяжесть в правом подреберье? ",
        "a" : {
            "w": "Да",
            "t": "Нет",
            "c" : "Иногда",
        }
    },
    {
        "q": "5. На вашем лице появились сосудистые звездочки и / или пигментные пятна? ",
        "a" : {
            "w": "Да",
            "t": "Нет",
        }
    },
    {
        "q": "6. Ваши волосы быстро становятся жирными, появилась перхоть? ",
        "a" : {
            "w": "Да",
            "t": "Нет",
            "c" : "Иногда",
        }
    },
    {
        "q": "7. Вам не удается избавится от прыщей? ",
        "a" : {
            "w": "Да",
            "t": "Нет",
            "c" : "Иногда",
        }
    },
    {
        "q": "8. Вы плохо переносите жирную пищу? ",
        "a" : {
            "w": "Да",
            "t": "Нет",
            "c" : "Иногда",
        }
    },
    {
        "q": "9. У вас есть лишний вес и / или целлюлит? ",
        "a" : {
            "w": "Да",
            "t": "Нет",
        }
    },
    {
        "q": "10. Недавно вы проходили курс лекарственной терапии? ",
        "a" : {
            "w": "Да",
            "t": "Нет",
        }
    },
    {
        "q": "11. Ваш язык покрыт желтоватым налетом? ",
        "a" : {
            "w": "Да",
            "t": "Нет",
            "c" : "Иногда",
        }
    },
    {
        "q": "12. Вы быстро утомляетесь? ",
        "a" : {
            "w": "Да",
            "t": "Нет",
            "c" : "Иногда",
        }
    },
    {
        "q": "13. У вас плохой аппетит? ",
        "a" : {
            "w": "Да",
            "t": "Нет",
            "c" : "Иногда",
        }
    },
    {
        "q": "14. Во рту чувствуется привкус горечи?",
        "a" : {
            "w": "Да",
            "t": "Нет",
            "c" : "Иногда",
        }
    },
    {
        "q": "15. Вы склонны к аллергии? ",
        "a" : {
            "w": "Да",
            "t": "Нет",
        }
    },
];

let answers_w66 = {
    "t" : {
        "point" : "0-5 баллов",
        "description" : " Норма (Система функционирует нормально. Поддерживайте ее в этом состоянии)",
    } ,
    "c" : {
        "point" : "6-9 баллов",
        "description" : "Средняя нагрузка (Система функционирует со средней нагрузкой. Ей требуется помощь)",
    } ,
    "w" : {
        "point" : "10-15 баллов",
        "description" : "Перегрузка (ВНИМАНИЕ!!! Система значительно перегружена. Необходимо восстановление)",
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

            document.getElementById('Next').style.display="Flex";
        }
    
        showQuestion();
    };
    