$(document).ready(function(){
    var dateElement = document.querySelector("#currentDay");
    var date = new Date ();
    date = moment().format('LL');
    dateElement.textContent = date;
    var dateColor = moment().format('H');
    console.log(dateColor);
    
    // function colorChange(){
    // for (var i; i < times.length; i++) {
    //     if (times[i]>dateColor) {
    //     $('description').addClass('future');
    //     } else if (times[i]===dateColor){
    //     $('description').addClass('present');
    //     } else (tims[i]<dateColor) {
    //     $('description')
    //     }
    // }
    // }
    
    
    var times = ["5am","6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm", "9pm",];
    var $container = $(".container");
    buildOut()
    
    function buildOut (){ 
    $.each(times, function(index, value){
        console.log(index)
        var $newContainer = $('<div>').addClass('row');
        var $newColumn = $('<div>' + value + '</div>').addClass('col-sm-1 hour time');
        var $newColumn2 = $('<div></div>').addClass('col-sm-10 description past');
        var $newColumn3 = $('<button></button>').addClass('col-sm-1 saveBtn');
        var textareas = $('<textarea data-index="' + index + '"></textarea>').addClass('col-sm-12 input');
        var icon = $('<i class="far fa-save fa-3x" style="margin: auto; padding: 10px;"></i>');
        $newContainer.append($newColumn);
        $newContainer.append($newColumn2);
        $newColumn2.append(textareas);
        $newContainer.append($newColumn3);
        $newColumn3.append(icon);
        $container.append($newContainer);
        // colorChange()
    })
    
    }
    
    $('.saveBtn').click(function(){
        var time = $(this).siblings('div.time').text();
        console.log(time)
        var input = $(this).siblings('div.description').children('textarea').val();
        localStorage.setItem(time, JSON.stringify(input));
    })
    
    function getLocalStorage(){
        $('[data-index="0"]').text(JSON.parse(localStorage.getItem("5am")));
        $('[data-index="1"]').text(JSON.parse(localStorage.getItem("6am")));
        $('[data-index="2"]').text(JSON.parse(localStorage.getItem("7am")));
        $('[data-index="3"]').text(JSON.parse(localStorage.getItem("8am")));
        $('[data-index="4"]').text(JSON.parse(localStorage.getItem("9am")));
        $('[data-index="5"]').text(JSON.parse(localStorage.getItem("10am")));
        $('[data-index="6"]').text(JSON.parse(localStorage.getItem("11am")));
        $('[data-index="7"]').text(JSON.parse(localStorage.getItem("12pm")));
        $('[data-index="8"]').text(JSON.parse(localStorage.getItem("1pm")));
        $('[data-index="9"]').text(JSON.parse(localStorage.getItem("2pm")));
        $('[data-index="10"]').text(JSON.parse(localStorage.getItem("3pm")));
        $('[data-index="11"]').text(JSON.parse(localStorage.getItem("4pm")));
        $('[data-index="12"]').text(JSON.parse(localStorage.getItem("5pm")));
        $('[data-index="13"]').text(JSON.parse(localStorage.getItem("6pm")));
        $('[data-index="14"]').text(JSON.parse(localStorage.getItem("7pm")));
        $('[data-index="15"]').text(JSON.parse(localStorage.getItem("8pm")));
        $('[data-index="16"]').text(JSON.parse(localStorage.getItem("9pm")));
    }
    getLocalStorage();
    
    
    
    
    
    
    })
    
    

