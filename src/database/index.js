import Sequelize from 'sequelize';
import mongoose from "mongoose";

import User from '../app/models/User';
import File from '../app/models/File';
import Appointment from '../app/models/Appointment';

import databaseConfig from '../config/database';

const models = [User, File, Appointment];

class Database {
  constructor() {
    this.init();
    this.mongo();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    models
      .map(model => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      );
  }

  mongo() {
    this.mongoConnection = mongoose.connect(
      "mongodb+srv://mce_user:mce_password@cluster0.cojeu.mongodb.net/mongo_mce",
      {
        useNewUrlParser: true, // Formato novo na string de conexão
        useFindAndModify: true, // Buscar e atualizar os registros
        useUnifiedTopology: true, // resolver DeprecationWarning do console caso apareça
      }
    )
  }
}
export default new Database();