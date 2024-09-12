import { Model, DataTypes } from 'sequelize';
import { Categoria } from '../interfaces/categoria.interface';
import db from '../config/db';

class CategoriaModel extends Model<Categoria> implements Categoria {
    public id!: number
    public name!: string
}

CategoriaModel.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING
    }
}, { sequelize: db, tableName: 'categorias' })

export { CategoriaModel }