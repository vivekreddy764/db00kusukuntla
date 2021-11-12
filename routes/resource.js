var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var umbrella_controller = require('../controllers/umbrella'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/resource', api_controller.api); 
 
/// umbrella ROUTES /// 
 
// POST request for creating a umbrella.  
router.post('/resource/umbrellas', umbrella_controller.umbrella_create_post); 
 
// DELETE request to delete umbrella. 
router.delete('/resource/umbrellas/:id', umbrella_controller.umbrella_delete); 
 
// PUT request to update umbrella. 
router.put('/resource/umbrellas/:id', 
umbrella_controller.umbrella_update_put); 
 
// GET request for one umbrella. 
router.get('/resource/umbrellas/:id', umbrella_controller.umbrella_detail); 
// router.get('/umbrellas/:id', umbrella_controller.umbrella_detail);
 
// GET request for list of all umbrella items. 
router.get('/resource/umbrellas', umbrella_controller.umbrella_list); 
 
module.exports = router; 