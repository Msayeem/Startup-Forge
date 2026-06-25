# 🚀 Startup-Forge

**StartupForge** is a role-based startup team building platform where founders can transform ideas into reality by connecting with talented collaborators. The platform bridges the gap between startup founders and professionals such as developers, designers, marketers, and other contributors looking to join exciting startup ventures.

🌐 **Live Demo:** https://startup-forge-gules.vercel.app

---

## 📖 Project Overview

Building a startup is difficult without the right team. StartupForge helps founders find skilled collaborators while giving professionals a place to discover and join promising startup projects.

The platform supports multiple user roles with dedicated dashboards and permissions, creating a complete ecosystem for startup team formation and management.

---

## ✨ Main Features

### 👨‍💼 Founder Features

* Create and manage startup profiles
* Publish startup ideas and opportunities
* Post team requirements
* Review collaborator applications
* Accept or reject applicants
* Manage startup teams

### 👨‍💻 Collaborator Features

* Browse available startup opportunities
* Apply to join startup teams
* Track application status
* Build and maintain professional profiles
* Showcase skills and expertise

### 🛡️ Admin Features

* Manage platform users
* Moderate startup listings
* Monitor platform activities
* Manage transactions
* Maintain platform integrity

## 🔑 Demo Credentials

To help recruiters and visitors explore the platform without creating accounts, a demo admin account is available.

### Admin Account

**Email:** admin@gmail.com
**Password:** 1234567A

> Note: This account is provided for demonstration purposes only.


### 💳 Payment Integration

* Secure payment processing using Stripe
* Subscription and transaction management

### 🔐 Authentication & Authorization

* Role-based access control
* Protected routes and dashboards
* Secure user authentication

---

## 🏗️ System Roles

| Role         | Responsibilities                                              |
| ------------ | ------------------------------------------------------------- |
| Founder      | Create startups, recruit team members, manage applications    |
| Collaborator | Explore startups, apply to teams, track applications          |
| Admin        | Manage users, startups, transactions, and platform moderation |

---

## 🛠️ Tech Stack

### Frontend

* Next.js
* React.js
* Tailwind CSS
* HeroUI

### Backend

* Node.js
* Express.js

### Database

* MongoDB

### Authentication

* Role-Based Authorization
* Better Auth
* JWT (Json Web Token)

### Payments

* Stripe

### Deployment

* Vercel

---

## 📂 Project Structure

```bash
startupforge/
│
├── client/         # Frontend (Next.js)
├── server/         # Backend (Node.js + Express)
├── public/
├── components/
├── lib/
├── models/
├── routes/
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have installed:

* Node.js
* npm or yarn
* MongoDB

---

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/startupforge.git

cd startupforge
```

---

### 2️⃣ Install Dependencies

```bash
npm install
```

---

### 3️⃣ Configure Environment Variables

Create a `.env.local` file in the root directory and add:

```env
MONGODB_URI=your_mongodb_connection_string

STRIPE_SECRET_KEY=your_stripe_secret_key

NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_publishable_key

AUTH_SECRET=your_auth_secret

AUTH_URL=http://localhost:3000
```

Add any additional environment variables required by your project.

---

### 4️⃣ Run the Development Server

```bash
npm run dev
```

Open:

```bash
http://localhost:3000
```

---

## 🎯 Key Highlights

* Full Stack Web Application
* Role-Based Access Control (RBAC)
* Founder, Collaborator & Admin Dashboards
* Startup Recruitment Workflow
* Stripe Payment Integration
* MongoDB Database Management
* Modern Responsive UI
* Secure Authentication & Authorization

---

## 📸 Screenshots

Add screenshots of:

* Landing Page
* Founder Dashboard
* Collaborator Dashboard
* Admin Dashboard
* Startup Details Page

---

## 🔮 Future Improvements

* Real-time messaging system
* Team collaboration workspace
* Startup analytics dashboard
* AI-powered collaborator matching
* Email notifications
* Advanced search and filtering

---

## 👨‍💻 Author

Built with passion using Next.js, Node.js, Express.js, MongoDB, Stripe, Tailwind CSS, and HeroUI.

If you like this project, consider giving it a ⭐ on GitHub!
