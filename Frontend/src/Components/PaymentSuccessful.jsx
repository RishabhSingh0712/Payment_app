import React from "react";
import "../style/PaymentSuccess.css";
import { useLocation } from "react-router-dom";

function PaymentSuccessful() {
  const queryParams = new URLSearchParams(useLocation().search);
  const reference = queryParams.get("reference");
  return (
    <div>
      <div className="payment-success-container">
        <div className="payment-success-card">
          <h1 className="payment-success-title">Payment Successful</h1>
          <p className="payment-success-message">
            Thank you for your purchase! Your payment has been successfully
            processed.
          </p>
          {reference && (
            <p className="payment-success-reference">
              <strong>Reference ID:</strong> {reference}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default PaymentSuccessful;
