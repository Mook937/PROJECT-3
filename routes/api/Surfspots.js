const express = require('express');
const router = express.Router();
const surfspotsCtrl = require('../../controllers/api/SurfSpots');

/* GET /api/surfspots */
router.get('/', surfspotsCtrl.index);
router.post('/', surfspotsCtrl.create);
router.get('/:id', surfspotsCtrl.show);
router.put('/:id', surfspotsCtrl.update);
router.delete('/:id', surfspotsCtrl.delete)

module.exports = router;
