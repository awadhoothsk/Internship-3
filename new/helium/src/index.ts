import { serve } from '@hono/node-server'
import { Hono } from 'hono'

const app = new Hono()

// app.get('/', (c) => {
//   return c.text('Hello Hono!')
// })

// serve({
//   fetch: app.fetch,
//   port: 3000
// }, (info) => {
//   console.log(`Server is running on http://localhost:${info.port}`)
// })

const reminder = {
  id: '1',
  message: 'Hello Hono!',
  time: '2021-10-10',
  completed: false
}
app.get('/reminder', (c) => {
  return c.json(reminder, 200)  
})


app.get('/health', (c) => {
  return c.json({message:'Hello Hono!'},200)
})
serve(app);