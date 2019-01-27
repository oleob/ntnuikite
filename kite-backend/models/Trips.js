import mongoose, { Schema } from 'mongoose';

const Trip = new Schema({
  title: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  },
  activeDate: {
    type: Date,
    required: true
  },
  visible: {
    type: Boolean,
    required: true
  },
});

export default mongoose.model('Trip', Trip);
