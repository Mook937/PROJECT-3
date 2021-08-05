var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SurfSpotSchema = new Schema(
	{
		name: { type: String, required: true },
		difficulty: { type: String, default: 0 },
		age: { type: String},
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model('SurfSpot', SurfSpotSchema);
