# Online Store

React-based e-commerce SPA application

## Features

### Public Part & Authentication
- Guests can browse the catalog, view product details, and register as customers.
- Registered users gain access to additional functionalities based on their roles.

### User Roles & Permissions
- Customers: Add products to the cart, place orders, and view order history.
- Store Managers: Manage products by creating, updating, deleting, and adjusting stock levels.
- Admins: Full access, including complete CRUD operations on products and employee account management.
- Suppliers: (Functionality to be implemented in future updates).

## Technologies Used
- Frontend: React 19
- Backend: Express.js
- Database: MongoDB
- Authentication: Cookie-based JWT authentication

## Requirements
- MongoDB

## Installation

### Server
1. Download the database with pre-filled data: [Online Store Database](https://drive.google.com/file/d/18SxqKnrN6UywM2v1I8LVOpCmG5L609Nw/view?usp=sharing)
2. Attach the database to your mongodb://localhost:27017/online-store

<details>
  <summary>How to attach mongoDB database</summary>

  - Unzip the database
  - Open Command Prompt
  - run the following command: `mongorestore --db online-store <path_to_database>`
  - example: `mongorestore --db online-store D:\Projects\dbs\online-store`
</details>

3. Install server dependencies: `npm install`
4. Run the server `npm start`

### Client
1. Install client dependencies `npm install`
2. Run the client `npm run dev`
3. Navigate to http://localhost:5100/ in your browser