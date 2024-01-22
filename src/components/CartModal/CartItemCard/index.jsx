import { MdDelete } from "react-icons/md";
import style from "./style.module.scss";

export const CartItemCard = ({ product, removeCart }) => {
   return (
      <li className={style.li}>
         <div>
            <img src={product.img} alt={product.name} />
            <div>
               <h3>{product.name}</h3>
               <span>{product.price.toLocaleString('pt-BR', { style: "currency", currency: "BRL" })}</span>
            </div>
         </div>
         <button onClick={() => removeCart(product.id)} aria-label="delete" title="Remover item">
            <MdDelete size={21} />
         </button>
      </li>
   );
};
