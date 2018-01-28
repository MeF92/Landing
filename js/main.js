'use strict';

var toggles = document.querySelectorAll('.toggle');
var img1 = document.querySelector('.macbook img:first-child');
var img2 = document.querySelector('.macbook img:nth-child(2)');
var img3 = document.querySelector('.macbook img:last-child');

var onToggleClick = function(evt) {
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