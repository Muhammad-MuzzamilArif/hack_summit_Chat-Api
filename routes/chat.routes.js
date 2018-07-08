const express = require('express');
const router = express.Router();

const product_controller = require('../controllers/chat.controller');

//The Routing pattern done by controller when a get request is propogated
//router.get('/test',product_controller.test);


//The Routing pattern done by controller when a post request is propagated 





router.post('/create',product_controller.create);

//The Routing pattern done by controller when a get request is propogated
router.get('/:id', product_controller.details);

router.put('/:id/update', product_controller.update);

router.delete('/:id/delete', product_controller.delete);

module.exports = router;