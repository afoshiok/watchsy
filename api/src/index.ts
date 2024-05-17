import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import auth from "./auth/index"
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()

//test
const user_data = {
  email: "777@email.com",
  name: "bob"
}

dotenv.config();
const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

//test
app.post('/prisma', async (c) => {
  const new_user = await prisma.user.create({
    data: user_data
  })

  return c.json(user_data)
})

const port = 3000
console.log(`Server is running on port ${port}`)

//routes
app.route('/auth', auth)

serve({
  fetch: app.fetch,
  port
})
