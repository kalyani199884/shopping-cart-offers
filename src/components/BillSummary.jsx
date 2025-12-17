import { calculateBill } from "../utils/calculateTotal";
import { formatCurrency } from "../utils/format";


function BillSummary({ cart }) {
  const bill = calculateBill(cart);

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Bill Summary</h2>

      <p>Subtotal: £{bill.subtotal}</p>

      <div className="mt-2 text-green-600">
        {bill.savings.cheese > 0 && (
          <p>Cheese Offer: -£{bill.savings.cheese.toFixed(2)}</p>
        )}
        {bill.savings.soupBread > 0 && (
          <p>Soup & Bread Offer: -£{bill.savings.soupBread.toFixed(2)}</p>
        )}
        {bill.savings.butter > 0 && (
          <p>Butter Offer: -£{bill.savings.butter.toFixed(2)}</p>
        )}
      </div>

      <hr className="my-2" />

      <p className="font-semibold">
        <p>Subtotal: {formatCurrency(bill.subtotal)}</p>
<p>Total: {formatCurrency(bill.total)}</p>
      </p>
    </div>
  );
}

export default BillSummary;
