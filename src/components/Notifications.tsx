import React from "react";
import { useStore } from "@/context/StoreContext";
import { ShoppingCart, Heart, X } from "lucide-react";

const Notifications: React.FC = () => {
  const { notifications } = useStore();

  if (notifications.length === 0) return null;

  return (
    <div className="fixed left-4 bottom-6 z-[200] flex flex-col gap-2 pointer-events-none">
      {notifications.map((n) => (
        <div
          key={n.id}
          className="flex items-center gap-3 bg-primary text-primary-foreground px-4 py-3 rounded-lg shadow-xl animate-slide-in-left max-w-xs"
        >
          {n.type === "cart" && <ShoppingCart className="w-4 h-4 shrink-0" />}
          {n.type === "favorite" && <Heart className="w-4 h-4 shrink-0 fill-current" />}
          {n.type === "remove" && <X className="w-4 h-4 shrink-0" />}
          <span className="text-sm font-medium">{n.message}</span>
        </div>
      ))}
    </div>
  );
};

export default Notifications;
