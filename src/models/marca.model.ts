import { Model, DataTypes } from 'sequelize';
import { Marca } from "../interfaces/marca.interface";
import db  from '../config/db';

class MarcaModel extends Model<Marca> implements Marca {
    public id!: number
    public name!: string
}

MarcaModel.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING
    }
}, { sequelize: db, tableName: 'marcas' })

export { MarcaModel }