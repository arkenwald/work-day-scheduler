//let update = dayjs();

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  let hourNow = dayjs().format('H');

  function colorState() {
    $('.time-block').each(function () {
      let hourBlock = parseInt(this.id);
      $(this).toggleClass('past', hourBlock < hourNow);
      $(this).toggleClass('present', hourBlock === hourNow);
      $(this).toggleClass('future', hourBlock > hourNow);
    });
  }

  function changeColor() {
    $('.time-block').each(function () {
      let hourBlock = parseInt(this.id);
      if (hourBlock == hourNow) {
        $(this).removeClass('past future').addClass('present');
      } else if (hourBlock < hourNow) {
        $(this).removeClass('future present').addClass('past');
      } else {
        $(this).removeClass('past present').addClass('future');
    });
  }

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

let timerInterval = setInterval(function () {

  let update = dayjs();
  $('#date').text(update.format('MMMM D, YYYY'));
  $('#time').text(update.format('hh:mm:ss a'))
}, 1000);

