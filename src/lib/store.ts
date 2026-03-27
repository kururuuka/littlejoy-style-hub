import { create } from "zustand";
import { CartItem, Product } from "./data";

interface StoreState {
  cart: CartItem[];
  wishlist: string[];
  addToCart: (product: Product, size: string, color: string, quantity?: number) => void;
  removeFromCart: (productId: string, size: string, color: string) => void;
  updateCartQuantity: (productId: string, size: string, color: string, quantity: number) => void;
  clearCart: () => void;
  toggleWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
  cartTotal: () => number;
  cartCount: () => number;
}

export const useStore = create<StoreState>((set, get) => ({
  cart: [],
  wishlist: [],

  addToCart: (product, size, color, quantity = 1) => {
    set((state) => {
      const existing = state.cart.find(
        (item) => item.product.id === product.id && item.size === size && item.color === color
      );
      if (existing) {
        return {
          cart: state.cart.map((item) =>
            item.product.id === product.id && item.size === size && item.color === color
              ? { ...item, quantity: item.quantity + quantity }
              : item
          ),
        };
      }
      return { cart: [...state.cart, { product, quantity, size, color }] };
    });
  },

  removeFromCart: (productId, size, color) => {
    set((state) => ({
      cart: state.cart.filter(
        (item) => !(item.product.id === productId && item.size === size && item.color === color)
      ),
    }));
  },

  updateCartQuantity: (productId, size, color, quantity) => {
    set((state) => ({
      cart: state.cart.map((item) =>
        item.product.id === productId && item.size === size && item.color === color
          ? { ...item, quantity: Math.max(1, quantity) }
          : item
      ),
    }));
  },

  clearCart: () => set({ cart: [] }),

  toggleWishlist: (productId) => {
    set((state) => ({
      wishlist: state.wishlist.includes(productId)
        ? state.wishlist.filter((id) => id !== productId)
        : [...state.wishlist, productId],
    }));
  },

  isInWishlist: (productId) => get().wishlist.includes(productId),

  cartTotal: () => get().cart.reduce((total, item) => total + item.product.price * item.quantity, 0),

  cartCount: () => get().cart.reduce((count, item) => count + item.quantity, 0),
}));
