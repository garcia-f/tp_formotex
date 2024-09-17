import { Request, Response } from "express";
import categoryService from "../services/category.service";
import { Category } from "../interfaces/category.interface";

class CategoryController {

    constructor() {}

    public async getCategories(_req: Request, res: Response) {
        try {
            const categories = await categoryService.getCategories();
            if (!categories || !categories.length) {
                return res.status(404).json({ message: "No hay categorias" });
            }
            res.status(200).json(categories);
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: "Error interno del servidor" });
        }   
    }

    public async createCategory(req: Request, res: Response) {
        try {
            const data: Category = req.body;
            const category = await categoryService.createCategory(data);
            if (!category) {
                return res.status(500).send({
                    status: 500,
                    message: 'No se ha podido crear la categoria!'
                });
            }
            res.status(201).json(category);
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: "Error interno del servidor" });
        }    
    }

    public async updateCategory(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const data: Category = req.body;
            const category = await categoryService.updateCategory(parseInt(id), data);
            if (!category) {
                return res.status(500).send({
                    status: 500,
                    message: 'No se ha podido actualizar la categoria!'
                });
            }
            res.status(201).json(category);
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: "Error interno del servidor" });
        }    
    }

    public async deleteCategory(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const category = await categoryService.deleteCategory(parseInt(id));
            if (!category) {
                return res.status(500).json({ message: "No se ha podido eliminar la categoría" });
            }
            res.status(200).json({ message: "La categoría ha sido eliminada" });
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: "Error interno del servidor" });
        }  
    }

}

export default new CategoryController()