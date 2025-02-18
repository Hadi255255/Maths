document.body.style.visibility = 'hidden';
setTimeout(() => {
    window.onload();
}, 80);
var body_1 = document.getElementsByClassName("body_1")[0];
var title = document.getElementById('title');
let start = document.getElementById('start');
let start_errors = document.getElementById('start_errors');
let result = document.getElementById('result');
let result2 = document.getElementById('result2');
let audio = document.getElementsByClassName('audio');
start_errors.disabled = true;
let m2 = document.getElementById('m2');
let choose = document.getElementsByClassName('choose')[0];
let choose_div = document.getElementsByClassName('choose_div');
let table = document.getElementsByClassName('table');
let numbers_input = document.getElementsByClassName('numbers_input');
let newExam_errors = document.getElementById('newExam_errors');
let checkedlist = [];
let count1 = [];
let count2 = [];
let answer_eng = ''; let level;
let i = 0; let j = 0; let count = 0; let mark = 0; let prevent = 0; let prevent_mark = 0;
let mark_arabic = ''; let count_errors_arabic = '';
let num1_1; let num2_2; let num1_1_error; let num2_2_error; let eng_num1; let eng_num2;
let arabic_choose = document.getElementById('arabic_choose');
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩", '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '', '.'];
let count_errors = 0; let errors_num1 = []; let errors_num2 = []; let mode = 'cycle_1';
let errors_num1_cycle = []; let errors_num2_cycle = [];
var keys = {};
var img_right = document.getElementsByClassName('img_right');
var minutes = 0;
var newExam_mode = 0;
let random1 = 1;
result2.style.animation = "result2_a 1s linear, result2_a2 4s linear";
var symbol_1 = document.getElementsByClassName('symbol')[0];
var symbol_2 = document.getElementsByClassName('symbol')[1];
var press = document.getElementsByClassName('press');
var p_all = document.getElementsByTagName('p');
var span = document.getElementsByTagName('span');
//______________________speed
var move = document.getElementsByClassName("move")[0];
var speed = document.getElementsByClassName("speed")[0];
var speed_form = document.getElementsByClassName("speed_form")[0];
var speed_level = document.getElementsByClassName("speed_level")[0];
var speed_float = document.getElementsByClassName("speed_float")[0];

var plus1 = document.getElementById('plus1');
var minus1 = document.getElementById('minus1');
var num1_saved;
var num2_saved;
var general_arabic = document.getElementById('general_arabic');
var main_css = document.getElementById('main_css');
var five_div = document.getElementsByClassName('five')[0];
var sum_div = document.getElementsByClassName('sum')[0];
var sum = document.getElementById('sum');
var plus1 = document.getElementById('plus1');
var plus2 = document.getElementById('plus2');
var minus1 = document.getElementById('minus1');
var minus2 = document.getElementById('minus2');
var num_input = '';
num1.onfocus = function () {
    num_input = 1;
}
num2.onfocus = function () {
    num_input = 2;
};
//___________________________ <a> ___________________________
var page = '';
if (localStorage.page) { page = localStorage.page }
else { page = 'home'; localStorage.page = 'home' };

var multiple_arabic = document.getElementById('multiple_arabic');
var division_arabic = document.getElementById('division_arabic');
var multiple = document.getElementById('multiple');
var light_mul = document.getElementById('light_mul');
var light_div = document.getElementById('light_div');

var page = '';
if (localStorage.page) { page = localStorage.page }
else { page = 'home'; localStorage.page = 'home' };

var home_arabic = document.getElementById('home_arabic');
var side_container = document.getElementsByClassName('side_container')[0];
var paragraph1 = document.getElementsByClassName('paragraph1')[0];
var multiple = document.getElementById('multiple');
var light_mul = document.getElementById('light_mul');
var light_div = document.getElementById('light_div');
var light_gen = document.getElementById('light_gen');
var light = document.getElementsByClassName('light')[0];
var red = document.getElementsByClassName('red')[0];
var title_p = document.getElementsByClassName('title_p');

division_arabic.onclick = function () {
    document.body.style.display = 'none';
    home_arabic_css.href = '';
    home_english_css.href = '';
    help_english_css.href = '';
    plus2.style.display = minus2.style.display =
        side_container.style.display = sum_div.style.display = 'none';
    paragraph1.style.display = 'none';
    body_1.style.display = 'grid';
    speed_float.style.display = 'block';
    answer.readOnly = false;
    num1.readOnly = num2.readOnly = true;
    if (page == 'g') { m1.onclick() };
    page = 'd';
    localStorage.page = 'd';
    multiple.innerHTML = '÷';
    multiple_arabic.classList.remove("light");
    general_arabic.classList.remove("light");
    division_arabic.classList.add("light");
    help_arabic.classList.remove("light");
    home_arabic.classList.remove("light");
    title.innerHTML = "Division Tables";
    document.title = "Division tables in English"
    main_css.href = "../css/multiple_english.css";
    // img_right[0].style.display = 'none';
    section_buttons.classList.remove('wrong', 'correct');
    setTimeout(() => {
        window.onload();
    }, 20);
};
if (page == 'd') { division_arabic.onclick() };
if (page == 'g') {
    plus2.style.display = minus2.style.display = 'inline';
    answer.readOnly = true; num1.readOnly = num2.readOnly = false;
} else {
    plus2.style.display = minus2.style.display = 'none';
    answer.readOnly = false; num1.readOnly = num2.readOnly = true;
}

general_arabic.onclick = function () {
    document.body.style.display = 'none';
    page = 'g';
    localStorage.page = 'g';
    plus2.style.display = minus2.style.display = 'inline';
    body_1.style.display = 'grid';
    speed_float.style.display = 'block';
    side_container.style.display = 'none';
    paragraph1.style.display = 'none';
    img_right[0].style.display = 'none';
    section_buttons.classList.remove('wrong', 'correct');
    home_arabic_css.href = '';
    home_english_css.href = '';
    help_english_css.href = '';
    answer.readOnly = true; num1.readOnly = num2.readOnly = false;
    sum_div.style.display = "block";
    multiple.innerHTML = '×';
    document.title = "General tests in English";
    main_css.href = "../css/general_english.css";
    title.innerHTML = "General test";
    multiple_arabic.className = "";
    general_arabic.className = "light";
    division_arabic.className = "";
    help_arabic.className = "";
    home_arabic.className = "";
    m1.onclick();
    setTimeout(() => {
        window.onload();
    }, 20);
};

multiple_arabic.onclick = function () {
    document.body.style.display = 'none';
    plus2.style.display = minus2.style.display = sum_div.style.display = 'none';
    side_container.style.display = 'none';
    paragraph1.style.display = 'none';
    img_right[0].style.display = 'none';
    section_buttons.classList.remove('wrong', 'correct');
    body_1.style.display = 'grid';
    speed_float.style.display = 'block';
    home_arabic_css.href = '';
    home_english_css.href = '';
    help_english_css.href = '';
    main_css.href = "../css/multiple_english.css";

    answer.readOnly = false;
    num1.readOnly = num2.readOnly = true;
    if (page == 'g') { m1.onclick() };
    page = 'm';
    localStorage.page = 'm';
    multiple.innerHTML = '×';
    general_arabic.className = "";
    division_arabic.className = "";
    help_arabic.className = "";
    home_arabic.className = "";
    multiple_arabic.className = "light";
    title.innerHTML = "Multipication Tables";
    document.title = "Multipication tables in English";
    setTimeout(() => {
        window.onload();
    }, 20);
};

home_arabic.onclick = function () {
    document.body.style.display = 'none';
    page == 'home';
    localStorage.page = 'home';
    body_1.style.display = speed_float.style.display = 'none';
    side_container.style.display = 'block';
    paragraph1.style.display = 'none';
    document.title = "Home in English";

    main_css.href = "../css/multiple_english.css";
    home_arabic_css.href = '../css/home_arabic.css';
    home_english_css.href = '../css/home_english.css';
    help_english_css.href = '';

    multiple_arabic.className = "";
    general_arabic.className = "";
    division_arabic.className = "";
    help_arabic.className = "";
    home_arabic.className = "light";
    title.innerHTML = "Maths";
    setTimeout(() => {
        window.onload();
    }, 20);

};
help_arabic.onclick = function () {
    document.body.style.display = 'none';
    page == 'help';
    localStorage.page = 'help';
    body_1.style.display = speed_float.style.display = 'none';
    side_container.style.display = 'none';
    document.title = "Help in English";

    main_css.href = "../css/multiple_english.css";
    help_english_css.href = '../css/help_english.css';
    home_arabic_css.href = '';
    home_english_css.href = '';

    paragraph1.style.display = 'block';
    multiple_arabic.className = "";
    general_arabic.className = "";
    division_arabic.className = "";
    help_arabic.className = "light";
    home_arabic.className = "";
    title.innerHTML = "Maths";
    setTimeout(() => {
        window.onload();
    }, 20);
};

