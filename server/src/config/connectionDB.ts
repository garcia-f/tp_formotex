import db from "./db";
import { associations } from "./relations";


export const connectionDB = async () => {
    db.authenticate()
        .then(() => {
            console.log('Conectado a la base de datos de postgress')

            db.sync({ alter: true })
                .then( async () => {
                    console.log('Base de datos sincronizada');
                })
            
                associations()
                .then((res) => {
                    console.log(res);
                })
                .catch((err) => {
                    console.log(err);
                })

        })
        .catch( err => {
            console.log(err)
        })
}