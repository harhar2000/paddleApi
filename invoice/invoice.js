import dotenv from "dotenv";
dotenv.config();

const PADDLE_API_KEY = process.env.PADDLE_API_KEY;

const invoicePayload = {
  items: [{ price_id: "pri_01jm54x1xjbw8wcyvyf3gv1613", quantity: 50 }],
  customer_id: "ctm_01jmh2txr5bdc7vcjq5r3hyb6g",
  address_id: "add_01jmh3wxsj01x4rhvrrbma9dh5",
  collection_mode: "manual",
  billing_details: {
    enable_checkout: false,
    payment_terms: { interval: "day", frequency: 14 },
  },
};

const createInvoice = async () => {
  try {
    const response = await fetch(
      "https://sandbox-api.paddle.com/transactions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${PADDLE_API_KEY}`,
        },
        body: JSON.stringify(invoicePayload),
      }
    );

    if (!response.ok) {
      throw new Error(`API Request Failed: ${response.statusText}`);
    }

    const responseData = await response.json();
    console.log("Invoice Created:", responseData);
  } catch (error) {
    console.error("Error:", error.message);
  }
};

const issueInvoice = async (transactionId) => {
  try {
    const response = await fetch(
      `https://sandbox-api.paddle.com/transactions/${transactionId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${PADDLE_API_KEY}`,
        },
        body: JSON.stringify({ status: "billed" }), // Issue the invoice
      }
    );

    if (!response.ok) {
      throw new Error(`API Request Failed: ${response.statusText}`);
    }

    const responseData = await response.json();
    console.log("Invoice Issued:", responseData);
  } catch (error) {
    console.error("Error:", error.message);
  }
};

// Call the function with the created invoice ID
issueInvoice("txn_01jmh7bnwbdya9v02mndfcm133");

createInvoice();
