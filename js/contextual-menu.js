$(document).ready(function() {
    $('.att-cpw-des').hide();
    $('.calc-des').hide();
    $('.login-form-des').hide();
    $('.show-hide-des').hide();

    $('#cm').hover(function() {
        $('.att-cpw-des').hide();
        $('.calc-des').hide();
        $('.login-form-des').hide();
        $('.show-hide-des').hide();
    });

    $('#att-cpw-cm').hover(function(event) {
        $('.att-cpw-des').show();
        $('.calc-des').hide();
        $('.login-form-des').hide();
        $('.show-hide-des').hide();

        $('#att-cpw-cm').addClass('hover');
    }, function() {
        $('#att-cpw-cm').removeClass('hover');
    });
    
    $('#calc-cm').hover(function(event) {
        $('.calc-des').show();
        $('.att-cpw-des').hide();
        $('.login-form-des').hide();
        $('.show-hide-des').hide();

        $('#calc-cm').addClass('hover');
    }, function() {
        $('#calc-cm').removeClass('hover');
    });
    
    $('#login-form-cm').hover(function(event) {
        $('.login-form-des').show();
        $('.calc-des').hide();
        $('.att-cpw-des').hide();
        $('.show-hide-des').hide();

        $('#login-form-cm').addClass('hover');
    }, function() {
        $('#login-form-cm').removeClass('hover');
    });

    $('#show-hide-cm').hover(function(event) {
        $('.show-hide-des').show();
        $('.calc-des').hide();
        $('.att-cpw-des').hide();
        $('.login-form-des').hide();

        $('#show-hide-cm').addClass('hover');
    }, function() {
        $('#show-hide-cm').removeClass('hover');
    });
});
