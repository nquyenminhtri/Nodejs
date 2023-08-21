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

        code: DataTypes.STRING,
        discount: DataTypes.DECIMAL,
        price: DataTypes.DECIMAL,
        startDate: DataTypes.DATE,
        endDate: DataTypes.DATE,

    }, {
        sequelize,
        modelName: 'Promotion',
    });
    return User;
};