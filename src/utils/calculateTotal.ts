import { PRODUCTS } from "../data/products";
import { cheeseOffer, soupBreadOffer, butterOffer } from "./offers";

export function calculateBill(cart) {
  let subtotal = 0;

  Object.entries(cart).forEach(([item, qty]) => {
    subtotal += PRODUCTS[item] * qty;
  });

  const savings = {
    cheese: cheeseOffer(cart.cheese || 0, PRODUCTS.cheese),
    soupBread: soupBreadOffer(
      cart.soup || 0,
      cart.bread || 0,
      PRODUCTS.bread
    ),
    butter: butterOffer(cart.butter || 0, PRODUCTS.butter),
  };

  const totalSavings =
    savings.cheese + savings.soupBread + savings.butter;

  return {
    subtotal: subtotal.toFixed(2),
    savings,
    totalSavings: totalSavings.toFixed(2),
    total: (subtotal - totalSavings).toFixed(2),
  };
}
