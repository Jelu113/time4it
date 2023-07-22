
$(document).ready(function () {
  //gets the current day in the format provided in the example
    var currentDate = dayjs().format('dddd  MMMM D, YYYY');
    $('#currentDay').text(currentDate);
  
  //getting classes based on time and applying classes.
    var now = dayjs().format("H");
    for (var i = 9; i <= 17; i++) {
      var id = $(`#${i}`)
      if (now < i) id.addClass("future")
  
      if (now == i) id.addClass("present")
  
      if (now > i) id.addClass("past")
    }
  
    for (var i = 9; i <= 17; i++) {
      var item = localStorage.getItem(i);
      if (item) {
        $(`#${i}`).children(".description").val(item);
      }
    }
  });
  
  $(function () {
    $('.saveBtn').on('click', function() {
      var time = $(this).parent().attr('id')
      var input = $(this).siblings(".description").val()
      localStorage.setItem(time, input);
    });
  });
  
  //on save button click, local storage 
  // $(function () {
  // $('.saveBtn').on('click', function() {
  
  //   var time = $(this).parent().attr('id')
  //   var input = $(this).siblings(".description").val()
  //   localStorage.setItem(time, input);
  // })
  //  localStorage.getItem(9).val
  //  localStorage.getItem(10)
  //  localStorage.getItem(11)
  //  localStorage.getItem(12)
  //  localStorage.getItem(13)
  //  localStorage.getItem(14)
  //  localStorage.getItem(15)
  //  localStorage.getItem(16)
  //  localStorage.getItem(17)
   
  // });
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.