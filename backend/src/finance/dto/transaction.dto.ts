export class CreateTransactionDto {
  id: string;
  type: 'income' | 'expense';
  amount: number;
  description: string;
  category: string;
  date: string;
}

export class UpdateTransactionDto {
  type?: 'income' | 'expense';
  amount?: number;
  description?: string;
  category?: string;
  date?: string;
}
