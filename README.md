Krazy Kanban
A full-stack Kanban board application with JWT authentication for secure task management.

Description
Krazy Kanban is a comprehensive task management application that allows agile teams to visualize and track their workflows using a Kanban board interface. The application features secure authentication with JSON Web Tokens (JWT) to ensure that only authorized users can access and manage tasks.

Features
Secure user authentication with JWT
Intuitive Kanban board interface
Task creation, editing, and deletion
Task status management (To Do, In Progress, Done)
Session timeout for enhanced security
Responsive design for desktop and mobile devices
Technologies Used
Frontend: React, TypeScript, CSS
Backend: Node.js, Express.js
Database: PostgreSQL
Authentication: JWT (JSON Web Tokens)
Deployment: Render
Installation
Prerequisites
Node.js (v16 or higher)
PostgreSQL database
npm or yarn package manager
Clone the Repository

git clone https://github.com/DeenTradesCode/Krazy-Kanban.git
cd Krazy-Kanban

Install Dependencies

npm install

DB_USERNAME=your_database_username
DB_PASSWORD=your_database_password
JWT_SECRET=your_secret_key
PORT=3001

Create a PostgreSQL database for the application

Seed the Database

npm run seed
Development Mode
This will start both the server and client in development mode with hot reloading.

Production Build
npm run build
npm start

The application will be available at http://localhost:3001

Deployment
Deploying to Render
Create a new Web Service on Render
Connect your GitHub repository
Configure the following settings:
Build Command: npm run render-build
Start Command: npm start
Add environment variables in the Render dashboard
Set up a PostgreSQL database on Render
Deploy your application
# Krazy Kanban

A full-stack Kanban board application with JWT authentication for secure task management.

## Description

Krazy Kanban is a comprehensive task management application that allows agile teams to visualize and track their workflows using a Kanban board interface. The application features secure authentication with JSON Web Tokens (JWT) to ensure that only authorized users can access and manage tasks.

## Features

- Secure user authentication with JWT
- Intuitive Kanban board interface
- Task creation, editing, and deletion
- Task status management (To Do, In Progress, Done)
- Session timeout for enhanced security
- Responsive design for desktop and mobile devices

## Technologies Used

- **Frontend**: React, TypeScript, CSS
- **Backend**: Node.js, Express.js
- **Database**: PostgreSQL
- **Authentication**: JWT (JSON Web Tokens)
- **Deployment**: Render

## Installation

### Prerequisites

- Node.js (v16 or higher)
- PostgreSQL database
- npm or yarn package manager

### Clone the Repository

```bash
git clone https://github.com/DeenTradesCode/Krazy-Kanban.git
cd Krazy-Kanban
```

### Install Dependencies

```bash
npm install
```

### Environment Setup

1. Create a `.env` file in the `server` directory with the following variables:

```
DB_USERNAME=your_database_username
DB_PASSWORD=your_database_password
JWT_SECRET=your_secret_key
PORT=3001
```

2. Create a PostgreSQL database for the application

### Seed the Database

```bash
npm run seed
```

### Running the Application

#### Development Mode

```bash
npm run start:dev
```

This will start both the server and client in development mode with hot reloading.

#### Production Build

```bash
npm run build
npm start
```

The application will be available at `http://localhost:3001`

## Deployment

### Deploying to Render

1. Create a new Web Service on Render
2. Connect your GitHub repository
3. Configure the following settings:
   - Build Command: `npm run render-build`
   - Start Command: `npm start`
4. Add environment variables in the Render dashboard
5. Set up a PostgreSQL database on Render
6. Deploy your application

## Screenshots

![Kanban Board Login Page](./Assets/14-01-login-page.png)
![Kanban Board Main Interface](./Assets/14-02-main-page.png)

## Contact Information

- **Email**: Saifshihadeh1229@gmail.com
- **GitHub**: https://github.com/DeenTradesCode/Krazy-Kanban

## License

MIT License

---

© 2024 Krazy Kanban. All Rights Reserved.