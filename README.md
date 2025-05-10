# 🎤 AI Mock Interview Platform

A full-stack AI-powered platform that generates personalized technical interview questions based on your job role, tech stack, and experience. Built with **Next.js**, **React**, and **Gemini AI**, this project simulates realistic mock interview sessions — helping you prepare smarter and faster.

---

## ✨ Features

- 🔮 **Gemini AI Integration** – Generates tailored interview questions with expected answers
- 💬 **Dynamic Form Interface** – Users input role, tech stack, and experience
- 🔐 **Clerk Authentication** – Secure sign-in and protected routes
- 💻 **Next.js App Router** – Server-rendered and client-side hybrid routing
- 🧠 **JSON Response Parser** – Cleanly parses and formats Gemini’s AI response
- 🎨 **Modular UI Components** – Built with Tailwind CSS 


---

## 🚀 Tech Stack

| Frontend              | Backend               | Utilities              |
|-----------------------|-----------------------|------------------------|
| Next.js 14 (App Router) | Node.js (API Routes)   | Drizzle ORM            |
| React.js              | Gemini AI (Google GenAI) | Clerk (Auth)           |
| Tailwind CSS          |                          |    |
           

---

## 🛠️ Local Setup

### 1. Clone the repo

```bash
git clone https://github.com/your-username/mock-interview-site.git
cd mock-interview-site
```
### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment
Create a .env.local file in the root:

```bash
NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_api_key_here
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
```

### 4. Run the app locally
```bash
npm run dev
```

## Project Structure
```bash
├── app/                # Pages & layouts (App Router)
├── components/         # Reusable UI components
├── utils/              # Helper functions (e.g., geminiAi.js)
├── lib/                # Drizzle config, DB utils
├── public/             # Static assets
├── styles/             # Tailwind & global styles
├── drizzle.config.js   # Drizzle ORM setup
├── middleware.js       # Route protection with Clerk
```

## 🙋‍♀️ Author
**Hir Desai**  
💼 [LinkedIn](https://www.linkedin.com/in/desaihir/)  
💻 [Portfolio](https://desaihir.framer.website/)
