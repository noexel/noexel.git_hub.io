document.querySelector('#nav_liquid').onclick = sort_liquid;
document.querySelector('#nav_pod').onclick = sort_pod;


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


