var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var umbrella_controller = require('../controllers/umbrella'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/resource', api_controller.api); 
 
/// COSTUME ROUTES /// 
 
// POST request for creating a Costume.  
router.post('/resource/umbrellas', umbrella_controller.umbrella_create_post); 
 
// DELETE request to delete Costume. 
router.delete('/resource/umbrellas/:id', umbrella_controller.umbrella_delete); 
 
// PUT request to update Costume. 
router.put('/resource/umbrellas/:id', 
umbrella_controller.umbrella_update_put); 
 
// GET request for one Costume. 
router.get('/resource/umbrellas/:id', umbrella_controller.umbrella_detail); 
 
// GET request for list of all Costume items. 
router.get('/resource/umbrellas', umbrella_controller.umbrella_list); 
 
module.exports = router; 