import {getCookie} from 'cookies-next'

export default async function handler(req, res) {

    const id = req.body?.id;
    
    const chiaKhoa = req.query?.chiaKhoa;
    
    if(chiaKhoa){
        res.status(200).json({ isLogin:true});
    }else{
        res.status(200).json({ isLogin:false});
    }
    
  }
  