//___________________________ Speed Checked ______________________________
if (localStorage.speed_l == "first") {
    first.checked = true;
} else if (localStorage.speed_l == "second") {
    second.checked = true;
} else if (localStorage.speed_l == "third") {
    third.checked = true;
};
// ______________________ prevent write without task _____________________________
num1.oninput = function () {
    for (let i = 0; i < num1.value.length; i++) {
        if (numbers.includes(num1.value[i]) == false || answer.value == '') {
            num1.value = num1.value.replace(num1.value[+i], '');
        }
    };
    section_buttons.classList.remove('correct', 'wrong');
};
num2.oninput = function () {
    for (let i = 0; i < num2.value.length; i++) {
        if ((numbers.includes(num2.value[i]) == false || answer.value == '') && page == 'g') {
            num2.value = num2.value.replace(num2.value[+i], '')
        }
    };
    section_buttons.classList.remove('correct', 'wrong');
};
//___________________________checked_______________________________________
for (let ii = 1; ii < 11; ii++) {
    numbers_input[ii].onclick = function () {
        prevent = 0; i = 0; j = 0; count = 0; mark = 0;
        count1.splice(0);
        count2.splice(0);
        checkedlist.splice(0);
        //_________________  تحديث رقم عشوائي
        clearInterval(timer_function);
        minutes = 0; timer_function = 0; newExam_errors_mode = 0; // تحديث
        timer.innerHTML = '';
        timer.style.display = 'none';
        pm = 1;
        mode = 'cycle_1'; arabic_choose.disabled = false;
        start_errors.disabled = true;
        start.disabled = false;
        start.innerHTML = " Start the test (enter)";
        newExam_errors.disabled = true;
        i = 0; j = 0; mark = 0; count = 0; prevent = 0;
        num2.value = ''; num1.value = ''; answer.value = ''; sum.value = '';
        answer.placeholder = ''; num1.placeholder = ''; num2.placeholder = '';
        result.innerHTML = ` Check the answer (space)`;
        result2.style.visibility = 'hidden';
        result2.style.animation = 'none';/////////////////////////////////
        count_errors = 0;
        errors_num1.splice(0);
        errors_num2.splice(0);
        answer.blur();
        answer_eng = '';
        prevent_mark = 0;
        mark_arabic = ''; count_errors_arabic = '';
        count_errors = 0; errors_num1 = []; errors_num2 = [];
        errors_num1_cycle = []; errors_num2_cycle = [];
        arabic_count_errors();
        //_______________________________________________
        if (m1.checked) { checkedlist.push(1); };
        if (m2.checked) { checkedlist.push(2) };
        if (m3.checked) { checkedlist.push(3) };
        if (m4.checked) { checkedlist.push(4) };
        if (m5.checked) { checkedlist.push(5) };
        if (m6.checked) { checkedlist.push(6) };
        if (m7.checked) { checkedlist.push(7) };
        if (m8.checked) { checkedlist.push(8) };
        if (m9.checked) { checkedlist.push(9) };
        if (m10.checked) { checkedlist.push(10) };
        for (let z = 0; z < 10; z++) {
            random1 = Math.floor(Math.random() * (10 - 1 + 1)) + 1; // Random number between 10 and 1
            if (count1.includes(random1)) { z -= 1 } else { count1.push(random1); };// List of 10 numbers
        }
        for (; count2.length < checkedlist.length;) { // List of checked numbers
            let random2 = Math.floor(Math.random() * (10 - 1 + 1)) + 1; // Random number between 10 and 1
            if (count2.includes(random2) == false) {
                if (checkedlist.includes(random2)) {
                    count2.push(random2)
                };
            }
        }
    }
    //__________________________ audio ____________________________

    numbers_input[ii].onmouseover = table[ii].onmouseover = function () {
        for (let c = 0; c < 131; c++) {
            audio[c].muted = true;
        }

        if (numbers_input[ii].checked == false && sound.checked == true) {
            audio[ii].muted = false;
            audio[ii].play();
        }
        else if (numbers_input[ii].checked && sound.checked == true) {
            audio[+ii + 10].muted = false;
            audio[+ii + 10].play();
        }
    }
}
//___________________________________ start _________________________
var timer = document.getElementsByClassName("timer")[0];
var timer_function;
var choose_speed = 3;
var repeat_tune = 0;
start.onclick = function () {
    // if ((answer.value != '' && page != 'g')
    //     || (num1.value != '' && num2.value != '' && page == 'g')) {
    //     img_right[0].style.display = 'block';
    // };
    result.innerHTML = ` Check the answer (space)`;
    start.innerHTML = " Start the test (enter)";
    pm = 1;
    if (count != 'stop') {
        newExam_errors_mode = 0; // تحديث
        if (count == 0) { result2.innerHTML = ''; result2.style.visibility = 'hidden'; };
        if (page != 'g') { answer.focus(); } else { num1.focus() }
        prevent = 0;
        if (count2.length != 0) {
            if (page != 'g') { answer.placeholder = 'Answer'; }
            else if (page == 'g') {
                num1.placeholder = 'Answer';
                num2.placeholder = 'Answer';
            };
            newExam_mode = 0; // ---
            if (answer.value == '' && num1.value == '') {
                timer.style.display = 'inline';
                timer_function = setInterval(function () {
                    if (((num1.value != '' && page != 'g') || (answer.value != '' && page == 'g')) && mode == 'cycle_1') {
                        if (model_number == 4 || model_number == 5) {
                            timer.innerHTML =
                                `<div class="timer" style="display:inline ;background-image: conic-gradient(rgb(220,220,100) 0deg ${minutes}deg, rgb(180,200,255) ${minutes}deg 360deg); "></div>`;
                        }
                        if (model_number == 3 || model_number == 6) {
                            timer.innerHTML =
                                `<div class="timer" style="display:inline ;background-image: conic-gradient(rgb(180,180,60) 0deg ${minutes}deg, lightgrey ${minutes}deg 360deg); "></div>`;
                        }
                        if (model_number == 2) {
                            timer.innerHTML =
                                `<div class="timer" style="display:inline ;background-image: conic-gradient(rgb(80,80,40) 0deg ${minutes}deg, grey ${minutes}deg 360deg); "></div>`;
                        }
                        if (model_number == 1) {
                            timer.innerHTML =
                                `<div class="timer" style="display:inline ;background-image: conic-gradient(darkblue 0deg ${minutes}deg, lightgrey ${minutes}deg 360deg); "></div>`;
                        }
                        minutes += choose_speed;
                        if (minutes > 360) {
                            if (page != 'g') { answer.value = 0; }
                            else if (page == 'g') { num1.value = num2.value = -1 }
                            start.onclick();
                            minutes = 0;
                        }
                        timer.style.display = 'inline';
                        // if ((window.innerWidth > '500' || window.outerWidth > '500') && (window.innerWidth < '767' || window.outerWidth < '767')) {
                        //     timer.style.cssText = `transform: translate(-110px,70px) scale(80%);
                        //     display:block;
                        //      `;
                        // }
                        // if ((window.innerWidth < '500' || window.outerWidth < '500') && (window.innerWidth > '380' || window.outerWidth > '380')) {
                        //     timer.style.cssText = `transform: translate(-150px,650px) scale(80%);
                        //     display:block;
                        //      `;
                        // }
                        // if (window.innerWidth <= '380' || window.outerWidth <= '380') {
                        //     timer.style.cssText = `transform: translate(-150px,800px) scale(75%);
                        //     display:block;
                        //      `;
                        // }
                    }
                }, 1000)
            };

            if (arabic_choose.checked) { english() };

            if (((answer.value == +num1.value * +num2.value
                || answer_eng == +num1_1 * +num2_2
                || answer.value == +num1_1 * +num2_2)
                && answer.value != 0 && prevent_mark == 0 && page == 'm')
                || ((answer.value == +num1.value / +num2.value
                    || answer_eng == +num1_1 / +num2_2
                    || answer.value == +num1_1 / +num2_2)
                    && answer.value != 0 && prevent_mark == 0 && page == 'd')
                || (((num1.value == num1_saved && num2.value == num2_saved)
                    || (num1.value == num2_saved && num2.value == num1_saved)
                    || (eng_num1 == num1_saved && eng_num2 == num2_saved)
                    || (eng_num1 == num2_saved && eng_num2 == num1_saved)) //  || answer.value == +num1_1 * +num2_2
                    && num1.value != '' && num2.value != '' && prevent_mark == 0 && page == 'g')
            ) {
                // img_right[0].innerHTML = `
                // <img class="img_r" src="../images/svg_right.svg" alt=""> ` ;
                section_buttons.classList.remove('wrong', 'correct');
                setTimeout(function () {
                    section_buttons.classList.add('correct');
                }, 100)
                //____________________________ voice tune ____________________
                if (on_effects == 0) {
                    if (repeat_tune == 0) {
                        correct_tune1.muted = false;
                        correct_tune1.play();
                        setTimeout(function () {
                            correct_tune1.muted = true;
                        }, 1000);
                        repeat_tune = repeat_tune + 1;
                    }
                    else if (repeat_tune == 1) {
                        correct_tune2.muted = false;
                        correct_tune2.play();
                        setTimeout(function () {
                            correct_tune2.muted = true;
                        }, 1000);
                        repeat_tune = repeat_tune + 1;
                    }
                    else if (repeat_tune == 2) {
                        correct_tune3.muted = false;
                        correct_tune3.play();
                        setTimeout(function () {
                            correct_tune3.muted = true;
                        }, 1000);
                        repeat_tune += 1;
                    }
                    else if (repeat_tune == 3) {
                        correct_tune4.muted = false;
                        correct_tune4.play();
                        setTimeout(function () {
                            correct_tune4.muted = true;
                        }, 1000);
                        repeat_tune += 1;
                    }
                    else if (repeat_tune == 4) {
                        correct_tune5.muted = false;
                        correct_tune5.play();
                        setTimeout(function () {
                            correct_tune5.muted = true;
                        }, 1000);
                        repeat_tune += 1;
                    }
                    else if (repeat_tune == 5) {
                        correct_tune6.muted = false;
                        correct_tune6.play();
                        setTimeout(function () {
                            correct_tune6.muted = true;
                        }, 1000);
                        repeat_tune = 0;
                    }
                }
                //_________________________ end voice tune _________________________
                mark += 1;
                minutes = 0;
            } else if (num1.value != '' && num2.value != '' && num2.value != '' && answer.value != '') {
                // img_right[0].innerHTML = `
                // <img class="img_r" src="../images/svg_wrong.svg" alt="">
                // `;
                section_buttons.classList.remove('correct', 'wrong');
                setTimeout(function () {
                    section_buttons.classList.add('wrong');
                }, 100)

                //____________________________ voice tune wrong ____________________
                if (on_effects == 0) {
                    if (repeat_tune == 0) {
                        wrong_tune1.muted = false;
                        wrong_tune1.play();
                        setTimeout(function () {
                            wrong_tune1.muted = true;
                            // wrong_tune1.pause();
                        }, 1000);
                        repeat_tune = repeat_tune + 1;
                    }
                    else if (repeat_tune == 1) {
                        wrong_tune2.muted = false;
                        wrong_tune2.play();
                        setTimeout(function () {
                            wrong_tune2.muted = true;
                            // wrong_tune2.pause();
                        }, 1000);
                        repeat_tune = repeat_tune + 1;
                    }
                    else if (repeat_tune == 2) {
                        wrong_tune3.muted = false;
                        wrong_tune3.play();
                        setTimeout(function () {
                            wrong_tune3.muted = true;
                            // wrong_tune3.pause();
                        }, 1000);
                        repeat_tune += 1;
                    }
                    else if (repeat_tune == 3) {
                        wrong_tune4.muted = false;
                        wrong_tune4.play();
                        setTimeout(function () {
                            wrong_tune4.muted = true;
                            // wrong_tune4.pause();
                        }, 1000);
                        repeat_tune += 1;
                    }
                    else if (repeat_tune == 4) {
                        wrong_tune5.muted = false;
                        wrong_tune5.play();
                        setTimeout(function () {
                            wrong_tune5.muted = true;
                            // wrong_tune5.pause();
                        }, 1000);
                        repeat_tune += 1;
                    }
                    else if (repeat_tune == 5) {
                        wrong_tune6.muted = false;
                        wrong_tune6.play();
                        setTimeout(function () {
                            wrong_tune6.muted = true;
                            // wrong_tune6.pause();
                        }, 1000);
                        repeat_tune = 0;
                    }
                }
                //_________________________ end voice tune wrong_________________________
                count_errors += 1;
                minutes = 0;
                if (page == 'g') {
                    errors_num1.push(num1_saved);
                    errors_num2.push(num2_saved);
                }
                else if (page != 'g') {
                    if (arabic_choose.checked) {
                        english();
                        errors_num1.push(eng_num1);
                        errors_num2.push(eng_num2);
                    } else {
                        errors_num1.push(num1.value);
                        errors_num2.push(num2.value);
                    }
                }
                newExam_errors.disabled = false;
                start_errors.disabled = false;
            }
            if (((answer.value != '' || num1.value == '') && (page != 'g'))
                || ((answer.value == '' || (num1.value != '' && num2.value != '')) && page == 'g')
            ) {
                num1.value = +count1[i]; num1_1 = num1.value;
                num2.value = +count2[j]; num2_2 = num2.value;
                if (page == 'g') {
                    answer.value = +num1.value * +num2.value; // for tests
                    num1_saved = num1.value;
                    num2_saved = num2.value;
                    //_______________ Sum ______________________________
                    sum.value = +num1.value + +num2.value;
                    if (arabic_choose.checked) { arabic_numbers(); }
                }
                i += 1;
                if (page == 'd') {
                    num1.value = num1.value * num2.value; num1_1 = num1.value;
                }
                if (i >= count1.length) { j += 1; i = 0; }
                if (j >= count2.length) { i = 0; j = 0; }
                if (page == 'g') {
                    num1.value = ''; num2.value = '';
                    num1_1 = ''; eng_num1 = ''; num2_2 = ''; eng_num2 = '';
                }
                else { answer.value = ''; }
                prevent_mark = 0;
                if (arabic_choose.checked) { arabic(); }

                // if (count == count1.length * count2.length - 1) { start.innerHTML = "أظهر النتيجة" }
                if (count == count1.length * count2.length && count != 0) {
                    start.disabled = true;
                    //  __________________ تحديث
                    // _______________________________ Using Keys   _______________________________
                    document.onkeydown = function (e) {  // __________________ تحديث
                        if (e.keyCode == '32') { // space مفتاح
                            if (answer.value != '') {
                                result.onclick();
                            }
                        }
                        if (e.keyCode == '27') { // esc مفتاح                  
                            title.onclick();
                        }
                        if (e.keyCode == 13) { // Enter مفتاح  
                            start_errors.onclick();
                        }
                        if (e.keyCode == 78) { // letter  n 
                            newExam.onclick();
                        }
                        if (e.keyCode == 17) { // ctrl مفتاح  
                            if (count_errors > 0) {
                                newExam_errors.onclick();
                            }
                            else if (errors_num1.length == 0 && mode == 'cycle_2') {
                                window.scroll({ left: 300, top: 0, behavior: "smooth" });
                                newExam.onclick();
                            }
                        }
                        keys[e.key] = true;
                        if (keys['z'] && keys['a']) {
                            all_input.checked = true;
                            all_input.onclick();
                        }
                        if (keys['z'] && keys['x']) {
                            all_input.checked = false;
                            all_input.onclick();
                        }
                        for (let i = 1; i < 10; i++) {
                            if (keys['+'] && keys[i]) {
                                numbers_input[i].checked = true;
                                numbers_input[i].onclick();
                            }
                        }
                        if (keys['+'] && keys['0']) {
                            m10.checked = true;
                            m10.onclick();
                        }
                        for (let i = 1; i < 10; i++) {
                            if (keys['-'] && keys[i]) {
                                numbers_input[i].checked = false;
                                numbers_input[i].onclick();
                            }
                        }
                        if (keys['-'] && keys['0']) {
                            m10.checked = false;
                            m10.onclick();
                        }
                        if (arabic_choose.disabled == false) {
                            if (e.shiftKey && e.key == 'A') {
                                arabic_choose.checked = true;
                                arabic_numbers();
                                arabic_choose.onclick();
                            }
                            if (e.shiftKey && e.key == 'E') {
                                arabic_choose.checked = false;
                                arabic_choose.onclick();
                            }
                        }
                        if (e.shiftKey && e.key == 'S') {
                            if (sound.checked == false) {
                                sound.checked = true; sound.onclick();
                            }
                            else { sound.checked = false; sound.onclick(); }
                        }
                        if (e.keyCode == 38) {
                            section_buttons.classList.remove('correct', 'wrong');
                            if (page != 'g') {
                                if (num1.value != '' && arabic_choose.checked == false) {
                                    if (answer.value == '') { answer.value = +0 };
                                    answer.value = +answer.value + 1;
                                }
                                else if (num1.value != '' && arabic_choose.checked == true) {
                                    if (answer.value == '') { answer.value = +0 };
                                    english_numbers();
                                    answer.value = +answer.value + 1;
                                    answer_eng = answer.value;
                                    arabic_numbers();
                                }
                            }
                            else if (page == 'g') {
                                if (num_input == 1) {
                                    if (answer.value != '' && arabic_choose.checked == false) {
                                        if (num1.value == '') { num1.value = +0 }
                                        num1.value = +num1.value + 1;
                                    }
                                    else if (answer.value != '' && arabic_choose.checked == true) {
                                        if (num1.value == '') { num1.value = +0 };
                                        english_numbers();
                                        num1.value = +num1.value + 1;
                                        num1_eng = num1.value;
                                        arabic_numbers();

                                    }
                                }
                                if (num_input == 2) {
                                    if (answer.value != '' && arabic_choose.checked == false) {
                                        if (num2.value == '') { num2.value = +0 }
                                        num2.value = +num2.value + 1;
                                    }
                                    else if (answer.value != '' && arabic_choose.checked == true) {
                                        if (num2.value == '') { num2.value = +0 };
                                        english_numbers();
                                        num2.value = +num2.value + 1;
                                        num2_eng = num2.value;
                                        arabic_numbers();

                                    }
                                }
                            }
                        }
                        if (e.keyCode == 40) {
                            if (page != 'g') {
                                if (num1.value != '' && arabic_choose.checked == false) {
                                    if (answer.value == '') { answer.value = +0 }
                                    answer.value = +answer.value - 1;
                                }
                                else if (num1.value != '' && arabic_choose.checked == true) {
                                    if (answer.value == '') { answer.value = +0 };
                                    english_numbers();
                                    answer.value = +answer.value - 1;
                                    answer_eng = answer.value;
                                    arabic_numbers();
                                }
                            }
                            else if (page == 'g') {
                                if (num_input == 1) {
                                    if (answer.value != '' && arabic_choose.checked == false) {
                                        if (num1.value == '') { num1.value = +0 }
                                        num1.value = +num1.value - 1;
                                    }
                                    else if (answer.value != '' && arabic_choose.checked == true) {
                                        if (num1.value == '') { num1.value = +0 };
                                        english_numbers();
                                        num1.value = +num1.value - 1;
                                        answer_eng = answer.value;
                                        arabic_numbers();
                                    }
                                }
                                if (num_input == 2) {
                                    if (answer.value != '' && arabic_choose.checked == false) {
                                        if (num2.value == '') { num2.value = +0 }
                                        num2.value = +num2.value - 1;
                                    }
                                    else if (answer.value != '' && arabic_choose.checked == true) {
                                        if (num2.value == '') { num2.value = +0 };
                                        english_numbers();
                                        num2.value = +num2.value - 1;
                                        answer_eng = answer.value;
                                        arabic_numbers();

                                    }
                                }
                            }
                        }
                    }
                    document.onkeyup = function (e) {
                        keys[e.key] = false;
                    }
                    //______________

                    mark = (mark / count) * 100;
                    minutes = 0;
                    timer.innerHTML = '';
                    timer.style.display = 'inline';
                    clearInterval(timer_function);
                    timer_function = 0;
                    //_____نقرب إلى أعلى قيمة عشرية رقم واحد فقexcellentط بعد الفاصلة :
                    mark = Math.ceil(+mark * 10) / 10;
                    //______________ العلامة والتقدير _________________________

                    if (mark < 50) { level = "Weak" }
                    else if (mark < 60) { level = "Middle" }
                    else if (mark < 70) { level = "Good" }
                    else if (mark < 80) { level = "Very Good" }
                    else if (mark < 95) { level = "Excellent" }
                    else if (mark != 100 && mark >= 95) { level = "Very Excellent" }
                    else if (mark == 100) {
                        level = `  Perfect ! <br>  Very Excellent ! `;
                        if (on_effects == 0) {
                            wenner.muted = false;
                            wenner.volume = 0.2;
                            wenner.play();
                        };
                    }
                    mark_arabic = String(mark); count_errors_arabic = String(count_errors);
                    if (arabic_choose.checked) {
                        for (let i = 0; i < mark_arabic.length; i++) {
                            if (mark_arabic[i] == 0) { mark_arabic = mark_arabic.replace(mark_arabic[+i], zero) }
                            if (mark_arabic[i] == 1) { mark_arabic = mark_arabic.replace(mark_arabic[+i], one) }
                            if (mark_arabic[i] == 2) { mark_arabic = mark_arabic.replace(mark_arabic[+i], two) }
                            if (mark_arabic[i] == 3) { mark_arabic = mark_arabic.replace(mark_arabic[+i], three) }
                            if (mark_arabic[i] == 4) { mark_arabic = mark_arabic.replace(mark_arabic[+i], four) }
                            if (mark_arabic[i] == 5) { mark_arabic = mark_arabic.replace(mark_arabic[+i], five) }
                            if (mark_arabic[i] == 6) { mark_arabic = mark_arabic.replace(mark_arabic[+i], six) }
                            if (mark_arabic[i] == 7) { mark_arabic = mark_arabic.replace(mark_arabic[+i], seven) }
                            if (mark_arabic[i] == 8) { mark_arabic = mark_arabic.replace(mark_arabic[+i], eight) }
                            if (mark_arabic[i] == 9) { mark_arabic = mark_arabic.replace(mark_arabic[+i], nine) }
                            if (mark_arabic[i] == null) { mark_arabic = mark_arabic.replace(mark_arabic[+i], ``) }
                        };
                        for (let i = 0; i < count_errors_arabic.length; i++) {
                            if (count_errors_arabic[i] == 0) { count_errors_arabic = count_errors_arabic.replace(count_errors_arabic[+i], zero) }
                            if (count_errors_arabic[i] == 1) { count_errors_arabic = count_errors_arabic.replace(count_errors_arabic[+i], one) }
                            if (count_errors_arabic[i] == 2) { count_errors_arabic = count_errors_arabic.replace(count_errors_arabic[+i], two) }
                            if (count_errors_arabic[i] == 3) { count_errors_arabic = count_errors_arabic.replace(count_errors_arabic[+i], three) }
                            if (count_errors_arabic[i] == 4) { count_errors_arabic = count_errors_arabic.replace(count_errors_arabic[+i], four) }
                            if (count_errors_arabic[i] == 5) { count_errors_arabic = count_errors_arabic.replace(count_errors_arabic[+i], five) }
                            if (count_errors_arabic[i] == 6) { count_errors_arabic = count_errors_arabic.replace(count_errors_arabic[+i], six) }
                            if (count_errors_arabic[i] == 7) { count_errors_arabic = count_errors_arabic.replace(count_errors_arabic[+i], seven) }
                            if (count_errors_arabic[i] == 8) { count_errors_arabic = count_errors_arabic.replace(count_errors_arabic[+i], eight) }
                            if (count_errors_arabic[i] == 9) { count_errors_arabic = count_errors_arabic.replace(count_errors_arabic[+i], nine) }
                            if (count_errors_arabic[i] == '.') { count_errors_arabic = count_errors_arabic.replace(mark_arabic[+i], `,`) }
                            if (count_errors_arabic[i] == null) { count_errors_arabic = count_errors_arabic.replace(mark_arabic[+i], ``) }
                        };

                        result2.style.visibility = 'visible';
                        result2.innerHTML = `Your Mark: ${mark_arabic} <br> Level: ${level} <br> Error count: ${count_errors_arabic}`;
                    } else {
                        result2.style.visibility = 'visible';
                        result2.innerHTML = `Your Mark: ${mark} <br> Level: ${level} <br> Error count: ${count_errors}`;
                    };
                    // new 2/10/2023
                    if (sound.checked == true) {
                        for (let c = 0; c < 133; c++) {
                            audio[c].muted = true;
                        };
                        yourmark_a.muted = false;
                        setTimeout(function () {
                            yourmark_a.play();
                        }, 1000);
                        var mark_rounded = Math.round(mark);
                        setTimeout(function () {
                            if (mark_rounded == 0) { a0.muted = false; a0.play() }
                            else if (mark_rounded == 1) { a1.muted = false; a1.play() }
                            else if (mark_rounded == 2) { a2.muted = false; a2.play() }
                            else if (mark_rounded == 3) { a3.muted = false; a3.play() }
                            else if (mark_rounded == 4) { a4.muted = false; a4.play() }
                            else if (mark_rounded == 5) { a5.muted = false; a5.play() }
                            else if (mark_rounded == 6) { a6.muted = false; a6.play() }
                            else if (mark_rounded == 7) { a7.muted = false; a7.play() }
                            else if (mark_rounded == 8) { a8.muted = false; a8.play() }
                            else if (mark_rounded == 9) { a9.muted = false; a9.play() }
                            else if (mark_rounded == 10) { a10.muted = false; a10.play() }
                            else if (mark_rounded == 11) { a11.muted = false; a11.play() }
                            else if (mark_rounded == 12) { a12.muted = false; a12.play() }
                            else if (mark_rounded == 13) { a13.muted = false; a13.play() }
                            else if (mark_rounded == 14) { a14.muted = false; a14.play() }
                            else if (mark_rounded == 15) { a15.muted = false; a15.play() }
                            else if (mark_rounded == 16) { a16.muted = false; a16.play() }
                            else if (mark_rounded == 17) { a17.muted = false; a17.play() }
                            else if (mark_rounded == 18) { a18.muted = false; a18.play() }
                            else if (mark_rounded == 19) { a19.muted = false; a19.play() }
                            else if (mark_rounded == 20) { a20.muted = false; a20.play() }
                            else if (mark_rounded == 21) { a21.muted = false; a21.play() }
                            else if (mark_rounded == 22) { a22.muted = false; a22.play() }
                            else if (mark_rounded == 23) { a23.muted = false; a23.play() }
                            else if (mark_rounded == 24) { a24.muted = false; a24.play() }
                            else if (mark_rounded == 25) { a25.muted = false; a25.play() }
                            else if (mark_rounded == 26) { a26.muted = false; a26.play() }
                            else if (mark_rounded == 27) { a27.muted = false; a27.play() }
                            else if (mark_rounded == 28) { a28.muted = false; a28.play() }
                            else if (mark_rounded == 29) { a29.muted = false; a29.play() }
                            else if (mark_rounded == 30) { a30.muted = false; a30.play() }
                            else if (mark_rounded == 31) { a31.muted = false; a31.play() }
                            else if (mark_rounded == 32) { a32.muted = false; a32.play() }
                            else if (mark_rounded == 33) { a33.muted = false; a33.play() }
                            else if (mark_rounded == 34) { a34.muted = false; a34.play() }
                            else if (mark_rounded == 35) { a35.muted = false; a35.play() }
                            else if (mark_rounded == 36) { a36.muted = false; a36.play() }
                            else if (mark_rounded == 37) { a37.muted = false; a37.play() }
                            else if (mark_rounded == 38) { a38.muted = false; a38.play() }
                            else if (mark_rounded == 39) { a39.muted = false; a39.play() }
                            else if (mark_rounded == 40) { a40.muted = false; a40.play() }
                            else if (mark_rounded == 41) { a41.muted = false; a41.play() }
                            else if (mark_rounded == 42) { a42.muted = false; a42.play() }
                            else if (mark_rounded == 43) { a43.muted = false; a43.play() }
                            else if (mark_rounded == 44) { a44.muted = false; a44.play() }
                            else if (mark_rounded == 45) { a45.muted = false; a45.play() }
                            else if (mark_rounded == 46) { a46.muted = false; a46.play() }
                            else if (mark_rounded == 47) { a47.muted = false; a47.play() }
                            else if (mark_rounded == 48) { a48.muted = false; a48.play() }
                            else if (mark_rounded == 49) { a49.muted = false; a49.play() }
                            else if (mark_rounded == 50) { a50.muted = false; a50.play() }
                            else if (mark_rounded == 51) { a51.muted = false; a51.play() }
                            else if (mark_rounded == 52) { a52.muted = false; a52.play() }
                            else if (mark_rounded == 53) { a53.muted = false; a53.play() }
                            else if (mark_rounded == 54) { a54.muted = false; a54.play() }
                            else if (mark_rounded == 55) { a55.muted = false; a55.play() }
                            else if (mark_rounded == 56) { a56.muted = false; a56.play() }
                            else if (mark_rounded == 57) { a57.muted = false; a57.play() }
                            else if (mark_rounded == 58) { a58.muted = false; a58.play() }
                            else if (mark_rounded == 59) { a59.muted = false; a59.play() }
                            else if (mark_rounded == 60) { a60.muted = false; a60.play() }
                            else if (mark_rounded == 61) { a61.muted = false; a61.play() }
                            else if (mark_rounded == 62) { a62.muted = false; a62.play() }
                            else if (mark_rounded == 63) { a63.muted = false; a63.play() }
                            else if (mark_rounded == 64) { a64.muted = false; a64.play() }
                            else if (mark_rounded == 65) { a65.muted = false; a65.play() }
                            else if (mark_rounded == 66) { a66.muted = false; a66.play() }
                            else if (mark_rounded == 67) { a67.muted = false; a67.play() }
                            else if (mark_rounded == 68) { a68.muted = false; a68.play() }
                            else if (mark_rounded == 69) { a69.muted = false; a69.play() }
                            else if (mark_rounded == 70) { a70.muted = false; a70.play() }
                            else if (mark_rounded == 71) { a71.muted = false; a71.play() }
                            else if (mark_rounded == 72) { a72.muted = false; a72.play() }
                            else if (mark_rounded == 73) { a73.muted = false; a73.play() }
                            else if (mark_rounded == 74) { a74.muted = false; a74.play() }
                            else if (mark_rounded == 75) { a75.muted = false; a75.play() }
                            else if (mark_rounded == 76) { a76.muted = false; a76.play() }
                            else if (mark_rounded == 77) { a77.muted = false; a77.play() }
                            else if (mark_rounded == 78) { a78.muted = false; a78.play() }
                            else if (mark_rounded == 79) { a79.muted = false; a79.play() }
                            else if (mark_rounded == 80) { a80.muted = false; a80.play() }
                            else if (mark_rounded == 81) { a81.muted = false; a81.play() }
                            else if (mark_rounded == 82) { a82.muted = false; a82.play() }
                            else if (mark_rounded == 83) { a83.muted = false; a83.play() }
                            else if (mark_rounded == 84) { a84.muted = false; a84.play() }
                            else if (mark_rounded == 85) { a85.muted = false; a85.play() }
                            else if (mark_rounded == 86) { a86.muted = false; a86.play() }
                            else if (mark_rounded == 87) { a87.muted = false; a87.play() }
                            else if (mark_rounded == 88) { a88.muted = false; a88.play() }
                            else if (mark_rounded == 89) { a89.muted = false; a89.play() }
                            else if (mark_rounded == 90) { a90.muted = false; a90.play() }
                            else if (mark_rounded == 91) { a91.muted = false; a91.play() }
                            else if (mark_rounded == 92) { a92.muted = false; a92.play() }
                            else if (mark_rounded == 93) { a93.muted = false; a93.play() }
                            else if (mark_rounded == 94) { a94.muted = false; a94.play() }
                            else if (mark_rounded == 95) { a95.muted = false; a95.play() }
                            else if (mark_rounded == 96) { a96.muted = false; a96.play() }
                            else if (mark_rounded == 97) { a97.muted = false; a97.play() }
                            else if (mark_rounded == 98) { a98.muted = false; a98.play() }
                            else if (mark_rounded == 99) { a99.muted = false; a99.play() }
                            else if (mark_rounded == 100) { a100.muted = false; a100.play() }
                        }, 2000);
                        setTimeout(function () {
                            level_a.muted = false;
                            level_a.play();
                        }, 3700);
                        setTimeout(function () {
                            if (level == "Weak") {
                                weak_a.muted = false;
                                weak_a.play();
                            }
                            else if (level == "Middle") {
                                middle_a.muted = false;
                                middle_a.play();
                            }
                            else if (level == "Good") {
                                good_a.muted = false;
                                good_a.play();
                            }
                            else if (level == "Very Good") {
                                vgood_a.muted = false;
                                vgood_a.play();
                            }
                            else if (level == "Excellent") {
                                excellent_a.muted = false;
                                excellent_a.play();
                            }
                            else {
                                vexcellent_a.muted = false;
                                vexcellent_a.play();
                            }
                        }, 5000);
                        setTimeout(function () {
                            errors_a.muted = false;
                            errors_a.play();
                        }, 6000);
                        setTimeout(function () {
                            if (count_errors == 0 || count_errors == zero) { a0.muted = false; a0.play() }
                            else if (count_errors == 1 || count_errors == one) { a1.muted = false; a1.play() }
                            else if (count_errors == 2 || count_errors == two) { a2.muted = false; a2.play() }
                            else if (count_errors == 3 || count_errors == three) { a3.muted = false; a3.play() }
                            else if (count_errors == 4 || count_errors == four) { a4.muted = false; a4.play() }
                            else if (count_errors == 5 || count_errors == five) { a5.muted = false; a5.play() }
                            else if (count_errors == 6 || count_errors == six) { a6.muted = false; a6.play() }
                            else if (count_errors == 7 || count_errors == seven) { a7.muted = false; a7.play() }
                            else if (count_errors == 8 || count_errors == eight) { a8.muted = false; a8.play() }
                            else if (count_errors == 9 || count_errors == nine) { a9.muted = false; a9.play() }
                            else if (count_errors == 10 || count_errors == one + zero) { a10.muted = false; a10.play() }
                            else if (count_errors == 11 || count_errors == one + one) { a11.muted = false; a11.play() }
                            else if (count_errors == 12 || count_errors == one + two) { a12.muted = false; a12.play() }
                            else if (count_errors == 13 || count_errors == one + three) { a13.muted = false; a13.play() }
                            else if (count_errors == 14 || count_errors == one + four) { a14.muted = false; a14.play() }
                            else if (count_errors == 15 || count_errors == one + five) { a15.muted = false; a15.play() }
                            else if (count_errors == 16 || count_errors == one + six) { a16.muted = false; a16.play() }
                            else if (count_errors == 17 || count_errors == one + seven) { a17.muted = false; a17.play() }
                            else if (count_errors == 18 || count_errors == one + eight) { a18.muted = false; a18.play() }
                            else if (count_errors == 19 || count_errors == one + nine) { a19.muted = false; a19.play() }
                            else if (count_errors == 20 || count_errors == two + zero) { a20.muted = false; a20.play() }
                            else if (count_errors == 21 || count_errors == two + one) { a21.muted = false; a21.play() }
                            else if (count_errors == 22 || count_errors == two + two) { a22.muted = false; a22.play() }
                            else if (count_errors == 23 || count_errors == two + three) { a23.muted = false; a23.play() }
                            else if (count_errors == 24 || count_errors == two + four) { a24.muted = false; a24.play() }
                            else if (count_errors == 25 || count_errors == two + five) { a25.muted = false; a25.play() }
                            else if (count_errors == 26 || count_errors == two + six) { a26.muted = false; a26.play() }
                            else if (count_errors == 27 || count_errors == two + seven) { a27.muted = false; a27.play() }
                            else if (count_errors == 28 || count_errors == two + eight) { a28.muted = false; a28.play() }
                            else if (count_errors == 29 || count_errors == two + nine) { a29.muted = false; a29.play() }
                            else if (count_errors == 30 || count_errors == three + zero) { a30.muted = false; a30.play() }
                            else if (count_errors == 31 || count_errors == three + one) { a31.muted = false; a31.play() }
                            else if (count_errors == 32 || count_errors == three + two) { a32.muted = false; a32.play() }
                            else if (count_errors == 33 || count_errors == three + three) { a33.muted = false; a33.play() }
                            else if (count_errors == 34 || count_errors == three + four) { a34.muted = false; a34.play() }
                            else if (count_errors == 35 || count_errors == three + five) { a35.muted = false; a35.play() }
                            else if (count_errors == 36 || count_errors == three + six) { a36.muted = false; a36.play() }
                            else if (count_errors == 37 || count_errors == three + seven) { a37.muted = false; a37.play() }
                            else if (count_errors == 38 || count_errors == three + eight) { a38.muted = false; a38.play() }
                            else if (count_errors == 39 || count_errors == three + nine) { a39.muted = false; a39.play() }
                            else if (count_errors == 40 || count_errors == four + zero) { a40.muted = false; a40.play() }
                            else if (count_errors == 41 || count_errors == four + one) { a41.muted = false; a41.play() }
                            else if (count_errors == 42 || count_errors == four + two) { a42.muted = false; a42.play() }
                            else if (count_errors == 43 || count_errors == four + three) { a43.muted = false; a43.play() }
                            else if (count_errors == 44 || count_errors == four + four) { a44.muted = false; a44.play() }
                            else if (count_errors == 45 || count_errors == four + five) { a45.muted = false; a45.play() }
                            else if (count_errors == 46 || count_errors == four + six) { a46.muted = false; a46.play() }
                            else if (count_errors == 47 || count_errors == four + seven) { a47.muted = false; a47.play() }
                            else if (count_errors == 48 || count_errors == four + eight) { a48.muted = false; a48.play() }
                            else if (count_errors == 49 || count_errors == four + nine) { a49.muted = false; a49.play() }
                            else if (count_errors == 50 || count_errors == five + zero) { a50.muted = false; a50.play() }
                            else if (count_errors == 51 || count_errors == five + one) { a51.muted = false; a51.play() }
                            else if (count_errors == 52 || count_errors == five + two) { a52.muted = false; a52.play() }
                            else if (count_errors == 53 || count_errors == five + three) { a53.muted = false; a53.play() }
                            else if (count_errors == 54 || count_errors == five + four) { a54.muted = false; a54.play() }
                            else if (count_errors == 55 || count_errors == five + five) { a55.muted = false; a55.play() }
                            else if (count_errors == 56 || count_errors == five + six) { a56.muted = false; a56.play() }
                            else if (count_errors == 57 || count_errors == five + seven) { a57.muted = false; a57.play() }
                            else if (count_errors == 58 || count_errors == five + eight) { a58.muted = false; a58.play() }
                            else if (count_errors == 59 || count_errors == five + nine) { a59.muted = false; a59.play() }
                            else if (count_errors == 60 || count_errors == six + zero) { a60.muted = false; a60.play() }
                            else if (count_errors == 61 || count_errors == six + one) { a61.muted = false; a61.play() }
                            else if (count_errors == 62 || count_errors == six + two) { a62.muted = false; a62.play() }
                            else if (count_errors == 63 || count_errors == six + three) { a63.muted = false; a63.play() }
                            else if (count_errors == 64 || count_errors == six + four) { a64.muted = false; a64.play() }
                            else if (count_errors == 65 || count_errors == six + five) { a65.muted = false; a65.play() }
                            else if (count_errors == 66 || count_errors == six + six) { a66.muted = false; a66.play() }
                            else if (count_errors == 67 || count_errors == six + seven) { a67.muted = false; a67.play() }
                            else if (count_errors == 68 || count_errors == six + eight) { a68.muted = false; a68.play() }
                            else if (count_errors == 69 || count_errors == six + nine) { a69.muted = false; a69.play() }
                            else if (count_errors == 70 || count_errors == seven + zero) { a70.muted = false; a70.play() }
                            else if (count_errors == 71 || count_errors == seven + one) { a71.muted = false; a71.play() }
                            else if (count_errors == 72 || count_errors == seven + two) { a72.muted = false; a72.play() }
                            else if (count_errors == 73 || count_errors == seven + three) { a73.muted = false; a73.play() }
                            else if (count_errors == 74 || count_errors == seven + four) { a74.muted = false; a74.play() }
                            else if (count_errors == 75 || count_errors == seven + five) { a75.muted = false; a75.play() }
                            else if (count_errors == 76 || count_errors == seven + six) { a76.muted = false; a76.play() }
                            else if (count_errors == 77 || count_errors == seven + seven) { a77.muted = false; a77.play() }
                            else if (count_errors == 78 || count_errors == seven + eight) { a78.muted = false; a78.play() }
                            else if (count_errors == 79 || count_errors == seven + nine) { a79.muted = false; a79.play() }
                            else if (count_errors == 80 || count_errors == eight + zero) { a80.muted = false; a80.play() }
                            else if (count_errors == 81 || count_errors == eight + one) { a81.muted = false; a81.play() }
                            else if (count_errors == 82 || count_errors == eight + two) { a82.muted = false; a82.play() }
                            else if (count_errors == 83 || count_errors == eight + three) { a83.muted = false; a83.play() }
                            else if (count_errors == 84 || count_errors == eight + four) { a84.muted = false; a84.play() }
                            else if (count_errors == 85 || count_errors == eight + five) { a85.muted = false; a85.play() }
                            else if (count_errors == 86 || count_errors == eight + six) { a86.muted = false; a86.play() }
                            else if (count_errors == 87 || count_errors == eight + seven) { a87.muted = false; a87.play() }
                            else if (count_errors == 88 || count_errors == eight + eight) { a88.muted = false; a88.play() }
                            else if (count_errors == 89 || count_errors == eight + nine) { a89.muted = false; a89.play() }
                            else if (count_errors == 90 || count_errors == nine + zero) { a90.muted = false; a90.play() }
                            else if (count_errors == 91 || count_errors == nine + one) { a91.muted = false; a91.play() }
                            else if (count_errors == 92 || count_errors == nine + two) { a92.muted = false; a92.play() }
                            else if (count_errors == 93 || count_errors == nine + three) { a93.muted = false; a93.play() }
                            else if (count_errors == 94 || count_errors == nine + four) { a94.muted = false; a94.play() }
                            else if (count_errors == 95 || count_errors == nine + five) { a95.muted = false; a95.play() }
                            else if (count_errors == 96 || count_errors == nine + six) { a96.muted = false; a96.play() }
                            else if (count_errors == 97 || count_errors == nine + seven) { a97.muted = false; a97.play() }
                            else if (count_errors == 98 || count_errors == nine + eight) { a98.muted = false; a98.play() }
                            else if (count_errors == 99 || count_errors == nine + nine) { a99.muted = false; a99.play() }
                            else if (count_errors == 100 || count_errors == one + zero + zero) { a100.muted = false; a100.play() }
                        }, 8000)
                    };
                    if (errors_num1.length != 0) {
                        start.innerHTML = "Click: Start bug testing ↙ ";
                        setTimeout(function () {
                            start_errors.style.animation = "starterrors 100ms 10 linear";
                        }, 2000);
                        setTimeout(function () {
                            start_errors.style.animation = "none";
                        }, 3100);
                        setTimeout(function () {
                            start_errors.style.animation = "starterrors 100ms 10 linear";
                        }, 10000);
                        setTimeout(function () {
                            start_errors.style.animation = "none";
                        }, 11000);
                        if (window.innerWidth < 1100) {
                            start.innerHTML = "Click: Start bug testing ↓  ";
                        }

                    }
                    answer.placeholder = ''; num1.placeholder = ''; num2.placeholder = '';
                    answer.blur();//////////////////////////// animation
                    if (mark == 100) {
                        result2.style.animation = "result2_a 1s linear, result2_a3 10s linear";
                    }
                    else {
                        result2.style.animation = "result2_a 1s linear, result2_a2 4s linear";
                    }
                    scroll_result2();
                    result2.style.visibility = 'visible';
                    count = 'stop'; i = 0; j = 0; prevent = 0;
                    answer.blur();
                    num2.value = ''; num1.value = '';
                    answer.value = ''; sum.value = '';
                }
                else { count += 1; }
                //___________ audio ________________
                if (sound.checked == true) {
                    for (let c = 0; c < 133; c++) {
                        audio[c].muted = true;
                    }
                    start.onmouseover = function () {
                        next_voice.play();
                    }
                }
            } else {
                if (page != 'g') { answer.placeholder = 'Answer'; }
                else if (page == 'g') {
                    num1.placeholder = 'Answer';
                    num2.placeholder = 'Answer';
                };
            }
        }
    }
    //___________________ alert _________________
    choose.onmouseover = function () {
        choose.setAttribute('title', "إذا غيرت الخيارات سيبدأ اختبار جديد");
        for (let i = 0; i < 12; i++) {
            choose_div[i].style.border = '2px solid inherit';
        }
    }
    choose.onmouseout = choose.onmouseleave = function () {
        choose.setAttribute('title', "إذا غيرت الخيارات سيبدأ اختبار جديد");
        for (let i = 0; i < 12; i++) {
            if (model_number == 1) {
                choose_div[i].style.border = '2px solid black';
            }
            if (model_number == 2) {
                choose_div[i].style.border = '2px solid white';
            }
            if (model_number == 3) {
                choose_div[i].style.border = '2px solid green';
            }
            if (model_number == 4) {
                choose_div[i].style.border = '2px solid darkblue';
            }
        }
    }
    arabic_count_errors();
};

