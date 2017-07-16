/**
 * Created by Carlos on 7/16/17.
 */
$(document).ready(function(){
    var scroll_start = 0;
    var startchange = $('#startchange');
    var offset = startchange.offset();
    if (startchange.length){
        $(document).scroll(function() {
            scroll_start = $(this).scrollTop();
            if(scroll_start > offset.top) {
                $(".navbar-inverse").css('background-color', '#011963');
            } else {
                $('.navbar-inverse').css('background-color', 'transparent');
            }
        });
    }
});