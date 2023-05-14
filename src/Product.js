import React,{useRef} from 'react';
import "./Product.css";
import { useDispatch } from "react-redux";
// import {totalItems} from './store/bucketSlice';
import { addToCart } from './store/cartSlice';
function Product({ id, title, image, price, rating }) {
  let objct={ id, title, image, price, rating };
  let dispatch=useDispatch();
  let ref=useRef(0);
  let vr=0;
  const handleAddToCart=()=>{
    dispatch(addToCart(objct));
    vr=vr+1; ref.current = ref.current + 1;
    console.log("vr:",vr," ref:",ref.current);
  }
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}  vr={vr}  ref={ref.current}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>🌟</p>
            ))}
        </div>
      </div>

      <img src={image} alt="" />

      <button onClick={handleAddToCart}>Add to Basket</button>
    </div>
  );
}

export default Product;