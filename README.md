# Book List App

A responsive Angular app that fetches and displays books related to "Fouling" using the Google Books API.

## Features

- Fetches books from the Google Books API
- Responsive design (mobile, desktop, large screens)
- Book list and book detail pages with routing
- Loading and error state handling
- Accessible UI with ARIA attributes
- Unit tests for components and services

## Getting Started

1. **Install dependencies:**

   ```sh
   npm install
   ```

2. **Run the development server:**

   ```sh
   ng serve
   ```

   Open [http://localhost:4200](http://localhost:4200) in your browser.

3. **Run tests:**
   ```sh
   ng test
   ```

## Project Structure

- `src/app/components/book-list` – Book list UI
- `src/app/components/book-detail` – Book detail UI
- `src/app/services/google-book.service.ts` – API service
- `src/app/models/google-api.interface.ts` – API models
- `src/app/app.routes.ts` – Routing configuration

## API Reference

- [Google Books API](https://www.googleapis.com/books/v1/volumes?q=fouling)

---
