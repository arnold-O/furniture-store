# E-Commerce Furniture Store - README

Welcome to the **E-Commerce Furniture Store**, a sleek, modern, and responsive web application for purchasing furniture online. Built with a focus on simplicity and user experience, this application leverages **Tailwind CSS** for styling and includes essential e-commerce features like product browsing, cart management, and order processing. (Credit to John Smilga for his react bootcamp classes)

---

## Features

### 1. **Single Page**  
   - Displays all available furniture products in a visually appealing layout.  
   - Features a search bar and filtering options to enhance the browsing experience.  
   - Integrates data fetching to dynamically load product information.

### 2. **Order Page**  
   - Shows detailed information about a selected product.  
   - Includes "Add to Cart" functionality for easy shopping.  

### 3. **Cart Page**  
   - Displays items added to the cart, with options to update quantities or remove products.  
   - Automatically calculates the total price of items in the cart.

### 4. **Checkout Page**  
   - Guides users through the order confirmation process.  
   - Includes a form for entering shipping and payment details.  
   - Finalizes orders and integrates backend functionality for data persistence.

### 5. **Login & Register Pages**  
   - Simple and secure authentication system for user login and registration.  
   - Uses form validation for a smooth user experience.

### 6. **Data Fetching**  
   - Fetches product details and user data from a backend API or database.  
   - Ensures real-time updates for cart and order processing.

---

## Technologies Used

- **Frontend**: HTML, Tailwind CSS, JavaScript/React  
- **API**: RESTful API for seamless communication between the frontend and backend  
- **Authentication**: JWT-based or session-based authentication system  

---

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/arnold-O/furniture-store
   cd furniture-store
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Build the project for production:
   ```bash
   npm run build
   ```

---

## Folder Structure

```plaintext
furniture-store/
│
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable components (e.g., Navbar, Footer, ProductCard)
│   ├── pages/              # Page components (SinglePage, CartPage, etc.)
│   ├── styles/             # Tailwind CSS configurations
│   ├── utils/              # Utility functions (e.g., API calls, helper Funtions)
│   └── App.jsx              # Main application file
├
└── tailwind.config.js      # Tailwind CSS configuration
```

---

## How to Contribute

1. Fork the repository.  
2. Create a new branch for your feature or bugfix:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add a new feature"
   ```
4. Push your changes:
   ```bash
   git push origin feature-name
   ```
5. Submit a pull request.

---

## License

This project is licensed under the MIT License. Feel free to use, modify, and distribute it as you see fit.

---

Happy coding! 🎉 If you encounter any issues or have suggestions, feel free to create an issue or reach out.