$(document).ready(function () {
    $("#img").hide();

    $("#hide").attr("disabled", true);
    $("#hide").click(function () {
        $("#img").hide();
        $("#hide").attr("disabled", true);
        $("#show").attr("disabled", false);
    });
    $("#show").click(function () {
        $("#img").show();
        $("#hide").attr("disabled", false);
        $("#show").attr("disabled", true);
    });
});
