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

        name: DataTypes.STRING,
        description: DataTypes.TEXT,
        price: DataTypes.DECIMAL,
        image_url: DataTypes.STRING,
        category: DataTypes.STRING,
        origin: DataTypes.STRING,
        availability: DataTypes.BOOLEAN,

        role: DataTypes.STRING

    }, {
        sequelize,
        modelName: 'Product',
    });
    return User;
};