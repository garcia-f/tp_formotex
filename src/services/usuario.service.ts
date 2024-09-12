import { Usuario } from "../interfaces/usuario.interface";
import { UsuarioModel } from "../models/usuario.model";

class UsuarioService {

    constructor() {}

    async getUsers() {
        const users = await UsuarioModel.findAll();
        return users;
    }

    async getOneUser(id: number) {
        const user = await UsuarioModel.findOne({ where: { id } });
        return user;
    }

    async createUser(data: Usuario) {
        const user = await UsuarioModel.create(data);
        return user;
    }

    async updateUser(id: number, data: Usuario) {
        const user = await UsuarioModel.update(data, { where: { id } });
        return user;
    }

    async deleteUser(id: number) {
        const user = await UsuarioModel.findOne({ where: { id } });

        if (!user) {
            throw new Error('User not found');
        }

        user.update({ state: false });

        return user;
    }
}

export default new UsuarioService()