num1.addEventListener('keyup', function (e) {
    if (sound.checked == true && e.keyCode != 32) {
        for (let c = 0; c < 128; c++) {
            audio[c].muted = true;
        }
        if (num1.value == 1 || num1.value == one) { a1.muted = false; a1.play() }
        else if (num1.value == 2 || num1.value == two) { a2.muted = false; a2.play() }
        else if (num1.value == 3 || num1.value == three) { a3.muted = false; a3.play() }
        else if (num1.value == 4 || num1.value == four) { a4.muted = false; a4.play() }
        else if (num1.value == 5 || num1.value == five) { a5.muted = false; a5.play() }
        else if (num1.value == 6 || num1.value == six) { a6.muted = false; a6.play() }
        else if (num1.value == 7 || num1.value == seven) { a7.muted = false; a7.play() }
        else if (num1.value == 8 || num1.value == eight) { a8.muted = false; a8.play() }
        else if (num1.value == 9 || num1.value == nine) { a9.muted = false; a9.play() }
        else if (num1.value == 10 || num1.value == one + zero) { a10.muted = false; a10.play() }
        else if (num1.value == 11 || num1.value == one + one) { a11.muted = false; a11.play() }
        else if (num1.value == 12 || num1.value == one + two) { a12.muted = false; a12.play() }
        else if (num1.value == 13 || num1.value == one + three) { a13.muted = false; a13.play() }
        else if (num1.value == 14 || num1.value == one + four) { a14.muted = false; a14.play() }
        else if (num1.value == 15 || num1.value == one + five) { a15.muted = false; a15.play() }
        else if (num1.value == 16 || num1.value == one + six) { a16.muted = false; a16.play() }
        else if (num1.value == 17 || num1.value == one + seven) { a17.muted = false; a17.play() }
        else if (num1.value == 18 || num1.value == one + eight) { a18.muted = false; a18.play() }
        else if (num1.value == 19 || num1.value == one + nine) { a19.muted = false; a19.play() }
        else if (num1.value == 20 || num1.value == two + zero) { a20.muted = false; a20.play() }
        else if (num1.value == 21 || num1.value == two + one) { a21.muted = false; a21.play() }
        else if (num1.value == 22 || num1.value == two + two) { a22.muted = false; a22.play() }
        else if (num1.value == 23 || num1.value == two + three) { a23.muted = false; a23.play() }
        else if (num1.value == 24 || num1.value == two + four) { a24.muted = false; a24.play() }
        else if (num1.value == 25 || num1.value == two + five) { a25.muted = false; a25.play() }
        else if (num1.value == 26 || num1.value == two + six) { a26.muted = false; a26.play() }
        else if (num1.value == 27 || num1.value == two + seven) { a27.muted = false; a27.play() }
        else if (num1.value == 28 || num1.value == two + eight) { a28.muted = false; a28.play() }
        else if (num1.value == 29 || num1.value == two + nine) { a29.muted = false; a29.play() }
        else if (num1.value == 30 || num1.value == three + zero) { a30.muted = false; a30.play() }
        else if (num1.value == 31 || num1.value == three + one) { a31.muted = false; a31.play() }
        else if (num1.value == 32 || num1.value == three + two) { a32.muted = false; a32.play() }
        else if (num1.value == 33 || num1.value == three + three) { a33.muted = false; a33.play() }
        else if (num1.value == 34 || num1.value == three + four) { a34.muted = false; a34.play() }
        else if (num1.value == 35 || num1.value == three + five) { a35.muted = false; a35.play() }
        else if (num1.value == 36 || num1.value == three + six) { a36.muted = false; a36.play() }
        else if (num1.value == 37 || num1.value == three + seven) { a37.muted = false; a37.play() }
        else if (num1.value == 38 || num1.value == three + eight) { a38.muted = false; a38.play() }
        else if (num1.value == 39 || num1.value == three + nine) { a39.muted = false; a39.play() }
        else if (num1.value == 40 || num1.value == four + zero) { a40.muted = false; a40.play() }
        else if (num1.value == 41 || num1.value == four + one) { a41.muted = false; a41.play() }
        else if (num1.value == 42 || num1.value == four + two) { a42.muted = false; a42.play() }
        else if (num1.value == 43 || num1.value == four + three) { a43.muted = false; a43.play() }
        else if (num1.value == 44 || num1.value == four + four) { a44.muted = false; a44.play() }
        else if (num1.value == 45 || num1.value == four + five) { a45.muted = false; a45.play() }
        else if (num1.value == 46 || num1.value == four + six) { a46.muted = false; a46.play() }
        else if (num1.value == 47 || num1.value == four + seven) { a47.muted = false; a47.play() }
        else if (num1.value == 48 || num1.value == four + eight) { a48.muted = false; a48.play() }
        else if (num1.value == 49 || num1.value == four + nine) { a49.muted = false; a49.play() }
        else if (num1.value == 50 || num1.value == five + zero) { a50.muted = false; a50.play() }
        else if (num1.value == 51 || num1.value == five + one) { a51.muted = false; a51.play() }
        else if (num1.value == 52 || num1.value == five + two) { a52.muted = false; a52.play() }
        else if (num1.value == 53 || num1.value == five + three) { a53.muted = false; a53.play() }
        else if (num1.value == 54 || num1.value == five + four) { a54.muted = false; a54.play() }
        else if (num1.value == 55 || num1.value == five + five) { a55.muted = false; a55.play() }
        else if (num1.value == 56 || num1.value == five + six) { a56.muted = false; a56.play() }
        else if (num1.value == 57 || num1.value == five + seven) { a57.muted = false; a57.play() }
        else if (num1.value == 58 || num1.value == five + eight) { a58.muted = false; a58.play() }
        else if (num1.value == 59 || num1.value == five + nine) { a59.muted = false; a59.play() }
        else if (num1.value == 60 || num1.value == six + zero) { a60.muted = false; a60.play() }
        else if (num1.value == 61 || num1.value == six + one) { a61.muted = false; a61.play() }
        else if (num1.value == 62 || num1.value == six + two) { a62.muted = false; a62.play() }
        else if (num1.value == 63 || num1.value == six + three) { a63.muted = false; a63.play() }
        else if (num1.value == 64 || num1.value == six + four) { a64.muted = false; a64.play() }
        else if (num1.value == 65 || num1.value == six + five) { a65.muted = false; a65.play() }
        else if (num1.value == 66 || num1.value == six + six) { a66.muted = false; a66.play() }
        else if (num1.value == 67 || num1.value == six + seven) { a67.muted = false; a67.play() }
        else if (num1.value == 68 || num1.value == six + eight) { a68.muted = false; a68.play() }
        else if (num1.value == 69 || num1.value == six + nine) { a69.muted = false; a69.play() }
        else if (num1.value == 70 || num1.value == seven + zero) { a70.muted = false; a70.play() }
        else if (num1.value == 71 || num1.value == seven + one) { a71.muted = false; a71.play() }
        else if (num1.value == 72 || num1.value == seven + two) { a72.muted = false; a72.play() }
        else if (num1.value == 73 || num1.value == seven + three) { a73.muted = false; a73.play() }
        else if (num1.value == 74 || num1.value == seven + four) { a74.muted = false; a74.play() }
        else if (num1.value == 75 || num1.value == seven + five) { a75.muted = false; a75.play() }
        else if (num1.value == 76 || num1.value == seven + six) { a76.muted = false; a76.play() }
        else if (num1.value == 77 || num1.value == seven + seven) { a77.muted = false; a77.play() }
        else if (num1.value == 78 || num1.value == seven + eight) { a78.muted = false; a78.play() }
        else if (num1.value == 79 || num1.value == seven + nine) { a79.muted = false; a79.play() }
        else if (num1.value == 80 || num1.value == eight + zero) { a80.muted = false; a80.play() }
        else if (num1.value == 81 || num1.value == eight + one) { a81.muted = false; a81.play() }
        else if (num1.value == 82 || num1.value == eight + two) { a82.muted = false; a82.play() }
        else if (num1.value == 83 || num1.value == eight + three) { a83.muted = false; a83.play() }
        else if (num1.value == 84 || num1.value == eight + four) { a84.muted = false; a84.play() }
        else if (num1.value == 85 || num1.value == eight + five) { a85.muted = false; a85.play() }
        else if (num1.value == 86 || num1.value == eight + six) { a86.muted = false; a86.play() }
        else if (num1.value == 87 || num1.value == eight + seven) { a87.muted = false; a87.play() }
        else if (num1.value == 88 || num1.value == eight + eight) { a88.muted = false; a88.play() }
        else if (num1.value == 89 || num1.value == eight + nine) { a89.muted = false; a89.play() }
        else if (num1.value == 90 || num1.value == nine + zero) { a90.muted = false; a90.play() }
        else if (num1.value == 91 || num1.value == nine + one) { a91.muted = false; a91.play() }
        else if (num1.value == 92 || num1.value == nine + two) { a92.muted = false; a92.play() }
        else if (num1.value == 93 || num1.value == nine + three) { a93.muted = false; a93.play() }
        else if (num1.value == 94 || num1.value == nine + four) { a94.muted = false; a94.play() }
        else if (num1.value == 95 || num1.value == nine + five) { a95.muted = false; a95.play() }
        else if (num1.value == 96 || num1.value == nine + six) { a96.muted = false; a96.play() }
        else if (num1.value == 97 || num1.value == nine + seven) { a97.muted = false; a97.play() }
        else if (num1.value == 98 || num1.value == nine + eight) { a98.muted = false; a98.play() }
        else if (num1.value == 99 || num1.value == nine + nine) { a99.muted = false; a99.play() }
        else if (num1.value == 100 || num1.value == one + zero + zero) { a100.muted = false; a100.play() }
        else if (num1.value != '') { awrong.muted = false; awrong.play() }
    }
});
num2.addEventListener('keyup', function (e) {
    if (sound.checked == true && e.keyCode != 32) {
        for (let c = 0; c < 128; c++) {
            audio[c].muted = true;
            // audio[c].pause();
            // audio[c].load();
        }
        if (num2.value == 1 || num2.value == one) { a1.muted = false; a1.play() }
        else if (num2.value == 2 || num2.value == two) { a2.muted = false; a2.play() }
        else if (num2.value == 3 || num2.value == three) { a3.muted = false; a3.play() }
        else if (num2.value == 4 || num2.value == four) { a4.muted = false; a4.play() }
        else if (num2.value == 5 || num2.value == five) { a5.muted = false; a5.play() }
        else if (num2.value == 6 || num2.value == six) { a6.muted = false; a6.play() }
        else if (num2.value == 7 || num2.value == seven) { a7.muted = false; a7.play() }
        else if (num2.value == 8 || num2.value == eight) { a8.muted = false; a8.play() }
        else if (num2.value == 9 || num2.value == nine) { a9.muted = false; a9.play() }
        else if (num2.value == 10 || num2.value == one + zero) { a10.muted = false; a10.play() }
        else if (num2.value == 11 || num2.value == one + one) { a11.muted = false; a11.play() }
        else if (num2.value == 12 || num2.value == one + two) { a12.muted = false; a12.play() }
        else if (num2.value == 13 || num2.value == one + three) { a13.muted = false; a13.play() }
        else if (num2.value == 14 || num2.value == one + four) { a14.muted = false; a14.play() }
        else if (num2.value == 15 || num2.value == one + five) { a15.muted = false; a15.play() }
        else if (num2.value == 16 || num2.value == one + six) { a16.muted = false; a16.play() }
        else if (num2.value == 17 || num2.value == one + seven) { a17.muted = false; a17.play() }
        else if (num2.value == 18 || num2.value == one + eight) { a18.muted = false; a18.play() }
        else if (num2.value == 19 || num2.value == one + nine) { a19.muted = false; a19.play() }
        else if (num2.value == 20 || num2.value == two + zero) { a20.muted = false; a20.play() }
        else if (num2.value == 21 || num2.value == two + one) { a21.muted = false; a21.play() }
        else if (num2.value == 22 || num2.value == two + two) { a22.muted = false; a22.play() }
        else if (num2.value == 23 || num2.value == two + three) { a23.muted = false; a23.play() }
        else if (num2.value == 24 || num2.value == two + four) { a24.muted = false; a24.play() }
        else if (num2.value == 25 || num2.value == two + five) { a25.muted = false; a25.play() }
        else if (num2.value == 26 || num2.value == two + six) { a26.muted = false; a26.play() }
        else if (num2.value == 27 || num2.value == two + seven) { a27.muted = false; a27.play() }
        else if (num2.value == 28 || num2.value == two + eight) { a28.muted = false; a28.play() }
        else if (num2.value == 29 || num2.value == two + nine) { a29.muted = false; a29.play() }
        else if (num2.value == 30 || num2.value == three + zero) { a30.muted = false; a30.play() }
        else if (num2.value == 31 || num2.value == three + one) { a31.muted = false; a31.play() }
        else if (num2.value == 32 || num2.value == three + two) { a32.muted = false; a32.play() }
        else if (num2.value == 33 || num2.value == three + three) { a33.muted = false; a33.play() }
        else if (num2.value == 34 || num2.value == three + four) { a34.muted = false; a34.play() }
        else if (num2.value == 35 || num2.value == three + five) { a35.muted = false; a35.play() }
        else if (num2.value == 36 || num2.value == three + six) { a36.muted = false; a36.play() }
        else if (num2.value == 37 || num2.value == three + seven) { a37.muted = false; a37.play() }
        else if (num2.value == 38 || num2.value == three + eight) { a38.muted = false; a38.play() }
        else if (num2.value == 39 || num2.value == three + nine) { a39.muted = false; a39.play() }
        else if (num2.value == 40 || num2.value == four + zero) { a40.muted = false; a40.play() }
        else if (num2.value == 41 || num2.value == four + one) { a41.muted = false; a41.play() }
        else if (num2.value == 42 || num2.value == four + two) { a42.muted = false; a42.play() }
        else if (num2.value == 43 || num2.value == four + three) { a43.muted = false; a43.play() }
        else if (num2.value == 44 || num2.value == four + four) { a44.muted = false; a44.play() }
        else if (num2.value == 45 || num2.value == four + five) { a45.muted = false; a45.play() }
        else if (num2.value == 46 || num2.value == four + six) { a46.muted = false; a46.play() }
        else if (num2.value == 47 || num2.value == four + seven) { a47.muted = false; a47.play() }
        else if (num2.value == 48 || num2.value == four + eight) { a48.muted = false; a48.play() }
        else if (num2.value == 49 || num2.value == four + nine) { a49.muted = false; a49.play() }
        else if (num2.value == 50 || num2.value == five + zero) { a50.muted = false; a50.play() }
        else if (num2.value == 51 || num2.value == five + one) { a51.muted = false; a51.play() }
        else if (num2.value == 52 || num2.value == five + two) { a52.muted = false; a52.play() }
        else if (num2.value == 53 || num2.value == five + three) { a53.muted = false; a53.play() }
        else if (num2.value == 54 || num2.value == five + four) { a54.muted = false; a54.play() }
        else if (num2.value == 55 || num2.value == five + five) { a55.muted = false; a55.play() }
        else if (num2.value == 56 || num2.value == five + six) { a56.muted = false; a56.play() }
        else if (num2.value == 57 || num2.value == five + seven) { a57.muted = false; a57.play() }
        else if (num2.value == 58 || num2.value == five + eight) { a58.muted = false; a58.play() }
        else if (num2.value == 59 || num2.value == five + nine) { a59.muted = false; a59.play() }
        else if (num2.value == 60 || num2.value == six + zero) { a60.muted = false; a60.play() }
        else if (num2.value == 61 || num2.value == six + one) { a61.muted = false; a61.play() }
        else if (num2.value == 62 || num2.value == six + two) { a62.muted = false; a62.play() }
        else if (num2.value == 63 || num2.value == six + three) { a63.muted = false; a63.play() }
        else if (num2.value == 64 || num2.value == six + four) { a64.muted = false; a64.play() }
        else if (num2.value == 65 || num2.value == six + five) { a65.muted = false; a65.play() }
        else if (num2.value == 66 || num2.value == six + six) { a66.muted = false; a66.play() }
        else if (num2.value == 67 || num2.value == six + seven) { a67.muted = false; a67.play() }
        else if (num2.value == 68 || num2.value == six + eight) { a68.muted = false; a68.play() }
        else if (num2.value == 69 || num2.value == six + nine) { a69.muted = false; a69.play() }
        else if (num2.value == 70 || num2.value == seven + zero) { a70.muted = false; a70.play() }
        else if (num2.value == 71 || num2.value == seven + one) { a71.muted = false; a71.play() }
        else if (num2.value == 72 || num2.value == seven + two) { a72.muted = false; a72.play() }
        else if (num2.value == 73 || num2.value == seven + three) { a73.muted = false; a73.play() }
        else if (num2.value == 74 || num2.value == seven + four) { a74.muted = false; a74.play() }
        else if (num2.value == 75 || num2.value == seven + five) { a75.muted = false; a75.play() }
        else if (num2.value == 76 || num2.value == seven + six) { a76.muted = false; a76.play() }
        else if (num2.value == 77 || num2.value == seven + seven) { a77.muted = false; a77.play() }
        else if (num2.value == 78 || num2.value == seven + eight) { a78.muted = false; a78.play() }
        else if (num2.value == 79 || num2.value == seven + nine) { a79.muted = false; a79.play() }
        else if (num2.value == 80 || num2.value == eight + zero) { a80.muted = false; a80.play() }
        else if (num2.value == 81 || num2.value == eight + one) { a81.muted = false; a81.play() }
        else if (num2.value == 82 || num2.value == eight + two) { a82.muted = false; a82.play() }
        else if (num2.value == 83 || num2.value == eight + three) { a83.muted = false; a83.play() }
        else if (num2.value == 84 || num2.value == eight + four) { a84.muted = false; a84.play() }
        else if (num2.value == 85 || num2.value == eight + five) { a85.muted = false; a85.play() }
        else if (num2.value == 86 || num2.value == eight + six) { a86.muted = false; a86.play() }
        else if (num2.value == 87 || num2.value == eight + seven) { a87.muted = false; a87.play() }
        else if (num2.value == 88 || num2.value == eight + eight) { a88.muted = false; a88.play() }
        else if (num2.value == 89 || num2.value == eight + nine) { a89.muted = false; a89.play() }
        else if (num2.value == 90 || num2.value == nine + zero) { a90.muted = false; a90.play() }
        else if (num2.value == 91 || num2.value == nine + one) { a91.muted = false; a91.play() }
        else if (num2.value == 92 || num2.value == nine + two) { a92.muted = false; a92.play() }
        else if (num2.value == 93 || num2.value == nine + three) { a93.muted = false; a93.play() }
        else if (num2.value == 94 || num2.value == nine + four) { a94.muted = false; a94.play() }
        else if (num2.value == 95 || num2.value == nine + five) { a95.muted = false; a95.play() }
        else if (num2.value == 96 || num2.value == nine + six) { a96.muted = false; a96.play() }
        else if (num2.value == 97 || num2.value == nine + seven) { a97.muted = false; a97.play() }
        else if (num2.value == 98 || num2.value == nine + eight) { a98.muted = false; a98.play() }
        else if (num2.value == 99 || num2.value == nine + nine) { a99.muted = false; a99.play() }
        else if (num2.value == 100 || num2.value == one + zero + zero) { a100.muted = false; a100.play() }
        else if (num2.value != '') { awrong.muted = false; awrong.play() }
    }
});
num1.onmouseover = function () {
    if (sound.checked == true) {
        for (let c = 0; c < 131; c++) {
            audio[c].muted = true;
        }
        if (num1.value == 1 || num1.value == one) { a1.muted = false; a1.play() }
        if (num1.value == 2 || num1.value == two) { a2.muted = false; a2.play() }
        if (num1.value == 3 || num1.value == three) { a3.muted = false; a3.play() }
        if (num1.value == 4 || num1.value == four) { a4.muted = false; a4.play() }
        if (num1.value == 5 || num1.value == five) { a5.muted = false; a5.play() }
        if (num1.value == 6 || num1.value == six) { a6.muted = false; a6.play() }
        if (num1.value == 7 || num1.value == seven) { a7.muted = false; a7.play() }
        if (num1.value == 8 || num1.value == eight) { a8.muted = false; a8.play() }
        if (num1.value == 9 || num1.value == nine) { a9.muted = false; a9.play() }
        if (num1.value == 10 || num1.value == one + zero) { a10.muted = false; a10.play() }
    }
};
num2.onmouseover = function () {
    if (sound.checked == true) {
        for (let c = 0; c < 131; c++) {
            audio[c].muted = true;
        }
        if (num2.value == 1 || num2.value == one) { a1.muted = false; a1.play() }
        if (num2.value == 2 || num2.value == two) { a2.muted = false; a2.play() }
        if (num2.value == 3 || num2.value == three) { a3.muted = false; a3.play() }
        if (num2.value == 4 || num2.value == four) { a4.muted = false; a4.play() }
        if (num2.value == 5 || num2.value == five) { a5.muted = false; a5.play() }
        if (num2.value == 6 || num2.value == six) { a6.muted = false; a6.play() }
        if (num2.value == 7 || num2.value == seven) { a7.muted = false; a7.play() }
        if (num2.value == 8 || num2.value == eight) { a8.muted = false; a8.play() }
        if (num2.value == 9 || num2.value == nine) { a9.muted = false; a9.play() }
        if (num2.value == 10 || num2.value == one + zero) { a10.muted = false; a10.play() }
    }
};

