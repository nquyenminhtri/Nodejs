'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Products', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: {
                type: Sequelize.STRING,
                notNull: false,
            },
            description: {
                type: Sequelize.TEXT,

            },

            price: {
                type: Sequelize.DECIMAL,
                notNull: false,
            },
            image_url: {
                type: Sequelize.STRING
            },
            category: {
                type: Sequelize.STRING
            },
            origin: {
                type: Sequelize.STRING
            },
            availability: {
                type: Sequelize.BOOLEAN,
                defaultValue: true
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Products');
    }
};