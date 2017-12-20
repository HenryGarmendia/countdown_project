$(document).ready(function() {
    $('.my_countdown').countdown({
        until: $.countdown.UTCDate(
            -6, 2018, 0, 19, 0, 0, 0 
        )
    });
});