//_______________________________result___________________________
result.onclick = function () {
    if (prevent == 0 && answer.value != '' && num1.value != '') {
        prevent = 1;
        if (arabic_choose.checked) { english() };
        if (((answer.value == +num1.value * +num2.value
            || (mode == 'cycle_1' && answer_eng == +num1_1 * +num2_2)
        )
            && answer.value != 0 && (page == 'm'))
            || (
                (answer.value == +num1.value / +num2.value
                    || (mode == 'cycle_1' && answer_eng == +num1_1 / +num2_2))
                && answer.value != 0 && page == 'd')
            || (((num1.value == num1_saved && num2.value == num2_saved)
                || (num1.value == num2_saved && num2.value == num1_saved)
                || (eng_num1 == num1_saved && eng_num2 == num2_saved)
                || (eng_num1 == num2_saved && eng_num2 == num1_saved))
                && num1.value != '' && num2.value != '' && page == "g")
        ) {
            result.innerHTML = `Right `;
            if (sound.checked == true) {
                for (let c = 0; c < 133; c++) {
                    audio[c].muted = true;
                    // audio[c].pause();
                    // audio[c].load();

                }
                right.muted = false;
                right.play();
            }
        } else if (((answer.value == +num1.value * +num2.value
            || (mode == 'cycle_2' && answer_eng == +num1_1_error * +num2_2_error))
            && answer.value != 0 && page == 'm')
            || ((answer.value == +num1.value / +num2.value
                || (mode == 'cycle_2' && answer_eng == +num1_1_error / +num2_2_error))
                && answer.value != 0 && page == 'd'
            )

        ) {
            result.innerHTML = `Right `;
            if (sound.checked == true) {
                for (let c = 0; c < 133; c++) {
                    audio[c].muted = true;
                }
                right.muted = false;
                right.play();
            }
        }
        else {
            if (page == 'm') { answer.value = +num1.value * +num2.value; }
            else if (page == 'd') { answer.value = +num1.value / +num2.value; }
            prevent_mark = 1;
            if (page == 'g') {
                num1.value = num1_saved;
                num2.value = num2_saved;
            }

            if (typeof answer.value != Number && page != 'g') {
                if (mode == 'cycle_1') {
                    if (page == 'm') { answer.value = +num1_1 * +num2_2; }
                    else if (page == 'd') { answer.value = +num1_1 / +num2_2; }
                } else {
                    if (page == 'm') { answer.value = +num1_1_error * +num2_2_error; }
                    else if (page == 'd') { answer.value = +num1_1_error / +num2_2_error; }
                }
                if (arabic_choose.checked) {
                    for (let i = 0; i < answer.value.length; i++) {
                        if (answer.value[i] == 0) { answer.value = answer.value.replace(answer.value[+i], zero) }
                        if (answer.value[i] == 1) { answer.value = answer.value.replace(answer.value[+i], one) }
                        if (answer.value[i] == 2) { answer.value = answer.value.replace(answer.value[+i], two) }
                        if (answer.value[i] == 3) { answer.value = answer.value.replace(answer.value[+i], three) }
                        if (answer.value[i] == 4) { answer.value = answer.value.replace(answer.value[+i], four) }
                        if (answer.value[i] == 5) { answer.value = answer.value.replace(answer.value[+i], five) }
                        if (answer.value[i] == 6) { answer.value = answer.value.replace(answer.value[+i], six) }
                        if (answer.value[i] == 7) { answer.value = answer.value.replace(answer.value[+i], seven) }
                        if (answer.value[i] == 8) { answer.value = answer.value.replace(answer.value[+i], eight) }
                        if (answer.value[i] == 9) { answer.value = answer.value.replace(answer.value[+i], nine) }
                        if (answer.value[i] == null) { answer.value = answer.value.replace(answer.value[+i], ` `) }
                    };
                    for (let i = 0; i < num1.value.length; i++) {
                        if (num1.value[i] == 0) { num1.value = num1.value.replace(num1.value[+i], zero) }
                        if (num1.value[i] == 1) { num1.value = num1.value.replace(num1.value[+i], one) }
                        if (num1.value[i] == 2) { num1.value = num1.value.replace(num1.value[+i], two) }
                        if (num1.value[i] == 3) { num1.value = num1.value.replace(num1.value[+i], three) }
                        if (num1.value[i] == 4) { num1.value = num1.value.replace(num1.value[+i], four) }
                        if (num1.value[i] == 5) { num1.value = num1.value.replace(num1.value[+i], five) }
                        if (num1.value[i] == 6) { num1.value = num1.value.replace(num1.value[+i], six) }
                        if (num1.value[i] == 7) { num1.value = num1.value.replace(num1.value[+i], seven) }
                        if (num1.value[i] == 8) { num1.value = num1.value.replace(num1.value[+i], eight) }
                        if (num1.value[i] == 9) { num1.value = num1.value.replace(num1.value[+i], nine) }
                        // if (num1.value[i] == null) { num1.value = num1.value.replace(num1.value[+i], ` `) }
                    };
                    for (let i = 0; i < num2.value.length; i++) {
                        if (num2.value[i] == 0) { num2.value = num2.value.replace(num2.value[+i], zero) }
                        if (num2.value[i] == 1) { num2.value = num2.value.replace(num2.value[+i], one) }
                        if (num2.value[i] == 2) { num2.value = num2.value.replace(num2.value[+i], two) }
                        if (num2.value[i] == 3) { num2.value = num2.value.replace(num2.value[+i], three) }
                        if (num2.value[i] == 4) { num2.value = num2.value.replace(num2.value[+i], four) }
                        if (num2.value[i] == 5) { num2.value = num2.value.replace(num2.value[+i], five) }
                        if (num2.value[i] == 6) { num2.value = num2.value.replace(num2.value[+i], six) }
                        if (num2.value[i] == 7) { num2.value = num2.value.replace(num2.value[+i], seven) }
                        if (num2.value[i] == 8) { num2.value = num2.value.replace(num2.value[+i], eight) }
                        if (num2.value[i] == 9) { num2.value = num2.value.replace(num2.value[+i], nine) }
                        // if (num2.value[i] == null) { num2.value = num2.value.replace(num2.value[+i], ` `) }
                    };
                }
            };
            if (typeof num1.value != Number || typeof num2.value != Number) {
                if (arabic_choose.checked) {
                    for (let i = 0; i < num1.value.length; i++) {
                        if (num1.value[i] == 0) { num1.value = num1.value.replace(num1.value[+i], zero) }
                        if (num1.value[i] == 1) { num1.value = num1.value.replace(num1.value[+i], one) }
                        if (num1.value[i] == 2) { num1.value = num1.value.replace(num1.value[+i], two) }
                        if (num1.value[i] == 3) { num1.value = num1.value.replace(num1.value[+i], three) }
                        if (num1.value[i] == 4) { num1.value = num1.value.replace(num1.value[+i], four) }
                        if (num1.value[i] == 5) { num1.value = num1.value.replace(num1.value[+i], five) }
                        if (num1.value[i] == 6) { num1.value = num1.value.replace(num1.value[+i], six) }
                        if (num1.value[i] == 7) { num1.value = num1.value.replace(num1.value[+i], seven) }
                        if (num1.value[i] == 8) { num1.value = num1.value.replace(num1.value[+i], eight) }
                        if (num1.value[i] == 9) { num1.value = num1.value.replace(num1.value[+i], nine) }
                        // if (num1.value[i] == null) { num1.value = num1.value.replace(num1.value[+i], ` `) }
                    };
                    for (let i = 0; i < num2.value.length; i++) {
                        if (num2.value[i] == 0) { num2.value = num2.value.replace(num2.value[+i], zero) }
                        if (num2.value[i] == 1) { num2.value = num2.value.replace(num2.value[+i], one) }
                        if (num2.value[i] == 2) { num2.value = num2.value.replace(num2.value[+i], two) }
                        if (num2.value[i] == 3) { num2.value = num2.value.replace(num2.value[+i], three) }
                        if (num2.value[i] == 4) { num2.value = num2.value.replace(num2.value[+i], four) }
                        if (num2.value[i] == 5) { num2.value = num2.value.replace(num2.value[+i], five) }
                        if (num2.value[i] == 6) { num2.value = num2.value.replace(num2.value[+i], six) }
                        if (num2.value[i] == 7) { num2.value = num2.value.replace(num2.value[+i], seven) }
                        if (num2.value[i] == 8) { num2.value = num2.value.replace(num2.value[+i], eight) }
                        if (num2.value[i] == 9) { num2.value = num2.value.replace(num2.value[+i], nine) }
                        if (num2.value[i] == null) { num2.value = num2.value.replace(num2.value[+i], ` `) }
                    };
                }
            }
            result.innerHTML = ` Right Answer ↑  <span id='error'>Wrong</span>`;
            if (sound.checked == true) {
                for (let c = 0; c < 133; c++) {
                    audio[c].muted = true;
                    // audio[c].pause();
                    // audio[c].load();

                }
                // awrong.muted = false;
                // awrong.play();
                correct.muted = false;
                correct.play();
                if (page != 'g') {
                    setTimeout(() => {
                        answer.onmouseover();
                    }, 2800);
                } else if (page == 'g') {
                    correct.muted = false;
                    correct.play();
                    setTimeout(() => {
                        num1.muted = false;
                        num1.onmouseover();
                    }, 2600);
                    setTimeout(() => {
                        num2.muted = false;
                        num2.onmouseover();
                    }, 3500);

                }
            }
        }
    }
};
//_______________________________new________________________
let newExam = document.getElementById('new');
newExam.onclick = function () {
    start_errors.style.animation = "none";
    section_buttons.classList.remove('correct', 'wrong');
    //__________________ random !!!
    if (m1.checked == true) {
        m1.checked = false;
        m1.checked = true;
        numbers_input[1].onclick();
    }
    if (m2.checked == true) {
        m2.checked = false;
        m2.checked = true;
        numbers_input[2].onclick();
    }
    if (m3.checked == true) {
        m3.checked = false;
        m3.checked = true;
        numbers_input[3].onclick();
    }
    if (m4.checked == true) {
        m4.checked = false;
        m4.checked = true;
        numbers_input[4].onclick();
    }
    if (m5.checked == true) {
        m5.checked = false;
        m5.checked = true;
        numbers_input[5].onclick();
    }
    if (m6.checked == true) {
        m6.checked = false;
        m6.checked = true;
        numbers_input[6].onclick();
    }
    if (m7.checked == true) {
        m7.checked = false;
        m7.checked = true;
        numbers_input[7].onclick();
    }
    if (m8.checked == true) {
        m8.checked = false;
        m8.checked = true;
        numbers_input[8].onclick();
    }
    if (m9.checked == true) {
        m9.checked = false;
        m9.checked = true;
        numbers_input[9].onclick();
    }
    if (m10.checked == true) {
        m10.checked = false;
        m10.checked = true;
        numbers_input[10].onclick();
    }
    //_____________________
    clearInterval(timer_function);
    minutes = 0; timer_function = 0; newExam_errors_mode = 0; // تحديث
    timer.innerHTML = '';
    timer.style.display = 'none';
    pm = 1;
    mode = 'cycle_1'; arabic_choose.disabled = false;
    start_errors.disabled = true;
    start.disabled = false;
    start.innerHTML = "  Start the test (enter)";
    newExam_errors.disabled = true;
    i = 0; j = 0; mark = 0; count = 0; prevent = 0;
    num2.value = ''; num1.value = ''; answer.value = ''; sum.value = '';
    answer.placeholder = ''; num1.placeholder = ''; num2.placeholder = '';
    result.innerHTML = `Check the answer (space)`;
    result2.style.visibility = 'hidden';
    count_errors = 0;
    errors_num1.splice(0);
    errors_num2.splice(0);
    answer.blur();
    document.onkeydown = function (e) {
        if (e.keyCode == 32) { // space مفتاح
            if (answer.value != '') {
                result.onclick();
            }
        }
        if (e.keyCode == '27') { // esc مفتاح                  
            title.onclick();
        }
        if (e.keyCode == 13) { // Enter مفتاح  
            start.onclick();
        }
        if (e.keyCode == 78) { // letter  n 
            newExam.onclick();
        }
        if (e.keyCode == 17) { // ctrl مفتاح  
            if (count_errors > 0) {
                newExam_errors.onclick();
            }
            else if (errors_num1.length == 0 && mode == 'cycle_2') {
                window.scroll({ left: 300, top: 0, behavior: "smooth" });
                newExam.onclick();
            }
        }
        keys[e.key] = true;
        if (keys['z'] && keys['a']) {
            all_input.checked = true;
            all_input.onclick();
        }
        if (keys['z'] && keys['x']) {
            all_input.checked = false;
            all_input.onclick();
        }
        for (let i = 1; i < 10; i++) {
            if (keys['+'] && keys[i]) {
                numbers_input[i].checked = true;
                numbers_input[i].onclick();
            }
        }
        if (keys['+'] && keys['0']) {
            m10.checked = true;
            m10.onclick();
        }
        for (let i = 1; i < 10; i++) {
            if (keys['-'] && keys[i]) {
                numbers_input[i].checked = false;
                numbers_input[i].onclick();
            }
        }

        if (keys['-'] && keys['0']) {
            m10.checked = false;
            m10.onclick();
        }
        if (arabic_choose.disabled == false) {
            if (e.shiftKey && e.key == 'A') {
                arabic_choose.checked = true;
                arabic_numbers();
                arabic_choose.onclick();
            }
            if (e.shiftKey && e.key == 'E') {
                arabic_choose.checked = false;
                arabic_choose.onclick();
            }
        }
        if (e.shiftKey && e.key == 'S') {
            if (sound.checked == false) {
                sound.checked = true; sound.onclick();
            }
            else { sound.checked = false; sound.onclick(); }
        }
        if (e.keyCode == 38) {
            section_buttons.classList.remove('correct', 'wrong');
            if (page != 'g') {
                if (num1.value != '' && arabic_choose.checked == false) {
                    if (answer.value == '') { answer.value = +0 };
                    answer.value = +answer.value + 1;
                }
                else if (num1.value != '' && arabic_choose.checked == true) {
                    if (answer.value == '') { answer.value = +0 };
                    english_numbers();
                    answer.value = +answer.value + 1;
                    answer_eng = answer.value;
                    arabic_numbers();
                }
            }
            else if (page == 'g') {
                if (num_input == 1) {
                    if (answer.value != '' && arabic_choose.checked == false) {
                        if (num1.value == '') { num1.value = +0 }
                        num1.value = +num1.value + 1;
                    }
                    else if (answer.value != '' && arabic_choose.checked == true) {
                        if (num1.value == '') { num1.value = +0 };
                        english_numbers();
                        num1.value = +num1.value + 1;
                        num1_eng = num1.value;
                        arabic_numbers();

                    }
                }
                if (num_input == 2) {
                    if (answer.value != '' && arabic_choose.checked == false) {
                        if (num2.value == '') { num2.value = +0 }
                        num2.value = +num2.value + 1;
                    }
                    else if (answer.value != '' && arabic_choose.checked == true) {
                        if (num2.value == '') { num2.value = +0 };
                        english_numbers();
                        num2.value = +num2.value + 1;
                        num2_eng = num2.value;
                        arabic_numbers();

                    }
                }
            }
        }
        if (e.keyCode == 40) {
            if (page != 'g') {
                if (num1.value != '' && arabic_choose.checked == false) {
                    if (answer.value == '') { answer.value = +0 }
                    answer.value = +answer.value - 1;
                }
                else if (num1.value != '' && arabic_choose.checked == true) {
                    if (answer.value == '') { answer.value = +0 };
                    english_numbers();
                    answer.value = +answer.value - 1;
                    answer_eng = answer.value;
                    arabic_numbers();
                }
            }
            else if (page == 'g') {
                if (num_input == 1) {
                    if (answer.value != '' && arabic_choose.checked == false) {
                        if (num1.value == '') { num1.value = +0 }
                        num1.value = +num1.value - 1;
                    }
                    else if (answer.value != '' && arabic_choose.checked == true) {
                        if (num1.value == '') { num1.value = +0 };
                        english_numbers();
                        num1.value = +num1.value - 1;
                        answer_eng = answer.value;
                        arabic_numbers();
                    }
                }
                if (num_input == 2) {
                    if (answer.value != '' && arabic_choose.checked == false) {
                        if (num2.value == '') { num2.value = +0 }
                        num2.value = +num2.value - 1;
                    }
                    else if (answer.value != '' && arabic_choose.checked == true) {
                        if (num2.value == '') { num2.value = +0 };
                        english_numbers();
                        num2.value = +num2.value - 1;
                        answer_eng = answer.value;
                        arabic_numbers();

                    }
                }
            }
        }
    }
    document.onkeyup = function (e) {
        keys[e.key] = false;
    }
    choose.onmouseover = function () {
        choose.setAttribute('title', "");
        for (let i = 0; i < 12; i++) {
            if (model_number == 1) {
                choose_div[i].style.border = '2px solid black';
            }
            if (model_number == 2) {
                choose_div[i].style.border = '2px solid white';
            }
            if (model_number == 3) {
                choose_div[i].style.border = '2px solid green';
            }
            if (model_number == 4) {
                choose_div[i].style.border = '2px solid darkblue';
            }
        }
    }
    answer_eng = '';
    prevent_mark = 0;
    mark_arabic = ''; count_errors_arabic = '';
    count_errors = 0; errors_num1 = []; errors_num2 = [];
    errors_num1_cycle = []; errors_num2_cycle = [];
    arabic_count_errors();
    //_______ تحديث ---
    if (newExam_mode == 0) {
        start.onclick();
    }

};
//_____________________ Random Number Example ______________________________________
// let max = 15;
// let min = 5;
// let example = Math.floor(Math.random() * (max - min + 1)) + min;
// example = Math.floor(Math.random() * 11) + 5;
// console.log(example);
//____________________Arabic numbers________________________________
const zero = "٠";
const one = "١";
const two = "٢";
const three = "٣";
const four = "٤";
const five = "٥";
const six = "٦";
const seven = "٧";
const eight = "٨";
const nine = "٩";
//_______________ أعد اختبار الأخطاء _______________________
newExam_errors.onclick = function () {
    section_buttons.classList.remove('correct', 'wrong');
    result2.style.visibility = 'hidden';
    clearInterval(timer_function);
    minutes = 0; timer_function = 0;
    timer.innerHTML = '';
    timer.style.display = 'none';
    pm = 1;
    if (errors_num1.length != 0) {
        scroll_error1(); scroll_error2(); scroll_error3();
        start_errors.disabled = false;
        mode = 'cycle_2';
        result2.style.animation = 'none';
        newExam_mode = 1; // ---
        arabic_choose.disabled = true;

        errors_num1_cycle = errors_num1.slice();
        errors_num2_cycle = errors_num2.slice();
        start.disabled = true;
        start.innerHTML = "Click: Start bug testing ↙ ";
        start_errors.style.animation = "starterrors 100ms 10 linear";
        setTimeout(function () {
            start_errors.style.animation = "none";
        }, 1000);
        if (window.innerWidth < 1100) {
            start.innerHTML = "Click: Start bug testing ↓  ";
        }
        i = 0; j = 0; mark = 0; count = 0; prevent = 0;
        num2.value = ''; num1.value = ''; answer.value = ''; sum.value = '';
        result.innerHTML = `Check the answer (space)`;
        // answer.placeholder = ''; num1.placeholder = ''; num2.placeholder = '';
        if (errors_num1.length != 0) {
            if (num1.value != '' && page != 'g') {
                answer.placeholder = 'Answer';
            }
            else if (answer.value != '' && page == 'g') {
                num1.placeholder = 'Answer';
                num2.placeholder = 'Answer';
            };
        }

        count_errors = 0;
        document.onkeydown = function (e) {
            if (e.keyCode == 32) { // space مفتاح
                if (answer.value != '') {
                    result.onclick();
                }
            }
            if (e.keyCode == '27') { // esc مفتاح                  
                title.onclick();
            }
            if (e.keyCode == 13) { // Enter مفتاح  
                start_errors.onclick();
            }
            if (e.keyCode == 78) { // letter  n 
                newExam.onclick();
            }
            if (e.keyCode == 17) { // ctrl مفتاح  
                if (count_errors > 0) {
                    newExam_errors.onclick();
                }
                else if (errors_num1.length == 0 && mode == 'cycle_2') {
                    window.scroll({ left: 300, top: 0, behavior: "smooth" });
                    newExam.onclick();
                }
            }
            keys[e.key] = true;
            if (keys['z'] && keys['a']) {
                all_input.checked = true;
                all_input.onclick();
            }
            if (keys['z'] && keys['x']) {
                all_input.checked = false;
                all_input.onclick();
            }
            for (let i = 1; i < 10; i++) {
                if (keys['+'] && keys[i]) {
                    numbers_input[i].checked = true;
                    numbers_input[i].onclick();
                }
            }
            if (keys['+'] && keys['0']) {
                m10.checked = true;
                m10.onclick();
            }
            for (let i = 1; i < 10; i++) {
                if (keys['-'] && keys[i]) {
                    numbers_input[i].checked = false;
                    numbers_input[i].onclick();
                }
            }

            if (keys['-'] && keys['0']) {
                m10.checked = false;
                m10.onclick();
            }
            if (arabic_choose.disabled == false) {
                if (e.shiftKey && e.key == 'A') {
                    arabic_choose.checked = true;
                    arabic_numbers();
                    arabic_choose.onclick();
                }
                if (e.shiftKey && e.key == 'E') {
                    arabic_choose.checked = false;
                    arabic_choose.onclick();
                }
            }
            if (e.shiftKey && e.key == 'S') {
                if (sound.checked == false) {
                    sound.checked = true; sound.onclick();
                }
                else { sound.checked = false; sound.onclick(); }
            }
            if (e.keyCode == 38) {
                section_buttons.classList.remove('correct', 'wrong');
                if (page != 'g') {
                    if (num1.value != '' && arabic_choose.checked == false) {
                        if (answer.value == '') { answer.value = +0 };
                        answer.value = +answer.value + 1;
                    }
                    else if (num1.value != '' && arabic_choose.checked == true) {
                        if (answer.value == '') { answer.value = +0 };
                        english_numbers();
                        answer.value = +answer.value + 1;
                        answer_eng = answer.value;
                        arabic_numbers();
                    }
                }
                else if (page == 'g') {
                    if (num_input == 1) {
                        if (answer.value != '' && arabic_choose.checked == false) {
                            if (num1.value == '') { num1.value = +0 }
                            num1.value = +num1.value + 1;
                        }
                        else if (answer.value != '' && arabic_choose.checked == true) {
                            if (num1.value == '') { num1.value = +0 };
                            english_numbers();
                            num1.value = +num1.value + 1;
                            num1_eng = num1.value;
                            arabic_numbers();

                        }
                    }
                    if (num_input == 2) {
                        if (answer.value != '' && arabic_choose.checked == false) {
                            if (num2.value == '') { num2.value = +0 }
                            num2.value = +num2.value + 1;
                        }
                        else if (answer.value != '' && arabic_choose.checked == true) {
                            if (num2.value == '') { num2.value = +0 };
                            english_numbers();
                            num2.value = +num2.value + 1;
                            num2_eng = num2.value;
                            arabic_numbers();

                        }
                    }
                }
            };
            if (e.keyCode == 40) {
                if (page != 'g') {
                    if (num1.value != '' && arabic_choose.checked == false) {
                        if (answer.value == '') { answer.value = +0 }
                        answer.value = +answer.value - 1;
                    }
                    else if (num1.value != '' && arabic_choose.checked == true) {
                        if (answer.value == '') { answer.value = +0 };
                        english_numbers();
                        answer.value = +answer.value - 1;
                        answer_eng = answer.value;
                        arabic_numbers();
                    }
                }
                else if (page == 'g') {
                    if (num_input == 1) {
                        if (answer.value != '' && arabic_choose.checked == false) {
                            if (num1.value == '') { num1.value = +0 }
                            num1.value = +num1.value - 1;
                        }
                        else if (answer.value != '' && arabic_choose.checked == true) {
                            if (num1.value == '') { num1.value = +0 };
                            english_numbers();
                            num1.value = +num1.value - 1;
                            answer_eng = answer.value;
                            arabic_numbers();
                        }
                    }
                    if (num_input == 2) {
                        if (answer.value != '' && arabic_choose.checked == false) {
                            if (num2.value == '') { num2.value = +0 }
                            num2.value = +num2.value - 1;
                        }
                        else if (answer.value != '' && arabic_choose.checked == true) {
                            if (num2.value == '') { num2.value = +0 };
                            english_numbers();
                            num2.value = +num2.value - 1;
                            answer_eng = answer.value;
                            arabic_numbers();

                        }
                    }
                }
            };
        }
        document.onkeyup = function (e) {
            keys[e.key] = false;
        }

    } else {
        newExam_errors.disabled = true;
        start_errors.disabled = true;
        start.disabled = false;
        start.innerHTML = " Start the test (enter)";
        window.scroll({ left: 300, top: 0, behavior: "smooth" });
        newExam.onclick();
    }
    arabic_count_errors();
}


