// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$('#calculateButton').click(function () {
    var hours = $('#hours').val();
    if (hours > 0) {
        var hourlyRate = 30; // Assuming hourly rate is $30
        var total = hours * hourlyRate;
        $('#total').val('$' + total.toFixed(2));
    } else {
        alert('Please enter a valid number of hours.');
    }
});
