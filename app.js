let tg = window.Telegram.WebApp;

let item = '';

let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let btn4 = document.getElementById('btn4');
let btn5 = document.getElementById('btn5');
let btn6 = document.getElementById('btn6');
let btn7 = document.getElementById('btn7');
let btn8 = document.getElementById('btn8');


btn1.addEventListener('click', function(){
    
    tg.PopupParams.title('Уведомление вызвано!');

});

btn2.addEventListener('click', function(){
    
    tg.PopupButtons.type.default('Разрешение');

});

btn3.addEventListener('click', function(){
    
    tg.notificationOccurred(success);

});

btn4.addEventListener('click', function(){
    
    tg.MainButton.hide();

});

btn5.addEventListener('click', function(){
    
    tg.MainButton.show();

});

btn6.addEventListener('click', function(){
    
    tg.expand();

});

btn7.addEventListener('click', function(){
    
    tg.BackButton.show();

});

btn8.addEventListener('click', function(){
    
    tg.BackButton.hide();

});





Telegram.WebApp.onEvent('MainButtonClicked', function(){
    tg.sendData(item);
});

