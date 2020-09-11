
$(document).ready(function () {
    $("#project,#about,#contact").addClass("d-none");
    $("a").click(function () {
        var id = $(this).attr("id");
        if (id == "btnprojects") {
            $("#home,#about,#contact").addClass("d-none");
            $("#project").removeClass("d-none");
        }
        if (id == "btnabout") {
            $("#home,#project,#contact").addClass("d-none");
            $("#about").removeClass("d-none");
        }
        if (id == "btncontact") {
            $("#home,#about,#project").addClass("d-none");
            $("#contact").removeClass("d-none");
        }


    });
    $("#btnhome").click(function(){
        $("#contact,#about,#project").addClass("d-none");
        $("#home").removeClass("d-none");
    });
});