# Daily Expenses Sharing Application

## Overview

The **Daily Expenses Sharing Application** backend is a Node.js service that allows users to share and manage daily expenses using equal, exact, or percentage-based split methods. The API supports user management, expense tracking, and the generation of downloadable balance sheets.

---

## Features

- **User Management**: Add and retrieve user details (name, email, mobile number).
- **Expense Management**: 
  - Add new expenses.
  - Split expenses using:
    - **Equal Split**: Divide the expense equally among all participants.
    - **Exact Split**: Specify the exact amount each participant owes.
    - **Percentage Split**: Specify the percentage each participant owes (total percentage must equal 100%).
- **Balance Sheet**:
  - Retrieve individual expenses.
  - Retrieve overall expenses for all users.
  - Download balance sheets (future feature).

---

## Requirements

- **Node.js**: ^14.17.0
- **MongoDB**: ^4.4 (or use MongoDB Atlas for cloud-based DB)
- **NPM**: ^6.14.0

---
## Procedure to implement
- enter command 'npm install' to install all the dependencies
- start the server by 'npm start' or 'nodemon serve.js' command
- test the api by using postman or any other similar app
---

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/daily-expenses-sharing.git
   cd daily-expenses-sharing
