import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import auth from "./auth/index"
import dotenv from 'dotenv'; 

dotenv.config();
const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

const port = 3000
console.log(`Server is running on port ${port}`)

//routes
app.route('/auth', auth)

serve({
  fetch: app.fetch,
  port
})
