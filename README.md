# 🍽️ Food Ordering App — Frontend (React + Redux)

This is the **frontend** of a full-stack food ordering application, developed using **React**, **Redux Toolkit**, and **Axios**. It connects to a standalone backend via a proxy and enables users to:

- Browse a food menu
- Add items to their cart
- Enter delivery addresses via Google Maps Autocomplete
- Checkout with **PayPal**
- Receive email order confirmations

Hosted backend: `https://royalkids-shop.onrender.com`

---

## 🔍 Key Features

- ✅ React 18 with functional components and hooks
- 🛒 Redux Toolkit for global state management
- 📦 Axios for API requests
- 🎨 Responsive UI with React-Bootstrap
- 📍 Google Maps address autocomplete (via backend)
- 💳 PayPal payment gateway integration
- 🔔 Toast notifications (React Toastify)
- 🔐 Helmet for SEO and metadata
- 📦 Production-ready build via React Scripts

---

## 🧰 Technologies & Libraries

| Library / Tool             | Purpose                                  |
|----------------------------|-------------------------------------------|
| React                     | Core UI framework                         |
| Redux Toolkit             | Cart and order state management           |
| Axios                     | HTTP client for API requests              |
| React Router DOM          | Navigation and routing                    |
| React Bootstrap / Bootstrap| UI layout and components                 |
| React PayPal JS           | PayPal SDK wrapper                        |
| React Toastify            | Toast message notifications               |
| React Helmet Async        | Metadata management for SEO              |
| Render.com                | Backend hosting platform                  |

---

## 🏗️ Project Structure

```

src/
├── components/          # Reusable UI components
├── pages/               # Page views like Home, Cart, Checkout
├── redux/               # Redux slices and store setup
├── services/            # API functions using Axios
├── utils/               # Utility functions
├── App.js               # Main application with routes
└── index.js             # App entry point

````

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/food-frontend.git
cd food-frontend
````

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment

No `.env` is required for the frontend if using the default proxy in `package.json`:

```json
"proxy": "https://royalkids-shop.onrender.com"
```

If using Google Maps or other integrations, you may add:

```env
REACT_APP_GOOGLE_MAPS_API_KEY=your_key_here
REACT_APP_PAYPAL_CLIENT_ID=your_paypal_client_id
```

### 4. Run the App

```bash
npm start
```

App runs on: `http://localhost:3000`

---

## 🛒 Key Pages

| Route            | Description                     |
| ---------------- | ------------------------------- |
| `/`              | Home page                       |
| `/menu`          | Food items and categories       |
| `/cart`          | Cart with added items           |
| `/checkout`      | Enter address + pay with PayPal |
| `/order-success` | Order confirmation & email sent |

---

## 💡 Notes

* Email notifications are handled on the backend using **Nodemailer**
* Google Maps API is invoked via backend for address input
* Redux store tracks food items, cart, and order status
* PayPal client ID is loaded dynamically for security
* Toast messages provide feedback on key actions (add to cart, payment success, etc.)

---

## 📦 Build for Production

```bash
npm run build
```

This will generate a minified and optimized build in the `build/` folder.

---

## 📜 License

MIT License — free for personal and commercial use.

---

## 👤 Author

Developed by Thabani Ngwenya
📧 Email: [ngwenyathabani080@gmail.com](mailto:ngwenyathabani080@gmail.com)


---

## 🔗 Related Repositories

* 📦 [Backend API](https://github.com/yourusername/food-backend)

```

