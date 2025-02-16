import dotenv from "dotenv";
dotenv.config();

const PADDLE_API_KEY = process.env.PADDLE_API_KEY;
export { PADDLE_API_KEY };

const payload = {
  name: "AeroEdit Student",
  tax_category: "standard",
  description:
    "Essential tools for student pilots to manage flight logs, analyze performance, and plan routes, and ensure compliance. Valid student pilot certificate from the FAA required.",
  image_url:
    "https://paddle.s3.amazonaws.com/user/165798/bT1XUOJAQhOUxGs83cbk_pro.png",
  custom_data: {
    features: {
      aircraft_performance: true,
      compliance_monitoring: false,
      flight_log_management: true,
      payment_by_invoice: false,
      route_planning: true,
      sso: false,
    },
    suggested_addons: [
      "pro_01h1vjes1y163xfj1rh1tkfb65",
      "pro_01gsz97mq9pa4fkyy0wqenepkz",
    ],
    upgrade_description: null,
  },
};

const response = await fetch("https://sandbox-api.paddle.com/products", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${PADDLE_API_KEY}`,
  },
  body: JSON.stringify(payload),
});
console.log(response);

// const response = await fetch("https://sandbox-api.paddle.com/customers", {
//   method: "GET",
//   headers: { Authorization: `${PADDLE_API_KEY}` },
// });
// console.log(response);
