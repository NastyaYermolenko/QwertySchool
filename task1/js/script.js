$(document).ready(function(){
    var paragraphsInContenet = $('.content p');
    $('#deleteP').on("click touch", function () {
        $('.content p').last().remove();
    });

    $('#user_fontsize').bind("keyup mouseup", function () {
        var fontSizeValue = $(this).val();
        if (fontSizeValue >= 8 && fontSizeValue <= 24){
            paragraphsInContenet.css("font-size", fontSizeValue + 'px');
        }

    });
    
    $('#user_background').on('input', function () {
        paragraphsInContenet.css("background-color", $(this).val());
    });

    $('#user_fontfamily').bind('change', function () {
        paragraphsInContenet.css('font-family', $(this).val());
    });
});