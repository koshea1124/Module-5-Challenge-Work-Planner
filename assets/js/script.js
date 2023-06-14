var dateElement = $('#currentDay');
var timeElement = $('#currentTime')

$(function () {

  function dateAndTime () {
    var dateDisplay = dayjs().format('dddd, MMMM D, YYYY');
    dateElement.text(dateDisplay);
    var timeDisplay = dayjs().format('hh:mm:ss A');
    timeElement.text(timeDisplay);
  };

  function hourlyColor () {
    var currentHour = dayjs().format('H');
    $('.time-block').each(function() {
      var hourColor = parseInt($(this).attr('id'));
      if (currentHour > hourColor) {
        $(this).addClass('future');
      } else if (currentHour == hourColor) {
        $(this).addClass('present');
      } else {
        $(this).addClass('past');
      }
    });
  };

    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
   
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    
    dateAndTime();
    hourlyColor();
    setInterval(dateAndTime,1000);
  });