//________________________________ ابدأ اختبار الأخطاء _____________________ 
var newExam_errors_mode = 0;  // __________________ تحديث
start_errors.onclick = function () {
    start_errors.style.animation = "none";
    result2.style.visibility = 'hidden';
    result.innerHTML = ` Check the answer (space)`;
    pm = 1;
    if (newExam_errors_mode == 0) {    // __________________ تحديث
        newExam_errors.onclick();
        newExam_errors_mode = 1;
    }
    if (count != 'stop') {
        if (count == 0) { result2.innerHTML = ''; };
        if (page != 'g') { answer.focus(); }
        else if (page == 'g') { num1.focus() };
        prevent = 0;

        if (errors_num1.length != 0) {
            if (num1.value != '' && page != 'g') {
                answer.placeholder = 'Answer';
            }
            else if (answer.value != '' && page == 'g') {
                num1.placeholder = 'Answer';
                num2.placeholder = 'Answer';
            };
            if (arabic_choose.checked) { english() };
            if (((answer.value == +num1.value * +num2.value ||
                answer_eng == +num1_1_error * +num2_2_error)
                && answer.value != 0 && prevent_mark == 0 && (page == 'm'))
                || ((answer.value == +num1.value / +num2.value ||
                    answer_eng == +num1_1_error / +num2_2_error)
                    && answer.value != 0 && prevent_mark == 0 && page == 'd')
                || (
                    ((num1.value == num1_saved && num2.value == num2_saved)
                        || (num1.value == num2_saved && num2.value == num1_saved)
                        || (eng_num1 == num1_saved && eng_num2 == num2_saved)
                        || (eng_num1 == num2_saved && eng_num2 == num1_saved))   // answer_eng == +num1_1_error * +num2_2_error)
                    && answer.value != 0 && prevent_mark == 0 && page == 'g')

            ) {
                // img_right[0].innerHTML = `
                // <img class="img_r" src="../images/svg_right.svg" alt="">
                // `
                section_buttons.classList.remove('wrong', 'correct');
                setTimeout(function () {
                    section_buttons.classList.add('correct');
                }, 100)
                // if (window.innerWidth < '1100' || window.outerWidth < '1100') {
                //     img_right[0].innerHTML = `
                // <img class="img_r2" src="../images/svg_right.svg" alt="">
                // `;
                // };
                //____________________________ voice tune ____________________
                if (on_effects == 0) {
                    if (repeat_tune == 0) {
                        correct_tune1.muted = false;
                        correct_tune1.play();
                        setTimeout(function () {
                            correct_tune1.muted = true;
                        }, 1000);
                        repeat_tune = repeat_tune + 1;
                    }
                    else if (repeat_tune == 1) {
                        correct_tune2.muted = false;
                        correct_tune2.play();
                        setTimeout(function () {
                            correct_tune2.muted = true;
                        }, 1000);
                        repeat_tune = repeat_tune + 1;
                    }
                    else if (repeat_tune == 2) {
                        correct_tune3.muted = false;
                        correct_tune3.play();
                        setTimeout(function () {
                            correct_tune3.muted = true;
                        }, 1000);
                        repeat_tune += 1;
                    }
                    else if (repeat_tune == 3) {
                        correct_tune4.muted = false;
                        correct_tune4.play();
                        setTimeout(function () {
                            correct_tune4.muted = true;
                        }, 1000);
                        repeat_tune += 1;
                    }
                    else if (repeat_tune == 4) {
                        correct_tune5.muted = false;
                        correct_tune5.play();
                        setTimeout(function () {
                            correct_tune5.muted = true;
                        }, 1000);
                        repeat_tune += 1;
                    }
                    else if (repeat_tune == 5) {
                        correct_tune6.muted = false;
                        correct_tune6.play();
                        setTimeout(function () {
                            correct_tune6.muted = true;
                        }, 1000);
                        repeat_tune = 0;
                    }
                }
                //_________________________ end voice tune _________________________
                mark += 1;
                errors_num1_cycle.splice(i - 1, 1, 'p');
                errors_num2_cycle.splice(i - 1, 1, 'p');
            } else if (num1.value != '' && num2.value != '' && answer.value != '') {
                // img_right[0].innerHTML = `
                // <img class="img_r" src="../images/svg_wrong.svg" alt="">
                // `
                // if (window.innerWidth < '1100' || window.outerWidth < '1100') {
                //     img_right[0].innerHTML = `
                // <img class="img_r2" src="../images/svg_wrong.svg" alt="">
                // `
                // };
                section_buttons.classList.remove('correct', 'wrong');
                setTimeout(function () {
                    section_buttons.classList.add('wrong');
                }, 100)

                //____________________________ voice tune wrong ____________________
                if (on_effects == 0) {
                    if (repeat_tune == 0) {
                        wrong_tune1.muted = false;
                        wrong_tune1.play();
                        setTimeout(function () {
                            wrong_tune1.muted = true;
                        }, 1000);
                        repeat_tune = repeat_tune + 1;
                    }
                    else if (repeat_tune == 1) {
                        wrong_tune2.muted = false;
                        wrong_tune2.play();
                        setTimeout(function () {
                            wrong_tune2.muted = true;
                        }, 1000);
                        repeat_tune = repeat_tune + 1;
                    }
                    else if (repeat_tune == 2) {
                        wrong_tune3.muted = false;
                        wrong_tune3.play();
                        setTimeout(function () {
                            wrong_tune3.muted = true;
                            // wrong_tune3.pause();
                        }, 1000);
                        repeat_tune += 1;
                    }
                    else if (repeat_tune == 3) {
                        wrong_tune4.muted = false;
                        wrong_tune4.play();
                        setTimeout(function () {
                            wrong_tune4.muted = true;
                            // wrong_tune4.pause();
                        }, 1000);
                        repeat_tune += 1;
                    }
                    else if (repeat_tune == 4) {
                        wrong_tune5.muted = false;
                        wrong_tune5.play();
                        setTimeout(function () {
                            wrong_tune5.muted = true;
                            // wrong_tune5.pause();
                        }, 1000);
                        repeat_tune += 1;
                    }
                    else if (repeat_tune == 5) {
                        wrong_tune6.muted = false;
                        wrong_tune6.play();
                        setTimeout(function () {
                            wrong_tune6.muted = true;
                            // wrong_tune6.pause();
                        }, 1000);
                        repeat_tune = 0;
                    }
                }
                //_________________________ end voice tune wrong_________________________
                count_errors += 1;
            }
            if (((answer.value != '' || num1.value == '') && page != 'g')
                || ((answer.value == '' || (num1.value != '' && num2.value != '')) && page == 'g')
            ) {
                num1.value = +errors_num1[i]; num1_1_error = num1.value;
                num2.value = +errors_num2[i]; num2_2_error = num2.value;
                i += 1;
                answer.value = ''; prevent_mark = 0;
                if (page == 'g') {
                    answer.value = num1.value * num2.value;
                    num1_saved = num1.value;
                    num2_saved = num2.value;
                    sum.value = +num1.value + +num2.value;
                    if (arabic_choose.checked) { arabic_numbers(); };
                    num1.value = ''; num2.value = '';
                };
                if (arabic_choose.checked) { arabic(); }
                if (page != 'g') { answer.value = ''; }
                //_______________________ مصفوفة أخطاء جديدة _____________________
                arabic_count_errors();
                if (count == errors_num1.length && count != 0) {
                    errors_num1.splice(0); errors_num2.splice(0);
                    newExam_errors_mode = 0; // تحديث
                    for (let i = 0; i < errors_num1_cycle.length; i++) {
                        if (errors_num1_cycle[i] != 'p') {
                            errors_num1.push(errors_num1_cycle[i]);
                            errors_num2.push(errors_num2_cycle[i]);
                        }
                    };

                    errors_num1_cycle.splice(0); errors_num2_cycle.splice(0);

                    //______________ العلامة والتقدير _________________________
                    if (arabic_choose.checked) {
                        mark_arabic = String(mark); count_errors_arabic = String(count_errors);

                        for (let i = 0; i < mark_arabic.length; i++) {
                            if (mark_arabic[i] == 0) { mark_arabic = mark_arabic.replace(mark_arabic[+i], zero) }
                            if (mark_arabic[i] == 1) { mark_arabic = mark_arabic.replace(mark_arabic[+i], one) }
                            if (mark_arabic[i] == 2) { mark_arabic = mark_arabic.replace(mark_arabic[+i], two) }
                            if (mark_arabic[i] == 3) { mark_arabic = mark_arabic.replace(mark_arabic[+i], three) }
                            if (mark_arabic[i] == 4) { mark_arabic = mark_arabic.replace(mark_arabic[+i], four) }
                            if (mark_arabic[i] == 5) { mark_arabic = mark_arabic.replace(mark_arabic[+i], five) }
                            if (mark_arabic[i] == 6) { mark_arabic = mark_arabic.replace(mark_arabic[+i], six) }
                            if (mark_arabic[i] == 7) { mark_arabic = mark_arabic.replace(mark_arabic[+i], seven) }
                            if (mark_arabic[i] == 8) { mark_arabic = mark_arabic.replace(mark_arabic[+i], eight) }
                            if (mark_arabic[i] == 9) { mark_arabic = mark_arabic.replace(mark_arabic[+i], nine) }
                            if (mark_arabic[i] == '.') { mark_arabic = mark_arabic.replace(mark_arabic[+i], `,`) }
                            if (mark_arabic[i] == null) { mark_arabic = mark_arabic.replace(mark_arabic[+i], ``) }
                        };
                        for (let i = 0; i < count_errors_arabic.length; i++) {
                            if (count_errors_arabic[i] == 0) { count_errors_arabic = count_errors_arabic.replace(count_errors_arabic[+i], zero) }
                            if (count_errors_arabic[i] == 1) { count_errors_arabic = count_errors_arabic.replace(count_errors_arabic[+i], one) }
                            if (count_errors_arabic[i] == 2) { count_errors_arabic = count_errors_arabic.replace(count_errors_arabic[+i], two) }
                            if (count_errors_arabic[i] == 3) { count_errors_arabic = count_errors_arabic.replace(count_errors_arabic[+i], three) }
                            if (count_errors_arabic[i] == 4) { count_errors_arabic = count_errors_arabic.replace(count_errors_arabic[+i], four) }
                            if (count_errors_arabic[i] == 5) { count_errors_arabic = count_errors_arabic.replace(count_errors_arabic[+i], five) }
                            if (count_errors_arabic[i] == 6) { count_errors_arabic = count_errors_arabic.replace(count_errors_arabic[+i], six) }
                            if (count_errors_arabic[i] == 7) { count_errors_arabic = count_errors_arabic.replace(count_errors_arabic[+i], seven) }
                            if (count_errors_arabic[i] == 8) { count_errors_arabic = count_errors_arabic.replace(count_errors_arabic[+i], eight) }
                            if (count_errors_arabic[i] == 9) { count_errors_arabic = count_errors_arabic.replace(count_errors_arabic[+i], nine) }
                            if (count_errors_arabic[i] == null) { count_errors_arabic = count_errors_arabic.replace(mark_arabic[+i], ``) }
                        }

                        result2.style.visibility = 'visible';
                        result2.innerHTML = `Number of remaining errors: ${count_errors_arabic}`;
                        result2.style.animation = "result2_a 1s linear, result2_a2 4s linear";
                    } else {

                        result2.style.visibility = 'visible';
                        result2.innerHTML = `Number of remaining errors: ${count_errors}`;
                        result2.style.animation = "result2_a 1s linear, result2_a2 4s linear";
                    };
                    result2.style.animation = "result2_a 1s linear, result2_a2 4s linear";
                    count_errors_function();
                    if (errors_num1.length == 0) {
                        start.innerHTML = " Start the test (enter)";
                        start_errors.style.animation = "none";
                    }
                    else {
                        setTimeout(function () {
                            start_errors.style.animation = "starterrors 100ms 10 linear";
                        }, 2000);
                        setTimeout(function () {
                            start_errors.style.animation = "none";
                        }, 3100);
                        setTimeout(function () {
                            start_errors.style.animation = "starterrors 100ms 10 linear";
                        }, 10000);
                        setTimeout(function () {
                            start_errors.style.animation = "none";
                        }, 11000);
                    }
                    scroll_result2();
                    result2.style.visibility = 'visible';
                    answer.blur();
                    count = 'stop'; i = j = 0; prevent = 0;
                    num1.value = num2.value = sum.value = answer.value = '';
                    // num1.placeholder = num2.placeholder = answer.placeholder = '';

                } else { count += 1; }
            } else {
                if (num1.value != '' && page != 'g') {
                    answer.placeholder = 'Answer';
                }
                else if (answer.value != '' && page == 'g') {
                    num1.placeholder = 'Answer';
                    num2.placeholder = 'Answer';
                };
            }
        }
    }
}
//________________________ prevent not numbers inside the answer _________
answer.addEventListener('input', function () {
    for (let i = 0; i < answer.value.length; i++) {
        if ((numbers.includes(answer.value[i]) == false || num1.value == '') && page != 'g') {
            answer.value = answer.value.replace(answer.value[+i], '')
        }
    };
    section_buttons.classList.remove('correct', 'wrong');
});
//__________________________ التحويل إلى أرقام عربية ___________
function arabic() {
    let inner1 = mark_arabic;
    for (let i = 0; i < inner1.length; i++) {
        if (inner1[i] == 0) { inner1 = inner1.replace(inner1[i], zero) }
        if (inner1[i] == 1) { inner1 = inner1.replace(inner1[i], one) }
        if (inner1[i] == 2) { inner1 = inner1.replace(inner1[i], two) }
        if (inner1[i] == 3) { inner1 = inner1.replace(inner1[i], three) }
        if (inner1[i] == 4) { inner1 = inner1.replace(inner1[i], four) }
        if (inner1[i] == 5) { inner1 = inner1.replace(inner1[i], five) }
        if (inner1[i] == 6) { inner1 = inner1.replace(inner1[i], six) }
        if (inner1[i] == 7) { inner1 = inner1.replace(inner1[i], seven) }
        if (inner1[i] == 8) { inner1 = inner1.replace(inner1[i], eight) }
        if (inner1[i] == 9) { inner1 = inner1.replace(inner1[i], nine) }
        if (inner1[i] == null) { inner1 = inner1.replace(inner1[+i], ``) }
    };
    if (mode == 'cycle_1') {
        result2.innerHTML = `Your Mark: ${inner1} <br> Level: ${level} <br> Number of errors: ${count_errors_arabic}`;
    };
    for (let i = 0; i < num1.value.length; i++) {
        if (num1.value[i] == 0) { num1.value = num1.value.replace(num1.value[+i], zero) }
        if (num1.value[i] == 1) { num1.value = num1.value.replace(num1.value[+i], one) }
        if (num1.value[i] == 2) { num1.value = num1.value.replace(num1.value[+i], two) }
        if (num1.value[i] == 3) { num1.value = num1.value.replace(num1.value[+i], three) }
        if (num1.value[i] == 4) { num1.value = num1.value.replace(num1.value[+i], four) }
        if (num1.value[i] == 5) { num1.value = num1.value.replace(num1.value[+i], five) }
        if (num1.value[i] == 6) { num1.value = num1.value.replace(num1.value[+i], six) }
        if (num1.value[i] == 7) { num1.value = num1.value.replace(num1.value[+i], seven) }
        if (num1.value[i] == 8) { num1.value = num1.value.replace(num1.value[+i], eight) }
        if (num1.value[i] == 9) { num1.value = num1.value.replace(num1.value[+i], nine) }
        // if (num1.value[i] == null) { num1.value = num1.value.replace(num1.value[+i], ``) }
    };
    for (let i = 0; i < num2.value.length; i++) {
        if (num2.value[i] == 0) { num2.value = num2.value.replace(num2.value[+i], zero) }
        if (num2.value[i] == 1) { num2.value = num2.value.replace(num2.value[+i], one) }
        if (num2.value[i] == 2) { num2.value = num2.value.replace(num2.value[+i], two) }
        if (num2.value[i] == 3) { num2.value = num2.value.replace(num2.value[+i], three) }
        if (num2.value[i] == 4) { num2.value = num2.value.replace(num2.value[+i], four) }
        if (num2.value[i] == 5) { num2.value = num2.value.replace(num2.value[+i], five) }
        if (num2.value[i] == 6) { num2.value = num2.value.replace(num2.value[+i], six) }
        if (num2.value[i] == 7) { num2.value = num2.value.replace(num2.value[+i], seven) }
        if (num2.value[i] == 8) { num2.value = num2.value.replace(num2.value[+i], eight) }
        if (num2.value[i] == 9) { num2.value = num2.value.replace(num2.value[+i], nine) }
        // if (num2.value[i] == null) { num2.value = num2.value.replace(num2.value[+i], ``) }
    };
    answer.oninput = arabic_choose.onchange = function () {
        section_buttons.classList.remove('correct', 'wrong');
        //هذه لمنع الأرقام العربية في الجواب إذا تم التغيير إلى الأرقام الانكليزية أثناء الاختبار
        if (arabic_choose.checked) {
            for (let i = 0; i < answer.value.length; i++) {
                if (numbers.includes(answer.value[i]) == false || num1.value == '') {
                    answer.value = answer.value.replace(answer.value[+i], '')
                }

                if (answer.value[i] == 0) { answer.value = answer.value.replace(answer.value[+i], zero) }
                if (answer.value[i] == 1) { answer.value = answer.value.replace(answer.value[+i], one) }
                if (answer.value[i] == 2) { answer.value = answer.value.replace(answer.value[+i], two) }
                if (answer.value[i] == 3) { answer.value = answer.value.replace(answer.value[+i], three) }
                if (answer.value[i] == 4) { answer.value = answer.value.replace(answer.value[+i], four) }
                if (answer.value[i] == 5) { answer.value = answer.value.replace(answer.value[+i], five) }
                if (answer.value[i] == 6) { answer.value = answer.value.replace(answer.value[+i], six) }
                if (answer.value[i] == 7) { answer.value = answer.value.replace(answer.value[+i], seven) }
                if (answer.value[i] == 8) { answer.value = answer.value.replace(answer.value[+i], eight) }
                if (answer.value[i] == 9) { answer.value = answer.value.replace(answer.value[+i], nine) }
            };
        }
        //___________________________mark_arabic__________________________
        function arabic_mark() {
            for (let i = 0; i < mark_arabic.length; i++) {
                if (mark_arabic[i] == 0) { mark_arabic = mark_arabic.replace(mark_arabic[+i], zero) }
                if (mark_arabic[i] == 1) { mark_arabic = mark_arabic.replace(mark_arabic[+i], one) }
                if (mark_arabic[i] == 2) { mark_arabic = mark_arabic.replace(mark_arabic[+i], two) }
                if (mark_arabic[i] == 3) { mark_arabic = mark_arabic.replace(mark_arabic[+i], three) }
                if (mark_arabic[i] == 4) { mark_arabic = mark_arabic.replace(mark_arabic[+i], four) }
                if (mark_arabic[i] == 5) { mark_arabic = mark_arabic.replace(mark_arabic[+i], five) }
                if (mark_arabic[i] == 6) { mark_arabic = mark_arabic.replace(mark_arabic[+i], six) }
                if (mark_arabic[i] == 7) { mark_arabic = mark_arabic.replace(mark_arabic[+i], seven) }
                if (mark_arabic[i] == 8) { mark_arabic = mark_arabic.replace(mark_arabic[+i], eight) }
                if (mark_arabic[i] == 9) { mark_arabic = mark_arabic.replace(mark_arabic[+i], nine) }
                if (mark_arabic[i] == null) { mark_arabic = mark_arabic.replace(mark_arabic[+i], ``) }
            };
        }
        //___________________________ تحويل الجواب من رموز عربية إلى أرقام انكليزية ___________
        answer_eng = answer.value;
        for (let i = 0; i < answer_eng.length; i++) {
            if (answer_eng[i] == zero) { answer_eng = answer_eng.replace(answer_eng[+i], +0) }
            if (answer_eng[i] == one) { answer_eng = answer_eng.replace(answer_eng[+i], +1) }
            if (answer_eng[i] == two) { answer_eng = answer_eng.replace(answer_eng[+i], +2) }
            if (answer_eng[i] == three) { answer_eng = answer_eng.replace(answer_eng[+i], +3) }
            if (answer_eng[i] == four) { answer_eng = answer_eng.replace(answer_eng[+i], +4) }
            if (answer_eng[i] == five) { answer_eng = answer_eng.replace(answer_eng[+i], +5) }
            if (answer_eng[i] == six) { answer_eng = answer_eng.replace(answer_eng[+i], +6) }
            if (answer_eng[i] == seven) { answer_eng = answer_eng.replace(answer_eng[+i], +7) }
            if (answer_eng[i] == eight) { answer_eng = answer_eng.replace(answer_eng[+i], +8) }
            if (answer_eng[i] == nine) { answer_eng = answer_eng.replace(answer_eng[+i], +9) }
            if (answer_eng[i] == null) { answer_eng = answer_eng.replace(answer_eng[+i], ``) }
        }
    };
    for (let i = 0; i < sum.value.length; i++) {
        if (sum.value[i] == 0) { sum.value = sum.value.replace(sum.value[+i], zero) }
        if (sum.value[i] == 1) { sum.value = sum.value.replace(sum.value[+i], one) }
        if (sum.value[i] == 2) { sum.value = sum.value.replace(sum.value[+i], two) }
        if (sum.value[i] == 3) { sum.value = sum.value.replace(sum.value[+i], three) }
        if (sum.value[i] == 4) { sum.value = sum.value.replace(sum.value[+i], four) }
        if (sum.value[i] == 5) { sum.value = sum.value.replace(sum.value[+i], five) }
        if (sum.value[i] == 6) { sum.value = sum.value.replace(sum.value[+i], six) }
        if (sum.value[i] == 7) { sum.value = sum.value.replace(sum.value[+i], seven) }
        if (sum.value[i] == 8) { sum.value = sum.value.replace(sum.value[+i], eight) }
        if (sum.value[i] == 9) { sum.value = sum.value.replace(sum.value[+i], nine) }
        if (sum.value[i] == null) { sum.value = sum.value.replace(sum.value[+i], ``) }
    };
    num1.addEventListener('input', function () {
        section_buttons.classList.remove('correct', 'wrong');
        //هذه لمنع الأرقام العربية في الجواب إذا تم التغيير إلى الأرقام الانكليزية أثناء الاختبار
        for (let i = 0; i < num1.value.length; i++) {
            if (numbers.includes(num1.value[i]) == false || answer.value == '') {
                num1.value = num1.value.replace(num1.value[+i], '');
            }
        };
        for (let i = 0; i < num2.value.length; i++) {
            if ((numbers.includes(num2.value[i]) == false || answer.value == '') && page == 'g') {
                num2.value = num2.value.replace(num2.value[+i], '')
            }
        }
        if (arabic_choose.checked) {
            for (let i = 0; i < num1.value.length; i++) {
                if (numbers.includes(num1.value[i]) == false || answer.value == '') {
                    num1.value = num1.value.replace(num1.value[+i], '')
                }
                if (num1.value[i] == 0) { num1.value = num1.value.replace(num1.value[+i], zero) }
                if (num1.value[i] == 1) { num1.value = num1.value.replace(num1.value[+i], one) }
                if (num1.value[i] == 2) { num1.value = num1.value.replace(num1.value[+i], two) }
                if (num1.value[i] == 3) { num1.value = num1.value.replace(num1.value[+i], three) }
                if (num1.value[i] == 4) { num1.value = num1.value.replace(num1.value[+i], four) }
                if (num1.value[i] == 5) { num1.value = num1.value.replace(num1.value[+i], five) }
                if (num1.value[i] == 6) { num1.value = num1.value.replace(num1.value[+i], six) }
                if (num1.value[i] == 7) { num1.value = num1.value.replace(num1.value[+i], seven) }
                if (num1.value[i] == 8) { num1.value = num1.value.replace(num1.value[+i], eight) }
                if (num1.value[i] == 9) { num1.value = num1.value.replace(num1.value[+i], nine) }
            };
        };
    });
    arabic_choose.onchange = num1.onkeyup = function () {
        //هذه لمنع الأرقام العربية في الجواب إذا تم التغيير إلى الأرقام الانكليزية أثناء الاختبار
        for (let i = 0; i < num1.value.length; i++) {
            if (numbers.includes(num1.value[i]) == false || answer.value == '') {
                num1.value = num1.value.replace(num1.value[+i], '');
            };
        };

        if (arabic_choose.checked) {
            for (let i = 0; i < num1.value.length; i++) {
                if (numbers.includes(num1.value[i]) == false || answer.value == '') {
                    num1.value = num1.value.replace(num1.value[+i], '')
                }
                if (num1.value[i] == 0) { num1.value = num1.value.replace(num1.value[+i], zero) }
                if (num1.value[i] == 1) { num1.value = num1.value.replace(num1.value[+i], one) }
                if (num1.value[i] == 2) { num1.value = num1.value.replace(num1.value[+i], two) }
                if (num1.value[i] == 3) { num1.value = num1.value.replace(num1.value[+i], three) }
                if (num1.value[i] == 4) { num1.value = num1.value.replace(num1.value[+i], four) }
                if (num1.value[i] == 5) { num1.value = num1.value.replace(num1.value[+i], five) }
                if (num1.value[i] == 6) { num1.value = num1.value.replace(num1.value[+i], six) }
                if (num1.value[i] == 7) { num1.value = num1.value.replace(num1.value[+i], seven) }
                if (num1.value[i] == 8) { num1.value = num1.value.replace(num1.value[+i], eight) }
                if (num1.value[i] == 9) { num1.value = num1.value.replace(num1.value[+i], nine) }
            };
        };
    };
    num2.addEventListener('input', function () {
        section_buttons.classList.remove('correct', 'wrong');
        //هذه لمنع الأرقام العربية في الجواب إذا تم التغيير إلى الأرقام الانكليزية أثناء الاختبار
        for (let i = 0; i < num2.value.length; i++) {
            if ((numbers.includes(num2.value[i]) == false || answer.value == '') && page == 'g') {
                num2.value = num2.value.replace(num2.value[+i], '')
            }
        };
        if (arabic_choose.checked) {
            for (let i = 0; i < num2.value.length; i++) {
                if ((numbers.includes(num2.value[i]) == false || answer.value == '') && page == 'g') {
                    num2.value = num2.value.replace(num2.value[+i], '')
                }
                if (num2.value[i] == 0) { num2.value = num2.value.replace(num2.value[+i], zero) }
                if (num2.value[i] == 1) { num2.value = num2.value.replace(num2.value[+i], one) }
                if (num2.value[i] == 2) { num2.value = num2.value.replace(num2.value[+i], two) }
                if (num2.value[i] == 3) { num2.value = num2.value.replace(num2.value[+i], three) }
                if (num2.value[i] == 4) { num2.value = num2.value.replace(num2.value[+i], four) }
                if (num2.value[i] == 5) { num2.value = num2.value.replace(num2.value[+i], five) }
                if (num2.value[i] == 6) { num2.value = num2.value.replace(num2.value[+i], six) }
                if (num2.value[i] == 7) { num2.value = num2.value.replace(num2.value[+i], seven) }
                if (num2.value[i] == 8) { num2.value = num2.value.replace(num2.value[+i], eight) }
                if (num2.value[i] == 9) { num2.value = num2.value.replace(num2.value[+i], nine) }
            };
        }
    });
    arabic_choose.onchange = num2.onkeyup = function () {
        //هذه لمنع الأرقام العربية في الجواب إذا تم التغيير إلى الأرقام الانكليزية أثناء الاختبار
        for (let i = 0; i < num2.value.length; i++) {
            if ((numbers.includes(num2.value[i]) == false || answer.value == '') && page == 'g') {
                num2.value = num2.value.replace(num2.value[+i], '')
            }
        }
        if (arabic_choose.checked) {
            for (let i = 0; i < num2.value.length; i++) {
                if ((numbers.includes(num2.value[i]) == false || answer.value == '') && page == 'g') {
                    num2.value = num2.value.replace(num2.value[+i], '')
                }
                if (num2.value[i] == 0) { num2.value = num2.value.replace(num2.value[+i], zero) }
                if (num2.value[i] == 1) { num2.value = num2.value.replace(num2.value[+i], one) }
                if (num2.value[i] == 2) { num2.value = num2.value.replace(num2.value[+i], two) }
                if (num2.value[i] == 3) { num2.value = num2.value.replace(num2.value[+i], three) }
                if (num2.value[i] == 4) { num2.value = num2.value.replace(num2.value[+i], four) }
                if (num2.value[i] == 5) { num2.value = num2.value.replace(num2.value[+i], five) }
                if (num2.value[i] == 6) { num2.value = num2.value.replace(num2.value[+i], six) }
                if (num2.value[i] == 7) { num2.value = num2.value.replace(num2.value[+i], seven) }
                if (num2.value[i] == 8) { num2.value = num2.value.replace(num2.value[+i], eight) }
                if (num2.value[i] == 9) { num2.value = num2.value.replace(num2.value[+i], nine) }
            };
        }
    }
    //___________________________mark_arabic__________________________
    function arabic_mark() {
        for (let i = 0; i < mark_arabic.length; i++) {
            if (mark_arabic[i] == 0) { mark_arabic = mark_arabic.replace(mark_arabic[+i], zero) }
            if (mark_arabic[i] == 1) { mark_arabic = mark_arabic.replace(mark_arabic[+i], one) }
            if (mark_arabic[i] == 2) { mark_arabic = mark_arabic.replace(mark_arabic[+i], two) }
            if (mark_arabic[i] == 3) { mark_arabic = mark_arabic.replace(mark_arabic[+i], three) }
            if (mark_arabic[i] == 4) { mark_arabic = mark_arabic.replace(mark_arabic[+i], four) }
            if (mark_arabic[i] == 5) { mark_arabic = mark_arabic.replace(mark_arabic[+i], five) }
            if (mark_arabic[i] == 6) { mark_arabic = mark_arabic.replace(mark_arabic[+i], six) }
            if (mark_arabic[i] == 7) { mark_arabic = mark_arabic.replace(mark_arabic[+i], seven) }
            if (mark_arabic[i] == 8) { mark_arabic = mark_arabic.replace(mark_arabic[+i], eight) }
            if (mark_arabic[i] == 9) { mark_arabic = mark_arabic.replace(mark_arabic[+i], nine) }
            if (mark_arabic[i] == null) { mark_arabic = mark_arabic.replace(mark_arabic[+i], ``) }
        };
    }
    //___________________________ تحويل الجوابين من رموز عربية إلى أرقام انكليزية ___________
    num1_eng = num1.value;
    for (let i = 0; i < num1_eng.length; i++) {
        if (num1_eng[i] == zero) { num1_eng = num1_eng.replace(num1_eng[+i], +0) }
        if (num1_eng[i] == one) { num1_eng = num1_eng.replace(num1_eng[+i], +1) }
        if (num1_eng[i] == two) { num1_eng = num1_eng.replace(num1_eng[+i], +2) }
        if (num1_eng[i] == three) { num1_eng = num1_eng.replace(num1_eng[+i], +3) }
        if (num1_eng[i] == four) { num1_eng = num1_eng.replace(num1_eng[+i], +4) }
        if (num1_eng[i] == five) { num1_eng = num1_eng.replace(num1_eng[+i], +5) }
        if (num1_eng[i] == six) { num1_eng = num1_eng.replace(num1_eng[+i], +6) }
        if (num1_eng[i] == seven) { num1_eng = num1_eng.replace(num1_eng[+i], +7) }
        if (num1_eng[i] == eight) { num1_eng = num1_eng.replace(num1_eng[+i], +8) }
        if (num1_eng[i] == nine) { num1_eng = num1_eng.replace(num1_eng[+i], +9) }
        if (num1_eng[i] == null) { num1_eng = num1_eng.replace(num1_eng[+i], ``) }
    }
    num2_eng = num2.value;
    for (let i = 0; i < num2_eng.length; i++) {
        if (num2_eng[i] == zero) { num2_eng = num2_eng.replace(num2_eng[+i], +0) }
        if (num2_eng[i] == one) { num2_eng = num2_eng.replace(num2_eng[+i], +1) }
        if (num2_eng[i] == two) { num2_eng = num2_eng.replace(num2_eng[+i], +2) }
        if (num2_eng[i] == three) { num2_eng = num2_eng.replace(num2_eng[+i], +3) }
        if (num2_eng[i] == four) { num2_eng = num2_eng.replace(num2_eng[+i], +4) }
        if (num2_eng[i] == five) { num2_eng = num2_eng.replace(num2_eng[+i], +5) }
        if (num2_eng[i] == six) { num2_eng = num2_eng.replace(num2_eng[+i], +6) }
        if (num2_eng[i] == seven) { num2_eng = num2_eng.replace(num2_eng[+i], +7) }
        if (num2_eng[i] == eight) { num2_eng = num2_eng.replace(num2_eng[+i], +8) }
        if (num2_eng[i] == nine) { num2_eng = num2_eng.replace(num2_eng[+i], +9) }
        if (num2_eng[i] == null) { num2_eng = num2_eng.replace(num2_eng[+i], ``) }
    }
}
// _______________________________ Using Keys   _______________________________
document.onkeydown = function (e) {

    if (e.keyCode == '32') { // space مفتاح
        if (answer.value != '') {
            result.onclick();
        }
    }
    if (e.keyCode == '27') { // esc مفتاح                  
        title.onclick();
    }
    if (e.keyCode == 13) { // Enter مفتاح  
        start.onclick();
    }
    if (e.keyCode == 78) { // letter  n 
        newExam.onclick();
    }
    if (e.keyCode == 17) { // ctrl مفتاح  
        if (count_errors > 0) {
            newExam_errors.onclick();
        }
        else if (errors_num1.length == 0 && mode == 'cycle_2') {
            window.scroll({ left: 300, top: 0, behavior: "smooth" });
            newExam.onclick();
        }
    }
    keys[e.key] = true;
    if (keys['z'] && keys['a']) {
        all_input.checked = true;
        all_input.onclick();
    }
    if (keys['z'] && keys['x']) {
        all_input.checked = false;
        all_input.onclick();
    }
    for (let i = 1; i < 10; i++) {
        if (keys['+'] && keys[i]) {
            numbers_input[i].checked = true;
            numbers_input[i].onclick();
        }
    }
    if (keys['+'] && keys['0']) {
        m10.checked = true;
        m10.onclick();
    }
    for (let i = 1; i < 10; i++) {
        if (keys['-'] && keys[i]) {
            numbers_input[i].checked = false;
            numbers_input[i].onclick();
        }
    }
    if (keys['-'] && keys['0']) {
        m10.checked = false;
        m10.onclick();
    }
    if (arabic_choose.disabled == false) {
        if (e.shiftKey && e.key == 'A') {
            arabic_choose.checked = true;
            arabic_numbers();
            arabic_choose.onclick();
        }
        if (e.shiftKey && e.key == 'E') {
            arabic_choose.checked = false;
            arabic_choose.onclick();
        }
    }
    if (e.shiftKey && e.key == 'S') {
        if (sound.checked == false) {
            sound.checked = true; sound.onclick();
        }
        else { sound.checked = false; sound.onclick(); }
    }
    if (e.keyCode == 38) {
        section_buttons.classList.remove('correct', 'wrong');
        if (page != 'g') {
            if (num1.value != '' && arabic_choose.checked == false) {
                if (answer.value == '') { answer.value = +0 };
                answer.value = +answer.value + 1;
            }
            else if (num1.value != '' && arabic_choose.checked == true) {
                if (answer.value == '') { answer.value = +0 };
                english_numbers();
                answer.value = +answer.value + 1;
                answer_eng = answer.value;
                arabic_numbers();
            }
        }
        else if (page == 'g') {
            if (num_input == 1) {
                if (answer.value != '' && arabic_choose.checked == false) {
                    if (num1.value == '') { num1.value = +0 }
                    num1.value = +num1.value + 1;
                }
                else if (answer.value != '' && arabic_choose.checked == true) {
                    if (num1.value == '') { num1.value = +0 };
                    english_numbers();
                    num1.value = +num1.value + 1;
                    num1_eng = num1.value;
                    arabic_numbers();

                }
            }
            if (num_input == 2) {
                if (answer.value != '' && arabic_choose.checked == false) {
                    if (num2.value == '') { num2.value = +0 }
                    num2.value = +num2.value + 1;
                }
                else if (answer.value != '' && arabic_choose.checked == true) {
                    if (num2.value == '') { num2.value = +0 };
                    english_numbers();
                    num2.value = +num2.value + 1;
                    num2_eng = num2.value;
                    arabic_numbers();

                }
            }
        }
    };
    if (e.keyCode == 40) {
        if (page != 'g') {
            if (num1.value != '' && arabic_choose.checked == false) {
                if (answer.value == '') { answer.value = +0 }
                answer.value = +answer.value - 1;
            }
            else if (num1.value != '' && arabic_choose.checked == true) {
                if (answer.value == '') { answer.value = +0 };
                english_numbers();
                answer.value = +answer.value - 1;
                answer_eng = answer.value;
                arabic_numbers();
            }
        }
        else if (page == 'g') {
            if (num_input == 1) {
                if (answer.value != '' && arabic_choose.checked == false) {
                    if (num1.value == '') { num1.value = +0 }
                    num1.value = +num1.value - 1;
                }
                else if (answer.value != '' && arabic_choose.checked == true) {
                    if (num1.value == '') { num1.value = +0 };
                    english_numbers();
                    num1.value = +num1.value - 1;
                    answer_eng = answer.value;
                    arabic_numbers();
                }
            }
            if (num_input == 2) {
                if (answer.value != '' && arabic_choose.checked == false) {
                    if (num2.value == '') { num2.value = +0 }
                    num2.value = +num2.value - 1;
                }
                else if (answer.value != '' && arabic_choose.checked == true) {
                    if (num2.value == '') { num2.value = +0 };
                    english_numbers();
                    num2.value = +num2.value - 1;
                    answer_eng = answer.value;
                    arabic_numbers();

                }
            }
        }
    };
}
document.onkeyup = function (e) {
    keys[e.key] = false;
}
//________________________ تحويل الأرقام العربية إلى إنكليزية لحفظ الأخطاء ____________
function english() {
    eng_num1 = num1.value;
    for (let i = 0; i < eng_num1.length; i++) {
        if (eng_num1[i] == "٠") { eng_num1 = eng_num1.replace(eng_num1[i], 0) }
        if (eng_num1[i] == "١") { eng_num1 = eng_num1.replace(eng_num1[i], 1) }
        if (eng_num1[i] == "٢") { eng_num1 = eng_num1.replace(eng_num1[i], 2) }
        if (eng_num1[i] == "٣") { eng_num1 = eng_num1.replace(eng_num1[i], 3) }
        if (eng_num1[i] == "٤") { eng_num1 = eng_num1.replace(eng_num1[i], 4) }
        if (eng_num1[i] == "٥") { eng_num1 = eng_num1.replace(eng_num1[i], 5) }
        if (eng_num1[i] == "٦") { eng_num1 = eng_num1.replace(eng_num1[i], 6) }
        if (eng_num1[i] == "٧") { eng_num1 = eng_num1.replace(eng_num1[i], 7) }
        if (eng_num1[i] == "٨") { eng_num1 = eng_num1.replace(eng_num1[i], 8) }
        if (eng_num1[i] == "٩") { eng_num1 = eng_num1.replace(eng_num1[i], 9) }
        if (eng_num1[i] == null) { eng_num1 = eng_num1.replace(eng_num1[i], ``) }
    }
    eng_num2 = num2.value;
    for (let i = 0; i < eng_num2.length; i++) {
        if (eng_num2[i] == "٠") { eng_num2 = eng_num2.replace(eng_num2[i], 0) }
        if (eng_num2[i] == "١") { eng_num2 = eng_num2.replace(eng_num2[i], 1) }
        if (eng_num2[i] == "٢") { eng_num2 = eng_num2.replace(eng_num2[i], 2) }
        if (eng_num2[i] == "٣") { eng_num2 = eng_num2.replace(eng_num2[i], 3) }
        if (eng_num2[i] == "٤") { eng_num2 = eng_num2.replace(eng_num2[i], 4) }
        if (eng_num2[i] == "٥") { eng_num2 = eng_num2.replace(eng_num2[i], 5) }
        if (eng_num2[i] == "٦") { eng_num2 = eng_num2.replace(eng_num2[i], 6) }
        if (eng_num2[i] == "٧") { eng_num2 = eng_num2.replace(eng_num2[i], 7) }
        if (eng_num2[i] == "٨") { eng_num2 = eng_num2.replace(eng_num2[i], 8) }
        if (eng_num2[i] == "٩") { eng_num2 = eng_num2.replace(eng_num2[i], 9) }
        if (eng_num2[i] == null) { eng_num2 = eng_num2.replace(eng_num2[i], ``) }
    }
    if (arabic_choose.checked) { arabic(); }
    else { num1.value = eng_num1; num2.value = eng_num2; }
    answer.addEventListener('input', function () {
        for (let i = 0; i < answer.value.length; i++) {
            if ((numbers.includes(answer.value[i]) == false || num1.value == '') && page != 'g') {
                answer.value = answer.value.replace(answer.value[+i], '')
            }
        };
        section_buttons.classList.remove('correct', 'wrong');
    });
    if (mode == 'cycle_1') {
        result2.innerHTML = `Your Mark: ${mark} <br> Level: ${level} <br> Number of errors: ${count_errors}`;
    }
}
//__________________  تحويل إلى أرقام عربية في القائمة و تشغيل أو كنم الصوت ____________
arabic_choose.onclick = arabic_choose.onkeydown = window.onload = function () {
    arabic_count_errors();
    fontSize_num();
    if (arabic_choose.checked == true) {
        table[1].innerHTML = " ١ NUM";
        table[2].innerHTML = " ٢ NUM";
        table[3].innerHTML = " ٣ NUM";
        table[4].innerHTML = " ٤ NUM";
        table[5].innerHTML = " ٥ NUM";
        table[6].innerHTML = " ٦ NUM";
        table[7].innerHTML = " ٧ NUM";
        table[8].innerHTML = " ٨ NUM";
        table[9].innerHTML = " ٩ NUM";
        table[10].innerHTML = " ١٠ NUM";
        localStorage.checkbox_arabic = JSON.stringify(true);
        arabic(); arabic_numbers();
        plus1.onclick();
        minus1.onclick();
    } else {
        table[1].innerHTML = "NUM 1";
        table[2].innerHTML = "NUM 2";
        table[3].innerHTML = "NUM 3";
        table[4].innerHTML = "NUM 4";
        table[5].innerHTML = "NUM 5";
        table[6].innerHTML = "NUM 6";
        table[7].innerHTML = "NUM 7";
        table[8].innerHTML = "NUM 8";
        table[9].innerHTML = "NUM 9";
        table[10].innerHTML = "NUM 10";
        localStorage.checkbox_arabic = JSON.stringify(false);
        english();
        english_numbers();
        plus1.onclick();
        minus1.onclick();
    }

}
//_____________________________________________________________

