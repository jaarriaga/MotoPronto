import pool from '../config/connection';


class UsuarioModelo {


    public async list() {
        const result = await pool.then( async (connection) => {
            return await connection.query(
                " SELECT u.correoElectronico, u.password, u.idRol "
                + " FROM usuario u ")  });
        return result;
    }


    public async add(usuario: any) {
        const result = await pool.then( async (connection) => {
            return await connection.query(
                " INSERT INTO usuario SET ? ", [usuario]);
        });
        return result;
    }
   


    public async update(usuario: any) {
       const update = "UPDATE usuario SET password='" + usuario.password +
            "' where correoElectronico='" + usuario.correoElectronico + "'";
        console.log("Update  "+ update)
        const result = await pool.then( async (connection) => {
            return await connection.query(update)              
        });
        return result;
    }


    public async delete(correoElectronico: string) {
        console.log('Eliminando');
        const result = await pool.then( async (connection) => {
            return await connection.query(
             "DELETE FROM usuario where correoElectronico= ?", [correoElectronico]
             );
        });
        return result;
    }
}
const model = new UsuarioModelo();
export default model;