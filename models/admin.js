module.exports = function (sequelize, DataTypes) {
    var Admin = sequelize.define("Admin", {
      name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
      },
      phone: {
          type: DataTypes.INTEGER,
          allowNull: true
      }
    });
    Admin.associate = function (models) {
        Admin.hasMany(models.Post, {
            onDelete: "cascade"
        })
    };
    return Admin;
  };
  