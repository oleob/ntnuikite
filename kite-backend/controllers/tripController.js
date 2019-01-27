import Trip from '../models/Trips';

const create = (req, res) => {
  const trip = new Trip(req.body);
  trip.save((err, result) => {
    console.log(err)
    if (err) return res.status(500).json({ message: 'Error creating event' });
    return res.json({ trip: result });
  });
};

const find = (req, res) => {
  const id = req.query.id;
  Trip.findById(id, (err, result) => {
    {
      if (err) return res.status(500).json({ message: 'Error finding event' });
      if (result === null) {
        return res.status(404).json({ message: 'no event found' });
      }
      return res.json({ trip: trip });
    }
  });
};

const findVisible = (req, res) => {
  Trip.find({ endDate:{$gte:new Date()}, visible: true }, (err, result) => {
    if (err) return res.status(500).json({ message: 'Error finding active events' });
    return res.json({ trips: result });
  });
};


export default { create, find, findVisible };
