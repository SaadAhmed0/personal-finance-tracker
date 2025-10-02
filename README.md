# Personal Finance Tracker

A modern personal finance tracking application built with NestJS backend and Next.js frontend. Track your income and expenses with a beautiful, intuitive interface.

## Features

- 📊 **Dashboard Overview**: View your financial summary with total income, expenses, and balance
- 💰 **Transaction Management**: Add, edit, and delete income and expense transactions
- 📈 **Category Breakdown**: Visualize your spending by category with interactive charts
- 🎨 **Modern UI**: Clean, responsive design built with Tailwind CSS
- 🔄 **Real-time Updates**: Instant updates when you add or modify transactions

## Tech Stack

### Backend
- **NestJS** - Progressive Node.js framework
- **TypeScript** - Type-safe JavaScript
- **REST API** - Clean API endpoints for CRUD operations

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Recharts** - Beautiful charts and data visualization
- **Lucide React** - Modern icon library

## Project Structure

```
personal-finance-tracker/
├── backend/                 # NestJS API server
│   ├── src/
│   │   ├── finance/        # Finance module
│   │   │   ├── dto/        # Data Transfer Objects
│   │   │   ├── entities/   # TypeScript interfaces
│   │   │   ├── finance.controller.ts
│   │   │   ├── finance.service.ts
│   │   │   └── finance.module.ts
│   │   ├── app.module.ts
│   │   └── main.ts
│   ├── package.json
│   └── tsconfig.json
├── frontend/               # Next.js application
│   ├── src/
│   │   ├── app/           # App Router pages
│   │   ├── components/    # React components
│   │   └── ...
│   ├── package.json
│   └── next.config.js
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd personal-finance-tracker
   ```

2. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

### Running the Application

1. **Start the backend server**
   ```bash
   cd backend
   npm run start:dev
   ```
   The backend will be available at `http://localhost:3001`

2. **Start the frontend development server**
   ```bash
   cd frontend
   npm run dev
   ```
   The frontend will be available at `http://localhost:3000`

3. **Open your browser**
   Navigate to `http://localhost:3000` to see the application

## API Endpoints

### Transactions
- `GET /finance/transactions` - Get all transactions
- `POST /finance/transactions` - Create a new transaction
- `GET /finance/transactions/:id` - Get a specific transaction
- `PATCH /finance/transactions/:id` - Update a transaction
- `DELETE /finance/transactions/:id` - Delete a transaction

### Summary
- `GET /finance/summary` - Get financial summary and statistics

## Usage

1. **Add Transactions**: Click the "Add Transaction" button to record income or expenses
2. **View Summary**: See your total income, expenses, and balance at the top of the dashboard
3. **Category Analysis**: Check the pie chart to understand your spending patterns
4. **Edit/Delete**: Use the edit and delete buttons on each transaction to manage your records

## Sample Data

The application comes with sample data to help you get started:
- Sample income transactions (salary, freelance work)
- Sample expense transactions (rent, groceries, etc.)

## Development

### Backend Development
```bash
cd backend
npm run start:dev    # Start with hot reload
npm run build        # Build for production
npm run start:prod   # Start production build
```

### Frontend Development
```bash
cd frontend
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Future Enhancements

- [ ] User authentication and multi-user support
- [ ] Database integration (PostgreSQL/MongoDB)
- [ ] Budget tracking and alerts
- [ ] Export functionality (CSV, PDF)
- [ ] Mobile app (React Native)
- [ ] Recurring transactions
- [ ] Investment tracking
- [ ] Bill reminders

## Support

If you have any questions or need help, please open an issue on GitHub.
