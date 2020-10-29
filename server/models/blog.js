const { User } = require("../database/config");
module.exports = (sequelize, datatype) => {
  const BlogModel = sequelize.define(
    "blog",
    {
      blogId: {
        type: datatype.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      title: {
        type: datatype.STRING,
        allowNull: false,
      },
      userId: {
        type: datatype.INTEGER,
        references: {
          model: User,
          key: "id",
        },
        allowNull: false,
      },
    },
    {}
  );
  return BlogModel;
};
