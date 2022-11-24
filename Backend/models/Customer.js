const BaseModel = require("./BaseModel");

class Customer extends BaseModel {
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
                firstName: {
                    type: DataTypes.STRING(255),
                    defaultValue: null
                },
                lastName: {
                    type: DataTypes.STRING(255),
                    defaultValue: null
                },
                userName: {
                    type: DataTypes.STRING(255),
                    defaultValue: null,
                    allowNull: false
                },
                email: {
                    type: DataTypes.STRING(255),
                    defaultValue: null
                },
                phone: {
                    type: DataTypes.STRING(255),
                    defaultValue: null
                },
                dob: {
                    type: DataTypes.STRING,
                    defaultValue: null
                },
                gender: {
                    type: DataTypes.STRING(255),
                    defaultValue: null
                },
                password: {
                    type: DataTypes.STRING(255),
                    defaultValue: null
                },
                confirmPassword: {
                    type: DataTypes.STRING(255),
                    defaultValue: null
                },
                image: {
                    type: DataTypes.STRING(255),
                    defaultValue: null
                }
            },
            {
                modelName: "Customer",
                tableName: "customer",
                underscored: true,
                sequelize,
            }
        );
    }
}

module.exports = Customer;
