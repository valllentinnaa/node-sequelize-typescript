import { Sequelize } from 'sequelize-typescript'
import User from "./user.model";

const sequelize = new Sequelize({
    database: 'test',
    dialect: 'postgres',
    username: 'postgres',
    password: '',
    storage: ':memory:',
    port: 5432,
    models: [__dirname + '/models'],
})

sequelize.addModels([User])