import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { calculateBill } from "../utils/calculateTotal";
import { formatCurrency } from "../utils/format";

function BillSummary() {
  const cart = useSelector((state: RootState) => state.cart);
  const bill = calculateBill(cart);

  return (
    <div className="bg-white p-4 rounded shadow mt-4">
      <h2 className="text-xl font-semibold mb-4">Bill Summary</h2>

      <p>Subtotal: {formatCurrency(bill.subtotal)}</p>

      <div className="mt-2 text-green-600">

        {bill.savings.cheese > 0 && (
          <p>Cheese Offer: -{formatCurrency(bill.savings.cheese)}</p>
        )}

        {bill.savings.soupBread > 0 && (
          <p>Soup & Bread Offer: -{formatCurrency(bill.savings.soupBread)}</p>
        )}

        {bill.savings.butter > 0 && (
          <p>Butter Offer: -{formatCurrency(bill.savings.butter)}</p>
        )}

      </div>

      <hr className="my-2" />

      <p className="font-semibold">
        Total: {formatCurrency(bill.total)}
      </p>
    </div>
  );
}

export default BillSummary;