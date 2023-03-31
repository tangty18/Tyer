import conn from "../../tools/pg";
export async function hoSoSevice(username){
  
    let res = await conn.query(`SELECT * FROM "user" WHERE username = '${username}'`,[]);

    return res.rows;
}