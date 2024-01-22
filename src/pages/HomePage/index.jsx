import { useEffect, useState } from "react";
import { CartModal } from "../../components/CartModal";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import { productApi } from "../../services/api";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const HomePage = () => {
   const localProduct = localStorage.getItem("PRODUCTCARD");

   const [productList, setProductList] = useState([]);
   const [isVisible, setVisible] = useState(false);
   const [cartList, setCartList] = useState(localProduct ? JSON.parse(localProduct) : []);


   useEffect(() => {
      localStorage.setItem("PRODUCTCARD", JSON.stringify(cartList));
   }, [cartList]);

   const addCart = (card) => {
      const hasProduct = cartList.some(
         (product) => product.id === card.id
      );
      if (!hasProduct) {
         toast("Produto adicionado com sucesso")
         setCartList([...cartList, card]);
      } else {
         toast("Ese produto ja existe no carrinho")
      }
   };

   const removeCart = (cardId) => {
      const removed = cartList.filter((card) => card.id !== cardId);
      setCartList(removed)
   };

   useEffect(() => {
      const getPhotos = async () => {
         try {
            const { data } = await productApi.get("/products");
            setProductList(data);
         } catch (error) {
            console.log(error);
         }
      };

      getPhotos();
   }, []);

   return (
      <>
         <Header cartList={cartList} setVisible={setVisible} />
         <main>
            <ProductList addCart={addCart} setCartList={setCartList} productList={productList} />
            {isVisible ? <CartModal setCartList={setCartList} removeCart={removeCart} setVisible={setVisible} cartList={cartList} /> : null}
         </main>
         <ToastContainer position="bottom-right"  autoClose={1 * 1000} />
      </>
   );
};
