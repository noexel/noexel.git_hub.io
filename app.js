let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = 'FFFFFF';
tg.MainButtonc.color = '#1676E7';

tg.MainButton.show();
tg.MainButton.setText('Добро пожаловать!');

let usercard = document.getElementById('usercard');

let p = document.createElement('p');

p.innerText = `${tg.initDataUnsafe.first_name} ${tg.initDataUnsafe.last_name}`;

usercard.appendChild(p);
