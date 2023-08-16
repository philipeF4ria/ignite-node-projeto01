import crypto from 'node:crypto'

import fastify from 'fastify'
import { knex } from './database'

const server = fastify()

server.get('/', async () => {
  const transactions = await knex('transactions').insert({
    id: crypto.randomUUID(),
    title: 'Transação de teste',
    amount: 1000,
  })

  return transactions
})

server
  .listen({
    port: 3333,
  })
  .then(() => console.log('Server is running'))
