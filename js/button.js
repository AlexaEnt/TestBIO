var buttontest = [
    {
        'b' : {
            "w11": '<a href="Test/CNS.html" id="button_test_w11" class="b_click" >1. Тест «Центральная нервная система»</a>',
            "q22" : '<a href="Test/Nerves.html" id="button_test_q22" class="b_click">2. Тест «В порядке ли у вас нервы?»</a>',
            "t33" : '<a href="Test/Hypoxia.html" id="button_test_t33" class="b_click" >3. Тест на гипоксию</a>',
            "y44" : '<a href="Test/Heart.html" id="button_test_y44" class="b_click" >4. Тест «Сердечно-сосудистая система»</a>',
            "u55" : '<a href="Test/Digestion.html" id="button_test_u55" class="b_click">5. Тест «Система органов пищеварения»</a>',
            "w66": '<a href="Test/Liver.html" id="button_test_w66" class="b_click">6. Тест «В порядке ли ваша печень?»</a>',
            "q77" : '<a href="Test/Products.html" id="button_test_q77" class="b_click">7. Тест «То ли мы едим? Вредные продукты»</a>',
            "t88" : '<a href="Test/Leather.html" id="button_test_t88" class="b_click">8. Тест «Выделительная система и кожа»</a>',
            "y99" : '<a href="Test/ReproductiveSystemMan.html" id="button_test_y99" class="b_click">9. Тест «Репродуктивная система (тест для мужчин)»</a>',
            "u10" : '<a href="Test/EndocrineSystem.html" id="button_test_u10" class="b_click">10. Тест «Эндокринная система»</a>',
            "t11" : '<a href="Test/HormonalSystem.html" id="button_test_t11" class="b_click">11. Тест «В порядке ли Ваша гормональная система?»</a>',
            "y12" : '<a href="Test/Hypothyroidism.html" id="button_test" class="b_click">12. Тест «Гипотиреоз»</a>',
            "u13" : '<a href="Test/Diabetes.html" id="button_test" class="b_click">13. Тест «Риск развития диабета»</a>',
            "y14" : '<a href="Test/MusculoSkeletalSystem.html" id="button_test" class="b_click">14. Тест «Костно-мышечная система»</>',
            "u15" : '<a href="Test/LymphaticSystem.html" id="button_test" class="b_click">15. Тест «Лимфатическая система»</a>',
            "u16" : '<a href="Test/TheImmuneSystem.html" id="button_test" class="b_click">16. Тест «Иммунная система»</a>',
            "u17" : '<a href="Test/PeripheralNervousSystem.html" id="button_test" class="b_click">17. Тест «Периферическая нервная система»</a>',
            "u18" : '<a href="Test/IodineLevel.html" id="button_test" class="b_click">18. Тест на определение уровня йода в организме</a>',
        }
    } ];


    
window.onload = function () {
    var step = 0;

    function showQuestion() {
        var vbutton = '';
        for (let key in buttontest[step]['b']) {
        vbutton += `${buttontest[step]['b'][key]}`;
        document.querySelector('#bottom').innerHTML = vbutton;
    }
}
showQuestion(step);
};

