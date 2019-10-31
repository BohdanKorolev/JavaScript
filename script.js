window.addEventListener('DOMContentLoaded',function() {

    "use strict";
    
    let tabs = document.querySelectorAll('.info-header-tab'),//"кнопки" табуляции
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

    var deadLine = "2019-10-28"; // может приходить с сервера
    
    function getTimeRemaining(endTime){
        var total = Date.parse(endTime) - Date.parse(new Date()),
            seconds = Math.floor((total/1000) % 60),
            minutes = Math.floor((total/1000/60) % 60),
            hours = Math.floor((total/(1000*60*60)));
        return {
            'total' : total,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds
        };
    }

    function setClock(id, endTime){
        var timer = document.getElementById(id),
            hours = timer.querySelector(".hours"),
            minutes = timer.querySelector(".minutes"),
            seconds = timer.querySelector(".seconds"),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock(){
            var t = getTimeRemaining(endTime);
            hours.textContent = t.hours;
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock('timer', deadLine);


    //Modal

    let more = document.querySelector(".more"),
        overlay = document.querySelector(".overlay"),
        close = document.querySelector(".popup-close");
    
    more.addEventListener('click',function(){
        overlay.style.display = "block";
        this.classList.add('more-splash');
        document.body.style.overflow = "hidden";
    });

    close.addEventListener("click", function(){
        overlay.style.display = "none";
        more.classList.remove('more-splash');
        document.body.style.overflow = "";
    });
});

