// Display the current day in the element with the ID 'currentDay'
$(document).ready(function() {
    var currentDate = dayjs().format("dddd, MMMM D[th]");
    $("#currentDay").text(currentDate);

  });

  