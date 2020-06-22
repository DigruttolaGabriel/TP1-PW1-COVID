$(document).ready(function() {
    $("#abrir-a").click(function() {
        $("#popup-a").show();
    });

    $("#abrir-b").click(function() {
        $("#popup-b").show();
    });
    $("#abrir-c").click(function() {
        $("#popup-c").show();
    });

    $(".close").click(function() {
        $(".modal").hide();
    });
});