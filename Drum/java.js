'use strict';

let ki=false;
let Tlogin = 'admin';
let Tpass = '1234';

let login = prompt('Введите логин', '');
let pass = prompt('Введите пароль', '');

if(login==Tlogin && pass==Tpass)
{
    alert('Молодец!');
}   
else {alert('Съебал с сайта')};

