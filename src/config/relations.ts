import { EquipamientoModel } from "../models/equipamiento.model";
import { MarcaModel } from "../models/marca.model";
import { CategoriaModel } from "../models/categoria.model";

export const associations = () => {
    return new Promise(( resolve, reject ) => {
        try {
            MarcaModel.hasMany(EquipamientoModel, {
                foreignKey: 'brandId',
                sourceKey: 'id',
            })
            EquipamientoModel.belongsTo(MarcaModel, {
                foreignKey: 'brandId',
                targetKey: 'id',
                as: 'brand'
            })
            
            CategoriaModel.hasMany(EquipamientoModel, {
                foreignKey: 'categoryId',
                sourceKey: 'id',
            })
            EquipamientoModel.belongsTo(CategoriaModel, {
                foreignKey: 'categoryId',
                targetKey: 'id',
                as: 'category'
            })
            resolve({ message: "Relaciones establecidas" });
        } catch (err) {
            console.error(err);
            reject(err);
        }
    })
}