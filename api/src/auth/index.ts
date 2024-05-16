import { Hono } from 'hono'

const app = new Hono()
app.get('/', (c) => c.json('Authentication Endpoint'))



export default app