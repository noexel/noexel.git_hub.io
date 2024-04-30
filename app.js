let tg = window.Telegram.WebApp;

tg.expand();

let usercard = document.getElementById('usercard');

let p = document.createElement('p');

p.innerText = `${tg.initDataUnsafe.user.first_name} ${tg.initDataUnsafe.user.last_name}`;

usercard.appendChild(p);
