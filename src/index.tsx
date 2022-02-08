import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import { App } from './App';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Desenvolvimento Front End',
          type: 'deposit',
          category: 'Dev',
          amount: 10000,
          createdAt: new Date('2021-02-08 08:00:00'),
        },
        {
          id: 2,
          title: 'Cartão de crédito',
          type: 'withdraw',
          category: 'Finanças',
          amount: 3100,
          createdAt: new Date('2021-02-23 19:00:00'),
        }
      ]
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction');
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create('transaction', data);
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);