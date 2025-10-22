import useCartContext from "../context/CartContext";

const useCart = () => {
  const { cart, addToCart, removeFromCart, clearCart } = useCartContext();

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.quantity * item.price, 0);

  return { cart, addToCart, removeFromCart, clearCart, totalItems, totalPrice };
};

export default useCart;
