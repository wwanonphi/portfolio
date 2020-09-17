      $(document).ready(function () {
      $("#btnlogout").click(function () { 
        window.location.replace("index.html");
       });
         $(".card").click(function(){
             var id= $(this).attr("id");
             if(id=="patientbtn"){
                window.location.replace("records/records.html");
             }
             if(id=="schedulebtn"){
                window.location.replace("schedules/sched.html");
            }
            if(id=="roomstbtn"){
                window.location.replace("rooms/rooms.html");
            }
            if(id=="dashboardbtn"){
                window.location.replace("dashboard/dashboard.html");
            }
         });
     });
 