import { Model, DataTypes } from 'sequelize';
import db from '../config/db';
import { Equipamiento } from '../interfaces/equipamiento.interface';

class EquipamientoModel extends Model<Equipamiento> implements Equipamiento {
    public id!: number;
    public model!: string;
    public serial!: string;
    public stock!: number;
}

EquipamientoModel.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    model: {
        type: DataTypes.STRING
    },
    serial: {
        type: DataTypes.STRING
    },
    stock: {
        type: DataTypes.INTEGER
    }
}, { sequelize: db, tableName: 'equipamientos' })

export { EquipamientoModel }