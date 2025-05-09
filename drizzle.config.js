// This file is used to configure drizzle-kit, a tool for generating TypeScript types and migrations for your database schema.
import { defineConfig } from 'drizzle-kit'
/** @type {import("drizzle-kit").Config} */

export default defineConfig({
  schema: "./utils/schema.js",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://interview-db_owner:npg_6ZkmUXLEo5cz@ep-floral-silence-a45r8fy8.us-east-1.aws.neon.tech/interview-db?sslmode=require",
  }
})

