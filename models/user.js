'use strict';
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        email: DataTypes.STRING,
        username: DataTypes.STRING,
        password: DataTypes.STRING,
        isActive: DataTypes.BOOLEAN
    }, {});
    User.associate = function (models) {
        // associations can be defined here
    };
    return User;
};