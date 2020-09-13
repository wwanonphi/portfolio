
$(document).ready(function () {
  var slidedabout;

  slidedabout = $(".about2").slideUp(1);
    $("#btnhome,#btnProject").click(function () {
        var id = $(this).attr("id");
        if (id == "btnhome") {
         
            $(".about").slideDown(500);
            $(".about2").slideUp(600); 
        
            
        }
        if (id == "btnProject") {
            $(".about").slideUp(500); 
            $(".about2").slideDown(500);
        }

    });
});