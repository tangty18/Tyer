import conn from "../../tools/pg";
export async function layMot(id){
  let res = await conn.query(`SELECT * FROM but WHERE id = '${id}'`,[]);

   return res.rows;


}

export async function layHet(){
  let res = await conn.query("SELECT *FROM but",[])
    return res.rows;
}