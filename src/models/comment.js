'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    User.init({

        productId: DataTypes.INTEGER,
        customerId: DataTypes.INTEGER,
        price: DataTypes.DECIMAL,
        content: DataTypes.TEXT,

    }, {
        sequelize,
        modelName: 'Customer',
    });
    return User;
};