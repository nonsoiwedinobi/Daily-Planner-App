// Display the current day in the element with the ID 'currentDay'
$(document).ready(function() {
    var currentDate = dayjs().format("dddd, MMMM D[th]");
    $("#currentDay").text(currentDate);

    // Save appointment details to local storage on saveBtn click
    $(".saveBtn").on("click", function () {
      let appointmentDetail = $(this).siblings(".description").val()
      let appointmentHour = $(this).parent().attr("id");
      console.log("appointmentDetail = ", appointmentDetail)
      console.log("appointmentHour = ", appointmentHour)
      localStorage.setItem(appointmentHour, appointmentDetail);
    })

    // Restore from local storage and update DOM on page reload
    $("#9 .description").val(localStorage.getItem("9"));
    $("#10 .description").val(localStorage.getItem("10"));
    $("#11 .description").val(localStorage.getItem("11"));
    $("#12 .description").val(localStorage.getItem("12"));
    $("#13 .description").val(localStorage.getItem("13"));
    $("#14 .description").val(localStorage.getItem("14"));
    $("#15 .description").val(localStorage.getItem("15"));
    $("#16 .description").val(localStorage.getItem("16"));
    $("#17 .description").val(localStorage.getItem("17"));

    // Repaint appointment
  function repaintAppointmentBlocks(){
    let recentHour = dayjs().hour();
    console.log("recentHour = ", recentHour);
    $(".time-block").each(function() {
      let appointmentHour = parseInt($(this).attr("id"));
      
      if (appointmentHour < recentHour){
        $(this).addClass("past");
        console.log("past, appointmentHour = ", appointmentHour);
      } else if (appointmentHour === recentHour){
        console.log("present, appointmentHour = ", appointmentHour);
        $(this).removeClass("past");
        $(this).addClass("present");
        
      } else {
        console.log("future, appointmentHour = ", appointmentHour);
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
        
      } 
    })
  }

  repaintAppointmentBlocks();
  });

  