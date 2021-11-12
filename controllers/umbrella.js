var umbrella = require('../models/umbrella'); 
 
// List of all umbrella 
exports.umbrella_list = async function(req, res) { 
    try{ 
        theumbrellas = await umbrella.find(); 
        res.send(theumbrellas); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }    
}; 

// VIEWS
// Handle a show all view
exports.umbrella_view_all_Page = async function (req, res) {
    try {
        theumbrellas = await umbrella.find();
        res.render("umbrella", {
        title: "umbrella Search Results",
        results: theumbrellas,
      });
    } catch (err) {
      res.status(500);
      res.send(`{"error": ${err}}`);
    }
  };
  

 
// for a specific umbrella. 
exports.umbrella_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: umbrella detail: ' + req.params.id); 
}; 
 

 
// Handle umbrella delete form on DELETE. 
exports.umbrella_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: umbrella delete DELETE ' + req.params.id); 
}; 
 

// Handle Costume update form on PUT. 
exports.umbrella_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await umbrella.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.umbrella_type)  
               toUpdate.umbrella_type = req.body.umbrella_type; 
        if(req.body.cost) toUpdate.cost = req.body.cost; 
        if(req.body.color) toUpdate.color = req.body.color; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
}; 

// Handle umbrella create on POST. 
exports.umbrella_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new umbrella(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"umbrella_type":"fan umbrella", "color":"blue", "cost":23} 
    document.umbrella_type = req.body.umbrella_type; 
    document.color = req.body.color; 
    document.cost = req.body.cost; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

// for a specific umbrella. 
exports.umbrella_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await umbrella.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 