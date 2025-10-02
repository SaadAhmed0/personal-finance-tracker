import { Injectable } from '@nestjs/common';
import { Transaction } from './entities/transaction.entity';
import { CreateTransactionDto, UpdateTransactionDto } from './dto/transaction.dto';

@Injectable()
export class FinanceService {
  private transactions: Transaction[] = [
    {
      id: '1',
      type: 'income',
      amount: 5000,
      description: 'Salary',
      category: 'Work',
      date: '2024-01-01',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: '2',
      type: 'expense',
      amount: 1200,
      description: 'Rent',
      category: 'Housing',
      date: '2024-01-01',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: '3',
      type: 'expense',
      amount: 300,
      description: 'Groceries',
      category: 'Food',
      date: '2024-01-02',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  ];

  create(createTransactionDto: CreateTransactionDto): Transaction {
    const transaction: Transaction = {
      ...createTransactionDto,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    this.transactions.push(transaction);
    return transaction;
  }

  findAll(): Transaction[] {
    return this.transactions;
  }

  findOne(id: string): Transaction {
    return this.transactions.find(transaction => transaction.id === id);
  }

  update(id: string, updateTransactionDto: UpdateTransactionDto): Transaction {
    const transactionIndex = this.transactions.findIndex(transaction => transaction.id === id);
    if (transactionIndex === -1) {
      return null;
    }

    this.transactions[transactionIndex] = {
      ...this.transactions[transactionIndex],
      ...updateTransactionDto,
      updatedAt: new Date().toISOString(),
    };

    return this.transactions[transactionIndex];
  }

  remove(id: string): boolean {
    const transactionIndex = this.transactions.findIndex(transaction => transaction.id === id);
    if (transactionIndex === -1) {
      return false;
    }

    this.transactions.splice(transactionIndex, 1);
    return true;
  }

  getSummary() {
    const totalIncome = this.transactions
      .filter(t => t.type === 'income')
      .reduce((sum, t) => sum + t.amount, 0);
    
    const totalExpenses = this.transactions
      .filter(t => t.type === 'expense')
      .reduce((sum, t) => sum + t.amount, 0);

    const balance = totalIncome - totalExpenses;

    const categoryBreakdown = this.transactions.reduce((acc, transaction) => {
      if (!acc[transaction.category]) {
        acc[transaction.category] = { income: 0, expense: 0 };
      }
      acc[transaction.category][transaction.type] += transaction.amount;
      return acc;
    }, {});

    return {
      totalIncome,
      totalExpenses,
      balance,
      categoryBreakdown,
      transactionCount: this.transactions.length,
    };
  }
}
