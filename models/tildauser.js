'use strict';
module.exports = (sequelize, DataTypes) => {
  const TildaUser = sequelize.define('TildaUser', {
    email: DataTypes.STRING
  }, {});
  TildaUser.associate = function(models) {
    // associations can be defined here
  };
  return TildaUser;
};