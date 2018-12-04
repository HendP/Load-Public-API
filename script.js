$("#get").click(function() {
    $.getJSON('https://api.opendota.com/api/heroes', function(result){
        $.each(result, function(index, item){
            $("#output").append( 
            "<table id='dota'>"+
            "<tr>" +
            "<td class='id'>" + item.id + "</td>" +
            "<td class='name'>" + item.name + "</td>" +
            "<td class='local'>" + item.localized_name + "</td>" +
            "<td class='primary'>" + item.primary_attr + "</td>" +
            "<td class='att'>" + item.attack_type + "</td>" +
            "</tr>" + 
            "</table>"
            );
        });
    });
});