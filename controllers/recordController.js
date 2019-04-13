var data = [
    {
        date: '2019.04.12',
        start_place: 'start place',
        end_place: 'end_place',
        time: '30 mins',
        distance: '1 km',
        speed: '0.5 km/h',
        calories: '500 k'
    },
    {
        date: '2019.04.12',
        start_place: 'start place',
        end_place: 'end place',
        time: '30 mins',
        distance: '1 km',
        speed: '0.5 km/h',
        calories: '500 k'
    }
]


module.exports = function(app) {
    //request the list
    app.get('/record', function(req, res) {
        //rend record.ejs
        //put the data inthe 'records', take the records out in the views
        res.render('record', {records: data});
    });

    //add record
    app.post('/record', function(req, res) {

    });
}