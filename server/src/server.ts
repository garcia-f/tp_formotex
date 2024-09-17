import express, { Application} from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from 'helmet';
import { connectionDB } from '../src/config/connectionDB';
import { envs } from "./environments/environments";

import equipmentRoutes from "./routes/equipment.routes";
import brandRoutes from "./routes/brand.routes";
import categoryRoutes from "./routes/category.routes";
import userRouter from "./routes/user.routes";
import authRouter from "./routes/auth.routes";



class Server {

    private app: Application;
    private port: number;

    constructor() {
        this.app = express();
        this.port = envs.PORT;

        this.dbConnect();
        this.middlewares();
        this.routes();
    }

    // TODO: veremos despues con el profesor otra forma
    async dbConnect(): Promise<void> {
        await connectionDB();
    }


    middlewares(): void {
        this.app.use(cors());
        this.app.use(helmet());
        this.app.use(morgan('dev'));
        this.app.use(express.json());
    }

    routes(): void {
        this.app.use("/api/equipment", equipmentRoutes);
        this.app.use("/api/brand", brandRoutes);
        this.app.use("/api/category", categoryRoutes);
        this.app.use("/api/user", userRouter);
        this.app.use("/auth", authRouter);
    }

    listen(): void {
        this.app.listen( this.port, ()=> {
            console.log(`Servidor corriendo en el puerto ${this.port}`);
        });
    }

}


export default Server;
