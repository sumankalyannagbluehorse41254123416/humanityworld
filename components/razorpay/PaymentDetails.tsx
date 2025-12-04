"use client";

export default function PaymentDetails() {
  return (
    <div className="container mt-3">
      <div className="inrDonation pay_details">
        <h2 className="text-center topTitle mb-3">PAYMENT DETAILS</h2>

        <div className="col-lg-12">
          <div className="row">
            <div className="w-100 selectareaP">

              <p>
                <strong>Order ID: </strong> <span id="orderId">order_id_1264</span><br />
                <strong>Name: </strong><span>xacsaxasx</span><br />
                <strong>Amount: </strong> <span id="amount"><span>₹</span> 500</span><br />
                <strong>Currency: </strong> <span id="currency">INR</span><br />
                <strong>Receipt: </strong> <span id="receipt">rcptid_9409</span>
              </p>

              <br />

              <button id="rzp-button1" className="donets_button">Pay Now</button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
