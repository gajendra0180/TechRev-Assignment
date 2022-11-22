const BaseModel = require("./BaseModel");

class Address extends BaseModel {
    static init(sequelize, DataTypes) {
        return super.init(
            {
                id: {
                    type: DataTypes.INTEGER(11).UNSIGNED,
                    autoIncrement: true,
                    primaryKey: true
                },
                uuid: {
                    type: DataTypes.UUID,
                    defaultValue: DataTypes.UUIDV4,
                },
                customerId: {
                    type: DataTypes.STRING(255),
                    defaultValue: null
                },
                address: {
                    type: DataTypes.STRING(255),
                    defaultValue: null
                },
                landmark: {
                    type: DataTypes.STRING(255),
                    defaultValue: null
                },
                city: {
                    type: DataTypes.STRING(255),
                    defaultValue: null
                },
                state: {
                    type: DataTypes.STRING(255),
                    defaultValue: null
                },
                country: {
                    type: DataTypes.STRING(255),
                    defaultValue: null
                },
                zipCode: {
                    type: DataTypes.STRING(255),
                    defaultValue: null
                }
            },
            {
                modelName: "Address",
                tableName: "address",
                underscored: true,
                sequelize,
            }
        );
    }
}

module.exports = Address;
