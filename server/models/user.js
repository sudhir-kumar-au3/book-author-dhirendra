module.exports = (sequelize, datatype) => {
  const UserModel = sequelize.define(
    "user",
    {
      id: {
        type: datatype.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        defaultValue: 1,
        allowNull: false,
      },
      name: {
        type: datatype.STRING,
        defaultValue: "Sam",
        allowNull: false,
      },
    },
    {}
  );
  return UserModel;
};
