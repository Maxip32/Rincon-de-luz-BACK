const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define(
        'event',
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                allowNull: true,
                primaryKey: true,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            description: {
                type: DataTypes.TEXT,
                allowNull: true,
            },
            date: {
                type: DataTypes.DATEONLY,
                allowNull: true,
            },
            start: {
                type: DataTypes.TIME,
                allowNull: true,
            },
            end: {
                type: DataTypes.TIME,
                allowNull: true,
            },
            price: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            quotas: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            image: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            state: {
                type: DataTypes.BOOLEAN,
                defaultValue: true,
            },
            address: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            city: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            genre: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            disabled: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
            },
        },

        {
            timestamps: false,
        }
    );
};