if (localStorage.checkbox_arabic != null) {
    arabic_choose.checked = JSON.parse(localStorage.checkbox_arabic);
}
//_______________ all_input cheched ________________________
var all_input = document.getElementById('all_input');
all_input.onclick = function () {
    if (all_input.checked == true) {
        m1.checked = m2.checked = m3.checked = m4.checked = m5.checked =
            m6.checked = m7.checked = m8.checked = m9.checked = m10.checked = true;
    } else {
        m1.checked = m2.checked = m3.checked = m4.checked = m5.checked =
            m6.checked = m7.checked = m8.checked = m9.checked = m10.checked = false;
    }
    m1.onclick();
    m2.onclick();
    m3.onclick();
    m4.onclick();
    m5.onclick();
    m6.onclick();
    m7.onclick();
    m8.onclick();
    m9.onclick();
    m10.onclick();
    //__________________________ audio ____________________________
    if (this.checked) { audio[0].play(); }
    else if (this.checked == false) { audio[21].play(); }
};

//___________________ muted sound _______________________________
sound.onclick = function () {
    for (let c = 0; c < 133; c++) {
        if (sound.checked == true) {
            audio[c].muted = false;
        }
        else {
            audio[c].muted = true;
        }
    }
}
sound.onclick();

//___________________________________ count errors in button : newExam_errors 

function arabic_count_errors() {
    count_errors_arabic = String(errors_num1.length);
    if (arabic_choose.checked) {
        for (let i = 0; i < count_errors_arabic.length; i++) {
            if (count_errors_arabic[i] == 0) { count_errors_arabic = count_errors_arabic.replace(count_errors_arabic[+i], zero) }
            if (count_errors_arabic[i] == 1) { count_errors_arabic = count_errors_arabic.replace(count_errors_arabic[+i], one) }
            if (count_errors_arabic[i] == 2) { count_errors_arabic = count_errors_arabic.replace(count_errors_arabic[+i], two) }
            if (count_errors_arabic[i] == 3) { count_errors_arabic = count_errors_arabic.replace(count_errors_arabic[+i], three) }
            if (count_errors_arabic[i] == 4) { count_errors_arabic = count_errors_arabic.replace(count_errors_arabic[+i], four) }
            if (count_errors_arabic[i] == 5) { count_errors_arabic = count_errors_arabic.replace(count_errors_arabic[+i], five) }
            if (count_errors_arabic[i] == 6) { count_errors_arabic = count_errors_arabic.replace(count_errors_arabic[+i], six) }
            if (count_errors_arabic[i] == 7) { count_errors_arabic = count_errors_arabic.replace(count_errors_arabic[+i], seven) }
            if (count_errors_arabic[i] == 8) { count_errors_arabic = count_errors_arabic.replace(count_errors_arabic[+i], eight) }
            if (count_errors_arabic[i] == 9) { count_errors_arabic = count_errors_arabic.replace(count_errors_arabic[+i], nine) }
        };
        newExam_errors.innerHTML = `<pre class='retest'> Retest for errors (ctrl)</pre>
        ${count_errors_arabic} :Number of errors`;
    }
    else {
        newExam_errors.innerHTML = `<pre class='retest'>Retest for errors (ctrl)</pre> Number of errors: ${errors_num1.length}`;
    }
    var len = 0;
    if (mode == 'cycle_2') {
        for (let c = 0; c < errors_num1_cycle.length; c++) {
            if (errors_num1_cycle[c] != 'p') {
                len += 1;
            }
        }
        count_errors_arabic = String(len);
        for (let i = 0; i < count_errors_arabic.length; i++) {
            if (count_errors_arabic[i] == 0) { count_errors_arabic = count_errors_arabic.replace(count_errors_arabic[+i], zero) }
            if (count_errors_arabic[i] == 1) { count_errors_arabic = count_errors_arabic.replace(count_errors_arabic[+i], one) }
            if (count_errors_arabic[i] == 2) { count_errors_arabic = count_errors_arabic.replace(count_errors_arabic[+i], two) }
            if (count_errors_arabic[i] == 3) { count_errors_arabic = count_errors_arabic.replace(count_errors_arabic[+i], three) }
            if (count_errors_arabic[i] == 4) { count_errors_arabic = count_errors_arabic.replace(count_errors_arabic[+i], four) }
            if (count_errors_arabic[i] == 5) { count_errors_arabic = count_errors_arabic.replace(count_errors_arabic[+i], five) }
            if (count_errors_arabic[i] == 6) { count_errors_arabic = count_errors_arabic.replace(count_errors_arabic[+i], six) }
            if (count_errors_arabic[i] == 7) { count_errors_arabic = count_errors_arabic.replace(count_errors_arabic[+i], seven) }
            if (count_errors_arabic[i] == 8) { count_errors_arabic = count_errors_arabic.replace(count_errors_arabic[+i], eight) }
            if (count_errors_arabic[i] == 9) { count_errors_arabic = count_errors_arabic.replace(count_errors_arabic[+i], nine) }
        };
        if (arabic_choose.checked) {
            newExam_errors.innerHTML = `<pre class='retest'> Retest for errors (ctrl)</pre>
            ${count_errors_arabic}: Number of errors`;
        }
        else {
            newExam_errors.innerHTML = `<pre class='retest'>Retest for errors (ctrl)</pre> Number of errors: ${len}`;
        }
    };
}
arabic_count_errors();
//______________________________ onmouse ________________________
var pm = 1; var save_num;
arabic_numbers();
function arabic_numbers() {
    for (let i = 0; i < answer.value.length; i++) {
        if ((numbers.includes(answer.value[i]) == false || num1.value == '') && page != 'g') {
            answer.value = answer.value.replace(answer.value[+i], '')
        }
        save_num = answer.value;
        if (answer.value[i] == 0) { answer.value = answer.value.replace(answer.value[+i], zero) }
        if (answer.value[i] == 1) { answer.value = answer.value.replace(answer.value[+i], one) }
        if (answer.value[i] == 2) { answer.value = answer.value.replace(answer.value[+i], two) }
        if (answer.value[i] == 3) { answer.value = answer.value.replace(answer.value[+i], three) }
        if (answer.value[i] == 4) { answer.value = answer.value.replace(answer.value[+i], four) }
        if (answer.value[i] == 5) { answer.value = answer.value.replace(answer.value[+i], five) }
        if (answer.value[i] == 6) { answer.value = answer.value.replace(answer.value[+i], six) }
        if (answer.value[i] == 7) { answer.value = answer.value.replace(answer.value[+i], seven) }
        if (answer.value[i] == 8) { answer.value = answer.value.replace(answer.value[+i], eight) }
        if (answer.value[i] == 9) { answer.value = answer.value.replace(answer.value[+i], nine) }
    };
    if (save_num < 0 && save_num.includes('-') == false) { answer.value = '-' + answer.value };
    for (let i = 0; i < num1.value.length; i++) {
        if ((numbers.includes(num1.value[i]) == false || answer.value == '') && page == 'g') {
            num1.value = num1.value.replace(num1.value[+i], '')
        }
        // save_num = answer.value;
        if (num1.value[i] == 0) { num1.value = num1.value.replace(num1.value[+i], zero) }
        if (num1.value[i] == 1) { num1.value = num1.value.replace(num1.value[+i], one) }
        if (num1.value[i] == 2) { num1.value = num1.value.replace(num1.value[+i], two) }
        if (num1.value[i] == 3) { num1.value = num1.value.replace(num1.value[+i], three) }
        if (num1.value[i] == 4) { num1.value = num1.value.replace(num1.value[+i], four) }
        if (num1.value[i] == 5) { num1.value = num1.value.replace(num1.value[+i], five) }
        if (num1.value[i] == 6) { num1.value = num1.value.replace(num1.value[+i], six) }
        if (num1.value[i] == 7) { num1.value = num1.value.replace(num1.value[+i], seven) }
        if (num1.value[i] == 8) { num1.value = num1.value.replace(num1.value[+i], eight) }
        if (num1.value[i] == 9) { num1.value = num1.value.replace(num1.value[+i], nine) }
    };
    for (let i = 0; i < num2.value.length; i++) {
        if ((numbers.includes(num2.value[i]) == false || answer.value == '') && page == 'g') {
            num2.value = num2.value.replace(num2.value[+i], '')
        }
        save_num = answer.value;
        if (num2.value[i] == 0) { num2.value = num2.value.replace(num2.value[+i], zero) }
        if (num2.value[i] == 1) { num2.value = num2.value.replace(num2.value[+i], one) }
        if (num2.value[i] == 2) { num2.value = num2.value.replace(num2.value[+i], two) }
        if (num2.value[i] == 3) { num2.value = num2.value.replace(num2.value[+i], three) }
        if (num2.value[i] == 4) { num2.value = num2.value.replace(num2.value[+i], four) }
        if (num2.value[i] == 5) { num2.value = num2.value.replace(num2.value[+i], five) }
        if (num2.value[i] == 6) { num2.value = num2.value.replace(num2.value[+i], six) }
        if (num2.value[i] == 7) { num2.value = num2.value.replace(num2.value[+i], seven) }
        if (num2.value[i] == 8) { num2.value = num2.value.replace(num2.value[+i], eight) }
        if (num2.value[i] == 9) { num2.value = num2.value.replace(num2.value[+i], nine) }
    };
    if (save_num < 0 && save_num.includes('-') == false) { answer.value = '-' + answer.value };
    for (let i = 0; i < sum.value.length; i++) {
        if (sum.value[i] == 0) { sum.value = sum.value.replace(sum.value[+i], zero) }
        if (sum.value[i] == 1) { sum.value = sum.value.replace(sum.value[+i], one) }
        if (sum.value[i] == 2) { sum.value = sum.value.replace(sum.value[+i], two) }
        if (sum.value[i] == 3) { sum.value = sum.value.replace(sum.value[+i], three) }
        if (sum.value[i] == 4) { sum.value = sum.value.replace(sum.value[+i], four) }
        if (sum.value[i] == 5) { sum.value = sum.value.replace(sum.value[+i], five) }
        if (sum.value[i] == 6) { sum.value = sum.value.replace(sum.value[+i], six) }
        if (sum.value[i] == 7) { sum.value = sum.value.replace(sum.value[+i], seven) }
        if (sum.value[i] == 8) { sum.value = sum.value.replace(sum.value[+i], eight) }
        if (sum.value[i] == 9) { sum.value = sum.value.replace(sum.value[+i], nine) }
        if (sum.value[i] == null) { sum.value = sum.value.replace(sum.value[+i], ``) }
    }
};
var save_num2;
function english_numbers() {
    save_num2 = answer.value;
    if (page != 'g') {
        for (let i = 0; i < answer.value.length; i++) {
            if (answer.value[i] == zero) { answer.value = answer.value.replace(answer.value[+i], +0) }
            if (answer.value[i] == one) { answer.value = answer.value.replace(answer.value[+i], +1) }
            if (answer.value[i] == two) { answer.value = answer.value.replace(answer.value[+i], +2) }
            if (answer.value[i] == three) { answer.value = answer.value.replace(answer.value[+i], +3) }
            if (answer.value[i] == four) { answer.value = answer.value.replace(answer.value[+i], +4) }
            if (answer.value[i] == five) { answer.value = answer.value.replace(answer.value[+i], +5) }
            if (answer.value[i] == six) { answer.value = answer.value.replace(answer.value[+i], +6) }
            if (answer.value[i] == seven) { answer.value = answer.value.replace(answer.value[+i], +7) }
            if (answer.value[i] == eight) { answer.value = answer.value.replace(answer.value[+i], +8) }
            if (answer.value[i] == nine) { answer.value = answer.value.replace(answer.value[+i], +9) }
            if (answer.value[i] == null) { answer.value = answer.value.replace(answer.value[+i], ``) }
        }
    } else if (page == 'g') {
        for (let i = 0; i < num1.value.length; i++) {
            if (numbers.includes(num1.value[i]) == false || answer.value == '') {
                num1.value = num1.value.replace(num1.value[+i], '')
            }
        }
        for (let i = 0; i < num2.value.length; i++) {
            if ((numbers.includes(num2.value[i]) == false || answer.value == '') && page == 'g') {
                num2.value = num2.value.replace(num2.value[+i], '')
            }
        }
        for (let i = 0; i < num1.value.length; i++) {
            if (num1.value[i] == zero) { num1.value = num1.value.replace(num1.value[+i], +0) }
            if (num1.value[i] == one) { num1.value = num1.value.replace(num1.value[+i], +1) }
            if (num1.value[i] == two) { num1.value = num1.value.replace(num1.value[+i], +2) }
            if (num1.value[i] == three) { num1.value = num1.value.replace(num1.value[+i], +3) }
            if (num1.value[i] == four) { num1.value = num1.value.replace(num1.value[+i], +4) }
            if (num1.value[i] == five) { num1.value = num1.value.replace(num1.value[+i], +5) }
            if (num1.value[i] == six) { num1.value = num1.value.replace(num1.value[+i], +6) }
            if (num1.value[i] == seven) { num1.value = num1.value.replace(num1.value[+i], +7) }
            if (num1.value[i] == eight) { num1.value = num1.value.replace(num1.value[+i], +8) }
            if (num1.value[i] == nine) { num1.value = num1.value.replace(num1.value[+i], +9) }
            // if (num1.value[i] == null) { num1.value = num1.value.replace(num1.value[+i], ``) }
        }
        for (let i = 0; i < num2.value.length; i++) {
            if (num2.value[i] == zero) { num2.value = num2.value.replace(num2.value[+i], +0) }
            if (num2.value[i] == one) { num2.value = num2.value.replace(num2.value[+i], +1) }
            if (num2.value[i] == two) { num2.value = num2.value.replace(num2.value[+i], +2) }
            if (num2.value[i] == three) { num2.value = num2.value.replace(num2.value[+i], +3) }
            if (num2.value[i] == four) { num2.value = num2.value.replace(num2.value[+i], +4) }
            if (num2.value[i] == five) { num2.value = num2.value.replace(num2.value[+i], +5) }
            if (num2.value[i] == six) { num2.value = num2.value.replace(num2.value[+i], +6) }
            if (num2.value[i] == seven) { num2.value = num2.value.replace(num2.value[+i], +7) }
            if (num2.value[i] == eight) { num2.value = num2.value.replace(num2.value[+i], +8) }
            if (num2.value[i] == nine) { num2.value = num2.value.replace(num2.value[+i], +9) }
            // if (num2.value[i] == null) { num2.value = num2.value.replace(num2.value[+i], ``) }
        }
        if (arabic_choose.checked == false) {
            for (let i = 0; i < answer.value.length; i++) {
                if (answer.value[i] == zero) { answer.value = answer.value.replace(answer.value[+i], +0) }
                if (answer.value[i] == one) { answer.value = answer.value.replace(answer.value[+i], +1) }
                if (answer.value[i] == two) { answer.value = answer.value.replace(answer.value[+i], +2) }
                if (answer.value[i] == three) { answer.value = answer.value.replace(answer.value[+i], +3) }
                if (answer.value[i] == four) { answer.value = answer.value.replace(answer.value[+i], +4) }
                if (answer.value[i] == five) { answer.value = answer.value.replace(answer.value[+i], +5) }
                if (answer.value[i] == six) { answer.value = answer.value.replace(answer.value[+i], +6) }
                if (answer.value[i] == seven) { answer.value = answer.value.replace(answer.value[+i], +7) }
                if (answer.value[i] == eight) { answer.value = answer.value.replace(answer.value[+i], +8) }
                if (answer.value[i] == nine) { answer.value = answer.value.replace(answer.value[+i], +9) }
                // if (answer.value[i] == null) { answer.value = answer.value.replace(answer.value[+i], ``) }
            }
        }
        if (arabic_choose.checked == false) {
            for (let i = 0; i < sum.value.length; i++) {
                if (sum.value[i] == zero) { sum.value = sum.value.replace(sum.value[+i], +0) }
                if (sum.value[i] == one) { sum.value = sum.value.replace(sum.value[+i], +1) }
                if (sum.value[i] == two) { sum.value = sum.value.replace(sum.value[+i], +2) }
                if (sum.value[i] == three) { sum.value = sum.value.replace(sum.value[+i], +3) }
                if (sum.value[i] == four) { sum.value = sum.value.replace(sum.value[+i], +4) }
                if (sum.value[i] == five) { sum.value = sum.value.replace(sum.value[+i], +5) }
                if (sum.value[i] == six) { sum.value = sum.value.replace(sum.value[+i], +6) }
                if (sum.value[i] == seven) { sum.value = sum.value.replace(sum.value[+i], +7) }
                if (sum.value[i] == eight) { sum.value = sum.value.replace(sum.value[+i], +8) }
                if (sum.value[i] == nine) { sum.value = sum.value.replace(sum.value[+i], +9) }
                if (sum.value[i] == null) { sum.value = sum.value.replace(sum.value[+i], ``) }
            }
        }
    }
};
var plus,
    plus_arabic;

plus1.onmousedown = function () {
    if (arabic_choose.checked == false) {
        plus = setInterval(function () {
            if (page != 'g' && num1.value != '') {
                if (answer.value == '') { answer.value = +0 }
                answer.value = +answer.value + 1;
            }
            else if (page == 'g' && answer.value != '') {
                if (num1.value == '') { num1.value = +0 }
                num1.value = +num1.value + 1;
            }

        }, 150)
        plus1.onmouseup = plus1.onmouseleave = function () {
            clearInterval(plus);
        }
    }

    else if (arabic_choose.checked == true) {
        plus_arabic = setInterval(function () {
            if (answer.value == '' && page != 'g' && num1.value != '') { answer.value = +0 }
            else if (page == 'g' && num1.value == '' && answer.value != '') { num1.value = +0 }
            english_numbers();
            if (page != 'g') {
                answer.value = +answer.value + 1;
                answer_eng = answer.value;
            }
            else if (page == 'g') {
                num1.value = +num1.value + 1;
                num1_eng = num1.value;
            }
            arabic_numbers();
            arabic();
        }, 150)

        plus1.onmouseup = function () {
            clearInterval(plus_arabic);
            // arabic_numbers();
        }
        plus1.onmouseleave = function () {
            clearInterval(plus_arabic);
        }
    }
};
plus1.onclick = function () {
    if (num1.value == '' && page != 'g') { answer.value = '' }
    if (arabic_choose.checked == false) {
        if (answer.value == '' && page != 'g' && num1.value != '') { answer.value = +0 }
        else if (page == 'g' && num1.value == '' && answer.value != '') { num1.value = +0 }
        if (page != 'g' && num1.value != '') { answer.value = +answer.value + 1; }
        else if (page == 'g' && answer.value != '') { num1.value = +num1.value + 1; }
    }
    else if (arabic_choose.checked == true) {
        if (answer.value == '' && page != 'g' && num1.value != '') { answer.value = +0 }
        else if (page == 'g' && num1.value == '' && answer.value != '') { num1.value = +0 }
        english_numbers();

        if (page != 'g' && num1.value != '') {
            answer.value = +answer.value + 1;
            answer_eng = answer.value;
        }
        else if (page == 'g' && answer.value != '') {
            num1.value = +num1.value + 1;
            answer_eng = answer.value;
        }
        arabic_numbers();
        arabic();

    }
};

// _____________________ minus1____________________
minus1.onmousedown = function () {
    if (arabic_choose.checked == false) {
        minus = setInterval(function () {
            if (page != 'g' && num1.value != '') {
                if (answer.value == '') { answer.value = +0 }
                answer.value = +answer.value - 1;
            }
            else if (page == 'g' && answer.value != '') {
                if (num1.value == '') { num1.value = +0 }
                num1.value = +num1.value - 1;
            }

        }, 150)
        minus1.onmouseup = minus1.onmouseleave = function () {
            clearInterval(minus);
        }
    }

    else if (num1.value != '' && arabic_choose.checked == true) {
        minus_arabic = setInterval(function () {
            if (answer.value == '' && page != 'g') { answer.value = +0 }
            else if (page == 'g' && num1.value == '') { num1.value = +0 }
            english_numbers();
            if (page != 'g') {
                answer.value = +answer.value - 1;
                answer_eng = answer.value;
            }
            else if (page == 'g') {
                num1.value = +num1.value - 1;
                num1_eng = num1.value;
                arabic_numbers();
            }
            arabic_numbers();
            arabic();
        }, 150)

        minus1.onmouseup = function () {
            clearInterval(minus_arabic);
            // arabic_numbers();
        }
        minus1.onmouseleave = function () {
            clearInterval(minus_arabic);
        }
    }
};
minus1.onclick = function () {
    if (num1.value == '' && page != 'g') { answer.value = '' }
    if (arabic_choose.checked == false) {
        if (answer.value == '' && page != 'g' && num1.value != '') { answer.value = +0 }
        else if (page == 'g' && num1.value == '' && answer.value != '') { num1.value = +0 }
        if (page != 'g' && num1.value != '') { answer.value = +answer.value - 1; }
        else if (page == 'g' && answer.value != '') { num1.value = +num1.value - 1; }
    }
    else if (arabic_choose.checked == true) {
        if (answer.value == '' && page != 'g' && num1.value != '') { answer.value = +0 }
        // else if (page == 'g' && answer.value != '') { num1.value = +0 }
        english_numbers();
        if (page != 'g' && num1.value != '') {
            answer.value = +answer.value - 1;
            answer_eng = answer.value;
        }
        else if (page == 'g' && answer.value != '') {
            num1.value = +num1.value - 1;
            num1_eng = num1.value;
        }
        arabic_numbers();
        arabic();
    }
};
// _______________________-- plus2 _______________________
plus2.onmousedown = function () {
    if (arabic_choose.checked == false) {
        plus = setInterval(function () {
            if (page == 'g' && answer.value != '') {
                if (num2.value == '') { num2.value = +0 }
                num2.value = +num2.value + 1;
            }
        }, 150)
        plus2.onmouseup = plus2.onmouseleave = function () {
            clearInterval(plus);
        }
    }

    else if (arabic_choose.checked == true) {
        plus_arabic = setInterval(function () {
            if (page == 'g' && num2.value == '' && answer.value != '') { num2.value = +0 }
            english_numbers();
            num2.value = +num2.value + 1;
            num2_eng = num2.value;
            arabic_numbers();
            arabic();
        }, 150)
        plus2.onmouseup = function () {
            clearInterval(plus_arabic);
            // arabic_numbers();
        }
        plus2.onmouseleave = function () {
            clearInterval(plus_arabic);
        }
    }
};
plus2.onclick = function () {
    if (arabic_choose.checked == false) {
        if (page == 'g' && num2.value == '' && answer.value != '') { num2.value = +0 }
        if (page == 'g' && answer.value != '') { num2.value = +num2.value + 1; }
    }
    else if (arabic_choose.checked == true) {
        if (answer.value == '' && page != 'g' && num2.value != '') { answer.value = +0 }
        else if (page == 'g' && num2.value == '' && answer.value != '') { num2.value = +0 }
        english_numbers();
        if (page == 'g' && answer.value != '') {
            num2.value = +num2.value + 1;
            answer_eng = answer.value;
        }
        arabic_numbers();
        arabic();
    };
    if (sound.checked) {
        num2.onmouseover();
    }
};

