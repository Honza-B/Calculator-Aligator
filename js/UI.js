$(document).ready(function() {
    $( '.calc-container .row > div > div' ).mouseup(function() {
        $( this ).removeClass('pressed');
    }).mousedown(function() {
        $( this ).addClass('pressed');
    });
})
