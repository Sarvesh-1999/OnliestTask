# OnliestTask Dashboard

A React + Vite single-page app for authenticated post browsing with search, sort, and pagination.

## 🚀 Project Overview

OnliestTask is a small dashboard app that fetches posts from `https://dummyjson.com/posts` and provides:

- login form with validation + session-based auth token
- protected routes using `PrivateRoute`
- navigation via `react-router-dom`
- client-side search with debounce
- sort by title or views
- pagination (10 items per page)
- responsive navbar and loader state

## 🧩 App Flow

1. User lands on `/login`
2. User enters email/password and clicks Login
3. App validates inputs (email format, required fields)
4. On successful login, token stored in `sessionStorage`
5. User is redirected to `/` (Dashboard)
6. Dashboard fetches posts from API and displays in a table
7. User can search posts, sort, paginate, and logout

## ✅ Features

- Authentication
  - Email/password form
  - Email format validation
  - required field checks
  - `sessionStorage` token management
  - `PrivateRoute` guard to redirect unauthenticated users
- Dashboard post list
  - fetch posts with `axios` from `dummyjson.com`
  - `useDebounce` for search input (1s delay in Dashboard)
  - search endpoint `posts/search?q=` when query exists
  - sort by title (ascending) and views (descending)
  - pagination using `skip` state and constant `LIMIT = 10`
- UI/UX
  - Navbar with logo, hamburger menu, login/logout link/button
  - loader component shown during API fetch
  - mobile-friendly nav menu toggle

## 📁 Project Structure

- `src/App.jsx` - routing and layout
- `src/pages/Login` - login form page
- `src/pages/Dashboard` - main dashboard
- `src/components` - UI components (Navbar, SearchBar, Sorting, PostTable, Pagination, Loader, etc.)
- `src/hooks/usePosts.js` - fetch/post state logic + sort
- `src/hooks/useDebounce.js` - debounce helper
- `src/routes/PrivateRoute.jsx` - auth-protected route wrapper
- `src/constants.js` - `BASE_URL`, `LIMIT`

## 🛠️ Setup

1. Clone repository

   ```bash
   git clone <repo-url>
   cd 11_OnliestTask
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Start development server

   ```bash
   npm run dev
   ```

4. Open URL shown in terminal (usually `http://localhost:5173`)

## 📦 Production build

```bash
npm run build
npm run preview
```

## 🔧 Environment

- React 18 (via Vite template)
- Vite
- React Router DOM
- Axios
- CSS modules

## 🌐 Public API Used

This project uses the **DummyJSON Posts API**:

👉 https://dummyjson.com/posts

---

## 📌 Why This API?

The **DummyJSON API** was chosen for the following reasons:

* **Built-in Pagination Support**
  The API provides `limit` and `skip` parameters, allowing efficient server-side pagination. This reduces frontend complexity and improves performance.

* **Realistic Data Structure**
  The posts include fields like `title`, `body`, `userId`, and `views`, which closely resemble real-world applications.

* **Search Functionality**
  It supports search endpoints (e.g., `/posts/search?q=keyword`), enabling implementation of dynamic search features.

* **No Authentication Required**
  The API is completely free and does not require API keys, making it easy to integrate and test.

* **Fast & Reliable**
  Designed for frontend practice, it provides consistent and quick responses.

---

## ⚙️ How It Is Used in This Project

* Fetch posts using:

  ```
  https://dummyjson.com/posts?limit=10&skip=0
  ```

* Search posts:

  ```
  https://dummyjson.com/posts/search?q=react
  ```

* Pagination is handled using:

  * `limit` → number of items per page
  * `skip` → number of items to skip

This allows smooth implementation of:

* Pagination
* Search
* Sorting (handled on frontend)

