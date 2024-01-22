import { MdClose } from "react-icons/md";
import { CartItemCard } from "./CartItemCard";
import style from "./style.module.scss";

export const CartModal = ({ setVisible, cartList, removeCart, setCartList }) => {
   const total = cartList.reduce((prevValue, product) => {
      return prevValue + product.price;
   }, 0);

   return (
      <div className={style.modalOverlay} role="dialog">
         <div className={style.modalBox}>
            <div className={style.moduleClose}>
               <h2>Carrinho de compras</h2>
               <button onClick={() => setVisible(false)} aria-label="close" title="Fechar">
                  <MdClose size={21} />
               </button>
            </div>
            <div className={style.containerProduct}>
               <ul>
                  {cartList.map((product) => (
                     <CartItemCard removeCart={removeCart} key={product.id} product={product} />
                  ))}
               </ul>
            </div>
            <div className={style.containerValue}>
               <div className={style.container}>
                  <span className={style.spanTotal}>Total</span>
                  <span className={style.spanValue}>{total.toLocaleString('pt-BR', { style: "currency", currency: "BRL" })}</span>
               </div>
               <button className={style.btnClear} onClick={() => setCartList([])}>Remover todos</button>
            </div>
         </div>
      </div>
   );
};
