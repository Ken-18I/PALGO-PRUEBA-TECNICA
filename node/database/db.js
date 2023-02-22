import {Sequelize} from 'sequelize'

const db = new Sequelize('database_app', 'root', 'Kenbatu123',{
    host:'localhost',
    dialect: 'mysql'
})

export default db