// _____________________ minus2____________________
minus2.onmousedown = function () {
    if (arabic_choose.checked == false) {
        minus = setInterval(function () {
            if (page == 'g' && answer.value != '') {
                if (num2.value == '') { num2.value = +0 }
                num2.value = +num2.value - 1;
            }

        }, 150)
        minus2.onmouseup = minus2.onmouseleave = function () {
            clearInterval(minus);
        }
    }

    else if (answer.value != '' && arabic_choose.checked == true) {
        minus_arabic = setInterval(function () {
            if (page == 'g' && num2.value == '') { num2.value = +0 }
            english_numbers();
            num2.value = +num2.value - 1;
            num2_eng = num2.value;
            arabic_numbers();
            arabic();
        }, 150)
        minus2.onmouseup = function () {
            clearInterval(minus_arabic);
            // arabic_numbers();
        }
        minus2.onmouseleave = function () {
            clearInterval(minus_arabic);
        }
    }
};
minus2.onclick = function () {
    if (arabic_choose.checked == false) {
        if (page == 'g' && num2.value == '' && answer.value != '') { num2.value = +0 }
        if (page == 'g' && answer.value != '') { num2.value = +num2.value - 1; }
    }
    else if (arabic_choose.checked == true) {
        // if (page == 'g' && answer.value != '') { num2.value = +0 }
        english_numbers();
        if (page == 'g' && answer.value != '') {
            num2.value = +num2.value - 1;
            num2_eng = num2.value;
        }
        arabic_numbers();
        arabic();
    };
    if (sound.checked) {
        num2.onmouseover();
    }
};

//______________________________ scroll to result for width of screen < 1100px _____________________
function scroll_result2() {
    if (window.innerWidth < '1100' || window.outerWidth < '1100') {
        window.scroll({ left: 300, top: 1450, behavior: "smooth" });
    }
}
//______________________________ scroll to start error exam for width of screen < 1100px ____
function scroll_error1() {
    if ((window.innerWidth < '1100' || window.outerWidth < '1100') &&
        (window.innerWidth > '500' || window.outerWidth > '500')) {
        scroll({ left: 300, top: 280, behavior: "smooth" });
    }
}
//______________________________ scroll to start error exam for width of screen < 500px ____
function scroll_error2() {
    if ((window.innerWidth < '500' || window.outerWidth < '500') &&
        (window.innerWidth > '380' || window.outerWidth > '380')) {
        scroll({ left: 300, top: 500, behavior: "smooth" });
    }
}
//______________________________ scroll to start error exam for width of screen < 380px ____
function scroll_error3() {
    if (window.innerWidth < '380' || window.outerWidth < '380') {
        scroll({ left: 300, top: 720, behavior: "smooth" });
    }
}
//______________________________________ languages _____________________________
var select = document.getElementsByClassName("select")[0];
var options = document.getElementsByClassName("option");
select.onmousedown = function () {
    if (options[0].style.display == "block") {
        options[0].style.display = "none";
        options[1].style.display = "none";
    }
    else {
        options[0].style.display = "block";
        options[1].style.display = "block";
    }
}
options[0].onmousedown = options[1].onmousedown = select.onmouseleave = function () {
    options[0].style.display = "none";
    options[1].style.display = "none";
}

//_____________ Speed ____________________
var move = document.getElementsByClassName("move")[0];
var speed = document.getElementsByClassName("speed")[0];
var speed_form = document.getElementsByClassName("speed_form")[0];
var speed_level = document.getElementsByClassName("speed_level")[0];
var speed_float = document.getElementsByClassName("speed_float")[0];
speed.onclick = speed_level.onmouseover = function () {
    move.style.cssText = `
    transform: translateX(120px) !important;`;

}

document.body.onmousedown = document.body.onkeydown = function () {
    move.style.cssText = `transform: translateX(0px);`;
}
move.onmouseleave = function () {
    setTimeout(function () {
        move.style.cssText = `transform: translateX(0px);`;
    }, 500);
    if (first.checked == true) {
        choose_speed = 3;
        localStorage.speed_l = 'first';
    }
    else if (second.checked == true) {
        choose_speed = 12;
        localStorage.speed_l = 'second';
    }
    else if (third.checked == true) {
        choose_speed = 30;
        localStorage.speed_l = 'third';
    }
};
move.onmouseleave();
/////_____________________________ color_container ___________________
var box = document.getElementsByClassName('box')[0];
var color_container = document.getElementsByClassName('color_container')[0];
var myColor;
var colors = document.getElementById('colors');
var close = document.getElementsByClassName('close')[0];

myColor = localStorage.myColor;
colors.value = localStorage.colors;

title.ondblclick = color_container.ondblclick = close.onclick = function () {
    if (color_container.style.display == 'none') {
        color_container.style.display = 'block';
    } else {
        color_container.style.display = 'none'
    }
};
volume.onmouseleave = function () {
    title.ondblclick = color_container.ondblclick = function () {
        if (color_container.style.display == 'none') {
            color_container.style.display = 'block';
        } else {
            color_container.style.display = 'none'
        }
    };
}
var color_array = [0, 0, 0, 0, 0, 0];
var color = 'rgb(,,)';
var spanColor = '';
function count_color_function() {
    for (let i = 1; i < 7; i = i + 1) {
        if (colors.value[i] == '0') { count_color = 0 }
        if (colors.value[i] == '1') { count_color = 1 }
        if (colors.value[i] == '2') { count_color = 2 }
        if (colors.value[i] == '3') { count_color = 3 }
        if (colors.value[i] == '4') { count_color = 4 }
        if (colors.value[i] == '5') { count_color = 5 }
        if (colors.value[i] == '6') { count_color = 6 }
        if (colors.value[i] == '7') { count_color = 7 }
        if (colors.value[i] == '8') { count_color = 8 }
        if (colors.value[i] == '9') { count_color = 9 }
        if (colors.value[i] == 'a') { count_color = 10 }
        if (colors.value[i] == 'b') { count_color = 11 }
        if (colors.value[i] == 'c') { count_color = 12 }
        if (colors.value[i] == 'd') { count_color = 13 }
        if (colors.value[i] == 'e') { count_color = 14 }
        if (colors.value[i] == 'f') { count_color = 15 }
        if (i == 1 || i == 3 || i == 5) { count_color = count_color * 16 };
        color_array[i - 1] = +(count_color);
    };
    color_array[0] = +color_array[0] + color_array[1];
    color_array[1] = +color_array[2] + color_array[3];
    color_array[2] = +color_array[4] + color_array[5];

    if (color_array[0] + color_array[1] + color_array[2] > 300) {
        color_array[0] = color_array[1] = color_array[2] = 0;
        spanColor = 'rgb(150, 10, 0)';
    } else {
        color_array[0] = color_array[1] = color_array[2] = 240;
        spanColor = 'lightpink';
    }
    color = `rgb(${color_array[0]},${color_array[1]},${color_array[2]})`;
}
colors.onchange = colors.onclick = function () {
    count_color_function();
    document.body.style.background = colors.value;
    myColor = 2; localStorage.myColor = 2;
    localStorage.colors = colors.value;
    symbol_1.style.color = symbol_2.style.color = color;
    paragraph1.style.color = color;
    let i = 0;
    while (typeof press[i] == 'object') {
        press[i].style.color = color;
        i++;
    };
    i = 0;
    while (typeof p_all[i] == 'object') {
        p_all[i].style.color = color;
        i++;
    };
    i = 0;
    while (typeof span[i] == 'object') {
        span[i].style.color = spanColor;
        i++;
    }
}
count_color_function();
//______________ model _________________________
var model_number;

var face = document.getElementsByClassName('face');
var model = document.getElementsByClassName('model');
var container = document.getElementsByClassName('container')[0];
if (localStorage.model_number_math == null) {
    model_number = 1;
} else {
    model_number = localStorage.model_number_math;
};

var model_css = document.getElementById('model_css');
box.onclick = function () {
    model[3].style.cssText = `transform: rotateZ(-120deg);`;
    model[0].style.cssText = `transform: rotateZ(0deg);`;
    model[1].style.cssText = `transform: rotateZ(0deg);`;
    model[2].style.cssText = `transform: rotateZ(0deg);`;
    if (model_number == 1) {
        model_number = 2;    // black
        model[3].style.cssText = `transform: rotateZ(30deg);`;
        red.style.boxShadow = '10px 10px 25px 10px grey';
        color_container.style.display = 'block';
    }
    else if (model_number == 2) {
        model_number = 3; // green
        model[0].style.cssText = `transform: rotateZ(90deg);`;
        red.style.boxShadow = '10px 10px 25px 10px green';
        color_container.style.display = 'block';
    }
    else if (model_number == 3) {
        model_number = 4; // blue
        model[1].style.cssText = `transform: rotateZ(90deg);`;
        red.style.boxShadow = '10px 10px 25px 10px blue';
        color_container.style.display = 'block';
    }
    else if (model_number == 4) {
        model_number = 5;     // yellow
        color_container.style.display = 'block';
        red.style.boxShadow = '10px 10px 25px 10px yellow';
    }

    else if (model_number == 5) {
        model_number = 6;     // pink
        red.style.boxShadow = '10px 10px 25px 10px grey';
        color_container.style.display = 'block';
    }
    else if (model_number == 6) {
        model_number = 1;     // white
        model[2].style.cssText = `transform: rotateZ(90deg);`;
        red.style.boxShadow = '10px 10px 25px 10px grey';
        color_container.style.display = 'block';
    }
    localStorage.model_number_math = model_number;
    model_function();
    background();
};

function model_function() {
    myColor = 1;
    localStorage.myColor = 1;
    if (model_number == 2) { // night
        box.style.cssText = `animation: r4 800ms linear; animation-fill-mode: forwards`;
        model_css.href = "../css/night.css";
    }
    else if (model_number == 3) { // green
        box.style.cssText = `animation: r1 800ms linear; animation-fill-mode: forwards`;
        model_css.href = "";
    }
    else if (model_number == 1) { // white
        box.style.cssText = `animation: r3 800ms linear; animation-fill-mode: forwards`;
        model_css.href = "../css/light.css";
    }
    else if (model_number == 4) { // blue
        box.style.cssText = `animation: r2 800ms linear; animation-fill-mode: forwards`;
        model_css.href = "../css/blue1.css";
    }
    else if (model_number == 5) { // yellow
        box.style.cssText = `animation: r5 800ms linear; animation-fill-mode: forwards`;
        red.style.boxShadow = '10px 10px 25px 10px yellow';
        model_css.href = "../css/yellow.css";
    }
    else if (model_number == 6) { // pink
        box.style.cssText = `animation: r6 800ms linear; animation-fill-mode: forwards`;
        red.style.boxShadow = '10px 10px 25px 10px pink';
        model_css.href = "../css/pink.css";
    }
    for (let i = 0; i < 11; i++) {
        if (model_number == 1) {
            choose_div[i].style.border = '2px solid black';
        }
        if (model_number == 2) {
            choose_div[i].style.border = '2px solid white';
        }
        if (model_number == 3) {
            choose_div[i].style.border = '2px solid green';
        }
        if (model_number == 4) {
            choose_div[i].style.border = '2px solid blue';
        }
    };
};
function background() {
    myColor = 1;
    localStorage.myColor = 1;
    if (model_number == 2) { // night
        document.body.style.backgroundColor = 'black';
        symbol_1.style.color = symbol_2.style.color = "wheat";
        paragraph1.style.color = 'rgb(230,230,230)';
        let i = 0;
        while (typeof press[i] == 'object') {
            press[i].style.color = color;
            i++;
        };
        i = 0;
        while (typeof p_all[i] == 'object') {
            p_all[i].style.color = 'rgb(230, 230, 230)';
            i++;
        };
        i = 0;
        while (typeof span[i] == 'object') {
            span[i].style.color = 'rgb(230, 230, 230)';
            i++;
        };
        i = 0;
        while (typeof title_p[i] == 'object') {
            title_p[i].style.color = 'rgb(230, 230, 230)';
            i++;
        };

    }
    else if (model_number == 3) { // green
        document.body.style.backgroundColor = 'rgb(245,255,245)';
        symbol_1.style.color = symbol_2.style.color = "black";
        paragraph1.style.color = 'black';
        let i = 0;
        while (typeof press[i] == 'object') {
            press[i].style.color = color;
            i++;
        };
        i = 0;
        while (typeof p_all[i] == 'object') {
            p_all[i].style.color = 'black';
            i++;
        };
        i = 0;
        while (typeof span[i] == 'object') {
            span[i].style.color = 'rgb(150, 10, 0)';
            i++;
        };
        i = 0;
        while (typeof title_p[i] == 'object') {
            title_p[i].style.color = 'black';
            i++;
        };
    }
    else if (model_number == 1) { // white
        document.body.style.backgroundColor = 'rgb(245,245,245)';
        symbol_1.style.color = symbol_2.style.color = "black";
        paragraph1.style.color = 'black';
        let i = 0;
        while (typeof press[i] == 'object') {
            press[i].style.color = color;
            i++;
        };
        i = 0;
        while (typeof p_all[i] == 'object') {
            p_all[i].style.color = 'black';
            i++;
        };
        i = 0;
        while (typeof span[i] == 'object') {
            span[i].style.color = 'rgb(150, 10, 0)';
            i++;
        };
        i = 0;
        while (typeof title_p[i] == 'object') {
            title_p[i].style.color = 'black';
            i++;
        };
    }
    else if (model_number == 4) { // blue
        document.body.style.backgroundColor = 'rgb(245,245,255)';
        symbol_1.style.color = symbol_2.style.color = "black";
        paragraph1.style.color = 'black';
        let i = 0;
        while (typeof press[i] == 'object') {
            press[i].style.color = color;
            i++;
        };
        i = 0;
        while (typeof p_all[i] == 'object') {
            p_all[i].style.color = 'black';
            i++;
        };
        i = 0;
        while (typeof span[i] == 'object') {
            span[i].style.color = 'rgb(150, 10, 0)';
            i++;
        };
        i = 0;
        while (typeof title_p[i] == 'object') {
            title_p[i].style.color = 'black';
            i++;
        };
    }
    else if (model_number == 5) { // yellow
        document.body.style.backgroundColor = 'rgb(255,255,190)';
        symbol_1.style.color = symbol_2.style.color = "black";
        paragraph1.style.color = 'black';
        let i = 0;
        while (typeof press[i] == 'object') {
            press[i].style.color = color;
            i++;
        };
        i = 0;
        while (typeof p_all[i] == 'object') {
            p_all[i].style.color = 'black';
            i++;
        };
        i = 0;
        while (typeof span[i] == 'object') {
            span[i].style.color = 'rgb(150, 10, 0)';
            i++;
        };
        i = 0;
        while (typeof title_p[i] == 'object') {
            title_p[i].style.color = 'black';
            i++;
        };
    }
    else if (model_number == 6) { // pink
        document.body.style.backgroundColor = 'rgb(255,230,230)';
        symbol_1.style.color = symbol_2.style.color = "black";
        paragraph1.style.color = 'black';
        let i = 0;
        while (typeof press[i] == 'object') {
            press[i].style.color = color;
            i++;
        };
        i = 0;
        while (typeof p_all[i] == 'object') {
            p_all[i].style.color = 'black';
            i++;
        };
        i = 0;
        while (typeof span[i] == 'object') {
            span[i].style.color = 'rgb(150, 10, 0)';
            i++;
        };
        i = 0;
        while (typeof title_p[i] == 'object') {
            title_p[i].style.color = 'black';
            i++;
        };
    }
};


if (myColor == 2) { model_function(); colors.onclick(); }
if (myColor == 1) { model_function(); background(); }



//_______________________ title ________________________________________
var title = document.getElementById("title");
title.title = 'Clean the screen: esc';
title.onclick = function () {
    all_input.onclick();
    all_input.checked = m1.checked = m2.checked = m3.checked =
        m4.checked = m5.checked = m6.checked = m7.checked =
        m8.checked = m9.checked = m10.checked = false;
    section_buttons.classList.remove('correct', 'wrong');
}

// ____________ font Size _______________________
function fontSize_num() {
    if (arabic_choose.checked) {
        num1.style.fontSize = '38px';
        num2.style.fontSize = '38px';
        answer.style.fontSize = '38px';
        num1.style.paddingTop = '4px';
        num2.style.paddingTop = '4px';
        answer.style.paddingTop = '4px';
        answer.setAttribute('class', 'nums');
    }
    else {
        num1.style.fontSize = '32px';
        num2.style.fontSize = '32px';
        answer.style.fontSize = '32px';
        num1.style.paddingTop = '0px';
        num2.style.paddingTop = '0px';
        answer.style.paddingTop = '0px';
        answer.removeAttribute('class', 'nums');
    }
};
fontSize_num();

//___________ audio _________________________________________________________

newExam.onmouseover = function () {
    if (sound.checked == true && count2.length != 0) {
        for (let c = 0; c < 131; c++) {
            audio[c].muted = true;
        }
        start_new_exam_voice.muted = false;
        start_new_exam_voice.play();
    }
}
start.addEventListener('mouseover', function () {
    if (sound.checked == true && count2.length != 0) {
        for (let c = 0; c < 131; c++) {
            audio[c].muted = true;
            // audio[c].pause();
            // audio[c].load();
        }
        next_voice.muted = false;
        next_voice.play();
    }
})
start.addEventListener('mouseleave', function () {
    for (let c = 0; c < 131; c++) {
        audio[c].muted = true;
        // audio[c].pause();
        // audio[c].load();
    }
})
newExam_errors.onmouseover = function () {
    if (sound.checked == true && errors_num1.length != 0) {
        for (let c = 0; c < 131; c++) {
            audio[c].muted = true;
        }
        exam_errors_voice.muted = false;
        exam_errors_voice.play();
    }
}

start_errors.onmouseover = function () {
    if (sound.checked == true && errors_num1.length != 0) {
        for (let c = 0; c < 131; c++) {
            audio[c].muted = true;
        }
        start_exam_errors_voice.muted = false;
        start_exam_errors_voice.play();
    }
}

result.onmouseover = function () {
    if (sound.checked == true && answer.value != '' && num1.value != '' && count2.length != 0) {
        for (let c = 0; c < 131; c++) {
            audio[c].muted = true;
        }
        space_voice.muted = false;
        space_voice.play();
    }
}

all_input.onmouseover = table[0].onmouseover = function () {
    if (sound.checked == true) {
        for (let c = 0; c < 131; c++) {
            audio[c].muted = true;
        }
        audio[0].muted = false;
        audio[21].muted = false;
        if (all_input.checked == false) { audio[0].play(); }
        else if (all_input.checked == true) { audio[21].play(); }
    }
};

answer.onkeyup = function (e) {
    if (sound.checked == true && e.keyCode != 32) {
        for (let c = 0; c < 131; c++) {
            audio[c].muted = true;
        }
        if (answer.value == 1 || answer.value == one) { a1.muted = false; a1.play() }
        else if (answer.value == 2 || answer.value == two) { a2.muted = false; a2.play() }
        else if (answer.value == 3 || answer.value == three) { a3.muted = false; a3.play() }
        else if (answer.value == 4 || answer.value == four) { a4.muted = false; a4.play() }
        else if (answer.value == 5 || answer.value == five) { a5.muted = false; a5.play() }
        else if (answer.value == 6 || answer.value == six) { a6.muted = false; a6.play() }
        else if (answer.value == 7 || answer.value == seven) { a7.muted = false; a7.play() }
        else if (answer.value == 8 || answer.value == eight) { a8.muted = false; a8.play() }
        else if (answer.value == 9 || answer.value == nine) { a9.muted = false; a9.play() }
        else if (answer.value == 10 || answer.value == one + zero) { a10.muted = false; a10.play() }
        else if (answer.value == 11 || answer.value == one + one) { a11.muted = false; a11.play() }
        else if (answer.value == 12 || answer.value == one + two) { a12.muted = false; a12.play() }
        else if (answer.value == 13 || answer.value == one + three) { a13.muted = false; a13.play() }
        else if (answer.value == 14 || answer.value == one + four) { a14.muted = false; a14.play() }
        else if (answer.value == 15 || answer.value == one + five) { a15.muted = false; a15.play() }
        else if (answer.value == 16 || answer.value == one + six) { a16.muted = false; a16.play() }
        else if (answer.value == 17 || answer.value == one + seven) { a17.muted = false; a17.play() }
        else if (answer.value == 18 || answer.value == one + eight) { a18.muted = false; a18.play() }
        else if (answer.value == 19 || answer.value == one + nine) { a19.muted = false; a19.play() }
        else if (answer.value == 20 || answer.value == two + zero) { a20.muted = false; a20.play() }
        else if (answer.value == 21 || answer.value == two + one) { a21.muted = false; a21.play() }
        else if (answer.value == 22 || answer.value == two + two) { a22.muted = false; a22.play() }
        else if (answer.value == 23 || answer.value == two + three) { a23.muted = false; a23.play() }
        else if (answer.value == 24 || answer.value == two + four) { a24.muted = false; a24.play() }
        else if (answer.value == 25 || answer.value == two + five) { a25.muted = false; a25.play() }
        else if (answer.value == 26 || answer.value == two + six) { a26.muted = false; a26.play() }
        else if (answer.value == 27 || answer.value == two + seven) { a27.muted = false; a27.play() }
        else if (answer.value == 28 || answer.value == two + eight) { a28.muted = false; a28.play() }
        else if (answer.value == 29 || answer.value == two + nine) { a29.muted = false; a29.play() }
        else if (answer.value == 30 || answer.value == three + zero) { a30.muted = false; a30.play() }
        else if (answer.value == 31 || answer.value == three + one) { a31.muted = false; a31.play() }
        else if (answer.value == 32 || answer.value == three + two) { a32.muted = false; a32.play() }
        else if (answer.value == 33 || answer.value == three + three) { a33.muted = false; a33.play() }
        else if (answer.value == 34 || answer.value == three + four) { a34.muted = false; a34.play() }
        else if (answer.value == 35 || answer.value == three + five) { a35.muted = false; a35.play() }
        else if (answer.value == 36 || answer.value == three + six) { a36.muted = false; a36.play() }
        else if (answer.value == 37 || answer.value == three + seven) { a37.muted = false; a37.play() }
        else if (answer.value == 38 || answer.value == three + eight) { a38.muted = false; a38.play() }
        else if (answer.value == 39 || answer.value == three + nine) { a39.muted = false; a39.play() }
        else if (answer.value == 40 || answer.value == four + zero) { a40.muted = false; a40.play() }
        else if (answer.value == 41 || answer.value == four + one) { a41.muted = false; a41.play() }
        else if (answer.value == 42 || answer.value == four + two) { a42.muted = false; a42.play() }
        else if (answer.value == 43 || answer.value == four + three) { a43.muted = false; a43.play() }
        else if (answer.value == 44 || answer.value == four + four) { a44.muted = false; a44.play() }
        else if (answer.value == 45 || answer.value == four + five) { a45.muted = false; a45.play() }
        else if (answer.value == 46 || answer.value == four + six) { a46.muted = false; a46.play() }
        else if (answer.value == 47 || answer.value == four + seven) { a47.muted = false; a47.play() }
        else if (answer.value == 48 || answer.value == four + eight) { a48.muted = false; a48.play() }
        else if (answer.value == 49 || answer.value == four + nine) { a49.muted = false; a49.play() }
        else if (answer.value == 50 || answer.value == five + zero) { a50.muted = false; a50.play() }
        else if (answer.value == 51 || answer.value == five + one) { a51.muted = false; a51.play() }
        else if (answer.value == 52 || answer.value == five + two) { a52.muted = false; a52.play() }
        else if (answer.value == 53 || answer.value == five + three) { a53.muted = false; a53.play() }
        else if (answer.value == 54 || answer.value == five + four) { a54.muted = false; a54.play() }
        else if (answer.value == 55 || answer.value == five + five) { a55.muted = false; a55.play() }
        else if (answer.value == 56 || answer.value == five + six) { a56.muted = false; a56.play() }
        else if (answer.value == 57 || answer.value == five + seven) { a57.muted = false; a57.play() }
        else if (answer.value == 58 || answer.value == five + eight) { a58.muted = false; a58.play() }
        else if (answer.value == 59 || answer.value == five + nine) { a59.muted = false; a59.play() }
        else if (answer.value == 60 || answer.value == six + zero) { a60.muted = false; a60.play() }
        else if (answer.value == 61 || answer.value == six + one) { a61.muted = false; a61.play() }
        else if (answer.value == 62 || answer.value == six + two) { a62.muted = false; a62.play() }
        else if (answer.value == 63 || answer.value == six + three) { a63.muted = false; a63.play() }
        else if (answer.value == 64 || answer.value == six + four) { a64.muted = false; a64.play() }
        else if (answer.value == 65 || answer.value == six + five) { a65.muted = false; a65.play() }
        else if (answer.value == 66 || answer.value == six + six) { a66.muted = false; a66.play() }
        else if (answer.value == 67 || answer.value == six + seven) { a67.muted = false; a67.play() }
        else if (answer.value == 68 || answer.value == six + eight) { a68.muted = false; a68.play() }
        else if (answer.value == 69 || answer.value == six + nine) { a69.muted = false; a69.play() }
        else if (answer.value == 70 || answer.value == seven + zero) { a70.muted = false; a70.play() }
        else if (answer.value == 71 || answer.value == seven + one) { a71.muted = false; a71.play() }
        else if (answer.value == 72 || answer.value == seven + two) { a72.muted = false; a72.play() }
        else if (answer.value == 73 || answer.value == seven + three) { a73.muted = false; a73.play() }
        else if (answer.value == 74 || answer.value == seven + four) { a74.muted = false; a74.play() }
        else if (answer.value == 75 || answer.value == seven + five) { a75.muted = false; a75.play() }
        else if (answer.value == 76 || answer.value == seven + six) { a76.muted = false; a76.play() }
        else if (answer.value == 77 || answer.value == seven + seven) { a77.muted = false; a77.play() }
        else if (answer.value == 78 || answer.value == seven + eight) { a78.muted = false; a78.play() }
        else if (answer.value == 79 || answer.value == seven + nine) { a79.muted = false; a79.play() }
        else if (answer.value == 80 || answer.value == eight + zero) { a80.muted = false; a80.play() }
        else if (answer.value == 81 || answer.value == eight + one) { a81.muted = false; a81.play() }
        else if (answer.value == 82 || answer.value == eight + two) { a82.muted = false; a82.play() }
        else if (answer.value == 83 || answer.value == eight + three) { a83.muted = false; a83.play() }
        else if (answer.value == 84 || answer.value == eight + four) { a84.muted = false; a84.play() }
        else if (answer.value == 85 || answer.value == eight + five) { a85.muted = false; a85.play() }
        else if (answer.value == 86 || answer.value == eight + six) { a86.muted = false; a86.play() }
        else if (answer.value == 87 || answer.value == eight + seven) { a87.muted = false; a87.play() }
        else if (answer.value == 88 || answer.value == eight + eight) { a88.muted = false; a88.play() }
        else if (answer.value == 89 || answer.value == eight + nine) { a89.muted = false; a89.play() }
        else if (answer.value == 90 || answer.value == nine + zero) { a90.muted = false; a90.play() }
        else if (answer.value == 91 || answer.value == nine + one) { a91.muted = false; a91.play() }
        else if (answer.value == 92 || answer.value == nine + two) { a92.muted = false; a92.play() }
        else if (answer.value == 93 || answer.value == nine + three) { a93.muted = false; a93.play() }
        else if (answer.value == 94 || answer.value == nine + four) { a94.muted = false; a94.play() }
        else if (answer.value == 95 || answer.value == nine + five) { a95.muted = false; a95.play() }
        else if (answer.value == 96 || answer.value == nine + six) { a96.muted = false; a96.play() }
        else if (answer.value == 97 || answer.value == nine + seven) { a97.muted = false; a97.play() }
        else if (answer.value == 98 || answer.value == nine + eight) { a98.muted = false; a98.play() }
        else if (answer.value == 99 || answer.value == nine + nine) { a99.muted = false; a99.play() }
        else if (answer.value == 100 || answer.value == one + zero + zero) { a100.muted = false; a100.play() }
        else if (answer.value != '') { awrong.muted = false; awrong.play() }
    }
}

