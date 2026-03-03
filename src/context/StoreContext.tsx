import React, { createContext, useContext, useState, useCallback } from "react";

export interface CartItem {
  productId: string;
  name: string;
  image: string;
  quantity: number;
  quantityLabel: string;
  price: number;
}

interface Notification {
  id: string;
  message: string;
  type: "cart" | "favorite" | "remove";
}

interface StoreContextType {
  cart: CartItem[];
  favorites: string[];
  notifications: Notification[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (productId: string, quantityLabel: string) => void;
  updateCartQty: (productId: string, quantityLabel: string, qty: number) => void;
  toggleFavorite: (productId: string, name: string) => void;
  isFavorite: (productId: string) => boolean;
  cartCount: number;
  cartTotal: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
}

const StoreContext = createContext<StoreContextType | null>(null);

export const useStore = () => {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error("useStore must be inside StoreProvider");
  return ctx;
};

export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const pushNotification = useCallback((message: string, type: Notification["type"]) => {
    const id = Math.random().toString(36).slice(2);
    setNotifications((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setNotifications((prev) => prev.filter((n) => n.id !== id));
    }, 3000);
  }, []);

  const addToCart = useCallback(
    (item: CartItem) => {
      setCart((prev) => {
        const existing = prev.find(
          (c) => c.productId === item.productId && c.quantityLabel === item.quantityLabel
        );
        if (existing) {
          return prev.map((c) =>
            c.productId === item.productId && c.quantityLabel === item.quantityLabel
              ? { ...c, quantity: c.quantity + item.quantity }
              : c
          );
        }
        return [...prev, item];
      });
      pushNotification(`"${item.name}" added to cart`, "cart");
    },
    [pushNotification]
  );

  const removeFromCart = useCallback(
    (productId: string, quantityLabel: string) => {
      setCart((prev) => {
        const item = prev.find(
          (c) => c.productId === productId && c.quantityLabel === quantityLabel
        );
        if (item) pushNotification(`"${item.name}" removed from cart`, "remove");
        return prev.filter(
          (c) => !(c.productId === productId && c.quantityLabel === quantityLabel)
        );
      });
    },
    [pushNotification]
  );

  const updateCartQty = useCallback((productId: string, quantityLabel: string, qty: number) => {
    if (qty <= 0) {
      removeFromCart(productId, quantityLabel);
      return;
    }
    setCart((prev) =>
      prev.map((c) =>
        c.productId === productId && c.quantityLabel === quantityLabel
          ? { ...c, quantity: qty }
          : c
      )
    );
  }, [removeFromCart]);

  const toggleFavorite = useCallback(
    (productId: string, name: string) => {
      setFavorites((prev) => {
        const isFav = prev.includes(productId);
        if (isFav) {
          pushNotification(`"${name}" removed from favorites`, "remove");
          return prev.filter((id) => id !== productId);
        } else {
          pushNotification(`"${name}" added to favorites`, "favorite");
          return [...prev, productId];
        }
      });
    },
    [pushNotification]
  );

  const isFavorite = useCallback((productId: string) => favorites.includes(productId), [favorites]);

  const cartCount = cart.reduce((sum, c) => sum + c.quantity, 0);
  const cartTotal = cart.reduce((sum, c) => sum + c.price * c.quantity, 0);

  return (
    <StoreContext.Provider
      value={{
        cart,
        favorites,
        notifications,
        addToCart,
        removeFromCart,
        updateCartQty,
        toggleFavorite,
        isFavorite,
        cartCount,
        cartTotal,
        isCartOpen,
        setIsCartOpen,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
