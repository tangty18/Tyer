import conn from "../../tools/pg";
import { v4 as uuidv4 } from "uuid";
import  format  from "pg-fomat"


export async function taoDonHang({username}){
const madonhang = uuidv4();
const values = [[madonhang,"cho xac nhan",username]];
const sql = format(
  "INSERT INTO donhang(madonhang,trangthai,username) VALUES %L" ,
  values
)
let res = await conn.query(sql,[])
return res;
}