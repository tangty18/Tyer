import conn from "../../tools/pg";
export async function layMot(id){
  let res = await conn.query(`SELECT * FROM dienthoai WHERE id = '${id}'`,[]);

   return res.rows;


}

export async function layHet(){
  let res = await conn.query("SELECT *FROM dienthoai",[])
    return res.rows;
}
