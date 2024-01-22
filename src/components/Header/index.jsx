import { useState } from "react";
import Logo from "../../assets/Logo.svg";
import { MdSearch, MdShoppingCart } from "react-icons/md";
import style from "./index.module.scss";

export const Header = ({ setVisible, cartList }) => {
   const [value, setValue] = useState("");
   return (
      <header className={style.header}>
         <img src={Logo} alt="Logo Kenzie Burguer" />
         <div>
            <button onClick={() => setVisible(true)}>
               <MdShoppingCart className={style.image} size={21} />
               <span>{cartList.length}</span>
            </button>
          
         </div>
      </header>
   );
};
