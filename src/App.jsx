import { useState } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import BillSummary from "./components/BillSummary";

function App() {
  const [cart, setCart] = useState({});

  const addItem = (item) => {
    setCart((prev) => ({
      ...prev,
      [item]: (prev[item] || 0) + 1,
    }));
  };

  const removeItem = (item) => {
    setCart((prev) => {
      if (!prev[item]) return prev;

      const updated = { ...prev };
      updated[item] -= 1;
      if (updated[item] === 0) delete updated[item];
      return updated;
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
  <h1 className="text-3xl font-bold text-center mb-8">
    Shopping Cart Offers
  </h1>

  <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
    <ProductList onAdd={addItem} />
    <Cart cart={cart} onAdd={addItem} onRemove={removeItem} />
    <BillSummary cart={cart} />
  </div>
</div>

  );
}

export default App;
