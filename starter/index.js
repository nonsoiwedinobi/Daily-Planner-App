// Display the current day in the element with the ID 'currentDay'
$(document).ready(function() {
    var currentDate = dayjs().format("dddd, MMMM D[th]");
    $("#currentDay").text(currentDate);

    $(".saveBtn").on("click", function () {
      let appointmentDetail = $(this).siblings(".description").val()
      let appointmentHour = $(this).parent().attr("id");
      console.log("appointmentDetail = ", appointmentDetail)
      console.log("appointmentHour = ", appointmentHour)
      localStorage.setItem(appointmentHour, appointmentDetail);
    })
  });

  