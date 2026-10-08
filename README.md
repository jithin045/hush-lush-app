# Hush Lush - Restaurant Menu & Authentication App

A fully responsive, pixel-perfect web application built based on Figma designs, featuring user authentication, guest access, session protection, a dynamic food menu with categories and search, interactive promotional carousels, and custom cart interactions.

---

## 🚀 Live Deployment & Source Code
- **Live Demo:** [https://hush-lush-app.vercel.app](https://hush-lush-app.vercel.app)
- **GitHub Repository:** [https://github.com/jithin045/hush-lush-app](https://github.com/jithin045/hush-lush-app)

---

## 🛠️ Tech Stack & Libraries
- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Form Management & Validation:** React Hook Form & Zod
- **Icons:** Lucide React & React Icons

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
Open your browser and navigate to http://localhost:3000 to view the login screen.

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

Hosted at the root entry point (http://localhost:3000/) with headers and footers hidden for a clean experience.

Task 2: Email & Password Validation

Implemented robust client-side validation rules using Zod and React Hook Form with instant error handling.

Task 3: Authentication & Session Protection

Secure mock authentication flow with local token storage.

Utilizes router.replace and root route guards to prevent users from navigating back to the login screen using the browser's back button once authenticated.

Full secure Logout capability accessible via the mobile "More" menu and desktop dropdown header controls.

Task 4: Guest Access

Fully functional "Sign as Guest" option allowing users to bypass login instantly, browse the restaurant app, manage carts, and view account statuses.

Task 5: Restaurant Menu & Core Pages (/menu, /outlet, /account, /cart)

Responsive layout featuring promotional carousels, dynamic category filtering, and real-time search capabilities.

Global shared layout architecture featuring a responsive top Header, Footer, and a mobile bottom navigation pill.

Task 6: Micro-Interactions & Animations

Integrated Framer Motion for smooth entrance and banner slide transitions.

Added custom interactive confirmation modals, dropdown menus, and toast notifications.

Task 7: Code Quality & Responsiveness

Modularized code using reusable components (MenuCard, Header, Footer, MobileNav, PromoCarousel, LoginForm).

Separated static data assets cleanly into menuData.js and promoData.js.

📂 Project Structure
Plaintext
src/
├── app/
│   ├── layout.js          # Global layout controlling conditional header/footer visibility
│   ├── page.jsx           # Root Authentication Screen (http://localhost:3000/)
│   ├── menu/
│   │   └── page.jsx       # Restaurant Home / Menu Screen (http://localhost:3000/menu)
│   ├── outlet/
│   │   └── page.jsx       # Outlet Branches Information
│   ├── account/
│   │   └── page.jsx       # User Profile & Session Management
│   └── cart/
│       └── page.jsx       # Shopping Cart & Checkout Flow
├── assets/                # Logos, menu images, promo banners
├── components/            # Reusable UI components (Header, Footer, MobileNav, MenuCard, etc.)
├── data/                  # Static content (menuData.js, promoData.js)
├── features/
│   └── auth/
│       └── LoginForm.jsx  # Form logic & secure redirect handlers
└── utils/                 # Validation schemas (validation.js) & test files