$(document).ready(function() {
    $.getJSON('data.json', function(data) {
        $.each(data, function(key, val) {
        $('#user-table tbody').append('<tr><td>' + val.name + '<td><td>' + val.age + '<td><td>' + val.id + '<td><td>'+val.Department+'<td><td>'+val.Address);
    });
});
});