const router = require('express').Router();
const {
    getAllPizza, 
    getPizzaById, 
    createPizza, 
    updatePizza, 
    deletePizza
} = require('../../controllers/pizza-controller');

// Get all and post new
router
    .route('/')
    .get(getAllPizza)
    .post(createPizza);

// Single Pizza Get, Put, Delete
router
    .route('/:id')
    .get(getPizzaById)
    .put(updatePizza)
    .delete(deletePizza);

module.exports = router; 