$(document).ready(function() {
    //click add, trigger event 'add-record'
    $('#add_record').on('add-record', function(event) {
        event.preventDefault();

        //take out the value of input
        var date = $('#date').val();
        console.log(date);
        var start_place = $('#start_place').val();
        var end_place = $('#end_place').val();
        var time = $('#time').val();
        var distance = "";
        var speed = "";
        var calories = ""; 

        var record = {
            data: date,
            start_place: start_place,
            end_place: end_place,
            time: time,
            distance: distance,
            speed: speed,
            calories: calories
        }

        $.ajax({
            //post 'POST' require to the server, route is /record
            type: 'POST',
            url: '/record',
            data: record,
            success: function(data) {
                //do something with the data via front-end
                //if success, reload the page
                location.reload();
            }
        });
        return false;
    })
})