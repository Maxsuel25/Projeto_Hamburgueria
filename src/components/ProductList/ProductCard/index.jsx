import style from "./style.module.scss";

export const ProductCard = ({ product, setCartList ,addCart}) => {
    return (
        <li className={style.li}>
            <img src={product.img} alt={product.name} />
            <div>
                <h3 className="heading3">{product.name}</h3>
                <span className="caption">{product.category}</span>
                <span className="body">{product.price.toLocaleString('pt-BR', { style: "currency", currency: "BRL" })}</span>
                <button onClick={() => addCart(product)} className={style.button}>Adicionar</button>
            </div>
        </li>
    )
}