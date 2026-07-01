# Ninja Inventory Management

Production-ready MERN starter for a Zoho-inspired inventory SaaS dashboard, designed with premium UI, smooth animations, and role-based access.

## 🚀 Tech Stack

### Frontend
- **React 18** - UI Library (Bootstrapped with Vite)
- **Tailwind CSS 3** - Utility-first styling & responsive design
- **Framer Motion** - Fluid micro-interactions and page transitions
- **React Router DOM** - Client-side routing and protected routes
- **Recharts** - Data visualization and analytics charts
- **Lucide React** - Modern, consistent iconography

### Backend
- **Node.js & Express.js** - REST API architecture
- **MongoDB & Mongoose** - NoSQL database & object modeling
- **JWT** - Secure authentication (implied/planned)

## 🔄 System Flow

1. **Authentication (Login)**
   - Users are presented with a premium, animated login interface.
   - Users authenticate by selecting a role (Admin or Superadmin) and entering credentials.
   - Successful login grants access to the protected `/app` routes via React Context.

2. **Dashboard Overview (`/app`)**
   - The central hub displaying high-level metrics (Total Products, Low Stock Alerts, Revenue, Tasks).
   - Features dynamic charts (via Recharts) mapping recent inventory and revenue movements.
   - Shows a real-time Activity Feed logging recent system actions.

3. **Products & Inventory Management (`/app/products`)**
   - View complete lists of fiber inventory and assets.
   - Add new products, adjust stock levels, and track items.
   - Automated low-stock alerts trigger when `quantity <= reorderPoint`.

4. **Tasks & Notes (`/app/tasks`)**
   - Track operational tasks, repairs, and installations.
   - When a task is marked as `Completed`, it is moved to the completed section and logged in the activity feed.

5. **Analytics & Records (`/app/analytics` & `/app/records`)**
   - Detailed visual trends for business performance.
   - Tabular, Excel-like data views for auditing and exporting historical data.

6. **Settings (`/app/settings`)**
   - Manage application preferences and user profile configurations.

## 📂 Project Tree

```text
ninja-fiber-inventory/
  backend/
    controllers/
    middleware/
    models/
    routes/
    scripts/
    server.js
  frontend/
    src/
      components/
      data/
      pages/
      services/
      App.jsx
      main.jsx
      index.css
    index.html
    vite.config.js
    tailwind.config.js
```

## 🛠️ Run Locally

```bash
cd ninja-fiber-inventory
npm install
```

Create environment files from the examples:

```bash
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env
```

Start MongoDB locally, then seed demo data:

```bash
npm run seed
```

Run backend and frontend in two terminals:

```bash
npm run backend
npm run frontend
```

- **Frontend**: `http://localhost:5173`
- **Backend**: `http://localhost:5000/api/health`
