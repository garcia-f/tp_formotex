import { Request, Response } from "express";
import UsuarioService from "../services/usuario.service";
import { Usuario } from "../interfaces/usuario.interface";

class UsuarioController {

    constructor () {}

    async ctrlGetUsers(_req: Request, res: Response) {
        try {
            const users = await UsuarioService.getUsers();
        
            if (!users || !users.length) {
                return res.status(404).json({ message: "No hay usuarios registrados" });
            }
        
            res.status(200).json(users);
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: "Error interno del servidor" });
        }
    };

    async ctrlGetOneUser(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const user = await UsuarioService.getOneUser(parseInt(id));
        
            if (!user) {
                return res.status(404).json({ message: "No existe el usuario" });
            }
        
            res.status(200).json(user);
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: "Error interno del servidor" });
        }
    };

    async ctrlCreateUser(req: Request, res: Response) {
        try {
            const data: Usuario = req.body;
            const user = await UsuarioService.createUser(data);
        
            if (!user) {
                return res.status(500).send({
                    status: 500,
                    message: 'No se ha podido crear el usuario!'
                });
            }
        
            res.status(201).json(user);
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: "Error interno del servidor" });
        }
    };

    async ctrlUpdateUser(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const data: Usuario = req.body;

            const user = await UsuarioService.updateUser(parseInt(id), data);

            if (!user) {
                return res.status(500).send({
                    status: 500,
                    message: 'No se ha podido actualizar el usuario!'
                });
            }

            res.status(200).json(user);
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: "Error interno del servidor" });
        }
    }

    async ctrlDeleteUser(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const user = await UsuarioService.deleteUser(parseInt(id));
        
            if (!user) {
                return res.status(404).json({ message: "No existe el usuario" });
            }
        
            res.status(200).json(user);
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: "Error interno del servidor" });
        }
    }
}

export default new UsuarioController()