answer.onmouseover = function () {
    if (sound.checked == true) {
        for (let c = 0; c < 131; c++) {
            audio[c].muted = true;
        }
        if (answer.value == 1 || answer.value == one) { a1.muted = false; a1.play() }
        else if (answer.value == 2 || answer.value == two) { a2.muted = false; a2.play() }
        else if (answer.value == 3 || answer.value == three) { a3.muted = false; a3.play() }
        else if (answer.value == 4 || answer.value == four) { a4.muted = false; a4.play() }
        else if (answer.value == 5 || answer.value == five) { a5.muted = false; a5.play() }
        else if (answer.value == 6 || answer.value == six) { a6.muted = false; a6.play() }
        else if (answer.value == 7 || answer.value == seven) { a7.muted = false; a7.play() }
        else if (answer.value == 8 || answer.value == eight) { a8.muted = false; a8.play() }
        else if (answer.value == 9 || answer.value == nine) { a9.muted = false; a9.play() }
        else if (answer.value == 10 || answer.value == one + zero) { a10.muted = false; a10.play() }
        else if (answer.value == 11 || answer.value == one + one) { a11.muted = false; a11.play() }
        else if (answer.value == 12 || answer.value == one + two) { a12.muted = false; a12.play() }
        else if (answer.value == 13 || answer.value == one + three) { a13.muted = false; a13.play() }
        else if (answer.value == 14 || answer.value == one + four) { a14.muted = false; a14.play() }
        else if (answer.value == 15 || answer.value == one + five) { a15.muted = false; a15.play() }
        else if (answer.value == 16 || answer.value == one + six) { a16.muted = false; a16.play() }
        else if (answer.value == 17 || answer.value == one + seven) { a17.muted = false; a17.play() }
        else if (answer.value == 18 || answer.value == one + eight) { a18.muted = false; a18.play() }
        else if (answer.value == 19 || answer.value == one + nine) { a19.muted = false; a19.play() }
        else if (answer.value == 20 || answer.value == two + zero) { a20.muted = false; a20.play() }
        else if (answer.value == 21 || answer.value == two + one) { a21.muted = false; a21.play() }
        else if (answer.value == 22 || answer.value == two + two) { a22.muted = false; a22.play() }
        else if (answer.value == 23 || answer.value == two + three) { a23.muted = false; a23.play() }
        else if (answer.value == 24 || answer.value == two + four) { a24.muted = false; a24.play() }
        else if (answer.value == 25 || answer.value == two + five) { a25.muted = false; a25.play() }
        else if (answer.value == 26 || answer.value == two + six) { a26.muted = false; a26.play() }
        else if (answer.value == 27 || answer.value == two + seven) { a27.muted = false; a27.play() }
        else if (answer.value == 28 || answer.value == two + eight) { a28.muted = false; a28.play() }
        else if (answer.value == 29 || answer.value == two + nine) { a29.muted = false; a29.play() }
        else if (answer.value == 30 || answer.value == three + zero) { a30.muted = false; a30.play() }
        else if (answer.value == 31 || answer.value == three + one) { a31.muted = false; a31.play() }
        else if (answer.value == 32 || answer.value == three + two) { a32.muted = false; a32.play() }
        else if (answer.value == 33 || answer.value == three + three) { a33.muted = false; a33.play() }
        else if (answer.value == 34 || answer.value == three + four) { a34.muted = false; a34.play() }
        else if (answer.value == 35 || answer.value == three + five) { a35.muted = false; a35.play() }
        else if (answer.value == 36 || answer.value == three + six) { a36.muted = false; a36.play() }
        else if (answer.value == 37 || answer.value == three + seven) { a37.muted = false; a37.play() }
        else if (answer.value == 38 || answer.value == three + eight) { a38.muted = false; a38.play() }
        else if (answer.value == 39 || answer.value == three + nine) { a39.muted = false; a39.play() }
        else if (answer.value == 40 || answer.value == four + zero) { a40.muted = false; a40.play() }
        else if (answer.value == 41 || answer.value == four + one) { a41.muted = false; a41.play() }
        else if (answer.value == 42 || answer.value == four + two) { a42.muted = false; a42.play() }
        else if (answer.value == 43 || answer.value == four + three) { a43.muted = false; a43.play() }
        else if (answer.value == 44 || answer.value == four + four) { a44.muted = false; a44.play() }
        else if (answer.value == 45 || answer.value == four + five) { a45.muted = false; a45.play() }
        else if (answer.value == 46 || answer.value == four + six) { a46.muted = false; a46.play() }
        else if (answer.value == 47 || answer.value == four + seven) { a47.muted = false; a47.play() }
        else if (answer.value == 48 || answer.value == four + eight) { a48.muted = false; a48.play() }
        else if (answer.value == 49 || answer.value == four + nine) { a49.muted = false; a49.play() }
        else if (answer.value == 50 || answer.value == five + zero) { a50.muted = false; a50.play() }
        else if (answer.value == 51 || answer.value == five + one) { a51.muted = false; a51.play() }
        else if (answer.value == 52 || answer.value == five + two) { a52.muted = false; a52.play() }
        else if (answer.value == 53 || answer.value == five + three) { a53.muted = false; a53.play() }
        else if (answer.value == 54 || answer.value == five + four) { a54.muted = false; a54.play() }
        else if (answer.value == 55 || answer.value == five + five) { a55.muted = false; a55.play() }
        else if (answer.value == 56 || answer.value == five + six) { a56.muted = false; a56.play() }
        else if (answer.value == 57 || answer.value == five + seven) { a57.muted = false; a57.play() }
        else if (answer.value == 58 || answer.value == five + eight) { a58.muted = false; a58.play() }
        else if (answer.value == 59 || answer.value == five + nine) { a59.muted = false; a59.play() }
        else if (answer.value == 60 || answer.value == six + zero) { a60.muted = false; a60.play() }
        else if (answer.value == 61 || answer.value == six + one) { a61.muted = false; a61.play() }
        else if (answer.value == 62 || answer.value == six + two) { a62.muted = false; a62.play() }
        else if (answer.value == 63 || answer.value == six + three) { a63.muted = false; a63.play() }
        else if (answer.value == 64 || answer.value == six + four) { a64.muted = false; a64.play() }
        else if (answer.value == 65 || answer.value == six + five) { a65.muted = false; a65.play() }
        else if (answer.value == 66 || answer.value == six + six) { a66.muted = false; a66.play() }
        else if (answer.value == 67 || answer.value == six + seven) { a67.muted = false; a67.play() }
        else if (answer.value == 68 || answer.value == six + eight) { a68.muted = false; a68.play() }
        else if (answer.value == 69 || answer.value == six + nine) { a69.muted = false; a69.play() }
        else if (answer.value == 70 || answer.value == seven + zero) { a70.muted = false; a70.play() }
        else if (answer.value == 71 || answer.value == seven + one) { a71.muted = false; a71.play() }
        else if (answer.value == 72 || answer.value == seven + two) { a72.muted = false; a72.play() }
        else if (answer.value == 73 || answer.value == seven + three) { a73.muted = false; a73.play() }
        else if (answer.value == 74 || answer.value == seven + four) { a74.muted = false; a74.play() }
        else if (answer.value == 75 || answer.value == seven + five) { a75.muted = false; a75.play() }
        else if (answer.value == 76 || answer.value == seven + six) { a76.muted = false; a76.play() }
        else if (answer.value == 77 || answer.value == seven + seven) { a77.muted = false; a77.play() }
        else if (answer.value == 78 || answer.value == seven + eight) { a78.muted = false; a78.play() }
        else if (answer.value == 79 || answer.value == seven + nine) { a79.muted = false; a79.play() }
        else if (answer.value == 80 || answer.value == eight + zero) { a80.muted = false; a80.play() }
        else if (answer.value == 81 || answer.value == eight + one) { a81.muted = false; a81.play() }
        else if (answer.value == 82 || answer.value == eight + two) { a82.muted = false; a82.play() }
        else if (answer.value == 83 || answer.value == eight + three) { a83.muted = false; a83.play() }
        else if (answer.value == 84 || answer.value == eight + four) { a84.muted = false; a84.play() }
        else if (answer.value == 85 || answer.value == eight + five) { a85.muted = false; a85.play() }
        else if (answer.value == 86 || answer.value == eight + six) { a86.muted = false; a86.play() }
        else if (answer.value == 87 || answer.value == eight + seven) { a87.muted = false; a87.play() }
        else if (answer.value == 88 || answer.value == eight + eight) { a88.muted = false; a88.play() }
        else if (answer.value == 89 || answer.value == eight + nine) { a89.muted = false; a89.play() }
        else if (answer.value == 90 || answer.value == nine + zero) { a90.muted = false; a90.play() }
        else if (answer.value == 91 || answer.value == nine + one) { a91.muted = false; a91.play() }
        else if (answer.value == 92 || answer.value == nine + two) { a92.muted = false; a92.play() }
        else if (answer.value == 93 || answer.value == nine + three) { a93.muted = false; a93.play() }
        else if (answer.value == 94 || answer.value == nine + four) { a94.muted = false; a94.play() }
        else if (answer.value == 95 || answer.value == nine + five) { a95.muted = false; a95.play() }
        else if (answer.value == 96 || answer.value == nine + six) { a96.muted = false; a96.play() }
        else if (answer.value == 97 || answer.value == nine + seven) { a97.muted = false; a97.play() }
        else if (answer.value == 98 || answer.value == nine + eight) { a98.muted = false; a98.play() }
        else if (answer.value == 99 || answer.value == nine + nine) { a99.muted = false; a99.play() }
        else if (answer.value == 100 || answer.value == one + zero + zero) { a100.muted = false; a100.play() }
        else if (answer.value != '') { awrong.muted = false; awrong.play() }
    }
};
function count_errors_function() {
    if (sound.checked == true) {
        for (let c = 0; c < 133; c++) {
            audio[c].muted = true;
        };
        setTimeout(function () {
            errors_a.muted = false;
            errors_a.play();
        }, 1000);
        setTimeout(function () {
            if (count_errors == 0 || count_errors == zero) { a0.muted = false; a0.play() }
            else if (count_errors == 1 || count_errors == one) { a1.muted = false; a1.play() }
            else if (count_errors == 2 || count_errors == two) { a2.muted = false; a2.play() }
            else if (count_errors == 3 || count_errors == three) { a3.muted = false; a3.play() }
            else if (count_errors == 4 || count_errors == four) { a4.muted = false; a4.play() }
            else if (count_errors == 5 || count_errors == five) { a5.muted = false; a5.play() }
            else if (count_errors == 6 || count_errors == six) { a6.muted = false; a6.play() }
            else if (count_errors == 7 || count_errors == seven) { a7.muted = false; a7.play() }
            else if (count_errors == 8 || count_errors == eight) { a8.muted = false; a8.play() }
            else if (count_errors == 9 || count_errors == nine) { a9.muted = false; a9.play() }
            else if (count_errors == 10 || count_errors == one + zero) { a10.muted = false; a10.play() }
            else if (count_errors == 11 || count_errors == one + one) { a11.muted = false; a11.play() }
            else if (count_errors == 12 || count_errors == one + two) { a12.muted = false; a12.play() }
            else if (count_errors == 13 || count_errors == one + three) { a13.muted = false; a13.play() }
            else if (count_errors == 14 || count_errors == one + four) { a14.muted = false; a14.play() }
            else if (count_errors == 15 || count_errors == one + five) { a15.muted = false; a15.play() }
            else if (count_errors == 16 || count_errors == one + six) { a16.muted = false; a16.play() }
            else if (count_errors == 17 || count_errors == one + seven) { a17.muted = false; a17.play() }
            else if (count_errors == 18 || count_errors == one + eight) { a18.muted = false; a18.play() }
            else if (count_errors == 19 || count_errors == one + nine) { a19.muted = false; a19.play() }
            else if (count_errors == 20 || count_errors == two + zero) { a20.muted = false; a20.play() }
            else if (count_errors == 21 || count_errors == two + one) { a21.muted = false; a21.play() }
            else if (count_errors == 22 || count_errors == two + two) { a22.muted = false; a22.play() }
            else if (count_errors == 23 || count_errors == two + three) { a23.muted = false; a23.play() }
            else if (count_errors == 24 || count_errors == two + four) { a24.muted = false; a24.play() }
            else if (count_errors == 25 || count_errors == two + five) { a25.muted = false; a25.play() }
            else if (count_errors == 26 || count_errors == two + six) { a26.muted = false; a26.play() }
            else if (count_errors == 27 || count_errors == two + seven) { a27.muted = false; a27.play() }
            else if (count_errors == 28 || count_errors == two + eight) { a28.muted = false; a28.play() }
            else if (count_errors == 29 || count_errors == two + nine) { a29.muted = false; a29.play() }
            else if (count_errors == 30 || count_errors == three + zero) { a30.muted = false; a30.play() }
            else if (count_errors == 31 || count_errors == three + one) { a31.muted = false; a31.play() }
            else if (count_errors == 32 || count_errors == three + two) { a32.muted = false; a32.play() }
            else if (count_errors == 33 || count_errors == three + three) { a33.muted = false; a33.play() }
            else if (count_errors == 34 || count_errors == three + four) { a34.muted = false; a34.play() }
            else if (count_errors == 35 || count_errors == three + five) { a35.muted = false; a35.play() }
            else if (count_errors == 36 || count_errors == three + six) { a36.muted = false; a36.play() }
            else if (count_errors == 37 || count_errors == three + seven) { a37.muted = false; a37.play() }
            else if (count_errors == 38 || count_errors == three + eight) { a38.muted = false; a38.play() }
            else if (count_errors == 39 || count_errors == three + nine) { a39.muted = false; a39.play() }
            else if (count_errors == 40 || count_errors == four + zero) { a40.muted = false; a40.play() }
            else if (count_errors == 41 || count_errors == four + one) { a41.muted = false; a41.play() }
            else if (count_errors == 42 || count_errors == four + two) { a42.muted = false; a42.play() }
            else if (count_errors == 43 || count_errors == four + three) { a43.muted = false; a43.play() }
            else if (count_errors == 44 || count_errors == four + four) { a44.muted = false; a44.play() }
            else if (count_errors == 45 || count_errors == four + five) { a45.muted = false; a45.play() }
            else if (count_errors == 46 || count_errors == four + six) { a46.muted = false; a46.play() }
            else if (count_errors == 47 || count_errors == four + seven) { a47.muted = false; a47.play() }
            else if (count_errors == 48 || count_errors == four + eight) { a48.muted = false; a48.play() }
            else if (count_errors == 49 || count_errors == four + nine) { a49.muted = false; a49.play() }
            else if (count_errors == 50 || count_errors == five + zero) { a50.muted = false; a50.play() }
            else if (count_errors == 51 || count_errors == five + one) { a51.muted = false; a51.play() }
            else if (count_errors == 52 || count_errors == five + two) { a52.muted = false; a52.play() }
            else if (count_errors == 53 || count_errors == five + three) { a53.muted = false; a53.play() }
            else if (count_errors == 54 || count_errors == five + four) { a54.muted = false; a54.play() }
            else if (count_errors == 55 || count_errors == five + five) { a55.muted = false; a55.play() }
            else if (count_errors == 56 || count_errors == five + six) { a56.muted = false; a56.play() }
            else if (count_errors == 57 || count_errors == five + seven) { a57.muted = false; a57.play() }
            else if (count_errors == 58 || count_errors == five + eight) { a58.muted = false; a58.play() }
            else if (count_errors == 59 || count_errors == five + nine) { a59.muted = false; a59.play() }
            else if (count_errors == 60 || count_errors == six + zero) { a60.muted = false; a60.play() }
            else if (count_errors == 61 || count_errors == six + one) { a61.muted = false; a61.play() }
            else if (count_errors == 62 || count_errors == six + two) { a62.muted = false; a62.play() }
            else if (count_errors == 63 || count_errors == six + three) { a63.muted = false; a63.play() }
            else if (count_errors == 64 || count_errors == six + four) { a64.muted = false; a64.play() }
            else if (count_errors == 65 || count_errors == six + five) { a65.muted = false; a65.play() }
            else if (count_errors == 66 || count_errors == six + six) { a66.muted = false; a66.play() }
            else if (count_errors == 67 || count_errors == six + seven) { a67.muted = false; a67.play() }
            else if (count_errors == 68 || count_errors == six + eight) { a68.muted = false; a68.play() }
            else if (count_errors == 69 || count_errors == six + nine) { a69.muted = false; a69.play() }
            else if (count_errors == 70 || count_errors == seven + zero) { a70.muted = false; a70.play() }
            else if (count_errors == 71 || count_errors == seven + one) { a71.muted = false; a71.play() }
            else if (count_errors == 72 || count_errors == seven + two) { a72.muted = false; a72.play() }
            else if (count_errors == 73 || count_errors == seven + three) { a73.muted = false; a73.play() }
            else if (count_errors == 74 || count_errors == seven + four) { a74.muted = false; a74.play() }
            else if (count_errors == 75 || count_errors == seven + five) { a75.muted = false; a75.play() }
            else if (count_errors == 76 || count_errors == seven + six) { a76.muted = false; a76.play() }
            else if (count_errors == 77 || count_errors == seven + seven) { a77.muted = false; a77.play() }
            else if (count_errors == 78 || count_errors == seven + eight) { a78.muted = false; a78.play() }
            else if (count_errors == 79 || count_errors == seven + nine) { a79.muted = false; a79.play() }
            else if (count_errors == 80 || count_errors == eight + zero) { a80.muted = false; a80.play() }
            else if (count_errors == 81 || count_errors == eight + one) { a81.muted = false; a81.play() }
            else if (count_errors == 82 || count_errors == eight + two) { a82.muted = false; a82.play() }
            else if (count_errors == 83 || count_errors == eight + three) { a83.muted = false; a83.play() }
            else if (count_errors == 84 || count_errors == eight + four) { a84.muted = false; a84.play() }
            else if (count_errors == 85 || count_errors == eight + five) { a85.muted = false; a85.play() }
            else if (count_errors == 86 || count_errors == eight + six) { a86.muted = false; a86.play() }
            else if (count_errors == 87 || count_errors == eight + seven) { a87.muted = false; a87.play() }
            else if (count_errors == 88 || count_errors == eight + eight) { a88.muted = false; a88.play() }
            else if (count_errors == 89 || count_errors == eight + nine) { a89.muted = false; a89.play() }
            else if (count_errors == 90 || count_errors == nine + zero) { a90.muted = false; a90.play() }
            else if (count_errors == 91 || count_errors == nine + one) { a91.muted = false; a91.play() }
            else if (count_errors == 92 || count_errors == nine + two) { a92.muted = false; a92.play() }
            else if (count_errors == 93 || count_errors == nine + three) { a93.muted = false; a93.play() }
            else if (count_errors == 94 || count_errors == nine + four) { a94.muted = false; a94.play() }
            else if (count_errors == 95 || count_errors == nine + five) { a95.muted = false; a95.play() }
            else if (count_errors == 96 || count_errors == nine + six) { a96.muted = false; a96.play() }
            else if (count_errors == 97 || count_errors == nine + seven) { a97.muted = false; a97.play() }
            else if (count_errors == 98 || count_errors == nine + eight) { a98.muted = false; a98.play() }
            else if (count_errors == 99 || count_errors == nine + nine) { a99.muted = false; a99.play() }
            else if (count_errors == 100 || count_errors == one + zero + zero) { a100.muted = false; a100.play() }
        }, 2500);
    }
}
//___________ tune songs ___________
var on_tune = 0;
var songs = document.getElementsByClassName('songs');
var tune = document.getElementById('tune');

tune.onclick = function () {

    song1.load();
    song2.load();
    song3.load();
    volume.onchange();
    if (volume.value == 0) {
        song3.volume = 0.3; song1.volume = 0.1; song2.volume = 0.05;
    }
    else { song1.volume = song2.volume = song3.volume = volume.value / 100; }
    if (on_tune == 0) {
        song2.load();
        song3.load();
        song1.muted = false;
        song1.play();
        on_tune = 1;
        tune.style.borderBottom = "3px solid rgb(70, 70, 170)";
        song_number.innerHTML = '1';
    }
    else if (on_tune == 1) {
        song1.muted = song3.muted = true;
        song2.muted = false;;
        song1.load();
        song2.load();
        song3.load();
        song2.play();
        on_tune = 2;
        song_number.innerHTML = '2';
        song2.style.visibility = 'visibile';
    }
    else if (on_tune == 2) {
        song1.muted = true;
        song2.muted = true;
        song3.muted = false;
        song1.load();
        song2.load();
        song3.load();
        song3.play();
        on_tune = 3;
        song_number.innerHTML = '3';
    }
    else if (on_tune == 3) {
        song1.muted = song2.muted = song3.muted = false;
        song1.load();
        song2.load();
        song3.load();
        on_tune = 4;
        song_number.innerHTML = 'All';
        song1.play();
        song1.onended = function () {
            song2.play();
        }
        song2.onended = function () {
            song3.play();
        }
        song3.onended = function () {
            song1.play();
        }
    }

    else {
        song1.muted = song2.muted = song3.muted = true;
        song1.load();
        song2.load();
        song3.load();
        on_tune = 0;
        tune.style.borderBottom = "none";
        song_number.innerHTML = '';

    }
}
song1.onended = function () {
    song1.play();
}
song2.onended = function () {
    song2.play();
}
song3.onended = function () {
    song3.play();
}
volume.onchange = volume.oninput = function () {
    song1.volume = song2.volume = song3.volume = volume.value / 100;
    color_container.ondblclick = 'none';
}
//___________ effects _________________
var on_effects = 0;
var effects = document.getElementById('effects');
// tune.style.opacity = 0;
effects.onclick = function () {
    if (on_effects == 0) {
        on_effects = 1;
        effects.style.borderBottom = "3px solid crimson";
        localStorage.on_effects = 1;
    }
    else {
        on_effects = 0;
        effects.style.borderBottom = "none";
        localStorage.on_effects = 0;
    }
};
if (localStorage.on_effects == 1) { effects.onclick() };

// ____________________________ scroll on load ______________________________________
setTimeout(function () {
    window.scroll({ left: 0, top: 0, behavior: "smooth" });
}, 800);
//______________________ speed show ___________________________

setTimeout(function () {
    speed_level.onmouseover();
}, 500);
setTimeout(function () {
    move.onmouseleave();
}, 2000);

//_//////////////////////////////////////////________________________________

if (page == 'd') { division_arabic.onclick() };
if (page == 'g') { general_arabic.onclick() };
if (page == 'm') { multiple_arabic.onclick() };
if (page == 'home') { home_arabic.onclick(); };
if (page == 'help') { help_arabic.onclick() };
//________________________________________________________________________________
//_________________ Home Page_________@@____________________________________________________

//_______________ scroll to scrollY ________________________________
if (localStorage.scroll_math != null) {
    window.scroll({ left: 150, top: localStorage.scroll_math, behavior: "auto" });
}
else {
    window.scroll(0, 0)
}

window.onscroll = function () {
    localStorage.scroll_math = scrollY;
}

//__________________ scroll __________________
var for_who = document.getElementById('for_who');
var how = document.getElementById('how');
var multipication = document.getElementById('multipication');
var division = document.getElementById('division');
var general_tests = document.getElementById('general_tests');

var for_who_p = document.getElementById('for_who_p');
var how_p = document.getElementById('how_p');
var multipication_p = document.getElementById('multipication_p');
var division_p = document.getElementById('division_p');
var general_tests_p = document.getElementById('general_tests_p');

var for_who_p_a = document.getElementById('for_who_p_a');
var how_p_a = document.getElementById('how_p_a');
var multipication_p_a = document.getElementById('multipication_p_a');
var division_p_a = document.getElementById('division_p_a');
var general_tests_p_a = document.getElementById('general_tests_p_a');
var end_p_a = document.getElementById('end_p_a');


for_who_p_a.onclick = function () {
    location.href = '#for_who_p';
    setTimeout(function () {
        for_who_p.style.wordSpacing = '2px';
    }, 400)
    setTimeout(function () {
        for_who_p.style.wordSpacing = '0px';
    }, 1000)
}

how_p_a.onclick = function () {
    location.href = '#how_p';
    setTimeout(function () {
        how_p.style.wordSpacing = '2px';
    }, 400)
    setTimeout(function () {
        how_p.style.wordSpacing = '0px';
    }, 1000)
    location.href = '#how_p';
}

multipication_p_a.onclick = function () {
    location.href = '#multipication_p';
    setTimeout(function () {
        multipication_p.style.wordSpacing = '2px';
    }, 400)
    setTimeout(function () {
        multipication_p.style.wordSpacing = '0px';
    }, 1000)
}

division_p_a.onclick = function () {
    location.href = '#division_p';
    setTimeout(function () {
        division_p.style.wordSpacing = '2px';
    }, 400)
    setTimeout(function () {
        division_p.style.wordSpacing = '0px';
    }, 1400)
}

general_tests_p_a.onclick = function () {
    location.href = '#general_tests_p';
    setTimeout(function () {
        general_tests_p.style.wordSpacing = '2px';
    }, 400)
    setTimeout(function () {
        general_tests_p.style.wordSpacing = '0px';
    }, 1400)
}

end_p_a.onclick = function () {
    location.href = '#end_p';
    setTimeout(function () {
        end_p.style.wordSpacing = '2px';
    }, 400)
    setTimeout(function () {
        end_p.style.wordSpacing = '0px';
    }, 1400)
}
for_who_p.onclick = how_p.onclick = multipication_p.onclick = division_p.onclick = general_tests_p.onclick = end_p.onclick = function () {
    window.scroll({ left: 500, top: 0, behavior: "smooth" });

}

//_____________________ smooth scrollBehavior _________________
var myhtml = document.getElementsByTagName('html')[0];
setTimeout(function () {
    myhtml.style.scrollBehavior = "smooth";
}, 500);

//_____________________________load window
window.onload = function () {
    document.body.style.visibility = 'visible';
    document.body.style.display = 'block';

    setTimeout(() => {
        if (localStorage.alert != 1) {
            alert("You can change the background color to any color you like by double-clicking on the title.");
            localStorage.alert = 1;
        }
    }, 3000);

}
//_____________________________ up ________________________________________
var up = document.getElementById('up');
window.onscroll = function () {
    if (scrollY >= 400) {
        up.style.display = 'block';
    }
    else {
        up.style.display = 'none';
    };
}
up.onclick = function () {
    console.log('popoppo')
    window.scroll({
        right: 0,
        top: 0,
        behavior: "smooth"
    });
}