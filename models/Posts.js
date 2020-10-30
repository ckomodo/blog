module.exports = function (sequelize, DataTypes){
    var Posts  = sequelize.define("Post", {
        title: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
          },
          article: {
            type: DataTypes.TEXT,
            allowNull: false
          },
    });
    Posts.associate = function (models){
    Posts.belongsTo(models.Admin);
    };
    return Posts;
    }