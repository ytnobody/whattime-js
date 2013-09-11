$(function(){
    var whattime = {};
    whattime.types = ['date', 'time', 'datetime'];
    $.each(whattime.types, function(i, type) {
        $('input[whattime:type="'+ type +'"]').each(function(){
        });
    }
});


