const express = require("express");
const CustomerControllers = require("../http/controllers/CustomerControllers");
const router = express.Router();

router.get('/selectCustomers', async (req, res) => {
    CustomerControllers.getAllCustomers(req, res);
})
router.post('/selectCustomerById', async (req, res) => {
    CustomerControllers.getCustomerById(req, res);
})
router.post('/insertCustomer', async (req, res) => {
    CustomerControllers.insertCustomer(req, res);
})
router.put('/updateCustomer', async (req, res) => {
    CustomerControllers.updateCustomer(req, res);
})
router.delete('/deleteCustomer', async (req, res) => {
    CustomerControllers.deleteCustomer(req, res);
})

module.exports = router;