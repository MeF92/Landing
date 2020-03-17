'use strict';

let toggles = document.querySelectorAll('.toggle');
let img1 = document.querySelector('.macbook img:first-child');
let img2 = document.querySelector('.macbook img:nth-child(2)');
let img3 = document.querySelector('.macbook img:last-child');

let onToggleClick = function(evt) {
    evt.preventDefault();
    evt.target.style.borderColor = '#59bfe6';
};

toggles[0].addEventListener('click', function (evt) {
    onToggleClick(evt);
    toggles[1].style.borderColor = '#e4e5e5';
    toggles[2].style.borderColor = '#e4e5e5';
   img1.classList.remove('hidden');
   img2.classList.add('hidden');
   img3.classList.add('hidden');
});

toggles[1].addEventListener('click', function (evt) {
    onToggleClick(evt);
    toggles[0].style.borderColor = '#e4e5e5';
    toggles[2].style.borderColor = '#e4e5e5';
    img1.classList.add('hidden');
    img2.classList.remove('hidden');
    img3.classList.add('hidden');
});

toggles[2].addEventListener('click', function (evt) {
    onToggleClick(evt);
    toggles[0].style.borderColor = '#e4e5e5';
    toggles[1].style.borderColor = '#e4e5e5';
    img1.classList.add('hidden');
    img2.classList.add('hidden');
    img3.classList.remove('hidden');
});