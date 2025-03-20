# Online Store

React-based e-commerce platform

## Features

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