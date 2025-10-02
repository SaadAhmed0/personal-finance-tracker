import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FinanceService } from './finance.service';
import { CreateTransactionDto, UpdateTransactionDto } from './dto/transaction.dto';

@Controller('finance')
export class FinanceController {
  constructor(private readonly financeService: FinanceService) {}

  @Post('transactions')
  create(@Body() createTransactionDto: CreateTransactionDto) {
    return this.financeService.create(createTransactionDto);
  }

  @Get('transactions')
  findAll() {
    return this.financeService.findAll();
  }

  @Get('transactions/:id')
  findOne(@Param('id') id: string) {
    return this.financeService.findOne(id);
  }

  @Patch('transactions/:id')
  update(@Param('id') id: string, @Body() updateTransactionDto: UpdateTransactionDto) {
    return this.financeService.update(id, updateTransactionDto);
  }

  @Delete('transactions/:id')
  remove(@Param('id') id: string) {
    return this.financeService.remove(id);
  }

  @Get('summary')
  getSummary() {
    return this.financeService.getSummary();
  }
}
