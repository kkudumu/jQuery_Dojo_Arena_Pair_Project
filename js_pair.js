$(document).ready(function() {
    $('.btn1').mouseenter(function() {
        $('.wrapper').css("background-image", 'url(' + "images/beach.jpg" + ')');
    });
    $('.btn2').mouseenter(function() {
        $('.wrapper').css("background-image", 'url(' + "images/earth.jpg" + ')');
    });
    $('.btn3').mouseenter(function() {
        $('.wrapper').css("background-image", 'url(' + "images/dojo.jpg" + ')');
    });
    $('.btn4').mouseenter(function() {
        $('.wrapper').css("background-image", 'url(' + "images/forest.jpg" + ')');
    });
    $('.btn5').mouseenter(function() {
        $('.wrapper').css("background-image", 'url(' + "images/matrix.jpg" + ')');
    });
    $('.btn6').mouseenter(function() {
        $('.wrapper').css("background-image", 'url(' + "images/snow.jpg" + ')');
    });
    $('.btn1').click(function() {
        $('.wrapper').css("background-image", 'url(' + "images/beach.jpg" + ')');
        $('.wrapper div').removeClass("center_box");
        $('.wrapper div:first').addClass("hidden");
        $('.wrapper div:nth-child(2)').removeClass("hidden");
        $('.show').addClass("center_box");
    });
    $('.btn2').click(function() {
        $('.wrapper').css("background-image", 'url(' + "images/earth.jpg" + ')');
        $('.wrapper div').removeClass("center_box");
        $('.wrapper div:first').addClass("hidden");
        $('.wrapper div:nth-child(2)').removeClass("hidden");
        $('.show').addClass("center_box");
    });
    $('.btn3').click(function() {
        $('.wrapper').css("background-image", 'url(' + "images/dojo.jpg" + ')');
        $('.wrapper div').removeClass("center_box");
        $('.wrapper div:first').addClass("hidden");
        $('.wrapper div:nth-child(2)').removeClass("hidden");
        $('.show').addClass("center_box");
    });
    $('.btn4').click(function() {
        $('.wrapper').css("background-image", 'url(' + "images/forest.jpg" + ')');
        $('.wrapper div').removeClass("center_box");
        $('.wrapper div:first').addClass("hidden");
        $('.wrapper div:nth-child(2)').removeClass("hidden");
        $('.show').addClass("center_box");
    });
    $('.btn5').click(function() {
        $('.wrapper').css("background-image", 'url(' + "images/matrix.jpg" + ')');
        $('.wrapper div').removeClass("center_box");
        $('.wrapper div:first').addClass("hidden");
        $('.wrapper div:nth-child(2)').removeClass("hidden");
        $('.show').addClass("center_box");
    });
    $('.btn6').click(function() {
        $('.wrapper').css("background-image", 'url(' + "images/snow.jpg" + ')');
        $('.wrapper div').removeClass("center_box");
        $('.wrapper div:first').addClass("hidden");
        $('.wrapper div:nth-child(2)').removeClass("hidden");
        $('.show').addClass("center_box");
    });

    $(".player1").change(function() {
        $(".left_player").css("background-image", "url('" + $(this).val() + "')");
    });
    $(".player2").change(function() {
        $(".right_player").css("background-image", "url('" + $(this).val() + "')");

    });

});