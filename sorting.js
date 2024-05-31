document.querySelector('#nav_liquid').onclick = sort_liquid;
document.querySelector('#nav_pod').onclick = sort_pod;
document.querySelector('#nav_hqd').onclick = sort_hqd;

let tg = window.Telegram.WebApp;

tg.expand()

let elems = document.querySelectorAll('.card');


function sort_liquid() {
    for (let elem of elems) {
        elem.classList.remove('hidden')
        if (elem.getAttribute('data-type') != 'liquid') {
            elem.classList.add('hidden')
        }

    }
}


function sort_pod() {
    for (let elem of elems) {
        elem.classList.remove('hidden')
        if (elem.getAttribute('data-type') != 'pod') {
            elem.classList.add('hidden')
        }

    }
}

function sort_hqd() {
    for (let elem of elems) {
        elem.classList.remove('hidden')
        if (elem.getAttribute('data-type') != 'hqd') {
            elem.classList.add('hidden')
        }

    }
}



document.querySelector('#elastic').oninput = function(){
    let val = this.value.trim();
    let elasticItems = document.querySelectorAll('#items .card');
    if (val != ''){
        elasticItems.forEach(function(elem){
            if (elem.innerText.search(RegExp(val,"gi")) == -1) {
                elem.classList.add('hidden');
            }
            else {
                elem.classList.remove('hidden');
            }
        });
    }
    else {
        elasticItems.forEach(function(elem) {
                elem.classList.remove('hidden');
        });

    }
}

