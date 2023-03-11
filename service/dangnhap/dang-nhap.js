import conn from "../../tools/pg";
export async function dangNhapSevice(username,password){
  
    let res = await conn.query(`SELECT * FROM "user" WHERE username = '${username}' and password = '${password}' `,[]);

    return res.rows;
}