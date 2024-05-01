let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.Color = "#1676E7";
tg.MainButton.setText("Reload Page");
tg.MainButton.show();

tg.MainButton.notificationOccurred('success');



let usercard = document.getElementById('usercard');

let p = document.createElement('p');

p.innerText = `${tg.initDataUnsafe.user.first_name}
${tg.initDataUnsafe.user.last_name}
${tg.initDataUnsafe.user.photo_url}`;

usercard.appendChild(p);
