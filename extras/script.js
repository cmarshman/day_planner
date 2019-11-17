$(document).ready(function(){
    var dateElement = document.querySelector("#currentDay");
    var date = new Date ();
    date = moment().format('LL');
    dateElement.textContent = date;
    var dateColor = moment().format('h A')
    console.log(dateColor)
    
    function colorChange(){
        if (times[i]>dateColor) {
        $('description').addClass('future');
        } else if (times[i]===dateColor){
        $('description').addClass('present');
        }
        // else (time[i]<dateColor) {
        // $('description')
        // }
    
    }
    
    
    var times = ["5am","6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm", "9pm",];
    var container = $(".container");
    buildOut();
    
    getLocalStorage();

    function buildOut (){ 
    $.each(times, function(value){
        var newContainer = $('<div>').addClass('row');
        var newColumn = $('<div>' + value + '</div>').addClass('col-sm-1 hour time');
        var newColumn2 = $('<div></div>').addClass('col-sm-10 description');
        var newColumn3 = $('<button></button>').addClass('col-sm-1 saveBtn');
        var textareas = $('<textarea></textarea>').addClass('col-sm-12 input');
        var icon = $('<i class="far fa-save fa-3x" style="margin: auto; padding: 10px;"></i>');
        newContainer.append($newColumn);
        newContainer.append($newColumn2);
        newColumn2.append(textareas);
        newContainer.append($newColumn3);
        newColumn3.append(icon);
        container.append($newContainer);
    });
    colorChange()
    
    }
    var time = $(this).siblings('div.time').text();
    var input = $(this).siblings('div.description').children('textarea').val();

    $('.saveBtn').click(function(){
        console.log(time)
        localStorage.setItem(time, JSON.stringify(input));
    })
    
    function getLocalStorage(){
        time.textContent = localStorage.getItem(input);
        // var storedAnswers = JSON.parse(localStorage.getItem("times"))
        // if (storedAnswers !== null) {
        //     times = storedAnswers;
        // }
    }
    
    
    
    
    
    
    
    })
    
    

