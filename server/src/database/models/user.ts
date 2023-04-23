"use strict";

const bcrypt = require("bcryptjs");
import { Model } from "sequelize";

function hashPassword(user, options) {
  const SALT_FACTOR = 8;

  if (!user.changed("password")) {
    return;
  }
  return bcrypt
    .genSalt(SALT_FACTOR)
    .then((salt) => bcrypt.hash(user.password, salt, null))
    .then((hash) => {
      user.setDataValue("password", hash);
    });
}

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      email: {
        type: DataTypes.STRING,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
      },
    },
    {
      hooks: {
        beforeSave: hashPassword,
      },
    }
  );

  return User;
};
interface UserAttributes {
  email: string;
  password: string;
}
module.exports = (sequelize: any, DataTypes: any) => {
  class User extends Model<UserAttributes> implements UserAttributes {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    email: string;
    password: string;

    static associate(models: any) {
      // define association here
      User.hasMany(models.Collection);
    }

    static hooks() {
      User.addHook("beforeSave", (user, options) => {
        hashPassword(user, options);
      });
    }

    comparePassword(password) {
      return bcrypt.compareSync(password, this.password);
    }
  }
  User.init(
    {
      email: {
        type: DataTypes.STRING,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
      },
    },

    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
