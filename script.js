$(document).ready(function(){
var dateElement = document.querySelector("#currentDay");
var date = new Date ();
date = moment().format('LL');
dateElement.textContent = date;

var times = ["5am","6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm", "9pm",];
var $container = $(".container");
buildOut()

function buildOut (){ 
$.each(times, function(index, value){
    var $newContainer = $('<div>').addClass('row');
    var $newColumn = $('<div>' + value + '</div>').addClass('col-sm-1 hour');
    var $newColumn2 = $('<div></div>').addClass('col-sm-10 past description');
    var $newColumn3 = $('<button></button>').addClass('col-sm-1 saveBtn');
    var textareas = $('<textarea></textarea>').addClass('col-sm-12 input');
    var icon = $('<i class="far fa-save fa-3x" style="margin: auto; padding: 10px;"></i>');
    $newContainer.append($newColumn);
    $newContainer.append($newColumn2);
    $newColumn2.append(textareas);
    $newContainer.append($newColumn3);
    $newColumn3.append(icon);
    $container.append($newContainer);
})
getLocalStorage()
}


$('.saveBtn').click(function(){
    var time = $(this).siblings('div.hour').text();
    var input = $(this).siblings('div.description').children('textarea').val();
    localStorage.setItem(time,input);
})

function getLocalStorage(){
    $('#5am').val(localStorage.getItem('5am'));
}


})


