import { create } from "zustand"; // ✅ correct

const useCart = create((set) => ({
  cart: [],
  addToCart: (item) =>
    set((state) => {
      const existing = state.cart.find((i) => i.id === item.id);
      if (existing) {
        return { cart: state.cart.map((i) => i.id === item.id ? {...i, quantity: i.quantity + 1} : i) };
      } else {
        return { cart: [...state.cart, {...item, quantity: 1}] };
      }
    }),
  removeFromCart: (id) => set((state) => ({ cart: state.cart.filter(i => i.id !== id) })),
  clearCart: () => set({ cart: [] })
}));

export default useCart;
