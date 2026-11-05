'use strict';
const names = ['John', 'Paul', 'Jones'];
const ul = document.getElementById("target");

for (let i = 0; i < names.length; i++) {
    ul.innerHTML += `<li>${names[i]}</li>`;
};