const models = require('../../models')
const bcrypt = require('bcryptjs')
module.exports = {
    async getAllCustomers(req, res) {
        try {
            const custData = await models.Customer.findAll({ raw: true });
            console.log(custData)
            res.send({ code: 200, message: 'All Customer List', data: custData })
        }
        catch (err) {
            res.send({ code: 500, message: err.message })
        }
    },
    async getCustomerById(req, res) {
        try {
            const customerId = req.body.customerId;
            const custData = await models.Customer.findOne({ where: { customerId: customerId }, raw: true });
            console.log(custData);
            res.send({ code: 200, message: 'Customer Details', data: custData })
        }
        catch (err) {
            res.send({ code: 500, message: err.message })
        }
    },
    async insertCustomer(req, res) {
        try {
            const custData = req.body;
            bcrypt.hash(custData.password, 10, async function (err, hash) {
                if (err) throw err;
                const createdRecord = await models.Customer.create({
                    "firstName": custData.firstName,
                    "lastName": custData.lastName,
                    "userName": custData.userName,
                    "email": custData.email,
                    "phone": custData.phone,
                    "dob": custData.dob,
                    "gender": custData.gender,
                    "password": hash,
                    "confirmPassword": hash,
                })
                await models.Address.create({
                    "customerId": createdRecord.dataValues.id,
                    "address": custData.address,
                    "landmark": custData.landmark,
                    "city": custData.city,
                    "state": custData.state,
                    "country": custData.country,
                    "zipCode": custData.zipCode
                })
                res.send({ code: 201, message: "User Created Successfully", data: req.body });
            });
        }
        catch (err) {
            res.send({ code: 500, message: err.message })
        }
    },
    async updateCustomer(req, res) {
        try {
            // from the frontend we will send uuid of the customer and the updated data
            const custData = req.body;
            const userExists = await models.Customer.findOne({
                where: {
                    uuid: custData.customerUUID
                },
                raw: true
            })
            if (userExists) {
                let updatedObj = {}, updatedAddressObject = {}
                let customerFields = ['firstName', 'lastName', 'userName', 'email', 'phone', 'dob', 'gender']
                let addressFields = ['address', 'landmark', 'city', 'state', 'country', 'zipCode']
                customerFields.map((item) => {
                    if (custData[item]) {
                        updatedObj[item] = custData[item]
                    }
                })
                addressFields.map((item) => {
                    if (custData[item]) {
                        updatedAddressObject[item] = custData[item]
                    }
                })
                await models.Customer.update(updatedObj, {
                    where: {
                        uuid: custData.customerUUID
                    }
                })
                await models.Address.update(updatedAddressObject, {
                    where: {
                        customerId: userExists.id
                    }
                })
                res.send({ code: 200, message: "User Updated Successfully", data: req.body });
            }
            else
                throw { message: "User doesn't exist" }
        }
        catch (err) {
            res.send({ code: 500, message: err.message })
        }
    },
    async deleteCustomer(req, res) {
        try {
            // from the frontend we will send uuid of the customer which we want to delete
            const custData = req.body;
            const userExists = await models.Customer.findOne({
                where: {
                    uuid: custData.customerUUID
                },
                raw: true
            })
            if (userExists) {
                await models.Customer.destroy({
                    where: {
                        uuid: custData.customerUUID
                    }
                })
                await models.Address.destroy({
                    where: {
                        customerId: userExists.id
                    }
                })
                res.send({ code: 200, message: "User Deleted Successfully" });
            }
            else
                throw { message: "User doesn't exist" }
        }
        catch (err) {
            res.send({ code: 500, message: err.message })
        }
    },

}