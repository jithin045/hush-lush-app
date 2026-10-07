# Hush Lush - Restaurant Menu & Authentication App

A fully responsive, pixel-perfect web application built based on Figma designs, featuring user authentication, guest access, a dynamic food menu with categories and search, interactive promotional carousels, and custom cart interactions.

---

## 🚀 Live Deployment & Source Code
* **Live Demo:** [https://hush-lush-app.vercel.app](https://hush-lush-app.vercel.app)
* **GitHub Repository:** [https://github.com/jithin045/hush-lush-app](https://github.com/jithin045/hush-lush-app)

---

## 🛠️ Tech Stack & Libraries
* **Framework:** Next.js (App Router)
* **Styling:** Tailwind CSS
* **Animations:** Framer Motion
* **Form Management & Validation:** React Hook Form & Zod
* **Icons:** Lucide React & React Icons

---

## 💻 Local Setup & Installation

To run this project locally on your machine, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/jithin045/hush-lush-app.git](https://github.com/jithin045/hush-lush-app.git)
   cd hush-lush-app
Install dependencies:

Bash
npm install
Run the development server:

Bash
npm run dev
Open the application:
Open your browser and navigate to http://localhost:3000 to view the app.

Run tests:
To run validation and interaction tests, execute:

Bash
npm test
🔑 Test Credentials (Mock Auth)
If you want to test the login form manually instead of using the "Sign as Guest" option, use the following credentials:

Email: test@example.com

Password: Password123

✨ List of Completed Features
Task 1: Login / Authentication Screen

Faithfully recreated the Figma login design including typography, logo, terms of use links, and social login button mockups.

Task 2: Email & Password Validation

Implemented robust client-side validation rules using Zod and React Hook Form with instant error handling.

Task 3: Authentication Flow

Working instant mock authentication flow with local token storage that routes authorized users directly to the restaurant menu.

Task 4: Guest Access

Fully functional "Sign as Guest" option allowing users to bypass login and explore the restaurant menu instantly.

Task 5: Restaurant Home / Food Menu Screen

Responsive layout featuring promotional carousels, dynamic category filtering (For You, Chicken Chop, Fish, Burger, etc.), and real-time search capabilities.

Task 6: Micro-Interactions & Animations

Integrated Framer Motion for smooth entrance and banner slide transitions.

Added custom interactive confirmation modals and toast notifications.

Task 7: Code Quality, Testing & Responsiveness

Modularized code using reusable components (MenuCard, Header, Footer, PromoCarousel, LoginForm).

Separated static data assets cleanly into menuData.js and promoData.js.

Fully responsive design optimized for mobile devices (with a sticky bottom navigation pill) and desktop viewports.

📂 Project Structure
Plaintext
src/
├── app/
│   ├── layout.js
│   ├── page.js           # Restaurant Home / Menu Screen
│   └── login/
│       └── page.jsx      # Authentication Screen
├── assets/               # Logos, menu images, promo banners
├── components/           # Reusable UI components (Header, Footer, MenuCard, etc.)
├── data/                 # Static content (menuData.js, promoData.js)
├── features/
│   └── auth/
│       └── LoginForm.jsx # Form logic & submission handlers
└── utils/                # Validation schemas (validation.js) & test files