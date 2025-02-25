import dotenv from "dotenv";
dotenv.config();

const PADDLE_API_KEY = process.env.PADDLE_API_KEY;
export { PADDLE_API_KEY };

// Make connection - 200
const response = await fetch(
  "https://sandbox-api.paddle.com/customers/ctm_01jmh2txr5bdc7vcjq5r3hyb6g",
  {
    method: "GET",
    headers: {
      Authorization: `Bearer ${PADDLE_API_KEY}`,
      "Content-Type": "application/json",
    },
  }
);
console.log(response); // see response

const customerData = await response.json(); // see Data
console.log(customerData.data.name);

// Payload for POST request
const payload = {
  email: "james@bond.com",
  name: "James Bond",
};

const response2 = await fetch("https://sandbox-api.paddle.com/customers", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${PADDLE_API_KEY}`,
  },
  body: JSON.stringify(payload),
});
console.log(response2.data);
