window.addEventListener('DOMContentLoaded',function() {

    "use strict";
    
    var tabs = document.querySelectorAll('.info-header-tab'),//"кнопки" табуляции
        info = document.querySelector('.info-header'),//блок для делегирования
        tabContent = document.querySelectorAll('.info-tabcontent');//таба

//ф-я для скрытия всех таб начиная с указаного изначально номера
    function hideTabContent(a){
        for (var i = a; i < tabs.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');            
        }
    }
    hideTabContent(1);
//ф-я для показа табы по её индексу
    function showTabContent(b){
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }
//следующая ф-я скрыват все табы и открывает только ту, которая соответствует условиям
    info.addEventListener('click', function(e){
        var target = e.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (var index = 0; index < tabs.length; index++) {
                if (target == tabs[index]) {
                    hideTabContent(0);
                    showTabContent(index); 
                }               
            }
        }
    });

});

var deadLine = '2020-01-01'; // может приходить с сервера

function getTimeRemaining(endTime){
    var time = Date.parse(endTime)-Date.parse(new Date()),
        seconds = Math.floor((time/1000) % 60),
        minutes = Math.floor((time/1000/60) % 60),
        hours = Math.floor((time/(1000*60*60)));
}
