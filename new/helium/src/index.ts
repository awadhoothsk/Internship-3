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

// const reminder = {
//   id: '1',
//   message: 'Hello Hono!',
//   time: '2021-10-10',
//   completed: false
// }
// app.get('/reminder', (c) => {
//   return c.json(reminder, 200)  
// })


app.get('/random', (context) => {
  let random = Math.floor(Math.random() * 100)
  return context.json({ random }, 200)  
})

app.get('/time', (context) => {
  return context.json({ time: new Date().toISOString() }, 200)
})
app.get('/enviroment', (context) => {
  return context.json({ env: process.env.NODE_ENV }, 200)
})
serve(app);