import { Request, Response } from "express";
import EquipmentService from "../services/equipment.service";
import { Equipment } from "../interfaces/equipment.interface";

class EquipmentController {

    constructor() {}

    public async getEquipments(_req: Request, res: Response) {
        try {
            const equipments = await EquipmentService.getEquipments();
            if (!equipments || !equipments.length) {
                return res.status(404).json({ message: "No hay equipos registrados" });
            }
        res.status(200).json(equipments);
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: "Error interno del servidor" });
        }  
    }

    public async getOneEquipment(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const equipment = await EquipmentService.getOneEquipment(parseInt(id));
            if (!equipment) {
                return res.status(404).json({ message: "No existe el equipo" });
            }
            res.status(200).json(equipment);
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: "Error interno del servidor" });
        }    
    }

    public async createEquipment(req: Request, res: Response) {
        try {
            const data: Equipment = req.body;
            const equipment = await EquipmentService.createEquipment(data);
            if (!equipment) {
                return res.status(500).send({
                    status: 500,
                    message: 'No se ha podido crear el equipo!'
                })
            }
            res.status(201).json(equipment);
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: "Error interno del servidor" });
        }   
    }

    public async updateEquipment(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const data: Equipment = req.body;
            const equipment = await EquipmentService.updateEquipment(parseInt(id), data);
            if (!equipment) {
                return res.status(500).send({
                    status: 500,
                    message: 'No se ha podido actualizar el equipo!'
                })
            }
            res.status(201).json(equipment);
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: "Error interno del servidor" });
        }   
    }
    
}

export default new EquipmentController()