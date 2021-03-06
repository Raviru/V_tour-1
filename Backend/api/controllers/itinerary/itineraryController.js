const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Itinerary } = require('../../data/itinerary/itineraty.model.js');

router.get('/', (req, res) => {
    Itinerary.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Packages :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:traveAgentName', (req, res) => {
    Itinerary.find({ traveAgentName: req.params.traveAgentName }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Itinerary :' + JSON.stringify(err, undefined, 2)); }
    });


});

router.get('/id/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Itinerary.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Itinerary :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/', (req, res) => {
    var itinerary = new Itinerary({
        date_time: req.body.date_time,
        note: req.body.note,
        name: req.body.name,
        traveAgentName: req.body.traveAgentName,
        events: req.body.events,
        clientId: req.body.clientId,
        totalPrice: req.body.totPrice
    });
    itinerary.save(itinerary, (err, doc) => {
        if (err) {
            console.log(err);
            res.json({ state: false, msg: "data not inserted" });
        }
        if (doc) {
            console.log(doc);
            res.json({ state: true, msg: "data  inserted" });
        }
    }
    );
});

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Itinerary.findByIdAndUpdate(req.params.id, {
        $set: {
            date_time: req.body.date_time,
            note: req.body.note,
            name: req.body.name,
            traveAgentName: req.body.traveAgentName,
            events: req.body.events,
            clientId: req.body.clientId,
            totalPrice: req.body.totPrice
        }
    }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Itinerary Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Itinerary.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Itinerary Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;