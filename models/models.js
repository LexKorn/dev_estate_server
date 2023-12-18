const sequelize = require('../db');
const {DataTypes, Model} = require('sequelize');

class Flat extends Model {};

Flat.init(
    {
        id: {type: DataTypes.BIGINT, primaryKey: true, allowNull: false},
        date: {type: DataTypes.STRING, allowNull: false},
        time: {type: DataTypes.STRING, allowNull: false},
        geo_lat: {type: DataTypes.DOUBLE, allowNull: false},
        geo_lon: {type: DataTypes.DOUBLE, allowNull: false},
        region: {type: DataTypes.BIGINT, allowNull: false},
        building_type: {type: DataTypes.BIGINT, allowNull: false},
        object_type: {type: DataTypes.BIGINT, allowNull: false},
        level: {type: DataTypes.BIGINT, allowNull: false},
        levels: {type: DataTypes.BIGINT, allowNull: false},
        rooms: {type: DataTypes.BIGINT, allowNull: false},
        area: {type: DataTypes.DOUBLE, allowNull: false},
        kitchen_area: {type: DataTypes.DOUBLE, allowNull: false},
        price: {type: DataTypes.BIGINT, allowNull: false}
    },
    {
        sequelize,
        modelName: 'flat'
    }
);

module.exports = {Flat};