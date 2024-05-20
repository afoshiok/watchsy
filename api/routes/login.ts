import { Hono } from "hono";
import { clerkMiddleware, getAuth } from "@hono/clerk-auth";

// creates a Hono instance
const app = new Hono()

// assigns Clerk's middleware to all login routes
app.use('*', clerkMiddleware())

// defines a GET route that sends the login page
app.get('/', (c) => c.json('Login Page'))

// defines a POST route that 
app.post('/', (c) => c.json('Response'))

export default app