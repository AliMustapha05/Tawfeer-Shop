# Tawfeer - Smart Grocery Shopping App

## Project Description

Tawfeer is a web-based grocery shopping application that helps users manage their shopping lists efficiently. The app provides a seamless shopping experience with product categories, search functionality, and a shopping cart system. Users can create accounts, login, and manage their shopping lists.

## Features

- Browse products by categories (Pantry Staples, Canned Foods, Drinks, Fruits & Vegetables)
- Search for specific products
- Add/remove items to shopping list
- Cart quantity management
- User authentication (Login and Sign Up)
- Responsive design for mobile and desktop
- Local storage for cart persistence and user data

## Technologies Used

- **Frontend**: ReactJS
- **Routing**: React Router DOM
- **Styling**: CSS3 (Custom styling)
- **State Management**: React Hooks (useState, useEffect, useContext)
- **Data Persistence**: Local Storage
- **Version Control**: Git & GitHub
- **Deployment**: GitHub Pages

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/AliMustapha05/Tawfeer-Shop.git
   ```

````

2. Navigate to project directory:

   ```bash
   cd tawfeer-app
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

5. Open http://localhost:3000 in your browser

### Build for Production

```bash
npm run build
```

### Deploy to GitHub Pages

```bash
npm run deploy
```

## Project Structure

```
tawfeer-app/
├── public/
│   ├── images/
│   │   ├── Products/
│   │   └── Backgrounds/
│   └── index.html
├── src/
│   ├── components/
│   ├── pages/
│   ├── context/
│   ├── styles/
│   ├── data/
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```

## Usage Guide

### Account Management

1. **Sign Up**: Create a new account with your name, email, password, phone, and address
2. **Login**: Use your email and password to access your account
3. **Logout**: Click the logout button in the header

### Shopping Features

1. **Browse Products**: View products organized by categories on the home page
2. **Search**: Use the search bar to find specific products
3. **Add to List**: Click "+ Add" button on any product (requires login)
4. **View My List**: Navigate to "My List" page to see selected items
5. **Manage List**: Adjust quantities or delete items from your list
6. **Total Price**: View the total cost of all items in your list

### Authentication Rules

- Users must be logged in to add items to their shopping list
- Users must be logged in to view the "My List" page
- New users must sign up before logging in
- User data is stored locally in your browser

## Validation Features

- Email format validation
- Password confirmation matching
- Minimum password length (6 characters)
- Required fields validation
- Unique email check for new registrations

## Course Information

- **Course**: CSCI390 Web Programming
- **Semester**: Spring 2025-2026
- **Project**: Phase 2 - React Frontend Development

## GitHub Repository

https://github.com/AliMustapha05/Tawfeer-Shop

## Live Demo

https://alimustapha05.github.io/Tawfeer-Shop

## Screenshots

View all screenshots here:
[ScreenShots](./ScreenShots)

## Team Members

- Ali Mustapha

## Contact

For any inquiries, please contact: support@tawfeer.com

```
````
