import { ProductCard } from "./ProductCard";
import style from "./style.module.scss";
export const ProductList = ({ productList, setCartList, addCart }) => {
   return (
      <section className={style.section}>
         <ul>
            {productList.map((product) => (
               <ProductCard addCart={addCart} key={product.id} product={product} setCartList={setCartList} />
            ))}
         </ul>
      </section>
   );
};
