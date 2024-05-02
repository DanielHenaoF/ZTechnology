import { DataTypes } from "sequelize";
import db from "../db/connection";

const User = db.define("Users", {
  document: {
    type: DataTypes.STRING,
  },
  name_user: {
    type: DataTypes.STRING,
  },
  last_name: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  cellphone: {
    type: DataTypes.STRING,
  },
  address: {
    type: DataTypes.STRING,
  },
  password_user: {
    type: DataTypes.STRING,
  },
  id_state: {
    type: DataTypes.BIGINT,
  },
  id_rol: {
    type: DataTypes.BIGINT,
  },
});

export default User;
