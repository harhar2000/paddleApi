# PaddleAPI

A comprehensive JavaScript library and demo for interacting with the Paddle payment platform API, supporting both server-side operations and client-side checkout experiences.

## 📁 Project Structure

```
PaddleAPI/
├── api/                       # Core API interaction examples
│   ├── _1_response.js         # Basic response handling
│   ├── _2_data.js             # Data extraction from responses
│   ├── github.js              # Example external API call
│   └── .env                   # Environment variables
├── invoice/                   # Invoice management
│   ├── invoice.js             # Invoice creation and management
│   └── .env                   # Invoice-specific environment variables
├── overlayCheckout/           # Client-side checkout implementation
│   ├── overlayCheckout.html   # Checkout page with Paddle.js
│   ├── server.js              # Support server for client token
│   └── .env                   # Checkout environment variables
├── postCustomer/              # Customer management
│   ├── addCustomer.js         # Customer creation and retrieval
│   └── .env                   # Customer environment variables
├── postRequest/               # Generic POST requests
│   ├── createProduct.js       # Product creation examples
│   └── .env                   # Environment variables
│── pricingPage/               # Pricing page implementation
│   ├── index.html             # Complete pricing page with toggle
│   └── .env                   # Pricing page environment variables
│── saasApp/
    ├── .github                # GitHub configuration
    ├── public                 # Public assets
    ├── src                    # Source code
    ├── supabase               # Supabase configuration
    ├── .env                   # Environment variables
    ├── .env.local.example     # Example local environment variables
    ├── .gitignore             # Git ignore rules
    ├── .nvmrc                 # Node version manager config
    ├── .prettierignore        # Prettier ignore rules
    ├── .prettierrc            # Prettier configuration
    ├── components.json        # UI components configuration
    ├── CONTRIBUTING.md        # Contribution guidelines
    ├── eslint.config.mjs      # ESLint configuration
    ├── hero.png               # Hero image for documentation
    ├── LICENSE                # Project license
    ├── next.config.mjs        # Next.js configuration
    ├── package.json           # Package dependencies
    ├── pnpm-lock.yaml         # PNPM lock file
    ├── postcss.config.js      # PostCSS configuration
    ├── README.md              # Project README
    ├── SECURITY.md            # Security guidelines
    └── tsconfig.json          # TypeScript configuration
```

## 🚀 Getting Started

1. Clone this repository
2. Set up your environment variables in each `.env` file
3. Install dependencies: `npm install`

## 🔑 Environment Setup

Create `.env` files in each directory with the following variables:

```
PADDLE_API_KEY=your_api_key
PADDLE_CLIENT_TOKEN=your_client_token
```

## 📚 Features

### API Examples

- Basic API response handling
- Data extraction from Paddle API responses
- Error handling for API requests

### Invoice Management

- Create invoices with custom parameters
- Issue invoices to customers
- Handle invoice status updates

### Checkout Implementation

- Overlay checkout for seamless payment experience
- Server for securely providing client tokens
- Customizable checkout flow

### Customer Management

- Add new customers to your Paddle account
- Retrieve customer information
- Update customer details

### Pricing Page

- Interactive pricing page with monthly/yearly toggle
- Dynamic price calculation based on location
- Responsive design for all devices

## 🔗 Links

- [Paddle API Documentation](https://developer.paddle.com/api-reference/overview)
- [Paddle.js Documentation](https://developer.paddle.com/paddlejs/overview)
