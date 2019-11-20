$(document).ready(function() {
    var dateElement = document.querySelector("#currentDay");
    var date = new Date();
    date = moment().format('LL');
    dateElement.textContent = date;
    var dateColor = parseInt(moment().format('H'));
    console.log(dateColor);
    function colorChange() {
      for (var i = 0; i < times.length; i++) {
        var currentRow = parseInt(times[i].replace('am', '').replace('pm', ''));
        if (i < 8 ) { // Before noon
          console.log("Before Noon, Comparing " + currentRow + " to " + dateColor);
          if (currentRow > dateColor) {
            $('div[data-index="'+i+'"]').addClass('future');
          } else if (currentRow === dateColor) {
            $('div[data-index="'+i+'"]').addClass('present');
          } else if (currentRow < dateColor) {
            $('div[data-index="'+i+'"]');
          }
        } else { // After noon
          currentRow = 12 + currentRow;
          console.log("After Noon, Comparing " + currentRow + " to " + dateColor);
          if (currentRow > dateColor) {
            $('div[data-index="'+i+'"]').addClass('future');
          } else if (currentRow === dateColor) {
            $('div[data-index="'+i+'"]').addClass('present');
          } else if (currentRow < dateColor) {
            $('div[data-index="'+i+'"]');
          }
        }
      }
    }
    var times = ["5am", "6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm", "9pm", ];
    var $container = $(".container");
    buildOut()
    function buildOut() {
      $.each(times, function(index, value) {
        var $newContainer = $('<div>').addClass('row');
        var $newColumn = $('<div>' + value + '</div>').addClass('col-sm-1 hour time');
        var $newColumn2 = $('<div></div>').addClass('col-sm-10 description past').attr('data-index', index);
        var $newColumn3 = $('<button></button>').addClass('col-sm-1 saveBtn');
        var textareas = $('<textarea data-index="' + index + '"></textarea>').addClass('col-sm-12 input');
        var icon = $('<i class="far fa-save fa-3x" style="margin: auto; padding: 10px;"></i>');
        $newContainer.append($newColumn);
        $newContainer.append($newColumn2);
        $newColumn2.append(textareas);
        $newContainer.append($newColumn3);
        $newColumn3.append(icon);
        $container.append($newContainer);
      })
      colorChange();
    }
    $('.saveBtn').click(function() {
      var time = $(this).siblings('div.time').text();
      console.log(time)
      var input = $(this).siblings('div.description').children('textarea').val();
      localStorage.setItem(time, JSON.stringify(input));
    })
    function getLocalStorage() {
      $('textarea[data-index="0"]').text(JSON.parse(localStorage.getItem("5am")));
      $('textarea[data-index="1"]').text(JSON.parse(localStorage.getItem("6am")));
      $('textarea[data-index="2"]').text(JSON.parse(localStorage.getItem("7am")));
      $('textarea[data-index="3"]').text(JSON.parse(localStorage.getItem("8am")));
      $('textarea[data-index="4"]').text(JSON.parse(localStorage.getItem("9am")));
      $('textarea[data-index="5"]').text(JSON.parse(localStorage.getItem("10am")));
      $('textarea[data-index="6"]').text(JSON.parse(localStorage.getItem("11am")));
      $('textarea[data-index="7"]').text(JSON.parse(localStorage.getItem("12pm")));
      $('textarea[data-index="8"]').text(JSON.parse(localStorage.getItem("1pm")));
      $('textarea[data-index="9"]').text(JSON.parse(localStorage.getItem("2pm")));
      $('textarea[data-index="10"]').text(JSON.parse(localStorage.getItem("3pm")));
      $('textarea[data-index="11"]').text(JSON.parse(localStorage.getItem("4pm")));
      $('textarea[data-index="12"]').text(JSON.parse(localStorage.getItem("5pm")));
      $('textarea[data-index="13"]').text(JSON.parse(localStorage.getItem("6pm")));
      $('textarea[data-index="14"]').text(JSON.parse(localStorage.getItem("7pm")));
      $('textarea[data-index="15"]').text(JSON.parse(localStorage.getItem("8pm")));
      $('textarea[data-index="16"]').text(JSON.parse(localStorage.getItem("9pm")));
    }
    getLocalStorage();
  })