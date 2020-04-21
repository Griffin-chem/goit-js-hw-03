"use strict"
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};
/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    const currentTransaction = {
      id: this.transactions.length+1,
      amount,
      type
    }
    return currentTransaction
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    this.transactions.push(this.createTransaction(amount, Transaction.DEPOSIT))
    this.balance += amount
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    if (amount > this.balance) {
      alert('Недостаточно средств на счету. Операция невозможна')
    }
    else {
      this.transactions.push(this.createTransaction(amount, Transaction.WITHDRAW))
      this.balance -= amount
    }
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return this.balance
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    let requestedTransaction = {}
    for (const transaction of this.transactions) {
      if (transaction.id === Number(id)) {
        requestedTransaction = transaction
      }
    }
    return requestedTransaction
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let transactionTypeTotal = 0
    for (const transaction of this.transactions) {
      if (transaction.type === type) {
        transactionTypeTotal += transaction.amount
      }
    }
    return transactionTypeTotal
    },
};