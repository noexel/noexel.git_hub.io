let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = 'FFFFFF';
tg.MainButton.color = '#1676E7';

tg.MainButton.show();
tg.MainButton.setText('Добро пожаловать!');

let usercard = document.getElementById('usercard');

let p = document.createElement('p');

p.innerText = `${tg.initDataUnsafe.user.first_name} ${tg.initDataUnsafe.user.last_name}`;

usercard.appendChild(p);
