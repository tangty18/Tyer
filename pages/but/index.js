import { useState } from "react";
export default function TestHome() {
    const [danhSachSP, setDanhSachSP] = useState([
        {
            name: "Bút Chì",
            price: 23000,
            image: 
            "http://img.websosanh.vn/v2/users/root_product/images/but-chi-go-2b-thien-long-gp02/2jgr174h4dbhl.jpg"
        },
        {
            name: "Bút Lông",
            price: 15000,
            image: 
            "https://product.hstatic.net/1000230347/product/but_long_dau_thien_long_pm-09__1_.jpg"
        },
        {
            name: "Bút Màu",
            price: 50000,
            image: 
            "https://phucma.com.vn/wp-content/uploads/2019/06/but-mau-noi-Artline-Pastel-ink-min.jpg"
        },
        {
            name: "Bút Bi",
            price: 50000,
            image: 
            "https://adcbook.net.vn/web/image/product.template/74838/image_1024?unique=2c1660d"
        },
        {
            name: "Cọ Vẽ",
            price: 6000,
            image: 
            "https://scontent.fsgn5-13.fna.fbcdn.net/v/t39.30808-6/296099477_101442889337580_4175294896963945968_n.jpg?stp=cp6_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=e3f864&_nc_ohc=ghIAAjqj_d8AX_LpKt3&tn=LXo4bNndAb8GCCKs&_nc_ht=scontent.fsgn5-13.fna&oh=00_AfAEktBHSMmK2WN-6wD-AF7sbaRx4qsBzKSOf90txWIh5w&oe=63AD3375"
        }
    ])


    return (
        <div>
                {danhSachSP.map((item) => (
                    <div>
                        <div>Tên:{item.name}</div>
                        <div>Giá:{item.price}</div>
                        <div>
                            <img src={item.image} width={"100px"} height={"100px"} />
                        </div>
                    </div>
                ))}
            </div>
                   
    )
}

    
      

            

    

