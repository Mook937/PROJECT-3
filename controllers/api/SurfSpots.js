const SurfSpot = require('../../models/SurfSpot');

module.exports = {
	index,
	create,
	show,
	update,
	delete: deleteOne,
};

async function index(req, res) {
	const surfspots = await SurfSpot.find({});
	res.status(200).json(surfspots);
}

async function create(req, res) {
	const newSurfSpot = await SurfSpot.create(req.body);
	
	res.status(201).json(newSurfSpot);
}

async function show(req, res) {
	const SurfSpot = await SurfSpot.findById(req.params.id);
	res.status(200).json(SurfSpot);
}

async function update(req, res) {
	const updatedSurfSpot = await SurfSpot.findByIdAndUpdate(
		req.params.id,
		req.body,
		{
			new: true,
		}
	);
	res.status(200).json(updatedSurfSpot);
}

async function deleteOne(req, res) {
	// find document by the ID from the collection mapped to the Model and remove that document,
	// return the removed document
	const deletedSurfSpot = await SurfSpot.findByIdAndRemove(req.params.id);
	res.status(200).json(deletedSurfSpot);
}