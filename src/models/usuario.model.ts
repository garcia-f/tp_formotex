import { Model, DataTypes } from 'sequelize';
import  db  from '../config/db';
import { Usuario } from '../interfaces/usuario.interface';

class UsuarioModel extends Model<Usuario> implements Usuario {
    public id!: number;
    public name!: string;
    public email!: string;
    public password!: string;
    public role!: 'user' | 'admin';
    public state!: boolean
}

UsuarioModel.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.INTEGER
    },
    role: {
        type: DataTypes.ENUM('user', 'admin')
    },
    state: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
}, { sequelize: db, tableName: 'usuarios' })

export { UsuarioModel }